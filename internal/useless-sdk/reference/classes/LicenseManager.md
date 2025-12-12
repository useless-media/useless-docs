# LicenseManager

## Extends

- [`LicenseValidator`](reference/classes/LicenseValidator.md)

## Constructors

### Constructor

> **new LicenseManager**(`args?`): `LicenseManager`

#### Parameters

##### args?

[`LicenseManagerArgs`](reference/interfaces/LicenseManagerArgs.md)

#### Returns

`LicenseManager`

#### Overrides

[`LicenseValidator`](reference/classes/LicenseValidator.md).[`constructor`](LicenseValidator.md#constructor)

## Properties

### origin

> `protected` `readonly` **origin**: `string`

#### Inherited from

[`LicenseValidator`](reference/classes/LicenseValidator.md).[`origin`](LicenseValidator.md#origin)

## Methods

### clearLicense()

> **clearLicense**(): `void`

#### Returns

`void`

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

***

### ensureValidLicense()

> **ensureValidLicense**(`component`): `void`

#### Parameters

##### component

`string`

#### Returns

`void`

***

### getData()

> **getData**(`key?`): `Record`<`string`, `any`> | `undefined`

#### Parameters

##### key?

`string`

#### Returns

`Record`<`string`, `any`> | `undefined`

***

### getLicense()

> **getLicense**(`key?`): [`ILicense`](reference/interfaces/ILicense.md) | `undefined`

#### Parameters

##### key?

`string`

#### Returns

[`ILicense`](reference/interfaces/ILicense.md) | `undefined`

***

### getOwner()

> **getOwner**(`key?`): `string` | `undefined`

#### Parameters

##### key?

`string`

#### Returns

`string` | `undefined`

***

### getRemainingLicenseValidity()

> **getRemainingLicenseValidity**(`key?`): `number`

#### Parameters

##### key?

`string`

#### Returns

`number`

***

### getRestrictions()

> **getRestrictions**(`key?`): `Record`<`string`, `any`> | `undefined`

#### Parameters

##### key?

`string`

#### Returns

`Record`<`string`, `any`> | `undefined`

***

### hasLicense()

> **hasLicense**(): `boolean`

#### Returns

`boolean`

***

### hasValidLicense()

> **hasValidLicense**(`component?`): `boolean`

#### Parameters

##### component?

`string`

#### Returns

`boolean`

***

### parseLicense()

> **parseLicense**(`key`): [`ILicense`](reference/interfaces/ILicense.md) | `undefined`

#### Parameters

##### key

`string`

#### Returns

[`ILicense`](reference/interfaces/ILicense.md) | `undefined`

#### Inherited from

[`LicenseValidator`](reference/classes/LicenseValidator.md).[`parseLicense`](LicenseValidator.md#parselicense)

***

### reset()

> **reset**(): `void`

#### Returns

`void`

***

### setLicenseKey()

> **setLicenseKey**(`key`, `component`): `void`

#### Parameters

##### key

`string`

##### component

`string`

#### Returns

`void`

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

#### Inherited from

[`LicenseValidator`](reference/classes/LicenseValidator.md).[`validateLicenseKey`](LicenseValidator.md#validatelicensekey)
