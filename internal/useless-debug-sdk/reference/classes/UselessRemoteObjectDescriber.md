# UselessRemoteObjectDescriber

## Extends

- [`MessagingRemoteObjectDescriber`](reference/classes/MessagingRemoteObjectDescriber.md)

## Extended by

- [`UselessConsoleObjectDescriber`](reference/classes/UselessConsoleObjectDescriber.md)

## Constructors

### Constructor

> **new UselessRemoteObjectDescriber**(`args?`): `UselessRemoteObjectDescriber`

#### Parameters

##### args?

[`UselessRemoteObjectDescriberArgs`](reference/interfaces/UselessRemoteObjectDescriberArgs.md)

#### Returns

`UselessRemoteObjectDescriber`

#### Overrides

[`MessagingRemoteObjectDescriber`](reference/classes/MessagingRemoteObjectDescriber.md).[`constructor`](MessagingRemoteObjectDescriber.md#constructor)

## Properties

### configuration

> `protected` **configuration**: [`UselessRemoteObjectDescriberConfiguration`](reference/interfaces/UselessRemoteObjectDescriberConfiguration.md)

#### Overrides

[`MessagingRemoteObjectDescriber`](reference/classes/MessagingRemoteObjectDescriber.md).[`configuration`](MessagingRemoteObjectDescriber.md#configuration)

***

### logger

> `protected` `readonly` **logger**: `ILogger`

#### Inherited from

[`MessagingRemoteObjectDescriber`](reference/classes/MessagingRemoteObjectDescriber.md).[`logger`](MessagingRemoteObjectDescriber.md#logger)

***

### objectDescriber

> `protected` `readonly` **objectDescriber**: `ObjectDescriber`

#### Inherited from

[`MessagingRemoteObjectDescriber`](reference/classes/MessagingRemoteObjectDescriber.md).[`objectDescriber`](MessagingRemoteObjectDescriber.md#objectdescriber)

***

### rootContext?

> `protected` `readonly` **rootContext**?: `ContextContainer`

#### Inherited from

[`MessagingRemoteObjectDescriber`](reference/classes/MessagingRemoteObjectDescriber.md).[`rootContext`](MessagingRemoteObjectDescriber.md#rootcontext)

## Methods

### canHandleMessage()

> **canHandleMessage**(`message`): `boolean`

#### Parameters

##### message

`string` | `UselessMessage`

#### Returns

`boolean`

***

### configure()

> **configure**(`configuration`): `this`

#### Parameters

##### configuration

`Partial`<[`UselessRemoteObjectDescriberConfiguration`](reference/interfaces/UselessRemoteObjectDescriberConfiguration.md)>

#### Returns

`this`

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

[`MessagingRemoteObjectDescriber`](reference/classes/MessagingRemoteObjectDescriber.md).[`describe`](MessagingRemoteObjectDescriber.md#describe)

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

[`MessagingRemoteObjectDescriber`](reference/classes/MessagingRemoteObjectDescriber.md).[`describeAll`](MessagingRemoteObjectDescriber.md#describeall)

***

### describeAllContexts()

> **describeAllContexts**(`options?`): `Promise`<`DescribedObject`[] | `undefined`>

#### Parameters

##### options?

[`RemoteDescribeOptions`](reference/interfaces/RemoteDescribeOptions.md)

#### Returns

`Promise`<`DescribedObject`[] | `undefined`>

#### Inherited from

[`MessagingRemoteObjectDescriber`](reference/classes/MessagingRemoteObjectDescriber.md).[`describeAllContexts`](MessagingRemoteObjectDescriber.md#describeallcontexts)

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

[`MessagingRemoteObjectDescriber`](reference/classes/MessagingRemoteObjectDescriber.md).[`describeContext`](MessagingRemoteObjectDescriber.md#describecontext)

***

### describeRootContext()

> **describeRootContext**(`options?`): `Promise`<`DescribedObject` | `undefined`>

#### Parameters

##### options?

[`RemoteDescribeOptions`](reference/interfaces/RemoteDescribeOptions.md)

#### Returns

`Promise`<`DescribedObject` | `undefined`>

#### Inherited from

[`MessagingRemoteObjectDescriber`](reference/classes/MessagingRemoteObjectDescriber.md).[`describeRootContext`](MessagingRemoteObjectDescriber.md#describerootcontext)

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[`MessagingRemoteObjectDescriber`](reference/classes/MessagingRemoteObjectDescriber.md).[`destroy`](MessagingRemoteObjectDescriber.md#destroy)

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

***

### getAllContexts()

> **getAllContexts**(): `Record`<`string`, `ContextContainer`>

#### Returns

`Record`<`string`, `ContextContainer`>

#### Inherited from

[`MessagingRemoteObjectDescriber`](reference/classes/MessagingRemoteObjectDescriber.md).[`getAllContexts`](MessagingRemoteObjectDescriber.md#getallcontexts)

***

### getContext()

> **getContext**(`contextPath`): `ContextContainer` | `undefined`

#### Parameters

##### contextPath

`string`

#### Returns

`ContextContainer` | `undefined`

#### Inherited from

[`MessagingRemoteObjectDescriber`](reference/classes/MessagingRemoteObjectDescriber.md).[`getContext`](MessagingRemoteObjectDescriber.md#getcontext)

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

[`MessagingRemoteObjectDescriber`](reference/classes/MessagingRemoteObjectDescriber.md).[`getEnsuredContext`](MessagingRemoteObjectDescriber.md#getensuredcontext)

***

### getExclude()

> **getExclude**(): `string`[]

#### Returns

`string`[]

#### Inherited from

[`MessagingRemoteObjectDescriber`](reference/classes/MessagingRemoteObjectDescriber.md).[`getExclude`](MessagingRemoteObjectDescriber.md#getexclude)

***

### getRootContext()

> **getRootContext**(): `ContextContainer` | `undefined`

#### Returns

`ContextContainer` | `undefined`

#### Inherited from

[`MessagingRemoteObjectDescriber`](reference/classes/MessagingRemoteObjectDescriber.md).[`getRootContext`](MessagingRemoteObjectDescriber.md#getrootcontext)

***

### handleDescribeMessage()

> **handleDescribeMessage**(`message`): `Promise`<`void`>

#### Parameters

##### message

[`DescribeMessage`](reference/classes/DescribeMessage.md)

#### Returns

`Promise`<`void`>

#### Inherited from

[`MessagingRemoteObjectDescriber`](reference/classes/MessagingRemoteObjectDescriber.md).[`handleDescribeMessage`](MessagingRemoteObjectDescriber.md#handledescribemessage)

***

### handleEvalMessage()

> **handleEvalMessage**(`message`): `Promise`<`void`>

#### Parameters

##### message

[`EvalMessage`](reference/classes/EvalMessage.md)

#### Returns

`Promise`<`void`>

***

### hasContext()

> **hasContext**(`contextPath`): `boolean`

#### Parameters

##### contextPath

`string`

#### Returns

`boolean`

#### Inherited from

[`MessagingRemoteObjectDescriber`](reference/classes/MessagingRemoteObjectDescriber.md).[`hasContext`](MessagingRemoteObjectDescriber.md#hascontext)

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

[`MessagingRemoteObjectDescriber`](reference/classes/MessagingRemoteObjectDescriber.md).[`receive`](MessagingRemoteObjectDescriber.md#receive)

***

### receiveMessage()

> **receiveMessage**(`message`): `Promise`<`void`>

#### Parameters

##### message

`string` | `UselessMessage`

#### Returns

`Promise`<`void`>

#### Overrides

[`MessagingRemoteObjectDescriber`](reference/classes/MessagingRemoteObjectDescriber.md).[`receiveMessage`](MessagingRemoteObjectDescriber.md#receivemessage)

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

[`MessagingRemoteObjectDescriber`](reference/classes/MessagingRemoteObjectDescriber.md).[`registerContext`](MessagingRemoteObjectDescriber.md#registercontext)

***

### registerResolvedContextsSubscriber()

> **registerResolvedContextsSubscriber**(`subscriber`): `void`

#### Parameters

##### subscriber

`ResolvedContextsSubscriber`

#### Returns

`void`

#### Inherited from

[`MessagingRemoteObjectDescriber`](reference/classes/MessagingRemoteObjectDescriber.md).[`registerResolvedContextsSubscriber`](MessagingRemoteObjectDescriber.md#registerresolvedcontextssubscriber)

***

### reset()

> **reset**(): `void`

#### Returns

`void`

#### Inherited from

[`MessagingRemoteObjectDescriber`](reference/classes/MessagingRemoteObjectDescriber.md).[`reset`](MessagingRemoteObjectDescriber.md#reset)

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

[`MessagingRemoteObjectDescriber`](reference/classes/MessagingRemoteObjectDescriber.md).[`send`](MessagingRemoteObjectDescriber.md#send)

***

### sendMessage()

> **sendMessage**(`message`): `Promise`<`void`>

#### Parameters

##### message

`UselessMessage`

#### Returns

`Promise`<`void`>

#### Inherited from

[`MessagingRemoteObjectDescriber`](reference/classes/MessagingRemoteObjectDescriber.md).[`sendMessage`](MessagingRemoteObjectDescriber.md#sendmessage)

***

### setSendMessage()

> **setSendMessage**(`sendMessage?`): `Promise`<`void`>

#### Parameters

##### sendMessage?

`IMessagingSendMessage`<`UselessMessage`>

#### Returns

`Promise`<`void`>

#### Inherited from

[`MessagingRemoteObjectDescriber`](reference/classes/MessagingRemoteObjectDescriber.md).[`setSendMessage`](MessagingRemoteObjectDescriber.md#setsendmessage)
