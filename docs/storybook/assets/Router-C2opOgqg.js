import{j as e}from"./iframe-B8RbS7uw.js";import{useMDXComponents as t}from"./index-Ac9MxjWk.js";import{M as i}from"./blocks-BVTG1tYu.js";import{Q as o,P as c}from"./RouterSemanticsDemos-CZMbB2f0.js";import{B as a}from"./Box-Bx62dzkA.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CRbWBMRp.js";import"./index-BjD9Kw0B.js";import"./Paper-B4BytIU3.js";import"./Paper-CQFXOI4Y.js";import"./clsx-B-dksMZM.js";import"./useTheme-BwQ1aHS1.js";import"./styled-Cw_y6cYg.js";import"./memoTheme-DOBzPGVq.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Typography-VWwRmWUn.js";import"./Typography-9CeYDXau.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CodeBlock-Dtmylvco.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./Box-D8YWJpHP.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Router/Router"}),`
`,e.jsx(n.h1,{id:"router",children:"Router"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"this.GUI"})," Router is the navigation kernel that maps paths to specs."]}),`
`,e.jsx(n.p,{children:"Use it when you want:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["exact pages like ",e.jsx(n.code,{children:"/dashboard"})]}),`
`,e.jsxs(n.li,{children:["dynamic routes like ",e.jsx(n.code,{children:"/shops/:id"})]}),`
`,e.jsxs(n.li,{children:["wildcard routes like ",e.jsx(n.code,{children:"/docs/*"})]}),`
`,e.jsxs(n.li,{children:["route-aware runtime context (",e.jsx(n.code,{children:"ctx.params"}),", ",e.jsx(n.code,{children:"ctx.wildcard"}),")"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"basic-shape",children:"Basic Shape"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { Router } from 'this.gui';

const router = new Router({ runtime });
`})}),`
`,e.jsx(n.p,{children:"Then register routes:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`router.set('/dashboard', () => ({
  type: 'Page',
  props: { title: 'Dashboard' },
}));
`})}),`
`,e.jsx(n.p,{children:"The handler returns a GUI spec. That spec is what you later mount."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"the-main-forms",children:"The Main Forms"}),`
`,e.jsx(n.p,{children:"You can use the Router in three main ways."}),`
`,e.jsx(n.h3,{id:"1-static-spec",children:"1. Static Spec"}),`
`,e.jsx(n.p,{children:"Good when the route always renders the same screen."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`router.set('/about', {
  type: 'Page',
  props: { title: 'About' },
  children: [
    { type: 'Typography', props: { children: 'Static route' } },
  ],
});
`})}),`
`,e.jsx(n.h3,{id:"2-route-factory",children:"2. Route Factory"}),`
`,e.jsx(n.p,{children:"Good when the route depends on params, runtime context, or async data."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`router.set('/shops/:id', ({ ctx }) => ({
  type: 'Page',
  props: {
    title: { $expr: 'me/views/shops[{{params.id}}].name' },
    subtitle: \`shop id=\${ctx.params.id}\`,
  },
}));
`})}),`
`,e.jsx(n.h3,{id:"3-semantic-pointer",children:"3. Semantic Pointer"}),`
`,e.jsx(n.p,{children:"Good when the route should resolve through your runtime."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`router.set('/profile', 'me/views/profile/page');
`})}),`
`,e.jsxs(n.p,{children:["If the handler is a string starting with ",e.jsx(n.code,{children:"me/"}),", the Router will ask ",e.jsx(n.code,{children:"runtime.resolve(...)"}),` for the final spec.
This is the handoff point where `,e.jsx(n.code,{children:"this.GUI"})," stops being just a route matcher and starts behaving like a runtime-driven interface system."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"exact-params-and-wildcards",children:"Exact, Params, And Wildcards"}),`
`,e.jsx(n.p,{children:"These are the three routing patterns you will use most often."}),`
`,e.jsx(n.h3,{id:"exact-route",children:"Exact Route"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`router.set('/dashboard', () => ({
  type: 'Page',
  props: { title: 'Dashboard' },
}));
`})}),`
`,e.jsx(n.h3,{id:"dynamic-params",children:"Dynamic Params"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`router.set('/shops/:id', ({ ctx }) => ({
  type: 'Page',
  props: {
    title: { $expr: 'me/views/shops[{{params.id}}].name' },
  },
}));
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ctx.params.id"})," is filled automatically from the URL."]}),`
`,e.jsx(n.h3,{id:"wildcard-route",children:"Wildcard Route"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`router.set('/docs/*', ({ ctx }) => ({
  type: 'Page',
  props: {
    title: 'Docs',
    subtitle: \`section=\${ctx.wildcard}\`,
  },
}));
`})}),`
`,e.jsxs(n.p,{children:["For wildcard routes, the first ",e.jsx(n.code,{children:"*"})," is exposed as ",e.jsx(n.code,{children:"ctx.wildcard"})," by convention."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"wiring-router-to-gui",children:"Wiring Router To GUI"}),`
`,e.jsx(n.p,{children:"This is the standard pattern."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const router = new Router({ runtime });

router.onChange((spec, meta) => {
  GUI.mount(spec, '#root', {
    runtime,
    ctx: meta.ctx,
    showUnknown: true,
  });
});

router.navigate('/dashboard', { push: false });
`})}),`
`,e.jsx(n.p,{children:"Think of it like this:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Router"})," decides ",e.jsx(n.strong,{children:"what screen"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"GUI.mount(...)"})," decides ",e.jsx(n.strong,{children:"how to render it"})]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"resolve-vs-navigate",children:"Resolve vs Navigate"}),`
`,e.jsx(n.p,{children:"These two methods are related, but they do different jobs."}),`
`,e.jsx(n.h3,{id:"resolvepath-ctx",children:e.jsx(n.code,{children:"resolve(path, ctx?)"})}),`
`,e.jsx(n.p,{children:"Use this when you only want the spec back."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const spec = await router.resolve('/dashboard');
`})}),`
`,e.jsxs(n.p,{children:["This does ",e.jsx(n.strong,{children:"not"})," update browser history and does ",e.jsx(n.strong,{children:"not"})," notify listeners."]}),`
`,e.jsx(n.h3,{id:"navigatepath-options",children:e.jsx(n.code,{children:"navigate(path, options?)"})}),`
`,e.jsx(n.p,{children:"Use this when you want actual navigation behavior."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`await router.navigate('/dashboard', { push: true });
`})}),`
`,e.jsx(n.p,{children:"This:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"resolves the route"}),`
`,e.jsxs(n.li,{children:["updates ",e.jsx(n.code,{children:"currentPath"})]}),`
`,e.jsx(n.li,{children:"optionally pushes browser history"}),`
`,e.jsxs(n.li,{children:["emits ",e.jsx(n.code,{children:"onChange"})," to subscribers"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"route-context",children:"Route Context"}),`
`,e.jsx(n.p,{children:"Every route handler receives a context object:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`router.set('/example/:id', ({ path, router, runtime, ctx }) => ({
  type: 'Page',
  props: {
    title: \`Current path: \${path}\`,
    subtitle: \`id=\${ctx.params.id}\`,
  },
}));
`})}),`
`,e.jsx(n.p,{children:"Most of the time, the useful parts are:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"ctx.params"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"ctx.wildcard"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"runtime"})}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"url-expression-semantics",children:"URL Expression Semantics"}),`
`,e.jsx(a,{sx:{p:2,my:3,bgcolor:"action.hover",borderRadius:1.5,borderLeft:"4px solid",borderColor:"primary.main"},children:e.jsxs(n.p,{children:[e.jsx("strong",{children:"Pro Tip: Query Expressions"}),e.jsx("br",{}),`
If you pass filters or expressions through URLs, prefer `,e.jsx(n.code,{children:"?expr=..."}),` and always
encode special characters. Raw `,e.jsx(n.code,{children:"&"})," will be interpreted as a query separator."]})}),`
`,e.jsx(n.p,{children:"Good:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`/search?expr=%28a%26%26b%29
`})}),`
`,e.jsx(n.p,{children:"Bad:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`/search?expr=(a&&b)
`})}),`
`,e.jsx(n.p,{children:"If you need the low-level parsing examples, use the advanced semantics story:"}),`
`,e.jsx(o,{}),`
`,e.jsx(n.p,{children:"Use path prefixes when you want URL-safe semantic categories such as users, tags, packages, or query paths."}),`
`,e.jsx(c,{}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"practical-patterns",children:"Practical Patterns"}),`
`,e.jsx(n.p,{children:"Use the Router differently depending on the stage of the app."}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Prototype phase: static specs"}),`
`,e.jsx(n.li,{children:"Real screens: route factories with params"}),`
`,e.jsx(n.li,{children:"Semantic apps: string pointers resolved through runtime"}),`
`,e.jsx(n.li,{children:"Documentation or docs trees: wildcard routes"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"rules-of-thumb",children:"Rules Of Thumb"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Start with exact routes first"}),`
`,e.jsxs(n.li,{children:["Add ",e.jsx(n.code,{children:":params"})," only when screen reuse is real"]}),`
`,e.jsx(n.li,{children:"Use wildcards for trees, docs, or explorers"}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"resolve()"})," for inspection and ",e.jsx(n.code,{children:"navigate()"})," for app flow"]}),`
`,e.jsx(n.li,{children:"Keep route handlers focused on returning specs, not rendering directly"}),`
`]})]})}function G(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{G as default};
