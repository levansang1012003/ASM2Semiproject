(window.webpackJsonp=window.webpackJsonp||[]).push([[104,15,16,21],{343:function(e,t,n){"use strict";n.r(t);var o={name:"AjaxButton",components:{Spinner:n(44).default},props:{color:{type:String,default:"white"},text:{type:String,default:"Submit"},onlyIcon:{type:String,default:null},loadingText:{type:String,default:"Getting Response"},fetchingData:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},type:{type:String,default:"Submit"}},computed:{buttonText:function(){return this.fetchingData?this.loadingText:this.text},disable:function(){return this.fetchingData}},methods:{btnClicked:function(){"Submit"!==this.type&&this.$emit("clicked")}}},r=(n(350),n(14)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"ajax-btn",attrs:{disabled:e.disable||e.disabled,type:e.type},on:{"&click":function(t){return e.btnClicked.apply(null,arguments)}}},[e.fetchingData?n("spinner",{class:{"mr-15":!e.onlyIcon},attrs:{color:e.color}}):e._e(),e._v(" "),e.onlyIcon&&!e.fetchingData?n("i",{staticClass:"icon",class:e.onlyIcon}):e._e(),e._v(" "),e.onlyIcon?e._e():n("span",[e._v("\n    "+e._s(e.buttonText)+"\n  ")])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Spinner:n(44).default})},344:function(e,t,n){"use strict";n.r(t);n(21),n(61),n(81);var o=n(60),r={name:"Dropdown",data:function(){return{optionsData:this.options,searched:"",dropdownOpen:!1,hasLayer:this.layer,selectedKeyData:""}},mounted:function(){this.selectedKeyData=this.selectedKey,this.processSelected(this.options)},watch:{options:function(e){this.processSelected(e)},selectedKey:function(e){this.selectedKeyData=e},searched:function(e){this.doSearch(e)}},props:{disabled:{type:Boolean,default:!1},defaultNull:{type:Boolean,default:!1},positionFixed:{type:Boolean,default:!0},options:{type:Object,default:function(){return{0:{title:"--------------"}}}},selectedKey:{default:function(){return Object.keys(this.options)[0]}},keyName:{type:String,default:"title"},searching:{type:Boolean,default:!1},layer:{type:Boolean,default:!1}},directives:{outsideClick:o.a},computed:{currentId:function(){return"dropdown-".concat(this._uid)},isSmallerDevice:function(){return window.innerWidth<=768},opt:function(){var e;return null!==(e=this.optionsData)&&void 0!==e?e:null},currentKey:function(){return this.selectedKeyData&&this.options[this.selectedKeyData]?this.selectedKeyData:Object.keys(this.optionsData)[0]},selectedValue:function(){return this.opt&&this.opt[this.currentKey]&&this.opt[this.currentKey][this.keyName]?this.opt[this.currentKey][this.keyName]:"--------------"}},methods:{processSelected:function(e){this.selectedKey||this.defaultNull?!this.selectedKey&&this.defaultNull?(e[0]={title:"--------------"},this.selectedKeyData="0"):this.defaultNull&&(e[0]={title:"--------------"}):(this.selectedKeyData=Object.keys(e)[0],this.$emit("clicked",{key:this.selectedKeyData,value:e[0]})),this.optionsData=e},doSearch:function(e){this.optionsData={};var object=this.options;for(var t in object)object[t][this.keyName].toLowerCase().includes(e.toLowerCase())&&(this.opt[t]=object[t])},openDropdown:function(){var e=this;if(this.disabled)return!1;this.isSmallerDevice&&(this.hasLayer=!0),this.hasLayer&&this.positionFixed&&document.body.classList.add("no-scroll"),this.dropdownOpen=!this.dropdownOpen,this.$emit("value",this.dropdownOpen),this.searching&&this.dropdownOpen&&this.$nextTick((function(){e.$refs.searcBox.focus()}))},closeDropdown:function(){this.positionFixed&&document.body.classList.remove("no-scroll"),this.dropdownOpen=!1,this.$emit("value",this.dropdownOpen)},clicked:function(e,t){this.closeDropdown(),this.searched="",("0"!==e&&this.currentKey!==e||this.defaultNull&&this.currentKey!==e)&&(this.selectedKeyData=e,this.$emit("clicked",{key:e,value:t}))}}},d=(n(353),n(14)),component=Object(d.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"custom-dropdown",class:{open:e.dropdownOpen}},[n("span",{class:{disabled:e.disabled},attrs:{"data-ignore":e.currentId},on:{click:function(t){return t.preventDefault(),e.openDropdown.apply(null,arguments)}}},[e._v("\n    "+e._s(e.selectedValue)+"\n    "),n("i",{staticClass:"icon black ignore-click",class:[{"arrow-up":e.dropdownOpen},{"arrow-down":!e.dropdownOpen}]})]),e._v(" "),e.dropdownOpen?n("div",{staticClass:"dropdown-wrapper"},[e.hasLayer?n("div",{staticClass:"layer",attrs:{"data-ignore":e.currentId},on:{click:e.closeDropdown}}):e._e(),e._v(" "),n("div",{directives:[{name:"outside-click",rawName:"v-outside-click",value:e.closeDropdown,expression:"closeDropdown"}],staticClass:"dropdown-inner",attrs:{id:e.currentId}},[e.searching?n("input",{directives:[{name:"model",rawName:"v-model",value:e.searched,expression:"searched"}],ref:"searcBox",attrs:{type:"text"},domProps:{value:e.searched},on:{input:function(t){t.target.composing||(e.searched=t.target.value)}}}):e._e(),e._v(" "),n("ul",e._l(e.opt,(function(data,t){return n("li",{key:t,class:{active:""+e.selectedKeyData==""+t},on:{click:function(n){return n.preventDefault(),e.clicked(t,data)}}},[e._v("\n          "+e._s(data[e.keyName])+"\n        ")])})),0)])]):e._e()])}),[],!1,null,null,null);t.default=component.exports},345:function(e,t,n){var content=n(351);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(52).default)("91a8990a",content,!0,{sourceMap:!1})},347:function(e,t,n){var content=n(354);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(52).default)("178af679",content,!0,{sourceMap:!1})},350:function(e,t,n){"use strict";n(345)},351:function(e,t,n){var o=n(51)(!1);o.push([e.i,".ajax-btn{display:flex;justify-content:center;align-items:center}button:disabled,button[disabled]{opacity:.6;cursor:no-drop}",""]),e.exports=o},353:function(e,t,n){"use strict";n(347)},354:function(e,t,n){var o=n(51)(!1);o.push([e.i,".dropdown-inner::-webkit-scrollbar-track{background-color:rgba(0,0,0,.1);background-color:#eee}.dropdown-inner::-webkit-scrollbar{width:8px}.dropdown-inner::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.15);border-radius:40px}.custom-dropdown+button>.undo-icon{opacity:.8;transform:scale(.8)}.custom-dropdown{position:relative;display:inline-block;line-height:0}.custom-dropdown .layer{z-index:1}.custom-dropdown span{display:flex;align-items:center;justify-content:space-between;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:0 15px 0 20px;height:42px;line-height:42px;background:linear-gradient(180deg,#f7f8fa,#e7e9ec);border:1px solid #bbb;border-radius:5px;font-size:.95em;min-width:80px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:all .1s}.custom-dropdown span i{opacity:.5;margin-left:10px}.custom-dropdown span:hover:not(.disabled){background:#f6f4f4!important}.custom-dropdown span:active:not(.disabled){box-shadow:0 0 2px 1px #4285f4}.custom-dropdown .dropdown-inner{position:absolute;top:100%;left:0;min-width:200px;background:#fff;padding:7.5px 5px;border-radius:5px;box-shadow:0 2px 10px rgba(0,0,0,.1);z-index:2;max-height:400px;overflow:auto}.custom-dropdown .dropdown-inner>input{padding:0 10px;border:1px solid #ddd;margin-bottom:5px}.custom-dropdown .dropdown-inner ul{max-height:340px}.custom-dropdown .dropdown-inner ul li{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;display:block;padding:7.5px 20px;transition:all .1s;margin:0}.custom-dropdown .dropdown-inner ul li:hover{background:#eee}.custom-dropdown .dropdown-inner ul .active{background:#f6f6f7}.right-dropdown.custom-dropdown .dropdown-inner{left:auto;right:0}.open span{box-shadow:0 0 1px 1px #4285f4}@media only screen and (max-width:992px){.custom-dropdown .dropdown-wrapper{left:auto;right:0}}@media only screen and (max-width:768px){.custom-dropdown .dropdown-wrapper{position:fixed;top:0;left:0!important;right:0!important;bottom:0;z-index:10}.custom-dropdown .dropdown-wrapper .layer{top:0;display:block}.custom-dropdown .dropdown-wrapper .dropdown-inner{top:50%;left:50%;transform:translate(-50%,-50%)}.custom-dropdown .dropdown-wrapper ul{max-height:60vh}.custom-dropdown .dropdown-wrapper ul li{padding:7.5px 15px}}@media only screen and (max-width:576px){.custom-dropdown span{padding:0 10px 0 15px}}",""]),e.exports=o},767:function(e,t,n){"use strict";n.r(t);n(21),n(20),n(22),n(8),n(27),n(17),n(28);var o=n(3),r=n(6),d=(n(23),n(59)),l=n(343),c=n(44),f=n(344),h=n(11);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var w={name:"brands",middleware:["auth"],data:function(){return{formSubmitting:!1,statusChanged:!1,loading:!1,result:{id:"",name:"",email:"",subject:"",replied:""}}},mixins:[d.a],components:{Dropdown:f.default,Spinner:c.default,AjaxButton:l.default},computed:{id:function(){var e,t;return null===(e=this.$route)||void 0===e||null===(t=e.params)||void 0===t?void 0:t.id}},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({updateSReplied:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.statusChanged){t.next=2;break}return t.abrupt("return",!1);case 2:return e.statusChanged=!1,e.formSubmitting=!0,t.prev=4,t.next=7,e.setById({id:e.id,params:e.result,api:"setUserMessage"});case 7:t.next=12;break;case 9:return t.prev=9,t.t0=t.catch(4),t.abrupt("return",e.$nuxt.error(t.t0));case 12:e.formSubmitting=!1;case 13:case"end":return t.stop()}}),t,null,[[4,9]])})))()},dropdownSelected:function(data){this.statusChanged=!0,this.result.replied=data.key},fetchingData:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.loading=!0,t.t0=Object,t.t1={},t.next=6,e.getById({id:e.id,params:{},api:"getUserMessage"});case 6:t.t2=t.sent,e.result=t.t0.assign.call(t.t0,t.t1,t.t2),e.loading=!1,t.next=14;break;case 11:return t.prev=11,t.t3=t.catch(0),t.abrupt("return",e.$nuxt.error(t.t3));case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()}},Object(h.b)("common",["getById","setById"])),mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$can("message","view")){t.next=3;break}return t.next=3,e.fetchingData();case 3:case"end":return t.stop()}}),t)})))()}},y=w,v=n(14),component=Object(v.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.$can("message","view")?n("div",{staticClass:"detail-width"},[e.loading?n("div",{staticClass:"spinner-wrapper"},[n("spinner",{attrs:{radius:60,color:"primary"}})],1):e._e(),e._v(" "),e.result?n("div",{staticClass:"order-wrapper tab-sidebar"},[n("div",{staticClass:"title"},[n("div",{staticClass:"dply-felx d-block-sm"},[n("h4",{staticClass:"mb-sm-10"},[e._v("\n         User message\n       ")]),e._v(" "),n("div",{staticClass:"dply-felx j-left f-wrap mlr--5 mtb-sm--5"},[n("dropdown",{staticClass:"mlr-5 mtb-sm-5",attrs:{"selected-key":e.result.replied,options:e.messageReply},on:{clicked:e.dropdownSelected}}),e._v(" "),n("ajax-button",{staticClass:"primary-btn mlr-5 mtb-sm-5",attrs:{name:"save-edit",text:"Update Status","loading-text":"Updating","fetching-data":e.formSubmitting,type:"button"},on:{clicked:e.updateSReplied}})],1)])]),e._v(" "),n("form",{staticClass:"form-wrapper"},[n("div",{staticClass:"dply-felx d-block-sm"},[n("div",{staticClass:"input-wrapper"},[n("label",[e._v("Name")]),e._v(" "),n("p",[e._v(e._s(e.result.name))])]),e._v(" "),n("div",{staticClass:"input-wrapper"},[n("label",[e._v("Email")]),e._v(" "),n("p",[e._v(e._s(e.result.email))])])]),e._v(" "),n("div",{staticClass:"input-wrapper"},[n("label",[e._v("Subject")]),e._v(" "),n("p",[e._v(e._s(e.result.subject))])]),e._v(" "),n("div",{staticClass:"input-wrapper"},[n("label",[e._v("Message")]),e._v(" "),n("p",[e._v(e._s(e.result.message))])])])]):e._e()]):e._e()}),[],!1,null,"2a68ffc1",null);t.default=component.exports;installComponents(component,{Spinner:n(44).default,Dropdown:n(344).default,AjaxButton:n(343).default})}}]);