import{j as e,a as r,B as D}from"./iframe-D9h36_NB.js";import{D as t}from"./Divider-xL8XtEUf.js";import{S as n}from"./Stack-Cqf_Vvj1.js";import"./preload-helper-Dp1pzeXC.js";import"./Divider-D_ifI4VP.js";import"./dividerClasses-Bn-DPjVC.js";import"./getThemeProps-sPR1FmCD.js";const B={title:"Atoms/Content/Divider",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"The Divider component is a thin wrapper over MUI's `MuiDivider`. It preserves all props and allows styling via the `sx` prop."}}},argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"],description:"The divider orientation."},variant:{control:{type:"radio"},options:["fullWidth","inset","middle"],description:"The variant to use."},flexItem:{control:{type:"boolean"},description:"If true, the divider is a flex item."}},args:{orientation:"horizontal",variant:"fullWidth",flexItem:!1}},i={render:d=>e.jsxs(n,{spacing:2,sx:{width:300},children:[e.jsx(r,{children:"Item One"}),e.jsx(t,{...d}),e.jsx(r,{children:"Item Two"}),e.jsx(t,{...d}),e.jsx(r,{children:"Item Three"})]}),parameters:{docs:{description:{story:"Demonstrates the Divider component with customizable props in a vertical stack."}}}},s={render:()=>e.jsxs(n,{direction:"row",spacing:2,alignItems:"center",sx:{height:100},children:[e.jsx(r,{children:"Left"}),e.jsx(t,{orientation:"vertical",flexItem:!0}),e.jsx(r,{children:"Right"})]}),parameters:{docs:{description:{story:"Shows a vertical divider between two items in a horizontal stack."}}}},o={render:()=>e.jsxs(n,{spacing:2,sx:{width:300},children:[e.jsx(r,{children:"First"}),e.jsx(t,{variant:"inset"}),e.jsx(r,{children:"Second"})]}),parameters:{docs:{description:{story:"Demonstrates the inset variant of the Divider between text items."}}}},a={render:()=>e.jsx(D,{sx:{width:300},children:e.jsx(t,{children:"Text Content"})}),parameters:{docs:{description:{story:"Shows a divider with text content in the middle."}}}};var c,p,m;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(p=i.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var h,l,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(x=(l=s.parameters)==null?void 0:l.docs)==null?void 0:x.source}}};var y,v,g;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(g=(v=o.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var T,w,u;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(u=(w=a.parameters)==null?void 0:w.docs)==null?void 0:u.source}}};const C=["Playground","VerticalDivider","InsetDivider","TextDivider"];export{o as InsetDivider,i as Playground,a as TextDivider,s as VerticalDivider,C as __namedExportsOrder,B as default};
