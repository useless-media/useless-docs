# PropertyListenerProxy

## Constructors

### Constructor

> **new PropertyListenerProxy**(): `PropertyListenerProxy`

#### Returns

`PropertyListenerProxy`

## Properties

### delegate

> **delegate**: `MulticastDelegate`<[`PropertyListenerDelegate`](reference/interfaces/PropertyListenerDelegate.md)>

## Methods

### handleStateChanges()

> **handleStateChanges**(`events`, `changes`): `void`

#### Parameters

##### events

`PlaybackSessionEventKeys`[]

##### changes

`PlaybackSessionState`

#### Returns

`void`

***

### registerDelegate()

> **registerDelegate**(`delegate`): `MulticastDelegateContext`

#### Parameters

##### delegate

[`PropertyListenerDelegate`](reference/interfaces/PropertyListenerDelegate.md)

#### Returns

`MulticastDelegateContext`
