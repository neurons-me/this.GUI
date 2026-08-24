import{j as g}from"./iframe-C_b0i3u8.js";import{L as m}from"./Layout-CAp-XTNZ.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-3FXCKWFS.js";import"./TopBar-DCXuAIai.js";import"./Icon-Dg0Fnz52.js";import"./Menu-BmxRIfpd.js";import"./useSlot-G4ByF3pc.js";import"./resolveComponentProps-Drajm3zd.js";import"./useForkRef-qTVDMFQr.js";import"./useSlotProps-HAMG0RiA.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-Boii5j1w.js";import"./ownerDocument-DW-IO8s5.js";import"./Modal-CH6Tu7Dy.js";import"./TransitionGroupContext-DA-WNYvH.js";import"./Portal-4Utnz7R5.js";import"./Grow-D4N9GH66.js";import"./mergeSlotProps-DYU3Hg2s.js";import"./List-Cw_AV0Pi.js";import"./ListContext-CVvYdQEp.js";import"./MenuItem-Br5KfxSn.js";import"./ButtonBase-CBZ6tj8F.js";import"./listItemIconClasses-Cc2CuJ3o.js";import"./listItemTextClasses-Cde-U1LC.js";import"./dividerClasses-UjyL7AFI.js";import"./index-C2pm_4fX.js";import"./useGuiMediaQuery-B5yZKInx.js";import"./getThemeProps-BGG3twlu.js";import"./useInsets-DA-vR9Ji.js";import"./Avatar-6f-rd4nL.js";import"./createSvgIcon-BRYETk95.js";import"./AppBar-CpERTJpY.js";import"./Toolbar-C_-YGC8g.js";import"./Button-mr_aWkNz.js";import"./Button-DaKRkwMu.js";import"./CircularProgress-DExCAnw9.js";import"./Chip-BnLuWVgV.js";import"./Paper-p9eezbgu.js";import"./Tooltip-Nvc_UGsj.js";import"./useControlled-Dv24GBNp.js";import"./Collapse-B_UpAWAu.js";import"./IconButton-D_PHND5e.js";import"./InspectorToggle-DHMJbXJf.js";import"./Drawer-DUsYWcFM.js";import"./renderer-q29RPfuI.js";import"./IconButton-BDpt7_X6.js";import"./ListItemIcon-DjjSIRtc.js";import"./ListItemText-npHmLwIa.js";import"./AppBar-DgGRurwB.js";import"./Avatar-DlJ68fP-.js";import"./StickyOptionsTop-BW1Qxo-f.js";const ci={title:"Getting Started/Layout/RightBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **RightBar** is the right navigation bar.

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
`}}}},l=c=>g.jsx(m,{...c}),i=l.bind({});i.args={RightBar:{initialView:"rail",header:{title:"Inspector",icon:"insights",iconColor:"var(--gui-primary)"},elements:[{type:"link",props:{label:"Notifications",icon:"notifications",iconColor:"var(--gui-warning)"}},{type:"link",props:{label:"Activity",icon:"history",iconColor:"var(--gui-secondary)"}},{type:"menu",props:{label:"Views",icon:"view_cozy",iconColor:"var(--gui-primary)",items:[{label:"Timeline",icon:"timeline",iconColor:"var(--gui-success)"},{label:"JSON",icon:"code",iconColor:"var(--gui-info)"}]}}],footerElements:[{type:"link",props:{label:"Settings",icon:"settings",iconColor:"var(--gui-primary)"}},{type:"action",props:{label:"Help",icon:"help",iconColor:"var(--gui-success)"}}]}};const t=l.bind({});var o;t.args={RightBar:{...(o=i.args)!=null&&o.RightBar&&typeof i.args.RightBar=="object"?i.args.RightBar:{},initialView:"expanded"}};var e,r,a;i.parameters={...i.parameters,docs:{...(e=i.parameters)==null?void 0:e.docs,source:{originalSource:"args => <Layout {...args} />",...(a=(r=i.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var p,s,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"args => <Layout {...args} />",...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const gi=["RailView","ExpandedView"];export{t as ExpandedView,i as RailView,gi as __namedExportsOrder,ci as default};
