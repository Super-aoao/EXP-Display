import D from"./commonSetForm-DzYdY8Nz.js";import"./baseComponents-BnnfAsoQ.js";import"./common-kvfjOh1A.js";/* empty css                                                                       *//* empty css                                                                       *//* empty css                                                                            *//* empty css                                                                                  *//* empty css                                                                     *//* empty css                                                                         */import"./mockApi-Bzt-_zo-.js";/* empty css                                                                     *//* empty css                                                                   *//* empty css                                                                     *//* empty css                                                               *//* empty css                                                                                       *//* empty css                                                                        *//* empty css                                                              *//* empty css                                                                 *//* empty css                                                                 *//* empty css                                                                   *//* empty css                                                                 *//* empty css                                                                             *//* empty css                                                              *//* empty css                                                             *//* empty css                                                               *//* empty css                                                                  *//* empty css                                                                    *//* empty css                                                                    */import{n as s}from"./normalComponentSetTypes-BzaQtAKW.js";/* empty css                                                                       *//* empty css                                                                    *//* empty css                                                                     */import{d as F,a as h,o as n,i,m as l,h as f,q as u,u as d,g as c,E as C,f as S,n as R}from"./index-CH0VdndA.js";const ne=F({__name:"unitInput",props:{componentsData:{type:Object}},setup(p){const r=p,b=()=>{let m={};return m={defaultValue:[{validator:(o,e,t)=>{e.length>100||e.length<0?t("字段长度为100以内的正整数"):t()},trigger:"blur"},{validator:(o,e,t)=>{e.length>100||e.length<0?t("字段长度为100以内的正整数"):t()},trigger:"change"}],maxSize:[{validator:(o,e,t)=>{e<0||e==""||e==null?t("请规定字段长度"):t()},trigger:"blur"},{validator:(o,e,t)=>{e<0||e==""||e==null?t("请规定字段长度"):t()},trigger:"change"}]},m},g=h({}),_=h(null),a=()=>{R(()=>{_.value.submitData()})},V=m=>{g.value.changeQuName(m)};return(m,o)=>{const e=f("el-radio"),t=f("el-radio-group"),x=f("el-form-item");return n(),i(D,{"form-data":r.componentsData,"form-rules":b(),ref_key:"commonSetForm",ref:_,onReset:V},{default:l(()=>[(n(),i(u(d(s).maxSize),{data:r,changeFunc:a},null,8,["data"])),c(x,{label:"输入内容"},{default:l(()=>[c(t,{modelValue:p.componentsData.allowType,"onUpdate:modelValue":o[0]||(o[0]=y=>p.componentsData.allowType=y),onChange:a},{default:l(()=>[c(e,{label:"text"},{default:l(()=>[C("文本")]),_:1}),c(e,{label:"number"},{default:l(()=>[C("数字")]),_:1})]),_:1},8,["modelValue"])]),_:1}),p.componentsData.allowType=="number"?(n(),i(u(d(s).numberSetConfig),{key:0,data:r,changeFunc:a},null,8,["data"])):S("",!0),(n(),i(u(d(s).selectCombination),{ref_key:"selectCombinationRef",ref:g,data:r,changeFunc:a,defaultValueCheckMultiple:!1},null,8,["data"])),(n(),i(u(d(s).defaultValue),{data:r,changeFunc:a},null,8,["data"]))]),_:1},8,["form-data","form-rules"])}}});export{ne as _};
