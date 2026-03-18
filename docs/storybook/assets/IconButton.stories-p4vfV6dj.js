import{j as e}from"./iframe-C1GRP0hj.js";import{I as r}from"./IconButton-Dr2rgWnv.js";import{I as o}from"./Icon-K6w2oQgw.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-Cgo9HMnL.js";import"./clsx-B-dksMZM.js";import"./memoTheme-q_hzTFOc.js";import"./styled-8fWbaqUV.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./ButtonBase-rOZxXEMH.js";import"./TransitionGroupContext-qNdRr-hk.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./useForkRef-BhU-CSAb.js";import"./useEventCallback-Bs6yfZ5k.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B-nFzJrp.js";const J={title:"Atoms/Forms & Inputs/IconButton",component:r,tags:["autodocs"],decorators:[a=>e.jsx("div",{style:{padding:16,minHeight:200},children:e.jsx(a,{})})],parameters:{docs:{description:{component:`
The **IconButton** atom is a thin wrapper around MUI's \`MuiIconButton\`, staying faithful to its API and polymorphism (\`component\`).

In **declarative** mode (resolver), you can pass an \`icon\` token (e.g., \`"lucide:menu"\`, \`"mui:Close"\`) and it will render through the Icon registry. You can also style the icon with \`iconSx\` while using \`sx\` for the button root.

---
## React usage
~~~jsx
<IconButton color="primary" size="medium" aria-label="open menu">
  <Icon name="lucide:menu" />
</IconButton>
~~~

## Declarative JSON / Resolver
~~~json
{
  "type": "IconButton",
  "props": {
    "color": "primary",
    "size": "medium",
    "icon": "lucide:menu",
    "sx": { "border": "1px solid", "borderColor": "divider" },
    "iconSx": { "opacity": 0.9 }
  }
}
~~~
        `}},controls:{exclude:["component","children"]}},argTypes:{color:{control:{type:"select"},options:["inherit","default","primary","secondary","success","error","info","warning"]},size:{control:{type:"radio"},options:["small","medium","large"]},edge:{control:{type:"radio"},options:["start","end",!1]},disabled:{control:"boolean"},sx:{control:"object"}},args:{color:"default",size:"medium",edge:!1,disabled:!1,sx:{},children:void 0}},n={render:a=>e.jsx(r,{...a,"aria-label":"menu",children:e.jsx(o,{name:"lucide:menu"})})},t={render:()=>e.jsx("div",{style:{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap"},children:["default","primary","secondary","success","info","warning","error"].map(a=>e.jsx(r,{color:a,"aria-label":a,children:e.jsx(o,{name:"mui:Favorite"})},a))})},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[e.jsx(r,{size:"small","aria-label":"small",children:e.jsx(o,{name:"lucide:bell"})}),e.jsx(r,{size:"medium","aria-label":"medium",children:e.jsx(o,{name:"lucide:bell"})}),e.jsx(r,{size:"large","aria-label":"large",children:e.jsx(o,{name:"lucide:bell"})})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[e.jsx(r,{edge:"start","aria-label":"start",children:e.jsx(o,{name:"lucide:chevron-left"})}),e.jsx(r,{edge:"end","aria-label":"end",children:e.jsx(o,{name:"lucide:chevron-right"})})]})},l={render:()=>e.jsx(r,{sx:{border:"1px solid",borderColor:"divider"},"aria-label":"styled",children:e.jsx(o,{name:"mui:Close"})})};var c,d,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <IconButton {...args} aria-label="menu">
      <Icon name="lucide:menu" />
    </IconButton>
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,p,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      {(['default', 'primary', 'secondary', 'success', 'info', 'warning', 'error'] as const).map(c => <IconButton key={c} color={c} aria-label={c}>
          <Icon name="mui:Favorite" />
        </IconButton>)}
    </div>
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var x,I,h;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }}>
      <IconButton size="small" aria-label="small">
        <Icon name="lucide:bell" />
      </IconButton>
      <IconButton size="medium" aria-label="medium">
        <Icon name="lucide:bell" />
      </IconButton>
      <IconButton size="large" aria-label="large">
        <Icon name="lucide:bell" />
      </IconButton>
    </div>
}`,...(h=(I=s.parameters)==null?void 0:I.docs)==null?void 0:h.source}}};var y,b,f;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }}>
      <IconButton edge="start" aria-label="start">
        <Icon name="lucide:chevron-left" />
      </IconButton>
      <IconButton edge="end" aria-label="end">
        <Icon name="lucide:chevron-right" />
      </IconButton>
    </div>
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var j,v,B;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <IconButton sx={{
    border: '1px solid',
    borderColor: 'divider'
  }} aria-label="styled">
      <Icon name="mui:Close" />
    </IconButton>
}`,...(B=(v=l.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};const N=["Playground","Colors","Sizes","WithEdge","WithSx"];export{t as Colors,n as Playground,s as Sizes,i as WithEdge,l as WithSx,N as __namedExportsOrder,J as default};
