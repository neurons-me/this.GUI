import{j as r,a as i,B as n}from"./iframe-CP9CNxx8.js";import"./Button-DXB5L6yH.js";import"./Chip-C6-sHy1n.js";import{D as t}from"./InspectorToggle-BFlA6Z6-.js";import"./Paper-H4VYbcNq.js";import"./ListItemIcon-1zpiHevt.js";import"./ListItemText-CddPeRgJ.js";import"./Drawer-D8k4iXFm.js";import{S as s}from"./Stack-DFED_ruc.js";import"./Tooltip-DQd5pZ-T.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-BnIUx9th.js";import"./Button-BXZoRsTR.js";import"./ButtonBase-3VpcqpZw.js";import"./TransitionGroupContext-Ck5bRGCF.js";import"./useForkRef-DbsbHXzv.js";import"./CircularProgress-_EZIbAZb.js";import"./createSvgIcon-CULnpTNi.js";import"./renderer-AB4KhwIg.js";import"./runtimeContext-DMLQNDdw.js";import"./Toolbar-C8qlW-S0.js";import"./IconButton-BrPyFgEk.js";import"./IconButton-CCIAIfSL.js";import"./Paper-Dej_UP1C.js";import"./listItemIconClasses-t_-ds97q.js";import"./ListContext-BdVLFpgb.js";import"./listItemTextClasses-DLUOdunC.js";import"./useSlot-Mh1rGqki.js";import"./resolveComponentProps-ClcYrv8r.js";import"./dividerClasses-BFmk34HT.js";import"./Grow-CIgwTQ5t.js";import"./Modal-C378D8Mh.js";import"./useSlotProps-prOgqQUI.js";import"./getThemeProps-DgA4-TRf.js";import"./useControlled-BLlI_aPv.js";const J={title:"Atoms/Divider",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"The Divider component is a thin wrapper over MUI's `MuiDivider`. It preserves all props and allows styling via the `sx` prop.  \n\nUse it to divide content, lists or layouts."}}},argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"],description:"The orientation of the divider."},variant:{control:{type:"radio"},options:["fullWidth","inset","middle"],description:"The variant to use."},flexItem:{control:{type:"boolean"},description:"If true, the divider is a flex item."}},args:{orientation:"horizontal",variant:"fullWidth",flexItem:!1}},e={render:d=>r.jsxs(s,{spacing:2,sx:{width:300,display:"flex"},children:[r.jsx(i,{variant:"h6",children:"Horizontal Divider"}),r.jsx(i,{children:"Item One"}),r.jsx(t,{}),r.jsx(i,{children:"Item Two"}),r.jsx(i,{variant:"h6",children:"Vertical Divider"}),r.jsxs(n,{sx:{display:"flex",flexDirection:"row",gap:"20px",alignItems:"center",height:"100px"},children:[r.jsx(i,{children:"Left"}),r.jsx(t,{orientation:"vertical",flexItem:!0}),r.jsx(i,{children:"Right"})]}),r.jsx(i,{variant:"h6",children:"Inset Divider"}),r.jsx(i,{children:"First"}),r.jsx(t,{variant:"inset"}),r.jsx(i,{children:"Second"}),r.jsx(i,{variant:"h6",children:"Text Divider"}),r.jsx(t,{children:"Text Content"})]})};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
