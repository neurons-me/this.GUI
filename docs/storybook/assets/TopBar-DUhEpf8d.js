import{j as e,r as k,an as ne}from"./iframe-B8RbS7uw.js";import{L as O}from"./Link-Dl80TlRR.js";import{I as P}from"./Icon-DMXHGruU.js";import{T as U}from"./Typography-9CeYDXau.js";import{M as te}from"./Menu-DyK1c_cN.js";import{M as H}from"./MenuItem-CCfufrUj.js";import{c as oe}from"./clsx-B-dksMZM.js";import{Link as se}from"./index-PdLHxj4j.js";import{u as F}from"./useGuiMediaQuery-DnivS9Ih.js";import{u as ae}from"./useGuiTheme-CD41npeU.js";import{u as ie,a as le}from"./useInsets-B_Qh69d9.js";import{B as w}from"./Box-D8YWJpHP.js";import{A as pe}from"./Avatar-BGK3OEI1.js";import{A as ue,T as ce}from"./Toolbar-BAsv9mi7.js";const D=({label:i,href:n,icon:o,iconColor:s,external:r,showLabel:l=!0})=>{const a=e.jsxs(e.Fragment,{children:[o&&e.jsx(P,{name:o,iconColor:s||"currentColor",style:{marginRight:3,fontSize:20,position:"relative",top:-1}}),l&&e.jsx("span",{children:i})]});return e.jsx(O,{href:n??"#",target:r?"_blank":"_self",style:{display:"inline-flex",alignItems:"center",color:"inherit",textDecoration:"none"},children:a})};D.__docgenInfo={description:"",methods:[],displayName:"TopBarLink",props:{label:{required:!0,tsType:{name:"string"},description:""},href:{required:!0,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"string"},description:""},external:{required:!1,tsType:{name:"boolean"},description:""},iconColor:{required:!1,tsType:{name:"string"},description:""},showLabel:{required:!1,tsType:{name:"boolean"},description:"Whether to display the label next to the icon. Defaults to true.",defaultValue:{value:"true",computed:!1}}}};const V=(i,n,o,s)=>i.map(({label:r,href:l,icon:a,iconColor:h,external:m,items:y})=>{const d=o.has(r),f=e.jsxs(O,{to:m?void 0:l,href:m?l:void 0,target:m?"_blank":void 0,style:{display:"inline-flex",alignItems:"center",color:"inherit",textDecoration:"none",flexGrow:1},children:[a&&e.jsx(P,{name:typeof a=="string"?a:"info",iconColor:h||"currentColor",style:{marginRight:2,fontSize:20,position:"relative",top:-1}}),r]});return y&&y.length>0?e.jsxs(ne.Fragment,{children:[e.jsxs(H,{onClick:()=>s(r),sx:{color:"inherit",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[f,e.jsx(P,{name:d?"expand_less":"expand_more",iconColor:"currentColor",style:{fontSize:20,position:"relative",top:-1,marginLeft:1}})]}),e.jsx("div",{style:{maxHeight:d?"500px":"0px",opacity:d?1:0,overflow:"hidden",transition:"max-height 0.2s ease-out, opacity 0.2s ease-out",paddingLeft:16},children:V(y,n,o,s)})]},r):e.jsx(H,{onClick:n,sx:{color:"inherit"},children:f},r)}),q=({label:i,icon:n,iconColor:o,items:s,showLabel:r=!0})=>{const[l,a]=k.useState(null),[h,m]=k.useState(new Set),y=g=>{a(g.currentTarget)},d=()=>{a(null),m(new Set)},f=g=>{m(C=>{const T=new Set(C);return T.has(g)?T.delete(g):T.add(g),T})};return e.jsxs(e.Fragment,{children:[e.jsxs(U,{onClick:y,sx:{cursor:"pointer",px:1,display:"inline-flex",alignItems:"center",color:"inherit"},children:[n&&e.jsx(P,{name:typeof n=="string"?n:"info",iconColor:o||"currentColor",style:{marginRight:r?2:0,fontSize:20,position:"relative",top:-1}}),r&&e.jsx("span",{children:i})]}),e.jsx(te,{anchorEl:l,open:!!l,onClose:d,sx:{color:"inherit"},children:s&&V(s,d,h,f)})]})};q.__docgenInfo={description:"",methods:[],displayName:"TopBarMenu",props:{label:{required:!0,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},iconColor:{required:!1,tsType:{name:"string"},description:""},showLabel:{required:!1,tsType:{name:"boolean"},description:"Whether to display the label next to the icon in the top-level menu trigger. Defaults to true.",defaultValue:{value:"true",computed:!1}},items:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  href: string;
  icon?: ReactNode;
  iconColor?: string;
  external?: boolean;
  items?: TopBarMenuItemProps[]; 
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"iconColor",value:{name:"string",required:!1}},{key:"external",value:{name:"boolean",required:!1}},{key:"items",value:{name:"Array",elements:[{name:"TopBarMenuItemProps"}],raw:"TopBarMenuItemProps[]",required:!1}}]}}],raw:"TopBarMenuItemProps[]"},description:""}}};const E=({element:i,className:n,style:o})=>e.jsx("div",{className:oe("TopBarAction",n),style:o,children:i});E.__docgenInfo={description:"",methods:[],displayName:"TopBarAction",props:{element:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const b=(...i)=>i.filter(Boolean),G=i=>{const n=[];return i.forEach(o=>{if(o.type==="link"){const{label:s,href:r,icon:l,iconColor:a,external:h}=o.props;s&&r&&n.push({label:s,href:r,icon:l,iconColor:a,external:h})}else if(o.type==="menu"){const{items:s}=o.props;Array.isArray(s)&&s.forEach(r=>n.push(r))}}),n};function me(i){var W,$;const{title:n="",logo:o="",elementsCenter:s=[],elementsRight:r=[],homeTo:l,position:a="fixed",sx:h,appBarSx:m,toolbarSx:y,brandSx:d,logoSx:f,titleSx:g,linksSx:C,id:T,className:Q,collapsedIconCenter:X="settings",collapsedIconRight:J="more_horiz"}=i,u=ae(),B=F(u.breakpoints.down("sm")),S=F(u.breakpoints.up("md")),R=k.useRef(null),L=k.useRef(null),c=ie(),j=le(),M=Math.max(0,Number((c==null?void 0:c.left)??0)),N=Math.max(0,Number((c==null?void 0:c.right)??0)),_=M+N,z=!B,K=((W=String(n??"").trim().charAt(0))==null?void 0:W.toUpperCase())||"",I=l!==null,x=I?l??"/":void 0,Y=o?e.jsx(w,{component:"img",src:o,alt:n?`${n} logo`:"Brand logo",sx:b({height:28},f)}):e.jsx(pe,{sx:b({width:28,height:28,fontSize:"0.875rem"},f),children:K||"?"});k.useEffect(()=>{if(typeof j!="function")return;const t=()=>{const v=L.current??R.current,re=(v==null?void 0:v.offsetHeight)??48;j({nav:re})};t();let p;if(typeof ResizeObserver<"u"){const v=L.current??R.current;v&&(p=new ResizeObserver(()=>t()),p.observe(v))}return()=>{p&&p.disconnect(),j({top:0,nav:0})}},[B,j]),k.useEffect(()=>{c&&typeof c.left=="number"&&document.documentElement.style.setProperty("--gui-inset-left",`${c.left}px`)},[c.left]);const A=a==="fixed"||a==="sticky",Z={minHeight:48,backgroundColor:u.palette.background.nav,borderBottom:"1px solid",borderColor:u.palette.divider,zIndex:(($=u==null?void 0:u.zIndex)==null?void 0:$.appBar)??1100,...A&&{top:0,left:`${M}px`,right:`${N}px`,width:`calc(100% - ${_}px)`,transition:"left 0.3s ease, right 0.3s ease, width 0.3s ease"},boxSizing:"border-box"},ee=A?void 0:{ml:`${M}px`,mr:`${N}px`,width:`calc(100% - ${_}px)`,transition:"margin-left 0.3s ease, margin-right 0.3s ease, width 0.3s ease"};return e.jsx(ue,{id:T,className:Q,position:a,elevation:0,ref:L,sx:b(Z,{"--has-topbar":1},ee,h,m),children:e.jsxs(ce,{ref:R,variant:"dense",disableGutters:!0,sx:b(A?{minHeight:48,pl:1.5,pr:1.5,py:0,display:"flex",alignItems:"center",gap:1.25,position:"relative"}:{minHeight:48,pl:1.5,pr:1.5,py:.5,display:"flex",alignItems:"center",gap:1.25,position:"relative"},y),children:[e.jsxs(w,{sx:b({display:"flex",alignItems:"center",flexShrink:0,textDecoration:"none",ml:0,pl:1.5,gap:z?1.25:.75,"&:hover":{textDecoration:"none"},cursor:I?"pointer":"default"},d),component:I?typeof x=="string"&&/^(https?:)?\/\//.test(x)?"a":se:"div",...I&&x?typeof x=="string"&&/^(https?:)?\/\//.test(x)?{href:x}:{to:x}:{},children:[Y,z&&n&&e.jsx(U,{variant:"h6",noWrap:!0,component:"div",sx:b({color:u.palette.text.secondary,fontWeight:500},g),children:n})]}),!B&&e.jsx(w,{sx:{position:"absolute",left:"50%",transform:"translateX(-50%)",pointerEvents:"none",color:u.palette.text.secondary},children:e.jsx(w,{sx:{display:"flex",alignItems:"center",gap:1.25,pointerEvents:"auto"},children:s.map((t,p)=>t.type==="link"?e.jsx(D,{showLabel:S,...t.props},t.props.label??p):t.type==="menu"?e.jsx(q,{showLabel:S,...t.props},t.props.label??p):t.type==="action"?e.jsx(E,{...t.props},p):null)})}),e.jsx(w,{sx:b({display:"flex",alignItems:"center",flexShrink:0,marginLeft:"auto",gap:1.25,pr:1.5,color:u.palette.text.secondary,transition:"color 0.2s ease","&:hover":{color:u.palette.text.primary}},C),children:B?e.jsxs(e.Fragment,{children:[s.length>0&&e.jsx(q,{label:"",icon:X,items:G(s),showLabel:!1}),r.length>0&&e.jsx(q,{label:"",icon:J,items:G(r),showLabel:!1})]}):r==null?void 0:r.map((t,p)=>t.type==="link"?e.jsx(D,{showLabel:S,...t.props},t.props.label??p):t.type==="menu"?e.jsx(q,{showLabel:S,...t.props},t.props.label??p):t.type==="action"?e.jsx(E,{...t.props},p):null)})]})})}me.__docgenInfo={description:`## TopBar Layout Overview

The TopBar is divided into three main sections:
- **Brand (Left)** → Displays the logo and title, linking to \`homeTo\`.
- **Center Elements** → Typically used for navigation links or menus, centered horizontally.
- **Right Elements** → Used for actions, user menus, or secondary navigation.

---

## Responsiveness Behavior

The TopBar adapts dynamically to screen width using MUI breakpoints:

| Viewport        | Breakpoint Range     | Behavior                                 |
|-----------------|----------------------|-------------------------------------------|
| **Desktop**     | ≥ 900px (\`md\` and up) | Shows icons **and** labels (full view).   |
| **Tablet**      | 600–899px (\`sm\`–\`md\`) | Shows **icons only** (labels hidden).     |
| **Mobile**      | < 600px (\`sm\` down)   | Collapses into two grouped menus.         |

- The **center section** and **right section** each collapse into a single \`TopBarMenu\` trigger in mobile view.
- The **collapsed menus** show their corresponding grouped elements as dropdown items.

---

## Collapsed Icons

The props \`collapsedIconCenter\` and \`collapsedIconRight\` define the icons used when the TopBar collapses into mobile view:

\`\`\`tsx
<TopBar
  collapsedIconCenter="settings"   // default
  collapsedIconRight="more_horiz"  // default
/>
\`\`\`

These determine which icons appear for the two grouped mobile dropdown triggers.
The values should correspond to names supported by the \`Icon\` component (e.g., Material Symbols).

---

## Notes

- The TopBar ensures real visual centering of \`elementsCenter\` using absolute positioning.
- Padding and insets automatically adjust based on AppBar position (\`fixed\`, \`static\`, or \`sticky\`).
- \`TopBarLink\` and \`TopBarMenu\` each accept \`showLabel\` for tablet responsiveness (icons-only view).`,methods:[],displayName:"TopBar",props:{title:{required:!1,tsType:{name:"string"},description:""},logo:{required:!1,tsType:{name:"string"},description:""},elementsCenter:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:`| { type: 'link'; props: TopBarLinkProps }
| { type: 'menu'; props: TopBarMenuProps }
| { type: 'action'; props: TopBarActionProps }`,elements:[{name:"signature",type:"object",raw:"{ type: 'link'; props: TopBarLinkProps }",signature:{properties:[{key:"type",value:{name:"literal",value:"'link'",required:!0}},{key:"props",value:{name:"signature",type:"object",raw:`{
  label: string;
  href: string;
  icon?: string;
  external?: boolean;
  iconColor?: string;
  /** Whether to display the label next to the icon. Defaults to true. */
  showLabel?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"icon",value:{name:"string",required:!1}},{key:"external",value:{name:"boolean",required:!1}},{key:"iconColor",value:{name:"string",required:!1}},{key:"showLabel",value:{name:"boolean",required:!1},description:"Whether to display the label next to the icon. Defaults to true."}]},required:!0}}]}},{name:"signature",type:"object",raw:"{ type: 'menu'; props: TopBarMenuProps }",signature:{properties:[{key:"type",value:{name:"literal",value:"'menu'",required:!0}},{key:"props",value:{name:"signature",type:"object",raw:`{
  label: string;
  icon?: ReactNode;
  iconColor?: string;
  /** Whether to display the label next to the icon in the top-level menu trigger. Defaults to true. */
  showLabel?: boolean;
  items?: TopBarMenuItemProps[];
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"iconColor",value:{name:"string",required:!1}},{key:"showLabel",value:{name:"boolean",required:!1},description:"Whether to display the label next to the icon in the top-level menu trigger. Defaults to true."},{key:"items",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  href: string;
  icon?: ReactNode;
  iconColor?: string;
  external?: boolean;
  items?: TopBarMenuItemProps[]; 
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"iconColor",value:{name:"string",required:!1}},{key:"external",value:{name:"boolean",required:!1}},{key:"items",value:{name:"Array",elements:[{name:"TopBarMenuItemProps"}],raw:"TopBarMenuItemProps[]",required:!1}}]}}],raw:"TopBarMenuItemProps[]",required:!1}}]},required:!0}}]}},{name:"signature",type:"object",raw:"{ type: 'action'; props: TopBarActionProps }",signature:{properties:[{key:"type",value:{name:"literal",value:"'action'",required:!0}},{key:"props",value:{name:"signature",type:"object",raw:`{
  element: ReactNode;
}`,signature:{properties:[{key:"element",value:{name:"ReactNode",required:!0}}]},required:!0}}]}}]}],raw:"TopBarElement[]"},description:""},elementsRight:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:`| { type: 'link'; props: TopBarLinkProps }
| { type: 'menu'; props: TopBarMenuProps }
| { type: 'action'; props: TopBarActionProps }`,elements:[{name:"signature",type:"object",raw:"{ type: 'link'; props: TopBarLinkProps }",signature:{properties:[{key:"type",value:{name:"literal",value:"'link'",required:!0}},{key:"props",value:{name:"signature",type:"object",raw:`{
  label: string;
  href: string;
  icon?: string;
  external?: boolean;
  iconColor?: string;
  /** Whether to display the label next to the icon. Defaults to true. */
  showLabel?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"icon",value:{name:"string",required:!1}},{key:"external",value:{name:"boolean",required:!1}},{key:"iconColor",value:{name:"string",required:!1}},{key:"showLabel",value:{name:"boolean",required:!1},description:"Whether to display the label next to the icon. Defaults to true."}]},required:!0}}]}},{name:"signature",type:"object",raw:"{ type: 'menu'; props: TopBarMenuProps }",signature:{properties:[{key:"type",value:{name:"literal",value:"'menu'",required:!0}},{key:"props",value:{name:"signature",type:"object",raw:`{
  label: string;
  icon?: ReactNode;
  iconColor?: string;
  /** Whether to display the label next to the icon in the top-level menu trigger. Defaults to true. */
  showLabel?: boolean;
  items?: TopBarMenuItemProps[];
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"iconColor",value:{name:"string",required:!1}},{key:"showLabel",value:{name:"boolean",required:!1},description:"Whether to display the label next to the icon in the top-level menu trigger. Defaults to true."},{key:"items",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  href: string;
  icon?: ReactNode;
  iconColor?: string;
  external?: boolean;
  items?: TopBarMenuItemProps[]; 
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"iconColor",value:{name:"string",required:!1}},{key:"external",value:{name:"boolean",required:!1}},{key:"items",value:{name:"Array",elements:[{name:"TopBarMenuItemProps"}],raw:"TopBarMenuItemProps[]",required:!1}}]}}],raw:"TopBarMenuItemProps[]",required:!1}}]},required:!0}}]}},{name:"signature",type:"object",raw:"{ type: 'action'; props: TopBarActionProps }",signature:{properties:[{key:"type",value:{name:"literal",value:"'action'",required:!0}},{key:"props",value:{name:"signature",type:"object",raw:`{
  element: ReactNode;
}`,signature:{properties:[{key:"element",value:{name:"ReactNode",required:!0}}]},required:!0}}]}}]}],raw:"TopBarElement[]"},description:""},collapsedIconCenter:{required:!1,tsType:{name:"string"},description:'Icon name used when center elements are collapsed (mobile). Default: "settings".'},collapsedIconRight:{required:!1,tsType:{name:"string"},description:'Icon name used when right elements are collapsed (mobile). Default: "more_horiz".'},homeTo:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},sx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""},appBarSx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""},toolbarSx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""},brandSx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""},logoSx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""},titleSx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""},linksSx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""},linkSx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""},menuSx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""},menuItemSx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""},id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}},composes:["AppBarProps"]};export{me as T};
