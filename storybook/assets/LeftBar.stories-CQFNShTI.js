import{j as d}from"./iframe-CQnOlLv9.js";import{L as m}from"./Layout-UUHwfp-I.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-Rm5L1sGT.js";import"./RightSidebarContext-O5J7qe4R.js";import"./TopBar-BkxeKugq.js";import"./Icon-DboRFcIN.js";import"./Menu-BylnG-Os.js";import"./useSlot-DeiHnBiM.js";import"./resolveComponentProps-1ujbY_pz.js";import"./useForkRef-DosucJWq.js";import"./useSlotProps-Bl6ntCwV.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-i8IPtUV5.js";import"./Modal-Sz-vgbIW.js";import"./TransitionGroupContext-YwULhr2u.js";import"./Grow-DI3S7WHV.js";import"./List-B9tUoxP3.js";import"./ListContext-Dw-k9oI6.js";import"./MenuItem-ywjy3tTO.js";import"./ButtonBase-CdaNW7hP.js";import"./listItemIconClasses-Bxa553YT.js";import"./listItemTextClasses-AMnQSwtf.js";import"./dividerClasses-B3O0j9jv.js";import"./index--DQWcIhE.js";import"./useGuiMediaQuery-DPsYPqzz.js";import"./getThemeProps-BFLMI8Gb.js";import"./useInsets-B7GnLS1n.js";import"./Avatar-BmtSXZkj.js";import"./createSvgIcon-CJgzMldw.js";import"./AppBar-BWjErzyi.js";import"./Toolbar-B7QdMwFU.js";import"./Button-DLaYzOFx.js";import"./Button-BGOnVkyb.js";import"./CircularProgress-weFzFWV3.js";import"./Chip-Ch6e3Wrd.js";import"./Paper-C4MUk0Wf.js";import"./InspectorToggle-BBOTE1-j.js";import"./Drawer-BOa67ag5.js";import"./renderer-khtWV3Ut.js";import"./runtimeContext-BCtgIIHf.js";import"./IconButton-BRvq8Hxk.js";import"./IconButton-C_kZG7UM.js";import"./ListItemIcon-DH0yM27j.js";import"./ListItemText-BfzhnW8b.js";import"./Tooltip-CV4jrk7n.js";import"./useControlled-UqIt8YAL.js";import"./Collapse-Bxyzm3JI.js";import"./AppBar-B5DvJ6dt.js";import"./Avatar-DxUuXmAR.js";import"./StickyOptionsTop-DbrJDXCQ.js";const lo={title:"Getting Started/Layout/LeftBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **LeftBar** is the left navigation bar.

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
