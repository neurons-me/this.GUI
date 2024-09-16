import{j as x}from"./jsx-runtime-2aae9559.js";import"./index-ff614419.js";import{P as i}from"./index-96bde590.js";const o=({primary:C,size:T,children:S,...z})=>{const v=C?"caption--primary":"caption--secondary";return x.jsx("div",{className:["caption",`caption--${T}`,v].join(" "),...z,children:S})};o.propTypes={primary:i.bool,size:i.oneOf(["small","medium","large"]),children:i.node.isRequired};o.defaultProps={primary:!1,size:"medium"};o.__docgenInfo={description:"Caption component for user interaction",methods:[],displayName:"Caption",props:{primary:{defaultValue:{value:"false",computed:!1},description:"Is this the primary style for the component?",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"Size of the component",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},children:{description:"Content to be rendered inside the component",type:{name:"node"},required:!0}}};const q={title:"Atoms/Text/Caption",component:o,parameters:{layout:"centered"},argTypes:{children:{control:"text"}}},e={args:{primary:!0,children:"This is a primary Caption"}},r={args:{children:"This is a secondary Caption"}},a={args:{size:"large",children:"This is a large Caption"}},s={args:{size:"small",children:"This is a small Caption"}};var n,t,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    primary: true,
    children: 'This is a primary Caption'
  }
}`,...(p=(t=e.parameters)==null?void 0:t.docs)==null?void 0:p.source}}};var c,m,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'This is a secondary Caption'
  }
}`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,u,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: 'This is a large Caption'
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var y,g,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: 'This is a small Caption'
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const b=["Primary","Secondary","Large","Small"];export{a as Large,e as Primary,r as Secondary,s as Small,b as __namedExportsOrder,q as default};
