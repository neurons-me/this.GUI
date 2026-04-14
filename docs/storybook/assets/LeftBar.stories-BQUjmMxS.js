import{j as d}from"./iframe-DTkfRnJf.js";import{L as m}from"./Layout-C1HOO3Oz.js";import"./preload-helper-Dp1pzeXC.js";import"./useInsets-DrPGyJYK.js";import"./RightSidebarContext-Bim1nxNz.js";import"./TopBar-C7u1v04C.js";import"./Icon-BM-Jwf27.js";import"./Menu-D5Y3vMKV.js";import"./useSlot-BNQnsQI2.js";import"./useForkRef-Cru_ePRK.js";import"./Grow-D3KHJdX1.js";import"./TransitionGroupContext-BWT1wUhm.js";import"./List-BekQve-t.js";import"./ListContext-B5Em9Eft.js";import"./Paper-CyGjh2vj.js";import"./Modal-CK9c8Gp7.js";import"./MenuItem-2cLCpEHr.js";import"./ButtonBase-WoTwDifL.js";import"./listItemIconClasses-DJfd2CmR.js";import"./listItemTextClasses-C804xoiG.js";import"./dividerClasses-DEdNtFXy.js";import"./index-SqSAGI1r.js";import"./useGuiMediaQuery-2dRYGcLF.js";import"./getThemeProps-CijvZDlq.js";import"./Avatar-uhnXAEOq.js";import"./createSvgIcon-DdBnQn7s.js";import"./AppBar-BgpiADh6.js";import"./Toolbar-D1lLG2L5.js";import"./InspectorToggle-DekUrDWo.js";import"./Button-BKvYYcvp.js";import"./Button-nBT_Xo1p.js";import"./CircularProgress-DdkfkwCD.js";import"./IconButton-lZB8Z_vE.js";import"./IconButton-CE-WD0KS.js";import"./selectionStore-Coy7dh9o.js";import"./ListItemIcon-C5SEVZ-r.js";import"./ListItemText-DGm7Bslj.js";import"./Drawer-7iJ8tsVN.js";import"./Tooltip-u6KQGzAX.js";import"./useControlled-CK-Pi9mt.js";import"./Collapse-Df2xjUBX.js";import"./AppBar-DWuTSABf.js";import"./Avatar-XGPOscsO.js";import"./StickyOptionsTop-Bg0TwAQO.js";const ro={title:"GUI/Layout/LeftBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **LeftBar** is the left navigation bar.

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
`}}}},l=c=>d.jsx(m,{...c}),o=l.bind({});o.args={LeftBar:{initialView:"rail",header:{title:"Workspace",icon:"apps",iconColor:"var(--gui-primary)"},elements:[{type:"link",props:{label:"Dashboard",icon:"dashboard",iconColor:"var(--gui-primary)"}},{type:"link",props:{label:"Analytics",icon:"bar_chart",iconColor:"var(--gui-secondary)"}},{type:"menu",props:{label:"Projects",icon:"folder",iconColor:"var(--gui-warning)",items:[{label:"Project A",icon:"work",iconColor:"var(--gui-success)"},{label:"Project B",icon:"assignment",iconColor:"var(--gui-info)"}]}}],footerElements:[{type:"link",props:{label:"Settings",icon:"settings",iconColor:"var(--gui-primary)"}},{type:"action",props:{label:"Help",icon:"help",iconColor:"var(--gui-success)"}}]}};const t=l.bind({});var i;t.args={LeftBar:{...(i=o.args)!=null&&i.LeftBar&&typeof o.args.LeftBar=="object"?o.args.LeftBar:{},initialView:"expanded"}};var r,e,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:"args => <Layout {...args} />",...(a=(e=o.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};var p,s,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"args => <Layout {...args} />",...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const eo=["RailView","ExpandedView"];export{t as ExpandedView,o as RailView,eo as __namedExportsOrder,ro as default};
