# CommercialDeCafClientConfiguration

## Extends

- `DeCafClientBaseConfiguration`

## Indexable

[`key`: `string`]: `any`

## Properties

### components

> **components**: `object`

#### activityMonitor

> **activityMonitor**: `Partial`<`ActivityMonitorConfiguration`>

#### timeline

> **timeline**: `TimelineManagerConfiguration`

#### wacka?

> **wacka**?: `object`

##### wacka.engine?

> **engine**?: `Partial`<[`WackaEngineConfiguration`](reference/interfaces/WackaEngineConfiguration.md)>

##### wacka.player?

> **player**?: `Partial`<[`WackaPlayerConfiguration`](reference/interfaces/WackaPlayerConfiguration.md)>

##### wacka.playerArgs?

> **playerArgs**?: `Partial`<`WackaPlayerArgs`>

***

### serviceLayer

> **serviceLayer**: `Record`<`string`, `any`>

#### Inherited from

`DeCafClientBaseConfiguration.serviceLayer`

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

`DeCafClientBaseConfiguration.serviceLayerManifest`

***

### serviceLayerUrl?

> **serviceLayerUrl**?: `string`

#### Inherited from

`DeCafClientBaseConfiguration.serviceLayerUrl`
