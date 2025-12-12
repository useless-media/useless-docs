# Break

## Extends

- `Promised`<`void`>

## Constructors

### Constructor

> **new Break**(): `Break`

#### Returns

`Break`

#### Overrides

`Promised<void>.constructor`

## Properties

### rejected

> **rejected**: `boolean`

#### Inherited from

`Promised.rejected`

***

### resolved

> **resolved**: `boolean`

#### Inherited from

`Promised.resolved`

***

### [species]

> `readonly` `static` **[species]**: `PromiseConstructor`

#### Inherited from

`Promised.[species]`

## Accessors

### [toStringTag]

#### Get Signature

> **get** **[toStringTag]**(): `string`

##### Returns

`string`

#### Inherited from

`Promised.[toStringTag]`

***

### fulfilled

#### Get Signature

> **get** **fulfilled**(): `boolean`

##### Returns

`boolean`

#### Inherited from

`Promised.fulfilled`

***

### pending

#### Get Signature

> **get** **pending**(): `boolean`

##### Returns

`boolean`

#### Inherited from

`Promised.pending`

## Methods

### await()

> **await**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### catch()

> **catch**<`TResult`>(`onrejected?`): `Promise`<`void` | `TResult` | `undefined`>

Attaches a callback for only the rejection of the Promise.

#### Type Parameters

##### TResult

`TResult` = `never`

#### Parameters

##### onrejected?

The callback to execute when the Promise is rejected.

(`reason`) => `TResult` | `PromiseLike`<`TResult`> | `null`

#### Returns

`Promise`<`void` | `TResult` | `undefined`>

A Promise for the completion of the callback.

#### Inherited from

`Promised.catch`

***

### finally()

> **finally**(`onfinally?`): `Promise`<`void` | `undefined`>

Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
resolved value cannot be modified from the callback.

#### Parameters

##### onfinally?

The callback to execute when the Promise is settled (fulfilled or rejected).

() => `void` | `null`

#### Returns

`Promise`<`void` | `undefined`>

A Promise for the completion of the callback.

#### Inherited from

`Promised.finally`

***

### reject()

> **reject**(`error?`): `void`

#### Parameters

##### error?

`any`

#### Returns

`void`

#### Inherited from

`Promised.reject`

***

### release()

> **release**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### resolve()

> **resolve**(`value`): `void`

#### Parameters

##### value

`void`

#### Returns

`void`

#### Inherited from

`Promised.resolve`

***

### then()

> **then**<`TResult1`, `TResult2`>(`onfulfilled?`, `onrejected?`): `Promise`<`TResult1` | `TResult2`>

Attaches callbacks for the resolution and/or rejection of the Promise.

#### Type Parameters

##### TResult1

`TResult1` = `void` | `undefined`

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

`Promised.then`

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

`Promised.all`

#### Call Signature

> `static` **all**<`T`>(`values`): `Promise`<{ -readonly [P in string | number | symbol]: Awaited<T[P<P>]> }>

Creates a Promise that is resolved with an array of results when all of the provided Promises
resolve, or rejected when any Promise is rejected.

##### Type Parameters

###### T

`T` *extends* [] | readonly `unknown`[]

##### Parameters

###### values

`T`

An array of Promises.

##### Returns

`Promise`<{ -readonly [P in string | number | symbol]: Awaited<T[P<P>]> }>

A new Promise.

##### Inherited from

`Promised.all`

***

### allSettled()

#### Call Signature

> `static` **allSettled**<`T`>(`values`): `Promise`<{ -readonly [P in string | number | symbol]: PromiseSettledResult<Awaited<T[P<P>]>> }>

Creates a Promise that is resolved with an array of results when all
of the provided Promises resolve or reject.

##### Type Parameters

###### T

`T` *extends* [] | readonly `unknown`[]

##### Parameters

###### values

`T`

An array of Promises.

##### Returns

`Promise`<{ -readonly [P in string | number | symbol]: PromiseSettledResult<Awaited<T[P<P>]>> }>

A new Promise.

##### Inherited from

`Promised.allSettled`

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

`Promised.allSettled`

***

### any()

#### Call Signature

> `static` **any**<`T`>(`values`): `Promise`<`Awaited`<`T`[`number`]>>

The any function returns a promise that is fulfilled by the first given promise to be fulfilled, or rejected with an AggregateError containing an array of rejection reasons if all of the given promises are rejected. It resolves all elements of the passed iterable to promises as it runs this algorithm.

##### Type Parameters

###### T

`T` *extends* [] | readonly `unknown`[]

##### Parameters

###### values

`T`

An array or iterable of Promises.

##### Returns

`Promise`<`Awaited`<`T`[`number`]>>

A new Promise.

##### Inherited from

`Promised.any`

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

`Promised.any`

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

`Promised.race`

#### Call Signature

> `static` **race**<`T`>(`values`): `Promise`<`Awaited`<`T`[`number`]>>

Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
or rejected.

##### Type Parameters

###### T

`T` *extends* [] | readonly `unknown`[]

##### Parameters

###### values

`T`

An array of Promises.

##### Returns

`Promise`<`Awaited`<`T`[`number`]>>

A new Promise.

##### Inherited from

`Promised.race`

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

`Promised.reject`

***

### resolve()

#### Call Signature

> `static` **resolve**(): `Promise`<`void`>

Creates a new resolved promise.

##### Returns

`Promise`<`void`>

A resolved promise.

##### Inherited from

`Promised.resolve`

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

`Promised.resolve`

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

`Promised.resolve`

***

### try()

> `static` **try**<`T`, `U`>(`callbackFn`, ...`args`): `Promise`<`Awaited`<`T`>>

Takes a callback of any kind (returns or throws, synchronously or asynchronously) and wraps its result
in a Promise.

#### Type Parameters

##### T

`T`

##### U

`U` *extends* `unknown`[]

#### Parameters

##### callbackFn

(...`args`) => `T` | `PromiseLike`<`T`>

A function that is called synchronously. It can do anything: either return
a value, throw an error, or return a promise.

##### args

...`U`

Additional arguments, that will be passed to the callback.

#### Returns

`Promise`<`Awaited`<`T`>>

A Promise that is:
- Already fulfilled, if the callback synchronously returns a value.
- Already rejected, if the callback synchronously throws an error.
- Asynchronously fulfilled or rejected, if the callback returns a promise.

#### Inherited from

`Promised.try`

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

`Promised.withResolvers`
