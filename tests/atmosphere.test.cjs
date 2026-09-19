const { test } = require('node:test');
const assert = require('node:assert/strict');

async function load() {
  return import('../atmosphere.mjs');
}

test('TIME_PRESETS cover noon, late-afternoon, dusk, night with clamped lighting', async () => {
  const { TIME_PRESETS, DEFAULT_TIME_PRESET, resolveTimeInput, lightingFromNormalized, clamp } = await load();
  assert.equal(DEFAULT_TIME_PRESET, 'late-afternoon');
  assert.deepEqual(Object.keys(TIME_PRESETS).sort(), ['dusk', 'late-afternoon', 'night', 'noon']);

  assert.equal(TIME_PRESETS.noon.dusk, 0);
  assert.equal(TIME_PRESETS.noon.campNight, 0);
  assert.equal(TIME_PRESETS['late-afternoon'].dusk, 0);
  assert.equal(TIME_PRESETS.dusk.dusk, 1);
  assert.equal(TIME_PRESETS.dusk.campNight, 0);
  assert.ok(TIME_PRESETS.night.campNight > 0.5);
  assert.equal(TIME_PRESETS.night.dusk, 1);

  assert.equal(resolveTimeInput('dusk').preset, 'dusk');
  assert.equal(resolveTimeInput('Late Afternoon').preset, 'late-afternoon');
  assert.throws(() => resolveTimeInput('teatime'), /Unknown time preset/);

  const mid = lightingFromNormalized(0.6);
  assert.ok(mid.dusk > 0 && mid.dusk < 1);
  assert.equal(mid.campNight, 0);
  const late = lightingFromNormalized(0.85);
  assert.equal(late.dusk, 1);
  assert.ok(late.campNight > 0);

  assert.equal(clamp(-1, 0, 1), 0);
  assert.equal(clamp(2, 0, 1), 1);
  assert.equal(clamp(0.5, 0, 1), 0.5);
  assert.equal(clamp(NaN, 0, 1), 0);
});

test('default atmosphere boot matches current golden look (dusk 0, wind 1, clouds 1)', async () => {
  const { createAtmosphere, WIND, WEATHER_DEFAULTS, TIME_PRESETS } = await load();
  const engine = { dusk: 0, campNight: 0 };
  const atm = createAtmosphere(engine);
  assert.equal(engine.atmosphere, atm);
  assert.equal(engine.windStrength.value, 1);
  const snap = atm.snapshot();
  assert.equal(snap.preset, 'late-afternoon');
  assert.equal(snap.targetDusk, 0);
  assert.equal(snap.wind, WIND.defaultStrength);
  assert.equal(snap.weather.clouds, WEATHER_DEFAULTS.clouds);
  assert.equal(TIME_PRESETS['late-afternoon'].dusk, 0);
  assert.deepEqual(snap.systems, {
    wind: 'live',
    timeOfDay: 'live',
    ambientAudio: 'live',
    weather: 'stub',
  });
});

test('setTime presets and normalized values update dusk/campNight; setWind clamps', async () => {
  let hostDusk = 0;
  const engine = { dusk: 0, campNight: 0, play: { adventure: { active: false } } };
  const { createAtmosphere } = await load();
  const atm = createAtmosphere(engine, {
    setTargetDusk: (v) => { hostDusk = v; },
    getTargetDusk: () => hostDusk,
  });

  atm.setTime('dusk');
  assert.equal(hostDusk, 1);
  assert.equal(engine.dusk, 1);
  assert.equal(engine.campNight, 0);
  assert.equal(atm.preset, 'dusk');

  atm.setTime('night');
  assert.equal(engine.campNight, 0.85);
  assert.equal(atm.snapshot().campNight, 0.85);

  atm.setTime(0.25);
  assert.equal(engine.dusk, 0);
  assert.equal(engine.campNight, 0);
  assert.equal(atm.preset, null);

  assert.equal(atm.setWind(2.5), 2.5);
  assert.equal(engine.windStrength.value, 2.5);
  assert.equal(atm.setWind(-3), 0);
  assert.equal(atm.setWind(99), 3);

  const weather = atm.setWeather({ clouds: 1.5 });
  assert.equal(weather.clouds, 1.5);
  assert.equal(weather.stub, true);
  assert.equal(atm.setWeather({ clouds: -1 }).clouds, 0);
});

test('AmbientAudioSystem default district preserves stage-bed gain formula', async () => {
  const { createAtmosphere } = await load();
  const atm = createAtmosphere({ dusk: 0 });
  // Festival meadow origin — default district, mult 1 → identical to prior HTML formula.
  const pos = [0, 1.82, 32];
  const dist = Math.hypot(pos[0], pos[2] + 30);
  const expected = 0.38 + 0.5 * Math.max(0, 1 - dist / 65);
  const gain = atm.ambientAudio.musicBedGain(pos, {});
  assert.ok(Math.abs(gain - expected) < 1e-9, `gain ${gain} vs ${expected}`);

  const records = atm.ambientAudio.musicBedGain(pos, { modalId: 'records' });
  assert.equal(records, 0.8);

  const campPos = [-51, 1.82, -16];
  const campBed = 0.38 + 0.5 * Math.max(0, 1 - Math.hypot(campPos[0], campPos[2] + 30) / 65);
  const campGain = atm.ambientAudio.musicBedGain(campPos, {});
  assert.ok(campGain < campBed - 1e-6);
});

test('WIND shader constants match historical meadow/batch sway numbers', async () => {
  const { WIND } = await load();
  assert.equal(WIND.batchFreqX, 1.25);
  assert.equal(WIND.batchFreqZ, 0.85);
  assert.equal(WIND.batchAmpX, 0.055);
  assert.equal(WIND.batchAmpZ, 0.035);
  assert.equal(WIND.meadowFreqX, 1.3);
  assert.equal(WIND.meadowFreqZ, 0.8);
  assert.equal(WIND.meadowAmpX, 0.075);
  assert.equal(WIND.meadowAmpZ, 0.035);
});

test('lake overnight owns campNight so setTime does not clobber it', async () => {
  const { createAtmosphere } = await load();
  const engine = { dusk: 0.5, campNight: 0.9, play: { adventure: { active: true } } };
  const atm = createAtmosphere(engine);
  atm.setTime('noon');
  assert.equal(engine.campNight, 0.9);
});
