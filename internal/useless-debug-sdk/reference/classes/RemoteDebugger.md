# RemoteDebugger

## Extended by

- [`MessagingRemoteDebugger`](reference/classes/MessagingRemoteDebugger.md)

## Constructors

### Constructor

> `protected` **new RemoteDebugger**(`args?`): `RemoteDebugger`

#### Parameters

##### args?

[`RemoteDebuggerArgs`](reference/interfaces/RemoteDebuggerArgs.md)

#### Returns

`RemoteDebugger`

## Properties

### debugger

> `protected` **debugger**: [`Debugger`](reference/classes/Debugger.md)

## Methods

### destroy()

> **destroy**(): `void`

#### Returns

`void`

***

### receive()

> `abstract` **receive**(`describeObjects`, `correlationId?`): `Promise`<`void`>

#### Parameters

##### describeObjects

`DescribeObject`[]

##### correlationId?

`string`

#### Returns

`Promise`<`void`>

***

### reset()

> **reset**(): `void`

#### Returns

`void`

***

### send()

> `abstract` **send**(`describedObjects`, `correlationId?`): `Promise`<`void`>

#### Parameters

##### describedObjects

`DescribedObject`[]

##### correlationId?

`string`

#### Returns

`Promise`<`void`>
