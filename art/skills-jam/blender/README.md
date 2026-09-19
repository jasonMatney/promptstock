# Blender → GLB kit pipeline

Editable Blender sources for Promptstock hero kits live **here** (not committed by default — blends are large and optional for gameplay). Shipped game-ready binaries stay in `assets/models/*.glb`.

## Sources + image handoff

Editable hero `.blend` files belong in [`sources/`](sources/) (gitkept; large binaries may use Git LFS later). Copy or symlink a kit blend beside this README (basename must match `kits.manifest.json`) before `npm run export:kits`.

Astra / GPT Image does **not** author blends — it supplies concepts, textures, and orthos. Full Image → Blender → export → budget → compress → visual-test flow: [`../pipeline/README.md`](../pipeline/README.md).

## Kits

| Kit id | Expected blend | Shipped GLB | Notes |
| --- | --- | --- | --- |
| `tent_kit` | `tent_kit.blend` | `assets/models/tent_kit.glb` | Booths + newsstand |
| `props_kit` | `props_kit.blend` | `assets/models/props_kit.glb` | Records, jars, robot, … |
| `player_jam` | `player_jam.blend` | `assets/models/player_jam.glb` | Clips: idle / walk / kick |
| `crowd_kit` | `crowd_kit.blend` | `assets/models/crowd_kit.glb` | Six guests + retriever |
| `world_dressing` | `world_dressing.blend` | `assets/models/world_dressing.glb` | Trees, stage, sky card |

Root object names (or `asset_id` custom properties) must match `kits.manifest.json`. Custom props `asset_id`, `kit`, and `jam_pivot` export as glTF extras consumed by `jam-kit.mjs`.

## Prerequisites

- **Blender 4.2+** on `PATH` as `blender` (or set `BLENDER=/path/to/blender`).
  - Debian/Ubuntu: `sudo apt-get install blender`
  - macOS: `brew install --cask blender` then symlink `blender` onto your PATH
  - https://www.blender.org/download/
- Node 22+ for the npm wrappers and budget checks.

## Workflow

```sh
# 1. Edit geometry / materials / actions in Blender (save .blend here).
# 2. Export all kits (or one):
npm run export:kits
npm run export:kits -- --kit player_jam

# 3. Refresh REPORT.json (+ optional MEASUREMENTS.md):
npm run measure:kits
npm run measure:kits -- --write-md

# 4. Enforce triangle / bbox / byte budgets against shipped GLBs:
npm run check:glb-budgets

# 5. Rebuild cache-bust hashes + engine, then test:
npm test
```

`npm run export:kits` fails clearly when Blender is missing or when the requested `.blend` files are absent. Gameplay does **not** require blends — only re-authoring does.

### Measure without blends

`measure_kits.py` falls back to importing the shipped GLB when a `.blend` is missing, so CI / agents can refresh `REPORT.json` from binaries alone.

### Optional turnaround still

```sh
npm run render:turnaround -- --kit player_jam
# → art/skills-jam/renders/turnarounds/player_jam_player_jam.png
```

Cheap Eevee ortho snapshot for the visual bible; not part of `npm test`.

## Export conventions (keep `tests/kit.test.cjs` green)

- One library GLB per kit; multiple named roots with `asset_id` extras.
- No cameras / punctual lights in the file.
- Embed textures (retriever fur must stay bufferView-backed).
- Y-up glTF; metres; ground pivot (`jam_pivot: ground`) unless a prop is centre-pivoted (kickball / records).
- Player actions named exactly `idle`, `walk`, `kick`.

## Compression

Shipped GLBs stay **uncompressed** (vanilla `GLTFLoader` only). See `scripts/compress-glbs.mjs` and the GLB follow-up section in [`../ASSET-BUDGET.md`](../ASSET-BUDGET.md) before enabling Draco / meshopt.
