import{j as r,a}from"./iframe-BTtW7_F-.js";import{C as o}from"./Card-BsxUKPFJ.js";import"./Button-D2e3Dj-X.js";import"./Chip-DXMIFmCa.js";import"./Paper-31X3P03d.js";import"./InspectorToggle-CzaqL69D.js";import"./ListItemIcon-D0_aFo-V.js";import"./ListItemText-EmUfqwzP.js";import"./Drawer-BdzA4NBr.js";import{S as p}from"./Stack-BWn6CZQv.js";import"./Tooltip-MnDsYJ5t.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-BQDIcK-B.js";import"./Icon-CA024acM.js";import"./Button-Ddhen21U.js";import"./ButtonBase-DUaQ4VIL.js";import"./TransitionGroupContext-Ddjl0V-4.js";import"./useForkRef-C7ZRtJ0F.js";import"./CircularProgress-ukva-b-G.js";import"./createSvgIcon-CqN86fU2.js";import"./renderer-DXCdzS_m.js";import"./runtimeContext-C007B3Qb.js";import"./Toolbar-Cfnsh_EX.js";import"./IconButton-Cuz7NzFo.js";import"./IconButton-DeO-vsGK.js";import"./listItemIconClasses-CaJ8LvZp.js";import"./ListContext-BZWt7HBR.js";import"./listItemTextClasses-UDjNIRwn.js";import"./useSlot-CIqJhg31.js";import"./resolveComponentProps-B8K2Oa0H.js";import"./dividerClasses-7JosgSfE.js";import"./Grow-CbtqgvRU.js";import"./Modal-QdAoN3Du.js";import"./useSlotProps-W8GAIZ31.js";import"./getThemeProps-gEKSQZyW.js";import"./useControlled-DL-5wEmZ.js";const M={title:"Atoms/Card",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
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
