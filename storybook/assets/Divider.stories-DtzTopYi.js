import{j as r,a as i,B as n}from"./iframe-DiYu-bgs.js";import"./Button-BWZCwv98.js";import"./Chip-BZAOr3Be.js";import{D as t}from"./InspectorToggle-1vw9S654.js";import"./Paper-CSinAV9D.js";import"./ListItemIcon-BdyV2R3A.js";import"./ListItemText-3WQm850Q.js";import"./Drawer-BKUY5yU0.js";import{S as s}from"./Stack-CF4hDaIn.js";import"./Tooltip-DIKoVJsm.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-CDNyTKpS.js";import"./Button-B1pjkYXI.js";import"./ButtonBase-BIWX-Y7H.js";import"./TransitionGroupContext-D-SVGE9X.js";import"./useForkRef-CeQ6MmaM.js";import"./CircularProgress-P6eZSM98.js";import"./createSvgIcon-BZkVILGZ.js";import"./renderer-DNE_5b45.js";import"./runtimeContext-C3-qwfut.js";import"./Toolbar-ChiFStKU.js";import"./IconButton-BevC8wPi.js";import"./IconButton-BBNeXzDA.js";import"./Paper-cTXpPwta.js";import"./listItemIconClasses-BhZJ7y_A.js";import"./ListContext-CG8slgtE.js";import"./listItemTextClasses-Cw82XuRA.js";import"./useSlot-BM5SeJo5.js";import"./resolveComponentProps-Dw41cPxQ.js";import"./dividerClasses-CWtw64gF.js";import"./Grow-CdY6zbkB.js";import"./Modal-nI50Th-N.js";import"./useSlotProps-C8WlynVb.js";import"./getThemeProps-YpQr1VWT.js";import"./useControlled-BD87qGga.js";const J={title:"Atoms/Divider",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"The Divider component is a thin wrapper over MUI's `MuiDivider`. It preserves all props and allows styling via the `sx` prop.  \n\nUse it to divide content, lists or layouts."}}},argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"],description:"The orientation of the divider."},variant:{control:{type:"radio"},options:["fullWidth","inset","middle"],description:"The variant to use."},flexItem:{control:{type:"boolean"},description:"If true, the divider is a flex item."}},args:{orientation:"horizontal",variant:"fullWidth",flexItem:!1}},e={render:d=>r.jsxs(s,{spacing:2,sx:{width:300,display:"flex"},children:[r.jsx(i,{variant:"h6",children:"Horizontal Divider"}),r.jsx(i,{children:"Item One"}),r.jsx(t,{}),r.jsx(i,{children:"Item Two"}),r.jsx(i,{variant:"h6",children:"Vertical Divider"}),r.jsxs(n,{sx:{display:"flex",flexDirection:"row",gap:"20px",alignItems:"center",height:"100px"},children:[r.jsx(i,{children:"Left"}),r.jsx(t,{orientation:"vertical",flexItem:!0}),r.jsx(i,{children:"Right"})]}),r.jsx(i,{variant:"h6",children:"Inset Divider"}),r.jsx(i,{children:"First"}),r.jsx(t,{variant:"inset"}),r.jsx(i,{children:"Second"}),r.jsx(i,{variant:"h6",children:"Text Divider"}),r.jsx(t,{children:"Text Content"})]})};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const K=["Variants"];export{e as Variants,K as __namedExportsOrder,J as default};
