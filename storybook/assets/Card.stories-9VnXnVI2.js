import{j as r,a}from"./iframe-DHWRG7QH.js";import{C as o}from"./Card-ChtwOe2h.js";import"./Button-oBWKO3VQ.js";import"./Chip-1Vxe2nnS.js";import"./Paper-Bd7uI4Xg.js";import"./InspectorToggle-DcoFs8Wc.js";import"./ListItemIcon-D1SJBUh0.js";import"./ListItemText-Cxq15UaX.js";import"./Drawer-U4M5Q_6p.js";import{S as p}from"./Stack-CxUlXE6_.js";import"./Tooltip-M8VDrXiA.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-Cc_Dqaw6.js";import"./Icon-Cn0j5eWA.js";import"./Button-Bltgg28i.js";import"./ButtonBase-BAs1lMSe.js";import"./TransitionGroupContext-CE_hoGdS.js";import"./useForkRef-tA8i6BhM.js";import"./CircularProgress-BIWkXzy5.js";import"./createSvgIcon-B7s6AbuW.js";import"./renderer-iG2MPD9h.js";import"./runtimeContext-B3HWc0Yx.js";import"./Toolbar-BSLqOFgR.js";import"./IconButton-BfJZcLtb.js";import"./IconButton-DtjMttKU.js";import"./listItemIconClasses-7RdeADQE.js";import"./ListContext-D3ZraOYE.js";import"./listItemTextClasses-CqTLES1u.js";import"./useSlot-DrfD_k7V.js";import"./resolveComponentProps-DrbJ2mp-.js";import"./dividerClasses-B6tUBfWy.js";import"./Grow-DsXwItpO.js";import"./Modal-CiJFTnDS.js";import"./useSlotProps-BEdJDrIu.js";import"./getThemeProps-BDqZ4MBr.js";import"./useControlled-CIHqeqDW.js";const M={title:"Atoms/Card",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
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
