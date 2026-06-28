import{j as e,a as r,T as p}from"./iframe-qDzYtKtC.js";import"./Button-CaMPQpml.js";import"./Chip-BhZmaw5o.js";import"./Paper-BoMk_9oZ.js";import{S as a}from"./Surface-dnX_C6uR.js";import"./Hero-xUkqWjvJ.js";import"./InspectorToggle-wekSOhB1.js";import"./ListItemIcon-BK2mjwHL.js";import"./ListItemText-CQf6APCW.js";import"./Drawer-BRutmAaT.js";import{S as c}from"./Stack-Bgfe39cu.js";import"./Tooltip-RJy_MXxX.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-DBfkoY2g.js";import"./Button-DbTl9v6C.js";import"./ButtonBase-6Hh-LNYc.js";import"./TransitionGroupContext-g77QK0i_.js";import"./useForkRef-C06S7OTc.js";import"./CircularProgress-DRiOEmDI.js";import"./createSvgIcon-CxPBGeLD.js";import"./Paper-a2hOlvY3.js";import"./renderer-BktiHyjW.js";import"./runtimeContext-CJX842xe.js";import"./Toolbar-CiCFUf6x.js";import"./IconButton-CTnmFHac.js";import"./IconButton-CFRNv4nR.js";import"./listItemIconClasses-BgBXAK3n.js";import"./ListContext-8BNTkPz4.js";import"./listItemTextClasses-B6v0OomC.js";import"./useSlot-nWJhJTt3.js";import"./resolveComponentProps-sFAkRM5K.js";import"./dividerClasses-Cv8iZShu.js";import"./Grow-CCQ7YCjt.js";import"./Modal-DDOvNC-a.js";import"./useSlotProps-Y_wwP6Cs.js";import"./getThemeProps-DrpwWpCX.js";import"./useControlled-gGju5nux.js";const H={title:"Atoms/Surface",component:a,tags:["autodocs"],parameters:{layout:"centered",decorators:[o=>e.jsx(p,{children:e.jsx(o,{})})],docs:{description:{component:`
The **Surface** atom is a fundamental container component, acting as a wrapper around MUI's \`Paper\`. It serves as the base "canvas" upon which other components and content are placed.
---
## Features
- Provides physical properties like elevation (shadow).
- Supports custom variants like \`glass\` for a blurred, semi-transparent effect, and \`outline\`.
- Can be configured to have square or rounded corners.
- Fully themeable and stylable via the \`sx\` prop.

---
## Key Props
- \`variant?: 'default' | 'glass' | 'outline'\`: The semantic preset for the surface style.
- \`elevation?: number\`: The shadow depth, from 0 to 24.
- \`square?: boolean\`: If \`true\`, the surface will have square corners.
- \`children\`: The content to be rendered inside the surface.
- \`sx?: object\`: For applying custom styles.

---
## Basic usage (React)
~~~tsx
import { Surface, Typography } from '@/gui/atoms';

<Surface elevation={3} sx={{ padding: 4, width: 300 }}>
  <Typography>This is a surface.</Typography>
</Surface>
~~~

---
## Declarative JSON / Config usage
The resolver can instantiate a Surface from a JSON spec, making it a core layout primitive.

~~~json
{
  "type": "Surface",
  "props": {
    "elevation": 1,
    "sx": { "padding": 2 },
    "children": {
      "type": "Typography",
      "props": {
        "children": "Content inside a resolved surface."
      }
    }
  }
}
~~~
`}}},argTypes:{variant:{control:{type:"select"},options:["default","glass","outline"],description:"The semantic style variant of the surface."},elevation:{control:{type:"range",min:0,max:24,step:1}},square:{control:{type:"boolean"}},color:{table:{disable:!0}}}},t={render:o=>e.jsxs(c,{spacing:4,sx:{padding:4,width:"50vw",minWidth:400,alignItems:"stretch"},children:[e.jsx(a,{variant:"default",elevation:2,sx:{p:2},children:e.jsx(r,{children:"Default Surface (elevation=2)"})}),e.jsx(a,{variant:"outline",elevation:3,sx:{p:2},children:e.jsx(r,{children:"Outline Variant (elevation=3)"})}),e.jsx(a,{variant:"glass",elevation:5,sx:{p:2,backgroundImage:"url(https://source.unsplash.com/random/400x200)",backgroundSize:"cover",backgroundPosition:"center"},children:e.jsx(r,{children:"Glass Variant (elevation=5)"})}),e.jsx(a,{variant:"default",elevation:8,sx:{p:2},children:e.jsx(r,{children:"Solid Variant (elevation=8)"})})]}),args:{}};var i,s,n;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <Stack spacing={4} sx={{
    padding: 4,
    width: '50vw',
    minWidth: 400,
    alignItems: 'stretch'
  }}>
      <Surface variant="default" elevation={2} sx={{
      p: 2
    }}>
        <Typography>Default Surface (elevation=2)</Typography>
      </Surface>

      <Surface variant="outline" elevation={3} sx={{
      p: 2
    }}>
        <Typography>Outline Variant (elevation=3)</Typography>
      </Surface>

      <Surface variant="glass" elevation={5} sx={{
      p: 2,
      // Add a background for the glass effect to be visible in Storybook
      backgroundImage: 'url(https://source.unsplash.com/random/400x200)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
        <Typography>Glass Variant (elevation=5)</Typography>
      </Surface>

      <Surface variant="default" elevation={8} sx={{
      p: 2
    }}>
        <Typography>Solid Variant (elevation=8)</Typography>
      </Surface>
    </Stack>,
  args: {
    // Default args can be set here if needed
  }
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const L=["Variants"];export{t as Variants,L as __namedExportsOrder,H as default};
