#!/usr/bin/env node
/**
 * Fails if committed engine.js does not match a fresh esbuild of engine-source.mjs.
 * Shipping still commits engine.js for static hosting; run `npm run build` after
 * editing engine-source.mjs (or anything it imports), then commit both.
 */
import { build } from 'esbuild';
import { createHash } from 'node:crypto';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const SOURCE = join(ROOT, 'engine-source.mjs');
const COMMITTED = join(ROOT, 'engine.js');

const dir = await mkdtemp(join(tmpdir(), 'promptstock-engine-'));
const outfile = join(dir, 'engine.js');

try {
  await build({
    entryPoints: [SOURCE],
    bundle: true,
    format: 'iife',
    target: ['es2022'],
    minify: true,
    outfile,
    legalComments: 'eof',
  });
  const fresh = await readFile(outfile);
  const committed = await readFile(COMMITTED);
  const freshHash = createHash('sha256').update(fresh).digest('hex');
  const committedHash = createHash('sha256').update(committed).digest('hex');
  if (freshHash !== committedHash) {
    console.error('engine.js is stale relative to engine-source.mjs.');
    console.error('Run `npm run build` and commit the regenerated engine.js (and HTML cache-bust query).');
    console.error(`fresh:     ${freshHash.slice(0, 12)}`);
    console.error(`committed: ${committedHash.slice(0, 12)}`);
    process.exit(1);
  }
  console.log(`engine.js matches engine-source.mjs (${committedHash.slice(0, 12)})`);
} finally {
  await rm(dir, { recursive: true, force: true });
}
