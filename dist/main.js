!function(t){var r={};function n(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=r,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,r){if(1&r&&(t=n(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var a in t)n.d(e,a,function(r){return t[r]}.bind(null,a));return e},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="",n(n.s=1)}([function(t,r,n){var e;
/**
 * @license BitSet.js v5.0.5 4/3/2018
 * http://www.xarg.org/2014/03/javascript-bit-array/
 *
 * Copyright (c) 2016, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/
/**
 * @license BitSet.js v5.0.5 4/3/2018
 * http://www.xarg.org/2014/03/javascript-bit-array/
 *
 * Copyright (c) 2016, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/
!function(n){"use strict";var a=32,i=5;function o(t){return 16843009*((t=(858993459&(t-=t>>>1&1431655765))+(t>>>2&858993459))+(t>>>4)&252645135)>>>24}function f(t,r){for(var n=0,e=0;e<t.length;e++){n*=2;var a=(t[e]+n)/r|0;n=(t[e]+n)%r,t[e]=a}return n}function u(t,r){if(null==r)return t.data=[0,0,0,0,0,0,0,0,0,0],void(t._=0);if(r instanceof s)return t.data=r.data,void(t._=r._);switch(typeof r){case"number":t.data=[0|r],t._=0;break;case"string":var n=2,e=a;0===r.indexOf("0b")?r=r.substr(2):0===r.indexOf("0x")&&(r=r.substr(2),n=16,e=8),t.data=[],t._=0;for(var o=r.length-e,f=r.length;;){var u=parseInt(r.slice(o>0?o:0,f),n);if(isNaN(u))throw SyntaxError("Invalid param");if(t.data.push(0|u),o<=0)break;o-=e,f-=e}break;default:t.data=[0];var l=t.data;if(r instanceof Array){for(var c=r.length-1;c>=0;c--){var d=r[c];d===1/0?t._=-1:(h(t,d),l[d>>>i]|=1<<d)}break}if(Uint8Array&&r instanceof Uint8Array){h(t,8*r.length);for(c=0;c<r.length;c++)for(var v=r[c],g=0;g<8;g++){var p=8*c+g;l[p>>>i]|=(v>>g&1)<<p}break}throw SyntaxError("Invalid param")}}function s(t){if(!(this instanceof s))return new s(t);u(this,t),this.data=this.data.slice()}function h(t,r){for(var n=r>>>i,e=t.data,a=t._,o=e.length;n>=o;n--)e.push(a)}var l={data:[],_:0};s.prototype={data:[],_:0,set:function(t,r){return h(this,t|=0),void 0===r||r?this.data[t>>>i]|=1<<t:this.data[t>>>i]&=~(1<<t),this},get:function(t){t|=0;var r=this.data,n=t>>>i;return n>=r.length?1&this._:r[n]>>>t&1},not:function(){for(var t=this.clone(),r=t.data,n=0;n<r.length;n++)r[n]=~r[n];return t._=~t._,t},and:function(t){u(l,t);var r=this.clone(),n=r.data,e=l.data,i=e.length,o=l._;0!==r._&&h(r,i*a-1);for(var f=n.length,s=Math.min(i,f),c=0;c<s;c++)n[c]&=e[c];for(;c<f;c++)n[c]&=o;return r._&=o,r},or:function(t){u(l,t);for(var r=this.clone(),n=r.data,e=l.data,a=e.length-1,i=n.length-1,o=Math.min(i,a),f=a;f>o;f--)n[f]=e[f];for(;f>=0;f--)n[f]|=e[f];return r._|=l._,r},xor:function(t){u(l,t);var r=this.clone(),n=r.data,e=l.data,a=r._,i=l._,o=0,f=n.length-1,s=e.length-1;for(o=f;o>s;o--)n[o]^=i;for(o=s;o>f;o--)n[o]=a^e[o];for(;o>=0;o--)n[o]^=e[o];return r._^=i,r},andNot:function(t){return this.and(new s(t).flip())},flip:function(t,r){if(void 0===t){for(var n=this.data,e=0;e<n.length;e++)n[e]=~n[e];this._=~this._}else if(void 0===r)h(this,t),this.data[t>>>i]^=1<<t;else if(0<=t&&t<=r){h(this,r);for(e=t;e<=r;e++)this.data[e>>>i]^=1<<e}return this},clear:function(t,r){var n=this.data;if(void 0===t){for(var e=n.length-1;e>=0;e--)n[e]=0;this._=0}else if(void 0===r)h(this,t|=0),n[t>>>i]&=~(1<<t);else if(t<=r){h(this,r);for(e=t;e<=r;e++)n[e>>>i]&=~(1<<e)}return this},slice:function(t,r){if(void 0===t)return this.clone();if(void 0===r){r=this.data.length*a,(e=Object.create(s.prototype))._=this._,e.data=[0];for(var n=t;n<=r;n++)e.set(n-t,this.get(n));return e}if(t<=r&&0<=t){var e;(e=Object.create(s.prototype)).data=[0];for(n=t;n<=r;n++)e.set(n-t,this.get(n));return e}return null},setRange:function(t,r,n){for(var e=t;e<=r;e++)this.set(e,n);return this},clone:function(){var t=Object.create(s.prototype);return t.data=this.data.slice(),t._=this._,t},toArray:Math.clz32?function(){for(var t=[],r=this.data,n=r.length-1;n>=0;n--)for(var e=r[n];0!==e;){var i=31-Math.clz32(e);e^=1<<i,t.unshift(n*a+i)}return 0!==this._&&t.push(1/0),t}:function(){for(var t=[],r=this.data,n=0;n<r.length;n++)for(var e=r[n];0!==e;){var i=e&-e;e^=i,t.push(n*a+o(i-1))}return 0!==this._&&t.push(1/0),t},toString:function(t){var r=this.data;if(t||(t=2),0==(t&t-1)&&t<36){for(var n="",e=2+Math.log(4294967295)/Math.log(t)|0,i=r.length-1;i>=0;i--){var o=r[i];o<0&&(o+=4294967296);var u=o.toString(t);""!==n&&(n+="0".repeat(e-u.length-1)),n+=u}return 0===this._?(""===(n=n.replace(/^0+/,""))&&(n="0"),n):(n="1111"+n).replace(/^1+/,"...1111")}if(2>t||t>36)throw SyntaxError("Invalid base");n=[];var s=[];for(i=r.length;i--;)for(var h=a;h--;)s.push(r[i]>>>h&1);do{n.unshift(f(s,t).toString(t))}while(!s.every(function(t){return 0===t}));return n.join("")},isEmpty:function(){if(0!==this._)return!1;for(var t=this.data,r=t.length-1;r>=0;r--)if(0!==t[r])return!1;return!0},cardinality:function(){if(0!==this._)return 1/0;for(var t=0,r=this.data,n=0;n<r.length;n++){var e=r[n];0!==e&&(t+=o(e))}return t},msb:Math.clz32?function(){if(0!==this._)return 1/0;for(var t=this.data,r=t.length;r-- >0;){var n=Math.clz32(t[r]);if(n!==a)return r*a+a-1-n}return 1/0}:function(){if(0!==this._)return 1/0;for(var t=this.data,r=t.length;r-- >0;){var n=t[r],e=0;if(n){for(;(n>>>=1)>0;e++);return r*a+e}}return 1/0},ntz:function(){for(var t=this.data,r=0;r<t.length;r++){var n=t[r];if(0!==n)return r*a+o(n=(n^n-1)>>>1)}return 1/0},lsb:function(){for(var t=this.data,r=0;r<t.length;r++){var n=t[r],e=0;if(n){for(var i=n&-n;i>>>=1;e++);return a*r+e}}return 1&this._},equals:function(t){u(l,t);var r=this.data,n=l.data,e=this._,a=l._,i=r.length-1,o=n.length-1;if(a!==e)return!1;for(var f=i<o?i:o,s=0;s<=f;s++)if(r[s]!==n[s])return!1;for(s=i;s>o;s--)if(r[s]!==a)return!1;for(s=o;s>i;s--)if(n[s]!==e)return!1;return!0}},s.fromBinaryString=function(t){return new s("0b"+t)},s.fromHexString=function(t){return new s("0x"+t)},s.Random=function(t){(void 0===t||t<0)&&(t=a);for(var r=t%a,n=[],e=Math.ceil(t/a),i=Object.create(s.prototype),o=0;o<e;o++)n.push(4294967296*Math.random()|0);return r>0&&(n[e-1]&=(1<<r)-1),i.data=n,i._=0,i},void 0===(e=function(){return s}.apply(r,[]))||(t.exports=e)}()},function(t,r,n){"use strict";n.r(r),function(t){var e=n(0),a=n.n(e);class i{constructor(){this.list=new a.a}add([t,r]){this.list.setRange(t,r-1,1)}remove([t,r]){this.list.setRange(t,r-1,0)}get(){const t=[],r=this.list.msb();let n=this.list.lsb(),e=!0,a=n;for(;n<=r;){const r=this.list.get(n);!e&&r&&(a=n),!r&&e&&t.push([a,n]),e=r,n+=1}return t.push([a,n]),t}print(){console.log(`[${this.get().join(") [")})`)}}t.RangeList=i,r.default=i}.call(this,n(2))},function(t,r){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n}]);