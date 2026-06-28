import{j as n,B as h,a as d}from"./iframe-BTtW7_F-.js";import{L as m}from"./Layout-BsAL90LP.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-JJRWTfsn.js";import"./RightSidebarContext-BJTxHXFC.js";import"./TopBar-nEAKdKr8.js";import"./Icon-CA024acM.js";import"./Menu-B2Kf8SKt.js";import"./useSlot-CIqJhg31.js";import"./resolveComponentProps-B8K2Oa0H.js";import"./useForkRef-C7ZRtJ0F.js";import"./useSlotProps-W8GAIZ31.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-BQDIcK-B.js";import"./Modal-QdAoN3Du.js";import"./TransitionGroupContext-Ddjl0V-4.js";import"./Grow-CbtqgvRU.js";import"./List-_u9nhsq8.js";import"./ListContext-BZWt7HBR.js";import"./MenuItem-CXjhdloI.js";import"./ButtonBase-DUaQ4VIL.js";import"./listItemIconClasses-CaJ8LvZp.js";import"./listItemTextClasses-UDjNIRwn.js";import"./dividerClasses-7JosgSfE.js";import"./index-DOAJrMLS.js";import"./useGuiMediaQuery-Dnl6pwFn.js";import"./getThemeProps-gEKSQZyW.js";import"./useInsets-BiVqw73U.js";import"./Avatar-DtiwpuCv.js";import"./createSvgIcon-CqN86fU2.js";import"./AppBar-CHOddcC9.js";import"./Toolbar-Cfnsh_EX.js";import"./Button-D2e3Dj-X.js";import"./Button-Ddhen21U.js";import"./CircularProgress-ukva-b-G.js";import"./Chip-DXMIFmCa.js";import"./Paper-31X3P03d.js";import"./InspectorToggle-CzaqL69D.js";import"./Drawer-BdzA4NBr.js";import"./renderer-DXCdzS_m.js";import"./runtimeContext-C007B3Qb.js";import"./IconButton-Cuz7NzFo.js";import"./IconButton-DeO-vsGK.js";import"./ListItemIcon-D0_aFo-V.js";import"./ListItemText-EmUfqwzP.js";import"./Tooltip-MnDsYJ5t.js";import"./useControlled-DL-5wEmZ.js";import"./Collapse-BmKeUqre.js";import"./AppBar-C2NIczVy.js";import"./Avatar-CEG7t77t.js";import"./StickyOptionsTop-Dhc0uN7_.js";const ht={title:"Getting Started/Layout/Content",component:m,parameters:{layout:"fullscreen",docs:{description:{component:`The **Content** area is the main space of the layout.

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
