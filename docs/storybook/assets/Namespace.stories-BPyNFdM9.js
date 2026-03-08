import{j as e,T as j}from"./iframe-B8RbS7uw.js";import{N as r}from"./Namespace-njUtnFyK.js";import"./preload-helper-Dp1pzeXC.js";import"./Box-Bx62dzkA.js";import"./Box-D8YWJpHP.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./clsx-B-dksMZM.js";import"./Typography-VWwRmWUn.js";import"./Typography-9CeYDXau.js";import"./memoTheme-DOBzPGVq.js";import"./styled-Cw_y6cYg.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";function n(c){return g=>(typeof window<"u"&&window.history.pushState({},"",c),e.jsx(g,{}))}const C={title:"Namespace/Namespace",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
The **Namespace** component is a tiny route resolver used inside the This.GUI layout shell.
It reads the current URL **pathname** and decides which **namespace view** to render.

---
## What it does
- Uses React Router (\`useLocation()\`) to read the current path.
- Displays a simple **Unknown namespace** fallback that reflects the current pathname.
- Useful as a placeholder outlet while namespace routing is being designed.

---
## When to use
- As an internal “outlet” for layout shells that want to map namespaces/paths to organism-level views.
- In Storybook to quickly test how new namespaces resolve without wiring a full app router.

---
## Notes
- These stories assume Storybook (or your app shell) already provides a Router. The story uses \`window.history.pushState\` to simulate navigation.
`}}}};function i({children:c}){return e.jsx(j,{children:e.jsx("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column"},children:c})})}const s={decorators:[n("/")],render:()=>e.jsx(i,{children:e.jsx(r,{})})},a={decorators:[n("/visor")],render:()=>e.jsx(i,{children:e.jsx(r,{})})},o={name:"Visor (deep path)",decorators:[n("/visor/room/AB12CD")],render:()=>e.jsx(i,{children:e.jsx(r,{})})},t={decorators:[n("/something/else")],render:()=>e.jsx(i,{children:e.jsx(r,{})})};var p,m,l;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  decorators: [withPath("/")],
  render: () => <Shell>
      <Namespace />
    </Shell>
}`,...(l=(m=s.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,h,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  decorators: [withPath("/visor")],
  render: () => <Shell>
      <Namespace />
    </Shell>
}`,...(u=(h=a.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var w,N,x;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Visor (deep path)",
  decorators: [withPath("/visor/room/AB12CD")],
  render: () => <Shell>
      <Namespace />
    </Shell>
}`,...(x=(N=o.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};var S,f,y;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  decorators: [withPath("/something/else")],
  render: () => <Shell>
      <Namespace />
    </Shell>
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const E=["RootNamespace","VisorNamespace","VisorNamespaceDeepPath","UnknownNamespace"];export{s as RootNamespace,t as UnknownNamespace,a as VisorNamespace,o as VisorNamespaceDeepPath,E as __namedExportsOrder,C as default};
