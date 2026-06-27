import{j as g}from"./iframe-CQ6lVM9J.js";import{L as m}from"./Layout-C70Je0jY.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-C3sIPKRI.js";import"./RightSidebarContext-VWJrRmIR.js";import"./TopBar-DhoA5JUF.js";import"./Icon-BI0rS8fi.js";import"./Menu-CZt6LrfY.js";import"./useSlot-Cm_bFkyb.js";import"./resolveComponentProps-DfuN2u-X.js";import"./useForkRef-k3GaQ7M0.js";import"./useSlotProps-DBSOU0Nf.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-CFRetAcS.js";import"./Modal-C_TK6Ct6.js";import"./TransitionGroupContext-BYAOwXFk.js";import"./Grow-DgFfonWO.js";import"./List-CQOLN7fY.js";import"./ListContext-HHAQ2WBE.js";import"./MenuItem-CCsSJeB0.js";import"./ButtonBase-CE1MUTHe.js";import"./listItemIconClasses-BIVBCVxw.js";import"./listItemTextClasses-BKGhee-O.js";import"./dividerClasses-DgchVogq.js";import"./index-DkgDBppT.js";import"./useGuiMediaQuery-CpLeLkWn.js";import"./getThemeProps-DSNOGyPj.js";import"./useInsets-DCYKQmLs.js";import"./Avatar-BS-O8AQy.js";import"./createSvgIcon-DXDYc_1t.js";import"./AppBar-BTQBhUVI.js";import"./Toolbar-C_tizc0v.js";import"./Button-Bga3uo1G.js";import"./Button-B4nkdwgI.js";import"./CircularProgress-BnTShz3b.js";import"./Chip-CscAx2IV.js";import"./Paper-D8WVzIWP.js";import"./Hero-BhBBP0Ut.js";import"./InspectorToggle-BbXYsSh3.js";import"./Drawer-BF4TIoXU.js";import"./renderer-BQyOi2MF.js";import"./runtimeContext-v44hbRMa.js";import"./IconButton-CyAqel-c.js";import"./IconButton-CAsbB3Lm.js";import"./ListItemIcon-DCr0ycU4.js";import"./ListItemText-C8xDBhIi.js";import"./Tooltip-BmxVpoGu.js";import"./useControlled-Dastk5vJ.js";import"./Collapse-DHmOHeTX.js";import"./AppBar-CglI6svt.js";import"./Avatar-DV4JAd-7.js";import"./StickyOptionsTop-uArP3HTy.js";const ci={title:"Getting Started/Layout/RightBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **RightBar** is the right navigation bar.

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
