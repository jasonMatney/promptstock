import { RECORD_TRACKS, BACKGROUND_TRACK, FINALE_TRACK, CAMP_TRACK } from '../festival-music.mjs';
import { createHash } from 'node:crypto';
import { build } from 'esbuild';
import { mkdir, copyFile, readFile, writeFile, cp, rm, readdir, stat } from 'node:fs/promises';
import { join, relative, extname, dirname } from 'node:path';

const kitLayout = JSON.parse(await readFile('assets/models/layout.json', 'utf8'));
kitLayout.modelRevisions = {};
for (const name of ['tent_kit', 'props_kit', 'player_jam', 'crowd_kit', 'world_dressing']) {
  kitLayout.modelRevisions[name] = createHash('sha256')
    .update(await readFile(`assets/models/${name}.glb`))
    .digest('hex')
    .slice(0, 12);
}
await writeFile('assets/models/layout.json', JSON.stringify(kitLayout, null, 2) + '\n');

await build({
  entryPoints: ['engine-source.mjs'],
  bundle: true,
  format: 'iife',
  target: ['es2022'],
  minify: true,
  outfile: 'engine.js',
  legalComments: 'eof',
});

await mkdir('dist', { recursive: true });
const engineRevision = createHash('sha256')
  .update(await readFile('engine.js'))
  .digest('hex')
  .slice(0, 12);
const page = (await readFile('skills-jam-3d.html', 'utf8')).replace(
  /src="engine\.js(?:\?v=[^"]*)?"/,
  `src="engine.js?v=${engineRevision}"`,
);
await writeFile('skills-jam-3d.html', page);
await writeFile('dist/index.html', page);
await copyFile('engine.js', 'dist/engine.js');
await copyFile('festival-play.css', 'dist/festival-play.css');

/**
 * Ship only playable runtime assets.
 * - Skip OS junk, illustration masters, art-direction README/docs.
 * - Keep concert CREDITS.md (NASA attribution).
 * - Raster sources are pre-optimized (see art/skills-jam/ASSET-BUDGET.md);
 *   this filter is the last line of defense against shipping extras.
 */
function shouldShipAsset(src) {
  const rel = relative(process.cwd(), src).replace(/\\/g, '/');
  if (!rel.startsWith('assets')) return true;
  if (/(^|\/)\.DS_Store$/i.test(rel)) return false;
  if (/\.tmp$/i.test(rel) || /\.candidate$/i.test(rel)) return false;
  if (/skills-jam-2026\.(jpe?g|png)$/i.test(rel)) return false;
  if (/\/README\.md$/i.test(rel)) return false;
  // Illustration / bible masters must never land in dist.
  if (/\/art-direction\/.+\.(md|txt)$/i.test(rel)) return false;
  return true;
}

await rm('dist/assets', { recursive: true, force: true });
await cp('assets', 'dist/assets', { recursive: true, filter: shouldShipAsset });

// Ship only the playable soundtrack copies, keeping source uploads out of the bundle.
await rm('dist/audio', { recursive: true, force: true });
await mkdir('dist/audio/records', { recursive: true });
for (const track of [BACKGROUND_TRACK, FINALE_TRACK, CAMP_TRACK, ...RECORD_TRACKS]) {
  await copyFile(track.src, 'dist/' + track.src);
}
await writeFile('dist/THREE-LICENSE.txt', await readFile('node_modules/three/LICENSE', 'utf8'));

async function dirBytes(root) {
  let total = 0;
  const entries = await readdir(root, { withFileTypes: true });
  for (const e of entries) {
    const p = join(root, e.name);
    if (e.isDirectory()) total += await dirBytes(p);
    else total += (await stat(p)).size;
  }
  return total;
}

const assetsBytes = await dirBytes('dist/assets');
const modelsBytes = await dirBytes('dist/assets/models');
console.log(
  `Built Three.js festival with all local assets. dist/assets=${(assetsBytes / 1e6).toFixed(2)} MB (models=${(modelsBytes / 1e6).toFixed(2)} MB).`,
);
