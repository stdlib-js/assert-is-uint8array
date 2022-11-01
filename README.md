<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isUint8Array

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is a [Uint8Array][mdn-uint8array].



<section class="usage">

## Usage

```javascript
import isUint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-uint8array@esm/index.mjs';
```

#### isUint8Array( value )

Tests if a value is a [`Uint8Array`][mdn-uint8array].

```javascript
import Uint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@esm/index.mjs';

var bool = isUint8Array( new Uint8Array( 10 ) );
// returns true

bool = isUint8Array( [] );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import Int8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-int8@esm/index.mjs';
import Uint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@esm/index.mjs';
import Uint8ClampedArray from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8c@esm/index.mjs';
import Int16Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-int16@esm/index.mjs';
import Uint16Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint16@esm/index.mjs';
import Int32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-int32@esm/index.mjs';
import Uint32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@esm/index.mjs';
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';
import isUint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-uint8array@esm/index.mjs';

var bool = isUint8Array( new Uint8Array( 10 ) );
// returns true

bool = isUint8Array( new Int8Array( 10 ) );
// returns false

bool = isUint8Array( new Uint8ClampedArray( 10 ) );
// returns false

bool = isUint8Array( new Int16Array( 10 ) );
// returns false

bool = isUint8Array( new Uint16Array( 10 ) );
// returns false

bool = isUint8Array( new Int32Array( 10 ) );
// returns false

bool = isUint8Array( new Uint32Array( 10 ) );
// returns false

bool = isUint8Array( new Float32Array( 10 ) );
// returns false

bool = isUint8Array( new Float64Array( 10 ) );
// returns false

bool = isUint8Array( new Array( 10 ) );
// returns false

bool = isUint8Array( {} );
// returns false

bool = isUint8Array( null );
// returns false

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-typed-array`][@stdlib/assert/is-typed-array]</span><span class="delimiter">: </span><span class="description">test if a value is a typed array.</span>
-   <span class="package-name">[`@stdlib/assert/is-uint16array`][@stdlib/assert/is-uint16array]</span><span class="delimiter">: </span><span class="description">test if a value is a Uint16Array.</span>
-   <span class="package-name">[`@stdlib/assert/is-uint32array`][@stdlib/assert/is-uint32array]</span><span class="delimiter">: </span><span class="description">test if a value is a Uint32Array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-uint8array.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-uint8array

[test-image]: https://github.com/stdlib-js/assert-is-uint8array/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-is-uint8array/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-uint8array/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-uint8array?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-uint8array.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-uint8array/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-uint8array/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-uint8array/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-uint8array/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-is-uint8array/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-uint8array/main/LICENSE

[mdn-uint8array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array

<!-- <related-links> -->

[@stdlib/assert/is-typed-array]: https://github.com/stdlib-js/assert-is-typed-array/tree/esm

[@stdlib/assert/is-uint16array]: https://github.com/stdlib-js/assert-is-uint16array/tree/esm

[@stdlib/assert/is-uint32array]: https://github.com/stdlib-js/assert-is-uint32array/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
