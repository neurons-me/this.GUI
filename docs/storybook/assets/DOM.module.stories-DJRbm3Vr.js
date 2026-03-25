import{j as M,r}from"./iframe-DzQ8qlS5.js";import{D as g}from"./DOM.module-DgZfEPlr.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-C4I8Jen7.js";import"./Icon-4frSiLka.js";import"./Button-BFu9Bpz3.js";import"./ButtonBase-B1YySNdu.js";import"./TransitionGroupContext-dQxgozz0.js";import"./useForkRef-DYkjEL9P.js";import"./CircularProgress-uyQXuKQe.js";import"./MenuItem-5BAXdFLv.js";import"./MenuItem-Ccglbbh2.js";import"./ListContext-M3Y7C2tn.js";import"./listItemIconClasses-Ay7ZmSTC.js";import"./listItemTextClasses-HDSnwLIK.js";import"./dividerClasses-DKcoqmU9.js";import"./TextField-JVULY_5t.js";import"./TextField-C7870KfA.js";import"./useSlot-h4wbdPQ6.js";import"./useFormControl-iwh5DSGC.js";import"./formControlState-Dq1zat_P.js";import"./List-dcCuc40T.js";import"./Modal-C_OOCtgn.js";import"./Portal-KTuVOcz1.js";import"./utils-DGQ64b3x.js";import"./Menu-D_R1YzcJ.js";import"./Grow-ns7P5pJg.js";import"./Paper-CEEYXBBa.js";import"./mergeSlotProps-B1WWk4e8.js";import"./useControlled-BLrQGYn1.js";import"./createSvgIcon-OxKoK4oj.js";import"./isMuiElement-D6cy73R7.js";import"./Stack-BWXDYBao.js";import"./getThemeProps-DZDwyubZ.js";import"./ModuleCard-BFfPrJVL.js";import"./Paper-BkoDfW8T.js";const p=`<!doctype html>
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
</html>`;function d(t){var s;if(typeof DOMParser>"u")return JSON.stringify({error:"DOMParser unavailable"},null,2);const o=new DOMParser().parseFromString(t,"text/html"),m=Array.from(o.querySelectorAll("h1, h2, h3")).map(e=>String(e.textContent||"").trim()),a=Array.from(o.querySelectorAll("p")).map(e=>String(e.textContent||"").trim()),u=Array.from(o.querySelectorAll("a[href]")).map(e=>({href:e.getAttribute("href"),text:String(e.textContent||"").trim()}));return JSON.stringify({title:o.title||null,headings:m,paragraphs:a,links:u,bodyText:String(((s=o.body)==null?void 0:s.textContent)||"").trim()},null,2)}function D(t){const[o,m]=r.useState(t.source),[a,u]=r.useState(t.fetchUrl||"https://example.com"),[s,e]=r.useState(t.htmlValue||""),[y,l]=r.useState(t.jsonValue||"{}"),[x,i]=r.useState(t.statusMessage||"Ready.");r.useEffect(()=>{m(t.source)},[t.source]);const O=r.useCallback(()=>{e(p),l(d(p)),i("Sample loaded.")},[]),b=r.useCallback(()=>{const n=String(s||"").trim();if(!n){l(JSON.stringify({error:"HTML input is empty."},null,2)),i("HTML input is empty.");return}l(d(n)),i("Parsed HTML.")},[s]),A=r.useCallback(()=>{const n=String(a||"").trim();if(!n){i("URL is empty.");return}e(p),l(JSON.stringify({source:n,parsed:JSON.parse(d(p))},null,2)),i(`Fetched and parsed ${n}.`)},[a]);return M.jsx(g,{...t,source:o,onSourceChange:m,fetchUrl:a,onFetchUrlChange:u,htmlValue:s,onHtmlChange:e,jsonValue:y,statusMessage:x,onLoadSample:O,onParseHtml:b,onFetchAndParse:A})}const it={title:"All.This/DOM/Workbench",component:g,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"DOM package interface example based on the runtime page: source control, URL input, HTML input, and JSON output."}}},render:t=>M.jsx(D,{...t})},c={args:{source:"local",state:"on",assetUrl:"./npm/dist/dom.umd.js",version:"1.0.98",fetchUrl:"https://example.com",statusMessage:"Ready."}};var h,S,f;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    source: 'local',
    state: 'on',
    assetUrl: './npm/dist/dom.umd.js',
    version: '1.0.98',
    fetchUrl: 'https://example.com',
    statusMessage: 'Ready.'
  }
}`,...(f=(S=c.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const mt=["RuntimeWorkbench"];export{c as RuntimeWorkbench,mt as __namedExportsOrder,it as default};
