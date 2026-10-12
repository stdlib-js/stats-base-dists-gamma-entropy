"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var t=s(function(g,n){
var u=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-digamma/dist'),m=require('@stdlib/math-base-special-gammaln/dist'),o=require('@stdlib/math-base-special-ln/dist');function q(e,r){var i;return u(e)||e<=0||u(r)||r<=0?NaN:(i=e-o(r),i+=m(e),i+=(1-e)*v(e),i)}n.exports=q
});var c=t();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
