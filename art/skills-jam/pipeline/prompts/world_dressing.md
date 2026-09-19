# Prompt — world_dressing

**Kit id:** `world_dressing`  
**Manifest roots:** `tree_oak`, `tree_birch`, `tree_pine`, `grass_tuft`, `string_light_cable`, `stage_block`, `mountain_lake_sky_card`  
**Budget:** ≤ 4000 tris per root

## Preconditions

1. Apply [`00-style-lock.md`](00-style-lock.md) + attach `../references/visual_target_01.jpg`.
2. Environment dressing concepts + seamless foliage/ground tiles — not a full world `.blend`.

## Prompt body

```
Style lock: A stylized summer AI festival — warm dusk light, painterly meadow and foliage cards, friendly low-poly booths and crowd, soft Puerto Rican concert color on stage screens — playful and readable at first-person height, not photoreal, not grimdark. Match visual_target_01.

Create an environment dressing reference pack:

1) tree_oak, tree_birch, tree_pine — stylized festival-meadow trees (front + side silhouettes)
2) grass_tuft — small painterly grass clump (alpha-friendly card or low-poly tuft)
3) string_light_cable — warm festival string lights on a cable span
4) stage_block — simple concert stage platform / riser block
5) mountain_lake_sky_card — wide painterly sky/mountain/lake backdrop card (horizontal panorama feel)

Also generate seamless texture tiles: meadow grass albedo, bark, soft dusk sky gradient strip, warm bulb glow detail (stylized).

Negatives: no photoreal nature photography as the goal, no UI chrome, no grimdark forests, no generate .blend / terrain tool export, keep cozy painterly festival meadow read.
```

## Drop outputs

- Concepts → `../concepts/world_dressing_*`
- Tiles → `../textures/world_*`, `../textures/foliage_*`
- Orthos / sky card comps → `../references/world_*`
