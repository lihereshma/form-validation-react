(this["webpackJsonplogin-register"]=this["webpackJsonplogin-register"]||[]).push([[0],{11:function(e,a,r){},13:function(e,a,r){"use strict";r.r(a);var t=r(0),n=r.n(t),s=r(5),o=r.n(s),c=r(1),l=(r(11),r(12),r(2)),m=r(3);function i(e,a){var r=Object(t.useState)({username:"",email:"",password:""}),n=Object(c.a)(r,2),s=n[0],o=n[1],i=Object(t.useState)({}),u=Object(c.a)(i,2),d=u[0],p=u[1],E=Object(t.useState)(!1),v=Object(c.a)(E,2),f=v[0],b=v[1];return Object(t.useEffect)((function(){0===Object.keys(d).length&&f&&e()})),{handleChange:function(e){var a=e.target,r=a.name,t=a.value;o(Object(m.a)(Object(m.a)({},s),{},Object(l.a)({},r,t)))},handleSubmit:function(e){e.preventDefault(),p(a(s)),b(!0)},values:s,errors:d}}function u(e){var a={};return e.username?e.username.length<5&&(a.username="Username needs to be more than 5 characters"):a.username="Username is required",e.email?/^([a-zA-Z0-9_]+)@([a-zA-Z0-9_]+)\.([a-zA-Z]{2,5})$/.test(e.email)||(a.email="Email address is invalid"):a.email="Email address is required",e.password?/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(e.password)||(a.password="Password is invalid"):a.password="Password is required",a}var d=function(){var e=i((function(){alert("Login successfully")}),u),a=e.handleChange,r=e.handleSubmit,t=e.values,s=e.errors;return n.a.createElement("div",{className:"inner-container"},n.a.createElement("form",{className:"box",onSubmit:r},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",name:"username",value:t.username,className:"form-control ".concat(s.username&&"inputError"),placeholder:"Username",onChange:a}),s.username&&n.a.createElement("span",{className:"error"},s.username)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",name:"password",value:t.password,className:"form-control ".concat(s.password&&"inputError"),placeholder:"Password",onChange:a}),s.password&&n.a.createElement("span",{className:"error"},s.password)),n.a.createElement("button",{type:"submit",className:"btn"},"Sign In")))},p=function(){var e=i((function(){alert("Registered successfully")}),u),a=e.handleChange,r=e.handleSubmit,t=e.values,s=e.errors;return n.a.createElement("div",{className:"inner-container"},n.a.createElement("form",{className:"box",onSubmit:r},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",name:"username",value:t.username,className:"form-control ".concat(s.username&&"inputError"),placeholder:"Username",onChange:a}),s.username&&n.a.createElement("span",{className:"error"},s.username)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",name:"email",value:t.email,className:"form-control ".concat(s.email&&"inputError"),placeholder:"Email",onChange:a}),s.email&&n.a.createElement("span",{className:"error"},s.email)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",name:"password",value:t.password,className:"form-control ".concat(s.password&&"inputError"),placeholder:"Password",onChange:a}),s.password&&n.a.createElement("span",{className:"error"},s.password)),n.a.createElement("button",{type:"submit",className:"btn"},"Sign Up")))};var E=function(){var e=Object(t.useState)(!0),a=Object(c.a)(e,2),r=a[0],s=a[1],o=Object(t.useState)(!1),l=Object(c.a)(o,2),m=l[0],i=l[1];return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"container"},n.a.createElement("ul",{className:"box-controller col-lg-4 col-md-6"},n.a.createElement("li",{className:"controller ".concat(r&&"selected-controller"),onClick:function(){s(!0),i(!1)}},"Login"),n.a.createElement("li",{className:"controller ".concat(m&&"selected-controller"),onClick:function(){s(!1),i(!0)}},"Register")),n.a.createElement("div",{className:"box-container col-lg-4 col-md-6"},r&&n.a.createElement(d,null),m&&n.a.createElement(p,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,a,r){e.exports=r(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.5c126c64.chunk.js.map