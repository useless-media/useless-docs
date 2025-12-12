# createConnection

> **createConnection**<`TOptions`, `TConnectionType`, `TReturn`>(`options`): `Promise`<`TReturn`>

## Type Parameters

### TOptions

`TOptions` *extends* [`UselessDataSourceConnectionOptions`](reference/interfaces/UselessDataSourceConnectionOptions.md) = [`UselessDataSourceConnectionOptions`](../interfaces/UselessDataSourceConnectionOptions.md)

### TConnectionType

`TConnectionType` *extends* keyof [`IDataSourceMap`](reference/interfaces/IDataSourceMap.md) = `Exclude`<`TOptions`[`"type"`], `undefined`>

### TReturn

`TReturn` = [`IConnectionMap`](reference/interfaces/IConnectionMap.md)[`TConnectionType`]

## Parameters

### options

`TOptions`

## Returns

`Promise`<`TReturn`>
