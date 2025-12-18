# ClientState

## Extends

- [`BaseState`](reference/classes/BaseState.md)<`ClientStateDelegate`>

## Constructors

### Constructor

> **new ClientState**(): `ClientState`

#### Returns

`ClientState`

#### Overrides

[`BaseState`](reference/classes/BaseState.md).[`constructor`](BaseState.md#constructor)

## Properties

### clientControllerDelegate

> **clientControllerDelegate**: `DecafClientUIControllerDelegate`

***

### delegate

> **delegate**: `MulticastDelegate`<`ClientStateDelegate`>

#### Inherited from

[`BaseState`](reference/classes/BaseState.md).[`delegate`](BaseState.md#delegate)

***

### state

> **state**: [`IClientState`](reference/interfaces/IClientState.md)

## Methods

### cleanState()

> **cleanState**(): [`IClientState`](reference/interfaces/IClientState.md)

#### Returns

[`IClientState`](reference/interfaces/IClientState.md)

***

### onClientStateChanged()

> **onClientStateChanged**(`state`): `void`

#### Parameters

##### state

[`IClientState`](reference/interfaces/IClientState.md)

#### Returns

`void`

***

### registerDelegate()

> **registerDelegate**(`delegate`): `void`

#### Parameters

##### delegate

`ClientStateDelegate`

#### Returns

`void`

#### Inherited from

[`BaseState`](reference/classes/BaseState.md).[`registerDelegate`](BaseState.md#registerdelegate)

***

### removeDelegateById()

> **removeDelegateById**(`id`): `void`

#### Parameters

##### id

`string`

#### Returns

`void`

#### Inherited from

[`BaseState`](reference/classes/BaseState.md).[`removeDelegateById`](BaseState.md#removedelegatebyid)

***

### reset()

> **reset**(): `void`

#### Returns

`void`

#### Overrides

[`BaseState`](reference/classes/BaseState.md).[`reset`](BaseState.md#reset)

***

### setActiveSection()

> **setActiveSection**(`data?`): `void`

#### Parameters

##### data?

`TimelineSection`

#### Returns

`void`

***

### setDecafClientUIControllerDelegate()

> **setDecafClientUIControllerDelegate**(`delegate`): `void`

#### Parameters

##### delegate

`DecafClientUIControllerDelegate`

#### Returns

`void`

***

### setError()

> **setError**(`data?`): `void`

#### Parameters

##### data?

`IError`

#### Returns

`void`

***

### setNextContent()

> **setNextContent**(`data?`): `void`

#### Parameters

##### data?

`Metadata`

#### Returns

`void`

***

### setPlaybackSessionState()

> **setPlaybackSessionState**(`state`): `void`

#### Parameters

##### state

`PlaybackSessionState`

#### Returns

`void`

***

### setPlaybackState()

> **setPlaybackState**(`data`): `void`

#### Parameters

##### data

`PlaybackStates`

#### Returns

`void`

***

### setStream()

> **setStream**(`data?`): `void`

#### Parameters

##### data?

`Stream`

#### Returns

`void`

***

### setStreamRestrictions()

> **setStreamRestrictions**(`restrictions`): `void`

#### Parameters

##### restrictions

`StreamRestrictions`

#### Returns

`void`

***

### setTimelineItems()

> **setTimelineItems**(`data?`): `void`

#### Parameters

##### data?

(`TimelineSection` | `TimelineMetadata`)[]

#### Returns

`void`

***

### setTracks()

> **setTracks**(`audio`, `text`): `void`

#### Parameters

##### audio

`AudioTrack`[]

##### text

`TextTrack$1`[]

#### Returns

`void`

***

### setVolume()

> **setVolume**(`data`): `void`

#### Parameters

##### data

`Volume`

#### Returns

`void`
