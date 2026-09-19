# Visual bible (Skills Jam)

**Style target:** A stylized summer AI festival — warm dusk light, painterly meadow and foliage cards, friendly low-poly booths and crowd, soft Puerto Rican concert color on stage screens — playful and readable at first-person height, not photoreal, not grimdark.

## Canonical look

- Primary still: [`renders/goldens/festival_stage_wide.jpg`](renders/goldens/festival_stage_wide.jpg)
- Convenience copy for agents: [`visual_target_01.jpg`](visual_target_01.jpg) (same frame)

Other goldens under `renders/goldens/` (`meadow_path`, `camp`, `pier`, `player_closeup`) cover secondary beats. Do not invent new Midjourney boards unless product asks; prefer these captures.

## How agents should check look

1. Boot the world (`npm run build`, serve repo or `dist`).
2. After `window.gameDebug` is ready, force a stable baseline:
   - `gameDebug.setQuality('low')` (visual tests already do this)
   - `gameDebug.setCamera('festival_stage_wide')` or another named preset
   - `gameDebug.capture('festival_stage_wide')` / `gameDebug.screenshot(...)`
3. Compare against goldens:

```sh
npm run test:visual
# intentional art change only:
UPDATE_VISUAL_GOLDENS=1 npm run test:visual
```

Threshold and viewport defaults live in `scripts/compare-visual.mjs`. If a change is intentional, update goldens in the same PR and note why (lighting, texture recompress, mesh edit).

## Out of scope here

Schedules / NPC data, WebGPU, full HTML rewrite — separate PRs. Asset size targets: see [`ASSET-BUDGET.md`](ASSET-BUDGET.md).
