// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-digamma@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gammaln@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";var a=s,m=t,i=e;var r=function(s,t){var e;return s<=0||t<=0?NaN:(e=s-i(t),e+=m(s),e+=(1-s)*a(s))};export{r as default};
//# sourceMappingURL=index.mjs.map
