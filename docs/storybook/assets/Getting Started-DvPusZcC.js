import{j as e,T as o}from"./iframe-B8RbS7uw.js";import{useMDXComponents as t}from"./index-Ac9MxjWk.js";import{M as l}from"./blocks-BVTG1tYu.js";import{G as c}from"./GettingStartedHero-DZFPtqDg.js";import{Q as d}from"./RouterSemanticsDemos-CZMbB2f0.js";import{B as r}from"./Box-Bx62dzkA.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CRbWBMRp.js";import"./index-BjD9Kw0B.js";import"./Icon-DMXHGruU.js";import"./clsx-B-dksMZM.js";import"./Typography-VWwRmWUn.js";import"./Typography-9CeYDXau.js";import"./memoTheme-DOBzPGVq.js";import"./styled-Cw_y6cYg.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Stack-C5yTeK_p.js";import"./getThemeProps-CmiYdh08.js";import"./Button-YJ-QaZwY.js";import"./Button-Drobm6OK.js";import"./ButtonBase-CwHsjpic.js";import"./TransitionGroupContext-RnyQTLj3.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./useForkRef-BVrKvtW-.js";import"./useEventCallback-DGVuo8xh.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Dmag3IpP.js";import"./Link-Dl80TlRR.js";import"./useTheme-BwQ1aHS1.js";import"./Paper-B4BytIU3.js";import"./Paper-CQFXOI4Y.js";import"./CodeBlock-Dtmylvco.js";import"./Box-D8YWJpHP.js";function i(s){const n={br:"br",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Getting Started/Quick Start"}),`
`,e.jsx(o,{children:e.jsxs(r,{component:"section",sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"44vh",py:4,textAlign:"center"},children:[e.jsx(c,{}),e.jsx(r,{sx:{width:"min(100%, 720px)",mt:4,borderBottom:"1px solid",borderColor:"divider",opacity:.45}})]})}),`
`,e.jsxs(r,{sx:{maxWidth:"960px",mx:"auto",px:{xs:2,md:3},pt:3},children:[e.jsx(n.h1,{id:"start-here-runtime-not-widgets",children:"Start Here: Runtime, Not Widgets"}),e.jsxs(n.p,{children:[e.jsx(n.code,{children:"this.GUI"})," is not only a component catalog.",e.jsx(n.br,{}),`
`,"It is a declarative runtime with three layers:"]}),e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Body (",e.jsx(n.code,{children:"this.GUI"}),")"]}),": agnostic recursive renderer."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Nervous System (",e.jsx(n.code,{children:"$expr"})," / ",e.jsx(n.code,{children:"$action"}),")"]}),": serializable protocol."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Brain (",e.jsx(n.code,{children:"runtime"}),", optional ",e.jsx(n.code,{children:".me"}),")"]}),": expression resolution and mutations."]}),`
`]}),e.jsx(n.h2,{id:"mental-model",children:"Mental Model"}),e.jsxs(n.p,{children:["You can run ",e.jsx(n.code,{children:"this.GUI"})," in two modes:"]}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"JS-Only mode"}),": plain functions and local state."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Data-Driven mode"}),": dynamic tokens resolved by runtime (",e.jsx(n.code,{children:"$expr"}),", ",e.jsx(n.code,{children:"$action"}),")."]}),`
`]}),e.jsx(n.p,{children:"The same spec can evolve from local UI to data-driven app without rewriting components."}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"first-gui",children:"First GUI"}),e.jsx(n.p,{children:"Start with a tiny spec and mount it."}),e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Page"})," here is a built-in ",e.jsx(n.code,{children:"this.GUI"})," node, so you can use it directly without registering it yourself."]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const spec = {
  type: 'Page',
  props: {
    title: 'Hello GUI',
    subtitle: 'Your first rendered screen',
  },
  children: [
    {
      type: 'Button',
      props: {
        variant: 'contained',
        label: 'Click me',
      },
    },
  ],
};

GUI.mount(spec, '#root');
`})}),e.jsx(n.p,{children:"That already gives you:"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"a page shell"}),`
`,e.jsx(n.li,{children:"a heading"}),`
`,e.jsx(n.li,{children:"a working button"}),`
`]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"compose-with-children",children:"Compose With Children"}),e.jsx(n.p,{children:"Everything is just nested nodes."}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "type": "Paper",
  "props": { "sx": { "p": 2, "borderRadius": 2 } },
  "children": [
    {
      "type": "Typography",
      "props": { "variant": "h5", "children": "Profile" }
    },
    {
      "type": "Typography",
      "props": { "variant": "body2", "children": "Status: active" }
    },
    {
      "type": "Button",
      "props": { "label": "Edit", "variant": "outlined" }
    }
  ]
}
`})}),e.jsx(n.p,{children:"Think in blocks:"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"layout containers"}),`
`,e.jsx(n.li,{children:"content nodes"}),`
`,e.jsx(n.li,{children:"actions"}),`
`]}),e.jsx(n.hr,{}),e.jsx(n.p,{children:"For those blocks to come alive, they need a contract with the runtime."}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"runtime-contract-minimal",children:"Runtime Contract (Minimal)"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const runtime = {
  resolve(value, ctx) {
    // read expression -> value
    return value;
  },
  action(expression, ctx) {
    // expression -> executable callback
    return () => {};
  },
};
`})}),e.jsx(n.p,{children:"Use with mount:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`GUI.mount(spec, '#root', { runtime, ctx });
`})}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"make-it-dynamic",children:"Make It Dynamic"}),e.jsx(n.p,{children:"Once you want live data, switch props from literals to tokens."}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "type": "Typography",
  "props": {
    "variant": "body1",
    "children": { "$expr": "me/public/profile/name" }
  }
}
`})}),e.jsx(n.p,{children:"And for mutations:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "type": "Button",
  "props": {
    "label": "Set active",
    "onClick": { "$action": "me/public/profile/status = 'active'" }
  }
}
`})}),e.jsx(n.p,{children:"This is the core idea:"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"static prop -> fixed UI"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$expr"})," -> read data"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$action"})," -> mutate data"]}),`
`]}),e.jsx(n.hr,{}),e.jsxs(n.h2,{id:"dynamic-props-with-tokens",children:["Dynamic Props with ",e.jsx(n.code,{children:"$Tokens"})]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "type": "Button",
  "props": {
    "label": { "$expr": "me/public/profile/name" },
    "onClick": { "$action": "me/public/profile/status = 'active'" }
  }
}
`})}),e.jsx(n.p,{children:"What happens:"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$expr"})," is resolved before render."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$action"})," is hydrated into a callback."]}),`
`,e.jsx(n.li,{children:"If runtime is missing, GUI falls back safely (no crash)."}),`
`]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"routes-and-params",children:"Routes And Params"}),e.jsxs(n.p,{children:["When you add routes like ",e.jsx(n.code,{children:"/shops/:id"}),", the router places route params into ",e.jsx(n.code,{children:"ctx.params"}),"."]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`router.set('/shops/:id', ({ ctx }) => ({
  type: 'Page',
  props: {
    // Inside $expr, {{...}} injects route/context values into the expression string.
    title: { $expr: 'me/views/shops[{{params.id}}].name' },
  },
}));
`})}),e.jsx(n.p,{children:"That lets one screen template render many records."}),e.jsx(d,{}),e.jsx(n.hr,{}),e.jsx(r,{sx:{p:2,my:3,bgcolor:"action.hover",borderRadius:1.5,borderLeft:"4px solid",borderColor:"primary.main"},children:e.jsxs(n.p,{children:[e.jsx("strong",{children:"Pro Tip: URL Expression Semantics"}),e.jsx("br",{}),`
When passing expressions via query strings such as `,e.jsx(n.code,{children:"?expr=..."}),`, encode special
characters so separators like `,e.jsx(n.code,{children:"&"})," and ",e.jsx(n.code,{children:"="})," do not break runtime parsing."]})}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"typical-build-order",children:"Typical Build Order"}),e.jsx(n.p,{children:"If you are building a screen from scratch, this order works well:"}),e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Start with layout"}),": ",e.jsx(n.code,{children:"Page"}),", ",e.jsx(n.code,{children:"Box"}),", ",e.jsx(n.code,{children:"Paper"}),", ",e.jsx(n.code,{children:"Stack"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Add content"}),": ",e.jsx(n.code,{children:"Typography"}),", headings, labels"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Insert interactive nodes"}),": ",e.jsx(n.code,{children:"Button"}),", ",e.jsx(n.code,{children:"TextField"}),", tables, cards"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Replace literals"})," with ",e.jsx(n.code,{children:"$expr"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Hydrate callbacks"})," with ",e.jsx(n.code,{children:"$action"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Connect routes"})," once the static UI already works"]}),`
`]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"security-by-default",children:"Security by Default"}),e.jsx(n.p,{children:"Expression resolution is allowlisted by default:"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"me/views/"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"me/public/"})}),`
`]}),e.jsx(n.p,{children:"You can extend:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`GUI.mount(spec, '#root', {
  runtime,
  allowedExprRoots: ['me/views/', 'me/public/', 'me/app/'],
});
`})}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"inspectors-not-starters",children:"Inspectors, Not Starters"}),e.jsx(n.p,{children:"These stories are useful when debugging theme/runtime internals, not when learning how to assemble a screen:"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"current theme state"}),`
`,e.jsx(n.li,{children:"palette inspector"}),`
`,e.jsx(n.li,{children:"typography inspector"}),`
`]}),e.jsx(n.p,{children:"Use them only if you need to verify resolved values while developing the system."}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"practical-note",children:"Practical Note"}),e.jsx(n.p,{children:"If you want the ultra-minimal plain-HTML bootstrap, use:"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"/html/bootstrap.local.html"})}),`
`]}),e.jsxs(n.p,{children:["That file demonstrates ",e.jsx(n.code,{children:".me + this.GUI"})," end-to-end with runtime tokens."]})]})]})}function Q(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{Q as default};
