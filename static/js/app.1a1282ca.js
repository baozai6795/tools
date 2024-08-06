(function(){var t={7739:function(t,e,a){"use strict";var s=a(2856),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},n=[],i=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"modelclass"},[e("div",[e("div",[t._v("Token："),e("input",{directives:[{name:"model",rawName:"v-model",value:t.headers.Token,expression:"headers.Token"}],staticClass:"inputclass",attrs:{type:"text"},domProps:{value:t.headers.Token},on:{input:function(e){e.target.composing||t.$set(t.headers,"Token",e.target.value)}}})]),e("div",[t._v("条数："),e("input",{directives:[{name:"model",rawName:"v-model",value:t.querdata.limit,expression:"querdata.limit"}],staticClass:"inputclass",attrs:{type:"text"},domProps:{value:t.querdata.limit},on:{input:function(e){e.target.composing||t.$set(t.querdata,"limit",e.target.value)}}})])]),e("button",{staticClass:"buttonvq",on:{click:t.makeRequest}},[t._v("发送请求")]),t._v(" 总数据："+t._s(t.dataD.result.totalCount)+" 本次数据："+t._s(t.dataD.result.list.length)+" "),e("button",{staticClass:"buttonvq",on:{click:t.automationRequests}},[t._v("自动化保单的数据("+t._s(t.tooal)+")")]),e("button",{staticClass:"buttonvq",on:{click:t.exportToExcel}},[t._v("生成Excel")])]),e("div",{staticStyle:{"margin-left":"20px"}},[t._v(" 数据列表")]),e("div",{staticClass:"itemclass"},[e("div",t._l(t.dataD.result.list,(function(a,s){return e("div",{key:s,staticClass:"margintop"},[e("div",[t._v(" 姓名："+t._s(a.customerName)),e("div",[t._v(" 性別："+t._s(a.sex))]),e("div",[t._v(" 年龄："+t._s(a.dayberi))])]),e("div",[t._v(" 地址："+t._s(a.address))]),e("div",[t._v(" 客户号："+t._s(a.custNo)+" "),e("div",[t._v(" 星级："+t._s(a.vipFlag))]),e("div",[t._v(" 总保费："+t._s(a.prem))])]),e("div",[t._v(" 保单名称："+t._s(a.customerName)),e("div",[t._v(" 客户类型："+t._s(a.sourceTypeName))])]),e("div",[t._v(" 分配时间："+t._s(a.allocTime)),e("div",[t._v(" 投保时间："+t._s(a.maxInForceDate))]),e("div",[t._v(" 手机号码："+t._s(a.mobile))])])])})),0),e("div",{staticClass:"jsonclass"},t._l(t.dataD.result.list,(function(a,s){return e("div",{key:s,staticClass:"margintop"},[t._v(" "+t._s(a)+", ")])})),0)])])},r=[],l=(a(4114),a(2332)),u=a.n(l),c=a(3580),d=a.n(c),p=a(470),v=a.n(p),m={data(){return{url:"/api/gdsfp-web-uat/app/listSzCustomersPage",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json",Token:""},querdata:{fuzzyQueryInput:"",hasVisitFlag:-1,limit:100,maxAge:"",maxPremium:"",minAge:"",minPremium:"",month:"",page:1,sex:"",sourceType:"0",vipFlag:""},tooal:0,hasMoreData:!0,dataD:{result:{totalCount:0,list:[]}},isend:!1}},methods:{async makeRequest(){let t=this;await u().post(t.url,t.querdata,{headers:t.headers}).then((e=>{t.dataD.result.totalCount=e.data.result.totalCount,t.dataD.result.list=e.data.result.list,t.hasMoreData=e.data.result.list.length===t.querdata.limit})).catch((t=>{console.log(t,12345)}))},async salesq(t){let e=this,a=await u().get("/api/gdsfp-web-uat/app/szCustomerInfoNew?idCode="+t+"&sourceType=0",{headers:e.headers});return a},async automationRequests(){this.isend=!0;let t=this;for(const a of t.dataD.result.list)try{let e=await t.salesq(a.idCode);const s=await u().get("/api/gdsfp-web-uat/app/queryCntrList?idCode="+a.idCode+"&salesNo="+e.data.result.salesno,{headers:t.headers});console.log(s.data,"kjj"),0!=s.data.result.length&&(a.allocName=s.data.result[0].list[0].polCode+" +¥"+s.data.result[0].list[0].premium),t.tooal=Number(t.tooal)+1}catch(e){console.error(`请求 ID 为 ${a.id} 时出错: `,e)}t.tooal==t.dataD.result.totalCount&&alert("生成保单的数据成功")},dayberi(t){const e=new Date(t),a=new Date;let s=a.getFullYear()-e.getFullYear();const o=a.getMonth()-e.getMonth();return(o<0||0===o&&a.getDate()<e.getDate())&&s--,s},exportToExcel(){const t=["姓名","性別","年龄","地址","客户号","星级","总保费","客户类型","分配时间","投保时间","保单名称","手机号码"];let e=[],a=this.dataD.result.list;for(let r=0;a.length>r;r++)e.push({"姓名":a[r].customerName,"性別":a[r].sex,"年龄":this.dayberi(a[r].birthDate),"地址":a[r].address,"客户号":a[r].custNo,"星级":a[r].vipFlag,"总保费":a[r].prem,"客户类型":a[r].sourceTypeName,"分配时间":a[r].allocTime,"投保时间":a[r].maxInForceDate,"保单名称":a[r].allocName,"手机号码":a[r].mobile});if(a.length!=e.length)return;const s=v().utils.json_to_sheet(e,{header:t}),o=v().utils.book_new();v().utils.book_append_sheet(o,s,"Sheet1");const n=v().write(o,{bookType:"xlsx",type:"array"}),i=new Blob([n],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});d().saveAs(i,"表格信息.xlsx")}}},f=m,h=a(1656),_=(0,h.A)(f,i,r,!1,null,null,null),g=_.exports,y={name:"App",components:{HelloWorld:g}},b=y,x=(0,h.A)(b,o,n,!1,null,null,null),C=x.exports;s.Ay.config.productionTip=!1,new s.Ay({render:t=>t(C)}).$mount("#app")},6251:function(){},7233:function(){},9800:function(){}},e={};function a(s){var o=e[s];if(void 0!==o)return o.exports;var n=e[s]={exports:{}};return t[s].call(n.exports,n,n.exports,a),n.exports}a.m=t,function(){var t=[];a.O=function(e,s,o,n){if(!s){var i=1/0;for(c=0;c<t.length;c++){s=t[c][0],o=t[c][1],n=t[c][2];for(var r=!0,l=0;l<s.length;l++)(!1&n||i>=n)&&Object.keys(a.O).every((function(t){return a.O[t](s[l])}))?s.splice(l--,1):(r=!1,n<i&&(i=n));if(r){t.splice(c--,1);var u=o();void 0!==u&&(e=u)}}return e}n=n||0;for(var c=t.length;c>0&&t[c-1][2]>n;c--)t[c]=t[c-1];t[c]=[s,o,n]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var o,n,i=s[0],r=s[1],l=s[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(o in r)a.o(r,o)&&(a.m[o]=r[o]);if(l)var c=l(a)}for(e&&e(s);u<i.length;u++)n=i[u],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(c)},s=self["webpackChunktools1"]=self["webpackChunktools1"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[504],(function(){return a(7739)}));s=a.O(s)})();
//# sourceMappingURL=app.1a1282ca.js.map