import{j as x}from"./jsx-runtime-2aae9559.js";import"./index-ff614419.js";import{P as o}from"./index-96bde590.js";const t=({primary:A,size:T,children:S,...z})=>{const v=A?"alert--primary":"alert--secondary";return x.jsx("div",{className:["alert",`alert--${T}`,v].join(" "),...z,children:S})};t.propTypes={primary:o.bool,size:o.oneOf(["small","medium","large"]),children:o.node.isRequired};t.defaultProps={primary:!1,size:"medium"};t.__docgenInfo={description:"Alert component for user interaction",methods:[],displayName:"Alert",props:{primary:{defaultValue:{value:"false",computed:!1},description:"Is this the primary style for the component?",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"Size of the component",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},children:{description:"Content to be rendered inside the component",type:{name:"node"},required:!0}}};const j={title:"Atoms/Feedback/Alert",component:t,parameters:{layout:"centered"},argTypes:{children:{control:"text"}}},e={args:{primary:!0,children:"This is a primary Alert"}},r={args:{children:"This is a secondary Alert"}},a={args:{size:"large",children:"This is a large Alert"}},s={args:{size:"small",children:"This is a small Alert"}};var i,l,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    primary: true,
    children: 'This is a primary Alert'
  }
}`,...(n=(l=e.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var m,c,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'This is a secondary Alert'
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,u,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: 'This is a large Alert'
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var y,g,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: 'This is a small Alert'
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const q=["Primary","Secondary","Large","Small"];export{a as Large,e as Primary,r as Secondary,s as Small,q as __namedExportsOrder,j as default};
