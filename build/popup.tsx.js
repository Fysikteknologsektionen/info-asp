!function(){"use strict";var e=window.wp.element,t=window.wp.components,n=window.wp.i18n;function o(){const[o,a]=(0,e.useState)(!1);return(0,e.useEffect)((()=>{const e=setTimeout((()=>{a(!0)}),1e4);return()=>clearTimeout(e)}),[]),o?(0,e.createElement)(t.Modal,{title:(0,n.__)("OBS: Change of location! Visit the asp of Spidera!","spidera-asp"),onRequestClose:()=>a(!1)},(0,e.createElement)("img",{className:"asp-img",src:php.imgUrl})):(0,e.createElement)(e.Fragment,null)}document.addEventListener("DOMContentLoaded",(()=>{const t=document.createElement("div");document.body.appendChild(t),(0,e.render)((0,e.createElement)(o,null),t)}))}();