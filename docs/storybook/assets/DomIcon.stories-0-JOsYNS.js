import{j as e}from"./iframe-ByX3ETbE.js";import"./preload-helper-Dp1pzeXC.js";const T=["#####.","##..##","##...#","##...#","##...#","##...#","##...#","##..##","#####."],w=[".####.","##..##","#....#","#....#","#....#","#....#","#....#","##..##",".####."],M=["##..#..##","###.#.###","##.###.##","##..#..##","##.....##","##.....##","##.....##","##.....##","##.....##"],s=T.map((t,n)=>`${t}..${w[n]}..${M[n]}`),_="#",a=12,m=s[0].length*a,g=s.length*a;function l({size:t=96,title:n="DOM",width:r,height:x,style:S,cellStrokeOpacity:I=.14,...O}){const j=r??t,c=x??(typeof t=="number"?t*g/m:void 0);return e.jsxs("svg",{viewBox:`0 0 ${m} ${g}`,width:j,height:c,role:"img","aria-label":n,xmlns:"http://www.w3.org/2000/svg",fill:"none",preserveAspectRatio:"xMidYMid meet",style:{display:"block",height:c?void 0:"auto",...S},...O,children:[e.jsx("title",{children:n}),e.jsx("g",{shapeRendering:"crispEdges",children:s.flatMap((E,d)=>[...E].map((D,p)=>D===_?e.jsx("rect",{x:p*a,y:d*a,width:a,height:a,fill:"currentColor",stroke:"currentColor",strokeOpacity:I,strokeWidth:1,vectorEffect:"non-scaling-stroke"},`${p}-${d}`):null))})]})}l.__docgenInfo={description:"",methods:[],displayName:"DomIcon",props:{size:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"96",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'DOM'",computed:!1}},cellStrokeOpacity:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0.14",computed:!1}}}};const L={title:"GUI/Icons/DOM",component:l,tags:["autodocs"],parameters:{docs:{description:{component:"A pixel-block SVG version of the DOM mark, rebuilt with rectangles so it stays editable and inherits theme color through `currentColor`."}}},argTypes:{size:{control:{type:"number",min:32,max:240,step:4},description:"Rendered width of the icon. Height keeps the original aspect ratio."},cellStrokeOpacity:{control:{type:"number",min:0,max:.4,step:.01},description:"Subtle internal block-line opacity used to keep the bitmap feel."},title:{control:"text",description:"Accessible title for the SVG."}}},k={padding:28,borderRadius:24,border:"1px solid rgba(255,255,255,0.12)",background:"linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)"},i={args:{size:128,title:"DOM",cellStrokeOpacity:.14},render:t=>e.jsxs("div",{style:{padding:28,display:"grid",gap:20,background:"radial-gradient(circle at top, rgba(246, 239, 194, 0.08), transparent 44%), #0c0f12"},children:[e.jsx("div",{style:k,children:e.jsx("div",{style:{color:"#f6efc2"},children:e.jsx(l,{...t})})}),e.jsxs("div",{style:{maxWidth:760,fontSize:14,lineHeight:1.6,opacity:.86},children:["Rebuilt from block cells instead of font glyphs so the mark keeps the stepped bitmap look and still follows the active theme through ",e.jsx("code",{children:"currentColor"}),"."]})]})},o={args:{size:104,title:"DOM",cellStrokeOpacity:.14},render:t=>{const n=[{label:"Text Primary",color:"var(--mui-palette-text-primary, #f5f7fb)",background:"#101722"},{label:"Warning Accent",color:"var(--mui-palette-warning-light, #f6efc2)",background:"#15120a"},{label:"Success Accent",color:"var(--mui-palette-success-light, #93d39a)",background:"#0f1712"}];return e.jsx("div",{style:{padding:28,display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:18,background:"#0b1016"},children:n.map(r=>e.jsxs("div",{style:{...k,background:r.background,color:r.color,display:"grid",gap:16,justifyItems:"start"},children:[e.jsx(l,{...t}),e.jsx("div",{style:{fontSize:13,opacity:.82},children:r.label})]},r.label))})}};var u,h,f;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: 128,
    title: 'DOM',
    cellStrokeOpacity: 0.14
  },
  render: args => <div style={{
    padding: 28,
    display: 'grid',
    gap: 20,
    background: 'radial-gradient(circle at top, rgba(246, 239, 194, 0.08), transparent 44%), #0c0f12'
  }}>
      <div style={frameStyle}>
        <div style={{
        color: '#f6efc2'
      }}>
          <DomIcon {...args} />
        </div>
      </div>
      <div style={{
      maxWidth: 760,
      fontSize: 14,
      lineHeight: 1.6,
      opacity: 0.86
    }}>
        Rebuilt from block cells instead of font glyphs so the mark keeps the stepped bitmap look
        and still follows the active theme through <code>currentColor</code>.
      </div>
    </div>
}`,...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var b,y,v;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: 104,
    title: 'DOM',
    cellStrokeOpacity: 0.14
  },
  render: args => {
    const samples = [{
      label: 'Text Primary',
      color: 'var(--mui-palette-text-primary, #f5f7fb)',
      background: '#101722'
    }, {
      label: 'Warning Accent',
      color: 'var(--mui-palette-warning-light, #f6efc2)',
      background: '#15120a'
    }, {
      label: 'Success Accent',
      color: 'var(--mui-palette-success-light, #93d39a)',
      background: '#0f1712'
    }];
    return <div style={{
      padding: 28,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: 18,
      background: '#0b1016'
    }}>
        {samples.map(sample => <div key={sample.label} style={{
        ...frameStyle,
        background: sample.background,
        color: sample.color,
        display: 'grid',
        gap: 16,
        justifyItems: 'start'
      }}>
            <DomIcon {...args} />
            <div style={{
          fontSize: 13,
          opacity: 0.82
        }}>{sample.label}</div>
          </div>)}
      </div>;
  }
}`,...(v=(y=o.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const W=["BitmapFaithful","ColorInheritance"];export{i as BitmapFaithful,o as ColorInheritance,W as __namedExportsOrder,L as default};
