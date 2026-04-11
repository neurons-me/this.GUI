import{j as d}from"./iframe-VByCAMq0.js";import{L as m}from"./Layout-DaSJ2-IT.js";import"./preload-helper-Dp1pzeXC.js";import"./useInsets-Cj6UKEdm.js";import"./RightSidebarContext-CWRwzcur.js";import"./TopBar-CULFRWAJ.js";import"./Icon-BTDP3cyE.js";import"./Menu-9llF1EIC.js";import"./useSlot-BQxwWLoj.js";import"./useForkRef-at6iFRE0.js";import"./Grow-yTTW3IAg.js";import"./TransitionGroupContext-BsXbcIrf.js";import"./List-CdNZSNyB.js";import"./ListContext-CUbLHnka.js";import"./Paper-CGsCy_dS.js";import"./Modal-WpCfVUEs.js";import"./MenuItem-CHLMcV3W.js";import"./ButtonBase-Ddf4rdCO.js";import"./listItemIconClasses-BIfuaFhY.js";import"./listItemTextClasses-0eqNW5zI.js";import"./dividerClasses-qk2AzdUE.js";import"./index-GfE-hmSP.js";import"./useGuiMediaQuery-D_LWHVvm.js";import"./getThemeProps-BP5H2oeD.js";import"./Avatar-Xiw6SHQ4.js";import"./createSvgIcon-B4-eI1hQ.js";import"./AppBar-COTbyzEz.js";import"./Toolbar-B5C1gson.js";import"./InspectorToggle-l5ZL5CIN.js";import"./Button-1wg7geSe.js";import"./Button-BDqwkNQI.js";import"./CircularProgress-BiH9goPR.js";import"./IconButton-BiNRO4tv.js";import"./IconButton-CGlHk7MM.js";import"./selectionStore-Coy7dh9o.js";import"./ListItemIcon-CZbD3kdS.js";import"./ListItemText-EGN6nTJf.js";import"./Drawer-Ce_ZhLjS.js";import"./Tooltip-rRxgskYp.js";import"./useControlled-85p8TW_V.js";import"./Collapse-B0Sl3w_T.js";import"./AppBar-DjYRabCk.js";import"./Avatar-CstD0zJh.js";import"./StickyOptionsTop-BP0R1O41.js";const ro={title:"GUI/Layout/LeftBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **LeftBar** is the left navigation bar.

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
