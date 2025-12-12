# TracksIntegration

## Constructors

### Constructor

> `protected` **new TracksIntegration**(): `TracksIntegration`

#### Returns

`TracksIntegration`

## Properties

### activeTracksRefs

> `protected` **activeTracksRefs**: `string`[] = `[]`

***

### delegate?

> `abstract` `protected` **delegate**?: [`TracksIntegrationDelegate`](reference/interfaces/TracksIntegrationDelegate.md)

***

### ready

> **ready**: `Promised`<`void`>

## Methods

### configurePlayer()

> `abstract` **configurePlayer**(`preferred`): `void`

#### Parameters

##### preferred

`PreferredLanguage`

#### Returns

`void`

***

### destroy()

> **destroy**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### getActiveTracks()

> `abstract` **getActiveTracks**(): `string`[]

Should return a list on active refIds as Array<string>

#### Returns

`string`[]

***

### reset()

> **reset**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### setAudioTrack()

> `abstract` **setAudioTrack**(`track?`): `void`

#### Parameters

##### track?

`Track`

#### Returns

`void`

***

### setDelegate()

> **setDelegate**(`delegate`): `void`

#### Parameters

##### delegate

[`TracksIntegrationDelegate`](reference/interfaces/TracksIntegrationDelegate.md)

#### Returns

`void`

***

### setTextTrack()

> `abstract` **setTextTrack**(`track?`): `void`

#### Parameters

##### track?

`Track`

#### Returns

`void`

***

### updateActiveChanged()

> `protected` **updateActiveChanged**(`nextActive`): `boolean`

#### Parameters

##### nextActive

`string`[]

#### Returns

`boolean`
