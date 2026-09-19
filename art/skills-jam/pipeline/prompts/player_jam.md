# Prompt — player_jam

**Kit id:** `player_jam`  
**Manifest roots:** `player_jam`  
**Budget:** ≤ 15000 tris; required clips later in Blender: `idle`, `walk`, `kick`  
**Scale:** ~1.82 m eye / full height ≈ eyeHeight (see MEASUREMENTS)

## Preconditions

1. Apply [`00-style-lock.md`](00-style-lock.md) + attach `../references/visual_target_01.jpg`.
2. Character turnarounds only — do **not** ask the image model for a rigged Blender character.

## Prompt body

```
Style lock: A stylized summer AI festival — warm dusk light, painterly meadow and foliage cards, friendly low-poly booths and crowd, soft Puerto Rican concert color on stage screens — playful and readable at first-person height, not photoreal, not grimdark. Match visual_target_01.

Create an orthographic character turnaround sheet for the player hero "player_jam":

- Friendly festival-goer silhouette, readable at first-person companion distance
- Soft stylized proportions (game-ready low-poly vibe), warm summer festival outfit
- Front, side, back, and 3/4 views on one sheet; T-pose or relaxed A-pose
- Separate expression / costume color callouts if helpful
- Optional small inset: kicking a kickball (pose reference only — animation is authored in Blender)

Also: simple seamless fabric albedo tiles matching the outfit colors.

Negatives: no photoreal skin pores, no UI chrome, no grimdark, no weapon loadouts, no generate .blend / Mixamo dump requests as the primary deliverable, keep cozy Skills Jam look.
```

## Drop outputs

- Turnaround → `../concepts/player_jam_*` and `../references/player_jam_*`
- Fabric tiles → `../textures/player_*`

## Blender note

Rig + clips (`idle` / `walk` / `kick`) are authored in Blender under `blender/sources/player_jam.blend`, then `npm run export:kits`.
