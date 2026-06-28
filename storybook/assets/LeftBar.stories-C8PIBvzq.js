import{j as d}from"./iframe-DiYu-bgs.js";import{L as m}from"./Layout-qpPzN7El.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-BtR4QFtU.js";import"./RightSidebarContext-djWZazsX.js";import"./TopBar-D-RsPefJ.js";import"./Icon-CDNyTKpS.js";import"./Menu-DrGoHtGt.js";import"./useSlot-BM5SeJo5.js";import"./resolveComponentProps-Dw41cPxQ.js";import"./useForkRef-CeQ6MmaM.js";import"./useSlotProps-C8WlynVb.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-cTXpPwta.js";import"./Modal-nI50Th-N.js";import"./TransitionGroupContext-D-SVGE9X.js";import"./Grow-CdY6zbkB.js";import"./List-xPvPPQL7.js";import"./ListContext-CG8slgtE.js";import"./MenuItem-CKIhpI-y.js";import"./ButtonBase-BIWX-Y7H.js";import"./listItemIconClasses-BhZJ7y_A.js";import"./listItemTextClasses-Cw82XuRA.js";import"./dividerClasses-CWtw64gF.js";import"./index-Bwk-otwA.js";import"./useGuiMediaQuery-5qlHtlQ9.js";import"./getThemeProps-YpQr1VWT.js";import"./useInsets-DwE7fn3B.js";import"./Avatar-CdhVBG6j.js";import"./createSvgIcon-BZkVILGZ.js";import"./AppBar-vR55k3hQ.js";import"./Toolbar-ChiFStKU.js";import"./Button-BWZCwv98.js";import"./Button-B1pjkYXI.js";import"./CircularProgress-P6eZSM98.js";import"./Chip-BZAOr3Be.js";import"./Paper-CSinAV9D.js";import"./InspectorToggle-1vw9S654.js";import"./Drawer-BKUY5yU0.js";import"./renderer-DNE_5b45.js";import"./runtimeContext-C3-qwfut.js";import"./IconButton-BevC8wPi.js";import"./IconButton-BBNeXzDA.js";import"./ListItemIcon-BdyV2R3A.js";import"./ListItemText-3WQm850Q.js";import"./Tooltip-DIKoVJsm.js";import"./useControlled-BD87qGga.js";import"./Collapse-BSTVr2BN.js";import"./AppBar-BrSnRsWX.js";import"./Avatar-B0FBPIjH.js";import"./StickyOptionsTop-qIU3xTgZ.js";const lo={title:"Getting Started/Layout/LeftBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **LeftBar** is the left navigation bar.

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
