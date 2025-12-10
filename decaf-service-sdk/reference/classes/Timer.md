# Timer

## Extends

- `Emitter`<`TimerEventList`>

## Constructors

### Constructor

> **new Timer**(`args?`): `Timer`

#### Parameters

##### args?

`TimerArgs`

#### Returns

`Timer`

#### Overrides

`Emitter<TimerEventList>.constructor`

## Properties

### active

> **active**: `boolean`

***

### destroyed

> `protected` **destroyed**: `boolean`

#### Inherited from

[`PlaybackSession`](reference/interfaces/PlaybackSession.md).[`destroyed`](../interfaces/PlaybackSession.md#destroyed)

***

### started

> **started**: `boolean`

***

### value

> **value**: `number`

## Methods

### addEventListener()

> **addEventListener**<`K`>(`type`, `subscriber`): `Emitter`<`TimerEventList`>

#### Type Parameters

##### K

`K` *extends* keyof `TimerEventList`

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

`Emitter`<`TimerEventList`>

#### Inherited from

`Emitter.addEventListener`

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Overrides

`Emitter.destroy`

***

### emit()

> **emit**<`K`>(`type`, `event?`): `Emitter`<`TimerEventList`>

#### Type Parameters

##### K

`K` *extends* keyof `TimerEventList`

#### Parameters

##### type

`K`

##### event?

`Optional`<`TimerEventList`[`K`], `"type"`>

#### Returns

`Emitter`<`TimerEventList`>

#### Inherited from

`Emitter.emit`

***

### emitAsync()

> **emitAsync**<`K`>(`type`, `event?`): `Emitter`<`TimerEventList`>

#### Type Parameters

##### K

`K` *extends* keyof `TimerEventList`

#### Parameters

##### type

`K`

##### event?

`Optional`<`TimerEventList`[`K`], `"type"`>

#### Returns

`Emitter`<`TimerEventList`>

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

> **off**<`K`>(`type?`, `subscriber?`): `Emitter`<`TimerEventList`>

#### Type Parameters

##### K

`K` *extends* keyof `TimerEventList`

#### Parameters

##### type?

`K`

##### subscriber?

(`e`) => `void`

#### Returns

`Emitter`<`TimerEventList`>

#### Inherited from

`Emitter.off`

***

### on()

> **on**<`K`>(`type`, `subscriber`): `Emitter`<`TimerEventList`>

#### Type Parameters

##### K

`K` *extends* keyof `TimerEventList`

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

`Emitter`<`TimerEventList`>

#### Inherited from

`Emitter.on`

***

### once()

> **once**<`K`>(`type`, `subscriber`): `Emitter`<`TimerEventList`>

#### Type Parameters

##### K

`K` *extends* keyof `TimerEventList`

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

`Emitter`<`TimerEventList`>

#### Inherited from

`Emitter.once`

***

### pause()

> **pause**(): `void`

#### Returns

`void`

***

### removeEventListener()

> **removeEventListener**<`K`>(`type?`, `subscriber?`): `Emitter`<`TimerEventList`>

#### Type Parameters

##### K

`K` *extends* keyof `TimerEventList`

#### Parameters

##### type?

`K`

##### subscriber?

(`e`) => `void`

#### Returns

`Emitter`<`TimerEventList`>

#### Inherited from

`Emitter.removeEventListener`

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

`Emitter.setDebug`

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
