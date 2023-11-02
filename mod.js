// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var e=Math.floor;var n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var t=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;var a="function"==typeof Symbol?Symbol:void 0,o="function"==typeof a?a.toStringTag:"";var u=n&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,a,u,c;if(null==r)return t.call(r);n=r[o],c=o,e=null!=(u=r)&&i.call(u,c);try{r[o]=void 0}catch(e){return t.call(r)}return a=t.call(r),e?r[o]=n:delete r[o],a}:function(r){return t.call(r)},c="function"==typeof Uint32Array;var f="function"==typeof Uint32Array?Uint32Array:null;var s,l="function"==typeof Uint32Array?Uint32Array:void 0;s=function(){var r,e,n;if("function"!=typeof f)return!1;try{e=new f(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(c&&n instanceof Uint32Array||"[object Uint32Array]"===u(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?l:function(){throw new Error("not implemented")};var p=s,v="function"==typeof Float64Array;var y="function"==typeof Float64Array?Float64Array:null;var g,d="function"==typeof Float64Array?Float64Array:void 0;g=function(){var r,e,n;if("function"!=typeof y)return!1;try{e=new y([1,3.14,-3.14,NaN]),n=e,r=(v&&n instanceof Float64Array||"[object Float64Array]"===u(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?d:function(){throw new Error("not implemented")};var h=g,w="function"==typeof Uint8Array;var b="function"==typeof Uint8Array?Uint8Array:null;var m,A="function"==typeof Uint8Array?Uint8Array:void 0;m=function(){var r,e,n;if("function"!=typeof b)return!1;try{e=new b(e=[1,3.14,-3.14,256,257]),n=e,r=(w&&n instanceof Uint8Array||"[object Uint8Array]"===u(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?A:function(){throw new Error("not implemented")};var N=m,_="function"==typeof Uint16Array;var E="function"==typeof Uint16Array?Uint16Array:null;var U,k="function"==typeof Uint16Array?Uint16Array:void 0;U=function(){var r,e,n;if("function"!=typeof E)return!1;try{e=new E(e=[1,3.14,-3.14,65536,65537]),n=e,r=(_&&n instanceof Uint16Array||"[object Uint16Array]"===u(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?k:function(){throw new Error("not implemented")};var I,S={uint16:U,uint8:N};(I=new S.uint16(1))[0]=4660;var x=52===new S.uint8(I.buffer)[0],F=!0===x?1:0,j=new h(1),T=new p(j.buffer);function O(r){return j[0]=r,T[F]}var V=!0===x?0:1,$=new h(1),G=new p($.buffer);function H(r,e){return $[0]=r,G[V]=e>>>0,$[0]}function W(r,e,n){var t,i,a,o,u,c,f,s,l;return(i=2147483647&(t=O(r))|0)>=1072010280&&(r<0&&(r=-r,e=-e),r=(l=.7853981633974483-r)+(s=3061616997868383e-32-e),e=0),o=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(s=(l=r*r)*l),f=l*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(s),o=e+l*((u=l*r)*(o+f)+e),s=r+(o+=.3333333333333341*u),i>=1072010280?(1-(t>>30&2))*((f=n)-2*(r-(s*s/(s+f)-o))):1===n?s:(f=o-((l=H(s,0))-r),(c=H(a=-1/s,0))+a*((u=1+c*l)+c*f))}var C,L,P=!0===x?0:1,R=new h(1),M=new p(R.buffer);!0===x?(C=1,L=0):(C=0,L=1);var Z={HIGH:C,LOW:L},X=new h(1),Y=new p(X.buffer),z=Z.HIGH,q=Z.LOW;function B(r,e){return Y[z]=r,Y[q]=e,X[0]}var D=Number.POSITIVE_INFINITY,J=Number.NEGATIVE_INFINITY;function K(r){return r===D||r===J}var Q="function"==typeof Object.defineProperty?Object.defineProperty:null;var rr=Object.defineProperty;function er(r){return"number"==typeof r}function nr(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function tr(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+nr(i):nr(i)+r,t&&(r="-"+r)),r}var ir=String.prototype.toLowerCase,ar=String.prototype.toUpperCase;function or(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!er(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=tr(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=tr(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===ar.call(r.specifier)?ar.call(n):ir.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function ur(r){return"string"==typeof r}var cr=Math.abs,fr=String.prototype.toLowerCase,sr=String.prototype.toUpperCase,lr=String.prototype.replace,pr=/e\+(\d)$/,vr=/e-(\d)$/,yr=/^(\d+)$/,gr=/^(\d+)e/,dr=/\.0$/,hr=/\.0*e/,wr=/(\..*[^0])0*e/;function br(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!er(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":cr(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=lr.call(n,wr,"$1e"),n=lr.call(n,hr,"e"),n=lr.call(n,dr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=lr.call(n,pr,"e+0$1"),n=lr.call(n,vr,"e-0$1"),r.alternate&&(n=lr.call(n,yr,"$1."),n=lr.call(n,gr,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===sr.call(r.specifier)?sr.call(n):fr.call(n)}function mr(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function Ar(r,e,n){var t=e-r.length;return t<0?r:r=n?r+mr(t):mr(t)+r}var Nr=String.fromCharCode,_r=isNaN,Er=Array.isArray;function Ur(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function kr(r){var e,n,t,i,a,o,u,c,f;if(!Er(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,c=0;c<r.length;c++)if(ur(t=r[c]))o+=t;else{if(e=void 0!==t.precision,!(t=Ur(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,f=0;f<n.length;f++)switch(i=n.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,_r(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,_r(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=or(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!_r(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=_r(a)?String(t.arg):Nr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=br(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=tr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Ar(t.arg,t.width,t.padRight)),o+=t.arg||"",u+=1}return o}var Ir=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Sr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function xr(r){var e,n,t,i;for(n=[],i=0,t=Ir.exec(r);t;)(e=r.slice(i,Ir.lastIndex-t[0].length)).length&&n.push(e),n.push(Sr(t)),i=Ir.lastIndex,t=Ir.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function Fr(r){return"string"==typeof r}function jr(r){var e,n,t;if(!Fr(r))throw new TypeError(jr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=xr(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return kr.apply(null,n)}var Tr=Object.prototype,Or=Tr.toString,Vr=Tr.__defineGetter__,$r=Tr.__defineSetter__,Gr=Tr.__lookupGetter__,Hr=Tr.__lookupSetter__;var Wr,Cr,Lr=function(){try{return Q({},"x",{}),!0}catch(r){return!1}}()?rr:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Or.call(r))throw new TypeError(jr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===Or.call(n))throw new TypeError(jr("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(Gr.call(r,e)||Hr.call(r,e)?(t=r.__proto__,r.__proto__=Tr,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Vr&&Vr.call(r,e,n.get),o&&$r&&$r.call(r,e,n.set),r};function Pr(r,e,n){Lr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}!0===x?(Wr=1,Cr=0):(Wr=0,Cr=1);var Rr={HIGH:Wr,LOW:Cr},Mr=new h(1),Zr=new p(Mr.buffer),Xr=Rr.HIGH,Yr=Rr.LOW;function zr(r,e,n,t){return Mr[0]=r,e[t]=Zr[Xr],e[t+n]=Zr[Yr],e}function qr(r){return zr(r,[0,0],1,0)}Pr(qr,"assign",zr);var Br=[0,0];function Dr(r,e){var n,t;return qr.assign(r,Br,1,0),n=Br[0],n&=2147483647,t=O(e),B(n|=t&=2147483648,Br[1])}function Jr(r){return Math.abs(r)}function Kr(e,n,t,i){return r(e)||K(e)?(n[i]=e,n[i+t]=0,n):0!==e&&Jr(e)<22250738585072014e-324?(n[i]=4503599627370496*e,n[i+t]=-52,n):(n[i]=e,n[i+t]=0,n)}Pr((function(r){return Kr(r,[0,0],1,0)}),"assign",Kr);var Qr=[0,0],re=[0,0];function ee(e,n){var t,i;return 0===n||0===e||r(e)||K(e)?e:(Kr(e,Qr,1,0),n+=Qr[1],n+=function(r){var e=O(r);return(e=(2146435072&e)>>>20)-1023|0}(e=Qr[0]),n<-1074?Dr(0,e):n>1023?e<0?J:D:(n<=-1023?(n+=52,i=2220446049250313e-31):i=1,qr.assign(e,re,1,0),t=re[0],t&=2148532223,i*B(t|=n+1023<<20,re[1])))}function ne(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var te=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ie=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],ae=5.960464477539063e-8,oe=ne(20),ue=ne(20),ce=ne(20),fe=ne(20);function se(r,n,t,i,a,o,u,c,f){var s,l,p,v,y,g,d,h,w;for(v=o,w=i[t],h=t,y=0;h>0;y++)l=ae*w|0,fe[y]=w-16777216*l|0,w=i[h-1]+l,h-=1;if(w=ee(w,a),w-=8*e(.125*w),w-=d=0|w,p=0,a>0?(d+=y=fe[t-1]>>24-a,fe[t-1]-=y<<24-a,p=fe[t-1]>>23-a):0===a?p=fe[t-1]>>23:w>=.5&&(p=2),p>0){for(d+=1,s=0,y=0;y<t;y++)h=fe[y],0===s?0!==h&&(s=1,fe[y]=16777216-h):fe[y]=16777215-h;if(a>0)switch(a){case 1:fe[t-1]&=8388607;break;case 2:fe[t-1]&=4194303}2===p&&(w=1-w,0!==s&&(w-=ee(1,a)))}if(0===w){for(h=0,y=t-1;y>=o;y--)h|=fe[y];if(0===h){for(g=1;0===fe[o-g];g++);for(y=t+1;y<=t+g;y++){for(f[c+y]=te[u+y],l=0,h=0;h<=c;h++)l+=r[h]*f[c+(y-h)];i[y]=l}return se(r,n,t+=g,i,a,o,u,c,f)}}if(0===w)for(t-=1,a-=24;0===fe[t];)t-=1,a-=24;else(w=ee(w,-a))>=16777216?(l=ae*w|0,fe[t]=w-16777216*l|0,a+=24,fe[t+=1]=l):fe[t]=0|w;for(l=ee(1,a),y=t;y>=0;y--)i[y]=l*fe[y],l*=ae;for(y=t;y>=0;y--){for(l=0,g=0;g<=v&&g<=t-y;g++)l+=ie[g]*i[y+g];ce[t-y]=l}for(l=0,y=t;y>=0;y--)l+=ce[y];for(n[0]=0===p?l:-l,l=ce[0]-l,y=1;y<=t;y++)l+=ce[y];return n[1]=0===p?l:-l,7&d}function le(r,e,n,t){var i,a,o,u,c,f,s;for(4,(a=(n-3)/24|0)<0&&(a=0),u=n-24*(a+1),f=a-(o=t-1),s=o+4,c=0;c<=s;c++)oe[c]=f<0?0:te[f],f+=1;for(c=0;c<=4;c++){for(i=0,f=0;f<=o;f++)i+=r[f]*oe[o+(c-f)];ue[c]=i}return 4,se(r,e,4,ue,u,4,a,o,oe)}var pe=Math.round;function ve(r,e,n){var t,i,a,o,u;return a=r-1.5707963267341256*(t=pe(.6366197723675814*r)),o=6077100506506192e-26*t,u=e>>20|0,n[0]=a-o,u-(O(n[0])>>20&2047)>16&&(o=20222662487959506e-37*t-((i=a)-(a=i-(o=6077100506303966e-26*t))-o),n[0]=a-o,u-(O(n[0])>>20&2047)>49&&(o=84784276603689e-45*t-((i=a)-(a=i-(o=20222662487111665e-37*t))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var ye=1.5707963267341256,ge=6077100506506192e-26,de=2*ge,he=4*ge,we=[0,0,0],be=[0,0];function me(r,e){var n,t,i,a,o,u,c;if((i=2147483647&O(r)|0)<=1072243195)return e[0]=r,e[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?ve(r,i,e):i<=1073928572?r>0?(c=r-ye,e[0]=c-ge,e[1]=c-e[0]-ge,1):(c=r+ye,e[0]=c+ge,e[1]=c-e[0]+ge,-1):r>0?(c=r-2*ye,e[0]=c-de,e[1]=c-e[0]-de,2):(c=r+2*ye,e[0]=c+de,e[1]=c-e[0]+de,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?ve(r,i,e):r>0?(c=r-3*ye,e[0]=c-1.8231301519518578e-10,e[1]=c-e[0]-1.8231301519518578e-10,3):(c=r+3*ye,e[0]=c+1.8231301519518578e-10,e[1]=c-e[0]+1.8231301519518578e-10,-3):1075388923===i?ve(r,i,e):r>0?(c=r-4*ye,e[0]=c-he,e[1]=c-e[0]-he,4):(c=r+4*ye,e[0]=c+he,e[1]=c-e[0]+he,-4);if(i<1094263291)return ve(r,i,e);if(i>=2146435072)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return R[0]=r,M[P]}(r),c=B(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)we[o]=0|c,c=16777216*(c-we[o]);for(we[2]=c,a=3;0===we[a-1];)a-=1;return u=le(we,be,t,a),r<0?(e[0]=-be[0],e[1]=-be[1],-u):(e[0]=be[0],e[1]=be[1],u)}var Ae=[0,0];var Ne=3.141592653589793,_e=!0===x?1:0,Ee=new h(1),Ue=new p(Ee.buffer);var ke=.6931471803691238,Ie=1.9082149292705877e-10;function Se(e){var n,t,i,a,o,u,c,f,s,l,p,v;return 0===e?J:r(e)||e<0?NaN:(o=0,(t=O(e))<1048576&&(o-=54,t=O(e*=0x40000000000000)),t>=2146435072?e+e:(o+=(t>>20)-1023|0,o+=(f=(t&=1048575)+614244&1048576|0)>>20|0,c=(e=function(r,e){return Ee[0]=r,Ue[_e]=e>>>0,Ee[0]}(e,t|1072693248^f))-1,(1048575&2+t)<3?0===c?0===o?0:o*ke+o*Ie:(u=c*c*(.5-.3333333333333333*c),0===o?c-u:o*ke-(u-o*Ie-c)):(f=t-398458|0,s=440401-t|0,a=(p=(v=(l=c/(2+c))*l)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),i=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),u=i+a,(f|=s)>0?(n=.5*c*c,0===o?c-(n-l*(n+u)):o*ke-(n-(l*(n+u)+o*Ie)-c)):0===o?c-l*(c-u):o*ke-(l*(c-u)-o*Ie-c))))}function xe(n){var t,i;if(r(n)||0===n)return NaN;if(n<=-1){if((t=(n=1-n)-e(n))>.5&&(t-=1),0===t)return NaN;i=Ne/function(r){var e,n;return e=O(r),(e&=2147483647)<=1072243195?e<1044381696?r:W(r,0,1):e>=2146435072?NaN:(n=me(r,Ae),W(Ae[0],Ae[1],1-((1&n)<<1)))}(Ne*t)}else i=0;if(n>=10)return i+=function(r){var e;return Se(r-=1)+1/(2*r)-(e=1/(r*r))*function(r){return 0===r?.08333333333333333:.08333333333333333+r*(r*(.003968253968253968+r*(r*(.007575757575757576+r*(r*(.08333333333333333+-.4432598039215686*r)-.021092796092796094))-.004166666666666667))-.008333333333333333)}(e)}(n),i;for(;n>2;)i+=1/(n-=1);for(;n<1;)i-=1/n,n+=1;return i+=function(r){var e,n;return e=r-1.4616321446374059,e-=3.309564688275257e-10,e-=9.016312093258695e-20,n=function(r){var e,n;return 0===r?.25479851061131553:((r<0?-r:r)<=1?(e=.25479851061131553+r*(r*(r*(r*(r*(0*r-.002071332116774595)-.04525132144873906)-.28919126444774784)-.6503185377089651)-.3255503118680449),n=1+r*(2.076711702373047+r*(1.4606242909763516+r*(.43593529692665967+r*(.054151797245674226+r*(.0021284987017821146+-5.578984132167551e-7*r)))))):(e=0+(r=1/r)*(r*(r*(r*(r*(.25479851061131553*r-.3255503118680449)-.6503185377089651)-.28919126444774784)-.04525132144873906)-.002071332116774595),n=r*(.0021284987017821146+r*(.054151797245674226+r*(.43593529692665967+r*(1.4606242909763516+r*(2.076711702373047+1*r)))))-5.578984132167551e-7),e/n)}(r-1),.9955816268920898*e+e*n}(n),i}var Fe=Math.ceil;function je(r,e){var n,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-r*e))}var Te=-.16666666666666632;function Oe(r,e){var n,t,i;return n=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),t=i*r,0===e?r+t*(Te+i*n):r-(i*(.5*e-t*n)-e-t*Te)}var Ve=[0,0];function $e(r){var e;if(e=O(r),(e&=2147483647)<=1072243195)return e<1044381696?1:je(r,0);if(e>=2146435072)return NaN;switch(3&me(r,Ve)){case 0:return je(Ve[0],Ve[1]);case 1:return-Oe(Ve[0],Ve[1]);case 2:return-je(Ve[0],Ve[1]);default:return Oe(Ve[0],Ve[1])}}var Ge=[0,0];function He(r){var e;if(e=O(r),(e&=2147483647)<=1072243195)return e<1045430272?r:Oe(r,0);if(e>=2146435072)return NaN;switch(3&me(r,Ge)){case 0:return Oe(Ge[0],Ge[1]);case 1:return je(Ge[0],Ge[1]);case 2:return-Oe(Ge[0],Ge[1]);default:return-je(Ge[0],Ge[1])}}var We=1.4616321449683622,Ce=1.4616321449683622;function Le(n){var t,i,a,o,u,c,f,s,l,p,v,y,g;if(r(n)||K(n))return n;if(0===n)return D;if(n<0?(t=!0,n=-n):t=!1,n<8470329472543003e-37)return-Se(n);if(t){if(n>=4503599627370496)return D;if(l=function(e){var n,t;return r(e)||K(e)?NaN:0===(n=Jr(t=e%2))||1===n?Dr(0,t):n<.25?He(Ne*t):n<.75?Dr($e(Ne*(n=.5-n)),t):n<1.25?(t=Dr(1,t)-t,He(Ne*t)):n<1.75?-Dr($e(Ne*(n-=1.5)),t):(t-=Dr(2,t),He(Ne*t))}(n),0===l)return D;i=Se(Ne/Jr(l*n))}if(1===n||2===n)return 0;if(n<2)switch(n<=.9?(g=-Se(n),n>=We-1+.27?(v=1-n,a=0):n>=We-1-.27?(v=n-(Ce-1),a=1):(v=n,a=2)):(g=0,n>=We+.27?(v=2-n,a=0):n>=We-.27?(v=n-Ce,a=1):(v=n-1,a=2)),a){case 0:c=.07721566490153287+(y=v*v)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(y),u=y*(.3224670334241136+y*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(y)),g+=(f=v*c+u)-.5*v;break;case 1:c=.48383612272381005+(p=(y=v*v)*v)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(p),u=p*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(p)-.1475877229945939,o=.06462494023913339+p*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(p),g+=-.12148629053584961+(f=y*c-(-3638676997039505e-33-p*(u+v*o)));break;case 2:c=v*(v*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(v)-.07721566490153287),u=1+v*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(v),g+=-.5*v+c/u}else if(n<8)switch(a=function(r){return r<0?Fe(r):e(r)}(n),f=(v=n-a)*(v*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(v)-.07721566490153287),s=1+v*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(v),g=.5*v+f/s,y=1,a){case 7:y*=v+6;case 6:y*=v+5;case 5:y*=v+4;case 4:y*=v+3;case 3:g+=Se(y*=v+2)}else n<0x400000000000000?(l=Se(n),p=.4189385332046727+(y=1/n)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(v=y*y),g=(n-.5)*(l-1)+p):g=n*(Se(n)-1);return t&&(g=i-g),g}function Pe(r,e){var n;return r<=0||e<=0?NaN:(n=r-Se(e),n+=Le(r),n+=(1-r)*xe(r))}export{Pe as default};
//# sourceMappingURL=mod.js.map
