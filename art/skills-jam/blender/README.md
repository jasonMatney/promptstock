# Editable Blender workflow

The five working kits are committed under `sources/`. The manifest resolves those
paths directly; no copying or symlinking is needed. These were recovered from the
existing local authoring files, including packed textures, rigs and player actions.
The original local files outside `sources/` remain intact.

Use Blender **4.5 LTS** and Node 22+. Set `BLENDER=/path/to/blender`, install Blender
on PATH, or use the standard macOS application. The wrappers also discover a local
`.tools/Blender.app` (ignored by Git). This workspace has Blender 4.5.3 there.
Blender scripts propagate failures through `--python-exit-code 1`.

```sh
npm ci
# Edit and save sources/*.blend in Blender, then:
npm run pipeline:kits
```

This executes export → meshopt compression → evaluated source measurement →
triangle/bounds/byte checks → build → tests. Export applies geometry modifiers and
preserves skinning, packed textures, custom root metadata, and the player's NLA
clips (`idle`, `walk`, `kick`). Meshopt stays unquantized to preserve skinned baking.

To reproduce the current tent and prop art pass on the working sources:

```sh
npm run author:kits
npm run pipeline:kits
npm run render:turnaround -- --kit tent_kit --root tent_ai
```

`author:kits` replaces the four tent hierarchies and regenerates its own prop
accents. It is optional: **do not run it over subsequent hand-edited tent designs
unless you intend to restore this procedural design.** Ordinary Blender edits only
need `pipeline:kits`. It never edits the original local `blender/*.blend` files.
The design reference is `../pipeline/concepts/tent-atelier-v1.png`.

Individual commands accept a kit selector where useful:

```sh
npm run export:kits -- --kit player_jam
npm run measure:kits -- --kit player_jam --write-md
npm run compress:glbs
npm run check:glb-budgets
npm run build
npm test
```

Manifest root names and `asset_id` values are the runtime contract. Keep metres,
ground pivots, packed images and required clips. Never export studio cameras or
lights. Turnarounds read the editable source and isolate the requested hierarchy;
they do not try to import meshopt GLBs back into Blender.

Measurements use evaluated meshes at frame 1, including modifiers. Budget checks
load actual compressed GLBs through the same meshopt decoder used by the game.
Source-less measurement falls back to GLB import only for uncompressed GLBs.

For art acceptance, serve the repository with `python3 -m http.server 8765`, then:

```sh
npm run capture:art -- after
npm run smoke:browser
# Inspect full-resolution images before explicitly accepting regression baselines:
UPDATE_VISUAL_GOLDENS=1 npm run test:visual
npm run test:visual
```

The deterministic regression set uses lossless PNGs, fixed time and camera, and
low quality. Full-resolution captures in `renders/astra/` cover detailed rendering.
Missing baselines fail. `npm test` checks the committed engine before rebuilding;
after changing runtime source, run `npm run build` before testing/committing.
