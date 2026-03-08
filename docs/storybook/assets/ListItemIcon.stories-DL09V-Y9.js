import{j as e,T as v}from"./iframe-B8RbS7uw.js";import{L as m,a as f}from"./ListItemText-DsM9Hd6S.js";import{L as i}from"./ListItemIcon-BlA-NrAV.js";import{I as a}from"./Icon-DMXHGruU.js";import{L as T}from"./List-DIMl_BlM.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./memoTheme-DOBzPGVq.js";import"./styled-Cw_y6cYg.js";import"./ListContext-Cnf3pXFL.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./isMuiElement-D__pFJ8d.js";import"./useForkRef-BVrKvtW-.js";import"./ListItemText-v0yyG743.js";import"./listItemTextClasses-CbyehWdQ.js";import"./useSlot-xNjt_Hcj.js";import"./Typography-9CeYDXau.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./listItemIconClasses-CpxGA8ew.js";const q={title:"Atoms/Organization/ListItemIcon",component:i,tags:["autodocs"],decorators:[t=>e.jsx(v,{children:e.jsx("div",{style:{padding:16,minHeight:260,maxWidth:520},children:e.jsx(t,{})})})],parameters:{docs:{description:{component:`
The **ListItemIcon** atom is a thin wrapper around MUI's \`MuiListItemIcon\` and remains faithful to its API.

In **declarative** mode, the resolver adds sugar to render icons by **token** via the registry:
- \`icon\`: string token (e.g., \`"lucide:mail"\`, \`"mui:settings"\`) or React node
- \`iconProps\`: forwarded to the registry \`<Icon />\` when \`icon\` is a token
- \`iconColor\`: convenience color for the registry icon
- \`size\`: icon size (default 20)

Tokens are **normalized** (lowercased & trimmed) to avoid missing icons due to casing.

---
## React usage
~~~jsx
<List>
  <ListItem>
    <ListItemIcon sx={{ minWidth: 36 }}>
      <Icon name="lucide:mail" size={20} />
    </ListItemIcon>
    <ListItemText primary="Inbox" />
  </ListItem>
</List>
~~~

## Declarative JSON / Resolver
~~~json
{
  "type": "ListItemIcon",
  "props": {
    "icon": "lucide:mail",
    "sx": { "minWidth": 36 },
    "iconProps": { "strokeWidth": 1.5 }
  }
}
~~~
        `}},controls:{exclude:["children"]}},argTypes:{sx:{control:"object",table:{category:"Style"}},className:{control:"text"}},args:{sx:{},children:void 0}},c=({children:t})=>e.jsx(T,{dense:!0,children:e.jsx(f,{children:t})}),s={render:t=>e.jsxs(c,{children:[e.jsx(i,{...t,children:e.jsx(a,{name:"lucide:mail"})}),e.jsx(m,{primary:"Item with icon slot"})]})},r={name:"Declarative token (doc example)",render:()=>e.jsxs(c,{children:[e.jsx(i,{sx:{minWidth:36},children:e.jsx(a,{name:"mail",fontSize:20})}),e.jsx(m,{primary:"Inbox (token)"})]})},o={render:()=>e.jsxs(c,{children:[e.jsx(i,{sx:{minWidth:40},children:e.jsx(a,{name:"mui:settings"})}),e.jsx(m,{primary:"Settings (React child)"})]})},n={render:()=>e.jsxs(c,{children:[e.jsx(i,{sx:{minWidth:48},children:e.jsx(a,{name:"lucide:user"})}),e.jsx(m,{primary:"Custom minWidth via sx"})]})};var d,l,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <DemoList>
      <ListItemIcon {...args}>
        <Icon name="lucide:mail" />
      </ListItemIcon>
      <ListItemText primary="Item with icon slot" />
    </DemoList>
}`,...(p=(l=s.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var x,I,h;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Declarative token (doc example)',
  render: () => <DemoList>
      {/* Emula el resultado del resolver al usar icon="lucide:mail" */}
      <ListItemIcon sx={{
      minWidth: 36
    }}>
        <Icon name="mail" fontSize={20} />
      </ListItemIcon>
      <ListItemText primary="Inbox (token)" />
    </DemoList>
}`,...(h=(I=r.parameters)==null?void 0:I.docs)==null?void 0:h.source}}};var u,L,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <DemoList>
      <ListItemIcon sx={{
      minWidth: 40
    }}>
        <Icon name="mui:settings" />
      </ListItemIcon>
      <ListItemText primary="Settings (React child)" />
    </DemoList>
}`,...(g=(L=o.parameters)==null?void 0:L.docs)==null?void 0:g.source}}};var j,y,W;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <DemoList>
      <ListItemIcon sx={{
      minWidth: 48
    }}>
        <Icon name="lucide:user" />
      </ListItemIcon>
      <ListItemText primary="Custom minWidth via sx" />
    </DemoList>
}`,...(W=(y=n.parameters)==null?void 0:y.docs)==null?void 0:W.source}}};const B=["Playground","WithTokenViaResolverExample","WithReactChild","WithSx"];export{s as Playground,o as WithReactChild,n as WithSx,r as WithTokenViaResolverExample,B as __namedExportsOrder,q as default};
