# TimelineBackwardsCompatiblePlaybackSessionState

## Extends

- [`PlaybackSessionState`](reference/interfaces/PlaybackSessionState.md)

## Properties

### absoluteDuration?

> **absoluteDuration**?: `number`

#### Inherited from

[`PlaybackSessionState`](reference/interfaces/PlaybackSessionState.md).[`absoluteDuration`](PlaybackSessionState.md#absoluteduration)

***

### absoluteEpochTime?

> **absoluteEpochTime**?: `number`

#### Inherited from

[`PlaybackSessionState`](reference/interfaces/PlaybackSessionState.md).[`absoluteEpochTime`](PlaybackSessionState.md#absoluteepochtime)

***

### absoluteSeekableRange?

> **absoluteSeekableRange**?: [`SeekableRange`](reference/interfaces/SeekableRange.md)

#### Inherited from

[`PlaybackSessionState`](reference/interfaces/PlaybackSessionState.md).[`absoluteSeekableRange`](PlaybackSessionState.md#absoluteseekablerange)

***

### absoluteTime?

> **absoluteTime**?: `number`

#### Inherited from

[`PlaybackSessionState`](reference/interfaces/PlaybackSessionState.md).[`absoluteTime`](PlaybackSessionState.md#absolutetime)

***

### advertisement

> **advertisement**: `object`

#### active

> **active**: `object`

##### active.advertisement?

> **advertisement**?: [`Advertisement`](reference/interfaces/Advertisement.md)<`AdvertisementAuxiliaryData`>

##### active.advertisementBreak?

> **advertisementBreak**?: [`AdvertisementBreak`](reference/interfaces/AdvertisementBreak.md) | [`AdvertisementCue`](AdvertisementCue.md)

#### Inherited from

[`PlaybackSessionState`](reference/interfaces/PlaybackSessionState.md).[`advertisement`](PlaybackSessionState.md#advertisement)

***

### autoplay

> **autoplay**: `boolean`

#### Inherited from

[`PlaybackSessionState`](reference/interfaces/PlaybackSessionState.md).[`autoplay`](PlaybackSessionState.md#autoplay)

***

### content?

> **content**?: `Omit`<[`Content`](reference/interfaces/Content.md), `"streams"`>

#### Inherited from

[`PlaybackSessionState`](reference/interfaces/PlaybackSessionState.md).[`content`](PlaybackSessionState.md#content)

***

### contentDuration?

> **contentDuration**?: `number`

#### Inherited from

[`PlaybackSessionState`](reference/interfaces/PlaybackSessionState.md).[`contentDuration`](PlaybackSessionState.md#contentduration)

***

### contentEpochTime?

> **contentEpochTime**?: `number`

#### Inherited from

[`PlaybackSessionState`](reference/interfaces/PlaybackSessionState.md).[`contentEpochTime`](PlaybackSessionState.md#contentepochtime)

***

### contentSeekableRange?

> **contentSeekableRange**?: [`SeekableRange`](reference/interfaces/SeekableRange.md)

#### Inherited from

[`PlaybackSessionState`](reference/interfaces/PlaybackSessionState.md).[`contentSeekableRange`](PlaybackSessionState.md#contentseekablerange)

***

### contentTime?

> **contentTime**?: `number`

#### Inherited from

[`PlaybackSessionState`](reference/interfaces/PlaybackSessionState.md).[`contentTime`](PlaybackSessionState.md#contenttime)

***

### ~~currentTime?~~

> **currentTime**?: `number`

#### Deprecated

- but kept for backwards compatibility

#### Inherited from

[`PlaybackSessionState`](reference/interfaces/PlaybackSessionState.md).[`currentTime`](PlaybackSessionState.md#currenttime)

***

### ~~duration?~~

> **duration**?: `number`

#### Deprecated

- but kept for backwards compatibility

#### Inherited from

[`PlaybackSessionState`](reference/interfaces/PlaybackSessionState.md).[`duration`](PlaybackSessionState.md#duration)

***

### ~~epochTime?~~

> **epochTime**?: `number`

#### Deprecated

- but kept for backwards compatibility

#### Inherited from

[`PlaybackSessionState`](reference/interfaces/PlaybackSessionState.md).[`epochTime`](PlaybackSessionState.md#epochtime)

***

### error?

> **error**?: `IError`

#### Inherited from

[`PlaybackSessionState`](reference/interfaces/PlaybackSessionState.md).[`error`](PlaybackSessionState.md#error)

***

### id

> **id**: `string`

#### Inherited from

[`PlaybackSessionState`](reference/interfaces/PlaybackSessionState.md).[`id`](PlaybackSessionState.md#id)

***

### nextContent?

> **nextContent**?: `Omit`<[`Content`](reference/interfaces/Content.md), `"streams"`>

#### Inherited from

[`PlaybackSessionState`](reference/interfaces/PlaybackSessionState.md).[`nextContent`](PlaybackSessionState.md#nextcontent)

***

### playbackState

> **playbackState**: [`PlaybackStates`](reference/enumerations/PlaybackStates.md)

#### Inherited from

[`PlaybackSessionState`](reference/interfaces/PlaybackSessionState.md).[`playbackState`](PlaybackSessionState.md#playbackstate)

***

### ~~seekableRange?~~

> **seekableRange**?: [`SeekableRange`](reference/interfaces/SeekableRange.md)

#### Deprecated

- but kept for backwards compatibility

#### Inherited from

[`PlaybackSessionState`](reference/interfaces/PlaybackSessionState.md).[`seekableRange`](PlaybackSessionState.md#seekablerange)

***

### stillWatching?

> **stillWatching**?: `object`

#### interactionTimeout

> **interactionTimeout**: `number`

#### remaining?

> **remaining**?: `number`

#### Inherited from

[`PlaybackSessionState`](reference/interfaces/PlaybackSessionState.md).[`stillWatching`](PlaybackSessionState.md#stillwatching)

***

### stream?

> **stream**?: `Omit`<[`Stream`](reference/interfaces/Stream.md), `"drms"`>

#### Inherited from

[`PlaybackSessionState`](reference/interfaces/PlaybackSessionState.md).[`stream`](PlaybackSessionState.md#stream)

***

### streamRestrictions

> **streamRestrictions**: [`StreamRestrictions`](reference/interfaces/StreamRestrictions.md)

#### Inherited from

[`PlaybackSessionState`](reference/interfaces/PlaybackSessionState.md).[`streamRestrictions`](PlaybackSessionState.md#streamrestrictions)

***

### timeline

> **timeline**: [`Timeline`](reference/interfaces/Timeline.md) & `object`

#### Type Declaration

##### seekableRange

> **seekableRange**: `Seekable`

#### Overrides

[`PlaybackSessionState`](reference/interfaces/PlaybackSessionState.md).[`timeline`](PlaybackSessionState.md#timeline)

***

### tracks?

> **tracks**?: [`Track`](reference/interfaces/Track.md)[]

#### Inherited from

[`PlaybackSessionState`](reference/interfaces/PlaybackSessionState.md).[`tracks`](PlaybackSessionState.md#tracks)

***

### volume?

> **volume**?: [`Volume`](reference/interfaces/Volume.md)

#### Inherited from

[`PlaybackSessionState`](reference/interfaces/PlaybackSessionState.md).[`volume`](PlaybackSessionState.md#volume)
