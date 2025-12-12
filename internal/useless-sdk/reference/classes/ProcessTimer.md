# ProcessTimer

## Constructors

### Constructor

> **new ProcessTimer**(): `ProcessTimer`

#### Returns

`ProcessTimer`

## Methods

### AddIntermediary()

> `static` **AddIntermediary**(`processName`, `subProcess`): `void`

#### Parameters

##### processName

`string`

##### subProcess

`string`

#### Returns

`void`

***

### AttachReporter()

> `static` **AttachReporter**(`timeReporter`): `void`

#### Parameters

##### timeReporter

`Reporter`

#### Returns

`void`

***

### Cancel()

> `static` **Cancel**(`processName`): `void`

#### Parameters

##### processName

`string`

#### Returns

`void`

***

### Reset()

> `static` **Reset**(): `void`

#### Returns

`void`

***

### SetDefaultTimeout()

> `static` **SetDefaultTimeout**(`timeout`): `void`

#### Parameters

##### timeout

`number`

#### Returns

`void`

***

### SetLogger()

> `static` **SetLogger**(`logger`): `void`

#### Parameters

##### logger

[`ILogger`](reference/interfaces/ILogger.md)

#### Returns

`void`

***

### Start()

> `static` **Start**(`processName`, `globalProcessName?`, `subProcess?`, `timeout?`): `void`

#### Parameters

##### processName

`string`

##### globalProcessName?

`string`

##### subProcess?

`string`

##### timeout?

`number`

#### Returns

`void`

***

### StartGlobal()

> `static` **StartGlobal**(`globalProcessName`, `timeout?`, `autoStop?`): `void`

#### Parameters

##### globalProcessName

`string`

##### timeout?

`number`

##### autoStop?

`boolean` = `false`

#### Returns

`void`

***

### Stop()

> `static` **Stop**(`processName`, `loglevel`): [`ProcessTimeReport`](reference/interfaces/ProcessTimeReport.md)

#### Parameters

##### processName

`string`

##### loglevel

`number` = `0`

#### Returns

[`ProcessTimeReport`](reference/interfaces/ProcessTimeReport.md)
