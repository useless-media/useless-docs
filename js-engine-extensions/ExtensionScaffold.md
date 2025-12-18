# Useless JS Engine Extension Scaffold

A template repository for creating cross-platform JavaScript Engine extensions that work across **Web**, **Node.js**, **Android (Kotlin)**, and **iOS (Swift)**.

## Overview

This scaffold provides a standardized structure for building native extensions that bridge JavaScript and native platform code. Extensions built with this scaffold can expose native functionality to JavaScript or allow JavaScript to communicate with native platform features.

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     JavaScript Application                       │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Extension Interface (TypeScript)              │
│                         js/src/ts/                               │
└─────────────────────────────────────────────────────────────────┘
                              │
          ┌───────────────────┼───────────────────┐
          ▼                   ▼                   ▼
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│   Web/Node.js   │ │  Android (Kt)   │ │   iOS (Swift)   │
│    js/*.Web.ts  │ │    kotlin/      │ │    swift/       │
│   js/*.Node.ts  │ │                 │ │                 │
└─────────────────┘ └─────────────────┘ └─────────────────┘
```

### Directory Structure

```
.
├── js/                          # TypeScript/JavaScript package (main)
│   ├── src/ts/
│   │   ├── I__name__Extension.ts    # Interface definition
│   │   ├── __name__Extension.ts     # Base declaration
│   │   ├── __name__Extension.Web.ts # Web implementation
│   │   └── __name__Extension.Node.ts# Node.js implementation
│   ├── rollup.config.js         # Build configuration
│   └── package.json
│
├── kotlin/                      # Android/Kotlin native extension
│   ├── extension/
│   │   └── src/main/kotlin/.../__name__Extension.kt
│   └── build.gradle.kts
│
├── swift/                       # iOS/Swift native extension
│   └── __name__Extension/
│       ├── Package.swift
│       └── Sources/.../__name__Extension.swift
│
└── manifest.json                # Template placeholder definitions
```

## How It Works

### Template Placeholders

The scaffold uses placeholder tokens that get replaced when initializing a new extension project:

| Placeholder | Description | Example |
|-------------|-------------|---------|
| `__name__` | Extension name (PascalCase) | `MyFeature` |
| `__nameKebabCase__` | Extension name (kebab-case) | `my-feature` |
| `__nameSnakeCase__` | Extension name (snake_case) | `my_feature` |
| `__gitHubUser__` | GitHub username for publishing | `johndoe` |
| `__gitHubPat__` | GitHub Personal Access Token | `ghp_xxx...` |

These placeholders are defined in `manifest.json` and should be replaced throughout the project when creating a new extension.

### Extension Pattern

Each extension follows a consistent pattern across all platforms:

1. **Interface Definition** — The TypeScript interface (`I__name__Extension.ts`) defines the contract:
   - Configuration structure
   - Delegate interface for callbacks
   - Public methods

2. **Native Implementation** — Platform-specific code implements the interface:
   - **Kotlin**: Extends `BaseExtension`, implements native Android functionality
   - **Swift**: Conforms to `BaseNativeExtension`, uses `JSExport` for JS bridge

3. **Initialization Flow**:
   ```
   constructor() → initialize(config) → setDelegate(delegate) → [use extension] → destroy()
   ```

### Key Concepts

#### Configuration
Extensions accept a configuration object during initialization:

```typescript
interface __name__ExtensionConfiguration {
  configProp?: string;
  // Add your configuration properties
}
```

#### Delegate Pattern
Extensions can communicate back to JavaScript via delegates:

```typescript
interface I__name__ExtensionDelegate {
  // Define callback methods
}
```

#### Platform Bridges
- **Web/Node**: Direct JavaScript execution
- **Android**: Uses [Oasis JS Bridge](https://github.com/nicofirst1/oasis-jsbridge) with `JsValue` and `JsonObjectWrapper`
- **iOS**: Uses `JavaScriptCore` framework with `JSExport` protocol

## Development

### Prerequisites

- **Node.js** (v16+) for JavaScript development
- **Android Studio** or Gradle CLI for Kotlin development
- **Xcode** for Swift development

### JavaScript Package

```bash
# Install dependencies
npm run js:install

# Build the extension
npm run js:build
```

### Kotlin (Android)

```bash
# Sync Gradle dependencies
npm run kotlin:sync

# Build the extension
npm run kotlin:build

# Publish to Maven Local (for local testing)
npm run kotlin:publish:local

# Publish to GitHub Packages
npm run kotlin:publish:github
```

> **Note**: For GitHub publishing, configure `kotlin/local.properties` with your GitHub credentials. See `kotlin/ReadMe.md` for details.

### Swift (iOS)

The Swift package can be integrated via Swift Package Manager. Add the package dependency in your Xcode project or `Package.swift`.

## Creating a New Extension

1. **Clone/Fork** this scaffold repository
2. **Replace placeholders** throughout all files with your extension name
3. **Define your interface** in `js/src/ts/I__name__Extension.ts`
4. **Implement native code** in `kotlin/` and `swift/` directories
5. **Build and publish** each platform package

## Dependencies

### JavaScript
- `@useless-media/useless-js-engine-sdk` — Core SDK with base types (`Extension`, `Delegate`, `Dto`)

### Kotlin
- `com.useless.jsengine` — JS Engine core library
- `de.prosiebensat1digital.oasisjsbridge` — JavaScript bridge for Android

### Swift
- `UselessJsEngine` — JS Engine framework for iOS

## Publishing

### JavaScript (npm)
Configure your npm registry and publish from the `js/` directory.

### Kotlin (Maven/GitHub Packages)
Use Gradle publish tasks. See root `package.json` for convenience scripts.

### Swift (Swift Package Manager)
Tag releases in your repository; SPM will resolve the package from your git URL.

---

For platform-specific details, refer to the individual ReadMe files:
- [JavaScript ReadMe](../js/ReadMe.md)
- [Kotlin ReadMe](../kotlin/ReadMe.md)
- [Swift ReadMe](../swift/ReadMe.md)

