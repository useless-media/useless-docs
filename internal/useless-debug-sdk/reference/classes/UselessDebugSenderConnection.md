# UselessDebugSenderConnection

## Extends

- `UselessSenderWebSocketConnection`<[`UselessDebugSenderConnectionEventList`](reference/interfaces/UselessDebugSenderConnectionEventList.md)>

## Constructors

### Constructor

> **new UselessDebugSenderConnection**(`args`): `UselessDebugSenderConnection`

#### Parameters

##### args

`UselessWebSocketMessagingConnectionArgs`

#### Returns

`UselessDebugSenderConnection`

#### Overrides

`UselessSenderWebSocketConnection<UselessDebugSenderConnectionEventList>.constructor`

## Properties

### destroyed

> `protected` **destroyed**: `boolean`

#### Inherited from

[`UselessDebugController`](reference/classes/UselessDebugController.md).[`destroyed`](UselessDebugController.md#destroyed)

## Accessors

### isConnected

#### Get Signature

> **get** **isConnected**(): `boolean`

##### Returns

`boolean`

#### Inherited from

`UselessSenderWebSocketConnection.isConnected`

## Methods

### addEventListener()

> **addEventListener**<`K`>(`type`, `subscriber`): `Emitter`<[`UselessDebugSenderConnectionEventList`](reference/interfaces/UselessDebugSenderConnectionEventList.md)>

#### Type Parameters

##### K

`K` *extends* keyof [`UselessDebugSenderConnectionEventList`](reference/interfaces/UselessDebugSenderConnectionEventList.md)

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

`Emitter`<[`UselessDebugSenderConnectionEventList`](reference/interfaces/UselessDebugSenderConnectionEventList.md)>

#### Inherited from

`UselessSenderWebSocketConnection.addEventListener`

***

### connected()

> **connected**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Inherited from

`UselessSenderWebSocketConnection.connected`

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Inherited from

`UselessSenderWebSocketConnection.destroy`

***

### emit()

> **emit**<`K`>(`type`, `event?`): `Emitter`<[`UselessDebugSenderConnectionEventList`](reference/interfaces/UselessDebugSenderConnectionEventList.md)>

#### Type Parameters

##### K

`K` *extends* keyof [`UselessDebugSenderConnectionEventList`](reference/interfaces/UselessDebugSenderConnectionEventList.md)

#### Parameters

##### type

`K`

##### event?

`Optional`<[`UselessDebugSenderConnectionEventList`](reference/interfaces/UselessDebugSenderConnectionEventList.md)[`K`], `"type"`>

#### Returns

`Emitter`<[`UselessDebugSenderConnectionEventList`](reference/interfaces/UselessDebugSenderConnectionEventList.md)>

#### Inherited from

`UselessSenderWebSocketConnection.emit`

***

### emitAsync()

> **emitAsync**<`K`>(`type`, `event?`): `Emitter`<[`UselessDebugSenderConnectionEventList`](reference/interfaces/UselessDebugSenderConnectionEventList.md)>

#### Type Parameters

##### K

`K` *extends* keyof [`UselessDebugSenderConnectionEventList`](reference/interfaces/UselessDebugSenderConnectionEventList.md)

#### Parameters

##### type

`K`

##### event?

`Optional`<[`UselessDebugSenderConnectionEventList`](reference/interfaces/UselessDebugSenderConnectionEventList.md)[`K`], `"type"`>

#### Returns

`Emitter`<[`UselessDebugSenderConnectionEventList`](reference/interfaces/UselessDebugSenderConnectionEventList.md)>

#### Inherited from

`UselessSenderWebSocketConnection.emitAsync`

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

`UselessSenderWebSocketConnection.ensureNotDestroyed`

***

### off()

> **off**<`K`>(`type?`, `subscriber?`): `Emitter`<[`UselessDebugSenderConnectionEventList`](reference/interfaces/UselessDebugSenderConnectionEventList.md)>

#### Type Parameters

##### K

`K` *extends* keyof [`UselessDebugSenderConnectionEventList`](reference/interfaces/UselessDebugSenderConnectionEventList.md)

#### Parameters

##### type?

`K`

##### subscriber?

(`e`) => `void`

#### Returns

`Emitter`<[`UselessDebugSenderConnectionEventList`](reference/interfaces/UselessDebugSenderConnectionEventList.md)>

#### Inherited from

`UselessSenderWebSocketConnection.off`

***

### on()

> **on**<`K`>(`type`, `subscriber`): `Emitter`<[`UselessDebugSenderConnectionEventList`](reference/interfaces/UselessDebugSenderConnectionEventList.md)>

#### Type Parameters

##### K

`K` *extends* keyof [`UselessDebugSenderConnectionEventList`](reference/interfaces/UselessDebugSenderConnectionEventList.md)

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

`Emitter`<[`UselessDebugSenderConnectionEventList`](reference/interfaces/UselessDebugSenderConnectionEventList.md)>

#### Inherited from

`UselessSenderWebSocketConnection.on`

***

### once()

> **once**<`K`>(`type`, `subscriber`): `Emitter`<[`UselessDebugSenderConnectionEventList`](reference/interfaces/UselessDebugSenderConnectionEventList.md)>

#### Type Parameters

##### K

`K` *extends* keyof [`UselessDebugSenderConnectionEventList`](reference/interfaces/UselessDebugSenderConnectionEventList.md)

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

`Emitter`<[`UselessDebugSenderConnectionEventList`](reference/interfaces/UselessDebugSenderConnectionEventList.md)>

#### Inherited from

`UselessSenderWebSocketConnection.once`

***

### removeEventListener()

> **removeEventListener**<`K`>(`type?`, `subscriber?`): `Emitter`<[`UselessDebugSenderConnectionEventList`](reference/interfaces/UselessDebugSenderConnectionEventList.md)>

#### Type Parameters

##### K

`K` *extends* keyof [`UselessDebugSenderConnectionEventList`](reference/interfaces/UselessDebugSenderConnectionEventList.md)

#### Parameters

##### type?

`K`

##### subscriber?

(`e`) => `void`

#### Returns

`Emitter`<[`UselessDebugSenderConnectionEventList`](reference/interfaces/UselessDebugSenderConnectionEventList.md)>

#### Inherited from

`UselessSenderWebSocketConnection.removeEventListener`

***

### sendAnyMessage()

> **sendAnyMessage**(`message`): `Promise`<`void`>

#### Parameters

##### message

`string` | `AnyMessage`

#### Returns

`Promise`<`void`>

#### Inherited from

`UselessSenderWebSocketConnection.sendAnyMessage`

***

### sendMessage()

> **sendMessage**(`message`): `Promise`<`void`>

#### Parameters

##### message

`UselessMessage`

#### Returns

`Promise`<`void`>

#### Inherited from

`UselessSenderWebSocketConnection.sendMessage`

***

### setDebug()

> **setDebug**(`value`): `void`

#### Parameters

##### value

`boolean`

#### Returns

`void`

#### Inherited from

`UselessSenderWebSocketConnection.setDebug`
