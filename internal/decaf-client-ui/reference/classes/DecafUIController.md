# DecafUIController

## Extends

- `DecafClientUIController`

## Constructors

### Constructor

> **new DecafUIController**(`render`): `DecafUIController`

#### Parameters

##### render

[`DecafBaseRender`](reference/classes/DecafBaseRender.md)

#### Returns

`DecafUIController`

#### Overrides

`DecafClientUIController.constructor`

## Properties

### anc

> **anc**: [`ArrowNavigationController`](reference/classes/ArrowNavigationController.md)

***

### clientDelegate?

> **clientDelegate**?: `DecafClientUIControllerDelegate`

***

### clientState

> **clientState**: [`ClientState`](reference/classes/ClientState.md)

***

### delegate?

> `protected` **delegate**?: `DecafClientUIControllerDelegate`

#### Inherited from

`DecafClientUIController.delegate`

***

### i18n

> **i18n**: `I18n`

***

### metadata

> **metadata**: [`MetadataState`](reference/classes/MetadataState.md)

***

### progressState

> **progressState**: [`ProgressState`](reference/classes/ProgressState.md)

***

### visibilityState

> **visibilityState**: [`VisibilityState`](reference/classes/VisibilityState.md)

## Methods

### destroy()

> **destroy**(): `void`

#### Returns

`void`

***

### getPlaybackSessionState()

> **getPlaybackSessionState**(): `PlaybackSessionState` | `undefined`

#### Returns

`PlaybackSessionState` | `undefined`

***

### initialize()

> **initialize**(`container`, `i18n`): `void`

#### Parameters

##### container

`HTMLElement`

##### i18n

`I18n`

#### Returns

`void`

#### Overrides

`DecafClientUIController.initialize`

***

### reset()

> **reset**(): `void`

#### Returns

`void`

#### Overrides

`DecafClientUIController.reset`

***

### setActiveMetadata()

> **setActiveMetadata**(`timelineMetadata?`): `void`

#### Parameters

##### timelineMetadata?

`TimelineMetadata`

#### Returns

`void`

#### Overrides

`DecafClientUIController.setActiveMetadata`

***

### setActiveSection()

> **setActiveSection**(`section?`): `void`

#### Parameters

##### section?

`TimelineSection`

#### Returns

`void`

#### Overrides

`DecafClientUIController.setActiveSection`

***

### setDebugState()

> **setDebugState**(`state`): `void`

#### Parameters

##### state

`PlaybackSessionState`

#### Returns

`void`

***

### setDelegate()

> **setDelegate**(`delegate`): `void`

#### Parameters

##### delegate

`DecafClientUIControllerDelegate`

#### Returns

`void`

#### Overrides

`DecafClientUIController.setDelegate`

***

### setError()

> **setError**(`error?`): `void`

#### Parameters

##### error?

`IError`

#### Returns

`void`

#### Overrides

`DecafClientUIController.setError`

***

### setNextContent()

> **setNextContent**(`metadata?`): `void`

#### Parameters

##### metadata?

`Metadata`

#### Returns

`void`

#### Overrides

`DecafClientUIController.setNextContent`

***

### setPlaybackSessionState()

> **setPlaybackSessionState**(`playbackSessionState?`): `void`

#### Parameters

##### playbackSessionState?

`PlaybackSessionState`

#### Returns

`void`

#### Overrides

`DecafClientUIController.setPlaybackSessionState`

***

### setPlaybackState()

> **setPlaybackState**(`playbackState`): `void`

#### Parameters

##### playbackState

`PlaybackStates`

#### Returns

`void`

#### Overrides

`DecafClientUIController.setPlaybackState`

***

### setProgressInfo()

> **setProgressInfo**(`progress`): `void`

#### Parameters

##### progress

`TimelineProgress`

#### Returns

`void`

#### Overrides

`DecafClientUIController.setProgressInfo`

***

### setStream()

> **setStream**(`stream?`): `void`

#### Parameters

##### stream?

`Stream`

#### Returns

`void`

#### Overrides

`DecafClientUIController.setStream`

***

### setTimelineItems()

> **setTimelineItems**(`data`): `void`

#### Parameters

##### data

(`TimelineSection` | `TimelineMetadata`)[]

#### Returns

`void`

#### Overrides

`DecafClientUIController.setTimelineItems`

***

### setTracks()

> **setTracks**(`audio`, `text`): `void`

#### Parameters

##### audio

`AudioTrack`[]

##### text

`TextTrack$1`[]

#### Returns

`void`

#### Overrides

`DecafClientUIController.setTracks`
