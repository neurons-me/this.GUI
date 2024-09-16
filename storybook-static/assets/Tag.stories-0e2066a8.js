import{j as P}from"./jsx-runtime-2aae9559.js";import"./index-ff614419.js";import{P as i}from"./index-96bde590.js";const o=({primary:f,size:S,children:z,...v})=>{const x=f?"tag--primary":"tag--secondary";return P.jsx("div",{className:["tag",`tag--${S}`,x].join(" "),...v,children:z})};o.propTypes={primary:i.bool,size:i.oneOf(["small","medium","large"]),children:i.node.isRequired};o.defaultProps={primary:!1,size:"medium"};o.__docgenInfo={description:"Tag component for user interaction",methods:[],displayName:"Tag",props:{primary:{defaultValue:{value:"false",computed:!1},description:"Is this the primary style for the component?",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"Size of the component",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},children:{description:"Content to be rendered inside the component",type:{name:"node"},required:!0}}};const b={title:"Atoms/Visual/Tag",component:o,parameters:{layout:"centered"},argTypes:{children:{control:"text"}}},e={args:{primary:!0,children:"This is a primary Tag"}},r={args:{children:"This is a secondary Tag"}},a={args:{size:"large",children:"This is a large Tag"}},s={args:{size:"small",children:"This is a small Tag"}};var n,t,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    primary: true,
    children: 'This is a primary Tag'
  }
}`,...(m=(t=e.parameters)==null?void 0:t.docs)==null?void 0:m.source}}};var c,l,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'This is a secondary Tag'
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,u,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: 'This is a large Tag'
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,y,T;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: 'This is a small Tag'
  }
}`,...(T=(y=s.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};const V=["Primary","Secondary","Large","Small"];export{a as Large,e as Primary,r as Secondary,s as Small,V as __namedExportsOrder,b as default};
