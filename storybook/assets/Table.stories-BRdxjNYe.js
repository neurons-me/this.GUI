import{j as e,B,a as p}from"./iframe-C_b0i3u8.js";import{a as D,b as W,c,d as a,e as k}from"./InspectorToggle-DHMJbXJf.js";import"./Button-mr_aWkNz.js";import"./Chip-BnLuWVgV.js";import"./Paper-p9eezbgu.js";import"./ListItemIcon-DjjSIRtc.js";import"./ListItemText-npHmLwIa.js";import"./Drawer-DUsYWcFM.js";import"./preload-helper-Dp1pzeXC.js";import"./CircularProgress-DExCAnw9.js";import"./renderer-q29RPfuI.js";import"./Toolbar-C_-YGC8g.js";import"./IconButton-BDpt7_X6.js";import"./IconButton-D_PHND5e.js";import"./ButtonBase-CBZ6tj8F.js";import"./TransitionGroupContext-DA-WNYvH.js";import"./useForkRef-qTVDMFQr.js";import"./Icon-Dg0Fnz52.js";import"./Button-DaKRkwMu.js";import"./createSvgIcon-BRYETk95.js";import"./Paper-Boii5j1w.js";import"./listItemIconClasses-Cc2CuJ3o.js";import"./ListContext-CVvYdQEp.js";import"./listItemTextClasses-Cde-U1LC.js";import"./useSlot-G4ByF3pc.js";import"./resolveComponentProps-Drajm3zd.js";import"./dividerClasses-UjyL7AFI.js";import"./mergeSlotProps-DYU3Hg2s.js";import"./Portal-4Utnz7R5.js";import"./Modal-CH6Tu7Dy.js";import"./ownerDocument-DW-IO8s5.js";const te={title:"Molecules/Table",component:D,tags:["autodocs"],decorators:[r=>e.jsx("div",{style:{padding:16,minHeight:260,maxWidth:920},children:e.jsx(r,{})})],parameters:{docs:{description:{component:`
The **Table** atom is a thin wrapper around MUI's \`Table\`.  
It preserves MUI props and typing (faithful to the original), and fits naturally into This.GUI's declarative/resolver pattern.

---
## Features
- Fully preserves MUI Table API and typing.
- Supports \`sx\` styling via the system.
- Works with other Table atoms: \`TableHead\`, \`TableBody\`, \`TableRow\`, \`TableCell\`.
- Can be described declaratively via the **TableResolver**.

---
## Basic usage (React)
~~~tsx
import { Table, TableHead, TableBody, TableRow, TableCell } from '@/gui/components/atoms';

<Table size="small">
  <TableHead>
    <TableRow>
      <TableCell>ID</TableCell>
      <TableCell>Name</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>1</TableCell>
      <TableCell>Alice</TableCell>
    </TableRow>
  </TableBody>
</Table>
~~~

---
## Declarative JSON / Resolver
~~~json
{
  "type": "Table",
  "props": {
    "size": "small",
    "sx": { "minWidth": 420 },
    "children": [
      { "type": "TableHead", "props": { "children": { "type": "TableRow", "props": { "children": [
        { "type": "TableCell", "props": { "children": "ID" } },
        { "type": "TableCell", "props": { "children": "Name" } }
      ]}}}},
      { "type": "TableBody", "props": { "children": { "type": "TableRow", "props": { "children": [
        { "type": "TableCell", "props": { "children": 1 } },
        { "type": "TableCell", "props": { "children": "Alice" } }
      ]}}}}
    ]
  }
}
~~~
        `}}},argTypes:{size:{control:{type:"radio"},options:["small","medium"]},padding:{control:{type:"select"},options:["default","checkbox","none"]},stickyHeader:{control:{type:"boolean"}},sx:{control:"object"}},args:{size:"small",padding:"default",stickyHeader:!1,sx:{}}},o=r=>e.jsx(B,{sx:{border:"1px solid",borderColor:"divider",borderRadius:2,overflow:"hidden",bgcolor:"background.paper"},children:e.jsx(D,{...r,children:r.children??e.jsxs(e.Fragment,{children:[e.jsx(W,{children:e.jsxs(c,{sx:{background:"background.nav"},children:[e.jsx(a,{children:e.jsx(p,{fontWeight:700,children:"ID"})}),e.jsx(a,{children:e.jsx(p,{fontWeight:700,children:"Name"})}),e.jsx(a,{align:"right",children:e.jsx(p,{fontWeight:700,children:"Score"})})]})}),e.jsx(k,{children:[{id:1,name:"Alice",score:98},{id:2,name:"Bob",score:84},{id:3,name:"Charlie",score:91}].map(s=>e.jsxs(c,{hover:!0,children:[e.jsx(a,{children:s.id}),e.jsx(a,{children:s.name}),e.jsx(a,{align:"right",children:s.score})]},s.id))})]})})}),l={render:r=>e.jsx(o,{...r})},i={args:{size:"medium"},render:r=>e.jsx(o,{...r})},n={args:{stickyHeader:!0,sx:{minWidth:520}},render:r=>e.jsx(B,{sx:{maxHeight:180,overflow:"auto",border:"1px solid",borderColor:"divider",borderRadius:2},children:e.jsx(o,{...r})})},t={args:{padding:"none",size:"small"},render:r=>e.jsx(o,{...r})},d={args:{sx:{minWidth:640}},render:r=>e.jsx(o,{...r})};var m,b,h;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <DemoTable {...args} />
}`,...(h=(b=l.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var g,T,x;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  },
  render: args => <DemoTable {...args} />
}`,...(x=(T=i.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var u,y,j;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    stickyHeader: true,
    sx: {
      minWidth: 520
    }
  },
  render: args => <Box sx={{
    maxHeight: 180,
    overflow: 'auto',
    border: '1px solid',
    borderColor: 'divider',
    borderRadius: 2
  }}>
      <DemoTable {...args} />
    </Box>
}`,...(j=(y=n.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var C,v,f;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    padding: 'none' as any,
    size: 'small'
  },
  render: args => <DemoTable {...args} />
}`,...(f=(v=t.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var R,H,S;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    sx: {
      minWidth: 640
    }
  },
  render: args => <DemoTable {...args} />
}`,...(S=(H=d.parameters)==null?void 0:H.docs)==null?void 0:S.source}}};const de=["Playground","MediumSize","StickyHeader","DensePaddingNone","WithSx"];export{t as DensePaddingNone,i as MediumSize,l as Playground,n as StickyHeader,d as WithSx,de as __namedExportsOrder,te as default};
