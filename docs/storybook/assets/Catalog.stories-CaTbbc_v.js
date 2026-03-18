import{j as e,l as b}from"./iframe-C1GRP0hj.js";import{T as w}from"./Catalog-CXhpFMrS.js";import"./preload-helper-Dp1pzeXC.js";import"./Grid-DDQ3w6Xg.js";import"./clsx-B-dksMZM.js";import"./styled-8fWbaqUV.js";import"./useTheme-CCB-ESoo.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Card-D7TD3LSD.js";import"./Paper-DxQ0_Ivm.js";import"./memoTheme-q_hzTFOc.js";import"./CardHeader-WoLQsJgw.js";import"./useSlot-CKSjisIe.js";import"./useForkRef-BhU-CSAb.js";import"./Typography-CeTjeXIp.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CardContent-DFpFxUGy.js";import"./CardActions-B6ArFgrq.js";import"./Typography-C12rh2ix.js";import"./Box-VzSXm9Df.js";import"./Box-C7pz1-Z6.js";import"./Avatar-CJus_FWz.js";import"./Avatar-BighDsha.js";import"./createSvgIcon-C_EqHwxV.js";import"./Switch-f8c9fVix.js";import"./useFormControl-Cjj0OCnf.js";import"./useControlled-C5BOGgFW.js";import"./ButtonBase-rOZxXEMH.js";import"./TransitionGroupContext-qNdRr-hk.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./useEventCallback-Bs6yfZ5k.js";import"./isFocusVisible-B8k4qzLc.js";import"./mergeSlotProps-By6iUkp4.js";import"./Tooltip-DEv4E9za.js";import"./Portal-G2dvxw46.js";import"./index-DyzKfLlg.js";import"./index-Be--jnHL.js";import"./Grow-D_K8rWid.js";import"./utils--q6FxFGJ.js";import"./Icon-K6w2oQgw.js";const le={title:"GUI/Theme/Catalog",component:w,tags:["autodocs"],decorators:[f=>{const x=()=>{try{const a=b("Theme/Palette","Default");if(typeof a=="function")return a()}catch{}window.location.hash="#/story/theme-palette--default"};return e.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",background:"var(--gui-bg, #0b0f14)"},children:[e.jsxs("div",{style:{position:"sticky",top:0,zIndex:10,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 12px",borderBottom:"1px solid rgba(255,255,255,0.08)",backdropFilter:"blur(10px)",background:"rgba(10, 14, 20, 0.72)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[e.jsx("div",{style:{fontWeight:700,letterSpacing:-.2},children:"Themes Catalog"}),e.jsx("div",{style:{opacity:.7,fontSize:12},children:"Browse & select GUI themes"})]}),e.jsx("button",{type:"button",onClick:x,title:"Open Palette stories","aria-label":"Open Palette stories",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:36,height:36,borderRadius:10,border:"1px solid rgba(255,255,255,0.12)",background:"rgba(255,255,255,0.04)",color:"rgba(255,255,255,0.92)",cursor:"pointer"},children:e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{d:"M12 3c-4.97 0-9 3.58-9 8c0 2.76 1.66 5.2 4.26 6.67c.58.33.94.95.94 1.61V21c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-1.18c0-.66.36-1.28.94-1.61C19.34 16.2 21 13.76 21 11c0-4.42-4.03-8-9-8zm2.5 7c.83 0 1.5.67 1.5 1.5S15.33 13 14.5 13S13 12.33 13 11.5S13.67 10 14.5 10zM7.5 13C6.67 13 6 12.33 6 11.5S6.67 10 7.5 10S9 10.67 9 11.5S8.33 13 7.5 13zm2-4.5C8.67 8.5 8 7.83 8 7s.67-1.5 1.5-1.5S11 6.17 11 7s-.67 1.5-1.5 1.5zm5 0C13.67 8.5 13 7.83 13 7s.67-1.5 1.5-1.5S16 6.17 16 7s-.67 1.5-1.5 1.5z"})})})]}),e.jsx("div",{style:{padding:16,minHeight:320,flex:1},children:e.jsx(f,{})})]})}],parameters:{docs:{description:{component:`
The **ThemesCatalog** component renders a visual interface to explore and select available GUI themes for your application.

It fetches all theme configurations from the \`getGuiThemes()\` utility and displays them using a visually rich card interface. You can toggle between **grid** and **list** layouts and switch between light/dark previews per theme. When a theme is selected, it is applied globally via the context provided by \`useThemeContext()\`.

---
## Features
- Visual layout for theme browsing.
- Switch between **grid** and **list** variants.
- Light/dark mode preview toggle.
- Swatches preview for key palette values: \`primary\`, \`secondary\`, and \`background\`.
- Selectable themes that apply across your GUI via context.
- JSON-compatible configuration for declarative UI building.
- Fully themed with **This.GUI** primitives.

---
## Props
- \`variant?: 'grid' | 'list'\` — controls layout format. Defaults to \`grid\`.
- \`sx?: SxProps\` — accepts style overrides via MUI’s \`sx\` prop.
- \`hideDescription?: boolean\` — hide the theme description text inside each card.
- \`hideAuthor?: boolean\` — hide the theme author text inside each card.
- \`minimal?: boolean\` — compact view (equivalent to \`hideAuthor\` + \`hideDescription\`).

---
## Basic Usage
~~~jsx
<ThemesCatalog variant="grid" />
<ThemesCatalog variant="list" />
~~~

## Declarative JSON Configuration
~~~json
{
  "type": "ThemesCatalog",
  "props": {
    "variant": "list"
  }
}
~~~

This component is ideal for apps that allow users to select their visual theme from a set of predefined theme options. It pairs well with This.GUI’s theme management context and is useful in both developer-facing configuration tools and end-user customization interfaces.
        `}}},argTypes:{variant:{control:{type:"radio"},options:["grid","list"],description:"Choose layout variant"},hideDescription:{control:{type:"boolean"},description:"Hide the theme description text inside each card"},hideAuthor:{control:{type:"boolean"},description:"Hide the theme author text inside each card"},minimal:{control:{type:"boolean"},description:"Compact view (hides both author and description)"}},args:{variant:"grid",hideDescription:!1,hideAuthor:!1,minimal:!1}},t={args:{variant:"grid"}},i={name:"List layout",args:{variant:"list"}},r={name:"No descriptions",args:{variant:"grid",hideDescription:!0}},o={name:"Minimal (no author, no description)",args:{variant:"grid",minimal:!0}};var s,n,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    variant: 'grid'
  }
}`,...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var p,c,d;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'List layout',
  args: {
    variant: 'list'
  }
}`,...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,h,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'No descriptions',
  args: {
    variant: 'grid',
    hideDescription: true
  }
}`,...(u=(h=r.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var g,v,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Minimal (no author, no description)',
  args: {
    variant: 'grid',
    minimal: true
  }
}`,...(y=(v=o.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const pe=["Playground","ListVariant","NoDescriptions","Minimal"];export{i as ListVariant,o as Minimal,r as NoDescriptions,t as Playground,pe as __namedExportsOrder,le as default};
