import{r as _,g as f,c as s,a as e,b as y,w as h,T as x,B as g,o as n,F as a,i as k,t as o,d as l,k as i,j as w}from"./entry.f9d10e7e.js";const T={class:"main"},N={class:"section-winners"},D={class:"container"},B=e("h1",{class:"section-winners__title"},"Победители",-1),V={class:"section-winners__row-box"},C={class:"section-winners__time section-winners__time--desktop"},F={class:"section-winners__text"},L={class:"section-winners__time section-winners__time--mobile"},W={class:"section-winners__text"},j={class:"section-winners__text"},E={class:"section-winners__text"},M={class:"section-winners__button-box"},I={__name:"winners",setup(z){let r=_(8),c=_([]),u=_(!1);f(()=>{d()});async function d(){await fetch(`https://promo-orenbeer.dreamdev.space/lottery-winners/?page=1&per_page=${r.value}`).then(async p=>{let m=await p.json();c.value=m.lotteryWinners})}async function v(){r.value+=8,await d(),u.value=!(r.value<=c.value.length)}return(p,m)=>(n(),s("main",T,[e("section",N,[e("div",D,[B,e("div",V,[y(x,{name:"winners-list",tag:"ul"},{default:h(()=>[(n(!0),s(a,null,k(w(c),(t,b)=>(n(),s("div",{class:"section-winners__row",key:b},[e("time",C,o(t.lotteryDrawDate),1),e("p",F,[e("time",L,o(t.lotteryDrawDate),1),e("span",null,o(t.userFirstName),1)]),e("p",W,o(t.userPhone),1),e("p",j,[t.lotteryType==="instant"?(n(),s(a,{key:0},[l(" Мгновенный приз ")],64)):i("",!0),t.lotteryType==="basic"?(n(),s(a,{key:1},[l(" Обычная лотерея ")],64)):i("",!0),t.lotteryType==="collection"?(n(),s(a,{key:2},[l(" Коллекция стикеров ")],64)):i("",!0)]),e("p",E,o(t.prizeName),1)]))),128))]),_:1})]),e("div",M,[y(g,{name:"winners-list"},{default:h(()=>[w(u)?i("",!0):(n(),s("button",{key:0,onClick:v,class:"button button--orange button--orange-xs section-winners__button"}," Показать еще "))]),_:1})])])])]))}};export{I as default};
