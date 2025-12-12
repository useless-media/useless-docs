# UselessInMemoryStorage

## Implements

- `Storage`

## Constructors

### Constructor

> **new UselessInMemoryStorage**(): `UselessInMemoryStorage`

#### Returns

`UselessInMemoryStorage`

## Properties

### name

> `readonly` **name**: `string` = `'UselessInMemoryStorage'`

## Accessors

### length

#### Get Signature

> **get** **length**(): `number`

Returns the number of key/value pairs.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Storage/length)

##### Returns

`number`

#### Implementation of

`Storage.length`

## Methods

### clear()

> **clear**(): `void`

Removes all key/value pairs, if there are any.

Dispatches a storage event on Window objects holding an equivalent Storage object.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Storage/clear)

#### Returns

`void`

#### Implementation of

`Storage.clear`

***

### getItem()

> **getItem**(`key`): `string` | `null`

Returns the current value associated with the given key, or null if the given key does not exist.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Storage/getItem)

#### Parameters

##### key

`string`

#### Returns

`string` | `null`

#### Implementation of

`Storage.getItem`

***

### key()

> **key**(`index`): `string` | `null`

Returns the name of the nth key, or null if n is greater than or equal to the number of key/value pairs.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Storage/key)

#### Parameters

##### index

`number`

#### Returns

`string` | `null`

#### Implementation of

`Storage.key`

***

### removeItem()

> **removeItem**(`key`): `void`

Removes the key/value pair with the given key, if a key/value pair with the given key exists.

Dispatches a storage event on Window objects holding an equivalent Storage object.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Storage/removeItem)

#### Parameters

##### key

`string`

#### Returns

`void`

#### Implementation of

`Storage.removeItem`

***

### setItem()

> **setItem**(`key`, `value`): `void`

Sets the value of the pair identified by key to value, creating a new key/value pair if none existed for key previously.

Throws a "QuotaExceededError" DOMException exception if the new value couldn't be set. (Setting could fail if, e.g., the user has disabled storage for the site, or if the quota has been exceeded.)

Dispatches a storage event on Window objects holding an equivalent Storage object.

[MDN Reference](reference/classes/https://developer.mozilla.org/docs/Web/API/Storage/setItem)

#### Parameters

##### key

`string`

##### value

`string`

#### Returns

`void`

#### Implementation of

`Storage.setItem`
