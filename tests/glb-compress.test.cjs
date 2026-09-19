const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const kits = ['crowd_kit', 'player_jam', 'props_kit', 'tent_kit', 'world_dressing'];

function readGlbJson(file) {
  const b = fs.readFileSync(file);
  assert.equal(b.toString('ascii', 0, 4), 'glTF');
  const jsonLen = b.readUInt32LE(12);
  return JSON.parse(b.toString('utf8', 20, 20 + jsonLen));
}

test('createJamGltfLoader wires MeshoptDecoder when supported', async () => {
  const jam = fs.readFileSync('jam-kit.mjs', 'utf8');
  assert.match(jam, /MeshoptDecoder/);
  assert.match(jam, /createJamGltfLoader/);
  assert.match(jam, /setMeshoptDecoder/);
  const { createJamGltfLoader } = await import('../jam-kit.mjs');
  const { MeshoptDecoder } = await import('three/addons/libs/meshopt_decoder.module.js');
  const loader = await createJamGltfLoader();
  assert.ok(loader);
  if (MeshoptDecoder.supported) {
    assert.equal(loader.meshoptDecoder, MeshoptDecoder);
  }
});

test('shipped GLBs use EXT_meshopt_compression and stay under combined budget', () => {
  let combined = 0;
  for (const k of kits) {
    const file = path.join('assets/models', `${k}.glb`);
    const bytes = fs.statSync(file).size;
    combined += bytes;
    const json = readGlbJson(file);
    const used = json.extensionsUsed || [];
    assert.ok(
      used.includes('EXT_meshopt_compression'),
      `${k}.glb missing EXT_meshopt_compression (run npm run compress:glbs)`,
    );
  }
  assert.ok(combined <= 5_000_000, `combined GLBs ${combined} > 5 MB goal`);
});

test('compress-glbs script is a real meshopt pipeline (not a stub)', () => {
  const src = fs.readFileSync('scripts/compress-glbs.mjs', 'utf8');
  assert.match(src, /@gltf-transform\/core/);
  assert.match(src, /meshopt/);
  assert.match(src, /MeshoptEncoder/);
  assert.doesNotMatch(src, /STUB — GLB compression proposal/);
});
