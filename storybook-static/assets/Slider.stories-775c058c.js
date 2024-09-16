import{j as P}from"./jsx-runtime-2aae9559.js";import"./index-ff614419.js";import{P as o}from"./index-96bde590.js";const i=({primary:f,size:T,children:v,...z})=>{const x=f?"slider--primary":"slider--secondary";return P.jsx("div",{className:["slider",`slider--${T}`,x].join(" "),...z,children:v})};i.propTypes={primary:o.bool,size:o.oneOf(["small","medium","large"]),children:o.node.isRequired};i.defaultProps={primary:!1,size:"medium"};i.__docgenInfo={description:"Slider component for user interaction",methods:[],displayName:"Slider",props:{primary:{defaultValue:{value:"false",computed:!1},description:"Is this the primary style for the component?",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"Size of the component",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},children:{description:"Content to be rendered inside the component",type:{name:"node"},required:!0}}};const b={title:"Atoms/Interactive/Slider",component:i,parameters:{layout:"centered"},argTypes:{children:{control:"text"}}},e={args:{primary:!0,children:"This is a primary Slider"}},r={args:{children:"This is a secondary Slider"}},s={args:{size:"large",children:"This is a large Slider"}},a={args:{size:"small",children:"This is a small Slider"}};var l,n,t;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    primary: true,
    children: 'This is a primary Slider'
  }
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var d,m,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'This is a secondary Slider'
  }
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,u,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: 'This is a large Slider'
  }
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var y,S,g;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: 'This is a small Slider'
  }
}`,...(g=(S=a.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};const I=["Primary","Secondary","Large","Small"];export{s as Large,e as Primary,r as Secondary,a as Small,I as __namedExportsOrder,b as default};
