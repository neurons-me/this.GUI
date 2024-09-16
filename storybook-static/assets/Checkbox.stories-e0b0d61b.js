import{j as S}from"./jsx-runtime-2aae9559.js";import"./index-ff614419.js";import{P as c}from"./index-96bde590.js";const o=({primary:b,size:f,children:k,...C})=>{const T=b?"checkbox--primary":"checkbox--secondary";return S.jsx("div",{className:["checkbox",`checkbox--${f}`,T].join(" "),...C,children:k})};o.propTypes={primary:c.bool,size:c.oneOf(["small","medium","large"]),children:c.node.isRequired};o.defaultProps={primary:!1,size:"medium"};o.__docgenInfo={description:"Checkbox component for user interaction",methods:[],displayName:"Checkbox",props:{primary:{defaultValue:{value:"false",computed:!1},description:"Is this the primary style for the component?",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"Size of the component",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},children:{description:"Content to be rendered inside the component",type:{name:"node"},required:!0}}};const _={title:"Atoms/Interactive/Checkbox",component:o,parameters:{layout:"centered"},argTypes:{children:{control:"text"}}},e={args:{primary:!0,children:"This is a primary Checkbox"}},r={args:{children:"This is a secondary Checkbox"}},s={args:{size:"large",children:"This is a large Checkbox"}},a={args:{size:"small",children:"This is a small Checkbox"}};var i,n,t;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    primary: true,
    children: 'This is a primary Checkbox'
  }
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var m,l,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'This is a secondary Checkbox'
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,u,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: 'This is a large Checkbox'
  }
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var y,x,g;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: 'This is a small Checkbox'
  }
}`,...(g=(x=a.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const j=["Primary","Secondary","Large","Small"];export{s as Large,e as Primary,r as Secondary,a as Small,j as __namedExportsOrder,_ as default};
