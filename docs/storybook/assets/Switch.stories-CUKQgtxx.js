import{r as v,ak as le,j as e,az as Y}from"./iframe-pzPFiMX_.js";import{S as r}from"./Switch-DVoYb0E2.js";import{B as ne}from"./Box-C7rrQtJx.js";import{S as c}from"./Stack-Cn-j00HA.js";import{c as F}from"./clsx-B-dksMZM.js";import{m as G}from"./memoTheme-D6Kqj5GO.js";import{g as ce,a as ie}from"./generateUtilityClasses-CoM_PQv9.js";import{f as de}from"./formControlState-Dq1zat_P.js";import{u as me}from"./useSlot-DCtCaxkB.js";import{u as pe}from"./useFormControl-BNH9ZhyC.js";import{T as M}from"./Typography-DdAUbr75.js";import{s as H,c as ue}from"./styled-Ddslrojq.js";import{T as P}from"./Typography-DFbRSFHa.js";import"./preload-helper-Dp1pzeXC.js";import"./Switch-CYJLF2FD.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useControlled-DcEk1YEb.js";import"./ButtonBase-CRYnpWlO.js";import"./TransitionGroupContext-BTo24QG4.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./useForkRef-XcfTKrEz.js";import"./useEventCallback-IANQAffG.js";import"./isFocusVisible-B8k4qzLc.js";import"./Box-DiPDGrGZ.js";import"./Stack-DgOMrYFx.js";import"./getThemeProps-Bn_IWXdk.js";function he(t){return ie("MuiFormControlLabel",t)}const i=ce("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),be=t=>{const{classes:o,disabled:s,labelPlacement:a,error:x,required:S}=t,k={root:["root",s&&"disabled",`labelPlacement${Y(a)}`,x&&"error",S&&"required"],label:["label",s&&"disabled"],asterisk:["asterisk",x&&"error"]};return ue(k,he,o)},ge=H("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:s}=t;return[{[`& .${i.label}`]:o.label},o.root,o[`labelPlacement${Y(s.labelPlacement)}`]]}})(G(({theme:t})=>({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${i.disabled}`]:{cursor:"default"},[`& .${i.label}`]:{[`&.${i.disabled}`]:{color:(t.vars||t).palette.text.disabled}},variants:[{props:{labelPlacement:"start"},style:{flexDirection:"row-reverse",marginRight:-11}},{props:{labelPlacement:"top"},style:{flexDirection:"column-reverse"}},{props:{labelPlacement:"bottom"},style:{flexDirection:"column"}},{props:({labelPlacement:o})=>o==="start"||o==="top"||o==="bottom",style:{marginLeft:16}}]}))),fe=H("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(t,o)=>o.asterisk})(G(({theme:t})=>({[`&.${i.error}`]:{color:(t.vars||t).palette.error.main}}))),l=v.forwardRef(function(o,s){const a=le({props:o,name:"MuiFormControlLabel"}),{checked:x,className:S,componentsProps:k={},control:d,disabled:J,disableTypography:K,inputRef:ye,label:Q,labelPlacement:X="end",name:Ce,onChange:xe,required:Z,slots:ee={},slotProps:te={},value:Se,...oe}=a,m=pe(),L=J??d.props.disabled??(m==null?void 0:m.disabled),w=Z??d.props.required,z={disabled:L,required:w};["checked","name","onChange","value","inputRef"].forEach(h=>{typeof d.props[h]>"u"&&typeof a[h]<"u"&&(z[h]=a[h])});const re=de({props:a,muiFormControl:m,states:["error"]}),p={...a,disabled:L,labelPlacement:X,required:w,error:re.error},j=be(p),ae={slots:ee,slotProps:{...k,...te}},[se,u]=me("typography",{elementType:M,externalForwardedProps:ae,ownerState:p});let n=Q;return n!=null&&n.type!==M&&!K&&(n=e.jsx(se,{component:"span",...u,className:F(j.label,u==null?void 0:u.className),children:n})),e.jsxs(ge,{className:F(j.root,S),ownerState:p,ref:s,...oe,children:[v.cloneElement(d,z),w?e.jsxs("div",{children:[n,e.jsxs(fe,{ownerState:p,"aria-hidden":!0,className:j.asterisk,children:[" ","*"]})]}):n]})}),He={title:"Atoms/Forms & Inputs/Switch",component:r,tags:["autodocs"],decorators:[t=>e.jsx(ne,{sx:{p:2},children:e.jsx(t,{})})],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{checked:{control:"boolean",description:"Controlled state. Use with onChange.",table:{category:"Behavior"}},defaultChecked:{control:"boolean",description:"Uncontrolled initial state.",table:{category:"Behavior"}},disabled:{control:"boolean",table:{category:"Behavior"}},color:{control:"select",options:["primary","secondary","default"],table:{category:"Appearance"}},size:{control:"radio",options:["small","medium"],description:"Same as MUI Switch (no large by default).",table:{category:"Appearance"}},edge:{control:"radio",options:[!1,"start","end"],table:{category:"Appearance"}},sx:{table:{category:"Style"}},id:{table:{category:"DOM"}},className:{table:{category:"DOM"}},onChange:{table:{disable:!0}},inputProps:{table:{disable:!0}}},args:{defaultChecked:!1,color:"primary",size:"medium",edge:!1}},b={render:t=>e.jsx(r,{...t})},g={name:"With label & placement",render:()=>e.jsxs(c,{spacing:2,children:[e.jsx(l,{control:e.jsx(r,{defaultChecked:!0}),label:"End (default)"}),e.jsx(l,{control:e.jsx(r,{defaultChecked:!0}),label:"Start",labelPlacement:"start"}),e.jsx(l,{control:e.jsx(r,{}),label:"Top",labelPlacement:"top"}),e.jsx(l,{control:e.jsx(r,{}),label:"Bottom",labelPlacement:"bottom"})]}),parameters:{docs:{description:{story:"When `label` is present, the atom wraps the control with `FormControlLabel`. Use `labelPlacement` to position it."}}}},f={name:"Sizes & colors",render:()=>e.jsxs(c,{spacing:2,children:[e.jsxs(c,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(P,{variant:"body2",sx:{minWidth:88},children:"small"}),e.jsx(r,{size:"small",color:"default",defaultChecked:!0}),e.jsx(r,{size:"small",color:"primary",defaultChecked:!0}),e.jsx(r,{size:"small",color:"secondary",defaultChecked:!0})]}),e.jsxs(c,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(P,{variant:"body2",sx:{minWidth:88},children:"medium"}),e.jsx(r,{size:"medium",color:"default",defaultChecked:!0}),e.jsx(r,{size:"medium",color:"primary",defaultChecked:!0}),e.jsx(r,{size:"medium",color:"secondary",defaultChecked:!0})]})]})},y={name:"Controlled (React state)",render:()=>{const[t,o]=v.useState(!1);return e.jsxs(c,{spacing:1.5,children:[e.jsxs(P,{variant:"body2",children:["Value: ",e.jsx("b",{children:t?"true":"false"})]}),e.jsx(l,{control:e.jsx(r,{checked:t,onChange:(s,a)=>o(a),color:t?"primary":"secondary"}),label:"Controlled switch"})]})},parameters:{docs:{description:{story:"Classic controlled pattern: bind `checked` and update via `onChange`. You can also change appearance based on state."}}}},C={name:"Edge & custom sx",render:()=>e.jsxs(c,{spacing:2,children:[e.jsx(l,{control:e.jsx(r,{edge:"start",defaultChecked:!0}),label:"Edge start"}),e.jsx(l,{control:e.jsx(r,{defaultChecked:!0,sx:{"& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":{opacity:.7}}}),label:"Custom sx"})]}),parameters:{docs:{description:{story:"Pass any `sx` overrides exactly as you would with MUI. Useful for fine-grained tuning without creating a new variant."}}}};var T,E,U;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <Switch {...args} />
}`,...(U=(E=b.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};var I,R,A;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(N=(W=f.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var D,O,$;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...($=(O=y.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var q,_,V;C.parameters={...C.parameters,docs:{...(q=C.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(V=(_=C.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};const Je=["Playground","LabeledVariants","SizesAndColors","ControlledExample","EdgeAndSx"];export{y as ControlledExample,C as EdgeAndSx,g as LabeledVariants,b as Playground,f as SizesAndColors,Je as __namedExportsOrder,He as default};
