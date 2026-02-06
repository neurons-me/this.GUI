import{j as a}from"./iframe-pzPFiMX_.js";import{L as T}from"./Layout-BPek6Itg.js";import{B as w}from"./Box-C7rrQtJx.js";import{T as V}from"./Typography-DFbRSFHa.js";import"./preload-helper-Dp1pzeXC.js";import"./useInsets-B0ADTsBf.js";import"./useGuiTheme-CrQe3nSt.js";import"./useTheme-BHTe8Tsy.js";import"./TopBar-C-smVXqb.js";import"./Link-DrD3wKqV.js";import"./clsx-B-dksMZM.js";import"./styled-Ddslrojq.js";import"./memoTheme-D6Kqj5GO.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./Typography-DdAUbr75.js";import"./isFocusVisible-B8k4qzLc.js";import"./Icon-63DgR07G.js";import"./Menu-Dn2g6EEb.js";import"./useSlot-DCtCaxkB.js";import"./useForkRef-XcfTKrEz.js";import"./Grow-C1NF2e5W.js";import"./utils-CKyw0omJ.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./TransitionGroupContext-BTo24QG4.js";import"./index-D_PkDxA-.js";import"./index-2UIM6VAJ.js";import"./Portal-Dox09LX0.js";import"./List-BcAkgrYP.js";import"./Paper-DYSFjcuz.js";import"./Modal-CaFxHdAt.js";import"./useEventCallback-IANQAffG.js";import"./mergeSlotProps-By6iUkp4.js";import"./MenuItem-dotwKnXK.js";import"./ButtonBase-CRYnpWlO.js";import"./listItemIconClasses-B8O87iOu.js";import"./listItemTextClasses-Bvxa1hv0.js";import"./dividerClasses-DWExi19l.js";import"./index-DbJy1Rfr.js";import"./useGuiMediaQuery-BXNP_OU9.js";import"./getThemeProps-Bn_IWXdk.js";import"./Box-DiPDGrGZ.js";import"./Avatar-DCQHNEup.js";import"./createSvgIcon-DfVuB3eY.js";import"./Toolbar-D1SHp-RC.js";import"./Tooltip-DjRy3b-3.js";import"./Tooltip-aq78OepU.js";import"./useControlled-DcEk1YEb.js";import"./Collapse-DbrqzVBK.js";import"./IconButton-CezSl7Em.js";import"./CircularProgress-CDK3cCwJ.js";import"./Drawer-DPRanx5Q.js";import"./Avatar-Cx8U4qmL.js";import"./Toolbar-C1Xuoe6m.js";import"./Namespace-BNJYJB4l.js";const jr={title:"GUI/Layout/Content",component:T,parameters:{layout:"fullscreen"}},E=({text:p})=>a.jsx(w,{sx:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"background.default",color:"text.primary"},children:a.jsx(V,{variant:"h4",children:p})}),r=p=>a.jsx(T,{...p,children:a.jsx(E,{text:"This is the Content area"})}),e={render:r,args:{topBarConfig:!1,leftSidebarConfig:!1,rightSidebarConfig:!1,footerConfig:!1}},i={render:r,args:{topBarConfig:{title:"Top Bar Example"}}},t={render:r,args:{leftSidebarConfig:{initialView:"expanded"},rightSidebarConfig:{initialView:"expanded"}}},o={render:r,args:{topBarConfig:{title:"Top Bar Example"},leftSidebarConfig:{initialView:"rail"},rightSidebarConfig:{initialView:"expanded"}}},n={render:r,args:{topBarConfig:{title:"Full Layout"},leftSidebarConfig:{initialView:"rail"},rightSidebarConfig:{initialView:"rail"},footerConfig:{brandLabel:"neurons.me",position:"static",leftElements:[{type:"link",props:{label:"Docs",href:"/docs"}}],rightElements:[{type:"link",props:{label:"GitHub",href:"https://github.com/neurons-me"}}]}}};var s,m,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: Template,
  args: {
    topBarConfig: false,
    leftSidebarConfig: false,
    rightSidebarConfig: false,
    footerConfig: false
  }
}`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,f,g;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: Template,
  args: {
    topBarConfig: {
      title: 'Top Bar Example'
    }
  }
}`,...(g=(f=i.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var c,u,b;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: Template,
  args: {
    leftSidebarConfig: {
      initialView: 'expanded'
    },
    rightSidebarConfig: {
      initialView: 'expanded'
    }
  }
}`,...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var C,h,S;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: Template,
  args: {
    topBarConfig: {
      title: 'Top Bar Example'
    },
    leftSidebarConfig: {
      initialView: 'rail'
    },
    rightSidebarConfig: {
      initialView: 'expanded'
    }
  }
}`,...(S=(h=o.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var x,y,B;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: Template,
  args: {
    topBarConfig: {
      title: 'Full Layout'
    },
    leftSidebarConfig: {
      initialView: 'rail'
    },
    rightSidebarConfig: {
      initialView: 'rail'
    },
    footerConfig: {
      brandLabel: 'neurons.me',
      position: 'static',
      leftElements: [{
        type: 'link',
        props: {
          label: 'Docs',
          href: '/docs'
        }
      }],
      rightElements: [{
        type: 'link',
        props: {
          label: 'GitHub',
          href: 'https://github.com/neurons-me'
        }
      }]
    }
  }
}`,...(B=(y=n.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};const Wr=["OnlyContent","WithTopBar","WithSidebars","WithTopBarAndSidebars","FullLayout"];export{n as FullLayout,e as OnlyContent,t as WithSidebars,i as WithTopBar,o as WithTopBarAndSidebars,Wr as __namedExportsOrder,jr as default};
