# Useless JS Engine Module Demo

A scaffold for building **cross-platform JavaScript modules** that run on Web, Node.js, Android (Kotlin), and iOS (Swift) using the Useless JS Engine SDK.

## Overview

This repository demonstrates how to create modules that:
- Are written once in **TypeScript**
- Transpile to multiple JavaScript module formats (ESM, CJS, UMD)
- Bridge to native platform functionality via **Extensions**
- Run on Web browsers, Node.js servers, Android apps, and iOS apps

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     DemoModule (TypeScript)                     │
│                        src/ts/DemoModule.ts                     │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Extension Interface (TypeScript)             │
│                extensions/demo/js/src/ts/IDemoExtension.ts      │
└─────────────────────────────────────────────────────────────────┘
                                │
          ┌─────────────────────┼─────────────────────┐
          ▼                     ▼                     ▼
┌─────────────────┐   ┌─────────────────┐   ┌─────────────────┐
│   Web/Node.js   │   │     Android     │   │       iOS       │
│   (TypeScript)  │   │    (Kotlin)     │   │     (Swift)     │
├─────────────────┤   ├─────────────────┤   ├─────────────────┤
│ DemoExtension   │   │ DemoExtension   │   │ DemoExtension   │
│     .Web.ts     │   │      .kt        │   │     .swift      │
│     .Node.ts    │   │                 │   │                 │
└─────────────────┘   └─────────────────┘   └─────────────────┘
```

### Core Concepts

#### Modules
Modules are the main entry points of your cross-platform code. They implement the `Module` interface from the SDK and orchestrate extensions.

```typescript
// src/ts/DemoModule.ts
export class DemoModule implements Module {
  private extension: DemoExtension;
  
  public async initialize(configuration: DemoModuleConfiguration): Promise<void> {
    this.extension = await this.extension.initialize(configuration.demoExtension);
  }
}
```

#### Extensions
Extensions provide platform-specific functionality with a unified TypeScript interface. Each extension has:
- **Interface definition** (`IDemoExtension.ts`) – shared contract
- **Platform implementations** – Web, Node.js, Kotlin, Swift

#### Delegates
Delegates enable callbacks from native code back to JavaScript, allowing bi-directional communication.

```typescript
interface IDemoExtensionDelegate extends Delegate {
  callback: (message: string) => void;
}
```

## Project Structure

```
useless-js-engine-module-demo/
├── src/ts/                          # Main module source (TypeScript)
│   ├── DemoModule.ts                # Module implementation
│   └── index.ts                     # Export entry point
│
├── extensions/                      # Platform extensions
│   └── demo/
│       ├── js/                      # TypeScript interface + Web/Node implementations
│       │   └── src/ts/
│       │       ├── IDemoExtension.ts        # Shared interface
│       │       ├── DemoExtension.ts         # Type declarations
│       │       ├── DemoExtension.Web.ts     # Browser implementation
│       │       └── DemoExtension.Node.ts    # Node.js implementation
│       │
│       ├── kotlin/                  # Android implementation
│       │   └── extension/src/.../DemoExtension.kt
│       │
│       └── swift/                   # iOS implementation
│           └── Extension/Sources/extension/Extension.swift
│
├── apps/                            # Reference applications
│   ├── android/                     # Android demo app
│   │   └── demo-reference-application/
│   └── iOS/                         # iOS demo app (Swift)
│       └── DemoModuleSwift/
│
├── dist/                            # Build output
│   ├── cjs/                         # CommonJS format
│   ├── esm/                         # ES Modules format
│   └── umd/                         # UMD (browser) format
│
├── rollup.config.js                 # Build configuration
└── package.json                     # Project dependencies
```

## How It Works

### 1. Write Once in TypeScript
Define your module logic in `src/ts/`. The module uses extensions to access platform-specific features.

### 2. Define Extension Interfaces
Create TypeScript interfaces in `extensions/*/js/` that define the contract between JavaScript and native platforms.

### 3. Implement Platform-Specific Extensions
Each platform (Web, Node.js, Android, iOS) provides its own implementation of the extension interface:

| Platform | Language | Location |
|----------|----------|----------|
| Web | TypeScript | `extensions/demo/js/src/ts/DemoExtension.Web.ts` |
| Node.js | TypeScript | `extensions/demo/js/src/ts/DemoExtension.Node.ts` |
| Android | Kotlin | `extensions/demo/kotlin/extension/` |
| iOS | Swift | `extensions/demo/swift/Extension/` |

### 4. Build & Bundle
Rollup bundles the TypeScript into multiple formats:
- **ESM** – Modern ES Modules for bundlers
- **CJS** – CommonJS for Node.js
- **UMD** – Universal Module Definition for browsers

### 5. Run on Any Platform
- **Web/Node.js**: Import the JavaScript module directly
- **Android**: The Kotlin extension integrates with the Useless JS Engine runtime
- **iOS**: The Swift extension runs in a JavaScriptCore context

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm
- Android Studio (for Android development)
- Xcode (for iOS development)

### Installation

```bash
npm install
```

### Development

```bash
# Start development with watch mode
npm run start:dev

# Or build once for development
npm run build:dev
```

### Production Build

```bash
npm run build:release
```

### Testing

```bash
npm test
```

### Building Extensions

#### Android (Kotlin)
```bash
cd extensions/demo/kotlin
./gradlew build
```

#### iOS (Swift)
Open the Xcode project in `apps/iOS/DemoModuleSwift.xcodeproj` or build via Swift Package Manager.

## Scripts Reference

| Script | Description |
|--------|-------------|
| `npm run build:dev` | Development build with source maps |
| `npm run build:release` | Production build (minified) |
| `npm run watch:dev` | Watch mode for development |
| `npm run test` | Run tests with Vitest |
| `npm run clean:dist` | Remove build artifacts |
| `npm run find:circular` | Detect circular dependencies |

## Key Dependencies

- **@useless-media/useless-js-engine-sdk** – Core SDK for module/extension interfaces
- **@useless-media/useless-ts-native** – Native code generation tooling
- **Rollup** – JavaScript bundler
- **esbuild** – Fast TypeScript compilation
- **Vitest** – Unit testing framework

## Extension Communication Flow

```
┌──────────────────────┐          ┌─────────────────────────┐
│    JavaScript        │          │   Native Platform       │
│    (DemoModule)      │          │   (Kotlin/Swift)        │
├──────────────────────┤          ├─────────────────────────┤
│                      │          │                         │
│  extension.method()  │ ──────▶  │  method() { ... }       │
│                      │          │                         │
│  delegate.callback() │ ◀──────  │  delegate?.callback()   │
│                      │          │                         │
└──────────────────────┘          └─────────────────────────┘
```

JavaScript calls extension methods → Native code executes  
Native calls delegate methods → JavaScript callbacks fire

## License

See LICENSE file in the repository root.

