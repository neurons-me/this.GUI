import{j as r,a}from"./iframe-B945G3MO.js";import{C as o}from"./Card-CYEI0n7C.js";import"./Button-CKOdrTu7.js";import"./Chip-BraUMfbk.js";import"./Paper-Cc-h7jKx.js";import"./InspectorToggle-BxuSsdIV.js";import"./ListItemIcon-BzUqBMfL.js";import"./ListItemText-BJh5K7TE.js";import"./Drawer-DwqR1QDi.js";import{S as p}from"./Stack-B8kWwK-m.js";import"./Tooltip-DBphtguK.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-B44MHfVE.js";import"./Icon-B7ImVv8I.js";import"./Button-5CJ0bfWc.js";import"./ButtonBase-D-uLuZlV.js";import"./TransitionGroupContext-C7M7qqJI.js";import"./useForkRef-B1qixtFe.js";import"./CircularProgress-CblgA6-I.js";import"./createSvgIcon-DmKvINFx.js";import"./renderer-_moSinZp.js";import"./runtimeContext-Cw7GHtwp.js";import"./Toolbar-CMdIY8Zj.js";import"./IconButton-D5mRMUCb.js";import"./IconButton-DSENFRag.js";import"./listItemIconClasses-DsWwoGm5.js";import"./ListContext-Ck__g24J.js";import"./listItemTextClasses-DhSbipbj.js";import"./useSlot-BDGGiRla.js";import"./resolveComponentProps-Cr13QVQ8.js";import"./dividerClasses-BqPsrmCt.js";import"./Grow-SjjAWBSH.js";import"./Modal-DT98mAxm.js";import"./useSlotProps-C5tgyCQW.js";import"./getThemeProps-BEaVCLc9.js";import"./useControlled-ojhLLIC7.js";const M={title:"Atoms/Card",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
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
