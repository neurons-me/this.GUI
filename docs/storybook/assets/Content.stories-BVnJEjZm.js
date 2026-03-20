import{j as a,B as w,a as V}from"./iframe-w4xmodgg.js";import{L as T}from"./Layout-DcBaF2JQ.js";import"./preload-helper-Dp1pzeXC.js";import"./useInsets-CKUBIP4S.js";import"./TopBar-PRwkgVSn.js";import"./Icon-DJUy-n4o.js";import"./Menu-BxZcGw-z.js";import"./useSlot-Hyz3M8yg.js";import"./useForkRef-BiuEh3Zb.js";import"./Grow-CCN2Sx8R.js";import"./utils-CZRIh6tl.js";import"./TransitionGroupContext-HHlZFox5.js";import"./Portal-DnieB5uY.js";import"./List-BjvyU1La.js";import"./ListContext-Afec-LvI.js";import"./Paper-BuGMstDX.js";import"./Modal-COxXFekT.js";import"./useEventCallback-DM97iYES.js";import"./mergeSlotProps-BSsYXVuT.js";import"./MenuItem-DBcDifaU.js";import"./ButtonBase-GIRox2_m.js";import"./listItemIconClasses-D4ESnLPW.js";import"./listItemTextClasses-BGEroACm.js";import"./dividerClasses-EWFQSutL.js";import"./index-anDle2KS.js";import"./useGuiMediaQuery-C8DohpgF.js";import"./getThemeProps-Sdlv51jl.js";import"./Avatar-BdvIZo_r.js";import"./createSvgIcon-DWZ9OLCj.js";import"./Toolbar-BQlSvlUC.js";import"./Tooltip-Dc4Yl9rS.js";import"./useControlled-BmtI4a9q.js";import"./Collapse-C35NAMzL.js";import"./IconButton-y1lSn0eM.js";import"./CircularProgress-BHojE11j.js";import"./Drawer-BimAKpZF.js";import"./Avatar-BIvsUxz_.js";import"./Toolbar-CAJ1zo62.js";const de={title:"GUI/Layout/Content",component:T,parameters:{layout:"fullscreen"}},E=({text:s})=>a.jsx(w,{sx:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"background.default",color:"text.primary"},children:a.jsx(V,{variant:"h4",children:s})}),e=s=>a.jsx(T,{...s,children:a.jsx(E,{text:"This is the Content area"})}),r={render:e,args:{topBarConfig:!1,leftSidebarConfig:!1,rightSidebarConfig:!1,footerConfig:!1}},i={render:e,args:{topBarConfig:{title:"Top Bar Example"}}},t={render:e,args:{leftSidebarConfig:{initialView:"expanded"},rightSidebarConfig:{initialView:"expanded"}}},n={render:e,args:{topBarConfig:{title:"Top Bar Example"},leftSidebarConfig:{initialView:"rail"},rightSidebarConfig:{initialView:"expanded"}}},o={render:e,args:{topBarConfig:{title:"Full Layout"},leftSidebarConfig:{initialView:"rail"},rightSidebarConfig:{initialView:"rail"},footerConfig:{brandLabel:"neurons.me",position:"static",leftElements:[{type:"link",props:{label:"Docs",href:"/docs"}}],rightElements:[{type:"link",props:{label:"GitHub",href:"https://github.com/neurons-me"}}]}}};var p,l,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
