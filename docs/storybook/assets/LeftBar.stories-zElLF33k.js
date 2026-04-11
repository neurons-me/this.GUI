import{j as d}from"./iframe-B26CALAz.js";import{L as m}from"./Layout-XseSioSF.js";import"./preload-helper-Dp1pzeXC.js";import"./useInsets-CfO0t8H4.js";import"./TopBar-WY_tyDQK.js";import"./Icon-BwfjAmbM.js";import"./Menu-W5gOTMtk.js";import"./useSlot-DcL_IPHt.js";import"./useForkRef-CXnDbkaK.js";import"./Grow-CB76i9l6.js";import"./TransitionGroupContext-DkIGTr29.js";import"./List-jYW9fhKK.js";import"./ListContext-btDJ5CVO.js";import"./Paper-Dt3QYluA.js";import"./Modal-CeysofHi.js";import"./MenuItem-__CxIggm.js";import"./ButtonBase-CL1dL2Cz.js";import"./listItemIconClasses-C9wThiCW.js";import"./listItemTextClasses-DsrlZgkx.js";import"./dividerClasses-BROQATY4.js";import"./index-Dq2YPn2C.js";import"./useGuiMediaQuery-5Gcf0ItR.js";import"./getThemeProps-zcjxvvoG.js";import"./Avatar-lotYJ8jQ.js";import"./createSvgIcon-D0Oa0mpn.js";import"./AppBar-BPo4Hgy0.js";import"./Toolbar-XgnjFBe6.js";import"./Button-C9RN3hmg.js";import"./Button-Ygdqa8j-.js";import"./CircularProgress-v9Dx38HO.js";import"./Paper-CRvkXcvv.js";import"./controlSurface-C0kcMCZY.js";import"./selectionStore-Coy7dh9o.js";import"./ListItemIcon-2ml_yMfP.js";import"./ListItemText-D4W6YSyB.js";import"./Drawer-C6ZMtuP3.js";import"./Tooltip-DhnVtazG.js";import"./useControlled-DCXjgbPx.js";import"./Collapse-BJwY2-dz.js";import"./IconButton-BwCluXj6.js";import"./AppBar-Bcsy97MN.js";import"./Avatar-FEiYSSB6.js";import"./StickyOptionsTop-A0ir6a7_.js";const io={title:"GUI/Layout/LeftBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **LeftBar** is the left navigation bar.

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
`}}}},l=c=>d.jsx(m,{...c}),o=l.bind({});o.args={LeftBar:{initialView:"rail",header:{title:"Workspace",icon:"apps",iconColor:"var(--gui-primary)"},elements:[{type:"link",props:{label:"Dashboard",icon:"dashboard",iconColor:"var(--gui-primary)"}},{type:"link",props:{label:"Analytics",icon:"bar_chart",iconColor:"var(--gui-secondary)"}},{type:"menu",props:{label:"Projects",icon:"folder",iconColor:"var(--gui-warning)",items:[{label:"Project A",icon:"work",iconColor:"var(--gui-success)"},{label:"Project B",icon:"assignment",iconColor:"var(--gui-info)"}]}}],footerElements:[{type:"link",props:{label:"Settings",icon:"settings",iconColor:"var(--gui-primary)"}},{type:"action",props:{label:"Help",icon:"help",iconColor:"var(--gui-success)"}}]}};const t=l.bind({});var i;t.args={LeftBar:{...(i=o.args)!=null&&i.LeftBar&&typeof o.args.LeftBar=="object"?o.args.LeftBar:{},initialView:"expanded"}};var e,r,a;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:"args => <Layout {...args} />",...(a=(r=o.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var p,s,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"args => <Layout {...args} />",...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const eo=["RailView","ExpandedView"];export{t as ExpandedView,o as RailView,eo as __namedExportsOrder,io as default};
