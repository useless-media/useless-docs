# Promised<T>

## Extends

- `Promise`<`T` | `undefined`>

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new Promised**<`T`>(`executor?`, `options?`): `Promised`<`T`>

#### Parameters

##### executor?

`PromisedOptions` | `Executor`<`T`>

##### options?

`PromisedOptions`

#### Returns

`Promised`<`T`>

#### Overrides

Promise<T | undefined>.constructor

## Properties

### rejected

> **rejected**: `boolean` = `false`

***

### resolved

> **resolved**: `boolean` = `false`

***

### [species]

> `readonly` `static` **[species]**: `PromiseConstructor`

#### Inherited from

`Promise.[species]`

## Accessors

### [toStringTag]

#### Get Signature

> **get** **[toStringTag]**(): `string`

##### Returns

`string`

#### Overrides

`Promise.[toStringTag]`

***

### fulfilled

#### Get Signature

> **get** **fulfilled**(): `boolean`

##### Returns

`boolean`

***

### pending

#### Get Signature

> **get** **pending**(): `boolean`

##### Returns

`boolean`

## Methods

### catch()

> **catch**<`TResult`>(`onrejected?`): `Promise`<`T` | `TResult` | `undefined`>

Attaches a callback for only the rejection of the Promise.

#### Type Parameters

##### TResult

`TResult` = `never`

#### Parameters

##### onrejected?

The callback to execute when the Promise is rejected.

(`reason`) => `TResult` | `PromiseLike`<`TResult`> | `null`

#### Returns

`Promise`<`T` | `TResult` | `undefined`>

A Promise for the completion of the callback.

#### Inherited from

`Promise.catch`

***

### finally()

> **finally**(`onfinally?`): `Promise`<`T` | `undefined`>

Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
resolved value cannot be modified from the callback.

#### Parameters

##### onfinally?

The callback to execute when the Promise is settled (fulfilled or rejected).

() => `void` | `null`

#### Returns

`Promise`<`T` | `undefined`>

A Promise for the completion of the callback.

#### Inherited from

`Promise.finally`

***

### reject()

> **reject**(`error?`): `void`

#### Parameters

##### error?

`any`

#### Returns

`void`

***

### resolve()

> **resolve**(`value`): `void`

#### Parameters

##### value

`T`

#### Returns

`void`

***

### then()

> **then**<`TResult1`, `TResult2`>(`onfulfilled?`, `onrejected?`): `Promise`<`TResult1` | `TResult2`>

Attaches callbacks for the resolution and/or rejection of the Promise.

#### Type Parameters

##### TResult1

`TResult1` = `T` | `undefined`

##### TResult2

`TResult2` = `never`

#### Parameters

##### onfulfilled?

The callback to execute when the Promise is resolved.

(`value`) => `TResult1` | `PromiseLike`<`TResult1`> | `null`

##### onrejected?

The callback to execute when the Promise is rejected.

(`reason`) => `TResult2` | `PromiseLike`<`TResult2`> | `null`

#### Returns

`Promise`<`TResult1` | `TResult2`>

A Promise for the completion of which ever callback is executed.

#### Inherited from

`Promise.then`

***

### all()

#### Call Signature

> `static` **all**<`T`>(`values`): `Promise`<`Awaited`<`T`>[]>

Creates a Promise that is resolved with an array of results when all of the provided Promises
resolve, or rejected when any Promise is rejected.

##### Type Parameters

###### T

`T`

##### Parameters

###### values

`Iterable`<`T` | `PromiseLike`<`T`>>

An iterable of Promises.

##### Returns

`Promise`<`Awaited`<`T`>[]>

A new Promise.

##### Inherited from

`Promise.all`

#### Call Signature

> `static` **all**<`T`>(`values`): `Promise`<{ -readonly [P in string | number | symbol]: Awaited<T[P<P>]> }>

Creates a Promise that is resolved with an array of results when all of the provided Promises
resolve, or rejected when any Promise is rejected.

##### Type Parameters

###### T

`T` *extends* readonly `unknown`[] | []

##### Parameters

###### values

`T`

An array of Promises.

##### Returns

`Promise`<{ -readonly [P in string | number | symbol]: Awaited<T[P<P>]> }>

A new Promise.

##### Inherited from

`Promise.all`

***

### allSettled()

#### Call Signature

> `static` **allSettled**<`T`>(`values`): `Promise`<{ -readonly [P in string | number | symbol]: PromiseSettledResult<Awaited<T[P<P>]>> }>

Creates a Promise that is resolved with an array of results when all
of the provided Promises resolve or reject.

##### Type Parameters

###### T

`T` *extends* readonly `unknown`[] | []

##### Parameters

###### values

`T`

An array of Promises.

##### Returns

`Promise`<{ -readonly [P in string | number | symbol]: PromiseSettledResult<Awaited<T[P<P>]>> }>

A new Promise.

##### Inherited from

`Promise.allSettled`

#### Call Signature

> `static` **allSettled**<`T`>(`values`): `Promise`<`PromiseSettledResult`<`Awaited`<`T`>>[]>

Creates a Promise that is resolved with an array of results when all
of the provided Promises resolve or reject.

##### Type Parameters

###### T

`T`

##### Parameters

###### values

`Iterable`<`T` | `PromiseLike`<`T`>>

An array of Promises.

##### Returns

`Promise`<`PromiseSettledResult`<`Awaited`<`T`>>[]>

A new Promise.

##### Inherited from

`Promise.allSettled`

***

### any()

#### Call Signature

> `static` **any**<`T`>(`values`): `Promise`<`Awaited`<`T`[`number`]>>

The any function returns a promise that is fulfilled by the first given promise to be fulfilled, or rejected with an AggregateError containing an array of rejection reasons if all of the given promises are rejected. It resolves all elements of the passed iterable to promises as it runs this algorithm.

##### Type Parameters

###### T

`T` *extends* readonly `unknown`[] | []

##### Parameters

###### values

`T`

An array or iterable of Promises.

##### Returns

`Promise`<`Awaited`<`T`[`number`]>>

A new Promise.

##### Inherited from

`Promise.any`

#### Call Signature

> `static` **any**<`T`>(`values`): `Promise`<`Awaited`<`T`>>

The any function returns a promise that is fulfilled by the first given promise to be fulfilled, or rejected with an AggregateError containing an array of rejection reasons if all of the given promises are rejected. It resolves all elements of the passed iterable to promises as it runs this algorithm.

##### Type Parameters

###### T

`T`

##### Parameters

###### values

`Iterable`<`T` | `PromiseLike`<`T`>>

An array or iterable of Promises.

##### Returns

`Promise`<`Awaited`<`T`>>

A new Promise.

##### Inherited from

`Promise.any`

***

### race()

#### Call Signature

> `static` **race**<`T`>(`values`): `Promise`<`Awaited`<`T`>>

Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
or rejected.

##### Type Parameters

###### T

`T`

##### Parameters

###### values

`Iterable`<`T` | `PromiseLike`<`T`>>

An iterable of Promises.

##### Returns

`Promise`<`Awaited`<`T`>>

A new Promise.

##### Inherited from

`Promise.race`

#### Call Signature

> `static` **race**<`T`>(`values`): `Promise`<`Awaited`<`T`[`number`]>>

Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
or rejected.

##### Type Parameters

###### T

`T` *extends* readonly `unknown`[] | []

##### Parameters

###### values

`T`

An array of Promises.

##### Returns

`Promise`<`Awaited`<`T`[`number`]>>

A new Promise.

##### Inherited from

`Promise.race`

***

### reject()

> `static` **reject**<`T`>(`reason?`): `Promise`<`T`>

Creates a new rejected promise for the provided reason.

#### Type Parameters

##### T

`T` = `never`

#### Parameters

##### reason?

`any`

The reason the promise was rejected.

#### Returns

`Promise`<`T`>

A new rejected Promise.

#### Inherited from

`Promise.reject`

***

### resolve()

#### Call Signature

> `static` **resolve**(): `Promise`<`void`>

Creates a new resolved promise.

##### Returns

`Promise`<`void`>

A resolved promise.

##### Inherited from

`Promise.resolve`

#### Call Signature

> `static` **resolve**<`T`>(`value`): `Promise`<`Awaited`<`T`>>

Creates a new resolved promise for the provided value.

##### Type Parameters

###### T

`T`

##### Parameters

###### value

`T`

A promise.

##### Returns

`Promise`<`Awaited`<`T`>>

A promise whose internal state matches the provided promise.

##### Inherited from

`Promise.resolve`

#### Call Signature

> `static` **resolve**<`T`>(`value`): `Promise`<`Awaited`<`T`>>

Creates a new resolved promise for the provided value.

##### Type Parameters

###### T

`T`

##### Parameters

###### value

A promise.

`T` | `PromiseLike`<`T`>

##### Returns

`Promise`<`Awaited`<`T`>>

A promise whose internal state matches the provided promise.

##### Inherited from

`Promise.resolve`

***

### withResolvers()

> `static` **withResolvers**<`T`>(): `PromiseWithResolvers`<`T`>

Creates a new Promise and returns it in an object, along with its resolve and reject functions.

#### Type Parameters

##### T

`T`

#### Returns

`PromiseWithResolvers`<`T`>

An object with the properties `promise`, `resolve`, and `reject`.

```ts
const { promise, resolve, reject } = Promise.withResolvers<T>();
```

#### Inherited from

`Promise.withResolvers`
