import{j as e}from"./iframe-C1GRP0hj.js";import{L as c}from"./Layout-D_GzFb6q.js";import{P as F}from"./Page-DAkV6Uig.js";import{T as A}from"./ToggleMode-BNXE-GBS.js";import{B as r}from"./Box-VzSXm9Df.js";import{T as o}from"./Typography-C12rh2ix.js";import"./preload-helper-Dp1pzeXC.js";import"./useInsets-CCla-Zan.js";import"./useGuiTheme-D36Os2VD.js";import"./useTheme-CCB-ESoo.js";import"./TopBar-DIs4mLM7.js";import"./Link-BhgdegEP.js";import"./clsx-B-dksMZM.js";import"./styled-8fWbaqUV.js";import"./memoTheme-q_hzTFOc.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Typography-CeTjeXIp.js";import"./isFocusVisible-B8k4qzLc.js";import"./Icon-K6w2oQgw.js";import"./Menu-BzhukQWv.js";import"./useSlot-CKSjisIe.js";import"./useForkRef-BhU-CSAb.js";import"./Grow-D_K8rWid.js";import"./utils--q6FxFGJ.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./TransitionGroupContext-qNdRr-hk.js";import"./index-DyzKfLlg.js";import"./index-Be--jnHL.js";import"./Portal-G2dvxw46.js";import"./List-CQGWwlqq.js";import"./ListContext-Bpm4Q4ce.js";import"./Paper-DxQ0_Ivm.js";import"./Modal-BWGIaPdl.js";import"./useEventCallback-Bs6yfZ5k.js";import"./mergeSlotProps-By6iUkp4.js";import"./MenuItem-BxvuRwOv.js";import"./ButtonBase-rOZxXEMH.js";import"./listItemIconClasses-CpxGA8ew.js";import"./listItemTextClasses-CbyehWdQ.js";import"./dividerClasses-yCLEuapk.js";import"./index-OzLNYajA.js";import"./useGuiMediaQuery-r_7asRKw.js";import"./getThemeProps-CqN2UaJz.js";import"./Box-C7pz1-Z6.js";import"./Avatar-BighDsha.js";import"./createSvgIcon-C_EqHwxV.js";import"./Toolbar-BM_zttvx.js";import"./Tooltip-DEv4E9za.js";import"./useControlled-C5BOGgFW.js";import"./Collapse-QvAR5_zn.js";import"./IconButton-Cgo9HMnL.js";import"./CircularProgress-B-nFzJrp.js";import"./Drawer-CuEDgmxW.js";import"./Avatar-CJus_FWz.js";import"./Toolbar-3vHmmoFT.js";import"./Catalog-CXhpFMrS.js";import"./Grid-DDQ3w6Xg.js";import"./Card-D7TD3LSD.js";import"./CardHeader-WoLQsJgw.js";import"./CardContent-DFpFxUGy.js";import"./CardActions-B6ArFgrq.js";import"./Switch-f8c9fVix.js";import"./useFormControl-Cjj0OCnf.js";import"./IconButton-Dr2rgWnv.js";const qe={title:"GUI/Layout",component:c,tags:["autodocs"],parameters:{docs:{description:{component:`
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
      "brandLabel": "Neuroverse",
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
`}}},argTypes:{TopBar:{control:"object"},LeftBar:{control:"object"},RightBar:{control:"object"},Footer:{control:"object"}}},i=W=>e.jsx(c,{...W,children:e.jsxs(r,{sx:{minHeight:"120vh",p:3,display:"flex",flexDirection:"column",gap:2},children:[e.jsx(o,{variant:"h5",sx:{fontWeight:700},children:"Responsive Layout Demo"}),e.jsx(o,{variant:"body2",color:"text.secondary",sx:{maxWidth:720},children:"Resize the viewport or toggle sidebars to observe how insets are coordinated. This content is intentionally tall to show how fixed bars interact with scrolling."}),e.jsxs(r,{sx:{mt:1,display:"grid",gridTemplateColumns:{xs:"1fr",sm:"repeat(2, minmax(0, 1fr))",lg:"repeat(3, minmax(0, 1fr))"},gap:2},children:[e.jsxs(r,{sx:{p:2,borderRadius:2,border:"1px solid",borderColor:"divider",bgcolor:"background.paper"},children:[e.jsx(o,{variant:"subtitle2",sx:{fontWeight:700,mb:.5},children:"Insets-aware"}),e.jsx(o,{variant:"caption",color:"text.secondary",children:"This block uses theme tokens and lets Layout/Content handle spacing."})]}),e.jsxs(r,{sx:{p:2,borderRadius:2,border:"1px solid",borderColor:"divider",bgcolor:"background.paper"},children:[e.jsx(o,{variant:"subtitle2",sx:{fontWeight:700,mb:.5},children:"Sidebar coordination"}),e.jsx(o,{variant:"caption",color:"text.secondary",children:"Expand/collapse sidebars and confirm content stays aligned."})]}),e.jsxs(r,{sx:{p:2,borderRadius:2,border:"1px solid",borderColor:"divider",bgcolor:"background.paper"},children:[e.jsx(o,{variant:"subtitle2",sx:{fontWeight:700,mb:.5},children:"Scroll behavior"}),e.jsx(o,{variant:"caption",color:"text.secondary",children:"Layout keeps the main area scrollable without manual padding hacks."})]})]}),e.jsx(r,{sx:{mt:2},children:Array.from({length:18}).map((S,m)=>e.jsxs(o,{variant:"body2",color:"text.secondary",sx:{mb:1},children:["Row ",m+1," — filler content to demonstrate scrolling within the Layout content area."]},m))})]})}),t={render:i,args:{TopBar:{title:"Neuroverse",elementsRight:[{type:"action",props:{element:e.jsx(A,{variant:"minimal",show:"icons",iconSize:"small"})}}]},LeftBar:!1,RightBar:!1,Footer:!1}},n={render:i,args:{...t.args,LeftBar:{elements:[{type:"link",props:{label:"Overview",icon:"dashboard"}},{type:"menu",props:{label:"Projects",icon:"folder",items:[{label:"Project Alpha",icon:"work"},{label:"Project Beta",icon:"assignment"}]}}],footerElements:[{type:"link",props:{label:"Settings",icon:"settings"}}]}}},a={render:i,args:{...n.args,RightBar:{elements:[{type:"link",props:{label:"Activity",icon:"history"}},{type:"action",props:{label:"Export",icon:"download"}}]}}},s={render:i,args:{...a.args,Footer:{brandLabel:"Neuroverse",brandLogo:"https://neurons.me/neurons.me.png",centerElements:[{type:"link",props:{label:"Docs",href:"/docs",icon:"menu_book",iconColor:"var(--gui-primary)"}},{type:"link",props:{label:"API",href:"/api",icon:"code",iconColor:"var(--gui-secondary)"}}],rightElements:[{type:"link",props:{label:"Community",href:"https://community.neuroverse.ai",icon:"forum",iconColor:"var(--gui-info)",external:!0}},{type:"link",props:{label:"GitHub",href:"https://github.com",icon:"code",iconColor:"var(--gui-warning)",external:!0}}],position:"fixed"}}},p={render:i,args:{TopBar:!1,LeftBar:!1,RightBar:!1,Footer:!1}},l={render:()=>e.jsx(c,{TopBar:{title:"Neuroverse Workspace"},LeftBar:{elements:[{type:"link",props:{label:"Home",icon:"home"}},{type:"link",props:{label:"Analytics",icon:"insights"}}]},RightBar:{elements:[{type:"link",props:{label:"Chat",icon:"chat"}}]},Footer:{brandLabel:"Neuroverse",centerElements:[{type:"link",props:{label:"Docs",icon:"menu_book"}}]},children:e.jsxs(F,{padding:4,children:[e.jsx(o,{variant:"h5",sx:{fontWeight:700,mb:2},children:"Page inside Layout"}),e.jsx(o,{variant:"body2",color:"text.secondary",sx:{maxWidth:720},children:"This example shows how a Page component can be used inside the responsive Layout, automatically adapting to inset updates from the TopBar, sidebars, and Footer."})]})})};var d,h,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: Template,
  args: {
    TopBar: {
      title: "Neuroverse",
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
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var u,b,y;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(y=(b=n.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var f,x,v;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(v=(x=a.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var T,B,k;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...TopWithLeftAndRight.args,
    Footer: {
      brandLabel: "Neuroverse",
      brandLogo: "https://neurons.me/neurons.me.png",
      centerElements: [{
        type: "link",
        props: {
          label: "Docs",
          href: "/docs",
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
          href: "https://community.neuroverse.ai",
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
}`,...(k=(B=s.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var L,j,w;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: Template,
  args: {
    TopBar: false,
    LeftBar: false,
    RightBar: false,
    Footer: false
  }
}`,...(w=(j=p.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var R,C,P;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Layout TopBar={{
    title: 'Neuroverse Workspace'
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
    brandLabel: 'Neuroverse',
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
}`,...(P=(C=l.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};const Je=["TopOnly","TopWithLeftBar","TopWithLeftAndRight","FullShellWithFooter","ContentOnly","LayoutWithPage"];export{p as ContentOnly,s as FullShellWithFooter,l as LayoutWithPage,t as TopOnly,a as TopWithLeftAndRight,n as TopWithLeftBar,Je as __namedExportsOrder,qe as default};
