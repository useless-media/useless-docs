# Useless Sdk

A comprehensive TypeScript SDK providing foundational utilities, patterns, and abstractions for building robust applications. This SDK offers battle-tested implementations for common development needs including API communication, error handling, event systems, action orchestration, licensing, logging, storage management, and much more.

## Table of Contents

- [Installation](#installation)
- [Core Modules](#core-modules)
  - [API Module](#api-module)
  - [Error Handling](#error-handling)
  - [Event System](#event-system)
  - [Action Execution](#action-execution)
  - [Licensing](#licensing)
  - [Logging](#logging)
  - [Debug & Inspection](#debug--inspection)
  - [Session Management](#session-management)
  - [Statistics & Metrics](#statistics--metrics)
  - [Storage](#storage)
  - [Timing](#timing)
  - [TypeScript Types](#typescript-types)
  - [Utilities](#utilities)

---

## Installation

```bash
npm install @useless-media/useless-sdk
```

---

## Core Modules

### API Module

A powerful, extensible HTTP client system with built-in authentication, request/response interceptors, and collection abstractions.

#### Key Files

| File | Description |
|------|-------------|
| `ApiClient.ts` | Abstract base class for API clients with authentication management |
| `ApiController.ts` | Base controller for API endpoints |
| `ApiCollection.ts` | CRUD collection abstractions for DTOs |
| `RequestFactory.ts` | Factory for creating and executing HTTP requests |

#### ApiClient

The `ApiClient` is an abstract base class that provides:

- **Authentication Management**: Supports both static and on-demand authentication modes
- **Token Handling**: Automatic token parsing, refresh scheduling, and expiration handling
- **Storage Integration**: Persists authentication state to localStorage
- **Request/Response Interceptors**: Global request modification and response handling
- **Error Handling**: Centralized error handling with custom handlers

```typescript
import { ApiClient, ApiClientConfiguration } from '@useless-media/useless-sdk';

class MyApiClient extends ApiClient<MyUser, MyApiInterface> {
  constructor() {
    super({
      baseUrl: 'https://api.example.com',
      authenticationMode: ApiClientAuthenticationModes.OnDemand,
      throwErrors: false,
      refreshAuthenticationTimer: true
    });

    // Register controllers
    this.api.users = this.registerController(new UsersController());
  }

  async authenticate(credentials: ApiClientBasicCredentials) {
    // Implement authentication logic
  }

  async refreshAuthentication(refreshToken?: string) {
    // Implement token refresh logic
  }

  async deAuthenticate() {
    // Implement logout logic
  }

  async onError(error: UselessError) {
    // Handle errors
  }
}
```

#### ApiController

Base class for API endpoint controllers:

```typescript
import { ApiController, UselessRequest } from '@useless-media/useless-sdk';

class UsersController extends ApiController {
  public name = 'UsersController';
  protected origin = { name: 'users' };

  async getUser(id: string): Promise<User | undefined> {
    return this.requestData<User>({
      url: `/users/${id}`,
      method: RequestMethods.Get
    });
  }
}
```

#### ApiCollection

Abstract collection classes for CRUD operations:

- `ReadOnlyApiCollection<TDto>`: Provides `get`, `getAll`, and `find` methods
- `ApiCollection<TDto>`: Extends ReadOnlyApiCollection with `create`, `update`, and `delete`

#### RequestFactory

Handles HTTP request creation and execution with:

- Request/response interceptor pipelines
- Automatic error mapping
- Authorization header management
- Fetch API compatibility layer (`asFetch()`)

---

### Error Handling

A comprehensive error management system with typed errors, error codes, and centralized handling.

#### Key Files

| File | Description |
|------|-------------|
| `ErrorManager.ts` | Central error handling and dispatch system |
| `UselessError.ts` | Base error class with rich metadata |
| `IError.ts` | Error interface definition |
| `ErrorFactory.ts` | Factory for creating typed errors |

#### UselessError

Feature-rich error class extending native `Error`:

```typescript
interface UselessError {
  category: string;        // Error category (e.g., 'Network', 'Generic')
  code: IErrorCode;        // Numeric code and name
  details?: object;        // Additional error details
  displayMessage?: string; // User-friendly message
  message: string;         // Technical message
  name: string;            // Error name
  origin: string;          // Where the error originated
  severity: ErrorSeverities; // Fatal, Lenient, etc.
  stackedErrors: IError[]; // Related/chained errors
  type: ErrorTypes;        // Error type classification
}
```

#### ErrorManager

Centralized error handling with:

- **Unhandled Error Capturing**: Automatically catches `window.onerror` and `unhandledrejection` events (browser) or `uncaughtException` and `unhandledRejection` (Node.js)
- **I18n Integration**: Translates error codes to display messages
- **Transient Data**: Attach contextual data to all errors
- **Error Stacking**: Collect multiple related errors
- **Delegate Pattern**: Customize error handling behavior

```typescript
import { ErrorManager, I18n } from '@useless-media/useless-sdk';

const errorManager = new ErrorManager({
  handleUnhandledErrors: true,
  awaitFinalErrorHandling: false,
  delegate: {
    handleError: async (error) => {
      // Custom error handling
      return error; // Return error to continue, or void to suppress
    },
    handleFinalError: async (error) => {
      // Final cleanup/logging
    }
  }
});

// Dispatch errors
await errorManager.dispatchError(new Error('Something went wrong'));

// Register custom error codes
errorManager.registerErrorCodes(MyErrorCodes, MyErrorCodesToNamesMap);
```

#### ErrorFactory

Singleton factory for creating various error types:

```typescript
import { ErrorFactory, ErrorCodes } from '@useless-media/useless-sdk';

// Create generic error
const error = ErrorFactory.create(new Error('Failed'), { origin: 'MyModule' });

// Create HTTP error
const httpError = ErrorFactory.createHttpError(
  { name: 'api' },
  404,
  { url: '/users/123', body: null }
);

// Create argument error
const argError = ErrorFactory.createArgumentError(
  'Invalid parameter',
  { argument: 'userId' },
  'UserService'
);

// Create license error
const licenseError = ErrorFactory.createLicenseError(
  ErrorCodes.ExpiredLicense,
  { component: 'premium-feature' }
);
```

---

### Event System

A type-safe event emitter supporting synchronous and asynchronous event emission.

#### Key Files

| File | Description |
|------|-------------|
| `Emitter.ts` | Generic event emitter with TypeScript support |

#### Emitter

```typescript
import { Emitter, EmitterEventList, EmitterEvent } from '@useless-media/useless-sdk';

// Define your events
interface MyEvents extends EmitterEventList {
  'user:login': { type: string; userId: string };
  'user:logout': { type: string };
  'data:updated': { type: string; data: any };
}

// Create emitter
const emitter = new Emitter<MyEvents>();

// Subscribe to events
emitter.on('user:login', (event) => {
  console.log('User logged in:', event.userId);
});

// Subscribe once
emitter.once('data:updated', (event) => {
  console.log('Data updated (once):', event.data);
});

// Subscribe to all events
emitter.on('*', (event) => {
  console.log('Any event:', event);
});

// Emit events
emitter.emit('user:login', { userId: '123' });

// Emit asynchronously (deferred)
emitter.emitAsync('data:updated', { data: { foo: 'bar' } });

// Unsubscribe
emitter.off('user:login', handler);
emitter.off('user:login'); // Remove all handlers for event
emitter.off(); // Remove all handlers

// Cleanup
emitter.destroy();
```

---

### Action Execution

A powerful action orchestration system for managing complex workflows with pre/post handlers, phases, progress tracking, and error handling.

#### Key Files

| File | Description |
|------|-------------|
| `UselessAction.ts` | Base action class with lifecycle hooks |
| `PhasedAction.ts` | Multi-phase action with progress tracking |
| `SingleAction.ts` | Simple single-execution action |

#### UselessAction

Abstract base class for all actions:

```typescript
import { UselessAction } from '@useless-media/useless-sdk';

class MyAction extends UselessAction<MyData> {
  constructor() {
    super('MyAction', {
      cancelParentOnError: true,
      inheritErrorHandler: true
    });
  }

  protected async executeAction(data: MyData): Promise<MyData | void> {
    // Perform action logic
    return modifiedData;
  }
}

const action = new MyAction();

// Register lifecycle hooks
action.registerPreActionHandler(async (data, action) => {
  console.log('Before action');
  return data;
});

action.registerPostActionHandler(async (data, action) => {
  console.log('After action');
  return data;
});

action.registerActionListener(async (data) => {
  console.log('Action completed with:', data);
});

// Custom error handling
action.setErrorHandler(async (actionName, error) => {
  console.error(`${actionName} failed:`, error);
});

// Register reporters
action.registerReporter({
  execute: (name, phase, input) => console.log(`[${name}] ${phase}`),
  error: (name, error) => console.error(`[${name}] Error:`, error)
});

// Execute
const result = await action.execute(initialData);

// Cancel if needed
action.cancel();
```

#### PhasedAction

For complex multi-step workflows with progress tracking:

```typescript
import { PhasedAction, SingleAction } from '@useless-media/useless-sdk';

const loadAction = new PhasedAction<AppData>('LoadApplication', {
  pick: ['phase1', 'phase2'], // Only run specific phases
  omit: ['debug'],           // Skip certain phases
  start: 'phase1',           // Start from specific phase
  shouldExecute: async (name) => true // Dynamic phase filtering
});

// Register phases (functions or nested actions)
loadAction.registerPhase('initialize', async (data, action) => {
  // Phase 1: Initialize
  return { ...data, initialized: true };
});

loadAction.registerPhase('fetchData', new SingleAction('FetchData', async (data) => {
  // Phase 2: Fetch data (as nested action)
  const response = await fetch('/api/data');
  return { ...data, apiData: await response.json() };
}));

loadAction.registerPhase('setup', async (data, action) => {
  // Phase 3: Setup
  return data;
});

// Phase-specific hooks
loadAction.registerPrePhaseHandler('fetchData', async (data, action) => {
  console.log('About to fetch data');
  return data;
});

loadAction.registerPostPhaseHandler('fetchData', async (data, action) => {
  console.log('Data fetched');
  return data;
});

loadAction.registerPhaseListener('setup', async (data) => {
  console.log('Setup phase completed');
});

// Enable/disable phases dynamically
loadAction.disablePhase('debug');
loadAction.enablePhase('optional');
loadAction.togglePhase('extra');

// Track progress
loadAction.registerReporter({
  execute: (name, phase) => {
    const progress = loadAction.getCompletion();
    console.log(`[${progress}%] ${phase}`);
  }
});

// Execute
const result = await loadAction.execute({ initialized: false });
```

---

### Licensing

License key creation, validation, and management system.

#### Key Files

| File | Description |
|------|-------------|
| `LicenseCreator.ts` | Creates signed license keys |
| `LicenseValidator.ts` | Validates license keys |
| `LicenseManager.ts` | Manages license state and validation |

#### LicenseCreator

```typescript
import { LicenseCreator } from '@useless-media/useless-sdk';

const creator = new LicenseCreator();

// Create a license key
const licenseKey = creator.createLicenseKey('CompanyName', {
  c: ['feature-a', 'feature-b'], // Components/features
  r: { maxUsers: 100 }           // Restrictions
});

// Create with custom expiration (seconds)
const tempLicense = creator.createLicenseKeyWithExpiration(
  'CompanyName',
  { c: ['trial'] },
  30 * 24 * 60 * 60 // 30 days
);
```

#### LicenseValidator

```typescript
import { LicenseValidator } from '@useless-media/useless-sdk';

const validator = new LicenseValidator();

// Validate a license key
try {
  validator.validateLicenseKey(licenseKey, 'feature-a');
  console.log('License is valid!');
} catch (error) {
  // Throws LicenseError with specific code:
  // - NoLicense
  // - InvalidLicense
  // - ExpiredLicense
  // - RevokedLicense
  // - LicenseNotValidForComponent
}

// Parse license data
const license = validator.parseLicense(licenseKey);
console.log(license.o); // Owner
console.log(license.d); // Data (components, restrictions)
console.log(license.e); // Expiration
```

#### LicenseManager

```typescript
import { LicenseManager } from '@useless-media/useless-sdk';

const manager = new LicenseManager({
  license: {
    key: licenseKey,
    component: 'my-app'
  }
});

// Set license
manager.setLicenseKey(newKey, 'my-app');

// Check license
if (manager.hasValidLicense('premium-feature')) {
  // Enable premium features
}

// Ensure valid (throws on invalid)
manager.ensureValidLicense('premium-feature');

// Get license info
const owner = manager.getOwner();
const remaining = manager.getRemainingLicenseValidity(); // seconds
const restrictions = manager.getRestrictions();
const data = manager.getData();

// Clear license
manager.clearLicense();
```

---

### Logging

Flexible logging system with level-based filtering and async support.

#### Key Files

| File | Description |
|------|-------------|
| `ILogger.ts` | Synchronous logger interface |
| `IAsyncLogger.ts` | Asynchronous logger interface |
| `Logger.ts` | Standard logger implementation |
| `AsyncLogger.ts` | Async logger implementation |
| `LoggerFactory.ts` | Factory for creating loggers |

#### LoggerFactory

```typescript
import { LoggerFactory, LogLevels } from '@useless-media/useless-sdk';

// Create standard logger
const logger = LoggerFactory.create({
  level: LogLevels.Debug,
  implementation: console // or custom implementation
});

// Create async logger
const asyncLogger = LoggerFactory.createAsync({
  level: LogLevels.Info,
  implementation: {
    error: async (...data) => { /* send to remote */ },
    warn: async (...data) => { /* ... */ },
    info: async (...data) => { /* ... */ },
    log: async (...data) => { /* ... */ },
    debug: async (...data) => { /* ... */ }
  }
});

// Create no-op logger (for testing/production)
const silentLogger = LoggerFactory.createNoOp();
```

#### Log Levels

```typescript
enum LogLevels {
  None = 0,
  Error = 1,
  Warning = 2,
  Info = 3,
  Log = 4,
  Debug = 5,
  DebugVerbose = 6
}
```

#### Usage

```typescript
logger.setLevel(LogLevels.Debug);

logger.error('Critical error:', error);
logger.warn('Warning message');
logger.info('Information');
logger.log('General log');
logger.debug('Debug info');
logger.debugVerbose('Verbose debug info');

// Log at specific level
logger.logAtLevel(LogLevels.Info, 'Dynamic level logging');
```

---

### Debug & Inspection

Tools for runtime object inspection and auto-completion generation.

#### Key Files

| File | Description |
|------|-------------|
| `ObjectDescriber.ts` | Describes objects and generates completions |
| `ObjectTraverser.ts` | Traverses objects and extracts metadata |

#### ObjectDescriber

Useful for building debugging tools, REPL environments, or IDE-like features:

```typescript
import { ObjectDescriber } from '@useless-media/useless-sdk';

const describer = new ObjectDescriber({
  allowDescriptionsFromEnvironmentRoot: true
});

// Register a context for later description
describer.registerContext('myApp', myApplicationObject);

// Describe an object
const description = await describer.describe('myApp', myApplicationObject, {
  maxLevel: 2,           // Depth to traverse
  exclude: ['internal'], // Properties to skip
  registerContext: true  // Save for later
});

// Get completions (for autocomplete)
console.log(description.completions);
// [
//   { name: 'myApp.initialize', type: 'Function', args: {} },
//   { name: 'myApp.config', type: 'Property', propertyType: 'object' },
//   ...
// ]

// Describe multiple objects
const descriptions = await describer.describeAll([
  { name: 'app', path: 'window.myApp', context: 'window' },
  { name: 'utils', path: 'window.myApp.utils' }
]);
```

#### ObjectTraverser

Low-level object traversal for generating completion metadata:

```typescript
import { ObjectTraverser, DescribedCompletionTypes } from '@useless-media/useless-sdk';

const completions = ObjectTraverser.GenerateCompletions(myObject, {
  maxLevel: 2,
  prefix: 'obj',
  exclude: ['constructor', 'prototype']
});

completions.forEach(completion => {
  switch (completion.type) {
    case DescribedCompletionTypes.Function:
      console.log(`${completion.name}(${Object.keys(completion.args).join(', ')})`);
      break;
    case DescribedCompletionTypes.Property:
      console.log(`${completion.name}: ${completion.propertyType}`);
      break;
    case DescribedCompletionTypes.CollapsedProperty:
      console.log(`${completion.name} [${completion.properties.length} properties]`);
      break;
  }
});
```

---

### Session Management

State management with event-driven change notifications and throttled updates.

#### Key Files

| File | Description |
|------|-------------|
| `StateKeepingSession.ts` | Abstract session with state tracking |

#### StateKeepingSession

Base class for managing application/component state with change notifications:

```typescript
import { StateKeepingSession, StateWithId } from '@useless-media/useless-sdk';

interface MyState extends StateWithId {
  id: string;
  user?: { name: string; email: string };
  settings: { theme: string; language: string };
  lastUpdated: number;
}

class MySession extends StateKeepingSession<MyState> {
  constructor(id: string) {
    super(id, 'MySession');
  }

  getCleanState(): MyState {
    return {
      id: this.getId(),
      settings: { theme: 'dark', language: 'en' },
      lastUpdated: Date.now()
    };
  }

  setUser(user: { name: string; email: string }) {
    this.commitChange(
      { user, lastUpdated: Date.now() },
      'user:changed'
    );
  }

  updateSettings(settings: Partial<MyState['settings']>) {
    this.commitChangeWithoutNotification({ settings });
    this.commitChange(
      { lastUpdated: Date.now() },
      'settings:changed'
    );
  }

  removeUser() {
    this.commitDeleteAndChange(
      { lastUpdated: Date.now() },
      ['user'],
      'user:removed'
    );
  }
}

const session = new MySession('session-1');

// Listen to immediate changes
session.on(SessionEvents.StateChanged, (event) => {
  console.log('State changed:', event.changes);
  console.log('Events:', event.events);
});

// Listen to bulked/throttled changes
session.on(SessionEvents.BulkedStateChanges, (event) => {
  console.log('Bulked changes:', event.changes);
});

// Get current state
const state = session.getState();

// Reset to clean state
session.reset();

// Cleanup
session.destroy();
```

---

### Statistics & Metrics

Tools for performance measurement and statistical analysis.

#### Key Files

| File | Description |
|------|-------------|
| `ProcessTimer.ts` | Hierarchical process timing |
| `BinaryConditionTimedRatio.ts` | Time-based condition ratio tracking |
| `FixedSizeArray.ts` | Circular buffer array |
| `MedianAggregator.ts` | Running median/average calculator |

#### ProcessTimer

Track execution time of processes and sub-processes:

```typescript
import { ProcessTimer } from '@useless-media/useless-sdk';

// Start a global process
ProcessTimer.StartGlobal('AppInitialization');

// Start a process
ProcessTimer.Start('LoadConfig', 'AppInitialization');

// Add intermediary checkpoints
ProcessTimer.AddIntermediary('LoadConfig', 'ParseJSON');
ProcessTimer.AddIntermediary('LoadConfig', 'ValidateSchema');

// Stop and get report
const report = ProcessTimer.Stop('LoadConfig');
console.log(report);
// {
//   processName: 'LoadConfig',
//   total: 1.23,
//   subProcesses: [
//     { subProcessName: 'ParseJSON', total: 0.5 },
//     { subProcessName: 'ValidateSchema', total: 0.73 }
//   ]
// }

// Nested processes
ProcessTimer.Start('FetchData', 'AppInitialization', 'Initialize');
ProcessTimer.Start('FetchData.LoadUsers');
ProcessTimer.Stop('FetchData.LoadUsers');
ProcessTimer.Stop('FetchData');

// Attach reporter for all timings
ProcessTimer.AttachReporter((report, slimReport) => {
  analytics.track('process_timing', slimReport);
});

// Stop global process
ProcessTimer.Stop('AppInitialization');
```

#### BinaryConditionTimedRatio

Track time-based ratios for binary conditions (e.g., online/offline, buffering/playing):

```typescript
import { BinaryConditionTimedRatio } from '@useless-media/useless-sdk';

const bufferingRatio = new BinaryConditionTimedRatio(100); // 100 samples max

// Track condition changes
bufferingRatio.setCondition(true);  // Buffering started
// ... time passes ...
bufferingRatio.setCondition(false); // Buffering stopped
// ... time passes ...
bufferingRatio.setCondition(true);  // Buffering again

// Get ratio
const ratio = bufferingRatio.getRatio();       // Overall ratio
const recent = bufferingRatio.getRatio(30);    // Last 30 seconds

console.log(`Buffering ratio: ${ratio}%`);

// Handle interruptions (pause tracking)
bufferingRatio.interrupt(true);
// ... paused ...
bufferingRatio.interrupt(false);

// Reset
bufferingRatio.reset();
```

#### MedianAggregator

Calculate running averages with stability metrics:

```typescript
import { MedianAggregator } from '@useless-media/useless-sdk';

const bandwidth = new MedianAggregator(50); // 50 sample window

bandwidth.addValue(1000);
bandwidth.addValue(1200);
bandwidth.addValue(950);
bandwidth.addValue(1100);

console.log(bandwidth.value);             // Current average
console.log(bandwidth.standardDeviation); // Standard deviation
console.log(bandwidth.variance);          // Variance
console.log(bandwidth.stability);         // Stability score (0-100)
```

#### FixedSizeArray

Circular buffer that maintains a maximum size:

```typescript
import { FixedSizeArray } from '@useless-media/useless-sdk';

const buffer = new FixedSizeArray<number>({ sampleSize: 5 });

buffer.push(1, 2, 3, 4, 5);
console.log([...buffer]); // [1, 2, 3, 4, 5]

buffer.push(6, 7);
console.log([...buffer]); // [3, 4, 5, 6, 7] - oldest items removed
```

---

### Storage

Unified storage abstraction supporting localStorage, sessionStorage, and in-memory storage with namespacing and expiration.

#### Key Files

| File | Description |
|------|-------------|
| `UselessStorage.ts` | Storage utilities and interfaces |
| `UselessStorageRepository.ts` | Repository pattern for storage |
| `LocalStorageRepository.ts` | localStorage-backed repository |
| `SessionStorageRepository.ts` | sessionStorage-backed repository |
| `InMemoryStorageRepository.ts` | Memory-backed repository |

#### UselessStorage

Low-level storage utilities:

```typescript
import {
  storeLocalStorageData,
  getLocalStorageData,
  clearLocalStorageData,
  storeLocalStorageDataWithExpiration,
  createNamespacedLocalUselessStorage
} from '@useless-media/useless-sdk';

// Simple key-value storage
storeLocalStorageData('app', 'user', { name: 'John' });
const user = getLocalStorageData('app', 'user');
clearLocalStorageData('app', 'user');

// With expiration
storeLocalStorageDataWithExpiration('cache', 'data', response, 3600); // 1 hour

// Namespaced storage
const storage = createNamespacedLocalUselessStorage('MyApp.v1');
storage.storeData('settings', 'theme', 'dark');
storage.getData('settings', 'theme'); // 'dark'
storage.storeDataWithExpiration('cache', 'apiData', data, 600); // 10 min
```

#### Storage Repositories

Repository pattern for managing collections of items:

```typescript
import { LocalStorageRepository } from '@useless-media/useless-sdk';

interface Project {
  id: string;
  name: string;
  createdAt: Date;
}

const projectsRepo = new LocalStorageRepository<Project>('projects');

// Store items
projectsRepo.storeItem({ name: 'Project A', createdAt: new Date() });
projectsRepo.storeItem({ name: 'Project B', createdAt: new Date() });

// Retrieve items
const all = projectsRepo.getItems();
const active = projectsRepo.getActive();
const byId = projectsRepo.getItemById('project-123');
const byName = projectsRepo.getItemByName('Project A');
const filtered = projectsRepo.getItemsByPredicate(p => p.name.includes('A'));

// Manage active item
projectsRepo.setActive(project);
projectsRepo.setActiveById('project-123');

// Delete items
projectsRepo.deleteItem(project);
projectsRepo.deleteItemById('project-123');

// Export/Import
const exported = projectsRepo.export();
projectsRepo.import(anotherRepoData);

// Clear all
projectsRepo.clear();
```

---

### Timing

Timer utilities for scheduling and cron-like operations.

#### Key Files

| File | Description |
|------|-------------|
| `Timer.ts` | Configurable interval timer with events |
| `CronTimer.ts` | Schedule one-time events with fuzzing |
| `CronAdjuster.ts` | Adjust cron expressions for timezones |

#### Timer

Interval-based timer with pause/resume:

```typescript
import { Timer, TimerEvents, TimerDirections } from '@useless-media/useless-sdk';

const countdown = new Timer({
  direction: TimerDirections.Down,
  start: 60,      // Start value
  distance: 60,   // Count to 0
  intervalInS: 1, // Tick every second
  stepInS: 1      // Decrement by 1
});

countdown.on(TimerEvents.Tick, (event) => {
  console.log(`Time remaining: ${event.value}`);
});

countdown.on(TimerEvents.DestinationReached, () => {
  console.log('Time is up!');
});

countdown.start();

// Later...
countdown.pause();
countdown.resume();
countdown.stop();
countdown.reset();
countdown.restart(); // reset + start
```

#### CronTimer

Schedule events at specific times with optional fuzzing:

```typescript
import { CronTimer } from '@useless-media/useless-sdk';

const scheduler = new CronTimer({
  completionTimeOffset: 10, // Fire 10 seconds early
  fuzzFactor: 2,            // Random delay 0-2 seconds
  timescale: 60             // Scale factor for timing
});

// Schedule by Date
const targetTime = new Date();
targetTime.setHours(targetTime.getHours() + 1);

scheduler.schedule(targetTime, () => {
  console.log('Event fired!');
});

// Schedule by epoch (seconds)
scheduler.scheduleByEpoch(Math.floor(Date.now() / 1000) + 3600, () => {
  console.log('Event fired!');
});

// Check remaining time
console.log(`Time remaining: ${scheduler.timeRemaining()}s`);

// Cancel/cleanup
scheduler.reset();
scheduler.destroy();
```

#### CronAdjuster

Adjust cron expressions between timezones:

```typescript
import { CronAdjuster } from '@useless-media/useless-sdk';

const adjuster = new CronAdjuster('America/New_York', 'UTC');
await adjuster.initialize(); // Loads cron-parser

// Adjust cron expression from UTC to New York time
const utcCron = '0 30 14 * * *'; // 2:30 PM UTC
const nyCron = adjuster.adjustCronExpression(utcCron);
// Result: '0 30 10 * * *' (10:30 AM EST)

// Or specify timezones per call
const adjusted = adjuster.adjustCronExpression(
  '0 0 8 * * 1-5',
  'Europe/London',
  'America/Los_Angeles'
);
```

---

### TypeScript Types

Utility types for common TypeScript patterns.

#### Available Types

| Type | Description |
|------|-------------|
| `DeepPartial<T>` | Makes all properties recursively optional |
| `Entries<T>` | Type for Object.entries() return value |
| `Mutable<T>` | Removes `readonly` from all properties |
| `Optional<T, K>` | Makes specified keys optional |
| `PathValue<T, P>` | Get type at nested path |
| `StringKeyOf<T>` | String keys of an object type |
| `Struct<T>` | Generic object structure type |
| `Time` | Time-related type utilities |
| `WithRequired<T, K>` | Makes specified keys required |

```typescript
import { DeepPartial, Optional, WithRequired, Mutable } from '@useless-media/useless-sdk';

interface Config {
  readonly server: {
    host: string;
    port: number;
  };
  database: {
    url: string;
    poolSize?: number;
  };
}

// Make everything optional (deep)
type PartialConfig = DeepPartial<Config>;

// Make specific keys optional
type OptionalHost = Optional<Config['server'], 'host'>;

// Make specific keys required
type RequiredPoolSize = WithRequired<Config['database'], 'poolSize'>;

// Remove readonly
type MutableConfig = Mutable<Config>;
```

---

### Utilities

A comprehensive collection of utility functions.

#### Object Manipulation

```typescript
import {
  extend,
  extendWithOptions,
  createExtend,
  clone,
  pick,
  omit,
  getPropertyByPath,
  deletePropertyByPath,
  pathToObject
} from '@useless-media/useless-sdk';

// Deep extend objects
const result = extend({}, obj1, obj2);

// Extend with options
const merged = extendWithOptions({
  allowUndefinedValues: false,
  arrayStrategy: ArrayStrategies.Merge,
  depth: 10,
  immutable: true,
  pick: ['field1', 'field2'],
  omit: ['internal']
}, obj1, obj2);

// Create configured extend function
const myExtend = createExtend({
  arrayStrategy: ArrayStrategies.Replace
});

// Clone objects
const cloned = clone(original);

// Pick/omit properties
const subset = pick(obj, 'a', 'b', 'c');
const filtered = omit(obj, 'password', 'secret');

// Path-based access
const value = getPropertyByPath(obj, 'deeply.nested.value');
deletePropertyByPath(obj, 'deeply.nested.value');
const nested = pathToObject('deeply.nested', 'value');
```

#### Type Guards

```typescript
import {
  isString,
  isNumber,
  isBoolean,
  isObject,
  isFunction,
  isDate,
  isPromise,
  isUselessError,
  exists
} from '@useless-media/useless-sdk';

if (isString(value)) { /* value is string */ }
if (isNumber(value)) { /* value is number */ }
if (isObject(value)) { /* value is object (not array, not null) */ }
if (exists(value)) { /* value is not null/undefined */ }
```

#### Async Utilities

```typescript
import {
  defer,
  delay,
  Deferred,
  Promised,
  allSettled,
  throttle,
  once
} from '@useless-media/useless-sdk';

// Defer execution
defer(() => console.log('Runs on next tick'));
defer(() => console.log('Runs after 100ms'), 100);

// Delay/sleep
await delay(1000);

// Deferred promise
const deferred = new Deferred<string>();
setTimeout(() => deferred.resolve('done'), 1000);
const result = await deferred.promise;

// Promise with timeout
const promised = new Promised((resolve) => {
  // Long operation
  resolve('done');
}, { timeout: 5000, resolveOnTimeout: true });

// All settled (polyfill)
const results = await allSettled([promise1, promise2, promise3]);

// Throttle function calls
const throttled = throttle(() => console.log('Called'), 1000);

// Execute function only once
const initialize = once(() => {
  console.log('This only runs once');
});
```

#### String/Number Utilities

```typescript
import {
  guid,
  Base64,
  capitalizeFirstLetter,
  padLeft,
  stringFormat,
  stringOrDefault,
  numberOrDefault,
  booleanOrDefault
} from '@useless-media/useless-sdk';

// Generate UUID
const id = guid();
const shortId = guid(true); // Short format

// Base64
const encoded = Base64.encode('Hello World');
const decoded = Base64.decode(encoded);

// String utilities
capitalizeFirstLetter('hello'); // 'Hello'
padLeft('5', 3, '0'); // '005'
stringFormat('Hello {0}, you have {1} messages', 'John', 5);
stringFormat('Hello {firstName} {lastName}', { firstName: 'John', lastName: 'Smith' });

// Defaults
stringOrDefault(maybeString, 'default');
numberOrDefault(maybeNumber, 0);
booleanOrDefault(maybeBool, false);
```

#### Array Utilities

```typescript
import {
  find,
  findIndex,
  firstOrDefault,
  enumerate
} from '@useless-media/useless-sdk';

// Find with predicate
const item = find(array, x => x.id === '123');
const index = findIndex(array, x => x.id === '123');

// First or default
const first = firstOrDefault(array, defaultValue);

// Enumerate object
enumerate(obj, (key, value) => {
  console.log(key, value);
});
```

---

## License

MIT License

---

## Contributing

Contributions are welcome! Please read the contributing guidelines before submitting pull requests.

