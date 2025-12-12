# PlayerLoader

## Extends

- `ComponentLoader`

## Constructors

### Constructor

> **new PlayerLoader**(`args?`): `PlayerLoader`

#### Parameters

##### args?

[`PlayerLoaderArgs`](reference/classes/PlayerLoaderArgs.md)

#### Returns

`PlayerLoader`

#### Overrides

`ComponentLoader.constructor`

## Methods

### configure()

> **configure**(`playerLoaderConfiguration`): `void`

#### Parameters

##### playerLoaderConfiguration

`Partial`<[`PlayerLoaderConfiguration`](reference/interfaces/PlayerLoaderConfiguration.md)>

#### Returns

`void`

***

### configureLoadConfigurationsIfNotConfigured()

> **configureLoadConfigurationsIfNotConfigured**(`loadConfigurations`): `void`

#### Parameters

##### loadConfigurations

`PlayerLoaderLoadConfigurations`

#### Returns

`void`

***

### getConfiguredPlayerTypes()

> **getConfiguredPlayerTypes**(): `string`[]

#### Returns

`string`[]

***

### loadConfiguredPlayer()

> **loadConfiguredPlayer**(`type`, `predicate?`): `Promise`<`any`>

#### Parameters

##### type

`string`

##### predicate?

(`key`, `value`) => `boolean`

#### Returns

`Promise`<`any`>

***

### loadConfiguredPlayers()

> **loadConfiguredPlayers**(`exportPredicates?`): `Promise`<[`IPlayerReferences`](reference/interfaces/IPlayerReferences.md)>

#### Parameters

##### exportPredicates?

`Record`<`string`, (`key`, `value`) => `boolean`>

#### Returns

`Promise`<[`IPlayerReferences`](reference/interfaces/IPlayerReferences.md)>

***

### loadHlsPlayer()

> **loadHlsPlayer**<`TLoadConfiguration`>(`configuration`, `exportName?`, `bundleName?`): `Promise`<`any`>

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

`Promise`<`any`>

***

### loadPlayer()

> **loadPlayer**<`TLoadConfiguration`>(`configuration`, `type`, `predicate`, `exportName?`, `bundleName?`): `Promise`<`any`>

#### Type Parameters

##### TLoadConfiguration

`TLoadConfiguration` *extends* `ComponentLoadConfiguration` = `ComponentLoadConfiguration`

#### Parameters

##### configuration

`string` | `TLoadConfiguration`

##### type

`string`

##### predicate

(`key`, `value`) => `boolean`

##### exportName?

`string`

##### bundleName?

`string`

#### Returns

`Promise`<`any`>

***

### loadShakaPlayer()

> **loadShakaPlayer**<`TLoadConfiguration`>(`configuration`, `exportName?`, `bundleName?`): `Promise`<`any`>

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

`Promise`<`any`>

***

### registerExportPredicate()

> **registerExportPredicate**(`type`, `predicate`): `void`

#### Parameters

##### type

`string`

##### predicate

(`key`, `value`) => `boolean`

#### Returns

`void`

***

### setLogger()

> **setLogger**(`logger`): `void`

#### Parameters

##### logger

`ILogger`

#### Returns

`void`
