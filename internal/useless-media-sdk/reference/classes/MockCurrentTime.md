# MockCurrentTime

## Extends

- `Emitter`<[`MockCurrentTimeEventPayloads`](reference/interfaces/MockCurrentTimeEventPayloads.md)>

## Constructors

### Constructor

> **new MockCurrentTime**(): `MockCurrentTime`

#### Returns

`MockCurrentTime`

#### Overrides

`Emitter<MockCurrentTimeEventPayloads>.constructor`

## Properties

### destroyed

> `protected` **destroyed**: `boolean`

#### Inherited from

`Emitter.destroyed`

## Methods

### addEventListener()

> **addEventListener**<`K`>(`type`, `subscriber`): `Emitter`<[`MockCurrentTimeEventPayloads`](reference/interfaces/MockCurrentTimeEventPayloads.md)>

#### Type Parameters

##### K

`K` *extends* keyof [`MockCurrentTimeEventPayloads`](reference/interfaces/MockCurrentTimeEventPayloads.md)

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

`Emitter`<[`MockCurrentTimeEventPayloads`](reference/interfaces/MockCurrentTimeEventPayloads.md)>

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

> **emit**<`K`>(`type`, `event?`): `Emitter`<[`MockCurrentTimeEventPayloads`](reference/interfaces/MockCurrentTimeEventPayloads.md)>

#### Type Parameters

##### K

`K` *extends* keyof [`MockCurrentTimeEventPayloads`](reference/interfaces/MockCurrentTimeEventPayloads.md)

#### Parameters

##### type

`K`

##### event?

`Optional`<[`MockCurrentTimeEventPayloads`](reference/interfaces/MockCurrentTimeEventPayloads.md)[`K`], `"type"`>

#### Returns

`Emitter`<[`MockCurrentTimeEventPayloads`](reference/interfaces/MockCurrentTimeEventPayloads.md)>

#### Inherited from

`Emitter.emit`

***

### emitAsync()

> **emitAsync**<`K`>(`type`, `event?`): `Emitter`<[`MockCurrentTimeEventPayloads`](reference/interfaces/MockCurrentTimeEventPayloads.md)>

#### Type Parameters

##### K

`K` *extends* keyof [`MockCurrentTimeEventPayloads`](reference/interfaces/MockCurrentTimeEventPayloads.md)

#### Parameters

##### type

`K`

##### event?

`Optional`<[`MockCurrentTimeEventPayloads`](reference/interfaces/MockCurrentTimeEventPayloads.md)[`K`], `"type"`>

#### Returns

`Emitter`<[`MockCurrentTimeEventPayloads`](reference/interfaces/MockCurrentTimeEventPayloads.md)>

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

> **off**<`K`>(`type?`, `subscriber?`): `Emitter`<[`MockCurrentTimeEventPayloads`](reference/interfaces/MockCurrentTimeEventPayloads.md)>

#### Type Parameters

##### K

`K` *extends* keyof [`MockCurrentTimeEventPayloads`](reference/interfaces/MockCurrentTimeEventPayloads.md)

#### Parameters

##### type?

`K`

##### subscriber?

(`e`) => `void`

#### Returns

`Emitter`<[`MockCurrentTimeEventPayloads`](reference/interfaces/MockCurrentTimeEventPayloads.md)>

#### Inherited from

`Emitter.off`

***

### on()

> **on**<`K`>(`type`, `subscriber`): `Emitter`<[`MockCurrentTimeEventPayloads`](reference/interfaces/MockCurrentTimeEventPayloads.md)>

#### Type Parameters

##### K

`K` *extends* keyof [`MockCurrentTimeEventPayloads`](reference/interfaces/MockCurrentTimeEventPayloads.md)

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

`Emitter`<[`MockCurrentTimeEventPayloads`](reference/interfaces/MockCurrentTimeEventPayloads.md)>

#### Inherited from

`Emitter.on`

***

### once()

> **once**<`K`>(`type`, `subscriber`): `Emitter`<[`MockCurrentTimeEventPayloads`](reference/interfaces/MockCurrentTimeEventPayloads.md)>

#### Type Parameters

##### K

`K` *extends* keyof [`MockCurrentTimeEventPayloads`](reference/interfaces/MockCurrentTimeEventPayloads.md)

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

`Emitter`<[`MockCurrentTimeEventPayloads`](reference/interfaces/MockCurrentTimeEventPayloads.md)>

#### Inherited from

`Emitter.once`

***

### pause()

> **pause**(): `void`

#### Returns

`void`

***

### removeEventListener()

> **removeEventListener**<`K`>(`type?`, `subscriber?`): `Emitter`<[`MockCurrentTimeEventPayloads`](reference/interfaces/MockCurrentTimeEventPayloads.md)>

#### Type Parameters

##### K

`K` *extends* keyof [`MockCurrentTimeEventPayloads`](reference/interfaces/MockCurrentTimeEventPayloads.md)

#### Parameters

##### type?

`K`

##### subscriber?

(`e`) => `void`

#### Returns

`Emitter`<[`MockCurrentTimeEventPayloads`](reference/interfaces/MockCurrentTimeEventPayloads.md)>

#### Inherited from

`Emitter.removeEventListener`

***

### reset()

> **reset**(): `void`

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

> **start**(`realCurrentTime`): `void`

#### Parameters

##### realCurrentTime

`number` = `0`

#### Returns

`void`

***

### stop()

> **stop**(): `void`

#### Returns

`void`

***

### update()

> **update**(`realCurrentTime?`): `void`

#### Parameters

##### realCurrentTime?

`number`

#### Returns

`void`
