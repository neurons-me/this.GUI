import{j as r,a}from"./iframe-BGaDc8fY.js";import{C as o}from"./Card-y6LyZe9V.js";import"./Button-CTJugSMu.js";import"./Chip-DPTpPXfj.js";import"./Paper-D8K68VRW.js";import"./InspectorToggle-DlY13M7X.js";import"./ListItemIcon-CtNWREle.js";import"./ListItemText-BgBlMoMB.js";import"./Drawer-OYjj9WNP.js";import{S as p}from"./Stack-D3ZIO7AY.js";import"./Tooltip-D2OUCLIk.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-Di4HKz2Y.js";import"./Icon-7Zhdja6G.js";import"./Button-DQUBnN9_.js";import"./ButtonBase-CmhJTDh7.js";import"./TransitionGroupContext-CRX3K3-N.js";import"./useForkRef-BTLRd6DF.js";import"./CircularProgress-iyiqlgzo.js";import"./createSvgIcon-4U5SUzqQ.js";import"./renderer-DHHJdapJ.js";import"./runtimeContext-DoMG9-W6.js";import"./Toolbar-BBnWUHS2.js";import"./IconButton-CQXbYqDU.js";import"./IconButton-Daf4E_dW.js";import"./listItemIconClasses-ClAJKT2Y.js";import"./ListContext-YJMNngyR.js";import"./listItemTextClasses-CswSoKM3.js";import"./useSlot-mYHib5yE.js";import"./resolveComponentProps-Dk29dXks.js";import"./dividerClasses-BVGmolOg.js";import"./Grow-Cde1WuC5.js";import"./Modal-C572445k.js";import"./useSlotProps-yQEft4tG.js";import"./getThemeProps-B7Mx3brp.js";import"./useControlled-Cm9jB_PK.js";const M={title:"Atoms/Card",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
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
