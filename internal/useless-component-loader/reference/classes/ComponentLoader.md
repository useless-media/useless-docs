# ComponentLoader

## Constructors

### Constructor

> **new ComponentLoader**(`configuration?`): `ComponentLoader`

#### Parameters

##### configuration?

[`ComponentLoaderConfiguration`](reference/classes/ComponentLoaderConfiguration.md)

#### Returns

`ComponentLoader`

## Properties

### configuration

> `protected` **configuration**: [`ComponentLoaderConfiguration`](reference/classes/ComponentLoaderConfiguration.md)

***

### loadedComponents

> `protected` **loadedComponents**: `Record`<`string`, `Record`<`string`, `any`>> = `{}`

## Methods

### extractAllExports()

> `protected` **extractAllExports**<`TComponent`, `TLoadConfiguration`, `TExportType`>(`loadConfiguration`, `exportsObject`): [`ExportsReturnTypeMap`](reference/interfaces/ExportsReturnTypeMap.md)<`TComponent`>[`TExportType`]

#### Type Parameters

##### TComponent

`TComponent`

##### TLoadConfiguration

`TLoadConfiguration` *extends* [`ComponentLoadConfiguration`](reference/interfaces/ComponentLoadConfiguration.md) = [`ComponentLoadConfiguration`](../interfaces/ComponentLoadConfiguration.md)

##### TExportType

`TExportType` *extends* [`All`](reference/enumerations/ComponentExportTypes.md#all) = [`All`](../enumerations/ComponentExportTypes.md#all)

#### Parameters

##### loadConfiguration

`TLoadConfiguration`

##### exportsObject

`Record`<`string`, `any`>

#### Returns

[`ExportsReturnTypeMap`](reference/interfaces/ExportsReturnTypeMap.md)<`TComponent`>[`TExportType`]

***

### extractBundle()

> `protected` **extractBundle**<`TLoadConfiguration`>(`loadConfiguration`, `exportsObject`): `Record`<`string`, `any`>

#### Type Parameters

##### TLoadConfiguration

`TLoadConfiguration` *extends* [`ComponentLoadConfiguration`](reference/interfaces/ComponentLoadConfiguration.md) = [`ComponentLoadConfiguration`](../interfaces/ComponentLoadConfiguration.md)

#### Parameters

##### loadConfiguration

`TLoadConfiguration`

##### exportsObject

`Record`<`string`, `any`>

#### Returns

`Record`<`string`, `any`>

***

### extractDefaultExports()

> `protected` **extractDefaultExports**<`TComponent`, `TLoadConfiguration`, `TExportType`>(`loadConfiguration`, `exportsObject`): [`ExportsReturnTypeMap`](reference/interfaces/ExportsReturnTypeMap.md)<`TComponent`>[`TExportType`]

#### Type Parameters

##### TComponent

`TComponent`

##### TLoadConfiguration

`TLoadConfiguration` *extends* [`ComponentLoadConfiguration`](reference/interfaces/ComponentLoadConfiguration.md) = [`ComponentLoadConfiguration`](../interfaces/ComponentLoadConfiguration.md)

##### TExportType

`TExportType` *extends* [`Default`](reference/enumerations/ComponentExportTypes.md#default) = [`Default`](../enumerations/ComponentExportTypes.md#default)

#### Parameters

##### loadConfiguration

`TLoadConfiguration`

##### exportsObject

`Record`<`string`, `any`>

#### Returns

[`ExportsReturnTypeMap`](reference/interfaces/ExportsReturnTypeMap.md)<`TComponent`>[`TExportType`]

***

### extractExports()

> `protected` **extractExports**<`TComponent`, `TLoadConfiguration`>(`loadConfiguration`, `exportsObject`): `Record`<`string`, `any`> | `TComponent` | `Record`<`string`, `TComponent`> | `undefined`

#### Type Parameters

##### TComponent

`TComponent`

##### TLoadConfiguration

`TLoadConfiguration` *extends* [`ComponentLoadConfiguration`](reference/interfaces/ComponentLoadConfiguration.md) = [`ComponentLoadConfiguration`](../interfaces/ComponentLoadConfiguration.md)

#### Parameters

##### loadConfiguration

`TLoadConfiguration`

##### exportsObject

`Record`<`string`, `any`>

#### Returns

`Record`<`string`, `any`> | `TComponent` | `Record`<`string`, `TComponent`> | `undefined`

***

### extractNamedExports()

> `protected` **extractNamedExports**<`TComponent`, `TLoadConfiguration`, `TExportType`>(`loadConfiguration`, `exportsObject`): [`ExportsReturnTypeMap`](reference/interfaces/ExportsReturnTypeMap.md)<`TComponent`>[`TExportType`]

#### Type Parameters

##### TComponent

`TComponent`

##### TLoadConfiguration

`TLoadConfiguration` *extends* [`ComponentLoadConfiguration`](reference/interfaces/ComponentLoadConfiguration.md) = [`ComponentLoadConfiguration`](../interfaces/ComponentLoadConfiguration.md)

##### TExportType

`TExportType` *extends* [`Named`](reference/enumerations/ComponentExportTypes.md#named) = [`Named`](../enumerations/ComponentExportTypes.md#named)

#### Parameters

##### loadConfiguration

`TLoadConfiguration`

##### exportsObject

`Record`<`string`, `any`>

#### Returns

[`ExportsReturnTypeMap`](reference/interfaces/ExportsReturnTypeMap.md)<`TComponent`>[`TExportType`]

***

### extractPredicatedExports()

> `protected` **extractPredicatedExports**<`TComponent`, `TLoadConfiguration`, `TExportType`>(`loadConfiguration`, `exportsObject`): [`ExportsReturnTypeMap`](reference/interfaces/ExportsReturnTypeMap.md)<`TComponent`>[`TExportType`]

#### Type Parameters

##### TComponent

`TComponent`

##### TLoadConfiguration

`TLoadConfiguration` *extends* [`ComponentLoadConfiguration`](reference/interfaces/ComponentLoadConfiguration.md) = [`ComponentLoadConfiguration`](../interfaces/ComponentLoadConfiguration.md)

##### TExportType

`TExportType` *extends* [`Predicate`](reference/enumerations/ComponentExportTypes.md#predicate) = [`Predicate`](../enumerations/ComponentExportTypes.md#predicate)

#### Parameters

##### loadConfiguration

`TLoadConfiguration`

##### exportsObject

`Record`<`string`, `any`>

#### Returns

[`ExportsReturnTypeMap`](reference/interfaces/ExportsReturnTypeMap.md)<`TComponent`>[`TExportType`]

***

### getGlobal()

> `protected` **getGlobal**(): *typeof* `globalThis`

#### Returns

*typeof* `globalThis`

***

### getResourceKey()

> `protected` **getResourceKey**(`loadConfiguration`): `string`

#### Parameters

##### loadConfiguration

[`ComponentLoadConfiguration`](reference/interfaces/ComponentLoadConfiguration.md)

#### Returns

`string`

***

### installPackage()

> **installPackage**(`packageSpec`): `Promise`<`Record`<`string`, `any`> | `undefined`>

#### Parameters

##### packageSpec

[`PackageSpec`](reference/interfaces/PackageSpec.md)

#### Returns

`Promise`<`Record`<`string`, `any`> | `undefined`>

***

### load()

> **load**<`TComponent`, `TLoadConfiguration`>(`loadConfiguration`): `Promise`<`Record`<`string`, `any`> | `TComponent` | `Record`<`string`, `TComponent`> | `undefined`>

#### Type Parameters

##### TComponent

`TComponent`

##### TLoadConfiguration

`TLoadConfiguration` *extends* [`ComponentLoadConfiguration`](reference/interfaces/ComponentLoadConfiguration.md) = [`ComponentLoadConfiguration`](../interfaces/ComponentLoadConfiguration.md)

#### Parameters

##### loadConfiguration

`TLoadConfiguration`

#### Returns

`Promise`<`Record`<`string`, `any`> | `TComponent` | `Record`<`string`, `TComponent`> | `undefined`>

***

### loadAll()

> **loadAll**<`TComponent`, `TLoadConfiguration`>(`loadConfiguration`): `Promise`<`Record`<`string`, `any`> | `undefined`>

#### Type Parameters

##### TComponent

`TComponent`

##### TLoadConfiguration

`TLoadConfiguration` *extends* [`ComponentLoadConfiguration`](reference/interfaces/ComponentLoadConfiguration.md) = [`ComponentLoadConfiguration`](../interfaces/ComponentLoadConfiguration.md)

#### Parameters

##### loadConfiguration

`TLoadConfiguration`

#### Returns

`Promise`<`Record`<`string`, `any`> | `undefined`>

***

### loadAs()

> **loadAs**<`TComponent`, `TLoadConfiguration`>(`loadConfiguration`): `Promise`<`TComponent` | `undefined`>

Convenience function which just assumes/casts returned object to TComponent

#### Type Parameters

##### TComponent

`TComponent`

##### TLoadConfiguration

`TLoadConfiguration` *extends* [`ComponentLoadConfiguration`](reference/interfaces/ComponentLoadConfiguration.md) = [`ComponentLoadConfiguration`](../interfaces/ComponentLoadConfiguration.md)

#### Parameters

##### loadConfiguration

`TLoadConfiguration`

#### Returns

`Promise`<`TComponent` | `undefined`>

***

### loadDefault()

> **loadDefault**<`TComponent`, `TLoadConfiguration`>(`loadConfiguration`): `Promise`<`TComponent` | `undefined`>

#### Type Parameters

##### TComponent

`TComponent`

##### TLoadConfiguration

`TLoadConfiguration` *extends* [`ComponentLoadConfiguration`](reference/interfaces/ComponentLoadConfiguration.md) = [`ComponentLoadConfiguration`](../interfaces/ComponentLoadConfiguration.md)

#### Parameters

##### loadConfiguration

`TLoadConfiguration`

#### Returns

`Promise`<`TComponent` | `undefined`>

***

### loadExports()

> **loadExports**<`TLoadConfiguration`>(`loadConfiguration`): `Promise`<`Record`<`string`, `any`> | `undefined`>

#### Type Parameters

##### TLoadConfiguration

`TLoadConfiguration` *extends* [`ComponentLoadConfiguration`](reference/interfaces/ComponentLoadConfiguration.md) = [`ComponentLoadConfiguration`](../interfaces/ComponentLoadConfiguration.md)

#### Parameters

##### loadConfiguration

`TLoadConfiguration`

#### Returns

`Promise`<`Record`<`string`, `any`> | `undefined`>

***

### loadNamed()

> **loadNamed**<`TComponent`, `TLoadConfiguration`>(`loadConfiguration`): `Promise`<`TComponent` | `undefined`>

#### Type Parameters

##### TComponent

`TComponent`

##### TLoadConfiguration

`TLoadConfiguration` *extends* [`ComponentLoadConfiguration`](reference/interfaces/ComponentLoadConfiguration.md) = [`ComponentLoadConfiguration`](../interfaces/ComponentLoadConfiguration.md)

#### Parameters

##### loadConfiguration

`TLoadConfiguration`

#### Returns

`Promise`<`TComponent` | `undefined`>

***

### loadPredicated()

> **loadPredicated**<`TComponent`, `TLoadConfiguration`>(`loadConfiguration`): `Promise`<`Record`<`string`, `TComponent`> | `undefined`>

#### Type Parameters

##### TComponent

`TComponent`

##### TLoadConfiguration

`TLoadConfiguration` *extends* [`ComponentLoadConfiguration`](reference/interfaces/ComponentLoadConfiguration.md) = [`ComponentLoadConfiguration`](../interfaces/ComponentLoadConfiguration.md)

#### Parameters

##### loadConfiguration

`TLoadConfiguration`

#### Returns

`Promise`<`Record`<`string`, `TComponent`> | `undefined`>
