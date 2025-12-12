# Listener

## Constructors

### Constructor

> **new Listener**(): `Listener`

#### Returns

`Listener`

## Properties

### defaultListenerCollection?

> `protected` **defaultListenerCollection**?: `Record`<`string`, `TListener`>

***

### defaultTarget?

> `protected` **defaultTarget**?: `TTargetEmitter`

***

### destroyed

> `protected` **destroyed**: `boolean` = `false`

## Methods

### destroy()

> **destroy**(): `void`

#### Returns

`void`

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
