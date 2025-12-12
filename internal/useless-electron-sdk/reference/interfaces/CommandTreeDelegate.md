# CommandTreeDelegate

## Properties

### clearLog()

> **clearLog**: () => `void`

#### Returns

`void`

***

### eval()

> **eval**: (`code`, `context?`) => `void`

#### Parameters

##### code

`string`

##### context?

`string`

#### Returns

`void`

***

### getDescription()

> **getDescription**: (`name`, `path`, `context`) => `Promise`<`DescribeResponseMessage` | `undefined`>

#### Parameters

##### name

`string`

##### path

`string`

##### context

`string`

#### Returns

`Promise`<`DescribeResponseMessage` | `undefined`>

***

### handlePendingDescriptions()

> **handlePendingDescriptions**: (`pending`) => `void`

#### Parameters

##### pending

`boolean`

#### Returns

`void`

***

### log()

> **log**: (`method`, ...`args`) => `void`

#### Parameters

##### method

`string`

##### args

...`any`[]

#### Returns

`void`

***

### quit()

> **quit**: () => `void`

#### Returns

`void`
