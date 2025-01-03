# UselessSender

## Extends

- `ListenableListener`<[`UselessSenderEventList`](reference/interfaces/UselessSenderEventList.md)>

## Constructors

### new UselessSender()

> **new UselessSender**(`configuration`?): [`UselessSender`](reference/classes/UselessSender.md)

#### Parameters

• **configuration?**: `Partial`<[`UselessSenderConfiguration`](reference/classes/UselessSenderConfiguration.md)>

#### Returns

[`UselessSender`](reference/classes/UselessSender.md)

#### Overrides

`ListenableListener<UselessSenderEventList>.constructor`

## Properties

### debug

> **debug**: `Debug`

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

### devicesFound

> **devicesFound**: `boolean` = `false`

***

### supported

> **supported**: `boolean` = `false`

## Accessors

### initialized

#### Get Signature

> **get** **initialized**(): `boolean`

##### Returns

`boolean`

***

### initializedPromise

#### Get Signature

> **get** **initializedPromise**(): `Promise`<`void`>

##### Returns

`Promise`<`void`>

***

### ready

#### Get Signature

> **get** **ready**(): `boolean`

##### Returns

`boolean`

***

### readyPromise

#### Get Signature

> **get** **readyPromise**(): `Promise`<`void`>

##### Returns

`Promise`<`void`>

***

### session

#### Get Signature

> **get** **session**(): `undefined` | [`ISession`](reference/interfaces/ISession.md)

##### Returns

`undefined` | [`ISession`](reference/interfaces/ISession.md)

***

### sessionState

#### Get Signature

> **get** **sessionState**(): [`SessionStates`](reference/enumerations/SessionStates.md)

##### Returns

[`SessionStates`](reference/enumerations/SessionStates.md)

## Methods

### addEventListener()

> **addEventListener**<`K`>(`type`, `subscriber`): `Emitter`<[`UselessSenderEventList`](reference/interfaces/UselessSenderEventList.md)>

#### Type Parameters

• **K** *extends* keyof [`UselessSenderEventList`](reference/interfaces/UselessSenderEventList.md)

#### Parameters

• **type**: `K`

• **subscriber**

#### Returns

`Emitter`<[`UselessSenderEventList`](reference/interfaces/UselessSenderEventList.md)>

#### Inherited from

`ListenableListener.addEventListener`

***

### cast()

> **cast**<`TLoad`>(`load`): `Promise`<`void`>

#### Type Parameters

• **TLoad** *extends* [`Load`](reference/interfaces/Load.md) = [`Load`](../interfaces/Load.md)

#### Parameters

• **load**: `TLoad`

#### Returns

`Promise`<`void`>

***

### configure()

> **configure**(`configuration`?): `void`

#### Parameters

• **configuration?**: `Partial`<[`UselessSenderConfiguration`](reference/classes/UselessSenderConfiguration.md)>

#### Returns

`void`

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

> **emit**<`K`>(`type`, `event`?): `Emitter`<[`UselessSenderEventList`](reference/interfaces/UselessSenderEventList.md)>

#### Type Parameters

• **K** *extends* keyof [`UselessSenderEventList`](reference/interfaces/UselessSenderEventList.md)

#### Parameters

• **type**: `K`

• **event?**: `Optional`<[`UselessSenderEventList`](reference/interfaces/UselessSenderEventList.md)[`K`], `"type"`>

#### Returns

`Emitter`<[`UselessSenderEventList`](reference/interfaces/UselessSenderEventList.md)>

#### Inherited from

`ListenableListener.emit`

***

### emitAsync()

> **emitAsync**<`K`>(`type`, `event`?): `Emitter`<[`UselessSenderEventList`](reference/interfaces/UselessSenderEventList.md)>

#### Type Parameters

• **K** *extends* keyof [`UselessSenderEventList`](reference/interfaces/UselessSenderEventList.md)

#### Parameters

• **type**: `K`

• **event?**: `Optional`<[`UselessSenderEventList`](reference/interfaces/UselessSenderEventList.md)[`K`], `"type"`>

#### Returns

`Emitter`<[`UselessSenderEventList`](reference/interfaces/UselessSenderEventList.md)>

#### Inherited from

`ListenableListener.emitAsync`

***

### ensureNotDestroyed()

> `protected` **ensureNotDestroyed**(`subscriber`): (...`args`) => `void`

#### Parameters

• **subscriber**: `TSubscriber`

#### Returns

`Function`

##### Parameters

• ...**args**: `any`[]

##### Returns

`void`

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

> `protected` **listen**(`event`, `listener`, `target`?, `listenerCollection`?): `void`

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

> `protected` **listenOnce**(`event`, `listener`, `target`?, `listenerCollection`?): `void`

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

> **off**<`K`>(`type`?, `subscriber`?): `Emitter`<[`UselessSenderEventList`](reference/interfaces/UselessSenderEventList.md)>

#### Type Parameters

• **K** *extends* keyof [`UselessSenderEventList`](reference/interfaces/UselessSenderEventList.md)

#### Parameters

• **type?**: `K`

• **subscriber?**

#### Returns

`Emitter`<[`UselessSenderEventList`](reference/interfaces/UselessSenderEventList.md)>

#### Inherited from

`ListenableListener.off`

***

### on()

> **on**<`K`>(`type`, `subscriber`): `Emitter`<[`UselessSenderEventList`](reference/interfaces/UselessSenderEventList.md)>

#### Type Parameters

• **K** *extends* keyof [`UselessSenderEventList`](reference/interfaces/UselessSenderEventList.md)

#### Parameters

• **type**: `K`

• **subscriber**

#### Returns

`Emitter`<[`UselessSenderEventList`](reference/interfaces/UselessSenderEventList.md)>

#### Inherited from

`ListenableListener.on`

***

### once()

> **once**<`K`>(`type`, `subscriber`): `Emitter`<[`UselessSenderEventList`](reference/interfaces/UselessSenderEventList.md)>

#### Type Parameters

• **K** *extends* keyof [`UselessSenderEventList`](reference/interfaces/UselessSenderEventList.md)

#### Parameters

• **type**: `K`

• **subscriber**

#### Returns

`Emitter`<[`UselessSenderEventList`](reference/interfaces/UselessSenderEventList.md)>

#### Inherited from

`ListenableListener.once`

***

### removeEventListener()

> **removeEventListener**<`K`>(`type`?, `subscriber`?): `Emitter`<[`UselessSenderEventList`](reference/interfaces/UselessSenderEventList.md)>

#### Type Parameters

• **K** *extends* keyof [`UselessSenderEventList`](reference/interfaces/UselessSenderEventList.md)

#### Parameters

• **type?**: `K`

• **subscriber?**

#### Returns

`Emitter`<[`UselessSenderEventList`](reference/interfaces/UselessSenderEventList.md)>

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

> `protected` **unlisten**(`target`?, `listenerCollection`?, `event`?): `void`

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

• **use**: `boolean` = `true`

#### Returns

`void`

***

### getInstance()

> `static` **getInstance**(`options`?): [`UselessSender`](reference/classes/UselessSender.md)

#### Parameters

• **options?**: `Partial`<[`UselessSenderConfiguration`](reference/classes/UselessSenderConfiguration.md)>

#### Returns

[`UselessSender`](reference/classes/UselessSender.md)
