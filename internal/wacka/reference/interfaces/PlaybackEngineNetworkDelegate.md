# PlaybackEngineNetworkDelegate

## Extended by

- [`INetworkIntegration`](reference/interfaces/INetworkIntegration.md)

## Properties

### licenseRequest()?

> **licenseRequest**?: (`request`, `info?`) => `Promise`<[`LicenceRequest`](reference/interfaces/LicenceRequest.md)>

#### Parameters

##### request

[`LicenceRequest`](reference/interfaces/LicenceRequest.md)

##### info?

[`NetworkInfo`](reference/interfaces/NetworkInfo.md)

#### Returns

`Promise`<[`LicenceRequest`](reference/interfaces/LicenceRequest.md)>

***

### licenseResponse()?

> **licenseResponse**?: (`response`, `info?`) => `Promise`<[`CommonResponse`](reference/interfaces/CommonResponse.md)>

#### Parameters

##### response

[`CommonResponse`](reference/interfaces/CommonResponse.md)

##### info?

[`NetworkInfo`](reference/interfaces/NetworkInfo.md)

#### Returns

`Promise`<[`CommonResponse`](reference/interfaces/CommonResponse.md)>

***

### manifestRequest()?

> **manifestRequest**?: (`request`, `info?`) => `Promise`<[`CommonRequest`](reference/interfaces/CommonRequest.md)>

#### Parameters

##### request

[`CommonRequest`](reference/interfaces/CommonRequest.md)

##### info?

[`NetworkInfo`](reference/interfaces/NetworkInfo.md)

#### Returns

`Promise`<[`CommonRequest`](reference/interfaces/CommonRequest.md)>

***

### manifestResponse()?

> **manifestResponse**?: (`response`, `info?`) => `Promise`<[`ManifestResponse`](reference/interfaces/ManifestResponse.md)>

#### Parameters

##### response

[`ManifestResponse`](reference/interfaces/ManifestResponse.md)

##### info?

[`NetworkInfo`](reference/interfaces/NetworkInfo.md)

#### Returns

`Promise`<[`ManifestResponse`](reference/interfaces/ManifestResponse.md)>

***

### segmentRequest()?

> **segmentRequest**?: (`request`, `info?`) => `Promise`<[`CommonRequest`](reference/interfaces/CommonRequest.md)>

#### Parameters

##### request

[`CommonRequest`](reference/interfaces/CommonRequest.md)

##### info?

[`NetworkInfo`](reference/interfaces/NetworkInfo.md)

#### Returns

`Promise`<[`CommonRequest`](reference/interfaces/CommonRequest.md)>

***

### segmentResponse()?

> **segmentResponse**?: (`response`, `info?`) => `Promise`<[`CommonResponse`](reference/interfaces/CommonResponse.md)>

#### Parameters

##### response

[`CommonResponse`](reference/interfaces/CommonResponse.md)

##### info?

[`NetworkInfo`](reference/interfaces/NetworkInfo.md)

#### Returns

`Promise`<[`CommonResponse`](reference/interfaces/CommonResponse.md)>
