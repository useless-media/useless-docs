# YospaceAdvertisementHandlerConfiguration<TAdvertisementAuxiliaryData>

## Extends

- [`AdvertisementHandlerConfiguration`](reference/interfaces/AdvertisementHandlerConfiguration.md)

## Type Parameters

### TAdvertisementAuxiliaryData

`TAdvertisementAuxiliaryData` *extends* [`AdvertisementAuxiliaryData`](reference/interfaces/AdvertisementAuxiliaryData.md) = [`AdvertisementAuxiliaryData`](AdvertisementAuxiliaryData.md)

## Indexable

[`key`: `string`]: `any`

## Properties

### allowDelayedMetadataDelivery?

> **allowDelayedMetadataDelivery**?: `boolean`

***

### allowStartInReplacedLiveBreak?

> **allowStartInReplacedLiveBreak**?: `boolean`

***

### allowStartInReplacedOnDemandBreak?

> **allowStartInReplacedOnDemandBreak**?: `boolean`

***

### debug?

> **debug**?: `boolean`

***

### debugStreamCues?

> **debugStreamCues**?: `boolean`

***

### enabled

> **enabled**: `boolean`

#### Inherited from

[`AdvertisementHandlerConfiguration`](reference/interfaces/AdvertisementHandlerConfiguration.md).[`enabled`](AdvertisementHandlerConfiguration.md#enabled)

***

### extraParameters?

> **extraParameters**?: `Record`<`string`, `string`>

***

### id?

> **id**?: `string`

#### Inherited from

[`AdvertisementHandlerConfiguration`](reference/interfaces/AdvertisementHandlerConfiguration.md).[`id`](AdvertisementHandlerConfiguration.md#id)

***

### liveAdvertisementBreakHistoryLimit?

> **liveAdvertisementBreakHistoryLimit**?: `number`

***

### parseExtensions()?

> **parseExtensions**?: (`extensionsNode`) => `TAdvertisementAuxiliaryData`

#### Parameters

##### extensionsNode

`XmlNode`

#### Returns

`TAdvertisementAuxiliaryData`

***

### yospaceParameters?

> **yospaceParameters**?: `IYospaceParameters`
