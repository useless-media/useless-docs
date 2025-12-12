# ICommunicationChannel<T>

## Extends

- `Emitter`<`T`>

## Extended by

- [`INamespacedCommunicationChannel`](reference/interfaces/INamespacedCommunicationChannel.md)
- [`ISenderCommunicationChannel`](reference/interfaces/ISenderCommunicationChannel.md)

## Type Parameters

### T

`T` *extends* `EmitterEventList`

## Properties

### destroy()

> **destroy**: () => `void`

#### Returns

`void`

#### Overrides

`Emitter.destroy`

***

### destroyed

> `protected` **destroyed**: `boolean`

#### Inherited from

`Emitter.destroyed`

***

### receiveMessage()

> **receiveMessage**: (`message`) => `void`

#### Parameters

##### message

`CommunicationChannelMessage`

#### Returns

`void`

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

***

### setSendMessage()

> **setSendMessage**: (`sendMessage?`) => `Promise`<`void`>

#### Parameters

##### sendMessage?

[`IAnyMessageMessagingSendMessage`](reference/interfaces/IAnyMessageMessagingSendMessage.md)<`CommunicationChannelMessage`>

#### Returns

`Promise`<`void`>

***

### type

> **type**: [`CommunicationChannelTypes`](reference/enumerations/CommunicationChannelTypes.md)

***

### unregisterMessageHandlers()

> **unregisterMessageHandlers**: (`ownerId`) => `void`

#### Parameters

##### ownerId

`string`

#### Returns

`void`

***

### unregisterMessageTransformer()

> **unregisterMessageTransformer**: (`receiverId`) => `void`

#### Parameters

##### receiverId

`string`

#### Returns

`void`

***

### unregisterUnhandledMessageHandlers()

> **unregisterUnhandledMessageHandlers**: (`ownerId`) => `void`

#### Parameters

##### ownerId

`string`

#### Returns

`void`

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

### setDebug()

> **setDebug**(`value`): `void`

#### Parameters

##### value

`boolean`

#### Returns

`void`

#### Inherited from

`Emitter.setDebug`
