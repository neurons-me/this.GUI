import{j as r,a as i,B as n}from"./iframe-DsRKGudf.js";import"./Button-LiUEA2TU.js";import"./Chip-C8fm0eph.js";import{D as t}from"./InspectorToggle-B2-9R7tJ.js";import"./Paper-CZuqLR2o.js";import"./ListItemIcon-C9IEsNAm.js";import"./ListItemText-Dx2OxWN3.js";import"./Drawer-DWTuXBaB.js";import{S as s}from"./Stack-CIiqTG01.js";import"./Tooltip-DwxTrZJL.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-C-KCwcAw.js";import"./Button-HEMqV7f1.js";import"./ButtonBase-BHgzLA4j.js";import"./TransitionGroupContext-gftPsmXQ.js";import"./useForkRef-DaPdQACB.js";import"./CircularProgress-CBgE9hq-.js";import"./createSvgIcon-C4CP9IBQ.js";import"./renderer-X8EydWrl.js";import"./runtimeContext-k6DqlALu.js";import"./Toolbar-H6MAk1z7.js";import"./IconButton-BbGJVgc-.js";import"./IconButton-m_4K4KMU.js";import"./Paper-CGP3T9PR.js";import"./listItemIconClasses-Dkt3uDCe.js";import"./ListContext-Dg6a-o_V.js";import"./listItemTextClasses-RCKfP_HI.js";import"./useSlot-UY7wHEUA.js";import"./resolveComponentProps-DWU9FwiD.js";import"./dividerClasses-Bl7DWpUo.js";import"./Grow-DUdPBg0C.js";import"./Modal-CmcgpO8z.js";import"./useSlotProps-DnVOBi5c.js";import"./getThemeProps-B_l613BN.js";import"./useControlled-BTRy4wlV.js";const J={title:"Atoms/Divider",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"The Divider component is a thin wrapper over MUI's `MuiDivider`. It preserves all props and allows styling via the `sx` prop.  \n\nUse it to divide content, lists or layouts."}}},argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"],description:"The orientation of the divider."},variant:{control:{type:"radio"},options:["fullWidth","inset","middle"],description:"The variant to use."},flexItem:{control:{type:"boolean"},description:"If true, the divider is a flex item."}},args:{orientation:"horizontal",variant:"fullWidth",flexItem:!1}},e={render:d=>r.jsxs(s,{spacing:2,sx:{width:300,display:"flex"},children:[r.jsx(i,{variant:"h6",children:"Horizontal Divider"}),r.jsx(i,{children:"Item One"}),r.jsx(t,{}),r.jsx(i,{children:"Item Two"}),r.jsx(i,{variant:"h6",children:"Vertical Divider"}),r.jsxs(n,{sx:{display:"flex",flexDirection:"row",gap:"20px",alignItems:"center",height:"100px"},children:[r.jsx(i,{children:"Left"}),r.jsx(t,{orientation:"vertical",flexItem:!0}),r.jsx(i,{children:"Right"})]}),r.jsx(i,{variant:"h6",children:"Inset Divider"}),r.jsx(i,{children:"First"}),r.jsx(t,{variant:"inset"}),r.jsx(i,{children:"Second"}),r.jsx(i,{variant:"h6",children:"Text Divider"}),r.jsx(t,{children:"Text Content"})]})};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
