// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-digamma@v0.3.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gammaln@v0.3.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.2.5-esm/index.mjs";function m(m,a){var i;return m<=0||a<=0?NaN:(i=m-e(a),i+=t(m),i+=(1-m)*s(m))}export{m as default};
//# sourceMappingURL=index.mjs.map
