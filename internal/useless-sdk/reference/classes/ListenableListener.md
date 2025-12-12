# ListenableListener<T>

## Extends

- [`Emitter`](reference/classes/Emitter.md)<`T`>

## Type Parameters

### T

`T` *extends* [`EmitterEventList`](reference/interfaces/EmitterEventList.md)

## Constructors

### Constructor

> **new ListenableListener**<`T`>(`options?`): `ListenableListener`<`T`>

#### Parameters

##### options?

`TEmitterOptions`

#### Returns

`ListenableListener`<`T`>

#### Overrides

[`Emitter`](reference/classes/Emitter.md).[`constructor`](Emitter.md#constructor)

## Properties

### defaultListenerCollection?

> `protected` **defaultListenerCollection**?: `Record`<`string`, `TListener`>

***

### defaultTarget?

> `protected` **defaultTarget**?: `TTargetEmitter`

***

### destroyed

> `protected` **destroyed**: `boolean` = `false`

#### Inherited from

[`Emitter`](reference/classes/Emitter.md).[`destroyed`](Emitter.md#destroyed)

## Methods

### addEventListener()

> **addEventListener**<`K`>(`type`, `subscriber`): [`Emitter`](reference/classes/Emitter.md)<`T`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

[`Emitter`](reference/classes/Emitter.md)<`T`>

#### Inherited from

[`Emitter`](reference/classes/Emitter.md).[`addEventListener`](Emitter.md#addeventlistener)

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Overrides

[`Emitter`](reference/classes/Emitter.md).[`destroy`](Emitter.md#destroy)

***

### emit()

> **emit**<`K`>(`type`, `event?`): [`Emitter`](reference/classes/Emitter.md)<`T`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type

`K`

##### event?

`Optional`<`T`[`K`], `"type"`>

#### Returns

[`Emitter`](reference/classes/Emitter.md)<`T`>

#### Inherited from

[`Emitter`](reference/classes/Emitter.md).[`emit`](Emitter.md#emit)

***

### emitAsync()

> **emitAsync**<`K`>(`type`, `event?`): [`Emitter`](reference/classes/Emitter.md)<`T`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type

`K`

##### event?

`Optional`<`T`[`K`], `"type"`>

#### Returns

[`Emitter`](reference/classes/Emitter.md)<`T`>

#### Inherited from

[`Emitter`](reference/classes/Emitter.md).[`emitAsync`](Emitter.md#emitasync)

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

[`Emitter`](reference/classes/Emitter.md).[`ensureNotDestroyed`](Emitter.md#ensurenotdestroyed)

***

### listen()

> `protected` **listen**(`event`, `listener`, `target?`, `listenerCollection?`): `void`

#### Parameters

##### event

`string`

##### listener

`TListener`

##### target?

`TTargetEmitter`

##### listenerCollection?

`Record`<`string`, `TListener`>

#### Returns

`void`

***

### listenOnce()

> `protected` **listenOnce**(`event`, `listener`, `target?`, `listenerCollection?`): `void`

#### Parameters

##### event

`string`

##### listener

`TListener`

##### target?

`TTargetEmitter`

##### listenerCollection?

`Record`<`string`, `TListener`>

#### Returns

`void`

***

### off()

> **off**<`K`>(`type?`, `subscriber?`): [`Emitter`](reference/classes/Emitter.md)<`T`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type?

`K`

##### subscriber?

(`e`) => `void`

#### Returns

[`Emitter`](reference/classes/Emitter.md)<`T`>

#### Inherited from

[`Emitter`](reference/classes/Emitter.md).[`off`](Emitter.md#off)

***

### on()

> **on**<`K`>(`type`, `subscriber`): [`Emitter`](reference/classes/Emitter.md)<`T`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

[`Emitter`](reference/classes/Emitter.md)<`T`>

#### Inherited from

[`Emitter`](reference/classes/Emitter.md).[`on`](Emitter.md#on)

***

### once()

> **once**<`K`>(`type`, `subscriber`): [`Emitter`](reference/classes/Emitter.md)<`T`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

[`Emitter`](reference/classes/Emitter.md)<`T`>

#### Inherited from

[`Emitter`](reference/classes/Emitter.md).[`once`](Emitter.md#once)

***

### removeEventListener()

> **removeEventListener**<`K`>(`type?`, `subscriber?`): [`Emitter`](reference/classes/Emitter.md)<`T`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type?

`K`

##### subscriber?

(`e`) => `void`

#### Returns

[`Emitter`](reference/classes/Emitter.md)<`T`>

#### Inherited from

[`Emitter`](reference/classes/Emitter.md).[`removeEventListener`](Emitter.md#removeeventlistener)

***

### setDebug()

> **setDebug**(`value`): `void`

#### Parameters

##### value

`boolean`

#### Returns

`void`

#### Inherited from

[`Emitter`](reference/classes/Emitter.md).[`setDebug`](Emitter.md#setdebug)

***

### unlisten()

> `protected` **unlisten**(`target?`, `listenerCollection?`, `event?`): `void`

#### Parameters

##### target?

`TTargetEmitter`

##### listenerCollection?

`Record`<`string`, `TListener`>

##### event?

`string`

#### Returns

`void`
