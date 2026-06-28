import{j as r,a as i,B as n}from"./iframe-BBMjw61D.js";import"./Button-DkXRMP8k.js";import"./Chip-C-DVivil.js";import{D as t}from"./InspectorToggle-IUCkbs8m.js";import"./Paper-_cshIEQm.js";import"./ListItemIcon-O_mc4lGd.js";import"./ListItemText-CDOgxmSP.js";import"./Drawer-D_wc0bFk.js";import{S as s}from"./Stack-CKtIKV52.js";import"./Tooltip-DOgg3P-4.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-CeF6C18S.js";import"./Button-CkOjU5EA.js";import"./ButtonBase-CfpMXisj.js";import"./TransitionGroupContext-iBgzY6Iu.js";import"./useForkRef-CJB8aibE.js";import"./CircularProgress-DqaELN0L.js";import"./createSvgIcon-BNRhowvH.js";import"./renderer-DJzlvIF7.js";import"./runtimeContext-DLWF6mek.js";import"./Toolbar-Dp0b3UO_.js";import"./IconButton-CI8jOMmz.js";import"./IconButton-CnArdgnS.js";import"./Paper-DtVu_y7z.js";import"./listItemIconClasses-D5F5QXoM.js";import"./ListContext-BFFnw-lM.js";import"./listItemTextClasses-Dx89N0FO.js";import"./useSlot-DH-Teep3.js";import"./resolveComponentProps-Mj_M1BKr.js";import"./dividerClasses-BWVLveXZ.js";import"./Grow-yh6P9bPz.js";import"./Modal-DGyiVzIh.js";import"./useSlotProps-BFAuu3vI.js";import"./getThemeProps-CJ0dIgn2.js";import"./useControlled-SC_H9kP0.js";const J={title:"Atoms/Divider",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"The Divider component is a thin wrapper over MUI's `MuiDivider`. It preserves all props and allows styling via the `sx` prop.  \n\nUse it to divide content, lists or layouts."}}},argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"],description:"The orientation of the divider."},variant:{control:{type:"radio"},options:["fullWidth","inset","middle"],description:"The variant to use."},flexItem:{control:{type:"boolean"},description:"If true, the divider is a flex item."}},args:{orientation:"horizontal",variant:"fullWidth",flexItem:!1}},e={render:d=>r.jsxs(s,{spacing:2,sx:{width:300,display:"flex"},children:[r.jsx(i,{variant:"h6",children:"Horizontal Divider"}),r.jsx(i,{children:"Item One"}),r.jsx(t,{}),r.jsx(i,{children:"Item Two"}),r.jsx(i,{variant:"h6",children:"Vertical Divider"}),r.jsxs(n,{sx:{display:"flex",flexDirection:"row",gap:"20px",alignItems:"center",height:"100px"},children:[r.jsx(i,{children:"Left"}),r.jsx(t,{orientation:"vertical",flexItem:!0}),r.jsx(i,{children:"Right"})]}),r.jsx(i,{variant:"h6",children:"Inset Divider"}),r.jsx(i,{children:"First"}),r.jsx(t,{variant:"inset"}),r.jsx(i,{children:"Second"}),r.jsx(i,{variant:"h6",children:"Text Divider"}),r.jsx(t,{children:"Text Content"})]})};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
