import{j as g}from"./iframe-Df6NujF0.js";import{L as m}from"./Layout-D4zK8O1T.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-D-VryOBj.js";import"./RightSidebarContext-IltEOXuE.js";import"./TopBar-bYg__5ct.js";import"./Icon-C-wgURv6.js";import"./Menu-CewXRIFJ.js";import"./useSlot-Bd-Wnahn.js";import"./resolveComponentProps-DWjNBBVn.js";import"./useForkRef-CevvUXbO.js";import"./useSlotProps-DU24pzeu.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-CG1nIuW7.js";import"./Modal-VkZWfyFy.js";import"./TransitionGroupContext-DJpdnGjq.js";import"./Grow-DFm76bvH.js";import"./List-jJ6JZ7N8.js";import"./ListContext-CrwpJsSy.js";import"./MenuItem-veu1iPo_.js";import"./ButtonBase-B_X4AEO-.js";import"./listItemIconClasses-Bq3XQ_Cu.js";import"./listItemTextClasses-Bu-9afeB.js";import"./dividerClasses-CThCO9HN.js";import"./index-B7GshcJK.js";import"./useGuiMediaQuery-DWHgeP1E.js";import"./getThemeProps-CKjuCPoe.js";import"./useInsets-CXKW4o50.js";import"./Avatar-DZwgnex_.js";import"./createSvgIcon-3pnZInSB.js";import"./AppBar-DmRaYry1.js";import"./Toolbar-CT9YI5vw.js";import"./Button-D9vmRegk.js";import"./Button-d3vT2I27.js";import"./CircularProgress-CXJzJnf2.js";import"./Chip-BdfC3Ugd.js";import"./Paper-CBheul9W.js";import"./InspectorToggle-BJVFhmsH.js";import"./Drawer-Bvdf8Gdt.js";import"./renderer-BMj62cg7.js";import"./runtimeContext-BGyJJMBu.js";import"./IconButton-C4znVeLO.js";import"./IconButton-jEx60ebh.js";import"./ListItemIcon-D22Kkc8f.js";import"./ListItemText-CBO1Kv1j.js";import"./Tooltip-CM7UURJg.js";import"./useControlled-N2X3AJQ6.js";import"./Collapse-V-lGPEMt.js";import"./AppBar-CsNrUXZt.js";import"./Avatar-Cfj_eY0w.js";import"./StickyOptionsTop-BKqWrcXZ.js";const li={title:"Getting Started/Layout/RightBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **RightBar** is the right navigation bar.

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
