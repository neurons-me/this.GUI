var Pt=Object.defineProperty;var Vt=(n,t,e)=>t in n?Pt(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var ot=(n,t,e)=>Vt(n,typeof t!="symbol"?t+"":t,e);import{r as l,b1 as Bt,am as H,j as N,ak as at,aD as Q}from"./iframe-pzPFiMX_.js";import{c as y}from"./clsx-B-dksMZM.js";import{g as lt,a as St}from"./generateUtilityClasses-CoM_PQv9.js";import{_ as Dt,T as it,a as wt,u as Lt}from"./TransitionGroupContext-BTo24QG4.js";import{s as Z,c as jt}from"./styled-Ddslrojq.js";import{_ as kt}from"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import{u as st}from"./useForkRef-XcfTKrEz.js";import{u as _}from"./useEventCallback-IANQAffG.js";import{i as rt}from"./isFocusVisible-B8k4qzLc.js";function vt(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function tt(n,t){var e=function(i){return t&&l.isValidElement(i)?t(i):i},a=Object.create(null);return n&&l.Children.map(n,function(o){return o}).forEach(function(o){a[o.key]=e(o)}),a}function Nt(n,t){n=n||{},t=t||{};function e(d){return d in t?t[d]:n[d]}var a=Object.create(null),o=[];for(var i in n)i in t?o.length&&(a[i]=o,o=[]):o.push(i);var s,p={};for(var u in t){if(a[u])for(s=0;s<a[u].length;s++){var f=a[u][s];p[a[u][s]]=e(f)}p[u]=e(u)}for(s=0;s<o.length;s++)p[o[s]]=e(o[s]);return p}function v(n,t,e){return e[t]!=null?e[t]:n.props[t]}function $t(n,t){return tt(n.children,function(e){return l.cloneElement(e,{onExited:t.bind(null,e),in:!0,appear:v(e,"appear",n),enter:v(e,"enter",n),exit:v(e,"exit",n)})})}function Ft(n,t,e){var a=tt(n.children),o=Nt(t,a);return Object.keys(o).forEach(function(i){var s=o[i];if(l.isValidElement(s)){var p=i in t,u=i in a,f=t[i],d=l.isValidElement(f)&&!f.props.in;u&&(!p||d)?o[i]=l.cloneElement(s,{onExited:e.bind(null,s),in:!0,exit:v(s,"exit",n),enter:v(s,"enter",n)}):!u&&p&&!d?o[i]=l.cloneElement(s,{in:!1}):u&&p&&l.isValidElement(f)&&(o[i]=l.cloneElement(s,{onExited:e.bind(null,s),in:f.props.in,exit:v(s,"exit",n),enter:v(s,"enter",n)}))}}),o}var It=Object.values||function(n){return Object.keys(n).map(function(t){return n[t]})},Ut={component:"div",childFactory:function(t){return t}},et=(function(n){Dt(t,n);function t(a,o){var i;i=n.call(this,a,o)||this;var s=i.handleExited.bind(vt(i));return i.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},i}var e=t.prototype;return e.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},e.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(o,i){var s=i.children,p=i.handleExited,u=i.firstRender;return{children:u?$t(o,p):Ft(o,s,p),firstRender:!1}},e.handleExited=function(o,i){var s=tt(this.props.children);o.key in s||(o.props.onExited&&o.props.onExited(i),this.mounted&&this.setState(function(p){var u=Bt({},p.children);return delete u[o.key],{children:u}}))},e.render=function(){var o=this.props,i=o.component,s=o.childFactory,p=kt(o,["component","childFactory"]),u=this.state.contextValue,f=It(this.state.children).map(s);return delete p.appear,delete p.enter,delete p.exit,i===null?H.createElement(it.Provider,{value:u},f):H.createElement(it.Provider,{value:u},H.createElement(i,p,f))},t})(H.Component);et.propTypes={};et.defaultProps=Ut;class G{constructor(){ot(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new G}static use(){const t=wt(G.create).current,[e,a]=l.useState(!1);return t.shouldMount=e,t.setShouldMount=a,l.useEffect(t.mountEffect,[e]),t}mount(){return this.mounted||(this.mounted=Ot(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...t){this.mount().then(()=>{var e;return(e=this.ref.current)==null?void 0:e.start(...t)})}stop(...t){this.mount().then(()=>{var e;return(e=this.ref.current)==null?void 0:e.stop(...t)})}pulsate(...t){this.mount().then(()=>{var e;return(e=this.ref.current)==null?void 0:e.pulsate(...t)})}}function zt(){return G.use()}function Ot(){let n,t;const e=new Promise((a,o)=>{n=a,t=o});return e.resolve=n,e.reject=t,e}function At(n){const{className:t,classes:e,pulsate:a=!1,rippleX:o,rippleY:i,rippleSize:s,in:p,onExited:u,timeout:f}=n,[d,h]=l.useState(!1),M=y(t,e.ripple,e.rippleVisible,a&&e.ripplePulsate),V={width:s,height:s,top:-(s/2)+i,left:-(s/2)+o},g=y(e.child,d&&e.childLeaving,a&&e.childPulsate);return!p&&!d&&h(!0),l.useEffect(()=>{if(!p&&u!=null){const w=setTimeout(u,f);return()=>{clearTimeout(w)}}},[u,p,f]),N.jsx("span",{className:M,style:V,children:N.jsx("span",{className:g})})}const b=lt("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),J=550,Xt=80,Yt=Q`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,Kt=Q`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,Wt=Q`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,Ht=Z("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),_t=Z(At,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${b.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Yt};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:n})=>n.transitions.easing.easeInOut};
  }

  &.${b.ripplePulsate} {
    animation-duration: ${({theme:n})=>n.transitions.duration.shorter}ms;
  }

  & .${b.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${b.childLeaving} {
    opacity: 0;
    animation-name: ${Kt};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:n})=>n.transitions.easing.easeInOut};
  }

  & .${b.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Wt};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:n})=>n.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,Gt=l.forwardRef(function(t,e){const a=at({props:t,name:"MuiTouchRipple"}),{center:o=!1,classes:i={},className:s,...p}=a,[u,f]=l.useState([]),d=l.useRef(0),h=l.useRef(null);l.useEffect(()=>{h.current&&(h.current(),h.current=null)},[u]);const M=l.useRef(!1),V=Lt(),g=l.useRef(null),w=l.useRef(null),C=l.useCallback(c=>{const{pulsate:E,rippleX:R,rippleY:I,rippleSize:L,cb:U}=c;f(x=>[...x,N.jsx(_t,{classes:{ripple:y(i.ripple,b.ripple),rippleVisible:y(i.rippleVisible,b.rippleVisible),ripplePulsate:y(i.ripplePulsate,b.ripplePulsate),child:y(i.child,b.child),childLeaving:y(i.childLeaving,b.childLeaving),childPulsate:y(i.childPulsate,b.childPulsate)},timeout:J,pulsate:E,rippleX:R,rippleY:I,rippleSize:L},d.current)]),d.current+=1,h.current=U},[i]),$=l.useCallback((c={},E={},R=()=>{})=>{const{pulsate:I=!1,center:L=o||E.pulsate,fakeElement:U=!1}=E;if((c==null?void 0:c.type)==="mousedown"&&M.current){M.current=!1;return}(c==null?void 0:c.type)==="touchstart"&&(M.current=!0);const x=U?null:w.current,B=x?x.getBoundingClientRect():{width:0,height:0,left:0,top:0};let S,T,D;if(L||c===void 0||c.clientX===0&&c.clientY===0||!c.clientX&&!c.touches)S=Math.round(B.width/2),T=Math.round(B.height/2);else{const{clientX:z,clientY:j}=c.touches&&c.touches.length>0?c.touches[0]:c;S=Math.round(z-B.left),T=Math.round(j-B.top)}if(L)D=Math.sqrt((2*B.width**2+B.height**2)/3),D%2===0&&(D+=1);else{const z=Math.max(Math.abs((x?x.clientWidth:0)-S),S)*2+2,j=Math.max(Math.abs((x?x.clientHeight:0)-T),T)*2+2;D=Math.sqrt(z**2+j**2)}c!=null&&c.touches?g.current===null&&(g.current=()=>{C({pulsate:I,rippleX:S,rippleY:T,rippleSize:D,cb:R})},V.start(Xt,()=>{g.current&&(g.current(),g.current=null)})):C({pulsate:I,rippleX:S,rippleY:T,rippleSize:D,cb:R})},[o,C,V]),Y=l.useCallback(()=>{$({},{pulsate:!0})},[$]),F=l.useCallback((c,E)=>{if(V.clear(),(c==null?void 0:c.type)==="touchend"&&g.current){g.current(),g.current=null,V.start(0,()=>{F(c,E)});return}g.current=null,f(R=>R.length>0?R.slice(1):R),h.current=E},[V]);return l.useImperativeHandle(e,()=>({pulsate:Y,start:$,stop:F}),[Y,$,F]),N.jsx(Ht,{className:y(b.root,i.root,s),ref:w,...p,children:N.jsx(et,{component:null,exit:!0,children:u})})});function qt(n){return St("MuiButtonBase",n)}const Jt=lt("MuiButtonBase",["root","disabled","focusVisible"]),Qt=n=>{const{disabled:t,focusVisible:e,focusVisibleClassName:a,classes:o}=n,s=jt({root:["root",t&&"disabled",e&&"focusVisible"]},qt,o);return e&&a&&(s.root+=` ${a}`),s},Zt=Z("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(n,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Jt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),ce=l.forwardRef(function(t,e){const a=at({props:t,name:"MuiButtonBase"}),{action:o,centerRipple:i=!1,children:s,className:p,component:u="button",disabled:f=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:M=!1,focusVisibleClassName:V,LinkComponent:g="a",onBlur:w,onClick:C,onContextMenu:$,onDragLeave:Y,onFocus:F,onFocusVisible:c,onKeyDown:E,onKeyUp:R,onMouseDown:I,onMouseLeave:L,onMouseUp:U,onTouchEnd:x,onTouchMove:B,onTouchStart:S,tabIndex:T=0,TouchRippleProps:D,touchRippleRef:z,type:j,...O}=a,A=l.useRef(null),m=zt(),ut=st(m.ref,z),[k,K]=l.useState(!1);f&&k&&K(!1),l.useImperativeHandle(o,()=>({focusVisible:()=>{K(!0),A.current.focus()}}),[]);const ct=m.shouldMount&&!d&&!f;l.useEffect(()=>{k&&M&&!d&&m.pulsate()},[d,M,k,m]);const pt=P(m,"start",I,h),ft=P(m,"stop",$,h),dt=P(m,"stop",Y,h),ht=P(m,"stop",U,h),mt=P(m,"stop",r=>{k&&r.preventDefault(),L&&L(r)},h),gt=P(m,"start",S,h),bt=P(m,"stop",x,h),Mt=P(m,"stop",B,h),Rt=P(m,"stop",r=>{rt(r.target)||K(!1),w&&w(r)},!1),Et=_(r=>{A.current||(A.current=r.currentTarget),rt(r.target)&&(K(!0),c&&c(r)),F&&F(r)}),q=()=>{const r=A.current;return u&&u!=="button"&&!(r.tagName==="A"&&r.href)},xt=_(r=>{M&&!r.repeat&&k&&r.key===" "&&m.stop(r,()=>{m.start(r)}),r.target===r.currentTarget&&q()&&r.key===" "&&r.preventDefault(),E&&E(r),r.target===r.currentTarget&&q()&&r.key==="Enter"&&!f&&(r.preventDefault(),C&&C(r))}),yt=_(r=>{M&&r.key===" "&&k&&!r.defaultPrevented&&m.stop(r,()=>{m.pulsate(r)}),R&&R(r),C&&r.target===r.currentTarget&&q()&&r.key===" "&&!r.defaultPrevented&&C(r)});let W=u;W==="button"&&(O.href||O.to)&&(W=g);const X={};W==="button"?(X.type=j===void 0?"button":j,X.disabled=f):(!O.href&&!O.to&&(X.role="button"),f&&(X["aria-disabled"]=f));const Ct=st(e,A),nt={...a,centerRipple:i,component:u,disabled:f,disableRipple:d,disableTouchRipple:h,focusRipple:M,tabIndex:T,focusVisible:k},Tt=Qt(nt);return N.jsxs(Zt,{as:W,className:y(Tt.root,p),ownerState:nt,onBlur:Rt,onClick:C,onContextMenu:ft,onFocus:Et,onKeyDown:xt,onKeyUp:yt,onMouseDown:pt,onMouseLeave:mt,onMouseUp:ht,onDragLeave:dt,onTouchEnd:bt,onTouchMove:Mt,onTouchStart:gt,ref:Ct,tabIndex:f?-1:T,type:j,...X,...O,children:[s,ct?N.jsx(Gt,{ref:ut,center:i,...D}):null]})});function P(n,t,e,a=!1){return _(o=>(e&&e(o),a||n[t](o),!0))}export{ce as B};
