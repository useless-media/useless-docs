# ConfigurationManager

## Implements

- [`ILoadControllerLoadable`](reference/interfaces/ILoadControllerLoadable.md)

## Constructors

### Constructor

> **new ConfigurationManager**(`args`): `ConfigurationManager`

#### Parameters

##### args

[`ConfigurationManagerArgs`](reference/interfaces/ConfigurationManagerArgs.md)

#### Returns

`ConfigurationManager`

## Properties

### name

> `readonly` **name**: `string` = `'ConfigurationManager'`

#### Implementation of

[`ILoadControllerLoadable`](reference/interfaces/ILoadControllerLoadable.md).[`name`](../interfaces/ILoadControllerLoadable.md#name)

## Methods

### configure()

> **configure**(`configuration`): `void`

#### Parameters

##### configuration

[`Configuration`](reference/interfaces/Configuration.md)

#### Returns

`void`

***

### configurePlaybackConfiguration()

> **configurePlaybackConfiguration**<`T`>(`playbackEngineType`, `playbackConfiguration`): `void`

#### Type Parameters

##### T

`T` *extends* `PlaybackEngineTypes`

#### Parameters

##### playbackEngineType

`T`

##### playbackConfiguration

`DeepPartial`<[`PlaybackConfigurationMap`](reference/interfaces/PlaybackConfigurationMap.md)[`T`]>

#### Returns

`void`

***

### destroy()

> **destroy**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### getDeviceProfile()

> **getDeviceProfile**(): `PlaybackConfigurationProfile`

#### Returns

`PlaybackConfigurationProfile`

***

### getEngineConfiguration()

> **getEngineConfiguration**(): [`EnsuredWackaEngineConfiguration`](reference/interfaces/EnsuredWackaEngineConfiguration.md)

#### Returns

[`EnsuredWackaEngineConfiguration`](reference/interfaces/EnsuredWackaEngineConfiguration.md)

***

### getPlaybackConfiguration()

> **getPlaybackConfiguration**<`T`>(`playbackEngineType`): `Partial`<[`PlaybackConfigurationMap`](reference/interfaces/PlaybackConfigurationMap.md)[`T`]>

#### Type Parameters

##### T

`T` *extends* `PlaybackEngineTypes`

#### Parameters

##### playbackEngineType

`T`

#### Returns

`Partial`<[`PlaybackConfigurationMap`](reference/interfaces/PlaybackConfigurationMap.md)[`T`]>

***

### getPlaybackConfigurationProfile()

> **getPlaybackConfigurationProfile**(`name`): `PlaybackConfigurationProfile`

#### Parameters

##### name

`string`

#### Returns

`PlaybackConfigurationProfile`

***

### getPlaybackConfigurationProfileNames()

> **getPlaybackConfigurationProfileNames**(): `PlaybackConfigurationProfileNames`

#### Returns

`PlaybackConfigurationProfileNames`

***

### getPlaybackConfigurationProfiles()

> **getPlaybackConfigurationProfiles**(): `Record`<`string`, `PlaybackConfigurationProfile`>

#### Returns

`Record`<`string`, `PlaybackConfigurationProfile`>

***

### getPlaybackConfigurations()

> **getPlaybackConfigurations**(): `PlaybackConfigurations`

#### Returns

`PlaybackConfigurations`

***

### getPlaybackEngineConfiguration()

> **getPlaybackEngineConfiguration**(): `PlaybackEngineConfiguration`

#### Returns

`PlaybackEngineConfiguration`

***

### getUniquePlaybackConfigurationProfileNames()

> **getUniquePlaybackConfigurationProfileNames**(): `string`[]

#### Returns

`string`[]

***

### initialize()

> **initialize**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### load()

> **load**(`load`): `Promise`<`void`>

#### Parameters

##### load

[`LoadableLoadArgs`](reference/interfaces/LoadableLoadArgs.md)

#### Returns

`Promise`<`void`>

#### Implementation of

[`ILoadControllerLoadable`](reference/interfaces/ILoadControllerLoadable.md).[`load`](../interfaces/ILoadControllerLoadable.md#load)

***

### preload()

> **preload**(`preload`): `Promise`<[`LoadablePreloadArgs`](reference/interfaces/LoadablePreloadArgs.md) | `undefined`>

#### Parameters

##### preload

[`LoadablePreloadArgs`](reference/interfaces/LoadablePreloadArgs.md)

#### Returns

`Promise`<[`LoadablePreloadArgs`](reference/interfaces/LoadablePreloadArgs.md) | `undefined`>

#### Implementation of

[`ILoadControllerLoadable`](reference/interfaces/ILoadControllerLoadable.md).[`preload`](../interfaces/ILoadControllerLoadable.md#preload)

***

### registerDeviceProfile()

> **registerDeviceProfile**(`deviceProfile`): `void`

#### Parameters

##### deviceProfile

`PlaybackConfigurationProfile`

#### Returns

`void`

***

### registerPlaybackConfigurationProfile()

> **registerPlaybackConfigurationProfile**(`name`, `profile`): `void`

#### Parameters

##### name

`string`

##### profile

`PlaybackConfigurationProfile`

#### Returns

`void`

***

### registerPlaybackConfigurationProfileByEngineType()

> **registerPlaybackConfigurationProfileByEngineType**<`T`>(`playbackEngineType`, `name`, `configurationProfile`): `void`

#### Type Parameters

##### T

`T` *extends* `PlaybackEngineTypes`

#### Parameters

##### playbackEngineType

`T`

##### name

`string`

##### configurationProfile

`DeepPartial`<[`PlaybackConfigurationMap`](reference/interfaces/PlaybackConfigurationMap.md)[`T`]>

#### Returns

`void`

***

### reset()

> **reset**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### setHlsVersion()

> **setHlsVersion**(`version`): `void`

#### Parameters

##### version

`string`

#### Returns

`void`

***

### setPlaybackConfigurationProfiles()

> **setPlaybackConfigurationProfiles**(`profileNames`): `void`

#### Parameters

##### profileNames

`string`[]

#### Returns

`void`

***

### setShakaVersion()

> **setShakaVersion**(`version`): `void`

#### Parameters

##### version

`string`

#### Returns

`void`

***

### setStreamPlaybackConfigurationProfiles()

> **setStreamPlaybackConfigurationProfiles**(`profileNames`): `void`

#### Parameters

##### profileNames

`string`[]

#### Returns

`void`
