import{j as M,r}from"./iframe-6uH7LS29.js";import{D as g}from"./DOM.module-7YidknkU.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BR88_9Et.js";import"./Icon-pFsV1zMY.js";import"./Button-DVVrmC69.js";import"./ButtonBase-BEo9qRst.js";import"./TransitionGroupContext-BkV_2tYX.js";import"./useForkRef-DHyRY2fA.js";import"./useEventCallback-5BkAEj5O.js";import"./CircularProgress--WBlmhB1.js";import"./MenuItem-eP0JogHP.js";import"./MenuItem-CyEFQD34.js";import"./ListContext-g5RfciKr.js";import"./listItemIconClasses-Ba9ceW1H.js";import"./listItemTextClasses-DmqPxHNV.js";import"./dividerClasses-WFQetUts.js";import"./TextField-B83NW-dS.js";import"./TextField-9WM5GVZy.js";import"./useSlot-BNspzQsr.js";import"./useFormControl-DabV5jm2.js";import"./formControlState-Dq1zat_P.js";import"./List-fs1uovO4.js";import"./Modal-BKjM9TFc.js";import"./Portal-BSfwfkN1.js";import"./utils-TdGZNhF9.js";import"./Menu-pF_SJp2N.js";import"./Grow-Ceoj-WsW.js";import"./Paper-svpWbYa2.js";import"./mergeSlotProps-Di-ZIovM.js";import"./useControlled-B8TgfIWx.js";import"./createSvgIcon-BRGGSh50.js";import"./isMuiElement-DSu0bTEJ.js";import"./Stack-btRFVP2_.js";import"./getThemeProps-BBEUB_Bz.js";import"./ModuleCard-DbWjU56x.js";import"./Paper-DCCB32kc.js";const p=`<!doctype html>
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
