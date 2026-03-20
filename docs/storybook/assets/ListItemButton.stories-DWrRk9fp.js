import{j as e}from"./iframe-BzW5L-sB.js";import{L as r}from"./ListItemButton-XxchjCJh.js";import{L as m}from"./ListItemIcon-cDUpqSpL.js";import{L as c,a as B}from"./ListItemText-dUjsv12w.js";import{I as s}from"./Icon-BWddFN6m.js";import{L as S}from"./List-CfogoPEj.js";import"./preload-helper-Dp1pzeXC.js";import"./ListItemButton-DdZSvkws.js";import"./ListContext-CE8eRrev.js";import"./ListItemText-BwhDZPrm.js";import"./listItemTextClasses-BJSyu6-k.js";import"./useSlot-CYJL6v7h.js";import"./useForkRef-BZw98wdx.js";import"./ButtonBase-DEfx69p-.js";import"./TransitionGroupContext-DBebgn_y.js";import"./useEventCallback-0bk4YSZd.js";import"./listItemIconClasses-jF6qDQ2k.js";import"./isMuiElement-z06gYSFq.js";const J={title:"Atoms/Organization/ListItemButton",component:r,tags:["autodocs"],decorators:[t=>e.jsx("div",{style:{padding:16,minHeight:260,maxWidth:560},children:e.jsx(t,{})})],parameters:{docs:{description:{component:`
The **ListItemButton** atom is a thin wrapper around MUI's \`MuiListItemButton\`, staying faithful to its API and polymorphism.

In **declarative** mode, the resolver adds sugar:
- \`startIcon\` / \`endIcon\`: token (e.g., \`"lucide:mail"\`, \`"mui:settings"\`) or ReactNode — rendered via the icon registry
- \`label\` / \`secondary\` → mapped to \`<ListItemText primary/secondary />\`
- Granular styling:
  - \`sx\` (root), \`iconSx\` (leading \`ListItemIcon\`), \`textSx\` (text), \`endIconSx\` (trailing icon container)

---
## React usage
~~~jsx
<List>
  <ListItem disablePadding>
    <ListItemButton selected>
      <ListItemIcon>
        <Icon name="lucide:mail" />
      </ListItemIcon>
      <ListItemText primary="Inbox" secondary="Messages" />
    </ListItemButton>
  </ListItem>
</List>
~~~

## Declarative JSON / Resolver
~~~json
{
  "type": "ListItemButton",
  "props": {
    "startIcon": "lucide:mail",
    "label": "Inbox",
    "secondary": "Messages",
    "sx": { "py": 1 },
    "iconSx": { "minWidth": 36 },
    "textSx": { "my": 0 }
  }
}
~~~
        `}},controls:{exclude:["component","children"]}},argTypes:{selected:{control:"boolean"},disabled:{control:"boolean"},dense:{control:"boolean"},divider:{control:"boolean"},alignItems:{control:{type:"radio"},options:["center","flex-start"]},sx:{control:"object"}},args:{selected:!1,disabled:!1,dense:!1,divider:!1,alignItems:"center",sx:{},children:void 0}},d=({children:t})=>e.jsx(S,{dense:!0,sx:{bgcolor:"background.paper",borderRadius:1,overflow:"hidden",border:"1px solid",borderColor:"divider"},children:e.jsx(B,{disablePadding:!0,children:t})}),o={render:t=>e.jsx(d,{children:e.jsxs(r,{...t,children:[e.jsx(m,{children:e.jsx(s,{name:"mail"})}),e.jsx(c,{primary:"Inbox",secondary:"Messages"})]})})},n={render:()=>e.jsx(d,{children:e.jsxs(r,{children:[e.jsx(m,{children:e.jsx(s,{name:"settings"})}),e.jsx(c,{primary:"Settings",secondary:"Preferences"}),e.jsx("span",{style:{marginLeft:"auto",display:"inline-flex"},children:e.jsx(s,{name:"chevron_right"})})]})})},i={render:()=>e.jsx(d,{children:e.jsxs(r,{component:"a",href:"https://neurons.me",children:[e.jsx(m,{children:e.jsx(s,{name:"link"})}),e.jsx(c,{primary:"neurons.me",secondary:"External link"})]})})},a={render:()=>e.jsx(d,{children:e.jsxs(r,{sx:{py:1.25},children:[e.jsx(m,{sx:{minWidth:40},children:e.jsx(s,{name:"person"})}),e.jsx(c,{primary:"Profile",secondary:"Account",slotProps:{secondary:{sx:{color:"text.secondary"}}}})]})})};var l,p,x;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <DemoList>
      <ListItemButton {...args}>
        <ListItemIcon>
          <Icon name="mail" />
        </ListItemIcon>
        <ListItemText primary="Inbox" secondary="Messages" />
      </ListItemButton>
    </DemoList>
}`,...(x=(p=o.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var I,L,u;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <DemoList>
      <ListItemButton>
        <ListItemIcon>
          <Icon name="settings" />
        </ListItemIcon>
        <ListItemText primary="Settings" secondary="Preferences" />
        <span style={{
        marginLeft: 'auto',
        display: 'inline-flex'
      }}>
          <Icon name="chevron_right" />
        </span>
      </ListItemButton>
    </DemoList>
}`,...(u=(L=n.parameters)==null?void 0:L.docs)==null?void 0:u.source}}};var y,g,h;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <DemoList>
      <ListItemButton component="a" href="https://neurons.me">
        <ListItemIcon>
          <Icon name="link" />
        </ListItemIcon>
        <ListItemText primary="neurons.me" secondary="External link" />
      </ListItemButton>
    </DemoList>
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var j,f,b;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <DemoList>
      <ListItemButton sx={{
      py: 1.25
    }}>
        <ListItemIcon sx={{
        minWidth: 40
      }}>
          <Icon name="person" />
        </ListItemIcon>
        <ListItemText primary="Profile" secondary="Account" slotProps={{
        secondary: {
          sx: {
            color: 'text.secondary'
          }
        }
      }} />
      </ListItemButton>
    </DemoList>
}`,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const U=["Playground","WithTrailingIcon","AsAnchorLink","WithSx"];export{i as AsAnchorLink,o as Playground,a as WithSx,n as WithTrailingIcon,U as __namedExportsOrder,J as default};
