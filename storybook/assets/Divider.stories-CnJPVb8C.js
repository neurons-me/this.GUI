import{j as r,a as i,B as n}from"./iframe-B945G3MO.js";import"./Button-CKOdrTu7.js";import"./Chip-BraUMfbk.js";import{D as t}from"./InspectorToggle-BxuSsdIV.js";import"./Paper-Cc-h7jKx.js";import"./ListItemIcon-BzUqBMfL.js";import"./ListItemText-BJh5K7TE.js";import"./Drawer-DwqR1QDi.js";import{S as s}from"./Stack-B8kWwK-m.js";import"./Tooltip-DBphtguK.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-B7ImVv8I.js";import"./Button-5CJ0bfWc.js";import"./ButtonBase-D-uLuZlV.js";import"./TransitionGroupContext-C7M7qqJI.js";import"./useForkRef-B1qixtFe.js";import"./CircularProgress-CblgA6-I.js";import"./createSvgIcon-DmKvINFx.js";import"./renderer-_moSinZp.js";import"./runtimeContext-Cw7GHtwp.js";import"./Toolbar-CMdIY8Zj.js";import"./IconButton-D5mRMUCb.js";import"./IconButton-DSENFRag.js";import"./Paper-B44MHfVE.js";import"./listItemIconClasses-DsWwoGm5.js";import"./ListContext-Ck__g24J.js";import"./listItemTextClasses-DhSbipbj.js";import"./useSlot-BDGGiRla.js";import"./resolveComponentProps-Cr13QVQ8.js";import"./dividerClasses-BqPsrmCt.js";import"./Grow-SjjAWBSH.js";import"./Modal-DT98mAxm.js";import"./useSlotProps-C5tgyCQW.js";import"./getThemeProps-BEaVCLc9.js";import"./useControlled-ojhLLIC7.js";const J={title:"Atoms/Divider",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"The Divider component is a thin wrapper over MUI's `MuiDivider`. It preserves all props and allows styling via the `sx` prop.  \n\nUse it to divide content, lists or layouts."}}},argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"],description:"The orientation of the divider."},variant:{control:{type:"radio"},options:["fullWidth","inset","middle"],description:"The variant to use."},flexItem:{control:{type:"boolean"},description:"If true, the divider is a flex item."}},args:{orientation:"horizontal",variant:"fullWidth",flexItem:!1}},e={render:d=>r.jsxs(s,{spacing:2,sx:{width:300,display:"flex"},children:[r.jsx(i,{variant:"h6",children:"Horizontal Divider"}),r.jsx(i,{children:"Item One"}),r.jsx(t,{}),r.jsx(i,{children:"Item Two"}),r.jsx(i,{variant:"h6",children:"Vertical Divider"}),r.jsxs(n,{sx:{display:"flex",flexDirection:"row",gap:"20px",alignItems:"center",height:"100px"},children:[r.jsx(i,{children:"Left"}),r.jsx(t,{orientation:"vertical",flexItem:!0}),r.jsx(i,{children:"Right"})]}),r.jsx(i,{variant:"h6",children:"Inset Divider"}),r.jsx(i,{children:"First"}),r.jsx(t,{variant:"inset"}),r.jsx(i,{children:"Second"}),r.jsx(i,{variant:"h6",children:"Text Divider"}),r.jsx(t,{children:"Text Content"})]})};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
