# UselessWebSocketSender<TEventList, TConnectionEventList, TConnection>

## Extends

- [`UselessConnectionSender`](UselessConnectionSender.md)<`TEventList`, `TConnectionEventList`, [`UselessWebSocketMessagingConnectionArgs`](reference/interfaces/UselessWebSocketMessagingConnectionArgs.md), `TConnection`>

## Type Parameters

### TEventList

`TEventList` *extends* [`UselessWebSocketSenderEventList`](reference/interfaces/UselessWebSocketSenderEventList.md) = [`UselessWebSocketSenderEventList`](../interfaces/UselessWebSocketSenderEventList.md)

### TConnectionEventList

`TConnectionEventList` *extends* [`UselessSenderWebSocketConnectionEventList`](reference/interfaces/UselessSenderWebSocketConnectionEventList.md) = [`UselessSenderWebSocketConnectionEventList`](../interfaces/UselessSenderWebSocketConnectionEventList.md)

### TConnection

`TConnection` *extends* [`UselessSenderWebSocketConnection`](reference/classes/UselessSenderWebSocketConnection.md)<`TConnectionEventList`> = [`UselessSenderWebSocketConnection`](UselessSenderWebSocketConnection.md)<`TConnectionEventList`>

## Constructors

### Constructor

> **new UselessWebSocketSender**<`TEventList`, `TConnectionEventList`, `TConnection`>(`args`, `emitterArgs?`): `UselessWebSocketSender`<`TEventList`, `TConnectionEventList`, `TConnection`>

#### Parameters

##### args

[`UselessWebSocketSenderArgs`](reference/interfaces/UselessWebSocketSenderArgs.md)<`TConnectionEventList`, `TConnection`>

##### emitterArgs?

`TEmitterOptions`

#### Returns

`UselessWebSocketSender`<`TEventList`, `TConnectionEventList`, `TConnection`>

#### Overrides

[`UselessConnectionSender`](reference/classes/UselessConnectionSender.md).[`constructor`](UselessConnectionSender.md#constructor)

## Properties

### configuration

> `protected` **configuration**: `Required`<[`UselessWebSocketSenderConfiguration`](reference/interfaces/UselessWebSocketSenderConfiguration.md)>

#### Overrides

[`UselessConnectionSender`](reference/classes/UselessConnectionSender.md).[`configuration`](UselessConnectionSender.md#configuration)

***

### connection?

> `protected` **connection**?: `TConnection`

#### Inherited from

[`UselessConnectionSender`](reference/classes/UselessConnectionSender.md).[`connection`](UselessConnectionSender.md#connection)

***

### destroyed

> `protected` **destroyed**: `boolean`

#### Inherited from

[`UselessConnectionSender`](reference/classes/UselessConnectionSender.md).[`destroyed`](UselessConnectionSender.md#destroyed)

***

### isConnected

> **isConnected**: `boolean` = `false`

#### Inherited from

[`UselessConnectionSender`](reference/classes/UselessConnectionSender.md).[`isConnected`](UselessConnectionSender.md#isconnected)

***

### isIdentified

> **isIdentified**: `boolean` = `false`

#### Inherited from

[`UselessConnectionSender`](reference/classes/UselessConnectionSender.md).[`isIdentified`](UselessConnectionSender.md#isidentified)

***

### senderInformation

> `protected` **senderInformation**: `Optional`<[`SenderInformation`](reference/interfaces/SenderInformation.md), `"id"`>

#### Inherited from

[`UselessConnectionSender`](reference/classes/UselessConnectionSender.md).[`senderInformation`](UselessConnectionSender.md#senderinformation)

## Accessors

### id

#### Get Signature

> **get** **id**(): `string` | `undefined`

##### Returns

`string` | `undefined`

#### Inherited from

[`UselessConnectionSender`](reference/classes/UselessConnectionSender.md).[`id`](UselessConnectionSender.md#id)

## Methods

### addEventListener()

> **addEventListener**<`K`>(`type`, `subscriber`): `Emitter`<`TEventList`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

`Emitter`<`TEventList`>

#### Inherited from

[`UselessConnectionSender`](reference/classes/UselessConnectionSender.md).[`addEventListener`](UselessConnectionSender.md#addeventlistener)

***

### configure()

> **configure**(`configuration`): `this`

#### Parameters

##### configuration

`Partial`<[`UselessSenderConfiguration`](reference/interfaces/UselessSenderConfiguration.md)>

#### Returns

`this`

#### Inherited from

[`UselessConnectionSender`](reference/classes/UselessConnectionSender.md).[`configure`](UselessConnectionSender.md#configure)

***

### connect()

> **connect**(`args?`, `emitterArgs?`): `void`

#### Parameters

##### args?

[`UselessConnectionSenderArgs`](reference/interfaces/UselessConnectionSenderArgs.md)<`TConnectionEventList`, [`UselessWebSocketMessagingConnectionArgs`](../interfaces/UselessWebSocketMessagingConnectionArgs.md), `TConnection`>

##### emitterArgs?

`TEmitterOptions`

#### Returns

`void`

#### Inherited from

[`UselessConnectionSender`](reference/classes/UselessConnectionSender.md).[`connect`](UselessConnectionSender.md#connect)

***

### connected()

> **connected**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Inherited from

[`UselessConnectionSender`](reference/classes/UselessConnectionSender.md).[`connected`](UselessConnectionSender.md#connected)

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[`UselessConnectionSender`](reference/classes/UselessConnectionSender.md).[`destroy`](UselessConnectionSender.md#destroy)

***

### emit()

> **emit**<`K`>(`type`, `event?`): `Emitter`<`TEventList`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type

`K`

##### event?

`Optional`<`TEventList`[`K`], `"type"`>

#### Returns

`Emitter`<`TEventList`>

#### Inherited from

[`UselessConnectionSender`](reference/classes/UselessConnectionSender.md).[`emit`](UselessConnectionSender.md#emit)

***

### emitAsync()

> **emitAsync**<`K`>(`type`, `event?`): `Emitter`<`TEventList`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type

`K`

##### event?

`Optional`<`TEventList`[`K`], `"type"`>

#### Returns

`Emitter`<`TEventList`>

#### Inherited from

[`UselessConnectionSender`](reference/classes/UselessConnectionSender.md).[`emitAsync`](UselessConnectionSender.md#emitasync)

***

### ensureNotDestroyed()

> `protected` **ensureNotDestroyed**(`subscriber`): (...`args`) => `void`

#### Parameters

##### subscriber

`TSubscriber`

#### Returns

> (...`args`): `void`

##### Parameters

###### args

...`any`[]

##### Returns

`void`

#### Inherited from

[`UselessConnectionSender`](reference/classes/UselessConnectionSender.md).[`ensureNotDestroyed`](UselessConnectionSender.md#ensurenotdestroyed)

***

### handleConnected()

> **handleConnected**(`sendMessage?`, `sendAnyMessage?`): `Promise`<`void`>

#### Parameters

##### sendMessage?

[`IMessagingSendMessage`](reference/interfaces/IMessagingSendMessage.md)<[`UselessMessage`](UselessMessage.md)>

##### sendAnyMessage?

[`IAnyMessageMessagingSendMessage`](reference/interfaces/IAnyMessageMessagingSendMessage.md)<`string` | `AnyMessage` | [`UselessMessage`](UselessMessage.md)>

#### Returns

`Promise`<`void`>

#### Inherited from

[`UselessConnectionSender`](reference/classes/UselessConnectionSender.md).[`handleConnected`](UselessConnectionSender.md#handleconnected)

***

### handleDisconnected()

> **handleDisconnected**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Inherited from

[`UselessConnectionSender`](reference/classes/UselessConnectionSender.md).[`handleDisconnected`](UselessConnectionSender.md#handledisconnected)

***

### identified()

> **identified**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Inherited from

[`UselessConnectionSender`](reference/classes/UselessConnectionSender.md).[`identified`](UselessConnectionSender.md#identified)

***

### off()

> **off**<`K`>(`type?`, `subscriber?`): `Emitter`<`TEventList`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type?

`K`

##### subscriber?

(`e`) => `void`

#### Returns

`Emitter`<`TEventList`>

#### Inherited from

[`UselessConnectionSender`](reference/classes/UselessConnectionSender.md).[`off`](UselessConnectionSender.md#off)

***

### on()

> **on**<`K`>(`type`, `subscriber`): `Emitter`<`TEventList`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

`Emitter`<`TEventList`>

#### Inherited from

[`UselessConnectionSender`](reference/classes/UselessConnectionSender.md).[`on`](UselessConnectionSender.md#on)

***

### once()

> **once**<`K`>(`type`, `subscriber`): `Emitter`<`TEventList`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

`Emitter`<`TEventList`>

#### Inherited from

[`UselessConnectionSender`](reference/classes/UselessConnectionSender.md).[`once`](UselessConnectionSender.md#once)

***

### receiveMessage()

> **receiveMessage**<`K`>(`message`): `Promise`<`void`>

#### Type Parameters

##### K

`K` *extends* keyof [`UselessSenderEventList`](reference/interfaces/UselessSenderEventList.md)

#### Parameters

##### message

[`UselessSenderEventList`](reference/interfaces/UselessSenderEventList.md)[`K`]

#### Returns

`Promise`<`void`>

#### Inherited from

[`UselessConnectionSender`](reference/classes/UselessConnectionSender.md).[`receiveMessage`](UselessConnectionSender.md#receivemessage)

***

### removeEventListener()

> **removeEventListener**<`K`>(`type?`, `subscriber?`): `Emitter`<`TEventList`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type?

`K`

##### subscriber?

(`e`) => `void`

#### Returns

`Emitter`<`TEventList`>

#### Inherited from

[`UselessConnectionSender`](reference/classes/UselessConnectionSender.md).[`removeEventListener`](UselessConnectionSender.md#removeeventlistener)

***

### sendAnyMessage()

> **sendAnyMessage**(`message`): `Promise`<`void`>

#### Parameters

##### message

`string` | `AnyMessage`

#### Returns

`Promise`<`void`>

#### Inherited from

[`UselessConnectionSender`](reference/classes/UselessConnectionSender.md).[`sendAnyMessage`](UselessConnectionSender.md#sendanymessage)

***

### sendMessage()

> **sendMessage**(`message`): `Promise`<`void`>

#### Parameters

##### message

[`UselessMessage`](reference/classes/UselessMessage.md)

#### Returns

`Promise`<`void`>

#### Inherited from

[`UselessConnectionSender`](reference/classes/UselessConnectionSender.md).[`sendMessage`](UselessConnectionSender.md#sendmessage)

***

### setConnection()

> **setConnection**(`connection?`): `void`

#### Parameters

##### connection?

`TConnection`

#### Returns

`void`

#### Inherited from

[`UselessConnectionSender`](reference/classes/UselessConnectionSender.md).[`setConnection`](UselessConnectionSender.md#setconnection)

***

### setDebug()

> **setDebug**(`value`): `void`

#### Parameters

##### value

`boolean`

#### Returns

`void`

#### Inherited from

[`UselessConnectionSender`](reference/classes/UselessConnectionSender.md).[`setDebug`](UselessConnectionSender.md#setdebug)

***

### setSenderInformation()

> **setSenderInformation**(`senderInformation`): `void`

#### Parameters

##### senderInformation

[`SenderInformation`](reference/interfaces/SenderInformation.md)

#### Returns

`void`

#### Inherited from

[`UselessConnectionSender`](reference/classes/UselessConnectionSender.md).[`setSenderInformation`](UselessConnectionSender.md#setsenderinformation)

***

### setSendMessage()

> **setSendMessage**(`sendMessage?`, `sendAnyMessage?`): `Promise`<`void`>

#### Parameters

##### sendMessage?

[`IMessagingSendMessage`](reference/interfaces/IMessagingSendMessage.md)<[`UselessMessage`](UselessMessage.md)>

##### sendAnyMessage?

[`IAnyMessageMessagingSendMessage`](reference/interfaces/IAnyMessageMessagingSendMessage.md)<`string` | `AnyMessage` | [`UselessMessage`](UselessMessage.md)>

#### Returns

`Promise`<`void`>

#### Inherited from

[`UselessConnectionSender`](reference/classes/UselessConnectionSender.md).[`setSendMessage`](UselessConnectionSender.md#setsendmessage)
