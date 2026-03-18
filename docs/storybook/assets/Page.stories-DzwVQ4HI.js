import{j as e,ao as T}from"./iframe-C1GRP0hj.js";import{H as C}from"./Hero-CE75j9lH.js";import{L}from"./Layout-D_GzFb6q.js";import{P as s}from"./Page-DAkV6Uig.js";import"./preload-helper-Dp1pzeXC.js";import"./useTheme-CCB-ESoo.js";import"./Box-C7pz1-Z6.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./clsx-B-dksMZM.js";import"./useInsets-CCla-Zan.js";import"./useGuiTheme-D36Os2VD.js";import"./Box-VzSXm9Df.js";import"./TopBar-DIs4mLM7.js";import"./Link-BhgdegEP.js";import"./styled-8fWbaqUV.js";import"./memoTheme-q_hzTFOc.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Typography-CeTjeXIp.js";import"./isFocusVisible-B8k4qzLc.js";import"./Icon-K6w2oQgw.js";import"./Menu-BzhukQWv.js";import"./useSlot-CKSjisIe.js";import"./useForkRef-BhU-CSAb.js";import"./Grow-D_K8rWid.js";import"./utils--q6FxFGJ.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./TransitionGroupContext-qNdRr-hk.js";import"./index-DyzKfLlg.js";import"./index-Be--jnHL.js";import"./Portal-G2dvxw46.js";import"./List-CQGWwlqq.js";import"./ListContext-Bpm4Q4ce.js";import"./Paper-DxQ0_Ivm.js";import"./Modal-BWGIaPdl.js";import"./useEventCallback-Bs6yfZ5k.js";import"./mergeSlotProps-By6iUkp4.js";import"./MenuItem-BxvuRwOv.js";import"./ButtonBase-rOZxXEMH.js";import"./listItemIconClasses-CpxGA8ew.js";import"./listItemTextClasses-CbyehWdQ.js";import"./dividerClasses-yCLEuapk.js";import"./index-OzLNYajA.js";import"./useGuiMediaQuery-r_7asRKw.js";import"./getThemeProps-CqN2UaJz.js";import"./Avatar-BighDsha.js";import"./createSvgIcon-C_EqHwxV.js";import"./Toolbar-BM_zttvx.js";import"./Tooltip-DEv4E9za.js";import"./useControlled-C5BOGgFW.js";import"./Typography-C12rh2ix.js";import"./Collapse-QvAR5_zn.js";import"./IconButton-Cgo9HMnL.js";import"./CircularProgress-B-nFzJrp.js";import"./Drawer-CuEDgmxW.js";import"./Avatar-CJus_FWz.js";import"./Toolbar-3vHmmoFT.js";const He={title:"Molecules/Content/Page",component:s,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}}},r={args:{children:e.jsx("div",{style:{textAlign:"center",fontSize:"1.5rem",marginTop:"40vh"},children:"This is a default Page."})}},t={args:{padding:6,children:e.jsx("div",{style:{textAlign:"center",fontSize:"1.5rem"},children:"Page with custom padding (6)"})}},o={args:{background:"linear-gradient(135deg, #00bcd4, #006064)",children:e.jsx("div",{style:{color:"white",fontSize:"1.5rem",textAlign:"center",marginTop:"40vh"},children:"Page with gradient background"})}},i={args:{sx:{border:"2px dashed #29b6f6",borderRadius:"16px",backgroundColor:"#e3f2fd"},children:e.jsx("div",{style:{textAlign:"center",fontSize:"1.5rem",marginTop:"40vh"},children:"Page with custom sx styles"})}},n={render:j=>e.jsx(T,{children:e.jsx(s,{...j,children:e.jsx("div",{style:{textAlign:"center",fontSize:"1.5rem",marginTop:"40vh"},children:"Page with padding that adapts to layout insets."})})}),args:{background:"rgba(0, 188, 212, 0.15)",padding:24,insetsAware:!0}},a={render:()=>e.jsx(T,{children:e.jsx(L,{topBarConfig:{title:"Neuroverse Layout"},leftSidebarConfig:{initialView:"menu"},rightSidebarConfig:{initialView:"chat"},children:e.jsx(s,{background:"linear-gradient(135deg, #0a192f, #172a45)",padding:4,children:e.jsx(C,{backgroundSrc:"https://images.unsplash.com/photo-1522202195463-8f34a5fa1d15",backgroundType:"image",overlayColor:"rgba(10, 25, 47, 0.6)",blur:"light",children:e.jsx("div",{style:{color:"white",fontSize:"2rem",fontWeight:600,textAlign:"center",marginTop:"40vh"},children:"Layout with TopBar, LeftSidebar and a HeroSection inside Page"})})})})})};var d,p,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: <div style={{
      textAlign: 'center',
      fontSize: '1.5rem',
      marginTop: '40vh'
    }}>
        This is a default Page.
      </div>
  }
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var c,m,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    padding: 6,
    children: <div style={{
      textAlign: 'center',
      fontSize: '1.5rem'
    }}>
        Page with custom padding (6)
      </div>
  }
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,h,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,v,b;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(b=(v=i.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var y,P,S;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(A=(k=a.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};const Ie=["Default","WithPadding","WithBackground","CustomSx","InsetsAwarePage","LayoutWithPageAndHero"];export{i as CustomSx,r as Default,n as InsetsAwarePage,a as LayoutWithPageAndHero,o as WithBackground,t as WithPadding,Ie as __namedExportsOrder,He as default};
