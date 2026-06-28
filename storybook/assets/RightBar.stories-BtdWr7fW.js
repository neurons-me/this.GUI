import{j as g}from"./iframe-D2eJnacu.js";import{L as m}from"./Layout-BAz4JjS0.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-xTldZW_i.js";import"./RightSidebarContext-CckyDbH8.js";import"./TopBar-DmU2wdc-.js";import"./Icon-CAKnGJGN.js";import"./Menu-maLRo1t_.js";import"./useSlot-EziydVcY.js";import"./resolveComponentProps-A5i4OP5P.js";import"./useForkRef-CJwN5O9W.js";import"./useSlotProps-DAc4d2Zp.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-qyyHbYbt.js";import"./Modal-DEXC5q00.js";import"./useEventCallback-CVieJ6Bg.js";import"./Grow-CaHZ5gb0.js";import"./TransitionGroupContext-CJvSrqRb.js";import"./List-CIPnvMBs.js";import"./ListContext-BW2Adx7C.js";import"./MenuItem-DzA8Uqz5.js";import"./ButtonBase-CUt-_WAR.js";import"./listItemIconClasses-UgzpQTE9.js";import"./listItemTextClasses-CmkdSkph.js";import"./dividerClasses-DG4d1HjL.js";import"./index-mC0YMn7v.js";import"./useGuiMediaQuery-DWZkrZq0.js";import"./getThemeProps-C6TO9Cvw.js";import"./useInsets-b1ZI4lGl.js";import"./Avatar-BJNdTHhm.js";import"./createSvgIcon-CuIwnVtI.js";import"./AppBar-II8dRM62.js";import"./Toolbar-DWLAj6h0.js";import"./Paper-Cy6GSVX1.js";import"./InspectorToggle-XfRHSRli.js";import"./Button-88yt6xcs.js";import"./Button-CHKGPak-.js";import"./CircularProgress-gvGNL1sR.js";import"./Drawer-Dc6eHdxA.js";import"./renderer-B7mnUi2B.js";import"./runtimeContext-CI01_G2x.js";import"./IconButton-CQQWoaHV.js";import"./IconButton-Bq5ykkQl.js";import"./ListItemIcon-DBEAg4qU.js";import"./ListItemText-B0bnygt8.js";import"./Tooltip-s2l6t1LL.js";import"./useControlled-CM5M7PCu.js";import"./Collapse-C3LRwmA5.js";import"./AppBar-BrzqYV0q.js";import"./Avatar-CgYSxTdU.js";import"./StickyOptionsTop-BpdBZeGg.js";const li={title:"Getting Started/Layout/RightBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **RightBar** is the right navigation bar.

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
`}}}},l=c=>g.jsx(m,{...c}),i=l.bind({});i.args={RightBar:{initialView:"rail",header:{title:"Inspector",icon:"insights",iconColor:"var(--gui-primary)"},elements:[{type:"link",props:{label:"Notifications",icon:"notifications",iconColor:"var(--gui-warning)"}},{type:"link",props:{label:"Activity",icon:"history",iconColor:"var(--gui-secondary)"}},{type:"menu",props:{label:"Views",icon:"view_cozy",iconColor:"var(--gui-primary)",items:[{label:"Timeline",icon:"timeline",iconColor:"var(--gui-success)"},{label:"JSON",icon:"code",iconColor:"var(--gui-info)"}]}}],footerElements:[{type:"link",props:{label:"Settings",icon:"settings",iconColor:"var(--gui-primary)"}},{type:"action",props:{label:"Help",icon:"help",iconColor:"var(--gui-success)"}}]}};const t=l.bind({});var o;t.args={RightBar:{...(o=i.args)!=null&&o.RightBar&&typeof i.args.RightBar=="object"?i.args.RightBar:{},initialView:"expanded"}};var e,r,a;i.parameters={...i.parameters,docs:{...(e=i.parameters)==null?void 0:e.docs,source:{originalSource:"args => <Layout {...args} />",...(a=(r=i.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var p,s,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"args => <Layout {...args} />",...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const ci=["RailView","ExpandedView"];export{t as ExpandedView,i as RailView,ci as __namedExportsOrder,li as default};
