// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function i(r,t,n){var i=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+e(o):e(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function f(r){var t,e,f;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,f=parseInt(e,10),!isFinite(f)){if(!n(e))throw new Error("invalid integer. Value: "+e);f=0}return f<0&&("u"===r.specifier||10!==t)&&(f=4294967295+f+1),f<0?(e=(-f).toString(t),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=f.toString(t),f||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):o.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function u(r){return"string"==typeof r}var c=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,y=/e\+(\d)$/,d=/e-(\d)$/,g=/^(\d+)$/,v=/^(\d+)e/,w=/\.0$/,h=/\.0*e/,b=/(\..*[^0])0*e/;function A(r){var t,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((t=r.precision)>0&&(t-=1),e=i.toExponential(t)):e=i.toPrecision(r.precision),r.alternate||(e=s.call(e,b,"$1e"),e=s.call(e,h,"e"),e=s.call(e,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=s.call(e,y,"e+0$1"),e=s.call(e,d,"e-0$1"),r.alternate&&(e=s.call(e,g,"$1."),e=s.call(e,v,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===p.call(r.specifier)?p.call(e):l.call(e)}function m(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function F(r,t,n){var e=t-r.length;return e<0?r:r=n?r+m(e):m(e)+r}var E=String.fromCharCode,N=isNaN,_=Array.isArray;function I(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function j(r){var t,n,e,o,a,c,l,p,s;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",l=1,p=0;p<r.length;p++)if(u(e=r[p]))c+=e;else{if(t=void 0!==e.precision,!(e=I(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),n=e.flags,s=0;s<n.length;s++)switch(o=n.charAt(s)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,N(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,N(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=f(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!N(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=N(a)?String(e.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=A(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=F(e.arg,e.width,e.padRight)),c+=e.arg||"",l+=1}return c}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function x(r){var t,n,e,i;for(n=[],i=0,e=U.exec(r);e;)(t=r.slice(i,U.lastIndex-e[0].length)).length&&n.push(t),n.push(S(e)),i=U.lastIndex,e=U.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function k(r){return"string"==typeof r}function O(r){var t,n;if(!k(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[x(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return j.apply(null,t)}var H=Object.prototype,T=H.toString,G=H.__defineGetter__,V=H.__defineSetter__,W=H.__lookupGetter__,L=H.__lookupSetter__,$=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===T.call(r))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===T.call(n))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(W.call(r,t)||L.call(r,t)?(e=r.__proto__,r.__proto__=H,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&G&&G.call(r,t,n.get),a&&V&&V.call(r,t,n.set),r};function C(r,t,n){$(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function P(r){return r!=r}var R=Math.floor;function M(r){return R(r)===r}function Z(r){return M(r/2)}function X(r){return Z(r>0?r-1:r+1)}var Y=Number.POSITIVE_INFINITY,q=Number.NEGATIVE_INFINITY;function z(r){return r===Y||r===q}var B=Math.sqrt;function D(r){return Math.abs(r)}var J,K="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),Q=Object.prototype.toString,rr=Object.prototype.hasOwnProperty,tr="function"==typeof Symbol?Symbol:void 0,nr="function"==typeof tr?tr.toStringTag:"",er=K&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,i,o;if(null==r)return Q.call(r);n=r[nr],o=nr,t=null!=(i=r)&&rr.call(i,o);try{r[nr]=void 0}catch(t){return Q.call(r)}return e=Q.call(r),t?r[nr]=n:delete r[nr],e}:function(r){return Q.call(r)},ir="function"==typeof Uint32Array,or="function"==typeof Uint32Array?Uint32Array:null,ar="function"==typeof Uint32Array?Uint32Array:void 0;J=function(){var r,t,n;if("function"!=typeof or)return!1;try{t=new or(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(ir&&n instanceof Uint32Array||"[object Uint32Array]"===er(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var fr,ur=J,cr="function"==typeof Float64Array,lr="function"==typeof Float64Array?Float64Array:null,pr="function"==typeof Float64Array?Float64Array:void 0;fr=function(){var r,t,n;if("function"!=typeof lr)return!1;try{t=new lr([1,3.14,-3.14,NaN]),n=t,r=(cr&&n instanceof Float64Array||"[object Float64Array]"===er(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var sr,yr=fr,dr="function"==typeof Uint8Array,gr="function"==typeof Uint8Array?Uint8Array:null,vr="function"==typeof Uint8Array?Uint8Array:void 0;sr=function(){var r,t,n;if("function"!=typeof gr)return!1;try{t=new gr(t=[1,3.14,-3.14,256,257]),n=t,r=(dr&&n instanceof Uint8Array||"[object Uint8Array]"===er(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var wr,hr=sr,br="function"==typeof Uint16Array,Ar="function"==typeof Uint16Array?Uint16Array:null,mr="function"==typeof Uint16Array?Uint16Array:void 0;wr=function(){var r,t,n;if("function"!=typeof Ar)return!1;try{t=new Ar(t=[1,3.14,-3.14,65536,65537]),n=t,r=(br&&n instanceof Uint16Array||"[object Uint16Array]"===er(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var Fr,Er={uint16:wr,uint8:hr};(Fr=new Er.uint16(1))[0]=4660;var Nr,_r,Ir=52===new Er.uint8(Fr.buffer)[0];!0===Ir?(Nr=1,_r=0):(Nr=0,_r=1);var jr={HIGH:Nr,LOW:_r},Ur=new yr(1),Sr=new ur(Ur.buffer),xr=jr.HIGH,kr=jr.LOW;function Or(r,t,n,e){return Ur[0]=r,t[e]=Sr[xr],t[e+n]=Sr[kr],t}function Hr(r){return Or(r,[0,0],1,0)}C(Hr,"assign",Or);var Tr,Gr="function"==typeof Float64Array,Vr="function"==typeof Float64Array?Float64Array:null,Wr="function"==typeof Float64Array?Float64Array:void 0;Tr=function(){var r,t,n;if("function"!=typeof Vr)return!1;try{t=new Vr([1,3.14,-3.14,NaN]),n=t,r=(Gr&&n instanceof Float64Array||"[object Float64Array]"===er(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Wr:function(){throw new Error("not implemented")};var Lr=!0===Ir?0:1,$r=new Tr(1),Cr=new ur($r.buffer);function Pr(r,t){return $r[0]=r,Cr[Lr]=t>>>0,$r[0]}function Rr(r){return 0|r}var Mr,Zr,Xr,Yr=2147483647,qr="function"==typeof Float64Array,zr="function"==typeof Float64Array?Float64Array:null,Br="function"==typeof Float64Array?Float64Array:void 0;Mr=function(){var r,t,n;if("function"!=typeof zr)return!1;try{t=new zr([1,3.14,-3.14,NaN]),n=t,r=(qr&&n instanceof Float64Array||"[object Float64Array]"===er(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Br:function(){throw new Error("not implemented")},!0===Ir?(Zr=1,Xr=0):(Zr=0,Xr=1);var Dr={HIGH:Zr,LOW:Xr},Jr=new Mr(1),Kr=new ur(Jr.buffer),Qr=Dr.HIGH,rt=Dr.LOW;function tt(r,t,n,e){return Jr[0]=r,t[e]=Kr[Qr],t[e+n]=Kr[rt],t}function nt(r){return tt(r,[0,0],1,0)}C(nt,"assign",tt);var et,it="function"==typeof Float64Array,ot="function"==typeof Float64Array?Float64Array:null,at="function"==typeof Float64Array?Float64Array:void 0;et=function(){var r,t,n;if("function"!=typeof ot)return!1;try{t=new ot([1,3.14,-3.14,NaN]),n=t,r=(it&&n instanceof Float64Array||"[object Float64Array]"===er(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?at:function(){throw new Error("not implemented")};var ft=!0===Ir?1:0,ut=new et(1),ct=new ur(ut.buffer);function lt(r){return ut[0]=r,ct[ft]}var pt,st,yt,dt="function"==typeof Float64Array,gt="function"==typeof Float64Array?Float64Array:null,vt="function"==typeof Float64Array?Float64Array:void 0;pt=function(){var r,t,n;if("function"!=typeof gt)return!1;try{t=new gt([1,3.14,-3.14,NaN]),n=t,r=(dt&&n instanceof Float64Array||"[object Float64Array]"===er(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?vt:function(){throw new Error("not implemented")},!0===Ir?(st=1,yt=0):(st=0,yt=1);var wt={HIGH:st,LOW:yt},ht=new pt(1),bt=new ur(ht.buffer),At=wt.HIGH,mt=wt.LOW;function Ft(r,t){return bt[At]=r,bt[mt]=t,ht[0]}var Et=[0,0];function Nt(r,t){var n,e;return nt.assign(r,Et,1,0),n=Et[0],n&=2147483647,e=lt(t),Ft(n|=e&=2147483648,Et[1])}var _t,It="function"==typeof Float64Array,jt="function"==typeof Float64Array?Float64Array:null,Ut="function"==typeof Float64Array?Float64Array:void 0;_t=function(){var r,t,n;if("function"!=typeof jt)return!1;try{t=new jt([1,3.14,-3.14,NaN]),n=t,r=(It&&n instanceof Float64Array||"[object Float64Array]"===er(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Ut:function(){throw new Error("not implemented")};var St=!0===Ir?1:0,xt=new _t(1),kt=new ur(xt.buffer);function Ot(r,t){return xt[0]=r,kt[St]=t>>>0,xt[0]}var Ht=1023,Tt=1048576,Gt=[1,1.5],Vt=[0,.5849624872207642],Wt=[0,1.350039202129749e-8];function Lt(r,t,n,e){return P(r)||z(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}C((function(r){return Lt(r,[0,0],1,0)}),"assign",Lt);var $t,Ct,Pt,Rt="function"==typeof Float64Array,Mt="function"==typeof Float64Array?Float64Array:null,Zt="function"==typeof Float64Array?Float64Array:void 0;$t=function(){var r,t,n;if("function"!=typeof Mt)return!1;try{t=new Mt([1,3.14,-3.14,NaN]),n=t,r=(Rt&&n instanceof Float64Array||"[object Float64Array]"===er(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Zt:function(){throw new Error("not implemented")},!0===Ir?(Ct=1,Pt=0):(Ct=0,Pt=1);var Xt={HIGH:Ct,LOW:Pt},Yt=new $t(1),qt=new ur(Yt.buffer),zt=Xt.HIGH,Bt=Xt.LOW;function Dt(r,t,n,e){return Yt[0]=r,t[e]=qt[zt],t[e+n]=qt[Bt],t}function Jt(r){return Dt(r,[0,0],1,0)}C(Jt,"assign",Dt);var Kt=[0,0],Qt=[0,0];function rn(r,t){var n,e;return 0===t||0===r||P(r)||z(r)?r:(Lt(r,Kt,1,0),t+=Kt[1],t+=function(r){var t=lt(r);return(t=(2146435072&t)>>>20)-Ht|0}(r=Kt[0]),t<-1074?Nt(0,r):t>1023?r<0?q:Y:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Jt.assign(r,Qt,1,0),n=Qt[0],n&=2148532223,e*Ft(n|=t+Ht<<20,Qt[1])))}var tn=1048575,nn=1048576,en=1083179008,on=1e300,an=1e-300,fn=[0,0],un=[0,0];function cn(r,t){var n,e,i,o,a,f,u,c,l,p,s,y,d,g;if(P(r)||P(t))return NaN;if(Hr.assign(t,fn,1,0),a=fn[0],0===fn[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return B(r);if(-.5===t)return 1/B(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(z(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:D(r)<1==(t===Y)?0:Y}(r,t)}if(Hr.assign(r,fn,1,0),o=fn[0],0===fn[1]){if(0===o)return function(r,t){return t===q?Y:t===Y?0:t>0?X(t)?r:0:X(t)?Nt(Y,r):Y}(r,t);if(1===r)return 1;if(-1===r&&X(t))return-1;if(z(r))return r===q?cn(-0,-t):t<0?0:Y}if(r<0&&!1===M(t))return(r-r)/(r-r);if(i=D(r),n=o&Yr|0,e=a&Yr|0,u=a>>>31|0,f=(f=o>>>31|0)&&X(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(lt(r)&Yr)<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===u?f*on*on:f*an*an;if(n>1072693248)return 0===u?f*on*on:f*an*an;s=function(r,t){var n,e,i,o,a,f;return n=(a=1.9259629911266175e-8*(i=t-1)-i*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Pr(e=(o=1.4426950216293335*i)+a,0))-o),r[0]=e,r[1]=n,r}(un,i)}else s=function(r,t,n){var e,i,o,a,f,u,c,l,p,s,y,d,g,v,w,h,b,A,m,F,E;return A=0,n<Tt&&(A-=53,n=lt(t*=9007199254740992)),A+=(n>>20)-Ht|0,n=1072693248|(m=1048575&n|0),m<=235662?F=0:m<767610?F=1:(F=0,A+=1,n-=Tt),a=Pr(i=(h=(t=Ot(t,n))-(c=Gt[F]))*(b=1/(t+c)),0),e=524288+(n>>1|536870912),u=Ot(0,e+=F<<18),w=(o=i*i)*o*(0===(E=o)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),u=Pr(u=3+(o=a*a)+(w+=(f=b*(h-a*u-a*(t-(u-c))))*(a+i)),0),g=(y=-7.028461650952758e-9*(p=Pr(p=(h=a*u)+(b=f*u+(w-(u-3-o))*i),0))+.9617966939259756*(b-(p-h))+Wt[F])-((d=Pr(d=(s=.9617967009544373*p)+y+(l=Vt[F])+(v=A),0))-v-l-s),r[0]=d,r[1]=g,r}(un,i,n);if(y=(p=(t-(c=Pr(t,0)))*s[0]+t*s[1])+(l=c*s[0]),Hr.assign(y,fn,1,0),d=Rr(fn[0]),g=Rr(fn[1]),d>=en){if(0!=(d-en|g))return f*on*on;if(p+8008566259537294e-32>y-l)return f*on*on}else if((d&Yr)>=1083231232){if(0!=(d-3230714880|g))return f*an*an;if(p<=y-l)return f*an*an}return y=function(r,t,n){var e,i,o,a,f,u,c,l,p,s;return p=((l=r&Yr|0)>>20)-Ht|0,c=0,l>1071644672&&(i=Ot(0,((c=r+(nn>>p+1)>>>0)&~(tn>>(p=((c&Yr)>>20)-Ht|0)))>>>0),c=(c&tn|nn)>>20-p>>>0,r<0&&(c=-c),t-=i),r=Rr(r=lt(u=1-((u=(o=.6931471824645996*(i=Pr(i=n+t,0)))+(a=.6931471805599453*(n-(i-t))+-1.904654299957768e-9*i))*(e=u-(i=u*u)*(0===(s=i)?.16666666666666602:.16666666666666602+s*(s*(6613756321437934e-20+s*(4.1381367970572385e-8*s-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=a-(u-o))+u*f)-u))),(r+=c<<20>>>0)>>20<=0?rn(u,c):Ot(u,r)}(d,l,p),f*y}var ln=.6931471803691238,pn=1.9082149292705877e-10,sn=1048575;function yn(r){var t,n,e,i,o,a,f,u,c,l,p,s;return 0===r?q:P(r)||r<0?NaN:(o=0,(n=lt(r))<1048576&&(o-=54,n=lt(r*=0x40000000000000)),n>=2146435072?r+r:(o+=(n>>20)-Ht|0,o+=(u=614244+(n&=sn)&1048576|0)>>20|0,f=(r=Ot(r,n|1072693248^u))-1,(sn&2+n)<3?0===f?0===o?0:o*ln+o*pn:(a=f*f*(.5-.3333333333333333*f),0===o?f-a:o*ln-(a-o*pn-f)):(u=n-398458|0,c=440401-n|0,i=(p=(s=(l=f/(2+f))*l)*s)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=s*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),a=e+i,(u|=c)>0?(t=.5*f*f,0===o?f-(t-l*(t+a)):o*ln-(t-(l*(t+a)+o*pn)-f)):0===o?f-l*(f-a):o*ln-(l*(f-a)-o*pn-f))))}function dn(r,t,n){var e;return P(t)||P(n)||t<=0||n<=0?NaN:r<0||r===Y||r===q?q:0===r?1===t?yn(t/n):q:(e=r/n,yn(t/n)+(t-1)*yn(e)-cn(e,t))}return C(dn,"factory",(function(r,t){var n,e;return P(r)||P(t)||r<=0||t<=0?(e=NaN,function(){return e}):(n=yn(r/t),function(e){var i;return e<0||e===Y||e===q?q:0===e?1===r?yn(r/t):q:n+(r-1)*yn(i=e/t)-cn(i,r)})})),dn},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).logpdf=t();
//# sourceMappingURL=browser.js.map
