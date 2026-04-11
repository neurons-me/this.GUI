import{j as r,g as et,h as tt,r as I,c as at,d as ot,aT as re,e as rt,s as it,a_ as nt,m as st,f as ve,aU as Ce,az as ct,T as U,B as p,bq as lt,R as dt,ay as pt}from"./iframe-B26CALAz.js";import{G as Y}from"./Grid-GIvg3SIh.js";import{C as ke}from"./Card-dCdXC7Hu.js";import{C as mt}from"./CardHeader-D99j_Lqo.js";import{C as ut}from"./CardContent-WMp_21Eq.js";import{C as ht}from"./CardActions-kUKWnRgo.js";import{A as X}from"./Avatar-FEiYSSB6.js";import{a as gt,S as Ie}from"./Switch-DEdKMoxc.js";import{c as le}from"./createSvgIcon-D0Oa0mpn.js";import{u as ft}from"./useSlot-DcL_IPHt.js";import{m as xt}from"./Grow-CB76i9l6.js";import{T as Se}from"./Tooltip-DhnVtazG.js";import{I as q}from"./Icon-BwfjAmbM.js";import{r as je}from"./renderer-IlqJ4LLC.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-Dt3QYluA.js";import"./Avatar-lotYJ8jQ.js";import"./useFormControl-DUHw5UkJ.js";import"./useControlled-DCXjgbPx.js";import"./ButtonBase-CL1dL2Cz.js";import"./TransitionGroupContext-DkIGTr29.js";import"./useForkRef-CXnDbkaK.js";import"./parts-DfHlX3qI.js";import"./selectionStore-Coy7dh9o.js";const yt=le(r.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),bt=le(r.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),vt=le(r.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function Ct(a){return et("MuiCheckbox",a)}const ce=tt("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),kt=a=>{const{classes:i,indeterminate:n,color:d,size:m}=a,u={root:["root",n&&"indeterminate",`color${re(d)}`,`size${re(m)}`]},x=rt(u,Ct,i);return{...i,...x}},It=it(gt,{shouldForwardProp:a=>nt(a)||a==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(a,i)=>{const{ownerState:n}=a;return[i.root,n.indeterminate&&i.indeterminate,i[`size${re(n.size)}`],n.color!=="default"&&i[`color${re(n.color)}`]]}})(st(({theme:a})=>({color:(a.vars||a).palette.text.secondary,variants:[{props:{color:"default",disableRipple:!1},style:{"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette.action.activeChannel} / ${a.vars.palette.action.hoverOpacity})`:ve(a.palette.action.active,a.palette.action.hoverOpacity)}}},...Object.entries(a.palette).filter(Ce()).map(([i])=>({props:{color:i,disableRipple:!1},style:{"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette[i].mainChannel} / ${a.vars.palette.action.hoverOpacity})`:ve(a.palette[i].main,a.palette.action.hoverOpacity)}}})),...Object.entries(a.palette).filter(Ce()).map(([i])=>({props:{color:i},style:{[`&.${ce.checked}, &.${ce.indeterminate}`]:{color:(a.vars||a).palette[i].main},[`&.${ce.disabled}`]:{color:(a.vars||a).palette.action.disabled}}})),{props:{disableRipple:!1},style:{"&:hover":{"@media (hover: none)":{backgroundColor:"transparent"}}}}]}))),St=r.jsx(bt,{}),jt=r.jsx(yt,{}),wt=r.jsx(vt,{}),Tt=I.forwardRef(function(i,n){const d=at({props:i,name:"MuiCheckbox"}),{checkedIcon:m=St,color:u="primary",icon:x=jt,indeterminate:b=!1,indeterminateIcon:S=wt,inputProps:y,size:C="medium",disableRipple:v=!1,className:T,slots:e={},slotProps:o={},...A}=d,D=b?S:x,P=b?S:m,h={...d,disableRipple:v,color:u,indeterminate:b,size:C},H=kt(h),l=o.input??y,[ne,G]=ft("root",{ref:n,elementType:It,className:ot(H.root,T),shouldForwardComponentProp:!0,externalForwardedProps:{slots:e,slotProps:o,...A},ownerState:h,additionalProps:{type:"checkbox",icon:I.cloneElement(D,{fontSize:D.props.fontSize??C}),checkedIcon:I.cloneElement(P,{fontSize:P.props.fontSize??C}),disableRipple:v,slots:e,slotProps:{input:xt(typeof l=="function"?l(h):l,{"data-indeterminate":b})}}});return r.jsx(ne,{...G,classes:H})}),ie=I.forwardRef(function(i,n){return r.jsx(Tt,{ref:n,...i})});ie.displayName="Gui.Checkbox";ie.__docgenInfo={description:`This.GUI — Checkbox (atom)
Thin wrapper over MUI's Checkbox.`,methods:[],displayName:"Gui.Checkbox"};function Mt(a,i){return i.reduce((n,d)=>d(n),a)}const zt=(a,i="themeId")=>n=>a?[...n].sort((d,m)=>d[i]===a?-1:m[i]===a?1:0):n,Bt=(a,i="themeId")=>n=>{if(!a||a.length===0)return n;const d=new Map(a.map((m,u)=>[m,u]));return[...n].sort((m,u)=>{const x=d.get(m[i])??Number.MAX_SAFE_INTEGER,b=d.get(u[i])??Number.MAX_SAFE_INTEGER;return x-b})},Rt=a=>i=>[...i].sort((n,d)=>String(n[a]??"").localeCompare(String(d[a]??"")));function we(a){var d,m,u,x;const i=[],n=(d=a.mode)==null?void 0:d.light;return typeof n=="object"&&(n!=null&&n.palette)&&((m=n.palette.primary)!=null&&m.main&&i.push({label:"Primary",value:n.palette.primary.main}),(u=n.palette.secondary)!=null&&u.main&&i.push({label:"Secondary",value:n.palette.secondary.main}),(x=n.palette.background)!=null&&x.default&&i.push({label:"Background",value:n.palette.background.default})),i}function Ye({sx:a,variant:i="grid",hideDescription:n=!1,hideAuthor:d=!1,minimal:m=!1,compact:u=!1,hideTitle:x=!1,hideModeToggle:b=!1}={}){var he,ge;const S=lt(),{setMode:y,mode:C,themeId:v,setThemeId:T}=ct(),e=!!u,o=!!(m||e),A=e?"grid":i,D=o?!0:n,P=o?!0:d,h=!!x,H=typeof window<"u",l=H?window.me:void 0,ne=I.useId(),G=H?window.GUI:void 0,de=(ge=(he=globalThis==null?void 0:globalThis["GUI-NODES-STORE"])==null?void 0:he.actions)==null?void 0:ge.registerNode,[E,se]=I.useState(()=>{if(!l||typeof l!="function")return[];try{const t=l("public.ui.theme.history");return Array.isArray(t)?t.filter(Boolean):[]}catch{return[]}});I.useEffect(()=>{if(!(!l||typeof l!="function"))try{const t=l("public.ui.theme.history");Array.isArray(t)&&se(t.filter(Boolean))}catch{}},[l]);const L=I.useMemo(()=>Mt(S,[zt(v,"themeId"),Bt(E,"themeId"),Rt("themeName")]),[S,v,E]);if(!S||S.length===0)return r.jsx(U,{children:"No themes available."});const Xe=`themes-catalog-${String(ne||"catalog").replace(/[^a-zA-Z0-9_-]/g,"")}`,qe=(t,g)=>{if(!G||typeof je!="function")return null;try{return je(t,G,{React:dt,idPrefix:g,onNodeResolved:typeof de=="function"?de:void 0})}catch{return null}},pe=(t,g)=>{var c,f,R,fe,xe,ye;const $=!!((c=t.mode)!=null&&c.light),M=!!((f=t.mode)!=null&&f.dark),j=C==="dark",z=(fe=(R=t.mode)==null?void 0:R[j?"dark":"light"])==null?void 0:fe.palette,_=(xe=z==null?void 0:z.primary)==null?void 0:xe.main,B=j?"rgba(255,255,255,0.22)":"rgba(0,0,0,0.12)",k=t.themeId??"",w=()=>{if(typeof T=="function"&&T(k),typeof y=="function"){const s=C==="dark"?"dark":"light";if(y(s),l&&k)try{l.public.ui.theme.selected(k),l.public.ui.theme.mode(s)}catch{}}if(k){const s=[k,...E.filter(K=>K!==k)].slice(0,12);if(se(s),l)try{l.public.ui.theme.history(s)}catch{}}},W=s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),w())},N=t.badgeUrl?{type:X,props:{"data-gui-component":"Avatar",src:t.badgeUrl,alt:t.themeName,sx:e?{width:28,height:28,mt:.45}:{mt:.45}}}:{type:X,props:{"data-gui-component":"Avatar",sx:e?{width:28,height:28,fontSize:13,mt:.45}:{mt:.45}},children:[((ye=t.themeName)==null?void 0:ye[0])??"T"]},O=h?[N]:[N,{type:p,props:{"data-gui-component":"Box",sx:{display:"flex",flexDirection:"column",gap:.25,minWidth:0}},children:[{type:U,props:{"data-gui-component":"Typography",variant:"body2",sx:{fontSize:e?12:o?14:void 0,lineHeight:e?1.05:o?1.15:void 0,fontWeight:700}},children:[t.themeName??"Theme"]},P?null:{type:U,props:{"data-gui-component":"Typography",variant:"caption",sx:{fontSize:e?9:o?11:void 0,lineHeight:e?1.05:o?1.1:void 0,color:"text.secondary"}},children:[t.author??""]}]}],V=we(t).map((s,K)=>({type:Se,props:{title:s.label},children:[{type:p,props:{key:`${t.themeId}-swatch-${K}`,"data-gui-component":"Swatch",sx:{width:e?10:o?12:14,height:e?10:o?12:14,borderRadius:1,...String(s.value).includes("gradient")?{background:s.value}:{bgcolor:s.value},border:"1px solid rgba(0,0,0,0.2)"}}}]})),F=t.themeId===v&&!b?{type:p,props:{"data-gui-component":"Box",sx:{display:"flex",justifyContent:"flex-end",alignItems:"center",mt:e?.25:o?.35:.5,mb:e?.1:o?.15:.25}},children:[{type:q,props:{"data-gui-component":"Icon",name:"light_mode",style:{opacity:$?1:.4}}},{type:Ie,props:{"data-gui-component":"Switch",size:"small",checked:j,disabled:!$||!M,onChange:s=>{var be;const Qe=((be=s==null?void 0:s.target)==null?void 0:be.checked)?"dark":"light";if(typeof y=="function")try{y(Qe)}catch{}},inputProps:{"aria-label":"Toggle light/dark mode"}}},{type:q,props:{"data-gui-component":"Icon",name:"dark_mode",style:{opacity:M?1:.4}}}]}:null;return{type:p,props:{sx:{position:"relative"},key:t.themeId||`theme-${g}`,"data-gui-component":"ThemeCard","data-gui-id":t.themeId?`theme-card-${t.themeId}`:void 0},children:[{type:ke,props:{"data-gui-component":"Card",sx:{p:e?.25:o?.5:.75,display:"flex",flexDirection:"column",justifyContent:"space-between",backgroundColor:"transparent",backgroundImage:"none",border:_?`1px solid color-mix(in srgb, ${_} 70%, transparent)`:`1px solid ${B}`,borderRadius:e?1:o?1.25:1.5,boxShadow:"none",height:"100%",gap:e?.05:o?.08:.12,minWidth:0,cursor:"pointer",transition:"transform 120ms ease, box-shadow 120ms ease","&:hover":{transform:"translateY(-1px)"},"&:active":{transform:"translateY(0px)"}},onClick:w,role:"button",tabIndex:0,onKeyDown:W},children:[{type:p,props:{"data-gui-component":"CardHeader",sx:{display:"flex",alignItems:"center",gap:e?.6:o?.75:1,mb:0,py:e?.05:o?.12:.16,...h?{justifyContent:"center"}:null}},children:O},{type:p,props:{"data-gui-component":"SwatchRow",sx:{display:"flex",gap:e?.35:o?.5:.75,flexWrap:"wrap",mt:e?.2:o?.45:.6}},children:V},D?null:{type:U,props:{"data-gui-component":"Description",variant:"body2",color:"text.secondary",sx:{mt:.25}},children:[t.description??""]},F,{type:p,props:{"data-gui-component":"CheckboxSlot",sx:{position:"absolute",top:e?4:o?6:8,right:e?4:o?6:8}},children:[{type:ie,props:{"data-gui-component":"Checkbox","data-gui-id":t.themeId?`theme-checkbox-${t.themeId}`:void 0,size:"small",color:"primary",checked:t.themeId===v,onChange:w,onClick:s=>{s!=null&&s.stopPropagation&&s.stopPropagation(),w()},sx:{p:e?.25:o?.35:.5,backgroundColor:"background.paper",borderRadius:1}}}]}]}]}},Ze={type:p,props:{sx:{display:"flex",flexDirection:"column",gap:e?1:2,...a}},children:L.map((t,g)=>pe(t,g))},Je={type:Y,props:{container:!0,spacing:e?1:o?1.5:2,sx:a},children:L.map((t,g)=>({type:Y,props:{"data-gui-component":"GridItem",item:!0,xs:e?4:6,sm:e?3:6,md:e?2:4,lg:e?2:3,xl:e?2:3,sx:{...e?{"@media (max-width: 420px)":{flexBasis:"50%",maxWidth:"50%"},"@media (max-width: 360px)":{flexBasis:"100%",maxWidth:"100%"}}:{"@media (max-width: 360px)":{flexBasis:"100%",maxWidth:"100%"}}},key:t.themeId||`theme-${g}`},children:[pe(t,g)]}))},me=qe(A==="list"?Ze:Je,Xe);if(me)return me;const ue=({theme:t})=>{var w,W,N,O,V,F;const g=!!((w=t.mode)!=null&&w.light),$=!!((W=t.mode)!=null&&W.dark),M=C==="dark",j=(O=(N=t.mode)==null?void 0:N[M?"dark":"light"])==null?void 0:O.palette,z=(V=j==null?void 0:j.primary)==null?void 0:V.main,_=M?"rgba(255,255,255,0.22)":"rgba(0,0,0,0.12)";function B(){const c=t.themeId??"";if(typeof T=="function"&&T(c),typeof y=="function"){const f=C==="dark"?"dark":"light";if(y(f),l&&c)try{l.public.ui.theme.selected(c),l.public.ui.theme.mode(f)}catch{}}if(c){const f=[c,...E.filter(R=>R!==c)].slice(0,12);if(se(f),l)try{l.public.ui.theme.history(f)}catch{}}}function k(c){(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),B())}return r.jsx(p,{sx:{position:"relative"},children:r.jsxs(ke,{sx:{p:e?.25:o?.5:.75,display:"flex",flexDirection:"column",justifyContent:"space-between",backgroundColor:"transparent",backgroundImage:"none",border:z?`1px solid color-mix(in srgb, ${z} 70%, transparent)`:`1px solid ${_}`,borderRadius:e?1:o?1.25:1.5,boxShadow:"none",height:"100%",gap:e?.05:o?.08:.12,minWidth:0,cursor:"pointer",transition:"transform 120ms ease, box-shadow 120ms ease","&:hover":{transform:"translateY(-1px)"},"&:active":{transform:"translateY(0px)"},"& .MuiCardHeader-root, & .MuiCardContent-root, & .MuiCardActions-root":{backgroundColor:"transparent",backgroundImage:"none"}},onClick:B,role:"button",tabIndex:0,onKeyDown:k,children:[r.jsx(mt,{sx:{mb:0,py:e?.05:o?.12:.16,...h?{display:"flex",justifyContent:"center"}:null,"& .MuiCardHeader-content":{overflow:"hidden",...h?{display:"none"}:null},"& .MuiCardHeader-avatar":{...h?{marginRight:0}:null},"& .MuiCardHeader-title":{fontSize:e?12:o?14:void 0,lineHeight:e?1.05:o?1.15:void 0},"& .MuiCardHeader-subheader":{fontSize:e?9:o?11:void 0,lineHeight:e?1.05:o?1.1:void 0}},avatar:t.badgeUrl?r.jsx(X,{src:t.badgeUrl,alt:t.themeName,sx:e?{width:28,height:28,mt:.45}:{mt:.45}}):r.jsx(X,{sx:e?{width:28,height:28,fontSize:13,mt:.45}:{mt:.45},children:((F=t.themeName)==null?void 0:F[0])??"T"}),title:h?void 0:t.themeName,subheader:h||P?void 0:t.author}),r.jsx(p,{sx:{display:"flex",gap:e?.35:o?.5:.75,flexWrap:"wrap",mt:e?.2:o?.45:.6},children:we(t).map((c,f)=>r.jsx(Se,{title:c.label,children:r.jsx(p,{sx:{width:e?10:o?12:14,height:e?10:o?12:14,borderRadius:1,...String(c.value).includes("gradient")?{background:c.value}:{bgcolor:c.value},border:"1px solid rgba(0,0,0,0.2)"}})},`${t.themeId}-swatch-${f}`))}),r.jsx(p,{sx:{position:"absolute",top:e?4:o?6:8,right:e?4:o?6:8},children:r.jsx(ie,{size:"small",color:"primary",checked:t.themeId===v,onChange:B,onClick:c=>{c.stopPropagation(),B()},sx:{p:e?.25:o?.35:.5,backgroundColor:"background.paper",borderRadius:1}})}),r.jsxs(ut,{sx:{p:e?.35:o?.45:.55,pt:e?.1:o?.15:.2,backgroundColor:"transparent"},children:[!D&&r.jsx(U,{variant:"body2",color:"text.secondary",children:t.description}),t.themeId===v&&!b&&r.jsxs(p,{sx:{display:"flex",justifyContent:"flex-end",alignItems:"center",mt:e?.25:o?.35:.5,mb:e?.1:o?.15:.25},children:[r.jsx(q,{name:"light_mode",style:{opacity:g?1:.4}}),r.jsx(Ie,{size:"small",checked:M,disabled:!g||!$,onChange:c=>{const R=c.target.checked?"dark":"light";if(typeof y=="function")try{y(R)}catch{}},inputProps:{"aria-label":"Toggle light/dark mode"}}),r.jsx(q,{name:"dark_mode",style:{opacity:$?1:.4}})]})]}),r.jsx(ht,{})]})})};return A==="list"?r.jsx(p,{sx:{display:"flex",flexDirection:"column",gap:e?1:2,...a},children:L.map(t=>r.jsx(p,{children:r.jsx(ue,{theme:t})},t.themeId))}):r.jsx(Y,{container:!0,spacing:e?1:o?1.5:2,sx:a,children:L.map(t=>r.jsx(Y,{item:!0,xs:e?4:6,sm:e?3:6,md:e?2:4,lg:e?2:3,xl:e?2:3,sx:{...e?{"@media (max-width: 420px)":{flexBasis:"50%",maxWidth:"50%"},"@media (max-width: 360px)":{flexBasis:"100%",maxWidth:"100%"}}:{"@media (max-width: 360px)":{flexBasis:"100%",maxWidth:"100%"}}},children:r.jsx(ue,{theme:t})},t.themeId))})}Ye.__docgenInfo={description:"",methods:[],displayName:"ThemesCatalog"};const ra={title:"GUI/Theme/Catalog",component:Ye,tags:["autodocs"],decorators:[a=>{const i=()=>{try{const n=pt("Theme/Palette","Default");if(typeof n=="function")return n()}catch{}window.location.hash="#/story/theme-palette--default"};return r.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",background:"var(--mui-palette-background-default, #0b0f14)"},children:[r.jsxs("div",{style:{position:"sticky",top:0,zIndex:10,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 12px",borderBottom:"1px solid var(--mui-palette-divider, rgba(255,255,255,0.08))",backdropFilter:"blur(10px)",background:"color-mix(in srgb, var(--mui-palette-background-paper, #0a0e14) 72%, transparent)",color:"var(--mui-palette-text-primary, #fff)"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[r.jsx("div",{style:{fontWeight:700,letterSpacing:-.2},children:"Themes Catalog"}),r.jsx("div",{style:{opacity:.7,fontSize:12},children:"Browse & select GUI themes"})]}),r.jsx("button",{type:"button",onClick:i,title:"Open Palette stories","aria-label":"Open Palette stories",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:36,height:36,borderRadius:10,border:"1px solid var(--mui-palette-divider, rgba(255,255,255,0.12))",background:"var(--mui-palette-action-hover, rgba(255,255,255,0.04))",color:"var(--mui-palette-text-primary, rgba(255,255,255,0.92))",cursor:"pointer"},children:r.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 3c-4.97 0-9 3.58-9 8c0 2.76 1.66 5.2 4.26 6.67c.58.33.94.95.94 1.61V21c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-1.18c0-.66.36-1.28.94-1.61C19.34 16.2 21 13.76 21 11c0-4.42-4.03-8-9-8zm2.5 7c.83 0 1.5.67 1.5 1.5S15.33 13 14.5 13S13 12.33 13 11.5S13.67 10 14.5 10zM7.5 13C6.67 13 6 12.33 6 11.5S6.67 10 7.5 10S9 10.67 9 11.5S8.33 13 7.5 13zm2-4.5C8.67 8.5 8 7.83 8 7s.67-1.5 1.5-1.5S11 6.17 11 7s-.67 1.5-1.5 1.5zm5 0C13.67 8.5 13 7.83 13 7s.67-1.5 1.5-1.5S16 6.17 16 7s-.67 1.5-1.5 1.5z"})})})]}),r.jsx("div",{style:{padding:16,minHeight:320,flex:1},children:r.jsx(a,{})})]})}],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{variant:{control:{type:"radio"},options:["grid","list"],description:"Choose layout variant"},hideDescription:{control:{type:"boolean"},description:"Hide the theme description text inside each card"},hideAuthor:{control:{type:"boolean"},description:"Hide the theme author text inside each card"},minimal:{control:{type:"boolean"},description:"Compact view (hides both author and description)"}},args:{variant:"grid",hideDescription:!1,hideAuthor:!1,minimal:!1}},Z={args:{variant:"grid"}},J={name:"List layout",args:{variant:"list"}},Q={name:"No descriptions",args:{variant:"grid",hideDescription:!0}},ee={name:"Minimal (no author, no description)",args:{variant:"grid",minimal:!0}},te={name:"Compact (dense grid)",args:{compact:!0}},ae={name:"Compact + Minimal",args:{compact:!0,minimal:!0}},oe={name:"List + Minimal",args:{variant:"list",minimal:!0}};var Te,Me,ze;Z.parameters={...Z.parameters,docs:{...(Te=Z.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    variant: 'grid'
  }
}`,...(ze=(Me=Z.parameters)==null?void 0:Me.docs)==null?void 0:ze.source}}};var Be,Re,De;J.parameters={...J.parameters,docs:{...(Be=J.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  name: 'List layout',
  args: {
    variant: 'list'
  }
}`,...(De=(Re=J.parameters)==null?void 0:Re.docs)==null?void 0:De.source}}};var Pe,He,$e;Q.parameters={...Q.parameters,docs:{...(Pe=Q.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  name: 'No descriptions',
  args: {
    variant: 'grid',
    hideDescription: true
  }
}`,...($e=(He=Q.parameters)==null?void 0:He.docs)==null?void 0:$e.source}}};var Ne,Ue,Ae;ee.parameters={...ee.parameters,docs:{...(Ne=ee.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  name: 'Minimal (no author, no description)',
  args: {
    variant: 'grid',
    minimal: true
  }
}`,...(Ae=(Ue=ee.parameters)==null?void 0:Ue.docs)==null?void 0:Ae.source}}};var Ge,Ee,Le;te.parameters={...te.parameters,docs:{...(Ge=te.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  name: 'Compact (dense grid)',
  args: {
    compact: true
  }
}`,...(Le=(Ee=te.parameters)==null?void 0:Ee.docs)==null?void 0:Le.source}}};var _e,We,Oe;ae.parameters={...ae.parameters,docs:{...(_e=ae.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  name: 'Compact + Minimal',
  args: {
    compact: true,
    minimal: true
  }
}`,...(Oe=(We=ae.parameters)==null?void 0:We.docs)==null?void 0:Oe.source}}};var Ve,Fe,Ke;oe.parameters={...oe.parameters,docs:{...(Ve=oe.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  name: 'List + Minimal',
  args: {
    variant: 'list',
    minimal: true
  }
}`,...(Ke=(Fe=oe.parameters)==null?void 0:Fe.docs)==null?void 0:Ke.source}}};const ia=["Playground","ListVariant","NoDescriptions","Minimal","Compact","CompactMinimal","ListMinimal"];export{te as Compact,ae as CompactMinimal,oe as ListMinimal,J as ListVariant,ee as Minimal,Q as NoDescriptions,Z as Playground,ia as __namedExportsOrder,ra as default};
