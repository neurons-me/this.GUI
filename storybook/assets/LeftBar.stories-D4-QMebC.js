import{j as d}from"./iframe-BGaDc8fY.js";import{L as m}from"./Layout-CnMviEDL.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-Ck0WnRZq.js";import"./RightSidebarContext-DKtzxkKm.js";import"./TopBar-akoAiZRC.js";import"./Icon-7Zhdja6G.js";import"./Menu-ZkWSsY6l.js";import"./useSlot-mYHib5yE.js";import"./resolveComponentProps-Dk29dXks.js";import"./useForkRef-BTLRd6DF.js";import"./useSlotProps-yQEft4tG.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-Di4HKz2Y.js";import"./Modal-C572445k.js";import"./TransitionGroupContext-CRX3K3-N.js";import"./Grow-Cde1WuC5.js";import"./List-57qNRWuM.js";import"./ListContext-YJMNngyR.js";import"./MenuItem-CgiIMcKc.js";import"./ButtonBase-CmhJTDh7.js";import"./listItemIconClasses-ClAJKT2Y.js";import"./listItemTextClasses-CswSoKM3.js";import"./dividerClasses-BVGmolOg.js";import"./index-IcCsHFmR.js";import"./useGuiMediaQuery-Bvvmr67q.js";import"./getThemeProps-B7Mx3brp.js";import"./useInsets-BzZYsjc4.js";import"./Avatar-D7RHzrwX.js";import"./createSvgIcon-4U5SUzqQ.js";import"./AppBar-h2MquwDK.js";import"./Toolbar-BBnWUHS2.js";import"./Button-CTJugSMu.js";import"./Button-DQUBnN9_.js";import"./CircularProgress-iyiqlgzo.js";import"./Chip-DPTpPXfj.js";import"./Paper-D8K68VRW.js";import"./InspectorToggle-DlY13M7X.js";import"./Drawer-OYjj9WNP.js";import"./renderer-DHHJdapJ.js";import"./runtimeContext-DoMG9-W6.js";import"./IconButton-CQXbYqDU.js";import"./IconButton-Daf4E_dW.js";import"./ListItemIcon-CtNWREle.js";import"./ListItemText-BgBlMoMB.js";import"./Tooltip-D2OUCLIk.js";import"./useControlled-Cm9jB_PK.js";import"./Collapse-Czn3-G4C.js";import"./AppBar-BNMHd6Mo.js";import"./Avatar-fdAKIFbh.js";import"./StickyOptionsTop-CJeuT6yh.js";const lo={title:"Getting Started/Layout/LeftBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **LeftBar** is the left navigation bar.

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
