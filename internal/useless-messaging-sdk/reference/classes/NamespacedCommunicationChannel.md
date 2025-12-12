# NamespacedCommunicationChannel<T>

## Extends

- [`CommunicationChannel`](reference/classes/CommunicationChannel.md)<`T`>

## Extended by

- [`DefaultNamespacedCommunicationChannel`](reference/classes/DefaultNamespacedCommunicationChannel.md)

## Type Parameters

### T

`T` *extends* `EmitterEventList`

## Constructors

### Constructor

> **new NamespacedCommunicationChannel**<`T`>(`args`): `NamespacedCommunicationChannel`<`T`>

#### Parameters

##### args

[`NamespacedCommunicationChannelArgs`](reference/interfaces/NamespacedCommunicationChannelArgs.md)

#### Returns

`NamespacedCommunicationChannel`<`T`>

#### Overrides

[`CommunicationChannel`](reference/classes/CommunicationChannel.md).[`constructor`](CommunicationChannel.md#constructor)

## Properties

### configuration

> `protected` **configuration**: `Required`<[`CommunicationChannelConfiguration`](reference/interfaces/CommunicationChannelConfiguration.md)>

#### Inherited from

[`CommunicationChannel`](reference/classes/CommunicationChannel.md).[`configuration`](CommunicationChannel.md#configuration)

***

### destroyed

> `protected` **destroyed**: `boolean`

#### Inherited from

[`DefaultNamespacedCommunicationChannel`](reference/classes/DefaultNamespacedCommunicationChannel.md).[`destroyed`](DefaultNamespacedCommunicationChannel.md#destroyed)

***

### id

> `readonly` **id**: `string`

#### Inherited from

[`CommunicationChannel`](reference/classes/CommunicationChannel.md).[`id`](CommunicationChannel.md#id)

***

### label?

> `readonly` **label**?: `string`

#### Inherited from

[`CommunicationChannel`](reference/classes/CommunicationChannel.md).[`label`](CommunicationChannel.md#label)

***

### namespace

> `readonly` **namespace**: `string`

***

### type

> `readonly` **type**: [`CommunicationChannelTypes`](reference/enumerations/CommunicationChannelTypes.md)

#### Inherited from

[`CommunicationChannel`](reference/classes/CommunicationChannel.md).[`type`](CommunicationChannel.md#type)

## Accessors

### name

#### Get Signature

> **get** `protected` **name**(): `string`

##### Returns

`string`

#### Inherited from

[`CommunicationChannel`](reference/classes/CommunicationChannel.md).[`name`](CommunicationChannel.md#name)

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

[`CommunicationChannel`](reference/classes/CommunicationChannel.md).[`addEventListener`](CommunicationChannel.md#addeventlistener)

***

### configure()

> **configure**(`configuration`): `this`

#### Parameters

##### configuration

`Partial`<[`CommunicationChannelConfiguration`](reference/interfaces/CommunicationChannelConfiguration.md)>

#### Returns

`this`

#### Inherited from

[`CommunicationChannel`](reference/classes/CommunicationChannel.md).[`configure`](CommunicationChannel.md#configure)

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[`CommunicationChannel`](reference/classes/CommunicationChannel.md).[`destroy`](CommunicationChannel.md#destroy)

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

[`CommunicationChannel`](reference/classes/CommunicationChannel.md).[`emit`](CommunicationChannel.md#emit)

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

[`CommunicationChannel`](reference/classes/CommunicationChannel.md).[`emitAsync`](CommunicationChannel.md#emitasync)

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

[`CommunicationChannel`](reference/classes/CommunicationChannel.md).[`ensureNotDestroyed`](CommunicationChannel.md#ensurenotdestroyed)

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

[`CommunicationChannel`](reference/classes/CommunicationChannel.md).[`off`](CommunicationChannel.md#off)

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

[`CommunicationChannel`](reference/classes/CommunicationChannel.md).[`on`](CommunicationChannel.md#on)

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

[`CommunicationChannel`](reference/classes/CommunicationChannel.md).[`once`](CommunicationChannel.md#once)

***

### receiveMessage()

> **receiveMessage**(`message`): `void`

#### Parameters

##### message

`CommunicationChannelMessage`

#### Returns

`void`

#### Overrides

[`CommunicationChannel`](reference/classes/CommunicationChannel.md).[`receiveMessage`](CommunicationChannel.md#receivemessage)

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

#### Inherited from

[`CommunicationChannel`](reference/classes/CommunicationChannel.md).[`registerMessageHandler`](CommunicationChannel.md#registermessagehandler)

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

#### Inherited from

[`CommunicationChannel`](reference/classes/CommunicationChannel.md).[`registerMessageTransformer`](CommunicationChannel.md#registermessagetransformer)

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

#### Inherited from

[`CommunicationChannel`](reference/classes/CommunicationChannel.md).[`registerUnhandledMessageHandler`](CommunicationChannel.md#registerunhandledmessagehandler)

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

[`CommunicationChannel`](reference/classes/CommunicationChannel.md).[`removeEventListener`](CommunicationChannel.md#removeeventlistener)

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

#### Overrides

[`CommunicationChannel`](reference/classes/CommunicationChannel.md).[`sendAnyMessage`](CommunicationChannel.md#sendanymessage)

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

#### Inherited from

[`CommunicationChannel`](reference/classes/CommunicationChannel.md).[`sendMessage`](CommunicationChannel.md#sendmessage)

***

### setDebug()

> **setDebug**(`value`): `void`

#### Parameters

##### value

`boolean`

#### Returns

`void`

#### Inherited from

[`CommunicationChannel`](reference/classes/CommunicationChannel.md).[`setDebug`](CommunicationChannel.md#setdebug)

***

### setSendMessage()

> **setSendMessage**(`sendMessage?`): `Promise`<`void`>

#### Parameters

##### sendMessage?

[`IAnyMessageMessagingSendMessage`](reference/interfaces/IAnyMessageMessagingSendMessage.md)<`CommunicationChannelMessage`>

#### Returns

`Promise`<`void`>

#### Inherited from

[`CommunicationChannel`](reference/classes/CommunicationChannel.md).[`setSendMessage`](CommunicationChannel.md#setsendmessage)

***

### unregisterMessageHandlers()

> **unregisterMessageHandlers**(`ownerId`): `void`

#### Parameters

##### ownerId

`string`

#### Returns

`void`

#### Inherited from

[`CommunicationChannel`](reference/classes/CommunicationChannel.md).[`unregisterMessageHandlers`](CommunicationChannel.md#unregistermessagehandlers)

***

### unregisterMessageTransformer()

> **unregisterMessageTransformer**(`receiverId`): `void`

#### Parameters

##### receiverId

`string`

#### Returns

`void`

#### Inherited from

[`CommunicationChannel`](reference/classes/CommunicationChannel.md).[`unregisterMessageTransformer`](CommunicationChannel.md#unregistermessagetransformer)

***

### unregisterUnhandledMessageHandlers()

> **unregisterUnhandledMessageHandlers**(`ownerId`): `void`

#### Parameters

##### ownerId

`string`

#### Returns

`void`

#### Inherited from

[`CommunicationChannel`](reference/classes/CommunicationChannel.md).[`unregisterUnhandledMessageHandlers`](CommunicationChannel.md#unregisterunhandledmessagehandlers)
