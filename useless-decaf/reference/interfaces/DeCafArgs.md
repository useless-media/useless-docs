# DeCafArgs

## Properties

### clientFactory?

> **clientFactory**?: [`DeCafClientFactory`](reference/interfaces/DeCafClientFactory.md)

***

### configuration?

> **configuration**?: `object`

#### baseUrl?

> **baseUrl**?: `string`

#### client?

> **client**?: `object`

##### Index Signature

[`key`: `string`]: `any`

#### clientUrl?

> **clientUrl**?: `string`

#### environment?

> **environment**?: [`Environments`](reference/enumerations/Environments.md)

#### features?

> **features**?: `object`

##### features.describer?

> **describer**?: `object`

##### features.describer.exclude?

> **exclude**?: `string`[]

##### features.describer.maxEvalResponseSize?

> **maxEvalResponseSize**?: `number`

##### features.describer.maxPendingMessages?

> **maxPendingMessages**?: `number`

##### features.interceptors?

> **interceptors**?: `object`

##### features.interceptors.console?

> **console**?: `object`

##### features.interceptors.console.console?

> **console**?: `object`

##### features.interceptors.console.console.assert?

> **assert**?: ... | ...

##### features.interceptors.console.console.debug?

> **debug**?: ... | ...

##### features.interceptors.console.console.dir?

> **dir**?: ... | ...

##### features.interceptors.console.console.error?

> **error**?: ... | ...

##### features.interceptors.console.console.info?

> **info**?: ... | ...

##### features.interceptors.console.console.log?

> **log**?: ... | ...

##### features.interceptors.console.console.trace?

> **trace**?: ... | ...

##### features.interceptors.console.console.warn?

> **warn**?: ... | ...

##### features.interceptors.console.enabled?

> **enabled**?: `boolean`

##### features.interceptors.console.exclude?

> **exclude**?: `string`[]

##### features.interceptors.console.maxPendingMessages?

> **maxPendingMessages**?: `number`

##### features.senderManager?

> **senderManager**?: `object`

##### features.senderManager.allSendersHandleAllMessages?

> **allSendersHandleAllMessages**?: `boolean`

##### features.senderManager.autoUpgradeSenders?

> **autoUpgradeSenders**?: `boolean`

##### features.senderManager.handshake?

> **handshake**?: `boolean`

##### features.senderManager.messageEventsByNamespace?

> **messageEventsByNamespace**?: `object`

###### Index Signature

[`key`: `string`]: `string` | `undefined`

#### license?

> **license**?: `string`

#### logoUrl?

> **logoUrl**?: `string`

***

### container

> **container**: `HTMLDivElement`

***

### core

> **core**: [`DeCafCore`](reference/classes/DeCafCore.md)
