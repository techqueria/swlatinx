/*! no_rails_asset_compression */

webpackJsonp([0],{2042:function(){!function(t,e,n,o){"use strict"
function i(t){var e=t.currentTarget,o=t.data?t.data.options:{},i=t.data?t.data.items:[],s="",a=0
t.preventDefault()
t.stopPropagation()
n(e).attr("data-fancybox")&&(s=n(e).attr("data-fancybox"))
if(s){i=i.length?i.filter('[data-fancybox="'+s+'"]'):n("[data-fancybox="+s+"]")
a=i.index(e)}else i=[e]
n.fancybox.open(i,o,a)}if(!n)return o
var s={speed:330,loop:!0,opacity:"auto",margin:[44,0],gutter:30,infobar:!0,buttons:!0,slideShow:!0,fullScreen:!0,thumbs:!0,closeBtn:!0,smallBtn:"auto",image:{preload:"auto",protect:!1},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',preload:!0,scrolling:"no",css:{}},media:{youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"//www.youtube.com/embed/$4",thumb:"//img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com(?:\/)?(?:videos|video|channels|)\/([\d]+)(.*)?/i,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1,api:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$1"},metacafe:{matcher:/metacafe.com\/watch\/(\d+)\/(.*)?/,type:"iframe",url:"//www.metacafe.com/embed/$1/?ap=1"},dailymotion:{matcher:/dailymotion.com\/video\/(.*)\/?(.*)/,params:{additionalInfos:0,autoStart:1},type:"iframe",url:"//www.dailymotion.com/embed/video/$1"},vine:{matcher:/vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,type:"iframe",url:"//vine.co/v/$1/embed/simple"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},google_maps:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12])+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}}},baseClass:"",slideClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-controls"><div class="fancybox-infobar"><button data-fancybox-previous class="fancybox-button fancybox-button--left" title="Previous"></button><div class="fancybox-infobar__body"><span class="js-fancybox-index"></span>&nbsp;/&nbsp;<span class="js-fancybox-count"></span></div><button data-fancybox-next class="fancybox-button fancybox-button--right" title="Next"></button></div><div class="fancybox-buttons"><button data-fancybox-close class="fancybox-button fancybox-button--close" title="Close (Esc)"></button></div></div><div class="fancybox-slider-wrap"><div class="fancybox-slider"></div></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>The requested content cannot be loaded. <br /> Please try again later.<p></div>',closeTpl:'<button data-fancybox-close class="fancybox-close-small"></button>',parentEl:"body",touch:!0,keyboard:!0,focus:!0,closeClickOutside:!0,beforeLoad:n.noop,afterLoad:n.noop,beforeMove:n.noop,afterMove:n.noop,onComplete:n.noop,onInit:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop},a=n(t),r=n(e),c=0,l=function(t){return t&&t.hasOwnProperty&&t instanceof n},u=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(e){t.setTimeout(e,1e3/60)}}(),f=function(o){var i
"function"==typeof n&&o instanceof n&&(o=o[0])
i=o.getBoundingClientRect()
return i.bottom>0&&i.right>0&&i.left<(t.innerWidth||e.documentElement.clientWidth)&&i.top<(t.innerHeight||e.documentElement.clientHeight)},d=function(t,o,i){var a=this
a.opts=n.extend(!0,{index:i},s,o||{})
a.id=a.opts.id||++c
a.group=[]
a.currIndex=parseInt(a.opts.index,10)||0
a.prevIndex=null
a.prevPos=null
a.currPos=0
a.firstRun=null
a.createGroup(t)
if(a.group.length){a.$lastFocus=n(e.activeElement).blur()
a.slides={}
a.init(t)}}
n.extend(d.prototype,{init:function(){var t,e,o=this,i=!1
o.scrollTop=r.scrollTop()
o.scrollLeft=r.scrollLeft()
if(!n.fancybox.getInstance()){t=n("body").width()
n("html").addClass("fancybox-enabled")
if(n.fancybox.isTouch){n.each(o.group,function(t,e){if("image"!==e.type&&"iframe"!==e.type){i=!0
return!1}})
i&&n("body").css({position:"fixed",width:t,top:o.scrollTop*-1})}else{t=n("body").width()-t
t>1&&n('<style id="fancybox-noscroll" type="text/css">').html(".compensate-for-scrollbar, .fancybox-enabled body { margin-right: "+t+"px; }").appendTo("head")}}e=n(o.opts.baseTpl).attr("id","fancybox-container-"+o.id).data("FancyBox",o).addClass(o.opts.baseClass).hide().prependTo(o.opts.parentEl)
o.$refs={container:e,bg:e.find(".fancybox-bg"),controls:e.find(".fancybox-controls"),buttons:e.find(".fancybox-buttons"),slider_wrap:e.find(".fancybox-slider-wrap"),slider:e.find(".fancybox-slider"),caption:e.find(".fancybox-caption")}
o.trigger("onInit")
o.activate()
o.current||o.jumpTo(o.currIndex)},createGroup:function(t){var e=this,i=n.makeArray(t)
n.each(i,function(t,i){var s,a,r,c,l={},u={},f=[]
if(n.isPlainObject(i)){l=i
u=i.opts||{}}else if("object"===n.type(i)&&n(i).length){s=n(i)
f=s.data()
u="options"in f?f.options:{}
u="object"===n.type(u)?u:{}
l.type="type"in f?f.type:u.type
l.src="src"in f?f.src:u.src||s.attr("href")
u.width="width"in f?f.width:u.width
u.height="height"in f?f.height:u.height
u.thumb="thumb"in f?f.thumb:u.thumb
u.selector="selector"in f?f.selector:u.selector
"srcset"in f&&(u.image={srcset:f.srcset})
u.$orig=s}else l={type:"html",content:i+""}
l.opts=n.extend(!0,{},e.opts,u)
a=l.type
r=l.src||""
if(!a){l.content?a="html":r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?a="image":r.match(/\.(pdf)((\?|#).*)?$/i)?a="pdf":"#"===r.charAt(0)&&(a="inline")
l.type=a}l.index=e.group.length
l.opts.$orig&&!l.opts.$orig.length&&delete l.opts.$orig
!l.opts.$thumb&&l.opts.$orig&&(l.opts.$thumb=l.opts.$orig.find("img:first"))
l.opts.$thumb&&!l.opts.$thumb.length&&delete l.opts.$thumb
"function"===n.type(l.opts.caption)?l.opts.caption=l.opts.caption.apply(i,[e,l]):"caption"in f?l.opts.caption=f.caption:u.$orig&&(l.opts.caption=s.attr("title"))
l.opts.caption=l.opts.caption===o?"":l.opts.caption+""
if("ajax"===a){c=r.split(/\s+/,2)
if(c.length>1){l.src=c.shift()
l.opts.selector=c.shift()}}if("auto"==l.opts.smallBtn)if(n.inArray(a,["html","inline","ajax"])>-1){l.opts.buttons=!1
l.opts.smallBtn=!0}else l.opts.smallBtn=!1
if("pdf"===a){l.type="iframe"
l.opts.closeBtn=!0
l.opts.smallBtn=!1
l.opts.iframe.preload=!1}l.opts.modal&&n.extend(!0,l.opts,{infobar:0,buttons:0,keyboard:0,slideShow:0,fullScreen:0,closeClickOutside:0})
e.group.push(l)})},addEvents:function(){var e=this
e.removeEvents()
e.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation()
t.preventDefault()
e.close(t)}).on("click.fb-previous","[data-fancybox-previous]",function(t){t.stopPropagation()
t.preventDefault()
e.previous()}).on("click.fb-next","[data-fancybox-next]",function(t){t.stopPropagation()
t.preventDefault()
e.next()})
n(t).on("orientationchange.fb resize.fb",function(t){u(function(){if(t&&t.originalEvent&&"resize"===t.originalEvent.type)e.update()
else{e.$refs.slider_wrap.hide()
u(function(){e.$refs.slider_wrap.show()
e.update()})}})})
r.on("focusin.fb",function(t){var o=n.fancybox?n.fancybox.getInstance():null
if(o&&!n(t.target).hasClass("fancybox-container")&&!n.contains(o.$refs.container[0],t.target)){t.stopPropagation()
o.focus()
a.scrollTop(e.scrollTop).scrollLeft(e.scrollLeft)}})
r.on("keydown.fb",function(t){var o=e.current,i=t.keyCode||t.which
if(o&&o.opts.keyboard&&!n(t.target).is("input")&&!n(t.target).is("textarea"))if(8!==i&&27!==i)switch(i){case 37:case 38:t.preventDefault()
e.previous()
break
case 39:case 40:t.preventDefault()
e.next()
break
case 80:case 32:t.preventDefault()
if(e.SlideShow){t.preventDefault()
e.SlideShow.toggle()}break
case 70:if(e.FullScreen){t.preventDefault()
e.FullScreen.toggle()}break
case 71:if(e.Thumbs){t.preventDefault()
e.Thumbs.toggle()}}else{t.preventDefault()
e.close(t)}})},removeEvents:function(){a.off("scroll.fb resize.fb orientationchange.fb")
r.off("keydown.fb focusin.fb click.fb-close")
this.$refs.container.off("click.fb-close click.fb-previous click.fb-next")},previous:function(t){this.jumpTo(this.currIndex-1,t)},next:function(t){this.jumpTo(this.currIndex+1,t)},jumpTo:function(t,e){var n,i,s,a,r=this
n=r.firstRun=null===r.firstRun
i=s=t=parseInt(t,10)
a=!!r.current&&r.current.opts.loop
if(!r.isAnimating&&(i!=r.currIndex||n)){if(r.group.length>1&&a){i%=r.group.length
i=i<0?r.group.length+i:i
if(2==r.group.length)s=t-r.currIndex+r.currPos
else{s=i-r.currIndex+r.currPos
Math.abs(r.currPos-(s+r.group.length))<Math.abs(r.currPos-s)?s+=r.group.length:Math.abs(r.currPos-(s-r.group.length))<Math.abs(r.currPos-s)&&(s-=r.group.length)}}else if(!r.group[i]){r.update(!1,!1,e)
return}if(r.current){r.current.$slide.removeClass("fancybox-slide--current fancybox-slide--complete")
r.updateSlide(r.current,!0)}r.prevIndex=r.currIndex
r.prevPos=r.currPos
r.currIndex=i
r.currPos=s
r.current=r.createSlide(s)
if(r.group.length>1){(r.opts.loop||s-1>=0)&&r.createSlide(s-1);(r.opts.loop||s+1<r.group.length)&&r.createSlide(s+1)}r.current.isMoved=!1
r.current.isComplete=!1
e=parseInt(e===o?1.5*r.current.opts.speed:e,10)
r.trigger("beforeMove")
r.updateControls()
if(n){r.current.$slide.addClass("fancybox-slide--current")
r.$refs.container.show()
u(function(){r.$refs.bg.css("transition-duration",r.current.opts.speed+"ms")
r.$refs.container.addClass("fancybox-container--ready")})}r.update(!0,!1,n?0:e,function(){r.afterMove()})
r.loadSlide(r.current)
n&&r.current.$ghost||r.preload()}},createSlide:function(t){var e,o,i,s=this
o=t%s.group.length
o=o<0?s.group.length+o:o
if(!s.slides[t]&&s.group[o]){if(s.opts.loop&&s.group.length>2)for(var a in s.slides)if(s.slides[a].index===o){i=s.slides[a]
i.pos=t
s.slides[t]=i
delete s.slides[a]
s.updateSlide(i)
return i}e=n('<div class="fancybox-slide"></div>').appendTo(s.$refs.slider)
s.slides[t]=n.extend(!0,{},s.group[o],{pos:t,$slide:e,isMoved:!1,isLoaded:!1})}return s.slides[t]},zoomInOut:function(t,e,o){var i,s,a,r=this,c=r.current,l=c.$placeholder,u=c.opts.opacity,d=c.opts.$thumb,p=d?d.offset():0,h=c.$slide.offset()
if(!(l&&c.isMoved&&p&&f(d)))return!1
if("In"===t&&!r.firstRun)return!1
n.fancybox.stop(l)
r.isAnimating=!0
i={top:p.top-h.top+parseFloat(d.css("border-top-width")||0),left:p.left-h.left+parseFloat(d.css("border-left-width")||0),width:d.width(),height:d.height(),scaleX:1,scaleY:1}
"auto"==u&&(u=Math.abs(c.width/c.height-i.width/i.height)>.1)
if("In"===t){s=i
a=r.getFitPos(c)
a.scaleX=a.width/s.width
a.scaleY=a.height/s.height
if(u){s.opacity=.1
a.opacity=1}}else{s=n.fancybox.getTranslate(l)
a=i
if(c.$ghost){c.$ghost.show()
c.$image&&c.$image.remove()}s.scaleX=s.width/a.width
s.scaleY=s.height/a.height
s.width=a.width
s.height=a.height
u&&(a.opacity=0)}r.updateCursor(a.width,a.height)
delete a.width
delete a.height
n.fancybox.setTranslate(l,s)
l.show()
r.trigger("beforeZoom"+t)
l.css("transition","all "+e+"ms")
n.fancybox.setTranslate(l,a)
setTimeout(function(){var e
l.css("transition","none")
e=n.fancybox.getTranslate(l)
e.scaleX=1
e.scaleY=1
n.fancybox.setTranslate(l,e)
r.trigger("afterZoom"+t)
o.apply(r)
r.isAnimating=!1},e)
return!0},canPan:function(){var t=this,e=t.current,n=e.$placeholder,o=!1
if(n){o=t.getFitPos(e)
o=Math.abs(n.width()-o.width)>1||Math.abs(n.height()-o.height)>1}return o},isScaledDown:function(){var t=this,e=t.current,o=e.$placeholder,i=!1
if(o){i=n.fancybox.getTranslate(o)
i=i.width<e.width||i.height<e.height}return i},scaleToActual:function(t,e,i){var s,a,r,c,l,u=this,f=u.current,d=f.$placeholder,p=parseInt(f.$slide.width(),10),h=parseInt(f.$slide.height(),10),g=f.width,b=f.height
if(d){u.isAnimating=!0
t=t===o?.5*p:t
e=e===o?.5*h:e
s=n.fancybox.getTranslate(d)
c=g/s.width
l=b/s.height
a=.5*p-.5*g
r=.5*h-.5*b
if(g>p){a=s.left*c-(t*c-t)
a>0&&(a=0)
a<p-g&&(a=p-g)}if(b>h){r=s.top*l-(e*l-e)
r>0&&(r=0)
r<h-b&&(r=h-b)}u.updateCursor(g,b)
n.fancybox.animate(d,null,{top:r,left:a,scaleX:c,scaleY:l},i||f.opts.speed,function(){u.isAnimating=!1})}},scaleToFit:function(t){var e,o=this,i=o.current,s=i.$placeholder
if(s){o.isAnimating=!0
e=o.getFitPos(i)
o.updateCursor(e.width,e.height)
n.fancybox.animate(s,null,{top:e.top,left:e.left,scaleX:e.width/s.width(),scaleY:e.height/s.height()},t||i.opts.speed,function(){o.isAnimating=!1})}},getFitPos:function(t){var e,o,i,s,r,c,l,u=t.$placeholder||t.$content,f=t.width,d=t.height,p=t.opts.margin
if(!u||!u.length||!f&&!d)return!1
"number"===n.type(p)&&(p=[p,p])
2==p.length&&(p=[p[0],p[1],p[0],p[1]])
a.width()<800&&(p=[0,0,0,0])
e=parseInt(t.$slide.width(),10)-(p[1]+p[3])
o=parseInt(t.$slide.height(),10)-(p[0]+p[2])
i=Math.min(1,e/f,o/d)
c=Math.floor(i*f)
l=Math.floor(i*d)
s=Math.floor(.5*(o-l))+p[0]
r=Math.floor(.5*(e-c))+p[3]
return{top:s,left:r,width:c,height:l}},update:function(t,e,o,i){var s,a=this
if(a.isAnimating!==!0&&a.current){s=a.current.pos*Math.floor(a.current.$slide.width())*-1-a.current.pos*a.current.opts.gutter
o=parseInt(o,10)||0
n.fancybox.stop(a.$refs.slider)
t===!1?a.updateSlide(a.current,e):n.each(a.slides,function(t,n){a.updateSlide(n,e)})
if(o)n.fancybox.animate(a.$refs.slider,null,{top:0,left:s},o,function(){a.current.isMoved=!0
"function"===n.type(i)&&i.apply(a)})
else{n.fancybox.setTranslate(a.$refs.slider,{top:0,left:s})
a.current.isMoved=!0
"function"===n.type(i)&&i.apply(a)}}},updateSlide:function(t,e){var o,i=this,s=t.$placeholder
t=t||i.current
if(t&&!i.isClosing){o=t.pos*Math.floor(t.$slide.width())+t.pos*t.opts.gutter
if(o!==t.leftPos){n.fancybox.setTranslate(t.$slide,{top:0,left:o})
t.leftPos=o}if(e!==!1&&s){n.fancybox.setTranslate(s,i.getFitPos(t))
t.pos===i.currPos&&i.updateCursor()}t.$slide.trigger("refresh")
i.trigger("onUpdate",t)}},updateCursor:function(t,e){var n,i=this,s=i.$refs.container.removeClass("fancybox-controls--canzoomIn fancybox-controls--canzoomOut fancybox-controls--canGrab")
if(!i.isClosing&&i.opts.touch){n=t!==o&&e!==o?t<i.current.width&&e<i.current.height:i.isScaledDown()
n?s.addClass("fancybox-controls--canzoomIn"):i.group.length<2?s.addClass("fancybox-controls--canzoomOut"):s.addClass("fancybox-controls--canGrab")}},loadSlide:function(t){var e,o,i,s=this
if(t&&!t.isLoaded&&!t.isLoading){t.isLoading=!0
s.trigger("beforeLoad",t)
e=t.type
o=t.$slide
o.off("refresh").trigger("onReset").addClass("fancybox-slide--"+(e||"unknown")).addClass(t.opts.slideClass)
switch(e){case"image":s.setImage(t)
break
case"iframe":s.setIframe(t)
break
case"html":s.setContent(t,t.content)
break
case"inline":n(t.src).length?s.setContent(t,n(t.src)):s.setError(t)
break
case"ajax":s.showLoading(t)
i=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,n){"success"===n&&s.setContent(t,e)},error:function(e,n){e&&"abort"!==n&&s.setError(t)}}))
o.one("onReset",function(){i.abort()})
break
default:s.setError(t)}return!0}},setImage:function(e){var o,i,s,a,r=this,c=e.opts.image.srcset
if(!e.isLoaded||e.hasError){if(c){s=t.devicePixelRatio||1
a=t.innerWidth*s
i=c.split(",").map(function(t){var e={}
t.trim().split(/\s+/).forEach(function(t,n){var o=parseInt(t.substring(0,t.length-1),10)
if(0===n)return e.url=t
if(o){e.value=o
e.postfix=t[t.length-1]}})
return e})
i.sort(function(t,e){return t.value-e.value})
for(var l=0;l<i.length;l++){var u=i[l]
if("w"===u.postfix&&u.value>=a||"x"===u.postfix&&u.value>=s){o=u
break}}!o&&i.length&&(o=i[i.length-1])
if(o){e.src=o.url
if(e.width&&e.height&&"w"==o.postfix){e.height=e.width/e.height*o.value
e.width=o.value}}}e.$placeholder=n('<div class="fancybox-placeholder"></div>').hide().appendTo(e.$slide)
if(e.opts.preload!==!1&&e.opts.width&&e.opts.height&&(e.opts.thumb||e.opts.$thumb)){e.width=e.opts.width
e.height=e.opts.height
e.$ghost=n("<img />").one("load error",function(){if(!r.isClosing){n("<img/>")[0].src=e.src
r.revealImage(e,function(){r.setBigImage(e)
r.firstRun&&e.index===r.currIndex&&r.preload()})}}).addClass("fancybox-image").appendTo(e.$placeholder).attr("src",e.opts.thumb||e.opts.$thumb.attr("src"))}else r.setBigImage(e)}else r.afterLoad(e)},setBigImage:function(t){var e=this,o=n("<img />")
t.$image=o.one("error",function(){e.setError(t)}).one("load",function(){clearTimeout(t.timouts)
t.timouts=null
if(!e.isClosing){t.width=this.naturalWidth
t.height=this.naturalHeight
t.opts.image.srcset&&o.attr("sizes","100vw").attr("srcset",t.opts.image.srcset)
e.afterLoad(t)
t.$ghost&&(t.timouts=setTimeout(function(){t.$ghost.hide()},350))}}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$placeholder)
o[0].complete?o.trigger("load"):o[0].error?o.trigger("error"):t.timouts=setTimeout(function(){o[0].complete||t.hasError||e.showLoading(t)},150)
t.opts.image.protect&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$placeholder).on("contextmenu.fb",function(t){2==t.button&&t.preventDefault()
return!0})},revealImage:function(t,e){var o=this
e=e||n.noop
if("image"!==t.type||t.hasError||t.isRevealed===!0)e.apply(o)
else{t.isRevealed=!0
if(t.pos!==o.currPos||!o.zoomInOut("In",t.opts.speed,e)){t.$ghost&&!t.isLoaded&&o.updateSlide(t,!0)
t.pos===o.currPos?n.fancybox.animate(t.$placeholder,{opacity:0},{opacity:1},300,e):t.$placeholder.show()
e.apply(o)}}},setIframe:function(t){var e,i=this,s=t.opts.iframe,a=t.$slide
t.$content=n('<div class="fancybox-content"></div>').css(s.css).appendTo(a)
e=n(s.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",n.fancybox.isTouch?"auto":s.scrolling).appendTo(t.$content)
if(s.preload){t.$content.addClass("fancybox-tmp")
i.showLoading(t)
e.on("load.fb error.fb",function(){this.isReady=1
t.$slide.trigger("refresh")
i.afterLoad(t)})
a.on("refresh.fb",function(){var n,i,a,r,c,l=t.$content
if(1===e[0].isReady){try{n=e.contents()
i=n.find("body")}catch(t){}if(i&&i.length&&(s.css.width===o||s.css.height===o)){a=e[0].contentWindow.document.documentElement.scrollWidth
r=Math.ceil(i.outerWidth(!0)+(l.width()-a))
c=Math.ceil(i.outerHeight(!0))
l.css({width:s.css.width===o?r+(l.outerWidth()-l.innerWidth()):s.css.width,height:s.css.height===o?c+(l.outerHeight()-l.innerHeight()):s.css.height})}l.removeClass("fancybox-tmp")}})}else this.afterLoad(t)
e.attr("src",t.src)
t.opts.smallBtn&&t.$content.prepend(t.opts.closeTpl)
a.one("onReset",function(){try{n(this).find("iframe").hide().attr("src","//about:blank")}catch(t){}n(this).empty()
t.isLoaded=!1})},setContent:function(t,e){var o=this
if(!o.isClosing){o.hideLoading(t)
t.$slide.empty()
if(l(e)&&e.parent().length){e.data("placeholder")&&e.parents(".fancybox-slide").trigger("onReset")
e.data({placeholder:n("<div></div>").hide().insertAfter(e)}).css("display","inline-block")}else{if("string"===n.type(e)){e=n("<div>").append(e).contents()
3===e[0].nodeType&&(e=n("<div>").html(e))}t.opts.selector&&(e=n("<div>").html(e).find(t.opts.selector))}t.$slide.one("onReset",function(){var o=l(e)?e.data("placeholder"):0
if(o){e.hide().replaceAll(o)
e.data("placeholder",null)}if(!t.hasError){n(this).empty()
t.isLoaded=!1}})
t.$content=n(e).appendTo(t.$slide)
t.opts.smallBtn===!0&&t.$content.find(".fancybox-close-small").remove().end().eq(0).append(t.opts.closeTpl)
this.afterLoad(t)}},setError:function(t){t.hasError=!0
this.setContent(t,t.opts.errorTpl)},showLoading:function(t){var e=this
t=t||e.current
t&&!t.$spinner&&(t.$spinner=n(e.opts.spinnerTpl).appendTo(t.$slide))},hideLoading:function(t){var e=this
t=t||e.current
if(t&&t.$spinner){t.$spinner.remove()
delete t.$spinner}},afterMove:function(){var t=this,e=t.current,o={}
if(e){e.$slide.siblings().trigger("onReset")
n.each(t.slides,function(e,n){n.pos>=t.currPos-1&&n.pos<=t.currPos+1?o[n.pos]=n:n&&n.$slide.remove()})
t.slides=o
t.trigger("afterMove")
e.isLoaded&&t.complete()}},afterLoad:function(t){var e=this
if(!e.isClosing){t.isLoading=!1
t.isLoaded=!0
e.trigger("afterLoad",t)
e.hideLoading(t)
t.$ghost||e.updateSlide(t,!0)
t.index===e.currIndex&&t.isMoved?e.complete():t.$ghost||e.revealImage(t)}},complete:function(){var t=this,e=t.current
t.revealImage(e,function(){e.isComplete=!0
e.$slide.addClass("fancybox-slide--complete")
t.updateCursor()
t.trigger("onComplete")
e.opts.focus&&"image"!==e.type&&"iframe"!==e.type&&t.focus()})},preload:function(){var t,e,n=this
if(!(n.group.length<2)){t=n.slides[n.currPos+1]
e=n.slides[n.currPos-1]
t&&"image"===t.type&&n.loadSlide(t)
e&&"image"===e.type&&n.loadSlide(e)}},focus:function(){var t,e=this.current
t=e&&e.isComplete?e.$slide.find('button,:input,[tabindex],a:not(".disabled")').filter(":visible:first"):null
t&&t.length||(t=this.$refs.container)
t.focus()
this.$refs.slider_wrap.scrollLeft(0)
e&&e.$slide.scrollTop(0)},activate:function(){var t=this
n(".fancybox-container").each(function(){var e=n(this).data("FancyBox")
e&&e.uid!==t.uid&&!e.isClosing&&e.trigger("onDeactivate")})
if(t.current){t.$refs.container.index()>0&&t.$refs.container.prependTo(e.body)
t.updateControls()}t.trigger("onActivate")
t.addEvents()},close:function(t){var e=this,o=e.current,i=o.opts.speed,s=n.proxy(function(){e.cleanUp(t)},this)
if(e.isAnimating||e.isClosing)return!1
if(e.trigger("beforeClose",t)!==!1){e.isClosing=!0
o.timouts&&clearTimeout(o.timouts)
t!==!0&&n.fancybox.stop(e.$refs.slider)
e.$refs.container.removeClass("fancybox-container--active").addClass("fancybox-container--closing")
o.$slide.removeClass("fancybox-slide--complete").siblings().remove()
o.isMoved||o.$slide.css("overflow","visible")
e.removeEvents()
e.hideLoading(o)
e.hideControls()
e.updateCursor()
e.$refs.bg.css("transition-duration",i+"ms")
this.$refs.container.removeClass("fancybox-container--ready")
t===!0?setTimeout(s,i):e.zoomInOut("Out",i,s)||n.fancybox.animate(e.$refs.container,null,{opacity:0},i,"easeInSine",s)}else{n.fancybox.stop(e.$refs.slider)
u(function(){e.update(!0,!0,150)})}},cleanUp:function(t){var e,o=this
o.$refs.slider.children().trigger("onReset")
o.$refs.container.empty().remove()
o.trigger("afterClose",t)
o.current=null
e=n.fancybox.getInstance()
if(e)e.activate()
else{n("html").removeClass("fancybox-enabled")
n("body").removeAttr("style")
a.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft)
n("#fancybox-noscroll").remove()}o.$lastFocus&&o.$lastFocus.focus()},trigger:function(t,o){var i,s=Array.prototype.slice.call(arguments,1),a=this,r=o&&o.opts?o:a.current
r?s.unshift(r):r=a
s.unshift(a)
n.isFunction(r.opts[t])&&(i=r.opts[t].apply(r,s))
if(i===!1)return i
"afterClose"===t?n(e).trigger(t+".fb",s):a.$refs.container.trigger(t+".fb",s)},toggleControls:function(t){this.isHiddenControls?this.updateControls(t):this.hideControls()},hideControls:function(){this.isHiddenControls=!0
this.$refs.container.removeClass("fancybox-show-controls")
this.$refs.container.removeClass("fancybox-show-caption")},updateControls:function(t){var e=this,o=e.$refs.container,i=e.$refs.caption,s=e.current,a=s.index,r=s.opts,c=r.caption
if(!this.isHiddenControls||t===!0){this.isHiddenControls=!1
o.addClass("fancybox-show-controls").toggleClass("fancybox-show-infobar",!!r.infobar&&e.group.length>1).toggleClass("fancybox-show-buttons",!!r.buttons).toggleClass("fancybox-is-modal",!!r.modal)
n(".fancybox-button--left",o).toggleClass("fancybox-button--disabled",!r.loop&&a<=0)
n(".fancybox-button--right",o).toggleClass("fancybox-button--disabled",!r.loop&&a>=e.group.length-1)
n(".fancybox-button--play",o).toggle(!!(r.slideShow&&e.group.length>1))
n(".fancybox-button--close",o).toggle(!!r.closeBtn)
n(".js-fancybox-count",o).html(e.group.length)
n(".js-fancybox-index",o).html(a+1)
s.$slide.trigger("refresh")
i&&i.empty()
if(c&&c.length){i.html(c)
this.$refs.container.addClass("fancybox-show-caption ")
e.$caption=i}else this.$refs.container.removeClass("fancybox-show-caption")}}})
n.fancybox={version:"3.0.47",defaults:s,getInstance:function(t){var e=n('.fancybox-container:not(".fancybox-container--closing"):first').data("FancyBox"),o=Array.prototype.slice.call(arguments,1)
if(e instanceof d){"string"===n.type(t)?e[t].apply(e,o):"function"===n.type(t)&&t.apply(e,o)
return e}return!1},open:function(t,e,n){return new d(t,e,n)},close:function(t){var e=this.getInstance()
if(e){e.close()
t===!0&&this.close()}},isTouch:e.createTouch!==o&&/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),use3d:function(){var n=e.createElement("div")
return t.getComputedStyle(n).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<=11)}(),getTranslate:function(t){var e,n
if(!t||!t.length)return!1
e=t.get(0).getBoundingClientRect()
n=t.eq(0).css("transform")
if(n&&n.indexOf("matrix")!==-1){n=n.split("(")[1]
n=n.split(")")[0]
n=n.split(",")}else n=[]
if(n.length){n=n.length>10?[n[13],n[12],n[0],n[5]]:[n[5],n[4],n[0],n[3]]
n=n.map(parseFloat)}else n=[0,0,1,1]
return{top:n[0],left:n[1],scaleX:n[2],scaleY:n[3],opacity:parseFloat(t.css("opacity")),width:e.width,height:e.height}},setTranslate:function(t,e){var n="",i={}
if(t&&e){if(e.left!==o||e.top!==o){n=(e.left===o?t.position().top:e.left)+"px, "+(e.top===o?t.position().top:e.top)+"px"
n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"}e.scaleX!==o&&e.scaleY!==o&&(n=(n.length?n+" ":"")+"scale("+e.scaleX+", "+e.scaleY+")")
n.length&&(i.transform=n)
e.opacity!==o&&(i.opacity=e.opacity)
e.width!==o&&(i.width=e.width)
e.height!==o&&(i.height=e.height)
return t.css(i)}},easing:{easeOutCubic:function(t,e,n,o){return n*((t=t/o-1)*t*t+1)+e},easeInCubic:function(t,e,n,o){return n*(t/=o)*t*t+e},easeOutSine:function(t,e,n,o){return n*Math.sin(t/o*(Math.PI/2))+e},easeInSine:function(t,e,n,o){return-n*Math.cos(t/o*(Math.PI/2))+n+e}},stop:function(t){t.removeData("animateID")},animate:function(t,e,i,s,a,r){var c,l,f,d=this,p=null,h=0,g=function(){if(i.scaleX!==o&&i.scaleY!==o&&e&&e.width!==o&&e.height!==o){i.width=e.width*i.scaleX
i.height=e.height*i.scaleY
i.scaleX=1
i.scaleY=1}d.setTranslate(t,i)
r()},b=function(n){c=[]
l=0
if(t.length&&t.data("animateID")===f){n=n||Date.now()
p&&(l=n-p)
p=n
h+=l
if(h>=s)g()
else{for(var r in i)i.hasOwnProperty(r)&&e[r]!==o&&(e[r]==i[r]?c[r]=i[r]:c[r]=d.easing[a](h,e[r],i[r]-e[r],s))
d.setTranslate(t,c)
u(b)}}}
d.animateID=f=d.animateID===o?1:d.animateID+1
t.data("animateID",f)
if(r===o&&"function"==n.type(a)){r=a
a=o}a||(a="easeOutCubic")
r=r||n.noop
e?this.setTranslate(t,e):e=this.getTranslate(t)
if(s){t.show()
u(b)}else g()}}
n.fn.fancybox=function(t){this.off("click.fb-start").on("click.fb-start",{items:this,options:t||{}},i)
return this}
n(e).on("click.fb-start","[data-fancybox]",i)}(window,document,window.jQuery)
!function(t){"use strict"
var e=function(e,n,o){if(e){o=o||""
"object"===t.type(o)&&(o=t.param(o,!0))
t.each(n,function(t,n){e=e.replace("$"+t,n||"")})
o.length&&(e+=(e.indexOf("?")>0?"&":"?")+o)
return e}}
t(document).on("onInit.fb",function(n,o){t.each(o.group,function(n,o){var i,s,a,r,c,l,u=o.src||"",f=!1
if(!o.type){t.each(t.fancybox.defaults.media,function(n,d){s=u.match(d.matcher)
c={}
l=n
if(s){f=d.type
if(d.paramPlace&&s[d.paramPlace]){r=s[d.paramPlace]
"?"==r[0]&&(r=r.substring(1))
r=r.split("&")
for(var p=0;p<r.length;++p){var h=r[p].split("=",2)
2==h.length&&(c[h[0]]=decodeURIComponent(h[1].replace(/\+/g," ")))}}a=t.extend(!0,{},d.params,o.opts[n],c)
u="function"===t.type(d.url)?d.url.call(this,s,a,o):e(d.url,s,a)
i="function"===t.type(d.thumb)?d.thumb.call(this,s,a,o):e(d.thumb,s)
"vimeo"===l&&(u=u.replace("&%23","#"))
return!1}})
if(f){o.src=u
o.type=f
o.opts.thumb||o.opts.$thumb&&o.opts.$thumb.length||(o.opts.thumb=i)
if("iframe"===f){t.extend(!0,o.opts,{iframe:{preload:!1,scrolling:"no"},smallBtn:!1,closeBtn:!0,fullScreen:!1,slideShow:!1})
o.opts.slideClass+=" fancybox-slide--video"}}else o.type="iframe"}})})}(window.jQuery)
!function(t,e,n){"use strict"
var o=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(e){t.setTimeout(e,1e3/60)}}(),i=function(e){var n=[]
e=e.originalEvent||e||t.e
e=e.touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e]
for(var o in e)e[o].pageX?n.push({x:e[o].pageX,y:e[o].pageY}):e[o].clientX&&n.push({x:e[o].clientX,y:e[o].clientY})
return n},s=function(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},a=function(t){return t.is("a")||t.is("button")||t.is("input")||t.is("select")||t.is("textarea")||n.isFunction(t.get(0).onclick)},r=function(e){var n=t.getComputedStyle(e)["overflow-y"],o=t.getComputedStyle(e)["overflow-x"],i=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,s=("scroll"===o||"auto"===o)&&e.scrollWidth>e.clientWidth
return i||s},c=function(t){for(var e=!1;;){e=r(t.get(0))
if(e)break
t=t.parent()
if(!t.length||t.hasClass("fancybox-slider")||t.is("body"))break}return e},l=function(t){var e=this
e.instance=t
e.$wrap=t.$refs.slider_wrap
e.$slider=t.$refs.slider
e.$container=t.$refs.container
e.destroy()
e.$wrap.on("touchstart.fb mousedown.fb",n.proxy(e,"ontouchstart"))}
l.prototype.destroy=function(){this.$wrap.off("touchstart.fb mousedown.fb touchmove.fb mousemove.fb touchend.fb touchcancel.fb mouseup.fb mouseleave.fb")}
l.prototype.ontouchstart=function(e){var o=this,r=n(e.target),l=o.instance,u=l.current,f=u.$content||u.$placeholder
o.startPoints=i(e)
o.$target=r
o.$content=f
o.canvasWidth=Math.round(u.$slide[0].clientWidth)
o.canvasHeight=Math.round(u.$slide[0].clientHeight)
o.startEvent=e
if(e.originalEvent.clientX>o.canvasWidth+u.$slide.offset().left)return!0
if(!(a(r)||a(r.parent())||c(r))){if(!u.opts.touch){o.endPoints=o.startPoints
return o.ontap()}if(!e.originalEvent||2!=e.originalEvent.button){e.stopPropagation()
e.preventDefault()
if(u&&!o.instance.isAnimating&&!o.instance.isClosing&&!(!o.startPoints||o.startPoints.length>1&&!u.isMoved)){o.$wrap.off("touchmove.fb mousemove.fb",n.proxy(o,"ontouchmove"))
o.$wrap.off("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb",n.proxy(o,"ontouchend"))
o.$wrap.on("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb",n.proxy(o,"ontouchend"))
o.$wrap.on("touchmove.fb mousemove.fb",n.proxy(o,"ontouchmove"))
o.startTime=(new Date).getTime()
o.distanceX=o.distanceY=o.distance=0
o.canTap=!1
o.isPanning=!1
o.isSwiping=!1
o.isZooming=!1
o.sliderStartPos=n.fancybox.getTranslate(o.$slider)
o.contentStartPos=n.fancybox.getTranslate(o.$content)
o.contentLastPos=null
if(1===o.startPoints.length&&!o.isZooming){o.canTap=u.isMoved
if("image"===u.type&&(o.contentStartPos.width>o.canvasWidth+1||o.contentStartPos.height>o.canvasHeight+1)){n.fancybox.stop(o.$content)
o.isPanning=!0}else{n.fancybox.stop(o.$slider)
o.isSwiping=!0}o.$container.addClass("fancybox-controls--isGrabbing")}if(2===o.startPoints.length&&u.isMoved&&!u.hasError&&"image"===u.type&&(u.isLoaded||u.$ghost)){o.isZooming=!0
o.isSwiping=!1
o.isPanning=!1
n.fancybox.stop(o.$content)
o.centerPointStartX=.5*(o.startPoints[0].x+o.startPoints[1].x)-n(t).scrollLeft()
o.centerPointStartY=.5*(o.startPoints[0].y+o.startPoints[1].y)-n(t).scrollTop()
o.percentageOfImageAtPinchPointX=(o.centerPointStartX-o.contentStartPos.left)/o.contentStartPos.width
o.percentageOfImageAtPinchPointY=(o.centerPointStartY-o.contentStartPos.top)/o.contentStartPos.height
o.startDistanceBetweenFingers=s(o.startPoints[0],o.startPoints[1])}}}}}
l.prototype.ontouchmove=function(t){var e=this
t.preventDefault()
e.newPoints=i(t)
if(e.newPoints&&e.newPoints.length){e.distanceX=s(e.newPoints[0],e.startPoints[0],"x")
e.distanceY=s(e.newPoints[0],e.startPoints[0],"y")
e.distance=s(e.newPoints[0],e.startPoints[0])
e.distance>0&&(e.isSwiping?e.onSwipe():e.isPanning?e.onPan():e.isZooming&&e.onZoom())}}
l.prototype.onSwipe=function(){var e,i=this,s=i.isSwiping,a=i.sliderStartPos.left
if(s===!0){if(Math.abs(i.distance)>10){if(i.instance.group.length<2)i.isSwiping="y"
else if(!i.instance.current.isMoved||i.instance.opts.touch.vertical===!1||"auto"===i.instance.opts.touch.vertical&&n(t).width()>800)i.isSwiping="x"
else{e=Math.abs(180*Math.atan2(i.distanceY,i.distanceX)/Math.PI)
i.isSwiping=e>45&&e<135?"y":"x"}i.canTap=!1
i.instance.current.isMoved=!1
i.startPoints=i.newPoints}}else{"x"==s&&(!i.instance.current.opts.loop&&0===i.instance.current.index&&i.distanceX>0?a+=Math.pow(i.distanceX,.8):!i.instance.current.opts.loop&&i.instance.current.index===i.instance.group.length-1&&i.distanceX<0?a-=Math.pow(-i.distanceX,.8):a+=i.distanceX)
i.sliderLastPos={top:"x"==s?0:i.sliderStartPos.top+i.distanceY,left:a}
o(function(){n.fancybox.setTranslate(i.$slider,i.sliderLastPos)})}}
l.prototype.onPan=function(){var t,e,i,s=this
s.canTap=!1
t=s.contentStartPos.width>s.canvasWidth?s.contentStartPos.left+s.distanceX:s.contentStartPos.left
e=s.contentStartPos.top+s.distanceY
i=s.limitMovement(t,e,s.contentStartPos.width,s.contentStartPos.height)
i.scaleX=s.contentStartPos.scaleX
i.scaleY=s.contentStartPos.scaleY
s.contentLastPos=i
o(function(){n.fancybox.setTranslate(s.$content,s.contentLastPos)})}
l.prototype.limitMovement=function(t,e,n,o){var i,s,a,r,c=this,l=c.canvasWidth,u=c.canvasHeight,f=c.contentStartPos.left,d=c.contentStartPos.top,p=c.distanceX,h=c.distanceY
i=Math.max(0,.5*l-.5*n)
s=Math.max(0,.5*u-.5*o)
a=Math.min(l-n,.5*l-.5*n)
r=Math.min(u-o,.5*u-.5*o)
if(n>l){p>0&&t>i&&(t=i-1+Math.pow(-i+f+p,.8)||0)
p<0&&t<a&&(t=a+1-Math.pow(a-f-p,.8)||0)}if(o>u){h>0&&e>s&&(e=s-1+Math.pow(-s+d+h,.8)||0)
h<0&&e<r&&(e=r+1-Math.pow(r-d-h,.8)||0)}return{top:e,left:t}}
l.prototype.limitPosition=function(t,e,n,o){var i=this,s=i.canvasWidth,a=i.canvasHeight
if(n>s){t=t>0?0:t
t=t<s-n?s-n:t}else t=Math.max(0,s/2-n/2)
if(o>a){e=e>0?0:e
e=e<a-o?a-o:e}else e=Math.max(0,a/2-o/2)
return{top:e,left:t}}
l.prototype.onZoom=function(){var e=this,i=e.contentStartPos.width,a=e.contentStartPos.height,r=e.contentStartPos.left,c=e.contentStartPos.top,l=s(e.newPoints[0],e.newPoints[1]),u=l/e.startDistanceBetweenFingers,f=Math.floor(i*u),d=Math.floor(a*u),p=(i-f)*e.percentageOfImageAtPinchPointX,h=(a-d)*e.percentageOfImageAtPinchPointY,g=(e.newPoints[0].x+e.newPoints[1].x)/2-n(t).scrollLeft(),b=(e.newPoints[0].y+e.newPoints[1].y)/2-n(t).scrollTop(),m=g-e.centerPointStartX,y=b-e.centerPointStartY,v=r+(p+m),x=c+(h+y),w={top:x,left:v,scaleX:e.contentStartPos.scaleX*u,scaleY:e.contentStartPos.scaleY*u}
e.canTap=!1
e.newWidth=f
e.newHeight=d
e.contentLastPos=w
o(function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)})}
l.prototype.ontouchend=function(t){var e=this,o=e.instance.current,s=Math.max((new Date).getTime()-e.startTime,1),a=e.isSwiping,r=e.isPanning,c=e.isZooming
e.endPoints=i(t)
e.$container.removeClass("fancybox-controls--isGrabbing")
e.$wrap.off("touchmove.fb mousemove.fb",n.proxy(this,"ontouchmove"))
e.$wrap.off("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb",n.proxy(this,"ontouchend"))
e.isSwiping=!1
e.isPanning=!1
e.isZooming=!1
if(e.canTap)return e.ontap()
e.velocityX=e.distanceX/s*.5
e.velocityY=e.distanceY/s*.5
e.speed=o.opts.speed||330
e.speedX=Math.max(.75*e.speed,Math.min(1.5*e.speed,1/Math.abs(e.velocityX)*e.speed))
e.speedY=Math.max(.75*e.speed,Math.min(1.5*e.speed,1/Math.abs(e.velocityY)*e.speed))
r?e.endPanning():c?e.endZooming():e.endSwiping(a)}
l.prototype.endSwiping=function(t){var e=this
if("y"==t&&Math.abs(e.distanceY)>50){n.fancybox.animate(e.$slider,null,{top:e.sliderStartPos.top+e.distanceY+150*e.velocityY,left:e.sliderStartPos.left,opacity:0},e.speedY)
e.instance.close(!0)}else"x"==t&&e.distanceX>50?e.instance.previous(e.speedX):"x"==t&&e.distanceX<-50?e.instance.next(e.speedX):e.instance.update(!1,!0,150)}
l.prototype.endPanning=function(){var t,e,o,i=this
if(i.contentLastPos){t=i.contentLastPos.left+i.velocityX*i.speed*2
e=i.contentLastPos.top+i.velocityY*i.speed*2
o=i.limitPosition(t,e,i.contentStartPos.width,i.contentStartPos.height)
o.width=i.contentStartPos.width
o.height=i.contentStartPos.height
n.fancybox.animate(i.$content,null,o,i.speed,"easeOutSine")}}
l.prototype.endZooming=function(){var t,e,o,i,s=this,a=s.instance.current,r=s.newWidth,c=s.newHeight
if(s.contentLastPos){t=s.contentLastPos.left
e=s.contentLastPos.top
i={top:e,left:t,width:r,height:c,scaleX:1,scaleY:1}
n.fancybox.setTranslate(s.$content,i)
if(r<s.canvasWidth&&c<s.canvasHeight)s.instance.scaleToFit(150)
else if(r>a.width||c>a.height)s.instance.scaleToActual(s.centerPointStartX,s.centerPointStartY,150)
else{o=s.limitPosition(t,e,r,c)
n.fancybox.animate(s.$content,null,o,s.speed,"easeOutSine")}}}
l.prototype.ontap=function(){var t=this,e=t.instance,o=e.current,i=t.endPoints[0].x,s=t.endPoints[0].y
i-=t.$wrap.offset().left
s-=t.$wrap.offset().top
e.SlideShow&&e.SlideShow.isActive&&e.SlideShow.stop()
if(n.fancybox.isTouch){if(t.tapped){clearTimeout(t.tapped)
t.tapped=null
if(Math.abs(i-t.x)>50||Math.abs(s-t.y)>50||!o.isMoved)return this
"image"==o.type&&(o.isLoaded||o.$ghost)&&(e.canPan()?e.scaleToFit():e.isScaledDown()&&e.scaleToActual(i,s))}else{t.x=i
t.y=s
t.tapped=setTimeout(function(){t.tapped=null
e.toggleControls(!0)},300)}return this}o.opts.closeClickOutside&&t.$target.is(".fancybox-slide")?e.close(t.startEvent):"image"==o.type&&o.isMoved&&(e.canPan()?e.scaleToFit():e.isScaledDown()?e.scaleToActual(i,s):e.group.length<2&&e.close(t.startEvent))}
n(e).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new l(e))})
n(e).on("beforeClose.fb",function(t,e){e&&e.Guestures&&e.Guestures.destroy()})}(window,document,window.jQuery)
!function(t,e){"use strict"
var n=function(t){this.instance=t
this.init()}
e.extend(n.prototype,{timer:null,isActive:!1,$button:null,speed:3e3,init:function(){var t=this
t.$button=e('<button data-fancybox-play class="fancybox-button fancybox-button--play" title="Slideshow (P)"></button>').appendTo(t.instance.$refs.buttons)
t.instance.$refs.container.on("click","[data-fancybox-play]",function(){t.toggle()})},set:function(){var t=this
t.instance&&t.instance.current&&(t.instance.current.opts.loop||t.instance.currIndex<t.instance.group.length-1)?t.timer=setTimeout(function(){t.instance.next()},t.instance.current.opts.slideShow.speed||t.speed):t.stop()},clear:function(){var t=this
clearTimeout(t.timer)
t.timer=null},start:function(){var t=this
t.stop()
if(t.instance&&t.instance.current&&(t.instance.current.opts.loop||t.instance.currIndex<t.instance.group.length-1)){t.instance.$refs.container.on({"beforeLoad.fb.player":e.proxy(t,"clear"),"onComplete.fb.player":e.proxy(t,"set")})
t.isActive=!0
t.instance.current.isComplete&&t.set()
t.instance.$refs.container.trigger("onPlayStart")
t.$button.addClass("fancybox-button--pause")}},stop:function(){var t=this
t.clear()
t.instance.$refs.container.trigger("onPlayEnd").off(".player")
t.$button.removeClass("fancybox-button--pause")
t.isActive=!1},toggle:function(){var t=this
t.isActive?t.stop():t.start()}})
e(t).on("onInit.fb",function(t,e){e&&e.group.length>1&&e.opts.slideShow&&!e.SlideShow&&(e.SlideShow=new n(e))})
e(t).on("beforeClose.fb onDeactivate.fb",function(t,e){e&&e.SlideShow&&e.SlideShow.stop()})}(document,window.jQuery)
!function(t,e){"use strict"
var n=function(){var e,n,o,i=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],s={}
for(n=0;n<i.length;n++){e=i[n]
if(e&&e[1]in t){for(o=0;o<e.length;o++)s[i[0][o]]=e[o]
return s}}return!1}()
if(n){var o={request:function(e){e=e||t.documentElement
e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)},exit:function(){t[n.exitFullscreen]()},toggle:function(t){this.isFullscreen()?this.exit():this.request(t)},isFullscreen:function(){return Boolean(t[n.fullscreenElement])},enabled:function(){return Boolean(t[n.fullscreenEnabled])}}
e(t).on({"onInit.fb":function(t,n){var i
if(n&&n.opts.fullScreen&&!n.FullScreen){i=n.$refs.container
n.$refs.button_fs=e('<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="Full screen (F)"></button>').appendTo(n.$refs.buttons)
i.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation()
t.preventDefault()
o.toggle(i[0])})
n.opts.fullScreen.requestOnStart===!0&&o.request(i[0])}},"beforeMove.fb":function(t,e){e&&e.$refs.button_fs&&e.$refs.button_fs.toggle(!!e.current.opts.fullScreen)},"beforeClose.fb":function(){o.exit()}})
e(t).on(n.fullscreenchange,function(){var t=e.fancybox.getInstance(),n=t?t.current.$placeholder:null
if(n){n.css("transition","none")
t.isAnimating=!1
t.update(!0,!0,0)}})}}(document,window.jQuery)
!function(t,e){"use strict"
var n=function(t){this.instance=t
this.init()}
e.extend(n.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,init:function(){var t=this
t.$button=e('<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="Thumbnails (G)"></button>').appendTo(this.instance.$refs.buttons).on("touchend click",function(e){e.stopPropagation()
e.preventDefault()
t.toggle()})},create:function(){var t,n,o=this.instance
this.$grid=e('<div class="fancybox-thumbs"></div>').appendTo(o.$refs.container)
t="<ul>"
e.each(o.group,function(e,o){n=o.opts.thumb||(o.opts.$thumb?o.opts.$thumb.attr("src"):null)
n||"image"!==o.type||(n=o.src)
n&&n.length&&(t+='<li data-index="'+e+'"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="'+n+'" /></li>')})
t+="</ul>"
this.$list=e(t).appendTo(this.$grid).on("click touchstart","li",function(){o.jumpTo(e(this).data("index"))})
this.$list.find("img").hide().one("load",function(){var t,n,o,i,s=e(this).parent().removeClass("fancybox-thumbs-loading"),a=s.outerWidth(),r=s.outerHeight()
t=this.naturalWidth||this.width
n=this.naturalHeight||this.height
o=t/a
i=n/r
if(o>=1&&i>=1)if(o>i){t/=i
n=r}else{t=a
n/=o}e(this).css({width:Math.floor(t),height:Math.floor(n),"margin-top":Math.min(0,Math.floor(.3*r-.3*n)),"margin-left":Math.min(0,Math.floor(.5*a-.5*t))}).show()}).each(function(){this.src=e(this).data("src")})},focus:function(){this.instance.current&&this.$list.children().removeClass("fancybox-thumbs-active").filter('[data-index="'+this.instance.current.index+'"]').addClass("fancybox-thumbs-active").focus()},close:function(){this.$grid.hide()},update:function(){this.instance.$refs.container.toggleClass("fancybox-container--thumbs",this.isVisible)
if(this.isVisible){this.$grid||this.create()
this.$grid.show()
this.focus()}else this.$grid&&this.$grid.hide()
this.instance.update()},hide:function(){this.isVisible=!1
this.update()},show:function(){this.isVisible=!0
this.update()},toggle:function(){this.isVisible?this.hide():this.show()}})
e(t).on("onInit.fb",function(t,e){var o=e.group[0],i=e.group[1]
e.opts.thumbs&&!e.Thumbs&&e.group.length>1&&("image"==o.type||o.opts.thumb||o.opts.$thumb)&&("image"==i.type||i.opts.thumb||i.opts.$thumb)&&(e.Thumbs=new n(e))})
e(t).on("beforeMove.fb",function(t,e,n){var o=e&&e.Thumbs
if(o)if(n.modal){o.$button.hide()
o.hide()}else{e.opts.thumbs.showOnStart===!0&&e.firstRun&&o.show()
o.$button.show()
o.isVisible&&o.focus()}})
e(t).on("beforeClose.fb",function(t,e){if(e&&e.Thumbs){e.Thumbs.isVisible&&e.opts.thumbs.hideOnClosing!==!1&&e.Thumbs.close()
e.Thumbs=null}})}(document,window.jQuery)
!function(t,e,n){"use strict"
function o(){var t=e.location.hash.substr(1),n=t.split("-"),o=n.length>1&&/^\+?\d+$/.test(n[n.length-1])?parseInt(n.pop(-1),10)||1:1,i=n.join("-")
o<1&&(o=1)
return{hash:t,index:o,gallery:i}}function i(t){var e
if(""!==t.gallery){e=n("[data-fancybox='"+n.escapeSelector(t.gallery)+"']").eq(t.index-1)
e.length?e.trigger("click"):n("#"+n.escapeSelector(t.gallery)).trigger("click")}}function s(t){var e
if(!t)return!1
e=t.current?t.current.opts:t.opts
return e.$orig?e.$orig.data("fancybox"):e.hash||""}n.escapeSelector||(n.escapeSelector=function(t){var e=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,n=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t}
return(t+"").replace(e,n)})
var a=null
n(function(){setTimeout(function(){if(n.fancybox.defaults.hash!==!1){n(e).on("hashchange.fb",function(){var t=o()
if(n.fancybox.getInstance()){if(a&&a!==t.gallery+"-"+t.index){a=null
n.fancybox.close()}}else""!==t.gallery&&i(t)})
n(t).on({"onInit.fb":function(t,e){var n=o(),i=s(e)
i&&n.gallery&&i==n.gallery&&(e.currIndex=n.index-1)},"beforeMove.fb":function(n,o,i){var r=s(o)
if(r&&""!==r){e.location.hash.indexOf(r)<0&&(o.opts.origHash=e.location.hash)
a=r+(o.group.length>1?"-"+(i.index+1):"")
if("pushState"in history)try{history.pushState("",t.title,e.location.pathname+e.location.search+"#"+a)}catch(t){}else e.location.hash=a}},"beforeClose.fb":function(n,o){var i=s(o),r=o&&o.opts.origHash?o.opts.origHash:""
if(i&&""!==i)if("pushState"in history)try{history.pushState("",t.title,e.location.pathname+e.location.search+r)}catch(t){}else e.location.hash=r
a=null}})
i(o())}},50)})}(document,window,window.jQuery)}})
;
