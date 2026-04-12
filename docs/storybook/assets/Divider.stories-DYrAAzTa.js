import{j as r,a as i,B as n}from"./iframe-D-yLkxRm.js";import{D as t}from"./Divider-DjhtqNhM.js";import"./InspectorToggle-Dx5naHaQ.js";import"./ListItemIcon-BRbJkcZX.js";import"./ListItemText-DaNZcaBp.js";import"./Drawer-u-7pRxH5.js";import{S as s}from"./Stack-DxuIpvyZ.js";import"./Tooltip-BeKJAHLx.js";import"./preload-helper-Dp1pzeXC.js";import"./Divider-KsFhdW6i.js";import"./dividerClasses-Yf84oI0m.js";import"./Toolbar-UTGLpwz6.js";import"./Button-f1opXuFn.js";import"./Icon-C8lU0iA9.js";import"./Button-DTY8LgOd.js";import"./ButtonBase-CgHBv6ML.js";import"./TransitionGroupContext-VW4x2IpZ.js";import"./useForkRef-3g40efWb.js";import"./CircularProgress-DrGUE8s9.js";import"./IconButton-D_YfD0us.js";import"./IconButton-B3K44CtS.js";import"./selectionStore-Coy7dh9o.js";import"./listItemIconClasses-5wPKrVj1.js";import"./ListContext-4WRkoI35.js";import"./listItemTextClasses-3g44Redx.js";import"./useSlot-BRmhrC03.js";import"./Grow-B465bZ7r.js";import"./Modal-C6Ht38j9.js";import"./Paper-Ddrsj0pd.js";import"./getThemeProps-BicHvnVd.js";import"./useControlled-ZzTc7dN6.js";const b={title:"Atoms/Divider",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"The Divider component is a thin wrapper over MUI's `MuiDivider`. It preserves all props and allows styling via the `sx` prop.  \n\nUse it to divide content, lists or layouts."}}},argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"],description:"The orientation of the divider."},variant:{control:{type:"radio"},options:["fullWidth","inset","middle"],description:"The variant to use."},flexItem:{control:{type:"boolean"},description:"If true, the divider is a flex item."}},args:{orientation:"horizontal",variant:"fullWidth",flexItem:!1}},e={render:d=>r.jsxs(s,{spacing:2,sx:{width:300,display:"flex"},children:[r.jsx(i,{variant:"h6",children:"Horizontal Divider"}),r.jsx(i,{children:"Item One"}),r.jsx(t,{}),r.jsx(i,{children:"Item Two"}),r.jsx(i,{variant:"h6",children:"Vertical Divider"}),r.jsxs(n,{sx:{display:"flex",flexDirection:"row",gap:"20px",alignItems:"center",height:"100px"},children:[r.jsx(i,{children:"Left"}),r.jsx(t,{orientation:"vertical",flexItem:!0}),r.jsx(i,{children:"Right"})]}),r.jsx(i,{variant:"h6",children:"Inset Divider"}),r.jsx(i,{children:"First"}),r.jsx(t,{variant:"inset"}),r.jsx(i,{children:"Second"}),r.jsx(i,{variant:"h6",children:"Text Divider"}),r.jsx(t,{children:"Text Content"})]})};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
