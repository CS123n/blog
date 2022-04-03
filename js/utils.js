KEEP.initUtils=()=>{KEEP.utils={html_root_dom:document.querySelector("html"),pageContainer_dom:document.querySelector(".page-container"),pageTop_dom:document.querySelector(".page-main-content-top"),firstScreen_dom:document.querySelector(".first-screen-container"),scrollProgressBar_dom:document.querySelector(".scroll-progress-bar"),pjaxProgressBar_dom:document.querySelector(".pjax-progress-bar"),pjaxProgressIcon_dom:document.querySelector(".pjax-progress-icon"),back2TopButton_dom:document.querySelector(".tool-scroll-to-top"),innerHeight:window.innerHeight,pjaxProgressBarTimer:null,prevScrollValue:0,fontSizeLevel:0,isHasScrollProgressBar:!0===KEEP.theme_config.style.scroll.progress_bar.enable,isHasScrollPercent:!0===KEEP.theme_config.style.scroll.percent.enable,styleHandleWhenScroll(){const e=document.body.scrollTop||document.documentElement.scrollTop,t=document.body.scrollHeight||document.documentElement.scrollHeight,o=window.innerHeight||document.documentElement.clientHeight,s=Math.round(e/(t-o)*100);if(this.isHasScrollProgressBar){const r=(e/(t-o)*100).toFixed(3);this.scrollProgressBar_dom.style.visibility=0===s?"hidden":"visible",this.scrollProgressBar_dom.style.width=`${r}%`}if(this.isHasScrollPercent){const e=this.back2TopButton_dom.querySelector(".percent");0===s||void 0===s?this.back2TopButton_dom.classList.remove("show"):(this.back2TopButton_dom.classList.add("show"),e.innerHTML=s.toFixed(0))}e>this.prevScrollValue&&e>this.innerHeight?this.pageTop_dom.classList.add("hide"):this.pageTop_dom.classList.remove("hide"),this.prevScrollValue=e},registerWindowScroll(){window.addEventListener("scroll",(()=>{(this.isHasScrollPercent||this.isHasScrollProgressBar)&&this.styleHandleWhenScroll(),KEEP.theme_config.toc.enable&&KEEP.utils.hasOwnProperty("findActiveIndexByTOC")&&KEEP.utils.findActiveIndexByTOC(),KEEP.utils.headerShrink.headerShrink()}))},toggleShowToolsList(){document.querySelector(".tool-toggle-show").addEventListener("click",(()=>{document.querySelector(".side-tools-list").classList.toggle("show")}))},globalFontAdjust(){const e=document.defaultView.getComputedStyle(document.body).fontSize,t=parseFloat(e),o=e=>{this.html_root_dom.style.fontSize=t*(1+.05*e)+"px",KEEP.styleStatus.fontSizeLevel=e,KEEP.setStyleStatus()};(()=>{const e=KEEP.getStyleStatus();e&&(this.fontSizeLevel=e.fontSizeLevel,o(this.fontSizeLevel))})(),document.querySelector(".tool-font-adjust-plus").addEventListener("click",(()=>{5!==this.fontSizeLevel&&(this.fontSizeLevel++,o(this.fontSizeLevel))})),document.querySelector(".tool-font-adjust-minus").addEventListener("click",(()=>{this.fontSizeLevel<=0||(this.fontSizeLevel--,o(this.fontSizeLevel))}))},contentAreaWidthAdjust(){const e=document.querySelector(".tool-expand-width"),t=document.querySelector(".header-content"),o=document.querySelector(".main-content"),s=e.querySelector("i"),r=KEEP.theme_config.style.content_max_width||"1000px";let i=r,n=!1;!0===KEEP.theme_config.style.first_screen.enable&&"/"===window.location.pathname&&(i=1.2*parseInt(r)+"px");const l=e=>{KEEP.styleStatus.isExpandPageWidth=e,KEEP.setStyleStatus(),e?(s.classList.remove("fa-arrows-alt-h"),s.classList.add("fa-compress-arrows-alt"),t.style.maxWidth="90%",o.style.maxWidth="90%"):(s.classList.remove("fa-compress-arrows-alt"),s.classList.add("fa-arrows-alt-h"),t.style.maxWidth=i,o.style.maxWidth=r)};(()=>{const e=KEEP.getStyleStatus();e&&(n=e.isExpandPageWidth,l(n))})(),e.addEventListener("click",(()=>{n=!n,l(n)}))},goComment(){this.goComment_dom=document.querySelector(".go-comment"),this.goComment_dom&&this.goComment_dom.addEventListener("click",(()=>{document.querySelector("#comment-anchor").scrollIntoView()}))},getElementHeight(e){const t=document.querySelector(e);return t?t.getBoundingClientRect().height:0},initFirstScreenHeight(){this.firstScreen_dom&&(this.firstScreen_dom.style.height=this.innerHeight+"px")},initPageHeightHandle(){if(this.firstScreen_dom)return;const e=this.getElementHeight(".page-main-content-top")+this.getElementHeight(".page-main-content-middle")+this.getElementHeight(".page-main-content-bottom"),t=window.innerHeight,o=document.querySelector(".page-main-content-bottom");if(e<t){const s=Math.floor(t-e);s>0&&(o.style.marginTop=s-2+"px")}},imageViewer(){let e=!1;const t=(e,t)=>{document.body.style.overflow=t?"hidden":"auto",t?e.classList.add("active"):e.classList.remove("active")},o=document.querySelector(".image-viewer-container"),s=document.querySelector(".image-viewer-container img");o&&o.addEventListener("click",(()=>{e=!1,t(o,e)}));const r=document.querySelectorAll(".markdown-body img");r.length?r.forEach((r=>{r.addEventListener("click",(()=>{e=!0,t(o,e),s.setAttribute("src",r.getAttribute("src"))}))})):this.pageContainer_dom.removeChild(o)},setHowLongAgoLanguage:(e,t)=>t.replace(/%s/g,e),getHowLongAgo(e){const t=KEEP.language_ago,o=Math.floor(e/2592e3/12),s=Math.floor(e/2592e3),r=Math.floor(e/86400/7),i=Math.floor(e/86400),n=Math.floor(e/3600%24),l=Math.floor(e/60%60),a=Math.floor(e%60);return o>0?this.setHowLongAgoLanguage(o,t.year):s>0?this.setHowLongAgoLanguage(s,t.month):r>0?this.setHowLongAgoLanguage(r,t.week):i>0?this.setHowLongAgoLanguage(i,t.day):n>0?this.setHowLongAgoLanguage(n,t.hour):l>0?this.setHowLongAgoLanguage(l,t.minute):a>0?this.setHowLongAgoLanguage(a,t.second):void 0},setHowLongAgoInHome(){const e=document.querySelectorAll(".home-article-meta-info .home-article-date");e&&e.forEach((e=>{const t=Date.now(),o=new Date(e.dataset.date.split(" GMT")[0]).getTime();e.innerHTML=this.getHowLongAgo(Math.floor((t-o)/1e3))}))},pjaxProgressBarStart(){this.pjaxProgressBarTimer&&clearInterval(this.pjaxProgressBarTimer),this.isHasScrollProgressBar&&this.scrollProgressBar_dom.classList.add("hide"),this.pjaxProgressBar_dom.style.width="0",this.pjaxProgressIcon_dom.classList.add("show");let e=1;this.pjaxProgressBar_dom.classList.add("show"),this.pjaxProgressBar_dom.style.width=e+"%",this.pjaxProgressBarTimer=setInterval((()=>{e+=5,e>99&&(e=99),this.pjaxProgressBar_dom.style.width=e+"%"}),100)},pjaxProgressBarEnd(){this.pjaxProgressBarTimer&&clearInterval(this.pjaxProgressBarTimer),this.pjaxProgressBar_dom.style.width="100%";const e=setTimeout((()=>{this.pjaxProgressBar_dom.classList.remove("show"),this.pjaxProgressIcon_dom.classList.remove("show"),this.isHasScrollProgressBar&&this.scrollProgressBar_dom.classList.remove("hide");const t=setTimeout((()=>{this.pjaxProgressBar_dom.style.width="0",clearTimeout(e),clearTimeout(t)}),200)}),200)}},KEEP.utils.registerWindowScroll(),KEEP.utils.toggleShowToolsList(),KEEP.utils.globalFontAdjust(),KEEP.utils.contentAreaWidthAdjust(),KEEP.utils.goComment(),KEEP.utils.initPageHeightHandle(),KEEP.utils.initFirstScreenHeight(),KEEP.utils.imageViewer(),KEEP.utils.setHowLongAgoInHome()};