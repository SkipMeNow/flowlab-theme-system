import{r as p,T as Yr,j as e,i as j,R as pe,t as ze,a as gr,b as _r}from"./theme-Cbbmiogo.js";import{a as Jr,g as Zr}from"./vendor-D3F3s8fL.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const m of t)if(m.type==="childList")for(const v of m.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&l(v)}).observe(document,{childList:!0,subtree:!0});function i(t){const m={};return t.integrity&&(m.integrity=t.integrity),t.referrerPolicy&&(m.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?m.credentials="include":t.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function l(t){if(t.ep)return;t.ep=!0;const m=i(t);fetch(t.href,m)}})();var We={},vr;function es(){if(vr)return We;vr=1;var s=Jr();return We.createRoot=s.createRoot,We.hydrateRoot=s.hydrateRoot,We}var rs=es();const ss=Zr(rs);function ee(){const s=p.useContext(Yr);if(s===void 0)throw new Error("useTheme must be used within a ThemeProvider");return s}const U=p.forwardRef(({variant:s="primary",size:n="md",underline:i="hover",external:l=!1,disabled:t=!1,className:m="",children:v,href:b,target:z,rel:x,...h},E)=>{const{theme:y}=ee(),V={display:"inline-flex",alignItems:"center",gap:"var(--space-xs)",fontFamily:"var(--font-family)",fontWeight:"var(--font-weight-medium)",textDecoration:i==="always"?"underline":"none",transition:"var(--transition-base)",cursor:t?"not-allowed":"pointer",opacity:t?.6:1,pointerEvents:t?"none":"auto"},A={primary:{color:"var(--text-primary)"},secondary:{color:"var(--text-secondary)"},accent:{color:"var(--accent-500)"},muted:{color:"var(--text-muted)"}},H={sm:{fontSize:"var(--font-size-sm)"},md:{fontSize:"var(--font-size-base)"},lg:{fontSize:"var(--font-size-lg)"}},D={textDecoration:i==="hover"?"underline":void 0,color:s==="accent"?"var(--accent-600)":"var(--text-accent)"},W={...V,...A[s],...H[n]},L=l?"_blank":z,Q=l?"noopener noreferrer":x;return e.jsxs("a",{ref:E,href:t?void 0:b,target:L,rel:Q,style:W,className:m,onMouseEnter:B=>{!t&&i==="hover"&&Object.assign(B.currentTarget.style,D)},onMouseLeave:B=>{t||Object.assign(B.currentTarget.style,W)},...h,children:[v,l&&e.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{marginLeft:"2px"},children:[e.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),e.jsx("polyline",{points:"15,3 21,3 21,9"}),e.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]})]})});U.displayName="Link";function yr(){const{theme:s}=ee(),[n,i]=p.useState("lg");return p.useEffect(()=>{const l=()=>{const t=window.innerWidth;t<parseInt(s.breakpoints.sm)?i("xs"):t<parseInt(s.breakpoints.md)?i("sm"):t<parseInt(s.breakpoints.lg)?i("md"):t<parseInt(s.breakpoints.xl)?i("lg"):t<parseInt(s.breakpoints.xxl)?i("xl"):i("xxl")};return l(),window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[s.breakpoints]),n}function jr(){const[s,n]=p.useState(!1);return p.useEffect(()=>{const i=()=>{const l="ontouchstart"in window||navigator.maxTouchPoints>0,t=window.innerWidth<768,m=/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);n(l||t||m)};return i(),window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]),s}function ts(){const[s,n]=p.useState("landscape");return p.useEffect(()=>{const i=()=>{n(window.innerHeight>window.innerWidth?"portrait":"landscape")};return i(),window.addEventListener("resize",i),window.addEventListener("orientationchange",i),()=>{window.removeEventListener("resize",i),window.removeEventListener("orientationchange",i)}},[]),s}function as(s){const n=yr();return s[n]??s.default}function br(){const[s,n]=p.useState(!0);return p.useEffect(()=>{const i=()=>{const t=window.matchMedia("(hover: hover)").matches;n(t)};i();const l=window.matchMedia("(hover: hover)");return l.addEventListener("change",i),()=>l.removeEventListener("change",i)},[]),s}const w=p.forwardRef(({variant:s="primary",size:n="md",shape:i="rounded",fullWidth:l=!1,loading:t=!1,disabled:m=!1,leftIcon:v,rightIcon:b,className:z="",mobileOptimized:x=!0,children:h,...E},y)=>{const{theme:V}=ee(),A=jr(),H=br(),D=x&&A&&n==="sm"?"md":n,W={display:"inline-flex",alignItems:"center",justifyContent:"center",gap:i==="circle"?"0":"var(--space-xs)",fontFamily:"var(--font-family)",fontWeight:"var(--font-weight-medium)",border:"1px solid transparent",transition:H?"var(--transition-base)":"none",cursor:m||t?"not-allowed":"pointer",opacity:m?.6:1,width:l?"100%":"auto",position:"relative",overflow:"hidden",textAlign:"center",whiteSpace:i==="circle"?"nowrap":"normal",...x&&A&&{minHeight:"var(--touch-target-size)",WebkitTapHighlightColor:"var(--tap-highlight-color)",touchAction:"manipulation",userSelect:"none"}},L={primary:{backgroundColor:"var(--btn-primary-bg)",color:"var(--btn-primary-text)",borderColor:"var(--btn-primary-bg)"},secondary:{backgroundColor:"var(--btn-bg)",color:"var(--btn-text)",borderColor:"var(--btn-border)"},outline:{backgroundColor:"transparent",color:"var(--btn-text)",borderColor:"var(--btn-border)"},ghost:{backgroundColor:"transparent",color:"var(--btn-text)",borderColor:"transparent"},danger:{backgroundColor:"var(--error-color)",color:"white",borderColor:"var(--error-color)"}},Q={sm:{padding:"var(--space-xs) var(--space-sm)",fontSize:"var(--font-size-sm)",minHeight:"calc(var(--font-size-sm) + var(--space-md))"},md:{padding:"var(--space-sm) var(--space-md)",fontSize:"var(--font-size-base)",minHeight:"calc(var(--font-size-base) + var(--space-lg))"},lg:{padding:"var(--space-md) var(--space-lg)",fontSize:"var(--font-size-lg)",minHeight:"calc(var(--font-size-lg) + var(--space-xl))"}},B={rounded:{borderRadius:"var(--radius-md)"},pill:{borderRadius:"9999px"},square:{borderRadius:"0"},circle:{borderRadius:"50%",aspectRatio:"1",padding:"0",minWidth:i==="circle"&&D==="sm"?"2rem":i==="circle"&&D==="md"?"2.5rem":i==="circle"&&D==="lg"?"3rem":"auto",width:i==="circle"&&D==="sm"?"2rem":i==="circle"&&D==="md"?"2.5rem":i==="circle"&&D==="lg"?"3rem":"auto",height:i==="circle"&&D==="sm"?"2rem":i==="circle"&&D==="md"?"2.5rem":i==="circle"&&D==="lg"?"3rem":"auto"}},g=$=>{switch($){case"primary":return{backgroundColor:"var(--btn-primary-bg-hover)"};case"secondary":return{backgroundColor:"var(--btn-bg-hover)"};case"outline":return{backgroundColor:"var(--btn-bg-hover)"};case"ghost":return{backgroundColor:"var(--bg-hover)"};case"danger":return{backgroundColor:"var(--error-color)",filter:"brightness(0.9)"};default:return{}}},k=$=>{switch($){case"primary":return{backgroundColor:"var(--btn-primary-bg-active)"};case"secondary":return{backgroundColor:"var(--btn-bg-active)"};case"outline":return{backgroundColor:"var(--btn-bg-active)"};case"ghost":return{backgroundColor:"var(--bg-active)"};case"danger":return{backgroundColor:"var(--error-color)",filter:"brightness(0.8)"};default:return{}}},X={...W,...L[s],...Q[D],...B[i]},P=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{animation:"spin 1s linear infinite"},children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"M12 2 A10 10 0 0 1 22 12"})]});return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}),e.jsxs("button",{ref:y,disabled:m||t,style:X,className:z,onMouseEnter:H?$=>{!m&&!t&&Object.assign($.currentTarget.style,{...X,...g(s)})}:void 0,onMouseLeave:H?$=>{!m&&!t&&Object.assign($.currentTarget.style,X)}:void 0,onMouseDown:$=>{!m&&!t&&Object.assign($.currentTarget.style,{...X,...k(s)})},onMouseUp:$=>{!m&&!t&&Object.assign($.currentTarget.style,{...X,...H?g(s):{}})},...E,children:[t&&e.jsx(P,{}),v&&!t&&v,h,b&&!t&&b]})]})});w.displayName="Button";const N=p.forwardRef(({size:s="md",variant:n="default",type:i="default",isInvalid:l=!1,disabled:t=!1,leftIcon:m,rightIcon:v,label:b,helperText:z,errorMessage:x,className:h="",id:E,enableValidation:y=!0,showValidationIcon:V=!0,showPasswordToggle:A=!0,onFocus:H,onBlur:D,onChange:W,value:L,...Q},B)=>{const{theme:g}=ee(),[k,X]=p.useState(!1),[P,$]=p.useState(!1),[S,de]=p.useState(!1),[te,G]=p.useState(""),[re,se]=p.useState(null),Be=l||!!x||!!te,xe=E||`input-${Math.random().toString(36).substr(2,9)}`;p.useEffect(()=>{if(y&&L){let T={isValid:!0,error:""};i==="email"?T=ae(L.toString()):i==="password"&&(T=ge(L.toString())),se(T.isValid),T.isValid||G(T.error)}},[]);const ae=T=>T?/^[^\s@]+@[^\s@]+\.(com|org|net|edu|gov|mil|int|co|io|me|info|biz|name|museum|coop|aero|[a-z]{2,3})$/i.test(T)?{isValid:!0,error:""}:{isValid:!1,error:"Please enter a valid email address"}:{isValid:!1,error:""},ge=T=>{if(!T)return{isValid:!1,error:""};if(T.length<6)return{isValid:!1,error:"Password must be at least 6 characters"};if(T.length<8)return{isValid:!0,error:""};const K=/[A-Z]/.test(T),Y=/[a-z]/.test(T),M=/\d/.test(T),Z=/[!@#$%^&*(),.?":{}|<>]/.test(T);return K&&Y&&M&&Z?{isValid:!0,error:""}:{isValid:!0,error:""}},Se=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),qe=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),e.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}),ve=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("polyline",{points:"20,6 9,17 4,12"})}),ue=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),rr=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),e.jsx("polyline",{points:"22,6 12,13 2,6"})]}),sr=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),e.jsx("circle",{cx:"12",cy:"16",r:"1"}),e.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),Ce=()=>{let T=j.inputBorder,K="none";return Be?(T=j.errorColor,k&&(K=`0 0 0 2px ${j.errorLight}`)):k?(T=j.inputBorderFocus,K=`0 0 0 2px ${j.focusRing}`):P&&!t&&(T=j.inputBorderHover),{display:"flex",alignItems:"center",borderRadius:n==="flushed"?"0":j.radiusMd,borderWidth:"1px",borderStyle:"solid",borderColor:T,backgroundColor:n==="filled"?j.bgElevated:j.inputBg,borderBottomWidth:n==="flushed"?"2px":"1px",borderTopWidth:n==="flushed"?"0":"1px",borderLeftWidth:n==="flushed"?"0":"1px",borderRightWidth:n==="flushed"?"0":"1px",paddingLeft:m?j.spaceXs:j.spaceSm,paddingRight:v?j.spaceXs:j.spaceSm,paddingTop:j.spaceXs,paddingBottom:j.spaceXs,boxShadow:K,transition:j.transitionBase,...J[s]}},Xe={flex:1,border:"none",outline:"none",backgroundColor:"transparent",color:j.inputText,fontSize:j.fontSizeBase,fontFamily:"inherit",padding:"0",margin:m||v?`0 ${j.spaceXs}`:"0"},J={sm:{minHeight:`calc(${j.fontSizeSm} + ${j.spaceMd})`,fontSize:j.fontSizeSm},md:{minHeight:`calc(${j.fontSizeBase} + ${j.spaceLg})`,fontSize:j.fontSizeBase},lg:{minHeight:`calc(${j.fontSizeLg} + ${j.spaceXl})`,fontSize:j.fontSizeLg}},Ge=()=>i==="password"?S?"text":"password":i==="email"?"email":i==="default"?"text":i,ie=()=>m||(i==="email"?e.jsx(rr,{}):i==="password"?e.jsx(sr,{}):null),Ke=()=>i==="email"?"Enter your email address":i==="password"?"Enter your password":"",ne=({password:T})=>{const Y=(M=>{if(M.length<6)return{level:0,text:"Too short",color:j.errorColor};let Z=0;return M.length>=8&&Z++,/[A-Z]/.test(M)&&Z++,/[a-z]/.test(M)&&Z++,/\d/.test(M)&&Z++,/[!@#$%^&*(),.?":{}|<>]/.test(M)&&Z++,Z<2?{level:1,text:"Weak",color:j.errorColor}:Z<4?{level:2,text:"Fair",color:j.warningColor}:Z<5?{level:3,text:"Good",color:j.info}:{level:4,text:"Strong",color:j.successColor}})(T);return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:j.spaceSm},children:[e.jsx("div",{style:{flex:1,height:"4px",backgroundColor:j.gray200,borderRadius:"2px",overflow:"hidden"},children:e.jsx("div",{style:{height:"100%",width:`${Y.level/4*100}%`,backgroundColor:Y.color,transition:j.transitionBase}})}),e.jsx("span",{style:{color:Y.color,minWidth:"60px",fontSize:j.fontSizeXs,fontWeight:j.fontWeightMedium},children:Y.text})]})},Me=()=>{const T=[];return y&&V&&L&&(re===!0?T.push(e.jsxs("div",{style:{color:"#10b981"},children:[" ",e.jsx(ve,{})]},"validation")):re===!1&&T.push(e.jsxs("div",{style:{color:"#ef4444"},children:[" ",e.jsx(ue,{})]},"validation"))),i==="password"&&A&&T.push(e.jsx("button",{type:"button",onClick:()=>de(!S),style:{background:"none",border:"none",cursor:"pointer",padding:"0.25rem",display:"flex",alignItems:"center",color:j.textMuted,borderRadius:j.radiusSm},tabIndex:-1,children:S?e.jsx(qe,{}):e.jsx(Se,{})},"password-toggle")),v&&T.push(e.jsx("div",{children:v},"custom")),T.length>0?e.jsx("div",{style:{display:"flex",alignItems:"center",gap:j.spaceXs},children:T}):null},Qe=T=>{if(X(!0),y&&i==="email"&&L){const K=ae(L.toString());se(K.isValid),K.isValid||G(K.error)}H?.(T)},ke=T=>{if(X(!1),y&&L){let K={isValid:!0,error:""};i==="email"?K=ae(L.toString()):i==="password"&&(K=ge(L.toString())),se(K.isValid),G(K.error)}D?.(T)},Te=T=>{const K=T.target.value;if(y)if(K){let Y={isValid:!0,error:""};i==="email"?(Y=ae(K),se(Y.isValid),Y.isValid?G(""):G(Y.error)):i==="password"?(Y=ge(K),se(Y.isValid),Y.isValid?G(""):G(Y.error)):(se(!0),G(""))}else se(null),G("");W?.(T)},le=()=>{t||$(!0)},ce=()=>{$(!1)};return e.jsxs("div",{className:h,children:[b&&e.jsx("label",{htmlFor:xe,style:{display:"block",fontSize:j.fontSizeSm,fontWeight:j.fontWeightMedium,color:j.textPrimary,marginBottom:j.spaceXs},children:b}),e.jsxs("div",{style:Ce(),onMouseEnter:le,onMouseLeave:ce,children:[ie()&&e.jsx("div",{style:{display:"flex",alignItems:"center",color:j.textMuted,fontSize:J[s].fontSize},children:ie()}),e.jsx("input",{ref:B,id:xe,type:Ge(),disabled:t,value:L,onFocus:Qe,onBlur:ke,onChange:Te,style:{...Xe,...J[s],opacity:t?.6:1,cursor:t?"not-allowed":"text"},placeholder:Q.placeholder||Ke(),...Q}),Me()&&e.jsx("div",{style:{display:"flex",alignItems:"center",color:j.textMuted,fontSize:J[s].fontSize},children:Me()})]}),(z||x||te)&&e.jsx("div",{style:{marginTop:j.spaceXs,fontSize:j.fontSizeSm,color:Be?j.errorColor:j.textSecondary},children:x||te||z}),i==="password"&&L&&y&&e.jsx("div",{style:{marginTop:j.spaceXs},children:e.jsx(ne,{password:L.toString()})})]})});N.displayName="Input";const o=p.forwardRef(({variant:s="elevated",padding:n="md",radius:i="md",shadow:l="md",hoverable:t=!1,className:m="",children:v,...b},z)=>{const{theme:x}=ee(),h={display:"flex",flexDirection:"column",position:"relative",transition:"var(--transition-base)",cursor:t?"pointer":"default"},E={elevated:{backgroundColor:"var(--bg-surface)",border:"none"},outlined:{backgroundColor:"var(--bg-surface)",border:"1px solid var(--border-color)"},filled:{backgroundColor:"var(--bg-elevated)",border:"none"}},y={none:{padding:"0"},sm:{padding:"var(--space-sm)"},md:{padding:"var(--space-md)"},lg:{padding:"var(--space-lg)"}},V={none:{borderRadius:"0"},sm:{borderRadius:"var(--radius-sm)"},md:{borderRadius:"var(--radius-md)"},lg:{borderRadius:"var(--radius-lg)"}},A={none:{boxShadow:"none"},sm:{boxShadow:"var(--shadow-sm)"},md:{boxShadow:"var(--shadow-md)"},lg:{boxShadow:"var(--shadow-lg)"}},H=t?{transform:"translateY(-1px)",boxShadow:l!=="none"?"var(--shadow-lg)":"var(--shadow-md)"}:{},D={...h,...E[s],...y[n],...V[i],...A[l]};return e.jsx("div",{ref:z,style:D,className:m,onMouseEnter:W=>{t&&Object.assign(W.currentTarget.style,{...D,...H})},onMouseLeave:W=>{t&&Object.assign(W.currentTarget.style,D)},...b,children:v})});o.displayName="Card";const F=p.forwardRef(({className:s="",children:n,...i},l)=>e.jsx("div",{ref:l,style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"var(--space-md)",paddingBottom:"var(--space-sm)",borderBottom:"1px solid var(--border-light)"},className:s,...i,children:n}));F.displayName="CardHeader";const d=p.forwardRef(({className:s="",children:n,...i},l)=>e.jsx("div",{ref:l,style:{flex:1},className:s,...i,children:n}));d.displayName="CardBody";const $e=p.forwardRef(({className:s="",children:n,...i},l)=>e.jsx("div",{ref:l,style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"var(--space-sm)",marginTop:"var(--space-md)",paddingTop:"var(--space-sm)",borderTop:"1px solid var(--border-light)"},className:s,...i,children:n}));$e.displayName="CardFooter";const c=({variant:s="default",size:n="md",shape:i="rounded",dot:l=!1,children:t,className:m=""})=>{const v={display:"inline-flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--font-family)",fontWeight:"var(--font-weight-medium)",lineHeight:1,whiteSpace:"nowrap",verticalAlign:"middle",transition:"var(--transition-base)"},b={default:{backgroundColor:"var(--gray-100)",color:"var(--gray-800)"},primary:{backgroundColor:"var(--accent-500)",color:"white"},secondary:{backgroundColor:"var(--gray-500)",color:"white"},success:{backgroundColor:"var(--success-color)",color:"white"},warning:{backgroundColor:"var(--warning-color)",color:"white"},error:{backgroundColor:"var(--error-color)",color:"white"},info:{backgroundColor:"var(--info)",color:"white"}},z={sm:{fontSize:"var(--font-size-xs)",padding:l?"0":"var(--space-xs) var(--space-sm)",minWidth:l?"var(--space-sm)":"auto",height:l?"var(--space-sm)":"calc(var(--font-size-xs) + var(--space-xs) * 2)"},md:{fontSize:"var(--font-size-sm)",padding:l?"0":"var(--space-xs) var(--space-md)",minWidth:l?"var(--space-md)":"auto",height:l?"var(--space-md)":"calc(var(--font-size-sm) + var(--space-sm))"},lg:{fontSize:"var(--font-size-base)",padding:l?"0":"var(--space-sm) var(--space-lg)",minWidth:l?"var(--space-lg)":"auto",height:l?"var(--space-lg)":"calc(var(--font-size-base) + var(--space-md))"}},x={rounded:{borderRadius:"var(--radius-sm)"},pill:{borderRadius:"9999px"},square:{borderRadius:"0"}},h=l?{borderRadius:"50%",padding:"0"}:{},E={...v,...b[s],...z[n],...x[i],...h};return p.createElement("span",{style:E,className:m},l?null:t)},r=p.forwardRef(({as:s="p",size:n="md",weight:i="normal",color:l="primary",align:t="left",truncate:m=!1,lineClamp:v,className:b="",children:z,style:x,...h},E)=>{const{theme:y}=ee(),V=s,A={margin:0,fontFamily:"var(--font-family)",lineHeight:1.5,textAlign:t},H={xs:{fontSize:"var(--font-size-xs)"},sm:{fontSize:"var(--font-size-sm)"},md:{fontSize:"var(--font-size-base)"},lg:{fontSize:"var(--font-size-lg)"},xl:{fontSize:"var(--font-size-xl)"},"2xl":{fontSize:"var(--font-size-2xl)"},"3xl":{fontSize:"var(--font-size-3xl)"}},D={normal:{fontWeight:"var(--font-weight-normal)"},medium:{fontWeight:"var(--font-weight-medium)"},semibold:{fontWeight:"var(--font-weight-semibold)"},bold:{fontWeight:"var(--font-weight-bold)"}},W={primary:{color:"var(--text-primary)"},secondary:{color:"var(--text-secondary)"},tertiary:{color:"var(--text-tertiary)"},muted:{color:"var(--text-muted)"},accent:{color:"var(--text-accent)"},success:{color:"var(--success-color)"},warning:{color:"var(--warning-color)"},error:{color:"var(--error-color)"},info:{color:"var(--info)"}},L=m?{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}:{},Q=v?{display:"-webkit-box",WebkitLineClamp:v,WebkitBoxOrient:"vertical",overflow:"hidden",textOverflow:"ellipsis"}:{},B={h1:{fontSize:"var(--font-size-3xl)",fontWeight:"var(--font-weight-bold)",lineHeight:1.2,marginBottom:"var(--space-lg)"},h2:{fontSize:"var(--font-size-2xl)",fontWeight:"var(--font-weight-bold)",lineHeight:1.3,marginBottom:"var(--space-md)"},h3:{fontSize:"var(--font-size-xl)",fontWeight:"var(--font-weight-semibold)",lineHeight:1.3,marginBottom:"var(--space-md)"},h4:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",lineHeight:1.4,marginBottom:"var(--space-sm)"},h5:{fontSize:"var(--font-size-base)",fontWeight:"var(--font-weight-semibold)",lineHeight:1.4,marginBottom:"var(--space-sm)"},h6:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-semibold)",lineHeight:1.4,marginBottom:"var(--space-sm)"}},k=["h1","h2","h3","h4","h5","h6"].includes(s)?B[s]:{},X={...A,...k,...H[n],...D[i],...W[l],...L,...Q,...x};return e.jsx(V,{ref:E,style:X,className:b,...h,children:z})});r.displayName="Text";const R=p.forwardRef(({size:s="md",variant:n="primary",thickness:i="medium",speed:l="normal",className:t="",...m},v)=>{const{theme:b}=ee(),z={display:"inline-block",borderRadius:"50%",borderStyle:"solid",animation:`spin ${l==="slow"?"1.5s":l==="fast"?"0.6s":"0.8s"} linear infinite`,filter:"drop-shadow(0 0 2px rgba(0, 0, 0, 0.1))"},x={xs:{width:"12px",height:"12px"},sm:{width:"16px",height:"16px"},md:{width:"24px",height:"24px"},lg:{width:"32px",height:"32px"},xl:{width:"48px",height:"48px"}},h={thin:{borderWidth:"2px"},medium:{borderWidth:"3px"},thick:{borderWidth:"4px"}},E={primary:{borderColor:"rgba(128, 128, 128, 0.2)",borderTopColor:"var(--accent-500)",borderRightColor:"var(--accent-500)"},secondary:{borderColor:"rgba(128, 128, 128, 0.2)",borderTopColor:"var(--text-secondary)",borderRightColor:"var(--text-secondary)"},accent:{borderColor:"rgba(128, 128, 128, 0.2)",borderTopColor:"var(--accent-500)",borderRightColor:"var(--accent-600)"},success:{borderColor:"rgba(128, 128, 128, 0.2)",borderTopColor:"var(--success)",borderRightColor:"var(--success)"},warning:{borderColor:"rgba(128, 128, 128, 0.2)",borderTopColor:"var(--warning)",borderRightColor:"var(--warning)"},error:{borderColor:"rgba(128, 128, 128, 0.2)",borderTopColor:"var(--error)",borderRightColor:"var(--error)"}},y={...z,...x[s],...h[i],...E[n]};return pe.useEffect(()=>{const V="spinner-keyframes";if(!document.getElementById(V)){const A=document.createElement("style");A.id=V,A.textContent=`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `,document.head.appendChild(A)}},[]),e.jsx("div",{ref:v,style:y,className:t,role:"status","aria-label":"Loading",...m})});R.displayName="Spinner";const C=p.forwardRef(({type:s="dots",size:n="md",variant:i="primary",speed:l="normal",text:t,textPosition:m="right",className:v="",...b},z)=>{const{theme:x}=ee(),h=l==="slow"?"1.5s":l==="fast"?"0.8s":"1.2s",y={xs:{dotSize:"4px",gap:"2px",fontSize:"12px"},sm:{dotSize:"6px",gap:"3px",fontSize:"14px"},md:{dotSize:"8px",gap:"4px",fontSize:"16px"},lg:{dotSize:"10px",gap:"5px",fontSize:"18px"},xl:{dotSize:"12px",gap:"6px",fontSize:"20px"}}[n],A={primary:"var(--text-primary)",secondary:"var(--text-secondary)",accent:"var(--accent-500)",success:"var(--success)",warning:"var(--warning)",error:"var(--error)"}[i],H={display:"inline-flex",alignItems:"center",gap:"var(--space-sm)",fontFamily:"var(--font-family)",fontSize:y.fontSize,color:A},D={color:A,fontSize:y.fontSize,fontWeight:"var(--font-weight-medium)"},W=()=>{if(!t)return{flexDirection:"row"};switch(m){case"left":return{flexDirection:"row"};case"right":return{flexDirection:"row"};case"top":return{flexDirection:"column",alignItems:"center"};case"bottom":return{flexDirection:"column",alignItems:"center"};default:return{flexDirection:"row"}}};pe.useEffect(()=>{const B="loading-indicator-keyframes";if(!document.getElementById(B)){const g=document.createElement("style");g.id=B,g.textContent=`
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
      `,document.head.appendChild(g)}},[]);const L=()=>{const B={width:y.dotSize,height:y.dotSize,backgroundColor:A,borderRadius:"50%",display:"inline-block",marginRight:y.gap},g={width:y.dotSize,height:`calc(${y.dotSize} * 2)`,backgroundColor:A,borderRadius:y.dotSize,display:"inline-block",marginRight:y.gap};switch(s){case"dots":return e.jsx("div",{style:{display:"flex",alignItems:"center",gap:y.gap},children:[0,1,2].map(k=>e.jsx("div",{style:{...B,animation:`bouncing-dots ${h} infinite`,animationDelay:`${k*.2}s`}},k))});case"pulse":return e.jsx("div",{style:{display:"flex",alignItems:"center",gap:y.gap},children:[0,1,2,3].map(k=>e.jsx("div",{style:{...B,animation:`pulse ${h} infinite`,animationDelay:`${k*.15}s`}},k))});case"wave":return e.jsx("div",{style:{display:"flex",alignItems:"center",gap:y.gap},children:[0,1,2,3,4].map(k=>e.jsx("div",{style:{...g,animation:`wave ${h} infinite`,animationDelay:`${k*.1}s`}},k))});case"bars":return e.jsx("div",{style:{display:"flex",alignItems:"end",gap:y.gap},children:[0,1,2,3].map(k=>e.jsx("div",{style:{width:y.dotSize,height:`calc(${y.dotSize} * ${1.5+Math.sin(k)*.5})`,backgroundColor:A,borderRadius:`${y.dotSize} ${y.dotSize} 0 0`,animation:`bars ${h} infinite`,animationDelay:`${k*.1}s`}},k))});case"bounce":return e.jsx("div",{style:{display:"flex",alignItems:"center",gap:y.gap},children:[0,1,2].map(k=>e.jsx("div",{style:{...B,animation:`bounce ${h} infinite`,animationDelay:`${k*.1}s`}},k))});default:return L()}},Q=()=>{const B=L();if(!t)return B;const g=e.jsx("span",{style:D,children:t});switch(m){case"left":return e.jsxs(e.Fragment,{children:[g,B]});case"right":return e.jsxs(e.Fragment,{children:[B,g]});case"top":return e.jsxs(e.Fragment,{children:[g,B]});case"bottom":return e.jsxs(e.Fragment,{children:[B,g]});default:return e.jsxs(e.Fragment,{children:[B,g]})}};return e.jsx("div",{ref:z,style:{...H,...W()},className:v,role:"status","aria-label":t?`${t}...`:"Loading",...b,children:Q()})});C.displayName="LoadingIndicator";const O=p.forwardRef(({variant:s="default",shape:n="square",size:i="md",fit:l="cover",loading:t="lazy",showSpinner:m=!0,fallback:v,className:b="",src:z,alt:x,onLoad:h,onError:E,...y},V)=>{const{theme:A}=ee(),[H,D]=p.useState(!0),[W,L]=p.useState(!1),Q={display:"block",objectFit:l,transition:"var(--transition-base)",backgroundColor:"var(--bg-surface)"},B={xs:{width:"32px",height:"32px"},sm:{width:"48px",height:"48px"},md:{width:"96px",height:"96px"},lg:{width:"128px",height:"128px"},xl:{width:"192px",height:"192px"},full:{width:"100%",height:"auto"}},g={square:{borderRadius:"0"},rounded:{borderRadius:"var(--radius-lg)"},circle:{borderRadius:"50%",aspectRatio:"1"},pill:{borderRadius:"var(--radius-full)",aspectRatio:"2/1"}},k={default:{border:"1px solid transparent"},bordered:{border:"3px solid var(--accent-500)",padding:"2px"},shadow:{boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)",border:"1px solid var(--border-color)"},elevated:{boxShadow:"0 8px 25px rgba(0, 0, 0, 0.25)",transform:"translateY(-4px)",border:"1px solid var(--border-color)"},"hover-lift":{cursor:"pointer",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",border:"2px solid var(--border-color)",transform:"translateY(0px) scale(1)",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.1)"}},X={...Q,...B[i],...g[n],...k[s]},P={position:"relative",display:"inline-block",...B[i],...g[n]},$={position:"absolute",top:0,left:0,right:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"var(--bg-surface)",borderRadius:g[n].borderRadius,opacity:H?1:0,pointerEvents:H?"auto":"none",transition:"var(--transition-base)"},S={...P,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"var(--bg-surface)",border:"2px dashed var(--border-color)",color:"var(--text-secondary)",fontSize:"var(--font-size-sm)",textAlign:"center",padding:"var(--space-sm)"},de=G=>{D(!1),L(!1),h?.(G)},te=G=>{D(!1),L(!0),E?.(G)};return W&&v?e.jsx("div",{style:S,className:b,children:v}):W?e.jsxs("div",{style:S,className:b,children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}),e.jsx("circle",{cx:"9",cy:"9",r:"2"}),e.jsx("path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"})]}),e.jsx("div",{style:{marginTop:"4px",fontSize:"10px"},children:"Failed to load"})]}):e.jsxs("div",{style:P,className:b,children:[e.jsx("img",{ref:V,src:z,alt:x,loading:t,style:X,onLoad:de,onError:te,onMouseEnter:G=>{s==="hover-lift"&&Object.assign(G.currentTarget.style,{transform:"translateY(-8px) scale(1.05)",boxShadow:"0 12px 30px rgba(0, 0, 0, 0.3)",borderColor:"var(--accent-500)"})},onMouseLeave:G=>{s==="hover-lift"&&Object.assign(G.currentTarget.style,{transform:"translateY(0px) scale(1)",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.1)",borderColor:"var(--border-color)"})},...y}),m&&e.jsx("div",{style:$,children:e.jsx(R,{size:"sm",variant:"secondary"})})]})});O.displayName="Image";const f=p.forwardRef(({leftIcon:s,rightIcon:n,disabled:i=!1,destructive:l=!1,className:t="",children:m,...v},b)=>{const{theme:z}=ee(),x={display:"flex",alignItems:"center",gap:"var(--space-xs)",width:"100%",padding:"var(--space-xs) var(--space-sm)",border:"none",backgroundColor:"transparent",color:l?"var(--error-color)":"var(--text-primary)",fontSize:"var(--font-size-sm)",fontFamily:"var(--font-family)",textAlign:"left",cursor:i?"not-allowed":"pointer",opacity:i?.6:1,transition:"var(--transition-fast)",outline:"none"},h={backgroundColor:l?"var(--error-light)":"var(--bg-hover)"},E={backgroundColor:l?"var(--error-light)":"var(--bg-hover)",boxShadow:`inset 0 0 0 1px ${l?"var(--error-color)":"var(--focus-ring)"}`};return e.jsxs("button",{ref:b,disabled:i,style:x,className:t,onMouseEnter:y=>{i||Object.assign(y.currentTarget.style,{...x,...h})},onMouseLeave:y=>{i||Object.assign(y.currentTarget.style,x)},onFocus:y=>{i||Object.assign(y.currentTarget.style,{...x,...E})},onBlur:y=>{i||Object.assign(y.currentTarget.style,x)},...v,children:[s&&e.jsx("span",{style:{display:"flex",alignItems:"center",fontSize:"16px"},children:s}),e.jsx("span",{style:{flex:1},children:m}),n&&e.jsx("span",{style:{display:"flex",alignItems:"center",fontSize:"12px",opacity:.7},children:n})]})});f.displayName="DropdownItem";const we=({className:s=""})=>e.jsx("div",{className:s,style:{height:"1px",backgroundColor:"var(--border-light)",margin:"var(--space-xs) 0"}}),he=p.forwardRef(({className:s="",children:n,...i},l)=>e.jsx("div",{ref:l,className:s,style:{padding:"var(--space-xs) var(--space-sm)",fontSize:"var(--font-size-xs)",fontWeight:"var(--font-weight-semibold)",color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:"0.05em"},...i,children:n}));he.displayName="DropdownLabel";const fr=p.forwardRef(({className:s="",align:n="start",side:i="bottom",sideOffset:l=4,alignOffset:t=0,children:m,style:v,...b},z)=>{const{theme:x}=ee(),h={minWidth:"220px",backgroundColor:"var(--bg-surface)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",boxShadow:"var(--shadow-lg)",padding:"var(--space-xs)",zIndex:"var(--z-dropdown)",outline:"none",...v};return e.jsx("div",{ref:z,className:s,style:h,...b,children:m})});fr.displayName="DropdownContent";const _=p.forwardRef(({children:s,trigger:n,open:i,onOpenChange:l,disabled:t=!1,align:m="start",side:v="bottom",sideOffset:b=4,className:z=""},x)=>{const[h,E]=p.useState(!1),y=i!==void 0,V=y?i:h,A=p.useRef(null),H=p.useRef(null),D=p.useRef(null),W=g=>{t||(y?l?.(g):E(g))};p.useEffect(()=>{if(!V)return;const g=k=>{A.current&&!A.current.contains(k.target)&&W(!1)};return document.addEventListener("mousedown",g),()=>document.removeEventListener("mousedown",g)},[V]),p.useEffect(()=>{if(!V)return;const g=k=>{k.key==="Escape"&&W(!1)};return document.addEventListener("keydown",g),()=>document.removeEventListener("keydown",g)},[V]);const L=()=>{const g={position:"absolute",zIndex:"var(--z-dropdown)"};switch(v){case"top":g.bottom=`calc(100% + ${b}px)`;break;case"bottom":g.top=`calc(100% + ${b}px)`;break;case"left":g.right=`calc(100% + ${b}px)`;break;case"right":g.left=`calc(100% + ${b}px)`;break}if(v==="top"||v==="bottom")switch(m){case"start":g.left="0";break;case"center":g.left="50%",g.transform="translateX(-50%)";break;case"end":g.right="0";break}else switch(m){case"start":g.top="0";break;case"center":g.top="50%",g.transform="translateY(-50%)";break;case"end":g.bottom="0";break}return g},Q=g=>{g.preventDefault(),W(!V)},B=pe.cloneElement(n,{ref:H,onClick:Q,"aria-expanded":V,"aria-haspopup":"menu",disabled:t});return e.jsx("div",{ref:x,className:z,style:{position:"relative",display:"inline-block"},children:e.jsxs("div",{ref:A,children:[B,V&&e.jsx("div",{style:L(),children:e.jsx(fr,{ref:D,align:m,side:v,sideOffset:b,role:"menu",onKeyDown:g=>{if(g.key==="ArrowDown"||g.key==="ArrowUp"){g.preventDefault();const k=D.current?.querySelectorAll('[role="menuitem"]:not([disabled])');if(!k||k.length===0)return;const X=Array.from(k).indexOf(document.activeElement);let P;g.key==="ArrowDown"?P=X<k.length-1?X+1:0:P=X>0?X-1:k.length-1,k[P].focus()}},children:pe.Children.map(s,g=>pe.isValidElement(g)&&g.type===f?pe.cloneElement(g,{role:"menuitem",onClick:k=>{g.props.onClick?.(k),k.defaultPrevented||W(!1)}}):g)})})]})})});_.displayName="Dropdown";const is=s=>s?s.includes("youtube.com/watch")||s.includes("youtu.be/")||s.includes("youtube.com/embed/")?"youtube":s.includes("vimeo.com/")?"vimeo":(/\.(mp4|webm|ogg|mov|avi|mkv)(\?.*)?$/i.test(s),"html5"):"html5",os=(s,n)=>{switch(n){case"youtube":const i=s.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/);return i?i[1]:"";case"vimeo":const l=s.match(/vimeo\.com\/(\d+)/);return l?l[1]:"";default:return""}},ns=`
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;if(typeof document<"u"&&!document.querySelector("#video-quality-spinner-styles")){const s=document.createElement("style");s.id="video-quality-spinner-styles",s.textContent=ns,document.head.appendChild(s)}const I=p.forwardRef(({as:s,variant:n="default",shape:i="rounded",size:l="md",fit:t="cover",showSpinner:m=!0,showControls:v=!0,showMenu:b=!0,enableDownload:z=!1,enableFullscreen:x=!0,autoplayOnLoad:h=!1,muteAudioOnPlay:E=!1,enableLoop:y=!1,showPlaybackSpeed:V=!1,showVideoQuality:A=!1,videoQualities:H=[{label:"Auto",value:"auto"},{label:"1080p",value:"1080p"},{label:"720p",value:"720p"},{label:"480p",value:"480p"},{label:"360p",value:"360p"}],fallback:D,className:W="",src:L,onLoadStart:Q,onLoadedData:B,onError:g,...k},X)=>{const{theme:P}=ee(),$=p.useRef(null),[S,de]=p.useState(!0),[te,G]=p.useState(!1),[re,se]=p.useState(!1),[Be,xe]=p.useState(0),[ae,ge]=p.useState(0),[Se,qe]=p.useState(1),[ve,ue]=p.useState(E),[rr,sr]=p.useState(!1),[Ce,Xe]=p.useState(!1),[J,Ge]=p.useState(1),[ie,Ke]=p.useState(y),[ne,Me]=p.useState(H[0]?.value||"auto"),[Qe,ke]=p.useState(!1),[Te,le]=p.useState(""),ce=is(L||""),T=os(L||"",ce),Y=(s||(ce==="html5"?"player":"url"))==="url"&&ce!=="html5",M=X||$,Z=({size:a=24,color:u="currentColor"})=>e.jsx("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:u,children:e.jsx("path",{d:"M8 5v14l11-7z"})}),tr=({size:a=24,color:u="currentColor"})=>e.jsx("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:u,children:e.jsx("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"})}),Br=({size:a=16,color:u="currentColor",level:q="high"})=>q==="muted"?e.jsx("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:u,children:e.jsx("path",{d:"M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"})}):q==="low"?e.jsx("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:u,children:e.jsx("path",{d:"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"})}):e.jsx("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:u,children:e.jsx("path",{d:"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"})}),Sr=({size:a=16,color:u="currentColor"})=>e.jsx("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:u,children:e.jsx("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})}),Cr=({size:a=16,color:u="currentColor"})=>e.jsx("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:u,children:e.jsx("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"})}),kr=({size:a=16,color:u="currentColor"})=>e.jsx("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:u,children:e.jsx("path",{d:"M4 12c0 4.42 3.58 8 8 8s8-3.58 8-8h-2c0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L14 9h7V2l-2.35 2.35C17.15 2.85 14.74 2 12 2 6.48 2 2 6.48 2 12z"})}),Tr=({size:a=32,color:u="currentColor"})=>e.jsxs("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:u,strokeWidth:"2",children:[e.jsx("polygon",{points:"23 7 16 12 23 17 23 7"}),e.jsx("rect",{width:"15",height:"14",x:"1",y:"5",rx:"2",ry:"2"}),e.jsx("line",{x1:"8",x2:"8",y1:"21",y2:"3"})]}),Fr=({size:a=16,color:u="currentColor"})=>e.jsx("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:u,children:e.jsx("path",{d:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"})}),Ir=({size:a=16,color:u="currentColor"})=>e.jsx("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:u,children:e.jsx("path",{d:"M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"})}),Lr=({size:a=16,color:u="currentColor"})=>e.jsx("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:u,children:e.jsx("path",{d:"M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"})}),ar=({size:a=16,color:u="currentColor"})=>e.jsxs("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:u,children:[e.jsx("path",{d:"M20.38 8.57l-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44z"}),e.jsx("path",{d:"M10.59 15.41a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z"})]}),ir=({size:a=16,color:u="currentColor"})=>e.jsx("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:u,children:e.jsx("path",{d:"M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"})}),Rr=a=>{de(!0),G(!1),Q?.(a)},Ar=a=>{const u=a.currentTarget;de(!1),G(!1),ge(u.duration),B?.(a)},Dr=a=>{de(!1),G(!0),g?.(a)},Pr=a=>{xe(a.currentTarget.currentTime)},Er=()=>se(!0),Mr=()=>se(!1),or=()=>{const a=M.current;a&&(re?a.pause():a.play())},Wr=a=>{const u=M.current;if(!u||!ae)return;const q=a.currentTarget.getBoundingClientRect(),me=(a.clientX-q.left)/q.width*ae;u.currentTime=me,xe(me)},Vr=a=>{const u=M.current,q=parseFloat(a.target.value);u&&(u.volume=q,qe(q),ue(q===0))},Hr=()=>{const a=M.current;a&&(ve?(a.volume=Se,a.muted=!1,ue(!1)):(a.muted=!0,ue(!0)))},Ur=()=>{if(L&&z){const a=document.createElement("a");a.href=L,a.download="video.mp4",document.body.appendChild(a),a.click(),document.body.removeChild(a)}},Or=()=>{if(x)try{Ce?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen&&document.webkitExitFullscreen():M.current?.requestFullscreen?M.current.requestFullscreen():M.current?.webkitRequestFullscreen&&M.current.webkitRequestFullscreen()}catch(a){console.warn("Fullscreen not supported:",a)}},Nr=a=>{const u=M.current;u&&(u.playbackRate=a,Ge(a))},$r=()=>{const a=M.current;if(!a)return;const u=!ie;a.loop=u,Ke(u)},qr=()=>{const a=M.current;a&&(a.currentTime=0,xe(0),re||a.play())},Xr=a=>{const u=H.find(me=>me.value===a);if(!u)return;const q=M.current;if(!q)return;const hr=q.currentTime,xr=!q.paused;if(ke(!0),le(`Switching to ${u.label}...`),u.src&&u.src!==q.src){q.src=u.src,q.load();const me=()=>{q.currentTime=hr,xr&&q.play().catch(()=>{}),ke(!1),le(`Quality changed to ${u.label}`),setTimeout(()=>le(""),2e3),q.removeEventListener("loadeddata",me)};q.addEventListener("loadeddata",me)}else setTimeout(()=>{ke(!1),le(`Quality set to ${u.label}`),setTimeout(()=>le(""),2e3)},500);Me(a)},nr=a=>{const u=Math.floor(a/60),q=Math.floor(a%60);return`${u}:${q.toString().padStart(2,"0")}`},dr={xs:{width:"160px",height:"90px"},sm:{width:"240px",height:"135px"},md:{width:"320px",height:"180px"},lg:{width:"480px",height:"270px"},xl:{width:"640px",height:"360px"},full:{width:"100%",height:"auto"}},Ye={square:{borderRadius:"0"},rounded:{borderRadius:"var(--radius-lg)"},pill:{borderRadius:"var(--radius-full)"}},lr={default:{border:"1px solid var(--border-color)"},bordered:{border:"3px solid var(--accent-500)",padding:"2px"},shadow:{boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)",border:"1px solid var(--border-color)"},elevated:{boxShadow:"0 8px 25px rgba(0, 0, 0, 0.25)",transform:"translateY(-4px)",border:"1px solid var(--border-color)"},"hover-lift":{cursor:"pointer",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",border:"2px solid var(--border-color)",transform:"translateY(0px) scale(1)",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.1)"}},cr={...{display:"block",objectFit:t,transition:"var(--transition-base)",backgroundColor:"var(--bg-surface)",outline:"none",width:"100%",height:"100%",...Ye[i],...lr[n]}},mr={position:"relative",display:"inline-block",overflow:"visible",background:"transparent",border:"none",...dr[l]},Gr={position:"absolute",top:0,left:0,right:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(0, 0, 0, 0.7)",borderRadius:Ye[i].borderRadius,opacity:S?1:0,pointerEvents:S?"auto":"none",transition:"var(--transition-base)",zIndex:15},pr={...dr[l],...lr[n],...Ye[i],display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"var(--bg-surface)",border:"2px dashed var(--border-color)",color:"var(--text-secondary)",fontSize:"var(--font-size-sm)",textAlign:"center",padding:"var(--space-sm)"},Kr={position:"absolute",bottom:0,left:0,right:0,background:"linear-gradient(transparent, rgba(0, 0, 0, 0.8))",padding:"var(--space-sm)",opacity:1,transition:"opacity 0.3s ease",pointerEvents:"auto",borderRadius:"0",zIndex:10},Qr={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",background:"rgba(0, 0, 0, 0.7)",border:"none",borderRadius:"50%",width:"60px",height:"60px",color:"white",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"24px",opacity:!re&&!S?1:0,transition:"all 0.3s ease",pointerEvents:!re&&!S?"auto":"none",zIndex:5};if(p.useEffect(()=>{const a=M.current;if(!a)return;const u=()=>{ge(a.duration)};return a.addEventListener("loadedmetadata",u),()=>a.removeEventListener("loadedmetadata",u)},[]),p.useEffect(()=>{const a=()=>{Xe(!!document.fullscreenElement||!!document.webkitFullscreenElement)};return document.addEventListener("fullscreenchange",a),document.addEventListener("webkitfullscreenchange",a),()=>{document.removeEventListener("fullscreenchange",a),document.removeEventListener("webkitfullscreenchange",a)}},[]),p.useEffect(()=>{if(h&&M.current&&!te){const a=async()=>{try{const u=M.current;E&&(u.muted=!0,ue(!0)),await u.play(),se(!0)}catch(u){console.warn("Autoplay failed:",u)}};if(M.current.readyState>=3)a();else{const u=()=>{a(),M.current?.removeEventListener("canplay",u)};M.current.addEventListener("canplay",u)}}},[h,E,te]),p.useEffect(()=>{M.current&&(M.current.loop=ie)},[ie]),p.useEffect(()=>{M.current&&(M.current.playbackRate=J)},[J]),te&&D)return e.jsx("div",{style:pr,className:W,children:D});if(te)return e.jsxs("div",{style:pr,className:W,children:[e.jsx(Tr,{size:32,color:"var(--text-secondary)"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Failed to load video"})]});if(Y&&T){const a=()=>{switch(ce){case"youtube":return`https://www.youtube.com/embed/${T}?enablejsapi=1&origin=${window.location.origin}`;case"vimeo":return`https://player.vimeo.com/video/${T}`;default:return""}};return e.jsxs("div",{style:mr,className:W,children:[e.jsx("iframe",{src:a(),style:{...cr,border:"none"},allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Video Player"}),e.jsx("div",{style:{position:"absolute",top:"var(--space-sm)",left:"var(--space-sm)",backgroundColor:"rgba(0, 0, 0, 0.8)",color:"white",padding:"var(--space-xs) var(--space-sm)",borderRadius:"var(--radius-sm)",fontSize:"var(--font-size-xs)",fontWeight:"500",textTransform:"uppercase",zIndex:10},children:ce})]})}return e.jsxs("div",{style:mr,className:W,children:[e.jsx("video",{ref:M,src:L,style:cr,onLoadStart:Rr,onLoadedData:Ar,onError:Dr,onTimeUpdate:Pr,onPlay:Er,onPause:Mr,onMouseEnter:a=>{n==="hover-lift"&&Object.assign(a.currentTarget.parentElement.style,{transform:"translateY(-8px) scale(1.02)",boxShadow:"0 12px 30px rgba(0, 0, 0, 0.3)",borderColor:"var(--accent-500)"})},onMouseLeave:a=>{n==="hover-lift"&&Object.assign(a.currentTarget.parentElement.style,{transform:"translateY(0px) scale(1)",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.1)",borderColor:"var(--border-color)"})},...k}),e.jsx("button",{style:Qr,onClick:or,"aria-label":re?"Pause":"Play",children:re?e.jsx(tr,{size:24,color:"white"}):e.jsx(Z,{size:24,color:"white"})}),v&&e.jsx("div",{style:Kr,children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-sm)",marginBottom:"var(--space-xs)"},children:[e.jsx("button",{onClick:or,style:{background:"none",border:"none",color:"white",cursor:"pointer",fontSize:"18px",padding:"4px",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center"},"aria-label":re?"Pause":"Play",children:re?e.jsx(tr,{size:18,color:"white"}):e.jsx(Z,{size:18,color:"white"})}),e.jsx("div",{style:{flex:1,height:"4px",backgroundColor:"rgba(255, 255, 255, 0.3)",borderRadius:"2px",cursor:"pointer",position:"relative"},onClick:Wr,children:e.jsx("div",{style:{height:"100%",backgroundColor:"var(--accent-500)",borderRadius:"2px",width:`${ae?Be/ae*100:0}%`,transition:"width 0.1s ease"}})}),e.jsxs("div",{style:{color:"white",fontSize:"12px",fontFamily:"monospace",minWidth:"80px",textAlign:"center"},children:[nr(Be)," / ",nr(ae)]}),e.jsx("button",{onClick:Hr,style:{background:"none",border:"none",color:"white",cursor:"pointer",fontSize:"16px",padding:"4px",display:"flex",alignItems:"center",justifyContent:"center"},"aria-label":ve?"Unmute":"Mute",children:e.jsx(Br,{size:16,color:"white",level:ve?"muted":Se>.5?"high":"low"})}),e.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:ve?0:Se,onChange:Vr,style:{width:"60px",height:"4px",background:"rgba(255, 255, 255, 0.3)",outline:"none",borderRadius:"2px"}}),b&&e.jsxs(_,{trigger:e.jsx("button",{style:{background:"none",border:"none",color:"white",cursor:"pointer",fontSize:"16px",padding:"4px",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center"},"aria-label":"More options",children:e.jsx(Sr,{size:16,color:"white"})}),align:"end",side:"top",sideOffset:8,children:[x&&e.jsx(f,{leftIcon:Ce?e.jsx(Ir,{size:16}):e.jsx(Fr,{size:16}),onClick:Or,style:{color:"var(--text-primary)",fontWeight:"normal",display:"flex",alignItems:"center",gap:"var(--space-xs)",width:"100%",padding:"var(--space-xs) var(--space-sm)",border:"none",backgroundColor:"transparent",fontSize:"var(--font-size-sm)",fontFamily:"var(--font-family)",textAlign:"left",cursor:"pointer",opacity:1,transition:"var(--transition-fast)",outline:"none"},children:Ce?"Exit Fullscreen":"Fullscreen"}),y&&e.jsxs(f,{leftIcon:e.jsx(Lr,{size:16,color:ie?"var(--primary)":"currentColor"}),onClick:$r,style:{color:ie?"var(--primary)":"var(--text-primary)",fontWeight:ie?"500":"normal",display:"flex",alignItems:"center",gap:"var(--space-xs)",width:"100%",padding:"var(--space-xs) var(--space-sm)",border:"none",backgroundColor:"transparent",fontSize:"var(--font-size-sm)",fontFamily:"var(--font-family)",textAlign:"left",cursor:"pointer",opacity:1,transition:"var(--transition-fast)",outline:"none"},children:["Loop ",ie?"(On)":"(Off)"]}),V&&e.jsxs(_,{trigger:e.jsxs(f,{leftIcon:e.jsx(ar,{size:16}),rightIcon:"›",style:{color:"var(--text-primary)",fontWeight:"normal",display:"flex",alignItems:"center",gap:"var(--space-xs)",width:"100%",padding:"var(--space-xs) var(--space-sm)",border:"none",backgroundColor:"transparent",fontSize:"var(--font-size-sm)",fontFamily:"var(--font-family)",textAlign:"left",cursor:"pointer",opacity:1,transition:"var(--transition-fast)",outline:"none"},children:["Playback Speed (",J===1?"Normal":`${J}x`,")"]}),align:"start",side:"right",sideOffset:4,children:[e.jsx(he,{children:"Playback Speed"}),[.5,.75,1,1.25,1.5,2].map(a=>e.jsx(f,{leftIcon:e.jsx(ar,{size:16,color:J===a?"var(--primary)":"currentColor"}),rightIcon:J===a?"✓":void 0,onClick:()=>Nr(a),style:{color:J===a?"var(--primary)":"var(--text-primary)",fontWeight:J===a?"500":"normal",display:"flex",alignItems:"center",gap:"var(--space-xs)",width:"100%",padding:"var(--space-xs) var(--space-sm)",border:"none",backgroundColor:"transparent",fontSize:"var(--font-size-sm)",fontFamily:"var(--font-family)",textAlign:"left",cursor:"pointer",opacity:1,transition:"var(--transition-fast)",outline:"none"},children:a===1?"Normal":`${a}x`},a))]}),A&&H.length>0&&e.jsxs(_,{trigger:e.jsxs(f,{leftIcon:e.jsx(ir,{size:16}),rightIcon:"›",style:{color:"var(--text-primary)",fontWeight:"normal",display:"flex",alignItems:"center",gap:"var(--space-xs)",width:"100%",padding:"var(--space-xs) var(--space-sm)",border:"none",backgroundColor:"transparent",fontSize:"var(--font-size-sm)",fontFamily:"var(--font-family)",textAlign:"left",cursor:"pointer",opacity:1,transition:"var(--transition-fast)",outline:"none"},children:["Quality (",H.find(a=>a.value===ne)?.label||"Auto",")"]}),align:"start",side:"right",sideOffset:4,children:[e.jsx(he,{children:"Video Quality"}),H.map(a=>e.jsx(f,{leftIcon:e.jsx(ir,{size:16,color:ne===a.value?"var(--primary)":"currentColor"}),rightIcon:ne===a.value?"✓":void 0,onClick:()=>Xr(a.value),style:{color:ne===a.value?"var(--primary)":"var(--text-primary)",fontWeight:ne===a.value?"500":"normal",display:"flex",alignItems:"center",gap:"var(--space-xs)",width:"100%",padding:"var(--space-xs) var(--space-sm)",border:"none",backgroundColor:"transparent",fontSize:"var(--font-size-sm)",fontFamily:"var(--font-family)",textAlign:"left",cursor:"pointer",opacity:1,transition:"var(--transition-fast)",outline:"none"},children:a.label},a.value))]}),(z||x||y||V||A)&&e.jsx(we,{}),e.jsx(f,{leftIcon:e.jsx(kr,{size:16}),onClick:qr,style:{color:"var(--text-primary)",fontWeight:"normal",display:"flex",alignItems:"center",gap:"var(--space-xs)",width:"100%",padding:"var(--space-xs) var(--space-sm)",border:"none",backgroundColor:"transparent",fontSize:"var(--font-size-sm)",fontFamily:"var(--font-family)",textAlign:"left",cursor:"pointer",opacity:1,transition:"var(--transition-fast)",outline:"none"},children:"Restart"}),z&&e.jsx(f,{leftIcon:e.jsx(Cr,{size:16}),onClick:Ur,style:{color:"var(--text-primary)",fontWeight:"normal",display:"flex",alignItems:"center",gap:"var(--space-xs)",width:"100%",padding:"var(--space-xs) var(--space-sm)",border:"none",backgroundColor:"transparent",fontSize:"var(--font-size-sm)",fontFamily:"var(--font-family)",textAlign:"left",cursor:"pointer",opacity:1,transition:"var(--transition-fast)",outline:"none"},children:"Download"})]})]})}),(Te||A&&ne!=="auto")&&e.jsxs("div",{style:{position:"absolute",top:"var(--space-sm)",right:"var(--space-sm)",backgroundColor:"rgba(0, 0, 0, 0.8)",color:"white",padding:"var(--space-xs) var(--space-sm)",borderRadius:"var(--radius-sm)",fontSize:"var(--font-size-xs)",fontWeight:"500",zIndex:10,opacity:Te?1:.7,transition:"opacity 0.3s ease",display:"flex",alignItems:"center",gap:"var(--space-xs)"},children:[Qe&&e.jsx("div",{style:{width:"12px",height:"12px",border:"2px solid rgba(255, 255, 255, 0.3)",borderTop:"2px solid white",borderRadius:"50%",animation:"spin 1s linear infinite"}}),Te||`${ne.toUpperCase()}`]}),m&&e.jsx("div",{style:Gr,children:e.jsx(R,{size:"md",variant:"primary"})})]})});I.displayName="Video";const ur=({onThemeSelect:s})=>{const n=Object.keys(ze),i=t=>({light:"Clean, professional default theme with bright backgrounds",dark:"Modern dark theme for reduced eye strain",ocean:"Calming blues and cyans for data-focused applications",forest:"Natural greens for wellness and environmental apps",sunset:"Warm oranges and pinks for creative applications",lavender:"Soft purples for elegant, dreamy interfaces",cyberpunk:"Neon highlights on dark backgrounds for tech/gaming",autumn:"Cozy browns and golds for seasonal warmth"})[t]||"Beautiful theme",l=t=>{const m=ze[t];return{primary:m.colors.accent[500],background:m.colors.background.app,surface:m.colors.background.surface,text:m.colors.text.primary}};return e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"var(--space-2xl)"},children:[e.jsx("h1",{style:{fontSize:"var(--font-size-3xl)",fontWeight:"var(--font-weight-bold)",margin:"0 0 var(--space-md) 0",color:"var(--text-primary)"},children:"Theme Gallery"}),e.jsx("p",{style:{fontSize:"var(--font-size-lg)",color:"var(--text-secondary)",margin:"0 0 var(--space-lg) 0",lineHeight:1.6},children:"FlowLabKit comes with 8 beautiful built-in themes. Each theme includes both light and dark variants with carefully crafted color palettes for different use cases."})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"var(--space-lg)",marginBottom:"var(--space-2xl)"},children:n.map(t=>{const m=l(t);return e.jsxs("div",{style:{backgroundColor:"var(--bg-surface)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-lg)",padding:"var(--space-lg)",cursor:"pointer",transition:"var(--transition-base)",boxShadow:"var(--shadow-sm)"},onClick:()=>s(t),onMouseEnter:v=>{v.currentTarget.style.transform="translateY(-2px)",v.currentTarget.style.boxShadow="var(--shadow-md)"},onMouseLeave:v=>{v.currentTarget.style.transform="translateY(0)",v.currentTarget.style.boxShadow="var(--shadow-sm)"},children:[e.jsxs("div",{style:{height:"120px",borderRadius:"var(--radius-md)",marginBottom:"var(--space-md)",background:`linear-gradient(135deg, ${m.background} 0%, ${m.surface} 50%, ${m.primary}20 100%)`,border:`2px solid ${m.primary}20`,position:"relative",overflow:"hidden"},children:[e.jsxs("div",{style:{position:"absolute",top:"var(--space-sm)",right:"var(--space-sm)",display:"flex",gap:"4px"},children:[e.jsx("div",{style:{width:"16px",height:"16px",borderRadius:"50%",backgroundColor:m.primary,border:"2px solid white",boxShadow:"0 1px 3px rgba(0,0,0,0.3)"}}),e.jsx("div",{style:{width:"16px",height:"16px",borderRadius:"50%",backgroundColor:m.surface,border:"2px solid white",boxShadow:"0 1px 3px rgba(0,0,0,0.3)"}})]}),e.jsxs("div",{style:{position:"absolute",bottom:"var(--space-sm)",left:"var(--space-sm)",right:"var(--space-sm)",display:"flex",flexDirection:"column",gap:"4px"},children:[e.jsx("div",{style:{height:"8px",backgroundColor:m.primary,borderRadius:"4px",width:"60%"}}),e.jsx("div",{style:{height:"6px",backgroundColor:`${m.text}60`,borderRadius:"3px",width:"80%"}}),e.jsx("div",{style:{height:"6px",backgroundColor:`${m.text}40`,borderRadius:"3px",width:"40%"}})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",margin:"0 0 var(--space-xs) 0",color:"var(--text-primary)",textTransform:"capitalize"},children:t}),e.jsx("p",{style:{fontSize:"var(--font-size-sm)",color:"var(--text-secondary)",margin:"0 0 var(--space-md) 0",lineHeight:1.4},children:i(t)}),e.jsxs("button",{style:{backgroundColor:m.primary,color:"white",border:"none",borderRadius:"var(--radius-sm)",padding:"var(--space-sm) var(--space-md)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",cursor:"pointer",transition:"var(--transition-fast)"},children:["Try ",t]})]})]},t)})}),e.jsxs("div",{style:{backgroundColor:"var(--bg-surface)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-lg)",padding:"var(--space-xl)"},children:[e.jsx("h2",{style:{fontSize:"var(--font-size-xl)",fontWeight:"var(--font-weight-semibold)",margin:"0 0 var(--space-lg) 0",color:"var(--text-primary)"},children:"Quick Start"}),e.jsx("pre",{style:{backgroundColor:"var(--bg-elevated)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"var(--space-lg)",fontSize:"var(--font-size-sm)",color:"var(--text-primary)",overflow:"auto",fontFamily:'Monaco, Consolas, "Liberation Mono", "Courier New", monospace'},children:`import { ThemeProvider } from '@flowlabkit/ui';
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
}`})]})]})},ds=()=>{const[s,n]=p.useState(""),i=({children:m})=>e.jsx("pre",{style:{backgroundColor:"var(--bg-elevated)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",padding:"var(--space-sm)",fontSize:"12px",fontFamily:"Monaco, 'Cascadia Code', 'Roboto Mono', monospace",color:"var(--text-secondary)",overflow:"auto",margin:0},children:m}),l=({title:m,children:v})=>e.jsxs("div",{style:{marginBottom:"var(--space-lg)"},children:[e.jsx(r,{as:"h5",size:"sm",weight:"semibold",style:{marginBottom:"var(--space-sm)",color:"var(--text-secondary)"},children:m}),e.jsx("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-surface)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-color)",display:"flex",flexWrap:"wrap",gap:"var(--space-md)",alignItems:"center"},children:v})]}),t=({title:m,description:v,demos:b,code:z})=>e.jsxs(o,{style:{marginBottom:"var(--space-xl)"},children:[e.jsxs(F,{children:[e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:m}),e.jsx(r,{as:"p",size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:v})]}),e.jsxs(d,{children:[e.jsxs("div",{style:{marginBottom:"var(--space-lg)"},children:[e.jsx(r,{as:"h4",size:"md",weight:"medium",style:{marginBottom:"var(--space-md)"},children:"Examples"}),Object.entries(b).map(([x,h])=>e.jsx(l,{title:x,children:h},x))]}),e.jsxs("div",{children:[e.jsx(r,{as:"h4",size:"md",weight:"medium",style:{marginBottom:"var(--space-md)"},children:"Code Example"}),e.jsx(i,{children:z})]})]})]});return e.jsxs("div",{style:{padding:"var(--space-xl)"},children:[e.jsxs("div",{style:{marginBottom:"var(--space-2xl)",textAlign:"center"},children:[e.jsx(r,{as:"h1",size:"3xl",weight:"bold",style:{marginBottom:"var(--space-md)"},children:"Component Library"}),e.jsx(r,{as:"p",size:"lg",color:"secondary",style:{maxWidth:"600px",margin:"0 auto"},children:"A comprehensive collection of React components with theme integration, accessibility, and TypeScript support."})]}),e.jsx(t,{title:"Button",description:"Interactive buttons with multiple variants, sizes, and states",demos:{Variants:e.jsxs(e.Fragment,{children:[e.jsx(w,{children:"Default"}),e.jsx(w,{variant:"primary",children:"Primary"}),e.jsx(w,{variant:"secondary",children:"Secondary"}),e.jsx(w,{variant:"outline",children:"Outline"}),e.jsx(w,{variant:"ghost",children:"Ghost"}),e.jsx(w,{variant:"danger",children:"Danger"})]}),Sizes:e.jsxs(e.Fragment,{children:[e.jsx(w,{variant:"primary",size:"sm",children:"Small"}),e.jsx(w,{variant:"primary",size:"md",children:"Medium"}),e.jsx(w,{variant:"primary",size:"lg",children:"Large"})]}),States:e.jsxs(e.Fragment,{children:[e.jsx(w,{variant:"primary",children:"Normal"}),e.jsx(w,{variant:"primary",disabled:!0,children:"Disabled"}),e.jsx(w,{variant:"primary",loading:!0,children:"Loading"})]})},code:`<Button variant="primary">Primary</Button>
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
<Button variant="primary" loading>Loading</Button>`}),e.jsx(t,{title:"Input",description:"Form inputs with validation states and various configurations",demos:{Types:e.jsxs(e.Fragment,{children:[e.jsx(N,{placeholder:"Text input"}),e.jsx(N,{type:"email",placeholder:"Email input"}),e.jsx(N,{type:"password",placeholder:"Password input"}),e.jsx(N,{type:"number",placeholder:"Number input"})]}),Sizes:e.jsxs(e.Fragment,{children:[e.jsx(N,{placeholder:"Small input",size:"sm"}),e.jsx(N,{placeholder:"Medium input",size:"md"}),e.jsx(N,{placeholder:"Large input",size:"lg"})]}),States:e.jsxs(e.Fragment,{children:[e.jsx(N,{placeholder:"Normal input"}),e.jsx(N,{placeholder:"Disabled input",disabled:!0}),e.jsx(N,{placeholder:"Error input",isInvalid:!0})]})},code:`<Input 
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
<Input placeholder="Error" isInvalid />`}),e.jsx(t,{title:"Badge",description:"Small status indicators and labels with various styles",demos:{Variants:e.jsxs(e.Fragment,{children:[e.jsx(c,{variant:"default",children:"Default"}),e.jsx(c,{variant:"primary",children:"Primary"}),e.jsx(c,{variant:"secondary",children:"Secondary"}),e.jsx(c,{variant:"success",children:"Success"}),e.jsx(c,{variant:"warning",children:"Warning"}),e.jsx(c,{variant:"error",children:"Error"}),e.jsx(c,{variant:"info",children:"Info"})]}),Sizes:e.jsxs(e.Fragment,{children:[e.jsx(c,{variant:"primary",size:"sm",children:"Small"}),e.jsx(c,{variant:"primary",size:"md",children:"Medium"}),e.jsx(c,{variant:"primary",size:"lg",children:"Large"})]}),Shapes:e.jsxs(e.Fragment,{children:[e.jsx(c,{variant:"primary",children:"Default"}),e.jsx(c,{variant:"primary",shape:"pill",children:"Pill"}),e.jsx(c,{variant:"primary",shape:"square",children:"Square"}),e.jsx(c,{variant:"primary",dot:!0,children:"Dot"})]})},code:`<Badge variant="default">Default</Badge>
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
<Badge variant="primary" dot>Dot</Badge>`}),e.jsx(t,{title:"Text",description:"Typography component with semantic elements and styling options",demos:{Sizes:e.jsxs(e.Fragment,{children:[e.jsx(r,{as:"h1",size:"3xl",weight:"bold",children:"3XL Heading"}),e.jsx(r,{as:"h2",size:"2xl",weight:"semibold",children:"2XL Heading"}),e.jsx(r,{as:"h3",size:"xl",weight:"medium",children:"XL Heading"}),e.jsx(r,{as:"p",size:"lg",children:"Large Text"}),e.jsx(r,{as:"p",size:"md",children:"Medium Text"}),e.jsx(r,{as:"span",size:"sm",children:"Small Text"}),e.jsx(r,{as:"span",size:"xs",children:"XS Text"})]}),Variants:e.jsxs(e.Fragment,{children:[e.jsx(r,{color:"primary",children:"Primary Text"}),e.jsx(r,{color:"secondary",children:"Secondary Text"}),e.jsx(r,{color:"tertiary",children:"Tertiary Text"}),e.jsx(r,{color:"success",children:"Success Text"}),e.jsx(r,{color:"warning",children:"Warning Text"}),e.jsx(r,{color:"error",children:"Error Text"})]}),Weights:e.jsxs(e.Fragment,{children:[e.jsx(r,{weight:"normal",children:"Normal Weight"}),e.jsx(r,{weight:"medium",children:"Medium Weight"}),e.jsx(r,{weight:"semibold",children:"Semibold Weight"}),e.jsx(r,{weight:"bold",children:"Bold Weight"})]})},code:`<Text as="h1" size="3xl" weight="bold">Heading 1</Text>
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
<Text weight="bold">Bold weight</Text>`}),e.jsx(t,{title:"Link",description:"Styled links with hover effects and external link indicators",demos:{Variants:e.jsxs(e.Fragment,{children:[e.jsx(U,{href:"#",variant:"primary",children:"Primary Link"}),e.jsx(U,{href:"#",variant:"secondary",children:"Secondary Link"}),e.jsx(U,{href:"#",variant:"accent",children:"Accent Link"}),e.jsx(U,{href:"#",variant:"muted",children:"Muted Link"})]}),Sizes:e.jsxs(e.Fragment,{children:[e.jsx(U,{href:"#",variant:"primary",size:"sm",children:"Small Link"}),e.jsx(U,{href:"#",variant:"primary",size:"md",children:"Medium Link"}),e.jsx(U,{href:"#",variant:"primary",size:"lg",children:"Large Link"})]}),States:e.jsxs(e.Fragment,{children:[e.jsx(U,{href:"#",variant:"primary",children:"Normal Link"}),e.jsx(U,{href:"#",variant:"primary",underline:"always",children:"Always Underlined"}),e.jsx(U,{href:"#",variant:"primary",underline:"never",children:"Never Underlined"}),e.jsx(U,{href:"#",variant:"primary",external:!0,children:"External Link"}),e.jsx(U,{href:"#",variant:"primary",disabled:!0,children:"Disabled Link"})]})},code:`<Link href="#" variant="primary">Primary Link</Link>
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
<Link href="#" size="lg">Large</Link>`}),e.jsx(t,{title:"Spinner",description:"Loading spinners for indicating async operations and loading states",demos:{Variants:e.jsxs(e.Fragment,{children:[e.jsx(R,{variant:"primary"}),e.jsx(R,{variant:"accent"}),e.jsx(R,{variant:"success"}),e.jsx(R,{variant:"warning"}),e.jsx(R,{variant:"error"}),e.jsx(R,{variant:"secondary"})]}),Sizes:e.jsxs(e.Fragment,{children:[e.jsx(R,{variant:"accent",size:"xs"}),e.jsx(R,{variant:"accent",size:"sm"}),e.jsx(R,{variant:"accent",size:"md"}),e.jsx(R,{variant:"accent",size:"lg"}),e.jsx(R,{variant:"accent",size:"xl"})]}),Types:e.jsxs(e.Fragment,{children:[e.jsx(R,{variant:"accent",thickness:"thin"}),e.jsx(R,{variant:"accent",thickness:"medium"}),e.jsx(R,{variant:"accent",thickness:"thick"}),e.jsx(R,{variant:"accent",speed:"slow"}),e.jsx(R,{variant:"accent",speed:"normal"}),e.jsx(R,{variant:"accent",speed:"fast"})]})},code:`<Spinner variant="primary" />
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
<Spinner speed="fast" />`}),e.jsx(t,{title:"LoadingIndicator",description:"Advanced loading animations with text labels and multiple animation types",demos:{Types:e.jsxs(e.Fragment,{children:[e.jsx(C,{type:"dots",text:"Loading",variant:"accent"}),e.jsx(C,{type:"pulse",text:"Processing",variant:"primary"}),e.jsx(C,{type:"wave",text:"Uploading",variant:"success"}),e.jsx(C,{type:"bars",text:"Analyzing",variant:"warning"}),e.jsx(C,{type:"bounce",text:"Syncing",variant:"error"})]}),Variants:e.jsxs(e.Fragment,{children:[e.jsx(C,{type:"dots",text:"Primary",variant:"primary"}),e.jsx(C,{type:"dots",text:"Accent",variant:"accent"}),e.jsx(C,{type:"dots",text:"Success",variant:"success"}),e.jsx(C,{type:"dots",text:"Warning",variant:"warning"}),e.jsx(C,{type:"dots",text:"Error",variant:"error"})]}),Sizes:e.jsxs(e.Fragment,{children:[e.jsx(C,{type:"wave",size:"sm",variant:"success"}),e.jsx(C,{type:"wave",size:"md",variant:"success"}),e.jsx(C,{type:"wave",size:"lg",variant:"success"})]}),States:e.jsxs(e.Fragment,{children:[e.jsx(C,{type:"dots",text:"Above",textPosition:"top",variant:"accent"}),e.jsx(C,{type:"pulse",text:"Below",textPosition:"bottom",variant:"primary"}),e.jsx(C,{type:"bounce",text:"Left",textPosition:"left",variant:"warning"}),e.jsx(C,{type:"bars",text:"Right",textPosition:"right",variant:"error"})]})},code:`<LoadingIndicator type="dots" text="Loading" variant="accent" />
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
<LoadingIndicator size="lg" speed="fast" />`}),e.jsx(t,{title:"Image",description:"Enhanced images with loading states, error handling, and visual effects",demos:{Variants:e.jsxs(e.Fragment,{children:[e.jsx(O,{src:"https://picsum.photos/seed/default/80/80",alt:"Default",variant:"default",size:"sm"}),e.jsx(O,{src:"https://picsum.photos/seed/bordered/80/80",alt:"Bordered",variant:"bordered",size:"sm"}),e.jsx(O,{src:"https://picsum.photos/seed/shadow/80/80",alt:"Shadow",variant:"shadow",size:"sm"}),e.jsx(O,{src:"https://picsum.photos/seed/elevated/80/80",alt:"Elevated",variant:"elevated",size:"sm"}),e.jsx(O,{src:"https://picsum.photos/seed/hover/80/80",alt:"Hover",variant:"hover-lift",size:"sm"})]}),Shapes:e.jsxs(e.Fragment,{children:[e.jsx(O,{src:"https://picsum.photos/seed/square/80/80",alt:"Square",variant:"shadow",shape:"square",size:"sm"}),e.jsx(O,{src:"https://picsum.photos/seed/rounded/80/80",alt:"Rounded",variant:"shadow",shape:"rounded",size:"sm"}),e.jsx(O,{src:"https://picsum.photos/seed/circle/80/80",alt:"Circle",variant:"shadow",shape:"circle",size:"sm"}),e.jsx(O,{src:"https://picsum.photos/seed/pill/96/48",alt:"Pill",variant:"shadow",shape:"pill",style:{width:"96px",height:"48px"}})]}),Sizes:e.jsxs(e.Fragment,{children:[e.jsx(O,{src:"https://picsum.photos/seed/xs/40/40",alt:"XS",variant:"shadow",size:"xs"}),e.jsx(O,{src:"https://picsum.photos/seed/sm/60/60",alt:"Small",variant:"shadow",size:"sm"}),e.jsx(O,{src:"https://picsum.photos/seed/md/80/80",alt:"Medium",variant:"shadow",size:"md"}),e.jsx(O,{src:"https://picsum.photos/seed/lg/100/100",alt:"Large",variant:"shadow",size:"lg"})]})},code:`<Image 
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
<Image loading="lazy" />`}),e.jsx(t,{title:"Video",description:"Video player with transparent container, themed SVG icons, and shape applied to video element only",demos:{Variants:e.jsxs(e.Fragment,{children:[e.jsx(I,{src:"https://www.w3schools.com/html/mov_bbb.mp4",variant:"default",size:"xs",poster:"https://via.placeholder.com/160x90/4F46E5/FFFFFF?text=Default"}),e.jsx(I,{src:"https://www.w3schools.com/html/mov_bbb.mp4",variant:"bordered",size:"xs",poster:"https://via.placeholder.com/160x90/4F46E5/FFFFFF?text=Bordered"}),e.jsx(I,{src:"https://www.w3schools.com/html/mov_bbb.mp4",variant:"shadow",size:"xs",poster:"https://via.placeholder.com/160x90/4F46E5/FFFFFF?text=Shadow"}),e.jsx(I,{src:"https://www.w3schools.com/html/mov_bbb.mp4",variant:"elevated",size:"xs",poster:"https://via.placeholder.com/160x90/4F46E5/FFFFFF?text=Elevated"})]}),Shapes:e.jsxs(e.Fragment,{children:[e.jsx(I,{src:"https://www.w3schools.com/html/mov_bbb.mp4",variant:"shadow",shape:"square",size:"xs",poster:"https://via.placeholder.com/160x90/4F46E5/FFFFFF?text=Square"}),e.jsx(I,{src:"https://www.w3schools.com/html/mov_bbb.mp4",variant:"shadow",shape:"rounded",size:"xs",poster:"https://via.placeholder.com/160x90/4F46E5/FFFFFF?text=Rounded"}),e.jsx(I,{src:"https://www.w3schools.com/html/mov_bbb.mp4",variant:"shadow",shape:"pill",size:"xs",poster:"https://via.placeholder.com/160x90/4F46E5/FFFFFF?text=Pill"})]}),Sizes:e.jsxs(e.Fragment,{children:[e.jsx(I,{src:"https://www.w3schools.com/html/mov_bbb.mp4",variant:"shadow",size:"xs",poster:"https://via.placeholder.com/160x90/4F46E5/FFFFFF?text=XS"}),e.jsx(I,{src:"https://www.w3schools.com/html/mov_bbb.mp4",variant:"shadow",size:"sm",poster:"https://via.placeholder.com/240x135/4F46E5/FFFFFF?text=SM"}),e.jsx(I,{src:"https://www.w3schools.com/html/mov_bbb.mp4",variant:"shadow",size:"md",poster:"https://via.placeholder.com/320x180/4F46E5/FFFFFF?text=MD"})]}),Features:e.jsxs(e.Fragment,{children:[e.jsx(I,{src:"https://www.w3schools.com/html/mov_bbb.mp4",size:"xs",showControls:!0,showMenu:!0,enableDownload:!0,poster:"https://via.placeholder.com/160x90/10B981/FFFFFF?text=Full+Features"}),e.jsx(I,{src:"https://www.w3schools.com/html/mov_bbb.mp4",size:"xs",showControls:!1,poster:"https://via.placeholder.com/160x90/F59E0B/FFFFFF?text=No+Controls"}),e.jsx(I,{src:"invalid-video.mp4",size:"xs",fallback:e.jsx("div",{style:{textAlign:"center",color:"var(--accent-500)"},children:e.jsx(r,{size:"xs",children:"Custom Error"})})})]})},code:`<Video 
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
<Video autoPlay muted loop />`}),e.jsx(t,{title:"Card",description:"Container component with header, body, and footer sections",demos:{Variants:e.jsxs(e.Fragment,{children:[e.jsxs(o,{style:{width:"200px"},children:[e.jsxs(F,{children:[e.jsx(r,{as:"h3",size:"md",weight:"semibold",children:"Full Card"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",children:"With all sections"})]}),e.jsx(d,{children:e.jsx(r,{as:"p",size:"sm",children:"This card has header, body, and footer sections."})}),e.jsx($e,{children:e.jsx(w,{variant:"primary",size:"sm",children:"Action"})})]}),e.jsx(o,{style:{width:"200px"},children:e.jsx(d,{children:e.jsx(r,{as:"p",size:"sm",children:"Simple card with body only."})})})]}),States:e.jsxs(e.Fragment,{children:[e.jsxs(o,{style:{width:"180px"},children:[e.jsx(F,{children:e.jsx(r,{as:"h3",size:"sm",weight:"semibold",children:"Normal Card"})}),e.jsx(d,{children:e.jsx(r,{as:"p",size:"xs",children:"Standard appearance"})})]}),e.jsxs(o,{style:{width:"180px",opacity:.6},children:[e.jsx(F,{children:e.jsx(r,{as:"h3",size:"sm",weight:"semibold",children:"Disabled Card"})}),e.jsx(d,{children:e.jsx(r,{as:"p",size:"xs",children:"Disabled appearance"})})]})]})},code:`<Card>
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
</Card>`})]})},ls=()=>e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"var(--space-2xl)"},children:[e.jsx("h1",{style:{fontSize:"var(--font-size-3xl)",fontWeight:"var(--font-weight-bold)",margin:"0 0 var(--space-md) 0",color:"var(--text-primary)"},children:"Installation"}),e.jsx("p",{style:{fontSize:"var(--font-size-lg)",color:"var(--text-secondary)",margin:"0 0 var(--space-lg) 0",lineHeight:1.6},children:"Get started with FlowLabKit theme system in your React application."})]}),e.jsxs("section",{style:{marginBottom:"var(--space-2xl)"},children:[e.jsx("h2",{style:{fontSize:"var(--font-size-xl)",fontWeight:"var(--font-weight-semibold)",margin:"0 0 var(--space-lg) 0",color:"var(--text-primary)"},children:"Quick Install"}),e.jsxs("div",{style:{backgroundColor:"var(--bg-surface)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-lg)",padding:"var(--space-xl)",marginBottom:"var(--space-lg)"},children:[e.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-medium)",margin:"0 0 var(--space-md) 0",color:"var(--text-primary)"},children:"1. Install the package"}),e.jsx("pre",{style:{backgroundColor:"var(--bg-elevated)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"var(--space-lg)",fontSize:"var(--font-size-sm)",color:"var(--text-primary)",overflow:"auto",fontFamily:'Monaco, Consolas, "Liberation Mono", "Courier New", monospace',margin:"0 0 var(--space-lg) 0"},children:"npm install @flowlabkit/ui"}),e.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-medium)",margin:"0 0 var(--space-md) 0",color:"var(--text-primary)"},children:"2. Basic setup"}),e.jsx("pre",{style:{backgroundColor:"var(--bg-elevated)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"var(--space-lg)",fontSize:"var(--font-size-sm)",color:"var(--text-primary)",overflow:"auto",fontFamily:'Monaco, Consolas, "Liberation Mono", "Courier New", monospace',margin:"0 0 var(--space-lg) 0"},children:`import React from 'react';
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
}`})})]}),e.jsxs("section",{children:[e.jsx("h2",{style:{fontSize:"var(--font-size-xl)",fontWeight:"var(--font-weight-semibold)",margin:"0 0 var(--space-lg) 0",color:"var(--text-primary)"},children:"Requirements"}),e.jsx("div",{style:{backgroundColor:"var(--bg-surface)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-lg)",padding:"var(--space-xl)"},children:e.jsxs("ul",{style:{color:"var(--text-primary)",fontSize:"var(--font-size-base)",lineHeight:1.6,margin:0,paddingLeft:"var(--space-lg)"},children:[e.jsxs("li",{style:{marginBottom:"var(--space-sm)"},children:[e.jsx("strong",{children:"React 18.0+"})," - Hooks support required"]}),e.jsxs("li",{style:{marginBottom:"var(--space-sm)"},children:[e.jsx("strong",{children:"TypeScript 4.0+"})," - Recommended for full type safety"]}),e.jsxs("li",{style:{marginBottom:"var(--space-sm)"},children:[e.jsx("strong",{children:"Modern Browser"})," - CSS Custom Properties support"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Node.js 16+"})," - For development and build processes"]})]})})]})]}),ye=({children:s,language:n="tsx"})=>e.jsx("pre",{style:{backgroundColor:"var(--bg-elevated)",color:"var(--text-primary)",padding:"var(--space-lg)",borderRadius:"var(--radius-md)",border:"1px solid var(--border-color)",overflow:"auto",fontSize:"var(--font-size-sm)",fontFamily:"Consolas, Monaco, 'Courier New', monospace",margin:"var(--space-md) 0",lineHeight:"1.5"},children:e.jsx("code",{children:s})}),_e=({title:s,children:n})=>e.jsxs("div",{style:{marginBottom:"var(--space-lg)"},children:[e.jsx(r,{as:"h4",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:s}),e.jsx("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-surface)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-color)",display:"flex",flexWrap:"wrap",gap:"var(--space-md)",alignItems:"center"},children:n})]}),cs=()=>{const[s,n]=p.useState(!1),i=()=>{n(!0),setTimeout(()=>n(!1),2e3)};return e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"var(--space-xl)"},children:[e.jsx(r,{as:"h1",size:"3xl",weight:"bold",style:{marginBottom:"var(--space-sm)"},children:"Button"}),e.jsx(r,{as:"p",size:"lg",color:"secondary",children:"Interactive button component for user actions with multiple variants, sizes, and states"})]}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Overview"}),e.jsx(r,{as:"p",size:"md",style:{marginBottom:"var(--space-lg)",lineHeight:"1.6"},children:"The Button component provides a comprehensive interface for user interactions with support for different visual styles, sizes, loading states, and accessibility features."}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-md)",flexWrap:"wrap"},children:[e.jsx(c,{variant:"primary",children:"6 Variants"}),e.jsx(c,{variant:"success",children:"3 Sizes"}),e.jsx(c,{variant:"info",children:"Loading State"}),e.jsx(c,{variant:"secondary",children:"Fully Accessible"})]})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Examples"}),e.jsxs(_e,{title:"Variants",children:[e.jsx(w,{children:"Default"}),e.jsx(w,{variant:"primary",children:"Primary"}),e.jsx(w,{variant:"secondary",children:"Secondary"}),e.jsx(w,{variant:"outline",children:"Outline"}),e.jsx(w,{variant:"ghost",children:"Ghost"}),e.jsx(w,{variant:"danger",children:"Danger"})]}),e.jsxs(_e,{title:"Sizes",children:[e.jsx(w,{variant:"primary",size:"sm",children:"Small"}),e.jsx(w,{variant:"primary",size:"md",children:"Medium"}),e.jsx(w,{variant:"primary",size:"lg",children:"Large"})]}),e.jsxs(_e,{title:"States",children:[e.jsx(w,{variant:"primary",children:"Normal"}),e.jsx(w,{variant:"primary",disabled:!0,children:"Disabled"}),e.jsx(w,{variant:"primary",loading:s,onClick:i,children:s?"Loading...":"Click to Load"})]})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"API Reference"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Props"}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{backgroundColor:"var(--bg-surface)"},children:[e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Prop"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Type"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Default"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"variant"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'default'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Visual style variant of the button"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"size"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'sm' | 'md' | 'lg'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'md'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Size of the button affecting padding and font size"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"loading"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"false"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Shows loading spinner and disables interaction"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"disabled"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"false"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Disables the button and prevents interaction"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"type"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'button' | 'submit' | 'reset'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'button'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"HTML button type attribute"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"onClick"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"(event: MouseEvent) => void"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Click event handler"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Additional CSS class names for custom styling"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"style"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:"Inline styles for custom styling"})]})]})]})})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Usage Examples"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Basic Usage"}),e.jsx(ye,{children:`import { Button } from '@flowlabkit/ui';

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
</Button>`})]})})]})},Ve=({children:s,language:n="tsx"})=>e.jsx("pre",{style:{backgroundColor:"var(--bg-elevated)",color:"var(--text-primary)",padding:"var(--space-lg)",borderRadius:"var(--radius-md)",border:"1px solid var(--border-color)",overflow:"auto",fontSize:"var(--font-size-sm)",fontFamily:"Consolas, Monaco, 'Courier New', monospace",margin:"var(--space-md) 0",lineHeight:"1.5"},children:e.jsx("code",{children:s})}),Je=({title:s,children:n})=>e.jsxs("div",{style:{marginBottom:"var(--space-lg)"},children:[e.jsx(r,{as:"h4",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:s}),e.jsx("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-surface)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-color)",display:"flex",flexDirection:"column",gap:"var(--space-md)"},children:n})]}),ms=()=>{const[s,n]=p.useState(""),[i,l]=p.useState("");return e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"var(--space-xl)"},children:[e.jsx(r,{as:"h1",size:"3xl",weight:"bold",style:{marginBottom:"var(--space-sm)"},children:"Input"}),e.jsx(r,{as:"p",size:"lg",color:"secondary",children:"Form input component with validation states and various configurations"})]}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Overview"}),e.jsx(r,{as:"p",size:"md",style:{marginBottom:"var(--space-lg)",lineHeight:"1.6"},children:"The Input component provides a comprehensive form input solution with support for different input types, validation states, sizes, and accessibility features. Built with modern web standards and React best practices."}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-md)",flexWrap:"wrap"},children:[e.jsx(c,{variant:"primary",children:"Multiple Types"}),e.jsx(c,{variant:"success",children:"3 Sizes"}),e.jsx(c,{variant:"info",children:"Validation States"}),e.jsx(c,{variant:"secondary",children:"Fully Accessible"})]})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Examples"}),e.jsxs(Je,{title:"Input Types",children:[e.jsx(N,{placeholder:"Text input",value:s,onChange:t=>n(t.target.value)}),e.jsx(N,{type:"email",placeholder:"Email input",value:i,onChange:t=>l(t.target.value)}),e.jsx(N,{type:"password",placeholder:"Password input"}),e.jsx(N,{type:"number",placeholder:"Number input"}),e.jsx(N,{type:"search",placeholder:"Search input"}),e.jsx(N,{type:"url",placeholder:"URL input"})]}),e.jsxs(Je,{title:"Sizes",children:[e.jsx(N,{placeholder:"Small input",size:"sm"}),e.jsx(N,{placeholder:"Medium input",size:"md"}),e.jsx(N,{placeholder:"Large input",size:"lg"})]}),e.jsxs(Je,{title:"States",children:[e.jsx(N,{placeholder:"Normal input"}),e.jsx(N,{placeholder:"Disabled input",disabled:!0}),e.jsx(N,{placeholder:"Error input",isInvalid:!0}),e.jsx(N,{placeholder:"Readonly input",readOnly:!0,value:"Cannot edit this"}),e.jsx(N,{placeholder:"Required input",required:!0})]})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"API Reference"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Props"}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{backgroundColor:"var(--bg-surface)"},children:[e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Prop"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Type"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Default"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"type"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'text' | 'email' | 'password' | 'number' | 'search' | 'url' | 'tel'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'text'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"HTML input type attribute"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"size"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'sm' | 'md' | 'lg'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'md'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Size of the input affecting padding and font size"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"isInvalid"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"false"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Shows error state styling"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"disabled"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"false"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Disables the input and prevents interaction"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"readOnly"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"false"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Makes the input read-only"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"placeholder"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Placeholder text when input is empty"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"value"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Controlled input value"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"onChange"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"(event: ChangeEvent) => void"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Change event handler"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Additional CSS class names for custom styling"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"style"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:"Inline styles for custom styling"})]})]})]})})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Usage Examples"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Controlled Input"}),e.jsx(Ve,{children:`import { Input } from '@flowlabkit/ui';
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
</fieldset>`})]})})]})},Fe=({children:s,language:n="tsx"})=>e.jsx("pre",{style:{backgroundColor:"var(--bg-elevated)",color:"var(--text-primary)",padding:"var(--space-lg)",borderRadius:"var(--radius-md)",border:"1px solid var(--border-color)",overflow:"auto",fontSize:"var(--font-size-sm)",fontFamily:"Consolas, Monaco, 'Courier New', monospace",margin:"var(--space-md) 0",lineHeight:"1.5"},children:e.jsx("code",{children:s})}),He=({title:s,children:n})=>e.jsxs("div",{style:{marginBottom:"var(--space-lg)"},children:[e.jsx(r,{as:"h4",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:s}),e.jsx("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-surface)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-color)",display:"flex",flexWrap:"wrap",gap:"var(--space-sm)",alignItems:"center"},children:n})]}),ps=()=>e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"var(--space-xl)"},children:[e.jsx(r,{as:"h1",size:"3xl",weight:"bold",style:{marginBottom:"var(--space-sm)"},children:"Badge"}),e.jsx(r,{as:"p",size:"lg",color:"secondary",children:"Small status descriptors for labeling, categorizing, and displaying metadata"})]}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Overview"}),e.jsx(r,{as:"p",size:"md",style:{marginBottom:"var(--space-lg)",lineHeight:"1.6"},children:"Badges are small components used to display status, notifications, or metadata. They're perfect for showing counts, labels, categories, or any short piece of information that needs to stand out from the main content."}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-md)",flexWrap:"wrap"},children:[e.jsx(c,{variant:"primary",children:"7 Variants"}),e.jsx(c,{variant:"success",children:"3 Sizes"}),e.jsx(c,{variant:"info",children:"3 Shapes"}),e.jsx(c,{variant:"secondary",children:"Flexible Content"})]})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Examples"}),e.jsxs(He,{title:"Variants",children:[e.jsx(c,{variant:"default",children:"Default"}),e.jsx(c,{variant:"primary",children:"Primary"}),e.jsx(c,{variant:"secondary",children:"Secondary"}),e.jsx(c,{variant:"success",children:"Success"}),e.jsx(c,{variant:"warning",children:"Warning"}),e.jsx(c,{variant:"error",children:"Error"}),e.jsx(c,{variant:"info",children:"Info"})]}),e.jsxs(He,{title:"Sizes",children:[e.jsx(c,{size:"sm",children:"Small Badge"}),e.jsx(c,{size:"md",children:"Medium Badge"}),e.jsx(c,{size:"lg",children:"Large Badge"})]}),e.jsxs(He,{title:"Shapes",children:[e.jsx(c,{shape:"rounded",children:"Rounded"}),e.jsx(c,{shape:"square",children:"Square"}),e.jsx(c,{shape:"pill",children:"Pill Shape"}),e.jsx(c,{dot:!0,size:"md",variant:"primary"})]}),e.jsx(He,{title:"Real-world Usage",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-md)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-sm)"},children:[e.jsx(r,{children:"Messages"}),e.jsx(c,{variant:"primary",shape:"pill",size:"sm",children:"3"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-sm)"},children:[e.jsx(r,{children:"Status:"}),e.jsx(c,{variant:"success",size:"sm",children:"Active"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-sm)"},children:[e.jsx(r,{children:"Priority:"}),e.jsx(c,{variant:"error",size:"sm",children:"High"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-sm)"},children:[e.jsx(r,{children:"Version:"}),e.jsx(c,{variant:"info",shape:"pill",children:"v2.1.0"})]})]})})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"API Reference"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Props"}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{backgroundColor:"var(--bg-surface)"},children:[e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Prop"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Type"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Default"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"variant"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'default'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Visual style variant affecting color scheme"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"size"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'sm' | 'md' | 'lg'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'md'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Size of the badge affecting padding and font size"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"shape"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'rounded' | 'square' | 'pill'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'rounded'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Shape style of the badge corners"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"dot"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"false"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Renders as a circular dot without content"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"children"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Content to display inside the badge"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Additional CSS class names for custom styling"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"style"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:"Inline styles for custom styling"})]})]})]})})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Usage Examples"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Notification Badges"}),e.jsx(Fe,{children:`import { Badge, Text } from '@flowlabkit/ui';

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
</Badge>`})]})})]}),Ie=({children:s,language:n="tsx"})=>e.jsx("pre",{style:{backgroundColor:"var(--bg-elevated)",color:"var(--text-primary)",padding:"var(--space-lg)",borderRadius:"var(--radius-md)",border:"1px solid var(--border-color)",overflow:"auto",fontSize:"var(--font-size-sm)",fontFamily:"Consolas, Monaco, 'Courier New', monospace",margin:"var(--space-md) 0",lineHeight:"1.5"},children:e.jsx("code",{children:s})}),Le=({title:s,children:n})=>e.jsxs("div",{style:{marginBottom:"var(--space-lg)"},children:[e.jsx(r,{as:"h4",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:s}),e.jsx("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-surface)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-color)",display:"flex",flexDirection:"column",gap:"var(--space-sm)"},children:n})]}),hs=()=>e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"var(--space-xl)"},children:[e.jsx(r,{as:"h1",size:"3xl",weight:"bold",style:{marginBottom:"var(--space-sm)"},children:"Text"}),e.jsx(r,{as:"p",size:"lg",color:"secondary",children:"Versatile typography component for all text content with semantic HTML support"})]}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Overview"}),e.jsx(r,{as:"p",size:"md",style:{marginBottom:"var(--space-lg)",lineHeight:"1.6"},children:"The Text component is the foundation of all typography in your application. It provides semantic HTML rendering, consistent sizing, typography scales, and color variants while maintaining accessibility and design system consistency."}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-md)",flexWrap:"wrap"},children:[e.jsx(c,{variant:"primary",children:"Semantic Elements"}),e.jsx(c,{variant:"success",children:"7 Sizes"}),e.jsx(c,{variant:"info",children:"4 Weights"}),e.jsx(c,{variant:"secondary",children:"Color System"})]})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Examples"}),e.jsxs(Le,{title:"Semantic Elements",children:[e.jsx(r,{as:"h1",size:"2xl",weight:"bold",children:"Heading 1 (h1)"}),e.jsx(r,{as:"h2",size:"xl",weight:"semibold",children:"Heading 2 (h2)"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",children:"Heading 3 (h3)"}),e.jsx(r,{as:"h4",size:"md",weight:"medium",children:"Heading 4 (h4)"}),e.jsx(r,{as:"p",size:"md",children:"Paragraph text content"}),e.jsx(r,{as:"span",size:"sm",children:"Inline span element"}),e.jsx(r,{as:"div",size:"sm",color:"secondary",children:"Division element"})]}),e.jsxs(Le,{title:"Size Scale",children:[e.jsx(r,{size:"xs",children:"Extra Small (xs)"}),e.jsx(r,{size:"sm",children:"Small (sm)"}),e.jsx(r,{size:"md",children:"Medium (md) - Default"}),e.jsx(r,{size:"lg",children:"Large (lg)"}),e.jsx(r,{size:"xl",children:"Extra Large (xl)"}),e.jsx(r,{size:"2xl",children:"2X Large (2xl)"}),e.jsx(r,{size:"3xl",children:"3X Large (3xl)"})]}),e.jsxs(Le,{title:"Font Weights",children:[e.jsx(r,{weight:"normal",children:"Normal Weight"}),e.jsx(r,{weight:"medium",children:"Medium Weight"}),e.jsx(r,{weight:"semibold",children:"Semi Bold Weight"}),e.jsx(r,{weight:"bold",children:"Bold Weight"})]}),e.jsxs(Le,{title:"Color Variants",children:[e.jsx(r,{color:"primary",children:"Primary Color"}),e.jsx(r,{color:"secondary",children:"Secondary Color"}),e.jsx(r,{color:"tertiary",children:"Tertiary Color"}),e.jsx(r,{color:"muted",children:"Muted Color"}),e.jsx(r,{color:"accent",children:"Accent Color"}),e.jsx(r,{color:"error",children:"Error Color"}),e.jsx(r,{color:"success",children:"Success Color"}),e.jsx(r,{color:"warning",children:"Warning Color"}),e.jsx(r,{color:"info",children:"Info Color"})]}),e.jsx(Le,{title:"Real-world Usage",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-md)"},children:[e.jsx(r,{as:"h2",size:"xl",weight:"bold",children:"Article Title"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",children:"Published on March 15, 2024"}),e.jsx(r,{as:"p",size:"md",style:{lineHeight:"1.6"},children:"This is a sample paragraph that demonstrates how the Text component can be used for body content with proper line height and spacing."}),e.jsx(r,{as:"div",size:"lg",weight:"medium",color:"muted",style:{fontStyle:"italic",borderLeft:"4px solid var(--accent-200)",paddingLeft:"var(--space-md)"},children:'"Design is not just what it looks like and feels like. Design is how it works."'})]})})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"API Reference"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Props"}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{backgroundColor:"var(--bg-surface)"},children:[e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Prop"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Type"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Default"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"as"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'p'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"HTML element to render for semantic meaning"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"size"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'md'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Font size from the design system scale"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"weight"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'normal' | 'medium' | 'semibold' | 'bold'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'normal'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Font weight for emphasis and hierarchy"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"color"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'primary' | 'secondary' | 'tertiary' | 'muted' | 'accent' | 'success' | 'warning' | 'error' | 'info'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'primary'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Semantic color from the theme system"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"children"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Text content or nested elements"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Additional CSS class names for custom styling"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"style"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:"Inline styles for custom styling"})]})]})]})})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Usage Examples"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Typography Hierarchy"}),e.jsx(Ie,{children:`import { Text } from '@flowlabkit/ui';

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
</Text>`})]})})]}),Re=({children:s,language:n="tsx"})=>e.jsx("pre",{style:{backgroundColor:"var(--bg-elevated)",color:"var(--text-primary)",padding:"var(--space-lg)",borderRadius:"var(--radius-md)",border:"1px solid var(--border-color)",overflow:"auto",fontSize:"var(--font-size-sm)",fontFamily:"Consolas, Monaco, 'Courier New', monospace",margin:"var(--space-md) 0",lineHeight:"1.5"},children:e.jsx("code",{children:s})}),Ae=({title:s,children:n})=>e.jsxs("div",{style:{marginBottom:"var(--space-lg)"},children:[e.jsx(r,{as:"h4",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:s}),e.jsx("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-surface)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-color)",display:"flex",flexWrap:"wrap",gap:"var(--space-md)",alignItems:"center"},children:n})]}),xs=()=>e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"var(--space-xl)"},children:[e.jsx(r,{as:"h1",size:"3xl",weight:"bold",style:{marginBottom:"var(--space-sm)"},children:"Link"}),e.jsx(r,{as:"p",size:"lg",color:"secondary",children:"Navigation component for internal and external links with accessibility support"})]}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Overview"}),e.jsx(r,{as:"p",size:"md",style:{marginBottom:"var(--space-lg)",lineHeight:"1.6"},children:"The Link component provides consistent navigation styling and behavior for both internal and external links. It includes hover states, focus management, and accessibility features while maintaining design system consistency."}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-md)",flexWrap:"wrap"},children:[e.jsx(c,{variant:"primary",children:"Multiple Variants"}),e.jsx(c,{variant:"success",children:"3 Sizes"}),e.jsx(c,{variant:"info",children:"Hover States"}),e.jsx(c,{variant:"secondary",children:"Accessible"})]})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Examples"}),e.jsxs(Ae,{title:"Variants",children:[e.jsx(U,{href:"#",variant:"primary",children:"Primary Link"}),e.jsx(U,{href:"#",variant:"secondary",children:"Secondary Link"}),e.jsx(U,{href:"#",variant:"accent",children:"Accent Link"}),e.jsx(U,{href:"#",variant:"muted",children:"Muted Link"})]}),e.jsxs(Ae,{title:"Underline Styles",children:[e.jsx(U,{href:"#",underline:"always",children:"Always Underlined"}),e.jsx(U,{href:"#",underline:"hover",children:"Underline on Hover"}),e.jsx(U,{href:"#",underline:"never",children:"Never Underlined"})]}),e.jsxs(Ae,{title:"Sizes",children:[e.jsx(U,{href:"#",size:"sm",children:"Small Link"}),e.jsx(U,{href:"#",size:"md",children:"Medium Link"}),e.jsx(U,{href:"#",size:"lg",children:"Large Link"})]}),e.jsxs(Ae,{title:"States",children:[e.jsx(U,{href:"#",children:"Normal Link"}),e.jsx(U,{href:"#",disabled:!0,children:"Disabled Link"}),e.jsx(U,{href:"https://example.com",external:!0,children:"External Link ↗"})]}),e.jsx(Ae,{title:"Usage in Context",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-md)"},children:[e.jsxs(r,{as:"p",children:["Visit our ",e.jsx(U,{href:"#",variant:"primary",children:"documentation"})," to learn more about the components."]}),e.jsxs(r,{as:"p",children:["For support, contact us at ",e.jsx(U,{href:"#",variant:"accent",underline:"always",children:"support@example.com"}),"."]}),e.jsxs(r,{as:"p",children:["Check out our ",e.jsx(U,{href:"#",external:!0,variant:"secondary",children:"GitHub repository ↗"})," for the source code."]})]})})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"API Reference"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Props"}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{backgroundColor:"var(--bg-surface)"},children:[e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Prop"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Type"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Default"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"href"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"required"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"URL or path for the link destination"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"variant"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'primary' | 'secondary' | 'accent' | 'muted'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'primary'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Visual style variant affecting color and decoration"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"size"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'sm' | 'md' | 'lg'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'md'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Font size of the link text"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"underline"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'always' | 'hover' | 'never'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'hover'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Text decoration behavior for the link"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"disabled"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"false"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Disables the link and prevents navigation"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"external"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"false"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Opens link in new tab with security attributes"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"children"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Link text content or nested elements"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Additional CSS class names for custom styling"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"style"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:"Inline styles for custom styling"})]})]})]})})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Usage Examples"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Navigation Menu"}),e.jsx(Re,{children:`import { Link } from '@flowlabkit/ui';

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
</nav>`})]})})]}),De=({children:s,language:n="tsx"})=>e.jsx("pre",{style:{backgroundColor:"var(--bg-elevated)",color:"var(--text-primary)",padding:"var(--space-lg)",borderRadius:"var(--radius-md)",border:"1px solid var(--border-color)",overflow:"auto",fontSize:"var(--font-size-sm)",fontFamily:"Consolas, Monaco, 'Courier New', monospace",margin:"var(--space-md) 0",lineHeight:"1.5"},children:e.jsx("code",{children:s})}),Ue=({title:s,children:n})=>e.jsxs("div",{style:{marginBottom:"var(--space-lg)"},children:[e.jsx(r,{as:"h4",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:s}),e.jsx("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-surface)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-color)",display:"flex",flexWrap:"wrap",gap:"var(--space-md)",alignItems:"center"},children:n})]}),gs=()=>e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"var(--space-xl)"},children:[e.jsx(r,{as:"h1",size:"3xl",weight:"bold",style:{marginBottom:"var(--space-sm)"},children:"Spinner"}),e.jsx(r,{as:"p",size:"lg",color:"secondary",children:"Loading spinner component for indicating async operations and loading states"})]}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Overview"}),e.jsx(r,{as:"p",size:"md",style:{marginBottom:"var(--space-lg)",lineHeight:"1.6"},children:"The Spinner component provides visual feedback for loading states with multiple variants, sizes, and animation options. Perfect for indicating data fetching, form submissions, or any async operations."}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-md)",flexWrap:"wrap"},children:[e.jsx(c,{variant:"primary",children:"6 Variants"}),e.jsx(c,{variant:"success",children:"5 Sizes"}),e.jsx(c,{variant:"info",children:"3 Thickness Options"}),e.jsx(c,{variant:"secondary",children:"3 Speed Settings"})]})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Examples"}),e.jsxs(Ue,{title:"Variants",children:[e.jsx(R,{variant:"primary"}),e.jsx(R,{variant:"accent"}),e.jsx(R,{variant:"success"}),e.jsx(R,{variant:"warning"}),e.jsx(R,{variant:"error"}),e.jsx(R,{variant:"secondary"})]}),e.jsxs(Ue,{title:"Sizes",children:[e.jsx(R,{variant:"accent",size:"xs"}),e.jsx(R,{variant:"accent",size:"sm"}),e.jsx(R,{variant:"accent",size:"md"}),e.jsx(R,{variant:"accent",size:"lg"}),e.jsx(R,{variant:"accent",size:"xl"})]}),e.jsxs(Ue,{title:"Thickness Options",children:[e.jsx(R,{variant:"accent",thickness:"thin"}),e.jsx(R,{variant:"accent",thickness:"medium"}),e.jsx(R,{variant:"accent",thickness:"thick"})]}),e.jsxs(Ue,{title:"Speed Settings",children:[e.jsx(R,{variant:"accent",speed:"slow"}),e.jsx(R,{variant:"accent",speed:"normal"}),e.jsx(R,{variant:"accent",speed:"fast"})]})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"API Reference"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Props"}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{backgroundColor:"var(--bg-surface)"},children:[e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Prop"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Type"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Default"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"variant"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'primary'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Color variant of the spinner"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"size"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'xs' | 'sm' | 'md' | 'lg' | 'xl'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'md'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Size of the spinner (16px to 48px)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"thickness"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'thin' | 'medium' | 'thick'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'medium'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Thickness of the spinner border"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"speed"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'slow' | 'normal' | 'fast'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'normal'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Animation speed (2s, 1s, 0.5s)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Additional CSS class names for custom styling"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"style"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:"Inline styles for custom styling"})]})]})]})})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Usage Examples"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Basic Usage"}),e.jsx(De,{children:`import { Spinner } from '@flowlabkit/ui';

function LoadingComponent() {
  return (
    <div>
      <p>Loading data...</p>
      <Spinner variant="primary" size="md" />
    </div>
  );
}`}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"In Buttons"}),e.jsx(De,{children:`import { Button, Spinner } from '@flowlabkit/ui';

function SubmitButton({ loading }) {
  return (
    <Button disabled={loading}>
      {loading && <Spinner size="sm" />}
      {loading ? 'Submitting...' : 'Submit'}
    </Button>
  );
}`}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"Centered Loading Screen"}),e.jsx(De,{children:`import { Spinner } from '@flowlabkit/ui';

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
}`}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"Data Fetching Hook"}),e.jsx(De,{children:`import { useState, useEffect } from 'react';
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
}`})]})}),e.jsx(o,{children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Accessibility"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Built-in Features"}),e.jsxs("ul",{style:{marginLeft:"var(--space-lg)",lineHeight:"1.6",marginBottom:"var(--space-md)"},children:[e.jsx("li",{children:"Proper ARIA attributes for screen readers"}),e.jsx("li",{children:"Respects user's motion preferences"}),e.jsx("li",{children:'Semantic role as "status" for live updates'}),e.jsx("li",{children:"Hidden from focus as it's not interactive"})]}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Best Practices"}),e.jsx(De,{children:`// Provide context with aria-label
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
}`})]})})]}),je=({children:s,language:n="tsx"})=>e.jsx("pre",{style:{backgroundColor:"var(--bg-elevated)",color:"var(--text-primary)",padding:"var(--space-lg)",borderRadius:"var(--radius-md)",border:"1px solid var(--border-color)",overflow:"auto",fontSize:"var(--font-size-sm)",fontFamily:"Consolas, Monaco, 'Courier New', monospace",margin:"var(--space-md) 0",lineHeight:"1.5"},children:e.jsx("code",{children:s})}),be=({title:s,children:n})=>e.jsxs("div",{style:{marginBottom:"var(--space-lg)"},children:[e.jsx(r,{as:"h4",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:s}),e.jsx("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-surface)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-color)",display:"flex",flexWrap:"wrap",gap:"var(--space-lg)",alignItems:"center",justifyContent:"center"},children:n})]}),vs=()=>e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"var(--space-xl)"},children:[e.jsx(r,{as:"h1",size:"3xl",weight:"bold",style:{marginBottom:"var(--space-sm)"},children:"LoadingIndicator"}),e.jsx(r,{as:"p",size:"lg",color:"secondary",children:"Advanced loading animations with customizable types, text positioning, and visual styles"})]}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Overview"}),e.jsx(r,{as:"p",size:"md",style:{marginBottom:"var(--space-lg)",lineHeight:"1.6"},children:"The LoadingIndicator component provides a rich set of animated loading states perfect for indicating progress, data fetching, or processing operations. It supports multiple animation types, text integration, and comprehensive customization options."}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-md)",flexWrap:"wrap"},children:[e.jsx(c,{variant:"primary",children:"5 Animation Types"}),e.jsx(c,{variant:"success",children:"5 Sizes"}),e.jsx(c,{variant:"info",children:"6 Color Variants"}),e.jsx(c,{variant:"secondary",children:"Text Integration"})]})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Examples"}),e.jsx(be,{title:"Animation Types",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-md)",alignItems:"center"},children:[e.jsx(C,{type:"dots",text:"Dots"}),e.jsx(C,{type:"pulse",text:"Pulse"}),e.jsx(C,{type:"wave",text:"Wave"}),e.jsx(C,{type:"bars",text:"Bars"}),e.jsx(C,{type:"bounce",text:"Bounce"})]})}),e.jsx(be,{title:"Sizes",children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-lg)"},children:[e.jsx(C,{size:"xs",text:"XS"}),e.jsx(C,{size:"sm",text:"SM"}),e.jsx(C,{size:"md",text:"MD"}),e.jsx(C,{size:"lg",text:"LG"}),e.jsx(C,{size:"xl",text:"XL"})]})}),e.jsx(be,{title:"Color Variants",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-md)",alignItems:"center"},children:[e.jsx(C,{variant:"primary",text:"Primary"}),e.jsx(C,{variant:"secondary",text:"Secondary"}),e.jsx(C,{variant:"accent",text:"Accent"}),e.jsx(C,{variant:"success",text:"Success"}),e.jsx(C,{variant:"warning",text:"Warning"}),e.jsx(C,{variant:"error",text:"Error"})]})}),e.jsx(be,{title:"Animation Speed",children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-lg)"},children:[e.jsx(C,{speed:"slow",text:"Slow"}),e.jsx(C,{speed:"normal",text:"Normal"}),e.jsx(C,{speed:"fast",text:"Fast"})]})}),e.jsx(be,{title:"Text Positioning",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--space-lg)",alignItems:"center",width:"100%"},children:[e.jsx(C,{textPosition:"left",text:"Loading..."}),e.jsx(C,{textPosition:"right",text:"Loading..."}),e.jsx(C,{textPosition:"top",text:"Loading..."}),e.jsx(C,{textPosition:"bottom",text:"Loading..."})]})}),e.jsx(be,{title:"Real-world Usage",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-lg)",width:"100%"},children:[e.jsx(o,{variant:"outlined",style:{padding:"var(--space-lg)",textAlign:"center"},children:e.jsx(C,{type:"wave",variant:"primary",size:"lg",text:"Fetching user data...",textPosition:"bottom"})}),e.jsx(o,{variant:"filled",style:{padding:"var(--space-lg)",textAlign:"center"},children:e.jsx(C,{type:"bounce",variant:"success",size:"md",text:"Processing payment...",textPosition:"right",speed:"fast"})}),e.jsx(o,{variant:"elevated",style:{padding:"var(--space-lg)",textAlign:"center"},children:e.jsx(C,{type:"bars",variant:"accent",size:"sm",text:"Uploading files...",textPosition:"left"})})]})})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"API Reference"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Props"}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{backgroundColor:"var(--bg-surface)"},children:[e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Prop"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Type"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Default"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"type"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'dots' | 'pulse' | 'wave' | 'bars' | 'bounce'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'dots'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Animation type for the loading indicator"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"size"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'xs' | 'sm' | 'md' | 'lg' | 'xl'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'md'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Size of the loading animation elements"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"variant"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'primary'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Color variant from the theme system"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"speed"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'slow' | 'normal' | 'fast'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'normal'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Animation speed timing"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"text"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Optional text to display with the loading animation"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"textPosition"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'left' | 'right' | 'top' | 'bottom'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'right'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Position of text relative to the animation"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Additional CSS class names for custom styling"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"style"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:"Inline styles for custom styling"})]})]})]})})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Usage Examples"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Data Fetching States"}),e.jsx(je,{children:`import { LoadingIndicator } from '@flowlabkit/ui';
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
<LoadingIndicator variant="warning" text="Processing with warnings" />`})]})})]}),Pe=({children:s,language:n="tsx"})=>e.jsx("pre",{style:{backgroundColor:"var(--bg-elevated)",color:"var(--text-primary)",padding:"var(--space-lg)",borderRadius:"var(--radius-md)",border:"1px solid var(--border-color)",overflow:"auto",fontSize:"var(--font-size-sm)",fontFamily:"Consolas, Monaco, 'Courier New', monospace",margin:"var(--space-md) 0",lineHeight:"1.5"},children:e.jsx("code",{children:s})}),Oe=({title:s,children:n})=>e.jsxs("div",{style:{marginBottom:"var(--space-lg)"},children:[e.jsx(r,{as:"h4",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:s}),e.jsx("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-surface)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-color)",display:"flex",flexWrap:"wrap",gap:"var(--space-md)",alignItems:"center"},children:n})]}),us=()=>e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"var(--space-xl)"},children:[e.jsx(r,{as:"h1",size:"3xl",weight:"bold",style:{marginBottom:"var(--space-sm)"},children:"Image"}),e.jsx(r,{as:"p",size:"lg",color:"secondary",children:"Enhanced image component with loading states, fallbacks, and responsive behavior"})]}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Overview"}),e.jsx(r,{as:"p",size:"md",style:{marginBottom:"var(--space-lg)",lineHeight:"1.6"},children:"The Image component provides enhanced functionality over the standard HTML img element, including loading states, error handling, multiple variants, shape options, and responsive behavior. Perfect for avatars, thumbnails, hero images, and content imagery."}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-md)",flexWrap:"wrap"},children:[e.jsx(c,{variant:"primary",children:"5 Variants"}),e.jsx(c,{variant:"success",children:"4 Shapes"}),e.jsx(c,{variant:"info",children:"Loading States"}),e.jsx(c,{variant:"secondary",children:"Error Handling"})]})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Examples"}),e.jsxs(Oe,{title:"Variants",children:[e.jsx(O,{src:"https://picsum.photos/100/100?random=1",alt:"Default variant",variant:"default",width:100,height:100}),e.jsx(O,{src:"https://picsum.photos/100/100?random=2",alt:"Bordered variant",variant:"bordered",width:100,height:100}),e.jsx(O,{src:"https://picsum.photos/100/100?random=3",alt:"Shadow variant",variant:"shadow",width:100,height:100}),e.jsx(O,{src:"https://picsum.photos/100/100?random=4",alt:"Elevated variant",variant:"elevated",width:100,height:100}),e.jsx(O,{src:"https://picsum.photos/100/100?random=5",alt:"Hover lift variant",variant:"hover-lift",width:100,height:100})]}),e.jsxs(Oe,{title:"Shapes",children:[e.jsx(O,{src:"https://picsum.photos/100/100?random=6",alt:"Square shape",shape:"square",width:100,height:100}),e.jsx(O,{src:"https://picsum.photos/100/100?random=7",alt:"Rounded shape",shape:"rounded",width:100,height:100}),e.jsx(O,{src:"https://picsum.photos/100/100?random=8",alt:"Circle shape",shape:"circle",width:100,height:100}),e.jsx(O,{src:"https://picsum.photos/150/75?random=9",alt:"Pill shape",shape:"pill",width:150,height:75})]}),e.jsx(Oe,{title:"Loading and Error States",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-md)"},children:[e.jsxs("div",{children:[e.jsx(r,{size:"sm",color:"secondary",style:{marginBottom:"var(--space-sm)"},children:"Loading State (simulated):"}),e.jsx(O,{src:"https://httpstat.us/200?sleep=5000",alt:"Loading image",width:120,height:120,shape:"rounded"})]}),e.jsxs("div",{children:[e.jsx(r,{size:"sm",color:"secondary",style:{marginBottom:"var(--space-sm)"},children:"Error State (broken URL):"}),e.jsx(O,{src:"https://broken-url-that-will-fail.jpg",alt:"Failed to load",width:120,height:120,shape:"rounded",fallback:"https://via.placeholder.com/120x120/cccccc/666666?text=Error"})]})]})}),e.jsx(Oe,{title:"Real-world Usage",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-lg)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-md)"},children:[e.jsx(O,{src:"https://picsum.photos/50/50?random=10",alt:"User avatar",shape:"circle",variant:"bordered",width:50,height:50}),e.jsxs("div",{children:[e.jsx(r,{weight:"medium",children:"John Doe"}),e.jsx(r,{size:"sm",color:"secondary",children:"Software Engineer"})]})]}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-md)"},children:[e.jsx(O,{src:"https://picsum.photos/80/80?random=11",alt:"Product thumbnail",shape:"rounded",variant:"shadow",width:80,height:80}),e.jsxs("div",{children:[e.jsx(r,{weight:"medium",children:"Product Name"}),e.jsx(r,{size:"sm",color:"secondary",children:"High-quality product description"}),e.jsx(r,{size:"sm",color:"accent",weight:"medium",children:"$29.99"})]})]})]})})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"API Reference"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Props"}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{backgroundColor:"var(--bg-surface)"},children:[e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Prop"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Type"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Default"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"src"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"required"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Image source URL"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"alt"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"required"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Alternative text for accessibility"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"variant"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'default' | 'bordered' | 'shadow' | 'elevated' | 'hover-lift'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'default'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Visual style variant affecting borders and shadows"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"shape"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'square' | 'rounded' | 'circle' | 'pill'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'square'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Border radius style of the image"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"size"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'md'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Predefined size of the image"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"fit"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'cover' | 'contain' | 'fill' | 'scale-down' | 'none'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'cover'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"CSS object-fit behavior for image sizing"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"width"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"number | string"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Image width in pixels or CSS value"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"height"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"number | string"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Image height in pixels or CSS value"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"fallback"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Fallback content when primary image fails to load"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"loading"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'lazy' | 'eager'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'lazy'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Native loading behavior for the image"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Additional CSS class names for custom styling"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"style"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:"Inline styles for custom styling"})]})]})]})})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Usage Examples"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Avatar Component"}),e.jsx(Pe,{children:`import { Image, Text } from '@flowlabkit/ui';

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
}`}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"Product Gallery"}),e.jsx(Pe,{children:`import { Image } from '@flowlabkit/ui';

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
}`}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"Hero Image with Overlay"}),e.jsx(Pe,{children:`import { Image, Text } from '@flowlabkit/ui';

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
}`}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"Responsive Image with Error Handling"}),e.jsx(Pe,{children:`import { Image } from '@flowlabkit/ui';
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
}`})]})}),e.jsx(o,{children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Accessibility"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Built-in Features"}),e.jsxs("ul",{style:{marginLeft:"var(--space-lg)",lineHeight:"1.6",marginBottom:"var(--space-md)"},children:[e.jsx("li",{children:"Required alt text for screen reader compatibility"}),e.jsx("li",{children:"Proper focus management and keyboard navigation"}),e.jsx("li",{children:"Loading state indicators for assistive technologies"}),e.jsx("li",{children:"Error handling with fallback content"}),e.jsx("li",{children:"Native lazy loading support for performance"})]}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Best Practices"}),e.jsx(Pe,{children:`// Always provide meaningful alt text
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
/>`})]})})]}),ys=()=>{const[s,n]=p.useState("md"),[i,l]=p.useState("default"),[t,m]=p.useState("rounded"),[v,b]=p.useState(!0),[z,x]=p.useState(!0),[h,E]=p.useState(!1),[y,V]=p.useState(!0),[A,H]=p.useState(!1),[D,W]=p.useState(!1),[L,Q]=p.useState(!1),[B,g]=p.useState(!1),[k,X]=p.useState(!1),P="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",$=[{label:"Auto",value:"auto"},{label:"1080p",value:"1080p",src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"},{label:"720p",value:"720p",src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"},{label:"480p",value:"480p",src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"},{label:"360p",value:"360p",src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"},{label:"240p",value:"240p",src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"}];return e.jsxs("div",{style:{padding:"var(--space-lg)",maxWidth:"1200px"},children:[e.jsxs("div",{style:{marginBottom:"var(--space-2xl)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-md)",marginBottom:"var(--space-md)"},children:[e.jsx(r,{as:"h1",size:"3xl",weight:"bold",children:"Video"}),e.jsx(c,{variant:"secondary",size:"sm",children:"Media Component"})]}),e.jsx(r,{as:"p",size:"lg",color:"secondary",style:{marginBottom:"var(--space-lg)"},children:"A feature-rich, themeable video component with transparent container where the video itself takes the shape while themed SVG controls remain always visible. Includes advanced features like fullscreen toggle, autoplay, loop functionality, playback speed controls, loading states, error handling, and a comprehensive 3-dot menu for additional options."}),e.jsx("div",{style:{backgroundColor:"var(--warning-50)",border:"1px solid var(--warning-200)",borderRadius:"var(--radius-md)",padding:"var(--space-md)",marginBottom:"var(--space-lg)"},children:e.jsxs(r,{size:"sm",weight:"medium",style:{color:"var(--warning-700)"},children:["📽️ ",e.jsx("strong",{children:"Demo Videos:"})," Sample videos used in this demo are from Google's test video collection and Big Buck Bunny © copyright 2008, Blender Foundation (www.bigbuckbunny.org), licensed under Creative Commons Attribution 3.0. Used for demonstration purposes only."]})}),e.jsx("div",{style:{backgroundColor:"var(--info-50)",border:"1px solid var(--info-200)",borderRadius:"var(--radius-md)",padding:"var(--space-md)",marginBottom:"var(--space-lg)"},children:e.jsxs(r,{size:"sm",weight:"medium",style:{color:"var(--info-700)"},children:["⚙️ ",e.jsx("strong",{children:"Video Sources Supported:"})," The Video component now supports multiple sources:",e.jsx("br",{}),"• ",e.jsx("strong",{children:"Direct files:"}),' `src="video.mp4"` (HTML5 player with all controls)',e.jsx("br",{}),"• ",e.jsx("strong",{children:"YouTube URLs:"}),' `src="https://youtube.com/watch?v=..." as="url"` (iframe embed)',e.jsx("br",{}),"• ",e.jsx("strong",{children:"Vimeo URLs:"}),' `src="https://vimeo.com/123456" as="url"` (iframe embed)',e.jsx("br",{}),"• ",e.jsx("strong",{children:"Auto-detection:"})," Leave `as` prop empty for automatic detection",e.jsx("br",{}),'• Use `as="player"` to force HTML5 player, `as="url"` to force iframe embed']})}),e.jsx("div",{style:{backgroundColor:"var(--accent-50)",border:"1px solid var(--accent-200)",borderRadius:"var(--radius-md)",padding:"var(--space-md)"},children:e.jsxs(r,{size:"sm",weight:"medium",style:{color:"var(--accent-700)"},children:["💡 ",e.jsx("strong",{children:"Architecture Note:"})," This is the basic Video component. For advanced features like custom controls, playlists, or analytics, consider the enhanced Video component in FlowLabKit UI library."]})})]}),e.jsxs(o,{style:{marginBottom:"var(--space-2xl)"},children:[e.jsx(F,{children:e.jsx(r,{as:"h2",size:"xl",weight:"semibold",children:"Interactive Example"})}),e.jsx(d,{children:e.jsxs("div",{style:{display:"flex",gap:"var(--space-xl)"},children:[e.jsxs("div",{style:{flex:"0 0 300px"},children:[e.jsxs("div",{style:{marginBottom:"var(--space-lg)"},children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Size"}),e.jsx("div",{style:{display:"flex",gap:"var(--space-xs)",flexWrap:"wrap"},children:["xs","sm","md","lg","xl","full"].map(S=>e.jsx(w,{variant:s===S?"primary":"secondary",size:"sm",onClick:()=>n(S),children:S},S))})]}),e.jsxs("div",{style:{marginBottom:"var(--space-lg)"},children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Variant"}),e.jsx("div",{style:{display:"flex",gap:"var(--space-xs)",flexWrap:"wrap"},children:["default","bordered","shadow","elevated","hover-lift"].map(S=>e.jsx(w,{variant:i===S?"primary":"secondary",size:"sm",onClick:()=>l(S),children:S},S))})]}),e.jsxs("div",{style:{marginBottom:"var(--space-lg)"},children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Shape"}),e.jsx("div",{style:{display:"flex",gap:"var(--space-xs)",flexWrap:"wrap"},children:["square","rounded","pill"].map(S=>e.jsx(w,{variant:t===S?"primary":"secondary",size:"sm",onClick:()=>m(S),children:S},S))})]}),e.jsxs("div",{style:{marginBottom:"var(--space-lg)"},children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Options"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-sm)"},children:[e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--space-sm)",cursor:"pointer"},children:[e.jsx("input",{type:"checkbox",checked:v,onChange:S=>b(S.target.checked)}),e.jsx(r,{size:"sm",children:"Show controls"})]}),e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--space-sm)",cursor:"pointer"},children:[e.jsx("input",{type:"checkbox",checked:z,onChange:S=>x(S.target.checked)}),e.jsx(r,{size:"sm",children:"Show menu (3-dot)"})]}),e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--space-sm)",cursor:"pointer"},children:[e.jsx("input",{type:"checkbox",checked:h,onChange:S=>E(S.target.checked)}),e.jsx(r,{size:"sm",children:"Enable download"})]}),e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--space-sm)",cursor:"pointer"},children:[e.jsx("input",{type:"checkbox",checked:y,onChange:S=>V(S.target.checked)}),e.jsx(r,{size:"sm",children:"Enable fullscreen"})]}),e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--space-sm)",cursor:"pointer"},children:[e.jsx("input",{type:"checkbox",checked:A,onChange:S=>H(S.target.checked)}),e.jsx(r,{size:"sm",children:"Autoplay on load"})]}),e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--space-sm)",cursor:"pointer"},children:[e.jsx("input",{type:"checkbox",checked:D,onChange:S=>W(S.target.checked)}),e.jsx(r,{size:"sm",children:"Mute audio on play"})]}),e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--space-sm)",cursor:"pointer"},children:[e.jsx("input",{type:"checkbox",checked:L,onChange:S=>Q(S.target.checked)}),e.jsx(r,{size:"sm",children:"Enable loop toggle"})]}),e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--space-sm)",cursor:"pointer"},children:[e.jsx("input",{type:"checkbox",checked:B,onChange:S=>g(S.target.checked)}),e.jsx(r,{size:"sm",children:"Show playback speed options"})]}),e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--space-sm)",cursor:"pointer"},children:[e.jsx("input",{type:"checkbox",checked:k,onChange:S=>X(S.target.checked)}),e.jsx(r,{size:"sm",children:"Show video quality options"})]})]})]})]}),e.jsx("div",{style:{flex:1,display:"flex",justifyContent:"center",alignItems:"center",minHeight:"300px"},children:e.jsx(I,{src:P,size:s,variant:i,shape:t,showControls:v,showMenu:z,enableDownload:h,enableFullscreen:y,autoplayOnLoad:A,muteAudioOnPlay:D,enableLoop:L,showPlaybackSpeed:B,showVideoQuality:k,videoQualities:$,poster:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"})})]})})]}),e.jsxs("div",{style:{marginBottom:"var(--space-2xl)"},children:[e.jsx(r,{as:"h2",size:"2xl",weight:"bold",style:{marginBottom:"var(--space-lg)"},children:"Examples"}),e.jsxs(o,{style:{marginBottom:"var(--space-xl)"},children:[e.jsx(F,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"Basic Usage"})}),e.jsxs(d,{children:[e.jsx("div",{style:{display:"flex",gap:"var(--space-lg)",alignItems:"center",marginBottom:"var(--space-lg)"},children:e.jsx(I,{src:P,size:"sm",poster:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"})}),e.jsx("div",{style:{backgroundColor:"var(--bg-surface)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"var(--space-md)",fontFamily:"monospace",fontSize:"var(--font-size-sm)",whiteSpace:"pre-wrap",overflowX:"auto"},children:`<Video 
  src="your-video.mp4" 
  size="sm"
  poster="poster-image.jpg"
/>`})]})]}),e.jsxs(o,{style:{marginBottom:"var(--space-xl)"},children:[e.jsx(F,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"Different Sizes"})}),e.jsxs(d,{children:[e.jsxs("div",{style:{display:"flex",gap:"var(--space-lg)",alignItems:"center",flexWrap:"wrap",marginBottom:"var(--space-lg)"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(I,{src:P,size:"xs",poster:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"}),e.jsx(r,{size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:"Extra Small"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(I,{src:P,size:"sm",poster:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"}),e.jsx(r,{size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:"Small"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(I,{src:P,size:"md",poster:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"}),e.jsx(r,{size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:"Medium"})]})]}),e.jsx("div",{style:{backgroundColor:"var(--bg-surface)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"var(--space-md)",fontFamily:"monospace",fontSize:"var(--font-size-sm)",whiteSpace:"pre-wrap",overflowX:"auto"},children:`<Video src="video.mp4" size="xs" />
<Video src="video.mp4" size="sm" />
<Video src="video.mp4" size="md" />
<Video src="video.mp4" size="lg" />
<Video src="video.mp4" size="xl" />`})]})]}),e.jsxs(o,{style:{marginBottom:"var(--space-xl)"},children:[e.jsx(F,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"Different Variants"})}),e.jsxs(d,{children:[e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"var(--space-lg)",marginBottom:"var(--space-lg)"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(I,{src:P,variant:"default",size:"sm",poster:"https://via.placeholder.com/240x135/4F46E5/FFFFFF?text=Default"}),e.jsx(r,{size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:"Default"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(I,{src:P,variant:"bordered",size:"sm",poster:"https://via.placeholder.com/240x135/4F46E5/FFFFFF?text=Bordered"}),e.jsx(r,{size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:"Bordered"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(I,{src:P,variant:"shadow",size:"sm",poster:"https://via.placeholder.com/240x135/4F46E5/FFFFFF?text=Shadow"}),e.jsx(r,{size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:"Shadow"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(I,{src:P,variant:"elevated",size:"sm",poster:"https://via.placeholder.com/240x135/4F46E5/FFFFFF?text=Elevated"}),e.jsx(r,{size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:"Elevated"})]})]}),e.jsx("div",{style:{backgroundColor:"var(--bg-surface)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"var(--space-md)",fontFamily:"monospace",fontSize:"var(--font-size-sm)",whiteSpace:"pre-wrap",overflowX:"auto"},children:`<Video variant="default" src="video.mp4" />
<Video variant="bordered" src="video.mp4" />
<Video variant="shadow" src="video.mp4" />
<Video variant="elevated" src="video.mp4" />
<Video variant="hover-lift" src="video.mp4" />`})]})]}),e.jsxs(o,{style:{marginBottom:"var(--space-xl)"},children:[e.jsx(F,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"Different Shapes"})}),e.jsxs(d,{children:[e.jsxs("div",{style:{display:"flex",gap:"var(--space-lg)",alignItems:"center",marginBottom:"var(--space-lg)"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(I,{src:P,shape:"square",size:"sm",poster:"https://via.placeholder.com/240x135/4F46E5/FFFFFF?text=Square"}),e.jsx(r,{size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:"Square"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(I,{src:P,shape:"rounded",size:"sm",poster:"https://via.placeholder.com/240x135/4F46E5/FFFFFF?text=Rounded"}),e.jsx(r,{size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:"Rounded"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(I,{src:P,shape:"pill",size:"sm",poster:"https://via.placeholder.com/240x135/4F46E5/FFFFFF?text=Pill"}),e.jsx(r,{size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:"Pill"})]})]}),e.jsx("div",{style:{backgroundColor:"var(--bg-surface)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"var(--space-md)",fontFamily:"monospace",fontSize:"var(--font-size-sm)",whiteSpace:"pre-wrap",overflowX:"auto"},children:`<Video shape="square" src="video.mp4" />
<Video shape="rounded" src="video.mp4" />
<Video shape="pill" src="video.mp4" />`})]})]}),e.jsxs(o,{style:{marginBottom:"var(--space-xl)"},children:[e.jsx(F,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"Platform Support - YouTube & Vimeo"})}),e.jsxs(d,{children:[e.jsxs("div",{style:{display:"flex",gap:"var(--space-lg)",alignItems:"center",marginBottom:"var(--space-lg)"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(I,{src:"https://youtu.be/nTbA7qrEsP0",as:"url",size:"sm"}),e.jsx(r,{size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:"YouTube Video"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(I,{src:"https://vimeo.com/90509568",as:"url",size:"sm"}),e.jsx(r,{size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:"Vimeo Video"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(I,{src:P,as:"player",size:"sm",poster:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"}),e.jsx(r,{size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:"HTML5 Player"})]})]}),e.jsx("div",{style:{backgroundColor:"var(--bg-surface)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"var(--space-md)",fontFamily:"monospace",fontSize:"var(--font-size-sm)",whiteSpace:"pre-wrap",overflowX:"auto"},children:`// YouTube video
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
/>`})]})]}),e.jsxs(o,{style:{marginBottom:"var(--space-xl)"},children:[e.jsx(F,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"Custom Controls & Menu"})}),e.jsxs(d,{children:[e.jsxs("div",{style:{display:"flex",gap:"var(--space-lg)",alignItems:"center",marginBottom:"var(--space-lg)"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(I,{src:P,size:"sm",showControls:!0,showMenu:!1,poster:"https://via.placeholder.com/240x135/10B981/FFFFFF?text=Controls+Only"}),e.jsx(r,{size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:"Controls Only"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(I,{src:P,size:"sm",showControls:!0,showMenu:!0,enableDownload:!1,poster:"https://via.placeholder.com/240x135/F59E0B/FFFFFF?text=With+Menu"}),e.jsx(r,{size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:"With Menu"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(I,{src:P,size:"sm",showControls:!0,showMenu:!0,enableDownload:!0,poster:"https://via.placeholder.com/240x135/EF4444/FFFFFF?text=Download+Enabled"}),e.jsx(r,{size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:"Download Enabled"})]})]}),e.jsx("div",{style:{backgroundColor:"var(--bg-surface)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"var(--space-md)",fontFamily:"monospace",fontSize:"var(--font-size-sm)",whiteSpace:"pre-wrap",overflowX:"auto"},children:`// Basic controls
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
<Video src="video.mp4" showControls={false} />`})]})]}),e.jsxs(o,{style:{marginBottom:"var(--space-xl)"},children:[e.jsx(F,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"Error handling"})}),e.jsxs(d,{children:[e.jsxs("div",{style:{display:"flex",gap:"var(--space-lg)",alignItems:"center",marginBottom:"var(--space-lg)"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(I,{src:"invalid-video-url.mp4",size:"sm"}),e.jsx(r,{size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:"Default Error"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(I,{src:"invalid-video-url.mp4",size:"sm",fallback:e.jsxs("div",{style:{textAlign:"center",color:"var(--accent-500)"},children:[e.jsx(r,{size:"sm",weight:"medium",children:"Custom Error Message"}),e.jsx(r,{size:"xs",color:"secondary",children:"Video not available"})]})}),e.jsx(r,{size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:"Custom Fallback"})]})]}),e.jsx("div",{style:{backgroundColor:"var(--bg-surface)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"var(--space-md)",fontFamily:"monospace",fontSize:"var(--font-size-sm)",whiteSpace:"pre-wrap",overflowX:"auto"},children:`// Default error handling
<Video src="invalid-url.mp4" />

// Custom fallback
<Video 
  src="invalid-url.mp4"
  fallback={<div>Custom error message</div>}
/>`})]})]})]}),e.jsxs("div",{style:{marginBottom:"var(--space-2xl)"},children:[e.jsx(r,{as:"h2",size:"2xl",weight:"bold",style:{marginBottom:"var(--space-lg)"},children:"API Reference"}),e.jsxs(o,{children:[e.jsx(F,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"VideoProps"})}),e.jsx(d,{children:e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"var(--font-size-sm)"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid var(--border-color)"},children:[e.jsx("th",{style:{padding:"var(--space-sm)",textAlign:"left",fontWeight:"var(--font-weight-semibold)"},children:"Prop"}),e.jsx("th",{style:{padding:"var(--space-sm)",textAlign:"left",fontWeight:"var(--font-weight-semibold)"},children:"Type"}),e.jsx("th",{style:{padding:"var(--space-sm)",textAlign:"left",fontWeight:"var(--font-weight-semibold)"},children:"Default"}),e.jsx("th",{style:{padding:"var(--space-sm)",textAlign:"left",fontWeight:"var(--font-weight-semibold)"},children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"variant"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"'default' | 'bordered' | 'shadow' | 'elevated' | 'hover-lift'"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"'default'"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Visual style variant"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"shape"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"'square' | 'rounded' | 'pill'"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"'rounded'"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Border radius style"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"size"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"'md'"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Video dimensions"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"fit"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"'cover' | 'contain' | 'fill' | 'scale-down' | 'none'"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"'cover'"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"How video fits container"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"showSpinner"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"boolean"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"true"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Show loading spinner"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"showControls"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"boolean"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"true"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Show custom video controls"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"showMenu"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"boolean"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"true"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Show 3-dot menu button"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"enableDownload"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"boolean"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"false"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Enable download option in menu"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"enableFullscreen"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"boolean"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"true"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Enable fullscreen toggle in menu"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"autoplayOnLoad"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"boolean"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"false"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Automatically play video when loaded"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"muteAudioOnPlay"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"boolean"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"false"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Mute audio when autoplay starts"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"enableLoop"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"boolean"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"false"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Enable loop toggle option in menu"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"showPlaybackSpeed"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"boolean"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"false"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Show playback speed dropdown in menu"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"showVideoQuality"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"boolean"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"false"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Show video quality dropdown in menu"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"videoQualities"}),e.jsxs("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:["Array<","{label: string, value: string, src?: string}",">"]}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"Auto, 1080p, 720p, 480p, 360p"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Available video quality options. Provide different quality variants of the same video with optional src URLs"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"fallback"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"React.ReactNode"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"-"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Custom error fallback content"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"className"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"string"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"''"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Additional CSS classes"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"...props"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"VideoHTMLAttributes"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"-"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Standard HTML video attributes"})]})]})]})})})]})]}),e.jsxs("div",{style:{marginBottom:"var(--space-2xl)"},children:[e.jsx(r,{as:"h2",size:"2xl",weight:"bold",style:{marginBottom:"var(--space-lg)"},children:"Advanced Features"}),e.jsxs("div",{style:{display:"grid",gap:"var(--space-lg)"},children:[e.jsxs(o,{children:[e.jsx(F,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"Autoplay with Muted Audio"})}),e.jsxs(d,{children:[e.jsxs("div",{style:{display:"flex",gap:"var(--space-lg)",alignItems:"center",marginBottom:"var(--space-lg)"},children:[e.jsx(I,{src:P,size:"sm",autoplayOnLoad:!0,muteAudioOnPlay:!0,poster:"https://via.placeholder.com/240x135/10B981/FFFFFF?text=Autoplay"}),e.jsx(r,{size:"sm",color:"secondary",style:{flex:1},children:"Video starts playing automatically when loaded, with audio muted to comply with browser policies."})]}),e.jsx(r,{size:"sm",weight:"medium",style:{fontFamily:"monospace",backgroundColor:"var(--bg-secondary)",padding:"var(--space-sm)",borderRadius:"var(--radius-sm)"},children:`<Video 
  src="video.mp4" 
  autoplayOnLoad 
  muteAudioOnPlay 
/>`})]})]}),e.jsxs(o,{children:[e.jsx(F,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"Fullscreen & Loop Controls"})}),e.jsxs(d,{children:[e.jsxs("div",{style:{display:"flex",gap:"var(--space-lg)",alignItems:"center",marginBottom:"var(--space-lg)"},children:[e.jsx(I,{src:P,size:"sm",enableFullscreen:!0,enableLoop:!0,poster:"https://via.placeholder.com/240x135/8B5CF6/FFFFFF?text=Advanced"}),e.jsx(r,{size:"sm",color:"secondary",style:{flex:1},children:"Click the 3-dot menu to access fullscreen toggle and loop controls. Fullscreen works with browser APIs for immersive viewing."})]}),e.jsx(r,{size:"sm",weight:"medium",style:{fontFamily:"monospace",backgroundColor:"var(--bg-secondary)",padding:"var(--space-sm)",borderRadius:"var(--radius-sm)"},children:`<Video 
  src="video.mp4" 
  enableFullscreen 
  enableLoop 
/>`})]})]}),e.jsxs(o,{children:[e.jsx(F,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"Dropdown Controls"})}),e.jsxs(d,{children:[e.jsxs("div",{style:{display:"flex",gap:"var(--space-lg)",alignItems:"center",marginBottom:"var(--space-lg)"},children:[e.jsx(I,{src:P,size:"sm",showPlaybackSpeed:!0,showVideoQuality:!0,videoQualities:$,poster:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"}),e.jsxs(r,{size:"sm",color:"secondary",style:{flex:1},children:[e.jsx("strong",{children:"YouTube-style quality controls:"})," Select different resolutions (1080p, 720p, 480p, 360p, 240p) to see quality changes in action. Watch for the quality indicator in the top-right corner and loading feedback when switching qualities. Each quality option loads a different resolution variant, demonstrating how video quality systems work."]})]}),e.jsx(r,{size:"sm",weight:"medium",style:{fontFamily:"monospace",backgroundColor:"var(--bg-secondary)",padding:"var(--space-sm)",borderRadius:"var(--radius-sm)"},children:`<Video 
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
/>`})]})]}),e.jsxs(o,{children:[e.jsx(F,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"Playback Speed Control"})}),e.jsxs(d,{children:[e.jsxs("div",{style:{display:"flex",gap:"var(--space-lg)",alignItems:"center",marginBottom:"var(--space-lg)"},children:[e.jsx(I,{src:P,size:"sm",showPlaybackSpeed:!0,poster:"https://via.placeholder.com/240x135/F59E0B/FFFFFF?text=Speed"}),e.jsx(r,{size:"sm",color:"secondary",style:{flex:1},children:"Access playback speed options (0.5x to 2x) through the menu for faster or slower viewing experiences."})]}),e.jsx(r,{size:"sm",weight:"medium",style:{fontFamily:"monospace",backgroundColor:"var(--bg-secondary)",padding:"var(--space-sm)",borderRadius:"var(--radius-sm)"},children:`<Video 
  src="video.mp4" 
  showPlaybackSpeed 
/>`})]})]}),e.jsxs(o,{children:[e.jsx(F,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"All Advanced Features"})}),e.jsxs(d,{children:[e.jsxs("div",{style:{display:"flex",gap:"var(--space-lg)",alignItems:"center",marginBottom:"var(--space-lg)"},children:[e.jsx(I,{src:P,size:"sm",enableFullscreen:!0,enableLoop:!0,showPlaybackSpeed:!0,showVideoQuality:!0,videoQualities:$,enableDownload:!0,poster:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"}),e.jsxs(r,{size:"sm",color:"secondary",style:{flex:1},children:["A fully-featured video player with all advanced options enabled.",e.jsx("strong",{children:"Quality testing ready:"})," Use the 3-dot menu → Quality to test YouTube-style quality switching. Watch the top-right corner for quality indicators and loading feedback when switching between 1080p, 720p, 480p, 360p, and 240p."]})]}),e.jsx(r,{size:"sm",weight:"medium",style:{fontFamily:"monospace",backgroundColor:"var(--bg-secondary)",padding:"var(--space-sm)",borderRadius:"var(--radius-sm)"},children:`<Video 
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
/>`})]})]})]})]}),e.jsxs("div",{style:{marginBottom:"var(--space-2xl)"},children:[e.jsx(r,{as:"h2",size:"2xl",weight:"bold",style:{marginBottom:"var(--space-lg)"},children:"Usage Guidelines"}),e.jsxs("div",{style:{display:"grid",gap:"var(--space-lg)"},children:[e.jsxs(o,{children:[e.jsx(F,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",style:{color:"var(--success-600)"},children:"✅ Do"})}),e.jsx(d,{children:e.jsxs("ul",{style:{margin:0,paddingLeft:"var(--space-lg)"},children:[e.jsx("li",{style:{marginBottom:"var(--space-sm)"},children:e.jsx(r,{size:"sm",children:"Provide poster images for better loading experience"})}),e.jsx("li",{style:{marginBottom:"var(--space-sm)"},children:e.jsx(r,{size:"sm",children:"Use appropriate sizes for your layout context"})}),e.jsx("li",{style:{marginBottom:"var(--space-sm)"},children:e.jsx(r,{size:"sm",children:"Include meaningful alt text for accessibility"})}),e.jsx("li",{style:{marginBottom:"var(--space-sm)"},children:e.jsx(r,{size:"sm",children:"Handle error states with custom fallbacks when needed"})}),e.jsx("li",{children:e.jsx(r,{size:"sm",children:"Consider autoplay policies when using video"})})]})})]}),e.jsxs(o,{children:[e.jsx(F,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",style:{color:"var(--danger-600)"},children:"❌ Don't"})}),e.jsx(d,{children:e.jsxs("ul",{style:{margin:0,paddingLeft:"var(--space-lg)"},children:[e.jsx("li",{style:{marginBottom:"var(--space-sm)"},children:e.jsx(r,{size:"sm",children:"Use oversized videos that impact performance"})}),e.jsx("li",{style:{marginBottom:"var(--space-sm)"},children:e.jsx(r,{size:"sm",children:"Forget to provide fallback content for accessibility"})}),e.jsx("li",{style:{marginBottom:"var(--space-sm)"},children:e.jsx(r,{size:"sm",children:"Auto-play videos with sound without user consent"})}),e.jsx("li",{children:e.jsx(r,{size:"sm",children:"Use for complex video player needs - consider FlowLabKit's advanced Video component"})})]})})]})]})]}),e.jsxs(o,{children:[e.jsx(F,{children:e.jsx(r,{as:"h2",size:"xl",weight:"semibold",children:"Accessibility"})}),e.jsx(d,{children:e.jsxs("div",{style:{display:"grid",gap:"var(--space-md)"},children:[e.jsxs("div",{children:[e.jsx(r,{size:"sm",weight:"medium",style:{marginBottom:"var(--space-xs)"},children:"Keyboard Navigation"}),e.jsx(r,{size:"sm",color:"secondary",children:"Video controls are keyboard accessible when enabled. Users can play/pause with Space, and navigate with arrow keys."})]}),e.jsxs("div",{children:[e.jsx(r,{size:"sm",weight:"medium",style:{marginBottom:"var(--space-xs)"},children:"Screen Readers"}),e.jsx(r,{size:"sm",color:"secondary",children:"Provide meaningful descriptions and consider captions for video content."})]}),e.jsxs("div",{children:[e.jsx(r,{size:"sm",weight:"medium",style:{marginBottom:"var(--space-xs)"},children:"Motion Sensitivity"}),e.jsx(r,{size:"sm",color:"secondary",children:"Respect user preferences for reduced motion and avoid auto-playing videos."})]}),e.jsxs("div",{children:[e.jsx(r,{size:"sm",weight:"medium",style:{marginBottom:"var(--space-xs)"},children:"Error Handling"}),e.jsx(r,{size:"sm",color:"secondary",children:"Graceful error states ensure the interface remains accessible when videos fail to load."})]})]})})]})]})},Ee=({children:s,language:n="tsx"})=>e.jsx("pre",{style:{backgroundColor:"var(--bg-elevated)",color:"var(--text-primary)",padding:"var(--space-lg)",borderRadius:"var(--radius-md)",border:"1px solid var(--border-color)",overflow:"auto",fontSize:"var(--font-size-sm)",fontFamily:"Consolas, Monaco, 'Courier New', monospace",margin:"var(--space-md) 0",lineHeight:"1.5"},children:e.jsx("code",{children:s})}),Ne=({title:s,children:n})=>e.jsxs("div",{style:{marginBottom:"var(--space-lg)"},children:[e.jsx(r,{as:"h4",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:s}),e.jsx("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-surface)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-color)",display:"flex",flexDirection:"column",gap:"var(--space-md)"},children:n})]}),js=()=>e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"var(--space-xl)"},children:[e.jsx(r,{as:"h1",size:"3xl",weight:"bold",style:{marginBottom:"var(--space-sm)"},children:"Card"}),e.jsx(r,{as:"p",size:"lg",color:"secondary",children:"Flexible container component for grouping related content with header, body, and footer sections"})]}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Overview"}),e.jsx(r,{as:"p",size:"md",style:{marginBottom:"var(--space-lg)",lineHeight:"1.6"},children:"The Card component system provides a flexible foundation for content layout. It includes Card, CardHeader, CardBody, and CardFooter components that can be composed together to create structured, visually appealing content containers."}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-md)",flexWrap:"wrap"},children:[e.jsx(c,{variant:"primary",children:"Modular Design"}),e.jsx(c,{variant:"success",children:"Multiple Variants"}),e.jsx(c,{variant:"info",children:"Flexible Layout"}),e.jsx(c,{variant:"secondary",children:"Composable"})]})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Examples"}),e.jsx(Ne,{title:"Basic Cards",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"var(--space-md)"},children:[e.jsx(o,{children:e.jsxs(d,{children:[e.jsx(r,{as:"h3",size:"lg",weight:"semibold",style:{marginBottom:"var(--space-sm)"},children:"Simple Card"}),e.jsx(r,{children:"This is a basic card with just a body section containing some content."})]})}),e.jsxs(o,{variant:"outlined",children:[e.jsx(F,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"Outlined Card"})}),e.jsx(d,{children:e.jsx(r,{children:"This card has a visible border and includes both header and body sections."})})]})]})}),e.jsx(Ne,{title:"Card Variants",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"var(--space-md)"},children:[e.jsx(o,{variant:"elevated",children:e.jsxs(d,{children:[e.jsx(r,{weight:"medium",children:"Elevated"}),e.jsx(r,{size:"sm",color:"secondary",children:"Default with shadow"})]})}),e.jsx(o,{variant:"outlined",children:e.jsxs(d,{children:[e.jsx(r,{weight:"medium",children:"Outlined"}),e.jsx(r,{size:"sm",color:"secondary",children:"With visible border"})]})}),e.jsx(o,{variant:"filled",children:e.jsxs(d,{children:[e.jsx(r,{weight:"medium",children:"Filled"}),e.jsx(r,{size:"sm",color:"secondary",children:"Different background"})]})})]})}),e.jsx(Ne,{title:"Complete Card Structure",children:e.jsxs(o,{variant:"outlined",style:{maxWidth:"400px"},children:[e.jsx(F,{children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"Product Card"}),e.jsx(c,{variant:"success",children:"New"})]})}),e.jsxs(d,{children:[e.jsx(O,{src:"https://picsum.photos/300/150?random=1",alt:"Product image",variant:"default",shape:"rounded",style:{width:"100%",height:"150px",marginBottom:"var(--space-md)"}}),e.jsx(r,{style:{marginBottom:"var(--space-sm)"},children:"This is a complete card example showing how header, body, and footer work together."}),e.jsx(r,{size:"sm",color:"secondary",children:"Perfect for product listings, user profiles, or content previews."})]}),e.jsx($e,{children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx(r,{weight:"semibold",color:"accent",children:"$99.99"}),e.jsx(w,{variant:"primary",size:"sm",children:"Add to Cart"})]})})]})}),e.jsx(Ne,{title:"Interactive Cards",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"var(--space-md)"},children:[e.jsx(o,{variant:"elevated",hoverable:!0,style:{cursor:"pointer"},onClick:()=>alert("Card clicked!"),children:e.jsxs(d,{children:[e.jsx(r,{as:"h4",weight:"semibold",style:{marginBottom:"var(--space-sm)"},children:"Clickable Card"}),e.jsx(r,{size:"sm",children:"This entire card is clickable and has hover effects."})]})}),e.jsxs(o,{variant:"outlined",children:[e.jsx(F,{children:e.jsx(r,{as:"h4",weight:"semibold",children:"User Profile"})}),e.jsx(d,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-md)"},children:[e.jsx(O,{src:"https://picsum.photos/50/50?random=2",alt:"User avatar",shape:"circle",variant:"bordered",width:50,height:50}),e.jsxs("div",{children:[e.jsx(r,{weight:"medium",children:"Jane Smith"}),e.jsx(r,{size:"sm",color:"secondary",children:"UI/UX Designer"})]})]})}),e.jsx($e,{children:e.jsxs("div",{style:{display:"flex",gap:"var(--space-sm)"},children:[e.jsx(w,{variant:"primary",size:"sm",children:"Follow"}),e.jsx(w,{variant:"secondary",size:"sm",children:"Message"})]})})]})]})})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"API Reference"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Card Props"}),e.jsx("div",{style:{overflowX:"auto",marginBottom:"var(--space-lg)"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{backgroundColor:"var(--bg-surface)"},children:[e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Prop"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Type"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Default"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"variant"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'elevated' | 'outlined' | 'filled'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'elevated'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'default'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Visual style variant affecting borders and shadows"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"hoverable"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"false"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Adds hover effects and cursor pointer for interactive cards"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"padding"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'none' | 'sm' | 'md' | 'lg'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'md'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Internal padding of the card container"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"radius"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'none' | 'sm' | 'md' | 'lg'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'md'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Border radius of the card corners"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"shadow"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'none' | 'sm' | 'md' | 'lg'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"'md'"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Drop shadow intensity of the card"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"children"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Content of the card (typically CardHeader, CardBody, CardFooter)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Additional CSS class names for custom styling"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"style"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:"Inline styles for custom styling"})]})]})]})}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"CardHeader, CardBody, CardFooter Props"}),e.jsx(r,{as:"p",size:"md",style:{marginBottom:"var(--space-md)",lineHeight:"1.6"},children:"All card section components (CardHeader, CardBody, CardFooter) accept the same props:"}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{backgroundColor:"var(--bg-surface)"},children:[e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Prop"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Type"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Default"}),e.jsx("th",{style:{padding:"var(--space-md)",textAlign:"left",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-weight-semibold)"},children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"children"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Content of the card section"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)",borderBottom:"1px solid var(--border-color)"},children:"Additional CSS class names for custom styling"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"style"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"var(--space-md)"},children:"Inline styles for custom styling"})]})]})]})})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Usage Examples"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Product Card"}),e.jsx(Ee,{children:`import { Card, CardHeader, CardBody, CardFooter, Text, Button, Image } from '@flowlabkit/ui';

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
</Card>`})]})})]}),bs=()=>{const[s,n]=p.useState("option1"),[i,l]=p.useState(!1),t=({size:x=16})=>e.jsx("svg",{width:x,height:x,viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"})}),m=({size:x=16})=>e.jsx("svg",{width:x,height:x,viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"})}),v=({size:x=16})=>e.jsx("svg",{width:x,height:x,viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"})}),b=({size:x=16})=>e.jsx("svg",{width:x,height:x,viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.50-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"})}),z=({size:x=16})=>e.jsx("svg",{width:x,height:x,viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"})});return e.jsxs("div",{style:{padding:"var(--space-lg)",maxWidth:"1200px"},children:[e.jsxs("div",{style:{marginBottom:"var(--space-2xl)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-md)",marginBottom:"var(--space-md)"},children:[e.jsx(r,{as:"h1",size:"3xl",weight:"bold",children:"Dropdown"}),e.jsx(c,{variant:"secondary",size:"sm",children:"Interactive Component"})]}),e.jsx(r,{as:"p",size:"lg",color:"secondary",style:{marginBottom:"var(--space-lg)"},children:"A flexible dropdown menu system with trigger element, content positioning, and keyboard navigation. Built with accessibility in mind and integrated with the FlowLabKit theme system."}),e.jsx("div",{style:{backgroundColor:"var(--accent-50)",border:"1px solid var(--accent-200)",borderRadius:"var(--radius-lg)",padding:"var(--space-md)",marginBottom:"var(--space-xl)"},children:e.jsxs(r,{size:"sm",weight:"medium",style:{color:"var(--accent-700)"},children:["💡 ",e.jsx("strong",{children:"Key Features:"})," Flexible positioning, keyboard navigation, click-outside-to-close, customizable triggers, and seamless theme integration."]})})]}),e.jsxs("div",{style:{marginBottom:"var(--space-2xl)"},children:[e.jsx(r,{as:"h2",size:"2xl",weight:"bold",style:{marginBottom:"var(--space-lg)"},children:"Interactive Demo"}),e.jsxs(o,{children:[e.jsx(F,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"Basic Dropdown"})}),e.jsxs(d,{children:[e.jsxs("div",{style:{display:"flex",gap:"var(--space-lg)",alignItems:"center",marginBottom:"var(--space-lg)"},children:[e.jsxs(_,{trigger:e.jsxs(w,{variant:"secondary",size:"md",children:["Actions ",e.jsx(z,{size:16})]}),children:[e.jsx(f,{leftIcon:e.jsx(t,{}),onClick:()=>alert("Edit clicked"),children:"Edit"}),e.jsx(f,{leftIcon:e.jsx(b,{}),rightIcon:"⌘C",onClick:()=>alert("Share clicked"),children:"Share"}),e.jsx(we,{}),e.jsx(f,{leftIcon:e.jsx(v,{}),onClick:()=>alert("Settings clicked"),children:"Settings"}),e.jsx(f,{leftIcon:e.jsx(m,{}),destructive:!0,onClick:()=>alert("Delete clicked"),children:"Delete"})]}),e.jsxs(_,{trigger:e.jsxs(w,{variant:"primary",size:"md",children:["Selected: ",s," ",e.jsx(z,{size:16})]}),children:[e.jsx(he,{children:"Choose Option"}),e.jsx(f,{rightIcon:s==="option1"?"✓":void 0,onClick:()=>n("option1"),children:"Option 1"}),e.jsx(f,{rightIcon:s==="option2"?"✓":void 0,onClick:()=>n("option2"),children:"Option 2"}),e.jsx(f,{rightIcon:s==="option3"?"✓":void 0,onClick:()=>n("option3"),children:"Option 3"})]}),e.jsx(_,{trigger:e.jsx(w,{variant:"outline",size:"md",disabled:!0,children:"Disabled Dropdown"}),disabled:!0,children:e.jsx(f,{children:"This won't show"})})]}),e.jsx(r,{size:"sm",color:"secondary",children:"Try the dropdowns above to see different trigger styles, positioning, and interactions."})]})]})]}),e.jsxs("div",{style:{marginBottom:"var(--space-2xl)"},children:[e.jsx(r,{as:"h2",size:"2xl",weight:"bold",style:{marginBottom:"var(--space-lg)"},children:"Positioning Options"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"var(--space-lg)"},children:[e.jsxs(o,{children:[e.jsx(F,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"Bottom Aligned (Default)"})}),e.jsxs(d,{children:[e.jsxs("div",{style:{display:"flex",gap:"var(--space-md)",justifyContent:"space-around"},children:[e.jsxs(_,{trigger:e.jsx(w,{size:"sm",children:"Start"}),align:"start",side:"bottom",children:[e.jsx(f,{children:"Item 1"}),e.jsx(f,{children:"Item 2"}),e.jsx(f,{children:"Item 3"})]}),e.jsxs(_,{trigger:e.jsx(w,{size:"sm",children:"Center"}),align:"center",side:"bottom",children:[e.jsx(f,{children:"Item 1"}),e.jsx(f,{children:"Item 2"}),e.jsx(f,{children:"Item 3"})]}),e.jsxs(_,{trigger:e.jsx(w,{size:"sm",children:"End"}),align:"end",side:"bottom",children:[e.jsx(f,{children:"Item 1"}),e.jsx(f,{children:"Item 2"}),e.jsx(f,{children:"Item 3"})]})]}),e.jsx(r,{size:"sm",weight:"medium",style:{fontFamily:"monospace",backgroundColor:"var(--bg-secondary)",padding:"var(--space-sm)",borderRadius:"var(--radius-sm)",marginTop:"var(--space-md)"},children:`<Dropdown align="start|center|end" side="bottom">
  <DropdownItem>Item</DropdownItem>
</Dropdown>`})]})]}),e.jsxs(o,{children:[e.jsx(F,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"Side Positioning"})}),e.jsxs(d,{children:[e.jsxs("div",{style:{display:"flex",gap:"var(--space-md)",justifyContent:"space-around"},children:[e.jsxs(_,{trigger:e.jsx(w,{size:"sm",children:"Left"}),align:"start",side:"left",children:[e.jsx(f,{children:"Item 1"}),e.jsx(f,{children:"Item 2"}),e.jsx(f,{children:"Item 3"})]}),e.jsxs(_,{trigger:e.jsx(w,{size:"sm",children:"Right"}),align:"start",side:"right",children:[e.jsx(f,{children:"Item 1"}),e.jsx(f,{children:"Item 2"}),e.jsx(f,{children:"Item 3"})]}),e.jsxs(_,{trigger:e.jsx(w,{size:"sm",children:"Top"}),align:"center",side:"top",children:[e.jsx(f,{children:"Item 1"}),e.jsx(f,{children:"Item 2"}),e.jsx(f,{children:"Item 3"})]})]}),e.jsx(r,{size:"sm",weight:"medium",style:{fontFamily:"monospace",backgroundColor:"var(--bg-secondary)",padding:"var(--space-sm)",borderRadius:"var(--radius-sm)",marginTop:"var(--space-md)"},children:`<Dropdown side="left|right|top|bottom">
  <DropdownItem>Item</DropdownItem>
</Dropdown>`})]})]})]})]}),e.jsxs("div",{style:{marginBottom:"var(--space-2xl)"},children:[e.jsx(r,{as:"h2",size:"2xl",weight:"bold",style:{marginBottom:"var(--space-lg)"},children:"Component Examples"}),e.jsxs("div",{style:{display:"grid",gap:"var(--space-lg)"},children:[e.jsxs(o,{children:[e.jsx(F,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"Context Menu Style"})}),e.jsxs(d,{children:[e.jsxs("div",{style:{display:"flex",gap:"var(--space-lg)",alignItems:"center",marginBottom:"var(--space-lg)"},children:[e.jsxs(_,{trigger:e.jsx("div",{style:{padding:"var(--space-md)",border:"2px dashed var(--border-color)",borderRadius:"var(--radius-md)",cursor:"pointer",textAlign:"center"},children:e.jsx(r,{size:"sm",children:"Right-click style menu"})}),children:[e.jsx(f,{leftIcon:e.jsx(t,{}),children:"Edit"}),e.jsx(f,{leftIcon:e.jsx(b,{}),children:"Duplicate"}),e.jsx(we,{}),e.jsx(f,{leftIcon:e.jsx(v,{}),children:"Properties"}),e.jsx(we,{}),e.jsx(f,{leftIcon:e.jsx(m,{}),destructive:!0,children:"Delete"})]}),e.jsx(r,{size:"sm",color:"secondary",style:{flex:1},children:"Perfect for context menus, right-click actions, and content management interfaces."})]}),e.jsx(r,{size:"sm",weight:"medium",style:{fontFamily:"monospace",backgroundColor:"var(--bg-secondary)",padding:"var(--space-sm)",borderRadius:"var(--radius-sm)"},children:`<Dropdown trigger={<div>Custom Trigger</div>}>
  <DropdownItem leftIcon={<Icon />}>Action</DropdownItem>
  <DropdownSeparator />
  <DropdownItem destructive>Delete</DropdownItem>
</Dropdown>`})]})]}),e.jsxs(o,{children:[e.jsx(F,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"Selection Menu with Labels"})}),e.jsxs(d,{children:[e.jsxs("div",{style:{display:"flex",gap:"var(--space-lg)",alignItems:"center",marginBottom:"var(--space-lg)"},children:[e.jsxs(_,{trigger:e.jsxs(w,{variant:"outline",size:"md",children:["Categories ",e.jsx(z,{size:16})]}),children:[e.jsx(he,{children:"Design"}),e.jsx(f,{children:"UI Components"}),e.jsx(f,{children:"Icons & Graphics"}),e.jsx(f,{children:"Templates"}),e.jsx(we,{}),e.jsx(he,{children:"Development"}),e.jsx(f,{children:"Frontend"}),e.jsx(f,{children:"Backend"}),e.jsx(f,{children:"DevOps"}),e.jsx(we,{}),e.jsx(he,{children:"Other"}),e.jsx(f,{children:"Documentation"}),e.jsx(f,{children:"Resources"})]}),e.jsx(r,{size:"sm",color:"secondary",style:{flex:1},children:"Organized dropdown with labeled sections for better navigation and grouping."})]}),e.jsx(r,{size:"sm",weight:"medium",style:{fontFamily:"monospace",backgroundColor:"var(--bg-secondary)",padding:"var(--space-sm)",borderRadius:"var(--radius-sm)"},children:`<Dropdown trigger={<Button>Menu</Button>}>
  <DropdownLabel>Section 1</DropdownLabel>
  <DropdownItem>Item 1</DropdownItem>
  <DropdownSeparator />
  <DropdownLabel>Section 2</DropdownLabel>
  <DropdownItem>Item 2</DropdownItem>
</Dropdown>`})]})]})]})]}),e.jsxs("div",{style:{marginBottom:"var(--space-2xl)"},children:[e.jsx(r,{as:"h2",size:"2xl",weight:"bold",style:{marginBottom:"var(--space-lg)"},children:"API Reference"}),e.jsxs(o,{style:{marginBottom:"var(--space-lg)"},children:[e.jsx(F,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"Dropdown Props"})}),e.jsx(d,{children:e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"var(--font-size-sm)"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid var(--border-color)"},children:[e.jsx("th",{style:{padding:"var(--space-sm)",textAlign:"left",fontWeight:"var(--font-weight-semibold)"},children:"Prop"}),e.jsx("th",{style:{padding:"var(--space-sm)",textAlign:"left",fontWeight:"var(--font-weight-semibold)"},children:"Type"}),e.jsx("th",{style:{padding:"var(--space-sm)",textAlign:"left",fontWeight:"var(--font-weight-semibold)"},children:"Default"}),e.jsx("th",{style:{padding:"var(--space-sm)",textAlign:"left",fontWeight:"var(--font-weight-semibold)"},children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"trigger"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"ReactNode"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"-"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Element that triggers the dropdown"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"children"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"ReactNode"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"-"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Dropdown content (items, separators, labels)"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"open"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"boolean"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"undefined"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Controlled open state"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"onOpenChange"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"(open: boolean) => void"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"-"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Called when open state changes"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"disabled"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"boolean"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"false"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Disable the dropdown"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"align"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"'start' | 'center' | 'end'"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"'start'"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Alignment relative to trigger"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"side"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"'top' | 'bottom' | 'left' | 'right'"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"'bottom'"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Side to open dropdown on"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"sideOffset"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"number"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"4"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Distance from trigger (px)"})]})]})]})})})]}),e.jsxs(o,{style:{marginBottom:"var(--space-lg)"},children:[e.jsx(F,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",children:"DropdownItem Props"})}),e.jsx(d,{children:e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"var(--font-size-sm)"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid var(--border-color)"},children:[e.jsx("th",{style:{padding:"var(--space-sm)",textAlign:"left",fontWeight:"var(--font-weight-semibold)"},children:"Prop"}),e.jsx("th",{style:{padding:"var(--space-sm)",textAlign:"left",fontWeight:"var(--font-weight-semibold)"},children:"Type"}),e.jsx("th",{style:{padding:"var(--space-sm)",textAlign:"left",fontWeight:"var(--font-weight-semibold)"},children:"Default"}),e.jsx("th",{style:{padding:"var(--space-sm)",textAlign:"left",fontWeight:"var(--font-weight-semibold)"},children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"leftIcon"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"ReactNode"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"-"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Icon displayed on the left"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"rightIcon"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"ReactNode"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"-"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Icon or text displayed on the right"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"disabled"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"boolean"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"false"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Disable the item"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"destructive"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"boolean"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"false"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Style as destructive action (red)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",color:"var(--accent-600)"},children:"onClick"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace",fontSize:"var(--font-size-xs)"},children:"() => void"}),e.jsx("td",{style:{padding:"var(--space-sm)",fontFamily:"monospace"},children:"-"}),e.jsx("td",{style:{padding:"var(--space-sm)"},children:"Click handler"})]})]})]})})})]})]}),e.jsxs("div",{style:{marginBottom:"var(--space-2xl)"},children:[e.jsx(r,{as:"h2",size:"2xl",weight:"bold",style:{marginBottom:"var(--space-lg)"},children:"Usage Guidelines"}),e.jsxs("div",{style:{display:"grid",gap:"var(--space-lg)"},children:[e.jsxs(o,{children:[e.jsx(F,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",style:{color:"var(--success-color)"},children:"✅ Best Practices"})}),e.jsx(d,{children:e.jsxs("ul",{style:{margin:0,paddingLeft:"var(--space-lg)"},children:[e.jsx("li",{style:{marginBottom:"var(--space-sm)"},children:e.jsx(r,{size:"sm",children:"Use consistent trigger styling (buttons, links, or custom elements)"})}),e.jsx("li",{style:{marginBottom:"var(--space-sm)"},children:e.jsx(r,{size:"sm",children:"Group related items with DropdownLabel and DropdownSeparator"})}),e.jsx("li",{style:{marginBottom:"var(--space-sm)"},children:e.jsx(r,{size:"sm",children:"Place destructive actions at the bottom with separators"})}),e.jsx("li",{style:{marginBottom:"var(--space-sm)"},children:e.jsx(r,{size:"sm",children:"Use icons consistently - either all items have icons or none do"})}),e.jsx("li",{style:{marginBottom:"var(--space-sm)"},children:e.jsx(r,{size:"sm",children:"Keep menu items concise and action-oriented"})}),e.jsx("li",{children:e.jsx(r,{size:"sm",children:"Consider keyboard navigation - items are focusable with arrow keys"})})]})})]}),e.jsxs(o,{children:[e.jsx(F,{children:e.jsx(r,{as:"h3",size:"lg",weight:"semibold",style:{color:"var(--error-color)"},children:"❌ Avoid"})}),e.jsx(d,{children:e.jsxs("ul",{style:{margin:0,paddingLeft:"var(--space-lg)"},children:[e.jsx("li",{style:{marginBottom:"var(--space-sm)"},children:e.jsx(r,{size:"sm",children:"Too many items without organization (use labels and separators)"})}),e.jsx("li",{style:{marginBottom:"var(--space-sm)"},children:e.jsx(r,{size:"sm",children:"Inconsistent positioning - stick to one alignment pattern"})}),e.jsx("li",{style:{marginBottom:"var(--space-sm)"},children:e.jsx(r,{size:"sm",children:"Opening dropdowns outside viewport bounds"})}),e.jsx("li",{style:{marginBottom:"var(--space-sm)"},children:e.jsx(r,{size:"sm",children:"Nesting dropdowns more than one level deep"})}),e.jsx("li",{children:e.jsx(r,{size:"sm",children:"Using for complex forms - consider modal dialogs instead"})})]})})]})]})]}),e.jsxs(o,{children:[e.jsx(F,{children:e.jsx(r,{as:"h2",size:"xl",weight:"semibold",children:"Accessibility"})}),e.jsx(d,{children:e.jsxs("div",{style:{display:"grid",gap:"var(--space-md)"},children:[e.jsxs("div",{children:[e.jsx(r,{size:"sm",weight:"medium",style:{marginBottom:"var(--space-xs)"},children:"Keyboard Navigation"}),e.jsxs(r,{size:"sm",color:"secondary",children:[e.jsx("strong",{children:"Space/Enter:"})," Open dropdown • ",e.jsx("strong",{children:"Escape:"})," Close dropdown •",e.jsx("strong",{children:"Arrow Keys:"})," Navigate items • ",e.jsx("strong",{children:"Enter:"})," Select item"]})]}),e.jsxs("div",{children:[e.jsx(r,{size:"sm",weight:"medium",style:{marginBottom:"var(--space-xs)"},children:"ARIA Support"}),e.jsx(r,{size:"sm",color:"secondary",children:'Includes proper ARIA attributes: aria-expanded, aria-haspopup, role="menu", and role="menuitem" for screen readers.'})]}),e.jsxs("div",{children:[e.jsx(r,{size:"sm",weight:"medium",style:{marginBottom:"var(--space-xs)"},children:"Focus Management"}),e.jsx(r,{size:"sm",color:"secondary",children:"Focus is properly managed when opening/closing dropdowns and navigating between items."})]}),e.jsxs("div",{children:[e.jsx(r,{size:"sm",weight:"medium",style:{marginBottom:"var(--space-xs)"},children:"Click Outside"}),e.jsx(r,{size:"sm",color:"secondary",children:"Dropdown closes when clicking outside, providing intuitive interaction patterns."})]})]})})]})]})},oe=({children:s,language:n="bash"})=>e.jsx("pre",{style:{backgroundColor:"var(--bg-elevated)",color:"var(--text-primary)",padding:"var(--space-lg)",borderRadius:"var(--radius-md)",border:"1px solid var(--border-color)",overflow:"auto",fontSize:"var(--font-size-sm)",fontFamily:"Consolas, Monaco, 'Courier New', monospace",margin:"var(--space-md) 0",lineHeight:"1.5"},children:e.jsx("code",{children:s})}),fs=()=>e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"var(--space-xl)"},children:[e.jsx(r,{as:"h1",size:"3xl",weight:"bold",style:{marginBottom:"var(--space-sm)"},children:"Theme System"}),e.jsx(r,{as:"p",size:"lg",color:"secondary",children:"Comprehensive theming with CSS variables, 8 built-in themes, and full customization"})]}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Overview"}),e.jsx(r,{as:"p",size:"md",style:{marginBottom:"var(--space-lg)",lineHeight:"1.6"},children:"FlowLabKit UI features a powerful theme system built on CSS custom properties (variables) that enables runtime theme switching, comprehensive customization, and consistent design tokens across your application."}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-md)",flexWrap:"wrap"},children:[e.jsx(c,{variant:"primary",children:"8 Built-in Themes"}),e.jsx(c,{variant:"success",children:"Runtime Switching"}),e.jsx(c,{variant:"info",children:"CSS Variables"}),e.jsx(c,{variant:"secondary",children:"100+ Tokens"}),e.jsx(c,{variant:"warning",children:"LocalStorage Persistence"})]})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Available Themes"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"var(--space-md)"},children:[e.jsxs("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)"},children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"🌅 Light"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",children:"Clean, professional default theme for general applications"})]}),e.jsxs("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)"},children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"🌙 Dark"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",children:"Modern dark theme for reduced eye strain and focus"})]}),e.jsxs("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)"},children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"🌊 Ocean"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",children:"Calming blues and cyans for data-focused applications"})]}),e.jsxs("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)"},children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"🌲 Forest"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",children:"Natural greens for wellness and environmental apps"})]}),e.jsxs("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)"},children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"🌅 Sunset"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",children:"Warm oranges and pinks for creative applications"})]}),e.jsxs("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)"},children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"💜 Lavender"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",children:"Soft purples for elegant, dreamy interfaces"})]}),e.jsxs("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)"},children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"🤖 Cyberpunk"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",children:"Neon highlights on dark backgrounds for tech/gaming"})]}),e.jsxs("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)"},children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"🍂 Autumn"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",children:"Cozy browns and golds for seasonal warmth"})]})]})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Basic Usage"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"ThemeProvider Setup"}),e.jsx(oe,{language:"tsx",children:`import React from 'react';
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
}`})]})})]}),fe=({children:s,language:n="bash"})=>e.jsx("pre",{style:{backgroundColor:"var(--bg-elevated)",color:"var(--text-primary)",padding:"var(--space-lg)",borderRadius:"var(--radius-md)",border:"1px solid var(--border-color)",overflow:"auto",fontSize:"var(--font-size-sm)",fontFamily:"Consolas, Monaco, 'Courier New', monospace",margin:"var(--space-md) 0",lineHeight:"1.5"},children:e.jsx("code",{children:s})}),wr=()=>e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"var(--space-xl)"},children:[e.jsx(r,{as:"h1",size:"3xl",weight:"bold",style:{marginBottom:"var(--space-sm)"},children:"Installation"}),e.jsx(r,{as:"p",size:"lg",color:"secondary",children:"Get started with FlowLabKit UI in your React application"})]}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Package Overview"}),e.jsx(r,{as:"p",size:"md",style:{marginBottom:"var(--space-lg)",lineHeight:"1.6"},children:"FlowLabKit UI is a comprehensive React UI library that includes a powerful theme system, essential components, and modular architecture. Choose the installation method that best fits your needs."}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-md)",flexWrap:"wrap"},children:[e.jsx(c,{variant:"primary",children:"React 18+ Required"}),e.jsx(c,{variant:"success",children:"TypeScript Ready"}),e.jsx(c,{variant:"info",children:"Tree-Shakable"}),e.jsx(c,{variant:"secondary",children:"8 Built-in Themes"})]})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-sm)",marginBottom:"var(--space-md)"},children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{margin:0},children:"Complete Package"}),e.jsx(c,{variant:"success",children:"Recommended"})]}),e.jsx(r,{as:"p",size:"md",style:{marginBottom:"var(--space-md)",lineHeight:"1.6"},children:"Install everything in one package - theme system, all themes, and UI components (~150KB):"}),e.jsx(fe,{children:"npm install @flowlabkit/ui"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"Quick Start"}),e.jsx(fe,{language:"tsx",children:`import React from 'react';
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
}`})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-sm)",marginBottom:"var(--space-md)"},children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{margin:0},children:"Modular Installation"}),e.jsx(c,{variant:"info",children:"Smaller Bundle"})]}),e.jsx(r,{as:"p",size:"md",style:{marginBottom:"var(--space-md)",lineHeight:"1.6"},children:"Install only what you need for optimal bundle sizes:"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Core Only (45KB)"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",style:{marginBottom:"var(--space-sm)"},children:"Theme system + Light/Dark themes only"}),e.jsx(fe,{children:"npm install @flowlabkit/ui"}),e.jsx(fe,{language:"tsx",children:"import { ThemeProvider, useTheme, lightTheme, darkTheme } from '@flowlabkit/ui/core';"}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"Core + Additional Themes (65KB)"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",style:{marginBottom:"var(--space-sm)"},children:"Add beautiful themes as needed"}),e.jsx(fe,{language:"tsx",children:`import { ThemeProvider } from '@flowlabkit/ui/core';
import { oceanTheme, cyberpunkTheme, forestTheme } from '@flowlabkit/ui/themes';`}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"Core + UI Components (95KB)"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",style:{marginBottom:"var(--space-sm)"},children:"Theme system + essential components"}),e.jsx(fe,{language:"tsx",children:`import { ThemeProvider, lightTheme } from '@flowlabkit/ui/core';
import { Button, Input, Card, Badge } from '@flowlabkit/ui/components';`})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Requirements"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"var(--space-md)"},children:[e.jsxs("div",{children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"React Version"}),e.jsx(c,{variant:"primary",children:"React 18.0.0+"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:"Hooks and concurrent features required"})]}),e.jsxs("div",{children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"TypeScript"}),e.jsx(c,{variant:"info",children:"TypeScript 4.0+"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:"Recommended for full type safety"})]}),e.jsxs("div",{children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Browser Support"}),e.jsx(c,{variant:"secondary",children:"Modern Browsers"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",style:{marginTop:"var(--space-xs)"},children:"CSS Custom Properties support required"})]})]})]})}),e.jsx(o,{style:{marginBottom:"var(--space-xl)"},children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Bundle Size Comparison"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"var(--space-md)"},children:[e.jsxs("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)"},children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Full Package"}),e.jsx(r,{as:"p",size:"lg",weight:"bold",color:"primary",children:"~150KB"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",children:"Everything included"})]}),e.jsxs("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)"},children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Core Only"}),e.jsx(r,{as:"p",size:"lg",weight:"bold",color:"success",children:"~45KB"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",children:"Theme system + light/dark"})]}),e.jsxs("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)"},children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Core + 2 Themes"}),e.jsx(r,{as:"p",size:"lg",weight:"bold",color:"info",children:"~65KB"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",children:"Core + additional themes"})]}),e.jsxs("div",{style:{padding:"var(--space-md)",backgroundColor:"var(--bg-elevated)",borderRadius:"var(--radius-md)"},children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"Core + Components"}),e.jsx(r,{as:"p",size:"lg",weight:"bold",color:"warning",children:"~95KB"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",children:"Core + all UI components"})]})]})]})}),e.jsx(o,{children:e.jsxs(d,{children:[e.jsx(r,{as:"h2",size:"xl",weight:"semibold",style:{marginBottom:"var(--space-md)"},children:"Next Steps"}),e.jsx(r,{as:"p",size:"md",style:{marginBottom:"var(--space-md)",lineHeight:"1.6"},children:"After installation, explore these key areas:"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"var(--space-md)"},children:[e.jsxs("div",{children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"📚 Theme System"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",children:"Learn about theme configuration, CSS variables, and customization"})]}),e.jsxs("div",{children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"🧩 Components"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",children:"Explore all available components with examples and API documentation"})]}),e.jsxs("div",{children:[e.jsx(r,{as:"h3",size:"md",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"🎨 Themes"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",children:"Discover 8 built-in themes and learn how to create custom themes"})]})]})]})})]}),Ze=({children:s})=>e.jsx("div",{style:{backgroundColor:"var(--bg-surface)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"var(--space-md)",fontFamily:"monospace",fontSize:"var(--font-size-sm)",whiteSpace:"pre-wrap",overflowX:"auto"},children:s}),ws=()=>{const s=yr(),n=jr(),i=ts(),l=br(),t=as({xs:"📱 Mobile Portrait",sm:"📱 Mobile Landscape",md:"📺 Tablet",lg:"💻 Desktop",xl:"🖥️ Large Desktop",xxl:"🖥️ Extra Large",default:"🖥️ Desktop"});return e.jsxs("div",{style:{padding:"var(--space-md)",display:"flex",flexDirection:"column",gap:"var(--space-lg)"},children:[e.jsx(r,{as:"h2",size:"xl",weight:"bold",children:"Current Device Info"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"var(--space-md)"},children:[e.jsx(o,{children:e.jsxs(d,{children:[e.jsx(r,{weight:"semibold",children:"Breakpoint"}),e.jsxs(r,{size:"sm",color:"secondary",children:[s," (",t,")"]})]})}),e.jsx(o,{children:e.jsxs(d,{children:[e.jsx(r,{weight:"semibold",children:"Device Type"}),e.jsx(r,{size:"sm",color:"secondary",children:n?"Mobile/Touch":"Desktop"})]})}),e.jsx(o,{children:e.jsxs(d,{children:[e.jsx(r,{weight:"semibold",children:"Orientation"}),e.jsx(r,{size:"sm",color:"secondary",children:i})]})}),e.jsx(o,{children:e.jsxs(d,{children:[e.jsx(r,{weight:"semibold",children:"Hover Support"}),e.jsx(r,{size:"sm",color:"secondary",children:l?"Yes":"No"})]})})]})]})},zs=()=>e.jsxs("div",{style:{padding:"var(--space-lg)",maxWidth:"1200px"},children:[e.jsxs("div",{style:{marginBottom:"var(--space-2xl)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-md)",marginBottom:"var(--space-md)"},children:[e.jsx(r,{as:"h1",size:"3xl",weight:"bold",children:"Mobile Support"}),e.jsx(c,{variant:"secondary",size:"sm",children:"Responsive System"})]}),e.jsx(r,{as:"p",size:"lg",color:"secondary",style:{marginBottom:"var(--space-lg)"},children:"Comprehensive mobile support with responsive breakpoints, touch optimizations, and device-aware components."}),e.jsxs("div",{style:{backgroundColor:"var(--bg-surface)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"var(--space-md)",display:"flex",gap:"var(--space-md)",flexWrap:"wrap"},children:[e.jsx(c,{variant:"primary",children:"Touch Targets"}),e.jsx(c,{variant:"success",children:"Responsive Hooks"}),e.jsx(c,{variant:"info",children:"Auto-sizing"}),e.jsx(c,{variant:"secondary",children:"Safe Areas"})]})]}),e.jsxs(o,{style:{marginBottom:"var(--space-xl)"},children:[e.jsx(F,{children:e.jsx(r,{as:"h2",size:"xl",weight:"semibold",children:"Live Device Detection"})}),e.jsxs(d,{children:[e.jsx(r,{as:"p",size:"md",style:{marginBottom:"var(--space-lg)",lineHeight:"1.6"},children:"The components automatically detect your device type and adjust accordingly. Resize your browser or view on different devices to see the changes."}),e.jsx(ws,{})]})]}),e.jsxs(o,{style:{marginBottom:"var(--space-xl)"},children:[e.jsx(F,{children:e.jsx(r,{as:"h2",size:"xl",weight:"semibold",children:"Responsive Hooks"})}),e.jsxs(d,{children:[e.jsx(r,{as:"p",size:"md",style:{marginBottom:"var(--space-lg)",lineHeight:"1.6"},children:"Use these hooks to create responsive and mobile-aware experiences."}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"Available Hooks"}),e.jsx(Ze,{children:`import { 
  useBreakpoint,
  useIsMobile,
  useOrientation,
  useResponsiveValue,
  useHoverSupport 
} from '@flowlabkit/ui';

function ResponsiveComponent() {
  const breakpoint = useBreakpoint(); // 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  const isMobile = useIsMobile(); // boolean
  const orientation = useOrientation(); // 'portrait' | 'landscape'
  const supportsHover = useHoverSupport(); // boolean
  
  const spacing = useResponsiveValue({
    xs: 'var(--space-sm)',
    md: 'var(--space-md)', 
    lg: 'var(--space-lg)',
    default: 'var(--space-md)'
  });
  
  return (
    <div style={{ padding: spacing }}>
      {isMobile ? 'Mobile View' : 'Desktop View'}
    </div>
  );
}`})]})]}),e.jsxs(o,{style:{marginBottom:"var(--space-xl)"},children:[e.jsx(F,{children:e.jsx(r,{as:"h2",size:"xl",weight:"semibold",children:"Mobile-Optimized Components"})}),e.jsxs(d,{children:[e.jsx(r,{as:"p",size:"md",style:{marginBottom:"var(--space-lg)",lineHeight:"1.6"},children:"Components automatically adapt for mobile devices with larger touch targets, optimized spacing, and touch-friendly interactions."}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-md)",marginBottom:"var(--space-lg)"},children:[e.jsxs("div",{style:{display:"flex",gap:"var(--space-md)",flexWrap:"wrap"},children:[e.jsx(w,{variant:"primary",mobileOptimized:!0,children:"Mobile Optimized"}),e.jsx(w,{variant:"secondary",mobileOptimized:!1,children:"Standard Button"}),e.jsx(w,{variant:"outline",size:"sm",mobileOptimized:!0,children:"Small → Auto-sized"})]}),e.jsx(N,{placeholder:"Touch-friendly input",style:{minHeight:"var(--touch-target-size)",fontSize:"var(--font-size-base)"}})]}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"Button Mobile Optimization"}),e.jsx(Ze,{children:`import { Button } from '@flowlabkit/ui';

// Automatically adjusts for mobile
<Button variant="primary" mobileOptimized={true}>
  Touch-Friendly Button
</Button>

// Small buttons auto-size to medium on mobile for better touch targets
<Button size="sm" mobileOptimized={true}>
  Auto-sized Button
</Button>

// Disable mobile optimizations if needed
<Button mobileOptimized={false}>
  Standard Button
</Button>`})]})]}),e.jsxs(o,{style:{marginBottom:"var(--space-xl)"},children:[e.jsx(F,{children:e.jsx(r,{as:"h2",size:"xl",weight:"semibold",children:"Responsive Breakpoints"})}),e.jsxs(d,{children:[e.jsx(r,{as:"p",size:"md",style:{marginBottom:"var(--space-lg)",lineHeight:"1.6"},children:"Standard breakpoints designed for modern devices and usage patterns."}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"var(--space-md)",marginBottom:"var(--space-lg)"},children:[e.jsx(o,{children:e.jsxs(d,{children:[e.jsx(r,{weight:"semibold",children:"XS - Mobile Portrait"}),e.jsx(r,{size:"sm",color:"secondary",children:"320px+ • Phones in portrait"})]})}),e.jsx(o,{children:e.jsxs(d,{children:[e.jsx(r,{weight:"semibold",children:"SM - Mobile Landscape"}),e.jsx(r,{size:"sm",color:"secondary",children:"480px+ • Phones in landscape"})]})}),e.jsx(o,{children:e.jsxs(d,{children:[e.jsx(r,{weight:"semibold",children:"MD - Tablet"}),e.jsx(r,{size:"sm",color:"secondary",children:"768px+ • Tablets and small laptops"})]})}),e.jsx(o,{children:e.jsxs(d,{children:[e.jsx(r,{weight:"semibold",children:"LG - Desktop"}),e.jsx(r,{size:"sm",color:"secondary",children:"1024px+ • Laptops and desktops"})]})}),e.jsx(o,{children:e.jsxs(d,{children:[e.jsx(r,{weight:"semibold",children:"XL - Large Desktop"}),e.jsx(r,{size:"sm",color:"secondary",children:"1200px+ • Large screens"})]})}),e.jsx(o,{children:e.jsxs(d,{children:[e.jsx(r,{weight:"semibold",children:"XXL - Extra Large"}),e.jsx(r,{size:"sm",color:"secondary",children:"1400px+ • Ultra-wide displays"})]})})]}),e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)",marginTop:"var(--space-lg)"},children:"CSS Variables"}),e.jsx(Ze,{children:`/* Available breakpoint variables */
--breakpoint-xs: 320px;
--breakpoint-sm: 480px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1200px;
--breakpoint-xxl: 1400px;

/* Mobile-specific variables */
--touch-target-size: 44px;
--tap-highlight-color: rgba(59, 130, 246, 0.15);
--safe-area-inset-top: env(safe-area-inset-top, 0px);
--safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);`})]})]}),e.jsxs(o,{style:{marginBottom:"var(--space-xl)"},children:[e.jsx(F,{children:e.jsx(r,{as:"h2",size:"xl",weight:"semibold",children:"Mobile Best Practices"})}),e.jsx(d,{children:e.jsxs("div",{style:{display:"grid",gap:"var(--space-md)"},children:[e.jsxs("div",{children:[e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"✅ Do"}),e.jsxs("ul",{style:{margin:0,paddingLeft:"var(--space-lg)"},children:[e.jsx("li",{style:{marginBottom:"var(--space-sm)"},children:e.jsx(r,{size:"sm",children:"Use minimum 44px touch targets for interactive elements"})}),e.jsx("li",{style:{marginBottom:"var(--space-sm)"},children:e.jsx(r,{size:"sm",children:"Enable mobile optimization on components by default"})}),e.jsx("li",{style:{marginBottom:"var(--space-sm)"},children:e.jsx(r,{size:"sm",children:"Test on actual devices, not just browser resize"})}),e.jsx("li",{style:{marginBottom:"var(--space-sm)"},children:e.jsx(r,{size:"sm",children:"Use responsive hooks for device-specific logic"})}),e.jsx("li",{children:e.jsx(r,{size:"sm",children:"Respect safe areas on modern devices"})})]})]}),e.jsxs("div",{children:[e.jsx(r,{as:"h3",size:"lg",weight:"medium",style:{marginBottom:"var(--space-sm)"},children:"❌ Don't"}),e.jsxs("ul",{style:{margin:0,paddingLeft:"var(--space-lg)"},children:[e.jsx("li",{style:{marginBottom:"var(--space-sm)"},children:e.jsx(r,{size:"sm",children:"Rely only on hover states for important interactions"})}),e.jsx("li",{style:{marginBottom:"var(--space-sm)"},children:e.jsx(r,{size:"sm",children:"Use very small touch targets on mobile"})}),e.jsx("li",{style:{marginBottom:"var(--space-sm)"},children:e.jsx(r,{size:"sm",children:"Ignore orientation changes"})}),e.jsx("li",{children:e.jsx(r,{size:"sm",children:"Assume desktop behavior on mobile devices"})})]})]})]})})]})]}),er=[{id:"installation",label:"Installation",category:"Getting Started",component:wr},{id:"theme-system",label:"Theme System",category:"Getting Started",component:fs},{id:"mobile-support",label:"Mobile Support",category:"Getting Started",component:zs},{id:"button",label:"Button",category:"Form Components",component:cs},{id:"input",label:"Input",category:"Form Components",component:ms},{id:"text",label:"Text",category:"Display Components",component:hs},{id:"badge",label:"Badge",category:"Display Components",component:ps},{id:"image",label:"Image",category:"Display Components",component:us},{id:"video",label:"Video",category:"Display Components",component:ys},{id:"link",label:"Link",category:"Navigation Components",component:xs},{id:"dropdown",label:"Dropdown",category:"Navigation Components",component:bs},{id:"spinner",label:"Spinner",category:"Feedback Components",component:gs},{id:"loading-indicator",label:"LoadingIndicator",category:"Feedback Components",component:vs},{id:"card",label:"Card",category:"Layout Components",component:js}],Bs=Array.from(new Set(er.map(s=>s.category))),Ss=()=>{const[s,n]=p.useState("installation"),[i,l]=p.useState(new Set(["Getting Started"])),[t,m]=p.useState(!1),v=x=>{const h=new Set(i);h.has(x)?h.delete(x):h.add(x),l(h)},z=er.find(x=>x.id===s)?.component||wr;return e.jsxs("div",{style:{display:"flex",height:"100vh",backgroundColor:"var(--bg-app)",color:"var(--text-primary)",fontFamily:"var(--font-family)"},children:[e.jsxs("div",{style:{width:t?"60px":"300px",backgroundColor:"var(--bg-surface)",borderRight:"1px solid var(--border-color)",transition:"width 0.3s ease",overflow:"hidden",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{style:{padding:"var(--space-lg)",borderBottom:"1px solid var(--border-color)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[!t&&e.jsxs("div",{children:[e.jsx(r,{as:"h1",size:"lg",weight:"bold",style:{margin:0},children:"FlowLabKit UI"}),e.jsx(r,{as:"p",size:"sm",color:"secondary",style:{margin:0,marginTop:"var(--space-xs)"},children:"Documentation"})]}),e.jsx(w,{variant:"ghost",size:"sm",onClick:()=>m(!t),style:{padding:"var(--space-xs)"},children:t?"→":"←"})]}),e.jsx("div",{style:{flex:1,overflowY:"auto",padding:t?"var(--space-sm)":"var(--space-lg)"},children:Bs.map(x=>e.jsxs("div",{style:{marginBottom:"var(--space-md)"},children:[!t&&e.jsxs("button",{onClick:()=>v(x),style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"var(--space-sm)",backgroundColor:"transparent",border:"none",color:"var(--text-secondary)",cursor:"pointer",borderRadius:"var(--radius-sm)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-semibold)",textTransform:"uppercase",letterSpacing:"0.05em"},children:[x,e.jsx("span",{style:{transform:i.has(x)?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.2s ease"},children:"▼"})]}),(t||i.has(x))&&e.jsx("div",{style:{marginTop:t?0:"var(--space-sm)"},children:er.filter(h=>h.category===x).map(h=>e.jsx("button",{onClick:()=>n(h.id),style:{width:"100%",display:"flex",alignItems:"center",padding:t?"var(--space-sm)":"var(--space-sm) var(--space-md)",backgroundColor:s===h.id?"var(--accent-100)":"transparent",border:s===h.id?"1px solid var(--accent-300)":"1px solid transparent",color:s===h.id?"var(--accent-700)":"var(--text-primary)",cursor:"pointer",borderRadius:"var(--radius-sm)",marginBottom:"var(--space-xs)",fontSize:"var(--font-size-sm)",textAlign:"left",transition:"all 0.2s ease",justifyContent:t?"center":"flex-start"},onMouseEnter:E=>{s!==h.id&&(E.currentTarget.style.backgroundColor="var(--bg-hover)")},onMouseLeave:E=>{s!==h.id&&(E.currentTarget.style.backgroundColor="transparent")},title:t?h.label:void 0,children:t?h.label.charAt(0):h.label},h.id))})]},x))})]}),e.jsx("div",{style:{flex:1,overflow:"auto",backgroundColor:"var(--bg-app)"},children:e.jsx("div",{style:{width:"100%",padding:"var(--space-xl)"},children:e.jsx(z,{})})})]})},Cs=()=>e.jsx("div",{style:{margin:"calc(-1 * var(--space-lg))",minHeight:"calc(100vh - 200px)"},children:e.jsx(Ss,{})}),ks=({currentPage:s,onPageChange:n})=>{const i=[{id:"themes",label:"Themes",icon:"🎨"},{id:"components",label:"Components",icon:"🧩"},{id:"installation",label:"Installation",icon:"📦"},{id:"documentation",label:"Documentation",icon:"📚"}];return e.jsx("nav",{style:{backgroundColor:"var(--bg-elevated)",borderBottom:"1px solid var(--border-color)",padding:"0 var(--space-lg)"},children:e.jsx("div",{style:{maxWidth:"1200px",margin:"0 auto",display:"flex",gap:"var(--space-xs)"},children:i.map(l=>e.jsxs("button",{onClick:()=>n(l.id),style:{background:s===l.id?"var(--accent-500)":"transparent",color:s===l.id?"var(--text-on-accent)":"var(--text-primary)",border:"none",padding:"var(--space-md) var(--space-lg)",borderRadius:"0",cursor:"pointer",fontSize:"var(--font-size-sm)",fontWeight:s===l.id?"var(--font-weight-semibold)":"var(--font-weight-normal)",display:"flex",alignItems:"center",gap:"var(--space-xs)",transition:"var(--transition-base)",borderBottom:s===l.id?"2px solid var(--accent-500)":"2px solid transparent"},children:[e.jsx("span",{children:l.icon}),l.label]},l.id))})})},Ts=({currentLightTheme:s,currentDarkTheme:n,onLightThemeChange:i,onDarkThemeChange:l,isDark:t,onToggleDark:m,fontSize:v,onFontSizeChange:b,compactMode:z,onCompactModeChange:x})=>e.jsxs("div",{style:{display:"flex",gap:"var(--space-md)",alignItems:"center",flexWrap:"wrap"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-xs)"},children:[e.jsx("label",{style:{fontSize:"var(--font-size-xs)",color:"var(--text-secondary)",fontWeight:"var(--font-weight-medium)"},children:"Light Theme"}),e.jsx("select",{value:s,onChange:h=>i(h.target.value),style:{backgroundColor:"var(--bg-surface)",color:"var(--text-primary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"var(--space-sm) var(--space-md)",fontSize:"var(--font-size-sm)",cursor:"pointer",minWidth:"120px"},children:gr.map(h=>e.jsx("option",{value:h,children:h.charAt(0).toUpperCase()+h.slice(1)},h))})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-xs)"},children:[e.jsx("label",{style:{fontSize:"var(--font-size-xs)",color:"var(--text-secondary)",fontWeight:"var(--font-weight-medium)"},children:"Dark Theme"}),e.jsx("select",{value:n,onChange:h=>l(h.target.value),style:{backgroundColor:"var(--bg-surface)",color:"var(--text-primary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"var(--space-sm) var(--space-md)",fontSize:"var(--font-size-sm)",cursor:"pointer",minWidth:"120px"},children:gr.map(h=>e.jsx("option",{value:h,children:h.charAt(0).toUpperCase()+h.slice(1)},h))})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-xs)"},children:[e.jsx("label",{style:{fontSize:"var(--font-size-xs)",color:"var(--text-secondary)",fontWeight:"var(--font-weight-medium)"},children:"Font Size"}),e.jsxs("select",{value:v,onChange:h=>b(h.target.value),style:{backgroundColor:"var(--bg-surface)",color:"var(--text-primary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"var(--space-sm) var(--space-md)",fontSize:"var(--font-size-sm)",cursor:"pointer",minWidth:"80px"},children:[e.jsx("option",{value:"small",children:"Small"}),e.jsx("option",{value:"medium",children:"Medium"}),e.jsx("option",{value:"large",children:"Large"})]})]}),e.jsxs("button",{onClick:()=>x(!z),style:{backgroundColor:z?"var(--accent-500)":"var(--bg-surface)",color:z?"var(--text-on-accent)":"var(--text-primary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"var(--space-sm) var(--space-md)",fontSize:"var(--font-size-sm)",cursor:"pointer",display:"flex",alignItems:"center",gap:"var(--space-xs)",transition:"var(--transition-base)"},children:["📐",z?"Compact":"Standard"]}),e.jsxs("button",{onClick:m,style:{backgroundColor:t?"var(--accent-500)":"var(--bg-surface)",color:t?"var(--text-on-accent)":"var(--text-primary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"var(--space-sm) var(--space-md)",fontSize:"var(--font-size-sm)",cursor:"pointer",display:"flex",alignItems:"center",gap:"var(--space-xs)",transition:"var(--transition-base)"},children:[t?"🌙":"☀️",t?"Dark":"Light"]})]}),Fs=({size:s=32,className:n=""})=>e.jsxs("svg",{width:s,height:s,viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",className:n,children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"flowGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"var(--accent-500)",stopOpacity:1}}),e.jsx("stop",{offset:"50%",style:{stopColor:"var(--accent-400)",stopOpacity:1}}),e.jsx("stop",{offset:"100%",style:{stopColor:"var(--accent-600)",stopOpacity:1}})]}),e.jsxs("linearGradient",{id:"accentGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"var(--accent-300)",stopOpacity:.8}}),e.jsx("stop",{offset:"100%",style:{stopColor:"var(--accent-700)",stopOpacity:.8}})]}),e.jsxs("radialGradient",{id:"bgGradient",cx:"50%",cy:"50%",r:"50%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"var(--bg-elevated)",stopOpacity:1}}),e.jsx("stop",{offset:"100%",style:{stopColor:"var(--bg-surface)",stopOpacity:1}})]})]}),e.jsx("circle",{cx:"16",cy:"16",r:"15",fill:"url(#bgGradient)",stroke:"url(#flowGradient)",strokeWidth:"0.5"}),e.jsx("path",{d:"M6 20 Q10 12, 16 16 Q22 20, 26 12",stroke:"url(#flowGradient)",strokeWidth:"2.5",fill:"none",strokeLinecap:"round"}),e.jsx("path",{d:"M8 24 Q12 18, 16 20 Q20 22, 24 18",stroke:"url(#flowGradient)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",opacity:"0.6"}),e.jsx("rect",{x:"4",y:"8",width:"4",height:"4",rx:"1",fill:"url(#accentGradient)"}),e.jsx("rect",{x:"14",y:"6",width:"4",height:"4",rx:"1",fill:"url(#accentGradient)"}),e.jsx("rect",{x:"24",y:"8",width:"4",height:"4",rx:"1",fill:"url(#accentGradient)"}),e.jsx("path",{d:"M12 4 L12 8 L10 12 L10 14 Q10 15, 11 15 L17 15 Q18 15, 18 14 L18 12 L16 8 L16 4 Z",fill:"url(#flowGradient)",opacity:"0.3"}),e.jsx("circle",{cx:"8",cy:"14",r:"1",fill:"var(--accent-500)",opacity:"0.7"}),e.jsx("circle",{cx:"24",cy:"24",r:"1",fill:"var(--accent-400)",opacity:"0.7"}),e.jsx("circle",{cx:"6",cy:"26",r:"0.8",fill:"var(--accent-600)",opacity:"0.7"}),e.jsx("circle",{cx:"26",cy:"26",r:"0.8",fill:"var(--accent-300)",opacity:"0.7"})]});function Is(){const[s,n]=p.useState("themes"),{setLightTheme:i,setDarkTheme:l,setMode:t,setFontSize:m,setCompactMode:v,config:b,themeName:z,theme:x}=ee(),[h,E]=p.useState("light"),[y,V]=p.useState("dark");console.log("Current theme info:",{themeName:z,config:b,themeObject:x});const A=B=>{const g=ze[B];g&&(console.log("Changing light theme to:",B,g),E(B),i(g))},H=B=>{const g=ze[B];g&&(console.log("Changing dark theme to:",B,g),V(B),l(g))},D=()=>{t(b.mode==="light"?"dark":"light")},W=B=>{m(B)},L=B=>{v(B)},Q=()=>{switch(s){case"themes":return e.jsx(ur,{onThemeSelect:A});case"components":return e.jsx(ds,{});case"installation":return e.jsx(ls,{});case"documentation":return e.jsx(Cs,{});default:return e.jsx(ur,{onThemeSelect:A})}};return e.jsxs("div",{style:{minHeight:"100vh",backgroundColor:"var(--bg-app)",color:"var(--text-primary)",fontFamily:"system-ui, -apple-system, sans-serif"},children:[e.jsx("header",{style:{backgroundColor:"var(--bg-surface)",borderBottom:"1px solid var(--border-color)",padding:"var(--space-md)",position:"sticky",top:0,zIndex:1e3},children:e.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center",gap:"var(--space-lg)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-sm)"},children:[e.jsx(Fs,{size:40}),e.jsxs("div",{children:[e.jsx("h1",{style:{fontSize:"var(--font-size-2xl)",fontWeight:"var(--font-weight-bold)",margin:0,color:"var(--accent-500)"},children:"FlowLabKit"}),e.jsx("p",{style:{fontSize:"var(--font-size-sm)",color:"var(--text-secondary)",margin:"4px 0 0 0"},children:"Theme System Showcase"})]})]}),e.jsx("div",{style:{display:"flex",gap:"var(--space-md)",alignItems:"center"},children:e.jsx(Ts,{currentLightTheme:h,currentDarkTheme:y,onLightThemeChange:A,onDarkThemeChange:H,isDark:b.mode==="dark",onToggleDark:D,fontSize:b.fontSize,onFontSizeChange:W,compactMode:b.compactMode,onCompactModeChange:L})})]})}),e.jsx(ks,{currentPage:s,onPageChange:n}),e.jsx("main",{style:{width:"100%",padding:"var(--space-lg)"},children:Q()}),e.jsx("footer",{style:{backgroundColor:"var(--bg-surface)",borderTop:"1px solid var(--border-color)",padding:"var(--space-lg)",marginTop:"var(--space-2xl)",textAlign:"center"},children:e.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"var(--font-size-sm)",margin:0},children:"Built with using @flowlabkit/ui"})})]})}function Ls(){return e.jsx(_r,{lightTheme:ze.light,darkTheme:ze.dark,initialConfig:{mode:"light",fontSize:"medium",compactMode:!1},children:e.jsx(Is,{})})}const Rs=`
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
`,zr=document.createElement("style");zr.textContent=Rs;document.head.appendChild(zr);const As=ss.createRoot(document.getElementById("root"));As.render(e.jsx(pe.StrictMode,{children:e.jsx(Ls,{})}));
