import{f as c,r as g,j as m}from"./iframe-B8RbS7uw.js";import{u as f}from"./useGuiTheme-CD41npeU.js";import{B as v}from"./Box-Bx62dzkA.js";function x({children:i,padding:n=3,background:r="transparent",sx:s={},insetsAware:t=!0}){c();const o=f(),a=g.useMemo(()=>typeof n=="number"?n<=10&&typeof o.spacing=="function"?o.spacing(n):`${n}px`:n??"0px",[n,o]),e=typeof a=="string"&&a.trim().split(/\s+/).length===1?a:void 0,d=t&&e?`calc(${e} + var(--gui-inset-top, 0px))`:void 0,l=t&&e?`calc(${e} + var(--gui-inset-bottom, 0px))`:void 0,u=t&&e?`calc(${e} + var(--gui-inset-left, 0px))`:void 0,p=t&&e?`calc(${e} + var(--gui-inset-right, 0px))`:void 0;return m.jsx(v,{id:"page-container",sx:{flex:1,flexGrow:1,width:"100%",minHeight:"100%",display:"flex",flexDirection:"column",overflowY:"auto",overflowX:"hidden",padding:a,background:r,boxSizing:"border-box",...t&&e&&{padding:0,paddingTop:d,paddingBottom:l,paddingLeft:u,paddingRight:p},...s},children:i})}x.__docgenInfo={description:`Page
----------
A flexible container for rendering page-level content within layouts.
Typically used inside Layout components or Routes.

Features:
- Applies consistent padding and layout structure.
- Supports background color/image and custom sx overrides.
- Fully responsive by default.`,methods:[],displayName:"Page",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"Page content"},padding:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Padding applied to the page.

- number → resolved via theme.spacing when available
- string → raw CSS value (e.g. "24px", "2rem", "16px 24px")`,defaultValue:{value:"3",computed:!1}},background:{required:!1,tsType:{name:"string"},description:"Any valid CSS background value (color / gradient / image).",defaultValue:{value:"'transparent'",computed:!1}},sx:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"any"}],raw:"Record<string, any>"},description:"Additional style overrides forwarded to Box `sx`.",defaultValue:{value:"{}",computed:!1}},insetsAware:{required:!1,tsType:{name:"boolean"},description:"Respect layout insets via CSS vars: --gui-inset-*",defaultValue:{value:"true",computed:!1}}}};export{x as P};
