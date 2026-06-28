import{j as o,r as C,a as i}from"./iframe-Df6NujF0.js";import{C as n}from"./Collapse-V-lGPEMt.js";import"./Button-D9vmRegk.js";import"./Chip-BdfC3Ugd.js";import"./Paper-CBheul9W.js";import"./InspectorToggle-BJVFhmsH.js";import"./ListItemIcon-D22Kkc8f.js";import"./ListItemText-CBO1Kv1j.js";import"./Drawer-Bvdf8Gdt.js";import{S as h}from"./Stack-qh-TX1Xp.js";import"./Tooltip-CM7UURJg.js";import"./preload-helper-Dp1pzeXC.js";import"./Grow-DFm76bvH.js";import"./useForkRef-CevvUXbO.js";import"./TransitionGroupContext-DJpdnGjq.js";import"./Icon-C-wgURv6.js";import"./Button-d3vT2I27.js";import"./ButtonBase-B_X4AEO-.js";import"./CircularProgress-CXJzJnf2.js";import"./createSvgIcon-3pnZInSB.js";import"./Paper-CG1nIuW7.js";import"./renderer-BMj62cg7.js";import"./runtimeContext-BGyJJMBu.js";import"./Toolbar-CT9YI5vw.js";import"./IconButton-C4znVeLO.js";import"./IconButton-jEx60ebh.js";import"./listItemIconClasses-Bq3XQ_Cu.js";import"./ListContext-CrwpJsSy.js";import"./listItemTextClasses-Bu-9afeB.js";import"./useSlot-Bd-Wnahn.js";import"./resolveComponentProps-DWjNBBVn.js";import"./dividerClasses-CThCO9HN.js";import"./Modal-VkZWfyFy.js";import"./useSlotProps-DU24pzeu.js";import"./getThemeProps-CKjuCPoe.js";import"./useControlled-N2X3AJQ6.js";const Z={title:"Molecules/Collapse",component:n,tags:["autodocs"],decorators:[e=>o.jsx("div",{style:{padding:16,minHeight:220},children:o.jsx(e,{})})],parameters:{docs:{description:{component:`
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
        `}},controls:{exclude:["component","children","as","timeout","easing"]}},argTypes:{in:{control:"boolean",description:"Show/Hide content"},orientation:{control:{type:"radio"},options:["vertical","horizontal"]},collapsedSize:{control:"text",description:"number or CSS size"},unmountOnExit:{control:"boolean"},mountOnEnter:{control:"boolean"},appear:{control:"boolean"},sx:{control:"object"}},args:{in:!0,orientation:"vertical",collapsedSize:0,unmountOnExit:!1,mountOnEnter:!1,appear:!1,sx:{},children:void 0}},a=({label:e="Collapsible content"})=>o.jsx("div",{style:{padding:12,border:"1px solid var(--mui-palette-divider)",borderRadius:8,background:"var(--mui-palette-background-paper)",width:200},children:e}),r={render:e=>o.jsx(n,{...e,children:o.jsx(a,{})})},t={render:()=>{const[e,u]=C.useState(!0);return o.jsxs(h,{spacing:2,children:[o.jsx(i,{variant:"h6",children:"Basic Collapse"}),o.jsx(n,{in:e,children:o.jsx(a,{label:"Basic Collapsible Content"})}),o.jsx("button",{onClick:()=>u(!e),children:"Toggle Collapse"}),o.jsx(i,{variant:"h6",children:"Horizontal Collapse"}),o.jsx(n,{orientation:"horizontal",in:e,children:o.jsx(a,{label:"Horizontal Collapsible Content"})})]})}};var s,l,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <Collapse {...args}><DemoBlock /></Collapse>
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,d,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const $=["Playground","Variants"];export{r as Playground,t as Variants,$ as __namedExportsOrder,Z as default};
