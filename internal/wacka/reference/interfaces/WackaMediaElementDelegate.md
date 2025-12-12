# WackaMediaElementDelegate

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

### handleCanPlay()?

> **handleCanPlay**?: () => `void`

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

### handleDurationChange()

> **handleDurationChange**: () => `void`

#### Returns

`void`

***

### handleEnded()

> **handleEnded**: () => `void`

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

### handleLoaded()

> **handleLoaded**: () => `void`

#### Returns

`void`

***

### handleLoadedData()?

> **handleLoadedData**?: () => `void`

#### Returns

`void`

***

### handleLoadedMetadata()?

> **handleLoadedMetadata**?: () => `void`

#### Returns

`void`

***

### handleLoading()

> **handleLoading**: () => `void`

#### Returns

`void`

***

### handleLoadStart()?

> **handleLoadStart**?: () => `void`

#### Returns

`void`

***

### handlePause()

> **handlePause**: () => `void`

#### Returns

`void`

***

### handlePlaybackMetricsUpdated()

> **handlePlaybackMetricsUpdated**: (`metrics`) => `void`

#### Parameters

##### metrics

[`WackaMediaElementPlaybackMetrics`](reference/interfaces/WackaMediaElementPlaybackMetrics.md)

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

> **handlePlaying**: (`initial`) => `void`

#### Parameters

##### initial

`boolean`

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

### handleStopped()?

> **handleStopped**?: () => `void`

#### Returns

`void`

***

### handleTimeUpdate()

> **handleTimeUpdate**: (`absoluteTime`) => `void`

#### Parameters

##### absoluteTime

`number`

#### Returns

`void`

***

### handleVolumeChange()

> **handleVolumeChange**: (`volume`, `muted`) => `void`

#### Parameters

##### volume

`number`

##### muted

`boolean`

#### Returns

`void`
