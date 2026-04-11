import{j as n,B as h,T as d}from"./iframe-B26CALAz.js";import{L as m}from"./Layout-XseSioSF.js";import"./preload-helper-Dp1pzeXC.js";import"./useInsets-CfO0t8H4.js";import"./TopBar-WY_tyDQK.js";import"./Icon-BwfjAmbM.js";import"./Menu-W5gOTMtk.js";import"./useSlot-DcL_IPHt.js";import"./useForkRef-CXnDbkaK.js";import"./Grow-CB76i9l6.js";import"./TransitionGroupContext-DkIGTr29.js";import"./List-jYW9fhKK.js";import"./ListContext-btDJ5CVO.js";import"./Paper-Dt3QYluA.js";import"./Modal-CeysofHi.js";import"./MenuItem-__CxIggm.js";import"./ButtonBase-CL1dL2Cz.js";import"./listItemIconClasses-C9wThiCW.js";import"./listItemTextClasses-DsrlZgkx.js";import"./dividerClasses-BROQATY4.js";import"./index-Dq2YPn2C.js";import"./useGuiMediaQuery-5Gcf0ItR.js";import"./getThemeProps-zcjxvvoG.js";import"./Avatar-lotYJ8jQ.js";import"./createSvgIcon-D0Oa0mpn.js";import"./AppBar-BPo4Hgy0.js";import"./Toolbar-XgnjFBe6.js";import"./Button-C9RN3hmg.js";import"./Button-Ygdqa8j-.js";import"./CircularProgress-v9Dx38HO.js";import"./Paper-CRvkXcvv.js";import"./controlSurface-C0kcMCZY.js";import"./selectionStore-Coy7dh9o.js";import"./ListItemIcon-2ml_yMfP.js";import"./ListItemText-D4W6YSyB.js";import"./Drawer-C6ZMtuP3.js";import"./Tooltip-DhnVtazG.js";import"./useControlled-DCXjgbPx.js";import"./Collapse-BJwY2-dz.js";import"./IconButton-BwCluXj6.js";import"./AppBar-Bcsy97MN.js";import"./Avatar-FEiYSSB6.js";import"./StickyOptionsTop-A0ir6a7_.js";const re={title:"GUI/Layout/Content",component:m,parameters:{layout:"fullscreen",docs:{description:{component:`The **Content** area is the main space of the layout.

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
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const ie=["NoBars","FullShell"];export{t as FullShell,e as NoBars,ie as __namedExportsOrder,re as default};
