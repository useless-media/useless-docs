# PlaybackSessionStateChangedEvent

## Extends

- `EmitterEvent`

## Properties

### changes

> **changes**: `Object`

#### Type declaration

##### absoluteTime?

> **absoluteTime**?: { duration?: number | undefined; position?: number | undefined; }

##### id?

> **id**?: `string`

##### playbackState?

> **playbackState**?: [`PlaybackStates`](reference/enumerations/PlaybackStates.md)

##### tracks?

> **tracks**?: { id?: number | undefined; type?: TrackTypes | undefined; active?: boolean | undefined; language?: ISOLanguage | undefined; name?: string | undefined; roles?: Roles[] | undefined; }[]

##### volume?

> **volume**?: { level?: number | undefined; muted?: boolean | undefined; }

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
