import{j as e,r as b}from"./iframe-pzPFiMX_.js";import{M as f}from"./MenuItem-dotwKnXK.js";import{M as D}from"./Menu-BqoV5exS.js";import{I as C}from"./Icon-63DgR07G.js";import{B as v}from"./Button-mBPI-F0q.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./styled-Ddslrojq.js";import"./memoTheme-D6Kqj5GO.js";import"./List-BcAkgrYP.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./useForkRef-XcfTKrEz.js";import"./ButtonBase-CRYnpWlO.js";import"./TransitionGroupContext-BTo24QG4.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./useEventCallback-IANQAffG.js";import"./isFocusVisible-B8k4qzLc.js";import"./listItemIconClasses-B8O87iOu.js";import"./listItemTextClasses-Bvxa1hv0.js";import"./dividerClasses-DWExi19l.js";import"./Menu-Dn2g6EEb.js";import"./useSlot-DCtCaxkB.js";import"./Grow-C1NF2e5W.js";import"./useTheme-BHTe8Tsy.js";import"./utils-CKyw0omJ.js";import"./index-D_PkDxA-.js";import"./index-2UIM6VAJ.js";import"./Portal-Dox09LX0.js";import"./Paper-DYSFjcuz.js";import"./Modal-CaFxHdAt.js";import"./mergeSlotProps-By6iUkp4.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-CDK3cCwJ.js";const t=f;t.displayName="Gui.MenuItem";const ie={title:"Atoms/Navigation/MenuItem",component:t,tags:["autodocs"],decorators:[n=>e.jsx("div",{style:{padding:16,minHeight:260},children:e.jsx(n,{})})],parameters:{docs:{description:{component:`
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
        `}},controls:{exclude:["component"]}},argTypes:{dense:{control:"boolean"},divider:{control:"boolean"},disabled:{control:"boolean"},selected:{control:"boolean"},sx:{control:"object"}},args:{dense:!1,divider:!1,disabled:!1,selected:!1,sx:{},children:"Menu item"}},a=({children:n})=>{const[m,l]=b.useState(null),j=!!m,y=S=>l(S.currentTarget),r=()=>l(null);return e.jsxs(e.Fragment,{children:[e.jsx(v,{variant:"outlined",onClick:y,"data-testid":"open-menu",children:"Open Menu"}),e.jsx(D,{open:j,anchorEl:m,onClose:r,onClick:r,children:n??e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:r,children:"Profile"}),e.jsxs(t,{onClick:r,selected:!0,dense:!0,children:[e.jsx(C,{name:"settings",weight:400,fill:0,style:{marginRight:8}}),"Settings"]}),e.jsx(t,{onClick:r,disabled:!0,children:"Disabled"})]})})]})},o={render:n=>e.jsx(a,{children:e.jsx(t,{...n})})},s={render:()=>e.jsxs(a,{children:[e.jsx(t,{children:"Default"}),e.jsx(t,{selected:!0,children:"Selected"}),e.jsx(t,{disabled:!0,children:"Disabled"}),e.jsx(t,{dense:!0,children:"Dense"})]})},i={render:()=>e.jsxs(a,{children:[e.jsx(t,{children:e.jsx("strong",{children:"Custom node as children"})}),e.jsx(t,{children:e.jsx("span",{style:{opacity:.75},children:"With inline styling"})})]})};var d,c,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <DemoMenu>
      <MenuItem {...args} />
    </DemoMenu>
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,x,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <DemoMenu>
      <MenuItem>Default</MenuItem>
      <MenuItem selected>Selected</MenuItem>
      <MenuItem disabled>Disabled</MenuItem>
      <MenuItem dense>Dense</MenuItem>
    </DemoMenu>
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var M,g,I;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(I=(g=i.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};const ae=["Playground","States","WithCustomChildren"];export{o as Playground,s as States,i as WithCustomChildren,ae as __namedExportsOrder,ie as default};
