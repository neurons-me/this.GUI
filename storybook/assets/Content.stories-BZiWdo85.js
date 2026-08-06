import{j as n,B as h,a as d}from"./iframe-CmZ_q1z4.js";import{L as m}from"./Layout-DqPtaDcr.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-BWEWDi7U.js";import"./RightSidebarContext-Dxzwle-C.js";import"./TopBar-BiQcn028.js";import"./Icon-DEE50VaB.js";import"./Menu-CiCo38cc.js";import"./useSlot-CYyWfB0N.js";import"./resolveComponentProps-BFxV9aVJ.js";import"./useForkRef-DyhjSSpi.js";import"./useSlotProps-Bq_gEvkk.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-BMIc8Tnd.js";import"./Modal-CKg48mq6.js";import"./TransitionGroupContext-Da1OtQvn.js";import"./Grow-BQB6nH-T.js";import"./List-CbH5NTpH.js";import"./ListContext-BEs30NJZ.js";import"./MenuItem-CFaTzU02.js";import"./ButtonBase-C2QUU_ac.js";import"./listItemIconClasses-BsISWJWE.js";import"./listItemTextClasses-DYQe4eT0.js";import"./dividerClasses-C8HhPn6k.js";import"./index-zQzJPhhA.js";import"./useGuiMediaQuery-B66w6CnP.js";import"./getThemeProps-bbO_j9Wi.js";import"./useInsets--uu22R7N.js";import"./Avatar-C57Mvq3V.js";import"./createSvgIcon-BJr67T_I.js";import"./AppBar-m3rf8i8k.js";import"./Toolbar-DjCZRGvk.js";import"./Button-DafFbri_.js";import"./Button-C2KQi9R3.js";import"./CircularProgress-75u6lE4k.js";import"./Chip-BTVbmgxv.js";import"./Paper-CcJJK4hI.js";import"./InspectorToggle-BvOKIHof.js";import"./Drawer-BLsbzvLs.js";import"./renderer-DgQvvU-7.js";import"./runtimeContext-btbdyu3b.js";import"./IconButton-jR5QBnBC.js";import"./IconButton-CREQMvOl.js";import"./ListItemIcon-CglfnlWt.js";import"./ListItemText-Dhm13hmh.js";import"./Tooltip-DhJnZuOk.js";import"./useControlled-DFkCDk-L.js";import"./Collapse-DnMNKN6x.js";import"./AppBar-DHUUPHuN.js";import"./Avatar-BqQ7x005.js";import"./StickyOptionsTop-hngbHzvI.js";const ht={title:"Getting Started/Layout/Content",component:m,parameters:{layout:"fullscreen",docs:{description:{component:`The **Content** area is the main space of the layout.

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
