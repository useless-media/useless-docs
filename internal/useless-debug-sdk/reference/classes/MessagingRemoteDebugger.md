# MessagingRemoteDebugger

## Extends

- [`RemoteDebugger`](reference/classes/RemoteDebugger.md)

## Constructors

### Constructor

> `protected` **new MessagingRemoteDebugger**(`args?`): `MessagingRemoteDebugger`

#### Parameters

##### args?

[`MessagingRemoteDebuggerArgs`](reference/interfaces/MessagingRemoteDebuggerArgs.md)

#### Returns

`MessagingRemoteDebugger`

#### Overrides

[`RemoteDebugger`](reference/classes/RemoteDebugger.md).[`constructor`](RemoteDebugger.md#constructor)

## Properties

### configuration

> `protected` **configuration**: `Required`<[`MessagingRemoteDebuggerConfiguration`](reference/interfaces/MessagingRemoteDebuggerConfiguration.md)>

***

### debugger

> `protected` **debugger**: [`Debugger`](reference/classes/Debugger.md)

#### Inherited from

[`RemoteDebugger`](reference/classes/RemoteDebugger.md).[`debugger`](RemoteDebugger.md#debugger)

## Methods

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Overrides

[`RemoteDebugger`](reference/classes/RemoteDebugger.md).[`destroy`](RemoteDebugger.md#destroy)

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

#### Inherited from

[`RemoteDebugger`](reference/classes/RemoteDebugger.md).[`receive`](RemoteDebugger.md#receive)

***

### receiveMessage()

> `abstract` **receiveMessage**(`message`): `Promise`<`void`>

#### Parameters

##### message

`UselessMessage`

#### Returns

`Promise`<`void`>

***

### reset()

> **reset**(): `void`

#### Returns

`void`

#### Overrides

[`RemoteDebugger`](reference/classes/RemoteDebugger.md).[`reset`](RemoteDebugger.md#reset)

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

#### Inherited from

[`RemoteDebugger`](reference/classes/RemoteDebugger.md).[`send`](RemoteDebugger.md#send)

***

### sendMessage()

> **sendMessage**(`message`): `Promise`<`void`>

#### Parameters

##### message

`UselessMessage`

#### Returns

`Promise`<`void`>

***

### setSendMessage()

> **setSendMessage**(`sendMessage?`): `Promise`<`void`>

#### Parameters

##### sendMessage?

`IMessagingSendMessage`<`UselessMessage`>

#### Returns

`Promise`<`void`>
