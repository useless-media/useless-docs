# Useless JS Engine Sdk

This Sdk provides base types and utilities for building modules that run within the **Useless JS Engines**. It serves as the foundational layer for creating modular, pluggable applications that can be executed in various JavaScript runtime environments.

---

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
  - [Core Interfaces](#core-interfaces)
  - [Module Lifecycle](#module-lifecycle)
- [Exports](#exports)
- [Example Usage](#example-usage)

---

## Overview

The `@useless-media/useless-js-engine-sdk` is a TypeScript Sdk that defines the core contracts and abstractions for building modules. These modules can be instantiated and managed by a host JS engine, enabling a plugin-like architecture where functionality can be dynamically loaded and executed.

**Key Features:**
- TypeScript-first with full type definitions
- Multiple module formats: ESM, CommonJS, and UMD
- Polyfills for environments with limited JavaScript support
- Global augmentations for version tracking

---

## Architecture

### Core Interfaces

The Sdk exports several fundamental interfaces that form the building blocks for modules:

#### `Module`

The primary interface that all modules must implement. It defines the lifecycle methods for initialization and cleanup.

```typescript
interface Module {
  initialize(args?: ModuleInitializeArgs): Promise<void> | void;
  destroy(): void;
}
```

| Method | Description |
|--------|-------------|
| `initialize(args?)` | Called when the module is started. Can be async. Receives optional initialization arguments. |
| `destroy()` | Called when the module is being shut down. Use for cleanup (e.g., removing listeners, clearing timers). |

#### `ModuleFactory<T>`

A factory interface for creating module instances. This enables dependency injection and decouples module instantiation from consumption.

```typescript
interface ModuleFactory<TApplication extends Module> {
  create(...args: Array<any>): TApplication;
}
```

#### `ModuleInitializeArgs`

The base type for initialization arguments passed to a module. Extends `Dto`.

```typescript
interface ModuleInitializeArgs extends Dto {}
```

#### `Dto`

A flexible Data Transfer Object type that allows arbitrary key-value pairs.

```typescript
interface Dto extends Record<string, any> {}
```

#### `Delegate`

A marker interface for delegate patterns. Modules can define delegates to communicate events or state changes back to the host.

```typescript
interface Delegate {}
```

#### `Extension`

An interface for extensions that can enhance modules with additional capabilities.

```typescript
interface Extension {
  initialize: (...args: Array<any>) => Promise<this>;
}
```

### Module Lifecycle

```
┌─────────────────────────────────────────────────────────────┐
│                      JS Engine Host                         │
│                                                             │
│  1. Create module via ModuleFactory.create()                │
│                    ↓                                        │
│  2. Call module.initialize(args) - setup resources          │
│                    ↓                                        │
│  3. Module runs and performs its work                       │
│                    ↓                                        │
│  4. Call module.destroy() - cleanup resources               │
└─────────────────────────────────────────────────────────────┘
```

---

## Exports

The Sdk provides three entry points:

### Main Entry (`@useless-media/useless-js-engine-sdk`)

Exports all core interfaces and types:

- `Module`
- `ModuleFactory`
- `ModuleInitializeArgs`
- `Dto`
- `Delegate`
- `Extension`
- `Version` - The Sdk version string (injected at build time)

```typescript
import { Module, ModuleFactory, Dto, Delegate, Extension, Version } from '@useless-media/useless-js-engine-sdk';
```

### Augmentations (`@useless-media/useless-js-engine-sdk/augmentations`)

Adds global type declarations and registers the Sdk version on `globalThis.useless`:

```typescript
import '@useless-media/useless-js-engine-sdk/augmentations';

// Now available globally:
console.log(globalThis.useless.jsEngineSdkVersion);
```

**TypeScript Declaration:**
```typescript
declare global {
  interface IGlobalUseless {
    jsEngineSdkVersion: string;
  }
}
```

### Polyfills (`@useless-media/useless-js-engine-sdk/polyfills`)

Provides polyfills for JavaScript environments with limited runtime support:

- **`setInterval` / `clearInterval`**: A custom implementation using chained `setTimeout` calls. Useful for JS engines that don't natively support `setInterval`.

```typescript
import '@useless-media/useless-js-engine-sdk/polyfills';

// setInterval and clearInterval are now available globally
```

---

## Example Usage

### Creating a Module

```typescript
import { Module, ModuleInitializeArgs } from '@useless-media/useless-js-engine-sdk';

interface MyModuleArgs extends ModuleInitializeArgs {
  name: string;
}

class MyModule implements Module {
  private name: string = '';

  async initialize(args?: MyModuleArgs): Promise<void> {
    this.name = args?.name ?? 'Unknown';
    console.log(`Module ${this.name} initialized`);
  }

  destroy(): void {
    console.log(`Module ${this.name} destroyed`);
  }
}
```

### Creating a Module Factory

```typescript
import { ModuleFactory } from '@useless-media/useless-js-engine-sdk';

class MyModuleFactory implements ModuleFactory<MyModule> {
  create(): MyModule {
    return new MyModule();
  }
}

// Usage
const factory = new MyModuleFactory();
const module = factory.create();
await module.initialize({ name: 'ExampleModule' });
// ... do work ...
module.destroy();
```