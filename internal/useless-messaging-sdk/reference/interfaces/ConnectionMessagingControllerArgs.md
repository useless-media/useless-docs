# ConnectionMessagingControllerArgs<TConnectionEventList, TConnectionArgs, TConnection>

## Extends

- [`MessagingControllerArgs`](reference/interfaces/MessagingControllerArgs.md)

## Type Parameters

### TConnectionEventList

`TConnectionEventList` *extends* [`UselessMessagingConnectionEventList`](reference/interfaces/UselessMessagingConnectionEventList.md) = [`UselessMessagingConnectionEventList`](UselessMessagingConnectionEventList.md)

### TConnectionArgs

`TConnectionArgs` *extends* [`UselessMessagingConnectionArgs`](reference/interfaces/UselessMessagingConnectionArgs.md) = [`UselessMessagingConnectionArgs`](UselessMessagingConnectionArgs.md)

### TConnection

`TConnection` *extends* [`UselessMessagingConnection`](reference/classes/UselessMessagingConnection.md)<`TConnectionEventList`, `TConnectionArgs`> = [`UselessMessagingConnection`](../classes/UselessMessagingConnection.md)<`TConnectionEventList`, `TConnectionArgs`>

## Properties

### configuration?

> **configuration**?: `Partial`<[`MessagingControllerConfiguration`](reference/interfaces/MessagingControllerConfiguration.md)>

#### Inherited from

[`MessagingControllerArgs`](reference/interfaces/MessagingControllerArgs.md).[`configuration`](MessagingControllerArgs.md#configuration)

***

### Connection()?

> **Connection**?: (`args?`, `emitterArgs?`) => `TConnection`

#### Parameters

##### args?

`TConnectionArgs`

##### emitterArgs?

`TEmitterOptions`

#### Returns

`TConnection`

***

### logger?

> **logger**?: `ILogger`

#### Inherited from

[`MessagingControllerArgs`](reference/interfaces/MessagingControllerArgs.md).[`logger`](MessagingControllerArgs.md#logger)

***

### logLevel?

> **logLevel**?: `LogLevels`

#### Inherited from

[`MessagingControllerArgs`](reference/interfaces/MessagingControllerArgs.md).[`logLevel`](MessagingControllerArgs.md#loglevel)

***

### sendMessage?

> **sendMessage**?: [`IAnyMessageMessagingSendMessage`](reference/interfaces/IAnyMessageMessagingSendMessage.md)<`CommunicationChannelMessage`>

#### Inherited from

[`MessagingControllerArgs`](reference/interfaces/MessagingControllerArgs.md).[`sendMessage`](MessagingControllerArgs.md#sendmessage)

***

### url?

> **url**?: `string`

***

### userAgent?

> **userAgent**?: `string`
