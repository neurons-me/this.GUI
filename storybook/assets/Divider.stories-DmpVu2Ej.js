import{j as r,a as i,B as n}from"./iframe-CXR2GqgA.js";import"./Button-TaPxG3UH.js";import"./Chip-CH-AtjVg.js";import{D as t}from"./InspectorToggle-DW2fWofk.js";import"./Paper-CF7KZOnX.js";import"./ListItemIcon-keC8GNt_.js";import"./ListItemText-DR3B8aaX.js";import"./Drawer-CtxFmC7R.js";import{S as s}from"./Stack-Ds-IQxaE.js";import"./Tooltip-WUnQyLdS.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-CvmwPEmM.js";import"./Button-BvWHdkuF.js";import"./ButtonBase-DX9GORHC.js";import"./TransitionGroupContext-CcpZcVWe.js";import"./useForkRef-K1OztWBN.js";import"./CircularProgress-DcAvyTTv.js";import"./createSvgIcon-Bg6G54Kl.js";import"./renderer-Cw5BYG9k.js";import"./runtimeContext-ZiB3-9_k.js";import"./Toolbar-DBBKsClo.js";import"./IconButton-CGBuLZry.js";import"./IconButton-D_Bz2nNC.js";import"./Paper-HHzNcUsn.js";import"./listItemIconClasses-B4xWcd96.js";import"./ListContext-Djvi1VkW.js";import"./listItemTextClasses-CzMVN6O5.js";import"./useSlot-DFV5KgVj.js";import"./resolveComponentProps-B69ntRQ2.js";import"./dividerClasses-BTyRWe9y.js";import"./Grow-DOeZ_aY_.js";import"./Modal-O7pKvnn-.js";import"./useSlotProps-BuE55OuM.js";import"./getThemeProps-DsTEWLbr.js";import"./useControlled-D7UFNaaJ.js";const J={title:"Atoms/Divider",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"The Divider component is a thin wrapper over MUI's `MuiDivider`. It preserves all props and allows styling via the `sx` prop.  \n\nUse it to divide content, lists or layouts."}}},argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"],description:"The orientation of the divider."},variant:{control:{type:"radio"},options:["fullWidth","inset","middle"],description:"The variant to use."},flexItem:{control:{type:"boolean"},description:"If true, the divider is a flex item."}},args:{orientation:"horizontal",variant:"fullWidth",flexItem:!1}},e={render:d=>r.jsxs(s,{spacing:2,sx:{width:300,display:"flex"},children:[r.jsx(i,{variant:"h6",children:"Horizontal Divider"}),r.jsx(i,{children:"Item One"}),r.jsx(t,{}),r.jsx(i,{children:"Item Two"}),r.jsx(i,{variant:"h6",children:"Vertical Divider"}),r.jsxs(n,{sx:{display:"flex",flexDirection:"row",gap:"20px",alignItems:"center",height:"100px"},children:[r.jsx(i,{children:"Left"}),r.jsx(t,{orientation:"vertical",flexItem:!0}),r.jsx(i,{children:"Right"})]}),r.jsx(i,{variant:"h6",children:"Inset Divider"}),r.jsx(i,{children:"First"}),r.jsx(t,{variant:"inset"}),r.jsx(i,{children:"Second"}),r.jsx(i,{variant:"h6",children:"Text Divider"}),r.jsx(t,{children:"Text Content"})]})};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
