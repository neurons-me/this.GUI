import{j as e}from"./iframe-pzPFiMX_.js";import{H as E}from"./Hero-D488iU2n.js";import"./preload-helper-Dp1pzeXC.js";import"./useTheme-BHTe8Tsy.js";import"./Box-DiPDGrGZ.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./clsx-B-dksMZM.js";const M={title:"Molecules/Display/Hero",component:E,tags:["autodocs"],decorators:[r=>e.jsx("div",{style:{height:"100vh",overflow:"hidden"},children:e.jsx(r,{})})],parameters:{docs:{description:{component:"\n**HeroSection** is a full-screen display component that supports image, GIF, or video backgrounds with overlay and blur options.\n\n---\n## Features\n- Background types: `image`, `gif`, `video`.\n- Overlay color and opacity control.\n- Theme-aware blur effects: `light`, `medium`, `heavy`, `all`.\n- Fully responsive and fills viewport (100vh).\n\n---\n## Props\n- `backgroundSrc`: Media URL (image, gif, or video).\n- `backgroundType`: Type of background media ('image', 'gif', or 'video').\n- `overlayOpacity`: Opacity of overlay (0–1).\n- `overlayColor`: Color of overlay.\n- `blur`: Theme-based blur intensity (`light`, `medium`, `heavy`, `all`).\n        "}}}},o={args:{backgroundSrc:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e",backgroundType:"image",blur:"none",children:e.jsx("div",{style:{color:"white",fontSize:"2rem",fontWeight:600,textAlign:"center",marginTop:"40vh"},children:"Example: Image Background, Blur none"})}},n={args:{backgroundSrc:"https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",backgroundType:"gif",blur:"light",children:e.jsx("div",{style:{color:"white",fontSize:"2rem",fontWeight:600,textAlign:"center",marginTop:"40vh"},children:"Example: GIF Background, Blur light"})}},a={args:{backgroundSrc:"https://www.neurons.me/media/neurons.mp4",backgroundType:"video",blur:"medium",children:e.jsx("div",{style:{color:"white",fontSize:"2rem",fontWeight:600,textAlign:"center",marginTop:"40vh"},children:"Example: Video Background, Blur medium"})}},t={args:{backgroundSrc:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e",backgroundType:"image",blur:"heavy",children:e.jsx("div",{style:{color:"white",fontSize:"2rem",fontWeight:600,textAlign:"center",marginTop:"40vh"},children:"Example: Heavy blur overlay (theme preset)"})}},i={render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:16},children:["none","light","medium","heavy","all"].map(r=>e.jsx(E,{backgroundSrc:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e",backgroundType:"image",blur:r,children:e.jsxs("div",{style:{color:"white",fontSize:"1.5rem",fontWeight:600,textAlign:"center",marginTop:"40vh"},children:["Blur = ",r]})},r))})},s={args:{backgroundSrc:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e",backgroundType:"image",overlayColor:"rgba(15, 21, 37, 0.89)",children:e.jsx("div",{style:{color:"white",fontSize:"2rem",fontWeight:600,textAlign:"center",marginTop:"40vh"},children:"Example: Custom Color Overlay"})}};var c,l,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    backgroundSrc: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    backgroundType: 'image',
    blur: 'none',
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
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,g,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    backgroundSrc: 'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif',
    backgroundType: 'gif',
    blur: 'light',
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
}`,...(p=(g=n.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var u,h,v;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    backgroundSrc: 'https://www.neurons.me/media/neurons.mp4',
    backgroundType: 'video',
    blur: 'medium',
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
}`,...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var y,b,f;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var k,x,S;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(S=(x=i.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var T,B,w;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(w=(B=s.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};const O=["ImageBackground","GifBackground","VideoBackground","HeavyExample","BlurVariants","CustomColorExample"];export{i as BlurVariants,s as CustomColorExample,n as GifBackground,t as HeavyExample,o as ImageBackground,a as VideoBackground,O as __namedExportsOrder,M as default};
