# UselessDebugCommunicationHandler

## Constructors

### Constructor

> **new UselessDebugCommunicationHandler**(`args`): `UselessDebugCommunicationHandler`

#### Parameters

##### args

[`UselessDebugCommunicationHandlerArgs`](reference/interfaces/UselessDebugCommunicationHandlerArgs.md)

#### Returns

`UselessDebugCommunicationHandler`

## Properties

### consoleInterceptor?

> `protected` **consoleInterceptor**?: [`UselessConsoleInterceptor`](reference/classes/UselessConsoleInterceptor.md)

***

### describer

> `protected` **describer**: [`UselessRemoteObjectDescriber`](reference/classes/UselessRemoteObjectDescriber.md)

***

### sendMessage

> **sendMessage**: `IMessagingSendMessage`

## Methods

### describe()

> **describe**(`name`, `object`, `maxLevel?`): `Promise`<`void`>

#### Parameters

##### name

`string`

##### object

`Record`<`string`, `any`>

##### maxLevel?

`number`

#### Returns

`Promise`<`void`>

***

### handleMessage()

> **handleMessage**(`message`): `Promise`<`boolean`>

#### Parameters

##### message

`AnyMessage`

#### Returns

`Promise`<`boolean`>
