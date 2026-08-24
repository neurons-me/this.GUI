import{j as d}from"./iframe-C_b0i3u8.js";import{L as m}from"./Layout-CAp-XTNZ.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-3FXCKWFS.js";import"./TopBar-DCXuAIai.js";import"./Icon-Dg0Fnz52.js";import"./Menu-BmxRIfpd.js";import"./useSlot-G4ByF3pc.js";import"./resolveComponentProps-Drajm3zd.js";import"./useForkRef-qTVDMFQr.js";import"./useSlotProps-HAMG0RiA.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-Boii5j1w.js";import"./ownerDocument-DW-IO8s5.js";import"./Modal-CH6Tu7Dy.js";import"./TransitionGroupContext-DA-WNYvH.js";import"./Portal-4Utnz7R5.js";import"./Grow-D4N9GH66.js";import"./mergeSlotProps-DYU3Hg2s.js";import"./List-Cw_AV0Pi.js";import"./ListContext-CVvYdQEp.js";import"./MenuItem-Br5KfxSn.js";import"./ButtonBase-CBZ6tj8F.js";import"./listItemIconClasses-Cc2CuJ3o.js";import"./listItemTextClasses-Cde-U1LC.js";import"./dividerClasses-UjyL7AFI.js";import"./index-C2pm_4fX.js";import"./useGuiMediaQuery-B5yZKInx.js";import"./getThemeProps-BGG3twlu.js";import"./useInsets-DA-vR9Ji.js";import"./Avatar-6f-rd4nL.js";import"./createSvgIcon-BRYETk95.js";import"./AppBar-CpERTJpY.js";import"./Toolbar-C_-YGC8g.js";import"./Button-mr_aWkNz.js";import"./Button-DaKRkwMu.js";import"./CircularProgress-DExCAnw9.js";import"./Chip-BnLuWVgV.js";import"./Paper-p9eezbgu.js";import"./Tooltip-Nvc_UGsj.js";import"./useControlled-Dv24GBNp.js";import"./Collapse-B_UpAWAu.js";import"./IconButton-D_PHND5e.js";import"./InspectorToggle-DHMJbXJf.js";import"./Drawer-DUsYWcFM.js";import"./renderer-q29RPfuI.js";import"./IconButton-BDpt7_X6.js";import"./ListItemIcon-DjjSIRtc.js";import"./ListItemText-npHmLwIa.js";import"./AppBar-DgGRurwB.js";import"./Avatar-DlJ68fP-.js";import"./StickyOptionsTop-BW1Qxo-f.js";const co={title:"Getting Started/Layout/LeftBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **LeftBar** is the left navigation bar.

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
`}}}},l=c=>d.jsx(m,{...c}),o=l.bind({});o.args={LeftBar:{initialView:"rail",header:{title:"Workspace",icon:"apps",iconColor:"var(--gui-primary)"},elements:[{type:"link",props:{label:"Dashboard",icon:"dashboard",iconColor:"var(--gui-primary)"}},{type:"link",props:{label:"Analytics",icon:"bar_chart",iconColor:"var(--gui-secondary)"}},{type:"menu",props:{label:"Projects",icon:"folder",iconColor:"var(--gui-warning)",items:[{label:"Project A",icon:"work",iconColor:"var(--gui-success)"},{label:"Project B",icon:"assignment",iconColor:"var(--gui-info)"}]}}],footerElements:[{type:"link",props:{label:"Settings",icon:"settings",iconColor:"var(--gui-primary)"}},{type:"action",props:{label:"Help",icon:"help",iconColor:"var(--gui-success)"}}]}};const t=l.bind({});var i;t.args={LeftBar:{...(i=o.args)!=null&&i.LeftBar&&typeof o.args.LeftBar=="object"?o.args.LeftBar:{},initialView:"expanded"}};var r,e,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:"args => <Layout {...args} />",...(a=(e=o.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};var p,s,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"args => <Layout {...args} />",...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const go=["RailView","ExpandedView"];export{t as ExpandedView,o as RailView,go as __namedExportsOrder,co as default};
