/* empty css                                                                            *//* empty css                                                                                  *//* empty css                                                                     *//* empty css                                                                         */import g from"./commonButton-CNkRppG-.js";/* empty css                                                                   *//* empty css                                                                     *//* empty css                                                               */import"./common-kvfjOh1A.js";import"./mockApi-Bzt-_zo-.js";/* empty css                                                                                       */import{d as T,a as y,b as x,o as s,i as I,l as E,m as a,u as c,D as W,h as d,r as m,c as v,g as l,E as h,t as r,f as _,e as t,F as $,G,_ as M}from"./index-CH0VdndA.js";import"./commonStore-DKeEGGWD.js";/* empty css                                                                     */const R=e=>($("data-v-96f384b6"),e=e(),G(),e),U={style:{display:"flex","align-items":"center"}},j={class:"commonDialog-dialogTitle"},q={class:"common-dialogdefault"},z={key:0,class:"common-dialogTip"},A={class:"dialogTip-icon"},H={class:"dialogTip-message"},J=R(()=>t("span",{class:"tip-innerText"},"您确定要执行此操做吗？此操作不可恢复。",-1)),K={key:0,class:"common-dialogFooter"},L=T({__name:"commonDialog",props:{title:String,width:{type:String,default:"50%"},tip:{type:Boolean,default:!1},footer:{type:Boolean,default:!0},defaultFooter:{type:Boolean,default:!0},confirmName:{type:String,default:"保存"},cancelName:{type:String,default:"取消"},canCancel:{type:Boolean,default:!0},top:{type:String,default:"20vh"}},emits:["cancel","confirm","closed"],setup(e,{expose:C,emit:S}){const k=e,i=S;let o=y(!1);const f=()=>{o.value=!1,i("closed")},B=y(),F=()=>{o.value===!0?o.value=!1:o.value=!0},N=()=>{i("cancel",o),k.canCancel&&f()},V=()=>{i("confirm",o)};return x(()=>{}),C({dialogController:F}),(n,u)=>{const D=d("WarningFilled"),b=d("el-icon"),w=d("el-dialog");return s(),I(w,{title:e.title,modelValue:c(o),"onUpdate:modelValue":u[0]||(u[0]=p=>W(o)?o.value=p:o=p),width:e.tip===!0?"20%":e.width,draggable:"",onClosed:f,"close-on-click-modal":!1,class:"common-dialog","append-to-body":!0,"destroy-on-close":"",ref_key:"commonDialog",ref:B,top:e.top},E({header:a(()=>[t("div",U,[t("div",j,r(e.title),1)])]),default:a(()=>[t("div",q,[m(n.$slots,"default",{},void 0,!0),e.tip?(s(),v("div",z,[t("div",A,[l(b,{class:"inner-icon"},{default:a(()=>[l(D)]),_:1})]),t("div",H,[t("span",null,[m(n.$slots,"tip",{},void 0,!0)]),J])])):_("",!0)])]),_:2},[e.footer?{name:"footer",fn:a(()=>[m(n.$slots,"selfFooter",{},void 0,!0),e.defaultFooter?(s(),v("span",K,[l(c(g),{type:"confirm",onCommonClick:V},{default:a(()=>[h(r(e.confirmName),1)]),_:1}),l(c(g),{type:"normal",onCommonClick:N},{default:a(()=>[h(r(e.cancelName),1)]),_:1})])):_("",!0)]),key:"0"}:void 0]),1032,["title","modelValue","width","top"])}}}),ce=M(L,[["__scopeId","data-v-96f384b6"]]);export{ce as default};
