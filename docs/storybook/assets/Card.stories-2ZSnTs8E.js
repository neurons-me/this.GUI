import{j as r,a}from"./iframe-DjCVt7fI.js";import{C as e}from"./Card-DVHaq4SE.js";import"./Paper-DjmomdbI.js";import"./Hero-BfoH7vnY.js";import"./InspectorToggle-Bc522O6V.js";import"./ListItemIcon-B0coOJe6.js";import"./ListItemText-CvLWwDuE.js";import"./Drawer-GUeS6ILZ.js";import{S as p}from"./Stack-_0qqEk2D.js";import"./Tooltip-AJA_1ylm.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-KEVgxZe5.js";import"./Toolbar-B9eD0FrK.js";import"./Button-Btre8pBJ.js";import"./Icon-2eyRSfiI.js";import"./Button-D498MQIb.js";import"./ButtonBase-R8XXi6kN.js";import"./TransitionGroupContext-DL1WlFMz.js";import"./useForkRef-B8mj3yu-.js";import"./useEventCallback-DS-1wPyE.js";import"./CircularProgress-BTsMI-jR.js";import"./IconButton-C9bpkJdw.js";import"./IconButton-3ZhB-jAz.js";import"./selectionStore-Coy7dh9o.js";import"./listItemIconClasses-DLa6Dg3U.js";import"./ListContext-C2fXlir5.js";import"./listItemTextClasses-BjK0s3gI.js";import"./useSlot-BH35M0Kq.js";import"./resolveComponentProps-DH0v1ivu.js";import"./Grow-BfUFX405.js";import"./Modal-Beuq0239.js";import"./useSlotProps-Z4YGG9ba.js";import"./getThemeProps-CmGuyLZ3.js";import"./useControlled-2dJkZLWW.js";const z={title:"Atoms/Card",component:e,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
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
`}}},argTypes:{variant:{control:{type:"select"},options:["elevation","outlined"]},raised:{control:{type:"boolean"}},elevation:{control:{type:"range",min:0,max:24,step:1}}}},t={render:()=>r.jsxs(p,{spacing:4,sx:{padding:4,width:"50vw",minWidth:300},children:[r.jsxs(e,{sx:{p:2},children:[r.jsx(a,{variant:"h6",children:"Basic Card"}),r.jsx(a,{variant:"body2",children:"Default elevation."})]}),r.jsxs(e,{variant:"outlined",sx:{p:2},children:[r.jsx(a,{variant:"h6",children:"Outlined Card"}),r.jsx(a,{variant:"body2",children:"Uses a border instead of shadow."})]}),r.jsxs(e,{raised:!0,sx:{p:2},children:[r.jsx(a,{variant:"h6",children:"Raised Card"}),r.jsx(a,{variant:"body2",children:"Uses the `raised` prop for higher elevation."})]})]})};var o,n,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const K=["Variants"];export{t as Variants,K as __namedExportsOrder,z as default};
