import{j as r}from"./iframe-pzPFiMX_.js";import{L as t,a as s}from"./ListItemText-By8t5zgE.js";import{L as p}from"./List-BcAkgrYP.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./memoTheme-D6Kqj5GO.js";import"./styled-Ddslrojq.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./isMuiElement-hxkuHE68.js";import"./useForkRef-XcfTKrEz.js";import"./ListItemText-Cezk-OFv.js";import"./listItemTextClasses-Bvxa1hv0.js";import"./useSlot-DCtCaxkB.js";import"./Typography-DdAUbr75.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const N={title:"Atoms/Organization/ListItemText",component:t,tags:["autodocs"],decorators:[e=>r.jsx("div",{style:{padding:16,minHeight:260,maxWidth:520},children:r.jsx(e,{})})],parameters:{docs:{description:{component:`
The **ListItemText** atom is a thin wrapper around MUI's \`MuiListItemText\`.  
It preserves MUI props and typing (faithful to the original), and fits naturally into This.GUI's declarative/resolver pattern.

---
## Basic usage
~~~jsx
<List>
  <ListItem>
    <ListItemText primary="Single line" />
  </ListItem>
  <ListItem>
    <ListItemText primary="Primary" secondary="Secondary description" />
  </ListItem>
</List>
~~~

## Typography control
~~~jsx
<List>
  <ListItem>
    <ListItemText
      primary="Custom primary"
      primaryTypographyProps={{ variant: 'subtitle1', sx: { fontWeight: 600 } }}
    />
  </ListItem>
  <ListItem>
    <ListItemText
      primary="Primary"
      secondary="Secondary"
      secondaryTypographyProps={{ color: 'text.secondary', sx: { fontStyle: 'italic' } }}
    />
  </ListItem>
</List>
~~~

## Declarative JSON / Resolver
~~~json
{
  "type": "ListItemText",
  "props": {
    "primary": "Primary",
    "secondary": "Secondary",
    "primarySx": { "fontWeight": 600 },
    "secondarySx": { "color": "text.secondary", "fontStyle": "italic" }
  }
}
~~~

*Note:* In React usage, use \`primaryTypographyProps.sx\` / \`secondaryTypographyProps.sx\`.  
In declarative mode, you can also use \`primarySx\` / \`secondarySx\` and the resolver will merge them into the Typography slot props.
        `}},controls:{exclude:["component","primaryTypographyProps","secondaryTypographyProps"]}},argTypes:{primary:{control:"text"},secondary:{control:"text"},inset:{control:"boolean"},disableTypography:{control:"boolean"},sx:{control:"object"}},args:{primary:"Primary",secondary:"Secondary",inset:!1,disableTypography:!1,sx:{}}},j=({children:e})=>r.jsx(p,{dense:!0,children:r.jsx(s,{children:e})}),o={render:e=>r.jsx(j,{children:r.jsx(t,{...e})})},a={args:{secondary:""},render:e=>r.jsx(j,{children:r.jsx(t,{...e})})},i={render:()=>r.jsxs(p,{children:[r.jsx(s,{children:r.jsx(t,{primary:"Custom primary",primaryTypographyProps:{variant:"subtitle1",sx:{fontWeight:600}}})}),r.jsx(s,{children:r.jsx(t,{primary:"Primary",secondary:"Secondary",secondaryTypographyProps:{color:"text.secondary",sx:{fontStyle:"italic"}}})})]})},n={render:()=>r.jsxs(p,{children:[r.jsx(s,{children:r.jsx(t,{primary:"Inset item",inset:!0})}),r.jsx(s,{children:r.jsx(t,{primary:r.jsx("strong",{children:"Disable Typography wrapper"}),disableTypography:!0})})]})};var m,y,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <DemoList>
      <ListItemText {...args} />
    </DemoList>
}`,...(c=(y=o.parameters)==null?void 0:y.docs)==null?void 0:c.source}}};var d,l,x;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    secondary: ''
  },
  render: args => <DemoList>
      <ListItemText {...args} />
    </DemoList>
}`,...(x=(l=a.parameters)==null?void 0:l.docs)==null?void 0:x.source}}};var g,h,L;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <List>
      <ListItem>
        <ListItemText primary="Custom primary" primaryTypographyProps={{
        variant: 'subtitle1',
        sx: {
          fontWeight: 600
        }
      }} />
      </ListItem>
      <ListItem>
        <ListItemText primary="Primary" secondary="Secondary" secondaryTypographyProps={{
        color: 'text.secondary',
        sx: {
          fontStyle: 'italic'
        }
      }} />
      </ListItem>
    </List>
}`,...(L=(h=i.parameters)==null?void 0:h.docs)==null?void 0:L.source}}};var I,T,u;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <List>
      <ListItem>
        <ListItemText primary="Inset item" inset />
      </ListItem>
      <ListItem>
        <ListItemText primary={<strong>Disable Typography wrapper</strong>} disableTypography />
      </ListItem>
    </List>
}`,...(u=(T=n.parameters)==null?void 0:T.docs)==null?void 0:u.source}}};const _=["Playground","PrimaryOnly","WithTypographyProps","InsetAndDisabledTypography"];export{n as InsetAndDisabledTypography,o as Playground,a as PrimaryOnly,i as WithTypographyProps,_ as __namedExportsOrder,N as default};
