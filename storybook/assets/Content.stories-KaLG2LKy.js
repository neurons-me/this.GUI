import{j as n,B as h,a as d}from"./iframe-C_b0i3u8.js";import{L as m}from"./Layout-CAp-XTNZ.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-3FXCKWFS.js";import"./TopBar-DCXuAIai.js";import"./Icon-Dg0Fnz52.js";import"./Menu-BmxRIfpd.js";import"./useSlot-G4ByF3pc.js";import"./resolveComponentProps-Drajm3zd.js";import"./useForkRef-qTVDMFQr.js";import"./useSlotProps-HAMG0RiA.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-Boii5j1w.js";import"./ownerDocument-DW-IO8s5.js";import"./Modal-CH6Tu7Dy.js";import"./TransitionGroupContext-DA-WNYvH.js";import"./Portal-4Utnz7R5.js";import"./Grow-D4N9GH66.js";import"./mergeSlotProps-DYU3Hg2s.js";import"./List-Cw_AV0Pi.js";import"./ListContext-CVvYdQEp.js";import"./MenuItem-Br5KfxSn.js";import"./ButtonBase-CBZ6tj8F.js";import"./listItemIconClasses-Cc2CuJ3o.js";import"./listItemTextClasses-Cde-U1LC.js";import"./dividerClasses-UjyL7AFI.js";import"./index-C2pm_4fX.js";import"./useGuiMediaQuery-B5yZKInx.js";import"./getThemeProps-BGG3twlu.js";import"./useInsets-DA-vR9Ji.js";import"./Avatar-6f-rd4nL.js";import"./createSvgIcon-BRYETk95.js";import"./AppBar-CpERTJpY.js";import"./Toolbar-C_-YGC8g.js";import"./Button-mr_aWkNz.js";import"./Button-DaKRkwMu.js";import"./CircularProgress-DExCAnw9.js";import"./Chip-BnLuWVgV.js";import"./Paper-p9eezbgu.js";import"./Tooltip-Nvc_UGsj.js";import"./useControlled-Dv24GBNp.js";import"./Collapse-B_UpAWAu.js";import"./IconButton-D_PHND5e.js";import"./InspectorToggle-DHMJbXJf.js";import"./Drawer-DUsYWcFM.js";import"./renderer-q29RPfuI.js";import"./IconButton-BDpt7_X6.js";import"./ListItemIcon-DjjSIRtc.js";import"./ListItemText-npHmLwIa.js";import"./AppBar-DgGRurwB.js";import"./Avatar-DlJ68fP-.js";import"./StickyOptionsTop-BW1Qxo-f.js";const dt={title:"Getting Started/Layout/Content",component:m,parameters:{layout:"fullscreen",docs:{description:{component:`The **Content** area is the main space of the layout.

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
