(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();const h="modulepreload",g=function(n,s){return new URL(n,s).href},f={},a=function(s,i,l){if(!i||i.length===0)return s();const t=document.getElementsByTagName("link");return Promise.all(i.map(e=>{if(e=g(e,l),e in f)return;f[e]=!0;const r=e.endsWith(".css"),m=r?'[rel="stylesheet"]':"";if(!!l)for(let c=t.length-1;c>=0;c--){const u=t[c];if(u.href===e&&(!r||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${m}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":h,r||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),r)return new Promise((c,u)=>{o.addEventListener("load",c),o.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>s())};a(()=>import("./needle-asap-21c1ea63.js"),["./needle-asap-21c1ea63.js","./three.module-1012b49f.js"],import.meta.url);globalThis["needle:dependencies:ready"]=a(()=>import("./register_types-4329296c.js"),["./register_types-4329296c.js","./needle-engine-993e38d0.js","./three.module-1012b49f.js"],import.meta.url);const d=new Array;globalThis["needle:codegen_files"]=d;d.push("assets/scene_Loading.glb?v=1720185893536");document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector("needle-engine");n&&n.getAttribute("src")===null&&(n.setAttribute("hash","1720185893536"),n.setAttribute("src",JSON.stringify(d)))});a(()=>import("./needle-engine-993e38d0.js"),["./needle-engine-993e38d0.js","./three.module-1012b49f.js"],import.meta.url);export{a as _};
