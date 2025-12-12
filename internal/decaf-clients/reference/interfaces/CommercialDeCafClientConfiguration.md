# CommercialDeCafClientConfiguration

## Extends

- [`DeCafClientBaseConfiguration`](reference/interfaces/DeCafClientBaseConfiguration.md)

## Indexable

[`key`: `string`]: `any`

## Properties

### components

> **components**: `object`

#### activityMonitor

> **activityMonitor**: `Partial`<[`ActivityMonitorConfiguration`](reference/classes/ActivityMonitorConfiguration.md)>

#### timeline

> **timeline**: [`TimelineManagerConfiguration`](reference/classes/TimelineManagerConfiguration.md)

#### wacka?

> **wacka**?: `object`

##### wacka.engine?

> **engine**?: `Partial`<`WackaEngineConfiguration`>

##### wacka.player?

> **player**?: `Partial`<`WackaPlayerConfiguration`>

##### wacka.playerArgs?

> **playerArgs**?: `Partial`<`WackaPlayerArgs`>

***

### serviceLayer

> **serviceLayer**: `Record`<`string`, `any`>

#### Inherited from

[`DeCafClientBaseConfiguration`](reference/interfaces/DeCafClientBaseConfiguration.md).[`serviceLayer`](DeCafClientBaseConfiguration.md#servicelayer)

***

### serviceLayerClass()?

> **serviceLayerClass**?: (`args`) => [`IServiceLayer`](reference/interfaces/IServiceLayer.md)

#### Parameters

##### args

[`ServiceLayerArgs`](reference/interfaces/ServiceLayerArgs.md)

#### Returns

[`IServiceLayer`](reference/interfaces/IServiceLayer.md)

***

### serviceLayerFactory?

> **serviceLayerFactory**?: [`ServiceLayerFactory`](reference/interfaces/ServiceLayerFactory.md)

***

### serviceLayerManifest?

> **serviceLayerManifest**?: `LoadableFeatureManifest`

#### Inherited from

[`DeCafClientBaseConfiguration`](reference/interfaces/DeCafClientBaseConfiguration.md).[`serviceLayerManifest`](DeCafClientBaseConfiguration.md#servicelayermanifest)

***

### serviceLayerUrl?

> **serviceLayerUrl**?: `string`

#### Inherited from

[`DeCafClientBaseConfiguration`](reference/interfaces/DeCafClientBaseConfiguration.md).[`serviceLayerUrl`](DeCafClientBaseConfiguration.md#servicelayerurl)
