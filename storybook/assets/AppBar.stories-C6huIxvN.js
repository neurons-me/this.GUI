import{j as r,a as o}from"./iframe-DHWRG7QH.js";import{A as t}from"./AppBar-B6Fka3T9.js";import{B as a}from"./Button-oBWKO3VQ.js";import"./Chip-1Vxe2nnS.js";import"./Paper-Bd7uI4Xg.js";import{T as e}from"./InspectorToggle-DcoFs8Wc.js";import"./ListItemIcon-D1SJBUh0.js";import"./ListItemText-Cxq15UaX.js";import"./Drawer-U4M5Q_6p.js";import{S as c}from"./Stack-CxUlXE6_.js";import"./Tooltip-M8VDrXiA.js";import"./preload-helper-Dp1pzeXC.js";import"./AppBar-Cgg5lt8a.js";import"./Paper-Cc_Dqaw6.js";import"./Icon-Cn0j5eWA.js";import"./Button-Bltgg28i.js";import"./ButtonBase-BAs1lMSe.js";import"./TransitionGroupContext-CE_hoGdS.js";import"./useForkRef-tA8i6BhM.js";import"./CircularProgress-BIWkXzy5.js";import"./createSvgIcon-B7s6AbuW.js";import"./renderer-iG2MPD9h.js";import"./runtimeContext-B3HWc0Yx.js";import"./Toolbar-BSLqOFgR.js";import"./IconButton-BfJZcLtb.js";import"./IconButton-DtjMttKU.js";import"./listItemIconClasses-7RdeADQE.js";import"./ListContext-D3ZraOYE.js";import"./listItemTextClasses-CqTLES1u.js";import"./useSlot-DrfD_k7V.js";import"./resolveComponentProps-DrbJ2mp-.js";import"./dividerClasses-B6tUBfWy.js";import"./Grow-DsXwItpO.js";import"./Modal-CiJFTnDS.js";import"./useSlotProps-BEdJDrIu.js";import"./getThemeProps-BDqZ4MBr.js";import"./useControlled-CIHqeqDW.js";const z={title:"Atoms/Bars",component:t,tags:["autodocs"],decorators:[p=>r.jsx("div",{style:{padding:0,width:"100%",minHeight:240},children:r.jsx(p,{})})],parameters:{docs:{description:{component:`
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
