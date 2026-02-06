import{r as G,ak as E,j as e,az as T}from"./iframe-pzPFiMX_.js";import{L as o}from"./List-CNUwKuVL.js";import{L as b}from"./ListItem-COTt8zmE.js";import{L as g}from"./ListItemIcon-ZjjhLid5.js";import{L as h}from"./ListItemText-By8t5zgE.js";import{I as x}from"./Icon-63DgR07G.js";import{c as F}from"./clsx-B-dksMZM.js";import{m as H}from"./memoTheme-D6Kqj5GO.js";import{a as O,g as _}from"./generateUtilityClasses-CoM_PQv9.js";import{s as $,c as J}from"./styled-Ddslrojq.js";import"./preload-helper-Dp1pzeXC.js";import"./List-BcAkgrYP.js";import"./listItemIconClasses-B8O87iOu.js";import"./isMuiElement-hxkuHE68.js";import"./useForkRef-XcfTKrEz.js";import"./ListItemText-Cezk-OFv.js";import"./listItemTextClasses-Bvxa1hv0.js";import"./useSlot-DCtCaxkB.js";import"./Typography-DdAUbr75.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";function q(r){return O("MuiListSubheader",r)}_("MuiListSubheader",["root","colorPrimary","colorInherit","gutters","inset","sticky"]);const B=r=>{const{classes:s,color:t,disableGutters:a,inset:u,disableSticky:m}=r,i={root:["root",t!=="default"&&`color${T(t)}`,!a&&"gutters",u&&"inset",!m&&"sticky"]};return J(i,q,s)},K=$("li",{name:"MuiListSubheader",slot:"Root",overridesResolver:(r,s)=>{const{ownerState:t}=r;return[s.root,t.color!=="default"&&s[`color${T(t.color)}`],!t.disableGutters&&s.gutters,t.inset&&s.inset,!t.disableSticky&&s.sticky]}})(H(({theme:r})=>({boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:(r.vars||r).palette.text.secondary,fontFamily:r.typography.fontFamily,fontWeight:r.typography.fontWeightMedium,fontSize:r.typography.pxToRem(14),variants:[{props:{color:"primary"},style:{color:(r.vars||r).palette.primary.main}},{props:{color:"inherit"},style:{color:"inherit"}},{props:({ownerState:s})=>!s.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:s})=>s.inset,style:{paddingLeft:72}},{props:({ownerState:s})=>!s.disableSticky,style:{position:"sticky",top:0,zIndex:1,backgroundColor:(r.vars||r).palette.background.paper}}]}))),y=G.forwardRef(function(s,t){const a=E({props:s,name:"MuiListSubheader"}),{className:u,color:m="default",component:i="li",disableGutters:C=!1,disableSticky:z=!1,inset:N=!1,...A}=a,S={...a,color:m,component:i,disableGutters:C,disableSticky:z,inset:N},D=B(S);return e.jsx(K,{as:i,className:F(D.root,u),ref:t,ownerState:S,...A})});y&&(y.muiSkipListHighlight=!0);const ge={title:"Atoms/Organization/List",component:o,tags:["autodocs"],decorators:[r=>e.jsx("div",{style:{padding:16,minHeight:260,maxWidth:560},children:e.jsx(r,{})})],parameters:{docs:{description:{component:`
The **List** atom is a thin wrapper around MUI's \`MuiList\`, staying faithful to its API and polymorphism.

In **declarative** mode (resolver), it forwards MUI props and supports granular styling via \`sx\`.
It also provides sugar: \`subheaderText\` (and \`subheaderSx\`) to easily render a \`<ListSubheader/>\` when you don't pass \`subheader\` explicitly.

---
## React usage
~~~jsx
<List dense subheader={<li />}> // arbitrary subheader (from MUI API)
  <ListItem>
    <ListItemIcon>
      <Icon name="lucide:inbox" />
    </ListItemIcon>
    <ListItemText primary="Inbox" />
  </ListItem>
</List>
~~~

## Declarative JSON / Resolver
~~~json
{
  "type": "List",
  "props": {
    "dense": true,
    "disablePadding": false,
    "subheaderText": "Shortcuts",
    "subheaderSx": { "fontWeight": 600 },
    "sx": { "bgcolor": "background.paper", "borderRadius": 8 }
  }
}
~~~
*Note:* \`subheaderText\`/\`subheaderSx\` are **resolver-only** sugar; they are not MUI props.
        `}},controls:{exclude:["component","children","subheader"]}},argTypes:{dense:{control:"boolean"},disablePadding:{control:"boolean"},sx:{control:"object",table:{category:"Style"}}},args:{dense:!1,disablePadding:!1,sx:{bgcolor:"background.paper",borderRadius:1,border:"1px solid",borderColor:"divider"}}},p=()=>e.jsxs(e.Fragment,{children:[e.jsxs(b,{children:[e.jsx(g,{children:e.jsx(x,{name:"lucide:inbox"})}),e.jsx(h,{primary:"Inbox"})]}),e.jsxs(b,{children:[e.jsx(g,{children:e.jsx(x,{name:"lucide:send"})}),e.jsx(h,{primary:"Sent"})]}),e.jsxs(b,{children:[e.jsx(g,{children:e.jsx(x,{name:"lucide:star"})}),e.jsx(h,{primary:"Starred"})]})]}),n={render:r=>e.jsx(o,{...r,children:e.jsx(p,{})})},d={name:"With subheader (MUI prop)",render:()=>e.jsx(o,{subheader:e.jsx(y,{component:"div",sx:{fontWeight:600},children:"Shortcuts"}),children:e.jsx(p,{})})},c={args:{dense:!0,disablePadding:!0},render:r=>e.jsx(o,{...r,children:e.jsx(p,{})})},l={args:{sx:{bgcolor:"background.paper",borderRadius:2,boxShadow:1}},render:r=>e.jsx(o,{...r,children:e.jsx(p,{})})};var L,f,j;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <List {...args}>
      <SampleRows />
    </List>
}`,...(j=(f=n.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var I,R,v;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'With subheader (MUI prop)',
  render: () => <List subheader={<ListSubheader component="div" sx={{
    fontWeight: 600
  }}>Shortcuts</ListSubheader>}>
      <SampleRows />
    </List>
}`,...(v=(R=d.parameters)==null?void 0:R.docs)==null?void 0:v.source}}};var k,w,P;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    dense: true,
    disablePadding: true
  },
  render: args => <List {...args}>
      <SampleRows />
    </List>
}`,...(P=(w=c.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var M,W,U;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    sx: {
      bgcolor: 'background.paper',
      borderRadius: 2,
      boxShadow: 1
    }
  },
  render: args => <List {...args}>
      <SampleRows />
    </List>
}`,...(U=(W=l.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};const he=["Playground","WithSubheader","DenseAndNoPadding","StyledWithSx"];export{c as DenseAndNoPadding,n as Playground,l as StyledWithSx,d as WithSubheader,he as __namedExportsOrder,ge as default};
