import{j as n,B as h,a as d}from"./iframe-Df6NujF0.js";import{L as m}from"./Layout-D4zK8O1T.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-D-VryOBj.js";import"./RightSidebarContext-IltEOXuE.js";import"./TopBar-bYg__5ct.js";import"./Icon-C-wgURv6.js";import"./Menu-CewXRIFJ.js";import"./useSlot-Bd-Wnahn.js";import"./resolveComponentProps-DWjNBBVn.js";import"./useForkRef-CevvUXbO.js";import"./useSlotProps-DU24pzeu.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-CG1nIuW7.js";import"./Modal-VkZWfyFy.js";import"./TransitionGroupContext-DJpdnGjq.js";import"./Grow-DFm76bvH.js";import"./List-jJ6JZ7N8.js";import"./ListContext-CrwpJsSy.js";import"./MenuItem-veu1iPo_.js";import"./ButtonBase-B_X4AEO-.js";import"./listItemIconClasses-Bq3XQ_Cu.js";import"./listItemTextClasses-Bu-9afeB.js";import"./dividerClasses-CThCO9HN.js";import"./index-B7GshcJK.js";import"./useGuiMediaQuery-DWHgeP1E.js";import"./getThemeProps-CKjuCPoe.js";import"./useInsets-CXKW4o50.js";import"./Avatar-DZwgnex_.js";import"./createSvgIcon-3pnZInSB.js";import"./AppBar-DmRaYry1.js";import"./Toolbar-CT9YI5vw.js";import"./Button-D9vmRegk.js";import"./Button-d3vT2I27.js";import"./CircularProgress-CXJzJnf2.js";import"./Chip-BdfC3Ugd.js";import"./Paper-CBheul9W.js";import"./InspectorToggle-BJVFhmsH.js";import"./Drawer-Bvdf8Gdt.js";import"./renderer-BMj62cg7.js";import"./runtimeContext-BGyJJMBu.js";import"./IconButton-C4znVeLO.js";import"./IconButton-jEx60ebh.js";import"./ListItemIcon-D22Kkc8f.js";import"./ListItemText-CBO1Kv1j.js";import"./Tooltip-CM7UURJg.js";import"./useControlled-N2X3AJQ6.js";import"./Collapse-V-lGPEMt.js";import"./AppBar-CsNrUXZt.js";import"./Avatar-Cfj_eY0w.js";import"./StickyOptionsTop-BKqWrcXZ.js";const ht={title:"Getting Started/Layout/Content",component:m,parameters:{layout:"fullscreen",docs:{description:{component:`The **Content** area is the main space of the layout.

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
