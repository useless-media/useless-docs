# Useless Debug Sdk

This sdk has common data contracts, tools and utilities for debugging.

## Usage (Application debugging)

### In Node.Js

#### Easy-install - Using import query (ESM only)
Replace `serverUrl` with actual useless debug server url.

```javascript
import '@useless-media/useless-debug-sdk/node?serverUrl=ws://localhost:9091';
```

#### Easy-install - Using imported environment variable (ESM & CJS)
Replace `USELESS_DEBUGGING_SERVER_URL` with actual useless debug server url.

```javascript
import './.env.js'; // Import environment configuration before the debug sdk
import '@useless-media/useless-debug-sdk/node';
```

```javascript
// .env.js
process.env.USELESS_DEBUGGING_SERVER_URL = 'ws://localhost:9091';
```

#### Easy-install - Using command-line environment variable (ESM & CJS)
Replace `USELESS_DEBUGGING_SERVER_URL` with actual useless debug server url.

```shell
cross-env USELESS_DEBUGGING_SERVER_URL=ws://localhost:9091 node ./index.js
```

```javascript
// index.js
import '@useless-media/useless-debug-sdk/node';
```

#### Programmatic installation (ESM & CJS)
Replace `serverUrl` with actual useless debug server url.

```javascript
import { installNode } from '@useless-media/useless-debug-sdk';

const serverUrl = 'ws://localhost:9091';

await installNode(serverUrl);
```

### Advanced installation (cross-platform, ESM & CJS)
Replace `serverUrl` with actual useless debug server url.

```javascript
import { UselessDebugging } from '@useless-media/useless-debug-sdk';

const uselessDebugging = new UselessDebugging({
  configuration: undefined // Optional, advanced configuration
});

await uselessDebugging.initialize({
  serverUrl: 'ws://localhost:9091'
});
```

### Exposing debuggable objects
```javascript
// const uselessDebugging = globalThis.useless.nodeDebugging; // If using node easy-install

const app = ...;
uselessDebugging.registerContext('myApplicationInstance', app);
```

### Declaring global augmentations
If you are using an older typescript (< 5) or a moduleResolution other than `bundler` or `nodenext` you may need to declare
some global augmentations yourself. You can put this in an ambient context (f.ex. in a `global.d.ts` file):

```typescript
import type { IGlobalUselessDebugging, UselessDebugging } from '@useless-media/useless-debug-sdk';

declare global {
  interface IGlobalUseless {
    debugging: IGlobalUselessDebugging;
    nodeDebugging?: UselessDebugging; // This is only needed if you use the '/node' import
  }
  var useless: IGlobalUseless;
}
```

Or, if you are using the `/node?serverUrl=*` import you can put this in an ambient context:
```typescript
declare module '@useless-media/useless-debug-sdk/node?serverUrl=*' {
  export * from '@useless-media/useless-debug-sdk/node';
}
/* -------------------- or -------------------- */
import type { UselessDebugging } from '@useless-media/useless-debug-sdk';

declare global {
  interface IGlobalUseless {
    nodeDebugging?: UselessDebugging;
  }
}
```

Alternatively, you can import the augmentation like:
```typescript
import type * as UselesDebugTypes from '@useless-media/useless-debug-sdk';
/* -------------------- or -------------------- */
import type * as UselesDebugTypes from '@useless-media/useless-debug-sdk/node';
```