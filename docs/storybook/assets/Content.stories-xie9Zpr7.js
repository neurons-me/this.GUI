import{j as a,B as w,a as V}from"./iframe-AZWHUjJ8.js";import{L as T}from"./Layout-ByKsObn7.js";import"./preload-helper-Dp1pzeXC.js";import"./useInsets-B5T9nW_R.js";import"./TopBar-BAsOsniR.js";import"./Icon-FCByiR2v.js";import"./Menu-B1btoBVS.js";import"./useSlot-BWVERl7C.js";import"./useForkRef-BwxLbw6V.js";import"./Grow-0zMj_HpA.js";import"./TransitionGroupContext-L3XM6ARG.js";import"./List-BgYGWYt3.js";import"./ListContext-DVr4rWCd.js";import"./Paper-WNsmHt7k.js";import"./Modal-Dfp-k0CT.js";import"./MenuItem-Dd7Uwesr.js";import"./ButtonBase-CMUhGetK.js";import"./listItemIconClasses-Bkwn0ot7.js";import"./listItemTextClasses-CDjfeEGl.js";import"./dividerClasses-C-NMVYSz.js";import"./index-Bk20T6Fy.js";import"./useGuiMediaQuery-Bcjup4L6.js";import"./getThemeProps-DicCSZg3.js";import"./Avatar-Bk6cJXvZ.js";import"./createSvgIcon-Bkyompvq.js";import"./AppBar-BRE8U21k.js";import"./Toolbar-CufKEqsg.js";import"./Toolbar-BSvLwMcQ.js";import"./ListItemIcon-D0PToHmB.js";import"./ListItemText-BXA55UDd.js";import"./Drawer-e1dj-DAL.js";import"./Tooltip-BoFE-j7F.js";import"./useControlled-mDa5gGP0.js";import"./Collapse-te94mtG_.js";import"./IconButton-ByhQCi2b.js";import"./CircularProgress-C8t4-L2z.js";import"./AppBar-DXlDwGTn.js";import"./Avatar-B3bnpoz9.js";const de={title:"GUI/Layout/Content",component:T,parameters:{layout:"fullscreen"}},E=({text:s})=>a.jsx(w,{sx:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"background.default",color:"text.primary"},children:a.jsx(V,{variant:"h4",children:s})}),e=s=>a.jsx(T,{...s,children:a.jsx(E,{text:"This is the Content area"})}),r={render:e,args:{topBarConfig:!1,leftSidebarConfig:!1,rightSidebarConfig:!1,footerConfig:!1}},i={render:e,args:{topBarConfig:{title:"Top Bar Example"}}},t={render:e,args:{leftSidebarConfig:{initialView:"expanded"},rightSidebarConfig:{initialView:"expanded"}}},n={render:e,args:{topBarConfig:{title:"Top Bar Example"},leftSidebarConfig:{initialView:"rail"},rightSidebarConfig:{initialView:"expanded"}}},o={render:e,args:{topBarConfig:{title:"Full Layout"},leftSidebarConfig:{initialView:"rail"},rightSidebarConfig:{initialView:"rail"},footerConfig:{brandLabel:"neurons.me",position:"static",leftElements:[{type:"link",props:{label:"Docs",href:"/docs"}}],rightElements:[{type:"link",props:{label:"GitHub",href:"https://github.com/neurons-me"}}]}}};var p,l,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
