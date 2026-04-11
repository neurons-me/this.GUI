import{r as y,j as e,av as r,c as a}from"./iframe-VByCAMq0.js";import{D as h,H as o}from"./HighLighter-BBbTBcmc.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-BiNRO4tv.js";import"./IconButton-CGlHk7MM.js";import"./ButtonBase-Ddf4rdCO.js";import"./TransitionGroupContext-BsXbcIrf.js";import"./useForkRef-at6iFRE0.js";import"./CircularProgress-BiH9goPR.js";import"./Icon-BTDP3cyE.js";import"./Tooltip-rRxgskYp.js";import"./useSlot-BQxwWLoj.js";import"./useControlled-85p8TW_V.js";import"./Grow-yTTW3IAg.js";import"./Drawer-Ce_ZhLjS.js";import"./Modal-WpCfVUEs.js";import"./Paper-CGsCy_dS.js";import"./TextField-Dxwi__bH.js";import"./useFormControl-DxV7Vj8g.js";import"./formControlState-Dq1zat_P.js";import"./List-CdNZSNyB.js";import"./ListContext-CUbLHnka.js";import"./Menu-9llF1EIC.js";import"./createSvgIcon-B4-eI1hQ.js";import"./isMuiElement-DkhTUaxg.js";import"./Divider-aS3S9KaQ.js";import"./dividerClasses-qk2AzdUE.js";const ae={title:"Widgets/HighLighter",component:o,parameters:{layout:"centered"},argTypes:{onChange:{action:"change"},colors:{control:"object"},value:{control:"color"},defaultValue:{control:"color"},tooltipSize:{control:{type:"inline-radio"},options:["sm","md","lg","xl"]},placement:{control:{type:"select"},options:["bottom","bottom-end","bottom-start","left","left-end","left-start","right","right-end","right-start","top","top-end","top-start"]},iconName:{control:"text"},iconSize:{control:"text"},title:{control:"text"},disabled:{control:"boolean"},className:{table:{disable:!0}},style:{table:{disable:!0}}},args:{title:"Highlighter",tooltipSize:"md",placement:"right",iconName:"ink_marker",iconSize:22,colors:h,defaultValue:h[0],disabled:!1}},l={render:t=>e.jsxs(r,{sx:{display:"flex",alignItems:"center",gap:2},children:[e.jsx(o,{...t}),e.jsx(a,{variant:"body2",sx:{opacity:.7},children:"Click highlighter → pick a color"})]})},n={render:t=>e.jsxs(r,{sx:{display:"flex",alignItems:"center",gap:2},children:[e.jsx(o,{...t,tooltipSize:"sm",title:"sm"}),e.jsx(o,{...t,tooltipSize:"md",title:"md"}),e.jsx(o,{...t,tooltipSize:"lg",title:"lg"}),e.jsx(o,{...t,tooltipSize:"xl",title:"xl"})]}),parameters:{controls:{exclude:["tooltipSize","title"]}}},p={args:{title:"Pick a neon",colors:["#00F5D4","#F15BB5","#FEE440","#00BBF9","#9B5DE5"],defaultValue:"#FEE440"},render:t=>e.jsxs(r,{sx:{display:"flex",alignItems:"center",gap:2},children:[e.jsx(o,{...t}),e.jsx(a,{variant:"body2",sx:{opacity:.7},children:"Custom 5-color palette"})]})},c={render:t=>{const[g,m]=y.useState(h[2]);return y.useEffect(()=>{const s=i=>{var x;(x=i==null?void 0:i.detail)!=null&&x.color&&m(i.detail.color)};return window.addEventListener("gui:highlighter",s),()=>window.removeEventListener("gui:highlighter",s)},[]),e.jsxs(r,{sx:{display:"flex",flexDirection:"column",gap:1.5,minWidth:320},children:[e.jsxs(r,{sx:{display:"flex",alignItems:"center",gap:2},children:[e.jsx(o,{...t,value:g,onChange:s=>{var i;m(s),(i=t==null?void 0:t.onChange)==null||i.call(t,s)}}),e.jsx(a,{variant:"body2",sx:{opacity:.7},children:"Controlled color"})]}),e.jsxs(r,{sx:{display:"flex",alignItems:"center",gap:1},children:[e.jsx(a,{variant:"caption",sx:{opacity:.7},children:"Selected:"}),e.jsx(r,{sx:{width:14,height:14,borderRadius:999,bgcolor:g,border:"1px solid",borderColor:"divider"}}),e.jsx(a,{variant:"caption",sx:{fontFamily:"monospace"},children:g})]})]})},parameters:{controls:{exclude:["value","defaultValue"]}}},d={args:{disabled:!0},render:t=>e.jsxs(r,{sx:{display:"flex",alignItems:"center",gap:2},children:[e.jsx(o,{...t}),e.jsx(a,{variant:"body2",sx:{opacity:.7},children:"Disabled"})]})};var u,f,b;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <Box sx={{
    display: 'flex',
    alignItems: 'center',
    gap: 2
  }}>
      <HighLighter {...args as HighLighterProps} />
      <Typography variant="body2" sx={{
      opacity: 0.7
    }}>
        Click highlighter → pick a color
      </Typography>
    </Box>
}`,...(b=(f=l.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var L,S,v;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <Box sx={{
    display: 'flex',
    alignItems: 'center',
    gap: 2
  }}>
      <HighLighter {...args as HighLighterProps} tooltipSize="sm" title="sm" />
      <HighLighter {...args as HighLighterProps} tooltipSize="md" title="md" />
      <HighLighter {...args as HighLighterProps} tooltipSize="lg" title="lg" />
      <HighLighter {...args as HighLighterProps} tooltipSize="xl" title="xl" />
    </Box>,
  parameters: {
    controls: {
      exclude: ['tooltipSize', 'title']
    }
  }
}`,...(v=(S=n.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var B,j,H;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    title: 'Pick a neon',
    colors: ['#00F5D4', '#F15BB5', '#FEE440', '#00BBF9', '#9B5DE5'],
    defaultValue: '#FEE440'
  },
  render: args => <Box sx={{
    display: 'flex',
    alignItems: 'center',
    gap: 2
  }}>
      <HighLighter {...args as HighLighterProps} />
      <Typography variant="body2" sx={{
      opacity: 0.7
    }}>
        Custom 5-color palette
      </Typography>
    </Box>
}`,...(H=(j=p.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var C,E,z;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    const [color, setColor] = React.useState<string>(DEFAULT_COLORS[2]);
    React.useEffect(() => {
      const onHighLighter = (e: any) => {
        if (e?.detail?.color) setColor(e.detail.color);
      };
      window.addEventListener('gui:highlighter', onHighLighter as any);
      return () => window.removeEventListener('gui:highlighter', onHighLighter as any);
    }, []);
    return <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 1.5,
      minWidth: 320
    }}>
        <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2
      }}>
          <HighLighter {...args as HighLighterProps} value={color} onChange={c => {
          setColor(c);
          (args as any)?.onChange?.(c);
        }} />
          <Typography variant="body2" sx={{
          opacity: 0.7
        }}>
            Controlled color
          </Typography>
        </Box>

        <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}>
          <Typography variant="caption" sx={{
          opacity: 0.7
        }}>
            Selected:
          </Typography>
          <Box sx={{
          width: 14,
          height: 14,
          borderRadius: 999,
          bgcolor: color,
          border: '1px solid',
          borderColor: 'divider'
        }} />
          <Typography variant="caption" sx={{
          fontFamily: 'monospace'
        }}>
            {color}
          </Typography>
        </Box>
      </Box>;
  },
  parameters: {
    controls: {
      exclude: ['value', 'defaultValue']
    }
  }
}`,...(z=(E=c.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var T,F,P;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <Box sx={{
    display: 'flex',
    alignItems: 'center',
    gap: 2
  }}>
      <HighLighter {...args as HighLighterProps} />
      <Typography variant="body2" sx={{
      opacity: 0.7
    }}>
        Disabled
      </Typography>
    </Box>
}`,...(P=(F=d.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};const se=["Playground","Sizes","CustomPalette","Controlled","Disabled"];export{c as Controlled,p as CustomPalette,d as Disabled,l as Playground,n as Sizes,se as __namedExportsOrder,ae as default};
