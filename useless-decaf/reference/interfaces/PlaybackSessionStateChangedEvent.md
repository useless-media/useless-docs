# PlaybackSessionStateChangedEvent

## Extends

- `EmitterEvent`

## Properties

### changes

> **changes**: `Object`

#### Type declaration

##### absoluteTime?

> **absoluteTime**?: `Object`

##### absoluteTime.duration?

> **absoluteTime.duration**?: `number`

##### absoluteTime.position?

> **absoluteTime.position**?: `number`

##### id?

> **id**?: `string`

##### playbackState?

> **playbackState**?: [`PlaybackStates`](reference/enumerations/PlaybackStates.md)

##### tracks?

> **tracks**?: `Object`[]

##### volume?

> **volume**?: `Object`

##### volume.level?

> **volume.level**?: `number`

##### volume.muted?

> **volume.muted**?: `boolean`

***

### deletedPaths

> **deletedPaths**: `string`[]

***

### events

> **events**: `string`[]

***

### type

> **type**: `string`

#### Inherited from

`EmitterEvent.type`
