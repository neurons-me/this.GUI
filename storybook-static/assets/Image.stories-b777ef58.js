import{j as x}from"./jsx-runtime-2aae9559.js";import"./index-ff614419.js";import{P as i}from"./index-96bde590.js";const o=({primary:I,size:T,children:S,...z})=>{const v=I?"image--primary":"image--secondary";return x.jsx("div",{className:["image",`image--${T}`,v].join(" "),...z,children:S})};o.propTypes={primary:i.bool,size:i.oneOf(["small","medium","large"]),children:i.node.isRequired};o.defaultProps={primary:!1,size:"medium"};o.__docgenInfo={description:"Image component for user interaction",methods:[],displayName:"Image",props:{primary:{defaultValue:{value:"false",computed:!1},description:"Is this the primary style for the component?",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"Size of the component",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},children:{description:"Content to be rendered inside the component",type:{name:"node"},required:!0}}};const q={title:"Atoms/Media/Image",component:o,parameters:{layout:"centered"},argTypes:{children:{control:"text"}}},e={args:{primary:!0,children:"This is a primary Image"}},r={args:{children:"This is a secondary Image"}},a={args:{size:"large",children:"This is a large Image"}},s={args:{size:"small",children:"This is a small Image"}};var m,n,t;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    primary: true,
    children: 'This is a primary Image'
  }
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var c,l,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'This is a secondary Image'
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,u,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: 'This is a large Image'
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,y,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: 'This is a small Image'
  }
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const b=["Primary","Secondary","Large","Small"];export{a as Large,e as Primary,r as Secondary,s as Small,b as __namedExportsOrder,q as default};
