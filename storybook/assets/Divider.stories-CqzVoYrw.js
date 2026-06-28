import{j as r,a as i,B as n}from"./iframe-DC1i1573.js";import"./Button-OznIF1P0.js";import"./Chip-DFuUJxJw.js";import{D as t}from"./InspectorToggle-DJwDlegS.js";import"./Paper-CKIt3RHD.js";import"./ListItemIcon-ZanOEmyx.js";import"./ListItemText-B84pw0of.js";import"./Drawer-BJf2efgA.js";import{S as s}from"./Stack-6pd6mAdi.js";import"./Tooltip-BJSpTCc5.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-CuVJ4y2k.js";import"./Button-Cw1rExmT.js";import"./ButtonBase-BrZ6brEn.js";import"./TransitionGroupContext-BZk-WlWb.js";import"./useForkRef-hpkiJGPF.js";import"./CircularProgress-C0wTbWDO.js";import"./createSvgIcon-CArePSch.js";import"./renderer-BOtl_gvK.js";import"./runtimeContext-CVXgUwjX.js";import"./Toolbar-DpKn-ZL2.js";import"./IconButton-Wjc3ccB5.js";import"./IconButton-TDHo9m7u.js";import"./Paper-C8sdzyzT.js";import"./listItemIconClasses-BwKUXR3I.js";import"./ListContext-DNDBaubu.js";import"./listItemTextClasses-CTxYf6qB.js";import"./useSlot-D_8lZxqR.js";import"./resolveComponentProps-C5BoffGy.js";import"./dividerClasses-Bd48RbK3.js";import"./Grow-D9IP3D0G.js";import"./Modal-CLLebtp2.js";import"./useSlotProps-DIS-q9VP.js";import"./getThemeProps-BRLZPA78.js";import"./useControlled-DbmrnxXO.js";const J={title:"Atoms/Divider",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"The Divider component is a thin wrapper over MUI's `MuiDivider`. It preserves all props and allows styling via the `sx` prop.  \n\nUse it to divide content, lists or layouts."}}},argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"],description:"The orientation of the divider."},variant:{control:{type:"radio"},options:["fullWidth","inset","middle"],description:"The variant to use."},flexItem:{control:{type:"boolean"},description:"If true, the divider is a flex item."}},args:{orientation:"horizontal",variant:"fullWidth",flexItem:!1}},e={render:d=>r.jsxs(s,{spacing:2,sx:{width:300,display:"flex"},children:[r.jsx(i,{variant:"h6",children:"Horizontal Divider"}),r.jsx(i,{children:"Item One"}),r.jsx(t,{}),r.jsx(i,{children:"Item Two"}),r.jsx(i,{variant:"h6",children:"Vertical Divider"}),r.jsxs(n,{sx:{display:"flex",flexDirection:"row",gap:"20px",alignItems:"center",height:"100px"},children:[r.jsx(i,{children:"Left"}),r.jsx(t,{orientation:"vertical",flexItem:!0}),r.jsx(i,{children:"Right"})]}),r.jsx(i,{variant:"h6",children:"Inset Divider"}),r.jsx(i,{children:"First"}),r.jsx(t,{variant:"inset"}),r.jsx(i,{children:"Second"}),r.jsx(i,{variant:"h6",children:"Text Divider"}),r.jsx(t,{children:"Text Content"})]})};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
