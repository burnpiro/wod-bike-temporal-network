(this.webpackJsonpapplication=this.webpackJsonpapplication||[]).push([[0],{109:function(e,a,t){},110:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(9),i=t.n(o),c=(t(83),t(10)),l=t(44),s=t(23),u=t(158),d=t(174),m=t(163),p=t(165),f=t(113),h=t(166),g=t(167),b=t(168),v=t(170),E=t(173),j=t(169),O=t(175),y=t(171),w=t(164),x=t(160),k=t(159),C=t(161),S=t(111),M=t(65),N=t.n(M);function T(){return r.a.createElement(S.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",(new Date).getFullYear(),".")}var I=Object(u.a)((function(e){return{icon:{marginRight:e.spacing(2)},main:{minHeight:"calc(100vh - 70px)"},logo:{maxHeight:32,marginRight:e.spacing(2)},footer:{position:"fixed",bottom:0,width:"100vw",backgroundColor:e.palette.background.paper,padding:e.spacing(2,2)}}}));function D(e){var a=e.children,t=I();return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,null),r.a.createElement(x.a,{position:"relative"},r.a.createElement(C.a,null,r.a.createElement("img",{src:N.a,alt:"WRM Logo",className:t.logo}),r.a.createElement(S.a,{variant:"h6",color:"inherit",noWrap:!0},"WRM Network"))),r.a.createElement("main",{className:t.main},a),r.a.createElement("footer",{className:t.footer},r.a.createElement(S.a,{variant:"h6",align:"center",gutterBottom:!0},"Footer"),r.a.createElement(T,null)))}var H=t(50),L=t(162),P=t(67),R=t.n(P),F=t(52),A=t.n(F),z=t(68),_=t(69),B=t.n(_),W=function(e,a){switch(a.type){case"FETCH_INIT":return Object(s.a)(Object(s.a)({},e),{},{isLoading:!0,isError:!1});case"FETCH_SUCCESS":return Object(s.a)(Object(s.a)({},e),{},{isLoading:!1,isError:!1,data:a.payload});case"FETCH_FAILURE":return Object(s.a)(Object(s.a)({},e),{},{isLoading:!1,isError:!0});default:throw new Error}},J=function(e,a){var t=Object(n.useState)(e),r=Object(c.a)(t,2),o=r[0],i=r[1],l=Object(n.useReducer)(W,{isLoading:!1,isError:!1,data:a}),s=Object(c.a)(l,2),u=s[0],d=s[1];return Object(n.useEffect)((function(){var e=!1;return function(){var a=Object(z.a)(A.a.mark((function a(){var t;return A.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return d({type:"FETCH_INIT"}),a.prev=1,a.next=4,B()(o);case 4:t=a.sent,e||d({type:"FETCH_SUCCESS",payload:t.data}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),e||d({type:"FETCH_FAILURE"});case 11:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(){return a.apply(this,arguments)}}()(),function(){e=!0}}),[o]),[u,i]},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.map((function(e){return e.lat})),t=e.map((function(e){return e.lng})),n=e.map((function(e){return e.id})),r=e.map((function(e){return e.name}));return[{type:"scattermapbox",lat:a,lon:t,ids:n,mode:"markers",marker:{size:14,color:"blue"},hoverinfo:"text",text:r}]},X=[[0,"rgb(0, 0, 200)"],[.25,"rgb(0, 25, 255)"],[.375,"rgb(0, 152, 255)"],[.5,"rgb(44, 255, 150)"],[.625,"rgb(151, 255, 0)"],[.75,"rgb(255, 234, 0)"],[.875,"rgb(255, 111, 0)"],[1,"rgb(255, 0, 0)"]],Y=function(){var e=J("nodes_list.json",{}),a=Object(c.a)(e,2),t=a[0],n=t.data,r=t.isLoading,o=t.isError,i=(a[1],J("paths_reduced-e10.json",{})),l=Object(c.a)(i,2),s=l[0],u=s.data,d=s.isLoading,m=s.isError;l[1];return[{nodes:{list:U(Object.values(n)),obj:n},paths:{obj:u}},r||d,o||m]},$=function(e){var a=e.initialTime,t=void 0===a?0:a,r=e.interval,o=void 0===r?2e3:r,i=e.step,l=void 0===i?1:i,s=e.timerType,u=void 0===s?"INCREMENTAL":s,d=e.endTime,m=e.onTimeOver,p=Object(n.useState)(t),f=Object(c.a)(p,2),h=f[0],g=f[1],b=Object(n.useState)(!1),v=Object(c.a)(b,2),E=v[0],j=v[1],O=Object(n.useState)(!1),y=Object(c.a)(O,2),w=y[0],x=y[1],k=Object(n.useCallback)((function(e){j(!1),x(!1),g(e||t)}),[t]),C=Object(n.useCallback)((function(e){w&&k(),e&&k(e),j(!0)}),[k,w]),S=Object(n.useCallback)((function(){j(!1)}),[]);return Object(n.useEffect)((function(){E&&h===d&&(j(!1),x(!0),"function"===typeof m&&m())}),[d,m,h,E]),Object(n.useEffect)((function(){var e=null;return E?e=setInterval((function(){g((function(e){return"DECREMENTAL"===u?e-l:e+l}))}),o):e&&clearInterval(e),function(){e&&clearInterval(e)}}),[E,l,u,o]),{isRunning:E,pause:S,reset:k,start:C,time:h}},q=Object(u.a)((function(e){return{overlay:{position:"fixed",top:0,left:0,width:"100vw",height:"100vw",paddingTop:"25%",backgroundColor:"rgba(0,0,0,0.5)",display:"flex",flexDirection:"column",alignItems:"center",color:"white"}}})),G={dragmode:"zoom",mapbox:{style:"open-street-map",center:{lat:51.11,lon:17.03},margin:{r:0,t:0,b:0,l:0},zoom:11},autosize:!0,showlegend:!1,updatemenus:[{buttons:[{method:"update",args:["play"],label:"Play"},{method:"update",args:["pause"],label:"Pause"}],name:"action",direction:"left",pad:{t:10},showactive:!0,type:"buttons",x:0,xanchor:"left",y:1.1,yanchor:"top"},{buttons:[{args:[3,31],label:"March",method:"update"},{args:[4,30],label:"April",method:"update"},{args:[5,31],label:"May",method:"update"},{args:[6,30],label:"June",method:"update"},{args:[7,31],label:"July",method:"update"},{args:[8,31],label:"August",method:"update"},{args:[9,30],label:"September",method:"update"},{args:[10,31],label:"October",method:"update"},{args:[11,30],label:"November",method:"update"},{args:[12,31],label:"December",method:"update"}],name:"month",direction:"down",pad:{t:10},showactive:!0,type:"dropdown",x:0,xanchor:"left",y:1.15,yanchor:"top",active:1,font:{color:"#5072a8"}}],sliders:[{pad:{t:5,b:10},x:.15,y:1.11,len:.85,currentvalue:{visible:!0,xanchor:"right",prefix:"Hour: ",font:{color:"#888",size:20}},active:0,name:"Hour",steps:Array(96).fill(0).map((function(e,a){return{label:"".concat(Math.floor(15*a/60),":").concat(15*a%60===0?"00":15*a%60),args:[a],method:"update"}}))}]},K=function(e){var a=e.showNodes,t=void 0===a||a,o=e.showPaths,i=void 0===o||o,l=e.nodeMetric,s=void 0===l?"k":l,u=e.maxNumOfPaths,d=void 0===u?50:u,m=q(),p=Object(n.useState)([]),f=Object(c.a)(p,2),h=f[0],g=f[1],b=Object(n.useState)(0),v=Object(c.a)(b,2),E=v[0],j=v[1],O=Object(n.useState)(1),y=Object(c.a)(O,2),w=y[0],x=y[1],k=Object(n.useState)({num:4,days:30}),C=Object(c.a)(k,2),S=C[0],M=C[1],N=Y(),T=Object(c.a)(N,3),I=T[0],D=I.nodes,P=I.paths,F=T[1],A=(T[2],J("".concat(S.num,"-paths.json"),{})),z=Object(c.a)(A,2),_=z[0],B=_.data,W=_.isLoading,U=z[1],K=J("".concat(S.num,"-metrics.json"),{}),Q=Object(c.a)(K,2),V=Q[0],Z=V.data,ee=V.isLoading,ae=Q[1],te=$({endTime:96,initialTime:E}),ne=te.time,re=te.start,oe=te.pause,ie=te.reset;te.isRunning;G.sliders[0].active=ne,G.sliders[1]={pad:{t:5,b:10},x:.15,y:1.22,len:.85,currentvalue:{visible:!0,xanchor:"right",prefix:"Day: ",font:{color:"#888",size:12}},active:w-1,name:"Day",steps:Array(S.days).fill(0).map((function(e,a){return{label:a+1,args:[a+1],method:"update"}}))},Object(n.useEffect)((function(){null!=B&&null!=B[1]&&null!=Z&&null!=Z[1]?g(Array(96).fill(0).map((function(e,a){return[].concat(Object(H.a)((t?D.list:[]).map(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"k",t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0;return function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:"scattermapbox",lat:o.lat,lon:o.lon,ids:o.ids,mode:"markers",marker:{size:o.ids.map((function(t){var n=e.find((function(e){return e.o===t}));if(null==n)return 4;var r="p"===a?Math.max((56+7*Math.ceil(Math.log2(n[a])))/3,1):n[a];return 8*Math.ceil(Math.log2(r))})),color:o.ids.map((function(o){var i=e.find((function(e){return e.o===o}));if(null==i)return"blue";var c="p"===a?Math.max((72+9*Math.ceil(Math.log2(i[a])))/3,0):i[a];return t?2*([i,n.find((function(e){return e.o===o}))||i,r.find((function(e){return e.o===o}))||i].reduce((function(e,t,n,r){return e+="p"===a?Math.max((72+9*Math.ceil(Math.log2(t.p)))/3,0)/r.length:t[a]/r.length}),0)-c)+5:c})),colorscale:X,cmin:0,cmax:15,opacity:.8},hoverinfo:"text",text:o.text}}}(Z[w][15*a]||[],"trend"===s?"k":s,"trend"===s,Z[w][15*a-15]||[],Z[w][15*a-30]||[]))),Object(H.a)((i&&B[w][15*a]||[]).map(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e["".concat(t.o,"-").concat(t.d)];return{type:"scattermapbox",lat:null==n?[]:n.lng,lon:null==n?[]:n.lat,mode:"lines",line:{width:2*t.c,color:"rgba(255,0,0,0.5)"},id:null==n?[]:n.id,text:null==n?"unknown":'"'.concat(a[t.o].name,'" do "').concat(a[t.d].name,'" rowery: ').concat(t.c)}}}(P.obj,D.obj)).slice(0,d)))}))):g(Array(96).fill(0).map((function(e,a){return Object(H.a)(D.list)})))}),[F,W,ee,w,t,i,s,d]),Object(n.useEffect)((function(){96===ne&&w<S.days&&(G.sliders[0].active=1,x(w+1),re(1))}),[ne,w]);var ce=h[ne]||[];return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{data:ce,layout:G,frames:Array(h.length).fill(0).map((function(e,a){return{name:a}})),onButtonClicked:function(e){var a=e.menu.name,t=e.button.args;if("month"===a)j(0),ie(0),M({num:t[0],days:t[1]}),x(1),U("".concat(t[0],"-paths.json")),ae("".concat(t[0],"-metrics.json"));else switch(t[0]){case"play":re();break;case"pause":oe();break;default:console.log(t[0])}},onSliderChange:function(e){var a=e.slider.name,t=e.step.args;"Hour"===a&&(j(t[0]),ie(t[0])),"Day"===a&&(x(t[0]),j(0),ie(0))},useResizeHandler:!0,style:{width:"100%",minHeight:"calc(100vh - 70px)"}}),F&&r.a.createElement("div",{className:m.overlay},r.a.createElement(L.a,{color:"secondary",size:80,thickness:4}),r.a.createElement("h1",null,"Network data is loading... Please wait :)")))},Q=(t(109),Object(u.a)((function(e){return{toolbarIcon:Object(s.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),drawerPaper:{position:"absolute",height:"calc(100% - 64px)",marginTop:"64px",whiteSpace:"nowrap",width:280,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(l.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(6)},e.breakpoints.up("sm"),{width:e.spacing(9)}),menuContainer:{paddingTop:e.spacing(2),display:"flex",flexDirection:"column"},formElement:{marginTop:e.spacing(2)}}}))),V=[{name:"Degree",value:"k"},{name:"In Degree",value:"ik"},{name:"Out Degree",value:"ok"},{name:"PageRank",value:"p"},{name:"Degree trend",value:"trend"}],Z=[{name:20,value:20},{name:50,value:50},{name:80,value:80},{name:100,value:100},{name:150,value:150},{name:300,value:300}];var ee=function(){var e=Q(),a=r.a.useState(!1),t=Object(c.a)(a,2),n=t[0],o=t[1],i=r.a.useState(!0),l=Object(c.a)(i,2),s=l[0],u=l[1],x=r.a.useState(!0),k=Object(c.a)(x,2),C=k[0],S=k[1],M=r.a.useState(V[0].value),N=Object(c.a)(M,2),T=N[0],I=N[1],H=r.a.useState(50),L=Object(c.a)(H,2),P=L[0],R=L[1];return r.a.createElement(D,null,r.a.createElement(d.a,{variant:"permanent",classes:{paper:e.drawerPaper+" "+(n?"":e.drawerPaperClose)},open:n},r.a.createElement("div",{className:e.toolbarIcon},n&&r.a.createElement(m.a,{onClick:function(){o(!1)}},"\u276e"),!n&&r.a.createElement(m.a,{onClick:function(){o(!0)}},"\u276f")),r.a.createElement(w.a,null),n&&r.a.createElement(p.a,{className:e.menuContainer},r.a.createElement(h.a,{component:"fieldset"},r.a.createElement(f.a,{component:"legend"},"Display Option"),r.a.createElement(g.a,null,r.a.createElement(b.a,{control:r.a.createElement(E.a,{checked:s,onChange:function(e){u(e.target.checked)},name:"nodes"}),label:"Show Nodes?"}),r.a.createElement(b.a,{control:r.a.createElement(E.a,{checked:C,onChange:function(e){S(e.target.checked)},name:"paths"}),label:"Show Paths?"}))),r.a.createElement(h.a,{className:e.formElement},r.a.createElement(j.a,{id:"nodeMetric-label"},"Node Metric"),r.a.createElement(y.a,{labelId:"nodeMetric-label",id:"nodeMetric",value:T,onChange:function(e){I(e.target.value)}},V.map((function(e){return r.a.createElement(O.a,{key:e.value,value:e.value},e.name)})))),r.a.createElement(h.a,{className:e.formElement},r.a.createElement(j.a,{id:"numOfNodes-label"},"Max num. of paths"),r.a.createElement(y.a,{labelId:"numOfNodes-label",id:"numOfNodes",value:P,onChange:function(e){R(e.target.value)}},Z.map((function(e){return r.a.createElement(O.a,{key:e.value,value:e.value},e.name)}))),r.a.createElement(v.a,null,"Be careful it might affect performance")))),r.a.createElement(K,{showNodes:s,showPaths:C,nodeMetric:T,maxNumOfPaths:P}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},65:function(e,a,t){e.exports=t.p+"static/media/logo.559ba900.svg"},78:function(e,a,t){e.exports=t(110)},83:function(e,a,t){}},[[78,1,2]]]);
//# sourceMappingURL=main.25bb83d4.chunk.js.map