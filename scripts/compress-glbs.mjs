#!/usr/bin/env node
/**
 * Compress shipped assets/models/*.glb with meshopt (EXT_meshopt_compression).
 *
 * Uses reorder + EXT_meshopt_compression WITHOUT attribute quantization.
 * Quantize (as in gltf-transform's meshopt() helper) breaks skinned-mesh
 * baking / compactSkinnedAsset in this project — keep vertices full-float.
 *
 * Requires MeshoptDecoder wired in jam-kit.mjs (createJamGltfLoader).
 * Replaces GLBs in place; regenerate via `npm run export:kits`, then re-run.
 *
 * Temp outputs MUST end in `.glb` so NodeIO embeds buffers (a non-.glb suffix
 * writes external sidecars and silently drops textures from the GLB).
 *
 * Usage:
 *   npm run compress:glbs
 *   npm run compress:glbs -- --dry-run
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS, EXTMeshoptCompression } from '@gltf-transform/extensions';
import { dedup, prune, reorder } from '@gltf-transform/functions';
import { MeshoptEncoder, MeshoptDecoder } from 'meshoptimizer';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const modelsDir = path.join(root, 'assets/models');
const dryRun = process.argv.includes('--dry-run');

const jamKit = fs.readFileSync(path.join(root, 'jam-kit.mjs'), 'utf8');
const hasDecoder =
  /MeshoptDecoder/.test(jamKit) &&
  (/setMeshoptDecoder/.test(jamKit) || /createJamGltfLoader/.test(jamKit));

if (!hasDecoder) {
  console.error(
    'Refusing to compress: jam-kit.mjs does not wire MeshoptDecoder / createJamGltfLoader.',
  );
  process.exit(1);
}

await MeshoptEncoder.ready;
await MeshoptDecoder.ready;

const io = new NodeIO()
  .registerExtensions(ALL_EXTENSIONS)
  .registerDependencies({
    'meshopt.decoder': MeshoptDecoder,
    'meshopt.encoder': MeshoptEncoder,
  });

const files = fs
  .readdirSync(modelsDir)
  .filter((f) => f.endsWith('.glb'))
  .sort();

if (!files.length) {
  console.error('No GLBs under assets/models/');
  process.exit(1);
}

console.log(
  `Meshopt compress (reorder+encode, no quantize${dryRun ? ', dry-run' : ''}) — decoder wired: yes`,
);

let beforeTotal = 0;
let afterTotal = 0;

for (const file of files) {
  const inputPath = path.join(modelsDir, file);
  const before = fs.statSync(inputPath).size;
  beforeTotal += before;

  const document = await io.read(inputPath);
  await document.transform(
    dedup(),
    prune(),
    reorder({ encoder: MeshoptEncoder, target: 'size' }),
  );
  document
    .createExtension(EXTMeshoptCompression)
    .setRequired(true)
    .setEncoderOptions({ method: EXTMeshoptCompression.EncoderMethod.QUANTIZE });

  // Must end in .glb so NodeIO embeds images/bin (non-.glb → external sidecars).
  const tmpPath = inputPath.replace(/\.glb$/i, '') + '.meshopt-tmp.glb';
  await io.write(tmpPath, document);
  const after = fs.statSync(tmpPath).size;
  afterTotal += after;

  const pct = ((1 - after / before) * 100).toFixed(1);
  console.log(
    `  ${file.padEnd(22)} ${(before / 1e6).toFixed(2)} → ${(after / 1e6).toFixed(2)} MB (${pct}% smaller)`,
  );

  if (dryRun) {
    fs.unlinkSync(tmpPath);
  } else {
    fs.renameSync(tmpPath, inputPath);
  }
}

console.log(
  `Combined: ${(beforeTotal / 1e6).toFixed(2)} → ${(afterTotal / 1e6).toFixed(2)} MB` +
    (dryRun ? ' (not written)' : ''),
);
console.log(
  dryRun
    ? 'Dry run complete. Re-run without --dry-run to replace shipped GLBs.'
    : 'Replaced shipped GLBs. Next: npm run build && npm test',
);
