import{u as r,j as n,M as i}from"./iframe-ByX3ETbE.js";import"./preload-helper-Dp1pzeXC.js";function t(s){const e={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Getting Started/Runtime"}),`
`,n.jsx(e.h1,{id:"runtime",children:"Runtime"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"this.GUI"})," renders a spec, but ",n.jsx(e.strong,{children:"runtime"}),` decides how data and actions resolve.
You can pass a fully constructed `,n.jsx(e.code,{children:"runtime"}),", or pass a ",n.jsx(e.code,{children:".me"})," instance and let GUI build it for you."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"minimal-no-runtime",children:"Minimal: no runtime"}),`
`,n.jsx(e.p,{children:"Use this when you only need static UI."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`const spec = {
  type: 'Page',
  props: { title: 'Hello GUI' },
  children: [
    { type: 'Button', props: { variant: 'contained', children: 'Click' } },
  ],
};

GUI.mount(spec, '#root');
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"pass-a-runtime-adapter",children:"Pass a runtime adapter"}),`
`,n.jsx(e.p,{children:"Use this when you already have a runtime (custom adapter, router, etc.)."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`const runtime = buildRuntime(/* ... */);

GUI.mount(spec, '#root', { runtime });
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsxs(e.h2,{id:"pass-a-me-instance",children:["Pass a ",n.jsx(e.code,{children:".me"})," instance"]}),`
`,n.jsxs(e.p,{children:["If ",n.jsx(e.code,{children:".me"})," is your runtime, just pass ",n.jsx(e.code,{children:"{ me }"})," and GUI will derive the runtime."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`const me = new ME();

GUI.mount(spec, '#root', { me });
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"when-to-choose-which",children:"When to choose which"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"No runtime"}),": static docs, marketing pages, or mockups."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"runtime"}),": you already have a runtime adapter (router, app state)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"me"}),": your app is driven by ",n.jsx(e.code,{children:".me"})," and you want the cleanest API."]}),`
`]})]})}function a(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{a as default};
