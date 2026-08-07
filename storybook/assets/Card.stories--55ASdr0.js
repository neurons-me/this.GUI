import{j as r,a}from"./iframe-BOpb4YIv.js";import{C as o}from"./Card-r0jTz4HU.js";import"./Button-DLg_2bWS.js";import"./Chip-Jw9wd0Uq.js";import"./InspectorToggle-DAQxw7h1.js";import"./ListItemIcon-e8U0ao5E.js";import"./ListItemText-LBsMmETJ.js";import"./Drawer-CS-fZvWK.js";import{S as p}from"./Stack-fOhN3PSD.js";import"./Tooltip-DLbppr6W.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-CXVojHGY.js";import"./Icon-DzmBtpNi.js";import"./Button-BBkqSahG.js";import"./ButtonBase-wlOBdJtH.js";import"./TransitionGroupContext-BS26-g3U.js";import"./useForkRef-dhPZUXrW.js";import"./CircularProgress-DO1ae1Up.js";import"./createSvgIcon-Boif_Qzi.js";import"./Paper-CRwrMbzS.js";import"./renderer-BVJst6-E.js";import"./runtimeContext-CzmwpH0Y.js";import"./Toolbar-DMjcZbrA.js";import"./IconButton-BQ3BjMi8.js";import"./IconButton-Btnx6d7J.js";import"./listItemIconClasses-CSdBHDnA.js";import"./ListContext-DxyJOsjJ.js";import"./listItemTextClasses-Bjqy9_ye.js";import"./useSlot-HWh9e-Qv.js";import"./resolveComponentProps-CHSBRdpi.js";import"./dividerClasses-DU1eXcIB.js";import"./Grow-DcgXnIYz.js";import"./Modal-DTdlQupa.js";import"./useSlotProps-Bqtf_G4K.js";import"./getThemeProps-B1DPgGZg.js";import"./useControlled-nmmvMmEZ.js";const M={title:"Atoms/Card",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
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
