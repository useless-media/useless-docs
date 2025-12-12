# ObjectDescriber

## Constructors

### Constructor

> **new ObjectDescriber**(`args?`): `ObjectDescriber`

#### Parameters

##### args?

[`ObjectDescriberArgs`](reference/interfaces/ObjectDescriberArgs.md)

#### Returns

`ObjectDescriber`

## Methods

### describe()

> **describe**(`name`, `object`, `options?`, `context?`, `originalContext?`): `Promise`<[`DescribedObject`](reference/interfaces/DescribedObject.md) | `undefined`>

#### Parameters

##### name

`string`

##### object

`Record`<`string`, `any`>

##### options?

[`DescribeOptions`](reference/interfaces/DescribeOptions.md)

##### context?

`string`

##### originalContext?

`string`

#### Returns

`Promise`<[`DescribedObject`](reference/interfaces/DescribedObject.md) | `undefined`>

***

### describeAll()

> **describeAll**(`describeObjects`, `options?`): `Promise`<[`DescribedObjectWithContextContainer`](reference/interfaces/DescribedObjectWithContextContainer.md)[]>

#### Parameters

##### describeObjects

[`DescribeObject`](reference/interfaces/DescribeObject.md)[]

##### options?

[`DescribeOptions`](reference/interfaces/DescribeOptions.md)

#### Returns

`Promise`<[`DescribedObjectWithContextContainer`](reference/interfaces/DescribedObjectWithContextContainer.md)[]>

***

### describeAllContexts()

> **describeAllContexts**(`options?`): `Promise`<[`DescribedObject`](reference/interfaces/DescribedObject.md)[]>

#### Parameters

##### options?

[`DescribeOptions`](reference/interfaces/DescribeOptions.md)

#### Returns

`Promise`<[`DescribedObject`](reference/interfaces/DescribedObject.md)[]>

***

### describeContext()

> **describeContext**(`name`, `options?`): `Promise`<[`DescribedObject`](reference/interfaces/DescribedObject.md) | `undefined`>

#### Parameters

##### name

`string`

##### options?

[`DescribeOptions`](reference/interfaces/DescribeOptions.md)

#### Returns

`Promise`<[`DescribedObject`](reference/interfaces/DescribedObject.md) | `undefined`>

***

### getAllContexts()

> **getAllContexts**(): `Record`<`string`, [`ContextContainer`](reference/interfaces/ContextContainer.md)>

#### Returns

`Record`<`string`, [`ContextContainer`](reference/interfaces/ContextContainer.md)>

***

### getContext()

> **getContext**(`contextPath`): [`ContextContainer`](reference/interfaces/ContextContainer.md) | `undefined`

#### Parameters

##### contextPath

`string`

#### Returns

[`ContextContainer`](reference/interfaces/ContextContainer.md) | `undefined`

***

### getEnsuredContext()

> **getEnsuredContext**(`contextPath?`, `rootContext?`): [`ContextContainer`](reference/interfaces/ContextContainer.md)

#### Parameters

##### contextPath?

`string`

##### rootContext?

`Record`<`string`, `any`>

#### Returns

[`ContextContainer`](reference/interfaces/ContextContainer.md)

***

### getEnvironmentRootContextNames()

> **getEnvironmentRootContextNames**(): `string`[]

#### Returns

`string`[]

***

### hasContext()

> **hasContext**(`contextPath`): `boolean`

#### Parameters

##### contextPath

`string`

#### Returns

`boolean`

***

### isEnvironmentRootContext()

> **isEnvironmentRootContext**(`context`): `boolean`

#### Parameters

##### context

`Record`<`string`, `any`>

#### Returns

`boolean`

***

### registerContext()

> **registerContext**(`name`, `context`): `void`

#### Parameters

##### name

`string`

##### context

`Record`<`string`, `any`>

#### Returns

`void`
