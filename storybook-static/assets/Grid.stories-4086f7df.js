import{j as e}from"./jsx-runtime-2aae9559.js";import"./index-ff614419.js";const n=({children:d,columns:l=3,gap:i="10px"})=>{const p={display:"grid",gridTemplateColumns:`repeat(${l}, 1fr)`,gap:i};return e.jsx("div",{style:p,className:"grid-container",children:d})},s=n;n.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{columns:{defaultValue:{value:"3",computed:!1},required:!1},gap:{defaultValue:{value:"'10px'",computed:!1},required:!1}}};const g={title:"Layout/Grid",component:s,argTypes:{columns:{control:"number",defaultValue:3},gap:{control:"text",defaultValue:"10px"}}},c=d=>e.jsxs(s,{...d,children:[e.jsx("div",{style:{backgroundColor:"#FFDDC1",padding:"20px"},children:"Item 1"}),e.jsx("div",{style:{backgroundColor:"#FEC8D8",padding:"20px"},children:"Item 2"}),e.jsx("div",{style:{backgroundColor:"#D4A5A5",padding:"20px"},children:"Item 3"})]}),r=c.bind({});r.args={columns:3,gap:"10px"};var o,a,t;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`args => <Grid {...args}>
    <div style={{
    backgroundColor: '#FFDDC1',
    padding: '20px'
  }}>Item 1</div>
    <div style={{
    backgroundColor: '#FEC8D8',
    padding: '20px'
  }}>Item 2</div>
    <div style={{
    backgroundColor: '#D4A5A5',
    padding: '20px'
  }}>Item 3</div>
  </Grid>`,...(t=(a=r.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const x=["Default"];export{r as Default,x as __namedExportsOrder,g as default};
