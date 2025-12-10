# AdvertisementController

## Implements

- `ILoadControllerLoadable`
- `IStreamCapabilities`

## Constructors

### Constructor

> **new AdvertisementController**(`args`): `AdvertisementController`

#### Parameters

##### args

`AdvertisementControllerArgs`

#### Returns

`AdvertisementController`

## Properties

### name

> `readonly` **name**: `string`

#### Implementation of

`ILoadControllerLoadable.name`

## Accessors

### advertisement

#### Get Signature

> **get** **advertisement**(): [`Advertisement`](reference/interfaces/Advertisement.md)<[`AdvertisementAuxiliaryData`](../interfaces/AdvertisementAuxiliaryData.md)> | `undefined`

##### Returns

[`Advertisement`](reference/interfaces/Advertisement.md)<[`AdvertisementAuxiliaryData`](../interfaces/AdvertisementAuxiliaryData.md)> | `undefined`

***

### advertisementBreak

#### Get Signature

> **get** **advertisementBreak**(): [`AdvertisementBreak`](reference/interfaces/AdvertisementBreak.md) | `undefined`

##### Returns

[`AdvertisementBreak`](reference/interfaces/AdvertisementBreak.md) | `undefined`

***

### state

#### Get Signature

> **get** **state**(): `AdvertisementState`

##### Returns

`AdvertisementState`

## Methods

### autoplayChanged()

> **autoplayChanged**(`autoplay`): `void`

#### Parameters

##### autoplay

`boolean`

#### Returns

`void`

***

### buffered()

> **buffered**(): `void`

#### Returns

`void`

***

### buffering()

> **buffering**(): `void`

#### Returns

`void`

***

### canHandleStream()

> **canHandleStream**(`stream`): `Promise`<`boolean`>

#### Parameters

##### stream

[`Stream`](reference/interfaces/Stream.md)

#### Returns

`Promise`<`boolean`>

#### Implementation of

`IStreamCapabilities.canHandleStream`

***

### destroy()

> **destroy**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### durationChanged()

> **durationChanged**(`absoluteDuration`): `void`

#### Parameters

##### absoluteDuration

`number`

#### Returns

`void`

***

### finished()

> **finished**(): `void`

#### Returns

`void`

***

### getAbsolutePosition()

> **getAbsolutePosition**(`contentTime`): `number`

#### Parameters

##### contentTime

`number`

#### Returns

`number`

***

### getAdvertisementCues()

> **getAdvertisementCues**(): [`AdvertisementCue`](reference/interfaces/AdvertisementCue.md)[]

#### Returns

[`AdvertisementCue`](reference/interfaces/AdvertisementCue.md)[]

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

### getContentPosition()

> **getContentPosition**(`absolutePosition`): `number`

#### Parameters

##### absolutePosition

`number`

#### Returns

`number`

***

### getEmbeddedAdvertisementBreakAtAbsolutePosition()

> **getEmbeddedAdvertisementBreakAtAbsolutePosition**(`absolutePosition`, `margin?`): [`AdvertisementBreak`](reference/interfaces/AdvertisementBreak.md) | `undefined`

#### Parameters

##### absolutePosition

`number`

##### margin?

`number`

#### Returns

[`AdvertisementBreak`](reference/interfaces/AdvertisementBreak.md) | `undefined`

***

### getLastPastEmbeddedAdvertisementBreakBeforeAbsolutePosition()

> **getLastPastEmbeddedAdvertisementBreakBeforeAbsolutePosition**(`absolutePosition`): [`AdvertisementBreak`](reference/interfaces/AdvertisementBreak.md) | `undefined`

#### Parameters

##### absolutePosition

`number`

#### Returns

[`AdvertisementBreak`](reference/interfaces/AdvertisementBreak.md) | `undefined`

***

### hasEmbeddedPreRoll()

> **hasEmbeddedPreRoll**(): `boolean`

#### Returns

`boolean`

***

### isCsai()

> **isCsai**(`advertisementType?`): `boolean`

#### Parameters

##### advertisementType?

`string`

#### Returns

`boolean`

***

### load()

> **load**(`load`): `Promise`<`void`>

#### Parameters

##### load

[`LoadableLoadArgs`](reference/interfaces/LoadableLoadArgs.md)

#### Returns

`Promise`<`void`>

#### Implementation of

`ILoadControllerLoadable.load`

***

### loaded()

> **loaded**(): `void`

#### Returns

`void`

***

### paused()

> **paused**(): `void`

#### Returns

`void`

***

### playing()

> **playing**(): `void`

#### Returns

`void`

***

### preload()

> **preload**(`preload`): `Promise`<[`LoadablePreloadArgs`](reference/interfaces/LoadablePreloadArgs.md) | `undefined`>

#### Parameters

##### preload

[`LoadablePreloadArgs`](reference/interfaces/LoadablePreloadArgs.md)

#### Returns

`Promise`<[`LoadablePreloadArgs`](reference/interfaces/LoadablePreloadArgs.md) | `undefined`>

#### Implementation of

`ILoadControllerLoadable.preload`

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

### reset()

> **reset**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### seekableRangeUpdated()

> **seekableRangeUpdated**(`absoluteSeekableRange?`): `void`

#### Parameters

##### absoluteSeekableRange?

[`SeekableRange`](reference/interfaces/SeekableRange.md)

#### Returns

`void`

***

### seeked()

> **seeked**(): `void`

#### Returns

`void`

***

### seeking()

> **seeking**(): `void`

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

### streamCue()

> **streamCue**(`streamCue`): `void`

#### Parameters

##### streamCue

[`StreamCue`](reference/interfaces/StreamCue.md)

#### Returns

`void`

***

### timeUpdated()

> **timeUpdated**(`absoluteTime`, `absoluteEpochTime`): `void`

#### Parameters

##### absoluteTime

`number`

##### absoluteEpochTime

`number`

#### Returns

`void`

***

### volume()

> **volume**(`volume`, `muted`): `void`

#### Parameters

##### volume

`number`

##### muted

`boolean`

#### Returns

`void`
