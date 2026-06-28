import{j as g}from"./iframe-BTtW7_F-.js";import{L as m}from"./Layout-BsAL90LP.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-JJRWTfsn.js";import"./RightSidebarContext-BJTxHXFC.js";import"./TopBar-nEAKdKr8.js";import"./Icon-CA024acM.js";import"./Menu-B2Kf8SKt.js";import"./useSlot-CIqJhg31.js";import"./resolveComponentProps-B8K2Oa0H.js";import"./useForkRef-C7ZRtJ0F.js";import"./useSlotProps-W8GAIZ31.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-BQDIcK-B.js";import"./Modal-QdAoN3Du.js";import"./TransitionGroupContext-Ddjl0V-4.js";import"./Grow-CbtqgvRU.js";import"./List-_u9nhsq8.js";import"./ListContext-BZWt7HBR.js";import"./MenuItem-CXjhdloI.js";import"./ButtonBase-DUaQ4VIL.js";import"./listItemIconClasses-CaJ8LvZp.js";import"./listItemTextClasses-UDjNIRwn.js";import"./dividerClasses-7JosgSfE.js";import"./index-DOAJrMLS.js";import"./useGuiMediaQuery-Dnl6pwFn.js";import"./getThemeProps-gEKSQZyW.js";import"./useInsets-BiVqw73U.js";import"./Avatar-DtiwpuCv.js";import"./createSvgIcon-CqN86fU2.js";import"./AppBar-CHOddcC9.js";import"./Toolbar-Cfnsh_EX.js";import"./Button-D2e3Dj-X.js";import"./Button-Ddhen21U.js";import"./CircularProgress-ukva-b-G.js";import"./Chip-DXMIFmCa.js";import"./Paper-31X3P03d.js";import"./InspectorToggle-CzaqL69D.js";import"./Drawer-BdzA4NBr.js";import"./renderer-DXCdzS_m.js";import"./runtimeContext-C007B3Qb.js";import"./IconButton-Cuz7NzFo.js";import"./IconButton-DeO-vsGK.js";import"./ListItemIcon-D0_aFo-V.js";import"./ListItemText-EmUfqwzP.js";import"./Tooltip-MnDsYJ5t.js";import"./useControlled-DL-5wEmZ.js";import"./Collapse-BmKeUqre.js";import"./AppBar-C2NIczVy.js";import"./Avatar-CEG7t77t.js";import"./StickyOptionsTop-Dhc0uN7_.js";const li={title:"Getting Started/Layout/RightBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **RightBar** is the right navigation bar.

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
