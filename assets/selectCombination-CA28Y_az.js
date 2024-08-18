import{d as Z,j as ee,a as n,b as ae,o as u,c as m,g as d,m as r,I as b,J as B,h as f,e as _,u as P,N as te,K as S,p as oe,t as L,i as D,E as O,D as le,O as ne,f as se,n as ue,F as ce,G as re,_ as ie}from"./index-CH0VdndA.js";import{c as h}from"./common-kvfjOh1A.js";/* empty css                                                          */const de=s=>(ce("data-v-25ef8408"),s=s(),re(),s),pe={class:"rubbishDemand-innerPopver"},me={class:"rubbishDemand-innerPopver-optionsPanel"},fe=["onClick"],ve={style:{width:"100%"}},he={key:0},be=de(()=>_("span",{class:"iconfont icon-close-circle-filled-1"},null,-1)),De=Z({__name:"selectCombination",props:{data:{type:Object},changeFunc:{type:Function},defaultValueCheckMultiple:{type:Boolean,default:!1}},setup(s,{expose:M}){const R=ee("$defultRequest"),U=n({}),j=n({modifiers:[{name:"flip",enabled:!0}]}),v=n(""),c=n([]),i=n(""),p=n(!1),k=n({}),e=s;let l=n("");const I=n(null),C=n(!1),g=n(!0),J=t=>{e.data.componentsData.optionArr.splice(t,1),e.changeFunc()},q=t=>{l.value!==""&&l.value!==void 0&&(e.data.componentsData.optionArr.some(a=>a.label===l.value)||e.data.componentsData.optionArr.push({name:l.value,type:"default",showClose:!0,maxWidth:100,value:l.value,label:l.value})),l.value="",C.value=!1,e.changeFunc()},K=()=>{C.value=!0,ue(()=>{I.value.focus()}),e.changeFunc()},A=async()=>{await R.request({url:B.dictionaryManagementApi.getDicTypeList,method:"get",params:{folderId:"",status:"ENABLE"}}).then(t=>{t.data.forEach(a=>{a.label=a.name,a.value=a.code}),e.data.componentsData.quoteResources=t.data,c.value=t.data})},z=()=>{p.value==!0?setTimeout(()=>{p.value=!1},100):(A(),setTimeout(()=>{p.value=!0,k.value.focus()},100))},x=()=>{h(i.value)?(g.value=!1,R.request({url:B.dictionaryManagementApi.getDicItemConfigListByCodes,method:"get",params:{codeList:e.data.componentsData.quoteResourcesSelect}}).then(t=>{t.data[e.data.componentsData.quoteResourcesSelect].forEach(a=>{a.label=a.name,a.value=a.code}),e.data.componentsData.data="",e.data.componentsData.moduleType=="checkRadio"?e.data.componentsData.defaultValueCheck="":e.data.componentsData.defaultValueCheck=[],e.data.componentsData.optionArr=t.data[e.data.componentsData.quoteResourcesSelect],e.changeFunc()})):Q()},$=()=>{e.data.componentsData.moduleType!=="unitInput"&&(e.data.componentsData.data=JSON.parse(JSON.stringify(e.data.componentsData.defaultValueCheck))),e.changeFunc()},F=()=>{c.value=[],h(v.value)?e.data.componentsData.quoteResources.forEach(t=>{t.label.includes(v.value)&&c.value.push(t)}):c.value=e.data.componentsData.quoteResources},G=t=>{e.data.componentsData.quoteResourcesSelect=t.value,i.value=t.label,w(),x()},w=()=>{v.value="",p.value==!0&&setTimeout(()=>{k.value.blur(),p.value=!1},200)},Q=()=>{e.data.componentsData.quoteResourcesSelect=null,g.value=!0,e.data.componentsData.optionArr=[],e.changeFunc()},W=t=>{h(c.value)&&h(t)&&c.value.forEach(a=>{t==a.value&&(i.value=a.label)})},H=()=>{e.data.componentsData.data="",e.data.componentsData.moduleType=="checkRadio"?e.data.componentsData.defaultValueCheck="":e.data.componentsData.defaultValueCheck=[]};return ae(async()=>{await A(),h(c.value)&&c.value.forEach(t=>{e.data.componentsData.quoteResourcesSelect==t.value&&(i.value=t.label)})}),M({changeQuName:W}),(t,a)=>{const E=f("el-select"),N=f("el-input"),X=f("el-popover"),V=f("el-form-item"),T=f("el-tag"),Y=f("el-option");return u(),m(b,null,[d(V,{label:"引用资源",prop:"quoteResources"},{default:r(()=>[d(X,{trigger:"click","popper-class":"rubbishDemand-popver",width:"295px",visible:p.value},{reference:r(()=>[d(E,{ref_key:"rubbishDemandSelect",ref:U,modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=o=>i.value=o),onChange:x,onClick:z,onClear:H,clearable:"",filterable:!1,"popper-options":j.value,"popper-class":"rubbishDemand",id:"rubbishDemandId",class:"deleteIcon"},null,8,["modelValue","popper-options"])]),default:r(()=>[_("div",pe,[d(N,{ref_key:"rubbishSearchRef",ref:k,modelValue:v.value,"onUpdate:modelValue":a[1]||(a[1]=o=>v.value=o),placeholder:"搜索关键字",onBlur:w,onFocus:F,"suffix-icon":P(te),onInput:F},null,8,["modelValue","suffix-icon"]),_("div",me,[(u(!0),m(b,null,S(c.value,o=>(u(),m("div",{class:oe([i.value==o.label?"rubbishDemand-innerPopver-options-active":"rubbishDemand-innerPopver-options"]),onClick:y=>G(o)},L(o.label),11,fe))),256))])])]),_:1},8,["visible"])]),_:1}),d(V,{label:"选项值",prop:"optionArr"},{default:r(()=>[_("div",ve,[(u(!0),m(b,null,S(s.data.componentsData.optionArr,(o,y)=>(u(),D(T,{key:y,closable:o.showClose,onClose:_e=>J(y)},{default:r(()=>[O(L(o.label),1)]),_:2},1032,["closable","onClose"]))),128)),g.value===!0?(u(),m("div",he,[C.value?(u(),D(N,{key:1,modelValue:P(l),"onUpdate:modelValue":a[2]||(a[2]=o=>le(l)?l.value=o:l=o),size:"small",style:{width:"94px"},onBlur:q,onKeyup:ne(q,["enter"]),ref_key:"tagInput",ref:I},null,8,["modelValue"])):(u(),D(T,{key:0,onClick:K,style:{"padding-top":"4px !important"}},{default:r(()=>[be,O(" 选项 ")]),_:1}))])):se("",!0)])]),_:1}),d(V,{label:"默认选中值",prop:"defaultValueCheck"},{default:r(()=>[d(E,{modelValue:s.data.componentsData.defaultValueCheck,"onUpdate:modelValue":a[3]||(a[3]=o=>s.data.componentsData.defaultValueCheck=o),placeholder:"请选择",multiple:s.defaultValueCheckMultiple,onChange:$,clearable:""},{default:r(()=>[(u(!0),m(b,null,S(s.data.componentsData.optionArr,o=>(u(),D(Y,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","multiple"])]),_:1})],64)}}}),Ve=ie(De,[["__scopeId","data-v-25ef8408"]]);export{Ve as default};
