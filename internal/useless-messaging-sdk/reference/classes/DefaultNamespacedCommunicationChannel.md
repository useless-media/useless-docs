# DefaultNamespacedCommunicationChannel<T>

## Extends

- [`NamespacedCommunicationChannel`](reference/classes/NamespacedCommunicationChannel.md)<`T`>

## Type Parameters

### T

`T` *extends* `EmitterEventList`

## Constructors

### Constructor

> **new DefaultNamespacedCommunicationChannel**<`T`>(`sendMessage?`): `DefaultNamespacedCommunicationChannel`<`T`>

#### Parameters

##### sendMessage?

[`IAnyMessageMessagingSendMessage`](reference/interfaces/IAnyMessageMessagingSendMessage.md)<`CommunicationChannelMessage`>

#### Returns

`DefaultNamespacedCommunicationChannel`<`T`>

#### Overrides

[`NamespacedCommunicationChannel`](reference/classes/NamespacedCommunicationChannel.md).[`constructor`](NamespacedCommunicationChannel.md#constructor)

## Properties

### configuration

> `protected` **configuration**: `Required`<[`CommunicationChannelConfiguration`](reference/interfaces/CommunicationChannelConfiguration.md)>

#### Inherited from

[`NamespacedCommunicationChannel`](reference/classes/NamespacedCommunicationChannel.md).[`configuration`](NamespacedCommunicationChannel.md#configuration)

***

### destroyed

> `protected` **destroyed**: `boolean`

#### Inherited from

[`NamespacedCommunicationChannel`](reference/classes/NamespacedCommunicationChannel.md).[`destroyed`](NamespacedCommunicationChannel.md#destroyed)

***

### id

> `readonly` **id**: `string`

#### Inherited from

[`NamespacedCommunicationChannel`](reference/classes/NamespacedCommunicationChannel.md).[`id`](NamespacedCommunicationChannel.md#id)

***

### label?

> `readonly` **label**?: `string`

#### Inherited from

[`NamespacedCommunicationChannel`](reference/classes/NamespacedCommunicationChannel.md).[`label`](NamespacedCommunicationChannel.md#label)

***

### namespace

> `readonly` **namespace**: `string`

#### Inherited from

[`NamespacedCommunicationChannel`](reference/classes/NamespacedCommunicationChannel.md).[`namespace`](NamespacedCommunicationChannel.md#namespace)

***

### type

> `readonly` **type**: [`CommunicationChannelTypes`](reference/enumerations/CommunicationChannelTypes.md)

#### Inherited from

[`NamespacedCommunicationChannel`](reference/classes/NamespacedCommunicationChannel.md).[`type`](NamespacedCommunicationChannel.md#type)

## Accessors

### name

#### Get Signature

> **get** `protected` **name**(): `string`

##### Returns

`string`

#### Inherited from

[`NamespacedCommunicationChannel`](reference/classes/NamespacedCommunicationChannel.md).[`name`](NamespacedCommunicationChannel.md#name)

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

[`NamespacedCommunicationChannel`](reference/classes/NamespacedCommunicationChannel.md).[`addEventListener`](NamespacedCommunicationChannel.md#addeventlistener)

***

### configure()

> **configure**(`configuration`): `this`

#### Parameters

##### configuration

`Partial`<[`CommunicationChannelConfiguration`](reference/interfaces/CommunicationChannelConfiguration.md)>

#### Returns

`this`

#### Inherited from

[`NamespacedCommunicationChannel`](reference/classes/NamespacedCommunicationChannel.md).[`configure`](NamespacedCommunicationChannel.md#configure)

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[`NamespacedCommunicationChannel`](reference/classes/NamespacedCommunicationChannel.md).[`destroy`](NamespacedCommunicationChannel.md#destroy)

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

[`NamespacedCommunicationChannel`](reference/classes/NamespacedCommunicationChannel.md).[`emit`](NamespacedCommunicationChannel.md#emit)

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

[`NamespacedCommunicationChannel`](reference/classes/NamespacedCommunicationChannel.md).[`emitAsync`](NamespacedCommunicationChannel.md#emitasync)

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

[`NamespacedCommunicationChannel`](reference/classes/NamespacedCommunicationChannel.md).[`ensureNotDestroyed`](NamespacedCommunicationChannel.md#ensurenotdestroyed)

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

[`NamespacedCommunicationChannel`](reference/classes/NamespacedCommunicationChannel.md).[`off`](NamespacedCommunicationChannel.md#off)

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

[`NamespacedCommunicationChannel`](reference/classes/NamespacedCommunicationChannel.md).[`on`](NamespacedCommunicationChannel.md#on)

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

[`NamespacedCommunicationChannel`](reference/classes/NamespacedCommunicationChannel.md).[`once`](NamespacedCommunicationChannel.md#once)

***

### receiveMessage()

> **receiveMessage**(`message`): `void`

#### Parameters

##### message

`CommunicationChannelMessage`

#### Returns

`void`

#### Inherited from

[`NamespacedCommunicationChannel`](reference/classes/NamespacedCommunicationChannel.md).[`receiveMessage`](NamespacedCommunicationChannel.md#receivemessage)

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

[`NamespacedCommunicationChannel`](reference/classes/NamespacedCommunicationChannel.md).[`registerMessageHandler`](NamespacedCommunicationChannel.md#registermessagehandler)

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

[`NamespacedCommunicationChannel`](reference/classes/NamespacedCommunicationChannel.md).[`registerMessageTransformer`](NamespacedCommunicationChannel.md#registermessagetransformer)

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

[`NamespacedCommunicationChannel`](reference/classes/NamespacedCommunicationChannel.md).[`registerUnhandledMessageHandler`](NamespacedCommunicationChannel.md#registerunhandledmessagehandler)

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

[`NamespacedCommunicationChannel`](reference/classes/NamespacedCommunicationChannel.md).[`removeEventListener`](NamespacedCommunicationChannel.md#removeeventlistener)

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

#### Inherited from

[`NamespacedCommunicationChannel`](reference/classes/NamespacedCommunicationChannel.md).[`sendAnyMessage`](NamespacedCommunicationChannel.md#sendanymessage)

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

[`NamespacedCommunicationChannel`](reference/classes/NamespacedCommunicationChannel.md).[`sendMessage`](NamespacedCommunicationChannel.md#sendmessage)

***

### setDebug()

> **setDebug**(`value`): `void`

#### Parameters

##### value

`boolean`

#### Returns

`void`

#### Inherited from

[`NamespacedCommunicationChannel`](reference/classes/NamespacedCommunicationChannel.md).[`setDebug`](NamespacedCommunicationChannel.md#setdebug)

***

### setSendMessage()

> **setSendMessage**(`sendMessage?`): `Promise`<`void`>

#### Parameters

##### sendMessage?

[`IAnyMessageMessagingSendMessage`](reference/interfaces/IAnyMessageMessagingSendMessage.md)<`CommunicationChannelMessage`>

#### Returns

`Promise`<`void`>

#### Inherited from

[`NamespacedCommunicationChannel`](reference/classes/NamespacedCommunicationChannel.md).[`setSendMessage`](NamespacedCommunicationChannel.md#setsendmessage)

***

### unregisterMessageHandlers()

> **unregisterMessageHandlers**(`ownerId`): `void`

#### Parameters

##### ownerId

`string`

#### Returns

`void`

#### Inherited from

[`NamespacedCommunicationChannel`](reference/classes/NamespacedCommunicationChannel.md).[`unregisterMessageHandlers`](NamespacedCommunicationChannel.md#unregistermessagehandlers)

***

### unregisterMessageTransformer()

> **unregisterMessageTransformer**(`receiverId`): `void`

#### Parameters

##### receiverId

`string`

#### Returns

`void`

#### Inherited from

[`NamespacedCommunicationChannel`](reference/classes/NamespacedCommunicationChannel.md).[`unregisterMessageTransformer`](NamespacedCommunicationChannel.md#unregistermessagetransformer)

***

### unregisterUnhandledMessageHandlers()

> **unregisterUnhandledMessageHandlers**(`ownerId`): `void`

#### Parameters

##### ownerId

`string`

#### Returns

`void`

#### Inherited from

[`NamespacedCommunicationChannel`](reference/classes/NamespacedCommunicationChannel.md).[`unregisterUnhandledMessageHandlers`](NamespacedCommunicationChannel.md#unregisterunhandledmessagehandlers)
