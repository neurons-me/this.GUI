import{j as t,a as n,L as h,T as y}from"./iframe-B945G3MO.js";import{B as o}from"./Button-CKOdrTu7.js";import"./Chip-BraUMfbk.js";import"./Paper-Cc-h7jKx.js";import"./InspectorToggle-BxuSsdIV.js";import"./ListItemIcon-BzUqBMfL.js";import"./ListItemText-BJh5K7TE.js";import"./Drawer-DwqR1QDi.js";import{S as r}from"./Stack-B8kWwK-m.js";import"./Tooltip-DBphtguK.js";import{I as a}from"./Icon-B7ImVv8I.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-5CJ0bfWc.js";import"./ButtonBase-D-uLuZlV.js";import"./TransitionGroupContext-C7M7qqJI.js";import"./useForkRef-B1qixtFe.js";import"./CircularProgress-CblgA6-I.js";import"./createSvgIcon-DmKvINFx.js";import"./Paper-B44MHfVE.js";import"./renderer-_moSinZp.js";import"./runtimeContext-Cw7GHtwp.js";import"./Toolbar-CMdIY8Zj.js";import"./IconButton-D5mRMUCb.js";import"./IconButton-DSENFRag.js";import"./listItemIconClasses-DsWwoGm5.js";import"./ListContext-Ck__g24J.js";import"./listItemTextClasses-DhSbipbj.js";import"./useSlot-BDGGiRla.js";import"./resolveComponentProps-Cr13QVQ8.js";import"./dividerClasses-BqPsrmCt.js";import"./Grow-SjjAWBSH.js";import"./Modal-DT98mAxm.js";import"./useSlotProps-C5tgyCQW.js";import"./getThemeProps-BEaVCLc9.js";import"./useControlled-ojhLLIC7.js";const Y={title:"Atoms/Buttons",component:o,tags:["autodocs"],decorators:[u=>t.jsx(y,{children:t.jsx("div",{style:{padding:16,minHeight:240,width:"100%"},children:t.jsx(u,{})})})],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{variant:{control:{type:"radio"},options:["contained","outlined","text"]},color:{control:{type:"select"},options:["primary","secondary","success","info","warning","error","inherit"]},size:{control:{type:"radio"},options:["small","medium","large"]},startIcon:{control:"text",description:"Icon token or a React element."},endIcon:{control:"text",description:"Icon token or a React element."},onClick:{action:"clicked"}},args:{variant:"contained",color:"primary",size:"medium",children:"Click me"}},e={name:"Playground"},i={name:"Variants Showcase",render:()=>t.jsxs(r,{spacing:4,sx:{width:"100%"},children:[t.jsx(n,{variant:"h6",children:"Variants"}),t.jsxs(r,{direction:"row",spacing:2,alignItems:"center",children:[t.jsx(o,{variant:"contained",color:"primary",children:"Contained"}),t.jsx(o,{variant:"outlined",color:"primary",children:"Outlined"}),t.jsx(o,{variant:"text",color:"primary",children:"Text"})]}),t.jsx(n,{variant:"h6",children:"Colors"}),t.jsxs(r,{direction:"row",spacing:2,alignItems:"center",sx:{flexWrap:"wrap"},children:[t.jsx(o,{variant:"contained",color:"primary",children:"Primary"}),t.jsx(o,{variant:"contained",color:"secondary",children:"Secondary"}),t.jsx(o,{variant:"contained",color:"success",children:"Success"}),t.jsx(o,{variant:"contained",color:"error",children:"Error"})]}),t.jsx(n,{variant:"h6",children:"Sizes"}),t.jsxs(r,{direction:"row",spacing:2,alignItems:"center",children:[t.jsx(o,{variant:"contained",color:"primary",size:"small",children:"Small"}),t.jsx(o,{variant:"contained",color:"primary",size:"medium",children:"Medium"}),t.jsx(o,{variant:"contained",color:"primary",size:"large",children:"Large"})]}),t.jsx(n,{variant:"h6",children:"With Icons"}),t.jsxs(r,{direction:"row",spacing:2,alignItems:"center",children:[t.jsx(o,{variant:"contained",color:"secondary",startIcon:t.jsx(a,{name:"Send"}),children:"Start Icon"}),t.jsx(o,{variant:"outlined",color:"secondary",endIcon:t.jsx(a,{name:"bolt"}),children:"End Icon"})]}),t.jsx(n,{variant:"h6",children:"Polymorphic Link"}),t.jsx(r,{direction:"row",spacing:2,alignItems:"center",children:t.jsx(o,{component:h,to:"/docs",color:"primary",children:"Router Link"})}),t.jsx(n,{variant:"h6",children:"Disabled State"}),t.jsx(r,{direction:"row",spacing:2,alignItems:"center",children:t.jsx(o,{variant:"contained",disabled:!0,children:"Disabled"})})]})};var c,s,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Playground'
}`,...(d=(s=e.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var p,m,l;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(m=i.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const Z=["Playground","Variants"];export{e as Playground,i as Variants,Z as __namedExportsOrder,Y as default};
