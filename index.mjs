// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.3-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-digamma@v0.3.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gammaln@v0.3.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.2.5-esm/index.mjs";function i(i,a){var n;return s(i)||i<=0||s(a)||a<=0?NaN:(n=i-m(a),n+=e(i),n+=(1-i)*t(i))}export{i as default};
//# sourceMappingURL=index.mjs.map
