import{j as n,B as h,a as d}from"./iframe-BGaDc8fY.js";import{L as m}from"./Layout-CnMviEDL.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-Ck0WnRZq.js";import"./RightSidebarContext-DKtzxkKm.js";import"./TopBar-akoAiZRC.js";import"./Icon-7Zhdja6G.js";import"./Menu-ZkWSsY6l.js";import"./useSlot-mYHib5yE.js";import"./resolveComponentProps-Dk29dXks.js";import"./useForkRef-BTLRd6DF.js";import"./useSlotProps-yQEft4tG.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-Di4HKz2Y.js";import"./Modal-C572445k.js";import"./TransitionGroupContext-CRX3K3-N.js";import"./Grow-Cde1WuC5.js";import"./List-57qNRWuM.js";import"./ListContext-YJMNngyR.js";import"./MenuItem-CgiIMcKc.js";import"./ButtonBase-CmhJTDh7.js";import"./listItemIconClasses-ClAJKT2Y.js";import"./listItemTextClasses-CswSoKM3.js";import"./dividerClasses-BVGmolOg.js";import"./index-IcCsHFmR.js";import"./useGuiMediaQuery-Bvvmr67q.js";import"./getThemeProps-B7Mx3brp.js";import"./useInsets-BzZYsjc4.js";import"./Avatar-D7RHzrwX.js";import"./createSvgIcon-4U5SUzqQ.js";import"./AppBar-h2MquwDK.js";import"./Toolbar-BBnWUHS2.js";import"./Button-CTJugSMu.js";import"./Button-DQUBnN9_.js";import"./CircularProgress-iyiqlgzo.js";import"./Chip-DPTpPXfj.js";import"./Paper-D8K68VRW.js";import"./InspectorToggle-DlY13M7X.js";import"./Drawer-OYjj9WNP.js";import"./renderer-DHHJdapJ.js";import"./runtimeContext-DoMG9-W6.js";import"./IconButton-CQXbYqDU.js";import"./IconButton-Daf4E_dW.js";import"./ListItemIcon-CtNWREle.js";import"./ListItemText-BgBlMoMB.js";import"./Tooltip-D2OUCLIk.js";import"./useControlled-Cm9jB_PK.js";import"./Collapse-Czn3-G4C.js";import"./AppBar-BNMHd6Mo.js";import"./Avatar-fdAKIFbh.js";import"./StickyOptionsTop-CJeuT6yh.js";const ht={title:"Getting Started/Layout/Content",component:m,parameters:{layout:"fullscreen",docs:{description:{component:`The **Content** area is the main space of the layout.

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
