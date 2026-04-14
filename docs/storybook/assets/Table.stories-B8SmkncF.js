import{j as e,B,a as p}from"./iframe-DTkfRnJf.js";import{T as D}from"./Table-1H4905xf.js";import{a as W,b as c,c as a,d as k}from"./InspectorToggle-DekUrDWo.js";import"./ListItemIcon-C5SEVZ-r.js";import"./ListItemText-DGm7Bslj.js";import"./Drawer-7iJ8tsVN.js";import"./Tooltip-u6KQGzAX.js";import"./preload-helper-Dp1pzeXC.js";import"./Toolbar-D1lLG2L5.js";import"./Button-BKvYYcvp.js";import"./Icon-BM-Jwf27.js";import"./Button-nBT_Xo1p.js";import"./ButtonBase-WoTwDifL.js";import"./TransitionGroupContext-BWT1wUhm.js";import"./useForkRef-Cru_ePRK.js";import"./CircularProgress-DdkfkwCD.js";import"./IconButton-lZB8Z_vE.js";import"./IconButton-CE-WD0KS.js";import"./selectionStore-Coy7dh9o.js";import"./listItemIconClasses-DJfd2CmR.js";import"./ListContext-B5Em9Eft.js";import"./listItemTextClasses-C804xoiG.js";import"./useSlot-BNQnsQI2.js";import"./Grow-D3KHJdX1.js";import"./Modal-CK9c8Gp7.js";import"./Paper-CyGjh2vj.js";import"./useControlled-CK-Pi9mt.js";const oe={title:"Molecules/Table",component:D,tags:["autodocs"],decorators:[r=>e.jsx("div",{style:{padding:16,minHeight:260,maxWidth:920},children:e.jsx(r,{})})],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{size:{control:{type:"radio"},options:["small","medium"]},padding:{control:{type:"select"},options:["default","checkbox","none"]},stickyHeader:{control:{type:"boolean"}},sx:{control:"object"}},args:{size:"small",padding:"default",stickyHeader:!1,sx:{}}},s=r=>e.jsx(B,{sx:{border:"1px solid",borderColor:"divider",borderRadius:2,overflow:"hidden",bgcolor:"background.paper"},children:e.jsx(D,{...r,children:r.children??e.jsxs(e.Fragment,{children:[e.jsx(W,{children:e.jsxs(c,{sx:{background:"background.nav"},children:[e.jsx(a,{children:e.jsx(p,{fontWeight:700,children:"ID"})}),e.jsx(a,{children:e.jsx(p,{fontWeight:700,children:"Name"})}),e.jsx(a,{align:"right",children:e.jsx(p,{fontWeight:700,children:"Score"})})]})}),e.jsx(k,{children:[{id:1,name:"Alice",score:98},{id:2,name:"Bob",score:84},{id:3,name:"Charlie",score:91}].map(o=>e.jsxs(c,{hover:!0,children:[e.jsx(a,{children:o.id}),e.jsx(a,{children:o.name}),e.jsx(a,{align:"right",children:o.score})]},o.id))})]})})}),l={render:r=>e.jsx(s,{...r})},i={args:{size:"medium"},render:r=>e.jsx(s,{...r})},n={args:{stickyHeader:!0,sx:{minWidth:520}},render:r=>e.jsx(B,{sx:{maxHeight:180,overflow:"auto",border:"1px solid",borderColor:"divider",borderRadius:2},children:e.jsx(s,{...r})})},t={args:{padding:"none",size:"small"},render:r=>e.jsx(s,{...r})},d={args:{sx:{minWidth:640}},render:r=>e.jsx(s,{...r})};var m,b,h;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <DemoTable {...args} />
}`,...(h=(b=l.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var T,g,x;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  },
  render: args => <DemoTable {...args} />
}`,...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var u,y,j;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(S=(H=d.parameters)==null?void 0:H.docs)==null?void 0:S.source}}};const le=["Playground","MediumSize","StickyHeader","DensePaddingNone","WithSx"];export{t as DensePaddingNone,i as MediumSize,l as Playground,n as StickyHeader,d as WithSx,le as __namedExportsOrder,oe as default};
