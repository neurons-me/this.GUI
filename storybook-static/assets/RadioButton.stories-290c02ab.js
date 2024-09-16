import{j as z}from"./jsx-runtime-2aae9559.js";import"./index-ff614419.js";import{P as t}from"./index-96bde590.js";const s=({primary:R,size:B,children:T,...S})=>{const v=R?"radiobutton--primary":"radiobutton--secondary";return z.jsx("div",{className:["radiobutton",`radiobutton--${B}`,v].join(" "),...S,children:T})};s.propTypes={primary:t.bool,size:t.oneOf(["small","medium","large"]),children:t.node.isRequired};s.defaultProps={primary:!1,size:"medium"};s.__docgenInfo={description:"RadioButton component for user interaction",methods:[],displayName:"RadioButton",props:{primary:{defaultValue:{value:"false",computed:!1},description:"Is this the primary style for the component?",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"Size of the component",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},children:{description:"Content to be rendered inside the component",type:{name:"node"},required:!0}}};const _={title:"Atoms/Interactive/RadioButton",component:s,parameters:{layout:"centered"},argTypes:{children:{control:"text"}}},e={args:{primary:!0,children:"This is a primary RadioButton"}},r={args:{children:"This is a secondary RadioButton"}},a={args:{size:"large",children:"This is a large RadioButton"}},o={args:{size:"small",children:"This is a small RadioButton"}};var i,n,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    primary: true,
    children: 'This is a primary RadioButton'
  }
}`,...(d=(n=e.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var m,c,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'This is a secondary RadioButton'
  }
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,p,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: 'This is a large RadioButton'
  }
}`,...(h=(p=a.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var y,g,f;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: 'This is a small RadioButton'
  }
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const j=["Primary","Secondary","Large","Small"];export{a as Large,e as Primary,r as Secondary,o as Small,j as __namedExportsOrder,_ as default};
