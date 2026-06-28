import{j as n,B as h,a as d}from"./iframe-CIpgfdSA.js";import{L as m}from"./Layout-BQqfDNwk.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-CYLanWX8.js";import"./RightSidebarContext-BWzBC4Zb.js";import"./TopBar-RxsT4kQ2.js";import"./Icon-CNWiu4wY.js";import"./Menu-CmzEcrSi.js";import"./useSlot-BmNcXWXR.js";import"./resolveComponentProps-CN4RWvl4.js";import"./useForkRef-Bt2idEIF.js";import"./useSlotProps-0d7_6-xv.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-Co30WzKW.js";import"./Modal-BRTptzSC.js";import"./TransitionGroupContext-aFzyVajs.js";import"./Grow-COMGU6Gh.js";import"./List-DPtBRqwi.js";import"./ListContext-AU4sr-iT.js";import"./MenuItem-ByvHck4w.js";import"./ButtonBase-DmWmhxFj.js";import"./listItemIconClasses-BiY_95im.js";import"./listItemTextClasses-CrYuZtSf.js";import"./dividerClasses-DErrwRRZ.js";import"./index-B2MrKlhS.js";import"./useGuiMediaQuery-y5rm1sAf.js";import"./getThemeProps-mxSbfBuC.js";import"./useInsets-DrqY0Rbn.js";import"./Avatar-BV4SAhtm.js";import"./createSvgIcon-21P3U7BS.js";import"./AppBar-DIO0Zsm8.js";import"./Toolbar-DwLZGWoc.js";import"./Button-CMUDvCWP.js";import"./Button-_sZ07zbz.js";import"./CircularProgress-Ch2k8Dnz.js";import"./Chip-DrYhu1lb.js";import"./Paper-DKF2jsMe.js";import"./InspectorToggle-B-FA1UG6.js";import"./Drawer-qFwD3jMV.js";import"./renderer-Bl1ZkWpq.js";import"./runtimeContext-DYOsHqCK.js";import"./IconButton-Drl_RcOw.js";import"./IconButton-D38Qxo8w.js";import"./ListItemIcon-Ce-4FjVP.js";import"./ListItemText-EEYkoSln.js";import"./Tooltip-D8eLdlES.js";import"./useControlled-DEH0vkGQ.js";import"./Collapse-DePBi9Gr.js";import"./AppBar-DWnn5FPG.js";import"./Avatar-FIw_xJ7X.js";import"./StickyOptionsTop-CniV-UBW.js";const ht={title:"Getting Started/Layout/Content",component:m,parameters:{layout:"fullscreen",docs:{description:{component:`The **Content** area is the main space of the layout.

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
