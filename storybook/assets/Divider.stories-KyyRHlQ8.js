import{j as r,a as i,B as n}from"./iframe-uhZydg3N.js";import"./Button-BHEKV8Di.js";import"./Chip-CrmsVK4s.js";import{D as t}from"./InspectorToggle-cqmoKE-f.js";import"./Paper-CQQWQJgW.js";import"./ListItemIcon-BV2-R9yV.js";import"./ListItemText-DLLCwtpI.js";import"./Drawer-sqrMKJTL.js";import{S as s}from"./Stack-ki8NiayQ.js";import"./Tooltip-DoYUUZSH.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-Di-oNoRg.js";import"./Button-CWDeg29G.js";import"./ButtonBase-CdxK8IVR.js";import"./TransitionGroupContext-LKJIYauK.js";import"./useForkRef-BQM8aYFH.js";import"./CircularProgress-Cx3IOg4n.js";import"./createSvgIcon-D5bTnZ11.js";import"./renderer-BF45M6Bw.js";import"./runtimeContext-C2rVU1dF.js";import"./Toolbar-BSFIxwSy.js";import"./IconButton-Dt-8QZjB.js";import"./IconButton-vVnP1oY8.js";import"./Paper-tmeeNhAT.js";import"./listItemIconClasses-BvHRCK78.js";import"./ListContext-wGgHVR3V.js";import"./listItemTextClasses-CsGfA3md.js";import"./useSlot-TMdTvKz_.js";import"./resolveComponentProps-B0OmEIZv.js";import"./dividerClasses--NYJMb9z.js";import"./Grow-BQ9hfFIj.js";import"./Modal-Ddh6w-mY.js";import"./useSlotProps-Bd4owx_u.js";import"./getThemeProps-DMY8I5U3.js";import"./useControlled-DgoOZqD8.js";const J={title:"Atoms/Divider",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"The Divider component is a thin wrapper over MUI's `MuiDivider`. It preserves all props and allows styling via the `sx` prop.  \n\nUse it to divide content, lists or layouts."}}},argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"],description:"The orientation of the divider."},variant:{control:{type:"radio"},options:["fullWidth","inset","middle"],description:"The variant to use."},flexItem:{control:{type:"boolean"},description:"If true, the divider is a flex item."}},args:{orientation:"horizontal",variant:"fullWidth",flexItem:!1}},e={render:d=>r.jsxs(s,{spacing:2,sx:{width:300,display:"flex"},children:[r.jsx(i,{variant:"h6",children:"Horizontal Divider"}),r.jsx(i,{children:"Item One"}),r.jsx(t,{}),r.jsx(i,{children:"Item Two"}),r.jsx(i,{variant:"h6",children:"Vertical Divider"}),r.jsxs(n,{sx:{display:"flex",flexDirection:"row",gap:"20px",alignItems:"center",height:"100px"},children:[r.jsx(i,{children:"Left"}),r.jsx(t,{orientation:"vertical",flexItem:!0}),r.jsx(i,{children:"Right"})]}),r.jsx(i,{variant:"h6",children:"Inset Divider"}),r.jsx(i,{children:"First"}),r.jsx(t,{variant:"inset"}),r.jsx(i,{children:"Second"}),r.jsx(i,{variant:"h6",children:"Text Divider"}),r.jsx(t,{children:"Text Content"})]})};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
