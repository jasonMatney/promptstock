# Executed Astra / Blender workflow — 2026-09-19

The local game now includes the GitHub handoff's debug cameras, quality preference,
passport/map modules, NPC registry and schedules, atmosphere controls, meshopt,
asset budgets, browser smoke and visual regression tooling. Local concert-music
restoration and overnight-round reset were retained and tested.

## Art delivered

- Generated a tent concept with the built-in imagegen tool. Prompt and reference
  are committed in `concepts/`.
- Recovered all five editable kits into `blender/sources/`; original local sources
  remain intact. Textures, rigs and player actions are included.
- Executed Blender 4.5.3 to author four striped hip canopies, gathered curtains,
  cedar posts/braces, ochre piping, brass feet and emissive lantern cages.
- Added backpack webbing, buckles, labels and handles, plus record-table trim.
- Exported all five kits, compressed with meshopt, measured evaluated Blender
  meshes and validated actual loaded GLB geometry/bounds/animation.
- Made wide workshop banners readable on one line. The game still supplies crisp
  booth text instead of relying on the concept image or old baked labels.

Each upgraded tent is below the existing 4,000-triangle ceiling. Runtime kit bytes
are approximately 4.63 MB combined, below the manifest's 5 MiB hard ceiling.
The rebuilt `dist/assets` is approximately 8.19 MB. Local sync conflict copies are
excluded from shipping and compression without removing the originals.

## Validation

- `npm run pipeline:kits`: executed Blender export → compress → measure → budgets
  → build → tests. All five kits passed geometry, bounds and byte checks.
- Final `npm test`: 119 passing, including actual GLTFLoader skinning/animation,
  kick contact, navigation, interactions, preserved music/overnight behavior,
  stale-engine rejection and frozen-frame controls.
- `npm run pipeline:check` and `npm run smoke`: passed.
- `npm run smoke:browser`: real Chrome boot, teleport and capture; zero page errors.
- `npm run test:visual`: seven lossless PNG cameras passed at 480×270, low quality.
  A separate missing-baseline run exited nonzero and created no goldens.
- Full-resolution game review: 1440×900 at detailed quality; five final views,
  zero browser errors. Blender Eevee rendered the isolated tent source as well.

Visual capture now freezes time, retains debug-camera ownership on the splash,
and refreshes water reflections for each frozen view. The prior throttled water
reflection could show the previous camera and caused a false pier regression.
The final comparison reported 0% differences for six views and 0.002% for the clinic.
Missing baselines and browser errors fail rather than silently passing. `npm test`
checks engine staleness before rebuilding. Playwright is patched to 1.55.1;
installation reported zero dependency vulnerabilities after the update.

## Evidence

- [Tent concept](concepts/tent-atelier-v1.png)
- [Before, in game](../renders/astra/tents-before.png)
- [After, in game](../renders/astra/tents-after.png)
- [Clinic](../renders/astra/aid-after.png)
- [Prop details](../renders/astra/props-after.png)
- [Overview](../renders/astra/overview-after.png)
- [Blender studio render](../renders/astra/blender-tent.png)

## Scope and limits

This is an authored tent/prop upgrade with an operational five-kit workflow. Player
and crowd geometry were recovered and re-exported, not redesigned. NPC routing and
weather retain the handoff's documented limitations. There was no engine migration
or full HTML rewrite. The browser checks do not establish mobile frame rate, audio
listening quality, or a fresh Sites deployment. Publishing here means the requested
GitHub PR and merge; the existing Site is not automatically redeployed by this task.
