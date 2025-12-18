# Useless Extendables

A TypeScript framework for building modular, extensible applications with support for lazy loading and code splitting.

The `ExtendableFeature` is designed to organize code in a way that simplifies the addition and use of extensions or
augmentations to a project's core functionality. Paired with the `FeatureManager` for registration and management of
features and extensions, the `Extendables` framework seamlessly connects these components behind the scenes, allowing
both the core feature and its extensions to concentrate on their specific responsibilities.

For more advanced scenarios, the `LazyFeature` and the underlying `LoadableFeatureContainer` enable simplified
code-splitting, making it easier to break out parts of a project into lazy-/side-loadable components, while still
allowing you to interact with the feature as though it were available at compile time.

## Overview

**Useless Extendables** provides a structured way to organize code using a plugin-like architecture. At its core, the framework consists of:

- **Features** — Core units of functionality in your application
- **Extensions** — Pluggable augmentations that enhance features
- **FeatureManager** — Central registry that orchestrates features and their extensions
- **Lazy Loading** — Tools for deferring feature loading until needed

The framework enables you to build applications where both the core features and their extensions can focus on their specific responsibilities, while the framework handles wiring, lifecycle management, and communication between components.

---

## Core Concepts

### ExtendableFeature

An `ExtendableFeature` is an abstract base class representing a core unit of functionality in your application. Features:

- Have a unique `type` identifier
- Can be extended by one or more `FeatureExtension` instances
- Follow a defined lifecycle: `initialize()` → `reset()` → `destroy()`
- Select which extensions to activate based on manifest criteria

```typescript
abstract class ExtendableFeature<
  TExtension extends FeatureExtension<TExtensionDelegate>,
  TExtensionDelegate extends IFeatureExtensionDelegate | void = void
> {
  public type: string;
  
  // Lifecycle methods
  public initialize(...args: any[]): Promise<void>;
  public reset(): Promise<void>;
  public destroy(): Promise<void>;
  
  // Extension management (implement these)
  public abstract checkManifestCriteria(extensionManifest: ExtensionManifest): boolean;
  public abstract setupExtension(extension: TExtension): void;
  public abstract configureExtension(extension: TExtension): void;
  public abstract getExtensionDelegate(): TExtensionDelegate;
}
```

### FeatureExtension

A `FeatureExtension` is a pluggable unit that augments an `ExtendableFeature`. Extensions:

- Declare which feature type they extend via the `type` property
- Have their own lifecycle tied to their parent feature
- Can communicate back to the feature through a delegate

```typescript
abstract class FeatureExtension<
  TExtensionDelegate extends IFeatureExtensionDelegate | void = void
> {
  public abstract type: string;
  
  // Lifecycle
  public initialize(): Promise<void>;
  public reset(): Promise<void>;
  public destroy(): Promise<void>;
  
  // Optional hook for conditional activation
  public canHandle(...args: any[]): Promise<boolean>;
}
```

### FeatureManager

The `FeatureManager` is the central hub that:

- Registers and manages features and extensions
- Handles the wiring between features, extensions, and your application
- Manages lifecycle calls across all registered features
- Supports both synchronous and asynchronous (loadable) registration

```typescript
class FeatureManager<TApplicationBridge, TApplicationDelegate> {
  // Registration
  registerFeature(feature: ExtendableFeature<any>): ExtendableFeature<any>;
  registerFeature(manifest: FeatureManifest): ExtendableFeature<any>;
  registerFeature(manifest: LoadableFeatureManifest): Promise<ExtendableFeature<any>>;
  
  registerExtension(manifest: ExtensionManifest): void;
  registerExtension(manifest: LoadableExtensionManifest): Promise<void>;
  
  // Retrieval
  getFeature<T>(type: string): T;
  getExtensionManifests<T>(type: string): ExtensionManifest<T>[];
  
  // Lifecycle
  reset(): Promise<void>;
  destroy(): Promise<void>;
}
```

---

## How It Works

### 1. Define a Feature

Create a feature by extending `ExtendableFeature`. You define the criteria for selecting extensions and how they should be set up:

```typescript
import { ExtendableFeature, ExtensionManifest } from '@useless-media/useless-extendables';

// Define your extension delegate interface
interface TimeFormatterExtensionDelegate {
  onExternalClockOffsetDiscovered: (offset: number) => void;
}

// Define your extension base class
abstract class TimeFormatterExtension extends FeatureExtension<TimeFormatterExtensionDelegate> {
  public type = 'TimeFormatterFeature';
  public abstract format(started: number, now: number): string;
}

// Define the feature
class TimeFormatterFeature extends ExtendableFeature<
  TimeFormatterExtension,
  TimeFormatterExtensionDelegate
> {
  public type = 'TimeFormatterFeature';
  private config: { formatterType?: string } = {};

  public configure(config: { formatterType?: string }) {
    this.config = config;
  }

  // Select extensions that match the configured formatter type
  public checkManifestCriteria(manifest: ExtensionManifest): boolean {
    return this.config.formatterType === manifest.criteria?.formatterType;
  }

  // One-time setup when an extension is instantiated
  public setupExtension(extension: TimeFormatterExtension): void {
    // Initial setup logic
  }

  // Per-session configuration
  public configureExtension(extension: TimeFormatterExtension): void {
    // Session configuration
  }

  // Provide the delegate for extensions to communicate back
  public getExtensionDelegate(): TimeFormatterExtensionDelegate {
    return {
      onExternalClockOffsetDiscovered: (offset) => {
        // Handle the callback from extensions
      }
    };
  }

  // Use the active extension
  public format(started: number, now: number): string {
    if (!this.extension) return new Date(now).toISOString();
    return this.extension.format(started, now);
  }

  public async featureReset(): Promise<void> { /* cleanup */ }
  public async featureDestroy(): Promise<void> { /* cleanup */ }
}
```

### 2. Create Extensions

Extensions implement the specific functionality that augments a feature:

```typescript
class ReadableTimeFormatterExtension extends TimeFormatterExtension {
  public format(started: number, now: number): string {
    const d = new Date(now);
    return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  }

  public async initialize(): Promise<void> {
    console.log('Readable formatter initialized');
  }
  
  public async extensionReset(): Promise<void> {}
  public async extensionDestroy(): Promise<void> {}
}

// Export the manifest for registration
export const ReadableTimeFormatterManifest: ExtensionManifest = {
  classConstructor: ReadableTimeFormatterExtension,
  criteria: { formatterType: 'readable' },
  name: 'ReadableFormatter',
  type: 'TimeFormatterFeature'
};
```

### 3. Wire It Up with FeatureManager

```typescript
import { FeatureManager, FeatureManifest, ExtensionManifest } from '@useless-media/useless-extendables';

// Create the manager
const featureManager = new FeatureManager({
  configuration: {
    enforceLifecycle: true
  }
});

// Register extensions first
featureManager.registerExtension(ReadableTimeFormatterManifest);
featureManager.registerExtension(ReverseTimeFormatterManifest);

// Register the feature (can be an instance or a manifest)
const timeFormatter = featureManager.registerFeature(new TimeFormatterFeature());

// Configure and initialize
timeFormatter.configure({ formatterType: 'readable' });
await timeFormatter.initialize();

// Use it!
const formatted = timeFormatter.format(startTime, Date.now());
```

---

## Lazy Loading & Code Splitting

For advanced scenarios where you want to defer loading of features until they're needed, the framework provides `LazyFeature` and `LoadableFeatureContainer`.

### LazyFeature

A `LazyFeature` allows you to interact with a feature as if it were available at compile time, while the actual implementation is loaded on-demand:

```typescript
import { LazyFeature, LoadableFeatureManifest } from '@useless-media/useless-extendables';

// Define a mock that provides the interface before the real feature loads
class MockTimeFeature {
  public type = 'TimeFormatterFeature';
  
  format(started: number, now: number): string {
    return 'Loading...'; // Placeholder until real feature loads
  }
}

// Create the lazy feature with a load configuration
const lazyTimeFormatter = new LazyFeature<TimeFormatterFeature>(
  {
    type: 'TimeFormatterFeature',
    loadConfiguration: {
      resource: '/features/time-formatter.js',
      exportKey: 'TimeFormatterFeature'
    }
  },
  undefined, // args
  MockTimeFeature
);

// Register with the feature manager
const timeFormatter = await featureManager.registerLazyFeature(lazyTimeFormatter);

// The feature is now usable - calls go to mock until loaded,
// then seamlessly switch to the real implementation
timeFormatter.format(start, now);
```

### LoadableFeatureContainer

For more control over the loading process, use `LoadableFeatureContainer` directly:

```typescript
import { createLoadableFeatureContainer } from '@useless-media/useless-extendables';

const LoadableTimeFormatter = createLoadableFeatureContainer<TimeFormatterFeature>(
  MockTimeFeature
);

const container = new LoadableTimeFormatter(manifest, args);

// Manual loading steps
await container.loadFeature();      // Load the module
await container.constructFeature(); // Instantiate the feature
await container.connectFeature();   // Wire up and replace the mock

// Or all at once
await container.installFeature();
```

---

## Registration Patterns

### Direct Instance Registration

```typescript
const feature = featureManager.registerFeature(new MyFeature());
```

### Manifest-Based Registration

```typescript
const feature = featureManager.registerFeature({
  type: 'MyFeature',
  classConstructor: MyFeature,
  args: { /* constructor args */ },
  configuration: { /* feature configuration */ }
});
```

### Loadable Registration

```typescript
const feature = await featureManager.registerFeature({
  type: 'MyFeature',
  loadConfiguration: {
    resource: '/features/my-feature.js',
    exportKey: 'MyFeature'
  }
});
```

---

## Communication Patterns

### Feature Delegates

Features can define delegates for communication with the application:

```typescript
interface MyFeatureDelegate extends IExtendableFeaturePublicDelegate {
  handleSomethingHappened: (data: any) => void;
}

// Register a delegate before registering the feature
featureManager.registerFeatureDelegate<MyFeatureDelegate>('MyFeature', {
  handleSomethingHappened: (data) => {
    console.log('Something happened:', data);
  }
});
```

### Application Delegate

The `FeatureManager` can broadcast events to the application through a shared delegate:

```typescript
interface AppDelegate extends IMulticastDelegate {
  onDataUpdated: () => void;
}

const featureManager = new FeatureManager<void, AppDelegate>({
  applicationDelegate: createMulticastDelegate(AppDelegateDefaults)
});

featureManager.setApplicationMainDelegate({
  onDataUpdated: () => updateUI()
});
```

---

## Extension Execution Modes

When a feature has multiple active extensions, you can control how methods are executed across them:

```typescript
// Execute on all active extensions in parallel
await this.execute(ExecutionSelection.Active, ExecutionTypes.Parallel, 'methodName', ...args);

// Execute sequentially (result from one feeds into the next)
const result = await this.execute(ExecutionSelection.Active, ExecutionTypes.Sequential, 'transform', initialData);

// Fire and forget (don't wait for completion)
this.execute(ExecutionSelection.All, ExecutionTypes.FireAndForget, 'notifyAll', event);
```

---

## Lifecycle Management

Features follow a defined lifecycle:

1. **Registration** — Feature is registered with the FeatureManager
2. **Configuration** — `configure()` is called with runtime settings
3. **Extension Selection** — `selectExtensions()` picks matching extensions
4. **Initialization** — `initialize()` prepares the feature and its extensions
5. **Active Use** — Feature methods are called
6. **Reset** — `reset()` returns to post-registration state (can re-initialize)
7. **Destroy** — `destroy()` cleans up all resources

When `enforceLifecycle: true` is set, the FeatureManager will call `reset()` and `destroy()` on all features automatically.

---

## Installation

```bash
npm install @useless-media/useless-extendables
```

## Dependencies

- `@useless-media/useless-sdk` — Core utilities
- `@useless-media/useless-delegate` — Multicast delegate implementation
- `@useless-media/useless-component-loader` — Dynamic module loading

---

## Building

```bash
# Development build
npm run build:dev

# Production build
npm run build:release

# Watch mode
npm run start:dev
```

## Testing

```bash
# Run tests
npm run test

# Run with coverage
npm run test:coverage
```

