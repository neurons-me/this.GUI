import{l as ct,r as c,j as e,B as b,a as D}from"./iframe-Gv_pzp9r.js";import{P as dt}from"./Paper-DKGZNe4W.js";import{I as l}from"./Icon-B_V_pleN.js";import{T as pt}from"./TopBar-wCfRTWtF.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-c6OH07YJ.js";import"./createSvgIcon-BTE4pYIV.js";import"./Menu-Db8HHNSE.js";import"./useSlot-D1kER3fQ.js";import"./useForkRef-CiFZqN1G.js";import"./Grow-DdIhyzpX.js";import"./utils-ATb2s98j.js";import"./TransitionGroupContext-B7vnT7n3.js";import"./Portal-CVgCaHkv.js";import"./List-DxflEBpX.js";import"./ListContext-D8enX45d.js";import"./Modal-BHQDBp6o.js";import"./useEventCallback-DUPPrZgp.js";import"./mergeSlotProps-DKoVgONX.js";import"./MenuItem-DsPTdOUs.js";import"./ButtonBase-C-flG3o_.js";import"./listItemIconClasses-DhWNu7rs.js";import"./listItemTextClasses-D4KZ7SY1.js";import"./dividerClasses-CZcDm_LW.js";import"./index-dX92uaZo.js";import"./useGuiMediaQuery-CjZsRj3f.js";import"./getThemeProps-DYFZ1z-_.js";import"./useInsets-bkRUJ-mh.js";import"./Avatar-H5rm7Zn3.js";import"./Toolbar-CHAxzF17.js";const m=({items:s=[],mobileVersion:k="pill",positioning:C={},behavior:B={hideOnScrollDown:!1,iconOnlyOnMobile:!1,mobileBreakpoint:768},theme:Ye={},visibility:Qe={},i18n:Ze={}})=>{var he,be,ge,ye,xe,ve,we;const r=ct()||{},{topOffset:$="0.55rem",maxWidth:F=800,mode:H="sticky",reserveSpace:S=!1}=C,{hideOnScrollDown:z=!1,collapseToFabOnMobile:Je=!1,iconOnlyOnMobile:Z=!1,mobileBreakpoint:y=768,hideThreshold:J=36,showThreshold:K=12,topGuard:X=20}=B,M=k==="icons"||(typeof Z=="boolean"?Z:Je),{elevation:ee=28,blur:te=9,contrastMode:ht="auto"}=Ye,{enabled:ne=!0,includeRoutes:R=null,excludeRoutes:U=null}=Qe,{useI18n:re=!1,t:oe}=Ze,Ke=re&&typeof oe=="function"?oe:n=>n,Xe=n=>{if(!n)return{};const t=n.trim();if(/^#|^rgb\(|^hsl\(/i.test(t))return{css:t};const o=r==null?void 0:r.palette;if(!o)return{};if(t.includes(".")){const i=t.split(".").reduce((u,f)=>u?u[f]:void 0,o);return typeof i=="string"?{css:i}:i&&typeof i=="object"&&typeof i.main=="string"?{css:i.main}:i&&typeof i=="object"&&typeof i.default=="string"?{css:i.default}:{}}const a=o[t];if(typeof a=="string")return{css:a};if(a&&typeof a=="object"){if(typeof a.main=="string")return{css:a.main};if(typeof a.default=="string")return{css:a.default}}return{}},G=(n,t)=>{if(!n)return null;if(typeof n!="string")return n;const o=Xe(t),a=n.toLowerCase().startsWith("mui:");n.toLowerCase().startsWith("lucide:"),o.css&&(a?o.css:o.css);const i=o.css?{iconColor:o.css}:{};return e.jsx(l,{name:n,fontSize:16,...i})},Y=c.useRef(null),[et,tt]=c.useState(0);c.useEffect(()=>{if(!S)return;const n=Y.current;if(!n)return;const t=()=>{try{tt(n.getBoundingClientRect().height||0)}catch{}};t();let o;return typeof ResizeObserver<"u"&&(o=new ResizeObserver(()=>t()),o.observe(n)),window.addEventListener("resize",t),()=>{if(window.removeEventListener("resize",t),o)try{o.disconnect()}catch{}}},[S]);const ae=typeof $=="number"?`${$}px`:String($),ie=Math.max(0,Number(((be=(he=r==null?void 0:r.layout)==null?void 0:he.insets)==null?void 0:be.left)??0)),se=Math.max(0,Number(((ye=(ge=r==null?void 0:r.layout)==null?void 0:ge.insets)==null?void 0:ye.right)??0)),le=Math.max(0,Number(((ve=(xe=r==null?void 0:r.layout)==null?void 0:xe.insets)==null?void 0:ve.nav)??0)),nt=le>0?ae:"0px",rt=`calc(${le}px + ${nt})`,ce=S?{height:`calc(${ae} + ${et}px)`}:void 0,ot=c.useMemo(()=>{if(!ne)return!1;const n=typeof window<"u"?window.location.pathname:"";return U&&U.some(t=>n.startsWith(t))?!1:R&&R.length>0?R.some(t=>n.startsWith(t)):!0},[ne,R,U]),[T,Q]=c.useState(!1),de=c.useRef(typeof window<"u"?window.scrollY:0),p=c.useRef(0),x=c.useRef(null);c.useEffect(()=>{if(!z)return;const n=()=>{x.current||(x.current=requestAnimationFrame(()=>{const t=window.scrollY,o=t-de.current;if(de.current=t,t<=X){p.current=0,Q(!1),x.current=null;return}(o>0&&p.current<0||o<0&&p.current>0)&&(p.current=0),p.current+=o,p.current>J&&!T?(Q(!0),p.current=0):p.current<-K&&T&&(Q(!1),p.current=0),x.current=null}))};return window.addEventListener("scroll",n,{passive:!0}),()=>{window.removeEventListener("scroll",n),x.current!==null&&cancelAnimationFrame(x.current)}},[z,J,K,X,T]);const d=c.useMemo(()=>{var h,w,j,I,O,ke,Se,je;const n=((h=r==null?void 0:r.palette)==null?void 0:h.mode)||"dark",t=((j=(w=r==null?void 0:r.palette)==null?void 0:w.link)==null?void 0:j.main)||"rgb(0, 170, 150)",o=((O=(I=r==null?void 0:r.palette)==null?void 0:I.background)==null?void 0:O.paper)||(n==="dark"?"rgb(24,26,28)":"#ffffff"),a=n==="dark"?"rgba(24,26,28,0.65)":"rgba(255,255,255,0.8)",i=((ke=r==null?void 0:r.custom)==null?void 0:ke.border)||(n==="dark"?"rgba(255,255,255,0.14)":"rgba(0,0,0,0.1)"),u=n==="dark"?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)",f=n==="dark"?"rgba(255,255,255,0.18)":"rgba(0,0,0,0.08)",W=((je=(Se=r==null?void 0:r.palette)==null?void 0:Se.text)==null?void 0:je.primary)||(n==="dark"?"#fff":"#111");return{linkMain:t,bgPaper:o,bg:a,border:i,neutralBg:u,neutralBorder:f,text:W,mode:n}},[r]),v=40,[pe,at]=c.useState(()=>typeof window<"u"?window.innerWidth<y:!1);c.useEffect(()=>{if(!M)return;const n=()=>at(window.innerWidth<y);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[M,y]);const[E,it]=c.useState(()=>typeof window<"u"?window.innerWidth<y:!1);c.useEffect(()=>{const n=()=>it(window.innerWidth<y);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[y]);const ue=(n,t)=>{try{window.dispatchEvent(new CustomEvent("stickyoptions:click",{detail:{trackId:n,label:t}}))}catch{}};if(!ot)return null;const st=(n,t)=>{const{icon:o,label:a,href:i,variant:u="neutral",trackId:f,ariaLabel:W}=n||{},h=!!a,w=u==="primary",j={display:"inline-flex",alignItems:"center",gap:h?8:0,padding:`${E?6:7}px ${h?E?10:12:E?6:8}px`,borderRadius:999,minWidth:h?E?92:108:40,whiteSpace:"nowrap",flexShrink:0,justifyContent:"center",fontWeight:800,textDecoration:"none",border:w?"1px solid transparent":`1px solid ${d.neutralBorder}`,background:w?"rgba(0, 170, 150, 0.12)":d.neutralBg,color:w?d.linkMain:d.text},I=e.jsxs(e.Fragment,{children:[o?e.jsx("span",{style:{display:"inline-flex",marginRight:h?6:0},children:G(o,n==null?void 0:n.iconColor)}):null,h?re?Ke(a):a:null]});if(i){const O=/^https?:\/\//i.test(i);return e.jsx("a",{href:i,target:O?"_blank":void 0,rel:O?"noopener noreferrer":void 0,"aria-label":W||a,onClick:()=>ue(f,a),style:j,children:I},t)}return e.jsx("span",{"aria-label":W||a,style:j,children:I},t)},me={position:H==="fixed"?"fixed":"sticky",top:rt,left:H==="fixed"?`${ie}px`:void 0,right:H==="fixed"?`${se}px`:void 0,zIndex:Math.max(0,(((we=r==null?void 0:r.zIndex)==null?void 0:we.appBar)??1100)-1),width:"100%",...z&&T?{transform:"translateY(-8px)",opacity:0,transition:"transform 180ms ease, opacity 180ms ease"}:{transition:"transform 180ms ease, opacity 180ms ease"},minHeight:M&&pe?v+8:void 0},fe={position:"relative",width:`calc(100% - ${ie}px - ${se}px)`,margin:"0 auto",maxWidth:"100%",display:"flex",alignItems:"flex-start",justifyContent:"center"},lt={...{display:"inline-flex",gap:6,padding:"4px 8px",borderRadius:999,background:d.bg,backdropFilter:`blur(${te}px)`,WebkitBackdropFilter:`blur(${te}px)`,border:`1px solid ${d.border}`,boxShadow:`0 ${Math.round(ee/3)}px ${ee}px rgba(0,0,0,0.35)`,whiteSpace:"nowrap",pointerEvents:"auto"},maxWidth:typeof F=="number"?`${F}px`:F};if(M&&pe){const n={display:"inline-flex",gap:10,alignItems:"center",justifyContent:"center",whiteSpace:"nowrap"};return e.jsxs(e.Fragment,{children:[S&&e.jsx("div",{style:ce}),e.jsx("div",{style:me,children:e.jsx("div",{style:fe,children:e.jsx("div",{style:n,ref:Y,children:s.slice(0,3).map((t,o)=>{const a=((t==null?void 0:t.variant)||"neutral")==="primary",i={width:v,height:v,minWidth:v,minHeight:v,flex:`0 0 ${v}px`,aspectRatio:"1 / 1",boxSizing:"border-box",padding:0,borderRadius:999,display:"inline-flex",alignItems:"center",justifyContent:"center",lineHeight:0,textDecoration:"none",border:a?"1px solid transparent":`1px solid ${d.neutralBorder}`,background:a?"rgba(0, 170, 150, 0.12)":d.neutralBg,color:a?d.linkMain:d.text},u=(t==null?void 0:t.ariaLabel)||(t==null?void 0:t.label);if(t!=null&&t.href){const f=/^https?:\/\//i.test(t.href);return e.jsx("a",{href:t.href,target:f?"_blank":void 0,rel:f?"noopener noreferrer":void 0,"aria-label":u,onClick:()=>ue(t==null?void 0:t.trackId,t==null?void 0:t.label),style:i,children:G(t==null?void 0:t.icon,t==null?void 0:t.iconColor)},o)}return e.jsx("span",{"aria-label":u,style:i,children:G(t==null?void 0:t.icon,t==null?void 0:t.iconColor)},o)})})})})]})}return e.jsxs(e.Fragment,{children:[S&&e.jsx("div",{style:ce}),e.jsx("div",{style:me,children:e.jsx("div",{style:fe,children:e.jsx("div",{style:lt,ref:Y,children:s.map((n,t)=>st(n,t))})})})]})};m.__docgenInfo={description:`StickyOptions (this.GUI)
A reusable sticky CTA menu that hangs below the navbar.

Props shape (all optional unless noted):
 - items: Array<{ icon: ReactNode|string, label?: string, href?: string, variant?: 'primary'|'neutral', trackId?: string, ariaLabel?: string }>
 - positioning: { topOffset?: number|string, maxWidth?: number|string, mode?: 'sticky'|'fixed', reserveSpace?: boolean }
 - behavior: { hideOnScrollDown?: boolean, collapseToFabOnMobile?: boolean, iconOnlyOnMobile?: boolean, mobileBreakpoint?: number, hideThreshold?: number, showThreshold?: number, topGuard?: number }
 - theme: { elevation?: number, blur?: number, contrastMode?: 'auto'|'light'|'dark' }
 - visibility: { enabled?: boolean, includeRoutes?: string[]|null, excludeRoutes?: string[]|null }
 - i18n: { useI18n?: boolean }
 - mobileVersion: 'pill' | 'icons'`,methods:[],displayName:"StickyOptionsTop",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  icon: React.ReactNode | string;
  label?: string;
  href?: string;
  variant?: 'primary' | 'neutral';
  trackId?: string;
  ariaLabel?: string;
  iconColor?: string; // palette key/path or CSS color
}`,signature:{properties:[{key:"icon",value:{name:"union",raw:"React.ReactNode | string",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"string"}],required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"href",value:{name:"string",required:!1}},{key:"variant",value:{name:"union",raw:"'primary' | 'neutral'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'neutral'"}],required:!1}},{key:"trackId",value:{name:"string",required:!1}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"iconColor",value:{name:"string",required:!1}}]}}],raw:"StickyItem[]"},description:"",defaultValue:{value:"[]",computed:!1}},mobileVersion:{required:!1,tsType:{name:"union",raw:"'pill' | 'icons'",elements:[{name:"literal",value:"'pill'"},{name:"literal",value:"'icons'"}]},description:"",defaultValue:{value:"'pill'",computed:!1}},positioning:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  topOffset?: number | string;
  maxWidth?: number | string;
  mode?: 'sticky' | 'fixed';
  reserveSpace?: boolean;
}`,signature:{properties:[{key:"topOffset",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"maxWidth",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"mode",value:{name:"union",raw:"'sticky' | 'fixed'",elements:[{name:"literal",value:"'sticky'"},{name:"literal",value:"'fixed'"}],required:!1}},{key:"reserveSpace",value:{name:"boolean",required:!1}}]}},description:"",defaultValue:{value:"{}",computed:!1}},behavior:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  hideOnScrollDown?: boolean;
  collapseToFabOnMobile?: boolean; // kept for backwards compatibility
  iconOnlyOnMobile?: boolean;
  mobileBreakpoint?: number;
  hideThreshold?: number;
  showThreshold?: number;
  topGuard?: number;
}`,signature:{properties:[{key:"hideOnScrollDown",value:{name:"boolean",required:!1}},{key:"collapseToFabOnMobile",value:{name:"boolean",required:!1}},{key:"iconOnlyOnMobile",value:{name:"boolean",required:!1}},{key:"mobileBreakpoint",value:{name:"number",required:!1}},{key:"hideThreshold",value:{name:"number",required:!1}},{key:"showThreshold",value:{name:"number",required:!1}},{key:"topGuard",value:{name:"number",required:!1}}]}},description:"",defaultValue:{value:`{
  hideOnScrollDown: false,      // never hide on scroll
  iconOnlyOnMobile: false,      // keep text visible on mobile
  mobileBreakpoint: 768
}`,computed:!1}},theme:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  elevation?: number;
  blur?: number;
  contrastMode?: 'auto' | 'light' | 'dark';
}`,signature:{properties:[{key:"elevation",value:{name:"number",required:!1}},{key:"blur",value:{name:"number",required:!1}},{key:"contrastMode",value:{name:"union",raw:"'auto' | 'light' | 'dark'",elements:[{name:"literal",value:"'auto'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}],required:!1}}]}},description:"",defaultValue:{value:"{}",computed:!1}},visibility:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  enabled?: boolean;
  includeRoutes?: string[] | null;
  excludeRoutes?: string[] | null;
}`,signature:{properties:[{key:"enabled",value:{name:"boolean",required:!1}},{key:"includeRoutes",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"excludeRoutes",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}}]}},description:"",defaultValue:{value:"{}",computed:!1}},i18n:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  useI18n?: boolean;
  t?: (s: string) => string;
}`,signature:{properties:[{key:"useI18n",value:{name:"boolean",required:!1}},{key:"t",value:{name:"signature",type:"function",raw:"(s: string) => string",signature:{arguments:[{type:{name:"string"},name:"s"}],return:{name:"string"}},required:!1}}]}},description:"",defaultValue:{value:"{}",computed:!1}}}};const Gt={title:"GUI/Layout/StickyOptionsTop",component:m,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
### StickyOptionsTop — Quick actions bar

**StickyOptionsTop** renders a compact, theme‑aware quick‑actions bar that sits just **under the NavBar** and automatically respects permanent drawer insets (left/right) as well as the runtime **nav height** provided by your \`CustomThemeProvider\`.

It supports both **declarative icons** (e.g. \`"mui:Settings"\`, \`"lucide:camera"\`) via the project icon registry and **direct React nodes**, collapses nicely on small screens, and can optionally hide while scrolling.

---

#### ✨ What it does

- **Positions itself** relative to your layout:
  - Uses \`theme.layout.insets.nav\` (kept in sync by your \`NavBar\`) to sit below the app bar.
  - Uses \`theme.layout.insets.left/right\` (kept in sync by permanent drawers) to center within the remaining space.
- **Layout modes**:
  - \`"sticky"\` (default): scrolls with content and sticks below the NavBar.
  - \`"fixed"\`: pinned to the viewport; also honors insets and the nav height.
- **Mobile behavior**:
  - Can render a slim “pill” with labels or an icon‑only compact layout.
- **Theme aware**:
  - Uses MUI palette and custom tokens; icons can inherit color or use palette keys (e.g. \`primary\`, \`info\`) or raw CSS colors.

> **Default spacing:** the bar keeps a small gap below the NavBar via \`topOffset: "0.25rem"\`.  
> Override with \`positioning.topOffset\`.

---

## Props

All props are optional unless noted.

### \`items: Array<Item>\`
Each item can be either **declarative** (icon string) or a **ReactNode**.

\`\`\`ts
type Item = {
  icon: React.ReactNode | string; // e.g. "mui:Settings" | "lucide:bolt" | <Icon .../>
  label?: string;                 // button text (omit to render icon-only)
  href?: string;                  // if present, renders an anchor
  iconColor?: string;             // palette key ("primary", "info") or CSS color ("#ff9800")
  variant?: 'primary' | 'neutral' // styling accent (default: 'neutral')
  trackId?: string;               // optional analytics id
  ariaLabel?: string;             // accessibility label when label is omitted
}
\`\`\`

### \`mobileVariant: 'auto' | 'fab' | 'inline'\`
- **auto** (default): chooses best layout for the viewport width.
- **fab**: renders up to 3 circular icon buttons (compact, mobile‑style).
- **inline**: keeps the pill‑style bar inline on mobile.

### \`dense: boolean\`
Compacts paddings/heights.

### \`positioning: { ... }\`
Controls how and where the bar is placed.

\`\`\`ts
type Positioning = {
  mode?: 'sticky' | 'fixed';  // default: 'sticky'
  topOffset?: number | string; // gap below the navbar; default: "0.25rem"
  maxWidth?: number | string; // max width of the pill; default: 800
  reserveSpace?: boolean;     // if true, inserts a spacer to push content by bar height+offset
}
\`\`\`

**How placement works**
- Reads \`theme.layout.insets.nav\` to compute \`top\`.
- If a navbar is present (\`nav > 0\`), bar sits at \`nav + topOffset\`.  
  Without a navbar, it uses page top (no extra gap).
- In \`"fixed"\` mode, the bar is pinned and uses \`theme.layout.insets.left/right\` as **viewport paddings**.
- In \`"sticky"\` mode, the bar participates in normal layout flow and sticks when reaching the computed \`top\`.

### \`behavior: { ... }\`
Optional scroll/visibility tuning.

\`\`\`ts
type Behavior = {
  hideOnScrollDown?: boolean; // default: false
  iconOnlyOnMobile?: boolean; // render icons-only on small screens
  mobileBreakpoint?: number;  // default: 768
  hideThreshold?: number;     // px scrolled down before hiding; default: 36
  showThreshold?: number;     // px scrolled up before showing again; default: 12
  topGuard?: number;          // do not hide when near top; default: 20
}
\`\`\`

### \`theme: { ... }\`
Visual tuning with sensible defaults.

\`\`\`ts
type ThemeOpts = {
  elevation?: number;          // shadow depth; default: 28
  blur?: number;               // backdrop blur in px; default: 9
  contrastMode?: 'auto'|'light'|'dark'; // (reserved for future)
}
\`\`\`

### \`visibility: { ... }\`
Route‑aware gating (simple client‑side checks).

\`\`\`ts
type Visibility = {
  enabled?: boolean;           // default: true
  includeRoutes?: string[] | null; // only show on these prefixes
  excludeRoutes?: string[] | null; // hide on these prefixes
}
\`\`\`

### \`i18n: { ... }\`
Optional translation hook.

\`\`\`ts
type I18n = {
  useI18n?: boolean;           // default: false
  t?: (s: string) => string;   // translate labels if provided
}
\`\`\`

---

## Theming & Insets

- The component **does not** manage insets itself. It reads them from \`theme.layout.insets\` which is kept in sync by your layout:
  - \`NavBar\` reports its real height through \`theme.updateInsets({ nav })\`.
  - \`LeftDrawer\` / \`RightDrawer\` report their widths through \`theme.updateInsets({ left/right })\`.
- For non‑MUI consumers, \`CustomThemeProvider\` also mirrors the values into CSS variables:
  - \`--gui-inset-left\`, \`--gui-inset-right\`, and \`--gui-nav-height\`.

---

## Accessibility

- When rendering icon‑only actions, provide \`ariaLabel\` so the intent is announced by screen readers.
- Links include proper \`rel\` attributes when \`target="_blank"\`.

---

## Analytics

- When items have \`trackId\`, the component dispatches a DOM event:  
  \`window.dispatchEvent(new CustomEvent('stickyoptions:click', { detail: { trackId, label } }))\`.

---

## Defaults (quick reference)

- \`mobileVariant\`: \`"auto"\`
- \`dense\`: \`false\`
- \`positioning.mode\`: \`"sticky"\`
- \`positioning.topOffset\`: \`"0.25rem"\`
- \`positioning.maxWidth\`: \`800\`
- \`positioning.reserveSpace\`: \`false\`
- \`behavior.hideOnScrollDown\`: \`false\`
- \`behavior.mobileBreakpoint\`: \`768\`
- \`theme.elevation\`: \`28\`
- \`theme.blur\`: \`9\`
- \`visibility.enabled\`: \`true\`

---

## Usage

**Declarative icons**
\`\`\`jsx
<StickyOptionsTop
  items={[
    { icon: 'mui:BarChart', label: 'Stats', href: '/stats', iconColor: 'primary' },
    { icon: 'lucide:bolt',  label: 'Power', href: '/power',  iconColor: '#ff9800' },
    { icon: 'mui:Help',     label: 'Help',  href: 'https://help.example.com' },
  ]}
/>
\`\`\`

**With NavBar (sticky mode)**
\`\`\`jsx
<NavBar title="Demo" />
<Box sx={(theme) => ({ pt: \`\${theme?.layout?.insets?.nav ?? 0}px\` })}>
  <StickyOptionsTop items={items} />
  {/* page content */}
</Box>
\`\`\`

**Pinned to viewport (fixed mode)**
\`\`\`jsx
<StickyOptionsTop
  items={items}
  positioning={{ mode: 'fixed', topOffset: '0.25rem' }}
/>
\`\`\`
        `}}},argTypes:{items:{control:"object",description:"List of actions. Each item: { icon, label, href, iconColor?, variant? }"},mobileVersion:{control:{type:"inline-radio"},options:["pill","icons"],description:'Mobile layout. "pill" shows a pill bar with text; "icons" shows a compact icon-only bar.'},positioning:{control:{type:"object"},description:'Positioning config. Accepts `{ mode: "sticky" | "fixed" }`. Default is `{ mode: "sticky" }`.'}}},Ue=[{icon:e.jsx(l,{name:"Settings"}),label:"Settings",href:"/settings"},{icon:e.jsx(l,{name:"camera"}),label:"Capture",href:"/capture"},{icon:e.jsx(l,{name:"Help"}),label:"Help",href:"https://help.neurons.me"}],ut=[{icon:e.jsx(l,{name:"Settings"}),href:"/settings"},{icon:e.jsx(l,{name:"camera"}),href:"/capture"},{icon:e.jsx(l,{name:"Help"}),href:"https://help.neurons.me"}],Ge=[{icon:e.jsx(l,{name:"BarChart",iconColor:"primary"}),label:"Stats",href:"/stats"},{icon:e.jsx(l,{name:"bolt",iconColor:"#ff9800"}),label:"Power",href:"/power"},{icon:e.jsx(l,{name:"Insights",iconColor:"info"}),label:"Insights",href:"/insights"},{icon:e.jsx(l,{name:"settings"}),label:"Config",href:"/config"}],mt=[{icon:e.jsx(l,{name:"BarChart",iconColor:"primary"}),href:"/stats"},{icon:e.jsx(l,{name:"bolt",iconColor:"#ff9800"}),href:"/power"},{icon:e.jsx(l,{name:"Insights",iconColor:"info"}),href:"/insights"},{icon:e.jsx(l,{name:"settings"}),href:"/config"}],ft=[{icon:e.jsx(l,{name:"AttachMoney",iconColor:"#43a047"}),label:"Billing",href:"/billing"},{icon:e.jsx(l,{name:"message-circle",iconColor:"#1976d2"}),label:"Support",href:"/support"},{icon:e.jsx(l,{name:"CalendarMonth"}),label:"Calendar",href:"/calendar"}],g=({children:s})=>e.jsxs(b,{sx:{minHeight:"100vh",bgcolor:"background.default",color:"text.primary"},children:[s,e.jsx(b,{sx:{px:3,py:2},children:e.jsxs(dt,{variant:"outlined",sx:{p:2},children:[e.jsx(D,{variant:"subtitle1",sx:{fontWeight:700,mb:1},children:"Demo content"}),e.jsx(D,{variant:"body2",sx:{color:"text.secondary"},children:"This card is just to simulate page content. The *sticky* bar is center aligned and respects the insets of permanent drawers."})]})})]}),q={args:{items:Ue,mobileVersion:"pill"},render:s=>e.jsx(g,{children:e.jsx(m,{...s})}),parameters:{docs:{description:{story:"Basic usage with **declarative** icons. Without `iconColor`, icons react automatically to the theme (light/dark)."}}}},A={args:{items:Ge,mobileVersion:"pill"},render:s=>e.jsx(g,{children:e.jsx(m,{...s})}),parameters:{docs:{description:{story:"Declarative icons with `iconColor`. Accepts palette keys (`primary`, `info`, etc.) or any CSS color (`#ff9800`)."}}}},L={args:{items:ft,mobileVersion:"pill"},render:s=>e.jsx(g,{children:e.jsx(m,{...s})}),parameters:{docs:{description:{story:"**ReactNode** mode: you can pass icon components directly. If you do not define an explicit color, the icon will follow the theme."}}}},V={args:{items:Ue,mobileVersion:"pill"},render:s=>e.jsx(g,{children:e.jsx(m,{...s})}),parameters:{docs:{description:{story:"**Compact** variant with less padding. Useful when vertical space is limited or there are many actions."}}}},P={name:"Mobile — FAB",args:{items:mt,mobileVersion:"icons"},render:s=>e.jsx(b,{sx:{width:390,mx:"auto",border:"1px solid",borderColor:"divider",borderRadius:2,overflow:"hidden"},children:e.jsxs(g,{children:[e.jsx(m,{...s}),e.jsx(b,{sx:{p:2},children:e.jsx(D,{variant:"body2",sx:{color:"text.secondary"},children:'Simulated **mobile** view (~390px). In \\`mobileVariant="fab"\\`, the component renders a floating button with access to actions.'})})]})}),parameters:{docs:{description:{story:'Forcing `mobileVariant="fab"` and simulating a narrow viewport to visualize mobile behavior without requiring addons.'}}}},_={name:"Mobile — Inline",args:{items:ut,mobileVersion:"pill"},render:s=>e.jsx(b,{sx:{width:390,mx:"auto",border:"1px solid",borderColor:"divider",borderRadius:2,overflow:"hidden"},children:e.jsxs(g,{children:[e.jsx(m,{...s}),e.jsx(b,{sx:{p:2},children:e.jsx(D,{variant:"body2",sx:{color:"text.secondary"},children:'Simulated **mobile** view (~390px). With \\`mobileVariant="inline"\\`, the bar stays inline at the top.'})})]})}),parameters:{docs:{description:{story:"Mobile behavior keeping the bar inline (no FAB)."}}}},N={args:{items:Ge,mobileVersion:"pill"},render:s=>e.jsxs(g,{children:[e.jsx(pt,{title:"Demo App"}),e.jsxs(b,{sx:k=>{var C,B;return{pt:`${((B=(C=k==null?void 0:k.layout)==null?void 0:C.insets)==null?void 0:B.nav)??0}px`}},children:[e.jsx(m,{...s}),e.jsx(b,{sx:{p:2},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(100)})]})]}),parameters:{docs:{description:{story:"Example with **NavBar** mounted. The sticky options bar now respects the nav inset (height of the AppBar) automatically."}}}};var Ie,Oe,Ce;q.parameters={...q.parameters,docs:{...(Ie=q.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    items: ITEMS_BASE,
    mobileVersion: 'pill'
  },
  render: args => <PageScaffold>
      <StickyOptionsTop {...args} />
    </PageScaffold>,
  parameters: {
    docs: {
      description: {
        story: 'Basic usage with **declarative** icons. Without \`iconColor\`, icons react automatically to the theme (light/dark).'
      }
    }
  }
}`,...(Ce=(Oe=q.parameters)==null?void 0:Oe.docs)==null?void 0:Ce.source}}};var Be,Me,Re;A.parameters={...A.parameters,docs:{...(Be=A.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    items: ITEMS_WITH_COLORS,
    mobileVersion: 'pill'
  },
  render: args => <PageScaffold>
      <StickyOptionsTop {...args} />
    </PageScaffold>,
  parameters: {
    docs: {
      description: {
        story: 'Declarative icons with \`iconColor\`. Accepts palette keys (\`primary\`, \`info\`, etc.) or any CSS color (\`#ff9800\`).'
      }
    }
  }
}`,...(Re=(Me=A.parameters)==null?void 0:Me.docs)==null?void 0:Re.source}}};var Te,Ee,We;L.parameters={...L.parameters,docs:{...(Te=L.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    items: ITEMS_REACT_NODES,
    mobileVersion: 'pill'
  },
  render: args => <PageScaffold>
      <StickyOptionsTop {...args} />
    </PageScaffold>,
  parameters: {
    docs: {
      description: {
        story: '**ReactNode** mode: you can pass icon components directly. If you do not define an explicit color, the icon will follow the theme.'
      }
    }
  }
}`,...(We=(Ee=L.parameters)==null?void 0:Ee.docs)==null?void 0:We.source}}};var qe,Ae,Le;V.parameters={...V.parameters,docs:{...(qe=V.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    items: ITEMS_BASE,
    mobileVersion: 'pill'
  },
  render: args => <PageScaffold>
      <StickyOptionsTop {...args} />
    </PageScaffold>,
  parameters: {
    docs: {
      description: {
        story: '**Compact** variant with less padding. Useful when vertical space is limited or there are many actions.'
      }
    }
  }
}`,...(Le=(Ae=V.parameters)==null?void 0:Ae.docs)==null?void 0:Le.source}}};var Ve,Pe,_e;P.parameters={...P.parameters,docs:{...(Ve=P.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  name: 'Mobile — FAB',
  args: {
    items: ITEMS_WITH_COLORS_MOBILE,
    mobileVersion: 'icons'
  },
  render: args =>
  // Simple simulation of mobile viewport (max width) to avoid dependency on viewport addon
  <Box sx={{
    width: 390,
    mx: 'auto',
    border: '1px solid',
    borderColor: 'divider',
    borderRadius: 2,
    overflow: 'hidden'
  }}>
      <PageScaffold>
        <StickyOptionsTop {...args} />
        <Box sx={{
        p: 2
      }}>
          <Typography variant="body2" sx={{
          color: 'text.secondary'
        }}>
            Simulated **mobile** view (~390px). In \\\`mobileVariant="fab"\\\`, the component renders
            a floating button with access to actions.
          </Typography>
        </Box>
      </PageScaffold>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Forcing \\\`mobileVariant="fab"\\\` and simulating a narrow viewport to visualize mobile behavior without requiring addons.'
      }
    }
  }
}`,...(_e=(Pe=P.parameters)==null?void 0:Pe.docs)==null?void 0:_e.source}}};var Ne,De,$e;_.parameters={..._.parameters,docs:{...(Ne=_.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  name: 'Mobile — Inline',
  args: {
    items: ITEMS_BASE_MOBILE,
    mobileVersion: 'pill'
  },
  render: args => <Box sx={{
    width: 390,
    mx: 'auto',
    border: '1px solid',
    borderColor: 'divider',
    borderRadius: 2,
    overflow: 'hidden'
  }}>
      <PageScaffold>
        <StickyOptionsTop {...args} />
        <Box sx={{
        p: 2
      }}>
          <Typography variant="body2" sx={{
          color: 'text.secondary'
        }}>
            Simulated **mobile** view (~390px). With \\\`mobileVariant="inline"\\\`, the bar stays
            inline at the top.
          </Typography>
        </Box>
      </PageScaffold>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Mobile behavior keeping the bar inline (no FAB).'
      }
    }
  }
}`,...($e=(De=_.parameters)==null?void 0:De.docs)==null?void 0:$e.source}}};var Fe,He,ze;N.parameters={...N.parameters,docs:{...(Fe=N.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    items: ITEMS_WITH_COLORS,
    mobileVersion: 'pill'
  },
  render: args => <PageScaffold>
      <NavBar title="Demo App" />
      <Box sx={theme => ({
      pt: \`\${theme?.layout?.insets?.nav ?? 0}px\`
    })}>
        <StickyOptionsTop {...args} />
        <Box sx={{
        p: 2
      }}>
          {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(100)}
        </Box>
      </Box>
    </PageScaffold>,
  parameters: {
    docs: {
      description: {
        story: 'Example with **NavBar** mounted. The sticky options bar now respects the nav inset (height of the AppBar) automatically.'
      }
    }
  }
}`,...(ze=(He=N.parameters)==null?void 0:He.docs)==null?void 0:ze.source}}};const Yt=["Default","WithIconColors","ReactIconNodes","DenseCompact","MobileFAB","MobileInline","WithNavBar"];export{q as Default,V as DenseCompact,P as MobileFAB,_ as MobileInline,L as ReactIconNodes,A as WithIconColors,N as WithNavBar,Yt as __namedExportsOrder,Gt as default};
