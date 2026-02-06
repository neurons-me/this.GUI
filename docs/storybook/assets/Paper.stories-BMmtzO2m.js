import{j as r}from"./iframe-pzPFiMX_.js";import{P as a}from"./Paper-CG1t8LJ7.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-DYSFjcuz.js";import"./clsx-B-dksMZM.js";import"./useTheme-BHTe8Tsy.js";import"./styled-Ddslrojq.js";import"./memoTheme-D6Kqj5GO.js";import"./generateUtilityClasses-CoM_PQv9.js";const _={title:"Atoms/Containers/Paper",component:a,tags:["autodocs"],decorators:[e=>r.jsx("div",{style:{padding:16,minHeight:240,background:"var(--mui-palette-background-default)"},children:r.jsx(e,{})})],parameters:{docs:{description:{component:`
The **Paper** atom is a thin wrapper around MUI's \`MuiPaper\` that preserves **polymorphism** via the \`component\` prop and passes through all MUI props.
It integrates with **This.GUI** theming and supports **declarative specs** through the Paper resolver.

---
## Features
- Variants: \`elevation\`, \`outlined\`
- Elevation: \`0..24\`
- \`square\` boolean
- **Polymorphic** via \`component\` (e.g., \`'div'\`, \`'section'\`, \`'a'\`)
- **Routing default** in declarative mode: if \`to\` is provided (and no explicit \`component\`), resolver renders This.GUI \`Link\`
- Full **system props** passthrough via \`sx\` (and regular MUI system props)

---
## Basic usage
~~~jsx
import Paper from '@/gui/atoms/Paper/Paper';

<Paper elevation={2} sx={{ p: 2, borderRadius: 2 }}>
  Content
</Paper>
~~~

## Polymorphic
~~~jsx
<Paper component="section" variant="outlined" sx={{ p: 2 }}>
  I'm a &lt;section&gt;
</Paper>

<Paper component="a" href="/docs" sx={{ p: 2, textDecoration: 'none' }}>
  Go to docs
</Paper>
~~~

*Note:* The \`component\` prop is demonstrated via dedicated stories (not Controls) because Storybook's args typing for MUI OverridableComponent can incorrectly narrow props and flag \`component\` as invalid in the Controls panel.

## Declarative JSON / Resolver
When using the registry-driven renderer, a Paper spec like this:

~~~json
{
  "type": "Paper",
  "props": {
    "variant": "outlined",
    "elevation": 0,
    "component": "section",
    "sx": { "p": 2, "borderRadius": 2 },
    "children": "Content"
  }
}
~~~

**Routing (declarative default)** — If you provide \`to\` (and **omit** \`component\`), the resolver will render using This.GUI \`Link\`:

~~~json
{
  "type": "Paper",
  "props": {
    "to": "/docs",
    "sx": { "p": 2 },
    "children": "Go to docs"
  }
}
~~~

The resolver:
- Chooses \`component\` by priority: explicit \`component\` → \`as\` → (\`to\` ⇒ This.GUI \`Link\`) → (\`external\` ⇒ \`'a'\`)
- For \`external: true\`, applies safe defaults: \`target="_blank"\`, \`rel="noopener noreferrer"\`
- Cleans resolver-only keys so they don't leak into the DOM
        `}},controls:{exclude:["component"]}},argTypes:{variant:{control:{type:"radio"},options:["elevation","outlined"]},elevation:{control:{type:"range",min:0,max:24,step:1}},square:{control:"boolean"},sx:{control:"object"}},args:{variant:"elevation",elevation:1,square:!1,children:"Paper content",sx:{p:2}}},o={},n={render:e=>r.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[r.jsx(a,{...e,variant:"elevation",children:"Elevation (default)"}),r.jsx(a,{...e,variant:"outlined",children:"Outlined"})]})},s={args:{variant:"elevation"},render:e=>{const w=[0,1,2,3,4,6,8,12,16,24];return r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))",gap:12},children:w.map(l=>r.jsxs(a,{...e,elevation:l,sx:{p:2},children:["elevation=",l]},l))})}},t={args:{variant:"outlined",children:"I render as <section>"},render:e=>r.jsx(a,{...e,component:"section",children:e.children})},i={args:{children:'I render as <a href="/docs">',sx:{p:2,textDecoration:"none"}},render:e=>r.jsx(a,{component:"a",href:"/docs",sx:e.sx,children:e.children})},p={name:"With system props",args:{variant:"outlined"},render:e=>r.jsx(a,{...e,sx:{p:2,m:1,display:"inline-block",borderRadius:2},children:"Padding, margin, display via system props."})},d={args:{variant:"outlined"},render:e=>r.jsx(a,{...e,sx:{p:2,borderRadius:2,borderStyle:"dashed"},children:"Custom \\`sx\\` styling (dashed outline)."})};var c,m,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,g,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap'
  }}>
      <Paper {...args} variant="elevation">Elevation (default)</Paper>
      <Paper {...args} variant="outlined">Outlined</Paper>
    </div>
}`,...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var x,y,P;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'elevation'
  },
  render: args => {
    const levels = [0, 1, 2, 3, 4, 6, 8, 12, 16, 24];
    return <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
      gap: 12
    }}>
        {levels.map(e => <Paper key={e} {...args} elevation={e} sx={{
        p: 2
      }}>
            elevation={e}
          </Paper>)}
      </div>;
  }
}`,...(P=(y=s.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var f,b,j;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    children: 'I render as <section>'
  },
  render: args => <Paper {...args} component="section">
      {args.children}
    </Paper>
}`,...(j=(b=t.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var S,I,k;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'I render as <a href="/docs">',
    sx: {
      p: 2,
      textDecoration: 'none'
    }
  },
  render: args => <Paper component="a" href="/docs" sx={args.sx}>
      {args.children}
    </Paper>
}`,...(k=(I=i.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var C,R,T;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'With system props',
  args: {
    variant: 'outlined'
  },
  render: args => <Paper {...args} sx={{
    p: 2,
    m: 1,
    display: 'inline-block',
    borderRadius: 2
  }}>
      Padding, margin, display via system props.
    </Paper>
}`,...(T=(R=p.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var W,U,E;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: 'outlined'
  },
  render: args => <Paper {...args} sx={{
    p: 2,
    borderRadius: 2,
    borderStyle: 'dashed'
  }}>
      Custom \\\`sx\\\` styling (dashed outline).
    </Paper>
}`,...(E=(U=d.parameters)==null?void 0:U.docs)==null?void 0:E.source}}};const N=["Playground","Variants","Elevations","PolymorphicSection","PolymorphicAnchor","WithSystemProps","WithSx"];export{s as Elevations,o as Playground,i as PolymorphicAnchor,t as PolymorphicSection,n as Variants,d as WithSx,p as WithSystemProps,N as __namedExportsOrder,_ as default};
