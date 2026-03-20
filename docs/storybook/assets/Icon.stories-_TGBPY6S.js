import{j as e}from"./iframe-w4xmodgg.js";import{I as t}from"./Icon-DJUy-n4o.js";import"./preload-helper-Dp1pzeXC.js";const z={title:"GUI/Icons/Icon",component:t,tags:["autodocs"],parameters:{docs:{description:{component:'A lightweight Icon wrapper around **Material Symbols**.\n\n**Notes**\n- This component renders a `<span>` using the `material-symbols-rounded` class.\n- Ensure the Material Symbols font is available (your Icon component imports `material-symbols`).\n- Use `name` to pass the glyph name (e.g. `home`, `palette`, `settings`).\n\n---\n\n### Example\n~~~tsx\n<Icon name="home" weight={500} fill={0} iconColor="var(--gui-primary)" />\n~~~\n'}}},argTypes:{name:{control:"text",description:"Material Symbols glyph name (e.g. `home`, `palette`, `settings`)."},iconColor:{control:"color",description:"CSS color value applied to the icon."},fontSize:{control:"text",description:"Font size (number treated as px; or any CSS size string)."},weight:{control:{type:"number",min:100,max:700,step:100},description:"Font variation setting: wght."},fill:{control:{type:"number",min:0,max:1,step:1},description:"Font variation setting: FILL (0 outlined, 1 filled)."},grade:{control:{type:"number",min:-25,max:200,step:25},description:"Font variation setting: GRAD."},opticalSize:{control:{type:"number",min:20,max:48,step:2},description:"Font variation setting: opsz."}}},a={args:{name:"palette",iconColor:"var(--gui-primary)",fontSize:28,weight:500,fill:0,grade:0,opticalSize:24},render:i=>e.jsxs("div",{style:{padding:24,display:"flex",alignItems:"center",gap:12},children:[e.jsx(t,{...i}),e.jsxs("div",{style:{opacity:.8,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"},children:[e.jsxs("div",{children:["name: ",String(i.name)]}),e.jsxs("div",{children:["fill: ",String(i.fill)," · wght: ",String(i.weight)," · GRAD: ",String(i.grade)," · opsz:"," ",String(i.opticalSize)]})]})]})},r={parameters:{docs:{description:{story:"A quick grid of common glyph names to confirm the font is loading and rendering correctly."}}},render:()=>{const i=["home","palette","settings","menu","search","favorite","account_circle","dashboard","folder","insights","logout","help","code","menu_book"];return e.jsx("div",{style:{padding:24},children:e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))",gap:14},children:i.map(n=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:12,borderRadius:12,border:"1px solid rgba(255,255,255,0.10)",background:"rgba(255,255,255,0.03)"},children:[e.jsx(t,{name:n,fontSize:26,iconColor:"var(--gui-primary)"}),e.jsx("span",{style:{fontSize:12,opacity:.85},children:n})]},n))})})}},o={args:{name:"",iconColor:"#2d58a3"},parameters:{docs:{description:{story:"Compare **fill=0** (outlined) vs **fill=1** (filled) using the same glyph."}}},render:()=>e.jsxs("div",{style:{padding:24,display:"flex",gap:28,alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",gap:10,alignItems:"center"},children:[e.jsx(t,{name:"palette",fill:0,weight:500,fontSize:34,iconColor:"var(--gui-primary)"}),e.jsx("span",{style:{fontSize:12,opacity:.85},children:"fill=0"})]}),e.jsxs("div",{style:{display:"flex",gap:10,alignItems:"center"},children:[e.jsx(t,{name:"palette",fill:1,weight:500,fontSize:34,iconColor:"var(--gui-primary)"}),e.jsx("span",{style:{fontSize:12,opacity:.85},children:"fill=1"})]})]})},s={parameters:{docs:{description:{story:"Preview different **wght** values for the same glyph."}}},render:()=>{const i=[100,200,300,400,500,600,700];return e.jsx("div",{style:{padding:24,display:"flex",flexWrap:"wrap",gap:16,alignItems:"center"},children:i.map(n=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[e.jsx(t,{name:"settings",weight:n,fill:0,fontSize:30,iconColor:"var(--gui-secondary)"}),e.jsxs("span",{style:{fontSize:12,opacity:.85},children:["wght=",n]})]},n))})}};var l,d,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    name: 'palette',
    iconColor: 'var(--gui-primary)',
    fontSize: 28,
    weight: 500,
    fill: 0,
    grade: 0,
    opticalSize: 24
  },
  render: args => <div style={{
    padding: 24,
    display: 'flex',
    alignItems: 'center',
    gap: 12
  }}>
      <Icon {...args} />
      <div style={{
      opacity: 0.8,
      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'
    }}>
        <div>name: {String(args.name)}</div>
        <div>
          fill: {String(args.fill)} · wght: {String(args.weight)} · GRAD: {String(args.grade)} · opsz:{' '}
          {String(args.opticalSize)}
        </div>
      </div>
    </div>
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,g,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'A quick grid of common glyph names to confirm the font is loading and rendering correctly.'
      }
    }
  },
  render: () => {
    const items = ['home', 'palette', 'settings', 'menu', 'search', 'favorite', 'account_circle', 'dashboard', 'folder', 'insights', 'logout', 'help', 'code', 'menu_book'];
    return <div style={{
      padding: 24
    }}>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: 14
      }}>
          {items.map(name => <div key={name} style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: 12,
          borderRadius: 12,
          border: '1px solid rgba(255,255,255,0.10)',
          background: 'rgba(255,255,255,0.03)'
        }}>
              <Icon name={name} fontSize={26} iconColor="var(--gui-primary)" />
              <span style={{
            fontSize: 12,
            opacity: 0.85
          }}>{name}</span>
            </div>)}
        </div>
      </div>;
  }
}`,...(m=(g=r.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var y,f,h;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    name: "",
    iconColor: "#2d58a3"
  },
  parameters: {
    docs: {
      description: {
        story: 'Compare **fill=0** (outlined) vs **fill=1** (filled) using the same glyph.'
      }
    }
  },
  render: () => <div style={{
    padding: 24,
    display: 'flex',
    gap: 28,
    alignItems: 'center'
  }}>
      <div style={{
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }}>
        <Icon name="palette" fill={0} weight={500} fontSize={34} iconColor="var(--gui-primary)" />
        <span style={{
        fontSize: 12,
        opacity: 0.85
      }}>fill=0</span>
      </div>
      <div style={{
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }}>
        <Icon name="palette" fill={1} weight={500} fontSize={34} iconColor="var(--gui-primary)" />
        <span style={{
        fontSize: 12,
        opacity: 0.85
      }}>fill=1</span>
      </div>
    </div>
}`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var u,v,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Preview different **wght** values for the same glyph.'
      }
    }
  },
  render: () => {
    const weights = [100, 200, 300, 400, 500, 600, 700];
    return <div style={{
      padding: 24,
      display: 'flex',
      flexWrap: 'wrap',
      gap: 16,
      alignItems: 'center'
    }}>
        {weights.map(w => <div key={w} style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }}>
            <Icon name="settings" weight={w} fill={0} fontSize={30} iconColor="var(--gui-secondary)" />
            <span style={{
          fontSize: 12,
          opacity: 0.85
        }}>wght={w}</span>
          </div>)}
      </div>;
  }
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const b=["Playground","CommonIcons","FilledVsOutlined","WeightRamp"];export{r as CommonIcons,o as FilledVsOutlined,a as Playground,s as WeightRamp,b as __namedExportsOrder,z as default};
