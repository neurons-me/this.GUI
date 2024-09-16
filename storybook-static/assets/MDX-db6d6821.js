import{j as n}from"./jsx-runtime-2aae9559.js";import{u as o}from"./index-571eae1e.js";import"./index-ff614419.js";function t(s){const e={code:"code",h1:"h1",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"thisgui",children:"This.GUI"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"MDX"})," is a powerful format because it allows you to combine the simplicity of ",n.jsx(e.strong,{children:"Markdown"})," with the flexibility of ",n.jsx(e.strong,{children:"React components"}),". This means you can write documentation, content, or pages using normal Markdown syntax and sprinkle in ",n.jsx(e.strong,{children:"React components"})," wherever needed."]}),`
`,n.jsx(e.p,{children:"Here’s a breakdown of how it works:"}),`
`,n.jsxs(e.h3,{id:"1-markdown--jsx",children:["1. ",n.jsx(e.strong,{children:"Markdown + JSX"})]}),`
`,n.jsxs(e.p,{children:["MDX lets you write Markdown like usual, but when you need interactive or dynamic content, you can directly insert React components. It merges ",n.jsx(e.strong,{children:"Markdown"})," and ",n.jsx(e.strong,{children:"JSX"})," seamlessly in the same file."]}),`
`,n.jsx(e.p,{children:"Example:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-mdx",children:`# Welcome to My Site

This is a simple introduction written in Markdown.

## Here’s a custom button:

<Button label="Click Me" />

Here is more markdown text below the button!
`})}),`
`,n.jsx(e.p,{children:"In this example:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["The heading ",n.jsx(e.code,{children:"# Welcome to My Site"})," and the paragraph are standard ",n.jsx(e.strong,{children:"Markdown"}),"."]}),`
`,n.jsxs(e.li,{children:["The ",n.jsx(e.code,{children:"<Button />"})," component is a ",n.jsx(e.strong,{children:"React component"})," that you import and use directly in the MDX file."]}),`
`]}),`
`,n.jsxs(e.h3,{id:"2-passing-props-to-components",children:["2. ",n.jsx(e.strong,{children:"Passing Props to Components"})]}),`
`,n.jsx(e.p,{children:"You can pass props to React components just like you would in a React project. This allows you to create dynamic, reusable content."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-mdx",children:`## Example with Props

Here’s a button with dynamic props:

<Button label="Submit" color="primary" />
`})}),`
`,n.jsxs(e.h3,{id:"3-reusability-with-components",children:["3. ",n.jsx(e.strong,{children:"Reusability with Components"})]}),`
`,n.jsx(e.p,{children:"Since you can use any React component, you can integrate complex UI elements, such as forms, charts, or interactive widgets, into your content."}),`
`,n.jsx(e.p,{children:"For example:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-mdx",children:`# User Statistics

<Chart data={userData} />

This chart is embedded directly into the documentation!
`})}),`
`,n.jsxs(e.h3,{id:"4-how-to-set-it-up",children:["4. ",n.jsx(e.strong,{children:"How to Set It Up"})]}),`
`,n.jsxs(e.p,{children:["To use ",n.jsx(e.strong,{children:"MDX"})," in your project, you’ll typically configure a tool like ",n.jsx(e.strong,{children:"Storybook"}),", ",n.jsx(e.strong,{children:"Next.js"}),", or a custom React setup."]}),`
`,n.jsxs(e.h4,{id:"with-storybook",children:["With ",n.jsx(e.strong,{children:"Storybook"}),":"]}),`
`,n.jsxs(e.p,{children:["MDX is perfect for writing component documentation in ",n.jsx(e.strong,{children:"Storybook"}),". You can write documentation for your components and render the components directly in the docs."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-mdx",children:`import { Button } from './Button';

<Meta title="Button" component={Button} />

# Button Component

This is the \`Button\` component with different styles.

<Canvas>
  <Story name="Primary Button">
    <Button label="Primary" color="primary" />
  </Story>
</Canvas>
`})}),`
`,n.jsxs(e.h4,{id:"with-nextjs",children:["With ",n.jsx(e.strong,{children:"Next.js"}),":"]}),`
`,n.jsx(e.p,{children:"Next.js makes it easy to integrate MDX for static pages or blogs."}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Install MDX support for Next.js:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install @next/mdx @mdx-js/loader
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["Configure Next.js in ",n.jsx(e.code,{children:"next.config.js"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const withMDX = require('@next/mdx')({
  extension: /\\.mdx?$/
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
});
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["Create an ",n.jsx(e.code,{children:".mdx"})," file and use React components inside:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-mdx",children:`# Hello World

<Button label="Click Me" />
`})}),`
`]}),`
`]}),`
`,n.jsxs(e.h4,{id:"with-gatsby",children:["With ",n.jsx(e.strong,{children:"Gatsby"}),":"]}),`
`,n.jsxs(e.p,{children:["MDX can also be used in ",n.jsx(e.strong,{children:"Gatsby"})," to create rich blog posts or pages by embedding React components within Markdown."]}),`
`,n.jsxs(e.h3,{id:"5-where-to-use-mdx",children:["5. ",n.jsx(e.strong,{children:"Where to Use MDX"})]}),`
`,n.jsx(e.p,{children:"MDX is often used for:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Technical documentation"})," (with live component previews)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Component libraries"})," (Storybook)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Blogs or content management systems"})," (Next.js/Gatsby)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Interactive tutorials"}),"."]}),`
`]}),`
`,n.jsx(e.h3,{id:"key-advantages-of-mdx",children:"Key Advantages of MDX:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Markdown simplicity"}),": Use the same syntax you’re used to for writing docs or blog posts."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"React components"}),": Dynamically enhance content with interactivity, custom UI, or reusable components."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Reusable content"}),": Leverage the power of React to make your content dynamic and interactive."]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsxs(e.p,{children:["MDX gives you the ",n.jsx(e.strong,{children:"best of both worlds"}),": you can write content in ",n.jsx(e.strong,{children:"Markdown"}),", and whenever you need dynamic or interactive elements, you simply drop in a React component. It’s ideal for use cases where you want content and code to live together seamlessly."]}),`
`,n.jsx(e.p,{children:"Let me know if you'd like help with setting up or using MDX further!"})]})}function l(s={}){const{wrapper:e}={...o(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{l as default};
