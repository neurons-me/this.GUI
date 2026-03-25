import{j as n,a as r,L as h,T as y}from"./iframe-CSPXPvkq.js";import{B as t}from"./Button-BNlX60Ti.js";import{S as o}from"./Stack-D17fNlB_.js";import{I as i}from"./Icon-BIK4291a.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-MPdKPbYv.js";import"./ButtonBase-BdWP8PMp.js";import"./TransitionGroupContext-9pMhmw2R.js";import"./useForkRef-DeapipiR.js";import"./useEventCallback-qbZ4_BE0.js";import"./CircularProgress-36vm5aKe.js";import"./getThemeProps-CdfxErkN.js";const b={title:"Atoms/Buttons",component:t,tags:["autodocs"],decorators:[u=>n.jsx(y,{children:n.jsx("div",{style:{padding:16,minHeight:240,width:"100%"},children:n.jsx(u,{})})})],parameters:{docs:{description:{component:`
The **Button** primitive is a thin wrapper around MUI's \`MuiButton\` that preserves **polymorphism** and adds **declarative icons** (string tokens like 
\`mui:Send\` or \`lucide:bolt\`). It integrates with **This.GUI** theming and respects your token-built palette.

---
## Features
- Variants: \`contained\`, \`outlined\`, \`text\`.
- Colors: \`primary\`, \`secondary\`, \`success\`, \`info\`, \`warning\`, \`error\`, \`inherit\`.
- Sizes: \`small\`, \`medium\`, \`large\`.
- **Icons** via tokens (\`startIcon\` / \`endIcon\`) or React nodes.
- **Polymorphic**: \`component\` can be \`'a'\` or a Link (e.g. the This.GUI wrapper \`Link\`) for routing.
- Respects your theme from \`Theme\` (no need to wrap with \`ThemeProvider\`).

---
## Key Props
- \`startIcon?: string | ReactNode\` — accepts a name from the **icon registry** (\`mui:*\` / \`lucide:*\`) or a React element.
- \`endIcon?: string | ReactNode\`.
- \`component?: ElementType | string\` — for polymorphism (\`'a'\`, RouterLink, etc.).
- \`href?: string\` — when \`component='a'\`.
- \`to?: string\` — when \`component={Link}\`.

> Note: \`to\` and \`href\` are not exposed as Storybook controls because they only apply in specific modes; they are shown in dedicated stories.

---
## Basic usage
~~~jsx
import { Button } from '@/gui/primitives';

<Button variant="contained" color="primary">Save</Button>
<Button variant="outlined" color="secondary">Cancel</Button>
<Button variant="text">Learn more</Button>
~~~

## With declarative icons
~~~jsx
<Button variant="contained" color="secondary" startIcon="mui:Send" endIcon="lucide:bolt">
  Send
</Button>
~~~

## As native anchor link
~~~jsx
<Button component="a" href="https://neurons.me" /* target="_blank" rel="noreferrer" */>
  Visit neurons.me
</Button>
~~~

## With RouterLink (This.GUI Link)
~~~jsx
import { Button, Link } from '@/gui/primitives';

<Button component={Link} to="/docs">Go to docs</Button>
~~~
## Declarative JSON / Config usage
~~~json
{
  "type": "Button",
  "props": {
    "variant": "text",
    "color": "primary",
    "component": "a",
    "href": "https://neurons.me",
    "target": "_blank",
    "rel": "noreferrer",
    "children": "Visit neurons.me"
  }
}
~~~

Another example with a RouterLink:
~~~json
{
  "type": "Button",
  "props": {
    "variant": "contained",
    "color": "secondary",
    "component": "Link",
    "to": "/docs",
    "startIcon": "mui:Send",
    "children": "Go to docs"
  }
}
~~~
        `}}},argTypes:{variant:{control:{type:"radio"},options:["contained","outlined","text"]},color:{control:{type:"select"},options:["primary","secondary","success","info","warning","error","inherit"]},size:{control:{type:"radio"},options:["small","medium","large"]},startIcon:{control:"text",description:"Icon token or a React element."},endIcon:{control:"text",description:"Icon token or a React element."},onClick:{action:"clicked"}},args:{variant:"contained",color:"primary",size:"medium",children:"Click me"}},e={name:"Playground"},a={name:"Variants Showcase",render:()=>n.jsxs(o,{spacing:4,sx:{width:"100%"},children:[n.jsx(r,{variant:"h6",children:"Variants"}),n.jsxs(o,{direction:"row",spacing:2,alignItems:"center",children:[n.jsx(t,{variant:"contained",color:"primary",children:"Contained"}),n.jsx(t,{variant:"outlined",color:"primary",children:"Outlined"}),n.jsx(t,{variant:"text",color:"primary",children:"Text"})]}),n.jsx(r,{variant:"h6",children:"Colors"}),n.jsxs(o,{direction:"row",spacing:2,alignItems:"center",sx:{flexWrap:"wrap"},children:[n.jsx(t,{variant:"contained",color:"primary",children:"Primary"}),n.jsx(t,{variant:"contained",color:"secondary",children:"Secondary"}),n.jsx(t,{variant:"contained",color:"success",children:"Success"}),n.jsx(t,{variant:"contained",color:"error",children:"Error"})]}),n.jsx(r,{variant:"h6",children:"Sizes"}),n.jsxs(o,{direction:"row",spacing:2,alignItems:"center",children:[n.jsx(t,{variant:"contained",color:"primary",size:"small",children:"Small"}),n.jsx(t,{variant:"contained",color:"primary",size:"medium",children:"Medium"}),n.jsx(t,{variant:"contained",color:"primary",size:"large",children:"Large"})]}),n.jsx(r,{variant:"h6",children:"With Icons"}),n.jsxs(o,{direction:"row",spacing:2,alignItems:"center",children:[n.jsx(t,{variant:"contained",color:"secondary",startIcon:n.jsx(i,{name:"Send"}),children:"Start Icon"}),n.jsx(t,{variant:"outlined",color:"secondary",endIcon:n.jsx(i,{name:"bolt"}),children:"End Icon"})]}),n.jsx(r,{variant:"h6",children:"Polymorphic Link"}),n.jsx(o,{direction:"row",spacing:2,alignItems:"center",children:n.jsx(t,{component:h,to:"/docs",color:"primary",children:"Router Link"})}),n.jsx(r,{variant:"h6",children:"Disabled State"}),n.jsx(o,{direction:"row",spacing:2,alignItems:"center",children:n.jsx(t,{variant:"contained",disabled:!0,children:"Disabled"})})]})};var c,s,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Playground'
}`,...(d=(s=e.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var l,p,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Variants Showcase',
  render: () => <Stack spacing={4} sx={{
    width: '100%'
  }}>
      <Typography variant="h6">Variants</Typography>
      <Stack direction="row" spacing={2} alignItems="center">
        <Button variant="contained" color="primary">Contained</Button>
        <Button variant="outlined" color="primary">Outlined</Button>
        <Button variant="text" color="primary">Text</Button>
      </Stack>
      <Typography variant="h6">Colors</Typography>
      <Stack direction="row" spacing={2} alignItems="center" sx={{
      flexWrap: 'wrap'
    }}>
        <Button variant="contained" color="primary">Primary</Button>
        <Button variant="contained" color="secondary">Secondary</Button>
        <Button variant="contained" color="success">Success</Button>
        <Button variant="contained" color="error">Error</Button>
      </Stack>
      <Typography variant="h6">Sizes</Typography>
      <Stack direction="row" spacing={2} alignItems="center">
        <Button variant="contained" color="primary" size="small">Small</Button>
        <Button variant="contained" color="primary" size="medium">Medium</Button>
        <Button variant="contained" color="primary" size="large">Large</Button>
      </Stack>
      <Typography variant="h6">With Icons</Typography>
      <Stack direction="row" spacing={2} alignItems="center">
        <Button variant="contained" color="secondary" startIcon={<Icon name="Send" />}>
          Start Icon
        </Button>
        <Button variant="outlined" color="secondary" endIcon={<Icon name="bolt" />}>
          End Icon
        </Button>
      </Stack>

      <Typography variant="h6">Polymorphic Link</Typography>
      <Stack direction="row" spacing={2} alignItems="center">
        <Button component={Link} to="/docs" color="primary">
          Router Link
        </Button>
      </Stack>

      <Typography variant="h6">Disabled State</Typography>
      <Stack direction="row" spacing={2} alignItems="center">
        <Button variant="contained" disabled>Disabled</Button>
      </Stack>
    </Stack>
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const R=["Playground","Variants"];export{e as Playground,a as Variants,R as __namedExportsOrder,b as default};
