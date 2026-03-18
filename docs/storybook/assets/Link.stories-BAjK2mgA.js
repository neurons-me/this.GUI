import{j as r}from"./iframe-C1GRP0hj.js";import{L as e}from"./Link-BhgdegEP.js";import{B as U}from"./Button-DKVTYz9F.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./useTheme-CCB-ESoo.js";import"./styled-8fWbaqUV.js";import"./memoTheme-q_hzTFOc.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Typography-CeTjeXIp.js";import"./isFocusVisible-B8k4qzLc.js";import"./Icon-K6w2oQgw.js";import"./Button-BI6tJqAB.js";import"./ButtonBase-rOZxXEMH.js";import"./TransitionGroupContext-qNdRr-hk.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./useForkRef-BhU-CSAb.js";import"./useEventCallback-Bs6yfZ5k.js";import"./CircularProgress-B-nFzJrp.js";const X={title:"Atoms/Navigation/Link",component:e,tags:["autodocs"],decorators:[o=>r.jsx("div",{style:{padding:16,minHeight:240},children:r.jsx(o,{})})],parameters:{docs:{description:{component:`
The **Link** primitive is a thin wrapper over MUI's \`MuiLink\` that supports **both** external links (\`href\`) and internal routing (\`to\`) using **react-router-dom**. It integrates with **This.GUI** theming via the \`Theme\` provider.

---
## Features
- External links with \`href\` (renders an anchor).
- Internal navigation with \`to\` (renders a RouterLink under the hood).
- Works seamlessly as a child or as a render target for other primitives (e.g. \`<Button component={Link} to="/docs"/>\`).
- Inherits typography and color from the theme tokens.

---
## Key Props
- \`href?: string\` — external URL.
- \`to?: string | LocationDescriptor\` — internal route (react-router-dom).
- \`underline?: 'none' | 'hover' | 'always'\` — underline behavior.
- \`color?: 'primary' | 'secondary' | 'inherit' | 'textPrimary' | 'textSecondary' | 'error' | 'info' | 'success' | 'warning'\`.

> Note: \`to\` and \`href\` are demonstrated in dedicated stories rather than Storybook controls.

---
## Basic Usage
~~~jsx
import { Link } from '@/gui/primitives';

<Link href="https://neurons.me" target="_blank" rel="noreferrer">Visit neurons.me</Link>
~~~

## Internal Routing
~~~jsx
import { Link } from '@/gui/primitives';

<Link to="/docs">Go to docs</Link>
~~~

## As render target for Button
~~~jsx
import { Button, Link } from '@/gui/primitives';

<Button component={Link} to="/docs">Docs</Button>
~~~

## Declarative JSON / Config usage
~~~json
{
  "type": "Link",
  "props": {
    "to": "/docs",
    "children": "Go to docs"
  }
}
~~~

Another example with an external URL:
~~~json
{
  "type": "Link",
  "props": {
    "href": "https://neurons.me",
    "target": "_blank",
    "rel": "noreferrer",
    "children": "Visit neurons.me"
  }
}
~~~
        `}}},argTypes:{underline:{control:{type:"radio"},options:["none","hover","always"]},color:{control:{type:"select"},options:["primary","secondary","inherit","textPrimary","textSecondary","error","info","success","warning"]},component:{table:{disable:!0}}},args:{underline:"hover",color:"primary",children:"Example link"}},t={},s={name:"External (href)",render:()=>r.jsx(e,{href:"https://neurons.me",target:"_blank",rel:"noreferrer",children:"Visit neurons.me"})},a={name:"Internal (to)",render:()=>r.jsx(e,{to:"/docs",children:"Go to docs"})},i={render:o=>{const b=["primary","secondary","success","info","warning","error"];return r.jsx("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:b.map(n=>r.jsx(e,{...o,color:n,href:"#",children:n[0].toUpperCase()+n.slice(1)},n))})}},c={render:o=>r.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[r.jsx(e,{...o,underline:"none",href:"#",children:"None"}),r.jsx(e,{...o,underline:"hover",href:"#",children:"Hover"}),r.jsx(e,{...o,underline:"always",href:"#",children:"Always"})]})},p={name:"As Button component",render:()=>r.jsx(U,{component:e,to:"/docs",children:"Docs via Link"})};var d,l,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'External (href)',
  render: () => <Link href="https://neurons.me" target="_blank" rel="noreferrer">
      Visit neurons.me
    </Link>
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,y,k;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Internal (to)',
  render: () => <Link to="/docs">Go to docs</Link>
}`,...(k=(y=a.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var x,L,v;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    const colors: Array<any> = ['primary', 'secondary', 'success', 'info', 'warning', 'error'];
    return <div style={{
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }}>
        {colors.map(c => <Link key={c} {...args} color={c} href="#">
            {c[0].toUpperCase() + c.slice(1)}
          </Link>)}
      </div>;
  }
}`,...(v=(L=i.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};var w,j,B;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap'
  }}>
      <Link {...args} underline="none" href="#">None</Link>
      <Link {...args} underline="hover" href="#">Hover</Link>
      <Link {...args} underline="always" href="#">Always</Link>
    </div>
}`,...(B=(j=c.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var I,A,S;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'As Button component',
  render: () => <Button component={Link} to="/docs">
      Docs via Link
    </Button>
}`,...(S=(A=p.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};const Y=["Playground","ExternalHref","InternalTo","Colors","UnderlineVariants","AsButtonTarget"];export{p as AsButtonTarget,i as Colors,s as ExternalHref,a as InternalTo,t as Playground,c as UnderlineVariants,Y as __namedExportsOrder,X as default};
