(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{120:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(7),i=t.n(l),c=(t(93),t(66)),o=t(67),u=t(72),s=t(73),m=(t(94),t(155)),p=t(154),d=t(150),f=t(152),g=t(151),E=t(153),h=t(45),b=t.n(h),v=t(145),N=t(148),O=t(149),j=t(24),y=t(25),S=t(20),w=t(33),C=t(13),x=t(32),_=t.n(x),A=t(46),k=t(69).create({baseURL:"https://api.backendless.com/344D7AA6-9374-B158-FFC0-F0953B41EF00/886E87E4-7F9F-465B-9F3E-E1448CB78D8D/",headers:{"Content-Type":"application/json",Accept:"application/json"}}),I=function(e,a){return k.post("users/login",{login:e,password:a})},T=function(e,a){return k.post("users/register",{email:e,password:a})},L=function(e){return k.get("/users/logout",{"user-token":e})},D={objectId:null,email:null,isAuthenticated:!1,userToken:null,isLogged:!1,firstName:null,lastName:null},F=function(e,a){return{type:"SET_USER_NAME",payload:{firstName:e,lastName:a}}},U=function(e,a,t){return{type:"SET_USER_DATA",payload:{objectId:e,email:a,isAuthenticated:t}}},W=function(e,a){return{type:"SET_USER_LOGIN",payload:{userToken:e,isLogged:a}}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_USER_DATA":case"SET_USER_LOGIN":case"SET_USER_NAME":return Object(S.a)({},e,{},a.payload);default:return e}},R=function(e){var a=Object(n.useState)(e),t=Object(w.a)(a,2),r=t[0],l=t[1],i=Object(C.d)((function(e){return e.auth.isLogged})),c=Object(C.c)();return{handleSubmit:function(e){var a,t;e&&e.preventDefault(),!1===i&&c((a=r.login,t=r.password,function(){var e=Object(A.a)(_.a.mark((function e(n){var r,l;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(a,t);case 2:r=e.sent,l=r.data["user-token"],n(W(l,!0)),console.log(r.data+" user-token");case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()))},handleInputChange:function(e){e.persist(),l((function(a){return Object(S.a)(Object(S.a)({},a),{},Object(y.a)({},e.target.name,e.target.value))}))},inputs:r}};function B(){return r.a.createElement(v.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",(new Date).getFullYear(),".")}var M=Object(N.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function Y(){var e=M(),a=R({login:"",password:""}),t=a.inputs,n=a.handleInputChange,l=a.handleSubmit;return r.a.createElement(O.a,{component:"main",maxWidth:"xs"},r.a.createElement(d.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(m.a,{className:e.avatar},r.a.createElement(b.a,null)),r.a.createElement(v.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:e.form,onSubmit:l,noValidate:!0},r.a.createElement(f.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,value:t.login,onChange:n,id:"login",label:"Email Address",name:"login",autoComplete:"login",autoFocus:!0}),r.a.createElement(f.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",value:t.password,onChange:n,label:"Password",type:"password",id:"password",autoComplete:"current-password"}),r.a.createElement(p.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign In"),r.a.createElement(g.a,{item:!0},r.a.createElement(j.b,{to:"/register"},"Don't have an account? Sign Up")))),r.a.createElement(E.a,{mt:8},r.a.createElement(B,null)))}var J=function(e){var a=Object(n.useState)(e),t=Object(w.a)(a,2),r=t[0],l=t[1],i=Object(C.d)((function(e){return e.auth.token})),c=Object(C.d)((function(e){return e.auth.isAuthenticated})),o=Object(C.c)();return{handleSubmit:function(e){var a,t;e&&e.preventDefault(),null==i&&(o((a=r.email,t=r.password,function(){var e=Object(A.a)(_.a.mark((function e(n){var r,l,i,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(a,t);case 2:r=e.sent,l=r.data,i=l.objectId,c=l.email,n(U(i,c,!0)),console.log(r.data);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}())),o(F(r.firstName,r.lastName))),console.log(c+" "+i)},handleInputChange:function(e){e.persist(),l((function(a){return Object(S.a)({},a,Object(y.a)({},e.target.name,e.target.value))}))},inputs:r}};function P(){return r.a.createElement(v.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",(new Date).getFullYear(),".")}var V=Object(N.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function G(e){var a=V(),t=J({email:"",password:"",firstName:"",lastName:""}),n=t.inputs,l=t.handleInputChange,i=t.handleSubmit;return r.a.createElement(O.a,{component:"main",maxWidth:"xs"},r.a.createElement(d.a,null),r.a.createElement("div",{className:a.paper},r.a.createElement(m.a,{className:a.avatar},r.a.createElement(b.a,null)),r.a.createElement(v.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:a.form,onSubmit:i},r.a.createElement(g.a,{container:!0,spacing:2},r.a.createElement(g.a,{item:!0,xs:12,sm:6},r.a.createElement(f.a,{autoComplete:"fname",name:"firstName",variant:"outlined",value:n.firstName,onChange:l,required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})),r.a.createElement(g.a,{item:!0,xs:12,sm:6},r.a.createElement(f.a,{variant:"outlined",required:!0,fullWidth:!0,value:n.lastName,onChange:l,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname"})),r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(f.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",value:n.email,onChange:l,label:"Email Address",name:"email",autoComplete:"email"})),r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(f.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",value:n.password,onChange:l,type:"password",id:"password",autoComplete:"current-password"}))),r.a.createElement(p.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit},"Sign Up"),r.a.createElement(g.a,{container:!0,justify:"flex-end"},r.a.createElement(g.a,{item:!0},r.a.createElement(j.b,{to:"/"},"Already have an account? Sign in"))))),r.a.createElement(E.a,{mt:5},r.a.createElement(P,null)))}var X=t(11),z=function(){var e=Object(C.d)((function(e){return e.auth.isLogged})),a=Object(C.c)();return{handleClick:function(t){t.preventDefault(),!0===e&&(a(function(){var e=Object(A.a)(_.a.mark((function e(a){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=D.userToken,e.next=3,L(t);case 3:a(U(null,null,!0)),a(W(null,!1)),console.log(!0,!1);case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),console.log("click"))}}},H=function(){var e=z().handleClick;return r.a.createElement("div",null,r.a.createElement(p.a,{type:"submit",variant:"contained",color:"primary",onClick:e}," Logout"))},K=t(70),Q=t.n(K),Z=function(e){var a=function(e){var a=Object(n.useState)(e),t=Object(w.a)(a,2),r=t[0],l=t[1],i=Object(C.d)((function(e){return e.auth.isLogged})),c=Object(C.c)();return{handleInputChange:function(e){e.persist(),l((function(a){return Object(S.a)({},a,Object(y.a)({},e.target.name,e.target.value))}))},handleSubmit:function(e){e&&e.preventDefault(),!0===i&&c(F(r.firstName,r.lastName))},inputs:r}}({firstName:"",lastName:""}),t=a.inputs,l=a.handleInputChange,i=a.handleSubmit;return r.a.createElement("div",null,r.a.createElement("h1",null,"Your First Name",r.a.createElement("br",null),e.firstName),r.a.createElement("h1",null,"Your Last Name",r.a.createElement("br",null),e.lastName),r.a.createElement("form",{onSubmit:i,className:Q.a.form,noValidate:!0},r.a.createElement(f.a,{variant:"outlined",margin:"normal",required:!0,value:t.firstName,onChange:l,id:"firstName",label:"FirstName",name:"firstName",autoFocus:!0}),r.a.createElement(f.a,{variant:"outlined",margin:"normal",require:!0,name:"lastName",value:t.lastName,onChange:l,label:"LastName",id:"lastName"}),r.a.createElement("br",null),r.a.createElement(p.a,{type:"submit",variant:"contained",color:"primary"},"ChangeName")),r.a.createElement(H,null))},$=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return!0===this.props.isAuthenticated&&!1===this.props.isLogged?r.a.createElement("div",{className:"App"},r.a.createElement(j.a,null,r.a.createElement(X.a,{to:"/"}),r.a.createElement(X.b,{exact:!0,path:"/",component:Y}),r.a.createElement(X.b,{path:"/register",component:G}),r.a.createElement(X.b,{path:"/main",render:function(){return r.a.createElement(Z,{firstName:e.props.firstName,lastName:e.props.lastName})}}))):!0===this.props.isAuthenticated&&!0===this.props.isLogged?r.a.createElement("div",{className:"App"},r.a.createElement(j.a,null,r.a.createElement(X.a,{to:"/main"}),r.a.createElement(X.b,{exact:!0,path:"/",component:Y}),r.a.createElement(X.b,{path:"/register",component:G}),r.a.createElement(X.b,{path:"/main",render:function(){return r.a.createElement(Z,{firstName:e.props.firstName,lastName:e.props.lastName})}}))):r.a.createElement("div",{className:"App"},r.a.createElement(j.a,null,r.a.createElement(X.b,{exact:!0,path:"/",component:Y}),r.a.createElement(X.b,{path:"/register",component:G}),r.a.createElement(X.b,{path:"/main",render:function(){return r.a.createElement(Z,{firstName:e.props.firstName,lastName:e.props.lastName})}})))}}]),t}(n.Component),ee=Object(C.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,isLogged:e.auth.isLogged,firstName:e.auth.firstName,lastName:e.auth.lastName}}))($),ae=t(31),te=t(71);var ne=Object(ae.c)({auth:q}),re=function(e){try{var a=localStorage.getItem("state");if(null===a)return;return JSON.parse(a)}catch(t){console.log(t)}}(),le=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ae.d,ie=Object(ae.e)(ne,re,le(Object(ae.a)(te.a)));window.__store__=ie,ie.subscribe((function(){return function(e){try{var a=JSON.stringify(e);localStorage.setItem("state",a)}catch(t){console.log(t)}}(ie.getState())}));var ce=ie;i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C.a,{store:ce},r.a.createElement(ee,null))),document.getElementById("root"))},70:function(e,a,t){e.exports={form:"Main_form__x2Y85"}},88:function(e,a,t){e.exports=t(120)},93:function(e,a,t){},94:function(e,a,t){}},[[88,1,2]]]);
//# sourceMappingURL=main.4387e82c.chunk.js.map