import{j as e}from"./iframe-BBMjw61D.js";import{F as g,L as h}from"./Layout-DYzfXpbO.js";import{T as u}from"./ToggleMode-DUb4YX2_.js";import"./preload-helper-Dp1pzeXC.js";import"./LeftSidebarContext-CfFvCiFI.js";import"./RightSidebarContext-CACk_XWP.js";import"./TopBar-DThKYg6H.js";import"./Icon-CeF6C18S.js";import"./Menu-f_YCmJm9.js";import"./useSlot-DH-Teep3.js";import"./resolveComponentProps-Mj_M1BKr.js";import"./useForkRef-CJB8aibE.js";import"./useSlotProps-BFAuu3vI.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-DtVu_y7z.js";import"./Modal-DGyiVzIh.js";import"./TransitionGroupContext-iBgzY6Iu.js";import"./Grow-yh6P9bPz.js";import"./List-Dr2SBuC9.js";import"./ListContext-BFFnw-lM.js";import"./MenuItem-C-WaRd9H.js";import"./ButtonBase-CfpMXisj.js";import"./listItemIconClasses-D5F5QXoM.js";import"./listItemTextClasses-Dx89N0FO.js";import"./dividerClasses-BWVLveXZ.js";import"./index-squKp4GI.js";import"./useGuiMediaQuery-CrZu1DfA.js";import"./getThemeProps-CJ0dIgn2.js";import"./useInsets-D3hivsyV.js";import"./Avatar-OMq3YolH.js";import"./createSvgIcon-BNRhowvH.js";import"./AppBar-t2qX4TQr.js";import"./Toolbar-Dp0b3UO_.js";import"./Button-DkXRMP8k.js";import"./Button-CkOjU5EA.js";import"./CircularProgress-DqaELN0L.js";import"./Chip-C-DVivil.js";import"./Paper-_cshIEQm.js";import"./InspectorToggle-IUCkbs8m.js";import"./Drawer-D_wc0bFk.js";import"./renderer-DJzlvIF7.js";import"./runtimeContext-DLWF6mek.js";import"./IconButton-CI8jOMmz.js";import"./IconButton-CnArdgnS.js";import"./ListItemIcon-O_mc4lGd.js";import"./ListItemText-CDOgxmSP.js";import"./Tooltip-DOgg3P-4.js";import"./useControlled-SC_H9kP0.js";import"./Collapse-DJ7dJk8v.js";import"./AppBar-FRZHGevT.js";import"./Avatar-4H4TtvBD.js";import"./StickyOptionsTop-BtMBx-Zz.js";import"./Switch-CSe0IB6_.js";import"./useFormControl-D26o2gVj.js";const be={title:"Getting Started/Layout/Footer",component:g,tags:["autodocs"],parameters:{docs:{description:{component:`The **Footer** component serves as a foundational UI element that anchors actions and secondary navigation at the bottom of the viewport, while seamlessly integrating with responsive layouts and respecting sidebars and other layout elements.

---
## Declarative Usage
You can declare the Footer directly in JSX by passing branding information and arrays of elements for the left, center, and right zones. Each element can be a link or an action, allowing flexible customization of navigation and controls.

---
## Responsive React Layout Integration
The Footer spans the full shell width so it visually closes the layout, while its internal content pads itself around left and right sidebars. It also adapts to different screen sizes by hiding labels on tablet and mobile views, showing only icons with tooltips for accessibility.

---
## Props Overview
- \`brandLabel\`: Text label representing the brand, used as fallback or alongside the logo.
- \`brandLogo\`: URL or path to the brand logo image.
- \`brandHref\`: Link URL for the brand element, typically the home page.
- \`leftElements\`, \`centerElements\`, \`rightElements\`: Arrays of elements defining the content for each segment of the footer. Each element is an object with a \`type\` ('link' or 'action') and \`props\` defining its properties such as label, icon, href, and event handlers.

---
## Features
- **Shell-closing:** Keeps the footer bar full-width while offsetting its inner content to accommodate left and right sidebars.
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
`}}}},o={args:{brandLabel:"Neuroverse",brandLogo:"https://neurons.me/neurons.me.png",brandHref:"/",leftElements:[{type:"link",props:{label:"Status",icon:"monitor_heart",href:"/status",iconColor:"var(--gui-info)"}},{type:"link",props:{label:"Changelog",icon:"history",href:"/changelog",iconColor:"var(--gui-warning)"}}],centerElements:[{type:"link",props:{label:"Docs",icon:"menu_book",href:"/docs",iconColor:"var(--gui-primary)"}},{type:"link",props:{label:"Community",icon:"forum",href:"https://community.neuroverse.ai",external:!0,iconColor:"var(--gui-secondary)"}}],rightElements:[{type:"action",props:{label:"Contact",icon:"support_agent",iconColor:"var(--gui-success)"}},{type:"action",props:{label:"Theme",icon:"dark_mode",iconColor:"var(--gui-primary)"}}],position:"static"}},t={args:{...o.args,position:"fixed"}},n={render:()=>e.jsx(h,{topBarConfig:{title:"Responsive Shell",elementsRight:[{type:"action",props:{element:e.jsx(u,{variant:"minimal",show:"icons",iconSize:"small"})}}]},leftSidebarConfig:{elements:[{type:"link",props:{label:"Overview",icon:"dashboard",iconColor:"var(--gui-primary)"}},{type:"link",props:{label:"Reports",icon:"insights",iconColor:"var(--gui-secondary)"}}]},rightSidebarConfig:{elements:[{type:"link",props:{label:"Alerts",icon:"notifications",iconColor:"var(--gui-warning)"}},{type:"action",props:{label:"Export",icon:"download",iconColor:"var(--gui-success)"}}]},footerConfig:{title:"Neuroverse",logoSrc:"https://neurons.me/neurons.me.png",links:[{name:"Docs",url:"/docs",icon:"menu_book"},{name:"API",url:"/api",icon:"code"}],socialLinks:[{name:"GitHub",url:"https://github.com",icon:"code"},{name:"Community",url:"https://community.neuroverse.ai",icon:"forum"}],position:"fixed"},children:e.jsxs("div",{style:{minHeight:"120vh",padding:"72px 24px 120px"},children:[e.jsx("h2",{style:{marginBottom:16},children:"Dashboard Content"}),e.jsx("p",{children:"Resize the viewport to see how the TopBar, LeftSidebar, RightSidebar, and Footer coordinate their insets. The footer collapses labels below the medium breakpoint while keeping icons and tooltips."})]})})};var i,r,a;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["Default","FixedFooter","WithLayout"];export{o as Default,t as FixedFooter,n as WithLayout,ye as __namedExportsOrder,be as default};
