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

## Methods

### getId()

> **getId**(): `string`

Re-declarations for docs (due to @noInheritDocs)

#### Returns

`string`

#### Implementation of

[`IPlaybackSessionState.getId`](reference/interfaces/IPlaybackSessionState.md#getid)

#### Overrides

`StateKeepingSession.getId`

***

### getState()

> **getState**(): [`DeCafPlaybackSessionState`](reference/interfaces/DeCafPlaybackSessionState.md)

#### Returns

[`DeCafPlaybackSessionState`](reference/interfaces/DeCafPlaybackSessionState.md)

#### Implementation of

[`IPlaybackSessionState.getState`](reference/interfaces/IPlaybackSessionState.md#getstate)

#### Overrides

`StateKeepingSession.getState`

***

### reset()

> **reset**(): `void`

#### Returns

`void`

#### Implementation of

[`IPlaybackSessionState.reset`](reference/interfaces/IPlaybackSessionState.md#reset)

#### Overrides

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
