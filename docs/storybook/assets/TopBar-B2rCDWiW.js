import{j as e,L as O,r as w,c as U,R as ne,i as te,g as oe,aC as q}from"./iframe-7zAExrak.js";import{I as C}from"./Icon-BKZY08Mr.js";import{M as se}from"./Menu-BVp4xYvd.js";import{M as H}from"./MenuItem-BiFBaN5W.js";import{Link as ae}from"./index-BQiZIFOf.js";import{u as F}from"./useGuiMediaQuery-CAaFDQRO.js";import{u as ie,a as le}from"./useInsets-S4d32CcO.js";import{A as pe}from"./Avatar-YyBZJyIO.js";import{A as ue,T as ce}from"./Toolbar-BN0trzD-.js";const D=({label:i,href:r,icon:o,iconColor:s,external:n,showLabel:l=!0})=>{const a=e.jsxs(e.Fragment,{children:[o&&e.jsx(C,{name:o,iconColor:s||"currentColor",style:{marginRight:3,fontSize:20,position:"relative",top:-1}}),l&&e.jsx("span",{children:i})]});return e.jsx(O,{href:r??"#",target:n?"_blank":"_self",style:{display:"inline-flex",alignItems:"center",color:"inherit",textDecoration:"none"},children:a})};D.__docgenInfo={description:"",methods:[],displayName:"TopBarLink",props:{label:{required:!0,tsType:{name:"string"},description:""},href:{required:!0,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"string"},description:""},external:{required:!1,tsType:{name:"boolean"},description:""},iconColor:{required:!1,tsType:{name:"string"},description:""},showLabel:{required:!1,tsType:{name:"boolean"},description:"Whether to display the label next to the icon. Defaults to true.",defaultValue:{value:"true",computed:!1}}}};const V=(i,r,o,s)=>i.map(({label:n,href:l,icon:a,iconColor:h,external:m,items:y},b)=>{const g=n??l??b,u=o.has(n),T=e.jsxs(O,{to:m?void 0:l,href:m?l:void 0,target:m?"_blank":void 0,style:{display:"inline-flex",alignItems:"center",color:"inherit",textDecoration:"none",flexGrow:1},children:[a&&e.jsx(C,{name:typeof a=="string"?a:"info",iconColor:h||"currentColor",style:{marginRight:2,fontSize:20,position:"relative",top:-1}}),n]});return y&&y.length>0?e.jsxs(ne.Fragment,{children:[e.jsxs(H,{onClick:()=>s(n),sx:{color:"inherit",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[T,e.jsx(C,{name:u?"expand_less":"expand_more",iconColor:"currentColor",style:{fontSize:20,position:"relative",top:-1,marginLeft:1}})]}),e.jsx("div",{style:{maxHeight:u?"500px":"0px",opacity:u?1:0,overflow:"hidden",transition:"max-height 0.2s ease-out, opacity 0.2s ease-out",paddingLeft:16},children:V(y,r,o,s)})]},g):e.jsx(H,{onClick:r,sx:{color:"inherit"},children:T},g)}),B=({label:i,icon:r,iconColor:o,items:s,showLabel:n=!0})=>{const[l,a]=w.useState(null),[h,m]=w.useState(new Set),y=u=>{a(u.currentTarget)},b=()=>{a(null),m(new Set)},g=u=>{m(T=>{const v=new Set(T);return v.has(u)?v.delete(u):v.add(u),v})};return e.jsxs(e.Fragment,{children:[e.jsxs(U,{onClick:y,sx:{cursor:"pointer",px:1,display:"inline-flex",alignItems:"center",color:"inherit"},children:[r&&e.jsx(C,{name:typeof r=="string"?r:"info",iconColor:o||"currentColor",style:{marginRight:n?2:0,fontSize:20,position:"relative",top:-1}}),n&&e.jsx("span",{children:i})]}),e.jsx(se,{anchorEl:l,open:!!l,onClose:b,sx:{color:"inherit"},children:s&&V(s,b,h,g)})]})};B.__docgenInfo={description:"",methods:[],displayName:"TopBarMenu",props:{label:{required:!0,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},iconColor:{required:!1,tsType:{name:"string"},description:""},showLabel:{required:!1,tsType:{name:"boolean"},description:"Whether to display the label next to the icon in the top-level menu trigger. Defaults to true.",defaultValue:{value:"true",computed:!1}},items:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  href: string;
  icon?: ReactNode;
  iconColor?: string;
  external?: boolean;
  items?: TopBarMenuItemProps[]; 
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"iconColor",value:{name:"string",required:!1}},{key:"external",value:{name:"boolean",required:!1}},{key:"items",value:{name:"Array",elements:[{name:"TopBarMenuItemProps"}],raw:"TopBarMenuItemProps[]",required:!1}}]}}],raw:"TopBarMenuItemProps[]"},description:""}}};const E=({element:i,className:r,style:o})=>e.jsx("div",{className:te("TopBarAction",r),style:o,children:i});E.__docgenInfo={description:"",methods:[],displayName:"TopBarAction",props:{element:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const x=(...i)=>i.filter(Boolean),G=i=>{const r=[];return i.forEach(o=>{if(o.type==="link"){const{label:s,href:n,icon:l,iconColor:a,external:h}=o.props;s&&n&&r.push({label:s,href:n,icon:l,iconColor:a,external:h})}else if(o.type==="menu"){const{items:s}=o.props;Array.isArray(s)&&s.forEach(n=>r.push(n))}}),r};function de(i){var W,$;const{title:r="",logo:o="",elementsCenter:s=[],elementsRight:n=[],homeTo:l,position:a="fixed",sx:h,appBarSx:m,toolbarSx:y,brandSx:b,logoSx:g,titleSx:u,linksSx:T,id:v,className:Q,collapsedIconCenter:X="settings",collapsedIconRight:J="more_horiz"}=i,c=oe(),S=F(c.breakpoints.down("sm")),j=F(c.breakpoints.up("md")),R=w.useRef(null),L=w.useRef(null),d=ie(),I=le(),M=Math.max(0,Number((d==null?void 0:d.left)??0)),N=Math.max(0,Number((d==null?void 0:d.right)??0)),_=M+N,z=!S,K=((W=String(r??"").trim().charAt(0))==null?void 0:W.toUpperCase())||"",P=l!==null,f=P?l??"/":void 0,Y=o?e.jsx(q,{component:"img",src:o,alt:r?`${r} logo`:"Brand logo",sx:x({height:28},g)}):e.jsx(pe,{sx:x({width:28,height:28,fontSize:"0.875rem"},g),children:K||"?"});w.useEffect(()=>{if(typeof I!="function")return;const t=()=>{const k=L.current??R.current,re=(k==null?void 0:k.offsetHeight)??48;I({nav:re})};t();let p;if(typeof ResizeObserver<"u"){const k=L.current??R.current;k&&(p=new ResizeObserver(()=>t()),p.observe(k))}return()=>{p&&p.disconnect(),I({top:0,nav:0})}},[S,I]),w.useEffect(()=>{d&&typeof d.left=="number"&&document.documentElement.style.setProperty("--gui-inset-left",`${d.left}px`)},[d.left]);const A=a==="fixed"||a==="sticky",Z={minHeight:48,backgroundColor:c.palette.background.nav,borderBottom:"1px solid",borderColor:c.palette.divider,zIndex:(($=c==null?void 0:c.zIndex)==null?void 0:$.appBar)??1100,...A&&{top:0,left:`${M}px`,right:`${N}px`,width:`calc(100% - ${_}px)`,transition:"left 0.3s ease, right 0.3s ease, width 0.3s ease"},boxSizing:"border-box"},ee=A?void 0:{ml:`${M}px`,mr:`${N}px`,width:`calc(100% - ${_}px)`,transition:"margin-left 0.3s ease, margin-right 0.3s ease, width 0.3s ease"};return e.jsx(ue,{id:v,className:Q,position:a,elevation:0,ref:L,sx:x(Z,{"--has-topbar":1},ee,h,m),children:e.jsxs(ce,{ref:R,variant:"dense",disableGutters:!0,sx:x(A?{minHeight:48,pl:1.5,pr:1.5,py:0,display:"flex",alignItems:"center",gap:1.25,position:"relative"}:{minHeight:48,pl:1.5,pr:1.5,py:.5,display:"flex",alignItems:"center",gap:1.25,position:"relative"},y),children:[e.jsxs(q,{sx:x({display:"flex",alignItems:"center",flexShrink:0,textDecoration:"none",ml:0,pl:1.5,gap:z?1.25:.75,"&:hover":{textDecoration:"none"},cursor:P?"pointer":"default"},b),component:P?typeof f=="string"&&/^(https?:)?\/\//.test(f)?"a":ae:"div",...P&&f?typeof f=="string"&&/^(https?:)?\/\//.test(f)?{href:f}:{to:f}:{},children:[Y,z&&r&&e.jsx(U,{variant:"h6",noWrap:!0,component:"div",sx:x({color:c.palette.text.secondary,fontWeight:500},u),children:r})]}),!S&&e.jsx(q,{sx:{position:"absolute",left:"50%",transform:"translateX(-50%)",pointerEvents:"none",color:c.palette.text.secondary},children:e.jsx(q,{sx:{display:"flex",alignItems:"center",gap:1.25,pointerEvents:"auto"},children:s.map((t,p)=>t.type==="link"?e.jsx(D,{showLabel:j,...t.props},t.props.label??p):t.type==="menu"?e.jsx(B,{showLabel:j,...t.props},t.props.label??p):t.type==="action"?e.jsx(E,{...t.props},p):null)})}),e.jsx(q,{sx:x({display:"flex",alignItems:"center",flexShrink:0,marginLeft:"auto",gap:1.25,pr:1.5,color:c.palette.text.secondary,transition:"color 0.2s ease","&:hover":{color:c.palette.text.primary}},T),children:S?e.jsxs(e.Fragment,{children:[s.length>0&&e.jsx(B,{label:"",icon:X,items:G(s),showLabel:!1}),n.length>0&&e.jsx(B,{label:"",icon:J,items:G(n),showLabel:!1})]}):n==null?void 0:n.map((t,p)=>t.type==="link"?e.jsx(D,{showLabel:j,...t.props},t.props.label??p):t.type==="menu"?e.jsx(B,{showLabel:j,...t.props},t.props.label??p):t.type==="action"?e.jsx(E,{...t.props},p):null)})]})})}de.__docgenInfo={description:`## TopBar Layout Overview

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
}`,signature:{properties:[{key:"element",value:{name:"ReactNode",required:!0}}]},required:!0}}]}}]}],raw:"TopBarElement[]"},description:""},collapsedIconCenter:{required:!1,tsType:{name:"string"},description:'Icon name used when center elements are collapsed (mobile). Default: "settings".'},collapsedIconRight:{required:!1,tsType:{name:"string"},description:'Icon name used when right elements are collapsed (mobile). Default: "more_horiz".'},homeTo:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},sx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""},appBarSx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""},toolbarSx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""},brandSx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""},logoSx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""},titleSx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""},linksSx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""},linkSx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""},menuSx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""},menuItemSx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""},id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}},composes:["AppBarProps"]};export{de as T};
