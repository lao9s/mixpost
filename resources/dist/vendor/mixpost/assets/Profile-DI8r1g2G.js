import{o as i,c as m,b as a,x as w,a as e,w as r,cb as N,c6 as g,F as x,f as y,h as V,u as t,e as u,bZ as $,_ as k,Z as B}from"./app-KU_pikFZ.js";import{_ as E}from"./PageHeader-KKwuuNWr.js";import{_ as A}from"./Panel-CwDzJkQI.js";import{u as S}from"./useNotifications-Li6rxoHk.js";import{_ as U}from"./PrimaryButton-BbeE6h-R.js";import{_ as f}from"./HorizontalGroup-Cdo3MHXW.js";import{_}from"./Input-D26Si0az.js";import{_ as P}from"./Error-CtH2oalQ.js";const C={class:"md:grid md:grid-cols-3 md:gap-lg"},F={class:"md:col-span-1 flex justify-between"},T={class:"text-lg font-medium text-gray-900"},Z={class:"mt-xs text-gray-500"},j={class:"mt-lg md:mt-0 md:col-span-2"},b={__name:"ActionSection",setup(c){return(n,s)=>(i(),m("div",C,[a("div",F,[a("div",null,[a("h3",T,[w(n.$slots,"title")]),a("p",Z,[w(n.$slots,"description")])])]),a("div",j,[e(A,null,{default:r(()=>[w(n.$slots,"default")]),_:3})])]))}},q={__name:"UserAccount",setup(c){const{user:n}=N(),{notify:s}=S(),d=g({name:n.value.name,email:n.value.email}),v=()=>{d.put(route("mixpost.profile.updateUser"),{preserveScroll:!0,onSuccess(){s("success","Account info have been updated")}})};return(l,o)=>(i(),m("form",{onSubmit:$(v,["prevent"])},[(i(!0),m(x,null,y(t(d).errors,p=>(i(),V(P,{message:p,class:"mb-xs"},null,8,["message"]))),256)),e(f,null,{title:r(()=>o[2]||(o[2]=[a("label",{for:"name"},"Name",-1)])),default:r(()=>[e(_,{type:"text",modelValue:t(d).name,"onUpdate:modelValue":o[0]||(o[0]=p=>t(d).name=p),error:t(d).errors.name,id:"name"},null,8,["modelValue","error"])]),_:1}),e(f,{class:"mt-lg"},{title:r(()=>o[3]||(o[3]=[a("label",{for:"email"},"Email",-1)])),default:r(()=>[e(_,{type:"email",modelValue:t(d).email,"onUpdate:modelValue":o[1]||(o[1]=p=>t(d).email=p),error:t(d).errors.email,id:"email"},null,8,["modelValue","error"])]),_:1}),e(U,{type:"submit",class:"mt-lg"},{default:r(()=>o[4]||(o[4]=[u("Save")])),_:1})],32))}},I={},L={class:"hidden sm:block"};function M(c,n){return i(),m("div",L,n[0]||(n[0]=[a("div",{class:"py-lg"},[a("div",{class:"border-t border-gray-200 dark:border-slate-700"})],-1)]))}const z=k(I,[["render",M]]),D={__name:"Password",setup(c){const{notify:n}=S(),s=g({current_password:"",password:"",password_confirmation:""}),d=()=>{s.put(route("mixpost.profile.updatePassword"),{preserveScroll:!0,onSuccess(){s.reset(),n("success","Password have been changed")}})};return(v,l)=>(i(),m("form",{onSubmit:$(d,["prevent"])},[(i(!0),m(x,null,y(t(s).errors,o=>(i(),V(P,{message:o,class:"mb-xs"},null,8,["message"]))),256)),e(f,{class:"mt-lg"},{title:r(()=>l[3]||(l[3]=[a("label",{for:"current_password"},"Current password",-1)])),default:r(()=>[e(_,{type:"password",modelValue:t(s).current_password,"onUpdate:modelValue":l[0]||(l[0]=o=>t(s).current_password=o),error:t(s).errors.current_password,id:"current_password"},null,8,["modelValue","error"])]),_:1}),e(f,{class:"mt-md"},{title:r(()=>l[4]||(l[4]=[a("label",{for:"password"},"New password",-1)])),default:r(()=>[e(_,{modelValue:t(s).password,"onUpdate:modelValue":l[1]||(l[1]=o=>t(s).password=o),error:t(s).errors.password,type:"password",id:"password",class:"w-full",autocomplete:"new-password"},null,8,["modelValue","error"])]),_:1}),e(f,{class:"mt-md"},{title:r(()=>l[5]||(l[5]=[a("label",{for:"password_confirmation"},"Confirm new password",-1)])),default:r(()=>[e(_,{modelValue:t(s).password_confirmation,"onUpdate:modelValue":l[2]||(l[2]=o=>t(s).password_confirmation=o),error:t(s).errors.password_confirmation,type:"password",id:"password_confirmation",class:"w-full",required:"",autocomplete:"new-password"},null,8,["modelValue","error"])]),_:1}),e(U,{type:"submit",class:"mt-lg"},{default:r(()=>l[6]||(l[6]=[u("Save")])),_:1})],32))}},G={class:"row-py mb-2xl w-full max-w-5xl mx-auto"},H={class:"row-px"},J={class:"mt-2xl sm:mt-0"},K={class:"mt-2xl sm:mt-0"},es={__name:"Profile",setup(c){return(n,s)=>(i(),m(x,null,[e(t(B),{title:"Edit Profile"}),a("div",G,[e(E,{title:"Edit Profile"}),a("div",H,[a("div",J,[e(b,null,{title:r(()=>s[0]||(s[0]=[u("Profile Information")])),description:r(()=>s[1]||(s[1]=[u("Update your account's profile information and email address.")])),default:r(()=>[e(q)]),_:1})]),e(z),a("div",K,[e(b,null,{title:r(()=>s[2]||(s[2]=[u("Update Password")])),description:r(()=>s[3]||(s[3]=[u("Ensure your account is using a long, random password to stay secure.")])),default:r(()=>[e(D)]),_:1})])])])],64))}};export{es as default};