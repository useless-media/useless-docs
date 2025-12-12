# SingletonLogger

## Methods

### contextLog()

> **contextLog**(`type`, `rootContext`, `subContexts`, `contextLogLevel`, `subject`, ...`optionalParams`): `void`

#### Parameters

##### type

`SingletonLoggerLogTypes`

##### rootContext

`string`

##### subContexts

`string`[]

##### contextLogLevel

[`LogLevels`](reference/enumerations/LogLevels.md) | `undefined`

##### subject

`string`

##### optionalParams

...`any`[]

#### Returns

`void`

***

### getLogLevel()

> **getLogLevel**(): [`LogLevels`](reference/enumerations/LogLevels.md)

#### Returns

[`LogLevels`](reference/enumerations/LogLevels.md)

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

### createLoggerContext()

> `static` **createLoggerContext**(`contextName`): [`LoggerInstance`](reference/classes/LoggerInstance.md)

#### Parameters

##### contextName

`string`

#### Returns

[`LoggerInstance`](reference/classes/LoggerInstance.md)

***

### getInstance()

> `static` **getInstance**(): `SingletonLogger`

#### Returns

`SingletonLogger`

***

### getLogLevel()

> `static` **getLogLevel**(): `number`

#### Returns

`number`

***

### setLoggerImplementation()

> `static` **setLoggerImplementation**(`implementation`): `void`

#### Parameters

##### implementation

[`ITaggedLogger`](reference/interfaces/ITaggedLogger.md)

#### Returns

`void`

***

### setLogLevel()

> `static` **setLogLevel**(`logLevel`): `void`

#### Parameters

##### logLevel

[`LogLevels`](reference/enumerations/LogLevels.md)

#### Returns

`void`
