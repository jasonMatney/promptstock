# Festival soundtrack (web playback)

Runtime files are **browser-ready MP3s** referenced by `festival-music.mjs`.
`scripts/build.mjs` copies only those paths into `dist/audio` (no masters or extras).

## Current encode settings

Regenerate the shipped MP3s with ffmpeg (keeps the same filenames / paths):

```sh
# From repo root. Overwrites each playable track in place.
for f in audio/*.mp3 audio/records/*.mp3; do
  tmp="${f%.mp3}.reencode.mp3"
  ffmpeg -y -i "$f" \
    -codec:a libmp3lame -b:a 96k -ac 2 -ar 44100 \
    -map_metadata -1 -write_xing 1 \
    "$tmp" && mv "$tmp" "$f"
done
```

| Setting | Value |
|--------|--------|
| Codec | MP3 (libmp3lame) |
| Bitrate | 96 kbps CBR |
| Channels | stereo |
| Sample rate | 44.1 kHz |

96 kbps stereo is intentional for festival loops / ambient soundtrack weight.
If you replace a track, update any `?v=` cache-bust revision in `festival-music.mjs`
(currently used for Stay Curious) to a fresh content hash prefix.

## Layout

- `audio/*.mp3` — background, camp, and finale tracks
- `audio/records/*.mp3` — crate / record player songs

Source masters (e.g. m4a uploads) are not required at runtime. If you keep masters
in the tree later, put them outside the playable paths and leave build copy rules
pointing only at these MP3s.
