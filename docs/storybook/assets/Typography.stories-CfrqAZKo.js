import{j as r}from"./iframe-B8RbS7uw.js";import{T as e}from"./Typography-VWwRmWUn.js";import{L as O}from"./Link-Dl80TlRR.js";import"./preload-helper-Dp1pzeXC.js";import"./Typography-9CeYDXau.js";import"./clsx-B-dksMZM.js";import"./memoTheme-DOBzPGVq.js";import"./styled-Cw_y6cYg.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTheme-BwQ1aHS1.js";import"./isFocusVisible-B8k4qzLc.js";const z={title:"Atoms/Content/Typography",component:e,tags:["autodocs"],decorators:[a=>r.jsx("div",{style:{padding:24},children:r.jsx(a,{})})],parameters:{docs:{description:{component:`
**Typography** is a thin, polymorphic wrapper around MUI's Typography that keeps the full API
while exposing it through This.GUI. Import it from **@/gui/primitives** instead of @mui/material so
you can swap render engines in the future without breaking consumers.

### Key points
- Preserves MUI's polymorphism (\`component\`, \`as\`, \`variantMapping\`).
- Works with routers and anchors: \`component={Link}\` + \`to\`, or \`component="a"\` + \`href\`.
- Styled by your This.GUI theme (typography, palette, spacing).

### Common variants
MUI variants like \`h1..h6\`, \`subtitle1/2\`, \`body1/2\`, \`caption\`, \`overline\` are supported.

### Declarative JSON example
You can describe text nodes in JSON and hydrate them in a renderer:

~~~json
{
  "type": "Typography",
  "props": {
    "variant": "h4",
    "component": "h2",
    "gutterBottom": true
  },
  "children": "Section Title"
}
~~~

A naive hydration would look like:

~~~tsx
const spec = {
  type: 'Typography',
  props: { variant: 'h4', component: 'h2', gutterBottom: true },
  children: 'Section Title'
};

<Typography {...spec.props}>{spec.children}</Typography>
~~~
        `}},controls:{exclude:["component","to","href","variantMapping","ref"]}}},t={args:{variant:"body1",children:"Hello from Typography"}},o={render:()=>r.jsxs("div",{style:{display:"grid",gap:8},children:[r.jsx(e,{variant:"h1",children:"h1. Heading"}),r.jsx(e,{variant:"h2",children:"h2. Heading"}),r.jsx(e,{variant:"h3",children:"h3. Heading"}),r.jsx(e,{variant:"h4",children:"h4. Heading"}),r.jsx(e,{variant:"h5",children:"h5. Heading"}),r.jsx(e,{variant:"h6",children:"h6. Heading"}),r.jsx(e,{variant:"subtitle1",children:"subtitle1"}),r.jsx(e,{variant:"subtitle2",children:"subtitle2"}),r.jsx(e,{variant:"body1",children:"body1"}),r.jsx(e,{variant:"body2",children:"body2"}),r.jsx(e,{variant:"caption",children:"caption"}),r.jsx(e,{variant:"overline",children:"overline"})]}),parameters:{docs:{description:{story:"Preview of common Material UI typography variants."}}}},n={name:"Semantic element (component) + gutter",render:()=>r.jsxs("div",{children:[r.jsx(e,{variant:"h4",component:"h2",gutterBottom:!0,children:"Section title (rendered as h2)"}),r.jsx(e,{variant:"body1",children:"Body text below the title. The \\`gutterBottom\\` on the title adds spacing."})]})},i={render:()=>r.jsxs("div",{style:{display:"grid",gap:8},children:[r.jsx(e,{align:"left",children:"Left aligned"}),r.jsx(e,{align:"center",children:"Center aligned"}),r.jsx(e,{align:"right",children:"Right aligned"})]})},p={render:()=>r.jsxs("div",{style:{display:"grid",gap:8},children:[r.jsx(e,{color:"text.primary",children:"text.primary"}),r.jsx(e,{color:"text.secondary",children:"text.secondary"}),r.jsx(e,{color:"primary",children:"primary"}),r.jsx(e,{color:"#00aa96",children:"#00aa96 (custom)"})]})},s={name:"Routing & anchors",render:()=>r.jsxs("div",{style:{display:"grid",gap:12},children:[r.jsx(e,{component:O,to:"/docs",underline:"none",children:"Go to /docs (Router link)"}),r.jsx(e,{component:"a",href:"https://neurons.me",target:"_blank",rel:"noopener noreferrer",children:"Visit neurons.me (anchor)"})]}),parameters:{docs:{description:{story:"Demonstrates polymorphism: render as router link (with `to`) and as anchor (with `href`)."}}}},d={name:"variantMapping override",render:()=>r.jsxs("div",{style:{display:"grid",gap:8},children:[r.jsx(e,{variant:"subtitle1",variantMapping:{subtitle1:"h3",body1:"p"},children:"subtitle1 text rendered as an H3 element via variantMapping"}),r.jsx(e,{variant:"body1",variantMapping:{subtitle1:"h3",body1:"p"},children:"body1 text rendered as a P element via variantMapping"})]}),parameters:{docs:{description:{story:"MUI Typography allows remapping variants to different HTML elements without changing visual style."}}}},y={name:"Declarative (JSON → Typography)",render:()=>{const a={props:{variant:"h5",component:"h3",gutterBottom:!0},children:"Declaratively rendered title"};return r.jsxs("div",{style:{display:"grid",gap:12},children:[r.jsx("pre",{style:{background:"rgba(127,127,127,0.08)",padding:12,borderRadius:8},children:`{
  "type": "Typography",
  "props": {
    "variant": "h5",
    "component": "h3",
    "gutterBottom": true
  },
  "children": "Declaratively rendered title"
}`}),r.jsx(e,{...a.props,children:a.children})]})},parameters:{docs:{description:{story:"Example of hydrating a Typography node from a JSON spec. In production, your app would use a central registry/renderer."}}}};var c,h,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'body1',
    children: 'Hello from Typography'
  }
}`,...(l=(h=t.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};var g,m,u;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 8
  }}>
      <Typography variant="h1">h1. Heading</Typography>
      <Typography variant="h2">h2. Heading</Typography>
      <Typography variant="h3">h3. Heading</Typography>
      <Typography variant="h4">h4. Heading</Typography>
      <Typography variant="h5">h5. Heading</Typography>
      <Typography variant="h6">h6. Heading</Typography>
      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>
      <Typography variant="body1">body1</Typography>
      <Typography variant="body2">body2</Typography>
      <Typography variant="caption">caption</Typography>
      <Typography variant="overline">overline</Typography>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Preview of common Material UI typography variants.'
      }
    }
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var v,T,x;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Semantic element (component) + gutter',
  render: () => <div>
      <Typography variant="h4" component="h2" gutterBottom>
        Section title (rendered as h2)
      </Typography>
      <Typography variant="body1">
        Body text below the title. The \\\`gutterBottom\\\` on the title adds spacing.
      </Typography>
    </div>
}`,...(x=(T=n.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var b,j,f;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 8
  }}>
      <Typography align="left">Left aligned</Typography>
      <Typography align="center">Center aligned</Typography>
      <Typography align="right">Right aligned</Typography>
    </div>
}`,...(f=(j=i.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var M,S,w;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 8
  }}>
      <Typography color="text.primary">text.primary</Typography>
      <Typography color="text.secondary">text.secondary</Typography>
      <Typography color="primary">primary</Typography>
      <Typography color="#00aa96">#00aa96 (custom)</Typography>
    </div>
}`,...(w=(S=p.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var k,H,B;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Routing & anchors',
  render: () => <div style={{
    display: 'grid',
    gap: 12
  }}>
      {/* Router link (uses This.GUI Link under the hood) */}
      <Typography component={Link as any} to="/docs" underline="none">
        Go to /docs (Router link)
      </Typography>

      {/* External anchor */}
      <Typography component="a" href="https://neurons.me" target="_blank" rel="noopener noreferrer">
        Visit neurons.me (anchor)
      </Typography>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates polymorphism: render as router link (with \`to\`) and as anchor (with \`href\`).'
      }
    }
  }
}`,...(B=(H=s.parameters)==null?void 0:H.docs)==null?void 0:B.source}}};var I,A,R;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'variantMapping override',
  render: () => <div style={{
    display: 'grid',
    gap: 8
  }}>
      <Typography variant="subtitle1" variantMapping={{
      subtitle1: 'h3',
      body1: 'p'
    }}>
        subtitle1 text rendered as an H3 element via variantMapping
      </Typography>
      <Typography variant="body1" variantMapping={{
      subtitle1: 'h3',
      body1: 'p'
    }}>
        body1 text rendered as a P element via variantMapping
      </Typography>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'MUI Typography allows remapping variants to different HTML elements without changing visual style.'
      }
    }
  }
}`,...(R=(A=d.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var D,U,L;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Declarative (JSON → Typography)',
  render: () => {
    const spec = {
      type: 'Typography',
      props: {
        variant: 'h5',
        component: 'h3',
        gutterBottom: true
      },
      children: 'Declaratively rendered title'
    } as const;
    return <div style={{
      display: 'grid',
      gap: 12
    }}>
        <pre style={{
        background: 'rgba(127,127,127,0.08)',
        padding: 12,
        borderRadius: 8
      }}>
        {\`{
  "type": "Typography",
  "props": {
    "variant": "h5",
    "component": "h3",
    "gutterBottom": true
  },
  "children": "Declaratively rendered title"
}\`}
        </pre>
        {/* naive renderer */}
        <Typography {...spec.props}>{spec.children}</Typography>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of hydrating a Typography node from a JSON spec. In production, your app would use a central registry/renderer.'
      }
    }
  }
}`,...(L=(U=y.parameters)==null?void 0:U.docs)==null?void 0:L.source}}};const F=["Basic","Variants","AsPropAndGutter","Alignment","Colors","WithRouterAndAnchor","VariantMappingOverride","DeclarativeSpec"];export{i as Alignment,n as AsPropAndGutter,t as Basic,p as Colors,y as DeclarativeSpec,d as VariantMappingOverride,o as Variants,s as WithRouterAndAnchor,F as __namedExportsOrder,z as default};
