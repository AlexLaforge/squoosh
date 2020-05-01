
var imagequant = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(imagequant) {
  imagequant = imagequant || {};

var e;e||(e=typeof imagequant !== 'undefined' ? imagequant : {});var r={},t;for(t in e)e.hasOwnProperty(t)&&(r[t]=e[t]);var aa=!1,z=!1,ba=!1,ca=!1;aa="object"===typeof window;z="function"===typeof importScripts;ba="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;ca=!aa&&!ba&&!z;var A="",da,B,ea,ha;
if(ba)A=z?require("path").dirname(A)+"/":__dirname+"/",da=function(a,b){ea||(ea=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);return ea.readFileSync(a,b?null:"utf8")},B=function(a){a=da(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||C("Assertion failed: undefined");return a},1<process.argv.length&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(a){throw a;}),process.on("unhandledRejection",C),e.inspect=function(){return"[Emscripten Module object]"};
else if(ca)"undefined"!=typeof read&&(da=function(a){return read(a)}),B=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||C("Assertion failed: undefined");return a},"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(aa||z)z?A=self.location.href:document.currentScript&&(A=document.currentScript.src),_scriptDir&&
(A=_scriptDir),0!==A.indexOf("blob:")?A=A.substr(0,A.lastIndexOf("/")+1):A="",da=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},z&&(B=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});var ia=e.print||console.log.bind(console),E=e.printErr||console.warn.bind(console);for(t in r)r.hasOwnProperty(t)&&(e[t]=r[t]);r=null;var F;e.wasmBinary&&(F=e.wasmBinary);var noExitRuntime;
e.noExitRuntime&&(noExitRuntime=e.noExitRuntime);"object"!==typeof WebAssembly&&E("no native wasm support detected");var G,ja=new WebAssembly.Table({initial:49,maximum:49,element:"anyfunc"}),ka=!1,la="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ma(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&la)return la.decode(a.subarray(b,c));for(d="";b<c;){var f=a[b++];if(f&128){var g=a[b++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|g);else{var n=a[b++]&63;f=224==(f&240)?(f&15)<<12|g<<6|n:(f&7)<<18|g<<12|n<<6|a[b++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}return d}
function na(a,b,c){var d=H;if(0<c){c=b+c-1;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var n=a.charCodeAt(++f);g=65536+((g&1023)<<10)|n&1023}if(127>=g){if(b>=c)break;d[b++]=g}else{if(2047>=g){if(b+1>=c)break;d[b++]=192|g>>6}else{if(65535>=g){if(b+2>=c)break;d[b++]=224|g>>12}else{if(b+3>=c)break;d[b++]=240|g>>18;d[b++]=128|g>>12&63}d[b++]=128|g>>6&63}d[b++]=128|g&63}}d[b]=0}}var oa="undefined"!==typeof TextDecoder?new TextDecoder("utf-16le"):void 0;
function pa(a){var b;for(b=a>>1;I[b];)++b;b<<=1;if(32<b-a&&oa)return oa.decode(H.subarray(a,b));b=0;for(var c="";;){var d=I[a+2*b>>1];if(0==d)return c;++b;c+=String.fromCharCode(d)}}function qa(a,b,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var d=b;c=c<2*a.length?c/2:a.length;for(var f=0;f<c;++f)I[b>>1]=a.charCodeAt(f),b+=2;I[b>>1]=0;return b-d}function ra(a){return 2*a.length}
function sa(a){for(var b=0,c="";;){var d=J[a+4*b>>2];if(0==d)return c;++b;65536<=d?(d-=65536,c+=String.fromCharCode(55296|d>>10,56320|d&1023)):c+=String.fromCharCode(d)}}function ta(a,b,c){void 0===c&&(c=2147483647);if(4>c)return 0;var d=b;c=d+c-4;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var n=a.charCodeAt(++f);g=65536+((g&1023)<<10)|n&1023}J[b>>2]=g;b+=4;if(b+4>c)break}J[b>>2]=0;return b-d}
function ua(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&++c;b+=4}return b}var K,va,H,I,wa,J,L,xa,ya;function za(a){K=a;e.HEAP8=va=new Int8Array(a);e.HEAP16=I=new Int16Array(a);e.HEAP32=J=new Int32Array(a);e.HEAPU8=H=new Uint8Array(a);e.HEAPU16=wa=new Uint16Array(a);e.HEAPU32=L=new Uint32Array(a);e.HEAPF32=xa=new Float32Array(a);e.HEAPF64=ya=new Float64Array(a)}var Aa=e.INITIAL_MEMORY||16777216;e.wasmMemory?G=e.wasmMemory:G=new WebAssembly.Memory({initial:Aa/65536});
G&&(K=G.buffer);Aa=K.byteLength;za(K);J[1660]=5249680;function Ba(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.ra;"number"===typeof c?void 0===b.ia?e.dynCall_v(c):e.dynCall_vi(c,b.ia):c(void 0===b.ia?null:b.ia)}}}var Ca=[],Da=[],Ea=[],Fa=[];function Ga(){var a=e.preRun.shift();Ca.unshift(a)}var M=0,Ha=null,N=null;e.preloadedImages={};e.preloadedAudios={};
function C(a){if(e.onAbort)e.onAbort(a);ia(a);E(a);ka=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ia(){var a=O;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var O="imagequant.wasm";if(!Ia()){var Ja=O;O=e.locateFile?e.locateFile(Ja,A):A+Ja}
function Ka(){try{if(F)return new Uint8Array(F);if(B)return B(O);throw"both async and sync fetching of the wasm failed";}catch(a){C(a)}}function La(){return F||!aa&&!z||"function"!==typeof fetch?new Promise(function(a){a(Ka())}):fetch(O,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+O+"'";return a.arrayBuffer()}).catch(function(){return Ka()})}Da.push({ra:function(){Ma()}});
function Na(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var Oa=void 0;function P(a){for(var b="";H[a];)b+=Oa[H[a++]];return b}var Q={},R={},Pa={};function Qa(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}
function Ra(a,b){a=Qa(a);return(new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}function Sa(a){var b=Error,c=Ra(a,function(d){this.name=a;this.message=d;d=Error(d).stack;void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}
var Ta=void 0;function S(a){throw new Ta(a);}var Ua=void 0;function Va(a){throw new Ua(a);}function Wa(a,b,c){function d(h){h=c(h);h.length!==a.length&&Va("Mismatched type converter count");for(var k=0;k<a.length;++k)T(a[k],h[k])}a.forEach(function(h){Pa[h]=b});var f=Array(b.length),g=[],n=0;b.forEach(function(h,k){R.hasOwnProperty(h)?f[k]=R[h]:(g.push(h),Q.hasOwnProperty(h)||(Q[h]=[]),Q[h].push(function(){f[k]=R[h];++n;n===g.length&&d(f)}))});0===g.length&&d(f)}
function T(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||S('type "'+d+'" must have a positive integer typeid pointer');if(R.hasOwnProperty(a)){if(c.ua)return;S("Cannot register type '"+d+"' twice")}R[a]=b;delete Pa[a];Q.hasOwnProperty(a)&&(b=Q[a],delete Q[a],b.forEach(function(f){f()}))}function Xa(a){return{count:a.count,da:a.da,ea:a.ea,T:a.T,V:a.V,W:a.W,X:a.X}}
function Ya(a){S(a.S.V.U.name+" instance already deleted")}var Za=!1;function $a(){}function ab(a){--a.count.value;0===a.count.value&&(a.W?a.X.ba(a.W):a.V.U.ba(a.T))}function bb(a){if("undefined"===typeof FinalizationGroup)return bb=function(b){return b},a;Za=new FinalizationGroup(function(b){for(var c=b.next();!c.done;c=b.next())c=c.value,c.T?ab(c):console.warn("object already deleted: "+c.T)});bb=function(b){Za.register(b,b.S,b.S);return b};$a=function(b){Za.unregister(b.S)};return bb(a)}
var cb=void 0,db=[];function eb(){for(;db.length;){var a=db.pop();a.S.da=!1;a["delete"]()}}function U(){}var fb={};function gb(a,b){var c=e;if(void 0===c[a].Z){var d=c[a];c[a]=function(){c[a].Z.hasOwnProperty(arguments.length)||S("Function '"+b+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+c[a].Z+")!");return c[a].Z[arguments.length].apply(this,arguments)};c[a].Z=[];c[a].Z[d.oa]=d}}
function hb(a,b,c){e.hasOwnProperty(a)?((void 0===c||void 0!==e[a].Z&&void 0!==e[a].Z[c])&&S("Cannot register public name '"+a+"' twice"),gb(a,a),e.hasOwnProperty(c)&&S("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),e[a].Z[c]=b):(e[a]=b,void 0!==c&&(e[a].Aa=c))}function ib(a,b,c,d,f,g,n,h){this.name=a;this.constructor=b;this.aa=c;this.ba=d;this.Y=f;this.sa=g;this.fa=n;this.qa=h}
function jb(a,b,c){for(;b!==c;)b.fa||S("Expected null or instance of "+c.name+", got an instance of "+b.name),a=b.fa(a),b=b.Y;return a}function kb(a,b){if(null===b)return this.ja&&S("null is not a valid "+this.name),0;b.S||S('Cannot pass "'+V(b)+'" as a '+this.name);b.S.T||S("Cannot pass deleted object as a pointer of type "+this.name);return jb(b.S.T,b.S.V.U,this.U)}
function lb(a,b){if(null===b){this.ja&&S("null is not a valid "+this.name);if(this.ha){var c=this.wa();null!==a&&a.push(this.ba,c);return c}return 0}b.S||S('Cannot pass "'+V(b)+'" as a '+this.name);b.S.T||S("Cannot pass deleted object as a pointer of type "+this.name);!this.ga&&b.S.V.ga&&S("Cannot convert argument of type "+(b.S.X?b.S.X.name:b.S.V.name)+" to parameter type "+this.name);c=jb(b.S.T,b.S.V.U,this.U);if(this.ha)switch(void 0===b.S.W&&S("Passing raw pointer to smart pointer is illegal"),
this.ya){case 0:b.S.X===this?c=b.S.W:S("Cannot convert argument of type "+(b.S.X?b.S.X.name:b.S.V.name)+" to parameter type "+this.name);break;case 1:c=b.S.W;break;case 2:if(b.S.X===this)c=b.S.W;else{var d=b.clone();c=this.xa(c,mb(function(){d["delete"]()}));null!==a&&a.push(this.ba,c)}break;default:S("Unsupporting sharing policy")}return c}
function nb(a,b){if(null===b)return this.ja&&S("null is not a valid "+this.name),0;b.S||S('Cannot pass "'+V(b)+'" as a '+this.name);b.S.T||S("Cannot pass deleted object as a pointer of type "+this.name);b.S.V.ga&&S("Cannot convert argument of type "+b.S.V.name+" to parameter type "+this.name);return jb(b.S.T,b.S.V.U,this.U)}function ob(a){return this.fromWireType(L[a>>2])}function qb(a,b,c){if(b===c)return a;if(void 0===c.Y)return null;a=qb(a,b,c.Y);return null===a?null:c.qa(a)}var rb={};
function sb(a,b){for(void 0===b&&S("ptr should not be undefined");a.Y;)b=a.fa(b),a=a.Y;return rb[b]}function tb(a,b){b.V&&b.T||Va("makeClassHandle requires ptr and ptrType");!!b.X!==!!b.W&&Va("Both smartPtrType and smartPtr must be specified");b.count={value:1};return bb(Object.create(a,{S:{value:b}}))}
function W(a,b,c,d){this.name=a;this.U=b;this.ja=c;this.ga=d;this.ha=!1;this.ba=this.xa=this.wa=this.na=this.ya=this.va=void 0;void 0!==b.Y?this.toWireType=lb:(this.toWireType=d?kb:nb,this.$=null)}function ub(a,b,c){e.hasOwnProperty(a)||Va("Replacing nonexistant public symbol");void 0!==e[a].Z&&void 0!==c?e[a].Z[c]=b:(e[a]=b,e[a].oa=c)}
function X(a,b){a=P(a);var c=e["dynCall_"+a];for(var d=[],f=1;f<a.length;++f)d.push("a"+f);f="return function dynCall_"+(a+"_"+b)+"("+d.join(", ")+") {\n";f+="    return dynCall(rawFunction"+(d.length?", ":"")+d.join(", ")+");\n";c=(new Function("dynCall","rawFunction",f+"};\n"))(c,b);"function"!==typeof c&&S("unknown function pointer with signature "+a+": "+b);return c}var vb=void 0;function wb(a){a=xb(a);var b=P(a);Y(a);return b}
function yb(a,b){function c(g){f[g]||R[g]||(Pa[g]?Pa[g].forEach(c):(d.push(g),f[g]=!0))}var d=[],f={};b.forEach(c);throw new vb(a+": "+d.map(wb).join([", "]));}function zb(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function Ab(a,b,c){a instanceof Object||S(c+' with invalid "this": '+a);a instanceof b.U.constructor||S(c+' incompatible with "this" of type '+a.constructor.name);a.S.T||S("cannot call emscripten binding method "+c+" on deleted object");return jb(a.S.T,a.S.V.U,b.U)}
var Bb=[],Z=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Cb(a){4<a&&0===--Z[a].ka&&(Z[a]=void 0,Bb.push(a))}function mb(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=Bb.length?Bb.pop():Z.length;Z[b]={ka:1,value:a};return b}}function V(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}
function Db(a,b){switch(b){case 2:return function(c){return this.fromWireType(xa[c>>2])};case 3:return function(c){return this.fromWireType(ya[c>>3])};default:throw new TypeError("Unknown float type: "+a);}}function Eb(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=Ra(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}
function Fb(a,b){for(var c=[],d=0;d<a;d++)c.push(J[(b>>2)+d]);return c}function Gb(a,b,c){switch(b){case 0:return c?function(d){return va[d]}:function(d){return H[d]};case 1:return c?function(d){return I[d>>1]}:function(d){return wa[d>>1]};case 2:return c?function(d){return J[d>>2]}:function(d){return L[d>>2]};default:throw new TypeError("Unknown integer type: "+a);}}for(var Hb=[null,[],[]],Ib=Array(256),Jb=0;256>Jb;++Jb)Ib[Jb]=String.fromCharCode(Jb);Oa=Ib;Ta=e.BindingError=Sa("BindingError");
Ua=e.InternalError=Sa("InternalError");U.prototype.isAliasOf=function(a){if(!(this instanceof U&&a instanceof U))return!1;var b=this.S.V.U,c=this.S.T,d=a.S.V.U;for(a=a.S.T;b.Y;)c=b.fa(c),b=b.Y;for(;d.Y;)a=d.fa(a),d=d.Y;return b===d&&c===a};U.prototype.clone=function(){this.S.T||Ya(this);if(this.S.ea)return this.S.count.value+=1,this;var a=bb(Object.create(Object.getPrototypeOf(this),{S:{value:Xa(this.S)}}));a.S.count.value+=1;a.S.da=!1;return a};
U.prototype["delete"]=function(){this.S.T||Ya(this);this.S.da&&!this.S.ea&&S("Object already scheduled for deletion");$a(this);ab(this.S);this.S.ea||(this.S.W=void 0,this.S.T=void 0)};U.prototype.isDeleted=function(){return!this.S.T};U.prototype.deleteLater=function(){this.S.T||Ya(this);this.S.da&&!this.S.ea&&S("Object already scheduled for deletion");db.push(this);1===db.length&&cb&&cb(eb);this.S.da=!0;return this};W.prototype.ta=function(a){this.na&&(a=this.na(a));return a};
W.prototype.ma=function(a){this.ba&&this.ba(a)};W.prototype.argPackAdvance=8;W.prototype.readValueFromPointer=ob;W.prototype.deleteObject=function(a){if(null!==a)a["delete"]()};
W.prototype.fromWireType=function(a){function b(){return this.ha?tb(this.U.aa,{V:this.va,T:c,X:this,W:a}):tb(this.U.aa,{V:this,T:a})}var c=this.ta(a);if(!c)return this.ma(a),null;var d=sb(this.U,c);if(void 0!==d){if(0===d.S.count.value)return d.S.T=c,d.S.W=a,d.clone();d=d.clone();this.ma(a);return d}d=this.U.sa(c);d=fb[d];if(!d)return b.call(this);d=this.ga?d.pa:d.pointerType;var f=qb(c,this.U,d.U);return null===f?b.call(this):this.ha?tb(d.U.aa,{V:d,T:f,X:this,W:a}):tb(d.U.aa,{V:d,T:f})};
e.getInheritedInstanceCount=function(){return Object.keys(rb).length};e.getLiveInheritedInstances=function(){var a=[],b;for(b in rb)rb.hasOwnProperty(b)&&a.push(rb[b]);return a};e.flushPendingDeletes=eb;e.setDelayFunction=function(a){cb=a;db.length&&cb&&cb(eb)};vb=e.UnboundTypeError=Sa("UnboundTypeError");e.count_emval_handles=function(){for(var a=0,b=5;b<Z.length;++b)void 0!==Z[b]&&++a;return a};e.get_first_emval=function(){for(var a=5;a<Z.length;++a)if(void 0!==Z[a])return Z[a];return null};
var Lb={u:function(a,b,c,d,f){var g=Na(c);b=P(b);T(a,{name:b,fromWireType:function(n){return!!n},toWireType:function(n,h){return h?d:f},argPackAdvance:8,readValueFromPointer:function(n){if(1===c)var h=va;else if(2===c)h=I;else if(4===c)h=J;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(h[n>>g])},$:null})},p:function(a,b,c,d,f,g,n,h,k,l,m,q,v){m=P(m);g=X(f,g);h&&(h=X(n,h));l&&(l=X(k,l));v=X(q,v);var u=Qa(m);hb(u,function(){yb("Cannot construct "+m+" due to unbound types",
[d])});Wa([a,b,c],d?[d]:[],function(p){p=p[0];if(d){var w=p.U;var x=w.aa}else x=U.prototype;p=Ra(u,function(){if(Object.getPrototypeOf(this)!==y)throw new Ta("Use 'new' to construct "+m);if(void 0===D.la)throw new Ta(m+" has no accessible constructor");var pb=D.la[arguments.length];if(void 0===pb)throw new Ta("Tried to invoke ctor of "+m+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(D.la).toString()+") parameters instead!");return pb.apply(this,arguments)});
var y=Object.create(x,{constructor:{value:p}});p.prototype=y;var D=new ib(m,p,y,v,w,g,h,l);w=new W(m,D,!0,!1);x=new W(m+"*",D,!1,!1);var fa=new W(m+" const*",D,!1,!0);fb[a]={pointerType:x,pa:fa};ub(u,p);return[w,x,fa]})},d:function(a,b,c,d,f,g,n,h,k,l){b=P(b);f=X(d,f);Wa([],[a],function(m){m=m[0];var q=m.name+"."+b,v={get:function(){yb("Cannot access "+q+" due to unbound types",[c,n])},enumerable:!0,configurable:!0};k?v.set=function(){yb("Cannot access "+q+" due to unbound types",[c,n])}:v.set=function(){S(q+
" is a read-only property")};Object.defineProperty(m.U.aa,b,v);Wa([],k?[c,n]:[c],function(u){var p=u[0],w={get:function(){var y=Ab(this,m,q+" getter");return p.fromWireType(f(g,y))},enumerable:!0};if(k){k=X(h,k);var x=u[1];w.set=function(y){var D=Ab(this,m,q+" setter"),fa=[];k(l,D,x.toWireType(fa,y));zb(fa)}}Object.defineProperty(m.U.aa,b,w);return[]});return[]})},t:function(a,b){b=P(b);T(a,{name:b,fromWireType:function(c){var d=Z[c].value;Cb(c);return d},toWireType:function(c,d){return mb(d)},argPackAdvance:8,
readValueFromPointer:ob,$:null})},h:function(a,b,c){c=Na(c);b=P(b);T(a,{name:b,fromWireType:function(d){return d},toWireType:function(d,f){if("number"!==typeof f&&"boolean"!==typeof f)throw new TypeError('Cannot convert "'+V(f)+'" to '+this.name);return f},argPackAdvance:8,readValueFromPointer:Db(b,c),$:null})},c:function(a,b,c,d,f,g){var n=Fb(b,c);a=P(a);f=X(d,f);hb(a,function(){yb("Cannot call "+a+" due to unbound types",n)},b-1);Wa([],n,function(h){var k=[h[0],null].concat(h.slice(1)),l=h=a,m=
f,q=k.length;2>q&&S("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var v=null!==k[1]&&!1,u=!1,p=1;p<k.length;++p)if(null!==k[p]&&void 0===k[p].$){u=!0;break}var w="void"!==k[0].name,x="",y="";for(p=0;p<q-2;++p)x+=(0!==p?", ":"")+"arg"+p,y+=(0!==p?", ":"")+"arg"+p+"Wired";l="return function "+Qa(l)+"("+x+") {\nif (arguments.length !== "+(q-2)+") {\nthrowBindingError('function "+l+" called with ' + arguments.length + ' arguments, expected "+(q-2)+" args!');\n}\n";
u&&(l+="var destructors = [];\n");var D=u?"destructors":"null";x="throwBindingError invoker fn runDestructors retType classParam".split(" ");m=[S,m,g,zb,k[0],k[1]];v&&(l+="var thisWired = classParam.toWireType("+D+", this);\n");for(p=0;p<q-2;++p)l+="var arg"+p+"Wired = argType"+p+".toWireType("+D+", arg"+p+"); // "+k[p+2].name+"\n",x.push("argType"+p),m.push(k[p+2]);v&&(y="thisWired"+(0<y.length?", ":"")+y);l+=(w?"var rv = ":"")+"invoker(fn"+(0<y.length?", ":"")+y+");\n";if(u)l+="runDestructors(destructors);\n";
else for(p=v?1:2;p<k.length;++p)q=1===p?"thisWired":"arg"+(p-2)+"Wired",null!==k[p].$&&(l+=q+"_dtor("+q+"); // "+k[p].name+"\n",x.push(q+"_dtor"),m.push(k[p].$));w&&(l+="var ret = retType.fromWireType(rv);\nreturn ret;\n");x.push(l+"}\n");k=Eb(x).apply(null,m);ub(h,k,b-1);return[]})},b:function(a,b,c,d,f){function g(l){return l}b=P(b);-1===f&&(f=4294967295);var n=Na(c);if(0===d){var h=32-8*c;g=function(l){return l<<h>>>h}}var k=-1!=b.indexOf("unsigned");T(a,{name:b,fromWireType:g,toWireType:function(l,
m){if("number"!==typeof m&&"boolean"!==typeof m)throw new TypeError('Cannot convert "'+V(m)+'" to '+this.name);if(m<d||m>f)throw new TypeError('Passing a number "'+V(m)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+d+", "+f+"]!");return k?m>>>0:m|0},argPackAdvance:8,readValueFromPointer:Gb(b,n,0!==d),$:null})},a:function(a,b,c){function d(g){g>>=2;var n=L;return new f(K,n[g+1],n[g])}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,
Float32Array,Float64Array][b];c=P(c);T(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{ua:!0})},i:function(a,b){b=P(b);var c="std::string"===b;T(a,{name:b,fromWireType:function(d){var f=L[d>>2];if(c){var g=H[d+4+f],n=0;0!=g&&(n=g,H[d+4+f]=0);var h=d+4;for(g=0;g<=f;++g){var k=d+4+g;if(0==H[k]){h=h?ma(H,h,void 0):"";if(void 0===l)var l=h;else l+=String.fromCharCode(0),l+=h;h=k+1}}0!=n&&(H[d+4+f]=n)}else{l=Array(f);for(g=0;g<f;++g)l[g]=String.fromCharCode(H[d+4+g]);l=l.join("")}Y(d);
return l},toWireType:function(d,f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));var g="string"===typeof f;g||f instanceof Uint8Array||f instanceof Uint8ClampedArray||f instanceof Int8Array||S("Cannot pass non-string to std::string");var n=(c&&g?function(){for(var l=0,m=0;m<f.length;++m){var q=f.charCodeAt(m);55296<=q&&57343>=q&&(q=65536+((q&1023)<<10)|f.charCodeAt(++m)&1023);127>=q?++l:l=2047>=q?l+2:65535>=q?l+3:l+4}return l}:function(){return f.length})(),h=Kb(4+n+1);L[h>>2]=n;if(c&&g)na(f,h+
4,n+1);else if(g)for(g=0;g<n;++g){var k=f.charCodeAt(g);255<k&&(Y(h),S("String has UTF-16 code units that do not fit in 8 bits"));H[h+4+g]=k}else for(g=0;g<n;++g)H[h+4+g]=f[g];null!==d&&d.push(Y,h);return h},argPackAdvance:8,readValueFromPointer:ob,$:function(d){Y(d)}})},e:function(a,b,c){c=P(c);if(2===b){var d=pa;var f=qa;var g=ra;var n=function(){return wa};var h=1}else 4===b&&(d=sa,f=ta,g=ua,n=function(){return L},h=2);T(a,{name:c,fromWireType:function(k){var l=L[k>>2],m=n(),q=m[k+4+l*b>>h],v=
0;0!=q&&(v=q,m[k+4+l*b>>h]=0);var u=k+4;for(q=0;q<=l;++q){var p=k+4+q*b;if(0==m[p>>h]){u=d(u);if(void 0===w)var w=u;else w+=String.fromCharCode(0),w+=u;u=p+b}}0!=v&&(m[k+4+l*b>>h]=v);Y(k);return w},toWireType:function(k,l){"string"!==typeof l&&S("Cannot pass non-string to C++ string type "+c);var m=g(l),q=Kb(4+m+b);L[q>>2]=m>>h;f(l,q+4,m+b);null!==k&&k.push(Y,q);return q},argPackAdvance:8,readValueFromPointer:ob,$:function(k){Y(k)}})},l:function(a,b){b=P(b);T(a,{za:!0,name:b,argPackAdvance:0,fromWireType:function(){},
toWireType:function(){}})},j:Cb,n:function(a){4<a&&(Z[a].ka+=1)},k:function(a,b){var c=R[a];void 0===c&&S("_emval_take_value has unknown type "+wb(a));a=c.readValueFromPointer(b);return mb(a)},g:function(){C()},r:function(a,b,c){H.copyWithin(a,b,b+c)},s:function(a){var b=H.length;if(2147418112<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);a:{try{G.grow(Math.min(2147418112,d)-K.byteLength+65535>>16);za(G.buffer);
var f=1;break a}catch(g){}f=void 0}if(f)return!0}return!1},m:function(){return 0},o:function(){},f:function(a,b,c,d){for(var f=0,g=0;g<c;g++){for(var n=J[b+8*g>>2],h=J[b+(8*g+4)>>2],k=0;k<h;k++){var l=H[n+k],m=Hb[a];0===l||10===l?((1===a?ia:E)(ma(m,0)),m.length=0):m.push(l)}f+=h}J[d>>2]=f;return 0},memory:G,q:function(){},table:ja},Mb=function(){function a(f){e.asm=f.exports;M--;e.monitorRunDependencies&&e.monitorRunDependencies(M);0==M&&(null!==Ha&&(clearInterval(Ha),Ha=null),N&&(f=N,N=null,f()))}
function b(f){a(f.instance)}function c(f){return La().then(function(g){return WebAssembly.instantiate(g,d)}).then(f,function(g){E("failed to asynchronously prepare wasm: "+g);C(g)})}var d={a:Lb};M++;e.monitorRunDependencies&&e.monitorRunDependencies(M);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return E("Module.instantiateWasm callback failed with error: "+f),!1}(function(){if(F||"function"!==typeof WebAssembly.instantiateStreaming||Ia()||"function"!==typeof fetch)return c(b);
fetch(O,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(g){E("wasm streaming compile failed: "+g);E("falling back to ArrayBuffer instantiation");c(b)})})})();return{}}();e.asm=Mb;
var Ma=e.___wasm_call_ctors=function(){return(Ma=e.___wasm_call_ctors=e.asm.v).apply(null,arguments)},Kb=e._malloc=function(){return(Kb=e._malloc=e.asm.w).apply(null,arguments)},Y=e._free=function(){return(Y=e._free=e.asm.x).apply(null,arguments)},xb=e.___getTypeName=function(){return(xb=e.___getTypeName=e.asm.y).apply(null,arguments)};e.___embind_register_native_and_builtin_types=function(){return(e.___embind_register_native_and_builtin_types=e.asm.z).apply(null,arguments)};
e.dynCall_ii=function(){return(e.dynCall_ii=e.asm.A).apply(null,arguments)};e.dynCall_vi=function(){return(e.dynCall_vi=e.asm.B).apply(null,arguments)};e.dynCall_iii=function(){return(e.dynCall_iii=e.asm.C).apply(null,arguments)};e.dynCall_viii=function(){return(e.dynCall_viii=e.asm.D).apply(null,arguments)};e.dynCall_viiiiif=function(){return(e.dynCall_viiiiif=e.asm.E).apply(null,arguments)};e.dynCall_viiiif=function(){return(e.dynCall_viiiif=e.asm.F).apply(null,arguments)};
e.dynCall_i=function(){return(e.dynCall_i=e.asm.G).apply(null,arguments)};e.dynCall_v=function(){return(e.dynCall_v=e.asm.H).apply(null,arguments)};e.dynCall_iiiiiif=function(){return(e.dynCall_iiiiiif=e.asm.I).apply(null,arguments)};e.dynCall_iiiiif=function(){return(e.dynCall_iiiiif=e.asm.J).apply(null,arguments)};e.dynCall_vif=function(){return(e.dynCall_vif=e.asm.K).apply(null,arguments)};e.dynCall_iiii=function(){return(e.dynCall_iiii=e.asm.L).apply(null,arguments)};
e.dynCall_jiji=function(){return(e.dynCall_jiji=e.asm.M).apply(null,arguments)};e.dynCall_iidiiii=function(){return(e.dynCall_iidiiii=e.asm.N).apply(null,arguments)};e.dynCall_vii=function(){return(e.dynCall_vii=e.asm.O).apply(null,arguments)};e.dynCall_viiiiii=function(){return(e.dynCall_viiiiii=e.asm.P).apply(null,arguments)};e.dynCall_viiiii=function(){return(e.dynCall_viiiii=e.asm.Q).apply(null,arguments)};e.dynCall_viiii=function(){return(e.dynCall_viiii=e.asm.R).apply(null,arguments)};
e.asm=Mb;var Nb;e.then=function(a){if(Nb)a(e);else{var b=e.onRuntimeInitialized;e.onRuntimeInitialized=function(){b&&b();a(e)}}return e};N=function Ob(){Nb||Pb();Nb||(N=Ob)};
function Pb(){function a(){if(!Nb&&(Nb=!0,e.calledRun=!0,!ka)){Ba(Da);Ba(Ea);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var b=e.postRun.shift();Fa.unshift(b)}Ba(Fa)}}if(!(0<M)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ga();Ba(Ca);0<M||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);a()},1)):a())}}
e.run=Pb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();noExitRuntime=!0;Pb();


  return imagequant
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
      module.exports = imagequant;
    else if (typeof define === 'function' && define['amd'])
      define([], function() { return imagequant; });
    else if (typeof exports === 'object')
      exports["imagequant"] = imagequant;
    