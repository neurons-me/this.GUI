import{j as g}from"./iframe-D3kdS_Ub.js";import{L as m}from"./Layout-C_rJHEI2.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-CqutZI8S.js";import"./RightSidebarContext-D09h_K_x.js";import"./TopBar-DWGjQLAR.js";import"./Icon-CXtYlj0b.js";import"./Menu-Btw_EI3V.js";import"./useSlot-BrC-uMuC.js";import"./resolveComponentProps-C1JfeoUS.js";import"./useForkRef-2K53oxYJ.js";import"./useSlotProps-cU1fxryi.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-D3ZWzLoD.js";import"./Modal-CnGFTZzj.js";import"./TransitionGroupContext-rD0k-wnc.js";import"./Grow-CCwjpSQx.js";import"./List-DtmW0RW3.js";import"./ListContext-BbXpk_HZ.js";import"./MenuItem-SrPuqoFU.js";import"./ButtonBase-ZURSVDQf.js";import"./listItemIconClasses-Dv7WtwhG.js";import"./listItemTextClasses-BmzBaLhy.js";import"./dividerClasses-DlqItYuU.js";import"./index-B9c98GwH.js";import"./useGuiMediaQuery-D1Z-CqYY.js";import"./getThemeProps-L_ZyXWLY.js";import"./useInsets-DoFD1spz.js";import"./Avatar-BqGzWYyh.js";import"./createSvgIcon-Rh2ioi1Z.js";import"./AppBar-CUkN9_Re.js";import"./Toolbar-DK5_ylbE.js";import"./Button-Bvsv15Nb.js";import"./Button-CgnwsOCQ.js";import"./CircularProgress-Bk_e6z-b.js";import"./Chip-AI67ht8y.js";import"./Paper-BLqP_ThU.js";import"./Hero-D1ARQo6k.js";import"./InspectorToggle-B44Z1qvW.js";import"./Drawer-Dq0mrwVn.js";import"./renderer-CrhpmlvX.js";import"./runtimeContext-C7CBx7OH.js";import"./IconButton-DP73IHnG.js";import"./IconButton-BqokRRXF.js";import"./ListItemIcon-QHJwmHr3.js";import"./ListItemText-_077PsP6.js";import"./Tooltip-DUrGEKTJ.js";import"./useControlled-DWJouKPk.js";import"./Collapse-BHtNA79k.js";import"./AppBar-ubakXeUg.js";import"./Avatar-4GNyo2Bl.js";import"./StickyOptionsTop-nkNvyNIi.js";const ci={title:"Getting Started/Layout/RightBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **RightBar** is the right navigation bar.

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
