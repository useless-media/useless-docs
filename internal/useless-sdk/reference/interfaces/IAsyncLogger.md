# IAsyncLogger

## Extends

- [`ILogger`](reference/interfaces/ILogger.md)

## Methods

### debug()

> **debug**(...`data`): `Promise`<`void`>

#### Parameters

##### data

...`any`[]

#### Returns

`Promise`<`void`>

#### Overrides

[`ILogger`](reference/interfaces/ILogger.md).[`debug`](ILogger.md#debug)

***

### debugVerbose()

> **debugVerbose**(...`data`): `Promise`<`void`>

#### Parameters

##### data

...`any`[]

#### Returns

`Promise`<`void`>

#### Overrides

[`ILogger`](reference/interfaces/ILogger.md).[`debugVerbose`](ILogger.md#debugverbose)

***

### error()

> **error**(...`data`): `Promise`<`void`>

#### Parameters

##### data

...`any`[]

#### Returns

`Promise`<`void`>

#### Overrides

[`ILogger`](reference/interfaces/ILogger.md).[`error`](ILogger.md#error)

***

### getLevel()

> **getLevel**(): [`LogLevels`](reference/enumerations/LogLevels.md)

#### Returns

[`LogLevels`](reference/enumerations/LogLevels.md)

#### Inherited from

[`ILogger`](reference/interfaces/ILogger.md).[`getLevel`](ILogger.md#getlevel)

***

### info()

> **info**(...`data`): `Promise`<`void`>

#### Parameters

##### data

...`any`[]

#### Returns

`Promise`<`void`>

#### Overrides

[`ILogger`](reference/interfaces/ILogger.md).[`info`](ILogger.md#info)

***

### log()

> **log**(...`data`): `Promise`<`void`>

#### Parameters

##### data

...`any`[]

#### Returns

`Promise`<`void`>

#### Overrides

[`ILogger`](reference/interfaces/ILogger.md).[`log`](ILogger.md#log)

***

### logAtLevel()

> **logAtLevel**(`level`, ...`data`): `Promise`<`void`>

#### Parameters

##### level

`number`

##### data

...`any`[]

#### Returns

`Promise`<`void`>

#### Overrides

[`ILogger`](reference/interfaces/ILogger.md).[`logAtLevel`](ILogger.md#logatlevel)

***

### setImplementation()

> **setImplementation**(`implementation`): `void`

#### Parameters

##### implementation

[`IAsyncLoggerImplementation`](reference/interfaces/IAsyncLoggerImplementation.md)

#### Returns

`void`

#### Overrides

[`ILogger`](reference/interfaces/ILogger.md).[`setImplementation`](ILogger.md#setimplementation)

***

### setLevel()

> **setLevel**(`level`): `void`

#### Parameters

##### level

[`LogLevels`](reference/enumerations/LogLevels.md)

#### Returns

`void`

#### Inherited from

[`ILogger`](reference/interfaces/ILogger.md).[`setLevel`](ILogger.md#setlevel)

***

### warn()

> **warn**(...`data`): `Promise`<`void`>

#### Parameters

##### data

...`any`[]

#### Returns

`Promise`<`void`>

#### Overrides

[`ILogger`](reference/interfaces/ILogger.md).[`warn`](ILogger.md#warn)
