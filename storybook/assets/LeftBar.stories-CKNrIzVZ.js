import{j as d}from"./iframe-DHWRG7QH.js";import{L as m}from"./Layout-BeskKhlC.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-BWNS5T69.js";import"./RightSidebarContext-cYmMhxPR.js";import"./TopBar-DDen3R3n.js";import"./Icon-Cn0j5eWA.js";import"./Menu-CeuY-UZB.js";import"./useSlot-DrfD_k7V.js";import"./resolveComponentProps-DrbJ2mp-.js";import"./useForkRef-tA8i6BhM.js";import"./useSlotProps-BEdJDrIu.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-Cc_Dqaw6.js";import"./Modal-CiJFTnDS.js";import"./TransitionGroupContext-CE_hoGdS.js";import"./Grow-DsXwItpO.js";import"./List-BTS7F_UV.js";import"./ListContext-D3ZraOYE.js";import"./MenuItem-C8RoG-B7.js";import"./ButtonBase-BAs1lMSe.js";import"./listItemIconClasses-7RdeADQE.js";import"./listItemTextClasses-CqTLES1u.js";import"./dividerClasses-B6tUBfWy.js";import"./index-BdqHAHv3.js";import"./useGuiMediaQuery-JOwTIHJs.js";import"./getThemeProps-BDqZ4MBr.js";import"./useInsets-N57BzsI1.js";import"./Avatar-BkXvfl0p.js";import"./createSvgIcon-B7s6AbuW.js";import"./AppBar-Cgg5lt8a.js";import"./Toolbar-BSLqOFgR.js";import"./Button-oBWKO3VQ.js";import"./Button-Bltgg28i.js";import"./CircularProgress-BIWkXzy5.js";import"./Chip-1Vxe2nnS.js";import"./Paper-Bd7uI4Xg.js";import"./InspectorToggle-DcoFs8Wc.js";import"./Drawer-U4M5Q_6p.js";import"./renderer-iG2MPD9h.js";import"./runtimeContext-B3HWc0Yx.js";import"./IconButton-BfJZcLtb.js";import"./IconButton-DtjMttKU.js";import"./ListItemIcon-D1SJBUh0.js";import"./ListItemText-Cxq15UaX.js";import"./Tooltip-M8VDrXiA.js";import"./useControlled-CIHqeqDW.js";import"./Collapse-WjpMSByX.js";import"./AppBar-B6Fka3T9.js";import"./Avatar-DzZ_jPOc.js";import"./StickyOptionsTop-CKeP6JeW.js";const lo={title:"Getting Started/Layout/LeftBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **LeftBar** is the left navigation bar.

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
