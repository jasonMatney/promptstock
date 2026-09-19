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
- `jam-kit.mjs`: GLB loading, batching and baked character poses.
- `lake-adventure.mjs`: canoe and camping experience.
- `assets/models`: game-ready GLBs; `assets/concert/CREDITS.md`: satellite-image credits.
- `audio`: browser-ready soundtrack files; `festival-music.mjs`: track mapping and playback.

This repository contains the current playable source and assets, not earlier development history or the original reference illustration. Internal filenames and save keys retain their existing names for compatibility. Progress is stored in the browser for the current hostname.

Browser `localStorage` keys (hostname-scoped):

- `skillsjam.world.passport.v1` — passport stamps / pills / record
- `skillsjam.discovery.v2` — discovered districts
- `skillsjam.round.v1` — mini-game round state
- `skillsjam.quality.v1` — rendering quality preference (`high` or `low`); applied on boot before the first heavy frame

## Verification

85 automated tests cover progression, model loading, animation, spatial separation, companion restoration, audio state and world navigation. Concert guests are spaced irregularly and shuffled independently of character-model batches. 36 extra flags and 12 extra satellite signs use shared render batches.

## AI / console debug

After the world boots, open the browser console:

```js
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

Or with the preview server: `python3 scripts/preview-kit.py 8875`, open the page, then use the one-liners above.

## Campsite and audio updates

Campsite props now block walking, with sliding along obstacles and a reachable tent-entrance bedtime interaction. The island has instanced grass with clear paths. Playing music fades to silence over 700 ms before a replacement starts; pause and rapid selections cancel pending transitions.
