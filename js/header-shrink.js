function setbackground(){var e=new Image;e.src="https://i0.hdslb.com/bfs/album/3f7bb9b1d309dd645651ef9f5be79e5faedd44be.webp",e.onload=function(){document.getElementsByClassName("page-container")[0].style.backgroundImage="url("+this.src+")"}}KEEP.initHeaderShrink=()=>{KEEP.utils.headerShrink={headerDom:document.querySelector(".header-wrapper"),isHeaderShrink:!1,init(){this.headerHeight=this.headerDom.getBoundingClientRect().height},headerShrink(){const e=document.body.scrollTop||document.documentElement.scrollTop;!this.isHeaderShrink&&e>this.headerHeight?(this.isHeaderShrink=!0,document.body.classList.add("header-shrink")):this.isHeaderShrink&&e<=this.headerHeight&&(this.isHeaderShrink=!1,document.body.classList.remove("header-shrink"))},toggleHeaderDrawerShow(){const e=[document.querySelector(".window-mask"),document.querySelector(".menu-bar")];!0===KEEP.theme_config.pjax.enable&&e.push(...document.querySelectorAll(".header-drawer .drawer-menu-list .drawer-menu-item")),e.forEach((e=>{e.addEventListener("click",(()=>{document.body.classList.toggle("header-drawer-show")}))}))}},KEEP.utils.headerShrink.init(),KEEP.utils.headerShrink.headerShrink(),KEEP.utils.headerShrink.toggleHeaderDrawerShow()},setbackground();