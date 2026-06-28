import{j as o,r as C,a as i}from"./iframe-BTtW7_F-.js";import{C as n}from"./Collapse-BmKeUqre.js";import"./Button-D2e3Dj-X.js";import"./Chip-DXMIFmCa.js";import"./Paper-31X3P03d.js";import"./InspectorToggle-CzaqL69D.js";import"./ListItemIcon-D0_aFo-V.js";import"./ListItemText-EmUfqwzP.js";import"./Drawer-BdzA4NBr.js";import{S as h}from"./Stack-BWn6CZQv.js";import"./Tooltip-MnDsYJ5t.js";import"./preload-helper-Dp1pzeXC.js";import"./Grow-CbtqgvRU.js";import"./useForkRef-C7ZRtJ0F.js";import"./TransitionGroupContext-Ddjl0V-4.js";import"./Icon-CA024acM.js";import"./Button-Ddhen21U.js";import"./ButtonBase-DUaQ4VIL.js";import"./CircularProgress-ukva-b-G.js";import"./createSvgIcon-CqN86fU2.js";import"./Paper-BQDIcK-B.js";import"./renderer-DXCdzS_m.js";import"./runtimeContext-C007B3Qb.js";import"./Toolbar-Cfnsh_EX.js";import"./IconButton-Cuz7NzFo.js";import"./IconButton-DeO-vsGK.js";import"./listItemIconClasses-CaJ8LvZp.js";import"./ListContext-BZWt7HBR.js";import"./listItemTextClasses-UDjNIRwn.js";import"./useSlot-CIqJhg31.js";import"./resolveComponentProps-B8K2Oa0H.js";import"./dividerClasses-7JosgSfE.js";import"./Modal-QdAoN3Du.js";import"./useSlotProps-W8GAIZ31.js";import"./getThemeProps-gEKSQZyW.js";import"./useControlled-DL-5wEmZ.js";const Z={title:"Molecules/Collapse",component:n,tags:["autodocs"],decorators:[e=>o.jsx("div",{style:{padding:16,minHeight:220},children:o.jsx(e,{})})],parameters:{docs:{description:{component:`
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
