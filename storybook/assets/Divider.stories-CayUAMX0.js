import{j as r,a as i,B as n}from"./iframe-DHKm4lxq.js";import"./Button-BxCtzB8m.js";import"./Chip-CBarvK3z.js";import{D as t}from"./InspectorToggle-4slQGNQR.js";import"./Paper-DtvotrLC.js";import"./ListItemText-CUOUdkWB.js";import"./Drawer-Cl2v2pdU.js";import{S as s}from"./Stack-B1MwnBF4.js";import"./Tooltip-DWzz156k.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-BDa5KZaz.js";import"./Button-SfGik2w3.js";import"./ButtonBase-DGodopKS.js";import"./TransitionGroupContext-BAR79BSf.js";import"./useForkRef-CKQjnNCQ.js";import"./CircularProgress-C_mw3fa7.js";import"./createSvgIcon-Be8Ym-L_.js";import"./renderer-bgPyTije.js";import"./runtimeContext-8u-IeDVA.js";import"./Toolbar-DgyTRwAO.js";import"./IconButton-PkGf5jAc.js";import"./IconButton-dLqP0LtD.js";import"./Paper-BRH2Yjjr.js";import"./ListContext-Crj2OsJs.js";import"./listItemTextClasses-s6jhsQgh.js";import"./useSlot-D_z_s16V.js";import"./resolveComponentProps-mc7wWAEz.js";import"./dividerClasses-BEgDB5Z9.js";import"./Grow-8YfsGkup.js";import"./Modal-P70wl9z_.js";import"./useSlotProps-Dm6x2sbk.js";import"./getThemeProps-Dv_U1Ogp.js";import"./useControlled-4Z9U_yFP.js";const q={title:"Atoms/Divider",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"The Divider component is a thin wrapper over MUI's `MuiDivider`. It preserves all props and allows styling via the `sx` prop.  \n\nUse it to divide content, lists or layouts."}}},argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"],description:"The orientation of the divider."},variant:{control:{type:"radio"},options:["fullWidth","inset","middle"],description:"The variant to use."},flexItem:{control:{type:"boolean"},description:"If true, the divider is a flex item."}},args:{orientation:"horizontal",variant:"fullWidth",flexItem:!1}},e={render:d=>r.jsxs(s,{spacing:2,sx:{width:300,display:"flex"},children:[r.jsx(i,{variant:"h6",children:"Horizontal Divider"}),r.jsx(i,{children:"Item One"}),r.jsx(t,{}),r.jsx(i,{children:"Item Two"}),r.jsx(i,{variant:"h6",children:"Vertical Divider"}),r.jsxs(n,{sx:{display:"flex",flexDirection:"row",gap:"20px",alignItems:"center",height:"100px"},children:[r.jsx(i,{children:"Left"}),r.jsx(t,{orientation:"vertical",flexItem:!0}),r.jsx(i,{children:"Right"})]}),r.jsx(i,{variant:"h6",children:"Inset Divider"}),r.jsx(i,{children:"First"}),r.jsx(t,{variant:"inset"}),r.jsx(i,{children:"Second"}),r.jsx(i,{variant:"h6",children:"Text Divider"}),r.jsx(t,{children:"Text Content"})]})};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const G=["Variants"];export{e as Variants,G as __namedExportsOrder,q as default};
