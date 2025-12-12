# SenderIdentificationMessage<TSenderInformation>

## Extends

- [`UselessMessage`](reference/classes/UselessMessage.md)

## Type Parameters

### TSenderInformation

`TSenderInformation` *extends* [`SenderInformation`](reference/interfaces/SenderInformation.md) = [`SenderInformation`](../interfaces/SenderInformation.md)

## Constructors

### Constructor

> **new SenderIdentificationMessage**<`TSenderInformation`>(`data`): `SenderIdentificationMessage`<`TSenderInformation`>

#### Parameters

##### data

[`SenderIdentificationMessageData`](reference/interfaces/SenderIdentificationMessageData.md)<`TSenderInformation`>

#### Returns

`SenderIdentificationMessage`<`TSenderInformation`>

#### Overrides

[`UselessMessage`](reference/classes/UselessMessage.md).[`constructor`](UselessMessage.md#constructor)

## Properties

### correlationId?

> `readonly` **correlationId**?: `string`

#### Inherited from

[`UselessMessage`](reference/classes/UselessMessage.md).[`correlationId`](UselessMessage.md#correlationid)

***

### data

> `readonly` **data**: [`SenderIdentificationMessageData`](reference/interfaces/SenderIdentificationMessageData.md)<`TSenderInformation`>

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

> `readonly` **type**: `string` = `IncomingUselessMessages.SenderIdentification`

#### Overrides

[`UselessMessage`](reference/classes/UselessMessage.md).[`type`](UselessMessage.md#type)

***

### version

> `readonly` **version**: `number` = `1`

#### Overrides

[`UselessMessage`](reference/classes/UselessMessage.md).[`version`](UselessMessage.md#version)
