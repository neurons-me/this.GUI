import{j as d}from"./iframe-BTtW7_F-.js";import{L as m}from"./Layout-BsAL90LP.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-JJRWTfsn.js";import"./RightSidebarContext-BJTxHXFC.js";import"./TopBar-nEAKdKr8.js";import"./Icon-CA024acM.js";import"./Menu-B2Kf8SKt.js";import"./useSlot-CIqJhg31.js";import"./resolveComponentProps-B8K2Oa0H.js";import"./useForkRef-C7ZRtJ0F.js";import"./useSlotProps-W8GAIZ31.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-BQDIcK-B.js";import"./Modal-QdAoN3Du.js";import"./TransitionGroupContext-Ddjl0V-4.js";import"./Grow-CbtqgvRU.js";import"./List-_u9nhsq8.js";import"./ListContext-BZWt7HBR.js";import"./MenuItem-CXjhdloI.js";import"./ButtonBase-DUaQ4VIL.js";import"./listItemIconClasses-CaJ8LvZp.js";import"./listItemTextClasses-UDjNIRwn.js";import"./dividerClasses-7JosgSfE.js";import"./index-DOAJrMLS.js";import"./useGuiMediaQuery-Dnl6pwFn.js";import"./getThemeProps-gEKSQZyW.js";import"./useInsets-BiVqw73U.js";import"./Avatar-DtiwpuCv.js";import"./createSvgIcon-CqN86fU2.js";import"./AppBar-CHOddcC9.js";import"./Toolbar-Cfnsh_EX.js";import"./Button-D2e3Dj-X.js";import"./Button-Ddhen21U.js";import"./CircularProgress-ukva-b-G.js";import"./Chip-DXMIFmCa.js";import"./Paper-31X3P03d.js";import"./InspectorToggle-CzaqL69D.js";import"./Drawer-BdzA4NBr.js";import"./renderer-DXCdzS_m.js";import"./runtimeContext-C007B3Qb.js";import"./IconButton-Cuz7NzFo.js";import"./IconButton-DeO-vsGK.js";import"./ListItemIcon-D0_aFo-V.js";import"./ListItemText-EmUfqwzP.js";import"./Tooltip-MnDsYJ5t.js";import"./useControlled-DL-5wEmZ.js";import"./Collapse-BmKeUqre.js";import"./AppBar-C2NIczVy.js";import"./Avatar-CEG7t77t.js";import"./StickyOptionsTop-Dhc0uN7_.js";const lo={title:"Getting Started/Layout/LeftBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **LeftBar** is the left navigation bar.

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
