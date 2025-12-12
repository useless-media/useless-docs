# UselessMessagingNoOpConnection<TEventList, TConnectionArgs, TMessage>

## Extends

- [`UselessMessagingConnection`](reference/classes/UselessMessagingConnection.md)<`TEventList`, `TConnectionArgs`, `TMessage`>

## Type Parameters

### TEventList

`TEventList` *extends* [`UselessMessagingConnectionEventList`](reference/interfaces/UselessMessagingConnectionEventList.md)

### TConnectionArgs

`TConnectionArgs` *extends* [`UselessMessagingConnectionArgs`](reference/interfaces/UselessMessagingConnectionArgs.md) = [`UselessMessagingConnectionArgs`](../interfaces/UselessMessagingConnectionArgs.md)

### TMessage

`TMessage` *extends* [`UselessMessage`](reference/classes/UselessMessage.md) = [`UselessMessage`](UselessMessage.md)

## Constructors

### Constructor

> **new UselessMessagingNoOpConnection**<`TEventList`, `TConnectionArgs`, `TMessage`>(`args?`): `UselessMessagingNoOpConnection`<`TEventList`, `TConnectionArgs`, `TMessage`>

#### Parameters

##### args?

`TConnectionArgs`

#### Returns

`UselessMessagingNoOpConnection`<`TEventList`, `TConnectionArgs`, `TMessage`>

#### Overrides

[`UselessMessagingConnection`](reference/classes/UselessMessagingConnection.md).[`constructor`](UselessMessagingConnection.md#constructor)

## Properties

### destroyed

> `protected` **destroyed**: `boolean`

#### Inherited from

[`UselessMessagingConnection`](reference/classes/UselessMessagingConnection.md).[`destroyed`](UselessMessagingConnection.md#destroyed)

***

### isConnected

> **isConnected**: `boolean` = `false`

#### Overrides

[`UselessMessagingConnection`](reference/classes/UselessMessagingConnection.md).[`isConnected`](UselessMessagingConnection.md#isconnected)

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

[`UselessMessagingConnection`](reference/classes/UselessMessagingConnection.md).[`addEventListener`](UselessMessagingConnection.md#addeventlistener)

***

### connected()

> **connected**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Overrides

[`UselessMessagingConnection`](reference/classes/UselessMessagingConnection.md).[`connected`](UselessMessagingConnection.md#connected)

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[`UselessMessagingConnection`](reference/classes/UselessMessagingConnection.md).[`destroy`](UselessMessagingConnection.md#destroy)

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

[`UselessMessagingConnection`](reference/classes/UselessMessagingConnection.md).[`emit`](UselessMessagingConnection.md#emit)

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

[`UselessMessagingConnection`](reference/classes/UselessMessagingConnection.md).[`emitAsync`](UselessMessagingConnection.md#emitasync)

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

[`UselessMessagingConnection`](reference/classes/UselessMessagingConnection.md).[`ensureNotDestroyed`](UselessMessagingConnection.md#ensurenotdestroyed)

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

[`UselessMessagingConnection`](reference/classes/UselessMessagingConnection.md).[`off`](UselessMessagingConnection.md#off)

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

[`UselessMessagingConnection`](reference/classes/UselessMessagingConnection.md).[`on`](UselessMessagingConnection.md#on)

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

[`UselessMessagingConnection`](reference/classes/UselessMessagingConnection.md).[`once`](UselessMessagingConnection.md#once)

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

[`UselessMessagingConnection`](reference/classes/UselessMessagingConnection.md).[`removeEventListener`](UselessMessagingConnection.md#removeeventlistener)

***

### sendAnyMessage()

> **sendAnyMessage**(`message`): `Promise`<`void`>

#### Parameters

##### message

`string` | `AnyMessage`

#### Returns

`Promise`<`void`>

#### Overrides

[`UselessMessagingConnection`](reference/classes/UselessMessagingConnection.md).[`sendAnyMessage`](UselessMessagingConnection.md#sendanymessage)

***

### sendMessage()

> **sendMessage**(`message`): `Promise`<`void`>

#### Parameters

##### message

`TMessage`

#### Returns

`Promise`<`void`>

#### Overrides

[`UselessMessagingConnection`](reference/classes/UselessMessagingConnection.md).[`sendMessage`](UselessMessagingConnection.md#sendmessage)

***

### setDebug()

> **setDebug**(`value`): `void`

#### Parameters

##### value

`boolean`

#### Returns

`void`

#### Inherited from

[`UselessMessagingConnection`](reference/classes/UselessMessagingConnection.md).[`setDebug`](UselessMessagingConnection.md#setdebug)
