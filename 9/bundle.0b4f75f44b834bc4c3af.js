(()=>{var e={360:(e,t,s)=>{"use strict";s.d(t,{Z:()=>c});var i=s(537),a=s.n(i),n=s(645),r=s.n(n)()(a());r.push([e.id,".event__type-label::first-letter {\n  text-transform: uppercase;\n}\n\n.event__photos-container {\n  overflow-x: auto;\n}\n\n","",{version:3,sources:["webpack://./src/view/editor-view.css"],names:[],mappings:"AAAA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;AAClB",sourcesContent:[".event__type-label::first-letter {\n  text-transform: uppercase;\n}\n\n.event__photos-container {\n  overflow-x: auto;\n}\n\n"],sourceRoot:""}]);const c=r},231:(e,t,s)=>{"use strict";s.d(t,{Z:()=>c});var i=s(537),a=s.n(i),n=s(645),r=s.n(n)()(a());r.push([e.id,".trip-list {\n  display: block;\n}\n\n.trip-list__item {\n  display: block;\n  margin-bottom: 54px;\n  margin-left: auto;\n}\n","",{version:3,sources:["webpack://./src/view/list-view.css"],names:[],mappings:"AAAA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,mBAAmB;EACnB,iBAAiB;AACnB",sourcesContent:[".trip-list {\n  display: block;\n}\n\n.trip-list__item {\n  display: block;\n  margin-bottom: 54px;\n  margin-left: auto;\n}\n"],sourceRoot:""}]);const c=r},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var s="",i=void 0!==t[5];return t[4]&&(s+="@supports (".concat(t[4],") {")),t[2]&&(s+="@media ".concat(t[2]," {")),i&&(s+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),s+=e(t),i&&(s+="}"),t[2]&&(s+="}"),t[4]&&(s+="}"),s})).join("")},t.i=function(e,s,i,a,n){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(i)for(var c=0;c<this.length;c++){var o=this[c][0];null!=o&&(r[o]=!0)}for(var d=0;d<e.length;d++){var f=[].concat(e[d]);i&&r[f[0]]||(void 0!==n&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=n),s&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=s):f[2]=s),a&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=a):f[4]="".concat(a)),t.push(f))}},t}},537:e=>{"use strict";e.exports=function(e){var t=e[1],s=e[3];if(!s)return t;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),n="/*# ".concat(a," */");return[t].concat([n]).join("\n")}return[t].join("\n")}},484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,s="millisecond",i="second",a="minute",n="hour",r="day",c="week",o="month",d="quarter",f="year",l="date",u="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,b={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],s=e%100;return"["+e+(t[(s-20)%10]||t[s]||t[0])+"]"}},m=function(e,t,s){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(s)+e},v={s:m,z:function(e){var t=-e.utcOffset(),s=Math.abs(t),i=Math.floor(s/60),a=s%60;return(t<=0?"+":"-")+m(i,2,"0")+":"+m(a,2,"0")},m:function e(t,s){if(t.date()<s.date())return-e(s,t);var i=12*(s.year()-t.year())+(s.month()-t.month()),a=t.clone().add(i,o),n=s-a<0,r=t.clone().add(i+(n?-1:1),o);return+(-(i+(s-a)/(n?a-r:r-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:o,y:f,w:c,d:r,D:l,h:n,m:a,s:i,ms:s,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},_="en",y={};y[_]=b;var g=function(e){return e instanceof T},$=function e(t,s,i){var a;if(!t)return _;if("string"==typeof t){var n=t.toLowerCase();y[n]&&(a=n),s&&(y[n]=s,a=n);var r=t.split("-");if(!a&&r.length>1)return e(r[0])}else{var c=t.name;y[c]=t,a=c}return!i&&a&&(_=a),a||!i&&_},w=function(e,t){if(g(e))return e.clone();var s="object"==typeof t?t:{};return s.date=e,s.args=arguments,new T(s)},S=v;S.l=$,S.i=g,S.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var T=function(){function b(e){this.$L=$(e.locale,null,!0),this.parse(e)}var m=b.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,s=e.utc;if(null===t)return new Date(NaN);if(S.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(p);if(i){var a=i[2]-1||0,n=(i[7]||"0").substring(0,3);return s?new Date(Date.UTC(i[1],a,i[3]||1,i[4]||0,i[5]||0,i[6]||0,n)):new Date(i[1],a,i[3]||1,i[4]||0,i[5]||0,i[6]||0,n)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return S},m.isValid=function(){return!(this.$d.toString()===u)},m.isSame=function(e,t){var s=w(e);return this.startOf(t)<=s&&s<=this.endOf(t)},m.isAfter=function(e,t){return w(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<w(e)},m.$g=function(e,t,s){return S.u(e)?this[t]:this.set(s,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,t){var s=this,d=!!S.u(t)||t,u=S.p(e),p=function(e,t){var i=S.w(s.$u?Date.UTC(s.$y,t,e):new Date(s.$y,t,e),s);return d?i:i.endOf(r)},h=function(e,t){return S.w(s.toDate()[e].apply(s.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(t)),s)},b=this.$W,m=this.$M,v=this.$D,_="set"+(this.$u?"UTC":"");switch(u){case f:return d?p(1,0):p(31,11);case o:return d?p(1,m):p(0,m+1);case c:var y=this.$locale().weekStart||0,g=(b<y?b+7:b)-y;return p(d?v-g:v+(6-g),m);case r:case l:return h(_+"Hours",0);case n:return h(_+"Minutes",1);case a:return h(_+"Seconds",2);case i:return h(_+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(e,t){var c,d=S.p(e),u="set"+(this.$u?"UTC":""),p=(c={},c[r]=u+"Date",c[l]=u+"Date",c[o]=u+"Month",c[f]=u+"FullYear",c[n]=u+"Hours",c[a]=u+"Minutes",c[i]=u+"Seconds",c[s]=u+"Milliseconds",c)[d],h=d===r?this.$D+(t-this.$W):t;if(d===o||d===f){var b=this.clone().set(l,1);b.$d[p](h),b.init(),this.$d=b.set(l,Math.min(this.$D,b.daysInMonth())).$d}else p&&this.$d[p](h);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[S.p(e)]()},m.add=function(s,d){var l,u=this;s=Number(s);var p=S.p(d),h=function(e){var t=w(u);return S.w(t.date(t.date()+Math.round(e*s)),u)};if(p===o)return this.set(o,this.$M+s);if(p===f)return this.set(f,this.$y+s);if(p===r)return h(1);if(p===c)return h(7);var b=(l={},l[a]=e,l[n]=t,l[i]=1e3,l)[p]||1,m=this.$d.getTime()+s*b;return S.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,s=this.$locale();if(!this.isValid())return s.invalidDate||u;var i=e||"YYYY-MM-DDTHH:mm:ssZ",a=S.z(this),n=this.$H,r=this.$m,c=this.$M,o=s.weekdays,d=s.months,f=s.meridiem,l=function(e,s,a,n){return e&&(e[s]||e(t,i))||a[s].slice(0,n)},p=function(e){return S.s(n%12||12,e,"0")},b=f||function(e,t,s){var i=e<12?"AM":"PM";return s?i.toLowerCase():i};return i.replace(h,(function(e,i){return i||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return S.s(t.$y,4,"0");case"M":return c+1;case"MM":return S.s(c+1,2,"0");case"MMM":return l(s.monthsShort,c,d,3);case"MMMM":return l(d,c);case"D":return t.$D;case"DD":return S.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return l(s.weekdaysMin,t.$W,o,2);case"ddd":return l(s.weekdaysShort,t.$W,o,3);case"dddd":return o[t.$W];case"H":return String(n);case"HH":return S.s(n,2,"0");case"h":return p(1);case"hh":return p(2);case"a":return b(n,r,!0);case"A":return b(n,r,!1);case"m":return String(r);case"mm":return S.s(r,2,"0");case"s":return String(t.$s);case"ss":return S.s(t.$s,2,"0");case"SSS":return S.s(t.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(s,l,u){var p,h=this,b=S.p(l),m=w(s),v=(m.utcOffset()-this.utcOffset())*e,_=this-m,y=function(){return S.m(h,m)};switch(b){case f:p=y()/12;break;case o:p=y();break;case d:p=y()/3;break;case c:p=(_-v)/6048e5;break;case r:p=(_-v)/864e5;break;case n:p=_/t;break;case a:p=_/e;break;case i:p=_/1e3;break;default:p=_}return u?p:S.a(p)},m.daysInMonth=function(){return this.endOf(o).$D},m.$locale=function(){return y[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var s=this.clone(),i=$(e,t,!0);return i&&(s.$L=i),s},m.clone=function(){return S.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},b}(),M=T.prototype;return w.prototype=M,[["$ms",s],["$s",i],["$m",a],["$H",n],["$W",r],["$M",o],["$y",f],["$D",l]].forEach((function(e){M[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||(e(t,T,w),e.$i=!0),w},w.locale=$,w.isDayjs=g,w.unix=function(e){return w(1e3*e)},w.en=y[_],w.Ls=y,w.p={},w}()},646:function(e){e.exports=function(){"use strict";var e,t,s=1e3,i=6e4,a=36e5,n=864e5,r=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=31536e6,o=2592e6,d=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,f={years:c,months:o,days:n,hours:a,minutes:i,seconds:s,milliseconds:1,weeks:6048e5},l=function(e){return e instanceof _},u=function(e,t,s){return new _(e,s,t.$l)},p=function(e){return t.p(e)+"s"},h=function(e){return e<0},b=function(e){return h(e)?Math.ceil(e):Math.floor(e)},m=function(e){return Math.abs(e)},v=function(e,t){return e?h(e)?{negative:!0,format:""+m(e)+t}:{negative:!1,format:""+e+t}:{negative:!1,format:""}},_=function(){function h(e,t,s){var i=this;if(this.$d={},this.$l=s,void 0===e&&(this.$ms=0,this.parseFromMilliseconds()),t)return u(e*f[p(t)],this);if("number"==typeof e)return this.$ms=e,this.parseFromMilliseconds(),this;if("object"==typeof e)return Object.keys(e).forEach((function(t){i.$d[p(t)]=e[t]})),this.calMilliseconds(),this;if("string"==typeof e){var a=e.match(d);if(a){var n=a.slice(2).map((function(e){return null!=e?Number(e):0}));return this.$d.years=n[0],this.$d.months=n[1],this.$d.weeks=n[2],this.$d.days=n[3],this.$d.hours=n[4],this.$d.minutes=n[5],this.$d.seconds=n[6],this.calMilliseconds(),this}}return this}var m=h.prototype;return m.calMilliseconds=function(){var e=this;this.$ms=Object.keys(this.$d).reduce((function(t,s){return t+(e.$d[s]||0)*f[s]}),0)},m.parseFromMilliseconds=function(){var e=this.$ms;this.$d.years=b(e/c),e%=c,this.$d.months=b(e/o),e%=o,this.$d.days=b(e/n),e%=n,this.$d.hours=b(e/a),e%=a,this.$d.minutes=b(e/i),e%=i,this.$d.seconds=b(e/s),e%=s,this.$d.milliseconds=e},m.toISOString=function(){var e=v(this.$d.years,"Y"),t=v(this.$d.months,"M"),s=+this.$d.days||0;this.$d.weeks&&(s+=7*this.$d.weeks);var i=v(s,"D"),a=v(this.$d.hours,"H"),n=v(this.$d.minutes,"M"),r=this.$d.seconds||0;this.$d.milliseconds&&(r+=this.$d.milliseconds/1e3);var c=v(r,"S"),o=e.negative||t.negative||i.negative||a.negative||n.negative||c.negative,d=a.format||n.format||c.format?"T":"",f=(o?"-":"")+"P"+e.format+t.format+i.format+d+a.format+n.format+c.format;return"P"===f||"-P"===f?"P0D":f},m.toJSON=function(){return this.toISOString()},m.format=function(e){var s=e||"YYYY-MM-DDTHH:mm:ss",i={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return s.replace(r,(function(e,t){return t||String(i[e])}))},m.as=function(e){return this.$ms/f[p(e)]},m.get=function(e){var t=this.$ms,s=p(e);return"milliseconds"===s?t%=1e3:t="weeks"===s?b(t/f[s]):this.$d[s],0===t?0:t},m.add=function(e,t,s){var i;return i=t?e*f[p(t)]:l(e)?e.$ms:u(e,this).$ms,u(this.$ms+i*(s?-1:1),this)},m.subtract=function(e,t){return this.add(e,t,!0)},m.locale=function(e){var t=this.clone();return t.$l=e,t},m.clone=function(){return u(this.$ms,this)},m.humanize=function(t){return e().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},m.valueOf=function(){return this.asMilliseconds()},m.milliseconds=function(){return this.get("milliseconds")},m.asMilliseconds=function(){return this.as("milliseconds")},m.seconds=function(){return this.get("seconds")},m.asSeconds=function(){return this.as("seconds")},m.minutes=function(){return this.get("minutes")},m.asMinutes=function(){return this.as("minutes")},m.hours=function(){return this.get("hours")},m.asHours=function(){return this.as("hours")},m.days=function(){return this.get("days")},m.asDays=function(){return this.as("days")},m.weeks=function(){return this.get("weeks")},m.asWeeks=function(){return this.as("weeks")},m.months=function(){return this.get("months")},m.asMonths=function(){return this.as("months")},m.years=function(){return this.get("years")},m.asYears=function(){return this.as("years")},h}(),y=function(e,t,s){return e.add(t.years()*s,"y").add(t.months()*s,"M").add(t.days()*s,"d").add(t.hours()*s,"h").add(t.minutes()*s,"m").add(t.seconds()*s,"s").add(t.milliseconds()*s,"ms")};return function(s,i,a){e=a,t=a().$utils(),a.duration=function(e,t){var s=a.locale();return u(e,{$l:s},t)},a.isDuration=l;var n=i.prototype.add,r=i.prototype.subtract;i.prototype.add=function(e,t){return l(e)?y(this,e,1):n.bind(this)(e,t)},i.prototype.subtract=function(e,t){return l(e)?y(this,e,-1):r.bind(this)(e,t)}}}()},379:e=>{"use strict";var t=[];function s(e){for(var s=-1,i=0;i<t.length;i++)if(t[i].identifier===e){s=i;break}return s}function i(e,i){for(var n={},r=[],c=0;c<e.length;c++){var o=e[c],d=i.base?o[0]+i.base:o[0],f=n[d]||0,l="".concat(d," ").concat(f);n[d]=f+1;var u=s(l),p={css:o[1],media:o[2],sourceMap:o[3],supports:o[4],layer:o[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var h=a(p,i);i.byIndex=c,t.splice(c,0,{identifier:l,updater:h,references:1})}r.push(l)}return r}function a(e,t){var s=t.domAPI(t);return s.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;s.update(e=t)}else s.remove()}}e.exports=function(e,a){var n=i(e=e||[],a=a||{});return function(e){e=e||[];for(var r=0;r<n.length;r++){var c=s(n[r]);t[c].references--}for(var o=i(e,a),d=0;d<n.length;d++){var f=s(n[d]);0===t[f].references&&(t[f].updater(),t.splice(f,1))}n=o}}},569:e=>{"use strict";var t={};e.exports=function(e,s){var i=function(e){if(void 0===t[e]){var s=document.querySelector(e);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(e){s=null}t[e]=s}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(s)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,s)=>{"use strict";e.exports=function(e){var t=s.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(s){!function(e,t,s){var i="";s.supports&&(i+="@supports (".concat(s.supports,") {")),s.media&&(i+="@media ".concat(s.media," {"));var a=void 0!==s.layer;a&&(i+="@layer".concat(s.layer.length>0?" ".concat(s.layer):""," {")),i+=s.css,a&&(i+="}"),s.media&&(i+="}"),s.supports&&(i+="}");var n=s.sourceMap;n&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,s)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function s(i){var a=t[i];if(void 0!==a)return a.exports;var n=t[i]={id:i,exports:{}};return e[i].call(n.exports,n,n.exports,s),n.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.nc=void 0,(()=>{"use strict";class e extends HTMLElement{constructor(){super(),this.state=Object.create(null)}setState(e){Object.assign(this.state,e),this.render()}render(){this.innerHTML=this.createHtml()}createHtml(){return""}dispatch(e,t=null){const s=new CustomEvent(e,{detail:t,bubbles:!0,cancelable:!0});return this.dispatchEvent(s)}}const t=e;var i=s(484),a=s.n(i),n=s(646),r=s.n(n);function c(e,...t){return e.reduce(((e,s,i)=>{const a=t[i];return`${e}${s}${(Array.isArray(a)?a.join(""):a)??""}`}),"")}function o(e){return a()(e).format("HH:mm")}a().extend(r());customElements.define("brief-view",class extends t{constructor(){super(),this.classList.add("trip-info")}createHtml(){return c`
      <div class="trip-info__main">
        <h1 class="trip-info__title">Amsterdam — Chamonix — Geneva</h1>

        <p class="trip-info__dates">Mar 18&nbsp;—&nbsp;20</p>
      </div>

      <p class="trip-info__cost">
        Total: €&nbsp;<span class="trip-info__cost-value">1230</span>
      </p>
    `}});customElements.define("filter-view",class extends t{constructor(){super(),this.classList.add("trip-filters")}createHtml(){return c`
      ${this.state.items.map((e=>c`
        <div class="trip-filters__filter">
          <input class="trip-filters__filter-input  visually-hidden"
                 id="filter-${e.value}"
                 name="trip-filter"
                 type="radio"
                 value="${e.value}"
                 ${e.isSelected?"checked":""}
                 ${e.isDisabled?"disabled":""}
          >
          <label class="trip-filters__filter-label"
                 for="filter-${e.value}"
          >${e.value}
          </label>
        </div>
      `))}
    `}});customElements.define("add-button-view",class extends t{createHtml(){return c`
      <button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>
    `}});customElements.define("sort-view",class extends t{constructor(){super(),this.classList.add("trip-sort")}createHtml(){return c`
      <!-- <form class="trip-events__trip-sort  trip-sort" action="#" method="get"> -->
      ${this.state.items.map((e=>c`
        <div class="trip-sort__item  trip-sort__item--${e.value}">
          <input class="trip-sort__input  visually-hidden"
                 id="sort-${e.value}"
                 name="trip-sort"
                 type="radio"
                 value="${e.value}"
                 ${e.isSelected?"checked":""}
                 ${e.isDisabled?"disabled":""}
          >
          <label class="trip-sort__btn"
                 for="sort-${e.value}"
          >${e.value}
          </label>
        </div>
      `))}
    `}});var d=s(379),f=s.n(d),l=s(795),u=s.n(l),p=s(569),h=s.n(p),b=s(565),m=s.n(b),v=s(216),_=s.n(v),y=s(589),g=s.n(y),$=s(231),w={};w.styleTagTransform=g(),w.setAttributes=m(),w.insert=h().bind(null,"head"),w.domAPI=u(),w.insertStyleElement=_(),f()($.Z,w),$.Z&&$.Z.locals&&$.Z.locals;var S=s(360),T={};T.styleTagTransform=g(),T.setAttributes=m(),T.insert=h().bind(null,"head"),T.domAPI=u(),T.insertStyleElement=_(),f()(S.Z,T),S.Z&&S.Z.locals&&S.Z.locals;class M extends t{constructor(){super(),this.addEventListener("click",this.onClick)}connectedCallback(){document.addEventListener("keydown",this)}disconnectedCallback(){document.removeEventListener("keydown",this)}createHtml(){return c`
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          ${this.createTypeFieldHtml()}
          ${this.createDestinationFieldHtml()}
          ${this.createScheduleFieldHtml()}
          ${this.createPriceFieldHtml()}
          ${this.createSubmitButtonHtml()}
          ${this.createResetButtonHtml()}
          ${this.createCloseButtonHtml()}
        </header>

        <section class="event__details">
          ${this.createOfferListHtml()}
          ${this.createDestinationHtml()}
        </section>
      </form>
    `}createTypeFieldHtml(){const{types:e}=this.state,t=e.find((e=>e.isSelected)).value;return c`
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img
            alt="Event ${t} icon"
            class="event__type-icon"
            height="17"
            src="img/icons/${t}.png"
            width="17"
          >
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Event type</legend>

            ${e.map((e=>c`
              <div class="event__type-item">
                <input
                  class="event__type-input  visually-hidden"
                  id="event-type-${e.value}-1"
                  name="event-type"
                  type="radio"
                  value="${e.value}"
                  ${e.isSelected?"checked":""}
                >
                <label
                  class="event__type-label  event__type-label--${e.value}"
                  for="event-type-${e.value}-1"
                >
                  ${e.value}
                </label>
              </div>
            `))}
          </fieldset>
        </div>
      </div>
    `}createDestinationFieldHtml(){const{types:e,destinations:t}=this.state;return c`
      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-1">
          ${e.find((e=>e.isSelected)).value}
        </label>

        <input class="event__input  event__input--destination"
               id="event-destination-1"
               type="text"
               name="event-destination"
               value="${t.find((e=>e.isSelected))?.name}"
               list="destination-list-1"
        >

        <datalist id="destination-list-1">
          ${t.map((e=>c`
            <option value="${e.name}"></option>
          `))}
        </datalist>
      </div>
    `}createScheduleFieldHtml(){const{dateFrom:e,dateTo:t}=this.state;return c`
      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-1">From</label>
        <input class="event__input  event__input--time"
               id="event-start-time-1"
               name="event-start-time"
               type="text"
               value="${e}"
        >
        —
        <label class="visually-hidden" for="event-end-time-1">To</label>
        <input class="event__input  event__input--time"
               id="event-end-time-1"
               name="event-end-time"
               type="text"
               value="${t}"
        >
      </div>
    `}createPriceFieldHtml(){const{basePrice:e}=this.state;return c`
      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-1">
          <span class="visually-hidden">Price</span>
          €
        </label>
        <input class="event__input  event__input--price"
               id="event-price-1"
               type="text"
               name="event-price"
               value="${e}"
        >
      </div>
    `}createSubmitButtonHtml(){return c`
      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    `}createResetButtonHtml(){return c`
      <button class="event__reset-btn" type="reset">Cancel</button>
    `}createCloseButtonHtml(){return c`
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    `}createOfferListHtml(){const{offers:e}=this.state;return e.length<1?"":c`
      <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>
        <div class="event__available-offers">
          ${e.map((e=>c`
            <div class="event__offer-selector">
              <input class="event__offer-checkbox  visually-hidden"
                     id="${e.id}"
                     name="event-offer"
                     type="checkbox"
                     value="${e.id}"
                     ${e.isSelected?"checked":""}
              >

              <label class="event__offer-label"
                     for="${e.id}"
              >
                <span class="event__offer-title">${e.title}</span>
                +€&nbsp;
                <span class="event__offer-price">${e.price}</span>
              </label>
            </div>
          `))}
        </div>
      </section>
    `}createDestinationHtml(){const{destinations:e}=this.state,t=e.find((e=>e.isSelected));return t?c`
      <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">${t.description}</p>
        <div class="event__photos-container">
          <div class="event__photos-tape">
            ${Array.isArray(t.pictures)?t.pictures.map((e=>c`
                <img class="event__photo"
                     src="${e.src}"
                     alt="${e.description}">
            `)):""}
          </div>
        </div>
      </section>
    `:""}onClick(e){e.target.closest(".event__rollup-btn")&&this.dispatch("close")}handleEvent(e){"Escape"===e.key&&this.dispatch("close")}}customElements.define("editor-view",M);const k=M;class A extends t{constructor(){super(),this.addEventListener("click",this.onClick)}createHtml(){return c`
      <div class="event">
        ${this.createStartDataHtml()}
        ${this.createTypeIconHtml()}
        ${this.createDestinationHtml()}
        ${this.createScheduleHtml()}
        ${this.createPriceHtml()}
        ${this.createOfferListHtml()}
        ${this.createFavoriteButtonHtml()}
        ${this.createOpenButtonHtml()}
      </div>
    `}createStartDataHtml(){const{dateFrom:e}=this.state;return c`
      <time class="event__date"
            datetime="${e}">${t=e,a()(t).format("MMM DD")}
      </time>
    `;var t}createTypeIconHtml(){const{types:e}=this.state,t=e.find((e=>e.isSelected)).value;return c`
      <div class="event__type">
        <img alt="Event currentType icon"
             class="event__type-icon"
             height="42"
             src="img/icons/${t}.png"
             width="42" ${t}
        >
      </div>
    `}createDestinationHtml(){const{types:e,destinations:t}=this.state,s=e.find((e=>e.isSelected)).value,i=t.find((e=>e.isSelected))?.name;return c`
      <h3 class="event__title">${s} ${i}</h3>
    `}createScheduleHtml(){const{dateFrom:e,dateTo:t}=this.state;return c`
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time"
                datetime="${e}">${o(e)}
          </time>
          —
          <time class="event__end-time"
                datetime="${t}">${o(t)}
          </time>
        </p>
        <p class="event__duration">
          ${function(e,t){const s=a().duration(a()(t).diff(e));return s.days()?s.format("DD[d] HH[h] mm[m]"):s.hours()?s.format("HH[h] mm[m]"):s.format("mm[m]")}(e,t)}
        </p>
      </div>
    `}createPriceHtml(){const{basePrice:e}=this.state;return c`
      <p class="event__price">
        €&nbsp;<span class="event__price-value">${t=e,t.toLocaleString("en")}</span>
      </p>
    `;var t}createOfferListHtml(){const{offers:e}=this.state,t=e.filter((e=>e.isSelected));return t?c`
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${t.map((e=>c`
          <li class="event__offer">
            <span class="event__offer-title">${e.title}</span>
            +€&nbsp;
            <span class="event__offer-price">${e.price}</span>
          </li>
        `))}
      </ul>
    `:""}createFavoriteButtonHtml(){const{isFavorite:e}=this.state;return c`
        <button class="event__favorite-btn ${e?"event__favorite-btn--active":""}""
                type="button">
            <span class="visually-hidden">Add to favorite</span>
            <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                <path
                        d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>
            </svg>
        </button>
    `}createOpenButtonHtml(){return c`
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    `}onClick(e){e.target.closest(".event__rollup-btn")?this.dispatch("open"):e.target.closest(".event__favorite-btn")&&this.dispatch("favorite")}}customElements.define("card-view",A);const H=A;customElements.define("list-view",class extends t{constructor(){super(),this.classList.add("trip-list"),this.setAttribute("role","list")}render(){const e=this.state.items.map((e=>{const t=e.isEditable?new k:new H;return t.classList.add("trip-list__item"),t.setAttribute("role","listitem"),t.setState(e),t}));this.replaceChildren(...e)}});const C=class{},j=JSON.parse('[{"id":"93155eed-8161-46c5-b998-6b8cf12155ca","base_price":7126,"date_from":"2023-08-03T21:00:00.531Z","date_to":"2023-08-12T19:00:00.531Z","destination":"9be7169f-ece9-419d-a926-24acc4ead65e","is_favorite":false,"offers":[],"type":"sightseeing"},{"id":"54e0bf3b-4401-4627-9e12-f61088e8b126","base_price":2596,"date_from":"2023-08-03T21:00:00.531Z","date_to":"2023-08-11T13:00:00.531Z","destination":"1f8e77e4-b185-45a9-b9da-77dac347a39c","is_favorite":false,"offers":["c787fed3-3749-4745-b1dc-c46d2fc7afc6","67d873c9-8393-4d9a-af91-0d5e4166f1bf","ca9751b7-1856-4e2a-9fde-4df504db9dec"],"type":"bus"},{"id":"d9c1a372-e094-4bd5-a029-e4cc95f95151","base_price":5321,"date_from":"2023-07-29T21:00:00.531Z","date_to":"2023-08-12T01:00:00.532Z","destination":"9be7169f-ece9-419d-a926-24acc4ead65e","is_favorite":false,"offers":[],"type":"restaurant"},{"id":"b137a347-c394-4716-94f9-2a9d4a3e7ce2","base_price":6212,"date_from":"2023-07-29T21:00:00.532Z","date_to":"2023-08-11T23:00:00.532Z","destination":"31fd5b9d-de8d-402f-8d15-863cb0d0401b","is_favorite":false,"offers":["83570f51-33a9-4f08-bddf-169aa9699416","31dab9b4-3a4f-4227-a873-c708181b3e9b"],"type":"drive"},{"id":"94faf0e1-3d5d-40ec-9a44-43358ef7ef75","base_price":7647,"date_from":"2023-08-01T21:00:00.532Z","date_to":"2023-08-12T05:00:00.532Z","destination":"1f8e77e4-b185-45a9-b9da-77dac347a39c","is_favorite":false,"offers":["6ca7f0d1-f1ca-430f-a78b-d24b3168f55d","9cb63b44-43eb-41f8-a400-f3dae11d3ce7","853ee9fe-8aa5-4a0b-81b8-e32442fc822a","95c84a9e-2205-4d61-b0a4-237d4ef8f511"],"type":"taxi"},{"id":"4da18f5f-9573-4d71-9f14-e0055d1ddfec","base_price":3312,"date_from":"2023-07-29T21:00:00.532Z","date_to":"2023-08-12T18:00:00.532Z","destination":"5daad181-4871-4c6f-8953-da0360c6471d","is_favorite":true,"offers":["67d873c9-8393-4d9a-af91-0d5e4166f1bf","ca9751b7-1856-4e2a-9fde-4df504db9dec"],"type":"bus"},{"id":"57ca17e9-099c-4eee-8d8b-d75887c9b920","base_price":9767,"date_from":"2023-08-05T21:00:00.532Z","date_to":"2023-08-11T03:00:00.532Z","destination":"f4680965-86bd-4e60-b723-0e81be33a007","is_favorite":true,"offers":["83570f51-33a9-4f08-bddf-169aa9699416","31dab9b4-3a4f-4227-a873-c708181b3e9b"],"type":"drive"},{"id":"88efb917-76c8-451d-bfe0-f5f4fe0a7ec0","base_price":9431,"date_from":"2023-08-03T21:00:00.532Z","date_to":"2023-08-12T05:00:00.532Z","destination":"5daad181-4871-4c6f-8953-da0360c6471d","is_favorite":false,"offers":["d60ccd4d-38da-4838-b42c-500c28896eb9"],"type":"train"},{"id":"8519661e-e47f-408d-9193-6a6b463195d5","base_price":4645,"date_from":"2023-07-29T21:00:00.532Z","date_to":"2023-08-12T14:00:00.532Z","destination":"e7d7bec7-6321-43bc-8f30-3d20d74bb2bc","is_favorite":false,"offers":["8d626a89-5a23-4849-abf2-623e4f0b174a","d60ccd4d-38da-4838-b42c-500c28896eb9"],"type":"train"},{"id":"819f2c17-a3e3-4830-b40b-a7de33812879","base_price":9163,"date_from":"2023-07-30T21:00:00.532Z","date_to":"2023-08-11T19:00:00.532Z","destination":"5daad181-4871-4c6f-8953-da0360c6471d","is_favorite":false,"offers":["d60ccd4d-38da-4838-b42c-500c28896eb9"],"type":"train"},{"id":"4d9afa6b-fe83-45f0-8357-675629bd78fe","base_price":3431,"date_from":"2023-08-01T21:00:00.532Z","date_to":"2023-08-12T20:00:00.532Z","destination":"9be7169f-ece9-419d-a926-24acc4ead65e","is_favorite":false,"offers":["83570f51-33a9-4f08-bddf-169aa9699416","31dab9b4-3a4f-4227-a873-c708181b3e9b"],"type":"drive"},{"id":"4c78f3aa-0d76-457e-9322-e008569a497f","base_price":7368,"date_from":"2023-08-03T21:00:00.532Z","date_to":"2023-08-11T13:00:00.532Z","destination":"e7d7bec7-6321-43bc-8f30-3d20d74bb2bc","is_favorite":true,"offers":["81056bf4-1de3-4939-bec7-231741c0eae2"],"type":"check-in"},{"id":"33996600-988a-4c57-8c3f-1cc70bcd739d","base_price":2011,"date_from":"2023-07-29T21:00:00.532Z","date_to":"2023-08-11T07:00:00.532Z","destination":"1f8e77e4-b185-45a9-b9da-77dac347a39c","is_favorite":false,"offers":["db89b1f1-c57e-4ab8-91e7-b69abe59f7ee"],"type":"restaurant"},{"id":"56146c0b-76b8-4aa8-8c55-8fbfed92fa09","base_price":452,"date_from":"2023-08-01T21:00:00.532Z","date_to":"2023-08-12T04:00:00.532Z","destination":"31fd5b9d-de8d-402f-8d15-863cb0d0401b","is_favorite":false,"offers":["8d626a89-5a23-4849-abf2-623e4f0b174a","d60ccd4d-38da-4838-b42c-500c28896eb9"],"type":"train"},{"id":"cbcc0a4d-dfa8-4d19-a46c-ca90ef64301c","base_price":7046,"date_from":"2023-08-07T21:00:00.532Z","date_to":"2023-08-11T18:00:00.532Z","destination":"31fd5b9d-de8d-402f-8d15-863cb0d0401b","is_favorite":false,"offers":[],"type":"sightseeing"},{"id":"ff7d2fe6-af4f-4eb9-b11c-9b6985e19e4c","base_price":3274,"date_from":"2023-08-06T21:00:00.532Z","date_to":"2023-08-12T01:00:00.532Z","destination":"9be7169f-ece9-419d-a926-24acc4ead65e","is_favorite":true,"offers":[],"type":"drive"},{"id":"de6ca0d1-0fb7-4488-8695-792897fab62a","base_price":7421,"date_from":"2023-08-04T21:00:00.532Z","date_to":"2023-08-12T19:00:00.532Z","destination":"9be7169f-ece9-419d-a926-24acc4ead65e","is_favorite":false,"offers":[],"type":"bus"},{"id":"30664e3f-17c7-454f-89ef-a8aa148281db","base_price":3930,"date_from":"2023-07-31T21:00:00.532Z","date_to":"2023-08-11T23:00:00.532Z","destination":"1e2e5223-9446-4646-b3ec-e1907a95f3ba","is_favorite":true,"offers":["0ce31f25-9760-42c3-a0b5-b9123309b164"],"type":"flight"},{"id":"136de951-2c6e-486a-b382-3b40de267f8d","base_price":7521,"date_from":"2023-07-29T21:00:00.532Z","date_to":"2023-08-12T09:00:00.532Z","destination":"1f8e77e4-b185-45a9-b9da-77dac347a39c","is_favorite":false,"offers":["9b2ed293-0f05-471b-9270-39d018a378d4","7fbc431f-0cd7-4892-bf69-ba3abfc4433f","f6440f21-d18d-40bb-8b9a-a6ca64179cb1","e5731bfd-cdde-4df8-83f7-8fb8b935aa00","81056bf4-1de3-4939-bec7-231741c0eae2"],"type":"check-in"},{"id":"8e043509-99ac-4fc8-950f-e840a76779ba","base_price":2419,"date_from":"2023-08-06T21:00:00.532Z","date_to":"2023-08-12T12:00:00.532Z","destination":"5daad181-4871-4c6f-8953-da0360c6471d","is_favorite":false,"offers":[],"type":"train"},{"id":"a14736b0-65d8-4458-88ed-97c479807f46","base_price":7248,"date_from":"2023-07-30T21:00:00.532Z","date_to":"2023-08-11T22:00:00.532Z","destination":"1f8e77e4-b185-45a9-b9da-77dac347a39c","is_favorite":false,"offers":["c787fed3-3749-4745-b1dc-c46d2fc7afc6","67d873c9-8393-4d9a-af91-0d5e4166f1bf","ca9751b7-1856-4e2a-9fde-4df504db9dec"],"type":"bus"},{"id":"8333244f-4e23-437f-814c-bb93747f1656","base_price":4893,"date_from":"2023-08-05T21:00:00.532Z","date_to":"2023-08-11T20:00:00.532Z","destination":"5daad181-4871-4c6f-8953-da0360c6471d","is_favorite":false,"offers":[],"type":"restaurant"},{"id":"1d457cc5-9efc-4c4b-9d28-77bbfd5e2e71","base_price":3525,"date_from":"2023-08-05T21:00:00.565Z","date_to":"2023-08-11T08:00:00.565Z","destination":"430ed559-03ac-43cd-97af-1ac60623b769","is_favorite":true,"offers":["0f73880e-2c26-4618-ac0d-679f3d611a61","8d626a89-5a23-4849-abf2-623e4f0b174a","d60ccd4d-38da-4838-b42c-500c28896eb9"],"type":"train"},{"id":"8c8e7ea1-aae9-4c30-b882-fe0d4e4cd2c8","base_price":4311,"date_from":"2023-08-03T21:00:00.565Z","date_to":"2023-08-11T16:00:00.565Z","destination":"430ed559-03ac-43cd-97af-1ac60623b769","is_favorite":true,"offers":["67d873c9-8393-4d9a-af91-0d5e4166f1bf","ca9751b7-1856-4e2a-9fde-4df504db9dec"],"type":"bus"},{"id":"91a19373-a8b4-4063-8195-87e3e849072f","base_price":7447,"date_from":"2023-07-30T21:00:00.565Z","date_to":"2023-08-12T10:00:00.565Z","destination":"415d5d96-be4d-4473-9c31-a62d2bf3d323","is_favorite":true,"offers":["95c84a9e-2205-4d61-b0a4-237d4ef8f511"],"type":"taxi"}]'),D=JSON.parse('[{"type":"taxi","offers":[{"id":"c75c7bbc-3f32-45c3-ada8-f7274d979601","title":"Upgrade to a business class","price":92},{"id":"6ca7f0d1-f1ca-430f-a78b-d24b3168f55d","title":"Choose the radio station","price":51},{"id":"9cb63b44-43eb-41f8-a400-f3dae11d3ce7","title":"Choose temperature","price":53},{"id":"853ee9fe-8aa5-4a0b-81b8-e32442fc822a","title":"Drive quickly, I\'m in a hurry","price":169},{"id":"95c84a9e-2205-4d61-b0a4-237d4ef8f511","title":"Drive slowly","price":163}]},{"type":"bus","offers":[{"id":"c787fed3-3749-4745-b1dc-c46d2fc7afc6","title":"Infotainment system","price":94},{"id":"67d873c9-8393-4d9a-af91-0d5e4166f1bf","title":"Order meal","price":132},{"id":"ca9751b7-1856-4e2a-9fde-4df504db9dec","title":"Choose seats","price":167}]},{"type":"train","offers":[{"id":"0f73880e-2c26-4618-ac0d-679f3d611a61","title":"Book a taxi at the arrival point","price":176},{"id":"8d626a89-5a23-4849-abf2-623e4f0b174a","title":"Order a breakfast","price":100},{"id":"d60ccd4d-38da-4838-b42c-500c28896eb9","title":"Wake up at a certain time","price":147}]},{"type":"flight","offers":[{"id":"aae16dfe-fe4f-4b16-9cfa-a4bc3d6c884c","title":"Choose meal","price":149},{"id":"fd17b530-30d2-46e0-b0f1-198acb42c3a8","title":"Choose seats","price":51},{"id":"45ef4dec-385b-4fd2-a50b-1aa952e06d7a","title":"Upgrade to comfort class","price":159},{"id":"cf752849-59a1-46ff-8c1d-cb93b45de4e3","title":"Upgrade to business class","price":163},{"id":"79a535b5-b702-497b-9b89-98a7e867d9dd","title":"Add luggage","price":111},{"id":"0ce31f25-9760-42c3-a0b5-b9123309b164","title":"Business lounge","price":88}]},{"type":"check-in","offers":[{"id":"9b2ed293-0f05-471b-9270-39d018a378d4","title":"Choose the time of check-in","price":40},{"id":"7fbc431f-0cd7-4892-bf69-ba3abfc4433f","title":"Choose the time of check-out","price":110},{"id":"f6440f21-d18d-40bb-8b9a-a6ca64179cb1","title":"Add breakfast","price":195},{"id":"e5731bfd-cdde-4df8-83f7-8fb8b935aa00","title":"Laundry","price":61},{"id":"81056bf4-1de3-4939-bec7-231741c0eae2","title":"Order a meal from the restaurant","price":51}]},{"type":"sightseeing","offers":[]},{"type":"ship","offers":[{"id":"4e6408dc-c790-4b8b-a722-246570482666","title":"Choose meal","price":157},{"id":"3d5b8c54-e2c4-471d-ba0b-6b72bd13dad1","title":"Choose seats","price":34},{"id":"110d4d36-8112-4a9e-96c6-c8f384a96ed7","title":"Upgrade to comfort class","price":107},{"id":"972af80d-d8d2-4960-9c25-50b563ed5db6","title":"Upgrade to business class","price":109},{"id":"62405be9-04df-48ff-ae7a-dc28063369cd","title":"Add luggage","price":184},{"id":"4d2dd4cb-cc78-4ed0-a92e-076e228b58ac","title":"Business lounge","price":158}]},{"type":"drive","offers":[{"id":"83570f51-33a9-4f08-bddf-169aa9699416","title":"With automatic transmission","price":128},{"id":"31dab9b4-3a4f-4227-a873-c708181b3e9b","title":"With air conditioning","price":47}]},{"type":"restaurant","offers":[{"id":"7b286829-27a9-4105-81f3-7b54729ddf1a","title":"Choose live music","price":159},{"id":"db89b1f1-c57e-4ab8-91e7-b69abe59f7ee","title":"Choose VIP area","price":119}]}]'),x=JSON.parse('[{"id":"1e2e5223-9446-4646-b3ec-e1907a95f3ba","description":"Valencia - with an embankment of a mighty river as a centre of attraction","name":"Valencia","pictures":[]},{"id":"430ed559-03ac-43cd-97af-1ac60623b769","description":"Hiroshima - is a beautiful city","name":"Hiroshima","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/11.jpg","description":"Hiroshima famous for its crowded street markets with the best street food in Asia"},{"src":"https://21.objects.pages.academy/static/destinations/20.jpg","description":"Hiroshima with a beautiful old town"},{"src":"https://21.objects.pages.academy/static/destinations/8.jpg","description":"Hiroshima a perfect place to stay with a family"},{"src":"https://21.objects.pages.academy/static/destinations/6.jpg","description":"Hiroshima with crowded streets"},{"src":"https://21.objects.pages.academy/static/destinations/11.jpg","description":"Hiroshima with a beautiful old town"}]},{"id":"e7d7bec7-6321-43bc-8f30-3d20d74bb2bc","name":"Sochi"},{"id":"1f8e77e4-b185-45a9-b9da-77dac347a39c","description":"Amsterdam - middle-eastern paradise","name":"Amsterdam","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/13.jpg","description":"Amsterdam famous for its crowded street markets with the best street food in Asia"},{"src":"https://21.objects.pages.academy/static/destinations/9.jpg","description":"Amsterdam middle-eastern paradise"},{"src":"https://21.objects.pages.academy/static/destinations/6.jpg","description":"Amsterdam a perfect place to stay with a family"},{"src":"https://21.objects.pages.academy/static/destinations/17.jpg","description":"Amsterdam famous for its crowded street markets with the best street food in Asia"}]},{"id":"8fa3a3fb-8205-4da2-8aaa-954159347305","description":"Tokio - with crowded streets","name":"Tokio","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/11.jpg","description":"Tokio with an embankment of a mighty river as a centre of attraction"},{"src":"https://21.objects.pages.academy/static/destinations/1.jpg","description":"Tokio famous for its crowded street markets with the best street food in Asia"},{"src":"https://21.objects.pages.academy/static/destinations/15.jpg","description":"Tokio for those who value comfort and coziness"}]},{"id":"5daad181-4871-4c6f-8953-da0360c6471d","description":"Oslo - for those who value comfort and coziness","name":"Oslo","pictures":[]},{"id":"f4680965-86bd-4e60-b723-0e81be33a007","description":"Madrid - full of of cozy canteens where you can try the best coffee in the Middle East","name":"Madrid","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/19.jpg","description":"Madrid a true asian pearl"},{"src":"https://21.objects.pages.academy/static/destinations/18.jpg","description":"Madrid middle-eastern paradise"},{"src":"https://21.objects.pages.academy/static/destinations/13.jpg","description":"Madrid full of of cozy canteens where you can try the best coffee in the Middle East"},{"src":"https://21.objects.pages.academy/static/destinations/3.jpg","description":"Madrid middle-eastern paradise"},{"src":"https://21.objects.pages.academy/static/destinations/14.jpg","description":"Madrid famous for its crowded street markets with the best street food in Asia"}]},{"id":"415d5d96-be4d-4473-9c31-a62d2bf3d323","description":"Chamonix - in a middle of Europe","name":"Chamonix","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/8.jpg","description":"Chamonix famous for its crowded street markets with the best street food in Asia"},{"src":"https://21.objects.pages.academy/static/destinations/11.jpg","description":"Chamonix is a beautiful city"},{"src":"https://21.objects.pages.academy/static/destinations/5.jpg","description":"Chamonix full of of cozy canteens where you can try the best coffee in the Middle East"},{"src":"https://21.objects.pages.academy/static/destinations/1.jpg","description":"Chamonix famous for its crowded street markets with the best street food in Asia"},{"src":"https://21.objects.pages.academy/static/destinations/2.jpg","description":"Chamonix famous for its crowded street markets with the best street food in Asia"}]},{"id":"31fd5b9d-de8d-402f-8d15-863cb0d0401b","description":"Venice - in a middle of Europe","name":"Venice","pictures":[]},{"id":"9be7169f-ece9-419d-a926-24acc4ead65e","description":"Berlin - in a middle of Europe","name":"Berlin","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/2.jpg","description":"Berlin with a beautiful old town"},{"src":"https://21.objects.pages.academy/static/destinations/12.jpg","description":"Berlin famous for its crowded street markets with the best street food in Asia"},{"src":"https://21.objects.pages.academy/static/destinations/3.jpg","description":"Berlin a true asian pearl"},{"src":"https://21.objects.pages.academy/static/destinations/2.jpg","description":"Berlin with crowded streets"}]}]'),O=class extends C{constructor(e){super(),this.id=e.id,this.basePrice=e.base_price,this.dateFrom=new Date(e.date_from),this.dateTo=new Date(e.date_to),this.destinationId=e.destination,this.isFavorite=e.is_favorite,this.offerIds=structuredClone(e.offers),this.type=e.type}toJSON(){return{id:this.id,base_price:this.basePrice,date_from:this.dateFrom,date_to:this.dateTo,destination:this.destinationId,is_favorite:this.isFavorite,offers:structuredClone(this.offerIds),type:this.type}}};class Z extends EventTarget{constructor(){super(),window.addEventListener("popstate",(()=>{this.dispatchEvent(new Event("change"))}))}setParams(e){const t=this.getUrl();t.search="",Object.keys(e).forEach((s=>{t.searchParams.set(s,e[s])})),window.history.pushState(null,"",t.href),this.dispatchEvent(new Event("change"))}getParams(){const e=this.getUrl();return Object.fromEntries(e.searchParams)}getUrl(){return new URL(window.location.href)}}const E=new Z,P=class{constructor(e,t){this.view=e,this.model=t,this.navigation=E,this.navigation.addEventListener("change",this.onNavigationChange.bind(this)),window.queueMicrotask((()=>this.updateView()))}updateView(){}onNavigationChange(){this.updateView()}},F=class extends P{constructor(...e){super(...e)}updateView(){this.view.render()}},L=class extends P{constructor(...e){super(...e)}updateView(){const e=["everything","future","present","past"].map((e=>({value:e,isSelected:"everything"===e,isDisabled:"future"===e})));this.view.setState({items:e})}},B=class extends P{constructor(...e){super(...e)}updateView(){this.view.render()}},I=class extends P{constructor(...e){super(...e),this.view.addEventListener("change",this.onViewChange.bind(this))}updateView(){const{sort:e="day"}=this.navigation.getParams(),t=["day","event","time","price","offers"].map((t=>({value:t,isSelected:t===e,isDisabled:"event"===t||"offers"===t})));this.view.setState({items:t})}onViewChange(e){const t=this.navigation.getParams();t.sort=e.target.value,delete t.edit,this.navigation.setParams(t)}},Y=class extends P{constructor(...e){super(...e),this.view.addEventListener("open",this.onViewOpen.bind(this)),this.view.addEventListener("close",this.onViewClose.bind(this)),this.view.addEventListener("favorite",this.onViewFavorite.bind(this))}updateView(){const e=this.navigation.getParams(),t=this.model.getPoints(e),s=this.model.getDestinations(),i=this.model.getOfferGroups(),a=t.map((t=>{const{offers:a}=i.find((e=>e.type===t.type));return{id:t.id,types:i.map((e=>({value:e.type,isSelected:e.type===t.type}))),destinations:s.map((e=>({...e,isSelected:e.id===t.destinationId}))),dateFrom:t.dateFrom,dateTo:t.dateTo,basePrice:t.basePrice,offers:a.map((e=>({...e,isSelected:t.offerIds?.includes(e.id)}))),isFavorite:t.isFavorite,isEditable:e.edit===t.id}}));this.view.setState({items:a})}createPoint(e){const t=this.model.createPoint();return Object.assign(t,{id:e.id,type:e.types.find((e=>e.isSelected)).value,destinationId:e.destinations.find((e=>e.isSelected))?.id,dateFrom:e.dateFrom,dateTo:e.dateTo,basePrice:e.basePrice,offerIds:e.offers.filter((e=>e.isSelected)).map((e=>e.id)),isFavorite:e.isFavorite}),t}onViewOpen(e){const t=this.navigation.getParams();t.edit=e.target.state.id,this.navigation.setParams(t)}onViewClose(){const e=this.navigation.getParams();delete e.edit,this.navigation.setParams(e)}async onViewFavorite(e){const t=e.target;t.state.isFavorite=!t.state.isFavorite,await this.model.updatePoint(this.createPoint(t.state)),t.render()}},V=new class extends C{constructor(){super(),this._points=[],this._destinations=[],this._offerGroups=[],this.sortCallbacks={day:(e,t)=>e.dateFrom.valueOf()-t.dateFrom.valueOf(),event:()=>0,time:(e,t)=>t.dateTo.valueOf()-t.dateFrom.valueOf()-(e.dateTo.valueOf()-e.dateFrom.valueOf()),price:(e,t)=>t.basePrice-e.basePrice,offers:()=>0}}async ready(){this._points=j,this._destinations=x,this._offerGroups=D}getPoints(e={}){const t=this.sortCallbacks.day,s=this.sortCallbacks[e.sort]??t;return this._points.map(this.createPoint).sort(s)}createPoint(e=Object.create(null)){return new O(e)}async updatePoint(e){const t=e.toJSON(),s=this._points.findIndex((e=>e.id===t.id));this._points.splice(s,1,t)}getDestinations(){return structuredClone(this._destinations)}getOfferGroups(){return structuredClone(this._offerGroups)}};V.ready().then((()=>{new F(document.querySelector("brief-view"),V),new L(document.querySelector("filter-view"),V),new B(document.querySelector("add-button-view"),V),new I(document.querySelector("sort-view"),V),new Y(document.querySelector("list-view"),V)}))})()})();
//# sourceMappingURL=bundle.0b4f75f44b834bc4c3af.js.map