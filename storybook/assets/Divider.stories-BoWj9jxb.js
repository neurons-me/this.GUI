import{j as r,a as i,B as n}from"./iframe-DHWRG7QH.js";import"./Button-oBWKO3VQ.js";import"./Chip-1Vxe2nnS.js";import{D as t}from"./InspectorToggle-DcoFs8Wc.js";import"./Paper-Bd7uI4Xg.js";import"./ListItemIcon-D1SJBUh0.js";import"./ListItemText-Cxq15UaX.js";import"./Drawer-U4M5Q_6p.js";import{S as s}from"./Stack-CxUlXE6_.js";import"./Tooltip-M8VDrXiA.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-Cn0j5eWA.js";import"./Button-Bltgg28i.js";import"./ButtonBase-BAs1lMSe.js";import"./TransitionGroupContext-CE_hoGdS.js";import"./useForkRef-tA8i6BhM.js";import"./CircularProgress-BIWkXzy5.js";import"./createSvgIcon-B7s6AbuW.js";import"./renderer-iG2MPD9h.js";import"./runtimeContext-B3HWc0Yx.js";import"./Toolbar-BSLqOFgR.js";import"./IconButton-BfJZcLtb.js";import"./IconButton-DtjMttKU.js";import"./Paper-Cc_Dqaw6.js";import"./listItemIconClasses-7RdeADQE.js";import"./ListContext-D3ZraOYE.js";import"./listItemTextClasses-CqTLES1u.js";import"./useSlot-DrfD_k7V.js";import"./resolveComponentProps-DrbJ2mp-.js";import"./dividerClasses-B6tUBfWy.js";import"./Grow-DsXwItpO.js";import"./Modal-CiJFTnDS.js";import"./useSlotProps-BEdJDrIu.js";import"./getThemeProps-BDqZ4MBr.js";import"./useControlled-CIHqeqDW.js";const J={title:"Atoms/Divider",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"The Divider component is a thin wrapper over MUI's `MuiDivider`. It preserves all props and allows styling via the `sx` prop.  \n\nUse it to divide content, lists or layouts."}}},argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"],description:"The orientation of the divider."},variant:{control:{type:"radio"},options:["fullWidth","inset","middle"],description:"The variant to use."},flexItem:{control:{type:"boolean"},description:"If true, the divider is a flex item."}},args:{orientation:"horizontal",variant:"fullWidth",flexItem:!1}},e={render:d=>r.jsxs(s,{spacing:2,sx:{width:300,display:"flex"},children:[r.jsx(i,{variant:"h6",children:"Horizontal Divider"}),r.jsx(i,{children:"Item One"}),r.jsx(t,{}),r.jsx(i,{children:"Item Two"}),r.jsx(i,{variant:"h6",children:"Vertical Divider"}),r.jsxs(n,{sx:{display:"flex",flexDirection:"row",gap:"20px",alignItems:"center",height:"100px"},children:[r.jsx(i,{children:"Left"}),r.jsx(t,{orientation:"vertical",flexItem:!0}),r.jsx(i,{children:"Right"})]}),r.jsx(i,{variant:"h6",children:"Inset Divider"}),r.jsx(i,{children:"First"}),r.jsx(t,{variant:"inset"}),r.jsx(i,{children:"Second"}),r.jsx(i,{variant:"h6",children:"Text Divider"}),r.jsx(t,{children:"Text Content"})]})};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
