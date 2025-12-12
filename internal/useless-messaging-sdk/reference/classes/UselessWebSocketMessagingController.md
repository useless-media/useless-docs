# UselessWebSocketMessagingController<TEventList, TConnectionEventList, TConnection>

## Extends

- [`ConnectionMessagingController`](ConnectionMessagingController.md)<`TEventList`, `TConnectionEventList`, [`UselessWebSocketMessagingConnectionArgs`](reference/interfaces/UselessWebSocketMessagingConnectionArgs.md), `TConnection`>

## Type Parameters

### TEventList

`TEventList` *extends* [`UselessWebSocketMessagingControllerEventList`](reference/interfaces/UselessWebSocketMessagingControllerEventList.md) = [`UselessWebSocketMessagingControllerEventList`](../interfaces/UselessWebSocketMessagingControllerEventList.md)

### TConnectionEventList

`TConnectionEventList` *extends* [`UselessControllerWebSocketConnectionEventList`](reference/interfaces/UselessControllerWebSocketConnectionEventList.md) = [`UselessControllerWebSocketConnectionEventList`](../interfaces/UselessControllerWebSocketConnectionEventList.md)

### TConnection

`TConnection` *extends* [`UselessControllerWebSocketConnection`](reference/classes/UselessControllerWebSocketConnection.md)<`TConnectionEventList`> = [`UselessControllerWebSocketConnection`](UselessControllerWebSocketConnection.md)<`TConnectionEventList`>

## Constructors

### Constructor

> **new UselessWebSocketMessagingController**<`TEventList`, `TConnectionEventList`, `TConnection`>(`args`): `UselessWebSocketMessagingController`<`TEventList`, `TConnectionEventList`, `TConnection`>

#### Parameters

##### args

[`UselessWebSocketMessagingControllerArgs`](reference/interfaces/UselessWebSocketMessagingControllerArgs.md)<`TConnectionEventList`, `TConnection`>

#### Returns

`UselessWebSocketMessagingController`<`TEventList`, `TConnectionEventList`, `TConnection`>

#### Overrides

[`ConnectionMessagingController`](reference/classes/ConnectionMessagingController.md).[`constructor`](ConnectionMessagingController.md#constructor)

## Properties

### communicationManager

> `readonly` **communicationManager**: [`CommunicationManager`](reference/classes/CommunicationManager.md)

#### Inherited from

[`ConnectionMessagingController`](reference/classes/ConnectionMessagingController.md).[`communicationManager`](ConnectionMessagingController.md#communicationmanager)

***

### configuration

> `protected` **configuration**: `Required`<[`MessagingControllerConfiguration`](reference/interfaces/MessagingControllerConfiguration.md)>

#### Inherited from

[`ConnectionMessagingController`](reference/classes/ConnectionMessagingController.md).[`configuration`](ConnectionMessagingController.md#configuration)

***

### connection?

> `protected` **connection**?: `TConnection`

#### Inherited from

[`ConnectionMessagingController`](reference/classes/ConnectionMessagingController.md).[`connection`](ConnectionMessagingController.md#connection)

***

### destroyed

> `protected` **destroyed**: `boolean`

#### Inherited from

[`ConnectionMessagingController`](reference/classes/ConnectionMessagingController.md).[`destroyed`](ConnectionMessagingController.md#destroyed)

***

### logger

> `protected` `readonly` **logger**: `ILogger`

#### Inherited from

[`ConnectionMessagingController`](reference/classes/ConnectionMessagingController.md).[`logger`](ConnectionMessagingController.md#logger)

***

### senderManager

> `readonly` **senderManager**: [`SenderManager`](reference/classes/SenderManager.md)

#### Inherited from

[`ConnectionMessagingController`](reference/classes/ConnectionMessagingController.md).[`senderManager`](ConnectionMessagingController.md#sendermanager)

## Accessors

### isConnected

#### Get Signature

> **get** **isConnected**(): `boolean`

##### Returns

`boolean`

#### Inherited from

[`ConnectionMessagingController`](reference/classes/ConnectionMessagingController.md).[`isConnected`](ConnectionMessagingController.md#isconnected)

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

[`ConnectionMessagingController`](reference/classes/ConnectionMessagingController.md).[`addEventListener`](ConnectionMessagingController.md#addeventlistener)

***

### configure()

> **configure**(`configuration`): `this`

#### Parameters

##### configuration

`Partial`<[`MessagingControllerConfiguration`](reference/interfaces/MessagingControllerConfiguration.md)>

#### Returns

`this`

#### Inherited from

[`ConnectionMessagingController`](reference/classes/ConnectionMessagingController.md).[`configure`](ConnectionMessagingController.md#configure)

***

### connect()

> **connect**(`args?`, `emitterArgs?`): `void`

#### Parameters

##### args?

[`ConnectionMessagingControllerArgs`](reference/interfaces/ConnectionMessagingControllerArgs.md)<`TConnectionEventList`, [`UselessWebSocketMessagingConnectionArgs`](../interfaces/UselessWebSocketMessagingConnectionArgs.md), `TConnection`>

##### emitterArgs?

`TEmitterOptions`

#### Returns

`void`

#### Inherited from

[`ConnectionMessagingController`](reference/classes/ConnectionMessagingController.md).[`connect`](ConnectionMessagingController.md#connect)

***

### connected()

> **connected**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Inherited from

[`ConnectionMessagingController`](reference/classes/ConnectionMessagingController.md).[`connected`](ConnectionMessagingController.md#connected)

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[`ConnectionMessagingController`](reference/classes/ConnectionMessagingController.md).[`destroy`](ConnectionMessagingController.md#destroy)

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

[`ConnectionMessagingController`](reference/classes/ConnectionMessagingController.md).[`emit`](ConnectionMessagingController.md#emit)

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

[`ConnectionMessagingController`](reference/classes/ConnectionMessagingController.md).[`emitAsync`](ConnectionMessagingController.md#emitasync)

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

[`ConnectionMessagingController`](reference/classes/ConnectionMessagingController.md).[`ensureNotDestroyed`](ConnectionMessagingController.md#ensurenotdestroyed)

***

### getCommunicationChannel()

> **getCommunicationChannel**(`namespace`): [`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md)<`EmitterEventList`> | `undefined`

CommunicationManager

#### Parameters

##### namespace

`string`

#### Returns

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md)<`EmitterEventList`> | `undefined`

#### Inherited from

[`ConnectionMessagingController`](reference/classes/ConnectionMessagingController.md).[`getCommunicationChannel`](ConnectionMessagingController.md#getcommunicationchannel)

***

### getSender()

> **getSender**(`id?`): [`UselessControllerSender`](reference/classes/UselessControllerSender.md)<`any`> | `undefined`

SenderManager

#### Parameters

##### id?

`string`

#### Returns

[`UselessControllerSender`](reference/classes/UselessControllerSender.md)<`any`> | `undefined`

#### Inherited from

[`ConnectionMessagingController`](reference/classes/ConnectionMessagingController.md).[`getSender`](ConnectionMessagingController.md#getsender)

***

### getSenders()

> **getSenders**(): [`UselessControllerSender`](reference/classes/UselessControllerSender.md)<`any`>[]

#### Returns

[`UselessControllerSender`](reference/classes/UselessControllerSender.md)<`any`>[]

#### Inherited from

[`ConnectionMessagingController`](reference/classes/ConnectionMessagingController.md).[`getSenders`](ConnectionMessagingController.md#getsenders)

***

### handleConnected()

> **handleConnected**(`sendMessage?`): `Promise`<`void`>

#### Parameters

##### sendMessage?

[`IAnyMessageMessagingSendMessage`](reference/interfaces/IAnyMessageMessagingSendMessage.md)<`CommunicationChannelMessage`>

#### Returns

`Promise`<`void`>

#### Inherited from

[`ConnectionMessagingController`](reference/classes/ConnectionMessagingController.md).[`handleConnected`](ConnectionMessagingController.md#handleconnected)

***

### handleDisconnected()

> **handleDisconnected**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Inherited from

[`ConnectionMessagingController`](reference/classes/ConnectionMessagingController.md).[`handleDisconnected`](ConnectionMessagingController.md#handledisconnected)

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

[`ConnectionMessagingController`](reference/classes/ConnectionMessagingController.md).[`off`](ConnectionMessagingController.md#off)

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

[`ConnectionMessagingController`](reference/classes/ConnectionMessagingController.md).[`on`](ConnectionMessagingController.md#on)

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

[`ConnectionMessagingController`](reference/classes/ConnectionMessagingController.md).[`once`](ConnectionMessagingController.md#once)

***

### receiveMessage()

> **receiveMessage**(`message`, `namespace?`): `Promise`<`void`>

#### Parameters

##### message

`string` | `AnyMessage` | [`UselessMessage`](reference/classes/UselessMessage.md)

##### namespace?

`string`

#### Returns

`Promise`<`void`>

#### Inherited from

[`ConnectionMessagingController`](reference/classes/ConnectionMessagingController.md).[`receiveMessage`](ConnectionMessagingController.md#receivemessage)

***

### registerDefaultSenderCommunicationChannel()

> **registerDefaultSenderCommunicationChannel**(`communicationChannel`): `void`

#### Parameters

##### communicationChannel

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md)<`any`>

#### Returns

`void`

#### Inherited from

[`ConnectionMessagingController`](reference/classes/ConnectionMessagingController.md).[`registerDefaultSenderCommunicationChannel`](ConnectionMessagingController.md#registerdefaultsendercommunicationchannel)

***

### registerNamespace()

> **registerNamespace**<`T`>(`namespace`): [`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md)<`T`>

#### Type Parameters

##### T

`T` *extends* `EmitterEventList`

#### Parameters

##### namespace

`string`

#### Returns

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md)<`T`>

#### Inherited from

[`ConnectionMessagingController`](reference/classes/ConnectionMessagingController.md).[`registerNamespace`](ConnectionMessagingController.md#registernamespace)

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

[`ConnectionMessagingController`](reference/classes/ConnectionMessagingController.md).[`removeEventListener`](ConnectionMessagingController.md#removeeventlistener)

***

### senderConnected()

> **senderConnected**(`senderId`, `userAgent`): `Promise`<`void`>

#### Parameters

##### senderId

`string`

##### userAgent

`string`

#### Returns

`Promise`<`void`>

#### Inherited from

[`ConnectionMessagingController`](reference/classes/ConnectionMessagingController.md).[`senderConnected`](ConnectionMessagingController.md#senderconnected)

***

### senderDisconnected()

> **senderDisconnected**(`senderId`, `reason?`): `Promise`<`void`>

#### Parameters

##### senderId

`string`

##### reason?

`string`

#### Returns

`Promise`<`void`>

#### Inherited from

[`ConnectionMessagingController`](reference/classes/ConnectionMessagingController.md).[`senderDisconnected`](ConnectionMessagingController.md#senderdisconnected)

***

### sendMessage()

> **sendMessage**(`message`, `namespace?`): `Promise`<`void`>

#### Parameters

##### message

[`UselessMessage`](reference/classes/UselessMessage.md)

##### namespace?

`string`

#### Returns

`Promise`<`void`>

#### Inherited from

[`ConnectionMessagingController`](reference/classes/ConnectionMessagingController.md).[`sendMessage`](ConnectionMessagingController.md#sendmessage)

***

### setConnection()

> **setConnection**(`connection?`): `void`

#### Parameters

##### connection?

`TConnection`

#### Returns

`void`

#### Inherited from

[`ConnectionMessagingController`](reference/classes/ConnectionMessagingController.md).[`setConnection`](ConnectionMessagingController.md#setconnection)

***

### setDebug()

> **setDebug**(`value`): `void`

#### Parameters

##### value

`boolean`

#### Returns

`void`

#### Inherited from

[`ConnectionMessagingController`](reference/classes/ConnectionMessagingController.md).[`setDebug`](ConnectionMessagingController.md#setdebug)

***

### setSendMessage()

> **setSendMessage**(`sendMessage?`): `Promise`<`void`>

#### Parameters

##### sendMessage?

[`IAnyMessageMessagingSendMessage`](reference/interfaces/IAnyMessageMessagingSendMessage.md)<`CommunicationChannelMessage`>

#### Returns

`Promise`<`void`>

#### Inherited from

[`ConnectionMessagingController`](reference/classes/ConnectionMessagingController.md).[`setSendMessage`](ConnectionMessagingController.md#setsendmessage)
