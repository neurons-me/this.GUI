import{j as d}from"./iframe-uhZydg3N.js";import{L as m}from"./Layout-DSmyQ4Ie.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-DZGZN3iX.js";import"./RightSidebarContext-DF5azfrL.js";import"./TopBar-h7XBhWdH.js";import"./Icon-Di-oNoRg.js";import"./Menu-BJsPtyM-.js";import"./useSlot-TMdTvKz_.js";import"./resolveComponentProps-B0OmEIZv.js";import"./useForkRef-BQM8aYFH.js";import"./useSlotProps-Bd4owx_u.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-tmeeNhAT.js";import"./Modal-Ddh6w-mY.js";import"./TransitionGroupContext-LKJIYauK.js";import"./Grow-BQ9hfFIj.js";import"./List-ZucwSjv8.js";import"./ListContext-wGgHVR3V.js";import"./MenuItem-BWLDfidd.js";import"./ButtonBase-CdxK8IVR.js";import"./listItemIconClasses-BvHRCK78.js";import"./listItemTextClasses-CsGfA3md.js";import"./dividerClasses--NYJMb9z.js";import"./index-Cc8CasjX.js";import"./useGuiMediaQuery-bhoeUMQD.js";import"./getThemeProps-DMY8I5U3.js";import"./useInsets-DEwD25dx.js";import"./Avatar-B6GTAajh.js";import"./createSvgIcon-D5bTnZ11.js";import"./AppBar-Bl_jxp7l.js";import"./Toolbar-BSFIxwSy.js";import"./Button-BHEKV8Di.js";import"./Button-CWDeg29G.js";import"./CircularProgress-Cx3IOg4n.js";import"./Chip-CrmsVK4s.js";import"./Paper-CQQWQJgW.js";import"./InspectorToggle-cqmoKE-f.js";import"./Drawer-sqrMKJTL.js";import"./renderer-BF45M6Bw.js";import"./runtimeContext-C2rVU1dF.js";import"./IconButton-Dt-8QZjB.js";import"./IconButton-vVnP1oY8.js";import"./ListItemIcon-BV2-R9yV.js";import"./ListItemText-DLLCwtpI.js";import"./Tooltip-DoYUUZSH.js";import"./useControlled-DgoOZqD8.js";import"./Collapse-nwYbNMG2.js";import"./AppBar-BEi_-dI6.js";import"./Avatar-Clq5nrrv.js";import"./StickyOptionsTop-D1weJkV6.js";const lo={title:"Getting Started/Layout/LeftBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **LeftBar** is the left navigation bar.

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
