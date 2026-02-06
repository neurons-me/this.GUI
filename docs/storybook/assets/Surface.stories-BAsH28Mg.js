import{j as n}from"./iframe-pzPFiMX_.js";import{S as C}from"./Surface-Dphx8zIr.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-DYSFjcuz.js";import"./clsx-B-dksMZM.js";import"./useTheme-BHTe8Tsy.js";import"./styled-Ddslrojq.js";import"./memoTheme-D6Kqj5GO.js";import"./generateUtilityClasses-CoM_PQv9.js";const _={title:"Atoms/Surface",component:C,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{variant:{control:{type:"select"},options:["elevation","outlined","card"]},elevation:{control:{type:"number"}},square:{control:{type:"boolean"}},sx:{control:!1,description:"MUI sx prop (object/function/array). Disabled in controls to avoid noisy UI."},children:{control:!1}}},q=()=>n.jsxs("div",{children:[n.jsx("div",{style:{fontWeight:700,marginBottom:6},children:"Surface"}),n.jsx("div",{style:{opacity:.78,fontSize:13},children:"A visual container primitive (MUI Paper wrapper)."})]}),r={sx:{padding:16,width:360,maxWidth:"100%"},children:n.jsx(q,{})},e={args:{...r,variant:"elevation",elevation:2}},a={args:{...r,variant:"outlined"}},s={args:{...r,variant:"card",sx:[j=>{var i;return{padding:18,borderRadius:((i=j.shape)==null?void 0:i.borderRadius)??8}}]}},o={args:{...r,variant:"outlined",square:!0}},t={args:{...r,variant:"elevation",elevation:1,sx:[r.sx,{border:"1px dashed",borderColor:"divider"}]}};var d,c,p;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    variant: 'elevation',
    elevation: 2
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var l,m,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    variant: 'outlined'
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var v,g,x;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(S=(h=o.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var f,y,A;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    variant: 'elevation',
    elevation: 1,
    sx: [baseArgs.sx as any, {
      border: '1px dashed',
      borderColor: 'divider'
    }]
  }
}`,...(A=(y=t.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};const z=["Elevation","Outlined","Card","Square","CustomSx"];export{s as Card,t as CustomSx,e as Elevation,a as Outlined,o as Square,z as __namedExportsOrder,_ as default};
