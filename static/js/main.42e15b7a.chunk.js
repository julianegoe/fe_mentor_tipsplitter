(this.webpackJsonpfe_mentor_tipsplitter=this.webpackJsonpfe_mentor_tipsplitter||[]).push([[0],[,,,,function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(5),i=n.n(a),l=(n(4),n(2)),r=(n(10),n(11),n(0));var o=function(e){var t=e.icon,n=e.label,s=e.step,a=e.type,i=(e.valueProp,e.handleInput),o=Object(c.useState)(1),u=Object(l.a)(o,2),b=u[0],j=u[1],p=Object(c.useState)(""),d=Object(l.a)(p,2),O=d[0],f=d[1];Object(c.useEffect)((function(){m()&&i(a,b)}));var m=function(){var e="",t=!1;return b<=0?e="please enter a number greater than 0.":t=!0,f(e),t};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"input-container",children:[Object(r.jsx)("label",{className:"input-label",children:n}),Object(r.jsxs)("div",{className:"field-container",children:[Object(r.jsx)("img",{className:"icon",src:t,alt:"icon"}),Object(r.jsx)("input",{type:"number",min:"0",step:s,value:b,onChange:function(e){j(e.target.value)}})]}),Object(r.jsx)("div",{style:{color:"red"},children:O})]})})};n(13);var u=function(e){var t=e.type,n=e.handleInput,s=Object(c.useState)(0),a=Object(l.a)(s,2),i=a[0],o=a[1];return Object(c.useEffect)((function(){n(t,i)}),[t,i,n]),Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"tip-container",children:[Object(r.jsx)("label",{className:"tip-label",children:"Select Tip %"}),Object(r.jsx)("button",{className:"tip-btn",onClick:function(){o(5)},children:"5%"}),Object(r.jsx)("button",{className:"tip-btn",onClick:function(){o(10)},children:"10%"}),Object(r.jsx)("button",{className:"tip-btn",onClick:function(){o(15)},children:"15%"}),Object(r.jsx)("button",{className:"tip-btn",onClick:function(){o(25)},children:"25%"}),Object(r.jsx)("button",{className:"tip-btn",onClick:function(){o(50)},children:"50%"})]})})},b=n.p+"static/media/icon-dollar.9f9be353.svg",j=n.p+"static/media/icon-person.65bfd204.svg";n(14);var p=function(e){e.setOutput;var t=e.bill,n=e.tip,c=e.people,s=e.handleInput;return Object(r.jsxs)("div",{className:"input-wrapper",children:[Object(r.jsx)(o,{type:"dollar",icon:b,label:"Bill",step:"0.01",valueProp:t,handleInput:s}),Object(r.jsx)(u,{type:"tip",tip:n,handleInput:s}),Object(r.jsx)(o,{type:"person",icon:j,label:"Number of People",step:"1",valueProp:c,handleInput:s})]})};n(15);var d=function(e){var t=e.tipPerPerson,n=e.totalPerPerson,c=e.reset;return Object(r.jsxs)("div",{className:"output-container",children:[Object(r.jsxs)("div",{className:"output-label",children:["Tip Amount",Object(r.jsx)("div",{className:"per-person",children:"/ person"})]}),Object(r.jsxs)("div",{className:"output-value",children:["$",t.toFixed(2)]}),Object(r.jsxs)("div",{className:"output-label",children:["Total",Object(r.jsx)("div",{className:"per-person",children:"/ person"})]}),Object(r.jsxs)("div",{className:"output-value",children:["$",n.toFixed(2)]}),Object(r.jsx)("button",{className:"reset-btn",onClick:function(){c()},children:"RESET"})]})},O=n.p+"static/media/logo.3cc0528b.svg";var f=function(){var e=Object(c.useState)(0),t=Object(l.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(0),i=Object(l.a)(a,2),o=i[0],u=i[1],b=Object(c.useState)(0),j=Object(l.a)(b,2),f=j[0],m=j[1],v=Object(c.useState)(0),h=Object(l.a)(v,2),x=h[0],N=h[1],g=Object(c.useState)(1),P=Object(l.a)(g,2),k=P[0],S=P[1];Object(c.useEffect)((function(){var e=f*x/100/k;y(e,f/k+e)}),[f,x,k]);var y=function(e,t){s(e),u(t)};return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("img",{src:O,className:"logo",alt:"logo"}),Object(r.jsxs)("div",{className:"calculator-container",children:[Object(r.jsx)(p,{setOutput:y,bill:f,tip:x,people:k,handleInput:function(e,t){switch(e){case"dollar":m(t);break;case"person":S(t);break;case"tip":N(t);break;default:return}}}),Object(r.jsx)(d,{tipPerPerson:n,totalPerPerson:o,reset:function(){window.location.reload()}})]})]})};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(f,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.42e15b7a.chunk.js.map