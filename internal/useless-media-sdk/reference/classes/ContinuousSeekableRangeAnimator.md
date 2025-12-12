# ContinuousSeekableRangeAnimator

## Extends

- [`SeekableRangeAnimator`](reference/classes/SeekableRangeAnimator.md)

## Constructors

### Constructor

> **new ContinuousSeekableRangeAnimator**(): `ContinuousSeekableRangeAnimator`

#### Returns

`ContinuousSeekableRangeAnimator`

#### Overrides

[`SeekableRangeAnimator`](reference/classes/SeekableRangeAnimator.md).[`constructor`](SeekableRangeAnimator.md#constructor)

## Properties

### animatedSeekableRange?

> `protected` **animatedSeekableRange**?: [`SeekableRange`](reference/interfaces/SeekableRange.md)

#### Inherited from

[`SeekableRangeAnimator`](reference/classes/SeekableRangeAnimator.md).[`animatedSeekableRange`](SeekableRangeAnimator.md#animatedseekablerange)

***

### lastKnownSeekableRange?

> `protected` **lastKnownSeekableRange**?: [`SeekableRange`](reference/interfaces/SeekableRange.md)

#### Inherited from

[`SeekableRangeAnimator`](reference/classes/SeekableRangeAnimator.md).[`lastKnownSeekableRange`](SeekableRangeAnimator.md#lastknownseekablerange)

***

### lastKnownSeekableRangeTime?

> `protected` **lastKnownSeekableRangeTime**?: `number`

#### Inherited from

[`SeekableRangeAnimator`](reference/classes/SeekableRangeAnimator.md).[`lastKnownSeekableRangeTime`](SeekableRangeAnimator.md#lastknownseekablerangetime)

## Methods

### animateSeekableRange()

> `protected` **animateSeekableRange**(`time`): `void`

#### Parameters

##### time

`number`

#### Returns

`void`

#### Inherited from

[`SeekableRangeAnimator`](reference/classes/SeekableRangeAnimator.md).[`animateSeekableRange`](SeekableRangeAnimator.md#animateseekablerange)

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Overrides

[`SeekableRangeAnimator`](reference/classes/SeekableRangeAnimator.md).[`destroy`](SeekableRangeAnimator.md#destroy)

***

### get()

> **get**(): [`SeekableRange`](reference/interfaces/SeekableRange.md) | `undefined`

#### Returns

[`SeekableRange`](reference/interfaces/SeekableRange.md) | `undefined`

#### Inherited from

[`SeekableRangeAnimator`](reference/classes/SeekableRangeAnimator.md).[`get`](SeekableRangeAnimator.md#get)

***

### reset()

> **reset**(): `void`

#### Returns

`void`

#### Overrides

[`SeekableRangeAnimator`](reference/classes/SeekableRangeAnimator.md).[`reset`](SeekableRangeAnimator.md#reset)

***

### seeked()

> **seeked**(): `void`

#### Returns

`void`

#### Inherited from

[`SeekableRangeAnimator`](reference/classes/SeekableRangeAnimator.md).[`seeked`](SeekableRangeAnimator.md#seeked)

***

### seeking()

> **seeking**(): `void`

#### Returns

`void`

#### Inherited from

[`SeekableRangeAnimator`](reference/classes/SeekableRangeAnimator.md).[`seeking`](SeekableRangeAnimator.md#seeking)

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

#### Inherited from

[`SeekableRangeAnimator`](reference/classes/SeekableRangeAnimator.md).[`set`](SeekableRangeAnimator.md#set)

***

### timeUpdated()

> **timeUpdated**(`time`): `void`

#### Parameters

##### time

`number`

#### Returns

`void`

#### Inherited from

[`SeekableRangeAnimator`](reference/classes/SeekableRangeAnimator.md).[`timeUpdated`](SeekableRangeAnimator.md#timeupdated)
