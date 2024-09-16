import{j as x}from"./jsx-runtime-2aae9559.js";import"./index-ff614419.js";import{P as i}from"./index-96bde590.js";const o=({primary:L,size:T,children:S,...z})=>{const v=L?"loader--primary":"loader--secondary";return x.jsx("div",{className:["loader",`loader--${T}`,v].join(" "),...z,children:S})};o.propTypes={primary:i.bool,size:i.oneOf(["small","medium","large"]),children:i.node.isRequired};o.defaultProps={primary:!1,size:"medium"};o.__docgenInfo={description:"Loader component for user interaction",methods:[],displayName:"Loader",props:{primary:{defaultValue:{value:"false",computed:!1},description:"Is this the primary style for the component?",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"Size of the component",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},children:{description:"Content to be rendered inside the component",type:{name:"node"},required:!0}}};const j={title:"Atoms/Feedback/Loader",component:o,parameters:{layout:"centered"},argTypes:{children:{control:"text"}}},e={args:{primary:!0,children:"This is a primary Loader"}},r={args:{children:"This is a secondary Loader"}},a={args:{size:"large",children:"This is a large Loader"}},s={args:{size:"small",children:"This is a small Loader"}};var n,d,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    primary: true,
    children: 'This is a primary Loader'
  }
}`,...(t=(d=e.parameters)==null?void 0:d.docs)==null?void 0:t.source}}};var l,m,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'This is a secondary Loader'
  }
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,u,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: 'This is a large Loader'
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var y,g,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: 'This is a small Loader'
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const q=["Primary","Secondary","Large","Small"];export{a as Large,e as Primary,r as Secondary,s as Small,q as __namedExportsOrder,j as default};
