import{j as d}from"./iframe-DHKm4lxq.js";import{L as m}from"./Layout-CvNF_IGR.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-DlBlSJcG.js";import"./RightSidebarContext-Df_RONI4.js";import"./TopBar-CLZVsukS.js";import"./Icon-BDa5KZaz.js";import"./Menu-CQPexnKY.js";import"./useSlot-D_z_s16V.js";import"./resolveComponentProps-mc7wWAEz.js";import"./useForkRef-CKQjnNCQ.js";import"./useSlotProps-Dm6x2sbk.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-BRH2Yjjr.js";import"./Modal-P70wl9z_.js";import"./TransitionGroupContext-BAR79BSf.js";import"./Grow-8YfsGkup.js";import"./List-BOfaeJ--.js";import"./ListContext-Crj2OsJs.js";import"./MenuItem-B8SbU8NO.js";import"./ButtonBase-DGodopKS.js";import"./listItemIconClasses-CLewsPnL.js";import"./listItemTextClasses-s6jhsQgh.js";import"./dividerClasses-BEgDB5Z9.js";import"./index-Du0BivNX.js";import"./useGuiMediaQuery-1Q3cuuOF.js";import"./getThemeProps-Dv_U1Ogp.js";import"./useInsets-D2ZR6LOb.js";import"./Avatar-IzjqRx0P.js";import"./createSvgIcon-Be8Ym-L_.js";import"./AppBar-By8Hqg_B.js";import"./Toolbar-DgyTRwAO.js";import"./Button-BxCtzB8m.js";import"./Button-SfGik2w3.js";import"./CircularProgress-C_mw3fa7.js";import"./Chip-CBarvK3z.js";import"./Paper-DtvotrLC.js";import"./InspectorToggle-4slQGNQR.js";import"./Drawer-Cl2v2pdU.js";import"./renderer-bgPyTije.js";import"./runtimeContext-8u-IeDVA.js";import"./IconButton-PkGf5jAc.js";import"./IconButton-dLqP0LtD.js";import"./ListItemText-CUOUdkWB.js";import"./Tooltip-DWzz156k.js";import"./useControlled-4Z9U_yFP.js";import"./Collapse-CTpAx0FZ.js";import"./AppBar-C9qkxbMR.js";import"./Avatar-vduz-_L5.js";import"./StickyOptionsTop-BAb8aUWX.js";const mo={title:"Getting Started/Layout/LeftBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **LeftBar** is the left navigation bar.

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
`}}}},l=c=>d.jsx(m,{...c}),o=l.bind({});o.args={LeftBar:{initialView:"rail",header:{title:"Workspace",icon:"apps",iconColor:"var(--gui-primary)"},elements:[{type:"link",props:{label:"Dashboard",icon:"dashboard",iconColor:"var(--gui-primary)"}},{type:"link",props:{label:"Analytics",icon:"bar_chart",iconColor:"var(--gui-secondary)"}},{type:"menu",props:{label:"Projects",icon:"folder",iconColor:"var(--gui-warning)",items:[{label:"Project A",icon:"work",iconColor:"var(--gui-success)"},{label:"Project B",icon:"assignment",iconColor:"var(--gui-info)"}]}}],footerElements:[{type:"link",props:{label:"Settings",icon:"settings",iconColor:"var(--gui-primary)"}},{type:"action",props:{label:"Help",icon:"help",iconColor:"var(--gui-success)"}}]}};const t=l.bind({});var i;t.args={LeftBar:{...(i=o.args)!=null&&i.LeftBar&&typeof o.args.LeftBar=="object"?o.args.LeftBar:{},initialView:"expanded"}};var r,e,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:"args => <Layout {...args} />",...(a=(e=o.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};var p,s,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"args => <Layout {...args} />",...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const lo=["RailView","ExpandedView"];export{t as ExpandedView,o as RailView,lo as __namedExportsOrder,mo as default};
