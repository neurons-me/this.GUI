import{j as v}from"./jsx-runtime-2aae9559.js";import"./index-ff614419.js";import{P as l}from"./index-96bde590.js";const o=({primary:f,size:L,children:T,...S})=>{const z=f?"label--primary":"label--secondary";return v.jsx("div",{className:["label",`label--${L}`,z].join(" "),...S,children:T})};o.propTypes={primary:l.bool,size:l.oneOf(["small","medium","large"]),children:l.node.isRequired};o.defaultProps={primary:!1,size:"medium"};o.__docgenInfo={description:"Label component for user interaction",methods:[],displayName:"Label",props:{primary:{defaultValue:{value:"false",computed:!1},description:"Is this the primary style for the component?",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"Size of the component",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},children:{description:"Content to be rendered inside the component",type:{name:"node"},required:!0}}};const j={title:"Atoms/Text/Label",component:o,parameters:{layout:"centered"},argTypes:{children:{control:"text"}}},e={args:{primary:!0,children:"This is a primary Label"}},r={args:{children:"This is a secondary Label"}},a={args:{size:"large",children:"This is a large Label"}},s={args:{size:"small",children:"This is a small Label"}};var i,n,t;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    primary: true,
    children: 'This is a primary Label'
  }
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var m,c,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'This is a secondary Label'
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,u,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: 'This is a large Label'
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var y,g,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: 'This is a small Label'
  }
}`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const q=["Primary","Secondary","Large","Small"];export{a as Large,e as Primary,r as Secondary,s as Small,q as __namedExportsOrder,j as default};
