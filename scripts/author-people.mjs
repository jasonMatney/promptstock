#!/usr/bin/env node
/** Run Blender author_people.py on the editable human source kits. */
import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const script = join(root, 'art/skills-jam/blender/author_people.py');
const passArgs = process.argv.slice(2);

function findBlender() {
  if (process.env.BLENDER && existsSync(process.env.BLENDER)) return process.env.BLENDER;
  const local = join(root, '.tools/Blender.app/Contents/MacOS/Blender');
  if (existsSync(local)) return local;
  const which = spawnSync('which', ['blender'], { encoding: 'utf8' });
  if (which.status === 0) return which.stdout.trim();
  for (const p of ['/usr/bin/blender', '/usr/local/bin/blender', '/Applications/Blender.app/Contents/MacOS/Blender']) {
    if (existsSync(p)) return p;
  }
  return null;
}

const blender = findBlender();
if (!blender) {
  console.error(`Blender required for author:people. Install blender or set BLENDER=.
Without Blender, triangle/byte budgets still run via: npm run check:glb-budgets
See art/skills-jam/blender/README.md`);
  process.exit(1);
}

const result = spawnSync(blender, ['--background', '--python-exit-code', '1', '--python', script, '--', ...passArgs], {
  cwd: root,
  stdio: 'inherit',
});
process.exit(result.status ?? 1);
