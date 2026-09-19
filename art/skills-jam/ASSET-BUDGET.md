# Asset budget (Skills Jam / Promptstock)

Ship weight matters for first paint and for cloning the playable tree. Runtime assets live under `assets/` and are copied into `dist/assets` by `scripts/build.mjs` (extras filtered out).

## Before / after (P5 raster pass)

Measured on branch `feat/ai-native-p5-assets-bible` (source tree under `assets/`, excluding audio).

| Asset | Role | Before | After | Notes |
| --- | --- | ---: | ---: | --- |
| `models/crowd_kit.glb` | Crowd + animals | **4.07 MB** | 4.07 MB | Follow-up: Draco/meshopt (needs decoder wiring) |
| `art-direction/meadow-albedo-v2.png` | Ground meadow albedo | 3.45 MB (1254²) | **0.99 MB** (1024²) | Runtime texture — keep in dist |
| `camp-v2/canvas.png` | Camp canvas | 3.27 MB | **0.61 MB** | Palette PNG @ 1024 |
| `festival-notice` | Splash poster | 3.15 MB PNG | **0.21 MB JPG** | Path → `festival-notice.jpg` |
| `camp-v2/stone.png` | Camp stone | 3.08 MB | **0.52 MB** | Palette PNG @ 1024 |
| `foliage-spray.png` | Alpha foliage cards | 2.01 MB (1254²) | **0.41 MB** (1024²) | Keep alpha |
| `camp-v2/fur.png` | Camp fur | 1.91 MB | **0.29 MB** | Palette PNG @ 1024 |
| `concert/puerto-rico-landsat.jpg` | Stage / signs | 1.51 MB (2490×2713) | **0.32 MB** (1175×1280) | JPEG q≈82 |
| `models/tent_kit.glb` | Booth tents | 0.84 MB | 0.84 MB | Follow-up |
| `models/player_jam.glb` | Player | 0.60 MB | 0.60 MB | Follow-up |
| `models/world_dressing.glb` | Props / dressing | 0.32 MB | 0.32 MB | Follow-up |
| `models/props_kit.glb` | Props | 0.30 MB | 0.30 MB | Follow-up |
| `concert/puerto-rico-orbit.jpg` | Stage / signs | 0.19 MB | 0.19 MB | Already small |

**Raster total (listed):** ~18.4 MB → ~3.3 MB (~82% smaller).  
**`assets/` folder:** ~24 MB → ~9.3 MB (models unchanged ~6.1 MB).  
**`dist/assets` after build:** mirrors the optimized tree (no art-direction README / illustration masters).

## Target budgets (guidelines)

| Class | Target (each) | Hard ceiling |
| --- | ---: | ---: |
| Splash / UI poster | ≤ 0.3 MB | 0.5 MB |
| Foliage (with alpha) | ≤ 0.5 MB | 0.75 MB |
| Repeating albedo (PNG) | ≤ 1.0 MB @ ≤1024 | 1.5 MB |
| Concert / sign photos (JPEG) | ≤ 0.4 MB @ ≤1280 | 0.6 MB |
| Individual GLB (until compressed) | document size | crowd ≤ 4.5 MB |
| All `assets/models/*.glb` | ≤ 4 MB combined (goal) | 6.5 MB today |

## How to recompress rasters

Requires `sharp` (devDependency):

```sh
node scripts/optimize-rasters.mjs
```

Rules of thumb:

- Max edge **1024** for game albedos / foliage; **1280** for concert photos; splash long edge **1024**.
- Prefer JPEG for opaque photos/posters; PNG (or palette PNG) when alpha or flat color ramps matter.
- Do **not** commit `*.tmp` / `*.candidate` files.
- After changing splash path or textures that affect framing, run `npm test` and ideally `npm run test:visual`.

## Blender → GLB pipeline (P7)

Editable sources (optional): `art/skills-jam/blender/*.blend` — see [`blender/README.md`](blender/README.md) and `blender/kits.manifest.json`.

```sh
npm run export:kits          # blender --background --python export_kits.py
npm run measure:kits         # refresh REPORT.json (blend or GLB fallback)
npm run check:glb-budgets    # triangles / bbox / byte ceilings (no Blender)
npm run render:turnaround    # optional Eevee still → renders/turnarounds/
```

Workflow: edit in Blender → `export:kits` → `measure:kits` → `check:glb-budgets` → `npm test` → commit GLBs + `REPORT.json`. If Blender or `.blend` files are missing, `export:kits` exits with install / source instructions; shipped GLBs remain playable.

Budgets are also summarized in `MEASUREMENTS.md` when generated with `npm run measure:kits -- --write-md`.

## GLB compression (deferred — stub only)

Vanilla `GLTFLoader` only (no `DRACOLoader` / `MeshoptDecoder` in `jam-kit.mjs`). Aggressive Draco/meshopt would break boot until decoders are wired and wasm/js is shipped.

`npm run compress:glbs` is a **stub**: it prints sizes and refuses to mutate assets until decoders exist.

Trial measurements (local, not shipped):

| File | Plain optimize (no meshopt/draco) | Quantize only |
| --- | ---: | ---: |
| `crowd_kit.glb` | 4.07 → **4.26 MB** (grew) | 4.07 → **3.27 MB** |
| `tent_kit.glb` | 0.84 → **0.66 MB** | — |
| `props_kit.glb` | 0.30 → **0.18 MB** | — |
| `world_dressing.glb` | 0.32 → **0.23 MB** | — |
| `player_jam.glb` | 0.60 → **0.57 MB** | — |

Recommended next PR:

1. Add Three.js Draco + meshopt decoder support in `jam-kit.mjs` (and copy wasm/js in `scripts/build.mjs`).
2. Implement compression in `scripts/compress-glbs.mjs` via `@gltf-transform/cli`; re-hash via `npm run build`.
3. Re-run `npm test` and `UPDATE_VISUAL_GOLDENS=1 npm run test:visual` only if the look changes — document in the PR.

Tools already usable locally: `npx @gltf-transform/cli inspect|optimize|quantize`, Blender CLI (`npm run export:kits`), ImageMagick/`sharp`.

## Build copy rules

`scripts/build.mjs` copies `assets/` → `dist/assets` but skips:

- `.DS_Store`, `*.tmp`, `*.candidate`
- `skills-jam-2026.(jpg|jpeg|png)` illustration masters
- any `README.md` under assets
- art-direction docs (`.md` / `.txt`)

Kept: playable GLBs, optimized rasters, `concert/CREDITS.md` (NASA attribution).

## Visual goldens (this PR)

Raster recompress (especially palette camp albedos) nudged `camp` and `player_closeup` just over the 2% visual threshold. Goldens were refreshed with `UPDATE_VISUAL_GOLDENS=1 npm run test:visual` on purpose — look target unchanged; compression artifacts only. Stage / meadow / pier stayed under threshold without refresh.
