# TimelineManager

## Constructors

### Constructor

> **new TimelineManager**(`args`): `TimelineManager`

#### Parameters

##### args

[`TimelineManagerArgs`](reference/interfaces/TimelineManagerArgs.md)

#### Returns

`TimelineManager`

## Properties

### activeMetadata?

> **activeMetadata**?: `TimelineMetadata`

***

### activeSection?

> **activeSection**?: `TimelineSection`

***

### state

> **state**: [`TimelineManagerState`](reference/interfaces/TimelineManagerState.md)

***

### timelineItems

> **timelineItems**: `TimelineItem`[] = `[]`

## Methods

### addAdvertisementBreak()

> **addAdvertisementBreak**(`advertisementBreak`): `void`

/Reported by client

#### Parameters

##### advertisementBreak

`AdvertisementBreak`

#### Returns

`void`

***

### addMetadata()

> **addMetadata**(`metadata`): `void`

#### Parameters

##### metadata

`Metadata`

#### Returns

`void`

***

### addTimelineEvent()

> **addTimelineEvent**(`event`): `void`

#### Parameters

##### event

`Optional`<`TimelineEvent`, `"id"`>

#### Returns

`void`

***

### addTimelineItem()

> **addTimelineItem**(`item`): `void`

#### Parameters

##### item

`Optional`<`TimelineItem`, `"id"`>

#### Returns

`void`

***

### addTimelineMetadata()

> **addTimelineMetadata**(`metadata`): `void`

#### Parameters

##### metadata

`Optional`<`TimelineMetadata`, `"id"`>

#### Returns

`void`

***

### addTimelineSection()

> **addTimelineSection**(`section`): `void`

#### Parameters

##### section

`Optional`<`TimelineSection`, `"id"`>

#### Returns

`void`

***

### clearAdvertisement()

> **clearAdvertisement**(): `void`

#### Returns

`void`

***

### convertSeekPositionToZeroBasedTimeline()

> **convertSeekPositionToZeroBasedTimeline**(`position`): `number`

#### Parameters

##### position

`number`

#### Returns

`number`

***

### durationChanged()

> **durationChanged**(`contentDuration`): `void`

Reported by client

#### Parameters

##### contentDuration

`number`

#### Returns

`void`

***

### getActiveMetadataSectionInEpochRepresentation()

> **getActiveMetadataSectionInEpochRepresentation**(): `Section` | `undefined`

#### Returns

`Section` | `undefined`

***

### getTimelineEvents()

> **getTimelineEvents**(): `TimelineEvent`[]

#### Returns

`TimelineEvent`[]

***

### getTimelineItems()

> **getTimelineItems**(): `TimelineItem`[]

#### Returns

`TimelineItem`[]

***

### getTimelineMetadatas()

> **getTimelineMetadatas**(): `TimelineMetadata`[]

#### Returns

`TimelineMetadata`[]

***

### getTimelineSections()

> **getTimelineSections**(): `TimelineSection`[]

#### Returns

`TimelineSection`[]

***

### reset()

> **reset**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### seekableRangeUpdated()

> **seekableRangeUpdated**(`contentSeekableRange?`): `void`

#### Parameters

##### contentSeekableRange?

`SeekableRange`

#### Returns

`void`

***

### streamChanged()

> **streamChanged**(`stream`): `void`

#### Parameters

##### stream

`Stream`

#### Returns

`void`

***

### streamFinished()

> **streamFinished**(): `void`

#### Returns

`void`

***

### timeUpdated()

> **timeUpdated**(`contentTime`, `contentEpochTime`): `number`

#### Parameters

##### contentTime

`number`

##### contentEpochTime

`number`

#### Returns

`number`
