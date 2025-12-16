# Quick Start

```ts
const video = document.querySelector('video') as HTMLVideoElement;
const player = new WackaPlayer({ mediaElement: video });
await player.initialize();

await player.preload({ streams: [ OnDemandStream({ url: 'https://example.com/stream.m3u8' }) ] });
await player.load();

await player.play();
```