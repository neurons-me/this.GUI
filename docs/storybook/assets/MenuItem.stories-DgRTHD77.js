import{j as e,r as b}from"./iframe-DzQ8qlS5.js";import{M as n}from"./MenuItem-5BAXdFLv.js";import{M as f}from"./Menu-BVnHH4Io.js";import{I as D}from"./Icon-4frSiLka.js";import{B as C}from"./Button-BFu9Bpz3.js";import"./preload-helper-Dp1pzeXC.js";import"./MenuItem-Ccglbbh2.js";import"./ListContext-M3Y7C2tn.js";import"./useForkRef-DYkjEL9P.js";import"./ButtonBase-B1YySNdu.js";import"./TransitionGroupContext-dQxgozz0.js";import"./listItemIconClasses-Ay7ZmSTC.js";import"./listItemTextClasses-HDSnwLIK.js";import"./dividerClasses-DKcoqmU9.js";import"./Menu-D_R1YzcJ.js";import"./useSlot-h4wbdPQ6.js";import"./Grow-ns7P5pJg.js";import"./utils-DGQ64b3x.js";import"./Portal-KTuVOcz1.js";import"./List-dcCuc40T.js";import"./Paper-CEEYXBBa.js";import"./Modal-C_OOCtgn.js";import"./mergeSlotProps-B1WWk4e8.js";import"./CircularProgress-uyQXuKQe.js";const X={title:"Molecules/Menu/MenuItem",component:n,tags:["autodocs"],decorators:[t=>e.jsx("div",{style:{padding:16,minHeight:260},children:e.jsx(t,{})})],parameters:{docs:{description:{component:`
The **MenuItem** atom is a thin wrapper around MUI's \`MuiMenuItem\`.

In **declarative** mode (registry), the resolver supports:
- \`label\` / \`secondary\` → maps to \`<ListItemText primary/secondary />\`
- \`startIcon\` → token (e.g., \`"mui:Settings"\`, \`"lucide:mail"\`) or React node → renders inside \`<ListItemIcon />\`
- Granular styling via:
  - \`sx\` (root)
  - \`iconSx\` (ListItemIcon)
  - \`textSx\` (ListItemText)

---
## Declarative JSON / Resolver
~~~json
{
  "type": "MenuItem",
  "props": {
    "startIcon": "mui:Settings",
    "label": "Settings",
    "secondary": "Manage your preferences",
    "sx": { "py": 1 },
    "iconSx": { "minWidth": 36 },
    "textSx": { "my": 0 }
  }
}
~~~
        `}},controls:{exclude:["component"]}},argTypes:{dense:{control:"boolean"},divider:{control:"boolean"},disabled:{control:"boolean"},selected:{control:"boolean"},sx:{control:"object"}},args:{dense:!1,divider:!1,disabled:!1,selected:!1,sx:{},children:"Menu item"}},a=({children:t})=>{const[l,c]=b.useState(null),j=!!l,y=S=>c(S.currentTarget),r=()=>c(null);return e.jsxs(e.Fragment,{children:[e.jsx(C,{variant:"outlined",onClick:y,"data-testid":"open-menu",children:"Open Menu"}),e.jsx(f,{open:j,anchorEl:l,onClose:r,onClick:r,children:t??e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:r,children:"Profile"}),e.jsxs(n,{onClick:r,selected:!0,dense:!0,children:[e.jsx(D,{name:"settings",weight:400,fill:0,style:{marginRight:8}}),"Settings"]}),e.jsx(n,{onClick:r,disabled:!0,children:"Disabled"})]})})]})},s={render:t=>e.jsx(a,{children:e.jsx(n,{...t})})},o={render:()=>e.jsxs(a,{children:[e.jsx(n,{children:"Default"}),e.jsx(n,{selected:!0,children:"Selected"}),e.jsx(n,{disabled:!0,children:"Disabled"}),e.jsx(n,{dense:!0,children:"Dense"})]})},i={render:()=>e.jsxs(a,{children:[e.jsx(n,{children:e.jsx("strong",{children:"Custom node as children"})}),e.jsx(n,{children:e.jsx("span",{style:{opacity:.75},children:"With inline styling"})})]})};var d,m,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <DemoMenu>
      <MenuItem {...args} />
    </DemoMenu>
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,x,h;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <DemoMenu>
      <MenuItem>Default</MenuItem>
      <MenuItem selected>Selected</MenuItem>
      <MenuItem disabled>Disabled</MenuItem>
      <MenuItem dense>Dense</MenuItem>
    </DemoMenu>
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var M,g,I;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <DemoMenu>
      <MenuItem>
        <strong>Custom node as children</strong>
      </MenuItem>
      <MenuItem>
        <span style={{
        opacity: 0.75
      }}>With inline styling</span>
      </MenuItem>
    </DemoMenu>
}`,...(I=(g=i.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};const Y=["Playground","States","WithCustomChildren"];export{s as Playground,o as States,i as WithCustomChildren,Y as __namedExportsOrder,X as default};
