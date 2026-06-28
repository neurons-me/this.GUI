import{j as r,a}from"./iframe-CXR2GqgA.js";import{C as o}from"./Card-BPSfNrZ1.js";import"./Button-TaPxG3UH.js";import"./Chip-CH-AtjVg.js";import"./Paper-CF7KZOnX.js";import"./InspectorToggle-DW2fWofk.js";import"./ListItemIcon-keC8GNt_.js";import"./ListItemText-DR3B8aaX.js";import"./Drawer-CtxFmC7R.js";import{S as p}from"./Stack-Ds-IQxaE.js";import"./Tooltip-WUnQyLdS.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-HHzNcUsn.js";import"./Icon-CvmwPEmM.js";import"./Button-BvWHdkuF.js";import"./ButtonBase-DX9GORHC.js";import"./TransitionGroupContext-CcpZcVWe.js";import"./useForkRef-K1OztWBN.js";import"./CircularProgress-DcAvyTTv.js";import"./createSvgIcon-Bg6G54Kl.js";import"./renderer-Cw5BYG9k.js";import"./runtimeContext-ZiB3-9_k.js";import"./Toolbar-DBBKsClo.js";import"./IconButton-CGBuLZry.js";import"./IconButton-D_Bz2nNC.js";import"./listItemIconClasses-B4xWcd96.js";import"./ListContext-Djvi1VkW.js";import"./listItemTextClasses-CzMVN6O5.js";import"./useSlot-DFV5KgVj.js";import"./resolveComponentProps-B69ntRQ2.js";import"./dividerClasses-BTyRWe9y.js";import"./Grow-DOeZ_aY_.js";import"./Modal-O7pKvnn-.js";import"./useSlotProps-BuE55OuM.js";import"./getThemeProps-DsTEWLbr.js";import"./useControlled-D7UFNaaJ.js";const M={title:"Atoms/Card",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
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
