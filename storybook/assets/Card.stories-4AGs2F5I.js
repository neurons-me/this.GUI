import{j as r,a}from"./iframe-CIpgfdSA.js";import{C as o}from"./Card-1zl0bRPi.js";import"./Button-CMUDvCWP.js";import"./Chip-DrYhu1lb.js";import"./Paper-DKF2jsMe.js";import"./InspectorToggle-B-FA1UG6.js";import"./ListItemIcon-Ce-4FjVP.js";import"./ListItemText-EEYkoSln.js";import"./Drawer-qFwD3jMV.js";import{S as p}from"./Stack-CqAsCV8x.js";import"./Tooltip-D8eLdlES.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-Co30WzKW.js";import"./Icon-CNWiu4wY.js";import"./Button-_sZ07zbz.js";import"./ButtonBase-DmWmhxFj.js";import"./TransitionGroupContext-aFzyVajs.js";import"./useForkRef-Bt2idEIF.js";import"./CircularProgress-Ch2k8Dnz.js";import"./createSvgIcon-21P3U7BS.js";import"./renderer-Bl1ZkWpq.js";import"./runtimeContext-DYOsHqCK.js";import"./Toolbar-DwLZGWoc.js";import"./IconButton-Drl_RcOw.js";import"./IconButton-D38Qxo8w.js";import"./listItemIconClasses-BiY_95im.js";import"./ListContext-AU4sr-iT.js";import"./listItemTextClasses-CrYuZtSf.js";import"./useSlot-BmNcXWXR.js";import"./resolveComponentProps-CN4RWvl4.js";import"./dividerClasses-DErrwRRZ.js";import"./Grow-COMGU6Gh.js";import"./Modal-BRTptzSC.js";import"./useSlotProps-0d7_6-xv.js";import"./getThemeProps-mxSbfBuC.js";import"./useControlled-DEH0vkGQ.js";const M={title:"Atoms/Card",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
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
