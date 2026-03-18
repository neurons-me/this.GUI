import{j as e,r as b}from"./iframe-C1GRP0hj.js";import{M as f}from"./MenuItem-BxvuRwOv.js";import{M as D}from"./Menu-D621uBYZ.js";import{I as C}from"./Icon-K6w2oQgw.js";import{B as v}from"./Button-BI6tJqAB.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./styled-8fWbaqUV.js";import"./memoTheme-q_hzTFOc.js";import"./ListContext-Bpm4Q4ce.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useForkRef-BhU-CSAb.js";import"./ButtonBase-rOZxXEMH.js";import"./TransitionGroupContext-qNdRr-hk.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./useEventCallback-Bs6yfZ5k.js";import"./isFocusVisible-B8k4qzLc.js";import"./listItemIconClasses-CpxGA8ew.js";import"./listItemTextClasses-CbyehWdQ.js";import"./dividerClasses-yCLEuapk.js";import"./Menu-BzhukQWv.js";import"./useSlot-CKSjisIe.js";import"./Grow-D_K8rWid.js";import"./useTheme-CCB-ESoo.js";import"./utils--q6FxFGJ.js";import"./index-DyzKfLlg.js";import"./index-Be--jnHL.js";import"./Portal-G2dvxw46.js";import"./List-CQGWwlqq.js";import"./Paper-DxQ0_Ivm.js";import"./Modal-BWGIaPdl.js";import"./mergeSlotProps-By6iUkp4.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-B-nFzJrp.js";const t=f;t.displayName="Gui.MenuItem";const ae={title:"Atoms/Navigation/MenuItem",component:t,tags:["autodocs"],decorators:[n=>e.jsx("div",{style:{padding:16,minHeight:260},children:e.jsx(n,{})})],parameters:{docs:{description:{component:`
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
}`,...(I=(g=i.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};const me=["Playground","States","WithCustomChildren"];export{o as Playground,s as States,i as WithCustomChildren,me as __namedExportsOrder,ae as default};
