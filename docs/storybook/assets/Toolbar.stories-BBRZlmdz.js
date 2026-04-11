import{j as r,a as e,B as W}from"./iframe-VByCAMq0.js";import{A as D}from"./AppBar-DjYRabCk.js";import{B as C}from"./Button-1wg7geSe.js";import{I as l}from"./IconButton-BiNRO4tv.js";import{T as o}from"./InspectorToggle-l5ZL5CIN.js";import"./ListItemIcon-CZbD3kdS.js";import"./ListItemText-EGN6nTJf.js";import"./Drawer-Ce_ZhLjS.js";import"./Tooltip-rRxgskYp.js";import{I as d}from"./Icon-BTDP3cyE.js";import"./preload-helper-Dp1pzeXC.js";import"./AppBar-COTbyzEz.js";import"./Paper-CGsCy_dS.js";import"./Button-BDqwkNQI.js";import"./ButtonBase-Ddf4rdCO.js";import"./TransitionGroupContext-BsXbcIrf.js";import"./useForkRef-at6iFRE0.js";import"./CircularProgress-BiH9goPR.js";import"./IconButton-CGlHk7MM.js";import"./Toolbar-B5C1gson.js";import"./selectionStore-Coy7dh9o.js";import"./listItemIconClasses-BIfuaFhY.js";import"./ListContext-CUbLHnka.js";import"./listItemTextClasses-0eqNW5zI.js";import"./useSlot-BQxwWLoj.js";import"./Grow-yTTW3IAg.js";import"./Modal-WpCfVUEs.js";import"./useControlled-85p8TW_V.js";const ir={title:"Molecules/Toolbar",component:o,tags:["autodocs"],decorators:[R=>r.jsx("div",{style:{padding:16,minHeight:240},children:r.jsx(R,{})})],parameters:{docs:{description:{component:`
The **Toolbar** atom is a thin wrapper over MUI's \`MuiToolbar\`.

> **Not polymorphic.** Unlike \`Button\` or \`Box\`, **Toolbar does not accept** a \`component\` prop in MUI. If you need a different semantic element (e.g. \`<header>\`), wrap it with \`<Box component="header">\`.

---
## Features
- Density via \`variant\`: \`'regular'\` | \`'dense'\`.
- Optional gutters removal with \`disableGutters\`.
- Full **\`sx\`** support for styling.
- Plays nicely inside **Bar** and custom layouts.

---
## Key Props
- \`variant?: 'regular' | 'dense'\`
- \`disableGutters?: boolean\`
- \`sx?: SxProps\` — theme-aware styling.

---
## Basic usage
~~~tsx
import { Toolbar } from '@/gui/atoms';

<Toolbar>
  <span>Left content</span>
</Toolbar>
~~~

## In an Bar
~~~tsx
import { Bar, Toolbar, Typography } from '@/gui/atoms';

<Bar position="static">
  <Toolbar>
    <Typography variant="h6">Title</Typography>
  </Toolbar>
</Bar>
~~~

## Change semantic element with Box
~~~tsx
import { Box, Toolbar } from '@/gui/atoms';

<Box component="header">
  <Toolbar variant="dense">Compact header</Toolbar>
</Box>
~~~
        `}},controls:{exclude:["component"]}},argTypes:{variant:{control:{type:"radio"},options:["regular","dense"]},disableGutters:{control:"boolean"}},args:{variant:"regular",disableGutters:!1,children:r.jsx("div",{style:{display:"flex",width:"100%",alignItems:"center",gap:12},children:r.jsx("strong",{children:"Toolbar content"})})}},a={},t={render:()=>r.jsxs("div",{style:{display:"grid",gap:12},children:[r.jsx(o,{children:r.jsx(e,{variant:"body2",children:"Regular Toolbar"})}),r.jsx(o,{variant:"dense",children:r.jsx(e,{variant:"body2",children:"Dense Toolbar"})})]})},s={render:()=>r.jsxs(o,{sx:{display:"flex",gap:8},children:[r.jsx(e,{sx:{flex:1},variant:"h6",children:"Title"}),r.jsx(l,{"aria-label":"search",children:r.jsx(d,{name:"search",fontSize:20})}),r.jsx(l,{"aria-label":"user",children:r.jsx(d,{name:"person",fontSize:20})}),r.jsx(C,{variant:"contained",size:"small",children:"Action"})]})},n={render:()=>r.jsx(D,{position:"static",children:r.jsxs(o,{children:[r.jsx(e,{variant:"h6",sx:{flex:1},children:"App Bar + Toolbar"}),r.jsx(C,{color:"inherit",size:"small",children:"Login"})]})})},i={render:()=>r.jsx(W,{component:"header",sx:{border:"1px solid",borderColor:"divider"},children:r.jsx(o,{variant:"dense",children:r.jsx(e,{variant:"body2",children:"Header Toolbar (wrapped by Box)"})})})},p={render:()=>r.jsx(o,{sx:{bgcolor:"background.paper",border:"1px dashed",borderColor:"divider",borderRadius:1},children:r.jsx(e,{variant:"body2",children:"Styled with sx"})})};var c,m,h;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(h=(m=a.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var x,b,u;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 12
  }}>
      <Toolbar>
        <Typography variant="body2">Regular Toolbar</Typography>
      </Toolbar>
      <Toolbar variant="dense">
        <Typography variant="body2">Dense Toolbar</Typography>
      </Toolbar>
    </div>
}`,...(u=(b=t.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var y,g,T;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Toolbar sx={{
    display: 'flex',
    gap: 8
  }}>
      <Typography sx={{
      flex: 1
    }} variant="h6">Title</Typography>
      <IconButton aria-label="search">
        <Icon name="search" fontSize={20} />
      </IconButton>
      <IconButton aria-label="user">
        <Icon name="person" fontSize={20} />
      </IconButton>
      <Button variant="contained" size="small">Action</Button>
    </Toolbar>
}`,...(T=(g=s.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var B,v,f;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Bar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{
        flex: 1
      }}>App Bar + Toolbar</Typography>
        <Button color="inherit" size="small">Login</Button>
      </Toolbar>
    </Bar>
}`,...(f=(v=n.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var j,I,S;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Box component="header" sx={{
    border: '1px solid',
    borderColor: 'divider'
  }}>
      <Toolbar variant="dense">
        <Typography variant="body2">Header Toolbar (wrapped by Box)</Typography>
      </Toolbar>
    </Box>
}`,...(S=(I=i.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var w,z,A;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Toolbar sx={{
    bgcolor: 'background.paper',
    border: '1px dashed',
    borderColor: 'divider',
    borderRadius: 1
  }}>
      <Typography variant="body2">Styled with sx</Typography>
    </Toolbar>
}`,...(A=(z=p.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};const pr=["Playground","DenseVsRegular","WithActions","InBar","WrappedInHeader","WithCustomSx"];export{t as DenseVsRegular,n as InBar,a as Playground,s as WithActions,p as WithCustomSx,i as WrappedInHeader,pr as __namedExportsOrder,ir as default};
