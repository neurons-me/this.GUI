import{j as t}from"./iframe-BzW5L-sB.js";import{S as C}from"./Surface-mxx67zfv.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-rE9EeMCB.js";const U={title:"Atoms/Surface",component:C,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{variant:{control:{type:"select"},options:["elevation","outlined","card"]},elevation:{control:{type:"number"}},square:{control:{type:"boolean"}},sx:{control:!1,description:"MUI sx prop (object/function/array). Disabled in controls to avoid noisy UI."},children:{control:!1}}},q=()=>t.jsxs("div",{children:[t.jsx("div",{style:{fontWeight:700,marginBottom:6},children:"Surface"}),t.jsx("div",{style:{opacity:.78,fontSize:13},children:"A visual container primitive (MUI Paper wrapper)."})]}),r={sx:{padding:16,width:360,maxWidth:"100%"},children:t.jsx(q,{})},e={args:{...r,variant:"elevation",elevation:2}},a={args:{...r,variant:"outlined"}},s={args:{...r,variant:"card",sx:[j=>{var i;return{padding:18,borderRadius:((i=j.shape)==null?void 0:i.borderRadius)??8}}]}},o={args:{...r,variant:"outlined",square:!0}},n={args:{...r,variant:"elevation",elevation:1,sx:[r.sx,{border:"1px dashed",borderColor:"divider"}]}};var d,c,p;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    variant: 'elevation',
    elevation: 2
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var l,u,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    variant: 'outlined'
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var v,g,x;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    variant: 'card',
    sx: [theme => ({
      padding: 18,
      borderRadius: theme.shape?.borderRadius ?? 8
    })]
  }
}`,...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,h,S;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    variant: 'outlined',
    square: true
  }
}`,...(S=(h=o.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var f,y,A;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    variant: 'elevation',
    elevation: 1,
    sx: [baseArgs.sx as any, {
      border: '1px dashed',
      borderColor: 'divider'
    }]
  }
}`,...(A=(y=n.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};const w=["Elevation","Outlined","Card","Square","CustomSx"];export{s as Card,n as CustomSx,e as Elevation,a as Outlined,o as Square,w as __namedExportsOrder,U as default};
