# IWackaEngine

## Properties

### absoluteDuration

> **absoluteDuration**: `number`

***

### absoluteSeekableRange

> **absoluteSeekableRange**: `SeekableRange` | `undefined`

***

### absoluteTime

> **absoluteTime**: `number`

***

### activeTracks

> **activeTracks**: `ActiveTracks`

***

### allTracks

> **allTracks**: `Track`[]

***

### audioTracks

> **audioTracks**: `AudioTrack`[]

***

### configure()

> **configure**: (`configuration`) => `Promise`<`void`>

#### Parameters

##### configuration

`Partial`<[`WackaEngineConfiguration`](reference/interfaces/WackaEngineConfiguration.md)>

#### Returns

`Promise`<`void`>

***

### configurePlaybackEngine()

> **configurePlaybackEngine**: (`configuration`) => `Promise`<`void`>

#### Parameters

##### configuration

`PlaybackEngineConfiguration`

#### Returns

`Promise`<`void`>

***

### debug

> **debug**: [`DebugController`](reference/classes/DebugController.md)

***

### destroy()

> **destroy**: () => `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### getConfiguration()

> **getConfiguration**: () => `Promise`<`Partial`<[`WackaEngineConfiguration`](reference/interfaces/WackaEngineConfiguration.md)>>

#### Returns

`Promise`<`Partial`<[`WackaEngineConfiguration`](reference/interfaces/WackaEngineConfiguration.md)>>

***

### getDeviceProfile()

> **getDeviceProfile**: () => `PlaybackConfigurationProfile`

#### Returns

`PlaybackConfigurationProfile`

***

### getHlsReference()

> **getHlsReference**: () => `HlsReference` | `undefined`

#### Returns

`HlsReference` | `undefined`

***

### getLogLevel()

> **getLogLevel**: () => `LogLevels`

#### Returns

`LogLevels`

***

### getPlaybackConfigurationProfile()

> **getPlaybackConfigurationProfile**: (`name`) => `PlaybackConfigurationProfile`

#### Parameters

##### name

`string`

#### Returns

`PlaybackConfigurationProfile`

***

### getPlaybackConfigurationProfileNames()

> **getPlaybackConfigurationProfileNames**: () => `PlaybackConfigurationProfileNames`

#### Returns

`PlaybackConfigurationProfileNames`

***

### getPlaybackConfigurationProfiles()

> **getPlaybackConfigurationProfiles**: () => `Record`<`string`, `PlaybackConfigurationProfile`>

#### Returns

`Record`<`string`, `PlaybackConfigurationProfile`>

***

### getPlaybackConfigurations()

> **getPlaybackConfigurations**: () => `PlaybackConfigurations`

#### Returns

`PlaybackConfigurations`

***

### getPlaybackEngineConfiguration()

> **getPlaybackEngineConfiguration**: () => `Promise`<`Partial`<`PlaybackEngineConfiguration`>>

#### Returns

`Promise`<`Partial`<`PlaybackEngineConfiguration`>>

***

### getShakaReference()

> **getShakaReference**: () => `ShakaReference` | `undefined`

#### Returns

`ShakaReference` | `undefined`

***

### getUniquePlaybackConfigurationProfileNames()

> **getUniquePlaybackConfigurationProfileNames**: () => `string`[]

#### Returns

`string`[]

***

### initialize()

> **initialize**: () => `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### pause()

> **pause**: () => `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### play()

> **play**: () => `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### playbackState

> **playbackState**: `PlaybackStates`

***

### preload()

> **preload**: (`playback`) => `Promise`<`void`>

#### Parameters

##### playback

`Playback`

#### Returns

`Promise`<`void`>

***

### preloadPlayers()

> **preloadPlayers**: (`types?`) => `Promise`<`void`>

#### Parameters

##### types?

`string`[]

#### Returns

`Promise`<`void`>

***

### registerDeviceProfile()

> **registerDeviceProfile**: (`deviceProfile`) => `void`

#### Parameters

##### deviceProfile

`PlaybackConfigurationProfile`

#### Returns

`void`

***

### registerDrmIntegration()

> **registerDrmIntegration**: (`drmIntegration`) => `void`

#### Parameters

##### drmIntegration

[`DrmIntegration`](reference/classes/DrmIntegration.md)

#### Returns

`void`

***

### registerHlsReference()

> **registerHlsReference**: (`hls`) => `void`

#### Parameters

##### hls

`HlsReference`

#### Returns

`void`

***

### registerNetworkIntegration()

> **registerNetworkIntegration**: (`engine`) => `void`

#### Parameters

##### engine

[`NetworkIntegration`](reference/classes/NetworkIntegration.md)

#### Returns

`void`

***

### registerPlaybackConfigurationProfile()

> **registerPlaybackConfigurationProfile**: (`name`, `profile`) => `void`

#### Parameters

##### name

`string`

##### profile

`PlaybackConfigurationProfile`

#### Returns

`void`

***

### registerPlaybackConfigurationProfileByEngineType()

> **registerPlaybackConfigurationProfileByEngineType**: <`T`>(`playbackEngineType`, `name`, `configurationProfile`) => `void`

#### Type Parameters

##### T

`T` *extends* `PlaybackEngineTypes`

#### Parameters

##### playbackEngineType

`T`

##### name

`string`

##### configurationProfile

`DeepPartial`<[`PlaybackConfigurationMap`](reference/interfaces/PlaybackConfigurationMap.md)[`T`]>

#### Returns

`void`

***

### registerPlaybackEngine()

> **registerPlaybackEngine**: <`TType`>(`type`, `clazz`) => `void`

#### Type Parameters

##### TType

`TType` *extends* `string`

#### Parameters

##### type

`TType`

##### clazz

[`IPlaybackEngines`](reference/interfaces/IPlaybackEngines.md)[`TType`]

#### Returns

`void`

***

### registerShakaReference()

> **registerShakaReference**: (`shaka`) => `void`

#### Parameters

##### shaka

`ShakaReference`

#### Returns

`void`

***

### reset()

> **reset**: () => `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### seek()

> **seek**: (`position`, `relative?`) => `Promise`<`void`>

#### Parameters

##### position

`number`

##### relative?

`boolean`

#### Returns

`Promise`<`void`>

***

### setAudioTrack()

> **setAudioTrack**: (`track`) => `Promise`<`void`>

#### Parameters

##### track

`Track`

#### Returns

`Promise`<`void`>

***

### setAudioTrackByIsoLanguage()

> **setAudioTrackByIsoLanguage**: (`isoLanguage`, `roles?`) => `Promise`<`void`>

#### Parameters

##### isoLanguage

`IsoLanguage`

##### roles?

`Roles`[]

#### Returns

`Promise`<`void`>

***

### setDelegate()

> **setDelegate**: (`delegate`) => `void`

#### Parameters

##### delegate

[`WackaEngineDelegate`](reference/interfaces/WackaEngineDelegate.md)

#### Returns

`void`

***

### setLogLevel()

> **setLogLevel**: (`level`) => `void`

#### Parameters

##### level

`LogLevels`

#### Returns

`void`

***

### setMediaElement()

> **setMediaElement**: (`mediaElement`) => `Promise`<`void`>

#### Parameters

##### mediaElement

`HTMLMediaElement`

#### Returns

`Promise`<`void`>

***

### setMuted()

> **setMuted**: (`muted?`) => `Promise`<`void`>

#### Parameters

##### muted?

`boolean`

#### Returns

`Promise`<`void`>

***

### setPlaybackConfigurationProfiles()

> **setPlaybackConfigurationProfiles**: (`profileNames`) => `Promise`<`void`>

#### Parameters

##### profileNames

`string`[]

#### Returns

`Promise`<`void`>

***

### setPlaybackEngineSelector()

> **setPlaybackEngineSelector**: (`playbackEngineSelector?`) => `void`

#### Parameters

##### playbackEngineSelector?

[`IPlaybackEngineSelector`](reference/interfaces/IPlaybackEngineSelector.md)

#### Returns

`void`

***

### setPlaybackRate()

> **setPlaybackRate**: (`playbackRate`) => `Promise`<`void`>

#### Parameters

##### playbackRate

`number`

#### Returns

`Promise`<`void`>

***

### setPreferredTracks()

> **setPreferredTracks**: (`preferred`) => `Promise`<`void`>

#### Parameters

##### preferred

`PreferredLanguage`

#### Returns

`Promise`<`void`>

***

### setStartTime()

> **setStartTime**: (`startTime?`) => `void`

#### Parameters

##### startTime?

`number`

#### Returns

`void`

***

### setTextTrack()

> **setTextTrack**: (`track?`) => `Promise`<`void`>

#### Parameters

##### track?

`Track`

#### Returns

`Promise`<`void`>

***

### setTextTrackByIsoLanguage()

> **setTextTrackByIsoLanguage**: (`isoLanguage`, `roles?`) => `Promise`<`void`>

#### Parameters

##### isoLanguage

`IsoLanguage`

##### roles?

`Roles`[]

#### Returns

`Promise`<`void`>

***

### setTrack()

> **setTrack**: (`track`) => `Promise`<`void`>

#### Parameters

##### track

`Track`

#### Returns

`Promise`<`void`>

***

### setTrackById()

> **setTrackById**: (`id`) => `Promise`<`void`>

#### Parameters

##### id

`number`

#### Returns

`Promise`<`void`>

***

### setTracks()

> **setTracks**: (`tracks`) => `Promise`<`void`>

#### Parameters

##### tracks

`Track`[]

#### Returns

`Promise`<`void`>

***

### setTracksByIds()

> **setTracksByIds**: (`ids`) => `Promise`<`void`>

#### Parameters

##### ids

`number`[]

#### Returns

`Promise`<`void`>

***

### setVolume()

> **setVolume**: (`volume`, `muted?`) => `Promise`<`void`>

#### Parameters

##### volume

`number`

##### muted?

`boolean`

#### Returns

`Promise`<`void`>

***

### state

> **state**: [`MediaTrackState`](reference/interfaces/MediaTrackState.md) & [`PlaybackEngineState`](PlaybackEngineState.md)

***

### stop()

> **stop**: (`reason?`) => `Promise`<`void`>

#### Parameters

##### reason?

`StoppedReasons`

#### Returns

`Promise`<`void`>

***

### stream

> **stream**: `Stream` | `undefined`

***

### textTracks

> **textTracks**: `TextTrack$1`[]

***

### unregisterNetworkIntegration()

> **unregisterNetworkIntegration**: (`networkIntegrationId`) => `void`

#### Parameters

##### networkIntegrationId

`string`

#### Returns

`void`

***

### videoTracks

> **videoTracks**: `VideoTrack`[]

## Methods

### configurePlaybackConfiguration()

#### Call Signature

> **configurePlaybackConfiguration**<`T`>(`playbackConfiguration`): `Promise`<`void`>

##### Type Parameters

###### T

`T` *extends* `PlaybackEngineTypes`

##### Parameters

###### playbackConfiguration

`DeepPartial`<`AnyPlaybackConfiguration`>

##### Returns

`Promise`<`void`>

#### Call Signature

> **configurePlaybackConfiguration**<`T`>(`playbackConfiguration`, `playbackEngineType`): `Promise`<`void`>

##### Type Parameters

###### T

`T` *extends* `PlaybackEngineTypes`

##### Parameters

###### playbackConfiguration

`DeepPartial`<[`PlaybackConfigurationMap`](reference/interfaces/PlaybackConfigurationMap.md)[`T`]>

###### playbackEngineType

`T`

##### Returns

`Promise`<`void`>

#### Call Signature

> **configurePlaybackConfiguration**<`T`>(`playbackConfiguration`, `playbackEngineType?`): `Promise`<`void`>

##### Type Parameters

###### T

`T` *extends* `PlaybackEngineTypes`

##### Parameters

###### playbackConfiguration

`DeepPartial`<`AnyPlaybackConfiguration`> | `Partial`<[`PlaybackConfigurationMap`](reference/interfaces/PlaybackConfigurationMap.md)[`T`]>

###### playbackEngineType?

`T`

##### Returns

`Promise`<`void`>

***

### getPlaybackConfiguration()

#### Call Signature

> **getPlaybackConfiguration**(): `AnyPlaybackConfiguration`

##### Returns

`AnyPlaybackConfiguration`

#### Call Signature

> **getPlaybackConfiguration**<`T`>(`playbackEngineType`): `Partial`<[`PlaybackConfigurationMap`](reference/interfaces/PlaybackConfigurationMap.md)[`T`]>

##### Type Parameters

###### T

`T` *extends* `PlaybackEngineTypes`

##### Parameters

###### playbackEngineType

`T`

##### Returns

`Partial`<[`PlaybackConfigurationMap`](reference/interfaces/PlaybackConfigurationMap.md)[`T`]>

#### Call Signature

> **getPlaybackConfiguration**<`T`>(`playbackEngineType?`): `AnyPlaybackConfiguration` | `Partial`<[`PlaybackConfigurationMap`](reference/interfaces/PlaybackConfigurationMap.md)[`T`]>

##### Type Parameters

###### T

`T` *extends* `PlaybackEngineTypes`

##### Parameters

###### playbackEngineType?

`T`

##### Returns

`AnyPlaybackConfiguration` | `Partial`<[`PlaybackConfigurationMap`](reference/interfaces/PlaybackConfigurationMap.md)[`T`]>

***

### load()

#### Call Signature

> **load**(`startTime?`): `Promise`<`void`>

##### Parameters

###### startTime?

`number`

##### Returns

`Promise`<`void`>

#### Call Signature

> **load**(`streamUrl?`): `Promise`<`void`>

##### Parameters

###### streamUrl?

`string`

##### Returns

`Promise`<`void`>

#### Call Signature

> **load**(`streamUrl`, `startTime?`): `Promise`<`void`>

##### Parameters

###### streamUrl

`string` | `number`

###### startTime?

`number`

##### Returns

`Promise`<`void`>

#### Call Signature

> **load**(`streamUrlOrStartTime?`, `startTime?`): `Promise`<`void`>

##### Parameters

###### streamUrlOrStartTime?

`string` | `number`

###### startTime?

`number`

##### Returns

`Promise`<`void`>
