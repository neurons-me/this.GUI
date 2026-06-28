import{j as o,r as C,a as i}from"./iframe-D2eJnacu.js";import{C as n}from"./Collapse-C3LRwmA5.js";import"./Paper-Cy6GSVX1.js";import"./InspectorToggle-XfRHSRli.js";import"./ListItemIcon-DBEAg4qU.js";import"./ListItemText-B0bnygt8.js";import"./Drawer-Dc6eHdxA.js";import{S as h}from"./Stack-CaG1pCkX.js";import"./Tooltip-s2l6t1LL.js";import"./preload-helper-Dp1pzeXC.js";import"./Grow-CaHZ5gb0.js";import"./useForkRef-CJwN5O9W.js";import"./TransitionGroupContext-CJvSrqRb.js";import"./Paper-qyyHbYbt.js";import"./Button-88yt6xcs.js";import"./Icon-CAKnGJGN.js";import"./Button-CHKGPak-.js";import"./ButtonBase-CUt-_WAR.js";import"./useEventCallback-CVieJ6Bg.js";import"./CircularProgress-gvGNL1sR.js";import"./renderer-B7mnUi2B.js";import"./runtimeContext-CI01_G2x.js";import"./Toolbar-DWLAj6h0.js";import"./IconButton-CQQWoaHV.js";import"./IconButton-Bq5ykkQl.js";import"./listItemIconClasses-UgzpQTE9.js";import"./ListContext-BW2Adx7C.js";import"./listItemTextClasses-CmkdSkph.js";import"./useSlot-EziydVcY.js";import"./resolveComponentProps-A5i4OP5P.js";import"./dividerClasses-DG4d1HjL.js";import"./Modal-DEXC5q00.js";import"./useSlotProps-DAc4d2Zp.js";import"./getThemeProps-C6TO9Cvw.js";import"./useControlled-CM5M7PCu.js";const Y={title:"Molecules/Collapse",component:n,tags:["autodocs"],decorators:[e=>o.jsx("div",{style:{padding:16,minHeight:220},children:o.jsx(e,{})})],parameters:{docs:{description:{component:`
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
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const Z=["Playground","Variants"];export{r as Playground,t as Variants,Z as __namedExportsOrder,Y as default};
