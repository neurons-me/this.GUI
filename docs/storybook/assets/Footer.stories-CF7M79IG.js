import{j as e}from"./iframe-BYWeTbVw.js";import{F as g,L as u}from"./Layout-fpHXjpOw.js";import{T as h}from"./ToggleMode-Br48t8Pq.js";import"./preload-helper-Dp1pzeXC.js";import"./useInsets-D4ZqczkW.js";import"./useGuiTheme-z8jC6V9j.js";import"./useTheme-hQc6TNga.js";import"./Box-D2VrL_Qb.js";import"./Box-DrLvxTuL.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./clsx-B-dksMZM.js";import"./TopBar-BP8LfpL9.js";import"./Link-_k3b3YPk.js";import"./styled-BR6p0OHR.js";import"./memoTheme-BnPFCUjU.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Typography-DYoqaNaH.js";import"./isFocusVisible-B8k4qzLc.js";import"./Icon-_58-9ZDr.js";import"./Menu-BkRjg2YF.js";import"./useSlot-B-OlYqSH.js";import"./useForkRef-BLLRJTal.js";import"./Grow-CkW5MtLS.js";import"./utils-FfNPbSOm.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./TransitionGroupContext-DUPMztxk.js";import"./index-CBSdJPmc.js";import"./index-CLd_qEH-.js";import"./Portal-DgeMxvnH.js";import"./List-7hVeegK-.js";import"./ListContext-ClkrU-WG.js";import"./Paper-DTgcOaJn.js";import"./Modal-BeaV7_Sg.js";import"./useEventCallback-KgHUuHRa.js";import"./mergeSlotProps-By6iUkp4.js";import"./MenuItem-f22iK8iA.js";import"./ButtonBase-tHL4M-xw.js";import"./listItemIconClasses-CpxGA8ew.js";import"./listItemTextClasses-CbyehWdQ.js";import"./dividerClasses-yCLEuapk.js";import"./index-D1Q95mC-.js";import"./useGuiMediaQuery-B0D5_Pjc.js";import"./getThemeProps-BU2YxKoa.js";import"./Avatar-CYewmXxi.js";import"./createSvgIcon-BaqaXWN0.js";import"./Toolbar-DRIkIAsh.js";import"./Tooltip-qCTvghLq.js";import"./Tooltip-DQeMcL1S.js";import"./useControlled-BwyH7ljD.js";import"./Typography-BTe5Sves.js";import"./Collapse-CjSbSCLT.js";import"./IconButton-DCpYppOl.js";import"./CircularProgress-CDk05OBk.js";import"./Drawer-BP7QDgVi.js";import"./Avatar-DyajXuLN.js";import"./Toolbar-CWFlF6Sv.js";import"./Namespace-BUC6oKKr.js";import"./Switch-CvMuxR-z.js";import"./Switch-BakkDJuf.js";import"./useFormControl-y1n73eIK.js";import"./IconButton-ZyQK-vsV.js";const we={title:"GUI/Layout/Footer",component:g,tags:["autodocs"],parameters:{docs:{description:{component:`The **Footer** component serves as a foundational UI element that anchors actions and secondary navigation at the bottom of the viewport, while seamlessly integrating with responsive layouts and respecting insets caused by sidebars and other layout elements.

---
## Declarative Usage
You can declare the Footer directly in JSX by passing branding information and arrays of elements for the left, center, and right zones. Each element can be a link or an action, allowing flexible customization of navigation and controls.

---
## Responsive React Layout Integration
The Footer automatically adjusts its width and position based on the presence of left and right sidebars, ensuring it does not overlap with other UI components. It also adapts to different screen sizes by hiding labels on tablet and mobile views, showing only icons with tooltips for accessibility.

---
## Props Overview
- \`brandLabel\`: Text label representing the brand, used as fallback or alongside the logo.
- \`brandLogo\`: URL or path to the brand logo image.
- \`brandHref\`: Link URL for the brand element, typically the home page.
- \`leftElements\`, \`centerElements\`, \`rightElements\`: Arrays of elements defining the content for each segment of the footer. Each element is an object with a \`type\` ('link' or 'action') and \`props\` defining its properties such as label, icon, href, and event handlers.

---
## Features
- **Inset-aware:** Automatically offsets its width to accommodate left and right sidebars, avoiding overlap.
- **Responsive Design:** Collapses labels to icons only on smaller screens, maintaining usability and accessibility with tooltips.
- **Segmented Layout:** Divides the footer into three distinct zones (left, center, right) for organized content placement.
- **Flexible Positioning:** Supports \`static\`, \`fixed\`, and \`sticky\` positioning modes to suit various layout needs.
- **Customizable Styling:** Allows style overrides via \`sx\`, \`appBarSx\`, and \`sectionSx\` for fine-grained control.

---
## Layout Zones
- **Left Zone:** Typically contains branding and primary links.
- **Center Zone:** Ideal for documentation links, community resources, or other central navigation.
- **Right Zone:** Often used for actions such as theme toggles or contact buttons.

---
## Responsiveness
Below the \`md\` breakpoint, the Footer hides text labels and displays only icons, preserving space and clarity on smaller devices. Tooltips are provided to maintain accessibility despite the reduced label visibility.

---
## Integration Tips
- Combine the Footer with responsive layout shells that include TopBar and Sidebars to maintain consistent insets and layout harmony.
- Use the \`position="fixed"\` prop to create persistent footers that remain visible and update the global bottom inset dynamically.
- Leverage the segmented layout to organize navigation and actions intuitively.

---
## Example: Declarative Usage
~~~tsx
<Footer
  brandLabel="Neuroverse"
  brandLogo="/logo.svg"
  leftElements={[
    { type: 'link', props: { label: 'Changelog', icon: 'history', href: '/changelog' } },
  ]}
  centerElements={[
    { type: 'link', props: { label: 'Docs', icon: 'menu_book', href: '/docs' } },
    { type: 'link', props: { label: 'Community', icon: 'forum', href: '/community', external: true } },
  ]}
  rightElements={[
    { type: 'action', props: { label: 'Toggle Theme', icon: 'dark_mode', onClick: toggleMode } },
  ]}
/>
~~~

---
## Example: React Integration with Layout
~~~tsx
<Layout
  topBarConfig={{
    title: "Responsive Shell",
    elementsRight: [
      {
        type: "action",
        props: {
          element: <ThemeModeToggle variant="minimal" show="icons" iconSize="small" />,
        },
      },
    ],
  }}
  leftSidebarConfig={{
    elements: [
      { type: "link", props: { label: "Overview", icon: "dashboard", iconColor: "var(--gui-primary)" } },
      { type: "link", props: { label: "Reports", icon: "insights", iconColor: "var(--gui-secondary)" } },
    ],
  }}
  rightSidebarConfig={{
    elements: [
      { type: "link", props: { label: "Alerts", icon: "notifications", iconColor: "var(--gui-warning)" } },
      { type: "action", props: { label: "Export", icon: "download", iconColor: "var(--gui-success)" } },
    ],
  }}
  footerConfig={{
    title: "Neuroverse",
    logoSrc: "/logo.svg",
    links: [
      { name: "Docs", url: "/docs", icon: "menu_book" },
      { name: "API", url: "/api", icon: "code" },
    ],
    socialLinks: [
      { name: "GitHub", url: "https://github.com", icon: "code" },
      { name: "Community", url: "https://community.neuroverse.ai", icon: "forum" },
    ],
    position: "fixed",
  }} 
>
  {/* Main content goes here */}
</Layout>
~~~
`}}}},o={args:{brandLabel:"Neuroverse",brandLogo:"https://neurons.me/neurons.me.png",brandHref:"/",leftElements:[{type:"link",props:{label:"Status",icon:"monitor_heart",href:"/status",iconColor:"var(--gui-info)"}},{type:"link",props:{label:"Changelog",icon:"history",href:"/changelog",iconColor:"var(--gui-warning)"}}],centerElements:[{type:"link",props:{label:"Docs",icon:"menu_book",href:"/docs",iconColor:"var(--gui-primary)"}},{type:"link",props:{label:"Community",icon:"forum",href:"https://community.neuroverse.ai",external:!0,iconColor:"var(--gui-secondary)"}}],rightElements:[{type:"action",props:{label:"Contact",icon:"support_agent",iconColor:"var(--gui-success)"}},{type:"action",props:{label:"Theme",icon:"dark_mode",iconColor:"var(--gui-primary)"}}],position:"static"}},t={args:{...o.args,position:"fixed"}},n={render:()=>e.jsx(u,{topBarConfig:{title:"Responsive Shell",elementsRight:[{type:"action",props:{element:e.jsx(h,{variant:"minimal",show:"icons",iconSize:"small"})}}]},leftSidebarConfig:{elements:[{type:"link",props:{label:"Overview",icon:"dashboard",iconColor:"var(--gui-primary)"}},{type:"link",props:{label:"Reports",icon:"insights",iconColor:"var(--gui-secondary)"}}]},rightSidebarConfig:{elements:[{type:"link",props:{label:"Alerts",icon:"notifications",iconColor:"var(--gui-warning)"}},{type:"action",props:{label:"Export",icon:"download",iconColor:"var(--gui-success)"}}]},footerConfig:{title:"Neuroverse",logoSrc:"https://neurons.me/neurons.me.png",links:[{name:"Docs",url:"/docs",icon:"menu_book"},{name:"API",url:"/api",icon:"code"}],socialLinks:[{name:"GitHub",url:"https://github.com",icon:"code"},{name:"Community",url:"https://community.neuroverse.ai",icon:"forum"}],position:"fixed"},children:e.jsxs("div",{style:{minHeight:"120vh",padding:"72px 24px 120px"},children:[e.jsx("h2",{style:{marginBottom:16},children:"Dashboard Content"}),e.jsx("p",{children:"Resize the viewport to see how the TopBar, LeftSidebar, RightSidebar, and Footer coordinate their insets. The footer collapses labels below the medium breakpoint while keeping icons and tooltips."})]})})};var i,r,a;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    brandLabel: "Neuroverse",
    brandLogo: "https://neurons.me/neurons.me.png",
    brandHref: "/",
    leftElements: [{
      type: "link",
      props: {
        label: "Status",
        icon: "monitor_heart",
        href: "/status",
        iconColor: "var(--gui-info)"
      }
    }, {
      type: "link",
      props: {
        label: "Changelog",
        icon: "history",
        href: "/changelog",
        iconColor: "var(--gui-warning)"
      }
    }],
    centerElements: [{
      type: "link",
      props: {
        label: "Docs",
        icon: "menu_book",
        href: "/docs",
        iconColor: "var(--gui-primary)"
      }
    }, {
      type: "link",
      props: {
        label: "Community",
        icon: "forum",
        href: "https://community.neuroverse.ai",
        external: true,
        iconColor: "var(--gui-secondary)"
      }
    }],
    rightElements: [{
      type: "action",
      props: {
        label: "Contact",
        icon: "support_agent",
        iconColor: "var(--gui-success)"
      }
    }, {
      type: "action",
      props: {
        label: "Theme",
        icon: "dark_mode",
        iconColor: "var(--gui-primary)"
      }
    }],
    position: "static"
  }
}`,...(a=(r=o.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var s,l,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    position: "fixed"
  }
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,m,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Layout topBarConfig={{
    title: "Responsive Shell",
    elementsRight: [{
      type: "action",
      props: {
        element: <ThemeModeToggle variant="minimal" show="icons" iconSize="small" />
      }
    }]
  }} leftSidebarConfig={{
    elements: [{
      type: "link",
      props: {
        label: "Overview",
        icon: "dashboard",
        iconColor: "var(--gui-primary)"
      }
    }, {
      type: "link",
      props: {
        label: "Reports",
        icon: "insights",
        iconColor: "var(--gui-secondary)"
      }
    }]
  }} rightSidebarConfig={{
    elements: [{
      type: "link",
      props: {
        label: "Alerts",
        icon: "notifications",
        iconColor: "var(--gui-warning)"
      }
    }, {
      type: "action",
      props: {
        label: "Export",
        icon: "download",
        iconColor: "var(--gui-success)"
      }
    }]
  }} footerConfig={{
    title: "Neuroverse",
    logoSrc: "https://neurons.me/neurons.me.png",
    links: [{
      name: "Docs",
      url: "/docs",
      icon: "menu_book"
    }, {
      name: "API",
      url: "/api",
      icon: "code"
    }],
    socialLinks: [{
      name: "GitHub",
      url: "https://github.com",
      icon: "code"
    }, {
      name: "Community",
      url: "https://community.neuroverse.ai",
      icon: "forum"
    }],
    position: "fixed"
  } as any}>
      <div style={{
      minHeight: '120vh',
      padding: '72px 24px 120px'
    }}>
        <h2 style={{
        marginBottom: 16
      }}>Dashboard Content</h2>
        <p>
          Resize the viewport to see how the TopBar, LeftSidebar, RightSidebar, and Footer coordinate
          their insets. The footer collapses labels below the medium breakpoint while keeping icons and
          tooltips.
        </p>
      </div>
    </Layout>
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Le=["Default","FixedFooter","WithLayout"];export{o as Default,t as FixedFooter,n as WithLayout,Le as __namedExportsOrder,we as default};
