import{j as z}from"./jsx-runtime-2aae9559.js";import"./index-ff614419.js";import{P as i}from"./index-96bde590.js";const o=({primary:P,size:B,children:T,...S})=>{const b=P?"progressbar--primary":"progressbar--secondary";return z.jsx("div",{className:["progressbar",`progressbar--${B}`,b].join(" "),...S,children:T})};o.propTypes={primary:i.bool,size:i.oneOf(["small","medium","large"]),children:i.node.isRequired};o.defaultProps={primary:!1,size:"medium"};o.__docgenInfo={description:"ProgressBar component for user interaction",methods:[],displayName:"ProgressBar",props:{primary:{defaultValue:{value:"false",computed:!1},description:"Is this the primary style for the component?",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"Size of the component",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},children:{description:"Content to be rendered inside the component",type:{name:"node"},required:!0}}};const j={title:"Atoms/Feedback/ProgressBar",component:o,parameters:{layout:"centered"},argTypes:{children:{control:"text"}}},r={args:{primary:!0,children:"This is a primary ProgressBar"}},e={args:{children:"This is a secondary ProgressBar"}},s={args:{size:"large",children:"This is a large ProgressBar"}},a={args:{size:"small",children:"This is a small ProgressBar"}};var n,t,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    primary: true,
    children: 'This is a primary ProgressBar'
  }
}`,...(m=(t=r.parameters)==null?void 0:t.docs)==null?void 0:m.source}}};var c,l,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'This is a secondary ProgressBar'
  }
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,u,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: 'This is a large ProgressBar'
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,y,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: 'This is a small ProgressBar'
  }
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const q=["Primary","Secondary","Large","Small"];export{s as Large,r as Primary,e as Secondary,a as Small,q as __namedExportsOrder,j as default};
