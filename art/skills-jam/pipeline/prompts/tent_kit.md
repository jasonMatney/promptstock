# Prompt — tent_kit

**Kit id:** `tent_kit`  
**Manifest roots:** `tent_ai`, `tent_maker`, `tent_aid`, `tent_swap`, `newsstand`  
**Budget:** ≤ 4000 tris per root; shipped `tent_kit.glb` byte ceiling in `kits.manifest.json`

## Preconditions

1. Apply [`00-style-lock.md`](00-style-lock.md) + attach `../references/visual_target_01.jpg`.
2. Output images only (concepts / orthos / textures) — **not** a Blender file.

## Prompt body (paste into Astra / GPT Image)

```
Style lock: A stylized summer AI festival — warm dusk light, painterly meadow and foliage cards, friendly low-poly booths and crowd, soft Puerto Rican concert color on stage screens — playful and readable at first-person height, not photoreal, not grimdark. Match the attached visual_target_01 reference.

Create an orthographic turnaround + prop concept sheet for festival booth tents and a newsstand:

1) tent_ai — AI demos booth, soft teal/coral canvas, friendly low-poly A-frame or pop-up tent
2) tent_maker — makerspace booth, slightly larger footprint, warm wood accents, tool-friendly signage area
3) tent_aid — first-aid / wellness booth, calm greens and white cross motif (stylized, not medical-photo)
4) tent_swap — skill-swap booth, playful bunting, chalky signboard
5) newsstand — long low festival newsstand counter with stacked zines/papers (readable silhouette)

Sheet layout: clean orthographic front + side + 3/4 for each tent; shared ground plane; soft dusk fill; painterly canvas folds (low-poly readable, not cloth sim realism).

Also generate 2–4 seamless albedo texture tiles: canvas fabric, painted wood plank, soft meadow-adjacent dirt under booth feet.

Negatives: no photoreal, no UI chrome, no grimdark, no logos of real brands, no .blend / 3D file generation, no cyberpunk neon overload.
```

## Drop outputs

- Concept / turnaround sheets → `../concepts/tent_kit_*`
- Texture tiles → `../textures/tent_*` (seamless where useful)
- Orthos for Blender → `../references/tent_*`
