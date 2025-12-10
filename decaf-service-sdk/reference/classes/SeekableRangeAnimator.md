# SeekableRangeAnimator

## Extended by

- [`ContinuousSeekableRangeAnimator`](reference/classes/ContinuousSeekableRangeAnimator.md)

## Constructors

### Constructor

> **new SeekableRangeAnimator**(): `SeekableRangeAnimator`

#### Returns

`SeekableRangeAnimator`

## Properties

### animatedSeekableRange?

> `protected` **animatedSeekableRange**?: [`SeekableRange`](reference/interfaces/SeekableRange.md)

***

### lastKnownSeekableRange?

> `protected` **lastKnownSeekableRange**?: [`SeekableRange`](reference/interfaces/SeekableRange.md)

***

### lastKnownSeekableRangeTime?

> `protected` **lastKnownSeekableRangeTime**?: `number`

## Methods

### animateSeekableRange()

> `protected` **animateSeekableRange**(`time`): `void`

#### Parameters

##### time

`number`

#### Returns

`void`

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

***

### get()

> **get**(): [`SeekableRange`](reference/interfaces/SeekableRange.md) | `undefined`

#### Returns

[`SeekableRange`](reference/interfaces/SeekableRange.md) | `undefined`

***

### reset()

> **reset**(): `void`

#### Returns

`void`

***

### seeked()

> **seeked**(): `void`

#### Returns

`void`

***

### seeking()

> **seeking**(): `void`

#### Returns

`void`

***

### set()

> **set**(`time`, `seekableRange`): `void`

#### Parameters

##### time

`number`

##### seekableRange

[`SeekableRange`](reference/interfaces/SeekableRange.md)

#### Returns

`void`

***

### timeUpdated()

> **timeUpdated**(`time`): `void`

#### Parameters

##### time

`number`

#### Returns

`void`
