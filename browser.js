// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,r;n=this,r=function(){"use strict";var n,r=function(n){return n!=n},t=Math.floor,e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),u=Object.prototype.toString,f=u,o=function(n){return f.call(n)},i=Object.prototype.hasOwnProperty,c=function(n,r){return null!=n&&i.call(n,r)},a="function"==typeof Symbol?Symbol.toStringTag:"",y=c,l=a,s=u,v=o,p=function(n){var r,t,e;if(null==n)return s.call(n);t=n[l],r=y(n,l);try{n[l]=void 0}catch(r){return s.call(n)}return e=s.call(n),r?n[l]=t:delete n[l],e},w=e&&"symbol"==typeof Symbol.toStringTag?p:v,b=w,A="function"==typeof Uint32Array,N="function"==typeof Uint32Array?Uint32Array:null,h=function(n){return A&&n instanceof Uint32Array||"[object Uint32Array]"===b(n)},d=N,U=function(){var n,r;if("function"!=typeof d)return!1;try{r=new d(r=[1,3.14,-3.14,4294967296,4294967297]),n=h(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},m="function"==typeof Uint32Array?Uint32Array:void 0,I=function(){throw new Error("not implemented")},g=U()?m:I,F=w,S="function"==typeof Float64Array,H="function"==typeof Float64Array?Float64Array:null,O=function(n){return S&&n instanceof Float64Array||"[object Float64Array]"===F(n)},T=H,j=function(){var n,r;if("function"!=typeof T)return!1;try{r=new T([1,3.14,-3.14,NaN]),n=O(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n},E="function"==typeof Float64Array?Float64Array:void 0,G=function(){throw new Error("not implemented")},x=j()?E:G,L=w,M="function"==typeof Uint8Array,W="function"==typeof Uint8Array?Uint8Array:null,k=function(n){return M&&n instanceof Uint8Array||"[object Uint8Array]"===L(n)},P=W,V=function(){var n,r;if("function"!=typeof P)return!1;try{r=new P(r=[1,3.14,-3.14,256,257]),n=k(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},Y="function"==typeof Uint8Array?Uint8Array:void 0,_=function(){throw new Error("not implemented")},q=V()?Y:_,z=w,B="function"==typeof Uint16Array,C="function"==typeof Uint16Array?Uint16Array:null,D=function(n){return B&&n instanceof Uint16Array||"[object Uint16Array]"===z(n)},J=C,K=function(){var n,r;if("function"!=typeof J)return!1;try{r=new J(r=[1,3.14,-3.14,65536,65537]),n=D(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},Q="function"==typeof Uint16Array?Uint16Array:void 0,R=function(){throw new Error("not implemented")},X={uint16:K()?Q:R,uint8:q};(n=new X.uint16(1))[0]=4660;var Z,$,nn=52===new X.uint8(n.buffer)[0],rn=g,tn=!0===nn?1:0,en=new x(1),un=new rn(en.buffer),fn=function(n){return en[0]=n,un[tn]},on=g,cn=!0===nn?0:1,an=new x(1),yn=new on(an.buffer),ln=function(n,r){return an[0]=n,yn[cn]=r>>>0,an[0]},sn=fn,vn=ln,pn=function(n){return 0===n?.13333333333320124:.13333333333320124+n*(.021869488294859542+n*(.0035920791075913124+n*(.0005880412408202641+n*(7817944429395571e-20+-18558637485527546e-21*n))))},wn=function(n){return 0===n?.05396825397622605:.05396825397622605+n*(.0088632398235993+n*(.0014562094543252903+n*(.0002464631348184699+n*(7140724913826082e-20+2590730518636337e-20*n))))},bn=function(n,r,t){var e,u,f,o,i,c,a,y,l;return(u=2147483647&(e=sn(n))|0)>=1072010280&&(n<0&&(n=-n,r=-r),n=(l=.7853981633974483-n)+(y=3061616997868383e-32-r),r=0),o=r+(l=n*n)*((i=l*n)*((o=pn(y=l*l))+(a=l*wn(y)))+r),y=n+(o+=.3333333333333341*i),u>=1072010280?(1-(e>>30&2))*((a=t)-2*(n-(y*y/(y+a)-o))):1===t?y:(vn(l=y,0),a=o-(l-n),vn(c=f=-1/y,0),c+f*((i=1+c*l)+c*a))},An=g,Nn=!0===nn?0:1,hn=new x(1),dn=new An(hn.buffer),Un=function(n){return hn[0]=n,dn[Nn]};!0===nn?(Z=1,$=0):(Z=0,$=1);var mn,In,gn=g,Fn={HIGH:Z,LOW:$},Sn=new x(1),Hn=new gn(Sn.buffer),On=Fn.HIGH,Tn=Fn.LOW,jn=function(n,r){return Hn[On]=n,Hn[Tn]=r,Sn[0]},En=jn,Gn=Number.POSITIVE_INFINITY,xn=Number.NEGATIVE_INFINITY,Ln=Gn,Mn=xn,Wn=function(n){return n===Ln||n===Mn};!0===nn?(mn=1,In=0):(mn=0,In=1);var kn=g,Pn={HIGH:mn,LOW:In},Vn=new x(1),Yn=new kn(Vn.buffer),_n=Pn.HIGH,qn=Pn.LOW,zn=function(n,r){return Vn[0]=r,n[0]=Yn[_n],n[1]=Yn[qn],n},Bn=function(n,r){return 1===arguments.length?zn([0,0],n):zn(n,r)},Cn=Bn,Dn=fn,Jn=En,Kn=[0,0],Qn=function(n,r){var t,e;return Cn(Kn,n),t=Kn[0],t&=2147483647,e=Dn(r),Jn(t|=e&=2147483648,Kn[1])},Rn=function(n){return Math.abs(n)},Xn=Wn,Zn=r,$n=Rn,nr=function(n,r){return Zn(r)||Xn(r)?(n[0]=r,n[1]=0,n):0!==r&&$n(r)<22250738585072014e-324?(n[0]=4503599627370496*r,n[1]=-52,n):(n[0]=r,n[1]=0,n)},rr=function(n,r){return 1===arguments.length?nr([0,0],n):nr(n,r)},tr=fn,er=function(n){var r=tr(n);return(r=(2146435072&r)>>>20)-1023|0},ur=Gn,fr=xn,or=r,ir=Wn,cr=Qn,ar=rr,yr=er,lr=Bn,sr=En,vr=[0,0],pr=[0,0],wr=function(n,r){var t,e;return 0===r||0===n||or(n)||ir(n)?n:(ar(vr,n),r+=vr[1],(r+=yr(n=vr[0]))<-1074?cr(0,n):r>1023?n<0?fr:ur:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,lr(pr,n),t=pr[0],t&=2148532223,e*sr(t|=r+1023<<20,pr[1])))},br=function(n,r){var t,e;for(t=[],e=0;e<r;e++)t.push(n);return t},Ar=t,Nr=wr,hr=function(n){return br(0,n)},dr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Ur=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],mr=16777216,Ir=5.960464477539063e-8,gr=hr(20),Fr=hr(20),Sr=hr(20),Hr=hr(20);function Or(n,r,t,e,u,f,o,i,c){var a,y,l,s,v,p,w,b,A;for(s=f,A=e[t],b=t,v=0;b>0;v++)y=Ir*A|0,Hr[v]=A-mr*y|0,A=e[b-1]+y,b-=1;if(A=Nr(A,u),A-=8*Ar(.125*A),A-=w=0|A,l=0,u>0?(w+=v=Hr[t-1]>>24-u,Hr[t-1]-=v<<24-u,l=Hr[t-1]>>23-u):0===u?l=Hr[t-1]>>23:A>=.5&&(l=2),l>0){for(w+=1,a=0,v=0;v<t;v++)b=Hr[v],0===a?0!==b&&(a=1,Hr[v]=16777216-b):Hr[v]=16777215-b;if(u>0)switch(u){case 1:Hr[t-1]&=8388607;break;case 2:Hr[t-1]&=4194303}2===l&&(A=1-A,0!==a&&(A-=Nr(1,u)))}if(0===A){for(b=0,v=t-1;v>=f;v--)b|=Hr[v];if(0===b){for(p=1;0===Hr[f-p];p++);for(v=t+1;v<=t+p;v++){for(c[i+v]=dr[o+v],y=0,b=0;b<=i;b++)y+=n[b]*c[i+(v-b)];e[v]=y}return Or(n,r,t+=p,e,u,f,o,i,c)}}if(0===A)for(t-=1,u-=24;0===Hr[t];)t-=1,u-=24;else(A=Nr(A,-u))>=mr?(y=Ir*A|0,Hr[t]=A-mr*y|0,u+=24,Hr[t+=1]=y):Hr[t]=0|A;for(y=Nr(1,u),v=t;v>=0;v--)e[v]=y*Hr[v],y*=Ir;for(v=t;v>=0;v--){for(y=0,p=0;p<=s&&p<=t-v;p++)y+=Ur[p]*e[v+p];Sr[t-v]=y}for(y=0,v=t;v>=0;v--)y+=Sr[v];for(r[0]=0===l?y:-y,y=Sr[0]-y,v=1;v<=t;v++)y+=Sr[v];return r[1]=0===l?y:-y,7&w}var Tr=function(n,r,t,e){var u,f,o,i,c,a,y;for((f=(t-3)/24|0)<0&&(f=0),i=t-24*(f+1),a=f-(o=e-1),y=o+4,c=0;c<=y;c++)gr[c]=a<0?0:dr[a],a+=1;for(c=0;c<=4;c++){for(u=0,a=0;a<=o;a++)u+=n[a]*gr[o+(c-a)];Fr[c]=u}return Or(n,r,4,Fr,i,4,f,o,gr)},jr=Math.round,Er=fn,Gr=fn,xr=Un,Lr=En,Mr=Tr,Wr=function(n,r,t){var e,u,f,o,i;return f=n-1.5707963267341256*(e=jr(.6366197723675814*n)),o=6077100506506192e-26*e,i=r>>20|0,t[0]=f-o,i-(Er(t[0])>>20&2047)>16&&(o=20222662487959506e-37*e-((u=f)-(f=u-(o=6077100506303966e-26*e))-o),t[0]=f-o,i-(Er(t[0])>>20&2047)>49&&(o=84784276603689e-45*e-((u=f)-(f=u-(o=20222662487111665e-37*e))-o),t[0]=f-o)),t[1]=f-t[0]-o,e},kr=1.5707963267341256,Pr=6077100506506192e-26,Vr=2*Pr,Yr=3*Pr,_r=4*Pr,qr=[0,0,0],zr=[0,0],Br=function(n,r){var t,e,u,f,o,i,c;if((u=2147483647&Gr(n)|0)<=1072243195)return r[0]=n,r[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Wr(n,u,r):u<=1073928572?n>0?(c=n-kr,r[0]=c-Pr,r[1]=c-r[0]-Pr,1):(c=n+kr,r[0]=c+Pr,r[1]=c-r[0]+Pr,-1):n>0?(c=n-2*kr,r[0]=c-Vr,r[1]=c-r[0]-Vr,2):(c=n+2*kr,r[0]=c+Vr,r[1]=c-r[0]+Vr,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Wr(n,u,r):n>0?(c=n-3*kr,r[0]=c-Yr,r[1]=c-r[0]-Yr,3):(c=n+3*kr,r[0]=c+Yr,r[1]=c-r[0]+Yr,-3):1075388923===u?Wr(n,u,r):n>0?(c=n-4*kr,r[0]=c-_r,r[1]=c-r[0]-_r,4):(c=n+4*kr,r[0]=c+_r,r[1]=c-r[0]+_r,-4);if(u<1094263291)return Wr(n,u,r);if(u>=2146435072)return r[0]=NaN,r[1]=NaN,0;for(t=xr(n),c=Lr(u-((e=(u>>20)-1046)<<20|0),t),o=0;o<2;o++)qr[o]=0|c,c=16777216*(c-qr[o]);for(qr[2]=c,f=3;0===qr[f-1];)f-=1;return i=Mr(qr,zr,e,f),n<0?(r[0]=-zr[0],r[1]=-zr[1],-i):(r[0]=zr[0],r[1]=zr[1],i)},Cr=Br,Dr=fn,Jr=bn,Kr=Cr,Qr=[0,0],Rr=function(n){var r,t;return r=Dr(n),(r&=2147483647)<=1072243195?r<1044381696?n:Jr(n,0,1):r>=2146435072?NaN:(t=Kr(n,Qr),Jr(Qr[0],Qr[1],1-((1&t)<<1)))},Xr=3.141592653589793,Zr=g,$r=!0===nn?1:0,nt=new x(1),rt=new Zr(nt.buffer),tt=function(n,r){return nt[0]=n,rt[$r]=r>>>0,nt[0]},et=fn,ut=tt,ft=r,ot=xn,it=function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)},ct=function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))},at=.6931471803691238,yt=1.9082149292705877e-10,lt=1048575,st=function(n){var r,t,e,u,f,o,i,c,a,y,l;return 0===n?ot:ft(n)||n<0?NaN:(u=0,(t=et(n))<1048576&&(u-=54,t=et(n*=0x40000000000000)),t>=2146435072?n+n:(u+=(t>>20)-1023|0,u+=(i=614244+(t&=lt)&1048576|0)>>20|0,o=(n=ut(n,t|1072693248^i))-1,(lt&2+t)<3?0===o?0===u?0:u*at+u*yt:(f=o*o*(.5-.3333333333333333*o),0===u?o-f:u*at-(f-u*yt-o)):(i=t-398458|0,c=440401-t|0,e=(y=(l=(a=o/(2+o))*a)*l)*it(y),f=l*ct(y)+e,(i|=c)>0?(r=.5*o*o,0===u?o-(r-a*(r+f)):u*at-(r-(a*(r+f)+u*yt)-o)):0===u?o-a*(o-f):u*at-(a*(o-f)-u*yt-o))))},vt=st,pt=function(n){return 0===n?.08333333333333333:.08333333333333333+n*(n*(.003968253968253968+n*(n*(.007575757575757576+n*(n*(.08333333333333333+-.4432598039215686*n)-.021092796092796094))-.004166666666666667))-.008333333333333333)},wt=function(n){var r,t;return 0===n?.25479851061131553:((n<0?-n:n)<=1?(r=.25479851061131553+n*(n*(n*(n*(n*(0*n-.002071332116774595)-.04525132144873906)-.28919126444774784)-.6503185377089651)-.3255503118680449),t=1+n*(2.076711702373047+n*(1.4606242909763516+n*(.43593529692665967+n*(.054151797245674226+n*(.0021284987017821146+-5.578984132167551e-7*n)))))):(r=0+(n=1/n)*(n*(n*(n*(n*(.25479851061131553*n-.3255503118680449)-.6503185377089651)-.28919126444774784)-.04525132144873906)-.002071332116774595),t=n*(.0021284987017821146+n*(.054151797245674226+n*(.43593529692665967+n*(1.4606242909763516+n*(2.076711702373047+1*n)))))-5.578984132167551e-7),r/t)},bt=r,At=t,Nt=Rr,ht=Xr,dt=function(n){var r;return vt(n-=1)+1/(2*n)-(r=1/(n*n))*pt(r)},Ut=function(n){var r;return r=n-1.4616321446374059,r-=3.309564688275257e-10,.9955816268920898*(r-=9.016312093258695e-20)+r*wt(n-1)},mt=function(n){var r,t;if(bt(n)||0===n)return NaN;if(n<=-1){if((r=(n=1-n)-At(n))>.5&&(r-=1),0===r)return NaN;t=ht/Nt(ht*r)}else t=0;if(n>=10)return t+=dt(n);for(;n>2;)t+=1/(n-=1);for(;n<1;)t-=1/n,n+=1;return t+=Ut(n)},It=Math.ceil,gt=t,Ft=It,St=function(n){return 0===n?.0416666666666666:.0416666666666666+n*(2480158728947673e-20*n-.001388888888887411)},Ht=function(n){return 0===n?-2.7557314351390663e-7:n*(2.087572321298175e-9+-11359647557788195e-27*n)-2.7557314351390663e-7},Ot=function(n,r){var t,e,u,f;return u=(f=n*n)*f,e=f*St(f),e+=u*u*Ht(f),(u=1-(t=.5*f))+(1-u-t+(f*e-n*r))},Tt=-.16666666666666632,jt=function(n,r){var t,e,u;return t=.00833333333332249+(u=n*n)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*n,0===r?n+e*(Tt+u*t):n-(u*(.5*r-e*t)-r-e*Tt)},Et=fn,Gt=Ot,xt=jt,Lt=Cr,Mt=[0,0],Wt=fn,kt=Ot,Pt=jt,Vt=Cr,Yt=[0,0],_t=r,qt=Wn,zt=function(n){var r;if(r=Et(n),(r&=2147483647)<=1072243195)return r<1044381696?1:Gt(n,0);if(r>=2146435072)return NaN;switch(3&Lt(n,Mt)){case 0:return Gt(Mt[0],Mt[1]);case 1:return-xt(Mt[0],Mt[1]);case 2:return-Gt(Mt[0],Mt[1]);default:return xt(Mt[0],Mt[1])}},Bt=function(n){var r;if(r=Wt(n),(r&=2147483647)<=1072243195)return r<1045430272?n:Pt(n,0);if(r>=2146435072)return NaN;switch(3&Vt(n,Yt)){case 0:return Pt(Yt[0],Yt[1]);case 1:return kt(Yt[0],Yt[1]);case 2:return-Pt(Yt[0],Yt[1]);default:return-kt(Yt[0],Yt[1])}},Ct=Rn,Dt=Qn,Jt=Xr,Kt=r,Qt=Wn,Rt=Rn,Xt=st,Zt=function(n){return n<0?Ft(n):gt(n)},$t=function(n){var r,t;return _t(n)||qt(n)?NaN:0===(r=Ct(t=n%2))||1===r?Dt(0,t):r<.25?Bt(Jt*t):r<.75?Dt(zt(Jt*(r=.5-r)),t):r<1.25?(t=Dt(1,t)-t,Bt(Jt*t)):r<1.75?-Dt(zt(Jt*(r-=1.5)),t):(t-=Dt(2,t),Bt(Jt*t))},ne=Gn,re=function(n){return 0===n?.06735230105312927:.06735230105312927+n*(.007385550860814029+n*(.0011927076318336207+n*(.00022086279071390839+25214456545125733e-21*n)))},te=function(n){return 0===n?.020580808432516733:.020580808432516733+n*(.0028905138367341563+n*(.0005100697921535113+n*(.00010801156724758394+44864094961891516e-21*n)))},ee=function(n){return 0===n?1.3920053346762105:1.3920053346762105+n*(.7219355475671381+n*(.17193386563280308+n*(.01864591917156529+n*(.0007779424963818936+7326684307446256e-21*n))))},ue=function(n){return 0===n?.21498241596060885:.21498241596060885+n*(.325778796408931+n*(.14635047265246445+n*(.02664227030336386+n*(.0018402845140733772+3194753265841009e-20*n))))},fe=function(n){return 0===n?-.032788541075985965:n*(.006100538702462913+n*(.00031563207090362595*n-.0014034646998923284))-.032788541075985965},oe=function(n){return 0===n?.01797067508118204:.01797067508118204+n*(n*(.000881081882437654+-.00031275416837512086*n)-.0036845201678113826)},ie=function(n){return 0===n?-.010314224129834144:n*(.0022596478090061247+n*(.0003355291926355191*n-.0005385953053567405))-.010314224129834144},ce=function(n){return 0===n?.6328270640250934:.6328270640250934+n*(1.4549225013723477+n*(.9777175279633727+n*(.22896372806469245+.013381091853678766*n)))},ae=function(n){return 0===n?2.4559779371304113:2.4559779371304113+n*(2.128489763798934+n*(.7692851504566728+n*(.10422264559336913+.003217092422824239*n)))},ye=function(n){return 0===n?.08333333333333297:.08333333333333297+n*(n*(.0007936505586430196+n*(n*(.0008363399189962821+-.0016309293409657527*n)-.00059518755745034))-.0027777777772877554)},le=1.4616321449683622,se=1.4616321449683622,ve=function(n){var r,t,e,u,f,o,i,c;if(Kt(n)||Qt(n))return n;if(0===n)return ne;if(n<0?(r=!0,n=-n):r=!1,n<8470329472543003e-37)return-Xt(n);if(r){if(n>=4503599627370496)return ne;if(0===(u=$t(n)))return ne;t=Xt(3.141592653589793/Rt(u*n))}if(1===n||2===n)return 0;if(n<2)switch(n<=.9?(c=-Xt(n),n>=le-1+.27?(o=1-n,e=0):n>=le-1-.27?(o=n-(se-1),e=1):(o=n,e=2)):(c=0,n>=le+.27?(o=2-n,e=0):n>=le-.27?(o=n-se,e=1):(o=n-1,e=2)),e){case 0:c+=o*(.07721566490153287+(i=o*o)*re(i))+i*(.3224670334241136+i*te(i))-.5*o;break;case 1:c+=(i=o*o)*(.48383612272381005+(f=i*o)*fe(f))-(-3638676997039505e-33-f*(f*oe(f)-.1475877229945939+o*(.06462494023913339+f*ie(f))))-.12148629053584961;break;case 2:c+=-.5*o+o*(o*ce(o)-.07721566490153287)/(1+o*ae(o))}else if(n<8)switch(c=.5*(o=n-(e=Zt(n)))+o*(o*ue(o)-.07721566490153287)/(1+o*ee(o)),i=1,e){case 7:i*=o+6;case 6:i*=o+5;case 5:i*=o+4;case 4:i*=o+3;case 3:c+=Xt(i*=o+2)}else c=n<0x400000000000000?(n-.5)*((u=Xt(n))-1)+(f=.4189385332046727+(i=1/n)*ye(o=i*i)):n*(Xt(n)-1);return r&&(c=t-c),c};return function(n,r){var t;return n<=0||r<=0?NaN:(t=n-st(r),t+=ve(n),t+=(1-n)*mt(n))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).entropy=r();
//# sourceMappingURL=browser.js.map
