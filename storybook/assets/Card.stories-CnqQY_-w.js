import{j as r,a}from"./iframe-C_b0i3u8.js";import{C as e}from"./Card-ChTxMfGG.js";import"./Button-mr_aWkNz.js";import"./Chip-BnLuWVgV.js";import"./Paper-p9eezbgu.js";import"./InspectorToggle-DHMJbXJf.js";import"./ListItemIcon-DjjSIRtc.js";import"./ListItemText-npHmLwIa.js";import"./Drawer-DUsYWcFM.js";import{S as p}from"./Stack-BmExMvXU.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-Boii5j1w.js";import"./Icon-Dg0Fnz52.js";import"./Button-DaKRkwMu.js";import"./ButtonBase-CBZ6tj8F.js";import"./TransitionGroupContext-DA-WNYvH.js";import"./useForkRef-qTVDMFQr.js";import"./CircularProgress-DExCAnw9.js";import"./createSvgIcon-BRYETk95.js";import"./renderer-q29RPfuI.js";import"./Toolbar-C_-YGC8g.js";import"./IconButton-BDpt7_X6.js";import"./IconButton-D_PHND5e.js";import"./listItemIconClasses-Cc2CuJ3o.js";import"./ListContext-CVvYdQEp.js";import"./listItemTextClasses-Cde-U1LC.js";import"./useSlot-G4ByF3pc.js";import"./resolveComponentProps-Drajm3zd.js";import"./dividerClasses-UjyL7AFI.js";import"./mergeSlotProps-DYU3Hg2s.js";import"./Portal-4Utnz7R5.js";import"./Modal-CH6Tu7Dy.js";import"./ownerDocument-DW-IO8s5.js";import"./getThemeProps-BGG3twlu.js";const z={title:"Atoms/Card",component:e,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
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
