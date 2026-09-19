# OpenAI Astra — Promptstock update & handoff

**Date:** 2026-09-19 (ET)  
**Repo:** https://github.com/jasonMatney/promptstock  
**Main tip at handoff:** `8a4fa8b` (after PR #12)  
**Product:** Promptstock ’26 / Skills Jam — Three.js first-person festival world  
**Live:** https://promptstock.jamatney.chatgpt.site  
**Audience:** OpenAI Astra (not a Grok teammate). Treat this as the briefing for art direction, Blender hero kits, and any code quality pass you choose to run.

---

## 1. Executive summary

A Grok Bot session on Jason’s machine drove an **AI-native engineering retrofit** into `jasonMatney/promptstock` (PRs **#1–#12**, all merged to `main`). The goal was not a finished art upgrade; it was to make the game **inspectable, testable, and handoff-ready** so Astra can own look and hero assets with GPT Image + Blender.

**What Grok actually delivered:** tooling, data splits, load-size cuts, debug/screenshot/visual-regression loops, NPC/atmosphere *systems*, and an art **pipeline scaffold**.

**What Grok did *not* deliver:** new hero meshes from Blender, a real GPT Image generation run, a prettier default look, or production-grade architecture. Default boot still matches the prior afternoon festival look by design.

**Honest framing for Astra:** Assume Grok’s code is **serviceable scaffolding**. Prefer your own judgment on structure, rendering, Blender authoring, and image prompts. Reuse what helps (`gameDebug`, visual goldens, budgets, meshopt, passport/map/npc modules); rewrite what doesn’t.

---

## 2. What Grok did (merged PRs)

| PR | Title | What landed |
| ---: | --- | --- |
| [#1](https://github.com/jasonMatney/promptstock/pull/1) | AI-native P0 + `window.gameDebug` | `npm test` builds first; `check:engine` SoT; debug teleport/cameras/state/quality |
| [#2](https://github.com/jasonMatney/promptstock/pull/2) | Quality + screenshots | `skillsjam.quality.v1`; `capture` / `captureAll`; node smoke |
| [#3](https://github.com/jasonMatney/promptstock/pull/3) | Playwright browser smoke | `npm run smoke:browser` (boot → gameDebug → capture) |
| [#4](https://github.com/jasonMatney/promptstock/pull/4) | Audio + passport store | MP3s ~27→16 MB; `passport-store.mjs` |
| [#5](https://github.com/jasonMatney/promptstock/pull/5) | Visual regression + map data | Goldens + `test:visual`; `festival-map-data.mjs` |
| [#6](https://github.com/jasonMatney/promptstock/pull/6) | Asset budget + visual bible | Rasters ~24→9 MB; `VISUAL-BIBLE.md`; `ASSET-BUDGET.md` |
| [#7](https://github.com/jasonMatney/promptstock/pull/7) | Data-driven NPCs | `festival-npcs.mjs` registry (featured + crowd groups) |
| [#8](https://github.com/jasonMatney/promptstock/pull/8) | Blender → GLB pipeline | Export/measure/turnaround scripts; **no `.blend` sources in repo** |
| [#9](https://github.com/jasonMatney/promptstock/pull/9) | meshopt GLB compression | Kits ~6.1→4.5 MB; `MeshoptDecoder` in jam-kit (no quantize — broke skinned bake) |
| [#10](https://github.com/jasonMatney/promptstock/pull/10) | NPC schedule runner | Tag → walk phases; concert pause; debug schedule APIs |
| [#11](https://github.com/jasonMatney/promptstock/pull/11) | Atmosphere systems | Wind / time-of-day / ambient audio live; weather clouds stub |
| [#12](https://github.com/jasonMatney/promptstock/pull/12) | Art pipeline handoff | Prompt pack + folders for Image → Blender → export |

### Stack (unchanged on purpose)

- **Three.js r186** + esbuild IIFE → `engine.js` (committed generated twin; edit `engine-source.mjs`)
- **WebGL**, not WebGPU / Vite / TypeScript (Jason preferred keep shipping path)
- Static host on chatgpt.site; local: `python3 -m http.server` after `npm run build`

### AI-native surfaces you should use

```js
// After boot:
gameDebug.listLocations()
gameDebug.go('stage')
gameDebug.setCamera('festival_stage_wide')
gameDebug.capture('festival_stage_wide')
gameDebug.captureAll()
gameDebug.setTime('dusk')        // or night / noon / late-afternoon
gameDebug.setWind(1.2)
gameDebug.listNpcs()
gameDebug.focusNpc('maya')
gameDebug.setQuality('low')
gameDebug.getAtmosphere()
```

```sh
npm ci && npm test          # unit + build + engine check
npm run smoke               # fast node smoke
npm run smoke:browser       # Playwright + Chromium
npm run test:visual         # pixelmatch vs goldens
UPDATE_VISUAL_GOLDENS=1 npm run test:visual   # only when art change is intentional
npm run pipeline:check      # prompts ↔ kit manifest
npm run export:kits         # needs Blender + .blend sources
npm run compress:glbs
npm run check:glb-budgets
```

### Known limitations / debt Grok left

1. **`skills-jam-3d.html` is still a god file** — only passport storage + map destination *data* were peeled out.
2. **No `.blend` files** — pipeline is empty of sources; shipped GLBs were never re-authored.
3. **Default graphics look ≈ pre-session** — atmosphere/wind are dials; boot defaults preserve goldens.
4. **NPC schedules** — straight-line lerps, no pathfinding/collision; crowd LOD by cluster proximity.
5. **Weather** — stub (`clouds` only).
6. **Dual engine SoT** — `engine.js` still committed; `check:engine` detects staleness.
7. **Dense one-liner modules** — readable to machines, painful for humans; fair game to refactor.
8. **Visual goldens** are low-res JPEG (480×270) under low quality — good for regression, not art critique.
9. **Grok never ran GPT Image** and never opened Blender on hero kits.

---

## 3. What OpenAI Astra should do next

Ordered for leverage. Code review is assumed continuous; this list is **product work**, not “approve Grok’s PR.”

### A. Art direction (GPT Image) — **do this first**

1. Read and obey:
   - [`VISUAL-BIBLE.md`](../VISUAL-BIBLE.md)
   - [`pipeline/prompts/00-style-lock.md`](prompts/00-style-lock.md)
   - Canonical still: [`references/visual_target_01.jpg`](references/visual_target_01.jpg)
2. Run the per-kit prompt pack (improve the prompts freely if they’re weak):
   - `prompts/player_jam.md`
   - `prompts/tent_kit.md`
   - `prompts/props_kit.md`
   - `prompts/crowd_kit.md`
   - `prompts/world_dressing.md`
3. Drop outputs into:
   - `pipeline/concepts/` — turnaround / orthographic sheets, mood boards
   - `pipeline/textures/` — albedo / fabric / wood / foliage tiles (seamless where useful)
   - `pipeline/references/` — Blender modeling refs
4. **Do not** try to emit `.blend` from the image model. Images → Blender → GLB only.

**Success:** a coherent sheet set that a Blender pass can model from without guessing the style.

### B. Blender hero kits — **this is how graphics actually get better**

1. Author `.blend` files under `art/skills-jam/blender/sources/` (see that folder’s README).
2. Match triangle / bbox budgets in [`ASSET-BUDGET.md`](../ASSET-BUDGET.md) and [`blender/kits.manifest.json`](../blender/kits.manifest.json).
3. Run:

```sh
npm run export:kits
npm run measure:kits
npm run check:glb-budgets
npm run compress:glbs
npm run build && npm test
UPDATE_VISUAL_GOLDENS=1 npm run test:visual   # after intentional look change
```

4. Priority order for visual impact: **player_jam → tent_kit → props_kit → world_dressing → crowd_kit**.

**Success:** new GLBs in `assets/models/` that clearly beat the current low-poly jam kits at first-person distance, with goldens updated in the same PR.

### C. Rendering / look-dev (code you may replace)

Grok’s atmosphere/graphics wiring is a start. You may want to:

- Raise default lighting / materials / meadow quality while keeping a low path for mobile
- Replace or extend `festival-graphics.mjs` / sky / contact shadows with stronger look-dev
- Drive `TimeOfDaySystem` from a real day cycle or quest beats
- Flesh out weather (clouds → sky shader already has a hook)
- Improve NPC motion (pathing, idle/talk poses) on top of `npc-schedule.mjs`

Use `gameDebug.setCamera` + `test:visual` as the contract, not screenshots in chat.

### D. Code quality pass (expected to exceed Grok)

Jason’s stance: **your review and refactor will likely outperform this session’s code.** Fair targets:

| Area | Why |
| --- | --- |
| Split `skills-jam-3d.html` | Boot / HUD / input / world still tangled |
| ESM vs `window.Festival*` IIFE | Cleaner imports, less global soup |
| TypeScript + Vite (optional) | Only if Jason wants a toolchain jump; he deferred this earlier |
| Engine commit policy | Stop dual-editing `engine.js` / automate ship build |
| Test pyramid | Keep unit tests fast; expand Playwright coverage of booths/concert |
| NPC data vs views | Push further toward state/view separation |

Do **not** block art on a full rewrite. Parallel tracks: **art in Blender** while **refactor on a branch**.

### E. Explicitly out of scope unless Jason asks

- Unity / Unreal migration
- WebGPU day-one rewrite
- Regenerating all audio masters
- Deleting git history to shrink pack size
- Messaging Grok Bot “Astra” teammates (Jason’s Astra is **OpenAI**)

---

## 4. Working rules Jason already set

1. Keep https://github.com/jasonMatney/promptstock **up to date** — commit and push; don’t leave work only local.
2. Keep **Three.js / WebGL** shipping path unless he changes that.
3. Image models = concepts/textures/refs; **Blender** = hero geometry.
4. Intentional visual changes → update goldens in the same PR (`UPDATE_VISUAL_GOLDENS=1`).
5. Prefer small PRs with `npm test` green; run `test:visual` when look changes.

---

## 5. Suggested first week for Astra

| Day | Focus |
| --- | --- |
| 1 | Style lock + regenerate prompt pack if needed; produce player + tent concept sheets |
| 2 | Texture tiles for canvas/wood/foliage; drop into `pipeline/textures/` |
| 3–4 | Blender `player_jam` + `tent_kit` sources; export; budgets; compress |
| 5 | Update visual goldens; optional lighting pass; open PR(s) against `main` |
| Ongoing | Refactor god HTML / module boundaries when not blocked on art |

---

## 6. File map (quick)

```
art/skills-jam/
  VISUAL-BIBLE.md
  ASSET-BUDGET.md
  MEASUREMENTS.md
  visual_target_01.jpg
  pipeline/
    ASTRA-UPDATE.md          ← this file
    README.md
    prompts/                   ← GPT Image prompts
    concepts/ textures/ references/
  blender/
    export_kits.py measure_kits.py turnaround.py kits.manifest.json
    sources/                   ← put .blend files here
  renders/goldens/             ← visual regression baselines

game-debug.mjs atmosphere.mjs festival-npcs.mjs npc-schedule.mjs
festival-map-data.mjs passport-store.mjs jam-kit.mjs
```

---

## 7. One-paragraph brief you can paste into Astra

> Promptstock (`jasonMatney/promptstock`, main after PR #12) is a Three.js festival game. Grok Bot added AI-native tooling: `window.gameDebug`, screenshot/visual regression, lighter audio/rasters/meshopt GLBs, data-driven NPCs + schedule runner, atmosphere systems, and an art pipeline under `art/skills-jam/pipeline/`. Default look was intentionally left alone. There are **no Blender sources** yet. Your job: use GPT Image with the prompt pack and visual bible to generate concepts/textures (not .blend files), author hero kits in Blender into `blender/sources/`, run `export:kits` → budgets → `compress:glbs` → update visual goldens. Treat Grok’s code as scaffolding—review and upgrade freely. Keep GitHub `main` current. Do not rely on Grok teammates for art; you are OpenAI Astra.

---

*Prepared for OpenAI Astra by Grok Bot (agent name: Promptstock), 2026-09-19.*
