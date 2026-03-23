import{j as r,L as O}from"./iframe-ByX3ETbE.js";import{I as u}from"./Icon-n_Q28tJ5.js";import{B as o}from"./Button-UIsVxBSN.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-3QyS7usF.js";import"./ButtonBase-DEWtkUEw.js";import"./TransitionGroupContext-Dq0pQY8t.js";import"./useForkRef-B3XxOOe_.js";import"./useEventCallback-B-LLEq4r.js";import"./CircularProgress-B1xp4XjP.js";const $={title:"Atoms/Forms & Inputs/Button",component:o,tags:["autodocs"],decorators:[e=>r.jsx("div",{style:{padding:16,minHeight:240},children:r.jsx(e,{})})],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{variant:{control:{type:"radio"},options:["contained","outlined","text"]},color:{control:{type:"select"},options:["primary","secondary","success","info","warning","error","inherit"]},size:{control:{type:"radio"},options:["small","medium","large"]},startIcon:{control:"text",description:"Icon token or a React element."},endIcon:{control:"text",description:"Icon token or a React element."},onClick:{action:"clicked"}},args:{variant:"contained",color:"primary",size:"medium",children:"Click me"}},t={},a={args:{color:"primary"},render:e=>r.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[r.jsx(o,{...e,variant:"contained",children:"Contained"}),r.jsx(o,{...e,variant:"outlined",children:"Outlined"}),r.jsx(o,{...e,variant:"text",children:"Text"})]})},s={args:{variant:"contained"},render:e=>{const N=["primary","secondary","success","info","warning","error"];return r.jsx("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:N.map(n=>r.jsx(o,{...e,color:n,children:n[0].toUpperCase()+n.slice(1)},n))})}},i={args:{color:"primary",variant:"contained"},render:e=>r.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap"},children:[r.jsx(o,{...e,size:"small",children:"Small"}),r.jsx(o,{...e,size:"medium",children:"Medium"}),r.jsx(o,{...e,size:"large",children:"Large"})]})},c={args:{variant:"contained",color:"secondary",startIcon:r.jsx(u,{name:"Power"}),endIcon:r.jsx(u,{name:"bolt"}),children:"Send"}},d={args:{variant:"text",color:"primary",children:"Go to neurons.me"},render:e=>r.jsx(o,{component:"a",href:"https://neurons.me",children:e.children})},l={args:{variant:"text",color:"primary",children:"Go to /docs"},render:e=>r.jsx(o,{component:O,to:"/docs",children:e.children})},p={args:{variant:"contained",color:"primary",disabled:!0,children:"Disabled"}},m={args:{variant:"contained",color:"primary",fullWidth:!0,children:"Full Width"}};var h,g,y;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var x,v,B;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    color: 'primary'
  },
  render: args => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap'
  }}>
      <Button {...args} variant="contained">Contained</Button>
      <Button {...args} variant="outlined">Outlined</Button>
      <Button {...args} variant="text">Text</Button>
    </div>
}`,...(B=(v=a.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var f,I,k;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'contained'
  },
  render: args => {
    const colors: Array<'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error'> = ['primary', 'secondary', 'success', 'info', 'warning', 'error'];
    return <div style={{
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }}>
        {colors.map(c => <Button key={c} {...args} color={c}>
            {c[0].toUpperCase() + c.slice(1)}
          </Button>)}
      </div>;
  }
}`,...(k=(I=s.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var j,S,w;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    variant: 'contained'
  },
  render: args => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <Button {...args} size="small">Small</Button>
      <Button {...args} size="medium">Medium</Button>
      <Button {...args} size="large">Large</Button>
    </div>
}`,...(w=(S=i.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var L,b,W;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    color: 'secondary',
    startIcon: <Icon name="Power" />,
    endIcon: <Icon name="bolt" />,
    children: 'Send'
  }
}`,...(W=(b=c.parameters)==null?void 0:b.docs)==null?void 0:W.source}}};var R,z,C;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    color: 'primary',
    children: 'Go to neurons.me'
  },
  render: args => <Button component="a" href="https://neurons.me">
      {args.children}
    </Button>
}`,...(C=(z=d.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var P,T,G;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    color: 'primary',
    children: 'Go to /docs'
  },
  render: args => <Button component={Link} to="/docs">
      {args.children}
    </Button>
}`,...(G=(T=l.parameters)==null?void 0:T.docs)==null?void 0:G.source}}};var A,F,U;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    color: 'primary',
    disabled: true,
    children: 'Disabled'
  }
}`,...(U=(F=p.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var D,V,M;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    color: 'primary',
    fullWidth: true,
    children: 'Full Width'
  }
}`,...(M=(V=m.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};const rr=["Playground","Variants","Colors","Sizes","WithIcons","PolymorphicAnchor","PolymorphicRouterLink","Disabled","FullWidth"];export{s as Colors,p as Disabled,m as FullWidth,t as Playground,d as PolymorphicAnchor,l as PolymorphicRouterLink,i as Sizes,a as Variants,c as WithIcons,rr as __namedExportsOrder,$ as default};
