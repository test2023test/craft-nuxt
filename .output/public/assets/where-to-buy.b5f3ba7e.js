import{o as c,c as a,a as e,z as B,r as h,g as x,j as d,F as b,i as f,b as k,w as M,A as P,t as v,n as Y,d as j}from"./entry.f9d10e7e.js";import{_ as L}from"./_plugin-vue_export-helper.c27b6911.js";const S={props:{point:{type:Object,default:[]}},methods:{init(){YaMap.map.destroy(),YaMap.init({setting:{center:[+this.point.lat,+this.point.lon],zoom:7}}),YaMap.addPoint([+this.point.lat,+this.point.lon])}},mounted(){ymaps.ready(()=>YaMap.init({}))}},E=e("div",{class:"section-where-buy__map",id:"map",style:{height:"400px",width:"100%"}},null,-1),R=[E];function z(y,n,r,i,s,_){return c(),a("div",null,R)}const I=L(S,[["render",z]]),J=B({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(y,{slots:n,attrs:r}){const i=h(!1);return x(()=>{i.value=!0}),s=>{var u;if(i.value)return(u=n.default)==null?void 0:u.call(n);const _=n.fallback||n.placeholder;if(_)return _();const p=s.fallback||s.placeholder||"",w=s.fallbackTag||s.placeholderTag||"span";return a(w,r,p)}}});const N={class:"main"},O={class:"section-where-buy"},U={class:"container"},V=e("h1",{class:"section-where-buy__title"},"Гдe купить?",-1),F={class:"section-where-buy__content"},D={class:"section-where-buy__button-col"},q={class:"section-where-buy__button-scroll-container"},G={class:"dropdown dropdown--where-to-buy section-where-buy__dropdown show-desktop"},H={class:"dropdown__value-box"},K=["value"],Q=e("svg",{class:"dropdown__arrow"},[e("use",{"xlink:href":"#dropdown-arrow"})],-1),W={class:"dropdown__options-list"},X=["data-value","onClick"],Z=["onClick"],ee={class:"section-where-buy__button-text-box"},te={class:"section-where-buy__button-text"},ne={class:"section-where-buy__button-addr"},oe=e("svg",{class:"section-where-buy__button-addr-icon"},[e("use",{"xlink:href":"#map-marker"})],-1),se=e("svg",{class:"section-where-buy__button-icon"},[e("use",{"xlink:href":"#chevron-right"})],-1),ae={class:"section-where-buy__map-col"},ie={class:"dropdown dropdown--where-to-buy section-where-buy__dropdown hide-desktop"},ce={class:"dropdown__value-box"},_e=["value"],le=e("svg",{class:"dropdown__arrow"},[e("use",{"xlink:href":"#dropdown-arrow"})],-1),de={class:"dropdown__options-list"},re=["data-value","onClick"],pe={__name:"where-to-buy",setup(y){const n=P();let r=h([]),i=h({}),s=h({}),_=h([]),p=h(null);x(()=>{C(),$()});function w(o){s.value=o,setTimeout(()=>{p.value.init()},100)}async function u(o){i.value=o,await g(),w(_.value[0])}async function g(){await fetch(n.public.API_BASE_URL+`/sale-points/${i.value.id}/`).then(async o=>{let l=await o.json();_.value=l["sales-points"]})}function C(){fetch(n.public.API_BASE_URL+"/cities/").then(async o=>{let l=await o.json();r.value=l.cities})}function $(){fetch(n.public.API_BASE_URL+"/current-city/").then(async o=>{let l=await o.json();l.success&&u(l.currentCity)})}return(o,l)=>{const A=I,T=J;return c(),a("main",N,[e("section",O,[e("div",U,[V,e("div",F,[e("div",D,[e("div",q,[e("div",G,[e("div",H,[e("input",{class:"dropdown__value",type:"text",placeholder:"Выберите свой город",disabled:"",value:d(i).name},null,8,K),Q]),e("ul",W,[(c(!0),a(b,null,f(d(r),t=>(c(),a("li",{class:"dropdown__option","data-value":t.name,onClick:m=>u(t)},v(t.name),9,X))),256))])]),(c(!0),a(b,null,f(d(_),t=>(c(),a("div",{class:Y(["section-where-buy__button section-where-buy__button--block",{"section-where-buy__button--orange":d(s).id===t.id}]),onClick:m=>w(t)},[e("div",ee,[e("p",te,v(t.name),1),e("address",ne,[oe,j(" "+v(t.address),1)])]),se],10,Z))),256))])]),e("div",ae,[e("div",ie,[e("div",ce,[e("input",{class:"dropdown__value",type:"text",placeholder:"Выберите свой город",disabled:"",value:d(i).name},null,8,_e),le]),e("ul",de,[(c(!0),a(b,null,f(d(r),t=>(c(),a("li",{class:"dropdown__option","data-value":t.name,onClick:m=>u(t)},v(t.name),9,re))),256))])]),k(T,null,{default:M(()=>[k(A,{class:"section-where-buy__map",point:d(s),ref_key:"yamap",ref:p},null,8,["point"])]),_:1})])])])])])}}};export{pe as default};
