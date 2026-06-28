import{j as d}from"./iframe-BamSxvGl.js";import{L as m}from"./Layout-DYJiRBjZ.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-B_cxOhR3.js";import"./RightSidebarContext-DC9c-OI1.js";import"./TopBar-C0G7yZyh.js";import"./Icon-BYSltbOq.js";import"./Menu-De7Vf5tl.js";import"./useSlot-iMtiR0hJ.js";import"./resolveComponentProps-CeJkfEFt.js";import"./useForkRef-CEd4Lltr.js";import"./useSlotProps-C5DVQp4q.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-upp0xvKF.js";import"./Modal-oSZ9zn9w.js";import"./TransitionGroupContext-Dsjzy0Zl.js";import"./Grow-BboTJdZh.js";import"./List-iFG0l6Is.js";import"./ListContext-O3hO-6P8.js";import"./MenuItem-DNoTubVC.js";import"./ButtonBase-CDq_uQ76.js";import"./listItemIconClasses-DxJ6xFM8.js";import"./listItemTextClasses-gUF37NNN.js";import"./dividerClasses-BZftlWy-.js";import"./index-BGEKDJPD.js";import"./useGuiMediaQuery-wwAu8Zzp.js";import"./getThemeProps-atWsPGFr.js";import"./useInsets-BiwEtkcN.js";import"./Avatar-CTejSSfg.js";import"./createSvgIcon-H1Ui9rrv.js";import"./AppBar-CzFQE5J3.js";import"./Toolbar-B11vCu7Z.js";import"./Button-BXI39ZZO.js";import"./Button-BvX7gL8H.js";import"./CircularProgress-BYWRkUyA.js";import"./Chip-3ZxPCOQf.js";import"./Paper-Biw32b0f.js";import"./InspectorToggle-zYA6ms9l.js";import"./Drawer-ZcM56YDZ.js";import"./renderer-pdt03z3o.js";import"./runtimeContext-CxK-3G5O.js";import"./IconButton-DrPxXNHQ.js";import"./IconButton-BfXXQCoy.js";import"./ListItemIcon-Dhk1bM8U.js";import"./ListItemText-DTLcNajK.js";import"./Tooltip-Bj6JsHBv.js";import"./useControlled-DC9n4FZ6.js";import"./Collapse-CMzi5Fqf.js";import"./AppBar-B7eVMACE.js";import"./Avatar-DlKBX9q_.js";import"./StickyOptionsTop-B39JdOK6.js";const lo={title:"Getting Started/Layout/LeftBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **LeftBar** is the left navigation bar.

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
