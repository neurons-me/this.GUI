import{j as n,B as h,a as d}from"./iframe-LlyISvcX.js";import{L as m}from"./Layout-B5MElR5W.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-6yFLVm3Y.js";import"./RightSidebarContext-Bh2naL9l.js";import"./TopBar-DDxbmeUl.js";import"./Icon-C5wKrkQR.js";import"./Menu-CW90nM-2.js";import"./useSlot-BjB36WMn.js";import"./resolveComponentProps-je3W1FOW.js";import"./useForkRef-DXwMfuYh.js";import"./useSlotProps-CRHevxrj.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-hYA-maZS.js";import"./Modal-umc8PO72.js";import"./TransitionGroupContext-BjZkdrml.js";import"./Grow-DSFuWx_a.js";import"./List-DoxD2WUl.js";import"./ListContext-Dm60-R5S.js";import"./MenuItem-Cfk9qc44.js";import"./ButtonBase-DyYp4SIE.js";import"./listItemIconClasses-D6VIahjK.js";import"./listItemTextClasses-Br3b6Cqh.js";import"./dividerClasses-Cf1lNlFP.js";import"./index-BOl7PhDv.js";import"./useGuiMediaQuery-LtNcA9tA.js";import"./getThemeProps-s2Mi5D-I.js";import"./useInsets-B7dX2k6P.js";import"./Avatar-ChZaxOul.js";import"./createSvgIcon-F_TJwLpT.js";import"./AppBar-DmO_1bdm.js";import"./Toolbar-D9CC6uQ-.js";import"./Button-E9K2aFZ9.js";import"./Button-DOPP7EdY.js";import"./CircularProgress-CafKaFgs.js";import"./Chip-DPMNmmQz.js";import"./Paper-DVW3rpXx.js";import"./InspectorToggle-Cm4u4Oni.js";import"./Drawer-DIif2F70.js";import"./renderer-CCzHEVvj.js";import"./runtimeContext-CCS5-VQy.js";import"./IconButton-C_eoEAQJ.js";import"./IconButton-BovWFk-U.js";import"./ListItemIcon-SDPMsMGp.js";import"./ListItemText-COd_jaih.js";import"./Tooltip-D02JfOMh.js";import"./useControlled-SuNCYmOK.js";import"./Collapse-C6JFi7OO.js";import"./AppBar-BRdLAnwz.js";import"./Avatar-DLw2vrYg.js";import"./StickyOptionsTop-pHdJIC4M.js";const ht={title:"Getting Started/Layout/Content",component:m,parameters:{layout:"fullscreen",docs:{description:{component:`The **Content** area is the main space of the layout.

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
