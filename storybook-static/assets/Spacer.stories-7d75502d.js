import{j as P}from"./jsx-runtime-2aae9559.js";import"./index-ff614419.js";import{P as c}from"./index-96bde590.js";const o=({primary:f,size:T,children:z,...v})=>{const x=f?"spacer--primary":"spacer--secondary";return P.jsx("div",{className:["spacer",`spacer--${T}`,x].join(" "),...v,children:z})};o.propTypes={primary:c.bool,size:c.oneOf(["small","medium","large"]),children:c.node.isRequired};o.defaultProps={primary:!1,size:"medium"};o.__docgenInfo={description:"Spacer component for user interaction",methods:[],displayName:"Spacer",props:{primary:{defaultValue:{value:"false",computed:!1},description:"Is this the primary style for the component?",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"Size of the component",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},children:{description:"Content to be rendered inside the component",type:{name:"node"},required:!0}}};const b={title:"Atoms/Visual/Spacer",component:o,parameters:{layout:"centered"},argTypes:{children:{control:"text"}}},e={args:{primary:!0,children:"This is a primary Spacer"}},r={args:{children:"This is a secondary Spacer"}},a={args:{size:"large",children:"This is a large Spacer"}},s={args:{size:"small",children:"This is a small Spacer"}};var i,n,t;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    primary: true,
    children: 'This is a primary Spacer'
  }
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var p,m,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'This is a secondary Spacer'
  }
}`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,u,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: 'This is a large Spacer'
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var y,S,g;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: 'This is a small Spacer'
  }
}`,...(g=(S=s.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};const V=["Primary","Secondary","Large","Small"];export{a as Large,e as Primary,r as Secondary,s as Small,V as __namedExportsOrder,b as default};
