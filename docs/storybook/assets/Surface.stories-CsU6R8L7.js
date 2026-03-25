import{aA as y,k as b,j as e,g as l,a as s,T as x}from"./iframe-8EaQ1C0g.js";import"./Button-Ck1yJXlA.js";import"./Paper-qkABWcDk.js";import{S}from"./Stack-w3FurTvB.js";import{P as k}from"./Paper-Cnfm5CEA.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-DOcDJgdS.js";import"./Button-CqN9UM-9.js";import"./ButtonBase-DnuzHV0k.js";import"./TransitionGroupContext-BDq06VYZ.js";import"./useForkRef-B_8DPUN9.js";import"./CircularProgress-CF5CFykq.js";import"./getThemeProps-Cnx6th0B.js";const r=y.forwardRef((t,h)=>{const{variant:o="solid",color:T,elevation:m,sx:n,...v}=t,a=b(),c=o==="default"||o==="elevation"?"solid":o==="outlined"?"outline":o,f=c==="outline"?"outlined":"elevation",g=()=>{switch(c){case"outline":return{border:`1px solid ${a.palette.divider}`};case"glass":return{backgroundColor:l(a.palette.background.paper,.6),backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",border:`1px solid ${l(a.palette.divider,.6)}`,boxShadow:"none","@supports not (backdrop-filter: blur(12px))":{backgroundColor:l(a.palette.background.paper,.9)}};case"card":return{backgroundColor:a.palette.background.paper,borderRadius:a.shape.borderRadius,boxShadow:a.shadows[2]};case"solid":return{backgroundColor:a.palette.background.paper};default:return{}}};return e.jsx(k,{ref:h,variant:f,elevation:m,sx:[g(),...Array.isArray(n)?n:n?[n]:[]],...v})});r.displayName="Surface";r.__docgenInfo={description:`Surface
-------
A visual container primitive.
Acts as a thin wrapper around MUI's Paper.
Supports elevation, variant, square, and sx overrides.`,methods:[],displayName:"Surface",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'elevation' | 'solid' | 'outline' | 'outlined' | 'glass' | 'card'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'elevation'"},{name:"literal",value:"'solid'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'glass'"},{name:"literal",value:"'card'"}]},description:`The variant to use.
'default' | 'elevation': Standard surface with shadow.
'solid': A surface with a solid background and optional shadow.
'outline': A surface with a border.
'glass': A semi-transparent surface with a blurred background.
'card': A pre-styled surface for card-like containers.`},color:{required:!1,tsType:{name:"any"},description:""}}};const _={title:"Atoms/Surface",component:r,tags:["autodocs"],parameters:{layout:"centered",decorators:[t=>e.jsx(x,{children:e.jsx(t,{})})],docs:{description:{component:`
The **Surface** atom is a fundamental container component, acting as a wrapper around MUI's \`Paper\`. It serves as the base "canvas" upon which other components and content are placed.
---
## Features
- Provides physical properties like elevation (shadow).
- Supports custom variants like \`glass\` for a blurred, semi-transparent effect, and \`outline\`.
- Can be configured to have square or rounded corners.
- Fully themeable and stylable via the \`sx\` prop.

---
## Key Props
- \`variant?: 'default' | 'glass' | 'outline'\`: The semantic preset for the surface style.
- \`elevation?: number\`: The shadow depth, from 0 to 24.
- \`square?: boolean\`: If \`true\`, the surface will have square corners.
- \`children\`: The content to be rendered inside the surface.
- \`sx?: object\`: For applying custom styles.

---
## Basic usage (React)
~~~tsx
import { Surface, Typography } from '@/gui/atoms';

<Surface elevation={3} sx={{ padding: 4, width: 300 }}>
  <Typography>This is a surface.</Typography>
</Surface>
~~~

---
## Declarative JSON / Config usage
The resolver can instantiate a Surface from a JSON spec, making it a core layout primitive.

~~~json
{
  "type": "Surface",
  "props": {
    "elevation": 1,
    "sx": { "padding": 2 },
    "children": {
      "type": "Typography",
      "props": {
        "children": "Content inside a resolved surface."
      }
    }
  }
}
~~~
`}}},argTypes:{variant:{control:{type:"select"},options:["default","glass","outline"],description:"The semantic style variant of the surface."},elevation:{control:{type:"range",min:0,max:24,step:1}},square:{control:{type:"boolean"}},color:{table:{disable:!0}}}},i={render:t=>e.jsxs(S,{spacing:4,sx:{padding:4,width:"50vw",minWidth:400,alignItems:"stretch"},children:[e.jsx(r,{variant:"default",elevation:2,sx:{p:2},children:e.jsx(s,{children:"Default Surface (elevation=2)"})}),e.jsx(r,{variant:"outline",elevation:3,sx:{p:2},children:e.jsx(s,{children:"Outline Variant (elevation=3)"})}),e.jsx(r,{variant:"glass",elevation:5,sx:{p:2,backgroundImage:"url(https://source.unsplash.com/random/400x200)",backgroundSize:"cover",backgroundPosition:"center"},children:e.jsx(s,{children:"Glass Variant (elevation=5)"})}),e.jsx(r,{variant:"default",elevation:8,sx:{p:2},children:e.jsx(s,{children:"Solid Variant (elevation=8)"})})]}),args:{}};var d,p,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Stack spacing={4} sx={{
    padding: 4,
    width: '50vw',
    minWidth: 400,
    alignItems: 'stretch'
  }}>
      <Surface variant="default" elevation={2} sx={{
      p: 2
    }}>
        <Typography>Default Surface (elevation=2)</Typography>
      </Surface>

      <Surface variant="outline" elevation={3} sx={{
      p: 2
    }}>
        <Typography>Outline Variant (elevation=3)</Typography>
      </Surface>

      <Surface variant="glass" elevation={5} sx={{
      p: 2,
      // Add a background for the glass effect to be visible in Storybook
      backgroundImage: 'url(https://source.unsplash.com/random/400x200)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
        <Typography>Glass Variant (elevation=5)</Typography>
      </Surface>

      <Surface variant="default" elevation={8} sx={{
      p: 2
    }}>
        <Typography>Solid Variant (elevation=8)</Typography>
      </Surface>
    </Stack>,
  args: {
    // Default args can be set here if needed
  }
}`,...(u=(p=i.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const W=["Variants"];export{i as Variants,W as __namedExportsOrder,_ as default};
