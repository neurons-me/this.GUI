import{j as o,r as C,a as i}from"./iframe-DHKm4lxq.js";import{C as n}from"./Collapse-CTpAx0FZ.js";import"./Button-BxCtzB8m.js";import"./Chip-CBarvK3z.js";import"./Paper-DtvotrLC.js";import"./InspectorToggle-4slQGNQR.js";import"./ListItemText-CUOUdkWB.js";import"./Drawer-Cl2v2pdU.js";import{S as h}from"./Stack-B1MwnBF4.js";import"./Tooltip-DWzz156k.js";import"./preload-helper-Dp1pzeXC.js";import"./Grow-8YfsGkup.js";import"./useForkRef-CKQjnNCQ.js";import"./TransitionGroupContext-BAR79BSf.js";import"./Icon-BDa5KZaz.js";import"./Button-SfGik2w3.js";import"./ButtonBase-DGodopKS.js";import"./CircularProgress-C_mw3fa7.js";import"./createSvgIcon-Be8Ym-L_.js";import"./Paper-BRH2Yjjr.js";import"./renderer-bgPyTije.js";import"./runtimeContext-8u-IeDVA.js";import"./Toolbar-DgyTRwAO.js";import"./IconButton-PkGf5jAc.js";import"./IconButton-dLqP0LtD.js";import"./ListContext-Crj2OsJs.js";import"./listItemTextClasses-s6jhsQgh.js";import"./useSlot-D_z_s16V.js";import"./resolveComponentProps-mc7wWAEz.js";import"./dividerClasses-BEgDB5Z9.js";import"./Modal-P70wl9z_.js";import"./useSlotProps-Dm6x2sbk.js";import"./getThemeProps-Dv_U1Ogp.js";import"./useControlled-4Z9U_yFP.js";const X={title:"Molecules/Collapse",component:n,tags:["autodocs"],decorators:[e=>o.jsx("div",{style:{padding:16,minHeight:220},children:o.jsx(e,{})})],parameters:{docs:{description:{component:`
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
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const Y=["Playground","Variants"];export{r as Playground,t as Variants,Y as __namedExportsOrder,X as default};
