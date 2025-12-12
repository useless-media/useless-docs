# NoOpLogger

## Extends

- [`Logger`](reference/classes/Logger.md)

## Constructors

### Constructor

> **new NoOpLogger**(): `NoOpLogger`

#### Returns

`NoOpLogger`

#### Overrides

[`Logger`](reference/classes/Logger.md).[`constructor`](Logger.md#constructor)

## Properties

### implementation

> `protected` **implementation**: [`ILoggerImplementation`](reference/interfaces/ILoggerImplementation.md)

#### Inherited from

[`Logger`](reference/classes/Logger.md).[`implementation`](Logger.md#implementation)

***

### level

> `protected` **level**: [`LogLevels`](reference/enumerations/LogLevels.md)

#### Inherited from

[`Logger`](reference/classes/Logger.md).[`level`](Logger.md#level)

***

### name?

> `protected` **name**?: `string`

#### Inherited from

[`Logger`](reference/classes/Logger.md).[`name`](Logger.md#name)

## Methods

### debug()

> **debug**(...`data`): `void`

#### Parameters

##### data

...`any`[]

#### Returns

`void`

#### Inherited from

[`Logger`](reference/classes/Logger.md).[`debug`](Logger.md#debug)

***

### debugVerbose()

> **debugVerbose**(...`data`): `void`

#### Parameters

##### data

...`any`[]

#### Returns

`void`

#### Inherited from

[`Logger`](reference/classes/Logger.md).[`debugVerbose`](Logger.md#debugverbose)

***

### error()

> **error**(...`data`): `void`

#### Parameters

##### data

...`any`[]

#### Returns

`void`

#### Inherited from

[`Logger`](reference/classes/Logger.md).[`error`](Logger.md#error)

***

### getLevel()

> **getLevel**(): [`LogLevels`](reference/enumerations/LogLevels.md)

#### Returns

[`LogLevels`](reference/enumerations/LogLevels.md)

#### Inherited from

[`Logger`](reference/classes/Logger.md).[`getLevel`](Logger.md#getlevel)

***

### info()

> **info**(...`data`): `void`

#### Parameters

##### data

...`any`[]

#### Returns

`void`

#### Inherited from

[`Logger`](reference/classes/Logger.md).[`info`](Logger.md#info)

***

### log()

> **log**(...`data`): `void`

#### Parameters

##### data

...`any`[]

#### Returns

`void`

#### Inherited from

[`Logger`](reference/classes/Logger.md).[`log`](Logger.md#log)

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

#### Inherited from

[`Logger`](reference/classes/Logger.md).[`logAtLevel`](Logger.md#logatlevel)

***

### setImplementation()

> **setImplementation**(`implementation`): `void`

#### Parameters

##### implementation

[`ILoggerImplementation`](reference/interfaces/ILoggerImplementation.md)

#### Returns

`void`

#### Inherited from

[`Logger`](reference/classes/Logger.md).[`setImplementation`](Logger.md#setimplementation)

***

### setLevel()

> **setLevel**(`level`): `void`

#### Parameters

##### level

[`LogLevels`](reference/enumerations/LogLevels.md)

#### Returns

`void`

#### Inherited from

[`Logger`](reference/classes/Logger.md).[`setLevel`](Logger.md#setlevel)

***

### warn()

> **warn**(...`data`): `void`

#### Parameters

##### data

...`any`[]

#### Returns

`void`

#### Inherited from

[`Logger`](reference/classes/Logger.md).[`warn`](Logger.md#warn)
