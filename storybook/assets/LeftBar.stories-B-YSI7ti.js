import{j as d}from"./iframe-CXR2GqgA.js";import{L as m}from"./Layout-DO4ID1dt.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-BUzo_SU3.js";import"./RightSidebarContext-DEkRG6CL.js";import"./TopBar-CSQcr_I_.js";import"./Icon-CvmwPEmM.js";import"./Menu-jwLMr_-x.js";import"./useSlot-DFV5KgVj.js";import"./resolveComponentProps-B69ntRQ2.js";import"./useForkRef-K1OztWBN.js";import"./useSlotProps-BuE55OuM.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-HHzNcUsn.js";import"./Modal-O7pKvnn-.js";import"./TransitionGroupContext-CcpZcVWe.js";import"./Grow-DOeZ_aY_.js";import"./List-szo-JVUG.js";import"./ListContext-Djvi1VkW.js";import"./MenuItem-CTPEqO_5.js";import"./ButtonBase-DX9GORHC.js";import"./listItemIconClasses-B4xWcd96.js";import"./listItemTextClasses-CzMVN6O5.js";import"./dividerClasses-BTyRWe9y.js";import"./index-Dfz8gTFu.js";import"./useGuiMediaQuery-Do7pc-ok.js";import"./getThemeProps-DsTEWLbr.js";import"./useInsets-BGFn-Npw.js";import"./Avatar-CCzYid9o.js";import"./createSvgIcon-Bg6G54Kl.js";import"./AppBar-BZIQ2h0r.js";import"./Toolbar-DBBKsClo.js";import"./Button-TaPxG3UH.js";import"./Button-BvWHdkuF.js";import"./CircularProgress-DcAvyTTv.js";import"./Chip-CH-AtjVg.js";import"./Paper-CF7KZOnX.js";import"./InspectorToggle-DW2fWofk.js";import"./Drawer-CtxFmC7R.js";import"./renderer-Cw5BYG9k.js";import"./runtimeContext-ZiB3-9_k.js";import"./IconButton-CGBuLZry.js";import"./IconButton-D_Bz2nNC.js";import"./ListItemIcon-keC8GNt_.js";import"./ListItemText-DR3B8aaX.js";import"./Tooltip-WUnQyLdS.js";import"./useControlled-D7UFNaaJ.js";import"./Collapse-CRpzXOyT.js";import"./AppBar-CDT7plKj.js";import"./Avatar-Dv2ecqQ0.js";import"./StickyOptionsTop-DVe7827n.js";const lo={title:"Getting Started/Layout/LeftBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **LeftBar** is the left navigation bar.

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
