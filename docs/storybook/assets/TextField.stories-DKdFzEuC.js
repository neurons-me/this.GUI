import{T as a}from"./TextField-DZ0r4J27.js";import"./TextField-BLPL2BPc.js";import"./iframe-DjCVt7fI.js";import"./preload-helper-Dp1pzeXC.js";import"./useSlot-BH35M0Kq.js";import"./resolveComponentProps-DH0v1ivu.js";import"./useForkRef-B8mj3yu-.js";import"./useFormControl-DUtIOdpN.js";import"./formControlState-Dq1zat_P.js";import"./isHostComponent-DVu5iVWx.js";import"./Modal-Beuq0239.js";import"./useSlotProps-Z4YGG9ba.js";import"./useEventCallback-DS-1wPyE.js";import"./Grow-BfUFX405.js";import"./TransitionGroupContext-DL1WlFMz.js";import"./Menu-Dh5v2xHH.js";import"./Paper-KEVgxZe5.js";import"./List-2pLDQJMN.js";import"./ListContext-C2fXlir5.js";import"./useControlled-2dJkZLWW.js";import"./createSvgIcon-DfI1gjmf.js";import"./isMuiElement-B6w_Twpr.js";const k={title:"Atoms/TextField",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
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
