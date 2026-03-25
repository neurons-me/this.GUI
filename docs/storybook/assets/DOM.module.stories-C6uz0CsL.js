import{j as M,r}from"./iframe-Gv_pzp9r.js";import{D as g}from"./DOM.module-C9E-Qejm.js";import"./preload-helper-Dp1pzeXC.js";import"./ModuleCard-DIRp83v_.js";import"./Paper-DKGZNe4W.js";import"./Paper-c6OH07YJ.js";import"./Stack-CmOwlAjN.js";import"./getThemeProps-DYFZ1z-_.js";import"./TextField-CHmyl2Rv.js";import"./TextField-DOP4wU3I.js";import"./useSlot-D1kER3fQ.js";import"./useForkRef-CiFZqN1G.js";import"./useFormControl-Dkqdy53R.js";import"./formControlState-Dq1zat_P.js";import"./List-DxflEBpX.js";import"./ListContext-D8enX45d.js";import"./Modal-BHQDBp6o.js";import"./Portal-CVgCaHkv.js";import"./useEventCallback-DUPPrZgp.js";import"./utils-ATb2s98j.js";import"./TransitionGroupContext-B7vnT7n3.js";import"./Menu-Db8HHNSE.js";import"./Grow-DdIhyzpX.js";import"./mergeSlotProps-DKoVgONX.js";import"./useControlled-yxWXzTXG.js";import"./createSvgIcon-BTE4pYIV.js";import"./isMuiElement-CpLkP_Sx.js";import"./MenuItem-C44Moz-F.js";import"./MenuItem-DsPTdOUs.js";import"./ButtonBase-C-flG3o_.js";import"./listItemIconClasses-DhWNu7rs.js";import"./listItemTextClasses-D4KZ7SY1.js";import"./dividerClasses-CZcDm_LW.js";import"./Button-B74mMyVl.js";import"./Icon-B_V_pleN.js";import"./Button-Dp-QCFB9.js";import"./CircularProgress-BlELbDdR.js";const p=`<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>this.DOM sample</title>
  </head>
  <body>
    <h1>Hello this.DOM</h1>
    <p class="note">Sample HTML for parsing.</p>
    <div class="card">
      <strong>Device:</strong> Suis-MacBook-Air.local
    </div>
  </body>
</html>`;function d(t){var s;if(typeof DOMParser>"u")return JSON.stringify({error:"DOMParser unavailable"},null,2);const o=new DOMParser().parseFromString(t,"text/html"),m=Array.from(o.querySelectorAll("h1, h2, h3")).map(e=>String(e.textContent||"").trim()),a=Array.from(o.querySelectorAll("p")).map(e=>String(e.textContent||"").trim()),u=Array.from(o.querySelectorAll("a[href]")).map(e=>({href:e.getAttribute("href"),text:String(e.textContent||"").trim()}));return JSON.stringify({title:o.title||null,headings:m,paragraphs:a,links:u,bodyText:String(((s=o.body)==null?void 0:s.textContent)||"").trim()},null,2)}function D(t){const[o,m]=r.useState(t.source),[a,u]=r.useState(t.fetchUrl||"https://example.com"),[s,e]=r.useState(t.htmlValue||""),[y,l]=r.useState(t.jsonValue||"{}"),[x,i]=r.useState(t.statusMessage||"Ready.");r.useEffect(()=>{m(t.source)},[t.source]);const O=r.useCallback(()=>{e(p),l(d(p)),i("Sample loaded.")},[]),b=r.useCallback(()=>{const n=String(s||"").trim();if(!n){l(JSON.stringify({error:"HTML input is empty."},null,2)),i("HTML input is empty.");return}l(d(n)),i("Parsed HTML.")},[s]),A=r.useCallback(()=>{const n=String(a||"").trim();if(!n){i("URL is empty.");return}e(p),l(JSON.stringify({source:n,parsed:JSON.parse(d(p))},null,2)),i(`Fetched and parsed ${n}.`)},[a]);return M.jsx(g,{...t,source:o,onSourceChange:m,fetchUrl:a,onFetchUrlChange:u,htmlValue:s,onHtmlChange:e,jsonValue:y,statusMessage:x,onLoadSample:O,onParseHtml:b,onFetchAndParse:A})}const mt={title:"All.This/DOM/Workbench",component:g,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"DOM package interface example based on the runtime page: source control, URL input, HTML input, and JSON output."}}},render:t=>M.jsx(D,{...t})},c={args:{source:"local",state:"on",assetUrl:"./npm/dist/dom.umd.js",version:"1.0.98",fetchUrl:"https://example.com",statusMessage:"Ready."}};var h,S,f;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    source: 'local',
    state: 'on',
    assetUrl: './npm/dist/dom.umd.js',
    version: '1.0.98',
    fetchUrl: 'https://example.com',
    statusMessage: 'Ready.'
  }
}`,...(f=(S=c.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const lt=["RuntimeWorkbench"];export{c as RuntimeWorkbench,lt as __namedExportsOrder,mt as default};
