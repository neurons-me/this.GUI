import{p as le,q as ne,r as v,h as ce,c as z,j as e,i as M,aX as Y,k as ie,s as G,n as H,a as P,B as de}from"./iframe-w4xmodgg.js";import{S as o}from"./Switch-CI3duBy8.js";import{S as c}from"./Stack-wH0CZh4j.js";import{f as pe}from"./formControlState-Dq1zat_P.js";import{u as me}from"./useSlot-Hyz3M8yg.js";import{u as ue}from"./useFormControl-AS455AjW.js";import"./preload-helper-Dp1pzeXC.js";import"./useControlled-BmtI4a9q.js";import"./ButtonBase-GIRox2_m.js";import"./TransitionGroupContext-HHlZFox5.js";import"./useForkRef-BiuEh3Zb.js";import"./useEventCallback-DM97iYES.js";import"./getThemeProps-Sdlv51jl.js";function he(a){return le("MuiFormControlLabel",a)}const i=ne("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),be=a=>{const{classes:t,disabled:s,labelPlacement:r,error:x,required:S}=a,k={root:["root",s&&"disabled",`labelPlacement${Y(r)}`,x&&"error",S&&"required"],label:["label",s&&"disabled"],asterisk:["asterisk",x&&"error"]};return ie(k,he,t)},ge=G("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:s}=a;return[{[`& .${i.label}`]:t.label},t.root,t[`labelPlacement${Y(s.labelPlacement)}`]]}})(H(({theme:a})=>({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${i.disabled}`]:{cursor:"default"},[`& .${i.label}`]:{[`&.${i.disabled}`]:{color:(a.vars||a).palette.text.disabled}},variants:[{props:{labelPlacement:"start"},style:{flexDirection:"row-reverse",marginRight:-11}},{props:{labelPlacement:"top"},style:{flexDirection:"column-reverse"}},{props:{labelPlacement:"bottom"},style:{flexDirection:"column"}},{props:({labelPlacement:t})=>t==="start"||t==="top"||t==="bottom",style:{marginLeft:16}}]}))),fe=G("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(a,t)=>t.asterisk})(H(({theme:a})=>({[`&.${i.error}`]:{color:(a.vars||a).palette.error.main}}))),l=v.forwardRef(function(t,s){const r=ce({props:t,name:"MuiFormControlLabel"}),{checked:x,className:S,componentsProps:k={},control:d,disabled:J,disableTypography:X,inputRef:ye,label:K,labelPlacement:Q="end",name:Ce,onChange:xe,required:Z,slots:ee={},slotProps:ae={},value:Se,...te}=r,p=ue(),L=J??d.props.disabled??(p==null?void 0:p.disabled),w=Z??d.props.required,F={disabled:L,required:w};["checked","name","onChange","value","inputRef"].forEach(h=>{typeof d.props[h]>"u"&&typeof r[h]<"u"&&(F[h]=r[h])});const oe=pe({props:r,muiFormControl:p,states:["error"]}),m={...r,disabled:L,labelPlacement:Q,required:w,error:oe.error},j=be(m),re={slots:ee,slotProps:{...k,...ae}},[se,u]=me("typography",{elementType:z,externalForwardedProps:re,ownerState:m});let n=K;return n!=null&&n.type!==z&&!X&&(n=e.jsx(se,{component:"span",...u,className:M(j.label,u==null?void 0:u.className),children:n})),e.jsxs(ge,{className:M(j.root,S),ownerState:m,ref:s,...te,children:[v.cloneElement(d,F),w?e.jsxs("div",{children:[n,e.jsxs(fe,{ownerState:m,"aria-hidden":!0,className:j.asterisk,children:[" ","*"]})]}):n]})}),Re={title:"Atoms/Forms & Inputs/Switch",component:o,tags:["autodocs"],decorators:[a=>e.jsx(de,{sx:{p:2},children:e.jsx(a,{})})],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{checked:{control:"boolean",description:"Controlled state. Use with onChange.",table:{category:"Behavior"}},defaultChecked:{control:"boolean",description:"Uncontrolled initial state.",table:{category:"Behavior"}},disabled:{control:"boolean",table:{category:"Behavior"}},color:{control:"select",options:["primary","secondary","default"],table:{category:"Appearance"}},size:{control:"radio",options:["small","medium"],description:"Same as MUI Switch (no large by default).",table:{category:"Appearance"}},edge:{control:"radio",options:[!1,"start","end"],table:{category:"Appearance"}},sx:{table:{category:"Style"}},id:{table:{category:"DOM"}},className:{table:{category:"DOM"}},onChange:{table:{disable:!0}},inputProps:{table:{disable:!0}}},args:{defaultChecked:!1,color:"primary",size:"medium",edge:!1}},b={render:a=>e.jsx(o,{...a})},g={name:"With label & placement",render:()=>e.jsxs(c,{spacing:2,children:[e.jsx(l,{control:e.jsx(o,{defaultChecked:!0}),label:"End (default)"}),e.jsx(l,{control:e.jsx(o,{defaultChecked:!0}),label:"Start",labelPlacement:"start"}),e.jsx(l,{control:e.jsx(o,{}),label:"Top",labelPlacement:"top"}),e.jsx(l,{control:e.jsx(o,{}),label:"Bottom",labelPlacement:"bottom"})]}),parameters:{docs:{description:{story:"When `label` is present, the atom wraps the control with `FormControlLabel`. Use `labelPlacement` to position it."}}}},f={name:"Sizes & colors",render:()=>e.jsxs(c,{spacing:2,children:[e.jsxs(c,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(P,{variant:"body2",sx:{minWidth:88},children:"small"}),e.jsx(o,{size:"small",color:"default",defaultChecked:!0}),e.jsx(o,{size:"small",color:"primary",defaultChecked:!0}),e.jsx(o,{size:"small",color:"secondary",defaultChecked:!0})]}),e.jsxs(c,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(P,{variant:"body2",sx:{minWidth:88},children:"medium"}),e.jsx(o,{size:"medium",color:"default",defaultChecked:!0}),e.jsx(o,{size:"medium",color:"primary",defaultChecked:!0}),e.jsx(o,{size:"medium",color:"secondary",defaultChecked:!0})]})]})},y={name:"Controlled (React state)",render:()=>{const[a,t]=v.useState(!1);return e.jsxs(c,{spacing:1.5,children:[e.jsxs(P,{variant:"body2",children:["Value: ",e.jsx("b",{children:a?"true":"false"})]}),e.jsx(l,{control:e.jsx(o,{checked:a,onChange:(s,r)=>t(r),color:a?"primary":"secondary"}),label:"Controlled switch"})]})},parameters:{docs:{description:{story:"Classic controlled pattern: bind `checked` and update via `onChange`. You can also change appearance based on state."}}}},C={name:"Edge & custom sx",render:()=>e.jsxs(c,{spacing:2,children:[e.jsx(l,{control:e.jsx(o,{edge:"start",defaultChecked:!0}),label:"Edge start"}),e.jsx(l,{control:e.jsx(o,{defaultChecked:!0,sx:{"& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":{opacity:.7}}}),label:"Custom sx"})]}),parameters:{docs:{description:{story:"Pass any `sx` overrides exactly as you would with MUI. Useful for fine-grained tuning without creating a new variant."}}}};var E,U,T;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <Switch {...args} />
}`,...(T=(U=b.parameters)==null?void 0:U.docs)==null?void 0:T.source}}};var I,R,A;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'With label & placement',
  render: () => <Stack spacing={2}>
      <FormControlLabel control={<Switch defaultChecked />} label="End (default)" />
      <FormControlLabel control={<Switch defaultChecked />} label="Start" labelPlacement="start" />
      <FormControlLabel control={<Switch />} label="Top" labelPlacement="top" />
      <FormControlLabel control={<Switch />} label="Bottom" labelPlacement="bottom" />
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: 'When \`label\` is present, the atom wraps the control with \`FormControlLabel\`. Use \`labelPlacement\` to position it.'
      }
    }
  }
}`,...(A=(R=g.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var B,W,N;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Sizes & colors',
  render: () => <Stack spacing={2}>
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
}`,...(N=(W=f.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var q,D,O;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Controlled (React state)',
  render: () => {
    const [on, setOn] = React.useState(false);
    return <Stack spacing={1.5}>
        <Typography variant="body2">Value: <b>{on ? 'true' : 'false'}</b></Typography>
        <FormControlLabel control={<Switch checked={on} onChange={(_, v) => setOn(v)} color={on ? 'primary' : 'secondary'} />} label="Controlled switch" />
      </Stack>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Classic controlled pattern: bind \`checked\` and update via \`onChange\`. You can also change appearance based on state.'
      }
    }
  }
}`,...(O=(D=y.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var $,_,V;C.parameters={...C.parameters,docs:{...($=C.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Edge & custom sx',
  render: () => <Stack spacing={2}>
      <FormControlLabel control={<Switch edge="start" defaultChecked />} label="Edge start" />
      <FormControlLabel control={<Switch defaultChecked sx={{
      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        opacity: 0.7
      }
    }} />} label="Custom sx" />
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: 'Pass any \`sx\` overrides exactly as you would with MUI. Useful for fine-grained tuning without creating a new variant.'
      }
    }
  }
}`,...(V=(_=C.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};const Ae=["Playground","LabeledVariants","SizesAndColors","ControlledExample","EdgeAndSx"];export{y as ControlledExample,C as EdgeAndSx,g as LabeledVariants,b as Playground,f as SizesAndColors,Ae as __namedExportsOrder,Re as default};
