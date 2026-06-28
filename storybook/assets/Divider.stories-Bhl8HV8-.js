import{j as r,a as i,B as n}from"./iframe-CQnOlLv9.js";import"./Button-DLaYzOFx.js";import"./Chip-Ch6e3Wrd.js";import{D as t}from"./InspectorToggle-BBOTE1-j.js";import"./Paper-C4MUk0Wf.js";import"./ListItemIcon-DH0yM27j.js";import"./ListItemText-BfzhnW8b.js";import"./Drawer-BOa67ag5.js";import{S as s}from"./Stack-bHJpiL-k.js";import"./Tooltip-CV4jrk7n.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-DboRFcIN.js";import"./Button-BGOnVkyb.js";import"./ButtonBase-CdaNW7hP.js";import"./TransitionGroupContext-YwULhr2u.js";import"./useForkRef-DosucJWq.js";import"./CircularProgress-weFzFWV3.js";import"./createSvgIcon-CJgzMldw.js";import"./renderer-khtWV3Ut.js";import"./runtimeContext-BCtgIIHf.js";import"./Toolbar-B7QdMwFU.js";import"./IconButton-BRvq8Hxk.js";import"./IconButton-C_kZG7UM.js";import"./Paper-i8IPtUV5.js";import"./listItemIconClasses-Bxa553YT.js";import"./ListContext-Dw-k9oI6.js";import"./listItemTextClasses-AMnQSwtf.js";import"./useSlot-DeiHnBiM.js";import"./resolveComponentProps-1ujbY_pz.js";import"./dividerClasses-B3O0j9jv.js";import"./Grow-DI3S7WHV.js";import"./Modal-Sz-vgbIW.js";import"./useSlotProps-Bl6ntCwV.js";import"./getThemeProps-BFLMI8Gb.js";import"./useControlled-UqIt8YAL.js";const J={title:"Atoms/Divider",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"The Divider component is a thin wrapper over MUI's `MuiDivider`. It preserves all props and allows styling via the `sx` prop.  \n\nUse it to divide content, lists or layouts."}}},argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"],description:"The orientation of the divider."},variant:{control:{type:"radio"},options:["fullWidth","inset","middle"],description:"The variant to use."},flexItem:{control:{type:"boolean"},description:"If true, the divider is a flex item."}},args:{orientation:"horizontal",variant:"fullWidth",flexItem:!1}},e={render:d=>r.jsxs(s,{spacing:2,sx:{width:300,display:"flex"},children:[r.jsx(i,{variant:"h6",children:"Horizontal Divider"}),r.jsx(i,{children:"Item One"}),r.jsx(t,{}),r.jsx(i,{children:"Item Two"}),r.jsx(i,{variant:"h6",children:"Vertical Divider"}),r.jsxs(n,{sx:{display:"flex",flexDirection:"row",gap:"20px",alignItems:"center",height:"100px"},children:[r.jsx(i,{children:"Left"}),r.jsx(t,{orientation:"vertical",flexItem:!0}),r.jsx(i,{children:"Right"})]}),r.jsx(i,{variant:"h6",children:"Inset Divider"}),r.jsx(i,{children:"First"}),r.jsx(t,{variant:"inset"}),r.jsx(i,{children:"Second"}),r.jsx(i,{variant:"h6",children:"Text Divider"}),r.jsx(t,{children:"Text Content"})]})};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
