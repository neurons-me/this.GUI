import{j as P}from"./jsx-runtime-2aae9559.js";import"./index-ff614419.js";import{P as i}from"./index-96bde590.js";const n=({primary:f,size:T,children:z,...v})=>{const x=f?"spinner--primary":"spinner--secondary";return P.jsx("div",{className:["spinner",`spinner--${T}`,x].join(" "),...v,children:z})};n.propTypes={primary:i.bool,size:i.oneOf(["small","medium","large"]),children:i.node.isRequired};n.defaultProps={primary:!1,size:"medium"};n.__docgenInfo={description:"Spinner component for user interaction",methods:[],displayName:"Spinner",props:{primary:{defaultValue:{value:"false",computed:!1},description:"Is this the primary style for the component?",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"Size of the component",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},children:{description:"Content to be rendered inside the component",type:{name:"node"},required:!0}}};const q={title:"Atoms/Feedback/Spinner",component:n,parameters:{layout:"centered"},argTypes:{children:{control:"text"}}},e={args:{primary:!0,children:"This is a primary Spinner"}},r={args:{children:"This is a secondary Spinner"}},s={args:{size:"large",children:"This is a large Spinner"}},a={args:{size:"small",children:"This is a small Spinner"}};var o,t,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    primary: true,
    children: 'This is a primary Spinner'
  }
}`,...(p=(t=e.parameters)==null?void 0:t.docs)==null?void 0:p.source}}};var m,c,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'This is a secondary Spinner'
  }
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,u,h;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: 'This is a large Spinner'
  }
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var y,S,g;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: 'This is a small Spinner'
  }
}`,...(g=(S=a.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};const E=["Primary","Secondary","Large","Small"];export{s as Large,e as Primary,r as Secondary,a as Small,E as __namedExportsOrder,q as default};
