import{j as e}from"./iframe-BzW5L-sB.js";import{C as r}from"./Collapse-D0wZxnaQ.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CMGnC3nT.js";import"./TransitionGroupContext-DBebgn_y.js";import"./useForkRef-BZw98wdx.js";const w={title:"Atoms/Content/Collapse",component:r,tags:["autodocs"],decorators:[o=>e.jsx("div",{style:{padding:16,minHeight:220},children:e.jsx(o,{})})],parameters:{docs:{description:{component:`
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
        `}},controls:{exclude:["component","children","as","timeout","easing"]}},argTypes:{in:{control:"boolean",description:"Show/Hide content"},orientation:{control:{type:"radio"},options:["vertical","horizontal"]},collapsedSize:{control:"text",description:"number or CSS size"},unmountOnExit:{control:"boolean"},mountOnEnter:{control:"boolean"},appear:{control:"boolean"},sx:{control:"object"}},args:{in:!0,orientation:"vertical",collapsedSize:0,unmountOnExit:!1,mountOnEnter:!1,appear:!1,sx:{},children:void 0}},l=({label:o="Collapsible content",...i})=>e.jsx("div",{...i,style:{padding:12,border:"1px solid var(--mui-palette-divider)",borderRadius:8,background:"var(--mui-palette-background-paper)",...i.style},children:o}),n={render:o=>e.jsx(r,{...o,children:e.jsx(l,{})})},s={args:{orientation:"horizontal",in:!0,collapsedSize:0},render:o=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx(r,{...o,children:e.jsx(l,{label:"Horizontal content",style:{width:240}})}),e.jsx("span",{style:{opacity:.7,fontSize:12},children:'(Try toggling the \\"in\\" control)'})]})},t={args:{sx:{border:"1px dashed",borderColor:"divider",p:1}},render:o=>e.jsx(r,{...o,children:e.jsx(l,{label:"Styled via sx on Collapse"})})},a={args:{unmountOnExit:!0,in:!1},render:o=>e.jsxs("div",{children:[e.jsx("p",{style:{margin:0,opacity:.75},children:"Content is removed from the DOM when closed."}),e.jsx(r,{...o,children:e.jsx(l,{label:"Unmounts when closed"})})]})};var d,p,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Collapse {...args}><DemoBlock /></Collapse>
}`,...(c=(p=n.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,u,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,h,v;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(v=(h=t.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var y,C,b;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(b=(C=a.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};const D=["Playground","Horizontal","WithSx","UnmountOnExit"];export{s as Horizontal,n as Playground,a as UnmountOnExit,t as WithSx,D as __namedExportsOrder,w as default};
