# RemoteObjectDescriber

## Extended by

- [`MessagingRemoteObjectDescriber`](reference/classes/MessagingRemoteObjectDescriber.md)

## Constructors

### Constructor

> `protected` **new RemoteObjectDescriber**(`args?`): `RemoteObjectDescriber`

#### Parameters

##### args?

[`RemoteObjectDescriberArgs`](reference/interfaces/RemoteObjectDescriberArgs.md)

#### Returns

`RemoteObjectDescriber`

## Properties

### logger

> `protected` `readonly` **logger**: `ILogger`

***

### objectDescriber

> `protected` `readonly` **objectDescriber**: `ObjectDescriber`

***

### rootContext?

> `protected` `readonly` **rootContext**?: `ContextContainer`

## Methods

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

***

### describeAllContexts()

> **describeAllContexts**(`options?`): `Promise`<`DescribedObject`[] | `undefined`>

#### Parameters

##### options?

[`RemoteDescribeOptions`](reference/interfaces/RemoteDescribeOptions.md)

#### Returns

`Promise`<`DescribedObject`[] | `undefined`>

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

***

### describeRootContext()

> **describeRootContext**(`options?`): `Promise`<`DescribedObject` | `undefined`>

#### Parameters

##### options?

[`RemoteDescribeOptions`](reference/interfaces/RemoteDescribeOptions.md)

#### Returns

`Promise`<`DescribedObject` | `undefined`>

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

***

### getAllContexts()

> **getAllContexts**(): `Record`<`string`, `ContextContainer`>

#### Returns

`Record`<`string`, `ContextContainer`>

***

### getContext()

> **getContext**(`contextPath`): `ContextContainer` | `undefined`

#### Parameters

##### contextPath

`string`

#### Returns

`ContextContainer` | `undefined`

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

***

### getRootContext()

> **getRootContext**(): `ContextContainer` | `undefined`

#### Returns

`ContextContainer` | `undefined`

***

### hasContext()

> **hasContext**(`contextPath`): `boolean`

#### Parameters

##### contextPath

`string`

#### Returns

`boolean`

***

### receive()

> `abstract` **receive**(`describeObjects`, `correlationId?`): `Promise`<`void`>

#### Parameters

##### describeObjects

`DescribeObject`[]

##### correlationId?

`string`

#### Returns

`Promise`<`void`>

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

***

### registerResolvedContextsSubscriber()

> **registerResolvedContextsSubscriber**(`subscriber`): `void`

#### Parameters

##### subscriber

`ResolvedContextsSubscriber`

#### Returns

`void`

***

### reset()

> **reset**(): `void`

#### Returns

`void`

***

### send()

> `abstract` **send**(`describedObjects`, `correlationId?`): `Promise`<`void`>

#### Parameters

##### describedObjects

`DescribedObject`[]

##### correlationId?

`string`

#### Returns

`Promise`<`void`>
