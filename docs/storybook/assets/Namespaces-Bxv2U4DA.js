import{u as t,j as e,M as r}from"./iframe-BNfi7WN_.js";import"./preload-helper-Dp1pzeXC.js";function s(i){const n={code:"code",em:"em",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Getting Started/Namespaces"}),`
`,e.jsx(n.h2,{id:"the-core-idea",children:"The Core Idea"}),`
`,e.jsxs(n.p,{children:["The interface is a ",e.jsx(n.strong,{children:"projection of a namespace"}),`.
This is the foundational concept. The `,e.jsx(n.code,{children:"Namespace"})," exists as a source of truth, independent of any visual representation. The UI is just one of many possible ways to render it."]}),`
`,e.jsx(n.p,{children:"This leads to a clean, layered component model:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Namespace>        // Reality / graph / .me
  <Theme>          // Visual interpretation
    <Router>       // Focus / navigation
      <Layout>     // Spatial organization
        <UI />     // Components (atoms → organisms)
      </Layout>
    </Router>
  </Theme>
</Namespace>
`})}),`
`,e.jsx(n.p,{children:"Where each layer has a distinct responsibility:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Namespace"}),": Defines ",e.jsx(n.em,{children:"what exists"})," (the context, identity, resources, and language)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Theme"}),": Defines ",e.jsx(n.em,{children:"how it looks"})," (the visual interpretation)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Router"}),": Defines ",e.jsx(n.em,{children:"what is active"})," (the focus and navigation state)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Layout"}),": Defines ",e.jsx(n.em,{children:"how it is arranged"})," (the spatial organization)."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"defining-namespace",children:'Defining "Namespace"'}),`
`,e.jsx(n.p,{children:"A namespace is the combination of:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Context"}),": Where you are in the graph."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Language"}),": How things are referenced (e.g., ",e.jsx(n.code,{children:"public.ui.theme.history"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Capability"}),": What can be done (e.g., actions, functions)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Memory"}),": What has happened (state, history)."]}),`
`]}),`
`,e.jsxs(n.p,{children:["This is why the ",e.jsx(n.code,{children:".me"})," object is the perfect implementation of a namespace—it's not just an identity, it's a ",e.jsx(n.strong,{children:"resolver of meaning"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"the-critical-boundary",children:"The Critical Boundary"}),`
`,e.jsxs(n.p,{children:["To maintain the purity of this architecture, it is essential that UI concerns ",e.jsx(n.strong,{children:"do not leak into the Namespace"}),"."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Namespace"})," must ",e.jsx(n.strong,{children:"NOT"})," know about:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"UI components"}),`
`,e.jsx(n.li,{children:"Layout structure"}),`
`,e.jsx(n.li,{children:"Styling or themes"}),`
`,e.jsx(n.li,{children:"Routing state"}),`
`]}),`
`,e.jsx(n.p,{children:"It should only concern itself with the raw semantic graph:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Nodes"}),`
`,e.jsx(n.li,{children:"Resources"}),`
`,e.jsx(n.li,{children:"Data"}),`
`,e.jsx(n.li,{children:"Actions"}),`
`]}),`
`,e.jsxs(n.p,{children:["This separation is what enables the ultimate goal: ",e.jsx(n.strong,{children:"A runtime where the UI is just a view over a semantic graph."})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"the-next-step-api-definition",children:"The Next Step: API Definition"}),`
`,e.jsxs(n.p,{children:["With this clarity, the next logical step is to formalize the ",e.jsx(n.code,{children:"Namespace"})," API. This will be the primary interface for the UI to interact with the underlying graph."]}),`
`,e.jsx(n.p,{children:"A preliminary API definition could look like this:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type Namespace = {
  get(path: string): any;
  set(path: string, value: any): void;
  call(path: string, ...args: any[]): any;
  subscribe(path: string, cb: Function): () => void;
};
`})}),`
`,e.jsxs(n.p,{children:["This would be consumed within the UI via a ",e.jsx(n.code,{children:"useNamespace()"})," hook, creating a clean bridge between the world of components and the world of the semantic graph."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"final-insight",children:"Final Insight"}),`
`,e.jsxs(n.p,{children:["Following this model means we are no longer just designing components. We are designing ",e.jsx(n.strong,{children:"a language that renders itself"}),". The UI is simply one dialect of that language."]})]})}function o(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{o as default};
