import{T as a}from"./TextField-C7VZ1fuF.js";import"./TextField-BydSIn9D.js";import"./iframe-DTkfRnJf.js";import"./preload-helper-Dp1pzeXC.js";import"./useSlot-BNQnsQI2.js";import"./useForkRef-Cru_ePRK.js";import"./useFormControl-8weRAy94.js";import"./formControlState-Dq1zat_P.js";import"./List-BekQve-t.js";import"./ListContext-B5Em9Eft.js";import"./Modal-CK9c8Gp7.js";import"./Grow-D3KHJdX1.js";import"./TransitionGroupContext-BWT1wUhm.js";import"./Menu-D5Y3vMKV.js";import"./Paper-CyGjh2vj.js";import"./useControlled-CK-Pi9mt.js";import"./createSvgIcon-DdBnQn7s.js";import"./isMuiElement-CoXu2s8b.js";const F={title:"Atoms/TextField",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
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
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const S=["Variants"];export{e as Variants,S as __namedExportsOrder,F as default};
