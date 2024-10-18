# UselessSender

## Extends

- `ListenableListener`<[`SenderEventList`](reference/interfaces/SenderEventList.md)>

## Constructors

### new UselessSender(configuration)

> **new UselessSender**(`configuration`?): [`UselessSender`](reference/classes/UselessSender.md)

#### Parameters

• **configuration?**: `Partial`<[`UselessSenderConfiguration`](reference/classes/UselessSenderConfiguration.md)>

#### Returns

[`UselessSender`](reference/classes/UselessSender.md)

#### Overrides

`ListenableListener<SenderEventList>.constructor`

## Properties

### debug

> **debug**: `Debug`

***

### defaultListenerCollection?

> **`protected`** **defaultListenerCollection**?: `Record`<`string`, `TListener`>

#### Inherited from

`ListenableListener.defaultListenerCollection`

***

### defaultTarget?

> **`protected`** **defaultTarget**?: `TTargetEmitter`

#### Inherited from

`ListenableListener.defaultTarget`

***

### destroyed

> **`protected`** **destroyed**: `boolean`

#### Inherited from

`ListenableListener.destroyed`

***

### devicesFound

> **devicesFound**: `boolean` = `false`

***

### supported

> **supported**: `boolean` = `false`

## Accessors

### initialized

> **`get`** **initialized**(): `boolean`

#### Returns

`boolean`

***

### initializedPromise

> **`get`** **initializedPromise**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### ready

> **`get`** **ready**(): `boolean`

#### Returns

`boolean`

***

### readyPromise

> **`get`** **readyPromise**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### session

> **`get`** **session**(): `undefined` | [`ISession`](reference/interfaces/ISession.md)

#### Returns

`undefined` | [`ISession`](reference/interfaces/ISession.md)

## Methods

### addEventListener()

> **addEventListener**<`K`>(`type`, `subscriber`): `Emitter`<[`SenderEventList`](reference/interfaces/SenderEventList.md)>

#### Type parameters

• **K** extends keyof [`SenderEventList`](reference/interfaces/SenderEventList.md)

#### Parameters

• **type**: `K`

• **subscriber**: (`e`) => `void`

#### Returns

`Emitter`<[`SenderEventList`](reference/interfaces/SenderEventList.md)>

#### Inherited from

`ListenableListener.addEventListener`

***

### cast()

> **cast**(`load`): `Promise`<`void`>

#### Parameters

• **load**: [`Load`](reference/functions/Load.md)

#### Returns

`Promise`<`void`>

***

### connect()

> **connect**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### destroy()

> **destroy**(`stopCasting`?): `Promise`<`void`>

#### Parameters

• **stopCasting?**: `boolean`

#### Returns

`Promise`<`void`>

#### Overrides

`ListenableListener.destroy`

***

### disconnect()

> **disconnect**(`stopCasting`?): `Promise`<`void`>

#### Parameters

• **stopCasting?**: `boolean`

#### Returns

`Promise`<`void`>

***

### emit()

> **emit**<`K`>(`type`, `event`?): `Emitter`<[`SenderEventList`](reference/interfaces/SenderEventList.md)>

#### Type parameters

• **K** extends keyof [`SenderEventList`](reference/interfaces/SenderEventList.md)

#### Parameters

• **type**: `K`

• **event?**: `Optional`<[`SenderEventList`](reference/interfaces/SenderEventList.md)[`K`], `"type"`>

#### Returns

`Emitter`<[`SenderEventList`](reference/interfaces/SenderEventList.md)>

#### Inherited from

`ListenableListener.emit`

***

### emitAsync()

> **emitAsync**<`K`>(`type`, `event`?): `Emitter`<[`SenderEventList`](reference/interfaces/SenderEventList.md)>

#### Type parameters

• **K** extends keyof [`SenderEventList`](reference/interfaces/SenderEventList.md)

#### Parameters

• **type**: `K`

• **event?**: `Optional`<[`SenderEventList`](reference/interfaces/SenderEventList.md)[`K`], `"type"`>

#### Returns

`Emitter`<[`SenderEventList`](reference/interfaces/SenderEventList.md)>

#### Inherited from

`ListenableListener.emitAsync`

***

### ensureNotDestroyed()

> **`protected`** **ensureNotDestroyed**(`subscriber`): (...`args`) => `void`

#### Parameters

• **subscriber**: `TSubscriber`

#### Returns

`Function`

> ##### Parameters
>
> • ...**args**: `any`[]
>
> ##### Returns
>
> `void`
>

#### Inherited from

`ListenableListener.ensureNotDestroyed`

***

### initialize()

> **initialize**(`configuration`?): `Promise`<`void`>

#### Parameters

• **configuration?**: `Partial`<[`UselessSenderConfiguration`](reference/classes/UselessSenderConfiguration.md)>

#### Returns

`Promise`<`void`>

***

### listen()

> **`protected`** **listen**(`event`, `listener`, `target`?, `listenerCollection`?): `void`

#### Parameters

• **event**: `string`

• **listener**: `TListener`

• **target?**: `TTargetEmitter`

• **listenerCollection?**: `Record`<`string`, `TListener`>

#### Returns

`void`

#### Inherited from

`ListenableListener.listen`

***

### listenOnce()

> **`protected`** **listenOnce**(`event`, `listener`, `target`?, `listenerCollection`?): `void`

#### Parameters

• **event**: `string`

• **listener**: `TListener`

• **target?**: `TTargetEmitter`

• **listenerCollection?**: `Record`<`string`, `TListener`>

#### Returns

`void`

#### Inherited from

`ListenableListener.listenOnce`

***

### off()

> **off**<`K`>(`type`?, `subscriber`?): `Emitter`<[`SenderEventList`](reference/interfaces/SenderEventList.md)>

#### Type parameters

• **K** extends keyof [`SenderEventList`](reference/interfaces/SenderEventList.md)

#### Parameters

• **type?**: `K`

• **subscriber?**: (`e`) => `void`

#### Returns

`Emitter`<[`SenderEventList`](reference/interfaces/SenderEventList.md)>

#### Inherited from

`ListenableListener.off`

***

### on()

> **on**<`K`>(`type`, `subscriber`): `Emitter`<[`SenderEventList`](reference/interfaces/SenderEventList.md)>

#### Type parameters

• **K** extends keyof [`SenderEventList`](reference/interfaces/SenderEventList.md)

#### Parameters

• **type**: `K`

• **subscriber**: (`e`) => `void`

#### Returns

`Emitter`<[`SenderEventList`](reference/interfaces/SenderEventList.md)>

#### Inherited from

`ListenableListener.on`

***

### once()

> **once**<`K`>(`type`, `subscriber`): `Emitter`<[`SenderEventList`](reference/interfaces/SenderEventList.md)>

#### Type parameters

• **K** extends keyof [`SenderEventList`](reference/interfaces/SenderEventList.md)

#### Parameters

• **type**: `K`

• **subscriber**: (`e`) => `void`

#### Returns

`Emitter`<[`SenderEventList`](reference/interfaces/SenderEventList.md)>

#### Inherited from

`ListenableListener.once`

***

### removeEventListener()

> **removeEventListener**<`K`>(`type`?, `subscriber`?): `Emitter`<[`SenderEventList`](reference/interfaces/SenderEventList.md)>

#### Type parameters

• **K** extends keyof [`SenderEventList`](reference/interfaces/SenderEventList.md)

#### Parameters

• **type?**: `K`

• **subscriber?**: (`e`) => `void`

#### Returns

`Emitter`<[`SenderEventList`](reference/interfaces/SenderEventList.md)>

#### Inherited from

`ListenableListener.removeEventListener`

***

### setDebug()

> **setDebug**(`value`): `void`

#### Parameters

• **value**: `boolean`

#### Returns

`void`

#### Inherited from

`ListenableListener.setDebug`

***

### setEmulatorUrl()

> **setEmulatorUrl**(`url`): `void`

#### Parameters

• **url**: `string`

#### Returns

`void`

***

### unlisten()

> **`protected`** **unlisten**(`target`?, `listenerCollection`?, `event`?): `void`

#### Parameters

• **target?**: `TTargetEmitter`

• **listenerCollection?**: `Record`<`string`, `TListener`>

• **event?**: `string`

#### Returns

`void`

#### Inherited from

`ListenableListener.unlisten`

***

### useEmulator()

> **useEmulator**(`use`): `void`

#### Parameters

• **use**: `boolean`= `true`

#### Returns

`void`

***

### getInstance()

> **`static`** **getInstance**(`options`?): [`UselessSender`](reference/classes/UselessSender.md)

#### Parameters

• **options?**: `Partial`<[`UselessSenderConfiguration`](reference/classes/UselessSenderConfiguration.md)>

#### Returns

[`UselessSender`](reference/classes/UselessSender.md)
