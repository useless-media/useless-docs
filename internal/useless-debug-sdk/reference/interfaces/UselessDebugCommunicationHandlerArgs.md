# UselessDebugCommunicationHandlerArgs

## Properties

### consoleInterceptor?

> **consoleInterceptor**?: [`UselessConsoleInterceptor`](reference/classes/UselessConsoleInterceptor.md)

***

### describer

> **describer**: [`UselessRemoteObjectDescriber`](reference/classes/UselessRemoteObjectDescriber.md)

***

### handleCustomMessage()?

> **handleCustomMessage**?: (`message`) => `Promise`<`boolean`>

#### Parameters

##### message

`AnyMessage`

#### Returns

`Promise`<`boolean`>

***

### handleUselessMessage()?

> **handleUselessMessage**?: (`message`) => `Promise`<`boolean`>

#### Parameters

##### message

`UselessMessage`

#### Returns

`Promise`<`boolean`>

***

### sendMessage

> **sendMessage**: `IMessagingSendMessage`
