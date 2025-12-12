# FeatureManagerDelegate

## Properties

### handleFeatureError()?

> **handleFeatureError**?: (`type`, `error`) => `void`

#### Parameters

##### type

`string`

##### error

`IUselessError`<`any`>

#### Returns

`void`

***

### handleFeatureRegistered()?

> **handleFeatureRegistered**?: (`feature`) => `void`

#### Parameters

##### feature

[`ExtendableFeature`](reference/classes/ExtendableFeature.md)<`any`, `any`>

#### Returns

`void`

***

### handleFeatureStateUpdated()?

> **handleFeatureStateUpdated**?: (`type`, ...`args`) => `void`

#### Parameters

##### type

`string`

##### args

...`any`[]

#### Returns

`void`
