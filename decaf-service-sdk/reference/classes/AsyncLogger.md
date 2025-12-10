# AsyncLogger

## Implements

- [`IAsyncLogger`](reference/interfaces/IAsyncLogger.md)

## Constructors

### Constructor

> **new AsyncLogger**(`args?`): `AsyncLogger`

#### Parameters

##### args?

[`AsyncLoggerArgs`](reference/interfaces/AsyncLoggerArgs.md)

#### Returns

`AsyncLogger`

## Properties

### implementation

> `protected` **implementation**: `IAsyncLoggerImplementation`

***

### level

> `protected` **level**: [`LogLevels`](reference/enumerations/LogLevels.md)

***

### name?

> `protected` **name**?: `string`

## Methods

### debug()

> **debug**(...`data`): `Promise`<`void`>

#### Parameters

##### data

...`any`[]

#### Returns

`Promise`<`void`>

#### Implementation of

[`IAsyncLogger`](reference/interfaces/IAsyncLogger.md).[`debug`](../interfaces/IAsyncLogger.md#debug)

***

### debugVerbose()

> **debugVerbose**(...`data`): `Promise`<`void`>

#### Parameters

##### data

...`any`[]

#### Returns

`Promise`<`void`>

#### Implementation of

[`IAsyncLogger`](reference/interfaces/IAsyncLogger.md).[`debugVerbose`](../interfaces/IAsyncLogger.md#debugverbose)

***

### error()

> **error**(...`data`): `Promise`<`void`>

#### Parameters

##### data

...`any`[]

#### Returns

`Promise`<`void`>

#### Implementation of

[`IAsyncLogger`](reference/interfaces/IAsyncLogger.md).[`error`](../interfaces/IAsyncLogger.md#error)

***

### getLevel()

> **getLevel**(): [`LogLevels`](reference/enumerations/LogLevels.md)

#### Returns

[`LogLevels`](reference/enumerations/LogLevels.md)

#### Implementation of

[`IAsyncLogger`](reference/interfaces/IAsyncLogger.md).[`getLevel`](../interfaces/IAsyncLogger.md#getlevel)

***

### info()

> **info**(...`data`): `Promise`<`void`>

#### Parameters

##### data

...`any`[]

#### Returns

`Promise`<`void`>

#### Implementation of

[`IAsyncLogger`](reference/interfaces/IAsyncLogger.md).[`info`](../interfaces/IAsyncLogger.md#info)

***

### log()

> **log**(...`data`): `Promise`<`void`>

#### Parameters

##### data

...`any`[]

#### Returns

`Promise`<`void`>

#### Implementation of

[`IAsyncLogger`](reference/interfaces/IAsyncLogger.md).[`log`](../interfaces/IAsyncLogger.md#log)

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

#### Implementation of

[`IAsyncLogger`](reference/interfaces/IAsyncLogger.md).[`logAtLevel`](../interfaces/IAsyncLogger.md#logatlevel)

***

### setImplementation()

> **setImplementation**(`implementation`): `void`

#### Parameters

##### implementation

`IAsyncLoggerImplementation`

#### Returns

`void`

#### Implementation of

[`IAsyncLogger`](reference/interfaces/IAsyncLogger.md).[`setImplementation`](../interfaces/IAsyncLogger.md#setimplementation)

***

### setLevel()

> **setLevel**(`level`): `void`

#### Parameters

##### level

[`LogLevels`](reference/enumerations/LogLevels.md)

#### Returns

`void`

#### Implementation of

[`IAsyncLogger`](reference/interfaces/IAsyncLogger.md).[`setLevel`](../interfaces/IAsyncLogger.md#setlevel)

***

### warn()

> **warn**(...`data`): `Promise`<`void`>

#### Parameters

##### data

...`any`[]

#### Returns

`Promise`<`void`>

#### Implementation of

[`IAsyncLogger`](reference/interfaces/IAsyncLogger.md).[`warn`](../interfaces/IAsyncLogger.md#warn)
