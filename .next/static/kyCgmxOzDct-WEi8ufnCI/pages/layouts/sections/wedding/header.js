(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"16Al":function(e,t,n){"use strict";var a=n("WbBG");function r(){}function s(){}s.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,s,o){if(o!==a){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:r};return n.PropTypes=n,n}},"17x9":function(e,t,n){e.exports=n("16Al")()},"1Yj4":function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),s=n("q1tI"),o=n.n(s),i=n("17x9"),c=n.n(i),u=n("TSYQ"),l=n.n(u),d=n("33Jr"),f=["className","cssModule","fluid","tag"],p={tag:d.d,fluid:c.a.oneOfType([c.a.bool,c.a.string]),className:c.a.string,cssModule:c.a.object},g=function(e){var t=e.className,n=e.cssModule,s=e.fluid,i=e.tag,c=Object(r.a)(e,f),u="container";!0===s?u="container-fluid":s&&(u="container-"+s);var p=Object(d.b)(l()(t,u),n);return o.a.createElement(i,Object(a.a)({},c,{className:p}))};g.propTypes=p,g.defaultProps={tag:"div"},t.a=g},"33Jr":function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"c",function(){return i}),n.d(t,"d",function(){return u}),n.d(t,"a",function(){return l});var a,r=n("17x9"),s=n.n(r);function o(e,t){return void 0===e&&(e=""),void 0===t&&(t=a),t?e.split(" ").map(function(e){return t[e]||e}).join(" "):e}function i(e,t){var n={};return Object.keys(e).forEach(function(a){-1===t.indexOf(a)&&(n[a]=e[a])}),n}var c="object"===typeof window&&window.Element||function(){};s.a.oneOfType([s.a.string,s.a.func,function(e,t,n){if(!(e[t]instanceof c))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},s.a.shape({current:s.a.any})]);var u=s.a.oneOfType([s.a.func,s.a.string,s.a.shape({$$typeof:s.a.symbol,render:s.a.func}),s.a.arrayOf(s.a.oneOfType([s.a.func,s.a.string,s.a.shape({$$typeof:s.a.symbol,render:s.a.func})]))]);"undefined"===typeof window||!window.document||window.document.createElement;function l(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}},Qetd:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},TSYQ:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var s=typeof a;if("string"===s||"number"===s)e.push(a);else if(Array.isArray(a)){if(a.length){var o=r.apply(null,a);o&&e.push(o)}}else if("object"===s)if(a.toString===Object.prototype.toString)for(var i in a)n.call(a,i)&&a[i]&&e.push(i);else e.push(a.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},WbBG:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},g6bA:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/layouts/sections/wedding/header",function(){return n("rpdq")}])},ok1R:function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),s=n("q1tI"),o=n.n(s),i=n("17x9"),c=n.n(i),u=n("TSYQ"),l=n.n(u),d=n("33Jr"),f=["className","cssModule","noGutters","tag","form","widths"],p=c.a.oneOfType([c.a.number,c.a.string]),g={tag:d.d,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:p,sm:p,md:p,lg:p,xl:p},m={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var t=e.className,n=e.cssModule,s=e.noGutters,i=e.tag,c=e.form,u=e.widths,p=Object(r.a)(e,f),g=[];u.forEach(function(t,n){var a=e[t];if(delete p[t],a){var r=!n;g.push(r?"row-cols-"+a:"row-cols-"+t+"-"+a)}});var m=Object(d.b)(l()(t,s?"no-gutters":null,c?"form-row":"row",g),n);return o.a.createElement(i,Object(a.a)({},p,{className:m}))};b.propTypes=g,b.defaultProps=m,t.a=b},rhny:function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),s=n("q1tI"),o=n.n(s),i=n("17x9"),c=n.n(i),u=n("TSYQ"),l=n.n(u),d=n("33Jr"),f=["className","cssModule","widths","tag"],p=c.a.oneOfType([c.a.number,c.a.string]),g=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:p,offset:p})]),m={tag:d.d,xs:g,sm:g,md:g,lg:g,xl:g,className:c.a.string,cssModule:c.a.object,widths:c.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},v=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},h=function(e){var t=e.className,n=e.cssModule,s=e.widths,i=e.tag,c=Object(r.a)(e,f),u=[];s.forEach(function(t,a){var r=e[t];if(delete c[t],r||""===r){var s=!a;if(Object(d.a)(r)){var o,i=s?"-":"-"+t+"-",f=v(s,t,r.size);u.push(Object(d.b)(l()(((o={})[f]=r.size||""===r.size,o["order"+i+r.order]=r.order||0===r.order,o["offset"+i+r.offset]=r.offset||0===r.offset,o)),n))}else{var p=v(s,t,r);u.push(p)}}}),u.length||u.push("col");var p=Object(d.b)(l()(t,u),n);return o.a.createElement(i,Object(a.a)({},c,{className:p}))};h.propTypes=m,h.defaultProps=b,t.a=h},rpdq:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),s=n("1Yj4"),o=n("ok1R"),i=n("rhny"),c=r.a.createElement;t.default=function(){return c("section",{className:"wedding header",id:"header"},c("div",{className:"decore"},c("img",{alt:"",className:"img-fluid",src:"/assets/images/wedding-img/backgrounds/top-pattern.png"}),c("img",{alt:"",className:"img-fluid",src:"/assets/images/wedding-img/backgrounds/bottom-pattern.png"})),c("div",{className:"wedding-content"},c("div",{className:"wedding bg slider-bg"},c("div",{className:"bottom-0 set-abs girl"},c("img",{alt:"",className:"img-fluid",id:"girl",src:"/assets/images/wedding-img/slider/girl.png"})),c(s.a,null,c(o.a,null,c(i.a,{lg:"5",className:"offset-lg-7"},c("div",{className:"center-text m-t-50"},c("div",{className:"simple-text"},c("div",{className:"set-relative rightFadeInOut header-text"},c("img",{alt:"",className:"logo-h1",src:"/assets/images/wedding-img/logo-h1.png"})),c("p",{className:"header-sub-text"},"You don't marry the person you can live with \u2014 you marry the person you can't live without. "),c("div",{className:"rightfadediv"},c("div",null,c("img",{alt:"",className:"img-fluid bottom-img",src:"/assets/images/wedding-img/bottom.png"})))))))))))}},wx14:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",function(){return a})},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",function(){return a})}},[["g6bA",0,1]]]);