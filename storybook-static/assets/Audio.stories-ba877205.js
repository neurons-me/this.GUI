import{j as x}from"./jsx-runtime-2aae9559.js";import"./index-ff614419.js";import{P as i}from"./index-96bde590.js";const o=({primary:A,size:T,children:S,...z})=>{const v=A?"audio--primary":"audio--secondary";return x.jsx("div",{className:["audio",`audio--${T}`,v].join(" "),...z,children:S})};o.propTypes={primary:i.bool,size:i.oneOf(["small","medium","large"]),children:i.node.isRequired};o.defaultProps={primary:!1,size:"medium"};o.__docgenInfo={description:"Audio component for user interaction",methods:[],displayName:"Audio",props:{primary:{defaultValue:{value:"false",computed:!1},description:"Is this the primary style for the component?",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"Size of the component",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},children:{description:"Content to be rendered inside the component",type:{name:"node"},required:!0}}};const q={title:"Atoms/Media/Audio",component:o,parameters:{layout:"centered"},argTypes:{children:{control:"text"}}},e={args:{primary:!0,children:"This is a primary Audio"}},r={args:{children:"This is a secondary Audio"}},a={args:{size:"large",children:"This is a large Audio"}},s={args:{size:"small",children:"This is a small Audio"}};var n,d,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    primary: true,
    children: 'This is a primary Audio'
  }
}`,...(t=(d=e.parameters)==null?void 0:d.docs)==null?void 0:t.source}}};var m,c,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'This is a secondary Audio'
  }
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,p,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: 'This is a large Audio'
  }
}`,...(h=(p=a.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var y,g,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: 'This is a small Audio'
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const b=["Primary","Secondary","Large","Small"];export{a as Large,e as Primary,r as Secondary,s as Small,b as __namedExportsOrder,q as default};
