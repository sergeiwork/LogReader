(this["webpackJsonplog-reader"]=this["webpackJsonplog-reader"]||[]).push([[0],{219:function(e,t,a){},220:function(e,t,a){},426:function(e,t,a){"use strict";a.r(t);a(214);var c=a(0),n=a.n(c),i=a(24),s=a.n(i),r=(a(219),a(93)),l=a(21),o=a(18),d=a(10),j=a(66),b=a(431),h=a(435),u=a(432),p=a(433),O=a(434),m=(a(220),a(36)),x=a(3),g=function e(){Object(j.a)(this,e),this.Time="00",this.Timestamp=0};function f(e,t,a){var c=new g;return c.Timestamp=e,c.Time=t,a.forEach((function(e){c[e]=0})),c}var v=function(e){var t=Object(c.useState)([]),a=Object(d.a)(t,2),n=a[0],i=a[1];return Object(c.useEffect)((function(){var t,a=new Array,c=new g,n=Object(o.a)(e.LogLines);try{for(n.s();!(t=n.n()).done;){var s,r,l=t.value,d=(null!==(s=null===(r=l.Properties)||void 0===r?void 0:r.WorkerName)&&void 0!==s?s:"General")+" "+l.Level,j=l.Timestamp.getHours()+":"+(10*Math.floor(l.Timestamp.getMinutes()/10)+"").padStart(2,"0");j!==c.Time&&(""!==c.Time&&a.push(c),c=f(l.Timestamp.getTime(),j,e.Workers));var b=c[d];c[d]=(isNaN(b)?0:b)+1}}catch(h){n.e(h)}finally{n.f()}a.includes(c)||a.push(c),i(a)}),[e.LogLines,e.Workers]),Object(x.jsx)(m.e,{width:"100%",height:400,children:Object(x.jsxs)(m.d,{data:n,height:300,width:1e3,style:{zIndex:100},children:[Object(x.jsx)(m.a,{strokeDasharray:"3 3"}),Object(x.jsx)(m.g,{dataKey:"Time"}),Object(x.jsx)(m.h,{}),Object(x.jsx)(m.f,{}),Object(x.jsx)(m.b,{}),e.Workers.map((function(e){return Object(x.jsx)(m.c,{type:"monotone",dataKey:e,stroke:"#"+Math.floor(16777215*Math.random()).toString(16)},e)}))]})})},y=a(133),k=a.n(y),w=(a(366),a(132)),C=a.n(w),N=a(209),S=function(e,t){return Object.keys(t).forEach((function(a){e=e.replace(new RegExp("\\{"+a+"\\}","gi"),t[a])})),e};function T(){var e=Object(c.createRef)(),t=Object(c.useState)([]),a=Object(d.a)(t,2),n=a[0],i=a[1],s=Object(c.useState)([]),j=Object(d.a)(s,2),m=j[0],g=j[1],f=Object(c.useState)(new Map),y=Object(d.a)(f,2),w=y[0],T=y[1],A=Object(c.useState)(new Map),M=Object(d.a)(A,2),L=M[0],E=M[1],I=Object(c.useState)(new Map),D=Object(d.a)(I,2),W=D[0],P=D[1],H=Object(c.useState)(new Map),z=Object(d.a)(H,2),R=z[0],F=z[1],B=Object(c.useState)(!1),G=Object(d.a)(B,2),J=G[0],K=G[1],V=Object(c.useState)([]),$=Object(d.a)(V,2),q=$[0],Q=$[1],U=Object(c.useState)([]),X=Object(d.a)(U,2),Y=X[0],Z=X[1],_=Object(c.useState)([]),ee=Object(d.a)(_,2),te=ee[0],ae=ee[1],ce=Object(c.useState)(new Date(0)),ne=Object(d.a)(ce,2),ie=ne[0],se=ne[1],re=Object(c.useState)(new Date(0)),le=Object(d.a)(re,2),oe=le[0],de=le[1],je=Object(c.useState)([]),be=Object(d.a)(je,2),he=be[0],ue=be[1],pe=Object(c.useState)([]),Oe=Object(d.a)(pe,2),me=Oe[0],xe=Oe[1],ge=Object(c.useState)([]),fe=Object(d.a)(ge,2),ve=fe[0],ye=fe[1],ke=Object(c.useState)(!1),we=Object(d.a)(ke,2),Ce=we[0],Ne=we[1],Se=Object(c.useState)([]),Te=Object(d.a)(Se,2),Ae=Te[0],Me=Te[1],Le=Object(c.useState)(0),Ee=Object(d.a)(Le,2),Ie=Ee[0],De=Ee[1],We=Object(c.useState)(0),Pe=Object(d.a)(We,2),He=Pe[0],ze=Pe[1],Re=Object(c.useState)(0),Fe=Object(d.a)(Re,2),Be=Fe[0],Ge=Fe[1],Je=Object(c.useState)(""),Ke=Object(d.a)(Je,2),Ve=Ke[0],$e=Ke[1],qe=Object(c.useCallback)((function(e){1===e.length&&Ze(e[0])}),[]),Qe=Object(N.a)({onDrop:qe}),Ue=Qe.getRootProps,Xe=Qe.getInputProps,Ye=Qe.isDragActive;Object(c.useEffect)((function(){return Ne(!0)}),[he,me,ve]),Object(c.useEffect)((function(){if(!J){var e,t=n.filter((function(e){return e.trim().length>0})).map((function(e,t){try{var a=JSON.parse(e);return{Timestamp:new Date(a.Timestamp),Level:a.Level,Message:S(a.MessageTemplate,a.Properties),Exception:a.Exception,Id:t,Properties:a.Properties}}catch(c){return null}})).filter((function(e){return null!==e})).map((function(e){return e})),a=new Map,c=new Map,i=new Map,s=Object(o.a)(t);try{for(s.s();!(e=s.n()).done;){var r,l,d,j,b=e.value;if(b.Exception){var h=b.Exception.split(" ")[0];a.has(h)?a.set(h,a.get(h)+1):a.set(h,1)}var u=(null!==(r=null===(l=b.Properties)||void 0===l?void 0:l.WorkerName)&&void 0!==r?r:"General")+" "+b.Level;c.has(u)?c.set(u,c.get(u)+1):c.set(u,1);var p=null!==(d=null===(j=b.Properties)||void 0===j?void 0:j.ApplicationSessionId)&&void 0!==d?d:"";i.has(p)?i.set(p,i.get(p)+1):i.set(p,1)}}catch(m){s.e(m)}finally{s.f()}T(a),ue(Array.from(a.keys())),E(c),xe(Array.from(c.keys())),P(i),ye(Array.from(i.keys()));var O=Array.from(i.keys()).reduce((function(e,a){return e.set(a,t.filter((function(e){var t;return(null===(t=e.Properties)||void 0===t?void 0:t.ApplicationSessionId)===a})).reduce((function(e,t){return t.Timestamp<e?t.Timestamp:e}),new Date(9999,12,31))),e}),new Map);F(O),t.length>0&&(se(t[0].Timestamp),de(t[t.length-1].Timestamp)),_e(),g(t)}}),[n,J]),Object(c.useEffect)((function(){Me(m.filter((function(e){var t,a,c,n;return(!e.Exception||q.includes(e.Exception.split(" ")[0]))&&Y.includes((null!==(t=null===(a=e.Properties)||void 0===a?void 0:a.WorkerName)&&void 0!==t?t:"General")+" "+e.Level)&&te.includes(null!==(c=null===(n=e.Properties)||void 0===n?void 0:n.ApplicationSessionId)&&void 0!==c?c:"")&&ie!==new Date(0)&&e.Timestamp>=ie&&oe!==new Date(0)&&e.Timestamp<=oe})))}),[m,q,Y,te,ie,oe]);var Ze=function(e){i([]);var t=104857600,a=e.size/t+1,c=0;$e(e.name),ze(0),Ge(a),K(!0);var n=new FileReader;n.addEventListener("error",(function(e){console.error("Can not load file",e),K(!1),i([]),De(0),$e(""),_e()})),n.addEventListener("load",(function(s){var r,o=(null===(r=s.target)||void 0===r?void 0:r.result).split("\n");i((function(e){return[].concat(Object(l.a)(e),Object(l.a)(o))})),c++,console.log(c,a),c>a?(K(!1),De(0)):(ze(c),n.readAsText(e.slice(c*t,Math.min(c*t+t,e.size))))})),n.readAsText(e.slice(0,Math.min(e.size,t)))},_e=function(){Q(Object(l.a)(he)),Z(Object(l.a)(me)),ae(Object(l.a)(ve)),Ne(!1)};return Object(x.jsxs)("div",{className:"app",children:[Object(x.jsxs)("div",{style:{position:"absolute",left:"0px",top:"0px",color:"lightgray"},children:["v","0.5.1"]}),Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",Object(r.a)(Object(r.a)({},Ue()),{},{className:"dropzone",children:[Object(x.jsx)("input",Object(r.a)({type:"file",ref:e,disabled:J,accept:".json"},Xe())),Ye?"Drop file here":"Click or drag and drop files here"]})),Object(x.jsx)("div",{children:Ve})]}),J?Object(x.jsxs)("div",{style:{width:"70%"},children:[Object(x.jsx)(b.a,{color:"info"}),Object(x.jsxs)(h.a,{value:He/Be*100,max:100,style:{width:"100%"},children:[Math.round(He/Be*100),"%"]})]}):Object(x.jsxs)("div",{style:{width:"100%"},children:[Object(x.jsx)(v,{LogLines:Ae,Workers:Y}),Object(x.jsxs)("div",{className:"accordion",id:"settingsAccordion",children:[Object(x.jsx)(u.a,{onClick:function(){return _e()},disabled:!Ce,children:"Apply settings"}),Object(x.jsxs)("div",{className:"card",children:[Object(x.jsx)("div",{className:"card-header",id:"exceptionsHeading",children:Object(x.jsx)("h2",{className:"mb-0",children:Object(x.jsx)("button",{className:"btn btn-link collapsed",type:"button","data-toggle":"collapse","data-target":"#exceptionsCollapse","aria-expanded":"true","aria-controls":"exceptionsCollapse",children:"Exceptions"})})}),Object(x.jsx)("div",{id:"exceptionsCollapse",className:"collapse","aria-labelledby":"exceptionsHeading","data-parent":"#settingsAccordion",children:Object(x.jsx)("div",{className:"card-body",children:Object(x.jsxs)(p.a,{striped:!0,bordered:!0,children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{width:"10%",children:"Count"}),Object(x.jsx)("td",{width:"auto",children:"Exception"}),Object(x.jsx)("td",{width:"5%",children:Object(x.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(x.jsx)(u.a,{outline:!0,size:"sm",color:"secondary",style:{marginRight:5},onClick:function(){return ue([])},children:"\u2610"}),Object(x.jsx)(u.a,{outline:!0,size:"sm",color:"success",onClick:function(){return ue(Array.from(w.keys()))},children:"\u2611"})]})})]})}),Object(x.jsx)("tbody",{children:Array.from(w.keys()).sort().map((function(e){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:w.get(e)}),Object(x.jsx)("td",{children:e}),Object(x.jsx)("td",{children:Object(x.jsx)(O.a,{type:"checkbox",className:"tableCheckbox",checked:he.includes(e),onChange:function(t){t.target.checked?ue([].concat(Object(l.a)(he),[e])):ue(Object(l.a)(he.filter((function(t){return t!==e}))))}})})]},e)}))})]})})})]}),Object(x.jsxs)("div",{className:"card",children:[Object(x.jsx)("div",{className:"card-header",id:"workersHeading",children:Object(x.jsx)("h2",{className:"mb-0",children:Object(x.jsx)("button",{className:"btn btn-link collapsed",type:"button","data-toggle":"collapse","data-target":"#workersCollapse","aria-expanded":"true","aria-controls":"workersCollapse",children:"Workers"})})}),Object(x.jsx)("div",{id:"workersCollapse",className:"collapse","aria-labelledby":"workersHeading","data-parent":"#settingsAccordion",children:Object(x.jsx)("div",{className:"card-body",children:Object(x.jsxs)(p.a,{striped:!0,bordered:!0,children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{width:"10%",children:"Count"}),Object(x.jsx)("td",{width:"auto",children:"Worker"}),Object(x.jsx)("td",{width:"5%",children:Object(x.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(x.jsx)(u.a,{outline:!0,size:"sm",color:"secondary",style:{marginRight:5},onClick:function(){return xe([])},children:"\u2610"}),Object(x.jsx)(u.a,{outline:!0,size:"sm",color:"success",onClick:function(){return xe(Array.from(L.keys()))},children:"\u2611"})]})})]})}),Object(x.jsx)("tbody",{children:Array.from(L.keys()).sort().map((function(e){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:L.get(e)}),Object(x.jsx)("td",{children:e}),Object(x.jsx)("td",{children:Object(x.jsx)("div",{children:Object(x.jsx)(O.a,{type:"checkbox",className:"tableCheckbox",checked:me.includes(e),onChange:function(t){t.target.checked?xe([].concat(Object(l.a)(me),[e])):xe(Object(l.a)(me.filter((function(t){return t!==e}))))}})})})]},e)}))})]})})}),Object(x.jsxs)("div",{className:"card",children:[Object(x.jsx)("div",{className:"card-header",id:"exceptionsHeading",children:Object(x.jsx)("h2",{className:"mb-0",children:Object(x.jsx)("button",{className:"btn btn-link collapsed",type:"button","data-toggle":"collapse","data-target":"#applicationSessionIdsCollapse","aria-expanded":"true","aria-controls":"applicationSessionIdsCollapse",children:"Application Session Ids"})})}),Object(x.jsx)("div",{id:"applicationSessionIdsCollapse",className:"collapse","aria-labelledby":"applicationSessionIdsHeading","data-parent":"#settingsAccordion",children:Object(x.jsx)("div",{className:"card-body",children:Object(x.jsxs)(p.a,{striped:!0,bordered:!0,children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{width:"10%",children:"Count"}),Object(x.jsx)("td",{width:"auto",children:"Application Session Id"}),Object(x.jsx)("td",{width:"auto",children:"Start time"}),Object(x.jsx)("td",{width:"5%",children:Object(x.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(x.jsx)(u.a,{outline:!0,size:"sm",color:"secondary",style:{marginRight:5},onClick:function(){return ye([])},children:"\u2610"}),Object(x.jsx)(u.a,{outline:!0,size:"sm",color:"success",onClick:function(){return ye(Array.from(W.keys()))},children:"\u2611"})]})})]})}),Object(x.jsx)("tbody",{children:Array.from(W.keys()).sort((function(e,t){return R.get(e)>R.get(t)?-1:1})).map((function(e){var t;return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:W.get(e)}),Object(x.jsx)("td",{children:e}),Object(x.jsx)("td",{children:null===(t=R.get(e))||void 0===t?void 0:t.toString()}),Object(x.jsx)("td",{children:Object(x.jsx)(O.a,{type:"checkbox",className:"tableCheckbox",checked:ve.includes(e),onChange:function(t){t.target.checked?ye([].concat(Object(l.a)(ve),[e])):ye(Object(l.a)(ve.filter((function(t){return t!==e}))))}})})]},e)}))})]})})})]})]})]}),"Events:",Object(x.jsx)("br",{}),"Start Time: ",Object(x.jsx)(k.a,{selected:null!==ie&&void 0!==ie?ie:m.length>0?m[0].Timestamp:new Date,onChange:function(e){e instanceof Date&&se(e)},showTimeSelect:!0,timeFormat:"HH:mm",dateFormat:"dd.MM.yyyy HH:mm"}),Object(x.jsx)(u.a,{onClick:function(){return se(m[0].Timestamp)},children:"Clear"}),Object(x.jsx)("br",{}),"End Time: ",Object(x.jsx)(k.a,{selected:null!==oe&&void 0!==oe?oe:m.length>0?m[m.length-1].Timestamp:new Date,onChange:function(e){e instanceof Date&&de(e)},showTimeSelect:!0,timeFormat:"HH:mm",dateFormat:"dd.MM.yyyy HH:mm"}),Object(x.jsx)(u.a,{onClick:function(){return de(m[m.length-1].Timestamp)},children:"Clear"}),Object(x.jsx)("br",{}),"Filtered ",Ae.length," out of ",m.length,Object(x.jsx)("br",{}),"Showing ",1e3*Ie," ..."," ",Math.min(Ae.length-1e3*Ie,1e3)+1e3*Ie,Object(x.jsx)(C.a,{pageCount:Ae.length/1e3,onPageChange:function(e){De(e.selected)},forcePage:Ie,disableInitialCallback:!0,pageRangeDisplayed:3,marginPagesDisplayed:1,breakClassName:"page-item",breakLinkClassName:"page-link",containerClassName:"pagination",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",activeClassName:"active"}),Object(x.jsxs)(p.a,{striped:!0,id:"mainTable",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{width:"5%",children:"#"}),Object(x.jsx)("td",{width:"10%",children:"Time"}),Object(x.jsx)("td",{width:"10%",children:"Level"}),Object(x.jsx)("td",{width:"10%",children:"Work Item"}),Object(x.jsx)("td",{width:"20%",children:"Message"}),Object(x.jsx)("td",{width:"auto",children:"Exception"})]})}),Object(x.jsx)("tbody",{children:Ae.filter((function(e,t){return t>=1e3*Ie&&t<1e3*(Ie+1)})).map((function(e){var t,a,c,n;return Object(x.jsxs)("tr",{className:"logRow "+e.Level,children:[Object(x.jsx)("td",{children:Object(x.jsx)("p",{style:{wordWrap:"break-word"},children:e.Id})}),Object(x.jsx)("td",{children:Object(x.jsx)("p",{style:{wordWrap:"break-word"},children:e.Timestamp.toLocaleString()})}),Object(x.jsx)("td",{children:Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{style:{wordWrap:"break-word"},children:e.Level}),Object(x.jsx)("p",{style:{wordWrap:"break-word"},children:null===(t=e.Properties)||void 0===t?void 0:t.MetricName}),Object(x.jsx)("p",{style:{wordWrap:"break-word"},children:null===(a=e.Properties)||void 0===a?void 0:a.ConcurrentTaskIndex})]})}),Object(x.jsx)("td",{children:Object(x.jsx)("p",{style:{wordWrap:"break-word"},children:null!==(c=null===(n=e.Properties)||void 0===n?void 0:n.WorkItemKey)&&void 0!==c?c:"*"})}),Object(x.jsx)("td",{children:Object(x.jsx)("p",{style:{wordWrap:"break-word"},children:e.Message})}),Object(x.jsx)("td",{children:Object(x.jsx)("p",{style:{wordWrap:"break-word",whiteSpace:"break-spaces"},children:e.Exception})})]},e.Id)}))})]}),Object(x.jsx)(C.a,{pageCount:Ae.length/1e3,onPageChange:function(e){var t;De(e.selected),null===(t=document.getElementById("mainTable"))||void 0===t||t.scrollIntoView()},forcePage:Ie,disableInitialCallback:!0,pageRangeDisplayed:3,marginPagesDisplayed:1,breakClassName:"page-item",breakLinkClassName:"page-link",containerClassName:"pagination",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",activeClassName:"active"})]})]})}var A=a(88),M=Object(A.b)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}}}),L=M.actions,E=(L.increment,L.decrement,L.incrementByAmount,M.reducer),I=Object(A.a)({reducer:{counter:E}}),D=a(208);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(D.a,{store:I,children:Object(x.jsx)(T,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[426,1,2]]]);
//# sourceMappingURL=main.a14a978c.chunk.js.map