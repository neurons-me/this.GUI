import{j as n,B as h,a as d}from"./iframe-CQ6lVM9J.js";import{L as m}from"./Layout-C70Je0jY.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-C3sIPKRI.js";import"./RightSidebarContext-VWJrRmIR.js";import"./TopBar-DhoA5JUF.js";import"./Icon-BI0rS8fi.js";import"./Menu-CZt6LrfY.js";import"./useSlot-Cm_bFkyb.js";import"./resolveComponentProps-DfuN2u-X.js";import"./useForkRef-k3GaQ7M0.js";import"./useSlotProps-DBSOU0Nf.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-CFRetAcS.js";import"./Modal-C_TK6Ct6.js";import"./TransitionGroupContext-BYAOwXFk.js";import"./Grow-DgFfonWO.js";import"./List-CQOLN7fY.js";import"./ListContext-HHAQ2WBE.js";import"./MenuItem-CCsSJeB0.js";import"./ButtonBase-CE1MUTHe.js";import"./listItemIconClasses-BIVBCVxw.js";import"./listItemTextClasses-BKGhee-O.js";import"./dividerClasses-DgchVogq.js";import"./index-DkgDBppT.js";import"./useGuiMediaQuery-CpLeLkWn.js";import"./getThemeProps-DSNOGyPj.js";import"./useInsets-DCYKQmLs.js";import"./Avatar-BS-O8AQy.js";import"./createSvgIcon-DXDYc_1t.js";import"./AppBar-BTQBhUVI.js";import"./Toolbar-C_tizc0v.js";import"./Button-Bga3uo1G.js";import"./Button-B4nkdwgI.js";import"./CircularProgress-BnTShz3b.js";import"./Chip-CscAx2IV.js";import"./Paper-D8WVzIWP.js";import"./Hero-BhBBP0Ut.js";import"./InspectorToggle-BbXYsSh3.js";import"./Drawer-BF4TIoXU.js";import"./renderer-BQyOi2MF.js";import"./runtimeContext-v44hbRMa.js";import"./IconButton-CyAqel-c.js";import"./IconButton-CAsbB3Lm.js";import"./ListItemIcon-DCr0ycU4.js";import"./ListItemText-C8xDBhIi.js";import"./Tooltip-BmxVpoGu.js";import"./useControlled-Dastk5vJ.js";import"./Collapse-DHmOHeTX.js";import"./AppBar-CglI6svt.js";import"./Avatar-DV4JAd-7.js";import"./StickyOptionsTop-uArP3HTy.js";const dt={title:"Getting Started/Layout/Content",component:m,parameters:{layout:"fullscreen",docs:{description:{component:`The **Content** area is the main space of the layout.

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
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const ut=["NoBars","FullShell"];export{e as FullShell,t as NoBars,ut as __namedExportsOrder,dt as default};
