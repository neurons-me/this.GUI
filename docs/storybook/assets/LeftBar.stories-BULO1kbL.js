import{j as d}from"./iframe-COO5skUf.js";import{L as m}from"./Layout-ZtyszSzk.js";import"./preload-helper-Dp1pzeXC.js";import"./useInsets-C0Q-ku1U.js";import"./TopBar-jFSi5F0g.js";import"./Icon-DpAowGqD.js";import"./Menu-DbyzBfaX.js";import"./useSlot-DzoiAoV0.js";import"./useForkRef-Bgg-GG6B.js";import"./Grow-DBebQEnl.js";import"./TransitionGroupContext-BjXOR29W.js";import"./List-awscdk4-.js";import"./ListContext-Z9iUbTzI.js";import"./Paper-BFvRCSII.js";import"./Modal-DZI5mxk5.js";import"./MenuItem-B1CwEY-T.js";import"./ButtonBase-DPvmYzGK.js";import"./listItemIconClasses-Bvk-I2by.js";import"./listItemTextClasses-DOJTjKud.js";import"./dividerClasses-hwJ7ypoq.js";import"./index-BoOLX_yZ.js";import"./useGuiMediaQuery-B9ml3t9p.js";import"./getThemeProps-qTSHdYXT.js";import"./Avatar-CzYAIaxh.js";import"./createSvgIcon-CMYcZPLg.js";import"./AppBar-BjSOl01M.js";import"./Toolbar-OR_l-jJN.js";import"./Paper-UVXAhxvg.js";import"./Hero-DoJX5tf8.js";import"./controlSurface-CKLL_tdL.js";import"./selectionStore-Coy7dh9o.js";import"./ListItemIcon-KANUV62J.js";import"./ListItemText-CZFoY8sj.js";import"./Drawer-DftICJyF.js";import"./Tooltip-DYaPRb-T.js";import"./useControlled-94B4cvCS.js";import"./Collapse-OXNjsP3k.js";import"./IconButton-AUFbx4-A.js";import"./CircularProgress-DJy7hZv_.js";import"./AppBar-m2hzJj0o.js";import"./Avatar-BT-jxcDp.js";import"./StickyOptionsTop-CZyHf9uk.js";const to={title:"GUI/Layout/LeftBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **LeftBar** is the left navigation bar.

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
`}}}},l=c=>d.jsx(m,{...c}),o=l.bind({});o.args={LeftBar:{initialView:"rail",header:{title:"Workspace",icon:"apps",iconColor:"var(--gui-primary)"},elements:[{type:"link",props:{label:"Dashboard",icon:"dashboard",iconColor:"var(--gui-primary)"}},{type:"link",props:{label:"Analytics",icon:"bar_chart",iconColor:"var(--gui-secondary)"}},{type:"menu",props:{label:"Projects",icon:"folder",iconColor:"var(--gui-warning)",items:[{label:"Project A",icon:"work",iconColor:"var(--gui-success)"},{label:"Project B",icon:"assignment",iconColor:"var(--gui-info)"}]}}],footerElements:[{type:"link",props:{label:"Settings",icon:"settings",iconColor:"var(--gui-primary)"}},{type:"action",props:{label:"Help",icon:"help",iconColor:"var(--gui-success)"}}]}};const t=l.bind({});var e;t.args={LeftBar:{...(e=o.args)!=null&&e.LeftBar&&typeof o.args.LeftBar=="object"?o.args.LeftBar:{},initialView:"expanded"}};var i,r,a;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:"args => <Layout {...args} />",...(a=(r=o.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var p,s,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"args => <Layout {...args} />",...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const eo=["RailView","ExpandedView"];export{t as ExpandedView,o as RailView,eo as __namedExportsOrder,to as default};
