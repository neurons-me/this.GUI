import{j as e,aD as T}from"./iframe-7zAExrak.js";import{H as C}from"./Hero-BYc5QKCw.js";import{L}from"./Layout-B6VY4tmm.js";import{P as s}from"./Page-CIFUg-rp.js";import"./preload-helper-Dp1pzeXC.js";import"./useInsets-S4d32CcO.js";import"./TopBar-B2rCDWiW.js";import"./Icon-BKZY08Mr.js";import"./Menu-BVp4xYvd.js";import"./useSlot-DUgQAWsg.js";import"./useForkRef-Di3AUW5l.js";import"./Grow-BQui6Aab.js";import"./utils-S_FrVrRf.js";import"./TransitionGroupContext-C71qxxuA.js";import"./Portal-BPmUqJ6p.js";import"./List-B6yPdRqj.js";import"./ListContext-cj5eClnR.js";import"./Paper-5tXzywrn.js";import"./Modal-C9ZT4FIo.js";import"./useEventCallback-C0kgqBIO.js";import"./mergeSlotProps-oOjM-Dcy.js";import"./MenuItem-BiFBaN5W.js";import"./ButtonBase-b3Y5L-At.js";import"./listItemIconClasses-CCcuLqra.js";import"./listItemTextClasses-BkQpWQDJ.js";import"./dividerClasses-Bn4n_-nb.js";import"./index-BQiZIFOf.js";import"./useGuiMediaQuery-CAaFDQRO.js";import"./getThemeProps-CaR9ERfd.js";import"./Avatar-YyBZJyIO.js";import"./createSvgIcon-OXcblsJI.js";import"./Toolbar-BN0trzD-.js";import"./Tooltip-DLgO_vMn.js";import"./useControlled-Brbb2wgh.js";import"./Collapse-Butc5uxb.js";import"./IconButton-CIzZpMEu.js";import"./CircularProgress-CvcIHJmp.js";import"./Drawer-D3zNi6Y1.js";import"./Avatar-BEeXfI0T.js";import"./Toolbar-oaG3PeLD.js";const fe={title:"Molecules/Content/Page",component:s,tags:["autodocs"],parameters:{docs:{description:{component:`
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
- \`sx\`: MUI style overrides.
- \`insets\`: Optional positioning insets (top, right, bottom, left) for dynamic positioning.
        `}}}},r={args:{children:e.jsx("div",{style:{textAlign:"center",fontSize:"1.5rem",marginTop:"40vh"},children:"This is a default Page."})}},t={args:{padding:6,children:e.jsx("div",{style:{textAlign:"center",fontSize:"1.5rem"},children:"Page with custom padding (6)"})}},i={args:{background:"linear-gradient(135deg, #00bcd4, #006064)",children:e.jsx("div",{style:{color:"white",fontSize:"1.5rem",textAlign:"center",marginTop:"40vh"},children:"Page with gradient background"})}},o={args:{sx:{border:"2px dashed #29b6f6",borderRadius:"16px",backgroundColor:"#e3f2fd"},children:e.jsx("div",{style:{textAlign:"center",fontSize:"1.5rem",marginTop:"40vh"},children:"Page with custom sx styles"})}},n={render:j=>e.jsx(T,{children:e.jsx(s,{...j,children:e.jsx("div",{style:{textAlign:"center",fontSize:"1.5rem",marginTop:"40vh"},children:"Page with padding that adapts to layout insets."})})}),args:{background:"rgba(0, 188, 212, 0.15)",padding:24,insetsAware:!0}},a={render:()=>e.jsx(T,{children:e.jsx(L,{topBarConfig:{title:"Neuroverse Layout"},leftSidebarConfig:{initialView:"menu"},rightSidebarConfig:{initialView:"chat"},children:e.jsx(s,{background:"linear-gradient(135deg, #0a192f, #172a45)",padding:4,children:e.jsx(C,{backgroundSrc:"https://images.unsplash.com/photo-1522202195463-8f34a5fa1d15",backgroundType:"image",overlayColor:"rgba(10, 25, 47, 0.6)",blur:"light",children:e.jsx("div",{style:{color:"white",fontSize:"2rem",fontWeight:600,textAlign:"center",marginTop:"40vh"},children:"Layout with TopBar, LeftSidebar and a HeroSection inside Page"})})})})})};var d,g,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: <div style={{
      textAlign: 'center',
      fontSize: '1.5rem',
      marginTop: '40vh'
    }}>
        This is a default Page.
      </div>
  }
}`,...(c=(g=r.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};var p,m,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    padding: 6,
    children: <div style={{
      textAlign: 'center',
      fontSize: '1.5rem'
    }}>
        Page with custom padding (6)
      </div>
  }
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,h,f;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,v,b;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(b=(v=o.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var y,P,S;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(S=(P=n.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var w,k,A;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(A=(k=a.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};const xe=["Default","WithPadding","WithBackground","CustomSx","InsetsAwarePage","LayoutWithPageAndHero"];export{o as CustomSx,r as Default,n as InsetsAwarePage,a as LayoutWithPageAndHero,i as WithBackground,t as WithPadding,xe as __namedExportsOrder,fe as default};
