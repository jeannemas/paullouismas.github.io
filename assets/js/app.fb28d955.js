(function(e){function t(t){for(var n,r,i=t[0],c=t[1],l=t[2],u=0,d=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);f&&f(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,r=1;r<a.length;r++){var i=a[r];0!==o[i]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={app:0},o={app:0},s=[];function i(e){return c.p+"assets/js/"+({Portfolio:"Portfolio",SQLGenerator:"SQLGenerator",Tools:"Tools",WasherDashboard:"WasherDashboard"}[e]||e)+"."+{Portfolio:"491b59ad",SQLGenerator:"02b429cb",Tools:"2b7d466f",WasherDashboard:"595f8715"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={SQLGenerator:1,WasherDashboard:1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="assets/css/"+({Portfolio:"Portfolio",SQLGenerator:"SQLGenerator",Tools:"Tools",WasherDashboard:"WasherDashboard"}[e]||e)+"."+{Portfolio:"31d6cfe0",SQLGenerator:"45e06760",Tools:"31d6cfe0",WasherDashboard:"862ea91a"}[e]+".css",o=c.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===n||u===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete r[e],f.parentNode.removeChild(f),a(s)},f.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){r[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}o[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"7f21":function(e,t,a){},c281:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));a("99af"),a("13d5");var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(e<0)return e;if(e<60){var t=Math.round(e);return"".concat(t," second").concat(t>1?"s":""," ago")}if(e<3600){var a=Math.round(e/60);return"".concat(a," minute").concat(a>1?"s":""," ago")}if(e<86400){var n=Math.round(e/3600);return"".concat(n," hour").concat(n>1?"s":""," ago")}var r=Math.round(e/86400);return"".concat(r," day").concat(r>1?"s":""," ago")},r=function(e){return JSON.parse(JSON.stringify(e))}},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=(a("92c6"),a("77ed"),a("ecee")),o=a("c074"),s=a("ad3d"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("router-view")},c=[],l=n["a"].extend({name:"App"}),u=l,d=a("2877"),f=Object(d["a"])(u,i,c,!1,null,null,null),m=f.exports,h=a("9483");Object(h["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});a("d3b7");var p=a("8c4f"),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"navbar is-transparent",class:{"is-fixed-top":e.isFixedTop},attrs:{role:"navigation","aria-label":"main navigation"}},[a("div",{staticClass:"navbar-brand"},[a("a",{staticClass:"navbar-burger burger",class:{"is-active":!!e.navbarOpened},attrs:{role:"button","aria-label":"menu","aria-expanded":"false"},on:{click:function(t){e.navbarOpened=!e.navbarOpened}}},[a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"navbar-menu",class:{"is-active":!!e.navbarOpened}},[a("div",{staticClass:"navbar-start"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[e._v(" Home ")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/portfolio/"}},[e._v(" Portfolio ")])],1),a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[a("router-link",{staticClass:"navbar-link",attrs:{to:"/tools/"}},[e._v(" Tools ")]),a("div",{staticClass:"navbar-dropdown is-right is-boxed"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/tools/sql-generator/"}},[e._v(" SQL Command Generator ")]),a("hr",{staticClass:"navbar-divider"}),a("router-link",{staticClass:"navbar-item",attrs:{to:"/tools/washer-dashboard/"}},[e._v(" Washer Dashboard ")])],1)],1)])])])},b=[],g=n["a"].extend({name:"Navbar",data:function(){return{navbarOpened:!1,activeClass:"is-active",isFixedTop:!1}},props:{fixedTop:Boolean},mounted:function(){this.isFixedTop=this.$props.fixedTop,this.isFixedTop&&document.body.classList.add("has-navbar-fixed-top")},beforeDestroy:function(){this.isFixedTop&&document.body.classList.contains("has-navbar-fixed-top")&&document.body.classList.remove("has-navbar-fixed-top")}}),w=g,_=(a("d9eb"),Object(d["a"])(w,v,b,!1,null,null,null)),y=_.exports,T=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},x=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"footer"},[a("p",{staticClass:"content has-text-centered"},[a("a",{attrs:{href:"https://bulma.io",target:"_blank"}},[a("img",{attrs:{src:"https://bulma.io/images/made-with-bulma.png",alt:"Made with Bulma",width:"128",height:"24"}})]),a("br"),e._v(" by "),a("a",{attrs:{href:"https://instagram.com/paullouis.mas/",target:"_blank"}},[e._v(" Paul-Louis Mas ")])])])}],C=n["a"].extend({name:"Footer"}),O=C,S=Object(d["a"])(O,T,x,!1,null,null,null),j=S.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("router-view",{attrs:{name:"navbar"}}),a("router-view"),a("router-view",{attrs:{name:"footer"}})],1)},L=[],P=n["a"].extend({name:"Root"}),E=P,D=Object(d["a"])(E,k,L,!1,null,null,null),M=D.exports,G=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},A=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("section",{staticClass:"section hero is-medium"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"is-1 title is-spaced"},[e._v(" Paul-Louis Mas ")]),a("h3",{staticClass:"is-3 subtitle"},[e._v(" Hello, I'm Paul-Louis, a french-canadian developer/photographer/cinematographer ")])])])])])}],Q=n["a"].extend({name:"Home"}),N=Q,W=Object(d["a"])(N,G,A,!1,null,null,null),F=W.exports;n["a"].use(p["a"]);var $=function(e){return{navbar:y,default:e,footer:j}},B=new p["a"]({mode:"hash",base:"/",routes:[{path:"/",name:"Root",component:M,children:[{path:"",name:"Home",components:$(F)},{path:"portfolio",name:"Portfolio",components:$((function(){return a.e("Portfolio").then(a.bind(null,"d66e"))}))},{path:"tools",name:"Tools",components:$((function(){return a.e("Tools").then(a.bind(null,"8c64"))})),children:[{path:"sql-generator",name:"SQL Generator",component:function(){return a.e("SQLGenerator").then(a.bind(null,"6bba"))},children:[{path:"documentation",name:"SQL Generator Documentation",component:function(){return a.e("SQLGenerator").then(a.bind(null,"6336"))}}]},{path:"washer-dashboard",name:"Washer Dashboard",component:function(){return a.e("WasherDashboard").then(a.bind(null,"238c"))}}]}]}],linkExactActiveClass:"is-active"}),q=B,H=(a("4160"),a("13d5"),a("a434"),a("b0c0"),a("159b"),a("2f62")),J=a("bfa9"),I=a("c281");n["a"].use(H["a"]);var R={teams:[],game:{started:!1,startTime:null},history:[],tabs:{activeTab:"Teams"}},K=new H["a"].Store({modules:{WasherDashboard:{namespaced:!0,state:Object(I["a"])(Object.assign({},R)),mutations:{setActiveTab:function(e,t){e.tabs.activeTab=t},createTeam:function(e,t){var a=t.name,n=t.mainMember,r=t.additionalMembers,o={_id:Date.now(),name:a,mainMember:n,additionalMembers:r,score:0};e.teams.push(o)},deleteTeam:function(e,t){var a=t._id,n=e.teams.reduce((function(e,t,n){return t._id===a?n:e}),void 0);void 0!==n&&e.teams.splice(n,1)},startGame:function(e){e.game.started||(e.game.started=!0,e.game.startTime=new Date)},finishGame:function(e){e.game.started&&(e.history.push({_id:Date.now(),startTime:e.game.startTime,winningTeam:Object(I["a"])(Object.assign([],e.teams)).sort((function(e,t){return t.score<e.score?-1:1}))[0],teams:Object(I["a"])(Object.assign([],e.teams))}),e.game.started=!1,e.game.startTime=null,e.teams.forEach((function(e){e.score=0})))},setTeamScore:function(e,t){var a=t.team,n=t.score,r=e.teams.reduce((function(e,t,n){return t._id===a._id?n:e}),void 0),o=n>0?n:0;e.teams[r].score=o}}}},plugins:[new J["a"]({storage:window.localStorage,key:"vuex-store"}).plugin]}),U=K;n["a"].config.productionTip=!1,r["c"].add(o["a"]),n["a"].component("font-awesome-icon",s["a"]),new n["a"]({el:"#app",router:q,store:U,render:function(e){return e(m)}})},d9eb:function(e,t,a){"use strict";var n=a("7f21"),r=a.n(n);r.a}});