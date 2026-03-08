import{j as e}from"./iframe-B8RbS7uw.js";import{S as s}from"./Stack-C5yTeK_p.js";import{P as f}from"./Paper-B4BytIU3.js";import{L as D}from"./Link-Dl80TlRR.js";import"./preload-helper-Dp1pzeXC.js";import"./styled-Cw_y6cYg.js";import"./clsx-B-dksMZM.js";import"./getThemeProps-CmiYdh08.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Paper-CQFXOI4Y.js";import"./useTheme-BwQ1aHS1.js";import"./memoTheme-DOBzPGVq.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Typography-9CeYDXau.js";import"./isFocusVisible-B8k4qzLc.js";const q={title:"Atoms/Containers/Stack",component:s,tags:["autodocs"],decorators:[r=>e.jsx("div",{style:{padding:16,minHeight:240},children:e.jsx(r,{})})],parameters:{docs:{description:{component:`
The **Stack** atom is a thin wrapper around MUI's \`MuiStack\` that preserves **polymorphism** and forwards all layout props.
It integrates with **This.GUI** theming and supports **declarative specs** through the Stack resolver.

---
## Features
- Direction: \`row\`, \`column\`, and reverse variants
- Spacing/gap via \`spacing\`
- Optional \`divider\`
- Alignment: \`alignItems\`, \`justifyContent\`, \`flexWrap\`
- **Polymorphic** via \`component\` (e.g. 'div', 'section', 'a')
- Full **system props** passthrough via \`sx\`

---
## Basic usage
~~~jsx
<Stack direction="row" spacing={2}>
  <Item />
  <Item />
</Stack>
~~~

## Declarative JSON / Resolver
~~~json
{
  "type": "Stack",
  "props": {
    "direction": "row",
    "spacing": 2,
    "sx": { "alignItems": "center" },
    "children": [
      { "type": "Paper", "props": { "sx": { "p": 1 }, "children": "A" } },
      { "type": "Paper", "props": { "sx": { "p": 1 }, "children": "B" } }
    ]
  }
}
~~~

*Note:* We demonstrate polymorphism in dedicated stories rather than Controls to avoid type-narrowing issues with MUI's OverridableComponent.
        `}},controls:{exclude:["component"]}},argTypes:{direction:{control:{type:"radio"},options:["row","row-reverse","column","column-reverse"]},spacing:{control:{type:"range",min:0,max:8,step:.5}},useFlexGap:{control:"boolean"},sx:{control:"object"}},args:{direction:"row",spacing:1.5,useFlexGap:!0,sx:{},children:void 0}},t=({children:r})=>e.jsx(f,{variant:"outlined",sx:{p:1.5,borderRadius:1},children:r}),n={render:r=>e.jsxs(s,{...r,children:[e.jsx(t,{children:"A"}),e.jsx(t,{children:"B"}),e.jsx(t,{children:"C"})]})},o={args:{direction:"row",spacing:2},render:r=>e.jsxs(s,{...r,children:[e.jsx(t,{children:"A"}),e.jsx(t,{children:"B"}),e.jsx(t,{children:"C"})]})},a={args:{direction:"column",spacing:1.5},render:r=>e.jsxs(s,{...r,sx:{width:240},children:[e.jsx(t,{children:"A"}),e.jsx(t,{children:"B"}),e.jsx(t,{children:"C"})]})},i={render:r=>e.jsxs(s,{...r,direction:"row",spacing:2,divider:e.jsx("span",{style:{opacity:.5},children:"|"}),children:[e.jsx(t,{children:"A"}),e.jsx(t,{children:"B"}),e.jsx(t,{children:"C"})]})},c={render:r=>e.jsxs(s,{...r,component:"section",spacing:1.5,children:[e.jsx(t,{children:"Section A"}),e.jsx(t,{children:"Section B"})]})},p={render:r=>e.jsx(D,{to:"/docs",style:{textDecoration:"none"},children:e.jsx(s,{...r,spacing:1.5,children:e.jsx(t,{children:"Go to Docs"})})})};var m,d,l;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <Stack {...args}>
      <Item>A</Item>
      <Item>B</Item>
      <Item>C</Item>
    </Stack>
}`,...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var g,h,u;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    direction: 'row',
    spacing: 2
  },
  render: args => <Stack {...args}>
      <Item>A</Item>
      <Item>B</Item>
      <Item>C</Item>
    </Stack>
}`,...(u=(h=o.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var x,I,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    direction: 'column',
    spacing: 1.5
  },
  render: args => <Stack {...args} sx={{
    width: 240
  }}>
      <Item>A</Item>
      <Item>B</Item>
      <Item>C</Item>
    </Stack>
}`,...(S=(I=a.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var j,y,k;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <Stack {...args} direction="row" spacing={2} divider={<span style={{
    opacity: 0.5
  }}>|</span>}>
      <Item>A</Item>
      <Item>B</Item>
      <Item>C</Item>
    </Stack>
}`,...(k=(y=i.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var v,w,C;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <Stack {...args} component="section" spacing={1.5}>
      <Item>Section A</Item>
      <Item>Section B</Item>
    </Stack>
}`,...(C=(w=c.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var A,B,P;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <Link to="/docs" style={{
    textDecoration: 'none'
  }}>
      <Stack {...args} spacing={1.5}>
        <Item>Go to Docs</Item>
      </Stack>
    </Link>
}`,...(P=(B=p.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};const z=["Playground","RowSpacing","ColumnSpacing","WithDivider","PolymorphicSection","PolymorphicRouterLink"];export{a as ColumnSpacing,n as Playground,p as PolymorphicRouterLink,c as PolymorphicSection,o as RowSpacing,i as WithDivider,z as __namedExportsOrder,q as default};
