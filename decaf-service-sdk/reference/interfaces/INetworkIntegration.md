# INetworkIntegration

## Extends

- `PlaybackEngineNetworkDelegate`

## Properties

### licenseRequest()?

> **licenseRequest**?: (`request`, `info?`) => `Promise`<[`LicenceRequest`](reference/interfaces/LicenceRequest.md)>

#### Parameters

##### request

[`LicenceRequest`](reference/interfaces/LicenceRequest.md)

##### info?

`NetworkInfo`

#### Returns

`Promise`<[`LicenceRequest`](reference/interfaces/LicenceRequest.md)>

#### Inherited from

`PlaybackEngineNetworkDelegate.licenseRequest`

***

### licenseResponse()?

> **licenseResponse**?: (`response`, `info?`) => `Promise`<[`CommonResponse`](reference/interfaces/CommonResponse.md)>

#### Parameters

##### response

[`CommonResponse`](reference/interfaces/CommonResponse.md)

##### info?

`NetworkInfo`

#### Returns

`Promise`<[`CommonResponse`](reference/interfaces/CommonResponse.md)>

#### Inherited from

`PlaybackEngineNetworkDelegate.licenseResponse`

***

### manifestRequest()?

> **manifestRequest**?: (`request`, `info?`) => `Promise`<[`CommonRequest`](reference/interfaces/CommonRequest.md)>

#### Parameters

##### request

[`CommonRequest`](reference/interfaces/CommonRequest.md)

##### info?

`NetworkInfo`

#### Returns

`Promise`<[`CommonRequest`](reference/interfaces/CommonRequest.md)>

#### Inherited from

`PlaybackEngineNetworkDelegate.manifestRequest`

***

### manifestResponse()?

> **manifestResponse**?: (`response`, `info?`) => `Promise`<[`ManifestResponse`](reference/interfaces/ManifestResponse.md)>

#### Parameters

##### response

[`ManifestResponse`](reference/interfaces/ManifestResponse.md)

##### info?

`NetworkInfo`

#### Returns

`Promise`<[`ManifestResponse`](reference/interfaces/ManifestResponse.md)>

#### Inherited from

`PlaybackEngineNetworkDelegate.manifestResponse`

***

### networkIntegrationId?

> **networkIntegrationId**?: `string`

***

### segmentRequest()?

> **segmentRequest**?: (`request`, `info?`) => `Promise`<[`CommonRequest`](reference/interfaces/CommonRequest.md)>

#### Parameters

##### request

[`CommonRequest`](reference/interfaces/CommonRequest.md)

##### info?

`NetworkInfo`

#### Returns

`Promise`<[`CommonRequest`](reference/interfaces/CommonRequest.md)>

#### Inherited from

`PlaybackEngineNetworkDelegate.segmentRequest`

***

### segmentResponse()?

> **segmentResponse**?: (`response`, `info?`) => `Promise`<[`CommonResponse`](reference/interfaces/CommonResponse.md)>

#### Parameters

##### response

[`CommonResponse`](reference/interfaces/CommonResponse.md)

##### info?

`NetworkInfo`

#### Returns

`Promise`<[`CommonResponse`](reference/interfaces/CommonResponse.md)>

#### Inherited from

`PlaybackEngineNetworkDelegate.segmentResponse`
