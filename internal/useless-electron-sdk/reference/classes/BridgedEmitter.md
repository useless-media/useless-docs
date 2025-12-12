# BridgedEmitter<T>

## Extends

- `Emitter`<`T`>

## Type Parameters

### T

`T` *extends* [`BridgedEmitterEventList`](reference/interfaces/BridgedEmitterEventList.md) = [`BridgedEmitterEventList`](../interfaces/BridgedEmitterEventList.md)

## Constructors

### Constructor

> **new BridgedEmitter**<`T`>(`ipcSender`, `emitter`, `channel`): `BridgedEmitter`<`T`>

#### Parameters

##### ipcSender

[`IpcSender`](reference/interfaces/IpcSender.md)

##### emitter

`EventEmitter`

##### channel

[`Channels`](reference/enumerations/Channels.md)

#### Returns

`BridgedEmitter`<`T`>

#### Overrides

`Emitter<T>.constructor`

## Properties

### destroyed

> `protected` **destroyed**: `boolean`

#### Inherited from

`BridgedEmitter`.[`destroyed`](reference/classes/#destroyed)

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

`Emitter.addEventListener`

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Inherited from

`Emitter.destroy`

***

### emit()

> **emit**<`K`>(`type`, `event`): `Emitter`<`T`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type

`K`

##### event

`Optional`<`T`[`K`], `"type"`>

#### Returns

`Emitter`<`T`>

#### Overrides

`Emitter.emit`

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

`Emitter.off`

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

`Emitter.on`

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

`Emitter.once`

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

`Emitter.removeEventListener`

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
