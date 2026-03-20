import{j as e,B as r,a as o}from"./iframe-BzW5L-sB.js";import{L as c}from"./Layout-DcBqOQZF.js";import{P as W}from"./Page-DNiK7cLz.js";import{T as A}from"./ToggleMode-CWgDvxVm.js";import"./preload-helper-Dp1pzeXC.js";import"./useInsets-CcwpjqH7.js";import"./TopBar-DM_Q97NK.js";import"./Icon-BWddFN6m.js";import"./Menu-uCPCnCHG.js";import"./useSlot-CYJL6v7h.js";import"./useForkRef-BZw98wdx.js";import"./Grow-DFC1Fo7Y.js";import"./utils-CMGnC3nT.js";import"./TransitionGroupContext-DBebgn_y.js";import"./Portal-f-DU1-f2.js";import"./List-CfogoPEj.js";import"./ListContext-CE8eRrev.js";import"./Paper-rE9EeMCB.js";import"./Modal-BoYnYDIX.js";import"./useEventCallback-0bk4YSZd.js";import"./mergeSlotProps-ltbmY89f.js";import"./MenuItem-DD0FWrO4.js";import"./ButtonBase-DEfx69p-.js";import"./listItemIconClasses-jF6qDQ2k.js";import"./listItemTextClasses-BJSyu6-k.js";import"./dividerClasses-CmqGI5f7.js";import"./index-y165L54D.js";import"./useGuiMediaQuery-tdJRKJ6_.js";import"./getThemeProps-B6mr4j-q.js";import"./Avatar-CPUJFFaI.js";import"./createSvgIcon-gnQt3uom.js";import"./Toolbar-5iu1k6JU.js";import"./Tooltip-CpARX0_E.js";import"./useControlled-5D3yaU0Z.js";import"./Collapse-D0wZxnaQ.js";import"./IconButton-D32fSpJH.js";import"./CircularProgress-CqZnmEb2.js";import"./Drawer-DvQ8Ysjc.js";import"./Avatar-BsrjgPgW.js";import"./Toolbar-DHioJSnm.js";import"./Catalog-DqoeSxa9.js";import"./Grid-Dh_LG6L1.js";import"./Card-CC1CJW6Q.js";import"./CardHeader-C9jb9tbw.js";import"./CardContent-bBGSERp8.js";import"./CardActions-CLV64cQk.js";import"./Switch-CiVIUQHI.js";import"./useFormControl-DWtZ3EhL.js";import"./IconButton-GOEZXKc9.js";const Pe={title:"GUI/Layout",component:c,tags:["autodocs"],parameters:{docs:{description:{component:`
Responsive shell used across ***.GUI***

It coordinates the TopBar left/right sidebars, and Footer so their insets remain in sync while content renders inside.

- Inset-aware shell — provides the layout context and automatically keeps TopBar/Footer/content aligned as sidebars open/close.
- **Composable regions** – optional \`TopBar\`, \`LeftBar\`, \`RightBar\`, and \`Footer\` let you enable only what you need.

## Declarative usage
~~~json
{
  "type": "Layout",
  "props": {
    "TopBar": {
      "title": "Workspace",
      "elementsRight": [
        {
          "type": "action",
          "props": {
            "element": "ThemeModeToggle"
          }
        }
      ]
    },
    "LeftBar": {
      "elements": [
        {
          "type": "link",
          "props": {
            "label": "Dashboard",
            "icon": "dashboard"
          }
        },
        {
          "type": "menu",
          "props": {
            "label": "Projects",
            "icon": "folder",
            "items": [
              {
                "label": "Project A",
                "icon": "work"
              },
              {
                "label": "Project B",
                "icon": "assignment"
              }
            ]
          }
        }
      ]
    },
    "RightBar": { "elements": [] },
    "Footer": {
      "brandLabel": "neurons.me",
      "centerElements": [
        {
          "type": "link",
          "props": {
            "label": "Docs",
            "href": "/docs",
            "icon": "menu_book"
          }
        }
      ]
    }
  },
  "Content": [
    {
      "children": [
        {
          "type": "Section",
          "props": {
            "title": "Overview"
          }
        },
        {
          "type": "Card",
          "props": {
            "title": "AI Metrics"
          }
        }
      ]
    }
  ]
}
~~~

---
## React usage
Use the layout as a shell around your routes or dashboard pages. Pass config objects when you need a region; use \`false\` to omit it.
~~~tsx
function DashboardPage() {
  return (
    <Layout
      TopBar={{
        title: "Analytics",
        elementsRight: [
          { type: "action", props: { element: <ThemeModeToggle variant="minimal" /> } },
        ],
      }}
      LeftBar={{
        elements: [
          { type: "link", props: { label: "Overview", icon: "home" } },
          { type: "link", props: { label: "Reports", icon: "insights" } },
        ],
      }}
      RightBar={{
        elements: [
          { type: "link", props: { label: "Alerts", icon: "notifications" } },
        ],
      }}
    >
      <Outlet />
    </Layout>
  );
}
~~~

---
## Notes
- Props objects mirror the props of the individual components (TopBar, LeftBar, RightBar, Footer). (Legacy \`*Config\` props are still supported.)
- Set a config to \`false\` (or omit it) to exclude that region entirely.
- Children render in document order beneath any enabled sidebars/top bar – for sticky layouts remember to add padding or section containers as shown below.
`}}},argTypes:{TopBar:{control:"object"},LeftBar:{control:"object"},RightBar:{control:"object"},Footer:{control:"object"}}},i=F=>e.jsx(c,{...F,children:e.jsxs(r,{sx:{minHeight:"120vh",p:3,display:"flex",flexDirection:"column",gap:2},children:[e.jsx(o,{variant:"h5",sx:{fontWeight:700},children:"Responsive Layout Demo"}),e.jsx(o,{variant:"body2",color:"text.secondary",sx:{maxWidth:720},children:"Resize the viewport or toggle sidebars to observe how insets are coordinated. This content is intentionally tall to show how fixed bars interact with scrolling."}),e.jsxs(r,{sx:{mt:1,display:"grid",gridTemplateColumns:{xs:"1fr",sm:"repeat(2, minmax(0, 1fr))",lg:"repeat(3, minmax(0, 1fr))"},gap:2},children:[e.jsxs(r,{sx:{p:2,borderRadius:2,border:"1px solid",borderColor:"divider",bgcolor:"background.paper"},children:[e.jsx(o,{variant:"subtitle2",sx:{fontWeight:700,mb:.5},children:"Insets-aware"}),e.jsx(o,{variant:"caption",color:"text.secondary",children:"This block uses theme tokens and lets Layout/Content handle spacing."})]}),e.jsxs(r,{sx:{p:2,borderRadius:2,border:"1px solid",borderColor:"divider",bgcolor:"background.paper"},children:[e.jsx(o,{variant:"subtitle2",sx:{fontWeight:700,mb:.5},children:"Sidebar coordination"}),e.jsx(o,{variant:"caption",color:"text.secondary",children:"Expand/collapse sidebars and confirm content stays aligned."})]}),e.jsxs(r,{sx:{p:2,borderRadius:2,border:"1px solid",borderColor:"divider",bgcolor:"background.paper"},children:[e.jsx(o,{variant:"subtitle2",sx:{fontWeight:700,mb:.5},children:"Scroll behavior"}),e.jsx(o,{variant:"caption",color:"text.secondary",children:"Layout keeps the main area scrollable without manual padding hacks."})]})]}),e.jsx(r,{sx:{mt:2},children:Array.from({length:18}).map((S,m)=>e.jsxs(o,{variant:"body2",color:"text.secondary",sx:{mb:1},children:["Row ",m+1," — filler content to demonstrate scrolling within the Layout content area."]},m))})]})}),n={render:i,args:{TopBar:{title:"neurons.me",elementsRight:[{type:"action",props:{element:e.jsx(A,{variant:"minimal",show:"icons",iconSize:"small"})}}]},LeftBar:!1,RightBar:!1,Footer:!1}},t={render:i,args:{...n.args,LeftBar:{elements:[{type:"link",props:{label:"Overview",icon:"dashboard"}},{type:"menu",props:{label:"Projects",icon:"folder",items:[{label:"Project Alpha",icon:"work"},{label:"Project Beta",icon:"assignment"}]}}],footerElements:[{type:"link",props:{label:"Settings",icon:"settings"}}]}}},a={render:i,args:{...t.args,RightBar:{elements:[{type:"link",props:{label:"Activity",icon:"history"}},{type:"action",props:{label:"Export",icon:"download"}}]}}},s={render:i,args:{...a.args,Footer:{brandLabel:"neurons.me",brandLogo:"https://neurons.me/neurons.me.png",centerElements:[{type:"link",props:{label:"Docs",href:"neurons-me.github.io/GUI/",icon:"menu_book",iconColor:"var(--gui-primary)"}},{type:"link",props:{label:"API",href:"/api",icon:"code",iconColor:"var(--gui-secondary)"}}],rightElements:[{type:"link",props:{label:"Community",href:"https://neurons.me",icon:"forum",iconColor:"var(--gui-info)",external:!0}},{type:"link",props:{label:"GitHub",href:"https://github.com",icon:"code",iconColor:"var(--gui-warning)",external:!0}}],position:"fixed"}}},l={render:i,args:{TopBar:!1,LeftBar:!1,RightBar:!1,Footer:!1}},p={render:()=>e.jsx(c,{TopBar:{title:"neurons.me"},LeftBar:{elements:[{type:"link",props:{label:"Home",icon:"home"}},{type:"link",props:{label:"Analytics",icon:"insights"}}]},RightBar:{elements:[{type:"link",props:{label:"Chat",icon:"chat"}}]},Footer:{brandLabel:"neurons.me",centerElements:[{type:"link",props:{label:"Docs",icon:"menu_book"}}]},children:e.jsxs(W,{padding:4,children:[e.jsx(o,{variant:"h5",sx:{fontWeight:700,mb:2},children:"Page inside Layout"}),e.jsx(o,{variant:"body2",color:"text.secondary",sx:{maxWidth:720},children:"This example shows how a Page component can be used inside the responsive Layout, automatically adapting to inset updates from the TopBar, sidebars, and Footer."})]})})};var d,h,g;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: Template,
  args: {
    TopBar: {
      title: "neurons.me",
      elementsRight: [{
        type: "action",
        props: {
          element: <ThemeModeToggle variant="minimal" show="icons" iconSize="small" />
        }
      }]
    },
    LeftBar: false,
    RightBar: false,
    Footer: false
  }
}`,...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var u,b,y;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...TopOnly.args,
    LeftBar: {
      elements: [{
        type: "link",
        props: {
          label: "Overview",
          icon: "dashboard"
        }
      }, {
        type: "menu",
        props: {
          label: "Projects",
          icon: "folder",
          items: [{
            label: "Project Alpha",
            icon: "work"
          }, {
            label: "Project Beta",
            icon: "assignment"
          }]
        }
      }],
      footerElements: [{
        type: "link",
        props: {
          label: "Settings",
          icon: "settings"
        }
      }]
    }
  }
}`,...(y=(b=t.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var f,x,T;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...TopWithLeftBar.args,
    RightBar: {
      elements: [{
        type: "link",
        props: {
          label: "Activity",
          icon: "history"
        }
      }, {
        type: "action",
        props: {
          label: "Export",
          icon: "download"
        }
      }]
    }
  }
}`,...(T=(x=a.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var B,v,k;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...TopWithLeftAndRight.args,
    Footer: {
      brandLabel: "neurons.me",
      brandLogo: "https://neurons.me/neurons.me.png",
      centerElements: [{
        type: "link",
        props: {
          label: "Docs",
          href: "neurons-me.github.io/GUI/",
          icon: "menu_book",
          iconColor: "var(--gui-primary)"
        }
      }, {
        type: "link",
        props: {
          label: "API",
          href: "/api",
          icon: "code",
          iconColor: "var(--gui-secondary)"
        }
      }],
      rightElements: [{
        type: "link",
        props: {
          label: "Community",
          href: "https://neurons.me",
          icon: "forum",
          iconColor: "var(--gui-info)",
          external: true
        }
      }, {
        type: "link",
        props: {
          label: "GitHub",
          href: "https://github.com",
          icon: "code",
          iconColor: "var(--gui-warning)",
          external: true
        }
      }],
      position: "fixed"
    }
  }
}`,...(k=(v=s.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var L,j,w;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: Template,
  args: {
    TopBar: false,
    LeftBar: false,
    RightBar: false,
    Footer: false
  }
}`,...(w=(j=l.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var R,C,P;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Layout TopBar={{
    title: 'neurons.me'
  }} LeftBar={{
    elements: [{
      type: 'link',
      props: {
        label: 'Home',
        icon: 'home'
      }
    }, {
      type: 'link',
      props: {
        label: 'Analytics',
        icon: 'insights'
      }
    }]
  }} RightBar={{
    elements: [{
      type: 'link',
      props: {
        label: 'Chat',
        icon: 'chat'
      }
    }]
  }} Footer={{
    brandLabel: 'neurons.me',
    centerElements: [{
      type: 'link',
      props: {
        label: 'Docs',
        icon: 'menu_book'
      }
    }]
  }}>
      <Page padding={4}>
        <Typography variant="h5" sx={{
        fontWeight: 700,
        mb: 2
      }}>
          Page inside Layout
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{
        maxWidth: 720
      }}>
          This example shows how a Page component can be used inside the responsive Layout,
          automatically adapting to inset updates from the TopBar, sidebars, and Footer.
        </Typography>
      </Page>
    </Layout>
}`,...(P=(C=p.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};const Fe=["TopOnly","TopWithLeftBar","TopWithLeftAndRight","FullShellWithFooter","ContentOnly","LayoutWithPage"];export{l as ContentOnly,s as FullShellWithFooter,p as LayoutWithPage,n as TopOnly,a as TopWithLeftAndRight,t as TopWithLeftBar,Fe as __namedExportsOrder,Pe as default};
