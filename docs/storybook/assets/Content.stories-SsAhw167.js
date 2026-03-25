import{j as a,B as w,a as V}from"./iframe-CZgKJY_g.js";import{L as T}from"./Layout-ZZZPLkKk.js";import"./preload-helper-Dp1pzeXC.js";import"./useInsets-DClSeNji.js";import"./TopBar-CExCXfaI.js";import"./Icon-BqHHMKUB.js";import"./createSvgIcon-9XekPGPd.js";import"./Menu-BU_0WMgJ.js";import"./useSlot-BxNw1kgK.js";import"./useForkRef-a3o4ROIm.js";import"./Grow-CkAhbZat.js";import"./utils-8g70C0nd.js";import"./TransitionGroupContext-BVftWTQv.js";import"./Portal-ClxGt7-y.js";import"./List-s6I3Catg.js";import"./ListContext-BrZaYVqw.js";import"./Paper-BY-0CTtv.js";import"./Modal-0RPrQlzY.js";import"./useEventCallback-CIkGLTnB.js";import"./mergeSlotProps-SR77E5_x.js";import"./MenuItem-l_Zp7_IZ.js";import"./ButtonBase-Dxoba2pH.js";import"./listItemIconClasses-DywEKC1A.js";import"./listItemTextClasses-CaR3C8AO.js";import"./dividerClasses-CHqwu3Yd.js";import"./index-BjvlUtVH.js";import"./useGuiMediaQuery-DfDZ64zK.js";import"./getThemeProps-CZGPPYX3.js";import"./Avatar-rKihZdFi.js";import"./Toolbar-BC34hXVx.js";import"./Tooltip-CgK_VI9X.js";import"./useControlled-D-jmkTIt.js";import"./Collapse-o7G8BIZh.js";import"./IconButton-DiUbgC9Q.js";import"./CircularProgress-CjipVoL8.js";import"./Drawer-Dvndyosn.js";import"./Avatar-DFc2aU8m.js";import"./Toolbar-CpYXZ4j3.js";const de={title:"GUI/Layout/Content",component:T,parameters:{layout:"fullscreen"}},E=({text:s})=>a.jsx(w,{sx:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"background.default",color:"text.primary"},children:a.jsx(V,{variant:"h4",children:s})}),e=s=>a.jsx(T,{...s,children:a.jsx(E,{text:"This is the Content area"})}),r={render:e,args:{topBarConfig:!1,leftSidebarConfig:!1,rightSidebarConfig:!1,footerConfig:!1}},i={render:e,args:{topBarConfig:{title:"Top Bar Example"}}},t={render:e,args:{leftSidebarConfig:{initialView:"expanded"},rightSidebarConfig:{initialView:"expanded"}}},n={render:e,args:{topBarConfig:{title:"Top Bar Example"},leftSidebarConfig:{initialView:"rail"},rightSidebarConfig:{initialView:"expanded"}}},o={render:e,args:{topBarConfig:{title:"Full Layout"},leftSidebarConfig:{initialView:"rail"},rightSidebarConfig:{initialView:"rail"},footerConfig:{brandLabel:"neurons.me",position:"static",leftElements:[{type:"link",props:{label:"Docs",href:"/docs"}}],rightElements:[{type:"link",props:{label:"GitHub",href:"https://github.com/neurons-me"}}]}}};var p,l,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
