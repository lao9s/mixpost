import{j as f,o as t,c as s,b as i,B as l,g as a,n as d,k as m,F as h}from"./app-BJNrNiSE.js";const p={},y={class:"flex flex-col overflow-x-hidden overflow-y-hidden"},b={class:"-m-1.5 overflow-x-auto"},g={class:"p-1.5 min-w-full inline-block align-middle overflow-hidden"},_={class:"min-w-full divide-y divide-gray-200 border-collapse"},v={key:0},k={key:1,class:"divide-y divide-gray-100"};function $(e,o){return t(),s("div",y,[i("div",b,[i("div",g,[i("table",_,[e.$slots.head?(t(),s("thead",v,[l(e.$slots,"head")])):a("",!0),e.$slots.body?(t(),s("tbody",k,[l(e.$slots,"body")])):a("",!0)])])])])}const S=f(p,[["render",$]]),x={__name:"TableRow",props:{hoverable:{type:Boolean,default:!1}},setup(e){return(o,n)=>(t(),s("tr",{class:d({"bg-white hover:bg-gray-50 transition-colors ease-in-out duration-200":e.hoverable})},[l(o.$slots,"default")],2))}},w=["scope"],B=["role"],u="px-lg py-sm",T={__name:"TableCell",props:{component:{type:String,default:"td"},scope:{type:String},class:{type:String},align:{type:String,default:"left"},clickable:{type:Boolean,default:!1}},emits:["click"],setup(e){const o=e,n=m(()=>({left:"text-left",right:"text-right"})[o.align]);return(c,r)=>(t(),s(h,null,[e.component==="th"?(t(),s("th",{key:0,scope:e.scope,class:d([[o.class,n.value,u],"font-medium"])},[l(c.$slots,"default")],10,w)):a("",!0),e.component==="td"?(t(),s("td",{key:1,class:d([o.class,n.value,u]),onClick:r[0]||(r[0]=()=>{e.clickable&&c.$emit("click")}),role:e.clickable?"button":"cell"},[l(c.$slots,"default")],10,B)):a("",!0)],64))}};export{S as T,T as _,x as a};