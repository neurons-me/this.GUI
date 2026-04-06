import{j as g}from"./iframe-COO5skUf.js";import{L as m}from"./Layout-ZtyszSzk.js";import"./preload-helper-Dp1pzeXC.js";import"./useInsets-C0Q-ku1U.js";import"./TopBar-jFSi5F0g.js";import"./Icon-DpAowGqD.js";import"./Menu-DbyzBfaX.js";import"./useSlot-DzoiAoV0.js";import"./useForkRef-Bgg-GG6B.js";import"./Grow-DBebQEnl.js";import"./TransitionGroupContext-BjXOR29W.js";import"./List-awscdk4-.js";import"./ListContext-Z9iUbTzI.js";import"./Paper-BFvRCSII.js";import"./Modal-DZI5mxk5.js";import"./MenuItem-B1CwEY-T.js";import"./ButtonBase-DPvmYzGK.js";import"./listItemIconClasses-Bvk-I2by.js";import"./listItemTextClasses-DOJTjKud.js";import"./dividerClasses-hwJ7ypoq.js";import"./index-BoOLX_yZ.js";import"./useGuiMediaQuery-B9ml3t9p.js";import"./getThemeProps-qTSHdYXT.js";import"./Avatar-CzYAIaxh.js";import"./createSvgIcon-CMYcZPLg.js";import"./AppBar-BjSOl01M.js";import"./Toolbar-OR_l-jJN.js";import"./Paper-UVXAhxvg.js";import"./Hero-DoJX5tf8.js";import"./controlSurface-CKLL_tdL.js";import"./selectionStore-Coy7dh9o.js";import"./ListItemIcon-KANUV62J.js";import"./ListItemText-CZFoY8sj.js";import"./Drawer-DftICJyF.js";import"./Tooltip-DYaPRb-T.js";import"./useControlled-94B4cvCS.js";import"./Collapse-OXNjsP3k.js";import"./IconButton-AUFbx4-A.js";import"./CircularProgress-DJy7hZv_.js";import"./AppBar-m2hzJj0o.js";import"./Avatar-BT-jxcDp.js";import"./StickyOptionsTop-CZyHf9uk.js";const oi={title:"GUI/Layout/RightBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **RightBar** is the right navigation bar.

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
<RightBar
  initialView="rail"
  header={{ title: 'Inspector', icon: 'insights' }}
  elements={[
    { type: 'link', props: { label: 'Notifications', icon: 'notifications' } },
    {
      type: 'menu',
      props: {
        label: 'Views',
        icon: 'view_cozy',
        items: [
          { label: 'Timeline', icon: 'timeline' },
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
`}}}},l=c=>g.jsx(m,{...c}),i=l.bind({});i.args={RightBar:{initialView:"rail",header:{title:"Inspector",icon:"insights",iconColor:"var(--gui-primary)"},elements:[{type:"link",props:{label:"Notifications",icon:"notifications",iconColor:"var(--gui-warning)"}},{type:"link",props:{label:"Activity",icon:"history",iconColor:"var(--gui-secondary)"}},{type:"menu",props:{label:"Views",icon:"view_cozy",iconColor:"var(--gui-primary)",items:[{label:"Timeline",icon:"timeline",iconColor:"var(--gui-success)"},{label:"JSON",icon:"code",iconColor:"var(--gui-info)"}]}}],footerElements:[{type:"link",props:{label:"Settings",icon:"settings",iconColor:"var(--gui-primary)"}},{type:"action",props:{label:"Help",icon:"help",iconColor:"var(--gui-success)"}}]}};const o=l.bind({});var t;o.args={RightBar:{...(t=i.args)!=null&&t.RightBar&&typeof i.args.RightBar=="object"?i.args.RightBar:{},initialView:"expanded"}};var e,r,a;i.parameters={...i.parameters,docs:{...(e=i.parameters)==null?void 0:e.docs,source:{originalSource:"args => <Layout {...args} />",...(a=(r=i.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var p,s,n;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"args => <Layout {...args} />",...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const ti=["RailView","ExpandedView"];export{o as ExpandedView,i as RailView,ti as __namedExportsOrder,oi as default};
