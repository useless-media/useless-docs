# UselessMessagingConnection<TEventList, TConnectionArgs, TMessage>

## Extends

- `Emitter`<`TEventList`>

## Extended by

- [`UselessMessagingNoOpConnection`](reference/classes/UselessMessagingNoOpConnection.md)
- [`UselessWebSocketMessagingConnection`](reference/classes/UselessWebSocketMessagingConnection.md)

## Type Parameters

### TEventList

`TEventList` *extends* [`UselessMessagingConnectionEventList`](reference/interfaces/UselessMessagingConnectionEventList.md)

### TConnectionArgs

`TConnectionArgs` *extends* [`UselessMessagingConnectionArgs`](reference/interfaces/UselessMessagingConnectionArgs.md) = [`UselessMessagingConnectionArgs`](../interfaces/UselessMessagingConnectionArgs.md)

### TMessage

`TMessage` *extends* [`UselessMessage`](reference/classes/UselessMessage.md) = [`UselessMessage`](UselessMessage.md)

## Implements

- [`IMessagingConnection`](reference/interfaces/IMessagingConnection.md)<`TEventList`, `TMessage`>

## Constructors

### Constructor

> `protected` **new UselessMessagingConnection**<`TEventList`, `TConnectionArgs`, `TMessage`>(`args?`, `emitterArgs?`): `UselessMessagingConnection`<`TEventList`, `TConnectionArgs`, `TMessage`>

#### Parameters

##### args?

`TConnectionArgs`

##### emitterArgs?

`TEmitterOptions`

#### Returns

`UselessMessagingConnection`<`TEventList`, `TConnectionArgs`, `TMessage`>

#### Overrides

`Emitter<TEventList>.constructor`

## Properties

### destroyed

> `protected` **destroyed**: `boolean`

#### Implementation of

[`IMessagingConnection`](reference/interfaces/IMessagingConnection.md).[`destroyed`](../interfaces/IMessagingConnection.md#destroyed)

#### Inherited from

`Emitter.destroyed`

***

### isConnected

> `abstract` **isConnected**: `boolean`

#### Implementation of

[`IMessagingConnection`](reference/interfaces/IMessagingConnection.md).[`isConnected`](../interfaces/IMessagingConnection.md#isconnected)

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

#### Implementation of

[`IMessagingConnection`](reference/interfaces/IMessagingConnection.md).[`addEventListener`](../interfaces/IMessagingConnection.md#addeventlistener)

#### Inherited from

`Emitter.addEventListener`

***

### connected()

> `abstract` **connected**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Implementation of

[`IMessagingConnection`](reference/interfaces/IMessagingConnection.md).[`connected`](../interfaces/IMessagingConnection.md#connected)

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[`IMessagingConnection`](reference/interfaces/IMessagingConnection.md).[`destroy`](../interfaces/IMessagingConnection.md#destroy)

#### Inherited from

`Emitter.destroy`

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

#### Implementation of

[`IMessagingConnection`](reference/interfaces/IMessagingConnection.md).[`emit`](../interfaces/IMessagingConnection.md#emit)

#### Inherited from

`Emitter.emit`

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

#### Implementation of

[`IMessagingConnection`](reference/interfaces/IMessagingConnection.md).[`emitAsync`](../interfaces/IMessagingConnection.md#emitasync)

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

[`IMessagingConnection`](reference/interfaces/IMessagingConnection.md).[`ensureNotDestroyed`](../interfaces/IMessagingConnection.md#ensurenotdestroyed)

#### Inherited from

`Emitter.ensureNotDestroyed`

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

#### Implementation of

[`IMessagingConnection`](reference/interfaces/IMessagingConnection.md).[`off`](../interfaces/IMessagingConnection.md#off)

#### Inherited from

`Emitter.off`

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

#### Implementation of

[`IMessagingConnection`](reference/interfaces/IMessagingConnection.md).[`on`](../interfaces/IMessagingConnection.md#on)

#### Inherited from

`Emitter.on`

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

#### Implementation of

[`IMessagingConnection`](reference/interfaces/IMessagingConnection.md).[`once`](../interfaces/IMessagingConnection.md#once)

#### Inherited from

`Emitter.once`

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

#### Implementation of

[`IMessagingConnection`](reference/interfaces/IMessagingConnection.md).[`removeEventListener`](../interfaces/IMessagingConnection.md#removeeventlistener)

#### Inherited from

`Emitter.removeEventListener`

***

### sendAnyMessage()

> `abstract` **sendAnyMessage**(`message`): `Promise`<`void`>

#### Parameters

##### message

`string` | `AnyMessage`

#### Returns

`Promise`<`void`>

***

### sendMessage()

> `abstract` **sendMessage**(`message`): `Promise`<`void`>

#### Parameters

##### message

`TMessage`

#### Returns

`Promise`<`void`>

#### Implementation of

`IMessagingConnection.sendMessage`

***

### setDebug()

> **setDebug**(`value`): `void`

#### Parameters

##### value

`boolean`

#### Returns

`void`

#### Implementation of

[`IMessagingConnection`](reference/interfaces/IMessagingConnection.md).[`setDebug`](../interfaces/IMessagingConnection.md#setdebug)

#### Inherited from

`Emitter.setDebug`
