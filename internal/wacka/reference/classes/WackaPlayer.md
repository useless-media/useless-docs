# WackaPlayer

## Extends

- `Emitter`<[`WackaPlayerEventList`](reference/interfaces/WackaPlayerEventList.md)>

## Implements

- [`IAdvancedWackaPlayer`](reference/interfaces/IAdvancedWackaPlayer.md)

## Constructors

### Constructor

> **new WackaPlayer**(`args?`): `WackaPlayer`

#### Parameters

##### args?

`WackaPlayerArgs`

#### Returns

`WackaPlayer`

#### Overrides

`Emitter<WackaPlayerEventList>.constructor`

## Accessors

### absoluteDuration

#### Get Signature

> **get** **absoluteDuration**(): `number`

##### Returns

`number`

***

### absoluteSeekableRange

#### Get Signature

> **get** **absoluteSeekableRange**(): `SeekableRange` | `undefined`

##### Returns

`SeekableRange` | `undefined`

***

### absoluteTime

#### Get Signature

> **get** **absoluteTime**(): `number`

##### Returns

`number`

***

### activeTracks

#### Get Signature

> **get** **activeTracks**(): `ActiveTracks`

##### Returns

`ActiveTracks`

***

### allTracks

#### Get Signature

> **get** **allTracks**(): `Track`[]

##### Returns

`Track`[]

***

### audioTracks

#### Get Signature

> **get** **audioTracks**(): `AudioTrack`[]

##### Returns

`AudioTrack`[]

***

### contentDuration

#### Get Signature

> **get** **contentDuration**(): `number`

##### Returns

`number`

***

### contentSeekableRange

#### Get Signature

> **get** **contentSeekableRange**(): `SeekableRange` | `undefined`

##### Returns

`SeekableRange` | `undefined`

***

### contentTime

#### Get Signature

> **get** **contentTime**(): `number`

##### Returns

`number`

***

### engine

#### Get Signature

> **get** **engine**(): [`IWackaEngine`](reference/interfaces/IWackaEngine.md)

##### Returns

[`IWackaEngine`](reference/interfaces/IWackaEngine.md)

***

### playbackState

#### Get Signature

> **get** **playbackState**(): `PlaybackStates`

##### Returns

`PlaybackStates`

***

### state

#### Get Signature

> **get** **state**(): [`AdvertisementState`](reference/interfaces/AdvertisementState.md) & [`MediaTrackState`](../interfaces/MediaTrackState.md) & [`PlaybackEngineState`](../interfaces/PlaybackEngineState.md)

##### Returns

[`AdvertisementState`](reference/interfaces/AdvertisementState.md) & [`MediaTrackState`](../interfaces/MediaTrackState.md) & [`PlaybackEngineState`](../interfaces/PlaybackEngineState.md)

***

### stream

#### Get Signature

> **get** **stream**(): `Stream` | `undefined`

##### Returns

`Stream` | `undefined`

***

### streamRestrictions

#### Get Signature

> **get** **streamRestrictions**(): `StreamRestrictions`

##### Returns

`StreamRestrictions`

***

### textTracks

#### Get Signature

> **get** **textTracks**(): `TextTrack$1`[]

##### Returns

`TextTrack$1`[]

***

### videoTracks

#### Get Signature

> **get** **videoTracks**(): `VideoTrack`[]

##### Returns

`VideoTrack`[]

## Methods

### configure()

> **configure**(`configuration`): `Promise`<`void`>

#### Parameters

##### configuration

`Partial`<[`WackaPlayerConfiguration`](reference/interfaces/WackaPlayerConfiguration.md)>

#### Returns

`Promise`<`void`>

***

### configureEngine()

> **configureEngine**(`configuration`): `Promise`<`void`>

#### Parameters

##### configuration

[`WackaEngineConfiguration`](reference/interfaces/WackaEngineConfiguration.md)

#### Returns

`Promise`<`void`>

***

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

***

### configurePlaybackEngine()

> **configurePlaybackEngine**(`configuration`): `Promise`<`void`>

#### Parameters

##### configuration

`PlaybackEngineConfiguration`

#### Returns

`Promise`<`void`>

***

### destroy()

> **destroy**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Overrides

`Emitter.destroy`

***

### getAdvertisementHandlerById()

> **getAdvertisementHandlerById**(`id`): [`AdvertisementHandler`](AdvertisementHandler.md)<[`AdvertisementHandlerConfiguration`](reference/interfaces/AdvertisementHandlerConfiguration.md)> | `undefined`

#### Parameters

##### id

`string`

#### Returns

[`AdvertisementHandler`](AdvertisementHandler.md)<[`AdvertisementHandlerConfiguration`](reference/interfaces/AdvertisementHandlerConfiguration.md)> | `undefined`

***

### getAdvertisementHandlers()

> **getAdvertisementHandlers**(): [`AdvertisementHandler`](AdvertisementHandler.md)<[`AdvertisementHandlerConfiguration`](reference/interfaces/AdvertisementHandlerConfiguration.md)>[]

#### Returns

[`AdvertisementHandler`](AdvertisementHandler.md)<[`AdvertisementHandlerConfiguration`](reference/interfaces/AdvertisementHandlerConfiguration.md)>[]

***

### getConfiguration()

> **getConfiguration**(): `Promise`<[`WackaPlayerConfiguration`](reference/interfaces/WackaPlayerConfiguration.md)>

#### Returns

`Promise`<[`WackaPlayerConfiguration`](reference/interfaces/WackaPlayerConfiguration.md)>

***

### getDeviceProfile()

> **getDeviceProfile**(): `PlaybackConfigurationProfile`

#### Returns

`PlaybackConfigurationProfile`

***

### getEngineConfiguration()

> **getEngineConfiguration**(): `Promise`<`Partial`<[`WackaEngineConfiguration`](reference/interfaces/WackaEngineConfiguration.md)>>

#### Returns

`Promise`<`Partial`<[`WackaEngineConfiguration`](reference/interfaces/WackaEngineConfiguration.md)>>

***

### getHlsReference()

> **getHlsReference**(): `HlsReference` | `undefined`

#### Returns

`HlsReference` | `undefined`

***

### getLogLevel()

> **getLogLevel**(): `LogLevels`

#### Returns

`LogLevels`

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

***

### getPlaybackConfigurationProfile()

> **getPlaybackConfigurationProfile**(`name`): `PlaybackConfigurationProfile`

#### Parameters

##### name

`string`

#### Returns

`PlaybackConfigurationProfile`

***

### getPlaybackConfigurationProfileNames()

> **getPlaybackConfigurationProfileNames**(): `PlaybackConfigurationProfileNames`

#### Returns

`PlaybackConfigurationProfileNames`

***

### getPlaybackConfigurationProfiles()

> **getPlaybackConfigurationProfiles**(): `Record`<`string`, `PlaybackConfigurationProfile`>

#### Returns

`Record`<`string`, `PlaybackConfigurationProfile`>

***

### getPlaybackConfigurations()

> **getPlaybackConfigurations**(): `PlaybackConfigurations`

#### Returns

`PlaybackConfigurations`

***

### getPlaybackEngineConfiguration()

> **getPlaybackEngineConfiguration**(): `Promise`<`Partial`<`PlaybackEngineConfiguration`>>

#### Returns

`Promise`<`Partial`<`PlaybackEngineConfiguration`>>

***

### getShakaReference()

> **getShakaReference**(): `ShakaReference` | `undefined`

#### Returns

`ShakaReference` | `undefined`

***

### getUniquePlaybackConfigurationProfileNames()

> **getUniquePlaybackConfigurationProfileNames**(): `string`[]

#### Returns

`string`[]

***

### initialize()

> **initialize**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

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

`string`

###### startTime?

`number`

##### Returns

`Promise`<`void`>

***

### pause()

> **pause**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### play()

> **play**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### preload()

> **preload**(`playback`): `Promise`<`void`>

#### Parameters

##### playback

`Playback`

#### Returns

`Promise`<`void`>

***

### preloadPlayers()

> **preloadPlayers**(`types?`): `Promise`<`void`>

#### Parameters

##### types?

`string`[]

#### Returns

`Promise`<`void`>

***

### registerAdvertisementHandler()

> **registerAdvertisementHandler**<`THandler`, `THandlerConfiguration`>(`handler`, `configuration?`): `void`

#### Type Parameters

##### THandler

`THandler` *extends* [`AdvertisementHandler`](AdvertisementHandler.md)<[`AdvertisementHandlerConfiguration`](reference/interfaces/AdvertisementHandlerConfiguration.md)>

##### THandlerConfiguration

`THandlerConfiguration` *extends* [`AdvertisementHandlerConfiguration`](reference/interfaces/AdvertisementHandlerConfiguration.md)

#### Parameters

##### handler

`THandler`

##### configuration?

`THandlerConfiguration`

#### Returns

`void`

***

### registerDeviceProfile()

> **registerDeviceProfile**(`deviceProfile`): `void`

#### Parameters

##### deviceProfile

`PlaybackConfigurationProfile`

#### Returns

`void`

***

### registerDrmIntegration()

> **registerDrmIntegration**(`integration`): `void`

#### Parameters

##### integration

[`DrmIntegration`](reference/classes/DrmIntegration.md)

#### Returns

`void`

***

### registerHlsReference()

> **registerHlsReference**(`hls`): `void`

#### Parameters

##### hls

`HlsReference`

#### Returns

`void`

#### Implementation of

[`IAdvancedWackaPlayer`](reference/interfaces/IAdvancedWackaPlayer.md).[`registerHlsReference`](../interfaces/IAdvancedWackaPlayer.md#registerhlsreference)

***

### registerNetworkIntegration()

> **registerNetworkIntegration**(`integration`): `void`

#### Parameters

##### integration

[`NetworkIntegration`](reference/classes/NetworkIntegration.md)

#### Returns

`void`

***

### registerPlaybackConfigurationProfile()

> **registerPlaybackConfigurationProfile**(`name`, `profile`): `void`

#### Parameters

##### name

`string`

##### profile

`PlaybackConfigurationProfile`

#### Returns

`void`

***

### registerPlaybackConfigurationProfileByEngineType()

> **registerPlaybackConfigurationProfileByEngineType**<`T`>(`playbackEngineType`, `name`, `configurationProfile`): `void`

#### Type Parameters

##### T

`T` *extends* keyof [`PlaybackConfigurationMap`](reference/interfaces/PlaybackConfigurationMap.md)

#### Parameters

##### playbackEngineType

`PlaybackEngineTypes`

##### name

`string`

##### configurationProfile

`DeepPartial`<[`PlaybackConfigurationMap`](reference/interfaces/PlaybackConfigurationMap.md)[`T`]>

#### Returns

`void`

***

### registerPlaybackEngine()

> **registerPlaybackEngine**<`TType`>(`type`, `clazz`): `void`

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

> **registerShakaReference**(`shaka`): `void`

#### Parameters

##### shaka

`ShakaReference`

#### Returns

`void`

#### Implementation of

[`IAdvancedWackaPlayer`](reference/interfaces/IAdvancedWackaPlayer.md).[`registerShakaReference`](../interfaces/IAdvancedWackaPlayer.md#registershakareference)

***

### reset()

> **reset**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### seek()

> **seek**(`position`, `relative?`, `absolute?`): `Promise`<`void`>

#### Parameters

##### position

`number`

##### relative?

`boolean`

##### absolute?

`boolean`

#### Returns

`Promise`<`void`>

***

### setAudioTrack()

> **setAudioTrack**(`track`): `Promise`<`void`>

#### Parameters

##### track

`number` | `Track`

#### Returns

`Promise`<`void`>

***

### setAudioTrackByIsoLanguage()

> **setAudioTrackByIsoLanguage**(`isoLanguage`, `roles?`): `Promise`<`void`>

#### Parameters

##### isoLanguage

`IsoLanguage`

##### roles?

`Roles`[]

#### Returns

`Promise`<`void`>

***

### setLogLevel()

> **setLogLevel**(`level`): `void`

#### Parameters

##### level

`LogLevels`

#### Returns

`void`

***

### setMediaElement()

> **setMediaElement**(`mediaElement`): `Promise`<`void`>

#### Parameters

##### mediaElement

`HTMLMediaElement`

#### Returns

`Promise`<`void`>

***

### setMuted()

> **setMuted**(`muted?`): `Promise`<`void`>

#### Parameters

##### muted?

`boolean`

#### Returns

`Promise`<`void`>

***

### setPlaybackConfigurationProfiles()

> **setPlaybackConfigurationProfiles**(`profileNames`): `Promise`<`void`>

#### Parameters

##### profileNames

`string`[]

#### Returns

`Promise`<`void`>

***

### setPlaybackEngineSelector()

> **setPlaybackEngineSelector**(`playbackEngineSelector?`): `void`

#### Parameters

##### playbackEngineSelector?

[`IPlaybackEngineSelector`](reference/interfaces/IPlaybackEngineSelector.md)

#### Returns

`void`

***

### setPlaybackRate()

> **setPlaybackRate**(`playbackRate`): `Promise`<`void`>

#### Parameters

##### playbackRate

`number`

#### Returns

`Promise`<`void`>

***

### setPreferredTracks()

> **setPreferredTracks**(`preferred`): `Promise`<`void`>

#### Parameters

##### preferred

`PreferredLanguage`

#### Returns

`Promise`<`void`>

***

### setStartTime()

> **setStartTime**(`startTime?`): `void`

#### Parameters

##### startTime?

`number`

#### Returns

`void`

***

### setTextTrack()

> **setTextTrack**(`track?`): `Promise`<`void`>

#### Parameters

##### track?

`number` | `Track`

#### Returns

`Promise`<`void`>

***

### setTextTrackByIsoLanguage()

> **setTextTrackByIsoLanguage**(`isoLanguage`, `roles?`): `Promise`<`void`>

#### Parameters

##### isoLanguage

`IsoLanguage`

##### roles?

`Roles`[]

#### Returns

`Promise`<`void`>

***

### setTrack()

> **setTrack**(`track`): `Promise`<`void`>

#### Parameters

##### track

`Track`

#### Returns

`Promise`<`void`>

***

### setTrackById()

> **setTrackById**(`id`): `Promise`<`void`>

#### Parameters

##### id

`number`

#### Returns

`Promise`<`void`>

***

### setTracks()

> **setTracks**(`tracks`): `Promise`<`void`>

#### Parameters

##### tracks

`Track`[]

#### Returns

`Promise`<`void`>

***

### setTracksByIds()

> **setTracksByIds**(`ids`): `Promise`<`void`>

#### Parameters

##### ids

`number`[]

#### Returns

`Promise`<`void`>

***

### setVolume()

> **setVolume**(`volume`, `muted?`): `Promise`<`void`>

#### Parameters

##### volume

`number`

##### muted?

`boolean`

#### Returns

`Promise`<`void`>

***

### stop()

> **stop**(`reason?`): `Promise`<`void`>

#### Parameters

##### reason?

`StoppedReasons`

#### Returns

`Promise`<`void`>

***

### unregisterNetworkIntegration()

> **unregisterNetworkIntegration**(`networkIntegrationId`): `void`

#### Parameters

##### networkIntegrationId

`string`

#### Returns

`void`
