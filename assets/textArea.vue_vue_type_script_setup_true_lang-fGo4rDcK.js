import{l as c}from"./lowCodeStore-CGZPxDGf.js";import g from"./commonSetForm-DzYdY8Nz.js";import"./baseComponents-BnnfAsoQ.js";/* empty css                                                                       */import"./common-kvfjOh1A.js";/* empty css                                                                       *//* empty css                                                                            *//* empty css                                                                                  *//* empty css                                                                     *//* empty css                                                                         */import"./mockApi-Bzt-_zo-.js";/* empty css                                                                     *//* empty css                                                                   *//* empty css                                                                     *//* empty css                                                               *//* empty css                                                                                       *//* empty css                                                                        *//* empty css                                                              *//* empty css                                                                 *//* empty css                                                                 *//* empty css                                                                   *//* empty css                                                                 *//* empty css                                                                             *//* empty css                                                              *//* empty css                                                             *//* empty css                                                               *//* empty css                                                                  *//* empty css                                                                    *//* empty css                                                                    */import{n as s}from"./normalComponentSetTypes-BzaQtAKW.js";/* empty css                                                                       *//* empty css                                                                    *//* empty css                                                                     */import{d as h,a as _,o as i,i as p,m as x,q as l,u,n as C}from"./index-CH0VdndA.js";const tt=h({__name:"textArea",props:{componentsData:{type:Object}},setup(f){c();const m=f,a=_(null),n=()=>{C(()=>{a.value.submitData()})},d=()=>{let e={};return e={defaultValue:[{validator:(r,t,o)=>{t.length>100||t.length<0?o("字段长度为100以内的正整数"):o()},trigger:"blur"},{validator:(r,t,o)=>{t.length>100||t.length<0?o("字段长度为100以内的正整数"):o()},trigger:"change"}],maxSize:[{validator:(r,t,o)=>{t<0||t==""||t==null?o("请规定字段长度"):o()},trigger:"blur"},{validator:(r,t,o)=>{t<0||t==""||t==null?o("请规定字段长度"):o()},trigger:"change"}]},e};return(e,r)=>(i(),p(g,{ref_key:"commonSetForm",ref:a,"form-data":m.componentsData,"form-rules":d()},{default:x(()=>[(i(),p(l(u(s).maxSize),{data:m,changeFunc:n,max:1e3,min:0},null,8,["data"])),(i(),p(l(u(s).defaultValue),{data:m,changeFunc:n},null,8,["data"]))]),_:1},8,["form-data","form-rules"]))}});export{tt as _};
