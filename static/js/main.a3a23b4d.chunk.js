(this["webpackJsonpgithub-user-finder"]=this["webpackJsonpgithub-user-finder"]||[]).push([[0],{57:function(e,t,s){},58:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(27),r=s.n(n),i=s(8),l=s(2),o=s(12),j=s(10),u=function(e,t){switch(t.type){case"SEARCH_USERS":return Object(j.a)(Object(j.a)({},e),{},{users:t.payload});case"GET_USER_INFO":return Object(j.a)(Object(j.a)({},e),{},{user:t.payload});case"GET_USER_REPO":return Object(j.a)(Object(j.a)({},e),{},{repos:t.payload});default:return e}},b=c.a.createContext(),d=s(13),m=s.n(d),h=s(0),p=function(e){var t=Object(a.useReducer)(u,{users:[],user:{},repos:[]}),s=Object(o.a)(t,2),c=s[0],n=s[1];return Object(h.jsx)(b.Provider,{value:{users:c.users,user:c.user,repos:c.repos,searchUsers:function(e){m.a.get("https://api.github.com/search/users?q=".concat(e)).then((function(e){n({type:"SEARCH_USERS",payload:e.data.items})}))},getUserInfo:function(e){m.a.get("https://api.github.com/users/".concat(e)).then((function(e){n({type:"GET_USER_INFO",payload:e.data})}))},getUserRepo:function(e){m.a.get("https://api.github.com/users/".concat(e,"/repos")).then((function(e){n({type:"GET_USER_REPO",payload:e.data})}))}},children:e.children})},O=function(e){var t=Object(a.useState)(""),s=Object(o.a)(t,2),n=s[0],r=s[1],i=Object(l.f)(),j=Object(a.useContext)(b).searchUsers,u=function(e){r(e.target.value)},d=function(){n&&(j(n),r(""),i.push("/"))};return Object(h.jsx)(c.a.Fragment,{children:e.isMainSearch?Object(h.jsxs)("div",{className:"col-12 input-group input-group-lg mt-5",children:[Object(h.jsx)("input",{type:"text",className:"form-control",placeholder:"Search any user...",onChange:u,onKeyPress:function(e){return"Enter"===e.key&&d()}}),Object(h.jsx)("div",{className:"input-group-append",children:Object(h.jsx)("button",{className:"btn btn-primary",type:"button",onClick:d,children:"Search"})})]}):Object(h.jsxs)("form",{className:"form-inline",onSubmit:function(e){return e.preventDefault()},children:[Object(h.jsx)("input",{className:"form-control mr-2",type:"text",value:n,placeholder:"Username",onChange:u,onKeyPress:function(e){return"Enter"===e.key&&d()}}),Object(h.jsx)("button",{type:"button",className:"btn btn-outline-light",onClick:d,children:"Search"})]})})},x=function(e){var t=Object(a.useContext)(b).users,s=e.title,c=e.icon;return Object(h.jsx)("nav",{className:"navbar navbar-dark bg-primary fixed-top",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)(i.b,{to:"/",className:"navbar-brand",children:[Object(h.jsx)("i",{className:c}),s]}),Object(h.jsxs)("ul",{className:"navbar-nav flex-row",children:[Object(h.jsx)("li",{className:"nav-item mr-2",children:Object(h.jsx)(i.c,{exact:!0,to:"/",className:"nav-link",activeClassName:"active",children:"Home"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(i.c,{to:"/aboutus",className:"nav-link",activeClassName:"active",children:"About"})})]}),!!t.length&&Object(h.jsx)(O,{})]})})};x.defaultProps={title:"Navbar default title",icon:"Navbar default icon"};var f=x,g=function(){var e=Object(a.useContext)(b).users;return Object(h.jsx)("div",{className:"row",children:e.length?e.map((function(e,t){return Object(h.jsx)("div",{className:"col-md-3 mt-4",children:Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("img",{className:"card-img-top",src:e.avatar_url,alt:e.login}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("h5",{className:"card-title",children:e.login}),Object(h.jsx)(i.b,{to:"/userdetail/".concat(e.login),className:"btn btn-primary",children:"Go to Profile"})]})]})},t)})):Object(h.jsx)(O,{isMainSearch:!0})})},v=function(){var e=Object(a.useContext)(b).repos;return Object(h.jsx)("div",{className:"list-group list-group-flush",children:e.map((function(e,t){return Object(h.jsxs)("a",{href:e.html_url,target:"_blank",rel:"noreferrer",className:"list-group-item list-group-item-action flex-column align-items-start bg-light",children:[Object(h.jsxs)("div",{className:"d-flex w-100 justify-content-between",children:[Object(h.jsx)("h5",{className:"mb-1",children:e.name}),Object(h.jsx)("small",{children:e.language})]}),Object(h.jsxs)("p",{className:"mb-1",children:[e.description,"."]}),Object(h.jsx)("small",{children:e.html_url})]},t)}))})},N=function(e){var t=Object(a.useContext)(b),s=t.user,c=t.getUserInfo,n=t.getUserRepo;Object(a.useEffect)((function(){c(e.match.params.login),n(e.match.params.login),console.log("useEffect worked.")}),[]);var r=s.avatar_url,i=s.name,l=s.bio,o=s.public_repos,j=s.followers,u=s.following;return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"jumbotron",children:Object(h.jsxs)("div",{className:"d-flex align-items-center",children:[Object(h.jsx)("img",{className:"rounded-circle user-avatar",src:r,alt:i}),Object(h.jsxs)("div",{className:"ml-3",children:[Object(h.jsx)("h1",{className:"display-4",children:i}),l&&Object(h.jsx)("p",{className:"lead",children:l}),Object(h.jsxs)("span",{className:"badge badge-primary mr-1",children:["Repos: ",o]}),Object(h.jsxs)("span",{className:"badge badge-danger mr-1",children:["Followers: ",j]}),Object(h.jsxs)("span",{className:"badge badge-success",children:["Following: ",u]})]})]})}),Object(h.jsx)(v,{})]})},y=function(){return Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col-12 pt-4 text-center",children:["Github User Finder ",Object(h.jsx)("br",{}),"Turan Kantarc\u0131 ",Object(h.jsx)("br",{}),Object(h.jsx)("a",{href:"https://www.github.com/turankantarci",target:"_blank",rel:"noreferrer",children:"https://www.github.com/turankantarci"})]})})})},w=function(){return Object(h.jsx)(p,{children:Object(h.jsxs)(i.a,{children:[Object(h.jsx)(f,{title:"Github User Finder",icon:"fab fa-github mr-2"}),Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{exact:!0,path:"/",component:g}),Object(h.jsx)(l.a,{path:"/aboutus",component:y}),Object(h.jsx)(l.a,{path:"/userdetail/:login",component:N})]})})]})})};s(57);r.a.render(Object(h.jsx)(w,{}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.a3a23b4d.chunk.js.map