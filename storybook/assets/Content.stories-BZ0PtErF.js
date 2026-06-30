import{j as n,B as h,a as d}from"./iframe-D9EvTlWl.js";import{L as m}from"./Layout-DDbpJZNt.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-CoZB3lDH.js";import"./RightSidebarContext-CW28AZhq.js";import"./TopBar-CdBR-wwd.js";import"./Icon-CJEApdqx.js";import"./Menu-DF2f4v03.js";import"./useSlot-DU8sjFIb.js";import"./resolveComponentProps-D0Izudsi.js";import"./useForkRef-C1LFn95A.js";import"./useSlotProps-CcTolACD.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-DhU2P2hT.js";import"./Modal-BW5LSG0L.js";import"./TransitionGroupContext-vbPGwwbr.js";import"./Grow-DG8mRUao.js";import"./List-7Awiztj1.js";import"./ListContext-BwmMMl96.js";import"./MenuItem-CGV8woOg.js";import"./ButtonBase-zQJHYGm5.js";import"./listItemIconClasses-DwdzHSCj.js";import"./listItemTextClasses-CMLvMIIb.js";import"./dividerClasses-ByNKvJjC.js";import"./index-Cet-fgeq.js";import"./useGuiMediaQuery-wY39KJe4.js";import"./getThemeProps-BDyfQF-o.js";import"./useInsets-BNRWKo57.js";import"./Avatar-CVRqK3JX.js";import"./createSvgIcon-C3-IuFf-.js";import"./AppBar-Dt3sOpAJ.js";import"./Toolbar-CpTN7W9R.js";import"./Button-BSC7MtVu.js";import"./Button-PpSzQ2nP.js";import"./CircularProgress-DXt0Rfmg.js";import"./Chip-BhW1_AxW.js";import"./Paper-CNvE0RD-.js";import"./Hero-DPukVZVI.js";import"./InspectorToggle-CiS9GylZ.js";import"./Drawer-A3TumCsB.js";import"./renderer-CYV5pS7F.js";import"./runtimeContext-stX2K2IM.js";import"./IconButton-DkE6reKw.js";import"./IconButton-DBFt0jLD.js";import"./ListItemIcon-DoMmdGUF.js";import"./ListItemText-a4I0i_0j.js";import"./Tooltip-n2OItU4b.js";import"./useControlled-APzbVKNK.js";import"./Collapse-DTsa5u4g.js";import"./AppBar-DfyS3ZAS.js";import"./Avatar-CJw0IObK.js";import"./StickyOptionsTop-WXCz9QxC.js";const dt={title:"Getting Started/Layout/Content",component:m,parameters:{layout:"fullscreen",docs:{description:{component:`The **Content** area is the main space of the layout.

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
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const ut=["NoBars","FullShell"];export{e as FullShell,t as NoBars,ut as __namedExportsOrder,dt as default};
