import{j as r,a as i,B as n}from"./iframe-CmZ_q1z4.js";import"./Button-DafFbri_.js";import"./Chip-BTVbmgxv.js";import{D as t}from"./InspectorToggle-BvOKIHof.js";import"./Paper-CcJJK4hI.js";import"./ListItemIcon-CglfnlWt.js";import"./ListItemText-Dhm13hmh.js";import"./Drawer-BLsbzvLs.js";import{S as s}from"./Stack-ofUjRYrm.js";import"./Tooltip-DhJnZuOk.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-DEE50VaB.js";import"./Button-C2KQi9R3.js";import"./ButtonBase-C2QUU_ac.js";import"./TransitionGroupContext-Da1OtQvn.js";import"./useForkRef-DyhjSSpi.js";import"./CircularProgress-75u6lE4k.js";import"./createSvgIcon-BJr67T_I.js";import"./renderer-DgQvvU-7.js";import"./runtimeContext-btbdyu3b.js";import"./Toolbar-DjCZRGvk.js";import"./IconButton-jR5QBnBC.js";import"./IconButton-CREQMvOl.js";import"./Paper-BMIc8Tnd.js";import"./listItemIconClasses-BsISWJWE.js";import"./ListContext-BEs30NJZ.js";import"./listItemTextClasses-DYQe4eT0.js";import"./useSlot-CYyWfB0N.js";import"./resolveComponentProps-BFxV9aVJ.js";import"./dividerClasses-C8HhPn6k.js";import"./Grow-BQB6nH-T.js";import"./Modal-CKg48mq6.js";import"./useSlotProps-Bq_gEvkk.js";import"./getThemeProps-bbO_j9Wi.js";import"./useControlled-DFkCDk-L.js";const J={title:"Atoms/Divider",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"The Divider component is a thin wrapper over MUI's `MuiDivider`. It preserves all props and allows styling via the `sx` prop.  \n\nUse it to divide content, lists or layouts."}}},argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"],description:"The orientation of the divider."},variant:{control:{type:"radio"},options:["fullWidth","inset","middle"],description:"The variant to use."},flexItem:{control:{type:"boolean"},description:"If true, the divider is a flex item."}},args:{orientation:"horizontal",variant:"fullWidth",flexItem:!1}},e={render:d=>r.jsxs(s,{spacing:2,sx:{width:300,display:"flex"},children:[r.jsx(i,{variant:"h6",children:"Horizontal Divider"}),r.jsx(i,{children:"Item One"}),r.jsx(t,{}),r.jsx(i,{children:"Item Two"}),r.jsx(i,{variant:"h6",children:"Vertical Divider"}),r.jsxs(n,{sx:{display:"flex",flexDirection:"row",gap:"20px",alignItems:"center",height:"100px"},children:[r.jsx(i,{children:"Left"}),r.jsx(t,{orientation:"vertical",flexItem:!0}),r.jsx(i,{children:"Right"})]}),r.jsx(i,{variant:"h6",children:"Inset Divider"}),r.jsx(i,{children:"First"}),r.jsx(t,{variant:"inset"}),r.jsx(i,{children:"Second"}),r.jsx(i,{variant:"h6",children:"Text Divider"}),r.jsx(t,{children:"Text Content"})]})};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
