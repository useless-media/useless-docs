# ClientProxy

## Constructors

### Constructor

> **new ClientProxy**(`args`): `ClientProxy`

#### Parameters

##### args

`ClientProxyArgs`

#### Returns

`ClientProxy`

## Properties

### i18n

> **i18n**: [`I18n`](reference/interfaces/I18n.md)

***

### loadManager

> **loadManager**: `LoadManager`

***

### timeline

> **timeline**: `TimelineManager`

***

### trackerCollection

> **trackerCollection**: `TrackerCollection`

***

### wacka

> **wacka**: [`WackaPlayer`](reference/interfaces/WackaPlayer.md)

## Methods

### dispatchError()

> **dispatchError**(`error`): `Promise`<`void`>

#### Parameters

##### error

[`IError`](reference/interfaces/IError.md)

#### Returns

`Promise`<`void`>

***

### getClientInformation()

> **getClientInformation**(): `DeCafClientInformation`

#### Returns

`DeCafClientInformation`

***

### getDeviceInformation()

> **getDeviceInformation**(): [`DeCafDeviceInfo`](reference/interfaces/DeCafDeviceInfo.md)

#### Returns

[`DeCafDeviceInfo`](reference/interfaces/DeCafDeviceInfo.md)

***

### getDrmCapabilities()

> **getDrmCapabilities**(): [`DrmCapabilitiesProbeResults`](reference/interfaces/DrmCapabilitiesProbeResults.md) | `undefined`

#### Returns

[`DrmCapabilitiesProbeResults`](reference/interfaces/DrmCapabilitiesProbeResults.md) | `undefined`

***

### getHlsVersion()

> **getHlsVersion**(): `string` | `undefined`

#### Returns

`string` | `undefined`

***

### getPlaybackSession()

> **getPlaybackSession**(): [`PlaybackSession`](reference/interfaces/PlaybackSession.md) | `undefined`

#### Returns

[`PlaybackSession`](reference/interfaces/PlaybackSession.md) | `undefined`

***

### getShakaVersion()

> **getShakaVersion**(): `string` | `undefined`

#### Returns

`string` | `undefined`

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

### registerAdvertisementHandler()

> **registerAdvertisementHandler**<`T`, `TConfiguration`>(`advertisementHandler`, `configuration?`): `void`

#### Type Parameters

##### T

`T` *extends* [`AdvertisementHandler`](AdvertisementHandler.md)<[`AdvertisementHandlerConfiguration`](reference/interfaces/AdvertisementHandlerConfiguration.md)>

##### TConfiguration

`TConfiguration` *extends* [`AdvertisementHandlerConfiguration`](reference/interfaces/AdvertisementHandlerConfiguration.md)

#### Parameters

##### advertisementHandler

`T`

##### configuration?

`TConfiguration`

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

### registerErrorCodes()

> **registerErrorCodes**(`errorCodesEnum`, `errorCodesEnumToNamesMap?`): `void`

#### Parameters

##### errorCodesEnum

`Record`<`string`, `string` | `number`>

##### errorCodesEnumToNamesMap?

`Record`<`string` | `number`, `string`>

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

***

### registerNetworkIntegration()

> **registerNetworkIntegration**(`integration`): `void`

#### Parameters

##### integration

[`NetworkIntegration`](reference/classes/NetworkIntegration.md)

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

### registerShakaReference()

> **registerShakaReference**(`shaka`): `void`

#### Parameters

##### shaka

`ShakaReference`

#### Returns

`void`

***

### registerTimelineItem()

> **registerTimelineItem**(`item`): `void`

#### Parameters

##### item

`Optional`<[`TimelineItem`](reference/interfaces/TimelineItem.md), `"id"` | `"enabled"`>

#### Returns

`void`

***

### registerTracker()

> **registerTracker**(`name`, `tracker`): `void`

#### Parameters

##### name

`string`

##### tracker

`ITracker`

#### Returns

`void`

***

### registerTranslations()

> **registerTranslations**(`translations`): `void`

#### Parameters

##### translations

`Record`<`string`, `TI18nTranslation`>

#### Returns

`void`

***

### setLanguage()

> **setLanguage**(`language`): `void`

#### Parameters

##### language

`string`

#### Returns

`void`

***

### setMetadata()

> **setMetadata**(`metadata`): `void`

#### Parameters

##### metadata

[`Metadata`](reference/interfaces/Metadata.md)

#### Returns

`void`

***

### setMetadatas()

> **setMetadatas**(`metadatas`): `void`

#### Parameters

##### metadatas

[`Metadata`](reference/interfaces/Metadata.md)[]

#### Returns

`void`

***

### setNextContent()

> **setNextContent**(`content`): `void`

#### Parameters

##### content

[`Content`](reference/interfaces/Content.md)

#### Returns

`void`

***

### setTransformationDelegate()

> **setTransformationDelegate**(`delegate`): `void`

#### Parameters

##### delegate

[`LoadManagerLoadTransformationDelegate`](reference/interfaces/LoadManagerLoadTransformationDelegate.md)

#### Returns

`void`

***

### setUiController()

> **setUiController**(`controller`): `void`

#### Parameters

##### controller

[`DecafClientUIController`](reference/classes/DecafClientUIController.md)

#### Returns

`void`

***

### stopPlayback()

> **stopPlayback**(`reason`): `Promise`<`void`>

#### Parameters

##### reason

[`StoppedReasons`](reference/enumerations/StoppedReasons.md)

#### Returns

`Promise`<`void`>

***

### terminate()

> **terminate**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>
