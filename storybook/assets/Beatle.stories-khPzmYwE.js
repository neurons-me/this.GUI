import{r as u,j as t,f as v,G as ue,a as R,B as E}from"./iframe-BOpb4YIv.js";import"./Button-DLg_2bWS.js";import"./Chip-Jw9wd0Uq.js";import{L as ce}from"./Layout-IAcM6KGn.js";import{S as pe}from"./SurfaceAccessTable-mwgIOkTL.js";import{p as de}from"./expression-BZNRoK0r.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-DzmBtpNi.js";import"./Button-BBkqSahG.js";import"./ButtonBase-wlOBdJtH.js";import"./TransitionGroupContext-BS26-g3U.js";import"./useForkRef-dhPZUXrW.js";import"./CircularProgress-DO1ae1Up.js";import"./createSvgIcon-Boif_Qzi.js";import"./LeftSidebarContext-Bc78bTHn.js";import"./RightSidebarContext-CStvAXf-.js";import"./TopBar-oUPkkUvd.js";import"./Menu-DC8cg--Q.js";import"./useSlot-HWh9e-Qv.js";import"./resolveComponentProps-CHSBRdpi.js";import"./useSlotProps-Bqtf_G4K.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-CXVojHGY.js";import"./Modal-DTdlQupa.js";import"./Grow-DcgXnIYz.js";import"./List-DCx-fdb4.js";import"./ListContext-DxyJOsjJ.js";import"./MenuItem-C8wM5jql.js";import"./listItemIconClasses-CSdBHDnA.js";import"./listItemTextClasses-Bjqy9_ye.js";import"./dividerClasses-DU1eXcIB.js";import"./index-BEzWTozk.js";import"./useGuiMediaQuery-CzNeDUBy.js";import"./getThemeProps-B1DPgGZg.js";import"./useInsets-CuNsBlYE.js";import"./Avatar-YW5PkMUC.js";import"./AppBar-C6pFo9I4.js";import"./Toolbar-DMjcZbrA.js";import"./InspectorToggle-DAQxw7h1.js";import"./Drawer-CS-fZvWK.js";import"./Paper-CRwrMbzS.js";import"./renderer-BVJst6-E.js";import"./runtimeContext-CzmwpH0Y.js";import"./IconButton-BQ3BjMi8.js";import"./IconButton-Btnx6d7J.js";import"./ListItemIcon-e8U0ao5E.js";import"./ListItemText-LBsMmETJ.js";import"./Tooltip-DLbppr6W.js";import"./useControlled-nmmvMmEZ.js";import"./Collapse-Dr-lrEEJ.js";import"./AppBar-CQXAsQbj.js";import"./Avatar-BXKuPOGJ.js";import"./StickyOptionsTop-BKG3VjDY.js";const k={union:1,intersection:2,overlay:3};class j extends Error{constructor(e,n){super(e),this.pos=n}}function me(r){const e=[];let n=0;const i=r.trim();for(;n<i.length;){const o=i[n];if(o===" "||o==="	"){n++;continue}if(o==="+"){e.push({type:"op",value:"+"}),n++;continue}if(o==="∩"){e.push({type:"op",value:"∩"}),n++;continue}if(o==="@"){e.push({type:"op",value:"@"}),n++;continue}if(o==="~"){e.push({type:"op",value:"~"}),n++;continue}if(o==="("){e.push({type:"lparen"}),n++;continue}if(o===")"){e.push({type:"rparen"}),n++;continue}if(o==='"'){let a=n+1;for(;a<i.length&&i[a]!=='"';)a++;if(a>=i.length)throw new j("Unterminated quoted string",n);e.push({type:"quoted",value:i.slice(n+1,a)}),n=a+1;continue}if(/[a-zA-Z0-9]/.test(o)){let a=n,y=0;for(;a<i.length;){const g=i[a];if(g==="["){y++,a++;continue}if(g==="]"){y--,a++;continue}if(y>0){a++;continue}if(/[a-zA-Z0-9.\-_:\/]/.test(g)){a++;continue}break}e.push({type:"ns",value:i.slice(n,a)}),n=a;continue}throw new j(`Unexpected character '${o}' at position ${n}`,n)}return e.push({type:"end"}),e}class ye{constructor(e){this.tokens=e,this.pos=0}peek(){return this.tokens[this.pos]??{type:"end"}}consume(){return this.tokens[this.pos++]??{type:"end"}}isOp(e){const n=this.peek();return n.type==="op"&&n.value===e}parse(){const e=this.parseUnion();if(this.peek().type!=="end")throw new j(`Unexpected token after expression at position ${this.pos}`,this.pos);return e}parseUnion(){let e=this.parseIntersection();for(;this.isOp("+");){this.consume();const n=this.parseIntersection();e={kind:"union",left:e,right:n}}return e}parseIntersection(){let e=this.parseOverlay();for(;this.isOp("∩");){this.consume();const n=this.parseOverlay();e={kind:"intersection",left:e,right:n}}return e}parseOverlay(){const e=this.parseAtom();if(this.isOp("@")){this.consume();const n=this.peek();if(n.type==="quoted")return this.consume(),{kind:"overlay",namespace:e,surface:n.value};if(n.type==="ns")return this.consume(),{kind:"overlay",namespace:e,surface:n.value};throw new j("Expected overlay surface after @",this.pos)}return e}parseAtom(){const e=this.peek();if(e.type==="op"&&e.value==="~")return this.consume(),{kind:"complement",operand:this.parseAtom()};if(e.type==="lparen"){this.consume();const n=this.parseUnion();if(this.peek().type!=="rparen")throw new j("Expected closing )",this.pos);return this.consume(),n}if(e.type==="ns")return this.consume(),ge(e.value);throw new j(`Expected namespace or expression, got '${e.type}'`,this.pos)}}function ge(r){try{const e=de(r);return{kind:"namespace",value:r,parsed:e}}catch(e){return{kind:"namespace",value:r,parseError:String(e)}}}function N(r){switch(r.kind){case"namespace":return r.parsed!==void 0;case"complement":return N(r.operand);case"union":return N(r.left)&&N(r.right);case"intersection":return N(r.left)&&N(r.right);case"overlay":return N(r.namespace)}}function w(r,e){var n;switch(r.kind){case"namespace":return((n=r.parsed)==null?void 0:n.expression)??r.value;case"complement":return`~${w(r.operand,k.overlay+1)}`;case"union":{const i=`${w(r.left,k.union)} + ${w(r.right,k.union+1)}`;return e>k.union?`(${i})`:i}case"intersection":{const i=`${w(r.left,k.intersection)} ∩ ${w(r.right,k.intersection+1)}`;return e>k.intersection?`(${i})`:i}case"overlay":{const i=w(r.namespace,k.overlay+1),o=r.surface.includes("://")?`"${r.surface}"`:r.surface,a=`${i} @ ${o}`;return e>k.overlay?`(${a})`:a}}}function fe(r){return w(r,0)}function he(r){try{const e=me(r.trim()),n=new ye(e).parse(),i=fe(n),o=N(n);return{raw:r,canonical:i,ast:n,syntaxValid:!0,namespaceValid:o,valid:!0}}catch(e){const n={kind:"namespace",value:r.trim(),parseError:String(e)};return{raw:r,canonical:r.trim(),ast:n,syntaxValid:!1,namespaceValid:!1,valid:!1,error:String(e)}}}const ve="ws://local.netget/nrp",ke={expression:null,resolved:[],state:"idle"};function be(r=ve,e){const[n,i]=u.useState(ke),o=u.useRef(null),a=(f,p)=>i(d=>({...d,state:f,...p})),y=u.useCallback(()=>{o.current&&(o.current.onclose=null,o.current.close(),o.current=null)},[]),g=u.useCallback(()=>{y(),i(f=>({...f,state:"disconnected"}))},[y]),P=u.useCallback(f=>{if(!f.trim()){g();return}y(),a("parsing",{expression:null,resolved:[],error:void 0});const p=he(f);if(!p.valid){a("error",{expression:p,error:p.error??"Invalid expression"});return}a("connecting",{expression:p});try{const d=new WebSocket(r);o.current=d,d.onopen=()=>{a("resolving");const c={type:"nrp.open",expression:p.raw,canonical:p.canonical,ast:p.ast,client:{surface:typeof window<"u"?window.location.href:void 0,userAgent:typeof navigator<"u"?navigator.userAgent:void 0,gui:"Beatle"},timestamp:Date.now()};d.send(JSON.stringify(c))},d.onmessage=c=>{let h;try{h=JSON.parse(c.data)}catch{return}switch(e==null||e(h),h.type){case"resolved":{const x=h.payload;a("connected",{resolved:x.endpoints,channelId:h.channelId,audience:x.audience,capabilities:x.capabilities,disclosure:x.disclosure,surface:x.surface??(p.ast.kind==="overlay"?p.ast.surface:void 0)});break}case"stream":a("streaming");break;case"error":a("error",{error:h.payload});break}},d.onerror=()=>a("error",{error:"WebSocket error"}),d.onclose=()=>{i(c=>c.state!=="idle"&&c.state!=="error"?{...c,state:"disconnected"}:c)}}catch(d){a("error",{error:String(d)})}},[r,y,g,e]),B=u.useCallback(f=>{var c;const p=n.state;if(p!=="connected"&&p!=="streaming"||((c=o.current)==null?void 0:c.readyState)!==WebSocket.OPEN)return;const d={type:"data",payload:f,timestamp:Date.now()};o.current.send(JSON.stringify(d))},[n.state]);return u.useEffect(()=>()=>y(),[y]),{channel:n,open:P,send:B,disconnect:g}}function xe(r){const e=r??(typeof window<"u"?window.location.hostname:"localhost");return[{label:e,ws:`ws://${e}/nrp`,kind:"local"},{label:"cleaker.me",ws:"wss://cleaker.me/nrp",kind:"public"}]}const Q="beatle:resolver-history",Ne=8,we={idle:"#555e66",parsing:"#ffb74d",connecting:"#ffb74d",resolving:"#ffcc02",connected:"#66bb6a",streaming:"#4fc3f7",error:"#666",disconnected:"#555e66"},F={idle:"no channel",parsing:"parsing…",connecting:"connecting…",resolving:"resolving…",connected:"connected",streaming:"streaming",error:"no server",disconnected:"disconnected"},Re={local:"#81c784",public:"#ce93d8"},qe=["parsing","connecting","resolving"];function je(){try{return JSON.parse(localStorage.getItem(Q)??"[]")}catch{return[]}}function Pe(r){try{localStorage.setItem(Q,JSON.stringify(r.slice(0,Ne)))}catch{}}function Se(r){return`${r==="localhost"||r.endsWith(".local")||/^127\.|^192\.168\.|^10\./.test(r)?"ws":"wss"}://${r}/nrp`}function b({defaultExpression:r="",resolvers:e,nrpEndpoint:n,onConnect:i,onMessage:o,onDisconnect:a,variant:y="bar",sx:g}){var z,U;const[P,B]=u.useState(r),[f,p]=u.useState(!1),d=u.useRef(null),c=u.useMemo(()=>e??xe(),[]),[h,x]=u.useState(je),ee=u.useMemo(()=>{const s=[...h,...c.map(m=>m.label)];return[...new Set(s)]},[h,c]),[S,re]=u.useState(()=>{var s;return((s=c.find(m=>m.ws===n))==null?void 0:s.label)??c[0].label}),[T,ne]=u.useState(""),te=u.useMemo(()=>{const s=c.find(m=>m.label===S);return(s==null?void 0:s.ws)??Se(S)},[S,c]),ae=u.useMemo(()=>{var s;return((s=c.find(m=>m.label===S))==null?void 0:s.kind)??"public"},[S,c]),{channel:l,open:O,disconnect:C}=be(te,o),q=we[l.state],se=qe.includes(l.state);u.useEffect(()=>{l.state==="connected"&&(i==null||i(l))},[l.state]),u.useEffect(()=>{l.state==="disconnected"&&(a==null||a())},[l.state]);const $=u.useCallback(s=>{const m=s.trim();m&&(re(m),C(),x(oe=>{const V=[m,...oe.filter(le=>le!==m)];return Pe(V),V}))},[C]),W=u.useCallback(()=>{O(P.trim())},[P,O]),ie=s=>{var m;s.key==="Enter"&&W(),s.key==="Escape"&&(C(),B(""),(m=d.current)==null||m.blur())},D=((z=l.expression)==null?void 0:z.canonical)??((U=l.expression)==null?void 0:U.raw)??"";return y==="bubble"?t.jsx(v,{title:D?`me://${D} — ${F[l.state]}`:"Beatle — NRP channel",onClick:()=>{var s;return(s=d.current)==null?void 0:s.focus()},sx:{display:"inline-flex",alignItems:"center",cursor:"pointer",userSelect:"none",...g},children:t.jsx("span",{style:{fontSize:22,color:q,filter:`drop-shadow(0 0 4px ${q})`,lineHeight:1},children:"𓆣"})}):t.jsxs(t.Fragment,{children:[t.jsx(ue,{styles:{"@keyframes beatle-pulse":{"0%,100%":{opacity:.6},"50%":{opacity:1}}}}),t.jsxs(v,{sx:{display:"flex",alignItems:"center",gap:.75,width:"100%",height:44,px:1.5,borderRadius:2,border:"1px solid",borderColor:f?q:"divider",bgcolor:"background.paper",transition:"border-color 0.2s ease",...g},children:[t.jsx(v,{sx:{fontSize:18,lineHeight:1,color:q,flexShrink:0,transition:"color 0.3s ease",animation:se?"beatle-pulse 1s ease-in-out infinite":"none",cursor:"pointer",userSelect:"none"},onClick:()=>l.state==="connected"||l.state==="streaming"?C():W(),title:l.state==="connected"||l.state==="streaming"?"Disconnect":"Open channel",children:"𓆣"}),t.jsx(R,{variant:"caption",sx:{color:"text.disabled",fontFamily:"monospace",fontSize:"0.8rem",flexShrink:0},children:"me://"}),t.jsx(v,{ref:d,component:"input",value:P,onChange:s=>B(s.target.value),onKeyDown:ie,onFocus:()=>p(!0),onBlur:()=>p(!1),placeholder:"username @ namespace [surface] / path",spellCheck:!1,autoComplete:"off",sx:{flex:1,border:"none",outline:"none",background:"transparent",color:"text.primary",fontFamily:"monospace",fontSize:"0.82rem",fontWeight:500,minWidth:0,"&::placeholder":{color:"text.disabled",fontStyle:"italic"}}}),t.jsx(v,{sx:{width:"1px",height:20,bgcolor:"divider",flexShrink:0}}),t.jsxs(v,{sx:{display:"flex",alignItems:"center",gap:.5,flexShrink:0},children:[t.jsx(v,{sx:{width:6,height:6,borderRadius:"50%",bgcolor:Re[ae],flexShrink:0}}),t.jsx(v,{component:"input",list:"beatle-resolvers",value:T,onChange:s=>ne(s.target.value),onBlur:()=>{T.trim()&&$(T)},onKeyDown:s=>{s.key==="Enter"&&($(T),s.currentTarget.blur())},placeholder:"namespace",spellCheck:!1,autoComplete:"off",sx:{border:"none",outline:"none",background:"transparent",color:"text.secondary",fontFamily:"monospace",fontSize:"0.68rem",fontWeight:500,width:120,"&::placeholder":{color:"text.disabled",fontStyle:"italic"}}}),t.jsx("datalist",{id:"beatle-resolvers",children:ee.map(s=>t.jsx("option",{value:s},s))})]}),t.jsx(R,{variant:"caption",sx:{flexShrink:0,fontSize:"0.7rem",fontWeight:600,color:q,transition:"color 0.3s ease",whiteSpace:"nowrap"},children:F[l.state]}),(l.state==="connected"||l.state==="streaming")&&l.resolved.length>0&&t.jsx(v,{sx:{flexShrink:0,px:.75,py:.25,borderRadius:1,bgcolor:l.state==="streaming"?"rgba(79,195,247,0.12)":"rgba(102,187,106,0.12)",border:`1px solid ${l.state==="streaming"?"rgba(79,195,247,0.3)":"rgba(102,187,106,0.3)"}`},children:t.jsxs(R,{variant:"caption",sx:{fontSize:"0.65rem",color:q,fontFamily:"monospace"},children:[l.resolved.length," endpoint",l.resolved.length>1?"s":""]})})]})]})}b.__docgenInfo={description:"",methods:[],displayName:"Beatle",props:{defaultExpression:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},resolvers:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /** Display label — the namespace identity of the resolver, e.g. "mymac.local" or "cleaker.me" */
  label: string;
  /** WebSocket URL for nrp.open */
  ws: string;
  kind: 'local' | 'public';
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0},description:'Display label — the namespace identity of the resolver, e.g. "mymac.local" or "cleaker.me"'},{key:"ws",value:{name:"string",required:!0},description:"WebSocket URL for nrp.open"},{key:"kind",value:{name:"union",raw:"'local' | 'public'",elements:[{name:"literal",value:"'local'"},{name:"literal",value:"'public'"}],required:!0}}]}}],raw:"NRPResolver[]"},description:"Override the list of NRP resolver endpoints shown in the dropdown"},nrpEndpoint:{required:!1,tsType:{name:"string"},description:"Pre-select a resolver by ws URL"},onConnect:{required:!1,tsType:{name:"signature",type:"function",raw:"(channel: NamespaceChannel) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  expression: NRPExpression | null;
  resolved: string[];
  state: ResolutionState;
  channelId?: string;
  audience?: string[];
  /** Overlay/projection surface, not the NRP technical monad selector. */
  surface?: string;
  capabilities?: string[];
  /** Disclosure level reported by the NRP server for this channel */
  disclosure?: NRPDisclosure;
  error?: string;
}`,signature:{properties:[{key:"expression",value:{name:"union",raw:"NRPExpression | null",elements:[{name:"signature",type:"object",raw:`{
  raw: string;
  canonical: string;
  ast: NRPNode;
  /** Algebra parsed without syntax errors */
  syntaxValid: boolean;
  /** All namespace leaves passed Cleaker validation */
  namespaceValid: boolean;
  /** syntaxValid — safe to send to NRP server */
  valid: boolean;
  error?: string;
}`,signature:{properties:[{key:"raw",value:{name:"string",required:!0}},{key:"canonical",value:{name:"string",required:!0}},{key:"ast",value:{name:"union",raw:`| NamespaceLeaf
| { kind: 'complement';   operand: NRPNode }
| { kind: 'union';        left: NRPNode; right: NRPNode }
| { kind: 'intersection'; left: NRPNode; right: NRPNode }
/** Projection overlay. This is not the same as an NRP [monad] selector. */
| { kind: 'overlay';      namespace: NRPNode; surface: string }`,elements:[{name:"signature",type:"object",raw:`{
  kind: 'namespace';
  value: string;
  /** Cleaker-parsed result when valid */
  parsed?: ParsedNamespaceExpression;
  /** Reason Cleaker rejected this leaf */
  parseError?: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:"'namespace'",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"parsed",value:{name:"ParsedNamespaceExpression",required:!1},description:"Cleaker-parsed result when valid"},{key:"parseError",value:{name:"string",required:!1},description:"Reason Cleaker rejected this leaf"}]}},{name:"signature",type:"object",raw:"{ kind: 'complement';   operand: NRPNode }",signature:{properties:[{key:"kind",value:{name:"literal",value:"'complement'",required:!0}},{key:"operand",value:{name:"NRPNode",required:!0}}]}},{name:"signature",type:"object",raw:"{ kind: 'union';        left: NRPNode; right: NRPNode }",signature:{properties:[{key:"kind",value:{name:"literal",value:"'union'",required:!0}},{key:"left",value:{name:"NRPNode",required:!0}},{key:"right",value:{name:"NRPNode",required:!0}}]}},{name:"signature",type:"object",raw:"{ kind: 'intersection'; left: NRPNode; right: NRPNode }",signature:{properties:[{key:"kind",value:{name:"literal",value:"'intersection'",required:!0}},{key:"left",value:{name:"NRPNode",required:!0}},{key:"right",value:{name:"NRPNode",required:!0}}]}},{name:"signature",type:"object",raw:"{ kind: 'overlay';      namespace: NRPNode; surface: string }",signature:{properties:[{key:"kind",value:{name:"literal",value:"'overlay'",required:!0}},{key:"namespace",value:{name:"NRPNode",required:!0}},{key:"surface",value:{name:"string",required:!0}}]}}],required:!0}},{key:"syntaxValid",value:{name:"boolean",required:!0},description:"Algebra parsed without syntax errors"},{key:"namespaceValid",value:{name:"boolean",required:!0},description:"All namespace leaves passed Cleaker validation"},{key:"valid",value:{name:"boolean",required:!0},description:"syntaxValid — safe to send to NRP server"},{key:"error",value:{name:"string",required:!1}}]}},{name:"null"}],required:!0}},{key:"resolved",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"state",value:{name:"union",raw:`| 'idle'
| 'parsing'
| 'connecting'
| 'resolving'
| 'connected'
| 'streaming'
| 'error'
| 'disconnected'`,elements:[{name:"literal",value:"'idle'"},{name:"literal",value:"'parsing'"},{name:"literal",value:"'connecting'"},{name:"literal",value:"'resolving'"},{name:"literal",value:"'connected'"},{name:"literal",value:"'streaming'"},{name:"literal",value:"'error'"},{name:"literal",value:"'disconnected'"}],required:!0}},{key:"channelId",value:{name:"string",required:!1}},{key:"audience",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"surface",value:{name:"string",required:!1},description:"Overlay/projection surface, not the NRP technical monad selector."},{key:"capabilities",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"disclosure",value:{name:"union",raw:"'public' | 'closed' | 'stealth' | 'contested'",elements:[{name:"literal",value:"'public'"},{name:"literal",value:"'closed'"},{name:"literal",value:"'stealth'"},{name:"literal",value:"'contested'"}],required:!1},description:"Disclosure level reported by the NRP server for this channel"},{key:"error",value:{name:"string",required:!1}}]}},name:"channel"}],return:{name:"void"}}},description:""},onMessage:{required:!1,tsType:{name:"signature",type:"function",raw:"(msg: BeatleMessage) => void",signature:{arguments:[{type:{name:"union",raw:`| MsgNrpOpen
| MsgResolved
| MsgData
| MsgStream
| MsgError
| MsgPing
| MsgPong`,elements:[{name:"signature",type:"object",raw:`{
  type: 'nrp.open';
  expression: string;
  canonical: string;
  ast: NRPNode;
  client: ClientContext;
  timestamp: number;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:"'nrp.open'",required:!0}},{key:"expression",value:{name:"string",required:!0}},{key:"canonical",value:{name:"string",required:!0}},{key:"ast",value:{name:"union",raw:`| NamespaceLeaf
| { kind: 'complement';   operand: NRPNode }
| { kind: 'union';        left: NRPNode; right: NRPNode }
| { kind: 'intersection'; left: NRPNode; right: NRPNode }
/** Projection overlay. This is not the same as an NRP [monad] selector. */
| { kind: 'overlay';      namespace: NRPNode; surface: string }`,elements:[{name:"signature",type:"object",raw:`{
  kind: 'namespace';
  value: string;
  /** Cleaker-parsed result when valid */
  parsed?: ParsedNamespaceExpression;
  /** Reason Cleaker rejected this leaf */
  parseError?: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:"'namespace'",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"parsed",value:{name:"ParsedNamespaceExpression",required:!1},description:"Cleaker-parsed result when valid"},{key:"parseError",value:{name:"string",required:!1},description:"Reason Cleaker rejected this leaf"}]}},{name:"signature",type:"object",raw:"{ kind: 'complement';   operand: NRPNode }",signature:{properties:[{key:"kind",value:{name:"literal",value:"'complement'",required:!0}},{key:"operand",value:{name:"NRPNode",required:!0}}]}},{name:"signature",type:"object",raw:"{ kind: 'union';        left: NRPNode; right: NRPNode }",signature:{properties:[{key:"kind",value:{name:"literal",value:"'union'",required:!0}},{key:"left",value:{name:"NRPNode",required:!0}},{key:"right",value:{name:"NRPNode",required:!0}}]}},{name:"signature",type:"object",raw:"{ kind: 'intersection'; left: NRPNode; right: NRPNode }",signature:{properties:[{key:"kind",value:{name:"literal",value:"'intersection'",required:!0}},{key:"left",value:{name:"NRPNode",required:!0}},{key:"right",value:{name:"NRPNode",required:!0}}]}},{name:"signature",type:"object",raw:"{ kind: 'overlay';      namespace: NRPNode; surface: string }",signature:{properties:[{key:"kind",value:{name:"literal",value:"'overlay'",required:!0}},{key:"namespace",value:{name:"NRPNode",required:!0}},{key:"surface",value:{name:"string",required:!0}}]}}],required:!0}},{key:"client",value:{name:"signature",type:"object",raw:`{
  /** Current browser/projection surface, not the NRP [monad] selector. */
  surface?: string;
  userAgent?: string;
  gui?: string;
}`,signature:{properties:[{key:"surface",value:{name:"string",required:!1},description:"Current browser/projection surface, not the NRP [monad] selector."},{key:"userAgent",value:{name:"string",required:!1}},{key:"gui",value:{name:"string",required:!1}}]},required:!0}},{key:"timestamp",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  type: 'resolved';
  channelId: string;
  payload: ResolvedPayload;
  timestamp: number;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:"'resolved'",required:!0}},{key:"channelId",value:{name:"string",required:!0}},{key:"payload",value:{name:"signature",type:"object",raw:`{
  endpoints: string[];
  audience?: string[];
  capabilities?: string[];
  /**
   * Projection/overlay surface the channel is overlaid on (from @ operator).
   * This is distinct from an NRP [monad] selector.
   */
  surface?: string;
  disclosure: NRPDisclosure;
}`,signature:{properties:[{key:"endpoints",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"audience",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"capabilities",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"surface",value:{name:"string",required:!1},description:`Projection/overlay surface the channel is overlaid on (from @ operator).
This is distinct from an NRP [monad] selector.`},{key:"disclosure",value:{name:"union",raw:"'public' | 'closed' | 'stealth' | 'contested'",elements:[{name:"literal",value:"'public'"},{name:"literal",value:"'closed'"},{name:"literal",value:"'stealth'"},{name:"literal",value:"'contested'"}],required:!0}}]},required:!0}},{key:"timestamp",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  type: 'data';
  channelId?: string;
  payload: unknown;
  timestamp: number;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:"'data'",required:!0}},{key:"channelId",value:{name:"string",required:!1}},{key:"payload",value:{name:"unknown",required:!0}},{key:"timestamp",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  type: 'stream';
  channelId?: string;
  payload?: unknown;
  timestamp: number;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:"'stream'",required:!0}},{key:"channelId",value:{name:"string",required:!1}},{key:"payload",value:{name:"unknown",required:!1}},{key:"timestamp",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  type: 'error';
  channelId?: string;
  payload: string;
  timestamp: number;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:"'error'",required:!0}},{key:"channelId",value:{name:"string",required:!1}},{key:"payload",value:{name:"string",required:!0}},{key:"timestamp",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:"{ type: 'ping'; timestamp: number }",signature:{properties:[{key:"type",value:{name:"literal",value:"'ping'",required:!0}},{key:"timestamp",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:"{ type: 'pong'; timestamp: number }",signature:{properties:[{key:"type",value:{name:"literal",value:"'pong'",required:!0}},{key:"timestamp",value:{name:"number",required:!0}}]}}]},name:"msg"}],return:{name:"void"}}},description:""},onDisconnect:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'bar' | 'bubble'",elements:[{name:"literal",value:"'bar'"},{name:"literal",value:"'bubble'"}]},description:"",defaultValue:{value:"'bar'",computed:!1}},sx:{required:!1,tsType:{name:"any"},description:""}}};const Sr={title:"All.This/NRP/Beatle",component:b,parameters:{layout:"padded"}},I={render:()=>t.jsxs(E,{sx:{maxWidth:480,display:"flex",flexDirection:"column",gap:2},children:[t.jsx(R,{variant:"caption",sx:{color:"text.secondary"},children:"Type a .me expression and press Enter to open a WebSocket channel via NRP."}),t.jsx(b,{defaultExpression:"jabellae"}),t.jsx(b,{defaultExpression:"jabellae + alex"}),t.jsx(b,{})]})},L={render:()=>t.jsxs(E,{sx:{display:"flex",gap:3,alignItems:"center"},children:[t.jsx(b,{variant:"bubble",defaultExpression:"jabellae"}),t.jsx(b,{variant:"bubble"})]})},A={parameters:{layout:"fullscreen"},render:()=>t.jsx(ce,{TopBar:{title:"NRP",elementsRight:[{type:"action",props:{element:t.jsx(b,{sx:{width:320}})}}]},LeftBar:{elements:[{type:"link",props:{label:"Namespaces",icon:"hub"}},{type:"link",props:{label:"Channels",icon:"bolt"}},{type:"link",props:{label:"Mesh",icon:"polyline"}}]},RightBar:!1,Footer:!1,children:t.jsxs(E,{sx:{p:4,maxWidth:680,display:"flex",flexDirection:"column",gap:4},children:[t.jsxs(E,{children:[t.jsx(R,{variant:"h5",sx:{fontWeight:700,mb:.5},children:"Beatle"}),t.jsx(R,{variant:"body2",color:"text.secondary",children:"The NRP channel interface. Type any .me expression — a single namespace, a union, an intersection — and Beatle opens a bidirectional WebSocket to the resolved endpoint(s). The browser URL stays independent."})]}),t.jsx(b,{defaultExpression:"jabellae"}),t.jsx(E,{sx:{display:"flex",flexDirection:"column",gap:.75},children:["me://jabellae","me://jabellae + alex","me://jabellae ∩ team.acme","me://jabellae @ wikipedia.com",'me://(jabellae + alex) @ "https://wikipedia.com/Scarab"'].map(r=>t.jsx(R,{variant:"caption",sx:{color:"text.secondary",fontFamily:"monospace",fontSize:"0.72rem"},children:r},r))}),t.jsx(pe,{})]})})};var _,M,H;I.parameters={...I.parameters,docs:{...(_=I.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Box sx={{
    maxWidth: 480,
    display: 'flex',
    flexDirection: 'column',
    gap: 2
  }}>
      <Typography variant="caption" sx={{
      color: 'text.secondary'
    }}>
        Type a .me expression and press Enter to open a WebSocket channel via NRP.
      </Typography>
      <Beatle defaultExpression="jabellae" />
      <Beatle defaultExpression="jabellae + alex" />
      <Beatle />
    </Box>
}`,...(H=(M=I.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var K,J,G;L.parameters={...L.parameters,docs:{...(K=L.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    gap: 3,
    alignItems: 'center'
  }}>
      <Beatle variant="bubble" defaultExpression="jabellae" />
      <Beatle variant="bubble" />
    </Box>
}`,...(G=(J=L.parameters)==null?void 0:J.docs)==null?void 0:G.source}}};var Y,Z,X;A.parameters={...A.parameters,docs:{...(Y=A.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <Layout TopBar={{
    title: 'NRP',
    elementsRight: [{
      type: 'action',
      props: {
        element: <Beatle sx={{
          width: 320
        }} />
      }
    }]
  }} LeftBar={{
    elements: [{
      type: 'link',
      props: {
        label: 'Namespaces',
        icon: 'hub'
      }
    }, {
      type: 'link',
      props: {
        label: 'Channels',
        icon: 'bolt'
      }
    }, {
      type: 'link',
      props: {
        label: 'Mesh',
        icon: 'polyline'
      }
    }]
  }} RightBar={false} Footer={false}>
      <Box sx={{
      p: 4,
      maxWidth: 680,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }}>
        <Box>
          <Typography variant="h5" sx={{
          fontWeight: 700,
          mb: 0.5
        }}>Beatle</Typography>
          <Typography variant="body2" color="text.secondary">
            The NRP channel interface. Type any .me expression — a single namespace,
            a union, an intersection — and Beatle opens a bidirectional WebSocket
            to the resolved endpoint(s). The browser URL stays independent.
          </Typography>
        </Box>

        <Beatle defaultExpression="jabellae" />

        <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 0.75
      }}>
          {['me://jabellae', 'me://jabellae + alex', 'me://jabellae ∩ team.acme', 'me://jabellae @ wikipedia.com', 'me://(jabellae + alex) @ "https://wikipedia.com/Scarab"'].map(expr => <Typography key={expr} variant="caption" sx={{
          color: 'text.secondary',
          fontFamily: 'monospace',
          fontSize: '0.72rem'
        }}>
              {expr}
            </Typography>)}
        </Box>

        <SurfaceAccessTable />
      </Box>
    </Layout>
}`,...(X=(Z=A.parameters)==null?void 0:Z.docs)==null?void 0:X.source}}};const Er=["Bar","Bubble","InLayout"];export{I as Bar,L as Bubble,A as InLayout,Er as __namedExportsOrder,Sr as default};
