import{B as r,j as o,a as e,L as a}from"./iframe-D9EvTlWl.js";import"./Button-BSC7MtVu.js";import"./Chip-BhW1_AxW.js";import"./Paper-CNvE0RD-.js";import"./Hero-DPukVZVI.js";import"./InspectorToggle-CiS9GylZ.js";import"./ListItemIcon-DoMmdGUF.js";import"./ListItemText-a4I0i_0j.js";import"./Drawer-A3TumCsB.js";import{S as d}from"./Stack-5DxX11xu.js";import"./Tooltip-n2OItU4b.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-CJEApdqx.js";import"./Button-PpSzQ2nP.js";import"./ButtonBase-zQJHYGm5.js";import"./TransitionGroupContext-vbPGwwbr.js";import"./useForkRef-C1LFn95A.js";import"./CircularProgress-DXt0Rfmg.js";import"./createSvgIcon-C3-IuFf-.js";import"./Paper-DhU2P2hT.js";import"./renderer-CYV5pS7F.js";import"./runtimeContext-stX2K2IM.js";import"./Toolbar-CpTN7W9R.js";import"./IconButton-DkE6reKw.js";import"./IconButton-DBFt0jLD.js";import"./listItemIconClasses-DwdzHSCj.js";import"./ListContext-BwmMMl96.js";import"./listItemTextClasses-CMLvMIIb.js";import"./useSlot-DU8sjFIb.js";import"./resolveComponentProps-D0Izudsi.js";import"./dividerClasses-ByNKvJjC.js";import"./Grow-DG8mRUao.js";import"./Modal-BW5LSG0L.js";import"./useSlotProps-CcTolACD.js";import"./getThemeProps-BDyfQF-o.js";import"./useControlled-APzbVKNK.js";const N={title:"Atoms/Box",component:r,tags:["autodocs"],decorators:[p=>o.jsx("div",{style:{padding:16,minHeight:240,width:"100%"},children:o.jsx(p,{})})],parameters:{docs:{description:{component:'\n**Box** is a thin wrapper around MUI\'s `Box` that preserves **polymorphism** and integrates with **This.GUI** theming.\nUse it as your default layout primitive: spacing, flex/grid, backgrounds, borders, etc.\n\n---\n## Features\n- **Polymorphic**: `component` (or `as`) can be an element tag (e.g. `\'section\'`, `\'img\'`, `\'a\'`) or a component (e.g. This.GUI `Link`).\n- **Routing-friendly**: when using `component={Link}` you can pass `to`; anchors use `href`.\n- **System props** & **sx**: use MUI system (p, m, display, gap, flex, grid, etc.) and the `sx` prop for deep styling.\n- **Image mode**: if `component="img"`, you can pass `src`, `alt`, `width`, `height`, `loading`, `decoding`, `referrerPolicy`, `sizes`, `srcSet`.\n\n---\n## Key Props\n- `component?: ElementType | string` / `as?: ElementType | string`\n- `to?: string` (when `component={Link}`)\n- `href?: string` (when `component="a"`)\n- `sx?: SxProps` + all MUI system props (e.g. `p`, `m`, `display`, `gap`)\n- **Image-only extras** (when `component="img"`): `src`, `alt`, `width`, `height`, `loading`, `decoding`, `referrerPolicy`, `sizes`, `srcSet`.\n\n> We don\'t expose `component`, `to`, `href` as Storybook controls—see the dedicated stories below.\n\n---\n## Basic usage\n~~~jsx\nimport { Box } from \'@/gui/atoms\';\n\n<Box p={2} sx={{ border: \'1px solid\', borderColor: \'divider\', borderRadius: 1 }}>\n  Content\n</Box>\n~~~\n\n## Polymorphic (as a section)\n~~~jsx\n<Box component="section" p={2}>Section content</Box>\n~~~\n\n## Router link target\n~~~jsx\nimport { Box, Link } from \'@/gui/atoms\';\n\n<Box component={Link} to="/docs" p={1} sx={{ display: \'inline-block\' }}>\n  Go to docs\n</Box>\n~~~\n\n## Image mode\n~~~jsx\n<Box component="img" src="/logo.png" alt="Logo" sx={{ width: 120, height: \'auto\' }} />\n~~~\n\n## Declarative JSON / Config usage\n~~~json\n{\n  "type": "Box",\n  "props": {\n    "component": "section",\n    "p": 2,\n    "sx": { "border": "1px solid", "borderColor": "divider", "borderRadius": 8 },\n    "children": "Section content"\n  }\n}\n~~~\n        '}},controls:{exclude:["component","as","to","href","sx"]}},argTypes:{p:{control:{type:"number"},description:"Padding (system prop)"},m:{control:{type:"number"},description:"Margin (system prop)"},display:{control:{type:"select"},options:["block","inline-block","flex","grid","inline-flex","inline","none"]},gap:{control:{type:"number"}}},args:{}},i={render:()=>o.jsxs(d,{spacing:4,sx:{width:"100%"},children:[o.jsx(e,{variant:"h6",children:"Basic Box"}),o.jsx(r,{p:2,sx:{border:"1px solid",borderColor:"divider",borderRadius:1},children:"A simple box with padding and a border."}),o.jsx(e,{variant:"h6",children:"Flex Layout"}),o.jsxs(r,{display:"flex",gap:2,children:[o.jsx(r,{p:2,sx:{border:"1px dashed",borderColor:"divider"},children:"Flex Item 1"}),o.jsx(r,{p:2,sx:{border:"1px dashed",borderColor:"divider"},children:"Flex Item 2"}),o.jsx(r,{p:2,sx:{border:"1px dashed",borderColor:"divider"},children:"Flex Item 3"})]}),o.jsx(e,{variant:"h6",children:"Polymorphic (as a section)"}),o.jsxs(r,{component:"section",p:2,sx:{borderLeft:"4px solid",borderColor:"primary.main",bgcolor:"action.hover"},children:[o.jsx(e,{variant:"h6",gutterBottom:!0,children:"Section Title"}),o.jsx(e,{children:"This is a Box rendered as a <section> element."})]}),o.jsx(e,{variant:"h6",children:"Polymorphic (as a link)"}),o.jsx(r,{component:a,to:"/docs",p:1,sx:{display:"inline-block",border:"1px solid",borderColor:"divider",borderRadius:1,"&:hover":{textDecoration:"none",bgcolor:"action.hover"}},children:"Go to docs"}),o.jsx(e,{variant:"h6",children:"Image Mode"}),o.jsx(r,{component:"img",src:"https://placekitten.com/320/160",alt:"Kitten",sx:{width:320,height:"auto",borderRadius:1,border:"1px solid",borderColor:"divider"},loading:"lazy"})]})};var t,s,n;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <Stack spacing={4} sx={{
    width: '100%'
  }}>
      <Typography variant="h6">Basic Box</Typography>
      <Box p={2} sx={{
      border: '1px solid',
      borderColor: 'divider',
      borderRadius: 1
    }}>
        A simple box with padding and a border.
      </Box>

      <Typography variant="h6">Flex Layout</Typography>
      <Box display="flex" gap={2}>
        <Box p={2} sx={{
        border: '1px dashed',
        borderColor: 'divider'
      }}>Flex Item 1</Box>
        <Box p={2} sx={{
        border: '1px dashed',
        borderColor: 'divider'
      }}>Flex Item 2</Box>
        <Box p={2} sx={{
        border: '1px dashed',
        borderColor: 'divider'
      }}>Flex Item 3</Box>
      </Box>

      <Typography variant="h6">Polymorphic (as a section)</Typography>
      <Box component="section" p={2} sx={{
      borderLeft: '4px solid',
      borderColor: 'primary.main',
      bgcolor: 'action.hover'
    }}>
        <Typography variant="h6" gutterBottom>Section Title</Typography>
        <Typography>This is a Box rendered as a &lt;section&gt; element.</Typography>
      </Box>

      <Typography variant="h6">Polymorphic (as a link)</Typography>
      <Box component={Link} to="/docs" p={1} sx={{
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

      <Typography variant="h6">Image Mode</Typography>
      <Box component="img" src="https://placekitten.com/320/160" alt="Kitten" sx={{
      width: 320,
      height: 'auto',
      borderRadius: 1,
      border: '1px solid',
      borderColor: 'divider'
    }} loading="lazy" />
    </Stack>
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const W=["Variants"];export{i as Variants,W as __namedExportsOrder,N as default};
