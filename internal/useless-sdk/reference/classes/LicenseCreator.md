# LicenseCreator

## Constructors

### Constructor

> **new LicenseCreator**(`args?`): `LicenseCreator`

#### Parameters

##### args?

[`LicenseCreatorArgs`](reference/interfaces/LicenseCreatorArgs.md)

#### Returns

`LicenseCreator`

## Methods

### createLicenseKey()

#### Call Signature

> **createLicenseKey**(`owner`, ...`components`): `string`

##### Parameters

###### owner

`string`

###### components

...`any`[]

##### Returns

`string`

#### Call Signature

> **createLicenseKey**(`owner`, `data`): `string`

##### Parameters

###### owner

`string`

###### data

[`ILicenseData`](reference/interfaces/ILicenseData.md)

##### Returns

`string`

***

### createLicenseKeyWithExpiration()

> **createLicenseKeyWithExpiration**(`owner`, `data`, `expiration`): `string`

#### Parameters

##### owner

`string`

##### data

[`ILicenseData`](reference/interfaces/ILicenseData.md)

##### expiration

`number`

#### Returns

`string`
