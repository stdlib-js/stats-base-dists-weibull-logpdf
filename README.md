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

# Logarithm of Probability Density Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Weibull][weibull-distribution] distribution logarithm of [probability density function][pdf] (PDF).

<section class="intro">

The [probability density function][pdf] (PDF) for a [Weibull][weibull-distribution] random variable is

<!-- <equation class="equation" label="eq:weibull_weibull_pdf" align="center" raw="f(x;\lambda,k) = \begin{cases} \frac{k}{\lambda}\left (\frac{x}{\lambda} \right)^{k-1}e^{-(x/\lambda)^k} & x \geq 0 \\ 0 & x < 0\end{cases}" alt="Probability density function (PDF) for a Weibull distribution."> -->

<div class="equation" align="center" data-raw-text="f(x;\lambda,k) = \begin{cases} \frac{k}{\lambda}\left (\frac{x}{\lambda} \right)^{k-1}e^{-(x/\lambda)^k} &amp; x \geq 0 \\ 0 &amp; x &lt; 0\end{cases}" data-equation="eq:weibull_weibull_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/weibull/logpdf/docs/img/equation_weibull_weibull_pdf.svg" alt="Probability density function (PDF) for a Weibull distribution.">
    <br>
</div>

<!-- </equation> -->

where `lambda > 0` and `k > 0` are the respective [scale][scale] and [shape][shape] parameters of the distribution.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-weibull-logpdf
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var logpdf = require( '@stdlib/stats-base-dists-weibull-logpdf' );
```

#### logpdf( x, k, lambda )

Evaluates the logarithm of the [probability density function][pdf] (PDF) for a [Weibull][weibull-distribution] distribution with [shape parameter][shape] `k` and [scale parameter][scale] `lambda`.

```javascript
var y = logpdf( 2.0, 1.0, 0.5 );
// returns ~-3.307

y = logpdf( -1.0, 4.0, 2.0 );
// returns -Infinity
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logpdf( NaN, 1.0, 1.0 );
// returns NaN

y = logpdf( 0.0, NaN, 1.0 );
// returns NaN

y = logpdf( 0.0, 1.0, NaN );
// returns NaN
```

If provided `k <= 0`, the function returns `NaN`.

```javascript
var y = logpdf( 2.0, 0.0, 1.0 );
// returns NaN

y = logpdf( 2.0, -1.0, 1.0 );
// returns NaN
```

If provided `lambda <= 0`, the function returns `NaN`.

```javascript
var y = logpdf( 2.0, 1.0, 0.0 );
// returns NaN

y = logpdf( 2.0, 1.0, -1.0 );
// returns NaN
```

#### logpdf.factory( k, lambda )

Returns a `function` for evaluating the logarithm of the [PDF][pdf] for a [Weibull][weibull-distribution] distribution with [shape parameter][shape] `k` and [scale parameter][scale] `lambda`.

```javascript
var mylogpdf = logpdf.factory( 2.0, 10.0 );

var y = mylogpdf( 12.0 );
// returns ~-2.867

y = mylogpdf( 5.0 );
// returns ~-2.553
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In virtually all cases, using the `logpdf` or `logcdf` functions is preferable to manually computing the logarithm of the `pdf` or `cdf`, respectively, since the latter is prone to overflow and underflow.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var logpdf = require( '@stdlib/stats-base-dists-weibull-logpdf' );

var lambda;
var k;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 10.0;
    lambda = randu() * 10.0;
    k = randu() * 10.0;
    y = logpdf( x, k, lambda );
    console.log( 'x: %d, k: %d, λ: %d, ln(f(x;k,λ)): %d', x.toFixed( 4 ), k.toFixed( 4 ), lambda.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

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

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-weibull-logpdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-weibull-logpdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-weibull-logpdf/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-base-dists-weibull-logpdf/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-weibull-logpdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-weibull-logpdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-weibull-logpdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-weibull-logpdf/main

-->

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-weibull-logpdf/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-weibull-logpdf/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-weibull-logpdf/tree/esm

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-weibull-logpdf/main/LICENSE

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[weibull-distribution]: https://en.wikipedia.org/wiki/Weibull_distribution

[shape]: https://en.wikipedia.org/wiki/Shape_parameter

[scale]: https://en.wikipedia.org/wiki/Scale_parameter

</section>

<!-- /.links -->
