import{j as r,a as i,B as n}from"./iframe-CIpgfdSA.js";import"./Button-CMUDvCWP.js";import"./Chip-DrYhu1lb.js";import{D as t}from"./InspectorToggle-B-FA1UG6.js";import"./Paper-DKF2jsMe.js";import"./ListItemIcon-Ce-4FjVP.js";import"./ListItemText-EEYkoSln.js";import"./Drawer-qFwD3jMV.js";import{S as s}from"./Stack-CqAsCV8x.js";import"./Tooltip-D8eLdlES.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-CNWiu4wY.js";import"./Button-_sZ07zbz.js";import"./ButtonBase-DmWmhxFj.js";import"./TransitionGroupContext-aFzyVajs.js";import"./useForkRef-Bt2idEIF.js";import"./CircularProgress-Ch2k8Dnz.js";import"./createSvgIcon-21P3U7BS.js";import"./renderer-Bl1ZkWpq.js";import"./runtimeContext-DYOsHqCK.js";import"./Toolbar-DwLZGWoc.js";import"./IconButton-Drl_RcOw.js";import"./IconButton-D38Qxo8w.js";import"./Paper-Co30WzKW.js";import"./listItemIconClasses-BiY_95im.js";import"./ListContext-AU4sr-iT.js";import"./listItemTextClasses-CrYuZtSf.js";import"./useSlot-BmNcXWXR.js";import"./resolveComponentProps-CN4RWvl4.js";import"./dividerClasses-DErrwRRZ.js";import"./Grow-COMGU6Gh.js";import"./Modal-BRTptzSC.js";import"./useSlotProps-0d7_6-xv.js";import"./getThemeProps-mxSbfBuC.js";import"./useControlled-DEH0vkGQ.js";const J={title:"Atoms/Divider",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"The Divider component is a thin wrapper over MUI's `MuiDivider`. It preserves all props and allows styling via the `sx` prop.  \n\nUse it to divide content, lists or layouts."}}},argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"],description:"The orientation of the divider."},variant:{control:{type:"radio"},options:["fullWidth","inset","middle"],description:"The variant to use."},flexItem:{control:{type:"boolean"},description:"If true, the divider is a flex item."}},args:{orientation:"horizontal",variant:"fullWidth",flexItem:!1}},e={render:d=>r.jsxs(s,{spacing:2,sx:{width:300,display:"flex"},children:[r.jsx(i,{variant:"h6",children:"Horizontal Divider"}),r.jsx(i,{children:"Item One"}),r.jsx(t,{}),r.jsx(i,{children:"Item Two"}),r.jsx(i,{variant:"h6",children:"Vertical Divider"}),r.jsxs(n,{sx:{display:"flex",flexDirection:"row",gap:"20px",alignItems:"center",height:"100px"},children:[r.jsx(i,{children:"Left"}),r.jsx(t,{orientation:"vertical",flexItem:!0}),r.jsx(i,{children:"Right"})]}),r.jsx(i,{variant:"h6",children:"Inset Divider"}),r.jsx(i,{children:"First"}),r.jsx(t,{variant:"inset"}),r.jsx(i,{children:"Second"}),r.jsx(i,{variant:"h6",children:"Text Divider"}),r.jsx(t,{children:"Text Content"})]})};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
