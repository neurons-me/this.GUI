import{j as d}from"./iframe-DC1i1573.js";import{L as m}from"./Layout-2qGHyfEN.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-CwJU7uIE.js";import"./RightSidebarContext-BHk_4700.js";import"./TopBar-DODm29Ix.js";import"./Icon-CuVJ4y2k.js";import"./Menu-DF2egIYZ.js";import"./useSlot-D_8lZxqR.js";import"./resolveComponentProps-C5BoffGy.js";import"./useForkRef-hpkiJGPF.js";import"./useSlotProps-DIS-q9VP.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-C8sdzyzT.js";import"./Modal-CLLebtp2.js";import"./TransitionGroupContext-BZk-WlWb.js";import"./Grow-D9IP3D0G.js";import"./List-B4pOZQnr.js";import"./ListContext-DNDBaubu.js";import"./MenuItem-CGXBRnEz.js";import"./ButtonBase-BrZ6brEn.js";import"./listItemIconClasses-BwKUXR3I.js";import"./listItemTextClasses-CTxYf6qB.js";import"./dividerClasses-Bd48RbK3.js";import"./index-CsCTrrmg.js";import"./useGuiMediaQuery-BSPeLbHs.js";import"./getThemeProps-BRLZPA78.js";import"./useInsets-DSWzkno-.js";import"./Avatar-Q90JS4jN.js";import"./createSvgIcon-CArePSch.js";import"./AppBar-CcdR9Lrs.js";import"./Toolbar-DpKn-ZL2.js";import"./Button-OznIF1P0.js";import"./Button-Cw1rExmT.js";import"./CircularProgress-C0wTbWDO.js";import"./Chip-DFuUJxJw.js";import"./Paper-CKIt3RHD.js";import"./InspectorToggle-DJwDlegS.js";import"./Drawer-BJf2efgA.js";import"./renderer-BOtl_gvK.js";import"./runtimeContext-CVXgUwjX.js";import"./IconButton-Wjc3ccB5.js";import"./IconButton-TDHo9m7u.js";import"./ListItemIcon-ZanOEmyx.js";import"./ListItemText-B84pw0of.js";import"./Tooltip-BJSpTCc5.js";import"./useControlled-DbmrnxXO.js";import"./Collapse-B8U356Mf.js";import"./AppBar-03deyKyq.js";import"./Avatar-DFU0rKgR.js";import"./StickyOptionsTop-D2A7gJtl.js";const lo={title:"Getting Started/Layout/LeftBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **LeftBar** is the left navigation bar.

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
