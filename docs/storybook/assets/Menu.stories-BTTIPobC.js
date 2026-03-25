import{j as e,b as a,r as j}from"./iframe-6uH7LS29.js";import{M as g}from"./Menu-D6q-Ly2D.js";import{B as P}from"./Button-DVVrmC69.js";import{M as i}from"./MenuItem-CyEFQD34.js";import"./preload-helper-Dp1pzeXC.js";import"./Menu-pF_SJp2N.js";import"./useSlot-BNspzQsr.js";import"./useForkRef-DHyRY2fA.js";import"./Grow-Ceoj-WsW.js";import"./utils-TdGZNhF9.js";import"./TransitionGroupContext-BkV_2tYX.js";import"./Portal-BSfwfkN1.js";import"./List-fs1uovO4.js";import"./ListContext-g5RfciKr.js";import"./Paper-svpWbYa2.js";import"./Modal-BKjM9TFc.js";import"./useEventCallback-5BkAEj5O.js";import"./mergeSlotProps-Di-ZIovM.js";import"./ButtonBase-BEo9qRst.js";import"./CircularProgress--WBlmhB1.js";import"./listItemIconClasses-Ba9ceW1H.js";import"./listItemTextClasses-DmqPxHNV.js";import"./dividerClasses-WFQetUts.js";const G={title:"Molecules/Menu",component:g,tags:["autodocs"],decorators:[r=>e.jsx("div",{style:{padding:16,minHeight:260},children:e.jsx(r,{})})],parameters:{docs:{description:{component:`
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
        `}},controls:{exclude:["anchorEl","PaperProps","MenuListProps"]}},argTypes:{open:{control:"boolean"},keepMounted:{control:"boolean"},variant:{control:{type:"radio"},options:["menu","selectedMenu"]},elevation:{control:{type:"number",min:0,max:24,step:1}},sx:{control:"object"}},args:{open:!1,keepMounted:!1,variant:"menu",elevation:1,sx:{},children:void 0}},s=r=>{const[l,p]=j.useState(null),M=!!l,v=y=>p(y.currentTarget),o=()=>p(null);return e.jsxs(e.Fragment,{children:[e.jsx(P,{variant:"outlined",onClick:v,"data-testid":"open-menu",children:"Open Menu"}),e.jsx(g,{...r,open:M,anchorEl:l,onClose:o,onClick:o,children:r.children??e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:o,children:"Profile"}),e.jsx(i,{onClick:o,children:"My account"}),e.jsx(i,{onClick:o,children:"Logout"})]})})]})},t={render:r=>e.jsx(s,{...r})},n={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[e.jsxs("div",{children:[e.jsx(a,{variant:"h6",gutterBottom:!0,children:"With Paper and List Sx"}),e.jsx(s,{...r,sx:{mt:1},PaperProps:{elevation:2,sx:{borderRadius:2}},MenuListProps:{sx:{py:.5}}})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"h6",gutterBottom:!0,children:"Keep Mounted"}),e.jsx(s,{...r,keepMounted:!0})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"h6",gutterBottom:!0,children:"Custom Origins"}),e.jsx(s,{...r,sx:{mt:1},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}})]})]})};var c,u,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <DemoMenu {...args} />
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,h,x;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      <div>
        <Typography variant="h6" gutterBottom>With Paper and List Sx</Typography>
        <DemoMenu {...args} sx={{
        mt: 1
      }} PaperProps={{
        elevation: 2,
        sx: {
          borderRadius: 2
        }
      }} MenuListProps={{
        sx: {
          py: 0.5
        }
      }} />
      </div>
      <div>
        <Typography variant="h6" gutterBottom>Keep Mounted</Typography>
        <DemoMenu {...args} keepMounted />
      </div>
      <div>
        <Typography variant="h6" gutterBottom>Custom Origins</Typography>
        <DemoMenu {...args} sx={{
        mt: 1
      }} anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }} transformOrigin={{
        vertical: 'top',
        horizontal: 'left'
      }} />
      </div>
    </div>
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const J=["Playground","Variants"];export{t as Playground,n as Variants,J as __namedExportsOrder,G as default};
