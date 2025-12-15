# Useless Electron Sdk

## BridgedEmitter

### In Main
```typescript
const emitter = new BridgedEmitter(mainWindow.webContents, ipcMain, Channels.Main);
```

### In Renderer/Preload
```typescript
const emitter = new BridgedEmitter(ipcRenderer, ipcRenderer, Channels.Renderer);
contextBridge.exposeInMainWorld('bridgedEmitter', {
  emit: emitter['emit'].bind(emitter),
  on: emitter['on'].bind(emitter),
  addEventListener: emitter['addEventListener'].bind(emitter),
  off: emitter['off'].bind(emitter),
  removeEventListener: emitter['removeEventListener'].bind(emitter)
});
```

## BridgedIntegrationManager

## Integration representation (mirroring functions on main)
```typescript
export interface BridgedIntegration {
  name: 'BridgedIntegration';

  something(num:number): Promise<string>;
}

export const BridgedIntegration = (integration: Partial<BridgedIntegration>): BridgedIntegration => ({
  name: 'BridgedIntegration',
  
  async something(num: number): Promise<string> {
    return '';
  },
  ...integration
})
```

### In Main
```
const bridge = new BridgedIntegrationManager<BridgedIntegration>(this);
bridge.initializeMain(ipcMain);
```

### In Renderer/Preload
```
const bridge = new BridgedIntegrationManager(BridgedIntegration({}));
bridge.initializePreload(ipcRenderer);
contextBridge.exposeInMainWorld('bridge', bridge.getPreloadRelay());
```

# VMP Signing
In order to play Drm protected content in the Electron app, the VMP (Verified Media Path) in Chromium needs to be
signed with a Google Widevine approved certificate. A service to do this is provided by CastLabs (currently for free).
See, [EVS](https://github.com/castlabs/electron-releases/wiki/EVS) for full instructions on how to install the tool and
sign up for an account (be sure to save your account name & password as you will periodically need to log back in). In
short, you'll need:
* Python 3.7+ exposed on your path
    * If you are on Windows it should be exposed as `python3`
    * If you are on Mac it should be exposed as `python`
* The pip module `castlabs-evs` installed
* To be logged in to the CastLabs EVS service (local command line)

When building the Electron app, the build will assume that you have completed the above requirements and attempt to use
the EVS tool to perform VPM signing. Should the signing fail the Electron app will still be built, but it will not be
able to play Drm protected content so if you need this capability be sure to check the build output that the signing
succeeded, it might be that you've been logged out of the EVS account after some time and need to log back in before
building.

## Logging in to an existing EVS account
```
python3 -m castlabs_evs.account reauth
```

You will then have to provide your EVS account name & password.

## Integrating in electron builder
On Windows:
```
afterSign: async (context) => {
  if (context.packager.platform === Platform.WINDOWS) {
    return vmpSign('release/build/win-unpacked');
  }
}
```

On Mac:
```
afterPack: async (context) => {
  if (context.packager.platform === Platform.MAC) {
    return vmpSignExec('release/build/mac');
  }
}
```