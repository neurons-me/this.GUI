import{j as r,a}from"./iframe-CmZ_q1z4.js";import{C as o}from"./Card-BxJ6JEmm.js";import"./Button-DafFbri_.js";import"./Chip-BTVbmgxv.js";import"./Paper-CcJJK4hI.js";import"./InspectorToggle-BvOKIHof.js";import"./ListItemIcon-CglfnlWt.js";import"./ListItemText-Dhm13hmh.js";import"./Drawer-BLsbzvLs.js";import{S as p}from"./Stack-ofUjRYrm.js";import"./Tooltip-DhJnZuOk.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-BMIc8Tnd.js";import"./Icon-DEE50VaB.js";import"./Button-C2KQi9R3.js";import"./ButtonBase-C2QUU_ac.js";import"./TransitionGroupContext-Da1OtQvn.js";import"./useForkRef-DyhjSSpi.js";import"./CircularProgress-75u6lE4k.js";import"./createSvgIcon-BJr67T_I.js";import"./renderer-DgQvvU-7.js";import"./runtimeContext-btbdyu3b.js";import"./Toolbar-DjCZRGvk.js";import"./IconButton-jR5QBnBC.js";import"./IconButton-CREQMvOl.js";import"./listItemIconClasses-BsISWJWE.js";import"./ListContext-BEs30NJZ.js";import"./listItemTextClasses-DYQe4eT0.js";import"./useSlot-CYyWfB0N.js";import"./resolveComponentProps-BFxV9aVJ.js";import"./dividerClasses-C8HhPn6k.js";import"./Grow-BQB6nH-T.js";import"./Modal-CKg48mq6.js";import"./useSlotProps-Bq_gEvkk.js";import"./getThemeProps-bbO_j9Wi.js";import"./useControlled-DFkCDk-L.js";const M={title:"Atoms/Card",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
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
