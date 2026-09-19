#!/usr/bin/env node
/**
 * GPU-free smoke: assert gameDebug module exports + camera/location registries.
 * Usage: node scripts/smoke-game-debug.mjs
 * Browser one-liner (with preview-kit): open skills-jam-3d.html, then
 *   gameDebug.listCameras(); gameDebug.setQuality('low'); gameDebug.capture('pier');
 */
import {
  CAMERA_PRESETS,
  DEFAULT_LOCATIONS,
  QUALITY_STORAGE_KEY,
  attachGameDebug,
  loadQualityPreference,
  saveQualityPreference,
  applyEngineQuality,
} from '../game-debug.mjs';

const required = [
  'listLocations', 'listCameras', 'listNpcs', 'getNpc', 'focusNpc',
  'teleport', 'go', 'setCamera',
  'getPlayerState', 'getRenderStats', 'setQuality',
  'capture', 'screenshot', 'captureAll', 'screenshotSuite',
];

if (QUALITY_STORAGE_KEY !== 'skillsjam.quality.v1') {
  throw new Error(`unexpected QUALITY_STORAGE_KEY: ${QUALITY_STORAGE_KEY}`);
}
if (Object.keys(CAMERA_PRESETS).length < 5) {
  throw new Error('CAMERA_PRESETS missing entries');
}
if (!DEFAULT_LOCATIONS.includes('stage')) {
  throw new Error('DEFAULT_LOCATIONS missing stage');
}

const engine = {
  low: false,
  canvas: { toDataURL: () => 'data:image/png;base64,SMOKE' },
  draw() {},
  setCamera() {},
  resize() {},
  debugCamera: null,
};
const api = attachGameDebug({
  engine,
  teleport() {},
  locations: () => DEFAULT_LOCATIONS.slice(),
  state: { quality: 'detailed', fps: 60 },
});

for (const name of required) {
  if (typeof api[name] !== 'function') {
    throw new Error(`gameDebug missing ${name}`);
  }
}
if (api.version !== '1.2.0') throw new Error(`unexpected version ${api.version}`);
if (typeof loadQualityPreference !== 'function') throw new Error('loadQualityPreference missing');
if (typeof saveQualityPreference !== 'function') throw new Error('saveQualityPreference missing');
if (typeof applyEngineQuality !== 'function') throw new Error('applyEngineQuality missing');

const cams = api.listCameras();
if (!cams.includes('festival_stage_wide')) throw new Error('listCameras incomplete');
if (!api.getNpc('maya')?.kitId) throw new Error('getNpc(maya) missing');
if (api.listNpcs({ featuredOnly: true }).length < 3) throw new Error('listNpcs thin');
const shot = api.capture('camp');
if (!String(shot).startsWith('data:image/png')) throw new Error('capture failed');
const suite = api.captureAll(['pier']);
if (suite.length !== 1 || suite[0].name !== 'pier') throw new Error('captureAll failed');

console.log('smoke-game-debug: ok', {
  version: api.version,
  cameras: cams.length,
  locations: api.listLocations().length,
  npcs: api.listNpcs().length,
  qualityKey: QUALITY_STORAGE_KEY,
});
