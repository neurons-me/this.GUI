import{j as d}from"./iframe-CmZ_q1z4.js";import{L as m}from"./Layout-DqPtaDcr.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-BWEWDi7U.js";import"./RightSidebarContext-Dxzwle-C.js";import"./TopBar-BiQcn028.js";import"./Icon-DEE50VaB.js";import"./Menu-CiCo38cc.js";import"./useSlot-CYyWfB0N.js";import"./resolveComponentProps-BFxV9aVJ.js";import"./useForkRef-DyhjSSpi.js";import"./useSlotProps-Bq_gEvkk.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-BMIc8Tnd.js";import"./Modal-CKg48mq6.js";import"./TransitionGroupContext-Da1OtQvn.js";import"./Grow-BQB6nH-T.js";import"./List-CbH5NTpH.js";import"./ListContext-BEs30NJZ.js";import"./MenuItem-CFaTzU02.js";import"./ButtonBase-C2QUU_ac.js";import"./listItemIconClasses-BsISWJWE.js";import"./listItemTextClasses-DYQe4eT0.js";import"./dividerClasses-C8HhPn6k.js";import"./index-zQzJPhhA.js";import"./useGuiMediaQuery-B66w6CnP.js";import"./getThemeProps-bbO_j9Wi.js";import"./useInsets--uu22R7N.js";import"./Avatar-C57Mvq3V.js";import"./createSvgIcon-BJr67T_I.js";import"./AppBar-m3rf8i8k.js";import"./Toolbar-DjCZRGvk.js";import"./Button-DafFbri_.js";import"./Button-C2KQi9R3.js";import"./CircularProgress-75u6lE4k.js";import"./Chip-BTVbmgxv.js";import"./Paper-CcJJK4hI.js";import"./InspectorToggle-BvOKIHof.js";import"./Drawer-BLsbzvLs.js";import"./renderer-DgQvvU-7.js";import"./runtimeContext-btbdyu3b.js";import"./IconButton-jR5QBnBC.js";import"./IconButton-CREQMvOl.js";import"./ListItemIcon-CglfnlWt.js";import"./ListItemText-Dhm13hmh.js";import"./Tooltip-DhJnZuOk.js";import"./useControlled-DFkCDk-L.js";import"./Collapse-DnMNKN6x.js";import"./AppBar-DHUUPHuN.js";import"./Avatar-BqQ7x005.js";import"./StickyOptionsTop-hngbHzvI.js";const lo={title:"Getting Started/Layout/LeftBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **LeftBar** is the left navigation bar.

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
