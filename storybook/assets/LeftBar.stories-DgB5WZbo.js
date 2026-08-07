import{j as d}from"./iframe-BOpb4YIv.js";import{L as m}from"./Layout-IAcM6KGn.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-Bc78bTHn.js";import"./RightSidebarContext-CStvAXf-.js";import"./TopBar-oUPkkUvd.js";import"./Icon-DzmBtpNi.js";import"./Menu-DC8cg--Q.js";import"./useSlot-HWh9e-Qv.js";import"./resolveComponentProps-CHSBRdpi.js";import"./useForkRef-dhPZUXrW.js";import"./useSlotProps-Bqtf_G4K.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-CXVojHGY.js";import"./Modal-DTdlQupa.js";import"./TransitionGroupContext-BS26-g3U.js";import"./Grow-DcgXnIYz.js";import"./List-DCx-fdb4.js";import"./ListContext-DxyJOsjJ.js";import"./MenuItem-C8wM5jql.js";import"./ButtonBase-wlOBdJtH.js";import"./listItemIconClasses-CSdBHDnA.js";import"./listItemTextClasses-Bjqy9_ye.js";import"./dividerClasses-DU1eXcIB.js";import"./index-BEzWTozk.js";import"./useGuiMediaQuery-CzNeDUBy.js";import"./getThemeProps-B1DPgGZg.js";import"./useInsets-CuNsBlYE.js";import"./Avatar-YW5PkMUC.js";import"./createSvgIcon-Boif_Qzi.js";import"./AppBar-C6pFo9I4.js";import"./Toolbar-DMjcZbrA.js";import"./Button-DLg_2bWS.js";import"./Button-BBkqSahG.js";import"./CircularProgress-DO1ae1Up.js";import"./Chip-Jw9wd0Uq.js";import"./InspectorToggle-DAQxw7h1.js";import"./Drawer-CS-fZvWK.js";import"./Paper-CRwrMbzS.js";import"./renderer-BVJst6-E.js";import"./runtimeContext-CzmwpH0Y.js";import"./IconButton-BQ3BjMi8.js";import"./IconButton-Btnx6d7J.js";import"./ListItemIcon-e8U0ao5E.js";import"./ListItemText-LBsMmETJ.js";import"./Tooltip-DLbppr6W.js";import"./useControlled-nmmvMmEZ.js";import"./Collapse-Dr-lrEEJ.js";import"./AppBar-CQXAsQbj.js";import"./Avatar-BXKuPOGJ.js";import"./StickyOptionsTop-BKG3VjDY.js";const lo={title:"Getting Started/Layout/LeftBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **LeftBar** is the left navigation bar.

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
