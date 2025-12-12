# ILogger

## Extends

- [`ILoggerImplementation`](reference/interfaces/ILoggerImplementation.md)

## Extended by

- [`IAsyncLogger`](reference/interfaces/IAsyncLogger.md)

## Methods

### debug()

> **debug**(...`data`): `void`

#### Parameters

##### data

...`any`[]

#### Returns

`void`

#### Inherited from

[`ILoggerImplementation`](reference/interfaces/ILoggerImplementation.md).[`debug`](ILoggerImplementation.md#debug)

***

### debugVerbose()

> **debugVerbose**(...`data`): `void`

#### Parameters

##### data

...`any`[]

#### Returns

`void`

***

### error()

> **error**(...`data`): `void`

#### Parameters

##### data

...`any`[]

#### Returns

`void`

#### Inherited from

[`ILoggerImplementation`](reference/interfaces/ILoggerImplementation.md).[`error`](ILoggerImplementation.md#error)

***

### getLevel()

> **getLevel**(): [`LogLevels`](reference/enumerations/LogLevels.md)

#### Returns

[`LogLevels`](reference/enumerations/LogLevels.md)

***

### info()

> **info**(...`data`): `void`

#### Parameters

##### data

...`any`[]

#### Returns

`void`

#### Inherited from

[`ILoggerImplementation`](reference/interfaces/ILoggerImplementation.md).[`info`](ILoggerImplementation.md#info)

***

### log()

> **log**(...`data`): `void`

#### Parameters

##### data

...`any`[]

#### Returns

`void`

#### Inherited from

[`ILoggerImplementation`](reference/interfaces/ILoggerImplementation.md).[`log`](ILoggerImplementation.md#log)

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

***

### setImplementation()

> **setImplementation**(`implementation`): `void`

#### Parameters

##### implementation

[`ILoggerImplementation`](reference/interfaces/ILoggerImplementation.md)

#### Returns

`void`

***

### setLevel()

> **setLevel**(`level`): `void`

#### Parameters

##### level

[`LogLevels`](reference/enumerations/LogLevels.md)

#### Returns

`void`

***

### warn()

> **warn**(...`data`): `void`

#### Parameters

##### data

...`any`[]

#### Returns

`void`

#### Inherited from

[`ILoggerImplementation`](reference/interfaces/ILoggerImplementation.md).[`warn`](ILoggerImplementation.md#warn)
