/**
 * Data-driven NPC registry for Promptstock.
 *
 * How to add an NPC
 * -----------------
 * 1. Append a definition to FEATURED_NPCS (named companions) or CROWD_GROUPS
 *    (instanced background clusters). Keep `id` unique across both lists.
 * 2. Featured companions that already have a kit placement should set `kitId`
 *    to the layout.json / JamKit instance id (e.g. guest_0). New kit-backed
 *    actors also need a placement in assets/models/layout.json (or a runtime
 *    kit.place in festival-reactions for helpers).
 * 3. Set `location` to a key in LOCATION_KEYS (map destinations or festival
 *    spots). Optional `home: [x, y, z]` overrides for debug teleport.
 * 4. `schedule` is a list of tags from SCHEDULE_TAGS. Today only
 *    stay_home / concert_seat / repair_assist / cheer are live; the rest are
 *    documented stubs for a follow-up schedule runner.
 * 5. Mark `concertReserved: true` to claim a FEATURED_SEATS slot (order =
 *    registry order among reserved NPCs). Keep that count ≤ FEATURED_SEATS.
 * 6. Run `npm test` — schema, unique ids, schedule tags, and concert seat
 *    reservation are covered in tests/festival-npcs.test.cjs.
 *
 * Live vs stubbed
 * ---------------
 * Live: home/kit binding, concert reserved seats, repair-helper spawn homes,
 *       reaction guest list, background cluster → EXTRA_FESTIVAL_GUESTS,
 *       gameDebug listNpcs / getNpc / focusNpc.
 * Stub: watch_stage / visit_food_stall / talk_with_friends autonomous walks
 *       (TODO: schedule executor that lerps toward location targets).
 */

/** @typedef {'musician'|'steward'|'companion'|'player'|'animal'|'festivalgoer'|'band'} NpcRole */

/**
 * Known location keys. Prefer map destination ids from festival-map-data when
 * they exist; otherwise use these festival-specific spots.
 * @type {Readonly<Record<string, {label:string, spot?:string, approx?:readonly [number,number,number]}>>}
 */
export const LOCATION_KEYS = Object.freeze({
  festival_stage: Object.freeze({ label: 'Lakeside Stage apron', spot: 'stage', approx: Object.freeze([0, 0, -16]) }),
  stage: Object.freeze({ label: 'Lakeside Stage', spot: 'stage', approx: Object.freeze([0, 0, -28]) }),
  reboot_clinic: Object.freeze({ label: 'The Reboot Clinic', spot: 'aid', approx: Object.freeze([15.3, 0, 2.05]) }),
  meadow: Object.freeze({ label: 'Kick meadow', spot: 'kick', approx: Object.freeze([-4.2, 0, 24]) }),
  dog_lawn: Object.freeze({ label: 'Goodest guest lawn', spot: 'dog', approx: Object.freeze([-10, 0, 26]) }),
  activity_lawn: Object.freeze({ label: 'Central activity lawn', approx: Object.freeze([0, 0, -8]) }),
  picnic_west: Object.freeze({ label: 'West picnic clusters', approx: Object.freeze([-12, 0, 10]) }),
  picnic_east: Object.freeze({ label: 'East picnic clusters', approx: Object.freeze([12, 0, 11]) }),
  north_grove: Object.freeze({ label: 'North grove edge', approx: Object.freeze([-28, 0, 4]) }),
  south_path: Object.freeze({ label: 'South path gatherings', approx: Object.freeze([0, 0, -22]) }),
});

/**
 * Schedule tag catalog. `live: true` means existing systems already honor it.
 * @type {Readonly<Record<string, {live:boolean, note:string}>>}
 */
export const SCHEDULE_TAGS = Object.freeze({
  stay_home: Object.freeze({
    live: true,
    note: 'Remain at kit/home pose until concert or another live event.',
  }),
  concert_seat: Object.freeze({
    live: true,
    note: 'FestivalConcert.open seats featured NPCs into FEATURED_SEATS by registry order.',
  }),
  repair_assist: Object.freeze({
    live: true,
    note: 'Spawn beside the reboot clinic (FestivalReactions kit.place).',
  }),
  cheer: Object.freeze({
    live: true,
    note: 'FestivalReactions celebrate / dance poses on success events.',
  }),
  watch_stage: Object.freeze({
    live: false,
    note: 'TODO: walk toward festival_stage / stage apron outside concert.',
  }),
  visit_food_stall: Object.freeze({
    live: false,
    note: 'TODO: wander toward picnic tables / snack props.',
  }),
  talk_with_friends: Object.freeze({
    live: false,
    note: 'TODO: face cluster mates and hold talk/listen pose.',
  }),
});

/** @typedef {{
 *   id: string,
 *   role: NpcRole | string,
 *   location: string,
 *   schedule: readonly string[],
 *   name?: string,
 *   kitId?: string,
 *   home?: readonly [number, number, number],
 *   rotation?: number,
 *   featured?: boolean,
 *   concertReserved?: boolean,
 *   background?: boolean,
 *   asset?: string,
 *   interactive?: string,
 * }} NpcDef */

/** Named featured companions (kit-backed). Order of concertReserved entries = seat order. */
export const FEATURED_NPCS = Object.freeze([
  Object.freeze({
    id: 'maya',
    name: 'Maya',
    role: 'musician',
    location: 'festival_stage',
    kitId: 'guest_0',
    home: Object.freeze([-7, 0, -14]),
    rotation: -0.8,
    asset: 'crowd_1',
    featured: true,
    concertReserved: true,
    schedule: Object.freeze(['stay_home', 'watch_stage', 'concert_seat', 'cheer']),
  }),
  Object.freeze({
    id: 'rio',
    name: 'Rio',
    role: 'musician',
    location: 'festival_stage',
    kitId: 'guest_1',
    home: Object.freeze([-4.3, 0, -16]),
    rotation: -0.4,
    asset: 'crowd_2',
    featured: true,
    concertReserved: true,
    schedule: Object.freeze(['stay_home', 'talk_with_friends', 'concert_seat', 'cheer']),
  }),
  Object.freeze({
    id: 'sol',
    name: 'Sol',
    role: 'festivalgoer',
    location: 'festival_stage',
    kitId: 'guest_2',
    home: Object.freeze([-1.6, 0, -14]),
    rotation: 0,
    asset: 'crowd_3',
    featured: true,
    concertReserved: true,
    schedule: Object.freeze(['stay_home', 'visit_food_stall', 'concert_seat', 'cheer']),
  }),
  Object.freeze({
    id: 'nova',
    name: 'Nova',
    role: 'festivalgoer',
    location: 'festival_stage',
    kitId: 'guest_3',
    home: Object.freeze([1.1, 0, -16]),
    rotation: 0.4,
    asset: 'crowd_4',
    featured: true,
    concertReserved: true,
    schedule: Object.freeze(['stay_home', 'talk_with_friends', 'concert_seat', 'cheer']),
  }),
  Object.freeze({
    id: 'kai',
    name: 'Kai',
    role: 'musician',
    location: 'festival_stage',
    kitId: 'guest_4',
    home: Object.freeze([3.8, 0, -14]),
    rotation: 0.8,
    asset: 'crowd_5',
    featured: true,
    concertReserved: true,
    schedule: Object.freeze(['stay_home', 'watch_stage', 'concert_seat', 'cheer']),
  }),
  Object.freeze({
    id: 'luz',
    name: 'Luz',
    role: 'festivalgoer',
    location: 'festival_stage',
    kitId: 'guest_5',
    home: Object.freeze([6.5, 0, -16]),
    rotation: 1.2,
    asset: 'crowd_6',
    featured: true,
    concertReserved: true,
    schedule: Object.freeze(['stay_home', 'visit_food_stall', 'concert_seat', 'cheer']),
  }),
  Object.freeze({
    id: 'steward_left',
    name: 'Clinic steward',
    role: 'steward',
    location: 'reboot_clinic',
    kitId: 'repair_helper_0',
    home: Object.freeze([14.1, 0, 2.0]),
    rotation: 0.35,
    asset: 'crowd_3',
    featured: true,
    concertReserved: true,
    schedule: Object.freeze(['repair_assist', 'stay_home', 'concert_seat', 'cheer']),
  }),
  Object.freeze({
    id: 'steward_right',
    name: 'Clinic steward',
    role: 'steward',
    location: 'reboot_clinic',
    kitId: 'repair_helper_1',
    home: Object.freeze([16.5, 0, 2.0]),
    rotation: -0.35,
    asset: 'crowd_2',
    featured: true,
    concertReserved: true,
    schedule: Object.freeze(['repair_assist', 'stay_home', 'concert_seat', 'cheer']),
  }),
  Object.freeze({
    id: 'hero',
    name: 'You (festival avatar)',
    role: 'player',
    location: 'meadow',
    kitId: 'hero',
    home: Object.freeze([-4.2, 0, 24]),
    rotation: 0.25,
    asset: 'player_jam',
    featured: true,
    concertReserved: true,
    schedule: Object.freeze(['stay_home', 'concert_seat']),
  }),
  Object.freeze({
    id: 'robot',
    name: 'Reboot Clinic robot',
    role: 'companion',
    location: 'reboot_clinic',
    kitId: 'robot',
    home: Object.freeze([15.3, 0, 2.05]),
    asset: 'first_aid_robot',
    interactive: 'aid',
    featured: true,
    concertReserved: true,
    schedule: Object.freeze(['stay_home', 'concert_seat']),
  }),
  Object.freeze({
    id: 'dog',
    name: 'The goodest festival guest',
    role: 'animal',
    location: 'dog_lawn',
    kitId: 'dog',
    home: Object.freeze([-10, 0, 26]),
    rotation: 0.6,
    asset: 'golden_retriever',
    interactive: 'dog',
    featured: true,
    concertReserved: true,
    schedule: Object.freeze(['stay_home', 'concert_seat']),
  }),
]);

/**
 * Background crowd clusters. Each entry expands to `groupSize` instanced guests
 * (same math historically in festival-crowd.mjs). Roles drive documentation /
 * future schedule AI; counts/positions feed EXTRA_FESTIVAL_GUESTS.
 * @type {ReadonlyArray<Readonly<{
 *   id: string,
 *   role: string,
 *   location: string,
 *   schedule: readonly string[],
 *   cluster: readonly [number, number],
 *   groupSize: number,
 *   background: true,
 *   featured: false,
 * }>>}
 */
export const CROWD_GROUPS = Object.freeze([
  Object.freeze({ id: 'crowd_lawn_w', role: 'festivalgoer', location: 'picnic_west', schedule: Object.freeze(['talk_with_friends', 'visit_food_stall', 'watch_stage']), cluster: Object.freeze([-12, 10]), groupSize: 4, background: true, featured: false }),
  Object.freeze({ id: 'crowd_lawn_e', role: 'festivalgoer', location: 'picnic_east', schedule: Object.freeze(['talk_with_friends', 'visit_food_stall', 'watch_stage']), cluster: Object.freeze([12, 11]), groupSize: 4, background: true, featured: false }),
  Object.freeze({ id: 'crowd_grove_w', role: 'festivalgoer', location: 'north_grove', schedule: Object.freeze(['talk_with_friends', 'stay_home']), cluster: Object.freeze([-28, 4]), groupSize: 4, background: true, featured: false }),
  Object.freeze({ id: 'crowd_grove_e', role: 'festivalgoer', location: 'north_grove', schedule: Object.freeze(['talk_with_friends', 'stay_home']), cluster: Object.freeze([28, 11]), groupSize: 4, background: true, featured: false }),
  Object.freeze({ id: 'crowd_south_w', role: 'festivalgoer', location: 'south_path', schedule: Object.freeze(['watch_stage', 'talk_with_friends']), cluster: Object.freeze([-12, -16]), groupSize: 4, background: true, featured: false }),
  Object.freeze({ id: 'crowd_south_e', role: 'festivalgoer', location: 'south_path', schedule: Object.freeze(['watch_stage', 'talk_with_friends']), cluster: Object.freeze([12, -18]), groupSize: 4, background: true, featured: false }),
  Object.freeze({ id: 'crowd_far_sw', role: 'festivalgoer', location: 'activity_lawn', schedule: Object.freeze(['stay_home', 'visit_food_stall']), cluster: Object.freeze([-26, -26]), groupSize: 4, background: true, featured: false }),
  Object.freeze({ id: 'crowd_far_se', role: 'festivalgoer', location: 'activity_lawn', schedule: Object.freeze(['stay_home', 'visit_food_stall']), cluster: Object.freeze([27, -30]), groupSize: 4, background: true, featured: false }),
  Object.freeze({ id: 'crowd_far_nw', role: 'festivalgoer', location: 'north_grove', schedule: Object.freeze(['talk_with_friends', 'stay_home']), cluster: Object.freeze([-31, 25]), groupSize: 4, background: true, featured: false }),
  Object.freeze({ id: 'crowd_far_ne', role: 'festivalgoer', location: 'north_grove', schedule: Object.freeze(['talk_with_friends', 'stay_home']), cluster: Object.freeze([31, 28]), groupSize: 4, background: true, featured: false }),
  Object.freeze({ id: 'crowd_apron_w', role: 'festivalgoer', location: 'festival_stage', schedule: Object.freeze(['watch_stage', 'concert_seat']), cluster: Object.freeze([-5, -22]), groupSize: 4, background: true, featured: false }),
  Object.freeze({ id: 'crowd_apron_e', role: 'festivalgoer', location: 'festival_stage', schedule: Object.freeze(['watch_stage', 'concert_seat']), cluster: Object.freeze([6, -21]), groupSize: 4, background: true, featured: false }),
]);

/** Full registry: featured + crowd group descriptors (not per-instance crowd people). */
export const NPC_REGISTRY = Object.freeze([...FEATURED_NPCS, ...CROWD_GROUPS]);

const byId = new Map(NPC_REGISTRY.map((n) => [n.id, n]));
const byKitId = new Map(FEATURED_NPCS.filter((n) => n.kitId).map((n) => [n.kitId, n]));

/** Expand crowd groups into [x, z, yaw] placements (stable; matches prior festival-crowd.mjs). */
export function generateBackgroundGuests(groups = CROWD_GROUPS) {
  return Object.freeze(
    groups.flatMap((group, groupIndex) => {
      const [x, z] = group.cluster;
      const size = group.groupSize ?? 4;
      return Array.from({ length: size }, (_, i) => {
        const angle = i * Math.PI / 2 + groupIndex * 0.37;
        const r = 1.25 + (i % 2) * 0.15;
        return Object.freeze([
          x + Math.sin(angle) * r,
          z + Math.cos(angle) * r,
          angle + Math.PI,
        ]);
      });
    }),
  );
}

/** @returns {NpcDef[]} */
export function listNpcs({ featuredOnly = false, backgroundOnly = false } = {}) {
  return NPC_REGISTRY.filter((n) => {
    if (featuredOnly && !n.featured) return false;
    if (backgroundOnly && !n.background) return false;
    return true;
  }).map((n) => ({ ...n, schedule: [...n.schedule] }));
}

/** @param {string} id friendly id or kitId */
export function getNpc(id) {
  if (id == null || id === '') return null;
  const hit = byId.get(id) || byKitId.get(id);
  if (!hit) return null;
  return { ...hit, schedule: [...hit.schedule] };
}

/** Kit instance ids in FEATURED_SEATS order (concert migration). */
export function featuredConcertKitIds() {
  return FEATURED_NPCS.filter((n) => n.concertReserved).map((n) => n.kitId || n.id);
}

/** Featured humanoid guests that FestivalReactions animates (excludes hero/robot/dog). */
export function reactionGuestKitIds() {
  return FEATURED_NPCS
    .filter((n) => n.featured && n.role !== 'player' && n.role !== 'animal' && n.role !== 'companion')
    .map((n) => n.kitId || n.id);
}

/** Repair-helper spawn specs for FestivalReactions. */
export function repairHelperSpawns() {
  return FEATURED_NPCS
    .filter((n) => n.schedule.includes('repair_assist') && Array.isArray(n.home))
    .map((n) => ({
      id: n.kitId || n.id,
      asset: n.asset || 'crowd_1',
      position: [...n.home],
      rotation: n.rotation ?? 0,
    }));
}

/** Resolve a world position for debug focus / teleport-near. */
export function npcHomePosition(npc) {
  if (!npc) return null;
  if (Array.isArray(npc.home) && npc.home.length >= 3) return [npc.home[0], npc.home[1], npc.home[2]];
  const loc = LOCATION_KEYS[npc.location];
  if (loc?.approx) return [...loc.approx];
  return null;
}

/**
 * Validate one definition. Returns an array of error strings (empty = ok).
 * @param {NpcDef} npc
 */
export function validateNpc(npc) {
  const errors = [];
  if (!npc || typeof npc !== 'object') return ['NPC must be an object'];
  if (typeof npc.id !== 'string' || !npc.id) errors.push('id must be a non-empty string');
  if (typeof npc.role !== 'string' || !npc.role) errors.push(`${npc.id || '?'}: role required`);
  if (typeof npc.location !== 'string' || !LOCATION_KEYS[npc.location]) {
    errors.push(`${npc.id || '?'}: location must be a LOCATION_KEYS entry`);
  }
  if (!Array.isArray(npc.schedule) || npc.schedule.length === 0) {
    errors.push(`${npc.id || '?'}: schedule must be a non-empty array`);
  } else {
    for (const tag of npc.schedule) {
      if (!SCHEDULE_TAGS[tag]) errors.push(`${npc.id || '?'}: unknown schedule tag "${tag}"`);
    }
  }
  if (npc.home != null) {
    if (!Array.isArray(npc.home) || npc.home.length < 3 || !npc.home.every((n) => Number.isFinite(n))) {
      errors.push(`${npc.id || '?'}: home must be [x,y,z] numbers`);
    }
  }
  if (npc.concertReserved && !npc.featured && !npc.background) {
    errors.push(`${npc.id || '?'}: concertReserved expects featured or background`);
  }
  return errors;
}

/** Validate the whole registry; throws on failure. */
export function assertNpcRegistry(registry = NPC_REGISTRY, { seatCount = null } = {}) {
  const errors = [];
  const seen = new Set();
  const kitSeen = new Set();
  for (const npc of registry) {
    errors.push(...validateNpc(npc));
    if (seen.has(npc.id)) errors.push(`duplicate id "${npc.id}"`);
    seen.add(npc.id);
    if (npc.kitId) {
      if (kitSeen.has(npc.kitId)) errors.push(`duplicate kitId "${npc.kitId}"`);
      kitSeen.add(npc.kitId);
    }
  }
  const reserved = registry.filter((n) => n.concertReserved);
  if (seatCount != null && reserved.length > seatCount) {
    errors.push(`concertReserved count ${reserved.length} exceeds FEATURED_SEATS (${seatCount})`);
  }
  if (errors.length) throw new Error('NPC registry invalid:\n- ' + errors.join('\n- '));
  return true;
}

/** Describe which schedule tags are currently executed vs stubbed. */
export function scheduleStatus() {
  return Object.fromEntries(
    Object.entries(SCHEDULE_TAGS).map(([tag, info]) => [tag, { live: info.live, note: info.note }]),
  );
}

export default {
  LOCATION_KEYS,
  SCHEDULE_TAGS,
  FEATURED_NPCS,
  CROWD_GROUPS,
  NPC_REGISTRY,
  listNpcs,
  getNpc,
  featuredConcertKitIds,
  reactionGuestKitIds,
  repairHelperSpawns,
  generateBackgroundGuests,
  npcHomePosition,
  validateNpc,
  assertNpcRegistry,
  scheduleStatus,
};
