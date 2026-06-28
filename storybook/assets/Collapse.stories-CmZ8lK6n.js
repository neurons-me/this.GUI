import{j as o,r as C,a as i}from"./iframe-CIpgfdSA.js";import{C as n}from"./Collapse-DePBi9Gr.js";import"./Button-CMUDvCWP.js";import"./Chip-DrYhu1lb.js";import"./Paper-DKF2jsMe.js";import"./InspectorToggle-B-FA1UG6.js";import"./ListItemIcon-Ce-4FjVP.js";import"./ListItemText-EEYkoSln.js";import"./Drawer-qFwD3jMV.js";import{S as h}from"./Stack-CqAsCV8x.js";import"./Tooltip-D8eLdlES.js";import"./preload-helper-Dp1pzeXC.js";import"./Grow-COMGU6Gh.js";import"./useForkRef-Bt2idEIF.js";import"./TransitionGroupContext-aFzyVajs.js";import"./Icon-CNWiu4wY.js";import"./Button-_sZ07zbz.js";import"./ButtonBase-DmWmhxFj.js";import"./CircularProgress-Ch2k8Dnz.js";import"./createSvgIcon-21P3U7BS.js";import"./Paper-Co30WzKW.js";import"./renderer-Bl1ZkWpq.js";import"./runtimeContext-DYOsHqCK.js";import"./Toolbar-DwLZGWoc.js";import"./IconButton-Drl_RcOw.js";import"./IconButton-D38Qxo8w.js";import"./listItemIconClasses-BiY_95im.js";import"./ListContext-AU4sr-iT.js";import"./listItemTextClasses-CrYuZtSf.js";import"./useSlot-BmNcXWXR.js";import"./resolveComponentProps-CN4RWvl4.js";import"./dividerClasses-DErrwRRZ.js";import"./Modal-BRTptzSC.js";import"./useSlotProps-0d7_6-xv.js";import"./getThemeProps-mxSbfBuC.js";import"./useControlled-DEH0vkGQ.js";const Z={title:"Molecules/Collapse",component:n,tags:["autodocs"],decorators:[e=>o.jsx("div",{style:{padding:16,minHeight:220},children:o.jsx(e,{})})],parameters:{docs:{description:{component:`
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
