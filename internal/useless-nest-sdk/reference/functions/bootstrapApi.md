# bootstrapApi

> **bootstrapApi**<`TApplication`>(`AppModule`, `optionsOrConfigure?`, `optionsOrConfigureSwagger?`, `options?`): `Promise`<`void`>

## Type Parameters

### TApplication

`TApplication` = `NestExpressApplication`<`Server`<*typeof* `IncomingMessage`, *typeof* `ServerResponse`>>

## Parameters

### AppModule

`any`

### optionsOrConfigure?

[`BootstrapApiOptions`](reference/interfaces/BootstrapApiOptions.md) | [`ConfigureApplicationFunction`](../interfaces/ConfigureApplicationFunction.md)<`TApplication`>

### optionsOrConfigureSwagger?

[`BootstrapApiOptions`](reference/interfaces/BootstrapApiOptions.md) | [`ConfigureApplicationFunction`](../interfaces/ConfigureApplicationFunction.md)<`TApplication`>

### options?

[`BootstrapApiOptions`](reference/interfaces/BootstrapApiOptions.md)

## Returns

`Promise`<`void`>
