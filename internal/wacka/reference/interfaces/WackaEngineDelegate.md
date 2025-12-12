# WackaEngineDelegate

## Extends

- `Partial`<`DefaultWackaEngineDelegate`>

## Properties

### handleActiveTracksChanged()?

> **handleActiveTracksChanged**?: (`tracks`) => `void`

#### Parameters

##### tracks

`ActiveTracks`

#### Returns

`void`

#### Inherited from

`Partial.handleActiveTracksChanged`

***

### handleAudioTrackChanged()?

> **handleAudioTrackChanged**?: (`track`) => `void`

#### Parameters

##### track

`Track`

#### Returns

`void`

#### Inherited from

`Partial.handleAudioTrackChanged`

***

### handleAutoplayChanged()?

> **handleAutoplayChanged**?: (`autoplay`) => `void`

#### Parameters

##### autoplay

`boolean`

#### Returns

`void`

#### Inherited from

`Partial.handleAutoplayChanged`

***

### handleBuffered()?

> **handleBuffered**?: () => `void`

#### Returns

`void`

#### Inherited from

`Partial.handleBuffered`

***

### handleBuffering()?

> **handleBuffering**?: () => `void`

#### Returns

`void`

#### Inherited from

`Partial.handleBuffering`

***

### handleDrmChanged()?

> **handleDrmChanged**?: (`drm`) => `void`

#### Parameters

##### drm

`Drm`

#### Returns

`void`

#### Inherited from

`Partial.handleDrmChanged`

***

### handleDroppedFrames()?

> **handleDroppedFrames**?: (`frames`, `total`) => `void`

#### Parameters

##### frames

`number`

##### total

`number`

#### Returns

`void`

#### Inherited from

`Partial.handleDroppedFrames`

***

### handleDurationChanged()?

> **handleDurationChanged**?: (`absoluteDuration`) => `void`

#### Parameters

##### absoluteDuration

`number`

#### Returns

`void`

#### Inherited from

`Partial.handleDurationChanged`

***

### handleError()?

> **handleError**?: (`error`) => `void`

#### Parameters

##### error

[`WackaError`](reference/classes/WackaError.md)

#### Returns

`void`

#### Inherited from

`Partial.handleError`

***

### handleMetricsTimeSeriesUpdated()?

> **handleMetricsTimeSeriesUpdated**?: (`timeSeries`) => `void`

#### Parameters

##### timeSeries

[`MetricTimeSeries`](reference/interfaces/MetricTimeSeries.md)

#### Returns

`void`

#### Inherited from

`Partial.handleMetricsTimeSeriesUpdated`

***

### handleMetricsUpdated()?

> **handleMetricsUpdated**?: (`state`) => `void`

#### Parameters

##### state

[`MetricState`](reference/interfaces/MetricState.md)

#### Returns

`void`

#### Inherited from

`Partial.handleMetricsUpdated`

***

### handlePaused()?

> **handlePaused**?: () => `void`

#### Returns

`void`

#### Inherited from

`Partial.handlePaused`

***

### handlePlaybackStateChanged()?

> **handlePlaybackStateChanged**?: (`playbackState`) => `void`

#### Parameters

##### playbackState

`PlaybackStates`

#### Returns

`void`

#### Inherited from

`Partial.handlePlaybackStateChanged`

***

### handlePlaying()?

> **handlePlaying**?: () => `void`

#### Returns

`void`

#### Inherited from

`Partial.handlePlaying`

***

### handleSeekableRangeUpdated()?

> **handleSeekableRangeUpdated**?: (`absoluteSeekableRange`) => `void`

#### Parameters

##### absoluteSeekableRange

`SeekableRange` | `undefined`

#### Returns

`void`

#### Inherited from

`Partial.handleSeekableRangeUpdated`

***

### handleSeeked()?

> **handleSeeked**?: () => `void`

#### Returns

`void`

#### Inherited from

`Partial.handleSeeked`

***

### handleSeeking()?

> **handleSeeking**?: () => `void`

#### Returns

`void`

#### Inherited from

`Partial.handleSeeking`

***

### handleSegmentLoaded()?

> **handleSegmentLoaded**?: (`segmentInformation`) => `void`

#### Parameters

##### segmentInformation

`SegmentInformation`

#### Returns

`void`

#### Inherited from

`Partial.handleSegmentLoaded`

***

### handleStreamChanged()?

> **handleStreamChanged**?: (`stream`) => `void`

#### Parameters

##### stream

`Stream`

#### Returns

`void`

#### Inherited from

`Partial.handleStreamChanged`

***

### handleStreamCue()?

> **handleStreamCue**?: (`streamCue`) => `void`

#### Parameters

##### streamCue

`StreamCue`

#### Returns

`void`

#### Inherited from

`Partial.handleStreamCue`

***

### handleStreamFinished()?

> **handleStreamFinished**?: (`reason`) => `void`

#### Parameters

##### reason

`StoppedReasons`

#### Returns

`void`

#### Inherited from

`Partial.handleStreamFinished`

***

### handleStreamLoaded()?

> **handleStreamLoaded**?: () => `void`

#### Returns

`void`

#### Inherited from

`Partial.handleStreamLoaded`

***

### handleStreamLoading()?

> **handleStreamLoading**?: () => `void`

#### Returns

`void`

#### Inherited from

`Partial.handleStreamLoading`

***

### handleTextTrackChanged()?

> **handleTextTrackChanged**?: (`track?`) => `void`

#### Parameters

##### track?

`Track`

#### Returns

`void`

#### Inherited from

`Partial.handleTextTrackChanged`

***

### handleTimeUpdated()?

> **handleTimeUpdated**?: (`absoluteTime`, `absoluteEpochTime`) => `void`

#### Parameters

##### absoluteTime

`number`

##### absoluteEpochTime

`number`

#### Returns

`void`

#### Inherited from

`Partial.handleTimeUpdated`

***

### handleTracksUpdated()?

> **handleTracksUpdated**?: (`tracks`) => `void`

#### Parameters

##### tracks

`Track`[]

#### Returns

`void`

#### Inherited from

`Partial.handleTracksUpdated`

***

### handleVideoTrackChanged()?

> **handleVideoTrackChanged**?: (`track`, `previous?`) => `void`

#### Parameters

##### track

`VideoTrack`

##### previous?

`VideoTrack`

#### Returns

`void`

#### Inherited from

`Partial.handleVideoTrackChanged`

***

### handleVolumeChanged()?

> **handleVolumeChanged**?: (`volume`, `muted`) => `void`

#### Parameters

##### volume

`number`

##### muted

`boolean`

#### Returns

`void`

#### Inherited from

`Partial.handleVolumeChanged`

***

### recoveryActivityChanged()?

> **recoveryActivityChanged**?: (`active`, `report`) => `void`

#### Parameters

##### active

`boolean`

##### report

`Record`<`string`, `any`>

#### Returns

`void`

#### Inherited from

`Partial.recoveryActivityChanged`
