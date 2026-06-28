import{j as r,a}from"./iframe-p6i3_M1l.js";import{C as o}from"./Card-BYC03Mxc.js";import"./Button-D1vuZL3U.js";import"./Chip-CrjI0RUO.js";import"./Paper-EthS2rjT.js";import"./InspectorToggle-CUHsuhpX.js";import"./ListItemIcon-Bem4eUOS.js";import"./ListItemText-C3oDea4W.js";import"./Drawer-CS47aC-f.js";import{S as p}from"./Stack-DRHZbnBy.js";import"./Tooltip-8jV_9S5S.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-Bw3Z5Cvh.js";import"./Icon-BFYuChBm.js";import"./Button-BeVJ27AF.js";import"./ButtonBase-BJen_mue.js";import"./TransitionGroupContext-FCMPxzOc.js";import"./useForkRef-Ck8rc5Kh.js";import"./CircularProgress-u4FSlkBj.js";import"./createSvgIcon-B-JEACRB.js";import"./renderer-C2YMywAB.js";import"./runtimeContext-DeG4UJ8a.js";import"./Toolbar-5sIhsjeC.js";import"./IconButton-DlXB9zuW.js";import"./IconButton-C2kBk-89.js";import"./listItemIconClasses-D44GzqIH.js";import"./ListContext-CbRgTpeA.js";import"./listItemTextClasses-CPnqD1P-.js";import"./useSlot-BkO1bsLB.js";import"./resolveComponentProps-_bg8blxd.js";import"./dividerClasses-Cmve31Sx.js";import"./Grow-4bVmTnw_.js";import"./Modal-Dg6B-BQQ.js";import"./useSlotProps-kE-iKDRN.js";import"./getThemeProps-CL0kpjCh.js";import"./useControlled-CuDKXm2n.js";const M={title:"Atoms/Card",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
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
