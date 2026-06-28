import{j as o,r as C,a as i}from"./iframe-D3kdS_Ub.js";import{C as n}from"./Collapse-BHtNA79k.js";import"./Button-Bvsv15Nb.js";import"./Chip-AI67ht8y.js";import"./Paper-BLqP_ThU.js";import"./Hero-D1ARQo6k.js";import"./InspectorToggle-B44Z1qvW.js";import"./ListItemIcon-QHJwmHr3.js";import"./ListItemText-_077PsP6.js";import"./Drawer-Dq0mrwVn.js";import{S as h}from"./Stack-Dotb41iV.js";import"./Tooltip-DUrGEKTJ.js";import"./preload-helper-Dp1pzeXC.js";import"./Grow-CCwjpSQx.js";import"./useForkRef-2K53oxYJ.js";import"./TransitionGroupContext-rD0k-wnc.js";import"./Icon-CXtYlj0b.js";import"./Button-CgnwsOCQ.js";import"./ButtonBase-ZURSVDQf.js";import"./CircularProgress-Bk_e6z-b.js";import"./createSvgIcon-Rh2ioi1Z.js";import"./Paper-D3ZWzLoD.js";import"./renderer-CrhpmlvX.js";import"./runtimeContext-C7CBx7OH.js";import"./Toolbar-DK5_ylbE.js";import"./IconButton-DP73IHnG.js";import"./IconButton-BqokRRXF.js";import"./listItemIconClasses-Dv7WtwhG.js";import"./ListContext-BbXpk_HZ.js";import"./listItemTextClasses-BmzBaLhy.js";import"./useSlot-BrC-uMuC.js";import"./resolveComponentProps-C1JfeoUS.js";import"./dividerClasses-DlqItYuU.js";import"./Modal-CnGFTZzj.js";import"./useSlotProps-cU1fxryi.js";import"./getThemeProps-L_ZyXWLY.js";import"./useControlled-DWJouKPk.js";const $={title:"Molecules/Collapse",component:n,tags:["autodocs"],decorators:[e=>o.jsx("div",{style:{padding:16,minHeight:220},children:o.jsx(e,{})})],parameters:{docs:{description:{component:`
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
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const oo=["Playground","Variants"];export{r as Playground,t as Variants,oo as __namedExportsOrder,$ as default};
