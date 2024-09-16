import{j as x}from"./jsx-runtime-2aae9559.js";import"./index-ff614419.js";import{P as i}from"./index-96bde590.js";const o=({primary:P,size:T,children:S,...z})=>{const v=P?"paragraph--primary":"paragraph--secondary";return x.jsx("div",{className:["paragraph",`paragraph--${T}`,v].join(" "),...z,children:S})};o.propTypes={primary:i.bool,size:i.oneOf(["small","medium","large"]),children:i.node.isRequired};o.defaultProps={primary:!1,size:"medium"};o.__docgenInfo={description:"Paragraph component for user interaction",methods:[],displayName:"Paragraph",props:{primary:{defaultValue:{value:"false",computed:!1},description:"Is this the primary style for the component?",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"Size of the component",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},children:{description:"Content to be rendered inside the component",type:{name:"node"},required:!0}}};const b={title:"Atoms/Text/Paragraph",component:o,parameters:{layout:"centered"},argTypes:{children:{control:"text"}}},r={args:{primary:!0,children:"This is a primary Paragraph"}},a={args:{children:"This is a secondary Paragraph"}},e={args:{size:"large",children:"This is a large Paragraph"}},s={args:{size:"small",children:"This is a small Paragraph"}};var n,p,t;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    primary: true,
    children: 'This is a primary Paragraph'
  }
}`,...(t=(p=r.parameters)==null?void 0:p.docs)==null?void 0:t.source}}};var m,c,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'This is a secondary Paragraph'
  }
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,u,h;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: 'This is a large Paragraph'
  }
}`,...(h=(u=e.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,y,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: 'This is a small Paragraph'
  }
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const E=["Primary","Secondary","Large","Small"];export{e as Large,r as Primary,a as Secondary,s as Small,E as __namedExportsOrder,b as default};
