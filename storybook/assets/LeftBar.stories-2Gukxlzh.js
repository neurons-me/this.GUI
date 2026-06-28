import{j as d}from"./iframe-p6i3_M1l.js";import{L as m}from"./Layout-C_DmbVBX.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-2j73sUfl.js";import"./RightSidebarContext-CKGuO6X3.js";import"./TopBar-Drdk9wsx.js";import"./Icon-BFYuChBm.js";import"./Menu-DGvlkHqg.js";import"./useSlot-BkO1bsLB.js";import"./resolveComponentProps-_bg8blxd.js";import"./useForkRef-Ck8rc5Kh.js";import"./useSlotProps-kE-iKDRN.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-Bw3Z5Cvh.js";import"./Modal-Dg6B-BQQ.js";import"./TransitionGroupContext-FCMPxzOc.js";import"./Grow-4bVmTnw_.js";import"./List-CKBIDq-7.js";import"./ListContext-CbRgTpeA.js";import"./MenuItem-D3hRwlWP.js";import"./ButtonBase-BJen_mue.js";import"./listItemIconClasses-D44GzqIH.js";import"./listItemTextClasses-CPnqD1P-.js";import"./dividerClasses-Cmve31Sx.js";import"./index-B5uvvRZZ.js";import"./useGuiMediaQuery-Dc55fEQy.js";import"./getThemeProps-CL0kpjCh.js";import"./useInsets-C-SDPlo5.js";import"./Avatar-Bb1I23rQ.js";import"./createSvgIcon-B-JEACRB.js";import"./AppBar-C3mcLtP8.js";import"./Toolbar-5sIhsjeC.js";import"./Button-D1vuZL3U.js";import"./Button-BeVJ27AF.js";import"./CircularProgress-u4FSlkBj.js";import"./Chip-CrjI0RUO.js";import"./Paper-EthS2rjT.js";import"./InspectorToggle-CUHsuhpX.js";import"./Drawer-CS47aC-f.js";import"./renderer-C2YMywAB.js";import"./runtimeContext-DeG4UJ8a.js";import"./IconButton-DlXB9zuW.js";import"./IconButton-C2kBk-89.js";import"./ListItemIcon-Bem4eUOS.js";import"./ListItemText-C3oDea4W.js";import"./Tooltip-8jV_9S5S.js";import"./useControlled-CuDKXm2n.js";import"./Collapse-DXiVZeEB.js";import"./AppBar-C-U_IKfz.js";import"./Avatar-DCCzOn1l.js";import"./StickyOptionsTop-egfzgg-z.js";const lo={title:"Getting Started/Layout/LeftBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **LeftBar** is the left navigation bar.

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
