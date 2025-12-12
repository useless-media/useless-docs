# Timer

## Extends

- [`Emitter`](Emitter.md)<[`TimerEventList`](reference/interfaces/TimerEventList.md)>

## Constructors

### Constructor

> **new Timer**(`args?`): `Timer`

#### Parameters

##### args?

`TimerArgs`

#### Returns

`Timer`

#### Overrides

[`Emitter`](reference/classes/Emitter.md).[`constructor`](Emitter.md#constructor)

## Properties

### active

> **active**: `boolean` = `false`

***

### destroyed

> `protected` **destroyed**: `boolean` = `false`

#### Inherited from

[`Emitter`](reference/classes/Emitter.md).[`destroyed`](Emitter.md#destroyed)

***

### started

> **started**: `boolean` = `false`

***

### value

> **value**: `number` = `1`

## Methods

### addEventListener()

> **addEventListener**<`K`>(`type`, `subscriber`): [`Emitter`](Emitter.md)<[`TimerEventList`](reference/interfaces/TimerEventList.md)>

#### Type Parameters

##### K

`K` *extends* keyof [`TimerEventList`](reference/interfaces/TimerEventList.md)

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

[`Emitter`](Emitter.md)<[`TimerEventList`](reference/interfaces/TimerEventList.md)>

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

> **emit**<`K`>(`type`, `event?`): [`Emitter`](Emitter.md)<[`TimerEventList`](reference/interfaces/TimerEventList.md)>

#### Type Parameters

##### K

`K` *extends* keyof [`TimerEventList`](reference/interfaces/TimerEventList.md)

#### Parameters

##### type

`K`

##### event?

`Optional`<[`TimerEventList`](reference/interfaces/TimerEventList.md)[`K`], `"type"`>

#### Returns

[`Emitter`](Emitter.md)<[`TimerEventList`](reference/interfaces/TimerEventList.md)>

#### Inherited from

[`Emitter`](reference/classes/Emitter.md).[`emit`](Emitter.md#emit)

***

### emitAsync()

> **emitAsync**<`K`>(`type`, `event?`): [`Emitter`](Emitter.md)<[`TimerEventList`](reference/interfaces/TimerEventList.md)>

#### Type Parameters

##### K

`K` *extends* keyof [`TimerEventList`](reference/interfaces/TimerEventList.md)

#### Parameters

##### type

`K`

##### event?

`Optional`<[`TimerEventList`](reference/interfaces/TimerEventList.md)[`K`], `"type"`>

#### Returns

[`Emitter`](Emitter.md)<[`TimerEventList`](reference/interfaces/TimerEventList.md)>

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

### off()

> **off**<`K`>(`type?`, `subscriber?`): [`Emitter`](Emitter.md)<[`TimerEventList`](reference/interfaces/TimerEventList.md)>

#### Type Parameters

##### K

`K` *extends* keyof [`TimerEventList`](reference/interfaces/TimerEventList.md)

#### Parameters

##### type?

`K`

##### subscriber?

(`e`) => `void`

#### Returns

[`Emitter`](Emitter.md)<[`TimerEventList`](reference/interfaces/TimerEventList.md)>

#### Inherited from

[`Emitter`](reference/classes/Emitter.md).[`off`](Emitter.md#off)

***

### on()

> **on**<`K`>(`type`, `subscriber`): [`Emitter`](Emitter.md)<[`TimerEventList`](reference/interfaces/TimerEventList.md)>

#### Type Parameters

##### K

`K` *extends* keyof [`TimerEventList`](reference/interfaces/TimerEventList.md)

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

[`Emitter`](Emitter.md)<[`TimerEventList`](reference/interfaces/TimerEventList.md)>

#### Inherited from

[`Emitter`](reference/classes/Emitter.md).[`on`](Emitter.md#on)

***

### once()

> **once**<`K`>(`type`, `subscriber`): [`Emitter`](Emitter.md)<[`TimerEventList`](reference/interfaces/TimerEventList.md)>

#### Type Parameters

##### K

`K` *extends* keyof [`TimerEventList`](reference/interfaces/TimerEventList.md)

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

[`Emitter`](Emitter.md)<[`TimerEventList`](reference/interfaces/TimerEventList.md)>

#### Inherited from

[`Emitter`](reference/classes/Emitter.md).[`once`](Emitter.md#once)

***

### pause()

> **pause**(): `void`

#### Returns

`void`

***

### removeEventListener()

> **removeEventListener**<`K`>(`type?`, `subscriber?`): [`Emitter`](Emitter.md)<[`TimerEventList`](reference/interfaces/TimerEventList.md)>

#### Type Parameters

##### K

`K` *extends* keyof [`TimerEventList`](reference/interfaces/TimerEventList.md)

#### Parameters

##### type?

`K`

##### subscriber?

(`e`) => `void`

#### Returns

[`Emitter`](Emitter.md)<[`TimerEventList`](reference/interfaces/TimerEventList.md)>

#### Inherited from

[`Emitter`](reference/classes/Emitter.md).[`removeEventListener`](Emitter.md#removeeventlistener)

***

### reset()

> **reset**(): `void`

#### Returns

`void`

***

### restart()

> **restart**(): `void`

#### Returns

`void`

***

### resume()

> **resume**(): `void`

#### Returns

`void`

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

### start()

> **start**(): `void`

#### Returns

`void`

***

### stop()

> **stop**(): `void`

#### Returns

`void`
