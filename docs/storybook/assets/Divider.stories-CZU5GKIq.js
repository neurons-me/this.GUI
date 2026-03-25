import{j as r,a as i,B as n}from"./iframe-8EaQ1C0g.js";import"./Button-Ck1yJXlA.js";import{D as e}from"./Divider-C5a_6Cy3.js";import"./Paper-qkABWcDk.js";import{S as s}from"./Stack-w3FurTvB.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-DOcDJgdS.js";import"./Button-CqN9UM-9.js";import"./ButtonBase-DnuzHV0k.js";import"./TransitionGroupContext-BDq06VYZ.js";import"./useForkRef-B_8DPUN9.js";import"./CircularProgress-CF5CFykq.js";import"./Divider-LesZ8Zh_.js";import"./dividerClasses-Con-zOAD.js";import"./Paper-Cnfm5CEA.js";import"./getThemeProps-Cnx6th0B.js";const z={title:"Atoms/Divider",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"The Divider component is a thin wrapper over MUI's `MuiDivider`. It preserves all props and allows styling via the `sx` prop.  \n\nUse it to divide content, lists or layouts."}}},argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"],description:"The orientation of the divider."},variant:{control:{type:"radio"},options:["fullWidth","inset","middle"],description:"The variant to use."},flexItem:{control:{type:"boolean"},description:"If true, the divider is a flex item."}},args:{orientation:"horizontal",variant:"fullWidth",flexItem:!1}},t={render:d=>r.jsxs(s,{spacing:2,sx:{width:300,display:"flex"},children:[r.jsx(i,{variant:"h6",children:"Horizontal Divider"}),r.jsx(i,{children:"Item One"}),r.jsx(e,{}),r.jsx(i,{children:"Item Two"}),r.jsx(i,{variant:"h6",children:"Vertical Divider"}),r.jsxs(n,{sx:{display:"flex",flexDirection:"row",gap:"20px",alignItems:"center",height:"100px"},children:[r.jsx(i,{children:"Left"}),r.jsx(e,{orientation:"vertical",flexItem:!0}),r.jsx(i,{children:"Right"})]}),r.jsx(i,{variant:"h6",children:"Inset Divider"}),r.jsx(i,{children:"First"}),r.jsx(e,{variant:"inset"}),r.jsx(i,{children:"Second"}),r.jsx(i,{variant:"h6",children:"Text Divider"}),r.jsx(e,{children:"Text Content"})]})};var o,a,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const B=["Variants"];export{t as Variants,B as __namedExportsOrder,z as default};
