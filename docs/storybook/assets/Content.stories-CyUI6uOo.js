import{j as n,B as h,a as d}from"./iframe-D-yLkxRm.js";import{L as m}from"./Layout-DYLuquLs.js";import"./preload-helper-Dp1pzeXC.js";import"./useInsets-B3V1EvY9.js";import"./RightSidebarContext-D2JukOYm.js";import"./TopBar-DwsGAdzk.js";import"./Icon-C8lU0iA9.js";import"./Menu-BAv5FIZF.js";import"./useSlot-BRmhrC03.js";import"./useForkRef-3g40efWb.js";import"./Grow-B465bZ7r.js";import"./TransitionGroupContext-VW4x2IpZ.js";import"./List-CBF9Jm2I.js";import"./ListContext-4WRkoI35.js";import"./Paper-Ddrsj0pd.js";import"./Modal-C6Ht38j9.js";import"./MenuItem-CxHbwPe9.js";import"./ButtonBase-CgHBv6ML.js";import"./listItemIconClasses-5wPKrVj1.js";import"./listItemTextClasses-3g44Redx.js";import"./dividerClasses-Yf84oI0m.js";import"./index-DQlPD90Q.js";import"./useGuiMediaQuery-CO0A_EV_.js";import"./getThemeProps-BicHvnVd.js";import"./Avatar-l9O_8UC1.js";import"./createSvgIcon-CiK1fZ8I.js";import"./AppBar-Cf0w-hTN.js";import"./Toolbar-UTGLpwz6.js";import"./InspectorToggle-Dx5naHaQ.js";import"./Button-f1opXuFn.js";import"./Button-DTY8LgOd.js";import"./CircularProgress-DrGUE8s9.js";import"./IconButton-D_YfD0us.js";import"./IconButton-B3K44CtS.js";import"./selectionStore-Coy7dh9o.js";import"./ListItemIcon-BRbJkcZX.js";import"./ListItemText-DaNZcaBp.js";import"./Drawer-u-7pRxH5.js";import"./Tooltip-BeKJAHLx.js";import"./useControlled-ZzTc7dN6.js";import"./Collapse-CJsa40Ws.js";import"./AppBar-Cy4oU5pO.js";import"./Avatar-W1LSahfd.js";import"./StickyOptionsTop-C_I4FAIT.js";const ie={title:"GUI/Layout/Content",component:m,parameters:{layout:"fullscreen",docs:{description:{component:`The **Content** area is the main space of the layout.

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
`}}}},u=({text:o})=>n.jsx(h,{sx:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"background.default",color:"text.primary"},children:n.jsx(d,{variant:"h4",children:o})}),c=o=>n.jsx(m,{...o,children:n.jsx(u,{text:"This is the Content area"})}),e={render:c,args:{}},t={render:c,args:{TopBar:{title:"Full Layout"},LeftBar:{initialView:"rail",elements:[{type:"link",props:{label:"Dashboard",icon:"dashboard"}},{type:"link",props:{label:"Analytics",icon:"bar_chart"}}],footerElements:[{type:"link",props:{label:"Settings",icon:"settings"}}]},RightBar:{initialView:"expanded",elements:[{type:"link",props:{label:"Activity",icon:"history"}},{type:"menu",props:{label:"Views",icon:"view_cozy",items:[{label:"Timeline",icon:"timeline"}]}}],footerElements:[{type:"action",props:{label:"Help",icon:"help"}}]},Footer:{brandLabel:"neurons.me",position:"static",leftElements:[{type:"link",props:{label:"Docs",href:"/docs"}}],rightElements:[{type:"link",props:{label:"GitHub",href:"https://github.com/neurons-me"}}]}}};var r,i,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: Template,
  args: {}
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var p,s,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const ae=["NoBars","FullShell"];export{t as FullShell,e as NoBars,ae as __namedExportsOrder,ie as default};
