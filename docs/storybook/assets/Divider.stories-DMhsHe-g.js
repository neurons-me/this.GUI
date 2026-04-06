import{j as r,a as i,B as n}from"./iframe-COO5skUf.js";import{D as t}from"./Divider-BshKMNGI.js";import"./Paper-UVXAhxvg.js";import"./Hero-DoJX5tf8.js";import"./controlSurface-CKLL_tdL.js";import"./ListItemIcon-KANUV62J.js";import"./ListItemText-CZFoY8sj.js";import"./Drawer-DftICJyF.js";import{S as s}from"./Stack-C_aNDNlX.js";import"./Tooltip-DYaPRb-T.js";import"./Icon-DpAowGqD.js";import"./preload-helper-Dp1pzeXC.js";import"./Divider-Btnfi2m-.js";import"./dividerClasses-hwJ7ypoq.js";import"./Paper-BFvRCSII.js";import"./Toolbar-OR_l-jJN.js";import"./selectionStore-Coy7dh9o.js";import"./listItemIconClasses-Bvk-I2by.js";import"./ListContext-Z9iUbTzI.js";import"./listItemTextClasses-DOJTjKud.js";import"./useSlot-DzoiAoV0.js";import"./useForkRef-Bgg-GG6B.js";import"./Grow-DBebQEnl.js";import"./TransitionGroupContext-BjXOR29W.js";import"./Modal-DZI5mxk5.js";import"./getThemeProps-qTSHdYXT.js";import"./useControlled-94B4cvCS.js";const M={title:"Atoms/Divider",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"The Divider component is a thin wrapper over MUI's `MuiDivider`. It preserves all props and allows styling via the `sx` prop.  \n\nUse it to divide content, lists or layouts."}}},argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"],description:"The orientation of the divider."},variant:{control:{type:"radio"},options:["fullWidth","inset","middle"],description:"The variant to use."},flexItem:{control:{type:"boolean"},description:"If true, the divider is a flex item."}},args:{orientation:"horizontal",variant:"fullWidth",flexItem:!1}},e={render:d=>r.jsxs(s,{spacing:2,sx:{width:300,display:"flex"},children:[r.jsx(i,{variant:"h6",children:"Horizontal Divider"}),r.jsx(i,{children:"Item One"}),r.jsx(t,{}),r.jsx(i,{children:"Item Two"}),r.jsx(i,{variant:"h6",children:"Vertical Divider"}),r.jsxs(n,{sx:{display:"flex",flexDirection:"row",gap:"20px",alignItems:"center",height:"100px"},children:[r.jsx(i,{children:"Left"}),r.jsx(t,{orientation:"vertical",flexItem:!0}),r.jsx(i,{children:"Right"})]}),r.jsx(i,{variant:"h6",children:"Inset Divider"}),r.jsx(i,{children:"First"}),r.jsx(t,{variant:"inset"}),r.jsx(i,{children:"Second"}),r.jsx(i,{variant:"h6",children:"Text Divider"}),r.jsx(t,{children:"Text Content"})]})};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const U=["Variants"];export{e as Variants,U as __namedExportsOrder,M as default};
