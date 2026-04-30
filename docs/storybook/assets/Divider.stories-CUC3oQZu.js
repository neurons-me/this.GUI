import{j as r,a as i,B as n}from"./iframe-DjCVt7fI.js";import{D as t}from"./Divider-D2JiJDUm.js";import"./Paper-DjmomdbI.js";import"./Hero-BfoH7vnY.js";import"./InspectorToggle-Bc522O6V.js";import"./ListItemIcon-B0coOJe6.js";import"./ListItemText-CvLWwDuE.js";import"./Drawer-GUeS6ILZ.js";import{S as s}from"./Stack-_0qqEk2D.js";import"./Tooltip-AJA_1ylm.js";import"./preload-helper-Dp1pzeXC.js";import"./Divider-CgBOOwus.js";import"./dividerClasses-CJARtFPe.js";import"./Paper-KEVgxZe5.js";import"./Toolbar-B9eD0FrK.js";import"./Button-Btre8pBJ.js";import"./Icon-2eyRSfiI.js";import"./Button-D498MQIb.js";import"./ButtonBase-R8XXi6kN.js";import"./TransitionGroupContext-DL1WlFMz.js";import"./useForkRef-B8mj3yu-.js";import"./useEventCallback-DS-1wPyE.js";import"./CircularProgress-BTsMI-jR.js";import"./IconButton-C9bpkJdw.js";import"./IconButton-3ZhB-jAz.js";import"./selectionStore-Coy7dh9o.js";import"./listItemIconClasses-DLa6Dg3U.js";import"./ListContext-C2fXlir5.js";import"./listItemTextClasses-BjK0s3gI.js";import"./useSlot-BH35M0Kq.js";import"./resolveComponentProps-DH0v1ivu.js";import"./Grow-BfUFX405.js";import"./Modal-Beuq0239.js";import"./useSlotProps-Z4YGG9ba.js";import"./getThemeProps-CmGuyLZ3.js";import"./useControlled-2dJkZLWW.js";const K={title:"Atoms/Divider",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"The Divider component is a thin wrapper over MUI's `MuiDivider`. It preserves all props and allows styling via the `sx` prop.  \n\nUse it to divide content, lists or layouts."}}},argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"],description:"The orientation of the divider."},variant:{control:{type:"radio"},options:["fullWidth","inset","middle"],description:"The variant to use."},flexItem:{control:{type:"boolean"},description:"If true, the divider is a flex item."}},args:{orientation:"horizontal",variant:"fullWidth",flexItem:!1}},e={render:d=>r.jsxs(s,{spacing:2,sx:{width:300,display:"flex"},children:[r.jsx(i,{variant:"h6",children:"Horizontal Divider"}),r.jsx(i,{children:"Item One"}),r.jsx(t,{}),r.jsx(i,{children:"Item Two"}),r.jsx(i,{variant:"h6",children:"Vertical Divider"}),r.jsxs(n,{sx:{display:"flex",flexDirection:"row",gap:"20px",alignItems:"center",height:"100px"},children:[r.jsx(i,{children:"Left"}),r.jsx(t,{orientation:"vertical",flexItem:!0}),r.jsx(i,{children:"Right"})]}),r.jsx(i,{variant:"h6",children:"Inset Divider"}),r.jsx(i,{children:"First"}),r.jsx(t,{variant:"inset"}),r.jsx(i,{children:"Second"}),r.jsx(i,{variant:"h6",children:"Text Divider"}),r.jsx(t,{children:"Text Content"})]})};var o,p,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
