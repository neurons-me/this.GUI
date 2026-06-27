import{T as a}from"./TextField-im4JI6b4.js";import"./TextField-DN7hoPF9.js";import"./iframe-B945G3MO.js";import"./preload-helper-Dp1pzeXC.js";import"./useSlot-BDGGiRla.js";import"./resolveComponentProps-Cr13QVQ8.js";import"./useForkRef-B1qixtFe.js";import"./useFormControl-CpUe-Pks.js";import"./formControlState-Dq1zat_P.js";import"./isHostComponent-DVu5iVWx.js";import"./Modal-DT98mAxm.js";import"./useSlotProps-C5tgyCQW.js";import"./TransitionGroupContext-C7M7qqJI.js";import"./Grow-SjjAWBSH.js";import"./Menu-B2ZDxcVs.js";import"./Paper-B44MHfVE.js";import"./List-n6ROlhJL.js";import"./ListContext-Ck__g24J.js";import"./useControlled-ojhLLIC7.js";import"./createSvgIcon-DmKvINFx.js";import"./isMuiElement-YVYSioss.js";const N={title:"Atoms/TextField",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
The **TextField** atom is a versatile wrapper around MUI's \`TextField\`, providing a consistent API for text input across your application.

---
## Features
- Supports all standard MUI variants: \`outlined\` (default), \`filled\`, and \`standard\`.
- Can be used for single-line or multi-line input via the \`multiline\` and \`rows\` props.
- Integrates with form validation through the \`error\` and \`helperText\` props.
- Fully themeable and stylable with the \`sx\` prop.

---
## Key Props
- \`label\`: The label content.
- \`variant?: 'outlined' | 'filled' | 'standard'\`.
- \`placeholder\`: Text displayed when the input is empty.
- \`multiline?: boolean\`: If true, a \`textarea\` element is used.
- \`rows?: number\`: Number of rows to display when \`multiline\` is true.
- \`error?: boolean\`: If true, the label is displayed in an error state.
- \`helperText\`: The helper text content.
- \`sx?: object\`: For custom styling.

---
## Basic usage (React)
~~~tsx
import { TextField, Stack } from '@/gui/atoms';

<Stack spacing={2} sx={{ width: 400 }}>
  <TextField label="Name" variant="outlined" placeholder="Enter your name" />
  <TextField label="Description" variant="outlined" multiline rows={4} />
</Stack>
~~~

---
## Declarative JSON / Config usage
The \`TextFieldResolver\` allows creating text fields from a JSON spec.

~~~json
{
  "type": "TextField",
  "props": {
    "label": "Username",
    "variant": "outlined",
    "placeholder": "Enter your username"
  }
}
~~~
`}}},argTypes:{variant:{control:{type:"select"},options:["outlined","filled","standard"]},label:{control:"text"},placeholder:{control:"text"},helperText:{control:"text"},error:{control:"boolean"},multiline:{control:"boolean"},rows:{control:"number",if:{arg:"multiline"}}}},e={args:{label:"Label",variant:"outlined",placeholder:"Type something..."}};var t,r,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    variant: 'outlined',
    placeholder: 'Type something...'
  }
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const k=["Variants"];export{e as Variants,k as __namedExportsOrder,N as default};
