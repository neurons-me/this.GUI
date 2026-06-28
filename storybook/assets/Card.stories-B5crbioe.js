import{j as r,a}from"./iframe-DsRKGudf.js";import{C as o}from"./Card-CjP9-bgm.js";import"./Button-LiUEA2TU.js";import"./Chip-C8fm0eph.js";import"./Paper-CZuqLR2o.js";import"./InspectorToggle-B2-9R7tJ.js";import"./ListItemIcon-C9IEsNAm.js";import"./ListItemText-Dx2OxWN3.js";import"./Drawer-DWTuXBaB.js";import{S as p}from"./Stack-CIiqTG01.js";import"./Tooltip-DwxTrZJL.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-CGP3T9PR.js";import"./Icon-C-KCwcAw.js";import"./Button-HEMqV7f1.js";import"./ButtonBase-BHgzLA4j.js";import"./TransitionGroupContext-gftPsmXQ.js";import"./useForkRef-DaPdQACB.js";import"./CircularProgress-CBgE9hq-.js";import"./createSvgIcon-C4CP9IBQ.js";import"./renderer-X8EydWrl.js";import"./runtimeContext-k6DqlALu.js";import"./Toolbar-H6MAk1z7.js";import"./IconButton-BbGJVgc-.js";import"./IconButton-m_4K4KMU.js";import"./listItemIconClasses-Dkt3uDCe.js";import"./ListContext-Dg6a-o_V.js";import"./listItemTextClasses-RCKfP_HI.js";import"./useSlot-UY7wHEUA.js";import"./resolveComponentProps-DWU9FwiD.js";import"./dividerClasses-Bl7DWpUo.js";import"./Grow-DUdPBg0C.js";import"./Modal-CmcgpO8z.js";import"./useSlotProps-DnVOBi5c.js";import"./getThemeProps-B_l613BN.js";import"./useControlled-BTRy4wlV.js";const M={title:"Atoms/Card",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
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
