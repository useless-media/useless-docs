# Useless JS Engine Module Scaffold

A template repository for creating cross-platform JavaScript Engine modules that work seamlessly across **Web/Node.js**, **Android (Kotlin)**, and **iOS (Swift)**.

---

## Overview

This scaffold provides a complete project structure for developing modules that run JavaScript logic across multiple platforms using the Useless JS Engine ecosystem. It includes:

- **TypeScript source** with multi-format build output (ESM, CJS, UMD)
- **Android reference application** using Kotlin and Jetpack Compose
- **iOS reference application** using Swift and SwiftUI
- **Automated placeholder replacement** for quick project setup

---

## Project Structure

```
.
├── src/ts/                    # TypeScript module source code
│   └── __name__Module.ts      # Main module implementation
├── apps/
│   ├── android/               # Android reference application
│   │   └── __nameKebabCase__-reference-application/
│   └── iOS/                   # iOS reference application
│       └── __name__ModuleSwift/
├── manifest.json              # Placeholder configuration
├── rollup.config.js           # Build configuration
├── package.json               # NPM package definition
└── tsconfig.json              # TypeScript configuration
```

---

## How It Works

### 1. Template Placeholders

The scaffold uses a placeholder system defined in `manifest.json`. When creating a new module, these placeholders get replaced with your actual values:

| Placeholder | Format | Example |
|-------------|--------|---------|
| `__name__` | PascalCase | `MyAwesome` |
| `__nameCamelCase__` | camelCase | `myAwesome` |
| `__nameKebabCase__` | kebab-case | `my-awesome` |
| `__nameSnakeCase__` | snake_case | `my_awesome` |
| `__nameDotCase__` | dot.case | `my.awesome` |
| `__extensionName__` | PascalCase | Extension name |
| `__extensionNameKebabCase__` | kebab-case | Extension name |
| `__gitHubUser__` | — | GitHub username |
| `__gitHubPat__` | — | GitHub Personal Access Token |

### 2. Module Architecture

The core module (`src/ts/__name__Module.ts`) implements the `Module` interface from `@useless-media/useless-js-engine-sdk`:

```typescript
export class __name__Module implements Module {
  private extension: I__extensionName__Extension;

  constructor() {
    this.extension = new __extensionName__Extension();
  }

  public async initialize(configuration: __name__ModuleConfiguration): Promise<void> {
    // Initialize with platform-specific configuration
  }

  public async scaffoldFunction(): Promise<string> {
    return 'scaffoldFunction';
  }

  public destroy(): void {}
}
```

**Key concepts:**
- **Modules** encapsulate business logic and can depend on **Extensions**
- **Extensions** provide platform-specific functionality (e.g., network, storage)
- The same JavaScript code runs across all platforms via the JS Engine

### 3. Build System

The project uses **Rollup** to produce multiple output formats:

| Format | Directory | Use Case |
|--------|-----------|----------|
| **ESM** | `dist/esm/` | Modern bundlers, Node.js (ESM) |
| **CJS** | `dist/cjs/` | Legacy Node.js, CommonJS |
| **UMD** | `dist/umd/` | Browser `<script>` tags, CDN |

Build modes:
- **Development** (`npm run build:dev`): Includes source maps, faster builds
- **Release** (`npm run build:release`): Minified, tree-shaken, no source maps

### 4. Native Platform Integration

#### Android (Kotlin)

The Android reference app (`apps/android/`) demonstrates integrating the module:

- Built with **Jetpack Compose** for modern UI
- Uses Gradle with Kotlin DSL
- Module is imported and initialized in the main activity

#### iOS (Swift)

The iOS reference app (`apps/iOS/`) shows Swift integration:

- Built with **SwiftUI** for declarative UI
- Module imported as a Swift package
- Initialized in a view controller and called from UI

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Android Studio (for Android development)
- Xcode (for iOS development)

### Setup a New Module

1. **Clone this scaffold** (or use it as a template on GitHub)

2. **Replace placeholders** throughout the project with your module name and configuration values

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Build the TypeScript module**:
   ```bash
   npm run build:dev      # Development build
   npm run build:release  # Production build
   ```

5. **Build native bindings** (if applicable):
   ```bash
   npm run build:native
   ```

---

## NPM Scripts

| Script | Description |
|--------|-------------|
| `npm run build:dev` | Build for development with source maps |
| `npm run build:release` | Build optimized production bundle |
| `npm run build:native` | Build native platform bindings |
| `npm run build:app:android` | Build Android reference app |
| `npm run watch:dev` | Watch mode for development |
| `npm run watch:release` | Watch mode for release builds |
| `npm run test` | Run tests with Vitest |
| `npm run find:circular` | Detect circular dependencies |
| `npm run link` | Link local packages for development |
| `npm run unlink` | Restore original package links |

---

## Publishing

The package is configured to publish to **GitHub Packages**:

```json
{
  "publishConfig": {
    "registry": "https://npm.pkg.github.com/"
  }
}
```

Ensure you have:
1. A valid `__gitHubPat__` (Personal Access Token) with `write:packages` scope
2. Configured npm authentication for the GitHub registry

---

## Dependencies

### Core Dependencies

| Package | Purpose |
|---------|---------|
| `@useless-media/useless-js-engine-sdk` | Core SDK interfaces and types |
| `@useless-media/useless-ts-native` | Native platform build tooling |
| `@useless-media/useless-linker` | Local package linking utility |

### Build Tools

- **Rollup** — Module bundler with plugin ecosystem
- **esbuild** — Fast TypeScript transpilation
- **TypeScript** — Type safety and IDE support
- **Vitest** — Unit testing framework

---

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────┐
│                    Your Application                      │
├─────────────────────────────────────────────────────────┤
│                    __name__Module                        │
│                  (TypeScript/JavaScript)                 │
├─────────────────────────────────────────────────────────┤
│               Useless JS Engine SDK                      │
│              (Module & Extension APIs)                   │
├──────────────┬──────────────────────┬───────────────────┤
│   Web/Node   │      Android         │       iOS         │
│   (JS/TS)    │   (Kotlin + JsEngine)│  (Swift + JsEngine│
└──────────────┴──────────────────────┴───────────────────┘
```

---

## License

See the root `LICENSE` file for licensing information.

