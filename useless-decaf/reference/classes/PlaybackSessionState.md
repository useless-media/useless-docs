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

### changes

> **`protected`** **changes**: `Object`

#### Type declaration

##### absoluteTime?

> **absoluteTime**?: { duration?: number | undefined; position?: number | undefined; }

##### id?

> **id**?: `string`

##### playbackState?

> **playbackState**?: [`PlaybackStates`](reference/enumerations/PlaybackStates.md)

##### tracks?

> **tracks**?: { id?: number | undefined; type?: TrackTypes | undefined; active?: boolean | undefined; language?: ISOLanguage | undefined; name?: string | undefined; roles?: Roles[] | undefined; }[]

##### volume?

> **volume**?: { level?: number | undefined; muted?: boolean | undefined; }

#### Inherited from

`StateKeepingSession.changes`

***

### deletedPaths

> **`protected`** **deletedPaths**: `string`[]

#### Inherited from

`StateKeepingSession.deletedPaths`

***

### destroyed

> **`protected`** **destroyed**: `boolean`

#### Inherited from

`StateKeepingSession.destroyed`

***

### events

> **`protected`** **events**: `string`[]

#### Inherited from

`StateKeepingSession.events`

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

***

### state

> **`protected`** **`readonly`** **state**: [`DeCafPlaybackSessionState`](reference/interfaces/DeCafPlaybackSessionState.md)

#### Inherited from

`StateKeepingSession.state`

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

#### Implementation of

[`IPlaybackSessionState.addEventListener`](reference/interfaces/IPlaybackSessionState.md#addeventlistener)

#### Inherited from

`StateKeepingSession.addEventListener`

***

### commitChange()

> **`protected`** **commitChange**(`change`, ...`events`): `void`

Note: commit functions are only overridden to provide more explicit typings

#### Parameters

• **change**: `Object`

• **change.absoluteTime?**: { duration?: number | undefined; position?: number | undefined; }

• **change.id?**: `string`

• **change.playbackState?**: [`PlaybackStates`](reference/enumerations/PlaybackStates.md)

• **change.tracks?**: { id?: number | undefined; type?: TrackTypes | undefined; active?: boolean | undefined; language?: ISOLanguage | undefined; name?: string | undefined; roles?: Roles[] | undefined; }[]

• **change.volume?**: { level?: number | undefined; muted?: boolean | undefined; }

• ...**events**: `string`[]

#### Returns

`void`

#### Overrides

`StateKeepingSession.commitChange`

***

### commitChangeWithoutNotification()

> **`protected`** **commitChangeWithoutNotification**(`change`, ...`events`): `void`

Note: Use commitChangeWithoutNotification() carefully. It should always be followed by at least one standard
commitChange() within the same update to ensure that no immediate StateChanges are delayed!

#### Parameters

• **change**: `Object`

• **change.absoluteTime?**: { duration?: number | undefined; position?: number | undefined; }

• **change.id?**: `string`

• **change.playbackState?**: [`PlaybackStates`](reference/enumerations/PlaybackStates.md)

• **change.tracks?**: { id?: number | undefined; type?: TrackTypes | undefined; active?: boolean | undefined; language?: ISOLanguage | undefined; name?: string | undefined; roles?: Roles[] | undefined; }[]

• **change.volume?**: { level?: number | undefined; muted?: boolean | undefined; }

• ...**events**: `string`[]

#### Returns

`void`

#### Inherited from

`StateKeepingSession.commitChangeWithoutNotification`

***

### commitDeleteAndChange()

> **`protected`** **commitDeleteAndChange**(`change`, `pathsToDelete`, ...`events`): `string`[]

#### Parameters

• **change**: `Object`

• **change.absoluteTime?**: { duration?: number | undefined; position?: number | undefined; }

• **change.id?**: `string`

• **change.playbackState?**: [`PlaybackStates`](reference/enumerations/PlaybackStates.md)

• **change.tracks?**: { id?: number | undefined; type?: TrackTypes | undefined; active?: boolean | undefined; language?: ISOLanguage | undefined; name?: string | undefined; roles?: Roles[] | undefined; }[]

• **change.volume?**: { level?: number | undefined; muted?: boolean | undefined; }

• **pathsToDelete**: `string`[]

• ...**events**: `string`[]

#### Returns

`string`[]

#### Overrides

`StateKeepingSession.commitDeleteAndChange`

***

### commitDeleteAndChangeWithoutNotification()

> **`protected`** **commitDeleteAndChangeWithoutNotification**(`change`, `pathsToDelete`, ...`events`): `string`[]

#### Parameters

• **change**: `Object`

• **change.absoluteTime?**: { duration?: number | undefined; position?: number | undefined; }

• **change.id?**: `string`

• **change.playbackState?**: [`PlaybackStates`](reference/enumerations/PlaybackStates.md)

• **change.tracks?**: { id?: number | undefined; type?: TrackTypes | undefined; active?: boolean | undefined; language?: ISOLanguage | undefined; name?: string | undefined; roles?: Roles[] | undefined; }[]

• **change.volume?**: { level?: number | undefined; muted?: boolean | undefined; }

• **pathsToDelete**: `string`[]

• ...**events**: `string`[]

#### Returns

`string`[]

#### Inherited from

`StateKeepingSession.commitDeleteAndChangeWithoutNotification`

***

### commitDeletedPath()

> **`protected`** **commitDeletedPath**(`path`): `void`

#### Parameters

• **path**: `string`

#### Returns

`void`

#### Inherited from

`StateKeepingSession.commitDeletedPath`

***

### commitEvent()

> **`protected`** **commitEvent**(`event`): `void`

#### Parameters

• **event**: `string`

#### Returns

`void`

#### Inherited from

`StateKeepingSession.commitEvent`

***

### destroy()

> **destroy**(`finalState`?): `void`

#### Parameters

• **finalState?**: [`DeCafPlaybackSessionState`](reference/interfaces/DeCafPlaybackSessionState.md)

#### Returns

`void`

#### Inherited from

`StateKeepingSession.destroy`

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

#### Implementation of

[`IPlaybackSessionState.emit`](reference/interfaces/IPlaybackSessionState.md#emit)

#### Inherited from

`StateKeepingSession.emit`

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

#### Implementation of

[`IPlaybackSessionState.emitAsync`](reference/interfaces/IPlaybackSessionState.md#emitasync)

#### Inherited from

`StateKeepingSession.emitAsync`

***

### ensureNotDestroyed()

> **`protected`** **ensureNotDestroyed**(`subscriber`): (...`args`) => `void`

#### Parameters

• **subscriber**: `TSubscriber`

#### Returns

`Function`

> ##### Parameters
>
> • ...**args**: `any`[]
>
> ##### Returns
>
> `void`
>

#### Inherited from

`StateKeepingSession.ensureNotDestroyed`

***

### getCleanState()

> **getCleanState**(): [`DeCafPlaybackSessionState`](reference/interfaces/DeCafPlaybackSessionState.md)

#### Returns

[`DeCafPlaybackSessionState`](reference/interfaces/DeCafPlaybackSessionState.md)

#### Implementation of

[`IPlaybackSessionState.getCleanState`](reference/interfaces/IPlaybackSessionState.md#getcleanstate)

#### Overrides

`StateKeepingSession.getCleanState`

***

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

### notifyImmediateBulkedChanges()

> **`protected`** **notifyImmediateBulkedChanges**(): `void`

#### Returns

`void`

#### Inherited from

`StateKeepingSession.notifyImmediateBulkedChanges`

***

### notifyImmediateChange()

> **`protected`** **notifyImmediateChange**(`changes`, `deletedPaths`, `events`): `void`

#### Parameters

• **changes**: `Object`

• **changes.absoluteTime?**: { duration?: number | undefined; position?: number | undefined; }

• **changes.id?**: `string`

• **changes.playbackState?**: [`PlaybackStates`](reference/enumerations/PlaybackStates.md)

• **changes.tracks?**: { id?: number | undefined; type?: TrackTypes | undefined; active?: boolean | undefined; language?: ISOLanguage | undefined; name?: string | undefined; roles?: Roles[] | undefined; }[]

• **changes.volume?**: { level?: number | undefined; muted?: boolean | undefined; }

• **deletedPaths**: `string`[]

• **events**: `string`[]

#### Returns

`void`

#### Inherited from

`StateKeepingSession.notifyImmediateChange`

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

#### Implementation of

[`IPlaybackSessionState.off`](reference/interfaces/IPlaybackSessionState.md#off)

#### Inherited from

`StateKeepingSession.off`

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

#### Implementation of

[`IPlaybackSessionState.on`](reference/interfaces/IPlaybackSessionState.md#on)

#### Inherited from

`StateKeepingSession.on`

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

#### Implementation of

[`IPlaybackSessionState.once`](reference/interfaces/IPlaybackSessionState.md#once)

#### Inherited from

`StateKeepingSession.once`

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

#### Implementation of

[`IPlaybackSessionState.removeEventListener`](reference/interfaces/IPlaybackSessionState.md#removeeventlistener)

#### Inherited from

`StateKeepingSession.removeEventListener`

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

• **activeTracks**: [`DeCafTrack`](reference/functions/DeCafTrack.md)[]

#### Returns

`void`

#### Implementation of

[`IPlaybackSessionState.setActiveTracks`](reference/interfaces/IPlaybackSessionState.md#setactivetracks)

***

### setBulkedChangesNotifier()

> **`protected`** **setBulkedChangesNotifier**(`bulkedChangesNotifier`): `void`

#### Parameters

• **bulkedChangesNotifier**: `TBulkedChangesNotifier`<[`DeCafPlaybackSessionState`](reference/interfaces/DeCafPlaybackSessionState.md)>

#### Returns

`void`

#### Inherited from

`StateKeepingSession.setBulkedChangesNotifier`

***

### setDebug()

> **setDebug**(`value`): `void`

#### Parameters

• **value**: `boolean`

#### Returns

`void`

#### Inherited from

`StateKeepingSession.setDebug`

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

### setImmediateChangeNotifier()

> **`protected`** **setImmediateChangeNotifier**(`immediateChangeNotifier`): `void`

#### Parameters

• **immediateChangeNotifier**: `TImmediateChangeNotifier`<[`DeCafPlaybackSessionState`](reference/interfaces/DeCafPlaybackSessionState.md)>

#### Returns

`void`

#### Inherited from

`StateKeepingSession.setImmediateChangeNotifier`

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

• **tracks**: [`DeCafTrack`](reference/functions/DeCafTrack.md)[]

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
