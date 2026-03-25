import{j as a,B as w,a as V}from"./iframe-DzQ8qlS5.js";import{L as T}from"./Layout-BWm2S53Q.js";import"./preload-helper-Dp1pzeXC.js";import"./useInsets-DdlTS0Pm.js";import"./TopBar-Bou3m4WB.js";import"./Icon-4frSiLka.js";import"./Menu-D_R1YzcJ.js";import"./useSlot-h4wbdPQ6.js";import"./useForkRef-DYkjEL9P.js";import"./Grow-ns7P5pJg.js";import"./utils-DGQ64b3x.js";import"./TransitionGroupContext-dQxgozz0.js";import"./Portal-KTuVOcz1.js";import"./List-dcCuc40T.js";import"./ListContext-M3Y7C2tn.js";import"./Paper-CEEYXBBa.js";import"./Modal-C_OOCtgn.js";import"./mergeSlotProps-B1WWk4e8.js";import"./MenuItem-Ccglbbh2.js";import"./ButtonBase-B1YySNdu.js";import"./listItemIconClasses-Ay7ZmSTC.js";import"./listItemTextClasses-HDSnwLIK.js";import"./dividerClasses-DKcoqmU9.js";import"./index-OmJbjHO8.js";import"./useGuiMediaQuery-Bvm6Rz9e.js";import"./getThemeProps-DZDwyubZ.js";import"./Avatar-DZAeW0FD.js";import"./createSvgIcon-OxKoK4oj.js";import"./Toolbar-B3-QndOh.js";import"./Button-C4I8Jen7.js";import"./Button-BFu9Bpz3.js";import"./CircularProgress-uyQXuKQe.js";import"./Tooltip-Dbc7ESCX.js";import"./useControlled-BLrQGYn1.js";import"./Collapse-BLjrlWQm.js";import"./IconButton-C1sZM5VB.js";import"./Drawer-B2-A1xQa.js";import"./Toolbar-BOpZhqL0.js";import"./Avatar-CcV9CE4U.js";const fe={title:"GUI/Layout/Content",component:T,parameters:{layout:"fullscreen"}},E=({text:s})=>a.jsx(w,{sx:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"background.default",color:"text.primary"},children:a.jsx(V,{variant:"h4",children:s})}),e=s=>a.jsx(T,{...s,children:a.jsx(E,{text:"This is the Content area"})}),r={render:e,args:{topBarConfig:!1,leftSidebarConfig:!1,rightSidebarConfig:!1,footerConfig:!1}},i={render:e,args:{topBarConfig:{title:"Top Bar Example"}}},t={render:e,args:{leftSidebarConfig:{initialView:"expanded"},rightSidebarConfig:{initialView:"expanded"}}},n={render:e,args:{topBarConfig:{title:"Top Bar Example"},leftSidebarConfig:{initialView:"rail"},rightSidebarConfig:{initialView:"expanded"}}},o={render:e,args:{topBarConfig:{title:"Full Layout"},leftSidebarConfig:{initialView:"rail"},rightSidebarConfig:{initialView:"rail"},footerConfig:{brandLabel:"neurons.me",position:"static",leftElements:[{type:"link",props:{label:"Docs",href:"/docs"}}],rightElements:[{type:"link",props:{label:"GitHub",href:"https://github.com/neurons-me"}}]}}};var p,l,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(B=(y=o.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};const ge=["OnlyContent","WithTopBar","WithSidebars","WithTopBarAndSidebars","FullLayout"];export{o as FullLayout,r as OnlyContent,t as WithSidebars,i as WithTopBar,n as WithTopBarAndSidebars,ge as __namedExportsOrder,fe as default};
