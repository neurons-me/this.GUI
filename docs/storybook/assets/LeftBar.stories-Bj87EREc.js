import{j as d}from"./iframe-D-yLkxRm.js";import{L as m}from"./Layout-DYLuquLs.js";import"./preload-helper-Dp1pzeXC.js";import"./useInsets-B3V1EvY9.js";import"./RightSidebarContext-D2JukOYm.js";import"./TopBar-DwsGAdzk.js";import"./Icon-C8lU0iA9.js";import"./Menu-BAv5FIZF.js";import"./useSlot-BRmhrC03.js";import"./useForkRef-3g40efWb.js";import"./Grow-B465bZ7r.js";import"./TransitionGroupContext-VW4x2IpZ.js";import"./List-CBF9Jm2I.js";import"./ListContext-4WRkoI35.js";import"./Paper-Ddrsj0pd.js";import"./Modal-C6Ht38j9.js";import"./MenuItem-CxHbwPe9.js";import"./ButtonBase-CgHBv6ML.js";import"./listItemIconClasses-5wPKrVj1.js";import"./listItemTextClasses-3g44Redx.js";import"./dividerClasses-Yf84oI0m.js";import"./index-DQlPD90Q.js";import"./useGuiMediaQuery-CO0A_EV_.js";import"./getThemeProps-BicHvnVd.js";import"./Avatar-l9O_8UC1.js";import"./createSvgIcon-CiK1fZ8I.js";import"./AppBar-Cf0w-hTN.js";import"./Toolbar-UTGLpwz6.js";import"./InspectorToggle-Dx5naHaQ.js";import"./Button-f1opXuFn.js";import"./Button-DTY8LgOd.js";import"./CircularProgress-DrGUE8s9.js";import"./IconButton-D_YfD0us.js";import"./IconButton-B3K44CtS.js";import"./selectionStore-Coy7dh9o.js";import"./ListItemIcon-BRbJkcZX.js";import"./ListItemText-DaNZcaBp.js";import"./Drawer-u-7pRxH5.js";import"./Tooltip-BeKJAHLx.js";import"./useControlled-ZzTc7dN6.js";import"./Collapse-CJsa40Ws.js";import"./AppBar-Cy4oU5pO.js";import"./Avatar-W1LSahfd.js";import"./StickyOptionsTop-C_I4FAIT.js";const ro={title:"GUI/Layout/LeftBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **LeftBar** is the left navigation bar.

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
`}}}},l=c=>d.jsx(m,{...c}),o=l.bind({});o.args={LeftBar:{initialView:"rail",header:{title:"Workspace",icon:"apps",iconColor:"var(--gui-primary)"},elements:[{type:"link",props:{label:"Dashboard",icon:"dashboard",iconColor:"var(--gui-primary)"}},{type:"link",props:{label:"Analytics",icon:"bar_chart",iconColor:"var(--gui-secondary)"}},{type:"menu",props:{label:"Projects",icon:"folder",iconColor:"var(--gui-warning)",items:[{label:"Project A",icon:"work",iconColor:"var(--gui-success)"},{label:"Project B",icon:"assignment",iconColor:"var(--gui-info)"}]}}],footerElements:[{type:"link",props:{label:"Settings",icon:"settings",iconColor:"var(--gui-primary)"}},{type:"action",props:{label:"Help",icon:"help",iconColor:"var(--gui-success)"}}]}};const t=l.bind({});var i;t.args={LeftBar:{...(i=o.args)!=null&&i.LeftBar&&typeof o.args.LeftBar=="object"?o.args.LeftBar:{},initialView:"expanded"}};var r,e,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:"args => <Layout {...args} />",...(a=(e=o.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};var p,s,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"args => <Layout {...args} />",...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const eo=["RailView","ExpandedView"];export{t as ExpandedView,o as RailView,eo as __namedExportsOrder,ro as default};
