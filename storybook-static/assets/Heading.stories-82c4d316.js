import{j as x}from"./jsx-runtime-2aae9559.js";import"./index-ff614419.js";import{P as n}from"./index-96bde590.js";const i=({primary:H,size:T,children:S,...z})=>{const v=H?"heading--primary":"heading--secondary";return x.jsx("div",{className:["heading",`heading--${T}`,v].join(" "),...z,children:S})};i.propTypes={primary:n.bool,size:n.oneOf(["small","medium","large"]),children:n.node.isRequired};i.defaultProps={primary:!1,size:"medium"};i.__docgenInfo={description:"Heading component for user interaction",methods:[],displayName:"Heading",props:{primary:{defaultValue:{value:"false",computed:!1},description:"Is this the primary style for the component?",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"Size of the component",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},children:{description:"Content to be rendered inside the component",type:{name:"node"},required:!0}}};const q={title:"Atoms/Text/Heading",component:i,parameters:{layout:"centered"},argTypes:{children:{control:"text"}}},e={args:{primary:!0,children:"This is a primary Heading"}},r={args:{children:"This is a secondary Heading"}},a={args:{size:"large",children:"This is a large Heading"}},s={args:{size:"small",children:"This is a small Heading"}};var o,d,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    primary: true,
    children: 'This is a primary Heading'
  }
}`,...(t=(d=e.parameters)==null?void 0:d.docs)==null?void 0:t.source}}};var m,c,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'This is a secondary Heading'
  }
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,u,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: 'This is a large Heading'
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,y,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: 'This is a small Heading'
  }
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const b=["Primary","Secondary","Large","Small"];export{a as Large,e as Primary,r as Secondary,s as Small,b as __namedExportsOrder,q as default};
