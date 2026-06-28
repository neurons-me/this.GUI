import{r as d,j as e}from"./iframe-Df6NujF0.js";import{M as a}from"./Modal-D3bDjh97.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-D9vmRegk.js";import"./Icon-C-wgURv6.js";import"./Button-d3vT2I27.js";import"./ButtonBase-B_X4AEO-.js";import"./TransitionGroupContext-DJpdnGjq.js";import"./useForkRef-CevvUXbO.js";import"./CircularProgress-CXJzJnf2.js";import"./Chip-BdfC3Ugd.js";import"./createSvgIcon-3pnZInSB.js";import"./IconButton-C4znVeLO.js";import"./IconButton-jEx60ebh.js";import"./Paper-CBheul9W.js";import"./Paper-CG1nIuW7.js";const C={title:"Molecules/Display/ModalBox",component:a,tags:["autodocs"],decorators:[t=>e.jsx("div",{style:{height:"100vh",overflow:"hidden"},children:e.jsx(t,{})})],parameters:{docs:{description:{component:"\n**ModalBox** is a flexible, theme-aware modal container with optional background blur and 3D placement support via `xyz` props.\n\n---\n## Features\n- Supports background blur overlay for visual depth.\n- Centered responsive layout with dynamic width and height.\n- Declarative 3D placement via `xyz: [x, y, z]`.\n- Works with any child components (forms, dialogs, previews, etc.).\n- Compatible with GUI registry and schema resolvers.\n\n---\n## Props\n- `open`: Boolean that controls visibility.\n- `title`: Optional modal header title.\n- `onClose`: Function triggered when closing.\n- `width`, `height`: Custom modal dimensions.\n- `blurBackground`: Enables or disables background blur.\n- `xyz`: 3D position array for spatial positioning.\n- `children`: Modal content.\n        "}}}},o={render:t=>{const[n,l]=d.useState(!0);return console.log("ModalBox render",{open:n,args:t}),e.jsx("div",{style:{position:"relative",height:"100vh",background:"rgba(0,0,0,0.2)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsxs(a,{...t,open:n,onClose:()=>l(!1),title:t.title||"Modal Title",children:[e.jsx("p",{style:{color:"#fff"},children:"This is an example modal content."}),e.jsx("p",{style:{color:"#ccc"},children:"If you see this text, the modal is visible."})]})})},args:{title:"Example Modal",blurBackground:!0,width:400,height:"auto"}};var r,i,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(s=(i=o.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const D=["Default"];export{o as Default,D as __namedExportsOrder,C as default};
