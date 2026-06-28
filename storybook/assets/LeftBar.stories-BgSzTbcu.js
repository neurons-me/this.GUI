import{j as d}from"./iframe-DsRKGudf.js";import{L as m}from"./Layout-6DAHQ17l.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-_QGXIFEF.js";import"./RightSidebarContext-DNKtIxGA.js";import"./TopBar-6S0vC7I_.js";import"./Icon-C-KCwcAw.js";import"./Menu-Cbf6-2Ii.js";import"./useSlot-UY7wHEUA.js";import"./resolveComponentProps-DWU9FwiD.js";import"./useForkRef-DaPdQACB.js";import"./useSlotProps-DnVOBi5c.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-CGP3T9PR.js";import"./Modal-CmcgpO8z.js";import"./TransitionGroupContext-gftPsmXQ.js";import"./Grow-DUdPBg0C.js";import"./List-B6xbk-JS.js";import"./ListContext-Dg6a-o_V.js";import"./MenuItem-DJ6cgyB0.js";import"./ButtonBase-BHgzLA4j.js";import"./listItemIconClasses-Dkt3uDCe.js";import"./listItemTextClasses-RCKfP_HI.js";import"./dividerClasses-Bl7DWpUo.js";import"./index-DnhQwjfQ.js";import"./useGuiMediaQuery-B4e27NiP.js";import"./getThemeProps-B_l613BN.js";import"./useInsets-Ba5DZ-rk.js";import"./Avatar-BFVkEIDW.js";import"./createSvgIcon-C4CP9IBQ.js";import"./AppBar-Lh37GgoN.js";import"./Toolbar-H6MAk1z7.js";import"./Button-LiUEA2TU.js";import"./Button-HEMqV7f1.js";import"./CircularProgress-CBgE9hq-.js";import"./Chip-C8fm0eph.js";import"./Paper-CZuqLR2o.js";import"./InspectorToggle-B2-9R7tJ.js";import"./Drawer-DWTuXBaB.js";import"./renderer-X8EydWrl.js";import"./runtimeContext-k6DqlALu.js";import"./IconButton-BbGJVgc-.js";import"./IconButton-m_4K4KMU.js";import"./ListItemIcon-C9IEsNAm.js";import"./ListItemText-Dx2OxWN3.js";import"./Tooltip-DwxTrZJL.js";import"./useControlled-BTRy4wlV.js";import"./Collapse-_min-fPX.js";import"./AppBar-7FDuJ_-R.js";import"./Avatar-CdR_IMqv.js";import"./StickyOptionsTop-CITl6C7y.js";const lo={title:"Getting Started/Layout/LeftBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **LeftBar** is the left navigation bar.

## What it expects
- \`elements\`: main items shown in the sidebar.
- \`footerElements\`: optional items shown at the bottom.
- \`initialView\`: \`rail\` or \`expanded\`.
- \`header\`: optional title or icon shown at the top.

## Item types
- \`link\`: navigation item.
- \`menu\`: item with nested options.
- \`action\`: clickable action.

## Basic shape
~~~tsx
<LeftBar
  initialView="rail"
  header={{ title: 'Workspace', icon: 'apps' }}
  elements={[
    { type: 'link', props: { label: 'Dashboard', icon: 'dashboard' } },
    {
      type: 'menu',
      props: {
        label: 'Projects',
        icon: 'folder',
        items: [
          { label: 'Project A', icon: 'work' },
        ],
      },
    },
  ]}
  footerElements={[
    { type: 'link', props: { label: 'Settings', icon: 'settings' } },
    { type: 'action', props: { label: 'Help', icon: 'help' } },
  ]}
/>
~~~

## Views
- \`rail\`: compact icon view.
- \`expanded\`: full view with labels.
`}}}},l=c=>d.jsx(m,{...c}),o=l.bind({});o.args={LeftBar:{initialView:"rail",header:{title:"Workspace",icon:"apps",iconColor:"var(--gui-primary)"},elements:[{type:"link",props:{label:"Dashboard",icon:"dashboard",iconColor:"var(--gui-primary)"}},{type:"link",props:{label:"Analytics",icon:"bar_chart",iconColor:"var(--gui-secondary)"}},{type:"menu",props:{label:"Projects",icon:"folder",iconColor:"var(--gui-warning)",items:[{label:"Project A",icon:"work",iconColor:"var(--gui-success)"},{label:"Project B",icon:"assignment",iconColor:"var(--gui-info)"}]}}],footerElements:[{type:"link",props:{label:"Settings",icon:"settings",iconColor:"var(--gui-primary)"}},{type:"action",props:{label:"Help",icon:"help",iconColor:"var(--gui-success)"}}]}};const t=l.bind({});var i;t.args={LeftBar:{...(i=o.args)!=null&&i.LeftBar&&typeof o.args.LeftBar=="object"?o.args.LeftBar:{},initialView:"expanded"}};var r,e,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:"args => <Layout {...args} />",...(a=(e=o.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};var p,s,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"args => <Layout {...args} />",...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const co=["RailView","ExpandedView"];export{t as ExpandedView,o as RailView,co as __namedExportsOrder,lo as default};
