# MediaStatusState

## Implements

- [`IMediaStatusState`](reference/interfaces/IMediaStatusState.md)

## Constructors

### Constructor

> **new MediaStatusState**(): `MediaStatusState`

#### Returns

`MediaStatusState`

## Methods

### addRestriction()

> **addRestriction**(`command`, `firmwareMessage?`): `void`

#### Parameters

##### command

[`Command`](reference/enumerations/Command.md)

##### firmwareMessage?

[`FirmwareMessage`](reference/type-aliases/FirmwareMessage.md)

#### Returns

`void`

#### Implementation of

[`IMediaStatusState`](reference/interfaces/IMediaStatusState.md).[`addRestriction`](../interfaces/IMediaStatusState.md#addrestriction)

***

### getState()

> **getState**(): [`MediaStatus`](reference/interfaces/MediaStatus.md)

#### Returns

[`MediaStatus`](reference/interfaces/MediaStatus.md)

#### Implementation of

[`IMediaStatusState`](reference/interfaces/IMediaStatusState.md).[`getState`](../interfaces/IMediaStatusState.md#getstate)

***

### load()

> **load**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### mediaStatusUpdated()

> **mediaStatusUpdated**(`changeObject`, `requestId?`): `void`

#### Parameters

##### changeObject

[`MediaStatus`](reference/interfaces/MediaStatus.md)

##### requestId?

`number`

#### Returns

`void`

***

### preload()

> **preload**(`load`, `firmwareMessage?`): `Promise`<`void`>

#### Parameters

##### load

[`LoadRequestData`](reference/interfaces/LoadRequestData.md)

##### firmwareMessage?

[`FirmwareMessage`](reference/type-aliases/FirmwareMessage.md)

#### Returns

`Promise`<`void`>

***

### removeRestriction()

> **removeRestriction**(`command`, `firmwareMessage?`): `void`

#### Parameters

##### command

[`Command`](reference/enumerations/Command.md)

##### firmwareMessage?

[`FirmwareMessage`](reference/type-aliases/FirmwareMessage.md)

#### Returns

`void`

#### Implementation of

[`IMediaStatusState`](reference/interfaces/IMediaStatusState.md).[`removeRestriction`](../interfaces/IMediaStatusState.md#removerestriction)

***

### reset()

> **reset**(): `void`

#### Returns

`void`

#### Implementation of

[`IMediaStatusState`](reference/interfaces/IMediaStatusState.md).[`reset`](../interfaces/IMediaStatusState.md#reset)

***

### setActiveTrackByLanguage()

> **setActiveTrackByLanguage**(`language`, `isAudio`, `firmwareMessage?`): `void`

#### Parameters

##### language

`string`

##### isAudio

`boolean`

##### firmwareMessage?

[`FirmwareMessage`](reference/type-aliases/FirmwareMessage.md)

#### Returns

`void`

#### Implementation of

[`IMediaStatusState`](reference/interfaces/IMediaStatusState.md).[`setActiveTrackByLanguage`](../interfaces/IMediaStatusState.md#setactivetrackbylanguage)

***

### setActiveTracksIds()

> **setActiveTracksIds**(`activeTrackIds`, `firmwareMessage?`): `void`

#### Parameters

##### activeTrackIds

`number`[]

##### firmwareMessage?

[`FirmwareMessage`](reference/type-aliases/FirmwareMessage.md)

#### Returns

`void`

#### Implementation of

[`IMediaStatusState`](reference/interfaces/IMediaStatusState.md).[`setActiveTracksIds`](../interfaces/IMediaStatusState.md#setactivetracksids)

***

### setAdvertisementData()

> **setAdvertisementData**(`breaks`, `breakClips`, `firmwareMessage?`): `void`

#### Parameters

##### breaks

[`Break`](reference/interfaces/Break.md)[]

##### breakClips

[`BreakClip`](reference/interfaces/BreakClip.md)[]

##### firmwareMessage?

[`FirmwareMessage`](reference/type-aliases/FirmwareMessage.md)

#### Returns

`void`

#### Implementation of

[`IMediaStatusState`](reference/interfaces/IMediaStatusState.md).[`setAdvertisementData`](../interfaces/IMediaStatusState.md#setadvertisementdata)

***

### setBreakStatus()

> **setBreakStatus**(`breakStatus?`, `firmwareMessage?`): `void`

#### Parameters

##### breakStatus?

[`BreakStatus`](reference/interfaces/BreakStatus.md)

##### firmwareMessage?

[`FirmwareMessage`](reference/type-aliases/FirmwareMessage.md)

#### Returns

`void`

#### Implementation of

[`IMediaStatusState`](reference/interfaces/IMediaStatusState.md).[`setBreakStatus`](../interfaces/IMediaStatusState.md#setbreakstatus)

***

### setLiveSeekableRange()

> **setLiveSeekableRange**(`liveSeekableRange?`): `void`

#### Parameters

##### liveSeekableRange?

[`LiveSeekableRange`](reference/interfaces/LiveSeekableRange.md)

#### Returns

`void`

#### Implementation of

[`IMediaStatusState`](reference/interfaces/IMediaStatusState.md).[`setLiveSeekableRange`](../interfaces/IMediaStatusState.md#setliveseekablerange)

***

### setMediaInformation()

> **setMediaInformation**(`media?`, `firmwareMessage?`): `void`

#### Parameters

##### media?

[`MediaInformation`](reference/interfaces/MediaInformation.md)

##### firmwareMessage?

[`FirmwareMessage`](reference/type-aliases/FirmwareMessage.md)

#### Returns

`void`

#### Implementation of

[`IMediaStatusState`](reference/interfaces/IMediaStatusState.md).[`setMediaInformation`](../interfaces/IMediaStatusState.md#setmediainformation)

***

### setMetadata()

> **setMetadata**(`metadata?`, `firmwareMessage?`): `void`

#### Parameters

##### metadata?

[`GoogleMetadata`](reference/type-aliases/GoogleMetadata.md)

##### firmwareMessage?

[`FirmwareMessage`](reference/type-aliases/FirmwareMessage.md)

#### Returns

`void`

#### Implementation of

[`IMediaStatusState`](reference/interfaces/IMediaStatusState.md).[`setMetadata`](../interfaces/IMediaStatusState.md#setmetadata)

***

### setPlayerState()

> **setPlayerState**(`state`, `firmwareMessage?`): `void`

#### Parameters

##### state

[`PlayerState`](reference/enumerations/PlayerState.md)

##### firmwareMessage?

[`FirmwareMessage`](reference/type-aliases/FirmwareMessage.md)

#### Returns

`void`

#### Implementation of

[`IMediaStatusState`](reference/interfaces/IMediaStatusState.md).[`setPlayerState`](../interfaces/IMediaStatusState.md#setplayerstate)

***

### setSeeking()

> **setSeeking**(): `void`

#### Returns

`void`

***

### setTimeInfo()

> **setTimeInfo**(`currentTime`, `duration?`, `firmwareMessage?`): `void`

#### Parameters

##### currentTime

`number`

##### duration?

`number`

##### firmwareMessage?

[`FirmwareMessage`](reference/type-aliases/FirmwareMessage.md)

#### Returns

`void`

#### Implementation of

[`IMediaStatusState`](reference/interfaces/IMediaStatusState.md).[`setTimeInfo`](../interfaces/IMediaStatusState.md#settimeinfo)

***

### setTracks()

> **setTracks**(`tracks`, `firmwareMessage?`): `void`

#### Parameters

##### tracks

[`Track`](reference/interfaces/Track.md)[]

##### firmwareMessage?

[`FirmwareMessage`](reference/type-aliases/FirmwareMessage.md)

#### Returns

`void`

#### Implementation of

[`IMediaStatusState`](reference/interfaces/IMediaStatusState.md).[`setTracks`](../interfaces/IMediaStatusState.md#settracks)

***

### setVolume()

> **setVolume**(`level`, `muted`, `firmwareMessage?`): `void`

#### Parameters

##### level

`number`

##### muted

`boolean` = `false`

##### firmwareMessage?

[`FirmwareMessage`](reference/type-aliases/FirmwareMessage.md)

#### Returns

`void`

#### Implementation of

[`IMediaStatusState`](reference/interfaces/IMediaStatusState.md).[`setVolume`](../interfaces/IMediaStatusState.md#setvolume)
