import{j as z}from"./jsx-runtime-2aae9559.js";import"./index-ff614419.js";import{P as o}from"./index-96bde590.js";const t=({primary:g,size:f,children:A,...S})=>{const v=g?"textarea--primary":"textarea--secondary";return z.jsx("div",{className:["textarea",`textarea--${f}`,v].join(" "),...S,children:A})};t.propTypes={primary:o.bool,size:o.oneOf(["small","medium","large"]),children:o.node.isRequired};t.defaultProps={primary:!1,size:"medium"};t.__docgenInfo={description:"TextArea component for user interaction",methods:[],displayName:"TextArea",props:{primary:{defaultValue:{value:"false",computed:!1},description:"Is this the primary style for the component?",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"Size of the component",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},children:{description:"Content to be rendered inside the component",type:{name:"node"},required:!0}}};const q={title:"Atoms/Interactive/TextArea",component:t,parameters:{layout:"centered"},argTypes:{children:{control:"text"}}},e={args:{primary:!0,children:"This is a primary TextArea"}},r={args:{children:"This is a secondary TextArea"}},a={args:{size:"large",children:"This is a large TextArea"}},s={args:{size:"small",children:"This is a small TextArea"}};var i,n,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    primary: true,
    children: 'This is a primary TextArea'
  }
}`,...(m=(n=e.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var c,l,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'This is a secondary TextArea'
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,u,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: 'This is a large TextArea'
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var y,T,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: 'This is a small TextArea'
  }
}`,...(x=(T=s.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};const b=["Primary","Secondary","Large","Small"];export{a as Large,e as Primary,r as Secondary,s as Small,b as __namedExportsOrder,q as default};
