import{j as r,c as a}from"./iframe-D9h36_NB.js";import{C as d}from"./Card-CgXnzg_p.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-BbGiJwVi.js";const x={title:"Atoms/Containers/Card",component:d,tags:["autodocs"]},e={render:()=>r.jsxs(d,{sx:{p:2},children:[r.jsx(a,{variant:"h6",gutterBottom:!0,children:"Basic Card"}),r.jsx(a,{variant:"body2",children:"This is a simple card using the GUI Card atom. It supports all typical MUI props."})]}),name:"Basic Card"},t={render:()=>r.jsxs(d,{variant:"outlined",sx:{p:2},children:[r.jsx(a,{variant:"h6",gutterBottom:!0,children:"Outlined Card"}),r.jsx(a,{variant:"body2",children:'This card uses the `variant="outlined"` prop for a border style.'})]}),name:"Outlined Card"},s={render:()=>r.jsxs(d,{raised:!0,sx:{p:2},children:[r.jsx(a,{variant:"h6",gutterBottom:!0,children:"Raised Card"}),r.jsx(a,{variant:"body2",children:"Raised cards use elevation to create visual depth."})]}),name:"Raised Card"};var o,i,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <Card sx={{
    p: 2
  }}>
      <Typography variant="h6" gutterBottom>
        Basic Card
      </Typography>
      <Typography variant="body2">
        This is a simple card using the GUI Card atom. It supports all typical MUI props.
      </Typography>
    </Card>,
  name: 'Basic Card'
}`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var p,c,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Card variant="outlined" sx={{
    p: 2
  }}>
      <Typography variant="h6" gutterBottom>
        Outlined Card
      </Typography>
      <Typography variant="body2">
        This card uses the \`variant="outlined"\` prop for a border style.
      </Typography>
    </Card>,
  name: 'Outlined Card'
}`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var m,h,l;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Card raised sx={{
    p: 2
  }}>
      <Typography variant="h6" gutterBottom>
        Raised Card
      </Typography>
      <Typography variant="body2">
        Raised cards use elevation to create visual depth.
      </Typography>
    </Card>,
  name: 'Raised Card'
}`,...(l=(h=s.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};const T=["BasicCard","OutlinedCard","RaisedCard"];export{e as BasicCard,t as OutlinedCard,s as RaisedCard,T as __namedExportsOrder,x as default};
