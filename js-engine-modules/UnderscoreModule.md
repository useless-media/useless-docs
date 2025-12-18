# Useless JS Engine Module: Underscore

A cross-platform module that exposes utility functions from the [Underscore.js](https://underscorejs.org/) library, designed to work with the Useless JS Engine SDK.

## Overview

This module provides a standardized interface to access select Underscore.js utility functions across different platforms. It implements the `Module` interface from `@useless-media/useless-js-engine-sdk`, making it easy to integrate into the Useless JS Engine ecosystem.

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    UnderscoreModule                         │
│                 implements Module interface                 │
├─────────────────────────────────────────────────────────────┤
│  • initialize()  - Module lifecycle setup                   │
│  • now()         - Returns current timestamp                │
│  • random()      - Generates random number in range         │
│  • destroy()     - Module lifecycle cleanup                 │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                    Underscore.js                            │
│              (underlying implementation)                    │
└─────────────────────────────────────────────────────────────┘
```

## Available Functions

### `now(): number`
Returns the current timestamp as an integer, using Underscore's optimized `now()` function.

```typescript
const module = new UnderscoreModule();
const timestamp = module.now(); // e.g., 1702915200000
```

### `random(min: number, max: number): number`
Returns a random integer between `min` and `max` (inclusive).

```typescript
const module = new UnderscoreModule();
const value = module.random(1, 100); // Random number between 1 and 100
```

## Module Lifecycle

The `UnderscoreModule` follows the standard Useless JS Engine SDK module lifecycle:

1. **Construction** - Create a new instance
2. **Initialization** - Call `initialize()` to prepare the module
3. **Usage** - Call the module's methods
4. **Destruction** - Call `destroy()` to clean up resources

```typescript
import { UnderscoreModule } from '@useless-media/useless-js-engine-module-underscore';

// 1. Create instance
const underscore = new UnderscoreModule();

// 2. Initialize
await underscore.initialize();

// 3. Use
const timestamp = underscore.now();
const randomValue = underscore.random(0, 100);

// 4. Cleanup
underscore.destroy();
```

## Build System

The project uses [Rollup](https://rollupjs.org/) to produce multiple distribution formats:

| Format | Output Directory | Use Case |
|--------|-----------------|----------|
| **ESM** | `dist/esm/` | Modern bundlers, ES modules |
| **CJS** | `dist/cjs/` | Node.js, CommonJS require |
| **UMD** | `dist/umd/` | Browser `<script>` tags, AMD |

### Build Modes

- **Development** (`npm run build:dev`) - Includes source maps for debugging
- **Release** (`npm run build:release`) - Minified, tree-shaken, no source maps

## Project Structure

```
.
├── src/ts/                    # TypeScript source files
│   ├── index.ts              # Module exports & version
│   └── UnderscoreModule.ts   # Main module implementation
├── dist/                      # Built output (generated)
│   ├── cjs/                  # CommonJS build
│   ├── esm/                  # ES Modules build
│   └── umd/                  # UMD build
├── apps/                      # Reference applications
│   └── android/              # Android reference app (Kotlin)
├── rollup.config.js          # Rollup build configuration
├── tsconfig.json             # TypeScript configuration
├── vitest.config.ts          # Test configuration
└── package.json              # Package manifest
```

## NPM Scripts

| Script | Description |
|--------|-------------|
| `npm run build:dev` | Development build with source maps |
| `npm run build:release` | Production build (minified) |
| `npm run watch:dev` | Watch mode for development |
| `npm run watch:release` | Watch mode for production |
| `npm test` | Run tests with Vitest |
| `npm run find:circular` | Detect circular dependencies |
| `npm run build:native` | Build native bindings (Swift/Kotlin) |
| `npm run build:app:android` | Build Android reference app |

## Installation

```bash
npm install @useless-media/useless-js-engine-module-underscore
```

> **Note**: This package is published to GitHub Packages registry.

## Dependencies

### Runtime
- [underscore](https://underscorejs.org/) - The underlying utility library

### Development
- TypeScript, Rollup, Vitest for building and testing
- `@useless-media/useless-ts-native` for native platform bindings
- `@useless-media/useless-linker` for local development linking

## Reference Applications

The `apps/` directory contains reference implementations demonstrating how to use this module on different platforms:

- **Android** (`apps/android/`) - Kotlin/Jetpack Compose reference application

## Version

The module exports a `Version` constant that is injected at build time from `package.json`:

```typescript
import { Version } from '@useless-media/useless-js-engine-module-underscore';

console.log(Version); // e.g., "0.0.0"
```

