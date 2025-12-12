# UselessConnectionSenderArgs<TConnectionEventList, TConnectionArgs, TConnection>

## Extends

- [`UselessSenderArgs`](reference/interfaces/UselessSenderArgs.md)

## Type Parameters

### TConnectionEventList

`TConnectionEventList` *extends* [`UselessMessagingConnectionEventList`](reference/interfaces/UselessMessagingConnectionEventList.md) = [`UselessMessagingConnectionEventList`](UselessMessagingConnectionEventList.md)

### TConnectionArgs

`TConnectionArgs` *extends* [`UselessMessagingConnectionArgs`](reference/interfaces/UselessMessagingConnectionArgs.md) = [`UselessMessagingConnectionArgs`](UselessMessagingConnectionArgs.md)

### TConnection

`TConnection` *extends* [`UselessMessagingConnection`](reference/classes/UselessMessagingConnection.md)<`TConnectionEventList`, `TConnectionArgs`> = [`UselessMessagingConnection`](../classes/UselessMessagingConnection.md)<`TConnectionEventList`, `TConnectionArgs`>

## Properties

### configuration?

> **configuration**?: `Partial`<[`UselessSenderConfiguration`](reference/interfaces/UselessSenderConfiguration.md)>

#### Inherited from

[`UselessSenderArgs`](reference/interfaces/UselessSenderArgs.md).[`configuration`](UselessSenderArgs.md#configuration)

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

### sendAnyMessage?

> **sendAnyMessage**?: [`IAnyMessageMessagingSendMessage`](IAnyMessageMessagingSendMessage.md)<`string` | `AnyMessage` | [`UselessMessage`](reference/classes/UselessMessage.md)>

#### Inherited from

[`UselessSenderArgs`](reference/interfaces/UselessSenderArgs.md).[`sendAnyMessage`](UselessSenderArgs.md#sendanymessage)

***

### senderInformation?

> **senderInformation**?: `Partial`<[`SenderInformation`](reference/interfaces/SenderInformation.md)>

#### Inherited from

[`UselessSenderArgs`](reference/interfaces/UselessSenderArgs.md).[`senderInformation`](UselessSenderArgs.md#senderinformation)

***

### sendMessage?

> **sendMessage**?: [`IMessagingSendMessage`](IMessagingSendMessage.md)<[`UselessMessage`](reference/classes/UselessMessage.md)>

#### Inherited from

[`UselessSenderArgs`](reference/interfaces/UselessSenderArgs.md).[`sendMessage`](UselessSenderArgs.md#sendmessage)

***

### url?

> **url**?: `string`

***

### userAgent?

> **userAgent**?: `string`
