# AdvertisementController

## Implements

- [`ILoadControllerLoadable`](reference/interfaces/ILoadControllerLoadable.md)
- [`IStreamCapabilities`](reference/interfaces/IStreamCapabilities.md)

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

> `readonly` **name**: `string` = `'AdvertisementController'`

#### Implementation of

[`IStreamCapabilities`](reference/interfaces/IStreamCapabilities.md).[`name`](../interfaces/IStreamCapabilities.md#name)

## Accessors

### advertisement

#### Get Signature

> **get** **advertisement**(): `Advertisement`<`AdvertisementAuxiliaryData`> | `undefined`

##### Returns

`Advertisement`<`AdvertisementAuxiliaryData`> | `undefined`

***

### advertisementBreak

#### Get Signature

> **get** **advertisementBreak**(): `AdvertisementBreak` | `undefined`

##### Returns

`AdvertisementBreak` | `undefined`

***

### state

#### Get Signature

> **get** **state**(): [`AdvertisementState`](reference/interfaces/AdvertisementState.md)

##### Returns

[`AdvertisementState`](reference/interfaces/AdvertisementState.md)

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

`Stream`

#### Returns

`Promise`<`boolean`>

#### Implementation of

[`IStreamCapabilities`](reference/interfaces/IStreamCapabilities.md).[`canHandleStream`](../interfaces/IStreamCapabilities.md#canhandlestream)

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

> **getAdvertisementCues**(): `AdvertisementCue`[]

#### Returns

`AdvertisementCue`[]

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

> **getEmbeddedAdvertisementBreakAtAbsolutePosition**(`absolutePosition`, `margin`): `AdvertisementBreak` | `undefined`

#### Parameters

##### absolutePosition

`number`

##### margin

`number` = `0.4`

#### Returns

`AdvertisementBreak` | `undefined`

***

### getLastPastEmbeddedAdvertisementBreakBeforeAbsolutePosition()

> **getLastPastEmbeddedAdvertisementBreakBeforeAbsolutePosition**(`absolutePosition`): `AdvertisementBreak` | `undefined`

#### Parameters

##### absolutePosition

`number`

#### Returns

`AdvertisementBreak` | `undefined`

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

[`ILoadControllerLoadable`](reference/interfaces/ILoadControllerLoadable.md).[`load`](../interfaces/ILoadControllerLoadable.md#load)

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

[`ILoadControllerLoadable`](reference/interfaces/ILoadControllerLoadable.md).[`preload`](../interfaces/ILoadControllerLoadable.md#preload)

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

`SeekableRange`

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

`StreamCue`

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
