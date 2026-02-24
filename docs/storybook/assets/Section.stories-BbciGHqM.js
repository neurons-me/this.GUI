import{j as e}from"./iframe-BYWeTbVw.js";import{u as J}from"./useGuiTheme-z8jC6V9j.js";import{u as K}from"./useInsets-D4ZqczkW.js";import{B as f}from"./Box-D2VrL_Qb.js";import{T as r}from"./Typography-BTe5Sves.js";import{B as k}from"./Button-DtHjla8Z.js";import"./preload-helper-Dp1pzeXC.js";import"./useTheme-hQc6TNga.js";import"./Box-DrLvxTuL.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./clsx-B-dksMZM.js";import"./Typography-DYoqaNaH.js";import"./memoTheme-BnPFCUjU.js";import"./styled-BR6p0OHR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Icon-_58-9ZDr.js";import"./Button-WaiehS_p.js";import"./ButtonBase-tHL4M-xw.js";import"./TransitionGroupContext-DUPMztxk.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./useForkRef-BLLRJTal.js";import"./useEventCallback-KgHUuHRa.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CDk05OBk.js";const a=({children:n,sx:o,maxWidth:Y="100%",component:$="section",bgcolor:i,colorVariant:b,padding:x,height:v,marginTop:T,marginBottom:S,marginLeft:j,marginRight:R})=>{const t=K(),s=J(),D=d=>{if(!d)return!1;if(d.includes(".")){const F=d.split(".");let c=s.palette;for(const w of F)if(c&&w in c)c=c[w];else return!1;return!0}return d in s.palette};let p;return i?p=(D(i),i):b&&s.palette.section&&b in s.palette.section&&(p=s.palette.section[b]),e.jsx(f,{component:$,sx:{width:`calc(100vw - ${t.left+t.right}px)`,height:v||`calc(100vh - ${t.top+t.bottom}px)`,marginTop:T!==void 0?T:t.top,marginBottom:S!==void 0?S:t.bottom,marginLeft:j!==void 0?j:t.left,marginRight:R!==void 0?R:t.right,maxWidth:Y,padding:x!==void 0?x:{xs:2,sm:3,md:4},...p?{bgcolor:p}:{},...o},children:n})};a.__docgenInfo={description:"",methods:[],displayName:"Section",props:{id:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},sx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""},colorVariant:{required:!1,tsType:{name:"unknown"},description:""},bgcolor:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},component:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"",defaultValue:{value:"'section'",computed:!1}},elevation:{required:!1,tsType:{name:"number"},description:""},padded:{required:!1,tsType:{name:"boolean"},description:""},centered:{required:!1,tsType:{name:"boolean"},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:""},maxWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"'100%'",computed:!1}},padding:{required:!1,tsType:{name:"union",raw:"number | string | Record<string, any>",elements:[{name:"number"},{name:"string"},{name:"Record",elements:[{name:"string"},{name:"any"}],raw:"Record<string, any>"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},marginTop:{required:!1,tsType:{name:"union",raw:"number | string | Record<string, any>",elements:[{name:"number"},{name:"string"},{name:"Record",elements:[{name:"string"},{name:"any"}],raw:"Record<string, any>"}]},description:""},marginBottom:{required:!1,tsType:{name:"union",raw:"number | string | Record<string, any>",elements:[{name:"number"},{name:"string"},{name:"Record",elements:[{name:"string"},{name:"any"}],raw:"Record<string, any>"}]},description:""},marginLeft:{required:!1,tsType:{name:"union",raw:"number | string | Record<string, any>",elements:[{name:"number"},{name:"string"},{name:"Record",elements:[{name:"string"},{name:"any"}],raw:"Record<string, any>"}]},description:""},marginRight:{required:!1,tsType:{name:"union",raw:"number | string | Record<string, any>",elements:[{name:"number"},{name:"string"},{name:"Record",elements:[{name:"string"},{name:"any"}],raw:"Record<string, any>"}]},description:""}}};const Te={title:"Atoms/Containers/Section",component:a,tags:["autodocs"],decorators:[n=>e.jsx("div",{style:{padding:0,minHeight:400},children:e.jsx(n,{})})],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{colorVariant:{control:{type:"select"},options:["default","subtle","strong"],description:"Predefined section variant based on theme.palette.section"},bgcolor:{control:"color",description:"Custom background color override"},padding:{control:{type:"number"},description:"Internal padding"},height:{control:{type:"text"},description:"Height (px, %, vh, etc.)"}},args:{colorVariant:"default",padding:4,height:"auto"}},m={render:n=>e.jsxs(a,{...n,children:[e.jsx(r,{variant:"h5",sx:{mb:1},children:"Playground Section"}),e.jsx(r,{variant:"body2",children:"Easily tweak padding, background, and height."})]})},g={render:n=>e.jsx(f,{sx:{display:"grid",gap:2},children:["default","subtle","strong"].map(o=>e.jsxs(a,{...n,colorVariant:o,padding:3,children:[e.jsxs(r,{variant:"subtitle1",children:["colorVariant = ",o]}),e.jsxs(r,{variant:"body2",children:["This uses ",e.jsxs("code",{children:["theme.palette.section.",o]})]})]},o))})},l={args:{padding:4,bgcolor:"#2fb0a3ff"},render:n=>e.jsxs(a,{...n,children:[e.jsx(r,{variant:"h6",sx:{color:"text.primary"},children:"Custom background color"}),e.jsxs(r,{variant:"body2",sx:{color:"text.secondary"},children:["You can set ",e.jsx("code",{children:"bgcolor"})," manually for any theme or design, and it will maintain good contrast for both light and dark text."]})]})},u={render:()=>e.jsxs(a,{colorVariant:"default",padding:4,children:[e.jsx(r,{variant:"h5",sx:{mb:1},children:"Section with Composition"}),e.jsxs(f,{display:"flex",gap:2,children:[e.jsx(k,{variant:"contained",color:"primary",children:"Accept"}),e.jsx(k,{variant:"outlined",color:"secondary",children:"Cancel"})]})]})},y={args:{padding:{xs:2,sm:4,md:6}},render:n=>e.jsxs(a,{...n,children:[e.jsx(r,{variant:"h5",children:"Responsive Padding"}),e.jsx(r,{variant:"body2",children:"Resize the viewport to see the padding adjust responsively."})]})},h={args:{marginTop:{xs:1,sm:2,md:4},marginBottom:{xs:1,sm:3,md:5}},render:n=>e.jsxs(a,{...n,padding:3,children:[e.jsx(r,{variant:"h5",children:"Responsive Margins"}),e.jsx(r,{variant:"body2",children:"Adjusts top and bottom margins responsively across breakpoints."})]})};var B,q,C;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <Section {...args}>
      <Typography variant="h5" sx={{
      mb: 1
    }}>Playground Section</Typography>
      <Typography variant="body2">Easily tweak padding, background, and height.</Typography>
    </Section>
}`,...(C=(q=m.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};var V,P,E;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <Box sx={{
    display: 'grid',
    gap: 2
  }}>
      {(['default', 'subtle', 'strong'] as const).map(variant => <Section key={variant} {...args} colorVariant={variant} padding={3}>
          <Typography variant="subtitle1">colorVariant = {variant}</Typography>
          <Typography variant="body2">
            This uses <code>theme.palette.section.{variant}</code>
          </Typography>
        </Section>)}
    </Box>
}`,...(E=(P=g.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var I,A,M;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    padding: 4,
    bgcolor: '#2fb0a3ff'
  },
  render: args => <Section {...args}>
      <Typography variant="h6" sx={{
      color: 'text.primary'
    }}>
        Custom background color
      </Typography>
      <Typography variant="body2" sx={{
      color: 'text.secondary'
    }}>
        You can set <code>bgcolor</code> manually for any theme or design, and it will maintain good contrast for both light and dark text.
      </Typography>
    </Section>
}`,...(M=(A=l.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var N,W,_;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Section colorVariant="default" padding={4}>
      <Typography variant="h5" sx={{
      mb: 1
    }}>Section with Composition</Typography>
      <Box display="flex" gap={2}>
        <Button variant="contained" color="primary">Accept</Button>
        <Button variant="outlined" color="secondary">Cancel</Button>
      </Box>
    </Section>
}`,...(_=(W=u.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var H,L,O;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    padding: {
      xs: 2,
      sm: 4,
      md: 6
    }
  },
  render: args => <Section {...args}>
      <Typography variant="h5">Responsive Padding</Typography>
      <Typography variant="body2">
        Resize the viewport to see the padding adjust responsively.
      </Typography>
    </Section>
}`,...(O=(L=y.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var z,G,U;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    marginTop: {
      xs: 1,
      sm: 2,
      md: 4
    },
    marginBottom: {
      xs: 1,
      sm: 3,
      md: 5
    }
  },
  render: args => <Section {...args} padding={3}>
      <Typography variant="h5">Responsive Margins</Typography>
      <Typography variant="body2">
        Adjusts top and bottom margins responsively across breakpoints.
      </Typography>
    </Section>
}`,...(U=(G=h.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};const Se=["Playground","Variants","CustomBackground","WithContentComposition","ResponsivePadding","ResponsiveMargins"];export{l as CustomBackground,m as Playground,h as ResponsiveMargins,y as ResponsivePadding,g as Variants,u as WithContentComposition,Se as __namedExportsOrder,Te as default};
