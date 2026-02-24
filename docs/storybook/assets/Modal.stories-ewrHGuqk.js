import{r as p,j as e}from"./iframe-BYWeTbVw.js";import{M as a}from"./Modal-DTyunubW.js";import"./preload-helper-Dp1pzeXC.js";import"./useGuiTheme-z8jC6V9j.js";import"./useTheme-hQc6TNga.js";import"./Box-D2VrL_Qb.js";import"./Box-DrLvxTuL.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./clsx-B-dksMZM.js";import"./Typography-BTe5Sves.js";import"./Typography-DYoqaNaH.js";import"./memoTheme-BnPFCUjU.js";import"./styled-BR6p0OHR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./IconButton-ZyQK-vsV.js";import"./IconButton-DCpYppOl.js";import"./ButtonBase-tHL4M-xw.js";import"./TransitionGroupContext-DUPMztxk.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./useForkRef-BLLRJTal.js";import"./useEventCallback-KgHUuHRa.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CDk05OBk.js";const T={title:"Molecules/Display/ModalBox",component:a,tags:["autodocs"],decorators:[t=>e.jsx("div",{style:{height:"100vh",overflow:"hidden"},children:e.jsx(t,{})})],parameters:{docs:{description:{component:"\n**ModalBox** is a flexible, theme-aware modal container with optional background blur and 3D placement support via `xyz` props.\n\n---\n## Features\n- Supports background blur overlay for visual depth.\n- Centered responsive layout with dynamic width and height.\n- Declarative 3D placement via `xyz: [x, y, z]`.\n- Works with any child components (forms, dialogs, previews, etc.).\n- Compatible with GUI registry and schema resolvers.\n\n---\n## Props\n- `open`: Boolean that controls visibility.\n- `title`: Optional modal header title.\n- `onClose`: Function triggered when closing.\n- `width`, `height`: Custom modal dimensions.\n- `blurBackground`: Enables or disables background blur.\n- `xyz`: 3D position array for spatial positioning.\n- `children`: Modal content.\n        "}}}},o={render:t=>{const[r,l]=p.useState(!0);return console.log("ModalBox render",{open:r,args:t}),e.jsx("div",{style:{position:"relative",height:"100vh",background:"rgba(0,0,0,0.2)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsxs(a,{...t,open:r,onClose:()=>l(!1),title:t.title||"Modal Title",children:[e.jsx("p",{style:{color:"#fff"},children:"This is an example modal content."}),e.jsx("p",{style:{color:"#ccc"},children:"If you see this text, the modal is visible."})]})})},args:{title:"Example Modal",blurBackground:!0,width:400,height:"auto"}};var n,i,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(true); // force open for debugging
    console.log("ModalBox render", {
      open,
      args
    });
    return <div style={{
      position: "relative",
      height: "100vh",
      background: "rgba(0,0,0,0.2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
        <Modal {...args} open={open} onClose={() => setOpen(false)} title={args.title || "Modal Title"}>
          <p style={{
          color: "#fff"
        }}>This is an example modal content.</p>
          <p style={{
          color: "#ccc"
        }}>If you see this text, the modal is visible.</p>
        </Modal>
      </div>;
  },
  args: {
    title: "Example Modal",
    blurBackground: true,
    width: 400,
    height: "auto"
  }
}`,...(s=(i=o.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const F=["Default"];export{o as Default,F as __namedExportsOrder,T as default};
