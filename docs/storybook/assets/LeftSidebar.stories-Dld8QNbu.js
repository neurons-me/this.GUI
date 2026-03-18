import{j as u}from"./iframe-C1GRP0hj.js";import{L as g}from"./Layout-D_GzFb6q.js";import{T as y}from"./ToggleMode-BNXE-GBS.js";import"./preload-helper-Dp1pzeXC.js";import"./useInsets-CCla-Zan.js";import"./useGuiTheme-D36Os2VD.js";import"./useTheme-CCB-ESoo.js";import"./Box-VzSXm9Df.js";import"./Box-C7pz1-Z6.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./clsx-B-dksMZM.js";import"./TopBar-DIs4mLM7.js";import"./Link-BhgdegEP.js";import"./styled-8fWbaqUV.js";import"./memoTheme-q_hzTFOc.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Typography-CeTjeXIp.js";import"./isFocusVisible-B8k4qzLc.js";import"./Icon-K6w2oQgw.js";import"./Menu-BzhukQWv.js";import"./useSlot-CKSjisIe.js";import"./useForkRef-BhU-CSAb.js";import"./Grow-D_K8rWid.js";import"./utils--q6FxFGJ.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./TransitionGroupContext-qNdRr-hk.js";import"./index-DyzKfLlg.js";import"./index-Be--jnHL.js";import"./Portal-G2dvxw46.js";import"./List-CQGWwlqq.js";import"./ListContext-Bpm4Q4ce.js";import"./Paper-DxQ0_Ivm.js";import"./Modal-BWGIaPdl.js";import"./useEventCallback-Bs6yfZ5k.js";import"./mergeSlotProps-By6iUkp4.js";import"./MenuItem-BxvuRwOv.js";import"./ButtonBase-rOZxXEMH.js";import"./listItemIconClasses-CpxGA8ew.js";import"./listItemTextClasses-CbyehWdQ.js";import"./dividerClasses-yCLEuapk.js";import"./index-OzLNYajA.js";import"./useGuiMediaQuery-r_7asRKw.js";import"./getThemeProps-CqN2UaJz.js";import"./Avatar-BighDsha.js";import"./createSvgIcon-C_EqHwxV.js";import"./Toolbar-BM_zttvx.js";import"./Tooltip-DEv4E9za.js";import"./useControlled-C5BOGgFW.js";import"./Typography-C12rh2ix.js";import"./Collapse-QvAR5_zn.js";import"./IconButton-Cgo9HMnL.js";import"./CircularProgress-B-nFzJrp.js";import"./Drawer-CuEDgmxW.js";import"./Avatar-CJus_FWz.js";import"./Toolbar-3vHmmoFT.js";import"./Catalog-CXhpFMrS.js";import"./Grid-DDQ3w6Xg.js";import"./Card-D7TD3LSD.js";import"./CardHeader-WoLQsJgw.js";import"./CardContent-DFpFxUGy.js";import"./CardActions-B6ArFgrq.js";import"./Switch-f8c9fVix.js";import"./useFormControl-Cjj0OCnf.js";import"./IconButton-Dr2rgWnv.js";const jo={title:"GUI/Layout/LeftSidebar",component:g,tags:["autodocs"],parameters:{docs:{description:{component:`The **LeftSidebar** component provides the navigation rail for ResponsiveUI layouts. It keeps content aligned with other structural elements (TopBar, RightSidebar) while offering a consistent spot for primary navigation and quick actions.
---
## Features
- **Rail-first layout:** Starts in rail view by default to maximize canvas space while keeping icons reachable.
- **Expanded navigation:** Users can switch to an expanded width for descriptive labels and nested menus.
- **Mobile overlay:** On compact viewports it becomes a temporary drawer that overlays content and releases the left inset.
- **Footer actions:** Optional \`footerElements\` allow secondary actions (e.g. settings, help) that stay pinned to the bottom.
- **Inset sync:** Updates \`theme.layout.insets.left\` so surrounding layouts and the TopBar shift automatically.

---
## Layout Variants
- \`rail\`: 72px icon rail, best for dense productivity layouts.
- \`expanded\`: 264px panel with labels and nested menu support.
- \`mobile\`: Drawer that covers the screen content and is controlled by a floating toggle button.
The sidebar transitions between these modes automatically based on breakpoints, but you can also set them manually via \`useLeftSidebar()\`.

---
## Props
- \`elements: LeftSidebarElement[]\` — Main navigation items. Supports \`link\`, \`menu\`, and \`action\` types.
- \`footerElements?: LeftSidebarElement[]\` — Optional persistent actions rendered in the footer.
- \`initialView?: 'rail' | 'expanded' | 'mobile'\` — Starting layout; defaults to \`rail\`.
- \`className?, ...rest\` — Standard layout props forwarded to the root container.

---
## Declarative usage
~~~tsx
import LeftSidebar from '@/gui/Layouts/ResponsiveUI/Sidebars/LeftSidebar/LeftSidebar';

<LeftSidebar
  initialView="rail"
  elements={[
    { type: 'link', props: { label: 'Dashboard', icon: 'dashboard' } },
    { type: 'link', props: { label: 'Analytics', icon: 'bar_chart' } },
    {
      type: 'menu',
      props: {
        label: 'Projects',
        icon: 'folder',
        items: [
          { label: 'Active', icon: 'task' },
          { label: 'Archive', icon: 'inventory_2' },
        ],
      },
    },
  ]}
  footerElements={[
    { type: 'link', props: { label: 'Settings', icon: 'settings' } },
    { type: 'action', props: { label: 'Sign out', icon: 'logout' } },
  ]}
/>;
~~~

---
## React usage
Wrap your layout with \`LeftBarProvider\` and consume \`useLeftSidebar()\` to control the view programmatically:
~~~tsx
import { LeftBarProvider } from '@/gui/contexts';
import LeftSidebar from '@/gui/Layouts/ResponsiveUI/Sidebars/LeftSidebar/LeftSidebar';
import { useLeftSidebar } from '@/gui/hooks';

const navItems = [
  { type: 'link', props: { label: 'Dashboard', icon: 'dashboard' } },
  { type: 'link', props: { label: 'Billing', icon: 'receipt_long' } },
];

function Shell() {
  const { view, setView } = useLeftSidebar();
  return (
    <>
      <button onClick={() => setView(view === 'expanded' ? 'rail' : 'expanded')}>
        Toggle mode
      </button>
      <LeftSidebar elements={navItems} />
    </>
  );
}

export function AppShell() {
  return (
    <LeftBarProvider>
      <Shell />
    </LeftBarProvider>
  );
}
~~~

---
## Notes
- Mobile mode is triggered automatically below the \`sm\` breakpoint; the floating toggle re-opens the drawer.
- The sidebar updates the global inset each time the view changes, keeping the TopBar and page content aligned.
- Combine with the \`TopBar\` story to see how the two components cooperate in responsive layouts.
`}}}},r=b=>u.jsx(g,{...b}),o=r.bind({});o.args={topBarConfig:{title:"My Application",elementsRight:[{type:"link",props:{label:"Profile",icon:"account_circle"}},{type:"action",props:{element:u.jsx(y,{variant:"minimal",show:"icons",iconSize:"small"})}},{type:"action",props:{label:"Logout",icon:"logout",iconColor:"var(--gui-error)"}}]},leftSidebarConfig:{elements:[{type:"link",props:{label:"Dashboard",icon:"dashboard",iconColor:"var(--gui-primary)"}},{type:"link",props:{label:"Analytics",icon:"bar_chart",iconColor:"var(--gui-secondary)"}},{type:"menu",props:{label:"Projects",icon:"folder",iconColor:"var(--gui-warning)",items:[{label:"Project A",icon:"work",iconColor:"var(--gui-success)"},{label:"Project B",icon:"assignment",iconColor:"var(--gui-info)"}]}},{type:"action",props:{label:"Logout",icon:"logout",iconColor:"var(--gui-error)",action:"handleLogout"}}]}};const e=r.bind({});e.args={leftSidebarConfig:{elements:[{type:"link",props:{label:"Dashboard",icon:"dashboard",iconColor:"var(--gui-primary)"}},{type:"link",props:{label:"Analytics",icon:"bar_chart",iconColor:"var(--gui-secondary)"}},{type:"menu",props:{label:"Projects",icon:"folder",iconColor:"var(--gui-warning)",items:[{label:"Project A",icon:"work",iconColor:"var(--gui-success)"},{label:"Project B",icon:"assignment",iconColor:"var(--gui-info)"}]}},{type:"action",props:{label:"Logout",icon:"logout",iconColor:"var(--gui-error)",action:"handleLogout"}}]}};const t=r.bind({});t.args={leftSidebarConfig:{elements:[{type:"link",props:{label:"Dashboard",icon:"dashboard",iconColor:"var(--gui-primary)"}},{type:"link",props:{label:"Analytics",icon:"bar_chart",iconColor:"var(--gui-secondary)"}},{type:"menu",props:{label:"Projects",icon:"folder",iconColor:"var(--gui-warning)",items:[{label:"Project A",icon:"work",iconColor:"var(--gui-success)"},{label:"Project B",icon:"assignment",iconColor:"var(--gui-info)"}]}},{type:"action",props:{label:"Logout",icon:"logout",iconColor:"var(--gui-error)",action:"handleLogout"}}],footerElements:[{type:"link",props:{label:"Settings",icon:"settings",iconColor:"var(--gui-primary)"}},{type:"action",props:{label:"Help",icon:"help",iconColor:"var(--gui-success)"}}]}};var i,a,n;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:"args => <Layout {...args} />",...(n=(a=o.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var s,l,p;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"args => <Layout {...args} />",...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"args => <Layout {...args} />",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const To=["Default","WithoutTopBar","WithFooter"];export{o as Default,t as WithFooter,e as WithoutTopBar,To as __namedExportsOrder,jo as default};
