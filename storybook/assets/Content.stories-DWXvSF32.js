import{j as n,B as h,a as d}from"./iframe-DiYu-bgs.js";import{L as m}from"./Layout-qpPzN7El.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-BtR4QFtU.js";import"./RightSidebarContext-djWZazsX.js";import"./TopBar-D-RsPefJ.js";import"./Icon-CDNyTKpS.js";import"./Menu-DrGoHtGt.js";import"./useSlot-BM5SeJo5.js";import"./resolveComponentProps-Dw41cPxQ.js";import"./useForkRef-CeQ6MmaM.js";import"./useSlotProps-C8WlynVb.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-cTXpPwta.js";import"./Modal-nI50Th-N.js";import"./TransitionGroupContext-D-SVGE9X.js";import"./Grow-CdY6zbkB.js";import"./List-xPvPPQL7.js";import"./ListContext-CG8slgtE.js";import"./MenuItem-CKIhpI-y.js";import"./ButtonBase-BIWX-Y7H.js";import"./listItemIconClasses-BhZJ7y_A.js";import"./listItemTextClasses-Cw82XuRA.js";import"./dividerClasses-CWtw64gF.js";import"./index-Bwk-otwA.js";import"./useGuiMediaQuery-5qlHtlQ9.js";import"./getThemeProps-YpQr1VWT.js";import"./useInsets-DwE7fn3B.js";import"./Avatar-CdhVBG6j.js";import"./createSvgIcon-BZkVILGZ.js";import"./AppBar-vR55k3hQ.js";import"./Toolbar-ChiFStKU.js";import"./Button-BWZCwv98.js";import"./Button-B1pjkYXI.js";import"./CircularProgress-P6eZSM98.js";import"./Chip-BZAOr3Be.js";import"./Paper-CSinAV9D.js";import"./InspectorToggle-1vw9S654.js";import"./Drawer-BKUY5yU0.js";import"./renderer-DNE_5b45.js";import"./runtimeContext-C3-qwfut.js";import"./IconButton-BevC8wPi.js";import"./IconButton-BBNeXzDA.js";import"./ListItemIcon-BdyV2R3A.js";import"./ListItemText-3WQm850Q.js";import"./Tooltip-DIKoVJsm.js";import"./useControlled-BD87qGga.js";import"./Collapse-BSTVr2BN.js";import"./AppBar-BrSnRsWX.js";import"./Avatar-B0FBPIjH.js";import"./StickyOptionsTop-qIU3xTgZ.js";const ht={title:"Getting Started/Layout/Content",component:m,parameters:{layout:"fullscreen",docs:{description:{component:`The **Content** area is the main space of the layout.

## What it does
- Shows the main page content.
- Adds padding automatically when bars are present.
- Works with \`TopBar\`, \`LeftBar\`, \`RightBar\`, and \`Footer\`.

## What to pass
- Put your page UI inside \`<Layout>...</Layout>\`.
- Turn bars on by passing \`TopBar\`, \`LeftBar\`, \`RightBar\`, and \`Footer\` props.
- If you pass no bars, Content fills the page by itself.

## Basic shape
~~~tsx
<Layout>
  <YourPage />
</Layout>
~~~

## With bars
~~~tsx
<Layout
  TopBar={{ title: 'App' }}
  LeftBar={{ initialView: 'rail' }}
  RightBar={{ initialView: 'expanded' }}
  Footer={{ brandLabel: 'neurons.me' }}
>
  <YourPage />
</Layout>
~~~
`}}}},u=({text:o})=>n.jsx(h,{sx:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"background.default",color:"text.primary"},children:n.jsx(d,{variant:"h4",children:o})}),c=o=>n.jsx(m,{...o,children:n.jsx(u,{text:"This is the Content area"})}),t={render:c,args:{}},e={render:c,args:{TopBar:{title:"Full Layout"},LeftBar:{initialView:"rail",elements:[{type:"link",props:{label:"Dashboard",icon:"dashboard"}},{type:"link",props:{label:"Analytics",icon:"bar_chart"}}],footerElements:[{type:"link",props:{label:"Settings",icon:"settings"}}]},RightBar:{initialView:"expanded",elements:[{type:"link",props:{label:"Activity",icon:"history"}},{type:"menu",props:{label:"Views",icon:"view_cozy",items:[{label:"Timeline",icon:"timeline"}]}}],footerElements:[{type:"action",props:{label:"Help",icon:"help"}}]},Footer:{brandLabel:"neurons.me",position:"static",leftElements:[{type:"link",props:{label:"Docs",href:"/docs"}}],rightElements:[{type:"link",props:{label:"GitHub",href:"https://github.com/neurons-me"}}]}}};var r,i,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: Template,
  args: {}
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var p,s,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: Template,
  args: {
    TopBar: {
      title: 'Full Layout'
    },
    LeftBar: {
      initialView: 'rail',
      elements: [{
        type: 'link',
        props: {
          label: 'Dashboard',
          icon: 'dashboard'
        }
      }, {
        type: 'link',
        props: {
          label: 'Analytics',
          icon: 'bar_chart'
        }
      }],
      footerElements: [{
        type: 'link',
        props: {
          label: 'Settings',
          icon: 'settings'
        }
      }]
    },
    RightBar: {
      initialView: 'expanded',
      elements: [{
        type: 'link',
        props: {
          label: 'Activity',
          icon: 'history'
        }
      }, {
        type: 'menu',
        props: {
          label: 'Views',
          icon: 'view_cozy',
          items: [{
            label: 'Timeline',
            icon: 'timeline'
          }]
        }
      }],
      footerElements: [{
        type: 'action',
        props: {
          label: 'Help',
          icon: 'help'
        }
      }]
    },
    Footer: {
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
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const dt=["NoBars","FullShell"];export{e as FullShell,t as NoBars,dt as __namedExportsOrder,ht as default};
