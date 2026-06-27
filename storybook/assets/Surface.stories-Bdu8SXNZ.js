import{j as e,a as r,T as p}from"./iframe-B945G3MO.js";import"./Button-CKOdrTu7.js";import"./Chip-BraUMfbk.js";import"./Paper-Cc-h7jKx.js";import{S as a}from"./Surface-b1nqK0Ij.js";import"./InspectorToggle-BxuSsdIV.js";import"./ListItemIcon-BzUqBMfL.js";import"./ListItemText-BJh5K7TE.js";import"./Drawer-DwqR1QDi.js";import{S as c}from"./Stack-B8kWwK-m.js";import"./Tooltip-DBphtguK.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-B7ImVv8I.js";import"./Button-5CJ0bfWc.js";import"./ButtonBase-D-uLuZlV.js";import"./TransitionGroupContext-C7M7qqJI.js";import"./useForkRef-B1qixtFe.js";import"./CircularProgress-CblgA6-I.js";import"./createSvgIcon-DmKvINFx.js";import"./Paper-B44MHfVE.js";import"./renderer-_moSinZp.js";import"./runtimeContext-Cw7GHtwp.js";import"./Toolbar-CMdIY8Zj.js";import"./IconButton-D5mRMUCb.js";import"./IconButton-DSENFRag.js";import"./listItemIconClasses-DsWwoGm5.js";import"./ListContext-Ck__g24J.js";import"./listItemTextClasses-DhSbipbj.js";import"./useSlot-BDGGiRla.js";import"./resolveComponentProps-Cr13QVQ8.js";import"./dividerClasses-BqPsrmCt.js";import"./Grow-SjjAWBSH.js";import"./Modal-DT98mAxm.js";import"./useSlotProps-C5tgyCQW.js";import"./getThemeProps-BEaVCLc9.js";import"./useControlled-ojhLLIC7.js";const U={title:"Atoms/Surface",component:a,tags:["autodocs"],parameters:{layout:"centered",decorators:[o=>e.jsx(p,{children:e.jsx(o,{})})],docs:{description:{component:`
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
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const H=["Variants"];export{t as Variants,H as __namedExportsOrder,U as default};
