#!/usr/bin/env node
/**
 * STUB — GLB compression proposal (not wired into jam-kit.mjs this PR).
 *
 * Why deferred:
 * - jam-kit.mjs uses vanilla GLTFLoader only (see art/skills-jam/ASSET-BUDGET.md).
 * - Draco / meshopt require DRACOLoader + MeshoptDecoder and shipping wasm/js
 *   through scripts/build.mjs into dist/. Wrong wiring breaks boot.
 *
 * Measured earlier (quantize / optimize trials, not shipped):
 *   crowd_kit  4.07 → ~3.27 MB (quantize) ; plain optimize grew the file
 *   tent_kit   0.84 → ~0.66 MB
 *   props_kit  0.30 → ~0.18 MB
 *   world_dressing 0.32 → ~0.23 MB
 *   player_jam 0.60 → ~0.57 MB
 *
 * Recommended next PR:
 * 1. In jam-kit.mjs loadJamKit():
 *      import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
 *      import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
 *      const draco = new DRACOLoader().setDecoderPath('.../draco/gltf/');
 *      loader.setDRACOLoader(draco);
 *      loader.setMeshoptDecoder(MeshoptDecoder);
 * 2. Copy three/examples/jsm/libs/draco/gltf/* into dist via build.mjs.
 * 3. Compress with: npx @gltf-transform/cli optimize assets/models/IN.glb OUT.glb \\
 *      --compress meshopt  (or draco) after a safety copy.
 * 4. Keep uncompressed originals under art/ or document fallback.
 * 5. npm test + intentional visual golden refresh if look shifts.
 *
 * This stub refuses to mutate assets until the decoder path exists.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const jamKit = fs.readFileSync(path.join(root, 'jam-kit.mjs'), 'utf8');
const hasDecoder =
  /DRACOLoader/.test(jamKit) || /MeshoptDecoder/.test(jamKit) || /setMeshoptDecoder/.test(jamKit);

const models = fs
  .readdirSync(path.join(root, 'assets/models'))
  .filter((f) => f.endsWith('.glb'))
  .map((f) => {
    const bytes = fs.statSync(path.join(root, 'assets/models', f)).size;
    return { f, bytes };
  });

console.log('GLB compression stub (no writes). Current sizes:');
for (const { f, bytes } of models) {
  console.log(`  ${f.padEnd(22)} ${(bytes / 1e6).toFixed(2)} MB`);
}
console.log(`Decoder wired in jam-kit.mjs: ${hasDecoder ? 'yes' : 'NO — refusing to compress'}`);

if (!hasDecoder) {
  console.log(`
Next steps are documented in this file's header and art/skills-jam/ASSET-BUDGET.md.
When ready, re-run with decoder support landed, then invoke gltf-transform here.`);
  process.exit(0);
}

console.error('Decoders detected, but compress-glbs.mjs still needs an explicit implementation pass.');
process.exit(2);
