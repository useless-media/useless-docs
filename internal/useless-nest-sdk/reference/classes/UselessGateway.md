# UselessGateway

## Implements

- `OnGatewayConnection`

## Constructors

### Constructor

> `protected` **new UselessGateway**(`logger`, `configuration`): `UselessGateway`

#### Parameters

##### logger

`Logger`

##### configuration

[`UselessGatewayConfiguration`](reference/classes/UselessGatewayConfiguration.md) = `...`

#### Returns

`UselessGateway`

## Properties

### configuration

> `protected` **configuration**: [`UselessGatewayConfiguration`](reference/classes/UselessGatewayConfiguration.md)

***

### logger

> `protected` `readonly` **logger**: `Logger`

***

### namespace

> `abstract` `protected` `readonly` **namespace**: `Namespace`

***

### room

> `abstract` `protected` `readonly` **room**: `string`

## Methods

### disconnect()

> `protected` **disconnect**(`socket`): `void`

#### Parameters

##### socket

[`UselessSocket`](reference/interfaces/UselessSocket.md)

#### Returns

`void`

***

### emit()

> `protected` **emit**(`socket`, `type`, `message`): `void`

#### Parameters

##### socket

[`UselessSocket`](reference/interfaces/UselessSocket.md)

##### type

`string`

##### message

[`IUselessGatewayMessage`](reference/interfaces/IUselessGatewayMessage.md)

#### Returns

`void`

***

### emitToAll()

> `protected` **emitToAll**(`type`, `message`, `room`, `local`): `void`

#### Parameters

##### type

`string`

##### message

[`IUselessGatewayMessage`](reference/interfaces/IUselessGatewayMessage.md)

##### room

`string` = `...`

##### local

`boolean` = `false`

#### Returns

`void`

***

### handleAuthenticatedConnection()

> `protected` **handleAuthenticatedConnection**(`socket`): `Promise`<`void`>

#### Parameters

##### socket

[`UselessSocket`](reference/interfaces/UselessSocket.md)

#### Returns

`Promise`<`void`>

***

### handleConnection()

> **handleConnection**(`socket`): `Promise`<`void`>

#### Parameters

##### socket

[`UselessSocket`](reference/interfaces/UselessSocket.md)

#### Returns

`Promise`<`void`>

#### Implementation of

`OnGatewayConnection.handleConnection`

***

### sendError()

> `protected` **sendError**(`socket`, `data`): `void`

#### Parameters

##### socket

[`UselessSocket`](reference/interfaces/UselessSocket.md)

##### data

[`IUselessGatewayError`](reference/interfaces/IUselessGatewayError.md)

#### Returns

`void`
