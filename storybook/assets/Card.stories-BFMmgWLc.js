import{j as r,a}from"./iframe-BamSxvGl.js";import{C as o}from"./Card-Z0ZL0tKW.js";import"./Button-BXI39ZZO.js";import"./Chip-3ZxPCOQf.js";import"./Paper-Biw32b0f.js";import"./InspectorToggle-zYA6ms9l.js";import"./ListItemIcon-Dhk1bM8U.js";import"./ListItemText-DTLcNajK.js";import"./Drawer-ZcM56YDZ.js";import{S as p}from"./Stack-Bza491lP.js";import"./Tooltip-Bj6JsHBv.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-upp0xvKF.js";import"./Icon-BYSltbOq.js";import"./Button-BvX7gL8H.js";import"./ButtonBase-CDq_uQ76.js";import"./TransitionGroupContext-Dsjzy0Zl.js";import"./useForkRef-CEd4Lltr.js";import"./CircularProgress-BYWRkUyA.js";import"./createSvgIcon-H1Ui9rrv.js";import"./renderer-pdt03z3o.js";import"./runtimeContext-CxK-3G5O.js";import"./Toolbar-B11vCu7Z.js";import"./IconButton-DrPxXNHQ.js";import"./IconButton-BfXXQCoy.js";import"./listItemIconClasses-DxJ6xFM8.js";import"./ListContext-O3hO-6P8.js";import"./listItemTextClasses-gUF37NNN.js";import"./useSlot-iMtiR0hJ.js";import"./resolveComponentProps-CeJkfEFt.js";import"./dividerClasses-BZftlWy-.js";import"./Grow-BboTJdZh.js";import"./Modal-oSZ9zn9w.js";import"./useSlotProps-C5DVQp4q.js";import"./getThemeProps-atWsPGFr.js";import"./useControlled-DC9n4FZ6.js";const M={title:"Atoms/Card",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
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
