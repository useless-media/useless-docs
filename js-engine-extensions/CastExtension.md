# Useless JS Engine Extension: Cast

This documentation provides an in-depth overview of the Cast extension for the Useless JS Engine—a cross-platform solution for integrating Google Cast (Chromecast) functionality into applications.

## Overview

The Cast extension enables applications to discover, connect to, and cast media content to Google Cast-compatible devices (such as Chromecast). It provides a unified API that works across multiple platforms through platform-specific native implementations.

### Key Features

- **Device Discovery**: Automatically discover available Cast devices on the network
- **Session Management**: Connect to and disconnect from Cast devices with session state tracking
- **Media Casting**: Cast media content using Google's Load Request format
- **Custom Messaging**: Send and receive custom messages via namespaces
- **Lifecycle Management**: Proper handling of foreground/background transitions
- **Event-driven Architecture**: Delegate-based callbacks for device changes, session events, and messages

---

## Architecture

The extension follows a **cross-platform architecture** with three main components:

```
┌─────────────────────────────────────────────────────────────────┐
│                    TypeScript/JavaScript                        │
│                      (Interface Layer)                          │
│  ┌───────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │ ICastExtension│  │CastExtension │  │CastExtensionDelegate │  │
│  │  (Interface)  │  │ (Declaration)│  │     (Callbacks)      │  │
│  └───────────────┘  └──────────────┘  └──────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              │
              ┌───────────────┼───────────────┐
              ▼               ▼               ▼
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│     Kotlin      │  │      Swift      │  │    Web/Node     │
│   (Android)     │  │     (iOS)       │  │ (Future/Stub)   │
│ ┌─────────────┐ │  │ ┌─────────────┐ │  │                 │
│ │CastExtension│ │  │ │CastExtension│ │  │                 │
│ │ CastManager │ │  │ │  (Scaffold) │ │  │                 │
│ │RouteManager │ │  │ └─────────────┘ │  │                 │
│ └─────────────┘ │  │                 │  │                 │
└─────────────────┘  └─────────────────┘  └─────────────────┘
```

### Directory Structure

```
useless-js-engine-extension-cast/
├── js/                          # TypeScript/JavaScript package
│   └── src/ts/
│       ├── ICastExtension.ts    # Interface definitions
│       ├── CastExtension.ts     # Class declaration (for transpilation)
│       ├── CastExtension.Web.ts # Web implementation
│       ├── CastExtension.Node.ts# Node implementation
│       └── index.*.ts           # Entry points
├── kotlin/                      # Android implementation
│   └── extension/src/main/kotlin/
│       └── com/useless/jsengine/extension/cast/
│           ├── CastExtension.kt # Main extension class
│           └── managers/
│               ├── CastManager.kt    # Cast session management
│               └── RouteManager.kt   # Media route discovery
└── swift/                       # iOS implementation
    └── CastExtension/Sources/
        └── CastExtension/
            └── CastExtension.swift   # iOS extension class
```

---

## How It Works

### 1. Initialization

The extension is initialized with a configuration object specifying:
- **`receiverId`**: The Google Cast Application ID
- **`messageNamespaces`**: Array of custom namespace URIs for messaging

```typescript
interface CastExtensionConfiguration {
  receiverId: string;
  messageNamespaces: Array<string>;
}
```

### 2. Device Discovery

Once initialized, the extension automatically begins discovering Cast devices on the local network. When devices are found or change, the `devicesChanged` delegate callback is triggered.

```typescript
interface CastExtensionDevice {
  id: string;          // Unique device identifier
  name: string;        // Display name of the device
  description?: string;// Optional description
  type: string;        // Device type (e.g., 'DeviceTypes.Cast')
}
```

### 3. Session Lifecycle

The Cast session follows this lifecycle:

```
[Disconnected] ──connect()──> [Starting] ──> [Started] ──disconnect()──> [Ended]
                                   │              │
                              sessionStarting  sessionStarted
                                   ▼              ▼
                              Delegate         Delegate
                              callback         callback
```

### 4. Media Casting

Media is cast using a JSON-formatted Load Request (Google Cast Load Request format):

```typescript
cast(loadRequest: string): void;
```

### 5. Custom Messaging

The extension supports bidirectional custom messaging through registered namespaces:

```typescript
// Send a message
send(namespace: string, message: string): void;

// Receive messages via delegate
delegate.receive(namespace: string, message: string): void;
```

---

## API Reference

### ICastExtension

| Method | Description |
|--------|-------------|
| `initialize(configuration)` | Initialize with Cast configuration (returns Promise) |
| `setDelegate(delegate)` | Set the callback delegate |
| `getSupported()` | Check if Cast is supported on this device |
| `getDevices()` | Get list of discovered devices (JSON string) |
| `connect(deviceId)` | Connect to a Cast device |
| `disconnect(stopCasting?)` | Disconnect (optionally stop casting) |
| `getConnected()` | Check if currently connected |
| `getSessionId()` | Get current session ID |
| `getSessionState()` | Get current session state |
| `cast(loadRequest)` | Cast media (Google Load Request JSON) |
| `send(namespace, message)` | Send custom message |
| `enteringBackground()` | Notify extension of background transition |
| `enteringForeground()` | Notify extension of foreground transition |
| `destroy()` | Clean up resources |

### ICastExtensionDelegate

| Callback | Description |
|----------|-------------|
| `devicesChanged()` | Called when available devices change |
| `receive(namespace, message)` | Called when a custom message is received |
| `sessionStarting(deviceId)` | Called when session is starting |
| `sessionStarted(deviceId)` | Called when session has started |
| `sessionEnded()` | Called when session ends |

---

## Platform Implementations

### Android (Kotlin)

The Android implementation uses:
- **Google Cast SDK** for Cast functionality
- **MediaRouter** for device discovery and route management
- **Lifecycle-aware components** via `LifecycleManager`

Key components:
- `CastExtension.kt` - Main entry point, bridges JS engine to native
- `CastManager.kt` - Manages Cast sessions and media
- `RouteManager.kt` - Handles media route discovery

### iOS (Swift)

The iOS implementation uses:
- **Google Cast SDK** for Cast functionality
- **JavaScriptCore** for JS engine integration

> Note: The Swift implementation is currently a scaffold and needs full implementation.

### Web/Node

The TypeScript package provides type definitions and interface contracts. Platform-specific implementations (`CastExtension.Web.ts`, `CastExtension.Node.ts`) can be extended for web-based Cast sender applications.

---

## Building & Publishing

### JavaScript Package

```bash
# Install dependencies
npm run js:install

# Build (development)
npm run js:build
```

### Android (Kotlin)

```bash
# Sync Gradle
npm run kotlin:sync

# Build
npm run kotlin:build

# Publish to Maven Local
npm run kotlin:publish:local

# Publish to GitHub Packages
npm run kotlin:publish:github
```

See `kotlin/ReadMe.md` for GitHub publishing configuration.

---

## Integration

To integrate this extension into a Useless JS Engine project:

1. Install the JavaScript package: `@useless-media/useless-js-engine-extension-cast`
2. Include the appropriate native dependency (Kotlin/Swift) in your mobile project
3. Register the extension with the JS Engine
4. Initialize and configure the extension with your Cast Application ID

---

## Dependencies

### JavaScript
- `@useless-media/useless-js-engine-sdk` - Base SDK for extensions

### Android
- Google Cast SDK
- Useless JS Engine (Oasis Bridge)
- Useless SDK (Lifecycle Manager, Logging)

### iOS
- Google Cast SDK
- UselessJsEngine
- JavaScriptCore

