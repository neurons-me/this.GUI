import{j as e}from"./iframe-CZgKJY_g.js";import{H as G}from"./Hero-BxbPpvb3.js";import{B as l}from"./Button-C5_Sd6aI.js";import{T as H}from"./TextField-sZtwxbxh.js";import"./preload-helper-Dp1pzeXC.js";import"./ButtonBase-Dxoba2pH.js";import"./TransitionGroupContext-BVftWTQv.js";import"./useForkRef-a3o4ROIm.js";import"./useEventCallback-CIkGLTnB.js";import"./CircularProgress-CjipVoL8.js";import"./useSlot-BxNw1kgK.js";import"./useFormControl-BT93kgAw.js";import"./formControlState-Dq1zat_P.js";import"./List-s6I3Catg.js";import"./ListContext-BrZaYVqw.js";import"./Modal-0RPrQlzY.js";import"./Portal-ClxGt7-y.js";import"./utils-8g70C0nd.js";import"./Menu-BU_0WMgJ.js";import"./Grow-CkAhbZat.js";import"./Paper-BY-0CTtv.js";import"./mergeSlotProps-SR77E5_x.js";import"./useControlled-D-jmkTIt.js";import"./createSvgIcon-9XekPGPd.js";import"./isMuiElement-fhTvP9WJ.js";const te={title:"Molecules/Display/Hero",component:G,tags:["autodocs"],decorators:[r=>e.jsx("div",{style:{height:"100vh",overflow:"hidden"},children:e.jsx(r,{})})],parameters:{docs:{description:{component:"\n**HeroSection** is a full-screen display component that supports image, GIF, video, or color backgrounds with overlay and blur options.\n\n---\n## Features\n- Background types: `image`, `gif`, `video`, `color`.\n- Overlay color and opacity control.\n- Theme-aware blur effects: `light`, `medium`, `heavy`, `all`.\n- Fully responsive and fills viewport (100vh).\n- Structured content helpers: brand image, header, subheader, description, options.\n\n---\n## Props\n- `backgroundSrc`: Media URL (image, gif, or video).\n- `backgroundType`: Type of background media ('image', 'gif', 'video', or 'color').\n- `backgroundColor`: Color when backgroundType = 'color'.\n- `overlayColor`: Color of overlay.\n- `blur`: Theme-based blur intensity (`light`, `medium`, `heavy`, `all`).\n        "}}}},o={args:{backgroundSrc:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e",backgroundType:"image",blur:"none",layout:"fixed",children:e.jsx("div",{style:{color:"white",fontSize:"2rem",fontWeight:600,textAlign:"center",marginTop:"40vh"},children:"Example: Image Background, Blur none"})}},n={args:{backgroundSrc:"https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",backgroundType:"gif",blur:"light",layout:"fixed",children:e.jsx("div",{style:{color:"white",fontSize:"2rem",fontWeight:600,textAlign:"center",marginTop:"40vh"},children:"Example: GIF Background, Blur light"})}},t={args:{backgroundSrc:"https://www.neurons.me/media/neurons.mp4",backgroundType:"video",blur:"medium",layout:"fixed",children:e.jsx("div",{style:{color:"white",fontSize:"2rem",fontWeight:600,textAlign:"center",marginTop:"40vh"},children:"Example: Video Background, Blur medium"})}},a={args:{backgroundType:"color",backgroundColor:"#0b1114",overlayColor:"rgba(8, 14, 24, 0.55)",brand:{src:"https://res.cloudinary.com/dkwnxf6gm/image/upload/v1760629119/this.gui.neurons.me_mkapde.png",alt:"this.GUI",width:220,maxWidth:"70vw"},header:"this.GUI Runtime",subheader:"Hero Section",typography:"Runtime overview and quick links for the GUI toolchain.",options:e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"contained",color:"primary",children:"Get Started"}),e.jsx(l,{variant:"outlined",color:"inherit",children:"Docs"}),e.jsx(H,{size:"small",placeholder:"Search..."})]}),mode:"left"}},i={args:{backgroundSrc:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e",backgroundType:"image",blur:"heavy",children:e.jsx("div",{style:{color:"white",fontSize:"2rem",fontWeight:600,textAlign:"center",marginTop:"40vh"},children:"Example: Heavy blur overlay (theme preset)"})}},s={render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:16},children:["none","light","medium","heavy","all"].map(r=>e.jsx(G,{backgroundSrc:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e",backgroundType:"image",blur:r,children:e.jsxs("div",{style:{color:"white",fontSize:"1.5rem",fontWeight:600,textAlign:"center",marginTop:"40vh"},children:["Blur = ",r]})},r))})},c={args:{backgroundSrc:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e",backgroundType:"image",overlayColor:"rgba(15, 21, 37, 0.89)",children:e.jsx("div",{style:{color:"white",fontSize:"2rem",fontWeight:600,textAlign:"center",marginTop:"40vh"},children:"Example: Custom Color Overlay"})}};var d,m,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    backgroundSrc: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    backgroundType: 'image',
    blur: 'none',
    layout: 'fixed',
    children: <div style={{
      color: 'white',
      fontSize: '2rem',
      fontWeight: 600,
      textAlign: 'center',
      marginTop: '40vh'
    }}>
        Example: Image Background, Blur none
      </div>
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,u,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    backgroundSrc: 'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif',
    backgroundType: 'gif',
    blur: 'light',
    layout: 'fixed',
    children: <div style={{
      color: 'white',
      fontSize: '2rem',
      fontWeight: 600,
      textAlign: 'center',
      marginTop: '40vh'
    }}>
        Example: GIF Background, Blur light
      </div>
  }
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var y,v,b;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    backgroundSrc: 'https://www.neurons.me/media/neurons.mp4',
    backgroundType: 'video',
    blur: 'medium',
    layout: 'fixed',
    children: <div style={{
      color: 'white',
      fontSize: '2rem',
      fontWeight: 600,
      textAlign: 'center',
      marginTop: '40vh'
    }}>
        Example: Video Background, Blur medium
      </div>
  }
}`,...(b=(v=t.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var f,k,x;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    backgroundType: 'color',
    backgroundColor: '#0b1114',
    overlayColor: 'rgba(8, 14, 24, 0.55)',
    brand: {
      src: 'https://res.cloudinary.com/dkwnxf6gm/image/upload/v1760629119/this.gui.neurons.me_mkapde.png',
      alt: 'this.GUI',
      width: 220,
      maxWidth: '70vw'
    },
    header: 'this.GUI Runtime',
    subheader: 'Hero Section',
    typography: 'Runtime overview and quick links for the GUI toolchain.',
    options: <>
        <Button variant="contained" color="primary">Get Started</Button>
        <Button variant="outlined" color="inherit">Docs</Button>
        <TextField size="small" placeholder="Search..." />
      </>,
    mode: 'left'
  }
}`,...(x=(k=a.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var S,T,w;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    backgroundSrc: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    backgroundType: 'image',
    blur: 'heavy',
    children: <div style={{
      color: 'white',
      fontSize: '2rem',
      fontWeight: 600,
      textAlign: 'center',
      marginTop: '40vh'
    }}>
        Example: Heavy blur overlay (theme preset)
      </div>
  }
}`,...(w=(T=i.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var B,C,j;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 16
  }}>
      {(['none', 'light', 'medium', 'heavy', 'all'] as const).map(b => <Hero key={b} backgroundSrc="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" backgroundType="image" blur={b} children={<div style={{
      color: 'white',
      fontSize: '1.5rem',
      fontWeight: 600,
      textAlign: 'center',
      marginTop: '40vh'
    }}>
              Blur = {b}
            </div>} />)}
    </div>
}`,...(j=(C=s.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var E,z,W;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    backgroundSrc: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    backgroundType: 'image',
    overlayColor: 'rgba(15, 21, 37, 0.89)',
    // Semi-transparent dark overlay
    children: <div style={{
      color: 'white',
      fontSize: '2rem',
      fontWeight: 600,
      textAlign: 'center',
      marginTop: '40vh'
    }}>
        Example: Custom Color Overlay
      </div>
  }
}`,...(W=(z=c.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};const ae=["ImageBackground","GifBackground","VideoBackground","StructuredHero","HeavyExample","BlurVariants","CustomColorExample"];export{s as BlurVariants,c as CustomColorExample,n as GifBackground,i as HeavyExample,o as ImageBackground,a as StructuredHero,t as VideoBackground,ae as __namedExportsOrder,te as default};
