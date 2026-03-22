import{j as e,r as i,T as N,B as l,a as s,u as D,M as O}from"./iframe-D9h36_NB.js";import{R as $,u as B}from"./Router-TqHIvsyc.js";import{S as K}from"./Stack-Cqf_Vvj1.js";import{B as j}from"./Button-BYqM0JcA.js";import{P as h}from"./Paper-71kv7-Ow.js";import{P as f}from"./Page-CrTwreuQ.js";import"./preload-helper-Dp1pzeXC.js";import"./getThemeProps-sPR1FmCD.js";import"./Icon-0UwWLaxE.js";import"./Button-j-Mhs7fk.js";import"./ButtonBase-DIt9aqy4.js";import"./TransitionGroupContext-speb4CnD.js";import"./useForkRef-DJcJK6M1.js";import"./useEventCallback-DWW8G7u7.js";import"./CircularProgress-DYuf6jvR.js";import"./Paper-BbGiJwVi.js";function W(n,r){return new Promise((y,t)=>{const m=window.setTimeout(()=>{x(),y()},n),o=()=>{window.clearTimeout(m),x(),t(new DOMException("Aborted","AbortError"))},x=()=>{r==null||r.removeEventListener("abort",o)};if(r!=null&&r.aborted){o();return}r==null||r.addEventListener("abort",o,{once:!0})})}function k(){return e.jsxs(f,{padding:3,children:[e.jsx(s,{variant:"h4",children:"Dashboard"}),e.jsx(s,{variant:"body2",sx:{opacity:.78,mt:.5},children:"Stable home screen used as the fallback context."}),e.jsxs(h,{sx:{p:2,borderRadius:2,mt:2},children:[e.jsx(s,{variant:"body1",children:"Everything is healthy"}),e.jsx(s,{variant:"body2",sx:{opacity:.8},children:"Use this screen to test failed route transitions."})]})]})}function A(){return e.jsxs(f,{padding:3,children:[e.jsx(s,{variant:"h4",children:"Reports"}),e.jsx(s,{variant:"body2",sx:{opacity:.78,mt:.5},children:"The route resolved successfully."}),e.jsxs(h,{sx:{p:2,borderRadius:2,mt:2},children:[e.jsx(s,{variant:"body1",children:"Loaded latest report data"}),e.jsx(s,{variant:"body2",sx:{opacity:.8},children:"This is the successful version of the async route."})]})]})}function X(n){return e.jsxs(f,{padding:3,children:[e.jsx(s,{variant:"h4",children:"Loading route..."}),e.jsx(s,{variant:"body2",sx:{opacity:.78,mt:.5},children:`Preparing ${n}`}),e.jsxs(h,{sx:{p:2,borderRadius:2,mt:2,borderStyle:"dashed",borderWidth:1,borderColor:"divider"},children:[e.jsx(s,{variant:"body1",children:"Pending shell"}),e.jsx(s,{variant:"body2",sx:{opacity:.8},children:"The route transition is still in flight."})]})]})}function I(n,r){return e.jsxs(h,{sx:{p:2,borderRadius:2,mt:2,border:"1px solid",borderColor:"error.main"},children:[e.jsx(s,{variant:"body1",sx:{color:"error.main",fontWeight:700},children:"Route failed"}),e.jsx(s,{variant:"body2",sx:{opacity:.82,mt:.5},children:n}),r&&e.jsx(j,{sx:{mt:2},variant:"outlined",color:"error",onClick:r,children:"Retry"})]})}function P(n,r){return e.jsxs(f,{padding:3,children:[e.jsx(s,{variant:"h4",children:"Route failed"}),e.jsx(s,{variant:"body2",sx:{opacity:.78,mt:.5},children:"The next route could not be resolved."}),I(n,r)]})}function v({mode:n,title:r,subtitle:y}){const t=i.useMemo(()=>new $({useHistory:!1,notFound:(a,d)=>P(d instanceof Error?d.message:"Unknown route failure")}),[]),[m,o]=i.useState(()=>k()),[x,U]=i.useState("/dashboard"),[g,w]=i.useState(null),[b,R]=i.useState(null),{isRunning:_,showLoader:p,run:T,cancel:E}=B({threshold:180,onCancelPrevious:"abort"});i.useEffect(()=>{t.set("/dashboard",()=>k()),t.set("/reports",()=>A());const a=t.onChange((d,c)=>{o(d),U(c.path)});return t.navigate("/dashboard",{push:!1}),()=>{a(),E(),t.destroy()}},[E,t]),i.useEffect(()=>{n==="swap"&&p&&b&&o(X(b))},[n,b,p]);const u=i.useCallback(async(a,d)=>{R(a),w(null);try{await T(async({signal:c})=>{if(await W(240,c),d)throw new Error("The reports service is temporarily unavailable.");return t.navigate(a,{push:!1})})}catch(c){const S=c instanceof Error?c.message:"Unknown route failure";w(S),n==="swap"&&o(P(S,()=>void u(a,!1)))}finally{R(null)}},[n,t,T]),H=p&&n!=="swap";return e.jsx(N,{initialThemeId:"neurons.me",initialMode:"dark",children:e.jsxs(l,{sx:{p:3,display:"grid",gap:2},children:[e.jsxs(l,{children:[e.jsx(s,{sx:{fontSize:20,fontWeight:800},children:r}),e.jsx(s,{sx:{opacity:.8,mt:.5},children:y})]}),e.jsxs(K,{direction:{xs:"column",md:"row"},spacing:1.5,children:[e.jsx(j,{variant:"contained",onClick:()=>void u("/dashboard",!1),children:"Dashboard"}),e.jsx(j,{variant:"outlined",color:"success",onClick:()=>void u("/reports",!1),children:"Success Route"}),e.jsx(j,{variant:"outlined",color:"error",onClick:()=>void u("/reports",!0),children:"Fail Route"})]}),e.jsxs(h,{sx:{p:2},children:[e.jsxs(s,{variant:"body2",sx:{opacity:.78},children:["Current path: ",e.jsx(l,{component:"span",sx:{fontFamily:"monospace"},children:x})]}),e.jsx(s,{variant:"body2",sx:{opacity:.78,mt:.75},children:n==="keep"?"Recipe: preserve the previous screen and attach an error panel if the next route fails.":n==="swap"?"Recipe: move into a pending shell and then swap into an error shell if resolution fails.":"Recipe: show an inline error with a retry button that retries the same route."}),e.jsxs(s,{variant:"body2",sx:{opacity:.68,mt:.75},children:["Transition state: ",_?p?"showing loader":"waiting below threshold":"idle"]})]}),e.jsxs(l,{sx:{position:"relative",minHeight:320,borderRadius:2,overflow:"hidden",border:"1px solid",borderColor:"divider",backgroundColor:"background.default"},children:[e.jsxs(l,{sx:{minHeight:320},children:[m,g&&n!=="swap"&&I(g,n==="retry"?()=>void u("/reports",!1):void 0)]}),H&&e.jsx(l,{sx:{position:"absolute",inset:0,display:"grid",placeItems:"center",bgcolor:"rgba(12,14,18,0.32)",backdropFilter:"blur(6px)"},children:e.jsxs(h,{sx:{px:2,py:1.5,borderRadius:2},children:[e.jsx(s,{sx:{fontWeight:700},children:"Resolving route..."}),e.jsx(s,{variant:"body2",sx:{opacity:.78},children:"The transition is still in flight."})]})})]})]})})}function F(){return e.jsx(v,{mode:"keep",title:"Recipe 1: Keep Previous Screen On Error",subtitle:"When the next route fails, preserve the current screen and surface the failure locally."})}function L(){return e.jsx(v,{mode:"swap",title:"Recipe 2: Swap To Error Shell",subtitle:"Use this when the route itself owns the error state and deserves a full-screen failure shell."})}function M(){return e.jsx(v,{mode:"retry",title:"Recipe 3: Retry Failed Route",subtitle:"Inline retry works well when the user should stay anchored to the current screen."})}F.__docgenInfo={description:"",methods:[],displayName:"KeepPreviousScreenOnErrorDemo"};L.__docgenInfo={description:"",methods:[],displayName:"SwapToErrorShellDemo"};M.__docgenInfo={description:"",methods:[],displayName:"RetryFailedRouteDemo"};function C(n){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...D(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(O,{title:"Router/Error Handling"}),`
`,e.jsx(r.h1,{id:"error-handling",children:"Error Handling"}),`
`,e.jsxs(r.p,{children:["Error handling in ",e.jsx(r.code,{children:"this.GUI"})," has three layers:"]}),`
`,e.jsxs(r.ol,{children:[`
`,e.jsx(r.li,{children:"the boundary where routes resolve"}),`
`,e.jsx(r.li,{children:"the experience of async transitions"}),`
`,e.jsx(r.li,{children:"the content layer where runtime expressions and actions can fail"}),`
`]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"layer-1-the-boundary-router",children:"Layer 1: The Boundary (Router)"}),`
`,e.jsx(r.p,{children:"The Router should absorb route failures without collapsing the whole app."}),`
`,e.jsx(r.p,{children:"That means documenting two things clearly:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"notFound"})," configuration"]}),`
`,e.jsx(r.li,{children:"async factory rejections"}),`
`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`const router = new Router({
  runtime,
  notFound: (context, error) => ({
    type: 'Page',
    props: {
      title: 'Route failed',
      subtitle: error instanceof Error ? error.message : 'Unknown route error',
    },
  }),
});
`})}),`
`,e.jsx(r.p,{children:"Use this when:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"a route cannot resolve"}),`
`,e.jsx(r.li,{children:"a handler throws"}),`
`,e.jsx(r.li,{children:"an async factory rejects"}),`
`]}),`
`,e.jsx(r.p,{children:"The important goal is continuity: the shell stays alive even when a specific route fails."}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"layer-2-the-experience-transitions",children:"Layer 2: The Experience (Transitions)"}),`
`,e.jsxs(r.p,{children:["This is where ",e.jsx(r.code,{children:"useDeferredPending"})," helps."]}),`
`,e.jsx(r.p,{children:"It lets you keep loading and error policy outside the Router core:"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`const { showLoader, run } = useDeferredPending({ threshold: 180 });

const handleNav = async (path: string) => {
  try {
    await run(() => router.navigate(path));
  } catch (error) {
    setRouteError(error);
  }
};
`})}),`
`,e.jsx(r.p,{children:"That gives you a clean separation:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Router resolves screens"}),`
`,e.jsx(r.li,{children:"the hook decides when loading becomes visible"}),`
`,e.jsx(r.li,{children:"your app decides how to render failure"}),`
`]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"recipe-retry-failed-route",children:"Recipe: Retry Failed Route"}),`
`,e.jsx(M,{}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"layer-3-the-content-runtime",children:"Layer 3: The Content (Runtime)"}),`
`,e.jsx(r.p,{children:"Inside the screen itself, failures can still happen in the runtime layer."}),`
`,e.jsx(r.p,{children:"Typical sources:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"$expr"})," cannot resolve"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"$action"})," throws"]}),`
`,e.jsx(r.li,{children:"an expression is blocked by security policy"}),`
`]}),`
`,e.jsx(r.p,{children:"Your goal here is graceful degradation, not silent collapse."}),`
`,e.jsx(r.p,{children:"Patterns to favor:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"show a fallback value for failed reads"}),`
`,e.jsx(r.li,{children:"surface action failures near the control that triggered them"}),`
`,e.jsx(r.li,{children:"keep screen structure intact even when one expression fails"}),`
`]}),`
`,e.jsx(l,{sx:{p:2,my:3,bgcolor:"action.hover",borderRadius:1.5,borderLeft:"4px solid",borderColor:"primary.main"},children:e.jsxs(r.p,{children:[e.jsx("strong",{children:"Pro Tip: Runtime failures should degrade locally"}),e.jsx("br",{}),`
If one `,e.jsx(r.code,{children:"$expr"})," fails, that node should degrade. It should not take down the entire route."]})}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"recipes",children:"Recipes"}),`
`,e.jsx(r.h3,{id:"keep-previous-screen-on-error",children:"Keep Previous Screen On Error"}),`
`,e.jsx(F,{}),`
`,e.jsx(r.p,{children:"Use this when:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"the old screen still provides orientation"}),`
`,e.jsx(r.li,{children:"the failed route is a contextual jump"}),`
`,e.jsx(r.li,{children:"you want the user to recover without losing place"}),`
`]}),`
`,e.jsx(r.h3,{id:"swap-to-error-shell",children:"Swap To Error Shell"}),`
`,e.jsx(L,{}),`
`,e.jsx(r.p,{children:"Use this when:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"the route owns the entire workspace"}),`
`,e.jsx(r.li,{children:"the failure belongs to the target route itself"}),`
`,e.jsx(r.li,{children:"you want a clear “this route failed” message"}),`
`]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"rules-of-thumb",children:"Rules Of Thumb"}),`
`,e.jsxs(r.ol,{children:[`
`,e.jsx(r.li,{children:"Handle route failures at the Router boundary"}),`
`,e.jsx(r.li,{children:"Handle loading and retry policy in transition logic"}),`
`,e.jsxs(r.li,{children:["Handle ",e.jsx(r.code,{children:"$expr"})," and ",e.jsx(r.code,{children:"$action"})," failures close to the failing node"]}),`
`,e.jsx(r.li,{children:"Keep the app shell alive whenever possible"}),`
`,e.jsx(r.li,{children:"Prefer retryable states over dead-end errors"}),`
`]})]})}function ae(n={}){const{wrapper:r}={...D(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(C,{...n})}):C(n)}export{ae as default};
