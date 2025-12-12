# LoggerModule

## Constructors

### Constructor

> **new LoggerModule**(): `LoggerModule`

#### Returns

`LoggerModule`

## Methods

### forRoot()

> `static` **forRoot**(`options?`): `ForwardReference`<`any`> | `DynamicModule`

#### Parameters

##### options?

#### Returns

`ForwardReference`<`any`> | `DynamicModule`

***

### forRootAsync()

> `static` **forRootAsync**(`options?`): `ForwardReference`<`any`> | `DynamicModule`

#### Parameters

##### options?

`Omit`<`WinstonModuleAsyncOptions`, `"imports"` | `"useClass"`> & `Partial`<`Pick`<`ModuleMetadata`, `"imports"`>>

#### Returns

`ForwardReference`<`any`> | `DynamicModule`
