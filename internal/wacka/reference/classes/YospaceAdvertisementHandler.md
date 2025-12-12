# YospaceAdvertisementHandler<TAdvertisementAuxiliaryData>

## Extends

- [`AdvertisementHandler`](AdvertisementHandler.md)<[`YospaceAdvertisementHandlerConfiguration`](reference/interfaces/YospaceAdvertisementHandlerConfiguration.md)<`TAdvertisementAuxiliaryData`>>

## Type Parameters

### TAdvertisementAuxiliaryData

`TAdvertisementAuxiliaryData` *extends* `AdvertisementAuxiliaryData` = `AdvertisementAuxiliaryData`

## Constructors

### Constructor

> **new YospaceAdvertisementHandler**<`TAdvertisementAuxiliaryData`>(`id?`): `YospaceAdvertisementHandler`<`TAdvertisementAuxiliaryData`>

#### Parameters

##### id?

`string`

#### Returns

`YospaceAdvertisementHandler`<`TAdvertisementAuxiliaryData`>

#### Overrides

[`AdvertisementHandler`](reference/classes/AdvertisementHandler.md).[`constructor`](AdvertisementHandler.md#constructor)

## Properties

### delegate?

> `protected` **delegate**?: [`AdvertisementHandlerDelegate`](reference/interfaces/AdvertisementHandlerDelegate.md)

#### Overrides

[`AdvertisementHandler`](reference/classes/AdvertisementHandler.md).[`delegate`](AdvertisementHandler.md#delegate)

***

### id

> **id**: `string`

#### Inherited from

[`AdvertisementHandler`](reference/classes/AdvertisementHandler.md).[`id`](AdvertisementHandler.md#id)

***

### logger

> `protected` **logger**: `ILogger`

#### Inherited from

[`AdvertisementHandler`](reference/classes/AdvertisementHandler.md).[`logger`](AdvertisementHandler.md#logger)

***

### mediaElement?

> `protected` **mediaElement**?: `HTMLMediaElement`

#### Inherited from

[`AdvertisementHandler`](reference/classes/AdvertisementHandler.md).[`mediaElement`](AdvertisementHandler.md#mediaelement)

## Methods

### autoplayChanged()

> **autoplayChanged**(`autoplay`): `void`

#### Parameters

##### autoplay

`boolean`

#### Returns

`void`

#### Overrides

[`AdvertisementHandler`](reference/classes/AdvertisementHandler.md).[`autoplayChanged`](AdvertisementHandler.md#autoplaychanged)

***

### buffered()

> **buffered**(): `void`

#### Returns

`void`

#### Overrides

[`AdvertisementHandler`](reference/classes/AdvertisementHandler.md).[`buffered`](AdvertisementHandler.md#buffered)

***

### buffering()

> **buffering**(): `void`

#### Returns

`void`

#### Overrides

[`AdvertisementHandler`](reference/classes/AdvertisementHandler.md).[`buffering`](AdvertisementHandler.md#buffering)

***

### canHandleAdvertisementType()

> **canHandleAdvertisementType**(`advertisementType`): `boolean`

#### Parameters

##### advertisementType

`string`

#### Returns

`boolean`

#### Overrides

[`AdvertisementHandler`](reference/classes/AdvertisementHandler.md).[`canHandleAdvertisementType`](AdvertisementHandler.md#canhandleadvertisementtype)

***

### configure()

> **configure**(`configuration`): `void`

#### Parameters

##### configuration

[`YospaceAdvertisementHandlerConfiguration`](reference/interfaces/YospaceAdvertisementHandlerConfiguration.md)<`TAdvertisementAuxiliaryData`>

#### Returns

`void`

#### Overrides

[`AdvertisementHandler`](reference/classes/AdvertisementHandler.md).[`configure`](AdvertisementHandler.md#configure)

***

### destroy()

> **destroy**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Overrides

[`AdvertisementHandler`](reference/classes/AdvertisementHandler.md).[`destroy`](AdvertisementHandler.md#destroy)

***

### durationChanged()

> **durationChanged**(`absoluteDuration`): `void`

#### Parameters

##### absoluteDuration

`number`

#### Returns

`void`

#### Overrides

[`AdvertisementHandler`](reference/classes/AdvertisementHandler.md).[`durationChanged`](AdvertisementHandler.md#durationchanged)

***

### finished()

> **finished**(): `void`

#### Returns

`void`

#### Overrides

[`AdvertisementHandler`](reference/classes/AdvertisementHandler.md).[`finished`](AdvertisementHandler.md#finished)

***

### load()

> **load**(`load`): `Promise`<`void`>

#### Parameters

##### load

[`LoadableLoadArgs`](reference/interfaces/LoadableLoadArgs.md)

#### Returns

`Promise`<`void`>

#### Overrides

[`AdvertisementHandler`](reference/classes/AdvertisementHandler.md).[`load`](AdvertisementHandler.md#load)

***

### loaded()

> **loaded**(): `void`

#### Returns

`void`

#### Overrides

[`AdvertisementHandler`](reference/classes/AdvertisementHandler.md).[`loaded`](AdvertisementHandler.md#loaded)

***

### paused()

> **paused**(): `void`

#### Returns

`void`

#### Overrides

[`AdvertisementHandler`](reference/classes/AdvertisementHandler.md).[`paused`](AdvertisementHandler.md#paused)

***

### playing()

> **playing**(): `void`

#### Returns

`void`

#### Overrides

[`AdvertisementHandler`](reference/classes/AdvertisementHandler.md).[`playing`](AdvertisementHandler.md#playing)

***

### preload()

> **preload**(`preload`): `Promise`<[`LoadablePreloadArgs`](reference/interfaces/LoadablePreloadArgs.md)>

#### Parameters

##### preload

[`LoadablePreloadArgs`](reference/interfaces/LoadablePreloadArgs.md)

#### Returns

`Promise`<[`LoadablePreloadArgs`](reference/interfaces/LoadablePreloadArgs.md)>

#### Overrides

[`AdvertisementHandler`](reference/classes/AdvertisementHandler.md).[`preload`](AdvertisementHandler.md#preload)

***

### reset()

> **reset**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Overrides

[`AdvertisementHandler`](reference/classes/AdvertisementHandler.md).[`reset`](AdvertisementHandler.md#reset)

***

### setDelegate()

> **setDelegate**(`delegate`): `void`

#### Parameters

##### delegate

[`AdvertisementHandlerDelegate`](reference/interfaces/AdvertisementHandlerDelegate.md)

#### Returns

`void`

#### Inherited from

[`AdvertisementHandler`](reference/classes/AdvertisementHandler.md).[`setDelegate`](AdvertisementHandler.md#setdelegate)

***

### setLogger()

> **setLogger**(`logger`): `void`

#### Parameters

##### logger

`ILogger`

#### Returns

`void`

#### Inherited from

[`AdvertisementHandler`](reference/classes/AdvertisementHandler.md).[`setLogger`](AdvertisementHandler.md#setlogger)

***

### setMediaElement()

> **setMediaElement**(`mediaElement`): `void`

#### Parameters

##### mediaElement

`HTMLMediaElement`

#### Returns

`void`

#### Inherited from

[`AdvertisementHandler`](reference/classes/AdvertisementHandler.md).[`setMediaElement`](AdvertisementHandler.md#setmediaelement)

***

### streamCue()

> **streamCue**(`streamCue`): `void`

#### Parameters

##### streamCue

`StreamCue`

#### Returns

`void`

#### Overrides

[`AdvertisementHandler`](reference/classes/AdvertisementHandler.md).[`streamCue`](AdvertisementHandler.md#streamcue)

***

### timeUpdated()

> **timeUpdated**(`absoluteTime`): `void`

#### Parameters

##### absoluteTime

`number`

#### Returns

`void`

#### Overrides

[`AdvertisementHandler`](reference/classes/AdvertisementHandler.md).[`timeUpdated`](AdvertisementHandler.md#timeupdated)

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

#### Overrides

[`AdvertisementHandler`](reference/classes/AdvertisementHandler.md).[`volume`](AdvertisementHandler.md#volume)
