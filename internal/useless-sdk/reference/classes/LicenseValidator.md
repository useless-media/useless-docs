# LicenseValidator

## Extended by

- [`LicenseManager`](reference/classes/LicenseManager.md)

## Constructors

### Constructor

> **new LicenseValidator**(`args?`): `LicenseValidator`

#### Parameters

##### args?

[`LicenseValidatorArgs`](reference/interfaces/LicenseValidatorArgs.md)

#### Returns

`LicenseValidator`

## Properties

### origin

> `protected` `readonly` **origin**: `string`

## Methods

### parseLicense()

> **parseLicense**(`key`): [`ILicense`](reference/interfaces/ILicense.md) | `undefined`

#### Parameters

##### key

`string`

#### Returns

[`ILicense`](reference/interfaces/ILicense.md) | `undefined`

***

### validateLicenseKey()

> **validateLicenseKey**(`key`, `component?`): `boolean`

#### Parameters

##### key

`string`

##### component?

`string`

#### Returns

`boolean`
