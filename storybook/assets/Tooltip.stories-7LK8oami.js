import{j as t,a as B}from"./iframe-BamSxvGl.js";import{B as e}from"./Button-BXI39ZZO.js";import"./Chip-3ZxPCOQf.js";import"./Paper-Biw32b0f.js";import"./InspectorToggle-zYA6ms9l.js";import"./ListItemIcon-Dhk1bM8U.js";import"./ListItemText-DTLcNajK.js";import"./Drawer-ZcM56YDZ.js";import{T as o}from"./Tooltip-Bj6JsHBv.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-BYSltbOq.js";import"./Button-BvX7gL8H.js";import"./ButtonBase-CDq_uQ76.js";import"./TransitionGroupContext-Dsjzy0Zl.js";import"./useForkRef-CEd4Lltr.js";import"./CircularProgress-BYWRkUyA.js";import"./createSvgIcon-H1Ui9rrv.js";import"./Paper-upp0xvKF.js";import"./renderer-pdt03z3o.js";import"./runtimeContext-CxK-3G5O.js";import"./Toolbar-B11vCu7Z.js";import"./IconButton-DrPxXNHQ.js";import"./IconButton-BfXXQCoy.js";import"./listItemIconClasses-DxJ6xFM8.js";import"./ListContext-O3hO-6P8.js";import"./listItemTextClasses-gUF37NNN.js";import"./useSlot-iMtiR0hJ.js";import"./resolveComponentProps-CeJkfEFt.js";import"./dividerClasses-BZftlWy-.js";import"./Grow-BboTJdZh.js";import"./Modal-oSZ9zn9w.js";import"./useSlotProps-C5DVQp4q.js";import"./useControlled-DC9n4FZ6.js";const it={title:"Molecules/Tooltip",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"This Tooltip is a thin wrapper around MUI's Tooltip, supporting all MUI props and the `sx` prop for styling. Use it for helpful hover information, and configure it via JSON/config declaratively."}}}},r={args:{title:"Tooltip text",placement:"top",arrow:!1,size:"md",children:t.jsx(e,{variant:"contained",children:"Hover me"})},argTypes:{title:{control:"text"},placement:{control:"select",options:["top","bottom","left","right"]},arrow:{control:"boolean"},size:{control:"select",options:["sm","md","lg"]}},render:n=>t.jsx(o,{...n,size:n.size,children:n.children})},i={name:"Placement: right",render:()=>t.jsx(o,{title:"Right placed tooltip",placement:"right",children:t.jsx(e,{variant:"contained",children:"Hover right"})}),parameters:{docs:{description:{story:'Tooltip with `placement="right"` demonstrates MUI placement support.'}}}},a={name:"Arrow",render:()=>t.jsx(o,{title:"Tooltip with arrow",arrow:!0,children:t.jsx(e,{variant:"contained",children:"Hover arrow"})}),parameters:{docs:{description:{story:"Tooltip with `arrow={true}` prop shows the arrow, just like MUI."}}}},s={name:"Wrapped Typography",render:()=>t.jsx(o,{title:"Tooltip on text",children:t.jsx(B,{variant:"body1",sx:{cursor:"pointer",display:"inline-block"},children:"Hover this text"})}),parameters:{docs:{description:{story:"Tooltip wrapping a Typography element, showing flexibility and full MUI compatibility."}}}},p={name:"With Size",render:()=>t.jsxs("div",{style:{display:"flex",gap:24},children:[t.jsx(o,{title:"Small size tooltip",size:"sm",children:t.jsx(e,{variant:"contained",children:"Small (sm)"})}),t.jsx(o,{title:"Medium size tooltip",size:"md",children:t.jsx(e,{variant:"contained",children:"Medium (md)"})}),t.jsx(o,{title:"Large size tooltip",size:"lg",children:t.jsx(e,{variant:"contained",children:"Large (lg)"})})]}),parameters:{docs:{description:{story:"Demonstrates the Tooltip with different `size` props: small, medium, and large."}}}};var l,m,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'Tooltip text',
    placement: 'top',
    arrow: false,
    size: 'md',
    children: <Button variant="contained">Hover me</Button>
  },
  argTypes: {
    title: {
      control: 'text'
    },
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right']
    },
    arrow: {
      control: 'boolean'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    }
  },
  render: args => <Tooltip {...args} size={args.size}>{args.children}</Tooltip>
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,h,g;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Placement: right',
  render: () => <Tooltip title="Right placed tooltip" placement="right">
      <Button variant="contained">Hover right</Button>
    </Tooltip>,
  parameters: {
    docs: {
      description: {
        story: 'Tooltip with \`placement="right"\` demonstrates MUI placement support.'
      }
    }
  }
}`,...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var u,T,y;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Arrow',
  render: () => <Tooltip title="Tooltip with arrow" arrow>
      <Button variant="contained">Hover arrow</Button>
    </Tooltip>,
  parameters: {
    docs: {
      description: {
        story: 'Tooltip with \`arrow={true}\` prop shows the arrow, just like MUI.'
      }
    }
  }
}`,...(y=(T=a.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var x,w,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Wrapped Typography',
  render: () => <Tooltip title="Tooltip on text">
      <Typography variant="body1" sx={{
      cursor: 'pointer',
      display: 'inline-block'
    }}>
        Hover this text
      </Typography>
    </Tooltip>,
  parameters: {
    docs: {
      description: {
        story: 'Tooltip wrapping a Typography element, showing flexibility and full MUI compatibility.'
      }
    }
  }
}`,...(v=(w=s.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var z,f,j;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'With Size',
  render: () => <div style={{
    display: 'flex',
    gap: 24
  }}>
      <Tooltip title="Small size tooltip" size="sm">
        <Button variant="contained">Small (sm)</Button>
      </Tooltip>
      <Tooltip title="Medium size tooltip" size="md">
        <Button variant="contained">Medium (md)</Button>
      </Tooltip>
      <Tooltip title="Large size tooltip" size="lg">
        <Button variant="contained">Large (lg)</Button>
      </Tooltip>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the Tooltip with different \`size\` props: small, medium, and large.'
      }
    }
  }
}`,...(j=(f=p.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const at=["Playground","PlacementRight","WithArrow","WithTypography","WithSize"];export{i as PlacementRight,r as Playground,a as WithArrow,p as WithSize,s as WithTypography,at as __namedExportsOrder,it as default};
