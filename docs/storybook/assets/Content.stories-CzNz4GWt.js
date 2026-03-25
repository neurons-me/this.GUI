import{j as a,B as w,a as V}from"./iframe-8EaQ1C0g.js";import{L as T}from"./Layout-BLRJcu7C.js";import"./preload-helper-Dp1pzeXC.js";import"./useInsets-DM0dGkFt.js";import"./TopBar-17fPxR_b.js";import"./Icon-DOcDJgdS.js";import"./Menu-CLR-atUe.js";import"./useSlot-Bwp2wfPo.js";import"./useForkRef-B_8DPUN9.js";import"./Grow-D96jBQxV.js";import"./utils-qFhxFu5T.js";import"./TransitionGroupContext-BDq06VYZ.js";import"./Portal-0QKNbDUh.js";import"./List-DYgBFzPu.js";import"./ListContext-DG1ZmIYj.js";import"./Paper-Cnfm5CEA.js";import"./Modal-BP6cjxzt.js";import"./mergeSlotProps-B1nxpj7w.js";import"./MenuItem-DnVDUEJQ.js";import"./ButtonBase-DnuzHV0k.js";import"./listItemIconClasses-xTD-VZED.js";import"./listItemTextClasses-B6j24Eej.js";import"./dividerClasses-Con-zOAD.js";import"./index-B0xoTwIE.js";import"./useGuiMediaQuery-CVG-aD8c.js";import"./getThemeProps-Cnx6th0B.js";import"./Avatar-BHYZhMLq.js";import"./createSvgIcon-D8rVfPRm.js";import"./Toolbar-DZPy-jWE.js";import"./Button-Ck1yJXlA.js";import"./Button-CqN9UM-9.js";import"./CircularProgress-CF5CFykq.js";import"./Paper-qkABWcDk.js";import"./Tooltip-DuCAPdS-.js";import"./useControlled-ChLN6U0A.js";import"./Collapse-D51r0gH9.js";import"./IconButton-HKE78Wtw.js";import"./Drawer-DMFekDt0.js";import"./Toolbar-fB1GFS2B.js";import"./Avatar-DhWWZzL6.js";const ge={title:"GUI/Layout/Content",component:T,parameters:{layout:"fullscreen"}},E=({text:s})=>a.jsx(w,{sx:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"background.default",color:"text.primary"},children:a.jsx(V,{variant:"h4",children:s})}),e=s=>a.jsx(T,{...s,children:a.jsx(E,{text:"This is the Content area"})}),r={render:e,args:{topBarConfig:!1,leftSidebarConfig:!1,rightSidebarConfig:!1,footerConfig:!1}},i={render:e,args:{topBarConfig:{title:"Top Bar Example"}}},t={render:e,args:{leftSidebarConfig:{initialView:"expanded"},rightSidebarConfig:{initialView:"expanded"}}},n={render:e,args:{topBarConfig:{title:"Top Bar Example"},leftSidebarConfig:{initialView:"rail"},rightSidebarConfig:{initialView:"expanded"}}},o={render:e,args:{topBarConfig:{title:"Full Layout"},leftSidebarConfig:{initialView:"rail"},rightSidebarConfig:{initialView:"rail"},footerConfig:{brandLabel:"neurons.me",position:"static",leftElements:[{type:"link",props:{label:"Docs",href:"/docs"}}],rightElements:[{type:"link",props:{label:"GitHub",href:"https://github.com/neurons-me"}}]}}};var p,l,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(B=(y=o.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};const ce=["OnlyContent","WithTopBar","WithSidebars","WithTopBarAndSidebars","FullLayout"];export{o as FullLayout,r as OnlyContent,t as WithSidebars,i as WithTopBar,n as WithTopBarAndSidebars,ce as __namedExportsOrder,ge as default};
