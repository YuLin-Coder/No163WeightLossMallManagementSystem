import{g as V,D as t,B as b,p as C,L as q,G as B,q as $,n as s,w as r,m as l,o as v,j as N,v as D,k as _,Q as E,a4 as L,I as M,J as R,y as U,x as j}from"./vendor.6c10456e.js";import{l as G}from"./index.e298dbcb.js";const I={class:"h-full p-3 bg-gray-100"},J=j("h3",{class:"py-5 text-center text-3xl font-bold text-primary"},"Cprogram",-1),z=V({setup(Q){const p=t(),a=t({}),n=t(),u=t(),i=t(!1),c=t(),w=b(),y=C();q(()=>{n.value.focus(),n.value.select()}),B(()=>{c.value=w.query.redirect});const g=()=>{p.value.validate(async e=>{if(!!e){i.value=!0;try{const o=await G(a.value);if(o.status!==0){u.value=o.message;return}c.value?y.push(c.value):window.location.reload()}finally{i.value=!1}}})};return(e,o)=>{const h=l("el-alert"),m=l("el-input"),f=l("el-form-item"),x=l("el-button"),k=l("el-form");return v(),$("div",I,[s(k,{ref_key:"form",ref:p,model:a.value,class:"mx-auto md:max-w-xs"},{default:r(()=>[J,u.value?(v(),N(h,{key:0,title:u.value,type:"error",class:"mb-3",closable:!1,"show-icon":""},null,8,["title"])):D("",!0),s(f,{prop:"username",rules:[{required:!0,message:()=>e.$t("v.required")}]},{default:r(()=>[s(m,{ref_key:"focus",ref:n,modelValue:a.value.username,"onUpdate:modelValue":o[0]||(o[0]=d=>a.value.username=d),type:"text",name:"username",placeholder:e.$t("username"),"prefix-icon":_(E),autocomplete:"on"},null,8,["modelValue","placeholder","prefix-icon"])]),_:1},8,["rules"]),s(f,{prop:"password",rules:[{required:!0,message:()=>e.$t("v.required")}]},{default:r(()=>[s(m,{ref:"password",modelValue:a.value.password,"onUpdate:modelValue":o[1]||(o[1]=d=>a.value.password=d),type:"password",name:"password",placeholder:e.$t("password"),"prefix-icon":_(L),"show-password":""},null,8,["modelValue","placeholder","prefix-icon"])]),_:1},8,["rules"]),s(x,{type:"primary","native-type":"submit",class:"w-full",loading:i.value,onClick:M(g,["prevent"])},{default:r(()=>[R(U(e.$t("login")),1)]),_:1},8,["loading","onClick"])]),_:1},8,["model"])])}}});export{z as default};