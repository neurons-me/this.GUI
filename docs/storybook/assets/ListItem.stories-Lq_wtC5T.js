import{j as e}from"./iframe-B8RbS7uw.js";import{L as t}from"./ListItem-BPc0QYIR.js";import{L as s}from"./ListItemIcon-BlA-NrAV.js";import{L as r}from"./ListItemText-DsM9Hd6S.js";import{I as i}from"./Icon-DMXHGruU.js";import{L as j}from"./List-DIMl_BlM.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./memoTheme-DOBzPGVq.js";import"./styled-Cw_y6cYg.js";import"./listItemIconClasses-CpxGA8ew.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./ListContext-Cnf3pXFL.js";import"./isMuiElement-D__pFJ8d.js";import"./useForkRef-BVrKvtW-.js";import"./ListItemText-v0yyG743.js";import"./listItemTextClasses-CbyehWdQ.js";import"./useSlot-xNjt_Hcj.js";import"./Typography-9CeYDXau.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const k={title:"Atoms/Organization/ListItem",component:t,tags:["autodocs"],decorators:[o=>e.jsx("div",{style:{padding:16,minHeight:260,maxWidth:560},children:e.jsx(o,{})})],parameters:{docs:{description:{component:`
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
        `}},controls:{exclude:["component","children"]}},argTypes:{dense:{control:"boolean"},divider:{control:"boolean"},disableGutters:{control:"boolean"},alignItems:{control:{type:"radio"},options:["center","flex-start"]},sx:{control:"object"}},args:{dense:!1,divider:!1,disableGutters:!1,alignItems:"center",sx:{},children:void 0}},c=({children:o})=>e.jsx(j,{dense:!0,sx:{bgcolor:"background.paper",borderRadius:1,overflow:"hidden",border:"1px solid",borderColor:"divider"},children:o}),n={render:o=>e.jsx(c,{children:e.jsxs(t,{...o,children:[e.jsx(s,{children:e.jsx(i,{name:"lucide:inbox"})}),e.jsx(r,{primary:"Inbox",secondary:"Messages"})]})})},a={render:()=>e.jsxs(c,{children:[e.jsxs(t,{children:[e.jsx(s,{children:e.jsx(i,{name:"lucide:mail"})}),e.jsx(r,{primary:"Default",secondary:"No props"})]}),e.jsxs(t,{dense:!0,children:[e.jsx(s,{children:e.jsx(i,{name:"lucide:mail"})}),e.jsx(r,{primary:"Dense"})]}),e.jsxs(t,{divider:!0,children:[e.jsx(s,{children:e.jsx(i,{name:"lucide:mail"})}),e.jsx(r,{primary:"With divider"})]}),e.jsxs(t,{children:[e.jsx(s,{children:e.jsx(i,{name:"lucide:mail"})}),e.jsx(r,{primary:"Default (no selected on ListItem)"})]}),e.jsxs(t,{alignItems:"flex-start",children:[e.jsx(s,{children:e.jsx(i,{name:"lucide:mail"})}),e.jsx(r,{primary:"Align start",secondary:"Secondary text that wraps onto multiple lines for demo."})]})]})},m={render:()=>e.jsx(c,{children:e.jsxs(t,{sx:{py:1.25,"&:hover":{bgcolor:"action.hover"}},children:[e.jsx(s,{sx:{minWidth:40},children:e.jsx(i,{name:"lucide:user"})}),e.jsx(r,{primary:"Profile",secondary:"Account",secondaryTypographyProps:{color:"text.secondary"}})]})})};var d,l,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <DemoList>
      <ListItem {...args}>
        <ListItemIcon>
          <Icon name="lucide:inbox" />
        </ListItemIcon>
        <ListItemText primary="Inbox" secondary="Messages" />
      </ListItem>
    </DemoList>
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var I,x,L;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(h=(y=m.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const z=["Playground","Variants","WithSx"];export{n as Playground,a as Variants,m as WithSx,z as __namedExportsOrder,k as default};
