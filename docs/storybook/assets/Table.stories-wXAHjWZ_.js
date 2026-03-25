import{j as e,B,a as c}from"./iframe-8EaQ1C0g.js";import{T as D,a as W,b as p,c as a,d as k}from"./TableRow-B4-WlojU.js";import"./Button-Ck1yJXlA.js";import"./Paper-qkABWcDk.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-DOcDJgdS.js";import"./Button-CqN9UM-9.js";import"./ButtonBase-DnuzHV0k.js";import"./TransitionGroupContext-BDq06VYZ.js";import"./useForkRef-B_8DPUN9.js";import"./CircularProgress-CF5CFykq.js";import"./Paper-Cnfm5CEA.js";const G={title:"Molecules/Table",component:D,tags:["autodocs"],decorators:[r=>e.jsx("div",{style:{padding:16,minHeight:260,maxWidth:920},children:e.jsx(r,{})})],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{size:{control:{type:"radio"},options:["small","medium"]},padding:{control:{type:"select"},options:["default","checkbox","none"]},stickyHeader:{control:{type:"boolean"}},sx:{control:"object"}},args:{size:"small",padding:"default",stickyHeader:!1,sx:{}}},s=r=>e.jsx(B,{sx:{border:"1px solid",borderColor:"divider",borderRadius:2,overflow:"hidden",bgcolor:"background.paper"},children:e.jsx(D,{...r,children:r.children??e.jsxs(e.Fragment,{children:[e.jsx(W,{children:e.jsxs(p,{sx:{background:"background.nav"},children:[e.jsx(a,{children:e.jsx(c,{fontWeight:700,children:"ID"})}),e.jsx(a,{children:e.jsx(c,{fontWeight:700,children:"Name"})}),e.jsx(a,{align:"right",children:e.jsx(c,{fontWeight:700,children:"Score"})})]})}),e.jsx(k,{children:[{id:1,name:"Alice",score:98},{id:2,name:"Bob",score:84},{id:3,name:"Charlie",score:91}].map(o=>e.jsxs(p,{hover:!0,children:[e.jsx(a,{children:o.id}),e.jsx(a,{children:o.name}),e.jsx(a,{align:"right",children:o.score})]},o.id))})]})})}),l={render:r=>e.jsx(s,{...r})},n={args:{size:"medium"},render:r=>e.jsx(s,{...r})},i={args:{stickyHeader:!0,sx:{minWidth:520}},render:r=>e.jsx(B,{sx:{maxHeight:180,overflow:"auto",border:"1px solid",borderColor:"divider",borderRadius:2},children:e.jsx(s,{...r})})},d={args:{padding:"none",size:"small"},render:r=>e.jsx(s,{...r})},t={args:{sx:{minWidth:640}},render:r=>e.jsx(s,{...r})};var m,b,h;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <DemoTable {...args} />
}`,...(h=(b=l.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var T,g,x;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  },
  render: args => <DemoTable {...args} />
}`,...(x=(g=n.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var u,y,j;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(j=(y=i.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var C,v,f;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    padding: 'none' as any,
    size: 'small'
  },
  render: args => <DemoTable {...args} />
}`,...(f=(v=d.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var R,H,S;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    sx: {
      minWidth: 640
    }
  },
  render: args => <DemoTable {...args} />
}`,...(S=(H=t.parameters)==null?void 0:H.docs)==null?void 0:S.source}}};const J=["Playground","MediumSize","StickyHeader","DensePaddingNone","WithSx"];export{d as DensePaddingNone,n as MediumSize,l as Playground,i as StickyHeader,t as WithSx,J as __namedExportsOrder,G as default};
