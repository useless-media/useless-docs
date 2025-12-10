# MediaStatusUpdater

## Extends

- `Listener`

## Constructors

### Constructor

> **new MediaStatusUpdater**(`args`): `MediaStatusUpdater`

#### Parameters

##### args

[`MediaStatusUpdaterArgs`](reference/interfaces/MediaStatusUpdaterArgs.md)

#### Returns

`MediaStatusUpdater`

#### Overrides

`Listener.constructor`

## Properties

### defaultListenerCollection?

> `protected` **defaultListenerCollection**?: `Record`<`string`, `TListener`>

#### Inherited from

`Listener.defaultListenerCollection`

***

### defaultTarget?

> `protected` **defaultTarget**?: `TTargetEmitter`

#### Inherited from

`Listener.defaultTarget`

***

### destroyed

> `protected` **destroyed**: `boolean`

#### Inherited from

`Listener.destroyed`

## Methods

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Inherited from

`Listener.destroy`

***

### listen()

> `protected` **listen**(`event`, `listener`, `target?`, `listenerCollection?`): `void`

#### Parameters

##### event

`string`

##### listener

`TListener`

##### target?

`TTargetEmitter`

##### listenerCollection?

`Record`<`string`, `TListener`>

#### Returns

`void`

#### Inherited from

`Listener.listen`

***

### listenOnce()

> `protected` **listenOnce**(`event`, `listener`, `target?`, `listenerCollection?`): `void`

#### Parameters

##### event

`string`

##### listener

`TListener`

##### target?

`TTargetEmitter`

##### listenerCollection?

`Record`<`string`, `TListener`>

#### Returns

`void`

#### Inherited from

`Listener.listenOnce`

***

### reset()

> **reset**(): `void`

#### Returns

`void`

***

### setPlaybackSession()

> **setPlaybackSession**(`playbackSession`): `void`

#### Parameters

##### playbackSession

[`PlaybackSession`](reference/classes/PlaybackSession.md)

#### Returns

`void`

***

### unlisten()

> `protected` **unlisten**(`target?`, `listenerCollection?`, `event?`): `void`

#### Parameters

##### target?

`TTargetEmitter`

##### listenerCollection?

`Record`<`string`, `TListener`>

##### event?

`string`

#### Returns

`void`

#### Inherited from

`Listener.unlisten`
