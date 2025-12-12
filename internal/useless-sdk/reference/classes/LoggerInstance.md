# LoggerInstance

## Implements

- [`ITaggedLogger`](reference/interfaces/ITaggedLogger.md)

## Constructors

### Constructor

> **new LoggerInstance**(`tag`): `LoggerInstance`

#### Parameters

##### tag

`string`

#### Returns

`LoggerInstance`

## Properties

### debugMode

> **debugMode**: `boolean` = `false`

***

### localLogLevel

> **localLogLevel**: [`LogLevels`](reference/enumerations/LogLevels.md) | `undefined`

***

### loggingTag

> **loggingTag**: `string`

***

### tagsContext

> **tagsContext**: `string`[] = `[]`

## Methods

### debug()

> **debug**(`tag`, ...`optionalParams`): `void`

#### Parameters

##### tag

`string`

##### optionalParams

...`any`[]

#### Returns

`void`

#### Implementation of

[`ITaggedLogger`](reference/interfaces/ITaggedLogger.md).[`debug`](../interfaces/ITaggedLogger.md#debug)

***

### decorate()

> **decorate**(`loggerImp`): `void`

#### Parameters

##### loggerImp

[`ITaggedLogger`](reference/interfaces/ITaggedLogger.md)

#### Returns

`void`

***

### error()

> **error**(`tag`, ...`optionalParams`): `void`

#### Parameters

##### tag

`string`

##### optionalParams

...`any`[]

#### Returns

`void`

#### Implementation of

[`ITaggedLogger`](reference/interfaces/ITaggedLogger.md).[`error`](../interfaces/ITaggedLogger.md#error)

***

### info()

> **info**(`tag`, ...`optionalParams`): `void`

#### Parameters

##### tag

`string`

##### optionalParams

...`any`[]

#### Returns

`void`

#### Implementation of

[`ITaggedLogger`](reference/interfaces/ITaggedLogger.md).[`info`](../interfaces/ITaggedLogger.md#info)

***

### log()

> **log**(`tag`, ...`optionalParams`): `void`

#### Parameters

##### tag

`string`

##### optionalParams

...`any`[]

#### Returns

`void`

#### Implementation of

[`ITaggedLogger`](reference/interfaces/ITaggedLogger.md).[`log`](../interfaces/ITaggedLogger.md#log)

***

### registerSubContext()

> **registerSubContext**(`instance`): `void`

#### Parameters

##### instance

`LoggerInstance`

#### Returns

`void`

***

### setLoggerImplementation()

> **setLoggerImplementation**(`implementation`): `void`

#### Parameters

##### implementation

[`ITaggedLogger`](reference/interfaces/ITaggedLogger.md)

#### Returns

`void`

***

### setLogLevel()

> **setLogLevel**(`logLevel`): `void`

#### Parameters

##### logLevel

[`LogLevels`](reference/enumerations/LogLevels.md)

#### Returns

`void`

***

### warn()

> **warn**(`tag`, ...`optionalParams`): `void`

#### Parameters

##### tag

`string`

##### optionalParams

...`any`[]

#### Returns

`void`

#### Implementation of

[`ITaggedLogger`](reference/interfaces/ITaggedLogger.md).[`warn`](../interfaces/ITaggedLogger.md#warn)
