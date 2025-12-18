# Useless JS Engine Module: Cast

A cross-platform Chromecast module for the Useless JS Engine ecosystem. This module provides a unified TypeScript API for controlling Chromecast sessions from native iOS and Android applications.

---

## Overview

The Cast Module acts as a bridge between native mobile applications and Chromecast receivers. It handles:

- **Device Discovery** — Detecting available Chromecast devices on the network
- **Session Management** — Establishing and managing cast sessions
- **Playback Control** — Play, pause, seek, volume, and track selection
- **Messaging** — Bi-directional communication with the Chromecast receiver
- **Debugging** — Remote debugging capabilities for development

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     Native Application                          │
│                   (Android / iOS)                               │
├─────────────────────────────────────────────────────────────────┤
│                     CastModule (TypeScript)                     │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │
│  │  CastExtension  │  │  UselessSender  │  │ UselessDebugging│  │
│  │  (Native Bridge)│  │  (Messaging)    │  │ (Dev Tools)     │  │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  │
├─────────────────────────────────────────────────────────────────┤
│                     Chromecast Receiver                         │
└─────────────────────────────────────────────────────────────────┘
```

### Key Components

| Component | Description |
|-----------|-------------|
| `CastModule` | Main entry point exposing the Cast API to native applications |
| `CastExtension` | Native bridge interface for platform-specific Chromecast SDK integration |
| `UselessSender` | Handles message serialization and the sender-receiver protocol |
| `UselessDebugging` | Optional remote debugging support for development |

---

## How It Works

### 1. Initialization

The module is initialized with a configuration object that sets up the Cast extension and optional debugging:

```typescript
const castModule = new CastModule();

await castModule.initialize({
  castExtension: {
    applicationId: 'YOUR_CHROMECAST_APP_ID',
    messageNamespaces: ['urn:x-cast:your.custom.namespace']
  },
  deviceInformation: { /* device metadata */ },
  debuggingUrl: 'wss://your-debug-server.com' // optional
});
```

### 2. Device Discovery & Connection

Once initialized, the module discovers available Chromecast devices:

```typescript
// Get available devices (returns JSON string of CastExtensionDevice[])
const devicesJson = castModule.getDevices();
const devices = JSON.parse(devicesJson);

// Connect to a specific device
castModule.connect(deviceName);

// Check connection status
const isConnected = castModule.getConnected();
```

### 3. Casting Content

After connecting, cast content using a Google Cast Load Request:

```typescript
const loadRequest = {
  media: {
    contentId: 'https://example.com/video.mp4',
    contentType: 'video/mp4'
  }
};

castModule.cast(JSON.stringify(loadRequest));
```

### 4. Playback Control

Control playback using the built-in commands:

```typescript
await castModule.play();
await castModule.pause();
await castModule.stop();
await castModule.seek(30000);           // Seek to 30 seconds
await castModule.seek(10000, true);     // Seek forward 10 seconds (relative)
await castModule.setVolume(0.8);        // Set volume to 80%
await castModule.setMuted(true);        // Mute audio
await castModule.setAudioTrack(1);      // Select audio track
await castModule.setTextTrack(2);       // Select subtitle track
```

### 5. Session Management

Manage the cast session lifecycle:

```typescript
// Disconnect (optionally stop casting)
castModule.disconnect(true);  // true = stop casting on receiver

// Handle app lifecycle (mobile)
castModule.enteringBackground();
castModule.enteringForeground();

// Get session info
const sessionId = castModule.getSessionId();
const sessionState = castModule.getSessionState();

// Clean up
castModule.destroy();
```

---

## Message Protocol

The module uses custom Cast namespaces for communication:

| Namespace | Purpose |
|-----------|---------|
| `urn:x-cast:messaging.useless.client` | Primary client-receiver communication |
| `urn:x-cast:messaging.useless.debug` | Debug commands and responses |

### Client Commands (Sender → Receiver)

| Command | Description |
|---------|-------------|
| `Command.Play` | Resume playback |
| `Command.Pause` | Pause playback |
| `Command.Stop` | Stop playback |
| `Command.Seek` | Seek to position |
| `Command.SetVolume` | Set volume level |
| `Command.SetMuted` | Set mute state |
| `Command.SetAudioTrack` | Select audio track |
| `Command.SetTextTrack` | Select subtitle track |
| `Command.SkipSection` | Skip current section |
| `Command.DismissStillWatching` | Dismiss "still watching?" prompt |

### Client Messages (Receiver → Sender)

| Message | Description |
|---------|-------------|
| `Session.PlaybackSessionStateChanged` | Playback state updates |

---

## Project Structure

```
useless-js-engine-module-cast/
├── src/
│   └── ts/
│       ├── CastModule.ts                              # Main module class
│       ├── Constants.ts                               # Command/message enums
│       └── UselessMessagingExtensionMessagingConnection.ts  # Messaging bridge
├── apps/
│   ├── android/                                       # Android reference app
│   │   └── cast-reference-application/
│   └── iOS/                                           # iOS reference app
│       └── CastModuleSwift/
├── dist/                                              # Built output
│   ├── cjs/                                           # CommonJS build
│   ├── esm/                                           # ES Modules build
│   └── umd/                                           # UMD build (browser)
├── rollup.config.js                                   # Build configuration
├── package.json
└── tsconfig.json
```

---

## Building

### Prerequisites

- Node.js (LTS version recommended)
- npm

### Development Build

```bash
# Install dependencies
npm install

# Build (development mode with source maps)
npm run build:dev

# Watch mode for development
npm run start:dev
```

### Production Build

```bash
# Build optimized bundle (minified, no source maps)
npm run build:release
```

### Native Module Build

```bash
# Generate native platform bindings
npm run build:native
```

### Build Outputs

The build produces three module formats:

| Format | Path | Use Case |
|--------|------|----------|
| CommonJS | `dist/cjs/` | Node.js, legacy bundlers |
| ES Modules | `dist/esm/` | Modern bundlers, native ES modules |
| UMD | `dist/umd/` | Browser script tags, AMD |

---

## Reference Applications

### Android

Located in `apps/android/cast-reference-application/`. A Kotlin/Jetpack Compose application demonstrating the Cast module integration.

```bash
cd apps/android
./gradlew build
```

### iOS

Located in `apps/iOS/CastModuleSwift/`. A SwiftUI application demonstrating the Cast module integration.

Open `CastModuleSwift.xcodeproj` in Xcode to build and run.

---

## Dependencies

### Runtime Dependencies (bundled)

- `@useless-media/useless-sdk` — Core utilities
- `@useless-media/useless-js-engine-sdk` — JS Engine module interface
- `@useless-media/useless-messaging-sdk` — Messaging protocol
- `@useless-media/useless-debug-sdk` — Debugging utilities
- `@useless-media/useless-chromecast-sdk` — Chromecast message types

### External Dependencies (peer)

- `@useless-media/useless-js-engine-extension-cast` — Native Cast extension bridge

---

## Scripts Reference

| Script | Description |
|--------|-------------|
| `npm run build:dev` | Development build with source maps |
| `npm run build:release` | Production build (minified) |
| `npm run build:native` | Generate native platform bindings |
| `npm run start:dev` | Watch mode (development) |
| `npm run start:release` | Watch mode (release) |
| `npm test` | Run tests with Vitest |
| `npm run find:circular` | Detect circular dependencies |
| `npm run link` | Link local dependencies |
| `npm run unlink` | Restore npm dependencies |

---

## Publishing

The package is published to GitHub Package Registry:

```json
{
  "publishConfig": {
    "registry": "https://npm.pkg.github.com/"
  }
}
```

Package name: `@useless-media/useless-js-engine-module-cast`

