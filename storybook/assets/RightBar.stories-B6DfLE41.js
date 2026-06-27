import{j as g}from"./iframe-B945G3MO.js";import{L as m}from"./Layout-CE0r98RO.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-ccRj2fc-.js";import"./RightSidebarContext-gwNz-TWS.js";import"./TopBar-DEQm_JGV.js";import"./Icon-B7ImVv8I.js";import"./Menu-B2ZDxcVs.js";import"./useSlot-BDGGiRla.js";import"./resolveComponentProps-Cr13QVQ8.js";import"./useForkRef-B1qixtFe.js";import"./useSlotProps-C5tgyCQW.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-B44MHfVE.js";import"./Modal-DT98mAxm.js";import"./TransitionGroupContext-C7M7qqJI.js";import"./Grow-SjjAWBSH.js";import"./List-n6ROlhJL.js";import"./ListContext-Ck__g24J.js";import"./MenuItem-CwUgCQwg.js";import"./ButtonBase-D-uLuZlV.js";import"./listItemIconClasses-DsWwoGm5.js";import"./listItemTextClasses-DhSbipbj.js";import"./dividerClasses-BqPsrmCt.js";import"./index-C7HYsPCV.js";import"./useGuiMediaQuery-MuOZCohC.js";import"./getThemeProps-BEaVCLc9.js";import"./useInsets-CM0D7_rB.js";import"./Avatar-BOde2NC_.js";import"./createSvgIcon-DmKvINFx.js";import"./AppBar-COM4km4L.js";import"./Toolbar-CMdIY8Zj.js";import"./Button-CKOdrTu7.js";import"./Button-5CJ0bfWc.js";import"./CircularProgress-CblgA6-I.js";import"./Chip-BraUMfbk.js";import"./Paper-Cc-h7jKx.js";import"./InspectorToggle-BxuSsdIV.js";import"./Drawer-DwqR1QDi.js";import"./renderer-_moSinZp.js";import"./runtimeContext-Cw7GHtwp.js";import"./IconButton-D5mRMUCb.js";import"./IconButton-DSENFRag.js";import"./ListItemIcon-BzUqBMfL.js";import"./ListItemText-BJh5K7TE.js";import"./Tooltip-DBphtguK.js";import"./useControlled-ojhLLIC7.js";import"./Collapse-CU-qqOqK.js";import"./AppBar-CUjmPqBG.js";import"./Avatar-K_liqaPY.js";import"./StickyOptionsTop-U5B7Kap0.js";const li={title:"GUI/Layout/RightBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **RightBar** is the right navigation bar.

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
`}}}},l=c=>g.jsx(m,{...c}),i=l.bind({});i.args={RightBar:{initialView:"rail",header:{title:"Inspector",icon:"insights",iconColor:"var(--gui-primary)"},elements:[{type:"link",props:{label:"Notifications",icon:"notifications",iconColor:"var(--gui-warning)"}},{type:"link",props:{label:"Activity",icon:"history",iconColor:"var(--gui-secondary)"}},{type:"menu",props:{label:"Views",icon:"view_cozy",iconColor:"var(--gui-primary)",items:[{label:"Timeline",icon:"timeline",iconColor:"var(--gui-success)"},{label:"JSON",icon:"code",iconColor:"var(--gui-info)"}]}}],footerElements:[{type:"link",props:{label:"Settings",icon:"settings",iconColor:"var(--gui-primary)"}},{type:"action",props:{label:"Help",icon:"help",iconColor:"var(--gui-success)"}}]}};const o=l.bind({});var t;o.args={RightBar:{...(t=i.args)!=null&&t.RightBar&&typeof i.args.RightBar=="object"?i.args.RightBar:{},initialView:"expanded"}};var e,r,a;i.parameters={...i.parameters,docs:{...(e=i.parameters)==null?void 0:e.docs,source:{originalSource:"args => <Layout {...args} />",...(a=(r=i.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var p,s,n;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"args => <Layout {...args} />",...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const ci=["RailView","ExpandedView"];export{o as ExpandedView,i as RailView,ci as __namedExportsOrder,li as default};
