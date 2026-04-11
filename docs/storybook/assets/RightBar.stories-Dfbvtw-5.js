import{j as g}from"./iframe-B26CALAz.js";import{L as m}from"./Layout-XseSioSF.js";import"./preload-helper-Dp1pzeXC.js";import"./useInsets-CfO0t8H4.js";import"./TopBar-WY_tyDQK.js";import"./Icon-BwfjAmbM.js";import"./Menu-W5gOTMtk.js";import"./useSlot-DcL_IPHt.js";import"./useForkRef-CXnDbkaK.js";import"./Grow-CB76i9l6.js";import"./TransitionGroupContext-DkIGTr29.js";import"./List-jYW9fhKK.js";import"./ListContext-btDJ5CVO.js";import"./Paper-Dt3QYluA.js";import"./Modal-CeysofHi.js";import"./MenuItem-__CxIggm.js";import"./ButtonBase-CL1dL2Cz.js";import"./listItemIconClasses-C9wThiCW.js";import"./listItemTextClasses-DsrlZgkx.js";import"./dividerClasses-BROQATY4.js";import"./index-Dq2YPn2C.js";import"./useGuiMediaQuery-5Gcf0ItR.js";import"./getThemeProps-zcjxvvoG.js";import"./Avatar-lotYJ8jQ.js";import"./createSvgIcon-D0Oa0mpn.js";import"./AppBar-BPo4Hgy0.js";import"./Toolbar-XgnjFBe6.js";import"./Button-C9RN3hmg.js";import"./Button-Ygdqa8j-.js";import"./CircularProgress-v9Dx38HO.js";import"./Paper-CRvkXcvv.js";import"./controlSurface-C0kcMCZY.js";import"./selectionStore-Coy7dh9o.js";import"./ListItemIcon-2ml_yMfP.js";import"./ListItemText-D4W6YSyB.js";import"./Drawer-C6ZMtuP3.js";import"./Tooltip-DhnVtazG.js";import"./useControlled-DCXjgbPx.js";import"./Collapse-BJwY2-dz.js";import"./IconButton-BwCluXj6.js";import"./AppBar-Bcsy97MN.js";import"./Avatar-FEiYSSB6.js";import"./StickyOptionsTop-A0ir6a7_.js";const ti={title:"GUI/Layout/RightBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **RightBar** is the right navigation bar.

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
`}}}},l=c=>g.jsx(m,{...c}),i=l.bind({});i.args={RightBar:{initialView:"rail",header:{title:"Inspector",icon:"insights",iconColor:"var(--gui-primary)"},elements:[{type:"link",props:{label:"Notifications",icon:"notifications",iconColor:"var(--gui-warning)"}},{type:"link",props:{label:"Activity",icon:"history",iconColor:"var(--gui-secondary)"}},{type:"menu",props:{label:"Views",icon:"view_cozy",iconColor:"var(--gui-primary)",items:[{label:"Timeline",icon:"timeline",iconColor:"var(--gui-success)"},{label:"JSON",icon:"code",iconColor:"var(--gui-info)"}]}}],footerElements:[{type:"link",props:{label:"Settings",icon:"settings",iconColor:"var(--gui-primary)"}},{type:"action",props:{label:"Help",icon:"help",iconColor:"var(--gui-success)"}}]}};const o=l.bind({});var t;o.args={RightBar:{...(t=i.args)!=null&&t.RightBar&&typeof i.args.RightBar=="object"?i.args.RightBar:{},initialView:"expanded"}};var e,r,a;i.parameters={...i.parameters,docs:{...(e=i.parameters)==null?void 0:e.docs,source:{originalSource:"args => <Layout {...args} />",...(a=(r=i.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var p,s,n;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"args => <Layout {...args} />",...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const ei=["RailView","ExpandedView"];export{o as ExpandedView,i as RailView,ei as __namedExportsOrder,ti as default};
