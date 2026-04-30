import{j as n,B as h,a as d}from"./iframe-DjCVt7fI.js";import{L as m}from"./Layout-4wKlteoY.js";import"./preload-helper-Dp1pzeXC.js";import"./useInsets-arlOGh6C.js";import"./RightSidebarContext-BZge8nOH.js";import"./TopBar-DnjT_fDz.js";import"./Icon-2eyRSfiI.js";import"./Menu-Dh5v2xHH.js";import"./useSlot-BH35M0Kq.js";import"./resolveComponentProps-DH0v1ivu.js";import"./useForkRef-B8mj3yu-.js";import"./useSlotProps-Z4YGG9ba.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-KEVgxZe5.js";import"./Modal-Beuq0239.js";import"./useEventCallback-DS-1wPyE.js";import"./Grow-BfUFX405.js";import"./TransitionGroupContext-DL1WlFMz.js";import"./List-2pLDQJMN.js";import"./ListContext-C2fXlir5.js";import"./MenuItem-DW-JhOv1.js";import"./ButtonBase-R8XXi6kN.js";import"./listItemIconClasses-DLa6Dg3U.js";import"./listItemTextClasses-BjK0s3gI.js";import"./dividerClasses-CJARtFPe.js";import"./index-B4ZqLDtK.js";import"./useGuiMediaQuery-Q4OJr_sc.js";import"./getThemeProps-CmGuyLZ3.js";import"./Avatar-DYUQSeNb.js";import"./createSvgIcon-DfI1gjmf.js";import"./AppBar-D_fxXm1x.js";import"./Toolbar-B9eD0FrK.js";import"./Paper-DjmomdbI.js";import"./Hero-BfoH7vnY.js";import"./InspectorToggle-Bc522O6V.js";import"./Button-Btre8pBJ.js";import"./Button-D498MQIb.js";import"./CircularProgress-BTsMI-jR.js";import"./IconButton-C9bpkJdw.js";import"./IconButton-3ZhB-jAz.js";import"./selectionStore-Coy7dh9o.js";import"./ListItemIcon-B0coOJe6.js";import"./ListItemText-CvLWwDuE.js";import"./Drawer-GUeS6ILZ.js";import"./Tooltip-AJA_1ylm.js";import"./useControlled-2dJkZLWW.js";import"./Collapse-Cfgg-LST.js";import"./AppBar-D5Xn2fBL.js";import"./Avatar-C-_FoBV5.js";import"./StickyOptionsTop-DwdRW1ZR.js";const ct={title:"GUI/Layout/Content",component:m,parameters:{layout:"fullscreen",docs:{description:{component:`The **Content** area is the main space of the layout.

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
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const ht=["NoBars","FullShell"];export{e as FullShell,t as NoBars,ht as __namedExportsOrder,ct as default};
