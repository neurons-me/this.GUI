import{j as d}from"./iframe-B945G3MO.js";import{L as m}from"./Layout-CE0r98RO.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-ccRj2fc-.js";import"./RightSidebarContext-gwNz-TWS.js";import"./TopBar-DEQm_JGV.js";import"./Icon-B7ImVv8I.js";import"./Menu-B2ZDxcVs.js";import"./useSlot-BDGGiRla.js";import"./resolveComponentProps-Cr13QVQ8.js";import"./useForkRef-B1qixtFe.js";import"./useSlotProps-C5tgyCQW.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-B44MHfVE.js";import"./Modal-DT98mAxm.js";import"./TransitionGroupContext-C7M7qqJI.js";import"./Grow-SjjAWBSH.js";import"./List-n6ROlhJL.js";import"./ListContext-Ck__g24J.js";import"./MenuItem-CwUgCQwg.js";import"./ButtonBase-D-uLuZlV.js";import"./listItemIconClasses-DsWwoGm5.js";import"./listItemTextClasses-DhSbipbj.js";import"./dividerClasses-BqPsrmCt.js";import"./index-C7HYsPCV.js";import"./useGuiMediaQuery-MuOZCohC.js";import"./getThemeProps-BEaVCLc9.js";import"./useInsets-CM0D7_rB.js";import"./Avatar-BOde2NC_.js";import"./createSvgIcon-DmKvINFx.js";import"./AppBar-COM4km4L.js";import"./Toolbar-CMdIY8Zj.js";import"./Button-CKOdrTu7.js";import"./Button-5CJ0bfWc.js";import"./CircularProgress-CblgA6-I.js";import"./Chip-BraUMfbk.js";import"./Paper-Cc-h7jKx.js";import"./InspectorToggle-BxuSsdIV.js";import"./Drawer-DwqR1QDi.js";import"./renderer-_moSinZp.js";import"./runtimeContext-Cw7GHtwp.js";import"./IconButton-D5mRMUCb.js";import"./IconButton-DSENFRag.js";import"./ListItemIcon-BzUqBMfL.js";import"./ListItemText-BJh5K7TE.js";import"./Tooltip-DBphtguK.js";import"./useControlled-ojhLLIC7.js";import"./Collapse-CU-qqOqK.js";import"./AppBar-CUjmPqBG.js";import"./Avatar-K_liqaPY.js";import"./StickyOptionsTop-U5B7Kap0.js";const lo={title:"GUI/Layout/LeftBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **LeftBar** is the left navigation bar.

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
