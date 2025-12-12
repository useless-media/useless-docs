# StateKeepingSession<TState, TEventList>

## Extends

- [`Emitter`](reference/classes/Emitter.md)<`TEventList`>

## Type Parameters

### TState

`TState` *extends* [`StateWithId`](reference/interfaces/StateWithId.md)

### TEventList

`TEventList` *extends* [`SessionEventPayloads`](reference/interfaces/SessionEventPayloads.md)<`TState`> | [`EmitterEventList`](../interfaces/EmitterEventList.md) = [`SessionEventPayloads`](../interfaces/SessionEventPayloads.md)<`TState`>

## Constructors

### Constructor

> `protected` **new StateKeepingSession**<`TState`, `TEventList`>(`id`, `name`): `StateKeepingSession`<`TState`, `TEventList`>

#### Parameters

##### id

`string`

##### name

`string`

#### Returns

`StateKeepingSession`<`TState`, `TEventList`>

#### Overrides

[`Emitter`](reference/classes/Emitter.md).[`constructor`](Emitter.md#constructor)

## Properties

### changes

> `protected` **changes**: `DeepPartial`<`TState`>

***

### deletedPaths

> `protected` **deletedPaths**: `string`[] = `[]`

***

### destroyed

> `protected` **destroyed**: `boolean` = `false`

#### Inherited from

[`Emitter`](reference/classes/Emitter.md).[`destroyed`](Emitter.md#destroyed)

***

### events

> `protected` **events**: `string`[] = `[]`

***

### notifyChange

> `readonly` **notifyChange**: `TThrottledFunction`

***

### notifyChangeEvery15Seconds

> `readonly` **notifyChangeEvery15Seconds**: `TThrottledFunction`

***

### state

> `protected` `readonly` **state**: `TState`

## Methods

### addEventListener()

> **addEventListener**<`K`>(`type`, `subscriber`): [`Emitter`](reference/classes/Emitter.md)<`TEventList`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

[`Emitter`](reference/classes/Emitter.md)<`TEventList`>

#### Inherited from

[`Emitter`](reference/classes/Emitter.md).[`addEventListener`](Emitter.md#addeventlistener)

***

### commitChange()

> `protected` **commitChange**(`change`, ...`events`): `void`

#### Parameters

##### change

`DeepPartial`<`TState`>

##### events

...`string`[]

#### Returns

`void`

***

### commitChangeWithoutNotification()

> `protected` **commitChangeWithoutNotification**(`change`, ...`events`): `void`

Note: Use commitChangeWithoutNotification() carefully. It should always be followed by at least one standard
commitChange() within the same update to ensure that no immediate StateChanges are delayed!

#### Parameters

##### change

`DeepPartial`<`TState`>

##### events

...`string`[]

#### Returns

`void`

***

### commitDeleteAndChange()

> `protected` **commitDeleteAndChange**(`change`, `pathsToDelete`, ...`events`): `string`[]

#### Parameters

##### change

`DeepPartial`<`TState`>

##### pathsToDelete

`string`[]

##### events

...`string`[]

#### Returns

`string`[]

***

### commitDeleteAndChangeWithoutNotification()

> `protected` **commitDeleteAndChangeWithoutNotification**(`change`, `pathsToDelete`, ...`events`): `string`[]

#### Parameters

##### change

`DeepPartial`<`TState`>

##### pathsToDelete

`string`[]

##### events

...`string`[]

#### Returns

`string`[]

***

### commitDeletedPath()

> `protected` **commitDeletedPath**(`path`): `void`

#### Parameters

##### path

`string`

#### Returns

`void`

***

### commitEvent()

> `protected` **commitEvent**(`event`): `void`

#### Parameters

##### event

`string`

#### Returns

`void`

***

### destroy()

> **destroy**(`finalState?`, `eventKeys?`): `void`

#### Parameters

##### finalState?

`TState`

##### eventKeys?

`string`[]

#### Returns

`void`

#### Overrides

[`Emitter`](reference/classes/Emitter.md).[`destroy`](Emitter.md#destroy)

***

### emit()

> **emit**<`K`>(`type`, `event?`): [`Emitter`](reference/classes/Emitter.md)<`TEventList`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type

`K`

##### event?

`Optional`<`TEventList`[`K`], `"type"`>

#### Returns

[`Emitter`](reference/classes/Emitter.md)<`TEventList`>

#### Inherited from

[`Emitter`](reference/classes/Emitter.md).[`emit`](Emitter.md#emit)

***

### emitAsync()

> **emitAsync**<`K`>(`type`, `event?`): [`Emitter`](reference/classes/Emitter.md)<`TEventList`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type

`K`

##### event?

`Optional`<`TEventList`[`K`], `"type"`>

#### Returns

[`Emitter`](reference/classes/Emitter.md)<`TEventList`>

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

### getCleanState()

> `abstract` **getCleanState**(): `TState`

#### Returns

`TState`

***

### getId()

> **getId**(): `string`

#### Returns

`string`

***

### getState()

> **getState**(): `TState`

#### Returns

`TState`

***

### notifyImmediateBulkedChanges()

> `protected` **notifyImmediateBulkedChanges**(): `void`

#### Returns

`void`

***

### notifyImmediateChange()

> `protected` **notifyImmediateChange**(`changes`, `deletedPaths`, `events`): `void`

#### Parameters

##### changes

`DeepPartial`<`TState`>

##### deletedPaths

`string`[]

##### events

`string`[]

#### Returns

`void`

***

### off()

> **off**<`K`>(`type?`, `subscriber?`): [`Emitter`](reference/classes/Emitter.md)<`TEventList`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type?

`K`

##### subscriber?

(`e`) => `void`

#### Returns

[`Emitter`](reference/classes/Emitter.md)<`TEventList`>

#### Inherited from

[`Emitter`](reference/classes/Emitter.md).[`off`](Emitter.md#off)

***

### on()

> **on**<`K`>(`type`, `subscriber`): [`Emitter`](reference/classes/Emitter.md)<`TEventList`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

[`Emitter`](reference/classes/Emitter.md)<`TEventList`>

#### Inherited from

[`Emitter`](reference/classes/Emitter.md).[`on`](Emitter.md#on)

***

### once()

> **once**<`K`>(`type`, `subscriber`): [`Emitter`](reference/classes/Emitter.md)<`TEventList`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

[`Emitter`](reference/classes/Emitter.md)<`TEventList`>

#### Inherited from

[`Emitter`](reference/classes/Emitter.md).[`once`](Emitter.md#once)

***

### removeEventListener()

> **removeEventListener**<`K`>(`type?`, `subscriber?`): [`Emitter`](reference/classes/Emitter.md)<`TEventList`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type?

`K`

##### subscriber?

(`e`) => `void`

#### Returns

[`Emitter`](reference/classes/Emitter.md)<`TEventList`>

#### Inherited from

[`Emitter`](reference/classes/Emitter.md).[`removeEventListener`](Emitter.md#removeeventlistener)

***

### reset()

> **reset**(`resetState?`, `eventKeys?`): `void`

#### Parameters

##### resetState?

`TState`

##### eventKeys?

`string`[]

#### Returns

`void`

***

### setBulkedChangesNotifier()

> `protected` **setBulkedChangesNotifier**(`bulkedChangesNotifier`): `void`

#### Parameters

##### bulkedChangesNotifier

`TBulkedChangesNotifier`<`TState`>

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

### setImmediateChangeNotifier()

> `protected` **setImmediateChangeNotifier**(`immediateChangeNotifier`): `void`

#### Parameters

##### immediateChangeNotifier

`TImmediateChangeNotifier`<`TState`>

#### Returns

`void`
