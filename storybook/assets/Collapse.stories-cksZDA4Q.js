import{j as o,r as C,a as i}from"./iframe-DsRKGudf.js";import{C as n}from"./Collapse-_min-fPX.js";import"./Button-LiUEA2TU.js";import"./Chip-C8fm0eph.js";import"./Paper-CZuqLR2o.js";import"./InspectorToggle-B2-9R7tJ.js";import"./ListItemIcon-C9IEsNAm.js";import"./ListItemText-Dx2OxWN3.js";import"./Drawer-DWTuXBaB.js";import{S as h}from"./Stack-CIiqTG01.js";import"./Tooltip-DwxTrZJL.js";import"./preload-helper-Dp1pzeXC.js";import"./Grow-DUdPBg0C.js";import"./useForkRef-DaPdQACB.js";import"./TransitionGroupContext-gftPsmXQ.js";import"./Icon-C-KCwcAw.js";import"./Button-HEMqV7f1.js";import"./ButtonBase-BHgzLA4j.js";import"./CircularProgress-CBgE9hq-.js";import"./createSvgIcon-C4CP9IBQ.js";import"./Paper-CGP3T9PR.js";import"./renderer-X8EydWrl.js";import"./runtimeContext-k6DqlALu.js";import"./Toolbar-H6MAk1z7.js";import"./IconButton-BbGJVgc-.js";import"./IconButton-m_4K4KMU.js";import"./listItemIconClasses-Dkt3uDCe.js";import"./ListContext-Dg6a-o_V.js";import"./listItemTextClasses-RCKfP_HI.js";import"./useSlot-UY7wHEUA.js";import"./resolveComponentProps-DWU9FwiD.js";import"./dividerClasses-Bl7DWpUo.js";import"./Modal-CmcgpO8z.js";import"./useSlotProps-DnVOBi5c.js";import"./getThemeProps-B_l613BN.js";import"./useControlled-BTRy4wlV.js";const Z={title:"Molecules/Collapse",component:n,tags:["autodocs"],decorators:[e=>o.jsx("div",{style:{padding:16,minHeight:220},children:o.jsx(e,{})})],parameters:{docs:{description:{component:`
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
