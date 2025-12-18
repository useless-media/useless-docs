# Useless JS Engine Extension: Messaging

A cross-platform WebSocket messaging extension for the [Useless JS Engine](https://github.com/useless-media). This extension enables JavaScript code running inside the Useless JS Engine to establish WebSocket connections and exchange real-time messages with external servers.

## Overview

The Messaging Extension provides a unified API for WebSocket communication across multiple platforms:

- **JavaScript/TypeScript** — For use in Node.js and Web browsers
- **Android (Kotlin)** — Native implementation using OkHttp WebSocket
- **iOS (Swift)** — Native implementation using URLSession WebSocket

When JavaScript code runs inside the Useless JS Engine on a native platform (Android/iOS), the native implementation handles the actual WebSocket connection. For Node.js or browser environments, the JavaScript implementation is used directly.

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     JavaScript Module                           │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │              IMessagingExtension Interface                │  │
│  │  • initialize(config)  • send(message)  • setDelegate()   │  │
│  └───────────────────────────────────────────────────────────┘  │
│                              │                                  │
│           ┌──────────────────┼──────────────────┐               │
│           ▼                  ▼                  ▼               │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────────────┐  │
│  │   Node.js   │    │     Web     │    │  Native (bridged)   │  │
│  │  (ws lib)   │    │ (WebSocket) │    │  Android / iOS      │  │
│  └─────────────┘    └─────────────┘    └─────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Native Implementations                       │
│  ┌───────────────────────┐    ┌───────────────────────────────┐ │
│  │   Android (Kotlin)    │    │         iOS (Swift)           │ │
│  │  OkHttp WebSocket     │    │   URLSession WebSocketTask    │ │
│  └───────────────────────┘    └───────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

---

## API Reference

### Configuration

The extension is initialized with a configuration object:

```typescript
interface MessagingExtensionConfiguration {
  url: string;  // WebSocket server URL (e.g., "wss://example.com/socket")
}
```

### IMessagingExtension Interface

The main extension interface provides these methods:

| Method | Description |
|--------|-------------|
| `initialize(config)` | Connects to the WebSocket server using the provided configuration. Returns a Promise that resolves to the extension instance. |
| `send(message)` | Sends a string message through the WebSocket connection. |
| `setDelegate(delegate)` | Sets a delegate object to receive connection events and incoming messages. |
| `destroy()` | Closes the WebSocket connection and cleans up resources. |

### IMessagingExtensionDelegate Interface

The delegate interface allows you to handle events from the WebSocket connection:

```typescript
interface IMessagingExtensionDelegate {
  handleConnected: () => void;      // Called when WebSocket connection opens
  handleDisconnected: () => void;   // Called when WebSocket connection closes
  receive: (message: string) => void; // Called when a message is received
}
```

---

## Usage Example

```typescript
import { IMessagingExtension, IMessagingExtensionDelegate } from '@useless-media/useless-js-engine-extension-messaging';

// Create the extension instance
const messaging = await createMessagingExtension();

// Set up delegate to handle events
const delegate: IMessagingExtensionDelegate = {
  handleConnected: () => {
    console.log('Connected to WebSocket server');
  },
  handleDisconnected: () => {
    console.log('Disconnected from WebSocket server');
  },
  receive: (message: string) => {
    console.log('Received message:', message);
  }
};

messaging.setDelegate(delegate);

// Initialize with WebSocket URL
await messaging.initialize({ url: 'wss://your-server.com/socket' });

// Send messages
messaging.send('Hello, server!');

// Clean up when done
messaging.destroy();
```

---

## Platform Implementations

### JavaScript (Node.js & Web)

The JavaScript package (`js/`) provides implementations for both Node.js and browser environments:

- **Node.js**: Uses the `ws` library for WebSocket support
- **Web**: Uses the native browser `WebSocket` API

The package exports are configured to automatically select the appropriate implementation based on the environment.

**Installation:**
```bash
npm install @useless-media/useless-js-engine-extension-messaging
```

**Imports:**
```typescript
// Default (type definitions only, for cross-platform modules)
import { IMessagingExtension } from '@useless-media/useless-js-engine-extension-messaging';

// Node.js specific
import { MessagingExtension } from '@useless-media/useless-js-engine-extension-messaging/node';

// Web specific  
import { MessagingExtension } from '@useless-media/useless-js-engine-extension-messaging/web';
```

### Android (Kotlin)

The Android implementation (`android/`) uses OkHttp for WebSocket connections and integrates with the Useless JS Engine's Oasis bridge.

**Key features:**
- Automatic reconnection on connection failures
- SSL/TLS support with configurable trust settings
- Proper lifecycle management through the `BaseExtension` class

**Installation (Gradle):**
```kotlin
implementation("com.useless.jsengine.extension:messaging:VERSION")
```

**Native installation:**
```kotlin
MessagingExtension.install(appContext, oasisContext)
```

### iOS (Swift)

The iOS implementation (`ios/`) uses `URLSession` and `URLSessionWebSocketTask` for WebSocket connections.

**Key features:**
- Native Swift implementation with `JSExport` protocol
- Delegate pattern for JavaScript-to-native communication
- URLSession-based WebSocket handling

**Installation (Swift Package Manager):**
Add the package dependency in your `Package.swift` or via Xcode.

---

## Project Structure

```
useless-js-engine-extension-messaging/
├── js/                          # JavaScript/TypeScript package
│   ├── src/ts/
│   │   ├── IMessagingExtension.ts    # Interface definitions
│   │   ├── MessagingExtension.ts     # Type declaration
│   │   ├── MessagingExtension.Node.ts # Node.js implementation
│   │   └── MessagingExtension.Web.ts  # Browser implementation
│   ├── dist/                    # Build output (cjs, esm, umd)
│   └── package.json
│
├── android/                     # Android (Kotlin) package
│   └── extension/src/main/kotlin/
│       └── MessagingExtension.kt
│
├── ios/                         # iOS (Swift) package
│   └── MessagingExtension/Sources/
│       └── MessagingExtension.swift
│
└── docs/                        # Documentation
    └── ReadMe.md
```

---

## Development

### Building the JavaScript Package

```bash
# Install dependencies
npm run js:install

# Build (development)
npm run js:build

# Or from the js/ directory:
cd js
npm run build:dev      # Development build
npm run build:release  # Production build (minified)
npm run watch:dev      # Watch mode for development
```

### Building the Android Package

```bash
# Sync Gradle
npm run android:sync

# Build
npm run android:build

# Publish to Maven Local
npm run android:publish:local

# Publish to GitHub Packages
npm run android:publish:github
```

### Building the iOS Package

The iOS package is distributed as a Swift Package. Build and test using Xcode or Swift Package Manager.

---

## How It Works

1. **Extension Installation**: On native platforms, the extension is installed into the JS Engine context, making `createMessagingExtension()` available globally.

2. **Initialization**: When `initialize()` is called with a WebSocket URL, the extension establishes a connection to the server.

3. **Event Delegation**: The delegate pattern bridges events from the native WebSocket layer back to JavaScript:
   - Connection opened → `handleConnected()`
   - Connection closed → `handleDisconnected()`
   - Message received → `receive(message)`

4. **Message Sending**: Calling `send(message)` transmits the string through the underlying WebSocket connection.

5. **Cleanup**: The `destroy()` method properly closes the connection and releases resources.

---

## Dependencies

### JavaScript
- `ws` — WebSocket library for Node.js environments

### Android
- OkHttp — HTTP & WebSocket client
- Useless JS Engine SDK — Core engine integration
- Oasis JS Bridge — JavaScript-to-native communication

### iOS
- Foundation (URLSession) — Native networking
- JavaScriptCore — JS engine integration
- UselessJsEngine — Core engine integration

---

## License

Part of the Useless Media JS Engine ecosystem.

