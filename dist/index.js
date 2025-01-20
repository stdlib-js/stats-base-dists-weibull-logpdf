"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var N=s(function(B,c){
var a=require('@stdlib/math-base-assert-is-nan/dist'),g=require('@stdlib/math-base-special-pow/dist'),f=require('@stdlib/math-base-special-ln/dist'),w=require('@stdlib/constants-float64-pinf/dist'),t=require('@stdlib/constants-float64-ninf/dist');function P(e,r,i){var u;return a(r)||a(i)||r<=0||i<=0?NaN:e<0||e===w||e===t?t:e===0?r===1?f(r/i):t:(u=e/i,f(r/i)+(r-1)*f(u)-g(u,r))}c.exports=P
});var y=s(function(C,F){
var l=require('@stdlib/utils-constant-function/dist'),p=require('@stdlib/math-base-assert-is-nan/dist'),O=require('@stdlib/math-base-special-pow/dist'),q=require('@stdlib/math-base-special-ln/dist'),R=require('@stdlib/constants-float64-pinf/dist'),o=require('@stdlib/constants-float64-ninf/dist');function h(e,r){var i;if(p(e)||p(r)||e<=0||r<=0)return l(NaN);return i=q(e/r),u;function u(n){var v;return n<0||n===R||n===o?o:n===0?e===1?q(e/r):o:(v=n/r,i+(e-1)*q(v)-O(v,e))}}F.exports=h
});var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),I=N(),z=y();j(I,"factory",z);module.exports=I;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
