# PlaybackSession

## Extends

- `StateKeepingSession`<[`PlaybackSessionState`](reference/interfaces/PlaybackSessionState.md)>

## Properties

### advertisementState

> `protected` `readonly` **advertisementState**: `AdvertisementState`

***

### changes

> `protected` **changes**: `object`

#### absoluteDuration?

> **absoluteDuration**?: `number`

#### absoluteEpochTime?

> **absoluteEpochTime**?: `number`

#### absoluteSeekableRange?

> **absoluteSeekableRange**?: `object`

##### absoluteSeekableRange.epochSeekable?

> **epochSeekable**?: `object`

##### absoluteSeekableRange.epochSeekable.initialSeekableStart?

> **initialSeekableStart**?: `number`

##### absoluteSeekableRange.epochSeekable.seekable?

> **seekable**?: `object`

##### absoluteSeekableRange.epochSeekable.seekable.end?

> **end**?: `number`

##### absoluteSeekableRange.epochSeekable.seekable.start?

> **start**?: `number`

##### absoluteSeekableRange.liveDone?

> **liveDone**?: `boolean`

##### absoluteSeekableRange.movingWindow?

> **movingWindow**?: `boolean`

##### absoluteSeekableRange.now?

> **now**?: `number`

##### absoluteSeekableRange.seekable?

> **seekable**?: `object`

##### absoluteSeekableRange.seekable.end?

> **end**?: `number`

##### absoluteSeekableRange.seekable.start?

> **start**?: `number`

##### absoluteSeekableRange.stream0Time?

> **stream0Time**?: `number`

#### absoluteTime?

> **absoluteTime**?: `number`

#### advertisement?

> **advertisement**?: `object`

##### advertisement.active?

> **active**?: `object`

##### advertisement.active.advertisement?

> **advertisement**?: `object`

##### advertisement.active.advertisement.active?

> **active**?: `boolean`

##### advertisement.active.advertisement.auxiliaryData?

> **auxiliaryData**?: `object`

###### Index Signature

[`key`: `string`]: `any`

##### advertisement.active.advertisement.clickThroughUrl?

> **clickThroughUrl**?: `string`

##### advertisement.active.advertisement.completion?

> **completion**?: `number`

##### advertisement.active.advertisement.duration?

> **duration**?: `number`

##### advertisement.active.advertisement.id?

> **id**?: `string`

##### advertisement.active.advertisement.name?

> **name**?: `string`

##### advertisement.active.advertisement.position?

> **position**?: `number`

##### advertisement.active.advertisement.title?

> **title**?: `string`

##### advertisement.active.advertisement.watched?

> **watched**?: `boolean`

##### advertisement.active.advertisementBreak?

> **advertisementBreak**?: { `active?`: `boolean`; `advertisementIds?`: `string`[]; `auxiliaryData?`: {[`key`: `string`]: `any`; }; `completion?`: `number`; `contentPosition?`: `number`; `duration?`: `number`; `embedded?`: `boolean`; `id?`: `string`; `name?`: `string`; `position?`: `number`; `resolved?`: `boolean`; `type?`: [`AdvertisementBreakTypes`](reference/enumerations/AdvertisementBreakTypes.md); `watched?`: `boolean`; } | { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `contentPosition?`: `number`; `duration?`: `number`; `embedded?`: `boolean`; `id?`: `string`; `position?`: `number`; `resolved?`: `boolean`; `type?`: [`AdvertisementBreakTypes`](../enumerations/AdvertisementBreakTypes.md); }

#### autoplay?

> **autoplay**?: `boolean`

#### content?

> **content**?: `object`

##### content.auxiliaryData?

> **auxiliaryData**?: `object`

###### Index Signature

[`key`: `string`]: `any`

##### content.id?

> **id**?: `string`

##### content.metadata?

> **metadata**?: `object`

##### content.metadata.auxiliaryData?

> **auxiliaryData**?: `object`

###### Index Signature

[`key`: `string`]: `any`

##### content.metadata.channel?

> **channel**?: `object`

##### content.metadata.channel.logo?

> **logo**?: `object`

##### content.metadata.channel.logo.height?

> **height**?: `number`

##### content.metadata.channel.logo.type?

> **type**?: `string`

##### content.metadata.channel.logo.url?

> **url**?: `string`

##### content.metadata.channel.logo.width?

> **width**?: `number`

##### content.metadata.channel.name?

> **name**?: `string`

##### content.metadata.description?

> **description**?: `string`

##### content.metadata.images?

> **images**?: `object`[]

##### content.metadata.poster?

> **poster**?: `object`

##### content.metadata.poster.height?

> **height**?: `number`

##### content.metadata.poster.type?

> **type**?: `string`

##### content.metadata.poster.url?

> **url**?: `string`

##### content.metadata.poster.width?

> **width**?: `number`

##### content.metadata.section?

> **section**?: `object`

##### content.metadata.section.duration?

> **duration**?: `number`

##### content.metadata.section.endTime?

> **endTime**?: `number`

##### content.metadata.section.startTime?

> **startTime**?: `number`

##### content.metadata.series?

> **series**?: `object`

##### content.metadata.series.episode?

> **episode**?: `number`

##### content.metadata.series.season?

> **season**?: `number`

##### content.metadata.series.title?

> **title**?: `string`

##### content.metadata.title?

> **title**?: `string`

##### content.metadata.type?

> **type**?: [`MetadataTypes`](reference/enumerations/MetadataTypes.md)

##### content.nextContent?

> **nextContent**?: `boolean`

##### content.type?

> **type**?: `string`

#### contentDuration?

> **contentDuration**?: `number`

#### contentEpochTime?

> **contentEpochTime**?: `number`

#### contentSeekableRange?

> **contentSeekableRange**?: `object`

##### contentSeekableRange.epochSeekable?

> **epochSeekable**?: `object`

##### contentSeekableRange.epochSeekable.initialSeekableStart?

> **initialSeekableStart**?: `number`

##### contentSeekableRange.epochSeekable.seekable?

> **seekable**?: `object`

##### contentSeekableRange.epochSeekable.seekable.end?

> **end**?: `number`

##### contentSeekableRange.epochSeekable.seekable.start?

> **start**?: `number`

##### contentSeekableRange.liveDone?

> **liveDone**?: `boolean`

##### contentSeekableRange.movingWindow?

> **movingWindow**?: `boolean`

##### contentSeekableRange.now?

> **now**?: `number`

##### contentSeekableRange.seekable?

> **seekable**?: `object`

##### contentSeekableRange.seekable.end?

> **end**?: `number`

##### contentSeekableRange.seekable.start?

> **start**?: `number`

##### contentSeekableRange.stream0Time?

> **stream0Time**?: `number`

#### contentTime?

> **contentTime**?: `number`

#### ~~currentTime?~~

> **currentTime**?: `number`

##### Deprecated

- but kept for backwards compatibility

#### ~~duration?~~

> **duration**?: `number`

##### Deprecated

- but kept for backwards compatibility

#### ~~epochTime?~~

> **epochTime**?: `number`

##### Deprecated

- but kept for backwards compatibility

#### error?

> **error**?: `object`

##### error.category?

> **category**?: `string`

##### error.code?

> **code**?: `object`

##### error.code.name?

> **name**?: `string`

##### error.code.value?

> **value**?: `number`

##### error.details?

> **details**?: `object`

###### Index Signature

[`key`: `string`]: `any`

##### error.displayMessage?

> **displayMessage**?: `string`

##### error.label?

> **label**?: `string`

##### error.message?

> **message**?: `string`

##### error.name?

> **name**?: `string`

##### error.origin?

> **origin**?: `string`

##### error.originalError?

> **originalError**?: {[`key`: `string`]: `any`; } | { category?: string | undefined; code?: { name?: string | undefined; value?: number | undefined; } | undefined; details?: { [x: string]: any; } | undefined; displayMessage?: string | undefined; ... 9 more ...; type?: ErrorTypes | undefined; } | { `cause?`: { }; `message?`: `string`; `name?`: `string`; `stack?`: `string`; }

##### error.severity?

> **severity**?: [`ErrorSeverities`](reference/enumerations/ErrorSeverities.md)

##### error.source?

> **source**?: `string`

##### error.stack?

> **stack**?: `string`

##### error.stackedErrors?

> **stackedErrors**?: { category?: string | undefined; code?: { name?: string | undefined; value?: number | undefined; } | undefined; details?: { [x: string]: any; } | undefined; displayMessage?: string | undefined; ... 9 more ...; type?: ErrorTypes | undefined; }[]

##### error.type?

> **type**?: [`ErrorTypes`](reference/enumerations/ErrorTypes.md)

#### id?

> **id**?: `string`

#### nextContent?

> **nextContent**?: `object`

##### nextContent.auxiliaryData?

> **auxiliaryData**?: `object`

###### Index Signature

[`key`: `string`]: `any`

##### nextContent.id?

> **id**?: `string`

##### nextContent.metadata?

> **metadata**?: `object`

##### nextContent.metadata.auxiliaryData?

> **auxiliaryData**?: `object`

###### Index Signature

[`key`: `string`]: `any`

##### nextContent.metadata.channel?

> **channel**?: `object`

##### nextContent.metadata.channel.logo?

> **logo**?: `object`

##### nextContent.metadata.channel.logo.height?

> **height**?: `number`

##### nextContent.metadata.channel.logo.type?

> **type**?: `string`

##### nextContent.metadata.channel.logo.url?

> **url**?: `string`

##### nextContent.metadata.channel.logo.width?

> **width**?: `number`

##### nextContent.metadata.channel.name?

> **name**?: `string`

##### nextContent.metadata.description?

> **description**?: `string`

##### nextContent.metadata.images?

> **images**?: `object`[]

##### nextContent.metadata.poster?

> **poster**?: `object`

##### nextContent.metadata.poster.height?

> **height**?: `number`

##### nextContent.metadata.poster.type?

> **type**?: `string`

##### nextContent.metadata.poster.url?

> **url**?: `string`

##### nextContent.metadata.poster.width?

> **width**?: `number`

##### nextContent.metadata.section?

> **section**?: `object`

##### nextContent.metadata.section.duration?

> **duration**?: `number`

##### nextContent.metadata.section.endTime?

> **endTime**?: `number`

##### nextContent.metadata.section.startTime?

> **startTime**?: `number`

##### nextContent.metadata.series?

> **series**?: `object`

##### nextContent.metadata.series.episode?

> **episode**?: `number`

##### nextContent.metadata.series.season?

> **season**?: `number`

##### nextContent.metadata.series.title?

> **title**?: `string`

##### nextContent.metadata.title?

> **title**?: `string`

##### nextContent.metadata.type?

> **type**?: [`MetadataTypes`](reference/enumerations/MetadataTypes.md)

##### nextContent.nextContent?

> **nextContent**?: `boolean`

##### nextContent.type?

> **type**?: `string`

#### playbackState?

> **playbackState**?: [`PlaybackStates`](reference/enumerations/PlaybackStates.md)

#### ~~seekableRange?~~

> **seekableRange**?: `object`

##### Deprecated

- but kept for backwards compatibility

##### seekableRange.epochSeekable?

> **epochSeekable**?: `object`

##### seekableRange.epochSeekable.initialSeekableStart?

> **initialSeekableStart**?: `number`

##### seekableRange.epochSeekable.seekable?

> **seekable**?: `object`

##### seekableRange.epochSeekable.seekable.end?

> **end**?: `number`

##### seekableRange.epochSeekable.seekable.start?

> **start**?: `number`

##### seekableRange.liveDone?

> **liveDone**?: `boolean`

##### seekableRange.movingWindow?

> **movingWindow**?: `boolean`

##### seekableRange.now?

> **now**?: `number`

##### seekableRange.seekable?

> **seekable**?: `object`

##### seekableRange.seekable.end?

> **end**?: `number`

##### seekableRange.seekable.start?

> **start**?: `number`

##### seekableRange.stream0Time?

> **stream0Time**?: `number`

#### stillWatching?

> **stillWatching**?: `object`

##### stillWatching.interactionTimeout?

> **interactionTimeout**?: `number`

##### stillWatching.remaining?

> **remaining**?: `number`

#### stream?

> **stream**?: `object`

##### stream.advertisement?

> **advertisement**?: `object`

##### stream.advertisement.auxiliaryData?

> **auxiliaryData**?: `object`

###### Index Signature

[`key`: `string`]: `any`

##### stream.advertisement.type?

> **type**?: `string`

##### stream.advertisement.url?

> **url**?: `string`

##### stream.auxiliaryData?

> **auxiliaryData**?: `object`

###### Index Signature

[`key`: `string`]: `any`

##### stream.configuration?

> **configuration**?: `object`

###### Index Signature

[`key`: `string`]: `any`

##### stream.configuration.playbackConfigurationProfiles?

> **playbackConfigurationProfiles**?: `string`[]

##### stream.configuration.playbackEngine?

> **playbackEngine**?: `object`

###### Index Signature

[`key`: `string`]: `any`

##### stream.configuration.playbackEngine.preferred?

> **preferred**?: `string`

##### stream.configuration.playbackEngine.restricted?

> **restricted**?: `string`[]

##### stream.configuration.playbackEngine.selected?

> **selected**?: `string`

##### stream.containerType?

> **containerType**?: [`StreamContainerTypes`](reference/enumerations/StreamContainerTypes.md)

##### stream.contentType?

> **contentType**?: [`StreamContentTypes`](reference/enumerations/StreamContentTypes.md)

##### stream.encryption?

> **encryption**?: `object`

##### stream.encryption.cipher?

> **cipher**?: [`Aes128`](reference/enumerations/CipherTypes.md#aes128)

##### stream.encryption.cipherMode?

> **cipherMode**?: [`CipherModeTypes`](reference/enumerations/CipherModeTypes.md)

##### stream.encryption.initializationVector?

> **initializationVector**?: `number`[]

##### stream.encryption.key?

> **key**?: `number`[]

##### stream.encryption.keyId?

> **keyId**?: `number`[]

##### stream.encryption.padding?

> **padding**?: [`PaddingTypes`](reference/enumerations/PaddingTypes.md)

##### stream.id?

> **id**?: `string`

##### stream.playbackSessionUrl?

> **playbackSessionUrl**?: `string`

##### stream.streamRestrictions?

> **streamRestrictions**?: `object`

##### stream.streamRestrictions.pause?

> **pause**?: `boolean`

##### stream.streamRestrictions.seek?

> **seek**?: `boolean`

##### stream.streamType?

> **streamType**?: [`StreamTypes`](reference/enumerations/StreamTypes.md)

##### stream.url?

> **url**?: `string`

#### streamRestrictions?

> **streamRestrictions**?: `object`

##### streamRestrictions.pause?

> **pause**?: `boolean`

##### streamRestrictions.seek?

> **seek**?: `boolean`

#### timeline?

> **timeline**?: `object`

##### timeline.activeMetadata?

> **activeMetadata**?: `object`

##### timeline.activeMetadata.auxiliaryData?

> **auxiliaryData**?: `object`

###### Index Signature

[`key`: `string`]: `any`

##### timeline.activeMetadata.duration?

> **duration**?: `number`

##### timeline.activeMetadata.enabled?

> **enabled**?: `boolean`

##### timeline.activeMetadata.id?

> **id**?: `string`

##### timeline.activeMetadata.isDynamic?

> **isDynamic**?: `boolean`

##### timeline.activeMetadata.metadata?

> **metadata**?: `object`

##### timeline.activeMetadata.metadata.auxiliaryData?

> **auxiliaryData**?: `object`

###### Index Signature

[`key`: `string`]: `any`

##### timeline.activeMetadata.metadata.channel?

> **channel**?: `object`

##### timeline.activeMetadata.metadata.channel.logo?

> **logo**?: `object`

##### timeline.activeMetadata.metadata.channel.logo.height?

> **height**?: ...

##### timeline.activeMetadata.metadata.channel.logo.type?

> **type**?: ...

##### timeline.activeMetadata.metadata.channel.logo.url?

> **url**?: ...

##### timeline.activeMetadata.metadata.channel.logo.width?

> **width**?: ...

##### timeline.activeMetadata.metadata.channel.name?

> **name**?: `string`

##### timeline.activeMetadata.metadata.description?

> **description**?: `string`

##### timeline.activeMetadata.metadata.images?

> **images**?: `object`[]

##### timeline.activeMetadata.metadata.poster?

> **poster**?: `object`

##### timeline.activeMetadata.metadata.poster.height?

> **height**?: `number`

##### timeline.activeMetadata.metadata.poster.type?

> **type**?: `string`

##### timeline.activeMetadata.metadata.poster.url?

> **url**?: `string`

##### timeline.activeMetadata.metadata.poster.width?

> **width**?: `number`

##### timeline.activeMetadata.metadata.series?

> **series**?: `object`

##### timeline.activeMetadata.metadata.series.episode?

> **episode**?: `number`

##### timeline.activeMetadata.metadata.series.season?

> **season**?: `number`

##### timeline.activeMetadata.metadata.series.title?

> **title**?: `string`

##### timeline.activeMetadata.metadata.title?

> **title**?: `string`

##### timeline.activeMetadata.metadata.type?

> **type**?: [`MetadataTypes`](reference/enumerations/MetadataTypes.md)

##### timeline.activeMetadata.offset?

> **offset**?: `number`

##### timeline.activeMetadata.once?

> **once**?: `boolean`

##### timeline.activeMetadata.type?

> **type**?: [`TimelineItemTypes`](reference/enumerations/TimelineItemTypes.md)

##### timeline.activeSection?

> **activeSection**?: `object`

##### timeline.activeSection.auxiliaryData?

> **auxiliaryData**?: `object`

###### Index Signature

[`key`: `string`]: `any`

##### timeline.activeSection.duration?

> **duration**?: `number`

##### timeline.activeSection.enabled?

> **enabled**?: `boolean`

##### timeline.activeSection.id?

> **id**?: `string`

##### timeline.activeSection.isDynamic?

> **isDynamic**?: `boolean`

##### timeline.activeSection.offset?

> **offset**?: `number`

##### timeline.activeSection.once?

> **once**?: `boolean`

##### timeline.activeSection.sectionType?

> **sectionType**?: [`TimelineSectionTypes`](reference/enumerations/TimelineSectionTypes.md)

##### timeline.activeSection.skippable?

> **skippable**?: `boolean`

##### timeline.activeSection.type?

> **type**?: [`TimelineItemTypes`](reference/enumerations/TimelineItemTypes.md)

##### timeline.behavior?

> **behavior**?: `object`

##### timeline.behavior.position?

> **position**?: [`TimelineBehaviors`](reference/enumerations/TimelineBehaviors.md)

##### timeline.behavior.seekableEnd?

> **seekableEnd**?: [`TimelineBehaviors`](reference/enumerations/TimelineBehaviors.md)

##### timeline.behavior.seekableStart?

> **seekableStart**?: [`TimelineBehaviors`](reference/enumerations/TimelineBehaviors.md)

##### timeline.behavior.timelineEnd?

> **timelineEnd**?: [`TimelineBehaviors`](reference/enumerations/TimelineBehaviors.md)

##### timeline.behavior.timelineStart?

> **timelineStart**?: [`TimelineBehaviors`](reference/enumerations/TimelineBehaviors.md)

##### timeline.items?

> **items**?: `object`

###### Index Signature

[`key`: `string`]: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `duration?`: `number`; `enabled?`: `boolean`; `id?`: `string`; `isDynamic?`: `boolean`; `offset?`: `number`; `once?`: `boolean`; `type?`: [`TimelineItemTypes`](reference/enumerations/TimelineItemTypes.md); } | `undefined`

[`key`: `number`]: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `duration?`: `number`; `enabled?`: `boolean`; `id?`: `string`; `isDynamic?`: `boolean`; `offset?`: `number`; `once?`: `boolean`; `type?`: [`TimelineItemTypes`](reference/enumerations/TimelineItemTypes.md); } | `undefined`

##### timeline.position?

> **position**?: `number`

##### timeline.seekable?

> **seekable**?: `object`

##### timeline.seekable.end?

> **end**?: `number`

##### timeline.seekable.start?

> **start**?: `number`

##### timeline.stream0Time?

> **stream0Time**?: `number`

##### timeline.streamType?

> **streamType**?: [`StreamTypes`](reference/enumerations/StreamTypes.md)

##### timeline.timelineEnd?

> **timelineEnd**?: `number`

##### timeline.timelineStart?

> **timelineStart**?: `number`

##### timeline.timelineStartOffset?

> **timelineStartOffset**?: `number`

##### timeline.timeRepresentation?

> **timeRepresentation**?: [`TimeRepresentations`](reference/enumerations/TimeRepresentations.md)

#### tracks?

> **tracks**?: `object`[]

#### volume?

> **volume**?: `object`

##### volume.muted?

> **muted**?: `boolean`

##### volume.volume?

> **volume**?: `number`

#### Inherited from

`StateKeepingSession.changes`

***

### deletedPaths

> `protected` **deletedPaths**: `string`[]

#### Inherited from

`StateKeepingSession.deletedPaths`

***

### destroyed

> `protected` **destroyed**: `boolean`

#### Inherited from

`StateKeepingSession.destroyed`

***

### events

> `protected` **events**: `string`[]

#### Inherited from

`StateKeepingSession.events`

***

### notifyChange

> `readonly` **notifyChange**: `TThrottledFunction`

#### Inherited from

`StateKeepingSession.notifyChange`

***

### notifyChangeEvery15Seconds

> `readonly` **notifyChangeEvery15Seconds**: `TThrottledFunction`

#### Inherited from

`StateKeepingSession.notifyChangeEvery15Seconds`

***

### state

> `protected` `readonly` **state**: [`PlaybackSessionState`](reference/interfaces/PlaybackSessionState.md)

#### Overrides

`StateKeepingSession.state`

## Methods

### addEventListener()

> **addEventListener**<`K`>(`type`, `subscriber`): `Emitter`<[`SessionEventPayloads`](reference/interfaces/SessionEventPayloads.md)<[`PlaybackSessionState`](PlaybackSessionState.md)>>

#### Type Parameters

##### K

`K` *extends* keyof [`SessionEventPayloads`](reference/interfaces/SessionEventPayloads.md)<[`PlaybackSessionState`](PlaybackSessionState.md)>

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

`Emitter`<[`SessionEventPayloads`](reference/interfaces/SessionEventPayloads.md)<[`PlaybackSessionState`](PlaybackSessionState.md)>>

#### Inherited from

`StateKeepingSession.addEventListener`

***

### commitChange()

> `protected` **commitChange**(`change`, ...`events`): `void`

#### Parameters

##### change

###### absoluteDuration?

`number`

###### absoluteEpochTime?

`number`

###### absoluteSeekableRange?

{ `epochSeekable?`: { `initialSeekableStart?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; }; `liveDone?`: `boolean`; `movingWindow?`: `boolean`; `now?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; `stream0Time?`: `number`; }

###### absoluteSeekableRange.epochSeekable?

{ `initialSeekableStart?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; }

###### absoluteSeekableRange.epochSeekable.initialSeekableStart?

`number`

###### absoluteSeekableRange.epochSeekable.seekable?

{ `end?`: `number`; `start?`: `number`; }

###### absoluteSeekableRange.epochSeekable.seekable.end?

`number`

###### absoluteSeekableRange.epochSeekable.seekable.start?

`number`

###### absoluteSeekableRange.liveDone?

`boolean`

###### absoluteSeekableRange.movingWindow?

`boolean`

###### absoluteSeekableRange.now?

`number`

###### absoluteSeekableRange.seekable?

{ `end?`: `number`; `start?`: `number`; }

###### absoluteSeekableRange.seekable.end?

`number`

###### absoluteSeekableRange.seekable.start?

`number`

###### absoluteSeekableRange.stream0Time?

`number`

###### absoluteTime?

`number`

###### advertisement?

{ `active?`: { `advertisement?`: { `active?`: `boolean`; `auxiliaryData?`: {[`key`: `string`]: `any`; }; `clickThroughUrl?`: `string`; `completion?`: `number`; `duration?`: `number`; `id?`: `string`; `name?`: `string`; `position?`: `number`; `title?`: `string`; `watched?`: `boolean`; }; `advertisementBreak?`: { `active?`: `boolean`; `advertisementIds?`: `string`[]; `auxiliaryData?`: {[`key`: `string`]: `any`; }; `completion?`: `number`; `contentPosition?`: `number`; `duration?`: `number`; `embedded?`: `boolean`; `id?`: `string`; `name?`: `string`; `position?`: `number`; `resolved?`: `boolean`; `type?`: [`AdvertisementBreakTypes`](reference/enumerations/AdvertisementBreakTypes.md); `watched?`: `boolean`; } | { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `contentPosition?`: `number`; `duration?`: `number`; `embedded?`: `boolean`; `id?`: `string`; `position?`: `number`; `resolved?`: `boolean`; `type?`: [`AdvertisementBreakTypes`](../enumerations/AdvertisementBreakTypes.md); }; }; }

###### advertisement.active?

{ `advertisement?`: { `active?`: `boolean`; `auxiliaryData?`: {[`key`: `string`]: `any`; }; `clickThroughUrl?`: `string`; `completion?`: `number`; `duration?`: `number`; `id?`: `string`; `name?`: `string`; `position?`: `number`; `title?`: `string`; `watched?`: `boolean`; }; `advertisementBreak?`: { `active?`: `boolean`; `advertisementIds?`: `string`[]; `auxiliaryData?`: {[`key`: `string`]: `any`; }; `completion?`: `number`; `contentPosition?`: `number`; `duration?`: `number`; `embedded?`: `boolean`; `id?`: `string`; `name?`: `string`; `position?`: `number`; `resolved?`: `boolean`; `type?`: [`AdvertisementBreakTypes`](reference/enumerations/AdvertisementBreakTypes.md); `watched?`: `boolean`; } | { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `contentPosition?`: `number`; `duration?`: `number`; `embedded?`: `boolean`; `id?`: `string`; `position?`: `number`; `resolved?`: `boolean`; `type?`: [`AdvertisementBreakTypes`](../enumerations/AdvertisementBreakTypes.md); }; }

###### advertisement.active.advertisement?

{ `active?`: `boolean`; `auxiliaryData?`: {[`key`: `string`]: `any`; }; `clickThroughUrl?`: `string`; `completion?`: `number`; `duration?`: `number`; `id?`: `string`; `name?`: `string`; `position?`: `number`; `title?`: `string`; `watched?`: `boolean`; }

###### advertisement.active.advertisement.active?

`boolean`

###### advertisement.active.advertisement.auxiliaryData?

{[`key`: `string`]: `any`; }

###### advertisement.active.advertisement.clickThroughUrl?

`string`

###### advertisement.active.advertisement.completion?

`number`

###### advertisement.active.advertisement.duration?

`number`

###### advertisement.active.advertisement.id?

`string`

###### advertisement.active.advertisement.name?

`string`

###### advertisement.active.advertisement.position?

`number`

###### advertisement.active.advertisement.title?

`string`

###### advertisement.active.advertisement.watched?

`boolean`

###### advertisement.active.advertisementBreak?

{ `active?`: `boolean`; `advertisementIds?`: `string`[]; `auxiliaryData?`: {[`key`: `string`]: `any`; }; `completion?`: `number`; `contentPosition?`: `number`; `duration?`: `number`; `embedded?`: `boolean`; `id?`: `string`; `name?`: `string`; `position?`: `number`; `resolved?`: `boolean`; `type?`: [`AdvertisementBreakTypes`](reference/enumerations/AdvertisementBreakTypes.md); `watched?`: `boolean`; } | { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `contentPosition?`: `number`; `duration?`: `number`; `embedded?`: `boolean`; `id?`: `string`; `position?`: `number`; `resolved?`: `boolean`; `type?`: [`AdvertisementBreakTypes`](../enumerations/AdvertisementBreakTypes.md); }

###### autoplay?

`boolean`

###### content?

{ `auxiliaryData?`: {[`key`: `string`]: `any`; }; `id?`: `string`; `metadata?`: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `channel?`: { `logo?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `name?`: `string`; }; `description?`: `string`; `images?`: `object`[]; `poster?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `section?`: { `duration?`: `number`; `endTime?`: `number`; `startTime?`: `number`; }; `series?`: { `episode?`: `number`; `season?`: `number`; `title?`: `string`; }; `title?`: `string`; `type?`: [`MetadataTypes`](reference/enumerations/MetadataTypes.md); }; `nextContent?`: `boolean`; `type?`: `string`; }

###### content.auxiliaryData?

{[`key`: `string`]: `any`; }

###### content.id?

`string`

###### content.metadata?

{ `auxiliaryData?`: {[`key`: `string`]: `any`; }; `channel?`: { `logo?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `name?`: `string`; }; `description?`: `string`; `images?`: `object`[]; `poster?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `section?`: { `duration?`: `number`; `endTime?`: `number`; `startTime?`: `number`; }; `series?`: { `episode?`: `number`; `season?`: `number`; `title?`: `string`; }; `title?`: `string`; `type?`: [`MetadataTypes`](reference/enumerations/MetadataTypes.md); }

###### content.metadata.auxiliaryData?

{[`key`: `string`]: `any`; }

###### content.metadata.channel?

{ `logo?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `name?`: `string`; }

###### content.metadata.channel.logo?

{ `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }

###### content.metadata.channel.logo.height?

`number`

###### content.metadata.channel.logo.type?

`string`

###### content.metadata.channel.logo.url?

`string`

###### content.metadata.channel.logo.width?

`number`

###### content.metadata.channel.name?

`string`

###### content.metadata.description?

`string`

###### content.metadata.images?

`object`[]

###### content.metadata.poster?

{ `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }

###### content.metadata.poster.height?

`number`

###### content.metadata.poster.type?

`string`

###### content.metadata.poster.url?

`string`

###### content.metadata.poster.width?

`number`

###### content.metadata.section?

{ `duration?`: `number`; `endTime?`: `number`; `startTime?`: `number`; }

###### content.metadata.section.duration?

`number`

###### content.metadata.section.endTime?

`number`

###### content.metadata.section.startTime?

`number`

###### content.metadata.series?

{ `episode?`: `number`; `season?`: `number`; `title?`: `string`; }

###### content.metadata.series.episode?

`number`

###### content.metadata.series.season?

`number`

###### content.metadata.series.title?

`string`

###### content.metadata.title?

`string`

###### content.metadata.type?

[`MetadataTypes`](reference/enumerations/MetadataTypes.md)

###### content.nextContent?

`boolean`

###### content.type?

`string`

###### contentDuration?

`number`

###### contentEpochTime?

`number`

###### contentSeekableRange?

{ `epochSeekable?`: { `initialSeekableStart?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; }; `liveDone?`: `boolean`; `movingWindow?`: `boolean`; `now?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; `stream0Time?`: `number`; }

###### contentSeekableRange.epochSeekable?

{ `initialSeekableStart?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; }

###### contentSeekableRange.epochSeekable.initialSeekableStart?

`number`

###### contentSeekableRange.epochSeekable.seekable?

{ `end?`: `number`; `start?`: `number`; }

###### contentSeekableRange.epochSeekable.seekable.end?

`number`

###### contentSeekableRange.epochSeekable.seekable.start?

`number`

###### contentSeekableRange.liveDone?

`boolean`

###### contentSeekableRange.movingWindow?

`boolean`

###### contentSeekableRange.now?

`number`

###### contentSeekableRange.seekable?

{ `end?`: `number`; `start?`: `number`; }

###### contentSeekableRange.seekable.end?

`number`

###### contentSeekableRange.seekable.start?

`number`

###### contentSeekableRange.stream0Time?

`number`

###### contentTime?

`number`

###### currentTime?

`number`

**Deprecated**

- but kept for backwards compatibility

###### duration?

`number`

**Deprecated**

- but kept for backwards compatibility

###### epochTime?

`number`

**Deprecated**

- but kept for backwards compatibility

###### error?

{ `category?`: `string`; `code?`: { `name?`: `string`; `value?`: `number`; }; `details?`: {[`key`: `string`]: `any`; }; `displayMessage?`: `string`; `label?`: `string`; `message?`: `string`; `name?`: `string`; `origin?`: `string`; `originalError?`: {[`key`: `string`]: `any`; } | { category?: string | undefined; code?: { name?: string | undefined; value?: number | undefined; } | undefined; details?: { [x: string]: any; } | undefined; displayMessage?: string | undefined; ... 9 more ...; type?: ErrorTypes | undefined; } | { `cause?`: { }; `message?`: `string`; `name?`: `string`; `stack?`: `string`; }; `severity?`: [`ErrorSeverities`](reference/enumerations/ErrorSeverities.md); `source?`: `string`; `stack?`: `string`; `stackedErrors?`: { category?: string | undefined; code?: { name?: string | undefined; value?: number | undefined; } | undefined; details?: { [x: string]: any; } | undefined; displayMessage?: string | undefined; ... 9 more ...; type?: ErrorTypes | undefined; }[]; `type?`: [`ErrorTypes`](../enumerations/ErrorTypes.md); }

###### error.category?

`string`

###### error.code?

{ `name?`: `string`; `value?`: `number`; }

###### error.code.name?

`string`

###### error.code.value?

`number`

###### error.details?

{[`key`: `string`]: `any`; }

###### error.displayMessage?

`string`

###### error.label?

`string`

###### error.message?

`string`

###### error.name?

`string`

###### error.origin?

`string`

###### error.originalError?

{[`key`: `string`]: `any`; } | { category?: string | undefined; code?: { name?: string | undefined; value?: number | undefined; } | undefined; details?: { [x: string]: any; } | undefined; displayMessage?: string | undefined; ... 9 more ...; type?: ErrorTypes | undefined; } | { `cause?`: { }; `message?`: `string`; `name?`: `string`; `stack?`: `string`; }

###### error.severity?

[`ErrorSeverities`](reference/enumerations/ErrorSeverities.md)

###### error.source?

`string`

###### error.stack?

`string`

###### error.stackedErrors?

{ category?: string | undefined; code?: { name?: string | undefined; value?: number | undefined; } | undefined; details?: { [x: string]: any; } | undefined; displayMessage?: string | undefined; ... 9 more ...; type?: ErrorTypes | undefined; }[]

###### error.type?

[`ErrorTypes`](reference/enumerations/ErrorTypes.md)

###### id?

`string`

###### nextContent?

{ `auxiliaryData?`: {[`key`: `string`]: `any`; }; `id?`: `string`; `metadata?`: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `channel?`: { `logo?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `name?`: `string`; }; `description?`: `string`; `images?`: `object`[]; `poster?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `section?`: { `duration?`: `number`; `endTime?`: `number`; `startTime?`: `number`; }; `series?`: { `episode?`: `number`; `season?`: `number`; `title?`: `string`; }; `title?`: `string`; `type?`: [`MetadataTypes`](reference/enumerations/MetadataTypes.md); }; `nextContent?`: `boolean`; `type?`: `string`; }

###### nextContent.auxiliaryData?

{[`key`: `string`]: `any`; }

###### nextContent.id?

`string`

###### nextContent.metadata?

{ `auxiliaryData?`: {[`key`: `string`]: `any`; }; `channel?`: { `logo?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `name?`: `string`; }; `description?`: `string`; `images?`: `object`[]; `poster?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `section?`: { `duration?`: `number`; `endTime?`: `number`; `startTime?`: `number`; }; `series?`: { `episode?`: `number`; `season?`: `number`; `title?`: `string`; }; `title?`: `string`; `type?`: [`MetadataTypes`](reference/enumerations/MetadataTypes.md); }

###### nextContent.metadata.auxiliaryData?

{[`key`: `string`]: `any`; }

###### nextContent.metadata.channel?

{ `logo?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `name?`: `string`; }

###### nextContent.metadata.channel.logo?

{ `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }

###### nextContent.metadata.channel.logo.height?

`number`

###### nextContent.metadata.channel.logo.type?

`string`

###### nextContent.metadata.channel.logo.url?

`string`

###### nextContent.metadata.channel.logo.width?

`number`

###### nextContent.metadata.channel.name?

`string`

###### nextContent.metadata.description?

`string`

###### nextContent.metadata.images?

`object`[]

###### nextContent.metadata.poster?

{ `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }

###### nextContent.metadata.poster.height?

`number`

###### nextContent.metadata.poster.type?

`string`

###### nextContent.metadata.poster.url?

`string`

###### nextContent.metadata.poster.width?

`number`

###### nextContent.metadata.section?

{ `duration?`: `number`; `endTime?`: `number`; `startTime?`: `number`; }

###### nextContent.metadata.section.duration?

`number`

###### nextContent.metadata.section.endTime?

`number`

###### nextContent.metadata.section.startTime?

`number`

###### nextContent.metadata.series?

{ `episode?`: `number`; `season?`: `number`; `title?`: `string`; }

###### nextContent.metadata.series.episode?

`number`

###### nextContent.metadata.series.season?

`number`

###### nextContent.metadata.series.title?

`string`

###### nextContent.metadata.title?

`string`

###### nextContent.metadata.type?

[`MetadataTypes`](reference/enumerations/MetadataTypes.md)

###### nextContent.nextContent?

`boolean`

###### nextContent.type?

`string`

###### playbackState?

[`PlaybackStates`](reference/enumerations/PlaybackStates.md)

###### seekableRange?

{ `epochSeekable?`: { `initialSeekableStart?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; }; `liveDone?`: `boolean`; `movingWindow?`: `boolean`; `now?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; `stream0Time?`: `number`; }

**Deprecated**

- but kept for backwards compatibility

###### seekableRange.epochSeekable?

{ `initialSeekableStart?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; }

###### seekableRange.epochSeekable.initialSeekableStart?

`number`

###### seekableRange.epochSeekable.seekable?

{ `end?`: `number`; `start?`: `number`; }

###### seekableRange.epochSeekable.seekable.end?

`number`

###### seekableRange.epochSeekable.seekable.start?

`number`

###### seekableRange.liveDone?

`boolean`

###### seekableRange.movingWindow?

`boolean`

###### seekableRange.now?

`number`

###### seekableRange.seekable?

{ `end?`: `number`; `start?`: `number`; }

###### seekableRange.seekable.end?

`number`

###### seekableRange.seekable.start?

`number`

###### seekableRange.stream0Time?

`number`

###### stillWatching?

{ `interactionTimeout?`: `number`; `remaining?`: `number`; }

###### stillWatching.interactionTimeout?

`number`

###### stillWatching.remaining?

`number`

###### stream?

{ `advertisement?`: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `type?`: `string`; `url?`: `string`; }; `auxiliaryData?`: {[`key`: `string`]: `any`; }; `configuration?`: {[`key`: `string`]: `any`; `playbackConfigurationProfiles?`: `string`[]; `playbackEngine?`: {[`key`: `string`]: `any`; `preferred?`: `string`; `restricted?`: `string`[]; `selected?`: `string`; }; }; `containerType?`: [`StreamContainerTypes`](reference/enumerations/StreamContainerTypes.md); `contentType?`: [`StreamContentTypes`](../enumerations/StreamContentTypes.md); `encryption?`: { `cipher?`: [`Aes128`](../enumerations/CipherTypes.md#aes128); `cipherMode?`: [`CipherModeTypes`](../enumerations/CipherModeTypes.md); `initializationVector?`: `number`[]; `key?`: `number`[]; `keyId?`: `number`[]; `padding?`: [`PaddingTypes`](../enumerations/PaddingTypes.md); }; `id?`: `string`; `playbackSessionUrl?`: `string`; `streamRestrictions?`: { `pause?`: `boolean`; `seek?`: `boolean`; }; `streamType?`: [`StreamTypes`](../enumerations/StreamTypes.md); `url?`: `string`; }

###### stream.advertisement?

{ `auxiliaryData?`: {[`key`: `string`]: `any`; }; `type?`: `string`; `url?`: `string`; }

###### stream.advertisement.auxiliaryData?

{[`key`: `string`]: `any`; }

###### stream.advertisement.type?

`string`

###### stream.advertisement.url?

`string`

###### stream.auxiliaryData?

{[`key`: `string`]: `any`; }

###### stream.configuration?

{[`key`: `string`]: `any`; `playbackConfigurationProfiles?`: `string`[]; `playbackEngine?`: {[`key`: `string`]: `any`; `preferred?`: `string`; `restricted?`: `string`[]; `selected?`: `string`; }; }

###### stream.configuration.playbackConfigurationProfiles?

`string`[]

###### stream.configuration.playbackEngine?

{[`key`: `string`]: `any`; `preferred?`: `string`; `restricted?`: `string`[]; `selected?`: `string`; }

###### stream.configuration.playbackEngine.preferred?

`string`

###### stream.configuration.playbackEngine.restricted?

`string`[]

###### stream.configuration.playbackEngine.selected?

`string`

###### stream.containerType?

[`StreamContainerTypes`](reference/enumerations/StreamContainerTypes.md)

###### stream.contentType?

[`StreamContentTypes`](reference/enumerations/StreamContentTypes.md)

###### stream.encryption?

{ `cipher?`: [`Aes128`](reference/enumerations/CipherTypes.md#aes128); `cipherMode?`: [`CipherModeTypes`](../enumerations/CipherModeTypes.md); `initializationVector?`: `number`[]; `key?`: `number`[]; `keyId?`: `number`[]; `padding?`: [`PaddingTypes`](../enumerations/PaddingTypes.md); }

###### stream.encryption.cipher?

[`Aes128`](reference/enumerations/CipherTypes.md#aes128)

###### stream.encryption.cipherMode?

[`CipherModeTypes`](reference/enumerations/CipherModeTypes.md)

###### stream.encryption.initializationVector?

`number`[]

###### stream.encryption.key?

`number`[]

###### stream.encryption.keyId?

`number`[]

###### stream.encryption.padding?

[`PaddingTypes`](reference/enumerations/PaddingTypes.md)

###### stream.id?

`string`

###### stream.playbackSessionUrl?

`string`

###### stream.streamRestrictions?

{ `pause?`: `boolean`; `seek?`: `boolean`; }

###### stream.streamRestrictions.pause?

`boolean`

###### stream.streamRestrictions.seek?

`boolean`

###### stream.streamType?

[`StreamTypes`](reference/enumerations/StreamTypes.md)

###### stream.url?

`string`

###### streamRestrictions?

{ `pause?`: `boolean`; `seek?`: `boolean`; }

###### streamRestrictions.pause?

`boolean`

###### streamRestrictions.seek?

`boolean`

###### timeline?

{ `activeMetadata?`: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `duration?`: `number`; `enabled?`: `boolean`; `id?`: `string`; `isDynamic?`: `boolean`; `metadata?`: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `channel?`: { `logo?`: { `height?`: ...; `type?`: ...; `url?`: ...; `width?`: ...; }; `name?`: `string`; }; `description?`: `string`; `images?`: `object`[]; `poster?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `series?`: { `episode?`: `number`; `season?`: `number`; `title?`: `string`; }; `title?`: `string`; `type?`: [`MetadataTypes`](reference/enumerations/MetadataTypes.md); }; `offset?`: `number`; `once?`: `boolean`; `type?`: [`TimelineItemTypes`](../enumerations/TimelineItemTypes.md); }; `activeSection?`: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `duration?`: `number`; `enabled?`: `boolean`; `id?`: `string`; `isDynamic?`: `boolean`; `offset?`: `number`; `once?`: `boolean`; `sectionType?`: [`TimelineSectionTypes`](../enumerations/TimelineSectionTypes.md); `skippable?`: `boolean`; `type?`: [`TimelineItemTypes`](../enumerations/TimelineItemTypes.md); }; `behavior?`: { `position?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); `seekableEnd?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); `seekableStart?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); `timelineEnd?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); `timelineStart?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); }; `items?`: {[`key`: `string`]: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `duration?`: `number`; `enabled?`: `boolean`; `id?`: `string`; `isDynamic?`: `boolean`; `offset?`: `number`; `once?`: `boolean`; `type?`: [`TimelineItemTypes`](../enumerations/TimelineItemTypes.md); } | `undefined`;
  [`key`: `number`]: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `duration?`: `number`; `enabled?`: `boolean`; `id?`: `string`; `isDynamic?`: `boolean`; `offset?`: `number`; `once?`: `boolean`; `type?`: [`TimelineItemTypes`](reference/enumerations/TimelineItemTypes.md); } | `undefined`; }; `position?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; `stream0Time?`: `number`; `streamType?`: [`StreamTypes`](../enumerations/StreamTypes.md); `timelineEnd?`: `number`; `timelineStart?`: `number`; `timelineStartOffset?`: `number`; `timeRepresentation?`: [`TimeRepresentations`](../enumerations/TimeRepresentations.md); }

###### timeline.activeMetadata?

{ `auxiliaryData?`: {[`key`: `string`]: `any`; }; `duration?`: `number`; `enabled?`: `boolean`; `id?`: `string`; `isDynamic?`: `boolean`; `metadata?`: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `channel?`: { `logo?`: { `height?`: ...; `type?`: ...; `url?`: ...; `width?`: ...; }; `name?`: `string`; }; `description?`: `string`; `images?`: `object`[]; `poster?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `series?`: { `episode?`: `number`; `season?`: `number`; `title?`: `string`; }; `title?`: `string`; `type?`: [`MetadataTypes`](reference/enumerations/MetadataTypes.md); }; `offset?`: `number`; `once?`: `boolean`; `type?`: [`TimelineItemTypes`](../enumerations/TimelineItemTypes.md); }

###### timeline.activeMetadata.auxiliaryData?

{[`key`: `string`]: `any`; }

###### timeline.activeMetadata.duration?

`number`

###### timeline.activeMetadata.enabled?

`boolean`

###### timeline.activeMetadata.id?

`string`

###### timeline.activeMetadata.isDynamic?

`boolean`

###### timeline.activeMetadata.metadata?

{ `auxiliaryData?`: {[`key`: `string`]: `any`; }; `channel?`: { `logo?`: { `height?`: ...; `type?`: ...; `url?`: ...; `width?`: ...; }; `name?`: `string`; }; `description?`: `string`; `images?`: `object`[]; `poster?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `series?`: { `episode?`: `number`; `season?`: `number`; `title?`: `string`; }; `title?`: `string`; `type?`: [`MetadataTypes`](reference/enumerations/MetadataTypes.md); }

###### timeline.activeMetadata.metadata.auxiliaryData?

{[`key`: `string`]: `any`; }

###### timeline.activeMetadata.metadata.channel?

{ `logo?`: { `height?`: ...; `type?`: ...; `url?`: ...; `width?`: ...; }; `name?`: `string`; }

###### timeline.activeMetadata.metadata.channel.logo?

{ `height?`: ...; `type?`: ...; `url?`: ...; `width?`: ...; }

###### timeline.activeMetadata.metadata.channel.logo.height?

...

###### timeline.activeMetadata.metadata.channel.logo.type?

...

###### timeline.activeMetadata.metadata.channel.logo.url?

...

###### timeline.activeMetadata.metadata.channel.logo.width?

...

###### timeline.activeMetadata.metadata.channel.name?

`string`

###### timeline.activeMetadata.metadata.description?

`string`

###### timeline.activeMetadata.metadata.images?

`object`[]

###### timeline.activeMetadata.metadata.poster?

{ `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }

###### timeline.activeMetadata.metadata.poster.height?

`number`

###### timeline.activeMetadata.metadata.poster.type?

`string`

###### timeline.activeMetadata.metadata.poster.url?

`string`

###### timeline.activeMetadata.metadata.poster.width?

`number`

###### timeline.activeMetadata.metadata.series?

{ `episode?`: `number`; `season?`: `number`; `title?`: `string`; }

###### timeline.activeMetadata.metadata.series.episode?

`number`

###### timeline.activeMetadata.metadata.series.season?

`number`

###### timeline.activeMetadata.metadata.series.title?

`string`

###### timeline.activeMetadata.metadata.title?

`string`

###### timeline.activeMetadata.metadata.type?

[`MetadataTypes`](reference/enumerations/MetadataTypes.md)

###### timeline.activeMetadata.offset?

`number`

###### timeline.activeMetadata.once?

`boolean`

###### timeline.activeMetadata.type?

[`TimelineItemTypes`](reference/enumerations/TimelineItemTypes.md)

###### timeline.activeSection?

{ `auxiliaryData?`: {[`key`: `string`]: `any`; }; `duration?`: `number`; `enabled?`: `boolean`; `id?`: `string`; `isDynamic?`: `boolean`; `offset?`: `number`; `once?`: `boolean`; `sectionType?`: [`TimelineSectionTypes`](reference/enumerations/TimelineSectionTypes.md); `skippable?`: `boolean`; `type?`: [`TimelineItemTypes`](../enumerations/TimelineItemTypes.md); }

###### timeline.activeSection.auxiliaryData?

{[`key`: `string`]: `any`; }

###### timeline.activeSection.duration?

`number`

###### timeline.activeSection.enabled?

`boolean`

###### timeline.activeSection.id?

`string`

###### timeline.activeSection.isDynamic?

`boolean`

###### timeline.activeSection.offset?

`number`

###### timeline.activeSection.once?

`boolean`

###### timeline.activeSection.sectionType?

[`TimelineSectionTypes`](reference/enumerations/TimelineSectionTypes.md)

###### timeline.activeSection.skippable?

`boolean`

###### timeline.activeSection.type?

[`TimelineItemTypes`](reference/enumerations/TimelineItemTypes.md)

###### timeline.behavior?

{ `position?`: [`TimelineBehaviors`](reference/enumerations/TimelineBehaviors.md); `seekableEnd?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); `seekableStart?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); `timelineEnd?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); `timelineStart?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); }

###### timeline.behavior.position?

[`TimelineBehaviors`](reference/enumerations/TimelineBehaviors.md)

###### timeline.behavior.seekableEnd?

[`TimelineBehaviors`](reference/enumerations/TimelineBehaviors.md)

###### timeline.behavior.seekableStart?

[`TimelineBehaviors`](reference/enumerations/TimelineBehaviors.md)

###### timeline.behavior.timelineEnd?

[`TimelineBehaviors`](reference/enumerations/TimelineBehaviors.md)

###### timeline.behavior.timelineStart?

[`TimelineBehaviors`](reference/enumerations/TimelineBehaviors.md)

###### timeline.items?

{[`key`: `string`]: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `duration?`: `number`; `enabled?`: `boolean`; `id?`: `string`; `isDynamic?`: `boolean`; `offset?`: `number`; `once?`: `boolean`; `type?`: [`TimelineItemTypes`](reference/enumerations/TimelineItemTypes.md); } | `undefined`;
[`key`: `number`]: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `duration?`: `number`; `enabled?`: `boolean`; `id?`: `string`; `isDynamic?`: `boolean`; `offset?`: `number`; `once?`: `boolean`; `type?`: [`TimelineItemTypes`](reference/enumerations/TimelineItemTypes.md); } | `undefined`; }

###### timeline.position?

`number`

###### timeline.seekable?

{ `end?`: `number`; `start?`: `number`; }

###### timeline.seekable.end?

`number`

###### timeline.seekable.start?

`number`

###### timeline.stream0Time?

`number`

###### timeline.streamType?

[`StreamTypes`](reference/enumerations/StreamTypes.md)

###### timeline.timelineEnd?

`number`

###### timeline.timelineStart?

`number`

###### timeline.timelineStartOffset?

`number`

###### timeline.timeRepresentation?

[`TimeRepresentations`](reference/enumerations/TimeRepresentations.md)

###### tracks?

`object`[]

###### volume?

{ `muted?`: `boolean`; `volume?`: `number`; }

###### volume.muted?

`boolean`

###### volume.volume?

`number`

##### events

...`string`[]

#### Returns

`void`

#### Inherited from

`StateKeepingSession.commitChange`

***

### commitChangeWithoutNotification()

> `protected` **commitChangeWithoutNotification**(`change`, ...`events`): `void`

Note: Use commitChangeWithoutNotification() carefully. It should always be followed by at least one standard
commitChange() within the same update to ensure that no immediate StateChanges are delayed!

#### Parameters

##### change

###### absoluteDuration?

`number`

###### absoluteEpochTime?

`number`

###### absoluteSeekableRange?

{ `epochSeekable?`: { `initialSeekableStart?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; }; `liveDone?`: `boolean`; `movingWindow?`: `boolean`; `now?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; `stream0Time?`: `number`; }

###### absoluteSeekableRange.epochSeekable?

{ `initialSeekableStart?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; }

###### absoluteSeekableRange.epochSeekable.initialSeekableStart?

`number`

###### absoluteSeekableRange.epochSeekable.seekable?

{ `end?`: `number`; `start?`: `number`; }

###### absoluteSeekableRange.epochSeekable.seekable.end?

`number`

###### absoluteSeekableRange.epochSeekable.seekable.start?

`number`

###### absoluteSeekableRange.liveDone?

`boolean`

###### absoluteSeekableRange.movingWindow?

`boolean`

###### absoluteSeekableRange.now?

`number`

###### absoluteSeekableRange.seekable?

{ `end?`: `number`; `start?`: `number`; }

###### absoluteSeekableRange.seekable.end?

`number`

###### absoluteSeekableRange.seekable.start?

`number`

###### absoluteSeekableRange.stream0Time?

`number`

###### absoluteTime?

`number`

###### advertisement?

{ `active?`: { `advertisement?`: { `active?`: `boolean`; `auxiliaryData?`: {[`key`: `string`]: `any`; }; `clickThroughUrl?`: `string`; `completion?`: `number`; `duration?`: `number`; `id?`: `string`; `name?`: `string`; `position?`: `number`; `title?`: `string`; `watched?`: `boolean`; }; `advertisementBreak?`: { `active?`: `boolean`; `advertisementIds?`: `string`[]; `auxiliaryData?`: {[`key`: `string`]: `any`; }; `completion?`: `number`; `contentPosition?`: `number`; `duration?`: `number`; `embedded?`: `boolean`; `id?`: `string`; `name?`: `string`; `position?`: `number`; `resolved?`: `boolean`; `type?`: [`AdvertisementBreakTypes`](reference/enumerations/AdvertisementBreakTypes.md); `watched?`: `boolean`; } | { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `contentPosition?`: `number`; `duration?`: `number`; `embedded?`: `boolean`; `id?`: `string`; `position?`: `number`; `resolved?`: `boolean`; `type?`: [`AdvertisementBreakTypes`](../enumerations/AdvertisementBreakTypes.md); }; }; }

###### advertisement.active?

{ `advertisement?`: { `active?`: `boolean`; `auxiliaryData?`: {[`key`: `string`]: `any`; }; `clickThroughUrl?`: `string`; `completion?`: `number`; `duration?`: `number`; `id?`: `string`; `name?`: `string`; `position?`: `number`; `title?`: `string`; `watched?`: `boolean`; }; `advertisementBreak?`: { `active?`: `boolean`; `advertisementIds?`: `string`[]; `auxiliaryData?`: {[`key`: `string`]: `any`; }; `completion?`: `number`; `contentPosition?`: `number`; `duration?`: `number`; `embedded?`: `boolean`; `id?`: `string`; `name?`: `string`; `position?`: `number`; `resolved?`: `boolean`; `type?`: [`AdvertisementBreakTypes`](reference/enumerations/AdvertisementBreakTypes.md); `watched?`: `boolean`; } | { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `contentPosition?`: `number`; `duration?`: `number`; `embedded?`: `boolean`; `id?`: `string`; `position?`: `number`; `resolved?`: `boolean`; `type?`: [`AdvertisementBreakTypes`](../enumerations/AdvertisementBreakTypes.md); }; }

###### advertisement.active.advertisement?

{ `active?`: `boolean`; `auxiliaryData?`: {[`key`: `string`]: `any`; }; `clickThroughUrl?`: `string`; `completion?`: `number`; `duration?`: `number`; `id?`: `string`; `name?`: `string`; `position?`: `number`; `title?`: `string`; `watched?`: `boolean`; }

###### advertisement.active.advertisement.active?

`boolean`

###### advertisement.active.advertisement.auxiliaryData?

{[`key`: `string`]: `any`; }

###### advertisement.active.advertisement.clickThroughUrl?

`string`

###### advertisement.active.advertisement.completion?

`number`

###### advertisement.active.advertisement.duration?

`number`

###### advertisement.active.advertisement.id?

`string`

###### advertisement.active.advertisement.name?

`string`

###### advertisement.active.advertisement.position?

`number`

###### advertisement.active.advertisement.title?

`string`

###### advertisement.active.advertisement.watched?

`boolean`

###### advertisement.active.advertisementBreak?

{ `active?`: `boolean`; `advertisementIds?`: `string`[]; `auxiliaryData?`: {[`key`: `string`]: `any`; }; `completion?`: `number`; `contentPosition?`: `number`; `duration?`: `number`; `embedded?`: `boolean`; `id?`: `string`; `name?`: `string`; `position?`: `number`; `resolved?`: `boolean`; `type?`: [`AdvertisementBreakTypes`](reference/enumerations/AdvertisementBreakTypes.md); `watched?`: `boolean`; } | { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `contentPosition?`: `number`; `duration?`: `number`; `embedded?`: `boolean`; `id?`: `string`; `position?`: `number`; `resolved?`: `boolean`; `type?`: [`AdvertisementBreakTypes`](../enumerations/AdvertisementBreakTypes.md); }

###### autoplay?

`boolean`

###### content?

{ `auxiliaryData?`: {[`key`: `string`]: `any`; }; `id?`: `string`; `metadata?`: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `channel?`: { `logo?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `name?`: `string`; }; `description?`: `string`; `images?`: `object`[]; `poster?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `section?`: { `duration?`: `number`; `endTime?`: `number`; `startTime?`: `number`; }; `series?`: { `episode?`: `number`; `season?`: `number`; `title?`: `string`; }; `title?`: `string`; `type?`: [`MetadataTypes`](reference/enumerations/MetadataTypes.md); }; `nextContent?`: `boolean`; `type?`: `string`; }

###### content.auxiliaryData?

{[`key`: `string`]: `any`; }

###### content.id?

`string`

###### content.metadata?

{ `auxiliaryData?`: {[`key`: `string`]: `any`; }; `channel?`: { `logo?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `name?`: `string`; }; `description?`: `string`; `images?`: `object`[]; `poster?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `section?`: { `duration?`: `number`; `endTime?`: `number`; `startTime?`: `number`; }; `series?`: { `episode?`: `number`; `season?`: `number`; `title?`: `string`; }; `title?`: `string`; `type?`: [`MetadataTypes`](reference/enumerations/MetadataTypes.md); }

###### content.metadata.auxiliaryData?

{[`key`: `string`]: `any`; }

###### content.metadata.channel?

{ `logo?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `name?`: `string`; }

###### content.metadata.channel.logo?

{ `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }

###### content.metadata.channel.logo.height?

`number`

###### content.metadata.channel.logo.type?

`string`

###### content.metadata.channel.logo.url?

`string`

###### content.metadata.channel.logo.width?

`number`

###### content.metadata.channel.name?

`string`

###### content.metadata.description?

`string`

###### content.metadata.images?

`object`[]

###### content.metadata.poster?

{ `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }

###### content.metadata.poster.height?

`number`

###### content.metadata.poster.type?

`string`

###### content.metadata.poster.url?

`string`

###### content.metadata.poster.width?

`number`

###### content.metadata.section?

{ `duration?`: `number`; `endTime?`: `number`; `startTime?`: `number`; }

###### content.metadata.section.duration?

`number`

###### content.metadata.section.endTime?

`number`

###### content.metadata.section.startTime?

`number`

###### content.metadata.series?

{ `episode?`: `number`; `season?`: `number`; `title?`: `string`; }

###### content.metadata.series.episode?

`number`

###### content.metadata.series.season?

`number`

###### content.metadata.series.title?

`string`

###### content.metadata.title?

`string`

###### content.metadata.type?

[`MetadataTypes`](reference/enumerations/MetadataTypes.md)

###### content.nextContent?

`boolean`

###### content.type?

`string`

###### contentDuration?

`number`

###### contentEpochTime?

`number`

###### contentSeekableRange?

{ `epochSeekable?`: { `initialSeekableStart?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; }; `liveDone?`: `boolean`; `movingWindow?`: `boolean`; `now?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; `stream0Time?`: `number`; }

###### contentSeekableRange.epochSeekable?

{ `initialSeekableStart?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; }

###### contentSeekableRange.epochSeekable.initialSeekableStart?

`number`

###### contentSeekableRange.epochSeekable.seekable?

{ `end?`: `number`; `start?`: `number`; }

###### contentSeekableRange.epochSeekable.seekable.end?

`number`

###### contentSeekableRange.epochSeekable.seekable.start?

`number`

###### contentSeekableRange.liveDone?

`boolean`

###### contentSeekableRange.movingWindow?

`boolean`

###### contentSeekableRange.now?

`number`

###### contentSeekableRange.seekable?

{ `end?`: `number`; `start?`: `number`; }

###### contentSeekableRange.seekable.end?

`number`

###### contentSeekableRange.seekable.start?

`number`

###### contentSeekableRange.stream0Time?

`number`

###### contentTime?

`number`

###### currentTime?

`number`

**Deprecated**

- but kept for backwards compatibility

###### duration?

`number`

**Deprecated**

- but kept for backwards compatibility

###### epochTime?

`number`

**Deprecated**

- but kept for backwards compatibility

###### error?

{ `category?`: `string`; `code?`: { `name?`: `string`; `value?`: `number`; }; `details?`: {[`key`: `string`]: `any`; }; `displayMessage?`: `string`; `label?`: `string`; `message?`: `string`; `name?`: `string`; `origin?`: `string`; `originalError?`: {[`key`: `string`]: `any`; } | { category?: string | undefined; code?: { name?: string | undefined; value?: number | undefined; } | undefined; details?: { [x: string]: any; } | undefined; displayMessage?: string | undefined; ... 9 more ...; type?: ErrorTypes | undefined; } | { `cause?`: { }; `message?`: `string`; `name?`: `string`; `stack?`: `string`; }; `severity?`: [`ErrorSeverities`](reference/enumerations/ErrorSeverities.md); `source?`: `string`; `stack?`: `string`; `stackedErrors?`: { category?: string | undefined; code?: { name?: string | undefined; value?: number | undefined; } | undefined; details?: { [x: string]: any; } | undefined; displayMessage?: string | undefined; ... 9 more ...; type?: ErrorTypes | undefined; }[]; `type?`: [`ErrorTypes`](../enumerations/ErrorTypes.md); }

###### error.category?

`string`

###### error.code?

{ `name?`: `string`; `value?`: `number`; }

###### error.code.name?

`string`

###### error.code.value?

`number`

###### error.details?

{[`key`: `string`]: `any`; }

###### error.displayMessage?

`string`

###### error.label?

`string`

###### error.message?

`string`

###### error.name?

`string`

###### error.origin?

`string`

###### error.originalError?

{[`key`: `string`]: `any`; } | { category?: string | undefined; code?: { name?: string | undefined; value?: number | undefined; } | undefined; details?: { [x: string]: any; } | undefined; displayMessage?: string | undefined; ... 9 more ...; type?: ErrorTypes | undefined; } | { `cause?`: { }; `message?`: `string`; `name?`: `string`; `stack?`: `string`; }

###### error.severity?

[`ErrorSeverities`](reference/enumerations/ErrorSeverities.md)

###### error.source?

`string`

###### error.stack?

`string`

###### error.stackedErrors?

{ category?: string | undefined; code?: { name?: string | undefined; value?: number | undefined; } | undefined; details?: { [x: string]: any; } | undefined; displayMessage?: string | undefined; ... 9 more ...; type?: ErrorTypes | undefined; }[]

###### error.type?

[`ErrorTypes`](reference/enumerations/ErrorTypes.md)

###### id?

`string`

###### nextContent?

{ `auxiliaryData?`: {[`key`: `string`]: `any`; }; `id?`: `string`; `metadata?`: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `channel?`: { `logo?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `name?`: `string`; }; `description?`: `string`; `images?`: `object`[]; `poster?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `section?`: { `duration?`: `number`; `endTime?`: `number`; `startTime?`: `number`; }; `series?`: { `episode?`: `number`; `season?`: `number`; `title?`: `string`; }; `title?`: `string`; `type?`: [`MetadataTypes`](reference/enumerations/MetadataTypes.md); }; `nextContent?`: `boolean`; `type?`: `string`; }

###### nextContent.auxiliaryData?

{[`key`: `string`]: `any`; }

###### nextContent.id?

`string`

###### nextContent.metadata?

{ `auxiliaryData?`: {[`key`: `string`]: `any`; }; `channel?`: { `logo?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `name?`: `string`; }; `description?`: `string`; `images?`: `object`[]; `poster?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `section?`: { `duration?`: `number`; `endTime?`: `number`; `startTime?`: `number`; }; `series?`: { `episode?`: `number`; `season?`: `number`; `title?`: `string`; }; `title?`: `string`; `type?`: [`MetadataTypes`](reference/enumerations/MetadataTypes.md); }

###### nextContent.metadata.auxiliaryData?

{[`key`: `string`]: `any`; }

###### nextContent.metadata.channel?

{ `logo?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `name?`: `string`; }

###### nextContent.metadata.channel.logo?

{ `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }

###### nextContent.metadata.channel.logo.height?

`number`

###### nextContent.metadata.channel.logo.type?

`string`

###### nextContent.metadata.channel.logo.url?

`string`

###### nextContent.metadata.channel.logo.width?

`number`

###### nextContent.metadata.channel.name?

`string`

###### nextContent.metadata.description?

`string`

###### nextContent.metadata.images?

`object`[]

###### nextContent.metadata.poster?

{ `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }

###### nextContent.metadata.poster.height?

`number`

###### nextContent.metadata.poster.type?

`string`

###### nextContent.metadata.poster.url?

`string`

###### nextContent.metadata.poster.width?

`number`

###### nextContent.metadata.section?

{ `duration?`: `number`; `endTime?`: `number`; `startTime?`: `number`; }

###### nextContent.metadata.section.duration?

`number`

###### nextContent.metadata.section.endTime?

`number`

###### nextContent.metadata.section.startTime?

`number`

###### nextContent.metadata.series?

{ `episode?`: `number`; `season?`: `number`; `title?`: `string`; }

###### nextContent.metadata.series.episode?

`number`

###### nextContent.metadata.series.season?

`number`

###### nextContent.metadata.series.title?

`string`

###### nextContent.metadata.title?

`string`

###### nextContent.metadata.type?

[`MetadataTypes`](reference/enumerations/MetadataTypes.md)

###### nextContent.nextContent?

`boolean`

###### nextContent.type?

`string`

###### playbackState?

[`PlaybackStates`](reference/enumerations/PlaybackStates.md)

###### seekableRange?

{ `epochSeekable?`: { `initialSeekableStart?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; }; `liveDone?`: `boolean`; `movingWindow?`: `boolean`; `now?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; `stream0Time?`: `number`; }

**Deprecated**

- but kept for backwards compatibility

###### seekableRange.epochSeekable?

{ `initialSeekableStart?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; }

###### seekableRange.epochSeekable.initialSeekableStart?

`number`

###### seekableRange.epochSeekable.seekable?

{ `end?`: `number`; `start?`: `number`; }

###### seekableRange.epochSeekable.seekable.end?

`number`

###### seekableRange.epochSeekable.seekable.start?

`number`

###### seekableRange.liveDone?

`boolean`

###### seekableRange.movingWindow?

`boolean`

###### seekableRange.now?

`number`

###### seekableRange.seekable?

{ `end?`: `number`; `start?`: `number`; }

###### seekableRange.seekable.end?

`number`

###### seekableRange.seekable.start?

`number`

###### seekableRange.stream0Time?

`number`

###### stillWatching?

{ `interactionTimeout?`: `number`; `remaining?`: `number`; }

###### stillWatching.interactionTimeout?

`number`

###### stillWatching.remaining?

`number`

###### stream?

{ `advertisement?`: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `type?`: `string`; `url?`: `string`; }; `auxiliaryData?`: {[`key`: `string`]: `any`; }; `configuration?`: {[`key`: `string`]: `any`; `playbackConfigurationProfiles?`: `string`[]; `playbackEngine?`: {[`key`: `string`]: `any`; `preferred?`: `string`; `restricted?`: `string`[]; `selected?`: `string`; }; }; `containerType?`: [`StreamContainerTypes`](reference/enumerations/StreamContainerTypes.md); `contentType?`: [`StreamContentTypes`](../enumerations/StreamContentTypes.md); `encryption?`: { `cipher?`: [`Aes128`](../enumerations/CipherTypes.md#aes128); `cipherMode?`: [`CipherModeTypes`](../enumerations/CipherModeTypes.md); `initializationVector?`: `number`[]; `key?`: `number`[]; `keyId?`: `number`[]; `padding?`: [`PaddingTypes`](../enumerations/PaddingTypes.md); }; `id?`: `string`; `playbackSessionUrl?`: `string`; `streamRestrictions?`: { `pause?`: `boolean`; `seek?`: `boolean`; }; `streamType?`: [`StreamTypes`](../enumerations/StreamTypes.md); `url?`: `string`; }

###### stream.advertisement?

{ `auxiliaryData?`: {[`key`: `string`]: `any`; }; `type?`: `string`; `url?`: `string`; }

###### stream.advertisement.auxiliaryData?

{[`key`: `string`]: `any`; }

###### stream.advertisement.type?

`string`

###### stream.advertisement.url?

`string`

###### stream.auxiliaryData?

{[`key`: `string`]: `any`; }

###### stream.configuration?

{[`key`: `string`]: `any`; `playbackConfigurationProfiles?`: `string`[]; `playbackEngine?`: {[`key`: `string`]: `any`; `preferred?`: `string`; `restricted?`: `string`[]; `selected?`: `string`; }; }

###### stream.configuration.playbackConfigurationProfiles?

`string`[]

###### stream.configuration.playbackEngine?

{[`key`: `string`]: `any`; `preferred?`: `string`; `restricted?`: `string`[]; `selected?`: `string`; }

###### stream.configuration.playbackEngine.preferred?

`string`

###### stream.configuration.playbackEngine.restricted?

`string`[]

###### stream.configuration.playbackEngine.selected?

`string`

###### stream.containerType?

[`StreamContainerTypes`](reference/enumerations/StreamContainerTypes.md)

###### stream.contentType?

[`StreamContentTypes`](reference/enumerations/StreamContentTypes.md)

###### stream.encryption?

{ `cipher?`: [`Aes128`](reference/enumerations/CipherTypes.md#aes128); `cipherMode?`: [`CipherModeTypes`](../enumerations/CipherModeTypes.md); `initializationVector?`: `number`[]; `key?`: `number`[]; `keyId?`: `number`[]; `padding?`: [`PaddingTypes`](../enumerations/PaddingTypes.md); }

###### stream.encryption.cipher?

[`Aes128`](reference/enumerations/CipherTypes.md#aes128)

###### stream.encryption.cipherMode?

[`CipherModeTypes`](reference/enumerations/CipherModeTypes.md)

###### stream.encryption.initializationVector?

`number`[]

###### stream.encryption.key?

`number`[]

###### stream.encryption.keyId?

`number`[]

###### stream.encryption.padding?

[`PaddingTypes`](reference/enumerations/PaddingTypes.md)

###### stream.id?

`string`

###### stream.playbackSessionUrl?

`string`

###### stream.streamRestrictions?

{ `pause?`: `boolean`; `seek?`: `boolean`; }

###### stream.streamRestrictions.pause?

`boolean`

###### stream.streamRestrictions.seek?

`boolean`

###### stream.streamType?

[`StreamTypes`](reference/enumerations/StreamTypes.md)

###### stream.url?

`string`

###### streamRestrictions?

{ `pause?`: `boolean`; `seek?`: `boolean`; }

###### streamRestrictions.pause?

`boolean`

###### streamRestrictions.seek?

`boolean`

###### timeline?

{ `activeMetadata?`: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `duration?`: `number`; `enabled?`: `boolean`; `id?`: `string`; `isDynamic?`: `boolean`; `metadata?`: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `channel?`: { `logo?`: { `height?`: ...; `type?`: ...; `url?`: ...; `width?`: ...; }; `name?`: `string`; }; `description?`: `string`; `images?`: `object`[]; `poster?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `series?`: { `episode?`: `number`; `season?`: `number`; `title?`: `string`; }; `title?`: `string`; `type?`: [`MetadataTypes`](reference/enumerations/MetadataTypes.md); }; `offset?`: `number`; `once?`: `boolean`; `type?`: [`TimelineItemTypes`](../enumerations/TimelineItemTypes.md); }; `activeSection?`: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `duration?`: `number`; `enabled?`: `boolean`; `id?`: `string`; `isDynamic?`: `boolean`; `offset?`: `number`; `once?`: `boolean`; `sectionType?`: [`TimelineSectionTypes`](../enumerations/TimelineSectionTypes.md); `skippable?`: `boolean`; `type?`: [`TimelineItemTypes`](../enumerations/TimelineItemTypes.md); }; `behavior?`: { `position?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); `seekableEnd?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); `seekableStart?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); `timelineEnd?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); `timelineStart?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); }; `items?`: {[`key`: `string`]: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `duration?`: `number`; `enabled?`: `boolean`; `id?`: `string`; `isDynamic?`: `boolean`; `offset?`: `number`; `once?`: `boolean`; `type?`: [`TimelineItemTypes`](../enumerations/TimelineItemTypes.md); } | `undefined`;
  [`key`: `number`]: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `duration?`: `number`; `enabled?`: `boolean`; `id?`: `string`; `isDynamic?`: `boolean`; `offset?`: `number`; `once?`: `boolean`; `type?`: [`TimelineItemTypes`](reference/enumerations/TimelineItemTypes.md); } | `undefined`; }; `position?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; `stream0Time?`: `number`; `streamType?`: [`StreamTypes`](../enumerations/StreamTypes.md); `timelineEnd?`: `number`; `timelineStart?`: `number`; `timelineStartOffset?`: `number`; `timeRepresentation?`: [`TimeRepresentations`](../enumerations/TimeRepresentations.md); }

###### timeline.activeMetadata?

{ `auxiliaryData?`: {[`key`: `string`]: `any`; }; `duration?`: `number`; `enabled?`: `boolean`; `id?`: `string`; `isDynamic?`: `boolean`; `metadata?`: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `channel?`: { `logo?`: { `height?`: ...; `type?`: ...; `url?`: ...; `width?`: ...; }; `name?`: `string`; }; `description?`: `string`; `images?`: `object`[]; `poster?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `series?`: { `episode?`: `number`; `season?`: `number`; `title?`: `string`; }; `title?`: `string`; `type?`: [`MetadataTypes`](reference/enumerations/MetadataTypes.md); }; `offset?`: `number`; `once?`: `boolean`; `type?`: [`TimelineItemTypes`](../enumerations/TimelineItemTypes.md); }

###### timeline.activeMetadata.auxiliaryData?

{[`key`: `string`]: `any`; }

###### timeline.activeMetadata.duration?

`number`

###### timeline.activeMetadata.enabled?

`boolean`

###### timeline.activeMetadata.id?

`string`

###### timeline.activeMetadata.isDynamic?

`boolean`

###### timeline.activeMetadata.metadata?

{ `auxiliaryData?`: {[`key`: `string`]: `any`; }; `channel?`: { `logo?`: { `height?`: ...; `type?`: ...; `url?`: ...; `width?`: ...; }; `name?`: `string`; }; `description?`: `string`; `images?`: `object`[]; `poster?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `series?`: { `episode?`: `number`; `season?`: `number`; `title?`: `string`; }; `title?`: `string`; `type?`: [`MetadataTypes`](reference/enumerations/MetadataTypes.md); }

###### timeline.activeMetadata.metadata.auxiliaryData?

{[`key`: `string`]: `any`; }

###### timeline.activeMetadata.metadata.channel?

{ `logo?`: { `height?`: ...; `type?`: ...; `url?`: ...; `width?`: ...; }; `name?`: `string`; }

###### timeline.activeMetadata.metadata.channel.logo?

{ `height?`: ...; `type?`: ...; `url?`: ...; `width?`: ...; }

###### timeline.activeMetadata.metadata.channel.logo.height?

...

###### timeline.activeMetadata.metadata.channel.logo.type?

...

###### timeline.activeMetadata.metadata.channel.logo.url?

...

###### timeline.activeMetadata.metadata.channel.logo.width?

...

###### timeline.activeMetadata.metadata.channel.name?

`string`

###### timeline.activeMetadata.metadata.description?

`string`

###### timeline.activeMetadata.metadata.images?

`object`[]

###### timeline.activeMetadata.metadata.poster?

{ `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }

###### timeline.activeMetadata.metadata.poster.height?

`number`

###### timeline.activeMetadata.metadata.poster.type?

`string`

###### timeline.activeMetadata.metadata.poster.url?

`string`

###### timeline.activeMetadata.metadata.poster.width?

`number`

###### timeline.activeMetadata.metadata.series?

{ `episode?`: `number`; `season?`: `number`; `title?`: `string`; }

###### timeline.activeMetadata.metadata.series.episode?

`number`

###### timeline.activeMetadata.metadata.series.season?

`number`

###### timeline.activeMetadata.metadata.series.title?

`string`

###### timeline.activeMetadata.metadata.title?

`string`

###### timeline.activeMetadata.metadata.type?

[`MetadataTypes`](reference/enumerations/MetadataTypes.md)

###### timeline.activeMetadata.offset?

`number`

###### timeline.activeMetadata.once?

`boolean`

###### timeline.activeMetadata.type?

[`TimelineItemTypes`](reference/enumerations/TimelineItemTypes.md)

###### timeline.activeSection?

{ `auxiliaryData?`: {[`key`: `string`]: `any`; }; `duration?`: `number`; `enabled?`: `boolean`; `id?`: `string`; `isDynamic?`: `boolean`; `offset?`: `number`; `once?`: `boolean`; `sectionType?`: [`TimelineSectionTypes`](reference/enumerations/TimelineSectionTypes.md); `skippable?`: `boolean`; `type?`: [`TimelineItemTypes`](../enumerations/TimelineItemTypes.md); }

###### timeline.activeSection.auxiliaryData?

{[`key`: `string`]: `any`; }

###### timeline.activeSection.duration?

`number`

###### timeline.activeSection.enabled?

`boolean`

###### timeline.activeSection.id?

`string`

###### timeline.activeSection.isDynamic?

`boolean`

###### timeline.activeSection.offset?

`number`

###### timeline.activeSection.once?

`boolean`

###### timeline.activeSection.sectionType?

[`TimelineSectionTypes`](reference/enumerations/TimelineSectionTypes.md)

###### timeline.activeSection.skippable?

`boolean`

###### timeline.activeSection.type?

[`TimelineItemTypes`](reference/enumerations/TimelineItemTypes.md)

###### timeline.behavior?

{ `position?`: [`TimelineBehaviors`](reference/enumerations/TimelineBehaviors.md); `seekableEnd?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); `seekableStart?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); `timelineEnd?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); `timelineStart?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); }

###### timeline.behavior.position?

[`TimelineBehaviors`](reference/enumerations/TimelineBehaviors.md)

###### timeline.behavior.seekableEnd?

[`TimelineBehaviors`](reference/enumerations/TimelineBehaviors.md)

###### timeline.behavior.seekableStart?

[`TimelineBehaviors`](reference/enumerations/TimelineBehaviors.md)

###### timeline.behavior.timelineEnd?

[`TimelineBehaviors`](reference/enumerations/TimelineBehaviors.md)

###### timeline.behavior.timelineStart?

[`TimelineBehaviors`](reference/enumerations/TimelineBehaviors.md)

###### timeline.items?

{[`key`: `string`]: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `duration?`: `number`; `enabled?`: `boolean`; `id?`: `string`; `isDynamic?`: `boolean`; `offset?`: `number`; `once?`: `boolean`; `type?`: [`TimelineItemTypes`](reference/enumerations/TimelineItemTypes.md); } | `undefined`;
[`key`: `number`]: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `duration?`: `number`; `enabled?`: `boolean`; `id?`: `string`; `isDynamic?`: `boolean`; `offset?`: `number`; `once?`: `boolean`; `type?`: [`TimelineItemTypes`](reference/enumerations/TimelineItemTypes.md); } | `undefined`; }

###### timeline.position?

`number`

###### timeline.seekable?

{ `end?`: `number`; `start?`: `number`; }

###### timeline.seekable.end?

`number`

###### timeline.seekable.start?

`number`

###### timeline.stream0Time?

`number`

###### timeline.streamType?

[`StreamTypes`](reference/enumerations/StreamTypes.md)

###### timeline.timelineEnd?

`number`

###### timeline.timelineStart?

`number`

###### timeline.timelineStartOffset?

`number`

###### timeline.timeRepresentation?

[`TimeRepresentations`](reference/enumerations/TimeRepresentations.md)

###### tracks?

`object`[]

###### volume?

{ `muted?`: `boolean`; `volume?`: `number`; }

###### volume.muted?

`boolean`

###### volume.volume?

`number`

##### events

...`string`[]

#### Returns

`void`

#### Inherited from

`StateKeepingSession.commitChangeWithoutNotification`

***

### commitDeleteAndChange()

> `protected` **commitDeleteAndChange**(`change`, `pathsToDelete`, ...`events`): `string`[]

#### Parameters

##### change

###### absoluteDuration?

`number`

###### absoluteEpochTime?

`number`

###### absoluteSeekableRange?

{ `epochSeekable?`: { `initialSeekableStart?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; }; `liveDone?`: `boolean`; `movingWindow?`: `boolean`; `now?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; `stream0Time?`: `number`; }

###### absoluteSeekableRange.epochSeekable?

{ `initialSeekableStart?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; }

###### absoluteSeekableRange.epochSeekable.initialSeekableStart?

`number`

###### absoluteSeekableRange.epochSeekable.seekable?

{ `end?`: `number`; `start?`: `number`; }

###### absoluteSeekableRange.epochSeekable.seekable.end?

`number`

###### absoluteSeekableRange.epochSeekable.seekable.start?

`number`

###### absoluteSeekableRange.liveDone?

`boolean`

###### absoluteSeekableRange.movingWindow?

`boolean`

###### absoluteSeekableRange.now?

`number`

###### absoluteSeekableRange.seekable?

{ `end?`: `number`; `start?`: `number`; }

###### absoluteSeekableRange.seekable.end?

`number`

###### absoluteSeekableRange.seekable.start?

`number`

###### absoluteSeekableRange.stream0Time?

`number`

###### absoluteTime?

`number`

###### advertisement?

{ `active?`: { `advertisement?`: { `active?`: `boolean`; `auxiliaryData?`: {[`key`: `string`]: `any`; }; `clickThroughUrl?`: `string`; `completion?`: `number`; `duration?`: `number`; `id?`: `string`; `name?`: `string`; `position?`: `number`; `title?`: `string`; `watched?`: `boolean`; }; `advertisementBreak?`: { `active?`: `boolean`; `advertisementIds?`: `string`[]; `auxiliaryData?`: {[`key`: `string`]: `any`; }; `completion?`: `number`; `contentPosition?`: `number`; `duration?`: `number`; `embedded?`: `boolean`; `id?`: `string`; `name?`: `string`; `position?`: `number`; `resolved?`: `boolean`; `type?`: [`AdvertisementBreakTypes`](reference/enumerations/AdvertisementBreakTypes.md); `watched?`: `boolean`; } | { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `contentPosition?`: `number`; `duration?`: `number`; `embedded?`: `boolean`; `id?`: `string`; `position?`: `number`; `resolved?`: `boolean`; `type?`: [`AdvertisementBreakTypes`](../enumerations/AdvertisementBreakTypes.md); }; }; }

###### advertisement.active?

{ `advertisement?`: { `active?`: `boolean`; `auxiliaryData?`: {[`key`: `string`]: `any`; }; `clickThroughUrl?`: `string`; `completion?`: `number`; `duration?`: `number`; `id?`: `string`; `name?`: `string`; `position?`: `number`; `title?`: `string`; `watched?`: `boolean`; }; `advertisementBreak?`: { `active?`: `boolean`; `advertisementIds?`: `string`[]; `auxiliaryData?`: {[`key`: `string`]: `any`; }; `completion?`: `number`; `contentPosition?`: `number`; `duration?`: `number`; `embedded?`: `boolean`; `id?`: `string`; `name?`: `string`; `position?`: `number`; `resolved?`: `boolean`; `type?`: [`AdvertisementBreakTypes`](reference/enumerations/AdvertisementBreakTypes.md); `watched?`: `boolean`; } | { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `contentPosition?`: `number`; `duration?`: `number`; `embedded?`: `boolean`; `id?`: `string`; `position?`: `number`; `resolved?`: `boolean`; `type?`: [`AdvertisementBreakTypes`](../enumerations/AdvertisementBreakTypes.md); }; }

###### advertisement.active.advertisement?

{ `active?`: `boolean`; `auxiliaryData?`: {[`key`: `string`]: `any`; }; `clickThroughUrl?`: `string`; `completion?`: `number`; `duration?`: `number`; `id?`: `string`; `name?`: `string`; `position?`: `number`; `title?`: `string`; `watched?`: `boolean`; }

###### advertisement.active.advertisement.active?

`boolean`

###### advertisement.active.advertisement.auxiliaryData?

{[`key`: `string`]: `any`; }

###### advertisement.active.advertisement.clickThroughUrl?

`string`

###### advertisement.active.advertisement.completion?

`number`

###### advertisement.active.advertisement.duration?

`number`

###### advertisement.active.advertisement.id?

`string`

###### advertisement.active.advertisement.name?

`string`

###### advertisement.active.advertisement.position?

`number`

###### advertisement.active.advertisement.title?

`string`

###### advertisement.active.advertisement.watched?

`boolean`

###### advertisement.active.advertisementBreak?

{ `active?`: `boolean`; `advertisementIds?`: `string`[]; `auxiliaryData?`: {[`key`: `string`]: `any`; }; `completion?`: `number`; `contentPosition?`: `number`; `duration?`: `number`; `embedded?`: `boolean`; `id?`: `string`; `name?`: `string`; `position?`: `number`; `resolved?`: `boolean`; `type?`: [`AdvertisementBreakTypes`](reference/enumerations/AdvertisementBreakTypes.md); `watched?`: `boolean`; } | { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `contentPosition?`: `number`; `duration?`: `number`; `embedded?`: `boolean`; `id?`: `string`; `position?`: `number`; `resolved?`: `boolean`; `type?`: [`AdvertisementBreakTypes`](../enumerations/AdvertisementBreakTypes.md); }

###### autoplay?

`boolean`

###### content?

{ `auxiliaryData?`: {[`key`: `string`]: `any`; }; `id?`: `string`; `metadata?`: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `channel?`: { `logo?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `name?`: `string`; }; `description?`: `string`; `images?`: `object`[]; `poster?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `section?`: { `duration?`: `number`; `endTime?`: `number`; `startTime?`: `number`; }; `series?`: { `episode?`: `number`; `season?`: `number`; `title?`: `string`; }; `title?`: `string`; `type?`: [`MetadataTypes`](reference/enumerations/MetadataTypes.md); }; `nextContent?`: `boolean`; `type?`: `string`; }

###### content.auxiliaryData?

{[`key`: `string`]: `any`; }

###### content.id?

`string`

###### content.metadata?

{ `auxiliaryData?`: {[`key`: `string`]: `any`; }; `channel?`: { `logo?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `name?`: `string`; }; `description?`: `string`; `images?`: `object`[]; `poster?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `section?`: { `duration?`: `number`; `endTime?`: `number`; `startTime?`: `number`; }; `series?`: { `episode?`: `number`; `season?`: `number`; `title?`: `string`; }; `title?`: `string`; `type?`: [`MetadataTypes`](reference/enumerations/MetadataTypes.md); }

###### content.metadata.auxiliaryData?

{[`key`: `string`]: `any`; }

###### content.metadata.channel?

{ `logo?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `name?`: `string`; }

###### content.metadata.channel.logo?

{ `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }

###### content.metadata.channel.logo.height?

`number`

###### content.metadata.channel.logo.type?

`string`

###### content.metadata.channel.logo.url?

`string`

###### content.metadata.channel.logo.width?

`number`

###### content.metadata.channel.name?

`string`

###### content.metadata.description?

`string`

###### content.metadata.images?

`object`[]

###### content.metadata.poster?

{ `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }

###### content.metadata.poster.height?

`number`

###### content.metadata.poster.type?

`string`

###### content.metadata.poster.url?

`string`

###### content.metadata.poster.width?

`number`

###### content.metadata.section?

{ `duration?`: `number`; `endTime?`: `number`; `startTime?`: `number`; }

###### content.metadata.section.duration?

`number`

###### content.metadata.section.endTime?

`number`

###### content.metadata.section.startTime?

`number`

###### content.metadata.series?

{ `episode?`: `number`; `season?`: `number`; `title?`: `string`; }

###### content.metadata.series.episode?

`number`

###### content.metadata.series.season?

`number`

###### content.metadata.series.title?

`string`

###### content.metadata.title?

`string`

###### content.metadata.type?

[`MetadataTypes`](reference/enumerations/MetadataTypes.md)

###### content.nextContent?

`boolean`

###### content.type?

`string`

###### contentDuration?

`number`

###### contentEpochTime?

`number`

###### contentSeekableRange?

{ `epochSeekable?`: { `initialSeekableStart?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; }; `liveDone?`: `boolean`; `movingWindow?`: `boolean`; `now?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; `stream0Time?`: `number`; }

###### contentSeekableRange.epochSeekable?

{ `initialSeekableStart?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; }

###### contentSeekableRange.epochSeekable.initialSeekableStart?

`number`

###### contentSeekableRange.epochSeekable.seekable?

{ `end?`: `number`; `start?`: `number`; }

###### contentSeekableRange.epochSeekable.seekable.end?

`number`

###### contentSeekableRange.epochSeekable.seekable.start?

`number`

###### contentSeekableRange.liveDone?

`boolean`

###### contentSeekableRange.movingWindow?

`boolean`

###### contentSeekableRange.now?

`number`

###### contentSeekableRange.seekable?

{ `end?`: `number`; `start?`: `number`; }

###### contentSeekableRange.seekable.end?

`number`

###### contentSeekableRange.seekable.start?

`number`

###### contentSeekableRange.stream0Time?

`number`

###### contentTime?

`number`

###### currentTime?

`number`

**Deprecated**

- but kept for backwards compatibility

###### duration?

`number`

**Deprecated**

- but kept for backwards compatibility

###### epochTime?

`number`

**Deprecated**

- but kept for backwards compatibility

###### error?

{ `category?`: `string`; `code?`: { `name?`: `string`; `value?`: `number`; }; `details?`: {[`key`: `string`]: `any`; }; `displayMessage?`: `string`; `label?`: `string`; `message?`: `string`; `name?`: `string`; `origin?`: `string`; `originalError?`: {[`key`: `string`]: `any`; } | { category?: string | undefined; code?: { name?: string | undefined; value?: number | undefined; } | undefined; details?: { [x: string]: any; } | undefined; displayMessage?: string | undefined; ... 9 more ...; type?: ErrorTypes | undefined; } | { `cause?`: { }; `message?`: `string`; `name?`: `string`; `stack?`: `string`; }; `severity?`: [`ErrorSeverities`](reference/enumerations/ErrorSeverities.md); `source?`: `string`; `stack?`: `string`; `stackedErrors?`: { category?: string | undefined; code?: { name?: string | undefined; value?: number | undefined; } | undefined; details?: { [x: string]: any; } | undefined; displayMessage?: string | undefined; ... 9 more ...; type?: ErrorTypes | undefined; }[]; `type?`: [`ErrorTypes`](../enumerations/ErrorTypes.md); }

###### error.category?

`string`

###### error.code?

{ `name?`: `string`; `value?`: `number`; }

###### error.code.name?

`string`

###### error.code.value?

`number`

###### error.details?

{[`key`: `string`]: `any`; }

###### error.displayMessage?

`string`

###### error.label?

`string`

###### error.message?

`string`

###### error.name?

`string`

###### error.origin?

`string`

###### error.originalError?

{[`key`: `string`]: `any`; } | { category?: string | undefined; code?: { name?: string | undefined; value?: number | undefined; } | undefined; details?: { [x: string]: any; } | undefined; displayMessage?: string | undefined; ... 9 more ...; type?: ErrorTypes | undefined; } | { `cause?`: { }; `message?`: `string`; `name?`: `string`; `stack?`: `string`; }

###### error.severity?

[`ErrorSeverities`](reference/enumerations/ErrorSeverities.md)

###### error.source?

`string`

###### error.stack?

`string`

###### error.stackedErrors?

{ category?: string | undefined; code?: { name?: string | undefined; value?: number | undefined; } | undefined; details?: { [x: string]: any; } | undefined; displayMessage?: string | undefined; ... 9 more ...; type?: ErrorTypes | undefined; }[]

###### error.type?

[`ErrorTypes`](reference/enumerations/ErrorTypes.md)

###### id?

`string`

###### nextContent?

{ `auxiliaryData?`: {[`key`: `string`]: `any`; }; `id?`: `string`; `metadata?`: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `channel?`: { `logo?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `name?`: `string`; }; `description?`: `string`; `images?`: `object`[]; `poster?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `section?`: { `duration?`: `number`; `endTime?`: `number`; `startTime?`: `number`; }; `series?`: { `episode?`: `number`; `season?`: `number`; `title?`: `string`; }; `title?`: `string`; `type?`: [`MetadataTypes`](reference/enumerations/MetadataTypes.md); }; `nextContent?`: `boolean`; `type?`: `string`; }

###### nextContent.auxiliaryData?

{[`key`: `string`]: `any`; }

###### nextContent.id?

`string`

###### nextContent.metadata?

{ `auxiliaryData?`: {[`key`: `string`]: `any`; }; `channel?`: { `logo?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `name?`: `string`; }; `description?`: `string`; `images?`: `object`[]; `poster?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `section?`: { `duration?`: `number`; `endTime?`: `number`; `startTime?`: `number`; }; `series?`: { `episode?`: `number`; `season?`: `number`; `title?`: `string`; }; `title?`: `string`; `type?`: [`MetadataTypes`](reference/enumerations/MetadataTypes.md); }

###### nextContent.metadata.auxiliaryData?

{[`key`: `string`]: `any`; }

###### nextContent.metadata.channel?

{ `logo?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `name?`: `string`; }

###### nextContent.metadata.channel.logo?

{ `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }

###### nextContent.metadata.channel.logo.height?

`number`

###### nextContent.metadata.channel.logo.type?

`string`

###### nextContent.metadata.channel.logo.url?

`string`

###### nextContent.metadata.channel.logo.width?

`number`

###### nextContent.metadata.channel.name?

`string`

###### nextContent.metadata.description?

`string`

###### nextContent.metadata.images?

`object`[]

###### nextContent.metadata.poster?

{ `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }

###### nextContent.metadata.poster.height?

`number`

###### nextContent.metadata.poster.type?

`string`

###### nextContent.metadata.poster.url?

`string`

###### nextContent.metadata.poster.width?

`number`

###### nextContent.metadata.section?

{ `duration?`: `number`; `endTime?`: `number`; `startTime?`: `number`; }

###### nextContent.metadata.section.duration?

`number`

###### nextContent.metadata.section.endTime?

`number`

###### nextContent.metadata.section.startTime?

`number`

###### nextContent.metadata.series?

{ `episode?`: `number`; `season?`: `number`; `title?`: `string`; }

###### nextContent.metadata.series.episode?

`number`

###### nextContent.metadata.series.season?

`number`

###### nextContent.metadata.series.title?

`string`

###### nextContent.metadata.title?

`string`

###### nextContent.metadata.type?

[`MetadataTypes`](reference/enumerations/MetadataTypes.md)

###### nextContent.nextContent?

`boolean`

###### nextContent.type?

`string`

###### playbackState?

[`PlaybackStates`](reference/enumerations/PlaybackStates.md)

###### seekableRange?

{ `epochSeekable?`: { `initialSeekableStart?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; }; `liveDone?`: `boolean`; `movingWindow?`: `boolean`; `now?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; `stream0Time?`: `number`; }

**Deprecated**

- but kept for backwards compatibility

###### seekableRange.epochSeekable?

{ `initialSeekableStart?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; }

###### seekableRange.epochSeekable.initialSeekableStart?

`number`

###### seekableRange.epochSeekable.seekable?

{ `end?`: `number`; `start?`: `number`; }

###### seekableRange.epochSeekable.seekable.end?

`number`

###### seekableRange.epochSeekable.seekable.start?

`number`

###### seekableRange.liveDone?

`boolean`

###### seekableRange.movingWindow?

`boolean`

###### seekableRange.now?

`number`

###### seekableRange.seekable?

{ `end?`: `number`; `start?`: `number`; }

###### seekableRange.seekable.end?

`number`

###### seekableRange.seekable.start?

`number`

###### seekableRange.stream0Time?

`number`

###### stillWatching?

{ `interactionTimeout?`: `number`; `remaining?`: `number`; }

###### stillWatching.interactionTimeout?

`number`

###### stillWatching.remaining?

`number`

###### stream?

{ `advertisement?`: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `type?`: `string`; `url?`: `string`; }; `auxiliaryData?`: {[`key`: `string`]: `any`; }; `configuration?`: {[`key`: `string`]: `any`; `playbackConfigurationProfiles?`: `string`[]; `playbackEngine?`: {[`key`: `string`]: `any`; `preferred?`: `string`; `restricted?`: `string`[]; `selected?`: `string`; }; }; `containerType?`: [`StreamContainerTypes`](reference/enumerations/StreamContainerTypes.md); `contentType?`: [`StreamContentTypes`](../enumerations/StreamContentTypes.md); `encryption?`: { `cipher?`: [`Aes128`](../enumerations/CipherTypes.md#aes128); `cipherMode?`: [`CipherModeTypes`](../enumerations/CipherModeTypes.md); `initializationVector?`: `number`[]; `key?`: `number`[]; `keyId?`: `number`[]; `padding?`: [`PaddingTypes`](../enumerations/PaddingTypes.md); }; `id?`: `string`; `playbackSessionUrl?`: `string`; `streamRestrictions?`: { `pause?`: `boolean`; `seek?`: `boolean`; }; `streamType?`: [`StreamTypes`](../enumerations/StreamTypes.md); `url?`: `string`; }

###### stream.advertisement?

{ `auxiliaryData?`: {[`key`: `string`]: `any`; }; `type?`: `string`; `url?`: `string`; }

###### stream.advertisement.auxiliaryData?

{[`key`: `string`]: `any`; }

###### stream.advertisement.type?

`string`

###### stream.advertisement.url?

`string`

###### stream.auxiliaryData?

{[`key`: `string`]: `any`; }

###### stream.configuration?

{[`key`: `string`]: `any`; `playbackConfigurationProfiles?`: `string`[]; `playbackEngine?`: {[`key`: `string`]: `any`; `preferred?`: `string`; `restricted?`: `string`[]; `selected?`: `string`; }; }

###### stream.configuration.playbackConfigurationProfiles?

`string`[]

###### stream.configuration.playbackEngine?

{[`key`: `string`]: `any`; `preferred?`: `string`; `restricted?`: `string`[]; `selected?`: `string`; }

###### stream.configuration.playbackEngine.preferred?

`string`

###### stream.configuration.playbackEngine.restricted?

`string`[]

###### stream.configuration.playbackEngine.selected?

`string`

###### stream.containerType?

[`StreamContainerTypes`](reference/enumerations/StreamContainerTypes.md)

###### stream.contentType?

[`StreamContentTypes`](reference/enumerations/StreamContentTypes.md)

###### stream.encryption?

{ `cipher?`: [`Aes128`](reference/enumerations/CipherTypes.md#aes128); `cipherMode?`: [`CipherModeTypes`](../enumerations/CipherModeTypes.md); `initializationVector?`: `number`[]; `key?`: `number`[]; `keyId?`: `number`[]; `padding?`: [`PaddingTypes`](../enumerations/PaddingTypes.md); }

###### stream.encryption.cipher?

[`Aes128`](reference/enumerations/CipherTypes.md#aes128)

###### stream.encryption.cipherMode?

[`CipherModeTypes`](reference/enumerations/CipherModeTypes.md)

###### stream.encryption.initializationVector?

`number`[]

###### stream.encryption.key?

`number`[]

###### stream.encryption.keyId?

`number`[]

###### stream.encryption.padding?

[`PaddingTypes`](reference/enumerations/PaddingTypes.md)

###### stream.id?

`string`

###### stream.playbackSessionUrl?

`string`

###### stream.streamRestrictions?

{ `pause?`: `boolean`; `seek?`: `boolean`; }

###### stream.streamRestrictions.pause?

`boolean`

###### stream.streamRestrictions.seek?

`boolean`

###### stream.streamType?

[`StreamTypes`](reference/enumerations/StreamTypes.md)

###### stream.url?

`string`

###### streamRestrictions?

{ `pause?`: `boolean`; `seek?`: `boolean`; }

###### streamRestrictions.pause?

`boolean`

###### streamRestrictions.seek?

`boolean`

###### timeline?

{ `activeMetadata?`: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `duration?`: `number`; `enabled?`: `boolean`; `id?`: `string`; `isDynamic?`: `boolean`; `metadata?`: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `channel?`: { `logo?`: { `height?`: ...; `type?`: ...; `url?`: ...; `width?`: ...; }; `name?`: `string`; }; `description?`: `string`; `images?`: `object`[]; `poster?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `series?`: { `episode?`: `number`; `season?`: `number`; `title?`: `string`; }; `title?`: `string`; `type?`: [`MetadataTypes`](reference/enumerations/MetadataTypes.md); }; `offset?`: `number`; `once?`: `boolean`; `type?`: [`TimelineItemTypes`](../enumerations/TimelineItemTypes.md); }; `activeSection?`: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `duration?`: `number`; `enabled?`: `boolean`; `id?`: `string`; `isDynamic?`: `boolean`; `offset?`: `number`; `once?`: `boolean`; `sectionType?`: [`TimelineSectionTypes`](../enumerations/TimelineSectionTypes.md); `skippable?`: `boolean`; `type?`: [`TimelineItemTypes`](../enumerations/TimelineItemTypes.md); }; `behavior?`: { `position?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); `seekableEnd?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); `seekableStart?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); `timelineEnd?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); `timelineStart?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); }; `items?`: {[`key`: `string`]: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `duration?`: `number`; `enabled?`: `boolean`; `id?`: `string`; `isDynamic?`: `boolean`; `offset?`: `number`; `once?`: `boolean`; `type?`: [`TimelineItemTypes`](../enumerations/TimelineItemTypes.md); } | `undefined`;
  [`key`: `number`]: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `duration?`: `number`; `enabled?`: `boolean`; `id?`: `string`; `isDynamic?`: `boolean`; `offset?`: `number`; `once?`: `boolean`; `type?`: [`TimelineItemTypes`](reference/enumerations/TimelineItemTypes.md); } | `undefined`; }; `position?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; `stream0Time?`: `number`; `streamType?`: [`StreamTypes`](../enumerations/StreamTypes.md); `timelineEnd?`: `number`; `timelineStart?`: `number`; `timelineStartOffset?`: `number`; `timeRepresentation?`: [`TimeRepresentations`](../enumerations/TimeRepresentations.md); }

###### timeline.activeMetadata?

{ `auxiliaryData?`: {[`key`: `string`]: `any`; }; `duration?`: `number`; `enabled?`: `boolean`; `id?`: `string`; `isDynamic?`: `boolean`; `metadata?`: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `channel?`: { `logo?`: { `height?`: ...; `type?`: ...; `url?`: ...; `width?`: ...; }; `name?`: `string`; }; `description?`: `string`; `images?`: `object`[]; `poster?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `series?`: { `episode?`: `number`; `season?`: `number`; `title?`: `string`; }; `title?`: `string`; `type?`: [`MetadataTypes`](reference/enumerations/MetadataTypes.md); }; `offset?`: `number`; `once?`: `boolean`; `type?`: [`TimelineItemTypes`](../enumerations/TimelineItemTypes.md); }

###### timeline.activeMetadata.auxiliaryData?

{[`key`: `string`]: `any`; }

###### timeline.activeMetadata.duration?

`number`

###### timeline.activeMetadata.enabled?

`boolean`

###### timeline.activeMetadata.id?

`string`

###### timeline.activeMetadata.isDynamic?

`boolean`

###### timeline.activeMetadata.metadata?

{ `auxiliaryData?`: {[`key`: `string`]: `any`; }; `channel?`: { `logo?`: { `height?`: ...; `type?`: ...; `url?`: ...; `width?`: ...; }; `name?`: `string`; }; `description?`: `string`; `images?`: `object`[]; `poster?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `series?`: { `episode?`: `number`; `season?`: `number`; `title?`: `string`; }; `title?`: `string`; `type?`: [`MetadataTypes`](reference/enumerations/MetadataTypes.md); }

###### timeline.activeMetadata.metadata.auxiliaryData?

{[`key`: `string`]: `any`; }

###### timeline.activeMetadata.metadata.channel?

{ `logo?`: { `height?`: ...; `type?`: ...; `url?`: ...; `width?`: ...; }; `name?`: `string`; }

###### timeline.activeMetadata.metadata.channel.logo?

{ `height?`: ...; `type?`: ...; `url?`: ...; `width?`: ...; }

###### timeline.activeMetadata.metadata.channel.logo.height?

...

###### timeline.activeMetadata.metadata.channel.logo.type?

...

###### timeline.activeMetadata.metadata.channel.logo.url?

...

###### timeline.activeMetadata.metadata.channel.logo.width?

...

###### timeline.activeMetadata.metadata.channel.name?

`string`

###### timeline.activeMetadata.metadata.description?

`string`

###### timeline.activeMetadata.metadata.images?

`object`[]

###### timeline.activeMetadata.metadata.poster?

{ `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }

###### timeline.activeMetadata.metadata.poster.height?

`number`

###### timeline.activeMetadata.metadata.poster.type?

`string`

###### timeline.activeMetadata.metadata.poster.url?

`string`

###### timeline.activeMetadata.metadata.poster.width?

`number`

###### timeline.activeMetadata.metadata.series?

{ `episode?`: `number`; `season?`: `number`; `title?`: `string`; }

###### timeline.activeMetadata.metadata.series.episode?

`number`

###### timeline.activeMetadata.metadata.series.season?

`number`

###### timeline.activeMetadata.metadata.series.title?

`string`

###### timeline.activeMetadata.metadata.title?

`string`

###### timeline.activeMetadata.metadata.type?

[`MetadataTypes`](reference/enumerations/MetadataTypes.md)

###### timeline.activeMetadata.offset?

`number`

###### timeline.activeMetadata.once?

`boolean`

###### timeline.activeMetadata.type?

[`TimelineItemTypes`](reference/enumerations/TimelineItemTypes.md)

###### timeline.activeSection?

{ `auxiliaryData?`: {[`key`: `string`]: `any`; }; `duration?`: `number`; `enabled?`: `boolean`; `id?`: `string`; `isDynamic?`: `boolean`; `offset?`: `number`; `once?`: `boolean`; `sectionType?`: [`TimelineSectionTypes`](reference/enumerations/TimelineSectionTypes.md); `skippable?`: `boolean`; `type?`: [`TimelineItemTypes`](../enumerations/TimelineItemTypes.md); }

###### timeline.activeSection.auxiliaryData?

{[`key`: `string`]: `any`; }

###### timeline.activeSection.duration?

`number`

###### timeline.activeSection.enabled?

`boolean`

###### timeline.activeSection.id?

`string`

###### timeline.activeSection.isDynamic?

`boolean`

###### timeline.activeSection.offset?

`number`

###### timeline.activeSection.once?

`boolean`

###### timeline.activeSection.sectionType?

[`TimelineSectionTypes`](reference/enumerations/TimelineSectionTypes.md)

###### timeline.activeSection.skippable?

`boolean`

###### timeline.activeSection.type?

[`TimelineItemTypes`](reference/enumerations/TimelineItemTypes.md)

###### timeline.behavior?

{ `position?`: [`TimelineBehaviors`](reference/enumerations/TimelineBehaviors.md); `seekableEnd?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); `seekableStart?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); `timelineEnd?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); `timelineStart?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); }

###### timeline.behavior.position?

[`TimelineBehaviors`](reference/enumerations/TimelineBehaviors.md)

###### timeline.behavior.seekableEnd?

[`TimelineBehaviors`](reference/enumerations/TimelineBehaviors.md)

###### timeline.behavior.seekableStart?

[`TimelineBehaviors`](reference/enumerations/TimelineBehaviors.md)

###### timeline.behavior.timelineEnd?

[`TimelineBehaviors`](reference/enumerations/TimelineBehaviors.md)

###### timeline.behavior.timelineStart?

[`TimelineBehaviors`](reference/enumerations/TimelineBehaviors.md)

###### timeline.items?

{[`key`: `string`]: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `duration?`: `number`; `enabled?`: `boolean`; `id?`: `string`; `isDynamic?`: `boolean`; `offset?`: `number`; `once?`: `boolean`; `type?`: [`TimelineItemTypes`](reference/enumerations/TimelineItemTypes.md); } | `undefined`;
[`key`: `number`]: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `duration?`: `number`; `enabled?`: `boolean`; `id?`: `string`; `isDynamic?`: `boolean`; `offset?`: `number`; `once?`: `boolean`; `type?`: [`TimelineItemTypes`](reference/enumerations/TimelineItemTypes.md); } | `undefined`; }

###### timeline.position?

`number`

###### timeline.seekable?

{ `end?`: `number`; `start?`: `number`; }

###### timeline.seekable.end?

`number`

###### timeline.seekable.start?

`number`

###### timeline.stream0Time?

`number`

###### timeline.streamType?

[`StreamTypes`](reference/enumerations/StreamTypes.md)

###### timeline.timelineEnd?

`number`

###### timeline.timelineStart?

`number`

###### timeline.timelineStartOffset?

`number`

###### timeline.timeRepresentation?

[`TimeRepresentations`](reference/enumerations/TimeRepresentations.md)

###### tracks?

`object`[]

###### volume?

{ `muted?`: `boolean`; `volume?`: `number`; }

###### volume.muted?

`boolean`

###### volume.volume?

`number`

##### pathsToDelete

`string`[]

##### events

...`string`[]

#### Returns

`string`[]

#### Inherited from

`StateKeepingSession.commitDeleteAndChange`

***

### commitDeleteAndChangeWithoutNotification()

> `protected` **commitDeleteAndChangeWithoutNotification**(`change`, `pathsToDelete`, ...`events`): `string`[]

#### Parameters

##### change

###### absoluteDuration?

`number`

###### absoluteEpochTime?

`number`

###### absoluteSeekableRange?

{ `epochSeekable?`: { `initialSeekableStart?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; }; `liveDone?`: `boolean`; `movingWindow?`: `boolean`; `now?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; `stream0Time?`: `number`; }

###### absoluteSeekableRange.epochSeekable?

{ `initialSeekableStart?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; }

###### absoluteSeekableRange.epochSeekable.initialSeekableStart?

`number`

###### absoluteSeekableRange.epochSeekable.seekable?

{ `end?`: `number`; `start?`: `number`; }

###### absoluteSeekableRange.epochSeekable.seekable.end?

`number`

###### absoluteSeekableRange.epochSeekable.seekable.start?

`number`

###### absoluteSeekableRange.liveDone?

`boolean`

###### absoluteSeekableRange.movingWindow?

`boolean`

###### absoluteSeekableRange.now?

`number`

###### absoluteSeekableRange.seekable?

{ `end?`: `number`; `start?`: `number`; }

###### absoluteSeekableRange.seekable.end?

`number`

###### absoluteSeekableRange.seekable.start?

`number`

###### absoluteSeekableRange.stream0Time?

`number`

###### absoluteTime?

`number`

###### advertisement?

{ `active?`: { `advertisement?`: { `active?`: `boolean`; `auxiliaryData?`: {[`key`: `string`]: `any`; }; `clickThroughUrl?`: `string`; `completion?`: `number`; `duration?`: `number`; `id?`: `string`; `name?`: `string`; `position?`: `number`; `title?`: `string`; `watched?`: `boolean`; }; `advertisementBreak?`: { `active?`: `boolean`; `advertisementIds?`: `string`[]; `auxiliaryData?`: {[`key`: `string`]: `any`; }; `completion?`: `number`; `contentPosition?`: `number`; `duration?`: `number`; `embedded?`: `boolean`; `id?`: `string`; `name?`: `string`; `position?`: `number`; `resolved?`: `boolean`; `type?`: [`AdvertisementBreakTypes`](reference/enumerations/AdvertisementBreakTypes.md); `watched?`: `boolean`; } | { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `contentPosition?`: `number`; `duration?`: `number`; `embedded?`: `boolean`; `id?`: `string`; `position?`: `number`; `resolved?`: `boolean`; `type?`: [`AdvertisementBreakTypes`](../enumerations/AdvertisementBreakTypes.md); }; }; }

###### advertisement.active?

{ `advertisement?`: { `active?`: `boolean`; `auxiliaryData?`: {[`key`: `string`]: `any`; }; `clickThroughUrl?`: `string`; `completion?`: `number`; `duration?`: `number`; `id?`: `string`; `name?`: `string`; `position?`: `number`; `title?`: `string`; `watched?`: `boolean`; }; `advertisementBreak?`: { `active?`: `boolean`; `advertisementIds?`: `string`[]; `auxiliaryData?`: {[`key`: `string`]: `any`; }; `completion?`: `number`; `contentPosition?`: `number`; `duration?`: `number`; `embedded?`: `boolean`; `id?`: `string`; `name?`: `string`; `position?`: `number`; `resolved?`: `boolean`; `type?`: [`AdvertisementBreakTypes`](reference/enumerations/AdvertisementBreakTypes.md); `watched?`: `boolean`; } | { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `contentPosition?`: `number`; `duration?`: `number`; `embedded?`: `boolean`; `id?`: `string`; `position?`: `number`; `resolved?`: `boolean`; `type?`: [`AdvertisementBreakTypes`](../enumerations/AdvertisementBreakTypes.md); }; }

###### advertisement.active.advertisement?

{ `active?`: `boolean`; `auxiliaryData?`: {[`key`: `string`]: `any`; }; `clickThroughUrl?`: `string`; `completion?`: `number`; `duration?`: `number`; `id?`: `string`; `name?`: `string`; `position?`: `number`; `title?`: `string`; `watched?`: `boolean`; }

###### advertisement.active.advertisement.active?

`boolean`

###### advertisement.active.advertisement.auxiliaryData?

{[`key`: `string`]: `any`; }

###### advertisement.active.advertisement.clickThroughUrl?

`string`

###### advertisement.active.advertisement.completion?

`number`

###### advertisement.active.advertisement.duration?

`number`

###### advertisement.active.advertisement.id?

`string`

###### advertisement.active.advertisement.name?

`string`

###### advertisement.active.advertisement.position?

`number`

###### advertisement.active.advertisement.title?

`string`

###### advertisement.active.advertisement.watched?

`boolean`

###### advertisement.active.advertisementBreak?

{ `active?`: `boolean`; `advertisementIds?`: `string`[]; `auxiliaryData?`: {[`key`: `string`]: `any`; }; `completion?`: `number`; `contentPosition?`: `number`; `duration?`: `number`; `embedded?`: `boolean`; `id?`: `string`; `name?`: `string`; `position?`: `number`; `resolved?`: `boolean`; `type?`: [`AdvertisementBreakTypes`](reference/enumerations/AdvertisementBreakTypes.md); `watched?`: `boolean`; } | { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `contentPosition?`: `number`; `duration?`: `number`; `embedded?`: `boolean`; `id?`: `string`; `position?`: `number`; `resolved?`: `boolean`; `type?`: [`AdvertisementBreakTypes`](../enumerations/AdvertisementBreakTypes.md); }

###### autoplay?

`boolean`

###### content?

{ `auxiliaryData?`: {[`key`: `string`]: `any`; }; `id?`: `string`; `metadata?`: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `channel?`: { `logo?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `name?`: `string`; }; `description?`: `string`; `images?`: `object`[]; `poster?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `section?`: { `duration?`: `number`; `endTime?`: `number`; `startTime?`: `number`; }; `series?`: { `episode?`: `number`; `season?`: `number`; `title?`: `string`; }; `title?`: `string`; `type?`: [`MetadataTypes`](reference/enumerations/MetadataTypes.md); }; `nextContent?`: `boolean`; `type?`: `string`; }

###### content.auxiliaryData?

{[`key`: `string`]: `any`; }

###### content.id?

`string`

###### content.metadata?

{ `auxiliaryData?`: {[`key`: `string`]: `any`; }; `channel?`: { `logo?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `name?`: `string`; }; `description?`: `string`; `images?`: `object`[]; `poster?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `section?`: { `duration?`: `number`; `endTime?`: `number`; `startTime?`: `number`; }; `series?`: { `episode?`: `number`; `season?`: `number`; `title?`: `string`; }; `title?`: `string`; `type?`: [`MetadataTypes`](reference/enumerations/MetadataTypes.md); }

###### content.metadata.auxiliaryData?

{[`key`: `string`]: `any`; }

###### content.metadata.channel?

{ `logo?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `name?`: `string`; }

###### content.metadata.channel.logo?

{ `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }

###### content.metadata.channel.logo.height?

`number`

###### content.metadata.channel.logo.type?

`string`

###### content.metadata.channel.logo.url?

`string`

###### content.metadata.channel.logo.width?

`number`

###### content.metadata.channel.name?

`string`

###### content.metadata.description?

`string`

###### content.metadata.images?

`object`[]

###### content.metadata.poster?

{ `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }

###### content.metadata.poster.height?

`number`

###### content.metadata.poster.type?

`string`

###### content.metadata.poster.url?

`string`

###### content.metadata.poster.width?

`number`

###### content.metadata.section?

{ `duration?`: `number`; `endTime?`: `number`; `startTime?`: `number`; }

###### content.metadata.section.duration?

`number`

###### content.metadata.section.endTime?

`number`

###### content.metadata.section.startTime?

`number`

###### content.metadata.series?

{ `episode?`: `number`; `season?`: `number`; `title?`: `string`; }

###### content.metadata.series.episode?

`number`

###### content.metadata.series.season?

`number`

###### content.metadata.series.title?

`string`

###### content.metadata.title?

`string`

###### content.metadata.type?

[`MetadataTypes`](reference/enumerations/MetadataTypes.md)

###### content.nextContent?

`boolean`

###### content.type?

`string`

###### contentDuration?

`number`

###### contentEpochTime?

`number`

###### contentSeekableRange?

{ `epochSeekable?`: { `initialSeekableStart?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; }; `liveDone?`: `boolean`; `movingWindow?`: `boolean`; `now?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; `stream0Time?`: `number`; }

###### contentSeekableRange.epochSeekable?

{ `initialSeekableStart?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; }

###### contentSeekableRange.epochSeekable.initialSeekableStart?

`number`

###### contentSeekableRange.epochSeekable.seekable?

{ `end?`: `number`; `start?`: `number`; }

###### contentSeekableRange.epochSeekable.seekable.end?

`number`

###### contentSeekableRange.epochSeekable.seekable.start?

`number`

###### contentSeekableRange.liveDone?

`boolean`

###### contentSeekableRange.movingWindow?

`boolean`

###### contentSeekableRange.now?

`number`

###### contentSeekableRange.seekable?

{ `end?`: `number`; `start?`: `number`; }

###### contentSeekableRange.seekable.end?

`number`

###### contentSeekableRange.seekable.start?

`number`

###### contentSeekableRange.stream0Time?

`number`

###### contentTime?

`number`

###### currentTime?

`number`

**Deprecated**

- but kept for backwards compatibility

###### duration?

`number`

**Deprecated**

- but kept for backwards compatibility

###### epochTime?

`number`

**Deprecated**

- but kept for backwards compatibility

###### error?

{ `category?`: `string`; `code?`: { `name?`: `string`; `value?`: `number`; }; `details?`: {[`key`: `string`]: `any`; }; `displayMessage?`: `string`; `label?`: `string`; `message?`: `string`; `name?`: `string`; `origin?`: `string`; `originalError?`: {[`key`: `string`]: `any`; } | { category?: string | undefined; code?: { name?: string | undefined; value?: number | undefined; } | undefined; details?: { [x: string]: any; } | undefined; displayMessage?: string | undefined; ... 9 more ...; type?: ErrorTypes | undefined; } | { `cause?`: { }; `message?`: `string`; `name?`: `string`; `stack?`: `string`; }; `severity?`: [`ErrorSeverities`](reference/enumerations/ErrorSeverities.md); `source?`: `string`; `stack?`: `string`; `stackedErrors?`: { category?: string | undefined; code?: { name?: string | undefined; value?: number | undefined; } | undefined; details?: { [x: string]: any; } | undefined; displayMessage?: string | undefined; ... 9 more ...; type?: ErrorTypes | undefined; }[]; `type?`: [`ErrorTypes`](../enumerations/ErrorTypes.md); }

###### error.category?

`string`

###### error.code?

{ `name?`: `string`; `value?`: `number`; }

###### error.code.name?

`string`

###### error.code.value?

`number`

###### error.details?

{[`key`: `string`]: `any`; }

###### error.displayMessage?

`string`

###### error.label?

`string`

###### error.message?

`string`

###### error.name?

`string`

###### error.origin?

`string`

###### error.originalError?

{[`key`: `string`]: `any`; } | { category?: string | undefined; code?: { name?: string | undefined; value?: number | undefined; } | undefined; details?: { [x: string]: any; } | undefined; displayMessage?: string | undefined; ... 9 more ...; type?: ErrorTypes | undefined; } | { `cause?`: { }; `message?`: `string`; `name?`: `string`; `stack?`: `string`; }

###### error.severity?

[`ErrorSeverities`](reference/enumerations/ErrorSeverities.md)

###### error.source?

`string`

###### error.stack?

`string`

###### error.stackedErrors?

{ category?: string | undefined; code?: { name?: string | undefined; value?: number | undefined; } | undefined; details?: { [x: string]: any; } | undefined; displayMessage?: string | undefined; ... 9 more ...; type?: ErrorTypes | undefined; }[]

###### error.type?

[`ErrorTypes`](reference/enumerations/ErrorTypes.md)

###### id?

`string`

###### nextContent?

{ `auxiliaryData?`: {[`key`: `string`]: `any`; }; `id?`: `string`; `metadata?`: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `channel?`: { `logo?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `name?`: `string`; }; `description?`: `string`; `images?`: `object`[]; `poster?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `section?`: { `duration?`: `number`; `endTime?`: `number`; `startTime?`: `number`; }; `series?`: { `episode?`: `number`; `season?`: `number`; `title?`: `string`; }; `title?`: `string`; `type?`: [`MetadataTypes`](reference/enumerations/MetadataTypes.md); }; `nextContent?`: `boolean`; `type?`: `string`; }

###### nextContent.auxiliaryData?

{[`key`: `string`]: `any`; }

###### nextContent.id?

`string`

###### nextContent.metadata?

{ `auxiliaryData?`: {[`key`: `string`]: `any`; }; `channel?`: { `logo?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `name?`: `string`; }; `description?`: `string`; `images?`: `object`[]; `poster?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `section?`: { `duration?`: `number`; `endTime?`: `number`; `startTime?`: `number`; }; `series?`: { `episode?`: `number`; `season?`: `number`; `title?`: `string`; }; `title?`: `string`; `type?`: [`MetadataTypes`](reference/enumerations/MetadataTypes.md); }

###### nextContent.metadata.auxiliaryData?

{[`key`: `string`]: `any`; }

###### nextContent.metadata.channel?

{ `logo?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `name?`: `string`; }

###### nextContent.metadata.channel.logo?

{ `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }

###### nextContent.metadata.channel.logo.height?

`number`

###### nextContent.metadata.channel.logo.type?

`string`

###### nextContent.metadata.channel.logo.url?

`string`

###### nextContent.metadata.channel.logo.width?

`number`

###### nextContent.metadata.channel.name?

`string`

###### nextContent.metadata.description?

`string`

###### nextContent.metadata.images?

`object`[]

###### nextContent.metadata.poster?

{ `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }

###### nextContent.metadata.poster.height?

`number`

###### nextContent.metadata.poster.type?

`string`

###### nextContent.metadata.poster.url?

`string`

###### nextContent.metadata.poster.width?

`number`

###### nextContent.metadata.section?

{ `duration?`: `number`; `endTime?`: `number`; `startTime?`: `number`; }

###### nextContent.metadata.section.duration?

`number`

###### nextContent.metadata.section.endTime?

`number`

###### nextContent.metadata.section.startTime?

`number`

###### nextContent.metadata.series?

{ `episode?`: `number`; `season?`: `number`; `title?`: `string`; }

###### nextContent.metadata.series.episode?

`number`

###### nextContent.metadata.series.season?

`number`

###### nextContent.metadata.series.title?

`string`

###### nextContent.metadata.title?

`string`

###### nextContent.metadata.type?

[`MetadataTypes`](reference/enumerations/MetadataTypes.md)

###### nextContent.nextContent?

`boolean`

###### nextContent.type?

`string`

###### playbackState?

[`PlaybackStates`](reference/enumerations/PlaybackStates.md)

###### seekableRange?

{ `epochSeekable?`: { `initialSeekableStart?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; }; `liveDone?`: `boolean`; `movingWindow?`: `boolean`; `now?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; `stream0Time?`: `number`; }

**Deprecated**

- but kept for backwards compatibility

###### seekableRange.epochSeekable?

{ `initialSeekableStart?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; }

###### seekableRange.epochSeekable.initialSeekableStart?

`number`

###### seekableRange.epochSeekable.seekable?

{ `end?`: `number`; `start?`: `number`; }

###### seekableRange.epochSeekable.seekable.end?

`number`

###### seekableRange.epochSeekable.seekable.start?

`number`

###### seekableRange.liveDone?

`boolean`

###### seekableRange.movingWindow?

`boolean`

###### seekableRange.now?

`number`

###### seekableRange.seekable?

{ `end?`: `number`; `start?`: `number`; }

###### seekableRange.seekable.end?

`number`

###### seekableRange.seekable.start?

`number`

###### seekableRange.stream0Time?

`number`

###### stillWatching?

{ `interactionTimeout?`: `number`; `remaining?`: `number`; }

###### stillWatching.interactionTimeout?

`number`

###### stillWatching.remaining?

`number`

###### stream?

{ `advertisement?`: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `type?`: `string`; `url?`: `string`; }; `auxiliaryData?`: {[`key`: `string`]: `any`; }; `configuration?`: {[`key`: `string`]: `any`; `playbackConfigurationProfiles?`: `string`[]; `playbackEngine?`: {[`key`: `string`]: `any`; `preferred?`: `string`; `restricted?`: `string`[]; `selected?`: `string`; }; }; `containerType?`: [`StreamContainerTypes`](reference/enumerations/StreamContainerTypes.md); `contentType?`: [`StreamContentTypes`](../enumerations/StreamContentTypes.md); `encryption?`: { `cipher?`: [`Aes128`](../enumerations/CipherTypes.md#aes128); `cipherMode?`: [`CipherModeTypes`](../enumerations/CipherModeTypes.md); `initializationVector?`: `number`[]; `key?`: `number`[]; `keyId?`: `number`[]; `padding?`: [`PaddingTypes`](../enumerations/PaddingTypes.md); }; `id?`: `string`; `playbackSessionUrl?`: `string`; `streamRestrictions?`: { `pause?`: `boolean`; `seek?`: `boolean`; }; `streamType?`: [`StreamTypes`](../enumerations/StreamTypes.md); `url?`: `string`; }

###### stream.advertisement?

{ `auxiliaryData?`: {[`key`: `string`]: `any`; }; `type?`: `string`; `url?`: `string`; }

###### stream.advertisement.auxiliaryData?

{[`key`: `string`]: `any`; }

###### stream.advertisement.type?

`string`

###### stream.advertisement.url?

`string`

###### stream.auxiliaryData?

{[`key`: `string`]: `any`; }

###### stream.configuration?

{[`key`: `string`]: `any`; `playbackConfigurationProfiles?`: `string`[]; `playbackEngine?`: {[`key`: `string`]: `any`; `preferred?`: `string`; `restricted?`: `string`[]; `selected?`: `string`; }; }

###### stream.configuration.playbackConfigurationProfiles?

`string`[]

###### stream.configuration.playbackEngine?

{[`key`: `string`]: `any`; `preferred?`: `string`; `restricted?`: `string`[]; `selected?`: `string`; }

###### stream.configuration.playbackEngine.preferred?

`string`

###### stream.configuration.playbackEngine.restricted?

`string`[]

###### stream.configuration.playbackEngine.selected?

`string`

###### stream.containerType?

[`StreamContainerTypes`](reference/enumerations/StreamContainerTypes.md)

###### stream.contentType?

[`StreamContentTypes`](reference/enumerations/StreamContentTypes.md)

###### stream.encryption?

{ `cipher?`: [`Aes128`](reference/enumerations/CipherTypes.md#aes128); `cipherMode?`: [`CipherModeTypes`](../enumerations/CipherModeTypes.md); `initializationVector?`: `number`[]; `key?`: `number`[]; `keyId?`: `number`[]; `padding?`: [`PaddingTypes`](../enumerations/PaddingTypes.md); }

###### stream.encryption.cipher?

[`Aes128`](reference/enumerations/CipherTypes.md#aes128)

###### stream.encryption.cipherMode?

[`CipherModeTypes`](reference/enumerations/CipherModeTypes.md)

###### stream.encryption.initializationVector?

`number`[]

###### stream.encryption.key?

`number`[]

###### stream.encryption.keyId?

`number`[]

###### stream.encryption.padding?

[`PaddingTypes`](reference/enumerations/PaddingTypes.md)

###### stream.id?

`string`

###### stream.playbackSessionUrl?

`string`

###### stream.streamRestrictions?

{ `pause?`: `boolean`; `seek?`: `boolean`; }

###### stream.streamRestrictions.pause?

`boolean`

###### stream.streamRestrictions.seek?

`boolean`

###### stream.streamType?

[`StreamTypes`](reference/enumerations/StreamTypes.md)

###### stream.url?

`string`

###### streamRestrictions?

{ `pause?`: `boolean`; `seek?`: `boolean`; }

###### streamRestrictions.pause?

`boolean`

###### streamRestrictions.seek?

`boolean`

###### timeline?

{ `activeMetadata?`: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `duration?`: `number`; `enabled?`: `boolean`; `id?`: `string`; `isDynamic?`: `boolean`; `metadata?`: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `channel?`: { `logo?`: { `height?`: ...; `type?`: ...; `url?`: ...; `width?`: ...; }; `name?`: `string`; }; `description?`: `string`; `images?`: `object`[]; `poster?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `series?`: { `episode?`: `number`; `season?`: `number`; `title?`: `string`; }; `title?`: `string`; `type?`: [`MetadataTypes`](reference/enumerations/MetadataTypes.md); }; `offset?`: `number`; `once?`: `boolean`; `type?`: [`TimelineItemTypes`](../enumerations/TimelineItemTypes.md); }; `activeSection?`: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `duration?`: `number`; `enabled?`: `boolean`; `id?`: `string`; `isDynamic?`: `boolean`; `offset?`: `number`; `once?`: `boolean`; `sectionType?`: [`TimelineSectionTypes`](../enumerations/TimelineSectionTypes.md); `skippable?`: `boolean`; `type?`: [`TimelineItemTypes`](../enumerations/TimelineItemTypes.md); }; `behavior?`: { `position?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); `seekableEnd?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); `seekableStart?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); `timelineEnd?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); `timelineStart?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); }; `items?`: {[`key`: `string`]: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `duration?`: `number`; `enabled?`: `boolean`; `id?`: `string`; `isDynamic?`: `boolean`; `offset?`: `number`; `once?`: `boolean`; `type?`: [`TimelineItemTypes`](../enumerations/TimelineItemTypes.md); } | `undefined`;
  [`key`: `number`]: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `duration?`: `number`; `enabled?`: `boolean`; `id?`: `string`; `isDynamic?`: `boolean`; `offset?`: `number`; `once?`: `boolean`; `type?`: [`TimelineItemTypes`](reference/enumerations/TimelineItemTypes.md); } | `undefined`; }; `position?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; `stream0Time?`: `number`; `streamType?`: [`StreamTypes`](../enumerations/StreamTypes.md); `timelineEnd?`: `number`; `timelineStart?`: `number`; `timelineStartOffset?`: `number`; `timeRepresentation?`: [`TimeRepresentations`](../enumerations/TimeRepresentations.md); }

###### timeline.activeMetadata?

{ `auxiliaryData?`: {[`key`: `string`]: `any`; }; `duration?`: `number`; `enabled?`: `boolean`; `id?`: `string`; `isDynamic?`: `boolean`; `metadata?`: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `channel?`: { `logo?`: { `height?`: ...; `type?`: ...; `url?`: ...; `width?`: ...; }; `name?`: `string`; }; `description?`: `string`; `images?`: `object`[]; `poster?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `series?`: { `episode?`: `number`; `season?`: `number`; `title?`: `string`; }; `title?`: `string`; `type?`: [`MetadataTypes`](reference/enumerations/MetadataTypes.md); }; `offset?`: `number`; `once?`: `boolean`; `type?`: [`TimelineItemTypes`](../enumerations/TimelineItemTypes.md); }

###### timeline.activeMetadata.auxiliaryData?

{[`key`: `string`]: `any`; }

###### timeline.activeMetadata.duration?

`number`

###### timeline.activeMetadata.enabled?

`boolean`

###### timeline.activeMetadata.id?

`string`

###### timeline.activeMetadata.isDynamic?

`boolean`

###### timeline.activeMetadata.metadata?

{ `auxiliaryData?`: {[`key`: `string`]: `any`; }; `channel?`: { `logo?`: { `height?`: ...; `type?`: ...; `url?`: ...; `width?`: ...; }; `name?`: `string`; }; `description?`: `string`; `images?`: `object`[]; `poster?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `series?`: { `episode?`: `number`; `season?`: `number`; `title?`: `string`; }; `title?`: `string`; `type?`: [`MetadataTypes`](reference/enumerations/MetadataTypes.md); }

###### timeline.activeMetadata.metadata.auxiliaryData?

{[`key`: `string`]: `any`; }

###### timeline.activeMetadata.metadata.channel?

{ `logo?`: { `height?`: ...; `type?`: ...; `url?`: ...; `width?`: ...; }; `name?`: `string`; }

###### timeline.activeMetadata.metadata.channel.logo?

{ `height?`: ...; `type?`: ...; `url?`: ...; `width?`: ...; }

###### timeline.activeMetadata.metadata.channel.logo.height?

...

###### timeline.activeMetadata.metadata.channel.logo.type?

...

###### timeline.activeMetadata.metadata.channel.logo.url?

...

###### timeline.activeMetadata.metadata.channel.logo.width?

...

###### timeline.activeMetadata.metadata.channel.name?

`string`

###### timeline.activeMetadata.metadata.description?

`string`

###### timeline.activeMetadata.metadata.images?

`object`[]

###### timeline.activeMetadata.metadata.poster?

{ `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }

###### timeline.activeMetadata.metadata.poster.height?

`number`

###### timeline.activeMetadata.metadata.poster.type?

`string`

###### timeline.activeMetadata.metadata.poster.url?

`string`

###### timeline.activeMetadata.metadata.poster.width?

`number`

###### timeline.activeMetadata.metadata.series?

{ `episode?`: `number`; `season?`: `number`; `title?`: `string`; }

###### timeline.activeMetadata.metadata.series.episode?

`number`

###### timeline.activeMetadata.metadata.series.season?

`number`

###### timeline.activeMetadata.metadata.series.title?

`string`

###### timeline.activeMetadata.metadata.title?

`string`

###### timeline.activeMetadata.metadata.type?

[`MetadataTypes`](reference/enumerations/MetadataTypes.md)

###### timeline.activeMetadata.offset?

`number`

###### timeline.activeMetadata.once?

`boolean`

###### timeline.activeMetadata.type?

[`TimelineItemTypes`](reference/enumerations/TimelineItemTypes.md)

###### timeline.activeSection?

{ `auxiliaryData?`: {[`key`: `string`]: `any`; }; `duration?`: `number`; `enabled?`: `boolean`; `id?`: `string`; `isDynamic?`: `boolean`; `offset?`: `number`; `once?`: `boolean`; `sectionType?`: [`TimelineSectionTypes`](reference/enumerations/TimelineSectionTypes.md); `skippable?`: `boolean`; `type?`: [`TimelineItemTypes`](../enumerations/TimelineItemTypes.md); }

###### timeline.activeSection.auxiliaryData?

{[`key`: `string`]: `any`; }

###### timeline.activeSection.duration?

`number`

###### timeline.activeSection.enabled?

`boolean`

###### timeline.activeSection.id?

`string`

###### timeline.activeSection.isDynamic?

`boolean`

###### timeline.activeSection.offset?

`number`

###### timeline.activeSection.once?

`boolean`

###### timeline.activeSection.sectionType?

[`TimelineSectionTypes`](reference/enumerations/TimelineSectionTypes.md)

###### timeline.activeSection.skippable?

`boolean`

###### timeline.activeSection.type?

[`TimelineItemTypes`](reference/enumerations/TimelineItemTypes.md)

###### timeline.behavior?

{ `position?`: [`TimelineBehaviors`](reference/enumerations/TimelineBehaviors.md); `seekableEnd?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); `seekableStart?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); `timelineEnd?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); `timelineStart?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); }

###### timeline.behavior.position?

[`TimelineBehaviors`](reference/enumerations/TimelineBehaviors.md)

###### timeline.behavior.seekableEnd?

[`TimelineBehaviors`](reference/enumerations/TimelineBehaviors.md)

###### timeline.behavior.seekableStart?

[`TimelineBehaviors`](reference/enumerations/TimelineBehaviors.md)

###### timeline.behavior.timelineEnd?

[`TimelineBehaviors`](reference/enumerations/TimelineBehaviors.md)

###### timeline.behavior.timelineStart?

[`TimelineBehaviors`](reference/enumerations/TimelineBehaviors.md)

###### timeline.items?

{[`key`: `string`]: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `duration?`: `number`; `enabled?`: `boolean`; `id?`: `string`; `isDynamic?`: `boolean`; `offset?`: `number`; `once?`: `boolean`; `type?`: [`TimelineItemTypes`](reference/enumerations/TimelineItemTypes.md); } | `undefined`;
[`key`: `number`]: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `duration?`: `number`; `enabled?`: `boolean`; `id?`: `string`; `isDynamic?`: `boolean`; `offset?`: `number`; `once?`: `boolean`; `type?`: [`TimelineItemTypes`](reference/enumerations/TimelineItemTypes.md); } | `undefined`; }

###### timeline.position?

`number`

###### timeline.seekable?

{ `end?`: `number`; `start?`: `number`; }

###### timeline.seekable.end?

`number`

###### timeline.seekable.start?

`number`

###### timeline.stream0Time?

`number`

###### timeline.streamType?

[`StreamTypes`](reference/enumerations/StreamTypes.md)

###### timeline.timelineEnd?

`number`

###### timeline.timelineStart?

`number`

###### timeline.timelineStartOffset?

`number`

###### timeline.timeRepresentation?

[`TimeRepresentations`](reference/enumerations/TimeRepresentations.md)

###### tracks?

`object`[]

###### volume?

{ `muted?`: `boolean`; `volume?`: `number`; }

###### volume.muted?

`boolean`

###### volume.volume?

`number`

##### pathsToDelete

`string`[]

##### events

...`string`[]

#### Returns

`string`[]

#### Inherited from

`StateKeepingSession.commitDeleteAndChangeWithoutNotification`

***

### commitDeletedPath()

> `protected` **commitDeletedPath**(`path`): `void`

#### Parameters

##### path

`string`

#### Returns

`void`

#### Inherited from

`StateKeepingSession.commitDeletedPath`

***

### commitEvent()

> `protected` **commitEvent**(`event`): `void`

#### Parameters

##### event

`string`

#### Returns

`void`

#### Inherited from

`StateKeepingSession.commitEvent`

***

### destroy()

> **destroy**(`finalState?`): `void`

#### Parameters

##### finalState?

[`PlaybackSessionState`](reference/interfaces/PlaybackSessionState.md)

#### Returns

`void`

#### Overrides

`StateKeepingSession.destroy`

***

### destroyWithContent()

> **destroyWithContent**(`content?`): `void`

#### Parameters

##### content?

`Omit`<[`Content`](reference/interfaces/Content.md), `"streams"`>

#### Returns

`void`

***

### emit()

> **emit**<`K`>(`type`, `event?`): `Emitter`<[`SessionEventPayloads`](reference/interfaces/SessionEventPayloads.md)<[`PlaybackSessionState`](PlaybackSessionState.md)>>

#### Type Parameters

##### K

`K` *extends* keyof [`SessionEventPayloads`](reference/interfaces/SessionEventPayloads.md)<[`PlaybackSessionState`](PlaybackSessionState.md)>

#### Parameters

##### type

`K`

##### event?

`Optional`<[`SessionEventPayloads`](reference/interfaces/SessionEventPayloads.md)<[`PlaybackSessionState`](PlaybackSessionState.md)>[`K`], `"type"`>

#### Returns

`Emitter`<[`SessionEventPayloads`](reference/interfaces/SessionEventPayloads.md)<[`PlaybackSessionState`](PlaybackSessionState.md)>>

#### Inherited from

`StateKeepingSession.emit`

***

### emitAsync()

> **emitAsync**<`K`>(`type`, `event?`): `Emitter`<[`SessionEventPayloads`](reference/interfaces/SessionEventPayloads.md)<[`PlaybackSessionState`](PlaybackSessionState.md)>>

#### Type Parameters

##### K

`K` *extends* keyof [`SessionEventPayloads`](reference/interfaces/SessionEventPayloads.md)<[`PlaybackSessionState`](PlaybackSessionState.md)>

#### Parameters

##### type

`K`

##### event?

`Optional`<[`SessionEventPayloads`](reference/interfaces/SessionEventPayloads.md)<[`PlaybackSessionState`](PlaybackSessionState.md)>[`K`], `"type"`>

#### Returns

`Emitter`<[`SessionEventPayloads`](reference/interfaces/SessionEventPayloads.md)<[`PlaybackSessionState`](PlaybackSessionState.md)>>

#### Inherited from

`StateKeepingSession.emitAsync`

***

### ensureNotDestroyed()

> `protected` **ensureNotDestroyed**(`subscriber`): (...`args`) => `void`

#### Parameters

##### subscriber

`TSubscriber`

#### Returns

> (...`args`): `void`

##### Parameters

###### args

...`any`[]

##### Returns

`void`

#### Inherited from

`StateKeepingSession.ensureNotDestroyed`

***

### getAdvertisement()

> **getAdvertisement**<`TReturnAdvertisementBreak`, `TReturnAdvertisement`>(): { `advertisementBreaks`: `TReturnAdvertisementBreak`[]; `advertisements`: `TReturnAdvertisement`[]; } | `undefined`

#### Type Parameters

##### TReturnAdvertisementBreak

`TReturnAdvertisementBreak` = [`AdvertisementBreak`](reference/interfaces/AdvertisementBreak.md) | [`AdvertisementCue`](AdvertisementCue.md)

##### TReturnAdvertisement

`TReturnAdvertisement` = [`Advertisement`](reference/interfaces/Advertisement.md)<[`AdvertisementAuxiliaryData`](AdvertisementAuxiliaryData.md)>

#### Returns

{ `advertisementBreaks`: `TReturnAdvertisementBreak`[]; `advertisements`: `TReturnAdvertisement`[]; } | `undefined`

***

### getCleanState()

> **getCleanState**(`id?`): [`PlaybackSessionState`](reference/interfaces/PlaybackSessionState.md)

#### Parameters

##### id?

`string`

#### Returns

[`PlaybackSessionState`](reference/interfaces/PlaybackSessionState.md)

#### Overrides

`StateKeepingSession.getCleanState`

***

### getId()

> **getId**(): `string`

#### Returns

`string`

#### Overrides

`StateKeepingSession.getId`

***

### getState()

> **getState**(): [`PlaybackSessionState`](reference/interfaces/PlaybackSessionState.md)

#### Returns

[`PlaybackSessionState`](reference/interfaces/PlaybackSessionState.md)

#### Overrides

`StateKeepingSession.getState`

***

### notifyImmediateBulkedChanges()

> `protected` **notifyImmediateBulkedChanges**(): `void`

#### Returns

`void`

#### Inherited from

`StateKeepingSession.notifyImmediateBulkedChanges`

***

### notifyImmediateChange()

> `protected` **notifyImmediateChange**(`changes`, `deletedPaths`, `events`): `void`

#### Parameters

##### changes

###### absoluteDuration?

`number`

###### absoluteEpochTime?

`number`

###### absoluteSeekableRange?

{ `epochSeekable?`: { `initialSeekableStart?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; }; `liveDone?`: `boolean`; `movingWindow?`: `boolean`; `now?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; `stream0Time?`: `number`; }

###### absoluteSeekableRange.epochSeekable?

{ `initialSeekableStart?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; }

###### absoluteSeekableRange.epochSeekable.initialSeekableStart?

`number`

###### absoluteSeekableRange.epochSeekable.seekable?

{ `end?`: `number`; `start?`: `number`; }

###### absoluteSeekableRange.epochSeekable.seekable.end?

`number`

###### absoluteSeekableRange.epochSeekable.seekable.start?

`number`

###### absoluteSeekableRange.liveDone?

`boolean`

###### absoluteSeekableRange.movingWindow?

`boolean`

###### absoluteSeekableRange.now?

`number`

###### absoluteSeekableRange.seekable?

{ `end?`: `number`; `start?`: `number`; }

###### absoluteSeekableRange.seekable.end?

`number`

###### absoluteSeekableRange.seekable.start?

`number`

###### absoluteSeekableRange.stream0Time?

`number`

###### absoluteTime?

`number`

###### advertisement?

{ `active?`: { `advertisement?`: { `active?`: `boolean`; `auxiliaryData?`: {[`key`: `string`]: `any`; }; `clickThroughUrl?`: `string`; `completion?`: `number`; `duration?`: `number`; `id?`: `string`; `name?`: `string`; `position?`: `number`; `title?`: `string`; `watched?`: `boolean`; }; `advertisementBreak?`: { `active?`: `boolean`; `advertisementIds?`: `string`[]; `auxiliaryData?`: {[`key`: `string`]: `any`; }; `completion?`: `number`; `contentPosition?`: `number`; `duration?`: `number`; `embedded?`: `boolean`; `id?`: `string`; `name?`: `string`; `position?`: `number`; `resolved?`: `boolean`; `type?`: [`AdvertisementBreakTypes`](reference/enumerations/AdvertisementBreakTypes.md); `watched?`: `boolean`; } | { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `contentPosition?`: `number`; `duration?`: `number`; `embedded?`: `boolean`; `id?`: `string`; `position?`: `number`; `resolved?`: `boolean`; `type?`: [`AdvertisementBreakTypes`](../enumerations/AdvertisementBreakTypes.md); }; }; }

###### advertisement.active?

{ `advertisement?`: { `active?`: `boolean`; `auxiliaryData?`: {[`key`: `string`]: `any`; }; `clickThroughUrl?`: `string`; `completion?`: `number`; `duration?`: `number`; `id?`: `string`; `name?`: `string`; `position?`: `number`; `title?`: `string`; `watched?`: `boolean`; }; `advertisementBreak?`: { `active?`: `boolean`; `advertisementIds?`: `string`[]; `auxiliaryData?`: {[`key`: `string`]: `any`; }; `completion?`: `number`; `contentPosition?`: `number`; `duration?`: `number`; `embedded?`: `boolean`; `id?`: `string`; `name?`: `string`; `position?`: `number`; `resolved?`: `boolean`; `type?`: [`AdvertisementBreakTypes`](reference/enumerations/AdvertisementBreakTypes.md); `watched?`: `boolean`; } | { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `contentPosition?`: `number`; `duration?`: `number`; `embedded?`: `boolean`; `id?`: `string`; `position?`: `number`; `resolved?`: `boolean`; `type?`: [`AdvertisementBreakTypes`](../enumerations/AdvertisementBreakTypes.md); }; }

###### advertisement.active.advertisement?

{ `active?`: `boolean`; `auxiliaryData?`: {[`key`: `string`]: `any`; }; `clickThroughUrl?`: `string`; `completion?`: `number`; `duration?`: `number`; `id?`: `string`; `name?`: `string`; `position?`: `number`; `title?`: `string`; `watched?`: `boolean`; }

###### advertisement.active.advertisement.active?

`boolean`

###### advertisement.active.advertisement.auxiliaryData?

{[`key`: `string`]: `any`; }

###### advertisement.active.advertisement.clickThroughUrl?

`string`

###### advertisement.active.advertisement.completion?

`number`

###### advertisement.active.advertisement.duration?

`number`

###### advertisement.active.advertisement.id?

`string`

###### advertisement.active.advertisement.name?

`string`

###### advertisement.active.advertisement.position?

`number`

###### advertisement.active.advertisement.title?

`string`

###### advertisement.active.advertisement.watched?

`boolean`

###### advertisement.active.advertisementBreak?

{ `active?`: `boolean`; `advertisementIds?`: `string`[]; `auxiliaryData?`: {[`key`: `string`]: `any`; }; `completion?`: `number`; `contentPosition?`: `number`; `duration?`: `number`; `embedded?`: `boolean`; `id?`: `string`; `name?`: `string`; `position?`: `number`; `resolved?`: `boolean`; `type?`: [`AdvertisementBreakTypes`](reference/enumerations/AdvertisementBreakTypes.md); `watched?`: `boolean`; } | { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `contentPosition?`: `number`; `duration?`: `number`; `embedded?`: `boolean`; `id?`: `string`; `position?`: `number`; `resolved?`: `boolean`; `type?`: [`AdvertisementBreakTypes`](../enumerations/AdvertisementBreakTypes.md); }

###### autoplay?

`boolean`

###### content?

{ `auxiliaryData?`: {[`key`: `string`]: `any`; }; `id?`: `string`; `metadata?`: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `channel?`: { `logo?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `name?`: `string`; }; `description?`: `string`; `images?`: `object`[]; `poster?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `section?`: { `duration?`: `number`; `endTime?`: `number`; `startTime?`: `number`; }; `series?`: { `episode?`: `number`; `season?`: `number`; `title?`: `string`; }; `title?`: `string`; `type?`: [`MetadataTypes`](reference/enumerations/MetadataTypes.md); }; `nextContent?`: `boolean`; `type?`: `string`; }

###### content.auxiliaryData?

{[`key`: `string`]: `any`; }

###### content.id?

`string`

###### content.metadata?

{ `auxiliaryData?`: {[`key`: `string`]: `any`; }; `channel?`: { `logo?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `name?`: `string`; }; `description?`: `string`; `images?`: `object`[]; `poster?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `section?`: { `duration?`: `number`; `endTime?`: `number`; `startTime?`: `number`; }; `series?`: { `episode?`: `number`; `season?`: `number`; `title?`: `string`; }; `title?`: `string`; `type?`: [`MetadataTypes`](reference/enumerations/MetadataTypes.md); }

###### content.metadata.auxiliaryData?

{[`key`: `string`]: `any`; }

###### content.metadata.channel?

{ `logo?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `name?`: `string`; }

###### content.metadata.channel.logo?

{ `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }

###### content.metadata.channel.logo.height?

`number`

###### content.metadata.channel.logo.type?

`string`

###### content.metadata.channel.logo.url?

`string`

###### content.metadata.channel.logo.width?

`number`

###### content.metadata.channel.name?

`string`

###### content.metadata.description?

`string`

###### content.metadata.images?

`object`[]

###### content.metadata.poster?

{ `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }

###### content.metadata.poster.height?

`number`

###### content.metadata.poster.type?

`string`

###### content.metadata.poster.url?

`string`

###### content.metadata.poster.width?

`number`

###### content.metadata.section?

{ `duration?`: `number`; `endTime?`: `number`; `startTime?`: `number`; }

###### content.metadata.section.duration?

`number`

###### content.metadata.section.endTime?

`number`

###### content.metadata.section.startTime?

`number`

###### content.metadata.series?

{ `episode?`: `number`; `season?`: `number`; `title?`: `string`; }

###### content.metadata.series.episode?

`number`

###### content.metadata.series.season?

`number`

###### content.metadata.series.title?

`string`

###### content.metadata.title?

`string`

###### content.metadata.type?

[`MetadataTypes`](reference/enumerations/MetadataTypes.md)

###### content.nextContent?

`boolean`

###### content.type?

`string`

###### contentDuration?

`number`

###### contentEpochTime?

`number`

###### contentSeekableRange?

{ `epochSeekable?`: { `initialSeekableStart?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; }; `liveDone?`: `boolean`; `movingWindow?`: `boolean`; `now?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; `stream0Time?`: `number`; }

###### contentSeekableRange.epochSeekable?

{ `initialSeekableStart?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; }

###### contentSeekableRange.epochSeekable.initialSeekableStart?

`number`

###### contentSeekableRange.epochSeekable.seekable?

{ `end?`: `number`; `start?`: `number`; }

###### contentSeekableRange.epochSeekable.seekable.end?

`number`

###### contentSeekableRange.epochSeekable.seekable.start?

`number`

###### contentSeekableRange.liveDone?

`boolean`

###### contentSeekableRange.movingWindow?

`boolean`

###### contentSeekableRange.now?

`number`

###### contentSeekableRange.seekable?

{ `end?`: `number`; `start?`: `number`; }

###### contentSeekableRange.seekable.end?

`number`

###### contentSeekableRange.seekable.start?

`number`

###### contentSeekableRange.stream0Time?

`number`

###### contentTime?

`number`

###### currentTime?

`number`

**Deprecated**

- but kept for backwards compatibility

###### duration?

`number`

**Deprecated**

- but kept for backwards compatibility

###### epochTime?

`number`

**Deprecated**

- but kept for backwards compatibility

###### error?

{ `category?`: `string`; `code?`: { `name?`: `string`; `value?`: `number`; }; `details?`: {[`key`: `string`]: `any`; }; `displayMessage?`: `string`; `label?`: `string`; `message?`: `string`; `name?`: `string`; `origin?`: `string`; `originalError?`: {[`key`: `string`]: `any`; } | { category?: string | undefined; code?: { name?: string | undefined; value?: number | undefined; } | undefined; details?: { [x: string]: any; } | undefined; displayMessage?: string | undefined; ... 9 more ...; type?: ErrorTypes | undefined; } | { `cause?`: { }; `message?`: `string`; `name?`: `string`; `stack?`: `string`; }; `severity?`: [`ErrorSeverities`](reference/enumerations/ErrorSeverities.md); `source?`: `string`; `stack?`: `string`; `stackedErrors?`: { category?: string | undefined; code?: { name?: string | undefined; value?: number | undefined; } | undefined; details?: { [x: string]: any; } | undefined; displayMessage?: string | undefined; ... 9 more ...; type?: ErrorTypes | undefined; }[]; `type?`: [`ErrorTypes`](../enumerations/ErrorTypes.md); }

###### error.category?

`string`

###### error.code?

{ `name?`: `string`; `value?`: `number`; }

###### error.code.name?

`string`

###### error.code.value?

`number`

###### error.details?

{[`key`: `string`]: `any`; }

###### error.displayMessage?

`string`

###### error.label?

`string`

###### error.message?

`string`

###### error.name?

`string`

###### error.origin?

`string`

###### error.originalError?

{[`key`: `string`]: `any`; } | { category?: string | undefined; code?: { name?: string | undefined; value?: number | undefined; } | undefined; details?: { [x: string]: any; } | undefined; displayMessage?: string | undefined; ... 9 more ...; type?: ErrorTypes | undefined; } | { `cause?`: { }; `message?`: `string`; `name?`: `string`; `stack?`: `string`; }

###### error.severity?

[`ErrorSeverities`](reference/enumerations/ErrorSeverities.md)

###### error.source?

`string`

###### error.stack?

`string`

###### error.stackedErrors?

{ category?: string | undefined; code?: { name?: string | undefined; value?: number | undefined; } | undefined; details?: { [x: string]: any; } | undefined; displayMessage?: string | undefined; ... 9 more ...; type?: ErrorTypes | undefined; }[]

###### error.type?

[`ErrorTypes`](reference/enumerations/ErrorTypes.md)

###### id?

`string`

###### nextContent?

{ `auxiliaryData?`: {[`key`: `string`]: `any`; }; `id?`: `string`; `metadata?`: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `channel?`: { `logo?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `name?`: `string`; }; `description?`: `string`; `images?`: `object`[]; `poster?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `section?`: { `duration?`: `number`; `endTime?`: `number`; `startTime?`: `number`; }; `series?`: { `episode?`: `number`; `season?`: `number`; `title?`: `string`; }; `title?`: `string`; `type?`: [`MetadataTypes`](reference/enumerations/MetadataTypes.md); }; `nextContent?`: `boolean`; `type?`: `string`; }

###### nextContent.auxiliaryData?

{[`key`: `string`]: `any`; }

###### nextContent.id?

`string`

###### nextContent.metadata?

{ `auxiliaryData?`: {[`key`: `string`]: `any`; }; `channel?`: { `logo?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `name?`: `string`; }; `description?`: `string`; `images?`: `object`[]; `poster?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `section?`: { `duration?`: `number`; `endTime?`: `number`; `startTime?`: `number`; }; `series?`: { `episode?`: `number`; `season?`: `number`; `title?`: `string`; }; `title?`: `string`; `type?`: [`MetadataTypes`](reference/enumerations/MetadataTypes.md); }

###### nextContent.metadata.auxiliaryData?

{[`key`: `string`]: `any`; }

###### nextContent.metadata.channel?

{ `logo?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `name?`: `string`; }

###### nextContent.metadata.channel.logo?

{ `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }

###### nextContent.metadata.channel.logo.height?

`number`

###### nextContent.metadata.channel.logo.type?

`string`

###### nextContent.metadata.channel.logo.url?

`string`

###### nextContent.metadata.channel.logo.width?

`number`

###### nextContent.metadata.channel.name?

`string`

###### nextContent.metadata.description?

`string`

###### nextContent.metadata.images?

`object`[]

###### nextContent.metadata.poster?

{ `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }

###### nextContent.metadata.poster.height?

`number`

###### nextContent.metadata.poster.type?

`string`

###### nextContent.metadata.poster.url?

`string`

###### nextContent.metadata.poster.width?

`number`

###### nextContent.metadata.section?

{ `duration?`: `number`; `endTime?`: `number`; `startTime?`: `number`; }

###### nextContent.metadata.section.duration?

`number`

###### nextContent.metadata.section.endTime?

`number`

###### nextContent.metadata.section.startTime?

`number`

###### nextContent.metadata.series?

{ `episode?`: `number`; `season?`: `number`; `title?`: `string`; }

###### nextContent.metadata.series.episode?

`number`

###### nextContent.metadata.series.season?

`number`

###### nextContent.metadata.series.title?

`string`

###### nextContent.metadata.title?

`string`

###### nextContent.metadata.type?

[`MetadataTypes`](reference/enumerations/MetadataTypes.md)

###### nextContent.nextContent?

`boolean`

###### nextContent.type?

`string`

###### playbackState?

[`PlaybackStates`](reference/enumerations/PlaybackStates.md)

###### seekableRange?

{ `epochSeekable?`: { `initialSeekableStart?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; }; `liveDone?`: `boolean`; `movingWindow?`: `boolean`; `now?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; `stream0Time?`: `number`; }

**Deprecated**

- but kept for backwards compatibility

###### seekableRange.epochSeekable?

{ `initialSeekableStart?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; }

###### seekableRange.epochSeekable.initialSeekableStart?

`number`

###### seekableRange.epochSeekable.seekable?

{ `end?`: `number`; `start?`: `number`; }

###### seekableRange.epochSeekable.seekable.end?

`number`

###### seekableRange.epochSeekable.seekable.start?

`number`

###### seekableRange.liveDone?

`boolean`

###### seekableRange.movingWindow?

`boolean`

###### seekableRange.now?

`number`

###### seekableRange.seekable?

{ `end?`: `number`; `start?`: `number`; }

###### seekableRange.seekable.end?

`number`

###### seekableRange.seekable.start?

`number`

###### seekableRange.stream0Time?

`number`

###### stillWatching?

{ `interactionTimeout?`: `number`; `remaining?`: `number`; }

###### stillWatching.interactionTimeout?

`number`

###### stillWatching.remaining?

`number`

###### stream?

{ `advertisement?`: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `type?`: `string`; `url?`: `string`; }; `auxiliaryData?`: {[`key`: `string`]: `any`; }; `configuration?`: {[`key`: `string`]: `any`; `playbackConfigurationProfiles?`: `string`[]; `playbackEngine?`: {[`key`: `string`]: `any`; `preferred?`: `string`; `restricted?`: `string`[]; `selected?`: `string`; }; }; `containerType?`: [`StreamContainerTypes`](reference/enumerations/StreamContainerTypes.md); `contentType?`: [`StreamContentTypes`](../enumerations/StreamContentTypes.md); `encryption?`: { `cipher?`: [`Aes128`](../enumerations/CipherTypes.md#aes128); `cipherMode?`: [`CipherModeTypes`](../enumerations/CipherModeTypes.md); `initializationVector?`: `number`[]; `key?`: `number`[]; `keyId?`: `number`[]; `padding?`: [`PaddingTypes`](../enumerations/PaddingTypes.md); }; `id?`: `string`; `playbackSessionUrl?`: `string`; `streamRestrictions?`: { `pause?`: `boolean`; `seek?`: `boolean`; }; `streamType?`: [`StreamTypes`](../enumerations/StreamTypes.md); `url?`: `string`; }

###### stream.advertisement?

{ `auxiliaryData?`: {[`key`: `string`]: `any`; }; `type?`: `string`; `url?`: `string`; }

###### stream.advertisement.auxiliaryData?

{[`key`: `string`]: `any`; }

###### stream.advertisement.type?

`string`

###### stream.advertisement.url?

`string`

###### stream.auxiliaryData?

{[`key`: `string`]: `any`; }

###### stream.configuration?

{[`key`: `string`]: `any`; `playbackConfigurationProfiles?`: `string`[]; `playbackEngine?`: {[`key`: `string`]: `any`; `preferred?`: `string`; `restricted?`: `string`[]; `selected?`: `string`; }; }

###### stream.configuration.playbackConfigurationProfiles?

`string`[]

###### stream.configuration.playbackEngine?

{[`key`: `string`]: `any`; `preferred?`: `string`; `restricted?`: `string`[]; `selected?`: `string`; }

###### stream.configuration.playbackEngine.preferred?

`string`

###### stream.configuration.playbackEngine.restricted?

`string`[]

###### stream.configuration.playbackEngine.selected?

`string`

###### stream.containerType?

[`StreamContainerTypes`](reference/enumerations/StreamContainerTypes.md)

###### stream.contentType?

[`StreamContentTypes`](reference/enumerations/StreamContentTypes.md)

###### stream.encryption?

{ `cipher?`: [`Aes128`](reference/enumerations/CipherTypes.md#aes128); `cipherMode?`: [`CipherModeTypes`](../enumerations/CipherModeTypes.md); `initializationVector?`: `number`[]; `key?`: `number`[]; `keyId?`: `number`[]; `padding?`: [`PaddingTypes`](../enumerations/PaddingTypes.md); }

###### stream.encryption.cipher?

[`Aes128`](reference/enumerations/CipherTypes.md#aes128)

###### stream.encryption.cipherMode?

[`CipherModeTypes`](reference/enumerations/CipherModeTypes.md)

###### stream.encryption.initializationVector?

`number`[]

###### stream.encryption.key?

`number`[]

###### stream.encryption.keyId?

`number`[]

###### stream.encryption.padding?

[`PaddingTypes`](reference/enumerations/PaddingTypes.md)

###### stream.id?

`string`

###### stream.playbackSessionUrl?

`string`

###### stream.streamRestrictions?

{ `pause?`: `boolean`; `seek?`: `boolean`; }

###### stream.streamRestrictions.pause?

`boolean`

###### stream.streamRestrictions.seek?

`boolean`

###### stream.streamType?

[`StreamTypes`](reference/enumerations/StreamTypes.md)

###### stream.url?

`string`

###### streamRestrictions?

{ `pause?`: `boolean`; `seek?`: `boolean`; }

###### streamRestrictions.pause?

`boolean`

###### streamRestrictions.seek?

`boolean`

###### timeline?

{ `activeMetadata?`: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `duration?`: `number`; `enabled?`: `boolean`; `id?`: `string`; `isDynamic?`: `boolean`; `metadata?`: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `channel?`: { `logo?`: { `height?`: ...; `type?`: ...; `url?`: ...; `width?`: ...; }; `name?`: `string`; }; `description?`: `string`; `images?`: `object`[]; `poster?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `series?`: { `episode?`: `number`; `season?`: `number`; `title?`: `string`; }; `title?`: `string`; `type?`: [`MetadataTypes`](reference/enumerations/MetadataTypes.md); }; `offset?`: `number`; `once?`: `boolean`; `type?`: [`TimelineItemTypes`](../enumerations/TimelineItemTypes.md); }; `activeSection?`: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `duration?`: `number`; `enabled?`: `boolean`; `id?`: `string`; `isDynamic?`: `boolean`; `offset?`: `number`; `once?`: `boolean`; `sectionType?`: [`TimelineSectionTypes`](../enumerations/TimelineSectionTypes.md); `skippable?`: `boolean`; `type?`: [`TimelineItemTypes`](../enumerations/TimelineItemTypes.md); }; `behavior?`: { `position?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); `seekableEnd?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); `seekableStart?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); `timelineEnd?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); `timelineStart?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); }; `items?`: {[`key`: `string`]: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `duration?`: `number`; `enabled?`: `boolean`; `id?`: `string`; `isDynamic?`: `boolean`; `offset?`: `number`; `once?`: `boolean`; `type?`: [`TimelineItemTypes`](../enumerations/TimelineItemTypes.md); } | `undefined`;
  [`key`: `number`]: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `duration?`: `number`; `enabled?`: `boolean`; `id?`: `string`; `isDynamic?`: `boolean`; `offset?`: `number`; `once?`: `boolean`; `type?`: [`TimelineItemTypes`](reference/enumerations/TimelineItemTypes.md); } | `undefined`; }; `position?`: `number`; `seekable?`: { `end?`: `number`; `start?`: `number`; }; `stream0Time?`: `number`; `streamType?`: [`StreamTypes`](../enumerations/StreamTypes.md); `timelineEnd?`: `number`; `timelineStart?`: `number`; `timelineStartOffset?`: `number`; `timeRepresentation?`: [`TimeRepresentations`](../enumerations/TimeRepresentations.md); }

###### timeline.activeMetadata?

{ `auxiliaryData?`: {[`key`: `string`]: `any`; }; `duration?`: `number`; `enabled?`: `boolean`; `id?`: `string`; `isDynamic?`: `boolean`; `metadata?`: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `channel?`: { `logo?`: { `height?`: ...; `type?`: ...; `url?`: ...; `width?`: ...; }; `name?`: `string`; }; `description?`: `string`; `images?`: `object`[]; `poster?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `series?`: { `episode?`: `number`; `season?`: `number`; `title?`: `string`; }; `title?`: `string`; `type?`: [`MetadataTypes`](reference/enumerations/MetadataTypes.md); }; `offset?`: `number`; `once?`: `boolean`; `type?`: [`TimelineItemTypes`](../enumerations/TimelineItemTypes.md); }

###### timeline.activeMetadata.auxiliaryData?

{[`key`: `string`]: `any`; }

###### timeline.activeMetadata.duration?

`number`

###### timeline.activeMetadata.enabled?

`boolean`

###### timeline.activeMetadata.id?

`string`

###### timeline.activeMetadata.isDynamic?

`boolean`

###### timeline.activeMetadata.metadata?

{ `auxiliaryData?`: {[`key`: `string`]: `any`; }; `channel?`: { `logo?`: { `height?`: ...; `type?`: ...; `url?`: ...; `width?`: ...; }; `name?`: `string`; }; `description?`: `string`; `images?`: `object`[]; `poster?`: { `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }; `series?`: { `episode?`: `number`; `season?`: `number`; `title?`: `string`; }; `title?`: `string`; `type?`: [`MetadataTypes`](reference/enumerations/MetadataTypes.md); }

###### timeline.activeMetadata.metadata.auxiliaryData?

{[`key`: `string`]: `any`; }

###### timeline.activeMetadata.metadata.channel?

{ `logo?`: { `height?`: ...; `type?`: ...; `url?`: ...; `width?`: ...; }; `name?`: `string`; }

###### timeline.activeMetadata.metadata.channel.logo?

{ `height?`: ...; `type?`: ...; `url?`: ...; `width?`: ...; }

###### timeline.activeMetadata.metadata.channel.logo.height?

...

###### timeline.activeMetadata.metadata.channel.logo.type?

...

###### timeline.activeMetadata.metadata.channel.logo.url?

...

###### timeline.activeMetadata.metadata.channel.logo.width?

...

###### timeline.activeMetadata.metadata.channel.name?

`string`

###### timeline.activeMetadata.metadata.description?

`string`

###### timeline.activeMetadata.metadata.images?

`object`[]

###### timeline.activeMetadata.metadata.poster?

{ `height?`: `number`; `type?`: `string`; `url?`: `string`; `width?`: `number`; }

###### timeline.activeMetadata.metadata.poster.height?

`number`

###### timeline.activeMetadata.metadata.poster.type?

`string`

###### timeline.activeMetadata.metadata.poster.url?

`string`

###### timeline.activeMetadata.metadata.poster.width?

`number`

###### timeline.activeMetadata.metadata.series?

{ `episode?`: `number`; `season?`: `number`; `title?`: `string`; }

###### timeline.activeMetadata.metadata.series.episode?

`number`

###### timeline.activeMetadata.metadata.series.season?

`number`

###### timeline.activeMetadata.metadata.series.title?

`string`

###### timeline.activeMetadata.metadata.title?

`string`

###### timeline.activeMetadata.metadata.type?

[`MetadataTypes`](reference/enumerations/MetadataTypes.md)

###### timeline.activeMetadata.offset?

`number`

###### timeline.activeMetadata.once?

`boolean`

###### timeline.activeMetadata.type?

[`TimelineItemTypes`](reference/enumerations/TimelineItemTypes.md)

###### timeline.activeSection?

{ `auxiliaryData?`: {[`key`: `string`]: `any`; }; `duration?`: `number`; `enabled?`: `boolean`; `id?`: `string`; `isDynamic?`: `boolean`; `offset?`: `number`; `once?`: `boolean`; `sectionType?`: [`TimelineSectionTypes`](reference/enumerations/TimelineSectionTypes.md); `skippable?`: `boolean`; `type?`: [`TimelineItemTypes`](../enumerations/TimelineItemTypes.md); }

###### timeline.activeSection.auxiliaryData?

{[`key`: `string`]: `any`; }

###### timeline.activeSection.duration?

`number`

###### timeline.activeSection.enabled?

`boolean`

###### timeline.activeSection.id?

`string`

###### timeline.activeSection.isDynamic?

`boolean`

###### timeline.activeSection.offset?

`number`

###### timeline.activeSection.once?

`boolean`

###### timeline.activeSection.sectionType?

[`TimelineSectionTypes`](reference/enumerations/TimelineSectionTypes.md)

###### timeline.activeSection.skippable?

`boolean`

###### timeline.activeSection.type?

[`TimelineItemTypes`](reference/enumerations/TimelineItemTypes.md)

###### timeline.behavior?

{ `position?`: [`TimelineBehaviors`](reference/enumerations/TimelineBehaviors.md); `seekableEnd?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); `seekableStart?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); `timelineEnd?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); `timelineStart?`: [`TimelineBehaviors`](../enumerations/TimelineBehaviors.md); }

###### timeline.behavior.position?

[`TimelineBehaviors`](reference/enumerations/TimelineBehaviors.md)

###### timeline.behavior.seekableEnd?

[`TimelineBehaviors`](reference/enumerations/TimelineBehaviors.md)

###### timeline.behavior.seekableStart?

[`TimelineBehaviors`](reference/enumerations/TimelineBehaviors.md)

###### timeline.behavior.timelineEnd?

[`TimelineBehaviors`](reference/enumerations/TimelineBehaviors.md)

###### timeline.behavior.timelineStart?

[`TimelineBehaviors`](reference/enumerations/TimelineBehaviors.md)

###### timeline.items?

{[`key`: `string`]: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `duration?`: `number`; `enabled?`: `boolean`; `id?`: `string`; `isDynamic?`: `boolean`; `offset?`: `number`; `once?`: `boolean`; `type?`: [`TimelineItemTypes`](reference/enumerations/TimelineItemTypes.md); } | `undefined`;
[`key`: `number`]: { `auxiliaryData?`: {[`key`: `string`]: `any`; }; `duration?`: `number`; `enabled?`: `boolean`; `id?`: `string`; `isDynamic?`: `boolean`; `offset?`: `number`; `once?`: `boolean`; `type?`: [`TimelineItemTypes`](reference/enumerations/TimelineItemTypes.md); } | `undefined`; }

###### timeline.position?

`number`

###### timeline.seekable?

{ `end?`: `number`; `start?`: `number`; }

###### timeline.seekable.end?

`number`

###### timeline.seekable.start?

`number`

###### timeline.stream0Time?

`number`

###### timeline.streamType?

[`StreamTypes`](reference/enumerations/StreamTypes.md)

###### timeline.timelineEnd?

`number`

###### timeline.timelineStart?

`number`

###### timeline.timelineStartOffset?

`number`

###### timeline.timeRepresentation?

[`TimeRepresentations`](reference/enumerations/TimeRepresentations.md)

###### tracks?

`object`[]

###### volume?

{ `muted?`: `boolean`; `volume?`: `number`; }

###### volume.muted?

`boolean`

###### volume.volume?

`number`

##### deletedPaths

`string`[]

##### events

`string`[]

#### Returns

`void`

#### Inherited from

`StateKeepingSession.notifyImmediateChange`

***

### off()

> **off**<`K`>(`type?`, `subscriber?`): `Emitter`<[`SessionEventPayloads`](reference/interfaces/SessionEventPayloads.md)<[`PlaybackSessionState`](PlaybackSessionState.md)>>

#### Type Parameters

##### K

`K` *extends* keyof [`SessionEventPayloads`](reference/interfaces/SessionEventPayloads.md)<[`PlaybackSessionState`](PlaybackSessionState.md)>

#### Parameters

##### type?

`K`

##### subscriber?

(`e`) => `void`

#### Returns

`Emitter`<[`SessionEventPayloads`](reference/interfaces/SessionEventPayloads.md)<[`PlaybackSessionState`](PlaybackSessionState.md)>>

#### Inherited from

`StateKeepingSession.off`

***

### on()

> **on**<`K`>(`type`, `subscriber`): `Emitter`<[`SessionEventPayloads`](reference/interfaces/SessionEventPayloads.md)<[`PlaybackSessionState`](PlaybackSessionState.md)>>

#### Type Parameters

##### K

`K` *extends* keyof [`SessionEventPayloads`](reference/interfaces/SessionEventPayloads.md)<[`PlaybackSessionState`](PlaybackSessionState.md)>

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

`Emitter`<[`SessionEventPayloads`](reference/interfaces/SessionEventPayloads.md)<[`PlaybackSessionState`](PlaybackSessionState.md)>>

#### Inherited from

`StateKeepingSession.on`

***

### once()

> **once**<`K`>(`type`, `subscriber`): `Emitter`<[`SessionEventPayloads`](reference/interfaces/SessionEventPayloads.md)<[`PlaybackSessionState`](PlaybackSessionState.md)>>

#### Type Parameters

##### K

`K` *extends* keyof [`SessionEventPayloads`](reference/interfaces/SessionEventPayloads.md)<[`PlaybackSessionState`](PlaybackSessionState.md)>

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

`Emitter`<[`SessionEventPayloads`](reference/interfaces/SessionEventPayloads.md)<[`PlaybackSessionState`](PlaybackSessionState.md)>>

#### Inherited from

`StateKeepingSession.once`

***

### removeEventListener()

> **removeEventListener**<`K`>(`type?`, `subscriber?`): `Emitter`<[`SessionEventPayloads`](reference/interfaces/SessionEventPayloads.md)<[`PlaybackSessionState`](PlaybackSessionState.md)>>

#### Type Parameters

##### K

`K` *extends* keyof [`SessionEventPayloads`](reference/interfaces/SessionEventPayloads.md)<[`PlaybackSessionState`](PlaybackSessionState.md)>

#### Parameters

##### type?

`K`

##### subscriber?

(`e`) => `void`

#### Returns

`Emitter`<[`SessionEventPayloads`](reference/interfaces/SessionEventPayloads.md)<[`PlaybackSessionState`](PlaybackSessionState.md)>>

#### Inherited from

`StateKeepingSession.removeEventListener`

***

### reset()

> **reset**(`resetState?`, `eventKeys?`): `void`

#### Parameters

##### resetState?

[`PlaybackSessionState`](reference/interfaces/PlaybackSessionState.md)

##### eventKeys?

`string`[]

#### Returns

`void`

#### Inherited from

`StateKeepingSession.reset`

***

### setActiveAdvertisement()

> **setActiveAdvertisement**(`advertisement?`): `void`

#### Parameters

##### advertisement?

[`Advertisement`](reference/interfaces/Advertisement.md)<[`AdvertisementAuxiliaryData`](AdvertisementAuxiliaryData.md)>

#### Returns

`void`

***

### setActiveAdvertisementBreak()

> **setActiveAdvertisementBreak**(`advertisementBreak?`): `void`

#### Parameters

##### advertisementBreak?

[`AdvertisementBreak`](reference/interfaces/AdvertisementBreak.md) | [`AdvertisementCue`](AdvertisementCue.md)

#### Returns

`void`

***

### setActiveAdvertisementData()

> **setActiveAdvertisementData**(`advertisementBreak?`, `advertisement?`): `void`

#### Parameters

##### advertisementBreak?

[`AdvertisementBreak`](reference/interfaces/AdvertisementBreak.md) | [`AdvertisementCue`](AdvertisementCue.md)

##### advertisement?

[`Advertisement`](reference/interfaces/Advertisement.md)<[`AdvertisementAuxiliaryData`](AdvertisementAuxiliaryData.md)>

#### Returns

`void`

***

### setActiveTimelineMetadata()

> **setActiveTimelineMetadata**(`metadata?`): `void`

#### Parameters

##### metadata?

[`TimelineMetadata`](reference/interfaces/TimelineMetadata.md)

#### Returns

`void`

***

### setActiveTimelineSection()

> **setActiveTimelineSection**(`section?`): `void`

#### Parameters

##### section?

[`TimelineSection`](reference/interfaces/TimelineSection.md)

#### Returns

`void`

***

### setActiveTracks()

> **setActiveTracks**(`activeTracks`): `void`

#### Parameters

##### activeTracks

[`Track`](reference/interfaces/Track.md)[]

#### Returns

`void`

***

### setAdvertisement()

> **setAdvertisement**(`advertisement`, `merge?`): `void`

#### Parameters

##### advertisement

[`LoadedAdvertisement`](reference/interfaces/LoadedAdvertisement.md)

##### merge?

`boolean`

#### Returns

`void`

***

### setBulkedChangesNotifier()

> `protected` **setBulkedChangesNotifier**(`bulkedChangesNotifier`): `void`

#### Parameters

##### bulkedChangesNotifier

`TBulkedChangesNotifier`<[`PlaybackSessionState`](reference/interfaces/PlaybackSessionState.md)>

#### Returns

`void`

#### Inherited from

`StateKeepingSession.setBulkedChangesNotifier`

***

### setContent()

> **setContent**(`content`): `void`

#### Parameters

##### content

[`Content`](reference/interfaces/Content.md)

#### Returns

`void`

***

### setDebug()

> **setDebug**(`value`): `void`

#### Parameters

##### value

`boolean`

#### Returns

`void`

#### Inherited from

`StateKeepingSession.setDebug`

***

### setDuration()

> **setDuration**(`contentDuration`, `absoluteDuration`): `void`

#### Parameters

##### contentDuration

`number`

##### absoluteDuration

`number`

#### Returns

`void`

***

### setError()

> **setError**(`error?`): `void`

#### Parameters

##### error?

[`UselessError`](reference/classes/UselessError.md)<`any`>

#### Returns

`void`

***

### setImmediateChangeNotifier()

> `protected` **setImmediateChangeNotifier**(`immediateChangeNotifier`): `void`

#### Parameters

##### immediateChangeNotifier

`TImmediateChangeNotifier`<[`PlaybackSessionState`](reference/interfaces/PlaybackSessionState.md)>

#### Returns

`void`

#### Inherited from

`StateKeepingSession.setImmediateChangeNotifier`

***

### setLoadedState()

> **setLoadedState**(`state`): `void`

#### Parameters

##### state

`LoadedState`

#### Returns

`void`

***

### setMetadata()

> **setMetadata**(`metadata`): `void`

#### Parameters

##### metadata

[`Metadata`](reference/interfaces/Metadata.md)

#### Returns

`void`

***

### setNextContent()

> **setNextContent**(`content`): `void`

#### Parameters

##### content

[`Content`](reference/interfaces/Content.md)

#### Returns

`void`

***

### setPlaybackState()

> **setPlaybackState**(`playbackState`): `void`

#### Parameters

##### playbackState

[`PlaybackStates`](reference/enumerations/PlaybackStates.md)

#### Returns

`void`

***

### setSeekableRange()

> **setSeekableRange**(`contentSeekableRange?`, `absoluteSeekableRange?`): `void`

#### Parameters

##### contentSeekableRange?

[`SeekableRange`](reference/interfaces/SeekableRange.md)

##### absoluteSeekableRange?

[`SeekableRange`](reference/interfaces/SeekableRange.md)

#### Returns

`void`

***

### setStillWatching()

> **setStillWatching**(`interactionTimeout?`): `void`

#### Parameters

##### interactionTimeout?

`number`

#### Returns

`void`

***

### setStillWatchingRemaining()

> **setStillWatchingRemaining**(`remaining`): `void`

#### Parameters

##### remaining

`number`

#### Returns

`void`

***

### setStream()

> **setStream**(`stream`): `void`

#### Parameters

##### stream

[`Stream`](reference/interfaces/Stream.md)

#### Returns

`void`

***

### setStreamRestrictions()

> **setStreamRestrictions**(`streamRestrictions`): `void`

#### Parameters

##### streamRestrictions

[`StreamRestrictions`](reference/interfaces/StreamRestrictions.md)

#### Returns

`void`

***

### setTime()

> **setTime**(`contentTime`, `contentEpochTime`, `absoluteTime`, `absoluteEpochTime`, `timelinePosition`): `void`

#### Parameters

##### contentTime

`number`

##### contentEpochTime

`number`

##### absoluteTime

`number`

##### absoluteEpochTime

`number`

##### timelinePosition

`number`

#### Returns

`void`

***

### setTimeline()

> **setTimeline**(`timeline`): `void`

#### Parameters

##### timeline

`Optional`<[`Timeline`](reference/interfaces/Timeline.md), `"items"`>

#### Returns

`void`

***

### setTimelineBehavior()

> **setTimelineBehavior**(`behavior`): `void`

#### Parameters

##### behavior

[`TimelineBehavior`](reference/interfaces/TimelineBehavior.md)

#### Returns

`void`

***

### setTimelineItems()

> **setTimelineItems**(`items`): `void`

#### Parameters

##### items

[`TimelineItem`](reference/interfaces/TimelineItem.md)[]

#### Returns

`void`

***

### setTimelinePosition()

> **setTimelinePosition**(`position`): `void`

#### Parameters

##### position

`number`

#### Returns

`void`

***

### setTracks()

> **setTracks**(`tracks`): `void`

#### Parameters

##### tracks

[`Track`](reference/interfaces/Track.md)[]

#### Returns

`void`

***

### setVolume()

> **setVolume**(`volume?`): `void`

#### Parameters

##### volume?

[`Volume`](reference/interfaces/Volume.md)

#### Returns

`void`

***

### updateActiveAdvertisementData()

> **updateActiveAdvertisementData**(`advertisementBreak?`, `advertisement?`): `void`

#### Parameters

##### advertisementBreak?

[`AdvertisementBreak`](reference/interfaces/AdvertisementBreak.md)

##### advertisement?

[`Advertisement`](reference/interfaces/Advertisement.md)<[`AdvertisementAuxiliaryData`](AdvertisementAuxiliaryData.md)>

#### Returns

`void`
