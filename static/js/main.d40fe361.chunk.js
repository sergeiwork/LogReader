(this["webpackJsonplog-reader"]=this["webpackJsonplog-reader"]||[]).push([[0],{218:function(e,t,c){},219:function(e,t,c){},427:function(e,t,c){"use strict";c.r(t);var a=c(3),n=(c(214),c(0)),i=c.n(n),s=c(24),r=c.n(s),l=(c(218),c(95)),o=c(21),d=c(19),j=c(11),b=c(69),u=c(438),h=c(432),O=c(433),p=c(434),m=c(435),x=c(436),g=c(437),f=(c(219),c(36)),v=function e(){Object(b.a)(this,e),this.Time="00",this.Timestamp=0};function y(e,t,c){var a=new v;return a.Timestamp=e,a.Time=t,c.forEach((function(e){a[e]=0})),a}var k=function(e){var t=Object(n.useState)([]),c=Object(j.a)(t,2),i=c[0],s=c[1];return Object(n.useEffect)((function(){var t,c=new Array,a=new v,n=Object(d.a)(e.LogLines);try{for(n.s();!(t=n.n()).done;){var i,r,l=t.value,o=(null!==(i=null===(r=l.Properties)||void 0===r?void 0:r.WorkerName)&&void 0!==i?i:"General")+" "+l.Level,j=l.Timestamp.getHours()+":"+(10*Math.floor(l.Timestamp.getMinutes()/10)+"").padStart(2,"0");j!==a.Time&&(""!==a.Time&&c.push(a),a=y(l.Timestamp.getTime(),j,e.Workers));var b=a[o];a[o]=(isNaN(b)?0:b)+1}}catch(u){n.e(u)}finally{n.f()}c.includes(a)||c.push(a),s(c)}),[e.LogLines,e.Workers]),Object(a.jsx)(f.e,{width:"100%",height:400,children:Object(a.jsxs)(f.d,{data:i,height:300,width:1e3,style:{zIndex:100},children:[Object(a.jsx)(f.a,{strokeDasharray:"3 3"}),Object(a.jsx)(f.g,{dataKey:"Time"}),Object(a.jsx)(f.h,{}),Object(a.jsx)(f.f,{}),Object(a.jsx)(f.b,{}),e.Workers.map((function(e){return Object(a.jsx)(f.c,{type:"monotone",dataKey:e,stroke:"#"+Math.floor(16777215*Math.random()).toString(16)},e)}))]})})},w=c(134),C=c.n(w),N=(c(364),c(133)),S=c.n(N),T=c(207),L=function(e,t){return Object.keys(t).forEach((function(c){e=e.replace(new RegExp("\\{"+c+"\\}","gi"),t[c])})),e};function A(){var e=Object(n.createRef)(),t=Object(n.useState)([]),c=Object(j.a)(t,2),i=c[0],s=c[1],r=Object(n.useState)([]),b=Object(j.a)(r,2),f=b[0],v=b[1],y=Object(n.useState)(new Map),w=Object(j.a)(y,2),N=w[0],A=w[1],M=Object(n.useState)(new Map),E=Object(j.a)(M,2),I=E[0],D=E[1],W=Object(n.useState)(new Map),P=Object(j.a)(W,2),H=P[0],R=P[1],z=Object(n.useState)(new Map),F=Object(j.a)(z,2),B=F[0],G=F[1],J=Object(n.useState)(!1),K=Object(j.a)(J,2),V=K[0],$=K[1],q=Object(n.useState)(!1),Q=Object(j.a)(q,2),U=Q[0],X=Q[1],Y=Object(n.useState)([]),Z=Object(j.a)(Y,2),_=Z[0],ee=Z[1],te=Object(n.useState)(""),ce=Object(j.a)(te,2),ae=ce[0],ne=ce[1],ie=Object(n.useState)([]),se=Object(j.a)(ie,2),re=se[0],le=se[1],oe=Object(n.useState)([]),de=Object(j.a)(oe,2),je=de[0],be=de[1],ue=Object(n.useState)(new Date(0)),he=Object(j.a)(ue,2),Oe=he[0],pe=he[1],me=Object(n.useState)(new Date(0)),xe=Object(j.a)(me,2),ge=xe[0],fe=xe[1],ve=Object(n.useState)([]),ye=Object(j.a)(ve,2),ke=ye[0],we=ye[1],Ce=Object(n.useState)(""),Ne=Object(j.a)(Ce,2),Se=Ne[0],Te=Ne[1],Le=Object(n.useState)([]),Ae=Object(j.a)(Le,2),Me=Ae[0],Ee=Ae[1],Ie=Object(n.useState)([]),De=Object(j.a)(Ie,2),We=De[0],Pe=De[1],He=Object(n.useState)(!1),Re=Object(j.a)(He,2),ze=Re[0],Fe=Re[1],Be=Object(n.useState)([]),Ge=Object(j.a)(Be,2),Je=Ge[0],Ke=Ge[1],Ve=Object(n.useState)(0),$e=Object(j.a)(Ve,2),qe=$e[0],Qe=$e[1],Ue=Object(n.useState)(0),Xe=Object(j.a)(Ue,2),Ye=Xe[0],Ze=Xe[1],_e=Object(n.useState)(0),et=Object(j.a)(_e,2),tt=et[0],ct=et[1],at=Object(n.useState)(""),nt=Object(j.a)(at,2),it=nt[0],st=nt[1],rt=Object(n.useCallback)((function(e){1===e.length&&bt(e[0])}),[]),lt=Object(T.a)({onDrop:rt}),ot=lt.getRootProps,dt=lt.getInputProps,jt=lt.isDragActive;Object(n.useEffect)((function(){return Fe(!0)}),[ke,Se,Me,We]),Object(n.useEffect)((function(){if(!V){var e,t=i.filter((function(e){return e.trim().length>0})).map((function(e,t){try{var c=JSON.parse(e);return{Timestamp:new Date(c.Timestamp),Level:c.Level,Message:L(c.MessageTemplate,c.Properties),Exception:c.Exception,Id:t,Properties:c.Properties,RawLine:e}}catch(a){return null}})).filter((function(e){return null!==e})).map((function(e){return e})),c=new Map,a=new Map,n=new Map,s=Object(d.a)(t);try{for(s.s();!(e=s.n()).done;){var r,l,o,j,b=e.value;if(b.Exception){var u=b.Exception.split(" ")[0];c.has(u)?c.set(u,c.get(u)+1):c.set(u,1)}var h=(null!==(r=null===(l=b.Properties)||void 0===l?void 0:l.WorkerName)&&void 0!==r?r:"General")+" "+b.Level;a.has(h)?a.set(h,a.get(h)+1):a.set(h,1);var O=null!==(o=null===(j=b.Properties)||void 0===j?void 0:j.ApplicationSessionId)&&void 0!==o?o:"";n.has(O)?n.set(O,n.get(O)+1):n.set(O,1)}}catch(m){s.e(m)}finally{s.f()}A(c),we(Array.from(c.keys())),Te(""),D(a),Ee(Array.from(a.keys())),R(n),Pe(Array.from(n.keys()));var p=Array.from(n.keys()).reduce((function(e,c){return e.set(c,t.filter((function(e){var t;return(null===(t=e.Properties)||void 0===t?void 0:t.ApplicationSessionId)===c})).reduce((function(e,t){return t.Timestamp<e?t.Timestamp:e}),new Date(9999,12,31))),e}),new Map);G(p),t.length>0&&(pe(t[0].Timestamp),fe(t[t.length-1].Timestamp)),ut(),v(t)}}),[i,V]),Object(n.useEffect)((function(){Ke(f.filter((function(e){var t,c,a,n;return(!e.Exception||_.includes(e.Exception.split(" ")[0]))&&re.includes((null!==(t=null===(c=e.Properties)||void 0===c?void 0:c.WorkerName)&&void 0!==t?t:"General")+" "+e.Level)&&(0===ae.length||e.Exception.match(ae))&&je.includes(null!==(a=null===(n=e.Properties)||void 0===n?void 0:n.ApplicationSessionId)&&void 0!==a?a:"")&&Oe!==new Date(0)&&e.Timestamp>=Oe&&ge!==new Date(0)&&e.Timestamp<=ge})))}),[f,_,ae,re,je,Oe,ge]);var bt=function(e){s([]);var t=104857600,c=e.size/t+1,a=0;st(e.name),Ze(0),ct(c),$(!0);var n=new FileReader;n.addEventListener("error",(function(e){console.error("Can not load file",e),$(!1),s([]),Qe(0),st(""),ut()})),n.addEventListener("load",(function(i){var r,l=(null===(r=i.target)||void 0===r?void 0:r.result).split("\n");s((function(e){return[].concat(Object(o.a)(e),Object(o.a)(l))})),a++,console.log(a,c),a>c?($(!1),Qe(0)):(Ze(a),n.readAsText(e.slice(a*t,Math.min(a*t+t,e.size))))})),n.readAsText(e.slice(0,Math.min(e.size,t)))},ut=function(){ee(Object(o.a)(ke)),ne(Se),le(Object(o.a)(Me)),be(Object(o.a)(We)),Fe(!1)};return Object(a.jsxs)("div",{className:"app",children:[Object(a.jsxs)("div",{style:{position:"absolute",left:"0px",top:"0px",color:"lightgray"},children:["v","0.5.3"]}),Object(a.jsx)(u.a,{color:"success",className:"alert",isOpen:U,children:"Log line was copied to clipboard."}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",Object(l.a)(Object(l.a)({},ot()),{},{className:"dropzone",children:[Object(a.jsx)("input",Object(l.a)({type:"file",ref:e,disabled:V,accept:".json"},dt())),jt?"Drop file here":"Click or drag and drop files here"]})),Object(a.jsx)("div",{children:it})]}),V?Object(a.jsxs)("div",{style:{width:"70%"},children:[Object(a.jsx)(h.a,{color:"info"}),Object(a.jsxs)(O.a,{value:Ye/tt*100,max:100,style:{width:"100%"},children:[Math.round(Ye/tt*100),"%"]})]}):Object(a.jsxs)("div",{style:{width:"100%"},children:[Object(a.jsx)(k,{LogLines:Je,Workers:re}),Object(a.jsxs)("div",{className:"accordion",id:"settingsAccordion",children:[Object(a.jsx)(p.a,{onClick:function(){return ut()},disabled:!ze,children:"Apply settings"}),Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("div",{className:"card-header",id:"exceptionsHeading",children:Object(a.jsx)("h2",{className:"mb-0",children:Object(a.jsx)("button",{className:"btn btn-link collapsed",type:"button","data-toggle":"collapse","data-target":"#exceptionsCollapse","aria-expanded":"true","aria-controls":"exceptionsCollapse",children:"Exceptions"})})}),Object(a.jsx)("div",{id:"exceptionsCollapse",className:"collapse","aria-labelledby":"exceptionsHeading","data-parent":"#settingsAccordion",children:Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)(m.a,{children:"Regex: "}),Object(a.jsx)(x.a,{onChange:function(e){return Te(e.target.value)},value:Se})," "]}),Object(a.jsxs)(g.a,{striped:!0,bordered:!0,children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{width:"10%",children:"Count"}),Object(a.jsx)("td",{width:"auto",children:"Exception"}),Object(a.jsx)("td",{width:"5%",children:Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(a.jsx)(p.a,{outline:!0,size:"sm",color:"secondary",style:{marginRight:5},onClick:function(){return we([])},children:"\u2610"}),Object(a.jsx)(p.a,{outline:!0,size:"sm",color:"success",onClick:function(){return we(Array.from(N.keys()))},children:"\u2611"})]})})]})}),Object(a.jsx)("tbody",{children:Array.from(N.keys()).sort().map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:N.get(e)}),Object(a.jsx)("td",{children:e}),Object(a.jsx)("td",{children:Object(a.jsx)(x.a,{type:"checkbox",className:"tableCheckbox",checked:ke.includes(e),onChange:function(t){t.target.checked?we([].concat(Object(o.a)(ke),[e])):we(Object(o.a)(ke.filter((function(t){return t!==e}))))}})})]},e)}))})]})]})})]}),Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("div",{className:"card-header",id:"workersHeading",children:Object(a.jsx)("h2",{className:"mb-0",children:Object(a.jsx)("button",{className:"btn btn-link collapsed",type:"button","data-toggle":"collapse","data-target":"#workersCollapse","aria-expanded":"true","aria-controls":"workersCollapse",children:"Workers"})})}),Object(a.jsx)("div",{id:"workersCollapse",className:"collapse","aria-labelledby":"workersHeading","data-parent":"#settingsAccordion",children:Object(a.jsx)("div",{className:"card-body",children:Object(a.jsxs)(g.a,{striped:!0,bordered:!0,children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{width:"10%",children:"Count"}),Object(a.jsx)("td",{width:"auto",children:"Worker"}),Object(a.jsx)("td",{width:"5%",children:Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(a.jsx)(p.a,{outline:!0,size:"sm",color:"secondary",style:{marginRight:5},onClick:function(){return Ee([])},children:"\u2610"}),Object(a.jsx)(p.a,{outline:!0,size:"sm",color:"success",onClick:function(){return Ee(Array.from(I.keys()))},children:"\u2611"})]})})]})}),Object(a.jsx)("tbody",{children:Array.from(I.keys()).sort().map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:I.get(e)}),Object(a.jsx)("td",{children:e}),Object(a.jsx)("td",{children:Object(a.jsx)("div",{children:Object(a.jsx)(x.a,{type:"checkbox",className:"tableCheckbox",checked:Me.includes(e),onChange:function(t){t.target.checked?Ee([].concat(Object(o.a)(Me),[e])):Ee(Object(o.a)(Me.filter((function(t){return t!==e}))))}})})})]},e)}))})]})})}),Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("div",{className:"card-header",id:"exceptionsHeading",children:Object(a.jsx)("h2",{className:"mb-0",children:Object(a.jsx)("button",{className:"btn btn-link collapsed",type:"button","data-toggle":"collapse","data-target":"#applicationSessionIdsCollapse","aria-expanded":"true","aria-controls":"applicationSessionIdsCollapse",children:"Application Session Ids"})})}),Object(a.jsx)("div",{id:"applicationSessionIdsCollapse",className:"collapse","aria-labelledby":"applicationSessionIdsHeading","data-parent":"#settingsAccordion",children:Object(a.jsx)("div",{className:"card-body",children:Object(a.jsxs)(g.a,{striped:!0,bordered:!0,children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{width:"10%",children:"Count"}),Object(a.jsx)("td",{width:"auto",children:"Application Session Id"}),Object(a.jsx)("td",{width:"auto",children:"Start time"}),Object(a.jsx)("td",{width:"5%",children:Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(a.jsx)(p.a,{outline:!0,size:"sm",color:"secondary",style:{marginRight:5},onClick:function(){return Pe([])},children:"\u2610"}),Object(a.jsx)(p.a,{outline:!0,size:"sm",color:"success",onClick:function(){return Pe(Array.from(H.keys()))},children:"\u2611"})]})})]})}),Object(a.jsx)("tbody",{children:Array.from(H.keys()).sort((function(e,t){return B.get(e)>B.get(t)?-1:1})).map((function(e){var t;return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:H.get(e)}),Object(a.jsx)("td",{children:e}),Object(a.jsx)("td",{children:null===(t=B.get(e))||void 0===t?void 0:t.toString()}),Object(a.jsx)("td",{children:Object(a.jsx)(x.a,{type:"checkbox",className:"tableCheckbox",checked:We.includes(e),onChange:function(t){t.target.checked?Pe([].concat(Object(o.a)(We),[e])):Pe(Object(o.a)(We.filter((function(t){return t!==e}))))}})})]},e)}))})]})})})]})]})]}),"Events:",Object(a.jsx)("br",{}),"Start Time: ",Object(a.jsx)(C.a,{selected:null!==Oe&&void 0!==Oe?Oe:f.length>0?f[0].Timestamp:new Date,onChange:function(e){e instanceof Date&&pe(e)},showTimeSelect:!0,timeFormat:"HH:mm",dateFormat:"dd.MM.yyyy HH:mm"}),Object(a.jsx)(p.a,{onClick:function(){return pe(f[0].Timestamp)},children:"Clear"}),Object(a.jsx)("br",{}),"End Time: ",Object(a.jsx)(C.a,{selected:null!==ge&&void 0!==ge?ge:f.length>0?f[f.length-1].Timestamp:new Date,onChange:function(e){e instanceof Date&&fe(e)},showTimeSelect:!0,timeFormat:"HH:mm",dateFormat:"dd.MM.yyyy HH:mm"}),Object(a.jsx)(p.a,{onClick:function(){return fe(f[f.length-1].Timestamp)},children:"Clear"}),Object(a.jsx)("br",{}),"Filtered ",Je.length," out of ",f.length,Object(a.jsx)("br",{}),"Showing ",1e3*qe," ..."," ",Math.min(Je.length-1e3*qe,1e3)+1e3*qe,Object(a.jsx)(S.a,{pageCount:Je.length/1e3,onPageChange:function(e){Qe(e.selected)},forcePage:qe,disableInitialCallback:!0,pageRangeDisplayed:3,marginPagesDisplayed:1,breakClassName:"page-item",breakLinkClassName:"page-link",containerClassName:"pagination",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",activeClassName:"active"}),Object(a.jsxs)(g.a,{striped:!0,id:"mainTable",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{width:"5%",children:"#"}),Object(a.jsx)("td",{width:"10%",children:"Time"}),Object(a.jsx)("td",{width:"10%",children:"Level"}),Object(a.jsx)("td",{width:"10%",children:"Work Item"}),Object(a.jsx)("td",{width:"20%",children:"Message"}),Object(a.jsx)("td",{width:"auto",children:"Exception"})]})}),Object(a.jsx)("tbody",{children:Je.filter((function(e,t){return t>=1e3*qe&&t<1e3*(qe+1)})).map((function(e){var t,c,n,i;return Object(a.jsxs)("tr",{className:"logRow "+e.Level,children:[Object(a.jsxs)("td",{children:[Object(a.jsx)("p",{style:{wordWrap:"break-word"},children:e.Id}),Object(a.jsx)("div",{children:Object(a.jsx)(p.a,{onClick:function(){navigator.clipboard.writeText(e.RawLine),X(!0),setTimeout((function(){X(!1)}),1500)},children:"Copy"})})]}),Object(a.jsx)("td",{children:Object(a.jsx)("p",{style:{wordWrap:"break-word"},children:e.Timestamp.toLocaleString()})}),Object(a.jsx)("td",{children:Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{style:{wordWrap:"break-word"},children:e.Level}),Object(a.jsx)("p",{style:{wordWrap:"break-word"},children:null===(t=e.Properties)||void 0===t?void 0:t.MetricName}),Object(a.jsx)("p",{style:{wordWrap:"break-word"},children:null===(c=e.Properties)||void 0===c?void 0:c.ConcurrentTaskIndex})]})}),Object(a.jsx)("td",{children:Object(a.jsx)("p",{style:{wordWrap:"break-word"},children:null!==(n=null===(i=e.Properties)||void 0===i?void 0:i.WorkItemKey)&&void 0!==n?n:"*"})}),Object(a.jsx)("td",{children:Object(a.jsx)("p",{style:{wordWrap:"break-word"},children:e.Message})}),Object(a.jsx)("td",{children:Object(a.jsx)("p",{style:{wordWrap:"break-word",whiteSpace:"break-spaces"},children:e.Exception})})]},e.Id)}))})]}),Object(a.jsx)(S.a,{pageCount:Je.length/1e3,onPageChange:function(e){var t;Qe(e.selected),null===(t=document.getElementById("mainTable"))||void 0===t||t.scrollIntoView()},forcePage:qe,disableInitialCallback:!0,pageRangeDisplayed:3,marginPagesDisplayed:1,breakClassName:"page-item",breakLinkClassName:"page-link",containerClassName:"pagination",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",activeClassName:"active"})]})]})}var M=c(91),E=Object(M.b)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}}}),I=E.actions,D=(I.increment,I.decrement,I.incrementByAmount,E.reducer),W=Object(M.a)({reducer:{counter:D}}),P=c(206);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(P.a,{store:W,children:Object(a.jsx)(A,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[427,1,2]]]);
//# sourceMappingURL=main.d40fe361.chunk.js.map