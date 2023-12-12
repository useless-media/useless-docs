# IMediaStatusState

## Properties

### addRestriction

> **addRestriction**: (`command`) => `void`

#### Parameters

• **command**: [`Command`](reference/enumerations/Command.md)

#### Returns

`void`

***

### getState

> **getState**: () => [`MediaStatus`](reference/interfaces/MediaStatus.md)

#### Returns

[`MediaStatus`](reference/interfaces/MediaStatus.md)

***

### removeRestriction

> **removeRestriction**: (`command`) => `void`

#### Parameters

• **command**: [`Command`](reference/enumerations/Command.md)

#### Returns

`void`

***

### reset

> **reset**: () => `void`

#### Returns

`void`

***

### setActiveTrackByLanguage

> **setActiveTrackByLanguage**: (`language`, `isAudio`) => `void`

#### Parameters

• **language**: `string`

• **isAudio**: `boolean`

#### Returns

`void`

***

### setActiveTracksIds

> **setActiveTracksIds**: (`activeTrackIds`) => `void`

#### Parameters

• **activeTrackIds**: `number`[]

#### Returns

`void`

***

### setAdvertisementData

> **setAdvertisementData**: (`breaks`, `breakClips`) => `void`

#### Parameters

• **breaks**: [`Break`](reference/interfaces/Break.md)[]

• **breakClips**: [`BreakClip`](reference/interfaces/BreakClip.md)[]

#### Returns

`void`

***

### setBreakStatus

> **setBreakStatus**: (`breakStatus`?) => `void`

#### Parameters

• **breakStatus?**: [`BreakStatus`](reference/interfaces/BreakStatus.md)

#### Returns

`void`

***

### setMediaInformation

> **setMediaInformation**: (`media`?) => `void`

#### Parameters

• **media?**: [`MediaInformation`](reference/interfaces/MediaInformation.md)

#### Returns

`void`

***

### setMetadata

> **setMetadata**: (`metadata`?) => `void`

#### Parameters

• **metadata?**: [`GoogleMetadata`](reference/type-aliases/GoogleMetadata.md)

#### Returns

`void`

***

### setPlayerState

> **setPlayerState**: (`state`) => `void`

#### Parameters

• **state**: [`PlayerState`](reference/enumerations/PlayerState.md)

#### Returns

`void`

***

### setTimeInfo

> **setTimeInfo**: (`currentTime`, `duration`?) => `void`

#### Parameters

• **currentTime**: `number`

• **duration?**: `number`

#### Returns

`void`

***

### setTracks

> **setTracks**: (`tracks`) => `void`

#### Parameters

• **tracks**: [`Track`](reference/interfaces/Track.md)[]

#### Returns

`void`

***

### setVolume

> **setVolume**: (`level`, `muted`) => `void`

#### Parameters

• **level**: `number`

• **muted**: `boolean`

#### Returns

`void`
