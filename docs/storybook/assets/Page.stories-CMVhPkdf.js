import{j as e,an as T}from"./iframe-pzPFiMX_.js";import{H as C}from"./Hero-D488iU2n.js";import{L}from"./Layout-BPek6Itg.js";import{P as s}from"./Page-DfxF7O4i.js";import"./preload-helper-Dp1pzeXC.js";import"./useTheme-BHTe8Tsy.js";import"./Box-DiPDGrGZ.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./clsx-B-dksMZM.js";import"./useInsets-B0ADTsBf.js";import"./useGuiTheme-CrQe3nSt.js";import"./Box-C7rrQtJx.js";import"./TopBar-C-smVXqb.js";import"./Link-DrD3wKqV.js";import"./styled-Ddslrojq.js";import"./memoTheme-D6Kqj5GO.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Typography-DdAUbr75.js";import"./isFocusVisible-B8k4qzLc.js";import"./Icon-63DgR07G.js";import"./Menu-Dn2g6EEb.js";import"./useSlot-DCtCaxkB.js";import"./useForkRef-XcfTKrEz.js";import"./Grow-C1NF2e5W.js";import"./utils-CKyw0omJ.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./TransitionGroupContext-BTo24QG4.js";import"./index-D_PkDxA-.js";import"./index-2UIM6VAJ.js";import"./Portal-Dox09LX0.js";import"./List-BcAkgrYP.js";import"./Paper-DYSFjcuz.js";import"./Modal-CaFxHdAt.js";import"./useEventCallback-IANQAffG.js";import"./mergeSlotProps-By6iUkp4.js";import"./MenuItem-dotwKnXK.js";import"./ButtonBase-CRYnpWlO.js";import"./listItemIconClasses-B8O87iOu.js";import"./listItemTextClasses-Bvxa1hv0.js";import"./dividerClasses-DWExi19l.js";import"./index-DbJy1Rfr.js";import"./useGuiMediaQuery-BXNP_OU9.js";import"./getThemeProps-Bn_IWXdk.js";import"./Avatar-DCQHNEup.js";import"./createSvgIcon-DfVuB3eY.js";import"./Toolbar-D1SHp-RC.js";import"./Tooltip-DjRy3b-3.js";import"./Tooltip-aq78OepU.js";import"./useControlled-DcEk1YEb.js";import"./Typography-DFbRSFHa.js";import"./Collapse-DbrqzVBK.js";import"./IconButton-CezSl7Em.js";import"./CircularProgress-CDK3cCwJ.js";import"./Drawer-DPRanx5Q.js";import"./Avatar-Cx8U4qmL.js";import"./Toolbar-C1Xuoe6m.js";import"./Namespace-BNJYJB4l.js";const Ie={title:"Molecules/Content/Page",component:s,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}}},r={args:{children:e.jsx("div",{style:{textAlign:"center",fontSize:"1.5rem",marginTop:"40vh"},children:"This is a default Page."})}},t={args:{padding:6,children:e.jsx("div",{style:{textAlign:"center",fontSize:"1.5rem"},children:"Page with custom padding (6)"})}},i={args:{background:"linear-gradient(135deg, #00bcd4, #006064)",children:e.jsx("div",{style:{color:"white",fontSize:"1.5rem",textAlign:"center",marginTop:"40vh"},children:"Page with gradient background"})}},o={args:{sx:{border:"2px dashed #29b6f6",borderRadius:"16px",backgroundColor:"#e3f2fd"},children:e.jsx("div",{style:{textAlign:"center",fontSize:"1.5rem",marginTop:"40vh"},children:"Page with custom sx styles"})}},n={render:j=>e.jsx(T,{children:e.jsx(s,{...j,children:e.jsx("div",{style:{textAlign:"center",fontSize:"1.5rem",marginTop:"40vh"},children:"Page with padding that adapts to layout insets."})})}),args:{background:"rgba(0, 188, 212, 0.15)",padding:24,insetsAware:!0}},a={render:()=>e.jsx(T,{children:e.jsx(L,{topBarConfig:{title:"Neuroverse Layout"},leftSidebarConfig:{initialView:"menu"},rightSidebarConfig:{initialView:"chat"},children:e.jsx(s,{background:"linear-gradient(135deg, #0a192f, #172a45)",padding:4,children:e.jsx(C,{backgroundSrc:"https://images.unsplash.com/photo-1522202195463-8f34a5fa1d15",backgroundType:"image",overlayColor:"rgba(10, 25, 47, 0.6)",blur:"light",children:e.jsx("div",{style:{color:"white",fontSize:"2rem",fontWeight:600,textAlign:"center",marginTop:"40vh"},children:"Layout with TopBar, LeftSidebar and a HeroSection inside Page"})})})})})};var d,p,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(A=(k=a.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};const Be=["Default","WithPadding","WithBackground","CustomSx","InsetsAwarePage","LayoutWithPageAndHero"];export{o as CustomSx,r as Default,n as InsetsAwarePage,a as LayoutWithPageAndHero,i as WithBackground,t as WithPadding,Be as __namedExportsOrder,Ie as default};
