# Prompt — crowd_kit

**Kit id:** `crowd_kit`  
**Manifest roots:** `crowd_1` … `crowd_6`, `golden_retriever`  
**Budget:** ≤ 12000 tris per root (crowd characters are heavier; stay friendly/readable)

## Preconditions

1. Apply [`00-style-lock.md`](00-style-lock.md) + attach `../references/visual_target_01.jpg`.
2. Featured / background festival guests + dog — image refs only.

## Prompt body

```
Style lock: A stylized summer AI festival — warm dusk light, painterly meadow and foliage cards, friendly low-poly booths and crowd, soft Puerto Rican concert color on stage screens — playful and readable at first-person height, not photoreal, not grimdark. Match visual_target_01.

Create a festival crowd character sheet:

- Six distinct friendly guests (crowd_1 … crowd_6): varied body types, summer festival outfits, readable silhouettes, diverse but cohesive palette
- Each guest: front + side orthographic mini-turnaround in a grid
- golden_retriever: friendly stylized dog companion, orthographic turnaround, soft fur read (painterly / low-poly, not photoreal fur)

Keep everyone cozy and approachable — concert-goers and meadow wanderers, not fashion-editorial realism.

Negatives: no photoreal, no UI chrome, no grimdark, no crowd horror, no generate .blend, no copyrighted mascots.
```

## Drop outputs

- Sheets → `../concepts/crowd_kit_*`
- Fur / fabric tiles → `../textures/crowd_*`, `../textures/retriever_*`
- Orthos → `../references/crowd_*`
