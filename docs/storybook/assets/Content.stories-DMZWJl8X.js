import{j as a,B as w,a as V}from"./iframe-CSPXPvkq.js";import{L as T}from"./Layout-FDB5an1m.js";import"./preload-helper-Dp1pzeXC.js";import"./useInsets-OcH9Akm-.js";import"./TopBar-VA2jqEf0.js";import"./Icon-BIK4291a.js";import"./Menu-5l2OKmjg.js";import"./useSlot-Cl4W1ueF.js";import"./useForkRef-DeapipiR.js";import"./Grow-C9oJF6dK.js";import"./utils-vv-3YkLU.js";import"./TransitionGroupContext-9pMhmw2R.js";import"./Portal-9uMmV0im.js";import"./List-DSDAuJoH.js";import"./ListContext-uxNHpr-6.js";import"./Paper-CN1kNCfT.js";import"./Modal-DO4jLd0s.js";import"./useEventCallback-qbZ4_BE0.js";import"./mergeSlotProps-CtT-Kiwg.js";import"./MenuItem-TcpAUkFX.js";import"./ButtonBase-BdWP8PMp.js";import"./listItemIconClasses-DNEroyXd.js";import"./listItemTextClasses-SNP7leTv.js";import"./dividerClasses-F3T3Yh7A.js";import"./index-VqAWzEne.js";import"./useGuiMediaQuery-D7tkCuY0.js";import"./getThemeProps-CdfxErkN.js";import"./Avatar-Cdkk8xPu.js";import"./createSvgIcon--i9x_yOr.js";import"./Toolbar-BgxVgw75.js";import"./Tooltip-C31OqTwD.js";import"./useControlled-CpR5adJ0.js";import"./Collapse-DEQQnkcg.js";import"./IconButton-B8w1Qu8G.js";import"./CircularProgress-36vm5aKe.js";import"./Drawer-CgEfiN-9.js";import"./Toolbar-B6E3yMXg.js";import"./Avatar-B4PA4chD.js";const de={title:"GUI/Layout/Content",component:T,parameters:{layout:"fullscreen"}},E=({text:s})=>a.jsx(w,{sx:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"background.default",color:"text.primary"},children:a.jsx(V,{variant:"h4",children:s})}),e=s=>a.jsx(T,{...s,children:a.jsx(E,{text:"This is the Content area"})}),r={render:e,args:{topBarConfig:!1,leftSidebarConfig:!1,rightSidebarConfig:!1,footerConfig:!1}},i={render:e,args:{topBarConfig:{title:"Top Bar Example"}}},t={render:e,args:{leftSidebarConfig:{initialView:"expanded"},rightSidebarConfig:{initialView:"expanded"}}},n={render:e,args:{topBarConfig:{title:"Top Bar Example"},leftSidebarConfig:{initialView:"rail"},rightSidebarConfig:{initialView:"expanded"}}},o={render:e,args:{topBarConfig:{title:"Full Layout"},leftSidebarConfig:{initialView:"rail"},rightSidebarConfig:{initialView:"rail"},footerConfig:{brandLabel:"neurons.me",position:"static",leftElements:[{type:"link",props:{label:"Docs",href:"/docs"}}],rightElements:[{type:"link",props:{label:"GitHub",href:"https://github.com/neurons-me"}}]}}};var p,l,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
