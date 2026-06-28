import{j as n,B as h,a as d}from"./iframe-DHKm4lxq.js";import{L as m}from"./Layout-CvNF_IGR.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-DlBlSJcG.js";import"./RightSidebarContext-Df_RONI4.js";import"./TopBar-CLZVsukS.js";import"./Icon-BDa5KZaz.js";import"./Menu-CQPexnKY.js";import"./useSlot-D_z_s16V.js";import"./resolveComponentProps-mc7wWAEz.js";import"./useForkRef-CKQjnNCQ.js";import"./useSlotProps-Dm6x2sbk.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-BRH2Yjjr.js";import"./Modal-P70wl9z_.js";import"./TransitionGroupContext-BAR79BSf.js";import"./Grow-8YfsGkup.js";import"./List-BOfaeJ--.js";import"./ListContext-Crj2OsJs.js";import"./MenuItem-B8SbU8NO.js";import"./ButtonBase-DGodopKS.js";import"./listItemIconClasses-CLewsPnL.js";import"./listItemTextClasses-s6jhsQgh.js";import"./dividerClasses-BEgDB5Z9.js";import"./index-Du0BivNX.js";import"./useGuiMediaQuery-1Q3cuuOF.js";import"./getThemeProps-Dv_U1Ogp.js";import"./useInsets-D2ZR6LOb.js";import"./Avatar-IzjqRx0P.js";import"./createSvgIcon-Be8Ym-L_.js";import"./AppBar-By8Hqg_B.js";import"./Toolbar-DgyTRwAO.js";import"./Button-BxCtzB8m.js";import"./Button-SfGik2w3.js";import"./CircularProgress-C_mw3fa7.js";import"./Chip-CBarvK3z.js";import"./Paper-DtvotrLC.js";import"./InspectorToggle-4slQGNQR.js";import"./Drawer-Cl2v2pdU.js";import"./renderer-bgPyTije.js";import"./runtimeContext-8u-IeDVA.js";import"./IconButton-PkGf5jAc.js";import"./IconButton-dLqP0LtD.js";import"./ListItemText-CUOUdkWB.js";import"./Tooltip-DWzz156k.js";import"./useControlled-4Z9U_yFP.js";import"./Collapse-CTpAx0FZ.js";import"./AppBar-C9qkxbMR.js";import"./Avatar-vduz-_L5.js";import"./StickyOptionsTop-BAb8aUWX.js";const ct={title:"Getting Started/Layout/Content",component:m,parameters:{layout:"fullscreen",docs:{description:{component:`The **Content** area is the main space of the layout.

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
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const ht=["NoBars","FullShell"];export{e as FullShell,t as NoBars,ht as __namedExportsOrder,ct as default};
