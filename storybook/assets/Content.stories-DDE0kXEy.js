import{j as n,B as h,a as d}from"./iframe-BBMjw61D.js";import{L as m}from"./Layout-DYzfXpbO.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-CfFvCiFI.js";import"./RightSidebarContext-CACk_XWP.js";import"./TopBar-DThKYg6H.js";import"./Icon-CeF6C18S.js";import"./Menu-f_YCmJm9.js";import"./useSlot-DH-Teep3.js";import"./resolveComponentProps-Mj_M1BKr.js";import"./useForkRef-CJB8aibE.js";import"./useSlotProps-BFAuu3vI.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-DtVu_y7z.js";import"./Modal-DGyiVzIh.js";import"./TransitionGroupContext-iBgzY6Iu.js";import"./Grow-yh6P9bPz.js";import"./List-Dr2SBuC9.js";import"./ListContext-BFFnw-lM.js";import"./MenuItem-C-WaRd9H.js";import"./ButtonBase-CfpMXisj.js";import"./listItemIconClasses-D5F5QXoM.js";import"./listItemTextClasses-Dx89N0FO.js";import"./dividerClasses-BWVLveXZ.js";import"./index-squKp4GI.js";import"./useGuiMediaQuery-CrZu1DfA.js";import"./getThemeProps-CJ0dIgn2.js";import"./useInsets-D3hivsyV.js";import"./Avatar-OMq3YolH.js";import"./createSvgIcon-BNRhowvH.js";import"./AppBar-t2qX4TQr.js";import"./Toolbar-Dp0b3UO_.js";import"./Button-DkXRMP8k.js";import"./Button-CkOjU5EA.js";import"./CircularProgress-DqaELN0L.js";import"./Chip-C-DVivil.js";import"./Paper-_cshIEQm.js";import"./InspectorToggle-IUCkbs8m.js";import"./Drawer-D_wc0bFk.js";import"./renderer-DJzlvIF7.js";import"./runtimeContext-DLWF6mek.js";import"./IconButton-CI8jOMmz.js";import"./IconButton-CnArdgnS.js";import"./ListItemIcon-O_mc4lGd.js";import"./ListItemText-CDOgxmSP.js";import"./Tooltip-DOgg3P-4.js";import"./useControlled-SC_H9kP0.js";import"./Collapse-DJ7dJk8v.js";import"./AppBar-FRZHGevT.js";import"./Avatar-4H4TtvBD.js";import"./StickyOptionsTop-BtMBx-Zz.js";const ht={title:"Getting Started/Layout/Content",component:m,parameters:{layout:"fullscreen",docs:{description:{component:`The **Content** area is the main space of the layout.

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
