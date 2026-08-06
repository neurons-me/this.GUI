import{j as g}from"./iframe-CP9CNxx8.js";import{L as m}from"./Layout-DPvsfICX.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-BOpBW9Bk.js";import"./RightSidebarContext-CPWRa5qv.js";import"./TopBar-NeU6Jmrc.js";import"./Icon-BnIUx9th.js";import"./Menu-CxnaEBrZ.js";import"./useSlot-Mh1rGqki.js";import"./resolveComponentProps-ClcYrv8r.js";import"./useForkRef-DbsbHXzv.js";import"./useSlotProps-prOgqQUI.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-Dej_UP1C.js";import"./Modal-C378D8Mh.js";import"./TransitionGroupContext-Ck5bRGCF.js";import"./Grow-CIgwTQ5t.js";import"./List-dcxI-oUi.js";import"./ListContext-BdVLFpgb.js";import"./MenuItem-CdAcOgof.js";import"./ButtonBase-3VpcqpZw.js";import"./listItemIconClasses-t_-ds97q.js";import"./listItemTextClasses-DLUOdunC.js";import"./dividerClasses-BFmk34HT.js";import"./index-BaMcS7Yy.js";import"./useGuiMediaQuery-ByBF8RQx.js";import"./getThemeProps-DgA4-TRf.js";import"./useInsets-BR-u-XBz.js";import"./Avatar-cinzEPDc.js";import"./createSvgIcon-CULnpTNi.js";import"./AppBar-C27ajw5s.js";import"./Toolbar-C8qlW-S0.js";import"./Button-DXB5L6yH.js";import"./Button-BXZoRsTR.js";import"./CircularProgress-_EZIbAZb.js";import"./Chip-C6-sHy1n.js";import"./Paper-H4VYbcNq.js";import"./InspectorToggle-BFlA6Z6-.js";import"./Drawer-D8k4iXFm.js";import"./renderer-AB4KhwIg.js";import"./runtimeContext-DMLQNDdw.js";import"./IconButton-BrPyFgEk.js";import"./IconButton-CCIAIfSL.js";import"./ListItemIcon-1zpiHevt.js";import"./ListItemText-CddPeRgJ.js";import"./Tooltip-DQd5pZ-T.js";import"./useControlled-BLlI_aPv.js";import"./Collapse-Lfy74YwS.js";import"./AppBar-sUqBlSTR.js";import"./Avatar-9qaPeoNo.js";import"./StickyOptionsTop-DcARegNH.js";const li={title:"Getting Started/Layout/RightBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **RightBar** is the right navigation bar.

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
