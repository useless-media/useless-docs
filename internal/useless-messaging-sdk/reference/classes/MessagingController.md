# MessagingController<T>

## Extends

- `Emitter`<`T`>

## Extended by

- [`ConnectionMessagingController`](reference/classes/ConnectionMessagingController.md)

## Type Parameters

### T

`T` *extends* [`MessagingControllerEventList`](reference/interfaces/MessagingControllerEventList.md) = [`MessagingControllerEventList`](../interfaces/MessagingControllerEventList.md)

## Constructors

### Constructor

> `protected` **new MessagingController**<`T`>(`args`, `emitterArgs?`): `MessagingController`<`T`>

#### Parameters

##### args

[`MessagingControllerArgs`](reference/interfaces/MessagingControllerArgs.md)

##### emitterArgs?

`TEmitterOptions`

#### Returns

`MessagingController`<`T`>

#### Overrides

`Emitter<T>.constructor`

## Properties

### communicationManager

> `readonly` **communicationManager**: [`CommunicationManager`](reference/classes/CommunicationManager.md)

***

### configuration

> `protected` **configuration**: `Required`<[`MessagingControllerConfiguration`](reference/interfaces/MessagingControllerConfiguration.md)>

***

### destroyed

> `protected` **destroyed**: `boolean`

#### Inherited from

`Emitter.destroyed`

***

### logger

> `protected` `readonly` **logger**: `ILogger`

***

### senderManager

> `readonly` **senderManager**: [`SenderManager`](reference/classes/SenderManager.md)

## Accessors

### isConnected

#### Get Signature

> **get** **isConnected**(): `boolean`

##### Returns

`boolean`

## Methods

### addEventListener()

> **addEventListener**<`K`>(`type`, `subscriber`): `Emitter`<`T`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

`Emitter`<`T`>

#### Inherited from

`Emitter.addEventListener`

***

### configure()

> **configure**(`configuration`): `this`

#### Parameters

##### configuration

`Partial`<[`MessagingControllerConfiguration`](reference/interfaces/MessagingControllerConfiguration.md)>

#### Returns

`this`

***

### connected()

> **connected**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Inherited from

`Emitter.destroy`

***

### emit()

> **emit**<`K`>(`type`, `event?`): `Emitter`<`T`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type

`K`

##### event?

`Optional`<`T`[`K`], `"type"`>

#### Returns

`Emitter`<`T`>

#### Inherited from

`Emitter.emit`

***

### emitAsync()

> **emitAsync**<`K`>(`type`, `event?`): `Emitter`<`T`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type

`K`

##### event?

`Optional`<`T`[`K`], `"type"`>

#### Returns

`Emitter`<`T`>

#### Inherited from

`Emitter.emitAsync`

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

`Emitter.ensureNotDestroyed`

***

### getCommunicationChannel()

> **getCommunicationChannel**(`namespace`): [`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md)<`EmitterEventList`> | `undefined`

CommunicationManager

#### Parameters

##### namespace

`string`

#### Returns

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md)<`EmitterEventList`> | `undefined`

***

### getSender()

> **getSender**(`id?`): [`UselessControllerSender`](reference/classes/UselessControllerSender.md)<`any`> | `undefined`

SenderManager

#### Parameters

##### id?

`string`

#### Returns

[`UselessControllerSender`](reference/classes/UselessControllerSender.md)<`any`> | `undefined`

***

### getSenders()

> **getSenders**(): [`UselessControllerSender`](reference/classes/UselessControllerSender.md)<`any`>[]

#### Returns

[`UselessControllerSender`](reference/classes/UselessControllerSender.md)<`any`>[]

***

### handleConnected()

> **handleConnected**(`sendMessage?`): `Promise`<`void`>

#### Parameters

##### sendMessage?

[`IAnyMessageMessagingSendMessage`](reference/interfaces/IAnyMessageMessagingSendMessage.md)<`CommunicationChannelMessage`>

#### Returns

`Promise`<`void`>

***

### handleDisconnected()

> **handleDisconnected**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### off()

> **off**<`K`>(`type?`, `subscriber?`): `Emitter`<`T`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type?

`K`

##### subscriber?

(`e`) => `void`

#### Returns

`Emitter`<`T`>

#### Inherited from

`Emitter.off`

***

### on()

> **on**<`K`>(`type`, `subscriber`): `Emitter`<`T`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

`Emitter`<`T`>

#### Inherited from

`Emitter.on`

***

### once()

> **once**<`K`>(`type`, `subscriber`): `Emitter`<`T`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

`Emitter`<`T`>

#### Inherited from

`Emitter.once`

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

***

### registerDefaultSenderCommunicationChannel()

> **registerDefaultSenderCommunicationChannel**(`communicationChannel`): `void`

#### Parameters

##### communicationChannel

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md)<`any`>

#### Returns

`void`

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

***

### removeEventListener()

> **removeEventListener**<`K`>(`type?`, `subscriber?`): `Emitter`<`T`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type?

`K`

##### subscriber?

(`e`) => `void`

#### Returns

`Emitter`<`T`>

#### Inherited from

`Emitter.removeEventListener`

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

***

### setDebug()

> **setDebug**(`value`): `void`

#### Parameters

##### value

`boolean`

#### Returns

`void`

#### Inherited from

`Emitter.setDebug`

***

### setSendMessage()

> **setSendMessage**(`sendMessage?`): `Promise`<`void`>

#### Parameters

##### sendMessage?

[`IAnyMessageMessagingSendMessage`](reference/interfaces/IAnyMessageMessagingSendMessage.md)<`CommunicationChannelMessage`>

#### Returns

`Promise`<`void`>
