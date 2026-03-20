import{B as e,j as o,L as V,a as x}from"./iframe-BzW5L-sB.js";import{B as X}from"./Button-B701r1T7.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-BWddFN6m.js";import"./Button-DrdkIVvT.js";import"./ButtonBase-DEfx69p-.js";import"./TransitionGroupContext-DBebgn_y.js";import"./useForkRef-BZw98wdx.js";import"./useEventCallback-0bk4YSZd.js";import"./CircularProgress-CqZnmEb2.js";const so={title:"Atoms/Containers/Box",component:e,tags:["autodocs"],decorators:[r=>o.jsx("div",{style:{padding:16,minHeight:240},children:o.jsx(r,{})})],parameters:{docs:{description:{component:'\n**Box** is a thin wrapper around MUI\'s `Box` that preserves **polymorphism** and integrates with **This.GUI** theming.\nUse it as your default layout primitive: spacing, flex/grid, backgrounds, borders, etc.\n\n---\n## Features\n- **Polymorphic**: `component` (or `as`) can be an element tag (e.g. `\'section\'`, `\'img\'`, `\'a\'`) or a component (e.g. This.GUI `Link`).\n- **Routing-friendly**: when using `component={Link}` you can pass `to`; anchors use `href`.\n- **System props** & **sx**: use MUI system (p, m, display, gap, flex, grid, etc.) and the `sx` prop for deep styling.\n- **Image mode**: if `component="img"`, you can pass `src`, `alt`, `width`, `height`, `loading`, `decoding`, `referrerPolicy`, `sizes`, `srcSet`.\n\n---\n## Key Props\n- `component?: ElementType | string` / `as?: ElementType | string`\n- `to?: string` (when `component={Link}`)\n- `href?: string` (when `component="a"`)\n- `sx?: SxProps` + all MUI system props (e.g. `p`, `m`, `display`, `gap`)\n- **Image-only extras** (when `component="img"`): `src`, `alt`, `width`, `height`, `loading`, `decoding`, `referrerPolicy`, `sizes`, `srcSet`.\n\n> We don\'t expose `component`, `to`, `href` as Storybook controls—see the dedicated stories below.\n\n---\n## Basic usage\n~~~jsx\nimport { Box } from \'@/gui/atoms\';\n\n<Box p={2} sx={{ border: \'1px solid\', borderColor: \'divider\', borderRadius: 1 }}>\n  Content\n</Box>\n~~~\n\n## Polymorphic (as a section)\n~~~jsx\n<Box component="section" p={2}>Section content</Box>\n~~~\n\n## Router link target\n~~~jsx\nimport { Box, Link } from \'@/gui/atoms\';\n\n<Box component={Link} to="/docs" p={1} sx={{ display: \'inline-block\' }}>\n  Go to docs\n</Box>\n~~~\n\n## Image mode\n~~~jsx\n<Box component="img" src="/logo.png" alt="Logo" sx={{ width: 120, height: \'auto\' }} />\n~~~\n\n## Declarative JSON / Config usage\n~~~json\n{\n  "type": "Box",\n  "props": {\n    "component": "section",\n    "p": 2,\n    "sx": { "border": "1px solid", "borderColor": "divider", "borderRadius": 8 },\n    "children": "Section content"\n  }\n}\n~~~\n        '}},controls:{exclude:["component","as","to","href","sx"]}},argTypes:{p:{control:{type:"number"},description:"Padding (system prop)"},m:{control:{type:"number"},description:"Margin (system prop)"},display:{control:{type:"select"},options:["block","inline-block","flex","grid","inline-flex","inline","none"]},gap:{control:{type:"number"}}},args:{p:2,display:"block",children:"Box content"}},s={},i={name:"Layout basics (spacing, border, radius)",render:r=>o.jsx(e,{...r,sx:{border:"1px solid",borderColor:"divider",borderRadius:2,bgcolor:"background.paper"}})},d={args:{},render:()=>o.jsxs(e,{display:"flex",gap:2,children:[o.jsx(e,{p:1,sx:{border:"1px dashed",borderColor:"divider"},children:"A"}),o.jsx(e,{p:1,sx:{border:"1px dashed",borderColor:"divider"},children:"B"}),o.jsx(e,{p:1,sx:{border:"1px dashed",borderColor:"divider"},children:"C"})]})},a={render:()=>o.jsx(e,{display:"grid",sx:{gridTemplateColumns:"repeat(3, 1fr)",gap:2},children:Array.from({length:6}).map((r,g)=>o.jsxs(e,{p:2,sx:{border:"1px solid",borderColor:"divider",borderRadius:1},children:["Cell ",g+1]},g))})},n={name:"Polymorphic: section",render:()=>o.jsxs(e,{component:"section",p:2,sx:{borderLeft:"4px solid",borderColor:"primary.main"},children:[o.jsx(x,{variant:"h6",children:"Section title"}),o.jsx(x,{variant:"body2",sx:{opacity:.8},children:"Section content goes here."})]})},t={name:"Polymorphic: anchor (href)",render:()=>o.jsx(e,{component:"a",href:"https://neurons.me",target:"_blank",rel:"noreferrer",p:1,sx:{display:"inline-block",border:"1px solid",borderColor:"divider",borderRadius:1,"&:hover":{textDecoration:"none",bgcolor:"action.hover"}},children:"Visit neurons.me"})},c={name:"Polymorphic: Link (to)",render:()=>o.jsx(e,{component:V,to:"/docs",p:1,sx:{display:"inline-block",border:"1px solid",borderColor:"divider",borderRadius:1,"&:hover":{textDecoration:"none",bgcolor:"action.hover"}},children:"Go to docs"})},p={name:'Image mode (component="img")',render:()=>o.jsx(e,{component:"img",src:"https://placekitten.com/320/160",alt:"Kitten",sx:{width:320,height:"auto",borderRadius:1,border:"1px solid",borderColor:"divider"},loading:"lazy",decoding:"async"})},l={render:()=>o.jsxs(e,{p:2,sx:{border:"1px solid",borderColor:"divider",borderRadius:1},children:[o.jsx(x,{variant:"subtitle1",sx:{mb:1},children:"Nested composition"}),o.jsxs(e,{display:"flex",gap:1,children:[o.jsx(X,{variant:"contained",color:"primary",children:"Action"}),o.jsx(e,{component:V,to:"/docs",sx:{alignSelf:"center"},children:"Learn more"})]})]})},m={name:"Deep styling with sx",render:()=>o.jsxs(e,{p:2,sx:{borderRadius:2,bgcolor:"background.paper",border:"1px solid",borderColor:"divider","& .demo-title":{fontWeight:700,color:"text.primary",mb:1},"& .demo-card":{p:1.5,border:"1px solid",borderColor:"divider",borderRadius:1,"&:hover":{bgcolor:"action.hover"}}},children:[o.jsx(x,{className:"demo-title",children:"Cards"}),o.jsxs(e,{display:"grid",sx:{gridTemplateColumns:"repeat(3, 1fr)",gap:1.5},children:[o.jsx(e,{className:"demo-card",children:"One"}),o.jsx(e,{className:"demo-card",children:"Two"}),o.jsx(e,{className:"demo-card",children:"Three"})]})]})};var h,b,u;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(u=(b=s.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var y,B,v;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Layout basics (spacing, border, radius)',
  render: args => <Box {...args} sx={{
    border: '1px solid',
    borderColor: 'divider',
    borderRadius: 2,
    bgcolor: 'background.paper'
  }} />
}`,...(v=(B=i.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var f,C,j;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {},
  render: () => <Box display="flex" gap={2}>
      <Box p={1} sx={{
      border: '1px dashed',
      borderColor: 'divider'
    }}>A</Box>
      <Box p={1} sx={{
      border: '1px dashed',
      borderColor: 'divider'
    }}>B</Box>
      <Box p={1} sx={{
      border: '1px dashed',
      borderColor: 'divider'
    }}>C</Box>
    </Box>
}`,...(j=(C=d.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var k,S,R;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Box display="grid" sx={{
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 2
  }}>
      {Array.from({
      length: 6
    }).map((_, i) => <Box key={i} p={2} sx={{
      border: '1px solid',
      borderColor: 'divider',
      borderRadius: 1
    }}>
          Cell {i + 1}
        </Box>)}
    </Box>
}`,...(R=(S=a.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var L,T,w;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Polymorphic: section',
  render: () => <Box component="section" p={2} sx={{
    borderLeft: '4px solid',
    borderColor: 'primary.main'
  }}>
      <Typography variant="h6">Section title</Typography>
      <Typography variant="body2" sx={{
      opacity: 0.8
    }}>
        Section content goes here.
      </Typography>
    </Box>
}`,...(w=(T=n.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var A,P,I;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Polymorphic: anchor (href)',
  render: () => <Box component="a" href="https://neurons.me" target="_blank" rel="noreferrer" p={1} sx={{
    display: 'inline-block',
    border: '1px solid',
    borderColor: 'divider',
    borderRadius: 1,
    '&:hover': {
      textDecoration: 'none',
      bgcolor: 'action.hover'
    }
  }}>
      Visit neurons.me
    </Box>
}`,...(I=(P=t.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var N,D,G;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Polymorphic: Link (to)',
  render: () => <Box component={Link} to="/docs" p={1} sx={{
    display: 'inline-block',
    border: '1px solid',
    borderColor: 'divider',
    borderRadius: 1,
    '&:hover': {
      textDecoration: 'none',
      bgcolor: 'action.hover'
    }
  }}>
      Go to docs
    </Box>
}`,...(G=(D=c.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var M,U,_;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Image mode (component="img")',
  render: () => <Box component="img" src="https://placekitten.com/320/160" alt="Kitten" sx={{
    width: 320,
    height: 'auto',
    borderRadius: 1,
    border: '1px solid',
    borderColor: 'divider'
  }} loading="lazy" decoding="async" />
}`,...(_=(U=p.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var z,E,O;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Box p={2} sx={{
    border: '1px solid',
    borderColor: 'divider',
    borderRadius: 1
  }}>
      <Typography variant="subtitle1" sx={{
      mb: 1
    }}>Nested composition</Typography>
      <Box display="flex" gap={1}>
        <Button variant="contained" color="primary">Action</Button>
        <Box component={Link} to="/docs" sx={{
        alignSelf: 'center'
      }}>
          Learn more
        </Box>
      </Box>
    </Box>
}`,...(O=(E=l.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var F,K,W;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Deep styling with sx',
  render: () => <Box p={2} sx={{
    borderRadius: 2,
    bgcolor: 'background.paper',
    border: '1px solid',
    borderColor: 'divider',
    '& .demo-title': {
      fontWeight: 700,
      color: 'text.primary',
      mb: 1
    },
    '& .demo-card': {
      p: 1.5,
      border: '1px solid',
      borderColor: 'divider',
      borderRadius: 1,
      '&:hover': {
        bgcolor: 'action.hover'
      }
    }
  }}>
      <Typography className="demo-title">Cards</Typography>
      <Box display="grid" sx={{
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 1.5
    }}>
        <Box className="demo-card">One</Box>
        <Box className="demo-card">Two</Box>
        <Box className="demo-card">Three</Box>
      </Box>
    </Box>
}`,...(W=(K=m.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};const io=["Playground","LayoutBasics","FlexRow","GridLayout","AsSection","AsAnchor","AsRouterLink","ImageMode","NestedComposition","SXDeepStyling"];export{t as AsAnchor,c as AsRouterLink,n as AsSection,d as FlexRow,a as GridLayout,p as ImageMode,i as LayoutBasics,l as NestedComposition,s as Playground,m as SXDeepStyling,io as __namedExportsOrder,so as default};
