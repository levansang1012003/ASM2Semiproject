/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9,16,20,24],{344:function(t,e,r){"use strict";r.r(e);r(21),r(61),r(81);var n=r(60),o={name:"Dropdown",data:function(){return{optionsData:this.options,searched:"",dropdownOpen:!1,hasLayer:this.layer,selectedKeyData:""}},mounted:function(){this.selectedKeyData=this.selectedKey,this.processSelected(this.options)},watch:{options:function(t){this.processSelected(t)},selectedKey:function(t){this.selectedKeyData=t},searched:function(t){this.doSearch(t)}},props:{disabled:{type:Boolean,default:!1},defaultNull:{type:Boolean,default:!1},positionFixed:{type:Boolean,default:!0},options:{type:Object,default:function(){return{0:{title:"--------------"}}}},selectedKey:{default:function(){return Object.keys(this.options)[0]}},keyName:{type:String,default:"title"},searching:{type:Boolean,default:!1},layer:{type:Boolean,default:!1}},directives:{outsideClick:n.a},computed:{currentId:function(){return"dropdown-".concat(this._uid)},isSmallerDevice:function(){return window.innerWidth<=768},opt:function(){var t;return null!==(t=this.optionsData)&&void 0!==t?t:null},currentKey:function(){return this.selectedKeyData&&this.options[this.selectedKeyData]?this.selectedKeyData:Object.keys(this.optionsData)[0]},selectedValue:function(){return this.opt&&this.opt[this.currentKey]&&this.opt[this.currentKey][this.keyName]?this.opt[this.currentKey][this.keyName]:"--------------"}},methods:{processSelected:function(t){this.selectedKey||this.defaultNull?!this.selectedKey&&this.defaultNull?(t[0]={title:"--------------"},this.selectedKeyData="0"):this.defaultNull&&(t[0]={title:"--------------"}):(this.selectedKeyData=Object.keys(t)[0],this.$emit("clicked",{key:this.selectedKeyData,value:t[0]})),this.optionsData=t},doSearch:function(t){this.optionsData={};var object=this.options;for(var e in object)object[e][this.keyName].toLowerCase().includes(t.toLowerCase())&&(this.opt[e]=object[e])},openDropdown:function(){var t=this;if(this.disabled)return!1;this.isSmallerDevice&&(this.hasLayer=!0),this.hasLayer&&this.positionFixed&&document.body.classList.add("no-scroll"),this.dropdownOpen=!this.dropdownOpen,this.$emit("value",this.dropdownOpen),this.searching&&this.dropdownOpen&&this.$nextTick((function(){t.$refs.searcBox.focus()}))},closeDropdown:function(){this.positionFixed&&document.body.classList.remove("no-scroll"),this.dropdownOpen=!1,this.$emit("value",this.dropdownOpen)},clicked:function(t,e){this.closeDropdown(),this.searched="",("0"!==t&&this.currentKey!==t||this.defaultNull&&this.currentKey!==t)&&(this.selectedKeyData=t,this.$emit("clicked",{key:t,value:e}))}}},d=(r(353),r(14)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"custom-dropdown",class:{open:t.dropdownOpen}},[r("span",{class:{disabled:t.disabled},attrs:{"data-ignore":t.currentId},on:{click:function(e){return e.preventDefault(),t.openDropdown.apply(null,arguments)}}},[t._v("\n    "+t._s(t.selectedValue)+"\n    "),r("i",{staticClass:"icon black ignore-click",class:[{"arrow-up":t.dropdownOpen},{"arrow-down":!t.dropdownOpen}]})]),t._v(" "),t.dropdownOpen?r("div",{staticClass:"dropdown-wrapper"},[t.hasLayer?r("div",{staticClass:"layer",attrs:{"data-ignore":t.currentId},on:{click:t.closeDropdown}}):t._e(),t._v(" "),r("div",{directives:[{name:"outside-click",rawName:"v-outside-click",value:t.closeDropdown,expression:"closeDropdown"}],staticClass:"dropdown-inner",attrs:{id:t.currentId}},[t.searching?r("input",{directives:[{name:"model",rawName:"v-model",value:t.searched,expression:"searched"}],ref:"searcBox",attrs:{type:"text"},domProps:{value:t.searched},on:{input:function(e){e.target.composing||(t.searched=e.target.value)}}}):t._e(),t._v(" "),r("ul",t._l(t.opt,(function(data,e){return r("li",{key:e,class:{active:""+t.selectedKeyData==""+e},on:{click:function(r){return r.preventDefault(),t.clicked(e,data)}}},[t._v("\n          "+t._s(data[t.keyName])+"\n        ")])})),0)])]):t._e()])}),[],!1,null,null,null);e.default=component.exports},347:function(t,e,r){var content=r(354);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(52).default)("178af679",content,!0,{sourceMap:!1})},348:function(t,e,r){t.exports=function(){"use strict";var g="undefined"!=typeof document&&document.documentMode,t={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var e=t.querySelector("img"),r=!1;null===e&&(e=document.createElement("img"),r=!0),g&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),r&&t.append(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var a=t.children,n=void 0,i=0;i<=a.length-1;i++)(n=a[i].getAttribute("data-src"))&&(a[i].src=n);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));var o=",";if(t.getAttribute("data-background-delimiter")&&(o=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage="url('"+t.getAttribute("data-background-image").split(o).join("'),url('")+"')";else if(t.getAttribute("data-background-image-set")){var d=t.getAttribute("data-background-image-set").split(o),u=d[0].substr(0,d[0].indexOf(" "))||d[0];u=-1===u.indexOf("url(")?"url("+u+")":u,1===d.length?t.style.backgroundImage=u:t.setAttribute("style",(t.getAttribute("style")||"")+"background-image: "+u+"; background-image: -webkit-image-set("+d+"); background-image: image-set("+d+")")}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};function e(t){t.setAttribute("data-loaded",!0)}var r=function(t){return"true"===t.getAttribute("data-loaded")},n=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)};return function(){var o,a,d=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},l=Object.assign({},t,c),i=l.root,h=l.rootMargin,f=l.threshold,u=l.load,g=l.loaded,s=void 0;"undefined"!=typeof window&&window.IntersectionObserver&&(s=new IntersectionObserver((o=u,a=g,function(t,n){t.forEach((function(t){(0<t.intersectionRatio||t.isIntersecting)&&(n.unobserve(t.target),r(t.target)||(o(t.target),e(t.target),a(t.target)))}))}),{root:i,rootMargin:h,threshold:f}));for(var m,v=n(d,i),b=0;b<v.length;b++)(m=v[b]).getAttribute("data-placeholder-background")&&(m.style.background=m.getAttribute("data-placeholder-background"));return{observe:function(){for(var t=n(d,i),o=0;o<t.length;o++)r(t[o])||(s?s.observe(t[o]):(u(t[o]),e(t[o]),g(t[o])))},triggerLoad:function(t){r(t)||(u(t),e(t),g(t))},observer:s}}}()},349:function(t,e,r){"use strict";r.r(e);var n=r(348),o=r.n(n),d=r(59),c={name:"LazyImage",props:{alt:{type:String,default:null},title:{type:String,default:null},backgroundColor:{type:String,default:"#d9f4eb"},lazySrc:{type:String,default:null},lazySrcset:{type:String,default:null}},data:function(){return{loading:!0}},mixins:[d.a],computed:{aspectRatio:function(){return this.width&&this.height?this.height/this.width*100:null},style:function(){var style={};return this.width&&(style.width="".concat(this.width,"px"),this.height||(style.height="".concat(.66*this.width,"px"))),this.loading&&this.aspectRatio&&(style.height=this.height?"".concat(this.height,"px"):"".concat(this.applyAspectRatio,"px")),style}},mounted:function(){var t=this,e=function(){t.loading=!1,t.$el.style.opacity=1};this.$el.addEventListener("load",e),this.$once("hook:destroyed",(function(){t.$el.removeEventListener("load",e)})),o()(this.$el,{load:function(t){t.src=t.getAttribute("data-src")}}).observe()},methods:{onError:function(t){t.target.src=this.getImageURL()}}},l=r(14),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{staticClass:"lazy-img",style:t.style,attrs:{"data-src":t.lazySrc,alt:t.alt,title:t.title,height:"50",width:"50"},on:{error:t.onError}})}),[],!1,null,null,null);e.default=component.exports},353:function(t,e,r){"use strict";r(347)},354:function(t,e,r){var n=r(51)(!1);n.push([t.i,".dropdown-inner::-webkit-scrollbar-track{background-color:rgba(0,0,0,.1);background-color:#eee}.dropdown-inner::-webkit-scrollbar{width:8px}.dropdown-inner::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.15);border-radius:40px}.custom-dropdown+button>.undo-icon{opacity:.8;transform:scale(.8)}.custom-dropdown{position:relative;display:inline-block;line-height:0}.custom-dropdown .layer{z-index:1}.custom-dropdown span{display:flex;align-items:center;justify-content:space-between;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:0 15px 0 20px;height:42px;line-height:42px;background:linear-gradient(180deg,#f7f8fa,#e7e9ec);border:1px solid #bbb;border-radius:5px;font-size:.95em;min-width:80px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:all .1s}.custom-dropdown span i{opacity:.5;margin-left:10px}.custom-dropdown span:hover:not(.disabled){background:#f6f4f4!important}.custom-dropdown span:active:not(.disabled){box-shadow:0 0 2px 1px #4285f4}.custom-dropdown .dropdown-inner{position:absolute;top:100%;left:0;min-width:200px;background:#fff;padding:7.5px 5px;border-radius:5px;box-shadow:0 2px 10px rgba(0,0,0,.1);z-index:2;max-height:400px;overflow:auto}.custom-dropdown .dropdown-inner>input{padding:0 10px;border:1px solid #ddd;margin-bottom:5px}.custom-dropdown .dropdown-inner ul{max-height:340px}.custom-dropdown .dropdown-inner ul li{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;display:block;padding:7.5px 20px;transition:all .1s;margin:0}.custom-dropdown .dropdown-inner ul li:hover{background:#eee}.custom-dropdown .dropdown-inner ul .active{background:#f6f6f7}.right-dropdown.custom-dropdown .dropdown-inner{left:auto;right:0}.open span{box-shadow:0 0 1px 1px #4285f4}@media only screen and (max-width:992px){.custom-dropdown .dropdown-wrapper{left:auto;right:0}}@media only screen and (max-width:768px){.custom-dropdown .dropdown-wrapper{position:fixed;top:0;left:0!important;right:0!important;bottom:0;z-index:10}.custom-dropdown .dropdown-wrapper .layer{top:0;display:block}.custom-dropdown .dropdown-wrapper .dropdown-inner{top:50%;left:50%;transform:translate(-50%,-50%)}.custom-dropdown .dropdown-wrapper ul{max-height:60vh}.custom-dropdown .dropdown-wrapper ul li{padding:7.5px 15px}}@media only screen and (max-width:576px){.custom-dropdown span{padding:0 10px 0 15px}}",""]),t.exports=n},715:function(t,e,r){"use strict";r.r(e);r(21),r(20),r(22),r(27),r(28);var n=r(3),o=r(6),d=(r(23),r(8),r(17),r(59)),c=r(344),l=r(11),h=r(44),f=r(349);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w={name:"OrderStatistic",data:function(){return{fetching:!0,time:null,selected:"9999",dashboardOptions:{9999:{title:"All"},1:{title:"Today"},7:{title:"Last week"},30:{title:"Last month"},365:{title:"Last year"}}}},mixins:[d.a],components:{LazyImage:f.default,Dropdown:c.default,Spinner:h.default},computed:v(v({currencyPosition:function(){var t;return null===(t=this.setting)||void 0===t?void 0:t.currency_position},currencyIcon:function(){var t;return(null===(t=this.setting)||void 0===t?void 0:t.currency_icon)||"$"},cancelled:function(){var t;return null===(t=this.orderStatistic)||void 0===t?void 0:t.cancelled},pending:function(){return this.statistics[this.orderStatusIn.PENDING]||0},confirmed:function(){return this.statistics[this.orderStatusIn.CONFIRMED]||0},pickedUp:function(){return this.statistics[this.orderStatusIn.PICKED_UP]||0},onTheWay:function(){return this.statistics[this.orderStatusIn.ON_THE_WAY]||0},delivered:function(){return this.statistics[this.orderStatusIn.DELIVERED]||0},statistics:function(){var t,e={};return null===(t=this.orderStatistic)||void 0===t||t.statistics.forEach((function(t){e[t.status]=t.total})),e},categories:function(){var t;return null===(t=this.orderStatistic)||void 0===t?void 0:t.categories},brands:function(){var t;return null===(t=this.orderStatistic)||void 0===t?void 0:t.brands},products:function(){var t;return null===(t=this.orderStatistic)||void 0===t?void 0:t.products}},Object(l.c)("setting",["setting"])),Object(l.c)("dashboard",["orderStatistic"])),methods:v({calcDate:function(t){if(t<9999){var e=new Date((new Date).setHours(0,0,0,0));return new Date(e.getTime()-24*(t-1)*60*60*1e3)}return null},dropdownSelected:function(t){this.time=this.time=this.calcDate(parseInt(t.key)),this.fetchingData()},fetchingData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.fetching=!0,e.prev=1,e.next=4,t.getOrderStatistic({time:t.time,time_zone:t.timeZone});case 4:e.next=9;break;case 6:return e.prev=6,e.t0=e.catch(1),e.abrupt("return",t.$nuxt.error(e.t0));case 9:t.fetching=!1;case 10:case"end":return e.stop()}}),e,null,[[1,6]])})))()}},Object(l.b)("dashboard",["getOrderStatistic"])),destroyed:function(){},mounted:function(){this.fetchingData()}},_=r(14),component=Object(_.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pos-rel"},[t.fetching?r("div",{staticClass:"h-100 dply-felx j-center abs-centered"},[r("spinner",{staticClass:"mr-15",attrs:{radius:60,color:"primary"}})],1):t._e(),t._v(" "),r("div",{staticClass:"card p-15 p-xs-10 dply-felx mb-20 mb-sm-15 mb-xs-10"},[t._m(0),t._v(" "),r("dropdown",{staticClass:"right-dropdown",attrs:{"selected-key":t.selected,options:t.dashboardOptions},on:{clicked:t.dropdownSelected}})],1),t._v(" "),r("div",{staticClass:"order-status-wrapper mb-20 mb-sm-15 mb-xs-10"},[r("div",{staticClass:"card p-20"},[r("p",[t._v("Order cancelled")]),t._v(" "),r("h3",[t._v(t._s(t.cancelled))])]),t._v(" "),r("div",{staticClass:"card p-20"},[r("p",[t._v("Pending orders")]),t._v(" "),r("h3",[t._v(t._s(t.pending))])]),t._v(" "),r("div",{staticClass:"card p-20"},[r("p",[t._v("Confirmed orders")]),t._v(" "),r("h3",[t._v(t._s(t.confirmed))])]),t._v(" "),r("div",{staticClass:"card p-20"},[r("p",[t._v("Package picked up")]),t._v(" "),r("h3",[t._v(t._s(t.pickedUp))])]),t._v(" "),r("div",{staticClass:"card p-20"},[r("p",[t._v("On the way")]),t._v(" "),r("h3",[t._v(t._s(t.onTheWay))])]),t._v(" "),r("div",{staticClass:"card p-20"},[r("p",[t._v("Delivered")]),t._v(" "),r("h3",[t._v(t._s(t.delivered))])])]),t._v(" "),r("div",{staticClass:"order-status-wrapper mb-20 mb-sm-15 mb-xs-10"},[r("div",{staticClass:"card p-20 p-sm-15"},[t._m(1),t._v(" "),t.categories&&!t.categories.length?r("p",{staticClass:"mb-10"},[t._v("Nothing found")]):r("div",{staticClass:"table-wrapper"},[r("table",{staticClass:"mn-w-400x mb-10 mt-0 tr-border"},[t._m(2),t._v(" "),t._l(t.categories,(function(e,n){return r("tr",{key:n},[r("td",{},[r("nuxt-link",{staticClass:"dply-felx j-left link",attrs:{to:"/categories/"+e.id}},[r("lazy-image",{staticClass:"mr-20",attrs:{"data-src":t.getThumbImageURL(e.image),alt:e.title}}),t._v(" "),r("h5",{staticClass:"mx-w-300x"},[t._v(t._s(e.title))])],1)],1),r("td",[t._v("\n              "+t._s(e.total)+"\n            ")]),t._v(" "),r("td",[t._v("\n              "+t._s(t.priceFormatting(e.total_price))+"\n            ")])])}))],2)])]),t._v(" "),r("div",{staticClass:"card p-20 p-sm-15"},[t._m(3),t._v(" "),t.brands&&!t.brands.length?r("p",{staticClass:"mb-10"},[t._v("Nothing found")]):r("div",{staticClass:"table-wrapper"},[r("table",{staticClass:"mn-w-400x mb-10 mt-0 tr-border"},[t._m(4),t._v(" "),t._l(t.brands,(function(e,n){return r("tr",{key:n},[r("td",{},[r("nuxt-link",{staticClass:"dply-felx j-left link",attrs:{to:"/brands/"+e.id}},[r("lazy-image",{staticClass:"mr-20",attrs:{"data-src":t.getThumbImageURL(e.image),alt:e.title}}),t._v(" "),r("h5",{staticClass:"mx-w-300x"},[t._v(t._s(e.title))])],1)],1),t._v(" "),r("td",[t._v("\n              "+t._s(e.total)+"\n            ")]),t._v(" "),r("td",[t._v("\n              "+t._s(t.priceFormatting(e.total_price))+"\n            ")])])}))],2)])])]),t._v(" "),r("div",{staticClass:"card p-20 p-sm-15"},[t._m(5),t._v(" "),t.products&&!t.products.length?r("p",{staticClass:"mb-10"},[t._v("Nothing found")]):r("div",{staticClass:"table-wrapper"},[r("table",{staticClass:"mn-w-800x mb-10 mt-0 tr-border"},[t._m(6),t._v(" "),t._l(t.products,(function(e,n){return r("tr",{key:n},[r("td",[r("nuxt-link",{staticClass:"dply-felx j-left link",attrs:{to:"/products/"+e.id}},[r("lazy-image",{staticClass:"mr-20",attrs:{"data-src":t.getThumbImageURL(e.image),alt:e.title}}),t._v(" "),r("h5",{staticClass:"mx-w-800x"},[t._v(t._s(e.title))])],1)],1),t._v(" "),r("td",[t._v("\n            "+t._s(e.total)+"\n          ")]),t._v(" "),r("td",[t._v("\n            "+t._s(t.priceFormatting(e.total_price))+"\n          ")])])}))],2)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h5",[r("b",[t._v("\n      Order statistics\n    ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h5",{staticClass:"mb-15"},[r("b",[t._v("Top Category")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",{staticClass:"lite-bold"},[r("th",[t._v("Title")]),t._v(" "),r("th",[t._v("Sold")]),t._v(" "),r("th",[t._v("Amount")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h5",{staticClass:"mb-15"},[r("b",[t._v("Top Brand")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",{staticClass:"lite-bold"},[r("th",[t._v("Title")]),t._v(" "),r("th",[t._v("Sold")]),t._v(" "),r("th",[t._v("Amount")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h5",{staticClass:"mb-10"},[r("b",[t._v("Top Products")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",{staticClass:"lite-bold"},[r("th",[t._v("Title")]),t._v(" "),r("th",[t._v("Sold")]),t._v(" "),r("th",[t._v("Amount")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Spinner:r(44).default,Dropdown:r(344).default,LazyImage:r(349).default})}}]);