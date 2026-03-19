import{j as a,B as w,a as V}from"./iframe-7zAExrak.js";import{L as T}from"./Layout-B6VY4tmm.js";import"./preload-helper-Dp1pzeXC.js";import"./useInsets-S4d32CcO.js";import"./TopBar-B2rCDWiW.js";import"./Icon-BKZY08Mr.js";import"./Menu-BVp4xYvd.js";import"./useSlot-DUgQAWsg.js";import"./useForkRef-Di3AUW5l.js";import"./Grow-BQui6Aab.js";import"./utils-S_FrVrRf.js";import"./TransitionGroupContext-C71qxxuA.js";import"./Portal-BPmUqJ6p.js";import"./List-B6yPdRqj.js";import"./ListContext-cj5eClnR.js";import"./Paper-5tXzywrn.js";import"./Modal-C9ZT4FIo.js";import"./useEventCallback-C0kgqBIO.js";import"./mergeSlotProps-oOjM-Dcy.js";import"./MenuItem-BiFBaN5W.js";import"./ButtonBase-b3Y5L-At.js";import"./listItemIconClasses-CCcuLqra.js";import"./listItemTextClasses-BkQpWQDJ.js";import"./dividerClasses-Bn4n_-nb.js";import"./index-BQiZIFOf.js";import"./useGuiMediaQuery-CAaFDQRO.js";import"./getThemeProps-CaR9ERfd.js";import"./Avatar-YyBZJyIO.js";import"./createSvgIcon-OXcblsJI.js";import"./Toolbar-BN0trzD-.js";import"./Tooltip-DLgO_vMn.js";import"./useControlled-Brbb2wgh.js";import"./Collapse-Butc5uxb.js";import"./IconButton-CIzZpMEu.js";import"./CircularProgress-CvcIHJmp.js";import"./Drawer-D3zNi6Y1.js";import"./Avatar-BEeXfI0T.js";import"./Toolbar-oaG3PeLD.js";const de={title:"GUI/Layout/Content",component:T,parameters:{layout:"fullscreen"}},E=({text:s})=>a.jsx(w,{sx:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"background.default",color:"text.primary"},children:a.jsx(V,{variant:"h4",children:s})}),e=s=>a.jsx(T,{...s,children:a.jsx(E,{text:"This is the Content area"})}),r={render:e,args:{topBarConfig:!1,leftSidebarConfig:!1,rightSidebarConfig:!1,footerConfig:!1}},i={render:e,args:{topBarConfig:{title:"Top Bar Example"}}},t={render:e,args:{leftSidebarConfig:{initialView:"expanded"},rightSidebarConfig:{initialView:"expanded"}}},n={render:e,args:{topBarConfig:{title:"Top Bar Example"},leftSidebarConfig:{initialView:"rail"},rightSidebarConfig:{initialView:"expanded"}}},o={render:e,args:{topBarConfig:{title:"Full Layout"},leftSidebarConfig:{initialView:"rail"},rightSidebarConfig:{initialView:"rail"},footerConfig:{brandLabel:"neurons.me",position:"static",leftElements:[{type:"link",props:{label:"Docs",href:"/docs"}}],rightElements:[{type:"link",props:{label:"GitHub",href:"https://github.com/neurons-me"}}]}}};var p,l,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
