import{j as e,B,a as p}from"./iframe-D2eJnacu.js";import{a as D,b as W,c,d as a,e as k}from"./InspectorToggle-XfRHSRli.js";import"./Paper-Cy6GSVX1.js";import"./ListItemIcon-DBEAg4qU.js";import"./ListItemText-B0bnygt8.js";import"./Drawer-Dc6eHdxA.js";import"./Tooltip-s2l6t1LL.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-88yt6xcs.js";import"./Icon-CAKnGJGN.js";import"./Button-CHKGPak-.js";import"./ButtonBase-CUt-_WAR.js";import"./TransitionGroupContext-CJvSrqRb.js";import"./useForkRef-CJwN5O9W.js";import"./useEventCallback-CVieJ6Bg.js";import"./CircularProgress-gvGNL1sR.js";import"./renderer-B7mnUi2B.js";import"./runtimeContext-CI01_G2x.js";import"./Toolbar-DWLAj6h0.js";import"./IconButton-CQQWoaHV.js";import"./IconButton-Bq5ykkQl.js";import"./Paper-qyyHbYbt.js";import"./listItemIconClasses-UgzpQTE9.js";import"./ListContext-BW2Adx7C.js";import"./listItemTextClasses-CmkdSkph.js";import"./useSlot-EziydVcY.js";import"./resolveComponentProps-A5i4OP5P.js";import"./dividerClasses-DG4d1HjL.js";import"./Grow-CaHZ5gb0.js";import"./Modal-DEXC5q00.js";import"./useSlotProps-DAc4d2Zp.js";import"./useControlled-CM5M7PCu.js";const de={title:"Molecules/Table",component:D,tags:["autodocs"],decorators:[r=>e.jsx("div",{style:{padding:16,minHeight:260,maxWidth:920},children:e.jsx(r,{})})],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{size:{control:{type:"radio"},options:["small","medium"]},padding:{control:{type:"select"},options:["default","checkbox","none"]},stickyHeader:{control:{type:"boolean"}},sx:{control:"object"}},args:{size:"small",padding:"default",stickyHeader:!1,sx:{}}},o=r=>e.jsx(B,{sx:{border:"1px solid",borderColor:"divider",borderRadius:2,overflow:"hidden",bgcolor:"background.paper"},children:e.jsx(D,{...r,children:r.children??e.jsxs(e.Fragment,{children:[e.jsx(W,{children:e.jsxs(c,{sx:{background:"background.nav"},children:[e.jsx(a,{children:e.jsx(p,{fontWeight:700,children:"ID"})}),e.jsx(a,{children:e.jsx(p,{fontWeight:700,children:"Name"})}),e.jsx(a,{align:"right",children:e.jsx(p,{fontWeight:700,children:"Score"})})]})}),e.jsx(k,{children:[{id:1,name:"Alice",score:98},{id:2,name:"Bob",score:84},{id:3,name:"Charlie",score:91}].map(s=>e.jsxs(c,{hover:!0,children:[e.jsx(a,{children:s.id}),e.jsx(a,{children:s.name}),e.jsx(a,{align:"right",children:s.score})]},s.id))})]})})}),l={render:r=>e.jsx(o,{...r})},i={args:{size:"medium"},render:r=>e.jsx(o,{...r})},t={args:{stickyHeader:!0,sx:{minWidth:520}},render:r=>e.jsx(B,{sx:{maxHeight:180,overflow:"auto",border:"1px solid",borderColor:"divider",borderRadius:2},children:e.jsx(o,{...r})})},n={args:{padding:"none",size:"small"},render:r=>e.jsx(o,{...r})},d={args:{sx:{minWidth:640}},render:r=>e.jsx(o,{...r})};var m,b,h;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <DemoTable {...args} />
}`,...(h=(b=l.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var g,T,x;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  },
  render: args => <DemoTable {...args} />
}`,...(x=(T=i.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var u,y,j;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(j=(y=t.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var C,v,f;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    padding: 'none' as any,
    size: 'small'
  },
  render: args => <DemoTable {...args} />
}`,...(f=(v=n.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var R,H,S;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    sx: {
      minWidth: 640
    }
  },
  render: args => <DemoTable {...args} />
}`,...(S=(H=d.parameters)==null?void 0:H.docs)==null?void 0:S.source}}};const pe=["Playground","MediumSize","StickyHeader","DensePaddingNone","WithSx"];export{n as DensePaddingNone,i as MediumSize,l as Playground,t as StickyHeader,d as WithSx,pe as __namedExportsOrder,de as default};
