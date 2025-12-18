# TsNative

## Constructors

### Constructor

> **new TsNative**(): `TsNative`

#### Returns

`TsNative`

## Methods

### build()

> **build**(`cliOptions`): `Promise`<`void`>

#### Parameters

##### cliOptions

[`CliOptions`](reference/interfaces/CliOptions.md)

#### Returns

`Promise`<`void`>

***

### clean()

> **clean**(`cliOptions`): `Promise`<`void`>

#### Parameters

##### cliOptions

[`CliOptions`](reference/interfaces/CliOptions.md)

#### Returns

`Promise`<`void`>

***

### createConfiguration()

> **createConfiguration**<`TConfiguration`>(`cliOptions`): `Promise`<`TConfiguration`>

#### Type Parameters

##### TConfiguration

`TConfiguration` *extends* [`Configuration`](reference/interfaces/Configuration.md) = [`Configuration`](../interfaces/Configuration.md)

#### Parameters

##### cliOptions

[`CliOptions`](reference/interfaces/CliOptions.md)

#### Returns

`Promise`<`TConfiguration`>

***

### init()

> **init**(`cliOptions`): `Promise`<`void`>

#### Parameters

##### cliOptions

[`CliOptions`](reference/interfaces/CliOptions.md)

#### Returns

`Promise`<`void`>

***

### resolveConfiguration()

> **resolveConfiguration**(`cliOptions`): `Promise`<[`IResolvedConfiguration`](reference/interfaces/IResolvedConfiguration.md)>

#### Parameters

##### cliOptions

[`CliOptions`](reference/interfaces/CliOptions.md)

#### Returns

`Promise`<[`IResolvedConfiguration`](reference/interfaces/IResolvedConfiguration.md)>
