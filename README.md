# Promptstock ’26

A browser-based, explorable AI festival with Three.js: three mini-games unlock a Puerto Rican headliner concert, plus a canoe trip and a secret overnight camp.

Play: https://promptstock.jamatney.chatgpt.site/

## Run locally

Requires Node.js 22 or newer and Python 3 for the optional preview server.

```sh
npm ci
npm run build
npm test
python3 scripts/preview-kit.py 8875
```

Open http://127.0.0.1:8875/skills-jam-3d.html. To serve the production build, serve the `dist` directory with any static web server. No login, API keys, backend, or CDN is required.

## Controls

WASD to wander, mouse to look, E to interact, M for the map. Follow the three headliner clues. Mini-games also provide pointer/touch controls. The main menu button returns to the splash screen.

## Source

- `skills-jam-3d.html`: world layout, menus and first-person exploration.
- `engine-source.mjs`: Three.js renderer; `engine.js` is its generated bundle.
- `festival-play.mjs`: activities and progression.
- `festival-concert.mjs` and `concert-layout.mjs`: shuffled audience, reserved companion positions, instanced flags and satellite signs.
- `jam-kit.mjs`: GLB loading, batching and baked character poses.
- `lake-adventure.mjs`: canoe and camping experience.
- `assets/models`: game-ready GLBs; `assets/concert/CREDITS.md`: satellite-image credits.
- `audio`: browser-ready soundtrack files; `festival-music.mjs`: track mapping and playback.

This repository contains the current playable source and assets, not earlier development history or the original reference illustration. Internal filenames and save keys retain their existing names for compatibility. Progress is stored in the browser for the current hostname.

## Verification

71 automated tests cover progression, model loading, animation, spatial separation, companion restoration, audio state and world navigation. Concert guests are spaced irregularly and shuffled independently of character-model batches. 36 extra flags and 12 extra satellite signs use shared render batches.
