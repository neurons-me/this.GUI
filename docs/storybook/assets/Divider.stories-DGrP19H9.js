import{j as e}from"./iframe-B8RbS7uw.js";import{D as t}from"./Divider-CR2yFRbe.js";import{S as a}from"./Stack-C5yTeK_p.js";import{T as r}from"./Typography-VWwRmWUn.js";import{B as D}from"./Box-Bx62dzkA.js";import"./preload-helper-Dp1pzeXC.js";import"./Divider-CBARF8r5.js";import"./clsx-B-dksMZM.js";import"./memoTheme-DOBzPGVq.js";import"./styled-Cw_y6cYg.js";import"./dividerClasses-yCLEuapk.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./getThemeProps-CmiYdh08.js";import"./Typography-9CeYDXau.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-D8YWJpHP.js";const V={title:"Atoms/Content/Divider",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"The Divider component is a thin wrapper over MUI's `MuiDivider`. It preserves all props and allows styling via the `sx` prop."}}},argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"],description:"The divider orientation."},variant:{control:{type:"radio"},options:["fullWidth","inset","middle"],description:"The variant to use."},flexItem:{control:{type:"boolean"},description:"If true, the divider is a flex item."}},args:{orientation:"horizontal",variant:"fullWidth",flexItem:!1}},i={render:p=>e.jsxs(a,{spacing:2,sx:{width:300},children:[e.jsx(r,{children:"Item One"}),e.jsx(t,{...p}),e.jsx(r,{children:"Item Two"}),e.jsx(t,{...p}),e.jsx(r,{children:"Item Three"})]}),parameters:{docs:{description:{story:"Demonstrates the Divider component with customizable props in a vertical stack."}}}},o={render:()=>e.jsxs(a,{direction:"row",spacing:2,alignItems:"center",sx:{height:100},children:[e.jsx(r,{children:"Left"}),e.jsx(t,{orientation:"vertical",flexItem:!0}),e.jsx(r,{children:"Right"})]}),parameters:{docs:{description:{story:"Shows a vertical divider between two items in a horizontal stack."}}}},s={render:()=>e.jsxs(a,{spacing:2,sx:{width:300},children:[e.jsx(r,{children:"First"}),e.jsx(t,{variant:"inset"}),e.jsx(r,{children:"Second"})]}),parameters:{docs:{description:{story:"Demonstrates the inset variant of the Divider between text items."}}}},n={render:()=>e.jsx(D,{sx:{width:300},children:e.jsx(t,{children:"Text Content"})}),parameters:{docs:{description:{story:"Shows a divider with text content in the middle."}}}};var d,c,m;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Stack spacing={2} sx={{
    width: 300
  }}>
      <Typography>Item One</Typography>
      <Divider {...args} />
      <Typography>Item Two</Typography>
      <Divider {...args} />
      <Typography>Item Three</Typography>
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the Divider component with customizable props in a vertical stack.'
      }
    }
  }
}`,...(m=(c=i.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var h,l,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={2} alignItems="center" sx={{
    height: 100
  }}>
      <Typography>Left</Typography>
      <Divider orientation="vertical" flexItem />
      <Typography>Right</Typography>
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: 'Shows a vertical divider between two items in a horizontal stack.'
      }
    }
  }
}`,...(x=(l=o.parameters)==null?void 0:l.docs)==null?void 0:x.source}}};var y,v,g;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Stack spacing={2} sx={{
    width: 300
  }}>
      <Typography>First</Typography>
      <Divider variant="inset" />
      <Typography>Second</Typography>
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the inset variant of the Divider between text items.'
      }
    }
  }
}`,...(g=(v=s.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var T,w,u;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: 300
  }}>
      <Divider>Text Content</Divider>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Shows a divider with text content in the middle.'
      }
    }
  }
}`,...(u=(w=n.parameters)==null?void 0:w.docs)==null?void 0:u.source}}};const W=["Playground","VerticalDivider","InsetDivider","TextDivider"];export{s as InsetDivider,i as Playground,n as TextDivider,o as VerticalDivider,W as __namedExportsOrder,V as default};
