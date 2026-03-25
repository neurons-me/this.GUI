import{j as a,B as w,a as V}from"./iframe-C2qc3tsM.js";import{L as T}from"./Layout-B05cDmQd.js";import"./preload-helper-Dp1pzeXC.js";import"./useInsets-BsZonhqK.js";import"./TopBar-B8BBjC3m.js";import"./Icon-CRJpytTc.js";import"./Menu-DnIPfH50.js";import"./useSlot-BKl4lqb4.js";import"./useForkRef-DZ9CAFXo.js";import"./Grow-CCaMo6px.js";import"./utils-IgnIQ_tD.js";import"./TransitionGroupContext-BNvVfOmo.js";import"./Portal-D6dhm6sE.js";import"./List-2dnqbVht.js";import"./ListContext-fgpz-hEu.js";import"./Paper-WjnWTzrc.js";import"./Modal-BHgPgx7J.js";import"./useEventCallback-2h9sExm_.js";import"./mergeSlotProps-DSSfby9E.js";import"./MenuItem-vVOGqkQM.js";import"./ButtonBase-kILz3eVI.js";import"./listItemIconClasses-BtlsS6X9.js";import"./listItemTextClasses-DrG8Si_u.js";import"./dividerClasses-B12j9aVk.js";import"./index-DRZUGXX2.js";import"./useGuiMediaQuery-cHnHaPCM.js";import"./getThemeProps-DGpb-X_S.js";import"./Avatar-CUoaqVvz.js";import"./createSvgIcon-CktXYvY9.js";import"./Toolbar-D3qbPdSr.js";import"./Tooltip-B5FHKPAp.js";import"./useControlled-KSDT35UP.js";import"./Collapse-rvt7uJv0.js";import"./IconButton-DspnzSIW.js";import"./CircularProgress-BusGmrh4.js";import"./Drawer-Xg5B0UWZ.js";import"./Avatar-CNPpqMUV.js";import"./Toolbar-CL0z7POe.js";const de={title:"GUI/Layout/Content",component:T,parameters:{layout:"fullscreen"}},E=({text:s})=>a.jsx(w,{sx:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"background.default",color:"text.primary"},children:a.jsx(V,{variant:"h4",children:s})}),e=s=>a.jsx(T,{...s,children:a.jsx(E,{text:"This is the Content area"})}),r={render:e,args:{topBarConfig:!1,leftSidebarConfig:!1,rightSidebarConfig:!1,footerConfig:!1}},i={render:e,args:{topBarConfig:{title:"Top Bar Example"}}},t={render:e,args:{leftSidebarConfig:{initialView:"expanded"},rightSidebarConfig:{initialView:"expanded"}}},n={render:e,args:{topBarConfig:{title:"Top Bar Example"},leftSidebarConfig:{initialView:"rail"},rightSidebarConfig:{initialView:"expanded"}}},o={render:e,args:{topBarConfig:{title:"Full Layout"},leftSidebarConfig:{initialView:"rail"},rightSidebarConfig:{initialView:"rail"},footerConfig:{brandLabel:"neurons.me",position:"static",leftElements:[{type:"link",props:{label:"Docs",href:"/docs"}}],rightElements:[{type:"link",props:{label:"GitHub",href:"https://github.com/neurons-me"}}]}}};var p,l,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: Template,
  args: {
    topBarConfig: false,
    leftSidebarConfig: false,
    rightSidebarConfig: false,
    footerConfig: false
  }
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,f,g;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: Template,
  args: {
    topBarConfig: {
      title: 'Top Bar Example'
    }
  }
}`,...(g=(f=i.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var c,u,b;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: Template,
  args: {
    leftSidebarConfig: {
      initialView: 'expanded'
    },
    rightSidebarConfig: {
      initialView: 'expanded'
    }
  }
}`,...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var C,h,S;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: Template,
  args: {
    topBarConfig: {
      title: 'Top Bar Example'
    },
    leftSidebarConfig: {
      initialView: 'rail'
    },
    rightSidebarConfig: {
      initialView: 'expanded'
    }
  }
}`,...(S=(h=n.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var x,y,B;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: Template,
  args: {
    topBarConfig: {
      title: 'Full Layout'
    },
    leftSidebarConfig: {
      initialView: 'rail'
    },
    rightSidebarConfig: {
      initialView: 'rail'
    },
    footerConfig: {
      brandLabel: 'neurons.me',
      position: 'static',
      leftElements: [{
        type: 'link',
        props: {
          label: 'Docs',
          href: '/docs'
        }
      }],
      rightElements: [{
        type: 'link',
        props: {
          label: 'GitHub',
          href: 'https://github.com/neurons-me'
        }
      }]
    }
  }
}`,...(B=(y=o.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};const fe=["OnlyContent","WithTopBar","WithSidebars","WithTopBarAndSidebars","FullLayout"];export{o as FullLayout,r as OnlyContent,t as WithSidebars,i as WithTopBar,n as WithTopBarAndSidebars,fe as __namedExportsOrder,de as default};
