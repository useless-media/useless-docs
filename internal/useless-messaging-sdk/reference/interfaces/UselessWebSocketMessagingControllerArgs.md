# UselessWebSocketMessagingControllerArgs<TConnectionEventList, TConnection>

## Extends

- `Omit`<[`ConnectionMessagingControllerArgs`](reference/interfaces/ConnectionMessagingControllerArgs.md)<`TConnectionEventList`, [`UselessWebSocketMessagingConnectionArgs`](UselessWebSocketMessagingConnectionArgs.md), `TConnection`>, `"sendMessage"`>

## Type Parameters

### TConnectionEventList

`TConnectionEventList` *extends* [`UselessControllerWebSocketConnectionEventList`](reference/interfaces/UselessControllerWebSocketConnectionEventList.md) = [`UselessControllerWebSocketConnectionEventList`](UselessControllerWebSocketConnectionEventList.md)

### TConnection

`TConnection` *extends* [`UselessControllerWebSocketConnection`](reference/classes/UselessControllerWebSocketConnection.md)<`TConnectionEventList`> = [`UselessControllerWebSocketConnection`](../classes/UselessControllerWebSocketConnection.md)<`TConnectionEventList`>

## Properties

### configuration?

> **configuration**?: `Partial`<[`MessagingControllerConfiguration`](reference/interfaces/MessagingControllerConfiguration.md)>

#### Inherited from

[`ConnectionMessagingControllerArgs`](reference/interfaces/ConnectionMessagingControllerArgs.md).[`configuration`](ConnectionMessagingControllerArgs.md#configuration)

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

#### Overrides

`Omit.Connection`

***

### logger?

> **logger**?: `ILogger`

#### Inherited from

[`ConnectionMessagingControllerArgs`](reference/interfaces/ConnectionMessagingControllerArgs.md).[`logger`](ConnectionMessagingControllerArgs.md#logger)

***

### logLevel?

> **logLevel**?: `LogLevels`

#### Inherited from

[`ConnectionMessagingControllerArgs`](reference/interfaces/ConnectionMessagingControllerArgs.md).[`logLevel`](ConnectionMessagingControllerArgs.md#loglevel)

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
