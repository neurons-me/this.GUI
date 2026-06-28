import{j as d}from"./iframe-Df6NujF0.js";import{L as m}from"./Layout-D4zK8O1T.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-D-VryOBj.js";import"./RightSidebarContext-IltEOXuE.js";import"./TopBar-bYg__5ct.js";import"./Icon-C-wgURv6.js";import"./Menu-CewXRIFJ.js";import"./useSlot-Bd-Wnahn.js";import"./resolveComponentProps-DWjNBBVn.js";import"./useForkRef-CevvUXbO.js";import"./useSlotProps-DU24pzeu.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-CG1nIuW7.js";import"./Modal-VkZWfyFy.js";import"./TransitionGroupContext-DJpdnGjq.js";import"./Grow-DFm76bvH.js";import"./List-jJ6JZ7N8.js";import"./ListContext-CrwpJsSy.js";import"./MenuItem-veu1iPo_.js";import"./ButtonBase-B_X4AEO-.js";import"./listItemIconClasses-Bq3XQ_Cu.js";import"./listItemTextClasses-Bu-9afeB.js";import"./dividerClasses-CThCO9HN.js";import"./index-B7GshcJK.js";import"./useGuiMediaQuery-DWHgeP1E.js";import"./getThemeProps-CKjuCPoe.js";import"./useInsets-CXKW4o50.js";import"./Avatar-DZwgnex_.js";import"./createSvgIcon-3pnZInSB.js";import"./AppBar-DmRaYry1.js";import"./Toolbar-CT9YI5vw.js";import"./Button-D9vmRegk.js";import"./Button-d3vT2I27.js";import"./CircularProgress-CXJzJnf2.js";import"./Chip-BdfC3Ugd.js";import"./Paper-CBheul9W.js";import"./InspectorToggle-BJVFhmsH.js";import"./Drawer-Bvdf8Gdt.js";import"./renderer-BMj62cg7.js";import"./runtimeContext-BGyJJMBu.js";import"./IconButton-C4znVeLO.js";import"./IconButton-jEx60ebh.js";import"./ListItemIcon-D22Kkc8f.js";import"./ListItemText-CBO1Kv1j.js";import"./Tooltip-CM7UURJg.js";import"./useControlled-N2X3AJQ6.js";import"./Collapse-V-lGPEMt.js";import"./AppBar-CsNrUXZt.js";import"./Avatar-Cfj_eY0w.js";import"./StickyOptionsTop-BKqWrcXZ.js";const lo={title:"Getting Started/Layout/LeftBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **LeftBar** is the left navigation bar.

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
<LeftBar
  initialView="rail"
  header={{ title: 'Workspace', icon: 'apps' }}
  elements={[
    { type: 'link', props: { label: 'Dashboard', icon: 'dashboard' } },
    {
      type: 'menu',
      props: {
        label: 'Projects',
        icon: 'folder',
        items: [
          { label: 'Project A', icon: 'work' },
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
`}}}},l=c=>d.jsx(m,{...c}),o=l.bind({});o.args={LeftBar:{initialView:"rail",header:{title:"Workspace",icon:"apps",iconColor:"var(--gui-primary)"},elements:[{type:"link",props:{label:"Dashboard",icon:"dashboard",iconColor:"var(--gui-primary)"}},{type:"link",props:{label:"Analytics",icon:"bar_chart",iconColor:"var(--gui-secondary)"}},{type:"menu",props:{label:"Projects",icon:"folder",iconColor:"var(--gui-warning)",items:[{label:"Project A",icon:"work",iconColor:"var(--gui-success)"},{label:"Project B",icon:"assignment",iconColor:"var(--gui-info)"}]}}],footerElements:[{type:"link",props:{label:"Settings",icon:"settings",iconColor:"var(--gui-primary)"}},{type:"action",props:{label:"Help",icon:"help",iconColor:"var(--gui-success)"}}]}};const t=l.bind({});var i;t.args={LeftBar:{...(i=o.args)!=null&&i.LeftBar&&typeof o.args.LeftBar=="object"?o.args.LeftBar:{},initialView:"expanded"}};var r,e,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:"args => <Layout {...args} />",...(a=(e=o.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};var p,s,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"args => <Layout {...args} />",...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const co=["RailView","ExpandedView"];export{t as ExpandedView,o as RailView,co as __namedExportsOrder,lo as default};
