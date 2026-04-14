import{j as g}from"./iframe-DTkfRnJf.js";import{L as m}from"./Layout-C1HOO3Oz.js";import"./preload-helper-Dp1pzeXC.js";import"./useInsets-DrPGyJYK.js";import"./RightSidebarContext-Bim1nxNz.js";import"./TopBar-C7u1v04C.js";import"./Icon-BM-Jwf27.js";import"./Menu-D5Y3vMKV.js";import"./useSlot-BNQnsQI2.js";import"./useForkRef-Cru_ePRK.js";import"./Grow-D3KHJdX1.js";import"./TransitionGroupContext-BWT1wUhm.js";import"./List-BekQve-t.js";import"./ListContext-B5Em9Eft.js";import"./Paper-CyGjh2vj.js";import"./Modal-CK9c8Gp7.js";import"./MenuItem-2cLCpEHr.js";import"./ButtonBase-WoTwDifL.js";import"./listItemIconClasses-DJfd2CmR.js";import"./listItemTextClasses-C804xoiG.js";import"./dividerClasses-DEdNtFXy.js";import"./index-SqSAGI1r.js";import"./useGuiMediaQuery-2dRYGcLF.js";import"./getThemeProps-CijvZDlq.js";import"./Avatar-uhnXAEOq.js";import"./createSvgIcon-DdBnQn7s.js";import"./AppBar-BgpiADh6.js";import"./Toolbar-D1lLG2L5.js";import"./InspectorToggle-DekUrDWo.js";import"./Button-BKvYYcvp.js";import"./Button-nBT_Xo1p.js";import"./CircularProgress-DdkfkwCD.js";import"./IconButton-lZB8Z_vE.js";import"./IconButton-CE-WD0KS.js";import"./selectionStore-Coy7dh9o.js";import"./ListItemIcon-C5SEVZ-r.js";import"./ListItemText-DGm7Bslj.js";import"./Drawer-7iJ8tsVN.js";import"./Tooltip-u6KQGzAX.js";import"./useControlled-CK-Pi9mt.js";import"./Collapse-Df2xjUBX.js";import"./AppBar-DWuTSABf.js";import"./Avatar-XGPOscsO.js";import"./StickyOptionsTop-Bg0TwAQO.js";const ei={title:"GUI/Layout/RightBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **RightBar** is the right navigation bar.

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
`}}}},l=c=>g.jsx(m,{...c}),i=l.bind({});i.args={RightBar:{initialView:"rail",header:{title:"Inspector",icon:"insights",iconColor:"var(--gui-primary)"},elements:[{type:"link",props:{label:"Notifications",icon:"notifications",iconColor:"var(--gui-warning)"}},{type:"link",props:{label:"Activity",icon:"history",iconColor:"var(--gui-secondary)"}},{type:"menu",props:{label:"Views",icon:"view_cozy",iconColor:"var(--gui-primary)",items:[{label:"Timeline",icon:"timeline",iconColor:"var(--gui-success)"},{label:"JSON",icon:"code",iconColor:"var(--gui-info)"}]}}],footerElements:[{type:"link",props:{label:"Settings",icon:"settings",iconColor:"var(--gui-primary)"}},{type:"action",props:{label:"Help",icon:"help",iconColor:"var(--gui-success)"}}]}};const o=l.bind({});var t;o.args={RightBar:{...(t=i.args)!=null&&t.RightBar&&typeof i.args.RightBar=="object"?i.args.RightBar:{},initialView:"expanded"}};var e,r,a;i.parameters={...i.parameters,docs:{...(e=i.parameters)==null?void 0:e.docs,source:{originalSource:"args => <Layout {...args} />",...(a=(r=i.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var p,s,n;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"args => <Layout {...args} />",...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const ri=["RailView","ExpandedView"];export{o as ExpandedView,i as RailView,ri as __namedExportsOrder,ei as default};
