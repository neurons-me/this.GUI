import{j as e,aB as L}from"./iframe-BzW5L-sB.js";import{H as z}from"./Hero-DqGdDo9z.js";import{L as U}from"./Layout-DcBqOQZF.js";import{P as d}from"./Page-DNiK7cLz.js";import"./preload-helper-Dp1pzeXC.js";import"./useInsets-CcwpjqH7.js";import"./TopBar-DM_Q97NK.js";import"./Icon-BWddFN6m.js";import"./Menu-uCPCnCHG.js";import"./useSlot-CYJL6v7h.js";import"./useForkRef-BZw98wdx.js";import"./Grow-DFC1Fo7Y.js";import"./utils-CMGnC3nT.js";import"./TransitionGroupContext-DBebgn_y.js";import"./Portal-f-DU1-f2.js";import"./List-CfogoPEj.js";import"./ListContext-CE8eRrev.js";import"./Paper-rE9EeMCB.js";import"./Modal-BoYnYDIX.js";import"./useEventCallback-0bk4YSZd.js";import"./mergeSlotProps-ltbmY89f.js";import"./MenuItem-DD0FWrO4.js";import"./ButtonBase-DEfx69p-.js";import"./listItemIconClasses-jF6qDQ2k.js";import"./listItemTextClasses-BJSyu6-k.js";import"./dividerClasses-CmqGI5f7.js";import"./index-y165L54D.js";import"./useGuiMediaQuery-tdJRKJ6_.js";import"./getThemeProps-B6mr4j-q.js";import"./Avatar-CPUJFFaI.js";import"./createSvgIcon-gnQt3uom.js";import"./Toolbar-5iu1k6JU.js";import"./Tooltip-CpARX0_E.js";import"./useControlled-5D3yaU0Z.js";import"./Collapse-D0wZxnaQ.js";import"./IconButton-D32fSpJH.js";import"./CircularProgress-CqZnmEb2.js";import"./Drawer-DvQ8Ysjc.js";import"./Avatar-BsrjgPgW.js";import"./Toolbar-DHioJSnm.js";const be={title:"Molecules/Content/Page",component:d,tags:["autodocs"],parameters:{docs:{description:{component:`
**Page** is a layout container used to render content inside a layout or route.

---
## Features
- Acts as a flexible container for layout content.
- Supports padding, background color, and custom \`sx\` overrides.
- Centers and spaces content using responsive defaults.
- Works seamlessly inside \`Layout\` components.

---
## Props
- \`children\`: React nodes to render within the page.
- \`padding\`: Number or string for inner spacing.
- \`background\`: Background color or gradient.
- \`head\`: Optional page-level metadata such as title, favicon, social image and custom meta tags.
- \`sx\`: MUI style overrides.
- \`insets\`: Optional positioning insets (top, right, bottom, left) for dynamic positioning.
        `}}}},t={args:{children:e.jsx("div",{style:{textAlign:"center",fontSize:"1.5rem",marginTop:"40vh"},children:"This is a default Page."})}},a={args:{padding:6,children:e.jsx("div",{style:{textAlign:"center",fontSize:"1.5rem"},children:"Page with custom padding (6)"})}},r={args:{background:"linear-gradient(135deg, #00bcd4, #006064)",children:e.jsx("div",{style:{color:"white",fontSize:"1.5rem",textAlign:"center",marginTop:"40vh"},children:"Page with gradient background"})}},n={args:{sx:{border:"2px dashed #29b6f6",borderRadius:"16px",backgroundColor:"#e3f2fd"},children:e.jsx("div",{style:{textAlign:"center",fontSize:"1.5rem",marginTop:"40vh"},children:"Page with custom sx styles"})}},i={args:{background:"linear-gradient(135deg, rgba(13, 27, 42, 0.92), rgba(27, 38, 59, 0.96))",padding:5,head:{title:"this.GUI Metadata Demo",description:"Per-page head metadata managed by this.GUI Page.",favicon:"https://res.cloudinary.com/dkwnxf6gm/image/upload/v1761276578/this.gui.npm.png",socialImage:"https://res.cloudinary.com/dkwnxf6gm/image/upload/v1760629119/this.gui.neurons.me_mkapde.png",canonical:"https://neurons-me.github.io/GUI/",siteName:"this.GUI",type:"website",meta:[{name:"keywords",content:"this.gui, metadata, og:image, favicon"}]},children:e.jsxs("div",{style:{color:"white",maxWidth:720},children:[e.jsx("h2",{style:{marginTop:0},children:"Page-level metadata"}),e.jsxs("p",{children:["This story updates ",e.jsx("code",{children:"document.title"}),", favicon, Open Graph tags and custom meta entries while the Page is mounted."]}),e.jsxs("p",{children:["Use ",e.jsx("code",{children:"Page.props.head"})," in declarative specs to control social previews and page metadata without editing ",e.jsx("code",{children:"index.html"}),"."]})]})}},o={render:W=>e.jsx(L,{children:e.jsx(d,{...W,children:e.jsx("div",{style:{textAlign:"center",fontSize:"1.5rem",marginTop:"40vh"},children:"Page with padding that adapts to layout insets."})})}),args:{background:"rgba(0, 188, 212, 0.15)",padding:24,insetsAware:!0}},s={render:()=>e.jsx(L,{children:e.jsx(U,{topBarConfig:{title:"Neuroverse Layout"},leftSidebarConfig:{initialView:"menu"},rightSidebarConfig:{initialView:"chat"},children:e.jsx(d,{background:"linear-gradient(135deg, #0a192f, #172a45)",padding:4,children:e.jsx(z,{backgroundSrc:"https://images.unsplash.com/photo-1522202195463-8f34a5fa1d15",backgroundType:"image",overlayColor:"rgba(10, 25, 47, 0.6)",blur:"light",children:e.jsx("div",{style:{color:"white",fontSize:"2rem",fontWeight:600,textAlign:"center",marginTop:"40vh"},children:"Layout with TopBar, LeftSidebar and a HeroSection inside Page"})})})})})};var c,g,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: <div style={{
      textAlign: 'center',
      fontSize: '1.5rem',
      marginTop: '40vh'
    }}>
        This is a default Page.
      </div>
  }
}`,...(m=(g=t.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var p,l,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    padding: 6,
    children: <div style={{
      textAlign: 'center',
      fontSize: '1.5rem'
    }}>
        Page with custom padding (6)
      </div>
  }
}`,...(h=(l=a.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var u,f,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    background: 'linear-gradient(135deg, #00bcd4, #006064)',
    children: <div style={{
      color: 'white',
      fontSize: '1.5rem',
      textAlign: 'center',
      marginTop: '40vh'
    }}>
        Page with gradient background
      </div>
  }
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var x,y,b;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    sx: {
      border: '2px dashed #29b6f6',
      borderRadius: '16px',
      backgroundColor: '#e3f2fd'
    },
    children: <div style={{
      textAlign: 'center',
      fontSize: '1.5rem',
      marginTop: '40vh'
    }}>
        Page with custom sx styles
      </div>
  }
}`,...(b=(y=n.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var P,w,S;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    background: 'linear-gradient(135deg, rgba(13, 27, 42, 0.92), rgba(27, 38, 59, 0.96))',
    padding: 5,
    head: {
      title: 'this.GUI Metadata Demo',
      description: 'Per-page head metadata managed by this.GUI Page.',
      favicon: 'https://res.cloudinary.com/dkwnxf6gm/image/upload/v1761276578/this.gui.npm.png',
      socialImage: 'https://res.cloudinary.com/dkwnxf6gm/image/upload/v1760629119/this.gui.neurons.me_mkapde.png',
      canonical: 'https://neurons-me.github.io/GUI/',
      siteName: 'this.GUI',
      type: 'website',
      meta: [{
        name: 'keywords',
        content: 'this.gui, metadata, og:image, favicon'
      }]
    },
    children: <div style={{
      color: 'white',
      maxWidth: 720
    }}>
        <h2 style={{
        marginTop: 0
      }}>Page-level metadata</h2>
        <p>
          This story updates <code>document.title</code>, favicon, Open Graph tags and custom meta
          entries while the Page is mounted.
        </p>
        <p>
          Use <code>Page.props.head</code> in declarative specs to control social previews and page
          metadata without editing <code>index.html</code>.
        </p>
      </div>
  }
}`,...(S=(w=i.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var k,j,T;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <InsetsProvider>
      <Page {...args}>
        <div style={{
        textAlign: 'center',
        fontSize: '1.5rem',
        marginTop: '40vh'
      }}>
          Page with padding that adapts to layout insets.
        </div>
      </Page>
    </InsetsProvider>,
  args: {
    background: "rgba(0, 188, 212, 0.15)",
    padding: 24,
    insetsAware: true
  }
}`,...(T=(j=o.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var A,I,C;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <InsetsProvider>
      <Layout topBarConfig={{
      title: 'Neuroverse Layout'
    }} leftSidebarConfig={{
      initialView: 'menu'
    }} rightSidebarConfig={{
      initialView: 'chat'
    }}>
        <Page background="linear-gradient(135deg, #0a192f, #172a45)" padding={4}>
          <Hero backgroundSrc="https://images.unsplash.com/photo-1522202195463-8f34a5fa1d15" backgroundType="image" overlayColor="rgba(10, 25, 47, 0.6)" blur="light">
            <div style={{
            color: 'white',
            fontSize: '2rem',
            fontWeight: 600,
            textAlign: 'center',
            marginTop: '40vh'
          }}>
              Layout with TopBar, LeftSidebar and a HeroSection inside Page
            </div>
          </Hero>
        </Page>
      </Layout>
    </InsetsProvider>
}`,...(C=(I=s.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};const Pe=["Default","WithPadding","WithBackground","CustomSx","WithHeadMetadata","InsetsAwarePage","LayoutWithPageAndHero"];export{n as CustomSx,t as Default,o as InsetsAwarePage,s as LayoutWithPageAndHero,r as WithBackground,i as WithHeadMetadata,a as WithPadding,Pe as __namedExportsOrder,be as default};
