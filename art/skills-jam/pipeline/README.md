# Art handoff pipeline (Astra → Blender → ship)

**OpenAI Astra briefing:** [`ASTRA-UPDATE.md`](ASTRA-UPDATE.md) — what Grok shipped (PRs #1–#12), limitations, and what Astra should do next.

Promptstock does **not** generate `.blend` files from GPT Image. Astra + GPT Image produce the visual bible, concept sheets, texture tiles, and Blender reference turnarounds. Humans (or Astra-in-Blender) author hero kits; `npm run export:kits` ships GLB.

**Style lock (must match):**

> A stylized summer AI festival — warm dusk light, painterly meadow and foliage cards, friendly low-poly booths and crowd, soft Puerto Rican concert color on stage screens — playful and readable at first-person height, not photoreal, not grimdark.

Canonical still: [`references/visual_target_01.jpg`](references/visual_target_01.jpg) (copy of [`../visual_target_01.jpg`](../visual_target_01.jpg)). Full bible: [`../VISUAL-BIBLE.md`](../VISUAL-BIBLE.md). Budgets: [`../ASSET-BUDGET.md`](../ASSET-BUDGET.md). Kit roots / ceilings: [`../blender/kits.manifest.json`](../blender/kits.manifest.json).

## Folder map

| Path | Role |
| --- | --- |
| `prompts/` | Astra / GPT Image prompt pack (`00-style-lock.md` + one file per kit) |
| `concepts/` | Drop concept sheets / mood boards here (gitkept; binaries optional) |
| `textures/` | Drop generated albedo / roughness / etc. tiles here |
| `references/` | Orthos, turnarounds, and the canonical style lock still |
| `../blender/sources/` | Save editable `.blend` hero kits here (large; may use Git LFS later) |

## End-to-end handoff

```
Image (Astra / GPT Image)
  → concepts/ + textures/ + references/
  → Blender authoring (sources/*.blend)
  → npm run export:kits
  → measure + budget check
  → npm run compress:glbs
  → npm test + npm run test:visual
```

### 1. Generate image references (Astra / GPT Image)

1. Read [`prompts/00-style-lock.md`](prompts/00-style-lock.md) and attach `references/visual_target_01.jpg`.
2. Run the per-kit prompt under `prompts/` (e.g. `tent_kit.md`).
3. Ask for **orthographic turnaround sheets**, **seamless material/texture tiles**, and **prop sheets** — never “generate a Blender file” or photoreal product shots.
4. Save outputs:
   - Concept / character / booth sheets → `concepts/`
   - Albedo / detail tiles → `textures/`
   - Front / side / top orthos for modeling → `references/`
5. Keep negatives: no photoreal, no UI chrome, no grimdark, match festival cozy stylized look.

Verify prompt coverage anytime:

```sh
npm run pipeline:check
```

### 2. Blender authoring checklist

For each kit in `kits.manifest.json` (`tent_kit`, `props_kit`, `player_jam`, `crowd_kit`, `world_dressing`):

1. **Import refs** — load relevant images from `pipeline/references/`, `concepts/`, and `textures/` as Image Empties / material Image Texture nodes (do not model from memory alone).
2. **Model hero pieces** — one named root per manifest `roots[]` entry (or set `asset_id` custom property). Stay under `triangleBudgetPerRoot`. Metres, Y-up export later, ground pivot unless noted in [`../blender/README.md`](../blender/README.md).
3. **Materials** — prefer albedo tiles from `pipeline/textures/`; keep the cozy low-poly / painterly read of the visual bible.
4. **Save `.blend`** under `art/skills-jam/blender/sources/` using the manifest basename (`tent_kit.blend`, …). Large blends may move to Git LFS later; do not invent placeholder blends for CI.
5. Optional: keep a working copy beside the export scripts if you prefer (`art/skills-jam/blender/*.blend`); export looks for blends next to `kits.manifest.json` — symlink or copy from `sources/` before export if needed.

### 3. Export → measure → budgets → compress → visual test

```sh
# From repo root (Blender 4.2+ on PATH)
# Ensure .blend files are where export_kits.py expects them (see blender/README.md)

npm run export:kits
# or one kit: npm run export:kits -- --kit player_jam

npm run measure:kits
npm run measure:kits -- --write-md   # refresh MEASUREMENTS.md

npm run check:glb-budgets

npm run compress:glbs                # meshopt; re-run after every export

npm test                             # build + engine check + unit suite
npm run test:visual                  # optional; goldens under renders/goldens/
```

Intentional look changes only: `UPDATE_VISUAL_GOLDENS=1 npm run test:visual` and note why in the PR.

### 4. Commit what ships

- New / updated `assets/models/*.glb` (after compress)
- `art/skills-jam/REPORT.json` (+ `MEASUREMENTS.md` if regenerated)
- Pipeline prompts / refs / textures you want shared
- **Not** required: huge `.blend` binaries (optional; LFS later)

## Out of scope

- Generating `.blend` or GLB from image models
- Photoreal / Midjourney boards that fight the bible
- Schedules, NPC data, engine rewrites — separate PRs

## Related commands

| Script | Purpose |
| --- | --- |
| `npm run pipeline:check` | Prompt files ↔ manifest kit ids |
| `npm run export:kits` | Blender → GLB |
| `npm run measure:kits` | Refresh `REPORT.json` |
| `npm run check:glb-budgets` | Triangle / bbox / byte ceilings |
| `npm run compress:glbs` | meshopt ship pass |
| `npm run test:visual` | Golden still compare |
| `npm run render:turnaround` | Optional Eevee ortho from Blender |
