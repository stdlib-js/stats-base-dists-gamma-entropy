"use strict";var n=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var u=n(function(a,t){
var s=require('@stdlib/math-base-special-digamma/dist'),m=require('@stdlib/math-base-special-gammaln/dist'),o=require('@stdlib/math-base-special-ln/dist');function v(r,e){var i;return r<=0||e<=0?NaN:(i=r-o(e),i+=m(r),i+=(1-r)*s(r),i)}t.exports=v
});var q=u();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
