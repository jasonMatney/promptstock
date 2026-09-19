#!/usr/bin/env node
/**
 * Verify Astra / GPT Image prompt pack aligns with kits.manifest.json.
 * Expects art/skills-jam/pipeline/prompts/00-style-lock.md plus one
 * `<kitId>.md` per manifest kit. No Blender / image generation required.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifestPath = path.join(root, 'art/skills-jam/blender/kits.manifest.json');
const promptsDir = path.join(root, 'art/skills-jam/pipeline/prompts');
const styleLock = path.join(promptsDir, '00-style-lock.md');
const styleStill = path.join(
  root,
  'art/skills-jam/pipeline/references/visual_target_01.jpg',
);

const failures = [];

if (!fs.existsSync(manifestPath)) {
  failures.push(`missing manifest: ${path.relative(root, manifestPath)}`);
} else if (!fs.existsSync(promptsDir)) {
  failures.push(`missing prompts dir: ${path.relative(root, promptsDir)}`);
} else {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const kits = Array.isArray(manifest.kits) ? manifest.kits : [];
  const kitIds = kits.map((k) => k.id).filter(Boolean);

  if (!fs.existsSync(styleLock)) {
    failures.push('missing prompts/00-style-lock.md');
  }
  if (!fs.existsSync(styleStill)) {
    failures.push('missing pipeline/references/visual_target_01.jpg style lock still');
  }

  const promptFiles = fs
    .readdirSync(promptsDir)
    .filter((f) => f.endsWith('.md'));
  const kitPromptFiles = promptFiles.filter((f) => f !== '00-style-lock.md');
  const promptIds = new Set(kitPromptFiles.map((f) => f.replace(/\.md$/, '')));

  for (const id of kitIds) {
    if (!promptIds.has(id)) {
      failures.push(`manifest kit "${id}" has no prompts/${id}.md`);
    }
  }
  for (const id of promptIds) {
    if (!kitIds.includes(id)) {
      failures.push(`prompts/${id}.md has no matching kits.manifest.json kit id`);
    }
  }

  if (!failures.length) {
    console.log(
      `pipeline:check ok — style lock + ${kitIds.length} kit prompts match manifest (${kitIds.join(', ')})`,
    );
  }
}

if (failures.length) {
  console.error('pipeline:check failed:');
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}
