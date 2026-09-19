# Blender sources

Save hero kit `.blend` files here (`tent_kit.blend`, `props_kit.blend`, `player_jam.blend`, `crowd_kit.blend`, `world_dressing.blend`).

Large blends may use Git LFS later — do not invent placeholder binaries for CI. Gameplay ships from `assets/models/*.glb` only.

Before `npm run export:kits`, copy or symlink each blend beside `../kits.manifest.json` (export resolves blends next to the manifest). Image → Blender handoff: [`../../pipeline/README.md`](../../pipeline/README.md).
