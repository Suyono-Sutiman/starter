/*! For license information please see component---src-pages-design-js-878f8b509cf9f0613b33.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"7vrA":function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),i=a("TSYQ"),c=a.n(i),s=a("q1tI"),l=a.n(s),o=a("vUet"),u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.fluid,s=e.as,u=void 0===s?"div":s,f=e.className,m=Object(r.a)(e,["bsPrefix","fluid","as","className"]),p=Object(o.a)(a,"container"),d="string"==typeof i?"-"+i:"-fluid";return l.a.createElement(u,Object(n.a)({ref:t},m,{className:c()(f,i?""+p+d:p)}))}));u.displayName="Container",u.defaultProps={fluid:!1},t.a=u},Lnxd:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("q1tI"),r=a.n(n),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},c=r.a.createContext&&r.a.createContext(i),s=function(){return(s=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},l=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};function o(e){return function(t){return r.a.createElement(u,s({attr:s({},e.attr)},t),function e(t){return t&&t.map((function(t,a){return r.a.createElement(t.tag,s({key:a},t.attr),e(t.child))}))}(e.child))}}function u(e){var t=function(t){var a,n=e.attr,i=e.size,c=e.title,o=l(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),r.a.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,o,{className:a,style:s(s({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&r.a.createElement("title",null,c),e.children)};return void 0!==c?r.a.createElement(c.Consumer,null,(function(e){return t(e)})):t(i)}},QRzb:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=a("7vrA"),c=a("Bl7J"),s=a("vrFN"),l=a("NIcq"),o=a("IdFE");t.default=function(){return r.a.createElement(c.a,null,r.a.createElement(s.a,{title:"Design",description:"responsif, cepat, dinamis, intuitif"}),r.a.createElement(i.a,{fluid:!0,className:"coo des"},r.a.createElement("div",{className:"about-d"},r.a.createElement("div",{className:"about-in"},r.a.createElement(l.a,{className:"ic1 scale-in-hor-left"}),r.a.createElement("h4",null,"Responsif"),r.a.createElement("p",{className:"text-focus-in"},"Tata letak saya akan berfungsi di perangkat apa pun, besar atau kecil.")),r.a.createElement("div",{className:"about-in"},r.a.createElement(o.b,{className:"ic1 scale-in-hor-left"}),r.a.createElement("h4",null,"Cepat"),r.a.createElement("p",{className:"text-focus-in"},"Waktu muat cepat dan interaksi bebas lag, prioritas tertinggi saya."))),r.a.createElement("div",{className:"about-d"},r.a.createElement("div",{className:"about-in"},r.a.createElement(o.a,{className:"ic1 scale-in-hor-left"}),r.a.createElement("h4",null,"Dinamis"),r.a.createElement("p",{className:"text-focus-in"},"Situs web tidak harus statis, saya membuat halaman menjadi hidup.")),r.a.createElement("div",{className:"about-in"},r.a.createElement(o.c,{className:"ic1 scale-in-hor-left"}),r.a.createElement("h4",null,"Intuitif"),r.a.createElement("p",{className:"text-focus-in"},"Preferensi yang kuat untuk UX / UI yang mudah digunakan dan intuitif.")))))}},TSYQ:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var c=r.apply(null,n);c&&e.push(c)}else if("object"===i)for(var s in n)a.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},vUet:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));a("wx14");var n=a("q1tI"),r=a.n(n),i=r.a.createContext({});i.Consumer,i.Provider;function c(e,t){var a=Object(n.useContext)(i);return e||a[t]||t}},wx14:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},zLVn:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-design-js-878f8b509cf9f0613b33.js.map