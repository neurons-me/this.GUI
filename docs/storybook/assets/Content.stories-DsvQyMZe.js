import{j as a,B as w,a as V}from"./iframe-ByX3ETbE.js";import{L as T}from"./Layout-BwtY7-KE.js";import"./preload-helper-Dp1pzeXC.js";import"./useInsets-BRfO9L24.js";import"./TopBar-dD87Yz9P.js";import"./Icon-n_Q28tJ5.js";import"./Menu-CjXKmdOG.js";import"./useSlot-B2B5N9R_.js";import"./useForkRef-B3XxOOe_.js";import"./Grow-DyeVafLJ.js";import"./utils-C3CBi289.js";import"./TransitionGroupContext-Dq0pQY8t.js";import"./Portal-DahMBF2F.js";import"./List-zUSBsSAi.js";import"./ListContext-GS20hy27.js";import"./Paper-Bdr9tTxc.js";import"./Modal-DhzVvUVd.js";import"./useEventCallback-B-LLEq4r.js";import"./mergeSlotProps-DHmI1FtN.js";import"./MenuItem-BkrVg_1Z.js";import"./ButtonBase-DEWtkUEw.js";import"./listItemIconClasses-BC-nmgJU.js";import"./listItemTextClasses-D_bsdMDB.js";import"./dividerClasses-CM7bQDUz.js";import"./index-CK2Xzf6j.js";import"./useGuiMediaQuery-DV2msrBS.js";import"./getThemeProps-CPqAk1eQ.js";import"./Avatar-KaKVQl4y.js";import"./createSvgIcon-CfAw_MoX.js";import"./Toolbar-CkUvc31f.js";import"./Tooltip-ktcdhHBS.js";import"./useControlled-C2L68ycq.js";import"./Collapse-CJklrCHw.js";import"./IconButton-DfHBm4wT.js";import"./CircularProgress-B1xp4XjP.js";import"./Drawer-DPAHnOYJ.js";import"./Avatar-m0S1mcOs.js";import"./Toolbar-Bg6D3rju.js";const de={title:"GUI/Layout/Content",component:T,parameters:{layout:"fullscreen"}},E=({text:s})=>a.jsx(w,{sx:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"background.default",color:"text.primary"},children:a.jsx(V,{variant:"h4",children:s})}),e=s=>a.jsx(T,{...s,children:a.jsx(E,{text:"This is the Content area"})}),r={render:e,args:{topBarConfig:!1,leftSidebarConfig:!1,rightSidebarConfig:!1,footerConfig:!1}},i={render:e,args:{topBarConfig:{title:"Top Bar Example"}}},t={render:e,args:{leftSidebarConfig:{initialView:"expanded"},rightSidebarConfig:{initialView:"expanded"}}},n={render:e,args:{topBarConfig:{title:"Top Bar Example"},leftSidebarConfig:{initialView:"rail"},rightSidebarConfig:{initialView:"expanded"}}},o={render:e,args:{topBarConfig:{title:"Full Layout"},leftSidebarConfig:{initialView:"rail"},rightSidebarConfig:{initialView:"rail"},footerConfig:{brandLabel:"neurons.me",position:"static",leftElements:[{type:"link",props:{label:"Docs",href:"/docs"}}],rightElements:[{type:"link",props:{label:"GitHub",href:"https://github.com/neurons-me"}}]}}};var p,l,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
