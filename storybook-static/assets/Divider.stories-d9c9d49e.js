import{j as x}from"./jsx-runtime-2aae9559.js";import"./index-ff614419.js";import{P as o}from"./index-96bde590.js";const i=({primary:f,size:D,children:T,...S})=>{const z=f?"divider--primary":"divider--secondary";return x.jsx("div",{className:["divider",`divider--${D}`,z].join(" "),...S,children:T})};i.propTypes={primary:o.bool,size:o.oneOf(["small","medium","large"]),children:o.node.isRequired};i.defaultProps={primary:!1,size:"medium"};i.__docgenInfo={description:"Divider component for user interaction",methods:[],displayName:"Divider",props:{primary:{defaultValue:{value:"false",computed:!1},description:"Is this the primary style for the component?",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"Size of the component",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},children:{description:"Content to be rendered inside the component",type:{name:"node"},required:!0}}};const q={title:"Atoms/Visual/Divider",component:i,parameters:{layout:"centered"},argTypes:{children:{control:"text"}}},e={args:{primary:!0,children:"This is a primary Divider"}},r={args:{children:"This is a secondary Divider"}},s={args:{size:"large",children:"This is a large Divider"}},a={args:{size:"small",children:"This is a small Divider"}};var d,n,t;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    primary: true,
    children: 'This is a primary Divider'
  }
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var m,c,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'This is a secondary Divider'
  }
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,u,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: 'This is a large Divider'
  }
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var v,y,g;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: 'This is a small Divider'
  }
}`,...(g=(y=a.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const b=["Primary","Secondary","Large","Small"];export{s as Large,e as Primary,r as Secondary,a as Small,b as __namedExportsOrder,q as default};
