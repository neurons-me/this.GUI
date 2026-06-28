import{j as g}from"./iframe-qDzYtKtC.js";import{L as m}from"./Layout-qHP25cLG.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-BC6Lfuzt.js";import"./RightSidebarContext-2gLqCqia.js";import"./TopBar-YK5nN52-.js";import"./Icon-DBfkoY2g.js";import"./Menu-CF957P_z.js";import"./useSlot-nWJhJTt3.js";import"./resolveComponentProps-sFAkRM5K.js";import"./useForkRef-C06S7OTc.js";import"./useSlotProps-Y_wwP6Cs.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-a2hOlvY3.js";import"./Modal-DDOvNC-a.js";import"./TransitionGroupContext-g77QK0i_.js";import"./Grow-CCQ7YCjt.js";import"./List-COc7P6ip.js";import"./ListContext-8BNTkPz4.js";import"./MenuItem-BkIPka7Q.js";import"./ButtonBase-6Hh-LNYc.js";import"./listItemIconClasses-BgBXAK3n.js";import"./listItemTextClasses-B6v0OomC.js";import"./dividerClasses-Cv8iZShu.js";import"./index-uG1hdBuY.js";import"./useGuiMediaQuery-yU8bH-of.js";import"./getThemeProps-DrpwWpCX.js";import"./useInsets-tGvyFRHo.js";import"./Avatar-DxLmnYYC.js";import"./createSvgIcon-CxPBGeLD.js";import"./AppBar-DhOFXVGK.js";import"./Toolbar-CiCFUf6x.js";import"./Button-CaMPQpml.js";import"./Button-DbTl9v6C.js";import"./CircularProgress-DRiOEmDI.js";import"./Chip-BhZmaw5o.js";import"./Paper-BoMk_9oZ.js";import"./Hero-xUkqWjvJ.js";import"./InspectorToggle-wekSOhB1.js";import"./Drawer-BRutmAaT.js";import"./renderer-BktiHyjW.js";import"./runtimeContext-CJX842xe.js";import"./IconButton-CTnmFHac.js";import"./IconButton-CFRNv4nR.js";import"./ListItemIcon-BK2mjwHL.js";import"./ListItemText-CQf6APCW.js";import"./Tooltip-RJy_MXxX.js";import"./useControlled-gGju5nux.js";import"./Collapse-BrrbFDki.js";import"./AppBar-I-oQPvVi.js";import"./Avatar-BDr03HyA.js";import"./StickyOptionsTop-Baebmg4p.js";const ci={title:"Getting Started/Layout/RightBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **RightBar** is the right navigation bar.

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
`}}}},l=c=>g.jsx(m,{...c}),i=l.bind({});i.args={RightBar:{initialView:"rail",header:{title:"Inspector",icon:"insights",iconColor:"var(--gui-primary)"},elements:[{type:"link",props:{label:"Notifications",icon:"notifications",iconColor:"var(--gui-warning)"}},{type:"link",props:{label:"Activity",icon:"history",iconColor:"var(--gui-secondary)"}},{type:"menu",props:{label:"Views",icon:"view_cozy",iconColor:"var(--gui-primary)",items:[{label:"Timeline",icon:"timeline",iconColor:"var(--gui-success)"},{label:"JSON",icon:"code",iconColor:"var(--gui-info)"}]}}],footerElements:[{type:"link",props:{label:"Settings",icon:"settings",iconColor:"var(--gui-primary)"}},{type:"action",props:{label:"Help",icon:"help",iconColor:"var(--gui-success)"}}]}};const t=l.bind({});var o;t.args={RightBar:{...(o=i.args)!=null&&o.RightBar&&typeof i.args.RightBar=="object"?i.args.RightBar:{},initialView:"expanded"}};var e,r,a;i.parameters={...i.parameters,docs:{...(e=i.parameters)==null?void 0:e.docs,source:{originalSource:"args => <Layout {...args} />",...(a=(r=i.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var p,s,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"args => <Layout {...args} />",...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const gi=["RailView","ExpandedView"];export{t as ExpandedView,i as RailView,gi as __namedExportsOrder,ci as default};
