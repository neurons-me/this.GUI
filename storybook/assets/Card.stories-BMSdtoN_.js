import{j as r,a}from"./iframe-DHKm4lxq.js";import{C as e}from"./Card-CyH2T_oW.js";import"./Button-BxCtzB8m.js";import"./Chip-CBarvK3z.js";import"./Paper-DtvotrLC.js";import"./InspectorToggle-4slQGNQR.js";import"./ListItemText-CUOUdkWB.js";import"./Drawer-Cl2v2pdU.js";import{S as p}from"./Stack-B1MwnBF4.js";import"./Tooltip-DWzz156k.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-BRH2Yjjr.js";import"./Icon-BDa5KZaz.js";import"./Button-SfGik2w3.js";import"./ButtonBase-DGodopKS.js";import"./TransitionGroupContext-BAR79BSf.js";import"./useForkRef-CKQjnNCQ.js";import"./CircularProgress-C_mw3fa7.js";import"./createSvgIcon-Be8Ym-L_.js";import"./renderer-bgPyTije.js";import"./runtimeContext-8u-IeDVA.js";import"./Toolbar-DgyTRwAO.js";import"./IconButton-PkGf5jAc.js";import"./IconButton-dLqP0LtD.js";import"./ListContext-Crj2OsJs.js";import"./listItemTextClasses-s6jhsQgh.js";import"./useSlot-D_z_s16V.js";import"./resolveComponentProps-mc7wWAEz.js";import"./dividerClasses-BEgDB5Z9.js";import"./Grow-8YfsGkup.js";import"./Modal-P70wl9z_.js";import"./useSlotProps-Dm6x2sbk.js";import"./getThemeProps-Dv_U1Ogp.js";import"./useControlled-4Z9U_yFP.js";const z={title:"Atoms/Card",component:e,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
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
