import{j as a,B as w,a as V}from"./iframe-6uH7LS29.js";import{L as T}from"./Layout-6J7KJ4pe.js";import"./preload-helper-Dp1pzeXC.js";import"./useInsets-yC1Typ5y.js";import"./TopBar-BjVH_5eA.js";import"./Icon-pFsV1zMY.js";import"./Menu-pF_SJp2N.js";import"./useSlot-BNspzQsr.js";import"./useForkRef-DHyRY2fA.js";import"./Grow-Ceoj-WsW.js";import"./utils-TdGZNhF9.js";import"./TransitionGroupContext-BkV_2tYX.js";import"./Portal-BSfwfkN1.js";import"./List-fs1uovO4.js";import"./ListContext-g5RfciKr.js";import"./Paper-svpWbYa2.js";import"./Modal-BKjM9TFc.js";import"./useEventCallback-5BkAEj5O.js";import"./mergeSlotProps-Di-ZIovM.js";import"./MenuItem-CyEFQD34.js";import"./ButtonBase-BEo9qRst.js";import"./listItemIconClasses-Ba9ceW1H.js";import"./listItemTextClasses-DmqPxHNV.js";import"./dividerClasses-WFQetUts.js";import"./index-BAlqJfed.js";import"./useGuiMediaQuery-a77xVbOj.js";import"./getThemeProps-BBEUB_Bz.js";import"./Avatar-CKtZNsGr.js";import"./createSvgIcon-BRGGSh50.js";import"./Toolbar-ChGBRuFY.js";import"./Tooltip-Bs8_iAY_.js";import"./useControlled-B8TgfIWx.js";import"./Collapse-u7AQmgHv.js";import"./IconButton-CUUubhZP.js";import"./CircularProgress--WBlmhB1.js";import"./Drawer-B7bNGe4C.js";import"./Toolbar-CM0eGwqg.js";import"./Avatar-BkqZFBuK.js";const de={title:"GUI/Layout/Content",component:T,parameters:{layout:"fullscreen"}},E=({text:s})=>a.jsx(w,{sx:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"background.default",color:"text.primary"},children:a.jsx(V,{variant:"h4",children:s})}),e=s=>a.jsx(T,{...s,children:a.jsx(E,{text:"This is the Content area"})}),r={render:e,args:{topBarConfig:!1,leftSidebarConfig:!1,rightSidebarConfig:!1,footerConfig:!1}},i={render:e,args:{topBarConfig:{title:"Top Bar Example"}}},t={render:e,args:{leftSidebarConfig:{initialView:"expanded"},rightSidebarConfig:{initialView:"expanded"}}},n={render:e,args:{topBarConfig:{title:"Top Bar Example"},leftSidebarConfig:{initialView:"rail"},rightSidebarConfig:{initialView:"expanded"}}},o={render:e,args:{topBarConfig:{title:"Full Layout"},leftSidebarConfig:{initialView:"rail"},rightSidebarConfig:{initialView:"rail"},footerConfig:{brandLabel:"neurons.me",position:"static",leftElements:[{type:"link",props:{label:"Docs",href:"/docs"}}],rightElements:[{type:"link",props:{label:"GitHub",href:"https://github.com/neurons-me"}}]}}};var p,l,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
