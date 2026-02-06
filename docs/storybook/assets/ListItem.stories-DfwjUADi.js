import{j as e}from"./iframe-pzPFiMX_.js";import{L as t}from"./ListItem-COTt8zmE.js";import{L as s}from"./ListItemIcon-ZjjhLid5.js";import{L as r}from"./ListItemText-By8t5zgE.js";import{I as i}from"./Icon-63DgR07G.js";import{L as j}from"./List-BcAkgrYP.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./memoTheme-D6Kqj5GO.js";import"./styled-Ddslrojq.js";import"./listItemIconClasses-B8O87iOu.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./isMuiElement-hxkuHE68.js";import"./useForkRef-XcfTKrEz.js";import"./ListItemText-Cezk-OFv.js";import"./listItemTextClasses-Bvxa1hv0.js";import"./useSlot-DCtCaxkB.js";import"./Typography-DdAUbr75.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const _={title:"Atoms/Organization/ListItem",component:t,tags:["autodocs"],decorators:[o=>e.jsx("div",{style:{padding:16,minHeight:260,maxWidth:560},children:e.jsx(o,{})})],parameters:{docs:{description:{component:`
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
}`,...(h=(y=m.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const k=["Playground","Variants","WithSx"];export{n as Playground,a as Variants,m as WithSx,k as __namedExportsOrder,_ as default};
