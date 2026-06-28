import{j as n,B as h,a as d}from"./iframe-BamSxvGl.js";import{L as m}from"./Layout-DYJiRBjZ.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-B_cxOhR3.js";import"./RightSidebarContext-DC9c-OI1.js";import"./TopBar-C0G7yZyh.js";import"./Icon-BYSltbOq.js";import"./Menu-De7Vf5tl.js";import"./useSlot-iMtiR0hJ.js";import"./resolveComponentProps-CeJkfEFt.js";import"./useForkRef-CEd4Lltr.js";import"./useSlotProps-C5DVQp4q.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-upp0xvKF.js";import"./Modal-oSZ9zn9w.js";import"./TransitionGroupContext-Dsjzy0Zl.js";import"./Grow-BboTJdZh.js";import"./List-iFG0l6Is.js";import"./ListContext-O3hO-6P8.js";import"./MenuItem-DNoTubVC.js";import"./ButtonBase-CDq_uQ76.js";import"./listItemIconClasses-DxJ6xFM8.js";import"./listItemTextClasses-gUF37NNN.js";import"./dividerClasses-BZftlWy-.js";import"./index-BGEKDJPD.js";import"./useGuiMediaQuery-wwAu8Zzp.js";import"./getThemeProps-atWsPGFr.js";import"./useInsets-BiwEtkcN.js";import"./Avatar-CTejSSfg.js";import"./createSvgIcon-H1Ui9rrv.js";import"./AppBar-CzFQE5J3.js";import"./Toolbar-B11vCu7Z.js";import"./Button-BXI39ZZO.js";import"./Button-BvX7gL8H.js";import"./CircularProgress-BYWRkUyA.js";import"./Chip-3ZxPCOQf.js";import"./Paper-Biw32b0f.js";import"./InspectorToggle-zYA6ms9l.js";import"./Drawer-ZcM56YDZ.js";import"./renderer-pdt03z3o.js";import"./runtimeContext-CxK-3G5O.js";import"./IconButton-DrPxXNHQ.js";import"./IconButton-BfXXQCoy.js";import"./ListItemIcon-Dhk1bM8U.js";import"./ListItemText-DTLcNajK.js";import"./Tooltip-Bj6JsHBv.js";import"./useControlled-DC9n4FZ6.js";import"./Collapse-CMzi5Fqf.js";import"./AppBar-B7eVMACE.js";import"./Avatar-DlKBX9q_.js";import"./StickyOptionsTop-B39JdOK6.js";const ht={title:"Getting Started/Layout/Content",component:m,parameters:{layout:"fullscreen",docs:{description:{component:`The **Content** area is the main space of the layout.

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
