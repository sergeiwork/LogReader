(this["webpackJsonplog-reader"]=this["webpackJsonplog-reader"]||[]).push([[0],{214:function(e,t,c){},215:function(e,t,c){},423:function(e,t,c){"use strict";c.r(t);var n=c(5),a=(c(210),c(0)),i=c.n(a),r=c(23),s=c.n(r),l=(c(214),c(68)),o=c(16),d=c(11),j=c(66),b=c(428),h=c(429),u=c(430),m=c(431),O=(c(215),c(38)),x=function e(){Object(j.a)(this,e),this.Time="00",this.Timestamp=0};function p(e,t,c){var n=new x;return n.Timestamp=e,n.Time=t,c.forEach((function(e){n[e]=0})),n}var f=function(e){var t=Object(a.useState)([]),c=Object(d.a)(t,2),i=c[0],r=c[1];return Object(a.useEffect)((function(){var t,c=new Array,n=new x,a=Object(o.a)(e.LogLines);try{for(a.s();!(t=a.n()).done;){var i,s,l=t.value,d=(null!==(i=null===(s=l.Properties)||void 0===s?void 0:s.WorkerName)&&void 0!==i?i:"General")+" "+l.Level,j=l.Timestamp.getHours()+":"+(10*Math.floor(l.Timestamp.getMinutes()/10)+"").padStart(2,"0");j!==n.Time&&(""!==n.Time&&c.push(n),n=p(l.Timestamp.getTime(),j,e.Workers));var b=n[d];n[d]=(isNaN(b)?0:b)+1}}catch(h){a.e(h)}finally{a.f()}c.includes(n)||c.push(n),r(c)}),[e.LogLines,e.Workers]),Object(n.jsxs)(O.d,{data:i,height:300,width:1e3,children:[Object(n.jsx)(O.a,{strokeDasharray:"3 3"}),Object(n.jsx)(O.f,{dataKey:"Time"}),Object(n.jsx)(O.g,{}),Object(n.jsx)(O.e,{}),Object(n.jsx)(O.b,{}),e.Workers.map((function(e){return Object(n.jsx)(O.c,{type:"monotone",dataKey:e,stroke:"#"+Math.floor(16777215*Math.random()).toString(16)},e)}))]})},g=c(131),v=c.n(g),y=(c(360),c(199)),k=c.n(y),w=function(e,t){return Object.keys(t).forEach((function(c){e=e.replace(new RegExp("\\{"+c+"\\}","gi"),t[c])})),e};function C(){var e=Object(a.createRef)(),t=Object(a.useState)([]),c=Object(d.a)(t,2),i=c[0],r=c[1],s=Object(a.useState)([]),j=Object(d.a)(s,2),O=j[0],x=j[1],p=Object(a.useState)(new Map),g=Object(d.a)(p,2),y=g[0],C=g[1],N=Object(a.useState)(new Map),T=Object(d.a)(N,2),S=T[0],L=T[1],E=Object(a.useState)(!1),M=Object(d.a)(E,2),D=M[0],A=M[1],H=Object(a.useState)([]),W=Object(d.a)(H,2),P=W[0],I=W[1],R=Object(a.useState)([]),F=Object(d.a)(R,2),z=F[0],B=F[1],G=Object(a.useState)(new Date(0)),J=Object(d.a)(G,2),K=J[0],$=J[1],q=Object(a.useState)(new Date(0)),Q=Object(d.a)(q,2),U=Q[0],V=Q[1],X=Object(a.useState)([]),Y=Object(d.a)(X,2),Z=Y[0],_=Y[1],ee=Object(a.useState)(0),te=Object(d.a)(ee,2),ce=te[0],ne=te[1];Object(a.useEffect)((function(){var e,t=i.filter((function(e){return e.trim().length>0})).map((function(e,t){try{var c=JSON.parse(e);return{Timestamp:new Date(c.Timestamp),Level:c.Level,Message:w(c.MessageTemplate,c.Properties),Exception:c.Exception,Id:t,Properties:c.Properties}}catch(n){return null}})).filter((function(e){return null!==e})).map((function(e){return e})),c=new Map,n=new Map,a=Object(o.a)(t);try{for(a.s();!(e=a.n()).done;){var r,s,l=e.value;if(l.Exception){var d=l.Exception.split(" ")[0];c.has(d)?c.set(d,c.get(d)+1):c.set(d,1)}var j=(null!==(r=null===(s=l.Properties)||void 0===s?void 0:s.WorkerName)&&void 0!==r?r:"General")+" "+l.Level;n.has(j)?n.set(j,n.get(j)+1):n.set(j,1)}}catch(b){a.e(b)}finally{a.f()}C(c),I(Array.from(c.keys())),L(n),B(Array.from(n.keys())),t.length>0&&($(t[0].Timestamp),V(t[t.length-1].Timestamp)),x(t)}),[i]),Object(a.useEffect)((function(){A(!0),_(O.filter((function(e){var t,c;return(!e.Exception||P.includes(e.Exception.split(" ")[0]))&&z.includes((null!==(t=null===(c=e.Properties)||void 0===c?void 0:c.WorkerName)&&void 0!==t?t:"General")+" "+e.Level)&&K!==new Date(0)&&e.Timestamp>=K&&U!==new Date(0)&&e.Timestamp<=U}))),A(!1)}),[O,P,z,K,U]);return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)("input",{type:"file",ref:e,disabled:D,accept:".json"}),Object(n.jsx)(b.a,{onClick:function(t){var c=new FileReader;c.addEventListener("load",(function(e){var t,c=(null===(t=e.target)||void 0===t?void 0:t.result).split("\n");r(c),A(!1)})),A(!0),c.readAsText(e.current.files[0])},disabled:D,children:"Load"}),D?Object(n.jsx)(h.a,{color:"info"}):Object(n.jsxs)("div",{style:{width:"100%"},children:[Object(n.jsx)(f,{LogLines:Z,Workers:z}),Object(n.jsxs)("div",{className:"accordion",id:"settingsAccordion",children:[Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("div",{className:"card-header",id:"exceptionsHeading",children:Object(n.jsx)("h2",{className:"mb-0",children:Object(n.jsx)("button",{className:"btn btn-link",type:"button","data-toggle":"collapse","data-target":"#exceptionsCollapse","aria-expanded":"true","aria-controls":"exceptionsCollapse",children:"Exceptions"})})}),Object(n.jsx)("div",{id:"exceptionsCollapse",className:"collapse show","aria-labelledby":"exceptionsHeading","data-parent":"#settingsAccordion",children:Object(n.jsx)("div",{className:"card-body",children:Object(n.jsxs)(u.a,{striped:!0,bordered:!0,children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{width:"10%",children:"Count"}),Object(n.jsx)("td",{width:"auto",children:"Exception"}),Object(n.jsx)("td",{width:"5%",children:Object(n.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(n.jsx)(b.a,{outline:!0,size:"sm",color:"secondary",style:{marginRight:5},onClick:function(){return I([])},children:"\u2610"}),Object(n.jsx)(b.a,{outline:!0,size:"sm",color:"success",onClick:function(){return I(Array.from(y.keys()))},children:"\u2611"})]})})]})}),Object(n.jsx)("tbody",{children:Array.from(y.keys()).sort().map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:y.get(e)}),Object(n.jsx)("td",{children:e}),Object(n.jsx)("td",{children:Object(n.jsx)(m.a,{type:"checkbox",className:"tableCheckbox",checked:P.includes(e),onChange:function(t){t.target.checked?I([].concat(Object(l.a)(P),[e])):I(Object(l.a)(P.filter((function(t){return t!==e}))))}})})]},e)}))})]})})})]}),Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("div",{className:"card-header",id:"workersHeading",children:Object(n.jsx)("h2",{className:"mb-0",children:Object(n.jsx)("button",{className:"btn btn-link",type:"button","data-toggle":"collapse","data-target":"#workersCollapse","aria-expanded":"true","aria-controls":"workersCollapse",children:"Workers"})})}),Object(n.jsx)("div",{id:"workersCollapse",className:"collapse show","aria-labelledby":"workersHeading","data-parent":"#settingsAccordion",children:Object(n.jsx)("div",{className:"card-body",children:Object(n.jsxs)(u.a,{striped:!0,bordered:!0,children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{width:"10%",children:"Count"}),Object(n.jsx)("td",{width:"auto",children:"Worker"}),Object(n.jsx)("td",{width:"5%",children:Object(n.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(n.jsx)(b.a,{outline:!0,size:"sm",color:"secondary",style:{marginRight:5},onClick:function(){return B([])},children:"\u2610"}),Object(n.jsx)(b.a,{outline:!0,size:"sm",color:"success",onClick:function(){return B(Array.from(S.keys()))},children:"\u2611"})]})})]})}),Object(n.jsx)("tbody",{children:Array.from(S.keys()).sort().map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:S.get(e)}),Object(n.jsx)("td",{children:e}),Object(n.jsx)("td",{children:Object(n.jsx)("div",{children:Object(n.jsx)(m.a,{type:"checkbox",className:"tableCheckbox",checked:z.includes(e),onChange:function(t){t.target.checked?B([].concat(Object(l.a)(z),[e])):B(Object(l.a)(z.filter((function(t){return t!==e}))))}})})})]},e)}))})]})})})]})]}),"Events:",Object(n.jsx)("br",{}),"Start Time: ",Object(n.jsx)(v.a,{selected:null!==K&&void 0!==K?K:O.length>0?O[0].Timestamp:new Date,onChange:function(e){e instanceof Date&&$(e)},showTimeSelect:!0,timeFormat:"HH:mm",dateFormat:"dd.MM.yyyy HH:mm"}),Object(n.jsx)(b.a,{onClick:function(){return $(O[0].Timestamp)},children:"Clear"}),Object(n.jsx)("br",{}),"End Time: ",Object(n.jsx)(v.a,{selected:null!==U&&void 0!==U?U:O.length>0?O[O.length-1].Timestamp:new Date,onChange:function(e){e instanceof Date&&V(e)},showTimeSelect:!0,timeFormat:"HH:mm",dateFormat:"dd.MM.yyyy HH:mm"}),Object(n.jsx)(b.a,{onClick:function(){return V(O[O.length-1].Timestamp)},children:"Clear"}),Object(n.jsx)("br",{}),"Filtered ",Z.length," out of ",O.length,Object(n.jsx)("br",{}),"Showing ",1e3*ce," ..."," ",Math.min(Z.length-1e3*ce,1e3)+1e3*ce,Object(n.jsx)(k.a,{pageCount:Z.length/1e3,onPageChange:function(e){console.log(e.selected),ne(e.selected)},forcePage:ce,disableInitialCallback:!0,pageRangeDisplayed:3,marginPagesDisplayed:1,breakClassName:"page-item",breakLinkClassName:"page-link",containerClassName:"pagination",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",activeClassName:"active"}),Object(n.jsxs)(u.a,{striped:!0,children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{width:"5%",children:"#"}),Object(n.jsx)("td",{width:"10%",children:"Time"}),Object(n.jsx)("td",{width:"10%",children:"Level"}),Object(n.jsx)("td",{width:"10%",children:"Work Item"}),Object(n.jsx)("td",{width:"20%",children:"Message"}),Object(n.jsx)("td",{width:"auto",children:"Exception"})]})}),Object(n.jsx)("tbody",{children:Z.filter((function(e,t){return t>=1e3*ce&&t<1e3*(ce+1)})).map((function(e){var t,c;return Object(n.jsxs)("tr",{className:"logRow "+e.Level,children:[Object(n.jsx)("td",{children:e.Id}),Object(n.jsx)("td",{children:e.Timestamp.toLocaleString()}),Object(n.jsx)("td",{children:e.Level}),Object(n.jsx)("td",{children:null!==(t=null===(c=e.Properties)||void 0===c?void 0:c.WorkItemKey)&&void 0!==t?t:"*"}),Object(n.jsx)("td",{children:e.Message}),Object(n.jsx)("td",{children:e.Exception})]},e.Id)}))})]})]})]})}var N=c(90),T=Object(N.b)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}}}),S=T.actions,L=(S.increment,S.decrement,S.incrementByAmount,T.reducer),E=Object(N.a)({reducer:{counter:L}}),M=c(203);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(M.a,{store:E,children:Object(n.jsx)(C,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[423,1,2]]]);
//# sourceMappingURL=main.498156cc.chunk.js.map