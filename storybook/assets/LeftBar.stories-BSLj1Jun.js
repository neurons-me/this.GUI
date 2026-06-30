import{j as d}from"./iframe-D9EvTlWl.js";import{L as m}from"./Layout-DDbpJZNt.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-CoZB3lDH.js";import"./RightSidebarContext-CW28AZhq.js";import"./TopBar-CdBR-wwd.js";import"./Icon-CJEApdqx.js";import"./Menu-DF2f4v03.js";import"./useSlot-DU8sjFIb.js";import"./resolveComponentProps-D0Izudsi.js";import"./useForkRef-C1LFn95A.js";import"./useSlotProps-CcTolACD.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-DhU2P2hT.js";import"./Modal-BW5LSG0L.js";import"./TransitionGroupContext-vbPGwwbr.js";import"./Grow-DG8mRUao.js";import"./List-7Awiztj1.js";import"./ListContext-BwmMMl96.js";import"./MenuItem-CGV8woOg.js";import"./ButtonBase-zQJHYGm5.js";import"./listItemIconClasses-DwdzHSCj.js";import"./listItemTextClasses-CMLvMIIb.js";import"./dividerClasses-ByNKvJjC.js";import"./index-Cet-fgeq.js";import"./useGuiMediaQuery-wY39KJe4.js";import"./getThemeProps-BDyfQF-o.js";import"./useInsets-BNRWKo57.js";import"./Avatar-CVRqK3JX.js";import"./createSvgIcon-C3-IuFf-.js";import"./AppBar-Dt3sOpAJ.js";import"./Toolbar-CpTN7W9R.js";import"./Button-BSC7MtVu.js";import"./Button-PpSzQ2nP.js";import"./CircularProgress-DXt0Rfmg.js";import"./Chip-BhW1_AxW.js";import"./Paper-CNvE0RD-.js";import"./Hero-DPukVZVI.js";import"./InspectorToggle-CiS9GylZ.js";import"./Drawer-A3TumCsB.js";import"./renderer-CYV5pS7F.js";import"./runtimeContext-stX2K2IM.js";import"./IconButton-DkE6reKw.js";import"./IconButton-DBFt0jLD.js";import"./ListItemIcon-DoMmdGUF.js";import"./ListItemText-a4I0i_0j.js";import"./Tooltip-n2OItU4b.js";import"./useControlled-APzbVKNK.js";import"./Collapse-DTsa5u4g.js";import"./AppBar-DfyS3ZAS.js";import"./Avatar-CJw0IObK.js";import"./StickyOptionsTop-WXCz9QxC.js";const co={title:"Getting Started/Layout/LeftBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **LeftBar** is the left navigation bar.

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
`}}}},l=c=>d.jsx(m,{...c}),o=l.bind({});o.args={LeftBar:{initialView:"rail",header:{title:"Workspace",icon:"apps",iconColor:"var(--gui-primary)"},elements:[{type:"link",props:{label:"Dashboard",icon:"dashboard",iconColor:"var(--gui-primary)"}},{type:"link",props:{label:"Analytics",icon:"bar_chart",iconColor:"var(--gui-secondary)"}},{type:"menu",props:{label:"Projects",icon:"folder",iconColor:"var(--gui-warning)",items:[{label:"Project A",icon:"work",iconColor:"var(--gui-success)"},{label:"Project B",icon:"assignment",iconColor:"var(--gui-info)"}]}}],footerElements:[{type:"link",props:{label:"Settings",icon:"settings",iconColor:"var(--gui-primary)"}},{type:"action",props:{label:"Help",icon:"help",iconColor:"var(--gui-success)"}}]}};const t=l.bind({});var i;t.args={LeftBar:{...(i=o.args)!=null&&i.LeftBar&&typeof o.args.LeftBar=="object"?o.args.LeftBar:{},initialView:"expanded"}};var r,e,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:"args => <Layout {...args} />",...(a=(e=o.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};var p,s,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"args => <Layout {...args} />",...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const go=["RailView","ExpandedView"];export{t as ExpandedView,o as RailView,go as __namedExportsOrder,co as default};
