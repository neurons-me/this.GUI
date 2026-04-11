import{j as e,L as X,r as y,c as J,au as le,e as pe,at as ue,av as B}from"./iframe-VByCAMq0.js";import{I as R}from"./Icon-BTDP3cyE.js";import{M as ce}from"./Menu-9llF1EIC.js";import{M as O}from"./MenuItem-CHLMcV3W.js";import{Link as me}from"./index-GfE-hmSP.js";import{u as U}from"./useGuiMediaQuery-D_LWHVvm.js";import{u as de,a as he}from"./useInsets-Cj6UKEdm.js";import{A as ye}from"./Avatar-Xiw6SHQ4.js";import{A as fe}from"./AppBar-COTbyzEz.js";import{T as ge}from"./Toolbar-B5C1gson.js";const _=({label:t,href:r,icon:n,iconColor:o,external:a,showLabel:i=!0})=>{const l=e.jsxs(e.Fragment,{children:[n&&e.jsx(R,{name:n,iconColor:o||"currentColor",style:{marginRight:3,fontSize:20,position:"relative",top:-1}}),i&&e.jsx("span",{children:t})]});return e.jsx(X,{href:r??"#",target:a?"_blank":"_self",style:{display:"inline-flex",alignItems:"center",color:"inherit",textDecoration:"none"},children:l})};_.__docgenInfo={description:"",methods:[],displayName:"TopBarLink",props:{label:{required:!0,tsType:{name:"string"},description:""},href:{required:!0,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"string"},description:""},external:{required:!1,tsType:{name:"boolean"},description:""},iconColor:{required:!1,tsType:{name:"string"},description:""},showLabel:{required:!1,tsType:{name:"boolean"},description:"Whether to display the label next to the icon. Defaults to true.",defaultValue:{value:"true",computed:!1}}}};const K=(t,r,n,o)=>t.map(({label:a,href:i,icon:l,iconColor:h,external:m,items:f},T)=>{const v=a??i??T,u=n.has(a),g=e.jsxs(X,{to:m?void 0:i,href:m?i:void 0,target:m?"_blank":void 0,style:{display:"inline-flex",alignItems:"center",color:"inherit",textDecoration:"none",flexGrow:1},children:[l&&e.jsx(R,{name:typeof l=="string"?l:"info",iconColor:h||"currentColor",style:{marginRight:2,fontSize:20,position:"relative",top:-1}}),a]});return f&&f.length>0?e.jsxs(le.Fragment,{children:[e.jsxs(O,{onClick:()=>o(a),sx:{color:"inherit",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[g,e.jsx(R,{name:u?"expand_less":"expand_more",iconColor:"currentColor",style:{fontSize:20,position:"relative",top:-1,marginLeft:1}})]}),e.jsx("div",{style:{maxHeight:u?"500px":"0px",opacity:u?1:0,overflow:"hidden",transition:"max-height 0.2s ease-out, opacity 0.2s ease-out",paddingLeft:16},children:K(f,r,n,o)})]},v):e.jsx(O,{onClick:r,sx:{color:"inherit"},children:g},v)}),S=({label:t,icon:r,iconColor:n,items:o,showLabel:a=!0})=>{const[i,l]=y.useState(null),[h,m]=y.useState(new Set),f=u=>{l(u.currentTarget)},T=()=>{l(null),m(new Set)},v=u=>{m(g=>{const k=new Set(g);return k.has(u)?k.delete(u):k.add(u),k})};return e.jsxs(e.Fragment,{children:[e.jsxs(J,{onClick:f,sx:{cursor:"pointer",px:1,display:"inline-flex",alignItems:"center",color:"inherit"},children:[r&&e.jsx(R,{name:typeof r=="string"?r:"info",iconColor:n||"currentColor",style:{marginRight:a?2:0,fontSize:20,position:"relative",top:-1}}),a&&e.jsx("span",{children:t})]}),e.jsx(ce,{anchorEl:i,open:!!i,onClose:T,sx:{color:"inherit"},children:o&&K(o,T,h,v)})]})};S.__docgenInfo={description:"",methods:[],displayName:"TopBarMenu",props:{label:{required:!0,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},iconColor:{required:!1,tsType:{name:"string"},description:""},showLabel:{required:!1,tsType:{name:"boolean"},description:"Whether to display the label next to the icon in the top-level menu trigger. Defaults to true.",defaultValue:{value:"true",computed:!1}},items:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  href: string;
  icon?: ReactNode;
  iconColor?: string;
  external?: boolean;
  items?: TopBarMenuItemProps[]; 
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"iconColor",value:{name:"string",required:!1}},{key:"external",value:{name:"boolean",required:!1}},{key:"items",value:{name:"Array",elements:[{name:"TopBarMenuItemProps"}],raw:"TopBarMenuItemProps[]",required:!1}}]}}],raw:"TopBarMenuItemProps[]"},description:""}}};const W=({element:t,className:r,style:n})=>e.jsx("div",{className:pe("TopBarAction",r),style:n,children:t});W.__docgenInfo={description:"",methods:[],displayName:"TopBarAction",props:{element:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};function xe(t){return!Array.isArray(t)||t.length===0?[]:t.filter(Boolean)}function M(t,r,n){return xe(t).flatMap(o=>{const a=o[r];if(!a)return[];const i=typeof a=="function"?a({slot:n,collectionId:o.id}):a;return Array.isArray(i)?i.filter(Boolean):[]})}function Pe(t,r,n){return[...t??[],...M(r,n,n)]}function Re(t,r,n){const o=n==="rightBar"?"rightSidebar":"rightSidebarFooter";return[...t??[],...M(r,o,o)]}function V(t,r,n){return[...t??[],...M(r,n,n)]}function Me(t,r,n){return[...t??[],...M(r,n,n)]}const b=(...t)=>t.filter(Boolean),Q=t=>{const r=[];return t.forEach(n=>{if(n.type==="link"){const{label:o,href:a,icon:i,iconColor:l,external:h}=n.props;o&&a&&r.push({label:o,href:a,icon:i,iconColor:l,external:h})}else if(n.type==="menu"){const{items:o}=n.props;Array.isArray(o)&&o.forEach(a=>r.push(a))}}),r};function be(t){var H,G;const{title:r="",logo:n="",elementsCenter:o=[],elementsRight:a=[],collectionsCenter:i=[],collectionsRight:l=[],homeTo:h,position:m="fixed",sx:f,appBarSx:T,toolbarSx:v,brandSx:u,logoSx:g,titleSx:k,linksSx:Y,id:Z,className:ee,collapsedIconCenter:re="settings",collapsedIconRight:ne="more_horiz"}=t,c=ue(),C=U(c.breakpoints.down("sm")),I=U(c.breakpoints.up("md")),L=y.useRef(null),A=y.useRef(null),d=de(),j=he(),N=Math.max(0,Number((d==null?void 0:d.left)??0)),D=Math.max(0,Number((d==null?void 0:d.right)??0)),$=N+D,F=!C,E=y.useMemo(()=>V(o,i,"topBarCenter"),[i,o]),q=y.useMemo(()=>V(a,l,"topBarRight"),[l,a]),te=((H=String(r??"").trim().charAt(0))==null?void 0:H.toUpperCase())||"",P=h!==null,x=P?h??"/":void 0,oe=n?e.jsx(B,{component:"img",src:n,alt:r?`${r} logo`:"Brand logo",sx:b({height:28},g)}):e.jsx(ye,{sx:b({width:28,height:28,fontSize:"0.875rem"},g),children:te||"?"});y.useEffect(()=>{if(typeof j!="function")return;const s=()=>{const w=A.current??L.current,ie=(w==null?void 0:w.offsetHeight)??48;j({nav:ie},"top-bar")};s();let p;if(typeof ResizeObserver<"u"){const w=A.current??L.current;w&&(p=new ResizeObserver(()=>s()),p.observe(w))}return()=>{p&&p.disconnect(),j({top:0,nav:0},"top-bar")}},[C,j]),y.useEffect(()=>{d&&typeof d.left=="number"&&document.documentElement.style.setProperty("--gui-inset-left",`${d.left}px`)},[d.left]);const z=m==="fixed"||m==="sticky",ae={minHeight:48,backgroundColor:c.palette.background.nav,borderBottom:"1px solid",borderColor:c.palette.divider,zIndex:((G=c==null?void 0:c.zIndex)==null?void 0:G.appBar)??1100,...z&&{top:0,left:`${N}px`,right:`${D}px`,width:`calc(100% - ${$}px)`,transition:"left 0.3s ease, right 0.3s ease, width 0.3s ease"},boxSizing:"border-box"},se=z?void 0:{ml:`${N}px`,mr:`${D}px`,width:`calc(100% - ${$}px)`,transition:"margin-left 0.3s ease, margin-right 0.3s ease, width 0.3s ease"};return e.jsx(fe,{id:Z,className:ee,position:m,elevation:0,ref:A,sx:b(ae,{"--has-topbar":1},se,f,T),children:e.jsxs(ge,{ref:L,variant:"dense",disableGutters:!0,sx:b(z?{minHeight:48,pl:1.5,pr:1.5,py:0,display:"flex",alignItems:"center",gap:1.25,position:"relative"}:{minHeight:48,pl:1.5,pr:1.5,py:.5,display:"flex",alignItems:"center",gap:1.25,position:"relative"},v),children:[e.jsxs(B,{sx:b({display:"flex",alignItems:"center",flexShrink:0,textDecoration:"none",ml:0,pl:1.5,gap:F?1.25:.75,"&:hover":{textDecoration:"none"},cursor:P?"pointer":"default"},u),component:P?typeof x=="string"&&/^(https?:)?\/\//.test(x)?"a":me:"div",...P&&x?typeof x=="string"&&/^(https?:)?\/\//.test(x)?{href:x}:{to:x}:{},children:[oe,F&&r&&e.jsx(J,{variant:"h6",noWrap:!0,component:"div",sx:b({color:c.palette.text.secondary,fontWeight:500},k),children:r})]}),!C&&e.jsx(B,{sx:{position:"absolute",left:"50%",transform:"translateX(-50%)",pointerEvents:"none",color:c.palette.text.secondary},children:e.jsx(B,{sx:{display:"flex",alignItems:"center",gap:1.25,pointerEvents:"auto"},children:E.map((s,p)=>s.type==="link"?e.jsx(_,{showLabel:I,...s.props},s.props.label??p):s.type==="menu"?e.jsx(S,{showLabel:I,...s.props},s.props.label??p):s.type==="action"?e.jsx(W,{...s.props},p):null)})}),e.jsx(B,{sx:b({display:"flex",alignItems:"center",flexShrink:0,marginLeft:"auto",gap:1.25,pr:1.5,color:c.palette.text.secondary,transition:"color 0.2s ease","&:hover":{color:c.palette.text.primary}},Y),children:C?e.jsxs(e.Fragment,{children:[E.length>0&&e.jsx(S,{label:"",icon:re,items:Q(E),showLabel:!1}),q.length>0&&e.jsx(S,{label:"",icon:ne,items:Q(q),showLabel:!1})]}):q==null?void 0:q.map((s,p)=>s.type==="link"?e.jsx(_,{showLabel:I,...s.props},s.props.label??p):s.type==="menu"?e.jsx(S,{showLabel:I,...s.props},s.props.label??p):s.type==="action"?e.jsx(W,{...s.props},p):null)})]})})}be.__docgenInfo={description:`## TopBar Layout Overview

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
}`,signature:{properties:[{key:"element",value:{name:"ReactNode",required:!0}}]},required:!0}}]}}]}],raw:"TopBarElement[]"},description:""},collectionsCenter:{required:!1,tsType:{name:"Array",elements:[{name:"SideBarsCollectionInput"}],raw:"SideBarsCollectionInput[]"},description:""},collectionsRight:{required:!1,tsType:{name:"Array",elements:[{name:"SideBarsCollectionInput"}],raw:"SideBarsCollectionInput[]"},description:""},collapsedIconCenter:{required:!1,tsType:{name:"string"},description:'Icon name used when center elements are collapsed (mobile). Default: "settings".'},collapsedIconRight:{required:!1,tsType:{name:"string"},description:'Icon name used when right elements are collapsed (mobile). Default: "more_horiz".'},homeTo:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},sx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""},appBarSx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""},toolbarSx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""},brandSx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""},logoSx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""},titleSx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""},linksSx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""},linkSx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""},menuSx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""},menuItemSx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""},id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}},composes:["AppBarProps"]};export{be as T,Re as a,Me as b,Pe as m};
