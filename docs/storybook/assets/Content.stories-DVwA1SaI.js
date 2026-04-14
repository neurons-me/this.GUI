import{j as n,B as h,a as d}from"./iframe-DTkfRnJf.js";import{L as m}from"./Layout-C1HOO3Oz.js";import"./preload-helper-Dp1pzeXC.js";import"./useInsets-DrPGyJYK.js";import"./RightSidebarContext-Bim1nxNz.js";import"./TopBar-C7u1v04C.js";import"./Icon-BM-Jwf27.js";import"./Menu-D5Y3vMKV.js";import"./useSlot-BNQnsQI2.js";import"./useForkRef-Cru_ePRK.js";import"./Grow-D3KHJdX1.js";import"./TransitionGroupContext-BWT1wUhm.js";import"./List-BekQve-t.js";import"./ListContext-B5Em9Eft.js";import"./Paper-CyGjh2vj.js";import"./Modal-CK9c8Gp7.js";import"./MenuItem-2cLCpEHr.js";import"./ButtonBase-WoTwDifL.js";import"./listItemIconClasses-DJfd2CmR.js";import"./listItemTextClasses-C804xoiG.js";import"./dividerClasses-DEdNtFXy.js";import"./index-SqSAGI1r.js";import"./useGuiMediaQuery-2dRYGcLF.js";import"./getThemeProps-CijvZDlq.js";import"./Avatar-uhnXAEOq.js";import"./createSvgIcon-DdBnQn7s.js";import"./AppBar-BgpiADh6.js";import"./Toolbar-D1lLG2L5.js";import"./InspectorToggle-DekUrDWo.js";import"./Button-BKvYYcvp.js";import"./Button-nBT_Xo1p.js";import"./CircularProgress-DdkfkwCD.js";import"./IconButton-lZB8Z_vE.js";import"./IconButton-CE-WD0KS.js";import"./selectionStore-Coy7dh9o.js";import"./ListItemIcon-C5SEVZ-r.js";import"./ListItemText-DGm7Bslj.js";import"./Drawer-7iJ8tsVN.js";import"./Tooltip-u6KQGzAX.js";import"./useControlled-CK-Pi9mt.js";import"./Collapse-Df2xjUBX.js";import"./AppBar-DWuTSABf.js";import"./Avatar-XGPOscsO.js";import"./StickyOptionsTop-Bg0TwAQO.js";const ie={title:"GUI/Layout/Content",component:m,parameters:{layout:"fullscreen",docs:{description:{component:`The **Content** area is the main space of the layout.

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
`}}}},u=({text:o})=>n.jsx(h,{sx:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"background.default",color:"text.primary"},children:n.jsx(d,{variant:"h4",children:o})}),c=o=>n.jsx(m,{...o,children:n.jsx(u,{text:"This is the Content area"})}),e={render:c,args:{}},t={render:c,args:{TopBar:{title:"Full Layout"},LeftBar:{initialView:"rail",elements:[{type:"link",props:{label:"Dashboard",icon:"dashboard"}},{type:"link",props:{label:"Analytics",icon:"bar_chart"}}],footerElements:[{type:"link",props:{label:"Settings",icon:"settings"}}]},RightBar:{initialView:"expanded",elements:[{type:"link",props:{label:"Activity",icon:"history"}},{type:"menu",props:{label:"Views",icon:"view_cozy",items:[{label:"Timeline",icon:"timeline"}]}}],footerElements:[{type:"action",props:{label:"Help",icon:"help"}}]},Footer:{brandLabel:"neurons.me",position:"static",leftElements:[{type:"link",props:{label:"Docs",href:"/docs"}}],rightElements:[{type:"link",props:{label:"GitHub",href:"https://github.com/neurons-me"}}]}}};var r,i,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: Template,
  args: {}
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var p,s,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const ae=["NoBars","FullShell"];export{t as FullShell,e as NoBars,ae as __namedExportsOrder,ie as default};
