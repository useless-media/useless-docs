# PlaybackSessionState

## Extends

- `StateKeepingSession`<[`DeCafPlaybackSessionState`](reference/interfaces/DeCafPlaybackSessionState.md), [`PlaybackSessionStateEventPayloads`](../interfaces/PlaybackSessionStateEventPayloads.md)>

## Implements

- [`IPlaybackSessionState`](reference/interfaces/IPlaybackSessionState.md)

## Constructors

### new PlaybackSessionState(id)

> **new PlaybackSessionState**(`id`?): [`PlaybackSessionState`](reference/classes/PlaybackSessionState.md)

#### Parameters

• **id?**: `string`

#### Returns

[`PlaybackSessionState`](reference/classes/PlaybackSessionState.md)

#### Overrides

`StateKeepingSession<DeCafPlaybackSessionState, PlaybackSessionStateEventPayloads>.constructor`

## Properties

### destroyed

> **`protected`** **destroyed**: `boolean`

#### Inherited from

`StateKeepingSession.destroyed`

***

### notifyChange

> **`readonly`** **notifyChange**: `TThrottledFunction`

#### Implementation of

[`IPlaybackSessionState.notifyChange`](reference/interfaces/IPlaybackSessionState.md#notifychange)

#### Inherited from

`StateKeepingSession.notifyChange`

***

### notifyChangeEvery15Seconds

> **`readonly`** **notifyChangeEvery15Seconds**: `TThrottledFunction`

#### Implementation of

[`IPlaybackSessionState.notifyChangeEvery15Seconds`](reference/interfaces/IPlaybackSessionState.md#notifychangeevery15seconds)

#### Inherited from

`StateKeepingSession.notifyChangeEvery15Seconds`

## Methods

### getId()

> **getId**(): `string`

#### Returns

`string`

#### Implementation of

[`IPlaybackSessionState.getId`](reference/interfaces/IPlaybackSessionState.md#getid)

#### Inherited from

`StateKeepingSession.getId`

***

### getState()

> **getState**(): [`DeCafPlaybackSessionState`](reference/interfaces/DeCafPlaybackSessionState.md)

#### Returns

[`DeCafPlaybackSessionState`](reference/interfaces/DeCafPlaybackSessionState.md)

#### Implementation of

[`IPlaybackSessionState.getState`](reference/interfaces/IPlaybackSessionState.md#getstate)

#### Inherited from

`StateKeepingSession.getState`

***

### reset()

> **reset**(`resetState`?, `eventKeys`?): `void`

#### Parameters

• **resetState?**: [`DeCafPlaybackSessionState`](reference/interfaces/DeCafPlaybackSessionState.md)

• **eventKeys?**: `string`[]

#### Returns

`void`

#### Implementation of

[`IPlaybackSessionState.reset`](reference/interfaces/IPlaybackSessionState.md#reset)

#### Inherited from

`StateKeepingSession.reset`

***

### setActiveTracks()

> **setActiveTracks**(`activeTracks`): `void`

#### Parameters

• **activeTracks**: [`DeCafTrack`](reference/interfaces/DeCafTrack.md)[]

#### Returns

`void`

#### Implementation of

[`IPlaybackSessionState.setActiveTracks`](reference/interfaces/IPlaybackSessionState.md#setactivetracks)

***

### setDuration()

> **setDuration**(`duration`): `void`

#### Parameters

• **duration**: `number`

#### Returns

`void`

#### Implementation of

[`IPlaybackSessionState.setDuration`](reference/interfaces/IPlaybackSessionState.md#setduration)

***

### setPlaybackState()

> **setPlaybackState**(`playbackState`): `void`

#### Parameters

• **playbackState**: [`PlaybackStates`](reference/enumerations/PlaybackStates.md)

#### Returns

`void`

#### Implementation of

[`IPlaybackSessionState.setPlaybackState`](reference/interfaces/IPlaybackSessionState.md#setplaybackstate)

***

### setTime()

> **setTime**(`absolutePosition`): `void`

#### Parameters

• **absolutePosition**: `number`

#### Returns

`void`

#### Implementation of

[`IPlaybackSessionState.setTime`](reference/interfaces/IPlaybackSessionState.md#settime)

***

### setTracks()

> **setTracks**(`tracks`): `void`

#### Parameters

• **tracks**: [`DeCafTrack`](reference/interfaces/DeCafTrack.md)[]

#### Returns

`void`

#### Implementation of

[`IPlaybackSessionState.setTracks`](reference/interfaces/IPlaybackSessionState.md#settracks)

***

### setVolume()

> **setVolume**(`level`, `muted`?): `void`

#### Parameters

• **level**: `number`

• **muted?**: `boolean`

#### Returns

`void`

#### Implementation of

[`IPlaybackSessionState.setVolume`](reference/interfaces/IPlaybackSessionState.md#setvolume)
