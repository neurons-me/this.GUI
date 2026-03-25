import{j as p,h as it,i as at,r as T,d as st,e as ct,aT as ne,f as lt,s as dt,a$ as pt,m as ut,g as Ce,aU as we,ay as mt,a as E,B as w,br as ft,aA as ht,ax as gt}from"./iframe-8EaQ1C0g.js";import{G as q}from"./Grid-pfAQRLhH.js";import{C as Ie}from"./Card-wHM-YIzC.js";import{C as yt}from"./CardHeader-Bzhz9I88.js";import{C as xt}from"./CardContent-DfAh2Oqi.js";import{C as bt}from"./CardActions-B_5LS30R.js";import{A as X}from"./Avatar-DhWWZzL6.js";import{a as vt,S as Se}from"./Switch-sWLClY08.js";import{c as pe}from"./createSvgIcon-D8rVfPRm.js";import{u as kt}from"./useSlot-Bwp2wfPo.js";import{m as Ct}from"./mergeSlotProps-B1nxpj7w.js";import{T as je}from"./Tooltip-DuCAPdS-.js";import{I as Z}from"./Icon-DOcDJgdS.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-Cnfm5CEA.js";import"./Avatar-BHYZhMLq.js";import"./useFormControl-BGPHKa-w.js";import"./useControlled-ChLN6U0A.js";import"./ButtonBase-DnuzHV0k.js";import"./TransitionGroupContext-BDq06VYZ.js";import"./useForkRef-B_8DPUN9.js";import"./Portal-0QKNbDUh.js";import"./Grow-D96jBQxV.js";import"./utils-qFhxFu5T.js";const wt=pe(p.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),It=pe(p.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),St=pe(p.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function jt(e){return it("MuiCheckbox",e)}const ce=at("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),$t=e=>{const{classes:r,indeterminate:n,color:i,size:l}=e,s={root:["root",n&&"indeterminate",`color${ne(i)}`,`size${ne(l)}`]},d=lt(s,jt,r);return{...r,...d}},Tt=dt(vt,{shouldForwardProp:e=>pt(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:n}=e;return[r.root,n.indeterminate&&r.indeterminate,r[`size${ne(n.size)}`],n.color!=="default"&&r[`color${ne(n.color)}`]]}})(ut(({theme:e})=>({color:(e.vars||e).palette.text.secondary,variants:[{props:{color:"default",disableRipple:!1},style:{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:Ce(e.palette.action.active,e.palette.action.hoverOpacity)}}},...Object.entries(e.palette).filter(we()).map(([r])=>({props:{color:r,disableRipple:!1},style:{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Ce(e.palette[r].main,e.palette.action.hoverOpacity)}}})),...Object.entries(e.palette).filter(we()).map(([r])=>({props:{color:r},style:{[`&.${ce.checked}, &.${ce.indeterminate}`]:{color:(e.vars||e).palette[r].main},[`&.${ce.disabled}`]:{color:(e.vars||e).palette.action.disabled}}})),{props:{disableRipple:!1},style:{"&:hover":{"@media (hover: none)":{backgroundColor:"transparent"}}}}]}))),Ut=p.jsx(It,{}),Rt=p.jsx(wt,{}),Mt=p.jsx(St,{}),Pt=T.forwardRef(function(r,n){const i=st({props:r,name:"MuiCheckbox"}),{checkedIcon:l=Ut,color:s="primary",icon:d=Rt,indeterminate:c=!1,indeterminateIcon:b=Mt,inputProps:v,size:C="medium",disableRipple:I=!1,className:k,slots:t={},slotProps:o={},...m}=i,f=c?b:d,u=c?b:l,h={...i,disableRipple:I,color:s,indeterminate:c,size:C},G=$t(h),x=o.input??v,[ae,N]=kt("root",{ref:n,elementType:Tt,className:ct(G.root,k),shouldForwardComponentProp:!0,externalForwardedProps:{slots:t,slotProps:o,...m},ownerState:h,additionalProps:{type:"checkbox",icon:T.cloneElement(f,{fontSize:f.props.fontSize??C}),checkedIcon:T.cloneElement(u,{fontSize:u.props.fontSize??C}),disableRipple:I,slots:t,slotProps:{input:Ct(typeof x=="function"?x(h):x,{"data-indeterminate":c})}}});return p.jsx(ae,{...N,classes:G})}),ie=T.forwardRef(function(r,n){return p.jsx(Pt,{ref:n,...r})});ie.displayName="Gui.Checkbox";ie.__docgenInfo={description:`This.GUI — Checkbox (atom)
Thin wrapper over MUI's Checkbox.`,methods:[],displayName:"Gui.Checkbox"};function Bt(e,r){return r.reduce((n,i)=>i(n),e)}const zt=(e,r="themeId")=>n=>e?[...n].sort((i,l)=>i[r]===e?-1:l[r]===e?1:0):n,Gt=(e,r="themeId")=>n=>{if(!e||e.length===0)return n;const i=new Map(e.map((l,s)=>[l,s]));return[...n].sort((l,s)=>{const d=i.get(l[r])??Number.MAX_SAFE_INTEGER,c=i.get(s[r])??Number.MAX_SAFE_INTEGER;return d-c})},At=e=>r=>[...r].sort((n,i)=>String(n[e]??"").localeCompare(String(i[e]??""))),Dt={resolve:e=>e,action:e=>(...r)=>{console.log("[this.GUI] Action triggered:",e,r)}};function le(e){return!!e&&(typeof e=="object"||typeof e=="function")&&typeof e.then=="function"}function Et(e){return(e==null?void 0:e.React)||(globalThis==null?void 0:globalThis.React)}function Je(e){return!!e&&typeof e=="object"&&!Array.isArray(e)&&"type"in e}function Nt(e){const r=typeof e;return e==null||r==="string"||r==="number"||r==="boolean"}function Qe(e){const r={};if(!e||typeof e!="object")return r;const n=["Registry","registry"];for(const s of n){const d=e[s];if(d&&typeof d=="object")for(const c of Object.keys(d))r[c]=d[c]}for(const s of Object.keys(e))r[s]==null&&(r[s]=e[s]);const i=["Atoms","Molecules","Compounds","Components","Widgets"];for(const s of i){const d=e[s];if(d&&typeof d=="object")for(const c of Object.keys(d))r[c]==null&&(r[c]=d[c])}const l=["atoms","molecules","compounds","components","widgets","theme","menus","hooks","contexts"];for(const s of l){const d=e[s];if(d&&typeof d=="object")for(const c of Object.keys(d))r[c]==null&&(r[c]=d[c])}return r}function Ht(e,r){const n=r==null?void 0:r.gui,i=r==null?void 0:r.registry;if(i&&i[e]!=null)return{Component:i[e],resolvedPath:`registry.${e}`};if(e.includes(".")){const l=e.split(".").filter(Boolean);let s=n;for(const d of l)if(s=s==null?void 0:s[d],s==null)break;if(s!=null)return{Component:s,resolvedPath:`GUI.${e}`};s=i;for(const d of l)if(s=s==null?void 0:s[d],s==null)break;if(s!=null)return{Component:s,resolvedPath:`registry.${e}`}}return n&&n[e]!=null?{Component:n[e],resolvedPath:`GUI.${e}`}:{Component:null}}function Ot(e){return e==null?[]:Array.isArray(e)?e:[e]}function $e(e,r){if(!Je(e))return e;const n=e.props||{};return n.key!=null?e:{...e,props:{...n,key:r}}}function Lt(e,r,n){if(!e||typeof e!="object")return e;const i=r.runtime??Dt,l={type:typeof n.type=="string"?n.type:void 0,node:n};if(i.batchResolve)try{const t=i.batchResolve(e,r.ctx,l);if(!le(t))return t;r.showUnknown&&console.warn("[this.GUI runtime] runtime.batchResolve returned a Promise; async batch is ignored in sync renderer.")}catch(t){r.showUnknown&&console.warn("[this.GUI runtime] runtime.batchResolve failed; falling back to per-prop resolve.",t)}function s(t){return!!t&&typeof t=="object"&&Object.getPrototypeOf(t)===Object.prototype}function d(t,o,m){const f=typeof t[o]=="string"?t[o]:null,u=typeof t[m]=="string"?t[m]:null;return f&&u&&f!==u&&r.showUnknown&&console.warn(`[this.GUI runtime] Conflicting token values for "${o}" and "${m}" at runtime; preferring "${o}".`),f?{expression:f,source:o}:u?{expression:u,source:m}:null}function c(t,o){const m=o.split(".").filter(Boolean);let f=t;for(const u of m)if(f=f==null?void 0:f[u],f===void 0)return;return f}function b(t){return t.replace(/\{\{(.+?)\}\}/g,(o,m)=>{const f=String(m??"").trim();if(!f)return o;const u=f.replace(/^ctx\./,""),h=c(r.ctx,u);return h===void 0?(r.showUnknown&&console.warn(`[this.GUI runtime] Missing context for interpolation: {{${u}}}`),o):String(h)})}function v(t){return r.unsafeAllowAllExpressions?!0:(r.allowedExprRoots&&r.allowedExprRoots.length>0?r.allowedExprRoots:["me/views/","me/public/"]).some(m=>t.startsWith(m))}function C(t,o){const m=s(t)?d(t,"$expr","read"):null;if(m){const u=b(m.expression);if(!v(u))return console.error(`[Security] Blocked access to non-public expression: ${u}`),m.expression;if(!i.resolve)return r.showUnknown&&console.warn(`[this.GUI runtime] ${m.source} found at "${o}" but runtime.resolve is not configured.`),u;try{const h=i.resolve(u,r.ctx,{...l,propKey:o});return le(h)?(r.showUnknown&&console.warn(`[this.GUI runtime] runtime.resolve("${o}") returned a Promise; using raw expression.`),u):h}catch(h){return r.showUnknown&&console.warn(`[this.GUI runtime] runtime.resolve("${o}") failed for ${m.source}; using raw expression.`,h),u}}const f=s(t)?d(t,"$action","write"):null;if(f){const u=b(f.expression);if(!v(u))return console.error(`[Security] Blocked action for non-public expression: ${u}`),()=>{};if(!i.action)return r.showUnknown&&console.warn(`[this.GUI runtime] ${f.source} found at "${o}" but runtime.action is not configured.`),()=>{};try{return i.action(u,r.ctx,{...l,propKey:o})}catch(h){return r.showUnknown&&console.warn(`[this.GUI runtime] runtime.action("${o}") failed for ${f.source}; using noop.`,h),()=>{}}}if(o.startsWith("on")&&typeof t=="string"){const u=b(t);if(!v(u)){console.error(`[Security] Blocked event action for non-public expression: ${u}`);return}if(!i.action){r.showUnknown&&console.warn(`[this.GUI runtime] event prop "${o}" received declarative action string but runtime.action is not configured.`);return}try{return i.action(u,r.ctx,{...l,propKey:o})}catch(h){r.showUnknown&&console.warn(`[this.GUI runtime] runtime.action("${o}") failed; dropping handler.`,h);return}}if(!i.resolve)return t;try{const u=i.resolve(t,r.ctx,{...l,propKey:o});return le(u)?(r.showUnknown&&console.warn(`[this.GUI runtime] runtime.resolve("${o}") returned a Promise; using original value in sync renderer.`),t):u}catch(u){return r.showUnknown&&console.warn(`[this.GUI runtime] runtime.resolve("${o}") failed; using original value.`,u),t}}function I(t,o){if(Array.isArray(t))return t.map((m,f)=>I(m,`${o}[${f}]`));if(s(t)){if(typeof t.$expr=="string"||typeof t.read=="string"||typeof t.$action=="string"||typeof t.write=="string")return C(t,o);const m={};for(const[f,u]of Object.entries(t))m[f]=I(u,`${o}.${f}`);return m}return C(t,o)}const k={};for(const[t,o]of Object.entries(e))k[t]=I(o,t);return k}function Wt(e,r,n){const i=e.props||{},l=i["data-gui-node-id"]??i["data-gui-id"]??i.id,s=l!=null&&String(l).trim()?String(l):`${typeof e.type=="string"?e.type:"node"}:${r}`;return n&&String(n).trim()?`${n}:${s}`:s}function de(e,r,n="r"){var s;const i=Et(r);if(!i)throw new Error("[this.GUI runtime] Missing React. Pass { React: window.React } in the renderer options.");const l=r!=null&&r.gui&&!(r!=null&&r.registry)?{...r,registry:Qe(r.gui)}:r||{};if(Array.isArray(e))return e.map((d,c)=>i.createElement(i.Fragment,{key:`k${c}`},de($e(d,`k${c}`),l,`${n}.${c}`)));if(Nt(e))return e;if(Je(e)){const d=l.transformNode?l.transformNode(e):e,{type:c}=d,b=Lt(d.props,l,d),v=Wt(d,n,l.idPrefix),C={...b??{},...(b==null?void 0:b["data-gui-node-id"])==null?{"data-gui-node-id":v}:{},...(b==null?void 0:b["data-gui-component"])==null&&typeof c=="string"?{"data-gui-component":c}:{}};if(l.onNodeResolved){const t={id:v,type:typeof c=="string"?c:void 0,spec:d,resolvedProps:b,path:n};(typeof queueMicrotask=="function"&&queueMicrotask||(m=>Promise.resolve().then(m)))(()=>{var m;return(m=l.onNodeResolved)==null?void 0:m.call(l,t)})}const k=Ot(d.children).map((t,o)=>i.createElement(i.Fragment,{key:`${typeof c=="string"?c:"node"}-${o}`},de($e(t,`${typeof c=="string"?c:"node"}-${o}`),l,`${n}.${o}`)));if((s=i.isValidElement)!=null&&s.call(i,c))return i.cloneElement(c,C??null,...k);if(typeof c=="function"||typeof c=="object"&&c!=null)return i.createElement(c,C??null,...k);if(typeof c=="string"){const{Component:t}=Ht(c,l);if(!t)return l.showUnknown?i.createElement("div",{style:{padding:10,border:"1px dashed rgba(255,255,255,0.25)",borderRadius:10,opacity:.9,fontFamily:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',fontSize:12}},`Unknown type: ${c}`):null;if(t&&typeof t=="object"&&typeof t.resolve=="function"){const o={...d,props:{...C??{},...k.length>0?{children:k.length===1?k[0]:k}:{}}};return t.resolve(o,l.ctx)}return i.createElement(t,C??null,...k)}}return null}function Te(e,r,n){const i=(n==null?void 0:n.registry)||Qe(r);return de(e,{...n,gui:r,registry:i})}function Ue(e){var i,l,s,d;const r=[],n=(i=e.mode)==null?void 0:i.light;return typeof n=="object"&&(n!=null&&n.palette)&&((l=n.palette.primary)!=null&&l.main&&r.push({label:"Primary",value:n.palette.primary.main}),(s=n.palette.secondary)!=null&&s.main&&r.push({label:"Secondary",value:n.palette.secondary.main}),(d=n.palette.background)!=null&&d.default&&r.push({label:"Background",value:n.palette.background.default})),r}function Ke({sx:e,variant:r="grid",hideDescription:n=!1,hideAuthor:i=!1,minimal:l=!1,compact:s=!1,hideTitle:d=!1,hideModeToggle:c=!1}={}){var ge,ye;const b=ft(),{setMode:v,mode:C,themeId:I,setThemeId:k}=mt(),t=!!s,o=!!(l||t),m=t?"grid":r,f=o?!0:n,u=o?!0:i,h=!!d,G=typeof window<"u",x=G?window.me:void 0,ae=T.useId(),N=G?window.GUI:void 0,ue=(ye=(ge=globalThis==null?void 0:globalThis["GUI-NODES-STORE"])==null?void 0:ge.actions)==null?void 0:ye.registerNode,[H,se]=T.useState(()=>{if(!x||typeof x!="function")return[];try{const a=x("public.ui.theme.history");return Array.isArray(a)?a.filter(Boolean):[]}catch{return[]}});T.useEffect(()=>{if(!(!x||typeof x!="function"))try{const a=x("public.ui.theme.history");Array.isArray(a)&&se(a.filter(Boolean))}catch{}},[x]);const O=T.useMemo(()=>Bt(b,[zt(I,"themeId"),Gt(H,"themeId"),At("themeName")]),[b,I,H]);if(!b||b.length===0)return p.jsx(E,{children:"No themes available."});const et=`themes-catalog-${String(ae||"catalog").replace(/[^a-zA-Z0-9_-]/g,"")}`,tt=(a,S)=>{if(!N||typeof Te!="function")return null;try{return Te(a,N,{React:ht,idPrefix:S,onNodeResolved:typeof ue=="function"?ue:void 0})}catch{return null}},me=(a,S)=>{var y,j,z,xe,be,ve;const A=!!((y=a.mode)!=null&&y.light),M=!!((j=a.mode)!=null&&j.dark),U=C==="dark",P=(xe=(z=a.mode)==null?void 0:z[U?"dark":"light"])==null?void 0:xe.palette,L=(be=P==null?void 0:P.primary)==null?void 0:be.main,B=U?"rgba(255,255,255,0.22)":"rgba(0,0,0,0.12)",$=a.themeId??"",R=()=>{if(typeof k=="function"&&k($),typeof v=="function"){const g=C==="dark"?"dark":"light";if(v(g),x&&$)try{x.public.ui.theme.selected($),x.public.ui.theme.mode(g)}catch{}}if($){const g=[$,...H.filter(Y=>Y!==$)].slice(0,12);if(se(g),x)try{x.public.ui.theme.history(g)}catch{}}},W=g=>{(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),R())},D=a.badgeUrl?{type:X,props:{"data-gui-component":"Avatar",src:a.badgeUrl,alt:a.themeName,sx:t?{width:28,height:28,mt:.45}:{mt:.45}}}:{type:X,props:{"data-gui-component":"Avatar",sx:t?{width:28,height:28,fontSize:13,mt:.45}:{mt:.45}},children:[((ve=a.themeName)==null?void 0:ve[0])??"T"]},F=h?[D]:[D,{type:w,props:{"data-gui-component":"Box",sx:{display:"flex",flexDirection:"column",gap:.25,minWidth:0}},children:[{type:E,props:{"data-gui-component":"Typography",variant:"body2",sx:{fontSize:t?12:o?14:void 0,lineHeight:t?1.05:o?1.15:void 0,fontWeight:700}},children:[a.themeName??"Theme"]},u?null:{type:E,props:{"data-gui-component":"Typography",variant:"caption",sx:{fontSize:t?9:o?11:void 0,lineHeight:t?1.05:o?1.1:void 0,color:"text.secondary"}},children:[a.author??""]}]}],V=Ue(a).map((g,Y)=>({type:je,props:{title:g.label},children:[{type:w,props:{key:`${a.themeId}-swatch-${Y}`,"data-gui-component":"Swatch",sx:{width:t?10:o?12:14,height:t?10:o?12:14,borderRadius:1,...String(g.value).includes("gradient")?{background:g.value}:{bgcolor:g.value},border:"1px solid rgba(0,0,0,0.2)"}}}]})),_=a.themeId===I&&!c?{type:w,props:{"data-gui-component":"Box",sx:{display:"flex",justifyContent:"flex-end",alignItems:"center",mt:t?.25:o?.35:.5,mb:t?.1:o?.15:.25}},children:[{type:Z,props:{"data-gui-component":"Icon",name:"light_mode",style:{opacity:A?1:.4}}},{type:Se,props:{"data-gui-component":"Switch",size:"small",checked:U,disabled:!A||!M,onChange:g=>{var ke;const nt=((ke=g==null?void 0:g.target)==null?void 0:ke.checked)?"dark":"light";if(typeof v=="function")try{v(nt)}catch{}},inputProps:{"aria-label":"Toggle light/dark mode"}}},{type:Z,props:{"data-gui-component":"Icon",name:"dark_mode",style:{opacity:M?1:.4}}}]}:null;return{type:w,props:{sx:{position:"relative"},key:a.themeId||`theme-${S}`,"data-gui-component":"ThemeCard","data-gui-id":a.themeId?`theme-card-${a.themeId}`:void 0},children:[{type:Ie,props:{"data-gui-component":"Card",sx:{p:t?.25:o?.5:.75,display:"flex",flexDirection:"column",justifyContent:"space-between",backgroundColor:"transparent",backgroundImage:"none",border:L?`1px solid color-mix(in srgb, ${L} 70%, transparent)`:`1px solid ${B}`,borderRadius:t?1:o?1.25:1.5,boxShadow:"none",height:"100%",gap:t?.05:o?.08:.12,minWidth:0,cursor:"pointer",transition:"transform 120ms ease, box-shadow 120ms ease","&:hover":{transform:"translateY(-1px)"},"&:active":{transform:"translateY(0px)"}},onClick:R,role:"button",tabIndex:0,onKeyDown:W},children:[{type:w,props:{"data-gui-component":"CardHeader",sx:{display:"flex",alignItems:"center",gap:t?.6:o?.75:1,mb:0,py:t?.05:o?.12:.16,...h?{justifyContent:"center"}:null}},children:F},{type:w,props:{"data-gui-component":"SwatchRow",sx:{display:"flex",gap:t?.35:o?.5:.75,flexWrap:"wrap",mt:t?.2:o?.45:.6}},children:V},f?null:{type:E,props:{"data-gui-component":"Description",variant:"body2",color:"text.secondary",sx:{mt:.25}},children:[a.description??""]},_,{type:w,props:{"data-gui-component":"CheckboxSlot",sx:{position:"absolute",top:t?4:o?6:8,right:t?4:o?6:8}},children:[{type:ie,props:{"data-gui-component":"Checkbox","data-gui-id":a.themeId?`theme-checkbox-${a.themeId}`:void 0,size:"small",color:"primary",checked:a.themeId===I,onChange:R,onClick:g=>{g!=null&&g.stopPropagation&&g.stopPropagation(),R()},sx:{p:t?.25:o?.35:.5,backgroundColor:"background.paper",borderRadius:1}}}]}]}]}},rt={type:w,props:{sx:{display:"flex",flexDirection:"column",gap:t?1:2,...e}},children:O.map((a,S)=>me(a,S))},ot={type:q,props:{container:!0,spacing:t?1:o?1.5:2,sx:e},children:O.map((a,S)=>({type:q,props:{"data-gui-component":"GridItem",item:!0,xs:t?4:6,sm:t?3:6,md:t?2:4,lg:t?2:3,xl:t?2:3,sx:{...t?{"@media (max-width: 420px)":{flexBasis:"50%",maxWidth:"50%"},"@media (max-width: 360px)":{flexBasis:"100%",maxWidth:"100%"}}:{"@media (max-width: 360px)":{flexBasis:"100%",maxWidth:"100%"}}},key:a.themeId||`theme-${S}`},children:[me(a,S)]}))},fe=tt(m==="list"?rt:ot,et);if(fe)return fe;const he=({theme:a})=>{var R,W,D,F,V,_;const S=!!((R=a.mode)!=null&&R.light),A=!!((W=a.mode)!=null&&W.dark),M=C==="dark",U=(F=(D=a.mode)==null?void 0:D[M?"dark":"light"])==null?void 0:F.palette,P=(V=U==null?void 0:U.primary)==null?void 0:V.main,L=M?"rgba(255,255,255,0.22)":"rgba(0,0,0,0.12)";function B(){const y=a.themeId??"";if(typeof k=="function"&&k(y),typeof v=="function"){const j=C==="dark"?"dark":"light";if(v(j),x&&y)try{x.public.ui.theme.selected(y),x.public.ui.theme.mode(j)}catch{}}if(y){const j=[y,...H.filter(z=>z!==y)].slice(0,12);if(se(j),x)try{x.public.ui.theme.history(j)}catch{}}}function $(y){(y.key==="Enter"||y.key===" ")&&(y.preventDefault(),B())}return p.jsx(w,{sx:{position:"relative"},children:p.jsxs(Ie,{sx:{p:t?.25:o?.5:.75,display:"flex",flexDirection:"column",justifyContent:"space-between",backgroundColor:"transparent",backgroundImage:"none",border:P?`1px solid color-mix(in srgb, ${P} 70%, transparent)`:`1px solid ${L}`,borderRadius:t?1:o?1.25:1.5,boxShadow:"none",height:"100%",gap:t?.05:o?.08:.12,minWidth:0,cursor:"pointer",transition:"transform 120ms ease, box-shadow 120ms ease","&:hover":{transform:"translateY(-1px)"},"&:active":{transform:"translateY(0px)"},"& .MuiCardHeader-root, & .MuiCardContent-root, & .MuiCardActions-root":{backgroundColor:"transparent",backgroundImage:"none"}},onClick:B,role:"button",tabIndex:0,onKeyDown:$,children:[p.jsx(yt,{sx:{mb:0,py:t?.05:o?.12:.16,...h?{display:"flex",justifyContent:"center"}:null,"& .MuiCardHeader-content":{overflow:"hidden",...h?{display:"none"}:null},"& .MuiCardHeader-avatar":{...h?{marginRight:0}:null},"& .MuiCardHeader-title":{fontSize:t?12:o?14:void 0,lineHeight:t?1.05:o?1.15:void 0},"& .MuiCardHeader-subheader":{fontSize:t?9:o?11:void 0,lineHeight:t?1.05:o?1.1:void 0}},avatar:a.badgeUrl?p.jsx(X,{src:a.badgeUrl,alt:a.themeName,sx:t?{width:28,height:28,mt:.45}:{mt:.45}}):p.jsx(X,{sx:t?{width:28,height:28,fontSize:13,mt:.45}:{mt:.45},children:((_=a.themeName)==null?void 0:_[0])??"T"}),title:h?void 0:a.themeName,subheader:h||u?void 0:a.author}),p.jsx(w,{sx:{display:"flex",gap:t?.35:o?.5:.75,flexWrap:"wrap",mt:t?.2:o?.45:.6},children:Ue(a).map((y,j)=>p.jsx(je,{title:y.label,children:p.jsx(w,{sx:{width:t?10:o?12:14,height:t?10:o?12:14,borderRadius:1,...String(y.value).includes("gradient")?{background:y.value}:{bgcolor:y.value},border:"1px solid rgba(0,0,0,0.2)"}})},`${a.themeId}-swatch-${j}`))}),p.jsx(w,{sx:{position:"absolute",top:t?4:o?6:8,right:t?4:o?6:8},children:p.jsx(ie,{size:"small",color:"primary",checked:a.themeId===I,onChange:B,onClick:y=>{y.stopPropagation(),B()},sx:{p:t?.25:o?.35:.5,backgroundColor:"background.paper",borderRadius:1}})}),p.jsxs(xt,{sx:{p:t?.35:o?.45:.55,pt:t?.1:o?.15:.2,backgroundColor:"transparent"},children:[!f&&p.jsx(E,{variant:"body2",color:"text.secondary",children:a.description}),a.themeId===I&&!c&&p.jsxs(w,{sx:{display:"flex",justifyContent:"flex-end",alignItems:"center",mt:t?.25:o?.35:.5,mb:t?.1:o?.15:.25},children:[p.jsx(Z,{name:"light_mode",style:{opacity:S?1:.4}}),p.jsx(Se,{size:"small",checked:M,disabled:!S||!A,onChange:y=>{const z=y.target.checked?"dark":"light";if(typeof v=="function")try{v(z)}catch{}},inputProps:{"aria-label":"Toggle light/dark mode"}}),p.jsx(Z,{name:"dark_mode",style:{opacity:A?1:.4}})]})]}),p.jsx(bt,{})]})})};return m==="list"?p.jsx(w,{sx:{display:"flex",flexDirection:"column",gap:t?1:2,...e},children:O.map(a=>p.jsx(w,{children:p.jsx(he,{theme:a})},a.themeId))}):p.jsx(q,{container:!0,spacing:t?1:o?1.5:2,sx:e,children:O.map(a=>p.jsx(q,{item:!0,xs:t?4:6,sm:t?3:6,md:t?2:4,lg:t?2:3,xl:t?2:3,sx:{...t?{"@media (max-width: 420px)":{flexBasis:"50%",maxWidth:"50%"},"@media (max-width: 360px)":{flexBasis:"100%",maxWidth:"100%"}}:{"@media (max-width: 360px)":{flexBasis:"100%",maxWidth:"100%"}}},children:p.jsx(he,{theme:a})},a.themeId))})}Ke.__docgenInfo={description:"",methods:[],displayName:"ThemesCatalog"};const gr={title:"GUI/Theme/Catalog",component:Ke,tags:["autodocs"],decorators:[e=>{const r=()=>{try{const n=gt("Theme/Palette","Default");if(typeof n=="function")return n()}catch{}window.location.hash="#/story/theme-palette--default"};return p.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",background:"var(--mui-palette-background-default, #0b0f14)"},children:[p.jsxs("div",{style:{position:"sticky",top:0,zIndex:10,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 12px",borderBottom:"1px solid var(--mui-palette-divider, rgba(255,255,255,0.08))",backdropFilter:"blur(10px)",background:"color-mix(in srgb, var(--mui-palette-background-paper, #0a0e14) 72%, transparent)",color:"var(--mui-palette-text-primary, #fff)"},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[p.jsx("div",{style:{fontWeight:700,letterSpacing:-.2},children:"Themes Catalog"}),p.jsx("div",{style:{opacity:.7,fontSize:12},children:"Browse & select GUI themes"})]}),p.jsx("button",{type:"button",onClick:r,title:"Open Palette stories","aria-label":"Open Palette stories",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:36,height:36,borderRadius:10,border:"1px solid var(--mui-palette-divider, rgba(255,255,255,0.12))",background:"var(--mui-palette-action-hover, rgba(255,255,255,0.04))",color:"var(--mui-palette-text-primary, rgba(255,255,255,0.92))",cursor:"pointer"},children:p.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:p.jsx("path",{d:"M12 3c-4.97 0-9 3.58-9 8c0 2.76 1.66 5.2 4.26 6.67c.58.33.94.95.94 1.61V21c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-1.18c0-.66.36-1.28.94-1.61C19.34 16.2 21 13.76 21 11c0-4.42-4.03-8-9-8zm2.5 7c.83 0 1.5.67 1.5 1.5S15.33 13 14.5 13S13 12.33 13 11.5S13.67 10 14.5 10zM7.5 13C6.67 13 6 12.33 6 11.5S6.67 10 7.5 10S9 10.67 9 11.5S8.33 13 7.5 13zm2-4.5C8.67 8.5 8 7.83 8 7s.67-1.5 1.5-1.5S11 6.17 11 7s-.67 1.5-1.5 1.5zm5 0C13.67 8.5 13 7.83 13 7s.67-1.5 1.5-1.5S16 6.17 16 7s-.67 1.5-1.5 1.5z"})})})]}),p.jsx("div",{style:{padding:16,minHeight:320,flex:1},children:p.jsx(e,{})})]})}],parameters:{docs:{description:{component:`
The **ThemesCatalog** is a *state-aware theme selector* that renders available GUI themes as interactive cards.

Think of it as a **visual controller over your ThemeContext**, not just a list.

---
## Mental Model

The component operates across **three layers**:

1. **Data Layer**
   - Sources themes from \`getGuiThemes()\`
   - Each theme is a \`ThemeManifest\`

2. **State Layer**
   - Reads and writes from \`useThemeContext()\`
   - Controls:
     - \`themeId\`
     - \`mode\` (light / dark)

3. **Presentation Layer**
   - Renders themes as cards
   - Supports layout + density variants

---
## Variants (Layout vs Density)

### Layout Variants
- \`grid\` → visual gallery (default)
- \`list\` → vertical stack

### Density Modifiers
These *override layout behavior*:

- \`minimal\`
  - Hides author + description
  - Keeps structure

- \`compact\`
  - Forces grid layout
  - Reduces spacing, typography, and sizing
  - Optimized for dashboards / side panels

👉 **Important:**
\`compact\` is not just visual — it *changes layout rules*.

---
## Behavior

- Selecting a card:
  - Updates global theme (\`themeId\`)
  - Syncs mode (light/dark)
  - Stores history via \`meRef\`

- Active theme:
  - Highlighted
  - Shows mode toggle (unless disabled)

---
## Usage

### Basic
~~~jsx
<ThemesCatalog />
~~~

### List View
~~~jsx
<ThemesCatalog variant="list" />
~~~

### Minimal UI
~~~jsx
<ThemesCatalog minimal />
~~~

### Compact (Dense Grid)
~~~jsx
<ThemesCatalog compact />
~~~

---
## Declarative
~~~json
{
  "type": "ThemesCatalog",
  "props": {
    "compact": true
  }
}
~~~

---
## When to use

- Theme pickers (user settings)
- Design system previews
- Admin / dev tools
- Embedded UI panels

---
## Key Insight

This is not just a component.

It is a **bridge between theme data, global state, and UI representation**.

That’s why it supports both:
- Imperative React usage
- Declarative GUI specs
        `}}},argTypes:{variant:{control:{type:"radio"},options:["grid","list"],description:"Choose layout variant"},hideDescription:{control:{type:"boolean"},description:"Hide the theme description text inside each card"},hideAuthor:{control:{type:"boolean"},description:"Hide the theme author text inside each card"},minimal:{control:{type:"boolean"},description:"Compact view (hides both author and description)"}},args:{variant:"grid",hideDescription:!1,hideAuthor:!1,minimal:!1}},J={args:{variant:"grid"}},Q={name:"List layout",args:{variant:"list"}},K={name:"No descriptions",args:{variant:"grid",hideDescription:!0}},ee={name:"Minimal (no author, no description)",args:{variant:"grid",minimal:!0}},te={name:"Compact (dense grid)",args:{compact:!0}},re={name:"Compact + Minimal",args:{compact:!0,minimal:!0}},oe={name:"List + Minimal",args:{variant:"list",minimal:!0}};var Re,Me,Pe;J.parameters={...J.parameters,docs:{...(Re=J.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    variant: 'grid'
  }
}`,...(Pe=(Me=J.parameters)==null?void 0:Me.docs)==null?void 0:Pe.source}}};var Be,ze,Ge;Q.parameters={...Q.parameters,docs:{...(Be=Q.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  name: 'List layout',
  args: {
    variant: 'list'
  }
}`,...(Ge=(ze=Q.parameters)==null?void 0:ze.docs)==null?void 0:Ge.source}}};var Ae,De,Ee;K.parameters={...K.parameters,docs:{...(Ae=K.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  name: 'No descriptions',
  args: {
    variant: 'grid',
    hideDescription: true
  }
}`,...(Ee=(De=K.parameters)==null?void 0:De.docs)==null?void 0:Ee.source}}};var Ne,He,Oe;ee.parameters={...ee.parameters,docs:{...(Ne=ee.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  name: 'Minimal (no author, no description)',
  args: {
    variant: 'grid',
    minimal: true
  }
}`,...(Oe=(He=ee.parameters)==null?void 0:He.docs)==null?void 0:Oe.source}}};var Le,We,Fe;te.parameters={...te.parameters,docs:{...(Le=te.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  name: 'Compact (dense grid)',
  args: {
    compact: true
  }
}`,...(Fe=(We=te.parameters)==null?void 0:We.docs)==null?void 0:Fe.source}}};var Ve,_e,Ye;re.parameters={...re.parameters,docs:{...(Ve=re.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  name: 'Compact + Minimal',
  args: {
    compact: true,
    minimal: true
  }
}`,...(Ye=(_e=re.parameters)==null?void 0:_e.docs)==null?void 0:Ye.source}}};var qe,Xe,Ze;oe.parameters={...oe.parameters,docs:{...(qe=oe.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  name: 'List + Minimal',
  args: {
    variant: 'list',
    minimal: true
  }
}`,...(Ze=(Xe=oe.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};const yr=["Playground","ListVariant","NoDescriptions","Minimal","Compact","CompactMinimal","ListMinimal"];export{te as Compact,re as CompactMinimal,oe as ListMinimal,Q as ListVariant,ee as Minimal,K as NoDescriptions,J as Playground,yr as __namedExportsOrder,gr as default};
