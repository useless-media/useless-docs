# Emitter<T>

## Extended by

- [`ListenableListener`](reference/classes/ListenableListener.md)
- [`StateKeepingSession`](reference/classes/StateKeepingSession.md)
- [`Timer`](reference/classes/Timer.md)

## Type Parameters

### T

`T` *extends* [`EmitterEventList`](reference/interfaces/EmitterEventList.md) = { }

## Implements

- [`IEmitter`](reference/interfaces/IEmitter.md)<`T`>

## Constructors

### Constructor

> **new Emitter**<`T`>(`options?`): `Emitter`<`T`>

#### Parameters

##### options?

`Partial`<`TEmitterOptions`>

#### Returns

`Emitter`<`T`>

## Properties

### destroyed

> `protected` **destroyed**: `boolean` = `false`

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

[`IEmitter`](reference/interfaces/IEmitter.md).[`addEventListener`](../interfaces/IEmitter.md#addeventlistener)

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

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

[`IEmitter`](reference/interfaces/IEmitter.md).[`emit`](../interfaces/IEmitter.md#emit)

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

[`IEmitter`](reference/interfaces/IEmitter.md).[`emitAsync`](../interfaces/IEmitter.md#emitasync)

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

[`IEmitter`](reference/interfaces/IEmitter.md).[`off`](../interfaces/IEmitter.md#off)

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

[`IEmitter`](reference/interfaces/IEmitter.md).[`on`](../interfaces/IEmitter.md#on)

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

[`IEmitter`](reference/interfaces/IEmitter.md).[`once`](../interfaces/IEmitter.md#once)

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

[`IEmitter`](reference/interfaces/IEmitter.md).[`removeEventListener`](../interfaces/IEmitter.md#removeeventlistener)

***

### setDebug()

> **setDebug**(`value`): `void`

#### Parameters

##### value

`boolean`

#### Returns

`void`
