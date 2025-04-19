"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[875],{9062:function(e,r,t){t.d(r,{Z:function(){return w}});var a=t(7294),i=t(512),s=t(4780),o=t(917),n=t(3221),l=t(3065),c=t(8628),u=t(8216),d=t(902),m=t(1588),v=t(4867);function p(e){return(0,v.ZP)("MuiCircularProgress",e)}(0,m.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var f=t(5893);const h=44,Z=o.F4`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,g=o.F4`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`,y="string"!=typeof Z?o.iv`
        animation: ${Z} 1.4s linear infinite;
      `:null,k="string"!=typeof g?o.iv`
        animation: ${g} 1.4s ease-in-out infinite;
      `:null,x=(0,n.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],r[`color${(0,u.Z)(t.color)}`]]}})((0,l.Z)((({theme:e})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("transform")}},{props:{variant:"indeterminate"},style:y||{animation:`${Z} 1.4s linear infinite`}},...Object.entries(e.palette).filter((0,d.Z)()).map((([r])=>({props:{color:r},style:{color:(e.vars||e).palette[r].main}})))]})))),b=(0,n.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),S=(0,n.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.circle,r[`circle${(0,u.Z)(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})((0,l.Z)((({theme:e})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink,style:k||{animation:`${g} 1.4s ease-in-out infinite`}}]}))));var w=a.forwardRef((function(e,r){const t=(0,c.i)({props:e,name:"MuiCircularProgress"}),{className:a,color:o="primary",disableShrink:n=!1,size:l=40,style:d,thickness:m=3.6,value:v=0,variant:Z="indeterminate",...g}=t,y={...t,color:o,disableShrink:n,size:l,thickness:m,value:v,variant:Z},k=(e=>{const{classes:r,variant:t,color:a,disableShrink:i}=e,o={root:["root",t,`color${(0,u.Z)(a)}`],svg:["svg"],circle:["circle",`circle${(0,u.Z)(t)}`,i&&"circleDisableShrink"]};return(0,s.Z)(o,p,r)})(y),w={},P={},C={};if("determinate"===Z){const e=2*Math.PI*((h-m)/2);w.strokeDasharray=e.toFixed(3),C["aria-valuenow"]=Math.round(v),w.strokeDashoffset=`${((100-v)/100*e).toFixed(3)}px`,P.transform="rotate(-90deg)"}return(0,f.jsx)(x,{className:(0,i.Z)(k.root,a),style:{width:l,height:l,...P,...d},ownerState:y,ref:r,role:"progressbar",...C,...g,children:(0,f.jsx)(b,{className:k.svg,ownerState:y,viewBox:"22 22 44 44",children:(0,f.jsx)(S,{className:k.circle,style:w,ownerState:y,cx:h,cy:h,r:(h-m)/2,fill:"none",strokeWidth:m})})})}))},667:function(e,r,t){t.r(r);var a=t(7294),i=t(4854),s=t(3176),o=t(2728),n=t(5116),l=t(2574),c=t(3972),u=t(9062),d=t(6186),m=t(9649),v=t(917);r.default=()=>{const{login:e}=(0,m.Z)(),{0:r,1:t}=(0,a.useState)(""),{0:p,1:f}=(0,a.useState)(""),{0:h,1:Z}=(0,a.useState)(!1),{0:g,1:y}=(0,a.useState)("");return(0,v.tZ)(s.Z,null,(0,v.tZ)(o.Z,{sx:{maxWidth:400,mx:"auto",mt:8,px:3}},(0,v.tZ)(c.Z,{variant:"h4",component:"h1",align:"center",gutterBottom:!0},"Login"),g&&(0,v.tZ)(d.Z,{severity:"error",sx:{mb:2}},g),(0,v.tZ)("form",{onSubmit:async t=>{t.preventDefault(),Z(!0),y("");try{await e(r,p),(0,i.navigate)("/")}catch(a){console.error("Login error:",a),y(a.message||"Login failed. Please try again.")}finally{Z(!1)}}},(0,v.tZ)(n.Z,{fullWidth:!0,type:"email",label:"Email",variant:"outlined",value:r,onChange:e=>t(e.target.value),sx:{mb:2},required:!0}),(0,v.tZ)(n.Z,{fullWidth:!0,type:"password",label:"Password",variant:"outlined",value:p,onChange:e=>f(e.target.value),sx:{mb:3},required:!0}),(0,v.tZ)(l.Z,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:h,sx:{py:1.5}},h?(0,v.tZ)(u.Z,{size:24}):"Login")),(0,v.tZ)(o.Z,{sx:{mt:2,textAlign:"center"}},(0,v.tZ)(c.Z,{variant:"body2"},"Forgot your password? ",(0,v.tZ)("a",{href:"/resetPassword"},"Reset")),(0,v.tZ)(c.Z,{variant:"body2",sx:{mt:1}},"Not registered? ",(0,v.tZ)("a",{href:"/register"},"Create account")))))}}}]);
//# sourceMappingURL=component---src-pages-login-js-ec1eada5510d3762a111.js.map