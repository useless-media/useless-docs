# DefaultCommunicationModel

## Implements

- [`ICommunicationModel`](reference/interfaces/ICommunicationModel.md)

## Constructors

### Constructor

> **new DefaultCommunicationModel**(`sender`): `DefaultCommunicationModel`

#### Parameters

##### sender

[`UselessControllerSender`](reference/classes/UselessControllerSender.md)<`any`>

#### Returns

`DefaultCommunicationModel`

## Methods

### destroy()

> **destroy**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Implementation of

[`ICommunicationModel`](reference/interfaces/ICommunicationModel.md).[`destroy`](../interfaces/ICommunicationModel.md#destroy)

***

### transformMessage()

> **transformMessage**(`message`): `Promise`<`AnyMessage` | [`UselessMessage`](reference/classes/UselessMessage.md)>

#### Parameters

##### message

`AnyMessage` | [`UselessMessage`](reference/classes/UselessMessage.md)

#### Returns

`Promise`<`AnyMessage` | [`UselessMessage`](reference/classes/UselessMessage.md)>

#### Implementation of

[`ICommunicationModel`](reference/interfaces/ICommunicationModel.md).[`transformMessage`](../interfaces/ICommunicationModel.md#transformmessage)
