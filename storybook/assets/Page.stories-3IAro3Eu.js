import{j as e,aw as L}from"./iframe-BamSxvGl.js";import{H as z}from"./Hero-BVDYe1hG.js";import{L as U}from"./Layout-DYJiRBjZ.js";import{P as d}from"./InspectorToggle-zYA6ms9l.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-B_cxOhR3.js";import"./RightSidebarContext-DC9c-OI1.js";import"./TopBar-C0G7yZyh.js";import"./Icon-BYSltbOq.js";import"./Menu-De7Vf5tl.js";import"./useSlot-iMtiR0hJ.js";import"./resolveComponentProps-CeJkfEFt.js";import"./useForkRef-CEd4Lltr.js";import"./useSlotProps-C5DVQp4q.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-upp0xvKF.js";import"./Modal-oSZ9zn9w.js";import"./TransitionGroupContext-Dsjzy0Zl.js";import"./Grow-BboTJdZh.js";import"./List-iFG0l6Is.js";import"./ListContext-O3hO-6P8.js";import"./MenuItem-DNoTubVC.js";import"./ButtonBase-CDq_uQ76.js";import"./listItemIconClasses-DxJ6xFM8.js";import"./listItemTextClasses-gUF37NNN.js";import"./dividerClasses-BZftlWy-.js";import"./index-BGEKDJPD.js";import"./useGuiMediaQuery-wwAu8Zzp.js";import"./getThemeProps-atWsPGFr.js";import"./useInsets-BiwEtkcN.js";import"./Avatar-CTejSSfg.js";import"./createSvgIcon-H1Ui9rrv.js";import"./AppBar-CzFQE5J3.js";import"./Toolbar-B11vCu7Z.js";import"./Button-BXI39ZZO.js";import"./Button-BvX7gL8H.js";import"./CircularProgress-BYWRkUyA.js";import"./Chip-3ZxPCOQf.js";import"./Paper-Biw32b0f.js";import"./ListItemIcon-Dhk1bM8U.js";import"./ListItemText-DTLcNajK.js";import"./Drawer-ZcM56YDZ.js";import"./Tooltip-Bj6JsHBv.js";import"./useControlled-DC9n4FZ6.js";import"./Collapse-CMzi5Fqf.js";import"./IconButton-BfXXQCoy.js";import"./renderer-pdt03z3o.js";import"./AppBar-B7eVMACE.js";import"./Avatar-DlKBX9q_.js";import"./StickyOptionsTop-B39JdOK6.js";import"./runtimeContext-CxK-3G5O.js";import"./IconButton-DrPxXNHQ.js";const ze={title:"Molecules/Content/Page",component:d,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}}},t={args:{children:e.jsx("div",{style:{textAlign:"center",fontSize:"1.5rem",marginTop:"40vh"},children:"This is a default Page."})}},a={args:{padding:6,children:e.jsx("div",{style:{textAlign:"center",fontSize:"1.5rem"},children:"Page with custom padding (6)"})}},r={args:{background:"linear-gradient(135deg, #00bcd4, #006064)",children:e.jsx("div",{style:{color:"white",fontSize:"1.5rem",textAlign:"center",marginTop:"40vh"},children:"Page with gradient background"})}},i={args:{sx:{border:"2px dashed #29b6f6",borderRadius:"16px",backgroundColor:"#e3f2fd"},children:e.jsx("div",{style:{textAlign:"center",fontSize:"1.5rem",marginTop:"40vh"},children:"Page with custom sx styles"})}},n={args:{background:"linear-gradient(135deg, rgba(13, 27, 42, 0.92), rgba(27, 38, 59, 0.96))",padding:5,head:{title:"this.GUI Metadata Demo",description:"Per-page head metadata managed by this.GUI Page.",favicon:"https://res.cloudinary.com/dkwnxf6gm/image/upload/v1761276578/this.gui.npm.png",socialImage:"https://res.cloudinary.com/dkwnxf6gm/image/upload/v1760629119/this.gui.neurons.me_mkapde.png",canonical:"https://neurons-me.github.io/GUI/",siteName:"this.GUI",type:"website",meta:[{name:"keywords",content:"this.gui, metadata, og:image, favicon"}]},children:e.jsxs("div",{style:{color:"white",maxWidth:720},children:[e.jsx("h2",{style:{marginTop:0},children:"Page-level metadata"}),e.jsxs("p",{children:["This story updates ",e.jsx("code",{children:"document.title"}),", favicon, Open Graph tags and custom meta entries while the Page is mounted."]}),e.jsxs("p",{children:["Use ",e.jsx("code",{children:"Page.props.head"})," in declarative specs to control social previews and page metadata without editing ",e.jsx("code",{children:"index.html"}),"."]})]})}},o={render:W=>e.jsx(L,{children:e.jsx(d,{...W,children:e.jsx("div",{style:{textAlign:"center",fontSize:"1.5rem",marginTop:"40vh"},children:"Page with padding that adapts to layout insets."})})}),args:{background:"rgba(0, 188, 212, 0.15)",padding:24,insetsAware:!0}},s={render:()=>e.jsx(L,{children:e.jsx(U,{topBarConfig:{title:"Neuroverse Layout"},leftSidebarConfig:{initialView:"expanded"},rightSidebarConfig:{initialView:"expanded"},children:e.jsx(d,{background:"linear-gradient(135deg, #0a192f, #172a45)",padding:4,children:e.jsx(z,{backgroundSrc:"https://images.unsplash.com/photo-1522202195463-8f34a5fa1d15",backgroundType:"image",overlayColor:"rgba(10, 25, 47, 0.6)",blur:"light",children:e.jsx("div",{style:{color:"white",fontSize:"2rem",fontWeight:600,textAlign:"center",marginTop:"40vh"},children:"Layout with TopBar, LeftSidebar and a HeroSection inside Page"})})})})})};var c,g,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: <div style={{
      textAlign: 'center',
      fontSize: '1.5rem',
      marginTop: '40vh'
    }}>
        This is a default Page.
      </div>
  }
}`,...(p=(g=t.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var m,l,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var x,y,b;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(b=(y=i.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var P,w,S;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(S=(w=n.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var k,j,T;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
      initialView: 'expanded'
    }} rightSidebarConfig={{
      initialView: 'expanded'
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
}`,...(C=(I=s.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};const Ue=["Default","WithPadding","WithBackground","CustomSx","WithHeadMetadata","InsetsAwarePage","LayoutWithPageAndHero"];export{i as CustomSx,t as Default,o as InsetsAwarePage,s as LayoutWithPageAndHero,r as WithBackground,n as WithHeadMetadata,a as WithPadding,Ue as __namedExportsOrder,ze as default};
