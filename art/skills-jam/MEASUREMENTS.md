# Kit measurements

Derived from committed `REPORT.json` (authoritative triangle / bbox snapshot).
Refresh via `npm run measure:kits` when Blender sources or shipped GLBs change; prefer measuring from `.blend` files over GLB round-trip.
Budgets enforced by `npm run check:glb-budgets` and `tests/kit.test.cjs` / `tests/glb-budgets.test.cjs`.

## tent_kit

| Asset | Tris | Size XYZ (m) | Height÷eye |
| --- | ---: | --- | ---: |
| `tent_ai` | 2794 | 9.0878×6.7958×4.1 | 2.253 |
| `tent_maker` | 2794 | 12.9758×9.0558×4.65 | 2.555 |
| `tent_aid` | 2794 | 9.0878×6.7958×4.1 | 2.253 |
| `tent_swap` | 2794 | 8.8718×6.5698×4.05 | 2.225 |
| `newsstand` | 372 | 7.4×1.15×3 | 1.648 |

## props_kit

| Asset | Tris | Size XYZ (m) | Height÷eye |
| --- | ---: | --- | ---: |
| `kickball_globe` | 288 | 0.26×0.26×0.26 | 0.143 |
| `vinyl_crate` | 108 | 0.485×0.455×0.29 | 0.159 |
| `record_communicate` | 158 | 0.3×0.0085×0.3 | 0.165 |
| `record_solve` | 158 | 0.3×0.0085×0.3 | 0.165 |
| `record_create` | 158 | 0.3×0.0085×0.3 | 0.165 |
| `record_connect` | 158 | 0.3×0.0085×0.3 | 0.165 |
| `record_stay_curious` | 158 | 0.3×0.0085×0.3 | 0.165 |
| `jar_prompt` | 90 | 0.244×0.244×0.3375 | 0.185 |
| `jar_tool` | 90 | 0.244×0.244×0.3375 | 0.185 |
| `jar_context` | 90 | 0.244×0.244×0.3375 | 0.185 |
| `record_table` | 92 | 1.8×0.65×0.89 | 0.489 |
| `skill_cards_stand` | 102 | 1.1×0.42×0.955 | 0.525 |
| `wood_signs` | 258 | 1.1×0.09×2.25 | 1.236 |
| `water_bottle` | 116 | 0.14×0.14×0.339 | 0.186 |
| `backpack_teal` | 144 | 0.32×0.302×0.45 | 0.247 |
| `backpack_rust` | 144 | 0.32×0.302×0.45 | 0.247 |
| `first_aid_robot` | 1390 | 0.8281×0.41×1.2116 | 0.666 |

## player_jam

| Asset | Tris | Size XYZ (m) | Height÷eye |
| --- | ---: | --- | ---: |
| `player_jam` | 14216 | 0.7634×0.3831×1.8289 | 1.005 |

## crowd_kit

| Asset | Tris | Size XYZ (m) | Height÷eye |
| --- | ---: | --- | ---: |
| `crowd_1` | 7242 | 0.8143×0.3485×1.832 | 1.007 |
| `crowd_2` | 6942 | 0.6635×0.4271×1.7191 | 0.945 |
| `crowd_3` | 6666 | 0.7201×0.3406×1.7292 | 0.95 |
| `crowd_4` | 6352 | 0.8596×0.3524×1.8754 | 1.03 |
| `crowd_5` | 7252 | 0.7012×0.4271×1.8563 | 1.02 |
| `crowd_6` | 6666 | 0.7732×0.3406×1.6401 | 0.901 |
| `golden_retriever` | 3092 | 0.4469×1.7067×0.9378 | 0.515 |

## world_dressing

| Asset | Tris | Size XYZ (m) | Height÷eye |
| --- | ---: | --- | ---: |
| `tree_oak` | 672 | 4.3514×3.5932×5.75 | 3.159 |
| `tree_birch` | 672 | 2.4705×3.0226×5.9 | 3.242 |
| `tree_pine` | 92 | 3.5453×3.4914×6.1 | 3.352 |
| `grass_tuft` | 7 | 0.4089×0.3176×0.36 | 0.198 |
| `string_light_cable` | 1968 | 12.0567×0.11×0.8419 | 0.463 |
| `stage_block` | 122 | 12.3×5×5.37 | 2.951 |
| `mountain_lake_sky_card` | 2 | 120×0×20 | 10.989 |

## Byte ceilings (guidelines)

- `crowd_kit.glb` ≤ 4718592 bytes
- `tent_kit.glb` ≤ 1572864 bytes
- `player_jam.glb` ≤ 1048576 bytes
- `props_kit.glb` ≤ 786432 bytes
- `world_dressing.glb` ≤ 786432 bytes
- `allGlbsCombined` ≤ 6815744 bytes

