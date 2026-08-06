import{j as n,B as h,a as d}from"./iframe-CP9CNxx8.js";import{L as m}from"./Layout-DPvsfICX.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-BOpBW9Bk.js";import"./RightSidebarContext-CPWRa5qv.js";import"./TopBar-NeU6Jmrc.js";import"./Icon-BnIUx9th.js";import"./Menu-CxnaEBrZ.js";import"./useSlot-Mh1rGqki.js";import"./resolveComponentProps-ClcYrv8r.js";import"./useForkRef-DbsbHXzv.js";import"./useSlotProps-prOgqQUI.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-Dej_UP1C.js";import"./Modal-C378D8Mh.js";import"./TransitionGroupContext-Ck5bRGCF.js";import"./Grow-CIgwTQ5t.js";import"./List-dcxI-oUi.js";import"./ListContext-BdVLFpgb.js";import"./MenuItem-CdAcOgof.js";import"./ButtonBase-3VpcqpZw.js";import"./listItemIconClasses-t_-ds97q.js";import"./listItemTextClasses-DLUOdunC.js";import"./dividerClasses-BFmk34HT.js";import"./index-BaMcS7Yy.js";import"./useGuiMediaQuery-ByBF8RQx.js";import"./getThemeProps-DgA4-TRf.js";import"./useInsets-BR-u-XBz.js";import"./Avatar-cinzEPDc.js";import"./createSvgIcon-CULnpTNi.js";import"./AppBar-C27ajw5s.js";import"./Toolbar-C8qlW-S0.js";import"./Button-DXB5L6yH.js";import"./Button-BXZoRsTR.js";import"./CircularProgress-_EZIbAZb.js";import"./Chip-C6-sHy1n.js";import"./Paper-H4VYbcNq.js";import"./InspectorToggle-BFlA6Z6-.js";import"./Drawer-D8k4iXFm.js";import"./renderer-AB4KhwIg.js";import"./runtimeContext-DMLQNDdw.js";import"./IconButton-BrPyFgEk.js";import"./IconButton-CCIAIfSL.js";import"./ListItemIcon-1zpiHevt.js";import"./ListItemText-CddPeRgJ.js";import"./Tooltip-DQd5pZ-T.js";import"./useControlled-BLlI_aPv.js";import"./Collapse-Lfy74YwS.js";import"./AppBar-sUqBlSTR.js";import"./Avatar-9qaPeoNo.js";import"./StickyOptionsTop-DcARegNH.js";const ht={title:"Getting Started/Layout/Content",component:m,parameters:{layout:"fullscreen",docs:{description:{component:`The **Content** area is the main space of the layout.

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
