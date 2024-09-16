import{B as z}from"./Button-c8c48b5c.js";import"./jsx-runtime-2aae9559.js";import"./index-ff614419.js";import"./index-96bde590.js";const P={title:"Atoms/Interactive/Button",component:z,parameters:{docs:{description:{component:"A customizable button component for various user interactions."}}},argTypes:{primary:{control:"boolean",description:"Is this the primary button?"},size:{control:{type:"select",options:["small","medium","large"]},description:"Size of the button"},noborder:{control:"boolean",description:"No border button style"},label:{control:"text",description:"Text label for the button"},children:{control:"text",description:"Content inside the button"}}},r={args:{primary:!0,children:"Primary Button"}},e={args:{children:"Secondary Button"}},o={args:{noborder:!0,children:"No Border Button"}},t={args:{size:"large",children:"Large Button"}},n={args:{size:"small",children:"Small Button"}};var a,s,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    primary: true,
    children: 'Primary Button'
  }
}`,...(c=(s=r.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var i,d,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: 'Secondary Button'
  }
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,p,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    noborder: true,
    children: 'No Border Button'
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,B,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: 'Large Button'
  }
}`,...(h=(B=t.parameters)==null?void 0:B.docs)==null?void 0:h.source}}};var b,y,S;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: 'Small Button'
  }
}`,...(S=(y=n.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const _=["Primary","Secondary","NoBorder","Large","Small"];export{t as Large,o as NoBorder,r as Primary,e as Secondary,n as Small,_ as __namedExportsOrder,P as default};
