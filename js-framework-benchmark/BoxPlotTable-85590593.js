import{r as x,j as e,S as u}from"./index-58a3e256.js";import{P as m}from"./plotly-59f9faa2.js";const j=({traces:s})=>{const t=x.useRef(null);return x.useEffect(()=>{const n=s.map(l=>({type:"box",y:l.values,boxpoints:!1,jitter:.5,name:l.framework,boxmean:"sd"})),a={showlegend:!1,margin:{l:40,r:0,b:120,t:0,pad:0}};m.newPlot(t.current,n,a,{staticPlot:!0,editable:!1})},[s]),e.jsx("div",{ref:t,style:{height:"100%",width:"100%"}})},b=({frameworks:s,benchmark:t,results:n,currentSortKey:a,sortBy:l,cpuDurationMode:i})=>{const o=r=>{var d;return((d=n(t,r))==null?void 0:d.results[i].values)??[]},c=r=>{r.preventDefault(),l(t.id)},h=s.map(r=>({framework:r.name,values:o(r)}));return e.jsxs("tr",{style:{height:400},children:[e.jsxs("th",{className:"benchname",children:[e.jsx("button",{className:`button button__text ${a===t.id?"sort-key":""}`,onClick:c,"aria-label":"Sort by benchmark results (from best to worst)",children:t.label}),e.jsx("div",{className:"rowCount",children:t.description})]}),e.jsx("td",{children:e.jsx(j,{traces:h})})]},t.id)},f=({frameworks:s,benchmarks:t,results:n,currentSortKey:a,sortBy:l,cpuDurationMode:i})=>e.jsx(e.Fragment,{children:t.map(o=>e.jsx(b,{frameworks:s,benchmark:o,results:n,currentSortKey:a,sortBy:l,cpuDurationMode:i},o.id))}),N=({frameworks:s,benchmarks:t,results:n,currentSortKey:a,sortBy:l,cpuDurationMode:i})=>{const o=c=>{c.preventDefault(),l(u)};return e.jsxs("div",{className:"results",children:[e.jsx("h3",{children:"Duration in milliseconds"}),e.jsx("div",{className:"results__table-container",children:e.jsxs("table",{className:"results__table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"benchname",children:e.jsx("button",{className:`button button__text ${a===u?"sort-key":""}`,"aria-label":"Sort frameworks in ascending order (asc)",onClick:o,children:"Name"})}),e.jsx("th",{style:{width:s.length*70+100}})]})}),e.jsx("tbody",{children:e.jsx(f,{results:n,frameworks:s,benchmarks:t,currentSortKey:a,sortBy:l,cpuDurationMode:i})})]})})]})};export{N as default};
