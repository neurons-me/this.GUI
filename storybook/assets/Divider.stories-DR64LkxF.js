import{j as r,a as i,B as n}from"./iframe-D2eJnacu.js";import{D as t}from"./InspectorToggle-XfRHSRli.js";import"./Paper-Cy6GSVX1.js";import"./ListItemIcon-DBEAg4qU.js";import"./ListItemText-B0bnygt8.js";import"./Drawer-Dc6eHdxA.js";import{S as s}from"./Stack-CaG1pCkX.js";import"./Tooltip-s2l6t1LL.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-88yt6xcs.js";import"./Icon-CAKnGJGN.js";import"./Button-CHKGPak-.js";import"./ButtonBase-CUt-_WAR.js";import"./TransitionGroupContext-CJvSrqRb.js";import"./useForkRef-CJwN5O9W.js";import"./useEventCallback-CVieJ6Bg.js";import"./CircularProgress-gvGNL1sR.js";import"./renderer-B7mnUi2B.js";import"./runtimeContext-CI01_G2x.js";import"./Toolbar-DWLAj6h0.js";import"./IconButton-CQQWoaHV.js";import"./IconButton-Bq5ykkQl.js";import"./Paper-qyyHbYbt.js";import"./listItemIconClasses-UgzpQTE9.js";import"./ListContext-BW2Adx7C.js";import"./listItemTextClasses-CmkdSkph.js";import"./useSlot-EziydVcY.js";import"./resolveComponentProps-A5i4OP5P.js";import"./dividerClasses-DG4d1HjL.js";import"./Grow-CaHZ5gb0.js";import"./Modal-DEXC5q00.js";import"./useSlotProps-DAc4d2Zp.js";import"./getThemeProps-C6TO9Cvw.js";import"./useControlled-CM5M7PCu.js";const G={title:"Atoms/Divider",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"The Divider component is a thin wrapper over MUI's `MuiDivider`. It preserves all props and allows styling via the `sx` prop.  \n\nUse it to divide content, lists or layouts."}}},argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"],description:"The orientation of the divider."},variant:{control:{type:"radio"},options:["fullWidth","inset","middle"],description:"The variant to use."},flexItem:{control:{type:"boolean"},description:"If true, the divider is a flex item."}},args:{orientation:"horizontal",variant:"fullWidth",flexItem:!1}},e={render:d=>r.jsxs(s,{spacing:2,sx:{width:300,display:"flex"},children:[r.jsx(i,{variant:"h6",children:"Horizontal Divider"}),r.jsx(i,{children:"Item One"}),r.jsx(t,{}),r.jsx(i,{children:"Item Two"}),r.jsx(i,{variant:"h6",children:"Vertical Divider"}),r.jsxs(n,{sx:{display:"flex",flexDirection:"row",gap:"20px",alignItems:"center",height:"100px"},children:[r.jsx(i,{children:"Left"}),r.jsx(t,{orientation:"vertical",flexItem:!0}),r.jsx(i,{children:"Right"})]}),r.jsx(i,{variant:"h6",children:"Inset Divider"}),r.jsx(i,{children:"First"}),r.jsx(t,{variant:"inset"}),r.jsx(i,{children:"Second"}),r.jsx(i,{variant:"h6",children:"Text Divider"}),r.jsx(t,{children:"Text Content"})]})};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const J=["Variants"];export{e as Variants,J as __namedExportsOrder,G as default};
