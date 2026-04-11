import{g as K,h as Q,r as w,c as X,b as T,j as e,d as B,aT as U,e as Y,s as R,m as D,B as d,T as s}from"./iframe-B26CALAz.js";import"./Button-C9RN3hmg.js";import"./Paper-CRvkXcvv.js";import{S as r}from"./Switch-DEdKMoxc.js";import"./controlSurface-C0kcMCZY.js";import"./ListItemIcon-2ml_yMfP.js";import"./ListItemText-D4W6YSyB.js";import"./Drawer-C6ZMtuP3.js";import{S as i}from"./Stack-DuF5VgLB.js";import"./Tooltip-DhnVtazG.js";import"./Icon-BwfjAmbM.js";import{f as Z}from"./formControlState-Dq1zat_P.js";import{u as ee}from"./useSlot-DcL_IPHt.js";import{u as te}from"./useFormControl-DUHw5UkJ.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Ygdqa8j-.js";import"./ButtonBase-CL1dL2Cz.js";import"./TransitionGroupContext-DkIGTr29.js";import"./useForkRef-CXnDbkaK.js";import"./CircularProgress-v9Dx38HO.js";import"./Paper-Dt3QYluA.js";import"./useControlled-DCXjgbPx.js";import"./Toolbar-XgnjFBe6.js";import"./selectionStore-Coy7dh9o.js";import"./listItemIconClasses-C9wThiCW.js";import"./ListContext-btDJ5CVO.js";import"./listItemTextClasses-DsrlZgkx.js";import"./Grow-CB76i9l6.js";import"./Modal-CeysofHi.js";import"./getThemeProps-zcjxvvoG.js";function oe(t){return K("MuiFormControlLabel",t)}const m=Q("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),re=t=>{const{classes:o,disabled:l,labelPlacement:a,error:f,required:C}=t,S={root:["root",l&&"disabled",`labelPlacement${U(a)}`,f&&"error",C&&"required"],label:["label",l&&"disabled"],asterisk:["asterisk",f&&"error"]};return Y(S,oe,o)},ae=R("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:l}=t;return[{[`& .${m.label}`]:o.label},o.root,o[`labelPlacement${U(l.labelPlacement)}`]]}})(D(({theme:t})=>({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${m.disabled}`]:{cursor:"default"},[`& .${m.label}`]:{[`&.${m.disabled}`]:{color:(t.vars||t).palette.text.disabled}},variants:[{props:{labelPlacement:"start"},style:{flexDirection:"row-reverse",marginRight:-11}},{props:{labelPlacement:"top"},style:{flexDirection:"column-reverse"}},{props:{labelPlacement:"bottom"},style:{flexDirection:"column"}},{props:({labelPlacement:o})=>o==="start"||o==="top"||o==="bottom",style:{marginLeft:16}}]}))),le=R("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(t,o)=>o.asterisk})(D(({theme:t})=>({[`&.${m.error}`]:{color:(t.vars||t).palette.error.main}}))),c=w.forwardRef(function(o,l){const a=X({props:o,name:"MuiFormControlLabel"}),{checked:f,className:C,componentsProps:S={},control:p,disabled:N,disableTypography:A,inputRef:ie,label:W,labelPlacement:$="end",name:ce,onChange:ne,required:q,slots:O={},slotProps:_={},value:de,...V}=a,u=te(),v=N??p.props.disabled??(u==null?void 0:u.disabled),k=q??p.props.required,P={disabled:v,required:k};["checked","name","onChange","value","inputRef"].forEach(g=>{typeof p.props[g]>"u"&&typeof a[g]<"u"&&(P[g]=a[g])});const G=Z({props:a,muiFormControl:u,states:["error"]}),h={...a,disabled:v,labelPlacement:$,required:k,error:G.error},j=re(h),H={slots:O,slotProps:{...S,..._}},[J,b]=ee("typography",{elementType:T,externalForwardedProps:H,ownerState:h});let n=W;return n!=null&&n.type!==T&&!A&&(n=e.jsx(J,{component:"span",...b,className:B(j.label,b==null?void 0:b.className),children:n})),e.jsxs(ae,{className:B(j.root,C),ownerState:h,ref:l,...V,children:[w.cloneElement(p,P),k?e.jsxs("div",{children:[n,e.jsxs(le,{ownerState:h,"aria-hidden":!0,className:j.asterisk,children:[" ","*"]})]}):n]})}),$e={title:"Atoms/Switch",component:r,tags:["autodocs"],decorators:[t=>e.jsx(d,{sx:{p:2},children:e.jsx(t,{})})],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{checked:{control:"boolean",description:"Controlled state. Use with onChange.",table:{category:"Behavior"}},defaultChecked:{control:"boolean",description:"Uncontrolled initial state.",table:{category:"Behavior"}},disabled:{control:"boolean",table:{category:"Behavior"}},color:{control:"select",options:["primary","secondary","default"],table:{category:"Appearance"}},size:{control:"radio",options:["small","medium"],description:"Same as MUI Switch (no large by default).",table:{category:"Appearance"}},edge:{control:"radio",options:[!1,"start","end"],table:{category:"Appearance"}},sx:{table:{category:"Style"}},id:{table:{category:"DOM"}},className:{table:{category:"DOM"}},onChange:{table:{disable:!0}},inputProps:{table:{disable:!0}}},args:{defaultChecked:!1,color:"primary",size:"medium",edge:!1}};function se(){const[t,o]=w.useState(!1);return e.jsxs(i,{spacing:1.5,children:[e.jsxs(s,{variant:"body2",children:["Value: ",e.jsx("b",{children:t?"true":"false"})]}),e.jsx(c,{control:e.jsx(r,{checked:t,onChange:(l,a)=>o(a),color:t?"primary":"secondary"}),label:"Controlled switch"})]})}const x={},y={render:()=>e.jsxs(i,{spacing:4,sx:{width:"100%"},children:[e.jsxs(d,{children:[e.jsx(s,{variant:"h6",gutterBottom:!0,children:"With label & placement"}),e.jsxs(i,{spacing:2,children:[e.jsx(c,{control:e.jsx(r,{defaultChecked:!0}),label:"End (default)"}),e.jsx(c,{control:e.jsx(r,{defaultChecked:!0}),label:"Start",labelPlacement:"start"}),e.jsx(c,{control:e.jsx(r,{}),label:"Top",labelPlacement:"top"}),e.jsx(c,{control:e.jsx(r,{}),label:"Bottom",labelPlacement:"bottom"})]})]}),e.jsxs(d,{children:[e.jsx(s,{variant:"h6",gutterBottom:!0,children:"Sizes & colors"}),e.jsxs(i,{spacing:2,children:[e.jsxs(i,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(s,{variant:"body2",sx:{minWidth:88},children:"small"}),e.jsx(r,{size:"small",color:"default",defaultChecked:!0}),e.jsx(r,{size:"small",color:"primary",defaultChecked:!0}),e.jsx(r,{size:"small",color:"secondary",defaultChecked:!0})]}),e.jsxs(i,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(s,{variant:"body2",sx:{minWidth:88},children:"medium"}),e.jsx(r,{size:"medium",color:"default",defaultChecked:!0}),e.jsx(r,{size:"medium",color:"primary",defaultChecked:!0}),e.jsx(r,{size:"medium",color:"secondary",defaultChecked:!0})]})]})]}),e.jsxs(d,{children:[e.jsx(s,{variant:"h6",gutterBottom:!0,children:"Controlled"}),e.jsx(se,{})]}),e.jsxs(d,{children:[e.jsx(s,{variant:"h6",gutterBottom:!0,children:"Edge & custom sx"}),e.jsxs(i,{spacing:2,children:[e.jsx(c,{control:e.jsx(r,{edge:"start",defaultChecked:!0}),label:"Edge start"}),e.jsx(c,{control:e.jsx(r,{defaultChecked:!0,sx:{"& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":{opacity:.7}}}),label:"Custom sx"})]})]})]})};var L,z,M;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:"{}",...(M=(z=x.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var F,E,I;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(I=(E=y.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};const qe=["Playground","Variants"];export{x as Playground,y as Variants,qe as __namedExportsOrder,$e as default};
