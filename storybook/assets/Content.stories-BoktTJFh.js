import{j as n,B as h,a as d}from"./iframe-uhZydg3N.js";import{L as m}from"./Layout-DSmyQ4Ie.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-DZGZN3iX.js";import"./RightSidebarContext-DF5azfrL.js";import"./TopBar-h7XBhWdH.js";import"./Icon-Di-oNoRg.js";import"./Menu-BJsPtyM-.js";import"./useSlot-TMdTvKz_.js";import"./resolveComponentProps-B0OmEIZv.js";import"./useForkRef-BQM8aYFH.js";import"./useSlotProps-Bd4owx_u.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-tmeeNhAT.js";import"./Modal-Ddh6w-mY.js";import"./TransitionGroupContext-LKJIYauK.js";import"./Grow-BQ9hfFIj.js";import"./List-ZucwSjv8.js";import"./ListContext-wGgHVR3V.js";import"./MenuItem-BWLDfidd.js";import"./ButtonBase-CdxK8IVR.js";import"./listItemIconClasses-BvHRCK78.js";import"./listItemTextClasses-CsGfA3md.js";import"./dividerClasses--NYJMb9z.js";import"./index-Cc8CasjX.js";import"./useGuiMediaQuery-bhoeUMQD.js";import"./getThemeProps-DMY8I5U3.js";import"./useInsets-DEwD25dx.js";import"./Avatar-B6GTAajh.js";import"./createSvgIcon-D5bTnZ11.js";import"./AppBar-Bl_jxp7l.js";import"./Toolbar-BSFIxwSy.js";import"./Button-BHEKV8Di.js";import"./Button-CWDeg29G.js";import"./CircularProgress-Cx3IOg4n.js";import"./Chip-CrmsVK4s.js";import"./Paper-CQQWQJgW.js";import"./InspectorToggle-cqmoKE-f.js";import"./Drawer-sqrMKJTL.js";import"./renderer-BF45M6Bw.js";import"./runtimeContext-C2rVU1dF.js";import"./IconButton-Dt-8QZjB.js";import"./IconButton-vVnP1oY8.js";import"./ListItemIcon-BV2-R9yV.js";import"./ListItemText-DLLCwtpI.js";import"./Tooltip-DoYUUZSH.js";import"./useControlled-DgoOZqD8.js";import"./Collapse-nwYbNMG2.js";import"./AppBar-BEi_-dI6.js";import"./Avatar-Clq5nrrv.js";import"./StickyOptionsTop-D1weJkV6.js";const ht={title:"Getting Started/Layout/Content",component:m,parameters:{layout:"fullscreen",docs:{description:{component:`The **Content** area is the main space of the layout.

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
