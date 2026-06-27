import{j as n,B as h,a as d}from"./iframe-B945G3MO.js";import{L as m}from"./Layout-CE0r98RO.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-ccRj2fc-.js";import"./RightSidebarContext-gwNz-TWS.js";import"./TopBar-DEQm_JGV.js";import"./Icon-B7ImVv8I.js";import"./Menu-B2ZDxcVs.js";import"./useSlot-BDGGiRla.js";import"./resolveComponentProps-Cr13QVQ8.js";import"./useForkRef-B1qixtFe.js";import"./useSlotProps-C5tgyCQW.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-B44MHfVE.js";import"./Modal-DT98mAxm.js";import"./TransitionGroupContext-C7M7qqJI.js";import"./Grow-SjjAWBSH.js";import"./List-n6ROlhJL.js";import"./ListContext-Ck__g24J.js";import"./MenuItem-CwUgCQwg.js";import"./ButtonBase-D-uLuZlV.js";import"./listItemIconClasses-DsWwoGm5.js";import"./listItemTextClasses-DhSbipbj.js";import"./dividerClasses-BqPsrmCt.js";import"./index-C7HYsPCV.js";import"./useGuiMediaQuery-MuOZCohC.js";import"./getThemeProps-BEaVCLc9.js";import"./useInsets-CM0D7_rB.js";import"./Avatar-BOde2NC_.js";import"./createSvgIcon-DmKvINFx.js";import"./AppBar-COM4km4L.js";import"./Toolbar-CMdIY8Zj.js";import"./Button-CKOdrTu7.js";import"./Button-5CJ0bfWc.js";import"./CircularProgress-CblgA6-I.js";import"./Chip-BraUMfbk.js";import"./Paper-Cc-h7jKx.js";import"./InspectorToggle-BxuSsdIV.js";import"./Drawer-DwqR1QDi.js";import"./renderer-_moSinZp.js";import"./runtimeContext-Cw7GHtwp.js";import"./IconButton-D5mRMUCb.js";import"./IconButton-DSENFRag.js";import"./ListItemIcon-BzUqBMfL.js";import"./ListItemText-BJh5K7TE.js";import"./Tooltip-DBphtguK.js";import"./useControlled-ojhLLIC7.js";import"./Collapse-CU-qqOqK.js";import"./AppBar-CUjmPqBG.js";import"./Avatar-K_liqaPY.js";import"./StickyOptionsTop-U5B7Kap0.js";const ht={title:"GUI/Layout/Content",component:m,parameters:{layout:"fullscreen",docs:{description:{component:`The **Content** area is the main space of the layout.

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
