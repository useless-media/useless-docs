# ConnectionMessagingController<TEventList, TConnectionEventList, TConnectionArgs, TConnection>

## Extends

- [`MessagingController`](reference/classes/MessagingController.md)<`TEventList`>

## Extended by

- [`UselessWebSocketMessagingController`](reference/classes/UselessWebSocketMessagingController.md)

## Type Parameters

### TEventList

`TEventList` *extends* [`ConnectionMessagingControllerEventList`](reference/interfaces/ConnectionMessagingControllerEventList.md) = [`ConnectionMessagingControllerEventList`](../interfaces/ConnectionMessagingControllerEventList.md)

### TConnectionEventList

`TConnectionEventList` *extends* [`UselessMessagingConnectionEventList`](reference/interfaces/UselessMessagingConnectionEventList.md) = [`UselessMessagingConnectionEventList`](../interfaces/UselessMessagingConnectionEventList.md)

### TConnectionArgs

`TConnectionArgs` *extends* [`UselessMessagingConnectionArgs`](reference/interfaces/UselessMessagingConnectionArgs.md) = [`UselessMessagingConnectionArgs`](../interfaces/UselessMessagingConnectionArgs.md)

### TConnection

`TConnection` *extends* [`UselessMessagingConnection`](reference/classes/UselessMessagingConnection.md)<`TConnectionEventList`, `TConnectionArgs`> = [`UselessMessagingNoOpConnection`](UselessMessagingNoOpConnection.md)<`TConnectionEventList`, `TConnectionArgs`>

## Constructors

### Constructor

> **new ConnectionMessagingController**<`TEventList`, `TConnectionEventList`, `TConnectionArgs`, `TConnection`>(`args`, `emitterArgs?`): `ConnectionMessagingController`<`TEventList`, `TConnectionEventList`, `TConnectionArgs`, `TConnection`>

#### Parameters

##### args

[`ConnectionMessagingControllerArgs`](reference/interfaces/ConnectionMessagingControllerArgs.md)<`TConnectionEventList`, `TConnectionArgs`, `TConnection`>

##### emitterArgs?

`TEmitterOptions`

#### Returns

`ConnectionMessagingController`<`TEventList`, `TConnectionEventList`, `TConnectionArgs`, `TConnection`>

#### Overrides

[`MessagingController`](reference/classes/MessagingController.md).[`constructor`](MessagingController.md#constructor)

## Properties

### communicationManager

> `readonly` **communicationManager**: [`CommunicationManager`](reference/classes/CommunicationManager.md)

#### Inherited from

[`MessagingController`](reference/classes/MessagingController.md).[`communicationManager`](MessagingController.md#communicationmanager)

***

### configuration

> `protected` **configuration**: `Required`<[`MessagingControllerConfiguration`](reference/interfaces/MessagingControllerConfiguration.md)>

#### Inherited from

[`MessagingController`](reference/classes/MessagingController.md).[`configuration`](MessagingController.md#configuration)

***

### connection?

> `protected` **connection**?: `TConnection`

***

### destroyed

> `protected` **destroyed**: `boolean`

#### Inherited from

[`MessagingController`](reference/classes/MessagingController.md).[`destroyed`](MessagingController.md#destroyed)

***

### logger

> `protected` `readonly` **logger**: `ILogger`

#### Inherited from

[`MessagingController`](reference/classes/MessagingController.md).[`logger`](MessagingController.md#logger)

***

### senderManager

> `readonly` **senderManager**: [`SenderManager`](reference/classes/SenderManager.md)

#### Inherited from

[`MessagingController`](reference/classes/MessagingController.md).[`senderManager`](MessagingController.md#sendermanager)

## Accessors

### isConnected

#### Get Signature

> **get** **isConnected**(): `boolean`

##### Returns

`boolean`

#### Inherited from

[`MessagingController`](reference/classes/MessagingController.md).[`isConnected`](MessagingController.md#isconnected)

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

[`MessagingController`](reference/classes/MessagingController.md).[`addEventListener`](MessagingController.md#addeventlistener)

***

### configure()

> **configure**(`configuration`): `this`

#### Parameters

##### configuration

`Partial`<[`MessagingControllerConfiguration`](reference/interfaces/MessagingControllerConfiguration.md)>

#### Returns

`this`

#### Inherited from

[`MessagingController`](reference/classes/MessagingController.md).[`configure`](MessagingController.md#configure)

***

### connect()

> **connect**(`args?`, `emitterArgs?`): `void`

#### Parameters

##### args?

[`ConnectionMessagingControllerArgs`](reference/interfaces/ConnectionMessagingControllerArgs.md)<`TConnectionEventList`, `TConnectionArgs`, `TConnection`>

##### emitterArgs?

`TEmitterOptions`

#### Returns

`void`

***

### connected()

> **connected**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Inherited from

[`MessagingController`](reference/classes/MessagingController.md).[`connected`](MessagingController.md#connected)

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[`MessagingController`](reference/classes/MessagingController.md).[`destroy`](MessagingController.md#destroy)

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

[`MessagingController`](reference/classes/MessagingController.md).[`emit`](MessagingController.md#emit)

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

[`MessagingController`](reference/classes/MessagingController.md).[`emitAsync`](MessagingController.md#emitasync)

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

[`MessagingController`](reference/classes/MessagingController.md).[`ensureNotDestroyed`](MessagingController.md#ensurenotdestroyed)

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

[`MessagingController`](reference/classes/MessagingController.md).[`getCommunicationChannel`](MessagingController.md#getcommunicationchannel)

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

[`MessagingController`](reference/classes/MessagingController.md).[`getSender`](MessagingController.md#getsender)

***

### getSenders()

> **getSenders**(): [`UselessControllerSender`](reference/classes/UselessControllerSender.md)<`any`>[]

#### Returns

[`UselessControllerSender`](reference/classes/UselessControllerSender.md)<`any`>[]

#### Inherited from

[`MessagingController`](reference/classes/MessagingController.md).[`getSenders`](MessagingController.md#getsenders)

***

### handleConnected()

> **handleConnected**(`sendMessage?`): `Promise`<`void`>

#### Parameters

##### sendMessage?

[`IAnyMessageMessagingSendMessage`](reference/interfaces/IAnyMessageMessagingSendMessage.md)<`CommunicationChannelMessage`>

#### Returns

`Promise`<`void`>

#### Inherited from

[`MessagingController`](reference/classes/MessagingController.md).[`handleConnected`](MessagingController.md#handleconnected)

***

### handleDisconnected()

> **handleDisconnected**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Inherited from

[`MessagingController`](reference/classes/MessagingController.md).[`handleDisconnected`](MessagingController.md#handledisconnected)

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

[`MessagingController`](reference/classes/MessagingController.md).[`off`](MessagingController.md#off)

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

[`MessagingController`](reference/classes/MessagingController.md).[`on`](MessagingController.md#on)

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

[`MessagingController`](reference/classes/MessagingController.md).[`once`](MessagingController.md#once)

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

[`MessagingController`](reference/classes/MessagingController.md).[`receiveMessage`](MessagingController.md#receivemessage)

***

### registerDefaultSenderCommunicationChannel()

> **registerDefaultSenderCommunicationChannel**(`communicationChannel`): `void`

#### Parameters

##### communicationChannel

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md)<`any`>

#### Returns

`void`

#### Inherited from

[`MessagingController`](reference/classes/MessagingController.md).[`registerDefaultSenderCommunicationChannel`](MessagingController.md#registerdefaultsendercommunicationchannel)

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

[`MessagingController`](reference/classes/MessagingController.md).[`registerNamespace`](MessagingController.md#registernamespace)

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

[`MessagingController`](reference/classes/MessagingController.md).[`removeEventListener`](MessagingController.md#removeeventlistener)

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

[`MessagingController`](reference/classes/MessagingController.md).[`senderConnected`](MessagingController.md#senderconnected)

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

[`MessagingController`](reference/classes/MessagingController.md).[`senderDisconnected`](MessagingController.md#senderdisconnected)

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

[`MessagingController`](reference/classes/MessagingController.md).[`sendMessage`](MessagingController.md#sendmessage)

***

### setConnection()

> **setConnection**(`connection?`): `void`

#### Parameters

##### connection?

`TConnection`

#### Returns

`void`

***

### setDebug()

> **setDebug**(`value`): `void`

#### Parameters

##### value

`boolean`

#### Returns

`void`

#### Inherited from

[`MessagingController`](reference/classes/MessagingController.md).[`setDebug`](MessagingController.md#setdebug)

***

### setSendMessage()

> **setSendMessage**(`sendMessage?`): `Promise`<`void`>

#### Parameters

##### sendMessage?

[`IAnyMessageMessagingSendMessage`](reference/interfaces/IAnyMessageMessagingSendMessage.md)<`CommunicationChannelMessage`>

#### Returns

`Promise`<`void`>

#### Inherited from

[`MessagingController`](reference/classes/MessagingController.md).[`setSendMessage`](MessagingController.md#setsendmessage)
