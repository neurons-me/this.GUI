import{T as a}from"./TextField-DeyitH5C.js";import"./TextField-BriDzdlY.js";import"./iframe-C2qc3tsM.js";import"./preload-helper-Dp1pzeXC.js";import"./useSlot-BKl4lqb4.js";import"./useForkRef-DZ9CAFXo.js";import"./useFormControl-BAigJOBR.js";import"./formControlState-Dq1zat_P.js";import"./List-2dnqbVht.js";import"./ListContext-fgpz-hEu.js";import"./Modal-BHgPgx7J.js";import"./Portal-D6dhm6sE.js";import"./useEventCallback-2h9sExm_.js";import"./utils-IgnIQ_tD.js";import"./TransitionGroupContext-BNvVfOmo.js";import"./Menu-DnIPfH50.js";import"./Grow-CCaMo6px.js";import"./Paper-WjnWTzrc.js";import"./mergeSlotProps-DSSfby9E.js";import"./useControlled-KSDT35UP.js";import"./createSvgIcon-CktXYvY9.js";import"./isMuiElement-B5xeuKGj.js";const k={title:"Atoms/TextField",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
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
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const E=["Variants"];export{e as Variants,E as __namedExportsOrder,k as default};
