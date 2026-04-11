import{j as n,B as h,a as d}from"./iframe-VByCAMq0.js";import{L as m}from"./Layout-DaSJ2-IT.js";import"./preload-helper-Dp1pzeXC.js";import"./useInsets-Cj6UKEdm.js";import"./RightSidebarContext-CWRwzcur.js";import"./TopBar-CULFRWAJ.js";import"./Icon-BTDP3cyE.js";import"./Menu-9llF1EIC.js";import"./useSlot-BQxwWLoj.js";import"./useForkRef-at6iFRE0.js";import"./Grow-yTTW3IAg.js";import"./TransitionGroupContext-BsXbcIrf.js";import"./List-CdNZSNyB.js";import"./ListContext-CUbLHnka.js";import"./Paper-CGsCy_dS.js";import"./Modal-WpCfVUEs.js";import"./MenuItem-CHLMcV3W.js";import"./ButtonBase-Ddf4rdCO.js";import"./listItemIconClasses-BIfuaFhY.js";import"./listItemTextClasses-0eqNW5zI.js";import"./dividerClasses-qk2AzdUE.js";import"./index-GfE-hmSP.js";import"./useGuiMediaQuery-D_LWHVvm.js";import"./getThemeProps-BP5H2oeD.js";import"./Avatar-Xiw6SHQ4.js";import"./createSvgIcon-B4-eI1hQ.js";import"./AppBar-COTbyzEz.js";import"./Toolbar-B5C1gson.js";import"./InspectorToggle-l5ZL5CIN.js";import"./Button-1wg7geSe.js";import"./Button-BDqwkNQI.js";import"./CircularProgress-BiH9goPR.js";import"./IconButton-BiNRO4tv.js";import"./IconButton-CGlHk7MM.js";import"./selectionStore-Coy7dh9o.js";import"./ListItemIcon-CZbD3kdS.js";import"./ListItemText-EGN6nTJf.js";import"./Drawer-Ce_ZhLjS.js";import"./Tooltip-rRxgskYp.js";import"./useControlled-85p8TW_V.js";import"./Collapse-B0Sl3w_T.js";import"./AppBar-DjYRabCk.js";import"./Avatar-CstD0zJh.js";import"./StickyOptionsTop-BP0R1O41.js";const ie={title:"GUI/Layout/Content",component:m,parameters:{layout:"fullscreen",docs:{description:{component:`The **Content** area is the main space of the layout.

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
