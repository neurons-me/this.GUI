import{u as t,j as e,M as i,B as d}from"./iframe-6uH7LS29.js";import{Q as o,P as c}from"./RouterSemanticsDemos-BDZvp2g2.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-DCCB32kc.js";import"./Paper-svpWbYa2.js";function r(n){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Router/Router"}),`
`,e.jsx(s.h1,{id:"router",children:"Router"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"this.GUI"})," Router is the navigation kernel that maps paths to specs."]}),`
`,e.jsx(s.p,{children:"Use it when you want:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["exact pages like ",e.jsx(s.code,{children:"/dashboard"})]}),`
`,e.jsxs(s.li,{children:["dynamic routes like ",e.jsx(s.code,{children:"/shops/:id"})]}),`
`,e.jsxs(s.li,{children:["wildcard routes like ",e.jsx(s.code,{children:"/docs/*"})]}),`
`,e.jsxs(s.li,{children:["route-aware runtime context (",e.jsx(s.code,{children:"ctx.params"}),", ",e.jsx(s.code,{children:"ctx.wildcard"}),")"]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"basic-shape",children:"Basic Shape"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`import { Router } from 'this.gui';

const router = new Router({ runtime });
`})}),`
`,e.jsx(s.p,{children:"Then register routes:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`router.set('/dashboard', 'me/views/dashboard/default');
`})}),`
`,e.jsxs(s.p,{children:["If your route points to ",e.jsx(s.code,{children:"me/..."}),", Router delegates to ",e.jsx(s.code,{children:"runtime.resolve(...)"}),` and the runtime returns the final GUI spec.
This is usually the best default-first setup.`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"the-main-forms",children:"The Main Forms"}),`
`,e.jsx(s.p,{children:"You can use the Router in three main ways."}),`
`,e.jsx(s.p,{children:"Recommended first to go: start with Semantic Pointer so route resolution is delegated to your runtime."}),`
`,e.jsx(s.h3,{id:"1-semantic-pointer-recommended-first",children:"1. Semantic Pointer (Recommended First)"}),`
`,e.jsx(s.p,{children:"Good when the route should resolve through your runtime."}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`router.set('/profile', 'me/views/profile/page');
`})}),`
`,e.jsxs(s.p,{children:["If the handler is a string starting with ",e.jsx(s.code,{children:"me/"}),", the Router will ask ",e.jsx(s.code,{children:"runtime.resolve(...)"}),` for the final spec.
This is the handoff point where `,e.jsx(s.code,{children:"this.GUI"})," stops being just a route matcher and starts behaving like a runtime-driven interface system."]}),`
`,e.jsx(s.h3,{id:"2-static-spec",children:"2. Static Spec"}),`
`,e.jsx(s.p,{children:"Good when the route always renders the same screen."}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`router.set('/about', {
  type: 'Page',
  props: { title: 'About' },
  children: [
    { type: 'Typography', props: { children: 'Static route' } },
  ],
});
`})}),`
`,e.jsx(s.h3,{id:"3-route-factory",children:"3. Route Factory"}),`
`,e.jsx(s.p,{children:"Good when the route depends on params, runtime context, or async data."}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`router.set('/shops/:id', ({ ctx }) => ({
  type: 'Page',
  props: {
    title: { read: 'me/views/shops[{{params.id}}].name' },
    subtitle: \`shop id=\${ctx.params.id}\`,
  },
}));
`})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"exact-params-and-wildcards",children:"Exact, Params, And Wildcards"}),`
`,e.jsx(s.p,{children:"These are the three routing patterns you will use most often."}),`
`,e.jsx(s.h3,{id:"exact-route",children:"Exact Route"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`router.set('/dashboard', () => ({
  type: 'Page',
  props: { title: 'Dashboard' },
}));
`})}),`
`,e.jsx(s.h3,{id:"dynamic-params",children:"Dynamic Params"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`router.set('/shops', 'me/views/shops/default/page');

router.set('/shops/:id', ({ ctx }) => ({
  type: 'Page',
  props: {
    title: { read: 'me/views/shops[{{params.id}}].name' },
    subtitle: { read: 'me/views/shops/default/subtitle' },
  },
}));
`})}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"ctx.params.id"}),` is filled automatically from the URL.
Use `,e.jsx(s.code,{children:"/shops"})," as your default route and ",e.jsx(s.code,{children:"/shops/:id"})," as the dynamic specialization."]}),`
`,e.jsx(s.h3,{id:"wildcard-route",children:"Wildcard Route"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`router.set('/docs/*', ({ ctx }) => ({
  type: 'Page',
  props: {
    title: 'Docs',
    subtitle: \`section=\${ctx.wildcard}\`,
  },
}));
`})}),`
`,e.jsxs(s.p,{children:["For wildcard routes, the first ",e.jsx(s.code,{children:"*"})," is exposed as ",e.jsx(s.code,{children:"ctx.wildcard"})," by convention."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"wiring-router-to-gui",children:"Wiring Router To GUI"}),`
`,e.jsx(s.p,{children:"This is the standard pattern."}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`const router = new Router({ runtime });

router.onChange((spec, meta) => {
  GUI.mount(spec, '#root', {
    runtime,
    ctx: meta.ctx,
    showUnknown: true,
  });
});

router.navigate('/dashboard', { push: false });
`})}),`
`,e.jsx(s.p,{children:"Think of it like this:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"Router"})," decides ",e.jsx(s.strong,{children:"what screen"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"GUI.mount(...)"})," decides ",e.jsx(s.strong,{children:"how to render it"})]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"resolve-vs-navigate",children:"Resolve vs Navigate"}),`
`,e.jsx(s.p,{children:"These two methods are related, but they do different jobs."}),`
`,e.jsx(s.h3,{id:"resolvepath-ctx",children:e.jsx(s.code,{children:"resolve(path, ctx?)"})}),`
`,e.jsx(s.p,{children:"Use this when you only want the spec back."}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`const spec = await router.resolve('/dashboard');
`})}),`
`,e.jsxs(s.p,{children:["This does ",e.jsx(s.strong,{children:"not"})," update browser history and does ",e.jsx(s.strong,{children:"not"})," notify listeners."]}),`
`,e.jsx(s.h3,{id:"navigatepath-options",children:e.jsx(s.code,{children:"navigate(path, options?)"})}),`
`,e.jsx(s.p,{children:"Use this when you want actual navigation behavior."}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`await router.navigate('/dashboard', { push: true });
`})}),`
`,e.jsx(s.p,{children:"This:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"resolves the route"}),`
`,e.jsxs(s.li,{children:["updates ",e.jsx(s.code,{children:"currentPath"})]}),`
`,e.jsx(s.li,{children:"optionally pushes browser history"}),`
`,e.jsxs(s.li,{children:["emits ",e.jsx(s.code,{children:"onChange"})," to subscribers"]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"route-context",children:"Route Context"}),`
`,e.jsx(s.p,{children:"Every route handler receives a context object:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`router.set('/example/:id', ({ path, router, runtime, ctx }) => ({
  type: 'Page',
  props: {
    title: \`Current path: \${path}\`,
    subtitle: \`id=\${ctx.params.id}\`,
  },
}));
`})}),`
`,e.jsx(s.p,{children:"Most of the time, the useful parts are:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"ctx.params"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"ctx.wildcard"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"runtime"})}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"url-expression-semantics",children:"URL Expression Semantics"}),`
`,e.jsx(d,{sx:{p:2,my:3,bgcolor:"action.hover",borderRadius:1.5,borderLeft:"4px solid",borderColor:"primary.main"},children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"Pro Tip: Query Expressions"}),e.jsx("br",{}),`
If you pass filters or expressions through URLs, prefer `,e.jsx(s.code,{children:"?expr=..."}),` and always
encode special characters. Raw `,e.jsx(s.code,{children:"&"})," will be interpreted as a query separator."]})}),`
`,e.jsx(s.p,{children:"Good:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-txt",children:`/search?expr=%28a%26%26b%29
`})}),`
`,e.jsx(s.p,{children:"Bad:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-txt",children:`/search?expr=(a&&b)
`})}),`
`,e.jsx(s.p,{children:"If you need the low-level parsing examples, use the advanced semantics story:"}),`
`,e.jsx(o,{}),`
`,e.jsx(s.p,{children:"Use path prefixes when you want URL-safe semantic categories such as users, tags, packages, or query paths."}),`
`,e.jsx(c,{}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"practical-patterns",children:"Practical Patterns"}),`
`,e.jsx(s.p,{children:"Use the Router differently depending on the stage of the app."}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"Prototype phase: static specs"}),`
`,e.jsx(s.li,{children:"Real screens: route factories with params"}),`
`,e.jsx(s.li,{children:"Semantic apps: string pointers resolved through runtime"}),`
`,e.jsx(s.li,{children:"Documentation or docs trees: wildcard routes"}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"rules-of-thumb",children:"Rules Of Thumb"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"Start with exact routes first"}),`
`,e.jsxs(s.li,{children:["Add ",e.jsx(s.code,{children:":params"})," only when screen reuse is real"]}),`
`,e.jsx(s.li,{children:"Use wildcards for trees, docs, or explorers"}),`
`,e.jsxs(s.li,{children:["Use ",e.jsx(s.code,{children:"resolve()"})," for inspection and ",e.jsx(s.code,{children:"navigate()"})," for app flow"]}),`
`,e.jsx(s.li,{children:"Keep route handlers focused on returning specs, not rendering directly"}),`
`]})]})}function u(n={}){const{wrapper:s}={...t(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{u as default};
