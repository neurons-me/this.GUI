import{j as g}from"./iframe-DjCVt7fI.js";import{L as m}from"./Layout-4wKlteoY.js";import"./preload-helper-Dp1pzeXC.js";import"./useInsets-arlOGh6C.js";import"./RightSidebarContext-BZge8nOH.js";import"./TopBar-DnjT_fDz.js";import"./Icon-2eyRSfiI.js";import"./Menu-Dh5v2xHH.js";import"./useSlot-BH35M0Kq.js";import"./resolveComponentProps-DH0v1ivu.js";import"./useForkRef-B8mj3yu-.js";import"./useSlotProps-Z4YGG9ba.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-KEVgxZe5.js";import"./Modal-Beuq0239.js";import"./useEventCallback-DS-1wPyE.js";import"./Grow-BfUFX405.js";import"./TransitionGroupContext-DL1WlFMz.js";import"./List-2pLDQJMN.js";import"./ListContext-C2fXlir5.js";import"./MenuItem-DW-JhOv1.js";import"./ButtonBase-R8XXi6kN.js";import"./listItemIconClasses-DLa6Dg3U.js";import"./listItemTextClasses-BjK0s3gI.js";import"./dividerClasses-CJARtFPe.js";import"./index-B4ZqLDtK.js";import"./useGuiMediaQuery-Q4OJr_sc.js";import"./getThemeProps-CmGuyLZ3.js";import"./Avatar-DYUQSeNb.js";import"./createSvgIcon-DfI1gjmf.js";import"./AppBar-D_fxXm1x.js";import"./Toolbar-B9eD0FrK.js";import"./Paper-DjmomdbI.js";import"./Hero-BfoH7vnY.js";import"./InspectorToggle-Bc522O6V.js";import"./Button-Btre8pBJ.js";import"./Button-D498MQIb.js";import"./CircularProgress-BTsMI-jR.js";import"./IconButton-C9bpkJdw.js";import"./IconButton-3ZhB-jAz.js";import"./selectionStore-Coy7dh9o.js";import"./ListItemIcon-B0coOJe6.js";import"./ListItemText-CvLWwDuE.js";import"./Drawer-GUeS6ILZ.js";import"./Tooltip-AJA_1ylm.js";import"./useControlled-2dJkZLWW.js";import"./Collapse-Cfgg-LST.js";import"./AppBar-D5Xn2fBL.js";import"./Avatar-C-_FoBV5.js";import"./StickyOptionsTop-DwdRW1ZR.js";const mi={title:"GUI/Layout/RightBar",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`The **RightBar** is the right navigation bar.

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
`}}}},l=c=>g.jsx(m,{...c}),i=l.bind({});i.args={RightBar:{initialView:"rail",header:{title:"Inspector",icon:"insights",iconColor:"var(--gui-primary)"},elements:[{type:"link",props:{label:"Notifications",icon:"notifications",iconColor:"var(--gui-warning)"}},{type:"link",props:{label:"Activity",icon:"history",iconColor:"var(--gui-secondary)"}},{type:"menu",props:{label:"Views",icon:"view_cozy",iconColor:"var(--gui-primary)",items:[{label:"Timeline",icon:"timeline",iconColor:"var(--gui-success)"},{label:"JSON",icon:"code",iconColor:"var(--gui-info)"}]}}],footerElements:[{type:"link",props:{label:"Settings",icon:"settings",iconColor:"var(--gui-primary)"}},{type:"action",props:{label:"Help",icon:"help",iconColor:"var(--gui-success)"}}]}};const o=l.bind({});var t;o.args={RightBar:{...(t=i.args)!=null&&t.RightBar&&typeof i.args.RightBar=="object"?i.args.RightBar:{},initialView:"expanded"}};var e,r,a;i.parameters={...i.parameters,docs:{...(e=i.parameters)==null?void 0:e.docs,source:{originalSource:"args => <Layout {...args} />",...(a=(r=i.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var p,s,n;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"args => <Layout {...args} />",...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const li=["RailView","ExpandedView"];export{o as ExpandedView,i as RailView,li as __namedExportsOrder,mi as default};
