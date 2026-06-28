import{j as r,a as i,B as n}from"./iframe-BTtW7_F-.js";import"./Button-D2e3Dj-X.js";import"./Chip-DXMIFmCa.js";import{D as t}from"./InspectorToggle-CzaqL69D.js";import"./Paper-31X3P03d.js";import"./ListItemIcon-D0_aFo-V.js";import"./ListItemText-EmUfqwzP.js";import"./Drawer-BdzA4NBr.js";import{S as s}from"./Stack-BWn6CZQv.js";import"./Tooltip-MnDsYJ5t.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-CA024acM.js";import"./Button-Ddhen21U.js";import"./ButtonBase-DUaQ4VIL.js";import"./TransitionGroupContext-Ddjl0V-4.js";import"./useForkRef-C7ZRtJ0F.js";import"./CircularProgress-ukva-b-G.js";import"./createSvgIcon-CqN86fU2.js";import"./renderer-DXCdzS_m.js";import"./runtimeContext-C007B3Qb.js";import"./Toolbar-Cfnsh_EX.js";import"./IconButton-Cuz7NzFo.js";import"./IconButton-DeO-vsGK.js";import"./Paper-BQDIcK-B.js";import"./listItemIconClasses-CaJ8LvZp.js";import"./ListContext-BZWt7HBR.js";import"./listItemTextClasses-UDjNIRwn.js";import"./useSlot-CIqJhg31.js";import"./resolveComponentProps-B8K2Oa0H.js";import"./dividerClasses-7JosgSfE.js";import"./Grow-CbtqgvRU.js";import"./Modal-QdAoN3Du.js";import"./useSlotProps-W8GAIZ31.js";import"./getThemeProps-gEKSQZyW.js";import"./useControlled-DL-5wEmZ.js";const J={title:"Atoms/Divider",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"The Divider component is a thin wrapper over MUI's `MuiDivider`. It preserves all props and allows styling via the `sx` prop.  \n\nUse it to divide content, lists or layouts."}}},argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"],description:"The orientation of the divider."},variant:{control:{type:"radio"},options:["fullWidth","inset","middle"],description:"The variant to use."},flexItem:{control:{type:"boolean"},description:"If true, the divider is a flex item."}},args:{orientation:"horizontal",variant:"fullWidth",flexItem:!1}},e={render:d=>r.jsxs(s,{spacing:2,sx:{width:300,display:"flex"},children:[r.jsx(i,{variant:"h6",children:"Horizontal Divider"}),r.jsx(i,{children:"Item One"}),r.jsx(t,{}),r.jsx(i,{children:"Item Two"}),r.jsx(i,{variant:"h6",children:"Vertical Divider"}),r.jsxs(n,{sx:{display:"flex",flexDirection:"row",gap:"20px",alignItems:"center",height:"100px"},children:[r.jsx(i,{children:"Left"}),r.jsx(t,{orientation:"vertical",flexItem:!0}),r.jsx(i,{children:"Right"})]}),r.jsx(i,{variant:"h6",children:"Inset Divider"}),r.jsx(i,{children:"First"}),r.jsx(t,{variant:"inset"}),r.jsx(i,{children:"Second"}),r.jsx(i,{variant:"h6",children:"Text Divider"}),r.jsx(t,{children:"Text Content"})]})};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
