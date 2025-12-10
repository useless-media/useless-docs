# DecafClientUIController

## Constructors

### Constructor

> **new DecafClientUIController**(): `DecafClientUIController`

#### Returns

`DecafClientUIController`

## Properties

### delegate?

> `protected` **delegate**?: [`DecafClientUIControllerDelegate`](reference/interfaces/DecafClientUIControllerDelegate.md)

## Methods

### initialize()

> `abstract` **initialize**(`container`, `i18n`): `void`

#### Parameters

##### container

`HTMLElement`

##### i18n

[`I18n`](reference/interfaces/I18n.md)

#### Returns

`void`

***

### reset()

> `abstract` **reset**(): `void`

#### Returns

`void`

***

### setActiveMetadata()

> `abstract` **setActiveMetadata**(`metadata?`): `void`

#### Parameters

##### metadata?

[`TimelineMetadata`](reference/interfaces/TimelineMetadata.md)

#### Returns

`void`

***

### setActiveSection()

> `abstract` **setActiveSection**(`section?`): `void`

#### Parameters

##### section?

[`TimelineSection`](reference/interfaces/TimelineSection.md)

#### Returns

`void`

***

### setDelegate()

> **setDelegate**(`delegate`): `void`

#### Parameters

##### delegate

[`DecafClientUIControllerDelegate`](reference/interfaces/DecafClientUIControllerDelegate.md)

#### Returns

`void`

***

### setError()

> `abstract` **setError**(`error`): `void`

#### Parameters

##### error

[`IError`](reference/interfaces/IError.md)

#### Returns

`void`

***

### setNextContent()

> `abstract` **setNextContent**(`metadata?`): `void`

#### Parameters

##### metadata?

[`Metadata`](reference/interfaces/Metadata.md)

#### Returns

`void`

***

### setPlaybackSessionState()

> `abstract` **setPlaybackSessionState**(`playbackSessionState?`): `void`

#### Parameters

##### playbackSessionState?

[`PlaybackSessionState`](reference/interfaces/PlaybackSessionState.md)

#### Returns

`void`

***

### setPlaybackState()

> `abstract` **setPlaybackState**(`playbackState`): `void`

#### Parameters

##### playbackState

[`PlaybackStates`](reference/enumerations/PlaybackStates.md)

#### Returns

`void`

***

### setProgressInfo()

> `abstract` **setProgressInfo**(`progress`): `void`

#### Parameters

##### progress

[`TimelineProgress`](reference/interfaces/TimelineProgress.md)

#### Returns

`void`

***

### setStream()

> `abstract` **setStream**(`stream?`): `void`

#### Parameters

##### stream?

[`Stream`](reference/interfaces/Stream.md)

#### Returns

`void`

***

### setTimelineItems()

> `abstract` **setTimelineItems**(`data`): `void`

#### Parameters

##### data

([`TimelineMetadata`](reference/interfaces/TimelineMetadata.md) | [`TimelineSection`](../interfaces/TimelineSection.md))[]

#### Returns

`void`

***

### setTracks()

> `abstract` **setTracks**(`audio`, `text`): `void`

#### Parameters

##### audio

[`AudioTrack`](reference/interfaces/AudioTrack.md)[]

##### text

[`TextTrack`](reference/interfaces/TextTrack.md)[]

#### Returns

`void`
