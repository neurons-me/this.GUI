import{j as e}from"./iframe-BzW5L-sB.js";import{L as t}from"./ListItem-vcmmrSm7.js";import{L as s}from"./ListItemIcon-cDUpqSpL.js";import{L as r}from"./ListItemText-dUjsv12w.js";import{I as i}from"./Icon-BWddFN6m.js";import{L as j}from"./List-CfogoPEj.js";import"./preload-helper-Dp1pzeXC.js";import"./listItemIconClasses-jF6qDQ2k.js";import"./ListContext-CE8eRrev.js";import"./isMuiElement-z06gYSFq.js";import"./useForkRef-BZw98wdx.js";import"./ListItemText-BwhDZPrm.js";import"./listItemTextClasses-BJSyu6-k.js";import"./useSlot-CYJL6v7h.js";const O={title:"Atoms/Organization/ListItem",component:t,tags:["autodocs"],decorators:[n=>e.jsx("div",{style:{padding:16,minHeight:260,maxWidth:560},children:e.jsx(n,{})})],parameters:{docs:{description:{component:`
The **ListItem** atom is a thin wrapper around MUI's \`MuiListItem\`, staying faithful to its API and polymorphism.
In **declarative** mode (resolver), it simply forwards MUI props and allows granular styling via \`sx\`.

---

## React usage
~~~jsx
<List dense>
  <ListItem divider>
    <ListItemIcon>
      <Icon name="lucide:inbox" />
    </ListItemIcon>
    <ListItemText primary="Inbox" secondary="Messages" />
  </ListItem>
</List>
~~~

## Declarative JSON / Resolver
~~~json
{
  "type": "ListItem",
  "props": {
    "dense": true,
    "divider": true,
    "selected": true,
    "sx": { "py": 1 }
  }
}
~~~
        `}},controls:{exclude:["component","children"]}},argTypes:{dense:{control:"boolean"},divider:{control:"boolean"},disableGutters:{control:"boolean"},alignItems:{control:{type:"radio"},options:["center","flex-start"]},sx:{control:"object"}},args:{dense:!1,divider:!1,disableGutters:!1,alignItems:"center",sx:{},children:void 0}},c=({children:n})=>e.jsx(j,{dense:!0,sx:{bgcolor:"background.paper",borderRadius:1,overflow:"hidden",border:"1px solid",borderColor:"divider"},children:n}),o={render:n=>e.jsx(c,{children:e.jsxs(t,{...n,children:[e.jsx(s,{children:e.jsx(i,{name:"lucide:inbox"})}),e.jsx(r,{primary:"Inbox",secondary:"Messages"})]})})},a={render:()=>e.jsxs(c,{children:[e.jsxs(t,{children:[e.jsx(s,{children:e.jsx(i,{name:"lucide:mail"})}),e.jsx(r,{primary:"Default",secondary:"No props"})]}),e.jsxs(t,{dense:!0,children:[e.jsx(s,{children:e.jsx(i,{name:"lucide:mail"})}),e.jsx(r,{primary:"Dense"})]}),e.jsxs(t,{divider:!0,children:[e.jsx(s,{children:e.jsx(i,{name:"lucide:mail"})}),e.jsx(r,{primary:"With divider"})]}),e.jsxs(t,{children:[e.jsx(s,{children:e.jsx(i,{name:"lucide:mail"})}),e.jsx(r,{primary:"Default (no selected on ListItem)"})]}),e.jsxs(t,{alignItems:"flex-start",children:[e.jsx(s,{children:e.jsx(i,{name:"lucide:mail"})}),e.jsx(r,{primary:"Align start",secondary:"Secondary text that wraps onto multiple lines for demo."})]})]})},m={render:()=>e.jsx(c,{children:e.jsxs(t,{sx:{py:1.25,"&:hover":{bgcolor:"action.hover"}},children:[e.jsx(s,{sx:{minWidth:40},children:e.jsx(i,{name:"lucide:user"})}),e.jsx(r,{primary:"Profile",secondary:"Account",secondaryTypographyProps:{color:"text.secondary"}})]})})};var d,l,I;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <DemoList>
      <ListItem {...args}>
        <ListItemIcon>
          <Icon name="lucide:inbox" />
        </ListItemIcon>
        <ListItemText primary="Inbox" secondary="Messages" />
      </ListItem>
    </DemoList>
}`,...(I=(l=o.parameters)==null?void 0:l.docs)==null?void 0:I.source}}};var p,x,L;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <DemoList>
      <ListItem>
        <ListItemIcon>
          <Icon name="lucide:mail" />
        </ListItemIcon>
        <ListItemText primary="Default" secondary="No props" />
      </ListItem>
      <ListItem dense>
        <ListItemIcon>
          <Icon name="lucide:mail" />
        </ListItemIcon>
        <ListItemText primary="Dense" />
      </ListItem>
      <ListItem divider>
        <ListItemIcon>
          <Icon name="lucide:mail" />
        </ListItemIcon>
        <ListItemText primary="With divider" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Icon name="lucide:mail" />
        </ListItemIcon>
        <ListItemText primary="Default (no selected on ListItem)" />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemIcon>
          <Icon name="lucide:mail" />
        </ListItemIcon>
        <ListItemText primary="Align start" secondary="Secondary text that wraps onto multiple lines for demo." />
      </ListItem>
    </DemoList>
}`,...(L=(x=a.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var u,y,h;m.parameters={...m.parameters,docs:{...(u=m.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <DemoList>
      <ListItem sx={{
      py: 1.25,
      '&:hover': {
        bgcolor: 'action.hover'
      }
    }}>
        <ListItemIcon sx={{
        minWidth: 40
      }}>
          <Icon name="lucide:user" />
        </ListItemIcon>
        <ListItemText primary="Profile" secondary="Account" secondaryTypographyProps={{
        color: 'text.secondary'
      }} />
      </ListItem>
    </DemoList>
}`,...(h=(y=m.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const E=["Playground","Variants","WithSx"];export{o as Playground,a as Variants,m as WithSx,E as __namedExportsOrder,O as default};
