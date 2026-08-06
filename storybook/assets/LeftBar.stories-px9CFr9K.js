import{j as d}from"./iframe-CP9CNxx8.js";import{L as m}from"./Layout-DPvsfICX.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-BOpBW9Bk.js";import"./RightSidebarContext-CPWRa5qv.js";import"./TopBar-NeU6Jmrc.js";import"./Icon-BnIUx9th.js";import"./Menu-CxnaEBrZ.js";import"./useSlot-Mh1rGqki.js";import"./resolveComponentProps-ClcYrv8r.js";import"./useForkRef-DbsbHXzv.js";import"./useSlotProps-prOgqQUI.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-Dej_UP1C.js";import"./Modal-C378D8Mh.js";import"./TransitionGroupContext-Ck5bRGCF.js";import"./Grow-CIgwTQ5t.js";import"./List-dcxI-oUi.js";import"./ListContext-BdVLFpgb.js";import"./MenuItem-CdAcOgof.js";import"./ButtonBase-3VpcqpZw.js";import"./listItemIconClasses-t_-ds97q.js";import"./listItemTextClasses-DLUOdunC.js";import"./dividerClasses-BFmk34HT.js";import"./index-BaMcS7Yy.js";import"./useGuiMediaQuery-ByBF8RQx.js";import"./getThemeProps-DgA4-TRf.js";import"./useInsets-BR-u-XBz.js";import"./Avatar-cinzEPDc.js";import"./createSvgIcon-CULnpTNi.js";import"./AppBar-C27ajw5s.js";import"./Toolbar-C8qlW-S0.js";import"./Button-DXB5L6yH.js";import"./Button-BXZoRsTR.js";import"./CircularProgress-_EZIbAZb.js";import"./Chip-C6-sHy1n.js";import"./Paper-H4VYbcNq.js";import"./InspectorToggle-BFlA6Z6-.js";import"./Drawer-D8k4iXFm.js";import"./renderer-AB4KhwIg.js";import"./runtimeContext-DMLQNDdw.js";import"./IconButton-BrPyFgEk.js";import"./IconButton-CCIAIfSL.js";import"./ListItemIcon-1zpiHevt.js";import"./ListItemText-CddPeRgJ.js";import"./Tooltip-DQd5pZ-T.js";import"./useControlled-BLlI_aPv.js";import"./Collapse-Lfy74YwS.js";import"./AppBar-sUqBlSTR.js";import"./Avatar-9qaPeoNo.js";import"./StickyOptionsTop-DcARegNH.js";const lo={title:"Getting Started/Layout/LeftBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **LeftBar** is the left navigation bar.

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
