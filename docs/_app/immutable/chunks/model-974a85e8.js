var Mg=Object.defineProperty;var Hg=(t,s,r)=>s in t?Mg(t,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[s]=r;var tc=(t,s,r)=>(Hg(t,typeof s!="symbol"?s+"":s,r),r);import{c as Di,u as go}from"./_commonjsHelpers-eb089990.js";import{C as mo}from"./paths-76b32af6.js";function Ir(){return{convert:t=>t==null||t===""?null:String(t),asString:t=>String(t),type:t=>t.string().optional()}}function ic(t){return{convert:s=>{if(typeof s=="object")return s;if(typeof s=="string"){const r=JSON.parse(s);return typeof r!="object"?null:r}return null},asString:s=>JSON.stringify(s),type:s=>s.record(t(s).optional()).optional()}}function ro(t){return{convert:s=>{if(Array.isArray(s))return s;if(typeof s=="string"){const r=JSON.parse(s);return Array.isArray(r)?r:null}return null},asString:s=>JSON.stringify(s),type:s=>s.array(t(s)).optional()}}function Pn(t,s){const r=a=>s.convert(a[t]);return{name:zg(t),key:t,asEnv:a=>({[t]:s.asString(a)}),zod:{type:s.type},get:r,getOrDefault:(a,u)=>r(a)??u}}function zg(t){return t.toLowerCase().replace(/([-_][a-z])/gi,s=>s.toUpperCase().replace("-","").replace("_",""))}var Vg={APP_LOGO:Pn("APP_LOGO",Ir()),APP_TITLE:Pn("APP_TITLE",Ir()),APP_FAVICON:Pn("APP_FAVICON",Ir()),SITE_ROOT:Pn("SITE_ROOT",Ir()),SITE_META:Pn("SITE_META",ic(t=>t.string())),QUERY_GENERATION_FACTORIES:Pn("QUERY_GENERATION_FACTORIES",ic(t=>t.union([t.string(),t.boolean(),t.number(),t.null(),t.record(t.unknown())]))),PAGES:Pn("PAGES",ro(t=>{const s=t.lazy(()=>t.object({title:t.string().min(1),content:t.union([t.array(s),t.string().min(1)])}));return s})),EXTERNAL_LINKS:Pn("EXTERNAL_LINKS",ro(t=>t.object({label:t.string().min(1),href:t.string().min(1),position:t.union([t.literal("header"),t.literal("navigation")]).optional(),kind:t.string().min(1).optional(),group:t.string().min(1).optional()}))),DIRECTIVES:Pn("DIRECTIVES",ro(t=>t.object({name:t.string().min(1),args:t.array(t.string())})))};function $g(){return{convert:t=>{if(t===null||t===void 0)return null;switch(typeof t){case"boolean":return t;case"string":const s=t.toLowerCase().trim();return s==="true"||s==="t"||s==="1";case"number":return t!==0;default:return null}},asString:t=>String(t),type:t=>t.boolean().optional()}}Pn("MAGIDOC_GENERATE",$g());var mn={},Yg={get exports(){return mn},set exports(t){mn=t}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */(function(t,s){(function(){var r,a="4.17.21",u=200,p="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",y="Expected a function",T="Invalid `variable` option passed into `_.template`",I="__lodash_hash_undefined__",x=500,A="__lodash_placeholder__",C=1,F=2,K=4,j=1,pe=2,se=1,me=2,Hn=4,Te=8,Oe=16,we=32,Pe=64,Le=128,zn=256,S=512,Y=30,ke="...",rt=800,mt=16,Si=1,Rt=2,wi=3,Ln=1/0,In=9007199254740991,Bt=17976931348623157e292,Tt=0/0,on=4294967295,b=on-1,U=on>>>1,B=[["ary",Le],["bind",se],["bindKey",me],["curry",Te],["curryRight",Oe],["flip",S],["partial",we],["partialRight",Pe],["rearg",zn]],G="[object Arguments]",ue="[object Array]",ve="[object AsyncFunction]",ce="[object Boolean]",an="[object Date]",ei="[object DOMException]",st="[object Error]",Ue="[object Function]",No="[object GeneratorFunction]",Dn="[object Map]",ni="[object Number]",rd="[object Null]",Vn="[object Object]",Oo="[object Promise]",sd="[object Proxy]",ti="[object RegExp]",vn="[object Set]",ii="[object String]",Ci="[object Symbol]",od="[object Undefined]",ri="[object WeakMap]",ad="[object WeakSet]",si="[object ArrayBuffer]",Gt="[object DataView]",Wr="[object Float32Array]",Fr="[object Float64Array]",Pr="[object Int8Array]",kr="[object Int16Array]",jr="[object Int32Array]",Mr="[object Uint8Array]",Hr="[object Uint8ClampedArray]",zr="[object Uint16Array]",Vr="[object Uint32Array]",ud=/\b__p \+= '';/g,cd=/\b(__p \+=) '' \+/g,dd=/(__e\(.*?\)|\b__t\)) \+\n'';/g,_o=/&(?:amp|lt|gt|quot|#39);/g,xo=/[&<>"']/g,ld=RegExp(_o.source),pd=RegExp(xo.source),hd=/<%-([\s\S]+?)%>/g,fd=/<%([\s\S]+?)%>/g,So=/<%=([\s\S]+?)%>/g,yd=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ed=/^\w*$/,gd=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,$r=/[\\^$.*+?()[\]{}|]/g,md=RegExp($r.source),Yr=/^\s+/,Td=/\s/,Id=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Dd=/\{\n\/\* \[wrapped with (.+)\] \*/,vd=/,? & /,bd=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Ad=/[()=,{}\[\]\/\s]/,Nd=/\\(\\)?/g,Od=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,wo=/\w*$/,_d=/^[-+]0x[0-9a-f]+$/i,xd=/^0b[01]+$/i,Sd=/^\[object .+?Constructor\]$/,wd=/^0o[0-7]+$/i,Cd=/^(?:0|[1-9]\d*)$/,Rd=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ri=/($^)/,Bd=/['\n\r\u2028\u2029\\]/g,Bi="\\ud800-\\udfff",Gd="\\u0300-\\u036f",Ld="\\ufe20-\\ufe2f",Ud="\\u20d0-\\u20ff",Co=Gd+Ld+Ud,Ro="\\u2700-\\u27bf",Bo="a-z\\xdf-\\xf6\\xf8-\\xff",Wd="\\xac\\xb1\\xd7\\xf7",Fd="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Pd="\\u2000-\\u206f",kd=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Go="A-Z\\xc0-\\xd6\\xd8-\\xde",Lo="\\ufe0e\\ufe0f",Uo=Wd+Fd+Pd+kd,Qr="['’]",jd="["+Bi+"]",Wo="["+Uo+"]",Gi="["+Co+"]",Fo="\\d+",Md="["+Ro+"]",Po="["+Bo+"]",ko="[^"+Bi+Uo+Fo+Ro+Bo+Go+"]",qr="\\ud83c[\\udffb-\\udfff]",Hd="(?:"+Gi+"|"+qr+")",jo="[^"+Bi+"]",Jr="(?:\\ud83c[\\udde6-\\uddff]){2}",Xr="[\\ud800-\\udbff][\\udc00-\\udfff]",Lt="["+Go+"]",Mo="\\u200d",Ho="(?:"+Po+"|"+ko+")",zd="(?:"+Lt+"|"+ko+")",zo="(?:"+Qr+"(?:d|ll|m|re|s|t|ve))?",Vo="(?:"+Qr+"(?:D|LL|M|RE|S|T|VE))?",$o=Hd+"?",Yo="["+Lo+"]?",Vd="(?:"+Mo+"(?:"+[jo,Jr,Xr].join("|")+")"+Yo+$o+")*",$d="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Yd="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Qo=Yo+$o+Vd,Qd="(?:"+[Md,Jr,Xr].join("|")+")"+Qo,qd="(?:"+[jo+Gi+"?",Gi,Jr,Xr,jd].join("|")+")",Jd=RegExp(Qr,"g"),Xd=RegExp(Gi,"g"),Kr=RegExp(qr+"(?="+qr+")|"+qd+Qo,"g"),Kd=RegExp([Lt+"?"+Po+"+"+zo+"(?="+[Wo,Lt,"$"].join("|")+")",zd+"+"+Vo+"(?="+[Wo,Lt+Ho,"$"].join("|")+")",Lt+"?"+Ho+"+"+zo,Lt+"+"+Vo,Yd,$d,Fo,Qd].join("|"),"g"),Zd=RegExp("["+Mo+Bi+Co+Lo+"]"),el=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,nl=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],tl=-1,Ee={};Ee[Wr]=Ee[Fr]=Ee[Pr]=Ee[kr]=Ee[jr]=Ee[Mr]=Ee[Hr]=Ee[zr]=Ee[Vr]=!0,Ee[G]=Ee[ue]=Ee[si]=Ee[ce]=Ee[Gt]=Ee[an]=Ee[st]=Ee[Ue]=Ee[Dn]=Ee[ni]=Ee[Vn]=Ee[ti]=Ee[vn]=Ee[ii]=Ee[ri]=!1;var ye={};ye[G]=ye[ue]=ye[si]=ye[Gt]=ye[ce]=ye[an]=ye[Wr]=ye[Fr]=ye[Pr]=ye[kr]=ye[jr]=ye[Dn]=ye[ni]=ye[Vn]=ye[ti]=ye[vn]=ye[ii]=ye[Ci]=ye[Mr]=ye[Hr]=ye[zr]=ye[Vr]=!0,ye[st]=ye[Ue]=ye[ri]=!1;var il={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},rl={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},sl={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},ol={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},al=parseFloat,ul=parseInt,qo=typeof Di=="object"&&Di&&Di.Object===Object&&Di,cl=typeof self=="object"&&self&&self.Object===Object&&self,Be=qo||cl||Function("return this")(),Zr=s&&!s.nodeType&&s,It=Zr&&!0&&t&&!t.nodeType&&t,Jo=It&&It.exports===Zr,es=Jo&&qo.process,un=function(){try{var E=It&&It.require&&It.require("util").types;return E||es&&es.binding&&es.binding("util")}catch{}}(),Xo=un&&un.isArrayBuffer,Ko=un&&un.isDate,Zo=un&&un.isMap,ea=un&&un.isRegExp,na=un&&un.isSet,ta=un&&un.isTypedArray;function Ze(E,v,D){switch(D.length){case 0:return E.call(v);case 1:return E.call(v,D[0]);case 2:return E.call(v,D[0],D[1]);case 3:return E.call(v,D[0],D[1],D[2])}return E.apply(v,D)}function dl(E,v,D,L){for(var Q=-1,ae=E==null?0:E.length;++Q<ae;){var xe=E[Q];v(L,xe,D(xe),E)}return L}function cn(E,v){for(var D=-1,L=E==null?0:E.length;++D<L&&v(E[D],D,E)!==!1;);return E}function ll(E,v){for(var D=E==null?0:E.length;D--&&v(E[D],D,E)!==!1;);return E}function ia(E,v){for(var D=-1,L=E==null?0:E.length;++D<L;)if(!v(E[D],D,E))return!1;return!0}function ot(E,v){for(var D=-1,L=E==null?0:E.length,Q=0,ae=[];++D<L;){var xe=E[D];v(xe,D,E)&&(ae[Q++]=xe)}return ae}function Li(E,v){var D=E==null?0:E.length;return!!D&&Ut(E,v,0)>-1}function ns(E,v,D){for(var L=-1,Q=E==null?0:E.length;++L<Q;)if(D(v,E[L]))return!0;return!1}function ge(E,v){for(var D=-1,L=E==null?0:E.length,Q=Array(L);++D<L;)Q[D]=v(E[D],D,E);return Q}function at(E,v){for(var D=-1,L=v.length,Q=E.length;++D<L;)E[Q+D]=v[D];return E}function ts(E,v,D,L){var Q=-1,ae=E==null?0:E.length;for(L&&ae&&(D=E[++Q]);++Q<ae;)D=v(D,E[Q],Q,E);return D}function pl(E,v,D,L){var Q=E==null?0:E.length;for(L&&Q&&(D=E[--Q]);Q--;)D=v(D,E[Q],Q,E);return D}function is(E,v){for(var D=-1,L=E==null?0:E.length;++D<L;)if(v(E[D],D,E))return!0;return!1}var hl=rs("length");function fl(E){return E.split("")}function yl(E){return E.match(bd)||[]}function ra(E,v,D){var L;return D(E,function(Q,ae,xe){if(v(Q,ae,xe))return L=ae,!1}),L}function Ui(E,v,D,L){for(var Q=E.length,ae=D+(L?1:-1);L?ae--:++ae<Q;)if(v(E[ae],ae,E))return ae;return-1}function Ut(E,v,D){return v===v?_l(E,v,D):Ui(E,sa,D)}function El(E,v,D,L){for(var Q=D-1,ae=E.length;++Q<ae;)if(L(E[Q],v))return Q;return-1}function sa(E){return E!==E}function oa(E,v){var D=E==null?0:E.length;return D?os(E,v)/D:Tt}function rs(E){return function(v){return v==null?r:v[E]}}function ss(E){return function(v){return E==null?r:E[v]}}function aa(E,v,D,L,Q){return Q(E,function(ae,xe,he){D=L?(L=!1,ae):v(D,ae,xe,he)}),D}function gl(E,v){var D=E.length;for(E.sort(v);D--;)E[D]=E[D].value;return E}function os(E,v){for(var D,L=-1,Q=E.length;++L<Q;){var ae=v(E[L]);ae!==r&&(D=D===r?ae:D+ae)}return D}function as(E,v){for(var D=-1,L=Array(E);++D<E;)L[D]=v(D);return L}function ml(E,v){return ge(v,function(D){return[D,E[D]]})}function ua(E){return E&&E.slice(0,pa(E)+1).replace(Yr,"")}function en(E){return function(v){return E(v)}}function us(E,v){return ge(v,function(D){return E[D]})}function oi(E,v){return E.has(v)}function ca(E,v){for(var D=-1,L=E.length;++D<L&&Ut(v,E[D],0)>-1;);return D}function da(E,v){for(var D=E.length;D--&&Ut(v,E[D],0)>-1;);return D}function Tl(E,v){for(var D=E.length,L=0;D--;)E[D]===v&&++L;return L}var Il=ss(il),Dl=ss(rl);function vl(E){return"\\"+ol[E]}function bl(E,v){return E==null?r:E[v]}function Wt(E){return Zd.test(E)}function Al(E){return el.test(E)}function Nl(E){for(var v,D=[];!(v=E.next()).done;)D.push(v.value);return D}function cs(E){var v=-1,D=Array(E.size);return E.forEach(function(L,Q){D[++v]=[Q,L]}),D}function la(E,v){return function(D){return E(v(D))}}function ut(E,v){for(var D=-1,L=E.length,Q=0,ae=[];++D<L;){var xe=E[D];(xe===v||xe===A)&&(E[D]=A,ae[Q++]=D)}return ae}function Wi(E){var v=-1,D=Array(E.size);return E.forEach(function(L){D[++v]=L}),D}function Ol(E){var v=-1,D=Array(E.size);return E.forEach(function(L){D[++v]=[L,L]}),D}function _l(E,v,D){for(var L=D-1,Q=E.length;++L<Q;)if(E[L]===v)return L;return-1}function xl(E,v,D){for(var L=D+1;L--;)if(E[L]===v)return L;return L}function Ft(E){return Wt(E)?wl(E):hl(E)}function bn(E){return Wt(E)?Cl(E):fl(E)}function pa(E){for(var v=E.length;v--&&Td.test(E.charAt(v)););return v}var Sl=ss(sl);function wl(E){for(var v=Kr.lastIndex=0;Kr.test(E);)++v;return v}function Cl(E){return E.match(Kr)||[]}function Rl(E){return E.match(Kd)||[]}var Bl=function E(v){v=v==null?Be:Pt.defaults(Be.Object(),v,Pt.pick(Be,nl));var D=v.Array,L=v.Date,Q=v.Error,ae=v.Function,xe=v.Math,he=v.Object,ds=v.RegExp,Gl=v.String,dn=v.TypeError,Fi=D.prototype,Ll=ae.prototype,kt=he.prototype,Pi=v["__core-js_shared__"],ki=Ll.toString,le=kt.hasOwnProperty,Ul=0,ha=function(){var e=/[^.]+$/.exec(Pi&&Pi.keys&&Pi.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),ji=kt.toString,Wl=ki.call(he),Fl=Be._,Pl=ds("^"+ki.call(le).replace($r,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Mi=Jo?v.Buffer:r,ct=v.Symbol,Hi=v.Uint8Array,fa=Mi?Mi.allocUnsafe:r,zi=la(he.getPrototypeOf,he),ya=he.create,Ea=kt.propertyIsEnumerable,Vi=Fi.splice,ga=ct?ct.isConcatSpreadable:r,ai=ct?ct.iterator:r,Dt=ct?ct.toStringTag:r,$i=function(){try{var e=Ot(he,"defineProperty");return e({},"",{}),e}catch{}}(),kl=v.clearTimeout!==Be.clearTimeout&&v.clearTimeout,jl=L&&L.now!==Be.Date.now&&L.now,Ml=v.setTimeout!==Be.setTimeout&&v.setTimeout,Yi=xe.ceil,Qi=xe.floor,ls=he.getOwnPropertySymbols,Hl=Mi?Mi.isBuffer:r,ma=v.isFinite,zl=Fi.join,Vl=la(he.keys,he),Se=xe.max,We=xe.min,$l=L.now,Yl=v.parseInt,Ta=xe.random,Ql=Fi.reverse,ps=Ot(v,"DataView"),ui=Ot(v,"Map"),hs=Ot(v,"Promise"),jt=Ot(v,"Set"),ci=Ot(v,"WeakMap"),di=Ot(he,"create"),qi=ci&&new ci,Mt={},ql=_t(ps),Jl=_t(ui),Xl=_t(hs),Kl=_t(jt),Zl=_t(ci),Ji=ct?ct.prototype:r,li=Ji?Ji.valueOf:r,Ia=Ji?Ji.toString:r;function d(e){if(De(e)&&!q(e)&&!(e instanceof te)){if(e instanceof ln)return e;if(le.call(e,"__wrapped__"))return Du(e)}return new ln(e)}var Ht=function(){function e(){}return function(n){if(!Ie(n))return{};if(ya)return ya(n);e.prototype=n;var i=new e;return e.prototype=r,i}}();function Xi(){}function ln(e,n){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=r}d.templateSettings={escape:hd,evaluate:fd,interpolate:So,variable:"",imports:{_:d}},d.prototype=Xi.prototype,d.prototype.constructor=d,ln.prototype=Ht(Xi.prototype),ln.prototype.constructor=ln;function te(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=on,this.__views__=[]}function ep(){var e=new te(this.__wrapped__);return e.__actions__=Ye(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Ye(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Ye(this.__views__),e}function np(){if(this.__filtered__){var e=new te(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function tp(){var e=this.__wrapped__.value(),n=this.__dir__,i=q(e),o=n<0,c=i?e.length:0,l=fh(0,c,this.__views__),h=l.start,f=l.end,g=f-h,N=o?f:h-1,O=this.__iteratees__,w=O.length,R=0,P=We(g,this.__takeCount__);if(!i||!o&&c==g&&P==g)return za(e,this.__actions__);var V=[];e:for(;g--&&R<P;){N+=n;for(var X=-1,$=e[N];++X<w;){var ee=O[X],re=ee.iteratee,rn=ee.type,He=re($);if(rn==Rt)$=He;else if(!He){if(rn==Si)continue e;break e}}V[R++]=$}return V}te.prototype=Ht(Xi.prototype),te.prototype.constructor=te;function vt(e){var n=-1,i=e==null?0:e.length;for(this.clear();++n<i;){var o=e[n];this.set(o[0],o[1])}}function ip(){this.__data__=di?di(null):{},this.size=0}function rp(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}function sp(e){var n=this.__data__;if(di){var i=n[e];return i===I?r:i}return le.call(n,e)?n[e]:r}function op(e){var n=this.__data__;return di?n[e]!==r:le.call(n,e)}function ap(e,n){var i=this.__data__;return this.size+=this.has(e)?0:1,i[e]=di&&n===r?I:n,this}vt.prototype.clear=ip,vt.prototype.delete=rp,vt.prototype.get=sp,vt.prototype.has=op,vt.prototype.set=ap;function $n(e){var n=-1,i=e==null?0:e.length;for(this.clear();++n<i;){var o=e[n];this.set(o[0],o[1])}}function up(){this.__data__=[],this.size=0}function cp(e){var n=this.__data__,i=Ki(n,e);if(i<0)return!1;var o=n.length-1;return i==o?n.pop():Vi.call(n,i,1),--this.size,!0}function dp(e){var n=this.__data__,i=Ki(n,e);return i<0?r:n[i][1]}function lp(e){return Ki(this.__data__,e)>-1}function pp(e,n){var i=this.__data__,o=Ki(i,e);return o<0?(++this.size,i.push([e,n])):i[o][1]=n,this}$n.prototype.clear=up,$n.prototype.delete=cp,$n.prototype.get=dp,$n.prototype.has=lp,$n.prototype.set=pp;function Yn(e){var n=-1,i=e==null?0:e.length;for(this.clear();++n<i;){var o=e[n];this.set(o[0],o[1])}}function hp(){this.size=0,this.__data__={hash:new vt,map:new(ui||$n),string:new vt}}function fp(e){var n=dr(this,e).delete(e);return this.size-=n?1:0,n}function yp(e){return dr(this,e).get(e)}function Ep(e){return dr(this,e).has(e)}function gp(e,n){var i=dr(this,e),o=i.size;return i.set(e,n),this.size+=i.size==o?0:1,this}Yn.prototype.clear=hp,Yn.prototype.delete=fp,Yn.prototype.get=yp,Yn.prototype.has=Ep,Yn.prototype.set=gp;function bt(e){var n=-1,i=e==null?0:e.length;for(this.__data__=new Yn;++n<i;)this.add(e[n])}function mp(e){return this.__data__.set(e,I),this}function Tp(e){return this.__data__.has(e)}bt.prototype.add=bt.prototype.push=mp,bt.prototype.has=Tp;function An(e){var n=this.__data__=new $n(e);this.size=n.size}function Ip(){this.__data__=new $n,this.size=0}function Dp(e){var n=this.__data__,i=n.delete(e);return this.size=n.size,i}function vp(e){return this.__data__.get(e)}function bp(e){return this.__data__.has(e)}function Ap(e,n){var i=this.__data__;if(i instanceof $n){var o=i.__data__;if(!ui||o.length<u-1)return o.push([e,n]),this.size=++i.size,this;i=this.__data__=new Yn(o)}return i.set(e,n),this.size=i.size,this}An.prototype.clear=Ip,An.prototype.delete=Dp,An.prototype.get=vp,An.prototype.has=bp,An.prototype.set=Ap;function Da(e,n){var i=q(e),o=!i&&xt(e),c=!i&&!o&&ft(e),l=!i&&!o&&!c&&Yt(e),h=i||o||c||l,f=h?as(e.length,Gl):[],g=f.length;for(var N in e)(n||le.call(e,N))&&!(h&&(N=="length"||c&&(N=="offset"||N=="parent")||l&&(N=="buffer"||N=="byteLength"||N=="byteOffset")||Xn(N,g)))&&f.push(N);return f}function va(e){var n=e.length;return n?e[As(0,n-1)]:r}function Np(e,n){return lr(Ye(e),At(n,0,e.length))}function Op(e){return lr(Ye(e))}function fs(e,n,i){(i!==r&&!Nn(e[n],i)||i===r&&!(n in e))&&Qn(e,n,i)}function pi(e,n,i){var o=e[n];(!(le.call(e,n)&&Nn(o,i))||i===r&&!(n in e))&&Qn(e,n,i)}function Ki(e,n){for(var i=e.length;i--;)if(Nn(e[i][0],n))return i;return-1}function _p(e,n,i,o){return dt(e,function(c,l,h){n(o,c,i(c),h)}),o}function ba(e,n){return e&&Wn(n,Ce(n),e)}function xp(e,n){return e&&Wn(n,qe(n),e)}function Qn(e,n,i){n=="__proto__"&&$i?$i(e,n,{configurable:!0,enumerable:!0,value:i,writable:!0}):e[n]=i}function ys(e,n){for(var i=-1,o=n.length,c=D(o),l=e==null;++i<o;)c[i]=l?r:qs(e,n[i]);return c}function At(e,n,i){return e===e&&(i!==r&&(e=e<=i?e:i),n!==r&&(e=e>=n?e:n)),e}function pn(e,n,i,o,c,l){var h,f=n&C,g=n&F,N=n&K;if(i&&(h=c?i(e,o,c,l):i(e)),h!==r)return h;if(!Ie(e))return e;var O=q(e);if(O){if(h=Eh(e),!f)return Ye(e,h)}else{var w=Fe(e),R=w==Ue||w==No;if(ft(e))return Ya(e,f);if(w==Vn||w==G||R&&!c){if(h=g||R?{}:pu(e),!f)return g?sh(e,xp(h,e)):rh(e,ba(h,e))}else{if(!ye[w])return c?e:{};h=gh(e,w,f)}}l||(l=new An);var P=l.get(e);if(P)return P;l.set(e,h),ju(e)?e.forEach(function($){h.add(pn($,n,i,$,e,l))}):Pu(e)&&e.forEach(function($,ee){h.set(ee,pn($,n,i,ee,e,l))});var V=N?g?Ls:Gs:g?qe:Ce,X=O?r:V(e);return cn(X||e,function($,ee){X&&(ee=$,$=e[ee]),pi(h,ee,pn($,n,i,ee,e,l))}),h}function Sp(e){var n=Ce(e);return function(i){return Aa(i,e,n)}}function Aa(e,n,i){var o=i.length;if(e==null)return!o;for(e=he(e);o--;){var c=i[o],l=n[c],h=e[c];if(h===r&&!(c in e)||!l(h))return!1}return!0}function Na(e,n,i){if(typeof e!="function")throw new dn(y);return Ti(function(){e.apply(r,i)},n)}function hi(e,n,i,o){var c=-1,l=Li,h=!0,f=e.length,g=[],N=n.length;if(!f)return g;i&&(n=ge(n,en(i))),o?(l=ns,h=!1):n.length>=u&&(l=oi,h=!1,n=new bt(n));e:for(;++c<f;){var O=e[c],w=i==null?O:i(O);if(O=o||O!==0?O:0,h&&w===w){for(var R=N;R--;)if(n[R]===w)continue e;g.push(O)}else l(n,w,o)||g.push(O)}return g}var dt=Ka(Un),Oa=Ka(gs,!0);function wp(e,n){var i=!0;return dt(e,function(o,c,l){return i=!!n(o,c,l),i}),i}function Zi(e,n,i){for(var o=-1,c=e.length;++o<c;){var l=e[o],h=n(l);if(h!=null&&(f===r?h===h&&!tn(h):i(h,f)))var f=h,g=l}return g}function Cp(e,n,i,o){var c=e.length;for(i=J(i),i<0&&(i=-i>c?0:c+i),o=o===r||o>c?c:J(o),o<0&&(o+=c),o=i>o?0:Hu(o);i<o;)e[i++]=n;return e}function _a(e,n){var i=[];return dt(e,function(o,c,l){n(o,c,l)&&i.push(o)}),i}function Ge(e,n,i,o,c){var l=-1,h=e.length;for(i||(i=Th),c||(c=[]);++l<h;){var f=e[l];n>0&&i(f)?n>1?Ge(f,n-1,i,o,c):at(c,f):o||(c[c.length]=f)}return c}var Es=Za(),xa=Za(!0);function Un(e,n){return e&&Es(e,n,Ce)}function gs(e,n){return e&&xa(e,n,Ce)}function er(e,n){return ot(n,function(i){return Kn(e[i])})}function Nt(e,n){n=pt(n,e);for(var i=0,o=n.length;e!=null&&i<o;)e=e[Fn(n[i++])];return i&&i==o?e:r}function Sa(e,n,i){var o=n(e);return q(e)?o:at(o,i(e))}function je(e){return e==null?e===r?od:rd:Dt&&Dt in he(e)?hh(e):Oh(e)}function ms(e,n){return e>n}function Rp(e,n){return e!=null&&le.call(e,n)}function Bp(e,n){return e!=null&&n in he(e)}function Gp(e,n,i){return e>=We(n,i)&&e<Se(n,i)}function Ts(e,n,i){for(var o=i?ns:Li,c=e[0].length,l=e.length,h=l,f=D(l),g=1/0,N=[];h--;){var O=e[h];h&&n&&(O=ge(O,en(n))),g=We(O.length,g),f[h]=!i&&(n||c>=120&&O.length>=120)?new bt(h&&O):r}O=e[0];var w=-1,R=f[0];e:for(;++w<c&&N.length<g;){var P=O[w],V=n?n(P):P;if(P=i||P!==0?P:0,!(R?oi(R,V):o(N,V,i))){for(h=l;--h;){var X=f[h];if(!(X?oi(X,V):o(e[h],V,i)))continue e}R&&R.push(V),N.push(P)}}return N}function Lp(e,n,i,o){return Un(e,function(c,l,h){n(o,i(c),l,h)}),o}function fi(e,n,i){n=pt(n,e),e=Eu(e,n);var o=e==null?e:e[Fn(fn(n))];return o==null?r:Ze(o,e,i)}function wa(e){return De(e)&&je(e)==G}function Up(e){return De(e)&&je(e)==si}function Wp(e){return De(e)&&je(e)==an}function yi(e,n,i,o,c){return e===n?!0:e==null||n==null||!De(e)&&!De(n)?e!==e&&n!==n:Fp(e,n,i,o,yi,c)}function Fp(e,n,i,o,c,l){var h=q(e),f=q(n),g=h?ue:Fe(e),N=f?ue:Fe(n);g=g==G?Vn:g,N=N==G?Vn:N;var O=g==Vn,w=N==Vn,R=g==N;if(R&&ft(e)){if(!ft(n))return!1;h=!0,O=!1}if(R&&!O)return l||(l=new An),h||Yt(e)?cu(e,n,i,o,c,l):lh(e,n,g,i,o,c,l);if(!(i&j)){var P=O&&le.call(e,"__wrapped__"),V=w&&le.call(n,"__wrapped__");if(P||V){var X=P?e.value():e,$=V?n.value():n;return l||(l=new An),c(X,$,i,o,l)}}return R?(l||(l=new An),ph(e,n,i,o,c,l)):!1}function Pp(e){return De(e)&&Fe(e)==Dn}function Is(e,n,i,o){var c=i.length,l=c,h=!o;if(e==null)return!l;for(e=he(e);c--;){var f=i[c];if(h&&f[2]?f[1]!==e[f[0]]:!(f[0]in e))return!1}for(;++c<l;){f=i[c];var g=f[0],N=e[g],O=f[1];if(h&&f[2]){if(N===r&&!(g in e))return!1}else{var w=new An;if(o)var R=o(N,O,g,e,n,w);if(!(R===r?yi(O,N,j|pe,o,w):R))return!1}}return!0}function Ca(e){if(!Ie(e)||Dh(e))return!1;var n=Kn(e)?Pl:Sd;return n.test(_t(e))}function kp(e){return De(e)&&je(e)==ti}function jp(e){return De(e)&&Fe(e)==vn}function Mp(e){return De(e)&&gr(e.length)&&!!Ee[je(e)]}function Ra(e){return typeof e=="function"?e:e==null?Je:typeof e=="object"?q(e)?La(e[0],e[1]):Ga(e):ec(e)}function Ds(e){if(!mi(e))return Vl(e);var n=[];for(var i in he(e))le.call(e,i)&&i!="constructor"&&n.push(i);return n}function Hp(e){if(!Ie(e))return Nh(e);var n=mi(e),i=[];for(var o in e)o=="constructor"&&(n||!le.call(e,o))||i.push(o);return i}function vs(e,n){return e<n}function Ba(e,n){var i=-1,o=Qe(e)?D(e.length):[];return dt(e,function(c,l,h){o[++i]=n(c,l,h)}),o}function Ga(e){var n=Ws(e);return n.length==1&&n[0][2]?fu(n[0][0],n[0][1]):function(i){return i===e||Is(i,e,n)}}function La(e,n){return Ps(e)&&hu(n)?fu(Fn(e),n):function(i){var o=qs(i,e);return o===r&&o===n?Js(i,e):yi(n,o,j|pe)}}function nr(e,n,i,o,c){e!==n&&Es(n,function(l,h){if(c||(c=new An),Ie(l))zp(e,n,h,i,nr,o,c);else{var f=o?o(js(e,h),l,h+"",e,n,c):r;f===r&&(f=l),fs(e,h,f)}},qe)}function zp(e,n,i,o,c,l,h){var f=js(e,i),g=js(n,i),N=h.get(g);if(N){fs(e,i,N);return}var O=l?l(f,g,i+"",e,n,h):r,w=O===r;if(w){var R=q(g),P=!R&&ft(g),V=!R&&!P&&Yt(g);O=g,R||P||V?q(f)?O=f:be(f)?O=Ye(f):P?(w=!1,O=Ya(g,!0)):V?(w=!1,O=Qa(g,!0)):O=[]:Ii(g)||xt(g)?(O=f,xt(f)?O=zu(f):(!Ie(f)||Kn(f))&&(O=pu(g))):w=!1}w&&(h.set(g,O),c(O,g,o,l,h),h.delete(g)),fs(e,i,O)}function Ua(e,n){var i=e.length;if(i)return n+=n<0?i:0,Xn(n,i)?e[n]:r}function Wa(e,n,i){n.length?n=ge(n,function(l){return q(l)?function(h){return Nt(h,l.length===1?l[0]:l)}:l}):n=[Je];var o=-1;n=ge(n,en(z()));var c=Ba(e,function(l,h,f){var g=ge(n,function(N){return N(l)});return{criteria:g,index:++o,value:l}});return gl(c,function(l,h){return ih(l,h,i)})}function Vp(e,n){return Fa(e,n,function(i,o){return Js(e,o)})}function Fa(e,n,i){for(var o=-1,c=n.length,l={};++o<c;){var h=n[o],f=Nt(e,h);i(f,h)&&Ei(l,pt(h,e),f)}return l}function $p(e){return function(n){return Nt(n,e)}}function bs(e,n,i,o){var c=o?El:Ut,l=-1,h=n.length,f=e;for(e===n&&(n=Ye(n)),i&&(f=ge(e,en(i)));++l<h;)for(var g=0,N=n[l],O=i?i(N):N;(g=c(f,O,g,o))>-1;)f!==e&&Vi.call(f,g,1),Vi.call(e,g,1);return e}function Pa(e,n){for(var i=e?n.length:0,o=i-1;i--;){var c=n[i];if(i==o||c!==l){var l=c;Xn(c)?Vi.call(e,c,1):_s(e,c)}}return e}function As(e,n){return e+Qi(Ta()*(n-e+1))}function Yp(e,n,i,o){for(var c=-1,l=Se(Yi((n-e)/(i||1)),0),h=D(l);l--;)h[o?l:++c]=e,e+=i;return h}function Ns(e,n){var i="";if(!e||n<1||n>In)return i;do n%2&&(i+=e),n=Qi(n/2),n&&(e+=e);while(n);return i}function Z(e,n){return Ms(yu(e,n,Je),e+"")}function Qp(e){return va(Qt(e))}function qp(e,n){var i=Qt(e);return lr(i,At(n,0,i.length))}function Ei(e,n,i,o){if(!Ie(e))return e;n=pt(n,e);for(var c=-1,l=n.length,h=l-1,f=e;f!=null&&++c<l;){var g=Fn(n[c]),N=i;if(g==="__proto__"||g==="constructor"||g==="prototype")return e;if(c!=h){var O=f[g];N=o?o(O,g,f):r,N===r&&(N=Ie(O)?O:Xn(n[c+1])?[]:{})}pi(f,g,N),f=f[g]}return e}var ka=qi?function(e,n){return qi.set(e,n),e}:Je,Jp=$i?function(e,n){return $i(e,"toString",{configurable:!0,enumerable:!1,value:Ks(n),writable:!0})}:Je;function Xp(e){return lr(Qt(e))}function hn(e,n,i){var o=-1,c=e.length;n<0&&(n=-n>c?0:c+n),i=i>c?c:i,i<0&&(i+=c),c=n>i?0:i-n>>>0,n>>>=0;for(var l=D(c);++o<c;)l[o]=e[o+n];return l}function Kp(e,n){var i;return dt(e,function(o,c,l){return i=n(o,c,l),!i}),!!i}function tr(e,n,i){var o=0,c=e==null?o:e.length;if(typeof n=="number"&&n===n&&c<=U){for(;o<c;){var l=o+c>>>1,h=e[l];h!==null&&!tn(h)&&(i?h<=n:h<n)?o=l+1:c=l}return c}return Os(e,n,Je,i)}function Os(e,n,i,o){var c=0,l=e==null?0:e.length;if(l===0)return 0;n=i(n);for(var h=n!==n,f=n===null,g=tn(n),N=n===r;c<l;){var O=Qi((c+l)/2),w=i(e[O]),R=w!==r,P=w===null,V=w===w,X=tn(w);if(h)var $=o||V;else N?$=V&&(o||R):f?$=V&&R&&(o||!P):g?$=V&&R&&!P&&(o||!X):P||X?$=!1:$=o?w<=n:w<n;$?c=O+1:l=O}return We(l,b)}function ja(e,n){for(var i=-1,o=e.length,c=0,l=[];++i<o;){var h=e[i],f=n?n(h):h;if(!i||!Nn(f,g)){var g=f;l[c++]=h===0?0:h}}return l}function Ma(e){return typeof e=="number"?e:tn(e)?Tt:+e}function nn(e){if(typeof e=="string")return e;if(q(e))return ge(e,nn)+"";if(tn(e))return Ia?Ia.call(e):"";var n=e+"";return n=="0"&&1/e==-Ln?"-0":n}function lt(e,n,i){var o=-1,c=Li,l=e.length,h=!0,f=[],g=f;if(i)h=!1,c=ns;else if(l>=u){var N=n?null:ch(e);if(N)return Wi(N);h=!1,c=oi,g=new bt}else g=n?[]:f;e:for(;++o<l;){var O=e[o],w=n?n(O):O;if(O=i||O!==0?O:0,h&&w===w){for(var R=g.length;R--;)if(g[R]===w)continue e;n&&g.push(w),f.push(O)}else c(g,w,i)||(g!==f&&g.push(w),f.push(O))}return f}function _s(e,n){return n=pt(n,e),e=Eu(e,n),e==null||delete e[Fn(fn(n))]}function Ha(e,n,i,o){return Ei(e,n,i(Nt(e,n)),o)}function ir(e,n,i,o){for(var c=e.length,l=o?c:-1;(o?l--:++l<c)&&n(e[l],l,e););return i?hn(e,o?0:l,o?l+1:c):hn(e,o?l+1:0,o?c:l)}function za(e,n){var i=e;return i instanceof te&&(i=i.value()),ts(n,function(o,c){return c.func.apply(c.thisArg,at([o],c.args))},i)}function xs(e,n,i){var o=e.length;if(o<2)return o?lt(e[0]):[];for(var c=-1,l=D(o);++c<o;)for(var h=e[c],f=-1;++f<o;)f!=c&&(l[c]=hi(l[c]||h,e[f],n,i));return lt(Ge(l,1),n,i)}function Va(e,n,i){for(var o=-1,c=e.length,l=n.length,h={};++o<c;){var f=o<l?n[o]:r;i(h,e[o],f)}return h}function Ss(e){return be(e)?e:[]}function ws(e){return typeof e=="function"?e:Je}function pt(e,n){return q(e)?e:Ps(e,n)?[e]:Iu(de(e))}var Zp=Z;function ht(e,n,i){var o=e.length;return i=i===r?o:i,!n&&i>=o?e:hn(e,n,i)}var $a=kl||function(e){return Be.clearTimeout(e)};function Ya(e,n){if(n)return e.slice();var i=e.length,o=fa?fa(i):new e.constructor(i);return e.copy(o),o}function Cs(e){var n=new e.constructor(e.byteLength);return new Hi(n).set(new Hi(e)),n}function eh(e,n){var i=n?Cs(e.buffer):e.buffer;return new e.constructor(i,e.byteOffset,e.byteLength)}function nh(e){var n=new e.constructor(e.source,wo.exec(e));return n.lastIndex=e.lastIndex,n}function th(e){return li?he(li.call(e)):{}}function Qa(e,n){var i=n?Cs(e.buffer):e.buffer;return new e.constructor(i,e.byteOffset,e.length)}function qa(e,n){if(e!==n){var i=e!==r,o=e===null,c=e===e,l=tn(e),h=n!==r,f=n===null,g=n===n,N=tn(n);if(!f&&!N&&!l&&e>n||l&&h&&g&&!f&&!N||o&&h&&g||!i&&g||!c)return 1;if(!o&&!l&&!N&&e<n||N&&i&&c&&!o&&!l||f&&i&&c||!h&&c||!g)return-1}return 0}function ih(e,n,i){for(var o=-1,c=e.criteria,l=n.criteria,h=c.length,f=i.length;++o<h;){var g=qa(c[o],l[o]);if(g){if(o>=f)return g;var N=i[o];return g*(N=="desc"?-1:1)}}return e.index-n.index}function Ja(e,n,i,o){for(var c=-1,l=e.length,h=i.length,f=-1,g=n.length,N=Se(l-h,0),O=D(g+N),w=!o;++f<g;)O[f]=n[f];for(;++c<h;)(w||c<l)&&(O[i[c]]=e[c]);for(;N--;)O[f++]=e[c++];return O}function Xa(e,n,i,o){for(var c=-1,l=e.length,h=-1,f=i.length,g=-1,N=n.length,O=Se(l-f,0),w=D(O+N),R=!o;++c<O;)w[c]=e[c];for(var P=c;++g<N;)w[P+g]=n[g];for(;++h<f;)(R||c<l)&&(w[P+i[h]]=e[c++]);return w}function Ye(e,n){var i=-1,o=e.length;for(n||(n=D(o));++i<o;)n[i]=e[i];return n}function Wn(e,n,i,o){var c=!i;i||(i={});for(var l=-1,h=n.length;++l<h;){var f=n[l],g=o?o(i[f],e[f],f,i,e):r;g===r&&(g=e[f]),c?Qn(i,f,g):pi(i,f,g)}return i}function rh(e,n){return Wn(e,Fs(e),n)}function sh(e,n){return Wn(e,du(e),n)}function rr(e,n){return function(i,o){var c=q(i)?dl:_p,l=n?n():{};return c(i,e,z(o,2),l)}}function zt(e){return Z(function(n,i){var o=-1,c=i.length,l=c>1?i[c-1]:r,h=c>2?i[2]:r;for(l=e.length>3&&typeof l=="function"?(c--,l):r,h&&Me(i[0],i[1],h)&&(l=c<3?r:l,c=1),n=he(n);++o<c;){var f=i[o];f&&e(n,f,o,l)}return n})}function Ka(e,n){return function(i,o){if(i==null)return i;if(!Qe(i))return e(i,o);for(var c=i.length,l=n?c:-1,h=he(i);(n?l--:++l<c)&&o(h[l],l,h)!==!1;);return i}}function Za(e){return function(n,i,o){for(var c=-1,l=he(n),h=o(n),f=h.length;f--;){var g=h[e?f:++c];if(i(l[g],g,l)===!1)break}return n}}function oh(e,n,i){var o=n&se,c=gi(e);function l(){var h=this&&this!==Be&&this instanceof l?c:e;return h.apply(o?i:this,arguments)}return l}function eu(e){return function(n){n=de(n);var i=Wt(n)?bn(n):r,o=i?i[0]:n.charAt(0),c=i?ht(i,1).join(""):n.slice(1);return o[e]()+c}}function Vt(e){return function(n){return ts(Ku(Xu(n).replace(Jd,"")),e,"")}}function gi(e){return function(){var n=arguments;switch(n.length){case 0:return new e;case 1:return new e(n[0]);case 2:return new e(n[0],n[1]);case 3:return new e(n[0],n[1],n[2]);case 4:return new e(n[0],n[1],n[2],n[3]);case 5:return new e(n[0],n[1],n[2],n[3],n[4]);case 6:return new e(n[0],n[1],n[2],n[3],n[4],n[5]);case 7:return new e(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}var i=Ht(e.prototype),o=e.apply(i,n);return Ie(o)?o:i}}function ah(e,n,i){var o=gi(e);function c(){for(var l=arguments.length,h=D(l),f=l,g=$t(c);f--;)h[f]=arguments[f];var N=l<3&&h[0]!==g&&h[l-1]!==g?[]:ut(h,g);if(l-=N.length,l<i)return su(e,n,sr,c.placeholder,r,h,N,r,r,i-l);var O=this&&this!==Be&&this instanceof c?o:e;return Ze(O,this,h)}return c}function nu(e){return function(n,i,o){var c=he(n);if(!Qe(n)){var l=z(i,3);n=Ce(n),i=function(f){return l(c[f],f,c)}}var h=e(n,i,o);return h>-1?c[l?n[h]:h]:r}}function tu(e){return Jn(function(n){var i=n.length,o=i,c=ln.prototype.thru;for(e&&n.reverse();o--;){var l=n[o];if(typeof l!="function")throw new dn(y);if(c&&!h&&cr(l)=="wrapper")var h=new ln([],!0)}for(o=h?o:i;++o<i;){l=n[o];var f=cr(l),g=f=="wrapper"?Us(l):r;g&&ks(g[0])&&g[1]==(Le|Te|we|zn)&&!g[4].length&&g[9]==1?h=h[cr(g[0])].apply(h,g[3]):h=l.length==1&&ks(l)?h[f]():h.thru(l)}return function(){var N=arguments,O=N[0];if(h&&N.length==1&&q(O))return h.plant(O).value();for(var w=0,R=i?n[w].apply(this,N):O;++w<i;)R=n[w].call(this,R);return R}})}function sr(e,n,i,o,c,l,h,f,g,N){var O=n&Le,w=n&se,R=n&me,P=n&(Te|Oe),V=n&S,X=R?r:gi(e);function $(){for(var ee=arguments.length,re=D(ee),rn=ee;rn--;)re[rn]=arguments[rn];if(P)var He=$t($),sn=Tl(re,He);if(o&&(re=Ja(re,o,c,P)),l&&(re=Xa(re,l,h,P)),ee-=sn,P&&ee<N){var Ae=ut(re,He);return su(e,n,sr,$.placeholder,i,re,Ae,f,g,N-ee)}var On=w?i:this,et=R?On[e]:e;return ee=re.length,f?re=_h(re,f):V&&ee>1&&re.reverse(),O&&g<ee&&(re.length=g),this&&this!==Be&&this instanceof $&&(et=X||gi(et)),et.apply(On,re)}return $}function iu(e,n){return function(i,o){return Lp(i,e,n(o),{})}}function or(e,n){return function(i,o){var c;if(i===r&&o===r)return n;if(i!==r&&(c=i),o!==r){if(c===r)return o;typeof i=="string"||typeof o=="string"?(i=nn(i),o=nn(o)):(i=Ma(i),o=Ma(o)),c=e(i,o)}return c}}function Rs(e){return Jn(function(n){return n=ge(n,en(z())),Z(function(i){var o=this;return e(n,function(c){return Ze(c,o,i)})})})}function ar(e,n){n=n===r?" ":nn(n);var i=n.length;if(i<2)return i?Ns(n,e):n;var o=Ns(n,Yi(e/Ft(n)));return Wt(n)?ht(bn(o),0,e).join(""):o.slice(0,e)}function uh(e,n,i,o){var c=n&se,l=gi(e);function h(){for(var f=-1,g=arguments.length,N=-1,O=o.length,w=D(O+g),R=this&&this!==Be&&this instanceof h?l:e;++N<O;)w[N]=o[N];for(;g--;)w[N++]=arguments[++f];return Ze(R,c?i:this,w)}return h}function ru(e){return function(n,i,o){return o&&typeof o!="number"&&Me(n,i,o)&&(i=o=r),n=Zn(n),i===r?(i=n,n=0):i=Zn(i),o=o===r?n<i?1:-1:Zn(o),Yp(n,i,o,e)}}function ur(e){return function(n,i){return typeof n=="string"&&typeof i=="string"||(n=yn(n),i=yn(i)),e(n,i)}}function su(e,n,i,o,c,l,h,f,g,N){var O=n&Te,w=O?h:r,R=O?r:h,P=O?l:r,V=O?r:l;n|=O?we:Pe,n&=~(O?Pe:we),n&Hn||(n&=~(se|me));var X=[e,n,c,P,w,V,R,f,g,N],$=i.apply(r,X);return ks(e)&&gu($,X),$.placeholder=o,mu($,e,n)}function Bs(e){var n=xe[e];return function(i,o){if(i=yn(i),o=o==null?0:We(J(o),292),o&&ma(i)){var c=(de(i)+"e").split("e"),l=n(c[0]+"e"+(+c[1]+o));return c=(de(l)+"e").split("e"),+(c[0]+"e"+(+c[1]-o))}return n(i)}}var ch=jt&&1/Wi(new jt([,-0]))[1]==Ln?function(e){return new jt(e)}:no;function ou(e){return function(n){var i=Fe(n);return i==Dn?cs(n):i==vn?Ol(n):ml(n,e(n))}}function qn(e,n,i,o,c,l,h,f){var g=n&me;if(!g&&typeof e!="function")throw new dn(y);var N=o?o.length:0;if(N||(n&=~(we|Pe),o=c=r),h=h===r?h:Se(J(h),0),f=f===r?f:J(f),N-=c?c.length:0,n&Pe){var O=o,w=c;o=c=r}var R=g?r:Us(e),P=[e,n,i,o,c,O,w,l,h,f];if(R&&Ah(P,R),e=P[0],n=P[1],i=P[2],o=P[3],c=P[4],f=P[9]=P[9]===r?g?0:e.length:Se(P[9]-N,0),!f&&n&(Te|Oe)&&(n&=~(Te|Oe)),!n||n==se)var V=oh(e,n,i);else n==Te||n==Oe?V=ah(e,n,f):(n==we||n==(se|we))&&!c.length?V=uh(e,n,i,o):V=sr.apply(r,P);var X=R?ka:gu;return mu(X(V,P),e,n)}function au(e,n,i,o){return e===r||Nn(e,kt[i])&&!le.call(o,i)?n:e}function uu(e,n,i,o,c,l){return Ie(e)&&Ie(n)&&(l.set(n,e),nr(e,n,r,uu,l),l.delete(n)),e}function dh(e){return Ii(e)?r:e}function cu(e,n,i,o,c,l){var h=i&j,f=e.length,g=n.length;if(f!=g&&!(h&&g>f))return!1;var N=l.get(e),O=l.get(n);if(N&&O)return N==n&&O==e;var w=-1,R=!0,P=i&pe?new bt:r;for(l.set(e,n),l.set(n,e);++w<f;){var V=e[w],X=n[w];if(o)var $=h?o(X,V,w,n,e,l):o(V,X,w,e,n,l);if($!==r){if($)continue;R=!1;break}if(P){if(!is(n,function(ee,re){if(!oi(P,re)&&(V===ee||c(V,ee,i,o,l)))return P.push(re)})){R=!1;break}}else if(!(V===X||c(V,X,i,o,l))){R=!1;break}}return l.delete(e),l.delete(n),R}function lh(e,n,i,o,c,l,h){switch(i){case Gt:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case si:return!(e.byteLength!=n.byteLength||!l(new Hi(e),new Hi(n)));case ce:case an:case ni:return Nn(+e,+n);case st:return e.name==n.name&&e.message==n.message;case ti:case ii:return e==n+"";case Dn:var f=cs;case vn:var g=o&j;if(f||(f=Wi),e.size!=n.size&&!g)return!1;var N=h.get(e);if(N)return N==n;o|=pe,h.set(e,n);var O=cu(f(e),f(n),o,c,l,h);return h.delete(e),O;case Ci:if(li)return li.call(e)==li.call(n)}return!1}function ph(e,n,i,o,c,l){var h=i&j,f=Gs(e),g=f.length,N=Gs(n),O=N.length;if(g!=O&&!h)return!1;for(var w=g;w--;){var R=f[w];if(!(h?R in n:le.call(n,R)))return!1}var P=l.get(e),V=l.get(n);if(P&&V)return P==n&&V==e;var X=!0;l.set(e,n),l.set(n,e);for(var $=h;++w<g;){R=f[w];var ee=e[R],re=n[R];if(o)var rn=h?o(re,ee,R,n,e,l):o(ee,re,R,e,n,l);if(!(rn===r?ee===re||c(ee,re,i,o,l):rn)){X=!1;break}$||($=R=="constructor")}if(X&&!$){var He=e.constructor,sn=n.constructor;He!=sn&&"constructor"in e&&"constructor"in n&&!(typeof He=="function"&&He instanceof He&&typeof sn=="function"&&sn instanceof sn)&&(X=!1)}return l.delete(e),l.delete(n),X}function Jn(e){return Ms(yu(e,r,Au),e+"")}function Gs(e){return Sa(e,Ce,Fs)}function Ls(e){return Sa(e,qe,du)}var Us=qi?function(e){return qi.get(e)}:no;function cr(e){for(var n=e.name+"",i=Mt[n],o=le.call(Mt,n)?i.length:0;o--;){var c=i[o],l=c.func;if(l==null||l==e)return c.name}return n}function $t(e){var n=le.call(d,"placeholder")?d:e;return n.placeholder}function z(){var e=d.iteratee||Zs;return e=e===Zs?Ra:e,arguments.length?e(arguments[0],arguments[1]):e}function dr(e,n){var i=e.__data__;return Ih(n)?i[typeof n=="string"?"string":"hash"]:i.map}function Ws(e){for(var n=Ce(e),i=n.length;i--;){var o=n[i],c=e[o];n[i]=[o,c,hu(c)]}return n}function Ot(e,n){var i=bl(e,n);return Ca(i)?i:r}function hh(e){var n=le.call(e,Dt),i=e[Dt];try{e[Dt]=r;var o=!0}catch{}var c=ji.call(e);return o&&(n?e[Dt]=i:delete e[Dt]),c}var Fs=ls?function(e){return e==null?[]:(e=he(e),ot(ls(e),function(n){return Ea.call(e,n)}))}:to,du=ls?function(e){for(var n=[];e;)at(n,Fs(e)),e=zi(e);return n}:to,Fe=je;(ps&&Fe(new ps(new ArrayBuffer(1)))!=Gt||ui&&Fe(new ui)!=Dn||hs&&Fe(hs.resolve())!=Oo||jt&&Fe(new jt)!=vn||ci&&Fe(new ci)!=ri)&&(Fe=function(e){var n=je(e),i=n==Vn?e.constructor:r,o=i?_t(i):"";if(o)switch(o){case ql:return Gt;case Jl:return Dn;case Xl:return Oo;case Kl:return vn;case Zl:return ri}return n});function fh(e,n,i){for(var o=-1,c=i.length;++o<c;){var l=i[o],h=l.size;switch(l.type){case"drop":e+=h;break;case"dropRight":n-=h;break;case"take":n=We(n,e+h);break;case"takeRight":e=Se(e,n-h);break}}return{start:e,end:n}}function yh(e){var n=e.match(Dd);return n?n[1].split(vd):[]}function lu(e,n,i){n=pt(n,e);for(var o=-1,c=n.length,l=!1;++o<c;){var h=Fn(n[o]);if(!(l=e!=null&&i(e,h)))break;e=e[h]}return l||++o!=c?l:(c=e==null?0:e.length,!!c&&gr(c)&&Xn(h,c)&&(q(e)||xt(e)))}function Eh(e){var n=e.length,i=new e.constructor(n);return n&&typeof e[0]=="string"&&le.call(e,"index")&&(i.index=e.index,i.input=e.input),i}function pu(e){return typeof e.constructor=="function"&&!mi(e)?Ht(zi(e)):{}}function gh(e,n,i){var o=e.constructor;switch(n){case si:return Cs(e);case ce:case an:return new o(+e);case Gt:return eh(e,i);case Wr:case Fr:case Pr:case kr:case jr:case Mr:case Hr:case zr:case Vr:return Qa(e,i);case Dn:return new o;case ni:case ii:return new o(e);case ti:return nh(e);case vn:return new o;case Ci:return th(e)}}function mh(e,n){var i=n.length;if(!i)return e;var o=i-1;return n[o]=(i>1?"& ":"")+n[o],n=n.join(i>2?", ":" "),e.replace(Id,`{
/* [wrapped with `+n+`] */
`)}function Th(e){return q(e)||xt(e)||!!(ga&&e&&e[ga])}function Xn(e,n){var i=typeof e;return n=n??In,!!n&&(i=="number"||i!="symbol"&&Cd.test(e))&&e>-1&&e%1==0&&e<n}function Me(e,n,i){if(!Ie(i))return!1;var o=typeof n;return(o=="number"?Qe(i)&&Xn(n,i.length):o=="string"&&n in i)?Nn(i[n],e):!1}function Ps(e,n){if(q(e))return!1;var i=typeof e;return i=="number"||i=="symbol"||i=="boolean"||e==null||tn(e)?!0:Ed.test(e)||!yd.test(e)||n!=null&&e in he(n)}function Ih(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}function ks(e){var n=cr(e),i=d[n];if(typeof i!="function"||!(n in te.prototype))return!1;if(e===i)return!0;var o=Us(i);return!!o&&e===o[0]}function Dh(e){return!!ha&&ha in e}var vh=Pi?Kn:io;function mi(e){var n=e&&e.constructor,i=typeof n=="function"&&n.prototype||kt;return e===i}function hu(e){return e===e&&!Ie(e)}function fu(e,n){return function(i){return i==null?!1:i[e]===n&&(n!==r||e in he(i))}}function bh(e){var n=yr(e,function(o){return i.size===x&&i.clear(),o}),i=n.cache;return n}function Ah(e,n){var i=e[1],o=n[1],c=i|o,l=c<(se|me|Le),h=o==Le&&i==Te||o==Le&&i==zn&&e[7].length<=n[8]||o==(Le|zn)&&n[7].length<=n[8]&&i==Te;if(!(l||h))return e;o&se&&(e[2]=n[2],c|=i&se?0:Hn);var f=n[3];if(f){var g=e[3];e[3]=g?Ja(g,f,n[4]):f,e[4]=g?ut(e[3],A):n[4]}return f=n[5],f&&(g=e[5],e[5]=g?Xa(g,f,n[6]):f,e[6]=g?ut(e[5],A):n[6]),f=n[7],f&&(e[7]=f),o&Le&&(e[8]=e[8]==null?n[8]:We(e[8],n[8])),e[9]==null&&(e[9]=n[9]),e[0]=n[0],e[1]=c,e}function Nh(e){var n=[];if(e!=null)for(var i in he(e))n.push(i);return n}function Oh(e){return ji.call(e)}function yu(e,n,i){return n=Se(n===r?e.length-1:n,0),function(){for(var o=arguments,c=-1,l=Se(o.length-n,0),h=D(l);++c<l;)h[c]=o[n+c];c=-1;for(var f=D(n+1);++c<n;)f[c]=o[c];return f[n]=i(h),Ze(e,this,f)}}function Eu(e,n){return n.length<2?e:Nt(e,hn(n,0,-1))}function _h(e,n){for(var i=e.length,o=We(n.length,i),c=Ye(e);o--;){var l=n[o];e[o]=Xn(l,i)?c[l]:r}return e}function js(e,n){if(!(n==="constructor"&&typeof e[n]=="function")&&n!="__proto__")return e[n]}var gu=Tu(ka),Ti=Ml||function(e,n){return Be.setTimeout(e,n)},Ms=Tu(Jp);function mu(e,n,i){var o=n+"";return Ms(e,mh(o,xh(yh(o),i)))}function Tu(e){var n=0,i=0;return function(){var o=$l(),c=mt-(o-i);if(i=o,c>0){if(++n>=rt)return arguments[0]}else n=0;return e.apply(r,arguments)}}function lr(e,n){var i=-1,o=e.length,c=o-1;for(n=n===r?o:n;++i<n;){var l=As(i,c),h=e[l];e[l]=e[i],e[i]=h}return e.length=n,e}var Iu=bh(function(e){var n=[];return e.charCodeAt(0)===46&&n.push(""),e.replace(gd,function(i,o,c,l){n.push(c?l.replace(Nd,"$1"):o||i)}),n});function Fn(e){if(typeof e=="string"||tn(e))return e;var n=e+"";return n=="0"&&1/e==-Ln?"-0":n}function _t(e){if(e!=null){try{return ki.call(e)}catch{}try{return e+""}catch{}}return""}function xh(e,n){return cn(B,function(i){var o="_."+i[0];n&i[1]&&!Li(e,o)&&e.push(o)}),e.sort()}function Du(e){if(e instanceof te)return e.clone();var n=new ln(e.__wrapped__,e.__chain__);return n.__actions__=Ye(e.__actions__),n.__index__=e.__index__,n.__values__=e.__values__,n}function Sh(e,n,i){(i?Me(e,n,i):n===r)?n=1:n=Se(J(n),0);var o=e==null?0:e.length;if(!o||n<1)return[];for(var c=0,l=0,h=D(Yi(o/n));c<o;)h[l++]=hn(e,c,c+=n);return h}function wh(e){for(var n=-1,i=e==null?0:e.length,o=0,c=[];++n<i;){var l=e[n];l&&(c[o++]=l)}return c}function Ch(){var e=arguments.length;if(!e)return[];for(var n=D(e-1),i=arguments[0],o=e;o--;)n[o-1]=arguments[o];return at(q(i)?Ye(i):[i],Ge(n,1))}var Rh=Z(function(e,n){return be(e)?hi(e,Ge(n,1,be,!0)):[]}),Bh=Z(function(e,n){var i=fn(n);return be(i)&&(i=r),be(e)?hi(e,Ge(n,1,be,!0),z(i,2)):[]}),Gh=Z(function(e,n){var i=fn(n);return be(i)&&(i=r),be(e)?hi(e,Ge(n,1,be,!0),r,i):[]});function Lh(e,n,i){var o=e==null?0:e.length;return o?(n=i||n===r?1:J(n),hn(e,n<0?0:n,o)):[]}function Uh(e,n,i){var o=e==null?0:e.length;return o?(n=i||n===r?1:J(n),n=o-n,hn(e,0,n<0?0:n)):[]}function Wh(e,n){return e&&e.length?ir(e,z(n,3),!0,!0):[]}function Fh(e,n){return e&&e.length?ir(e,z(n,3),!0):[]}function Ph(e,n,i,o){var c=e==null?0:e.length;return c?(i&&typeof i!="number"&&Me(e,n,i)&&(i=0,o=c),Cp(e,n,i,o)):[]}function vu(e,n,i){var o=e==null?0:e.length;if(!o)return-1;var c=i==null?0:J(i);return c<0&&(c=Se(o+c,0)),Ui(e,z(n,3),c)}function bu(e,n,i){var o=e==null?0:e.length;if(!o)return-1;var c=o-1;return i!==r&&(c=J(i),c=i<0?Se(o+c,0):We(c,o-1)),Ui(e,z(n,3),c,!0)}function Au(e){var n=e==null?0:e.length;return n?Ge(e,1):[]}function kh(e){var n=e==null?0:e.length;return n?Ge(e,Ln):[]}function jh(e,n){var i=e==null?0:e.length;return i?(n=n===r?1:J(n),Ge(e,n)):[]}function Mh(e){for(var n=-1,i=e==null?0:e.length,o={};++n<i;){var c=e[n];o[c[0]]=c[1]}return o}function Nu(e){return e&&e.length?e[0]:r}function Hh(e,n,i){var o=e==null?0:e.length;if(!o)return-1;var c=i==null?0:J(i);return c<0&&(c=Se(o+c,0)),Ut(e,n,c)}function zh(e){var n=e==null?0:e.length;return n?hn(e,0,-1):[]}var Vh=Z(function(e){var n=ge(e,Ss);return n.length&&n[0]===e[0]?Ts(n):[]}),$h=Z(function(e){var n=fn(e),i=ge(e,Ss);return n===fn(i)?n=r:i.pop(),i.length&&i[0]===e[0]?Ts(i,z(n,2)):[]}),Yh=Z(function(e){var n=fn(e),i=ge(e,Ss);return n=typeof n=="function"?n:r,n&&i.pop(),i.length&&i[0]===e[0]?Ts(i,r,n):[]});function Qh(e,n){return e==null?"":zl.call(e,n)}function fn(e){var n=e==null?0:e.length;return n?e[n-1]:r}function qh(e,n,i){var o=e==null?0:e.length;if(!o)return-1;var c=o;return i!==r&&(c=J(i),c=c<0?Se(o+c,0):We(c,o-1)),n===n?xl(e,n,c):Ui(e,sa,c,!0)}function Jh(e,n){return e&&e.length?Ua(e,J(n)):r}var Xh=Z(Ou);function Ou(e,n){return e&&e.length&&n&&n.length?bs(e,n):e}function Kh(e,n,i){return e&&e.length&&n&&n.length?bs(e,n,z(i,2)):e}function Zh(e,n,i){return e&&e.length&&n&&n.length?bs(e,n,r,i):e}var ef=Jn(function(e,n){var i=e==null?0:e.length,o=ys(e,n);return Pa(e,ge(n,function(c){return Xn(c,i)?+c:c}).sort(qa)),o});function nf(e,n){var i=[];if(!(e&&e.length))return i;var o=-1,c=[],l=e.length;for(n=z(n,3);++o<l;){var h=e[o];n(h,o,e)&&(i.push(h),c.push(o))}return Pa(e,c),i}function Hs(e){return e==null?e:Ql.call(e)}function tf(e,n,i){var o=e==null?0:e.length;return o?(i&&typeof i!="number"&&Me(e,n,i)?(n=0,i=o):(n=n==null?0:J(n),i=i===r?o:J(i)),hn(e,n,i)):[]}function rf(e,n){return tr(e,n)}function sf(e,n,i){return Os(e,n,z(i,2))}function of(e,n){var i=e==null?0:e.length;if(i){var o=tr(e,n);if(o<i&&Nn(e[o],n))return o}return-1}function af(e,n){return tr(e,n,!0)}function uf(e,n,i){return Os(e,n,z(i,2),!0)}function cf(e,n){var i=e==null?0:e.length;if(i){var o=tr(e,n,!0)-1;if(Nn(e[o],n))return o}return-1}function df(e){return e&&e.length?ja(e):[]}function lf(e,n){return e&&e.length?ja(e,z(n,2)):[]}function pf(e){var n=e==null?0:e.length;return n?hn(e,1,n):[]}function hf(e,n,i){return e&&e.length?(n=i||n===r?1:J(n),hn(e,0,n<0?0:n)):[]}function ff(e,n,i){var o=e==null?0:e.length;return o?(n=i||n===r?1:J(n),n=o-n,hn(e,n<0?0:n,o)):[]}function yf(e,n){return e&&e.length?ir(e,z(n,3),!1,!0):[]}function Ef(e,n){return e&&e.length?ir(e,z(n,3)):[]}var gf=Z(function(e){return lt(Ge(e,1,be,!0))}),mf=Z(function(e){var n=fn(e);return be(n)&&(n=r),lt(Ge(e,1,be,!0),z(n,2))}),Tf=Z(function(e){var n=fn(e);return n=typeof n=="function"?n:r,lt(Ge(e,1,be,!0),r,n)});function If(e){return e&&e.length?lt(e):[]}function Df(e,n){return e&&e.length?lt(e,z(n,2)):[]}function vf(e,n){return n=typeof n=="function"?n:r,e&&e.length?lt(e,r,n):[]}function zs(e){if(!(e&&e.length))return[];var n=0;return e=ot(e,function(i){if(be(i))return n=Se(i.length,n),!0}),as(n,function(i){return ge(e,rs(i))})}function _u(e,n){if(!(e&&e.length))return[];var i=zs(e);return n==null?i:ge(i,function(o){return Ze(n,r,o)})}var bf=Z(function(e,n){return be(e)?hi(e,n):[]}),Af=Z(function(e){return xs(ot(e,be))}),Nf=Z(function(e){var n=fn(e);return be(n)&&(n=r),xs(ot(e,be),z(n,2))}),Of=Z(function(e){var n=fn(e);return n=typeof n=="function"?n:r,xs(ot(e,be),r,n)}),_f=Z(zs);function xf(e,n){return Va(e||[],n||[],pi)}function Sf(e,n){return Va(e||[],n||[],Ei)}var wf=Z(function(e){var n=e.length,i=n>1?e[n-1]:r;return i=typeof i=="function"?(e.pop(),i):r,_u(e,i)});function xu(e){var n=d(e);return n.__chain__=!0,n}function Cf(e,n){return n(e),e}function pr(e,n){return n(e)}var Rf=Jn(function(e){var n=e.length,i=n?e[0]:0,o=this.__wrapped__,c=function(l){return ys(l,e)};return n>1||this.__actions__.length||!(o instanceof te)||!Xn(i)?this.thru(c):(o=o.slice(i,+i+(n?1:0)),o.__actions__.push({func:pr,args:[c],thisArg:r}),new ln(o,this.__chain__).thru(function(l){return n&&!l.length&&l.push(r),l}))});function Bf(){return xu(this)}function Gf(){return new ln(this.value(),this.__chain__)}function Lf(){this.__values__===r&&(this.__values__=Mu(this.value()));var e=this.__index__>=this.__values__.length,n=e?r:this.__values__[this.__index__++];return{done:e,value:n}}function Uf(){return this}function Wf(e){for(var n,i=this;i instanceof Xi;){var o=Du(i);o.__index__=0,o.__values__=r,n?c.__wrapped__=o:n=o;var c=o;i=i.__wrapped__}return c.__wrapped__=e,n}function Ff(){var e=this.__wrapped__;if(e instanceof te){var n=e;return this.__actions__.length&&(n=new te(this)),n=n.reverse(),n.__actions__.push({func:pr,args:[Hs],thisArg:r}),new ln(n,this.__chain__)}return this.thru(Hs)}function Pf(){return za(this.__wrapped__,this.__actions__)}var kf=rr(function(e,n,i){le.call(e,i)?++e[i]:Qn(e,i,1)});function jf(e,n,i){var o=q(e)?ia:wp;return i&&Me(e,n,i)&&(n=r),o(e,z(n,3))}function Mf(e,n){var i=q(e)?ot:_a;return i(e,z(n,3))}var Hf=nu(vu),zf=nu(bu);function Vf(e,n){return Ge(hr(e,n),1)}function $f(e,n){return Ge(hr(e,n),Ln)}function Yf(e,n,i){return i=i===r?1:J(i),Ge(hr(e,n),i)}function Su(e,n){var i=q(e)?cn:dt;return i(e,z(n,3))}function wu(e,n){var i=q(e)?ll:Oa;return i(e,z(n,3))}var Qf=rr(function(e,n,i){le.call(e,i)?e[i].push(n):Qn(e,i,[n])});function qf(e,n,i,o){e=Qe(e)?e:Qt(e),i=i&&!o?J(i):0;var c=e.length;return i<0&&(i=Se(c+i,0)),mr(e)?i<=c&&e.indexOf(n,i)>-1:!!c&&Ut(e,n,i)>-1}var Jf=Z(function(e,n,i){var o=-1,c=typeof n=="function",l=Qe(e)?D(e.length):[];return dt(e,function(h){l[++o]=c?Ze(n,h,i):fi(h,n,i)}),l}),Xf=rr(function(e,n,i){Qn(e,i,n)});function hr(e,n){var i=q(e)?ge:Ba;return i(e,z(n,3))}function Kf(e,n,i,o){return e==null?[]:(q(n)||(n=n==null?[]:[n]),i=o?r:i,q(i)||(i=i==null?[]:[i]),Wa(e,n,i))}var Zf=rr(function(e,n,i){e[i?0:1].push(n)},function(){return[[],[]]});function ey(e,n,i){var o=q(e)?ts:aa,c=arguments.length<3;return o(e,z(n,4),i,c,dt)}function ny(e,n,i){var o=q(e)?pl:aa,c=arguments.length<3;return o(e,z(n,4),i,c,Oa)}function ty(e,n){var i=q(e)?ot:_a;return i(e,Er(z(n,3)))}function iy(e){var n=q(e)?va:Qp;return n(e)}function ry(e,n,i){(i?Me(e,n,i):n===r)?n=1:n=J(n);var o=q(e)?Np:qp;return o(e,n)}function sy(e){var n=q(e)?Op:Xp;return n(e)}function oy(e){if(e==null)return 0;if(Qe(e))return mr(e)?Ft(e):e.length;var n=Fe(e);return n==Dn||n==vn?e.size:Ds(e).length}function ay(e,n,i){var o=q(e)?is:Kp;return i&&Me(e,n,i)&&(n=r),o(e,z(n,3))}var uy=Z(function(e,n){if(e==null)return[];var i=n.length;return i>1&&Me(e,n[0],n[1])?n=[]:i>2&&Me(n[0],n[1],n[2])&&(n=[n[0]]),Wa(e,Ge(n,1),[])}),fr=jl||function(){return Be.Date.now()};function cy(e,n){if(typeof n!="function")throw new dn(y);return e=J(e),function(){if(--e<1)return n.apply(this,arguments)}}function Cu(e,n,i){return n=i?r:n,n=e&&n==null?e.length:n,qn(e,Le,r,r,r,r,n)}function Ru(e,n){var i;if(typeof n!="function")throw new dn(y);return e=J(e),function(){return--e>0&&(i=n.apply(this,arguments)),e<=1&&(n=r),i}}var Vs=Z(function(e,n,i){var o=se;if(i.length){var c=ut(i,$t(Vs));o|=we}return qn(e,o,n,i,c)}),Bu=Z(function(e,n,i){var o=se|me;if(i.length){var c=ut(i,$t(Bu));o|=we}return qn(n,o,e,i,c)});function Gu(e,n,i){n=i?r:n;var o=qn(e,Te,r,r,r,r,r,n);return o.placeholder=Gu.placeholder,o}function Lu(e,n,i){n=i?r:n;var o=qn(e,Oe,r,r,r,r,r,n);return o.placeholder=Lu.placeholder,o}function Uu(e,n,i){var o,c,l,h,f,g,N=0,O=!1,w=!1,R=!0;if(typeof e!="function")throw new dn(y);n=yn(n)||0,Ie(i)&&(O=!!i.leading,w="maxWait"in i,l=w?Se(yn(i.maxWait)||0,n):l,R="trailing"in i?!!i.trailing:R);function P(Ae){var On=o,et=c;return o=c=r,N=Ae,h=e.apply(et,On),h}function V(Ae){return N=Ae,f=Ti(ee,n),O?P(Ae):h}function X(Ae){var On=Ae-g,et=Ae-N,nc=n-On;return w?We(nc,l-et):nc}function $(Ae){var On=Ae-g,et=Ae-N;return g===r||On>=n||On<0||w&&et>=l}function ee(){var Ae=fr();if($(Ae))return re(Ae);f=Ti(ee,X(Ae))}function re(Ae){return f=r,R&&o?P(Ae):(o=c=r,h)}function rn(){f!==r&&$a(f),N=0,o=g=c=f=r}function He(){return f===r?h:re(fr())}function sn(){var Ae=fr(),On=$(Ae);if(o=arguments,c=this,g=Ae,On){if(f===r)return V(g);if(w)return $a(f),f=Ti(ee,n),P(g)}return f===r&&(f=Ti(ee,n)),h}return sn.cancel=rn,sn.flush=He,sn}var dy=Z(function(e,n){return Na(e,1,n)}),ly=Z(function(e,n,i){return Na(e,yn(n)||0,i)});function py(e){return qn(e,S)}function yr(e,n){if(typeof e!="function"||n!=null&&typeof n!="function")throw new dn(y);var i=function(){var o=arguments,c=n?n.apply(this,o):o[0],l=i.cache;if(l.has(c))return l.get(c);var h=e.apply(this,o);return i.cache=l.set(c,h)||l,h};return i.cache=new(yr.Cache||Yn),i}yr.Cache=Yn;function Er(e){if(typeof e!="function")throw new dn(y);return function(){var n=arguments;switch(n.length){case 0:return!e.call(this);case 1:return!e.call(this,n[0]);case 2:return!e.call(this,n[0],n[1]);case 3:return!e.call(this,n[0],n[1],n[2])}return!e.apply(this,n)}}function hy(e){return Ru(2,e)}var fy=Zp(function(e,n){n=n.length==1&&q(n[0])?ge(n[0],en(z())):ge(Ge(n,1),en(z()));var i=n.length;return Z(function(o){for(var c=-1,l=We(o.length,i);++c<l;)o[c]=n[c].call(this,o[c]);return Ze(e,this,o)})}),$s=Z(function(e,n){var i=ut(n,$t($s));return qn(e,we,r,n,i)}),Wu=Z(function(e,n){var i=ut(n,$t(Wu));return qn(e,Pe,r,n,i)}),yy=Jn(function(e,n){return qn(e,zn,r,r,r,n)});function Ey(e,n){if(typeof e!="function")throw new dn(y);return n=n===r?n:J(n),Z(e,n)}function gy(e,n){if(typeof e!="function")throw new dn(y);return n=n==null?0:Se(J(n),0),Z(function(i){var o=i[n],c=ht(i,0,n);return o&&at(c,o),Ze(e,this,c)})}function my(e,n,i){var o=!0,c=!0;if(typeof e!="function")throw new dn(y);return Ie(i)&&(o="leading"in i?!!i.leading:o,c="trailing"in i?!!i.trailing:c),Uu(e,n,{leading:o,maxWait:n,trailing:c})}function Ty(e){return Cu(e,1)}function Iy(e,n){return $s(ws(n),e)}function Dy(){if(!arguments.length)return[];var e=arguments[0];return q(e)?e:[e]}function vy(e){return pn(e,K)}function by(e,n){return n=typeof n=="function"?n:r,pn(e,K,n)}function Ay(e){return pn(e,C|K)}function Ny(e,n){return n=typeof n=="function"?n:r,pn(e,C|K,n)}function Oy(e,n){return n==null||Aa(e,n,Ce(n))}function Nn(e,n){return e===n||e!==e&&n!==n}var _y=ur(ms),xy=ur(function(e,n){return e>=n}),xt=wa(function(){return arguments}())?wa:function(e){return De(e)&&le.call(e,"callee")&&!Ea.call(e,"callee")},q=D.isArray,Sy=Xo?en(Xo):Up;function Qe(e){return e!=null&&gr(e.length)&&!Kn(e)}function be(e){return De(e)&&Qe(e)}function wy(e){return e===!0||e===!1||De(e)&&je(e)==ce}var ft=Hl||io,Cy=Ko?en(Ko):Wp;function Ry(e){return De(e)&&e.nodeType===1&&!Ii(e)}function By(e){if(e==null)return!0;if(Qe(e)&&(q(e)||typeof e=="string"||typeof e.splice=="function"||ft(e)||Yt(e)||xt(e)))return!e.length;var n=Fe(e);if(n==Dn||n==vn)return!e.size;if(mi(e))return!Ds(e).length;for(var i in e)if(le.call(e,i))return!1;return!0}function Gy(e,n){return yi(e,n)}function Ly(e,n,i){i=typeof i=="function"?i:r;var o=i?i(e,n):r;return o===r?yi(e,n,r,i):!!o}function Ys(e){if(!De(e))return!1;var n=je(e);return n==st||n==ei||typeof e.message=="string"&&typeof e.name=="string"&&!Ii(e)}function Uy(e){return typeof e=="number"&&ma(e)}function Kn(e){if(!Ie(e))return!1;var n=je(e);return n==Ue||n==No||n==ve||n==sd}function Fu(e){return typeof e=="number"&&e==J(e)}function gr(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=In}function Ie(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}function De(e){return e!=null&&typeof e=="object"}var Pu=Zo?en(Zo):Pp;function Wy(e,n){return e===n||Is(e,n,Ws(n))}function Fy(e,n,i){return i=typeof i=="function"?i:r,Is(e,n,Ws(n),i)}function Py(e){return ku(e)&&e!=+e}function ky(e){if(vh(e))throw new Q(p);return Ca(e)}function jy(e){return e===null}function My(e){return e==null}function ku(e){return typeof e=="number"||De(e)&&je(e)==ni}function Ii(e){if(!De(e)||je(e)!=Vn)return!1;var n=zi(e);if(n===null)return!0;var i=le.call(n,"constructor")&&n.constructor;return typeof i=="function"&&i instanceof i&&ki.call(i)==Wl}var Qs=ea?en(ea):kp;function Hy(e){return Fu(e)&&e>=-In&&e<=In}var ju=na?en(na):jp;function mr(e){return typeof e=="string"||!q(e)&&De(e)&&je(e)==ii}function tn(e){return typeof e=="symbol"||De(e)&&je(e)==Ci}var Yt=ta?en(ta):Mp;function zy(e){return e===r}function Vy(e){return De(e)&&Fe(e)==ri}function $y(e){return De(e)&&je(e)==ad}var Yy=ur(vs),Qy=ur(function(e,n){return e<=n});function Mu(e){if(!e)return[];if(Qe(e))return mr(e)?bn(e):Ye(e);if(ai&&e[ai])return Nl(e[ai]());var n=Fe(e),i=n==Dn?cs:n==vn?Wi:Qt;return i(e)}function Zn(e){if(!e)return e===0?e:0;if(e=yn(e),e===Ln||e===-Ln){var n=e<0?-1:1;return n*Bt}return e===e?e:0}function J(e){var n=Zn(e),i=n%1;return n===n?i?n-i:n:0}function Hu(e){return e?At(J(e),0,on):0}function yn(e){if(typeof e=="number")return e;if(tn(e))return Tt;if(Ie(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=Ie(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=ua(e);var i=xd.test(e);return i||wd.test(e)?ul(e.slice(2),i?2:8):_d.test(e)?Tt:+e}function zu(e){return Wn(e,qe(e))}function qy(e){return e?At(J(e),-In,In):e===0?e:0}function de(e){return e==null?"":nn(e)}var Jy=zt(function(e,n){if(mi(n)||Qe(n)){Wn(n,Ce(n),e);return}for(var i in n)le.call(n,i)&&pi(e,i,n[i])}),Vu=zt(function(e,n){Wn(n,qe(n),e)}),Tr=zt(function(e,n,i,o){Wn(n,qe(n),e,o)}),Xy=zt(function(e,n,i,o){Wn(n,Ce(n),e,o)}),Ky=Jn(ys);function Zy(e,n){var i=Ht(e);return n==null?i:ba(i,n)}var eE=Z(function(e,n){e=he(e);var i=-1,o=n.length,c=o>2?n[2]:r;for(c&&Me(n[0],n[1],c)&&(o=1);++i<o;)for(var l=n[i],h=qe(l),f=-1,g=h.length;++f<g;){var N=h[f],O=e[N];(O===r||Nn(O,kt[N])&&!le.call(e,N))&&(e[N]=l[N])}return e}),nE=Z(function(e){return e.push(r,uu),Ze($u,r,e)});function tE(e,n){return ra(e,z(n,3),Un)}function iE(e,n){return ra(e,z(n,3),gs)}function rE(e,n){return e==null?e:Es(e,z(n,3),qe)}function sE(e,n){return e==null?e:xa(e,z(n,3),qe)}function oE(e,n){return e&&Un(e,z(n,3))}function aE(e,n){return e&&gs(e,z(n,3))}function uE(e){return e==null?[]:er(e,Ce(e))}function cE(e){return e==null?[]:er(e,qe(e))}function qs(e,n,i){var o=e==null?r:Nt(e,n);return o===r?i:o}function dE(e,n){return e!=null&&lu(e,n,Rp)}function Js(e,n){return e!=null&&lu(e,n,Bp)}var lE=iu(function(e,n,i){n!=null&&typeof n.toString!="function"&&(n=ji.call(n)),e[n]=i},Ks(Je)),pE=iu(function(e,n,i){n!=null&&typeof n.toString!="function"&&(n=ji.call(n)),le.call(e,n)?e[n].push(i):e[n]=[i]},z),hE=Z(fi);function Ce(e){return Qe(e)?Da(e):Ds(e)}function qe(e){return Qe(e)?Da(e,!0):Hp(e)}function fE(e,n){var i={};return n=z(n,3),Un(e,function(o,c,l){Qn(i,n(o,c,l),o)}),i}function yE(e,n){var i={};return n=z(n,3),Un(e,function(o,c,l){Qn(i,c,n(o,c,l))}),i}var EE=zt(function(e,n,i){nr(e,n,i)}),$u=zt(function(e,n,i,o){nr(e,n,i,o)}),gE=Jn(function(e,n){var i={};if(e==null)return i;var o=!1;n=ge(n,function(l){return l=pt(l,e),o||(o=l.length>1),l}),Wn(e,Ls(e),i),o&&(i=pn(i,C|F|K,dh));for(var c=n.length;c--;)_s(i,n[c]);return i});function mE(e,n){return Yu(e,Er(z(n)))}var TE=Jn(function(e,n){return e==null?{}:Vp(e,n)});function Yu(e,n){if(e==null)return{};var i=ge(Ls(e),function(o){return[o]});return n=z(n),Fa(e,i,function(o,c){return n(o,c[0])})}function IE(e,n,i){n=pt(n,e);var o=-1,c=n.length;for(c||(c=1,e=r);++o<c;){var l=e==null?r:e[Fn(n[o])];l===r&&(o=c,l=i),e=Kn(l)?l.call(e):l}return e}function DE(e,n,i){return e==null?e:Ei(e,n,i)}function vE(e,n,i,o){return o=typeof o=="function"?o:r,e==null?e:Ei(e,n,i,o)}var Qu=ou(Ce),qu=ou(qe);function bE(e,n,i){var o=q(e),c=o||ft(e)||Yt(e);if(n=z(n,4),i==null){var l=e&&e.constructor;c?i=o?new l:[]:Ie(e)?i=Kn(l)?Ht(zi(e)):{}:i={}}return(c?cn:Un)(e,function(h,f,g){return n(i,h,f,g)}),i}function AE(e,n){return e==null?!0:_s(e,n)}function NE(e,n,i){return e==null?e:Ha(e,n,ws(i))}function OE(e,n,i,o){return o=typeof o=="function"?o:r,e==null?e:Ha(e,n,ws(i),o)}function Qt(e){return e==null?[]:us(e,Ce(e))}function _E(e){return e==null?[]:us(e,qe(e))}function xE(e,n,i){return i===r&&(i=n,n=r),i!==r&&(i=yn(i),i=i===i?i:0),n!==r&&(n=yn(n),n=n===n?n:0),At(yn(e),n,i)}function SE(e,n,i){return n=Zn(n),i===r?(i=n,n=0):i=Zn(i),e=yn(e),Gp(e,n,i)}function wE(e,n,i){if(i&&typeof i!="boolean"&&Me(e,n,i)&&(n=i=r),i===r&&(typeof n=="boolean"?(i=n,n=r):typeof e=="boolean"&&(i=e,e=r)),e===r&&n===r?(e=0,n=1):(e=Zn(e),n===r?(n=e,e=0):n=Zn(n)),e>n){var o=e;e=n,n=o}if(i||e%1||n%1){var c=Ta();return We(e+c*(n-e+al("1e-"+((c+"").length-1))),n)}return As(e,n)}var CE=Vt(function(e,n,i){return n=n.toLowerCase(),e+(i?Ju(n):n)});function Ju(e){return Xs(de(e).toLowerCase())}function Xu(e){return e=de(e),e&&e.replace(Rd,Il).replace(Xd,"")}function RE(e,n,i){e=de(e),n=nn(n);var o=e.length;i=i===r?o:At(J(i),0,o);var c=i;return i-=n.length,i>=0&&e.slice(i,c)==n}function BE(e){return e=de(e),e&&pd.test(e)?e.replace(xo,Dl):e}function GE(e){return e=de(e),e&&md.test(e)?e.replace($r,"\\$&"):e}var LE=Vt(function(e,n,i){return e+(i?"-":"")+n.toLowerCase()}),UE=Vt(function(e,n,i){return e+(i?" ":"")+n.toLowerCase()}),WE=eu("toLowerCase");function FE(e,n,i){e=de(e),n=J(n);var o=n?Ft(e):0;if(!n||o>=n)return e;var c=(n-o)/2;return ar(Qi(c),i)+e+ar(Yi(c),i)}function PE(e,n,i){e=de(e),n=J(n);var o=n?Ft(e):0;return n&&o<n?e+ar(n-o,i):e}function kE(e,n,i){e=de(e),n=J(n);var o=n?Ft(e):0;return n&&o<n?ar(n-o,i)+e:e}function jE(e,n,i){return i||n==null?n=0:n&&(n=+n),Yl(de(e).replace(Yr,""),n||0)}function ME(e,n,i){return(i?Me(e,n,i):n===r)?n=1:n=J(n),Ns(de(e),n)}function HE(){var e=arguments,n=de(e[0]);return e.length<3?n:n.replace(e[1],e[2])}var zE=Vt(function(e,n,i){return e+(i?"_":"")+n.toLowerCase()});function VE(e,n,i){return i&&typeof i!="number"&&Me(e,n,i)&&(n=i=r),i=i===r?on:i>>>0,i?(e=de(e),e&&(typeof n=="string"||n!=null&&!Qs(n))&&(n=nn(n),!n&&Wt(e))?ht(bn(e),0,i):e.split(n,i)):[]}var $E=Vt(function(e,n,i){return e+(i?" ":"")+Xs(n)});function YE(e,n,i){return e=de(e),i=i==null?0:At(J(i),0,e.length),n=nn(n),e.slice(i,i+n.length)==n}function QE(e,n,i){var o=d.templateSettings;i&&Me(e,n,i)&&(n=r),e=de(e),n=Tr({},n,o,au);var c=Tr({},n.imports,o.imports,au),l=Ce(c),h=us(c,l),f,g,N=0,O=n.interpolate||Ri,w="__p += '",R=ds((n.escape||Ri).source+"|"+O.source+"|"+(O===So?Od:Ri).source+"|"+(n.evaluate||Ri).source+"|$","g"),P="//# sourceURL="+(le.call(n,"sourceURL")?(n.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++tl+"]")+`
`;e.replace(R,function($,ee,re,rn,He,sn){return re||(re=rn),w+=e.slice(N,sn).replace(Bd,vl),ee&&(f=!0,w+=`' +
__e(`+ee+`) +
'`),He&&(g=!0,w+=`';
`+He+`;
__p += '`),re&&(w+=`' +
((__t = (`+re+`)) == null ? '' : __t) +
'`),N=sn+$.length,$}),w+=`';
`;var V=le.call(n,"variable")&&n.variable;if(!V)w=`with (obj) {
`+w+`
}
`;else if(Ad.test(V))throw new Q(T);w=(g?w.replace(ud,""):w).replace(cd,"$1").replace(dd,"$1;"),w="function("+(V||"obj")+`) {
`+(V?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(f?", __e = _.escape":"")+(g?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+w+`return __p
}`;var X=Zu(function(){return ae(l,P+"return "+w).apply(r,h)});if(X.source=w,Ys(X))throw X;return X}function qE(e){return de(e).toLowerCase()}function JE(e){return de(e).toUpperCase()}function XE(e,n,i){if(e=de(e),e&&(i||n===r))return ua(e);if(!e||!(n=nn(n)))return e;var o=bn(e),c=bn(n),l=ca(o,c),h=da(o,c)+1;return ht(o,l,h).join("")}function KE(e,n,i){if(e=de(e),e&&(i||n===r))return e.slice(0,pa(e)+1);if(!e||!(n=nn(n)))return e;var o=bn(e),c=da(o,bn(n))+1;return ht(o,0,c).join("")}function ZE(e,n,i){if(e=de(e),e&&(i||n===r))return e.replace(Yr,"");if(!e||!(n=nn(n)))return e;var o=bn(e),c=ca(o,bn(n));return ht(o,c).join("")}function eg(e,n){var i=Y,o=ke;if(Ie(n)){var c="separator"in n?n.separator:c;i="length"in n?J(n.length):i,o="omission"in n?nn(n.omission):o}e=de(e);var l=e.length;if(Wt(e)){var h=bn(e);l=h.length}if(i>=l)return e;var f=i-Ft(o);if(f<1)return o;var g=h?ht(h,0,f).join(""):e.slice(0,f);if(c===r)return g+o;if(h&&(f+=g.length-f),Qs(c)){if(e.slice(f).search(c)){var N,O=g;for(c.global||(c=ds(c.source,de(wo.exec(c))+"g")),c.lastIndex=0;N=c.exec(O);)var w=N.index;g=g.slice(0,w===r?f:w)}}else if(e.indexOf(nn(c),f)!=f){var R=g.lastIndexOf(c);R>-1&&(g=g.slice(0,R))}return g+o}function ng(e){return e=de(e),e&&ld.test(e)?e.replace(_o,Sl):e}var tg=Vt(function(e,n,i){return e+(i?" ":"")+n.toUpperCase()}),Xs=eu("toUpperCase");function Ku(e,n,i){return e=de(e),n=i?r:n,n===r?Al(e)?Rl(e):yl(e):e.match(n)||[]}var Zu=Z(function(e,n){try{return Ze(e,r,n)}catch(i){return Ys(i)?i:new Q(i)}}),ig=Jn(function(e,n){return cn(n,function(i){i=Fn(i),Qn(e,i,Vs(e[i],e))}),e});function rg(e){var n=e==null?0:e.length,i=z();return e=n?ge(e,function(o){if(typeof o[1]!="function")throw new dn(y);return[i(o[0]),o[1]]}):[],Z(function(o){for(var c=-1;++c<n;){var l=e[c];if(Ze(l[0],this,o))return Ze(l[1],this,o)}})}function sg(e){return Sp(pn(e,C))}function Ks(e){return function(){return e}}function og(e,n){return e==null||e!==e?n:e}var ag=tu(),ug=tu(!0);function Je(e){return e}function Zs(e){return Ra(typeof e=="function"?e:pn(e,C))}function cg(e){return Ga(pn(e,C))}function dg(e,n){return La(e,pn(n,C))}var lg=Z(function(e,n){return function(i){return fi(i,e,n)}}),pg=Z(function(e,n){return function(i){return fi(e,i,n)}});function eo(e,n,i){var o=Ce(n),c=er(n,o);i==null&&!(Ie(n)&&(c.length||!o.length))&&(i=n,n=e,e=this,c=er(n,Ce(n)));var l=!(Ie(i)&&"chain"in i)||!!i.chain,h=Kn(e);return cn(c,function(f){var g=n[f];e[f]=g,h&&(e.prototype[f]=function(){var N=this.__chain__;if(l||N){var O=e(this.__wrapped__),w=O.__actions__=Ye(this.__actions__);return w.push({func:g,args:arguments,thisArg:e}),O.__chain__=N,O}return g.apply(e,at([this.value()],arguments))})}),e}function hg(){return Be._===this&&(Be._=Fl),this}function no(){}function fg(e){return e=J(e),Z(function(n){return Ua(n,e)})}var yg=Rs(ge),Eg=Rs(ia),gg=Rs(is);function ec(e){return Ps(e)?rs(Fn(e)):$p(e)}function mg(e){return function(n){return e==null?r:Nt(e,n)}}var Tg=ru(),Ig=ru(!0);function to(){return[]}function io(){return!1}function Dg(){return{}}function vg(){return""}function bg(){return!0}function Ag(e,n){if(e=J(e),e<1||e>In)return[];var i=on,o=We(e,on);n=z(n),e-=on;for(var c=as(o,n);++i<e;)n(i);return c}function Ng(e){return q(e)?ge(e,Fn):tn(e)?[e]:Ye(Iu(de(e)))}function Og(e){var n=++Ul;return de(e)+n}var _g=or(function(e,n){return e+n},0),xg=Bs("ceil"),Sg=or(function(e,n){return e/n},1),wg=Bs("floor");function Cg(e){return e&&e.length?Zi(e,Je,ms):r}function Rg(e,n){return e&&e.length?Zi(e,z(n,2),ms):r}function Bg(e){return oa(e,Je)}function Gg(e,n){return oa(e,z(n,2))}function Lg(e){return e&&e.length?Zi(e,Je,vs):r}function Ug(e,n){return e&&e.length?Zi(e,z(n,2),vs):r}var Wg=or(function(e,n){return e*n},1),Fg=Bs("round"),Pg=or(function(e,n){return e-n},0);function kg(e){return e&&e.length?os(e,Je):0}function jg(e,n){return e&&e.length?os(e,z(n,2)):0}return d.after=cy,d.ary=Cu,d.assign=Jy,d.assignIn=Vu,d.assignInWith=Tr,d.assignWith=Xy,d.at=Ky,d.before=Ru,d.bind=Vs,d.bindAll=ig,d.bindKey=Bu,d.castArray=Dy,d.chain=xu,d.chunk=Sh,d.compact=wh,d.concat=Ch,d.cond=rg,d.conforms=sg,d.constant=Ks,d.countBy=kf,d.create=Zy,d.curry=Gu,d.curryRight=Lu,d.debounce=Uu,d.defaults=eE,d.defaultsDeep=nE,d.defer=dy,d.delay=ly,d.difference=Rh,d.differenceBy=Bh,d.differenceWith=Gh,d.drop=Lh,d.dropRight=Uh,d.dropRightWhile=Wh,d.dropWhile=Fh,d.fill=Ph,d.filter=Mf,d.flatMap=Vf,d.flatMapDeep=$f,d.flatMapDepth=Yf,d.flatten=Au,d.flattenDeep=kh,d.flattenDepth=jh,d.flip=py,d.flow=ag,d.flowRight=ug,d.fromPairs=Mh,d.functions=uE,d.functionsIn=cE,d.groupBy=Qf,d.initial=zh,d.intersection=Vh,d.intersectionBy=$h,d.intersectionWith=Yh,d.invert=lE,d.invertBy=pE,d.invokeMap=Jf,d.iteratee=Zs,d.keyBy=Xf,d.keys=Ce,d.keysIn=qe,d.map=hr,d.mapKeys=fE,d.mapValues=yE,d.matches=cg,d.matchesProperty=dg,d.memoize=yr,d.merge=EE,d.mergeWith=$u,d.method=lg,d.methodOf=pg,d.mixin=eo,d.negate=Er,d.nthArg=fg,d.omit=gE,d.omitBy=mE,d.once=hy,d.orderBy=Kf,d.over=yg,d.overArgs=fy,d.overEvery=Eg,d.overSome=gg,d.partial=$s,d.partialRight=Wu,d.partition=Zf,d.pick=TE,d.pickBy=Yu,d.property=ec,d.propertyOf=mg,d.pull=Xh,d.pullAll=Ou,d.pullAllBy=Kh,d.pullAllWith=Zh,d.pullAt=ef,d.range=Tg,d.rangeRight=Ig,d.rearg=yy,d.reject=ty,d.remove=nf,d.rest=Ey,d.reverse=Hs,d.sampleSize=ry,d.set=DE,d.setWith=vE,d.shuffle=sy,d.slice=tf,d.sortBy=uy,d.sortedUniq=df,d.sortedUniqBy=lf,d.split=VE,d.spread=gy,d.tail=pf,d.take=hf,d.takeRight=ff,d.takeRightWhile=yf,d.takeWhile=Ef,d.tap=Cf,d.throttle=my,d.thru=pr,d.toArray=Mu,d.toPairs=Qu,d.toPairsIn=qu,d.toPath=Ng,d.toPlainObject=zu,d.transform=bE,d.unary=Ty,d.union=gf,d.unionBy=mf,d.unionWith=Tf,d.uniq=If,d.uniqBy=Df,d.uniqWith=vf,d.unset=AE,d.unzip=zs,d.unzipWith=_u,d.update=NE,d.updateWith=OE,d.values=Qt,d.valuesIn=_E,d.without=bf,d.words=Ku,d.wrap=Iy,d.xor=Af,d.xorBy=Nf,d.xorWith=Of,d.zip=_f,d.zipObject=xf,d.zipObjectDeep=Sf,d.zipWith=wf,d.entries=Qu,d.entriesIn=qu,d.extend=Vu,d.extendWith=Tr,eo(d,d),d.add=_g,d.attempt=Zu,d.camelCase=CE,d.capitalize=Ju,d.ceil=xg,d.clamp=xE,d.clone=vy,d.cloneDeep=Ay,d.cloneDeepWith=Ny,d.cloneWith=by,d.conformsTo=Oy,d.deburr=Xu,d.defaultTo=og,d.divide=Sg,d.endsWith=RE,d.eq=Nn,d.escape=BE,d.escapeRegExp=GE,d.every=jf,d.find=Hf,d.findIndex=vu,d.findKey=tE,d.findLast=zf,d.findLastIndex=bu,d.findLastKey=iE,d.floor=wg,d.forEach=Su,d.forEachRight=wu,d.forIn=rE,d.forInRight=sE,d.forOwn=oE,d.forOwnRight=aE,d.get=qs,d.gt=_y,d.gte=xy,d.has=dE,d.hasIn=Js,d.head=Nu,d.identity=Je,d.includes=qf,d.indexOf=Hh,d.inRange=SE,d.invoke=hE,d.isArguments=xt,d.isArray=q,d.isArrayBuffer=Sy,d.isArrayLike=Qe,d.isArrayLikeObject=be,d.isBoolean=wy,d.isBuffer=ft,d.isDate=Cy,d.isElement=Ry,d.isEmpty=By,d.isEqual=Gy,d.isEqualWith=Ly,d.isError=Ys,d.isFinite=Uy,d.isFunction=Kn,d.isInteger=Fu,d.isLength=gr,d.isMap=Pu,d.isMatch=Wy,d.isMatchWith=Fy,d.isNaN=Py,d.isNative=ky,d.isNil=My,d.isNull=jy,d.isNumber=ku,d.isObject=Ie,d.isObjectLike=De,d.isPlainObject=Ii,d.isRegExp=Qs,d.isSafeInteger=Hy,d.isSet=ju,d.isString=mr,d.isSymbol=tn,d.isTypedArray=Yt,d.isUndefined=zy,d.isWeakMap=Vy,d.isWeakSet=$y,d.join=Qh,d.kebabCase=LE,d.last=fn,d.lastIndexOf=qh,d.lowerCase=UE,d.lowerFirst=WE,d.lt=Yy,d.lte=Qy,d.max=Cg,d.maxBy=Rg,d.mean=Bg,d.meanBy=Gg,d.min=Lg,d.minBy=Ug,d.stubArray=to,d.stubFalse=io,d.stubObject=Dg,d.stubString=vg,d.stubTrue=bg,d.multiply=Wg,d.nth=Jh,d.noConflict=hg,d.noop=no,d.now=fr,d.pad=FE,d.padEnd=PE,d.padStart=kE,d.parseInt=jE,d.random=wE,d.reduce=ey,d.reduceRight=ny,d.repeat=ME,d.replace=HE,d.result=IE,d.round=Fg,d.runInContext=E,d.sample=iy,d.size=oy,d.snakeCase=zE,d.some=ay,d.sortedIndex=rf,d.sortedIndexBy=sf,d.sortedIndexOf=of,d.sortedLastIndex=af,d.sortedLastIndexBy=uf,d.sortedLastIndexOf=cf,d.startCase=$E,d.startsWith=YE,d.subtract=Pg,d.sum=kg,d.sumBy=jg,d.template=QE,d.times=Ag,d.toFinite=Zn,d.toInteger=J,d.toLength=Hu,d.toLower=qE,d.toNumber=yn,d.toSafeInteger=qy,d.toString=de,d.toUpper=JE,d.trim=XE,d.trimEnd=KE,d.trimStart=ZE,d.truncate=eg,d.unescape=ng,d.uniqueId=Og,d.upperCase=tg,d.upperFirst=Xs,d.each=Su,d.eachRight=wu,d.first=Nu,eo(d,function(){var e={};return Un(d,function(n,i){le.call(d.prototype,i)||(e[i]=n)}),e}(),{chain:!1}),d.VERSION=a,cn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){d[e].placeholder=d}),cn(["drop","take"],function(e,n){te.prototype[e]=function(i){i=i===r?1:Se(J(i),0);var o=this.__filtered__&&!n?new te(this):this.clone();return o.__filtered__?o.__takeCount__=We(i,o.__takeCount__):o.__views__.push({size:We(i,on),type:e+(o.__dir__<0?"Right":"")}),o},te.prototype[e+"Right"]=function(i){return this.reverse()[e](i).reverse()}}),cn(["filter","map","takeWhile"],function(e,n){var i=n+1,o=i==Si||i==wi;te.prototype[e]=function(c){var l=this.clone();return l.__iteratees__.push({iteratee:z(c,3),type:i}),l.__filtered__=l.__filtered__||o,l}}),cn(["head","last"],function(e,n){var i="take"+(n?"Right":"");te.prototype[e]=function(){return this[i](1).value()[0]}}),cn(["initial","tail"],function(e,n){var i="drop"+(n?"":"Right");te.prototype[e]=function(){return this.__filtered__?new te(this):this[i](1)}}),te.prototype.compact=function(){return this.filter(Je)},te.prototype.find=function(e){return this.filter(e).head()},te.prototype.findLast=function(e){return this.reverse().find(e)},te.prototype.invokeMap=Z(function(e,n){return typeof e=="function"?new te(this):this.map(function(i){return fi(i,e,n)})}),te.prototype.reject=function(e){return this.filter(Er(z(e)))},te.prototype.slice=function(e,n){e=J(e);var i=this;return i.__filtered__&&(e>0||n<0)?new te(i):(e<0?i=i.takeRight(-e):e&&(i=i.drop(e)),n!==r&&(n=J(n),i=n<0?i.dropRight(-n):i.take(n-e)),i)},te.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},te.prototype.toArray=function(){return this.take(on)},Un(te.prototype,function(e,n){var i=/^(?:filter|find|map|reject)|While$/.test(n),o=/^(?:head|last)$/.test(n),c=d[o?"take"+(n=="last"?"Right":""):n],l=o||/^find/.test(n);c&&(d.prototype[n]=function(){var h=this.__wrapped__,f=o?[1]:arguments,g=h instanceof te,N=f[0],O=g||q(h),w=function(ee){var re=c.apply(d,at([ee],f));return o&&R?re[0]:re};O&&i&&typeof N=="function"&&N.length!=1&&(g=O=!1);var R=this.__chain__,P=!!this.__actions__.length,V=l&&!R,X=g&&!P;if(!l&&O){h=X?h:new te(this);var $=e.apply(h,f);return $.__actions__.push({func:pr,args:[w],thisArg:r}),new ln($,R)}return V&&X?e.apply(this,f):($=this.thru(w),V?o?$.value()[0]:$.value():$)})}),cn(["pop","push","shift","sort","splice","unshift"],function(e){var n=Fi[e],i=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",o=/^(?:pop|shift)$/.test(e);d.prototype[e]=function(){var c=arguments;if(o&&!this.__chain__){var l=this.value();return n.apply(q(l)?l:[],c)}return this[i](function(h){return n.apply(q(h)?h:[],c)})}}),Un(te.prototype,function(e,n){var i=d[n];if(i){var o=i.name+"";le.call(Mt,o)||(Mt[o]=[]),Mt[o].push({name:n,func:i})}}),Mt[sr(r,me).name]=[{name:"wrapper",func:r}],te.prototype.clone=ep,te.prototype.reverse=np,te.prototype.value=tp,d.prototype.at=Rf,d.prototype.chain=Bf,d.prototype.commit=Gf,d.prototype.next=Lf,d.prototype.plant=Wf,d.prototype.reverse=Ff,d.prototype.toJSON=d.prototype.valueOf=d.prototype.value=Pf,d.prototype.first=d.prototype.head,ai&&(d.prototype[ai]=Uf),d},Pt=Bl();It?((It.exports=Pt)._=Pt,Zr._=Pt):Be._=Pt}).call(Di)})(Yg,mn);const Qg="Medium Article",qg='{"DeserializableBoolean":"true","DeserializableInt":"0","DateOnly":"2000-01-31","DeserializableFloat":"0.0","DeserializableDateTime":"2023-01-01T00:00:00+00:00"}',Jg="https://seeklogo.com/images/P/Pokemon-logo-497D61B223-seeklogo.com.png",Xg=`[{"title":"Medium Article","content":"\\n# Medium Article\\nCongratulations! You've successfully completed the Magidoc tutorial.\\n## Where to go next?\\n- Star the project on [GitHub](https://github.com/magidoc-org/magidoc) \\n- Read the [documentation](https://magidoc.js.org/introduction/welcome)\\n"}]`,Kg="true",Ic={APP_TITLE:Qg,QUERY_GENERATION_FACTORIES:qg,APP_LOGO:Jg,PAGES:Xg,MAGIDOC_GENERATE:Kg};function aI(t){return t.get(Ic)}function Zg(t,s){return t.getOrDefault(Ic,s)}function oe(t,s){if(!Boolean(t))throw new Error(s)}function tt(t){return typeof t=="object"&&t!==null}function wn(t,s){if(!Boolean(t))throw new Error(s??"Unexpected invariant triggered.")}const em=/\r\n|[\n\r]/g;function lo(t,s){let r=0,a=1;for(const u of t.body.matchAll(em)){if(typeof u.index=="number"||wn(!1),u.index>=s)break;r=u.index+u[0].length,a+=1}return{line:a,column:s+1-r}}function nm(t){return Dc(t.source,lo(t.source,t.start))}function Dc(t,s){const r=t.locationOffset.column-1,a="".padStart(r)+t.body,u=s.line-1,p=t.locationOffset.line-1,y=s.line+p,T=s.line===1?r:0,I=s.column+T,x=`${t.name}:${y}:${I}
`,A=a.split(/\r\n|[\n\r]/g),C=A[u];if(C.length>120){const F=Math.floor(I/80),K=I%80,j=[];for(let pe=0;pe<C.length;pe+=80)j.push(C.slice(pe,pe+80));return x+rc([[`${y} |`,j[0]],...j.slice(1,F+1).map(pe=>["|",pe]),["|","^".padStart(K)],["|",j[F+1]]])}return x+rc([[`${y-1} |`,A[u-1]],[`${y} |`,C],["|","^".padStart(I)],[`${y+1} |`,A[u+1]]])}function rc(t){const s=t.filter(([a,u])=>u!==void 0),r=Math.max(...s.map(([a])=>a.length));return s.map(([a,u])=>a.padStart(r)+(u?" "+u:"")).join(`
`)}function tm(t){const s=t[0];return s==null||"kind"in s||"length"in s?{nodes:s,source:t[1],positions:t[2],path:t[3],originalError:t[4],extensions:t[5]}:s}class k extends Error{constructor(s,...r){var a,u,p;const{nodes:y,source:T,positions:I,path:x,originalError:A,extensions:C}=tm(r);super(s),this.name="GraphQLError",this.path=x??void 0,this.originalError=A??void 0,this.nodes=sc(Array.isArray(y)?y:y?[y]:void 0);const F=sc((a=this.nodes)===null||a===void 0?void 0:a.map(j=>j.loc).filter(j=>j!=null));this.source=T??(F==null||(u=F[0])===null||u===void 0?void 0:u.source),this.positions=I??(F==null?void 0:F.map(j=>j.start)),this.locations=I&&T?I.map(j=>lo(T,j)):F==null?void 0:F.map(j=>lo(j.source,j.start));const K=tt(A==null?void 0:A.extensions)?A==null?void 0:A.extensions:void 0;this.extensions=(p=C??K)!==null&&p!==void 0?p:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),A!=null&&A.stack?Object.defineProperty(this,"stack",{value:A.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,k):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let s=this.message;if(this.nodes)for(const r of this.nodes)r.loc&&(s+=`

`+nm(r.loc));else if(this.source&&this.locations)for(const r of this.locations)s+=`

`+Dc(this.source,r);return s}toJSON(){const s={message:this.message};return this.locations!=null&&(s.locations=this.locations),this.path!=null&&(s.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(s.extensions=this.extensions),s}}function sc(t){return t===void 0||t.length===0?void 0:t}function Re(t,s,r){return new k(`Syntax Error: ${r}`,{source:t,positions:[s]})}class im{constructor(s,r,a){this.start=s.start,this.end=r.end,this.startToken=s,this.endToken=r,this.source=a}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class vc{constructor(s,r,a,u,p,y){this.kind=s,this.start=r,this.end=a,this.line=u,this.column=p,this.value=y,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const bc={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},rm=new Set(Object.keys(bc));function oc(t){const s=t==null?void 0:t.kind;return typeof s=="string"&&rm.has(s)}var En;(function(t){t.QUERY="query",t.MUTATION="mutation",t.SUBSCRIPTION="subscription"})(En||(En={}));var H;(function(t){t.QUERY="QUERY",t.MUTATION="MUTATION",t.SUBSCRIPTION="SUBSCRIPTION",t.FIELD="FIELD",t.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",t.FRAGMENT_SPREAD="FRAGMENT_SPREAD",t.INLINE_FRAGMENT="INLINE_FRAGMENT",t.VARIABLE_DEFINITION="VARIABLE_DEFINITION",t.SCHEMA="SCHEMA",t.SCALAR="SCALAR",t.OBJECT="OBJECT",t.FIELD_DEFINITION="FIELD_DEFINITION",t.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",t.INTERFACE="INTERFACE",t.UNION="UNION",t.ENUM="ENUM",t.ENUM_VALUE="ENUM_VALUE",t.INPUT_OBJECT="INPUT_OBJECT",t.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(H||(H={}));var m;(function(t){t.NAME="Name",t.DOCUMENT="Document",t.OPERATION_DEFINITION="OperationDefinition",t.VARIABLE_DEFINITION="VariableDefinition",t.SELECTION_SET="SelectionSet",t.FIELD="Field",t.ARGUMENT="Argument",t.FRAGMENT_SPREAD="FragmentSpread",t.INLINE_FRAGMENT="InlineFragment",t.FRAGMENT_DEFINITION="FragmentDefinition",t.VARIABLE="Variable",t.INT="IntValue",t.FLOAT="FloatValue",t.STRING="StringValue",t.BOOLEAN="BooleanValue",t.NULL="NullValue",t.ENUM="EnumValue",t.LIST="ListValue",t.OBJECT="ObjectValue",t.OBJECT_FIELD="ObjectField",t.DIRECTIVE="Directive",t.NAMED_TYPE="NamedType",t.LIST_TYPE="ListType",t.NON_NULL_TYPE="NonNullType",t.SCHEMA_DEFINITION="SchemaDefinition",t.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",t.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",t.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",t.FIELD_DEFINITION="FieldDefinition",t.INPUT_VALUE_DEFINITION="InputValueDefinition",t.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",t.UNION_TYPE_DEFINITION="UnionTypeDefinition",t.ENUM_TYPE_DEFINITION="EnumTypeDefinition",t.ENUM_VALUE_DEFINITION="EnumValueDefinition",t.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",t.DIRECTIVE_DEFINITION="DirectiveDefinition",t.SCHEMA_EXTENSION="SchemaExtension",t.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",t.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",t.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",t.UNION_TYPE_EXTENSION="UnionTypeExtension",t.ENUM_TYPE_EXTENSION="EnumTypeExtension",t.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(m||(m={}));function po(t){return t===9||t===32}function Oi(t){return t>=48&&t<=57}function Ac(t){return t>=97&&t<=122||t>=65&&t<=90}function To(t){return Ac(t)||t===95}function Nc(t){return Ac(t)||Oi(t)||t===95}function sm(t){var s;let r=Number.MAX_SAFE_INTEGER,a=null,u=-1;for(let y=0;y<t.length;++y){var p;const T=t[y],I=om(T);I!==T.length&&(a=(p=a)!==null&&p!==void 0?p:y,u=y,y!==0&&I<r&&(r=I))}return t.map((y,T)=>T===0?y:y.slice(r)).slice((s=a)!==null&&s!==void 0?s:0,u+1)}function om(t){let s=0;for(;s<t.length&&po(t.charCodeAt(s));)++s;return s}function am(t,s){const r=t.replace(/"""/g,'\\"""'),a=r.split(/\r\n|[\n\r]/g),u=a.length===1,p=a.length>1&&a.slice(1).every(K=>K.length===0||po(K.charCodeAt(0))),y=r.endsWith('\\"""'),T=t.endsWith('"')&&!y,I=t.endsWith("\\"),x=T||I,A=!(s!=null&&s.minimize)&&(!u||t.length>70||x||p||y);let C="";const F=u&&po(t.charCodeAt(0));return(A&&!F||p)&&(C+=`
`),C+=r,(A||x)&&(C+=`
`),'"""'+C+'"""'}var _;(function(t){t.SOF="<SOF>",t.EOF="<EOF>",t.BANG="!",t.DOLLAR="$",t.AMP="&",t.PAREN_L="(",t.PAREN_R=")",t.SPREAD="...",t.COLON=":",t.EQUALS="=",t.AT="@",t.BRACKET_L="[",t.BRACKET_R="]",t.BRACE_L="{",t.PIPE="|",t.BRACE_R="}",t.NAME="Name",t.INT="Int",t.FLOAT="Float",t.STRING="String",t.BLOCK_STRING="BlockString",t.COMMENT="Comment"})(_||(_={}));class um{constructor(s){const r=new vc(_.SOF,0,0,0,0);this.source=s,this.lastToken=r,this.token=r,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let s=this.token;if(s.kind!==_.EOF)do if(s.next)s=s.next;else{const r=dm(this,s.end);s.next=r,r.prev=s,s=r}while(s.kind===_.COMMENT);return s}}function cm(t){return t===_.BANG||t===_.DOLLAR||t===_.AMP||t===_.PAREN_L||t===_.PAREN_R||t===_.SPREAD||t===_.COLON||t===_.EQUALS||t===_.AT||t===_.BRACKET_L||t===_.BRACKET_R||t===_.BRACE_L||t===_.PIPE||t===_.BRACE_R}function Kt(t){return t>=0&&t<=55295||t>=57344&&t<=1114111}function Sr(t,s){return Oc(t.charCodeAt(s))&&_c(t.charCodeAt(s+1))}function Oc(t){return t>=55296&&t<=56319}function _c(t){return t>=56320&&t<=57343}function wt(t,s){const r=t.source.body.codePointAt(s);if(r===void 0)return _.EOF;if(r>=32&&r<=126){const a=String.fromCodePoint(r);return a==='"'?`'"'`:`"${a}"`}return"U+"+r.toString(16).toUpperCase().padStart(4,"0")}function _e(t,s,r,a,u){const p=t.line,y=1+r-t.lineStart;return new vc(s,r,a,p,y,u)}function dm(t,s){const r=t.source.body,a=r.length;let u=s;for(;u<a;){const p=r.charCodeAt(u);switch(p){case 65279:case 9:case 32:case 44:++u;continue;case 10:++u,++t.line,t.lineStart=u;continue;case 13:r.charCodeAt(u+1)===10?u+=2:++u,++t.line,t.lineStart=u;continue;case 35:return lm(t,u);case 33:return _e(t,_.BANG,u,u+1);case 36:return _e(t,_.DOLLAR,u,u+1);case 38:return _e(t,_.AMP,u,u+1);case 40:return _e(t,_.PAREN_L,u,u+1);case 41:return _e(t,_.PAREN_R,u,u+1);case 46:if(r.charCodeAt(u+1)===46&&r.charCodeAt(u+2)===46)return _e(t,_.SPREAD,u,u+3);break;case 58:return _e(t,_.COLON,u,u+1);case 61:return _e(t,_.EQUALS,u,u+1);case 64:return _e(t,_.AT,u,u+1);case 91:return _e(t,_.BRACKET_L,u,u+1);case 93:return _e(t,_.BRACKET_R,u,u+1);case 123:return _e(t,_.BRACE_L,u,u+1);case 124:return _e(t,_.PIPE,u,u+1);case 125:return _e(t,_.BRACE_R,u,u+1);case 34:return r.charCodeAt(u+1)===34&&r.charCodeAt(u+2)===34?gm(t,u):hm(t,u)}if(Oi(p)||p===45)return pm(t,u,p);if(To(p))return mm(t,u);throw Re(t.source,u,p===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:Kt(p)||Sr(r,u)?`Unexpected character: ${wt(t,u)}.`:`Invalid character: ${wt(t,u)}.`)}return _e(t,_.EOF,a,a)}function lm(t,s){const r=t.source.body,a=r.length;let u=s+1;for(;u<a;){const p=r.charCodeAt(u);if(p===10||p===13)break;if(Kt(p))++u;else if(Sr(r,u))u+=2;else break}return _e(t,_.COMMENT,s,u,r.slice(s+1,u))}function pm(t,s,r){const a=t.source.body;let u=s,p=r,y=!1;if(p===45&&(p=a.charCodeAt(++u)),p===48){if(p=a.charCodeAt(++u),Oi(p))throw Re(t.source,u,`Invalid number, unexpected digit after 0: ${wt(t,u)}.`)}else u=so(t,u,p),p=a.charCodeAt(u);if(p===46&&(y=!0,p=a.charCodeAt(++u),u=so(t,u,p),p=a.charCodeAt(u)),(p===69||p===101)&&(y=!0,p=a.charCodeAt(++u),(p===43||p===45)&&(p=a.charCodeAt(++u)),u=so(t,u,p),p=a.charCodeAt(u)),p===46||To(p))throw Re(t.source,u,`Invalid number, expected digit but got: ${wt(t,u)}.`);return _e(t,y?_.FLOAT:_.INT,s,u,a.slice(s,u))}function so(t,s,r){if(!Oi(r))throw Re(t.source,s,`Invalid number, expected digit but got: ${wt(t,s)}.`);const a=t.source.body;let u=s+1;for(;Oi(a.charCodeAt(u));)++u;return u}function hm(t,s){const r=t.source.body,a=r.length;let u=s+1,p=u,y="";for(;u<a;){const T=r.charCodeAt(u);if(T===34)return y+=r.slice(p,u),_e(t,_.STRING,s,u+1,y);if(T===92){y+=r.slice(p,u);const I=r.charCodeAt(u+1)===117?r.charCodeAt(u+2)===123?fm(t,u):ym(t,u):Em(t,u);y+=I.value,u+=I.size,p=u;continue}if(T===10||T===13)break;if(Kt(T))++u;else if(Sr(r,u))u+=2;else throw Re(t.source,u,`Invalid character within String: ${wt(t,u)}.`)}throw Re(t.source,u,"Unterminated string.")}function fm(t,s){const r=t.source.body;let a=0,u=3;for(;u<12;){const p=r.charCodeAt(s+u++);if(p===125){if(u<5||!Kt(a))break;return{value:String.fromCodePoint(a),size:u}}if(a=a<<4|vi(p),a<0)break}throw Re(t.source,s,`Invalid Unicode escape sequence: "${r.slice(s,s+u)}".`)}function ym(t,s){const r=t.source.body,a=ac(r,s+2);if(Kt(a))return{value:String.fromCodePoint(a),size:6};if(Oc(a)&&r.charCodeAt(s+6)===92&&r.charCodeAt(s+7)===117){const u=ac(r,s+8);if(_c(u))return{value:String.fromCodePoint(a,u),size:12}}throw Re(t.source,s,`Invalid Unicode escape sequence: "${r.slice(s,s+6)}".`)}function ac(t,s){return vi(t.charCodeAt(s))<<12|vi(t.charCodeAt(s+1))<<8|vi(t.charCodeAt(s+2))<<4|vi(t.charCodeAt(s+3))}function vi(t){return t>=48&&t<=57?t-48:t>=65&&t<=70?t-55:t>=97&&t<=102?t-87:-1}function Em(t,s){const r=t.source.body;switch(r.charCodeAt(s+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw Re(t.source,s,`Invalid character escape sequence: "${r.slice(s,s+2)}".`)}function gm(t,s){const r=t.source.body,a=r.length;let u=t.lineStart,p=s+3,y=p,T="";const I=[];for(;p<a;){const x=r.charCodeAt(p);if(x===34&&r.charCodeAt(p+1)===34&&r.charCodeAt(p+2)===34){T+=r.slice(y,p),I.push(T);const A=_e(t,_.BLOCK_STRING,s,p+3,sm(I).join(`
`));return t.line+=I.length-1,t.lineStart=u,A}if(x===92&&r.charCodeAt(p+1)===34&&r.charCodeAt(p+2)===34&&r.charCodeAt(p+3)===34){T+=r.slice(y,p),y=p+1,p+=4;continue}if(x===10||x===13){T+=r.slice(y,p),I.push(T),x===13&&r.charCodeAt(p+1)===10?p+=2:++p,T="",y=p,u=p;continue}if(Kt(x))++p;else if(Sr(r,p))p+=2;else throw Re(t.source,p,`Invalid character within String: ${wt(t,p)}.`)}throw Re(t.source,p,"Unterminated string.")}function mm(t,s){const r=t.source.body,a=r.length;let u=s+1;for(;u<a;){const p=r.charCodeAt(u);if(Nc(p))++u;else break}return _e(t,_.NAME,s,u,r.slice(s,u))}const Tm=10,xc=2;function M(t){return wr(t,[])}function wr(t,s){switch(typeof t){case"string":return JSON.stringify(t);case"function":return t.name?`[function ${t.name}]`:"[function]";case"object":return Im(t,s);default:return String(t)}}function Im(t,s){if(t===null)return"null";if(s.includes(t))return"[Circular]";const r=[...s,t];if(Dm(t)){const a=t.toJSON();if(a!==t)return typeof a=="string"?a:wr(a,r)}else if(Array.isArray(t))return bm(t,r);return vm(t,r)}function Dm(t){return typeof t.toJSON=="function"}function vm(t,s){const r=Object.entries(t);return r.length===0?"{}":s.length>xc?"["+Am(t)+"]":"{ "+r.map(([u,p])=>u+": "+wr(p,s)).join(", ")+" }"}function bm(t,s){if(t.length===0)return"[]";if(s.length>xc)return"[Array]";const r=Math.min(Tm,t.length),a=t.length-r,u=[];for(let p=0;p<r;++p)u.push(wr(t[p],s));return a===1?u.push("... 1 more item"):a>1&&u.push(`... ${a} more items`),"["+u.join(", ")+"]"}function Am(t){const s=Object.prototype.toString.call(t).replace(/^\[object /,"").replace(/]$/,"");if(s==="Object"&&typeof t.constructor=="function"){const r=t.constructor.name;if(typeof r=="string"&&r!=="")return r}return s}const Mn=function(s,r){return s instanceof r};class Sc{constructor(s,r="GraphQL request",a={line:1,column:1}){typeof s=="string"||oe(!1,`Body must be a string. Received: ${M(s)}.`),this.body=s,this.name=r,this.locationOffset=a,this.locationOffset.line>0||oe(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||oe(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function Nm(t){return Mn(t,Sc)}function Om(t,s){return new wc(t,s).parseDocument()}function _m(t,s){const r=new wc(t,s);r.expectToken(_.SOF);const a=r.parseValueLiteral(!1);return r.expectToken(_.EOF),a}class wc{constructor(s,r={}){const a=Nm(s)?s:new Sc(s);this._lexer=new um(a),this._options=r,this._tokenCounter=0}parseName(){const s=this.expectToken(_.NAME);return this.node(s,{kind:m.NAME,value:s.value})}parseDocument(){return this.node(this._lexer.token,{kind:m.DOCUMENT,definitions:this.many(_.SOF,this.parseDefinition,_.EOF)})}parseDefinition(){if(this.peek(_.BRACE_L))return this.parseOperationDefinition();const s=this.peekDescription(),r=s?this._lexer.lookahead():this._lexer.token;if(r.kind===_.NAME){switch(r.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(s)throw Re(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(r.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(r)}parseOperationDefinition(){const s=this._lexer.token;if(this.peek(_.BRACE_L))return this.node(s,{kind:m.OPERATION_DEFINITION,operation:En.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const r=this.parseOperationType();let a;return this.peek(_.NAME)&&(a=this.parseName()),this.node(s,{kind:m.OPERATION_DEFINITION,operation:r,name:a,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const s=this.expectToken(_.NAME);switch(s.value){case"query":return En.QUERY;case"mutation":return En.MUTATION;case"subscription":return En.SUBSCRIPTION}throw this.unexpected(s)}parseVariableDefinitions(){return this.optionalMany(_.PAREN_L,this.parseVariableDefinition,_.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:m.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(_.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(_.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const s=this._lexer.token;return this.expectToken(_.DOLLAR),this.node(s,{kind:m.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:m.SELECTION_SET,selections:this.many(_.BRACE_L,this.parseSelection,_.BRACE_R)})}parseSelection(){return this.peek(_.SPREAD)?this.parseFragment():this.parseField()}parseField(){const s=this._lexer.token,r=this.parseName();let a,u;return this.expectOptionalToken(_.COLON)?(a=r,u=this.parseName()):u=r,this.node(s,{kind:m.FIELD,alias:a,name:u,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(_.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(s){const r=s?this.parseConstArgument:this.parseArgument;return this.optionalMany(_.PAREN_L,r,_.PAREN_R)}parseArgument(s=!1){const r=this._lexer.token,a=this.parseName();return this.expectToken(_.COLON),this.node(r,{kind:m.ARGUMENT,name:a,value:this.parseValueLiteral(s)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const s=this._lexer.token;this.expectToken(_.SPREAD);const r=this.expectOptionalKeyword("on");return!r&&this.peek(_.NAME)?this.node(s,{kind:m.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(s,{kind:m.INLINE_FRAGMENT,typeCondition:r?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const s=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(s,{kind:m.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(s,{kind:m.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(s){const r=this._lexer.token;switch(r.kind){case _.BRACKET_L:return this.parseList(s);case _.BRACE_L:return this.parseObject(s);case _.INT:return this.advanceLexer(),this.node(r,{kind:m.INT,value:r.value});case _.FLOAT:return this.advanceLexer(),this.node(r,{kind:m.FLOAT,value:r.value});case _.STRING:case _.BLOCK_STRING:return this.parseStringLiteral();case _.NAME:switch(this.advanceLexer(),r.value){case"true":return this.node(r,{kind:m.BOOLEAN,value:!0});case"false":return this.node(r,{kind:m.BOOLEAN,value:!1});case"null":return this.node(r,{kind:m.NULL});default:return this.node(r,{kind:m.ENUM,value:r.value})}case _.DOLLAR:if(s)if(this.expectToken(_.DOLLAR),this._lexer.token.kind===_.NAME){const a=this._lexer.token.value;throw Re(this._lexer.source,r.start,`Unexpected variable "$${a}" in constant value.`)}else throw this.unexpected(r);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const s=this._lexer.token;return this.advanceLexer(),this.node(s,{kind:m.STRING,value:s.value,block:s.kind===_.BLOCK_STRING})}parseList(s){const r=()=>this.parseValueLiteral(s);return this.node(this._lexer.token,{kind:m.LIST,values:this.any(_.BRACKET_L,r,_.BRACKET_R)})}parseObject(s){const r=()=>this.parseObjectField(s);return this.node(this._lexer.token,{kind:m.OBJECT,fields:this.any(_.BRACE_L,r,_.BRACE_R)})}parseObjectField(s){const r=this._lexer.token,a=this.parseName();return this.expectToken(_.COLON),this.node(r,{kind:m.OBJECT_FIELD,name:a,value:this.parseValueLiteral(s)})}parseDirectives(s){const r=[];for(;this.peek(_.AT);)r.push(this.parseDirective(s));return r}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(s){const r=this._lexer.token;return this.expectToken(_.AT),this.node(r,{kind:m.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(s)})}parseTypeReference(){const s=this._lexer.token;let r;if(this.expectOptionalToken(_.BRACKET_L)){const a=this.parseTypeReference();this.expectToken(_.BRACKET_R),r=this.node(s,{kind:m.LIST_TYPE,type:a})}else r=this.parseNamedType();return this.expectOptionalToken(_.BANG)?this.node(s,{kind:m.NON_NULL_TYPE,type:r}):r}parseNamedType(){return this.node(this._lexer.token,{kind:m.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(_.STRING)||this.peek(_.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const s=this._lexer.token,r=this.parseDescription();this.expectKeyword("schema");const a=this.parseConstDirectives(),u=this.many(_.BRACE_L,this.parseOperationTypeDefinition,_.BRACE_R);return this.node(s,{kind:m.SCHEMA_DEFINITION,description:r,directives:a,operationTypes:u})}parseOperationTypeDefinition(){const s=this._lexer.token,r=this.parseOperationType();this.expectToken(_.COLON);const a=this.parseNamedType();return this.node(s,{kind:m.OPERATION_TYPE_DEFINITION,operation:r,type:a})}parseScalarTypeDefinition(){const s=this._lexer.token,r=this.parseDescription();this.expectKeyword("scalar");const a=this.parseName(),u=this.parseConstDirectives();return this.node(s,{kind:m.SCALAR_TYPE_DEFINITION,description:r,name:a,directives:u})}parseObjectTypeDefinition(){const s=this._lexer.token,r=this.parseDescription();this.expectKeyword("type");const a=this.parseName(),u=this.parseImplementsInterfaces(),p=this.parseConstDirectives(),y=this.parseFieldsDefinition();return this.node(s,{kind:m.OBJECT_TYPE_DEFINITION,description:r,name:a,interfaces:u,directives:p,fields:y})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(_.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(_.BRACE_L,this.parseFieldDefinition,_.BRACE_R)}parseFieldDefinition(){const s=this._lexer.token,r=this.parseDescription(),a=this.parseName(),u=this.parseArgumentDefs();this.expectToken(_.COLON);const p=this.parseTypeReference(),y=this.parseConstDirectives();return this.node(s,{kind:m.FIELD_DEFINITION,description:r,name:a,arguments:u,type:p,directives:y})}parseArgumentDefs(){return this.optionalMany(_.PAREN_L,this.parseInputValueDef,_.PAREN_R)}parseInputValueDef(){const s=this._lexer.token,r=this.parseDescription(),a=this.parseName();this.expectToken(_.COLON);const u=this.parseTypeReference();let p;this.expectOptionalToken(_.EQUALS)&&(p=this.parseConstValueLiteral());const y=this.parseConstDirectives();return this.node(s,{kind:m.INPUT_VALUE_DEFINITION,description:r,name:a,type:u,defaultValue:p,directives:y})}parseInterfaceTypeDefinition(){const s=this._lexer.token,r=this.parseDescription();this.expectKeyword("interface");const a=this.parseName(),u=this.parseImplementsInterfaces(),p=this.parseConstDirectives(),y=this.parseFieldsDefinition();return this.node(s,{kind:m.INTERFACE_TYPE_DEFINITION,description:r,name:a,interfaces:u,directives:p,fields:y})}parseUnionTypeDefinition(){const s=this._lexer.token,r=this.parseDescription();this.expectKeyword("union");const a=this.parseName(),u=this.parseConstDirectives(),p=this.parseUnionMemberTypes();return this.node(s,{kind:m.UNION_TYPE_DEFINITION,description:r,name:a,directives:u,types:p})}parseUnionMemberTypes(){return this.expectOptionalToken(_.EQUALS)?this.delimitedMany(_.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const s=this._lexer.token,r=this.parseDescription();this.expectKeyword("enum");const a=this.parseName(),u=this.parseConstDirectives(),p=this.parseEnumValuesDefinition();return this.node(s,{kind:m.ENUM_TYPE_DEFINITION,description:r,name:a,directives:u,values:p})}parseEnumValuesDefinition(){return this.optionalMany(_.BRACE_L,this.parseEnumValueDefinition,_.BRACE_R)}parseEnumValueDefinition(){const s=this._lexer.token,r=this.parseDescription(),a=this.parseEnumValueName(),u=this.parseConstDirectives();return this.node(s,{kind:m.ENUM_VALUE_DEFINITION,description:r,name:a,directives:u})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw Re(this._lexer.source,this._lexer.token.start,`${Dr(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const s=this._lexer.token,r=this.parseDescription();this.expectKeyword("input");const a=this.parseName(),u=this.parseConstDirectives(),p=this.parseInputFieldsDefinition();return this.node(s,{kind:m.INPUT_OBJECT_TYPE_DEFINITION,description:r,name:a,directives:u,fields:p})}parseInputFieldsDefinition(){return this.optionalMany(_.BRACE_L,this.parseInputValueDef,_.BRACE_R)}parseTypeSystemExtension(){const s=this._lexer.lookahead();if(s.kind===_.NAME)switch(s.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(s)}parseSchemaExtension(){const s=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const r=this.parseConstDirectives(),a=this.optionalMany(_.BRACE_L,this.parseOperationTypeDefinition,_.BRACE_R);if(r.length===0&&a.length===0)throw this.unexpected();return this.node(s,{kind:m.SCHEMA_EXTENSION,directives:r,operationTypes:a})}parseScalarTypeExtension(){const s=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const r=this.parseName(),a=this.parseConstDirectives();if(a.length===0)throw this.unexpected();return this.node(s,{kind:m.SCALAR_TYPE_EXTENSION,name:r,directives:a})}parseObjectTypeExtension(){const s=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const r=this.parseName(),a=this.parseImplementsInterfaces(),u=this.parseConstDirectives(),p=this.parseFieldsDefinition();if(a.length===0&&u.length===0&&p.length===0)throw this.unexpected();return this.node(s,{kind:m.OBJECT_TYPE_EXTENSION,name:r,interfaces:a,directives:u,fields:p})}parseInterfaceTypeExtension(){const s=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const r=this.parseName(),a=this.parseImplementsInterfaces(),u=this.parseConstDirectives(),p=this.parseFieldsDefinition();if(a.length===0&&u.length===0&&p.length===0)throw this.unexpected();return this.node(s,{kind:m.INTERFACE_TYPE_EXTENSION,name:r,interfaces:a,directives:u,fields:p})}parseUnionTypeExtension(){const s=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const r=this.parseName(),a=this.parseConstDirectives(),u=this.parseUnionMemberTypes();if(a.length===0&&u.length===0)throw this.unexpected();return this.node(s,{kind:m.UNION_TYPE_EXTENSION,name:r,directives:a,types:u})}parseEnumTypeExtension(){const s=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const r=this.parseName(),a=this.parseConstDirectives(),u=this.parseEnumValuesDefinition();if(a.length===0&&u.length===0)throw this.unexpected();return this.node(s,{kind:m.ENUM_TYPE_EXTENSION,name:r,directives:a,values:u})}parseInputObjectTypeExtension(){const s=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const r=this.parseName(),a=this.parseConstDirectives(),u=this.parseInputFieldsDefinition();if(a.length===0&&u.length===0)throw this.unexpected();return this.node(s,{kind:m.INPUT_OBJECT_TYPE_EXTENSION,name:r,directives:a,fields:u})}parseDirectiveDefinition(){const s=this._lexer.token,r=this.parseDescription();this.expectKeyword("directive"),this.expectToken(_.AT);const a=this.parseName(),u=this.parseArgumentDefs(),p=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const y=this.parseDirectiveLocations();return this.node(s,{kind:m.DIRECTIVE_DEFINITION,description:r,name:a,arguments:u,repeatable:p,locations:y})}parseDirectiveLocations(){return this.delimitedMany(_.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const s=this._lexer.token,r=this.parseName();if(Object.prototype.hasOwnProperty.call(H,r.value))return r;throw this.unexpected(s)}node(s,r){return this._options.noLocation!==!0&&(r.loc=new im(s,this._lexer.lastToken,this._lexer.source)),r}peek(s){return this._lexer.token.kind===s}expectToken(s){const r=this._lexer.token;if(r.kind===s)return this.advanceLexer(),r;throw Re(this._lexer.source,r.start,`Expected ${Cc(s)}, found ${Dr(r)}.`)}expectOptionalToken(s){return this._lexer.token.kind===s?(this.advanceLexer(),!0):!1}expectKeyword(s){const r=this._lexer.token;if(r.kind===_.NAME&&r.value===s)this.advanceLexer();else throw Re(this._lexer.source,r.start,`Expected "${s}", found ${Dr(r)}.`)}expectOptionalKeyword(s){const r=this._lexer.token;return r.kind===_.NAME&&r.value===s?(this.advanceLexer(),!0):!1}unexpected(s){const r=s??this._lexer.token;return Re(this._lexer.source,r.start,`Unexpected ${Dr(r)}.`)}any(s,r,a){this.expectToken(s);const u=[];for(;!this.expectOptionalToken(a);)u.push(r.call(this));return u}optionalMany(s,r,a){if(this.expectOptionalToken(s)){const u=[];do u.push(r.call(this));while(!this.expectOptionalToken(a));return u}return[]}many(s,r,a){this.expectToken(s);const u=[];do u.push(r.call(this));while(!this.expectOptionalToken(a));return u}delimitedMany(s,r){this.expectOptionalToken(s);const a=[];do a.push(r.call(this));while(this.expectOptionalToken(s));return a}advanceLexer(){const{maxTokens:s}=this._options,r=this._lexer.advance();if(s!==void 0&&r.kind!==_.EOF&&(++this._tokenCounter,this._tokenCounter>s))throw Re(this._lexer.source,r.start,`Document contains more that ${s} tokens. Parsing aborted.`)}}function Dr(t){const s=t.value;return Cc(t.kind)+(s!=null?` "${s}"`:"")}function Cc(t){return cm(t)?`"${t}"`:t}const xm=5;function Cr(t,s){const[r,a]=s?[t,s]:[void 0,t];let u=" Did you mean ";r&&(u+=r+" ");const p=a.map(I=>`"${I}"`);switch(p.length){case 0:return"";case 1:return u+p[0]+"?";case 2:return u+p[0]+" or "+p[1]+"?"}const y=p.slice(0,xm),T=y.pop();return u+y.join(", ")+", or "+T+"?"}function uc(t){return t}function Jt(t,s){const r=Object.create(null);for(const a of t)r[s(a)]=a;return r}function St(t,s,r){const a=Object.create(null);for(const u of t)a[s(u)]=r(u);return a}function nt(t,s){const r=Object.create(null);for(const a of Object.keys(t))r[a]=s(t[a],a);return r}function Sm(t,s){let r=0,a=0;for(;r<t.length&&a<s.length;){let u=t.charCodeAt(r),p=s.charCodeAt(a);if(vr(u)&&vr(p)){let y=0;do++r,y=y*10+u-ho,u=t.charCodeAt(r);while(vr(u)&&y>0);let T=0;do++a,T=T*10+p-ho,p=s.charCodeAt(a);while(vr(p)&&T>0);if(y<T)return-1;if(y>T)return 1}else{if(u<p)return-1;if(u>p)return 1;++r,++a}}return t.length-s.length}const ho=48,wm=57;function vr(t){return!isNaN(t)&&ho<=t&&t<=wm}function Rr(t,s){const r=Object.create(null),a=new Cm(t),u=Math.floor(t.length*.4)+1;for(const p of s){const y=a.measure(p,u);y!==void 0&&(r[p]=y)}return Object.keys(r).sort((p,y)=>{const T=r[p]-r[y];return T!==0?T:Sm(p,y)})}class Cm{constructor(s){this._input=s,this._inputLowerCase=s.toLowerCase(),this._inputArray=cc(this._inputLowerCase),this._rows=[new Array(s.length+1).fill(0),new Array(s.length+1).fill(0),new Array(s.length+1).fill(0)]}measure(s,r){if(this._input===s)return 0;const a=s.toLowerCase();if(this._inputLowerCase===a)return 1;let u=cc(a),p=this._inputArray;if(u.length<p.length){const A=u;u=p,p=A}const y=u.length,T=p.length;if(y-T>r)return;const I=this._rows;for(let A=0;A<=T;A++)I[0][A]=A;for(let A=1;A<=y;A++){const C=I[(A-1)%3],F=I[A%3];let K=F[0]=A;for(let j=1;j<=T;j++){const pe=u[A-1]===p[j-1]?0:1;let se=Math.min(C[j]+1,F[j-1]+1,C[j-1]+pe);if(A>1&&j>1&&u[A-1]===p[j-2]&&u[A-2]===p[j-1]){const me=I[(A-2)%3][j-2];se=Math.min(se,me+1)}se<K&&(K=se),F[j]=se}if(K>r)return}const x=I[y%3][T];return x<=r?x:void 0}}function cc(t){const s=t.length,r=new Array(s);for(let a=0;a<s;++a)r[a]=t.charCodeAt(a);return r}function Tn(t){if(t==null)return Object.create(null);if(Object.getPrototypeOf(t)===null)return t;const s=Object.create(null);for(const[r,a]of Object.entries(t))s[r]=a;return s}function Rm(t){return`"${t.replace(Bm,Gm)}"`}const Bm=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function Gm(t){return Lm[t.charCodeAt(0)]}const Lm=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],bi=Object.freeze({});function Rc(t,s,r=bc){const a=new Map;for(const me of Object.values(m))a.set(me,Bc(s,me));let u,p=Array.isArray(t),y=[t],T=-1,I=[],x=t,A,C;const F=[],K=[];do{T++;const me=T===y.length,Hn=me&&I.length!==0;if(me){if(A=K.length===0?void 0:F[F.length-1],x=C,C=K.pop(),Hn)if(p){x=x.slice();let Oe=0;for(const[we,Pe]of I){const Le=we-Oe;Pe===null?(x.splice(Le,1),Oe++):x[Le]=Pe}}else{x=Object.defineProperties({},Object.getOwnPropertyDescriptors(x));for(const[Oe,we]of I)x[Oe]=we}T=u.index,y=u.keys,I=u.edits,p=u.inArray,u=u.prev}else if(C){if(A=p?T:y[T],x=C[A],x==null)continue;F.push(A)}let Te;if(!Array.isArray(x)){var j,pe;oc(x)||oe(!1,`Invalid AST Node: ${M(x)}.`);const Oe=me?(j=a.get(x.kind))===null||j===void 0?void 0:j.leave:(pe=a.get(x.kind))===null||pe===void 0?void 0:pe.enter;if(Te=Oe==null?void 0:Oe.call(s,x,A,C,F,K),Te===bi)break;if(Te===!1){if(!me){F.pop();continue}}else if(Te!==void 0&&(I.push([A,Te]),!me))if(oc(Te))x=Te;else{F.pop();continue}}if(Te===void 0&&Hn&&I.push([A,x]),me)F.pop();else{var se;u={inArray:p,index:T,keys:y,edits:I,prev:u},p=Array.isArray(x),y=p?x:(se=r[x.kind])!==null&&se!==void 0?se:[],T=-1,I=[],C&&K.push(C),C=x}}while(u!==void 0);return I.length!==0?I[I.length-1][1]:t}function Um(t){const s=new Array(t.length).fill(null),r=Object.create(null);for(const a of Object.values(m)){let u=!1;const p=new Array(t.length).fill(void 0),y=new Array(t.length).fill(void 0);for(let I=0;I<t.length;++I){const{enter:x,leave:A}=Bc(t[I],a);u||(u=x!=null||A!=null),p[I]=x,y[I]=A}if(!u)continue;const T={enter(...I){const x=I[0];for(let C=0;C<t.length;C++)if(s[C]===null){var A;const F=(A=p[C])===null||A===void 0?void 0:A.apply(t[C],I);if(F===!1)s[C]=x;else if(F===bi)s[C]=bi;else if(F!==void 0)return F}},leave(...I){const x=I[0];for(let C=0;C<t.length;C++)if(s[C]===null){var A;const F=(A=y[C])===null||A===void 0?void 0:A.apply(t[C],I);if(F===bi)s[C]=bi;else if(F!==void 0&&F!==!1)return F}else s[C]===x&&(s[C]=null)}};r[a]=T}return r}function Bc(t,s){const r=t[s];return typeof r=="object"?r:typeof r=="function"?{enter:r,leave:void 0}:{enter:t.enter,leave:t.leave}}function kn(t){return Rc(t,Fm)}const Wm=80,Fm={Name:{leave:t=>t.value},Variable:{leave:t=>"$"+t.name},Document:{leave:t=>W(t.definitions,`

`)},OperationDefinition:{leave(t){const s=ie("(",W(t.variableDefinitions,", "),")"),r=W([t.operation,W([t.name,s]),W(t.directives," ")]," ");return(r==="query"?"":r+" ")+t.selectionSet}},VariableDefinition:{leave:({variable:t,type:s,defaultValue:r,directives:a})=>t+": "+s+ie(" = ",r)+ie(" ",W(a," "))},SelectionSet:{leave:({selections:t})=>_n(t)},Field:{leave({alias:t,name:s,arguments:r,directives:a,selectionSet:u}){const p=ie("",t,": ")+s;let y=p+ie("(",W(r,", "),")");return y.length>Wm&&(y=p+ie(`(
`,Nr(W(r,`
`)),`
)`)),W([y,W(a," "),u]," ")}},Argument:{leave:({name:t,value:s})=>t+": "+s},FragmentSpread:{leave:({name:t,directives:s})=>"..."+t+ie(" ",W(s," "))},InlineFragment:{leave:({typeCondition:t,directives:s,selectionSet:r})=>W(["...",ie("on ",t),W(s," "),r]," ")},FragmentDefinition:{leave:({name:t,typeCondition:s,variableDefinitions:r,directives:a,selectionSet:u})=>`fragment ${t}${ie("(",W(r,", "),")")} on ${s} ${ie("",W(a," ")," ")}`+u},IntValue:{leave:({value:t})=>t},FloatValue:{leave:({value:t})=>t},StringValue:{leave:({value:t,block:s})=>s?am(t):Rm(t)},BooleanValue:{leave:({value:t})=>t?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:t})=>t},ListValue:{leave:({values:t})=>"["+W(t,", ")+"]"},ObjectValue:{leave:({fields:t})=>"{"+W(t,", ")+"}"},ObjectField:{leave:({name:t,value:s})=>t+": "+s},Directive:{leave:({name:t,arguments:s})=>"@"+t+ie("(",W(s,", "),")")},NamedType:{leave:({name:t})=>t},ListType:{leave:({type:t})=>"["+t+"]"},NonNullType:{leave:({type:t})=>t+"!"},SchemaDefinition:{leave:({description:t,directives:s,operationTypes:r})=>ie("",t,`
`)+W(["schema",W(s," "),_n(r)]," ")},OperationTypeDefinition:{leave:({operation:t,type:s})=>t+": "+s},ScalarTypeDefinition:{leave:({description:t,name:s,directives:r})=>ie("",t,`
`)+W(["scalar",s,W(r," ")]," ")},ObjectTypeDefinition:{leave:({description:t,name:s,interfaces:r,directives:a,fields:u})=>ie("",t,`
`)+W(["type",s,ie("implements ",W(r," & ")),W(a," "),_n(u)]," ")},FieldDefinition:{leave:({description:t,name:s,arguments:r,type:a,directives:u})=>ie("",t,`
`)+s+(dc(r)?ie(`(
`,Nr(W(r,`
`)),`
)`):ie("(",W(r,", "),")"))+": "+a+ie(" ",W(u," "))},InputValueDefinition:{leave:({description:t,name:s,type:r,defaultValue:a,directives:u})=>ie("",t,`
`)+W([s+": "+r,ie("= ",a),W(u," ")]," ")},InterfaceTypeDefinition:{leave:({description:t,name:s,interfaces:r,directives:a,fields:u})=>ie("",t,`
`)+W(["interface",s,ie("implements ",W(r," & ")),W(a," "),_n(u)]," ")},UnionTypeDefinition:{leave:({description:t,name:s,directives:r,types:a})=>ie("",t,`
`)+W(["union",s,W(r," "),ie("= ",W(a," | "))]," ")},EnumTypeDefinition:{leave:({description:t,name:s,directives:r,values:a})=>ie("",t,`
`)+W(["enum",s,W(r," "),_n(a)]," ")},EnumValueDefinition:{leave:({description:t,name:s,directives:r})=>ie("",t,`
`)+W([s,W(r," ")]," ")},InputObjectTypeDefinition:{leave:({description:t,name:s,directives:r,fields:a})=>ie("",t,`
`)+W(["input",s,W(r," "),_n(a)]," ")},DirectiveDefinition:{leave:({description:t,name:s,arguments:r,repeatable:a,locations:u})=>ie("",t,`
`)+"directive @"+s+(dc(r)?ie(`(
`,Nr(W(r,`
`)),`
)`):ie("(",W(r,", "),")"))+(a?" repeatable":"")+" on "+W(u," | ")},SchemaExtension:{leave:({directives:t,operationTypes:s})=>W(["extend schema",W(t," "),_n(s)]," ")},ScalarTypeExtension:{leave:({name:t,directives:s})=>W(["extend scalar",t,W(s," ")]," ")},ObjectTypeExtension:{leave:({name:t,interfaces:s,directives:r,fields:a})=>W(["extend type",t,ie("implements ",W(s," & ")),W(r," "),_n(a)]," ")},InterfaceTypeExtension:{leave:({name:t,interfaces:s,directives:r,fields:a})=>W(["extend interface",t,ie("implements ",W(s," & ")),W(r," "),_n(a)]," ")},UnionTypeExtension:{leave:({name:t,directives:s,types:r})=>W(["extend union",t,W(s," "),ie("= ",W(r," | "))]," ")},EnumTypeExtension:{leave:({name:t,directives:s,values:r})=>W(["extend enum",t,W(s," "),_n(r)]," ")},InputObjectTypeExtension:{leave:({name:t,directives:s,fields:r})=>W(["extend input",t,W(s," "),_n(r)]," ")}};function W(t,s=""){var r;return(r=t==null?void 0:t.filter(a=>a).join(s))!==null&&r!==void 0?r:""}function _n(t){return ie(`{
`,Nr(W(t,`
`)),`
}`)}function ie(t,s,r=""){return s!=null&&s!==""?t+s+r:""}function Nr(t){return ie("  ",t.replace(/\n/g,`
  `))}function dc(t){var s;return(s=t==null?void 0:t.some(r=>r.includes(`
`)))!==null&&s!==void 0?s:!1}function fo(t,s){switch(t.kind){case m.NULL:return null;case m.INT:return parseInt(t.value,10);case m.FLOAT:return parseFloat(t.value);case m.STRING:case m.ENUM:case m.BOOLEAN:return t.value;case m.LIST:return t.values.map(r=>fo(r,s));case m.OBJECT:return St(t.fields,r=>r.name.value,r=>fo(r.value,s));case m.VARIABLE:return s==null?void 0:s[t.name.value]}}function Gn(t){if(t!=null||oe(!1,"Must provide name."),typeof t=="string"||oe(!1,"Expected name to be a string."),t.length===0)throw new k("Expected name to be a non-empty string.");for(let s=1;s<t.length;++s)if(!Nc(t.charCodeAt(s)))throw new k(`Names must only contain [_a-zA-Z0-9] but "${t}" does not.`);if(!To(t.charCodeAt(0)))throw new k(`Names must start with [_a-zA-Z] but "${t}" does not.`);return t}function Pm(t){if(t==="true"||t==="false"||t==="null")throw new k(`Enum values cannot be named: ${t}`);return Gn(t)}function Io(t){return gt(t)||Ke(t)||Ve(t)||Cn(t)||Rn(t)||Bn(t)||Ct(t)||ze(t)}function gt(t){return Mn(t,it)}function Ke(t){return Mn(t,jn)}function km(t){if(!Ke(t))throw new Error(`Expected ${M(t)} to be a GraphQL Object type.`);return t}function Ve(t){return Mn(t,Or)}function jm(t){if(!Ve(t))throw new Error(`Expected ${M(t)} to be a GraphQL Interface type.`);return t}function Cn(t){return Mn(t,_r)}function Rn(t){return Mn(t,Xt)}function Bn(t){return Mn(t,xr)}function Ct(t){return Mn(t,Xe)}function ze(t){return Mn(t,ne)}function Gc(t){return gt(t)||Rn(t)||Bn(t)||Do(t)&&Gc(t.ofType)}function Lc(t){return gt(t)||Ke(t)||Ve(t)||Cn(t)||Rn(t)||Do(t)&&Lc(t.ofType)}function Uc(t){return gt(t)||Rn(t)}function Mm(t){return Ve(t)||Cn(t)}class Xe{constructor(s){Io(s)||oe(!1,`Expected ${M(s)} to be a GraphQL type.`),this.ofType=s}get[Symbol.toStringTag](){return"GraphQLList"}toString(){return"["+String(this.ofType)+"]"}toJSON(){return this.toString()}}class ne{constructor(s){Wc(s)||oe(!1,`Expected ${M(s)} to be a GraphQL nullable type.`),this.ofType=s}get[Symbol.toStringTag](){return"GraphQLNonNull"}toString(){return String(this.ofType)+"!"}toJSON(){return this.toString()}}function Do(t){return Ct(t)||ze(t)}function Wc(t){return Io(t)&&!ze(t)}function Hm(t){if(!Wc(t))throw new Error(`Expected ${M(t)} to be a GraphQL nullable type.`);return t}function uI(t){return gt(t)||Ke(t)||Ve(t)||Cn(t)||Rn(t)||Bn(t)}function zm(t){if(t){let s=t;for(;Do(s);)s=s.ofType;return s}}function Fc(t){return typeof t=="function"?t():t}function Pc(t){return typeof t=="function"?t():t}class it{constructor(s){var r,a,u,p;const y=(r=s.parseValue)!==null&&r!==void 0?r:uc;this.name=Gn(s.name),this.description=s.description,this.specifiedByURL=s.specifiedByURL,this.serialize=(a=s.serialize)!==null&&a!==void 0?a:uc,this.parseValue=y,this.parseLiteral=(u=s.parseLiteral)!==null&&u!==void 0?u:(T,I)=>y(fo(T,I)),this.extensions=Tn(s.extensions),this.astNode=s.astNode,this.extensionASTNodes=(p=s.extensionASTNodes)!==null&&p!==void 0?p:[],s.specifiedByURL==null||typeof s.specifiedByURL=="string"||oe(!1,`${this.name} must provide "specifiedByURL" as a string, but got: ${M(s.specifiedByURL)}.`),s.serialize==null||typeof s.serialize=="function"||oe(!1,`${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`),s.parseLiteral&&(typeof s.parseValue=="function"&&typeof s.parseLiteral=="function"||oe(!1,`${this.name} must provide both "parseValue" and "parseLiteral" functions.`))}get[Symbol.toStringTag](){return"GraphQLScalarType"}toConfig(){return{name:this.name,description:this.description,specifiedByURL:this.specifiedByURL,serialize:this.serialize,parseValue:this.parseValue,parseLiteral:this.parseLiteral,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class jn{constructor(s){var r;this.name=Gn(s.name),this.description=s.description,this.isTypeOf=s.isTypeOf,this.extensions=Tn(s.extensions),this.astNode=s.astNode,this.extensionASTNodes=(r=s.extensionASTNodes)!==null&&r!==void 0?r:[],this._fields=()=>jc(s),this._interfaces=()=>kc(s),s.isTypeOf==null||typeof s.isTypeOf=="function"||oe(!1,`${this.name} must provide "isTypeOf" as a function, but got: ${M(s.isTypeOf)}.`)}get[Symbol.toStringTag](){return"GraphQLObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:Hc(this.getFields()),isTypeOf:this.isTypeOf,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function kc(t){var s;const r=Fc((s=t.interfaces)!==null&&s!==void 0?s:[]);return Array.isArray(r)||oe(!1,`${t.name} interfaces must be an Array or a function which returns an Array.`),r}function jc(t){const s=Pc(t.fields);return qt(s)||oe(!1,`${t.name} fields must be an object with field names as keys or a function which returns such an object.`),nt(s,(r,a)=>{var u;qt(r)||oe(!1,`${t.name}.${a} field config must be an object.`),r.resolve==null||typeof r.resolve=="function"||oe(!1,`${t.name}.${a} field resolver must be a function if provided, but got: ${M(r.resolve)}.`);const p=(u=r.args)!==null&&u!==void 0?u:{};return qt(p)||oe(!1,`${t.name}.${a} args must be an object with argument names as keys.`),{name:Gn(a),description:r.description,type:r.type,args:Mc(p),resolve:r.resolve,subscribe:r.subscribe,deprecationReason:r.deprecationReason,extensions:Tn(r.extensions),astNode:r.astNode}})}function Mc(t){return Object.entries(t).map(([s,r])=>({name:Gn(s),description:r.description,type:r.type,defaultValue:r.defaultValue,deprecationReason:r.deprecationReason,extensions:Tn(r.extensions),astNode:r.astNode}))}function qt(t){return tt(t)&&!Array.isArray(t)}function Hc(t){return nt(t,s=>({description:s.description,type:s.type,args:zc(s.args),resolve:s.resolve,subscribe:s.subscribe,deprecationReason:s.deprecationReason,extensions:s.extensions,astNode:s.astNode}))}function zc(t){return St(t,s=>s.name,s=>({description:s.description,type:s.type,defaultValue:s.defaultValue,deprecationReason:s.deprecationReason,extensions:s.extensions,astNode:s.astNode}))}function Vm(t){return ze(t.type)&&t.defaultValue===void 0}class Or{constructor(s){var r;this.name=Gn(s.name),this.description=s.description,this.resolveType=s.resolveType,this.extensions=Tn(s.extensions),this.astNode=s.astNode,this.extensionASTNodes=(r=s.extensionASTNodes)!==null&&r!==void 0?r:[],this._fields=jc.bind(void 0,s),this._interfaces=kc.bind(void 0,s),s.resolveType==null||typeof s.resolveType=="function"||oe(!1,`${this.name} must provide "resolveType" as a function, but got: ${M(s.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLInterfaceType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:Hc(this.getFields()),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class _r{constructor(s){var r;this.name=Gn(s.name),this.description=s.description,this.resolveType=s.resolveType,this.extensions=Tn(s.extensions),this.astNode=s.astNode,this.extensionASTNodes=(r=s.extensionASTNodes)!==null&&r!==void 0?r:[],this._types=$m.bind(void 0,s),s.resolveType==null||typeof s.resolveType=="function"||oe(!1,`${this.name} must provide "resolveType" as a function, but got: ${M(s.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLUnionType"}getTypes(){return typeof this._types=="function"&&(this._types=this._types()),this._types}toConfig(){return{name:this.name,description:this.description,types:this.getTypes(),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function $m(t){const s=Fc(t.types);return Array.isArray(s)||oe(!1,`Must provide Array of types or a function which returns such an array for Union ${t.name}.`),s}class Xt{constructor(s){var r;this.name=Gn(s.name),this.description=s.description,this.extensions=Tn(s.extensions),this.astNode=s.astNode,this.extensionASTNodes=(r=s.extensionASTNodes)!==null&&r!==void 0?r:[],this._values=Ym(this.name,s.values),this._valueLookup=new Map(this._values.map(a=>[a.value,a])),this._nameLookup=Jt(this._values,a=>a.name)}get[Symbol.toStringTag](){return"GraphQLEnumType"}getValues(){return this._values}getValue(s){return this._nameLookup[s]}serialize(s){const r=this._valueLookup.get(s);if(r===void 0)throw new k(`Enum "${this.name}" cannot represent value: ${M(s)}`);return r.name}parseValue(s){if(typeof s!="string"){const a=M(s);throw new k(`Enum "${this.name}" cannot represent non-string value: ${a}.`+br(this,a))}const r=this.getValue(s);if(r==null)throw new k(`Value "${s}" does not exist in "${this.name}" enum.`+br(this,s));return r.value}parseLiteral(s,r){if(s.kind!==m.ENUM){const u=kn(s);throw new k(`Enum "${this.name}" cannot represent non-enum value: ${u}.`+br(this,u),{nodes:s})}const a=this.getValue(s.value);if(a==null){const u=kn(s);throw new k(`Value "${u}" does not exist in "${this.name}" enum.`+br(this,u),{nodes:s})}return a.value}toConfig(){const s=St(this.getValues(),r=>r.name,r=>({description:r.description,value:r.value,deprecationReason:r.deprecationReason,extensions:r.extensions,astNode:r.astNode}));return{name:this.name,description:this.description,values:s,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function br(t,s){const r=t.getValues().map(u=>u.name),a=Rr(s,r);return Cr("the enum value",a)}function Ym(t,s){return qt(s)||oe(!1,`${t} values must be an object with value names as keys.`),Object.entries(s).map(([r,a])=>(qt(a)||oe(!1,`${t}.${r} must refer to an object with a "value" key representing an internal value but got: ${M(a)}.`),{name:Pm(r),description:a.description,value:a.value!==void 0?a.value:r,deprecationReason:a.deprecationReason,extensions:Tn(a.extensions),astNode:a.astNode}))}class xr{constructor(s){var r;this.name=Gn(s.name),this.description=s.description,this.extensions=Tn(s.extensions),this.astNode=s.astNode,this.extensionASTNodes=(r=s.extensionASTNodes)!==null&&r!==void 0?r:[],this._fields=Qm.bind(void 0,s)}get[Symbol.toStringTag](){return"GraphQLInputObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}toConfig(){const s=nt(this.getFields(),r=>({description:r.description,type:r.type,defaultValue:r.defaultValue,deprecationReason:r.deprecationReason,extensions:r.extensions,astNode:r.astNode}));return{name:this.name,description:this.description,fields:s,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function Qm(t){const s=Pc(t.fields);return qt(s)||oe(!1,`${t.name} fields must be an object with field names as keys or a function which returns such an object.`),nt(s,(r,a)=>(!("resolve"in r)||oe(!1,`${t.name}.${a} field has a resolve property, but Input Types cannot define resolvers.`),{name:Gn(a),description:r.description,type:r.type,defaultValue:r.defaultValue,deprecationReason:r.deprecationReason,extensions:Tn(r.extensions),astNode:r.astNode}))}const oo=2147483647,ao=-2147483648,qm=new it({name:"Int",description:"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",serialize(t){const s=_i(t);if(typeof s=="boolean")return s?1:0;let r=s;if(typeof s=="string"&&s!==""&&(r=Number(s)),typeof r!="number"||!Number.isInteger(r))throw new k(`Int cannot represent non-integer value: ${M(s)}`);if(r>oo||r<ao)throw new k("Int cannot represent non 32-bit signed integer value: "+M(s));return r},parseValue(t){if(typeof t!="number"||!Number.isInteger(t))throw new k(`Int cannot represent non-integer value: ${M(t)}`);if(t>oo||t<ao)throw new k(`Int cannot represent non 32-bit signed integer value: ${t}`);return t},parseLiteral(t){if(t.kind!==m.INT)throw new k(`Int cannot represent non-integer value: ${kn(t)}`,{nodes:t});const s=parseInt(t.value,10);if(s>oo||s<ao)throw new k(`Int cannot represent non 32-bit signed integer value: ${t.value}`,{nodes:t});return s}}),Jm=new it({name:"Float",description:"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",serialize(t){const s=_i(t);if(typeof s=="boolean")return s?1:0;let r=s;if(typeof s=="string"&&s!==""&&(r=Number(s)),typeof r!="number"||!Number.isFinite(r))throw new k(`Float cannot represent non numeric value: ${M(s)}`);return r},parseValue(t){if(typeof t!="number"||!Number.isFinite(t))throw new k(`Float cannot represent non numeric value: ${M(t)}`);return t},parseLiteral(t){if(t.kind!==m.FLOAT&&t.kind!==m.INT)throw new k(`Float cannot represent non numeric value: ${kn(t)}`,t);return parseFloat(t.value)}}),Ne=new it({name:"String",description:"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",serialize(t){const s=_i(t);if(typeof s=="string")return s;if(typeof s=="boolean")return s?"true":"false";if(typeof s=="number"&&Number.isFinite(s))return s.toString();throw new k(`String cannot represent value: ${M(t)}`)},parseValue(t){if(typeof t!="string")throw new k(`String cannot represent a non string value: ${M(t)}`);return t},parseLiteral(t){if(t.kind!==m.STRING)throw new k(`String cannot represent a non string value: ${kn(t)}`,{nodes:t});return t.value}}),gn=new it({name:"Boolean",description:"The `Boolean` scalar type represents `true` or `false`.",serialize(t){const s=_i(t);if(typeof s=="boolean")return s;if(Number.isFinite(s))return s!==0;throw new k(`Boolean cannot represent a non boolean value: ${M(s)}`)},parseValue(t){if(typeof t!="boolean")throw new k(`Boolean cannot represent a non boolean value: ${M(t)}`);return t},parseLiteral(t){if(t.kind!==m.BOOLEAN)throw new k(`Boolean cannot represent a non boolean value: ${kn(t)}`,{nodes:t});return t.value}}),Vc=new it({name:"ID",description:'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',serialize(t){const s=_i(t);if(typeof s=="string")return s;if(Number.isInteger(s))return String(s);throw new k(`ID cannot represent value: ${M(t)}`)},parseValue(t){if(typeof t=="string")return t;if(typeof t=="number"&&Number.isInteger(t))return t.toString();throw new k(`ID cannot represent value: ${M(t)}`)},parseLiteral(t){if(t.kind!==m.STRING&&t.kind!==m.INT)throw new k("ID cannot represent a non-string and non-integer value: "+kn(t),{nodes:t});return t.value}}),Br=Object.freeze([Ne,qm,Jm,gn,Vc]);function Xm(t){return Br.some(({name:s})=>t.name===s)}function _i(t){if(tt(t)){if(typeof t.valueOf=="function"){const s=t.valueOf();if(!tt(s))return s}if(typeof t.toJSON=="function")return t.toJSON()}return t}function Km(t){return Mn(t,Et)}class Et{constructor(s){var r,a;this.name=Gn(s.name),this.description=s.description,this.locations=s.locations,this.isRepeatable=(r=s.isRepeatable)!==null&&r!==void 0?r:!1,this.extensions=Tn(s.extensions),this.astNode=s.astNode,Array.isArray(s.locations)||oe(!1,`@${s.name} locations must be an Array.`);const u=(a=s.args)!==null&&a!==void 0?a:{};tt(u)&&!Array.isArray(u)||oe(!1,`@${s.name} args must be an object with argument names as keys.`),this.args=Mc(u)}get[Symbol.toStringTag](){return"GraphQLDirective"}toConfig(){return{name:this.name,description:this.description,locations:this.locations,args:zc(this.args),isRepeatable:this.isRepeatable,extensions:this.extensions,astNode:this.astNode}}toString(){return"@"+this.name}toJSON(){return this.toString()}}const Zm=new Et({name:"include",description:"Directs the executor to include this field or fragment only when the `if` argument is true.",locations:[H.FIELD,H.FRAGMENT_SPREAD,H.INLINE_FRAGMENT],args:{if:{type:new ne(gn),description:"Included when true."}}}),eT=new Et({name:"skip",description:"Directs the executor to skip this field or fragment when the `if` argument is true.",locations:[H.FIELD,H.FRAGMENT_SPREAD,H.INLINE_FRAGMENT],args:{if:{type:new ne(gn),description:"Skipped when true."}}}),nT="No longer supported",$c=new Et({name:"deprecated",description:"Marks an element of a GraphQL schema as no longer supported.",locations:[H.FIELD_DEFINITION,H.ARGUMENT_DEFINITION,H.INPUT_FIELD_DEFINITION,H.ENUM_VALUE],args:{reason:{type:Ne,description:"Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",defaultValue:nT}}}),Yc=new Et({name:"specifiedBy",description:"Exposes a URL that specifies the behavior of this scalar.",locations:[H.SCALAR],args:{url:{type:new ne(Ne),description:"The URL that specifies the behavior of this scalar."}}}),Zt=Object.freeze([Zm,eT,$c,Yc]);function tT(t){return typeof t=="object"&&typeof(t==null?void 0:t[Symbol.iterator])=="function"}function Ai(t,s){if(ze(s)){const r=Ai(t,s.ofType);return(r==null?void 0:r.kind)===m.NULL?null:r}if(t===null)return{kind:m.NULL};if(t===void 0)return null;if(Ct(s)){const r=s.ofType;if(tT(t)){const a=[];for(const u of t){const p=Ai(u,r);p!=null&&a.push(p)}return{kind:m.LIST,values:a}}return Ai(t,r)}if(Bn(s)){if(!tt(t))return null;const r=[];for(const a of Object.values(s.getFields())){const u=Ai(t[a.name],a.type);u&&r.push({kind:m.OBJECT_FIELD,name:{kind:m.NAME,value:a.name},value:u})}return{kind:m.OBJECT,fields:r}}if(Uc(s)){const r=s.serialize(t);if(r==null)return null;if(typeof r=="boolean")return{kind:m.BOOLEAN,value:r};if(typeof r=="number"&&Number.isFinite(r)){const a=String(r);return lc.test(a)?{kind:m.INT,value:a}:{kind:m.FLOAT,value:a}}if(typeof r=="string")return Rn(s)?{kind:m.ENUM,value:r}:s===Vc&&lc.test(r)?{kind:m.INT,value:r}:{kind:m.STRING,value:r};throw new TypeError(`Cannot convert value to AST: ${M(r)}.`)}wn(!1,"Unexpected input type: "+M(s))}const lc=/^-?(?:0|[1-9][0-9]*)$/,vo=new jn({name:"__Schema",description:"A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",fields:()=>({description:{type:Ne,resolve:t=>t.description},types:{description:"A list of all types supported by this server.",type:new ne(new Xe(new ne(Sn))),resolve(t){return Object.values(t.getTypeMap())}},queryType:{description:"The type that query operations will be rooted at.",type:new ne(Sn),resolve:t=>t.getQueryType()},mutationType:{description:"If this server supports mutation, the type that mutation operations will be rooted at.",type:Sn,resolve:t=>t.getMutationType()},subscriptionType:{description:"If this server support subscription, the type that subscription operations will be rooted at.",type:Sn,resolve:t=>t.getSubscriptionType()},directives:{description:"A list of all directives supported by this server.",type:new ne(new Xe(new ne(Qc))),resolve:t=>t.getDirectives()}})}),Qc=new jn({name:"__Directive",description:`A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.`,fields:()=>({name:{type:new ne(Ne),resolve:t=>t.name},description:{type:Ne,resolve:t=>t.description},isRepeatable:{type:new ne(gn),resolve:t=>t.isRepeatable},locations:{type:new ne(new Xe(new ne(qc))),resolve:t=>t.locations},args:{type:new ne(new Xe(new ne(Gr))),args:{includeDeprecated:{type:gn,defaultValue:!1}},resolve(t,{includeDeprecated:s}){return s?t.args:t.args.filter(r=>r.deprecationReason==null)}}})}),qc=new Xt({name:"__DirectiveLocation",description:"A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",values:{QUERY:{value:H.QUERY,description:"Location adjacent to a query operation."},MUTATION:{value:H.MUTATION,description:"Location adjacent to a mutation operation."},SUBSCRIPTION:{value:H.SUBSCRIPTION,description:"Location adjacent to a subscription operation."},FIELD:{value:H.FIELD,description:"Location adjacent to a field."},FRAGMENT_DEFINITION:{value:H.FRAGMENT_DEFINITION,description:"Location adjacent to a fragment definition."},FRAGMENT_SPREAD:{value:H.FRAGMENT_SPREAD,description:"Location adjacent to a fragment spread."},INLINE_FRAGMENT:{value:H.INLINE_FRAGMENT,description:"Location adjacent to an inline fragment."},VARIABLE_DEFINITION:{value:H.VARIABLE_DEFINITION,description:"Location adjacent to a variable definition."},SCHEMA:{value:H.SCHEMA,description:"Location adjacent to a schema definition."},SCALAR:{value:H.SCALAR,description:"Location adjacent to a scalar definition."},OBJECT:{value:H.OBJECT,description:"Location adjacent to an object type definition."},FIELD_DEFINITION:{value:H.FIELD_DEFINITION,description:"Location adjacent to a field definition."},ARGUMENT_DEFINITION:{value:H.ARGUMENT_DEFINITION,description:"Location adjacent to an argument definition."},INTERFACE:{value:H.INTERFACE,description:"Location adjacent to an interface definition."},UNION:{value:H.UNION,description:"Location adjacent to a union definition."},ENUM:{value:H.ENUM,description:"Location adjacent to an enum definition."},ENUM_VALUE:{value:H.ENUM_VALUE,description:"Location adjacent to an enum value definition."},INPUT_OBJECT:{value:H.INPUT_OBJECT,description:"Location adjacent to an input object type definition."},INPUT_FIELD_DEFINITION:{value:H.INPUT_FIELD_DEFINITION,description:"Location adjacent to an input object field definition."}}}),Sn=new jn({name:"__Type",description:"The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",fields:()=>({kind:{type:new ne(Kc),resolve(t){if(gt(t))return fe.SCALAR;if(Ke(t))return fe.OBJECT;if(Ve(t))return fe.INTERFACE;if(Cn(t))return fe.UNION;if(Rn(t))return fe.ENUM;if(Bn(t))return fe.INPUT_OBJECT;if(Ct(t))return fe.LIST;if(ze(t))return fe.NON_NULL;wn(!1,`Unexpected type: "${M(t)}".`)}},name:{type:Ne,resolve:t=>"name"in t?t.name:void 0},description:{type:Ne,resolve:t=>"description"in t?t.description:void 0},specifiedByURL:{type:Ne,resolve:t=>"specifiedByURL"in t?t.specifiedByURL:void 0},fields:{type:new Xe(new ne(Jc)),args:{includeDeprecated:{type:gn,defaultValue:!1}},resolve(t,{includeDeprecated:s}){if(Ke(t)||Ve(t)){const r=Object.values(t.getFields());return s?r:r.filter(a=>a.deprecationReason==null)}}},interfaces:{type:new Xe(new ne(Sn)),resolve(t){if(Ke(t)||Ve(t))return t.getInterfaces()}},possibleTypes:{type:new Xe(new ne(Sn)),resolve(t,s,r,{schema:a}){if(Mm(t))return a.getPossibleTypes(t)}},enumValues:{type:new Xe(new ne(Xc)),args:{includeDeprecated:{type:gn,defaultValue:!1}},resolve(t,{includeDeprecated:s}){if(Rn(t)){const r=t.getValues();return s?r:r.filter(a=>a.deprecationReason==null)}}},inputFields:{type:new Xe(new ne(Gr)),args:{includeDeprecated:{type:gn,defaultValue:!1}},resolve(t,{includeDeprecated:s}){if(Bn(t)){const r=Object.values(t.getFields());return s?r:r.filter(a=>a.deprecationReason==null)}}},ofType:{type:Sn,resolve:t=>"ofType"in t?t.ofType:void 0}})}),Jc=new jn({name:"__Field",description:"Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",fields:()=>({name:{type:new ne(Ne),resolve:t=>t.name},description:{type:Ne,resolve:t=>t.description},args:{type:new ne(new Xe(new ne(Gr))),args:{includeDeprecated:{type:gn,defaultValue:!1}},resolve(t,{includeDeprecated:s}){return s?t.args:t.args.filter(r=>r.deprecationReason==null)}},type:{type:new ne(Sn),resolve:t=>t.type},isDeprecated:{type:new ne(gn),resolve:t=>t.deprecationReason!=null},deprecationReason:{type:Ne,resolve:t=>t.deprecationReason}})}),Gr=new jn({name:"__InputValue",description:"Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",fields:()=>({name:{type:new ne(Ne),resolve:t=>t.name},description:{type:Ne,resolve:t=>t.description},type:{type:new ne(Sn),resolve:t=>t.type},defaultValue:{type:Ne,description:"A GraphQL-formatted string representing the default value for this input value.",resolve(t){const{type:s,defaultValue:r}=t,a=Ai(r,s);return a?kn(a):null}},isDeprecated:{type:new ne(gn),resolve:t=>t.deprecationReason!=null},deprecationReason:{type:Ne,resolve:t=>t.deprecationReason}})}),Xc=new jn({name:"__EnumValue",description:"One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",fields:()=>({name:{type:new ne(Ne),resolve:t=>t.name},description:{type:Ne,resolve:t=>t.description},isDeprecated:{type:new ne(gn),resolve:t=>t.deprecationReason!=null},deprecationReason:{type:Ne,resolve:t=>t.deprecationReason}})});var fe;(function(t){t.SCALAR="SCALAR",t.OBJECT="OBJECT",t.INTERFACE="INTERFACE",t.UNION="UNION",t.ENUM="ENUM",t.INPUT_OBJECT="INPUT_OBJECT",t.LIST="LIST",t.NON_NULL="NON_NULL"})(fe||(fe={}));const Kc=new Xt({name:"__TypeKind",description:"An enum describing what kind of type a given `__Type` is.",values:{SCALAR:{value:fe.SCALAR,description:"Indicates this type is a scalar."},OBJECT:{value:fe.OBJECT,description:"Indicates this type is an object. `fields` and `interfaces` are valid fields."},INTERFACE:{value:fe.INTERFACE,description:"Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."},UNION:{value:fe.UNION,description:"Indicates this type is a union. `possibleTypes` is a valid field."},ENUM:{value:fe.ENUM,description:"Indicates this type is an enum. `enumValues` is a valid field."},INPUT_OBJECT:{value:fe.INPUT_OBJECT,description:"Indicates this type is an input object. `inputFields` is a valid field."},LIST:{value:fe.LIST,description:"Indicates this type is a list. `ofType` is a valid field."},NON_NULL:{value:fe.NON_NULL,description:"Indicates this type is a non-null. `ofType` is a valid field."}}});new ne(vo);new ne(Ne);new ne(Ne);const Lr=Object.freeze([vo,Qc,qc,Sn,Jc,Gr,Xc,Kc]);function iT(t){return Lr.some(({name:s})=>t.name===s)}class Zc{constructor(s){var r,a;this.__validationErrors=s.assumeValid===!0?[]:void 0,tt(s)||oe(!1,"Must provide configuration object."),!s.types||Array.isArray(s.types)||oe(!1,`"types" must be Array if provided but got: ${M(s.types)}.`),!s.directives||Array.isArray(s.directives)||oe(!1,`"directives" must be Array if provided but got: ${M(s.directives)}.`),this.description=s.description,this.extensions=Tn(s.extensions),this.astNode=s.astNode,this.extensionASTNodes=(r=s.extensionASTNodes)!==null&&r!==void 0?r:[],this._queryType=s.query,this._mutationType=s.mutation,this._subscriptionType=s.subscription,this._directives=(a=s.directives)!==null&&a!==void 0?a:Zt;const u=new Set(s.types);if(s.types!=null)for(const p of s.types)u.delete(p),xn(p,u);this._queryType!=null&&xn(this._queryType,u),this._mutationType!=null&&xn(this._mutationType,u),this._subscriptionType!=null&&xn(this._subscriptionType,u);for(const p of this._directives)if(Km(p))for(const y of p.args)xn(y.type,u);xn(vo,u),this._typeMap=Object.create(null),this._subTypeMap=Object.create(null),this._implementationsMap=Object.create(null);for(const p of u){if(p==null)continue;const y=p.name;if(y||oe(!1,"One of the provided types for building the Schema is missing a name."),this._typeMap[y]!==void 0)throw new Error(`Schema must contain uniquely named types but contains multiple types named "${y}".`);if(this._typeMap[y]=p,Ve(p)){for(const T of p.getInterfaces())if(Ve(T)){let I=this._implementationsMap[T.name];I===void 0&&(I=this._implementationsMap[T.name]={objects:[],interfaces:[]}),I.interfaces.push(p)}}else if(Ke(p)){for(const T of p.getInterfaces())if(Ve(T)){let I=this._implementationsMap[T.name];I===void 0&&(I=this._implementationsMap[T.name]={objects:[],interfaces:[]}),I.objects.push(p)}}}}get[Symbol.toStringTag](){return"GraphQLSchema"}getQueryType(){return this._queryType}getMutationType(){return this._mutationType}getSubscriptionType(){return this._subscriptionType}getRootType(s){switch(s){case En.QUERY:return this.getQueryType();case En.MUTATION:return this.getMutationType();case En.SUBSCRIPTION:return this.getSubscriptionType()}}getTypeMap(){return this._typeMap}getType(s){return this.getTypeMap()[s]}getPossibleTypes(s){return Cn(s)?s.getTypes():this.getImplementations(s).objects}getImplementations(s){const r=this._implementationsMap[s.name];return r??{objects:[],interfaces:[]}}isSubType(s,r){let a=this._subTypeMap[s.name];if(a===void 0){if(a=Object.create(null),Cn(s))for(const u of s.getTypes())a[u.name]=!0;else{const u=this.getImplementations(s);for(const p of u.objects)a[p.name]=!0;for(const p of u.interfaces)a[p.name]=!0}this._subTypeMap[s.name]=a}return a[r.name]!==void 0}getDirectives(){return this._directives}getDirective(s){return this.getDirectives().find(r=>r.name===s)}toConfig(){return{description:this.description,query:this.getQueryType(),mutation:this.getMutationType(),subscription:this.getSubscriptionType(),types:Object.values(this.getTypeMap()),directives:this.getDirectives(),extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,assumeValid:this.__validationErrors!==void 0}}}function xn(t,s){const r=zm(t);if(!s.has(r)){if(s.add(r),Cn(r))for(const a of r.getTypes())xn(a,s);else if(Ke(r)||Ve(r)){for(const a of r.getInterfaces())xn(a,s);for(const a of Object.values(r.getFields())){xn(a.type,s);for(const u of a.args)xn(u.type,s)}}else if(Bn(r))for(const a of Object.values(r.getFields()))xn(a.type,s)}return s}function rT(t){return t.kind===m.SCHEMA_DEFINITION||xi(t)||t.kind===m.DIRECTIVE_DEFINITION}function xi(t){return t.kind===m.SCALAR_TYPE_DEFINITION||t.kind===m.OBJECT_TYPE_DEFINITION||t.kind===m.INTERFACE_TYPE_DEFINITION||t.kind===m.UNION_TYPE_DEFINITION||t.kind===m.ENUM_TYPE_DEFINITION||t.kind===m.INPUT_OBJECT_TYPE_DEFINITION}function sT(t){return t.kind===m.SCHEMA_EXTENSION||bo(t)}function bo(t){return t.kind===m.SCALAR_TYPE_EXTENSION||t.kind===m.OBJECT_TYPE_EXTENSION||t.kind===m.INTERFACE_TYPE_EXTENSION||t.kind===m.UNION_TYPE_EXTENSION||t.kind===m.ENUM_TYPE_EXTENSION||t.kind===m.INPUT_OBJECT_TYPE_EXTENSION}function oT(t){const s=Object.create(null),r=t.getSchema(),a=r?r.getDirectives():Zt;for(const y of a)s[y.name]=y.args.map(T=>T.name);const u=t.getDocument().definitions;for(const y of u)if(y.kind===m.DIRECTIVE_DEFINITION){var p;const T=(p=y.arguments)!==null&&p!==void 0?p:[];s[y.name.value]=T.map(I=>I.name.value)}return{Directive(y){const T=y.name.value,I=s[T];if(y.arguments&&I)for(const x of y.arguments){const A=x.name.value;if(!I.includes(A)){const C=Rr(A,I);t.reportError(new k(`Unknown argument "${A}" on directive "@${T}".`+Cr(C),{nodes:x}))}}return!1}}}function aT(t){const s=Object.create(null),r=t.getSchema(),a=r?r.getDirectives():Zt;for(const p of a)s[p.name]=p.locations;const u=t.getDocument().definitions;for(const p of u)p.kind===m.DIRECTIVE_DEFINITION&&(s[p.name.value]=p.locations.map(y=>y.value));return{Directive(p,y,T,I,x){const A=p.name.value,C=s[A];if(!C){t.reportError(new k(`Unknown directive "@${A}".`,{nodes:p}));return}const F=uT(x);F&&!C.includes(F)&&t.reportError(new k(`Directive "@${A}" may not be used on ${F}.`,{nodes:p}))}}}function uT(t){const s=t[t.length-1];switch("kind"in s||wn(!1),s.kind){case m.OPERATION_DEFINITION:return cT(s.operation);case m.FIELD:return H.FIELD;case m.FRAGMENT_SPREAD:return H.FRAGMENT_SPREAD;case m.INLINE_FRAGMENT:return H.INLINE_FRAGMENT;case m.FRAGMENT_DEFINITION:return H.FRAGMENT_DEFINITION;case m.VARIABLE_DEFINITION:return H.VARIABLE_DEFINITION;case m.SCHEMA_DEFINITION:case m.SCHEMA_EXTENSION:return H.SCHEMA;case m.SCALAR_TYPE_DEFINITION:case m.SCALAR_TYPE_EXTENSION:return H.SCALAR;case m.OBJECT_TYPE_DEFINITION:case m.OBJECT_TYPE_EXTENSION:return H.OBJECT;case m.FIELD_DEFINITION:return H.FIELD_DEFINITION;case m.INTERFACE_TYPE_DEFINITION:case m.INTERFACE_TYPE_EXTENSION:return H.INTERFACE;case m.UNION_TYPE_DEFINITION:case m.UNION_TYPE_EXTENSION:return H.UNION;case m.ENUM_TYPE_DEFINITION:case m.ENUM_TYPE_EXTENSION:return H.ENUM;case m.ENUM_VALUE_DEFINITION:return H.ENUM_VALUE;case m.INPUT_OBJECT_TYPE_DEFINITION:case m.INPUT_OBJECT_TYPE_EXTENSION:return H.INPUT_OBJECT;case m.INPUT_VALUE_DEFINITION:{const r=t[t.length-3];return"kind"in r||wn(!1),r.kind===m.INPUT_OBJECT_TYPE_DEFINITION?H.INPUT_FIELD_DEFINITION:H.ARGUMENT_DEFINITION}default:wn(!1,"Unexpected kind: "+M(s.kind))}}function cT(t){switch(t){case En.QUERY:return H.QUERY;case En.MUTATION:return H.MUTATION;case En.SUBSCRIPTION:return H.SUBSCRIPTION}}function dT(t){const s=t.getSchema(),r=s?s.getTypeMap():Object.create(null),a=Object.create(null);for(const p of t.getDocument().definitions)xi(p)&&(a[p.name.value]=!0);const u=[...Object.keys(r),...Object.keys(a)];return{NamedType(p,y,T,I,x){const A=p.name.value;if(!r[A]&&!a[A]){var C;const F=(C=x[2])!==null&&C!==void 0?C:T,K=F!=null&&lT(F);if(K&&pc.includes(A))return;const j=Rr(A,K?pc.concat(u):u);t.reportError(new k(`Unknown type "${A}".`+Cr(j),{nodes:p}))}}}}const pc=[...Br,...Lr].map(t=>t.name);function lT(t){return"kind"in t&&(rT(t)||sT(t))}function pT(t){var s,r,a;const u=t.getSchema(),p=(s=(r=(a=u==null?void 0:u.astNode)!==null&&a!==void 0?a:u==null?void 0:u.getQueryType())!==null&&r!==void 0?r:u==null?void 0:u.getMutationType())!==null&&s!==void 0?s:u==null?void 0:u.getSubscriptionType();let y=0;return{SchemaDefinition(T){if(p){t.reportError(new k("Cannot define a new schema within a schema extension.",{nodes:T}));return}y>0&&t.reportError(new k("Must provide only one schema definition.",{nodes:T})),++y}}}function hT(t){const s=t.getSchema(),r=Object.create(null);for(const u of t.getDocument().definitions)xi(u)&&(r[u.name.value]=u);return{ScalarTypeExtension:a,ObjectTypeExtension:a,InterfaceTypeExtension:a,UnionTypeExtension:a,EnumTypeExtension:a,InputObjectTypeExtension:a};function a(u){const p=u.name.value,y=r[p],T=s==null?void 0:s.getType(p);let I;if(y?I=fT[y.kind]:T&&(I=yT(T)),I){if(I!==u.kind){const x=ET(u.kind);t.reportError(new k(`Cannot extend non-${x} type "${p}".`,{nodes:y?[y,u]:u}))}}else{const x=Object.keys({...r,...s==null?void 0:s.getTypeMap()}),A=Rr(p,x);t.reportError(new k(`Cannot extend type "${p}" because it is not defined.`+Cr(A),{nodes:u.name}))}}}const fT={[m.SCALAR_TYPE_DEFINITION]:m.SCALAR_TYPE_EXTENSION,[m.OBJECT_TYPE_DEFINITION]:m.OBJECT_TYPE_EXTENSION,[m.INTERFACE_TYPE_DEFINITION]:m.INTERFACE_TYPE_EXTENSION,[m.UNION_TYPE_DEFINITION]:m.UNION_TYPE_EXTENSION,[m.ENUM_TYPE_DEFINITION]:m.ENUM_TYPE_EXTENSION,[m.INPUT_OBJECT_TYPE_DEFINITION]:m.INPUT_OBJECT_TYPE_EXTENSION};function yT(t){if(gt(t))return m.SCALAR_TYPE_EXTENSION;if(Ke(t))return m.OBJECT_TYPE_EXTENSION;if(Ve(t))return m.INTERFACE_TYPE_EXTENSION;if(Cn(t))return m.UNION_TYPE_EXTENSION;if(Rn(t))return m.ENUM_TYPE_EXTENSION;if(Bn(t))return m.INPUT_OBJECT_TYPE_EXTENSION;wn(!1,"Unexpected type: "+M(t))}function ET(t){switch(t){case m.SCALAR_TYPE_EXTENSION:return"scalar";case m.OBJECT_TYPE_EXTENSION:return"object";case m.INTERFACE_TYPE_EXTENSION:return"interface";case m.UNION_TYPE_EXTENSION:return"union";case m.ENUM_TYPE_EXTENSION:return"enum";case m.INPUT_OBJECT_TYPE_EXTENSION:return"input object";default:wn(!1,"Unexpected kind: "+M(t))}}function gT(t){var s;const r=Object.create(null),a=t.getSchema(),u=(s=a==null?void 0:a.getDirectives())!==null&&s!==void 0?s:Zt;for(const T of u)r[T.name]=Jt(T.args.filter(Vm),I=>I.name);const p=t.getDocument().definitions;for(const T of p)if(T.kind===m.DIRECTIVE_DEFINITION){var y;const I=(y=T.arguments)!==null&&y!==void 0?y:[];r[T.name.value]=Jt(I.filter(mT),x=>x.name.value)}return{Directive:{leave(T){const I=T.name.value,x=r[I];if(x){var A;const C=(A=T.arguments)!==null&&A!==void 0?A:[],F=new Set(C.map(K=>K.name.value));for(const[K,j]of Object.entries(x))if(!F.has(K)){const pe=Io(j.type)?M(j.type):kn(j.type);t.reportError(new k(`Directive "@${I}" argument "${K}" of type "${pe}" is required, but it was not provided.`,{nodes:T}))}}}}}}function mT(t){return t.type.kind===m.NON_NULL_TYPE&&t.defaultValue==null}function yt(t,s,r){if(t){if(t.kind===m.VARIABLE){const a=t.name.value;if(r==null||r[a]===void 0)return;const u=r[a];return u===null&&ze(s)?void 0:u}if(ze(s))return t.kind===m.NULL?void 0:yt(t,s.ofType,r);if(t.kind===m.NULL)return null;if(Ct(s)){const a=s.ofType;if(t.kind===m.LIST){const p=[];for(const y of t.values)if(hc(y,r)){if(ze(a))return;p.push(null)}else{const T=yt(y,a,r);if(T===void 0)return;p.push(T)}return p}const u=yt(t,a,r);return u===void 0?void 0:[u]}if(Bn(s)){if(t.kind!==m.OBJECT)return;const a=Object.create(null),u=Jt(t.fields,p=>p.name.value);for(const p of Object.values(s.getFields())){const y=u[p.name];if(!y||hc(y.value,r)){if(p.defaultValue!==void 0)a[p.name]=p.defaultValue;else if(ze(p.type))return;continue}const T=yt(y.value,p.type,r);if(T===void 0)return;a[p.name]=T}return a}if(Uc(s)){let a;try{a=s.parseLiteral(t,r)}catch{return}return a===void 0?void 0:a}wn(!1,"Unexpected input type: "+M(s))}}function hc(t,s){return t.kind===m.VARIABLE&&(s==null||s[t.name.value]===void 0)}function TT(t,s,r){var a;const u={},p=(a=s.arguments)!==null&&a!==void 0?a:[],y=Jt(p,T=>T.name.value);for(const T of t.args){const I=T.name,x=T.type,A=y[I];if(!A){if(T.defaultValue!==void 0)u[I]=T.defaultValue;else if(ze(x))throw new k(`Argument "${I}" of required type "${M(x)}" was not provided.`,{nodes:s});continue}const C=A.value;let F=C.kind===m.NULL;if(C.kind===m.VARIABLE){const j=C.name.value;if(r==null||!IT(r,j)){if(T.defaultValue!==void 0)u[I]=T.defaultValue;else if(ze(x))throw new k(`Argument "${I}" of required type "${M(x)}" was provided the variable "$${j}" which was not provided a runtime value.`,{nodes:C});continue}F=r[j]==null}if(F&&ze(x))throw new k(`Argument "${I}" of non-null type "${M(x)}" must not be null.`,{nodes:C});const K=yt(C,x,r);if(K===void 0)throw new k(`Argument "${I}" has invalid value ${kn(C)}.`,{nodes:C});u[I]=K}return u}function ed(t,s,r){var a;const u=(a=s.directives)===null||a===void 0?void 0:a.find(p=>p.name.value===t.name);if(u)return TT(t,u,r)}function IT(t,s){return Object.prototype.hasOwnProperty.call(t,s)}function nd(t,s){const r=new Map;for(const a of t){const u=s(a),p=r.get(u);p===void 0?r.set(u,[a]):p.push(a)}return r}function DT(t){return{DirectiveDefinition(a){var u;const p=(u=a.arguments)!==null&&u!==void 0?u:[];return r(`@${a.name.value}`,p)},InterfaceTypeDefinition:s,InterfaceTypeExtension:s,ObjectTypeDefinition:s,ObjectTypeExtension:s};function s(a){var u;const p=a.name.value,y=(u=a.fields)!==null&&u!==void 0?u:[];for(const I of y){var T;const x=I.name.value,A=(T=I.arguments)!==null&&T!==void 0?T:[];r(`${p}.${x}`,A)}return!1}function r(a,u){const p=nd(u,y=>y.name.value);for(const[y,T]of p)T.length>1&&t.reportError(new k(`Argument "${a}(${y}:)" can only be defined once.`,{nodes:T.map(I=>I.name)}));return!1}}function vT(t){return{Field:s,Directive:s};function s(r){var a;const u=(a=r.arguments)!==null&&a!==void 0?a:[],p=nd(u,y=>y.name.value);for(const[y,T]of p)T.length>1&&t.reportError(new k(`There can be only one argument named "${y}".`,{nodes:T.map(I=>I.name)}))}}function bT(t){const s=Object.create(null),r=t.getSchema();return{DirectiveDefinition(a){const u=a.name.value;if(r!=null&&r.getDirective(u)){t.reportError(new k(`Directive "@${u}" already exists in the schema. It cannot be redefined.`,{nodes:a.name}));return}return s[u]?t.reportError(new k(`There can be only one directive named "@${u}".`,{nodes:[s[u],a.name]})):s[u]=a.name,!1}}}function AT(t){const s=Object.create(null),r=t.getSchema(),a=r?r.getDirectives():Zt;for(const T of a)s[T.name]=!T.isRepeatable;const u=t.getDocument().definitions;for(const T of u)T.kind===m.DIRECTIVE_DEFINITION&&(s[T.name.value]=!T.repeatable);const p=Object.create(null),y=Object.create(null);return{enter(T){if(!("directives"in T)||!T.directives)return;let I;if(T.kind===m.SCHEMA_DEFINITION||T.kind===m.SCHEMA_EXTENSION)I=p;else if(xi(T)||bo(T)){const x=T.name.value;I=y[x],I===void 0&&(y[x]=I=Object.create(null))}else I=Object.create(null);for(const x of T.directives){const A=x.name.value;s[A]&&(I[A]?t.reportError(new k(`The directive "@${A}" can only be used once at this location.`,{nodes:[I[A],x]})):I[A]=x)}}}}function NT(t){const s=t.getSchema(),r=s?s.getTypeMap():Object.create(null),a=Object.create(null);return{EnumTypeDefinition:u,EnumTypeExtension:u};function u(p){var y;const T=p.name.value;a[T]||(a[T]=Object.create(null));const I=(y=p.values)!==null&&y!==void 0?y:[],x=a[T];for(const A of I){const C=A.name.value,F=r[T];Rn(F)&&F.getValue(C)?t.reportError(new k(`Enum value "${T}.${C}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:A.name})):x[C]?t.reportError(new k(`Enum value "${T}.${C}" can only be defined once.`,{nodes:[x[C],A.name]})):x[C]=A.name}return!1}}function OT(t){const s=t.getSchema(),r=s?s.getTypeMap():Object.create(null),a=Object.create(null);return{InputObjectTypeDefinition:u,InputObjectTypeExtension:u,InterfaceTypeDefinition:u,InterfaceTypeExtension:u,ObjectTypeDefinition:u,ObjectTypeExtension:u};function u(p){var y;const T=p.name.value;a[T]||(a[T]=Object.create(null));const I=(y=p.fields)!==null&&y!==void 0?y:[],x=a[T];for(const A of I){const C=A.name.value;_T(r[T],C)?t.reportError(new k(`Field "${T}.${C}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:A.name})):x[C]?t.reportError(new k(`Field "${T}.${C}" can only be defined once.`,{nodes:[x[C],A.name]})):x[C]=A.name}return!1}}function _T(t,s){return Ke(t)||Ve(t)||Bn(t)?t.getFields()[s]!=null:!1}function xT(t){const s=[];let r=Object.create(null);return{ObjectValue:{enter(){s.push(r),r=Object.create(null)},leave(){const a=s.pop();a||wn(!1),r=a}},ObjectField(a){const u=a.name.value;r[u]?t.reportError(new k(`There can be only one input field named "${u}".`,{nodes:[r[u],a.name]})):r[u]=a.name}}}function ST(t){const s=t.getSchema(),r=Object.create(null),a=s?{query:s.getQueryType(),mutation:s.getMutationType(),subscription:s.getSubscriptionType()}:{};return{SchemaDefinition:u,SchemaExtension:u};function u(p){var y;const T=(y=p.operationTypes)!==null&&y!==void 0?y:[];for(const I of T){const x=I.operation,A=r[x];a[x]?t.reportError(new k(`Type for ${x} already defined in the schema. It cannot be redefined.`,{nodes:I})):A?t.reportError(new k(`There can be only one ${x} type in schema.`,{nodes:[A,I]})):r[x]=I}return!1}}function wT(t){const s=Object.create(null),r=t.getSchema();return{ScalarTypeDefinition:a,ObjectTypeDefinition:a,InterfaceTypeDefinition:a,UnionTypeDefinition:a,EnumTypeDefinition:a,InputObjectTypeDefinition:a};function a(u){const p=u.name.value;if(r!=null&&r.getType(p)){t.reportError(new k(`Type "${p}" already exists in the schema. It cannot also be defined in this type definition.`,{nodes:u.name}));return}return s[p]?t.reportError(new k(`There can be only one type named "${p}".`,{nodes:[s[p],u.name]})):s[p]=u.name,!1}}const CT=Object.freeze([pT,ST,wT,NT,OT,DT,bT,dT,aT,AT,hT,oT,vT,xT,gT]);class RT{constructor(s,r){this._ast=s,this._fragments=void 0,this._fragmentSpreads=new Map,this._recursivelyReferencedFragments=new Map,this._onError=r}get[Symbol.toStringTag](){return"ASTValidationContext"}reportError(s){this._onError(s)}getDocument(){return this._ast}getFragment(s){let r;if(this._fragments)r=this._fragments;else{r=Object.create(null);for(const a of this.getDocument().definitions)a.kind===m.FRAGMENT_DEFINITION&&(r[a.name.value]=a);this._fragments=r}return r[s]}getFragmentSpreads(s){let r=this._fragmentSpreads.get(s);if(!r){r=[];const a=[s];let u;for(;u=a.pop();)for(const p of u.selections)p.kind===m.FRAGMENT_SPREAD?r.push(p):p.selectionSet&&a.push(p.selectionSet);this._fragmentSpreads.set(s,r)}return r}getRecursivelyReferencedFragments(s){let r=this._recursivelyReferencedFragments.get(s);if(!r){r=[];const a=Object.create(null),u=[s.selectionSet];let p;for(;p=u.pop();)for(const y of this.getFragmentSpreads(p)){const T=y.name.value;if(a[T]!==!0){a[T]=!0;const I=this.getFragment(T);I&&(r.push(I),u.push(I.selectionSet))}}this._recursivelyReferencedFragments.set(s,r)}return r}}class BT extends RT{constructor(s,r,a){super(s,a),this._schema=r}get[Symbol.toStringTag](){return"SDLValidationContext"}getSchema(){return this._schema}}function GT(t,s,r=CT){const a=[],u=new BT(t,s,y=>{a.push(y)}),p=r.map(y=>y(u));return Rc(t,Um(p)),a}function LT(t){const s=GT(t);if(s.length!==0)throw new Error(s.map(r=>r.message).join(`

`))}function UT(t,s){tt(t)&&tt(t.__schema)||oe(!1,`Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${M(t)}.`);const r=t.__schema,a=St(r.types,S=>S.name,S=>F(S));for(const S of[...Br,...Lr])a[S.name]&&(a[S.name]=S);const u=r.queryType?A(r.queryType):null,p=r.mutationType?A(r.mutationType):null,y=r.subscriptionType?A(r.subscriptionType):null,T=r.directives?r.directives.map(zn):[];return new Zc({description:r.description,query:u,mutation:p,subscription:y,types:Object.values(a),directives:T,assumeValid:s==null?void 0:s.assumeValid});function I(S){if(S.kind===fe.LIST){const Y=S.ofType;if(!Y)throw new Error("Decorated type deeper than introspection query.");return new Xe(I(Y))}if(S.kind===fe.NON_NULL){const Y=S.ofType;if(!Y)throw new Error("Decorated type deeper than introspection query.");const ke=I(Y);return new ne(Hm(ke))}return x(S)}function x(S){const Y=S.name;if(!Y)throw new Error(`Unknown type reference: ${M(S)}.`);const ke=a[Y];if(!ke)throw new Error(`Invalid or incomplete schema, unknown type: ${Y}. Ensure that a full introspection query is used in order to build a client schema.`);return ke}function A(S){return km(x(S))}function C(S){return jm(x(S))}function F(S){if(S!=null&&S.name!=null&&S.kind!=null)switch(S.kind){case fe.SCALAR:return K(S);case fe.OBJECT:return pe(S);case fe.INTERFACE:return se(S);case fe.UNION:return me(S);case fe.ENUM:return Hn(S);case fe.INPUT_OBJECT:return Te(S)}const Y=M(S);throw new Error(`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${Y}.`)}function K(S){return new it({name:S.name,description:S.description,specifiedByURL:S.specifiedByURL})}function j(S){if(S.interfaces===null&&S.kind===fe.INTERFACE)return[];if(!S.interfaces){const Y=M(S);throw new Error(`Introspection result missing interfaces: ${Y}.`)}return S.interfaces.map(C)}function pe(S){return new jn({name:S.name,description:S.description,interfaces:()=>j(S),fields:()=>Oe(S)})}function se(S){return new Or({name:S.name,description:S.description,interfaces:()=>j(S),fields:()=>Oe(S)})}function me(S){if(!S.possibleTypes){const Y=M(S);throw new Error(`Introspection result missing possibleTypes: ${Y}.`)}return new _r({name:S.name,description:S.description,types:()=>S.possibleTypes.map(A)})}function Hn(S){if(!S.enumValues){const Y=M(S);throw new Error(`Introspection result missing enumValues: ${Y}.`)}return new Xt({name:S.name,description:S.description,values:St(S.enumValues,Y=>Y.name,Y=>({description:Y.description,deprecationReason:Y.deprecationReason}))})}function Te(S){if(!S.inputFields){const Y=M(S);throw new Error(`Introspection result missing inputFields: ${Y}.`)}return new xr({name:S.name,description:S.description,fields:()=>Pe(S.inputFields)})}function Oe(S){if(!S.fields)throw new Error(`Introspection result missing fields: ${M(S)}.`);return St(S.fields,Y=>Y.name,we)}function we(S){const Y=I(S.type);if(!Lc(Y)){const ke=M(Y);throw new Error(`Introspection must provide output type for fields, but received: ${ke}.`)}if(!S.args){const ke=M(S);throw new Error(`Introspection result missing field args: ${ke}.`)}return{description:S.description,deprecationReason:S.deprecationReason,type:Y,args:Pe(S.args)}}function Pe(S){return St(S,Y=>Y.name,Le)}function Le(S){const Y=I(S.type);if(!Gc(Y)){const rt=M(Y);throw new Error(`Introspection must provide input type for arguments, but received: ${rt}.`)}const ke=S.defaultValue!=null?yt(_m(S.defaultValue),Y):void 0;return{description:S.description,type:Y,defaultValue:ke,deprecationReason:S.deprecationReason}}function zn(S){if(!S.args){const Y=M(S);throw new Error(`Introspection result missing directive args: ${Y}.`)}if(!S.locations){const Y=M(S);throw new Error(`Introspection result missing directive locations: ${Y}.`)}return new Et({name:S.name,description:S.description,isRepeatable:S.isRepeatable,locations:S.locations.slice(),args:Pe(S.args)})}}function WT(t,s,r){var a,u,p,y;const T=[],I=Object.create(null),x=[];let A;const C=[];for(const b of s.definitions)if(b.kind===m.SCHEMA_DEFINITION)A=b;else if(b.kind===m.SCHEMA_EXTENSION)C.push(b);else if(xi(b))T.push(b);else if(bo(b)){const U=b.name.value,B=I[U];I[U]=B?B.concat([b]):[b]}else b.kind===m.DIRECTIVE_DEFINITION&&x.push(b);if(Object.keys(I).length===0&&T.length===0&&x.length===0&&C.length===0&&A==null)return t;const F=Object.create(null);for(const b of t.types)F[b.name]=Hn(b);for(const b of T){var K;const U=b.name.value;F[U]=(K=fc[U])!==null&&K!==void 0?K:on(b)}const j={query:t.query&&se(t.query),mutation:t.mutation&&se(t.mutation),subscription:t.subscription&&se(t.subscription),...A&&ke([A]),...ke(C)};return{description:(a=A)===null||a===void 0||(u=a.description)===null||u===void 0?void 0:u.value,...j,types:Object.values(F),directives:[...t.directives.map(me),...x.map(Si)],extensions:Object.create(null),astNode:(p=A)!==null&&p!==void 0?p:t.astNode,extensionASTNodes:t.extensionASTNodes.concat(C),assumeValid:(y=r==null?void 0:r.assumeValid)!==null&&y!==void 0?y:!1};function pe(b){return Ct(b)?new Xe(pe(b.ofType)):ze(b)?new ne(pe(b.ofType)):se(b)}function se(b){return F[b.name]}function me(b){const U=b.toConfig();return new Et({...U,args:nt(U.args,Y)})}function Hn(b){if(iT(b)||Xm(b))return b;if(gt(b))return we(b);if(Ke(b))return Pe(b);if(Ve(b))return Le(b);if(Cn(b))return zn(b);if(Rn(b))return Oe(b);if(Bn(b))return Te(b);wn(!1,"Unexpected type: "+M(b))}function Te(b){var U;const B=b.toConfig(),G=(U=I[B.name])!==null&&U!==void 0?U:[];return new xr({...B,fields:()=>({...nt(B.fields,ue=>({...ue,type:pe(ue.type)})),...Ln(G)}),extensionASTNodes:B.extensionASTNodes.concat(G)})}function Oe(b){var U;const B=b.toConfig(),G=(U=I[b.name])!==null&&U!==void 0?U:[];return new Xt({...B,values:{...B.values,...In(G)},extensionASTNodes:B.extensionASTNodes.concat(G)})}function we(b){var U;const B=b.toConfig(),G=(U=I[B.name])!==null&&U!==void 0?U:[];let ue=B.specifiedByURL;for(const ce of G){var ve;ue=(ve=yc(ce))!==null&&ve!==void 0?ve:ue}return new it({...B,specifiedByURL:ue,extensionASTNodes:B.extensionASTNodes.concat(G)})}function Pe(b){var U;const B=b.toConfig(),G=(U=I[B.name])!==null&&U!==void 0?U:[];return new jn({...B,interfaces:()=>[...b.getInterfaces().map(se),...Bt(G)],fields:()=>({...nt(B.fields,S),...Rt(G)}),extensionASTNodes:B.extensionASTNodes.concat(G)})}function Le(b){var U;const B=b.toConfig(),G=(U=I[B.name])!==null&&U!==void 0?U:[];return new Or({...B,interfaces:()=>[...b.getInterfaces().map(se),...Bt(G)],fields:()=>({...nt(B.fields,S),...Rt(G)}),extensionASTNodes:B.extensionASTNodes.concat(G)})}function zn(b){var U;const B=b.toConfig(),G=(U=I[B.name])!==null&&U!==void 0?U:[];return new _r({...B,types:()=>[...b.getTypes().map(se),...Tt(G)],extensionASTNodes:B.extensionASTNodes.concat(G)})}function S(b){return{...b,type:pe(b.type),args:b.args&&nt(b.args,Y)}}function Y(b){return{...b,type:pe(b.type)}}function ke(b){const U={};for(const G of b){var B;const ue=(B=G.operationTypes)!==null&&B!==void 0?B:[];for(const ve of ue)U[ve.operation]=rt(ve.type)}return U}function rt(b){var U;const B=b.name.value,G=(U=fc[B])!==null&&U!==void 0?U:F[B];if(G===void 0)throw new Error(`Unknown type: "${B}".`);return G}function mt(b){return b.kind===m.LIST_TYPE?new Xe(mt(b.type)):b.kind===m.NON_NULL_TYPE?new ne(mt(b.type)):rt(b)}function Si(b){var U;return new Et({name:b.name.value,description:(U=b.description)===null||U===void 0?void 0:U.value,locations:b.locations.map(({value:B})=>B),isRepeatable:b.repeatable,args:wi(b.arguments),astNode:b})}function Rt(b){const U=Object.create(null);for(const ue of b){var B;const ve=(B=ue.fields)!==null&&B!==void 0?B:[];for(const ce of ve){var G;U[ce.name.value]={type:mt(ce.type),description:(G=ce.description)===null||G===void 0?void 0:G.value,args:wi(ce.arguments),deprecationReason:Ar(ce),astNode:ce}}}return U}function wi(b){const U=b??[],B=Object.create(null);for(const ue of U){var G;const ve=mt(ue.type);B[ue.name.value]={type:ve,description:(G=ue.description)===null||G===void 0?void 0:G.value,defaultValue:yt(ue.defaultValue,ve),deprecationReason:Ar(ue),astNode:ue}}return B}function Ln(b){const U=Object.create(null);for(const ue of b){var B;const ve=(B=ue.fields)!==null&&B!==void 0?B:[];for(const ce of ve){var G;const an=mt(ce.type);U[ce.name.value]={type:an,description:(G=ce.description)===null||G===void 0?void 0:G.value,defaultValue:yt(ce.defaultValue,an),deprecationReason:Ar(ce),astNode:ce}}}return U}function In(b){const U=Object.create(null);for(const ue of b){var B;const ve=(B=ue.values)!==null&&B!==void 0?B:[];for(const ce of ve){var G;U[ce.name.value]={description:(G=ce.description)===null||G===void 0?void 0:G.value,deprecationReason:Ar(ce),astNode:ce}}}return U}function Bt(b){return b.flatMap(U=>{var B,G;return(B=(G=U.interfaces)===null||G===void 0?void 0:G.map(rt))!==null&&B!==void 0?B:[]})}function Tt(b){return b.flatMap(U=>{var B,G;return(B=(G=U.types)===null||G===void 0?void 0:G.map(rt))!==null&&B!==void 0?B:[]})}function on(b){var U;const B=b.name.value,G=(U=I[B])!==null&&U!==void 0?U:[];switch(b.kind){case m.OBJECT_TYPE_DEFINITION:{var ue;const Ue=[b,...G];return new jn({name:B,description:(ue=b.description)===null||ue===void 0?void 0:ue.value,interfaces:()=>Bt(Ue),fields:()=>Rt(Ue),astNode:b,extensionASTNodes:G})}case m.INTERFACE_TYPE_DEFINITION:{var ve;const Ue=[b,...G];return new Or({name:B,description:(ve=b.description)===null||ve===void 0?void 0:ve.value,interfaces:()=>Bt(Ue),fields:()=>Rt(Ue),astNode:b,extensionASTNodes:G})}case m.ENUM_TYPE_DEFINITION:{var ce;const Ue=[b,...G];return new Xt({name:B,description:(ce=b.description)===null||ce===void 0?void 0:ce.value,values:In(Ue),astNode:b,extensionASTNodes:G})}case m.UNION_TYPE_DEFINITION:{var an;const Ue=[b,...G];return new _r({name:B,description:(an=b.description)===null||an===void 0?void 0:an.value,types:()=>Tt(Ue),astNode:b,extensionASTNodes:G})}case m.SCALAR_TYPE_DEFINITION:{var ei;return new it({name:B,description:(ei=b.description)===null||ei===void 0?void 0:ei.value,specifiedByURL:yc(b),astNode:b,extensionASTNodes:G})}case m.INPUT_OBJECT_TYPE_DEFINITION:{var st;const Ue=[b,...G];return new xr({name:B,description:(st=b.description)===null||st===void 0?void 0:st.value,fields:()=>Ln(Ue),astNode:b,extensionASTNodes:G})}}}}const fc=Jt([...Br,...Lr],t=>t.name);function Ar(t){const s=ed($c,t);return s==null?void 0:s.reason}function yc(t){const s=ed(Yc,t);return s==null?void 0:s.url}function FT(t,s){t!=null&&t.kind===m.DOCUMENT||oe(!1,"Must provide valid Document AST."),(s==null?void 0:s.assumeValid)!==!0&&(s==null?void 0:s.assumeValidSDL)!==!0&&LT(t);const a=WT({description:void 0,types:[],directives:[],extensions:Object.create(null),extensionASTNodes:[],assumeValid:!1},t,s);if(a.astNode==null)for(const p of a.types)switch(p.name){case"Query":a.query=p;break;case"Mutation":a.mutation=p;break;case"Subscription":a.subscription=p;break}const u=[...a.directives,...Zt.filter(p=>a.directives.every(y=>y.name!==p.name))];return new Zc({...a,directives:u})}function PT(t,s){const r=Om(t,{noLocation:s==null?void 0:s.noLocation,allowLegacyFragmentVariables:s==null?void 0:s.allowLegacyFragmentVariables});return FT(r,{assumeValidSDL:s==null?void 0:s.assumeValidSDL,assumeValid:s==null?void 0:s.assumeValid})}const Ec=`
type AccessQuery {
  "Query for fetching a single ActiveCustomerPricingTierEntity"
  activeCustomerPricingTierEntity(conditions: [[WhereExpressionGraph]], id: ID, ids: [ID], where: [WhereExpressionGraph]): ActiveCustomerPricingTierEntityType
  "Query for fetching multiple ActiveCustomerPricingTierEntitys"
  activeCustomerPricingTierEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [ActiveCustomerPricingTierEntityType!]!
  "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
  activeCustomerPricingTierEntitysConditional(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [ActiveCustomerPricingTierEntityType!]!
  "Query for fetching a single ActiveUserPricingTierEntity"
  activeUserPricingTierEntity(conditions: [[WhereExpressionGraph]], id: ID, ids: [ID], where: [WhereExpressionGraph]): ActiveUserPricingTierEntityType
  "Query for fetching multiple ActiveUserPricingTierEntitys"
  activeUserPricingTierEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [ActiveUserPricingTierEntityType!]!
  "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
  activeUserPricingTierEntitysConditional(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [ActiveUserPricingTierEntityType!]!
  "Query for fetching a single AddressEntity"
  addressEntity(conditions: [[WhereExpressionGraph]], id: ID, ids: [ID], where: [WhereExpressionGraph]): AddressEntityType
  "Query for fetching multiple AddressEntitys"
  addressEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [AddressEntityType!]!
  "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
  addressEntitysConditional(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [AddressEntityType!]!
  "Query for fetching a single AlaresEntity"
  alaresEntity(conditions: [[WhereExpressionGraph]], id: ID, ids: [ID], where: [WhereExpressionGraph]): AlaresEntityType
  "Query for fetching multiple AlaresEntitys"
  alaresEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [AlaresEntityType!]!
  "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
  alaresEntitysConditional(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [AlaresEntityType!]!
  "Query for fetching a single ApplicationEntity"
  applicationEntity(conditions: [[WhereExpressionGraph]], id: ID, ids: [ID], where: [WhereExpressionGraph]): ApplicationEntityType
  "Query for fetching multiple ApplicationEntitys"
  applicationEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [ApplicationEntityType!]!
  "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
  applicationEntitysConditional(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [ApplicationEntityType!]!
  "Query for fetching a single AtbFileEntity"
  atbFileEntity(conditions: [[WhereExpressionGraph]], id: ID, ids: [ID], where: [WhereExpressionGraph]): AtbFileEntityType
  "Query for fetching multiple AtbFileEntitys"
  atbFileEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [AtbFileEntityType!]!
  "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
  atbFileEntitysConditional(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [AtbFileEntityType!]!
  "Query for fetching a single AtbRecordEntity"
  atbRecordEntity(conditions: [[WhereExpressionGraph]], id: ID, ids: [ID], where: [WhereExpressionGraph]): AtbRecordEntityType
  "Query for fetching multiple AtbRecordEntitys"
  atbRecordEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [AtbRecordEntityType!]!
  "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
  atbRecordEntitysConditional(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [AtbRecordEntityType!]!
  "Query for fetching a single BusinessEntity"
  businessEntity(conditions: [[WhereExpressionGraph]], id: ID, ids: [ID], where: [WhereExpressionGraph]): BusinessEntityType
  "Query for fetching a single BusinessEntityUser"
  businessEntityUser(conditions: [[WhereExpressionGraph]], id: ID, ids: [ID], where: [WhereExpressionGraph]): BusinessEntityUserType
  "Query for fetching multiple BusinessEntityUsers"
  businessEntityUsers(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [BusinessEntityUserType!]!
  "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
  businessEntityUsersConditional(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [BusinessEntityUserType!]!
  "Query for fetching multiple BusinessEntitys"
  businessEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [BusinessEntityType!]!
  "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
  businessEntitysConditional(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [BusinessEntityType!]!
  "Counts the number of models according to a given set of conditions"
  countActiveCustomerPricingTierEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countActiveCustomerPricingTierEntitysConditional(conditions: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countActiveUserPricingTierEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countActiveUserPricingTierEntitysConditional(conditions: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countAddressEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countAddressEntitysConditional(conditions: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countAlaresEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countAlaresEntitysConditional(conditions: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countApplicationEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countApplicationEntitysConditional(conditions: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countAtbFileEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countAtbFileEntitysConditional(conditions: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of AtbRecordEntitys marked for new customer according to a given set of conditions"
  countAtbRecordEntityNewCustomers(conditions: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of processing errors on AtbRecordEntitys according to a given set of conditions"
  countAtbRecordEntityProcessingErrors(conditions: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of processing warnings on AtbRecordEntitys according to a given set of conditions"
  countAtbRecordEntityProcessingWarnings(conditions: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countAtbRecordEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countAtbRecordEntitysConditional(conditions: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countBusinessEntityUsers(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countBusinessEntityUsersConditional(conditions: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countBusinessEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countBusinessEntitysConditional(conditions: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countCreditBureauEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countCreditBureauEntitysConditional(conditions: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countCustomerEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countCustomerEntitysConditional(conditions: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countDiscountEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countDiscountEntitysConditional(conditions: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countDocumentEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countDocumentEntitysConditional(conditions: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countIndustryCodesEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countIndustryCodesEntitysConditional(conditions: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countInvoiceEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countInvoiceEntitysConditional(conditions: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countMonthlyExposurePricingTierEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countMonthlyExposurePricingTierEntitysConditional(conditions: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countOptionHowDidYouHearEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countOptionHowDidYouHearEntitysConditional(conditions: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countOptionReferrerCharityEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countOptionReferrerCharityEntitysConditional(conditions: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countOrganisationAuthorisedCreditBureaus(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countOrganisationAuthorisedCreditBureausConditional(conditions: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countOrganisationEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countOrganisationEntitysConditional(conditions: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countRegistrationEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countRegistrationEntitysConditional(conditions: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countRegistrationFileEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countRegistrationFileEntitysConditional(conditions: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countSpgEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countSpgEntitysConditional(conditions: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countTrustEntityCodesEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countTrustEntityCodesEntitysConditional(conditions: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countUserEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Counts the number of models according to a given set of conditions"
  countUserEntitysConditional(conditions: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], where: [WhereExpressionGraph]): NumberObjectType
  "Query for fetching a single CreditBureauEntity"
  creditBureauEntity(conditions: [[WhereExpressionGraph]], id: ID, ids: [ID], where: [WhereExpressionGraph]): CreditBureauEntityType
  "Query for fetching multiple CreditBureauEntitys"
  creditBureauEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [CreditBureauEntityType!]!
  "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
  creditBureauEntitysConditional(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [CreditBureauEntityType!]!
  "Query for fetching a single CustomerEntity"
  customerEntity(conditions: [[WhereExpressionGraph]], id: ID, ids: [ID], where: [WhereExpressionGraph]): CustomerEntityType
  "Query for fetching multiple CustomerEntitys"
  customerEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [CustomerEntityType!]!
  "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
  customerEntitysConditional(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [CustomerEntityType!]!
  "Query for fetching a single DiscountEntity"
  discountEntity(conditions: [[WhereExpressionGraph]], id: ID, ids: [ID], where: [WhereExpressionGraph]): DiscountEntityType
  "Query for fetching multiple DiscountEntitys"
  discountEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [DiscountEntityType!]!
  "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
  discountEntitysConditional(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [DiscountEntityType!]!
  "Query for fetching a single DocumentEntity"
  documentEntity(conditions: [[WhereExpressionGraph]], id: ID, ids: [ID], where: [WhereExpressionGraph]): DocumentEntityType
  "Query for fetching multiple DocumentEntitys"
  documentEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [DocumentEntityType!]!
  "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
  documentEntitysConditional(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [DocumentEntityType!]!
  "Query for fetching a single IndustryCodesEntity"
  industryCodesEntity(conditions: [[WhereExpressionGraph]], id: ID, ids: [ID], where: [WhereExpressionGraph]): IndustryCodesEntityType
  "Query for fetching multiple IndustryCodesEntitys"
  industryCodesEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [IndustryCodesEntityType!]!
  "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
  industryCodesEntitysConditional(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [IndustryCodesEntityType!]!
  "Query for fetching a single InvoiceEntity"
  invoiceEntity(conditions: [[WhereExpressionGraph]], id: ID, ids: [ID], where: [WhereExpressionGraph]): InvoiceEntityType
  "Query for fetching multiple InvoiceEntitys"
  invoiceEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [InvoiceEntityType!]!
  "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
  invoiceEntitysConditional(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [InvoiceEntityType!]!
  "Query for fetching a single MonthlyExposurePricingTierEntity"
  monthlyExposurePricingTierEntity(conditions: [[WhereExpressionGraph]], id: ID, ids: [ID], where: [WhereExpressionGraph]): MonthlyExposurePricingTierEntityType
  "Query for fetching multiple MonthlyExposurePricingTierEntitys"
  monthlyExposurePricingTierEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [MonthlyExposurePricingTierEntityType!]!
  "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
  monthlyExposurePricingTierEntitysConditional(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [MonthlyExposurePricingTierEntityType!]!
  "Query for fetching a single OptionHowDidYouHearEntity"
  optionHowDidYouHearEntity(conditions: [[WhereExpressionGraph]], id: ID, ids: [ID], where: [WhereExpressionGraph]): OptionHowDidYouHearEntityType
  "Query for fetching multiple OptionHowDidYouHearEntitys"
  optionHowDidYouHearEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [OptionHowDidYouHearEntityType!]!
  "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
  optionHowDidYouHearEntitysConditional(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [OptionHowDidYouHearEntityType!]!
  "Query for fetching a single OptionReferrerCharityEntity"
  optionReferrerCharityEntity(conditions: [[WhereExpressionGraph]], id: ID, ids: [ID], where: [WhereExpressionGraph]): OptionReferrerCharityEntityType
  "Query for fetching multiple OptionReferrerCharityEntitys"
  optionReferrerCharityEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [OptionReferrerCharityEntityType!]!
  "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
  optionReferrerCharityEntitysConditional(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [OptionReferrerCharityEntityType!]!
  "Query for fetching a single OrganisationAuthorisedCreditBureau"
  organisationAuthorisedCreditBureau(conditions: [[WhereExpressionGraph]], id: ID, ids: [ID], where: [WhereExpressionGraph]): OrganisationAuthorisedCreditBureauType
  "Query for fetching multiple OrganisationAuthorisedCreditBureaus"
  organisationAuthorisedCreditBureaus(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [OrganisationAuthorisedCreditBureauType!]!
  "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
  organisationAuthorisedCreditBureausConditional(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [OrganisationAuthorisedCreditBureauType!]!
  "Query for fetching a single OrganisationEntity"
  organisationEntity(conditions: [[WhereExpressionGraph]], id: ID, ids: [ID], where: [WhereExpressionGraph]): OrganisationEntityType
  "Query for fetching multiple OrganisationEntitys"
  organisationEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [OrganisationEntityType!]!
  "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
  organisationEntitysConditional(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [OrganisationEntityType!]!
  "Query for fetching a single RegistrationEntity"
  registrationEntity(conditions: [[WhereExpressionGraph]], id: ID, ids: [ID], where: [WhereExpressionGraph]): RegistrationEntityType
  "Query for fetching multiple RegistrationEntitys"
  registrationEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [RegistrationEntityType!]!
  "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
  registrationEntitysConditional(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [RegistrationEntityType!]!
  "Query for fetching a single RegistrationFileEntity"
  registrationFileEntity(conditions: [[WhereExpressionGraph]], id: ID, ids: [ID], where: [WhereExpressionGraph]): RegistrationFileEntityType
  "Query for fetching multiple RegistrationFileEntitys"
  registrationFileEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [RegistrationFileEntityType!]!
  "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
  registrationFileEntitysConditional(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [RegistrationFileEntityType!]!
  "Query for fetching a single SpgEntity"
  spgEntity(conditions: [[WhereExpressionGraph]], id: ID, ids: [ID], where: [WhereExpressionGraph]): SpgEntityType
  "Query for fetching multiple SpgEntitys"
  spgEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [SpgEntityType!]!
  "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
  spgEntitysConditional(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [SpgEntityType!]!
  "Query for fetching a single TrustEntityCodesEntity"
  trustEntityCodesEntity(conditions: [[WhereExpressionGraph]], id: ID, ids: [ID], where: [WhereExpressionGraph]): TrustEntityCodesEntityType
  "Query for fetching multiple TrustEntityCodesEntitys"
  trustEntityCodesEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [TrustEntityCodesEntityType!]!
  "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
  trustEntityCodesEntitysConditional(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [TrustEntityCodesEntityType!]!
  "Query for fetching a single UserEntity"
  userEntity(conditions: [[WhereExpressionGraph]], id: ID, ids: [ID], where: [WhereExpressionGraph]): UserEntityType
  "Query for fetching multiple UserEntitys"
  userEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [UserEntityType!]!
  "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
  userEntitysConditional(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [UserEntityType!]!
}


"Active Customer Pricing Tier"
type ActiveCustomerPricingTierEntityType {
  "Approve Price"
  approvePrice: DeserializableInt
  created: DateTime!
  id: ID!
  "Intel Price"
  intelPrice: DeserializableInt
  "Maximum Customers"
  maximumCustomers: DeserializableInt
  modified: DateTime!
  "PPSR Price"
  ppsrPrice: DeserializableInt
}


"Active User Pricing Tier"
type ActiveUserPricingTierEntityType {
  created: DateTime!
  id: ID!
  maximumUsers: DeserializableInt
  modified: DateTime!
  "Price"
  price: DeserializableInt
}


"Address"
type AddressEntityType {
  atbRecord: AtbRecordEntityType
  atbRecordId: ID
  businessEntity: BusinessEntityType
  businessEntityId: ID
  city: String
  "Country"
  country: String
  created: DateTime!
  customerWithPhysicalAddress: CustomerEntityType
  customerWithPhysicalAddressId: ID
  customerWithPostalAddress: CustomerEntityType
  customerWithPostalAddressId: ID
  id: ID!
  "Line 1"
  line1: String
  "Line 2"
  line2: String
  modified: DateTime!
  "Postcode"
  postcode: String
  "State"
  state: String
  "Suburb"
  suburb: String
}


type AlaresEntityType {
  adverseAlerts: DeserializableInt
  businessNumber: String
  created: DateTime!
  customer: CustomerEntityType
  customerId: ID
  id: ID!
  insolvencyRiskRating: RiskScore
  "The raw decimal value of the insolvency risk rating"
  insolvencyRiskRatingValue: DeserializableFloat
  "Alares report in json"
  jsonreport: String
  lastUpdated: DateOnly
  modified: DateTime!
  "Whether or not the status has been processed"
  processed: DeserializableBoolean
  reportID: DeserializableInt
}


"Approve Application"
type ApplicationEntityType {
  "Application Date"
  applicationDate: DateOnly
  applicationName: String
  businessEntity: BusinessEntityType
  businessEntityId: ID
  "Contact Name"
  contactName: String
  created: DateTime!
  email: String
  id: ID!
  "Is the application active"
  isActive: DeserializableBoolean
  legacyID: String
  "Business Logo"
  logoId: ID
  modified: DateTime!
  phone: String
  "Approve Privacy Policy"
  privacyPolicyId: ID
  "Application Terms and Conditions"
  termsAndConditionsId: ID
}


"A record representing the uploaded file"
type AtbFileEntityType {
  "Whether or not new customers should be added by default"
  addNewCustomers: DeserializableBoolean
  atbFileType: AtbFileType
  atbJobStatus: AtbJobStatus
  atbProcessingStatus: AtbProcessingStatus
  atbRecords(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [AtbRecordEntityType!]
  businessEntity: BusinessEntityType
  businessEntityId: ID
  created: DateTime!
  fileName: String
  id: ID!
  modified: DateTime!
  "Target Year and Month for the data. Day should always be 0."
  targetMonth: DateOnly
  user: UserEntityType
  userId: ID
}


"A record in the ATB File"
type AtbRecordEntityType {
  abn: String
  acn: String
  address: AddressEntityType
  atbFile: AtbFileEntityType
  atbFileId: ID
  created: DateTime!
  customer: CustomerEntityType
  customerId: ID
  customerName: String
  debtorID: String
  dp120plus: DeserializableFloat
  dp1to30: DeserializableFloat
  dp31to60: DeserializableFloat
  dp61to90: DeserializableFloat
  dp91to120: DeserializableFloat
  dpcurrent: DeserializableFloat
  entityName: String
  "Whether or not the ATB Record has been processed"
  errorsProcessed: DeserializableBoolean
  id: ID!
  modified: DateTime!
  "Json object of original data"
  originalData: String
  "The payment risk rating for the customer given this set of ATB data"
  paymentRiskRating: RiskScore
  phone: String
  "Json Object with Errors from processing"
  processingErrors: String
  "Json Object with Warnings from processing"
  processingWarnings: String
  sicCode: String
  terms: String
  totalDebt: DeserializableFloat
  "Total overdue debt"
  totalOverdue: DeserializableFloat
  trusteeACN: String
}


type BooleanObjectType {
  "The value of the boolean"
  value: Boolean
}


"Business Entity"
type BusinessEntityType {
  "ABN"
  abn: String
  "ABR Last Updated"
  abrLastUpdated: DeserializableDateTime
  "ACN"
  acn: String
  "The entity name sent back in the ACN response"
  acnEntityName: String
  "The entity type code sent back in the ACN response"
  acnEntityTypeCode: String
  "ACN Last Updated"
  acnLastUpdated: DeserializableDateTime
  "Status of the ACN"
  acnStatus: String
  address: AddressEntityType
  applicationss(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [ApplicationEntityType!]
  atbFiles(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [AtbFileEntityType!]
  created: DateTime!
  "The Creditor ID is used in the ATB reports"
  creditorID: String
  customerss(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [CustomerEntityType!]
  "DoB field uses for sole traders"
  dateOfBirth: DeserializableDateTime
  "Email"
  email: String
  "Enabled for Approve"
  enabledForApprove: DeserializableBoolean
  "Enabled for PPSR"
  enabledForPPSR: DeserializableBoolean
  "Entity Name retrieve from ABN lookup"
  entityName: String
  entityStatus: String
  "Entity Type Code retrieve from ABN lookup"
  entityTypeCode: String
  "Entity Type Description retrieve from ABN lookup"
  entityTypeDescription: String
  "Is the business of type Finance"
  finance: DeserializableBoolean
  "Is the business of a Hire business type"
  hire: DeserializableBoolean
  id: ID!
  "Is Active"
  isActive: DeserializableBoolean
  "Legacy ID"
  legacyID: DeserializableInt
  modified: DateTime!
  "Name"
  name: String
  organisation: OrganisationEntityType
  organisationId: ID
  "Phone"
  phone: String
  primaryOrganisation: OrganisationEntityType
  spgss(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [SpgEntityType!]
  "Brief summary of the business"
  summary: String
  "Is the business of type Supply Goods and Equipment"
  supplyGnE: DeserializableBoolean
  trusteeACN: String
  "The entity name sent back by the trustee ACN response"
  trusteeACNEntityName: String
  "The entity type code for the trustee ACN reponse"
  trusteeACNEntityTypeCode: String
  "Trustee ACN Last Updated"
  trusteeACNLastUpdated: DeserializableDateTime
  "Trustee ACN Status"
  trusteeACNStatus: String
  trusteeName: String
  "Boolean for determining to use the organisation email instead of the saved one."
  useOrganisationEmail: DeserializableBoolean
  users(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [BusinessEntityUserType!]
}


type BusinessEntityUserType {
  businessEntity: BusinessEntityType
  businessEntityId: ID
  created: DateTime
  id: ID
  modified: DateTime
  user: UserEntityType
  userId: ID
}


"Credit Bureau"
type CreditBureauEntityType {
  created: DateTime!
  id: ID!
  modified: DateTime!
  "Name"
  name: String
  organisations(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [OrganisationAuthorisedCreditBureauType!]
}


"Customer"
type CustomerEntityType {
  "ABN"
  abn: String
  "ABN is current indicator"
  abnActive: DeserializableBoolean
  "ABR Last Updated"
  abrLastUpdated: DeserializableDateTime
  accountNumber: String
  "Accounts Contact"
  accountsContact: String
  "Accounts Phone Number"
  accountsPhoneNumber: String
  "ACN"
  acn: String
  "The entity name sent back in the ACN response"
  acnEntityName: String
  "The entity type code sent back in the ACN response"
  acnEntityTypeCode: String
  acnLastUpdated: DeserializableDateTime
  acnStatus: String
  "Active Since"
  activeSince: DeserializableDateTime
  alaress(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [AlaresEntityType!]
  applicationNumber: String
  applicationStatus: String
  atbRecords(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [AtbRecordEntityType!]
  businessEntity: BusinessEntityType
  businessEntityId: ID
  businessName: String
  created: DateTime!
  creditLimit: String
  "Date of Birth"
  dateOfBirth: DateOnly
  "A customer's debtor ID represents the unique identifier used by business entities to represent their customers"
  debtorID: String
  "Email"
  email: String
  "Entity Name"
  entityName: String
  "Entity Status"
  entityStatus: String
  "Entity Type Code"
  entityTypeCode: String
  "Entity Type Description"
  entityTypeDescription: String
  "First Name"
  firstName: String
  id: ID!
  "Is Active"
  isActive: DeserializableBoolean
  "Last Name"
  lastName: String
  "Locality"
  locality: String
  modified: DateTime!
  "Name for Invoice"
  nameForInvoice: String
  newestAlares: AlaresEntityType
  newestAtbRecord: AtbRecordEntityType
  organisation: OrganisationEntityType
  organisationId: ID
  "Phone"
  phone: String
  physicalAddress: AddressEntityType
  postalAddress: AddressEntityType
  "Purchasing Officer"
  purchasingOfficer: String
  purchasingOfficerEmail: String
  "Record Updated"
  recordUpdated: DeserializableDateTime
  "Registered for GST"
  registeredForGST: DeserializableBoolean
  "Statements Contact"
  statementsContact: String
  "Statements Email"
  statementsEmail: String
  "Tax Invoices Contact"
  taxInvoicesContact: String
  "Tax Invoices Email"
  taxInvoicesEmail: String
  "Trading terms"
  tradingTerms: String
  trusteeACN: String
  "The entity name sent back by the trustee ACN response"
  trusteeACNEntityName: String
  "The entity type code for the trustee ACN reponse"
  trusteeACNEntityTypeCode: String
  trusteeACNLastUpdated: DeserializableDateTime
  trusteeACNStatus: String
  trusteeName: String
}


"The discounts applied to the organisation"
type DiscountEntityType {
  created: DateTime!
  discountPercent: DeserializableInt
  "Discount apply from the moment they are created until their expiration date"
  expirationDate: DateOnly
  id: ID!
  modified: DateTime!
  organisation: OrganisationEntityType
  organisationId: ID
  "The source of the discount"
  source: DiscountSource
}


"Holds assorted documents, such as T&Cs"
type DocumentEntityType {
  created: DateTime!
  fileId: ID
  id: ID!
  modified: DateTime!
  "Name"
  name: String
}


type IdObjectType {
  "An ID in the form of a GUID"
  id: ID
}


"Industry Codes"
type IndustryCodesEntityType {
  "Code"
  code: String
  created: DateTime!
  "Description"
  description: String
  id: ID!
  modified: DateTime!
  organisationss(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [OrganisationEntityType!]
}


"Invoice"
type InvoiceEntityType {
  created: DateTime!
  "Customer Count"
  customerCount: DeserializableInt
  "Discount Price"
  discountPrice: DeserializableFloat
  "Final Price"
  finalPrice: DeserializableFloat
  id: ID!
  "Line items that make up the Final Price"
  lineItems: String
  modified: DateTime!
  "Monthly Exposure"
  monthlyExposure: DeserializableFloat
  "Monthly Price"
  monthlyPrice: DeserializableFloat
  organisation: OrganisationEntityType
  organisationId: ID
  "The name of the referral partner that referred this Organisation"
  referredBy: String
  "User Count"
  userCount: DeserializableInt
  "Using Approve"
  usingApprove: DeserializableBoolean
  "Using Monitor"
  usingMonitor: DeserializableBoolean
  "Using PPSR"
  usingPPSR: DeserializableBoolean
}


"Monthly Exposure Pricing Tier"
type MonthlyExposurePricingTierEntityType {
  created: DateTime!
  id: ID!
  "Maximum Monthly Exposure"
  maximumMonthlyExposure: DeserializableInt
  modified: DateTime!
  "Price"
  price: DeserializableInt
}


type Mutation {
  createActiveCustomerPricingTierEntity(activeCustomerPricingTierEntitys: [ActiveCustomerPricingTierEntityInput], mergeReferences: [String]): [ActiveCustomerPricingTierEntityType!]!
  createActiveUserPricingTierEntity(activeUserPricingTierEntitys: [ActiveUserPricingTierEntityInput], mergeReferences: [String]): [ActiveUserPricingTierEntityType!]!
  createAddressEntity(addressEntitys: [AddressEntityInput], mergeReferences: [String]): [AddressEntityType!]!
  createAlaresEntity(alaresEntitys: [AlaresEntityInput], mergeReferences: [String]): [AlaresEntityType!]!
  createApplicationEntity(applicationEntitys: [ApplicationEntityInput], mergeReferences: [String]): [ApplicationEntityType!]!
  createAtbFileEntity(atbFileEntitys: [AtbFileEntityInput], mergeReferences: [String]): [AtbFileEntityType!]!
  createAtbRecordEntity(atbRecordEntitys: [AtbRecordEntityInput], mergeReferences: [String]): [AtbRecordEntityType!]!
  createBusinessEntity(businessEntitys: [BusinessEntityInput], mergeReferences: [String]): [BusinessEntityType!]!
  createBusinessEntityUser(businessEntityUsers: [BusinessEntityUserInput], mergeReferences: [String]): [BusinessEntityUserType!]!
  createCreditBureauEntity(creditBureauEntitys: [CreditBureauEntityInput], mergeReferences: [String]): [CreditBureauEntityType!]!
  createCustomerEntity(customerEntitys: [CustomerEntityInput], mergeReferences: [String]): [CustomerEntityType!]!
  createDiscountEntity(discountEntitys: [DiscountEntityInput], mergeReferences: [String]): [DiscountEntityType!]!
  createDocumentEntity(documentEntitys: [DocumentEntityInput], mergeReferences: [String]): [DocumentEntityType!]!
  createIndustryCodesEntity(industryCodesEntitys: [IndustryCodesEntityInput], mergeReferences: [String]): [IndustryCodesEntityType!]!
  createInvoiceEntity(invoiceEntitys: [InvoiceEntityInput], mergeReferences: [String]): [InvoiceEntityType!]!
  createMonthlyExposurePricingTierEntity(mergeReferences: [String], monthlyExposurePricingTierEntitys: [MonthlyExposurePricingTierEntityInput]): [MonthlyExposurePricingTierEntityType!]!
  createOptionHowDidYouHearEntity(mergeReferences: [String], optionHowDidYouHearEntitys: [OptionHowDidYouHearEntityInput]): [OptionHowDidYouHearEntityType!]!
  createOptionReferrerCharityEntity(mergeReferences: [String], optionReferrerCharityEntitys: [OptionReferrerCharityEntityInput]): [OptionReferrerCharityEntityType!]!
  createOrganisationAuthorisedCreditBureau(mergeReferences: [String], organisationAuthorisedCreditBureaus: [OrganisationAuthorisedCreditBureauInput]): [OrganisationAuthorisedCreditBureauType!]!
  createOrganisationEntity(mergeReferences: [String], organisationEntitys: [OrganisationEntityInput]): [OrganisationEntityType!]!
  createRegistrationEntity(mergeReferences: [String], registrationEntitys: [RegistrationEntityInput]): [RegistrationEntityType!]!
  createRegistrationFileEntity(mergeReferences: [String], registrationFileEntitys: [RegistrationFileEntityInput]): [RegistrationFileEntityType!]!
  createSpgEntity(mergeReferences: [String], spgEntitys: [SpgEntityInput]): [SpgEntityType!]!
  createTrustEntityCodesEntity(mergeReferences: [String], trustEntityCodesEntitys: [TrustEntityCodesEntityInput]): [TrustEntityCodesEntityType!]!
  createUserEntity(mergeReferences: [String], userEntitys: [UserEntityCreateInput]): [UserEntityType!]!
  deleteActiveCustomerPricingTierEntity(activeCustomerPricingTierEntityIds: [ID]): [IdObjectType!]!
  deleteActiveCustomerPricingTierEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    id: ID
    ids: [ID]
  ): BooleanObjectType
  deleteActiveUserPricingTierEntity(activeUserPricingTierEntityIds: [ID]): [IdObjectType!]!
  deleteActiveUserPricingTierEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    id: ID
    ids: [ID]
  ): BooleanObjectType
  deleteAddressEntity(addressEntityIds: [ID]): [IdObjectType!]!
  deleteAddressEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    id: ID
    ids: [ID]
  ): BooleanObjectType
  deleteAlaresEntity(alaresEntityIds: [ID]): [IdObjectType!]!
  deleteAlaresEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    id: ID
    ids: [ID]
  ): BooleanObjectType
  deleteApplicationEntity(applicationEntityIds: [ID]): [IdObjectType!]!
  deleteApplicationEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    id: ID
    ids: [ID]
  ): BooleanObjectType
  deleteAtbFileEntity(atbFileEntityIds: [ID]): [IdObjectType!]!
  deleteAtbFileEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    id: ID
    ids: [ID]
  ): BooleanObjectType
  deleteAtbRecordEntity(atbRecordEntityIds: [ID]): [IdObjectType!]!
  deleteAtbRecordEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    id: ID
    ids: [ID]
  ): BooleanObjectType
  deleteBusinessEntity(businessEntityIds: [ID]): [IdObjectType!]!
  deleteBusinessEntityUser(businessEntityUserIds: [ID]): [IdObjectType!]!
  deleteBusinessEntityUsersConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    id: ID
    ids: [ID]
  ): BooleanObjectType
  deleteBusinessEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    id: ID
    ids: [ID]
  ): BooleanObjectType
  deleteCreditBureauEntity(creditBureauEntityIds: [ID]): [IdObjectType!]!
  deleteCreditBureauEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    id: ID
    ids: [ID]
  ): BooleanObjectType
  deleteCustomerEntity(customerEntityIds: [ID]): [IdObjectType!]!
  deleteCustomerEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    id: ID
    ids: [ID]
  ): BooleanObjectType
  deleteDiscountEntity(discountEntityIds: [ID]): [IdObjectType!]!
  deleteDiscountEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    id: ID
    ids: [ID]
  ): BooleanObjectType
  deleteDocumentEntity(documentEntityIds: [ID]): [IdObjectType!]!
  deleteDocumentEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    id: ID
    ids: [ID]
  ): BooleanObjectType
  deleteIndustryCodesEntity(industryCodesEntityIds: [ID]): [IdObjectType!]!
  deleteIndustryCodesEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    id: ID
    ids: [ID]
  ): BooleanObjectType
  deleteInvoiceEntity(invoiceEntityIds: [ID]): [IdObjectType!]!
  deleteInvoiceEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    id: ID
    ids: [ID]
  ): BooleanObjectType
  deleteMonthlyExposurePricingTierEntity(monthlyExposurePricingTierEntityIds: [ID]): [IdObjectType!]!
  deleteMonthlyExposurePricingTierEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    id: ID
    ids: [ID]
  ): BooleanObjectType
  deleteOptionHowDidYouHearEntity(optionHowDidYouHearEntityIds: [ID]): [IdObjectType!]!
  deleteOptionHowDidYouHearEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    id: ID
    ids: [ID]
  ): BooleanObjectType
  deleteOptionReferrerCharityEntity(optionReferrerCharityEntityIds: [ID]): [IdObjectType!]!
  deleteOptionReferrerCharityEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    id: ID
    ids: [ID]
  ): BooleanObjectType
  deleteOrganisationAuthorisedCreditBureau(organisationAuthorisedCreditBureauIds: [ID]): [IdObjectType!]!
  deleteOrganisationAuthorisedCreditBureausConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    id: ID
    ids: [ID]
  ): BooleanObjectType
  deleteOrganisationEntity(organisationEntityIds: [ID]): [IdObjectType!]!
  deleteOrganisationEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    id: ID
    ids: [ID]
  ): BooleanObjectType
  deleteRegistrationEntity(registrationEntityIds: [ID]): [IdObjectType!]!
  deleteRegistrationEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    id: ID
    ids: [ID]
  ): BooleanObjectType
  deleteRegistrationFileEntity(registrationFileEntityIds: [ID]): [IdObjectType!]!
  deleteRegistrationFileEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    id: ID
    ids: [ID]
  ): BooleanObjectType
  deleteSpgEntity(spgEntityIds: [ID]): [IdObjectType!]!
  deleteSpgEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    id: ID
    ids: [ID]
  ): BooleanObjectType
  deleteTrustEntityCodesEntity(trustEntityCodesEntityIds: [ID]): [IdObjectType!]!
  deleteTrustEntityCodesEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    id: ID
    ids: [ID]
  ): BooleanObjectType
  deleteUserEntity(userEntityIds: [ID]): [IdObjectType!]!
  deleteUserEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    id: ID
    ids: [ID]
  ): BooleanObjectType
  updateActiveCustomerPricingTierEntity(activeCustomerPricingTierEntitys: [ActiveCustomerPricingTierEntityInput], fieldsToUpdate: [String], mergeReferences: [String]): [ActiveCustomerPricingTierEntityType!]!
  updateActiveCustomerPricingTierEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    fieldsToUpdate: [String]
    id: ID
    ids: [ID]
    valuesToUpdate: ActiveCustomerPricingTierEntityInput
  ): BooleanObjectType
  updateActiveUserPricingTierEntity(activeUserPricingTierEntitys: [ActiveUserPricingTierEntityInput], fieldsToUpdate: [String], mergeReferences: [String]): [ActiveUserPricingTierEntityType!]!
  updateActiveUserPricingTierEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    fieldsToUpdate: [String]
    id: ID
    ids: [ID]
    valuesToUpdate: ActiveUserPricingTierEntityInput
  ): BooleanObjectType
  updateAddressEntity(addressEntitys: [AddressEntityInput], fieldsToUpdate: [String], mergeReferences: [String]): [AddressEntityType!]!
  updateAddressEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    fieldsToUpdate: [String]
    id: ID
    ids: [ID]
    valuesToUpdate: AddressEntityInput
  ): BooleanObjectType
  updateAlaresEntity(alaresEntitys: [AlaresEntityInput], fieldsToUpdate: [String], mergeReferences: [String]): [AlaresEntityType!]!
  updateAlaresEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    fieldsToUpdate: [String]
    id: ID
    ids: [ID]
    valuesToUpdate: AlaresEntityInput
  ): BooleanObjectType
  updateApplicationEntity(applicationEntitys: [ApplicationEntityInput], fieldsToUpdate: [String], mergeReferences: [String]): [ApplicationEntityType!]!
  updateApplicationEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    fieldsToUpdate: [String]
    id: ID
    ids: [ID]
    valuesToUpdate: ApplicationEntityInput
  ): BooleanObjectType
  updateAtbFileEntity(atbFileEntitys: [AtbFileEntityInput], fieldsToUpdate: [String], mergeReferences: [String]): [AtbFileEntityType!]!
  updateAtbFileEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    fieldsToUpdate: [String]
    id: ID
    ids: [ID]
    valuesToUpdate: AtbFileEntityInput
  ): BooleanObjectType
  updateAtbRecordEntity(atbRecordEntitys: [AtbRecordEntityInput], fieldsToUpdate: [String], mergeReferences: [String]): [AtbRecordEntityType!]!
  updateAtbRecordEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    fieldsToUpdate: [String]
    id: ID
    ids: [ID]
    valuesToUpdate: AtbRecordEntityInput
  ): BooleanObjectType
  updateBusinessEntity(businessEntitys: [BusinessEntityInput], fieldsToUpdate: [String], mergeReferences: [String]): [BusinessEntityType!]!
  updateBusinessEntityUser(businessEntityUsers: [BusinessEntityUserInput], fieldsToUpdate: [String], mergeReferences: [String]): [BusinessEntityUserType!]!
  updateBusinessEntityUsersConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    fieldsToUpdate: [String]
    id: ID
    ids: [ID]
    valuesToUpdate: BusinessEntityUserInput
  ): BooleanObjectType
  updateBusinessEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    fieldsToUpdate: [String]
    id: ID
    ids: [ID]
    valuesToUpdate: BusinessEntityInput
  ): BooleanObjectType
  updateCreditBureauEntity(creditBureauEntitys: [CreditBureauEntityInput], fieldsToUpdate: [String], mergeReferences: [String]): [CreditBureauEntityType!]!
  updateCreditBureauEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    fieldsToUpdate: [String]
    id: ID
    ids: [ID]
    valuesToUpdate: CreditBureauEntityInput
  ): BooleanObjectType
  updateCustomerEntity(customerEntitys: [CustomerEntityInput], fieldsToUpdate: [String], mergeReferences: [String]): [CustomerEntityType!]!
  updateCustomerEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    fieldsToUpdate: [String]
    id: ID
    ids: [ID]
    valuesToUpdate: CustomerEntityInput
  ): BooleanObjectType
  updateDiscountEntity(discountEntitys: [DiscountEntityInput], fieldsToUpdate: [String], mergeReferences: [String]): [DiscountEntityType!]!
  updateDiscountEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    fieldsToUpdate: [String]
    id: ID
    ids: [ID]
    valuesToUpdate: DiscountEntityInput
  ): BooleanObjectType
  updateDocumentEntity(documentEntitys: [DocumentEntityInput], fieldsToUpdate: [String], mergeReferences: [String]): [DocumentEntityType!]!
  updateDocumentEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    fieldsToUpdate: [String]
    id: ID
    ids: [ID]
    valuesToUpdate: DocumentEntityInput
  ): BooleanObjectType
  updateIndustryCodesEntity(fieldsToUpdate: [String], industryCodesEntitys: [IndustryCodesEntityInput], mergeReferences: [String]): [IndustryCodesEntityType!]!
  updateIndustryCodesEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    fieldsToUpdate: [String]
    id: ID
    ids: [ID]
    valuesToUpdate: IndustryCodesEntityInput
  ): BooleanObjectType
  updateInvoiceEntity(fieldsToUpdate: [String], invoiceEntitys: [InvoiceEntityInput], mergeReferences: [String]): [InvoiceEntityType!]!
  updateInvoiceEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    fieldsToUpdate: [String]
    id: ID
    ids: [ID]
    valuesToUpdate: InvoiceEntityInput
  ): BooleanObjectType
  updateMonthlyExposurePricingTierEntity(fieldsToUpdate: [String], mergeReferences: [String], monthlyExposurePricingTierEntitys: [MonthlyExposurePricingTierEntityInput]): [MonthlyExposurePricingTierEntityType!]!
  updateMonthlyExposurePricingTierEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    fieldsToUpdate: [String]
    id: ID
    ids: [ID]
    valuesToUpdate: MonthlyExposurePricingTierEntityInput
  ): BooleanObjectType
  updateOptionHowDidYouHearEntity(fieldsToUpdate: [String], mergeReferences: [String], optionHowDidYouHearEntitys: [OptionHowDidYouHearEntityInput]): [OptionHowDidYouHearEntityType!]!
  updateOptionHowDidYouHearEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    fieldsToUpdate: [String]
    id: ID
    ids: [ID]
    valuesToUpdate: OptionHowDidYouHearEntityInput
  ): BooleanObjectType
  updateOptionReferrerCharityEntity(fieldsToUpdate: [String], mergeReferences: [String], optionReferrerCharityEntitys: [OptionReferrerCharityEntityInput]): [OptionReferrerCharityEntityType!]!
  updateOptionReferrerCharityEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    fieldsToUpdate: [String]
    id: ID
    ids: [ID]
    valuesToUpdate: OptionReferrerCharityEntityInput
  ): BooleanObjectType
  updateOrganisationAuthorisedCreditBureau(fieldsToUpdate: [String], mergeReferences: [String], organisationAuthorisedCreditBureaus: [OrganisationAuthorisedCreditBureauInput]): [OrganisationAuthorisedCreditBureauType!]!
  updateOrganisationAuthorisedCreditBureausConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    fieldsToUpdate: [String]
    id: ID
    ids: [ID]
    valuesToUpdate: OrganisationAuthorisedCreditBureauInput
  ): BooleanObjectType
  updateOrganisationEntity(fieldsToUpdate: [String], mergeReferences: [String], organisationEntitys: [OrganisationEntityInput]): [OrganisationEntityType!]!
  updateOrganisationEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    fieldsToUpdate: [String]
    id: ID
    ids: [ID]
    valuesToUpdate: OrganisationEntityInput
  ): BooleanObjectType
  updateRegistrationEntity(fieldsToUpdate: [String], mergeReferences: [String], registrationEntitys: [RegistrationEntityInput]): [RegistrationEntityType!]!
  updateRegistrationEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    fieldsToUpdate: [String]
    id: ID
    ids: [ID]
    valuesToUpdate: RegistrationEntityInput
  ): BooleanObjectType
  updateRegistrationFileEntity(fieldsToUpdate: [String], mergeReferences: [String], registrationFileEntitys: [RegistrationFileEntityInput]): [RegistrationFileEntityType!]!
  updateRegistrationFileEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    fieldsToUpdate: [String]
    id: ID
    ids: [ID]
    valuesToUpdate: RegistrationFileEntityInput
  ): BooleanObjectType
  updateSpgEntity(fieldsToUpdate: [String], mergeReferences: [String], spgEntitys: [SpgEntityInput]): [SpgEntityType!]!
  updateSpgEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    fieldsToUpdate: [String]
    id: ID
    ids: [ID]
    valuesToUpdate: SpgEntityInput
  ): BooleanObjectType
  updateTrustEntityCodesEntity(fieldsToUpdate: [String], mergeReferences: [String], trustEntityCodesEntitys: [TrustEntityCodesEntityInput]): [TrustEntityCodesEntityType!]!
  updateTrustEntityCodesEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    fieldsToUpdate: [String]
    id: ID
    ids: [ID]
    valuesToUpdate: TrustEntityCodesEntityInput
  ): BooleanObjectType
  updateUserEntity(fieldsToUpdate: [String], mergeReferences: [String], userEntitys: [UserEntityInput]): [UserEntityType!]!
  updateUserEntitysConditional(
    "A list of lists of where conditions. The conditions inside the innermost lists are joined with and OR and the results of those lists are joined with an AND"
    conditions: [[WhereExpressionGraph]]
    fieldsToUpdate: [String]
    id: ID
    ids: [ID]
    valuesToUpdate: UserEntityInput
  ): BooleanObjectType
}


type NumberObjectType {
  "The total number"
  number: Int
}


"The list of options for an organisation to indicate how they hear about us"
type OptionHowDidYouHearEntityType {
  created: DateTime!
  id: ID!
  modified: DateTime!
  name: String
}


"The list of charities a referrer can choose if they donate to a charity"
type OptionReferrerCharityEntityType {
  created: DateTime!
  description: String
  id: ID!
  modified: DateTime!
  name: String
}


"Credit bureaus the organisation has agreed to share data with"
type OrganisationAuthorisedCreditBureauType {
  authorisedCreditBureau: CreditBureauEntityType
  authorisedCreditBureauId: ID
  created: DateTime
  id: ID
  modified: DateTime
  organisation: OrganisationEntityType
  organisationId: ID
}


"Organisation"
type OrganisationEntityType {
  "Date the user last accepted terms. If this is prior to the last time the terms were updated, the user may need to accept them again."
  acceptedterms: DeserializableDateTime
  "Approve Enabled"
  approveEnabled: DeserializableBoolean
  authorisedCreditBureaus(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [OrganisationAuthorisedCreditBureauType!]
  businessEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [BusinessEntityType!]
  created: DateTime!
  "CRiskCo Applicant ID"
  criskcoApplicantID: String
  "Customer Column Settings"
  customerColumnSettings: String
  "This customer count is used for pricing if the organisation has not added any customers yet in the Monitor platform"
  customerCount: DeserializableInt
  customerss(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [CustomerEntityType!]
  discountss(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [DiscountEntityType!]
  howDidYouHearAboutUs: String
  id: ID!
  industryCodes: IndustryCodesEntityType
  industryCodesId: ID
  "Intel Enabled"
  intelEnabled: DeserializableBoolean
  invoices(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [InvoiceEntityType!]
  "Is Active"
  isActive: DeserializableBoolean
  "Is the organisation a client"
  isClient: DeserializableBoolean
  "Is the organisation a referral partner"
  isReferralPartner: DeserializableBoolean
  legacyID: DeserializableInt
  modified: DateTime!
  "This is the current monthly exposure of the organisation"
  monthlyExposure: DeserializableFloat
  "PPSR Enabled"
  ppsrEnabled: DeserializableBoolean
  primaryBusinessEntity: BusinessEntityType
  primaryBusinessEntityId: ID
  referredRegistrationss(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [RegistrationEntityType!]
  referrerAcceptedTerms: DeserializableBoolean
  "Referrer BSB"
  referrerBSB: String
  "Bank Account Name for the referral partner"
  referrerBankAccountName: String
  "Referrer Bank Account Number"
  referrerBankAccountNumber: String
  "The mode which they would like to receive commission"
  referrerBenefitType: ReferrerBenefitType
  "Other Business Type Description"
  referrerBusinessOther: String
  "What does your business do"
  referrerBusinessType: ReferrerBusinessType
  "The name of the charity they would like to receive their commission"
  referrerCharityName: String
  "How often does the organisaion receive the commission"
  referrerCommissionFrequency: ReferrerCommissionFrequency
  "The discount applied to referred clients from this organisation"
  referrerCommissionPercent: DeserializableInt
  registration: RegistrationEntityType
  users(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [UserEntityType!]
}


"Registration"
type RegistrationEntityType {
  "Date registration was finished. Null if registration is still pending."
  completedDate: DeserializableDateTime
  created: DateTime!
  createdOrganisation: OrganisationEntityType
  createdOrganisationId: ID
  createdUser: UserEntityType
  createdUserId: ID
  id: ID!
  modified: DateTime!
  "Organisation Name"
  organisationName: String
  "Products"
  products: String
  "The email of the person that the referral link was created for"
  refereeEmail: String
  "The name of the person that the referral link was created for"
  refereeName: String
  "JSON field to hold information for the referral partner registration"
  referralData: String
  referralStatus: RegistrationStatus
  referringOrganisation: OrganisationEntityType
  referringOrganisationId: ID
  referringUser: UserEntityType
  referringUserId: ID
  "JSON field used to hold contents of various questions"
  registrationData: String
  registrationFiless(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [RegistrationFileEntityType!]
  "The actual start date of the registration, as registration can be created before actually being started"
  startDate: DateOnly
  "Status"
  status: RegistrationStatus
  "User Email"
  userEmail: String
  "User Name"
  userName: String
}


"Registration File"
type RegistrationFileEntityType {
  created: DateTime!
  "File"
  fileId: ID
  id: ID!
  modified: DateTime!
  registration: RegistrationEntityType
  registrationId: ID
}


"PPSR Registration"
type SpgEntityType {
  "Existing Access Code"
  accessCode: String
  businessEntity: BusinessEntityType
  businessEntityId: ID
  contactName: String
  created: DateTime!
  email: String
  id: ID!
  isActive: DeserializableBoolean
  legacyID: String
  modified: DateTime!
  "Comma seperated string of organisation numbers"
  organisationalNumbers: String
  phone: String
  spgNumber: String
}


"The entity codes for all the trusts."
type TrustEntityCodesEntityType {
  created: DateTime!
  "The entity code"
  entityCode: String
  id: ID!
  modified: DateTime!
}


"User"
type UserEntityType {
  atbFiles(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [AtbFileEntityType!]
  businessEntitys(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [BusinessEntityUserType!]
  "Can Access Approve"
  canAccessApprove: DeserializableBoolean
  "Can Access Intel"
  canAccessIntel: DeserializableBoolean
  "Can Access PPSR"
  canAccessPPSR: DeserializableBoolean
  created: DateTime!
  email: String
  "First Name"
  firstName: String
  id: ID!
  "Is Active"
  isActive: DeserializableBoolean
  "Last Name"
  lastName: String
  legacyID: DeserializableInt
  modified: DateTime!
  organisation: OrganisationEntityType
  organisationId: ID
  "Permission Overrides"
  permissionOverrides: String
  "Phone"
  phone: String
  referredRegistrationss(conditions: [[WhereExpressionGraph]], conditionsOr: [[WhereExpressionGraph]], has: [[HasConditionType]], id: ID, ids: [ID], orderBy: [OrderByGraph], skip: Int, take: Int, where: [WhereExpressionGraph]): [RegistrationEntityType!]
  registration: RegistrationEntityType
  twoFactorEnabled: Boolean!
  userName: String!
  "User Type"
  userType: UserType
}


enum AtbFileType {
  CUSTOMERS_ONLY
  STANDARD
  UNKNOWN
}


enum AtbJobStatus {
  PROCESSED
  PROCESSING
  QUEUED
}


enum AtbProcessingStatus {
  CREATED
  PROCESSED
  PROCESSING
}


enum Comparison {
  "Comparison to check if the target value is between the two provided values. This value is inclusive on the first field and exclusive on the second."
  between
  "Comparison to check if the target string contains the provided string."
  contains
  "Comparison to check if the target string ends with the provided string."
  endsWith
  "Comparison to check if the target value equals provided value."
  equal
  "Comparison to check if the target value is greater than the provided value."
  greaterThan
  "Comparison to check if the target value is greater than or equal to the provided value."
  greaterThanOrEqual
  "Comparison to check if the target value is in the list of provided values."
  in
  "Comparison to check if the target value is less than the provided value."
  lessThan
  "Comparison to check if the target value is less than or equal to the provided value."
  lessThanOrEqual
  "Comparison to check if the target string is like the provided value. The wildcard characters are '%' for many characters and '_' for a single character."
  like
  "Comparison to check if the target value is not in the list of provided values."
  notIn @deprecated(reason: "Negation Property used with the 'in' comparison should be used in place of this")
  "Comparison to check if the target string starts with the provided string."
  startsWith
}


enum DiscountSource {
  CUSTOM
  MIGRATION
  REFERRER
}


enum ReferrerBenefitType {
  CHARITY
  CLIENT_DISCOUNT
  COMMISSION
  NO_COMMISSION
}


enum ReferrerBusinessType {
  CREDIT_BUREAU
  CREDIT_INSURANCE_BROKER
  DEBT_COLLECTION
  INDIVIDUAL
  INSOLVENCY_PRACTITIONER
  LAWYER
  OTHER
}


enum ReferrerCommissionFrequency {
  QUARTERLY
  SIX_MONTHLY
  YEARLY
}


enum RegistrationStatus {
  COMPLETE
  CREATED
  INCOMPLETE
  PENDING
}


enum RiskScore {
  AVERAGE
  HIGH
  LOW
  MINIMAL
  MODERATE
  SEVERE
  UNKNOWN
  VERY_HIGH
  VERY_LOW
}


enum StringComparison {
  CURRENT_CULTURE
  CURRENT_CULTURE_IGNORE_CASE
  INVARIANT_CULTURE
  INVARIANT_CULTURE_IGNORE_CASE
  ORDINAL
  ORDINAL_IGNORE_CASE
}


enum UserType {
  ADMIN
  ORGANISATION_MANAGER
  REFERRAL_PARTNER
  RESTRICTED_USER
  SALESPERSON
  SUPER_USER
  USER
}


"The \`Date\` scalar type represents a year, month and day in accordance with the [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard. Format is \`yyyy-MM-dd\`"
scalar DateOnly


"The \`DateTime\` scalar type represents a date and time. \`DateTime\` expects timestamps to be formatted in accordance with the [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard."
scalar DateTime


scalar DeserializableBoolean


"The \`DateTime\` scalar type represents a date and time. \`DateTime\` expects timestamps to be formatted in accordance with the [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard."
scalar DeserializableDateTime


scalar DeserializableFloat


scalar DeserializableInt


"The input object for adding a new ActiveCustomerPricingTierEntity"
input ActiveCustomerPricingTierEntityInput {
  "Approve Price"
  approvePrice: DeserializableInt
  created: DeserializableDateTime
  id: ID
  "Intel Price"
  intelPrice: DeserializableInt
  "Maximum Customers"
  maximumCustomers: DeserializableInt
  modified: DeserializableDateTime
  "PPSR Price"
  ppsrPrice: DeserializableInt
}


"The input object for adding a new ActiveUserPricingTierEntity"
input ActiveUserPricingTierEntityInput {
  created: DeserializableDateTime
  id: ID
  maximumUsers: DeserializableInt
  modified: DeserializableDateTime
  "Price"
  price: DeserializableInt
}


"The input object for adding a new AddressEntity"
input AddressEntityInput {
  atbRecord: AtbRecordEntityInput
  atbRecordId: ID
  businessEntity: BusinessEntityInput
  businessEntityId: ID
  city: String
  "Country"
  country: String
  created: DeserializableDateTime
  customerWithPhysicalAddress: CustomerEntityInput
  customerWithPhysicalAddressId: ID
  customerWithPostalAddress: CustomerEntityInput
  customerWithPostalAddressId: ID
  id: ID
  "Line 1"
  line1: String
  "Line 2"
  line2: String
  modified: DeserializableDateTime
  "Postcode"
  postcode: String
  "State"
  state: String
  "Suburb"
  suburb: String
}


"The input object for adding a new AlaresEntity"
input AlaresEntityInput {
  adverseAlerts: DeserializableInt
  businessNumber: String
  created: DeserializableDateTime
  customer: CustomerEntityInput
  customerId: ID
  id: ID
  insolvencyRiskRating: RiskScore
  "The raw decimal value of the insolvency risk rating"
  insolvencyRiskRatingValue: DeserializableFloat
  "Alares report in json"
  jsonreport: String
  lastUpdated: DateOnly
  modified: DeserializableDateTime
  "Whether or not the status has been processed"
  processed: DeserializableBoolean
  reportID: DeserializableInt
}


"The input object for adding a new ApplicationEntity"
input ApplicationEntityInput {
  "Application Date"
  applicationDate: DateOnly
  applicationName: String
  businessEntity: BusinessEntityInput
  businessEntityId: ID
  "Contact Name"
  contactName: String
  created: DeserializableDateTime
  email: String
  id: ID
  "Is the application active"
  isActive: DeserializableBoolean
  legacyID: String
  "Business Logo"
  logoId: ID
  modified: DeserializableDateTime
  phone: String
  "Approve Privacy Policy"
  privacyPolicyId: ID
  "Application Terms and Conditions"
  termsAndConditionsId: ID
}


"The input object for adding a new AtbFileEntity"
input AtbFileEntityInput {
  "Whether or not new customers should be added by default"
  addNewCustomers: DeserializableBoolean
  atbFileType: AtbFileType
  atbJobStatus: AtbJobStatus
  atbProcessingStatus: AtbProcessingStatus
  atbRecords: [AtbRecordEntityInput]
  businessEntity: BusinessEntityInput
  businessEntityId: ID
  created: DeserializableDateTime
  fileName: String
  id: ID
  modified: DeserializableDateTime
  "Target Year and Month for the data. Day should always be 0."
  targetMonth: DateOnly
  user: UserEntityInput
  userId: ID
}


"The input object for adding a new AtbRecordEntity"
input AtbRecordEntityInput {
  abn: String
  acn: String
  address: AddressEntityInput
  atbFile: AtbFileEntityInput
  atbFileId: ID
  created: DeserializableDateTime
  customer: CustomerEntityInput
  customerId: ID
  customerName: String
  debtorID: String
  dp120plus: DeserializableFloat
  dp1to30: DeserializableFloat
  dp31to60: DeserializableFloat
  dp61to90: DeserializableFloat
  dp91to120: DeserializableFloat
  dpcurrent: DeserializableFloat
  entityName: String
  "Whether or not the ATB Record has been processed"
  errorsProcessed: DeserializableBoolean
  id: ID
  modified: DeserializableDateTime
  "Json object of original data"
  originalData: String
  "The payment risk rating for the customer given this set of ATB data"
  paymentRiskRating: RiskScore
  phone: String
  "Json Object with Errors from processing"
  processingErrors: String
  "Json Object with Warnings from processing"
  processingWarnings: String
  sicCode: String
  terms: String
  totalDebt: DeserializableFloat
  trusteeACN: String
}


"The input object for adding a new BusinessEntity"
input BusinessEntityInput {
  "ABN"
  abn: String
  "ABR Last Updated"
  abrLastUpdated: DeserializableDateTime
  "ACN"
  acn: String
  "The entity name sent back in the ACN response"
  acnEntityName: String
  "The entity type code sent back in the ACN response"
  acnEntityTypeCode: String
  "ACN Last Updated"
  acnLastUpdated: DeserializableDateTime
  "Status of the ACN"
  acnStatus: String
  address: AddressEntityInput
  applicationss: [ApplicationEntityInput]
  atbFiles: [AtbFileEntityInput]
  created: DeserializableDateTime
  "The Creditor ID is used in the ATB reports"
  creditorID: String
  customerss: [CustomerEntityInput]
  "DoB field uses for sole traders"
  dateOfBirth: DeserializableDateTime
  "Email"
  email: String
  "Enabled for Approve"
  enabledForApprove: DeserializableBoolean
  "Enabled for PPSR"
  enabledForPPSR: DeserializableBoolean
  "Entity Name retrieve from ABN lookup"
  entityName: String
  entityStatus: String
  "Entity Type Code retrieve from ABN lookup"
  entityTypeCode: String
  "Entity Type Description retrieve from ABN lookup"
  entityTypeDescription: String
  "Is the business of type Finance"
  finance: DeserializableBoolean
  "Is the business of a Hire business type"
  hire: DeserializableBoolean
  id: ID
  "Is Active"
  isActive: DeserializableBoolean
  "Legacy ID"
  legacyID: DeserializableInt
  modified: DeserializableDateTime
  "Name"
  name: String
  organisation: OrganisationEntityInput
  organisationId: ID
  "Phone"
  phone: String
  primaryOrganisation: OrganisationEntityInput
  spgss: [SpgEntityInput]
  "Brief summary of the business"
  summary: String
  "Is the business of type Supply Goods and Equipment"
  supplyGnE: DeserializableBoolean
  trusteeACN: String
  "The entity name sent back by the trustee ACN response"
  trusteeACNEntityName: String
  "The entity type code for the trustee ACN reponse"
  trusteeACNEntityTypeCode: String
  "Trustee ACN Last Updated"
  trusteeACNLastUpdated: DeserializableDateTime
  "Trustee ACN Status"
  trusteeACNStatus: String
  trusteeName: String
  "Boolean for determining to use the organisation email instead of the saved one."
  useOrganisationEmail: DeserializableBoolean
  users: [BusinessEntityUserInput]
}


"The input object for adding a new BusinessEntityUser"
input BusinessEntityUserInput {
  businessEntity: BusinessEntityInput
  businessEntityId: ID
  created: DeserializableDateTime
  id: ID
  modified: DeserializableDateTime
  user: UserEntityInput
  userId: ID
}


"The input object for adding a new CreditBureauEntity"
input CreditBureauEntityInput {
  created: DeserializableDateTime
  id: ID
  modified: DeserializableDateTime
  "Name"
  name: String
  organisations: [OrganisationAuthorisedCreditBureauInput]
}


"The input object for adding a new CustomerEntity"
input CustomerEntityInput {
  "ABN"
  abn: String
  "ABN is current indicator"
  abnActive: DeserializableBoolean
  "ABR Last Updated"
  abrLastUpdated: DeserializableDateTime
  accountNumber: String
  "Accounts Contact"
  accountsContact: String
  "Accounts Phone Number"
  accountsPhoneNumber: String
  "ACN"
  acn: String
  "The entity name sent back in the ACN response"
  acnEntityName: String
  "The entity type code sent back in the ACN response"
  acnEntityTypeCode: String
  acnLastUpdated: DeserializableDateTime
  acnStatus: String
  "Active Since"
  activeSince: DeserializableDateTime
  alaress: [AlaresEntityInput]
  applicationNumber: String
  applicationStatus: String
  atbRecords: [AtbRecordEntityInput]
  businessEntity: BusinessEntityInput
  businessEntityId: ID
  businessName: String
  created: DeserializableDateTime
  creditLimit: String
  "Date of Birth"
  dateOfBirth: DateOnly
  "A customer's debtor ID represents the unique identifier used by business entities to represent their customers"
  debtorID: String
  "Email"
  email: String
  "Entity Name"
  entityName: String
  "Entity Status"
  entityStatus: String
  "Entity Type Code"
  entityTypeCode: String
  "Entity Type Description"
  entityTypeDescription: String
  "First Name"
  firstName: String
  id: ID
  "Is Active"
  isActive: DeserializableBoolean
  "Last Name"
  lastName: String
  "Locality"
  locality: String
  modified: DeserializableDateTime
  "Name for Invoice"
  nameForInvoice: String
  organisation: OrganisationEntityInput
  organisationId: ID
  "Phone"
  phone: String
  physicalAddress: AddressEntityInput
  postalAddress: AddressEntityInput
  "Purchasing Officer"
  purchasingOfficer: String
  purchasingOfficerEmail: String
  "Record Updated"
  recordUpdated: DeserializableDateTime
  "Registered for GST"
  registeredForGST: DeserializableBoolean
  "Statements Contact"
  statementsContact: String
  "Statements Email"
  statementsEmail: String
  "Tax Invoices Contact"
  taxInvoicesContact: String
  "Tax Invoices Email"
  taxInvoicesEmail: String
  "Trading terms"
  tradingTerms: String
  trusteeACN: String
  "The entity name sent back by the trustee ACN response"
  trusteeACNEntityName: String
  "The entity type code for the trustee ACN reponse"
  trusteeACNEntityTypeCode: String
  trusteeACNLastUpdated: DeserializableDateTime
  trusteeACNStatus: String
  trusteeName: String
}


"The input object for adding a new DiscountEntity"
input DiscountEntityInput {
  created: DeserializableDateTime
  discountPercent: DeserializableInt
  "Discount apply from the moment they are created until their expiration date"
  expirationDate: DateOnly
  id: ID
  modified: DeserializableDateTime
  organisation: OrganisationEntityInput
  organisationId: ID
  "The source of the discount"
  source: DiscountSource
}


"The input object for adding a new DocumentEntity"
input DocumentEntityInput {
  created: DeserializableDateTime
  fileId: ID
  id: ID
  modified: DeserializableDateTime
  "Name"
  name: String
}


input HasConditionType {
  conditions: [[WhereExpressionGraph]]
  negate: Boolean
  path: String
}


"The input object for adding a new IndustryCodesEntity"
input IndustryCodesEntityInput {
  "Code"
  code: String
  created: DeserializableDateTime
  "Description"
  description: String
  id: ID
  modified: DeserializableDateTime
  organisationss: [OrganisationEntityInput]
}


"The input object for adding a new InvoiceEntity"
input InvoiceEntityInput {
  created: DeserializableDateTime
  "Customer Count"
  customerCount: DeserializableInt
  "Discount Price"
  discountPrice: DeserializableFloat
  "Final Price"
  finalPrice: DeserializableFloat
  id: ID
  "Line items that make up the Final Price"
  lineItems: String
  modified: DeserializableDateTime
  "Monthly Exposure"
  monthlyExposure: DeserializableFloat
  "Monthly Price"
  monthlyPrice: DeserializableFloat
  organisation: OrganisationEntityInput
  organisationId: ID
  "The name of the referral partner that referred this Organisation"
  referredBy: String
  "User Count"
  userCount: DeserializableInt
  "Using Approve"
  usingApprove: DeserializableBoolean
  "Using Monitor"
  usingMonitor: DeserializableBoolean
  "Using PPSR"
  usingPPSR: DeserializableBoolean
}


"The input object for adding a new MonthlyExposurePricingTierEntity"
input MonthlyExposurePricingTierEntityInput {
  created: DeserializableDateTime
  id: ID
  "Maximum Monthly Exposure"
  maximumMonthlyExposure: DeserializableInt
  modified: DeserializableDateTime
  "Price"
  price: DeserializableInt
}


"The input object for adding a new OptionHowDidYouHearEntity"
input OptionHowDidYouHearEntityInput {
  created: DeserializableDateTime
  id: ID
  modified: DeserializableDateTime
  name: String
}


"The input object for adding a new OptionReferrerCharityEntity"
input OptionReferrerCharityEntityInput {
  created: DeserializableDateTime
  description: String
  id: ID
  modified: DeserializableDateTime
  name: String
}


input OrderByGraph {
  "Weather or not the field is descending"
  descending: Boolean
  "The field to order by"
  path: String!
}


"The input object for adding a new OrganisationAuthorisedCreditBureau"
input OrganisationAuthorisedCreditBureauInput {
  authorisedCreditBureau: CreditBureauEntityInput
  authorisedCreditBureauId: ID
  created: DeserializableDateTime
  id: ID
  modified: DeserializableDateTime
  organisation: OrganisationEntityInput
  organisationId: ID
}


"The input object for adding a new OrganisationEntity"
input OrganisationEntityInput {
  "Date the user last accepted terms. If this is prior to the last time the terms were updated, the user may need to accept them again."
  acceptedterms: DeserializableDateTime
  "Approve Enabled"
  approveEnabled: DeserializableBoolean
  authorisedCreditBureaus: [OrganisationAuthorisedCreditBureauInput]
  businessEntitys: [BusinessEntityInput]
  created: DeserializableDateTime
  "CRiskCo Applicant ID"
  criskcoApplicantID: String
  "Customer Column Settings"
  customerColumnSettings: String
  "This customer count is used for pricing if the organisation has not added any customers yet in the Monitor platform"
  customerCount: DeserializableInt
  customerss: [CustomerEntityInput]
  discountss: [DiscountEntityInput]
  howDidYouHearAboutUs: String
  id: ID
  industryCodes: IndustryCodesEntityInput
  industryCodesId: ID
  "Intel Enabled"
  intelEnabled: DeserializableBoolean
  invoices: [InvoiceEntityInput]
  "Is Active"
  isActive: DeserializableBoolean
  "Is the organisation a client"
  isClient: DeserializableBoolean
  "Is the organisation a referral partner"
  isReferralPartner: DeserializableBoolean
  legacyID: DeserializableInt
  modified: DeserializableDateTime
  "This is the current monthly exposure of the organisation"
  monthlyExposure: DeserializableFloat
  "PPSR Enabled"
  ppsrEnabled: DeserializableBoolean
  primaryBusinessEntity: BusinessEntityInput
  primaryBusinessEntityId: ID
  referredRegistrationss: [RegistrationEntityInput]
  referrerAcceptedTerms: DeserializableBoolean
  referrerBSB: String
  "Bank Account Name for the referral partner"
  referrerBankAccountName: String
  referrerBankAccountNumber: String
  "The mode which they would like to receive commission"
  referrerBenefitType: ReferrerBenefitType
  "Other Business Type Description"
  referrerBusinessOther: String
  "What does your business do"
  referrerBusinessType: ReferrerBusinessType
  "The name of the charity they would like to receive their commission"
  referrerCharityName: String
  "How often does the organisaion receive the commission"
  referrerCommissionFrequency: ReferrerCommissionFrequency
  "The discount applied to referred clients from this organisation"
  referrerCommissionPercent: DeserializableInt
  registration: RegistrationEntityInput
  users: [UserEntityInput]
}


"The input object for adding a new RegistrationEntity"
input RegistrationEntityInput {
  "Date registration was finished. Null if registration is still pending."
  completedDate: DeserializableDateTime
  created: DeserializableDateTime
  createdOrganisation: OrganisationEntityInput
  createdOrganisationId: ID
  createdUser: UserEntityInput
  createdUserId: ID
  id: ID
  modified: DeserializableDateTime
  "Organisation Name"
  organisationName: String
  "Products"
  products: String
  "The email of the person that the referral link was created for"
  refereeEmail: String
  "The name of the person that the referral link was created for"
  refereeName: String
  "JSON field to hold information for the referral partner registration"
  referralData: String
  referralStatus: RegistrationStatus
  referringOrganisation: OrganisationEntityInput
  referringOrganisationId: ID
  referringUser: UserEntityInput
  referringUserId: ID
  "JSON field used to hold contents of various questions"
  registrationData: String
  registrationFiless: [RegistrationFileEntityInput]
  "The actual start date of the registration, as registration can be created before actually being started"
  startDate: DateOnly
  "Status"
  status: RegistrationStatus
  "User Email"
  userEmail: String
  "User Name"
  userName: String
}


"The input object for adding a new RegistrationFileEntity"
input RegistrationFileEntityInput {
  created: DeserializableDateTime
  "File"
  fileId: ID
  id: ID
  modified: DeserializableDateTime
  registration: RegistrationEntityInput
  registrationId: ID
}


"The input object for adding a new SpgEntity"
input SpgEntityInput {
  accessCode: String
  businessEntity: BusinessEntityInput
  businessEntityId: ID
  contactName: String
  created: DeserializableDateTime
  email: String
  id: ID
  isActive: DeserializableBoolean
  legacyID: String
  modified: DeserializableDateTime
  "Comma seperated string of organisation numbers"
  organisationalNumbers: String
  phone: String
  spgNumber: String
}


"The input object for adding a new TrustEntityCodesEntity"
input TrustEntityCodesEntityInput {
  created: DeserializableDateTime
  "The entity code"
  entityCode: String
  id: ID
  modified: DeserializableDateTime
}


"The input object for creating a new UserEntity"
input UserEntityCreateInput {
  atbFiles: [AtbFileEntityInput]
  businessEntitys: [BusinessEntityUserInput]
  "Can Access Approve"
  canAccessApprove: DeserializableBoolean
  "Can Access Intel"
  canAccessIntel: DeserializableBoolean
  "Can Access PPSR"
  canAccessPPSR: DeserializableBoolean
  created: DeserializableDateTime
  email: String
  "First Name"
  firstName: String
  id: ID
  "Is Active"
  isActive: DeserializableBoolean
  "Last Name"
  lastName: String
  legacyID: DeserializableInt
  modified: DeserializableDateTime
  organisation: OrganisationEntityInput
  organisationId: ID
  password: String
  "Permission Overrides"
  permissionOverrides: String
  "Phone"
  phone: String
  referredRegistrationss: [RegistrationEntityInput]
  registration: RegistrationEntityInput
  "User Type"
  userType: UserType
}


"The input object for adding a new UserEntity"
input UserEntityInput {
  atbFiles: [AtbFileEntityInput]
  businessEntitys: [BusinessEntityUserInput]
  "Can Access Approve"
  canAccessApprove: DeserializableBoolean
  "Can Access Intel"
  canAccessIntel: DeserializableBoolean
  "Can Access PPSR"
  canAccessPPSR: DeserializableBoolean
  created: DeserializableDateTime
  "First Name"
  firstName: String
  id: ID
  "Is Active"
  isActive: DeserializableBoolean
  "Last Name"
  lastName: String
  legacyID: DeserializableInt
  modified: DeserializableDateTime
  organisation: OrganisationEntityInput
  organisationId: ID
  "Permission Overrides"
  permissionOverrides: String
  "Phone"
  phone: String
  referredRegistrationss: [RegistrationEntityInput]
  registration: RegistrationEntityInput
  "User Type"
  userType: UserType
}


input WhereExpressionGraph {
  case: StringComparison
  comparison: Comparison
  negate: Boolean
  path: String
  value: [String]
}

schema {
  query: AccessQuery
  mutation: Mutation
}
`;class kT{constructor(s){tc(this,"mapping");this.mapping=s}getFor(s){return this.mapping.get(s.name)}}var Ni;(function(t){t.UNION="union",t.ARGUMENT="argument",t.FIELD="field"})(Ni||(Ni={}));function jT(t){const s=new Map;return MT(t,r=>{Ke(r)&&HT(r,a=>{const u=yo(a.type);uo(s,u).references.push({kind:Ni.FIELD,parent:r,by:a}),zT(a,y=>{const T=yo(y.type);uo(s,T).references.push({kind:Ni.ARGUMENT,field:a,type:r,by:y})})}),Cn(r)&&r.getTypes().forEach(a=>{uo(s,a).references.push({kind:Ni.UNION,by:r})})}),new kT(s)}function MT(t,s){Object.entries(t.getTypeMap()).forEach(([,r])=>{r.name.startsWith("__")||s(r)})}function HT(t,s){Object.entries(t.getFields()).forEach(([,r])=>{s(r)})}function zT(t,s){Object.entries(t.args).forEach(([,r])=>{s(r)})}function uo(t,s){let r=t.get(s.name);return r||(r={references:[]},t.set(s.name,r)),r}function yo(t){return ze(t)||Ct(t)?yo(t.ofType):t}const $e=tI(),Eo=Zg(Vg.DIRECTIVES,[]);var gc;const VT=Ur((gc=$e.getQueryType())==null?void 0:gc.getFields());var mc;const $T=Ur((mc=$e.getMutationType())==null?void 0:mc.getFields());var Tc;const YT=Ur((Tc=$e.getSubscriptionType())==null?void 0:Tc.getFields()),Ao=mn.keyBy(id(),t=>t.name.toLocaleLowerCase()),QT=mn.mapValues(Ao,t=>{const s=Eo.find(r=>(r==null?void 0:r.name)===t.name||(r==null?void 0:r.name)==="*");return s?s.args.some(r=>r==="*")?t.args:s.args.map(r=>t.args.find(a=>a.name===r)).filter(r=>!!r):[]}),qT=Ur($e.getTypeMap()),JT=jT($e);function Ur(t){return mn.mapKeys(t||{},(s,r)=>r.toLocaleLowerCase())}function XT(){return mn.size($e.getTypeMap())<=10}function cI(){return[co("Queries",$e.getQueryType()),co("Mutations",$e.getMutationType()),co("Subscriptions",$e.getSubscriptionType()),iI(),eI()].filter(t=>!!t)}function co(t,s){return ZT(t,KT(s))}function KT(t){return mn.sortBy((t==null?void 0:t.getFields())||{},s=>s.name)}function ZT(t,s){return s.length===0?null:{type:"menu",title:t,children:s.map(r=>({type:"page",title:r.name,section:t,deprecated:!!r.deprecationReason,href:go.joinUrlPaths(mo,t.toLocaleLowerCase(),r.name)}))}}function eI(){return XT()?null:{type:"menu",title:"Types",children:mn.sortBy(mn.map($e.getTypeMap()),s=>s.name).filter(s=>!s.name.startsWith("__")).map(s=>({type:"page",title:s.name,section:"Types",href:go.joinUrlPaths(mo,"types",s.name)}))}}function dI(){return!!$e.getQueryType()}function lI(t){return VT[t.toLocaleLowerCase()]}function pI(){return!!$e.getMutationType()}function hI(t){return $T[t.toLocaleLowerCase()]}function fI(){return!!$e.getSubscriptionType()}function yI(t){return YT[t.toLocaleLowerCase()]}function EI(t){return qT[t.toLocaleLowerCase()]}function nI(t){return Ao[t.toLocaleLowerCase()]}function gI(t){return nI(t.name)!==void 0}function mI(){return mn.size(Ao)>0}function TI(t){return QT[t.name.toLocaleLowerCase()]||[]}function II(t){if(t)return JT.getFor(t)}function DI(t){return mn.flatMap(t.getFields(),s=>({field:s,possibleDescriptions:td(s,t)}))}function td(t,s){return t?t.description?[{description:t.description,from:s}]:Ke(s)?s.getInterfaces().flatMap(r=>td(r.getFields()[t.name],r)):[]:[]}function id(){return Eo.some(t=>(t==null?void 0:t.name)==="*")?$e.getDirectives().filter(t=>!["include","skip","deprecated","specifiedBy"].includes(t.name)):Eo.filter(t=>!!(t!=null&&t.name)).map(({name:t})=>t?$e.getDirective(t):void 0).filter(t=>!!t)}function tI(){return Ec.trim().length===0?UT(JSON.parse(JSON.stringify({__schema:{types:[]}}))):PT(Ec)}function iI(){const t=id();if(t.length!==0)return{type:"menu",title:"Directives",children:t.map(s=>({type:"page",title:s.name,href:go.joinUrlPaths(mo,"directives",s.name),section:"Directives"}))}}export{DI as A,EI as B,II as C,gI as D,uI as E,cI as F,m as K,Ni as R,Ke as a,Ve as b,gt as c,Cn as d,Bn as e,XT as f,Zg as g,aI as h,Rn as i,TI as j,mI as k,mn as l,nI as m,pI as n,hI as o,dI as p,lI as q,fI as r,$e as s,Vg as t,yI as u,zm as v,ze as w,Ct as x,Wc as y,Uc as z};
