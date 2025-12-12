# CommunicationChannel<T>

## Extends

- `Emitter`<`T`>

## Extended by

- [`NamespacedCommunicationChannel`](reference/classes/NamespacedCommunicationChannel.md)

## Type Parameters

### T

`T` *extends* `EmitterEventList`

## Implements

- [`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md)<`T`>

## Constructors

### Constructor

> **new CommunicationChannel**<`T`>(`args?`): `CommunicationChannel`<`T`>

#### Parameters

##### args?

[`CommunicationChannelArgs`](reference/interfaces/CommunicationChannelArgs.md)

#### Returns

`CommunicationChannel`<`T`>

#### Overrides

`Emitter<T>.constructor`

## Properties

### configuration

> `protected` **configuration**: `Required`<[`CommunicationChannelConfiguration`](reference/interfaces/CommunicationChannelConfiguration.md)>

***

### destroyed

> `protected` **destroyed**: `boolean`

#### Implementation of

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`destroyed`](../interfaces/ICommunicationChannel.md#destroyed)

#### Inherited from

[`DefaultNamespacedCommunicationChannel`](reference/classes/DefaultNamespacedCommunicationChannel.md).[`destroyed`](DefaultNamespacedCommunicationChannel.md#destroyed)

***

### id

> `readonly` **id**: `string`

***

### label?

> `readonly` **label**?: `string`

***

### type

> `readonly` **type**: [`CommunicationChannelTypes`](reference/enumerations/CommunicationChannelTypes.md)

#### Implementation of

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`type`](../interfaces/ICommunicationChannel.md#type)

## Accessors

### name

#### Get Signature

> **get** `protected` **name**(): `string`

##### Returns

`string`

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

#### Implementation of

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`addEventListener`](../interfaces/ICommunicationChannel.md#addeventlistener)

#### Inherited from

`Emitter.addEventListener`

***

### configure()

> **configure**(`configuration`): `this`

#### Parameters

##### configuration

`Partial`<[`CommunicationChannelConfiguration`](reference/interfaces/CommunicationChannelConfiguration.md)>

#### Returns

`this`

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`destroy`](../interfaces/ICommunicationChannel.md#destroy)

#### Overrides

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

#### Implementation of

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`emit`](../interfaces/ICommunicationChannel.md#emit)

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

#### Implementation of

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`emitAsync`](../interfaces/ICommunicationChannel.md#emitasync)

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

#### Implementation of

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`ensureNotDestroyed`](../interfaces/ICommunicationChannel.md#ensurenotdestroyed)

#### Inherited from

`Emitter.ensureNotDestroyed`

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

#### Implementation of

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`off`](../interfaces/ICommunicationChannel.md#off)

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

#### Implementation of

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`on`](../interfaces/ICommunicationChannel.md#on)

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

#### Implementation of

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`once`](../interfaces/ICommunicationChannel.md#once)

#### Inherited from

`Emitter.once`

***

### receiveMessage()

> **receiveMessage**(`message`): `void`

#### Parameters

##### message

`CommunicationChannelMessage`

#### Returns

`void`

#### Implementation of

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`receiveMessage`](../interfaces/ICommunicationChannel.md#receivemessage)

***

### registerMessageHandler()

> **registerMessageHandler**(`ownerId`, `handler`): `void`

#### Parameters

##### ownerId

`string`

##### handler

`MessageHandler`

#### Returns

`void`

#### Implementation of

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`registerMessageHandler`](../interfaces/ICommunicationChannel.md#registermessagehandler)

***

### registerMessageTransformer()

> **registerMessageTransformer**(`receiverId`, `transformer`): `void`

#### Parameters

##### receiverId

`string`

##### transformer

`MessageTransformer`

#### Returns

`void`

#### Implementation of

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`registerMessageTransformer`](../interfaces/ICommunicationChannel.md#registermessagetransformer)

***

### registerUnhandledMessageHandler()

> **registerUnhandledMessageHandler**(`ownerId`, `handler`): `void`

#### Parameters

##### ownerId

`string`

##### handler

`UnhandledMessageHandler`

#### Returns

`void`

#### Implementation of

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`registerUnhandledMessageHandler`](../interfaces/ICommunicationChannel.md#registerunhandledmessagehandler)

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

#### Implementation of

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`removeEventListener`](../interfaces/ICommunicationChannel.md#removeeventlistener)

#### Inherited from

`Emitter.removeEventListener`

***

### sendAnyMessage()

> **sendAnyMessage**(`message`, `receiverId?`): `Promise`<`void`>

#### Parameters

##### message

`CommunicationChannelMessage`

##### receiverId?

`string`

#### Returns

`Promise`<`void`>

#### Implementation of

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`sendAnyMessage`](../interfaces/ICommunicationChannel.md#sendanymessage)

***

### sendMessage()

> **sendMessage**(`message`, `receiverId?`): `Promise`<`void`>

#### Parameters

##### message

[`UselessMessage`](reference/classes/UselessMessage.md)

##### receiverId?

`string`

#### Returns

`Promise`<`void`>

#### Implementation of

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`sendMessage`](../interfaces/ICommunicationChannel.md#sendmessage)

***

### setDebug()

> **setDebug**(`value`): `void`

#### Parameters

##### value

`boolean`

#### Returns

`void`

#### Implementation of

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`setDebug`](../interfaces/ICommunicationChannel.md#setdebug)

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

#### Implementation of

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`setSendMessage`](../interfaces/ICommunicationChannel.md#setsendmessage)

***

### unregisterMessageHandlers()

> **unregisterMessageHandlers**(`ownerId`): `void`

#### Parameters

##### ownerId

`string`

#### Returns

`void`

#### Implementation of

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`unregisterMessageHandlers`](../interfaces/ICommunicationChannel.md#unregistermessagehandlers)

***

### unregisterMessageTransformer()

> **unregisterMessageTransformer**(`receiverId`): `void`

#### Parameters

##### receiverId

`string`

#### Returns

`void`

#### Implementation of

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`unregisterMessageTransformer`](../interfaces/ICommunicationChannel.md#unregistermessagetransformer)

***

### unregisterUnhandledMessageHandlers()

> **unregisterUnhandledMessageHandlers**(`ownerId`): `void`

#### Parameters

##### ownerId

`string`

#### Returns

`void`

#### Implementation of

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`unregisterUnhandledMessageHandlers`](../interfaces/ICommunicationChannel.md#unregisterunhandledmessagehandlers)
