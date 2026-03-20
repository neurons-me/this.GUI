import{j as t}from"./iframe-BzW5L-sB.js";import{L as y}from"./Layout-DcBqOQZF.js";import{T as r}from"./ToggleMode-CWgDvxVm.js";import"./preload-helper-Dp1pzeXC.js";import"./useInsets-CcwpjqH7.js";import"./TopBar-DM_Q97NK.js";import"./Icon-BWddFN6m.js";import"./Menu-uCPCnCHG.js";import"./useSlot-CYJL6v7h.js";import"./useForkRef-BZw98wdx.js";import"./Grow-DFC1Fo7Y.js";import"./utils-CMGnC3nT.js";import"./TransitionGroupContext-DBebgn_y.js";import"./Portal-f-DU1-f2.js";import"./List-CfogoPEj.js";import"./ListContext-CE8eRrev.js";import"./Paper-rE9EeMCB.js";import"./Modal-BoYnYDIX.js";import"./useEventCallback-0bk4YSZd.js";import"./mergeSlotProps-ltbmY89f.js";import"./MenuItem-DD0FWrO4.js";import"./ButtonBase-DEfx69p-.js";import"./listItemIconClasses-jF6qDQ2k.js";import"./listItemTextClasses-BJSyu6-k.js";import"./dividerClasses-CmqGI5f7.js";import"./index-y165L54D.js";import"./useGuiMediaQuery-tdJRKJ6_.js";import"./getThemeProps-B6mr4j-q.js";import"./Avatar-CPUJFFaI.js";import"./createSvgIcon-gnQt3uom.js";import"./Toolbar-5iu1k6JU.js";import"./Tooltip-CpARX0_E.js";import"./useControlled-5D3yaU0Z.js";import"./Collapse-D0wZxnaQ.js";import"./IconButton-D32fSpJH.js";import"./CircularProgress-CqZnmEb2.js";import"./Drawer-DvQ8Ysjc.js";import"./Avatar-BsrjgPgW.js";import"./Toolbar-DHioJSnm.js";import"./Catalog-DqoeSxa9.js";import"./Grid-Dh_LG6L1.js";import"./Card-CC1CJW6Q.js";import"./CardHeader-C9jb9tbw.js";import"./CardContent-bBGSERp8.js";import"./CardActions-CLV64cQk.js";import"./Switch-CiVIUQHI.js";import"./useFormControl-DWtZ3EhL.js";import"./IconButton-GOEZXKc9.js";const mo={title:"GUI/Layout/RightSidebar",component:y,tags:["autodocs"],parameters:{docs:{description:{component:`The **RightSidebar** component mirrors the LeftSidebar experience on the opposite edge of the screen. Use it for complementary tools, contextual insights, and secondary actions without losing alignment with the primary content area.
---
## Features
- **Rail-first orientation:** Defaults to a compact 72px rail so charts or documents remain visible.
- **Expandable workspace:** Switch to a wide panel (264px) for verbose content, filters, or inspectors.
- **Mobile-friendly drawer:** On small screens it becomes a temporary drawer that slides over content from the right.
- **Footer actions:** Accepts \`footerElements\` so pinned tools (settings, help) stay reachable.
- **Inset synchronization:** Updates \`theme.layout.insets.right\` so TopBar and other surfaces adapt automatically.

---
## Layout Modes
- \`rail\`: icon-only column hugging the right edge.
- \`expanded\`: full-width tools panel with labels and nested menus.
- \`mobile\`: overlay drawer controlled by a floating button.
Modes can be toggled programmatically via \`useRightSidebar()\` or automatically through built-in breakpoints.

---
## Props
- \`elements?: RightSidebarElement[]\` — Declarative items (\`link\`, \`menu\`, \`action\`) rendered in order.
- \`footerElements?: RightSidebarElement[]\` — Optional sticky footer actions.
- \`initialView?: 'rail' | 'expanded' | 'mobile'\` — Starting mode (defaults to \`rail\`).
- \`className?\` and other DOM props are forwarded to the root \`aside\`.

---
## Declarative usage
~~~tsx
import RightSidebar from '@/gui/Layouts/ResponsiveUI/Sidebars/RightSidebar/RightSidebar';

<RightSidebar
  elements={[
    { type: 'link', props: { label: 'Notifications', icon: 'notifications' } },
    { type: 'link', props: { label: 'Activity', icon: 'history' } },
    {
      type: 'menu',
      props: {
        label: 'Views',
        icon: 'view_cozy',
        items: [
          { label: 'Timeline', icon: 'timeline' },
          { label: 'JSON', icon: 'code' },
        ],
      },
    },
  ]}
  footerElements={[
    { type: 'link', props: { label: 'Settings', icon: 'settings' } },
    { type: 'action', props: { label: 'Support', icon: 'help' } },
  ]}
/>;
~~~

---
## React usage
Combine the context provider and hook to manage the view explicitly:
~~~tsx
import { RightBarProvider } from '@/gui/contexts';
import { useRightSidebar } from '@/gui/hooks';
import RightSidebar from '@/gui/Layouts/ResponsiveUI/Sidebars/RightSidebar/RightSidebar';

const items = [{ type: 'link', props: { label: 'History', icon: 'history' } }];

function Inspector() {
  const { view, setView } = useRightSidebar();
  return (
    <>
      <button onClick={() => setView(view === 'expanded' ? 'rail' : 'expanded')}>
        Toggle inspector
      </button>
      <RightSidebar elements={items} />
    </>
  );
}

export function InspectorShell() {
  return (
    <RightBarProvider>
      <Inspector />
    </RightBarProvider>
  );
}
~~~

---
## Notes
- The floating toggle only appears in mobile mode; closing the drawer restores the underlying layout insets.
- Footer elements share the same declarative shape as main items, so you can reuse links or action buttons.
- Works seamlessly alongside \`LeftSidebar\` and \`TopBar\` when using the responsive Layout shell.
`}}}},a=h=>t.jsx(y,{...h}),o=a.bind({});o.args={topBarConfig:{title:"Analytics",elementsRight:[{type:"action",props:{element:t.jsx(r,{variant:"minimal",show:"icons",iconSize:"small"})}},{type:"action",props:{label:"Share",icon:"ios_share",iconColor:"var(--gui-primary)"}}]},rightSidebarConfig:{elements:[{type:"link",props:{label:"Notifications",icon:"notifications",iconColor:"var(--gui-warning)"}},{type:"link",props:{label:"Activity",icon:"history",iconColor:"var(--gui-secondary)"}},{type:"menu",props:{label:"Views",icon:"view_cozy",iconColor:"var(--gui-primary)",items:[{label:"Timeline",icon:"timeline",iconColor:"var(--gui-success)"},{label:"JSON",icon:"code",iconColor:"var(--gui-info)"}]}},{type:"action",props:{label:"Download",icon:"download",iconColor:"var(--gui-primary)"}}]}};const e=a.bind({});e.args={topBarConfig:{title:"Analytics",elementsRight:[{type:"action",props:{element:t.jsx(r,{variant:"minimal",show:"icons",iconSize:"small"})}},{type:"action",props:{label:"Share",icon:"ios_share",iconColor:"var(--gui-primary)"}}]},rightSidebarConfig:{elements:[{type:"link",props:{label:"Notifications",icon:"notifications",iconColor:"var(--gui-warning)"}},{type:"link",props:{label:"Activity",icon:"history",iconColor:"var(--gui-secondary)"}},{type:"menu",props:{label:"Views",icon:"view_cozy",iconColor:"var(--gui-primary)",items:[{label:"Timeline",icon:"timeline",iconColor:"var(--gui-success)"},{label:"JSON",icon:"code",iconColor:"var(--gui-info)"}]}},{type:"action",props:{label:"Download",icon:"download",iconColor:"var(--gui-primary)"}}],footerElements:[{type:"link",props:{label:"Settings",icon:"settings",iconColor:"var(--gui-secondary)"}},{type:"action",props:{label:"Support",icon:"help",iconColor:"var(--gui-success)"}}]}};const i=a.bind({});i.args={topBarConfig:{title:"Analytics",elementsRight:[{type:"action",props:{element:t.jsx(r,{variant:"minimal",show:"icons",iconSize:"small"})}},{type:"action",props:{label:"Share",icon:"ios_share",iconColor:"var(--gui-primary)"}}]},leftSidebarConfig:{elements:[{type:"link",props:{label:"Dashboard",icon:"dashboard",iconColor:"var(--gui-primary)"}},{type:"menu",props:{label:"Projects",icon:"folder",iconColor:"var(--gui-secondary)",items:[{label:"Project A",icon:"folder_open"},{label:"Project B",icon:"folder_open"}]}},{type:"action",props:{label:"Create",icon:"add_circle",iconColor:"var(--gui-success)"}}],footerElements:[{type:"link",props:{label:"Settings",icon:"settings",iconColor:"var(--gui-secondary)"}},{type:"action",props:{label:"Help",icon:"help_outline",iconColor:"var(--gui-info)"}}]},rightSidebarConfig:{elements:[{type:"link",props:{label:"Notifications",icon:"notifications",iconColor:"var(--gui-warning)"}},{type:"link",props:{label:"Activity",icon:"history",iconColor:"var(--gui-secondary)"}},{type:"menu",props:{label:"Views",icon:"view_cozy",iconColor:"var(--gui-primary)",items:[{label:"Timeline",icon:"timeline",iconColor:"var(--gui-success)"},{label:"JSON",icon:"code",iconColor:"var(--gui-info)"}]}},{type:"action",props:{label:"Download",icon:"download",iconColor:"var(--gui-primary)"}}]}};var n,s,l;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"args => <Layout {...args} />",...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var p,c,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:"args => <Layout {...args} />",...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,g,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:"args => <Layout {...args} />",...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const go=["Default","WithFooter","WithBothSidebars"];export{o as Default,i as WithBothSidebars,e as WithFooter,go as __namedExportsOrder,mo as default};
