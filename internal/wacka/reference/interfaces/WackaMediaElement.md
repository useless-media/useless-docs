# WackaMediaElement

## Extends

- `ListenableListener`<[`MediaElementEventList`](reference/interfaces/MediaElementEventList.md)>

## Methods

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Overrides

`ListenableListener.destroy`

***

### getAbsoluteDuration()

> **getAbsoluteDuration**(): `number`

#### Returns

`number`

***

### getAbsoluteTime()

> **getAbsoluteTime**(): `number`

#### Returns

`number`

***

### getBufferedRange()

> **getBufferedRange**(): `Seekable` | `undefined`

#### Returns

`Seekable` | `undefined`

***

### getDroppedFrames()

> **getDroppedFrames**(): `DroppedFrames`

#### Returns

`DroppedFrames`

***

### getMediaElement()

> **getMediaElement**(): `HTMLMediaElement` | `undefined`

#### Returns

`HTMLMediaElement` | `undefined`

***

### getMuted()

> **getMuted**(): `boolean`

#### Returns

`boolean`

***

### getPaused()

> **getPaused**(): `boolean`

#### Returns

`boolean`

***

### getPlaybackRate()

> **getPlaybackRate**(): `number`

#### Returns

`number`

***

### getSeekableRange()

> **getSeekableRange**(): `Seekable` | `undefined`

#### Returns

`Seekable` | `undefined`

***

### getVolume()

> **getVolume**(): `number`

#### Returns

`number`

***

### hasGaps()

> **hasGaps**(): `object`

#### Returns

`object`

##### details?

> **details**?: `object`

###### details.absoluteTime

> **absoluteTime**: `number`

###### details.gaps

> **gaps**: `any`[]

##### gapsDetected

> **gapsDetected**: `Boolean`

***

### initialize()

> **initialize**(): `void`

#### Returns

`void`

***

### jump()

> **jump**(`offset`): `void`

#### Parameters

##### offset

`number`

#### Returns

`void`

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

### reset()

> **reset**(): `void`

#### Returns

`void`

***

### seek()

> **seek**(`position`, `relative`): `Promise`<`void`>

#### Parameters

##### position

`number`

##### relative

`boolean` = `false`

#### Returns

`Promise`<`void`>

***

### setDelegate()

> **setDelegate**(`delegate`): `void`

#### Parameters

##### delegate

[`WackaMediaElementDelegate`](reference/interfaces/WackaMediaElementDelegate.md)

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

### setMuted()

> **setMuted**(`muted`): `void`

#### Parameters

##### muted

`boolean` = `false`

#### Returns

`void`

***

### setPlaybackRate()

> **setPlaybackRate**(`playbackRate`): `void`

#### Parameters

##### playbackRate

`number`

#### Returns

`void`

***

### setStateUpdateExtension()

> **setStateUpdateExtension**(`extension`): `void`

#### Parameters

##### extension

`StateUpdateExtension`

#### Returns

`void`

***

### setVolume()

> **setVolume**(`volume`, `muted?`): `void`

#### Parameters

##### volume

`number`

##### muted?

`boolean`

#### Returns

`void`

***

### stop()

> **stop**(`unload`): `Promise`<`void`>

#### Parameters

##### unload

`boolean` = `false`

#### Returns

`Promise`<`void`>

***

### updateState()

> `protected` **updateState**(`state`, `force`): `void`

#### Parameters

##### state

`PlaybackStates`

##### force

`boolean` = `false`

#### Returns

`void`
