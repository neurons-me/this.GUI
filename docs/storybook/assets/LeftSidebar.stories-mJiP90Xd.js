import{j as u}from"./iframe-B8RbS7uw.js";import{L as g}from"./Layout-BDLhq4SR.js";import{T as y}from"./ToggleMode-BJ6lNFbS.js";import"./preload-helper-Dp1pzeXC.js";import"./useInsets-B_Qh69d9.js";import"./useGuiTheme-CD41npeU.js";import"./useTheme-BwQ1aHS1.js";import"./Box-Bx62dzkA.js";import"./Box-D8YWJpHP.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./clsx-B-dksMZM.js";import"./TopBar-DUhEpf8d.js";import"./Link-Dl80TlRR.js";import"./styled-Cw_y6cYg.js";import"./memoTheme-DOBzPGVq.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Typography-9CeYDXau.js";import"./isFocusVisible-B8k4qzLc.js";import"./Icon-DMXHGruU.js";import"./Menu-DyK1c_cN.js";import"./useSlot-xNjt_Hcj.js";import"./useForkRef-BVrKvtW-.js";import"./Grow-CDLY8IRb.js";import"./utils-vtR6qNsB.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./TransitionGroupContext-RnyQTLj3.js";import"./index-CRbWBMRp.js";import"./index-BjD9Kw0B.js";import"./Portal-B_K3TjZx.js";import"./List-DIMl_BlM.js";import"./ListContext-Cnf3pXFL.js";import"./Paper-CQFXOI4Y.js";import"./Modal-BE9DN7F8.js";import"./useEventCallback-DGVuo8xh.js";import"./mergeSlotProps-By6iUkp4.js";import"./MenuItem-CCfufrUj.js";import"./ButtonBase-CwHsjpic.js";import"./listItemIconClasses-CpxGA8ew.js";import"./listItemTextClasses-CbyehWdQ.js";import"./dividerClasses-yCLEuapk.js";import"./index-PdLHxj4j.js";import"./useGuiMediaQuery-DnivS9Ih.js";import"./getThemeProps-CmiYdh08.js";import"./Avatar-BGK3OEI1.js";import"./createSvgIcon-qKIB-W4T.js";import"./Toolbar-BAsv9mi7.js";import"./Tooltip-mz007XLf.js";import"./Tooltip-CD-kiCxg.js";import"./useControlled-xToZ4EFh.js";import"./Typography-VWwRmWUn.js";import"./Collapse-Cj0GIqpi.js";import"./IconButton-DCZZFgIO.js";import"./CircularProgress-Dmag3IpP.js";import"./Drawer-CmbVV8vH.js";import"./Avatar-BSDU_Dzn.js";import"./Toolbar-dAXp9UFN.js";import"./Namespace-njUtnFyK.js";import"./Catalog-5Vwc1iKs.js";import"./Grid-DW54CUpj.js";import"./Card-DFg2aWN8.js";import"./CardHeader-wmPV8OQ1.js";import"./CardContent-CBQpGAqS.js";import"./CardActions-C6iE9om3.js";import"./Switch-b5ROkK6C.js";import"./useFormControl-CjO2eC51.js";import"./Switch-BH4Fcgik.js";import"./IconButton-BPzkkkAA.js";const _o={title:"GUI/Layout/LeftSidebar",component:g,tags:["autodocs"],parameters:{docs:{description:{component:`The **LeftSidebar** component provides the navigation rail for ResponsiveUI layouts. It keeps content aligned with other structural elements (TopBar, RightSidebar) while offering a consistent spot for primary navigation and quick actions.
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
`}}}},r=b=>u.jsx(g,{...b}),o=r.bind({});o.args={topBarConfig:{title:"My Application",elementsRight:[{type:"link",props:{label:"Profile",icon:"account_circle"}},{type:"action",props:{element:u.jsx(y,{variant:"minimal",show:"icons",iconSize:"small"})}},{type:"action",props:{label:"Logout",icon:"logout",iconColor:"var(--gui-error)"}}]},leftSidebarConfig:{elements:[{type:"link",props:{label:"Dashboard",icon:"dashboard",iconColor:"var(--gui-primary)"}},{type:"link",props:{label:"Analytics",icon:"bar_chart",iconColor:"var(--gui-secondary)"}},{type:"menu",props:{label:"Projects",icon:"folder",iconColor:"var(--gui-warning)",items:[{label:"Project A",icon:"work",iconColor:"var(--gui-success)"},{label:"Project B",icon:"assignment",iconColor:"var(--gui-info)"}]}},{type:"action",props:{label:"Logout",icon:"logout",iconColor:"var(--gui-error)",action:"handleLogout"}}]}};const e=r.bind({});e.args={leftSidebarConfig:{elements:[{type:"link",props:{label:"Dashboard",icon:"dashboard",iconColor:"var(--gui-primary)"}},{type:"link",props:{label:"Analytics",icon:"bar_chart",iconColor:"var(--gui-secondary)"}},{type:"menu",props:{label:"Projects",icon:"folder",iconColor:"var(--gui-warning)",items:[{label:"Project A",icon:"work",iconColor:"var(--gui-success)"},{label:"Project B",icon:"assignment",iconColor:"var(--gui-info)"}]}},{type:"action",props:{label:"Logout",icon:"logout",iconColor:"var(--gui-error)",action:"handleLogout"}}]}};const t=r.bind({});t.args={leftSidebarConfig:{elements:[{type:"link",props:{label:"Dashboard",icon:"dashboard",iconColor:"var(--gui-primary)"}},{type:"link",props:{label:"Analytics",icon:"bar_chart",iconColor:"var(--gui-secondary)"}},{type:"menu",props:{label:"Projects",icon:"folder",iconColor:"var(--gui-warning)",items:[{label:"Project A",icon:"work",iconColor:"var(--gui-success)"},{label:"Project B",icon:"assignment",iconColor:"var(--gui-info)"}]}},{type:"action",props:{label:"Logout",icon:"logout",iconColor:"var(--gui-error)",action:"handleLogout"}}],footerElements:[{type:"link",props:{label:"Settings",icon:"settings",iconColor:"var(--gui-primary)"}},{type:"action",props:{label:"Help",icon:"help",iconColor:"var(--gui-success)"}}]}};var i,a,n;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:"args => <Layout {...args} />",...(n=(a=o.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var s,p,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"args => <Layout {...args} />",...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"args => <Layout {...args} />",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Do=["Default","WithoutTopBar","WithFooter"];export{o as Default,t as WithFooter,e as WithoutTopBar,Do as __namedExportsOrder,_o as default};
