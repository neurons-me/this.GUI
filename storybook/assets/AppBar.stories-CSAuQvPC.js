import{j as r,a as o}from"./iframe-CXR2GqgA.js";import{A as t}from"./AppBar-CDT7plKj.js";import{B as a}from"./Button-TaPxG3UH.js";import"./Chip-CH-AtjVg.js";import"./Paper-CF7KZOnX.js";import{T as e}from"./InspectorToggle-DW2fWofk.js";import"./ListItemIcon-keC8GNt_.js";import"./ListItemText-DR3B8aaX.js";import"./Drawer-CtxFmC7R.js";import{S as c}from"./Stack-Ds-IQxaE.js";import"./Tooltip-WUnQyLdS.js";import"./preload-helper-Dp1pzeXC.js";import"./AppBar-BZIQ2h0r.js";import"./Paper-HHzNcUsn.js";import"./Icon-CvmwPEmM.js";import"./Button-BvWHdkuF.js";import"./ButtonBase-DX9GORHC.js";import"./TransitionGroupContext-CcpZcVWe.js";import"./useForkRef-K1OztWBN.js";import"./CircularProgress-DcAvyTTv.js";import"./createSvgIcon-Bg6G54Kl.js";import"./renderer-Cw5BYG9k.js";import"./runtimeContext-ZiB3-9_k.js";import"./Toolbar-DBBKsClo.js";import"./IconButton-CGBuLZry.js";import"./IconButton-D_Bz2nNC.js";import"./listItemIconClasses-B4xWcd96.js";import"./ListContext-Djvi1VkW.js";import"./listItemTextClasses-CzMVN6O5.js";import"./useSlot-DFV5KgVj.js";import"./resolveComponentProps-B69ntRQ2.js";import"./dividerClasses-BTyRWe9y.js";import"./Grow-DOeZ_aY_.js";import"./Modal-O7pKvnn-.js";import"./useSlotProps-BuE55OuM.js";import"./getThemeProps-DsTEWLbr.js";import"./useControlled-D7UFNaaJ.js";const z={title:"Atoms/Bars",component:t,tags:["autodocs"],decorators:[p=>r.jsx("div",{style:{padding:0,width:"100%",minHeight:240},children:r.jsx(p,{})})],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{variant:{control:{type:"select"},options:["mui","glass"],description:"Semantic preset. mui (default): behaves like MUI Bar. glass: floating blurred panel style."},position:{control:{type:"select"},options:["fixed","absolute","sticky","static","relative"]},color:{control:{type:"select"},options:["default","inherit","primary","secondary","transparent"]},elevation:{control:{type:"number"}},enableColorOnDark:{control:{type:"boolean"}},component:{table:{disable:!0}}}},i={render:()=>r.jsxs(c,{spacing:2,sx:{width:"100%"},children:[r.jsx(o,{variant:"h6",children:"Default Bar"}),r.jsx(t,{position:"static",color:"default",sx:{borderBottom:"1px solid",borderColor:"divider"},children:r.jsxs(e,{children:[r.jsx(o,{variant:"h6",sx:{flexGrow:1},children:"Default"}),r.jsx(a,{color:"inherit",children:"Action"})]})}),r.jsx(o,{variant:"h6",sx:{mt:2},children:"Primary Color"}),r.jsx(t,{position:"static",color:"primary",children:r.jsxs(e,{children:[r.jsx(o,{variant:"h6",sx:{flexGrow:1},children:"Primary"}),r.jsx(a,{color:"inherit",children:"Action"})]})}),r.jsx(o,{variant:"h6",sx:{mt:2},children:"Glass Variant"}),r.jsx(t,{position:"static",variant:"glass",children:r.jsxs(e,{children:[r.jsx(o,{variant:"h6",sx:{flexGrow:1},children:"Glass"}),r.jsx(a,{color:"inherit",children:"Action"})]})}),r.jsx(o,{variant:"h6",sx:{mt:2},children:"With Elevation"}),r.jsx(t,{position:"static",color:"default",elevation:4,children:r.jsxs(e,{children:[r.jsx(o,{variant:"h6",sx:{flexGrow:1},children:"Elevation"}),r.jsx(a,{color:"inherit",children:"Action"})]})})]})};var s,n,l;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <Stack spacing={2} sx={{
    width: '100%'
  }}>
      <Typography variant="h6">Default Bar</Typography>
      <Bar position="static" color="default" sx={{
      borderBottom: '1px solid',
      borderColor: 'divider'
    }}>
        <Toolbar>
          <Typography variant="h6" sx={{
          flexGrow: 1
        }}>Default</Typography>
          <Button color="inherit">Action</Button>
        </Toolbar>
      </Bar>

      <Typography variant="h6" sx={{
      mt: 2
    }}>Primary Color</Typography>
      <Bar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{
          flexGrow: 1
        }}>Primary</Typography>
          <Button color="inherit">Action</Button>
        </Toolbar>
      </Bar>

      <Typography variant="h6" sx={{
      mt: 2
    }}>Glass Variant</Typography>
      <Bar position="static" variant={'glass' as any}>
        <Toolbar>
          <Typography variant="h6" sx={{
          flexGrow: 1
        }}>Glass</Typography>
          <Button color="inherit">Action</Button>
        </Toolbar>
      </Bar>

      <Typography variant="h6" sx={{
      mt: 2
    }}>With Elevation</Typography>
      <Bar position="static" color="default" elevation={4}>
        <Toolbar>
          <Typography variant="h6" sx={{
          flexGrow: 1
        }}>Elevation</Typography>
          <Button color="inherit">Action</Button>
        </Toolbar>
      </Bar>
    </Stack>
}`,...(l=(n=i.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const Q=["Variants"];export{i as Variants,Q as __namedExportsOrder,z as default};
