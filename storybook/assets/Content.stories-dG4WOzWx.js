import{j as n,B as h,a as d}from"./iframe-DC1i1573.js";import{L as m}from"./Layout-2qGHyfEN.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-CwJU7uIE.js";import"./RightSidebarContext-BHk_4700.js";import"./TopBar-DODm29Ix.js";import"./Icon-CuVJ4y2k.js";import"./Menu-DF2egIYZ.js";import"./useSlot-D_8lZxqR.js";import"./resolveComponentProps-C5BoffGy.js";import"./useForkRef-hpkiJGPF.js";import"./useSlotProps-DIS-q9VP.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-C8sdzyzT.js";import"./Modal-CLLebtp2.js";import"./TransitionGroupContext-BZk-WlWb.js";import"./Grow-D9IP3D0G.js";import"./List-B4pOZQnr.js";import"./ListContext-DNDBaubu.js";import"./MenuItem-CGXBRnEz.js";import"./ButtonBase-BrZ6brEn.js";import"./listItemIconClasses-BwKUXR3I.js";import"./listItemTextClasses-CTxYf6qB.js";import"./dividerClasses-Bd48RbK3.js";import"./index-CsCTrrmg.js";import"./useGuiMediaQuery-BSPeLbHs.js";import"./getThemeProps-BRLZPA78.js";import"./useInsets-DSWzkno-.js";import"./Avatar-Q90JS4jN.js";import"./createSvgIcon-CArePSch.js";import"./AppBar-CcdR9Lrs.js";import"./Toolbar-DpKn-ZL2.js";import"./Button-OznIF1P0.js";import"./Button-Cw1rExmT.js";import"./CircularProgress-C0wTbWDO.js";import"./Chip-DFuUJxJw.js";import"./Paper-CKIt3RHD.js";import"./InspectorToggle-DJwDlegS.js";import"./Drawer-BJf2efgA.js";import"./renderer-BOtl_gvK.js";import"./runtimeContext-CVXgUwjX.js";import"./IconButton-Wjc3ccB5.js";import"./IconButton-TDHo9m7u.js";import"./ListItemIcon-ZanOEmyx.js";import"./ListItemText-B84pw0of.js";import"./Tooltip-BJSpTCc5.js";import"./useControlled-DbmrnxXO.js";import"./Collapse-B8U356Mf.js";import"./AppBar-03deyKyq.js";import"./Avatar-DFU0rKgR.js";import"./StickyOptionsTop-D2A7gJtl.js";const ht={title:"Getting Started/Layout/Content",component:m,parameters:{layout:"fullscreen",docs:{description:{component:`The **Content** area is the main space of the layout.

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
