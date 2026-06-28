import{j as n,B as h,a as d}from"./iframe-p6i3_M1l.js";import{L as m}from"./Layout-C_DmbVBX.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-2j73sUfl.js";import"./RightSidebarContext-CKGuO6X3.js";import"./TopBar-Drdk9wsx.js";import"./Icon-BFYuChBm.js";import"./Menu-DGvlkHqg.js";import"./useSlot-BkO1bsLB.js";import"./resolveComponentProps-_bg8blxd.js";import"./useForkRef-Ck8rc5Kh.js";import"./useSlotProps-kE-iKDRN.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-Bw3Z5Cvh.js";import"./Modal-Dg6B-BQQ.js";import"./TransitionGroupContext-FCMPxzOc.js";import"./Grow-4bVmTnw_.js";import"./List-CKBIDq-7.js";import"./ListContext-CbRgTpeA.js";import"./MenuItem-D3hRwlWP.js";import"./ButtonBase-BJen_mue.js";import"./listItemIconClasses-D44GzqIH.js";import"./listItemTextClasses-CPnqD1P-.js";import"./dividerClasses-Cmve31Sx.js";import"./index-B5uvvRZZ.js";import"./useGuiMediaQuery-Dc55fEQy.js";import"./getThemeProps-CL0kpjCh.js";import"./useInsets-C-SDPlo5.js";import"./Avatar-Bb1I23rQ.js";import"./createSvgIcon-B-JEACRB.js";import"./AppBar-C3mcLtP8.js";import"./Toolbar-5sIhsjeC.js";import"./Button-D1vuZL3U.js";import"./Button-BeVJ27AF.js";import"./CircularProgress-u4FSlkBj.js";import"./Chip-CrjI0RUO.js";import"./Paper-EthS2rjT.js";import"./InspectorToggle-CUHsuhpX.js";import"./Drawer-CS47aC-f.js";import"./renderer-C2YMywAB.js";import"./runtimeContext-DeG4UJ8a.js";import"./IconButton-DlXB9zuW.js";import"./IconButton-C2kBk-89.js";import"./ListItemIcon-Bem4eUOS.js";import"./ListItemText-C3oDea4W.js";import"./Tooltip-8jV_9S5S.js";import"./useControlled-CuDKXm2n.js";import"./Collapse-DXiVZeEB.js";import"./AppBar-C-U_IKfz.js";import"./Avatar-DCCzOn1l.js";import"./StickyOptionsTop-egfzgg-z.js";const ht={title:"Getting Started/Layout/Content",component:m,parameters:{layout:"fullscreen",docs:{description:{component:`The **Content** area is the main space of the layout.

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
