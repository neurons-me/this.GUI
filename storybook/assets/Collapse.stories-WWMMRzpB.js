import{j as o,r as C,a as i}from"./iframe-C_b0i3u8.js";import{C as n}from"./Collapse-B_UpAWAu.js";import"./Button-mr_aWkNz.js";import"./Chip-BnLuWVgV.js";import"./Paper-p9eezbgu.js";import"./InspectorToggle-DHMJbXJf.js";import"./ListItemIcon-DjjSIRtc.js";import"./ListItemText-npHmLwIa.js";import"./Drawer-DUsYWcFM.js";import{S as h}from"./Stack-BmExMvXU.js";import"./preload-helper-Dp1pzeXC.js";import"./Portal-4Utnz7R5.js";import"./TransitionGroupContext-DA-WNYvH.js";import"./useForkRef-qTVDMFQr.js";import"./Icon-Dg0Fnz52.js";import"./Button-DaKRkwMu.js";import"./ButtonBase-CBZ6tj8F.js";import"./CircularProgress-DExCAnw9.js";import"./createSvgIcon-BRYETk95.js";import"./Paper-Boii5j1w.js";import"./renderer-q29RPfuI.js";import"./Toolbar-C_-YGC8g.js";import"./IconButton-BDpt7_X6.js";import"./IconButton-D_PHND5e.js";import"./listItemIconClasses-Cc2CuJ3o.js";import"./ListContext-CVvYdQEp.js";import"./listItemTextClasses-Cde-U1LC.js";import"./useSlot-G4ByF3pc.js";import"./resolveComponentProps-Drajm3zd.js";import"./dividerClasses-UjyL7AFI.js";import"./mergeSlotProps-DYU3Hg2s.js";import"./Modal-CH6Tu7Dy.js";import"./ownerDocument-DW-IO8s5.js";import"./getThemeProps-BGG3twlu.js";const X={title:"Molecules/Collapse",component:n,tags:["autodocs"],decorators:[e=>o.jsx("div",{style:{padding:16,minHeight:220},children:o.jsx(e,{})})],parameters:{docs:{description:{component:`
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
