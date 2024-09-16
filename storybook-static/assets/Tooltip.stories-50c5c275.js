import{j as P}from"./jsx-runtime-2aae9559.js";import"./index-ff614419.js";import{P as i}from"./index-96bde590.js";const a=({primary:f,size:S,children:z,...v})=>{const x=f?"tooltip--primary":"tooltip--secondary";return P.jsx("div",{className:["tooltip",`tooltip--${S}`,x].join(" "),...v,children:z})};a.propTypes={primary:i.bool,size:i.oneOf(["small","medium","large"]),children:i.node.isRequired};a.defaultProps={primary:!1,size:"medium"};a.__docgenInfo={description:"Tooltip component for user interaction",methods:[],displayName:"Tooltip",props:{primary:{defaultValue:{value:"false",computed:!1},description:"Is this the primary style for the component?",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"Size of the component",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},children:{description:"Content to be rendered inside the component",type:{name:"node"},required:!0}}};const b={title:"Atoms/Visual/Tooltip",component:a,parameters:{layout:"centered"},argTypes:{children:{control:"text"}}},e={args:{primary:!0,children:"This is a primary Tooltip"}},r={args:{children:"This is a secondary Tooltip"}},o={args:{size:"large",children:"This is a large Tooltip"}},s={args:{size:"small",children:"This is a small Tooltip"}};var t,l,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    primary: true,
    children: 'This is a primary Tooltip'
  }
}`,...(n=(l=e.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var p,m,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'This is a secondary Tooltip'
  }
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,u,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: 'This is a large Tooltip'
  }
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var y,T,g;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: 'This is a small Tooltip'
  }
}`,...(g=(T=s.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};const V=["Primary","Secondary","Large","Small"];export{o as Large,e as Primary,r as Secondary,s as Small,V as __namedExportsOrder,b as default};
