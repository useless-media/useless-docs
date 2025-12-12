# PlaybackEngineDelegate

## Properties

### handleBuffered()

> **handleBuffered**: () => `void`

#### Returns

`void`

***

### handleBuffering()

> **handleBuffering**: () => `void`

#### Returns

`void`

***

### handleDroppedFrames()

> **handleDroppedFrames**: (`frames`, `total`) => `void`

#### Parameters

##### frames

`number`

##### total

`number`

#### Returns

`void`

***

### handleDurationChanged()

> **handleDurationChanged**: (`absoluteDuration`) => `void`

#### Parameters

##### absoluteDuration

`number`

#### Returns

`void`

***

### handleError()

> **handleError**: (`error`) => `void`

#### Parameters

##### error

[`WackaError`](reference/classes/WackaError.md)

#### Returns

`void`

***

### handlePaused()

> **handlePaused**: () => `void`

#### Returns

`void`

***

### handlePlaybackMetricsUpdated()

> **handlePlaybackMetricsUpdated**: (`metrics`) => `void`

#### Parameters

##### metrics

[`PlaybackEnginePlaybackMetrics`](reference/interfaces/PlaybackEnginePlaybackMetrics.md)

#### Returns

`void`

***

### handlePlaybackStateChanged()

> **handlePlaybackStateChanged**: (`playbackState`) => `void`

#### Parameters

##### playbackState

`PlaybackStates`

#### Returns

`void`

***

### handlePlaying()

> **handlePlaying**: () => `void`

#### Returns

`void`

***

### handleSeekableRangeUpdated()

> **handleSeekableRangeUpdated**: (`absoluteSeekableRange?`) => `void`

#### Parameters

##### absoluteSeekableRange?

`SeekableRange`

#### Returns

`void`

***

### handleSeeked()

> **handleSeeked**: () => `void`

#### Returns

`void`

***

### handleSeeking()

> **handleSeeking**: () => `void`

#### Returns

`void`

***

### handleSegmentLoaded()

> **handleSegmentLoaded**: (`segmentInformation`) => `void`

#### Parameters

##### segmentInformation

`SegmentInformation`

#### Returns

`void`

***

### handleSourceBuffers()

> **handleSourceBuffers**: (`sourceBuffers`) => `void`

#### Parameters

##### sourceBuffers

[`SourceBuffers`](reference/interfaces/SourceBuffers.md)

#### Returns

`void`

***

### handleStreamCue()

> **handleStreamCue**: (`cue`) => `void`

#### Parameters

##### cue

`StreamCue`

#### Returns

`void`

***

### handleStreamFinished()

> **handleStreamFinished**: (`reason`) => `void`

#### Parameters

##### reason

`StoppedReasons`

#### Returns

`void`

***

### handleStreamLoaded()

> **handleStreamLoaded**: () => `void`

#### Returns

`void`

***

### handleStreamLoading()

> **handleStreamLoading**: () => `void`

#### Returns

`void`

***

### handleTimeUpdated()

> **handleTimeUpdated**: (`absoluteTime`, `absoluteEpochTime`) => `void`

#### Parameters

##### absoluteTime

`number`

##### absoluteEpochTime

`number`

#### Returns

`void`

***

### handleVolumeChanged()

> **handleVolumeChanged**: (`volume`, `muted`) => `void`

#### Parameters

##### volume

`number`

##### muted

`boolean`

#### Returns

`void`
