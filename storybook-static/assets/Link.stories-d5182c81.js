import{j as z}from"./jsx-runtime-2aae9559.js";import"./index-ff614419.js";import{P as n}from"./index-96bde590.js";const i=({primary:k,size:L,children:T,...S})=>{const v=k?"link--primary":"link--secondary";return z.jsx("div",{className:["link",`link--${L}`,v].join(" "),...S,children:T})};i.propTypes={primary:n.bool,size:n.oneOf(["small","medium","large"]),children:n.node.isRequired};i.defaultProps={primary:!1,size:"medium"};i.__docgenInfo={description:"Link component for user interaction",methods:[],displayName:"Link",props:{primary:{defaultValue:{value:"false",computed:!1},description:"Is this the primary style for the component?",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"Size of the component",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},children:{description:"Content to be rendered inside the component",type:{name:"node"},required:!0}}};const j={title:"Atoms/Interactive/Link",component:i,parameters:{layout:"centered"},argTypes:{children:{control:"text"}}},e={args:{primary:!0,children:"This is a primary Link"}},r={args:{children:"This is a secondary Link"}},s={args:{size:"large",children:"This is a large Link"}},a={args:{size:"small",children:"This is a small Link"}};var o,t,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    primary: true,
    children: 'This is a primary Link'
  }
}`,...(l=(t=e.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};var m,c,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'This is a secondary Link'
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,u,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: 'This is a large Link'
  }
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var y,g,f;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: 'This is a small Link'
  }
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const q=["Primary","Secondary","Large","Small"];export{s as Large,e as Primary,r as Secondary,a as Small,q as __namedExportsOrder,j as default};
