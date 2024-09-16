import{j as z}from"./jsx-runtime-2aae9559.js";import"./index-ff614419.js";import{P as n}from"./index-96bde590.js";const t=({primary:g,size:f,children:I,...S})=>{const v=g?"textinput--primary":"textinput--secondary";return z.jsx("div",{className:["textinput",`textinput--${f}`,v].join(" "),...S,children:I})};t.propTypes={primary:n.bool,size:n.oneOf(["small","medium","large"]),children:n.node.isRequired};t.defaultProps={primary:!1,size:"medium"};t.__docgenInfo={description:"TextInput component for user interaction",methods:[],displayName:"TextInput",props:{primary:{defaultValue:{value:"false",computed:!1},description:"Is this the primary style for the component?",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"Size of the component",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},children:{description:"Content to be rendered inside the component",type:{name:"node"},required:!0}}};const q={title:"Atoms/Interactive/TextInput",component:t,parameters:{layout:"centered"},argTypes:{children:{control:"text"}}},e={args:{primary:!0,children:"This is a primary TextInput"}},r={args:{children:"This is a secondary TextInput"}},s={args:{size:"large",children:"This is a large TextInput"}},a={args:{size:"small",children:"This is a small TextInput"}};var o,i,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    primary: true,
    children: 'This is a primary TextInput'
  }
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'This is a secondary TextInput'
  }
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,d,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: 'This is a large TextInput'
  }
}`,...(h=(d=s.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var y,T,x;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: 'This is a small TextInput'
  }
}`,...(x=(T=a.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};const b=["Primary","Secondary","Large","Small"];export{s as Large,e as Primary,r as Secondary,a as Small,b as __namedExportsOrder,q as default};
