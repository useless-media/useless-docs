# PlaybackSessionState

## Extends

- `ReceiverPlaybackSessionState`

## Properties

### advertisement

> **advertisement**: `object`

#### active

> **active**: `object`

#### active.advertisement?

> **advertisement**?: [`Advertisement`](reference/interfaces/Advertisement.md)<`AdvertisementAuxiliaryData`>

#### active.advertisementBreak?

> **advertisementBreak**?: [`AdvertisementBreak`](reference/interfaces/AdvertisementBreak.md) | [`AdvertisementCue`](AdvertisementCue.md)

#### Overrides

`ReceiverPlaybackSessionState.advertisement`

***

### autoplay

> **autoplay**: `boolean`

#### Overrides

`ReceiverPlaybackSessionState.autoplay`

***

### content?

> **content**?: `Omit`<[`Content`](reference/interfaces/Content.md), `"streams"`>

#### Overrides

`ReceiverPlaybackSessionState.content`

***

### contentDuration?

> **contentDuration**?: `number`

#### Overrides

`ReceiverPlaybackSessionState.contentDuration`

***

### contentEpochTime?

> **contentEpochTime**?: `number`

#### Overrides

`ReceiverPlaybackSessionState.contentEpochTime`

***

### contentTime?

> **contentTime**?: `number`

#### Overrides

`ReceiverPlaybackSessionState.contentTime`

***

### currentTime?

> **currentTime**?: `number`

#### Overrides

`ReceiverPlaybackSessionState.currentTime`

***

### duration?

> **duration**?: `number`

#### Overrides

`ReceiverPlaybackSessionState.duration`

***

### epochTime?

> **epochTime**?: `number`

#### Overrides

`ReceiverPlaybackSessionState.epochTime`

***

### error?

> **error**?: `IReceiverError`

***

### id

> **id**: `string`

#### Overrides

`ReceiverPlaybackSessionState.id`

***

### nextContent?

> **nextContent**?: `Omit`<[`Content`](reference/interfaces/Content.md), `"streams"`>

***

### playbackState

> **playbackState**: [`PlaybackStates`](reference/enumerations/PlaybackStates.md)

#### Overrides

`ReceiverPlaybackSessionState.playbackState`

***

### seekableRange?

> **seekableRange**?: [`SeekableRange`](reference/interfaces/SeekableRange.md)

#### Overrides

`ReceiverPlaybackSessionState.seekableRange`

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

#### Overrides

`ReceiverPlaybackSessionState.stream`

***

### streamRestrictions

> **streamRestrictions**: [`StreamRestrictions`](reference/interfaces/StreamRestrictions.md)

***

### timeline

> **timeline**: [`Timeline`](reference/interfaces/Timeline.md)

***

### tracks?

> **tracks**?: [`Track`](reference/interfaces/Track.md)[]

#### Overrides

`ReceiverPlaybackSessionState.tracks`

***

### volume?

> **volume**?: [`Volume`](reference/interfaces/Volume.md)

#### Overrides

`ReceiverPlaybackSessionState.volume`
