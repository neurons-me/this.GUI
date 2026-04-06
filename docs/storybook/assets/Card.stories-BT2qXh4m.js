import{j as a,a as r}from"./iframe-COO5skUf.js";import{C as e}from"./Card-wF0g3r3f.js";import"./Paper-UVXAhxvg.js";import"./Hero-DoJX5tf8.js";import"./controlSurface-CKLL_tdL.js";import"./ListItemIcon-KANUV62J.js";import"./ListItemText-CZFoY8sj.js";import"./Drawer-DftICJyF.js";import{S as p}from"./Stack-C_aNDNlX.js";import"./Tooltip-DYaPRb-T.js";import"./Icon-DpAowGqD.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-BFvRCSII.js";import"./Toolbar-OR_l-jJN.js";import"./selectionStore-Coy7dh9o.js";import"./listItemIconClasses-Bvk-I2by.js";import"./ListContext-Z9iUbTzI.js";import"./listItemTextClasses-DOJTjKud.js";import"./useSlot-DzoiAoV0.js";import"./useForkRef-Bgg-GG6B.js";import"./Grow-DBebQEnl.js";import"./TransitionGroupContext-BjXOR29W.js";import"./Modal-DZI5mxk5.js";import"./getThemeProps-qTSHdYXT.js";import"./useControlled-94B4cvCS.js";const I={title:"Atoms/Card",component:e,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
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
`}}},argTypes:{variant:{control:{type:"select"},options:["elevation","outlined"]},raised:{control:{type:"boolean"}},elevation:{control:{type:"range",min:0,max:24,step:1}}}},t={render:()=>a.jsxs(p,{spacing:4,sx:{padding:4,width:"50vw",minWidth:300},children:[a.jsxs(e,{sx:{p:2},children:[a.jsx(r,{variant:"h6",children:"Basic Card"}),a.jsx(r,{variant:"body2",children:"Default elevation."})]}),a.jsxs(e,{variant:"outlined",sx:{p:2},children:[a.jsx(r,{variant:"h6",children:"Outlined Card"}),a.jsx(r,{variant:"body2",children:"Uses a border instead of shadow."})]}),a.jsxs(e,{raised:!0,sx:{p:2},children:[a.jsx(r,{variant:"h6",children:"Raised Card"}),a.jsx(r,{variant:"body2",children:"Uses the `raised` prop for higher elevation."})]})]})};var o,n,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const W=["Variants"];export{t as Variants,W as __namedExportsOrder,I as default};
