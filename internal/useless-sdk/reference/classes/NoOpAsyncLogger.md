# NoOpAsyncLogger

## Extends

- [`AsyncLogger`](reference/classes/AsyncLogger.md)

## Constructors

### Constructor

> **new NoOpAsyncLogger**(): `NoOpAsyncLogger`

#### Returns

`NoOpAsyncLogger`

#### Overrides

[`AsyncLogger`](reference/classes/AsyncLogger.md).[`constructor`](AsyncLogger.md#constructor)

## Properties

### implementation

> `protected` **implementation**: [`IAsyncLoggerImplementation`](reference/interfaces/IAsyncLoggerImplementation.md)

#### Inherited from

[`AsyncLogger`](reference/classes/AsyncLogger.md).[`implementation`](AsyncLogger.md#implementation)

***

### level

> `protected` **level**: [`LogLevels`](reference/enumerations/LogLevels.md)

#### Inherited from

[`AsyncLogger`](reference/classes/AsyncLogger.md).[`level`](AsyncLogger.md#level)

***

### name?

> `protected` **name**?: `string`

#### Inherited from

[`AsyncLogger`](reference/classes/AsyncLogger.md).[`name`](AsyncLogger.md#name)

## Methods

### debug()

> **debug**(...`data`): `Promise`<`void`>

#### Parameters

##### data

...`any`[]

#### Returns

`Promise`<`void`>

#### Inherited from

[`AsyncLogger`](reference/classes/AsyncLogger.md).[`debug`](AsyncLogger.md#debug)

***

### debugVerbose()

> **debugVerbose**(...`data`): `Promise`<`void`>

#### Parameters

##### data

...`any`[]

#### Returns

`Promise`<`void`>

#### Inherited from

[`AsyncLogger`](reference/classes/AsyncLogger.md).[`debugVerbose`](AsyncLogger.md#debugverbose)

***

### error()

> **error**(...`data`): `Promise`<`void`>

#### Parameters

##### data

...`any`[]

#### Returns

`Promise`<`void`>

#### Inherited from

[`AsyncLogger`](reference/classes/AsyncLogger.md).[`error`](AsyncLogger.md#error)

***

### getLevel()

> **getLevel**(): [`LogLevels`](reference/enumerations/LogLevels.md)

#### Returns

[`LogLevels`](reference/enumerations/LogLevels.md)

#### Inherited from

[`AsyncLogger`](reference/classes/AsyncLogger.md).[`getLevel`](AsyncLogger.md#getlevel)

***

### info()

> **info**(...`data`): `Promise`<`void`>

#### Parameters

##### data

...`any`[]

#### Returns

`Promise`<`void`>

#### Inherited from

[`AsyncLogger`](reference/classes/AsyncLogger.md).[`info`](AsyncLogger.md#info)

***

### log()

> **log**(...`data`): `Promise`<`void`>

#### Parameters

##### data

...`any`[]

#### Returns

`Promise`<`void`>

#### Inherited from

[`AsyncLogger`](reference/classes/AsyncLogger.md).[`log`](AsyncLogger.md#log)

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

#### Inherited from

[`AsyncLogger`](reference/classes/AsyncLogger.md).[`logAtLevel`](AsyncLogger.md#logatlevel)

***

### setImplementation()

> **setImplementation**(`implementation`): `void`

#### Parameters

##### implementation

[`IAsyncLoggerImplementation`](reference/interfaces/IAsyncLoggerImplementation.md)

#### Returns

`void`

#### Inherited from

[`AsyncLogger`](reference/classes/AsyncLogger.md).[`setImplementation`](AsyncLogger.md#setimplementation)

***

### setLevel()

> **setLevel**(`level`): `void`

#### Parameters

##### level

[`LogLevels`](reference/enumerations/LogLevels.md)

#### Returns

`void`

#### Inherited from

[`AsyncLogger`](reference/classes/AsyncLogger.md).[`setLevel`](AsyncLogger.md#setlevel)

***

### warn()

> **warn**(...`data`): `Promise`<`void`>

#### Parameters

##### data

...`any`[]

#### Returns

`Promise`<`void`>

#### Inherited from

[`AsyncLogger`](reference/classes/AsyncLogger.md).[`warn`](AsyncLogger.md#warn)
