import{j as x}from"./jsx-runtime-2aae9559.js";import"./index-ff614419.js";import{P as o}from"./index-96bde590.js";const n=({primary:C,size:T,children:S,...v})=>{const z=C?"container--primary":"container--secondary";return x.jsx("div",{className:["container",`container--${T}`,z].join(" "),...v,children:S})};n.propTypes={primary:o.bool,size:o.oneOf(["small","medium","large"]),children:o.node.isRequired};n.defaultProps={primary:!1,size:"medium"};n.__docgenInfo={description:"Container component for user interaction",methods:[],displayName:"Container",props:{primary:{defaultValue:{value:"false",computed:!1},description:"Is this the primary style for the component?",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"Size of the component",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},children:{description:"Content to be rendered inside the component",type:{name:"node"},required:!0}}};const q={title:"Atoms/Interactive/Container",component:n,parameters:{layout:"centered"},argTypes:{children:{control:"text"}}},e={args:{primary:!0,children:"This is a primary Container"}},r={args:{children:"This is a secondary Container"}},a={args:{size:"large",children:"This is a large Container"}},s={args:{size:"small",children:"This is a small Container"}};var i,t,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    primary: true,
    children: 'This is a primary Container'
  }
}`,...(c=(t=e.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var m,l,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'This is a secondary Container'
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,u,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: 'This is a large Container'
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var y,g,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: 'This is a small Container'
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const b=["Primary","Secondary","Large","Small"];export{a as Large,e as Primary,r as Secondary,s as Small,b as __namedExportsOrder,q as default};
