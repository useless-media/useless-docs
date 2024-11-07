# PlaybackSessionState

## Extends

- `ReceiverPlaybackSessionState`

## Properties

### advertisement

> **advertisement**: `Object`

#### Type declaration

##### active

> **active**: `Object`

##### active.advertisement?

> **active.advertisement**?: [`Advertisement`](reference/functions/Advertisement.md)<`AdvertisementAuxiliaryData`>

##### active.advertisementBreak?

> **active.advertisementBreak**?: [`AdvertisementBreak`](reference/functions/AdvertisementBreak.md) | [`AdvertisementCue`](../functions/AdvertisementCue.md)

#### Overrides

`ReceiverPlaybackSessionState.advertisement`

***

### autoplay

> **autoplay**: `boolean`

#### Overrides

`ReceiverPlaybackSessionState.autoplay`

***

### content?

> **content**?: `Omit`<[`Content`](reference/functions/Content.md), `"streams"`>

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

> **nextContent**?: `Omit`<[`Content`](reference/functions/Content.md), `"streams"`>

***

### playbackState

> **playbackState**: [`PlaybackStates`](reference/enumerations/PlaybackStates.md)

#### Overrides

`ReceiverPlaybackSessionState.playbackState`

***

### seekableRange?

> **seekableRange**?: [`SeekableRange`](reference/functions/SeekableRange.md)

#### Overrides

`ReceiverPlaybackSessionState.seekableRange`

***

### stillWatching?

> **stillWatching**?: `Object`

#### Type declaration

##### interactionTimeout

> **interactionTimeout**: `number`

##### remaining?

> **remaining**?: `number`

***

### stream?

> **stream**?: `Omit`<[`Stream`](reference/functions/Stream.md), `"drms"`>

#### Overrides

`ReceiverPlaybackSessionState.stream`

***

### streamRestrictions

> **streamRestrictions**: [`StreamRestrictions`](reference/functions/StreamRestrictions.md)

***

### timeline

> **timeline**: [`Timeline`](reference/functions/Timeline.md)

***

### tracks?

> **tracks**?: [`Track`](reference/functions/Track.md)[]

#### Overrides

`ReceiverPlaybackSessionState.tracks`

***

### volume?

> **volume**?: [`Volume`](reference/functions/Volume.md)

#### Overrides

`ReceiverPlaybackSessionState.volume`
