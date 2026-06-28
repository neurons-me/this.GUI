import{j as r,a}from"./iframe-DC1i1573.js";import{C as o}from"./Card-DNHwDhpd.js";import"./Button-OznIF1P0.js";import"./Chip-DFuUJxJw.js";import"./Paper-CKIt3RHD.js";import"./InspectorToggle-DJwDlegS.js";import"./ListItemIcon-ZanOEmyx.js";import"./ListItemText-B84pw0of.js";import"./Drawer-BJf2efgA.js";import{S as p}from"./Stack-6pd6mAdi.js";import"./Tooltip-BJSpTCc5.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-C8sdzyzT.js";import"./Icon-CuVJ4y2k.js";import"./Button-Cw1rExmT.js";import"./ButtonBase-BrZ6brEn.js";import"./TransitionGroupContext-BZk-WlWb.js";import"./useForkRef-hpkiJGPF.js";import"./CircularProgress-C0wTbWDO.js";import"./createSvgIcon-CArePSch.js";import"./renderer-BOtl_gvK.js";import"./runtimeContext-CVXgUwjX.js";import"./Toolbar-DpKn-ZL2.js";import"./IconButton-Wjc3ccB5.js";import"./IconButton-TDHo9m7u.js";import"./listItemIconClasses-BwKUXR3I.js";import"./ListContext-DNDBaubu.js";import"./listItemTextClasses-CTxYf6qB.js";import"./useSlot-D_8lZxqR.js";import"./resolveComponentProps-C5BoffGy.js";import"./dividerClasses-Bd48RbK3.js";import"./Grow-D9IP3D0G.js";import"./Modal-CLLebtp2.js";import"./useSlotProps-DIS-q9VP.js";import"./getThemeProps-BRLZPA78.js";import"./useControlled-DbmrnxXO.js";const M={title:"Atoms/Card",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
The **Card** atom is a specialized surface for displaying content and actions about a single subject. It's a direct wrapper around MUI's \`Card\` component.

---
## Features
- Provides a clear container for grouped content.
- Supports an \`outlined\` variant for a bordered look.
- Can be visually lifted using the \`raised\` prop or by setting \`elevation\`.
- Fully themeable and stylable via the \`sx\` prop.

---
## Key Props
- \`variant?: 'elevation' | 'outlined'\`: The style of the card.
- \`raised?: boolean\`: If \`true\`, the card will have a higher elevation.
- \`elevation?: number\`: Controls the shadow depth.
- \`children\`: The content of the card, typically \`CardContent\`, \`CardActions\`, etc.
- \`sx?: object\`: For applying custom styles.

---
## Basic usage (React)
~~~tsx
import { Card, CardContent, Typography } from '@/gui/atoms';

<Card sx={{ minWidth: 275 }}>
  <CardContent>
    <Typography variant="h5">Card Title</Typography>
    <Typography variant="body2">
      Content inside the card.
    </Typography>
  </CardContent>
</Card>
~~~

---
## Declarative JSON / Config usage
The resolver can instantiate a Card from a JSON spec.

~~~json
{
  "type": "Card",
  "props": {
    "variant": "outlined",
    "children": {
      "type": "CardContent",
      "props": {
        "children": {
          "type": "Typography",
          "props": { "children": "Card content" }
        }
      }
    }
  }
}
~~~
`}}},argTypes:{variant:{control:{type:"select"},options:["elevation","outlined"]},raised:{control:{type:"boolean"}},elevation:{control:{type:"range",min:0,max:24,step:1}}}},t={render:()=>r.jsxs(p,{spacing:4,sx:{padding:4,width:"50vw",minWidth:300},children:[r.jsxs(o,{sx:{p:2},children:[r.jsx(a,{variant:"h6",children:"Basic Card"}),r.jsx(a,{variant:"body2",children:"Default elevation."})]}),r.jsxs(o,{variant:"outlined",sx:{p:2},children:[r.jsx(a,{variant:"h6",children:"Outlined Card"}),r.jsx(a,{variant:"body2",children:"Uses a border instead of shadow."})]}),r.jsxs(o,{raised:!0,sx:{p:2},children:[r.jsx(a,{variant:"h6",children:"Raised Card"}),r.jsx(a,{variant:"body2",children:"Uses the `raised` prop for higher elevation."})]})]})};var e,i,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: () => <Stack spacing={4} sx={{
    padding: 4,
    width: '50vw',
    minWidth: 300
  }}>
      <Card sx={{
      p: 2
    }}>
        <Typography variant="h6">Basic Card</Typography>
        <Typography variant="body2">Default elevation.</Typography>
      </Card>
      <Card variant="outlined" sx={{
      p: 2
    }}>
        <Typography variant="h6">Outlined Card</Typography>
        <Typography variant="body2">Uses a border instead of shadow.</Typography>
      </Card>
      <Card raised sx={{
      p: 2
    }}>
        <Typography variant="h6">Raised Card</Typography>
        <Typography variant="body2">Uses the \`raised\` prop for higher elevation.</Typography>
      </Card>
    </Stack>
}`,...(n=(i=t.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const q=["Variants"];export{t as Variants,q as __namedExportsOrder,M as default};
