import{j as d}from"./iframe-BBMjw61D.js";import{L as m}from"./Layout-DYzfXpbO.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-CfFvCiFI.js";import"./RightSidebarContext-CACk_XWP.js";import"./TopBar-DThKYg6H.js";import"./Icon-CeF6C18S.js";import"./Menu-f_YCmJm9.js";import"./useSlot-DH-Teep3.js";import"./resolveComponentProps-Mj_M1BKr.js";import"./useForkRef-CJB8aibE.js";import"./useSlotProps-BFAuu3vI.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-DtVu_y7z.js";import"./Modal-DGyiVzIh.js";import"./TransitionGroupContext-iBgzY6Iu.js";import"./Grow-yh6P9bPz.js";import"./List-Dr2SBuC9.js";import"./ListContext-BFFnw-lM.js";import"./MenuItem-C-WaRd9H.js";import"./ButtonBase-CfpMXisj.js";import"./listItemIconClasses-D5F5QXoM.js";import"./listItemTextClasses-Dx89N0FO.js";import"./dividerClasses-BWVLveXZ.js";import"./index-squKp4GI.js";import"./useGuiMediaQuery-CrZu1DfA.js";import"./getThemeProps-CJ0dIgn2.js";import"./useInsets-D3hivsyV.js";import"./Avatar-OMq3YolH.js";import"./createSvgIcon-BNRhowvH.js";import"./AppBar-t2qX4TQr.js";import"./Toolbar-Dp0b3UO_.js";import"./Button-DkXRMP8k.js";import"./Button-CkOjU5EA.js";import"./CircularProgress-DqaELN0L.js";import"./Chip-C-DVivil.js";import"./Paper-_cshIEQm.js";import"./InspectorToggle-IUCkbs8m.js";import"./Drawer-D_wc0bFk.js";import"./renderer-DJzlvIF7.js";import"./runtimeContext-DLWF6mek.js";import"./IconButton-CI8jOMmz.js";import"./IconButton-CnArdgnS.js";import"./ListItemIcon-O_mc4lGd.js";import"./ListItemText-CDOgxmSP.js";import"./Tooltip-DOgg3P-4.js";import"./useControlled-SC_H9kP0.js";import"./Collapse-DJ7dJk8v.js";import"./AppBar-FRZHGevT.js";import"./Avatar-4H4TtvBD.js";import"./StickyOptionsTop-BtMBx-Zz.js";const lo={title:"Getting Started/Layout/LeftBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **LeftBar** is the left navigation bar.

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
