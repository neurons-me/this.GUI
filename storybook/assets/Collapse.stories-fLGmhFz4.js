import{j as o,r as C,a as i}from"./iframe-CQ6lVM9J.js";import{C as n}from"./Collapse-DHmOHeTX.js";import"./Button-Bga3uo1G.js";import"./Chip-CscAx2IV.js";import"./Paper-D8WVzIWP.js";import"./Hero-BhBBP0Ut.js";import"./InspectorToggle-BbXYsSh3.js";import"./ListItemIcon-DCr0ycU4.js";import"./ListItemText-C8xDBhIi.js";import"./Drawer-BF4TIoXU.js";import{S as h}from"./Stack-BfGxMVW8.js";import"./Tooltip-BmxVpoGu.js";import"./preload-helper-Dp1pzeXC.js";import"./Grow-DgFfonWO.js";import"./useForkRef-k3GaQ7M0.js";import"./TransitionGroupContext-BYAOwXFk.js";import"./Icon-BI0rS8fi.js";import"./Button-B4nkdwgI.js";import"./ButtonBase-CE1MUTHe.js";import"./CircularProgress-BnTShz3b.js";import"./createSvgIcon-DXDYc_1t.js";import"./Paper-CFRetAcS.js";import"./renderer-BQyOi2MF.js";import"./runtimeContext-v44hbRMa.js";import"./Toolbar-C_tizc0v.js";import"./IconButton-CyAqel-c.js";import"./IconButton-CAsbB3Lm.js";import"./listItemIconClasses-BIVBCVxw.js";import"./ListContext-HHAQ2WBE.js";import"./listItemTextClasses-BKGhee-O.js";import"./useSlot-Cm_bFkyb.js";import"./resolveComponentProps-DfuN2u-X.js";import"./dividerClasses-DgchVogq.js";import"./Modal-C_TK6Ct6.js";import"./useSlotProps-DBSOU0Nf.js";import"./getThemeProps-DSNOGyPj.js";import"./useControlled-Dastk5vJ.js";const $={title:"Molecules/Collapse",component:n,tags:["autodocs"],decorators:[e=>o.jsx("div",{style:{padding:16,minHeight:220},children:o.jsx(e,{})})],parameters:{docs:{description:{component:`
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
