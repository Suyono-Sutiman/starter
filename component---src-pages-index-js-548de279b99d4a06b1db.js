(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{RXBc:function(e,a,t){"use strict";t.r(a);var M=t("q1tI"),I=t.n(M),g=t("Wbzz"),l=t("wx14"),n=t("zLVn"),A=t("TSYQ"),c=t.n(A),i=t("vUet"),N=I.a.forwardRef((function(e,a){var t,M=e.as,g=void 0===M?"div":M,A=e.className,N=e.fluid,T=e.bsPrefix,r=Object(n.a)(e,["as","className","fluid","bsPrefix"]),s=((t={})[T=Object(i.a)(T,"jumbotron")]=!0,t[T+"-fluid"]=N,t);return I.a.createElement(g,Object(l.a)({ref:a},r,{className:c()(A,s)}))}));N.defaultProps={fluid:!1},N.displayName="Jumbotron";var T=N,r=["xl","lg","md","sm","xs"],s=I.a.forwardRef((function(e,a){var t=e.bsPrefix,M=e.className,g=e.noGutters,A=e.as,N=void 0===A?"div":A,T=Object(n.a)(e,["bsPrefix","className","noGutters","as"]),s=Object(i.a)(t,"row"),C=s+"-cols",D=[];return r.forEach((function(e){var a,t=T[e];delete T[e];var M="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"==typeof t?t.cols:t)&&D.push(""+C+M+"-"+a)})),I.a.createElement(N,Object(l.a)({ref:a},T,{className:c.a.apply(void 0,[M,s,g&&"no-gutters"].concat(D))}))}));s.displayName="Row",s.defaultProps={noGutters:!1};var C=s,D=["xl","lg","md","sm","xs"],o=I.a.forwardRef((function(e,a){var t=e.bsPrefix,M=e.className,g=e.as,A=void 0===g?"div":g,N=Object(n.a)(e,["bsPrefix","className","as"]),T=Object(i.a)(t,"col"),r=[],s=[];return D.forEach((function(e){var a,t,M,I=N[e];if(delete N[e],"object"==typeof I&&null!=I){var g=I.span;a=void 0===g||g,t=I.offset,M=I.order}else a=I;var l="xs"!==e?"-"+e:"";a&&r.push(!0===a?""+T+l:""+T+l+"-"+a),null!=M&&s.push("order"+l+"-"+M),null!=t&&s.push("offset"+l+"-"+t)})),r.length||r.push(T),I.a.createElement(A,Object(l.a)({},N,{ref:a,className:c.a.apply(void 0,[M].concat(r,s))}))}));o.displayName="Col";var y=o,m=t("cWnB"),z=t("17x9"),d=t.n(z),u=(d.a.string,d.a.bool,d.a.bool,d.a.bool,d.a.bool,I.a.forwardRef((function(e,a){var t=e.bsPrefix,M=e.className,g=e.fluid,A=e.rounded,N=e.roundedCircle,T=e.thumbnail,r=Object(n.a)(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);t=Object(i.a)(t,"img");var s=c()(g&&t+"-fluid",A&&"rounded",N&&"rounded-circle",T&&t+"-thumbnail");return I.a.createElement("img",Object(l.a)({ref:a},r,{className:c()(M,s)}))})));u.displayName="Image",u.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1};var E=u,x=t("vrFN"),j=t("qgGM"),L=t.n(j),w=t("dI71"),O=t("6ctO"),f=t("+YzT"),b=t("a2DZ"),S=t.n(b),Q=function(e){function a(){for(var a,t=arguments.length,M=new Array(t),I=0;I<t;I++)M[I]=arguments[I];return(a=e.call.apply(e,[this].concat(M))||this).state={className:""},a.handleScroll=function(){window.pageYOffset>0?a.state.className||a.setState({className:"biru"}):a.state.className&&a.setState({className:""})},a}Object(w.a)(a,e);var t=a.prototype;return t.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},t.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},t.render=function(){return I.a.createElement(O.a,{collapseOnSelect:!0,expand:"lg",fixed:"top",className:this.state.className},I.a.createElement(g.Link,{to:"/"},I.a.createElement(O.a.Brand,null,I.a.createElement("img",{alt:"",src:S.a,width:"30",height:"30",className:"d-inline-block align-top"})," ","Realine")),I.a.createElement(O.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),I.a.createElement(O.a.Collapse,{id:"responsive-navbar-nav"},I.a.createElement(f.a,{className:"mr-auto"},I.a.createElement(f.a.Link,null,"Development"),I.a.createElement(f.a.Link,null,"Marketing"),I.a.createElement(f.a.Link,null,"SEO"),I.a.createElement(f.a.Link,null,"Portfolio")),I.a.createElement(g.Link,{to:"/page-2"},I.a.createElement(m.a,{variant:"primary"},"Hubungi Kami"))))},a}(I.a.Component),p=(t("q4sD"),{borderRadius:0,marginBottom:0}),v={alignSelf:"center",width:"max-content"};a.default=function(){return I.a.createElement(I.a.Fragment,null,I.a.createElement(Q,null),I.a.createElement(x.a,{title:"Home"}),I.a.createElement(T,{className:"bgsatu",style:p},I.a.createElement(C,null,I.a.createElement(y,{className:"htext",xs:12,md:6},I.a.createElement("h3",null,"Realine"),I.a.createElement("h1",null,"Realisasi Mimpi Bisnis Online"),I.a.createElement("p",null,"Membantu anda sukses di dunia bisnis online"),I.a.createElement(g.Link,{to:"/page-2",style:v},I.a.createElement(m.a,{variant:"primary",size:"lg"},"Pilih Paket"))),I.a.createElement(y,null,I.a.createElement(E,{src:L.a,fluid:!0,style:{maxWidth:"60%"}})))),I.a.createElement(T,{className:"bgsatu",style:p},I.a.createElement(C,null,I.a.createElement(y,{className:"htext",xs:12,md:6},I.a.createElement("h3",null,"Realine"),I.a.createElement("h1",null,"Realisasi Mimpi Bisnis Online"),I.a.createElement("p",null,"Membantu anda sukses di dunia bisnis online"),I.a.createElement(g.Link,{to:"/page-2"},I.a.createElement(m.a,{variant:"primary",size:"lg",style:v},"Pilih Paket"))),I.a.createElement(y,null,I.a.createElement(E,{src:L.a,fluid:!0,style:{maxWidth:"60%"}})))))}},a2DZ:function(e,a){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iNDM5LjAwMDAwMHB0IiBoZWlnaHQ9IjUxMi4wMDAwMDBwdCIgdmlld0JveD0iMCAwIDQzOS4wMDAwMDAgNTEyLjAwMDAwMCIKIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgo8bWV0YWRhdGE+CkNyZWF0ZWQgYnkgcG90cmFjZSAxLjE2LCB3cml0dGVuIGJ5IFBldGVyIFNlbGluZ2VyIDIwMDEtMjAxOQo8L21ldGFkYXRhPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCw1MTIuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIgpmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiPgo8cGF0aCBkPSJNMjAxNSA1MDk0IGMtMTg5IC0yMCAtMzg4IC02NCAtNTYxIC0xMjUgLTE3MCAtNTkgLTQxOSAtMTk1IC01NzQKLTMxMiAtNzkgLTYwIC0zMDIgLTI3OSAtMzczIC0zNjcgLTM5MyAtNDg2IC01NjAgLTExMzEgLTQ1MSAtMTc0MCA3MSAtMzk2CjI0MyAtNzUzIDUwOCAtMTA2MSA5MyAtMTA2IDI1MiAtMjUyIDM1NCAtMzI0IDQ0IC0zMSA3NSAtNjEgODMgLTgwIDcgLTE3IDIzNAotMjUyIDUwOCAtNTI4IDUzOCAtNTM5IDUyMiAtNTI2IDY0OCAtNTQzIDU4IC03IDE1MSAxMCAyMDggMzggNTIgMjYgOTUyIDkyMgoxMDA1IDEwMDEgMjYgMzggNjYgNzggMTIyIDExOSA0NDUgMzI4IDc1MyA4MjYgODUyIDEzNzggOTYgNTM0IC0yMiAxMTA4IC0zMjEKMTU2MCAtOTkgMTQ5IC0xNzMgMjM3IC0zMTkgMzgwIC0xNDAgMTM2IC0yMDYgMTg5IC0zNDggMjc3IC0zNTEgMjE4IC02OTcgMzIwCi0xMTExIDMyOCAtMTA0IDIgLTIwOCAxIC0yMzAgLTF6IG00MzAgLTYzOSBjMzcyIC01OSA3NjMgLTI5MCA5NzkgLTU4MCAyMzQKLTMxNCAzMzUgLTYyNiAzMjMgLTEwMDAgLTcgLTIzMCAtNTMgLTQyMSAtMTQ2IC02MTQgLTc0IC0xNTIgLTE4MyAtMzE3IC0xODkKLTI4NCAtNDEgMjE0IC03MSAzNjUgLTc1IDM2OSAtNyA3IC01MDcgLTg5IC01MDcgLTk3IDAgLTQgNDEgLTM1IDkyIC03MCBsOTIKLTYzIC00NSAtMzkgYy0yNTUgLTIyNyAtNTIwIC0zMjYgLTg0NCAtMzE0IC0yNjAgMTAgLTQ3MyA4OSAtNjg2IDI1NyAtMTA5IDg2Ci0yNDYgMjU0IC0yOTMgMzU4IC0xMCAyMyAtMjQgNDIgLTMwIDQyIC0xNyAwIC0yMzYgLTEwOCAtMjM2IC0xMTYgMCAtMTQgOTQKLTE3MSAxNDAgLTIzNCA3MCAtOTUgMjYyIC0yNzcgMzYwIC0zNDIgMjQ2IC0xNjIgNDk4IC0yMzggNzkwIC0yMzggMjQxIDAgNDQ1CjUwIDY2MyAxNjIgMTE4IDYxIDE5MiAxMTQgMzE1IDIyNiBsOTIgODUgNTYgLTM3IDU1IC0zNyAtMjEgLTI2IGMtNzkgLTEwMAotMzA2IC0yNjUgLTQ3MCAtMzQxIC0yNTAgLTExNiAtNTE0IC0xNjQgLTc4MCAtMTQyIC0xNDggMTIgLTI0MyAzMSAtMzY5IDc0Ci00MTMgMTQyIC03MjMgNDE3IC05MTIgODA3IC0xNTUgMzIwIC0xOTAgNzAyIC05OSAxMDU5IDM0IDEzMSAxMDcgMzAyIDE3OAo0MTQgbDI5IDQ1IDM3IC0xNjIgYzIxIC04OSA0MSAtMTY1IDQ1IC0xNzAgOCAtOCA1MDEgMTAzIDUwMSAxMTMgMCAzIC00MSAzMAotOTAgNjAgLTQ5IDMwIC05MCA1OSAtOTAgNjUgMCAxOSAxMjYgMTI4IDIyMiAxOTIgNTYwIDM3MyAxMzI5IDE4NCAxNjUzIC00MDcKbDM3IC02OCAxMTcgNTUgYzY0IDMwIDExOCA1NyAxMjAgNTkgNiA2IC0zMyA4NiAtNzIgMTQ5IC0xMDEgMTYyIC0yNjEgMzI4Ci00MTIgNDI5IC0yNjIgMTc1IC01MzEgMjUzIC04NDUgMjQ0IC0yNDcgLTggLTQxNyAtNTIgLTYzMCAtMTY0IC0xMzIgLTcwCi0yMjYgLTE0MCAtMzQwIC0yNTUgbC04OSAtOTAgLTQ2IDI2IC00NSAyNyAxOSAyNyBjMzUgNDkgMjE2IDIxNSAyOTkgMjc0IDE4NAoxMzIgNDMzIDIzNiA2NDcgMjcyIDExMCAxOCAzODggMTggNTAwIDB6Ii8+CjxwYXRoIGQ9Ik0yMDc1IDM3NTQgYy01MCAtOCAtMTk4IC01NSAtMjQwIC03NiAtMTg1IC05NCAtMzQ5IC0yNzEgLTQxNCAtNDQ4Ci02MSAtMTY2IC03MSAtMzU0IC0yOCAtNTIxIDM5IC0xNTAgOTIgLTI0MyAyMDYgLTM2MyAxMDMgLTEwNyAyMjMgLTE4MSAzNzEKLTIyNyA2NSAtMjEgOTUgLTI0IDIzMCAtMjQgMTM1IDAgMTY1IDMgMjMwIDI0IDIzMCA3MiA0MTkgMjMwIDUyNSA0NDAgOTQgMTg2CjEwMyA0NTYgMjQgNjcxIC02NSAxNzcgLTIyOSAzNTUgLTQxNCA0NDggLTk2IDQ4IC0yMDUgNzMgLTMzNSA3NyAtNjkgMiAtMTM4CjEgLTE1NSAtMXogbTIwNiAtNjk2IGM0NCAtMjQgNzkgLTg1IDc5IC0xMzcgMCAtNDcgLTM0IC0xMDYgLTc2IC0xMzIgLTc4IC00OAotMTgzIC0xOSAtMjI0IDYyIC03MiAxNDEgODIgMjg1IDIyMSAyMDd6Ii8+CjwvZz4KPC9zdmc+Cg=="},qgGM:function(e,a,t){e.exports=t.p+"static/startup-59a17b90060ae8efe91ddd9a1cf07917.svg"}}]);
//# sourceMappingURL=component---src-pages-index-js-548de279b99d4a06b1db.js.map