import{f as c,g,r as m,j as f,B as x}from"./iframe-w4xmodgg.js";function v({children:i,padding:n=3,sx:r={},insetsAware:t=!0,...s}){c();const a=g(),o=m.useMemo(()=>typeof n=="number"?n<=10&&typeof a.spacing=="function"?a.spacing(n):`${n}px`:n??"0px",[n,a]),e=typeof o=="string"&&o.trim().split(/\s+/).length===1?o:void 0,d=t&&e?`calc(${e} + var(--gui-inset-top, 0px))`:void 0,l=t&&e?`calc(${e} + var(--gui-inset-bottom, 0px))`:void 0,u=t&&e?`calc(${e} + var(--gui-inset-left, 0px))`:void 0,p=t&&e?`calc(${e} + var(--gui-inset-right, 0px))`:void 0;return f.jsx(x,{id:"page-container",...s,sx:{flex:1,flexGrow:1,width:"100%",minHeight:"100%",display:"flex",flexDirection:"column",overflowY:"auto",overflowX:"hidden",padding:o,background:"transparent",border:"1px solid",borderColor:"divider",borderRadius:2,filter:"brightness(1.16)",boxSizing:"border-box",...t&&e&&{padding:0,paddingTop:d,paddingBottom:l,paddingLeft:u,paddingRight:p},...r},children:i})}v.__docgenInfo={description:`Page
----------
A flexible container for rendering page-level content within layouts.
Typically used inside Layout components or Routes.

Features:
- Applies consistent padding and layout structure.
- Uses transparent background with a smooth border by default.
- Supports custom sx overrides.
- Fully responsive by default.`,methods:[],displayName:"Page",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"Page content"},padding:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Padding applied to the page.

- number → resolved via theme.spacing when available
- string → raw CSS value (e.g. "24px", "2rem", "16px 24px")`,defaultValue:{value:"3",computed:!1}},background:{required:!1,tsType:{name:"string"},description:"Any valid CSS background value (color / gradient / image)."},sx:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"any"}],raw:"Record<string, any>"},description:"Additional style overrides forwarded to Box `sx`.",defaultValue:{value:"{}",computed:!1}},insetsAware:{required:!1,tsType:{name:"boolean"},description:"Respect layout insets via CSS vars: --gui-inset-*",defaultValue:{value:"true",computed:!1}}}};export{v as P};
