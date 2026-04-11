import{j as g}from"./iframe-VByCAMq0.js";import{L as m}from"./Layout-DaSJ2-IT.js";import"./preload-helper-Dp1pzeXC.js";import"./useInsets-Cj6UKEdm.js";import"./RightSidebarContext-CWRwzcur.js";import"./TopBar-CULFRWAJ.js";import"./Icon-BTDP3cyE.js";import"./Menu-9llF1EIC.js";import"./useSlot-BQxwWLoj.js";import"./useForkRef-at6iFRE0.js";import"./Grow-yTTW3IAg.js";import"./TransitionGroupContext-BsXbcIrf.js";import"./List-CdNZSNyB.js";import"./ListContext-CUbLHnka.js";import"./Paper-CGsCy_dS.js";import"./Modal-WpCfVUEs.js";import"./MenuItem-CHLMcV3W.js";import"./ButtonBase-Ddf4rdCO.js";import"./listItemIconClasses-BIfuaFhY.js";import"./listItemTextClasses-0eqNW5zI.js";import"./dividerClasses-qk2AzdUE.js";import"./index-GfE-hmSP.js";import"./useGuiMediaQuery-D_LWHVvm.js";import"./getThemeProps-BP5H2oeD.js";import"./Avatar-Xiw6SHQ4.js";import"./createSvgIcon-B4-eI1hQ.js";import"./AppBar-COTbyzEz.js";import"./Toolbar-B5C1gson.js";import"./InspectorToggle-l5ZL5CIN.js";import"./Button-1wg7geSe.js";import"./Button-BDqwkNQI.js";import"./CircularProgress-BiH9goPR.js";import"./IconButton-BiNRO4tv.js";import"./IconButton-CGlHk7MM.js";import"./selectionStore-Coy7dh9o.js";import"./ListItemIcon-CZbD3kdS.js";import"./ListItemText-EGN6nTJf.js";import"./Drawer-Ce_ZhLjS.js";import"./Tooltip-rRxgskYp.js";import"./useControlled-85p8TW_V.js";import"./Collapse-B0Sl3w_T.js";import"./AppBar-DjYRabCk.js";import"./Avatar-CstD0zJh.js";import"./StickyOptionsTop-BP0R1O41.js";const ei={title:"GUI/Layout/RightBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **RightBar** is the right navigation bar.

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
<RightBar
  initialView="rail"
  header={{ title: 'Inspector', icon: 'insights' }}
  elements={[
    { type: 'link', props: { label: 'Notifications', icon: 'notifications' } },
    {
      type: 'menu',
      props: {
        label: 'Views',
        icon: 'view_cozy',
        items: [
          { label: 'Timeline', icon: 'timeline' },
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
`}}}},l=c=>g.jsx(m,{...c}),i=l.bind({});i.args={RightBar:{initialView:"rail",header:{title:"Inspector",icon:"insights",iconColor:"var(--gui-primary)"},elements:[{type:"link",props:{label:"Notifications",icon:"notifications",iconColor:"var(--gui-warning)"}},{type:"link",props:{label:"Activity",icon:"history",iconColor:"var(--gui-secondary)"}},{type:"menu",props:{label:"Views",icon:"view_cozy",iconColor:"var(--gui-primary)",items:[{label:"Timeline",icon:"timeline",iconColor:"var(--gui-success)"},{label:"JSON",icon:"code",iconColor:"var(--gui-info)"}]}}],footerElements:[{type:"link",props:{label:"Settings",icon:"settings",iconColor:"var(--gui-primary)"}},{type:"action",props:{label:"Help",icon:"help",iconColor:"var(--gui-success)"}}]}};const o=l.bind({});var t;o.args={RightBar:{...(t=i.args)!=null&&t.RightBar&&typeof i.args.RightBar=="object"?i.args.RightBar:{},initialView:"expanded"}};var e,r,a;i.parameters={...i.parameters,docs:{...(e=i.parameters)==null?void 0:e.docs,source:{originalSource:"args => <Layout {...args} />",...(a=(r=i.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var p,s,n;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"args => <Layout {...args} />",...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const ri=["RailView","ExpandedView"];export{o as ExpandedView,i as RailView,ri as __namedExportsOrder,ei as default};
