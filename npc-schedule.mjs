/**
 * NPC schedule runner for Promptstock.
 *
 * Schedule tags on FEATURED_NPCS / CROWD_GROUPS map to simple go/linger
 * behaviors. Featured kit actors lerp via FestivalReactions home poses;
 * background crowd groups share one phase and update a few instanced
 * transforms (no per-frame pathfinding across ~73 guests).
 *
 * Concert migration owns seating — this runner pauses while the concert
 * is active (FestivalPlay.ambient returns early).
 */

import {
  LOCATION_KEYS,
  FEATURED_NPCS,
  CROWD_GROUPS,
  SCHEDULE_TAGS,
  npcHomePosition,
  getNpc,
} from './festival-npcs.mjs';
import * as THREE from 'three';

/** Tags the runner cycles through between concerts. Event-only tags are skipped. */
export const CYCLE_SKIP = Object.freeze(new Set(['concert_seat', 'cheer']));

/**
 * Tag → behavior blueprint.
 * `location` is a LOCATION_KEYS id, or null to use the NPC's home / location.
 * @type {Readonly<Record<string, {
 *   location: string|null,
 *   linger: number,
 *   face?: 'stage'|'inward'|'home'|null,
 *   note: string,
 * }>>}
 */
export const TAG_BEHAVIORS = Object.freeze({
  stay_home: Object.freeze({
    location: null,
    linger: 16,
    face: 'home',
    note: 'Remain near kit/home pose.',
  }),
  repair_assist: Object.freeze({
    location: 'reboot_clinic',
    linger: 20,
    face: 'home',
    note: 'Hold near the reboot clinic.',
  }),
  watch_stage: Object.freeze({
    location: 'festival_stage',
    linger: 22,
    face: 'stage',
    note: 'Walk to the stage apron and face the stage.',
  }),
  visit_food_stall: Object.freeze({
    location: 'picnic_west',
    linger: 18,
    face: null,
    note: 'Wander toward picnic / snack clusters.',
  }),
  talk_with_friends: Object.freeze({
    location: null,
    linger: 20,
    face: 'inward',
    note: 'Gather at the home/location cluster and face inward.',
  }),
  concert_seat: Object.freeze({
    location: 'festival_stage',
    linger: 0,
    face: 'stage',
    note: 'Owned by FestivalConcert — skipped in free-roam cycles.',
  }),
  cheer: Object.freeze({
    location: null,
    linger: 0,
    face: null,
    note: 'Owned by FestivalReactions celebrate — not a walk tag.',
  }),
});

/** @param {readonly string[]} schedule */
export function cycleTags(schedule) {
  if (!Array.isArray(schedule)) return [];
  return schedule.filter((tag) => SCHEDULE_TAGS[tag] && !CYCLE_SKIP.has(tag));
}

/**
 * Pick a food-stall location by NPC home side when the generic picnic tag is used.
 * @param {object} npc
 * @param {string|null} locationKey
 */
export function resolveLocationKey(npc, locationKey) {
  if (locationKey === 'picnic_west' || locationKey === 'picnic_east') {
    const home = npcHomePosition(npc);
    if (home && home[0] >= 0) return 'picnic_east';
    return 'picnic_west';
  }
  if (locationKey && LOCATION_KEYS[locationKey]) return locationKey;
  if (npc?.location && LOCATION_KEYS[npc.location]) return npc.location;
  return null;
}

/**
 * World target for a schedule tag.
 * @returns {{tag:string, location:string|null, position:[number,number,number], yaw:number, linger:number}}
 */
export function resolveTagTarget(tag, npc, { cluster = null } = {}) {
  const behavior = TAG_BEHAVIORS[tag] || TAG_BEHAVIORS.stay_home;
  const locKey = resolveLocationKey(npc, behavior.location);
  const home = npcHomePosition(npc) || (cluster ? [cluster[0], 0, cluster[1]] : [0, 0, 0]);
  let position;
  if (tag === 'stay_home') {
    position = cluster ? [cluster[0], 0, cluster[1]] : [...home];
  } else if (tag === 'repair_assist') {
    position = [...home];
  } else if (tag === 'talk_with_friends') {
    position = cluster
      ? [cluster[0], 0, cluster[1]]
      : (locKey && LOCATION_KEYS[locKey]?.approx ? [...LOCATION_KEYS[locKey].approx] : [...home]);
  } else if (locKey && LOCATION_KEYS[locKey]?.approx) {
    position = [...LOCATION_KEYS[locKey].approx];
  } else if (cluster) {
    position = [cluster[0], 0, cluster[1]];
  } else {
    position = [...home];
  }

  // Slight deterministic offset so featured NPCs don't stack on the same approx point.
  const salt = hashId(npc?.id || 'x');
  if (tag === 'watch_stage') {
    position[0] += ((salt % 7) - 3) * 0.55;
    position[2] += ((salt % 5) - 2) * 0.35;
  } else if (tag === 'visit_food_stall') {
    position[0] += ((salt % 5) - 2) * 0.7;
    position[2] += ((salt % 3) - 1) * 0.55;
  } else if (tag === 'talk_with_friends') {
    position[0] += ((salt % 3) - 1) * 0.45;
    position[2] += ((salt % 3) - 1) * 0.45;
  }

  let yaw = typeof npc?.rotation === 'number' ? npc.rotation : 0;
  if (behavior.face === 'stage') {
    const stage = LOCATION_KEYS.stage?.approx || [0, 0, -28];
    yaw = Math.atan2(stage[0] - position[0], stage[2] - position[2]);
  } else if (behavior.face === 'inward') {
    const center = locKey && LOCATION_KEYS[locKey]?.approx
      ? LOCATION_KEYS[locKey].approx
      : home;
    yaw = Math.atan2(center[0] - position[0], center[2] - position[2]);
  } else if (behavior.face === 'home' && typeof npc?.rotation === 'number') {
    yaw = npc.rotation;
  }

  return {
    tag,
    location: locKey,
    position: [position[0], position[1] ?? 0, position[2]],
    yaw,
    linger: behavior.linger,
  };
}

function hashId(id) {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function lerpAngle(a, b, t) {
  let d = ((b - a + Math.PI) % (Math.PI * 2)) - Math.PI;
  if (d < -Math.PI) d += Math.PI * 2;
  return a + d * t;
}

/**
 * Pure schedule state machine for one actor (featured or crowd group).
 */
export function createActorState(npc, { cluster = null, phaseOffset = 0 } = {}) {
  const tags = cycleTags(npc.schedule || ['stay_home']);
  const safeTags = tags.length ? tags : ['stay_home'];
  const index = phaseOffset % safeTags.length;
  const target = resolveTagTarget(safeTags[index], npc, { cluster });
  const home = npcHomePosition(npc) || target.position;
  return {
    id: npc.id,
    kitId: npc.kitId || null,
    background: !!npc.background,
    tags: [...safeTags],
    index,
    elapsed: 0,
    lingering: false,
    x: home[0],
    y: home[1] ?? 0,
    z: home[2],
    yaw: typeof npc.rotation === 'number' ? npc.rotation : target.yaw,
    target,
    cluster: cluster ? [cluster[0], cluster[1]] : null,
    overrides: null,
  };
}

/**
 * Advance one actor by dt seconds. Mutates state.
 * @returns {object} state
 */
export function tickActor(state, dt, { walkSpeed = 1.35, snap = false } = {}) {
  if (!state?.target) return state;
  const target = state.target;
  const dx = target.position[0] - state.x;
  const dz = target.position[2] - state.z;
  const dist = Math.hypot(dx, dz);

  if (!state.lingering && dist > 0.1) {
    if (snap) {
      state.x = target.position[0];
      state.y = target.position[1] ?? 0;
      state.z = target.position[2];
      state.yaw = target.yaw;
      state.lingering = true;
      state.elapsed = 0;
      return state;
    }
    const step = Math.min(dist, Math.max(0, dt) * walkSpeed);
    const inv = 1 / dist;
    state.x += dx * inv * step;
    state.z += dz * inv * step;
    state.yaw = lerpAngle(state.yaw, Math.atan2(dx, dz), Math.min(1, dt * 4));
    return state;
  }

  if (!state.lingering) {
    state.x = target.position[0];
    state.z = target.position[2];
    state.yaw = target.yaw;
    state.lingering = true;
    state.elapsed = 0;
  }

  state.elapsed += Math.max(0, dt);
  if (state.elapsed >= target.linger) {
    advanceActor(state);
  }
  return state;
}

/** Force the next schedule tag (wraps). */
export function advanceActor(state) {
  if (!state?.tags?.length) return state;
  state.index = (state.index + 1) % state.tags.length;
  const npc = {
    id: state.id,
    kitId: state.kitId,
    location: state.target?.location || 'activity_lawn',
    home: [state.x, state.y, state.z],
    rotation: state.yaw,
    schedule: state.tags,
  };
  // Prefer registry definition for location / home when available.
  const reg = getNpc(state.id);
  if (reg) {
    npc.location = reg.location;
    if (reg.home) npc.home = [...reg.home];
    if (typeof reg.rotation === 'number') npc.rotation = reg.rotation;
  }
  if (state.overrides?.length) npc.schedule = state.overrides;
  state.tags = cycleTags(npc.schedule);
  if (!state.tags.length) state.tags = ['stay_home'];
  state.index = state.index % state.tags.length;
  state.target = resolveTagTarget(state.tags[state.index], npc, {
    cluster: state.cluster,
  });
  state.lingering = false;
  state.elapsed = 0;
  return state;
}

/**
 * Runtime runner: featured actors + shared-phase crowd groups.
 */
export class NpcScheduleRunner {
  /**
   * @param {{
   *   featured?: readonly object[],
   *   groups?: readonly object[],
   *   walkSpeed?: number,
   *   reduced?: boolean,
   * }} [opts]
   */
  constructor(opts = {}) {
    this.walkSpeed = opts.walkSpeed ?? 1.35;
    this.reduced = !!opts.reduced;
    this.paused = false;
    this.actors = new Map();
    this.crowdBindings = []; // {groupId, entries:[{mesh,index,ox,oz,scale}]}
    this._tmpMatrix = null;
    this._tmpPos = null;
    this._tmpQuat = null;
    this._tmpScale = null;
    this._tmpAxis = null;

    const featured = opts.featured ?? FEATURED_NPCS;
    const groups = opts.groups ?? CROWD_GROUPS;

    featured.forEach((npc, i) => {
      // Player / animal / companion stay put for gameplay systems.
      if (npc.role === 'player' || npc.role === 'animal' || npc.role === 'companion') {
        const st = createActorState(npc, { phaseOffset: 0 });
        st.tags = ['stay_home'];
        st.index = 0;
        st.target = resolveTagTarget('stay_home', npc);
        this.actors.set(npc.id, st);
        if (npc.kitId) this.actors.set(npc.kitId, st);
        return;
      }
      const st = createActorState(npc, { phaseOffset: i });
      this.actors.set(npc.id, st);
      if (npc.kitId) this.actors.set(npc.kitId, st);
    });

    groups.forEach((group, i) => {
      const st = createActorState(group, {
        cluster: group.cluster,
        phaseOffset: i * 2,
      });
      // Start at cluster center.
      st.x = group.cluster[0];
      st.z = group.cluster[1];
      this.actors.set(group.id, st);
    });
  }

  pause(v = true) {
    this.paused = !!v;
  }

  /** @param {string} id friendly or kit id */
  getState(id) {
    const st = this.actors.get(id);
    if (!st) return null;
    return {
      id: st.id,
      kitId: st.kitId,
      tag: st.target?.tag ?? null,
      location: st.target?.location ?? null,
      index: st.index,
      tags: [...st.tags],
      lingering: st.lingering,
      elapsed: st.elapsed,
      position: [st.x, st.y, st.z],
      yaw: st.yaw,
      background: st.background,
    };
  }

  /**
   * Override schedule tags for an NPC / group (debug).
   * @param {string} id
   * @param {string[]} tags
   */
  setNpcSchedule(id, tags) {
    const st = this.actors.get(id);
    if (!st) throw new Error(`Unknown schedule actor "${id}"`);
    if (!Array.isArray(tags) || !tags.length) {
      throw new Error('setNpcSchedule expects a non-empty tags array');
    }
    for (const tag of tags) {
      if (!SCHEDULE_TAGS[tag]) throw new Error(`Unknown schedule tag "${tag}"`);
    }
    st.overrides = [...tags];
    st.tags = cycleTags(tags);
    if (!st.tags.length) st.tags = ['stay_home'];
    st.index = 0;
    const reg = getNpc(st.id) || { id: st.id, location: 'activity_lawn', home: [st.x, st.y, st.z] };
    st.target = resolveTagTarget(st.tags[0], {
      ...reg,
      home: reg.home || [st.x, st.y, st.z],
      schedule: st.tags,
    }, { cluster: st.cluster });
    st.lingering = false;
    st.elapsed = 0;
    return this.getState(st.id);
  }

  /** Advance one actor, or every actor when id omitted. */
  advanceSchedule(id) {
    if (id != null && id !== '') {
      const st = this.actors.get(id);
      if (!st) throw new Error(`Unknown schedule actor "${id}"`);
      advanceActor(st);
      return this.getState(st.id);
    }
    const seen = new Set();
    for (const st of this.actors.values()) {
      if (seen.has(st.id)) continue;
      seen.add(st.id);
      advanceActor(st);
    }
    return [...seen].map((sid) => this.getState(sid));
  }

  /** Tick all unique actors. */
  tick(dt) {
    if (this.paused) return;
    const seen = new Set();
    const snap = this.reduced;
    for (const st of this.actors.values()) {
      if (seen.has(st.id)) continue;
      seen.add(st.id);
      tickActor(st, dt, { walkSpeed: this.walkSpeed, snap });
    }
  }

  /**
   * Push featured actor poses into FestivalReactions guest homes.
   * Reactions copies g.p → o.position each frame.
   */
  applyToReactions(reactions) {
    if (!reactions?.guests || this.paused) return;
    for (const g of reactions.guests) {
      const id = g.o?.name;
      const st = id ? this.actors.get(id) : null;
      if (!st || st.background) continue;
      g.p.set(st.x, st.y, st.z);
      g.rotation = st.yaw;
    }
  }

  /**
   * Bind background crowd instances to CROWD_GROUPS by nearest cluster.
   * Dedupes material-batch duplicates that share a world position so each
   * logical guest moves as one. Call once after JamKit.instanceCrowd.
   */
  bindCrowd(kit, groups = CROWD_GROUPS) {
    if (!kit?.group) return 0;
    const m = new THREE.Matrix4();
    const pos = new THREE.Vector3();
    const quat = new THREE.Quaternion();
    const scl = new THREE.Vector3();
    /** @type {Map<string, {x:number,z:number,parts:Array<{mesh:object,index:number,scale:number}>}>} */
    const people = new Map();
    kit.group.traverse((o) => {
      if (!o.isInstancedMesh || !o.name?.startsWith('Festival guests')) return;
      for (let i = 0; i < o.count; i++) {
        o.getMatrixAt(i, m);
        m.decompose(pos, quat, scl);
        const key = `${Math.round(pos.x * 20) / 20},${Math.round(pos.z * 20) / 20}`;
        let person = people.get(key);
        if (!person) {
          person = { x: pos.x, z: pos.z, parts: [] };
          people.set(key, person);
        }
        person.parts.push({ mesh: o, index: i, scale: scl.x || 1 });
      }
    });

    const pool = [...people.values()];
    this.crowdBindings = [];
    const used = new Set();
    for (const group of groups) {
      const [cx, cz] = group.cluster;
      const want = group.groupSize || 4;
      const candidates = pool
        .map((p, pi) => ({ p, pi, d: Math.hypot(p.x - cx, p.z - cz) }))
        .filter((c) => !used.has(c.pi) && c.d < 5.5)
        .sort((a, b) => a.d - b.d)
        .slice(0, want);
      for (const c of candidates) used.add(c.pi);
      const entries = [];
      for (const { p } of candidates) {
        const ox = p.x - cx;
        const oz = p.z - cz;
        for (const part of p.parts) {
          entries.push({
            mesh: part.mesh,
            index: part.index,
            ox,
            oz,
            scale: part.scale,
          });
        }
      }
      this.crowdBindings.push({ groupId: group.id, entries });
    }
    return used.size;
  }

  /**
   * Write shared-phase group positions into bound instanced meshes.
   * Cheap: only touches groupSize guests × material parts, not all 73.
   */
  applyToCrowd() {
    if (this.paused || !this.crowdBindings.length) return;
    for (const binding of this.crowdBindings) {
      const st = this.actors.get(binding.groupId);
      if (!st) continue;
      const yaw = st.yaw;
      const cos = Math.cos(yaw);
      const sin = Math.sin(yaw);
      const touched = new Set();
      for (const entry of binding.entries) {
        const x = st.x + entry.ox;
        const z = st.z + entry.oz;
        const s = entry.scale;
        const e = entry.mesh.instanceMatrix.array;
        const o = entry.index * 16;
        e[o] = cos * s; e[o + 1] = 0; e[o + 2] = -sin * s; e[o + 3] = 0;
        e[o + 4] = 0; e[o + 5] = s; e[o + 6] = 0; e[o + 7] = 0;
        e[o + 8] = sin * s; e[o + 9] = 0; e[o + 10] = cos * s; e[o + 11] = 0;
        e[o + 12] = x; e[o + 13] = 0; e[o + 14] = z; e[o + 15] = 1;
        touched.add(entry.mesh);
      }
      for (const mesh of touched) mesh.instanceMatrix.needsUpdate = true;
    }
  }
}

export default {
  TAG_BEHAVIORS,
  CYCLE_SKIP,
  cycleTags,
  resolveLocationKey,
  resolveTagTarget,
  createActorState,
  tickActor,
  advanceActor,
  NpcScheduleRunner,
};
