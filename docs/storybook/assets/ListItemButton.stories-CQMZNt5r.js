import{j as e}from"./iframe-C1GRP0hj.js";import{L as r}from"./ListItemButton-Dlx5EFZu.js";import{L as m}from"./ListItemIcon-DBcGoJZw.js";import{L as c}from"./ListItemText-BinbJi89.js";import{I as s}from"./Icon-K6w2oQgw.js";import{L as B}from"./List-CQGWwlqq.js";import{L as S}from"./ListItem-B60B00zU.js";import"./preload-helper-Dp1pzeXC.js";import"./ListItemButton-uFLP5lxz.js";import"./clsx-B-dksMZM.js";import"./memoTheme-q_hzTFOc.js";import"./styled-8fWbaqUV.js";import"./ListContext-Bpm4Q4ce.js";import"./listItemButtonClasses-DOfbY2LE.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useForkRef-BhU-CSAb.js";import"./ButtonBase-rOZxXEMH.js";import"./TransitionGroupContext-qNdRr-hk.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./useEventCallback-Bs6yfZ5k.js";import"./isFocusVisible-B8k4qzLc.js";import"./listItemIconClasses-CpxGA8ew.js";import"./ListItemText-Cbw7Y8Bh.js";import"./listItemTextClasses-CbyehWdQ.js";import"./useSlot-CKSjisIe.js";import"./Typography-CeTjeXIp.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./isMuiElement-COfd5KpC.js";const $={title:"Atoms/Organization/ListItemButton",component:r,tags:["autodocs"],decorators:[t=>e.jsx("div",{style:{padding:16,minHeight:260,maxWidth:560},children:e.jsx(t,{})})],parameters:{docs:{description:{component:`
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
        `}},controls:{exclude:["component","children"]}},argTypes:{selected:{control:"boolean"},disabled:{control:"boolean"},dense:{control:"boolean"},divider:{control:"boolean"},alignItems:{control:{type:"radio"},options:["center","flex-start"]},sx:{control:"object"}},args:{selected:!1,disabled:!1,dense:!1,divider:!1,alignItems:"center",sx:{},children:void 0}},d=({children:t})=>e.jsx(B,{dense:!0,sx:{bgcolor:"background.paper",borderRadius:1,overflow:"hidden",border:"1px solid",borderColor:"divider"},children:e.jsx(S,{disablePadding:!0,children:t})}),o={render:t=>e.jsx(d,{children:e.jsxs(r,{...t,children:[e.jsx(m,{children:e.jsx(s,{name:"mail"})}),e.jsx(c,{primary:"Inbox",secondary:"Messages"})]})})},n={render:()=>e.jsx(d,{children:e.jsxs(r,{children:[e.jsx(m,{children:e.jsx(s,{name:"settings"})}),e.jsx(c,{primary:"Settings",secondary:"Preferences"}),e.jsx("span",{style:{marginLeft:"auto",display:"inline-flex"},children:e.jsx(s,{name:"chevron_right"})})]})})},i={render:()=>e.jsx(d,{children:e.jsxs(r,{component:"a",href:"https://neurons.me",children:[e.jsx(m,{children:e.jsx(s,{name:"link"})}),e.jsx(c,{primary:"neurons.me",secondary:"External link"})]})})},a={render:()=>e.jsx(d,{children:e.jsxs(r,{sx:{py:1.25},children:[e.jsx(m,{sx:{minWidth:40},children:e.jsx(s,{name:"person"})}),e.jsx(c,{primary:"Profile",secondary:"Account",slotProps:{secondary:{sx:{color:"text.secondary"}}}})]})})};var l,p,x;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const ee=["Playground","WithTrailingIcon","AsAnchorLink","WithSx"];export{i as AsAnchorLink,o as Playground,a as WithSx,n as WithTrailingIcon,ee as __namedExportsOrder,$ as default};
