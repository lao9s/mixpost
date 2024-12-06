import{j as _,o as r,c as a,b as d,h as B,w as o,B as j,u as N,i as L,r as F,k as v,c3 as g,l as q,v as A,a as t,cl as E,p as S,q as $,e as i,s as P,x as H,d as y,c4 as M,_ as O,t as b,g as T,F as V,f as C}from"./app-Bb-WeEdh.js";import{u as U}from"./useNotifications-BWJK7uBx.js";import{T as z,_ as Q}from"./Trash-BtUa250s.js";import{E as R}from"./EllipsisVertical-C9S3Ggi3.js";import{_ as G}from"./DangerButton-BeIbOcIB.js";import{g as J,h as K}from"./VerticallyScrollableContent-lotnN3G4.js";import{_ as W}from"./ProviderIcon-DA1DFbEO.js";import{_ as X}from"./Badge-CstQX1UB.js";import{_ as I}from"./Checkbox-B7Lyq1en.js";import{a as Y}from"./SearchInput-BVXwRqKx.js";import{_ as D}from"./NoResult-BlA8BFh0.js";const Z={},ee={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"};function te(n,l){return r(),a("svg",ee,l[0]||(l[0]=[d("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"},null,-1)]))}const Fe=_(Z,[["render",te]]),se={},oe={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"};function ne(n,l){return r(),a("svg",oe,l[0]||(l[0]=[d("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 19.5L8.25 12l7.5-7.5"},null,-1)]))}const qe=_(se,[["render",ne]]),le={__name:"PureButtonLink",props:{href:{type:String,required:!0},method:{type:String,default:"get"},as:{type:String,default:"a"},type:{type:String,default:null}},setup(n){return(l,u)=>(r(),B(N(L),{href:n.href,methods:n.method,as:n.as,type:n.type,class:"relative inline-flex items-center text-gray-400 hover:text-indigo-500 transition-colors ease-in-out duration-200"},{default:o(()=>[j(l.$slots,"default")]),_:3},8,["href","methods","as","type"]))}},re={},ae={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"};function ie(n,l){return r(),a("svg",ae,l[0]||(l[0]=[d("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"},null,-1)]))}const de=_(re,[["render",ie]]),ue={class:"flex flex-row items-center gap-xs"},Ae={__name:"PostItemActions",props:{itemId:{type:Number,required:!0}},emits:["onDelete"],setup(n,{emit:l}){const u=n,w=l,c=F(!1),p=v(()=>{const s=g().props;return s.hasOwnProperty("filter")?s.filter.status:null}),{notify:m}=U(),k=()=>{y.delete(route("mixpost.posts.delete",{post:u.itemId,status:p.value}),{onSuccess(){c.value=!1,m("success","Post deleted"),w("onDelete"),M.emit("postDelete",u.itemId)}})},x=()=>{y.post(route("mixpost.posts.duplicate",{post:u.itemId}),{},{onSuccess(){m("success","Post duplicated")}})};return(s,e)=>{const f=q("tooltip");return r(),a("div",null,[d("div",ue,[A((r(),B(le,{href:s.route("mixpost.posts.edit",{post:n.itemId})},{default:o(()=>[t(E)]),_:1},8,["href"])),[[f,"Edit"]]),t(P,{"width-classes":"w-32",placement:"bottom-end"},{trigger:o(()=>[t(S,{class:"mt-1"},{default:o(()=>[t(R)]),_:1})]),content:o(()=>[t($,{onClick:x,as:"button"},{default:o(()=>[t(de,{class:"!w-5 !h-5 mr-1"}),e[3]||(e[3]=i(" Duplicate "))]),_:1}),t($,{onClick:e[0]||(e[0]=h=>c.value=!0),as:"button"},{default:o(()=>[t(z,{class:"!w-5 !h-5 mr-1 text-red-500"}),e[4]||(e[4]=i(" Delete "))]),_:1})]),_:1})]),t(Q,{show:c.value,variant:"danger",onClose:e[2]||(e[2]=h=>c.value=!1)},{header:o(()=>e[5]||(e[5]=[i(" Delete post ")])),body:o(()=>e[6]||(e[6]=[i(" Are you sure you want to delete this post? ")])),footer:o(()=>[t(H,{onClick:e[1]||(e[1]=h=>c.value=!1),class:"mr-xs"},{default:o(()=>e[7]||(e[7]=[i("Cancel")])),_:1}),t(G,{onClick:k},{default:o(()=>e[8]||(e[8]=[i("Delete")])),_:1})]),_:1},8,["show"])])}}},ce={},me={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"};function fe(n,l){return r(),a("svg",me,l[0]||(l[0]=[d("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"},null,-1)]))}const pe=_(ce,[["render",fe]]),ve={class:"flex items-center"},_e={class:"ml-xs hidden sm:inline-block"},we={key:0,class:"px-2 py-1 rounded-md bg-white text-black font-bold"},ke={class:"p-sm"},ge={key:0,class:"mt-sm flex flex-wrap items-center gap-xs"},xe={key:1},he={class:"p-sm mt-sm"},$e={key:0,class:"mt-sm flex flex-wrap items-center gap-xs"},ye={key:1},Ee={__name:"PostsFilter",props:{modelValue:{type:Object,required:!0}},emits:["update:modelValue"],setup(n,{emit:l}){const u=n,w=l,c=v(()=>g().props.accounts),p=v(()=>g().props.tags),m=v(()=>u.modelValue.tags.length+u.modelValue.accounts.length),k=()=>{w("update:modelValue",Object.assign(u.modelValue,{keyword:"",tags:[],accounts:[]}))};return(x,s)=>(r(),a("div",ve,[t(Y,{modelValue:n.modelValue.keyword,"onUpdate:modelValue":s[0]||(s[0]=e=>n.modelValue.keyword=e),class:"mr-2"},null,8,["modelValue"]),t(P,{"width-classes":"w-72",placement:"bottom-end","closeable-on-content":!1},{trigger:o(()=>[t(O,{size:"md"},{default:o(()=>[t(pe),d("span",_e,[s[3]||(s[3]=i("Filters ")),m.value?(r(),a("span",we,b(m.value),1)):T("",!0)])]),_:1})]),header:o(()=>[t(S,{onClick:k},{default:o(()=>s[4]||(s[4]=[i("Clear filter")])),_:1})]),content:o(()=>[t(J,null,{default:o(()=>[d("div",ke,[s[6]||(s[6]=d("div",{class:"font-semibold"},"Labels",-1)),p.value.length?(r(),a("div",ge,[(r(!0),a(V,null,C(p.value,e=>(r(),a("label",{key:e.id,class:"flex items-center cursor-pointer"},[t(I,{checked:n.modelValue.tags,"onUpdate:checked":s[1]||(s[1]=f=>n.modelValue.tags=f),value:e.id,number:"",class:"mr-1"},null,8,["checked","value"]),t(K,{item:e,removable:!1,editable:!1},null,8,["item"])]))),128))])):(r(),a("div",xe,[t(D,{class:"mt-xs"},{default:o(()=>s[5]||(s[5]=[i("No labels found")])),_:1})]))]),d("div",he,[s[8]||(s[8]=d("div",{class:"font-semibold"},"Accounts",-1)),c.value.length?(r(),a("div",$e,[(r(!0),a(V,null,C(c.value,e=>(r(),a("label",{key:e.id,class:"flex items-center cursor-pointer"},[t(I,{checked:n.modelValue.accounts,"onUpdate:checked":s[2]||(s[2]=f=>n.modelValue.accounts=f),value:e.id,number:"",class:"mr-1"},null,8,["checked","value"]),t(X,null,{default:o(()=>[t(W,{provider:e.provider,class:"!w-4 !h-4 mr-xs"},null,8,["provider"]),i(" "+b(e.name),1)]),_:2},1024)]))),128))])):(r(),a("div",ye,[t(D,{class:"mt-xs"},{default:o(()=>s[7]||(s[7]=[i("No accounts found")])),_:1})]))])]),_:1})]),_:1})]))}};export{qe as C,Ae as _,Fe as a,Ee as b};