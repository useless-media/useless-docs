# WackaPlayer

## Extends

- `Emitter`<[`WackaPlayerEventList`](reference/interfaces/WackaPlayerEventList.md)>

## Implements

- [`IAdvancedWackaPlayer`](reference/interfaces/IAdvancedWackaPlayer.md)

## Properties

### destroyed

> `protected` **destroyed**: `boolean`

#### Inherited from

`Emitter.destroyed`

## Accessors

### absoluteDuration

#### Get Signature

> **get** **absoluteDuration**(): `number`

##### Returns

`number`

***

### absoluteSeekableRange

#### Get Signature

> **get** **absoluteSeekableRange**(): [`SeekableRange`](reference/interfaces/SeekableRange.md) | `undefined`

##### Returns

[`SeekableRange`](reference/interfaces/SeekableRange.md) | `undefined`

***

### absoluteTime

#### Get Signature

> **get** **absoluteTime**(): `number`

##### Returns

`number`

***

### activeTracks

#### Get Signature

> **get** **activeTracks**(): [`ActiveTracks`](reference/interfaces/ActiveTracks.md)

##### Returns

[`ActiveTracks`](reference/interfaces/ActiveTracks.md)

***

### allTracks

#### Get Signature

> **get** **allTracks**(): [`Track`](reference/interfaces/Track.md)[]

##### Returns

[`Track`](reference/interfaces/Track.md)[]

***

### audioTracks

#### Get Signature

> **get** **audioTracks**(): [`AudioTrack`](reference/interfaces/AudioTrack.md)[]

##### Returns

[`AudioTrack`](reference/interfaces/AudioTrack.md)[]

***

### contentDuration

#### Get Signature

> **get** **contentDuration**(): `number`

##### Returns

`number`

***

### contentSeekableRange

#### Get Signature

> **get** **contentSeekableRange**(): [`SeekableRange`](reference/interfaces/SeekableRange.md) | `undefined`

##### Returns

[`SeekableRange`](reference/interfaces/SeekableRange.md) | `undefined`

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

> **get** **playbackState**(): [`PlaybackStates`](reference/enumerations/PlaybackStates.md)

##### Returns

[`PlaybackStates`](reference/enumerations/PlaybackStates.md)

***

### state

#### Get Signature

> **get** **state**(): `AdvertisementState` & [`MediaTrackState`](reference/interfaces/MediaTrackState.md) & [`PlaybackEngineState`](PlaybackEngineState.md)

##### Returns

`AdvertisementState` & [`MediaTrackState`](reference/interfaces/MediaTrackState.md) & [`PlaybackEngineState`](PlaybackEngineState.md)

***

### stream

#### Get Signature

> **get** **stream**(): [`Stream`](reference/interfaces/Stream.md) | `undefined`

##### Returns

[`Stream`](reference/interfaces/Stream.md) | `undefined`

***

### streamRestrictions

#### Get Signature

> **get** **streamRestrictions**(): [`StreamRestrictions`](reference/interfaces/StreamRestrictions.md)

##### Returns

[`StreamRestrictions`](reference/interfaces/StreamRestrictions.md)

***

### textTracks

#### Get Signature

> **get** **textTracks**(): [`TextTrack`](reference/interfaces/TextTrack.md)[]

##### Returns

[`TextTrack`](reference/interfaces/TextTrack.md)[]

***

### videoTracks

#### Get Signature

> **get** **videoTracks**(): [`VideoTrack`](reference/interfaces/VideoTrack.md)[]

##### Returns

[`VideoTrack`](reference/interfaces/VideoTrack.md)[]

## Methods

### addEventListener()

> **addEventListener**<`K`>(`type`, `subscriber`): `Emitter`<[`WackaPlayerEventList`](reference/interfaces/WackaPlayerEventList.md)<[`AdvertisementAuxiliaryData`](AdvertisementAuxiliaryData.md)>>

#### Type Parameters

##### K

`K` *extends* keyof [`WackaPlayerEventList`](reference/interfaces/WackaPlayerEventList.md)<[`AdvertisementAuxiliaryData`](AdvertisementAuxiliaryData.md)>

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

`Emitter`<[`WackaPlayerEventList`](reference/interfaces/WackaPlayerEventList.md)<[`AdvertisementAuxiliaryData`](AdvertisementAuxiliaryData.md)>>

#### Inherited from

`Emitter.addEventListener`

***

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

`T` *extends* [`PlaybackEngineTypes`](reference/enumerations/PlaybackEngineTypes.md)

##### Parameters

###### playbackConfiguration

`any`

##### Returns

`Promise`<`void`>

#### Call Signature

> **configurePlaybackConfiguration**<`T`>(`playbackConfiguration`, `playbackEngineType`): `Promise`<`void`>

##### Type Parameters

###### T

`T` *extends* [`PlaybackEngineTypes`](reference/enumerations/PlaybackEngineTypes.md)

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

### emit()

> **emit**<`K`>(`type`, `event?`): `Emitter`<[`WackaPlayerEventList`](reference/interfaces/WackaPlayerEventList.md)<[`AdvertisementAuxiliaryData`](AdvertisementAuxiliaryData.md)>>

#### Type Parameters

##### K

`K` *extends* keyof [`WackaPlayerEventList`](reference/interfaces/WackaPlayerEventList.md)<[`AdvertisementAuxiliaryData`](AdvertisementAuxiliaryData.md)>

#### Parameters

##### type

`K`

##### event?

`Optional`<[`WackaPlayerEventList`](reference/interfaces/WackaPlayerEventList.md)<[`AdvertisementAuxiliaryData`](AdvertisementAuxiliaryData.md)>[`K`], `"type"`>

#### Returns

`Emitter`<[`WackaPlayerEventList`](reference/interfaces/WackaPlayerEventList.md)<[`AdvertisementAuxiliaryData`](AdvertisementAuxiliaryData.md)>>

#### Inherited from

`Emitter.emit`

***

### emitAsync()

> **emitAsync**<`K`>(`type`, `event?`): `Emitter`<[`WackaPlayerEventList`](reference/interfaces/WackaPlayerEventList.md)<[`AdvertisementAuxiliaryData`](AdvertisementAuxiliaryData.md)>>

#### Type Parameters

##### K

`K` *extends* keyof [`WackaPlayerEventList`](reference/interfaces/WackaPlayerEventList.md)<[`AdvertisementAuxiliaryData`](AdvertisementAuxiliaryData.md)>

#### Parameters

##### type

`K`

##### event?

`Optional`<[`WackaPlayerEventList`](reference/interfaces/WackaPlayerEventList.md)<[`AdvertisementAuxiliaryData`](AdvertisementAuxiliaryData.md)>[`K`], `"type"`>

#### Returns

`Emitter`<[`WackaPlayerEventList`](reference/interfaces/WackaPlayerEventList.md)<[`AdvertisementAuxiliaryData`](AdvertisementAuxiliaryData.md)>>

#### Inherited from

`Emitter.emitAsync`

***

### ensureNotDestroyed()

> `protected` **ensureNotDestroyed**(`subscriber`): (...`args`) => `void`

#### Parameters

##### subscriber

`TSubscriber`

#### Returns

> (...`args`): `void`

##### Parameters

###### args

...`any`[]

##### Returns

`void`

#### Inherited from

`Emitter.ensureNotDestroyed`

***

### getAdvertisementHandlerById()

> **getAdvertisementHandlerById**(`id`): [`AdvertisementHandler`](reference/classes/AdvertisementHandler.md)<[`AdvertisementHandlerConfiguration`](AdvertisementHandlerConfiguration.md)> | `undefined`

#### Parameters

##### id

`string`

#### Returns

[`AdvertisementHandler`](reference/classes/AdvertisementHandler.md)<[`AdvertisementHandlerConfiguration`](AdvertisementHandlerConfiguration.md)> | `undefined`

***

### getAdvertisementHandlers()

> **getAdvertisementHandlers**(): [`AdvertisementHandler`](reference/classes/AdvertisementHandler.md)<[`AdvertisementHandlerConfiguration`](AdvertisementHandlerConfiguration.md)>[]

#### Returns

[`AdvertisementHandler`](reference/classes/AdvertisementHandler.md)<[`AdvertisementHandlerConfiguration`](AdvertisementHandlerConfiguration.md)>[]

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

> **getLogLevel**(): [`LogLevels`](reference/enumerations/LogLevels.md)

#### Returns

[`LogLevels`](reference/enumerations/LogLevels.md)

***

### getPlaybackConfiguration()

#### Call Signature

> **getPlaybackConfiguration**(): `any`

##### Returns

`any`

#### Call Signature

> **getPlaybackConfiguration**<`T`>(`playbackEngineType`): `Partial`<[`PlaybackConfigurationMap`](reference/interfaces/PlaybackConfigurationMap.md)[`T`]>

##### Type Parameters

###### T

`T` *extends* [`PlaybackEngineTypes`](reference/enumerations/PlaybackEngineTypes.md)

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

### off()

> **off**<`K`>(`type?`, `subscriber?`): `Emitter`<[`WackaPlayerEventList`](reference/interfaces/WackaPlayerEventList.md)<[`AdvertisementAuxiliaryData`](AdvertisementAuxiliaryData.md)>>

#### Type Parameters

##### K

`K` *extends* keyof [`WackaPlayerEventList`](reference/interfaces/WackaPlayerEventList.md)<[`AdvertisementAuxiliaryData`](AdvertisementAuxiliaryData.md)>

#### Parameters

##### type?

`K`

##### subscriber?

(`e`) => `void`

#### Returns

`Emitter`<[`WackaPlayerEventList`](reference/interfaces/WackaPlayerEventList.md)<[`AdvertisementAuxiliaryData`](AdvertisementAuxiliaryData.md)>>

#### Inherited from

`Emitter.off`

***

### on()

> **on**<`K`>(`type`, `subscriber`): `Emitter`<[`WackaPlayerEventList`](reference/interfaces/WackaPlayerEventList.md)<[`AdvertisementAuxiliaryData`](AdvertisementAuxiliaryData.md)>>

#### Type Parameters

##### K

`K` *extends* keyof [`WackaPlayerEventList`](reference/interfaces/WackaPlayerEventList.md)<[`AdvertisementAuxiliaryData`](AdvertisementAuxiliaryData.md)>

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

`Emitter`<[`WackaPlayerEventList`](reference/interfaces/WackaPlayerEventList.md)<[`AdvertisementAuxiliaryData`](AdvertisementAuxiliaryData.md)>>

#### Inherited from

`Emitter.on`

***

### once()

> **once**<`K`>(`type`, `subscriber`): `Emitter`<[`WackaPlayerEventList`](reference/interfaces/WackaPlayerEventList.md)<[`AdvertisementAuxiliaryData`](AdvertisementAuxiliaryData.md)>>

#### Type Parameters

##### K

`K` *extends* keyof [`WackaPlayerEventList`](reference/interfaces/WackaPlayerEventList.md)<[`AdvertisementAuxiliaryData`](AdvertisementAuxiliaryData.md)>

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

`Emitter`<[`WackaPlayerEventList`](reference/interfaces/WackaPlayerEventList.md)<[`AdvertisementAuxiliaryData`](AdvertisementAuxiliaryData.md)>>

#### Inherited from

`Emitter.once`

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

[`Playback`](reference/interfaces/Playback.md)

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

`THandler` *extends* [`AdvertisementHandler`](reference/classes/AdvertisementHandler.md)<[`AdvertisementHandlerConfiguration`](AdvertisementHandlerConfiguration.md)>

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

`IAdvancedWackaPlayer.registerHlsReference`

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

[`PlaybackEngineTypes`](reference/enumerations/PlaybackEngineTypes.md)

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

`IPlaybackEngines`[`TType`]

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

`IAdvancedWackaPlayer.registerShakaReference`

***

### removeEventListener()

> **removeEventListener**<`K`>(`type?`, `subscriber?`): `Emitter`<[`WackaPlayerEventList`](reference/interfaces/WackaPlayerEventList.md)<[`AdvertisementAuxiliaryData`](AdvertisementAuxiliaryData.md)>>

#### Type Parameters

##### K

`K` *extends* keyof [`WackaPlayerEventList`](reference/interfaces/WackaPlayerEventList.md)<[`AdvertisementAuxiliaryData`](AdvertisementAuxiliaryData.md)>

#### Parameters

##### type?

`K`

##### subscriber?

(`e`) => `void`

#### Returns

`Emitter`<[`WackaPlayerEventList`](reference/interfaces/WackaPlayerEventList.md)<[`AdvertisementAuxiliaryData`](AdvertisementAuxiliaryData.md)>>

#### Inherited from

`Emitter.removeEventListener`

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

`number` | [`Track`](reference/interfaces/Track.md)

#### Returns

`Promise`<`void`>

***

### setAudioTrackByIsoLanguage()

> **setAudioTrackByIsoLanguage**(`isoLanguage`, `roles?`): `Promise`<`void`>

#### Parameters

##### isoLanguage

`IsoLanguage`

##### roles?

[`Roles`](reference/enumerations/Roles.md)[]

#### Returns

`Promise`<`void`>

***

### setDebug()

> **setDebug**(`value`): `void`

#### Parameters

##### value

`boolean`

#### Returns

`void`

#### Inherited from

`Emitter.setDebug`

***

### setLogLevel()

> **setLogLevel**(`level`): `void`

#### Parameters

##### level

[`LogLevels`](reference/enumerations/LogLevels.md)

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

`IPlaybackEngineSelector`

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

[`PreferredLanguage`](reference/interfaces/PreferredLanguage.md)

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

`number` | [`Track`](reference/interfaces/Track.md)

#### Returns

`Promise`<`void`>

***

### setTextTrackByIsoLanguage()

> **setTextTrackByIsoLanguage**(`isoLanguage`, `roles?`): `Promise`<`void`>

#### Parameters

##### isoLanguage

`IsoLanguage`

##### roles?

[`Roles`](reference/enumerations/Roles.md)[]

#### Returns

`Promise`<`void`>

***

### setTrack()

> **setTrack**(`track`): `Promise`<`void`>

#### Parameters

##### track

[`Track`](reference/interfaces/Track.md)

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

[`Track`](reference/interfaces/Track.md)[]

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

[`StoppedReasons`](reference/enumerations/StoppedReasons.md)

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
