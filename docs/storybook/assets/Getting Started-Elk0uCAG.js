import{j as e,B as r,a as i,u as l,M as d,T as a}from"./iframe-8EaQ1C0g.js";import{B as h}from"./Button-Ck1yJXlA.js";import"./Paper-qkABWcDk.js";import{S as x}from"./Stack-w3FurTvB.js";import{Q as p}from"./RouterSemanticsDemos-Dc1YsBi3.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-DOcDJgdS.js";import"./Button-CqN9UM-9.js";import"./ButtonBase-DnuzHV0k.js";import"./TransitionGroupContext-BDq06VYZ.js";import"./useForkRef-B_8DPUN9.js";import"./CircularProgress-CF5CFykq.js";import"./Paper-Cnfm5CEA.js";import"./getThemeProps-Cnx6th0B.js";function o(){return e.jsx(e.Fragment,{children:e.jsxs(r,{sx:{color:"text.primary"},children:[e.jsx("img",{src:"GUI.png",alt:"This.GUI",style:{width:"320px",height:"auto",imageRendering:"auto",marginBottom:"14px"}}),e.jsx(i,{variant:"h1",sx:{fontWeight:700,letterSpacing:"-0.04em",mb:1,color:"text.primary"},children:".GUI"}),e.jsx(i,{variant:"h5",sx:{fontWeight:500,opacity:1,mb:2,color:"text.primary"},children:"Generative User Interfaces."})]})})}o.__docgenInfo={description:"",methods:[],displayName:"GUIHero"};function c(){return e.jsxs(r,{sx:{mt:2,p:2,border:"1px solid",borderColor:"divider",borderRadius:2,backgroundColor:"background.paper"},children:[e.jsx(i,{variant:"subtitle2",sx:{mb:1,opacity:.78},children:"Rendered output"}),e.jsx(r,{sx:{p:2,borderRadius:2,backgroundColor:"background.default",color:"text.primary"},children:e.jsxs(x,{spacing:1.5,alignItems:"flex-start",children:[e.jsxs(r,{children:[e.jsx(i,{variant:"h4",sx:{fontWeight:700,mb:.5,color:"text.primary"},children:"Hello GUI"}),e.jsx(i,{variant:"body1",sx:{color:"text.primary"},children:"Your first rendered screen"})]}),e.jsx(h,{variant:"contained",children:"Click me"})]})})]})}c.__docgenInfo={description:"",methods:[],displayName:"FirstGuiPreview"};function t(s){const n={br:"br",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Getting Started/Quick Start"}),`
`,e.jsx(a,{children:e.jsxs(r,{component:"section",sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"44vh",py:4,textAlign:"center"},children:[e.jsx(o,{}),e.jsx(r,{sx:{width:"min(100%, 720px)",mt:4,borderBottom:"1px solid",borderColor:"divider",opacity:.45}})]})}),`
`,e.jsxs(r,{sx:{maxWidth:"960px",mx:"auto",px:{xs:2,md:3},pt:3},children:[e.jsx(n.h1,{id:"start-here",children:"Start Here:"}),e.jsxs(n.p,{children:[`Welcome to .GUI's storybook!
Explore the components and tools that make up the .GUI ecosystem, and see how they can help you build powerful generative user interfaces with ease.
`,e.jsx(n.code,{children:"this.GUI"})," is a UI framework built around three core concepts:"]}),e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["UI spec (",e.jsx(n.code,{children:"this.GUI"}),")"]}),": you describe the screen as data: pages, cards, text, buttons, sidebars, and children."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Dynamic read/write tokens (",e.jsx(n.code,{children:"read"})," / ",e.jsx(n.code,{children:"write"}),")"]}),': instead of hardcoding everything, you can say "read this value" or "run this mutation" in a serializable way.',e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"this.GUI"})," also accepts the legacy aliases ",e.jsx(n.code,{children:"$expr"})," / ",e.jsx(n.code,{children:"$action"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Runtime (",e.jsx(n.code,{children:"runtime"}),", optional ",e.jsx(n.code,{children:".me"}),")"]}),": the host decides how those reads and writes actually work, for example by resolving profile data, route params, or backend mutations."]}),`
`]}),e.jsx(n.p,{children:"In plain terms:"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"this.GUI"})," defines ",e.jsx(n.strong,{children:"what to render"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"read"})," and ",e.jsx(n.code,{children:"write"})," define ",e.jsx(n.strong,{children:"what should be dynamic"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"runtime"})," defines ",e.jsx(n.strong,{children:"where the data comes from and what actions do"})]}),`
`]}),e.jsx(n.h2,{id:"mental-model",children:"Mental Model"}),e.jsxs(n.p,{children:["You can run ",e.jsx(n.code,{children:"this.GUI"})," in two modes:"]}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"JS-Only mode"}),": plain functions and local state."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Data-Driven mode"}),": dynamic tokens resolved by runtime (",e.jsx(n.code,{children:"read"}),", ",e.jsx(n.code,{children:"write"}),`).
The same spec can evolve from local UI to data-driven app without rewriting components.`]}),`
`]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"first-gui",children:"First GUI"}),e.jsxs(n.p,{children:[`Start with a tiny spec and mount it.
`,e.jsx(n.code,{children:"Page"})," here is a built-in ",e.jsx(n.code,{children:"this.GUI"})," node, so you can use it directly without registering it yourself."]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const spec = {
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
`]}),e.jsx(c,{}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"compose-with-children",children:"Compose With Children"}),e.jsx(n.p,{children:"Everything is just nested nodes."}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
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
    "children": { "read": "me/public/profile/name" }
  }
}
`})}),e.jsx(n.p,{children:"And for mutations:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "type": "Button",
  "props": {
    "label": "Set active",
    "onClick": { "write": "me/public/profile/status = 'active'" }
  }
}
`})}),e.jsx(n.p,{children:"This is the core idea:"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"static prop -> fixed UI"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"read"})," -> read data"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"write"})," -> mutate data"]}),`
`]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"dynamic-props-with-readwrite-tokens",children:"Dynamic Props with Read/Write Tokens"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "type": "Button",
  "props": {
    "label": { "read": "me/public/profile/name" },
    "onClick": { "write": "me/public/profile/status = 'active'" }
  }
}
`})}),e.jsx(n.p,{children:"What happens:"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"read"})," is resolved before render."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"write"})," is hydrated into a callback."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$expr"})," / ",e.jsx(n.code,{children:"$action"})," are still accepted as aliases."]}),`
`,e.jsx(n.li,{children:"If runtime is missing, GUI falls back safely (no crash)."}),`
`]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"routes-and-params",children:"Routes And Params"}),e.jsxs(n.p,{children:["When you add routes like ",e.jsx(n.code,{children:"/shops/:id"}),", the router places route params into ",e.jsx(n.code,{children:"ctx.params"}),"."]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`router.set('/shops/:id', ({ ctx }) => ({
  type: 'Page',
  props: {
    // Inside read, {{...}} injects route/context values into the expression string.
    title: { read: 'me/views/shops[{{params.id}}].name' },
  },
}));
`})}),e.jsx(n.p,{children:"That lets one screen template render many records."}),e.jsx(p,{}),e.jsx(n.hr,{}),e.jsx(r,{sx:{p:2,my:3,bgcolor:"action.hover",borderRadius:1.5,borderLeft:"4px solid",borderColor:"primary.main"},children:e.jsxs(n.p,{children:[e.jsx("strong",{children:"Pro Tip: URL Expression Semantics"}),e.jsx("br",{}),`
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
`]}),e.jsxs(n.p,{children:["That file demonstrates ",e.jsx(n.code,{children:".me + this.GUI"})," end-to-end with runtime tokens."]})]})]})}function C(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{C as default};
