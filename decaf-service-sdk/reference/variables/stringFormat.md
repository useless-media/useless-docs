# stringFormat

> `const` **stringFormat**: (`pattern?`, ...`args`) => `string` | `undefined`

stringFormat('{0}:{1}', 'a', 'b') => 'a:b'
stringFormat('{a}:{b}', { a: 1, b: 2 }) => '1:2'
stringFormat('{a}:{b}', { a: 1 }, { b: 2 }) => '1:2'
stringFormat('{a}:{b}:{2}', { a: 1 }, { b: 2 }, 3) => '1:2:3'
stringFormat('replaced = {deep.replace.example}', { deep: { replace: { example: true } } }) => 'replaced = true'
stringFormat('replaced = {deep.replace.example}', { deep: { replace: { example: true } }, depth: 0 }) => replaced = {deep.replace.example}
stringFormat('replaced = {deep.replace.example}', { deep: { replace: { example: true } }, depth: 1 }) => replaced = {deep.replace.example}
stringFormat('replaced = {deep.replace.example}', { deep: { replace: { example: true } }, depth: 2 }) => 'replaced = true'

## Parameters

### pattern?

`string`

### args?

...`any`[]

## Returns

`string` | `undefined`
