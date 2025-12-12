# ISenderCommunicationChannel<T>

## Extends

- [`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md)<`T`>

## Type Parameters

### T

`T` *extends* `EmitterEventList`

## Properties

### destroy()

> **destroy**: () => `void`

#### Returns

`void`

#### Inherited from

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`destroy`](ICommunicationChannel.md#destroy)

***

### destroyed

> `protected` **destroyed**: `boolean`

#### Inherited from

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`destroyed`](ICommunicationChannel.md#destroyed)

***

### receiveMessage()

> **receiveMessage**: (`message`) => `void`

#### Parameters

##### message

`CommunicationChannelMessage`

#### Returns

`void`

#### Inherited from

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`receiveMessage`](ICommunicationChannel.md#receivemessage)

***

### registerMessageHandler()

> **registerMessageHandler**: (`ownerId`, `handler`) => `void`

#### Parameters

##### ownerId

`string`

##### handler

`MessageHandler`

#### Returns

`void`

#### Inherited from

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`registerMessageHandler`](ICommunicationChannel.md#registermessagehandler)

***

### registerMessageTransformer()

> **registerMessageTransformer**: (`receiverId`, `transformer`) => `void`

#### Parameters

##### receiverId

`string`

##### transformer

`MessageTransformer`

#### Returns

`void`

#### Inherited from

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`registerMessageTransformer`](ICommunicationChannel.md#registermessagetransformer)

***

### registerUnhandledMessageHandler()

> **registerUnhandledMessageHandler**: (`ownerId`, `handler`) => `void`

#### Parameters

##### ownerId

`string`

##### handler

`UnhandledMessageHandler`

#### Returns

`void`

#### Inherited from

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`registerUnhandledMessageHandler`](ICommunicationChannel.md#registerunhandledmessagehandler)

***

### sendAnyMessage()

> **sendAnyMessage**: (`message`, `receiverId?`) => `Promise`<`void`>

#### Parameters

##### message

`CommunicationChannelMessage`

##### receiverId?

`string`

#### Returns

`Promise`<`void`>

#### Inherited from

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`sendAnyMessage`](ICommunicationChannel.md#sendanymessage)

***

### sendMessage()

> **sendMessage**: (`message`, `receiverId?`) => `Promise`<`void`>

#### Parameters

##### message

[`UselessMessage`](reference/classes/UselessMessage.md)

##### receiverId?

`string`

#### Returns

`Promise`<`void`>

#### Inherited from

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`sendMessage`](ICommunicationChannel.md#sendmessage)

***

### setSendMessage()

> **setSendMessage**: (`sendMessage?`) => `Promise`<`void`>

#### Parameters

##### sendMessage?

[`IAnyMessageMessagingSendMessage`](reference/interfaces/IAnyMessageMessagingSendMessage.md)<`CommunicationChannelMessage`>

#### Returns

`Promise`<`void`>

#### Inherited from

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`setSendMessage`](ICommunicationChannel.md#setsendmessage)

***

### type

> **type**: [`CommunicationChannelTypes`](reference/enumerations/CommunicationChannelTypes.md)

#### Inherited from

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`type`](ICommunicationChannel.md#type)

***

### unregisterMessageHandlers()

> **unregisterMessageHandlers**: (`ownerId`) => `void`

#### Parameters

##### ownerId

`string`

#### Returns

`void`

#### Inherited from

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`unregisterMessageHandlers`](ICommunicationChannel.md#unregistermessagehandlers)

***

### unregisterMessageTransformer()

> **unregisterMessageTransformer**: (`receiverId`) => `void`

#### Parameters

##### receiverId

`string`

#### Returns

`void`

#### Inherited from

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`unregisterMessageTransformer`](ICommunicationChannel.md#unregistermessagetransformer)

***

### unregisterUnhandledMessageHandlers()

> **unregisterUnhandledMessageHandlers**: (`ownerId`) => `void`

#### Parameters

##### ownerId

`string`

#### Returns

`void`

#### Inherited from

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`unregisterUnhandledMessageHandlers`](ICommunicationChannel.md#unregisterunhandledmessagehandlers)

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

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`addEventListener`](ICommunicationChannel.md#addeventlistener)

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

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`emit`](ICommunicationChannel.md#emit)

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

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`emitAsync`](ICommunicationChannel.md#emitasync)

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

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`ensureNotDestroyed`](ICommunicationChannel.md#ensurenotdestroyed)

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

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`off`](ICommunicationChannel.md#off)

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

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`on`](ICommunicationChannel.md#on)

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

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`once`](ICommunicationChannel.md#once)

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

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`removeEventListener`](ICommunicationChannel.md#removeeventlistener)

***

### setDebug()

> **setDebug**(`value`): `void`

#### Parameters

##### value

`boolean`

#### Returns

`void`

#### Inherited from

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md).[`setDebug`](ICommunicationChannel.md#setdebug)
