# IPlaybackSessionState

## Extends

- `Omit`<[`PlaybackSessionState`](reference/classes/PlaybackSessionState.md), `"destroy"` | `"setDebug"`>

## Properties

### notifyChange

> **`readonly`** **notifyChange**: `TThrottledFunction`

#### Inherited from

`Omit.notifyChange`

***

### notifyChangeEvery15Seconds

> **`readonly`** **notifyChangeEvery15Seconds**: `TThrottledFunction`

#### Inherited from

`Omit.notifyChangeEvery15Seconds`

## Methods

### getId()

> **getId**(): `string`

#### Returns

`string`

#### Inherited from

`Omit.getId`

***

### getState()

> **getState**(): [`DeCafPlaybackSessionState`](reference/interfaces/DeCafPlaybackSessionState.md)

#### Returns

[`DeCafPlaybackSessionState`](reference/interfaces/DeCafPlaybackSessionState.md)

#### Inherited from

`Omit.getState`

***

### reset()

> **reset**(`resetState`?, `eventKeys`?): `void`

#### Parameters

• **resetState?**: [`DeCafPlaybackSessionState`](reference/interfaces/DeCafPlaybackSessionState.md)

• **eventKeys?**: `string`[]

#### Returns

`void`

#### Inherited from

`Omit.reset`

***

### setActiveTracks()

> **setActiveTracks**(`activeTracks`): `void`

#### Parameters

• **activeTracks**: [`DeCafTrack`](reference/interfaces/DeCafTrack.md)[]

#### Returns

`void`

#### Inherited from

`Omit.setActiveTracks`

***

### setDuration()

> **setDuration**(`duration`): `void`

#### Parameters

• **duration**: `number`

#### Returns

`void`

#### Inherited from

`Omit.setDuration`

***

### setPlaybackState()

> **setPlaybackState**(`playbackState`): `void`

#### Parameters

• **playbackState**: [`PlaybackStates`](reference/enumerations/PlaybackStates.md)

#### Returns

`void`

#### Inherited from

`Omit.setPlaybackState`

***

### setTime()

> **setTime**(`absolutePosition`): `void`

#### Parameters

• **absolutePosition**: `number`

#### Returns

`void`

#### Inherited from

`Omit.setTime`

***

### setTracks()

> **setTracks**(`tracks`): `void`

#### Parameters

• **tracks**: [`DeCafTrack`](reference/interfaces/DeCafTrack.md)[]

#### Returns

`void`

#### Inherited from

`Omit.setTracks`

***

### setVolume()

> **setVolume**(`level`, `muted`?): `void`

#### Parameters

• **level**: `number`

• **muted?**: `boolean`

#### Returns

`void`

#### Inherited from

`Omit.setVolume`
