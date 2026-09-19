/**
 * Atmosphere-as-systems for Promptstock.
 *
 * Live:
 * - WindSystem — scales existing grass/flag/tree/tent sway (shader uniforms)
 * - TimeOfDaySystem — dusk + campNight via presets or normalized 0–1
 * - AmbientAudioSystem — district / stage-distance music-bed gain multipliers
 *
 * Stub:
 * - WeatherSystem — clouds intensity (stored; optional sky uniform hook)
 *
 * Default boot maps to late-afternoon with dusk=0, campNight=0, wind=1, clouds=1
 * so the golden-hour look and visual goldens stay unchanged until setTime/setWind.
 */

/** Named cinematic time presets → lighting targets. */
export const TIME_PRESETS = Object.freeze({
  noon: Object.freeze({ time: 0.25, dusk: 0, campNight: 0 }),
  'late-afternoon': Object.freeze({ time: 0.45, dusk: 0, campNight: 0 }),
  dusk: Object.freeze({ time: 0.65, dusk: 1, campNight: 0 }),
  night: Object.freeze({ time: 0.9, dusk: 1, campNight: 0.85 }),
});

/** Default boot preset — identical lighting to the pre-atmosphere goldens. */
export const DEFAULT_TIME_PRESET = 'late-afternoon';

/**
 * Wind sway constants previously inlined in engine.addWind / createMeadow.
 * Strength multiplies at runtime via engine.windStrength.value (default 1).
 */
export const WIND = Object.freeze({
  batchFreqX: 1.25,
  batchFreqZ: 0.85,
  batchAmpX: 0.055,
  batchAmpZ: 0.035,
  meadowFreqX: 1.3,
  meadowFreqZ: 0.8,
  meadowAmpX: 0.075,
  meadowAmpZ: 0.035,
  defaultStrength: 1,
  minStrength: 0,
  maxStrength: 3,
});

/**
 * Soft music-bed multipliers by district id. Values near 1 keep current fades intact.
 * Stage distance still applies on top (see AmbientAudioSystem.musicBedGain).
 */
export const DISTRICT_AMBIENT = Object.freeze({
  default: 1,
  stage: 1.12,
  records: 1.15,
  camp: 0.72,
  pier: 0.82,
  garden: 0.9,
  lake: 0.8,
  kick: 1,
  maker: 1,
  ai: 1,
  aid: 1,
  swap: 1,
  news: 1,
  dog: 1,
  poster: 1,
});

export const WEATHER_DEFAULTS = Object.freeze({
  clouds: 1, // 1 == current sky cloud cover
  minClouds: 0,
  maxClouds: 2,
});

export function clamp(n, lo, hi) {
  const x = Number(n);
  if (!Number.isFinite(x)) return lo;
  return Math.min(hi, Math.max(lo, x));
}

/**
 * Map normalized festival clock 0–1 → dusk / campNight.
 * 0–0.5 afternoon, 0.5–0.7 golden hour, 0.7–1 camp night.
 */
export function lightingFromNormalized(t) {
  const time = clamp(t, 0, 1);
  if (time <= 0.5) return { time, dusk: 0, campNight: 0 };
  if (time <= 0.7) return { time, dusk: (time - 0.5) / 0.2, campNight: 0 };
  return { time, dusk: 1, campNight: (time - 0.7) / 0.3 };
}

export function resolveTimeInput(input) {
  if (typeof input === 'string') {
    const key = input.trim().toLowerCase().replace(/\s+/g, '-');
    const preset = TIME_PRESETS[key];
    if (!preset) {
      throw new Error(
        `Unknown time preset "${input}". Try: ${Object.keys(TIME_PRESETS).join(', ')}`,
      );
    }
    return { ...preset, preset: key };
  }
  if (typeof input === 'number' || (typeof input === 'string' && input !== '' && Number.isFinite(Number(input)))) {
    const lighting = lightingFromNormalized(Number(input));
    return { ...lighting, preset: null };
  }
  throw new Error('setTime expects a number 0–1 or a named preset (noon, late-afternoon, dusk, night)');
}

export class WindSystem {
  constructor(atmosphere) {
    this.atmosphere = atmosphere;
    this.live = true;
  }

  get strength() {
    return this.atmosphere.windStrength;
  }

  setStrength(value) {
    const s = clamp(value, WIND.minStrength, WIND.maxStrength);
    this.atmosphere.windStrength = s;
    const engine = this.atmosphere.engine;
    if (engine?.windStrength) engine.windStrength.value = s;
    return s;
  }

  /** GLSL snippet pieces for batch wind (addWind). */
  batchShaderTerms(amount) {
    const a = Number(amount) || 0;
    return {
      freqX: WIND.batchFreqX,
      freqZ: WIND.batchFreqZ,
      ampX: (a * WIND.batchAmpX).toFixed(4),
      ampZ: (a * WIND.batchAmpZ).toFixed(4),
    };
  }

  meadowShaderTerms() {
    return {
      freqX: WIND.meadowFreqX,
      freqZ: WIND.meadowFreqZ,
      ampX: WIND.meadowAmpX.toFixed(4),
      ampZ: WIND.meadowAmpZ.toFixed(4),
    };
  }
}

export class TimeOfDaySystem {
  constructor(atmosphere) {
    this.atmosphere = atmosphere;
    this.live = true;
  }

  /**
   * Apply preset or normalized time. Updates atmosphere clock and lighting targets.
   * Does not fight an active lake overnight (campNight owned by LakeAdventure).
   */
  setTime(input, { snap = true } = {}) {
    const resolved = resolveTimeInput(input);
    const atm = this.atmosphere;
    atm.time = resolved.time;
    atm.preset = resolved.preset;
    atm.targetDusk = resolved.dusk;
    atm.targetCampNight = resolved.campNight;

    const hooks = atm.hooks;
    hooks.setTargetDusk?.(resolved.dusk);

    const engine = atm.engine;
    if (engine && !atm.lakeOwnsNight()) {
      engine.campNight = resolved.campNight;
      if (snap) engine.dusk = resolved.dusk;
    } else if (engine && snap && !atm.lakeOwnsNight()) {
      engine.dusk = resolved.dusk;
    }
    return atm.snapshot();
  }

  /** Sync from host golden-hour toggle without changing the named preset clock. */
  syncFromHostDusk(targetDusk) {
    const d = clamp(targetDusk, 0, 1);
    this.atmosphere.targetDusk = d;
    if (d >= 0.99 && this.atmosphere.preset !== 'night') this.atmosphere.preset = 'dusk';
    if (d <= 0.01 && this.atmosphere.preset !== 'noon') this.atmosphere.preset = 'late-afternoon';
  }
}

export class AmbientAudioSystem {
  constructor(atmosphere) {
    this.atmosphere = atmosphere;
    this.live = true;
    this.lastDistrict = 'default';
    this.lastGain = 1;
  }

  districtForPosition(position, nearestId) {
    if (nearestId && DISTRICT_AMBIENT[nearestId] != null) return nearestId;
    if (!position || position.length < 3) return 'default';
    const [x, , z] = position;
    // Rough district hulls (match map layout; light touch only).
    if (Math.hypot(x + 51, z + 16) < 18) return 'camp';
    if (x > 40 && z > -25 && z < 20) return 'garden';
    if (Math.hypot(x - 23, z + 60) < 22) return 'pier';
    if (z < -70) return 'lake';
    if (Math.hypot(x, z + 30) < 14) return 'stage';
    if (Math.hypot(x - 11, z - 26) < 8) return 'records';
    return 'default';
  }

  districtMultiplier(district) {
    const id = district && DISTRICT_AMBIENT[district] != null ? district : 'default';
    return DISTRICT_AMBIENT[id];
  }

  /**
   * Compose the existing stage-distance bed with a light district multiplier.
   * Mirrors HTML: records modal → 0.8; else 0.38 + 0.5 * (1 - dist/65).
   */
  musicBedGain(position, { modalId, baseVolume = 0.65 } = {}) {
    const district = this.districtForPosition(position, null);
    this.lastDistrict = modalId === 'records' ? 'records' : district;
    const dist = Math.hypot(position?.[0] ?? 0, (position?.[2] ?? 0) + 30);
    // Preserve exact prior HTML targets for records modal and default districts.
    if (modalId === 'records') {
      this.lastGain = 0.8;
      return this.lastGain;
    }
    const stageBed = 0.38 + 0.5 * Math.max(0, 1 - dist / 65);
    const mult = this.districtMultiplier(this.lastDistrict);
    // Subtle district duck/boost; mult=1 → identical to the prior stage-bed formula.
    const blended = stageBed * (0.85 + 0.15 * mult);
    this.lastGain = clamp(blended, 0, 1);
    return this.lastGain;
  }
}

/** Stub: stores cloud intensity; apply() writes sky uniform when present. */
export class WeatherSystem {
  constructor(atmosphere) {
    this.atmosphere = atmosphere;
    this.live = false; // stub — intensity stored, visual optional
    this.clouds = WEATHER_DEFAULTS.clouds;
  }

  setWeather(input = {}) {
    const clouds = input.clouds != null
      ? clamp(input.clouds, WEATHER_DEFAULTS.minClouds, WEATHER_DEFAULTS.maxClouds)
      : this.clouds;
    this.clouds = clouds;
    this.apply();
    return { clouds: this.clouds, stub: true };
  }

  apply() {
    const sky = this.atmosphere.engine?.cloudSky;
    const u = sky?.material?.uniforms?.cloudIntensity;
    if (u) u.value = this.clouds;
  }
}

export class Atmosphere {
  /**
   * @param {object} engine FestivalEngine-like
   * @param {object} [hooks] host bridges (setTargetDusk, getTargetDusk, getPosition, getModalId)
   */
  constructor(engine, hooks = {}) {
    this.engine = engine;
    this.hooks = hooks;
    this.time = TIME_PRESETS[DEFAULT_TIME_PRESET].time;
    this.preset = DEFAULT_TIME_PRESET;
    this.targetDusk = 0;
    this.targetCampNight = 0;
    this.windStrength = WIND.defaultStrength;
    this.wind = new WindSystem(this);
    this.timeOfDay = new TimeOfDaySystem(this);
    this.ambientAudio = new AmbientAudioSystem(this);
    this.weather = new WeatherSystem(this);

    if (engine) {
      engine.windStrength ??= { value: WIND.defaultStrength };
      engine.windStrength.value = this.windStrength;
      engine.atmosphere = this;
    }
  }

  bindHost(hooks = {}) {
    Object.assign(this.hooks, hooks);
    return this;
  }

  lakeOwnsNight() {
    return !!this.engine?.play?.adventure?.active;
  }

  setTime(input, opts) {
    return this.timeOfDay.setTime(input, opts);
  }

  setWind(value) {
    return this.wind.setStrength(value);
  }

  setWeather(input) {
    return this.weather.setWeather(input);
  }

  getTargetDusk() {
    return this.hooks.getTargetDusk?.() ?? this.targetDusk;
  }

  snapshot() {
    const engine = this.engine;
    return {
      time: this.time,
      preset: this.preset,
      dusk: engine?.dusk ?? this.targetDusk,
      targetDusk: this.getTargetDusk(),
      campNight: engine?.campNight ?? this.targetCampNight,
      wind: this.windStrength,
      weather: { clouds: this.weather.clouds },
      ambient: {
        district: this.ambientAudio.lastDistrict,
        gain: this.ambientAudio.lastGain,
      },
      systems: {
        wind: this.wind.live ? 'live' : 'stub',
        timeOfDay: this.timeOfDay.live ? 'live' : 'stub',
        ambientAudio: this.ambientAudio.live ? 'live' : 'stub',
        weather: this.weather.live ? 'live' : 'stub',
      },
    };
  }

  /**
   * Per-frame: keep wind uniform in sync; optionally drive music bed gain.
   * Dusk lerp remains in the HTML animate loop (targetDusk).
   */
  tick(dt, ctx = {}) {
    if (this.engine?.windStrength) this.engine.windStrength.value = this.windStrength;
    if (!this.lakeOwnsNight() && this.targetCampNight !== (this.engine?.campNight ?? 0)) {
      // Soft approach when not owned by lake adventure.
      const cur = this.engine?.campNight ?? 0;
      const next = cur + (this.targetCampNight - cur) * Math.min((dt || 0) * 1.3, 1);
      if (this.engine) this.engine.campNight = next;
    }
    const pos = ctx.position ?? this.hooks.getPosition?.();
    const modalId = ctx.modalId ?? this.hooks.getModalId?.();
    if (pos && this.hooks.applyMusicBedGain) {
      const gain = this.ambientAudio.musicBedGain(pos, { modalId });
      this.hooks.applyMusicBedGain(gain);
    }
    this.weather.apply();
    return this.snapshot();
  }
}

export function createAtmosphere(engine, hooks) {
  return new Atmosphere(engine, hooks);
}

export default createAtmosphere;
