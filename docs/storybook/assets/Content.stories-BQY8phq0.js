import{j as n,B as h,a as d}from"./iframe-COO5skUf.js";import{L as m}from"./Layout-ZtyszSzk.js";import"./preload-helper-Dp1pzeXC.js";import"./useInsets-C0Q-ku1U.js";import"./TopBar-jFSi5F0g.js";import"./Icon-DpAowGqD.js";import"./Menu-DbyzBfaX.js";import"./useSlot-DzoiAoV0.js";import"./useForkRef-Bgg-GG6B.js";import"./Grow-DBebQEnl.js";import"./TransitionGroupContext-BjXOR29W.js";import"./List-awscdk4-.js";import"./ListContext-Z9iUbTzI.js";import"./Paper-BFvRCSII.js";import"./Modal-DZI5mxk5.js";import"./MenuItem-B1CwEY-T.js";import"./ButtonBase-DPvmYzGK.js";import"./listItemIconClasses-Bvk-I2by.js";import"./listItemTextClasses-DOJTjKud.js";import"./dividerClasses-hwJ7ypoq.js";import"./index-BoOLX_yZ.js";import"./useGuiMediaQuery-B9ml3t9p.js";import"./getThemeProps-qTSHdYXT.js";import"./Avatar-CzYAIaxh.js";import"./createSvgIcon-CMYcZPLg.js";import"./AppBar-BjSOl01M.js";import"./Toolbar-OR_l-jJN.js";import"./Paper-UVXAhxvg.js";import"./Hero-DoJX5tf8.js";import"./controlSurface-CKLL_tdL.js";import"./selectionStore-Coy7dh9o.js";import"./ListItemIcon-KANUV62J.js";import"./ListItemText-CZFoY8sj.js";import"./Drawer-DftICJyF.js";import"./Tooltip-DYaPRb-T.js";import"./useControlled-94B4cvCS.js";import"./Collapse-OXNjsP3k.js";import"./IconButton-AUFbx4-A.js";import"./CircularProgress-DJy7hZv_.js";import"./AppBar-m2hzJj0o.js";import"./Avatar-BT-jxcDp.js";import"./StickyOptionsTop-CZyHf9uk.js";const oe={title:"GUI/Layout/Content",component:m,parameters:{layout:"fullscreen",docs:{description:{component:`The **Content** area is the main space of the layout.

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
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const re=["NoBars","FullShell"];export{t as FullShell,e as NoBars,re as __namedExportsOrder,oe as default};
