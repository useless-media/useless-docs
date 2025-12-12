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

> **i18n**: `I18n`

***

### loadManager

> **loadManager**: `LoadManager`

***

### timeline

> **timeline**: [`TimelineManager`](reference/classes/TimelineManager.md)

***

### trackerCollection

> **trackerCollection**: [`TrackerCollection`](reference/classes/TrackerCollection.md)

***

### wacka

> **wacka**: `WackaPlayer`

## Methods

### dispatchError()

> **dispatchError**(`error`): `Promise`<`void`>

#### Parameters

##### error

`IError`

#### Returns

`Promise`<`void`>

***

### getClientInformation()

> **getClientInformation**(): [`DeCafClientInformation`](reference/interfaces/DeCafClientInformation.md)

#### Returns

[`DeCafClientInformation`](reference/interfaces/DeCafClientInformation.md)

***

### getDeviceInformation()

> **getDeviceInformation**(): `DeCafDeviceInfo`

#### Returns

`DeCafDeviceInfo`

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

> **getPlaybackSession**(): `PlaybackSession` | `undefined`

#### Returns

`PlaybackSession` | `undefined`

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

`T` *extends* `AdvertisementHandler`<`AdvertisementHandlerConfiguration`>

##### TConfiguration

`TConfiguration` *extends* `AdvertisementHandlerConfiguration`

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

`DrmIntegration`

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

`NetworkIntegration`

#### Returns

`void`

***

### registerPlaybackConfigurationProfileByEngineType()

> **registerPlaybackConfigurationProfileByEngineType**<`T`>(`playbackEngineType`, `name`, `configurationProfile`): `void`

#### Type Parameters

##### T

`T` *extends* keyof `PlaybackConfigurationMap`

#### Parameters

##### playbackEngineType

`PlaybackEngineTypes`

##### name

`string`

##### configurationProfile

`DeepPartial`<`PlaybackConfigurationMap`[`T`]>

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

`Optional`<`TimelineItem`, `"id"` | `"enabled"`>

#### Returns

`void`

***

### registerTracker()

> **registerTracker**(`name`, `tracker`): `void`

#### Parameters

##### name

`string`

##### tracker

[`ITracker`](reference/interfaces/ITracker.md)

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

`Metadata`

#### Returns

`void`

***

### setMetadatas()

> **setMetadatas**(`metadatas`): `void`

#### Parameters

##### metadatas

`Metadata`[]

#### Returns

`void`

***

### setNextContent()

> **setNextContent**(`content`): `void`

#### Parameters

##### content

`Content`

#### Returns

`void`

***

### setTransformationDelegate()

> **setTransformationDelegate**(`delegate`): `void`

#### Parameters

##### delegate

`LoadManagerLoadTransformationDelegate`

#### Returns

`void`

***

### setUiController()

> **setUiController**(`controller`): `void`

#### Parameters

##### controller

`DecafClientUIController`

#### Returns

`void`

***

### stopPlayback()

> **stopPlayback**(`reason`): `Promise`<`void`>

#### Parameters

##### reason

`StoppedReasons`

#### Returns

`Promise`<`void`>

***

### terminate()

> **terminate**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>
