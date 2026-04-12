import{j as e,B as i,a as s,b as o,M as a,T as l}from"./iframe-D-yLkxRm.js";import"./preload-helper-Dp1pzeXC.js";function c(){return e.jsx(e.Fragment,{children:e.jsxs(i,{sx:{color:"text.primary"},children:[e.jsx("img",{src:"GUI.png",alt:"This.GUI",style:{width:"320px",height:"auto",imageRendering:"auto",marginBottom:"14px"}}),e.jsx(s,{variant:"h1",children:".GUI"}),e.jsx(s,{variant:"h2",sx:{fontWeight:500,opacity:1,mb:2,color:"text.primary"},children:"Generative User Interfaces."})]})})}c.__docgenInfo={description:"",methods:[],displayName:"GUIHero"};function t(r){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Getting Started/Quick Start"}),`
`,e.jsx(l,{children:e.jsx(i,{sx:{textAlign:"center",py:6},children:e.jsx(c,{})})}),`
`,e.jsx(n.h1,{id:"quick-start--gui-storybook",children:"Quick Start — .GUI Storybook"}),`
`,e.jsxs(n.p,{children:["This Storybook is your playground to explore and build with ",e.jsx(n.strong,{children:".GUI"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".GUI"})," is a ",e.jsx(n.strong,{children:"declarative UI framework"}),". Instead of writing React code directly, you describe your UI as structured data (a spec), and ",e.jsx(n.code,{children:".GUI"})," renders it for you."]}),`
`,e.jsx(n.h2,{id:"1-the-basics-ui-as-data",children:"1. The Basics: UI as Data"}),`
`,e.jsxs(n.p,{children:["Every screen is defined as a ",e.jsx(n.code,{children:"spec"})," — a simple JavaScript object:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const spec = {
  type: 'Page',
  props: {
    title: 'My Dashboard'
  },
  children: [
    // your components go here
  ]
};
`})}),`
`,e.jsxs(n.p,{children:["type tells ",e.jsx(n.code,{children:".GUI"})," which component to use."]}),`
`,e.jsx(n.p,{children:"props configures it."}),`
`,e.jsx(n.p,{children:"children lets you nest other components."}),`
`,e.jsx(n.h2,{id:"2-your-first-screen",children:"2. Your First Screen"}),`
`,e.jsx(n.p,{children:"Try this simple example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const spec = {
  type: 'Page',
  props: { title: 'Welcome' },
  children: [
    {
      type: 'Typography',
      props: { variant: 'h4', children: 'Hello from .GUI' }
    },
    {
      type: 'Button',
      props: {
        label: 'Click me',
        variant: 'contained',
        color: 'primary'
      }
    }
  ]
};

GUI.mount(spec, '#root');
`})}),`
`,e.jsx(n.h2,{id:"3-available-building-blocks",children:"3. Available Building Blocks"}),`
`,e.jsx(n.p,{children:".GUI comes with a set of ready-to-use components:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Layout: Page, Box, Paper, Stack, Grid"}),`
`,e.jsx(n.li,{children:"Content: Typography, Card, Divider"}),`
`,e.jsx(n.li,{children:"Interactive: Button, TextField, Switch, Checkbox"}),`
`,e.jsx(n.li,{children:"Feedback: Alert, Spinner, Progress"}),`
`]}),`
`,e.jsx(n.h2,{id:"4-make-it-dynamic-with-me",children:"4. Make it Dynamic (with .me)"}),`
`,e.jsx(n.p,{children:"You can connect any prop to live data using the read token:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`{
  type: 'Typography',
  props: {
    variant: 'h5',
    children: { read: 'me.profile.name' }
  }
}
`})}),`
`,e.jsx(n.p,{children:"For actions:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`{
  type: 'Button',
  props: {
    label: 'Save',
    onClick: { write: 'me.profile.save()' }
  }
}
`})})]})}function p(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{p as default};
