!function(){var e=document.createElement("style");e.innerHTML=".el-tabs[data-v-50660bb6] .el-tabs__header{float:right;margin-right:1px}.watermark-position[data-v-50660bb6]{display:flex;height:9rem;width:9rem;flex-wrap:wrap;border-radius:.25rem;border-width:1px;border-style:dashed;--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.watermark-position[data-v-50660bb6] .el-radio__label{padding-left:0}.watermark-position[data-v-50660bb6] .el-radio{margin-right:0;display:flex;height:33.333333%;width:33.333333%;align-items:center;justify-content:center}\n",document.head.appendChild(e),System.register(["./vendor-legacy.5297913d.js","./index-legacy.ee3fd5f4.js","./config-legacy.406d8297.js","./user-legacy.cdd90366.js","./LabelTip-legacy.28b38cfe.js","./BaseUpload-legacy.151cceb2.js","./FieldItem-legacy.7330e554.js"],(function(e){"use strict";var l,a,u,t,d,s,o,r,i,n,m,p,v,b,f,c,g,_,V,y,w,h,$,k,q,U,I,x,S,D,j,T,K,Q,z,C,H,E;return{setters:[function(e){l=e.g,a=e.u,u=e.D,t=e.i,d=e.L,s=e.j,o=e.w,r=e.m,i=e.ai,n=e.o,m=e.n,p=e.q,v=e.A,b=e.F,f=e.aj,c=e.k,g=e.x,_=e.I,V=e.J,y=e.y,w=e.K,h=e.a6,$=e.a7},function(e){k=e._,q=e.B,U=e.D,I=e.t,x=e.p},function(e){S=e.m,D=e.b,j=e.n,T=e.o,K=e.p,Q=e.r},function(e){z=e.a},function(e){C=e._},function(e){H=e.a},function(e){E=e.F}],execute:function(){const W={class:"watermark-position"},F=(e=>(h("data-v-50660bb6"),e=e(),$(),e))((()=>g("span",null,null,-1)));e("default",k(l({emits:{"update:modelValue":null,finished:null},setup(e){const{t:l}=a(),h=u(),$=u(),k=u({}),L=u(!1),M=u(!1),P=u([]),B=u([]),J=u([]),N=u([]),A=u([]),O=u(),G=t((()=>A.value.find((e=>e.id===O.value)))),R=t((()=>{var e;return JSON.parse((null===(e=G.value)||void 0===e?void 0:e.customs)||"[]")})),X=[];q("siteSettings:base:update")&&X.push("base"),q("siteSettings:watermark:update")&&X.push("watermark"),q("siteSettings:customs:update")&&X.push("customs");const Y=u(X[0]),Z=e=>{k.value="watermark"===e?$.value.watermark:"customs"===e?$.value.customs:$.value},ee=async()=>{B.value=await U({Q_EQ_type_Int:2})},le=async()=>{J.value=await U({Q_EQ_type_Int:1})},ae=async()=>{N.value=await S()},ue=async()=>{P.value=I(await z())},te=async()=>{A.value=await D({Q_EQ_type:"site"})},de=async()=>{$.value=await j(),O.value=$.value.modelId,Z(Y.value)};d((async()=>{L.value=!0;try{await Promise.all([ee(),le(),ae(),ue(),te(),de()])}finally{L.value=!1}}));const se=()=>{h.value.validate((async e=>{if(e){M.value=!0;try{"watermark"===Y.value?await T(k.value):"customs"===Y.value?await K(k.value):await Q(k.value),w.success(l("success"))}finally{M.value=!1}(async()=>{L.value=!0;try{await de()}finally{L.value=!1}})()}}))};return(e,l)=>{const a=r("el-tab-pane"),u=r("el-tabs"),t=r("el-aside"),d=r("el-switch"),w=r("el-form-item"),$=r("el-col"),q=r("el-radio"),U=r("el-radio-group"),I=r("el-slider"),S=r("el-input"),D=r("el-row"),j=r("el-option"),T=r("el-select"),K=r("el-cascader"),Q=r("el-input-number"),z=r("el-button"),O=r("el-form"),G=r("el-main"),ee=r("el-container"),le=i("loading");return n(),s(ee,null,{default:o((()=>[m(t,{width:"180px",class:"pr-3"},{default:o((()=>[m(u,{modelValue:Y.value,"onUpdate:modelValue":l[0]||(l[0]=e=>Y.value=e),onTabClick:l[1]||(l[1]=({paneName:e})=>Z(e)),"tab-position":"left",stretch:"",class:"bg-white"},{default:o((()=>[(n(),p(b,null,v(X,(l=>m(a,{key:l,name:l,label:e.$t(`site.settings.${l}`)},null,8,["name","label"]))),64))])),_:1},8,["modelValue"])])),_:1}),m(G,{class:"p-3 app-block"},{default:o((()=>[f((n(),s(O,{ref_key:"form",ref:h,model:k.value,"label-width":"150px"},{default:o((()=>["watermark"===Y.value?(n(),s(D,{key:0},{default:o((()=>[m($,{span:24},{default:o((()=>[m(w,{prop:"enabled",rules:{required:!0,message:()=>e.$t("v.required")}},{label:o((()=>[m(C,{message:"site.watermark.enabled"})])),default:o((()=>[m(d,{modelValue:k.value.enabled,"onUpdate:modelValue":l[2]||(l[2]=e=>k.value.enabled=e)},null,8,["modelValue"])])),_:1},8,["rules"])])),_:1}),m($,{span:12},{default:o((()=>[m(w,{prop:"overlay",label:e.$t("site.watermark.overlay"),rules:k.value.enabled?{required:!0,message:()=>e.$t("v.required")}:{}},{default:o((()=>[m(c(H),{modelValue:k.value.overlay,"onUpdate:modelValue":l[3]||(l[3]=e=>k.value.overlay=e)},null,8,["modelValue"])])),_:1},8,["label","rules"])])),_:1}),m($,{span:12},{default:o((()=>[m(w,{prop:"position",label:e.$t("site.watermark.position"),rules:{required:!0,message:()=>e.$t("v.required")}},{default:o((()=>[m(U,{modelValue:k.value.position,"onUpdate:modelValue":l[4]||(l[4]=e=>k.value.position=e)},{default:o((()=>[g("div",W,[(n(),p(b,null,v(9,(l=>m(q,{key:l,label:l,title:e.$t(`site.watermark.position.${l}`)},{default:o((()=>[F])),_:2},1032,["label","title"]))),64))])])),_:1},8,["modelValue"])])),_:1},8,["label","rules"])])),_:1}),m($,{span:24},{default:o((()=>[m(w,{prop:"dissolve",label:e.$t("site.watermark.dissolve"),rules:{required:!0,message:()=>e.$t("v.required")}},{label:o((()=>[m(C,{message:"site.watermark.dissolve"})])),default:o((()=>[m(I,{modelValue:k.value.dissolve,"onUpdate:modelValue":l[5]||(l[5]=e=>k.value.dissolve=e),min:0,max:100,"show-input":""},null,8,["modelValue"])])),_:1},8,["label","rules"])])),_:1}),m($,{span:12},{default:o((()=>[m(w,{prop:"minWidth",rules:{required:!0,message:()=>e.$t("v.required")}},{label:o((()=>[m(C,{message:"site.watermark.minWidth"})])),default:o((()=>[m(S,{modelValue:k.value.minWidth,"onUpdate:modelValue":l[6]||(l[6]=e=>k.value.minWidth=e),modelModifiers:{number:!0},min:1,max:65535},null,8,["modelValue"])])),_:1},8,["rules"])])),_:1}),m($,{span:12},{default:o((()=>[m(w,{prop:"minHeight",rules:{required:!0,message:()=>e.$t("v.required")}},{label:o((()=>[m(C,{message:"site.watermark.minHeight"})])),default:o((()=>[m(S,{modelValue:k.value.minHeight,"onUpdate:modelValue":l[7]||(l[7]=e=>k.value.minHeight=e),modelModifiers:{number:!0},min:1,max:65535},null,8,["modelValue"])])),_:1},8,["rules"])])),_:1})])),_:1})):"customs"===Y.value?(n(),s(D,{key:1},{default:o((()=>[(n(!0),p(b,null,v(c(R),(l=>(n(),s($,{key:l.code,span:l.double?12:24},{default:o((()=>[m(w,{prop:l.code,label:l.name,rules:l.required?{required:!0,message:()=>e.$t("v.required")}:void 0},{default:o((()=>[m(E,{field:l,modelValue:k.value[l.code],"onUpdate:modelValue":e=>k.value[l.code]=e},null,8,["field","modelValue","onUpdate:modelValue"])])),_:2},1032,["prop","label","rules"])])),_:2},1032,["span"])))),128))])),_:1})):(n(),s(D,{key:2},{default:o((()=>[m($,{span:12},{default:o((()=>[m(w,{prop:"name",label:e.$t("site.name"),rules:{required:!0,message:()=>e.$t("v.required")}},{default:o((()=>[m(S,{modelValue:k.value.name,"onUpdate:modelValue":l[8]||(l[8]=e=>k.value.name=e),ref:"focus",maxlength:"50"},null,8,["modelValue"])])),_:1},8,["label","rules"])])),_:1}),m($,{span:12},{default:o((()=>[m(w,{prop:"protocol",rules:{required:!0,message:()=>e.$t("v.required")}},{label:o((()=>[m(C,{message:"site.protocol"})])),default:o((()=>[m(T,{modelValue:k.value.protocol,"onUpdate:modelValue":l[9]||(l[9]=e=>k.value.protocol=e),class:"w-full"},{default:o((()=>[(n(),p(b,null,v(["http","https"],(e=>m(j,{key:e,label:e,value:e},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])),_:1},8,["rules"])])),_:1}),m($,{span:12},{default:o((()=>[m(w,{prop:"domain",rules:[{required:!0,message:()=>e.$t("v.required")},{pattern:/^[a-z0-9-.]*$/,message:()=>e.$t("site.error.domainPattern")}]},{label:o((()=>[m(C,{message:"site.domain"})])),default:o((()=>[m(S,{modelValue:k.value.domain,"onUpdate:modelValue":l[10]||(l[10]=e=>k.value.domain=e),maxlength:"50"},null,8,["modelValue"])])),_:1},8,["rules"])])),_:1}),m($,{span:12},{default:o((()=>[m(w,{prop:"subDir",rules:{pattern:/^[\w-]*$/,message:()=>e.$t("site.error.subDirPattern")}},{label:o((()=>[m(C,{message:"site.subDir"})])),default:o((()=>[m(S,{modelValue:k.value.subDir,"onUpdate:modelValue":l[11]||(l[11]=e=>k.value.subDir=e),maxlength:"50"},null,8,["modelValue"])])),_:1},8,["rules"])])),_:1}),m($,{span:12},{default:o((()=>[m(w,{prop:"theme",label:e.$t("site.theme"),rules:{required:!0,message:()=>e.$t("v.required")}},{default:o((()=>[m(T,{modelValue:k.value.theme,"onUpdate:modelValue":l[12]||(l[12]=e=>k.value.theme=e),class:"w-full"},{default:o((()=>[(n(!0),p(b,null,v(N.value,(e=>(n(),s(j,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1},8,["label","rules"])])),_:1}),m($,{span:12},{default:o((()=>[m(w,{prop:"mobileTheme",label:e.$t("site.mobileTheme"),rules:{required:!0,message:()=>e.$t("v.required")}},{default:o((()=>[m(T,{modelValue:k.value.mobileTheme,"onUpdate:modelValue":l[13]||(l[13]=e=>k.value.mobileTheme=e),class:"w-full"},{default:o((()=>[(n(!0),p(b,null,v(N.value,(e=>(n(),s(j,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1},8,["label","rules"])])),_:1}),m($,{span:12},{default:o((()=>[m(w,{prop:"orgId",label:e.$t("site.org"),rules:{required:!0,message:()=>e.$t("v.required")}},{default:o((()=>[m(K,{modelValue:k.value.orgId,"onUpdate:modelValue":l[14]||(l[14]=e=>k.value.orgId=e),options:P.value,props:{value:"id",label:"name",checkStrictly:!0},onChange:l[15]||(l[15]=e=>k.value.orgId=null==e?void 0:e[e.length-1]),class:"w-full"},null,8,["modelValue","options"])])),_:1},8,["label","rules"])])),_:1}),m($,{span:12},{default:o((()=>[m(w,{prop:"storageId",label:e.$t("site.storage"),rules:{required:!0,message:()=>e.$t("v.required")}},{default:o((()=>[m(T,{modelValue:k.value.storageId,"onUpdate:modelValue":l[16]||(l[16]=e=>k.value.storageId=e),class:"w-full"},{default:o((()=>[(n(!0),p(b,null,v(B.value,(e=>(n(),s(j,{key:e.id,label:e.name,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1},8,["label","rules"])])),_:1}),m($,{span:12},{default:o((()=>[m(w,{prop:"htmlStorageId",label:e.$t("site.htmlStorage"),rules:{required:!0,message:()=>e.$t("v.required")}},{default:o((()=>[m(T,{modelValue:k.value.htmlStorageId,"onUpdate:modelValue":l[17]||(l[17]=e=>k.value.htmlStorageId=e),class:"w-full"},{default:o((()=>[(n(!0),p(b,null,v(J.value,(e=>(n(),s(j,{key:e.id,label:e.name,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1},8,["label","rules"])])),_:1}),m($,{span:12},{default:o((()=>[m(w,{prop:"mobileStorageId",label:e.$t("site.mobileStorage"),rules:{required:!0,message:()=>e.$t("v.required")}},{default:o((()=>[m(T,{modelValue:k.value.mobileStorageId,"onUpdate:modelValue":l[18]||(l[18]=e=>k.value.mobileStorageId=e),class:"w-full"},{default:o((()=>[(n(!0),p(b,null,v(J.value,(e=>(n(),s(j,{key:e.id,label:e.name,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1},8,["label","rules"])])),_:1}),m($,{span:12},{default:o((()=>[m(w,{prop:"modelId",label:e.$t("site.model"),rules:{required:!0,message:()=>e.$t("v.required")}},{default:o((()=>[m(T,{modelValue:k.value.modelId,"onUpdate:modelValue":l[19]||(l[19]=e=>k.value.modelId=e),class:"w-full"},{default:o((()=>[(n(!0),p(b,null,v(A.value,(e=>(n(),s(j,{key:e.id,label:e.name,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1},8,["label","rules"])])),_:1}),m($,{span:12},{default:o((()=>[m(w,{prop:"status",label:e.$t("site.status")},{default:o((()=>[m(U,{modelValue:k.value.status,"onUpdate:modelValue":l[20]||(l[20]=e=>k.value.status=e)},{default:o((()=>[(n(),p(b,null,v([0,1],(l=>m(q,{key:l,label:l},{default:o((()=>[V(y(e.$t(`site.status.${l}`)),1)])),_:2},1032,["label"]))),64))])),_:1},8,["modelValue"])])),_:1},8,["label"])])),_:1}),m($,{span:24},{default:o((()=>[m(w,{prop:"logo",label:e.$t("site.logo")},{default:o((()=>[m(c(H),{modelValue:k.value.logo,"onUpdate:modelValue":l[21]||(l[21]=e=>k.value.logo=e)},null,8,["modelValue"])])),_:1},8,["label"])])),_:1}),m($,{span:12},{default:o((()=>[m(w,{prop:"seoTitle",label:e.$t("site.seoTitle")},{default:o((()=>[m(S,{modelValue:k.value.seoKeywords,"onUpdate:modelValue":l[22]||(l[22]=e=>k.value.seoKeywords=e),maxlength:"150"},null,8,["modelValue"])])),_:1},8,["label"])])),_:1}),m($,{span:12},{default:o((()=>[m(w,{prop:"seoKeywords",label:e.$t("site.seoKeywords")},{default:o((()=>[m(S,{modelValue:k.value.seoKeywords,"onUpdate:modelValue":l[23]||(l[23]=e=>k.value.seoKeywords=e),maxlength:"150"},null,8,["modelValue"])])),_:1},8,["label"])])),_:1}),m($,{span:24},{default:o((()=>[m(w,{prop:"seoDescription",label:e.$t("site.seoDescription")},{default:o((()=>[m(S,{modelValue:k.value.seoDescription,"onUpdate:modelValue":l[24]||(l[24]=e=>k.value.seoDescription=e),maxlength:"1000"},null,8,["modelValue"])])),_:1},8,["label"])])),_:1}),m($,{span:12},{default:o((()=>[m(w,{prop:"pageSize",label:e.$t("site.pageSize"),rules:{required:!0,message:()=>e.$t("v.required")}},{default:o((()=>[m(Q,{modelValue:k.value.pageSize,"onUpdate:modelValue":l[25]||(l[25]=e=>k.value.pageSize=e),min:1,max:200},null,8,["modelValue"])])),_:1},8,["label","rules"])])),_:1})])),_:1})),g("div",null,[m(z,{disabled:c(x)(`siteSettings:${Y.value}:update`),loading:M.value,onClick:_(se,["prevent"]),type:"primary","native-type":"submit"},{default:o((()=>[V(y(e.$t("submit")),1)])),_:1},8,["disabled","loading","onClick"])])])),_:1},8,["model"])),[[le,L.value]])])),_:1})])),_:1})}}}),[["__scopeId","data-v-50660bb6"]]))}}}))}();
