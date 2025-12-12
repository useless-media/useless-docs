# UselessWebSocketSenderArgs<TConnectionEventList, TConnection>

## Extends

- `Omit`<[`UselessConnectionSenderArgs`](reference/interfaces/UselessConnectionSenderArgs.md)<`TConnectionEventList`, [`UselessWebSocketMessagingConnectionArgs`](UselessWebSocketMessagingConnectionArgs.md), `TConnection`>, `"Connection"`>

## Type Parameters

### TConnectionEventList

`TConnectionEventList` *extends* [`UselessSenderWebSocketConnectionEventList`](reference/interfaces/UselessSenderWebSocketConnectionEventList.md) = [`UselessSenderWebSocketConnectionEventList`](UselessSenderWebSocketConnectionEventList.md)

### TConnection

`TConnection` *extends* [`UselessSenderWebSocketConnection`](reference/classes/UselessSenderWebSocketConnection.md)<`TConnectionEventList`> = [`UselessSenderWebSocketConnection`](../classes/UselessSenderWebSocketConnection.md)<`TConnectionEventList`>

## Properties

### configuration?

> **configuration**?: `Partial`<[`UselessWebSocketSenderConfiguration`](reference/interfaces/UselessWebSocketSenderConfiguration.md)>

#### Overrides

[`UselessConnectionSenderArgs`](reference/interfaces/UselessConnectionSenderArgs.md).[`configuration`](UselessConnectionSenderArgs.md#configuration)

***

### Connection()?

> **Connection**?: (`args?`, `emitterArgs?`) => `TConnection`

#### Parameters

##### args?

[`UselessWebSocketMessagingConnectionArgs`](reference/interfaces/UselessWebSocketMessagingConnectionArgs.md)

##### emitterArgs?

`TEmitterOptions`

#### Returns

`TConnection`

***

### sendAnyMessage?

> **sendAnyMessage**?: [`IAnyMessageMessagingSendMessage`](IAnyMessageMessagingSendMessage.md)<`string` | `AnyMessage` | [`UselessMessage`](reference/classes/UselessMessage.md)>

#### Inherited from

[`UselessConnectionSenderArgs`](reference/interfaces/UselessConnectionSenderArgs.md).[`sendAnyMessage`](UselessConnectionSenderArgs.md#sendanymessage)

***

### senderInformation?

> **senderInformation**?: `Partial`<[`SenderInformation`](reference/interfaces/SenderInformation.md)>

#### Inherited from

`Omit.senderInformation`

***

### sendMessage?

> **sendMessage**?: [`IMessagingSendMessage`](IMessagingSendMessage.md)<[`UselessMessage`](reference/classes/UselessMessage.md)>

#### Inherited from

[`UselessConnectionSenderArgs`](reference/interfaces/UselessConnectionSenderArgs.md).[`sendMessage`](UselessConnectionSenderArgs.md#sendmessage)

***

### url

> **url**: `string`

#### Overrides

`Omit.url`

***

### userAgent?

> **userAgent**?: `string`

#### Inherited from

`Omit.userAgent`
