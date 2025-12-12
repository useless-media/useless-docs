# UselessDebugging

## Constructors

### Constructor

> **new UselessDebugging**(`args?`): `UselessDebugging`

#### Parameters

##### args?

[`UselessDebuggingArgs`](reference/interfaces/UselessDebuggingArgs.md)

#### Returns

`UselessDebugging`

## Accessors

### consoleInterceptor

#### Get Signature

> **get** **consoleInterceptor**(): [`UselessConsoleInterceptor`](reference/classes/UselessConsoleInterceptor.md) | `undefined`

##### Returns

[`UselessConsoleInterceptor`](reference/classes/UselessConsoleInterceptor.md) | `undefined`

***

### describer

#### Get Signature

> **get** **describer**(): [`UselessRemoteObjectDescriber`](reference/classes/UselessRemoteObjectDescriber.md) | `undefined`

##### Returns

[`UselessRemoteObjectDescriber`](reference/classes/UselessRemoteObjectDescriber.md) | `undefined`

***

### sender

#### Get Signature

> **get** **sender**(): `UselessConnectionSender`

##### Returns

`UselessConnectionSender`

## Methods

### createDescriber()

> **createDescriber**(): [`UselessRemoteObjectDescriber`](reference/classes/UselessRemoteObjectDescriber.md)

#### Returns

[`UselessRemoteObjectDescriber`](reference/classes/UselessRemoteObjectDescriber.md)

***

### initialize()

> **initialize**(`args?`): `Promise`<`void`>

#### Parameters

##### args?

[`UselessDebuggingInitializeArgs`](reference/interfaces/UselessDebuggingInitializeArgs.md)

#### Returns

`Promise`<`void`>

***

### receiveMessage()

> **receiveMessage**(`message`): `Promise`<`void`>

#### Parameters

##### message

`string` | `UselessMessage`

#### Returns

`Promise`<`void`>

***

### registerContext()

> **registerContext**(`name`, `context`, `describe`): `void`

#### Parameters

##### name

`string`

##### context

`Record`<`string`, `any`>

##### describe

`boolean` = `true`

#### Returns

`void`

***

### restoreConsole()

> **restoreConsole**(): `void`

#### Returns

`void`

***

### setConnection()

> **setConnection**(`connection?`): `Promise`<`void`>

#### Parameters

##### connection?

`UselessMessagingConnection`<[`UselessDebugSenderConnectionEventList`](reference/interfaces/UselessDebugSenderConnectionEventList.md), `UselessMessagingConnectionArgs`, `UselessMessage`>

#### Returns

`Promise`<`void`>

***

### setSendMessage()

> **setSendMessage**(`sendMessage?`): `Promise`<`void`>

#### Parameters

##### sendMessage?

`IMessagingSendMessage`<`UselessMessage`>

#### Returns

`Promise`<`void`>
