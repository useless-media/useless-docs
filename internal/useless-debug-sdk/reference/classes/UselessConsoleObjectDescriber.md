# UselessConsoleObjectDescriber

## Extends

- [`UselessRemoteObjectDescriber`](reference/classes/UselessRemoteObjectDescriber.md)

## Constructors

### Constructor

> **new UselessConsoleObjectDescriber**(): `UselessConsoleObjectDescriber`

#### Returns

`UselessConsoleObjectDescriber`

#### Overrides

[`UselessRemoteObjectDescriber`](reference/classes/UselessRemoteObjectDescriber.md).[`constructor`](UselessRemoteObjectDescriber.md#constructor)

## Properties

### configuration

> `protected` **configuration**: [`UselessRemoteObjectDescriberConfiguration`](reference/interfaces/UselessRemoteObjectDescriberConfiguration.md)

#### Inherited from

[`UselessRemoteObjectDescriber`](reference/classes/UselessRemoteObjectDescriber.md).[`configuration`](UselessRemoteObjectDescriber.md#configuration)

***

### logger

> `protected` `readonly` **logger**: `ILogger`

#### Inherited from

[`UselessRemoteObjectDescriber`](reference/classes/UselessRemoteObjectDescriber.md).[`logger`](UselessRemoteObjectDescriber.md#logger)

***

### objectDescriber

> `protected` `readonly` **objectDescriber**: `ObjectDescriber`

#### Inherited from

[`UselessRemoteObjectDescriber`](reference/classes/UselessRemoteObjectDescriber.md).[`objectDescriber`](UselessRemoteObjectDescriber.md#objectdescriber)

***

### rootContext?

> `protected` `readonly` **rootContext**?: `ContextContainer`

#### Inherited from

[`UselessRemoteObjectDescriber`](reference/classes/UselessRemoteObjectDescriber.md).[`rootContext`](UselessRemoteObjectDescriber.md#rootcontext)

## Methods

### canHandleMessage()

> **canHandleMessage**(`message`): `boolean`

#### Parameters

##### message

`string` | `UselessMessage`

#### Returns

`boolean`

#### Inherited from

[`UselessRemoteObjectDescriber`](reference/classes/UselessRemoteObjectDescriber.md).[`canHandleMessage`](UselessRemoteObjectDescriber.md#canhandlemessage)

***

### configure()

> **configure**(`configuration`): `this`

#### Parameters

##### configuration

`Partial`<[`UselessRemoteObjectDescriberConfiguration`](reference/interfaces/UselessRemoteObjectDescriberConfiguration.md)>

#### Returns

`this`

#### Inherited from

[`UselessRemoteObjectDescriber`](reference/classes/UselessRemoteObjectDescriber.md).[`configure`](UselessRemoteObjectDescriber.md#configure)

***

### describe()

> **describe**(`name`, `object`, `options?`, `context?`): `Promise`<`DescribedObject` | `undefined`>

#### Parameters

##### name

`string`

##### object

`Record`<`string`, `any`>

##### options?

[`RemoteDescribeOptions`](reference/interfaces/RemoteDescribeOptions.md)

##### context?

`string`

#### Returns

`Promise`<`DescribedObject` | `undefined`>

#### Inherited from

[`UselessRemoteObjectDescriber`](reference/classes/UselessRemoteObjectDescriber.md).[`describe`](UselessRemoteObjectDescriber.md#describe)

***

### describeAll()

> **describeAll**(`describeObjects`, `options?`): `Promise`<`DescribedObjectWithContextContainer`[] | `undefined`>

#### Parameters

##### describeObjects

`DescribeObject`[]

##### options?

[`RemoteDescribeOptions`](reference/interfaces/RemoteDescribeOptions.md)

#### Returns

`Promise`<`DescribedObjectWithContextContainer`[] | `undefined`>

#### Inherited from

[`UselessRemoteObjectDescriber`](reference/classes/UselessRemoteObjectDescriber.md).[`describeAll`](UselessRemoteObjectDescriber.md#describeall)

***

### describeAllContexts()

> **describeAllContexts**(`options?`): `Promise`<`DescribedObject`[] | `undefined`>

#### Parameters

##### options?

[`RemoteDescribeOptions`](reference/interfaces/RemoteDescribeOptions.md)

#### Returns

`Promise`<`DescribedObject`[] | `undefined`>

#### Inherited from

[`UselessRemoteObjectDescriber`](reference/classes/UselessRemoteObjectDescriber.md).[`describeAllContexts`](UselessRemoteObjectDescriber.md#describeallcontexts)

***

### describeContext()

> **describeContext**(`name`, `options?`): `Promise`<`DescribedObject` | `undefined`>

#### Parameters

##### name

`string`

##### options?

[`RemoteDescribeOptions`](reference/interfaces/RemoteDescribeOptions.md)

#### Returns

`Promise`<`DescribedObject` | `undefined`>

#### Inherited from

[`UselessRemoteObjectDescriber`](reference/classes/UselessRemoteObjectDescriber.md).[`describeContext`](UselessRemoteObjectDescriber.md#describecontext)

***

### describeRootContext()

> **describeRootContext**(`options?`): `Promise`<`DescribedObject` | `undefined`>

#### Parameters

##### options?

[`RemoteDescribeOptions`](reference/interfaces/RemoteDescribeOptions.md)

#### Returns

`Promise`<`DescribedObject` | `undefined`>

#### Inherited from

[`UselessRemoteObjectDescriber`](reference/classes/UselessRemoteObjectDescriber.md).[`describeRootContext`](UselessRemoteObjectDescriber.md#describerootcontext)

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[`UselessRemoteObjectDescriber`](reference/classes/UselessRemoteObjectDescriber.md).[`destroy`](UselessRemoteObjectDescriber.md#destroy)

***

### eval()

> **eval**(`code`, `contextName?`): `Promise`<`string`>

#### Parameters

##### code

`string`

##### contextName?

`string`

#### Returns

`Promise`<`string`>

#### Inherited from

[`UselessRemoteObjectDescriber`](reference/classes/UselessRemoteObjectDescriber.md).[`eval`](UselessRemoteObjectDescriber.md#eval)

***

### getAllContexts()

> **getAllContexts**(): `Record`<`string`, `ContextContainer`>

#### Returns

`Record`<`string`, `ContextContainer`>

#### Inherited from

[`UselessRemoteObjectDescriber`](reference/classes/UselessRemoteObjectDescriber.md).[`getAllContexts`](UselessRemoteObjectDescriber.md#getallcontexts)

***

### getContext()

> **getContext**(`contextPath`): `ContextContainer` | `undefined`

#### Parameters

##### contextPath

`string`

#### Returns

`ContextContainer` | `undefined`

#### Inherited from

[`UselessRemoteObjectDescriber`](reference/classes/UselessRemoteObjectDescriber.md).[`getContext`](UselessRemoteObjectDescriber.md#getcontext)

***

### getEnsuredContext()

> **getEnsuredContext**(`contextPath?`, `rootContext?`): `ContextContainer`

#### Parameters

##### contextPath?

`string`

##### rootContext?

`Record`<`string`, `any`>

#### Returns

`ContextContainer`

#### Inherited from

[`UselessRemoteObjectDescriber`](reference/classes/UselessRemoteObjectDescriber.md).[`getEnsuredContext`](UselessRemoteObjectDescriber.md#getensuredcontext)

***

### getExclude()

> **getExclude**(): `string`[]

#### Returns

`string`[]

#### Inherited from

[`UselessRemoteObjectDescriber`](reference/classes/UselessRemoteObjectDescriber.md).[`getExclude`](UselessRemoteObjectDescriber.md#getexclude)

***

### getRootContext()

> **getRootContext**(): `ContextContainer` | `undefined`

#### Returns

`ContextContainer` | `undefined`

#### Inherited from

[`UselessRemoteObjectDescriber`](reference/classes/UselessRemoteObjectDescriber.md).[`getRootContext`](UselessRemoteObjectDescriber.md#getrootcontext)

***

### handleDescribeMessage()

> **handleDescribeMessage**(`message`): `Promise`<`void`>

#### Parameters

##### message

[`DescribeMessage`](reference/classes/DescribeMessage.md)

#### Returns

`Promise`<`void`>

#### Inherited from

[`UselessRemoteObjectDescriber`](reference/classes/UselessRemoteObjectDescriber.md).[`handleDescribeMessage`](UselessRemoteObjectDescriber.md#handledescribemessage)

***

### handleEvalMessage()

> **handleEvalMessage**(`message`): `Promise`<`void`>

#### Parameters

##### message

[`EvalMessage`](reference/classes/EvalMessage.md)

#### Returns

`Promise`<`void`>

#### Inherited from

[`UselessRemoteObjectDescriber`](reference/classes/UselessRemoteObjectDescriber.md).[`handleEvalMessage`](UselessRemoteObjectDescriber.md#handleevalmessage)

***

### hasContext()

> **hasContext**(`contextPath`): `boolean`

#### Parameters

##### contextPath

`string`

#### Returns

`boolean`

#### Inherited from

[`UselessRemoteObjectDescriber`](reference/classes/UselessRemoteObjectDescriber.md).[`hasContext`](UselessRemoteObjectDescriber.md#hascontext)

***

### receive()

> **receive**(`describeObjects`, `correlationId?`): `Promise`<`void`>

#### Parameters

##### describeObjects

`DescribeObject`[]

##### correlationId?

`string`

#### Returns

`Promise`<`void`>

#### Inherited from

[`UselessRemoteObjectDescriber`](reference/classes/UselessRemoteObjectDescriber.md).[`receive`](UselessRemoteObjectDescriber.md#receive)

***

### receiveMessage()

> **receiveMessage**(`message`): `Promise`<`void`>

#### Parameters

##### message

`string` | `UselessMessage`

#### Returns

`Promise`<`void`>

#### Inherited from

[`UselessRemoteObjectDescriber`](reference/classes/UselessRemoteObjectDescriber.md).[`receiveMessage`](UselessRemoteObjectDescriber.md#receivemessage)

***

### registerContext()

> **registerContext**(`name`, `context`, `describe`): `void`

#### Parameters

##### name

`string`

##### context

`Record`<`string`, `any`>

##### describe

`boolean` = `true`

#### Returns

`void`

#### Inherited from

[`UselessRemoteObjectDescriber`](reference/classes/UselessRemoteObjectDescriber.md).[`registerContext`](UselessRemoteObjectDescriber.md#registercontext)

***

### registerResolvedContextsSubscriber()

> **registerResolvedContextsSubscriber**(`subscriber`): `void`

#### Parameters

##### subscriber

`ResolvedContextsSubscriber`

#### Returns

`void`

#### Inherited from

[`UselessRemoteObjectDescriber`](reference/classes/UselessRemoteObjectDescriber.md).[`registerResolvedContextsSubscriber`](UselessRemoteObjectDescriber.md#registerresolvedcontextssubscriber)

***

### reset()

> **reset**(): `void`

#### Returns

`void`

#### Inherited from

[`UselessRemoteObjectDescriber`](reference/classes/UselessRemoteObjectDescriber.md).[`reset`](UselessRemoteObjectDescriber.md#reset)

***

### send()

> **send**(`describedObjects`, `correlationId?`): `Promise`<`void`>

#### Parameters

##### describedObjects

`DescribedObject`[]

##### correlationId?

`string`

#### Returns

`Promise`<`void`>

#### Inherited from

[`UselessRemoteObjectDescriber`](reference/classes/UselessRemoteObjectDescriber.md).[`send`](UselessRemoteObjectDescriber.md#send)

***

### sendMessage()

> **sendMessage**(`message`): `Promise`<`void`>

#### Parameters

##### message

`UselessMessage`

#### Returns

`Promise`<`void`>

#### Inherited from

[`UselessRemoteObjectDescriber`](reference/classes/UselessRemoteObjectDescriber.md).[`sendMessage`](UselessRemoteObjectDescriber.md#sendmessage)

***

### setSendMessage()

> **setSendMessage**(`sendMessage?`): `Promise`<`void`>

#### Parameters

##### sendMessage?

`IMessagingSendMessage`<`UselessMessage`>

#### Returns

`Promise`<`void`>

#### Inherited from

[`UselessRemoteObjectDescriber`](reference/classes/UselessRemoteObjectDescriber.md).[`setSendMessage`](UselessRemoteObjectDescriber.md#setsendmessage)
