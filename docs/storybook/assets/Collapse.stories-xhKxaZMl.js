import{j as o,r as C,a as i}from"./iframe-D-yLkxRm.js";import{C as n}from"./Collapse-CJsa40Ws.js";import"./InspectorToggle-Dx5naHaQ.js";import"./ListItemIcon-BRbJkcZX.js";import"./ListItemText-DaNZcaBp.js";import"./Drawer-u-7pRxH5.js";import{S as h}from"./Stack-DxuIpvyZ.js";import"./Tooltip-BeKJAHLx.js";import"./preload-helper-Dp1pzeXC.js";import"./Grow-B465bZ7r.js";import"./useSlot-BRmhrC03.js";import"./useForkRef-3g40efWb.js";import"./TransitionGroupContext-VW4x2IpZ.js";import"./Toolbar-UTGLpwz6.js";import"./Button-f1opXuFn.js";import"./Icon-C8lU0iA9.js";import"./Button-DTY8LgOd.js";import"./ButtonBase-CgHBv6ML.js";import"./CircularProgress-DrGUE8s9.js";import"./IconButton-D_YfD0us.js";import"./IconButton-B3K44CtS.js";import"./selectionStore-Coy7dh9o.js";import"./listItemIconClasses-5wPKrVj1.js";import"./ListContext-4WRkoI35.js";import"./listItemTextClasses-3g44Redx.js";import"./Modal-C6Ht38j9.js";import"./Paper-Ddrsj0pd.js";import"./getThemeProps-BicHvnVd.js";import"./useControlled-ZzTc7dN6.js";const G={title:"Molecules/Collapse",component:n,tags:["autodocs"],decorators:[e=>o.jsx("div",{style:{padding:16,minHeight:220},children:o.jsx(e,{})})],parameters:{docs:{description:{component:`
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
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const K=["Playground","Variants"];export{r as Playground,t as Variants,K as __namedExportsOrder,G as default};
