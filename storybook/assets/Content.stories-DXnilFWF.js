import{j as n,B as h,a as d}from"./iframe-DHWRG7QH.js";import{L as m}from"./Layout-BeskKhlC.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-BWNS5T69.js";import"./RightSidebarContext-cYmMhxPR.js";import"./TopBar-DDen3R3n.js";import"./Icon-Cn0j5eWA.js";import"./Menu-CeuY-UZB.js";import"./useSlot-DrfD_k7V.js";import"./resolveComponentProps-DrbJ2mp-.js";import"./useForkRef-tA8i6BhM.js";import"./useSlotProps-BEdJDrIu.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-Cc_Dqaw6.js";import"./Modal-CiJFTnDS.js";import"./TransitionGroupContext-CE_hoGdS.js";import"./Grow-DsXwItpO.js";import"./List-BTS7F_UV.js";import"./ListContext-D3ZraOYE.js";import"./MenuItem-C8RoG-B7.js";import"./ButtonBase-BAs1lMSe.js";import"./listItemIconClasses-7RdeADQE.js";import"./listItemTextClasses-CqTLES1u.js";import"./dividerClasses-B6tUBfWy.js";import"./index-BdqHAHv3.js";import"./useGuiMediaQuery-JOwTIHJs.js";import"./getThemeProps-BDqZ4MBr.js";import"./useInsets-N57BzsI1.js";import"./Avatar-BkXvfl0p.js";import"./createSvgIcon-B7s6AbuW.js";import"./AppBar-Cgg5lt8a.js";import"./Toolbar-BSLqOFgR.js";import"./Button-oBWKO3VQ.js";import"./Button-Bltgg28i.js";import"./CircularProgress-BIWkXzy5.js";import"./Chip-1Vxe2nnS.js";import"./Paper-Bd7uI4Xg.js";import"./InspectorToggle-DcoFs8Wc.js";import"./Drawer-U4M5Q_6p.js";import"./renderer-iG2MPD9h.js";import"./runtimeContext-B3HWc0Yx.js";import"./IconButton-BfJZcLtb.js";import"./IconButton-DtjMttKU.js";import"./ListItemIcon-D1SJBUh0.js";import"./ListItemText-Cxq15UaX.js";import"./Tooltip-M8VDrXiA.js";import"./useControlled-CIHqeqDW.js";import"./Collapse-WjpMSByX.js";import"./AppBar-B6Fka3T9.js";import"./Avatar-DzZ_jPOc.js";import"./StickyOptionsTop-CKeP6JeW.js";const ht={title:"Getting Started/Layout/Content",component:m,parameters:{layout:"fullscreen",docs:{description:{component:`The **Content** area is the main space of the layout.

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
