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

[`PlaybackEngineLoaderArgs`](reference/interfaces/PlaybackEngineLoaderArgs.md)

#### Returns

`PlaybackEngineLoader`

#### Overrides

`ComponentLoader.constructor`

## Properties

### configuration

> `protected` **configuration**: `ComponentLoaderConfiguration`

#### Inherited from

`ComponentLoader.configuration`

***

### loadedComponents

> `protected` **loadedComponents**: `Record`<`string`, `Record`<`string`, `any`>>

#### Inherited from

`ComponentLoader.loadedComponents`

## Methods

### configure()

> **configure**(`playbackEnginesLoadConfiguration`): `void`

#### Parameters

##### playbackEnginesLoadConfiguration

`IPlaybackEnginesLoadConfiguration`

#### Returns

`void`

***

### extractAllExports()

> `protected` **extractAllExports**<`TComponent`, `TLoadConfiguration`, `TExportType`>(`loadConfiguration`, `exportsObject`): `ExportsReturnTypeMap`<`TComponent`>[`TExportType`]

#### Type Parameters

##### TComponent

`TComponent`

##### TLoadConfiguration

`TLoadConfiguration` *extends* `ComponentLoadConfiguration` = `ComponentLoadConfiguration`

##### TExportType

`TExportType` *extends* `All` = `All`

#### Parameters

##### loadConfiguration

`TLoadConfiguration`

##### exportsObject

`Record`<`string`, `any`>

#### Returns

`ExportsReturnTypeMap`<`TComponent`>[`TExportType`]

#### Inherited from

`ComponentLoader.extractAllExports`

***

### extractBundle()

> `protected` **extractBundle**<`TLoadConfiguration`>(`loadConfiguration`, `exportsObject`): `Record`<`string`, `any`>

#### Type Parameters

##### TLoadConfiguration

`TLoadConfiguration` *extends* `ComponentLoadConfiguration` = `ComponentLoadConfiguration`

#### Parameters

##### loadConfiguration

`TLoadConfiguration`

##### exportsObject

`Record`<`string`, `any`>

#### Returns

`Record`<`string`, `any`>

#### Inherited from

`ComponentLoader.extractBundle`

***

### extractDefaultExports()

> `protected` **extractDefaultExports**<`TComponent`, `TLoadConfiguration`, `TExportType`>(`loadConfiguration`, `exportsObject`): `ExportsReturnTypeMap`<`TComponent`>[`TExportType`]

#### Type Parameters

##### TComponent

`TComponent`

##### TLoadConfiguration

`TLoadConfiguration` *extends* `ComponentLoadConfiguration` = `ComponentLoadConfiguration`

##### TExportType

`TExportType` *extends* `Default` = `Default`

#### Parameters

##### loadConfiguration

`TLoadConfiguration`

##### exportsObject

`Record`<`string`, `any`>

#### Returns

`ExportsReturnTypeMap`<`TComponent`>[`TExportType`]

#### Inherited from

`ComponentLoader.extractDefaultExports`

***

### extractExports()

> `protected` **extractExports**<`TComponent`, `TLoadConfiguration`>(`loadConfiguration`, `exportsObject`): `Record`<`string`, `any`> | `TComponent` | `Record`<`string`, `TComponent`> | `undefined`

#### Type Parameters

##### TComponent

`TComponent`

##### TLoadConfiguration

`TLoadConfiguration` *extends* `ComponentLoadConfiguration` = `ComponentLoadConfiguration`

#### Parameters

##### loadConfiguration

`TLoadConfiguration`

##### exportsObject

`Record`<`string`, `any`>

#### Returns

`Record`<`string`, `any`> | `TComponent` | `Record`<`string`, `TComponent`> | `undefined`

#### Inherited from

`ComponentLoader.extractExports`

***

### extractNamedExports()

> `protected` **extractNamedExports**<`TComponent`, `TLoadConfiguration`, `TExportType`>(`loadConfiguration`, `exportsObject`): `ExportsReturnTypeMap`<`TComponent`>[`TExportType`]

#### Type Parameters

##### TComponent

`TComponent`

##### TLoadConfiguration

`TLoadConfiguration` *extends* `ComponentLoadConfiguration` = `ComponentLoadConfiguration`

##### TExportType

`TExportType` *extends* `Named` = `Named`

#### Parameters

##### loadConfiguration

`TLoadConfiguration`

##### exportsObject

`Record`<`string`, `any`>

#### Returns

`ExportsReturnTypeMap`<`TComponent`>[`TExportType`]

#### Inherited from

`ComponentLoader.extractNamedExports`

***

### extractPredicatedExports()

> `protected` **extractPredicatedExports**<`TComponent`, `TLoadConfiguration`, `TExportType`>(`loadConfiguration`, `exportsObject`): `ExportsReturnTypeMap`<`TComponent`>[`TExportType`]

#### Type Parameters

##### TComponent

`TComponent`

##### TLoadConfiguration

`TLoadConfiguration` *extends* `ComponentLoadConfiguration` = `ComponentLoadConfiguration`

##### TExportType

`TExportType` *extends* `Predicate` = `Predicate`

#### Parameters

##### loadConfiguration

`TLoadConfiguration`

##### exportsObject

`Record`<`string`, `any`>

#### Returns

`ExportsReturnTypeMap`<`TComponent`>[`TExportType`]

#### Inherited from

`ComponentLoader.extractPredicatedExports`

***

### getConfiguredPlaybackEngineTypes()

> **getConfiguredPlaybackEngineTypes**(): `string`[]

#### Returns

`string`[]

***

### getGlobal()

> `protected` **getGlobal**(): *typeof* `globalThis`

#### Returns

*typeof* `globalThis`

#### Inherited from

`ComponentLoader.getGlobal`

***

### getResourceKey()

> `protected` **getResourceKey**(`loadConfiguration`): `string`

#### Parameters

##### loadConfiguration

`ComponentLoadConfiguration`

#### Returns

`string`

#### Inherited from

`ComponentLoader.getResourceKey`

***

### installPackage()

> **installPackage**(`packageSpec`): `Promise`<`Record`<`string`, `any`> | `undefined`>

#### Parameters

##### packageSpec

`PackageSpec`

#### Returns

`Promise`<`Record`<`string`, `any`> | `undefined`>

#### Inherited from

`ComponentLoader.installPackage`

***

### load()

> **load**<`TComponent`, `TLoadConfiguration`>(`loadConfiguration`): `Promise`<`Record`<`string`, `any`> | `TComponent` | `Record`<`string`, `TComponent`> | `undefined`>

#### Type Parameters

##### TComponent

`TComponent`

##### TLoadConfiguration

`TLoadConfiguration` *extends* `ComponentLoadConfiguration` = `ComponentLoadConfiguration`

#### Parameters

##### loadConfiguration

`TLoadConfiguration`

#### Returns

`Promise`<`Record`<`string`, `any`> | `TComponent` | `Record`<`string`, `TComponent`> | `undefined`>

#### Inherited from

`ComponentLoader.load`

***

### loadAll()

> **loadAll**<`TComponent`, `TLoadConfiguration`>(`loadConfiguration`): `Promise`<`Record`<`string`, `any`> | `undefined`>

#### Type Parameters

##### TComponent

`TComponent`

##### TLoadConfiguration

`TLoadConfiguration` *extends* `ComponentLoadConfiguration` = `ComponentLoadConfiguration`

#### Parameters

##### loadConfiguration

`TLoadConfiguration`

#### Returns

`Promise`<`Record`<`string`, `any`> | `undefined`>

#### Inherited from

`ComponentLoader.loadAll`

***

### loadAs()

> **loadAs**<`TComponent`, `TLoadConfiguration`>(`loadConfiguration`): `Promise`<`TComponent` | `undefined`>

Convenience function which just assumes/casts returned object to TComponent

#### Type Parameters

##### TComponent

`TComponent`

##### TLoadConfiguration

`TLoadConfiguration` *extends* `ComponentLoadConfiguration` = `ComponentLoadConfiguration`

#### Parameters

##### loadConfiguration

`TLoadConfiguration`

#### Returns

`Promise`<`TComponent` | `undefined`>

#### Inherited from

`ComponentLoader.loadAs`

***

### loadConfiguredPlaybackEngine()

> **loadConfiguredPlaybackEngine**<`TArgs`>(`type`): `Promise`<`IPlaybackEngineConstructor`<`TArgs`> | `undefined`>

#### Type Parameters

##### TArgs

`TArgs` *extends* `PlaybackEngineArgs` = `PlaybackEngineArgs`

#### Parameters

##### type

`string`

#### Returns

`Promise`<`IPlaybackEngineConstructor`<`TArgs`> | `undefined`>

***

### loadConfiguredPlaybackEngines()

> **loadConfiguredPlaybackEngines**(): `Promise`<`IPlaybackEngines`>

#### Returns

`Promise`<`IPlaybackEngines`>

***

### loadDefault()

> **loadDefault**<`TComponent`, `TLoadConfiguration`>(`loadConfiguration`): `Promise`<`TComponent` | `undefined`>

#### Type Parameters

##### TComponent

`TComponent`

##### TLoadConfiguration

`TLoadConfiguration` *extends* `ComponentLoadConfiguration` = `ComponentLoadConfiguration`

#### Parameters

##### loadConfiguration

`TLoadConfiguration`

#### Returns

`Promise`<`TComponent` | `undefined`>

#### Inherited from

`ComponentLoader.loadDefault`

***

### loadExports()

> **loadExports**<`TLoadConfiguration`>(`loadConfiguration`): `Promise`<`Record`<`string`, `any`> | `undefined`>

#### Type Parameters

##### TLoadConfiguration

`TLoadConfiguration` *extends* `ComponentLoadConfiguration` = `ComponentLoadConfiguration`

#### Parameters

##### loadConfiguration

`TLoadConfiguration`

#### Returns

`Promise`<`Record`<`string`, `any`> | `undefined`>

#### Inherited from

`ComponentLoader.loadExports`

***

### loadHlsPlaybackEngine()

> **loadHlsPlaybackEngine**<`TLoadConfiguration`>(`configuration`, `exportName?`, `bundleName?`): `Promise`<`IHlsPlaybackEngineConstructor` | `undefined`>

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

`Promise`<`IHlsPlaybackEngineConstructor` | `undefined`>

***

### loadNamed()

> **loadNamed**<`TComponent`, `TLoadConfiguration`>(`loadConfiguration`): `Promise`<`TComponent` | `undefined`>

#### Type Parameters

##### TComponent

`TComponent`

##### TLoadConfiguration

`TLoadConfiguration` *extends* `ComponentLoadConfiguration` = `ComponentLoadConfiguration`

#### Parameters

##### loadConfiguration

`TLoadConfiguration`

#### Returns

`Promise`<`TComponent` | `undefined`>

#### Inherited from

`ComponentLoader.loadNamed`

***

### loadNativePlaybackEngine()

> **loadNativePlaybackEngine**<`TLoadConfiguration`>(`configuration`, `exportName?`, `bundleName?`): `Promise`<`INativePlaybackEngineConstructor` | `undefined`>

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

`Promise`<`INativePlaybackEngineConstructor` | `undefined`>

***

### loadPlaybackEngine()

> **loadPlaybackEngine**<`TLoadConfiguration`, `TArgs`>(`configuration`, `exportName?`, `bundleName?`): `Promise`<`IPlaybackEngineConstructor`<`TArgs`> | `undefined`>

#### Type Parameters

##### TLoadConfiguration

`TLoadConfiguration` *extends* `ComponentLoadConfiguration` = `ComponentLoadConfiguration`

##### TArgs

`TArgs` *extends* `PlaybackEngineArgs` = `PlaybackEngineArgs`

#### Parameters

##### configuration

`string` | `TLoadConfiguration`

##### exportName?

`string`

##### bundleName?

`string`

#### Returns

`Promise`<`IPlaybackEngineConstructor`<`TArgs`> | `undefined`>

***

### loadPredicated()

> **loadPredicated**<`TComponent`, `TLoadConfiguration`>(`loadConfiguration`): `Promise`<`Record`<`string`, `TComponent`> | `undefined`>

#### Type Parameters

##### TComponent

`TComponent`

##### TLoadConfiguration

`TLoadConfiguration` *extends* `ComponentLoadConfiguration` = `ComponentLoadConfiguration`

#### Parameters

##### loadConfiguration

`TLoadConfiguration`

#### Returns

`Promise`<`Record`<`string`, `TComponent`> | `undefined`>

#### Inherited from

`ComponentLoader.loadPredicated`

***

### loadShakaPlaybackEngine()

> **loadShakaPlaybackEngine**<`TLoadConfiguration`>(`configuration`, `exportName?`, `bundleName?`): `Promise`<`IShakaPlaybackEngineConstructor` | `undefined`>

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

`Promise`<`IShakaPlaybackEngineConstructor` | `undefined`>

***

### setLogger()

> **setLogger**(`logger`): `void`

#### Parameters

##### logger

[`ILogger`](reference/interfaces/ILogger.md)

#### Returns

`void`
