(this["webpackJsonpluca-pic"]=this["webpackJsonpluca-pic"]||[]).push([[11],{268:function(e,a,s){"use strict";s.r(a);var r=s(148),t=s(0),n=s(81),i=s(114),c=s(279),l=s(269),o=s(270),m=s(275),b=s(277),u=s(280),j=s(136),h=s(83),d=s(8),p=s(3),f=Object(n.a)((function(){var e=Object(h.a)(),a=e.AuthStore,s=e.UserStore,n=Object(d.f)(),f=Object(t.useState)(!0),x=Object(r.a)(f,2),O=x[0],g=x[1],w=function(){g(!1)};return Object(p.jsx)(c.a,{title:"Login",placement:"right",closable:!1,onClose:w,visible:O,width:"calc(100% - 250px)",getContainer:!1,afterVisibleChange:function(){O||n.goBack()},children:Object(p.jsx)(l.a,{children:Object(p.jsx)(o.a,{xs:24,children:Object(p.jsxs)(m.a,{name:"basic",labelAlign:"right",labelCol:{span:3},initialValues:{remember:!0},onFinish:function(e){a.setUserName(e.username),a.setPassword(e.password),a.login().then((function(){s.setUser(),w()})).catch((function(e){i.b.error("login failed"),s.resetUser()}))},onFinishFailed:function(e){i.b.error("login failed")},children:[Object(p.jsx)(m.a.Item,{label:"Account",name:"username",rules:[{required:!0,message:"Please input your username or email"}],children:Object(p.jsx)(b.a,{placeholder:"Username or email"})}),Object(p.jsx)(m.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"},{min:6,message:"Minium six characters"},{max:10,message:"Maximum ten characters"}],children:Object(p.jsx)(b.a.Password,{placeholder:"Password"})}),Object(p.jsx)(m.a.Item,{name:"remember",valuePropName:"checked",wrapperCol:{span:24,offset:11},children:Object(p.jsx)(u.a,{children:"Remember Me"})}),Object(p.jsx)(m.a.Item,{wrapperCol:{span:24,offset:12},children:Object(p.jsx)(j.a,{type:"primary",htmlType:"submit",children:"Login"})})]})})})})}));a.default=f}}]);
//# sourceMappingURL=11.e0e10acb.chunk.js.map