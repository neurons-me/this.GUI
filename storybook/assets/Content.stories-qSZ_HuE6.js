import{j as n,B as h,a as d}from"./iframe-D2eJnacu.js";import{L as m}from"./Layout-BAz4JjS0.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-xTldZW_i.js";import"./RightSidebarContext-CckyDbH8.js";import"./TopBar-DmU2wdc-.js";import"./Icon-CAKnGJGN.js";import"./Menu-maLRo1t_.js";import"./useSlot-EziydVcY.js";import"./resolveComponentProps-A5i4OP5P.js";import"./useForkRef-CJwN5O9W.js";import"./useSlotProps-DAc4d2Zp.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-qyyHbYbt.js";import"./Modal-DEXC5q00.js";import"./useEventCallback-CVieJ6Bg.js";import"./Grow-CaHZ5gb0.js";import"./TransitionGroupContext-CJvSrqRb.js";import"./List-CIPnvMBs.js";import"./ListContext-BW2Adx7C.js";import"./MenuItem-DzA8Uqz5.js";import"./ButtonBase-CUt-_WAR.js";import"./listItemIconClasses-UgzpQTE9.js";import"./listItemTextClasses-CmkdSkph.js";import"./dividerClasses-DG4d1HjL.js";import"./index-mC0YMn7v.js";import"./useGuiMediaQuery-DWZkrZq0.js";import"./getThemeProps-C6TO9Cvw.js";import"./useInsets-b1ZI4lGl.js";import"./Avatar-BJNdTHhm.js";import"./createSvgIcon-CuIwnVtI.js";import"./AppBar-II8dRM62.js";import"./Toolbar-DWLAj6h0.js";import"./Paper-Cy6GSVX1.js";import"./InspectorToggle-XfRHSRli.js";import"./Button-88yt6xcs.js";import"./Button-CHKGPak-.js";import"./CircularProgress-gvGNL1sR.js";import"./Drawer-Dc6eHdxA.js";import"./renderer-B7mnUi2B.js";import"./runtimeContext-CI01_G2x.js";import"./IconButton-CQQWoaHV.js";import"./IconButton-Bq5ykkQl.js";import"./ListItemIcon-DBEAg4qU.js";import"./ListItemText-B0bnygt8.js";import"./Tooltip-s2l6t1LL.js";import"./useControlled-CM5M7PCu.js";import"./Collapse-C3LRwmA5.js";import"./AppBar-BrzqYV0q.js";import"./Avatar-CgYSxTdU.js";import"./StickyOptionsTop-BpdBZeGg.js";const ht={title:"Getting Started/Layout/Content",component:m,parameters:{layout:"fullscreen",docs:{description:{component:`The **Content** area is the main space of the layout.

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
