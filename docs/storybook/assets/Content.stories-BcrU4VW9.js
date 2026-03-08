import{j as a}from"./iframe-B8RbS7uw.js";import{L as T}from"./Layout-BDLhq4SR.js";import{B as w}from"./Box-Bx62dzkA.js";import{T as V}from"./Typography-VWwRmWUn.js";import"./preload-helper-Dp1pzeXC.js";import"./useInsets-B_Qh69d9.js";import"./useGuiTheme-CD41npeU.js";import"./useTheme-BwQ1aHS1.js";import"./TopBar-DUhEpf8d.js";import"./Link-Dl80TlRR.js";import"./clsx-B-dksMZM.js";import"./styled-Cw_y6cYg.js";import"./memoTheme-DOBzPGVq.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Typography-9CeYDXau.js";import"./isFocusVisible-B8k4qzLc.js";import"./Icon-DMXHGruU.js";import"./Menu-DyK1c_cN.js";import"./useSlot-xNjt_Hcj.js";import"./useForkRef-BVrKvtW-.js";import"./Grow-CDLY8IRb.js";import"./utils-vtR6qNsB.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./TransitionGroupContext-RnyQTLj3.js";import"./index-CRbWBMRp.js";import"./index-BjD9Kw0B.js";import"./Portal-B_K3TjZx.js";import"./List-DIMl_BlM.js";import"./ListContext-Cnf3pXFL.js";import"./Paper-CQFXOI4Y.js";import"./Modal-BE9DN7F8.js";import"./useEventCallback-DGVuo8xh.js";import"./mergeSlotProps-By6iUkp4.js";import"./MenuItem-CCfufrUj.js";import"./ButtonBase-CwHsjpic.js";import"./listItemIconClasses-CpxGA8ew.js";import"./listItemTextClasses-CbyehWdQ.js";import"./dividerClasses-yCLEuapk.js";import"./index-PdLHxj4j.js";import"./useGuiMediaQuery-DnivS9Ih.js";import"./getThemeProps-CmiYdh08.js";import"./Box-D8YWJpHP.js";import"./Avatar-BGK3OEI1.js";import"./createSvgIcon-qKIB-W4T.js";import"./Toolbar-BAsv9mi7.js";import"./Tooltip-mz007XLf.js";import"./Tooltip-CD-kiCxg.js";import"./useControlled-xToZ4EFh.js";import"./Collapse-Cj0GIqpi.js";import"./IconButton-DCZZFgIO.js";import"./CircularProgress-Dmag3IpP.js";import"./Drawer-CmbVV8vH.js";import"./Avatar-BSDU_Dzn.js";import"./Toolbar-dAXp9UFN.js";import"./Namespace-njUtnFyK.js";const Wr={title:"GUI/Layout/Content",component:T,parameters:{layout:"fullscreen"}},E=({text:p})=>a.jsx(w,{sx:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"background.default",color:"text.primary"},children:a.jsx(V,{variant:"h4",children:p})}),r=p=>a.jsx(T,{...p,children:a.jsx(E,{text:"This is the Content area"})}),e={render:r,args:{topBarConfig:!1,leftSidebarConfig:!1,rightSidebarConfig:!1,footerConfig:!1}},i={render:r,args:{topBarConfig:{title:"Top Bar Example"}}},t={render:r,args:{leftSidebarConfig:{initialView:"expanded"},rightSidebarConfig:{initialView:"expanded"}}},o={render:r,args:{topBarConfig:{title:"Top Bar Example"},leftSidebarConfig:{initialView:"rail"},rightSidebarConfig:{initialView:"expanded"}}},n={render:r,args:{topBarConfig:{title:"Full Layout"},leftSidebarConfig:{initialView:"rail"},rightSidebarConfig:{initialView:"rail"},footerConfig:{brandLabel:"neurons.me",position:"static",leftElements:[{type:"link",props:{label:"Docs",href:"/docs"}}],rightElements:[{type:"link",props:{label:"GitHub",href:"https://github.com/neurons-me"}}]}}};var s,m,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
