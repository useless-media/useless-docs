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

### addEventListener()

> **addEventListener**<`K`>(`type`, `subscriber`): `Emitter`<[`PlaybackSessionStateEventPayloads`](reference/interfaces/PlaybackSessionStateEventPayloads.md)>

#### Type parameters

• **K** extends keyof [`PlaybackSessionStateEventPayloads`](reference/interfaces/PlaybackSessionStateEventPayloads.md)

#### Parameters

• **type**: `K`

• **subscriber**: (`e`) => `void`

#### Returns

`Emitter`<[`PlaybackSessionStateEventPayloads`](reference/interfaces/PlaybackSessionStateEventPayloads.md)>

#### Inherited from

`Omit.addEventListener`

***

### emit()

> **emit**<`K`>(`type`, `event`?): `Emitter`<[`PlaybackSessionStateEventPayloads`](reference/interfaces/PlaybackSessionStateEventPayloads.md)>

#### Type parameters

• **K** extends keyof [`PlaybackSessionStateEventPayloads`](reference/interfaces/PlaybackSessionStateEventPayloads.md)

#### Parameters

• **type**: `K`

• **event?**: `Optional`<[`PlaybackSessionStateEventPayloads`](reference/interfaces/PlaybackSessionStateEventPayloads.md)[`K`], `"type"`>

#### Returns

`Emitter`<[`PlaybackSessionStateEventPayloads`](reference/interfaces/PlaybackSessionStateEventPayloads.md)>

#### Inherited from

`Omit.emit`

***

### emitAsync()

> **emitAsync**<`K`>(`type`, `event`?): `Emitter`<[`PlaybackSessionStateEventPayloads`](reference/interfaces/PlaybackSessionStateEventPayloads.md)>

#### Type parameters

• **K** extends keyof [`PlaybackSessionStateEventPayloads`](reference/interfaces/PlaybackSessionStateEventPayloads.md)

#### Parameters

• **type**: `K`

• **event?**: `Optional`<[`PlaybackSessionStateEventPayloads`](reference/interfaces/PlaybackSessionStateEventPayloads.md)[`K`], `"type"`>

#### Returns

`Emitter`<[`PlaybackSessionStateEventPayloads`](reference/interfaces/PlaybackSessionStateEventPayloads.md)>

#### Inherited from

`Omit.emitAsync`

***

### getCleanState()

> **getCleanState**(): [`DeCafPlaybackSessionState`](reference/interfaces/DeCafPlaybackSessionState.md)

#### Returns

[`DeCafPlaybackSessionState`](reference/interfaces/DeCafPlaybackSessionState.md)

#### Inherited from

`Omit.getCleanState`

***

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

### off()

> **off**<`K`>(`type`?, `subscriber`?): `Emitter`<[`PlaybackSessionStateEventPayloads`](reference/interfaces/PlaybackSessionStateEventPayloads.md)>

#### Type parameters

• **K** extends keyof [`PlaybackSessionStateEventPayloads`](reference/interfaces/PlaybackSessionStateEventPayloads.md)

#### Parameters

• **type?**: `K`

• **subscriber?**: (`e`) => `void`

#### Returns

`Emitter`<[`PlaybackSessionStateEventPayloads`](reference/interfaces/PlaybackSessionStateEventPayloads.md)>

#### Inherited from

`Omit.off`

***

### on()

> **on**<`K`>(`type`, `subscriber`): `Emitter`<[`PlaybackSessionStateEventPayloads`](reference/interfaces/PlaybackSessionStateEventPayloads.md)>

#### Type parameters

• **K** extends keyof [`PlaybackSessionStateEventPayloads`](reference/interfaces/PlaybackSessionStateEventPayloads.md)

#### Parameters

• **type**: `K`

• **subscriber**: (`e`) => `void`

#### Returns

`Emitter`<[`PlaybackSessionStateEventPayloads`](reference/interfaces/PlaybackSessionStateEventPayloads.md)>

#### Inherited from

`Omit.on`

***

### once()

> **once**<`K`>(`type`, `subscriber`): `Emitter`<[`PlaybackSessionStateEventPayloads`](reference/interfaces/PlaybackSessionStateEventPayloads.md)>

#### Type parameters

• **K** extends keyof [`PlaybackSessionStateEventPayloads`](reference/interfaces/PlaybackSessionStateEventPayloads.md)

#### Parameters

• **type**: `K`

• **subscriber**: (`e`) => `void`

#### Returns

`Emitter`<[`PlaybackSessionStateEventPayloads`](reference/interfaces/PlaybackSessionStateEventPayloads.md)>

#### Inherited from

`Omit.once`

***

### removeEventListener()

> **removeEventListener**<`K`>(`type`?, `subscriber`?): `Emitter`<[`PlaybackSessionStateEventPayloads`](reference/interfaces/PlaybackSessionStateEventPayloads.md)>

#### Type parameters

• **K** extends keyof [`PlaybackSessionStateEventPayloads`](reference/interfaces/PlaybackSessionStateEventPayloads.md)

#### Parameters

• **type?**: `K`

• **subscriber?**: (`e`) => `void`

#### Returns

`Emitter`<[`PlaybackSessionStateEventPayloads`](reference/interfaces/PlaybackSessionStateEventPayloads.md)>

#### Inherited from

`Omit.removeEventListener`

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

• **activeTracks**: [`DeCafTrack`](reference/functions/DeCafTrack.md)[]

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

• **tracks**: [`DeCafTrack`](reference/functions/DeCafTrack.md)[]

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
