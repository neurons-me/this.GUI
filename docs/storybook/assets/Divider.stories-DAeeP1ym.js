import{j as r,a as i,B as n}from"./iframe-AZWHUjJ8.js";import{D as t}from"./Divider-CMg6M6Og.js";import"./Toolbar-BSvLwMcQ.js";import"./ListItemIcon-D0PToHmB.js";import"./ListItemText-BXA55UDd.js";import"./Drawer-e1dj-DAL.js";import{S as s}from"./Stack-vReHNowo.js";import"./Tooltip-BoFE-j7F.js";import"./preload-helper-Dp1pzeXC.js";import"./Divider-Cid-nLD_.js";import"./dividerClasses-C-NMVYSz.js";import"./Toolbar-CufKEqsg.js";import"./listItemIconClasses-Bkwn0ot7.js";import"./ListContext-DVr4rWCd.js";import"./listItemTextClasses-CDjfeEGl.js";import"./useSlot-BWVERl7C.js";import"./useForkRef-BwxLbw6V.js";import"./Grow-0zMj_HpA.js";import"./TransitionGroupContext-L3XM6ARG.js";import"./Modal-Dfp-k0CT.js";import"./Paper-WNsmHt7k.js";import"./getThemeProps-DicCSZg3.js";import"./useControlled-mDa5gGP0.js";const E={title:"Atoms/Divider",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"The Divider component is a thin wrapper over MUI's `MuiDivider`. It preserves all props and allows styling via the `sx` prop.  \n\nUse it to divide content, lists or layouts."}}},argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"],description:"The orientation of the divider."},variant:{control:{type:"radio"},options:["fullWidth","inset","middle"],description:"The variant to use."},flexItem:{control:{type:"boolean"},description:"If true, the divider is a flex item."}},args:{orientation:"horizontal",variant:"fullWidth",flexItem:!1}},e={render:d=>r.jsxs(s,{spacing:2,sx:{width:300,display:"flex"},children:[r.jsx(i,{variant:"h6",children:"Horizontal Divider"}),r.jsx(i,{children:"Item One"}),r.jsx(t,{}),r.jsx(i,{children:"Item Two"}),r.jsx(i,{variant:"h6",children:"Vertical Divider"}),r.jsxs(n,{sx:{display:"flex",flexDirection:"row",gap:"20px",alignItems:"center",height:"100px"},children:[r.jsx(i,{children:"Left"}),r.jsx(t,{orientation:"vertical",flexItem:!0}),r.jsx(i,{children:"Right"})]}),r.jsx(i,{variant:"h6",children:"Inset Divider"}),r.jsx(i,{children:"First"}),r.jsx(t,{variant:"inset"}),r.jsx(i,{children:"Second"}),r.jsx(i,{variant:"h6",children:"Text Divider"}),r.jsx(t,{children:"Text Content"})]})};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const F=["Variants"];export{e as Variants,F as __namedExportsOrder,E as default};
