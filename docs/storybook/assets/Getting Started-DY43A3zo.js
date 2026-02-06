import{j as n}from"./iframe-pzPFiMX_.js";import{useMDXComponents as i}from"./index-XYy7wcg-.js";import{M as r,T as o,S as l}from"./blocks-DcePD91r.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D_PkDxA-.js";import"./index-2UIM6VAJ.js";function t(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Getting Started"}),`
`,n.jsx(o,{}),`
`,n.jsx(l,{}),`
`,n.jsx("img",{src:"GUI.png",alt:"This.GUI",width:"320"}),`
`,n.jsx(e.h1,{id:"gui-storybook",children:".GUI Storybook"}),`
`,n.jsx(e.h4,{id:"composable-declarative-and-imperative",children:"Composable, Declarative and Imperative."}),`
`,n.jsx(e.h3,{id:"getting-started",children:"Getting Started"}),`
`,n.jsxs(e.p,{children:["🌐 ",n.jsx(e.strong,{children:"window.GUI"}),`
Use this if you want the simplest possible setup:
just drop a `,n.jsx(e.code,{children:"<script>"})," tag in an HTML file and mount an app."]}),`
`,n.jsx(e.p,{children:"Add this script to your HTML:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<div id="root"></div>
<script src="https://cdn.jsdelivr.net/npm/this.gui@latest/dist/this.gui.bootstrap.umd.js"
  crossorigin="anonymous"><\/script>
`})}),`
`,n.jsxs(e.p,{children:["Then you can use the global ",n.jsx(e.code,{children:"window.GUI"})," object:"]}),`
`,n.jsx(e.h3,{id:"example",children:"Example:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<script>
  (async function () {
    // 1) Ensure \`.GUI\` runtime + deps are loaded.
    //    After this resolves, you can safely call \`window.GUI.mount(...)\`.
    await window.GUI.bootstrap();

    // 2) Grab the root node where the app will mount.
    const root = document.getElementById('root');

    // 3) Build a declarative \`.GUI\` spec (JSON).
    const app = {
      type: 'Page',
      props: {
        title: '.GUI Bootstrap',
        subtitle: 'HTML setup.',
      }
    };

    // 4) Mounts to a chosen node.
    window.GUI.mount(app, root); // renders into the DOM
  })();
<\/script>
`})}),`
`,n.jsxs(e.p,{children:["⬇️ ",n.jsx(e.strong,{children:"View Full HTML Example:"}),"  ",n.jsx("a",{href:"/examples/bootstrap.html",download:!0,children:"Bootstrap"})]}),`
`,n.jsx(e.h2,{id:"-imperative",children:"⚡ Imperative"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const button = window.GUI.Button(); // builds a GuiNode (does NOT render yet)
window.GUI.mount(button, root);      // renders into the DOM
`})}),`
`,n.jsxs(e.p,{children:["You are ",n.jsx(e.strong,{children:"executing commands"})," directly:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"“create a button”"}),`
`,n.jsx(e.li,{children:"“mount this app here”"}),`
`,n.jsx(e.li,{children:"“run now”"}),`
`]}),`
`,n.jsxs(e.p,{children:["Imperative = ",n.jsx(e.strong,{children:"do this"}),"."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-declarative",children:"🧩 Declarative"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`{
  type: "Layout",
  children: [
    { type: "Button", children: ["Save"] }
  ]
}
`})}),`
`,n.jsxs(e.p,{children:["You are not executing anything — you are ",n.jsx(e.strong,{children:"describing what should be rendered"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"“I want a layout”"}),`
`,n.jsx(e.li,{children:"“I want a button inside”"}),`
`]}),`
`,n.jsxs(e.p,{children:["Declarative = ",n.jsx(e.strong,{children:"this is what it should look like"}),"."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-composable",children:"🧱 Composable"}),`
`,n.jsxs(e.p,{children:["This is the ",n.jsx(e.strong,{children:"React environment"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Layout>
  <Page>
    <Button />
  </Page>
</Layout>
`})}),`
`,n.jsx(e.p,{children:"Here you are composing live building blocks:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"components + hooks"}),`
`,n.jsx(e.li,{children:"providers + state"}),`
`,n.jsx(e.li,{children:"routing + context"}),`
`]}),`
`,n.jsxs(e.p,{children:["Composable = ",n.jsx(e.strong,{children:"building blocks in a live runtime"}),"."]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["📦 ",n.jsx(e.strong,{children:"npx this.gui (npm Package / React Projects)"}),`
Use this if you're building a real project with Vite, React, or Node.
Install `,n.jsx(e.code,{children:".GUI"})," like any normal dependency:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install this.gui
`})}),`
`,n.jsx(e.p,{children:"👉 https://www.npmjs.com/search?q=this.gui"}),`
`]}),`
`]})]})}function x(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{x as default};
