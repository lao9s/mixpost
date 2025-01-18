import{o as i,h as g,w as o,b as s,a as t,u as b,i as $,j as F,c as d,r as v,e as p,_ as D,g as m,n as I,d as k,k as T,l as V,F as y,f as B,m as N,Z as L,P,p as z,q as C,s as E,v as R,t as A,x as H}from"./app-BJNrNiSE.js";import{u as S}from"./useNotifications-CjPK1eYQ.js";import{_ as U}from"./PageHeader-DikdnLM8.js";import{_ as q}from"./Panel-CKfWScXD.js";import{_ as O,T as X}from"./Trash-B8nmGU1u.js";import{_ as Y}from"./Account-yMfhR3h_.js";import{T as Z,F as G,M as J}from"./ProviderIcon-CDF_Sy5W.js";import{_ as K}from"./Input-D2s6dpH8.js";import{_ as Q}from"./HorizontalGroup-DqEhb1oL.js";import{_ as W}from"./DangerButton-d4mU4gqN.js";import{E as ee}from"./EllipsisVertical-BPJZ1dPj.js";import{_ as se}from"./Alert-uBKUb351.js";import"./ExclamationCircle-WafEnVfo.js";const te={class:"flex mr-4"},oe={__name:"AddTwitterAccount",setup(f){return(n,r)=>(i(),g(b($),{href:n.route("mixpost.accounts.add",{provider:"twitter"}),method:"post",as:"button",type:"button",class:"w-full flex items-center px-lg py-4 hover:bg-twitter hover:bg-opacity-20 ease-in-out duration-200"},{default:o(()=>[s("span",te,[t(Z,{class:"text-twitter"})]),r[0]||(r[0]=s("span",{class:"flex flex-col items-start"},[s("span",{class:"font-semibold"},"X"),s("span",null,"Connect a new X profile")],-1))]),_:1},8,["href"]))}},ne={class:"flex mr-4"},re={__name:"AddFacebookPage",setup(f){return(n,r)=>(i(),g(b($),{href:n.route("mixpost.accounts.add",{provider:"facebook_page"}),method:"post",as:"button",type:"button",class:"w-full flex items-center px-lg py-4 hover:bg-facebook hover:bg-opacity-20 ease-in-out duration-200"},{default:o(()=>[s("span",ne,[t(G,{class:"text-facebook"})]),r[0]||(r[0]=s("span",{class:"flex flex-col items-start"},[s("span",{class:"font-semibold"},"Facebook Page"),s("span",null,"Connect a new Facebook page")],-1))]),_:1},8,["href"]))}},ae={},le={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"};function ie(f,n){return i(),d("svg",le,n[0]||(n[0]=[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"},null,-1)]))}const ue=F(ae,[["render",ie]]),ce={class:"flex mr-md"},de={key:0,class:"px-lg py-md"},fe={__name:"AddMastodonAccount",setup(f){const{notify:n}=S(),r=v(!1),a=v(""),l=v(!1),w=()=>new Promise((u,e)=>{axios.post(route("mixpost.services.createMastodonApp"),{server:a.value}).then(()=>{u()}).catch(function(_){e(_)})}),h=()=>{r.value=!0,k.post(route("mixpost.accounts.add",{provider:"mastodon"}),{server:a.value},{onSuccess(){r.value=!1}})},x=async()=>{r.value=!0,await w().then(()=>{h()}).catch(u=>{if(u.response.status!==422){n("error",u.response.data.message);return}n("error",u.response.data.errors)}).finally(()=>{r.value=!1})};return(u,e)=>(i(),d("div",{class:I({"bg-mastodon bg-opacity-20":l.value})},[s("div",{role:"button",onClick:e[0]||(e[0]=_=>l.value=!l.value),type:"button",class:"w-full flex items-center px-lg py-md hover:bg-mastodon hover:bg-opacity-20 ease-in-out duration-200"},[s("span",ce,[t(J,{class:"text-mastodon"})]),e[2]||(e[2]=s("span",{class:"flex flex-col items-start"},[s("span",{class:"font-semibold"},"Mastodon"),s("span",null,"Connect a new Mastodon profile")],-1))]),l.value?(i(),d("div",de,[t(Q,null,{title:o(()=>e[3]||(e[3]=[p("Enter your Mastodon server")])),default:o(()=>[t(K,{type:"text",modelValue:a.value,"onUpdate:modelValue":e[1]||(e[1]=_=>a.value=_),placeholder:"example.server"},null,8,["modelValue"])]),_:1}),t(D,{onClick:x,disabled:!a.value||r.value,isLoading:r.value,class:"mt-xs md:mt-0"},{default:o(()=>[e[4]||(e[4]=s("span",{class:"mr-xs"},"Next",-1)),s("span",null,[t(ue,{class:"!w-5 !h-5"})])]),_:1},8,["disabled","isLoading"])])):m("",!0)],2))}},pe={},me={xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"};function _e(f,n){return i(),d("svg",me,n[0]||(n[0]=[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"},null,-1)]))}const ve=F(pe,[["render",_e]]),ge={key:0,class:"mb-md"},xe={key:0},be={key:1},we={__name:"AlertUnconfiguredService",props:{isConfigured:{type:Object,required:!0}},setup(f){const n=f,r=T(()=>Object.keys(n.isConfigured).some(a=>!["tenor","unsplash"].includes(a)&&n.isConfigured[a]!==!0));return(a,l)=>r.value?(i(),d("div",ge,[t(se,{variant:"warning",closeable:!1,class:"mb-md"},{default:o(()=>[f.isConfigured.facebook?m("",!0):(i(),d("p",xe,"You have not configured Facebook service.")),f.isConfigured.twitter?m("",!0):(i(),d("p",be,"You have not configured Twitter service.")),l[0]||(l[0]=s("p",{class:"mt-xs italic"},"Click on the button below to configure the third-party services.",-1))]),_:1}),t(b($),{href:a.route("mixpost.services.index"),class:"inline-block"},{default:o(()=>[t(D,null,{default:o(()=>l[1]||(l[1]=[p("Configure services")])),_:1})]),_:1},8,["href"])])):m("",!0)}},he={class:"w-full mx-auto row-py"},ke={class:"mt-lg row-px w-full"},$e={class:"w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-6"},ye={class:"block p-lg"},Ce={class:"flex flex-col justify-center items-center"},Ae={class:"absolute top-0 right-0 mt-sm mr-sm"},Me={class:"flex flex-col justify-center"},Fe={key:0,class:"absolute top-0 left-0"},De={class:"w-md h-md bg-red-500 rounded-full"},Se={class:"mt-sm font-semibold text-center break-words"},je={class:"mt-1 text-center text-stone-800"},Ie={class:"flex flex-col"},M="Social Accounts",Xe={__name:"Accounts",setup(f){const{notify:n}=S(),r=v(!1),a=v(null),l=v(!1),w=u=>{k.put(route("mixpost.accounts.update",{account:u}),{},{preserveScroll:!0,onSuccess(e){e.props.flash.error||n("success","The account has been refreshed")}})},h=()=>{k.delete(route("mixpost.accounts.delete",{account:a.value}),{preserveScroll:!0,onStart(){l.value=!0},onSuccess(){a.value=null,n("success","Account deleted")},onFinish(){l.value=!1}})},x=()=>{l.value||(a.value=null)};return(u,e)=>{const _=V("tooltip");return i(),d(y,null,[t(b(L),{title:M}),s("div",he,[t(U,{title:M},{description:o(()=>e[2]||(e[2]=[p(" Connect a social account you'd like to manage. ")])),_:1}),s("div",ke,[t(we,{isConfigured:u.$page.props.is_configured_service},null,8,["isConfigured"]),s("div",$e,[s("button",{onClick:e[0]||(e[0]=c=>r.value=!0),class:"border border-indigo-800 rounded-lg hover:border-indigo-500 hover:text-indigo-500 transition-colors ease-in-out duration-200"},[s("span",ye,[s("span",Ce,[t(P,{class:"w-7 h-7"}),e[3]||(e[3]=s("span",{class:"mt-xs text-lg"},"Add account",-1))])])]),(i(!0),d(y,null,B(u.$page.props.accounts,c=>(i(),g(q,{key:c.id,class:"relative"},{default:o(()=>[s("div",Ae,[t(E,{"width-classes":"w-32"},{trigger:o(()=>[t(z,null,{default:o(()=>[t(ee)]),_:1})]),content:o(()=>[t(C,{onClick:j=>w(c.uuid),as:"button"},{default:o(()=>[t(ve,{class:"!w-5 !h-5 mr-1"}),e[4]||(e[4]=p(" Refresh "))]),_:2},1032,["onClick"]),t(C,{onClick:j=>a.value=c.uuid,as:"button"},{default:o(()=>[t(X,{class:"!w-5 !h-5 mr-1 text-red-500"}),e[5]||(e[5]=p(" Delete "))]),_:2},1032,["onClick"])]),_:2},1024)]),s("div",Me,[t(Y,{size:"lg","img-url":c.image,provider:c.provider,active:!0},null,8,["img-url","provider"]),c.authorized?m("",!0):(i(),d("div",Fe,[R(s("div",De,null,512),[[_,"Unauthorized"]])])),s("div",Se,A(c.name),1),s("div",je,"Added: "+A(c.created_at),1)])]),_:2},1024))),128))])])]),t(O,{show:a.value!==null,onClose:x,variant:"danger"},{header:o(()=>e[6]||(e[6]=[p(" Delete account ")])),body:o(()=>e[7]||(e[7]=[p(" Are you sure you want to delete this account? ")])),footer:o(()=>[t(H,{onClick:x,disabled:l.value,class:"mr-xs"},{default:o(()=>e[8]||(e[8]=[p("Cancel ")])),_:1},8,["disabled"]),t(W,{onClick:h,"is-loading":l.value,disabled:l.value},{default:o(()=>e[9]||(e[9]=[p("Delete ")])),_:1},8,["is-loading","disabled"])]),_:1},8,["show"]),t(N,{show:r.value,closeable:!0,onClose:e[1]||(e[1]=c=>r.value=!1)},{default:o(()=>[s("div",Ie,[u.$page.props.is_service_active.facebook?(i(),g(re,{key:0})):m("",!0),t(fe),u.$page.props.is_service_active.twitter?(i(),g(oe,{key:1})):m("",!0)])]),_:1},8,["show"])],64)}}};export{Xe as default};
