"use strict";(globalThis.webpackChunkwebdriver_ts_results=globalThis.webpackChunkwebdriver_ts_results||[]).push([[342],{681:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var n=r(294),a=r(166),l=r(958),u=function(e){var t=e.traces,r=(0,n.useRef)(null);return(0,n.useEffect)((function(){var e=t.map((function(e){return{type:"box",y:e.values,boxpoints:!1,jitter:.5,name:e.framework,boxmean:"sd"}}));l.newPlot(r.current,e,{showlegend:!1,margin:{l:40,r:0,b:120,t:0,pad:0}},{staticPlot:!0,editable:!1})}),[t]),n.createElement("div",{ref:r,style:{height:"100%",width:"100%"}})},o=function(e){var t=e.frameworks,r=e.benchmark,a=e.results,l=e.currentSortKey,o=e.sortBy,s=e.cpuDurationMode,c=function(e){var t,n;return null!==(n=null===(t=a(r,e))||void 0===t?void 0:t.results[s])&&void 0!==n?n:[]};return n.createElement("tr",{key:r.id,style:{height:400}},n.createElement("th",{className:"benchname"},n.createElement("button",{className:l===r.id?"sortKey textButton":"textButton",onClick:function(e){e.preventDefault(),o(r.id)}},r.label),n.createElement("div",{className:"rowCount"},r.description)),n.createElement("td",null,n.createElement(u,{traces:t.map((function(e){return{framework:e.name,values:c(e)}}))})))},s=function(e){var t=e.frameworks,r=e.benchmarks,a=e.results,l=e.currentSortKey,u=e.sortBy,s=e.cpuDurationMode;return n.createElement(n.Fragment,null,r.map((function(e){return n.createElement(o,{frameworks:t,benchmark:e,results:a,currentSortKey:l,sortBy:u,cpuDurationMode:s})})))};const c=function(e){var t=e.frameworks,r=e.benchmarks,l=e.results,u=e.currentSortKey,o=e.sortBy,c=e.cpuDurationMode;return 0===r.length?null:n.createElement("div",null,n.createElement("h3",null,"Duration in milliseconds"),n.createElement("table",{className:"results"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{className:"benchname"},n.createElement("button",{className:u===a.oP?"sortKey textButton":"textButton",onClick:function(e){e.preventDefault(),o(a.oP)}},"Name")),n.createElement("th",{style:{width:70*t.length+100}}))),n.createElement("tbody",null,n.createElement(s,{results:l,frameworks:t,benchmarks:r,currentSortKey:u,sortBy:o,cpuDurationMode:c}))))}}}]);