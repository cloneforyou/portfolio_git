(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{6:function(e,t,n){e.exports=n(7)},7:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),s=n.n(c),i=n(5),l=n.n(i);n(12);function r(e){for(var t=[],n=0;n<10;n++)t.push(s.a.createElement("span",{className:"single-success anim-num-"+n+" "+e.runAmin},e.emoji));return s.a.createElement("div",{className:"success "+e.class},s.a.createElement("div",{className:"success-wrapper"},t))}function o(e){return s.a.createElement("div",null,s.a.createElement("div",{className:"switch-wrapper"},s.a.createElement("div",{className:"switch switch-"+e.onOff},s.a.createElement("div",{className:"circle "+e.onOff},s.a.createElement("button",{className:e.onOff+" noselect",onClick:function(){"on"===e.onOff?e.sendSwitchState(e.switchId,"off"):(e.sendSwitchState(e.switchId,"on"),e.showAnim(e.switchId))}},e.emoji)))))}function m(e){var t=e.status;return s.a.createElement("div",{className:"sun "+t},s.a.createElement("div",{className:"sun small"}))}function u(e){var t="";return t="win"==e.winHide?"show":"hide",s.a.createElement("div",{className:"win win-"+t},s.a.createElement("div",{className:"win-content"},s.a.createElement("div",{className:"title"},s.a.createElement("h1",{className:"main-icon"},"\ud83d\udc13"),s.a.createElement("h1",null,"Good Morning!")),s.a.createElement("button",{onClick:e.winOnClick},"Start")),s.a.createElement(d,null))}function f(e){var t=["\ud83d\udca9","\ud83d\udc56","\ud83d\udc55","\ud83d\ude2c","\ud83d\udc5f","\ud83e\udde5"],n=Object(c.useState)(Array(t.length).fill("off")),i=Object(a.a)(n,2),l=i[0],f=i[1],d=Object(c.useState)(["off","\u2764\ufe0f"]),w=Object(a.a)(d,2),h=w[0],E=w[1],v=Object(c.useState)(""),b=Object(a.a)(v,2),O=b[0],p=b[1],g=Object(c.useState)("win"),N=Object(a.a)(g,2),j=N[0],S=N[1],k=Object(c.useState)("sun-win"),y=Object(a.a)(k,2),A=y[0],C=y[1],I=Object(c.useState)("list-hide"),T=Object(a.a)(I,2),B=T[0],x=T[1],H=l.map((function(e){return"on"==e})),J={"background-image":"linear-gradient(135deg, #00adff 0%, #009be4 "+(H.filter(Boolean).length/t.length*100).toFixed(1)+"%)"},D=function(e,n){var a=l.slice();a[e]=n,f(a),"on"==n&&H.filter(Boolean).length==t.length-1&&(setTimeout((function(){S("win"),C("sun-win")}),900),setTimeout((function(){x("list-hide")}),1e3))},F=function(e){E(["on",t[e]]),setTimeout((function(){p("run-anim")}),10),setTimeout((function(){E(["off",t[e]]),p("")}),3e3)};return s.a.createElement("div",{className:"list-container",style:J},s.a.createElement(r,{class:"success-"+h[0],emoji:h[1],runAmin:O}),s.a.createElement(u,{winOnClick:function(){S("game"),x("show"),C("sun"),f(Array(t.length).fill("off")),console.log("switchsState is "+l)},winHide:j}),s.a.createElement("div",{className:"list "+B},t.map((function(e,t){return s.a.createElement(o,{emoji:e,onOff:l[t],sendSwitchState:D,switchId:t,showAnim:F})}))),s.a.createElement(m,{status:A}))}function d(e){return s.a.createElement("div",{className:"footer"},s.a.createElement("p",null,"Created with \u2764\ufe0f by ",s.a.createElement("a",{href:"http://www.dordesign.com",target:"_blank"},"Dor")))}l.a.render(s.a.createElement((function(e){return s.a.createElement("div",{className:"app"},s.a.createElement(f,null))}),null),document.getElementById("root"))}},[[6,1,2]]]);
//# sourceMappingURL=main.39c0de6e.chunk.js.map