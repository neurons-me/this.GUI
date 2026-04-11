import{j as r,a as i,B as n}from"./iframe-VByCAMq0.js";import{D as t}from"./Divider-wjdkt-32.js";import"./InspectorToggle-l5ZL5CIN.js";import"./ListItemIcon-CZbD3kdS.js";import"./ListItemText-EGN6nTJf.js";import"./Drawer-Ce_ZhLjS.js";import{S as s}from"./Stack-C43D2WQo.js";import"./Tooltip-rRxgskYp.js";import"./preload-helper-Dp1pzeXC.js";import"./Divider-aS3S9KaQ.js";import"./dividerClasses-qk2AzdUE.js";import"./Toolbar-B5C1gson.js";import"./Button-1wg7geSe.js";import"./Icon-BTDP3cyE.js";import"./Button-BDqwkNQI.js";import"./ButtonBase-Ddf4rdCO.js";import"./TransitionGroupContext-BsXbcIrf.js";import"./useForkRef-at6iFRE0.js";import"./CircularProgress-BiH9goPR.js";import"./IconButton-BiNRO4tv.js";import"./IconButton-CGlHk7MM.js";import"./selectionStore-Coy7dh9o.js";import"./listItemIconClasses-BIfuaFhY.js";import"./ListContext-CUbLHnka.js";import"./listItemTextClasses-0eqNW5zI.js";import"./useSlot-BQxwWLoj.js";import"./Grow-yTTW3IAg.js";import"./Modal-WpCfVUEs.js";import"./Paper-CGsCy_dS.js";import"./getThemeProps-BP5H2oeD.js";import"./useControlled-85p8TW_V.js";const b={title:"Atoms/Divider",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"The Divider component is a thin wrapper over MUI's `MuiDivider`. It preserves all props and allows styling via the `sx` prop.  \n\nUse it to divide content, lists or layouts."}}},argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"],description:"The orientation of the divider."},variant:{control:{type:"radio"},options:["fullWidth","inset","middle"],description:"The variant to use."},flexItem:{control:{type:"boolean"},description:"If true, the divider is a flex item."}},args:{orientation:"horizontal",variant:"fullWidth",flexItem:!1}},e={render:d=>r.jsxs(s,{spacing:2,sx:{width:300,display:"flex"},children:[r.jsx(i,{variant:"h6",children:"Horizontal Divider"}),r.jsx(i,{children:"Item One"}),r.jsx(t,{}),r.jsx(i,{children:"Item Two"}),r.jsx(i,{variant:"h6",children:"Vertical Divider"}),r.jsxs(n,{sx:{display:"flex",flexDirection:"row",gap:"20px",alignItems:"center",height:"100px"},children:[r.jsx(i,{children:"Left"}),r.jsx(t,{orientation:"vertical",flexItem:!0}),r.jsx(i,{children:"Right"})]}),r.jsx(i,{variant:"h6",children:"Inset Divider"}),r.jsx(i,{children:"First"}),r.jsx(t,{variant:"inset"}),r.jsx(i,{children:"Second"}),r.jsx(i,{variant:"h6",children:"Text Divider"}),r.jsx(t,{children:"Text Content"})]})};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const A=["Variants"];export{e as Variants,A as __namedExportsOrder,b as default};
