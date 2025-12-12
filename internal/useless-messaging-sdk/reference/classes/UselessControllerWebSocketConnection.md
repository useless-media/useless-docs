# UselessControllerWebSocketConnection<T>

## Extends

- [`UselessWebSocketMessagingConnection`](reference/classes/UselessWebSocketMessagingConnection.md)<`T`>

## Type Parameters

### T

`T` *extends* [`UselessControllerWebSocketConnectionEventList`](reference/interfaces/UselessControllerWebSocketConnectionEventList.md) = [`UselessControllerWebSocketConnectionEventList`](../interfaces/UselessControllerWebSocketConnectionEventList.md)

## Constructors

### Constructor

> **new UselessControllerWebSocketConnection**<`T`>(`args`, `emitterArgs?`): `UselessControllerWebSocketConnection`<`T`>

#### Parameters

##### args

[`UselessWebSocketMessagingConnectionArgs`](reference/interfaces/UselessWebSocketMessagingConnectionArgs.md)

##### emitterArgs?

`TEmitterOptions`

#### Returns

`UselessControllerWebSocketConnection`<`T`>

#### Overrides

[`UselessWebSocketMessagingConnection`](reference/classes/UselessWebSocketMessagingConnection.md).[`constructor`](UselessWebSocketMessagingConnection.md#constructor)

## Properties

### destroyed

> `protected` **destroyed**: `boolean`

#### Inherited from

[`UselessWebSocketMessagingConnection`](reference/classes/UselessWebSocketMessagingConnection.md).[`destroyed`](UselessWebSocketMessagingConnection.md#destroyed)

## Accessors

### isConnected

#### Get Signature

> **get** **isConnected**(): `boolean`

##### Returns

`boolean`

#### Inherited from

[`UselessWebSocketMessagingConnection`](reference/classes/UselessWebSocketMessagingConnection.md).[`isConnected`](UselessWebSocketMessagingConnection.md#isconnected)

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

[`UselessWebSocketMessagingConnection`](reference/classes/UselessWebSocketMessagingConnection.md).[`addEventListener`](UselessWebSocketMessagingConnection.md#addeventlistener)

***

### connected()

> **connected**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Inherited from

[`UselessWebSocketMessagingConnection`](reference/classes/UselessWebSocketMessagingConnection.md).[`connected`](UselessWebSocketMessagingConnection.md#connected)

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[`UselessWebSocketMessagingConnection`](reference/classes/UselessWebSocketMessagingConnection.md).[`destroy`](UselessWebSocketMessagingConnection.md#destroy)

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

[`UselessWebSocketMessagingConnection`](reference/classes/UselessWebSocketMessagingConnection.md).[`emit`](UselessWebSocketMessagingConnection.md#emit)

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

[`UselessWebSocketMessagingConnection`](reference/classes/UselessWebSocketMessagingConnection.md).[`emitAsync`](UselessWebSocketMessagingConnection.md#emitasync)

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

[`UselessWebSocketMessagingConnection`](reference/classes/UselessWebSocketMessagingConnection.md).[`ensureNotDestroyed`](UselessWebSocketMessagingConnection.md#ensurenotdestroyed)

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

[`UselessWebSocketMessagingConnection`](reference/classes/UselessWebSocketMessagingConnection.md).[`off`](UselessWebSocketMessagingConnection.md#off)

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

[`UselessWebSocketMessagingConnection`](reference/classes/UselessWebSocketMessagingConnection.md).[`on`](UselessWebSocketMessagingConnection.md#on)

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

[`UselessWebSocketMessagingConnection`](reference/classes/UselessWebSocketMessagingConnection.md).[`once`](UselessWebSocketMessagingConnection.md#once)

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

[`UselessWebSocketMessagingConnection`](reference/classes/UselessWebSocketMessagingConnection.md).[`removeEventListener`](UselessWebSocketMessagingConnection.md#removeeventlistener)

***

### sendAnyMessage()

> **sendAnyMessage**(`message`): `Promise`<`void`>

#### Parameters

##### message

`string` | `AnyMessage`

#### Returns

`Promise`<`void`>

#### Inherited from

[`UselessWebSocketMessagingConnection`](reference/classes/UselessWebSocketMessagingConnection.md).[`sendAnyMessage`](UselessWebSocketMessagingConnection.md#sendanymessage)

***

### sendMessage()

> **sendMessage**(`message`): `Promise`<`void`>

#### Parameters

##### message

[`UselessMessage`](reference/classes/UselessMessage.md)

#### Returns

`Promise`<`void`>

#### Inherited from

[`UselessWebSocketMessagingConnection`](reference/classes/UselessWebSocketMessagingConnection.md).[`sendMessage`](UselessWebSocketMessagingConnection.md#sendmessage)

***

### setDebug()

> **setDebug**(`value`): `void`

#### Parameters

##### value

`boolean`

#### Returns

`void`

#### Inherited from

[`UselessWebSocketMessagingConnection`](reference/classes/UselessWebSocketMessagingConnection.md).[`setDebug`](UselessWebSocketMessagingConnection.md#setdebug)
