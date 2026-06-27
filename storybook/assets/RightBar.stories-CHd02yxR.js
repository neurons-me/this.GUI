import{j as g}from"./iframe-BGaDc8fY.js";import{L as m}from"./Layout-CnMviEDL.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-Ck0WnRZq.js";import"./RightSidebarContext-DKtzxkKm.js";import"./TopBar-akoAiZRC.js";import"./Icon-7Zhdja6G.js";import"./Menu-ZkWSsY6l.js";import"./useSlot-mYHib5yE.js";import"./resolveComponentProps-Dk29dXks.js";import"./useForkRef-BTLRd6DF.js";import"./useSlotProps-yQEft4tG.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-Di4HKz2Y.js";import"./Modal-C572445k.js";import"./TransitionGroupContext-CRX3K3-N.js";import"./Grow-Cde1WuC5.js";import"./List-57qNRWuM.js";import"./ListContext-YJMNngyR.js";import"./MenuItem-CgiIMcKc.js";import"./ButtonBase-CmhJTDh7.js";import"./listItemIconClasses-ClAJKT2Y.js";import"./listItemTextClasses-CswSoKM3.js";import"./dividerClasses-BVGmolOg.js";import"./index-IcCsHFmR.js";import"./useGuiMediaQuery-Bvvmr67q.js";import"./getThemeProps-B7Mx3brp.js";import"./useInsets-BzZYsjc4.js";import"./Avatar-D7RHzrwX.js";import"./createSvgIcon-4U5SUzqQ.js";import"./AppBar-h2MquwDK.js";import"./Toolbar-BBnWUHS2.js";import"./Button-CTJugSMu.js";import"./Button-DQUBnN9_.js";import"./CircularProgress-iyiqlgzo.js";import"./Chip-DPTpPXfj.js";import"./Paper-D8K68VRW.js";import"./InspectorToggle-DlY13M7X.js";import"./Drawer-OYjj9WNP.js";import"./renderer-DHHJdapJ.js";import"./runtimeContext-DoMG9-W6.js";import"./IconButton-CQXbYqDU.js";import"./IconButton-Daf4E_dW.js";import"./ListItemIcon-CtNWREle.js";import"./ListItemText-BgBlMoMB.js";import"./Tooltip-D2OUCLIk.js";import"./useControlled-Cm9jB_PK.js";import"./Collapse-Czn3-G4C.js";import"./AppBar-BNMHd6Mo.js";import"./Avatar-fdAKIFbh.js";import"./StickyOptionsTop-CJeuT6yh.js";const li={title:"Getting Started/Layout/RightBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **RightBar** is the right navigation bar.

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
