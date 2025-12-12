# UselessControllerSender<T>

## Extends

- `ListenableListener`<`T`>

## Type Parameters

### T

`T` *extends* `EmitterEventList`

## Implements

- [`IControllerSender`](reference/interfaces/IControllerSender.md)

## Constructors

### Constructor

> **new UselessControllerSender**<`T`>(`args`): `UselessControllerSender`<`T`>

#### Parameters

##### args

[`UselessControllerSenderArgs`](reference/interfaces/UselessControllerSenderArgs.md)

#### Returns

`UselessControllerSender`<`T`>

#### Overrides

`ListenableListener<T>.constructor`

## Properties

### auxiliaryData

> **auxiliaryData**: `Record`<`string`, `any`>

#### Implementation of

[`IControllerSender`](reference/interfaces/IControllerSender.md).[`auxiliaryData`](../interfaces/IControllerSender.md#auxiliarydata)

***

### communicationModel

> **communicationModel**: [`ICommunicationModel`](reference/interfaces/ICommunicationModel.md)

***

### communicationModelIdentification

> **communicationModelIdentification**: [`CommunicationModelIdentification`](reference/interfaces/CommunicationModelIdentification.md)

***

### communicationModelInformation

> **communicationModelInformation**: [`SenderCommunicationModelInformation`](reference/interfaces/SenderCommunicationModelInformation.md)

***

### defaultListenerCollection?

> `protected` **defaultListenerCollection**?: `Record`<`string`, `TListener`>

#### Inherited from

`ListenableListener.defaultListenerCollection`

***

### defaultTarget?

> `protected` **defaultTarget**?: `TTargetEmitter`

#### Inherited from

`ListenableListener.defaultTarget`

***

### destroyed

> `protected` **destroyed**: `boolean`

#### Inherited from

`ListenableListener.destroyed`

***

### device?

> **device**?: [`SenderDeviceInformation`](reference/interfaces/SenderDeviceInformation.md)

***

### id

> **id**: `string`

#### Implementation of

[`IControllerSender`](reference/interfaces/IControllerSender.md).[`id`](../interfaces/IControllerSender.md#id)

***

### identified

> **identified**: `boolean`

***

### lastInteraction?

> **lastInteraction**?: `number`

#### Implementation of

[`IControllerSender`](reference/interfaces/IControllerSender.md).[`lastInteraction`](../interfaces/IControllerSender.md#lastinteraction)

***

### type

> **type**: [`SenderTypes`](reference/enumerations/SenderTypes.md)

#### Implementation of

[`IControllerSender`](reference/interfaces/IControllerSender.md).[`type`](../interfaces/IControllerSender.md#type)

***

### userAgent

> **userAgent**: `string`

#### Implementation of

[`IControllerSender`](reference/interfaces/IControllerSender.md).[`userAgent`](../interfaces/IControllerSender.md#useragent)

***

### version

> **version**: `string`

#### Implementation of

[`IControllerSender`](reference/interfaces/IControllerSender.md).[`version`](../interfaces/IControllerSender.md#version)

## Methods

### addEventListener()

> **addEventListener**<`K`>(`type`, `subscriber`): `Emitter`<`T`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

`Emitter`<`T`>

#### Inherited from

`ListenableListener.addEventListener`

***

### destroy()

> **destroy**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Overrides

`ListenableListener.destroy`

***

### emit()

> **emit**<`K`>(`type`, `event?`): `Emitter`<`T`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type

`K`

##### event?

`Optional`<`T`[`K`], `"type"`>

#### Returns

`Emitter`<`T`>

#### Inherited from

`ListenableListener.emit`

***

### emitAsync()

> **emitAsync**<`K`>(`type`, `event?`): `Emitter`<`T`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type

`K`

##### event?

`Optional`<`T`[`K`], `"type"`>

#### Returns

`Emitter`<`T`>

#### Inherited from

`ListenableListener.emitAsync`

***

### ensureNotDestroyed()

> `protected` **ensureNotDestroyed**(`subscriber`): (...`args`) => `void`

#### Parameters

##### subscriber

`TSubscriber`

#### Returns

> (...`args`): `void`

##### Parameters

###### args

...`any`[]

##### Returns

`void`

#### Inherited from

`ListenableListener.ensureNotDestroyed`

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

`ListenableListener.listen`

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

`ListenableListener.listenOnce`

***

### off()

> **off**<`K`>(`type?`, `subscriber?`): `Emitter`<`T`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type?

`K`

##### subscriber?

(`e`) => `void`

#### Returns

`Emitter`<`T`>

#### Inherited from

`ListenableListener.off`

***

### on()

> **on**<`K`>(`type`, `subscriber`): `Emitter`<`T`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

`Emitter`<`T`>

#### Inherited from

`ListenableListener.on`

***

### once()

> **once**<`K`>(`type`, `subscriber`): `Emitter`<`T`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type

`K`

##### subscriber

(`e`) => `void`

#### Returns

`Emitter`<`T`>

#### Inherited from

`ListenableListener.once`

***

### registerCommunicationChannel()

> **registerCommunicationChannel**(`communicationChannel`): `void`

#### Parameters

##### communicationChannel

[`ICommunicationChannel`](reference/interfaces/ICommunicationChannel.md)<`any`>

#### Returns

`void`

***

### removeEventListener()

> **removeEventListener**<`K`>(`type?`, `subscriber?`): `Emitter`<`T`>

#### Type Parameters

##### K

`K` *extends* `string` | `number` | `symbol`

#### Parameters

##### type?

`K`

##### subscriber?

(`e`) => `void`

#### Returns

`Emitter`<`T`>

#### Inherited from

`ListenableListener.removeEventListener`

***

### sendAnyMessage()

> **sendAnyMessage**(`message`, `namespace?`): `Promise`<`void`>

#### Parameters

##### message

`AnyMessage`

##### namespace?

`string`

#### Returns

`Promise`<`void`>

***

### sendMessage()

> **sendMessage**(`message`, `namespace?`): `Promise`<`void`>

#### Parameters

##### message

[`UselessMessage`](reference/classes/UselessMessage.md)

##### namespace?

`string`

#### Returns

`Promise`<`void`>

***

### setDebug()

> **setDebug**(`value`): `void`

#### Parameters

##### value

`boolean`

#### Returns

`void`

#### Inherited from

`ListenableListener.setDebug`

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

`ListenableListener.unlisten`
