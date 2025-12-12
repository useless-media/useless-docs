# PlaybackEngineLoader

Note:
  1. Esm
   1.1. This loader assumes Esm modules by default (that can be dynamically imported) (but will attempt to fall back to Umd).
   1.2. If the target script has external:ed any dependencies these dependencies *MUST* be provided in an importmap on the page.
  2. Umd
   2.1. Default export with Umd scripts works.
   2.2. Named exports with Umd scripts requires specifying the Umd bundleName.
  3. In node environments
   3.1. Dynamically importing http(s):// urls is not supported. Therefore, one needs to give an absolute local path or a packageSpec + exec reference.

## Extends

- `ComponentLoader`

## Constructors

### Constructor

> **new PlaybackEngineLoader**(`args?`): `PlaybackEngineLoader`

#### Parameters

##### args?

[`PlaybackEngineLoaderArgs`](reference/classes/PlaybackEngineLoaderArgs.md)

#### Returns

`PlaybackEngineLoader`

#### Overrides

`ComponentLoader.constructor`

## Methods

### configure()

> **configure**(`playbackEnginesLoadConfiguration`): `void`

#### Parameters

##### playbackEnginesLoadConfiguration

`IPlaybackEnginesLoadConfiguration`

#### Returns

`void`

***

### getConfiguredPlaybackEngineTypes()

> **getConfiguredPlaybackEngineTypes**(): `string`[]

#### Returns

`string`[]

***

### loadConfiguredPlaybackEngine()

> **loadConfiguredPlaybackEngine**<`TArgs`>(`type`): `Promise`<[`IPlaybackEngineConstructor`](reference/interfaces/IPlaybackEngineConstructor.md)<`TArgs`> | `undefined`>

#### Type Parameters

##### TArgs

`TArgs` *extends* [`PlaybackEngineArgs`](reference/interfaces/PlaybackEngineArgs.md) = [`PlaybackEngineArgs`](../interfaces/PlaybackEngineArgs.md)

#### Parameters

##### type

`string`

#### Returns

`Promise`<[`IPlaybackEngineConstructor`](reference/interfaces/IPlaybackEngineConstructor.md)<`TArgs`> | `undefined`>

***

### loadConfiguredPlaybackEngines()

> **loadConfiguredPlaybackEngines**(): `Promise`<[`IPlaybackEngines`](reference/interfaces/IPlaybackEngines.md)>

#### Returns

`Promise`<[`IPlaybackEngines`](reference/interfaces/IPlaybackEngines.md)>

***

### loadHlsPlaybackEngine()

> **loadHlsPlaybackEngine**<`TLoadConfiguration`>(`configuration`, `exportName?`, `bundleName?`): `Promise`<[`IHlsPlaybackEngineConstructor`](reference/interfaces/IHlsPlaybackEngineConstructor.md) | `undefined`>

#### Type Parameters

##### TLoadConfiguration

`TLoadConfiguration` *extends* `ComponentLoadConfiguration` = `ComponentLoadConfiguration`

#### Parameters

##### configuration

`string` | `TLoadConfiguration`

##### exportName?

`string`

##### bundleName?

`string`

#### Returns

`Promise`<[`IHlsPlaybackEngineConstructor`](reference/interfaces/IHlsPlaybackEngineConstructor.md) | `undefined`>

***

### loadNativePlaybackEngine()

> **loadNativePlaybackEngine**<`TLoadConfiguration`>(`configuration`, `exportName?`, `bundleName?`): `Promise`<[`INativePlaybackEngineConstructor`](reference/interfaces/INativePlaybackEngineConstructor.md) | `undefined`>

#### Type Parameters

##### TLoadConfiguration

`TLoadConfiguration` *extends* `ComponentLoadConfiguration` = `ComponentLoadConfiguration`

#### Parameters

##### configuration

`string` | `TLoadConfiguration`

##### exportName?

`string`

##### bundleName?

`string`

#### Returns

`Promise`<[`INativePlaybackEngineConstructor`](reference/interfaces/INativePlaybackEngineConstructor.md) | `undefined`>

***

### loadPlaybackEngine()

> **loadPlaybackEngine**<`TLoadConfiguration`, `TArgs`>(`configuration`, `exportName?`, `bundleName?`): `Promise`<[`IPlaybackEngineConstructor`](reference/interfaces/IPlaybackEngineConstructor.md)<`TArgs`> | `undefined`>

#### Type Parameters

##### TLoadConfiguration

`TLoadConfiguration` *extends* `ComponentLoadConfiguration` = `ComponentLoadConfiguration`

##### TArgs

`TArgs` *extends* [`PlaybackEngineArgs`](reference/interfaces/PlaybackEngineArgs.md) = [`PlaybackEngineArgs`](../interfaces/PlaybackEngineArgs.md)

#### Parameters

##### configuration

`string` | `TLoadConfiguration`

##### exportName?

`string`

##### bundleName?

`string`

#### Returns

`Promise`<[`IPlaybackEngineConstructor`](reference/interfaces/IPlaybackEngineConstructor.md)<`TArgs`> | `undefined`>

***

### loadShakaPlaybackEngine()

> **loadShakaPlaybackEngine**<`TLoadConfiguration`>(`configuration`, `exportName?`, `bundleName?`): `Promise`<[`IShakaPlaybackEngineConstructor`](reference/interfaces/IShakaPlaybackEngineConstructor.md) | `undefined`>

#### Type Parameters

##### TLoadConfiguration

`TLoadConfiguration` *extends* `ComponentLoadConfiguration` = `ComponentLoadConfiguration`

#### Parameters

##### configuration

`string` | `TLoadConfiguration`

##### exportName?

`string`

##### bundleName?

`string`

#### Returns

`Promise`<[`IShakaPlaybackEngineConstructor`](reference/interfaces/IShakaPlaybackEngineConstructor.md) | `undefined`>

***

### setLogger()

> **setLogger**(`logger`): `void`

#### Parameters

##### logger

`ILogger`

#### Returns

`void`
