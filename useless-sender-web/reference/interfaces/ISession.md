# ISession

## Extends

- `IEmitter`<[`UselessSessionEventList`](reference/interfaces/UselessSessionEventList.md)>

## Properties

### activeTracks

> **activeTracks**: [`Track`](reference/functions/Track.md)[]

convenience

***

### cast

> **cast**: <`TLoad`>(`load`) => `Promise`<`void`>

#### Type parameters

• **TLoad** extends [`Load`](reference/functions/Load.md) = [`Load`](../functions/Load.md)

#### Parameters

• **load**: `TLoad`

#### Returns

`Promise`<`void`>

***

### destroy

> **destroy**: (`stopCasting`?) => `void`

#### Parameters

• **stopCasting?**: `boolean`

#### Returns

`void`

***

### destroyed

> **destroyed**: `boolean`

***

### dismissStillWatching

> **dismissStillWatching**: () => `Promise`<`void`>

messaging

#### Returns

`Promise`<`void`>

***

### pause

> **pause**: (`command`?) => `Promise`<`void`>

#### Parameters

• **command?**: `PauseCommand`

#### Returns

`Promise`<`void`>

***

### play

> **play**: (`command`?) => `Promise`<`void`>

#### Parameters

• **command?**: `PlayCommand`

#### Returns

`Promise`<`void`>

***

### playbackSessionState

> **playbackSessionState**: `Partial`<[`PlaybackSessionState`](reference/interfaces/PlaybackSessionState.md)>

***

### seek

> **seek**: (`command`) => `Promise`<`void`>

#### Parameters

• **command**: `SeekCommand`

#### Returns

`Promise`<`void`>

***

### sendMessage

> **sendMessage**: (`messageNamespace`, `message`) => `Promise`<`void`>

#### Parameters

• **messageNamespace**: `string`

• **message**: `Record`<`string`, `any`>

#### Returns

`Promise`<`void`>

***

### sendUselessClientMessage

> **sendUselessClientMessage**: (`message`) => `Promise`<`void`>

#### Parameters

• **message**: `Record`<`string`, `any`>

#### Returns

`Promise`<`void`>

***

### setAudioTrack

> **setAudioTrack**: (`command`) => `Promise`<`void`>

#### Parameters

• **command**: `SetAudioTrackCommand`

#### Returns

`Promise`<`void`>

***

### setAudioTrackByTrack

> **setAudioTrackByTrack**: (`track`) => `Promise`<`void`>

#### Parameters

• **track**: [`Track`](reference/functions/Track.md)

#### Returns

`Promise`<`void`>

***

### setTextTrack

> **setTextTrack**: (`command`?) => `Promise`<`void`>

#### Parameters

• **command?**: `SetTextTrackCommand`

#### Returns

`Promise`<`void`>

***

### setTextTrackByTrack

> **setTextTrackByTrack**: (`track`?) => `Promise`<`void`>

#### Parameters

• **track?**: [`Track`](reference/functions/Track.md)

#### Returns

`Promise`<`void`>

***

### setTracks

> **setTracks**: (`command`) => `Promise`<`void`>

#### Parameters

• **command**: `SetTracks`

#### Returns

`Promise`<`void`>

***

### setTracksByTracks

> **setTracksByTracks**: (`tracks`) => `Promise`<`void`>

#### Parameters

• **tracks**: [`Track`](reference/functions/Track.md)[]

#### Returns

`Promise`<`void`>

***

### setVolume

> **setVolume**: (`command`) => `Promise`<`void`>

#### Parameters

• **command**: `SetVolumeCommand`

#### Returns

`Promise`<`void`>

***

### skipSection

> **skipSection**: (`command`) => `Promise`<`void`>

#### Parameters

• **command**: `SkipSectionCommand`

#### Returns

`Promise`<`void`>

***

### stop

> **stop**: (`command`?) => `Promise`<`void`>

#### Parameters

• **command?**: `StopCommand`

#### Returns

`Promise`<`void`>

***

### tracks

> **tracks**: [`Track`](reference/functions/Track.md)[]

## Methods

### addEventListener()

> **addEventListener**<`K`>(`type`, `subscriber`): `IEmitter`<[`UselessSessionEventList`](reference/interfaces/UselessSessionEventList.md)>

#### Type parameters

• **K** extends keyof [`UselessSessionEventList`](reference/interfaces/UselessSessionEventList.md)

#### Parameters

• **type**: `K`

• **subscriber**: (`e`) => `void`

#### Returns

`IEmitter`<[`UselessSessionEventList`](reference/interfaces/UselessSessionEventList.md)>

#### Inherited from

`IEmitter.addEventListener`

***

### emit()

> **emit**<`K`>(`type`, `event`?): `IEmitter`<[`UselessSessionEventList`](reference/interfaces/UselessSessionEventList.md)>

#### Type parameters

• **K** extends keyof [`UselessSessionEventList`](reference/interfaces/UselessSessionEventList.md)

#### Parameters

• **type**: `K`

• **event?**: `Optional`<[`UselessSessionEventList`](reference/interfaces/UselessSessionEventList.md)[`K`], `"type"`>

#### Returns

`IEmitter`<[`UselessSessionEventList`](reference/interfaces/UselessSessionEventList.md)>

#### Inherited from

`IEmitter.emit`

***

### emitAsync()

> **emitAsync**<`K`>(`type`, `event`?): `IEmitter`<[`UselessSessionEventList`](reference/interfaces/UselessSessionEventList.md)>

#### Type parameters

• **K** extends keyof [`UselessSessionEventList`](reference/interfaces/UselessSessionEventList.md)

#### Parameters

• **type**: `K`

• **event?**: `Optional`<[`UselessSessionEventList`](reference/interfaces/UselessSessionEventList.md)[`K`], `"type"`>

#### Returns

`IEmitter`<[`UselessSessionEventList`](reference/interfaces/UselessSessionEventList.md)>

#### Inherited from

`IEmitter.emitAsync`

***

### off()

> **off**<`K`>(`type`?, `subscriber`?): `IEmitter`<[`UselessSessionEventList`](reference/interfaces/UselessSessionEventList.md)>

#### Type parameters

• **K** extends keyof [`UselessSessionEventList`](reference/interfaces/UselessSessionEventList.md)

#### Parameters

• **type?**: `K`

• **subscriber?**: (`e`) => `void`

#### Returns

`IEmitter`<[`UselessSessionEventList`](reference/interfaces/UselessSessionEventList.md)>

#### Inherited from

`IEmitter.off`

***

### on()

> **on**<`K`>(`type`, `subscriber`): `IEmitter`<[`UselessSessionEventList`](reference/interfaces/UselessSessionEventList.md)>

#### Type parameters

• **K** extends keyof [`UselessSessionEventList`](reference/interfaces/UselessSessionEventList.md)

#### Parameters

• **type**: `K`

• **subscriber**: (`e`) => `void`

#### Returns

`IEmitter`<[`UselessSessionEventList`](reference/interfaces/UselessSessionEventList.md)>

#### Inherited from

`IEmitter.on`

***

### once()

> **once**<`K`>(`type`, `subscriber`): `IEmitter`<[`UselessSessionEventList`](reference/interfaces/UselessSessionEventList.md)>

#### Type parameters

• **K** extends keyof [`UselessSessionEventList`](reference/interfaces/UselessSessionEventList.md)

#### Parameters

• **type**: `K`

• **subscriber**: (`e`) => `void`

#### Returns

`IEmitter`<[`UselessSessionEventList`](reference/interfaces/UselessSessionEventList.md)>

#### Inherited from

`IEmitter.once`

***

### removeEventListener()

> **removeEventListener**<`K`>(`type`?, `subscriber`?): `IEmitter`<[`UselessSessionEventList`](reference/interfaces/UselessSessionEventList.md)>

#### Type parameters

• **K** extends keyof [`UselessSessionEventList`](reference/interfaces/UselessSessionEventList.md)

#### Parameters

• **type?**: `K`

• **subscriber?**: (`e`) => `void`

#### Returns

`IEmitter`<[`UselessSessionEventList`](reference/interfaces/UselessSessionEventList.md)>

#### Inherited from

`IEmitter.removeEventListener`
