# IAdvertisementHandlerIntegrationDelegate<TAugmentedAdvertisementAuxiliaryData>

## Type Parameters

### TAugmentedAdvertisementAuxiliaryData

`TAugmentedAdvertisementAuxiliaryData` *extends* `AdvertisementAuxiliaryData`

## Properties

### advertisementBreakEnd()

> **advertisementBreakEnd**: (`advertisementBreak?`) => `void`

#### Parameters

##### advertisementBreak?

`AdvertisementBreak`

#### Returns

`void`

***

### advertisementBreakStart()

> **advertisementBreakStart**: (`advertisementBreak?`) => `void`

#### Parameters

##### advertisementBreak?

`AdvertisementBreak`

#### Returns

`void`

***

### advertisementBreaksUpdated()

> **advertisementBreaksUpdated**: (`newAdvertisementBreaks`, `newAdvertisements`) => `void`

#### Parameters

##### newAdvertisementBreaks

(`AdvertisementBreak` | `AdvertisementCue`)[]

##### newAdvertisements

`Advertisement`<`TAugmentedAdvertisementAuxiliaryData`>[]

#### Returns

`void`

***

### advertisementEnd()

> **advertisementEnd**: (`advertisement?`) => `void`

#### Parameters

##### advertisement?

`Advertisement`<`TAugmentedAdvertisementAuxiliaryData`>

#### Returns

`void`

***

### advertisementStart()

> **advertisementStart**: (`advertisement?`) => `void`

#### Parameters

##### advertisement?

`Advertisement`<`TAugmentedAdvertisementAuxiliaryData`>

#### Returns

`void`
