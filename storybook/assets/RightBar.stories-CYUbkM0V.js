import{j as g}from"./iframe-DC1i1573.js";import{L as m}from"./Layout-2qGHyfEN.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-CwJU7uIE.js";import"./RightSidebarContext-BHk_4700.js";import"./TopBar-DODm29Ix.js";import"./Icon-CuVJ4y2k.js";import"./Menu-DF2egIYZ.js";import"./useSlot-D_8lZxqR.js";import"./resolveComponentProps-C5BoffGy.js";import"./useForkRef-hpkiJGPF.js";import"./useSlotProps-DIS-q9VP.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-C8sdzyzT.js";import"./Modal-CLLebtp2.js";import"./TransitionGroupContext-BZk-WlWb.js";import"./Grow-D9IP3D0G.js";import"./List-B4pOZQnr.js";import"./ListContext-DNDBaubu.js";import"./MenuItem-CGXBRnEz.js";import"./ButtonBase-BrZ6brEn.js";import"./listItemIconClasses-BwKUXR3I.js";import"./listItemTextClasses-CTxYf6qB.js";import"./dividerClasses-Bd48RbK3.js";import"./index-CsCTrrmg.js";import"./useGuiMediaQuery-BSPeLbHs.js";import"./getThemeProps-BRLZPA78.js";import"./useInsets-DSWzkno-.js";import"./Avatar-Q90JS4jN.js";import"./createSvgIcon-CArePSch.js";import"./AppBar-CcdR9Lrs.js";import"./Toolbar-DpKn-ZL2.js";import"./Button-OznIF1P0.js";import"./Button-Cw1rExmT.js";import"./CircularProgress-C0wTbWDO.js";import"./Chip-DFuUJxJw.js";import"./Paper-CKIt3RHD.js";import"./InspectorToggle-DJwDlegS.js";import"./Drawer-BJf2efgA.js";import"./renderer-BOtl_gvK.js";import"./runtimeContext-CVXgUwjX.js";import"./IconButton-Wjc3ccB5.js";import"./IconButton-TDHo9m7u.js";import"./ListItemIcon-ZanOEmyx.js";import"./ListItemText-B84pw0of.js";import"./Tooltip-BJSpTCc5.js";import"./useControlled-DbmrnxXO.js";import"./Collapse-B8U356Mf.js";import"./AppBar-03deyKyq.js";import"./Avatar-DFU0rKgR.js";import"./StickyOptionsTop-D2A7gJtl.js";const li={title:"Getting Started/Layout/RightBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **RightBar** is the right navigation bar.

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
