import{j as e,r as b}from"./iframe-C1GRP0hj.js";import{M as E}from"./Menu-D621uBYZ.js";import{B as O}from"./Button-BI6tJqAB.js";import{M as p}from"./MenuItem-BxvuRwOv.js";import"./preload-helper-Dp1pzeXC.js";import"./Menu-BzhukQWv.js";import"./clsx-B-dksMZM.js";import"./styled-8fWbaqUV.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useSlot-CKSjisIe.js";import"./useForkRef-BhU-CSAb.js";import"./Grow-D_K8rWid.js";import"./useTheme-CCB-ESoo.js";import"./utils--q6FxFGJ.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./TransitionGroupContext-qNdRr-hk.js";import"./index-DyzKfLlg.js";import"./index-Be--jnHL.js";import"./Portal-G2dvxw46.js";import"./List-CQGWwlqq.js";import"./ListContext-Bpm4Q4ce.js";import"./Paper-DxQ0_Ivm.js";import"./memoTheme-q_hzTFOc.js";import"./Modal-BWGIaPdl.js";import"./useEventCallback-Bs6yfZ5k.js";import"./mergeSlotProps-By6iUkp4.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-rOZxXEMH.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B-nFzJrp.js";import"./listItemIconClasses-CpxGA8ew.js";import"./listItemTextClasses-CbyehWdQ.js";import"./dividerClasses-yCLEuapk.js";const pe={title:"Atoms/Navigation/Menu",component:E,tags:["autodocs"],decorators:[r=>e.jsx("div",{style:{padding:16,minHeight:260},children:e.jsx(r,{})})],parameters:{docs:{description:{component:`
The **Menu** atom is a thin wrapper around MUI's \`MuiMenu\`. It supports **granular styling** via:
- \`sx\` — root popover/menu container
- \`paperSx\` — Paper slot
- \`listSx\` — MenuList slot

You can also pass \`PaperProps\` and \`MenuListProps\`; their \`sx\` are **merged** with \`paperSx\`/\`listSx\`.

---
## Basic usage
~~~jsx
const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
const open = Boolean(anchorEl);

<Button onClick={(e) => setAnchorEl(e.currentTarget)}>Open menu</Button>
<Menu open={open} anchorEl={anchorEl} onClose={() => setAnchorEl(null)}>
  <MenuItem onClick={() => setAnchorEl(null)}>Profile</MenuItem>
  <MenuItem onClick={() => setAnchorEl(null)}>Settings</MenuItem>
</Menu>
~~~

## Granular styling
~~~jsx
<Menu
  open={open}
  anchorEl={anchorEl}
  onClose={handleClose}
  sx={{ mt: 1 }}
  paperSx={{ borderRadius: 10 }}
  listSx={{ py: 0.5 }}
  PaperProps={{ elevation: 3 }}
/>
~~~

## Declarative JSON / Resolver
~~~json
{
  "type": "Menu",
  "props": {
    "open": true,
    "sx": { "mt": 1 },
    "paperSx": { "borderRadius": 10 },
    "listSx": { "py": 0.5 },
    "PaperProps": { "elevation": 3 },
    "children": [
      { "type": "MenuItem", "props": { "children": "Profile" } },
      { "type": "MenuItem", "props": { "children": "Settings" } }
    ]
  }
}
~~~

*Note:* \`anchorEl\` is a runtime element reference and is typically provided by the renderer/context in declarative mode.
        `}},controls:{exclude:["anchorEl","PaperProps","MenuListProps"]}},argTypes:{open:{control:"boolean"},keepMounted:{control:"boolean"},variant:{control:{type:"radio"},options:["menu","selectedMenu"]},elevation:{control:{type:"number",min:0,max:24,step:1}},sx:{control:"object"}},args:{open:!1,keepMounted:!1,variant:"menu",elevation:1,sx:{},children:void 0}},i=r=>{const[l,c]=b.useState(null),f=!!l,C=k=>c(k.currentTarget),n=()=>c(null);return e.jsxs(e.Fragment,{children:[e.jsx(O,{variant:"outlined",onClick:C,"data-testid":"open-menu",children:"Open Menu"}),e.jsx(E,{...r,open:f,anchorEl:l,onClose:n,onClick:n,children:r.children??e.jsxs(e.Fragment,{children:[e.jsx(p,{onClick:n,children:"Profile"}),e.jsx(p,{onClick:n,children:"My account"}),e.jsx(p,{onClick:n,children:"Logout"})]})})]})},o={render:r=>e.jsx(i,{...r})},t={args:{sx:{mt:1}},render:r=>e.jsx(i,{...r,PaperProps:{elevation:2,sx:{borderRadius:2}},MenuListProps:{sx:{py:.5}}})},s={args:{keepMounted:!0},render:r=>e.jsx(i,{...r})},a={args:{sx:{mt:1},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}},render:r=>e.jsx(i,{...r})};var m,u,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <DemoMenu {...args} />
}`,...(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var h,x,g;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    sx: {
      mt: 1
    }
  },
  render: args => <DemoMenu {...args} PaperProps={{
    elevation: 2,
    sx: {
      borderRadius: 2
    }
  }} MenuListProps={{
    sx: {
      py: 0.5
    }
  }} />
}`,...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var M,P,v;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    keepMounted: true
  },
  render: args => <DemoMenu {...args} />
}`,...(v=(P=s.parameters)==null?void 0:P.docs)==null?void 0:v.source}}};var S,j,y;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    sx: {
      mt: 1
    },
    // Showcase custom anchor/transform origins
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left'
    }
  },
  render: args => <DemoMenu {...args} />
}`,...(y=(j=a.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};const le=["Playground","WithPaperAndListSx","KeepMounted","CustomOrigins"];export{a as CustomOrigins,s as KeepMounted,o as Playground,t as WithPaperAndListSx,le as __namedExportsOrder,pe as default};
