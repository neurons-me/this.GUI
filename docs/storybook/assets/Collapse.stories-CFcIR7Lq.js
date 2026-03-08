import{j as e}from"./iframe-B8RbS7uw.js";import{C as r}from"./Collapse-Cj0GIqpi.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./useTheme-BwQ1aHS1.js";import"./styled-Cw_y6cYg.js";import"./memoTheme-DOBzPGVq.js";import"./utils-vtR6qNsB.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./TransitionGroupContext-RnyQTLj3.js";import"./index-CRbWBMRp.js";import"./index-BjD9Kw0B.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useForkRef-BVrKvtW-.js";const M={title:"Atoms/Content/Collapse",component:r,tags:["autodocs"],decorators:[o=>e.jsx("div",{style:{padding:16,minHeight:220},children:e.jsx(o,{})})],parameters:{docs:{description:{component:`
The **Collapse** atom is a thin wrapper around MUI's \`MuiCollapse\`, staying faithful to its API and polymorphism.

In **declarative** mode (resolver), it forwards MUI props as-is and supports granular styling via \`sx\` on the root.

---
## React usage
~~~jsx
const [open, setOpen] = React.useState(true);

<Collapse in={open}>
  <div style={{ padding: 12, border: '1px solid var(--mui-palette-divider)', borderRadius: 8 }}>
    Collapsible content
  </div>
</Collapse>
~~~

## Declarative JSON / Resolver
~~~json
{
  "type": "Collapse",
  "props": {
    "in": true,
    "orientation": "vertical",
    "sx": { "border": "1px dashed", "borderColor": "divider", "p": 1 }
  }
}
~~~
        `}},controls:{exclude:["component","children","as","timeout","easing"]}},argTypes:{in:{control:"boolean",description:"Show/Hide content"},orientation:{control:{type:"radio"},options:["vertical","horizontal"]},collapsedSize:{control:"text",description:"number or CSS size"},unmountOnExit:{control:"boolean"},mountOnEnter:{control:"boolean"},appear:{control:"boolean"},sx:{control:"object"}},args:{in:!0,orientation:"vertical",collapsedSize:0,unmountOnExit:!1,mountOnEnter:!1,appear:!1,sx:{},children:void 0}},i=({label:o="Collapsible content",...l})=>e.jsx("div",{...l,style:{padding:12,border:"1px solid var(--mui-palette-divider)",borderRadius:8,background:"var(--mui-palette-background-paper)",...l.style},children:o}),t={render:o=>e.jsx(r,{...o,children:e.jsx(i,{})})},n={args:{orientation:"horizontal",in:!0,collapsedSize:0},render:o=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx(r,{...o,children:e.jsx(i,{label:"Horizontal content",style:{width:240}})}),e.jsx("span",{style:{opacity:.7,fontSize:12},children:'(Try toggling the \\"in\\" control)'})]})},s={args:{sx:{border:"1px dashed",borderColor:"divider",p:1}},render:o=>e.jsx(r,{...o,children:e.jsx(i,{label:"Styled via sx on Collapse"})})},a={args:{unmountOnExit:!0,in:!1},render:o=>e.jsxs("div",{children:[e.jsx("p",{style:{margin:0,opacity:.75},children:"Content is removed from the DOM when closed."}),e.jsx(r,{...o,children:e.jsx(i,{label:"Unmounts when closed"})})]})};var d,p,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Collapse {...args}><DemoBlock /></Collapse>
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,u,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    in: true,
    collapsedSize: 0
  },
  render: args => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 8
  }}>
      <Collapse {...args}>
        <DemoBlock label="Horizontal content" style={{
        width: 240
      }} />
      </Collapse>
      <span style={{
      opacity: 0.7,
      fontSize: 12
    }}>(Try toggling the \\"in\\" control)</span>
    </div>
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,h,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    sx: {
      border: '1px dashed',
      borderColor: 'divider',
      p: 1
    }
  },
  render: args => <Collapse {...args}>
      <DemoBlock label="Styled via sx on Collapse" />
    </Collapse>
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var y,C,b;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    unmountOnExit: true,
    in: false
  },
  render: args => <div>
      <p style={{
      margin: 0,
      opacity: 0.75
    }}>Content is removed from the DOM when closed.</p>
      <Collapse {...args}>
        <DemoBlock label="Unmounts when closed" />
      </Collapse>
    </div>
}`,...(b=(C=a.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};const T=["Playground","Horizontal","WithSx","UnmountOnExit"];export{n as Horizontal,t as Playground,a as UnmountOnExit,s as WithSx,T as __namedExportsOrder,M as default};
