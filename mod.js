// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,e=Object.prototype,u=e.toString,o=e.__defineGetter__,i=e.__defineSetter__,a=e.__lookupGetter__,f=e.__lookupSetter__;var c=t,v=function(r,n,t){var c,v,l,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((v="value"in t)&&(a.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),l="get"in t,y="set"in t,v&&(l||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(r,n,t.get),y&&i&&i.call(r,n,t.set),r},l=n()?c:v;var y=function(r,n,t){l(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})};var p=function(r){return r!=r},b=Math.floor;var w=function(r){return b(r)===r},A=w;var _=function(r){return A(r/2)};var m=function(r){return _(r>0?r-1:r+1)},d=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY,U=d,h=s;var N=function(r){return r===U||r===h},j=Math.sqrt;var g=function(r){return Math.abs(r)};var I=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var O=function(){return I&&"symbol"==typeof Symbol.toStringTag},S=Object.prototype.toString,E=S;var F=function(r){return E.call(r)},H=Object.prototype.hasOwnProperty;var T=function(r,n){return null!=r&&H.call(r,n)},G="function"==typeof Symbol?Symbol.toStringTag:"",P=T,L=G,V=S;var W=F,x=function(r){var n,t,e;if(null==r)return V.call(r);t=r[L],n=P(r,L);try{r[L]=void 0}catch(n){return V.call(r)}return e=V.call(r),n?r[L]=t:delete r[L],e},M=O()?x:W,k=M,Y="function"==typeof Uint32Array;var q="function"==typeof Uint32Array?Uint32Array:null,C=function(r){return Y&&r instanceof Uint32Array||"[object Uint32Array]"===k(r)},z=q;var B=function(){var r,n;if("function"!=typeof z)return!1;try{n=new z(n=[1,3.14,-3.14,4294967296,4294967297]),r=C(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var D="function"==typeof Uint32Array?Uint32Array:void 0,J=function(){throw new Error("not implemented")},K=B()?D:J,Q=M,R="function"==typeof Float64Array;var X="function"==typeof Float64Array?Float64Array:null,Z=function(r){return R&&r instanceof Float64Array||"[object Float64Array]"===Q(r)},$=X;var rr=function(){var r,n;if("function"!=typeof $)return!1;try{n=new $([1,3.14,-3.14,NaN]),r=Z(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var nr="function"==typeof Float64Array?Float64Array:void 0,tr=function(){throw new Error("not implemented")},er=rr()?nr:tr,ur=M,or="function"==typeof Uint8Array;var ir="function"==typeof Uint8Array?Uint8Array:null,ar=function(r){return or&&r instanceof Uint8Array||"[object Uint8Array]"===ur(r)},fr=ir;var cr=function(){var r,n;if("function"!=typeof fr)return!1;try{n=new fr(n=[1,3.14,-3.14,256,257]),r=ar(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var vr="function"==typeof Uint8Array?Uint8Array:void 0,lr=function(){throw new Error("not implemented")},yr=cr()?vr:lr,pr=M,br="function"==typeof Uint16Array;var wr="function"==typeof Uint16Array?Uint16Array:null,Ar=function(r){return br&&r instanceof Uint16Array||"[object Uint16Array]"===pr(r)},_r=wr;var mr=function(){var r,n;if("function"!=typeof _r)return!1;try{n=new _r(n=[1,3.14,-3.14,65536,65537]),r=Ar(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var dr,sr="function"==typeof Uint16Array?Uint16Array:void 0,Ur=function(){throw new Error("not implemented")},hr={uint16:mr()?sr:Ur,uint8:yr};(dr=new hr.uint16(1))[0]=4660;var Nr,jr,gr=52===new hr.uint8(dr.buffer)[0];!0===gr?(Nr=1,jr=0):(Nr=0,jr=1);var Ir=K,Or={HIGH:Nr,LOW:jr},Sr=new er(1),Er=new Ir(Sr.buffer),Fr=Or.HIGH,Hr=Or.LOW;var Tr=function(r,n){return Sr[0]=n,r[0]=Er[Fr],r[1]=Er[Hr],r};var Gr=function(r,n){return 1===arguments.length?Tr([0,0],r):Tr(r,n)},Pr=K,Lr=!0===gr?0:1,Vr=new er(1),Wr=new Pr(Vr.buffer);var xr=function(r,n){return Vr[0]=r,Wr[Lr]=n>>>0,Vr[0]},Mr=xr;var kr=function(r){return 0|r},Yr=K,qr=!0===gr?1:0,Cr=new er(1),zr=new Yr(Cr.buffer);var Br,Dr,Jr=function(r){return Cr[0]=r,zr[qr]};!0===gr?(Br=1,Dr=0):(Br=0,Dr=1);var Kr=K,Qr={HIGH:Br,LOW:Dr},Rr=new er(1),Xr=new Kr(Rr.buffer),Zr=Qr.HIGH,$r=Qr.LOW;var rn=function(r,n){return Xr[Zr]=r,Xr[$r]=n,Rr[0]},nn=rn,tn=Gr,en=Jr,un=nn,on=[0,0];var an=function(r,n){var t,e;return tn(on,r),t=on[0],t&=2147483647,e=en(n),un(t|=e&=2147483648,on[1])},fn=m,cn=an,vn=s,ln=d;var yn=function(r,n){return n===vn?ln:n===ln?0:n>0?fn(n)?r:0:fn(n)?cn(ln,r):ln},pn=Jr;var bn=function(r,n){return(2147483647&pn(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},wn=g,An=d;var _n=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:wn(r)<1==(n===An)?0:An},mn=K,dn=!0===gr?1:0,sn=new er(1),Un=new mn(sn.buffer);var hn=function(r,n){return sn[0]=r,Un[dn]=n>>>0,sn[0]};var Nn=Jr,jn=Mr,gn=hn,In=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},On=[1,1.5],Sn=[0,.5849624872207642],En=[0,1.350039202129749e-8];var Fn=Mr,Hn=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var Tn=N,Gn=p,Pn=g;var Ln=function(r,n){return Gn(n)||Tn(n)?(r[0]=n,r[1]=0,r):0!==n&&Pn(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var Vn=Jr;var Wn=function(r){var n=Vn(r);return(n=(2146435072&n)>>>20)-1023|0},xn=d,Mn=s,kn=p,Yn=N,qn=an,Cn=function(r,n){return 1===arguments.length?Ln([0,0],r):Ln(r,n)},zn=Wn,Bn=Gr,Dn=nn,Jn=[0,0],Kn=[0,0];var Qn=function(r,n){var t,e;return 0===n||0===r||kn(r)||Yn(r)?r:(Cn(Jn,r),n+=Jn[1],(n+=zn(r=Jn[0]))<-1074?qn(0,r):n>1023?r<0?Mn:xn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Bn(Kn,r),t=Kn[0],t&=2148532223,e*Dn(t|=n+1023<<20,Kn[1])))};var Rn=Jr,Xn=hn,Zn=Mr,$n=kr,rt=Qn,nt=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var tt=p,et=m,ut=N,ot=w,it=j,at=g,ft=Gr,ct=Mr,vt=kr,lt=s,yt=d,pt=yn,bt=bn,wt=_n,At=function(r,n,t){var e,u,o,i,a,f,c,v,l,y,p,b,w,A,_,m,d,s,U,h;return s=0,t<1048576&&(s-=53,t=Nn(n*=9007199254740992)),s+=(t>>20)-1023|0,t=1072693248|(U=1048575&t|0),U<=235662?h=0:U<767610?h=1:(h=0,s+=1,t-=1048576),e=524288+(t>>1|536870912),a=(d=1/((n=gn(n,t))+(c=On[h])))*((m=n-c)-(i=jn(u=m*d,0))*(f=gn(0,e+=h<<18))-i*(n-(f-c))),_=(o=u*u)*o*In(o),f=jn(f=3+(o=i*i)+(_+=a*(i+u)),0),w=(p=-7.028461650952758e-9*(l=jn(l=(m=i*f)+(d=a*f+(_-(f-3-o))*u),0))+.9617966939259756*(d-(l-m))+En[h])-((b=jn(b=(y=.9617967009544373*l)+p+(v=Sn[h])+(A=s),0))-A-v-y),r[0]=b,r[1]=w,r},_t=function(r,n){var t,e,u,o,i;return t=(i=1.9259629911266175e-8*(u=n-1)-1.4426950408889634*(u*u*Hn(u)))-((e=Fn(e=(o=1.4426950216293335*u)+i,0))-o),r[0]=e,r[1]=t,r},mt=function(r,n,t){var e,u,o,i,a,f,c,v,l,y;return y=((l=2147483647&r|0)>>20)-1023|0,v=0,l>1071644672&&(e=((v=r+(1048576>>y+1)>>>0)&~(1048575>>(y=((2147483647&v)>>20)-1023|0)))>>>0,v=(1048575&v|1048576)>>20-y>>>0,r<0&&(v=-v),n-=o=Xn(0,e)),f=(a=.6931471805599453*(t-((o=Zn(o=t+n,0))-n))+-1.904654299957768e-9*o)-((c=(i=.6931471824645996*o)+a)-i),u=c-(o=c*c)*nt(o),r=Rn(c=1-(c*u/(u-2)-(f+c*f)-c)),r=$n(r),c=(r+=v<<20>>>0)>>20<=0?rt(c,v):Xn(c,r)},dt=1e300,st=1e-300,Ut=[0,0],ht=[0,0];var Nt=function r(n,t){var e,u,o,i,a,f,c,v,l,y,p,b,w,A;if(tt(n)||tt(t))return NaN;if(ft(Ut,t),a=Ut[0],0===Ut[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return it(n);if(-.5===t)return 1/it(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(ut(t))return wt(n,t)}if(ft(Ut,n),i=Ut[0],0===Ut[1]){if(0===i)return pt(n,t);if(1===n)return 1;if(-1===n&&et(t))return-1;if(ut(n))return n===lt?r(-0,-t):t<0?0:yt}if(n<0&&!1===ot(t))return(n-n)/(n-n);if(o=at(n),e=2147483647&i|0,u=2147483647&a|0,c=a>>>31|0,f=(f=i>>>31|0)&&et(t)?-1:1,u>1105199104){if(u>1139802112)return bt(n,t);if(e<1072693247)return 1===c?f*dt*dt:f*st*st;if(e>1072693248)return 0===c?f*dt*dt:f*st*st;p=_t(ht,o)}else p=At(ht,o,e);if(y=(t-(v=ct(t,0)))*p[0]+t*p[1],l=v*p[0],ft(Ut,b=y+l),w=vt(Ut[0]),A=vt(Ut[1]),w>=1083179008){if(0!=(w-1083179008|A))return f*dt*dt;if(y+8008566259537294e-32>b-l)return f*dt*dt}else if((2147483647&w)>=1083231232){if(0!=(w-3230714880|A))return f*st*st;if(y<=b-l)return f*st*st}return f*(b=mt(w,l,y))},jt=Nt;var gt=Jr,It=hn,Ot=p,St=s,Et=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},Ft=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},Ht=.6931471803691238,Tt=1.9082149292705877e-10;var Gt=function(r){var n,t,e,u,o,i,a,f,c,v,l;return 0===r?St:Ot(r)||r<0?NaN:(u=0,(t=gt(r))<1048576&&(u-=54,t=gt(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-1023|0,u+=(a=(t&=1048575)+614244&1048576|0)>>20|0,i=(r=It(r,t|1072693248^a))-1,(1048575&2+t)<3?0===i?0===u?0:u*Ht+u*Tt:(o=i*i*(.5-.3333333333333333*i),0===u?i-o:u*Ht-(o-u*Tt-i)):(a=t-398458|0,f=440401-t|0,e=(v=(l=(c=i/(2+i))*c)*l)*Et(v),o=l*Ft(v)+e,(a|=f)>0?(n=.5*i*i,0===u?i-(n-c*(n+o)):u*Ht-(n-(c*(n+o)+u*Tt)-i)):0===u?i-c*(i-o):u*Ht-(c*(i-o)-u*Tt-i))))};function Pt(r,n,t){var e;return p(n)||p(t)||n<=0||t<=0?NaN:r<0||r===d||r===s?s:0===r?1===n?Gt(n/t):s:(e=r/t,Gt(n/t)+(n-1)*Gt(e)-jt(e,n))}var Lt=function(r){return function(){return r}};function Vt(r,n){var t;return p(r)||p(n)||r<=0||n<=0?Lt(NaN):(t=Gt(r/n),function(e){var u;if(e<0)return s;if(e===d||e===s)return s;if(0===e)return 1===r?Gt(r/n):s;return t+(r-1)*Gt(u=e/n)-jt(u,r)})}y(Pt,"factory",Vt);export{Pt as default,Vt as factory};
//# sourceMappingURL=mod.js.map
