// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.0.7-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";function d(t,m,d){var o;return s(m)||s(d)||m<=0||d<=0?NaN:t<0||t===i||t===r?r:0===t?1===m?e(m/d):r:(o=t/d,e(m/d)+(m-1)*e(o)-n(o,m))}function o(t,d){var o;return s(t)||s(d)||t<=0||d<=0?m(NaN):(o=e(t/d),function(s){var m;if(s<0)return r;if(s===i||s===r)return r;if(0===s)return 1===t?e(t/d):r;return o+(t-1)*e(m=s/d)-n(m,t)})}t(d,"factory",o);export{d as default,o as factory};
//# sourceMappingURL=index.mjs.map
