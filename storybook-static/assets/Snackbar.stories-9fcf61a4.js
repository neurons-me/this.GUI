import{j as v}from"./jsx-runtime-2aae9559.js";import"./index-ff614419.js";import{P as o}from"./index-96bde590.js";const n=({primary:g,size:f,children:k,...T})=>{const z=g?"snackbar--primary":"snackbar--secondary";return v.jsx("div",{className:["snackbar",`snackbar--${f}`,z].join(" "),...T,children:k})};n.propTypes={primary:o.bool,size:o.oneOf(["small","medium","large"]),children:o.node.isRequired};n.defaultProps={primary:!1,size:"medium"};n.__docgenInfo={description:"Snackbar component for user interaction",methods:[],displayName:"Snackbar",props:{primary:{defaultValue:{value:"false",computed:!1},description:"Is this the primary style for the component?",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"Size of the component",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},children:{description:"Content to be rendered inside the component",type:{name:"node"},required:!0}}};const j={title:"Atoms/Feedback/Snackbar",component:n,parameters:{layout:"centered"},argTypes:{children:{control:"text"}}},e={args:{primary:!0,children:"This is a primary Snackbar"}},r={args:{children:"This is a secondary Snackbar"}},a={args:{size:"large",children:"This is a large Snackbar"}},s={args:{size:"small",children:"This is a small Snackbar"}};var c,i,t;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    primary: true,
    children: 'This is a primary Snackbar'
  }
}`,...(t=(i=e.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};var m,l,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'This is a secondary Snackbar'
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,u,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: 'This is a large Snackbar'
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var y,S,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: 'This is a small Snackbar'
  }
}`,...(b=(S=s.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const q=["Primary","Secondary","Large","Small"];export{a as Large,e as Primary,r as Secondary,s as Small,q as __namedExportsOrder,j as default};
