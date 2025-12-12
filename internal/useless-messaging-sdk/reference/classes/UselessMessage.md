# UselessMessage

## Extended by

- [`SenderConnectedMessage`](reference/classes/SenderConnectedMessage.md)
- [`SenderDisconnectedMessage`](reference/classes/SenderDisconnectedMessage.md)
- [`SenderHeartbeatMessage`](reference/classes/SenderHeartbeatMessage.md)
- [`SenderIdentificationMessage`](reference/classes/SenderIdentificationMessage.md)
- [`SenderIdentifyMessage`](reference/classes/SenderIdentifyMessage.md)
- [`UselessAcknowledgeMessage`](reference/classes/UselessAcknowledgeMessage.md)

## Implements

- `EmitterEvent`

## Constructors

### Constructor

> `protected` **new UselessMessage**(`correlationId?`): `UselessMessage`

#### Parameters

##### correlationId?

`string`

#### Returns

`UselessMessage`

## Properties

### correlationId?

> `readonly` **correlationId**?: `string`

***

### data

> `abstract` `readonly` **data**: `AnyMessage`

***

### id

> `readonly` **id**: `string`

***

### namespace?

> **namespace**?: `string`

***

### receiverId?

> **receiverId**?: `string`

***

### senderId?

> **senderId**?: `string`

***

### sessionId?

> **sessionId**?: `string`

***

### type

> `abstract` `readonly` **type**: `string`

#### Implementation of

`EmitterEvent.type`

***

### version

> `abstract` `readonly` **version**: `number`
