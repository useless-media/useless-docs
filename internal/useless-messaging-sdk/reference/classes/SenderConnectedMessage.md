# SenderConnectedMessage

## Extends

- [`UselessMessage`](reference/classes/UselessMessage.md)

## Constructors

### Constructor

> **new SenderConnectedMessage**(`connectionId`, `userAgent?`): `SenderConnectedMessage`

#### Parameters

##### connectionId

`string`

##### userAgent?

`string`

#### Returns

`SenderConnectedMessage`

#### Overrides

[`UselessMessage`](reference/classes/UselessMessage.md).[`constructor`](UselessMessage.md#constructor)

## Properties

### correlationId?

> `readonly` **correlationId**?: `string`

#### Inherited from

[`UselessMessage`](reference/classes/UselessMessage.md).[`correlationId`](UselessMessage.md#correlationid)

***

### data

> `readonly` **data**: [`SenderConnectedMessageData`](reference/interfaces/SenderConnectedMessageData.md)

#### Overrides

[`UselessMessage`](reference/classes/UselessMessage.md).[`data`](UselessMessage.md#data)

***

### id

> `readonly` **id**: `string`

#### Inherited from

[`UselessMessage`](reference/classes/UselessMessage.md).[`id`](UselessMessage.md#id)

***

### namespace?

> **namespace**?: `string`

#### Inherited from

[`UselessMessage`](reference/classes/UselessMessage.md).[`namespace`](UselessMessage.md#namespace)

***

### receiverId?

> **receiverId**?: `string`

#### Inherited from

[`UselessMessage`](reference/classes/UselessMessage.md).[`receiverId`](UselessMessage.md#receiverid)

***

### senderId?

> **senderId**?: `string`

#### Inherited from

[`UselessMessage`](reference/classes/UselessMessage.md).[`senderId`](UselessMessage.md#senderid)

***

### sessionId?

> **sessionId**?: `string`

#### Inherited from

[`UselessMessage`](reference/classes/UselessMessage.md).[`sessionId`](UselessMessage.md#sessionid)

***

### type

> `readonly` **type**: `string` = `IncomingUselessMessages.SenderConnected`

#### Overrides

[`UselessMessage`](reference/classes/UselessMessage.md).[`type`](UselessMessage.md#type)

***

### version

> `readonly` **version**: `number` = `1`

#### Overrides

[`UselessMessage`](reference/classes/UselessMessage.md).[`version`](UselessMessage.md#version)
