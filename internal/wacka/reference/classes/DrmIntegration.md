# DrmIntegration

## Constructors

### Constructor

> **new DrmIntegration**(): `DrmIntegration`

#### Returns

`DrmIntegration`

## Methods

### isValid()

> `abstract` **isValid**(`drm`): `boolean`

#### Parameters

##### drm

`Drm`

#### Returns

`boolean`

***

### renew()

> `abstract` **renew**(`stream`, `drm`): `Promise`<`Drm` | `undefined`>

#### Parameters

##### stream

`Stream`

##### drm

`Drm`

#### Returns

`Promise`<`Drm` | `undefined`>
