import{j as P}from"./jsx-runtime-2aae9559.js";import"./index-ff614419.js";import{P as o}from"./index-96bde590.js";const t=({primary:f,size:T,children:v,...z})=>{const x=f?"select--primary":"select--secondary";return P.jsx("div",{className:["select",`select--${T}`,x].join(" "),...z,children:v})};t.propTypes={primary:o.bool,size:o.oneOf(["small","medium","large"]),children:o.node.isRequired};t.defaultProps={primary:!1,size:"medium"};t.__docgenInfo={description:"Select component for user interaction",methods:[],displayName:"Select",props:{primary:{defaultValue:{value:"false",computed:!1},description:"Is this the primary style for the component?",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"Size of the component",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},children:{description:"Content to be rendered inside the component",type:{name:"node"},required:!0}}};const b={title:"Atoms/Interactive/Select",component:t,parameters:{layout:"centered"},argTypes:{children:{control:"text"}}},e={args:{primary:!0,children:"This is a primary Select"}},r={args:{children:"This is a secondary Select"}},s={args:{size:"large",children:"This is a large Select"}},a={args:{size:"small",children:"This is a small Select"}};var c,i,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    primary: true,
    children: 'This is a primary Select'
  }
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var n,m,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: 'This is a secondary Select'
  }
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,u,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: 'This is a large Select'
  }
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var y,S,g;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: 'This is a small Select'
  }
}`,...(g=(S=a.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};const I=["Primary","Secondary","Large","Small"];export{s as Large,e as Primary,r as Secondary,a as Small,I as __namedExportsOrder,b as default};
