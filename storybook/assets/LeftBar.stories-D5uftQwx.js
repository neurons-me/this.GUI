import{j as d}from"./iframe-LlyISvcX.js";import{L as m}from"./Layout-B5MElR5W.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-6yFLVm3Y.js";import"./RightSidebarContext-Bh2naL9l.js";import"./TopBar-DDxbmeUl.js";import"./Icon-C5wKrkQR.js";import"./Menu-CW90nM-2.js";import"./useSlot-BjB36WMn.js";import"./resolveComponentProps-je3W1FOW.js";import"./useForkRef-DXwMfuYh.js";import"./useSlotProps-CRHevxrj.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-hYA-maZS.js";import"./Modal-umc8PO72.js";import"./TransitionGroupContext-BjZkdrml.js";import"./Grow-DSFuWx_a.js";import"./List-DoxD2WUl.js";import"./ListContext-Dm60-R5S.js";import"./MenuItem-Cfk9qc44.js";import"./ButtonBase-DyYp4SIE.js";import"./listItemIconClasses-D6VIahjK.js";import"./listItemTextClasses-Br3b6Cqh.js";import"./dividerClasses-Cf1lNlFP.js";import"./index-BOl7PhDv.js";import"./useGuiMediaQuery-LtNcA9tA.js";import"./getThemeProps-s2Mi5D-I.js";import"./useInsets-B7dX2k6P.js";import"./Avatar-ChZaxOul.js";import"./createSvgIcon-F_TJwLpT.js";import"./AppBar-DmO_1bdm.js";import"./Toolbar-D9CC6uQ-.js";import"./Button-E9K2aFZ9.js";import"./Button-DOPP7EdY.js";import"./CircularProgress-CafKaFgs.js";import"./Chip-DPMNmmQz.js";import"./Paper-DVW3rpXx.js";import"./InspectorToggle-Cm4u4Oni.js";import"./Drawer-DIif2F70.js";import"./renderer-CCzHEVvj.js";import"./runtimeContext-CCS5-VQy.js";import"./IconButton-C_eoEAQJ.js";import"./IconButton-BovWFk-U.js";import"./ListItemIcon-SDPMsMGp.js";import"./ListItemText-COd_jaih.js";import"./Tooltip-D02JfOMh.js";import"./useControlled-SuNCYmOK.js";import"./Collapse-C6JFi7OO.js";import"./AppBar-BRdLAnwz.js";import"./Avatar-DLw2vrYg.js";import"./StickyOptionsTop-pHdJIC4M.js";const lo={title:"Getting Started/Layout/LeftBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **LeftBar** is the left navigation bar.

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
