import{T as a}from"./TextField-BW3u06pQ.js";import"./TextField-BYxee2vq.js";import"./iframe-BamSxvGl.js";import"./preload-helper-Dp1pzeXC.js";import"./useSlot-iMtiR0hJ.js";import"./resolveComponentProps-CeJkfEFt.js";import"./useForkRef-CEd4Lltr.js";import"./useFormControl-ByO23DQm.js";import"./formControlState-Dq1zat_P.js";import"./isHostComponent-DVu5iVWx.js";import"./Modal-oSZ9zn9w.js";import"./useSlotProps-C5DVQp4q.js";import"./TransitionGroupContext-Dsjzy0Zl.js";import"./Grow-BboTJdZh.js";import"./Menu-De7Vf5tl.js";import"./Paper-upp0xvKF.js";import"./List-iFG0l6Is.js";import"./ListContext-O3hO-6P8.js";import"./useControlled-DC9n4FZ6.js";import"./createSvgIcon-H1Ui9rrv.js";import"./isMuiElement-WrNIzAOa.js";const N={title:"Atoms/TextField",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
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
