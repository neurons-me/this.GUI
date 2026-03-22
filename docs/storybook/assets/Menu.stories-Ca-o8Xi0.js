import{j as e,r as b}from"./iframe-D9h36_NB.js";import{M as E}from"./Menu-D3qDPnpM.js";import{B as O}from"./Button-j-Mhs7fk.js";import{M as l}from"./MenuItem-f9NExbHK.js";import"./preload-helper-Dp1pzeXC.js";import"./Menu-B4LHG26A.js";import"./useSlot-AM_X2fSs.js";import"./useForkRef-DJcJK6M1.js";import"./Grow-B2kg65ZE.js";import"./utils-CiNov-PE.js";import"./TransitionGroupContext-speb4CnD.js";import"./Portal-b9kat65T.js";import"./List-C8xHACAX.js";import"./ListContext-TapwBsUa.js";import"./Paper-BbGiJwVi.js";import"./Modal-Bqdskr9o.js";import"./useEventCallback-DWW8G7u7.js";import"./mergeSlotProps-BQrcJhMf.js";import"./ButtonBase-DIt9aqy4.js";import"./CircularProgress-DYuf6jvR.js";import"./listItemIconClasses-DkShg7Co.js";import"./listItemTextClasses-CLMDxkp7.js";import"./dividerClasses-Bn-DPjVC.js";const Z={title:"Atoms/Navigation/Menu",component:E,tags:["autodocs"],decorators:[r=>e.jsx("div",{style:{padding:16,minHeight:260},children:e.jsx(r,{})})],parameters:{docs:{description:{component:`
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
        `}},controls:{exclude:["anchorEl","PaperProps","MenuListProps"]}},argTypes:{open:{control:"boolean"},keepMounted:{control:"boolean"},variant:{control:{type:"radio"},options:["menu","selectedMenu"]},elevation:{control:{type:"number",min:0,max:24,step:1}},sx:{control:"object"}},args:{open:!1,keepMounted:!1,variant:"menu",elevation:1,sx:{},children:void 0}},i=r=>{const[p,c]=b.useState(null),f=!!p,C=k=>c(k.currentTarget),n=()=>c(null);return e.jsxs(e.Fragment,{children:[e.jsx(O,{variant:"outlined",onClick:C,"data-testid":"open-menu",children:"Open Menu"}),e.jsx(E,{...r,open:f,anchorEl:p,onClose:n,onClick:n,children:r.children??e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:n,children:"Profile"}),e.jsx(l,{onClick:n,children:"My account"}),e.jsx(l,{onClick:n,children:"Logout"})]})})]})},o={render:r=>e.jsx(i,{...r})},t={args:{sx:{mt:1}},render:r=>e.jsx(i,{...r,PaperProps:{elevation:2,sx:{borderRadius:2}},MenuListProps:{sx:{py:.5}}})},s={args:{keepMounted:!0},render:r=>e.jsx(i,{...r})},a={args:{sx:{mt:1},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}},render:r=>e.jsx(i,{...r})};var m,u,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(y=(j=a.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};const $=["Playground","WithPaperAndListSx","KeepMounted","CustomOrigins"];export{a as CustomOrigins,s as KeepMounted,o as Playground,t as WithPaperAndListSx,$ as __namedExportsOrder,Z as default};
