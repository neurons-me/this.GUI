import{l as E,j as e,B as o,a as t}from"./iframe-BNfi7WN_.js";import{u as I}from"./useInsets-oei4kGsG.js";import"./preload-helper-Dp1pzeXC.js";const i=({children:n,sx:a,maxWidth:q="100%",component:V="section",bgcolor:p,colorVariant:u,padding:y,height:h,marginTop:b,marginBottom:f,marginLeft:x,marginRight:T})=>{const r=I(),s=E(),C=c=>{if(!c)return!1;if(c.includes(".")){const P=c.split(".");let m=s.palette;for(const v of P)if(m&&v in m)m=m[v];else return!1;return!0}return c in s.palette};let d;return p?d=(C(p),p):u&&s.palette.section&&u in s.palette.section&&(d=s.palette.section[u]),e.jsx(o,{component:V,sx:{width:`calc(100vw - ${r.left+r.right}px)`,height:h||`calc(100vh - ${r.top+r.bottom}px)`,marginTop:b!==void 0?b:r.top,marginBottom:f!==void 0?f:r.bottom,marginLeft:x!==void 0?x:r.left,marginRight:T!==void 0?T:r.right,maxWidth:q,padding:y!==void 0?y:{xs:2,sm:3,md:4},...d?{bgcolor:d}:{},...a},children:n})};i.__docgenInfo={description:"",methods:[],displayName:"Section",props:{id:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},sx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""},colorVariant:{required:!1,tsType:{name:"unknown"},description:""},bgcolor:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},component:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"",defaultValue:{value:"'section'",computed:!1}},elevation:{required:!1,tsType:{name:"number"},description:""},padded:{required:!1,tsType:{name:"boolean"},description:""},centered:{required:!1,tsType:{name:"boolean"},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:""},maxWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"'100%'",computed:!1}},padding:{required:!1,tsType:{name:"union",raw:"number | string | Record<string, any>",elements:[{name:"number"},{name:"string"},{name:"Record",elements:[{name:"string"},{name:"any"}],raw:"Record<string, any>"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},marginTop:{required:!1,tsType:{name:"union",raw:"number | string | Record<string, any>",elements:[{name:"number"},{name:"string"},{name:"Record",elements:[{name:"string"},{name:"any"}],raw:"Record<string, any>"}]},description:""},marginBottom:{required:!1,tsType:{name:"union",raw:"number | string | Record<string, any>",elements:[{name:"number"},{name:"string"},{name:"Record",elements:[{name:"string"},{name:"any"}],raw:"Record<string, any>"}]},description:""},marginLeft:{required:!1,tsType:{name:"union",raw:"number | string | Record<string, any>",elements:[{name:"number"},{name:"string"},{name:"Record",elements:[{name:"string"},{name:"any"}],raw:"Record<string, any>"}]},description:""},marginRight:{required:!1,tsType:{name:"union",raw:"number | string | Record<string, any>",elements:[{name:"number"},{name:"string"},{name:"Record",elements:[{name:"string"},{name:"any"}],raw:"Record<string, any>"}]},description:""}}};const A={title:"Atoms/Section",component:i,tags:["autodocs"],decorators:[n=>e.jsx("div",{style:{padding:0,minHeight:400},children:e.jsx(n,{})})],parameters:{docs:{description:{component:`
The **Section** atom is a responsive container designed to create consistent layout sections that respect This.GUI’s **layout insets** and **theme palette**.

It supports theming via the \`section\` palette keys (\`default\`, \`subtle\`, \`strong\`) and allows custom background colors for flexibility.

---
## Features
- Reacts to global layout insets for responsive spacing.
- Provides unified paddings with theme scaling.
- Accepts **custom backgroundColor**, or one from \`theme.palette.section\`.
- Supports responsive padding, height, and alignment.
- Can wrap any children content.

---
## Margin Props
Section supports **margin props** for controlling the outer spacing around the section:

- \`marginTop\`
- \`marginBottom\`
- \`marginLeft\`
- \`marginRight\`

Each of these can be a \`number\`, \`string\`, or a **breakpoint object** (e.g. \`{ xs: 2, sm: 4, md: 6 }\`) for responsive margins.

If not provided, Section will use the layout insets as fallback margins to ensure consistent spacing with the overall layout.

---
## Key Props
- \`colorVariant?: 'default' | 'subtle' | 'strong'\` — Selects section background color from theme.
- \`bgcolor?: string\` — Overrides the background with a custom color.
- \`padding?: number | string | object\` — Adjusts inner spacing responsively.
- \`height?: number | string\` — Sets the vertical height.
- \`sx?: object\` — MUI system style overrides.
- \`marginTop?: number | string | object\`
- \`marginBottom?: number | string | object\`
- \`marginLeft?: number | string | object\`
- \`marginRight?: number | string | object\`

---
## Basic usage (React)
~~~tsx
import { Section, Typography } from '@/gui/atoms';

<Section colorVariant="default" padding={4}>
  <Typography variant="h4">Welcome</Typography>
  <Typography>Section content goes here.</Typography>
</Section>

// Example with margin props
<Section colorVariant="subtle" padding={4} marginTop={2} marginBottom={3}>
  <Typography variant="h5">Section with Margins</Typography>
  <Typography>Section content with custom top and bottom margins.</Typography>
</Section>
~~~

---
## Declarative JSON / Config usage
~~~json
{
  "type": "Section",
  "props": {
    "colorVariant": "subtle",
    "padding": 4,
    "marginTop": 2,
    "marginBottom": 3,
    "children": [
      { "type": "Typography", "props": { "variant": "h5", "children": "Hello world" } },
      { "type": "Typography", "props": { "children": "This is a declarative section example." } }
    ]
  }
}
~~~
        `}}},argTypes:{colorVariant:{control:{type:"select"},options:["default","subtle","strong"],description:"Predefined section variant based on theme.palette.section"},bgcolor:{control:"color",description:"Custom background color override"},padding:{control:{type:"number"},description:"Internal padding"},height:{control:{type:"text"},description:"Height (px, %, vh, etc.)"}},args:{colorVariant:"default",padding:4,height:"auto"}},g={render:n=>e.jsxs(i,{...n,children:[e.jsx(t,{variant:"h5",sx:{mb:1},children:"Playground Section"}),e.jsx(t,{variant:"body2",children:"Easily tweak padding, background, and height."})]})},l={render:n=>e.jsxs(o,{sx:{display:"flex",flexDirection:"column",gap:4},children:[e.jsxs(o,{children:[e.jsx(t,{variant:"h6",gutterBottom:!0,children:"Color Variants"}),e.jsx(o,{sx:{display:"grid",gap:2},children:["default","subtle","strong"].map(a=>e.jsxs(i,{...n,colorVariant:a,padding:3,children:[e.jsx(t,{variant:"subtitle1",children:a}),e.jsxs(t,{variant:"body2",children:["theme.palette.section.",a]})]},a))})]}),e.jsxs(o,{children:[e.jsx(t,{variant:"h6",gutterBottom:!0,children:"Custom Background"}),e.jsxs(i,{...n,bgcolor:"#2fb0a3ff",padding:4,children:[e.jsx(t,{variant:"subtitle1",children:"Custom bgcolor"}),e.jsx(t,{variant:"body2",children:"Manual background override"})]})]}),e.jsxs(o,{children:[e.jsx(t,{variant:"h6",gutterBottom:!0,children:"Responsive"}),e.jsxs(i,{...n,padding:{xs:2,sm:4,md:6},marginTop:{xs:1,sm:2,md:4},marginBottom:{xs:1,sm:3,md:5},children:[e.jsx(t,{variant:"subtitle1",children:"Responsive spacing"}),e.jsx(t,{variant:"body2",children:"Resize viewport to test"})]})]})]})};var j,R,S;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <Section {...args}>
      <Typography variant="h5" sx={{
      mb: 1
    }}>Playground Section</Typography>
      <Typography variant="body2">Easily tweak padding, background, and height.</Typography>
    </Section>
}`,...(S=(R=g.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var w,B,k;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    gap: 4
  }}>
      <Box>
        <Typography variant="h6" gutterBottom>Color Variants</Typography>
        <Box sx={{
        display: 'grid',
        gap: 2
      }}>
          {(['default', 'subtle', 'strong'] as const).map(variant => <Section key={variant} {...args} colorVariant={variant} padding={3}>
              <Typography variant="subtitle1">{variant}</Typography>
              <Typography variant="body2">
                theme.palette.section.{variant}
              </Typography>
            </Section>)}
        </Box>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>Custom Background</Typography>
        <Section {...args} bgcolor="#2fb0a3ff" padding={4}>
          <Typography variant="subtitle1">Custom bgcolor</Typography>
          <Typography variant="body2">Manual background override</Typography>
        </Section>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>Responsive</Typography>
        <Section {...args} padding={{
        xs: 2,
        sm: 4,
        md: 6
      }} marginTop={{
        xs: 1,
        sm: 2,
        md: 4
      }} marginBottom={{
        xs: 1,
        sm: 3,
        md: 5
      }}>
          <Typography variant="subtitle1">Responsive spacing</Typography>
          <Typography variant="body2">Resize viewport to test</Typography>
        </Section>
      </Box>
    </Box>
}`,...(k=(B=l.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};const D=["Playground","Variants"];export{g as Playground,l as Variants,D as __namedExportsOrder,A as default};
