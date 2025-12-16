# PlaybackSessionState

## Extends

- `StateWithId`

## Extended by

- [`TimelineBackwardsCompatiblePlaybackSessionState`](reference/interfaces/TimelineBackwardsCompatiblePlaybackSessionState.md)

## Properties

### absoluteDuration?

> **absoluteDuration**?: `number`

***

### absoluteEpochTime?

> **absoluteEpochTime**?: `number`

***

### absoluteSeekableRange?

> **absoluteSeekableRange**?: [`SeekableRange`](reference/interfaces/SeekableRange.md)

***

### absoluteTime?

> **absoluteTime**?: `number`

***

### advertisement

> **advertisement**: `object`

#### active

> **active**: `object`

##### active.advertisement?

> **advertisement**?: [`Advertisement`](reference/interfaces/Advertisement.md)<`AdvertisementAuxiliaryData`>

##### active.advertisementBreak?

> **advertisementBreak**?: [`AdvertisementBreak`](reference/interfaces/AdvertisementBreak.md) | [`AdvertisementCue`](AdvertisementCue.md)

***

### autoplay

> **autoplay**: `boolean`

***

### content?

> **content**?: `Omit`<[`Content`](reference/interfaces/Content.md), `"streams"`>

***

### contentDuration?

> **contentDuration**?: `number`

***

### contentEpochTime?

> **contentEpochTime**?: `number`

***

### contentSeekableRange?

> **contentSeekableRange**?: [`SeekableRange`](reference/interfaces/SeekableRange.md)

***

### contentTime?

> **contentTime**?: `number`

***

### ~~currentTime?~~

> **currentTime**?: `number`

#### Deprecated

- but kept for backwards compatibility

***

### ~~duration?~~

> **duration**?: `number`

#### Deprecated

- but kept for backwards compatibility

***

### ~~epochTime?~~

> **epochTime**?: `number`

#### Deprecated

- but kept for backwards compatibility

***

### error?

> **error**?: `IError`

***

### id

> **id**: `string`

#### Overrides

`StateWithId.id`

***

### nextContent?

> **nextContent**?: `Omit`<[`Content`](reference/interfaces/Content.md), `"streams"`>

***

### playbackState

> **playbackState**: [`PlaybackStates`](reference/enumerations/PlaybackStates.md)

***

### ~~seekableRange?~~

> **seekableRange**?: [`SeekableRange`](reference/interfaces/SeekableRange.md)

#### Deprecated

- but kept for backwards compatibility

***

### stillWatching?

> **stillWatching**?: `object`

#### interactionTimeout

> **interactionTimeout**: `number`

#### remaining?

> **remaining**?: `number`

***

### stream?

> **stream**?: `Omit`<[`Stream`](reference/interfaces/Stream.md), `"drms"`>

***

### streamRestrictions

> **streamRestrictions**: [`StreamRestrictions`](reference/interfaces/StreamRestrictions.md)

***

### timeline

> **timeline**: [`Timeline`](reference/interfaces/Timeline.md)

***

### tracks?

> **tracks**?: [`Track`](reference/interfaces/Track.md)[]

***

### volume?

> **volume**?: [`Volume`](reference/interfaces/Volume.md)
