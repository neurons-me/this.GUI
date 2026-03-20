import{p as G,q as E,r as F,h as H,j as e,i as O,aX as T,k as _,s as $,n as q}from"./iframe-w4xmodgg.js";import{L as o}from"./List-C7wjHdn0.js";import{L as b}from"./ListItem-DOeAeJNO.js";import{L as h}from"./ListItemIcon-CT4xyxjD.js";import{L as g}from"./ListItemText-DAWAZl1m.js";import{I as x}from"./Icon-DJUy-n4o.js";import"./preload-helper-Dp1pzeXC.js";import"./List-BjvyU1La.js";import"./ListContext-Afec-LvI.js";import"./ListItem-4Uog47My.js";import"./isMuiElement-Dc3WEJ2w.js";import"./useForkRef-BiuEh3Zb.js";import"./listItemButtonClasses-BTUKKPd9.js";import"./listItemIconClasses-D4ESnLPW.js";import"./ListItemText-B9uMbjJW.js";import"./listItemTextClasses-BGEroACm.js";import"./useSlot-Hyz3M8yg.js";function J(r){return G("MuiListSubheader",r)}E("MuiListSubheader",["root","colorPrimary","colorInherit","gutters","inset","sticky"]);const X=r=>{const{classes:s,color:t,disableGutters:a,inset:u,disableSticky:m}=r,i={root:["root",t!=="default"&&`color${T(t)}`,!a&&"gutters",u&&"inset",!m&&"sticky"]};return _(i,J,s)},B=$("li",{name:"MuiListSubheader",slot:"Root",overridesResolver:(r,s)=>{const{ownerState:t}=r;return[s.root,t.color!=="default"&&s[`color${T(t.color)}`],!t.disableGutters&&s.gutters,t.inset&&s.inset,!t.disableSticky&&s.sticky]}})(q(({theme:r})=>({boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:(r.vars||r).palette.text.secondary,fontFamily:r.typography.fontFamily,fontWeight:r.typography.fontWeightMedium,fontSize:r.typography.pxToRem(14),variants:[{props:{color:"primary"},style:{color:(r.vars||r).palette.primary.main}},{props:{color:"inherit"},style:{color:"inherit"}},{props:({ownerState:s})=>!s.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:s})=>s.inset,style:{paddingLeft:72}},{props:({ownerState:s})=>!s.disableSticky,style:{position:"sticky",top:0,zIndex:1,backgroundColor:(r.vars||r).palette.background.paper}}]}))),y=F.forwardRef(function(s,t){const a=H({props:s,name:"MuiListSubheader"}),{className:u,color:m="default",component:i="li",disableGutters:C=!1,disableSticky:N=!1,inset:z=!1,...A}=a,S={...a,color:m,component:i,disableGutters:C,disableSticky:N,inset:z},D=X(S);return e.jsx(B,{as:i,className:O(D.root,u),ref:t,ownerState:S,...A})});y&&(y.muiSkipListHighlight=!0);const ue={title:"Molecules/Organization/List",component:o,tags:["autodocs"],decorators:[r=>e.jsx("div",{style:{padding:16,minHeight:260,maxWidth:560},children:e.jsx(r,{})})],parameters:{docs:{description:{component:`
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
        `}},controls:{exclude:["component","children","subheader"]}},argTypes:{dense:{control:"boolean"},disablePadding:{control:"boolean"},sx:{control:"object",table:{category:"Style"}}},args:{dense:!1,disablePadding:!1,sx:{bgcolor:"background.paper",borderRadius:1,border:"1px solid",borderColor:"divider"}}},p=()=>e.jsxs(e.Fragment,{children:[e.jsxs(b,{children:[e.jsx(h,{children:e.jsx(x,{name:"lucide:inbox"})}),e.jsx(g,{primary:"Inbox"})]}),e.jsxs(b,{children:[e.jsx(h,{children:e.jsx(x,{name:"lucide:send"})}),e.jsx(g,{primary:"Sent"})]}),e.jsxs(b,{children:[e.jsx(h,{children:e.jsx(x,{name:"lucide:star"})}),e.jsx(g,{primary:"Starred"})]})]}),n={render:r=>e.jsx(o,{...r,children:e.jsx(p,{})})},d={name:"With subheader (MUI prop)",render:()=>e.jsx(o,{subheader:e.jsx(y,{component:"div",sx:{fontWeight:600},children:"Shortcuts"}),children:e.jsx(p,{})})},l={args:{dense:!0,disablePadding:!0},render:r=>e.jsx(o,{...r,children:e.jsx(p,{})})},c={args:{sx:{bgcolor:"background.paper",borderRadius:2,boxShadow:1}},render:r=>e.jsx(o,{...r,children:e.jsx(p,{})})};var L,f,j;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(v=(R=d.parameters)==null?void 0:R.docs)==null?void 0:v.source}}};var k,w,M;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    dense: true,
    disablePadding: true
  },
  render: args => <List {...args}>
      <SampleRows />
    </List>
}`,...(M=(w=l.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var P,W,U;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(U=(W=c.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};const me=["Playground","WithSubheader","DenseAndNoPadding","StyledWithSx"];export{l as DenseAndNoPadding,n as Playground,c as StyledWithSx,d as WithSubheader,me as __namedExportsOrder,ue as default};
