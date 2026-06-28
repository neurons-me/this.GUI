import{j as g}from"./iframe-p6i3_M1l.js";import{L as m}from"./Layout-C_DmbVBX.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-2j73sUfl.js";import"./RightSidebarContext-CKGuO6X3.js";import"./TopBar-Drdk9wsx.js";import"./Icon-BFYuChBm.js";import"./Menu-DGvlkHqg.js";import"./useSlot-BkO1bsLB.js";import"./resolveComponentProps-_bg8blxd.js";import"./useForkRef-Ck8rc5Kh.js";import"./useSlotProps-kE-iKDRN.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-Bw3Z5Cvh.js";import"./Modal-Dg6B-BQQ.js";import"./TransitionGroupContext-FCMPxzOc.js";import"./Grow-4bVmTnw_.js";import"./List-CKBIDq-7.js";import"./ListContext-CbRgTpeA.js";import"./MenuItem-D3hRwlWP.js";import"./ButtonBase-BJen_mue.js";import"./listItemIconClasses-D44GzqIH.js";import"./listItemTextClasses-CPnqD1P-.js";import"./dividerClasses-Cmve31Sx.js";import"./index-B5uvvRZZ.js";import"./useGuiMediaQuery-Dc55fEQy.js";import"./getThemeProps-CL0kpjCh.js";import"./useInsets-C-SDPlo5.js";import"./Avatar-Bb1I23rQ.js";import"./createSvgIcon-B-JEACRB.js";import"./AppBar-C3mcLtP8.js";import"./Toolbar-5sIhsjeC.js";import"./Button-D1vuZL3U.js";import"./Button-BeVJ27AF.js";import"./CircularProgress-u4FSlkBj.js";import"./Chip-CrjI0RUO.js";import"./Paper-EthS2rjT.js";import"./InspectorToggle-CUHsuhpX.js";import"./Drawer-CS47aC-f.js";import"./renderer-C2YMywAB.js";import"./runtimeContext-DeG4UJ8a.js";import"./IconButton-DlXB9zuW.js";import"./IconButton-C2kBk-89.js";import"./ListItemIcon-Bem4eUOS.js";import"./ListItemText-C3oDea4W.js";import"./Tooltip-8jV_9S5S.js";import"./useControlled-CuDKXm2n.js";import"./Collapse-DXiVZeEB.js";import"./AppBar-C-U_IKfz.js";import"./Avatar-DCCzOn1l.js";import"./StickyOptionsTop-egfzgg-z.js";const li={title:"Getting Started/Layout/RightBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **RightBar** is the right navigation bar.

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
`}}}},l=c=>g.jsx(m,{...c}),i=l.bind({});i.args={RightBar:{initialView:"rail",header:{title:"Inspector",icon:"insights",iconColor:"var(--gui-primary)"},elements:[{type:"link",props:{label:"Notifications",icon:"notifications",iconColor:"var(--gui-warning)"}},{type:"link",props:{label:"Activity",icon:"history",iconColor:"var(--gui-secondary)"}},{type:"menu",props:{label:"Views",icon:"view_cozy",iconColor:"var(--gui-primary)",items:[{label:"Timeline",icon:"timeline",iconColor:"var(--gui-success)"},{label:"JSON",icon:"code",iconColor:"var(--gui-info)"}]}}],footerElements:[{type:"link",props:{label:"Settings",icon:"settings",iconColor:"var(--gui-primary)"}},{type:"action",props:{label:"Help",icon:"help",iconColor:"var(--gui-success)"}}]}};const t=l.bind({});var o;t.args={RightBar:{...(o=i.args)!=null&&o.RightBar&&typeof i.args.RightBar=="object"?i.args.RightBar:{},initialView:"expanded"}};var e,r,a;i.parameters={...i.parameters,docs:{...(e=i.parameters)==null?void 0:e.docs,source:{originalSource:"args => <Layout {...args} />",...(a=(r=i.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var p,s,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"args => <Layout {...args} />",...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const ci=["RailView","ExpandedView"];export{t as ExpandedView,i as RailView,ci as __namedExportsOrder,li as default};
