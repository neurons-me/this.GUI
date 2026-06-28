import{j as g}from"./iframe-CIpgfdSA.js";import{L as m}from"./Layout-BQqfDNwk.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-CYLanWX8.js";import"./RightSidebarContext-BWzBC4Zb.js";import"./TopBar-RxsT4kQ2.js";import"./Icon-CNWiu4wY.js";import"./Menu-CmzEcrSi.js";import"./useSlot-BmNcXWXR.js";import"./resolveComponentProps-CN4RWvl4.js";import"./useForkRef-Bt2idEIF.js";import"./useSlotProps-0d7_6-xv.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-Co30WzKW.js";import"./Modal-BRTptzSC.js";import"./TransitionGroupContext-aFzyVajs.js";import"./Grow-COMGU6Gh.js";import"./List-DPtBRqwi.js";import"./ListContext-AU4sr-iT.js";import"./MenuItem-ByvHck4w.js";import"./ButtonBase-DmWmhxFj.js";import"./listItemIconClasses-BiY_95im.js";import"./listItemTextClasses-CrYuZtSf.js";import"./dividerClasses-DErrwRRZ.js";import"./index-B2MrKlhS.js";import"./useGuiMediaQuery-y5rm1sAf.js";import"./getThemeProps-mxSbfBuC.js";import"./useInsets-DrqY0Rbn.js";import"./Avatar-BV4SAhtm.js";import"./createSvgIcon-21P3U7BS.js";import"./AppBar-DIO0Zsm8.js";import"./Toolbar-DwLZGWoc.js";import"./Button-CMUDvCWP.js";import"./Button-_sZ07zbz.js";import"./CircularProgress-Ch2k8Dnz.js";import"./Chip-DrYhu1lb.js";import"./Paper-DKF2jsMe.js";import"./InspectorToggle-B-FA1UG6.js";import"./Drawer-qFwD3jMV.js";import"./renderer-Bl1ZkWpq.js";import"./runtimeContext-DYOsHqCK.js";import"./IconButton-Drl_RcOw.js";import"./IconButton-D38Qxo8w.js";import"./ListItemIcon-Ce-4FjVP.js";import"./ListItemText-EEYkoSln.js";import"./Tooltip-D8eLdlES.js";import"./useControlled-DEH0vkGQ.js";import"./Collapse-DePBi9Gr.js";import"./AppBar-DWnn5FPG.js";import"./Avatar-FIw_xJ7X.js";import"./StickyOptionsTop-CniV-UBW.js";const li={title:"Getting Started/Layout/RightBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **RightBar** is the right navigation bar.

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
