(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(e){e.exports=[{id:1,name:"iPad 4 Mini",price:500.01,inventory:2,children:[{name:"\u5fae\u5faa\u73af"},{name:"\u672a\u77e5\u4e4b\u5730"}]},{id:2,name:"H&M T-Shirt White",price:10.99,inventory:10,children:[{name:"\u601d\u8003\u601d\u8003"},{name:"\u65e0\u8bba\u5982\u4f55"}]},{id:3,name:"Charli XCX - Sucker CD",price:19.99,inventory:5,children:[{name:"\u565c\u5566\u5566"},{name:"\u6012\u54c8\u54c8\u54c8"}]}]},125:function(e,n,t){e.exports=t(240)},130:function(e,n,t){},240:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),c=t(6),i=t.n(c),u=(t(130),t(34)),l=t(28),o=t(116),s=(t(135),t(124)),m=t(31),d={userId:"",userName:"",menuList:[],secondmenuVisible:!1,secondmenuList:[],currentMenu:""},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"LOGIN_IN":return Object(m.a)({},e);case"type_getMenulist":return Object(m.a)({},e,{menuList:n.menus});case"type_changeSecondMenu":if(n.filterid){var t=e.menuList.filter(function(e){return e.name===n.filterid});if(t&&t.length>0)return Object(m.a)({},e,{secondmenuVisible:n.secondMenuvisible,secondmenuList:Object(s.a)(t[0].children||[])})}return Object(m.a)({},e,{secondmenuVisible:n.secondMenuvisible,secondmenuList:[]});case"type_clickSecondMenu":return n.currentMenu?Object(m.a)({},e,{currentMenu:n.currentMenu}):Object(m.a)({},e);default:return Object(m.a)({},e)}},h=Object(u.c)({homeState:p}),f=t(50),v=t(29),E=t(15),b=t(16),y=t(18),O=t(17),j=t(19),g=(t(136),t(46)),k=t.n(g),M=(t(84),t(21)),N=t.n(M),C=t(117),L=function(e,n){return setTimeout(function(){return e(C)},n||100)},S=t(118),w=t.n(S).a.create({timeout:6e3,withCredentials:!0}),I=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return w.post(e,n).then(function(e){return e.data}).catch(function(e){if(e.request){if(404==e.request.status){e.request.responseURL.indexOf("/Account/Login");return{Result:"error",Data:"\u8bf7\u6c42\u5730\u5740\u9519\u8bef"}}return{Result:"error",Data:"\u5176\u4ed6\u9519\u8bef"}}})},_=(t(52),function(e){function n(e){return Object(E.a)(this,n),Object(y.a)(this,Object(O.a)(n).call(this,e))}return Object(j.a)(n,e),Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.getMenulistByuser()}},{key:"firstMenuhoverin",value:function(e){this.props.changeSecondmenu(!0,e)}},{key:"firstMenuhoverout",value:function(){this.props.changeSecondmenu(!1)}},{key:"secondMenuclick",value:function(e){this.props.clickSecondmenu(e)}},{key:"CreateMenulist",value:function(){var e=this;return this.props.menulist.map(function(n,t){var a=null;return 0===t&&(a=r.a.createElement("svg",{className:"icon","aria-hidden":"true"},r.a.createElement("use",{xlinkHref:"#icon-zuzhiguanli"}))),r.a.createElement("li",{className:"menu-item",key:n.id,onClick:function(){return e.firstMenuhoverin(n.name)}},r.a.createElement("a",null,a,n.name))})}},{key:"render",value:function(){var e=this,n=this.props,t=n.smenuvisible,a=n.smenulist,c={display:t?"block":"none"};return r.a.createElement("div",null,r.a.createElement("header",{className:"hr-header"},r.a.createElement("a",{href:"/",className:"hr-navbar-brand"},"\u4eba\u529b\u8d44\u6e90\u529e\u516c\u7cfb\u7edf"),r.a.createElement("div",{className:"hr-navbar-content"},r.a.createElement("div",null),r.a.createElement("ul",{className:"hr-navbar-group"},r.a.createElement("li",{className:"hr-navbar-item"},r.a.createElement("span",{id:"idspan_user"},"\u9648\u8d85\u51e1"),r.a.createElement(N.a,{type:"mail",style:{fontSize:14,paddingLeft:5}})),r.a.createElement("li",{className:"hr-navbar-item"},r.a.createElement("a",null,"\u9000\u51fa"))))),r.a.createElement("div",{className:"hr-menu",onMouseLeave:function(){return e.firstMenuhoverout()}},r.a.createElement("nav",null,r.a.createElement("ul",{className:"menu-group clear"},this.CreateMenulist())),r.a.createElement("div",{className:"menu-content",style:c},r.a.createElement("div",{className:"menu-content-group"},r.a.createElement("dl",null,a.map(function(e){return r.a.createElement("dd",{key:e.name},r.a.createElement(f.b,{to:"./organization"},e.name))}))))),r.a.createElement("div",{style:{paddingLeft:"0.16rem"}},r.a.createElement(k.a,null,r.a.createElement(k.a.Item,null,r.a.createElement("a",{href:""},"\u9996\u9875")),r.a.createElement(k.a.Item,null,r.a.createElement("a",{href:""},"Application Center")),r.a.createElement(k.a.Item,null,r.a.createElement("a",{href:""},"Application List")),r.a.createElement(k.a.Item,null,"An Application"))))}}]),n}(r.a.Component)),x=Object(l.b)(function(e){var n=e.homeState;return{menulist:n.menuList,smenuvisible:n.secondmenuVisible,smenulist:n.secondmenuList}},{getMenulistByuser:function(){return function(e){I("/Home/Menu").then(function(n){n.Result&&"error"===n.Result?L(function(n){e({type:"type_getMenulist",menus:n})}):e({type:"type_getMenulist",menus:n})})}},changeSecondmenu:function(e,n){return{type:"type_changeSecondMenu",secondMenuvisible:e,filterid:n}},clickSecondmenu:function(e){return{type:"type_clickSecondMenu",currentMenu:e}}})(_),z=function(e){function n(e){return Object(E.a)(this,n),Object(y.a)(this,Object(O.a)(n).call(this,e))}return Object(j.a)(n,e),Object(b.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,"\u9996\u9875\uff0c\u8fd9\u4e2a\u662f\u7f51\u7ad9\u7684\u9996\u9875\uff0c\u5305\u542b\u4e00\u4e9b\u901a\u77e5\u4fe1\u606f")}}]),n}(r.a.Component),D=Object(l.b)(function(e){return{currentmenu:e.homeState.currentMenu}})(z),A=function(e){function n(e){return Object(E.a)(this,n),Object(y.a)(this,Object(O.a)(n).call(this,e))}return Object(j.a)(n,e),Object(b.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,"\u7ec4\u7ec7\u7ba1\u7406\u9875\uff0c\u5305\u542b\u76f8\u5173\u7ec4\u7ec7\u4fe1\u606f")}}]),n}(r.a.Component),K=Object(l.b)(function(e){return{currentmenu:e.homeState.currentMenu}})(A),R=function(e){function n(e){return Object(E.a)(this,n),Object(y.a)(this,Object(O.a)(n).call(this,e))}return Object(j.a)(n,e),Object(b.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(x,null),r.a.createElement("section",null,r.a.createElement(v.a,{exact:!0,path:"/home",component:D}),r.a.createElement(v.a,{exact:!0,path:"/organization",component:K}),r.a.createElement(v.a,{exact:!0,path:"/",component:D})))}}]),n}(r.a.Component),V=function(e){function n(e){var t;return Object(E.a)(this,n),(t=Object(y.a)(this,Object(O.a)(n).call(this,e))).un=void 0,t.pw=void 0,t}return Object(j.a)(n,e),Object(b.a)(n,[{key:"componentDidMount",value:function(){this.un.focus()}},{key:"onClickloginIn",value:function(){I("/",{})}},{key:"enterKeyupLoginIn",value:function(e){e&&13===e.keyCode&&this.props.history.push("/home")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"login-background"}),r.a.createElement("div",{className:"login-content"},r.a.createElement("div",{className:"header"}),r.a.createElement("div",{className:"outer"},r.a.createElement("div",{className:"middle"},r.a.createElement("div",{className:"inner-content"},r.a.createElement("span",{className:"title"},"\u767b\u5f55"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-addon"},r.a.createElement(N.a,{type:"user",style:{fontSize:16}})),r.a.createElement("input",{type:"text",ref:function(n){return e.un=n},spellCheck:!1,placeholder:"\u8bf7\u8f93\u5165\u767b\u5f55\u540d",onKeyUp:function(n){return e.enterKeyupLoginIn(n)}})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-addon"},r.a.createElement(N.a,{type:"lock",style:{fontSize:16}})),r.a.createElement("input",{type:"password",ref:function(n){return e.pw=n},onKeyUp:function(n){return e.enterKeyupLoginIn(n)}})),r.a.createElement("div",{className:"row"},r.a.createElement("a",{id:"ida_register",href:"#"},"\u6ce8\u518c")),r.a.createElement("div",{className:"row"},r.a.createElement("button",{onClick:function(){return e.onClickloginIn()}},"\u767b\u9646")))))))}}]),n}(r.a.Component),q=[o.a];var B=Object(u.d)(h,u.a.apply(void 0,q));i.a.render(r.a.createElement(l.a,{store:B},r.a.createElement(function(){return r.a.createElement(f.a,null,r.a.createElement(v.c,null,r.a.createElement(v.a,{exact:!0,path:"/login",component:V}),r.a.createElement(v.a,{path:"/",component:R})))},null)),document.getElementById("root"))},52:function(e,n,t){}},[[125,1,2]]]);
//# sourceMappingURL=main.0d866e54.chunk.js.map