# Promptstock ’26

A browser-based, explorable AI festival with Three.js: three mini-games unlock a Puerto Rican headliner concert, plus a canoe trip and a secret overnight camp.

Play: https://promptstock.jamatney.chatgpt.site/

## Run locally

Requires Node.js 22 or newer and Python 3 for the optional preview server.

```sh
npm ci
npm test
python3 scripts/preview-kit.py 8875
```

`npm test` runs `npm run build`, then `npm run check:engine`, then the automated suite. Open http://127.0.0.1:8875/skills-jam-3d.html. To serve the production build, serve the `dist` directory with any static web server. No login, API keys, backend, or CDN is required.

### Engine source of truth

Edit `engine-source.mjs` (and modules it imports). Run `npm run build` to regenerate committed `engine.js` for static hosting at the repo root. `npm run check:engine` (also part of `npm test`) fails if `engine.js` is stale versus a fresh esbuild. Always commit the regenerated `engine.js` (and the HTML `engine.js?v=…` cache-bust) after building.

## Controls

WASD to wander, mouse to look, E to interact, M for the map. Follow the three headliner clues. Mini-games also provide pointer/touch controls. The main menu button returns to the splash screen.

## Source

- `skills-jam-3d.html`: world layout, menus and first-person exploration.
- `engine-source.mjs`: Three.js renderer; `engine.js` is its generated bundle.
- `game-debug.mjs`: `window.gameDebug` console API (teleport, cameras, quality, screenshots); attached after boot.
- `festival-play.mjs`: activities and progression.
- `festival-concert.mjs` and `concert-layout.mjs`: shuffled audience, reserved companion positions, instanced flags and satellite signs.
- `festival-npcs.mjs`: data-driven NPC registry (featured companions + crowd groups/roles/schedules); see file header for how to add an NPC.
- `npc-schedule.mjs`: free-roam schedule runner — maps tags (`watch_stage`, `visit_food_stall`, `talk_with_friends`, …) to locations/lingers; featured NPCs lerp via FestivalReactions homes; crowd groups share a phase (LOD). Pauses during the concert.
- `festival-crowd.mjs`: background guest positions generated from `CROWD_GROUPS` in the NPC registry.
- `jam-kit.mjs`: GLB loading (MeshoptDecoder), batching and baked character poses.
- `lake-adventure.mjs`: canoe and camping experience.
- `assets/models`: game-ready GLBs; `assets/concert/CREDITS.md`: satellite-image credits.
- `art/skills-jam/ASSET-BUDGET.md`: ship-size budgets and recompress notes; `art/skills-jam/VISUAL-BIBLE.md`: style target + visual regression pointers.
- `art/skills-jam/blender/`: Blender → GLB export scripts + manifest (`npm run export:kits`, `compress:glbs`, `measure:kits`, `check:glb-budgets`). Editable `.blend` files are optional and usually not committed. Shipped GLBs are meshopt-compressed.
- `audio`: browser-ready soundtrack MP3s (96 kbps stereo; see `audio/README.md`); `festival-music.mjs`: track mapping and playback.
- `passport-store.mjs`: localStorage key constants and passport / discovery load-save helpers (exposed as `window.PassportStore`).

This repository contains the current playable source and assets, not earlier development history or the original reference illustration. Internal filenames and save keys retain their existing names for compatibility. Progress is stored in the browser for the current hostname.

Browser `localStorage` keys (hostname-scoped; see `passport-store.mjs` and `game-debug.mjs`):

- `skillsjam.world.passport.v1` — passport stamps / pills / record
- `skillsjam.discovery.v2` — discovered districts
- `skillsjam.round.v1` — mini-game round state
- `skillsjam.quality.v1` — rendering quality preference (`high` or `low`); applied on boot before the first heavy frame

## Verification

85 automated tests cover progression, model loading, animation, spatial separation, companion restoration, audio state and world navigation. Concert guests are spaced irregularly and shuffled independently of character-model batches. 36 extra flags and 12 extra satellite signs use shared render batches.


## NPC schedules

Between concerts, featured companions and crowd groups cycle their `schedule` tags from `festival-npcs.mjs`:

1. **Tag → behavior** (`npc-schedule.mjs` `TAG_BEHAVIORS`): target from `LOCATION_KEYS` (or home), linger seconds, optional facing (stage / inward / home).
2. **Featured NPCs** walk by updating FestivalReactions home poses (same transform path used for cheer/dance). Hero, dog, and robot stay put so mini-games keep working.
3. **Background groups** share one phase per `CROWD_GROUPS` entry; bound instanced guests get a cluster translate (no per-frame pathfinding across ~73 people).
4. **Event-owned tags**: `concert_seat` (FestivalConcert seating) and `cheer` (celebration poses) are skipped in free-roam cycles.
5. Concert open/close still snapshots and restores transforms; the runner pauses while the headliner is active.

## AI / console debug

After the world boots, open the browser console:

```js
gameDebug.listNpcs()
gameDebug.getNpc('maya')
gameDebug.focusNpc('maya')  // stand near + look at
gameDebug.getNpcSchedule('maya')
gameDebug.setNpcSchedule('maya', ['watch_stage', 'visit_food_stall'])
gameDebug.advanceSchedule('maya')  // or advanceSchedule() for everyone
gameDebug.listCameras()
gameDebug.setQuality('low')   // persists to skillsjam.quality.v1
gameDebug.capture('pier')     // PNG data URL (preserveDrawingBuffer is on)
gameDebug.captureAll()        // [{name, dataUrl}, ...] for every preset
gameDebug.screenshot('camp', {download: true})
```

GPU-free module smoke (no browser):

```sh
npm run smoke
```

Headless browser smoke (serves the repo, waits for `window.gameDebug`, teleports, captures a PNG):

```sh
npx playwright install chromium   # once per machine
npm run smoke:browser
```

`smoke:browser` uses Playwright as a devDependency. If Playwright’s Chromium is missing it tries system Chrome (`channel: chrome` / `/usr/bin/google-chrome`). Optional env: `SMOKE_BOOT_MS` (default 120000), `SMOKE_PORT`, `CHROME_PATH`.

Or with the preview server: `python3 scripts/preview-kit.py 8875`, open the page, then use the one-liners above.


## Visual regression

Named-camera JPEG goldens live in `art/skills-jam/renders/goldens/` (480×270, low quality, ~25 KB each). Compare with Playwright + pixelmatch:

```sh
npx playwright install chromium   # once per machine
npm run test:visual               # compare; exit 1 if >2% pixels differ
UPDATE_VISUAL_GOLDENS=1 npm run test:visual   # rewrite goldens
# or: node scripts/compare-visual.mjs --update
```

Diffs and actual captures land in `art/skills-jam/renders/artifacts/` (gitignored). This is **not** part of `npm test` — keep the unit suite fast. Captures can still flake across GPUs/fonts; prefer low quality + fixed viewport, and re-golden deliberately.

Map destinations / tour stop lists live in `festival-map-data.mjs` (`window.FestivalMapData`).

## Campsite and audio updates

Campsite props now block walking, with sliding along obstacles and a reachable tent-entrance bedtime interaction. The island has instanced grass with clear paths. Playing music fades to silence over 700 ms before a replacement starts; pause and rapid selections cancel pending transitions.

### Soundtrack encode

Shipped MP3s are re-encoded for web weight (**96 kbps stereo, 44.1 kHz**). See `audio/README.md` to regenerate after replacing a master. `npm run build` copies only the playable paths from `festival-music.mjs` into `dist/audio`.

