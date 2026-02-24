import{j as a}from"./iframe-BYWeTbVw.js";import{L as T}from"./Layout-fpHXjpOw.js";import{B as w}from"./Box-D2VrL_Qb.js";import{T as V}from"./Typography-BTe5Sves.js";import"./preload-helper-Dp1pzeXC.js";import"./useInsets-D4ZqczkW.js";import"./useGuiTheme-z8jC6V9j.js";import"./useTheme-hQc6TNga.js";import"./TopBar-BP8LfpL9.js";import"./Link-_k3b3YPk.js";import"./clsx-B-dksMZM.js";import"./styled-BR6p0OHR.js";import"./memoTheme-BnPFCUjU.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Typography-DYoqaNaH.js";import"./isFocusVisible-B8k4qzLc.js";import"./Icon-_58-9ZDr.js";import"./Menu-BkRjg2YF.js";import"./useSlot-B-OlYqSH.js";import"./useForkRef-BLLRJTal.js";import"./Grow-CkW5MtLS.js";import"./utils-FfNPbSOm.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./TransitionGroupContext-DUPMztxk.js";import"./index-CBSdJPmc.js";import"./index-CLd_qEH-.js";import"./Portal-DgeMxvnH.js";import"./List-7hVeegK-.js";import"./ListContext-ClkrU-WG.js";import"./Paper-DTgcOaJn.js";import"./Modal-BeaV7_Sg.js";import"./useEventCallback-KgHUuHRa.js";import"./mergeSlotProps-By6iUkp4.js";import"./MenuItem-f22iK8iA.js";import"./ButtonBase-tHL4M-xw.js";import"./listItemIconClasses-CpxGA8ew.js";import"./listItemTextClasses-CbyehWdQ.js";import"./dividerClasses-yCLEuapk.js";import"./index-D1Q95mC-.js";import"./useGuiMediaQuery-B0D5_Pjc.js";import"./getThemeProps-BU2YxKoa.js";import"./Box-DrLvxTuL.js";import"./Avatar-CYewmXxi.js";import"./createSvgIcon-BaqaXWN0.js";import"./Toolbar-DRIkIAsh.js";import"./Tooltip-qCTvghLq.js";import"./Tooltip-DQeMcL1S.js";import"./useControlled-BwyH7ljD.js";import"./Collapse-CjSbSCLT.js";import"./IconButton-DCpYppOl.js";import"./CircularProgress-CDk05OBk.js";import"./Drawer-BP7QDgVi.js";import"./Avatar-DyajXuLN.js";import"./Toolbar-CWFlF6Sv.js";import"./Namespace-BUC6oKKr.js";const Wr={title:"GUI/Layout/Content",component:T,parameters:{layout:"fullscreen"}},E=({text:p})=>a.jsx(w,{sx:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"background.default",color:"text.primary"},children:a.jsx(V,{variant:"h4",children:p})}),r=p=>a.jsx(T,{...p,children:a.jsx(E,{text:"This is the Content area"})}),e={render:r,args:{topBarConfig:!1,leftSidebarConfig:!1,rightSidebarConfig:!1,footerConfig:!1}},i={render:r,args:{topBarConfig:{title:"Top Bar Example"}}},t={render:r,args:{leftSidebarConfig:{initialView:"expanded"},rightSidebarConfig:{initialView:"expanded"}}},o={render:r,args:{topBarConfig:{title:"Top Bar Example"},leftSidebarConfig:{initialView:"rail"},rightSidebarConfig:{initialView:"expanded"}}},n={render:r,args:{topBarConfig:{title:"Full Layout"},leftSidebarConfig:{initialView:"rail"},rightSidebarConfig:{initialView:"rail"},footerConfig:{brandLabel:"neurons.me",position:"static",leftElements:[{type:"link",props:{label:"Docs",href:"/docs"}}],rightElements:[{type:"link",props:{label:"GitHub",href:"https://github.com/neurons-me"}}]}}};var s,m,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(B=(y=n.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};const kr=["OnlyContent","WithTopBar","WithSidebars","WithTopBarAndSidebars","FullLayout"];export{n as FullLayout,e as OnlyContent,t as WithSidebars,i as WithTopBar,o as WithTopBarAndSidebars,kr as __namedExportsOrder,Wr as default};
