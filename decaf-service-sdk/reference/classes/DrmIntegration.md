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

[`Drm`](reference/interfaces/Drm.md)

#### Returns

`boolean`

***

### renew()

> `abstract` **renew**(`stream`, `drm`): `Promise`<[`Drm`](reference/interfaces/Drm.md) | `undefined`>

#### Parameters

##### stream

[`Stream`](reference/interfaces/Stream.md)

##### drm

[`Drm`](reference/interfaces/Drm.md)

#### Returns

`Promise`<[`Drm`](reference/interfaces/Drm.md) | `undefined`>
