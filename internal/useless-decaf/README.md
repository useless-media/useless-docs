# Useless DeCaf

**DeCaf** is an alternative to Google’s Cast Application Framework better known as Caf.
It is built directly on the hardware eliminating all the bulky application code making it both significantly faster
as well as infinitely more versatile than Google's “one box fits all” Chromecast solution.
Decaf allows you to build exactly what you want, exactly how you want to do it.

---

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Key Concepts](#key-concepts)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [API Reference](#api-reference)
- [Messaging](#messaging)
- [Configuration](#configuration)
- [Licensing](#licensing)

---

## Overview

DeCaf abstracts away the complexity of working directly with Google's Cast receiver SDK, providing:

- **Simplified media playback control** — play, pause, seek, stop, volume
- **Track management** — audio and subtitle track selection
- **Custom messaging** — bidirectional communication between senders and receiver
- **Error management** — centralized error handling with customizable UI
- **Session management** — playback session tracking
- **Debug tooling** — remote debugging and introspection capabilities
- **License validation** — built-in license management

---

## Architecture

DeCaf follows a layered architecture with three main modules:

```
┌─────────────────────────────────────────────────┐
│                   ServiceLayer                  │  ← Service integration, business logic
├─────────────────────────────────────────────────┤
│              CommercialDeCafClient              │  ← DeCaf Client, Player, State management, Messaging implementation
├─────────────────────────────────────────────────┤
│                     DeCaf                       │  ← High-level API
├─────────────────────────────────────────────────┤
│                   DeCafCore                     │  ← Low-level platform bridge
├─────────────────────────────────────────────────┤
│          Google Cast Firmware/Platform          │  ← Chromecast hardware
└─────────────────────────────────────────────────┘
```

### DeCafCore

The foundational layer that handles direct communication with the Chromecast firmware/platform. It:

- Intercepts and processes Cast messages (load, play, pause, seek, etc.)
- Manages media status state and broadcasts updates to senders
- Handles license validation
- Provides namespace registration for custom messaging

### DeCaf

The main application layer built on top of DeCafCore. It provides:

- **ClientManager** — manages DeCafClient instances for actual media playback
- **LoadManager** — queues and processes load requests
- **MediaStatusUpdater** — keeps media status in sync
- **MessagingController** — handles sender/receiver communication
- **ErrorManager** — centralized error handling with i18n support
- **PlaybackSession** — tracks playback state across loads

---

## Key Concepts

### DeCafClient

`DeCafClient` is an abstract class that defines the interface for media playback implementations. You implement this class to handle actual media loading and playback (e.g., using Shaka Player, Video.js, or any other player).

```typescript
abstract class DeCafClient {
  abstract initialize(): Promise<void>;
  abstract handleLoad(load: Load, playbackSession: PlaybackSession): Promise<void>;
  abstract handlePlay(command?: PlayCommand): Promise<void>;
  abstract handlePause(command?: PauseCommand): Promise<void>;
  abstract handleSeek(command?: SeekCommand): Promise<void>;
  abstract handleStop(command?: StopCommand): Promise<void>;
  // ... more methods
}
```

### Message Namespaces

DeCaf uses namespaced messaging for communication:

| Namespace | Purpose |
|-----------|---------|
| `urn:x-cast:messaging.useless.decaf` | DeCaf control messages |
| `urn:x-cast:messaging.useless.debug` | Debug/introspection messages |
| `urn:x-cast:messaging.useless.client` | Client-specific messages |
| `urn:x-cast:messaging.useless.custom` | Custom application messages |

### Media Status

DeCaf maintains a `MediaStatusState` object that reflects the current playback state. This is automatically broadcast to all connected senders when changes occur. The state includes:

- Player state (idle, buffering, playing, paused)
- Current time and duration
- Volume level and mute state
- Active tracks
- Metadata (title, images, etc.)

---

## Quick Start

```typescript
import { DeCaf, DeCafCore } from '@useless-media/useless-decaf';

// Create the core instance
const core = new DeCafCore({
    configuration: {
        license: 'YOUR_LICENSE_KEY'
    }
});

// Create the DeCaf instance
const decaf = new DeCaf({
    container: document.querySelector('#container'),
    core: core,
    configuration: {
        clientUrl: 'path/to/your/client.js'
    }
});

// Start the receiver
await decaf.start();
```

---

## API Reference

### DeCaf

#### Properties

| Property | Type | Description |
|----------|------|-------------|
| `container` | `HTMLDivElement` | The DOM container for the receiver UI |
| `configuration` | `IDeCafConfiguration` | Current configuration |
| `deviceInfo` | `DeCafDeviceInfo` | Device information |
| `client` | `DeCafClient \| undefined` | Current client instance |
| `playbackSession` | `PlaybackSession \| undefined` | Current playback session |

#### Methods

| Method | Description |
|--------|-------------|
| `start()` | Start the receiver application |
| `stop()` | Stop the receiver application |
| `shutdown(reason?)` | Gracefully shutdown with optional reason |
| `reset(resetClient?)` | Reset the receiver state |
| `load(load)` | Load media content |
| `loadNext()` | Load the next item in queue |
| `sendMessage(message, namespace?, receiverId?)` | Send a custom message |
| `registerNamespace(namespace)` | Register a custom messaging namespace |
| `setErrorHandler(delegate)` | Set custom error handling |
| `setLicenseKey(key)` | Set the license key |

### DeCafCore

#### Methods

| Method | Description |
|--------|-------------|
| `start()` | Start the core receiver |
| `stop()` | Stop the core receiver |
| `registerNamespace(namespace, handler)` | Register a message namespace |
| `sendMessage(namespace, message, senderId?)` | Send a message |
| `getMediaStatusState()` | Get the media status state manager |
| `setDelegate(delegate)` | Set the core delegate for event handling |

---

## Messaging

### Receiving Messages

Register a namespace and handle incoming messages:

```typescript
const channel = decaf.registerNamespace('urn:x-cast:my.custom.namespace');

channel.on('myMessageType', (message) => {
    console.log('Received:', message);
});
```

### Sending Messages

Send messages to connected senders:

```typescript
await decaf.sendMessage({
    type: 'myResponse',
    data: { status: 'ok' }
}, 'urn:x-cast:my.custom.namespace');
```

---

## Configuration

### IDeCafConfiguration

```typescript
interface IDeCafConfiguration {
    baseUrl: string;           // Base URL for loading resources
    clientUrl?: string;        // URL to the client implementation
    client: Record<string, any>; // Client-specific configuration
    environment: Environments; // Production or Development
    features: IDeCafFeatures;  // Feature flags
    license?: string;          // License key
    logoUrl?: string;          // Logo for media metadata
}
```

## Licensing

DeCaf requires a valid license key for production use. The license can be provided:

1. Via configuration at initialization
2. Via the `setLicenseKey()` method
3. In the load request's `auxiliaryData.license` or `configuration.receiver.license`

```typescript
// At initialization
const decaf = new DeCaf({
    configuration: {
        license: 'YOUR_LICENSE_KEY'
    }
});

// Or dynamically
decaf.setLicenseKey('YOUR_LICENSE_KEY');
```

---

## Module Exports

The package provides three entry points:

```typescript
// Full package (DeCaf + DeCafCore)
import { DeCaf, DeCafCore } from '@useless-media/useless-decaf';

// Core only
import { DeCafCore } from '@useless-media/useless-decaf/core';
```

---

## Dependencies

DeCaf relies on several `@useless-media` packages:

- `@useless-media/useless-chromecast-sdk` — Chromecast types and utilities
- `@useless-media/useless-debug-sdk` — Remote debugging tools
- `@useless-media/useless-interceptor` — Request/response interception
- `@useless-media/useless-media-sdk` — Media types and utilities
- `@useless-media/useless-messaging-sdk` — Messaging infrastructure
- `@useless-media/useless-sdk` — Core utilities and helpers