import{j as r,a as i,B as n}from"./iframe-D9EvTlWl.js";import"./Button-BSC7MtVu.js";import"./Chip-BhW1_AxW.js";import{D as t}from"./InspectorToggle-CiS9GylZ.js";import"./Paper-CNvE0RD-.js";import"./Hero-DPukVZVI.js";import"./ListItemIcon-DoMmdGUF.js";import"./ListItemText-a4I0i_0j.js";import"./Drawer-A3TumCsB.js";import{S as s}from"./Stack-5DxX11xu.js";import"./Tooltip-n2OItU4b.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-CJEApdqx.js";import"./Button-PpSzQ2nP.js";import"./ButtonBase-zQJHYGm5.js";import"./TransitionGroupContext-vbPGwwbr.js";import"./useForkRef-C1LFn95A.js";import"./CircularProgress-DXt0Rfmg.js";import"./createSvgIcon-C3-IuFf-.js";import"./renderer-CYV5pS7F.js";import"./runtimeContext-stX2K2IM.js";import"./Toolbar-CpTN7W9R.js";import"./IconButton-DkE6reKw.js";import"./IconButton-DBFt0jLD.js";import"./Paper-DhU2P2hT.js";import"./listItemIconClasses-DwdzHSCj.js";import"./ListContext-BwmMMl96.js";import"./listItemTextClasses-CMLvMIIb.js";import"./useSlot-DU8sjFIb.js";import"./resolveComponentProps-D0Izudsi.js";import"./dividerClasses-ByNKvJjC.js";import"./Grow-DG8mRUao.js";import"./Modal-BW5LSG0L.js";import"./useSlotProps-CcTolACD.js";import"./getThemeProps-BDyfQF-o.js";import"./useControlled-APzbVKNK.js";const K={title:"Atoms/Divider",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"The Divider component is a thin wrapper over MUI's `MuiDivider`. It preserves all props and allows styling via the `sx` prop.  \n\nUse it to divide content, lists or layouts."}}},argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"],description:"The orientation of the divider."},variant:{control:{type:"radio"},options:["fullWidth","inset","middle"],description:"The variant to use."},flexItem:{control:{type:"boolean"},description:"If true, the divider is a flex item."}},args:{orientation:"horizontal",variant:"fullWidth",flexItem:!1}},e={render:d=>r.jsxs(s,{spacing:2,sx:{width:300,display:"flex"},children:[r.jsx(i,{variant:"h6",children:"Horizontal Divider"}),r.jsx(i,{children:"Item One"}),r.jsx(t,{}),r.jsx(i,{children:"Item Two"}),r.jsx(i,{variant:"h6",children:"Vertical Divider"}),r.jsxs(n,{sx:{display:"flex",flexDirection:"row",gap:"20px",alignItems:"center",height:"100px"},children:[r.jsx(i,{children:"Left"}),r.jsx(t,{orientation:"vertical",flexItem:!0}),r.jsx(i,{children:"Right"})]}),r.jsx(i,{variant:"h6",children:"Inset Divider"}),r.jsx(i,{children:"First"}),r.jsx(t,{variant:"inset"}),r.jsx(i,{children:"Second"}),r.jsx(i,{variant:"h6",children:"Text Divider"}),r.jsx(t,{children:"Text Content"})]})};var o,p,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
