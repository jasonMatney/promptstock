# People, not just scenery

The v6 pass replaces the host and all six human crowd templates. The earlier
characters had small pinched faces, detached beard shells and tube-like hair.
The new cast has broader cheek and jaw profiles, inset almond eyes with irises
and catchlights, smiling mouths, painted stubble and closed sculpted hair.
Clothes use restrained folds, layered overshirts with collars and pockets,
tapered trousers, rolled cuffs and the existing festival palette.

The hero keeps the original idle, walk and kick skeleton and contact timing.
The crowd keeps independent height/width proportions and the game's instancing
path. The dog, scenery and gameplay are retained. These are stylized game people;
facial expressions are modeled, not animated.

## Inspect the real models

Open `people-review.html` after `npm run build`. Select all seven characters,
switch to Portrait, drag to orbit, and play the host's three animations. The
viewer loads the exact compressed GLBs used by the festival. It also ships at
`dist/people-review.html` and links back to the festival.

`art/skills-jam/renders/people-v6/` contains actual Blender renders and Chrome
captures. `before-portrait.png` is the previous character's close-up. The new
portrait, full-body view, kick pose and cast lineup are rendered from the new
editable sources, not generated illustrations.

## Reproduce

1. `npm run author:people` (Blender 4.5; originals in Git history remain recoverable).
2. `npm run pipeline:kits` (export, compression, measurements, budgets, build, tests).
3. Run Blender with `--background --python art/skills-jam/blender/review_people.py`.
   Add `-- --portraits` for separate crowd studio portraits.
4. Serve the repository at port 8765; run `npm run smoke:people`.
5. Run `npm run smoke:browser` and `npm run test:visual` for the festival itself.

The authoring script replaces only the selected human hierarchies in the two
working source kits. Hair caps follow the actual cranium profile to prevent
scalp intersections. Degenerate edges and duplicate triangles are removed before export so
source triangle measurements match the compressed geometry.

## Validation

The hero is 14,897 triangles (15,000 ceiling); the six guests are 9,677–10,458
each (12,000 ceiling). The hero GLB is approximately 0.30 MB and the crowd kit
including the preserved textured dog is approximately 3.50 MB. Combined model
assets remain below the existing 5 MiB ceiling. No budget was raised.

The Chrome character review exercises every person, portrait/full-body controls,
all three hero clips and a 390-pixel mobile layout, with no page or asset-load
errors. Blender studio renders were checked for exposed scalp, clothing
intersection and pose defects; discovered defects were corrected before delivery.

Final PR checkout verification: 119/119 automated tests, all GLB/source budgets,
the real Chrome gameplay smoke test, and all seven visual regression cameras
passed. The visual comparison used the existing baselines (0–1.13% pixel
difference, below the 2% limit); the changed character screenshots were inspected
separately at full resolution.
