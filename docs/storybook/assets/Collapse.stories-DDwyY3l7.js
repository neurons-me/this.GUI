import{j as e,r as C,a as s}from"./iframe-C2qc3tsM.js";import{C as a}from"./Collapse-rvt7uJv0.js";import{S as h}from"./Stack-CJpHzZFp.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-IgnIQ_tD.js";import"./TransitionGroupContext-BNvVfOmo.js";import"./useForkRef-DZ9CAFXo.js";import"./getThemeProps-DGpb-X_S.js";const f={title:"Molecules/Collapse",component:a,tags:["autodocs"],decorators:[o=>e.jsx("div",{style:{padding:16,minHeight:220},children:e.jsx(o,{})})],parameters:{docs:{description:{component:`
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
        `}},controls:{exclude:["component","children","as","timeout","easing"]}},argTypes:{in:{control:"boolean",description:"Show/Hide content"},orientation:{control:{type:"radio"},options:["vertical","horizontal"]},collapsedSize:{control:"text",description:"number or CSS size"},unmountOnExit:{control:"boolean"},mountOnEnter:{control:"boolean"},appear:{control:"boolean"},sx:{control:"object"}},args:{in:!0,orientation:"vertical",collapsedSize:0,unmountOnExit:!1,mountOnEnter:!1,appear:!1,sx:{},children:void 0}},t=({label:o="Collapsible content"})=>e.jsx("div",{style:{padding:12,border:"1px solid var(--mui-palette-divider)",borderRadius:8,background:"var(--mui-palette-background-paper)",width:200},children:o}),n={render:o=>e.jsx(a,{...o,children:e.jsx(t,{})})},r={render:()=>{const[o,m]=C.useState(!0);return e.jsxs(h,{spacing:2,children:[e.jsx(s,{variant:"h6",children:"Basic Collapse"}),e.jsx(a,{in:o,children:e.jsx(t,{label:"Basic Collapsible Content"})}),e.jsx("button",{onClick:()=>m(!o),children:"Toggle Collapse"}),e.jsx(s,{variant:"h6",children:"Horizontal Collapse"}),e.jsx(a,{orientation:"horizontal",in:o,children:e.jsx(t,{label:"Horizontal Collapsible Content"})})]})}};var l,i,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <Collapse {...args}><DemoBlock /></Collapse>
}`,...(p=(i=n.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,d,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(true);
    return <Stack spacing={2}>
        <Typography variant="h6">Basic Collapse</Typography>
        <Collapse in={open}>
          <DemoBlock label="Basic Collapsible Content" />
        </Collapse>
        <button onClick={() => setOpen(!open)}>
          Toggle Collapse
        </button>

        <Typography variant="h6">Horizontal Collapse</Typography>
        <Collapse orientation="horizontal" in={open}>
          <DemoBlock label="Horizontal Collapsible Content" />
        </Collapse>
      </Stack>;
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const z=["Playground","Variants"];export{n as Playground,r as Variants,z as __namedExportsOrder,f as default};
