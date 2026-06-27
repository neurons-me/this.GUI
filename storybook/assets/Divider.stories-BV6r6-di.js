import{j as r,a as i,B as n}from"./iframe-CQ6lVM9J.js";import"./Button-Bga3uo1G.js";import"./Chip-CscAx2IV.js";import{D as t}from"./InspectorToggle-BbXYsSh3.js";import"./Paper-D8WVzIWP.js";import"./Hero-BhBBP0Ut.js";import"./ListItemIcon-DCr0ycU4.js";import"./ListItemText-C8xDBhIi.js";import"./Drawer-BF4TIoXU.js";import{S as s}from"./Stack-BfGxMVW8.js";import"./Tooltip-BmxVpoGu.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-BI0rS8fi.js";import"./Button-B4nkdwgI.js";import"./ButtonBase-CE1MUTHe.js";import"./TransitionGroupContext-BYAOwXFk.js";import"./useForkRef-k3GaQ7M0.js";import"./CircularProgress-BnTShz3b.js";import"./createSvgIcon-DXDYc_1t.js";import"./renderer-BQyOi2MF.js";import"./runtimeContext-v44hbRMa.js";import"./Toolbar-C_tizc0v.js";import"./IconButton-CyAqel-c.js";import"./IconButton-CAsbB3Lm.js";import"./Paper-CFRetAcS.js";import"./listItemIconClasses-BIVBCVxw.js";import"./ListContext-HHAQ2WBE.js";import"./listItemTextClasses-BKGhee-O.js";import"./useSlot-Cm_bFkyb.js";import"./resolveComponentProps-DfuN2u-X.js";import"./dividerClasses-DgchVogq.js";import"./Grow-DgFfonWO.js";import"./Modal-C_TK6Ct6.js";import"./useSlotProps-DBSOU0Nf.js";import"./getThemeProps-DSNOGyPj.js";import"./useControlled-Dastk5vJ.js";const K={title:"Atoms/Divider",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"The Divider component is a thin wrapper over MUI's `MuiDivider`. It preserves all props and allows styling via the `sx` prop.  \n\nUse it to divide content, lists or layouts."}}},argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"],description:"The orientation of the divider."},variant:{control:{type:"radio"},options:["fullWidth","inset","middle"],description:"The variant to use."},flexItem:{control:{type:"boolean"},description:"If true, the divider is a flex item."}},args:{orientation:"horizontal",variant:"fullWidth",flexItem:!1}},e={render:d=>r.jsxs(s,{spacing:2,sx:{width:300,display:"flex"},children:[r.jsx(i,{variant:"h6",children:"Horizontal Divider"}),r.jsx(i,{children:"Item One"}),r.jsx(t,{}),r.jsx(i,{children:"Item Two"}),r.jsx(i,{variant:"h6",children:"Vertical Divider"}),r.jsxs(n,{sx:{display:"flex",flexDirection:"row",gap:"20px",alignItems:"center",height:"100px"},children:[r.jsx(i,{children:"Left"}),r.jsx(t,{orientation:"vertical",flexItem:!0}),r.jsx(i,{children:"Right"})]}),r.jsx(i,{variant:"h6",children:"Inset Divider"}),r.jsx(i,{children:"First"}),r.jsx(t,{variant:"inset"}),r.jsx(i,{children:"Second"}),r.jsx(i,{variant:"h6",children:"Text Divider"}),r.jsx(t,{children:"Text Content"})]})};var o,p,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(a=(p=e.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};const N=["Variants"];export{e as Variants,N as __namedExportsOrder,K as default};
