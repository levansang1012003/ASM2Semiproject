(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{574:function(t,e,n){var content=n(648);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("6f1d453a",content,!0,{sourceMap:!1})},647:function(t,e,n){"use strict";n(574)},648:function(t,e,n){var l=n(51)(!1);l.push([t.i,".withdrawal .tab-sidebar{max-width:1000px}.withdrawal-section{max-width:1000px;display:flex;justify-content:center;margin:0 -7.5px 10px;flex-wrap:wrap}.withdrawal-section>div.amount{background:#fff}.withdrawal-section>.amount{min-width:200px;min-height:100px;padding:15px 0;border-radius:6px;border:1px solid #ddd;flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0 7.5px 10px;line-height:1.7}.withdrawal-section>.amount .sub-title{color:#666;margin-bottom:5px}",""]),t.exports=l},746:function(t,e,n){"use strict";n.r(e);var l=n(356),c={name:"withdrawal-accounts",middleware:["auth"],data:function(){return{orderOptions:{title:{title:"Title"},default:{title:"Default"},account_name:{title:"Account name"},account_number:{title:"Account number"},bank_name:{title:"Bank name"},branch_name:{title:"Branch name"},created_at:{title:"Date"}}}},props:{},mixins:[n(59).a],components:{ListPage:l.default},computed:{},methods:{},created:function(){},mounted:function(){}},r=(n(647),n(14)),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("list-page",{ref:"listPage",attrs:{"list-api":"getWithdrawalAccounts","delete-api":"deleteWithdrawalAccount","route-name":"withdrawal-accounts",name:"withdrawal accounts",gate:"withdrawal_account","order-options":t.orderOptions},scopedSlots:t._u([{key:"table",fn:function(e){var l=e.list;return[n("tr",{staticClass:"lite-bold"},[n("th",[t._v("Title")]),t._v(" "),n("th",[t._v("Default")]),t._v(" "),n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Account number")]),t._v(" "),n("th",[t._v("Bank")]),t._v(" "),n("th",[t._v("Branch")]),t._v(" "),n("th")]),t._v(" "),t._l(l,(function(e,l){return n("tr",{key:l},[n("td",{},[n("nuxt-link",{staticClass:"link",attrs:{to:"/withdrawal-accounts/"+e.id}},[n("h5",{staticClass:"mx-w-300x"},[t._v(t._s(e.title))])])],1),t._v(" "),n("td",{staticClass:"status",class:{active:1===e.default}},[n("span",[t._v(t._s(t.getFeatured(e.default)))])]),t._v(" "),n("td",[t._v(t._s(e.account_name))]),t._v(" "),n("td",[t._v(t._s(e.account_number))]),t._v(" "),n("td",[t._v(t._s(e.bank_name))]),t._v(" "),n("td",[t._v(t._s(e.branch_name))]),t._v(" "),n("td",[t.$can("withdrawal_account","edit")?n("button",{staticClass:"lite-btn",on:{click:function(n){return n.preventDefault(),t.$refs.listPage.editItem(e.id)}}},[t._v("\n          Edit\n        ")]):t._e(),t._v(" "),t.$can("withdrawal_account","delete")?n("button",{staticClass:"delete-btn lite-btn",on:{click:function(n){return n.preventDefault(),t.$refs.listPage.deleteItem(e.id)}}},[t._v("\n          Delete\n        ")]):t._e()])])}))]}}])})}),[],!1,null,null,null);e.default=component.exports}}]);