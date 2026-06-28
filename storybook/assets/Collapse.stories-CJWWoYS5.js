import{j as o,r as C,a as i}from"./iframe-BBMjw61D.js";import{C as n}from"./Collapse-DJ7dJk8v.js";import"./Button-DkXRMP8k.js";import"./Chip-C-DVivil.js";import"./Paper-_cshIEQm.js";import"./InspectorToggle-IUCkbs8m.js";import"./ListItemIcon-O_mc4lGd.js";import"./ListItemText-CDOgxmSP.js";import"./Drawer-D_wc0bFk.js";import{S as h}from"./Stack-CKtIKV52.js";import"./Tooltip-DOgg3P-4.js";import"./preload-helper-Dp1pzeXC.js";import"./Grow-yh6P9bPz.js";import"./useForkRef-CJB8aibE.js";import"./TransitionGroupContext-iBgzY6Iu.js";import"./Icon-CeF6C18S.js";import"./Button-CkOjU5EA.js";import"./ButtonBase-CfpMXisj.js";import"./CircularProgress-DqaELN0L.js";import"./createSvgIcon-BNRhowvH.js";import"./Paper-DtVu_y7z.js";import"./renderer-DJzlvIF7.js";import"./runtimeContext-DLWF6mek.js";import"./Toolbar-Dp0b3UO_.js";import"./IconButton-CI8jOMmz.js";import"./IconButton-CnArdgnS.js";import"./listItemIconClasses-D5F5QXoM.js";import"./ListContext-BFFnw-lM.js";import"./listItemTextClasses-Dx89N0FO.js";import"./useSlot-DH-Teep3.js";import"./resolveComponentProps-Mj_M1BKr.js";import"./dividerClasses-BWVLveXZ.js";import"./Modal-DGyiVzIh.js";import"./useSlotProps-BFAuu3vI.js";import"./getThemeProps-CJ0dIgn2.js";import"./useControlled-SC_H9kP0.js";const Z={title:"Molecules/Collapse",component:n,tags:["autodocs"],decorators:[e=>o.jsx("div",{style:{padding:16,minHeight:220},children:o.jsx(e,{})})],parameters:{docs:{description:{component:`
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
