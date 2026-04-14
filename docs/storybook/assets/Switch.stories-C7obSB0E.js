import{j as e,B as s,a as o,r as b}from"./iframe-DTkfRnJf.js";import{S as t}from"./Switch-LPdvRKYT.js";import"./InspectorToggle-DekUrDWo.js";import"./ListItemIcon-C5SEVZ-r.js";import"./ListItemText-DGm7Bslj.js";import"./Drawer-7iJ8tsVN.js";import{S as a}from"./Stack-B9FN9faX.js";import"./Tooltip-u6KQGzAX.js";import{F as r}from"./FormControlLabel-Bxxy8va7.js";import"./preload-helper-Dp1pzeXC.js";import"./useFormControl-8weRAy94.js";import"./useSlot-BNQnsQI2.js";import"./useForkRef-Cru_ePRK.js";import"./useControlled-CK-Pi9mt.js";import"./ButtonBase-WoTwDifL.js";import"./TransitionGroupContext-BWT1wUhm.js";import"./Toolbar-D1lLG2L5.js";import"./Button-BKvYYcvp.js";import"./Icon-BM-Jwf27.js";import"./Button-nBT_Xo1p.js";import"./CircularProgress-DdkfkwCD.js";import"./IconButton-lZB8Z_vE.js";import"./IconButton-CE-WD0KS.js";import"./selectionStore-Coy7dh9o.js";import"./listItemIconClasses-DJfd2CmR.js";import"./ListContext-B5Em9Eft.js";import"./listItemTextClasses-C804xoiG.js";import"./Grow-D3KHJdX1.js";import"./Modal-CK9c8Gp7.js";import"./Paper-CyGjh2vj.js";import"./getThemeProps-CijvZDlq.js";import"./formControlState-Dq1zat_P.js";const Z={title:"Atoms/Switch",component:t,tags:["autodocs"],decorators:[l=>e.jsx(s,{sx:{p:2},children:e.jsx(l,{})})],parameters:{docs:{description:{component:`
**Switch (This.GUI atom)** is a thin wrapper around MUI's \`Switch\`.
It keeps MUI behavior, styling, and typing, but you import it from \`@/gui/atoms\` to keep your app decoupled from MUI.

---

# Usage

## React (imperative)
~~~tsx
import { Switch } from '@/gui/atoms';

export function Example() {
  const [enabled, setEnabled] = React.useState(false);
  return (
    <Switch
      checked={enabled}
      onChange={(_, v) => setEnabled(v)}
      color="primary"
      size="medium"
    />
  );
}
~~~

With an accessible label (MUI way):
~~~tsx
import { FormControlLabel } from '@mui/material';

<FormControlLabel control={<Switch defaultChecked />} label="Enable notifications" />
~~~

---

## Declarative (resolver)
If you’re rendering via a JSON/registry resolver, you can pass the same props:

~~~json
{
  "type": "Switch",
  "props": {
    "label": "Enable feature",
    "defaultChecked": true,
    "color": "primary",
    "size": "small",
    "id": "feat-toggle",
    "sx": { "ml": 1 }
  }
}
~~~

The resolver supports:
- All native MUI Switch props (\`checked\`, \`defaultChecked\`, \`onChange\`, \`color\`, \`size\`, \`disabled\`, \`edge\`, \`inputProps\`, \`sx\`, etc.).
- \`label?: ReactNode\` and \`labelPlacement?: 'start' | 'end' | 'top' | 'bottom'\` (wraps in \`FormControlLabel\` when present).
- \`id\`, \`className\`, \`data-testid\` passthrough for testing and DOM hooks.

---
        `}}},argTypes:{checked:{control:"boolean",description:"Controlled state. Use with onChange.",table:{category:"Behavior"}},defaultChecked:{control:"boolean",description:"Uncontrolled initial state.",table:{category:"Behavior"}},disabled:{control:"boolean",table:{category:"Behavior"}},color:{control:"select",options:["primary","secondary","default"],table:{category:"Appearance"}},size:{control:"radio",options:["small","medium"],description:"Same as MUI Switch (no large by default).",table:{category:"Appearance"}},edge:{control:"radio",options:[!1,"start","end"],table:{category:"Appearance"}},sx:{table:{category:"Style"}},id:{table:{category:"DOM"}},className:{table:{category:"DOM"}},onChange:{table:{disable:!0}},inputProps:{table:{disable:!0}}},args:{defaultChecked:!1,color:"primary",size:"medium",edge:!1}};function y(){const[l,g]=b.useState(!1);return e.jsxs(a,{spacing:1.5,children:[e.jsxs(o,{variant:"body2",children:["Value: ",e.jsx("b",{children:l?"true":"false"})]}),e.jsx(r,{control:e.jsx(t,{checked:l,onChange:(f,x)=>g(x),color:l?"primary":"secondary"}),label:"Controlled switch"})]})}const i={},c={render:()=>e.jsxs(a,{spacing:4,sx:{width:"100%"},children:[e.jsxs(s,{children:[e.jsx(o,{variant:"h6",gutterBottom:!0,children:"With label & placement"}),e.jsxs(a,{spacing:2,children:[e.jsx(r,{control:e.jsx(t,{defaultChecked:!0}),label:"End (default)"}),e.jsx(r,{control:e.jsx(t,{defaultChecked:!0}),label:"Start",labelPlacement:"start"}),e.jsx(r,{control:e.jsx(t,{}),label:"Top",labelPlacement:"top"}),e.jsx(r,{control:e.jsx(t,{}),label:"Bottom",labelPlacement:"bottom"})]})]}),e.jsxs(s,{children:[e.jsx(o,{variant:"h6",gutterBottom:!0,children:"Sizes & colors"}),e.jsxs(a,{spacing:2,children:[e.jsxs(a,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(o,{variant:"body2",sx:{minWidth:88},children:"small"}),e.jsx(t,{size:"small",color:"default",defaultChecked:!0}),e.jsx(t,{size:"small",color:"primary",defaultChecked:!0}),e.jsx(t,{size:"small",color:"secondary",defaultChecked:!0})]}),e.jsxs(a,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(o,{variant:"body2",sx:{minWidth:88},children:"medium"}),e.jsx(t,{size:"medium",color:"default",defaultChecked:!0}),e.jsx(t,{size:"medium",color:"primary",defaultChecked:!0}),e.jsx(t,{size:"medium",color:"secondary",defaultChecked:!0})]})]})]}),e.jsxs(s,{children:[e.jsx(o,{variant:"h6",gutterBottom:!0,children:"Controlled"}),e.jsx(y,{})]}),e.jsxs(s,{children:[e.jsx(o,{variant:"h6",gutterBottom:!0,children:"Edge & custom sx"}),e.jsxs(a,{spacing:2,children:[e.jsx(r,{control:e.jsx(t,{edge:"start",defaultChecked:!0}),label:"Edge start"}),e.jsx(r,{control:e.jsx(t,{defaultChecked:!0,sx:{"& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":{opacity:.7}}}),label:"Custom sx"})]})]})]})};var n,d,m;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(m=(d=i.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,h,u;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Stack spacing={4} sx={{
    width: '100%'
  }}>
      <Box>
        <Typography variant="h6" gutterBottom>With label & placement</Typography>
        <Stack spacing={2}>
          <FormControlLabel control={<Switch defaultChecked />} label="End (default)" />
          <FormControlLabel control={<Switch defaultChecked />} label="Start" labelPlacement="start" />
          <FormControlLabel control={<Switch />} label="Top" labelPlacement="top" />
          <FormControlLabel control={<Switch />} label="Bottom" labelPlacement="bottom" />
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>Sizes & colors</Typography>
        <Stack spacing={2}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="body2" sx={{
            minWidth: 88
          }}>small</Typography>
            <Switch size="small" color="default" defaultChecked />
            <Switch size="small" color="primary" defaultChecked />
            <Switch size="small" color="secondary" defaultChecked />
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="body2" sx={{
            minWidth: 88
          }}>medium</Typography>
            <Switch size="medium" color="default" defaultChecked />
            <Switch size="medium" color="primary" defaultChecked />
            <Switch size="medium" color="secondary" defaultChecked />
          </Stack>
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>Controlled</Typography>
        <ControlledDemo />
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>Edge & custom sx</Typography>
        <Stack spacing={2}>
          <FormControlLabel control={<Switch edge="start" defaultChecked />} label="Edge start" />
          <FormControlLabel control={<Switch defaultChecked sx={{
          '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
            opacity: 0.7
          }
        }} />} label="Custom sx" />
        </Stack>
      </Box>
    </Stack>
}`,...(u=(h=c.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const $=["Playground","Variants"];export{i as Playground,c as Variants,$ as __namedExportsOrder,Z as default};
