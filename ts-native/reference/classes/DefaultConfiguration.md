# DefaultConfiguration

## Implements

- `Partial`<[`Configuration`](reference/interfaces/Configuration.md)>

## Constructors

### Constructor

> **new DefaultConfiguration**(): `DefaultConfiguration`

#### Returns

`DefaultConfiguration`

## Properties

### cleanBuildDirectory

> **cleanBuildDirectory**: `boolean` = `false`

#### Implementation of

[`Configuration`](reference/interfaces/Configuration.md).[`cleanBuildDirectory`](../interfaces/Configuration.md#cleanbuilddirectory)

***

### cleanNativeBuildDirectory

> **cleanNativeBuildDirectory**: `boolean` = `false`

#### Implementation of

[`Configuration`](reference/interfaces/Configuration.md).[`cleanNativeBuildDirectory`](../interfaces/Configuration.md#cleannativebuilddirectory)

***

### debug

> **debug**: `boolean` = `false`

#### Implementation of

[`Configuration`](reference/interfaces/Configuration.md).[`debug`](../interfaces/Configuration.md#debug)

***

### dependencies

> **dependencies**: `string`[] = `[]`

#### Implementation of

[`Configuration`](reference/interfaces/Configuration.md).[`dependencies`](../interfaces/Configuration.md#dependencies)

***

### extensionJsNamespace

> **extensionJsNamespace**: `string` = `'UselessJsEngineExtensions'`

#### Implementation of

[`Configuration`](reference/interfaces/Configuration.md).[`extensionJsNamespace`](../interfaces/Configuration.md#extensionjsnamespace)

***

### extensions

> **extensions**: [`ExtensionInformation`](reference/interfaces/ExtensionInformation.md)[] = `[]`

#### Implementation of

[`Configuration`](reference/interfaces/Configuration.md).[`extensions`](../interfaces/Configuration.md#extensions)

***

### external

> **external**: `string`[]

#### Implementation of

[`Configuration`](reference/interfaces/Configuration.md).[`external`](../interfaces/Configuration.md#external)

***

### moduleConstructionCodePattern

> **moduleConstructionCodePattern**: `string` = `'new {moduleJsNamespace}.{moduleName}()'`

#### Implementation of

[`Configuration`](reference/interfaces/Configuration.md).[`moduleConstructionCodePattern`](../interfaces/Configuration.md#moduleconstructioncodepattern)

***

### moduleJsNamespace

> **moduleJsNamespace**: `string` = `'UselessJsEngineModules'`

#### Implementation of

[`Configuration`](reference/interfaces/Configuration.md).[`moduleJsNamespace`](../interfaces/Configuration.md#modulejsnamespace)

***

### nativeCode

> **nativeCode**: `Record`<`string`, `string`> = `{}`

#### Implementation of

[`Configuration`](reference/interfaces/Configuration.md).[`nativeCode`](../interfaces/Configuration.md#nativecode)

***

### targets

> **targets**: readonly (`"kotlin"` | `"swift"`)[]

#### Implementation of

[`TsNativeConfiguration`](reference/interfaces/TsNativeConfiguration.md).[`targets`](../interfaces/TsNativeConfiguration.md#targets)

***

### useCopiedInputAsSource

> **useCopiedInputAsSource**: `boolean` = `false`

#### Implementation of

[`Configuration`](reference/interfaces/Configuration.md).[`useCopiedInputAsSource`](../interfaces/Configuration.md#usecopiedinputassource)

***

### usedExtensions

> **usedExtensions**: [`ExtensionInformation`](reference/interfaces/ExtensionInformation.md)[] = `[]`

#### Implementation of

[`Configuration`](reference/interfaces/Configuration.md).[`usedExtensions`](../interfaces/Configuration.md#usedextensions)
