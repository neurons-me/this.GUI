import{j as n,B as h,a as d}from"./iframe-D3kdS_Ub.js";import{L as m}from"./Layout-C_rJHEI2.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-CqutZI8S.js";import"./RightSidebarContext-D09h_K_x.js";import"./TopBar-DWGjQLAR.js";import"./Icon-CXtYlj0b.js";import"./Menu-Btw_EI3V.js";import"./useSlot-BrC-uMuC.js";import"./resolveComponentProps-C1JfeoUS.js";import"./useForkRef-2K53oxYJ.js";import"./useSlotProps-cU1fxryi.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-D3ZWzLoD.js";import"./Modal-CnGFTZzj.js";import"./TransitionGroupContext-rD0k-wnc.js";import"./Grow-CCwjpSQx.js";import"./List-DtmW0RW3.js";import"./ListContext-BbXpk_HZ.js";import"./MenuItem-SrPuqoFU.js";import"./ButtonBase-ZURSVDQf.js";import"./listItemIconClasses-Dv7WtwhG.js";import"./listItemTextClasses-BmzBaLhy.js";import"./dividerClasses-DlqItYuU.js";import"./index-B9c98GwH.js";import"./useGuiMediaQuery-D1Z-CqYY.js";import"./getThemeProps-L_ZyXWLY.js";import"./useInsets-DoFD1spz.js";import"./Avatar-BqGzWYyh.js";import"./createSvgIcon-Rh2ioi1Z.js";import"./AppBar-CUkN9_Re.js";import"./Toolbar-DK5_ylbE.js";import"./Button-Bvsv15Nb.js";import"./Button-CgnwsOCQ.js";import"./CircularProgress-Bk_e6z-b.js";import"./Chip-AI67ht8y.js";import"./Paper-BLqP_ThU.js";import"./Hero-D1ARQo6k.js";import"./InspectorToggle-B44Z1qvW.js";import"./Drawer-Dq0mrwVn.js";import"./renderer-CrhpmlvX.js";import"./runtimeContext-C7CBx7OH.js";import"./IconButton-DP73IHnG.js";import"./IconButton-BqokRRXF.js";import"./ListItemIcon-QHJwmHr3.js";import"./ListItemText-_077PsP6.js";import"./Tooltip-DUrGEKTJ.js";import"./useControlled-DWJouKPk.js";import"./Collapse-BHtNA79k.js";import"./AppBar-ubakXeUg.js";import"./Avatar-4GNyo2Bl.js";import"./StickyOptionsTop-nkNvyNIi.js";const dt={title:"Getting Started/Layout/Content",component:m,parameters:{layout:"fullscreen",docs:{description:{component:`The **Content** area is the main space of the layout.

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
