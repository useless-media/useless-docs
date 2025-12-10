# ILogger

## Extends

- `ILoggerImplementation`

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

`ILoggerImplementation.debug`

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

`ILoggerImplementation.error`

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

`ILoggerImplementation.info`

***

### log()

> **log**(...`data`): `void`

#### Parameters

##### data

...`any`[]

#### Returns

`void`

#### Inherited from

`ILoggerImplementation.log`

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

`ILoggerImplementation`

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

`ILoggerImplementation.warn`
