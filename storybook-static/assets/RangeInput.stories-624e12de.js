import{j as z}from"./jsx-runtime-2aae9559.js";import"./index-ff614419.js";import{P as t}from"./index-96bde590.js";const n=({primary:I,size:R,children:T,...S})=>{const v=I?"rangeinput--primary":"rangeinput--secondary";return z.jsx("div",{className:["rangeinput",`rangeinput--${R}`,v].join(" "),...S,children:T})};n.propTypes={primary:t.bool,size:t.oneOf(["small","medium","large"]),children:t.node.isRequired};n.defaultProps={primary:!1,size:"medium"};n.__docgenInfo={description:"RangeInput component for user interaction",methods:[],displayName:"RangeInput",props:{primary:{defaultValue:{value:"false",computed:!1},description:"Is this the primary style for the component?",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"Size of the component",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},children:{description:"Content to be rendered inside the component",type:{name:"node"},required:!0}}};const j={title:"Atoms/Interactive/RangeInput",component:n,parameters:{layout:"centered"},argTypes:{children:{control:"text"}}},e={args:{primary:!0,children:"This is a primary RangeInput"}},r={args:{children:"This is a secondary RangeInput"}},a={args:{size:"large",children:"This is a large RangeInput"}},s={args:{size:"small",children:"This is a small RangeInput"}};var o,i,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    primary: true,
    children: 'This is a primary RangeInput'
  }
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'This is a secondary RangeInput'
  }
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,d,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: 'This is a large RangeInput'
  }
}`,...(g=(d=a.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var h,y,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: 'This is a small RangeInput'
  }
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const q=["Primary","Secondary","Large","Small"];export{a as Large,e as Primary,r as Secondary,s as Small,q as __namedExportsOrder,j as default};
