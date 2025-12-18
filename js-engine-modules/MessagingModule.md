# Useless JS Engine Module: Messaging

A cross-platform messaging module for the Useless JS Engine ecosystem, providing WebSocket-based real-time communication that works seamlessly across JavaScript/TypeScript, Android (Kotlin), and iOS (Swift).

---

## Overview

This module follows a **"write once in TypeScript, run everywhere"** architecture. The core business logic is written in TypeScript and compiled into a UMD bundle that gets embedded directly into native Android and iOS wrappers. This ensures consistent behavior across all platforms while maintaining native performance.

### Supported Platforms

| Platform | Language | Package Format |
|----------|----------|----------------|
| Web/Node | TypeScript/JavaScript | ESM, CJS, UMD |
| Android | Kotlin | Maven (GitHub Packages) |
| iOS | Swift | Swift Package |

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        TypeScript Core                          │
│                    (src/ts/MessagingModule.ts)                  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │  Rollup Build   │
                    │   (UMD Bundle)  │
                    └─────────────────┘
                              │
              ┌───────────────┼───────────────┐
              ▼               ▼               ▼
       ┌───────────┐   ┌───────────┐   ┌───────────┐
       │  Web/Node │   │  Android  │   │    iOS    │
       │   (ESM)   │   │  (Kotlin) │   │  (Swift)  │
       └───────────┘   └───────────┘   └───────────┘
```

### How It Works

1. **TypeScript Core**: The `MessagingModule` class is written in TypeScript and uses the `@useless-media/useless-js-engine-extension-messaging` extension for WebSocket functionality.

2. **Build Process**: Rollup compiles the TypeScript into multiple formats:
   - **ESM** (`dist/esm/`) - For modern JavaScript environments
   - **CJS** (`dist/cjs/`) - For CommonJS environments
   - **UMD** (`dist/umd/`) - Universal bundle for embedding in native apps

3. **Native Embedding**: The UMD bundle is embedded as a string constant in both:
   - `android/module/.../MessagingModule.kt` - Android wrapper
   - `ios/MessagingModule/Sources/.../MessagingModule.swift` - iOS wrapper

4. **Native Bridge**: Each native platform:
   - Creates a JavaScript engine context
   - Evaluates the embedded UMD code
   - Instantiates the `MessagingModule` class
   - Exposes native interfaces that call into the JavaScript instance

---

## Module API

### Configuration

```typescript
interface MessagingModuleConfiguration {
  messaging: {
    url: string;  // WebSocket server URL
  };
}
```

### Methods

| Method | Description |
|--------|-------------|
| `initialize(config)` | Initializes the module with the messaging configuration |
| `testSendMessage()` | Sends a test message through the WebSocket connection |
| `destroy()` | Cleans up resources and closes connections |

### Events (via Delegate)

| Event | Description |
|-------|-------------|
| `handleConnected` | Called when WebSocket connection is established |
| `handleDisconnected` | Called when WebSocket connection is closed |
| `receive(message)` | Called when a message is received |

---

## Usage

### JavaScript/TypeScript

```typescript
import { MessagingModule } from '@useless-media/useless-js-engine-module-messaging';

const module = new MessagingModule();

await module.initialize({
  messaging: {
    url: 'wss://your-websocket-server.com'
  }
});

// Send a test message
await module.testSendMessage();

// Cleanup when done
module.destroy();
```

### Android (Kotlin)

```kotlin
val module = MessagingModule(context)

module.initialize(
    MessagingModuleConfiguration(
        messaging = IMessagingExtensionConfiguration(
            url = "wss://your-websocket-server.com"
        )
    )
)

// Send a test message
module.testSendMessage()

// Cleanup when done
module.destroy()
```

### iOS (Swift)

```swift
let module = MessagingModule(nil)

try module.initialize(
    MessagingModuleConfiguration(
        messaging: IMessagingExtensionConfiguration(
            url: "wss://your-websocket-server.com"
        )
    )
)

// Send a test message
module.testSendMessage()

// Cleanup when done
module.destroy()
```

---

## Development

### Prerequisites

- Node.js 18+
- npm or yarn
- For Android: JDK 17+, Android SDK
- For iOS: Xcode 15+, Swift 5.9+

### Scripts

| Command | Description |
|---------|-------------|
| `npm run build:dev` | Build for development (with sourcemaps) |
| `npm run build:release` | Build for production (minified) |
| `npm run watch:dev` | Watch mode for development |
| `npm run test` | Run tests with Vitest |
| `npm run android:build` | Build Android library |
| `npm run android:publish:github` | Publish Android to GitHub Packages |
| `npm run android:publish:local` | Publish Android to Maven Local |

### Project Structure

```
useless-js-engine-module-messaging/
├── src/
│   └── ts/
│       ├── index.ts              # Entry point & exports
│       └── MessagingModule.ts    # Core module implementation
├── android/
│   └── module/
│       └── src/main/kotlin/      # Kotlin wrapper
├── ios/
│   └── MessagingModule/
│       └── Sources/              # Swift wrapper
├── dist/                         # Compiled output
│   ├── cjs/                      # CommonJS format
│   ├── esm/                      # ES Modules format
│   └── umd/                      # Universal Module format
├── rollup.config.js              # Build configuration
└── package.json
```

---

## Dependencies

### Runtime
- `ws` - WebSocket client for Node.js environments

### Peer Dependencies (Extensions)
- `@useless-media/useless-js-engine-sdk` - Core SDK interfaces
- `@useless-media/useless-js-engine-extension-messaging` - Messaging extension

---

## Publishing

### NPM (JavaScript/TypeScript)

The package is published to GitHub Packages:
```bash
npm publish
```

### Android

```bash
npm run android:publish:github
```

### iOS

The Swift package is distributed via the `MessagingModule.zip` archive or directly through Swift Package Manager pointing to this repository.

---

## License

Proprietary - Useless Media

