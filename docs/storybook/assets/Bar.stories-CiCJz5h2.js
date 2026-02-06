import{j as r}from"./iframe-pzPFiMX_.js";import{A as t,T as s}from"./Toolbar-C1Xuoe6m.js";import{T as i}from"./Typography-DFbRSFHa.js";import{B as e}from"./Button-hT6KsEdO.js";import{B as V}from"./Box-C7rrQtJx.js";import"./preload-helper-Dp1pzeXC.js";import"./Toolbar-D1SHp-RC.js";import"./clsx-B-dksMZM.js";import"./memoTheme-D6Kqj5GO.js";import"./styled-Ddslrojq.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./Paper-DYSFjcuz.js";import"./useTheme-BHTe8Tsy.js";import"./Typography-DdAUbr75.js";import"./Icon-63DgR07G.js";import"./Button-mBPI-F0q.js";import"./ButtonBase-CRYnpWlO.js";import"./TransitionGroupContext-BTo24QG4.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./useForkRef-XcfTKrEz.js";import"./useEventCallback-IANQAffG.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CDK3cCwJ.js";import"./Box-DiPDGrGZ.js";const ur={title:"Atoms/Containers/Bar",component:t,tags:["autodocs"],decorators:[a=>r.jsx("div",{style:{padding:0,minHeight:240},children:r.jsx(a,{})})],parameters:{docs:{description:{component:`
The **Bar** atom is a thin wrapper around MUI's \`Bar\` that keeps the original API while letting you style it with \`sx\` and use it declaratively through the **resolver**.

---
## Features
- Positions: \`fixed\`, \`absolute\`, \`sticky\`, \`static\`, \`relative\`.
- Colors: \`default\`, \`inherit\`, \`primary\`, \`secondary\`, \`transparent\`. Bar **only supports** these colors for the \`color\` prop.
- Note: \`success\`, \`info\`, \`warning\`, and \`error\` are **not supported** by the \`color\` prop. Use \`sx={{ bgcolor: '...' }}\` for these colors.
- Additional theme colors can be applied via \`sx={{ bgcolor: 'success.main' }}\` etc.
- Elevation & dark-mode override with \`enableColorOnDark\`.
- Accepts any children (e.g., \`<Toolbar/>\`, actions, brand, etc.).
- Fully themeable via **This.GUI** tokens and \`sx\`.
- Variant semantic presets: \`mui\` (default) behaves like MUI Bar, \`glass\` for floating blurred panel style.

---
## Key Props
- \`variant?: 'mui' | 'glass'\` — semantic preset.
- \`position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative'\`.
- \`color?: 'default' | 'inherit' | 'primary' | 'secondary' | 'transparent'\` — Bar **only supports** these values.
- \`success\`, \`info\`, \`warning\`, and \`error\` are **not supported** by \`color\`; use \`sx={{ bgcolor: '...' }}\` instead.
- \`elevation?: number\`.
- \`enableColorOnDark?: boolean\`.
- \`sx?: object\` — granular styling via the system.

---
## Basic usage (React)
~~~tsx
import { Bar, Toolbar, Typography, Button, Box } from '@/gui/atoms';

<Bar position="fixed" color="default" sx={{ borderBottom: '1px solid', borderColor: 'divider' }}>
  <Toolbar variant="dense">
    <Typography variant="h6" sx={{ flexGrow: 1 }}>My App</Typography>
    <Button variant="text">Login</Button>
  </Toolbar>
</Bar>
~~~

---
## Declarative JSON / Config usage
This GUI's **resolver** lets you describe an app bar via a config object. Example payload for the \`BarResolver\`:

~~~json
{
  "type": "Bar",
  "props": {
    "position": "fixed",
    "color": "default",
    "sx": { "borderBottom": "1px solid", "borderColor": "divider" },
    "children": {
      "type": "Toolbar",
      "props": {
        "variant": "dense",
        "children": [
          { "type": "Typography", "props": { "variant": "h6", "sx": { "flexGrow": 1 }, "children": "My App" } },
          { "type": "Button", "props": { "variant": "text", "children": "Login" } }
        ]
      }
    }
  }
}
~~~

> The resolver maps this spec to real React elements, preserving polymorphism and \`sx\` styling.
        `}}},argTypes:{variant:{control:{type:"select"},options:["mui","glass"],description:"Semantic preset. mui (default): behaves like MUI Bar. glass: floating blurred panel style."},position:{control:{type:"select"},options:["fixed","absolute","sticky","static","relative"]},color:{control:{type:"select"},options:["default","inherit","primary","secondary","transparent"]},elevation:{control:{type:"number"}},enableColorOnDark:{control:{type:"boolean"}},component:{table:{disable:!0}}},args:{variant:void 0,position:"fixed",elevation:0,enableColorOnDark:!1,sx:{borderBottom:"1px solid",borderColor:"divider"}}},l={render:a=>r.jsx(t,{...a,children:r.jsxs(s,{variant:"dense",children:[r.jsx(i,{variant:"h6",sx:{flexGrow:1},children:"Playground"}),r.jsx(e,{variant:"text",children:"Action"})]})})},p={render:a=>r.jsx("div",{style:{display:"grid",gap:16},children:["fixed","absolute","sticky","static","relative"].map(o=>r.jsx(t,{...a,position:o,children:r.jsxs(s,{variant:"dense",children:[r.jsxs(i,{variant:"subtitle1",sx:{flexGrow:1},children:["position = ",o]}),r.jsx(e,{variant:"text",children:"Action"})]})},o))})},c={parameters:{docs:{description:{story:"\nThe Bar component only supports the following values for the `color` prop: `default`, `inherit`, `primary`, `secondary`, and `transparent`.\nFor colors like `success`, `info`, `warning`, and `error`, use the `sx` prop with `bgcolor` instead, e.g. `sx={{ bgcolor: 'success.main' }}`.\n        "}}},args:{position:"static"},render:a=>r.jsx("div",{style:{display:"grid",gap:12},children:["default","inherit","primary","secondary","transparent"].map(o=>r.jsx(t,{...a,color:o,children:r.jsxs(s,{variant:"dense",children:[r.jsxs(i,{variant:"subtitle2",sx:{flexGrow:1},children:["color = ",o]}),r.jsx(e,{variant:"text",children:"Action"})]})},o))})},n={args:{position:"static"},render:a=>r.jsx("div",{style:{display:"grid",gap:12},children:["success.main","info.main","warning.main","error.main"].map(o=>r.jsx(t,{...a,sx:{bgcolor:o},children:r.jsxs(s,{variant:"dense",children:[r.jsx(i,{variant:"subtitle2",sx:{flexGrow:1},children:`sx.bgcolor = ${o}`}),r.jsx(e,{variant:"text",children:"Action"})]})},o))})},d={args:{position:"static",color:"default"},render:a=>r.jsx(t,{...a,sx:{px:2,borderBottom:"1px solid",borderColor:"divider"},children:r.jsxs(s,{variant:"dense",children:[r.jsx(i,{variant:"h6",sx:{flexGrow:1},children:"With Toolbar"}),r.jsxs(V,{sx:{display:"flex",gap:1},children:[r.jsx(e,{variant:"text",children:"Login"}),r.jsx(e,{variant:"contained",color:"primary",children:"Sign up"})]})]})})},x={args:{position:"static",color:"default"},render:a=>r.jsx("div",{style:{display:"grid",gap:12},children:[0,1,2,4,8].map(o=>r.jsx(t,{...a,elevation:o,children:r.jsxs(s,{variant:"dense",children:[r.jsxs(i,{variant:"subtitle2",sx:{flexGrow:1},children:["elevation = ",o]}),r.jsx(e,{variant:"text",children:"Action"})]})},o))})},u={args:{position:"static",color:"primary",enableColorOnDark:!0},render:a=>r.jsx(t,{...a,children:r.jsxs(s,{variant:"dense",children:[r.jsx(i,{variant:"subtitle2",sx:{flexGrow:1},children:"enableColorOnDark = true"}),r.jsx(e,{variant:"text",children:"Action"})]})})},m={args:{position:"static",color:"default",variant:void 0},render:a=>r.jsx("div",{style:{display:"grid",gap:12},children:["mui","glass"].map(o=>r.jsx(t,{...a,variant:o,children:r.jsxs(s,{variant:"dense",children:[r.jsxs(i,{variant:"subtitle2",sx:{flexGrow:1},children:["variant = ",o]}),r.jsx(e,{variant:"text",children:"Action"})]})},o))})};var g,y,h;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <Bar {...args}>
      <Toolbar variant="dense">
        <Typography variant="h6" sx={{
        flexGrow: 1
      }}>Playground</Typography>
        <Button variant="text">Action</Button>
      </Toolbar>
    </Bar>
}`,...(h=(y=l.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var v,b,f;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 16
  }}>
      {(['fixed', 'absolute', 'sticky', 'static', 'relative'] as const).map(pos => <Bar key={pos} {...args} position={pos}>
          <Toolbar variant="dense">
            <Typography variant="subtitle1" sx={{
          flexGrow: 1
        }}>
              position = {pos}
            </Typography>
            <Button variant="text">Action</Button>
          </Toolbar>
        </Bar>)}
    </div>
}`,...(f=(b=p.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var B,T,j;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
The Bar component only supports the following values for the \\\`color\\\` prop: \\\`default\\\`, \\\`inherit\\\`, \\\`primary\\\`, \\\`secondary\\\`, and \\\`transparent\\\`.
For colors like \\\`success\\\`, \\\`info\\\`, \\\`warning\\\`, and \\\`error\\\`, use the \\\`sx\\\` prop with \\\`bgcolor\\\` instead, e.g. \\\`sx={{ bgcolor: 'success.main' }}\\\`.
        \`
      }
    }
  },
  args: {
    position: 'static'
  },
  render: args => <div style={{
    display: 'grid',
    gap: 12
  }}>
      {(['default', 'inherit', 'primary', 'secondary', 'transparent'] as const).map(c => <Bar key={c} {...args} color={c}>
          <Toolbar variant="dense">
            <Typography variant="subtitle2" sx={{
          flexGrow: 1
        }}>color = {c}</Typography>
            <Button variant="text">Action</Button>
          </Toolbar>
        </Bar>)}
    </div>
}`,...(j=(T=c.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var w,k,C,A,G;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    position: 'static'
  },
  render: args => <div style={{
    display: 'grid',
    gap: 12
  }}>
      {(['success.main', 'info.main', 'warning.main', 'error.main'] as const).map(bgcolor => <Bar key={bgcolor} {...args} sx={{
      bgcolor
    }}>
          <Toolbar variant="dense">
            <Typography variant="subtitle2" sx={{
          flexGrow: 1
        }}>{\`sx.bgcolor = \${bgcolor}\`}</Typography>
            <Button variant="text">Action</Button>
          </Toolbar>
        </Bar>)}
    </div>
}`,...(C=(k=n.parameters)==null?void 0:k.docs)==null?void 0:C.source},description:{story:`The Bar component does not support 'success', 'info', 'warning', or 'error' as values for the color prop.
To use these colors, apply them via the sx prop with bgcolor instead.`,...(G=(A=n.parameters)==null?void 0:A.docs)==null?void 0:G.description}}};var S,O,D;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    position: 'static',
    color: 'default'
  },
  render: args => <Bar {...args} sx={{
    px: 2,
    borderBottom: '1px solid',
    borderColor: 'divider'
  }}>
      <Toolbar variant="dense">
        <Typography variant="h6" sx={{
        flexGrow: 1
      }}>With Toolbar</Typography>
        <Box sx={{
        display: 'flex',
        gap: 1
      }}>
          <Button variant="text">Login</Button>
          <Button variant="contained" color="primary">Sign up</Button>
        </Box>
      </Toolbar>
    </Bar>
}`,...(D=(O=d.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var P,E,I;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    position: 'static',
    color: 'default'
  },
  render: args => <div style={{
    display: 'grid',
    gap: 12
  }}>
      {[0, 1, 2, 4, 8].map(elev => <Bar key={elev} {...args} elevation={elev}>
          <Toolbar variant="dense">
            <Typography variant="subtitle2" sx={{
          flexGrow: 1
        }}>elevation = {elev}</Typography>
            <Button variant="text">Action</Button>
          </Toolbar>
        </Bar>)}
    </div>
}`,...(I=(E=x.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var U,W,M;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    position: 'static',
    color: 'primary',
    enableColorOnDark: true
  },
  render: args => <Bar {...args}>
      <Toolbar variant="dense">
        <Typography variant="subtitle2" sx={{
        flexGrow: 1
      }}>enableColorOnDark = true</Typography>
        <Button variant="text">Action</Button>
      </Toolbar>
    </Bar>
}`,...(M=(W=u.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var F,L,R;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    position: 'static',
    color: 'default',
    variant: undefined
  },
  render: args => <div style={{
    display: 'grid',
    gap: 12
  }}>
      {(['mui', 'glass'] as const).map(v => <Bar key={v} {...args} variant={v as any}>
          <Toolbar variant="dense">
            <Typography variant="subtitle2" sx={{
          flexGrow: 1
        }}>
              variant = {v}
            </Typography>
            <Button variant="text">Action</Button>
          </Toolbar>
        </Bar>)}
    </div>
}`,...(R=(L=m.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};const mr=["Playground","Positions","Colors","CustomColorsWithSx","WithToolbar","Elevation","EnableColorOnDark","Variants"];export{c as Colors,n as CustomColorsWithSx,x as Elevation,u as EnableColorOnDark,l as Playground,p as Positions,m as Variants,d as WithToolbar,mr as __namedExportsOrder,ur as default};
