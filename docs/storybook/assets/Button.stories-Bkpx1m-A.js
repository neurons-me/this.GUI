import{j as t,a as r,L as h,T as y}from"./iframe-AZWHUjJ8.js";import{B as n}from"./Button-uTOZCza3.js";import"./Toolbar-BSvLwMcQ.js";import"./ListItemIcon-D0PToHmB.js";import"./ListItemText-BXA55UDd.js";import"./Drawer-e1dj-DAL.js";import{S as o}from"./Stack-vReHNowo.js";import"./Tooltip-BoFE-j7F.js";import{I as i}from"./Icon-FCByiR2v.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Bqrqa9nG.js";import"./ButtonBase-CMUhGetK.js";import"./TransitionGroupContext-L3XM6ARG.js";import"./useForkRef-BwxLbw6V.js";import"./CircularProgress-C8t4-L2z.js";import"./Toolbar-CufKEqsg.js";import"./listItemIconClasses-Bkwn0ot7.js";import"./ListContext-DVr4rWCd.js";import"./listItemTextClasses-CDjfeEGl.js";import"./useSlot-BWVERl7C.js";import"./Grow-0zMj_HpA.js";import"./Modal-Dfp-k0CT.js";import"./Paper-WNsmHt7k.js";import"./getThemeProps-DicCSZg3.js";import"./useControlled-mDa5gGP0.js";const U={title:"Atoms/Buttons",component:n,tags:["autodocs"],decorators:[u=>t.jsx(y,{children:t.jsx("div",{style:{padding:16,minHeight:240,width:"100%"},children:t.jsx(u,{})})})],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{variant:{control:{type:"radio"},options:["contained","outlined","text"]},color:{control:{type:"select"},options:["primary","secondary","success","info","warning","error","inherit"]},size:{control:{type:"radio"},options:["small","medium","large"]},startIcon:{control:"text",description:"Icon token or a React element."},endIcon:{control:"text",description:"Icon token or a React element."},onClick:{action:"clicked"}},args:{variant:"contained",color:"primary",size:"medium",children:"Click me"}},e={name:"Playground"},a={name:"Variants Showcase",render:()=>t.jsxs(o,{spacing:4,sx:{width:"100%"},children:[t.jsx(r,{variant:"h6",children:"Variants"}),t.jsxs(o,{direction:"row",spacing:2,alignItems:"center",children:[t.jsx(n,{variant:"contained",color:"primary",children:"Contained"}),t.jsx(n,{variant:"outlined",color:"primary",children:"Outlined"}),t.jsx(n,{variant:"text",color:"primary",children:"Text"})]}),t.jsx(r,{variant:"h6",children:"Colors"}),t.jsxs(o,{direction:"row",spacing:2,alignItems:"center",sx:{flexWrap:"wrap"},children:[t.jsx(n,{variant:"contained",color:"primary",children:"Primary"}),t.jsx(n,{variant:"contained",color:"secondary",children:"Secondary"}),t.jsx(n,{variant:"contained",color:"success",children:"Success"}),t.jsx(n,{variant:"contained",color:"error",children:"Error"})]}),t.jsx(r,{variant:"h6",children:"Sizes"}),t.jsxs(o,{direction:"row",spacing:2,alignItems:"center",children:[t.jsx(n,{variant:"contained",color:"primary",size:"small",children:"Small"}),t.jsx(n,{variant:"contained",color:"primary",size:"medium",children:"Medium"}),t.jsx(n,{variant:"contained",color:"primary",size:"large",children:"Large"})]}),t.jsx(r,{variant:"h6",children:"With Icons"}),t.jsxs(o,{direction:"row",spacing:2,alignItems:"center",children:[t.jsx(n,{variant:"contained",color:"secondary",startIcon:t.jsx(i,{name:"Send"}),children:"Start Icon"}),t.jsx(n,{variant:"outlined",color:"secondary",endIcon:t.jsx(i,{name:"bolt"}),children:"End Icon"})]}),t.jsx(r,{variant:"h6",children:"Polymorphic Link"}),t.jsx(o,{direction:"row",spacing:2,alignItems:"center",children:t.jsx(n,{component:h,to:"/docs",color:"primary",children:"Router Link"})}),t.jsx(r,{variant:"h6",children:"Disabled State"}),t.jsx(o,{direction:"row",spacing:2,alignItems:"center",children:t.jsx(n,{variant:"contained",disabled:!0,children:"Disabled"})})]})};var c,s,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const _=["Playground","Variants"];export{e as Playground,a as Variants,_ as __namedExportsOrder,U as default};
