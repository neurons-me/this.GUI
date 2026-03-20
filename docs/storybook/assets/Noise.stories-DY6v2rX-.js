import{r as c,j as e,B as n,a as f}from"./iframe-w4xmodgg.js";import{M as ce}from"./Modal-6U4KGBzu.js";import{I as $}from"./Icon-DJUy-n4o.js";import{I as de}from"./IconButton-D6F0fUs_.js";import{S as pe}from"./Switch-CI3duBy8.js";import{B as ee}from"./Button-BzqirN5W.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-y1lSn0eM.js";import"./ButtonBase-GIRox2_m.js";import"./TransitionGroupContext-HHlZFox5.js";import"./useForkRef-BiuEh3Zb.js";import"./useEventCallback-DM97iYES.js";import"./CircularProgress-BHojE11j.js";import"./useFormControl-AS455AjW.js";import"./useSlot-Hyz3M8yg.js";import"./useControlled-BmtI4a9q.js";import"./Button-CbBxgLum.js";function me(t,o){if(!t)return;const r=String(o||"").trim();if(r){try{if(typeof t=="function")return t(r)}catch{}try{return r.split(".").filter(Boolean).reduce((i,m)=>i?i[m]:void 0,t)}catch{return}}}function ue(t,o){const r=String(o||"").trim();return r?r.split(".").filter(Boolean).reduce((i,m)=>i?i[m]:void 0,t):t}function y({me:t,path:o,operator:r="=",label:i="Noise",placeholder:m,kind:s="text",defaultValue:u,commitOn:l="check",showCheck:d=!0,syncFromMe:v=!0,width:N="100%",sx:q,disabled:E,readOnly:O,infoTitle:te="About this field",info:w}){const[b,C]=c.useState(u??""),[oe,D]=c.useState(void 0),[W,k]=c.useState(!1),[z,x]=c.useState("idle"),[_,g]=c.useState(null),[re,V]=c.useState(!1);c.useEffect(()=>{if(!v)return;const a=me(t,o);a!==void 0?(C(a),D(a),k(!1),x("idle"),g(null)):u!==void 0&&(C(u),D(void 0),k(!1),x("idle"),g(null))},[t,o]);const j=c.useCallback(a=>{const h=a!==void 0?a:b;try{const p=ue(t,o);if(!p)throw new Error(`Invalid ME path: ${o}`);const T=p==null?void 0:p[r];if(typeof T!="function")throw new Error(`Operator '${r}' not found at path '${o}'.`);T(h),D(h),k(!1),x("ok"),g(null),window.setTimeout(()=>x("idle"),900)}catch(p){x("error"),g((p==null?void 0:p.message)??"Commit failed")}},[b,t,r,o]),ae=a=>{const h=a.target.value;C(h),k(!0),x("idle"),g(null),l==="change"&&j(h)},ne=()=>{l==="blur"&&W&&j()},ie=a=>{l==="enter"&&a.key==="Enter"&&(a.preventDefault(),j())},se=(a,h)=>{var T;const p=typeof h=="boolean"?h:!!((T=a==null?void 0:a.target)!=null&&T.checked);C(p),k(!0),x("idle"),g(null),l==="change"&&j(p)},le=z==="error"?"error.main":z==="ok"?"success.main":"divider",F=z==="ok"?"success.muted":"background.paper";return e.jsxs(n,{sx:{width:N,display:"flex",flexDirection:"column",gap:1,...q},children:[e.jsxs(n,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:1},children:[e.jsx(f,{variant:"subtitle2",sx:{color:"text.secondary"},children:i}),w?e.jsx(de,{size:"small","aria-label":"Info",onClick:()=>V(!0),sx:{border:"1px solid",borderColor:"divider",borderRadius:999,bgcolor:"background.paper"},children:e.jsx($,{name:"info"})}):null]}),e.jsxs(n,{sx:{position:"relative",display:"flex",alignItems:"center",gap:1,border:"1px solid",borderColor:le,borderRadius:2,px:1.25,py:.75,bgcolor:F,transition:"border-color 160ms ease, background-color 160ms ease",minHeight:44},children:[o?e.jsx(n,{component:"span",sx:{position:"absolute",top:0,left:52,transform:"translateY(-50%)",px:.75,py:.15,borderRadius:999,bgcolor:F,color:"text.disabled",fontSize:11,lineHeight:1.1,fontFamily:"monospace",letterSpacing:.2,userSelect:"none",pointerEvents:"none",maxWidth:"calc(100% - 120px)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},title:o,children:o}):null,e.jsx(n,{sx:{px:1,py:.25,borderRadius:999,border:"1px solid",borderColor:"divider",bgcolor:"background.default",color:"text.secondary",fontFamily:"monospace",fontSize:12,lineHeight:1.2,userSelect:"none"},title:`operator: ${r}`,children:r}),s==="switch"?e.jsxs(n,{sx:{display:"flex",alignItems:"center",gap:1,flex:1},children:[e.jsx(pe,{checked:!!b,onChange:se,disabled:E,inputProps:{"aria-label":i}}),e.jsx(f,{variant:"body2",sx:{color:"text.secondary"},children:String(!!b)})]}):e.jsx(n,{sx:{flex:1,display:"flex",alignItems:"center"},children:e.jsx(n,{component:"input",value:b??"",placeholder:m,disabled:E,readOnly:O,onChange:ae,onBlur:ne,onKeyDown:ie,sx:{width:"100%",border:0,outline:"none",bgcolor:"transparent",color:"text.primary",fontSize:14,lineHeight:1.4}})}),d?e.jsx(ee,{variant:"outlined",size:"small",disabled:E||O||!W&&oe!==void 0,onClick:()=>j(),sx:{minWidth:36,px:1,py:.5,borderRadius:2,textTransform:"none"},"aria-label":"Commit",children:e.jsx($,{name:"check"})}):null]}),_?e.jsx(f,{variant:"caption",sx:{color:"error.main"},children:_}):null,w?e.jsx(ce,{open:re,onClose:()=>V(!1),title:te,width:520,children:e.jsx(n,{sx:{display:"flex",flexDirection:"column",gap:1},children:typeof w=="string"?e.jsx(f,{variant:"body2",sx:{color:"text.secondary"},children:w}):w})}):null]})}y.__docgenInfo={description:"",methods:[],displayName:"Noise",props:{me:{required:!0,tsType:{name:"any"},description:"ME runtime (proxy)"},path:{required:!0,tsType:{name:"string"},description:'Semantic path inside ME, e.g. "profile.name" or "wallet.netget.keys"'},operator:{required:!1,tsType:{name:"string"},description:'Operator to call at the target path. Common: "=" for assign, "@" identity, "~" noise, "_" secret',defaultValue:{value:"'='",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label shown above/alongside the input",defaultValue:{value:"'Noise'",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder (text kind)"},kind:{required:!1,tsType:{name:"union",raw:"'text' | 'switch' | 'slider'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'switch'"},{name:"literal",value:"'slider'"}]},description:"Input kind",defaultValue:{value:"'text'",computed:!1}},defaultValue:{required:!1,tsType:{name:"any"},description:"Initial value to seed draft (if ME read is undefined)"},commitOn:{required:!1,tsType:{name:"union",raw:"'change' | 'blur' | 'check' | 'enter'",elements:[{name:"literal",value:"'change'"},{name:"literal",value:"'blur'"},{name:"literal",value:"'check'"},{name:"literal",value:"'enter'"}]},description:"Commit policy",defaultValue:{value:"'check'",computed:!1}},showCheck:{required:!1,tsType:{name:"boolean"},description:"Whether to show the explicit check commit button",defaultValue:{value:"true",computed:!1}},syncFromMe:{required:!1,tsType:{name:"boolean"},description:"If true, reads from ME on mount and whenever `path` changes",defaultValue:{value:"true",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Optional: width control (e.g. '25%')",defaultValue:{value:"'100%'",computed:!1}},sx:{required:!1,tsType:{name:"any"},description:"Optional: sx overrides"},disabled:{required:!1,tsType:{name:"boolean"},description:"Helpers"},readOnly:{required:!1,tsType:{name:"boolean"},description:""},infoTitle:{required:!1,tsType:{name:"string"},description:"Optional: help modal content",defaultValue:{value:"'About this field'",computed:!1}},info:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};function B(){const t=new Map,o=s=>String(s??"").trim().replace(/^\./,"").replace(/\.+/g,".").replace(/\.$/,""),r=s=>{if(typeof s=="string")return t.get(o(s))},i=s=>new Proxy(()=>{},{get(u,l){if(typeof l=="symbol")return;if(l==="__store")return t;const d=String(l);if(d.startsWith("[")&&d.endsWith("]")){const N=d.slice(1,-1);return q=>(t.set(s,{op:N,value:q}),m)}const v=s?`${s}.${d}`:d;return i(v)},apply(u,l,d){const v=d.length<=1?d[0]:d;return t.set(s,{op:"=",value:v}),m}}),m=new Proxy(r,{get(s,u){if(typeof u!="symbol")return i(String(u))},apply(s,u,l){return l.length===1&&typeof l[0]=="string"?t.get(o(l[0])):m}});return m}const Ne={title:"Components/Noise",component:y,tags:["autodocs"],decorators:[t=>e.jsx("div",{style:{padding:16,minHeight:320,maxWidth:920},children:e.jsx(t,{})})],parameters:{docs:{description:{component:"\nA **Noise** input is a small declarative bridge between UI and a semantic ME tree.\n\n- It can write values through an operator (e.g. `@`, `=`, `_`, `~`).\n- It supports compact layout (e.g. 25% width) and a **check** commit button.\n- Optional info icon opens your **Modal** molecule (if enabled in the component).\n\nStories use a tiny in-memory ME mock so they can render standalone.\n        ".trim()}}}},S={name:"Identity (@) with check",render:()=>{const t=c.useMemo(()=>B(),[]);return e.jsxs(n,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e.jsx(y,{me:t,path:"profile",operator:"@",placeholder:"username",width:"25%",showCheck:!0}),e.jsx(f,{variant:"body2",sx:{color:"text.secondary"},children:"Tip: type a username and click the check icon to commit the identity ref."})]})}},M={name:"Readout (shows last committed)",render:()=>{const t=c.useMemo(()=>B(),[]),[o,r]=c.useState(0);return e.jsxs(n,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e.jsx(y,{me:t,path:"profile.name",operator:"=",label:"Name",placeholder:"profile.name",width:{xs:"100%",sm:"50%",md:"25%"},showCheck:!0}),e.jsxs(n,{sx:{display:"flex",alignItems:"center",gap:1},children:[e.jsxs(f,{variant:"caption",sx:{color:"text.secondary"},children:["Last committed at ",e.jsx("code",{children:"profile.name"}),":"]}),e.jsx(f,{variant:"caption",sx:{fontFamily:"monospace"},children:JSON.stringify(t("profile.name")??null)}),e.jsx(ee,{size:"small",variant:"outlined",onClick:()=>r(i=>i+1),children:"refresh"})]})]})}},I={name:"Compact row (25% width)",render:()=>{const t=c.useMemo(()=>B(),[]);return e.jsxs(n,{sx:{display:"flex",gap:2,alignItems:"center",flexWrap:"wrap"},children:[e.jsx(y,{me:t,path:"blockchain.url",operator:"=",label:"Blockchain URL",placeholder:"http://localhost:8161",width:"25%",showCheck:!0}),e.jsx(y,{me:t,path:"blockchain.port",operator:"=",label:"Port",placeholder:"8161",width:140,showCheck:!0})]})}},R={name:"Responsive width",render:()=>{const t=c.useMemo(()=>B(),[]);return e.jsxs(n,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e.jsx(y,{me:t,path:"blockchain.url",operator:"=",label:"Blockchain",placeholder:"blockchain",width:{xs:"100%",sm:"60%",md:"40%",lg:"25%"},showCheck:!0}),e.jsx(f,{variant:"caption",sx:{color:"text.secondary"},children:"Resize the preview to see width adapt across breakpoints."})]})}};var H,P,A;S.parameters={...S.parameters,docs:{...(H=S.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Identity (@) with check',
  render: () => {
    const me = React.useMemo(() => createMeMock(), []);
    return <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }}>
        <Noise me={me} path="profile" operator="@" placeholder="username" width="25%" showCheck />
        <Typography variant="body2" sx={{
        color: 'text.secondary'
      }}>
          Tip: type a username and click the check icon to commit the identity ref.
        </Typography>
      </Box>;
  }
}`,...(A=(P=S.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var L,U,J;M.parameters={...M.parameters,docs:{...(L=M.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Readout (shows last committed)',
  render: () => {
    const me = React.useMemo(() => createMeMock(), []);
    const [tick, setTick] = React.useState(0);
    return <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }}>
        <Noise me={me} path="profile.name" operator="=" label="Name" placeholder="profile.name" width={{
        xs: '100%',
        sm: '50%',
        md: '25%'
      } as any} showCheck />
        <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}>
          <Typography variant="caption" sx={{
          color: 'text.secondary'
        }}>
            Last committed at <code>profile.name</code>:
          </Typography>
          <Typography variant="caption" sx={{
          fontFamily: 'monospace'
        }}>
            {JSON.stringify((me as any)('profile.name') ?? null)}
          </Typography>
          <Button size="small" variant="outlined" onClick={() => setTick(t => t + 1)}>
            refresh
          </Button>
        </Box>
      </Box>;
  }
}`,...(J=(U=M.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};var G,K,Y;I.parameters={...I.parameters,docs:{...(G=I.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Compact row (25% width)',
  render: () => {
    const me = React.useMemo(() => createMeMock(), []);
    return <Box sx={{
      display: 'flex',
      gap: 2,
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>
        <Noise me={me} path="blockchain.url" operator="=" label="Blockchain URL" placeholder="http://localhost:8161" width="25%" showCheck />
        <Noise me={me} path="blockchain.port" operator="=" label="Port" placeholder="8161" width={140 as any} showCheck />
      </Box>;
  }
}`,...(Y=(K=I.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var Q,X,Z;R.parameters={...R.parameters,docs:{...(Q=R.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Responsive width',
  render: () => {
    const me = React.useMemo(() => createMeMock(), []);
    return <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }}>
        <Noise me={me} path="blockchain.url" operator="=" label="Blockchain" placeholder="blockchain" width={{
        xs: '100%',
        sm: '60%',
        md: '40%',
        lg: '25%'
      } as any} showCheck />
        <Typography variant="caption" sx={{
        color: 'text.secondary'
      }}>
          Resize the preview to see width adapt across breakpoints.
        </Typography>
      </Box>;
  }
}`,...(Z=(X=R.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const qe=["UsernameIdentity","InlineValueReadout","CompactRow","ResponsiveWidth"];export{I as CompactRow,M as InlineValueReadout,R as ResponsiveWidth,S as UsernameIdentity,qe as __namedExportsOrder,Ne as default};
