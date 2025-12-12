# StreamController

## Constructors

### Constructor

> **new StreamController**(`args`): `StreamController`

#### Parameters

##### args

`StreamControllerArgs`

#### Returns

`StreamController`

## Properties

### controllerRestrictions

> **controllerRestrictions**: [`StreamControllerRestrictions`](reference/classes/StreamControllerRestrictions.md)

## Methods

### clearRestrictions()

> **clearRestrictions**(): `void`

#### Returns

`void`

***

### getCurrentStream()

> **getCurrentStream**(): `Stream` | `undefined`

#### Returns

`Stream` | `undefined`

***

### getNextStream()

> **getNextStream**(): `Stream` | `undefined`

#### Returns

`Stream` | `undefined`

***

### hasAlternativeStream()

> **hasAlternativeStream**(): `boolean`

#### Returns

`boolean`

***

### prepareStream()

> **prepareStream**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### removePlaybackSessionUrl()

> **removePlaybackSessionUrl**(): `void`

#### Returns

`void`

***

### reset()

> **reset**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### setStreams()

> **setStreams**(`streams`): `void`

#### Parameters

##### streams

`Stream`[]

#### Returns

`void`
