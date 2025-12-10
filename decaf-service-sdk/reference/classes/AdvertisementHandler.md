# AdvertisementHandler<TAdvertisementHandlerConfiguration>

## Extended by

- [`ImaAdvertisementHandler`](reference/classes/ImaAdvertisementHandler.md)
- [`YospaceAdvertisementHandler`](reference/classes/YospaceAdvertisementHandler.md)

## Type Parameters

### TAdvertisementHandlerConfiguration

`TAdvertisementHandlerConfiguration` *extends* [`AdvertisementHandlerConfiguration`](reference/interfaces/AdvertisementHandlerConfiguration.md) = [`AdvertisementHandlerConfiguration`](../interfaces/AdvertisementHandlerConfiguration.md)

## Constructors

### Constructor

> **new AdvertisementHandler**<`TAdvertisementHandlerConfiguration`>(`id?`): `AdvertisementHandler`<`TAdvertisementHandlerConfiguration`>

#### Parameters

##### id?

`string`

#### Returns

`AdvertisementHandler`<`TAdvertisementHandlerConfiguration`>

## Properties

### delegate?

> `protected` **delegate**?: [`AdvertisementHandlerDelegate`](reference/interfaces/AdvertisementHandlerDelegate.md)

***

### id

> **id**: `string`

***

### logger

> `protected` **logger**: [`ILogger`](reference/interfaces/ILogger.md)

***

### mediaElement?

> `protected` **mediaElement**?: `HTMLMediaElement`

## Methods

### autoplayChanged()

> `abstract` **autoplayChanged**(`autoplay`): `void`

#### Parameters

##### autoplay

`boolean`

#### Returns

`void`

***

### buffered()

> `abstract` **buffered**(): `void`

#### Returns

`void`

***

### buffering()

> `abstract` **buffering**(): `void`

#### Returns

`void`

***

### canHandleAdvertisementType()

> `abstract` **canHandleAdvertisementType**(`advertisementType`): `boolean`

#### Parameters

##### advertisementType

`string`

#### Returns

`boolean`

***

### configure()

> `abstract` **configure**(`configuration?`): `void`

#### Parameters

##### configuration?

`TAdvertisementHandlerConfiguration`

#### Returns

`void`

***

### destroy()

> **destroy**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### durationChanged()

> `abstract` **durationChanged**(`absoluteDuration`): `void`

#### Parameters

##### absoluteDuration

`number`

#### Returns

`void`

***

### finished()

> `abstract` **finished**(): `void`

#### Returns

`void`

***

### load()

> `abstract` **load**(`load`): `Promise`<`void`>

#### Parameters

##### load

[`LoadableLoadArgs`](reference/interfaces/LoadableLoadArgs.md)

#### Returns

`Promise`<`void`>

***

### loaded()

> `abstract` **loaded**(): `void`

#### Returns

`void`

***

### paused()

> `abstract` **paused**(): `void`

#### Returns

`void`

***

### playing()

> `abstract` **playing**(): `void`

#### Returns

`void`

***

### preload()

> `abstract` **preload**(`preload`): `Promise`<[`LoadablePreloadArgs`](reference/interfaces/LoadablePreloadArgs.md)>

#### Parameters

##### preload

[`LoadablePreloadArgs`](reference/interfaces/LoadablePreloadArgs.md)

#### Returns

`Promise`<[`LoadablePreloadArgs`](reference/interfaces/LoadablePreloadArgs.md)>

***

### reset()

> **reset**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### setDelegate()

> **setDelegate**(`delegate`): `void`

#### Parameters

##### delegate

[`AdvertisementHandlerDelegate`](reference/interfaces/AdvertisementHandlerDelegate.md)

#### Returns

`void`

***

### setLogger()

> **setLogger**(`logger`): `void`

#### Parameters

##### logger

[`ILogger`](reference/interfaces/ILogger.md)

#### Returns

`void`

***

### setMediaElement()

> **setMediaElement**(`mediaElement`): `void`

#### Parameters

##### mediaElement

`HTMLMediaElement`

#### Returns

`void`

***

### streamCue()

> `abstract` **streamCue**(`streamCue`): `void`

#### Parameters

##### streamCue

[`StreamCue`](reference/interfaces/StreamCue.md)

#### Returns

`void`

***

### timeUpdated()

> `abstract` **timeUpdated**(`absoluteTime`, `absoluteEpochTime`): `void`

#### Parameters

##### absoluteTime

`number`

##### absoluteEpochTime

`number`

#### Returns

`void`

***

### volume()

> `abstract` **volume**(`volume`, `muted`): `void`

#### Parameters

##### volume

`number`

##### muted

`boolean`

#### Returns

`void`
