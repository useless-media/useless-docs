# UselessDebugController

## Extends

- `UselessWebSocketMessagingController`<`UselessWebSocketMessagingControllerEventList`, [`UselessDebugControllerConnectionEventList`](reference/interfaces/UselessDebugControllerConnectionEventList.md), [`UselessDebugControllerConnection`](UselessDebugControllerConnection.md)>

## Constructors

### Constructor

> **new UselessDebugController**(`args`): `UselessDebugController`

#### Parameters

##### args

`UselessWebSocketMessagingControllerArgs`<[`UselessDebugControllerConnectionEventList`](reference/interfaces/UselessDebugControllerConnectionEventList.md), [`UselessDebugControllerConnection`](UselessDebugControllerConnection.md)>

#### Returns

`UselessDebugController`

#### Overrides

`UselessWebSocketMessagingController<UselessWebSocketMessagingControllerEventList, UselessDebugControllerConnectionEventList, UselessDebugControllerConnection>.constructor`

## Properties

### communicationManager

> `readonly` **communicationManager**: `CommunicationManager`

#### Inherited from

`UselessWebSocketMessagingController.communicationManager`

***

### configuration

> `protected` **configuration**: `Required`<`MessagingControllerConfiguration`>

#### Inherited from

`UselessWebSocketMessagingController.configuration`

***

### connection?

> `protected` **connection**?: [`UselessDebugControllerConnection`](reference/classes/UselessDebugControllerConnection.md)

#### Inherited from

`UselessWebSocketMessagingController.connection`

***

### destroyed

> `protected` **destroyed**: `boolean`

#### Inherited from

`UselessWebSocketMessagingController.destroyed`

***

### logger

> `protected` `readonly` **logger**: `ILogger`

#### Inherited from

`UselessWebSocketMessagingController.logger`

***

### senderManager

> `readonly` **senderManager**: `SenderManager`

#### Inherited from

`UselessWebSocketMessagingController.senderManager`

## Accessors

### isConnected

#### Get Signature

> **get** **isConnected**(): `boolean`

##### Returns

`boolean`

#### Inherited from

`UselessWebSocketMessagingController.isConnected`

## Methods

### addEventListener()

> **addEventListener**<`K`>(`type`, `subscriber`): `Emitter`<`UselessWebSocketMessagingControllerEventList`>

#### Type Parameters

##### K

`K` *extends* keyof `UselessWebSocketMessagingControllerEventList`

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

`Emitter`<`UselessWebSocketMessagingControllerEventList`>

#### Inherited from

`UselessWebSocketMessagingController.addEventListener`

***

### configure()

> **configure**(`configuration`): `this`

#### Parameters

##### configuration

`Partial`<`MessagingControllerConfiguration`>

#### Returns

`this`

#### Inherited from

`UselessWebSocketMessagingController.configure`

***

### configureConsoleInterceptor()

> **configureConsoleInterceptor**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### connect()

> **connect**(`args?`, `emitterArgs?`): `void`

#### Parameters

##### args?

`ConnectionMessagingControllerArgs`<[`UselessDebugControllerConnectionEventList`](reference/interfaces/UselessDebugControllerConnectionEventList.md), `UselessWebSocketMessagingConnectionArgs`, [`UselessDebugControllerConnection`](UselessDebugControllerConnection.md)>

##### emitterArgs?

`TEmitterOptions`

#### Returns

`void`

#### Inherited from

`UselessWebSocketMessagingController.connect`

***

### connected()

> **connected**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Inherited from

`UselessWebSocketMessagingController.connected`

***

### describe()

> **describe**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Inherited from

`UselessWebSocketMessagingController.destroy`

***

### emit()

> **emit**<`K`>(`type`, `event?`): `Emitter`<`UselessWebSocketMessagingControllerEventList`>

#### Type Parameters

##### K

`K` *extends* keyof `UselessWebSocketMessagingControllerEventList`

#### Parameters

##### type

`K`

##### event?

`Optional`<`UselessWebSocketMessagingControllerEventList`[`K`], `"type"`>

#### Returns

`Emitter`<`UselessWebSocketMessagingControllerEventList`>

#### Inherited from

`UselessWebSocketMessagingController.emit`

***

### emitAsync()

> **emitAsync**<`K`>(`type`, `event?`): `Emitter`<`UselessWebSocketMessagingControllerEventList`>

#### Type Parameters

##### K

`K` *extends* keyof `UselessWebSocketMessagingControllerEventList`

#### Parameters

##### type

`K`

##### event?

`Optional`<`UselessWebSocketMessagingControllerEventList`[`K`], `"type"`>

#### Returns

`Emitter`<`UselessWebSocketMessagingControllerEventList`>

#### Inherited from

`UselessWebSocketMessagingController.emitAsync`

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

`UselessWebSocketMessagingController.ensureNotDestroyed`

***

### eval()

> **eval**(`code`, `context?`): `Promise`<`void`>

#### Parameters

##### code

`string`

##### context?

`string`

#### Returns

`Promise`<`void`>

***

### getCommunicationChannel()

> **getCommunicationChannel**(`namespace`): `ICommunicationChannel`<`EmitterEventList`> | `undefined`

CommunicationManager

#### Parameters

##### namespace

`string`

#### Returns

`ICommunicationChannel`<`EmitterEventList`> | `undefined`

#### Inherited from

`UselessWebSocketMessagingController.getCommunicationChannel`

***

### getSender()

> **getSender**(`id?`): `UselessControllerSender`<`any`> | `undefined`

SenderManager

#### Parameters

##### id?

`string`

#### Returns

`UselessControllerSender`<`any`> | `undefined`

#### Inherited from

`UselessWebSocketMessagingController.getSender`

***

### getSenders()

> **getSenders**(): `UselessControllerSender`<`any`>[]

#### Returns

`UselessControllerSender`<`any`>[]

#### Inherited from

`UselessWebSocketMessagingController.getSenders`

***

### handleConnected()

> **handleConnected**(`sendMessage?`): `Promise`<`void`>

#### Parameters

##### sendMessage?

`IAnyMessageMessagingSendMessage`<`CommunicationChannelMessage`>

#### Returns

`Promise`<`void`>

#### Inherited from

`UselessWebSocketMessagingController.handleConnected`

***

### handleDisconnected()

> **handleDisconnected**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Inherited from

`UselessWebSocketMessagingController.handleDisconnected`

***

### off()

> **off**<`K`>(`type?`, `subscriber?`): `Emitter`<`UselessWebSocketMessagingControllerEventList`>

#### Type Parameters

##### K

`K` *extends* keyof `UselessWebSocketMessagingControllerEventList`

#### Parameters

##### type?

`K`

##### subscriber?

(`e`) => `void`

#### Returns

`Emitter`<`UselessWebSocketMessagingControllerEventList`>

#### Inherited from

`UselessWebSocketMessagingController.off`

***

### on()

> **on**<`K`>(`type`, `subscriber`): `Emitter`<`UselessWebSocketMessagingControllerEventList`>

#### Type Parameters

##### K

`K` *extends* keyof `UselessWebSocketMessagingControllerEventList`

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

`Emitter`<`UselessWebSocketMessagingControllerEventList`>

#### Inherited from

`UselessWebSocketMessagingController.on`

***

### once()

> **once**<`K`>(`type`, `subscriber`): `Emitter`<`UselessWebSocketMessagingControllerEventList`>

#### Type Parameters

##### K

`K` *extends* keyof `UselessWebSocketMessagingControllerEventList`

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

`Emitter`<`UselessWebSocketMessagingControllerEventList`>

#### Inherited from

`UselessWebSocketMessagingController.once`

***

### receiveMessage()

> **receiveMessage**(`message`, `namespace?`): `Promise`<`void`>

#### Parameters

##### message

`string` | `UselessMessage` | `AnyMessage`

##### namespace?

`string`

#### Returns

`Promise`<`void`>

#### Inherited from

`UselessWebSocketMessagingController.receiveMessage`

***

### registerDefaultSenderCommunicationChannel()

> **registerDefaultSenderCommunicationChannel**(`communicationChannel`): `void`

#### Parameters

##### communicationChannel

`ICommunicationChannel`<`any`>

#### Returns

`void`

#### Inherited from

`UselessWebSocketMessagingController.registerDefaultSenderCommunicationChannel`

***

### registerNamespace()

> **registerNamespace**<`T`>(`namespace`): `ICommunicationChannel`<`T`>

#### Type Parameters

##### T

`T` *extends* `EmitterEventList`

#### Parameters

##### namespace

`string`

#### Returns

`ICommunicationChannel`<`T`>

#### Inherited from

`UselessWebSocketMessagingController.registerNamespace`

***

### removeEventListener()

> **removeEventListener**<`K`>(`type?`, `subscriber?`): `Emitter`<`UselessWebSocketMessagingControllerEventList`>

#### Type Parameters

##### K

`K` *extends* keyof `UselessWebSocketMessagingControllerEventList`

#### Parameters

##### type?

`K`

##### subscriber?

(`e`) => `void`

#### Returns

`Emitter`<`UselessWebSocketMessagingControllerEventList`>

#### Inherited from

`UselessWebSocketMessagingController.removeEventListener`

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

`UselessWebSocketMessagingController.senderConnected`

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

`UselessWebSocketMessagingController.senderDisconnected`

***

### sendMessage()

> **sendMessage**(`message`, `namespace?`): `Promise`<`void`>

#### Parameters

##### message

`UselessMessage`

##### namespace?

`string`

#### Returns

`Promise`<`void`>

#### Inherited from

`UselessWebSocketMessagingController.sendMessage`

***

### setConnection()

> **setConnection**(`connection?`): `void`

#### Parameters

##### connection?

[`UselessDebugControllerConnection`](reference/classes/UselessDebugControllerConnection.md)

#### Returns

`void`

#### Inherited from

`UselessWebSocketMessagingController.setConnection`

***

### setDebug()

> **setDebug**(`value`): `void`

#### Parameters

##### value

`boolean`

#### Returns

`void`

#### Inherited from

`UselessWebSocketMessagingController.setDebug`

***

### setSendMessage()

> **setSendMessage**(`sendMessage?`): `Promise`<`void`>

#### Parameters

##### sendMessage?

`IAnyMessageMessagingSendMessage`<`CommunicationChannelMessage`>

#### Returns

`Promise`<`void`>

#### Inherited from

`UselessWebSocketMessagingController.setSendMessage`
