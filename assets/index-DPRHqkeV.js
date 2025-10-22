import{r as h,T as Xr,j as e,i as j,R as pe,t as Be,a as xr,b as Gr}from"./theme-Bzv_a8K7.js";import{a as Kr,g as Qr}from"./vendor-D3F3s8fL.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))m(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const v of c.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&m(v)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function m(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();var We={},gr;function Yr(){if(gr)return We;gr=1;var s=Kr();return We.createRoot=s.createRoot,We.hydrateRoot=s.hydrateRoot,We}var _r=Yr();const Jr=Qr(_r);function Z(){const s=h.useContext(Xr);if(s===void 0)throw new Error("useTheme must be used within a ThemeProvider");return s}const V=h.forwardRef(({variant:s="primary",size:i="md",underline:n="hover",external:m=!1,disabled:a=!1,className:c="",children:v,href:b,target:w,rel:g,...x},P)=>{const{theme:y}=Z(),W={display:"inline-flex",alignItems:"center",gap:"var(--space-xs)",fontFamily:"var(--font-family)",fontWeight:"var(--font-weight-medium)",textDecoration:n==="always"?"underline":"none",transition:"var(--transition-base)",cursor:a?"not-allowed":"pointer",opacity:a?.6:1,pointerEvents:a?"none":"auto"},R={primary:{color:"var(--text-primary)"},secondary:{color:"var(--text-secondary)"},accent:{color:"var(--accent-500)"},muted:{color:"var(--text-muted)"}},N={sm:{fontSize:"var(--font-size-sm)"},md:{fontSize:"var(--font-size-base)"},lg:{fontSize:"var(--font-size-lg)"}},U={textDecoration:n==="hover"?"underline":void 0,color:s==="accent"?"var(--accent-600)":"var(--text-accent)"},D={...W,...R[s],...N[i]},I=m?"_blank":w,$=m?"noopener noreferrer":g;return e.jsxs("a",{ref:P,href:a?void 0:b,target:I,rel:$,style:D,className:c,onMouseEnter:B=>{!a&&n==="hover"&&Object.assign(B.currentTarget.style,U)},onMouseLeave:B=>{a||Object.assign(B.currentTarget.style,D)},...x,children:[v,m&&e.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{marginLeft:"2px"},children:[e.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),e.jsx("polyline",{points:"15,3 21,3 21,9"}),e.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]})]})});V.displayName="Link";const C=h.forwardRef(({variant:s="primary",size:i="md",shape:n="rounded",fullWidth:m=!1,loading:a=!1,disabled:c=!1,leftIcon:v,rightIcon:b,className:w="",children:g,...x},P)=>{const{theme:y}=Z(),W={display:"inline-flex",alignItems:"center",justifyContent:"center",gap:n==="circle"?"0":"var(--space-xs)",fontFamily:"var(--font-family)",fontWeight:"var(--font-weight-medium)",border:"1px solid transparent",transition:"var(--transition-base)",cursor:c||a?"not-allowed":"pointer",opacity:c?.6:1,width:m?"100%":"auto",position:"relative",overflow:"hidden",textAlign:"center",whiteSpace:n==="circle"?"nowrap":"normal"},R={primary:{backgroundColor:"var(--btn-primary-bg)",color:"var(--btn-primary-text)",borderColor:"var(--btn-primary-bg)"},secondary:{backgroundColor:"var(--btn-bg)",color:"var(--btn-text)",borderColor:"var(--btn-border)"},outline:{backgroundColor:"transparent",color:"var(--btn-text)",borderColor:"var(--btn-border)"},ghost:{backgroundColor:"transparent",color:"var(--btn-text)",borderColor:"transparent"},danger:{backgroundColor:"var(--error-color)",color:"white",borderColor:"var(--error-color)"}},N={sm:{padding:"var(--space-xs) var(--space-sm)",fontSize:"var(--font-size-sm)",minHeight:"calc(var(--font-size-sm) + var(--space-md))"},md:{padding:"var(--space-sm) var(--space-md)",fontSize:"var(--font-size-base)",minHeight:"calc(var(--font-size-base) + var(--space-lg))"},lg:{padding:"var(--space-md) var(--space-lg)",fontSize:"var(--font-size-lg)",minHeight:"calc(var(--font-size-lg) + var(--space-xl))"}},U={rounded:{borderRadius:"var(--radius-md)"},pill:{borderRadius:"9999px"},square:{borderRadius:"0"},circle:{borderRadius:"50%",aspectRatio:"1",padding:"0",minWidth:n==="circle"&&i==="sm"?"2rem":n==="circle"&&i==="md"?"2.5rem":n==="circle"&&i==="lg"?"3rem":"auto",width:n==="circle"&&i==="sm"?"2rem":n==="circle"&&i==="md"?"2.5rem":n==="circle"&&i==="lg"?"3rem":"auto",height:n==="circle"&&i==="sm"?"2rem":n==="circle"&&i==="md"?"2.5rem":n==="circle"&&i==="lg"?"3rem":"auto"}},D=p=>{switch(p){case"primary":return{backgroundColor:"var(--btn-primary-bg-hover)"};case"secondary":return{backgroundColor:"var(--btn-bg-hover)"};case"outline":return{backgroundColor:"var(--btn-bg-hover)"};case"ghost":return{backgroundColor:"var(--bg-hover)"};case"danger":return{backgroundColor:"var(--error-color)",filter:"brightness(0.9)"};default:return{}}},I=p=>{switch(p){case"primary":return{backgroundColor:"var(--btn-primary-bg-active)"};case"secondary":return{backgroundColor:"var(--btn-bg-active)"};case"outline":return{backgroundColor:"var(--btn-bg-active)"};case"ghost":return{backgroundColor:"var(--bg-active)"};case"danger":return{backgroundColor:"var(--error-color)",filter:"brightness(0.8)"};default:return{}}},$={...W,...R[s],...N[i],...U[n]},B=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{animation:"spin 1s linear infinite"},children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"M12 2 A10 10 0 0 1 22 12"})]});return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}),e.jsxs("button",{ref:P,disabled:c||a,style:$,className:w,onMouseEnter:p=>{!c&&!a&&Object.assign(p.currentTarget.style,{...$,...D(s)})},onMouseLeave:p=>{!c&&!a&&Object.assign(p.currentTarget.style,$)},onMouseDown:p=>{!c&&!a&&Object.assign(p.currentTarget.style,{...$,...I(s)})},onMouseUp:p=>{!c&&!a&&Object.assign(p.currentTarget.style,{...$,...D(s)})},...x,children:[a&&e.jsx(B,{}),v&&!a&&v,g,b&&!a&&b]})]})});C.displayName="Button";const O=h.forwardRef(({size:s="md",variant:i="default",type:n="default",isInvalid:m=!1,disabled:a=!1,leftIcon:c,rightIcon:v,label:b,helperText:w,errorMessage:g,className:x="",id:P,enableValidation:y=!0,showValidationIcon:W=!0,showPasswordToggle:R=!0,onFocus:N,onBlur:U,onChange:D,value:I,...$},B)=>{const{theme:p}=Z(),[k,Q]=h.useState(!1),[M,se]=h.useState(!1),[z,ne]=h.useState(!1),[te,X]=h.useState(""),[ee,re]=h.useState(null),ze=m||!!g||!!te,xe=P||`input-${Math.random().toString(36).substr(2,9)}`;h.useEffect(()=>{if(y&&I){let T={isValid:!0,error:""};n==="email"?T=ae(I.toString()):n==="password"&&(T=ge(I.toString())),re(T.isValid),T.isValid||X(T.error)}},[]);const ae=T=>T?/^[^\s@]+@[^\s@]+\.(com|org|net|edu|gov|mil|int|co|io|me|info|biz|name|museum|coop|aero|[a-z]{2,3})$/i.test(T)?{isValid:!0,error:""}:{isValid:!1,error:"Please enter a valid email address"}:{isValid:!1,error:""},ge=T=>{if(!T)return{isValid:!1,error:""};if(T.length<6)return{isValid:!1,error:"Password must be at least 6 characters"};if(T.length<8)return{isValid:!0,error:""};const G=/[A-Z]/.test(T),K=/[a-z]/.test(T),E=/\d/.test(T),J=/[!@#$%^&*(),.?":{}|<>]/.test(T);return G&&K&&E&&J?{isValid:!0,error:""}:{isValid:!0,error:""}},Se=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),qe=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),e.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}),ve=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("polyline",{points:"20,6 9,17 4,12"})}),ue=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),er=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),e.jsx("polyline",{points:"22,6 12,13 2,6"})]}),rr=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),e.jsx("circle",{cx:"12",cy:"16",r:"1"}),e.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),Ce=()=>{let T=j.inputBorder,G="none";return ze?(T=j.errorColor,k&&(G=`0 0 0 2px ${j.errorLight}`)):k?(T=j.inputBorderFocus,G=`0 0 0 2px ${j.focusRing}`):M&&!a&&(T=j.inputBorderHover),{display:"flex",alignItems:"center",borderRadius:i==="flushed"?"0":j.radiusMd,borderWidth:"1px",borderStyle:"solid",borderColor:T,backgroundColor:i==="filled"?j.bgElevated:j.inputBg,borderBottomWidth:i==="flushed"?"2px":"1px",borderTopWidth:i==="flushed"?"0":"1px",borderLeftWidth:i==="flushed"?"0":"1px",borderRightWidth:i==="flushed"?"0":"1px",paddingLeft:c?j.spaceXs:j.spaceSm,paddingRight:v?j.spaceXs:j.spaceSm,paddingTop:j.spaceXs,paddingBottom:j.spaceXs,boxShadow:G,transition:j.transitionBase,..._[s]}},Xe={flex:1,border:"none",outline:"none",backgroundColor:"transparent",color:j.inputText,fontSize:j.fontSizeBase,fontFamily:"inherit",padding:"0",margin:c||v?`0 ${j.spaceXs}`:"0"},_={sm:{minHeight:`calc(${j.fontSizeSm} + ${j.spaceMd})`,fontSize:j.fontSizeSm},md:{minHeight:`calc(${j.fontSizeBase} + ${j.spaceLg})`,fontSize:j.fontSizeBase},lg:{minHeight:`calc(${j.fontSizeLg} + ${j.spaceXl})`,fontSize:j.fontSizeLg}},Ge=()=>n==="password"?z?"text":"password":n==="email"?"email":n==="default"?"text":n,ie=()=>c||(n==="email"?e.jsx(er,{}):n==="password"?e.jsx(rr,{}):null),Ke=()=>n==="email"?"Enter your email address":n==="password"?"Enter your password":"",de=({password:T})=>{const K=(E=>{if(E.length<6)return{level:0,text:"Too short",color:j.errorColor};let J=0;return E.length>=8&&J++,/[A-Z]/.test(E)&&J++,/[a-z]/.test(E)&&J++,/\d/.test(E)&&J++,/[!@#$%^&*(),.?":{}|<>]/.test(E)&&J++,J<2?{level:1,text:"Weak",color:j.errorColor}:J<4?{level:2,text:"Fair",color:j.warningColor}:J<5?{level:3,text:"Good",color:j.info}:{level:4,text:"Strong",color:j.successColor}})(T);return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:j.spaceSm},children:[e.jsx("div",{style:{flex:1,height:"4px",backgroundColor:j.gray200,borderRadius:"2px",overflow:"hidden"},children:e.jsx("div",{style:{height:"100%",width:`${K.level/4*100}%`,backgroundColor:K.color,transition:j.transitionBase}})}),e.jsx("span",{style:{color:K.color,minWidth:"60px",fontSize:j.fontSizeXs,fontWeight:j.fontWeightMedium},children:K.text})]})},Me=()=>{const T=[];return y&&W&&I&&(ee===!0?T.push(e.jsxs("div",{style:{color:"#10b981"},children:[" ",e.jsx(ve,{})]},"validation")):ee===!1&&T.push(e.jsxs("div",{style:{color:"#ef4444"},children:[" ",e.jsx(ue,{})]},"validation"))),n==="password"&&R&&T.push(e.jsx("button",{type:"button",onClick:()=>ne(!z),style:{background:"none",border:"none",cursor:"pointer",padding:"0.25rem",display:"flex",alignItems:"center",color:j.textMuted,borderRadius:j.radiusSm},tabIndex:-1,children:z?e.jsx(qe,{}):e.jsx(Se,{})},"password-toggle")),v&&T.push(e.jsx("div",{children:v},"custom")),T.length>0?e.jsx("div",{style:{display:"flex",alignItems:"center",gap:j.spaceXs},children:T}):null},Qe=T=>{if(Q(!0),y&&n==="email"&&I){const G=ae(I.toString());re(G.isValid),G.isValid||X(G.error)}N?.(T)},ke=T=>{if(Q(!1),y&&I){let G={isValid:!0,error:""};n==="email"?G=ae(I.toString()):n==="password"&&(G=ge(I.toString())),re(G.isValid),X(G.error)}U?.(T)},Te=T=>{const G=T.target.value;if(y)if(G){let K={isValid:!0,error:""};n==="email"?(K=ae(G),re(K.isValid),K.isValid?X(""):X(K.error)):n==="password"?(K=ge(G),re(K.isValid),K.isValid?X(""):X(K.error)):(re(!0),X(""))}else re(null),X("");D?.(T)},le=()=>{a||se(!0)},ce=()=>{se(!1)};return e.jsxs("div",{className:x,children:[b&&e.jsx("label",{htmlFor:xe,style:{display:"block",fontSize:j.fontSizeSm,fontWeight:j.fontWeightMedium,color:j.textPrimary,marginBottom:j.spaceXs},children:b}),e.jsxs("div",{style:Ce(),onMouseEnter:le,onMouseLeave:ce,children:[ie()&&e.jsx("div",{style:{display:"flex",alignItems:"center",color:j.textMuted,fontSize:_[s].fontSize},children:ie()}),e.jsx("input",{ref:B,id:xe,type:Ge(),disabled:a,value:I,onFocus:Qe,onBlur:ke,onChange:Te,style:{...Xe,..._[s],opacity:a?.6:1,cursor:a?"not-allowed":"text"},placeholder:$.placeholder||Ke(),...$}),Me()&&e.jsx("div",{style:{display:"flex",alignItems:"center",color:j.textMuted,fontSize:_[s].fontSize},children:Me()})]}),(w||g||te)&&e.jsx("div",{style:{marginTop:j.spaceXs,fontSize:j.fontSizeSm,color:ze?j.errorColor:j.textSecondary},children:g||te||w}),n==="password"&&I&&y&&e.jsx("div",{style:{marginTop:j.spaceXs},children:e.jsx(de,{password:I.toString()})})]})});O.displayName="Input";const o=h.forwardRef(({variant:s="elevated",padding:i="md",radius:n="md",shadow:m="md",hoverable:a=!1,className:c="",children:v,...b},w)=>{const{theme:g}=Z(),x={display:"flex",flexDirection:"column",position:"relative",transition:"var(--transition-base)",cursor:a?"pointer":"default"},P={elevated:{backgroundColor:"var(--bg-surface)",border:"none"},outlined:{backgroundColor:"var(--bg-surface)",border:"1px solid var(--border-color)"},filled:{backgroundColor:"var(--bg-elevated)",border:"none"}},y={none:{padding:"0"},sm:{padding:"var(--space-sm)"},md:{padding:"var(--space-md)"},lg:{padding:"var(--space-lg)"}},W={none:{borderRadius:"0"},sm:{borderRadius:"var(--radius-sm)"},md:{borderRadius:"var(--radius-md)"},lg:{borderRadius:"var(--radius-lg)"}},R={none:{boxShadow:"none"},sm:{boxShadow:"var(--shadow-sm)"},md:{boxShadow:"var(--shadow-md)"},lg:{boxShadow:"var(--shadow-lg)"}},N=a?{transform:"translateY(-1px)",boxShadow:m!=="none"?"var(--shadow-lg)":"var(--shadow-md)"}:{},U={...x,...P[s],...y[i],...W[n],...R[m]};return e.jsx("div",{ref:w,style:U,className:c,onMouseEnter:D=>{a&&Object.assign(D.currentTarget.style,{...U,...N})},onMouseLeave:D=>{a&&Object.assign(D.currentTarget.style,U)},...b,children:v})});o.displayName="Card";const A=h.forwardRef(({className:s="",children:i,...n},m)=>e.jsx("div",{ref:m,style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"var(--space-md)",paddingBottom:"var(--space-sm)",borderBottom:"1px solid var(--border-light)"},className:s,...n,children:i}));A.displayName="CardHeader";const d=h.forwardRef(({className:s="",children:i,...n},m)=>e.jsx("div",{ref:m,style:{flex:1},className:s,...n,children:i}));d.displayName="CardBody";const $e=h.forwardRef(({className:s="",children:i,...n},m)=>e.jsx("div",{ref:m,style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"var(--space-sm)",marginTop:"var(--space-md)",paddingTop:"var(--space-sm)",borderTop:"1px solid var(--border-light)"},className:s,...n,children:i}));$e.displayName="CardFooter";const l=({variant:s="default",size:i="md",shape:n="rounded",dot:m=!1,children:a,className:c=""})=>{const v={display:"inline-flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--font-family)",fontWeight:"var(--font-weight-medium)",lineHeight:1,whiteSpace:"nowrap",verticalAlign:"middle",transition:"var(--transition-base)"},b={default:{backgroundColor:"var(--gray-100)",color:"var(--gray-800)"},primary:{backgroundColor:"var(--accent-500)",color:"white"},secondary:{backgroundColor:"var(--gray-500)",color:"white"},success:{backgroundColor:"var(--success-color)",color:"white"},warning:{backgroundColor:"var(--warning-color)",color:"white"},error:{backgroundColor:"var(--error-color)",color:"white"},info:{backgroundColor:"var(--info)",color:"white"}},w={sm:{fontSize:"var(--font-size-xs)",padding:m?"0":"var(--space-xs) var(--space-sm)",minWidth:m?"var(--space-sm)":"auto",height:m?"var(--space-sm)":"calc(var(--font-size-xs) + var(--space-xs) * 2)"},md:{fontSize:"var(--font-size-sm)",padding:m?"0":"var(--space-xs) var(--space-md)",minWidth:m?"var(--space-md)":"auto",height:m?"var(--space-md)":"calc(var(--font-size-sm) + var(--space-sm))"},lg:{fontSize:"var(--font-size-base)",padding:m?"0":"var(--space-sm) var(--space-lg)",minWidth:m?"var(--space-lg)":"auto",height:m?"var(--space-lg)":"calc(var(--font-size-base) + var(--space-md))"}},g={rounded:{borderRadius:"var(--radius-sm)"},pill:{borderRadius:"9999px"},square:{borderRadius:"0"}},x=m?{borderRadius:"50%",padding:"0"}:{},P={...v,...b[s],...w[i],...g[n],...x};return h.createElement("span",{style:P,className:c},m?null:a)},r=h.forwardRef(({as:s="p",size:i="md",weight:n="normal",color:m="primary",align:a="left",truncate:c=!1,lineClamp:v,className:b="",children:w,style:g,...x},P)=>{const{theme:y}=Z(),W=s,R={margin:0,fontFamily:"var(--font-family)",lineHeight:1.5,textAlign:a},N={xs:{fontSize:"var(--font-size-xs)"},sm:{fontSize:"var(--font-size-sm)"},md:{fontSize:"var(--font-size-base)"},lg:{fontSize:"var(--font-size-lg)"},xl:{fontSize:"var(--font-size-xl)"},"2xl":{fontSize:"var(--font-size-2xl)"},"3xl":{fontSize:"var(--font-size-3xl)"}},U={normal:{fontWeight:"var(--font-weight-normal)"},medium:{fontWeight:"var(--font-weight-medium)"},semibold:{fontWeight:"var(--font-weight-semibold)"},bold:{fontWeight:"var(--font-weight-bold)"}},D={primary:{color:"var(--text-primary)"},secondary:{color:"var(--text-secondary)"},tertiary:{color:"var(--text-tertiary)"},muted:{color:"var(--text-muted)"},accent:{color:"var(--text-accent)"},success:{color:"var(--success-color)"},warning:{color:"var(--warning-color)"},error:{color:"var(--error-color)"},info:{color:"var(--info)"}},I=c?{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}:{},$=v?{display:"-webkit-box",WebkitLineClamp:v,WebkitBoxOrient:"vertical",overflow:"hidden",textOverflow:"ellipsis"}:{},B={h1:{fontSize:"var(--font-size-3xl)",fontWeight:"var(--font-weight-bold)",lineHeight:1.2,marginBottom:"var(--space-lg)"},h2:{fontSize:"var(--font-size-2xl)",fontWeight:"var(--font-weight-bold)",lineHeight:1.3,marginBottom:"var(--space-md)"},h3:{fontSize:"var(--font-size-xl)",fontWeight:"var(--font-weight-semibold)",lineHeight:1.3,marginBottom:"var(--space-md)"},h4:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",lineHeight:1.4,marginBottom:"var(--space-sm)"},h5:{fontSize:"var(--font-size-base)",fontWeight:"var(--font-weight-semibold)",lineHeight:1.4,marginBottom:"var(--space-sm)"},h6:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-semibold)",lineHeight:1.4,marginBottom:"var(--space-sm)"}},k=["h1","h2","h3","h4","h5","h6"].includes(s)?B[s]:{},Q={...R,...k,...N[i],...U[n],...D[m],...I,...$,...g};return e.jsx(W,{ref:P,style:Q,className:b,...x,children:w})});r.displayName="Text";const L=h.forwardRef(({size:s="md",variant:i="primary",thickness:n="medium",speed:m="normal",className:a="",...c},v)=>{const{theme:b}=Z(),w={display:"inline-block",borderRadius:"50%",borderStyle:"solid",animation:`spin ${m==="slow"?"1.5s":m==="fast"?"0.6s":"0.8s"} linear infinite`,filter:"drop-shadow(0 0 2px rgba(0, 0, 0, 0.1))"},g={xs:{width:"12px",height:"12px"},sm:{width:"16px",height:"16px"},md:{width:"24px",height:"24px"},lg:{width:"32px",height:"32px"},xl:{width:"48px",height:"48px"}},x={thin:{borderWidth:"2px"},medium:{borderWidth:"3px"},thick:{borderWidth:"4px"}},P={primary:{borderColor:"rgba(128, 128, 128, 0.2)",borderTopColor:"var(--accent-500)",borderRightColor:"var(--accent-500)"},secondary:{borderColor:"rgba(128, 128, 128, 0.2)",borderTopColor:"var(--text-secondary)",borderRightColor:"var(--text-secondary)"},accent:{borderColor:"rgba(128, 128, 128, 0.2)",borderTopColor:"var(--accent-500)",borderRightColor:"var(--accent-600)"},success:{borderColor:"rgba(128, 128, 128, 0.2)",borderTopColor:"var(--success)",borderRightColor:"var(--success)"},warning:{borderColor:"rgba(128, 128, 128, 0.2)",borderTopColor:"var(--warning)",borderRightColor:"var(--warning)"},error:{borderColor:"rgba(128, 128, 128, 0.2)",borderTopColor:"var(--error)",borderRightColor:"var(--error)"}},y={...w,...g[s],...x[n],...P[i]};return pe.useEffect(()=>{const W="spinner-keyframes";if(!document.getElementById(W)){const R=document.createElement("style");R.id=W,R.textContent=`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `,document.head.appendChild(R)}},[]),e.jsx("div",{ref:v,style:y,className:a,role:"status","aria-label":"Loading",...c})});L.displayName="Spinner";const S=h.forwardRef(({type:s="dots",size:i="md",variant:n="primary",speed:m="normal",text:a,textPosition:c="right",className:v="",...b},w)=>{const{theme:g}=Z(),x=m==="slow"?"1.5s":m==="fast"?"0.8s":"1.2s",y={xs:{dotSize:"4px",gap:"2px",fontSize:"12px"},sm:{dotSize:"6px",gap:"3px",fontSize:"14px"},md:{dotSize:"8px",gap:"4px",fontSize:"16px"},lg:{dotSize:"10px",gap:"5px",fontSize:"18px"},xl:{dotSize:"12px",gap:"6px",fontSize:"20px"}}[i],R={primary:"var(--text-primary)",secondary:"var(--text-secondary)",accent:"var(--accent-500)",success:"var(--success)",warning:"var(--warning)",error:"var(--error)"}[n],N={display:"inline-flex",alignItems:"center",gap:"var(--space-sm)",fontFamily:"var(--font-family)",fontSize:y.fontSize,color:R},U={color:R,fontSize:y.fontSize,fontWeight:"var(--font-weight-medium)"},D=()=>{if(!a)return{flexDirection:"row"};switch(c){case"left":return{flexDirection:"row"};case"right":return{flexDirection:"row"};case"top":return{flexDirection:"column",alignItems:"center"};case"bottom":return{flexDirection:"column",alignItems:"center"};default:return{flexDirection:"row"}}};pe.useEffect(()=>{const B="loading-indicator-keyframes";if(!document.getElementById(B)){const p=document.createElement("style");p.id=B,p.textContent=`
        @keyframes bouncing-dots {
          0%, 80%, 100% { transform: scale(0.8); opacity: 0.5; }
          40% { transform: scale(1.2); opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        @keyframes wave {
          0%, 40%, 100% { transform: scaleY(0.4); }
          20% { transform: scaleY(1); }
        }
        @keyframes bars {
          0%, 40%, 100% { transform: scaleY(0.4); opacity: 0.5; }
          20% { transform: scaleY(1); opacity: 1; }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-8px); }
          60% { transform: translateY(-4px); }
        }
      `,document.head.appendChild(p)}},[]);const I=()=>{const B={width:y.dotSize,height:y.dotSize,backgroundColor:R,borderRadius:"50%",display:"inline-block",marginRight:y.gap},p={width:y.dotSize,height:`calc(${y.dotSize} * 2)`,backgroundColor:R,borderRadius:y.dotSize,display:"inline-block",marginRight:y.gap};switch(s){case"dots":return e.jsx("div",{style:{display:"flex",alignItems:"center",gap:y.gap},children:[0,1,2].map(k=>e.jsx("div",{style:{...B,animation:`bouncing-dots ${x} infinite`,animationDelay:`${k*.2}s`}},k))});case"pulse":return e.jsx("div",{style:{display:"flex",alignItems:"center",gap:y.gap},children:[0,1,2,3].map(k=>e.jsx("div",{style:{...B,animation:`pulse ${x} infinite`,animationDelay:`${k*.15}s`}},k))});case"wave":return e.jsx("div",{style:{display:"flex",alignItems:"center",gap:y.gap},children:[0,1,2,3,4].map(k=>e.jsx("div",{style:{...p,animation:`wave ${x} infinite`,animationDelay:`${k*.1}s`}},k))});case"bars":return e.jsx("div",{style:{display:"flex",alignItems:"end",gap:y.gap},children:[0,1,2,3].map(k=>e.jsx("div",{style:{width:y.dotSize,height:`calc(${y.dotSize} * ${1.5+Math.sin(k)*.5})`,backgroundColor:R,borderRadius:`${y.dotSize} ${y.dotSize} 0 0`,animation:`bars ${x} infinite`,animationDelay:`${k*.1}s`}},k))});case"bounce":return e.jsx("div",{style:{display:"flex",alignItems:"center",gap:y.gap},children:[0,1,2].map(k=>e.jsx("div",{style:{...B,animation:`bounce ${x} infinite`,animationDelay:`${k*.1}s`}},k))});default:return I()}},$=()=>{const B=I();if(!a)return B;const p=e.jsx("span",{style:U,children:a});switch(c){case"left":return e.jsxs(e.Fragment,{children:[p,B]});case"right":return e.jsxs(e.Fragment,{children:[B,p]});case"top":return e.jsxs(e.Fragment,{children:[p,B]});case"bottom":return e.jsxs(e.Fragment,{children:[B,p]});default:return e.jsxs(e.Fragment,{children:[B,p]})}};return e.jsx("div",{ref:w,style:{...N,...D()},className:v,role:"status","aria-label":a?`${a}...`:"Loading",...b,children:$()})});S.displayName="LoadingIndicator";const H=h.forwardRef(({variant:s="default",shape:i="square",size:n="md",fit:m="cover",loading:a="lazy",showSpinner:c=!0,fallback:v,className:b="",src:w,alt:g,onLoad:x,onError:P,...y},W)=>{const{theme:R}=Z(),[N,U]=h.useState(!0),[D,I]=h.useState(!1),$={display:"block",objectFit:m,transition:"var(--transition-base)",backgroundColor:"var(--bg-surface)"},B={xs:{width:"32px",height:"32px"},sm:{width:"48px",height:"48px"},md:{width:"96px",height:"96px"},lg:{width:"128px",height:"128px"},xl:{width:"192px",height:"192px"},full:{width:"100%",height:"auto"}},p={square:{borderRadius:"0"},rounded:{borderRadius:"var(--radius-lg)"},circle:{borderRadius:"50%",aspectRatio:"1"},pill:{borderRadius:"var(--radius-full)",aspectRatio:"2/1"}},k={default:{border:"1px solid transparent"},bordered:{border:"3px solid var(--accent-500)",padding:"2px"},shadow:{boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)",border:"1px solid var(--border-color)"},elevated:{boxShadow:"0 8px 25px rgba(0, 0, 0, 0.25)",transform:"translateY(-4px)",border:"1px solid var(--border-color)"},"hover-lift":{cursor:"pointer",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",border:"2px solid var(--border-color)",transform:"translateY(0px) scale(1)",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.1)"}},Q={...$,...B[n],...p[i],...k[s]},M={position:"relative",display:"inline-block",...B[n],...p[i]},se={position:"absolute",top:0,left:0,right:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"var(--bg-surface)",borderRadius:p[i].borderRadius,opacity:N?1:0,pointerEvents:N?"auto":"none",transition:"var(--transition-base)"},z={...M,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"var(--bg-surface)",border:"2px dashed var(--border-color)",color:"var(--text-secondary)",fontSize:"var(--font-size-sm)",textAlign:"center",padding:"var(--space-sm)"},ne=X=>{U(!1),I(!1),x?.(X)},te=X=>{U(!1),I(!0),P?.(X)};return D&&v?e.jsx("div",{style:z,className:b,children:v}):D?e.jsxs("div",{style:z,className:b,children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}),e.jsx("circle",{cx:"9",cy:"9",r:"2"}),e.jsx("path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"})]}),e.jsx("div",{style:{marginTop:"4px",fontSize:"10px"},children:"Failed to load"})]}):e.jsxs("div",{style:M,className:b,children:[e.jsx("img",{ref:W,src:w,alt:g,loading:a,style:Q,onLoad:ne,onError:te,onMouseEnter:X=>{s==="hover-lift"&&Object.assign(X.currentTarget.style,{transform:"translateY(-8px) scale(1.05)",boxShadow:"0 12px 30px rgba(0, 0, 0, 0.3)",borderColor:"var(--accent-500)"})},onMouseLeave:X=>{s==="hover-lift"&&Object.assign(X.currentTarget.style,{transform:"translateY(0px) scale(1)",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.1)",borderColor:"var(--border-color)"})},...y}),c&&e.jsx("div",{style:se,children:e.jsx(L,{size:"sm",variant:"secondary"})})]})});H.displayName="Image";const f=h.forwardRef(({leftIcon:s,rightIcon:i,disabled:n=!1,destructive:m=!1,className:a="",children:c,...v},b)=>{const{theme:w}=Z(),g={display:"flex",alignItems:"center",gap:"var(--space-xs)",width:"100%",padding:"var(--space-xs) var(--space-sm)",border:"none",backgroundColor:"transparent",color:m?"var(--error-color)":"var(--text-primary)",fontSize:"var(--font-size-sm)",fontFamily:"var(--font-family)",textAlign:"left",cursor:n?"not-allowed":"pointer",opacity:n?.6:1,transition:"var(--transition-fast)",outline:"none"},x={backgroundColor:m?"var(--error-light)":"var(--bg-hover)"},P={backgroundColor:m?"var(--error-light)":"var(--bg-hover)",boxShadow:`inset 0 0 0 1px ${m?"var(--error-color)":"var(--focus-ring)"}`};return e.jsxs("button",{ref:b,disabled:n,style:g,className:a,onMouseEnter:y=>{n||Object.assign(y.currentTarget.style,{...g,...x})},onMouseLeave:y=>{n||Object.assign(y.currentTarget.style,g)},onFocus:y=>{n||Object.assign(y.currentTarget.style,{...g,...P})},onBlur:y=>{n||Object.assign(y.currentTarget.style,g)},...v,children:[s&&e.jsx("span",{style:{display:"flex",alignItems:"center",fontSize:"16px"},children:s}),e.jsx("span",{style:{flex:1},children:c}),i&&e.jsx("span",{style:{display:"flex",alignItems:"center",fontSize:"12px",opacity:.7},children:i})]})});f.displayName="DropdownItem";const we=({className:s=""})=>e.jsx("div",{className:s,style:{height:"1px",backgroundColor:"var(--border-light)",margin:"var(--space-xs) 0"}}),he=h.forwardRef(({className:s="",children:i,...n},m)=>e.jsx("div",{ref:m,className:s,style:{padding:"var(--space-xs) var(--space-sm)",fontSize:"var(--font-size-xs)",fontWeight:"var(--font-weight-semibold)",color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:"0.05em"},...n,children:i}));he.displayName="DropdownLabel";const ur=h.forwardRef(({className:s="",align:i="start",side:n="bottom",sideOffset:m=4,alignOffset:a=0,children:c,style:v,...b},w)=>{const{theme:g}=Z(),x={minWidth:"220px",backgroundColor:"var(--bg-surface)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",boxShadow:"var(--shadow-lg)",padding:"var(--space-xs)",zIndex:"var(--z-dropdown)",outline:"none",...v};return e.jsx("div",{ref:w,className:s,style:x,...b,children:c})});ur.displayName="DropdownContent";const Y=h.forwardRef(({children:s,trigger:i,open:n,onOpenChange:m,disabled:a=!1,align:c="start",side:v="bottom",sideOffset:b=4,className:w=""},g)=>{const[x,P]=h.useState(!1),y=n!==void 0,W=y?n:x,R=h.useRef(null),N=h.useRef(null),U=h.useRef(null),D=p=>{a||(y?m?.(p):P(p))};h.useEffect(()=>{if(!W)return;const p=k=>{R.current&&!R.current.contains(k.target)&&D(!1)};return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[W]),h.useEffect(()=>{if(!W)return;const p=k=>{k.key==="Escape"&&D(!1)};return document.addEventListener("keydown",p),()=>document.removeEventListener("keydown",p)},[W]);const I=()=>{const p={position:"absolute",zIndex:"var(--z-dropdown)"};switch(v){case"top":p.bottom=`calc(100% + ${b}px)`;break;case"bottom":p.top=`calc(100% + ${b}px)`;break;case"left":p.right=`calc(100% + ${b}px)`;break;case"right":p.left=`calc(100% + ${b}px)`;break}if(v==="top"||v==="bottom")switch(c){case"start":p.left="0";break;case"center":p.left="50%",p.transform="translateX(-50%)";break;case"end":p.right="0";break}else switch(c){case"start":p.top="0";break;case"center":p.top="50%",p.transform="translateY(-50%)";break;case"end":p.bottom="0";break}return p},$=p=>{p.preventDefault(),D(!W)},B=pe.cloneElement(i,{ref:N,onClick:$,"aria-expanded":W,"aria-haspopup":"menu",disabled:a});return e.jsx("div",{ref:g,className:w,style:{position:"relative",display:"inline-block"},children:e.jsxs("div",{ref:R,children:[B,W&&e.jsx("div",{style:I(),children:e.jsx(ur,{ref:U,align:c,side:v,sideOffset:b,role:"menu",onKeyDown:p=>{if(p.key==="ArrowDown"||p.key==="ArrowUp"){p.preventDefault();const k=U.current?.querySelectorAll('[role="menuitem"]:not([disabled])');if(!k||k.length===0)return;const Q=Array.from(k).indexOf(document.activeElement);let M;p.key==="ArrowDown"?M=Q<k.length-1?Q+1:0:M=Q>0?Q-1:k.length-1,k[M].focus()}},children:pe.Children.map(s,p=>pe.isValidElement(p)&&p.type===f?pe.cloneElement(p,{role:"menuitem",onClick:k=>{p.props.onClick?.(k),k.defaultPrevented||D(!1)}}):p)})})]})})});Y.displayName="Dropdown";const Zr=s=>s?s.includes("youtube.com/watch")||s.includes("youtu.be/")||s.includes("youtube.com/embed/")?"youtube":s.includes("vimeo.com/")?"vimeo":(/\.(mp4|webm|ogg|mov|avi|mkv)(\?.*)?$/i.test(s),"html5"):"html5",es=(s,i)=>{switch(i){case"youtube":const n=s.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/);return n?n[1]:"";case"vimeo":const m=s.match(/vimeo\.com\/(\d+)/);return m?m[1]:"";default:return""}},rs=`
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;if(typeof document<"u"&&!document.querySelector("#video-quality-spinner-styles")){const s=document.createElement("style");s.id="video-quality-spinner-styles",s.textContent=rs,document.head.appendChild(s)}const F=h.forwardRef(({as:s,variant:i="default",shape:n="rounded",size:m="md",fit:a="cover",showSpinner:c=!0,showControls:v=!0,showMenu:b=!0,enableDownload:w=!1,enableFullscreen:g=!0,autoplayOnLoad:x=!1,muteAudioOnPlay:P=!1,enableLoop:y=!1,showPlaybackSpeed:W=!1,showVideoQuality:R=!1,videoQualities:N=[{label:"Auto",value:"auto"},{label:"1080p",value:"1080p"},{label:"720p",value:"720p"},{label:"480p",value:"480p"},{label:"360p",value:"360p"}],fallback:U,className:D="",src:I,onLoadStart:$,onLoadedData:B,onError:p,...k},Q)=>{const{theme:M}=Z(),se=h.useRef(null),[z,ne]=h.useState(!0),[te,X]=h.useState(!1),[ee,re]=h.useState(!1),[ze,xe]=h.useState(0),[ae,ge]=h.useState(0),[Se,qe]=h.useState(1),[ve,ue]=h.useState(P),[er,rr]=h.useState(!1),[Ce,Xe]=h.useState(!1),[_,Ge]=h.useState(1),[ie,Ke]=h.useState(y),[de,Me]=h.useState(N[0]?.value||"auto"),[Qe,ke]=h.useState(!1),[Te,le]=h.useState(""),ce=Zr(I||""),T=es(I||"",ce),K=(s||(ce==="html5"?"player":"url"))==="url"&&ce!=="html5",E=Q||se,J=({size:t=24,color:u="currentColor"})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:u,children:e.jsx("path",{d:"M8 5v14l11-7z"})}),sr=({size:t=24,color:u="currentColor"})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:u,children:e.jsx("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"})}),br=({size:t=16,color:u="currentColor",level:q="high"})=>q==="muted"?e.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:u,children:e.jsx("path",{d:"M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"})}):q==="low"?e.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:u,children:e.jsx("path",{d:"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"})}):e.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:u,children:e.jsx("path",{d:"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"})}),fr=({size:t=16,color:u="currentColor"})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:u,children:e.jsx("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})}),wr=({size:t=16,color:u="currentColor"})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:u,children:e.jsx("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"})}),Br=({size:t=16,color:u="currentColor"})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:u,children:e.jsx("path",{d:"M4 12c0 4.42 3.58 8 8 8s8-3.58 8-8h-2c0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L14 9h7V2l-2.35 2.35C17.15 2.85 14.74 2 12 2 6.48 2 2 6.48 2 12z"})}),zr=({size:t=32,color:u="currentColor"})=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:u,strokeWidth:"2",children:[e.jsx("polygon",{points:"23 7 16 12 23 17 23 7"}),e.jsx("rect",{width:"15",height:"14",x:"1",y:"5",rx:"2",ry:"2"}),e.jsx("line",{x1:"8",x2:"8",y1:"21",y2:"3"})]}),Sr=({size:t=16,color:u="currentColor"})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:u,children:e.jsx("path",{d:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"})}),Cr=({size:t=16,color:u="currentColor"})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:u,children:e.jsx("path",{d:"M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"})}),kr=({size:t=16,color:u="currentColor"})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:u,children:e.jsx("path",{d:"M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"})}),tr=({size:t=16,color:u="currentColor"})=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:u,children:[e.jsx("path",{d:"M20.38 8.57l-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44z"}),e.jsx("path",{d:"M10.59 15.41a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z"})]}),ar=({size:t=16,color:u="currentColor"})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:u,children:e.jsx("path",{d:"M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"})}),Tr=t=>{ne(!0),X(!1),$?.(t)},Fr=t=>{const u=t.currentTarget;ne(!1),X(!1),ge(u.duration),B?.(t)},Ir=t=>{ne(!1),X(!0),p?.(t)},Lr=t=>{xe(t.currentTarget.currentTime)},Rr=()=>re(!0),Ar=()=>re(!1),ir=()=>{const t=E.current;t&&(ee?t.pause():t.play())},Pr=t=>{const u=E.current;if(!u||!ae)return;const q=t.currentTarget.getBoundingClientRect(),me=(t.clientX-q.left)/q.width*ae;u.currentTime=me,xe(me)},Dr=t=>{const u=E.current,q=parseFloat(t.target.value);u&&(u.volume=q,qe(q),ue(q===0))},Er=()=>{const t=E.current;t&&(ve?(t.volume=Se,t.muted=!1,ue(!1)):(t.muted=!0,ue(!0)))},Mr=()=>{if(I&&w){const t=document.createElement("a");t.href=I,t.download="video.mp4",document.body.appendChild(t),t.click(),document.body.removeChild(t)}},Wr=()=>{if(g)try{Ce?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen&&document.webkitExitFullscreen():E.current?.requestFullscreen?E.current.requestFullscreen():E.current?.webkitRequestFullscreen&&E.current.webkitRequestFullscreen()}catch(t){console.warn("Fullscreen not supported:",t)}},Vr=t=>{const u=E.current;u&&(u.playbackRate=t,Ge(t))},Hr=()=>{const t=E.current;if(!t)return;const u=!ie;t.loop=u,Ke(u)},Ur=()=>{const t=E.current;t&&(t.currentTime=0,xe(0),ee||t.play())},Nr=t=>{const u=N.find(me=>me.value===t);if(!u)return;const q=E.current;if(!q)return;const pr=q.currentTime,hr=!q.paused;if(ke(!0),le(`Switching to ${u.label}...`),u.src&&u.src!==q.src){q.src=u.src,q.load();const me=()=>{q.currentTime=pr,hr&&q.play().catch(()=>{}),ke(!1),le(`Quality changed to ${u.label}`),setTimeout(()=>le(""),2e3),q.removeEventListener("loadeddata",me)};q.addEventListener("loadeddata",me)}else setTimeout(()=>{ke(!1),le(`Quality set to ${u.label}`),setTimeout(()=>le(""),2e3)},500);Me(t)},or=t=>{const u=Math.floor(t/60),q=Math.floor(t%60);return`${u}:${q.toString().padStart(2,"0")}`},dr={xs:{width:"160px",height:"90px"},sm:{width:"240px",height:"135px"},md:{width:"320px",height:"180px"},lg:{width:"480px",height:"270px"},xl:{width:"640px",height:"360px"},full:{width:"100%",height:"auto"}},Ye={square:{borderRadius:"0"},rounded:{borderRadius:"var(--radius-lg)"},pill:{borderRadius:"var(--radius-full)"}},nr={default:{border:"1px solid var(--border-color)"},bordered:{border:"3px solid var(--accent-500)",padding:"2px"},shadow:{boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)",border:"1px solid var(--border-color)"},elevated:{boxShadow:"0 8px 25px rgba(0, 0, 0, 0.25)",transform:"translateY(-4px)",border:"1px solid var(--border-color)"},"hover-lift":{cursor:"pointer",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",border:"2px solid var(--border-color)",transform:"translateY(0px) scale(1)",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.1)"}},lr={...{display:"block",objectFit:a,transition:"var(--transition-base)",backgroundColor:"var(--bg-surface)",outline:"none",width:"100%",height:"100%",...Ye[n],...nr[i]}},cr={position:"relative",display:"inline-block",overflow:"visible",background:"transparent",border:"none",...dr[m]},Or={position:"absolute",top:0,left:0,right:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(0, 0, 0, 0.7)",borderRadius:Ye[n].borderRadius,opacity:z?1:0,pointerEvents:z?"auto":"none",transition:"var(--transition-base)",zIndex:15},mr={...dr[m],...nr[i],...Ye[n],display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"var(--bg-surface)",border:"2px dashed var(--border-color)",color:"var(--text-secondary)",fontSize:"var(--font-size-sm)",textAlign:"center",padding:"var(--space-sm)"},$r={position:"absolute",bottom:0,left:0,right:0,background:"linear-gradient(transparent, rgba(0, 0, 0, 0.8))",padding:"var(--space-sm)",opacity:1,transition:"opacity 0.3s ease",pointerEvents:"auto",borderRadius:"0",zIndex:10},qr={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",background:"rgba(0, 0, 0, 0.7)",border:"none",borderRadius:"50%",width:"60px",height:"60px",color:"white",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"24px",opacity:!ee&&!z?1:0,transition:"all 0.3s ease",pointerEvents:!ee&&!z?"auto":"none",zIndex:5};if(h.useEffect(()=>{const t=E.current;if(!t)return;const u=()=>{ge(t.duration)};return t.addEventListener("loadedmetadata",u),()=>t.removeEventListener("loadedmetadata",u)},[]),h.useEffect(()=>{const t=()=>{Xe(!!document.fullscreenElement||!!document.webkitFullscreenElement)};return document.addEventListener("fullscreenchange",t),document.addEventListener("webkitfullscreenchange",t),()=>{document.removeEventListener("fullscreenchange",t),document.removeEventListener("webkitfullscreenchange",t)}},[]),h.useEffect(()=>{if(x&&E.current&&!te){const t=async()=>{try{const u=E.current;P&&(u.muted=!0,ue(!0)),await u.play(),re(!0)}catch(u){console.warn("Autoplay failed:",u)}};if(E.current.readyState>=3)t();else{const u=()=>{t(),E.current?.removeEventListener("canplay",u)};E.current.addEventListener("canplay",u)}}},[x,P,te]),h.useEffect(()=>{E.current&&(E.current.loop=ie)},[ie]),h.useEffect(()=>{E.current&&(E.current.playbackRate=_)},[_]),te&&U)return e.jsx("div",{style:mr,className:D,children:U});if(te)return e.jsxs("div",{style:mr,className:D,children:[e.jsx(zr,{size:32,color:"var(--text-secondary)"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Failed to load video"})]});if(K&&T){const t=()=>{switch(ce){case"youtube":return`https://www.youtube.com/embed/${T}?enablejsapi=1&origin=${window.location.origin}`;case"vimeo":return`https://player.vimeo.com/video/${T}`;default:return""}};return e.jsxs("div",{style:cr,className:D,children:[e.jsx("iframe",{src:t(),style:{...lr,border:"none"},allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Video Player"}),e.jsx("div",{style:{position:"absolute",top:"var(--space-sm)",left:"var(--space-sm)",backgroundColor:"rgba(0, 0, 0, 0.8)",color:"white",padding:"var(--space-xs) var(--space-sm)",borderRadius:"var(--radius-sm)",fontSize:"var(--font-size-xs)",fontWeight:"500",textTransform:"uppercase",zIndex:10},children:ce})]})}return e.jsxs("div",{style:cr,className:D,children:[e.jsx("video",{ref:E,src:I,style:lr,onLoadStart:Tr,onLoadedData:Fr,onError:Ir,onTimeUpdate:Lr,onPlay:Rr,onPause:Ar,onMouseEnter:t=>{i==="hover-lift"&&Object.assign(t.currentTarget.parentElement.style,{transform:"translateY(-8px) scale(1.02)",boxShadow:"0 12px 30px rgba(0, 0, 0, 0.3)",borderColor:"var(--accent-500)"})},onMouseLeave:t=>{i==="hover-lift"&&Object.assign(t.currentTarget.parentElement.style,{transform:"translateY(0px) scale(1)",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.1)",borderColor:"var(--border-color)"})},...k}),e.jsx("button",{style:qr,onClick:ir,"aria-label":ee?"Pause":"Play",children:ee?e.jsx(sr,{size:24,color:"white"}):e.jsx(J,{size:24,color:"white"})}),v&&e.jsx("div",{style:$r,children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-sm)",marginBottom:"var(--space-xs)"},children:[e.jsx("button",{onClick:ir,style:{background:"none",border:"none",color:"white",cursor:"pointer",fontSize:"18px",padding:"4px",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center"},"aria-label":ee?"Pause":"Play",children:ee?e.jsx(sr,{size:18,color:"white"}):e.jsx(J,{size:18,color:"white"})}),e.jsx("div",{style:{flex:1,height:"4px",backgroundColor:"rgba(255, 255, 255, 0.3)",borderRadius:"2px",cursor:"pointer",position:"relative"},onClick:Pr,children:e.jsx("div",{style:{height:"100%",backgroundColor:"var(--accent-500)",borderRadius:"2px",width:`${ae?ze/ae*100:0}%`,transition:"width 0.1s ease"}})}),e.jsxs("div",{style:{color:"white",fontSize:"12px",fontFamily:"monospace",minWidth:"80px",textAlign:"center"},children:[or(ze)," / ",or(ae)]}),e.jsx("button",{onClick:Er,style:{background:"none",border:"none",color:"white",cursor:"pointer",fontSize:"16px",padding:"4px",display:"flex",alignItems:"center",justifyContent:"center"},"aria-label":ve?"Unmute":"Mute",children:e.jsx(br,{size:16,color:"white",level:ve?"muted":Se>.5?"high":"low"})}),e.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:ve?0:Se,onChange:Dr,style:{width:"60px",height:"4px",background:"rgba(255, 255, 255, 0.3)",outline:"none",borderRadius:"2px"}}),b&&e.jsxs(Y,{trigger:e.jsx("button",{style:{background:"none",border:"none",color:"white",cursor:"pointer",fontSize:"16px",padding:"4px",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center"},"aria-label":"More options",children:e.jsx(fr,{size:16,color:"white"})}),align:"end",side:"top",sideOffset:8,children:[g&&e.jsx(f,{leftIcon:Ce?e.jsx(Cr,{size:16}):e.jsx(Sr,{size:16}),onClick:Wr,style:{color:"var(--text-primary)",fontWeight:"normal",display:"flex",alignItems:"center",gap:"var(--space-xs)",width:"100%",padding:"var(--space-xs) var(--space-sm)",border:"none",backgroundColor:"transparent",fontSize:"var(--font-size-sm)",fontFamily:"var(--font-family)",textAlign:"left",cursor:"pointer",opacity:1,transition:"var(--transition-fast)",outline:"none"},children:Ce?"Exit Fullscreen":"Fullscreen"}),y&&e.jsxs(f,{leftIcon:e.jsx(kr,{size:16,color:ie?"var(--primary)":"currentColor"}),onClick:Hr,style:{color:ie?"var(--primary)":"var(--text-primary)",fontWeight:ie?"500":"normal",display:"flex",alignItems:"center",gap:"var(--space-xs)",width:"100%",padding:"var(--space-xs) var(--space-sm)",border:"none",backgroundColor:"transparent",fontSize:"var(--font-size-sm)",fontFamily:"var(--font-family)",textAlign:"left",cursor:"pointer",opacity:1,transition:"var(--transition-fast)",outline:"none"},children:["Loop ",ie?"(On)":"(Off)"]}),W&&e.jsxs(Y,{trigger:e.jsxs(f,{leftIcon:e.jsx(tr,{size:16}),rightIcon:"›",style:{color:"var(--text-primary)",fontWeight:"normal",display:"flex",alignItems:"center",gap:"var(--space-xs)",width:"100%",padding:"var(--space-xs) var(--space-sm)",border:"none",backgroundColor:"transparent",fontSize:"var(--font-size-sm)",fontFamily:"var(--font-family)",textAlign:"left",cursor:"pointer",opacity:1,transition:"var(--transition-fast)",outline:"none"},children:["Playback Speed (",_===1?"Normal":`${_}x`,")"]}),align:"start",side:"right",sideOffset:4,children:[e.jsx(he,{children:"Playback Speed"}),[.5,.75,1,1.25,1.5,2].map(t=>e.jsx(f,{leftIcon:e.jsx(tr,{size:16,color:_===t?"var(--primary)":"currentColor"}),rightIcon:_===t?"✓":void 0,onClick:()=>Vr(t),style:{color:_===t?"var(--primary)":"var(--text-primary)",fontWeight:_===t?"500":"normal",display:"flex",alignItems:"center",gap:"var(--space-xs)",width:"100%",padding:"var(--space-xs) var(--space-sm)",border:"none",backgroundColor:"transparent",fontSize:"var(--font-size-sm)",fontFamily:"var(--font-family)",textAlign:"left",cursor:"pointer",opacity:1,transition:"var(--transition-fast)",outline:"none"},children:t===1?"Normal":`${t}x`},t))]}),R&&N.length>0&&e.jsxs(Y,{trigger:e.jsxs(f,{leftIcon:e.jsx(ar,{size:16}),rightIcon:"›",style:{color:"var(--text-primary)",fontWeight:"normal",display:"flex",alignItems:"center",gap:"var(--space-xs)",width:"100%",padding:"var(--space-xs) var(--space-sm)",border:"none",backgroundColor:"transparent",fontSize:"var(--font-size-sm)",fontFamily:"var(--font-family)",textAlign:"left",cursor:"pointer",opacity:1,transition:"var(--transition-fast)",outline:"none"},children:["Quality (",N.find(t=>t.value===de)?.label||"Auto",")"]}),align:"start",side:"right",sideOffset:4,children:[e.jsx(he,{children:"Video Quality"}),N.map(t=>e.jsx(f,{leftIcon:e.jsx(ar,{size:16,color:de===t.value?"var(--primary)":"currentColor"}),rightIcon:de===t.value?"✓":void 0,onClick:()=>Nr(t.value),style:{color:de===t.value?"var(--primary)":"var(--text-primary)",fontWeight:de===t.value?"500":"normal",display:"flex",alignItems:"center",gap:"var(--space-xs)",width:"100%",padding:"var(--space-xs) var(--space-sm)",border:"none",backgroundColor:"transparent",fontSize:"var(--font-size-sm)",fontFamily:"var(--font-family)",textAlign:"left",cursor:"pointer",opacity:1,transition:"var(--transition-fast)",outline:"none"},children:t.label},t.value))]}),(w||g||y||W||R)&&e.jsx(we,{}),e.jsx(f,{leftIcon:e.jsx(Br,{size:16}),onClick:Ur,style:{color:"var(--text-primary)",fontWeight:"normal",display:"flex",alignItems:"center",gap:"var(--space-xs)",width:"100%",padding:"var(--space-xs) var(--space-sm)",border:"none",backgroundColor:"transparent",fontSize:"var(--font-size-sm)",fontFamily:"var(--font-family)",textAlign:"left",cursor:"pointer",opacity:1,transition:"var(--transition-fast)",outline:"none"},children:"Restart"}),w&&e.jsx(f,{leftIcon:e.jsx(wr,{size:16}),onClick:Mr,style:{color:"var(--text-primary)",fontWeight:"normal",display:"flex",alignItems:"center",gap:"var(--space-xs)",width:"100%",padding:"var(--space-xs) var(--space-sm)",border:"none",backgroundColor:"transparent",fontSize:"var(--font-size-sm)",fontFamily:"var(--font-family)",textAlign:"left",cursor:"pointer",opacity:1,transition:"var(--transition-fast)",outline:"none"},children:"Download"})]})]})}),(Te||R&&de!=="auto")&&e.jsxs("div",{style:{position:"absolute",top:"var(--space-sm)",right:"var(--space-sm)",backgroundColor:"rgba(0, 0, 0, 0.8)",color:"white",padding:"var(--space-xs) var(--space-sm)",borderRadius:"var(--radius-sm)",fontSize:"var(--font-size-xs)",fontWeight:"500",zIndex:10,opacity:Te?1:.7,transition:"opacity 0.3s ease",display:"flex",alignItems:"center",gap:"var(--space-xs)"},children:[Qe&&e.jsx("div",{style:{width:"12px",height:"12px",border:"2px solid rgba(255, 255, 255, 0.3)",borderTop:"2px solid white",borderRadius:"50%",animation:"spin 1s linear infinite"}}),Te||`${de.toUpperCase()}`]}),c&&e.jsx("div",{style:Or,children:e.jsx(L,{size:"md",variant:"primary"})})]})});F.displayName="Video";const vr=({onThemeSelect:s})=>{const i=Object.keys(Be),n=a=>({light:"Clean, professional default theme with bright backgrounds",dark:"Modern dark theme for reduced eye strain",ocean:"Calming blues and cyans for data-focused applications",forest:"Natural greens for wellness and environmental apps",sunset:"Warm oranges and pinks for creative applications",lavender:"Soft purples for elegant, dreamy interfaces",cyberpunk:"Neon highlights on dark backgrounds for tech/gaming",autumn:"Cozy browns and golds for seasonal warmth"})[a]||"Beautiful theme",m=a=>{const c=Be[a];return{primary:c.colors.accent[500],background:c.colors.background.app,surface:c.colors.background.surface,text:c.colors.text.primary}};return e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"var(--space-2xl)"},children:[e.jsx("h1",{style:{fontSize:"var(--font-size-3xl)",fontWeight:"var(--font-weight-bold)",margin:"0 0 var(--space-md) 0",color:"var(--text-primary)"},children:"Theme Gallery"}),e.jsx("p",{style:{fontSize:"var(--font-size-lg)",color:"var(--text-secondary)",margin:"0 0 var(--space-lg) 0",lineHeight:1.6},children:"FlowLabKit comes with 8 beautiful built-in themes. Each theme includes both light and dark variants with carefully crafted color palettes for different use cases."})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"var(--space-lg)",marginBottom:"var(--space-2xl)"},children:i.map(a=>{const c=m(a);return e.jsxs("div",{style:{backgroundColor:"var(--bg-surface)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-lg)",padding:"var(--space-lg)",cursor:"pointer",transition:"var(--transition-base)",boxShadow:"var(--shadow-sm)"},onClick:()=>s(a),onMouseEnter:v=>{v.currentTarget.style.transform="translateY(-2px)",v.currentTarget.style.boxShadow="var(--shadow-md)"},onMouseLeave:v=>{v.currentTarget.style.transform="translateY(0)",v.currentTarget.style.boxShadow="var(--shadow-sm)"},children:[e.jsxs("div",{style:{height:"120px",borderRadius:"var(--radius-md)",marginBottom:"var(--space-md)",background:`linear-gradient(135deg, ${c.background} 0%, ${c.surface} 50%, ${c.primary}20 100%)`,border:`2px solid ${c.primary}20`,position:"relative",overflow:"hidden"},children:[e.jsxs("div",{style:{position:"absolute",top:"var(--space-sm)",right:"var(--space-sm)",display:"flex",gap:"4px"},children:[e.jsx("div",{style:{width:"16px",height:"16px",borderRadius:"50%",backgroundColor:c.primary,border:"2px solid white",boxShadow:"0 1px 3px rgba(0,0,0,0.3)"}}),e.jsx("div",{style:{width:"16px",height:"16px",borderRadius:"50%",backgroundColor:c.surface,border:"2px solid white",boxShadow:"0 1px 3px rgba(0,0,0,0.3)"}})]}),e.jsxs("div",{style:{position:"absolute",bottom:"var(--space-sm)",left:"var(--space-sm)",right:"var(--space-sm)",display:"flex",flexDirection:"column",gap:"4px"},children:[e.jsx("div",{style:{height:"8px",backgroundColor:c.primary,borderRadius:"4px",width:"60%"}}),e.jsx("div",{style:{height:"6px",backgroundColor:`${c.text}60`,borderRadius:"3px",width:"80%"}}),e.jsx("div",{style:{height:"6px",backgroundColor:`${c.text}40`,borderRadius:"3px",width:"40%"}})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",margin:"0 0 var(--space-xs) 0",color:"var(--text-primary)",textTransform:"capitalize"},children:a}),e.jsx("p",{style:{fontSize:"var(--font-size-sm)",color:"var(--text-secondary)",margin:"0 0 var(--space-md) 0",lineHeight:1.4},children:n(a)}),e.jsxs("button",{style:{backgroundColor:c.primary,color:"white",border:"none",borderRadius:"var(--radius-sm)",padding:"var(--space-sm) var(--space-md)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",cursor:"pointer",transition:"var(--transition-fast)"},children:["Try ",a]})]})]},a)})}),e.jsxs("div",{style:{backgroundColor:"var(--bg-surface)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-lg)",padding:"var(--space-xl)"},children:[e.jsx("h2",{style:{fontSize:"var(--font-size-xl)",fontWeight:"var(--font-weight-semibold)",margin:"0 0 var(--space-lg) 0",color:"var(--text-primary)"},children:"Quick Start"}),e.jsx("pre",{style:{backgroundColor:"var(--bg-elevated)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"var(--space-lg)",fontSize:"var(--font-size-sm)",color:"var(--text-primary)",overflow:"auto",fontFamily:'Monaco, Consolas, "Liberation Mono", "Courier New", monospace'},children:`import { ThemeProvider } from '@flowlabkit/ui';
import { oceanTheme, cyberpunkTheme } from '@flowlabkit/ui/themes';

function App() {
  return (
    <ThemeProvider 
      lightTheme={oceanTheme}
      darkTheme={cyberpunkTheme}
    >
      <YourApp />
    </ThemeProvider>
  );
}`})]})]})},ss=()=>{const[s,i]=h.useState(""),n=({children:c})=>e.jsx("pre",{style:{backgroundColor:"var(--bg-elevated)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",padding:"var(--space-sm)",fontSize:"12px",fontFamily:"Monaco, 'Cascadia Code', 'Roboto Mono', monospace",color:"var(--text-secondary)",overflow:"auto",margin:0},children:c}),m=({title:c,children:v})=>e.jsxs("div",{style:{marginBottom:"var(--space-lg)"},children:[e.jsx(r,{as:"h5",size:"sm",weight:"semibold",style:{marginBottom:"var(--space-sm)",color:"var(--text-secondary)"},children:c}),e.jsx("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-surface)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-color)",display:"flex",flexWrap:"wrap",gap:"var(--space-md)",alignItems:"center"},children:v})]}),a=({title:c,description:v,demos:b,code:w})=>e.jsxs(o,{style:{marginBottom:"var(--space-xl)"},children:[e.jsxs(A,{children:[e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:c}),e.jsx(r,{as:"p",size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:v})]}),e.jsxs(d,{children:[e.jsxs("div",{style:{marginBottom:"var(--space-lg)"},children:[e.jsx(r,{as:"h4",size:"md",weight:"medium",style:{marginBottom:"var(--space-md)"},children:"Examples"}),Object.entries(b).map(([g,x])=>e.jsx(m,{title:g,children:x},g))]}),e.jsxs("div",{children:[e.jsx(r,{as:"h4",size:"md",weight:"medium",style:{marginBottom:"var(--space-md)"},children:"Code Example"}),e.jsx(n,{children:w})]})]})]});return e.jsxs("div",{style:{padding:"var(--space-xl)"},children:[e.jsxs("div",{style:{marginBottom:"var(--space-2xl)",textAlign:"center"},children:[e.jsx(r,{as:"h1",size:"3xl",weight:"bold",style:{marginBottom:"var(--space-md)"},children:"Component Library"}),e.jsx(r,{as:"p",size:"lg",color:"secondary",style:{maxWidth:"600px",margin:"0 auto"},children:"A comprehensive collection of React components with theme integration, accessibility, and TypeScript support."})]}),e.jsx(a,{title:"Button",description:"Interactive buttons with multiple variants, sizes, and states",demos:{Variants:e.jsxs(e.Fragment,{children:[e.jsx(C,{children:"Default"}),e.jsx(C,{variant:"primary",children:"Primary"}),e.jsx(C,{variant:"secondary",children:"Secondary"}),e.jsx(C,{variant:"outline",children:"Outline"}),e.jsx(C,{variant:"ghost",children:"Ghost"}),e.jsx(C,{variant:"danger",children:"Danger"})]}),Sizes:e.jsxs(e.Fragment,{children:[e.jsx(C,{variant:"primary",size:"sm",children:"Small"}),e.jsx(C,{variant:"primary",size:"md",children:"Medium"}),e.jsx(C,{variant:"primary",size:"lg",children:"Large"})]}),States:e.jsxs(e.Fragment,{children:[e.jsx(C,{variant:"primary",children:"Normal"}),e.jsx(C,{variant:"primary",disabled:!0,children:"Disabled"}),e.jsx(C,{variant:"primary",loading:!0,children:"Loading"})]})},code:`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>

{/* Sizes */}
<Button variant="primary" size="sm">Small</Button>
<Button variant="primary" size="md">Medium</Button>
<Button variant="primary" size="lg">Large</Button>

{/* States */}
<Button variant="primary" disabled>Disabled</Button>
<Button variant="primary" loading>Loading</Button>`}),e.jsx(a,{title:"Input",description:"Form inputs with validation states and various configurations",demos:{Types:e.jsxs(e.Fragment,{children:[e.jsx(O,{placeholder:"Text input"}),e.jsx(O,{type:"email",placeholder:"Email input"}),e.jsx(O,{type:"password",placeholder:"Password input"}),e.jsx(O,{type:"number",placeholder:"Number input"})]}),Sizes:e.jsxs(e.Fragment,{children:[e.jsx(O,{placeholder:"Small input",size:"sm"}),e.jsx(O,{placeholder:"Medium input",size:"md"}),e.jsx(O,{placeholder:"Large input",size:"lg"})]}),States:e.jsxs(e.Fragment,{children:[e.jsx(O,{placeholder:"Normal input"}),e.jsx(O,{placeholder:"Disabled input",disabled:!0}),e.jsx(O,{placeholder:"Error input",isInvalid:!0})]})},code:`<Input 
  placeholder="Basic input" 
  value={value} 
  onChange={(e) => setValue(e.target.value)} 
/>

{/* Types */}
<Input type="email" placeholder="Email" />
<Input type="password" placeholder="Password" />
<Input type="number" placeholder="Number" />

{/* Sizes */}
<Input placeholder="Small" size="sm" />
<Input placeholder="Large" size="lg" />

{/* States */}
<Input placeholder="Disabled" disabled />
<Input placeholder="Error" isInvalid />`}),e.jsx(a,{title:"Badge",description:"Small status indicators and labels with various styles",demos:{Variants:e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"default",children:"Default"}),e.jsx(l,{variant:"primary",children:"Primary"}),e.jsx(l,{variant:"secondary",children:"Secondary"}),e.jsx(l,{variant:"success",children:"Success"}),e.jsx(l,{variant:"warning",children:"Warning"}),e.jsx(l,{variant:"error",children:"Error"}),e.jsx(l,{variant:"info",children:"Info"})]}),Sizes:e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"primary",size:"sm",children:"Small"}),e.jsx(l,{variant:"primary",size:"md",children:"Medium"}),e.jsx(l,{variant:"primary",size:"lg",children:"Large"})]}),Shapes:e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"primary",children:"Default"}),e.jsx(l,{variant:"primary",shape:"pill",children:"Pill"}),e.jsx(l,{variant:"primary",shape:"square",children:"Square"}),e.jsx(l,{variant:"primary",dot:!0,children:"Dot"})]})},code:`<Badge variant="default">Default</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>

{/* Sizes */}
<Badge variant="primary" size="sm">Small</Badge>
<Badge variant="primary" size="lg">Large</Badge>

{/* Shapes */}
<Badge variant="primary" shape="pill">Pill</Badge>
<Badge variant="primary" shape="square">Square</Badge>
<Badge variant="primary" dot>Dot</Badge>`}),e.jsx(a,{title:"Text",description:"Typography component with semantic elements and styling options",demos:{Sizes:e.jsxs(e.Fragment,{children:[e.jsx(r,{as:"h1",size:"3xl",weight:"bold",children:"3XL Heading"}),e.jsx(r,{as:"h2",size:"2xl",weight:"semibold",children:"2XL Heading"}),e.jsx(r,{as:"h3",size:"xl",weight:"medium",children:"XL Heading"}),e.jsx(r,{as:"p",size:"lg",children:"Large Text"}),e.jsx(r,{as:"p",size:"md",children:"Medium Text"}),e.jsx(r,{as:"span",size:"sm",children:"Small Text"}),e.jsx(r,{as:"span",size:"xs",children:"XS Text"})]}),Variants:e.jsxs(e.Fragment,{children:[e.jsx(r,{color:"primary",children:"Primary Text"}),e.jsx(r,{color:"secondary",children:"Secondary Text"}),e.jsx(r,{color:"tertiary",children:"Tertiary Text"}),e.jsx(r,{color:"success",children:"Success Text"}),e.jsx(r,{color:"warning",children:"Warning Text"}),e.jsx(r,{color:"error",children:"Error Text"})]}),Weights:e.jsxs(e.Fragment,{children:[e.jsx(r,{weight:"normal",children:"Normal Weight"}),e.jsx(r,{weight:"medium",children:"Medium Weight"}),e.jsx(r,{weight:"semibold",children:"Semibold Weight"}),e.jsx(r,{weight:"bold",children:"Bold Weight"})]})},code:`<Text as="h1" size="3xl" weight="bold">Heading 1</Text>
<Text as="h2" size="2xl" weight="semibold">Heading 2</Text>
<Text as="h3" size="xl" weight="medium">Heading 3</Text>
<Text as="p" size="md">Body paragraph</Text>

{/* Colors */}
<Text color="primary">Primary text</Text>
<Text color="secondary">Secondary text</Text>
<Text color="tertiary">Tertiary text</Text>

{/* Weights */}
<Text weight="normal">Normal weight</Text>
<Text weight="medium">Medium weight</Text>
<Text weight="semibold">Semibold weight</Text>
<Text weight="bold">Bold weight</Text>`}),e.jsx(a,{title:"Link",description:"Styled links with hover effects and external link indicators",demos:{Variants:e.jsxs(e.Fragment,{children:[e.jsx(V,{href:"#",variant:"primary",children:"Primary Link"}),e.jsx(V,{href:"#",variant:"secondary",children:"Secondary Link"}),e.jsx(V,{href:"#",variant:"accent",children:"Accent Link"}),e.jsx(V,{href:"#",variant:"muted",children:"Muted Link"})]}),Sizes:e.jsxs(e.Fragment,{children:[e.jsx(V,{href:"#",variant:"primary",size:"sm",children:"Small Link"}),e.jsx(V,{href:"#",variant:"primary",size:"md",children:"Medium Link"}),e.jsx(V,{href:"#",variant:"primary",size:"lg",children:"Large Link"})]}),States:e.jsxs(e.Fragment,{children:[e.jsx(V,{href:"#",variant:"primary",children:"Normal Link"}),e.jsx(V,{href:"#",variant:"primary",underline:"always",children:"Always Underlined"}),e.jsx(V,{href:"#",variant:"primary",underline:"never",children:"Never Underlined"}),e.jsx(V,{href:"#",variant:"primary",external:!0,children:"External Link"}),e.jsx(V,{href:"#",variant:"primary",disabled:!0,children:"Disabled Link"})]})},code:`<Link href="#" variant="primary">Primary Link</Link>
<Link href="#" variant="secondary">Secondary Link</Link>
<Link href="#" variant="accent">Accent Link</Link>
<Link href="#" variant="muted">Muted Link</Link>

{/* Underline options */}
<Link href="#" underline="always">Always Underlined</Link>
<Link href="#" underline="hover">Hover Underlined</Link>
<Link href="#" underline="never">Never Underlined</Link>

{/* External links */}
<Link href="#" external>External Link ↗</Link>

{/* Sizes */}
<Link href="#" size="sm">Small</Link>
<Link href="#" size="lg">Large</Link>`}),e.jsx(a,{title:"Spinner",description:"Loading spinners for indicating async operations and loading states",demos:{Variants:e.jsxs(e.Fragment,{children:[e.jsx(L,{variant:"primary"}),e.jsx(L,{variant:"accent"}),e.jsx(L,{variant:"success"}),e.jsx(L,{variant:"warning"}),e.jsx(L,{variant:"error"}),e.jsx(L,{variant:"secondary"})]}),Sizes:e.jsxs(e.Fragment,{children:[e.jsx(L,{variant:"accent",size:"xs"}),e.jsx(L,{variant:"accent",size:"sm"}),e.jsx(L,{variant:"accent",size:"md"}),e.jsx(L,{variant:"accent",size:"lg"}),e.jsx(L,{variant:"accent",size:"xl"})]}),Types:e.jsxs(e.Fragment,{children:[e.jsx(L,{variant:"accent",thickness:"thin"}),e.jsx(L,{variant:"accent",thickness:"medium"}),e.jsx(L,{variant:"accent",thickness:"thick"}),e.jsx(L,{variant:"accent",speed:"slow"}),e.jsx(L,{variant:"accent",speed:"normal"}),e.jsx(L,{variant:"accent",speed:"fast"})]})},code:`<Spinner variant="primary" />
<Spinner variant="accent" />
<Spinner variant="success" />
<Spinner variant="warning" />
<Spinner variant="error" />

{/* Sizes */}
<Spinner size="xs" />
<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
<Spinner size="xl" />

{/* Thickness */}
<Spinner thickness="thin" />
<Spinner thickness="medium" />
<Spinner thickness="thick" />

{/* Speed */}
<Spinner speed="slow" />
<Spinner speed="normal" />
<Spinner speed="fast" />`}),e.jsx(a,{title:"LoadingIndicator",description:"Advanced loading animations with text labels and multiple animation types",demos:{Types:e.jsxs(e.Fragment,{children:[e.jsx(S,{type:"dots",text:"Loading",variant:"accent"}),e.jsx(S,{type:"pulse",text:"Processing",variant:"primary"}),e.jsx(S,{type:"wave",text:"Uploading",variant:"success"}),e.jsx(S,{type:"bars",text:"Analyzing",variant:"warning"}),e.jsx(S,{type:"bounce",text:"Syncing",variant:"error"})]}),Variants:e.jsxs(e.Fragment,{children:[e.jsx(S,{type:"dots",text:"Primary",variant:"primary"}),e.jsx(S,{type:"dots",text:"Accent",variant:"accent"}),e.jsx(S,{type:"dots",text:"Success",variant:"success"}),e.jsx(S,{type:"dots",text:"Warning",variant:"warning"}),e.jsx(S,{type:"dots",text:"Error",variant:"error"})]}),Sizes:e.jsxs(e.Fragment,{children:[e.jsx(S,{type:"wave",size:"sm",variant:"success"}),e.jsx(S,{type:"wave",size:"md",variant:"success"}),e.jsx(S,{type:"wave",size:"lg",variant:"success"})]}),States:e.jsxs(e.Fragment,{children:[e.jsx(S,{type:"dots",text:"Above",textPosition:"top",variant:"accent"}),e.jsx(S,{type:"pulse",text:"Below",textPosition:"bottom",variant:"primary"}),e.jsx(S,{type:"bounce",text:"Left",textPosition:"left",variant:"warning"}),e.jsx(S,{type:"bars",text:"Right",textPosition:"right",variant:"error"})]})},code:`<LoadingIndicator type="dots" text="Loading" variant="accent" />
<LoadingIndicator type="pulse" text="Processing" variant="primary" />
<LoadingIndicator type="wave" text="Uploading" variant="success" />
<LoadingIndicator type="bars" text="Analyzing" variant="warning" />
<LoadingIndicator type="bounce" text="Syncing" variant="error" />

{/* Text positioning */}
<LoadingIndicator 
  type="dots" 
  text="Loading" 
  textPosition="top" 
  variant="accent" 
/>
<LoadingIndicator 
  text="Processing" 
  textPosition="left" 
  variant="primary" 
/>

{/* Without text */}
<LoadingIndicator type="wave" variant="success" />

{/* Sizes and speed */}
<LoadingIndicator size="lg" speed="fast" />`}),e.jsx(a,{title:"Image",description:"Enhanced images with loading states, error handling, and visual effects",demos:{Variants:e.jsxs(e.Fragment,{children:[e.jsx(H,{src:"https://picsum.photos/seed/default/80/80",alt:"Default",variant:"default",size:"sm"}),e.jsx(H,{src:"https://picsum.photos/seed/bordered/80/80",alt:"Bordered",variant:"bordered",size:"sm"}),e.jsx(H,{src:"https://picsum.photos/seed/shadow/80/80",alt:"Shadow",variant:"shadow",size:"sm"}),e.jsx(H,{src:"https://picsum.photos/seed/elevated/80/80",alt:"Elevated",variant:"elevated",size:"sm"}),e.jsx(H,{src:"https://picsum.photos/seed/hover/80/80",alt:"Hover",variant:"hover-lift",size:"sm"})]}),Shapes:e.jsxs(e.Fragment,{children:[e.jsx(H,{src:"https://picsum.photos/seed/square/80/80",alt:"Square",variant:"shadow",shape:"square",size:"sm"}),e.jsx(H,{src:"https://picsum.photos/seed/rounded/80/80",alt:"Rounded",variant:"shadow",shape:"rounded",size:"sm"}),e.jsx(H,{src:"https://picsum.photos/seed/circle/80/80",alt:"Circle",variant:"shadow",shape:"circle",size:"sm"}),e.jsx(H,{src:"https://picsum.photos/seed/pill/96/48",alt:"Pill",variant:"shadow",shape:"pill",style:{width:"96px",height:"48px"}})]}),Sizes:e.jsxs(e.Fragment,{children:[e.jsx(H,{src:"https://picsum.photos/seed/xs/40/40",alt:"XS",variant:"shadow",size:"xs"}),e.jsx(H,{src:"https://picsum.photos/seed/sm/60/60",alt:"Small",variant:"shadow",size:"sm"}),e.jsx(H,{src:"https://picsum.photos/seed/md/80/80",alt:"Medium",variant:"shadow",size:"md"}),e.jsx(H,{src:"https://picsum.photos/seed/lg/100/100",alt:"Large",variant:"shadow",size:"lg"})]})},code:`<Image 
  src="image.jpg" 
  alt="Description" 
  variant="default" 
/>

{/* Variants */}
<Image variant="bordered" />
<Image variant="shadow" />
<Image variant="elevated" />
<Image variant="hover-lift" />

{/* Shapes */}
<Image shape="square" />
<Image shape="rounded" />
<Image shape="circle" />
<Image shape="pill" />

{/* Sizes */}
<Image size="xs" />
<Image size="sm" />
<Image size="md" />
<Image size="lg" />
<Image size="xl" />
<Image size="full" />

{/* Features */}
<Image showSpinner={true} />
<Image fallback={<div>Failed to load</div>} />
<Image fit="cover" />
<Image loading="lazy" />`}),e.jsx(a,{title:"Video",description:"Video player with transparent container, themed SVG icons, and shape applied to video element only",demos:{Variants:e.jsxs(e.Fragment,{children:[e.jsx(F,{src:"https://www.w3schools.com/html/mov_bbb.mp4",variant:"default",size:"xs",poster:"https://via.placeholder.com/160x90/4F46E5/FFFFFF?text=Default"}),e.jsx(F,{src:"https://www.w3schools.com/html/mov_bbb.mp4",variant:"bordered",size:"xs",poster:"https://via.placeholder.com/160x90/4F46E5/FFFFFF?text=Bordered"}),e.jsx(F,{src:"https://www.w3schools.com/html/mov_bbb.mp4",variant:"shadow",size:"xs",poster:"https://via.placeholder.com/160x90/4F46E5/FFFFFF?text=Shadow"}),e.jsx(F,{src:"https://www.w3schools.com/html/mov_bbb.mp4",variant:"elevated",size:"xs",poster:"https://via.placeholder.com/160x90/4F46E5/FFFFFF?text=Elevated"})]}),Shapes:e.jsxs(e.Fragment,{children:[e.jsx(F,{src:"https://www.w3schools.com/html/mov_bbb.mp4",variant:"shadow",shape:"square",size:"xs",poster:"https://via.placeholder.com/160x90/4F46E5/FFFFFF?text=Square"}),e.jsx(F,{src:"https://www.w3schools.com/html/mov_bbb.mp4",variant:"shadow",shape:"rounded",size:"xs",poster:"https://via.placeholder.com/160x90/4F46E5/FFFFFF?text=Rounded"}),e.jsx(F,{src:"https://www.w3schools.com/html/mov_bbb.mp4",variant:"shadow",shape:"pill",size:"xs",poster:"https://via.placeholder.com/160x90/4F46E5/FFFFFF?text=Pill"})]}),Sizes:e.jsxs(e.Fragment,{children:[e.jsx(F,{src:"https://www.w3schools.com/html/mov_bbb.mp4",variant:"shadow",size:"xs",poster:"https://via.placeholder.com/160x90/4F46E5/FFFFFF?text=XS"}),e.jsx(F,{src:"https://www.w3schools.com/html/mov_bbb.mp4",variant:"shadow",size:"sm",poster:"https://via.placeholder.com/240x135/4F46E5/FFFFFF?text=SM"}),e.jsx(F,{src:"https://www.w3schools.com/html/mov_bbb.mp4",variant:"shadow",size:"md",poster:"https://via.placeholder.com/320x180/4F46E5/FFFFFF?text=MD"})]}),Features:e.jsxs(e.Fragment,{children:[e.jsx(F,{src:"https://www.w3schools.com/html/mov_bbb.mp4",size:"xs",showControls:!0,showMenu:!0,enableDownload:!0,poster:"https://via.placeholder.com/160x90/10B981/FFFFFF?text=Full+Features"}),e.jsx(F,{src:"https://www.w3schools.com/html/mov_bbb.mp4",size:"xs",showControls:!1,poster:"https://via.placeholder.com/160x90/F59E0B/FFFFFF?text=No+Controls"}),e.jsx(F,{src:"invalid-video.mp4",size:"xs",fallback:e.jsx("div",{style:{textAlign:"center",color:"var(--accent-500)"},children:e.jsx(r,{size:"xs",children:"Custom Error"})})})]})},code:`<Video 
  src="video.mp4" 
  poster="poster.jpg"
  variant="default" 
/>

{/* Variants */}
<Video variant="bordered" />
<Video variant="shadow" />
<Video variant="elevated" />
<Video variant="hover-lift" />

{/* Shapes */}
<Video shape="square" />
<Video shape="rounded" />
<Video shape="pill" />

{/* Sizes */}
<Video size="xs" />
<Video size="sm" />
<Video size="md" />
<Video size="lg" />
<Video size="xl" />
<Video size="full" />

{/* Features */}
<Video showSpinner={true} />
<Video showControls={false} />
<Video showMenu={true} enableDownload={true} />
<Video fallback={<div>Failed to load</div>} />
<Video fit="cover" />
<Video autoPlay muted loop />`}),e.jsx(a,{title:"Card",description:"Container component with header, body, and footer sections",demos:{Variants:e.jsxs(e.Fragment,{children:[e.jsxs(o,{style:{width:"200px"},children:[e.jsxs(A,{children:[e.jsx(r,{as:"h3",size:"md",weight:"semibold",children:"Full Card"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",children:"With all sections"})]}),e.jsx(d,{children:e.jsx(r,{as:"p",size:"sm",children:"This card has header, body, and footer sections."})}),e.jsx($e,{children:e.jsx(C,{variant:"primary",size:"sm",children:"Action"})})]}),e.jsx(o,{style:{width:"200px"},children:e.jsx(d,{children:e.jsx(r,{as:"p",size:"sm",children:"Simple card with body only."})})})]}),States:e.jsxs(e.Fragment,{children:[e.jsxs(o,{style:{width:"180px"},children:[e.jsx(A,{children:e.jsx(r,{as:"h3",size:"sm",weight:"semibold",children:"Normal Card"})}),e.jsx(d,{children:e.jsx(r,{as:"p",size:"xs",children:"Standard appearance"})})]}),e.jsxs(o,{style:{width:"180px",opacity:.6},children:[e.jsx(A,{children:e.jsx(r,{as:"h3",size:"sm",weight:"semibold",children:"Disabled Card"})}),e.jsx(d,{children:e.jsx(r,{as:"p",size:"xs",children:"Disabled appearance"})})]})]})},code:`<Card>
  <CardHeader>
    <Text as="h3" size="md" weight="semibold">
      Card Title
    </Text>
    <Text as="p" size="sm" color="secondary">
      Card subtitle
    </Text>
  </CardHeader>
  <CardBody>
    <Text as="p" size="sm">
      Card body content goes here.
    </Text>
  </CardBody>
  <CardFooter>
    <Button variant="primary">Action</Button>
  </CardFooter>
</Card>

{/* Simple card */}
<Card>
  <CardBody>
    Simple card content
  </CardBody>
</Card>`})]})},ts=()=>e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"var(--space-2xl)"},children:[e.jsx("h1",{style:{fontSize:"var(--font-size-3xl)",fontWeight:"var(--font-weight-bold)",margin:"0 0 var(--space-md) 0",color:"var(--text-primary)"},children:"Installation"}),e.jsx("p",{style:{fontSize:"var(--font-size-lg)",color:"var(--text-secondary)",margin:"0 0 var(--space-lg) 0",lineHeight:1.6},children:"Get started with FlowLabKit theme system in your React application."})]}),e.jsxs("section",{style:{marginBottom:"var(--space-2xl)"},children:[e.jsx("h2",{style:{fontSize:"var(--font-size-xl)",fontWeight:"var(--font-weight-semibold)",margin:"0 0 var(--space-lg) 0",color:"var(--text-primary)"},children:"Quick Install"}),e.jsxs("div",{style:{backgroundColor:"var(--bg-surface)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-lg)",padding:"var(--space-xl)",marginBottom:"var(--space-lg)"},children:[e.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-medium)",margin:"0 0 var(--space-md) 0",color:"var(--text-primary)"},children:"1. Install the package"}),e.jsx("pre",{style:{backgroundColor:"var(--bg-elevated)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"var(--space-lg)",fontSize:"var(--font-size-sm)",color:"var(--text-primary)",overflow:"auto",fontFamily:'Monaco, Consolas, "Liberation Mono", "Courier New", monospace',margin:"0 0 var(--space-lg) 0"},children:"npm install @flowlabkit/ui"}),e.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-medium)",margin:"0 0 var(--space-md) 0",color:"var(--text-primary)"},children:"2. Basic setup"}),e.jsx("pre",{style:{backgroundColor:"var(--bg-elevated)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"var(--space-lg)",fontSize:"var(--font-size-sm)",color:"var(--text-primary)",overflow:"auto",fontFamily:'Monaco, Consolas, "Liberation Mono", "Courier New", monospace',margin:"0 0 var(--space-lg) 0"},children:`import React from 'react';
import { ThemeProvider } from '@flowlabkit/ui';

function App() {
  return (
    <ThemeProvider initialConfig={{ mode: 'dark', fontSize: 'medium' }}>
      <YourAppContent />
    </ThemeProvider>
  );
}

export default App;`}),e.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-medium)",margin:"0 0 var(--space-md) 0",color:"var(--text-primary)"},children:"3. Use components or CSS variables"}),e.jsx("pre",{style:{backgroundColor:"var(--bg-elevated)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"var(--space-lg)",fontSize:"var(--font-size-sm)",color:"var(--text-primary)",overflow:"auto",fontFamily:'Monaco, Consolas, "Liberation Mono", "Courier New", monospace'},children:`// Option 1: Use built-in components
import { Button, Input, Card } from '@flowlabkit/ui';

function MyComponent() {
  return (
    <Card>
      <Input label="Your name" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}

// Option 2: Use CSS variables in your own components
function MyCustomComponent() {
  return (
    <div style={{
      backgroundColor: 'var(--bg-surface)',
      color: 'var(--text-primary)',
      padding: 'var(--space-lg)',
      borderRadius: 'var(--radius-md)'
    }}>
      Themed content
    </div>
  );
}`})]})]}),e.jsxs("section",{style:{marginBottom:"var(--space-2xl)"},children:[e.jsx("h2",{style:{fontSize:"var(--font-size-xl)",fontWeight:"var(--font-weight-semibold)",margin:"0 0 var(--space-lg) 0",color:"var(--text-primary)"},children:"Custom Theme Setup"}),e.jsx("div",{style:{backgroundColor:"var(--bg-surface)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-lg)",padding:"var(--space-xl)"},children:e.jsx("pre",{style:{backgroundColor:"var(--bg-elevated)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"var(--space-lg)",fontSize:"var(--font-size-sm)",color:"var(--text-primary)",overflow:"auto",fontFamily:'Monaco, Consolas, "Liberation Mono", "Courier New", monospace'},children:`import React from 'react';
import { ThemeProvider } from '@flowlabkit/ui';
import { oceanTheme, cyberpunkTheme } from '@flowlabkit/ui/themes';

function App() {
  return (
    <ThemeProvider 
      lightTheme={oceanTheme}
      darkTheme={cyberpunkTheme}
      initialConfig={{
        mode: 'dark',
        fontSize: 'large',
        compactMode: false
      }}
      persistToLocalStorage={true}
      onThemeChange={(info) => {
        console.log(\`Switched to \${info.themeName} in \${info.mode} mode\`);
      }}
    >
      <YourApp />
    </ThemeProvider>
  );
}`})})]}),e.jsxs("section",{children:[e.jsx("h2",{style:{fontSize:"var(--font-size-xl)",fontWeight:"var(--font-weight-semibold)",margin:"0 0 var(--space-lg) 0",color:"var(--text-primary)"},children:"Requirements"}),e.jsx("div",{style:{backgroundColor:"var(--bg-surface)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-lg)",padding:"var(--space-xl)"},children:e.jsxs("ul",{style:{color:"var(--text-primary)",fontSize:"var(--font-size-base)",lineHeight:1.6,margin:0,paddingLeft:"var(--space-lg)"},children:[e.jsxs("li",{style:{marginBottom:"var(--space-sm)"},children:[e.jsx("strong",{children:"React 18.0+"})," - Hooks support required"]}),e.jsxs("li",{style:{marginBottom:"var(--space-sm)"},children:[e.jsx("strong",{children:"TypeScript 4.0+"})," - Recommended for full type safety"]}),e.jsxs("li",{style:{marginBottom:"var(--space-sm)"},children:[e.jsx("strong",{children:"Modern Browser"})," - CSS Custom Properties support"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Node.js 16+"})," - For development and build processes"]})]})})]})]}),ye=({children:s,language:i="tsx"})=>e.jsx("pre",{style:{backgroundColor:"var(--bg-elevated)",color:"var(--text-primary)",padding:"var(--space-lg)",borderRadius:"var(--radius-md)",border:"1px solid var(--border-color)",overflow:"auto",fontSize:"var(--font-size-sm)",fontFamily:"Consolas, Monaco, 'Courier New', monospace",margin:"var(--space-md) 0",lineHeight:"1.5"},children:e.jsx("code",{children:s})}),_e=({title:s,children:i})=>e.jsxs("div",{style:{marginBottom:"var(--space-lg)"},children:[e.jsx(r,{as:"h4",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:s}),e.jsx("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-surface)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-color)",display:"flex",flexWrap:"wrap",gap:"var(--space-md)",alignItems:"center"},children:i})]}),as=()=>{const[s,i]=h.useState(!1),n=()=>{i(!0),setTimeout(()=>i(!1),2e3)};return e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"var(--space-xl)"},children:[e.jsx(r,{as:"h1",size:"3xl",weight:"bold",style:{marginBottom:"var(--space-sm)"},children:"Button"}),e.jsx(r,{as:"p",size:"lg",color:"secondary",children:"Interactive button component for user actions with multiple variants, sizes, and states"})]}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Overview"}),e.jsx(r,{as:"p",size:"md",style:{marginBottom:"var(--space-lg)",lineHeight:"1.6"},children:"The Button component provides a comprehensive interface for user interactions with support for different visual styles, sizes, loading states, and accessibility features."}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-md)",flexWrap:"wrap"},children:[e.jsx(l,{variant:"primary",children:"6 Variants"}),e.jsx(l,{variant:"success",children:"3 Sizes"}),e.jsx(l,{variant:"info",children:"Loading State"}),e.jsx(l,{variant:"secondary",children:"Fully Accessible"})]})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Examples"}),e.jsxs(_e,{title:"Variants",children:[e.jsx(C,{children:"Default"}),e.jsx(C,{variant:"primary",children:"Primary"}),e.jsx(C,{variant:"secondary",children:"Secondary"}),e.jsx(C,{variant:"outline",children:"Outline"}),e.jsx(C,{variant:"ghost",children:"Ghost"}),e.jsx(C,{variant:"danger",children:"Danger"})]}),e.jsxs(_e,{title:"Sizes",children:[e.jsx(C,{variant:"primary",size:"sm",children:"Small"}),e.jsx(C,{variant:"primary",size:"md",children:"Medium"}),e.jsx(C,{variant:"primary",size:"lg",children:"Large"})]}),e.jsxs(_e,{title:"States",children:[e.jsx(C,{variant:"primary",children:"Normal"}),e.jsx(C,{variant:"primary",disabled:!0,children:"Disabled"}),e.jsx(C,{variant:"primary",loading:s,onClick:n,children:s?"Loading...":"Click to Load"})]})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"API Reference"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Props"}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{backgroundColor:"var(--bg-surface)"},children:[e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Prop"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Type"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Default"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"variant"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'default'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Visual style variant of the button"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"size"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'sm' | 'md' | 'lg'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'md'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Size of the button affecting padding and font size"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"loading"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"false"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Shows loading spinner and disables interaction"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"disabled"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"false"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Disables the button and prevents interaction"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"type"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'button' | 'submit' | 'reset'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'button'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"HTML button type attribute"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"onClick"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"(event: MouseEvent) => void"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Click event handler"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Additional CSS class names for custom styling"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"style"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:"Inline styles for custom styling"})]})]})]})})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Usage Examples"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Basic Usage"}),e.jsx(ye,{children:`import { Button } from '@flowlabkit/ui';

function App() {
  return (
    <Button variant="primary" onClick={() => alert('Clicked!')}>
      Click Me
    </Button>
  );
}`}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"With Loading State"}),e.jsx(ye,{children:`import { Button } from '@flowlabkit/ui';
import { useState } from 'react';

function AsyncButton() {
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async () => {
    setLoading(true);
    try {
      await fetch('/api/submit', { method: 'POST' });
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Button 
      variant="primary" 
      loading={loading}
      onClick={handleSubmit}
    >
      {loading ? 'Submitting...' : 'Submit'}
    </Button>
  );
}`}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"Form Integration"}),e.jsx(ye,{children:`import { Button } from '@flowlabkit/ui';

function MyForm() {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" />
      
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button type="submit" variant="primary">
          Submit
        </Button>
        <Button type="reset" variant="outline">
          Reset
        </Button>
        <Button type="button" variant="ghost" onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
}`})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Accessibility"}),e.jsxs("div",{style:{marginBottom:"var(--space-md)"},children:[e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Built-in Features"}),e.jsxs("ul",{style:{marginLeft:"var(--space-lg)",lineHeight:"1.6"},children:[e.jsx("li",{children:"Proper focus management with visible focus indicators"}),e.jsx("li",{children:"Keyboard navigation support (Enter and Space keys)"}),e.jsx("li",{children:"Screen reader compatible with proper ARIA attributes"}),e.jsx("li",{children:"Loading state announced to assistive technologies"}),e.jsx("li",{children:"Disabled state properly communicated"})]})]}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Best Practices"}),e.jsx(ye,{children:`// Use descriptive text
<Button variant="primary">Save Changes</Button>

// Add aria-label for icon-only buttons
<Button variant="ghost" aria-label="Close dialog">
  ×
</Button>

// Use loading state for async operations
<Button loading={isSubmitting} disabled={isSubmitting}>
  {isSubmitting ? 'Submitting...' : 'Submit'}
</Button>

// Provide feedback for destructive actions
<Button 
  variant="danger" 
  onClick={handleDelete}
  aria-describedby="delete-warning"
>
  Delete Account
</Button>`})]})}),e.jsx(o,{children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Styling & Customization"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"CSS Variables"}),e.jsx(r,{as:"p",size:"md",style:{marginBottom:"var(--space-md)",lineHeight:"1.6"},children:"Button components use theme CSS variables that can be customized:"}),e.jsx(ye,{language:"css",children:`.custom-button {
  /* Background colors */
  --btn-bg: var(--accent-500);
  --btn-bg-hover: var(--accent-600);
  --btn-bg-active: var(--accent-700);
  
  /* Text colors */
  --btn-text: var(--text-on-accent);
  
  /* Border */
  --btn-border: 1px solid var(--accent-500);
  
  /* Spacing */
  --btn-padding-x: var(--space-md);
  --btn-padding-y: var(--space-sm);
  
  /* Typography */
  --btn-font-size: var(--font-size-base);
  --btn-font-weight: var(--font-weight-medium);
  
  /* Border radius */
  --btn-radius: var(--radius-md);
}`}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"Custom Styling"}),e.jsx(ye,{children:`// Using style prop
<Button 
  variant="primary" 
  style={{
    borderRadius: '20px',
    textTransform: 'uppercase',
    letterSpacing: '0.1em'
  }}
>
  Custom Style
</Button>

// Using className with CSS
<Button variant="primary" className="my-custom-button">
  Styled Button
</Button>`})]})})]})},Ve=({children:s,language:i="tsx"})=>e.jsx("pre",{style:{backgroundColor:"var(--bg-elevated)",color:"var(--text-primary)",padding:"var(--space-lg)",borderRadius:"var(--radius-md)",border:"1px solid var(--border-color)",overflow:"auto",fontSize:"var(--font-size-sm)",fontFamily:"Consolas, Monaco, 'Courier New', monospace",margin:"var(--space-md) 0",lineHeight:"1.5"},children:e.jsx("code",{children:s})}),Je=({title:s,children:i})=>e.jsxs("div",{style:{marginBottom:"var(--space-lg)"},children:[e.jsx(r,{as:"h4",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:s}),e.jsx("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-surface)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-color)",display:"flex",flexDirection:"column",gap:"var(--space-md)"},children:i})]}),is=()=>{const[s,i]=h.useState(""),[n,m]=h.useState("");return e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"var(--space-xl)"},children:[e.jsx(r,{as:"h1",size:"3xl",weight:"bold",style:{marginBottom:"var(--space-sm)"},children:"Input"}),e.jsx(r,{as:"p",size:"lg",color:"secondary",children:"Form input component with validation states and various configurations"})]}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Overview"}),e.jsx(r,{as:"p",size:"md",style:{marginBottom:"var(--space-lg)",lineHeight:"1.6"},children:"The Input component provides a comprehensive form input solution with support for different input types, validation states, sizes, and accessibility features. Built with modern web standards and React best practices."}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-md)",flexWrap:"wrap"},children:[e.jsx(l,{variant:"primary",children:"Multiple Types"}),e.jsx(l,{variant:"success",children:"3 Sizes"}),e.jsx(l,{variant:"info",children:"Validation States"}),e.jsx(l,{variant:"secondary",children:"Fully Accessible"})]})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Examples"}),e.jsxs(Je,{title:"Input Types",children:[e.jsx(O,{placeholder:"Text input",value:s,onChange:a=>i(a.target.value)}),e.jsx(O,{type:"email",placeholder:"Email input",value:n,onChange:a=>m(a.target.value)}),e.jsx(O,{type:"password",placeholder:"Password input"}),e.jsx(O,{type:"number",placeholder:"Number input"}),e.jsx(O,{type:"search",placeholder:"Search input"}),e.jsx(O,{type:"url",placeholder:"URL input"})]}),e.jsxs(Je,{title:"Sizes",children:[e.jsx(O,{placeholder:"Small input",size:"sm"}),e.jsx(O,{placeholder:"Medium input",size:"md"}),e.jsx(O,{placeholder:"Large input",size:"lg"})]}),e.jsxs(Je,{title:"States",children:[e.jsx(O,{placeholder:"Normal input"}),e.jsx(O,{placeholder:"Disabled input",disabled:!0}),e.jsx(O,{placeholder:"Error input",isInvalid:!0}),e.jsx(O,{placeholder:"Readonly input",readOnly:!0,value:"Cannot edit this"}),e.jsx(O,{placeholder:"Required input",required:!0})]})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"API Reference"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Props"}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{backgroundColor:"var(--bg-surface)"},children:[e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Prop"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Type"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Default"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"type"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'text' | 'email' | 'password' | 'number' | 'search' | 'url' | 'tel'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'text'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"HTML input type attribute"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"size"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'sm' | 'md' | 'lg'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'md'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Size of the input affecting padding and font size"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"isInvalid"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"false"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Shows error state styling"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"disabled"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"false"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Disables the input and prevents interaction"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"readOnly"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"false"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Makes the input read-only"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"placeholder"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Placeholder text when input is empty"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"value"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Controlled input value"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"onChange"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"(event: ChangeEvent) => void"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Change event handler"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Additional CSS class names for custom styling"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"style"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:"Inline styles for custom styling"})]})]})]})})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Usage Examples"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Controlled Input"}),e.jsx(Ve,{children:`import { Input } from '@flowlabkit/ui';
import { useState } from 'react';

function ContactForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  
  return (
    <form>
      <Input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </form>
  );
}`}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"With Validation"}),e.jsx(Ve,{children:`import { Input } from '@flowlabkit/ui';
import { useState } from 'react';

function ValidatedInput() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  
  const validateEmail = (value: string) => {
    const isValid = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value);
    setError(isValid ? '' : 'Please enter a valid email');
  };
  
  return (
    <div>
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          validateEmail(e.target.value);
        }}
        isInvalid={!!error}
        aria-describedby={error ? "email-error" : undefined}
      />
      {error && (
        <p id="email-error" style={{ color: 'var(--error)', fontSize: 'var(--font-size-sm)' }}>
          {error}
        </p>
      )}
    </div>
  );
}`}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"Search Input with Custom Styling"}),e.jsx(Ve,{children:`import { Input } from '@flowlabkit/ui';

function SearchBar() {
  return (
    <Input
      type="search"
      placeholder="Search products..."
      size="lg"
      className="search-input"
      style={{
        borderRadius: 'var(--radius-full)',
        paddingLeft: '3rem',
        backgroundImage: 'url(search-icon.svg)',
        backgroundPosition: '1rem center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '1rem'
      }}
    />
  );
}`})]})}),e.jsx(o,{children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Accessibility"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Built-in Features"}),e.jsxs("ul",{style:{marginLeft:"var(--space-lg)",lineHeight:"1.6",marginBottom:"var(--space-md)"},children:[e.jsx("li",{children:"Proper focus management with visible focus indicators"}),e.jsx("li",{children:"Support for all standard HTML input attributes"}),e.jsx("li",{children:"Screen reader compatible with proper labeling"}),e.jsx("li",{children:"Validation states announced to assistive technologies"}),e.jsx("li",{children:"Keyboard navigation support"})]}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Best Practices"}),e.jsx(Ve,{children:`// Always provide labels
<label htmlFor="email">Email Address</label>
<Input id="email" type="email" placeholder="Enter your email" />

// Use aria-describedby for error messages
<Input
  type="email"
  isInvalid={hasError}
  aria-describedby="email-error"
/>
{hasError && <p id="email-error">Please enter a valid email</p>}

// Mark required fields
<Input
  type="text"
  placeholder="Name"
  required
  aria-required="true"
/>

// Use fieldset for related inputs
<fieldset>
  <legend>Contact Information</legend>
  <Input type="text" placeholder="First Name" />
  <Input type="text" placeholder="Last Name" />
  <Input type="email" placeholder="Email" />
</fieldset>`})]})})]})},Fe=({children:s,language:i="tsx"})=>e.jsx("pre",{style:{backgroundColor:"var(--bg-elevated)",color:"var(--text-primary)",padding:"var(--space-lg)",borderRadius:"var(--radius-md)",border:"1px solid var(--border-color)",overflow:"auto",fontSize:"var(--font-size-sm)",fontFamily:"Consolas, Monaco, 'Courier New', monospace",margin:"var(--space-md) 0",lineHeight:"1.5"},children:e.jsx("code",{children:s})}),He=({title:s,children:i})=>e.jsxs("div",{style:{marginBottom:"var(--space-lg)"},children:[e.jsx(r,{as:"h4",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:s}),e.jsx("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-surface)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-color)",display:"flex",flexWrap:"wrap",gap:"var(--space-sm)",alignItems:"center"},children:i})]}),os=()=>e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"var(--space-xl)"},children:[e.jsx(r,{as:"h1",size:"3xl",weight:"bold",style:{marginBottom:"var(--space-sm)"},children:"Badge"}),e.jsx(r,{as:"p",size:"lg",color:"secondary",children:"Small status descriptors for labeling, categorizing, and displaying metadata"})]}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Overview"}),e.jsx(r,{as:"p",size:"md",style:{marginBottom:"var(--space-lg)",lineHeight:"1.6"},children:"Badges are small components used to display status, notifications, or metadata. They're perfect for showing counts, labels, categories, or any short piece of information that needs to stand out from the main content."}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-md)",flexWrap:"wrap"},children:[e.jsx(l,{variant:"primary",children:"7 Variants"}),e.jsx(l,{variant:"success",children:"3 Sizes"}),e.jsx(l,{variant:"info",children:"3 Shapes"}),e.jsx(l,{variant:"secondary",children:"Flexible Content"})]})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Examples"}),e.jsxs(He,{title:"Variants",children:[e.jsx(l,{variant:"default",children:"Default"}),e.jsx(l,{variant:"primary",children:"Primary"}),e.jsx(l,{variant:"secondary",children:"Secondary"}),e.jsx(l,{variant:"success",children:"Success"}),e.jsx(l,{variant:"warning",children:"Warning"}),e.jsx(l,{variant:"error",children:"Error"}),e.jsx(l,{variant:"info",children:"Info"})]}),e.jsxs(He,{title:"Sizes",children:[e.jsx(l,{size:"sm",children:"Small Badge"}),e.jsx(l,{size:"md",children:"Medium Badge"}),e.jsx(l,{size:"lg",children:"Large Badge"})]}),e.jsxs(He,{title:"Shapes",children:[e.jsx(l,{shape:"rounded",children:"Rounded"}),e.jsx(l,{shape:"square",children:"Square"}),e.jsx(l,{shape:"pill",children:"Pill Shape"}),e.jsx(l,{dot:!0,size:"md",variant:"primary"})]}),e.jsx(He,{title:"Real-world Usage",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-md)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-sm)"},children:[e.jsx(r,{children:"Messages"}),e.jsx(l,{variant:"primary",shape:"pill",size:"sm",children:"3"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-sm)"},children:[e.jsx(r,{children:"Status:"}),e.jsx(l,{variant:"success",size:"sm",children:"Active"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-sm)"},children:[e.jsx(r,{children:"Priority:"}),e.jsx(l,{variant:"error",size:"sm",children:"High"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-sm)"},children:[e.jsx(r,{children:"Version:"}),e.jsx(l,{variant:"info",shape:"pill",children:"v2.1.0"})]})]})})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"API Reference"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Props"}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{backgroundColor:"var(--bg-surface)"},children:[e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Prop"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Type"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Default"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"variant"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'default'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Visual style variant affecting color scheme"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"size"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'sm' | 'md' | 'lg'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'md'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Size of the badge affecting padding and font size"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"shape"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'rounded' | 'square' | 'pill'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'rounded'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Shape style of the badge corners"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"dot"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"false"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Renders as a circular dot without content"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"children"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Content to display inside the badge"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Additional CSS class names for custom styling"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"style"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:"Inline styles for custom styling"})]})]})]})})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Usage Examples"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Notification Badges"}),e.jsx(Fe,{children:`import { Badge, Text } from '@flowlabkit/ui';

function NotificationBell() {
  const notificationCount = 5;
  
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button>🔔</button>
      {notificationCount > 0 && (
        <Badge
          variant="error"
          shape="circle"
          size="sm"
          style={{
            position: 'absolute',
            top: '-8px',
            right: '-8px',
            minWidth: '20px',
            height: '20px'
          }}
        >
          {notificationCount > 99 ? '99+' : notificationCount}
        </Badge>
      )}
    </div>
  );
}`}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"Status Labels"}),e.jsx(Fe,{children:`import { Badge, Text } from '@flowlabkit/ui';

function UserStatus({ user }: { user: User }) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge variant="success" size="sm">Active</Badge>;
      case 'inactive':
        return <Badge variant="secondary" size="sm">Inactive</Badge>;
      case 'pending':
        return <Badge variant="warning" size="sm">Pending</Badge>;
      case 'blocked':
        return <Badge variant="error" size="sm">Blocked</Badge>;
      default:
        return <Badge variant="default" size="sm">Unknown</Badge>;
    }
  };
  
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <Text>{user.name}</Text>
      {getStatusBadge(user.status)}
    </div>
  );
}`}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"Category Tags"}),e.jsx(Fe,{children:`import { Badge } from '@flowlabkit/ui';

function BlogPost({ post }: { post: Post }) {
  return (
    <article>
      <h2>{post.title}</h2>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        {post.categories.map((category) => (
          <Badge
            key={category}
            variant="outline"
            shape="pill"
            size="sm"
          >
            {category}
          </Badge>
        ))}
      </div>
      <p>{post.excerpt}</p>
    </article>
  );
}`}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"Custom Styled Badge"}),e.jsx(Fe,{children:`import { Badge } from '@flowlabkit/ui';

function PremiumBadge() {
  return (
    <Badge
      variant="primary"
      shape="pill"
      className="premium-badge"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        border: 'none',
        boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)'
      }}
    >
      ✨ Premium
    </Badge>
  );
}`})]})}),e.jsx(o,{children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Accessibility"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Built-in Features"}),e.jsxs("ul",{style:{marginLeft:"var(--space-lg)",lineHeight:"1.6",marginBottom:"var(--space-md)"},children:[e.jsx("li",{children:"Semantic HTML structure with proper contrast ratios"}),e.jsx("li",{children:"Screen reader friendly text content"}),e.jsx("li",{children:"Color combinations meet WCAG AA standards"}),e.jsx("li",{children:"Keyboard navigation support when used as interactive elements"})]}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Best Practices"}),e.jsx(Fe,{children:`// Use aria-label for icon-only badges
<Badge variant="error" shape="circle" aria-label="3 unread notifications">
  3
</Badge>

// Provide context for screen readers
<Badge 
  variant="success" 
  aria-label="Status: Active user account"
>
  Active
</Badge>

// Use role="status" for live updates
<Badge 
  variant="warning" 
  role="status" 
  aria-live="polite"
>
  {connectionStatus}
</Badge>

// Ensure sufficient color contrast
<Badge
  variant="custom"
  style={{
    backgroundColor: '#1f2937', // Dark background
    color: '#f9fafb'           // Light text for contrast
  }}
>
  High Contrast
</Badge>`})]})})]}),Ie=({children:s,language:i="tsx"})=>e.jsx("pre",{style:{backgroundColor:"var(--bg-elevated)",color:"var(--text-primary)",padding:"var(--space-lg)",borderRadius:"var(--radius-md)",border:"1px solid var(--border-color)",overflow:"auto",fontSize:"var(--font-size-sm)",fontFamily:"Consolas, Monaco, 'Courier New', monospace",margin:"var(--space-md) 0",lineHeight:"1.5"},children:e.jsx("code",{children:s})}),Le=({title:s,children:i})=>e.jsxs("div",{style:{marginBottom:"var(--space-lg)"},children:[e.jsx(r,{as:"h4",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:s}),e.jsx("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-surface)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-color)",display:"flex",flexDirection:"column",gap:"var(--space-sm)"},children:i})]}),ds=()=>e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"var(--space-xl)"},children:[e.jsx(r,{as:"h1",size:"3xl",weight:"bold",style:{marginBottom:"var(--space-sm)"},children:"Text"}),e.jsx(r,{as:"p",size:"lg",color:"secondary",children:"Versatile typography component for all text content with semantic HTML support"})]}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Overview"}),e.jsx(r,{as:"p",size:"md",style:{marginBottom:"var(--space-lg)",lineHeight:"1.6"},children:"The Text component is the foundation of all typography in your application. It provides semantic HTML rendering, consistent sizing, typography scales, and color variants while maintaining accessibility and design system consistency."}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-md)",flexWrap:"wrap"},children:[e.jsx(l,{variant:"primary",children:"Semantic Elements"}),e.jsx(l,{variant:"success",children:"7 Sizes"}),e.jsx(l,{variant:"info",children:"4 Weights"}),e.jsx(l,{variant:"secondary",children:"Color System"})]})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Examples"}),e.jsxs(Le,{title:"Semantic Elements",children:[e.jsx(r,{as:"h1",size:"2xl",weight:"bold",children:"Heading 1 (h1)"}),e.jsx(r,{as:"h2",size:"xl",weight:"semibold",children:"Heading 2 (h2)"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",children:"Heading 3 (h3)"}),e.jsx(r,{as:"h4",size:"md",weight:"medium",children:"Heading 4 (h4)"}),e.jsx(r,{as:"p",size:"md",children:"Paragraph text content"}),e.jsx(r,{as:"span",size:"sm",children:"Inline span element"}),e.jsx(r,{as:"div",size:"sm",color:"secondary",children:"Division element"})]}),e.jsxs(Le,{title:"Size Scale",children:[e.jsx(r,{size:"xs",children:"Extra Small (xs)"}),e.jsx(r,{size:"sm",children:"Small (sm)"}),e.jsx(r,{size:"md",children:"Medium (md) - Default"}),e.jsx(r,{size:"lg",children:"Large (lg)"}),e.jsx(r,{size:"xl",children:"Extra Large (xl)"}),e.jsx(r,{size:"2xl",children:"2X Large (2xl)"}),e.jsx(r,{size:"3xl",children:"3X Large (3xl)"})]}),e.jsxs(Le,{title:"Font Weights",children:[e.jsx(r,{weight:"normal",children:"Normal Weight"}),e.jsx(r,{weight:"medium",children:"Medium Weight"}),e.jsx(r,{weight:"semibold",children:"Semi Bold Weight"}),e.jsx(r,{weight:"bold",children:"Bold Weight"})]}),e.jsxs(Le,{title:"Color Variants",children:[e.jsx(r,{color:"primary",children:"Primary Color"}),e.jsx(r,{color:"secondary",children:"Secondary Color"}),e.jsx(r,{color:"tertiary",children:"Tertiary Color"}),e.jsx(r,{color:"muted",children:"Muted Color"}),e.jsx(r,{color:"accent",children:"Accent Color"}),e.jsx(r,{color:"error",children:"Error Color"}),e.jsx(r,{color:"success",children:"Success Color"}),e.jsx(r,{color:"warning",children:"Warning Color"}),e.jsx(r,{color:"info",children:"Info Color"})]}),e.jsx(Le,{title:"Real-world Usage",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-md)"},children:[e.jsx(r,{as:"h2",size:"xl",weight:"bold",children:"Article Title"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",children:"Published on March 15, 2024"}),e.jsx(r,{as:"p",size:"md",style:{lineHeight:"1.6"},children:"This is a sample paragraph that demonstrates how the Text component can be used for body content with proper line height and spacing."}),e.jsx(r,{as:"div",size:"lg",weight:"medium",color:"muted",style:{fontStyle:"italic",borderLeft:"4px solid var(--accent-200)",paddingLeft:"var(--space-md)"},children:'"Design is not just what it looks like and feels like. Design is how it works."'})]})})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"API Reference"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Props"}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{backgroundColor:"var(--bg-surface)"},children:[e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Prop"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Type"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Default"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"as"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'p'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"HTML element to render for semantic meaning"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"size"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'md'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Font size from the design system scale"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"weight"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'normal' | 'medium' | 'semibold' | 'bold'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'normal'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Font weight for emphasis and hierarchy"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"color"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'primary' | 'secondary' | 'tertiary' | 'muted' | 'accent' | 'success' | 'warning' | 'error' | 'info'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'primary'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Semantic color from the theme system"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"children"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Text content or nested elements"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Additional CSS class names for custom styling"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"style"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:"Inline styles for custom styling"})]})]})]})})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Usage Examples"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Typography Hierarchy"}),e.jsx(Ie,{children:`import { Text } from '@flowlabkit/ui';

function BlogPost({ post }: { post: Post }) {
  return (
    <article>
      <Text as="h1" size="3xl" weight="bold">
        {post.title}
      </Text>
      
      <Text as="p" size="sm" color="secondary" style={{ marginBottom: '2rem' }}>
        By {post.author} • {post.publishedDate}
      </Text>
      
      <Text as="h2" size="xl" weight="semibold">
        Introduction
      </Text>
      
      <Text as="p" size="md" style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
        {post.introduction}
      </Text>
      
      <Text as="blockquote" size="lg" weight="medium" color="muted">
        "{post.quote}"
      </Text>
    </article>
  );
}`}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"Status Messages"}),e.jsx(Ie,{children:`import { Text } from '@flowlabkit/ui';

function StatusMessages({ status }: { status: 'success' | 'error' | 'warning' }) {
  const getStatusText = () => {
    switch (status) {
      case 'success':
        return (
          <Text color="success" weight="medium">
            ✅ Operation completed successfully
          </Text>
        );
      case 'error':
        return (
          <Text color="error" weight="medium">
            ❌ An error occurred while processing
          </Text>
        );
      case 'warning':
        return (
          <Text color="warning" weight="medium">
            ⚠️  Please review the following information
          </Text>
        );
    }
  };
  
  return (
    <div>
      {getStatusText()}
    </div>
  );
}`}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"Custom Styled Text"}),e.jsx(Ie,{children:`import { Text } from '@flowlabkit/ui';

function CustomStyledText() {
  return (
    <div>
      <Text
        as="h2"
        size="2xl"
        weight="bold"
        className="gradient-text"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}
      >
        Gradient Heading
      </Text>
      
      <Text
        as="p"
        size="md"
        style={{
          fontFamily: 'Georgia, serif',
          fontStyle: 'italic',
          textAlign: 'center',
          maxWidth: '600px',
          margin: '0 auto'
        }}
      >
        Custom typography with serif font and italic styling
      </Text>
    </div>
  );
}`}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"Responsive Text"}),e.jsx(Ie,{children:`import { Text } from '@flowlabkit/ui';

function ResponsiveHeading() {
  return (
    <Text
      as="h1"
      size="2xl"  // Default size
      className="responsive-heading"
      style={{
        // CSS custom properties for responsive design
        fontSize: 'clamp(1.5rem, 4vw, 3rem)',
        lineHeight: '1.2',
      }}
    >
      Responsive Heading Text
    </Text>
  );
}`})]})}),e.jsx(o,{children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Accessibility"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Built-in Features"}),e.jsxs("ul",{style:{marginLeft:"var(--space-lg)",lineHeight:"1.6",marginBottom:"var(--space-md)"},children:[e.jsx("li",{children:"Semantic HTML elements for proper document structure"}),e.jsx("li",{children:"Proper heading hierarchy for screen readers"}),e.jsx("li",{children:"Color contrast ratios meet WCAG AA standards"}),e.jsx("li",{children:"Scalable text that respects user font size preferences"}),e.jsx("li",{children:"Keyboard navigation and focus management"})]}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Best Practices"}),e.jsx(Ie,{children:`// Use proper heading hierarchy
<Text as="h1" size="3xl" weight="bold">Main Page Title</Text>
<Text as="h2" size="xl" weight="semibold">Section Heading</Text>
<Text as="h3" size="lg" weight="medium">Subsection Heading</Text>

// Provide sufficient color contrast
<Text color="primary">Primary text with proper contrast</Text>

// Use semantic elements appropriately
<Text as="p" size="md">Body paragraph content</Text>
<Text as="blockquote" size="lg">Quoted content</Text>

// Don't skip heading levels
❌ <Text as="h1">Title</Text> → <Text as="h3">Skip h2</Text>
✅ <Text as="h1">Title</Text> → <Text as="h2">Proper hierarchy</Text>

// Use color AND other indicators for meaning
<Text color="error" weight="bold" aria-label="Error message">
  ❌ Error: Please fix the following issues
</Text>`})]})})]}),Re=({children:s,language:i="tsx"})=>e.jsx("pre",{style:{backgroundColor:"var(--bg-elevated)",color:"var(--text-primary)",padding:"var(--space-lg)",borderRadius:"var(--radius-md)",border:"1px solid var(--border-color)",overflow:"auto",fontSize:"var(--font-size-sm)",fontFamily:"Consolas, Monaco, 'Courier New', monospace",margin:"var(--space-md) 0",lineHeight:"1.5"},children:e.jsx("code",{children:s})}),Ae=({title:s,children:i})=>e.jsxs("div",{style:{marginBottom:"var(--space-lg)"},children:[e.jsx(r,{as:"h4",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:s}),e.jsx("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-surface)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-color)",display:"flex",flexWrap:"wrap",gap:"var(--space-md)",alignItems:"center"},children:i})]}),ns=()=>e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"var(--space-xl)"},children:[e.jsx(r,{as:"h1",size:"3xl",weight:"bold",style:{marginBottom:"var(--space-sm)"},children:"Link"}),e.jsx(r,{as:"p",size:"lg",color:"secondary",children:"Navigation component for internal and external links with accessibility support"})]}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Overview"}),e.jsx(r,{as:"p",size:"md",style:{marginBottom:"var(--space-lg)",lineHeight:"1.6"},children:"The Link component provides consistent navigation styling and behavior for both internal and external links. It includes hover states, focus management, and accessibility features while maintaining design system consistency."}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-md)",flexWrap:"wrap"},children:[e.jsx(l,{variant:"primary",children:"Multiple Variants"}),e.jsx(l,{variant:"success",children:"3 Sizes"}),e.jsx(l,{variant:"info",children:"Hover States"}),e.jsx(l,{variant:"secondary",children:"Accessible"})]})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Examples"}),e.jsxs(Ae,{title:"Variants",children:[e.jsx(V,{href:"#",variant:"primary",children:"Primary Link"}),e.jsx(V,{href:"#",variant:"secondary",children:"Secondary Link"}),e.jsx(V,{href:"#",variant:"accent",children:"Accent Link"}),e.jsx(V,{href:"#",variant:"muted",children:"Muted Link"})]}),e.jsxs(Ae,{title:"Underline Styles",children:[e.jsx(V,{href:"#",underline:"always",children:"Always Underlined"}),e.jsx(V,{href:"#",underline:"hover",children:"Underline on Hover"}),e.jsx(V,{href:"#",underline:"never",children:"Never Underlined"})]}),e.jsxs(Ae,{title:"Sizes",children:[e.jsx(V,{href:"#",size:"sm",children:"Small Link"}),e.jsx(V,{href:"#",size:"md",children:"Medium Link"}),e.jsx(V,{href:"#",size:"lg",children:"Large Link"})]}),e.jsxs(Ae,{title:"States",children:[e.jsx(V,{href:"#",children:"Normal Link"}),e.jsx(V,{href:"#",disabled:!0,children:"Disabled Link"}),e.jsx(V,{href:"https://example.com",external:!0,children:"External Link ↗"})]}),e.jsx(Ae,{title:"Usage in Context",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-md)"},children:[e.jsxs(r,{as:"p",children:["Visit our ",e.jsx(V,{href:"#",variant:"primary",children:"documentation"})," to learn more about the components."]}),e.jsxs(r,{as:"p",children:["For support, contact us at ",e.jsx(V,{href:"#",variant:"accent",underline:"always",children:"support@example.com"}),"."]}),e.jsxs(r,{as:"p",children:["Check out our ",e.jsx(V,{href:"#",external:!0,variant:"secondary",children:"GitHub repository ↗"})," for the source code."]})]})})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"API Reference"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Props"}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{backgroundColor:"var(--bg-surface)"},children:[e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Prop"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Type"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Default"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"href"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"required"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"URL or path for the link destination"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"variant"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'primary' | 'secondary' | 'accent' | 'muted'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'primary'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Visual style variant affecting color and decoration"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"size"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'sm' | 'md' | 'lg'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'md'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Font size of the link text"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"underline"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'always' | 'hover' | 'never'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'hover'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Text decoration behavior for the link"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"disabled"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"false"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Disables the link and prevents navigation"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"external"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"false"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Opens link in new tab with security attributes"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"children"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Link text content or nested elements"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Additional CSS class names for custom styling"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"style"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:"Inline styles for custom styling"})]})]})]})})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Usage Examples"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Navigation Menu"}),e.jsx(Re,{children:`import { Link } from '@flowlabkit/ui';

function NavigationMenu() {
  return (
    <nav>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/products" variant="primary">Products</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}`}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"Content Links"}),e.jsx(Re,{children:`import { Link, Text } from '@flowlabkit/ui';

function BlogPost() {
  return (
    <article>
      <Text as="h1" size="2xl">Understanding React Hooks</Text>
      
      <Text as="p" style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
        React Hooks have revolutionized how we write components. 
        Learn more in the{' '}
        <Link 
          href="https://reactjs.org/docs/hooks-intro.html" 
          external 
          variant="primary"
        >
          official React documentation
        </Link>
        .
      </Text>
      
      <Text as="p">
        For advanced patterns, check out our{' '}
        <Link href="/guides/advanced-hooks" variant="accent" underline="always">
          advanced hooks guide
        </Link>
        .
      </Text>
    </article>
  );
}`}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"Custom Styled Links"}),e.jsx(Re,{children:`import { Link } from '@flowlabkit/ui';

function CustomLinks() {
  return (
    <div>
      {/* Button-like link */}
      <Link
        href="/signup"
        variant="primary"
        className="button-link"
        style={{
          display: 'inline-block',
          padding: '0.75rem 1.5rem',
          backgroundColor: 'var(--accent-500)',
          color: 'white',
          borderRadius: 'var(--radius-md)',
          textDecoration: 'none',
          fontWeight: 'var(--font-weight-semibold)',
          transition: 'var(--transition-base)'
        }}
      >
        Get Started
      </Link>
      
      {/* Subtle link */}
      <Link
        href="/privacy"
        variant="muted"
        size="sm"
        style={{
          textDecoration: 'none',
          borderBottom: '1px dotted var(--text-muted)'
        }}
      >
        Privacy Policy
      </Link>
    </div>
  );
}`}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"Conditional Link States"}),e.jsx(Re,{children:`import { Link } from '@flowlabkit/ui';

function ConditionalLink({ 
  isAuthenticated, 
  href, 
  children 
}: { 
  isAuthenticated: boolean; 
  href: string; 
  children: React.ReactNode; 
}) {
  return (
    <Link
      href={href}
      disabled={!isAuthenticated}
      variant={isAuthenticated ? 'primary' : 'muted'}
      style={{
        cursor: isAuthenticated ? 'pointer' : 'not-allowed',
        opacity: isAuthenticated ? 1 : 0.6
      }}
    >
      {children}
      {!isAuthenticated && ' (Login Required)'}
    </Link>
  );
}`})]})}),e.jsx(o,{children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Accessibility"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Built-in Features"}),e.jsxs("ul",{style:{marginLeft:"var(--space-lg)",lineHeight:"1.6",marginBottom:"var(--space-md)"},children:[e.jsx("li",{children:"Semantic HTML anchor elements for proper navigation"}),e.jsx("li",{children:"Keyboard navigation support with focus indicators"}),e.jsx("li",{children:"Screen reader compatible link descriptions"}),e.jsx("li",{children:'External links include security attributes (rel="noopener noreferrer")'}),e.jsx("li",{children:"Disabled state prevents navigation and keyboard access"})]}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Best Practices"}),e.jsx(Re,{children:`// Provide descriptive link text
❌ <Link href="/docs">Click here</Link>
✅ <Link href="/docs">View documentation</Link>

// Use aria-label for context when needed
<Link 
  href="/profile" 
  aria-label="View your user profile"
>
  Profile
</Link>

// Indicate external links
<Link 
  href="https://example.com" 
  external
  aria-label="Visit example.com (opens in new tab)"
>
  External Resource ↗
</Link>

// Handle disabled states properly
<Link 
  href="/premium-feature" 
  disabled={!isPremium}
  aria-disabled={!isPremium}
  title={!isPremium ? "Upgrade to premium to access this feature" : undefined}
>
  Premium Feature
</Link>

// Use semantic markup for navigation
<nav aria-label="Main navigation">
  <ul>
    <li><Link href="/">Home</Link></li>
    <li><Link href="/about">About</Link></li>
    <li><Link href="/contact">Contact</Link></li>
  </ul>
</nav>`})]})})]}),Pe=({children:s,language:i="tsx"})=>e.jsx("pre",{style:{backgroundColor:"var(--bg-elevated)",color:"var(--text-primary)",padding:"var(--space-lg)",borderRadius:"var(--radius-md)",border:"1px solid var(--border-color)",overflow:"auto",fontSize:"var(--font-size-sm)",fontFamily:"Consolas, Monaco, 'Courier New', monospace",margin:"var(--space-md) 0",lineHeight:"1.5"},children:e.jsx("code",{children:s})}),Ue=({title:s,children:i})=>e.jsxs("div",{style:{marginBottom:"var(--space-lg)"},children:[e.jsx(r,{as:"h4",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:s}),e.jsx("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-surface)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-color)",display:"flex",flexWrap:"wrap",gap:"var(--space-md)",alignItems:"center"},children:i})]}),ls=()=>e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"var(--space-xl)"},children:[e.jsx(r,{as:"h1",size:"3xl",weight:"bold",style:{marginBottom:"var(--space-sm)"},children:"Spinner"}),e.jsx(r,{as:"p",size:"lg",color:"secondary",children:"Loading spinner component for indicating async operations and loading states"})]}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Overview"}),e.jsx(r,{as:"p",size:"md",style:{marginBottom:"var(--space-lg)",lineHeight:"1.6"},children:"The Spinner component provides visual feedback for loading states with multiple variants, sizes, and animation options. Perfect for indicating data fetching, form submissions, or any async operations."}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-md)",flexWrap:"wrap"},children:[e.jsx(l,{variant:"primary",children:"6 Variants"}),e.jsx(l,{variant:"success",children:"5 Sizes"}),e.jsx(l,{variant:"info",children:"3 Thickness Options"}),e.jsx(l,{variant:"secondary",children:"3 Speed Settings"})]})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Examples"}),e.jsxs(Ue,{title:"Variants",children:[e.jsx(L,{variant:"primary"}),e.jsx(L,{variant:"accent"}),e.jsx(L,{variant:"success"}),e.jsx(L,{variant:"warning"}),e.jsx(L,{variant:"error"}),e.jsx(L,{variant:"secondary"})]}),e.jsxs(Ue,{title:"Sizes",children:[e.jsx(L,{variant:"accent",size:"xs"}),e.jsx(L,{variant:"accent",size:"sm"}),e.jsx(L,{variant:"accent",size:"md"}),e.jsx(L,{variant:"accent",size:"lg"}),e.jsx(L,{variant:"accent",size:"xl"})]}),e.jsxs(Ue,{title:"Thickness Options",children:[e.jsx(L,{variant:"accent",thickness:"thin"}),e.jsx(L,{variant:"accent",thickness:"medium"}),e.jsx(L,{variant:"accent",thickness:"thick"})]}),e.jsxs(Ue,{title:"Speed Settings",children:[e.jsx(L,{variant:"accent",speed:"slow"}),e.jsx(L,{variant:"accent",speed:"normal"}),e.jsx(L,{variant:"accent",speed:"fast"})]})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"API Reference"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Props"}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{backgroundColor:"var(--bg-surface)"},children:[e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Prop"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Type"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Default"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"variant"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'primary'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Color variant of the spinner"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"size"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'xs' | 'sm' | 'md' | 'lg' | 'xl'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'md'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Size of the spinner (16px to 48px)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"thickness"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'thin' | 'medium' | 'thick'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'medium'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Thickness of the spinner border"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"speed"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'slow' | 'normal' | 'fast'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'normal'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Animation speed (2s, 1s, 0.5s)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Additional CSS class names for custom styling"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"style"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:"Inline styles for custom styling"})]})]})]})})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Usage Examples"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Basic Usage"}),e.jsx(Pe,{children:`import { Spinner } from '@flowlabkit/ui';

function LoadingComponent() {
  return (
    <div>
      <p>Loading data...</p>
      <Spinner variant="primary" size="md" />
    </div>
  );
}`}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"In Buttons"}),e.jsx(Pe,{children:`import { Button, Spinner } from '@flowlabkit/ui';

function SubmitButton({ loading }) {
  return (
    <Button disabled={loading}>
      {loading && <Spinner size="sm" />}
      {loading ? 'Submitting...' : 'Submit'}
    </Button>
  );
}`}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"Centered Loading Screen"}),e.jsx(Pe,{children:`import { Spinner } from '@flowlabkit/ui';

function LoadingScreen() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      gap: '1rem'
    }}>
      <Spinner variant="accent" size="lg" />
      <p>Loading your content...</p>
    </div>
  );
}`}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"Data Fetching Hook"}),e.jsx(Pe,{children:`import { useState, useEffect } from 'react';
import { Spinner } from '@flowlabkit/ui';

function DataComponent() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);
  
  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <Spinner variant="primary" size="lg" />
        <p>Fetching data...</p>
      </div>
    );
  }
  
  return <div>{/* Render data */}</div>;
}`})]})}),e.jsx(o,{children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Accessibility"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Built-in Features"}),e.jsxs("ul",{style:{marginLeft:"var(--space-lg)",lineHeight:"1.6",marginBottom:"var(--space-md)"},children:[e.jsx("li",{children:"Proper ARIA attributes for screen readers"}),e.jsx("li",{children:"Respects user's motion preferences"}),e.jsx("li",{children:'Semantic role as "status" for live updates'}),e.jsx("li",{children:"Hidden from focus as it's not interactive"})]}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Best Practices"}),e.jsx(Pe,{children:`// Provide context with aria-label
<Spinner aria-label="Loading user data" />

// Use with descriptive text
<div>
  <Spinner size="sm" />
  <span>Saving changes...</span>
</div>

// Announce completion to screen readers
function AsyncOperation() {
  const [loading, setLoading] = useState(false);
  const [complete, setComplete] = useState(false);
  
  return (
    <div>
      {loading && <Spinner aria-label="Processing request" />}
      {complete && (
        <div role="alert" aria-live="polite">
          Operation completed successfully
        </div>
      )}
    </div>
  );
}`})]})})]}),je=({children:s,language:i="tsx"})=>e.jsx("pre",{style:{backgroundColor:"var(--bg-elevated)",color:"var(--text-primary)",padding:"var(--space-lg)",borderRadius:"var(--radius-md)",border:"1px solid var(--border-color)",overflow:"auto",fontSize:"var(--font-size-sm)",fontFamily:"Consolas, Monaco, 'Courier New', monospace",margin:"var(--space-md) 0",lineHeight:"1.5"},children:e.jsx("code",{children:s})}),be=({title:s,children:i})=>e.jsxs("div",{style:{marginBottom:"var(--space-lg)"},children:[e.jsx(r,{as:"h4",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:s}),e.jsx("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-surface)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-color)",display:"flex",flexWrap:"wrap",gap:"var(--space-lg)",alignItems:"center",justifyContent:"center"},children:i})]}),cs=()=>e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"var(--space-xl)"},children:[e.jsx(r,{as:"h1",size:"3xl",weight:"bold",style:{marginBottom:"var(--space-sm)"},children:"LoadingIndicator"}),e.jsx(r,{as:"p",size:"lg",color:"secondary",children:"Advanced loading animations with customizable types, text positioning, and visual styles"})]}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Overview"}),e.jsx(r,{as:"p",size:"md",style:{marginBottom:"var(--space-lg)",lineHeight:"1.6"},children:"The LoadingIndicator component provides a rich set of animated loading states perfect for indicating progress, data fetching, or processing operations. It supports multiple animation types, text integration, and comprehensive customization options."}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-md)",flexWrap:"wrap"},children:[e.jsx(l,{variant:"primary",children:"5 Animation Types"}),e.jsx(l,{variant:"success",children:"5 Sizes"}),e.jsx(l,{variant:"info",children:"6 Color Variants"}),e.jsx(l,{variant:"secondary",children:"Text Integration"})]})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Examples"}),e.jsx(be,{title:"Animation Types",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-md)",alignItems:"center"},children:[e.jsx(S,{type:"dots",text:"Dots"}),e.jsx(S,{type:"pulse",text:"Pulse"}),e.jsx(S,{type:"wave",text:"Wave"}),e.jsx(S,{type:"bars",text:"Bars"}),e.jsx(S,{type:"bounce",text:"Bounce"})]})}),e.jsx(be,{title:"Sizes",children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-lg)"},children:[e.jsx(S,{size:"xs",text:"XS"}),e.jsx(S,{size:"sm",text:"SM"}),e.jsx(S,{size:"md",text:"MD"}),e.jsx(S,{size:"lg",text:"LG"}),e.jsx(S,{size:"xl",text:"XL"})]})}),e.jsx(be,{title:"Color Variants",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-md)",alignItems:"center"},children:[e.jsx(S,{variant:"primary",text:"Primary"}),e.jsx(S,{variant:"secondary",text:"Secondary"}),e.jsx(S,{variant:"accent",text:"Accent"}),e.jsx(S,{variant:"success",text:"Success"}),e.jsx(S,{variant:"warning",text:"Warning"}),e.jsx(S,{variant:"error",text:"Error"})]})}),e.jsx(be,{title:"Animation Speed",children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-lg)"},children:[e.jsx(S,{speed:"slow",text:"Slow"}),e.jsx(S,{speed:"normal",text:"Normal"}),e.jsx(S,{speed:"fast",text:"Fast"})]})}),e.jsx(be,{title:"Text Positioning",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--space-lg)",alignItems:"center",width:"100%"},children:[e.jsx(S,{textPosition:"left",text:"Loading..."}),e.jsx(S,{textPosition:"right",text:"Loading..."}),e.jsx(S,{textPosition:"top",text:"Loading..."}),e.jsx(S,{textPosition:"bottom",text:"Loading..."})]})}),e.jsx(be,{title:"Real-world Usage",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-lg)",width:"100%"},children:[e.jsx(o,{variant:"outlined",style:{padding:"var(--space-lg)",textAlign:"center"},children:e.jsx(S,{type:"wave",variant:"primary",size:"lg",text:"Fetching user data...",textPosition:"bottom"})}),e.jsx(o,{variant:"filled",style:{padding:"var(--space-lg)",textAlign:"center"},children:e.jsx(S,{type:"bounce",variant:"success",size:"md",text:"Processing payment...",textPosition:"right",speed:"fast"})}),e.jsx(o,{variant:"elevated",style:{padding:"var(--space-lg)",textAlign:"center"},children:e.jsx(S,{type:"bars",variant:"accent",size:"sm",text:"Uploading files...",textPosition:"left"})})]})})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"API Reference"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Props"}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{backgroundColor:"var(--bg-surface)"},children:[e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Prop"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Type"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Default"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"type"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'dots' | 'pulse' | 'wave' | 'bars' | 'bounce'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'dots'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Animation type for the loading indicator"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"size"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'xs' | 'sm' | 'md' | 'lg' | 'xl'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'md'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Size of the loading animation elements"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"variant"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'primary'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Color variant from the theme system"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"speed"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'slow' | 'normal' | 'fast'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'normal'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Animation speed timing"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"text"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Optional text to display with the loading animation"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"textPosition"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'left' | 'right' | 'top' | 'bottom'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'right'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Position of text relative to the animation"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Additional CSS class names for custom styling"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"style"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:"Inline styles for custom styling"})]})]})]})})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Usage Examples"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Data Fetching States"}),e.jsx(je,{children:`import { LoadingIndicator } from '@flowlabkit/ui';
import { useState, useEffect } from 'react';

function DataFetcher() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetchData()
      .then(setData)
      .finally(() => setLoading(false));
  }, []);
  
  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        padding: '2rem' 
      }}>
        <LoadingIndicator
          type="wave"
          variant="primary"
          size="lg"
          text="Loading data..."
          textPosition="bottom"
        />
      </div>
    );
  }
  
  return <div>{/* Render data */}</div>;
}`}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"Form Submission Loading"}),e.jsx(je,{children:`import { LoadingIndicator, Button } from '@flowlabkit/ui';
import { useState } from 'react';

function SubmitForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await submitForm();
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      
      <Button 
        type="submit" 
        disabled={isSubmitting}
        style={{ position: 'relative' }}
      >
        {isSubmitting ? (
          <LoadingIndicator
            type="dots"
            variant="secondary"
            size="sm"
            text="Submitting..."
            speed="fast"
          />
        ) : (
          'Submit Form'
        )}
      </Button>
    </form>
  );
}`}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"File Upload Progress"}),e.jsx(je,{children:`import { LoadingIndicator, Card, CardBody, Text } from '@flowlabkit/ui';

function FileUploader({ files, uploadProgress }: FileUploaderProps) {
  return (
    <Card variant="outlined">
      <CardBody>
        <Text as="h3" weight="semibold" style={{ marginBottom: '1rem' }}>
          File Upload
        </Text>
        
        {files.map((file, index) => (
          <div key={file.id} style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0.5rem 0',
            borderBottom: '1px solid var(--border-color)'
          }}>
            <Text>{file.name}</Text>
            
            {uploadProgress[file.id] < 100 ? (
              <LoadingIndicator
                type="bars"
                variant="success"
                size="sm"
                text={\`\${uploadProgress[file.id]}%\`}
                textPosition="right"
                speed="normal"
              />
            ) : (
              <Text color="success" weight="medium">✓ Complete</Text>
            )}
          </div>
        ))}
      </CardBody>
    </Card>
  );
}`}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"Custom Styled Loading Indicator"}),e.jsx(je,{children:`import { LoadingIndicator } from '@flowlabkit/ui';

function CustomLoader() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999
    }}>
      <div style={{
        background: 'white',
        padding: '2rem',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-lg)',
        textAlign: 'center'
      }}>
        <LoadingIndicator
          type="pulse"
          variant="primary"
          size="xl"
          text="Please wait while we process your request..."
          textPosition="bottom"
          speed="slow"
          style={{ 
            color: 'var(--text-primary)',
            gap: '1.5rem'
          }}
        />
      </div>
    </div>
  );
}`}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"Conditional Loading States"}),e.jsx(je,{children:`import { LoadingIndicator, Text } from '@flowlabkit/ui';

function StatusLoader({ 
  status, 
  error 
}: { 
  status: 'loading' | 'success' | 'error'; 
  error?: string;
}) {
  const getLoadingProps = () => {
    switch (status) {
      case 'loading':
        return {
          type: 'bounce' as const,
          variant: 'primary' as const,
          text: 'Processing...'
        };
      case 'success':
        return {
          type: 'pulse' as const,
          variant: 'success' as const,
          text: 'Success!'
        };
      case 'error':
        return {
          type: 'dots' as const,
          variant: 'error' as const,
          text: error || 'Something went wrong'
        };
      default:
        return {
          type: 'dots' as const,
          variant: 'primary' as const,
          text: 'Loading...'
        };
    }
  };
  
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <LoadingIndicator
        {...getLoadingProps()}
        size="lg"
        textPosition="bottom"
        speed={status === 'loading' ? 'normal' : 'fast'}
      />
    </div>
  );
}`})]})}),e.jsx(o,{children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Accessibility"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Built-in Features"}),e.jsxs("ul",{style:{marginLeft:"var(--space-lg)",lineHeight:"1.6",marginBottom:"var(--space-md)"},children:[e.jsx("li",{children:'ARIA role="status" for screen reader compatibility'}),e.jsx("li",{children:"Automatic aria-label generation based on text content"}),e.jsx("li",{children:"Reduced motion support respecting user preferences"}),e.jsx("li",{children:"Semantic status announcements for loading states"}),e.jsx("li",{children:"High contrast color variants for better visibility"})]}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Best Practices"}),e.jsx(je,{children:`// Always provide meaningful loading text
❌ <LoadingIndicator />
✅ <LoadingIndicator text="Loading user profile..." />

// Use appropriate ARIA attributes
<LoadingIndicator
  text="Saving changes..."
  role="status"
  aria-live="polite"
  aria-label="Saving your changes, please wait"
/>

// Respect reduced motion preferences
<LoadingIndicator
  type="dots"
  speed="slow"
  style={{
    animationDuration: 'var(--reduced-motion, 2s)'
  }}
/>

// Provide context for loading states
<div>
  <Text as="h2">User Dashboard</Text>
  {loading && (
    <LoadingIndicator
      text="Loading dashboard data..."
      variant="primary"
      textPosition="bottom"
      aria-describedby="loading-description"
    />
  )}
  <div 
    id="loading-description" 
    style={{ display: 'none' }}
  >
    Please wait while we fetch your personalized dashboard information
  </div>
</div>

// Use semantic variants for different states
<LoadingIndicator variant="success" text="Upload complete" />
<LoadingIndicator variant="error" text="Upload failed" />
<LoadingIndicator variant="warning" text="Processing with warnings" />`})]})})]}),De=({children:s,language:i="tsx"})=>e.jsx("pre",{style:{backgroundColor:"var(--bg-elevated)",color:"var(--text-primary)",padding:"var(--space-lg)",borderRadius:"var(--radius-md)",border:"1px solid var(--border-color)",overflow:"auto",fontSize:"var(--font-size-sm)",fontFamily:"Consolas, Monaco, 'Courier New', monospace",margin:"var(--space-md) 0",lineHeight:"1.5"},children:e.jsx("code",{children:s})}),Ne=({title:s,children:i})=>e.jsxs("div",{style:{marginBottom:"var(--space-lg)"},children:[e.jsx(r,{as:"h4",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:s}),e.jsx("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-surface)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-color)",display:"flex",flexWrap:"wrap",gap:"var(--space-md)",alignItems:"center"},children:i})]}),ms=()=>e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"var(--space-xl)"},children:[e.jsx(r,{as:"h1",size:"3xl",weight:"bold",style:{marginBottom:"var(--space-sm)"},children:"Image"}),e.jsx(r,{as:"p",size:"lg",color:"secondary",children:"Enhanced image component with loading states, fallbacks, and responsive behavior"})]}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Overview"}),e.jsx(r,{as:"p",size:"md",style:{marginBottom:"var(--space-lg)",lineHeight:"1.6"},children:"The Image component provides enhanced functionality over the standard HTML img element, including loading states, error handling, multiple variants, shape options, and responsive behavior. Perfect for avatars, thumbnails, hero images, and content imagery."}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-md)",flexWrap:"wrap"},children:[e.jsx(l,{variant:"primary",children:"5 Variants"}),e.jsx(l,{variant:"success",children:"4 Shapes"}),e.jsx(l,{variant:"info",children:"Loading States"}),e.jsx(l,{variant:"secondary",children:"Error Handling"})]})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Examples"}),e.jsxs(Ne,{title:"Variants",children:[e.jsx(H,{src:"https://picsum.photos/100/100?random=1",alt:"Default variant",variant:"default",width:100,height:100}),e.jsx(H,{src:"https://picsum.photos/100/100?random=2",alt:"Bordered variant",variant:"bordered",width:100,height:100}),e.jsx(H,{src:"https://picsum.photos/100/100?random=3",alt:"Shadow variant",variant:"shadow",width:100,height:100}),e.jsx(H,{src:"https://picsum.photos/100/100?random=4",alt:"Elevated variant",variant:"elevated",width:100,height:100}),e.jsx(H,{src:"https://picsum.photos/100/100?random=5",alt:"Hover lift variant",variant:"hover-lift",width:100,height:100})]}),e.jsxs(Ne,{title:"Shapes",children:[e.jsx(H,{src:"https://picsum.photos/100/100?random=6",alt:"Square shape",shape:"square",width:100,height:100}),e.jsx(H,{src:"https://picsum.photos/100/100?random=7",alt:"Rounded shape",shape:"rounded",width:100,height:100}),e.jsx(H,{src:"https://picsum.photos/100/100?random=8",alt:"Circle shape",shape:"circle",width:100,height:100}),e.jsx(H,{src:"https://picsum.photos/150/75?random=9",alt:"Pill shape",shape:"pill",width:150,height:75})]}),e.jsx(Ne,{title:"Loading and Error States",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-md)"},children:[e.jsxs("div",{children:[e.jsx(r,{size:"sm",color:"secondary",style:{marginBottom:"var(--space-sm)"},children:"Loading State (simulated):"}),e.jsx(H,{src:"https://httpstat.us/200?sleep=5000",alt:"Loading image",width:120,height:120,shape:"rounded"})]}),e.jsxs("div",{children:[e.jsx(r,{size:"sm",color:"secondary",style:{marginBottom:"var(--space-sm)"},children:"Error State (broken URL):"}),e.jsx(H,{src:"https://broken-url-that-will-fail.jpg",alt:"Failed to load",width:120,height:120,shape:"rounded",fallback:"https://via.placeholder.com/120x120/cccccc/666666?text=Error"})]})]})}),e.jsx(Ne,{title:"Real-world Usage",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-lg)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-md)"},children:[e.jsx(H,{src:"https://picsum.photos/50/50?random=10",alt:"User avatar",shape:"circle",variant:"bordered",width:50,height:50}),e.jsxs("div",{children:[e.jsx(r,{weight:"medium",children:"John Doe"}),e.jsx(r,{size:"sm",color:"secondary",children:"Software Engineer"})]})]}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-md)"},children:[e.jsx(H,{src:"https://picsum.photos/80/80?random=11",alt:"Product thumbnail",shape:"rounded",variant:"shadow",width:80,height:80}),e.jsxs("div",{children:[e.jsx(r,{weight:"medium",children:"Product Name"}),e.jsx(r,{size:"sm",color:"secondary",children:"High-quality product description"}),e.jsx(r,{size:"sm",color:"accent",weight:"medium",children:"$29.99"})]})]})]})})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"API Reference"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Props"}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{backgroundColor:"var(--bg-surface)"},children:[e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Prop"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Type"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Default"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"src"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"required"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Image source URL"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"alt"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"required"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Alternative text for accessibility"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"variant"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'default' | 'bordered' | 'shadow' | 'elevated' | 'hover-lift'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'default'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Visual style variant affecting borders and shadows"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"shape"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'square' | 'rounded' | 'circle' | 'pill'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'square'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Border radius style of the image"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"size"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'md'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Predefined size of the image"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"fit"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'cover' | 'contain' | 'fill' | 'scale-down' | 'none'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'cover'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"CSS object-fit behavior for image sizing"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"width"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"number | string"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Image width in pixels or CSS value"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"height"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"number | string"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Image height in pixels or CSS value"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"fallback"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Fallback content when primary image fails to load"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"loading"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'lazy' | 'eager'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'lazy'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Native loading behavior for the image"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Additional CSS class names for custom styling"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"style"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:"Inline styles for custom styling"})]})]})]})})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Usage Examples"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Avatar Component"}),e.jsx(De,{children:`import { Image, Text } from '@flowlabkit/ui';

function UserAvatar({ user }: { user: User }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <Image
        src={user.avatarUrl}
        alt={\`\${user.name}'s avatar\`}
        shape="circle"
        variant="bordered"
        width={40}
        height={40}
        fallback="/default-avatar.png"
      />
      <div>
        <Text weight="medium">{user.name}</Text>
        <Text size="sm" color="secondary">{user.role}</Text>
      </div>
    </div>
  );
}`}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"Product Gallery"}),e.jsx(De,{children:`import { Image } from '@flowlabkit/ui';

function ProductGallery({ images }: { images: ProductImage[] }) {
  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '1rem'
    }}>
      {images.map((image, index) => (
        <Image
          key={image.id}
          src={image.url}
          alt={image.alt}
          variant="shadow"
          shape="rounded"
          width="100%"
          height={200}
          loading={index < 6 ? 'eager' : 'lazy'}
          style={{
            objectFit: 'cover',
            cursor: 'pointer',
            transition: 'var(--transition-base)'
          }}
          onClick={() => openLightbox(image)}
        />
      ))}
    </div>
  );
}`}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"Hero Image with Overlay"}),e.jsx(De,{children:`import { Image, Text } from '@flowlabkit/ui';

function HeroSection() {
  return (
    <div style={{ position: 'relative', height: '400px', overflow: 'hidden' }}>
      <Image
        src="/hero-background.jpg"
        alt="Hero background"
        variant="default"
        shape="square"
        width="100%"
        height="100%"
        style={{
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6))',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white'
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <Text as="h1" size="3xl" weight="bold">
            Welcome to Our Platform
          </Text>
          <Text as="p" size="lg">
            Discover amazing features and possibilities
          </Text>
        </div>
      </div>
    </div>
  );
}`}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"Responsive Image with Error Handling"}),e.jsx(De,{children:`import { Image } from '@flowlabkit/ui';
import { useState } from 'react';

function ResponsiveImage({ src, alt }: { src: string; alt: string }) {
  const [hasError, setHasError] = useState(false);
  
  return (
    <Image
      src={src}
      alt={alt}
      variant="subtle"
      shape="rounded"
      width="100%"
      height="auto"
      style={{
        maxWidth: '100%',
        height: 'auto',
        aspectRatio: '16/9',
        objectFit: 'cover'
      }}
      fallback={hasError ? '/image-error-placeholder.svg' : undefined}
      onError={() => setHasError(true)}
      className="responsive-image"
    />
  );
}`})]})}),e.jsx(o,{children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Accessibility"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Built-in Features"}),e.jsxs("ul",{style:{marginLeft:"var(--space-lg)",lineHeight:"1.6",marginBottom:"var(--space-md)"},children:[e.jsx("li",{children:"Required alt text for screen reader compatibility"}),e.jsx("li",{children:"Proper focus management and keyboard navigation"}),e.jsx("li",{children:"Loading state indicators for assistive technologies"}),e.jsx("li",{children:"Error handling with fallback content"}),e.jsx("li",{children:"Native lazy loading support for performance"})]}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Best Practices"}),e.jsx(De,{children:`// Always provide meaningful alt text
❌ <Image src="/photo.jpg" alt="image" />
✅ <Image src="/photo.jpg" alt="Team photo from company retreat 2024" />

// Use empty alt for decorative images
<Image 
  src="/decorative-pattern.svg" 
  alt="" 
  role="presentation"
/>

// Provide context for complex images
<Image
  src="/chart.png"
  alt="Sales chart showing 25% increase from Q1 to Q2 2024"
  aria-describedby="chart-description"
/>
<div id="chart-description">
  Detailed explanation of the chart data...
</div>

// Handle loading states appropriately
<Image
  src="/large-image.jpg"
  alt="Product showcase"
  loading="lazy"
  aria-label="Product image is loading"
/>

// Use proper aspect ratios
<Image
  src="/hero.jpg"
  alt="Hero image"
  style={{
    aspectRatio: '16/9',
    objectFit: 'cover'
  }}
/>`})]})})]}),ps=()=>{const[s,i]=h.useState("md"),[n,m]=h.useState("default"),[a,c]=h.useState("rounded"),[v,b]=h.useState(!0),[w,g]=h.useState(!0),[x,P]=h.useState(!1),[y,W]=h.useState(!0),[R,N]=h.useState(!1),[U,D]=h.useState(!1),[I,$]=h.useState(!1),[B,p]=h.useState(!1),[k,Q]=h.useState(!1),M="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",se=[{label:"Auto",value:"auto"},{label:"1080p",value:"1080p",src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"},{label:"720p",value:"720p",src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"},{label:"480p",value:"480p",src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"},{label:"360p",value:"360p",src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"},{label:"240p",value:"240p",src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"}];return e.jsxs("div",{style:{padding:"var(--space-lg)",maxWidth:"1200px"},children:[e.jsxs("div",{style:{marginBottom:"var(--space-2xl)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-md)",marginBottom:"var(--space-md)"},children:[e.jsx(r,{as:"h1",size:"3xl",weight:"bold",children:"Video"}),e.jsx(l,{variant:"secondary",size:"sm",children:"Media Component"})]}),e.jsx(r,{as:"p",size:"lg",color:"secondary",style:{marginBottom:"var(--space-lg)"},children:"A feature-rich, themeable video component with transparent container where the video itself takes the shape while themed SVG controls remain always visible. Includes advanced features like fullscreen toggle, autoplay, loop functionality, playback speed controls, loading states, error handling, and a comprehensive 3-dot menu for additional options."}),e.jsx("div",{style:{backgroundColor:"var(--warning-50)",border:"1px solid var(--warning-200)",borderRadius:"var(--radius-md)",padding:"var(--space-md)",marginBottom:"var(--space-lg)"},children:e.jsxs(r,{size:"sm",weight:"medium",style:{color:"var(--warning-700)"},children:["📽️ ",e.jsx("strong",{children:"Demo Videos:"})," Sample videos used in this demo are from Google's test video collection and Big Buck Bunny © copyright 2008, Blender Foundation (www.bigbuckbunny.org), licensed under Creative Commons Attribution 3.0. Used for demonstration purposes only."]})}),e.jsx("div",{style:{backgroundColor:"var(--info-50)",border:"1px solid var(--info-200)",borderRadius:"var(--radius-md)",padding:"var(--space-md)",marginBottom:"var(--space-lg)"},children:e.jsxs(r,{size:"sm",weight:"medium",style:{color:"var(--info-700)"},children:["⚙️ ",e.jsx("strong",{children:"Video Sources Supported:"})," The Video component now supports multiple sources:",e.jsx("br",{}),"• ",e.jsx("strong",{children:"Direct files:"}),' `src="video.mp4"` (HTML5 player with all controls)',e.jsx("br",{}),"• ",e.jsx("strong",{children:"YouTube URLs:"}),' `src="https://youtube.com/watch?v=..." as="url"` (iframe embed)',e.jsx("br",{}),"• ",e.jsx("strong",{children:"Vimeo URLs:"}),' `src="https://vimeo.com/123456" as="url"` (iframe embed)',e.jsx("br",{}),"• ",e.jsx("strong",{children:"Auto-detection:"})," Leave `as` prop empty for automatic detection",e.jsx("br",{}),'• Use `as="player"` to force HTML5 player, `as="url"` to force iframe embed']})}),e.jsx("div",{style:{backgroundColor:"var(--accent-50)",border:"1px solid var(--accent-200)",borderRadius:"var(--radius-md)",padding:"var(--space-md)"},children:e.jsxs(r,{size:"sm",weight:"medium",style:{color:"var(--accent-700)"},children:["💡 ",e.jsx("strong",{children:"Architecture Note:"})," This is the basic Video component. For advanced features like custom controls, playlists, or analytics, consider the enhanced Video component in FlowLabKit UI library."]})})]}),e.jsxs(o,{style:{marginBottom:"var(--space-2xl)"},children:[e.jsx(A,{children:e.jsx(r,{as:"h2",size:"xl",weight:"semibold",children:"Interactive Example"})}),e.jsx(d,{children:e.jsxs("div",{style:{display:"flex",gap:"var(--space-xl)"},children:[e.jsxs("div",{style:{flex:"0 0 300px"},children:[e.jsxs("div",{style:{marginBottom:"var(--space-lg)"},children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Size"}),e.jsx("div",{style:{display:"flex",gap:"var(--space-xs)",flexWrap:"wrap"},children:["xs","sm","md","lg","xl","full"].map(z=>e.jsx(C,{variant:s===z?"primary":"secondary",size:"sm",onClick:()=>i(z),children:z},z))})]}),e.jsxs("div",{style:{marginBottom:"var(--space-lg)"},children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Variant"}),e.jsx("div",{style:{display:"flex",gap:"var(--space-xs)",flexWrap:"wrap"},children:["default","bordered","shadow","elevated","hover-lift"].map(z=>e.jsx(C,{variant:n===z?"primary":"secondary",size:"sm",onClick:()=>m(z),children:z},z))})]}),e.jsxs("div",{style:{marginBottom:"var(--space-lg)"},children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Shape"}),e.jsx("div",{style:{display:"flex",gap:"var(--space-xs)",flexWrap:"wrap"},children:["square","rounded","pill"].map(z=>e.jsx(C,{variant:a===z?"primary":"secondary",size:"sm",onClick:()=>c(z),children:z},z))})]}),e.jsxs("div",{style:{marginBottom:"var(--space-lg)"},children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Options"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-sm)"},children:[e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--space-sm)",cursor:"pointer"},children:[e.jsx("input",{type:"checkbox",checked:v,onChange:z=>b(z.target.checked)}),e.jsx(r,{size:"sm",children:"Show controls"})]}),e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--space-sm)",cursor:"pointer"},children:[e.jsx("input",{type:"checkbox",checked:w,onChange:z=>g(z.target.checked)}),e.jsx(r,{size:"sm",children:"Show menu (3-dot)"})]}),e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--space-sm)",cursor:"pointer"},children:[e.jsx("input",{type:"checkbox",checked:x,onChange:z=>P(z.target.checked)}),e.jsx(r,{size:"sm",children:"Enable download"})]}),e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--space-sm)",cursor:"pointer"},children:[e.jsx("input",{type:"checkbox",checked:y,onChange:z=>W(z.target.checked)}),e.jsx(r,{size:"sm",children:"Enable fullscreen"})]}),e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--space-sm)",cursor:"pointer"},children:[e.jsx("input",{type:"checkbox",checked:R,onChange:z=>N(z.target.checked)}),e.jsx(r,{size:"sm",children:"Autoplay on load"})]}),e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--space-sm)",cursor:"pointer"},children:[e.jsx("input",{type:"checkbox",checked:U,onChange:z=>D(z.target.checked)}),e.jsx(r,{size:"sm",children:"Mute audio on play"})]}),e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--space-sm)",cursor:"pointer"},children:[e.jsx("input",{type:"checkbox",checked:I,onChange:z=>$(z.target.checked)}),e.jsx(r,{size:"sm",children:"Enable loop toggle"})]}),e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--space-sm)",cursor:"pointer"},children:[e.jsx("input",{type:"checkbox",checked:B,onChange:z=>p(z.target.checked)}),e.jsx(r,{size:"sm",children:"Show playback speed options"})]}),e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--space-sm)",cursor:"pointer"},children:[e.jsx("input",{type:"checkbox",checked:k,onChange:z=>Q(z.target.checked)}),e.jsx(r,{size:"sm",children:"Show video quality options"})]})]})]})]}),e.jsx("div",{style:{flex:1,display:"flex",justifyContent:"center",alignItems:"center",minHeight:"300px"},children:e.jsx(F,{src:M,size:s,variant:n,shape:a,showControls:v,showMenu:w,enableDownload:x,enableFullscreen:y,autoplayOnLoad:R,muteAudioOnPlay:U,enableLoop:I,showPlaybackSpeed:B,showVideoQuality:k,videoQualities:se,poster:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"})})]})})]}),e.jsxs("div",{style:{marginBottom:"var(--space-2xl)"},children:[e.jsx(r,{as:"h2",size:"2xl",weight:"bold",style:{marginBottom:"var(--space-lg)"},children:"Examples"}),e.jsxs(o,{style:{marginBottom:"var(--space-xl)"},children:[e.jsx(A,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"Basic Usage"})}),e.jsxs(d,{children:[e.jsx("div",{style:{display:"flex",gap:"var(--space-lg)",alignItems:"center",marginBottom:"var(--space-lg)"},children:e.jsx(F,{src:M,size:"sm",poster:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"})}),e.jsx("div",{style:{backgroundColor:"var(--bg-surface)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"var(--space-md)",fontFamily:"monospace",fontSize:"var(--font-size-sm)",whiteSpace:"pre-wrap",overflowX:"auto"},children:`<Video 
  src="your-video.mp4" 
  size="sm"
  poster="poster-image.jpg"
/>`})]})]}),e.jsxs(o,{style:{marginBottom:"var(--space-xl)"},children:[e.jsx(A,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"Different Sizes"})}),e.jsxs(d,{children:[e.jsxs("div",{style:{display:"flex",gap:"var(--space-lg)",alignItems:"center",flexWrap:"wrap",marginBottom:"var(--space-lg)"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(F,{src:M,size:"xs",poster:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"}),e.jsx(r,{size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:"Extra Small"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(F,{src:M,size:"sm",poster:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"}),e.jsx(r,{size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:"Small"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(F,{src:M,size:"md",poster:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"}),e.jsx(r,{size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:"Medium"})]})]}),e.jsx("div",{style:{backgroundColor:"var(--bg-surface)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"var(--space-md)",fontFamily:"monospace",fontSize:"var(--font-size-sm)",whiteSpace:"pre-wrap",overflowX:"auto"},children:`<Video src="video.mp4" size="xs" />
<Video src="video.mp4" size="sm" />
<Video src="video.mp4" size="md" />
<Video src="video.mp4" size="lg" />
<Video src="video.mp4" size="xl" />`})]})]}),e.jsxs(o,{style:{marginBottom:"var(--space-xl)"},children:[e.jsx(A,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"Different Variants"})}),e.jsxs(d,{children:[e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"var(--space-lg)",marginBottom:"var(--space-lg)"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(F,{src:M,variant:"default",size:"sm",poster:"https://via.placeholder.com/240x135/4F46E5/FFFFFF?text=Default"}),e.jsx(r,{size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:"Default"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(F,{src:M,variant:"bordered",size:"sm",poster:"https://via.placeholder.com/240x135/4F46E5/FFFFFF?text=Bordered"}),e.jsx(r,{size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:"Bordered"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(F,{src:M,variant:"shadow",size:"sm",poster:"https://via.placeholder.com/240x135/4F46E5/FFFFFF?text=Shadow"}),e.jsx(r,{size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:"Shadow"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(F,{src:M,variant:"elevated",size:"sm",poster:"https://via.placeholder.com/240x135/4F46E5/FFFFFF?text=Elevated"}),e.jsx(r,{size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:"Elevated"})]})]}),e.jsx("div",{style:{backgroundColor:"var(--bg-surface)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"var(--space-md)",fontFamily:"monospace",fontSize:"var(--font-size-sm)",whiteSpace:"pre-wrap",overflowX:"auto"},children:`<Video variant="default" src="video.mp4" />
<Video variant="bordered" src="video.mp4" />
<Video variant="shadow" src="video.mp4" />
<Video variant="elevated" src="video.mp4" />
<Video variant="hover-lift" src="video.mp4" />`})]})]}),e.jsxs(o,{style:{marginBottom:"var(--space-xl)"},children:[e.jsx(A,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"Different Shapes"})}),e.jsxs(d,{children:[e.jsxs("div",{style:{display:"flex",gap:"var(--space-lg)",alignItems:"center",marginBottom:"var(--space-lg)"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(F,{src:M,shape:"square",size:"sm",poster:"https://via.placeholder.com/240x135/4F46E5/FFFFFF?text=Square"}),e.jsx(r,{size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:"Square"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(F,{src:M,shape:"rounded",size:"sm",poster:"https://via.placeholder.com/240x135/4F46E5/FFFFFF?text=Rounded"}),e.jsx(r,{size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:"Rounded"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(F,{src:M,shape:"pill",size:"sm",poster:"https://via.placeholder.com/240x135/4F46E5/FFFFFF?text=Pill"}),e.jsx(r,{size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:"Pill"})]})]}),e.jsx("div",{style:{backgroundColor:"var(--bg-surface)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"var(--space-md)",fontFamily:"monospace",fontSize:"var(--font-size-sm)",whiteSpace:"pre-wrap",overflowX:"auto"},children:`<Video shape="square" src="video.mp4" />
<Video shape="rounded" src="video.mp4" />
<Video shape="pill" src="video.mp4" />`})]})]}),e.jsxs(o,{style:{marginBottom:"var(--space-xl)"},children:[e.jsx(A,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"Platform Support - YouTube & Vimeo"})}),e.jsxs(d,{children:[e.jsxs("div",{style:{display:"flex",gap:"var(--space-lg)",alignItems:"center",marginBottom:"var(--space-lg)"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(F,{src:"https://youtu.be/nTbA7qrEsP0",as:"url",size:"sm"}),e.jsx(r,{size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:"YouTube Video"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(F,{src:"https://vimeo.com/90509568",as:"url",size:"sm"}),e.jsx(r,{size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:"Vimeo Video"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(F,{src:M,as:"player",size:"sm",poster:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"}),e.jsx(r,{size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:"HTML5 Player"})]})]}),e.jsx("div",{style:{backgroundColor:"var(--bg-surface)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"var(--space-md)",fontFamily:"monospace",fontSize:"var(--font-size-sm)",whiteSpace:"pre-wrap",overflowX:"auto"},children:`// YouTube video
<Video 
  src="https://youtu.be/nTbA7qrEsP0" 
  as="url"
  size="sm"
/>

// Vimeo video
<Video 
  src="https://vimeo.com/90509568" 
  as="url"
  size="sm"
/>

// HTML5 video with controls
<Video 
  src="video.mp4" 
  as="player"
  showControls={true}
  showMenu={true}
/>`})]})]}),e.jsxs(o,{style:{marginBottom:"var(--space-xl)"},children:[e.jsx(A,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"Custom Controls & Menu"})}),e.jsxs(d,{children:[e.jsxs("div",{style:{display:"flex",gap:"var(--space-lg)",alignItems:"center",marginBottom:"var(--space-lg)"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(F,{src:M,size:"sm",showControls:!0,showMenu:!1,poster:"https://via.placeholder.com/240x135/10B981/FFFFFF?text=Controls+Only"}),e.jsx(r,{size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:"Controls Only"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(F,{src:M,size:"sm",showControls:!0,showMenu:!0,enableDownload:!1,poster:"https://via.placeholder.com/240x135/F59E0B/FFFFFF?text=With+Menu"}),e.jsx(r,{size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:"With Menu"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(F,{src:M,size:"sm",showControls:!0,showMenu:!0,enableDownload:!0,poster:"https://via.placeholder.com/240x135/EF4444/FFFFFF?text=Download+Enabled"}),e.jsx(r,{size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:"Download Enabled"})]})]}),e.jsx("div",{style:{backgroundColor:"var(--bg-surface)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"var(--space-md)",fontFamily:"monospace",fontSize:"var(--font-size-sm)",whiteSpace:"pre-wrap",overflowX:"auto"},children:`// Basic controls
<Video src="video.mp4" showControls={true} />

// With 3-dot menu
<Video 
  src="video.mp4" 
  showControls={true}
  showMenu={true}
/>

// With download option
<Video 
  src="video.mp4" 
  showControls={true}
  showMenu={true}
  enableDownload={true}
/>

// No controls
<Video src="video.mp4" showControls={false} />`})]})]}),e.jsxs(o,{style:{marginBottom:"var(--space-xl)"},children:[e.jsx(A,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"Error handling"})}),e.jsxs(d,{children:[e.jsxs("div",{style:{display:"flex",gap:"var(--space-lg)",alignItems:"center",marginBottom:"var(--space-lg)"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(F,{src:"invalid-video-url.mp4",size:"sm"}),e.jsx(r,{size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:"Default Error"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(F,{src:"invalid-video-url.mp4",size:"sm",fallback:e.jsxs("div",{style:{textAlign:"center",color:"var(--accent-500)"},children:[e.jsx(r,{size:"sm",weight:"medium",children:"Custom Error Message"}),e.jsx(r,{size:"xs",color:"secondary",children:"Video not available"})]})}),e.jsx(r,{size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:"Custom Fallback"})]})]}),e.jsx("div",{style:{backgroundColor:"var(--bg-surface)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"var(--space-md)",fontFamily:"monospace",fontSize:"var(--font-size-sm)",whiteSpace:"pre-wrap",overflowX:"auto"},children:`// Default error handling
<Video src="invalid-url.mp4" />

// Custom fallback
<Video 
  src="invalid-url.mp4"
  fallback={<div>Custom error message</div>}
/>`})]})]})]}),e.jsxs("div",{style:{marginBottom:"var(--space-2xl)"},children:[e.jsx(r,{as:"h2",size:"2xl",weight:"bold",style:{marginBottom:"var(--space-lg)"},children:"API Reference"}),e.jsxs(o,{children:[e.jsx(A,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"VideoProps"})}),e.jsx(d,{children:e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"var(--font-size-sm)"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid var(--border-color)"},children:[e.jsx("th",{style:{padding:"var(--space-sm)",textAlign:"left",fontWeight:"var(--font-weight-semibold)"},children:"Prop"}),e.jsx("th",{style:{padding:"var(--space-sm)",textAlign:"left",fontWeight:"var(--font-weight-semibold)"},children:"Type"}),e.jsx("th",{style:{padding:"var(--space-sm)",textAlign:"left",fontWeight:"var(--font-weight-semibold)"},children:"Default"}),e.jsx("th",{style:{padding:"var(--space-sm)",textAlign:"left",fontWeight:"var(--font-weight-semibold)"},children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"variant"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"'default' | 'bordered' | 'shadow' | 'elevated' | 'hover-lift'"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"'default'"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Visual style variant"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"shape"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"'square' | 'rounded' | 'pill'"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"'rounded'"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Border radius style"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"size"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"'md'"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Video dimensions"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"fit"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"'cover' | 'contain' | 'fill' | 'scale-down' | 'none'"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"'cover'"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"How video fits container"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"showSpinner"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"boolean"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"true"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Show loading spinner"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"showControls"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"boolean"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"true"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Show custom video controls"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"showMenu"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"boolean"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"true"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Show 3-dot menu button"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"enableDownload"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"boolean"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"false"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Enable download option in menu"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"enableFullscreen"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"boolean"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"true"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Enable fullscreen toggle in menu"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"autoplayOnLoad"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"boolean"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"false"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Automatically play video when loaded"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"muteAudioOnPlay"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"boolean"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"false"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Mute audio when autoplay starts"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"enableLoop"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"boolean"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"false"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Enable loop toggle option in menu"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"showPlaybackSpeed"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"boolean"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"false"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Show playback speed dropdown in menu"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"showVideoQuality"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"boolean"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"false"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Show video quality dropdown in menu"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"videoQualities"}),e.jsxs("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:["Array<","{label: string, value: string, src?: string}",">"]}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"Auto, 1080p, 720p, 480p, 360p"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Available video quality options. Provide different quality variants of the same video with optional src URLs"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"fallback"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"React.ReactNode"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"-"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Custom error fallback content"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"className"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"string"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"''"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Additional CSS classes"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"...props"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"VideoHTMLAttributes"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"-"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Standard HTML video attributes"})]})]})]})})})]})]}),e.jsxs("div",{style:{marginBottom:"var(--space-2xl)"},children:[e.jsx(r,{as:"h2",size:"2xl",weight:"bold",style:{marginBottom:"var(--space-lg)"},children:"Advanced Features"}),e.jsxs("div",{style:{display:"grid",gap:"var(--space-lg)"},children:[e.jsxs(o,{children:[e.jsx(A,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"Autoplay with Muted Audio"})}),e.jsxs(d,{children:[e.jsxs("div",{style:{display:"flex",gap:"var(--space-lg)",alignItems:"center",marginBottom:"var(--space-lg)"},children:[e.jsx(F,{src:M,size:"sm",autoplayOnLoad:!0,muteAudioOnPlay:!0,poster:"https://via.placeholder.com/240x135/10B981/FFFFFF?text=Autoplay"}),e.jsx(r,{size:"sm",color:"secondary",style:{flex:1},children:"Video starts playing automatically when loaded, with audio muted to comply with browser policies."})]}),e.jsx(r,{size:"sm",weight:"medium",style:{fontFamily:"monospace",backgroundColor:"var(--bg-secondary)",padding:"var(--space-sm)",borderRadius:"var(--radius-sm)"},children:`<Video 
  src="video.mp4" 
  autoplayOnLoad 
  muteAudioOnPlay 
/>`})]})]}),e.jsxs(o,{children:[e.jsx(A,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"Fullscreen & Loop Controls"})}),e.jsxs(d,{children:[e.jsxs("div",{style:{display:"flex",gap:"var(--space-lg)",alignItems:"center",marginBottom:"var(--space-lg)"},children:[e.jsx(F,{src:M,size:"sm",enableFullscreen:!0,enableLoop:!0,poster:"https://via.placeholder.com/240x135/8B5CF6/FFFFFF?text=Advanced"}),e.jsx(r,{size:"sm",color:"secondary",style:{flex:1},children:"Click the 3-dot menu to access fullscreen toggle and loop controls. Fullscreen works with browser APIs for immersive viewing."})]}),e.jsx(r,{size:"sm",weight:"medium",style:{fontFamily:"monospace",backgroundColor:"var(--bg-secondary)",padding:"var(--space-sm)",borderRadius:"var(--radius-sm)"},children:`<Video 
  src="video.mp4" 
  enableFullscreen 
  enableLoop 
/>`})]})]}),e.jsxs(o,{children:[e.jsx(A,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"Dropdown Controls"})}),e.jsxs(d,{children:[e.jsxs("div",{style:{display:"flex",gap:"var(--space-lg)",alignItems:"center",marginBottom:"var(--space-lg)"},children:[e.jsx(F,{src:M,size:"sm",showPlaybackSpeed:!0,showVideoQuality:!0,videoQualities:se,poster:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"}),e.jsxs(r,{size:"sm",color:"secondary",style:{flex:1},children:[e.jsx("strong",{children:"YouTube-style quality controls:"})," Select different resolutions (1080p, 720p, 480p, 360p, 240p) to see quality changes in action. Watch for the quality indicator in the top-right corner and loading feedback when switching qualities. Each quality option loads a different resolution variant, demonstrating how video quality systems work."]})]}),e.jsx(r,{size:"sm",weight:"medium",style:{fontFamily:"monospace",backgroundColor:"var(--bg-secondary)",padding:"var(--space-sm)",borderRadius:"var(--radius-sm)"},children:`<Video 
  src="video.mp4" 
  showPlaybackSpeed 
  showVideoQuality
  videoQualities={[
    { label: 'Auto', value: 'auto' },
    { label: '1080p HD', value: '1080p', src: 'video-1080p.mp4' },
    { label: '720p HD', value: '720p', src: 'video-720p.mp4' },
    { label: '480p', value: '480p', src: 'video-480p.mp4' },
    { label: '360p', value: '360p', src: 'video-360p.mp4' }
  ]}
/>`})]})]}),e.jsxs(o,{children:[e.jsx(A,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"Playback Speed Control"})}),e.jsxs(d,{children:[e.jsxs("div",{style:{display:"flex",gap:"var(--space-lg)",alignItems:"center",marginBottom:"var(--space-lg)"},children:[e.jsx(F,{src:M,size:"sm",showPlaybackSpeed:!0,poster:"https://via.placeholder.com/240x135/F59E0B/FFFFFF?text=Speed"}),e.jsx(r,{size:"sm",color:"secondary",style:{flex:1},children:"Access playback speed options (0.5x to 2x) through the menu for faster or slower viewing experiences."})]}),e.jsx(r,{size:"sm",weight:"medium",style:{fontFamily:"monospace",backgroundColor:"var(--bg-secondary)",padding:"var(--space-sm)",borderRadius:"var(--radius-sm)"},children:`<Video 
  src="video.mp4" 
  showPlaybackSpeed 
/>`})]})]}),e.jsxs(o,{children:[e.jsx(A,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"All Advanced Features"})}),e.jsxs(d,{children:[e.jsxs("div",{style:{display:"flex",gap:"var(--space-lg)",alignItems:"center",marginBottom:"var(--space-lg)"},children:[e.jsx(F,{src:M,size:"sm",enableFullscreen:!0,enableLoop:!0,showPlaybackSpeed:!0,showVideoQuality:!0,videoQualities:se,enableDownload:!0,poster:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"}),e.jsxs(r,{size:"sm",color:"secondary",style:{flex:1},children:["A fully-featured video player with all advanced options enabled.",e.jsx("strong",{children:"Quality testing ready:"})," Use the 3-dot menu → Quality to test YouTube-style quality switching. Watch the top-right corner for quality indicators and loading feedback when switching between 1080p, 720p, 480p, 360p, and 240p."]})]}),e.jsx(r,{size:"sm",weight:"medium",style:{fontFamily:"monospace",backgroundColor:"var(--bg-secondary)",padding:"var(--space-sm)",borderRadius:"var(--radius-sm)"},children:`<Video 
  src="video.mp4" 
  enableFullscreen 
  enableLoop 
  showPlaybackSpeed 
  showVideoQuality
  videoQualities={[
    { label: 'Auto', value: 'auto' },
    { label: '1080p HD', value: '1080p', src: 'video-1080p.mp4' },
    { label: '720p HD', value: '720p', src: 'video-720p.mp4' },
    { label: '480p', value: '480p', src: 'video-480p.mp4' }
  ]}
  enableDownload 
/>`})]})]})]})]}),e.jsxs("div",{style:{marginBottom:"var(--space-2xl)"},children:[e.jsx(r,{as:"h2",size:"2xl",weight:"bold",style:{marginBottom:"var(--space-lg)"},children:"Usage Guidelines"}),e.jsxs("div",{style:{display:"grid",gap:"var(--space-lg)"},children:[e.jsxs(o,{children:[e.jsx(A,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",style:{color:"var(--success-600)"},children:"✅ Do"})}),e.jsx(d,{children:e.jsxs("ul",{style:{margin:0,paddingLeft:"var(--space-lg)"},children:[e.jsx("li",{style:{marginBottom:"var(--space-sm)"},children:e.jsx(r,{size:"sm",children:"Provide poster images for better loading experience"})}),e.jsx("li",{style:{marginBottom:"var(--space-sm)"},children:e.jsx(r,{size:"sm",children:"Use appropriate sizes for your layout context"})}),e.jsx("li",{style:{marginBottom:"var(--space-sm)"},children:e.jsx(r,{size:"sm",children:"Include meaningful alt text for accessibility"})}),e.jsx("li",{style:{marginBottom:"var(--space-sm)"},children:e.jsx(r,{size:"sm",children:"Handle error states with custom fallbacks when needed"})}),e.jsx("li",{children:e.jsx(r,{size:"sm",children:"Consider autoplay policies when using video"})})]})})]}),e.jsxs(o,{children:[e.jsx(A,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",style:{color:"var(--danger-600)"},children:"❌ Don't"})}),e.jsx(d,{children:e.jsxs("ul",{style:{margin:0,paddingLeft:"var(--space-lg)"},children:[e.jsx("li",{style:{marginBottom:"var(--space-sm)"},children:e.jsx(r,{size:"sm",children:"Use oversized videos that impact performance"})}),e.jsx("li",{style:{marginBottom:"var(--space-sm)"},children:e.jsx(r,{size:"sm",children:"Forget to provide fallback content for accessibility"})}),e.jsx("li",{style:{marginBottom:"var(--space-sm)"},children:e.jsx(r,{size:"sm",children:"Auto-play videos with sound without user consent"})}),e.jsx("li",{children:e.jsx(r,{size:"sm",children:"Use for complex video player needs - consider FlowLabKit's advanced Video component"})})]})})]})]})]}),e.jsxs(o,{children:[e.jsx(A,{children:e.jsx(r,{as:"h2",size:"xl",weight:"semibold",children:"Accessibility"})}),e.jsx(d,{children:e.jsxs("div",{style:{display:"grid",gap:"var(--space-md)"},children:[e.jsxs("div",{children:[e.jsx(r,{size:"sm",weight:"medium",style:{marginBottom:"var(--space-xs)"},children:"Keyboard Navigation"}),e.jsx(r,{size:"sm",color:"secondary",children:"Video controls are keyboard accessible when enabled. Users can play/pause with Space, and navigate with arrow keys."})]}),e.jsxs("div",{children:[e.jsx(r,{size:"sm",weight:"medium",style:{marginBottom:"var(--space-xs)"},children:"Screen Readers"}),e.jsx(r,{size:"sm",color:"secondary",children:"Provide meaningful descriptions and consider captions for video content."})]}),e.jsxs("div",{children:[e.jsx(r,{size:"sm",weight:"medium",style:{marginBottom:"var(--space-xs)"},children:"Motion Sensitivity"}),e.jsx(r,{size:"sm",color:"secondary",children:"Respect user preferences for reduced motion and avoid auto-playing videos."})]}),e.jsxs("div",{children:[e.jsx(r,{size:"sm",weight:"medium",style:{marginBottom:"var(--space-xs)"},children:"Error Handling"}),e.jsx(r,{size:"sm",color:"secondary",children:"Graceful error states ensure the interface remains accessible when videos fail to load."})]})]})})]})]})},Ee=({children:s,language:i="tsx"})=>e.jsx("pre",{style:{backgroundColor:"var(--bg-elevated)",color:"var(--text-primary)",padding:"var(--space-lg)",borderRadius:"var(--radius-md)",border:"1px solid var(--border-color)",overflow:"auto",fontSize:"var(--font-size-sm)",fontFamily:"Consolas, Monaco, 'Courier New', monospace",margin:"var(--space-md) 0",lineHeight:"1.5"},children:e.jsx("code",{children:s})}),Oe=({title:s,children:i})=>e.jsxs("div",{style:{marginBottom:"var(--space-lg)"},children:[e.jsx(r,{as:"h4",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:s}),e.jsx("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-surface)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-color)",display:"flex",flexDirection:"column",gap:"var(--space-md)"},children:i})]}),hs=()=>e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"var(--space-xl)"},children:[e.jsx(r,{as:"h1",size:"3xl",weight:"bold",style:{marginBottom:"var(--space-sm)"},children:"Card"}),e.jsx(r,{as:"p",size:"lg",color:"secondary",children:"Flexible container component for grouping related content with header, body, and footer sections"})]}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Overview"}),e.jsx(r,{as:"p",size:"md",style:{marginBottom:"var(--space-lg)",lineHeight:"1.6"},children:"The Card component system provides a flexible foundation for content layout. It includes Card, CardHeader, CardBody, and CardFooter components that can be composed together to create structured, visually appealing content containers."}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-md)",flexWrap:"wrap"},children:[e.jsx(l,{variant:"primary",children:"Modular Design"}),e.jsx(l,{variant:"success",children:"Multiple Variants"}),e.jsx(l,{variant:"info",children:"Flexible Layout"}),e.jsx(l,{variant:"secondary",children:"Composable"})]})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Examples"}),e.jsx(Oe,{title:"Basic Cards",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"var(--space-md)"},children:[e.jsx(o,{children:e.jsxs(d,{children:[e.jsx(r,{as:"h3",size:"lg",weight:"semibold",style:{marginBottom:"var(--space-sm)"},children:"Simple Card"}),e.jsx(r,{children:"This is a basic card with just a body section containing some content."})]})}),e.jsxs(o,{variant:"outlined",children:[e.jsx(A,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"Outlined Card"})}),e.jsx(d,{children:e.jsx(r,{children:"This card has a visible border and includes both header and body sections."})})]})]})}),e.jsx(Oe,{title:"Card Variants",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"var(--space-md)"},children:[e.jsx(o,{variant:"elevated",children:e.jsxs(d,{children:[e.jsx(r,{weight:"medium",children:"Elevated"}),e.jsx(r,{size:"sm",color:"secondary",children:"Default with shadow"})]})}),e.jsx(o,{variant:"outlined",children:e.jsxs(d,{children:[e.jsx(r,{weight:"medium",children:"Outlined"}),e.jsx(r,{size:"sm",color:"secondary",children:"With visible border"})]})}),e.jsx(o,{variant:"filled",children:e.jsxs(d,{children:[e.jsx(r,{weight:"medium",children:"Filled"}),e.jsx(r,{size:"sm",color:"secondary",children:"Different background"})]})})]})}),e.jsx(Oe,{title:"Complete Card Structure",children:e.jsxs(o,{variant:"outlined",style:{maxWidth:"400px"},children:[e.jsx(A,{children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"Product Card"}),e.jsx(l,{variant:"success",children:"New"})]})}),e.jsxs(d,{children:[e.jsx(H,{src:"https://picsum.photos/300/150?random=1",alt:"Product image",variant:"default",shape:"rounded",style:{width:"100%",height:"150px",marginBottom:"var(--space-md)"}}),e.jsx(r,{style:{marginBottom:"var(--space-sm)"},children:"This is a complete card example showing how header, body, and footer work together."}),e.jsx(r,{size:"sm",color:"secondary",children:"Perfect for product listings, user profiles, or content previews."})]}),e.jsx($e,{children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx(r,{weight:"semibold",color:"accent",children:"$99.99"}),e.jsx(C,{variant:"primary",size:"sm",children:"Add to Cart"})]})})]})}),e.jsx(Oe,{title:"Interactive Cards",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"var(--space-md)"},children:[e.jsx(o,{variant:"elevated",hoverable:!0,style:{cursor:"pointer"},onClick:()=>alert("Card clicked!"),children:e.jsxs(d,{children:[e.jsx(r,{as:"h4",weight:"semibold",style:{marginBottom:"var(--space-sm)"},children:"Clickable Card"}),e.jsx(r,{size:"sm",children:"This entire card is clickable and has hover effects."})]})}),e.jsxs(o,{variant:"outlined",children:[e.jsx(A,{children:e.jsx(r,{as:"h4",weight:"semibold",children:"User Profile"})}),e.jsx(d,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-md)"},children:[e.jsx(H,{src:"https://picsum.photos/50/50?random=2",alt:"User avatar",shape:"circle",variant:"bordered",width:50,height:50}),e.jsxs("div",{children:[e.jsx(r,{weight:"medium",children:"Jane Smith"}),e.jsx(r,{size:"sm",color:"secondary",children:"UI/UX Designer"})]})]})}),e.jsx($e,{children:e.jsxs("div",{style:{display:"flex",gap:"var(--space-sm)"},children:[e.jsx(C,{variant:"primary",size:"sm",children:"Follow"}),e.jsx(C,{variant:"secondary",size:"sm",children:"Message"})]})})]})]})})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"API Reference"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Card Props"}),e.jsx("div",{style:{overflowX:"auto",marginBottom:"var(--space-lg)"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{backgroundColor:"var(--bg-surface)"},children:[e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Prop"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Type"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Default"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"variant"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'elevated' | 'outlined' | 'filled'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'elevated'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'default'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Visual style variant affecting borders and shadows"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"hoverable"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"false"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Adds hover effects and cursor pointer for interactive cards"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"padding"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'none' | 'sm' | 'md' | 'lg'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'md'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Internal padding of the card container"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"radius"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'none' | 'sm' | 'md' | 'lg'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'md'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Border radius of the card corners"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"shadow"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'none' | 'sm' | 'md' | 'lg'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'md'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Drop shadow intensity of the card"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"children"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Content of the card (typically CardHeader, CardBody, CardFooter)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Additional CSS class names for custom styling"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"style"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:"Inline styles for custom styling"})]})]})]})}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"CardHeader, CardBody, CardFooter Props"}),e.jsx(r,{as:"p",size:"md",style:{marginBottom:"var(--space-md)",lineHeight:"1.6"},children:"All card section components (CardHeader, CardBody, CardFooter) accept the same props:"}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{backgroundColor:"var(--bg-surface)"},children:[e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Prop"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Type"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Default"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"children"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Content of the card section"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Additional CSS class names for custom styling"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"style"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:"Inline styles for custom styling"})]})]})]})})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Usage Examples"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Product Card"}),e.jsx(Ee,{children:`import { Card, CardHeader, CardBody, CardFooter, Text, Button, Image } from '@flowlabkit/ui';

function ProductCard({ product }: { product: Product }) {
  return (
    <Card variant="elevated" shadow="lg" style={{ maxWidth: '300px' }}>
      <CardHeader>
        <Text as="h3" size="lg" weight="semibold">
          {product.name}
        </Text>
      </CardHeader>
      
      <CardBody>
        <Image
          src={product.imageUrl}
          alt={product.name}
          variant="default"
          shape="rounded"
          style={{ width: '100%', height: '200px', marginBottom: '1rem' }}
        />
        <Text style={{ marginBottom: '0.5rem' }}>
          {product.description}
        </Text>
        <Text size="sm" color="secondary">
          {product.category}
        </Text>
      </CardBody>
      
      <CardFooter>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          <Text size="lg" weight="bold" color="accent">
            \${product.price}
          </Text>
          <Button variant="primary" size="sm">
            Add to Cart
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}`}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"Dashboard Widget"}),e.jsx(Ee,{children:`import { Card, CardHeader, CardBody, Text, Badge } from '@flowlabkit/ui';

function StatsWidget({ title, value, change, trend }: StatsWidgetProps) {
  return (
    <Card variant="outlined" hoverable>
      <CardHeader>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          <Text as="h4" weight="medium">{title}</Text>
          <Badge 
            variant={trend === 'up' ? 'success' : 'error'}
            size="sm"
          >
            {change}
          </Badge>
        </div>
      </CardHeader>
      
      <CardBody>
        <Text as="div" size="2xl" weight="bold">
          {value}
        </Text>
      </CardBody>
    </Card>
  );
}`}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"Card Grid Layout"}),e.jsx(Ee,{children:`import { Card, CardBody, Text } from '@flowlabkit/ui';

function CardGrid({ items }: { items: Item[] }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem',
      padding: '2rem'
    }}>
      {items.map((item) => (
        <Card 
          key={item.id} 
          variant="elevated" 
          hoverable
          onClick={() => handleItemClick(item.id)}
          style={{
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
          }}
        >
          <CardBody>
            <Text as="h3" weight="semibold" style={{ marginBottom: '0.5rem' }}>
              {item.title}
            </Text>
            <Text size="sm" color="secondary">
              {item.description}
            </Text>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}`}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"Custom Styled Card"}),e.jsx(Ee,{children:`import { Card, CardBody, Text } from '@flowlabkit/ui';

function CustomCard() {
  return (
    <Card
      variant="filled"
      shadow="lg"
      className="gradient-card"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        border: 'none',
        boxShadow: '0 10px 25px rgba(102, 126, 234, 0.3)'
      }}
    >
      <CardBody
        style={{
          textAlign: 'center',
          padding: '2rem'
        }}
      >
        <Text as="h2" size="xl" weight="bold" style={{ color: 'white' }}>
          Premium Feature
        </Text>
        <Text style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
          Unlock advanced capabilities with our premium plan
        </Text>
      </CardBody>
    </Card>
  );
}`})]})}),e.jsx(o,{children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Accessibility"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Built-in Features"}),e.jsxs("ul",{style:{marginLeft:"var(--space-lg)",lineHeight:"1.6",marginBottom:"var(--space-md)"},children:[e.jsx("li",{children:"Semantic HTML structure with proper heading hierarchy"}),e.jsx("li",{children:"Keyboard navigation support for interactive cards"}),e.jsx("li",{children:"Focus management with visible focus indicators"}),e.jsx("li",{children:"Screen reader compatible content structure"}),e.jsx("li",{children:"Proper color contrast ratios for all variants"})]}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Best Practices"}),e.jsx(Ee,{children:`// Use semantic headings in card headers
<Card>
  <CardHeader>
    <Text as="h2" size="lg" weight="semibold">
      Main Card Title
    </Text>
  </CardHeader>
  <CardBody>
    <Text as="h3" size="md" weight="medium">
      Subsection
    </Text>
  </CardBody>
</Card>

// Add proper ARIA labels for interactive cards
<Card 
  hoverable 
  onClick={handleClick}
  role="button"
  tabIndex={0}
  aria-label="View product details for Laptop Pro"
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  }}
>
  <CardBody>Product information...</CardBody>
</Card>

// Use landmarks for card sections
<Card>
  <CardHeader role="banner">
    <Text as="h2">Article Title</Text>
  </CardHeader>
  <CardBody role="main">
    <Text>Article content...</Text>
  </CardBody>
  <CardFooter role="contentinfo">
    <Text>Published date and author</Text>
  </CardFooter>
</Card>

// Ensure sufficient color contrast
<Card 
  style={{
    backgroundColor: '#1f2937', // Dark background
    color: '#f9fafb'           // Light text
  }}
>
  <CardBody>High contrast content</CardBody>
</Card>`})]})})]}),xs=()=>{const[s,i]=h.useState("option1"),[n,m]=h.useState(!1),a=({size:g=16})=>e.jsx("svg",{width:g,height:g,viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"})}),c=({size:g=16})=>e.jsx("svg",{width:g,height:g,viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"})}),v=({size:g=16})=>e.jsx("svg",{width:g,height:g,viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"})}),b=({size:g=16})=>e.jsx("svg",{width:g,height:g,viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.50-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"})}),w=({size:g=16})=>e.jsx("svg",{width:g,height:g,viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"})});return e.jsxs("div",{style:{padding:"var(--space-lg)",maxWidth:"1200px"},children:[e.jsxs("div",{style:{marginBottom:"var(--space-2xl)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-md)",marginBottom:"var(--space-md)"},children:[e.jsx(r,{as:"h1",size:"3xl",weight:"bold",children:"Dropdown"}),e.jsx(l,{variant:"secondary",size:"sm",children:"Interactive Component"})]}),e.jsx(r,{as:"p",size:"lg",color:"secondary",style:{marginBottom:"var(--space-lg)"},children:"A flexible dropdown menu system with trigger element, content positioning, and keyboard navigation. Built with accessibility in mind and integrated with the FlowLabKit theme system."}),e.jsx("div",{style:{backgroundColor:"var(--accent-50)",border:"1px solid var(--accent-200)",borderRadius:"var(--radius-lg)",padding:"var(--space-md)",marginBottom:"var(--space-xl)"},children:e.jsxs(r,{size:"sm",weight:"medium",style:{color:"var(--accent-700)"},children:["💡 ",e.jsx("strong",{children:"Key Features:"})," Flexible positioning, keyboard navigation, click-outside-to-close, customizable triggers, and seamless theme integration."]})})]}),e.jsxs("div",{style:{marginBottom:"var(--space-2xl)"},children:[e.jsx(r,{as:"h2",size:"2xl",weight:"bold",style:{marginBottom:"var(--space-lg)"},children:"Interactive Demo"}),e.jsxs(o,{children:[e.jsx(A,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"Basic Dropdown"})}),e.jsxs(d,{children:[e.jsxs("div",{style:{display:"flex",gap:"var(--space-lg)",alignItems:"center",marginBottom:"var(--space-lg)"},children:[e.jsxs(Y,{trigger:e.jsxs(C,{variant:"secondary",size:"md",children:["Actions ",e.jsx(w,{size:16})]}),children:[e.jsx(f,{leftIcon:e.jsx(a,{}),onClick:()=>alert("Edit clicked"),children:"Edit"}),e.jsx(f,{leftIcon:e.jsx(b,{}),rightIcon:"⌘C",onClick:()=>alert("Share clicked"),children:"Share"}),e.jsx(we,{}),e.jsx(f,{leftIcon:e.jsx(v,{}),onClick:()=>alert("Settings clicked"),children:"Settings"}),e.jsx(f,{leftIcon:e.jsx(c,{}),destructive:!0,onClick:()=>alert("Delete clicked"),children:"Delete"})]}),e.jsxs(Y,{trigger:e.jsxs(C,{variant:"primary",size:"md",children:["Selected: ",s," ",e.jsx(w,{size:16})]}),children:[e.jsx(he,{children:"Choose Option"}),e.jsx(f,{rightIcon:s==="option1"?"✓":void 0,onClick:()=>i("option1"),children:"Option 1"}),e.jsx(f,{rightIcon:s==="option2"?"✓":void 0,onClick:()=>i("option2"),children:"Option 2"}),e.jsx(f,{rightIcon:s==="option3"?"✓":void 0,onClick:()=>i("option3"),children:"Option 3"})]}),e.jsx(Y,{trigger:e.jsx(C,{variant:"outline",size:"md",disabled:!0,children:"Disabled Dropdown"}),disabled:!0,children:e.jsx(f,{children:"This won't show"})})]}),e.jsx(r,{size:"sm",color:"secondary",children:"Try the dropdowns above to see different trigger styles, positioning, and interactions."})]})]})]}),e.jsxs("div",{style:{marginBottom:"var(--space-2xl)"},children:[e.jsx(r,{as:"h2",size:"2xl",weight:"bold",style:{marginBottom:"var(--space-lg)"},children:"Positioning Options"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"var(--space-lg)"},children:[e.jsxs(o,{children:[e.jsx(A,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"Bottom Aligned (Default)"})}),e.jsxs(d,{children:[e.jsxs("div",{style:{display:"flex",gap:"var(--space-md)",justifyContent:"space-around"},children:[e.jsxs(Y,{trigger:e.jsx(C,{size:"sm",children:"Start"}),align:"start",side:"bottom",children:[e.jsx(f,{children:"Item 1"}),e.jsx(f,{children:"Item 2"}),e.jsx(f,{children:"Item 3"})]}),e.jsxs(Y,{trigger:e.jsx(C,{size:"sm",children:"Center"}),align:"center",side:"bottom",children:[e.jsx(f,{children:"Item 1"}),e.jsx(f,{children:"Item 2"}),e.jsx(f,{children:"Item 3"})]}),e.jsxs(Y,{trigger:e.jsx(C,{size:"sm",children:"End"}),align:"end",side:"bottom",children:[e.jsx(f,{children:"Item 1"}),e.jsx(f,{children:"Item 2"}),e.jsx(f,{children:"Item 3"})]})]}),e.jsx(r,{size:"sm",weight:"medium",style:{fontFamily:"monospace",backgroundColor:"var(--bg-secondary)",padding:"var(--space-sm)",borderRadius:"var(--radius-sm)",marginTop:"var(--space-md)"},children:`<Dropdown align="start|center|end" side="bottom">
  <DropdownItem>Item</DropdownItem>
</Dropdown>`})]})]}),e.jsxs(o,{children:[e.jsx(A,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"Side Positioning"})}),e.jsxs(d,{children:[e.jsxs("div",{style:{display:"flex",gap:"var(--space-md)",justifyContent:"space-around"},children:[e.jsxs(Y,{trigger:e.jsx(C,{size:"sm",children:"Left"}),align:"start",side:"left",children:[e.jsx(f,{children:"Item 1"}),e.jsx(f,{children:"Item 2"}),e.jsx(f,{children:"Item 3"})]}),e.jsxs(Y,{trigger:e.jsx(C,{size:"sm",children:"Right"}),align:"start",side:"right",children:[e.jsx(f,{children:"Item 1"}),e.jsx(f,{children:"Item 2"}),e.jsx(f,{children:"Item 3"})]}),e.jsxs(Y,{trigger:e.jsx(C,{size:"sm",children:"Top"}),align:"center",side:"top",children:[e.jsx(f,{children:"Item 1"}),e.jsx(f,{children:"Item 2"}),e.jsx(f,{children:"Item 3"})]})]}),e.jsx(r,{size:"sm",weight:"medium",style:{fontFamily:"monospace",backgroundColor:"var(--bg-secondary)",padding:"var(--space-sm)",borderRadius:"var(--radius-sm)",marginTop:"var(--space-md)"},children:`<Dropdown side="left|right|top|bottom">
  <DropdownItem>Item</DropdownItem>
</Dropdown>`})]})]})]})]}),e.jsxs("div",{style:{marginBottom:"var(--space-2xl)"},children:[e.jsx(r,{as:"h2",size:"2xl",weight:"bold",style:{marginBottom:"var(--space-lg)"},children:"Component Examples"}),e.jsxs("div",{style:{display:"grid",gap:"var(--space-lg)"},children:[e.jsxs(o,{children:[e.jsx(A,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"Context Menu Style"})}),e.jsxs(d,{children:[e.jsxs("div",{style:{display:"flex",gap:"var(--space-lg)",alignItems:"center",marginBottom:"var(--space-lg)"},children:[e.jsxs(Y,{trigger:e.jsx("div",{style:{padding:"var(--space-md)",border:"2px dashed var(--border-color)",borderRadius:"var(--radius-md)",cursor:"pointer",textAlign:"center"},children:e.jsx(r,{size:"sm",children:"Right-click style menu"})}),children:[e.jsx(f,{leftIcon:e.jsx(a,{}),children:"Edit"}),e.jsx(f,{leftIcon:e.jsx(b,{}),children:"Duplicate"}),e.jsx(we,{}),e.jsx(f,{leftIcon:e.jsx(v,{}),children:"Properties"}),e.jsx(we,{}),e.jsx(f,{leftIcon:e.jsx(c,{}),destructive:!0,children:"Delete"})]}),e.jsx(r,{size:"sm",color:"secondary",style:{flex:1},children:"Perfect for context menus, right-click actions, and content management interfaces."})]}),e.jsx(r,{size:"sm",weight:"medium",style:{fontFamily:"monospace",backgroundColor:"var(--bg-secondary)",padding:"var(--space-sm)",borderRadius:"var(--radius-sm)"},children:`<Dropdown trigger={<div>Custom Trigger</div>}>
  <DropdownItem leftIcon={<Icon />}>Action</DropdownItem>
  <DropdownSeparator />
  <DropdownItem destructive>Delete</DropdownItem>
</Dropdown>`})]})]}),e.jsxs(o,{children:[e.jsx(A,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"Selection Menu with Labels"})}),e.jsxs(d,{children:[e.jsxs("div",{style:{display:"flex",gap:"var(--space-lg)",alignItems:"center",marginBottom:"var(--space-lg)"},children:[e.jsxs(Y,{trigger:e.jsxs(C,{variant:"outline",size:"md",children:["Categories ",e.jsx(w,{size:16})]}),children:[e.jsx(he,{children:"Design"}),e.jsx(f,{children:"UI Components"}),e.jsx(f,{children:"Icons & Graphics"}),e.jsx(f,{children:"Templates"}),e.jsx(we,{}),e.jsx(he,{children:"Development"}),e.jsx(f,{children:"Frontend"}),e.jsx(f,{children:"Backend"}),e.jsx(f,{children:"DevOps"}),e.jsx(we,{}),e.jsx(he,{children:"Other"}),e.jsx(f,{children:"Documentation"}),e.jsx(f,{children:"Resources"})]}),e.jsx(r,{size:"sm",color:"secondary",style:{flex:1},children:"Organized dropdown with labeled sections for better navigation and grouping."})]}),e.jsx(r,{size:"sm",weight:"medium",style:{fontFamily:"monospace",backgroundColor:"var(--bg-secondary)",padding:"var(--space-sm)",borderRadius:"var(--radius-sm)"},children:`<Dropdown trigger={<Button>Menu</Button>}>
  <DropdownLabel>Section 1</DropdownLabel>
  <DropdownItem>Item 1</DropdownItem>
  <DropdownSeparator />
  <DropdownLabel>Section 2</DropdownLabel>
  <DropdownItem>Item 2</DropdownItem>
</Dropdown>`})]})]})]})]}),e.jsxs("div",{style:{marginBottom:"var(--space-2xl)"},children:[e.jsx(r,{as:"h2",size:"2xl",weight:"bold",style:{marginBottom:"var(--space-lg)"},children:"API Reference"}),e.jsxs(o,{style:{marginBottom:"var(--space-lg)"},children:[e.jsx(A,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"Dropdown Props"})}),e.jsx(d,{children:e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"var(--font-size-sm)"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid var(--border-color)"},children:[e.jsx("th",{style:{padding:"var(--space-sm)",textAlign:"left",fontWeight:"var(--font-weight-semibold)"},children:"Prop"}),e.jsx("th",{style:{padding:"var(--space-sm)",textAlign:"left",fontWeight:"var(--font-weight-semibold)"},children:"Type"}),e.jsx("th",{style:{padding:"var(--space-sm)",textAlign:"left",fontWeight:"var(--font-weight-semibold)"},children:"Default"}),e.jsx("th",{style:{padding:"var(--space-sm)",textAlign:"left",fontWeight:"var(--font-weight-semibold)"},children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"trigger"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"ReactNode"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"-"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Element that triggers the dropdown"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"children"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"ReactNode"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"-"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Dropdown content (items, separators, labels)"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"open"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"boolean"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"undefined"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Controlled open state"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"onOpenChange"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"(open: boolean) => void"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"-"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Called when open state changes"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"disabled"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"boolean"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"false"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Disable the dropdown"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"align"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"'start' | 'center' | 'end'"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"'start'"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Alignment relative to trigger"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"side"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"'top' | 'bottom' | 'left' | 'right'"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"'bottom'"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Side to open dropdown on"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"sideOffset"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"number"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"4"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Distance from trigger (px)"})]})]})]})})})]}),e.jsxs(o,{style:{marginBottom:"var(--space-lg)"},children:[e.jsx(A,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"DropdownItem Props"})}),e.jsx(d,{children:e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"var(--font-size-sm)"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid var(--border-color)"},children:[e.jsx("th",{style:{padding:"var(--space-sm)",textAlign:"left",fontWeight:"var(--font-weight-semibold)"},children:"Prop"}),e.jsx("th",{style:{padding:"var(--space-sm)",textAlign:"left",fontWeight:"var(--font-weight-semibold)"},children:"Type"}),e.jsx("th",{style:{padding:"var(--space-sm)",textAlign:"left",fontWeight:"var(--font-weight-semibold)"},children:"Default"}),e.jsx("th",{style:{padding:"var(--space-sm)",textAlign:"left",fontWeight:"var(--font-weight-semibold)"},children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"leftIcon"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"ReactNode"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"-"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Icon displayed on the left"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"rightIcon"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"ReactNode"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"-"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Icon or text displayed on the right"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"disabled"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"boolean"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"false"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Disable the item"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"destructive"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"boolean"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"false"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Style as destructive action (red)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"onClick"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"() => void"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"-"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Click handler"})]})]})]})})})]})]}),e.jsxs("div",{style:{marginBottom:"var(--space-2xl)"},children:[e.jsx(r,{as:"h2",size:"2xl",weight:"bold",style:{marginBottom:"var(--space-lg)"},children:"Usage Guidelines"}),e.jsxs("div",{style:{display:"grid",gap:"var(--space-lg)"},children:[e.jsxs(o,{children:[e.jsx(A,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",style:{color:"var(--success-color)"},children:"✅ Best Practices"})}),e.jsx(d,{children:e.jsxs("ul",{style:{margin:0,paddingLeft:"var(--space-lg)"},children:[e.jsx("li",{style:{marginBottom:"var(--space-sm)"},children:e.jsx(r,{size:"sm",children:"Use consistent trigger styling (buttons, links, or custom elements)"})}),e.jsx("li",{style:{marginBottom:"var(--space-sm)"},children:e.jsx(r,{size:"sm",children:"Group related items with DropdownLabel and DropdownSeparator"})}),e.jsx("li",{style:{marginBottom:"var(--space-sm)"},children:e.jsx(r,{size:"sm",children:"Place destructive actions at the bottom with separators"})}),e.jsx("li",{style:{marginBottom:"var(--space-sm)"},children:e.jsx(r,{size:"sm",children:"Use icons consistently - either all items have icons or none do"})}),e.jsx("li",{style:{marginBottom:"var(--space-sm)"},children:e.jsx(r,{size:"sm",children:"Keep menu items concise and action-oriented"})}),e.jsx("li",{children:e.jsx(r,{size:"sm",children:"Consider keyboard navigation - items are focusable with arrow keys"})})]})})]}),e.jsxs(o,{children:[e.jsx(A,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",style:{color:"var(--error-color)"},children:"❌ Avoid"})}),e.jsx(d,{children:e.jsxs("ul",{style:{margin:0,paddingLeft:"var(--space-lg)"},children:[e.jsx("li",{style:{marginBottom:"var(--space-sm)"},children:e.jsx(r,{size:"sm",children:"Too many items without organization (use labels and separators)"})}),e.jsx("li",{style:{marginBottom:"var(--space-sm)"},children:e.jsx(r,{size:"sm",children:"Inconsistent positioning - stick to one alignment pattern"})}),e.jsx("li",{style:{marginBottom:"var(--space-sm)"},children:e.jsx(r,{size:"sm",children:"Opening dropdowns outside viewport bounds"})}),e.jsx("li",{style:{marginBottom:"var(--space-sm)"},children:e.jsx(r,{size:"sm",children:"Nesting dropdowns more than one level deep"})}),e.jsx("li",{children:e.jsx(r,{size:"sm",children:"Using for complex forms - consider modal dialogs instead"})})]})})]})]})]}),e.jsxs(o,{children:[e.jsx(A,{children:e.jsx(r,{as:"h2",size:"xl",weight:"semibold",children:"Accessibility"})}),e.jsx(d,{children:e.jsxs("div",{style:{display:"grid",gap:"var(--space-md)"},children:[e.jsxs("div",{children:[e.jsx(r,{size:"sm",weight:"medium",style:{marginBottom:"var(--space-xs)"},children:"Keyboard Navigation"}),e.jsxs(r,{size:"sm",color:"secondary",children:[e.jsx("strong",{children:"Space/Enter:"})," Open dropdown • ",e.jsx("strong",{children:"Escape:"})," Close dropdown •",e.jsx("strong",{children:"Arrow Keys:"})," Navigate items • ",e.jsx("strong",{children:"Enter:"})," Select item"]})]}),e.jsxs("div",{children:[e.jsx(r,{size:"sm",weight:"medium",style:{marginBottom:"var(--space-xs)"},children:"ARIA Support"}),e.jsx(r,{size:"sm",color:"secondary",children:'Includes proper ARIA attributes: aria-expanded, aria-haspopup, role="menu", and role="menuitem" for screen readers.'})]}),e.jsxs("div",{children:[e.jsx(r,{size:"sm",weight:"medium",style:{marginBottom:"var(--space-xs)"},children:"Focus Management"}),e.jsx(r,{size:"sm",color:"secondary",children:"Focus is properly managed when opening/closing dropdowns and navigating between items."})]}),e.jsxs("div",{children:[e.jsx(r,{size:"sm",weight:"medium",style:{marginBottom:"var(--space-xs)"},children:"Click Outside"}),e.jsx(r,{size:"sm",color:"secondary",children:"Dropdown closes when clicking outside, providing intuitive interaction patterns."})]})]})})]})]})},oe=({children:s,language:i="bash"})=>e.jsx("pre",{style:{backgroundColor:"var(--bg-elevated)",color:"var(--text-primary)",padding:"var(--space-lg)",borderRadius:"var(--radius-md)",border:"1px solid var(--border-color)",overflow:"auto",fontSize:"var(--font-size-sm)",fontFamily:"Consolas, Monaco, 'Courier New', monospace",margin:"var(--space-md) 0",lineHeight:"1.5"},children:e.jsx("code",{children:s})}),gs=()=>e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"var(--space-xl)"},children:[e.jsx(r,{as:"h1",size:"3xl",weight:"bold",style:{marginBottom:"var(--space-sm)"},children:"Theme System"}),e.jsx(r,{as:"p",size:"lg",color:"secondary",children:"Comprehensive theming with CSS variables, 8 built-in themes, and full customization"})]}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Overview"}),e.jsx(r,{as:"p",size:"md",style:{marginBottom:"var(--space-lg)",lineHeight:"1.6"},children:"FlowLabKit UI features a powerful theme system built on CSS custom properties (variables) that enables runtime theme switching, comprehensive customization, and consistent design tokens across your application."}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-md)",flexWrap:"wrap"},children:[e.jsx(l,{variant:"primary",children:"8 Built-in Themes"}),e.jsx(l,{variant:"success",children:"Runtime Switching"}),e.jsx(l,{variant:"info",children:"CSS Variables"}),e.jsx(l,{variant:"secondary",children:"100+ Tokens"}),e.jsx(l,{variant:"warning",children:"LocalStorage Persistence"})]})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Available Themes"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"var(--space-md)"},children:[e.jsxs("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)"},children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"🌅 Light"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",children:"Clean, professional default theme for general applications"})]}),e.jsxs("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)"},children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"🌙 Dark"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",children:"Modern dark theme for reduced eye strain and focus"})]}),e.jsxs("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)"},children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"🌊 Ocean"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",children:"Calming blues and cyans for data-focused applications"})]}),e.jsxs("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)"},children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"🌲 Forest"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",children:"Natural greens for wellness and environmental apps"})]}),e.jsxs("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)"},children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"🌅 Sunset"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",children:"Warm oranges and pinks for creative applications"})]}),e.jsxs("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)"},children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"💜 Lavender"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",children:"Soft purples for elegant, dreamy interfaces"})]}),e.jsxs("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)"},children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"🤖 Cyberpunk"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",children:"Neon highlights on dark backgrounds for tech/gaming"})]}),e.jsxs("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)"},children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"🍂 Autumn"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",children:"Cozy browns and golds for seasonal warmth"})]})]})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Basic Usage"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"ThemeProvider Setup"}),e.jsx(oe,{language:"tsx",children:`import React from 'react';
import { ThemeProvider } from '@flowlabkit/ui';

function App() {
  return (
    <ThemeProvider 
      initialConfig={{ 
        mode: 'dark', 
        fontSize: 'medium',
        compactMode: false 
      }}
      persistToLocalStorage={true}
      localStorageKey="my-app-theme"
    >
      <YourAppContent />
    </ThemeProvider>
  );
}`}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"Using Custom Themes"}),e.jsx(oe,{language:"tsx",children:`import { ThemeProvider } from '@flowlabkit/ui';
import { oceanTheme, cyberpunkTheme } from '@flowlabkit/ui/themes';

function App() {
  return (
    <ThemeProvider 
      lightTheme={oceanTheme}
      darkTheme={cyberpunkTheme}
      onThemeChange={(info) => {
        console.log(\`Switched to \${info.themeName} in \${info.mode} mode\`);
      }}
    >
      <YourAppContent />
    </ThemeProvider>
  );
}`})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"useTheme Hook"}),e.jsx(r,{as:"p",size:"md",style:{marginBottom:"var(--space-md)",lineHeight:"1.6"},children:"Access and control theme state throughout your application:"}),e.jsx(oe,{language:"tsx",children:`import { useTheme } from '@flowlabkit/ui';

function ThemedComponent() {
  const { 
    theme,           // Current theme object
    themeName,       // Current theme name
    config,          // Theme configuration
    toggleTheme,     // Toggle light/dark mode
    setMode,         // Set specific mode
    setFontSize,     // Change font scaling
    setCompactMode   // Toggle compact layout
  } = useTheme();
  
  return (
    <div style={{
      backgroundColor: theme.colors.background.app,
      color: theme.colors.text.primary,
      padding: theme.spacing.lg,
    }}>
      <h1>Theme: {themeName}</h1>
      <p>Mode: {config.mode}</p>
      <p>Font Size: {config.fontSize}</p>
      <p>Compact: {config.compactMode ? 'Yes' : 'No'}</p>
      
      <button onClick={toggleTheme}>
        Toggle Light/Dark
      </button>
      <button onClick={() => setFontSize('large')}>
        Large Font
      </button>
      <button onClick={() => setCompactMode(!config.compactMode)}>
        Toggle Compact
      </button>
    </div>
  );
}`})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"CSS Variables"}),e.jsx(r,{as:"p",size:"md",style:{marginBottom:"var(--space-md)",lineHeight:"1.6"},children:"All theme values are automatically available as CSS variables for use in your stylesheets:"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Color Variables"}),e.jsx(oe,{language:"css",children:`.my-component {
  /* Background colors */
  background-color: var(--bg-app);
  border: 1px solid var(--border-color);
  
  /* Text colors */
  color: var(--text-primary);
  
  /* Accent colors */
  background: var(--accent-500);
  color: var(--text-on-accent);
  
  /* Semantic colors */
  border-color: var(--success);
  color: var(--error);
}`}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"Spacing & Layout"}),e.jsx(oe,{language:"css",children:`.layout {
  /* Spacing scale */
  padding: var(--space-md);
  margin: var(--space-lg);
  gap: var(--space-sm);
  
  /* Border radius */
  border-radius: var(--radius-md);
  
  /* Shadows */
  box-shadow: var(--shadow-md);
  
  /* Typography */
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-base);
}`})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Configuration Options"}),e.jsxs("div",{style:{marginBottom:"var(--space-lg)"},children:[e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"ThemeProvider Props"}),e.jsx("div",{style:{backgroundColor:"var(--bg-elevated)",padding:"var(--space-md)",borderRadius:"var(--radius-md)"},children:e.jsx(oe,{language:"tsx",children:`interface ThemeProviderProps {
  children: ReactNode;
  
  // Theme configuration
  lightTheme?: Theme;                    // Custom light theme
  darkTheme?: Theme;                     // Custom dark theme
  initialConfig?: Partial<ThemeConfig>;  // Initial settings
  
  // Persistence
  persistToLocalStorage?: boolean;       // Save to localStorage
  localStorageKey?: string;              // Storage key
  
  // Callbacks
  onThemeChange?: (info: ThemeChangeInfo) => void;
}`})})]}),e.jsxs("div",{style:{marginBottom:"var(--space-lg)"},children:[e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Theme Configuration"}),e.jsx("div",{style:{backgroundColor:"var(--bg-elevated)",padding:"var(--space-md)",borderRadius:"var(--radius-md)"},children:e.jsx(oe,{language:"tsx",children:`interface ThemeConfig {
  mode: 'light' | 'dark';           // Light or dark mode
  fontSize: 'small' | 'medium' | 'large';  // Font scaling
  compactMode: boolean;             // Compact spacing
}`})})]})]})}),e.jsx(o,{children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Advanced Usage"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Custom Theme Creation"}),e.jsx(oe,{language:"tsx",children:`import { Theme, lightTheme } from '@flowlabkit/ui';

const customTheme: Theme = {
  ...lightTheme,
  name: 'Custom Brand',
  colors: {
    ...lightTheme.colors,
    accent: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      // ... your brand colors
      500: '#0ea5e9',  // Primary brand color
      900: '#0c4a6e',
    },
    background: {
      ...lightTheme.colors.background,
      app: '#fafafa',
    }
  }
};`}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"Manual Variable Application"}),e.jsx(oe,{language:"tsx",children:`import { themeToCSSVariables, applyCSSVariables } from '@flowlabkit/ui';

// Convert theme to CSS variables
const variables = themeToCSSVariables(theme, config);

// Apply manually
applyCSSVariables(variables);

// Or access individual variables
console.log(variables['--accent-500']); // Theme's accent color`}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"Theme Switching Component"}),e.jsx(oe,{language:"tsx",children:`import { useTheme } from '@flowlabkit/ui';
import { themes, allThemes } from '@flowlabkit/ui/themes';

function ThemeSelector() {
  const { themeName, setTheme } = useTheme();
  
  return (
    <select 
      value={themeName} 
      onChange={(e) => setTheme(themes[e.target.value])}
    >
      {allThemes.map(name => (
        <option key={name} value={name}>
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </option>
      ))}
    </select>
  );
}`})]})})]}),fe=({children:s,language:i="bash"})=>e.jsx("pre",{style:{backgroundColor:"var(--bg-elevated)",color:"var(--text-primary)",padding:"var(--space-lg)",borderRadius:"var(--radius-md)",border:"1px solid var(--border-color)",overflow:"auto",fontSize:"var(--font-size-sm)",fontFamily:"Consolas, Monaco, 'Courier New', monospace",margin:"var(--space-md) 0",lineHeight:"1.5"},children:e.jsx("code",{children:s})}),yr=()=>e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"var(--space-xl)"},children:[e.jsx(r,{as:"h1",size:"3xl",weight:"bold",style:{marginBottom:"var(--space-sm)"},children:"Installation"}),e.jsx(r,{as:"p",size:"lg",color:"secondary",children:"Get started with FlowLabKit UI in your React application"})]}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Package Overview"}),e.jsx(r,{as:"p",size:"md",style:{marginBottom:"var(--space-lg)",lineHeight:"1.6"},children:"FlowLabKit UI is a comprehensive React UI library that includes a powerful theme system, essential components, and modular architecture. Choose the installation method that best fits your needs."}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-md)",flexWrap:"wrap"},children:[e.jsx(l,{variant:"primary",children:"React 18+ Required"}),e.jsx(l,{variant:"success",children:"TypeScript Ready"}),e.jsx(l,{variant:"info",children:"Tree-Shakable"}),e.jsx(l,{variant:"secondary",children:"8 Built-in Themes"})]})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-sm)",marginBottom:"var(--space-md)"},children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{margin:0},children:"Complete Package"}),e.jsx(l,{variant:"success",children:"Recommended"})]}),e.jsx(r,{as:"p",size:"md",style:{marginBottom:"var(--space-md)",lineHeight:"1.6"},children:"Install everything in one package - theme system, all themes, and UI components (~150KB):"}),e.jsx(fe,{children:"npm install @flowlabkit/ui"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"Quick Start"}),e.jsx(fe,{language:"tsx",children:`import React from 'react';
import { ThemeProvider, Button, Card, CardBody } from '@flowlabkit/ui';

function App() {
  return (
    <ThemeProvider initialConfig={{ mode: 'dark', fontSize: 'medium' }}>
      <Card>
        <CardBody>
          <h1>Welcome to FlowLabKit UI!</h1>
          <Button variant="primary">Get Started</Button>
        </CardBody>
      </Card>
    </ThemeProvider>
  );
}`})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-sm)",marginBottom:"var(--space-md)"},children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{margin:0},children:"Modular Installation"}),e.jsx(l,{variant:"info",children:"Smaller Bundle"})]}),e.jsx(r,{as:"p",size:"md",style:{marginBottom:"var(--space-md)",lineHeight:"1.6"},children:"Install only what you need for optimal bundle sizes:"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Core Only (45KB)"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",style:{marginBottom:"var(--space-sm)"},children:"Theme system + Light/Dark themes only"}),e.jsx(fe,{children:"npm install @flowlabkit/ui"}),e.jsx(fe,{language:"tsx",children:"import { ThemeProvider, useTheme, lightTheme, darkTheme } from '@flowlabkit/ui/core';"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"Core + Additional Themes (65KB)"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",style:{marginBottom:"var(--space-sm)"},children:"Add beautiful themes as needed"}),e.jsx(fe,{language:"tsx",children:`import { ThemeProvider } from '@flowlabkit/ui/core';
import { oceanTheme, cyberpunkTheme, forestTheme } from '@flowlabkit/ui/themes';`}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"Core + UI Components (95KB)"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",style:{marginBottom:"var(--space-sm)"},children:"Theme system + essential components"}),e.jsx(fe,{language:"tsx",children:`import { ThemeProvider, lightTheme } from '@flowlabkit/ui/core';
import { Button, Input, Card, Badge } from '@flowlabkit/ui/components';`})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Requirements"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"var(--space-md)"},children:[e.jsxs("div",{children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"React Version"}),e.jsx(l,{variant:"primary",children:"React 18.0.0+"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:"Hooks and concurrent features required"})]}),e.jsxs("div",{children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"TypeScript"}),e.jsx(l,{variant:"info",children:"TypeScript 4.0+"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:"Recommended for full type safety"})]}),e.jsxs("div",{children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Browser Support"}),e.jsx(l,{variant:"secondary",children:"Modern Browsers"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:"CSS Custom Properties support required"})]})]})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Bundle Size Comparison"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"var(--space-md)"},children:[e.jsxs("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)"},children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Full Package"}),e.jsx(r,{as:"p",size:"lg",weight:"bold",color:"primary",children:"~150KB"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",children:"Everything included"})]}),e.jsxs("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)"},children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Core Only"}),e.jsx(r,{as:"p",size:"lg",weight:"bold",color:"success",children:"~45KB"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",children:"Theme system + light/dark"})]}),e.jsxs("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)"},children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Core + 2 Themes"}),e.jsx(r,{as:"p",size:"lg",weight:"bold",color:"info",children:"~65KB"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",children:"Core + additional themes"})]}),e.jsxs("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)"},children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Core + Components"}),e.jsx(r,{as:"p",size:"lg",weight:"bold",color:"warning",children:"~95KB"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",children:"Core + all UI components"})]})]})]})}),e.jsx(o,{children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Next Steps"}),e.jsx(r,{as:"p",size:"md",style:{marginBottom:"var(--space-md)",lineHeight:"1.6"},children:"After installation, explore these key areas:"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"var(--space-md)"},children:[e.jsxs("div",{children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"📚 Theme System"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",children:"Learn about theme configuration, CSS variables, and customization"})]}),e.jsxs("div",{children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"🧩 Components"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",children:"Explore all available components with examples and API documentation"})]}),e.jsxs("div",{children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"🎨 Themes"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",children:"Discover 8 built-in themes and learn how to create custom themes"})]})]})]})})]}),Ze=[{id:"installation",label:"Installation",category:"Getting Started",component:yr},{id:"theme-system",label:"Theme System",category:"Getting Started",component:gs},{id:"button",label:"Button",category:"Form Components",component:as},{id:"input",label:"Input",category:"Form Components",component:is},{id:"text",label:"Text",category:"Display Components",component:ds},{id:"badge",label:"Badge",category:"Display Components",component:os},{id:"image",label:"Image",category:"Display Components",component:ms},{id:"video",label:"Video",category:"Display Components",component:ps},{id:"link",label:"Link",category:"Navigation Components",component:ns},{id:"dropdown",label:"Dropdown",category:"Navigation Components",component:xs},{id:"spinner",label:"Spinner",category:"Feedback Components",component:ls},{id:"loading-indicator",label:"LoadingIndicator",category:"Feedback Components",component:cs},{id:"card",label:"Card",category:"Layout Components",component:hs}],vs=Array.from(new Set(Ze.map(s=>s.category))),us=()=>{const[s,i]=h.useState("installation"),[n,m]=h.useState(new Set(["Getting Started"])),[a,c]=h.useState(!1),v=g=>{const x=new Set(n);x.has(g)?x.delete(g):x.add(g),m(x)},w=Ze.find(g=>g.id===s)?.component||yr;return e.jsxs("div",{style:{display:"flex",height:"100vh",backgroundColor:"var(--bg-app)",color:"var(--text-primary)",fontFamily:"var(--font-family)"},children:[e.jsxs("div",{style:{width:a?"60px":"300px",backgroundColor:"var(--bg-surface)",borderRight:"1px solid var(--border-color)",transition:"width 0.3s ease",overflow:"hidden",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{style:{padding:"var(--space-lg)",borderBottom:"1px solid var(--border-color)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[!a&&e.jsxs("div",{children:[e.jsx(r,{as:"h1",size:"lg",weight:"bold",style:{margin:0},children:"FlowLabKit UI"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",style:{margin:0,marginTop:"var(--space-xs)"},children:"Documentation"})]}),e.jsx(C,{variant:"ghost",size:"sm",onClick:()=>c(!a),style:{padding:"var(--space-xs)"},children:a?"→":"←"})]}),e.jsx("div",{style:{flex:1,overflowY:"auto",padding:a?"var(--space-sm)":"var(--space-lg)"},children:vs.map(g=>e.jsxs("div",{style:{marginBottom:"var(--space-md)"},children:[!a&&e.jsxs("button",{onClick:()=>v(g),style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"var(--space-sm)",backgroundColor:"transparent",border:"none",color:"var(--text-secondary)",cursor:"pointer",borderRadius:"var(--radius-sm)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-semibold)",textTransform:"uppercase",letterSpacing:"0.05em"},children:[g,e.jsx("span",{style:{transform:n.has(g)?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.2s ease"},children:"▼"})]}),(a||n.has(g))&&e.jsx("div",{style:{marginTop:a?0:"var(--space-sm)"},children:Ze.filter(x=>x.category===g).map(x=>e.jsx("button",{onClick:()=>i(x.id),style:{width:"100%",display:"flex",alignItems:"center",padding:a?"var(--space-sm)":"var(--space-sm) var(--space-md)",backgroundColor:s===x.id?"var(--accent-100)":"transparent",border:s===x.id?"1px solid var(--accent-300)":"1px solid transparent",color:s===x.id?"var(--accent-700)":"var(--text-primary)",cursor:"pointer",borderRadius:"var(--radius-sm)",marginBottom:"var(--space-xs)",fontSize:"var(--font-size-sm)",textAlign:"left",transition:"all 0.2s ease",justifyContent:a?"center":"flex-start"},onMouseEnter:P=>{s!==x.id&&(P.currentTarget.style.backgroundColor="var(--bg-hover)")},onMouseLeave:P=>{s!==x.id&&(P.currentTarget.style.backgroundColor="transparent")},title:a?x.label:void 0,children:a?x.label.charAt(0):x.label},x.id))})]},g))})]}),e.jsx("div",{style:{flex:1,overflow:"auto",backgroundColor:"var(--bg-app)"},children:e.jsx("div",{style:{width:"100%",padding:"var(--space-xl)"},children:e.jsx(w,{})})})]})},ys=()=>e.jsx("div",{style:{margin:"calc(-1 * var(--space-lg))",minHeight:"calc(100vh - 200px)"},children:e.jsx(us,{})}),js=({currentPage:s,onPageChange:i})=>{const n=[{id:"themes",label:"Themes",icon:"🎨"},{id:"components",label:"Components",icon:"🧩"},{id:"installation",label:"Installation",icon:"📦"},{id:"documentation",label:"Documentation",icon:"📚"}];return e.jsx("nav",{style:{backgroundColor:"var(--bg-elevated)",borderBottom:"1px solid var(--border-color)",padding:"0 var(--space-lg)"},children:e.jsx("div",{style:{maxWidth:"1200px",margin:"0 auto",display:"flex",gap:"var(--space-xs)"},children:n.map(m=>e.jsxs("button",{onClick:()=>i(m.id),style:{background:s===m.id?"var(--accent-500)":"transparent",color:s===m.id?"var(--text-on-accent)":"var(--text-primary)",border:"none",padding:"var(--space-md) var(--space-lg)",borderRadius:"0",cursor:"pointer",fontSize:"var(--font-size-sm)",fontWeight:s===m.id?"var(--font-weight-semibold)":"var(--font-weight-normal)",display:"flex",alignItems:"center",gap:"var(--space-xs)",transition:"var(--transition-base)",borderBottom:s===m.id?"2px solid var(--accent-500)":"2px solid transparent"},children:[e.jsx("span",{children:m.icon}),m.label]},m.id))})})},bs=({currentLightTheme:s,currentDarkTheme:i,onLightThemeChange:n,onDarkThemeChange:m,isDark:a,onToggleDark:c,fontSize:v,onFontSizeChange:b,compactMode:w,onCompactModeChange:g})=>e.jsxs("div",{style:{display:"flex",gap:"var(--space-md)",alignItems:"center",flexWrap:"wrap"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-xs)"},children:[e.jsx("label",{style:{fontSize:"var(--font-size-xs)",color:"var(--text-secondary)",fontWeight:"var(--font-weight-medium)"},children:"Light Theme"}),e.jsx("select",{value:s,onChange:x=>n(x.target.value),style:{backgroundColor:"var(--bg-surface)",color:"var(--text-primary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"var(--space-sm) var(--space-md)",fontSize:"var(--font-size-sm)",cursor:"pointer",minWidth:"120px"},children:xr.map(x=>e.jsx("option",{value:x,children:x.charAt(0).toUpperCase()+x.slice(1)},x))})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-xs)"},children:[e.jsx("label",{style:{fontSize:"var(--font-size-xs)",color:"var(--text-secondary)",fontWeight:"var(--font-weight-medium)"},children:"Dark Theme"}),e.jsx("select",{value:i,onChange:x=>m(x.target.value),style:{backgroundColor:"var(--bg-surface)",color:"var(--text-primary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"var(--space-sm) var(--space-md)",fontSize:"var(--font-size-sm)",cursor:"pointer",minWidth:"120px"},children:xr.map(x=>e.jsx("option",{value:x,children:x.charAt(0).toUpperCase()+x.slice(1)},x))})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-xs)"},children:[e.jsx("label",{style:{fontSize:"var(--font-size-xs)",color:"var(--text-secondary)",fontWeight:"var(--font-weight-medium)"},children:"Font Size"}),e.jsxs("select",{value:v,onChange:x=>b(x.target.value),style:{backgroundColor:"var(--bg-surface)",color:"var(--text-primary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"var(--space-sm) var(--space-md)",fontSize:"var(--font-size-sm)",cursor:"pointer",minWidth:"80px"},children:[e.jsx("option",{value:"small",children:"Small"}),e.jsx("option",{value:"medium",children:"Medium"}),e.jsx("option",{value:"large",children:"Large"})]})]}),e.jsxs("button",{onClick:()=>g(!w),style:{backgroundColor:w?"var(--accent-500)":"var(--bg-surface)",color:w?"var(--text-on-accent)":"var(--text-primary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"var(--space-sm) var(--space-md)",fontSize:"var(--font-size-sm)",cursor:"pointer",display:"flex",alignItems:"center",gap:"var(--space-xs)",transition:"var(--transition-base)"},children:["📐",w?"Compact":"Standard"]}),e.jsxs("button",{onClick:c,style:{backgroundColor:a?"var(--accent-500)":"var(--bg-surface)",color:a?"var(--text-on-accent)":"var(--text-primary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"var(--space-sm) var(--space-md)",fontSize:"var(--font-size-sm)",cursor:"pointer",display:"flex",alignItems:"center",gap:"var(--space-xs)",transition:"var(--transition-base)"},children:[a?"🌙":"☀️",a?"Dark":"Light"]})]}),fs=({size:s=32,className:i=""})=>e.jsxs("svg",{width:s,height:s,viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",className:i,children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"flowGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"var(--accent-500)",stopOpacity:1}}),e.jsx("stop",{offset:"50%",style:{stopColor:"var(--accent-400)",stopOpacity:1}}),e.jsx("stop",{offset:"100%",style:{stopColor:"var(--accent-600)",stopOpacity:1}})]}),e.jsxs("linearGradient",{id:"accentGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"var(--accent-300)",stopOpacity:.8}}),e.jsx("stop",{offset:"100%",style:{stopColor:"var(--accent-700)",stopOpacity:.8}})]}),e.jsxs("radialGradient",{id:"bgGradient",cx:"50%",cy:"50%",r:"50%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"var(--bg-elevated)",stopOpacity:1}}),e.jsx("stop",{offset:"100%",style:{stopColor:"var(--bg-surface)",stopOpacity:1}})]})]}),e.jsx("circle",{cx:"16",cy:"16",r:"15",fill:"url(#bgGradient)",stroke:"url(#flowGradient)",strokeWidth:"0.5"}),e.jsx("path",{d:"M6 20 Q10 12, 16 16 Q22 20, 26 12",stroke:"url(#flowGradient)",strokeWidth:"2.5",fill:"none",strokeLinecap:"round"}),e.jsx("path",{d:"M8 24 Q12 18, 16 20 Q20 22, 24 18",stroke:"url(#flowGradient)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",opacity:"0.6"}),e.jsx("rect",{x:"4",y:"8",width:"4",height:"4",rx:"1",fill:"url(#accentGradient)"}),e.jsx("rect",{x:"14",y:"6",width:"4",height:"4",rx:"1",fill:"url(#accentGradient)"}),e.jsx("rect",{x:"24",y:"8",width:"4",height:"4",rx:"1",fill:"url(#accentGradient)"}),e.jsx("path",{d:"M12 4 L12 8 L10 12 L10 14 Q10 15, 11 15 L17 15 Q18 15, 18 14 L18 12 L16 8 L16 4 Z",fill:"url(#flowGradient)",opacity:"0.3"}),e.jsx("circle",{cx:"8",cy:"14",r:"1",fill:"var(--accent-500)",opacity:"0.7"}),e.jsx("circle",{cx:"24",cy:"24",r:"1",fill:"var(--accent-400)",opacity:"0.7"}),e.jsx("circle",{cx:"6",cy:"26",r:"0.8",fill:"var(--accent-600)",opacity:"0.7"}),e.jsx("circle",{cx:"26",cy:"26",r:"0.8",fill:"var(--accent-300)",opacity:"0.7"})]});function ws(){const[s,i]=h.useState("themes"),{setLightTheme:n,setDarkTheme:m,setMode:a,setFontSize:c,setCompactMode:v,config:b,themeName:w,theme:g}=Z(),[x,P]=h.useState("light"),[y,W]=h.useState("dark");console.log("Current theme info:",{themeName:w,config:b,themeObject:g});const R=B=>{const p=Be[B];p&&(console.log("Changing light theme to:",B,p),P(B),n(p))},N=B=>{const p=Be[B];p&&(console.log("Changing dark theme to:",B,p),W(B),m(p))},U=()=>{a(b.mode==="light"?"dark":"light")},D=B=>{c(B)},I=B=>{v(B)},$=()=>{switch(s){case"themes":return e.jsx(vr,{onThemeSelect:R});case"components":return e.jsx(ss,{});case"installation":return e.jsx(ts,{});case"documentation":return e.jsx(ys,{});default:return e.jsx(vr,{onThemeSelect:R})}};return e.jsxs("div",{style:{minHeight:"100vh",backgroundColor:"var(--bg-app)",color:"var(--text-primary)",fontFamily:"system-ui, -apple-system, sans-serif"},children:[e.jsx("header",{style:{backgroundColor:"var(--bg-surface)",borderBottom:"1px solid var(--border-color)",padding:"var(--space-md)",position:"sticky",top:0,zIndex:1e3},children:e.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center",gap:"var(--space-lg)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-sm)"},children:[e.jsx(fs,{size:40}),e.jsxs("div",{children:[e.jsx("h1",{style:{fontSize:"var(--font-size-2xl)",fontWeight:"var(--font-weight-bold)",margin:0,color:"var(--accent-500)"},children:"FlowLabKit"}),e.jsx("p",{style:{fontSize:"var(--font-size-sm)",color:"var(--text-secondary)",margin:"4px 0 0 0"},children:"Theme System Showcase"})]})]}),e.jsx("div",{style:{display:"flex",gap:"var(--space-md)",alignItems:"center"},children:e.jsx(bs,{currentLightTheme:x,currentDarkTheme:y,onLightThemeChange:R,onDarkThemeChange:N,isDark:b.mode==="dark",onToggleDark:U,fontSize:b.fontSize,onFontSizeChange:D,compactMode:b.compactMode,onCompactModeChange:I})})]})}),e.jsx(js,{currentPage:s,onPageChange:i}),e.jsx("main",{style:{width:"100%",padding:"var(--space-lg)"},children:$()}),e.jsx("footer",{style:{backgroundColor:"var(--bg-surface)",borderTop:"1px solid var(--border-color)",padding:"var(--space-lg)",marginTop:"var(--space-2xl)",textAlign:"center"},children:e.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"var(--font-size-sm)",margin:0},children:"Built with using @flowlabkit/ui"})})]})}function Bs(){return e.jsx(Gr,{lightTheme:Be.light,darkTheme:Be.dark,initialConfig:{mode:"light",fontSize:"medium",compactMode:!1},children:e.jsx(ws,{})})}const zs=`
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    background-color: var(--bg-app, #ffffff);
    color: var(--text-primary, #000000);
  }
  
  button {
    font-family: inherit;
  }
  
  code, pre {
    font-family: 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', monospace;
  }
`,jr=document.createElement("style");jr.textContent=zs;document.head.appendChild(jr);const Ss=Jr.createRoot(document.getElementById("root"));Ss.render(e.jsx(pe.StrictMode,{children:e.jsx(Bs,{})}));
