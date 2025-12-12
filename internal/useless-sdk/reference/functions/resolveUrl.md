# resolveUrl

> **resolveUrl**(...`args`): `string`

const baseUrl = 'https://someUser:somePassword@some.domain.com/some/path/to/file.extension';
resolveUrl(baseUrl, '/resolved') => 'https://someUser:somePassword@some.domain.com/resolved'
resolveUrl(baseUrl, '../resolved') => 'https://someUser:somePassword@some.domain.com/some/path/resolved'
resolveUrl(baseUrl, './a/../resolved') => 'https://someUser:somePassword@some.domain.com/some/path/to/resolved'
resolveUrl(baseUrl, '../a/b/', 'c/', 'new.file') => 'https://someUser:somePassword@some.domain.com/some/path/a/b/c/new.file'
resolveUrl(baseUrl, '//some.other.domain.com/') => 'https://some.other.domain.com/'
resolveUrl(baseUrl, '//some.other.domain.com', 'a/', 'b/') => 'https://some.other.domain.com/a/b/'

## Parameters

### args

...`any`[]

## Returns

`string`
