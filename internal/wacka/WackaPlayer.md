# WackaPlayer

High-level player orchestrating playback, ads, and track management.

It wraps the low-level `WackaEngine` and wires in advertisement and playback controllers so
consumers only interact with a single surface for:
- loading and controlling content (play, pause, seek, stop),
- integrating and controlling advertisement playback,
- managing audio/text/video tracks and playback configurations,
- reacting to a typed event stream (`WackaPlayerEvents`).

Typical integration flow:
1. Create an instance with optional configuration and integrations.
2. Attach a media element.
3. Optionally configure engine / playback profiles.
4. Load a stream URL and call `play()`.

## Examples

```ts
const video = document.querySelector('video') as HTMLVideoElement;
const player = new WackaPlayer({ mediaElement: video });
await player.initialize();

await player.preload({ streams: [ OnDemandStream({ url: 'https://example.com/stream.m3u8' }) ] });
await player.load();

await player.play();
```

```ts
player.on(WackaPlayerEvents.Playing, () => {
  console.log('Playback started at', player.absoluteTime);
});

player.on(WackaPlayerEvents.AdvertisementStarted, ({ id }) => {
  console.log('Ad started with id', id);
});
```

```ts
// Prefer English audio and German subtitles when available
await player.setPreferredTracks({
  audio: ['en'],
  text: ['de']
});
```