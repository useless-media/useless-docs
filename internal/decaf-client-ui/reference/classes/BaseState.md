# BaseState<TStateDelegate>

## Extended by

- [`ClientState`](reference/classes/ClientState.md)
- [`VisibilityState`](reference/classes/VisibilityState.md)

## Type Parameters

### TStateDelegate

`TStateDelegate` *extends* [`BaseStateDelegate`](reference/interfaces/BaseStateDelegate.md)

## Constructors

### Constructor

> **new BaseState**<`TStateDelegate`>(`defaultDelegate`): `BaseState`<`TStateDelegate`>

#### Parameters

##### defaultDelegate

() => [`BaseStateDelegate`](reference/interfaces/BaseStateDelegate.md)

#### Returns

`BaseState`<`TStateDelegate`>

## Properties

### delegate

> **delegate**: `MulticastDelegate`<`TStateDelegate`>

## Methods

### registerDelegate()

> **registerDelegate**(`delegate`): `void`

#### Parameters

##### delegate

`TStateDelegate`

#### Returns

`void`

***

### removeDelegateById()

> **removeDelegateById**(`id`): `void`

#### Parameters

##### id

`string`

#### Returns

`void`

***

### reset()

> **reset**(): `void`

#### Returns

`void`
