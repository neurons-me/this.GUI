import{j as r,a}from"./iframe-qDzYtKtC.js";import{C as o}from"./Card-N1p3FZdT.js";import"./Button-CaMPQpml.js";import"./Chip-BhZmaw5o.js";import"./Paper-BoMk_9oZ.js";import"./Hero-xUkqWjvJ.js";import"./InspectorToggle-wekSOhB1.js";import"./ListItemIcon-BK2mjwHL.js";import"./ListItemText-CQf6APCW.js";import"./Drawer-BRutmAaT.js";import{S as p}from"./Stack-Bgfe39cu.js";import"./Tooltip-RJy_MXxX.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-a2hOlvY3.js";import"./Icon-DBfkoY2g.js";import"./Button-DbTl9v6C.js";import"./ButtonBase-6Hh-LNYc.js";import"./TransitionGroupContext-g77QK0i_.js";import"./useForkRef-C06S7OTc.js";import"./CircularProgress-DRiOEmDI.js";import"./createSvgIcon-CxPBGeLD.js";import"./renderer-BktiHyjW.js";import"./runtimeContext-CJX842xe.js";import"./Toolbar-CiCFUf6x.js";import"./IconButton-CTnmFHac.js";import"./IconButton-CFRNv4nR.js";import"./listItemIconClasses-BgBXAK3n.js";import"./ListContext-8BNTkPz4.js";import"./listItemTextClasses-B6v0OomC.js";import"./useSlot-nWJhJTt3.js";import"./resolveComponentProps-sFAkRM5K.js";import"./dividerClasses-Cv8iZShu.js";import"./Grow-CCQ7YCjt.js";import"./Modal-DDOvNC-a.js";import"./useSlotProps-Y_wwP6Cs.js";import"./getThemeProps-DrpwWpCX.js";import"./useControlled-gGju5nux.js";const q={title:"Atoms/Card",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
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
}`,...(n=(i=t.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const G=["Variants"];export{t as Variants,G as __namedExportsOrder,q as default};
