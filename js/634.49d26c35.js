"use strict";(globalThis["webpackChunkpkm_sv_raidbattle"]=globalThis["webpackChunkpkm_sv_raidbattle"]||[]).push([[634],{3634:(e,t,l)=>{l.r(t),l.d(t,{default:()=>oe});var a=l(9835),o=l(6970);const s={class:"q-pa-lg col"},n={class:"row justify-evenly"},i={class:"q-gutter-md col-4"},r={class:"q-gutter-md col-4"},m={class:"q-gutter-md q-pt-md col-2"},d={class:"q-gutter-md q-pt-md col-2"},u={class:"q-pa-md col-12",style:{"max-width":"1600px"}},p={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},c={style:{fontSize:"36px"}},f=(0,a._)("br",null,null,-1),b={style:{fontSize:"18px"}},w=(0,a._)("br",null,null,-1),y={style:{fontSize:"18px"}},v=(0,a._)("br",null,null,-1),g={style:{fontSize:"18px"}},h={style:{fontSize:"18px"}},_={class:"row justify-evenly"},k={class:"q-gutter-md col-3"},T={class:"q-gutter-md col-3"},q={class:"q-gutter-md col-3"},V={class:"q-gutter-md col-3"},x={class:"q-gutter-md col-10"},W={class:"q-gutter-md q-pt-md col-2"};function S(e,t,l,S,Z,B){const C=(0,a.up)("q-tab"),P=(0,a.up)("q-tabs"),Q=(0,a.up)("q-separator"),N=(0,a.up)("q-select"),z=(0,a.up)("q-btn"),H=(0,a.up)("q-icon"),R=(0,a.up)("q-input"),j=(0,a.up)("q-card-section"),U=(0,a.up)("q-card"),F=(0,a.up)("q-table"),I=(0,a.up)("q-tab-panel"),K=(0,a.up)("q-item-section"),O=(0,a.up)("q-item"),L=(0,a.up)("q-tab-panels"),D=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(D,{class:"row justify-evenly"},{default:(0,a.w5)((()=>[(0,a._)("div",s,[(0,a.Wm)(U,null,{default:(0,a.w5)((()=>[(0,a.Wm)(P,{modelValue:e.tab,"onUpdate:modelValue":t[0]||(t[0]=t=>e.tab=t),dense:"",class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:(0,a.w5)((()=>[(0,a.Wm)(C,{name:"join",label:"加入"}),(0,a.Wm)(C,{name:"create",label:"開場"})])),_:1},8,["modelValue"]),(0,a.Wm)(Q),(0,a.Wm)(L,{modelValue:e.tab,"onUpdate:modelValue":t[10]||(t[10]=t=>e.tab=t),animated:""},{default:(0,a.w5)((()=>[(0,a.Wm)(I,{name:"join"},{default:(0,a.w5)((()=>[(0,a._)("div",n,[(0,a._)("div",i,[(0,a.Wm)(N,{modelValue:e.searchType,"onUpdate:modelValue":t[1]||(t[1]=t=>e.searchType=t),options:e.types,label:"太晶屬性"},null,8,["modelValue","options"])]),(0,a._)("div",r,[(0,a.Wm)(N,{modelValue:e.searchStar,"onUpdate:modelValue":t[2]||(t[2]=t=>e.searchStar=t),options:e.stars,label:"星數"},null,8,["modelValue","options"])]),(0,a._)("div",m,[(0,a.Wm)(z,{color:"primary",label:"篩選+更新",class:"float-left",onClick:e.search},null,8,["onClick"])]),(0,a._)("div",d,[(0,a.Wm)(z,{color:"orange",label:"重設",class:"float-right",onClick:e.reset},null,8,["onClick"])]),(0,a._)("div",u,[(0,a.Wm)(F,{title:"太晶團體戰",rows:e.pkm.raidBattles,columns:e.raidBattleColums,"rows-per-page-options":[6,9,12,18],grid:"",filter:e.filter,"row-key":"name"},{"top-right":(0,a.w5)((()=>[(0,a.Wm)(R,{borderless:"",dense:"",debounce:"300",color:"primary",modelValue:e.filter,"onUpdate:modelValue":t[3]||(t[3]=t=>e.filter=t),placeholder:"搜尋"},{append:(0,a.w5)((()=>[(0,a.Wm)(H,{name:"search"})])),_:1},8,["modelValue"])])),item:(0,a.w5)((e=>[(0,a._)("div",p,[(0,a.Wm)(U,null,{default:(0,a.w5)((()=>[(0,a.Wm)(j,{class:"text-center"},{default:(0,a.w5)((()=>[(0,a._)("strong",c,(0,o.zw)(e.row.PartitionKey),1),f,(0,a._)("strong",b,"星數: "+(0,o.zw)(e.row.Stars),1),w,(0,a._)("strong",y,"屬性: "+(0,o.zw)(e.row.Type),1),v,(0,a._)("strong",g,"備註: "+(0,o.zw)(e.row.Comment),1)])),_:2},1024),(0,a.Wm)(Q),(0,a.Wm)(j,{class:"flex flex-center",style:{fontSize:"48px"}},{default:(0,a.w5)((()=>[(0,a._)("div",null,(0,o.zw)(e.row.Password),1)])),_:2},1024),(0,a.Wm)(Q),(0,a.Wm)(j,{class:"flex flex-center"},{default:(0,a.w5)((()=>[(0,a._)("strong",h,(0,o.zw)(e.row.Timestamp),1)])),_:2},1024)])),_:2},1024)])])),_:1},8,["rows","columns","filter"])])])])),_:1}),(0,a.Wm)(I,{name:"create"},{default:(0,a.w5)((()=>[(0,a._)("div",_,[(0,a._)("div",k,[(0,a.Wm)(N,{modelValue:e.pkmName,"onUpdate:modelValue":t[4]||(t[4]=t=>e.pkmName=t),"use-input":"","input-debounce":"0",label:"Pokemon名稱",options:e.pkmNames,onFilter:e.filterFn},{"no-option":(0,a.w5)((()=>[(0,a.Wm)(O,null,{default:(0,a.w5)((()=>[(0,a.Wm)(K,{class:"text-grey"},{default:(0,a.w5)((()=>[(0,a.Uk)(" No results ")])),_:1})])),_:1})])),_:1},8,["modelValue","options","onFilter"])]),(0,a._)("div",T,[(0,a.Wm)(N,{modelValue:e.type,"onUpdate:modelValue":t[5]||(t[5]=t=>e.type=t),options:e.types,label:"太晶屬性"},null,8,["modelValue","options"])]),(0,a._)("div",q,[(0,a.Wm)(N,{modelValue:e.star,"onUpdate:modelValue":t[6]||(t[6]=t=>e.star=t),options:e.stars,label:"星數"},null,8,["modelValue","options"])]),(0,a._)("div",V,[(0,a.Wm)(R,{modelValue:e.password,"onUpdate:modelValue":t[7]||(t[7]=t=>e.password=t),label:"密語"},null,8,["modelValue"])]),(0,a._)("div",x,[(0,a.Wm)(R,{modelValue:e.comment,"onUpdate:modelValue":t[8]||(t[8]=t=>e.comment=t),label:"備註"},null,8,["modelValue"])]),(0,a._)("div",W,[(0,a.Wm)(z,{color:"primary",onClick:t[9]||(t[9]=t=>e.submit()),label:"提交"})])])])),_:1})])),_:1},8,["modelValue"])])),_:1})])])),_:1})}var Z=l(499),B=l(1809),C=function(e,t,l,a){function o(e){return e instanceof l?e:new l((function(t){t(e)}))}return new(l||(l=Promise))((function(l,s){function n(e){try{r(a.next(e))}catch(t){s(t)}}function i(e){try{r(a["throw"](e))}catch(t){s(t)}}function r(e){e.done?l(e.value):o(e.value).then(n,i)}r((a=a.apply(e,t||[])).next())}))};const P=(0,B.Q_)("pokemonStore",{state:()=>({pokedex:[],raidBattles:[]}),getters:{pokemonNames(){const e=this.pokedex.map((e=>e.Name));return e}},actions:{getPokedex(){return C(this,void 0,void 0,(function*(){const e=yield fetch("https://pokemonsv.azurewebsites.net/api/GetPokedex"),t=yield e.json();this.pokedex=t,console.log(this.pokedex)}))},getRaidBattles(){return C(this,void 0,void 0,(function*(){const e=yield fetch("https://pokemonsv.azurewebsites.net/api/GetRaidBattles"),t=yield e.json();t.forEach((e=>{e.Timestamp=new Date(e.Timestamp).toLocaleString()})),t.sort(((e,t)=>e.Timestamp>t.Timestamp?-1:e.Timestamp<t.Timestamp?1:0)),this.raidBattles=t,console.log(this.raidBattles)}))},createRaidBattle(e){return C(this,void 0,void 0,(function*(){const t=new Headers;t.append("Content-Type","application/json");const l=JSON.stringify({pokemonName:e.PartitionKey,pokemonType:e.Type,stars:e.Stars,password:e.Password,comment:e.Comment}),a={method:"POST",headers:t,body:l},o=yield fetch("https://pokemonsv.azurewebsites.net/api/CreateRaidBattle",a);return console.log(o),o}))},getFilteredRaidBattles(e,t){return C(this,void 0,void 0,(function*(){yield this.getRaidBattles(),this.raidBattles=this.raidBattles.filter((l=>"不限"===e&&0===t||("不限"===e?l.Stars===t:0===t?l.Type===e:l.Type===e&&l.Stars===t)))}))}}}),Q=[{name:"name",label:"名稱",field:"Name",align:"left",sortable:!0},{name:"number",label:"編號",field:"RowKey",align:"left",sortable:!0},{name:"type1",label:"屬性1",field:"Type1",align:"left",sortable:!0},{name:"type2",label:"屬性2",field:"Type2",align:"left",sortable:!0}],N=[{name:"name",label:"名稱",field:"PartitionKey",align:"left",sortable:!0},{name:"star",label:"星",field:"Stars",align:"left",sortable:!0},{name:"type",label:"太晶屬性",field:"Type",align:"left",sortable:!0},{name:"time",label:"時間",field:"Timestamp",align:"left",sortable:!0},{name:"passowrd",label:"密語",field:"Password",align:"left",sortable:!0}],z=(0,a.aZ)({name:"IndexPage",setup(){const e=P();e.getPokedex(),e.getRaidBattles();const t=(0,Z.iH)(e.pokemonNames),l=(0,Z.iH)(""),a=(0,Z.iH)("");let o=(0,Z.iH)(""),s=(0,Z.iH)(0),n=(0,Z.iH)(""),i=(0,Z.iH)(""),r=(0,Z.iH)("不限"),m=(0,Z.iH)(0),d=(0,Z.iH)("");const u=e=>{a.value=e.row.Name};return{tab:(0,Z.iH)("join"),type:o,types:["不限","一般","火","水","電","草","冰","格鬥","毒","地面","飛行","超能力","超能力","岩石","蟲","幽靈","龍","惡","鋼","妖精"],stars:[0,1,2,3,4,5,6],star:s,password:n,pkmName:a,filter:l,pokdexColumns:Q,raidBattleColums:N,selectPkm:u,pkmNames:t,pkm:e,searchName:i,searchType:r,searchStar:m,comment:d,filterFn(l,a){a(""!==l?()=>{const a=l.toLowerCase();t.value=e.pokemonNames.filter((e=>e.toLowerCase().indexOf(a)>-1))}:()=>{t.value=e.pokemonNames})},submit(){const t={PartitionKey:a.value,RowKey:a.value,Type:o.value,Stars:s.value,Password:n.value,Comment:d.value,Timestamp:(new Date).toISOString()};e.createRaidBattle(t),a.value="",o.value="",s.value=0,n.value="",d.value=""},search(){e.getFilteredRaidBattles(r.value,m.value)},reset(){e.getRaidBattles(),i.value="",r.value="",m.value=0}}}});var H=l(1639),R=l(9885),j=l(4458),U=l(7817),F=l(900),I=l(926),K=l(9800),O=l(4106),L=l(5228),D=l(9379),G=l(2374),E=l(6611),J=l(2857),A=l(3190),M=l(490),X=l(1233),Y=l(3532),$=l(1682),ee=l(7220),te=l(9984),le=l.n(te);const ae=(0,H.Z)(z,[["render",S]]),oe=ae;le()(z,"components",{QPage:R.Z,QCard:j.Z,QTabs:U.Z,QTab:F.Z,QSeparator:I.Z,QTabPanels:K.Z,QTabPanel:O.Z,QSelect:L.Z,QBtn:D.Z,QTable:G.Z,QInput:E.Z,QIcon:J.Z,QCardSection:A.Z,QItem:M.Z,QItemSection:X.Z,QTr:Y.Z,QTh:$.Z,QTd:ee.Z})}}]);