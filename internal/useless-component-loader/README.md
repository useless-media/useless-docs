# Useless Component Loader

A universal component loader designed to dynamically load JavaScript/TypeScript modules in both **Node.js** and **browser** environments. It provides a flexible configuration-based approach to loading components from various sources and extracting specific exports.

## Overview

The `ComponentLoader` solves the challenge of dynamically loading modules at runtime from different sources (URLs, packages, global objects) while providing a unified API to extract the specific exports you need. Whether you're working in a server-side Node.js application or a client-side browser environment, the loader adapts its behavior accordingly.

## Key Concepts

### Load Types (`ComponentLoadTypes`)

The loader supports three different loading strategies:

| Type | Description |
|------|-------------|
| `Import` | Uses native ES module import (default behavior) |
| `Global` | Accesses exports from the global scope (`window`, `globalThis`) |
| `Evaluate` | Fetches and evaluates the script content directly |

### Export Types (`ComponentExportTypes`)

Once a module is loaded, you can extract exports in different ways:

| Type | Description |
|------|-------------|
| `All` | Returns all exports as an object |
| `Default` | Returns the default export |
| `Named` | Returns a specific named export (requires `exportName`) |
| `Predicate` | Returns exports matching a custom filter function |

## Configuration

The `ComponentLoadConfiguration` interface defines how a component should be loaded:

```typescript
interface ComponentLoadConfiguration {
  type: ComponentLoadTypes;           // How to load the module
  resource?: string | PackageSpec;    // URL, path, or package specification
  exportType: ComponentExportTypes;   // How to extract exports
  exportName?: string;                // Name of the export to extract
  exportPredicate?: (key: string, value: any) => boolean;  // Filter function
  bundleName?: string;                // Bundle name for UMD modules
  forceReload?: boolean;              // Skip cache and reload
}
```

### Package Specification

When loading npm packages, use a `PackageSpec`:

```typescript
interface PackageSpec {
  name: string;       // Package name
  version?: string;   // Optional version
  registry?: string;  // Optional custom registry URL
}
```

## Usage

### Basic Setup

```typescript
import { ComponentLoader, ComponentLoadTypes, ComponentExportTypes } from '@useless-media/useless-component-loader';

const loader = new ComponentLoader();
```

### Loading a Default Export

```typescript
const MyComponent = await loader.loadDefault({
  type: ComponentLoadTypes.Import,
  resource: 'https://example.com/my-component.js',
  exportType: ComponentExportTypes.Default
});
```

### Loading a Named Export

```typescript
const { utils } = await loader.loadNamed({
  type: ComponentLoadTypes.Import,
  resource: 'https://example.com/library.js',
  exportType: ComponentExportTypes.Named,
  exportName: 'utils'
});
```

### Loading from Global Scope

Useful when a script has already been loaded and exposes itself on `window`:

```typescript
const jQuery = await loader.load({
  type: ComponentLoadTypes.Global,
  exportType: ComponentExportTypes.Named,
  exportName: 'jQuery'
});
```

### Loading with a Predicate

Filter exports based on custom logic:

```typescript
const components = await loader.loadPredicated({
  type: ComponentLoadTypes.Import,
  resource: 'https://example.com/components.js',
  exportType: ComponentExportTypes.Predicate,
  exportPredicate: (key, value) => key.startsWith('UI') && typeof value === 'function'
});
```

### Installing and Loading npm Packages (Node.js only)

In a Node.js environment with the `exec` function configured, you can install and load packages:

```typescript
import { exec } from 'child_process';
import { promisify } from 'util';

const loader = new ComponentLoader({
  exec: promisify(exec)
});

const lodash = await loader.load({
  type: ComponentLoadTypes.Import,
  resource: { name: 'lodash', version: '4.17.21' },
  exportType: ComponentExportTypes.Default
});
```

## How It Works

### Loading Process

1. **Resource Resolution**: The loader determines the resource key from the configuration (package name, URL, or export name for globals)

2. **Caching**: Previously loaded components are cached to avoid redundant loading (unless `forceReload` is set)

3. **Environment Detection**: The loader detects the runtime environment and adapts:
   - **Browser**: Uses `<script>` tag injection or dynamic `import()`
   - **Node.js**: Uses `import()` or script evaluation

4. **UMD Fallback**: If an ESM import returns an empty object (common with UMD bundles), the loader automatically checks the global scope

### Export Extraction

After loading, the specified `exportType` determines how exports are extracted:

1. **Bundle Unwrapping**: If `bundleName` is specified, the loader first extracts the named bundle object
2. **Export Selection**: Based on `exportType`, the appropriate exports are returned
3. **Predicate Filtering**: When using `Predicate` type, the `exportPredicate` function filters matching exports

## API Reference

### ComponentLoader

| Method | Description |
|--------|-------------|
| `load<T>(config)` | Load and extract exports based on configuration |
| `loadAll<T>(config)` | Load and return all exports |
| `loadDefault<T>(config)` | Load and return the default export |
| `loadNamed<T>(config)` | Load and return a named export |
| `loadPredicated<T>(config)` | Load and return exports matching predicate |
| `loadAs<T>(config)` | Convenience method that casts result to `T` |
| `loadExports(config)` | Load module and return raw exports object |
| `installPackage(spec)` | Install an npm package (Node.js only) |

## Environment Support

| Feature | Browser | Node.js |
|---------|---------|---------|
| URL Loading | ✅ | ✅ |
| Global Scope | ✅ | ✅ |
| Script Evaluation | ✅ | ✅ |
| Package Installation | ❌ | ✅ |
| ES Module Import | ✅ | ✅ |

## Dependencies

This package depends on `@useless-media/useless-sdk` for utility functions like `loadScriptAsync` and `loadScriptAndEvaluate`.

