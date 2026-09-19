/**
 * Lightweight browser debug surface for Promptstock.
 * Attach after the world boots: window.attachGameDebug(window.skillsJam)
 * Then use window.gameDebug from the console.
 */

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
    version: '1.0.0',

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

    /** 'high' = detailed (engine.low false), 'low' = lighter path. */
    setQuality(level) {
      if (level !== 'high' && level !== 'low') {
        throw new Error(`setQuality expects 'high' or 'low', got ${JSON.stringify(level)}`);
      }
      if (!host.engine) throw new Error('host.engine is not available');
      host.engine.low = level === 'low';
      host.engine.resize?.();
      return level;
    },
  };

  if (typeof window !== 'undefined') window.gameDebug = api;
  return api;
}

export default attachGameDebug;
