import{j as n,B as h,a as d}from"./iframe-CQnOlLv9.js";import{L as m}from"./Layout-UUHwfp-I.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-Rm5L1sGT.js";import"./RightSidebarContext-O5J7qe4R.js";import"./TopBar-BkxeKugq.js";import"./Icon-DboRFcIN.js";import"./Menu-BylnG-Os.js";import"./useSlot-DeiHnBiM.js";import"./resolveComponentProps-1ujbY_pz.js";import"./useForkRef-DosucJWq.js";import"./useSlotProps-Bl6ntCwV.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-i8IPtUV5.js";import"./Modal-Sz-vgbIW.js";import"./TransitionGroupContext-YwULhr2u.js";import"./Grow-DI3S7WHV.js";import"./List-B9tUoxP3.js";import"./ListContext-Dw-k9oI6.js";import"./MenuItem-ywjy3tTO.js";import"./ButtonBase-CdaNW7hP.js";import"./listItemIconClasses-Bxa553YT.js";import"./listItemTextClasses-AMnQSwtf.js";import"./dividerClasses-B3O0j9jv.js";import"./index--DQWcIhE.js";import"./useGuiMediaQuery-DPsYPqzz.js";import"./getThemeProps-BFLMI8Gb.js";import"./useInsets-B7GnLS1n.js";import"./Avatar-BmtSXZkj.js";import"./createSvgIcon-CJgzMldw.js";import"./AppBar-BWjErzyi.js";import"./Toolbar-B7QdMwFU.js";import"./Button-DLaYzOFx.js";import"./Button-BGOnVkyb.js";import"./CircularProgress-weFzFWV3.js";import"./Chip-Ch6e3Wrd.js";import"./Paper-C4MUk0Wf.js";import"./InspectorToggle-BBOTE1-j.js";import"./Drawer-BOa67ag5.js";import"./renderer-khtWV3Ut.js";import"./runtimeContext-BCtgIIHf.js";import"./IconButton-BRvq8Hxk.js";import"./IconButton-C_kZG7UM.js";import"./ListItemIcon-DH0yM27j.js";import"./ListItemText-BfzhnW8b.js";import"./Tooltip-CV4jrk7n.js";import"./useControlled-UqIt8YAL.js";import"./Collapse-Bxyzm3JI.js";import"./AppBar-B5DvJ6dt.js";import"./Avatar-DxUuXmAR.js";import"./StickyOptionsTop-DbrJDXCQ.js";const ht={title:"Getting Started/Layout/Content",component:m,parameters:{layout:"fullscreen",docs:{description:{component:`The **Content** area is the main space of the layout.

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
