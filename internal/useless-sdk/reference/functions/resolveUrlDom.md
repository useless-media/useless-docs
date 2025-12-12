# resolveUrlDom

> **resolveUrlDom**(...`args`): `string`

const baseUrl = 'https://someUser:somePassword@some.domain.com/some/path/to/file.extension';
resolveUrlDom(baseUrl, '/resolved') => 'https://someUser:somePassword@some.domain.com/resolved'
resolveUrlDom(baseUrl, '../resolved') => 'https://someUser:somePassword@some.domain.com/some/path/resolved'
resolveUrlDom(baseUrl, './a/../resolved') => 'https://someUser:somePassword@some.domain.com/some/path/to/resolved'
resolveUrlDom(baseUrl, '../a/b/', 'c/', 'new.file') => 'https://someUser:somePassword@some.domain.com/some/path/a/b/c/new.file'
resolveUrlDom(baseUrl, '//some.other.domain.com/') => 'https://some.other.domain.com/'
resolveUrlDom(baseUrl, '//some.other.domain.com', 'a/', 'b/') => 'https://some.other.domain.com/a/b/'

## Parameters

### args

...`any`[]

## Returns

`string`
