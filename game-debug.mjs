/**
 * Lightweight browser debug surface for Promptstock.
 * Attach after the world boots: window.attachGameDebug(window.skillsJam)
 * Then use window.gameDebug from the console.
 * NPC helpers: listNpcs(), getNpc(id), focusNpc(id), setNpcSchedule(id, tags),
 * advanceSchedule(id?) — see festival-npcs.mjs / npc-schedule.mjs.
 *
 * localStorage keys used by the jam (passport/discovery helpers: passport-store.mjs):
 * - skillsjam.world.passport.v1 — stamps / pills / record / dog
 * - skillsjam.discovery.v2 — discovered districts
 * - skillsjam.round.v1 — mini-game round state (festival-play)
 * - skillsjam.quality.v1 — rendering quality preference ('high' | 'low')
 */

import {
  listNpcs as registryListNpcs,
  getNpc as registryGetNpc,
  npcHomePosition,
  scheduleStatus,
} from './festival-npcs.mjs';

/** Persist rendering quality ('high' | 'low'). */
export const QUALITY_STORAGE_KEY = 'skillsjam.quality.v1';

/** Named cinematic / look presets: [cameraPosition, lookAtTarget]. */
export const CAMERA_PRESETS = {
  festival_stage_wide: [[12, 4.4, -23], [0, 3, -34]],
  meadow_path: [[0, 2.4, 34], [0, 1.4, 20]],
  pier: [[23, 2.8, -58], [23, 1.0, -72]],
  camp: [[-48, 2.6, -6], [-51, 1.1, -16]],
  player_closeup: [[-2.5, 1.85, 27], [-4.2, 1.0, 24]],
};

/** Fallback destination ids when the host does not expose spots. */
export const DEFAULT_LOCATIONS = [
  'maker', 'ai', 'aid', 'swap', 'news', 'records', 'stage', 'poster',
  'dog', 'kick', 'lake', 'camp', 'garden', 'pier',
];

/**
 * @param {Storage | {getItem(k:string):string|null}} [storage]
 * @returns {'high'|'low'|null}
 */
export function loadQualityPreference(storage) {
  const store = storage ?? (typeof localStorage !== 'undefined' ? localStorage : null);
  if (!store?.getItem) return null;
  try {
    const raw = store.getItem(QUALITY_STORAGE_KEY);
    if (raw == null || raw === '') return null;
    if (raw === 'high' || raw === 'low') return raw;
    const parsed = JSON.parse(raw);
    if (parsed === 'high' || parsed === 'low') return parsed;
    if (parsed && (parsed.level === 'high' || parsed.level === 'low')) return parsed.level;
  } catch {
    /* ignore corrupt preference */
  }
  return null;
}

/**
 * @param {'high'|'low'} level
 * @param {Storage | {setItem(k:string,v:string):void}} [storage]
 */
export function saveQualityPreference(level, storage) {
  if (level !== 'high' && level !== 'low') {
    throw new Error(`saveQualityPreference expects 'high' or 'low', got ${JSON.stringify(level)}`);
  }
  const store = storage ?? (typeof localStorage !== 'undefined' ? localStorage : null);
  if (!store?.setItem) return;
  try {
    store.setItem(QUALITY_STORAGE_KEY, level);
  } catch {
    /* private mode / quota */
  }
}

/**
 * Apply quality to an engine-like object (sets .low and calls resize).
 * @param {{low?:boolean, resize?:Function}} engine
 * @param {'high'|'low'} level
 */
export function applyEngineQuality(engine, level) {
  if (!engine) throw new Error('applyEngineQuality requires an engine');
  if (level !== 'high' && level !== 'low') {
    throw new Error(`applyEngineQuality expects 'high' or 'low', got ${JSON.stringify(level)}`);
  }
  engine.low = level === 'low';
  engine.resize?.();
  return level;
}

function resolveCanvas(engine) {
  return engine?.canvas || engine?.renderer?.domElement || null;
}

function downloadDataUrl(dataUrl, filename) {
  if (typeof document === 'undefined') return;
  const a = document.createElement('a');
  a.href = dataUrl;
  a.download = filename;
  a.click();
}

function captureCanvasPng(engine) {
  const canvas = resolveCanvas(engine);
  if (!canvas || typeof canvas.toDataURL !== 'function') {
    throw new Error('engine canvas.toDataURL is not available');
  }
  if (typeof engine.draw === 'function') {
    const t = engine.time?.value ?? 0;
    engine.draw(t);
  }
  return canvas.toDataURL('image/png');
}

/**
 * @param {object} host window.skillsJam-style host
 * @returns {object} API also assigned to window.gameDebug
 */
export function attachGameDebug(host) {
  if (!host || typeof host !== 'object') {
    throw new Error('attachGameDebug requires the skillsJam host object');
  }

  const clearDebugCamera = () => {
    if (host.engine) host.engine.debugCamera = null;
  };

  const api = {
    version: '1.3.0',

    /** Spot / district ids you can teleport to. */
    listLocations() {
      if (typeof host.locations === 'function') return host.locations();
      if (Array.isArray(host.locations)) return host.locations.slice();
      return DEFAULT_LOCATIONS.slice();
    },

    /** Named camera presets. */
    listCameras() {
      return Object.keys(CAMERA_PRESETS);
    },

    /** Data-driven NPC registry (featured + crowd groups). */
    listNpcs(opts) {
      if (typeof host.listNpcs === 'function') return host.listNpcs(opts);
      return registryListNpcs(opts);
    },

    /** Lookup by friendly id or kitId (e.g. maya or guest_0). */
    getNpc(id) {
      if (typeof host.getNpc === 'function') return host.getNpc(id);
      return registryGetNpc(id);
    },

    /** Schedule tag live/stub map. */
    npcScheduleStatus() {
      return scheduleStatus();
    },

    /**
     * Override free-roam schedule tags for a featured NPC or crowd group.
     * Requires a live FestivalPlay schedule runner (after boot).
     */
    setNpcSchedule(id, tags) {
      const runner = host.play?.schedule || host.schedule;
      if (!runner?.setNpcSchedule) {
        throw new Error('schedule runner not available (boot the festival first)');
      }
      return runner.setNpcSchedule(id, tags);
    },

    /** Advance one NPC/group to the next schedule tag, or all when id omitted. */
    advanceSchedule(id) {
      const runner = host.play?.schedule || host.schedule;
      if (!runner?.advanceSchedule) {
        throw new Error('schedule runner not available (boot the festival first)');
      }
      return runner.advanceSchedule(id);
    },

    /** Snapshot schedule state for one actor (friendly id or kitId). */
    getNpcSchedule(id) {
      const runner = host.play?.schedule || host.schedule;
      if (!runner?.getState) return null;
      return runner.getState(id);
    },

    /**
     * Focus / teleport near an NPC. Uses live kit instance position when available,
     * otherwise registry home / location approx. Returns {id, kitId, position}.
     */
    focusNpc(id) {
      const npc = api.getNpc(id);
      if (!npc) {
        throw new Error(`Unknown NPC "${id}". Try gameDebug.listNpcs().map(n => n.id)`);
      }
      clearDebugCamera();
      const kitId = npc.kitId || npc.id;
      let position = null;
      const inst = host.kit?.instances?.get?.(kitId) || host.engine?.jamKit?.instances?.get?.(kitId);
      if (inst?.position) {
        position = [inst.position.x, inst.position.y, inst.position.z];
      } else {
        position = npcHomePosition(npc);
      }
      if (!position) {
        throw new Error(`NPC "${npc.id}" has no home position`);
      }
      // Stand a couple metres south of the NPC and look toward them.
      const stand = [position[0], 1.82, position[2] + 3.2];
      const yaw = Math.atan2(position[0] - stand[0], position[2] - stand[2]);
      if (typeof host.setView === 'function') {
        host.setView(stand, yaw, 0.05);
      } else if (typeof host.teleport === 'function' && npc.location) {
        // Fall back: teleport to mapped spot if setView is unavailable.
        const loc = npc.location === 'festival_stage' ? 'stage'
          : npc.location === 'reboot_clinic' ? 'aid'
          : npc.location === 'dog_lawn' ? 'dog'
          : npc.location === 'meadow' ? 'kick'
          : npc.location;
        try { host.teleport(loc); } catch { /* ignore unknown spot */ }
      } else {
        throw new Error('host.setView / teleport not available for focusNpc');
      }
      if (host.engine?.setCamera) {
        const eye = [stand[0], 1.82, stand[2]];
        const target = [position[0], 1.2, position[2]];
        host.engine.debugCamera = [eye.slice(), target.slice()];
        host.engine.setCamera(eye, target);
      }
      return { id: npc.id, kitId, position, stand };
    },

    /** Teleport to a map destination or district id. */
    teleport(id) {
      clearDebugCamera();
      if (typeof host.teleport !== 'function') {
        throw new Error('host.teleport is not available');
      }
      host.teleport(id);
      return id;
    },

    /** Alias for teleport. */
    go(id) {
      return api.teleport(id);
    },

    /**
     * Lock the view to a named cinematic preset (honored when engine.debugCamera is read by the animate loop).
     * Pass null / 'clear' to release.
     */
    setCamera(name) {
      if (name == null || name === 'clear' || name === 'none') {
        clearDebugCamera();
        return null;
      }
      const preset = CAMERA_PRESETS[name];
      if (!preset) {
        throw new Error(
          `Unknown camera "${name}". Try: ${Object.keys(CAMERA_PRESETS).join(', ')}`,
        );
      }
      if (!host.engine?.setCamera) {
        throw new Error('host.engine.setCamera is not available');
      }
      host.engine.debugCamera = [preset[0].slice(), preset[1].slice()];
      host.engine.setCamera(preset[0], preset[1]);
      return name;
    },

    getPlayerState() {
      const state = typeof host.state === 'object' && host.state ? host.state : {};
      return {
        position: state.position ? state.position.slice() : null,
        yaw: state.yaw,
        pitch: state.pitch,
        started: state.started,
        touring: state.touring,
        nearby: state.nearby ?? null,
        modal: state.modal ?? null,
        badges: state.badges ? state.badges.slice() : [],
        discoveries: state.discoveries ? state.discoveries.slice() : [],
        goldenHour: !!state.goldenHour,
        quality: state.quality,
      };
    },

    getRenderStats() {
      const state = typeof host.state === 'object' && host.state ? host.state : {};
      return {
        fps: state.fps ?? null,
        quality: state.quality ?? (host.engine?.low ? 'lighter' : 'detailed'),
        low: !!host.engine?.low,
        instances: state.instances ?? null,
        batches: state.batches ?? null,
        debugCamera: host.engine?.debugCamera
          ? true
          : false,
      };
    },

    /**
     * 'high' = detailed (engine.low false), 'low' = lighter path.
     * Persists to localStorage key skillsjam.quality.v1.
     */
    setQuality(level) {
      if (level !== 'high' && level !== 'low') {
        throw new Error(`setQuality expects 'high' or 'low', got ${JSON.stringify(level)}`);
      }
      if (!host.engine) throw new Error('host.engine is not available');
      applyEngineQuality(host.engine, level);
      saveQualityPreference(level);
      return level;
    },

    /**
     * Optionally setCamera first, then return a PNG data URL from the canvas.
     * @param {string} [cameraName]
     * @param {{download?:boolean, filename?:string}} [opts]
     * @returns {string} data URL
     */
    capture(cameraName, opts = {}) {
      if (cameraName) api.setCamera(cameraName);
      if (!host.engine) throw new Error('host.engine is not available');
      const dataUrl = captureCanvasPng(host.engine);
      const name = cameraName || 'view';
      if (opts.download) {
        downloadDataUrl(dataUrl, opts.filename || `promptstock-${name}.png`);
      }
      return dataUrl;
    },

    /** Alias for capture. */
    screenshot(cameraName, opts) {
      return api.capture(cameraName, opts);
    },

    /**
     * Cycle named cameras (or all presets) and return {name, dataUrl} shots.
     * @param {string[]} [names]
     * @param {{download?:boolean}} [opts]
     */
    captureAll(names, opts = {}) {
      const list = Array.isArray(names) && names.length
        ? names
        : Object.keys(CAMERA_PRESETS);
      const shots = [];
      for (const name of list) {
        api.setCamera(name);
        const dataUrl = captureCanvasPng(host.engine);
        if (opts.download) {
          downloadDataUrl(dataUrl, `promptstock-${name}.png`);
        }
        shots.push({ name, dataUrl });
      }
      return shots;
    },

    /** Alias for captureAll. */
    screenshotSuite(names, opts) {
      return api.captureAll(names, opts);
    },
  };

  if (typeof window !== 'undefined') window.gameDebug = api;
  return api;
}

export default attachGameDebug;
