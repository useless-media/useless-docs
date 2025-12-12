# TrackerCollection

## Constructors

### Constructor

> **new TrackerCollection**(`client`): `TrackerCollection`

#### Parameters

##### client

[`CommercialDeCafClient`](reference/classes/CommercialDeCafClient.md)

#### Returns

`TrackerCollection`

## Methods

### destroy()

> **destroy**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### initialize()

> **initialize**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### registerTracker()

> **registerTracker**(`name`, `tracker`): `void`

#### Parameters

##### name

`string`

##### tracker

[`ITracker`](reference/interfaces/ITracker.md)

#### Returns

`void`

***

### reset()

> **reset**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### trackError()

> **trackError**(`error`): `void`

#### Parameters

##### error

`IError`

#### Returns

`void`

***

### trackTimelineBehaviorUpdated()

> **trackTimelineBehaviorUpdated**(): `void`

#### Returns

`void`

***

### trackTimelineEvent()

> **trackTimelineEvent**(`event`): `void`

#### Parameters

##### event

`TimelineEvent`

#### Returns

`void`

***

### trackTimelineItemsUpdated()

> **trackTimelineItemsUpdated**(): `void`

#### Returns

`void`

***

### trackTimelineMetadataChanged()

> **trackTimelineMetadataChanged**(): `void`

#### Returns

`void`

***

### trackTimelinePositionUpdated()

> **trackTimelinePositionUpdated**(): `void`

#### Returns

`void`

***

### trackTimelineSectionChanged()

> **trackTimelineSectionChanged**(): `void`

#### Returns

`void`

***

### trackTimelineUpdated()

> **trackTimelineUpdated**(): `void`

#### Returns

`void`
