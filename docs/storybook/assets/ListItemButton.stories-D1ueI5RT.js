import{j as e}from"./iframe-ByX3ETbE.js";import{L as B}from"./ListItemButton-CXNXNYuh.js";import{L as m}from"./ListItemIcon-5Z7wE5CV.js";import{L as c}from"./ListItemText-BOLXZYaW.js";import{I as r}from"./Icon-n_Q28tJ5.js";import{L as S}from"./List-zUSBsSAi.js";import{L as v}from"./ListItem-BpAYZPKi.js";import"./preload-helper-Dp1pzeXC.js";import"./ListContext-GS20hy27.js";import"./listItemButtonClasses-DwqKK6yX.js";import"./useForkRef-B3XxOOe_.js";import"./ButtonBase-DEWtkUEw.js";import"./TransitionGroupContext-Dq0pQY8t.js";import"./useEventCallback-B-LLEq4r.js";import"./listItemIconClasses-BC-nmgJU.js";import"./ListItemText-BsrR-8YI.js";import"./listItemTextClasses-D_bsdMDB.js";import"./useSlot-B2B5N9R_.js";import"./isMuiElement-XkMBkMJU.js";const t=B;t.displayName="Gui.ListItemButton";const $={title:"Atoms/Organization/ListItemButton",component:t,tags:["autodocs"],decorators:[s=>e.jsx("div",{style:{padding:16,minHeight:260,maxWidth:560},children:e.jsx(s,{})})],parameters:{docs:{description:{component:`
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
        `}},controls:{exclude:["component","children"]}},argTypes:{selected:{control:"boolean"},disabled:{control:"boolean"},dense:{control:"boolean"},divider:{control:"boolean"},alignItems:{control:{type:"radio"},options:["center","flex-start"]},sx:{control:"object"}},args:{selected:!1,disabled:!1,dense:!1,divider:!1,alignItems:"center",sx:{},children:void 0}},d=({children:s})=>e.jsx(S,{dense:!0,sx:{bgcolor:"background.paper",borderRadius:1,overflow:"hidden",border:"1px solid",borderColor:"divider"},children:e.jsx(v,{disablePadding:!0,children:s})}),o={render:s=>e.jsx(d,{children:e.jsxs(t,{...s,children:[e.jsx(m,{children:e.jsx(r,{name:"mail"})}),e.jsx(c,{primary:"Inbox",secondary:"Messages"})]})})},n={render:()=>e.jsx(d,{children:e.jsxs(t,{children:[e.jsx(m,{children:e.jsx(r,{name:"settings"})}),e.jsx(c,{primary:"Settings",secondary:"Preferences"}),e.jsx("span",{style:{marginLeft:"auto",display:"inline-flex"},children:e.jsx(r,{name:"chevron_right"})})]})})},i={render:()=>e.jsx(d,{children:e.jsxs(t,{component:"a",href:"https://neurons.me",children:[e.jsx(m,{children:e.jsx(r,{name:"link"})}),e.jsx(c,{primary:"neurons.me",secondary:"External link"})]})})},a={render:()=>e.jsx(d,{children:e.jsxs(t,{sx:{py:1.25},children:[e.jsx(m,{sx:{minWidth:40},children:e.jsx(r,{name:"person"})}),e.jsx(c,{primary:"Profile",secondary:"Account",slotProps:{secondary:{sx:{color:"text.secondary"}}}})]})})};var l,p,I;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <DemoList>
      <ListItemButton {...args}>
        <ListItemIcon>
          <Icon name="mail" />
        </ListItemIcon>
        <ListItemText primary="Inbox" secondary="Messages" />
      </ListItemButton>
    </DemoList>
}`,...(I=(p=o.parameters)==null?void 0:p.docs)==null?void 0:I.source}}};var x,L,u;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const q=["Playground","WithTrailingIcon","AsAnchorLink","WithSx"];export{i as AsAnchorLink,o as Playground,a as WithSx,n as WithTrailingIcon,q as __namedExportsOrder,$ as default};
