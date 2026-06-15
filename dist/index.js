"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var u=n(function(a,t){
var s=require('@stdlib/math-base-special-digamma/dist'),m=require('@stdlib/math-base-special-gammaln/dist'),o=require('@stdlib/math-base-special-ln/dist');function v(e,r){var i;return e<=0||r<=0?NaN:(i=e-o(r),i+=m(e),i+=(1-e)*s(e),i)}t.exports=v
});var q=u();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
