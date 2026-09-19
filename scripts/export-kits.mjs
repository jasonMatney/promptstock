#!/usr/bin/env node
/**
 * Find Blender and run art/skills-jam/blender/export_kits.py
 * Fails with install instructions when Blender or .blend sources are missing.
 */
import { spawnSync } from 'node:child_process';
import { existsSync, readdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const blenderDir = join(root, 'art/skills-jam/blender');
const script = join(blenderDir, 'export_kits.py');
const passArgs = process.argv.slice(2);

function findBlender() {
  if (process.env.BLENDER && existsSync(process.env.BLENDER)) return process.env.BLENDER;
  const which = spawnSync('which', ['blender'], { encoding: 'utf8' });
  if (which.status === 0) return which.stdout.trim();
  const candidates = [
    '/usr/bin/blender',
    '/usr/local/bin/blender',
    '/Applications/Blender.app/Contents/MacOS/Blender',
  ];
  return candidates.find((p) => existsSync(p)) || null;
}

const blender = findBlender();
if (!blender) {
  console.error(`Blender not found on PATH (checked \`blender\` and common install locations).

Install, then re-run \`npm run export:kits\`:
  • Debian/Ubuntu:  sudo apt-get install blender
  • macOS (cask):   brew install --cask blender
                    # then: export BLENDER="/Applications/Blender.app/Contents/MacOS/Blender"
  • Official builds: https://www.blender.org/download/

Or set BLENDER=/path/to/blender. Pipeline docs: art/skills-jam/blender/README.md`);
  process.exit(1);
}

const blends = readdirSync(blenderDir).filter((f) => f.endsWith('.blend'));
if (!blends.length && !passArgs.includes('--list')) {
  console.error(`No .blend sources under art/skills-jam/blender/.

Shipped GLBs in assets/models/ remain playable. To re-export:
  1. Copy editable kits here (see kits.manifest.json basenames).
  2. npm run export:kits
  3. npm run measure:kits && npm run check:glb-budgets && npm test

Docs: art/skills-jam/blender/README.md`);
  process.exit(1);
}

const args = ['--background', '--python', script, '--', ...passArgs];
console.log(`Using ${blender}`);
const result = spawnSync(blender, args, { cwd: root, stdio: 'inherit' });
process.exit(result.status ?? 1);
