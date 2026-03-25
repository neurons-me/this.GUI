import{j as a,a as r}from"./iframe-DzQ8qlS5.js";import{C as t}from"./Card-ByBfhW9-.js";import"./Button-C4I8Jen7.js";import{S as s}from"./Stack-BWXDYBao.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-CEEYXBBa.js";import"./Icon-4frSiLka.js";import"./Button-BFu9Bpz3.js";import"./ButtonBase-B1YySNdu.js";import"./TransitionGroupContext-dQxgozz0.js";import"./useForkRef-DYkjEL9P.js";import"./CircularProgress-uyQXuKQe.js";import"./getThemeProps-DZDwyubZ.js";const f={title:"Atoms/Card",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
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
`}}},argTypes:{variant:{control:{type:"select"},options:["elevation","outlined"]},raised:{control:{type:"boolean"}},elevation:{control:{type:"range",min:0,max:24,step:1}}}},e={render:()=>a.jsxs(s,{spacing:4,sx:{padding:4,width:"50vw",minWidth:300},children:[a.jsxs(t,{sx:{p:2},children:[a.jsx(r,{variant:"h6",children:"Basic Card"}),a.jsx(r,{variant:"body2",children:"Default elevation."})]}),a.jsxs(t,{variant:"outlined",sx:{p:2},children:[a.jsx(r,{variant:"h6",children:"Outlined Card"}),a.jsx(r,{variant:"body2",children:"Uses a border instead of shadow."})]}),a.jsxs(t,{raised:!0,sx:{p:2},children:[a.jsx(r,{variant:"h6",children:"Raised Card"}),a.jsx(r,{variant:"body2",children:"Uses the `raised` prop for higher elevation."})]})]})};var n,o,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const b=["Variants"];export{e as Variants,b as __namedExportsOrder,f as default};
