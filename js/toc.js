function initTOC(){KEEP.utils.navItems=document.querySelectorAll(".post-toc-wrap .post-toc li"),KEEP.utils.navItems.length>0?(KEEP.utils={...KEEP.utils,findActiveIndexByTOC(){if(!Array.isArray(KEEP.utils.sections))return;let e=KEEP.utils.sections.findIndex((e=>e&&e.getBoundingClientRect().top-20>0));-1===e?e=KEEP.utils.sections.length-1:e>0&&e--,this.activateNavByIndex(e)},registerSidebarTOC(){KEEP.utils.sections=[...document.querySelectorAll(".post-toc li a.nav-link")].map((e=>{const t=document.getElementById(decodeURI(e.getAttribute("href")).replace("#",""));return e.addEventListener("click",(e=>{e.preventDefault();const i=t.getBoundingClientRect().top+window.scrollY;window.anime({targets:document.scrollingElement,duration:500,easing:"linear",scrollTop:i-10,complete:function(){setTimeout((()=>{KEEP.utils.pageTop_dom.classList.add("hide")}),100)}})})),t}))},activateNavByIndex(e){const t=document.querySelectorAll(".post-toc li a.nav-link")[e];if(!t||t.classList.contains("active-current"))return;document.querySelectorAll(".post-toc .active").forEach((e=>{e.classList.remove("active","active-current")})),t.classList.add("active","active-current");let i=t.parentNode;for(;!i.matches(".post-toc");)i.matches("li")&&i.classList.add("active"),i=i.parentNode;const n=document.querySelector(".post-toc-wrap");window.anime({targets:n,duration:200,easing:"linear",scrollTop:n.scrollTop-n.offsetHeight/2+t.getBoundingClientRect().top-n.getBoundingClientRect().top})},showPageAsideWhenHasTOC(){const e=()=>{const e=KEEP.getStyleStatus(),t="isOpenPageAside";e&&e.hasOwnProperty(t)?KEEP.utils.leftSideToggle.pageAsideHandleOfTOC(e[t]):KEEP.utils.leftSideToggle.pageAsideHandleOfTOC(!0)},t="init_open";KEEP.theme_config.toc.hasOwnProperty(t)?KEEP.theme_config.toc.init_open?e():KEEP.utils.leftSideToggle.pageAsideHandleOfTOC(!1):e()}},KEEP.utils.showPageAsideWhenHasTOC(),KEEP.utils.registerSidebarTOC()):KEEP.utils.pageContainer_dom.removeChild(document.querySelector(".page-aside"))}!0===KEEP.theme_config.pjax.enable&&KEEP.utils?initTOC():window.addEventListener("DOMContentLoaded",initTOC);