(this["webpackJsonptitles-search"]=this["webpackJsonptitles-search"]||[]).push([[0],{26:function(e,t,r){},56:function(e,t,r){"use strict";r.r(t);var n=r(2),c=r.n(n),a=r(19),s=r.n(a),o=(r(26),r(3)),i=r.n(o),l=r(5),u=r(4),d=r(20),b=r.n(d),j="https://www.omdbapi.com",m="1b0a316b",h=function(){var e=Object(l.a)(i.a.mark((function e(t){var r,n,c,a=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:1,e.prev=1,e.next=4,b.a.get("".concat(j,"?apikey=").concat(m,"&s=").concat(encodeURIComponent(t),"&page=").concat(r));case 4:if(n=e.sent,!(c=n.data).Error){e.next=8;break}throw new Error(c.Error);case 8:return e.abrupt("return",{productions:c.Search||[],totalResults:Number.parseInt(c.totalResults,10)||0});case 11:throw e.prev=11,e.t0=e.catch(1),new Error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),x=r(0),p=function(e){var t=e.children;return Object(x.jsx)("div",{className:"w-full min-h-screen","data-testid":"layout",children:Object(x.jsx)("main",{className:"mx-auto max-w-screen-lg p-4",children:t})})},f=function(){return Object(x.jsx)("div",{className:"w-12 h-12",children:Object(x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"animate-spin",children:Object(x.jsx)("path",{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})})})},O=function(){return Object(x.jsx)("div",{className:"fixed top-0 left-0 w-screen h-screen z-50 flex items-center justify-center bg-gray-200 bg-opacity-50","data-testid":"loader-overlay",children:Object(x.jsx)(f,{})})},v=function(e){var t=e.production;return Object(x.jsxs)("div",{className:"flex flex-col items-center md:flex-row md:items-start my-2 p-4 border-b-2 border-gray-400 border-opacity-50","data-testid":"production-details",children:[Object(x.jsx)("img",{src:t.Poster,className:"object-cover rounded-full justify-self-center w-40 h-40 md:h-56 md:rounded-md shadow-lg md:mx-4",alt:t.Title}),Object(x.jsxs)("div",{className:"flex flex-col items-center md:items-start my-4 md:my-0",children:[Object(x.jsx)("h1",{className:"text-lg md:text-3xl text-center",children:t.Title}),Object(x.jsx)("span",{className:"text-gray-600",children:t.Year})]})]})},g=r(7),w=function(e){return Object(x.jsx)("input",Object(g.a)(Object(g.a)({"data-testid":"search-box"},e),{},{className:"border-2 border-gray-200 rounded-lg p-4 my-4 focus:border-gray-700 transition-colors duration-500"}))},y=r(21),N=r.n(y),k=function(e){var t=e.children;return Object(x.jsx)("span",{className:"p-4 my-2 border-2 rounded-lg border-red-500 text-red-500","data-testid":"error-box",children:t})};function C(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)(""),s=Object(u.a)(a,2),o=s[0],d=s[1],b=Object(n.useState)(!1),j=Object(u.a)(b,2),m=j[0],f=j[1],g=Object(n.useState)(null),y=Object(u.a)(g,2),C=y[0],S=y[1],E=function(){var e=Object(l.a)(i.a.mark((function e(t){var r,n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,S(null),!(t.length<3)){e.next=5;break}return c([]),e.abrupt("return");case 5:return f(!0),e.next=8,h(t);case 8:r=e.sent,n=r.productions,c(n),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(0),a=(null===e.t0||void 0===e.t0?void 0:e.t0.message)||"Nous sommes d\xe9sol\xe9, something went wrong",S(a),c([]);case 18:return e.prev=18,f(!1),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[0,13,18,21]])})));return function(t){return e.apply(this,arguments)}}(),I=Object(n.useCallback)(N()(E,500),[]),F=Object(n.useMemo)((function(){return!(!r||!r.length)}),[r]);return Object(x.jsx)(p,{children:Object(x.jsxs)("div",{className:"flex flex-col",children:[Object(x.jsx)(w,{placeholder:"Search titles",value:o,onChange:function(e){var t=e.target.value;d(t),I(t)}}),m&&Object(x.jsx)(O,{}),C&&Object(x.jsx)(k,{children:C}),!F&&!m&&!C&&Object(x.jsx)("h1",{children:"No titles"}),F&&!m&&r.map((function(e){return Object(x.jsx)(v,{production:e},e.imdbID)}))]})})}var S=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,57)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;r(e),n(e),c(e),a(e),s(e)}))};s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(C,{})}),document.getElementById("root")),S()}},[[56,1,2]]]);
//# sourceMappingURL=main.b2c9970c.chunk.js.map