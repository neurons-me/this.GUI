import{j as r,T as i,B as n}from"./iframe-B26CALAz.js";import"./Button-C9RN3hmg.js";import{D as t}from"./Divider-xhTf7yN8.js";import"./Paper-CRvkXcvv.js";import"./controlSurface-C0kcMCZY.js";import"./ListItemIcon-2ml_yMfP.js";import"./ListItemText-D4W6YSyB.js";import"./Drawer-C6ZMtuP3.js";import{S as s}from"./Stack-DuF5VgLB.js";import"./Tooltip-DhnVtazG.js";import"./Icon-BwfjAmbM.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Ygdqa8j-.js";import"./ButtonBase-CL1dL2Cz.js";import"./TransitionGroupContext-DkIGTr29.js";import"./useForkRef-CXnDbkaK.js";import"./CircularProgress-v9Dx38HO.js";import"./Divider-oPT6ObPB.js";import"./dividerClasses-BROQATY4.js";import"./Paper-Dt3QYluA.js";import"./Toolbar-XgnjFBe6.js";import"./selectionStore-Coy7dh9o.js";import"./listItemIconClasses-C9wThiCW.js";import"./ListContext-btDJ5CVO.js";import"./listItemTextClasses-DsrlZgkx.js";import"./useSlot-DcL_IPHt.js";import"./Grow-CB76i9l6.js";import"./Modal-CeysofHi.js";import"./getThemeProps-zcjxvvoG.js";import"./useControlled-DCXjgbPx.js";const _={title:"Atoms/Divider",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"The Divider component is a thin wrapper over MUI's `MuiDivider`. It preserves all props and allows styling via the `sx` prop.  \n\nUse it to divide content, lists or layouts."}}},argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"],description:"The orientation of the divider."},variant:{control:{type:"radio"},options:["fullWidth","inset","middle"],description:"The variant to use."},flexItem:{control:{type:"boolean"},description:"If true, the divider is a flex item."}},args:{orientation:"horizontal",variant:"fullWidth",flexItem:!1}},e={render:d=>r.jsxs(s,{spacing:2,sx:{width:300,display:"flex"},children:[r.jsx(i,{variant:"h6",children:"Horizontal Divider"}),r.jsx(i,{children:"Item One"}),r.jsx(t,{}),r.jsx(i,{children:"Item Two"}),r.jsx(i,{variant:"h6",children:"Vertical Divider"}),r.jsxs(n,{sx:{display:"flex",flexDirection:"row",gap:"20px",alignItems:"center",height:"100px"},children:[r.jsx(i,{children:"Left"}),r.jsx(t,{orientation:"vertical",flexItem:!0}),r.jsx(i,{children:"Right"})]}),r.jsx(i,{variant:"h6",children:"Inset Divider"}),r.jsx(i,{children:"First"}),r.jsx(t,{variant:"inset"}),r.jsx(i,{children:"Second"}),r.jsx(i,{variant:"h6",children:"Text Divider"}),r.jsx(t,{children:"Text Content"})]})};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <Stack spacing={2} sx={{
    width: 300,
    display: 'flex'
  }}>
      <Typography variant="h6">Horizontal Divider</Typography>
       <Typography>Item One</Typography>
      <Divider />
       <Typography>Item Two</Typography>

      <Typography variant="h6">Vertical Divider</Typography>
      <Box sx={{
      display: "flex",
      flexDirection: "row",
      gap: "20px",
      alignItems: "center",
      height: "100px"
    }}>
        <Typography>Left</Typography>
        <Divider orientation="vertical" flexItem />
        <Typography>Right</Typography>
      </Box>

      <Typography variant="h6">Inset Divider</Typography>
       <Typography>First</Typography>
      <Divider variant="inset" />
       <Typography>Second</Typography>

      <Typography variant="h6">Text Divider</Typography>
      <Divider>Text Content</Divider>
    </Stack>
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const b=["Variants"];export{e as Variants,b as __namedExportsOrder,_ as default};
