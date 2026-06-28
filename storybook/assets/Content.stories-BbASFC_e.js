import{j as n,B as h,a as d}from"./iframe-CXR2GqgA.js";import{L as m}from"./Layout-DO4ID1dt.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-BUzo_SU3.js";import"./RightSidebarContext-DEkRG6CL.js";import"./TopBar-CSQcr_I_.js";import"./Icon-CvmwPEmM.js";import"./Menu-jwLMr_-x.js";import"./useSlot-DFV5KgVj.js";import"./resolveComponentProps-B69ntRQ2.js";import"./useForkRef-K1OztWBN.js";import"./useSlotProps-BuE55OuM.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-HHzNcUsn.js";import"./Modal-O7pKvnn-.js";import"./TransitionGroupContext-CcpZcVWe.js";import"./Grow-DOeZ_aY_.js";import"./List-szo-JVUG.js";import"./ListContext-Djvi1VkW.js";import"./MenuItem-CTPEqO_5.js";import"./ButtonBase-DX9GORHC.js";import"./listItemIconClasses-B4xWcd96.js";import"./listItemTextClasses-CzMVN6O5.js";import"./dividerClasses-BTyRWe9y.js";import"./index-Dfz8gTFu.js";import"./useGuiMediaQuery-Do7pc-ok.js";import"./getThemeProps-DsTEWLbr.js";import"./useInsets-BGFn-Npw.js";import"./Avatar-CCzYid9o.js";import"./createSvgIcon-Bg6G54Kl.js";import"./AppBar-BZIQ2h0r.js";import"./Toolbar-DBBKsClo.js";import"./Button-TaPxG3UH.js";import"./Button-BvWHdkuF.js";import"./CircularProgress-DcAvyTTv.js";import"./Chip-CH-AtjVg.js";import"./Paper-CF7KZOnX.js";import"./InspectorToggle-DW2fWofk.js";import"./Drawer-CtxFmC7R.js";import"./renderer-Cw5BYG9k.js";import"./runtimeContext-ZiB3-9_k.js";import"./IconButton-CGBuLZry.js";import"./IconButton-D_Bz2nNC.js";import"./ListItemIcon-keC8GNt_.js";import"./ListItemText-DR3B8aaX.js";import"./Tooltip-WUnQyLdS.js";import"./useControlled-D7UFNaaJ.js";import"./Collapse-CRpzXOyT.js";import"./AppBar-CDT7plKj.js";import"./Avatar-Dv2ecqQ0.js";import"./StickyOptionsTop-DVe7827n.js";const ht={title:"Getting Started/Layout/Content",component:m,parameters:{layout:"fullscreen",docs:{description:{component:`The **Content** area is the main space of the layout.

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
