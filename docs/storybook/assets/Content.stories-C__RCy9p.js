import{j as a,B as w,a as V}from"./iframe-D9h36_NB.js";import{L as T}from"./Layout-BftN5PmP.js";import"./preload-helper-Dp1pzeXC.js";import"./useInsets-B1GcWy8E.js";import"./TopBar-CTcgsx-z.js";import"./Icon-0UwWLaxE.js";import"./Menu-B4LHG26A.js";import"./useSlot-AM_X2fSs.js";import"./useForkRef-DJcJK6M1.js";import"./Grow-B2kg65ZE.js";import"./utils-CiNov-PE.js";import"./TransitionGroupContext-speb4CnD.js";import"./Portal-b9kat65T.js";import"./List-C8xHACAX.js";import"./ListContext-TapwBsUa.js";import"./Paper-BbGiJwVi.js";import"./Modal-Bqdskr9o.js";import"./useEventCallback-DWW8G7u7.js";import"./mergeSlotProps-BQrcJhMf.js";import"./MenuItem-f9NExbHK.js";import"./ButtonBase-DIt9aqy4.js";import"./listItemIconClasses-DkShg7Co.js";import"./listItemTextClasses-CLMDxkp7.js";import"./dividerClasses-Bn-DPjVC.js";import"./index-Baw3nCR5.js";import"./useGuiMediaQuery-C0_6UdoU.js";import"./getThemeProps-sPR1FmCD.js";import"./Avatar-B70XSpw_.js";import"./createSvgIcon-BQBlAV31.js";import"./Toolbar-DgEuSs1E.js";import"./Tooltip-L7tT4lGS.js";import"./useControlled-FKug5BEt.js";import"./Collapse-CF5S3hDA.js";import"./IconButton-8SXhoNnx.js";import"./CircularProgress-DYuf6jvR.js";import"./Drawer--nLUbgMM.js";import"./Avatar-CzbgdtV6.js";import"./Toolbar-CFR7H8jC.js";const de={title:"GUI/Layout/Content",component:T,parameters:{layout:"fullscreen"}},E=({text:s})=>a.jsx(w,{sx:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"background.default",color:"text.primary"},children:a.jsx(V,{variant:"h4",children:s})}),e=s=>a.jsx(T,{...s,children:a.jsx(E,{text:"This is the Content area"})}),r={render:e,args:{topBarConfig:!1,leftSidebarConfig:!1,rightSidebarConfig:!1,footerConfig:!1}},i={render:e,args:{topBarConfig:{title:"Top Bar Example"}}},t={render:e,args:{leftSidebarConfig:{initialView:"expanded"},rightSidebarConfig:{initialView:"expanded"}}},n={render:e,args:{topBarConfig:{title:"Top Bar Example"},leftSidebarConfig:{initialView:"rail"},rightSidebarConfig:{initialView:"expanded"}}},o={render:e,args:{topBarConfig:{title:"Full Layout"},leftSidebarConfig:{initialView:"rail"},rightSidebarConfig:{initialView:"rail"},footerConfig:{brandLabel:"neurons.me",position:"static",leftElements:[{type:"link",props:{label:"Docs",href:"/docs"}}],rightElements:[{type:"link",props:{label:"GitHub",href:"https://github.com/neurons-me"}}]}}};var p,l,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: Template,
  args: {
    topBarConfig: false,
    leftSidebarConfig: false,
    rightSidebarConfig: false,
    footerConfig: false
  }
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,f,g;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var C,h,S;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(S=(h=n.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var x,y,B;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(B=(y=o.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};const fe=["OnlyContent","WithTopBar","WithSidebars","WithTopBarAndSidebars","FullLayout"];export{o as FullLayout,r as OnlyContent,t as WithSidebars,i as WithTopBar,n as WithTopBarAndSidebars,fe as __namedExportsOrder,de as default};
