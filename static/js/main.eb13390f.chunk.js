(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{15:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(1),i=s.n(n),c=s(9),l=s.n(c),j=s(7),h=s(2),r=s(3),b=s(6),o=s(5),u=s(4),d=function(e){Object(o.a)(s,e);var t=Object(u.a)(s);function s(){return Object(h.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"displayActualResults",children:[Object(a.jsxs)("span",{children:["Name: ",this.props.name]}),Object(a.jsx)("br",{}),Object(a.jsxs)("span",{children:["Email: ",this.props.email]}),Object(a.jsx)("br",{}),Object(a.jsxs)("span",{children:["Phone Number: ",this.props.phoneNumber]})]})}}]),s}(i.a.Component),p=function(e){Object(o.a)(s,e);var t=Object(u.a)(s);function s(){var e;return Object(h.a)(this,s),(e=t.call(this)).state={name:"",email:"",phoneNumber:"",status:"Submit"},e.handleChange=e.handleChange.bind(Object(b.a)(e)),e}return Object(r.a)(s,[{key:"handleChange",value:function(e){this.setState(Object(j.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"General Information"}),Object(a.jsxs)("form",{id:"general",className:"form",children:[Object(a.jsx)("label",{children:"Name: "}),Object(a.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange,className:"input"}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Email: "}),Object(a.jsx)("input",{type:"text",name:"email",value:this.state.email,onChange:this.handleChange,className:"input"}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Phone Number: "}),Object(a.jsx)("input",{type:"text",name:"phoneNumber",value:this.state.phoneNumber,onChange:this.handleChange,className:"input"}),Object(a.jsx)("br",{})]}),Object(a.jsx)(d,{name:this.state.name,email:this.state.email,phoneNumber:this.state.phoneNumber})]})}}]),s}(i.a.Component),m=function(e){Object(o.a)(s,e);var t=Object(u.a)(s);function s(){return Object(h.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"displayActualResults",children:[Object(a.jsxs)("span",{children:["School: ",this.props.schoolName]}),Object(a.jsx)("br",{}),Object(a.jsxs)("span",{children:["Field: ",this.props.field]}),Object(a.jsx)("br",{}),Object(a.jsxs)("span",{children:["Dates: ",this.props.dates]}),Object(a.jsx)("br",{})]})}}]),s}(i.a.Component),O=function(e){Object(o.a)(s,e);var t=Object(u.a)(s);function s(){var e;return Object(h.a)(this,s),(e=t.call(this)).state={schoolName:"",field:"",dates:"",status:"Submit"},e.handleChange=e.handleChange.bind(Object(b.a)(e)),e}return Object(r.a)(s,[{key:"handleChange",value:function(e){this.setState(Object(j.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"School Information"}),Object(a.jsxs)("form",{id:"general",className:"form",children:[Object(a.jsx)("label",{children:"School: "}),Object(a.jsx)("input",{type:"text",name:"schoolName",value:this.state.schoolName,onChange:this.handleChange,className:"input"}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Field: "}),Object(a.jsx)("input",{type:"text",name:"field",value:this.state.field,onChange:this.handleChange,className:"input"}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Dates: "}),Object(a.jsx)("input",{type:"text",name:"dates",value:this.state.dates,onChange:this.handleChange,className:"input"}),Object(a.jsx)("br",{})]}),Object(a.jsx)(m,{schoolName:this.state.schoolName,field:this.state.field,dates:this.state.dates})]})}}]),s}(i.a.Component),x=function(e){Object(o.a)(s,e);var t=Object(u.a)(s);function s(){return Object(h.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"displayActualResults",children:[Object(a.jsxs)("span",{children:["Company: ",this.props.company]}),Object(a.jsx)("br",{}),Object(a.jsxs)("span",{children:["Position: ",this.props.position]}),Object(a.jsx)("br",{}),Object(a.jsxs)("span",{children:["Main Tasks: ",this.props.mainTasks]}),Object(a.jsx)("br",{}),Object(a.jsxs)("span",{children:["Dates: ",this.props.dates]}),Object(a.jsx)("br",{})]})}}]),s}(i.a.Component),y=function(e){Object(o.a)(s,e);var t=Object(u.a)(s);function s(){var e;return Object(h.a)(this,s),(e=t.call(this)).state={company:"",position:"",mainTasks:"",dates:"",status:"Submit"},e.handleChange=e.handleChange.bind(Object(b.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(b.a)(e)),e}return Object(r.a)(s,[{key:"handleChange",value:function(e){this.setState(Object(j.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=document.getElementsByClassName("form"),s=document.getElementsByClassName("displayActualResults"),a=document.getElementById("edit");if("Submit"===this.state.status){for(var n=0;n<t.length;n++)t[n].style.display="none",s[n].style.display="inline";a.style.display="inline",this.setState({status:"Edit"})}else{for(var i=0;i<t.length;i++)s[i].style.display="none",t[i].style.display="inline";a.style.display="none",this.setState({status:"Submit"})}}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Experience"}),Object(a.jsxs)("form",{id:"general",className:"form",onSubmit:this.handleSubmit,children:[Object(a.jsx)("label",{children:"Company: "}),Object(a.jsx)("input",{type:"text",name:"company",value:this.state.company,onChange:this.handleChange,className:"input"}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Position: "}),Object(a.jsx)("input",{type:"text",name:"position",value:this.state.position,onChange:this.handleChange,className:"input"}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Main Tasks: "}),Object(a.jsx)("input",{type:"text",name:"mainTasks",value:this.state.mainTasks,onChange:this.handleChange,className:"input"}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Dates: "}),Object(a.jsx)("input",{type:"text",name:"dates",value:this.state.dates,onChange:this.handleChange,className:"input"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"submit",id:"submit",value:this.state.status})]}),Object(a.jsx)(x,{company:this.state.company,position:this.state.position,mainTasks:this.state.mainTasks,dates:this.state.dates}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{value:"Edit",id:"edit",onClick:this.handleSubmit,children:"Edit"})]})}}]),s}(i.a.Component);var v=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"CV Application"}),Object(a.jsx)(p,{}),Object(a.jsx)(O,{}),Object(a.jsx)(y,{})]})};s(15);l.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.eb13390f.chunk.js.map