# Logger

## Extended by

- [`NoOpLogger`](reference/classes/NoOpLogger.md)

## Implements

- [`ILogger`](reference/interfaces/ILogger.md)

## Constructors

### Constructor

> **new Logger**(`args?`): `Logger`

#### Parameters

##### args?

[`LoggerArgs`](reference/interfaces/LoggerArgs.md)

#### Returns

`Logger`

## Properties

### implementation

> `protected` **implementation**: [`ILoggerImplementation`](reference/interfaces/ILoggerImplementation.md)

***

### level

> `protected` **level**: [`LogLevels`](reference/enumerations/LogLevels.md)

***

### name?

> `protected` **name**?: `string`

## Methods

### debug()

> **debug**(...`data`): `void`

#### Parameters

##### data

...`any`[]

#### Returns

`void`

#### Implementation of

[`ILogger`](reference/interfaces/ILogger.md).[`debug`](../interfaces/ILogger.md#debug)

***

### debugVerbose()

> **debugVerbose**(...`data`): `void`

#### Parameters

##### data

...`any`[]

#### Returns

`void`

#### Implementation of

[`ILogger`](reference/interfaces/ILogger.md).[`debugVerbose`](../interfaces/ILogger.md#debugverbose)

***

### error()

> **error**(...`data`): `void`

#### Parameters

##### data

...`any`[]

#### Returns

`void`

#### Implementation of

[`ILogger`](reference/interfaces/ILogger.md).[`error`](../interfaces/ILogger.md#error)

***

### getLevel()

> **getLevel**(): [`LogLevels`](reference/enumerations/LogLevels.md)

#### Returns

[`LogLevels`](reference/enumerations/LogLevels.md)

#### Implementation of

[`ILogger`](reference/interfaces/ILogger.md).[`getLevel`](../interfaces/ILogger.md#getlevel)

***

### info()

> **info**(...`data`): `void`

#### Parameters

##### data

...`any`[]

#### Returns

`void`

#### Implementation of

[`ILogger`](reference/interfaces/ILogger.md).[`info`](../interfaces/ILogger.md#info)

***

### log()

> **log**(...`data`): `void`

#### Parameters

##### data

...`any`[]

#### Returns

`void`

#### Implementation of

[`ILogger`](reference/interfaces/ILogger.md).[`log`](../interfaces/ILogger.md#log)

***

### logAtLevel()

> **logAtLevel**(`level`, ...`data`): `void`

#### Parameters

##### level

`number`

##### data

...`any`[]

#### Returns

`void`

#### Implementation of

[`ILogger`](reference/interfaces/ILogger.md).[`logAtLevel`](../interfaces/ILogger.md#logatlevel)

***

### setImplementation()

> **setImplementation**(`implementation`): `void`

#### Parameters

##### implementation

[`ILoggerImplementation`](reference/interfaces/ILoggerImplementation.md)

#### Returns

`void`

#### Implementation of

[`ILogger`](reference/interfaces/ILogger.md).[`setImplementation`](../interfaces/ILogger.md#setimplementation)

***

### setLevel()

> **setLevel**(`level`): `void`

#### Parameters

##### level

[`LogLevels`](reference/enumerations/LogLevels.md)

#### Returns

`void`

#### Implementation of

[`ILogger`](reference/interfaces/ILogger.md).[`setLevel`](../interfaces/ILogger.md#setlevel)

***

### warn()

> **warn**(...`data`): `void`

#### Parameters

##### data

...`any`[]

#### Returns

`void`

#### Implementation of

[`ILogger`](reference/interfaces/ILogger.md).[`warn`](../interfaces/ILogger.md#warn)
