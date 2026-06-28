import{j as r,a}from"./iframe-BBMjw61D.js";import{C as o}from"./Card-B-gEgOUf.js";import"./Button-DkXRMP8k.js";import"./Chip-C-DVivil.js";import"./Paper-_cshIEQm.js";import"./InspectorToggle-IUCkbs8m.js";import"./ListItemIcon-O_mc4lGd.js";import"./ListItemText-CDOgxmSP.js";import"./Drawer-D_wc0bFk.js";import{S as p}from"./Stack-CKtIKV52.js";import"./Tooltip-DOgg3P-4.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-DtVu_y7z.js";import"./Icon-CeF6C18S.js";import"./Button-CkOjU5EA.js";import"./ButtonBase-CfpMXisj.js";import"./TransitionGroupContext-iBgzY6Iu.js";import"./useForkRef-CJB8aibE.js";import"./CircularProgress-DqaELN0L.js";import"./createSvgIcon-BNRhowvH.js";import"./renderer-DJzlvIF7.js";import"./runtimeContext-DLWF6mek.js";import"./Toolbar-Dp0b3UO_.js";import"./IconButton-CI8jOMmz.js";import"./IconButton-CnArdgnS.js";import"./listItemIconClasses-D5F5QXoM.js";import"./ListContext-BFFnw-lM.js";import"./listItemTextClasses-Dx89N0FO.js";import"./useSlot-DH-Teep3.js";import"./resolveComponentProps-Mj_M1BKr.js";import"./dividerClasses-BWVLveXZ.js";import"./Grow-yh6P9bPz.js";import"./Modal-DGyiVzIh.js";import"./useSlotProps-BFAuu3vI.js";import"./getThemeProps-CJ0dIgn2.js";import"./useControlled-SC_H9kP0.js";const M={title:"Atoms/Card",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
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
