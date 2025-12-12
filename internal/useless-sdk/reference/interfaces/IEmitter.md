# IEmitter<T>

## Type Parameters

### T

`T` *extends* [`EmitterEventList`](reference/interfaces/EmitterEventList.md) = { }

## Methods

### addEventListener()

> **addEventListener**<`K`>(`type`, `subscriber`): `IEmitter`<`T`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

`IEmitter`<`T`>

***

### emit()

> **emit**<`K`>(`type`, `event?`): `IEmitter`<`T`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type

`K`

##### event?

`Optional`<`T`[`K`], `"type"`>

#### Returns

`IEmitter`<`T`>

***

### emitAsync()

> **emitAsync**<`K`>(`type`, `event?`): `IEmitter`<`T`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type

`K`

##### event?

`Optional`<`T`[`K`], `"type"`>

#### Returns

`IEmitter`<`T`>

***

### off()

> **off**<`K`>(`type?`, `subscriber?`): `IEmitter`<`T`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type?

`K`

##### subscriber?

(`e`) => `void`

#### Returns

`IEmitter`<`T`>

***

### on()

> **on**<`K`>(`type`, `subscriber`): `IEmitter`<`T`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

`IEmitter`<`T`>

***

### once()

> **once**<`K`>(`type`, `subscriber`): `IEmitter`<`T`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

`IEmitter`<`T`>

***

### removeEventListener()

> **removeEventListener**<`K`>(`type?`, `subscriber?`): `IEmitter`<`T`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type?

`K`

##### subscriber?

(`e`) => `void`

#### Returns

`IEmitter`<`T`>
