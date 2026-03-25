import{r as a,h as X,i as Y,d as J,j as r,b as P,e as _,aS as F,f as Z,s as ee,m as te,c as ze,g as D,aT as He,av as E,B as O}from"./iframe-DzQ8qlS5.js";import{I as De}from"./IconButton-Hs8z5MnR.js";import{I as Ie}from"./Icon-4frSiLka.js";import{T as Fe}from"./Tooltip-Dbc7ESCX.js";import{D as Ae}from"./Drawer-B2-A1xQa.js";import{B as Ne}from"./ButtonBase-B1YySNdu.js";import{T as Oe}from"./TextField-C7870KfA.js";import{u as Me,F as qe}from"./useFormControl-iwh5DSGC.js";import{D as We}from"./Divider-Ba_uwpJH.js";import{u as Ge}from"./useForkRef-DYkjEL9P.js";import{g as Ve,o as Q}from"./Portal-KTuVOcz1.js";import{b as Ue}from"./TransitionGroupContext-dQxgozz0.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-C1sZM5VB.js";import"./CircularProgress-uyQXuKQe.js";import"./useSlot-h4wbdPQ6.js";import"./useControlled-BLrQGYn1.js";import"./Grow-ns7P5pJg.js";import"./utils-DGQ64b3x.js";import"./mergeSlotProps-B1WWk4e8.js";import"./Modal-C_OOCtgn.js";import"./Paper-CEEYXBBa.js";import"./formControlState-Dq1zat_P.js";import"./List-dcCuc40T.js";import"./ListContext-M3Y7C2tn.js";import"./Menu-D_R1YzcJ.js";import"./createSvgIcon-OxKoK4oj.js";import"./isMuiElement-D6cy73R7.js";import"./dividerClasses-DKcoqmU9.js";function _e(e){return a.Children.toArray(e).filter(t=>a.isValidElement(t))}function ne(e){return e.substring(2).toLowerCase()}function Qe(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}function Ke(e){const{children:t,disableReactTree:i=!1,mouseEvent:n="onClick",onClickAway:o,touchEvent:c="onTouchEnd"}=e,p=a.useRef(!1),l=a.useRef(null),R=a.useRef(!1),T=a.useRef(!1);a.useEffect(()=>(setTimeout(()=>{R.current=!0},0),()=>{R.current=!1}),[]);const C=Ge(Ve(t),l),B=Ue(s=>{const h=T.current;T.current=!1;const m=Q(l.current);if(!R.current||!l.current||"clientX"in s&&Qe(s,m))return;if(p.current){p.current=!1;return}let L;s.composedPath?L=s.composedPath().includes(l.current):L=!m.documentElement.contains(s.target)||l.current.contains(s.target),!L&&(i||!h)&&o(s)}),y=s=>h=>{T.current=!0;const m=t.props[s];m&&m(h)},u={ref:C};return c!==!1&&(u[c]=y(c)),a.useEffect(()=>{if(c!==!1){const s=ne(c),h=Q(l.current),m=()=>{p.current=!0};return h.addEventListener(s,B),h.addEventListener("touchmove",m),()=>{h.removeEventListener(s,B),h.removeEventListener("touchmove",m)}}},[B,c]),n!==!1&&(u[n]=y(n)),a.useEffect(()=>{if(n!==!1){const s=ne(n),h=Q(l.current);return h.addEventListener(s,B),()=>{h.removeEventListener(s,B)}}},[B,n]),a.cloneElement(t,u)}function Xe(e){return X("MuiInputAdornment",e)}const se=Y("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var le;const Ye=(e,t)=>{const{ownerState:i}=e;return[t.root,t[`position${F(i.position)}`],i.disablePointerEvents===!0&&t.disablePointerEvents,t[i.variant]]},Je=e=>{const{classes:t,disablePointerEvents:i,hiddenLabel:n,position:o,size:c,variant:p}=e,l={root:["root",i&&"disablePointerEvents",o&&`position${F(o)}`,p,n&&"hiddenLabel",c&&`size${F(c)}`]};return Z(l,Xe,t)},Ze=ee("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:Ye})(te(({theme:e})=>({display:"flex",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(e.vars||e).palette.action.active,variants:[{props:{variant:"filled"},style:{[`&.${se.positionStart}&:not(.${se.hiddenLabel})`]:{marginTop:16}}},{props:{position:"start"},style:{marginRight:8}},{props:{position:"end"},style:{marginLeft:8}},{props:{disablePointerEvents:!0},style:{pointerEvents:"none"}}]}))),et=a.forwardRef(function(t,i){const n=J({props:t,name:"MuiInputAdornment"}),{children:o,className:c,component:p="div",disablePointerEvents:l=!1,disableTypography:R=!1,position:T,variant:C,...B}=n,y=Me()||{};let u=C;C&&y.variant,y&&!u&&(u=y.variant);const s={...n,hiddenLabel:y.hiddenLabel,size:y.size,disablePointerEvents:l,position:T,variant:u},h=Je(s);return r.jsx(qe.Provider,{value:null,children:r.jsx(Ze,{as:p,ownerState:s,className:_(h.root,c),ref:i,...B,children:typeof o=="string"&&!R?r.jsx(P,{color:"textSecondary",children:o}):r.jsxs(a.Fragment,{children:[T==="start"?le||(le=r.jsx("span",{className:"notranslate","aria-hidden":!0,children:"​"})):null,o]})})})});function tt(e){return X("MuiToggleButton",e)}const I=Y("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge","fullWidth"]),Le=a.createContext({}),Ee=a.createContext(void 0);function rt(e,t){return t===void 0||e===void 0?!1:Array.isArray(t)?t.includes(e):e===t}const ot=e=>{const{classes:t,fullWidth:i,selected:n,disabled:o,size:c,color:p}=e,l={root:["root",n&&"selected",o&&"disabled",i&&"fullWidth",`size${F(c)}`,p]};return Z(l,tt,t)},at=ee(Ne,{name:"MuiToggleButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,t[`size${F(i.size)}`]]}})(te(({theme:e})=>({...e.typography.button,borderRadius:(e.vars||e).shape.borderRadius,padding:11,border:`1px solid ${(e.vars||e).palette.divider}`,color:(e.vars||e).palette.action.active,[`&.${I.disabled}`]:{color:(e.vars||e).palette.action.disabled,border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:D(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[{props:{color:"standard"},style:{[`&.${I.selected}`]:{color:(e.vars||e).palette.text.primary,backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.selectedOpacity})`:D(e.palette.text.primary,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:D(e.palette.text.primary,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.selectedOpacity})`:D(e.palette.text.primary,e.palette.action.selectedOpacity)}}}}},...Object.entries(e.palette).filter(He()).map(([t])=>({props:{color:t},style:{[`&.${I.selected}`]:{color:(e.vars||e).palette[t].main,backgroundColor:e.vars?`rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.selectedOpacity})`:D(e.palette[t].main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t].mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:D(e.palette[t].main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.selectedOpacity})`:D(e.palette[t].main,e.palette.action.selectedOpacity)}}}}})),{props:{fullWidth:!0},style:{width:"100%"}},{props:{size:"small"},style:{padding:7,fontSize:e.typography.pxToRem(13)}},{props:{size:"large"},style:{padding:15,fontSize:e.typography.pxToRem(15)}}]}))),ce=a.forwardRef(function(t,i){const{value:n,...o}=a.useContext(Le),c=a.useContext(Ee),p=ze({...o,selected:rt(t.value,n)},t),l=J({props:p,name:"MuiToggleButton"}),{children:R,className:T,color:C="standard",disabled:B=!1,disableFocusRipple:y=!1,fullWidth:u=!1,onChange:s,onClick:h,selected:m,size:L="medium",value:w,...z}=l,j={...l,color:C,disabled:B,disableFocusRipple:y,fullWidth:u,size:L},H=ot(j),x=b=>{h&&(h(b,w),b.defaultPrevented)||s&&s(b,w)},v=c||"";return r.jsx(at,{className:_(o.className,H.root,T,v),disabled:B,focusRipple:!y,ref:i,onClick:x,onChange:s,value:w,ownerState:j,"aria-pressed":m,...z,children:R})});function it(e){return X("MuiToggleButtonGroup",e)}const g=Y("MuiToggleButtonGroup",["root","selected","horizontal","vertical","disabled","grouped","groupedHorizontal","groupedVertical","fullWidth","firstButton","lastButton","middleButton"]),nt=e=>{const{classes:t,orientation:i,fullWidth:n,disabled:o}=e,c={root:["root",i,n&&"fullWidth"],grouped:["grouped",`grouped${F(i)}`,o&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return Z(c,it,t)},st=ee("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[{[`& .${g.grouped}`]:t.grouped},{[`& .${g.grouped}`]:t[`grouped${F(i.orientation)}`]},{[`& .${g.firstButton}`]:t.firstButton},{[`& .${g.lastButton}`]:t.lastButton},{[`& .${g.middleButton}`]:t.middleButton},t.root,i.orientation==="vertical"&&t.vertical,i.fullWidth&&t.fullWidth]}})(te(({theme:e})=>({display:"inline-flex",borderRadius:(e.vars||e).shape.borderRadius,variants:[{props:{orientation:"vertical"},style:{flexDirection:"column",[`& .${g.grouped}`]:{[`&.${g.selected} + .${g.grouped}.${g.selected}`]:{borderTop:0,marginTop:0}},[`& .${g.firstButton},& .${g.middleButton}`]:{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`& .${g.lastButton},& .${g.middleButton}`]:{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},[`& .${g.lastButton}.${I.disabled},& .${g.middleButton}.${I.disabled}`]:{borderTop:"1px solid transparent"}}},{props:{fullWidth:!0},style:{width:"100%"}},{props:{orientation:"horizontal"},style:{[`& .${g.grouped}`]:{[`&.${g.selected} + .${g.grouped}.${g.selected}`]:{borderLeft:0,marginLeft:0}},[`& .${g.firstButton},& .${g.middleButton}`]:{borderTopRightRadius:0,borderBottomRightRadius:0},[`& .${g.lastButton},& .${g.middleButton}`]:{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},[`& .${g.lastButton}.${I.disabled},& .${g.middleButton}.${I.disabled}`]:{borderLeft:"1px solid transparent"}}}]}))),lt=a.forwardRef(function(t,i){const n=J({props:t,name:"MuiToggleButtonGroup"}),{children:o,className:c,color:p="standard",disabled:l=!1,exclusive:R=!1,fullWidth:T=!1,onChange:C,orientation:B="horizontal",size:y="medium",value:u,...s}=n,h={...n,disabled:l,fullWidth:T,orientation:B,size:y},m=nt(h),L=a.useCallback((v,b)=>{if(!C)return;const k=u&&u.indexOf(b);let N;u&&k>=0?(N=u.slice(),N.splice(k,1)):N=u?u.concat(b):[b],C(v,N)},[C,u]),w=a.useCallback((v,b)=>{C&&C(v,u===b?null:b)},[C,u]),z=a.useMemo(()=>({className:m.grouped,onChange:R?w:L,value:u,size:y,fullWidth:T,color:p,disabled:l}),[m.grouped,R,w,L,u,y,T,p,l]),j=_e(o),H=j.length,x=v=>{const b=v===0,k=v===H-1;return b&&k?"":b?m.firstButton:k?m.lastButton:m.middleButton};return r.jsx(st,{role:"group",className:_(m.root,c),ref:i,ownerState:h,...s,children:r.jsx(Le.Provider,{value:z,children:j.map((v,b)=>r.jsx(Ee.Provider,{value:x(b),children:v},b))})})});function ct(e){return(e!=null&&e.length?e:[]).slice(0,8)}function K({value:e,defaultValue:t}){const[i,n]=a.useState(t),o=e!==void 0,c=o?e:i,p=a.useCallback(l=>{o||n(l)},[o]);return{state:c,setState:p,isControlled:o}}function re(e){const{colors:t,selectedColor:i,defaultSelectedColor:n,onSelectedColorChange:o,query:c,defaultQuery:p,onQueryChange:l,mode:R,defaultMode:T="all",onModeChange:C,title:B="Highlights"}=e,y=a.useMemo(()=>ct(t),[t]),{state:u,setState:s}=K({value:R,defaultValue:T}),{state:h,setState:m}=K({value:i,defaultValue:n??y[0]??"#FDE047"}),{state:L,setState:w}=K({value:c,defaultValue:p??""}),z=a.useCallback((x,v)=>{v&&(s(v),C==null||C(v))},[C,s]),j=a.useCallback(x=>{m(x),o==null||o(x)},[o,m]),H=a.useCallback(x=>{w(x),l==null||l(x)},[l,w]);return r.jsxs(E,{sx:{width:360,display:"flex",flexDirection:"column"},children:[r.jsxs(E,{sx:{p:2,pb:1.5},children:[r.jsxs(E,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:2},children:[r.jsx(P,{variant:"h6",sx:{fontWeight:800,letterSpacing:-.2},children:B}),r.jsxs(lt,{size:"small",exclusive:!0,value:u,onChange:z,"aria-label":"Highlights filter mode",children:[r.jsx(ce,{value:"all","aria-label":"All highlights",children:"All"}),r.jsx(ce,{value:"byColor","aria-label":"Filter by color",children:"By Color"})]})]}),r.jsx(E,{sx:{mt:1.5},children:r.jsx(Oe,{value:L,onChange:x=>H(x.target.value),size:"small",fullWidth:!0,placeholder:"Search highlights",inputProps:{"aria-label":"Search highlights"},InputProps:{startAdornment:r.jsx(et,{position:"start",children:r.jsx("span",{style:{opacity:.65},children:"⌕"})})}})}),u==="byColor"?r.jsxs(E,{sx:{mt:1.5,display:"flex",alignItems:"center",gap:1,flexWrap:"wrap"},children:[y.map(x=>{const v=x.toLowerCase()===String(h).toLowerCase();return r.jsx(E,{role:"button",tabIndex:0,"aria-label":`Filter highlights by ${x}`,onClick:()=>j(x),onKeyDown:b=>{(b.key==="Enter"||b.key===" ")&&(b.preventDefault(),j(x))},sx:{width:18,height:18,borderRadius:999,bgcolor:x,cursor:"pointer",border:v?"2px solid":"1px solid",borderColor:v?"text.primary":"divider",boxShadow:v?1:0,transform:v?"scale(1.08)":"none",transition:"transform 120ms ease"}},x)}),r.jsx(P,{variant:"caption",sx:{ml:.5,opacity:.75},children:"Select a color to filter."})]}):null]}),r.jsx(We,{}),r.jsx(E,{sx:{p:2,pt:1.5},children:r.jsx(P,{variant:"body2",sx:{opacity:.7},children:"Drawer content coming next…"})})]})}re.displayName="Gui.HighLightsDrawer";re.__docgenInfo={description:"",methods:[],displayName:"Gui.HighLightsDrawer",props:{colors:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},selectedColor:{required:!1,tsType:{name:"string"},description:""},defaultSelectedColor:{required:!1,tsType:{name:"string"},description:""},onSelectedColorChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(color: string) => void",signature:{arguments:[{type:{name:"string"},name:"color"}],return:{name:"void"}}},description:""},query:{required:!1,tsType:{name:"string"},description:""},defaultQuery:{required:!1,tsType:{name:"string"},description:""},onQueryChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:""},mode:{required:!1,tsType:{name:"union",raw:"'all' | 'byColor'",elements:[{name:"literal",value:"'all'"},{name:"literal",value:"'byColor'"}]},description:""},defaultMode:{required:!1,tsType:{name:"union",raw:"'all' | 'byColor'",elements:[{name:"literal",value:"'all'"},{name:"literal",value:"'byColor'"}]},description:""},onModeChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(mode: HighLightsFilterMode) => void",signature:{arguments:[{type:{name:"union",raw:"'all' | 'byColor'",elements:[{name:"literal",value:"'all'"},{name:"literal",value:"'byColor'"}]},name:"mode"}],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const A=["#FDE047","#86EFAC","#93C5FD","#FCA5A5","#D8B4FE"];function dt(e){const t=(e!=null&&e.length?e:A).slice(0,5);for(;t.length<5;)t.push(A[t.length]);return t}function de(e,t){const i=e.replace("#","").trim(),n=i.length===3?i.split("").map(l=>l+l).join(""):i,o=parseInt(n.slice(0,2),16),c=parseInt(n.slice(2,4),16),p=parseInt(n.slice(4,6),16);return[o,c,p].some(l=>Number.isNaN(l))?`rgba(255,255,0,${t})`:`rgba(${o}, ${c}, ${p}, ${t})`}function ut({value:e,defaultValue:t}){const[i,n]=a.useState(t??A[0]),o=e!=null,c=o?e:i,p=a.useCallback(l=>{o||n(l)},[o]);return{color:c,setColor:p,isControlled:o}}function $(e){const{colors:t,value:i,defaultValue:n,onChange:o,title:c="Highlighter",tooltipSize:p="md",placement:l="right",iconName:R="ink_marker",iconSize:T=22,className:C,style:B,disabled:y}=e,u=a.useMemo(()=>dt(t??A),[t]),{color:s,setColor:h}=ut({value:i,defaultValue:n}),[m,L]=a.useState(!1),[w,z]=a.useState(!1),j=a.useCallback((d,S)=>{const f=document.documentElement;f.dataset.highLighterActive=String(d),f.dataset.highLighterColor=S,f.style.setProperty("--gui-highlighter-color",S),f.style.setProperty("--gui-highlighter-rgba",de(S,.45));const M=encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
          <path d="M21.7 3.3c-1.2-1.2-3.1-1.2-4.2 0L7.2 13.6c-.3.3-.5.7-.6 1.1L5 21.9c-.2.8.6 1.6 1.4 1.4l7.2-1.6c.4-.1.8-.3 1.1-.6L24.9 7.5c1.2-1.2 1.2-3.1 0-4.2l-3.2-3.2z" fill="#111"/>
          <path d="M6.5 22.5l8-1.8-6.2-6.2-1.8 8z" fill="#555"/>
        </svg>
      `);d?(f.style.cursor=`url("data:image/svg+xml,${M}") 2 26, text`,f.style.setProperty("--gui-highlighter-active","1")):(f.style.cursor="",f.style.removeProperty("--gui-highlighter-active"))},[]);a.useEffect(()=>{if(!(typeof document>"u"))return j(w,s),()=>{if(w){const d=document.documentElement;delete d.dataset.highLighterActive,delete d.dataset.highLighterColor,d.style.removeProperty("--gui-highlighter-color"),d.style.removeProperty("--gui-highlighter-rgba"),d.style.cursor=""}}},[w,s]);const H=a.useCallback(()=>{if(!y){if(w&&!m){z(!1);return}L(d=>!d)}},[y,w,m]),x=a.useCallback(()=>{L(!1),k(!1)},[]),v=a.useCallback(d=>{h(d),o==null||o(d),z(!0),L(!1),k(!1)},[o,h]),[b,k]=a.useState(!1),N=a.useCallback(()=>k(!1),[]),oe=a.useCallback(()=>{k(!0),L(!1)},[]),[Re,$e]=a.useState("all"),[je,ae]=a.useState(s);a.useEffect(()=>{ae(s)},[s]),a.useEffect(()=>{if(typeof document>"u")return;const d="gui-highlighter-selection-style";if(document.getElementById(d))return;const S=document.createElement("style");S.id=d,S.textContent=`
      html[data-high-lighter-active="true"] ::selection {
        background: var(--gui-highlighter-rgba, rgba(253, 224, 71, 0.45));
      }
      html[data-high-lighter-active="true"] ::-moz-selection {
        background: var(--gui-highlighter-rgba, rgba(253, 224, 71, 0.45));
      }
    `,document.head.appendChild(S)},[]);const ke=r.jsxs(O,{sx:{display:"flex",flexDirection:"column",gap:1},children:[c?r.jsx(O,{sx:{fontWeight:600,lineHeight:1.1,pr:.5},children:c}):null,r.jsx(O,{sx:{display:"flex",alignItems:"center",gap:1},children:u.map(d=>{const S=d.toLowerCase()===String(s).toLowerCase();return r.jsx(O,{role:"button","aria-label":`Select marker color ${d}`,tabIndex:0,onClick:()=>v(d),onKeyDown:f=>{(f.key==="Enter"||f.key===" ")&&(f.preventDefault(),v(d))},sx:{width:18,height:18,borderRadius:"999px",bgcolor:d,cursor:"pointer",border:S?"2px solid":"1px solid",borderColor:S?"text.primary":"divider",boxShadow:S?1:0,transform:S?"scale(1.05)":"none",transition:"transform 120ms ease"}},d)})}),r.jsxs(O,{role:"button",tabIndex:0,onClick:oe,onKeyDown:d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),oe())},sx:{mt:.5,px:1,py:.75,borderRadius:1,cursor:"pointer",userSelect:"none",fontSize:13,fontWeight:600,display:"flex",alignItems:"center",justifyContent:"space-between",gap:1,bgcolor:"action.hover","&:hover":{bgcolor:"action.selected"},"&:focus-visible":{outline:"2px solid",outlineColor:"primary.main"}},children:[r.jsx("span",{children:"Show Highlights"}),r.jsx("span",{style:{opacity:.7},children:"→"})]})]}),ie=a.useCallback(()=>{var M;if(typeof window>"u")return;const d=(M=window.getSelection)==null?void 0:M.call(window);if(!d||d.rangeCount===0)return;const S=d.getRangeAt(0);if(S.collapsed)return;const f=document.createElement("span");f.setAttribute("data-gui-highlighter","true"),f.style.background=de(s,.42),f.style.borderRadius="999px",f.style.padding="0.06em 0.18em",f.style.boxDecorationBreak="clone",f.style["-webkit-box-decoration-break"]="clone",f.style.boxShadow="inset 0 -0.18em 0 0 rgba(0,0,0,0.06)",f.style.display="inline";try{S.surroundContents(f),d.removeAllRanges()}catch{const Pe=S.extractContents();f.appendChild(Pe),S.insertNode(f),d.removeAllRanges()}window.dispatchEvent(new CustomEvent("gui:highlighter:highlight",{detail:{color:s}}))},[s]);return a.useEffect(()=>{if(!(typeof window>"u"))return window.guiHighLighter={highlightSelection:ie,get active(){return document.documentElement.dataset.highLighterActive==="true"},get color(){return document.documentElement.dataset.highLighterColor}},()=>{delete window.guiHighLighter}},[ie]),r.jsx(Ke,{onClickAway:x,children:r.jsxs(O,{sx:{display:"inline-flex"},className:C,style:B,children:[r.jsx(Fe,{title:ke,open:m,onClose:x,disableHoverListener:!0,disableFocusListener:!0,disableTouchListener:!0,placement:l,arrow:!0,size:p,children:r.jsx(De,{size:"small",disabled:y,"aria-label":"HighLighter",onClick:H,sx:{borderRadius:2,border:"1px solid",borderColor:w?"text.primary":"divider",bgcolor:w?"action.selected":"transparent"},children:r.jsx(Ie,{name:R,fontSize:T,iconColor:w?s:void 0,className:_(w&&"Gui-HighLighter-active")})})}),r.jsx(Ae,{anchor:"right",open:b,onClose:N,children:r.jsx(re,{title:"Highlights",colors:u,mode:Re,onModeChange:$e,selectedColor:je,onSelectedColorChange:ae})})]})})}$.displayName="Gui.HighLighter";$.__docgenInfo={description:`This.GUI — HighLighter (organism)

A marker/highlighter toggle button that opens a click-to-open tooltip palette
(5 circular swatches). Picking a swatch activates "marker mode":
- The cursor becomes a marker/highlighter (SVG cursor) and selection highlight color is applied via global CSS
- The selected color is exposed via \`data-high-lighter-color\` and CSS var
  \`--gui-highlighter-color\` on <html>
- A CustomEvent \`gui:highlighter\` is dispatched on window.

You can implement actual text-highlighting in your editor by listening for:
  window.addEventListener('gui:highlighter', (e) => ...)
and/or by reading \`document.documentElement.dataset.highLighterActive\`.`,methods:[],displayName:"Gui.HighLighter",props:{colors:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"HighLighterColor[]"},description:"Optional custom palette shown in the tooltip"},value:{required:!1,tsType:{name:"string"},description:"Currently selected color (controlled)"},defaultValue:{required:!1,tsType:{name:"string"},description:"Default selected color (uncontrolled)"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(color: HighLighterColor) => void",signature:{arguments:[{type:{name:"string"},name:"color"}],return:{name:"void"}}},description:"Fired whenever a color is selected"},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Tooltip label shown above the palette"},tooltipSize:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"Tooltip size preset"},placement:{required:!1,tsType:{name:"union",raw:`| 'bottom'
| 'bottom-end'
| 'bottom-start'
| 'left'
| 'left-end'
| 'left-start'
| 'right'
| 'right-end'
| 'right-start'
| 'top'
| 'top-end'
| 'top-start'`,elements:[{name:"literal",value:"'bottom'"},{name:"literal",value:"'bottom-end'"},{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'left'"},{name:"literal",value:"'left-end'"},{name:"literal",value:"'left-start'"},{name:"literal",value:"'right'"},{name:"literal",value:"'right-end'"},{name:"literal",value:"'right-start'"},{name:"literal",value:"'top'"},{name:"literal",value:"'top-end'"},{name:"literal",value:"'top-start'"}]},description:"MUI placement for tooltip"},iconName:{required:!1,tsType:{name:"string"},description:"Icon configuration"},iconSize:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state"}}};const Mt={title:"Widgets/HighLighter",component:$,parameters:{layout:"centered"},argTypes:{onChange:{action:"change"},colors:{control:"object"},value:{control:"color"},defaultValue:{control:"color"},tooltipSize:{control:{type:"inline-radio"},options:["sm","md","lg","xl"]},placement:{control:{type:"select"},options:["bottom","bottom-end","bottom-start","left","left-end","left-start","right","right-end","right-start","top","top-end","top-start"]},iconName:{control:"text"},iconSize:{control:"text"},title:{control:"text"},disabled:{control:"boolean"},className:{table:{disable:!0}},style:{table:{disable:!0}}},args:{title:"Highlighter",tooltipSize:"md",placement:"right",iconName:"ink_marker",iconSize:22,colors:A,defaultValue:A[0],disabled:!1}},q={render:e=>r.jsxs(E,{sx:{display:"flex",alignItems:"center",gap:2},children:[r.jsx($,{...e}),r.jsx(P,{variant:"body2",sx:{opacity:.7},children:"Click highlighter → pick a color"})]})},W={render:e=>r.jsxs(E,{sx:{display:"flex",alignItems:"center",gap:2},children:[r.jsx($,{...e,tooltipSize:"sm",title:"sm"}),r.jsx($,{...e,tooltipSize:"md",title:"md"}),r.jsx($,{...e,tooltipSize:"lg",title:"lg"}),r.jsx($,{...e,tooltipSize:"xl",title:"xl"})]}),parameters:{controls:{exclude:["tooltipSize","title"]}}},G={args:{title:"Pick a neon",colors:["#00F5D4","#F15BB5","#FEE440","#00BBF9","#9B5DE5"],defaultValue:"#FEE440"},render:e=>r.jsxs(E,{sx:{display:"flex",alignItems:"center",gap:2},children:[r.jsx($,{...e}),r.jsx(P,{variant:"body2",sx:{opacity:.7},children:"Custom 5-color palette"})]})},V={render:e=>{const[t,i]=a.useState(A[2]);return a.useEffect(()=>{const n=o=>{var c;(c=o==null?void 0:o.detail)!=null&&c.color&&i(o.detail.color)};return window.addEventListener("gui:highlighter",n),()=>window.removeEventListener("gui:highlighter",n)},[]),r.jsxs(E,{sx:{display:"flex",flexDirection:"column",gap:1.5,minWidth:320},children:[r.jsxs(E,{sx:{display:"flex",alignItems:"center",gap:2},children:[r.jsx($,{...e,value:t,onChange:n=>{var o;i(n),(o=e==null?void 0:e.onChange)==null||o.call(e,n)}}),r.jsx(P,{variant:"body2",sx:{opacity:.7},children:"Controlled color"})]}),r.jsxs(E,{sx:{display:"flex",alignItems:"center",gap:1},children:[r.jsx(P,{variant:"caption",sx:{opacity:.7},children:"Selected:"}),r.jsx(E,{sx:{width:14,height:14,borderRadius:999,bgcolor:t,border:"1px solid",borderColor:"divider"}}),r.jsx(P,{variant:"caption",sx:{fontFamily:"monospace"},children:t})]})]})},parameters:{controls:{exclude:["value","defaultValue"]}}},U={args:{disabled:!0},render:e=>r.jsxs(E,{sx:{display:"flex",alignItems:"center",gap:2},children:[r.jsx($,{...e}),r.jsx(P,{variant:"body2",sx:{opacity:.7},children:"Disabled"})]})};var ue,pe,ge;q.parameters={...q.parameters,docs:{...(ue=q.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: args => <Box sx={{
    display: 'flex',
    alignItems: 'center',
    gap: 2
  }}>
      <HighLighter {...args as HighLighterProps} />
      <Typography variant="body2" sx={{
      opacity: 0.7
    }}>
        Click highlighter → pick a color
      </Typography>
    </Box>
}`,...(ge=(pe=q.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var he,me,fe;W.parameters={...W.parameters,docs:{...(he=W.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: args => <Box sx={{
    display: 'flex',
    alignItems: 'center',
    gap: 2
  }}>
      <HighLighter {...args as HighLighterProps} tooltipSize="sm" title="sm" />
      <HighLighter {...args as HighLighterProps} tooltipSize="md" title="md" />
      <HighLighter {...args as HighLighterProps} tooltipSize="lg" title="lg" />
      <HighLighter {...args as HighLighterProps} tooltipSize="xl" title="xl" />
    </Box>,
  parameters: {
    controls: {
      exclude: ['tooltipSize', 'title']
    }
  }
}`,...(fe=(me=W.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var ye,xe,ve;G.parameters={...G.parameters,docs:{...(ye=G.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    title: 'Pick a neon',
    colors: ['#00F5D4', '#F15BB5', '#FEE440', '#00BBF9', '#9B5DE5'],
    defaultValue: '#FEE440'
  },
  render: args => <Box sx={{
    display: 'flex',
    alignItems: 'center',
    gap: 2
  }}>
      <HighLighter {...args as HighLighterProps} />
      <Typography variant="body2" sx={{
      opacity: 0.7
    }}>
        Custom 5-color palette
      </Typography>
    </Box>
}`,...(ve=(xe=G.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};var be,Ce,we;V.parameters={...V.parameters,docs:{...(be=V.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: args => {
    const [color, setColor] = React.useState<string>(DEFAULT_COLORS[2]);
    React.useEffect(() => {
      const onHighLighter = (e: any) => {
        if (e?.detail?.color) setColor(e.detail.color);
      };
      window.addEventListener('gui:highlighter', onHighLighter as any);
      return () => window.removeEventListener('gui:highlighter', onHighLighter as any);
    }, []);
    return <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 1.5,
      minWidth: 320
    }}>
        <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2
      }}>
          <HighLighter {...args as HighLighterProps} value={color} onChange={c => {
          setColor(c);
          (args as any)?.onChange?.(c);
        }} />
          <Typography variant="body2" sx={{
          opacity: 0.7
        }}>
            Controlled color
          </Typography>
        </Box>

        <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}>
          <Typography variant="caption" sx={{
          opacity: 0.7
        }}>
            Selected:
          </Typography>
          <Box sx={{
          width: 14,
          height: 14,
          borderRadius: 999,
          bgcolor: color,
          border: '1px solid',
          borderColor: 'divider'
        }} />
          <Typography variant="caption" sx={{
          fontFamily: 'monospace'
        }}>
            {color}
          </Typography>
        </Box>
      </Box>;
  },
  parameters: {
    controls: {
      exclude: ['value', 'defaultValue']
    }
  }
}`,...(we=(Ce=V.parameters)==null?void 0:Ce.docs)==null?void 0:we.source}}};var Be,Se,Te;U.parameters={...U.parameters,docs:{...(Be=U.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <Box sx={{
    display: 'flex',
    alignItems: 'center',
    gap: 2
  }}>
      <HighLighter {...args as HighLighterProps} />
      <Typography variant="body2" sx={{
      opacity: 0.7
    }}>
        Disabled
      </Typography>
    </Box>
}`,...(Te=(Se=U.parameters)==null?void 0:Se.docs)==null?void 0:Te.source}}};const qt=["Playground","Sizes","CustomPalette","Controlled","Disabled"];export{V as Controlled,G as CustomPalette,U as Disabled,q as Playground,W as Sizes,qt as __namedExportsOrder,Mt as default};
