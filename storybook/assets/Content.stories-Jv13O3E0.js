import{j as n,B as h,a as d}from"./iframe-DsRKGudf.js";import{L as m}from"./Layout-6DAHQ17l.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-_QGXIFEF.js";import"./RightSidebarContext-DNKtIxGA.js";import"./TopBar-6S0vC7I_.js";import"./Icon-C-KCwcAw.js";import"./Menu-Cbf6-2Ii.js";import"./useSlot-UY7wHEUA.js";import"./resolveComponentProps-DWU9FwiD.js";import"./useForkRef-DaPdQACB.js";import"./useSlotProps-DnVOBi5c.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-CGP3T9PR.js";import"./Modal-CmcgpO8z.js";import"./TransitionGroupContext-gftPsmXQ.js";import"./Grow-DUdPBg0C.js";import"./List-B6xbk-JS.js";import"./ListContext-Dg6a-o_V.js";import"./MenuItem-DJ6cgyB0.js";import"./ButtonBase-BHgzLA4j.js";import"./listItemIconClasses-Dkt3uDCe.js";import"./listItemTextClasses-RCKfP_HI.js";import"./dividerClasses-Bl7DWpUo.js";import"./index-DnhQwjfQ.js";import"./useGuiMediaQuery-B4e27NiP.js";import"./getThemeProps-B_l613BN.js";import"./useInsets-Ba5DZ-rk.js";import"./Avatar-BFVkEIDW.js";import"./createSvgIcon-C4CP9IBQ.js";import"./AppBar-Lh37GgoN.js";import"./Toolbar-H6MAk1z7.js";import"./Button-LiUEA2TU.js";import"./Button-HEMqV7f1.js";import"./CircularProgress-CBgE9hq-.js";import"./Chip-C8fm0eph.js";import"./Paper-CZuqLR2o.js";import"./InspectorToggle-B2-9R7tJ.js";import"./Drawer-DWTuXBaB.js";import"./renderer-X8EydWrl.js";import"./runtimeContext-k6DqlALu.js";import"./IconButton-BbGJVgc-.js";import"./IconButton-m_4K4KMU.js";import"./ListItemIcon-C9IEsNAm.js";import"./ListItemText-Dx2OxWN3.js";import"./Tooltip-DwxTrZJL.js";import"./useControlled-BTRy4wlV.js";import"./Collapse-_min-fPX.js";import"./AppBar-7FDuJ_-R.js";import"./Avatar-CdR_IMqv.js";import"./StickyOptionsTop-CITl6C7y.js";const ht={title:"Getting Started/Layout/Content",component:m,parameters:{layout:"fullscreen",docs:{description:{component:`The **Content** area is the main space of the layout.

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
