import{j as g}from"./iframe-D-yLkxRm.js";import{L as m}from"./Layout-DYLuquLs.js";import"./preload-helper-Dp1pzeXC.js";import"./useInsets-B3V1EvY9.js";import"./RightSidebarContext-D2JukOYm.js";import"./TopBar-DwsGAdzk.js";import"./Icon-C8lU0iA9.js";import"./Menu-BAv5FIZF.js";import"./useSlot-BRmhrC03.js";import"./useForkRef-3g40efWb.js";import"./Grow-B465bZ7r.js";import"./TransitionGroupContext-VW4x2IpZ.js";import"./List-CBF9Jm2I.js";import"./ListContext-4WRkoI35.js";import"./Paper-Ddrsj0pd.js";import"./Modal-C6Ht38j9.js";import"./MenuItem-CxHbwPe9.js";import"./ButtonBase-CgHBv6ML.js";import"./listItemIconClasses-5wPKrVj1.js";import"./listItemTextClasses-3g44Redx.js";import"./dividerClasses-Yf84oI0m.js";import"./index-DQlPD90Q.js";import"./useGuiMediaQuery-CO0A_EV_.js";import"./getThemeProps-BicHvnVd.js";import"./Avatar-l9O_8UC1.js";import"./createSvgIcon-CiK1fZ8I.js";import"./AppBar-Cf0w-hTN.js";import"./Toolbar-UTGLpwz6.js";import"./InspectorToggle-Dx5naHaQ.js";import"./Button-f1opXuFn.js";import"./Button-DTY8LgOd.js";import"./CircularProgress-DrGUE8s9.js";import"./IconButton-D_YfD0us.js";import"./IconButton-B3K44CtS.js";import"./selectionStore-Coy7dh9o.js";import"./ListItemIcon-BRbJkcZX.js";import"./ListItemText-DaNZcaBp.js";import"./Drawer-u-7pRxH5.js";import"./Tooltip-BeKJAHLx.js";import"./useControlled-ZzTc7dN6.js";import"./Collapse-CJsa40Ws.js";import"./AppBar-Cy4oU5pO.js";import"./Avatar-W1LSahfd.js";import"./StickyOptionsTop-C_I4FAIT.js";const ei={title:"GUI/Layout/RightBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **RightBar** is the right navigation bar.

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
