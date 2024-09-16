import{j as P}from"./jsx-runtime-2aae9559.js";import"./index-ff614419.js";import{P as i}from"./index-96bde590.js";const o=({primary:f,size:S,children:v,...z})=>{const x=f?"toggle--primary":"toggle--secondary";return P.jsx("div",{className:["toggle",`toggle--${S}`,x].join(" "),...z,children:v})};o.propTypes={primary:i.bool,size:i.oneOf(["small","medium","large"]),children:i.node.isRequired};o.defaultProps={primary:!1,size:"medium"};o.__docgenInfo={description:"Toggle component for user interaction",methods:[],displayName:"Toggle",props:{primary:{defaultValue:{value:"false",computed:!1},description:"Is this the primary style for the component?",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"Size of the component",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},children:{description:"Content to be rendered inside the component",type:{name:"node"},required:!0}}};const b={title:"Atoms/Interactive/Toggle",component:o,parameters:{layout:"centered"},argTypes:{children:{control:"text"}}},e={args:{primary:!0,children:"This is a primary Toggle"}},r={args:{children:"This is a secondary Toggle"}},s={args:{size:"large",children:"This is a large Toggle"}},a={args:{size:"small",children:"This is a small Toggle"}};var t,l,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    primary: true,
    children: 'This is a primary Toggle'
  }
}`,...(n=(l=e.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var m,c,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'This is a secondary Toggle'
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,g,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: 'This is a large Toggle'
  }
}`,...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,y,T;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: 'This is a small Toggle'
  }
}`,...(T=(y=a.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};const I=["Primary","Secondary","Large","Small"];export{s as Large,e as Primary,r as Secondary,a as Small,I as __namedExportsOrder,b as default};
