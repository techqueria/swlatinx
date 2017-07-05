/*! no_rails_asset_compression */

webpackJsonp([7,47],{332:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t,n){var i=function(i){function a(){o(this,a)
var e=s(this,(a.__proto__||Object.getPrototypeOf(a)).call(this))
e.state=n(t)
e.handleStoresChanged=e.handleStoresChanged.bind(e)
return e}r(a,i)
c(a,[{key:"componentDidMount",value:function(){var e=this
this._listenerIds=[]
t.forEach(function(t){var n=t.addListener(e.handleStoresChanged)
e._listenerIds.push(n)})}},{key:"componentWillUnmount",value:function(){var e=this
t.forEach(function(t,n){t.removeListener(e._listenerIds[n])})}},{key:"handleStoresChanged",value:function(){this.setState(n(t))}},{key:"render",value:function(){return d.default.createElement(e,l({},this.props,this.state))}}])
return a}(d.default.Component)
return i}Object.defineProperty(t,"__esModule",{value:!0})
var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}()
t.default=a
var u=n(1),d=i(u)
e.exports=t.default},530:function(e){/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
"use strict"
function t(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined")
return Object(e)}function n(){try{if(!Object.assign)return!1
var e=new String("abc")
e[5]="de"
if("5"===Object.getOwnPropertyNames(e)[0])return!1
for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n
var i=Object.getOwnPropertyNames(t).map(function(e){return t[e]})
if("0123456789"!==i.join(""))return!1
var o={}
"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e})
return"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}var i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable
e.exports=n()?Object.assign:function(e){for(var n,r,a=t(e),l=1;l<arguments.length;l++){n=Object(arguments[l])
for(var c in n)o.call(n,c)&&(a[c]=n[c])
if(i){r=i(n)
for(var u=0;u<r.length;u++)s.call(n,r[u])&&(a[r[u]]=n[r[u]])}}return a}},885:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0
var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=n(1),r=i(s),a=n(13),l=i(a),c=n(2039),u=n(530),d=i(u),p={serverInitialize:function(e){var t=r.default.Children.count(e.children),n=e.rtl?t-1-e.initialSlide:e.initialSlide
this.setState({slideCount:t,currentSlide:n})},initialize:function(e){var t,n=l.default.findDOMNode(this.list),i=r.default.Children.count(e.children),o=this.getWidth(n),s=this.getWidth(l.default.findDOMNode(this.track))
if(e.vertical)t=this.getWidth(l.default.findDOMNode(this))
else{var a=e.centerMode&&2*parseInt(e.centerPadding)
t=(this.getWidth(l.default.findDOMNode(this))-a)/e.slidesToShow}var u=this.getHeight(n.querySelector('[data-index="0"]')),p=u*e.slidesToShow,m=e.rtl?i-1-e.initialSlide:e.initialSlide
this.setState({slideCount:i,slideWidth:t,listWidth:o,trackWidth:s,currentSlide:m,slideHeight:u,listHeight:p},function(){var t=(0,c.getTrackLeft)((0,d.default)({slideIndex:this.state.currentSlide,trackRef:this.track},e,this.state)),n=(0,c.getTrackCSS)((0,d.default)({left:t},e,this.state))
this.setState({trackStyle:n})
this.autoPlay()})},update:function(e){var t,n=l.default.findDOMNode(this.list),i=r.default.Children.count(e.children),o=this.getWidth(n),s=this.getWidth(l.default.findDOMNode(this.track))
if(e.vertical)t=this.getWidth(l.default.findDOMNode(this))
else{var a=e.centerMode&&2*parseInt(e.centerPadding)
t=(this.getWidth(l.default.findDOMNode(this))-a)/e.slidesToShow}var u=this.getHeight(n.querySelector('[data-index="0"]')),p=u*e.slidesToShow
e.autoplay||this.pause()
this.setState({slideCount:i,slideWidth:t,listWidth:o,trackWidth:s,slideHeight:u,listHeight:p},function(){var t=(0,c.getTrackLeft)((0,d.default)({slideIndex:this.state.currentSlide,trackRef:this.track},e,this.state)),n=(0,c.getTrackCSS)((0,d.default)({left:t},e,this.state))
this.setState({trackStyle:n})})},getWidth:function(e){return e.getBoundingClientRect().width||e.offsetWidth},getHeight:function(e){return e.getBoundingClientRect().height||e.offsetHeight},adaptHeight:function(){if(this.props.adaptiveHeight){var e='[data-index="'+this.state.currentSlide+'"]'
if(this.list){var t=l.default.findDOMNode(this.list)
t.style.height=t.querySelector(e).offsetHeight+"px"}}},canGoNext:function(e){var t=!0
e.infinite||(e.centerMode?e.currentSlide>=e.slideCount-1&&(t=!1):(e.slideCount<=e.slidesToShow||e.currentSlide>=e.slideCount-e.slidesToShow)&&(t=!1))
return t},slideHandler:function(e){var t,n,i,o,s,r=this
if(!this.props.waitForAnimate||!this.state.animating)if(this.props.fade){n=this.state.currentSlide
if(this.props.infinite===!1&&(e<0||e>=this.state.slideCount))return
t=e<0?e+this.state.slideCount:e>=this.state.slideCount?e-this.state.slideCount:e
this.props.lazyLoad&&this.state.lazyLoadedList.indexOf(t)<0&&this.setState({lazyLoadedList:this.state.lazyLoadedList.concat(t)})
s=function(){r.setState({animating:!1})
r.props.afterChange&&r.props.afterChange(t)
delete r.animationEndCallback}
this.setState({animating:!0,currentSlide:t},function(){this.animationEndCallback=setTimeout(s,this.props.speed)})
this.props.beforeChange&&this.props.beforeChange(this.state.currentSlide,t)
this.autoPlay()}else{t=e
n=t<0?this.props.infinite===!1?0:this.state.slideCount%this.props.slidesToScroll!==0?this.state.slideCount-this.state.slideCount%this.props.slidesToScroll:this.state.slideCount+t:t>=this.state.slideCount?this.props.infinite===!1?this.state.slideCount-this.props.slidesToShow:this.state.slideCount%this.props.slidesToScroll!==0?0:t-this.state.slideCount:t
i=(0,c.getTrackLeft)((0,d.default)({slideIndex:t,trackRef:this.track},this.props,this.state))
o=(0,c.getTrackLeft)((0,d.default)({slideIndex:n,trackRef:this.track},this.props,this.state))
this.props.infinite===!1&&(i=o)
this.props.beforeChange&&this.props.beforeChange(this.state.currentSlide,n)
if(this.props.lazyLoad){for(var a=!0,l=[],u=t;u<t+this.props.slidesToShow;u++){a=a&&this.state.lazyLoadedList.indexOf(u)>=0
a||l.push(u)}a||this.setState({lazyLoadedList:this.state.lazyLoadedList.concat(l)})}if(this.props.useCSS===!1)this.setState({currentSlide:n,trackStyle:(0,c.getTrackCSS)((0,d.default)({left:o},this.props,this.state))},function(){this.props.afterChange&&this.props.afterChange(n)})
else{var p={animating:!1,currentSlide:n,trackStyle:(0,c.getTrackCSS)((0,d.default)({left:o},this.props,this.state)),swipeLeft:null}
s=function(){r.setState(p)
r.props.afterChange&&r.props.afterChange(n)
delete r.animationEndCallback}
this.setState({animating:!0,currentSlide:n,trackStyle:(0,c.getTrackAnimateCSS)((0,d.default)({left:i},this.props,this.state))},function(){this.animationEndCallback=setTimeout(s,this.props.speed)})}this.autoPlay()}},swipeDirection:function(e){var t,n,i,o
t=e.startX-e.curX
n=e.startY-e.curY
i=Math.atan2(n,t)
o=Math.round(180*i/Math.PI)
o<0&&(o=360-Math.abs(o))
return o<=45&&o>=0||o<=360&&o>=315?this.props.rtl===!1?"left":"right":o>=135&&o<=225?this.props.rtl===!1?"right":"left":this.props.verticalSwiping===!0?o>=35&&o<=135?"down":"up":"vertical"},play:function(){var e
if(!this.state.mounted)return!1
if(this.props.rtl)e=this.state.currentSlide-this.props.slidesToScroll
else{if(!this.canGoNext(o({},this.props,this.state)))return!1
e=this.state.currentSlide+this.props.slidesToScroll}this.slideHandler(e)},autoPlay:function(){this.state.autoPlayTimer||this.props.autoplay&&this.setState({autoPlayTimer:setInterval(this.play,this.props.autoplaySpeed)})},pause:function(){if(this.state.autoPlayTimer){clearInterval(this.state.autoPlayTimer)
this.setState({autoPlayTimer:null})}}}
t.default=p},886:function(e,t,n){(function(t){"use strict"
var i,o,s,r,a,l,c,u,d,p,m,f,h,g,v,y,b,_,w,E,C,x,N,k
v=n(1)
y=n(13)
m=n(28)
i=n(6)
E=n(3)
k=n(322)
x=n(14)
r=n(85)
h=n(57)
a=n(88)
l=n(238)
u=n(54)
f=n(247)
w=n(547)
_=n(175)
N=n(30)
s=n(29)
d=n(2068)
b=n(2038)
p=n(549)
C=n(332)
o=n(12)
g=n(5)
c=v.createClass({displayName:"EcommerceProduct",mixins:[w.enableAfterMount(),_],contextTypes:{fromStorePage:v.PropTypes.bool},getInitialState:function(){return{variationId:"",quantity:1,price:0,name:"",currentImageIndex:0,showSelectPanel:!1,showSelectVariationMsg:!1}},componentDidMount:function(){if(this.props.product.variations.length<=1)return this._chooseVariation(this._getFirstAvailableVariation().id)},componentDidUpdate:function(){var e,t
e=i(y.findDOMNode(this.refs.imageWrapper))
t=e.find("img")
e.height(t.height())
return t.load(function(){return e.height(t.height())})},componentWillReceiveProps:function(e){if(this.props.product.id!==e.product.id){if(e.product.variations.length<=1){this._chooseVariation(this._getFirstAvailableVariation(e.product.variations).id,e.product.variations)
return this.setState({currentImageIndex:0})}return this.setState(this.getInitialState())}},_setClickPosition:function(e,t){return this._clickPosition={x:e,y:t}},_shoppingCartAnimation:function(e,t){var n,o,r,a,l,c,u,d,p,m,f
n=i("<div class='s-ecommerce-animation-item'><i class='entypo-bag'></i></div>")
o=i(s.isSmallScreen()?"#s-mobile-shopping-cart-new":"#s-ecommerce-shopping-cart")
if(!o.length)return"function"==typeof t?t():void 0
a=o.find(".fa").offset()
l={x:a.left-5,y:a.top-i(window).scrollTop()}
e={x:e.x-15,y:e.y-15}
n.css({top:e.y,left:e.x})
f=l.x-e.x
i("#s-content").append(n)
if(l.y<=e.y){r=(e.y-l.y)/Math.pow(e.x-l.x,2)
p=function(e){return r*Math.pow(e-l.x,2)+l.y}}else{r=(l.y-e.y)/Math.pow(l.x-e.x,2)
p=function(t){return r*Math.pow(t-e.x,2)+e.y}}d=Math.sqrt(Math.pow(l.y-e.y,2)+Math.pow(l.x-e.x,2))
u=(l.x-e.x)/(60*d/1e3)
c=e.x+u
m=function(e){return function(){return e.setTimeout(function(){if(!((l.x-c)*f<0)){n.css({left:c,top:p(c)})
c+=u
return m()}n.css({left:l.x,top:l.y})
"function"==typeof t&&t()
n.remove()
o.addClass("add-item-animation")
e.setTimeout(function(){return o.removeClass("add-item-animation")},700)},1e3/60)}}(this)
m()
return o.removeClass("add-item-animation")},_getRestNum:function(){var e,t
t=this._getVariationData()
e=E.find(this.props.cartData.items,function(e){return+e.orderItem.id===+t.id})
return e?t.quantity-e.orderItem.quantity:t.quantity},_getOriginalRestNum:function(){var e
e=this._getVariationData()
return e.quantity},_allOutOfStock:function(){return E.all(this.props.product.variations,function(e){return 0===+e.quantity})},_hasPayment:function(){return l.isPaymentAccountSet()},_canBuy:function(){var e,t,n,i
i=this._getVariationData()
if(i){n=this._getRestNum()
t=this._getOriginalRestNum()
e=+this.state.quantity||1
return e<=n||t===-1}},_canMinusQuantity:function(){var e
e=+this.state.quantity
return!isNaN(e)&&e>=2},_getFirstAvailableVariation:function(e){var t
null==e&&(e=this.props.product.variations)
t=e.find(function(e){return function(t){var n,i
n=e.props.cartData.items.find(function(e){return+e.orderItem.id===+t.id})
i=n?t.quantity-n.orderItem.quantity:t.quantity
return i>0||t.quantity===-1}}(this))
return t?t:e[0]},_getVariationData:function(){var e,t
t=E.find(null!=(e=this.props.product)?e.variations:void 0,function(e){return function(t){return+t.id===+e.state.variationId}}(this))
return t||(t={})},_getErrorText:function(){var e
if(this._canBuy())return""
if(!this.state.variationId&&this.state.showSelectVariationMsg)return t("Ecommerce|Select an option")
e=this._getOriginalRestNum()
return"undefined"==typeof e?"":0===e?t("Ecommerce|This option is out of stock"):t("Ecommerce|Only %{quantity} in stock",{quantity:e})},_getProductImage:function(){var e
return(null!=(e=this.props.product.picture[this.state.currentImageIndex])?e.thumbnailUrl:void 0)||N.cdnAssetPath(a.DEFAULT_PRODUCT_IMAGE)},_getEstimatedDelivery:function(){var e,t,n
n=this.props.settings.estimatedDelivery
t=this.props.locale
e="zh-CN"===t?"YYYY年M月":"MMMM YYYY"
return k(n).locale(t).format(e)},_openBuyPanel:function(e){f.openDialog("ecommerceBuyPanel",{strong:!0})
r.updateBuyDialogOpenState(!0)
return r.gotoEcommerceBuyDialog(e,!0)},_addItemDataToCart:function(){var e,t,i,o,s
i=this.props.product
t=this.props.cartData
o=+this.state.quantity||1
s=t.items.some(function(e){return function(t){if(+t.orderItem.id===+e.state.variationId){e.props.hasMultipleProducts?t.orderItem.quantity+=o:t.orderItem.quantity=o
t.orderItem.price=+e.state.price
t.orderItem.name=e.state.name
t.productId=i.id
t.product=i
return!0}return!1}}(this))
s||t.items.push({productId:i.id,product:i,orderItem:{id:+this.state.variationId,quantity:o,price:+this.state.price,name:this.state.name}})
r.updateShoppingCart(t)
e=n(179)
return e.trackPageEventOnFB("AddToCart",{value:+this.state.price*+o,currency:u.getSettings().currencyData.code,content_name:i.name,content_type:"product",content_ids:i.id})},_addItem:function(){var e,t,i,o,s,a
e=n(179)
e.trackEcommerceBuyerEvent(this.props.keenIoEcommerceBuyerAddedItemToCart)
t=function(t){return function(){if(t.props.hasMultipleProducts)return t._shoppingCartAnimation({x:t._clickPosition.x,y:t._clickPosition.y},function(){return t._addItemDataToCart()})
t._addItemDataToCart()
t._openBuyPanel("singleProductPanel")
e=n(179)
return e.trackEcommerceBuyerEvent(t.props.keenIoEcommerceBuyerViewedCheckoutDialog,{entrance:"direct"})}}(this)
i=this.props.cartData
o=!!(null!=(a=i.orderData)?a.orderToken:void 0)
s=function(){var e,t
t=+i.orderData.startTime
e=(new Date).getTime()
return(e-t)/6e4>=10}
o||t()
if(o&&s()){r.clearShoppingCart()
t()}o&&!s()&&this._openBuyPanel("orderPreview")
return this._onClickHideVariationSelectPanel()},_chooseVariation:function(e,t){var n
null==t&&(t=this.props.product.variations)
n=E.find(t,function(t){return+t.id===+e})
if(n)return this.setState({variationId:e,price:n.price,name:n.name,showSelectVariationMsg:!1})},_showImageGallery:function(){return n.e(0,function(e){return function(){var t
n(2042)
t=e.props.product.picture.map(function(e){return{src:e.url}})
return i.fancybox.open(t,Object.assign({},d.onlyCloseBtnOpts,{baseTpl:d.getCustomArrowTpl(),beforeMove:d.indicatorBeforeMove,onInit:d.indicatorOnInit}))}}(this))},_getUnSupportedPaymentMessage:function(){var e,t,n,i,o,s,r,a,c,u,d,p
p=l.availableDevicesToPayment()
o=l.hasAvailablePaymentWithCurrentDevice()
d={wechat:"微信",mobile:"手机",desktop:"电脑"}
t=p.length
n=""
if(!o&&t>0){u=1===t&&"wechat"===p[0]?"":"浏览器"
for(r=s=0,a=p.length;s<a;r=++s){e=p[r]
c=0!==r?"或":""
n+=""+c+d[e]}}return i="请用"+n+u+"进行支付"},_onChangeQuantity:function(e){var t
t=e.target.value
if(/^(\d+)?$/.test(t))return this.setState({quantity:t})},_onChangeChooseVariation:function(e){var t
t=e.target.value
return this._chooseVariation(t)},_onClickAddQuantity:function(e){var t
t=+this.state.quantity
t=isNaN(t)?0:t
return this.setState({quantity:t+e})},_onClickShowImageGallery:function(){return this._showImageGallery()},_onClickBuy:function(e){if(this.state.variationId){this._setClickPosition(e.clientX,e.clientY)
return this._addItem()}return this.setState({showSelectVariationMsg:!0})},_onClickOpenBuyPanel:function(){var e,t,n,i
e=this.props.cartData
t=!!(null!=(i=e.orderData)?i.orderToken:void 0)
n=function(){var t,n
n=+e.orderData.startTime
t=(new Date).getTime()
return(t-n)/6e4>=10}
t&&n()&&r.clearShoppingCart()
if(t&&!n())return this._openBuyPanel("orderPreview")},_onClickNextImage:function(){return this.setState({currentImageIndex:this.state.currentImageIndex+1})},_onClickPrevImage:function(){return this.setState({currentImageIndex:this.state.currentImageIndex-1})},_setCurrentImage:function(e){return this.setState({currentImageIndex:e})},_onClickShowProductPage:function(){var e
e=this.props.product
return h.gotoProductPage(e.id,this.context.fromStorePage)},_onClickShowVariationSelectPanel:function(){return this.setState({showSelectPanel:!0})},_onClickHideVariationSelectPanel:function(){return this.setState({showSelectPanel:!1})},_getSlickSettings:function(){return{infinite:1!==this.props.product.picture.length,slidesToShow:1,autoplay:!1,afterChange:function(e){return function(t){return e.setState({currentImageIndex:t})}}(this)}},_renderThumbnailList:function(){var e,t,n
n=this.props.product.picture.length
e=this.state.currentImageIndex+1
t=n>=7?e<=4?0:n-e<=3?14.5*-(n-7)+"%":14.5*-(e-4)+"%":0
return v.createElement("div",{className:"s-ecommerce-row-view-product-thumbnail-list"},v.createElement("ul",{style:{left:t}},this.props.product.picture.map(function(e){return function(t,n){return v.createElement("li",{key:n,className:n===e.state.currentImageIndex?"current":"",onClick:function(){return e._setCurrentImage(n)}},v.createElement("img",{src:t.thumbnailUrl}))}}(this))))},render:function(){var e,n,i,s,r,a,c,u,d,m,f,h,g,y,_,w,E
n=this._canBuy()
a=this._hasPayment()
r=l.hasAvailablePaymentWithCurrentDevice()
c=this.props.settings.estimatedDelivery
u=this.props.isSxl
w=this._getVariationData()
_=this.state.showSelectPanel
s=this.props.fromProductPage
y=!s&&this.props.product.detailEnabled&&o.getProductPage()
g=this.state.price?l.addCurrencySymbol(Number(this.state.price)):l.getPriceScope(this.props.product)
i=this._allOutOfStock()?t("Ecommerce|All options are out of stock"):this._getErrorText()
e=t(a?"card"===this.props.layout?"Ecommerce|Add to cart":c?this.props.hasMultipleProducts?"Ecommerce|Pre-Order: Add to cart":"Ecommerce|Pre-Order":this.props.hasMultipleProducts?"Ecommerce|Add to cart":"Ecommerce|Buy now":"Ecommerce|Coming soon")
d="entypo-minus minus-icon "+(this._canMinusQuantity()?"":"disable")
f="entypo-plus plus-icon "+(n?"":"disable")
m=this._canMinusQuantity()?this._onClickAddQuantity.bind(this,-1):null
h=n?this._onClickAddQuantity.bind(this,1):null
E=this.state.variationId
return v.createElement("div",{className:x("s-ecommerce-row-view-product",{"from-product-page":s})},v.createElement("div",{className:""+this.props.imgColumnClassName,style:{minHeight:"50px"}},v.createElement("div",{className:"half-offset-right"},v.createElement("div",{className:"s-ecommerce-row-view-product-image-wrapper",ref:"imageWrapper",onClick:this._onClickShowImageGallery},this.props.product.picture.length>=1&&v.createElement("div",{className:"slider-wrapper"},v.createElement(b,Object.assign({},this._getSlickSettings()),this.props.product.picture.map(function(){return function(e){return v.createElement("div",{className:"slide-thumb",style:{backgroundImage:"url("+e.thumbnailUrl+")"}})}}(this))),this.props.product.picture.length>=2&&v.createElement("ul",{className:"slider-dot-wrapper"},this.props.product.picture.map(function(e){return function(t,n){return v.createElement("li",{className:x("slider-dot",{selected:e.state.currentImageIndex===n})})}}(this)))),v.createElement("div",{className:"image-wrapper"},v.createElement(p,{src:this._getProductImage(),width:"100%"}),this.props.product.picture.length>=2?"card"===this.props.layout||s?v.createElement("div",{className:"s-ecommerce-row-view-product-image-overlay-wrapper"},v.createElement("div",{className:"s-ecommerce-row-view-product-image-overlay"}),v.createElement("div",{className:"s-ecommerce-row-view-product-image-overlay-icon"},v.createElement("div",{className:"fa fa-search-plus",title:t("Ecommerce|Click to view more images")}))):"row"===this.props.layout?v.createElement("div",{className:"s-ecommerce-row-view-product-image-gallery-button"},v.createElement("div",{className:"fa fa-search-plus",title:t("Ecommerce|Click to view more images")})):void 0:void 0)),(s||"card"===this.props.layout)&&this.props.product.picture.length>=2?this._renderThumbnailList():void 0)),v.createElement("div",{className:"s-ecommerce-row-view-product-detail-panel s-font-body "+this.props.infoColumnClassName},v.createElement("div",{className:"s-ecommerce-row-view-product-name"},this.props.product.name),v.createElement("div",{className:"s-ecommerce-row-view-product-pricing"},g),v.createElement("div",{className:"s-ecommerce-row-view-product-desc"},v.createElement("div",{dangerouslySetInnerHTML:{__html:this.props.product.description}}),c?v.createElement("div",{style:{fontWeight:"600"}},t("Ecommerce|Ships %{delivery}.",{delivery:this._getEstimatedDelivery()})):void 0,y?v.createElement("div",{className:"view-detail-btn",onClick:this._onClickShowProductPage},t("Ecommerce|View more details...")):void 0),v.createElement("div",{className:"s-ecommerce-row-view-product-select"},this.props.product.variations.length>=2?v.createElement("div",{className:"select-variation"},v.createElement("div",{className:"select-label"},v.createElement("span",null,w.name||t("Ecommerce|Select an option")),v.createElement("span",{className:"select-arrow"})),v.createElement("select",{onChange:this._onChangeChooseVariation,value:E||0},v.createElement("option",{disabled:!0,key:-1,value:0},t("Ecommerce|Select an option")),this.props.product.variations.map(function(e,t){return v.createElement("option",{key:t,value:e.id},e.name)}))):void 0,v.createElement("div",{className:"select-number"},v.createElement("div",{className:"select-label"},t("Ecommerce|Quantity")),v.createElement("div",{className:"number-input-wrapper"},v.createElement("div",{className:d,onClick:m}),v.createElement("input",{type:"text",maxLength:"3",value:this.state.quantity,onChange:this._onChangeQuantity}),v.createElement("div",{className:f,onClick:h})))),n?void 0:v.createElement("div",{className:"s-ecommerce-row-view-product-error-text"},i),!n&&this.state.variationId||!a?v.createElement("div",{className:"s-ecommerce-row-view-product-order-btn s-common-button disable",onClick:this._onClickOpenBuyPanel},e):u&&!r?v.createElement("div",null,v.createElement("div",{className:"s-ecommerce-row-view-product-order-btn s-common-button disable"},"无可用的支付方式"),v.createElement("div",{className:"s-ecommerce-buy-prompt"},v.createElement("i",{className:"fa fa-exclamation-circle","aria-hidden":"true"}),this._getUnSupportedPaymentMessage())):v.createElement("a",{className:"s-ecommerce-row-view-product-order-btn s-common-button",onClick:this._onClickBuy},e)),s&&!(u&&!r)&&v.createElement("div",null,v.createElement("div",{className:x("select-overlay",{show:_}),onClick:this._onClickHideVariationSelectPanel}),v.createElement("div",{className:"mobile-select"},v.createElement("div",{className:x("select-panel",{show:_})},!n&&v.createElement("div",{className:"error-text"},v.createElement("div",{className:"container"},v.createElement("div",{className:"sixteen columns"},i))),v.createElement("div",{className:"price"},v.createElement("div",{className:"container"},v.createElement("div",{className:"sixteen columns"},v.createElement("div",{className:"select-label"},t("Ecommerce|Price")),v.createElement("div",{className:"price-label"},g)))),this.props.product.variations.length>=2&&v.createElement("div",{className:"variations"},v.createElement("div",{className:"container"},v.createElement("div",{className:"sixteen columns"},v.createElement("div",{className:"select-label"},t("Ecommerce|Product Options")),v.createElement("div",null,this.props.product.variations.map(function(e){return function(t){return v.createElement("div",{className:x("variation-item",{selected:E===t.id}),onClick:function(){return e._chooseVariation(t.id)}},t.name)}}(this)))))),v.createElement("div",{className:"quantity"},v.createElement("div",{className:"container"},v.createElement("div",{className:"sixteen columns"},v.createElement("div",{className:"select-label"},t("Ecommerce|Quantity")),v.createElement("div",{className:"quantity-changer"},v.createElement("div",{className:d,onClick:m}),v.createElement("div",{className:"quantity-number"},this.state.quantity),v.createElement("div",{className:f,onClick:h})))))),v.createElement("div",{onClick:a?_?this._onClickBuy:this._onClickShowVariationSelectPanel:null,className:"add-btn "+(a?"":"disabled")},t(a?"Ecommerce|Add to cart":"Ecommerce|Coming soon")))))}})
e.exports=C(c,[],function(){return{locale:o.getLocale(),isSxl:o.getIsSxl(),isNewMobileActions:g.getIsNewMobileActions(),keenIoEcommerceBuyerAddedItemToCart:o.getKeenIoEcommerceBuyerAddedItemToCart(),keenIoEcommerceBuyerViewedCheckoutDialog:o.getKeenIoEcommerceBuyerViewedCheckoutDialog()}})}).call(t,n(9))},887:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(3),s=i(o),r=n(11),a=(i(r),n(19)),l=n(38),c=i(l),u=n(531),d=(i(u),n(245)),p=(i(d),void 0),m=void 0,f=s.default.assign({},a.EventEmitter.prototype,{init:function(e){p=new c.default(e)
m=p.binding
return m},getBinding:function(){return p.binding},getSideMenuOpenState:function(){return this.getBinding().get("sideMenuOpenState").toJS()}})
window.DEBUG.PageBridgeStore=f
t.default=f
e.exports=t.default},888:function(e,t,n){"use strict"
var i,o,s,r,a,l,c,u,d,p,m,f,h,g,v,y,b,_,w,E,C,x,N,k,S,P
d=n(3)
i=n(6)
s=n(19).EventEmitter
o=n(38)
E=n(135)
u=n(17)
p=void 0
m=void 0
b=!1
w=function(e,t){e=e.toSlug();(0===e.length||e.match(/^[0-9]+$/g))&&(e="_"+(t+1))
return e}
h=function(){var e,t,i,o,s,r,a,l,c,u,p,f,h,g,v
i=n(138)
e=n(16)
t=n(5)
s=e.getCurrentPageType()
h=t.getId()
if(!i.isEditMode()&&m)return m
v=e.getSectionNames()
p=[]
for(a=l=0,c=v.length;l<c;a=++l){g=v[a]
g||(g="")
r="preview"===t.getSiteMode()?"/s/sites/"+h+"/preview?mode=iframe&v4=1#":"/#"
u=f=("productPage"===s?r:"#")+w(g,a)
o=1
for(;~d.indexOf(p,u);)u=f+"-"+o++
p.push(u)}i.isEditMode()||(m=p)
return p}
f=function(e){return h()[e]}
g=function(e){var t,o,s,r,a
if(""===e)return 0
if(e.match(/^#\d+$/g)){t=n(16)
a=t.getSections()
s=parseInt(e.substring(1),10)-1;(s<0||s>=a.length)&&(s=0)
return s}if(~(s=d.indexOf(h(),e)))return s
if(d.startsWith(e,"#blog")||d.startsWith(e,"#_blog")){t=n(16)
o=i.url(location.href).param("categoryId")
o=o?o:"all"
r=d.findIndex(t.getSections(),function(e){return!(!d.isObject(e.components.blog1)||!d.isObject(e.components.blog1.category))&&(d.isUndefined(e.components.blog1.category.id)?"all"===o:o===e.components.blog1.category.id.toString())})
return r}if("#store"===e||"#_store"===e){t=n(16)
r=d.findIndex(t.getSections(),function(e){return d.isObject(e.components.ecommerce1)})
return r}}
C=function(e){var t
t=g(e)
return x(t)}
k=function(e){var t,i
t=n(16)
i=d.findIndex(t.getSections(),function(t){return t.id===e})
return x(i)}
x=function(e){return v(e)}
N=function(e){p.setData("navigating",!0)
return p.setData("navToPosition",e)}
v=function(e){if(e>=0){p.setData("navigating",!0)
p.setData("navToIndex",e)
return p.setData("selected",e)}}
_=function(){var e,t
e=window.location.hash
if(""!==e&&"#"!==e&&0!==e.indexOf("#!"))return null!=(t=window.history)&&"function"==typeof t.replaceState?t.replaceState("",document.title,window.location.pathname+window.location.search):void 0}
y=d.debounce(function(){return window.Waypoint.refreshAll()},1e3)
S=function(e){if(!p.getData("navigating")){_()
return p.setData("selected",e)}}
P=function(e){return p.setData("selectedPageIndex",e)}
r="navigator_store"
a=d.assign({},s.prototype,{getDefault:function(){return{selected:0,navToIndex:null,navigating:!1}},emitChange:function(){return this.emit(r)},addListener:function(e){return this.on(r,e)},rmListener:function(e){return this.removeListener(r,e)},init:function(e){p=new o(e)
return p.binding},getStates:function(){return p.binding.toJS()},getData:function(e){return p.binding.get(e)},getBinding:function(){return p.binding},getSelectedIndex:function(){return p.getData("selected")},getSelectedPageIndex:function(){return p.getData("selectedPageIndex")},getNavToIndex:function(){return p.getData("navToIndex")},getNavToPosition:function(){return p.getData("navToPosition")},isNavigating:function(){return p.getData("navigating")},getSectionHashByIndex:function(e){return f(e)}})
c=n(242)
l=n(241)
a.dispatchToken=c.register(function(e){var t,i,o
switch(e.actionType){case l.ActionTypes.SET_SECTION_INDEX:if(!b)return
S(e.index)
break
case l.ActionTypes.NAVIGATE_TO_HASH:C(e.hash)
break
case l.ActionTypes.NAVIGATE_TO_PREVIOUS_SECTION:i=a.getSelectedIndex()
x(i>0?i-1:0)
break
case l.ActionTypes.NAVIGATE_TO_NEXT_SECTION:t=n(16)
i=a.getSelectedIndex()
o=t.getSections().length
x(i+1<o?i+1:o-1)
break
case l.ActionTypes.DID_NAVIGATE_TO_SECTION:p.setData("navigating",!1)
p.setData("navToIndex",null)
break
case l.ActionTypes.PAGE_CONTENT_UPDATED:y()
break
case l.ActionTypes.PAGE_MOUNTED:window.setTimeout(function(){return function(){return b=!0}}(this),1500)
break
case l.ActionTypes.REPEATABLE_ITEM_MOVED:N(e.position)
break
case l.ActionTypes.SWITCH_PAGE:m=void 0}return a.emitChange()})
window.DEBUG||(window.DEBUG={})
window.DEBUG.NavigatorStore=a
e.exports=a},2033:function(e,t,n){"use strict"
var i=n(2111),o=n(2112),s=n(2040),r=o([i])
e.exports=r
e.exports.touchStyles=s
e.exports.Mixin=i},2034:function(e,t,n){"use strict"
var i,o,s,r,a,l,c,u
l=n(3)
r=n(19).EventEmitter
s=n(59)
o=n(58)
i="pages_list_store_event_id"
c=function(e){switch(e.state){case"published":return 2
case"unpublished":return 1
case"new":return 0}}
u=[]
a=l.assign({},r.prototype,{emitChange:function(){return this.emit(i,this.getPagesList())},getPagesList:function(){return u},addChangeListener:function(e){return this.on(i,e)},removeChangeListener:function(e){return this.removeListener(i,e)},init:function(){var e
e=n(5)
u=e.getConnectedSites()
return this.emitChange()}})
e.exports=a},2035:function(e){function t(e,t){var n,i=0,o=e.length
for(i;i<o;i++){n=t(e[i],i)
if(n===!1)break}}function n(e){return"[object Array]"===Object.prototype.toString.apply(e)}function i(e){return"function"==typeof e}e.exports={isFunction:i,isArray:n,each:t}},2036:function(e,t,n){var i=n(2116),o=function(e){var t=/[height|width]$/
return t.test(e)},s=function(e){var t="",n=Object.keys(e)
n.forEach(function(s,r){var a=e[s]
s=i(s)
o(s)&&"number"==typeof a&&(a+="px")
t+=a===!0?s:a===!1?"not "+s:"("+s+": "+a+")"
r<n.length-1&&(t+=" and ")})
return t},r=function(e){var t=""
if("string"==typeof e)return e
if(e instanceof Array){e.forEach(function(n,i){t+=s(n)
i<e.length-1&&(t+=", ")})
return t}return s(e)}
e.exports=r},2037:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}var o=n(1),s=i(o),r={className:"",accessibility:!0,adaptiveHeight:!1,arrows:!0,autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e){return s.default.createElement("button",null,e+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:!1,pauseOnHover:!0,responsive:null,rtl:!1,slide:"div",slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0,afterChange:null,beforeChange:null,edgeEvent:null,init:null,swipeEvent:null,nextArrow:null,prevArrow:null}
e.exports=r},2038:function(e,t,n){"use strict"
e.exports=n(2109)},2039:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0
t.getTrackLeft=t.getTrackAnimateCSS=t.getTrackCSS=void 0
var o=n(13),s=i(o),r=n(530),a=i(r),l=function(e,t){return t.reduce(function(t,n){return t&&e.hasOwnProperty(n)},!0)?null:console.error("Keys Missing",e)},c=t.getTrackCSS=function(e){l(e,["left","variableWidth","slideCount","slidesToShow","slideWidth"])
var t,n,i=e.slideCount+2*e.slidesToShow
e.vertical?n=i*e.slideHeight:t=e.variableWidth?(e.slideCount+2*e.slidesToShow)*e.slideWidth:e.centerMode?(e.slideCount+2*(e.slidesToShow+1))*e.slideWidth:(e.slideCount+2*e.slidesToShow)*e.slideWidth
var o={opacity:1,WebkitTransform:e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",transform:e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",transition:"",WebkitTransition:"",msTransform:e.vertical?"translateY("+e.left+"px)":"translateX("+e.left+"px)"}
t&&(0,a.default)(o,{width:t})
n&&(0,a.default)(o,{height:n})
window&&!window.addEventListener&&window.attachEvent&&(e.vertical?o.marginTop=e.left+"px":o.marginLeft=e.left+"px")
return o}
t.getTrackAnimateCSS=function(e){l(e,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"])
var t=c(e)
t.WebkitTransition="-webkit-transform "+e.speed+"ms "+e.cssEase
t.transition="transform "+e.speed+"ms "+e.cssEase
return t},t.getTrackLeft=function(e){l(e,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"])
var t,n,i=0,o=0
if(e.fade)return 0
if(e.infinite){if(e.slideCount>=e.slidesToShow){i=e.slideWidth*e.slidesToShow*-1
o=e.slideHeight*e.slidesToShow*-1}if(e.slideCount%e.slidesToScroll!==0&&e.slideIndex+e.slidesToScroll>e.slideCount&&e.slideCount>e.slidesToShow)if(e.slideIndex>e.slideCount){i=(e.slidesToShow-(e.slideIndex-e.slideCount))*e.slideWidth*-1
o=(e.slidesToShow-(e.slideIndex-e.slideCount))*e.slideHeight*-1}else{i=e.slideCount%e.slidesToScroll*e.slideWidth*-1
o=e.slideCount%e.slidesToScroll*e.slideHeight*-1}}else if(e.slideCount%e.slidesToScroll!==0&&e.slideIndex+e.slidesToScroll>e.slideCount&&e.slideCount>e.slidesToShow){var r=e.slidesToShow-e.slideCount%e.slidesToScroll
i=r*e.slideWidth}e.centerMode&&(e.infinite?i+=e.slideWidth*Math.floor(e.slidesToShow/2):i=e.slideWidth*Math.floor(e.slidesToShow/2))
t=e.vertical?e.slideIndex*e.slideHeight*-1+o:e.slideIndex*e.slideWidth*-1+i
if(e.variableWidth===!0){var a
if(e.slideCount<=e.slidesToShow||e.infinite===!1)n=s.default.findDOMNode(e.trackRef).childNodes[e.slideIndex]
else{a=e.slideIndex+e.slidesToShow
n=s.default.findDOMNode(e.trackRef).childNodes[a]}t=n?n.offsetLeft*-1:0
if(e.centerMode===!0){n=e.infinite===!1?s.default.findDOMNode(e.trackRef).children[e.slideIndex]:s.default.findDOMNode(e.trackRef).children[e.slideIndex+e.slidesToShow+1]
t=n?n.offsetLeft*-1:0
t+=(e.listWidth-n.offsetWidth)/2}}return t}},2040:function(e){"use strict"
var t={WebkitTapHighlightColor:"rgba(0,0,0,0)",WebkitTouchCallout:"none",WebkitUserSelect:"none",KhtmlUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none",cursor:"pointer"}
e.exports=t},2041:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&s)for(var a in s)void 0===n[a]&&(n[a]=s[a])
else n||(n=s||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),c=0;c<r;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),u=n(1),d=i(u),p=n(6),m=i(p),f=n(54),h=(i(f),n(5)),g=i(h),v=n(886),y=i(v),b=n(2084),_=i(b),w=function(e){function t(e){o(this,t)
return s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}r(t,e)
c(t,[{key:"_getColumnClassNames",value:function(){var e=g.default.getTheme().get("name"),t=(0,m.default)("#s-content").hasClass("side-menu-opened")?(0,m.default)(window).width()-220:(0,m.default)(window).width(),n=void 0,i=void 0
switch(e){case"persona":if(t>727&&t<=875){n="columns five alpha"
i="columns seven omega"}else{n="columns six alpha"
i="columns six omega"}break
case"onyx_new":if(t>875){n="columns seven"
i="columns six"}else{n="columns eight"
i="columns eight"}break
case"ion":case"sleek":if(t>1400){n="columns eight"
i="columns six"}else if(t>1100){n="columns eight"
i="columns seven"}else{n="columns eight"
i="columns eight"}break
case"minimal":n="columns eight"
i="columns eight"
break
default:if(t>875){n="columns seven offset-one"
i="columns seven"}else{n="columns eight"
i="columns eight"}}return{imgColumnClassName:n,infoColumnClassName:i}}},{key:"_renderProductsAsRow",value:function(){var e=this._getColumnClassNames(),t=this.props,n=(t.products,t.pageId),i=t.hasMultipleProducts,o=t.settings,s=t.cartData,r=t.layout,c=t.fromProductPage,u=this.props.products.map(function(t,a){var u={product:t,pageId:n,hasMultipleProducts:i,fromProductPage:c,settings:o,cartData:s,imgColumnClassName:e.imgColumnClassName,infoColumnClassName:e.infoColumnClassName,layout:r}
return d.default.createElement(y.default,l({},u,{key:a}))})
return a("div",{className:"s-ecommerce-row-view-wrapper"},void 0,u)}},{key:"_renderProductsAsCard",value:function(){var e=this._getColumnClassNames(),t=this.props,n=t.products,i=t.pageId,o=t.hasMultipleProducts,s=t.settings,r=t.cartData,a=t.layout,l=t.changeToDetailMode,c=t.changeToNormalMode,u=t.fromProductPage,p={products:n,pageId:i,hasMultipleProducts:o,settings:s,cartData:r,imgColumnClassName:e.imgColumnClassName,infoColumnClassName:e.infoColumnClassName,layout:a,changeToDetailMode:l,changeToNormalMode:c,fromProductPage:u}
return d.default.createElement(_.default,p)}},{key:"render",value:function(){var e=void 0
"row"===this.props.layout?e=this._renderProductsAsRow():"card"===this.props.layout&&(e=this._renderProductsAsCard())
return a("div",{},void 0,a("div",{className:"s-ecommerce-products-wrapper "+(this.props.isLoading?"loading":"")},void 0,!1,e))}}])
return t}(d.default.Component)
t.default=w
e.exports=t.default},2043:function(e,t,n){(function(i){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var l,c,u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),d=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&s)for(var a in s)void 0===n[a]&&(n[a]=s[a])
else n||(n=s||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),c=0;c<r;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),p=n(1),m=o(p),f=n(6),h=o(f),g=n(3),v=o(g),y=n(14),b=o(y),_=n(66),w=o(_),E=n(175),C=o(E),x=n(54),N=(o(x),n(332)),k=(o(N),n(29)),S=o(k),P=function(e){var t=e.category,n=e.currentCategory,i=e.mobile,o=e.index,s=e.onClickFn
return d("div",{className:"category-link-item-wrapper",onClick:s},void 0,d("a",{className:(0,b.default)("category-link-item",{selected:n===t.id||n===t.name,"no-hover":i})},o,t.name))},T=(l=w.default.decorate(C.default),l(c=function(e){function t(e){s(this,t)
var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.state={showMore:!1,changePosition:!1,mobile:!1}
n._onClickShowMore=n._onClickShowMore.bind(n)
n._onClickShowLess=n._onClickShowLess.bind(n)
n._changePosition=n._changePosition.bind(n)
return n}a(t,e)
u(t,[{key:"componentWillMount",value:function(){this._shrinkIndex=999
this._updateBar=v.default.debounce(this._updateBar.bind(this),50)}},{key:"componentDidMount",value:function(){this._updateBar()
this._changePosition();(0,h.default)(window).on("resize",this._updateBar)
this.setState({mobile:S.default.isMobile()})}},{key:"componentDidUpdate",value:function(e,t){var n=this
e.categories.length!==this.props.categories.length&&this._updateBar()
!t.changePosition&&this.state.changePosition&&this.setTimeout(function(){var e=(0,h.default)(n.refs.list).find(".top-list"),t=e.find(".selected")
t.length&&e.scrollLeft(e.scrollLeft()+t.offset().left-e.offset().left-10)
n.setState({changePosition:!1})},10)}},{key:"componentWillUnmount",value:function(){(0,h.default)(window).off("resize",this._updateBar)}},{key:"_changePosition",value:function(){this.setState({changePosition:!0,showMore:!1})}},{key:"_onClickShowMore",value:function(){this.setState({showMore:!0})}},{key:"_onClickShowLess",value:function(){this.setState({showMore:!1})}},{key:"_updateBar",value:function(){var e=this,t=0
this._shrinkIndex=999
this.forceUpdate()
var n=(0,h.default)(this.refs.list).width()
this.setTimeout(function(){(0,h.default)(e.refs.list).find(".check-list .category-link-item").each(function(i,o){t+=(0,h.default)(o).outerWidth(!0)
if(n<=t+50){e._shrinkIndex=i
return!1}})
e.forceUpdate()},100)}},{key:"render",value:function(){var e=this,t=this.props,n=t.changeCategory,o=t.sbClass,s=t.isCategoryIdExist,r=t.categoryType,a=this.props.currentCategory,l=this.state,c=l.showMore,u=l.mobile,p=v.default.cloneDeep("blog"===r?this.props.categories:this.props.categories.filter(function(e){return e.products_count>0}))
p.unshift({name:i("Ecommerce|All"),id:"all"})
s(a)||(a="all")
return m.default.createElement("div",{className:(0,b.default)("s-category-bar s-font-body clearfix "+(o||""),{shrinked:this._shrinkIndex<p.length}),ref:"list"},!1,u&&d("div",{className:"category-list"},void 0,d("div",{className:"top-bar check-list "+(c?"hide-top-bar":"")},void 0,d("div",{className:"top-list"},void 0,p.map(function(e,t){return d(P,{currentCategory:a,category:e,index:t,mobile:u,onClickFn:function(){return n(e.id)}})}))),this._shrinkIndex<p.length&&!c&&d("a",{className:"show-more-link mobile-link",onClick:this._onClickShowMore},void 0,d("i",{className:"fa fa-angle-down"})),c&&p.map(function(t,i){return d(P,{currentCategory:a,category:t,index:i,mobile:u,onClickFn:function(){n(t.id)
e._changePosition()}})}),this._shrinkIndex<p.length&&c&&d("a",{className:"show-more-link",onClick:this._onClickShowLess},void 0,d("i",{className:"fa fa-angle-up"}))),!u&&d("div",{className:"category-list check-list"},void 0,p.map(function(t,i){return i<e._shrinkIndex&&d(P,{currentCategory:a,category:t,index:i,mobile:u,onClickFn:function(){n(t.id)}})}),this._shrinkIndex<p.length&&!c&&d("a",{className:"show-more-link",onClick:this._onClickShowMore},void 0,d("i",{className:"fa fa-angle-down"})),c&&p.slice(this._shrinkIndex,p.length).map(function(e,t){return d(P,{currentCategory:a,category:e,index:t,mobile:u,onClickFn:function(){n(e.id)}})}),this._shrinkIndex<p.length&&c&&d("a",{className:"show-more-link",onClick:this._onClickShowLess},void 0,d("i",{className:"fa fa-angle-up"}))))}}])
return t}(m.default.Component))||c)
t.default=T
e.exports=t.default}).call(t,n(9))},2044:function(e,t,n){e.exports=n(4)(472)},2061:function(e,t,n){"use strict"
var i,o,s,r,a,l,c,u,d,p,m,f=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t
return-1}
a=n(1)
l=n(13)
i=n(6)
u=n(3)
o=n(15)
r=n(29)
d=n(36)
m=n(318)
s=n(137)
p=n(2115)
c=o.createPageComponent({displayName:"VideoBgContent",bobcatPropTypes:{data:{videoHtml:a.PropTypes.string,videoUrl:a.PropTypes.string,className:a.PropTypes.string,style:a.PropTypes.object}},observedProps:["videoHtml"],getBobcatDefaultProps:function(){return{data:{videoHtml:""}}},_removeIframe:function(){var e
e=i(l.findDOMNode(this))
return e.find("iframe").remove()},_isSliderCloneComponent:function(){var e,t,n
e=i(l.findDOMNode(this))
t=e.closest(".slick-track").find(".slick-slide").length-2
n=e.closest(".slick-slide")
return n.length>0&&("-1"===n.attr("data-index")||n.attr("data-index")===t+"")},componentDidMount:function(){return this._isSliderCloneComponent()?this._removeIframe():this._setupBgVideo()},componentDidUpdate:function(e){if(e.videoHtml!==this.dtProps.videoHtml&&!this._isSliderCloneComponent())return this._setupBgVideo()},componentWillUnmount:function(){var e,t,n
if(!this._isSliderCloneComponent()&&null!=(null!=(n=this._video.frame)?n.youTubePlayer:void 0)){"function"==typeof(e=this._video.frame.youTubePlayer).stopVideo&&e.stopVideo()
"function"==typeof(t=this._video.frame.youTubePlayer).clearVideo&&t.clearVideo()
this._video.frame.isRemoved=!0
return u.remove(window.youTubeVideoBgList,function(e){return function(t){return t===e._video.frame}}(this))}},afterLayoutChange:function(){return this._setupBgVideo()},_setupBgVideo:function(){var e,t,n,o,a,c,p,m
d.Event.unsubscribe(this._token)
this._video||(this._video={})
e=i(l.findDOMNode(this))
if(e.length)if(r.isMobile())i(".s-bg-video").removeClass("s-bg-video video-bg").addClass("s-bg-image")
else{window.clearInterval(null!=(c=this._video.frame)?c.loopTimer:void 0)
m=function(t){return function(){var n,o,s,r,a
a=(t.dtProps.videoHtml||"").replace("&origin=","&origin="+i.url().attr("base")).replace(/^(https?):/,"")
e.html(a)
if(""!==a){n=e.find("iframe")
n.length||(n=e.find("video"))
t._video.frame=n
t._video.type=a.indexOf("youtube.com")!==-1?"youtube":a.indexOf("vimeo.com")?"vimeo":"mp4"
if(n.length){"youtube"===t._video.type&&n.addClass("youtube-video")
r=e.closest(".slide, #s-header, .s-blog-header")
o=e.closest(".video-bg")
"static"!==(s=o.css("position"))&&"initial"!==s||o.css("position","relative")
o.children().each(function(){var e,t,n
e=i(this)
window.edit_page.v4?"static"!==(t=e.css("position"))&&"initial"!==t||e.hasClass("s-section-editor-wrapper")||e.css("position","relative"):"static"!==(n=e.css("position"))&&"initial"!==n||e.css("position","relative")
if((parseInt(e.css("z-index"),10)||1)<3)return e.css("z-index",3)})
o.find(".video-bg-wrap").css("z-index",1)
t._resizeFn&&i(window).off("resize",t._resizeFn)
return t._resizeFn=u.debounce(function(){var e,i,s,a
i=Math.max(r.outerHeight(),o.height())
a=Math.max(r.outerWidth(),o.width())
s=(a/i).toFixed(2)
e=function(){var e,t,o,r,l,c,u
n.css({position:"absolute",top:0,left:0})
e=parseInt(n.attr("height"),10)
u=parseInt(n.attr("width"),10)
c=(u/e).toFixed(2)
if(c>s){t=i+100
l=(i+100)*c}else{t=(a+100)/c
l=a+100}r=(i-t)/2
o=(a-l)/2
return n.css({height:t+"px",width:l+"px",top:r+"px",left:o+"px"})}
e()
return window.setTimeout(function(){if(i!==Math.max(r.height(),o.height()))return t._resizeFn()},50)},100)}}}}(this)
a=function(e){return function(){var t,n,o,r,l,c
switch(e._video.type){case"youtube":c=e._video.frame
window.youTubeVideoBgList||(window.youTubeVideoBgList=[])
f.call(window.youTubeVideoBgList,c)>=0||window.youTubeVideoBgList.push(c)
window.onYouTubeIframeAPIReady=function(){var e,t,n,i,o
if(null!=(null!=(i=window.YT)?i.Player:void 0)){o=window.youTubeVideoBgList
e=function(e){var t
t=new window.YT.Player(e.attr("id"),{videoId:e.attr("id").split("_")[0],height:e.attr("height"),width:e.attr("width"),events:{onReady:function(t){var n
e.player=n=t.target
s.get("enableSoundForVideoBg")||n.setVolume(0)
n.setLoop(!0)
e.duration=n.getDuration()
e.loopTimer=null
e.startLoop=function(){window.clearInterval(this.loopTimer)
return this.loopTimer=window.setInterval(function(e){return function(){return e.isRemoved?window.clearInterval(e.loopTimer):e.player.seekTo(0)}}(this),1e3*(this.duration-1))}
return e.startLoop()},onStateChange:function(t){var n,i
try{if(t.data===window.YT.PlayerState.PLAYING){e.css("opacity",1)
e.closest(".video-bg-wrap").addClass("no-bg")}if((i=t.data)===window.YT.PlayerState.ENDED||i===window.YT.PlayerState.PAUSED){t.target.playVideo()
return e.startLoop()}}catch(e){n=e}}}})
return e.youTubePlayer=t}
for(t=0,n=o.length;t<n;t++){c=o[t]
e(c)}return window.youTubeVideoBgList=[]}}
if(null==window.YT)return i("body").append(i("<script src='https://www.youtube.com/iframe_api'></script>"))
break
case"vimeo":o={method:"setVolume",value:"0"}
t={method:"addEventListener",value:"pause"}
r={method:"play"}
n=function(e,n){var i,s
null==n&&(n=!0)
s=e.attr("src").split("?")[0]
s="https:"+s.replace(/^https?:/,"")
try{e[0].contentWindow.postMessage(JSON.stringify(t),s)
if(n)return e[0].contentWindow.postMessage(JSON.stringify(o),s)}catch(e){i=e}}
l=function(e){var t,n
e.css("opacity",1)
n=e.attr("src").split("?")[0]
n="https:"+n.replace(/^https?:/,"")
try{return e[0].contentWindow.postMessage(JSON.stringify(r),n)}catch(e){t=e}}
return i(window).bind("message",function(t){var i
if(t.originalEvent.origin.match(/player\.vimeo\.com/)){i=JSON.parse(t.originalEvent.data)
switch(i.event){case"ready":a=!s.get("enableSoundForVideoBg")
n(e._video.frame,a)
l(e._video.frame)
return[1e3,2e3,5e3,1e4].forEach(function(t){return setTimeout(function(){return l(e._video.frame)},t)})
case"pause":return l(e._video.frame)}}})}}}(this)
m()
a()
null!=window.YT&&window.onYouTubeIframeAPIReady()
if(this._resizeFn){p=[100,500,1e3,2e3,5e3]
for(t=0,o=p.length;t<o;t++){n=p[t]
window.setTimeout(this._resizeFn,n)}i(window).on("resize",this._resizeFn)
return this._token=d.Event.subscribe("Section.changed",function(e){return function(){return e._resizeFn()}}(this))}}},render:function(){return p.apply(this)}})
c.WaypointLazy=m(c,{noWrapper:!0})
e.exports=c.WaypointLazy},2062:function(e,t,n){(function(t){"use strict"
function i(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n
return e}var o,s,r,a,l,c
r=n(1)
s=n(15)
l=n(2033)
c=n(30)
a=s.createPageComponent({displayName:"RepeatableItem",bobcatPropTypes:(o={data:{children:r.PropTypes.oneOfType([r.PropTypes.object,r.PropTypes.array]),binding:r.PropTypes.object.isRequired,components:r.PropTypes.object},designer:{index:r.PropTypes.number.isRequired,vertical:r.PropTypes.bool,outerView:r.PropTypes.bool,hasEditorOpened:r.PropTypes.bool.isRequired,parentSize:r.PropTypes.number.isRequired,className:r.PropTypes.string}},i(o,"data",{isArranging:r.PropTypes.bool,parentId:r.PropTypes.string}),i(o,"callback",{onMoveUp:r.PropTypes.func,onMoveDown:r.PropTypes.func,onDeleteItem:r.PropTypes.func}),o),getBobcatDefaultProps:function(){return{designer:{vertical:!1,outerView:!1,className:""},data:{isArranging:!1}}},_clickDeleteButton:function(e){return this.props.onDeleteItem(e)},componentDidMount:function(){this.showMoveOverlay=!1
return this.showDeleteOverlay=!1},onMouseEnterMoveButton:function(){this.showMoveOverlay=!0
return this.forceUpdate()},onMouseLeaveMoveButton:function(){this.showMoveOverlay=!1
return this.forceUpdate()},onMouseEnterDeleteButton:function(){this.showDeleteOverlay=!0
return this.forceUpdate()},onMouseLeaveDeleteButton:function(){this.showDeleteOverlay=!1
return this.forceUpdate()},_renderNativeEditorButtons:function(){return r.createElement("div",{className:"native-controls"},this.dsProps.parentSize>1?r.createElement("div",{className:"f-s-repeatable-item-order-indicator"},this.props.index+1):void 0,r.createElement("div",{className:"native-buttons"},r.createElement("div",{className:"s-repeatable-delete-button f-s-repeatable-delete-button main-button",title:t("Remove this item"),onClick:this._clickDeleteButton.bind(null,this.dsProps.index),onMouseEnter:this.onMouseEnterDeleteButton,onMouseLeave:this.onMouseLeaveDeleteButton},r.createElement("span",null),r.createElement("img",{src:c.cdnAssetPath("/images/icons/native/ic_delete_nog@3x.png")})),this.props.index>0&&r.createElement(l,{onTap:this.props.onMoveUp.bind(this,this.props.index),className:"f-s-repeatable-move-button f-s-repeatable-move-button--up main-button"},r.createElement("span",null),r.createElement("img",{src:c.cdnAssetPath("/images/icons/native/ic_down_arrow_white@3x.png")})),this.props.index+1<this.props.parentSize&&r.createElement(l,{onTap:this.props.onMoveDown.bind(this,this.props.index),className:"f-s-repeatable-move-button f-s-repeatable-move-button--down main-button"},r.createElement("span",null),r.createElement("img",{src:c.cdnAssetPath("/images/icons/native/ic_down_arrow_white@3x.png")}))))},_renderEditorButtons:function(){return this.dsProps.hasEditorOpened?void 0:r.createElement("div",{className:"buttons"},this.dsProps.parentSize>1?r.createElement("div",{className:"s-repeatable-move-button",title:t("Drag to reorder"),onMouseEnter:this.onMouseEnterMoveButton,onMouseLeave:this.onMouseLeaveMoveButton}):void 0,r.createElement("div",{className:"s-repeatable-delete-button",title:t("Remove this item"),onClick:this._clickDeleteButton.bind(null,this.dsProps.index),onMouseEnter:this.onMouseEnterDeleteButton,onMouseLeave:this.onMouseLeaveDeleteButton},r.createElement("div",{className:"delete-button-wrap"},r.createElement("div",{className:"delete-button-confirm"},t("Sure?")))))},render:function(){var e
e=function(e){return function(t){null==t&&(t="")
return r.createElement("div",{className:"s-component-editor-wrapper"+t},e._renderEditorButtons(),e.showMoveOverlay||e.showDeleteOverlay||e.props.isArranging?r.createElement("div",{className:"s-component-overlay s-repeatable-overlay"+(e.showMoveOverlay||e.showDeleteOverlay||e.props.isArranging?" visible":"")+(e.showDeleteOverlay?" warning":"")}):void 0)}}(this)
return r.createElement("div",{"data-sorting-index":this.props.index,className:this.props.className+" s-repeatable-item"},void 0,this.props.children,void 0)}})
e.exports=a}).call(t,n(9))},2063:function(e,t,n){"use strict"
var i,o,s,r,a,l,c,u,d,p,m,f,h,g
l=n(1)
c=n(13)
h=n(3)
o=n(11)
s=n(2044)
i=n(15)
g=n(30)
m=n(335)
f=n(2096)
p=n(2062)
a=n(67)
r=n(57)
d={displayName:"Repeatable",bobcatPropTypes:{data:{children:l.PropTypes.oneOfType([l.PropTypes.object,l.PropTypes.array]),binding:l.PropTypes.object.isRequired,components:l.PropTypes.object,list:s.list.isRequired},designer:{className:l.PropTypes.string,sortableContainment:l.PropTypes.string,sortableContainmentSelector:l.PropTypes.string}},statics:{hasContent:function(e){var t
t=e.get("list").size
return t>0}},getBobcatDefaultProps:function(){return{designer:{className:"",sortableContainment:"parent"}}},hasContent:function(){return u.hasContent(this.getDefaultBinding())},componentDidUpdate:function(e){},_onClickSave:function(){this.updateState("normal")
return this.savePage()},_isFirst:function(e){return 0===e},_isLast:function(e){return this.props.list.size===e+1},_navigateToItem:function(e){var t,n,i,o
t=$(this.refs.repeatable)
n=t.find(".s-repeatable-item").eq(e)
o=(window.innerHeight-n.height())/2
o<0&&(o=20)
i=n.offset().top-o
return r.navigateToPosition(i)},_renderChildren:function(){return l.Children.map(this.props.children,function(e){return function(t){var n
if((null!=t?t.type:void 0)===p){n=Object.assign({},{onMoveUp:function(t){var n,i,o,s
n=e.props.list
if(0!==n.size&&!e._isFirst(t)){i=function(){s=[]
for(var e=0,t=n.size;0<=t?e<t:e>t;0<=t?e++:e--)s.push(e)
return s}.apply(this)
o=[i[t],i[t-1]],i[t-1]=o[0],i[t]=o[1]
a.reorderRepeatable(i,e.getDefaultBinding().sub("list"))
e.savePage()
return e._navigateToItem(t-1)}},onMoveDown:function(t){var n,i,o,s
n=e.props.list
if(!e._isLast(t)&&0!==n.size){i=function(){s=[]
for(var e=0,t=n.size;0<=t?e<t:e>t;0<=t?e++:e--)s.push(e)
return s}.apply(this)
o=[i[t+1],i[t]],i[t]=o[0],i[t+1]=o[1]
a.reorderRepeatable(i,e.getDefaultBinding().sub("list"))
e.savePage()
return e._navigateToItem(t+1)}},onDeleteItem:function(t){e._deleteItem(t)
return e.savePage()},isArranging:e.isState("editor")})
return l.cloneElement(t,n)}return t}}(this))},render:function(){var e,t,n
e=this.getDefaultBinding()
t=function(t){return function(){var n,i
i=e.get("list").size
n=t.isState("editor")}}(this)
n=function(e){return function(){return l.createElement("div",null,e.props.children)}}(this)
return l.createElement("div",{className:this.props.className+" s-repeatable",ref:"repeatable"},!1,n())}}
u=i.createPageComponent(d)
e.exports=u},2064:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var i=n(3)
t.imageDataForSaving=function(e){var t={},n=e.getMeta(),o=n.backgroundSizing,s=n.backgroundClassName
if(o||s){if(s){var r=i.trim(s)
switch(r){case"strikingly-light-text strikingly-text-overlay":case"strikingly-text-overlay strikingly-light-text":case"overlay":t.textColor="overlay"
break
case"strikingly-light-text":case"light":t.textColor="light"
break
case"strikingly-dark-text":case"dark":t.textColor="dark"
break
default:t.textColor="light"}}t.sizing="cover"
i.indexOf(["cover","contain","tile","center"],o)!==-1&&(t.sizing=o)}return Object.assign({},e.dataToSave("background"),{videoHtml:""},t)}
t.dataForEmptyBackground=function(){return{w:null,h:null,storage:null,storageKey:null,format:null,url:"",textColor:"light",videoUrl:"",videoHtml:""}}},2065:function(e,t,n){(function(t){"use strict"
var i,o,s,r,a,l,c,u,d,p,m,f,h,g,v,y,b,_,w,E,C,x,N,k,S
w=n(1)
S=n(318)
r=n(12)
k=n(14)
E=n(13)
x=n(3)
i=n(6)
s=n(15)
g=n(18)
c=n(85)
b=n(16)
_=n(5)
u=n(180)
h=n(54)
y=n(44)
a=n(29)
m=n(246)
p=n(88)
f=n(2041)
d=n(2072)
C=n(175)
v=n(177).Link
o=n(65)
N=!1
l=s.createPageComponent({displayName:"Ecommerce",mixins:[y("editor"),C],bobcatPropTypes:{data:{text:w.PropTypes.string,category:w.PropTypes.oneOfType([w.PropTypes.string,w.PropTypes.number]),binding:w.PropTypes.object}},getBobcatDefaultProps:function(){return{data:{category:"all"}}},componentWillMount:function(){this._changeCategory=this._changeCategory.bind(this)
this._onCategoryChange=this._onCategoryChange.bind(this)
return this.initMeta({currentCategory:this.dtProps.category,nextCategory:this.dtProps.category,currentPage:1,detailMode:!1})},componentDidMount:function(){this._loadProductsFromServer()
h.getFistLoadingState("settings")&&c.getEcommerceSettings({pageId:_.getId()})
h.getFistLoadingState("categories")&&c.getEcommerceCategories({pageId:_.getId()})
this._token=m.register(function(e){return function(t){var i
switch(t.actionType){case p.ActionTypes.GET_ECOMMERCE_PRODUCTS_SUCCESS:e.setMeta("currentCategory",e.getMeta("nextCategory"))
if(!N){N=!0
i=n(179)
i.init()
return i.trackEcommerceBuyerEvent(r.getKeenIoEcommerceBuyerLanding())}}}}(this))
this._onCategoryChangeListenId=h.getCategoiresBinding().addListener("",this._onCategoryChange)
return i(window).on("resize.ecommerce",o.debounce(function(e){return function(){return e.forceUpdate()}}(this),300))},componentDidUpdate:function(e){if(this._getRenderCategory(this.dtProps.category)!==this._getRenderCategory(e.category)||e.category!==this.dtProps.category){if("all"===this._getRenderCategory(this.dtProps.category)||"all"===this.dtProps.category){this.setMeta("nextCategory","all")
this.setMeta("currentCategory","all")
this.setMeta("currentPage",1)}return this._loadProductsFromServer()}},componentWillUnmount:function(){m.unregister(this._token)
h.getCategoiresBinding().removeListener(this._onCategoryChangeListenId)
return i(window).off("resize.ecommerce")},_onCategoryChange:function(){return this.setTimeout(function(e){return function(){return e._loadProductsFromServer()}}(this),10)},_getProductsData:function(){return h.getProducts(this._getRenderCategory(this.dtProps.category),this.getMeta("currentPage"))},_getEditBtnText:function(){var e
e=this._getProductsData().length
return t(0===e?"Ecommerce|Add Product":1===e?"Ecommerce|Manage Product":"Ecommerce|Manage Products")},_getRenderCategory:function(e){var t
t="all"===e?this.getMeta("currentCategory"):e
h.isCategoryIdExist(t)||(t="all")
return t},_loadProductsFromServer:function(e,t){null==e&&(e=1)
this.setMeta("currentPage",e)
return c.getEcommerceProducts({pageId:_.getId(),category:t||this._getRenderCategory(this.dtProps.category),page:e})},_getCurrentPageNum:function(){return this.getMeta("currentPage")},_loadNextPage:function(){var e
e=this._getCurrentPageNum()
this.setMeta("currentPage",e+1)
return this._loadProductsFromServer(e+1)},_onClickEditor:function(e){return g.openEcommerceManagerDialog(e)},_changeCategory:function(e){this.setMeta("nextCategory",e)
return this._loadProductsFromServer(1,e)},_changeToDetailMode:function(){return this.setMeta("detailMode",!0)},_changeToNormalMode:function(){return this.setMeta("detailMode",!1)},_getCategoryBarProps:function(){return{currentCategory:this.getMeta("nextCategory"),changeCategory:this._changeCategory,categories:h.getCategories()}},_getWrapperProps:function(){return{products:this._getProductsData(),pageId:_.getId(),hasMultipleProducts:h.getProducts().length>=2,settings:h.getSettings(),cartData:u.getCart(),layout:this.props.layout||"row",category:this.props.category||"all",changeToDetailMode:this._changeToDetailMode,changeToNormalMode:this._changeToNormalMode}},render:function(){var e,n,i,o,s,a
this.observeBinding(h.getBinding())
this.observeBinding(u.getCartBinding())
s=h.getPagination(this.getMeta("currentCategory"))
e=this.getMeta("detailMode")
n=this._getEditBtnText()
o=h.getLoadingState("product")||h.getLoadingState("settings")||h.getLoadingState("category")
a="persona"===_.getTheme().get("name")?"":"sixteen columns"
i=r.getFromSiteToApp()
return w.createElement("div",{className:"s-component s-ecommerce",ref:"root"},w.createElement("div",{className:"s-ecommerce-content"},h.getCategories().length>0&&("all"===this.dtProps.category||!h.isCategoryIdExist(this.dtProps.category))&&w.createElement("div",{className:"persona"===_.getTheme().get("name")?"":"sixteen columns",style:{display:e?"none":"block"}},w.createElement(d,Object.assign({sbClass:this.props.sbClass},this._getCategoryBarProps()),w.createElement("div",{className:"s-component-editor-wrapper"},w.createElement("div",{className:k("s-component-overlay",{visible:r.getInWeChat()}),onClick:function(e){return function(){return e._onClickEditor({tab:"category"})}}(this)},w.createElement("div",{className:"overlay"},w.createElement("div",{className:"center"},w.createElement("span",null,t("Ecommerce|Manage Categories")))))))),o&&w.createElement("div",{className:k("s-loading-wrapper",{"relative-wrapper":!this._getProductsData().length})},w.createElement("div",{className:"s-loading"})),w.createElement(f,Object.assign({},this._getWrapperProps(),{isLoading:o}),w.createElement("div",{className:"s-component-editor-wrapper"},w.createElement("div",{className:"s-component-overlay"+(r.getInWeChat()?" visible":""),onClick:function(e){return function(){return e._onClickEditor({category:e.dtProps.category,tab:"product"})}}(this)},w.createElement("div",{className:"overlay"},w.createElement("div",{className:"center"},w.createElement("span",null,n)))))),s&&s.totalPages>=2&&(i?w.createElement("div",{className:"s-ecommerce-pagination"},w.createElement(v,{className:"s-ecommerce-pagination-item s-font-body",to:"/store/page?category="+this.dtProps.category},t("Ecommerce|View more"))):w.createElement("div",{className:"s-ecommerce-pagination"},s.totalPages>this._getCurrentPageNum()&&w.createElement("span",{className:"s-ecommerce-pagination-item s-font-body",onClick:this._loadNextPage},t("Ecommerce|Show more")),this._getCurrentPageNum()>1&&w.createElement("span",{className:"s-ecommerce-pagination-item s-font-body",onClick:function(e){return function(){return e.setMeta("currentPage",1)}}(this)},t("Ecommerce|Show less")))),void 0))}})
l.WaypointLazy=S(l)
e.exports=l}).call(t,n(9))},2066:function(e,t,n){"use strict"
var i,o,s,r,a
s=n(1)
r=n(13)
a=n(3)
i=n(6)
o=s.createClass({displayName:"JQSlide",componentWillAppear:function(e){return this.componentWillEnter(e)},componentWillEnter:function(e){var t
t=i(r.findDOMNode(this))
return t.slideDown(300,"easeInOutQuart",e)},componentWillLeave:function(e){var t
t=i(r.findDOMNode(this))
return t.slideUp(200,"easeInOutQuart",e)},render:function(){return this.props.component(Object.assign({},this.props,{style:{display:"none"}}))}})
e.exports=o},2067:function(e,t,n){"use strict"
var i,o,s,r,a,l,c,u,d,p,m,f,h
i=n(6)
p=n(3)
o=n(65)
u=n(5)
h=n(36)
d=n(17)
l=n(2095)
s=n(844)
c=n(18)
a=n(2076)
o=n(65)
f=function(e){return c.addImageAsset({img:e})}
m=function(e,t){return s.saveFileRecord({file:e,success:function(n){var i,o
e.url=null!=(i=n.data.uploadedFile)?i.url:void 0
e.id=null!=(o=n.data.uploadedFile)?o.id:void 0
h.Event.publish("FileLibrary.addToFileLibrary",e)
return t.itemUploaded(e)},error:function(){var e
e=I18n.t("js.pages.edit.errors.upload_fail")
return o.customAlert?o.customAlert(e):window.alert(e)}})}
r={pick:function(e){var t,n,s,r,u
null==e&&(e={})
s=p.extend({itemSelected:function(){},itemUploaded:function(){},error:function(){}},e.handlers)
n=e.dialogType||"image"
t=function(){switch(n){case"image":return l.IMAGE_ASSET_DIALOG.DEFAULT_OPTIONS
case"file":return l.FILE_ASSET_DIALOG.DEFAULT_OPTIONS
case"video":return{}}}()
t.saveRecord=!0
e=p.extend(p.cloneDeep(t),e)
r=e.saveRecord
switch(n){case"image":u={success:function(e,t){r&&f(e.dataForBackend)
s.itemUploaded(t,e)
c.closeDialog("imageAssetDialog")
return o.ui.closeModal(i("#asset-lib-dialog"))},error:function(e,t){return s.error(e,t)}}
a.setType(e.iconLibComponents)
break
case"file":u={success:function(e){r&&m(e,s)
c.closeDialog("fileAssetDialog")
return o.ui.closeModal(i("#file-lib-dialog"))},error:function(){return function(e,t){var n
s.error(e,t)
n=I18n.t("js.pages.edit.errors.upload_fail")
return o.customAlert?o.customAlert(n):window.alert(n)}}(this)}
break
case"video":u={}
a.setType("video")}return c.openAssetDialog({assetDialogOptions:e,requestedObject:u,dialogType:n})}}
h.Event.subscribe("Editor.OpenFileUploaderV4",function(e,t){return r.pick(t)})
h.Event.subscribe("Editor.OpenImageUploaderV4",function(e,t){return r.pick(t)})
e.exports=r},2068:function(e,t,n){(function(i){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var s=n(6),r=o(s),a=n(320),l=o(a),c={onlyCloseBtnOpts:{infobar:!1,fullScreen:!1,thumbs:!1,slideShow:!1,closeBtn:!0},getCustomArrowTpl:function(){return'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="s-fancybox-btn s-fancybox-btn--left" data-fancybox-previous><button class="s-fancybox-arrow s-fancybox-arrow--left" title="Previous"></button></div><div class="s-fancybox-btn s-fancybox-btn--right" data-fancybox-next><button class="s-fancybox-arrow s-fancybox-arrow--right" title="Next"></button></div><div class="fancybox-controls"><div class="fancybox-buttons"><button data-fancybox-close class="fancybox-button fancybox-button--close" title="'+i("Close")+'"></button></div></div><div class="fancybox-slider-wrap"><div class="fancybox-slider"></div></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div><div class="fancybox-dot-nav-wrap"><ul class="fancybox-dot-nav"></ul><div class="fancybox-num-nav"></div></div></div>'},indicatorOnInit:function(e){c.clearRefs(e)
var t=e.group.length
t>20?c.numNavOnInit(e):c.dotNavOnInit(e)},clearRefs:function(e){e.$refs.dotNav=void 0
e.$refs.numNav=void 0},dotNavOnInit:function(e){e.$refs.dotNav=(0,r.default)(".fancybox-dot-nav")
for(var t=e.group.length,n=0;n<t;n++)e.$refs.dotNav.append("<li></li>")},numNavOnInit:function(e){e.$refs.numNav=(0,r.default)(".fancybox-num-nav")
var t=e.group.length,n=e.currIndex+1
e.$refs.numNav.html("<div>"+n+" / "+t+"</div>")},indicatorBeforeMove:function(e){e.$refs.dotNav&&c.dotNavBeforeMove(e)
e.$refs.numNav&&c.numNavBeforeMove(e)},dotNavBeforeMove:function(e){var t=e.$refs.dotNav.find("li")
t.removeClass("dot-nav__current")
t.eq(e.currIndex).addClass("dot-nav__current")},numNavBeforeMove:function(e){var t=e.$refs.numNav,n=e.group.length,i=e.currIndex+1
t.html("<div>"+i+" / "+n+"</div>")},getCaption:function(e,t){var n=t.type.toLowerCase(),i=(0,r.default)(this)
switch(n){case"image":i.title=l.default.IMAGE_TITLE(i)
i.desc=l.default.IMAGE_DESCRIPTION(i)
i.title.length&&i.desc.length?i.title+=" - "+i.desc:i.desc.length&&(i.title=i.desc)
break
case"video":i.title=i.data("description")}return i.title},transformVideoSrc:function(e){e.parent().find('a.item[data-type="video"]').each(function(){var e=(0,r.default)(this)
if(e.data("html")){var t=e.data("html").replace(/(src="[^"]*)"/,function(e,t){return t+'&autoplay=1"'}),n=(0,r.default)(t),i=n.attr("src")
e.data("src",i)
e.attr("href","javascript:;")
e.attr("data-type","")}})}}
t.default=c
e.exports=t.default}).call(t,n(9))},2069:function(e,t,n){"use strict"
var i,o,s,r,a,l,c
s=n(1)
r=n(3)
i=n(6)
o=n(15)
c=n(2087)
a=n(12)
l=n(2113)
e.exports=o.createPageComponent({displayName:"AsyncComponentWrapper",observedProps:["immediate"],bobcatPropTypes:{data:{binding:s.PropTypes.object},designer:{componentName:s.PropTypes.string.isRequired,componentProps:s.PropTypes.object,immediate:s.PropTypes.bool,preRender:s.PropTypes.oneOfType([s.PropTypes.object,s.PropTypes.func])},callbacks:{beforeLoadCb:s.PropTypes.func,loadedCb:s.PropTypes.func}},getBobcatDefaultProps:function(){return{designer:{immediate:!0}}},componentDidMount:function(){var e
if(a.getMobileViewEditor())switch(this.props.componentName){case"socialFeedManager":c.loadAsyncStore("socialFeedManager")}"function"==typeof(e=this.props).beforeLoadCb&&e.beforeLoadCb()
if(this.dsProps.immediate)return this._requestComponent()},componentDidUpdate:function(e){if(!this.requested&&!e.immediate&&this.dsProps.immediate)return this._requestComponent()},_requestComponent:function(){switch(this.props.componentName){case"ecommerce":n.e(47,function(e){return function(){var t
t=n(2065)
e._innerComponent=t.WaypointLazy
o.register("EcommerceComponent",t)
return e._startLoad()}}(this))
break
case"ecommerceBuy":n.e(28,function(e){return function(){e._innerComponent=n(2073)
return e._startLoad()}}(this))
break
case"socialFeedManager":n.e(46,function(e){return function(){e._innerComponent=n(2075)
return e._startLoad()}}(this))
break
case"socialFeedComponent":n.e(45,function(e){return function(){var t
t=n(2074)
e._innerComponent=t.WaypointLazy
o.register("SocialFeedComponent",t)
return e._startLoad()}}(this))}return this.requested=!0},_startLoad:function(){var e
this.forceUpdate()
return"function"==typeof(e=this.props).loadedCb?e.loadedCb():void 0},_preLoad:function(){var e
e=this.props.preRender?"function"==typeof this.props.preRender?this.props.preRender.apply(this):this.props.preRender:l.apply(this)
return e},_loadInnerComponent:function(){var e,t
e=this._innerComponent
t={}
null!=this.props.componentProps&&(t=this.props.componentProps)
return s.createElement(e,Object.assign({},t))},render:function(){return this._innerComponent?this._loadInnerComponent():this._preLoad()}})},2070:function(e,t,n){"use strict"
var i,o,s,r,a,l,c,u,d,p,m,f,h,g,v,y
u=n(3)
r=n(19).EventEmitter
s=n(59)
o=n(58)
l=n(2071)
i="social_feed_connection_event_id"
a="social_feed_feeds_event_id"
m=[]
d=[]
c=u.assign({},r.prototype,{emitConnections:function(){return this.emit(i,this.getAccounts())},addConnectionListener:function(e){return this.on(i,e)},removeConnectionListener:function(e){return this.removeListener(i,e)},emitFeeds:function(){return this.emit(a,this.getFeeds())},addFeedsListener:function(e){return this.on(a,e)},removeFeedsListener:function(e){return this.removeListener(a,e)},getAccounts:function(){return d},getFeeds:function(){return m}})
g=function(e){d=e
return c.emitConnections()}
y=function(e){var t,n,i
for(n=0,i=e.length;n<i;n++){t=e[n]
switch(t.provider){case"facebook":case"twitter":t.feeds=u.filter(t.feeds,function(e){return!!e.text}).slice(0,3)
break
case"instagram":t.feeds=t.feeds.slice(0,12)}}m=e
return c.emitFeeds()}
f=function(e){return l.getAccounts({pageId:e.pageId,success:function(t){"function"==typeof e.success&&e.success(t)
return g(t.data.accounts)},fail:function(){return"function"==typeof e.fail?e.fail():void 0}})}
p=function(e){return l.deleteAccount({pageId:e.pageId,accountId:e.accountId,success:function(t){"function"==typeof e.success&&e.success(t)
return g(t.data.accounts)},fail:function(){return"function"==typeof e.fail?e.fail():void 0}})}
v=function(e){return l.updateFacebookPage({pageId:e.pageId,accountId:e.accountId,data:e.data,success:function(t){return"function"==typeof e.success?e.success(t):void 0},fail:function(){return"function"==typeof e.fail?e.fail():void 0}})}
h=function(e){return l.getFeeds({pageId:e.pageId,success:function(t){"function"==typeof e.success&&e.success()
return y(t.data.accounts)},fail:function(){return"function"==typeof e.fail?e.fail():void 0}})}
c.editorDispatchToken=s.register(function(e){switch(e.actionType){case o.ActionTypes.UPDATE_SOCIAL_FEED_ACCOUNTS:return g(e.data)
case o.ActionTypes.UPDATE_SOCIAL_FEEDS:return y(e.data)
case o.ActionTypes.GET_SOCIAL_FEED_ACCOUNTS:return f(e.options)
case o.ActionTypes.DELETE_SOCIAL_FEED_ACCOUNT:return p(e.options)
case o.ActionTypes.GET_SOCIAL_FEEDS:return h(e.options)
case o.ActionTypes.UPDATE_SOCIAL_FEED_FACEBOOK_PAGE:return v(e.options)}})
e.exports=c},2071:function(e,t,n){"use strict"
var i,o,s,r,a,l
i=n(6)
r=n(17)
o=n(18)
a=r.SOCIAL_FEED.ACCOUNTS
l=r.SOCIAL_FEED.FEEDS
s=function(){function e(){}e.prototype.getAccounts=function(e){return i.ajax({url:a(e.pageId),type:"GET",success:function(t){return"function"==typeof e.success?e.success(t):void 0},error:function(t){return"function"==typeof e.fail?e.fail(t):void 0}})}
e.prototype.deleteAccount=function(e){return i.ajax({url:a(e.pageId,e.accountId),type:"DELETE",success:function(t){return"function"==typeof e.success?e.success(t):void 0},error:function(t){return"function"==typeof e.fail?e.fail(t):void 0}})}
e.prototype.updateFacebookPage=function(e){return i.ajax({url:r.SOCIAL_FEED.updateFacebookPage(e),type:"POST",data:e.data,success:function(t){return"function"==typeof e.success?e.success(t):void 0},error:function(t){return"function"==typeof e.fail?e.fail(t):void 0}})}
e.prototype.getFeeds=function(e){return i.ajax({url:l(e.pageId),type:"GET",success:function(t){return"function"==typeof e.success?e.success(t):void 0},error:function(t){return"function"==typeof e.fail?e.fail(t):void 0}})}
return e}()
e.exports=new s},2072:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),l=n(1),c=i(l),u=n(2043),d=i(u),p=n(54),m=i(p),f=n(332),h=i(f),g=function(e){function t(){o(this,t)
return s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}r(t,e)
a(t,[{key:"render",value:function(){return c.default.createElement(d.default,this.props)}}])
return t}(c.default.Component)
t.default=(0,h.default)(g,[],function(){return{isCategoryIdExist:function(e){return m.default.isCategoryIdExist(e)}}})
e.exports=t.default},2076:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(2089),s=i(o),r=n(2088)
t.default={setInitialType:function(e){s.default.dispatch({actionType:r.ActionTypes.SET_INITIAL_TYPE,type:e})},setType:function(e){s.default.dispatch({actionType:r.ActionTypes.SET_TYPE,type:e})},setCurrentCategoryIndex:function(e){s.default.dispatch({actionType:r.ActionTypes.SET_CURRENT_CATEGORY_INDEX,categoryIndex:e})},manualSearchUnsplash:function(e){s.default.dispatch({actionType:r.ActionTypes.MANUAL_SEARCH_UNSPLASH,query:e})},fetchMoreUnsplashAssets:function(){s.default.dispatch({actionType:r.ActionTypes.FETCH_MORE_UNSPLASH_ASSETS})}}
e.exports=t.default},2077:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(55),s=n(2092),r=i(s),a=n(5),l=i(a),c=function(){var e={},t={mobileActions:l.default.getMobileActions(),defaultEmail:l.default.getUser().get("email")}
return Object.assign({},e,t)},u=function(){var e={}
return e}
r.default.sharedProps=(0,o.sharedPropsBuilder)(function(){return[l.default.getBinding()]},c,u)
t.default=r.default
e.exports=t.default},2078:function(e,t,n){(function(i){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&s)for(var a in s)void 0===n[a]&&(n[a]=s[a])
else n||(n=s||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),c=0;c<r;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),r=n(1),a=(o(r),n(240)),l=o(a)
t.default=function(e){var t=l.default.escapedValue(e.address).replace(/\n/g,"<br/>"),n=l.default.escapedValue(e.hours).replace(/\n/g,"<br/>"),i=l.default.applyWordBreaks(l.default.escapedValue(e.email))
return s("div",{className:"s-contact-info-list"},void 0,e.address&&s("div",{className:"s-contact-info-item s-font-body"},void 0,s("div",{className:"s-contact-info-icon"},void 0,s("div",{className:"fa fa-map-marker"})),s("div",{className:"s-contact-info-text",dangerouslySetInnerHTML:{__html:t}})),!1,e.hours&&s("div",{className:"s-contact-info-item s-font-body"},void 0,s("div",{className:"s-contact-info-icon"},void 0,s("div",{className:"fa fa-clock-o"})),s("div",{className:"s-contact-info-text",dangerouslySetInnerHTML:{__html:n}})),e.phone&&s("div",{className:"s-contact-info-item s-font-body s-show-in-small-screen"},void 0,s("a",{href:"tel:"+e.phone},void 0,s("div",{className:"s-contact-info-icon"},void 0,s("div",{className:"entypo-mobile"})),s("div",{className:"s-contact-info-text"},void 0,e.phone))),e.phone&&s("div",{className:"s-contact-info-item s-font-body s-show-in-large-screen"},void 0,s("div",{className:"s-contact-info-icon"},void 0,s("div",{className:"entypo-mobile"})),s("div",{className:"s-contact-info-text"},void 0,e.phone)),!1,e.email&&s("div",{className:"s-contact-info-item s-font-body"},void 0,s("a",{href:"mailto:"+e.email},void 0,s("div",{className:"s-contact-info-icon"},void 0,s("div",{className:"entypo-mail"})),s("div",{className:"s-contact-info-text",dangerouslySetInnerHTML:{__html:i}}))),!1)}
e.exports=t.default}).call(t,n(9))},2079:function(e,t,n){(function(i){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&s)for(var a in s)void 0===n[a]&&(n[a]=s[a])
else n||(n=s||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),c=0;c<r;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),r=n(1),a=o(r),l=n(28),c=o(l),u=n(15),d=o(u),p=n(44),m=o(p)
t.default=d.default.createPageComponent({displayName:"ContactInfoEditor",mixins:[(0,m.default)("editor")],bobcatPropTypes:{data:{address:a.default.PropTypes.string,binding:a.default.PropTypes.object}},_getOnChangeFn:function(e){var t=this
return function(n){t.setData(e,n.target.value.trim())}},render:function(){var e=c.default.DOM.textarea,t=c.default.DOM.input
return s("div",{className:"form"},void 0,s("div",{className:"title"},void 0,i("Editor|Contact Info")),s("div",{className:"fields"},void 0,s("div",{className:"link-input"},void 0,s("div",{className:"label-wrap"},void 0,s("div",{className:"fa fa-map-marker icon"}),i("Editor|Address")),s(e,{rows:"2",maxLength:"120",className:"url",type:"text",name:"share_url",value:this.dtProps.address,onChange:this._getOnChangeFn("address")})),s("div",{className:"link-input"},void 0,s("div",{className:"label-wrap"},void 0,s("div",{className:"fa fa-clock-o icon"}),i("Editor|Hours")),s(e,{rows:"2",maxLength:"200",className:"url",type:"text",name:"share_url",placeholder:i("Editor|e.g. Mon-Fri 10am-5pm, Sat 1pm-5pm"),value:this.dtProps.hours,onChange:this._getOnChangeFn("hours")})),s("div",{className:"link-input"},void 0,s("div",{className:"label-wrap"},void 0,s("div",{className:"entypo-mobile icon"}),i("Editor|Phone")),s(t,{className:"url",type:"text",name:"share_url",value:this.dtProps.phone,onChange:this._getOnChangeFn("phone")})),s("div",{className:"link-input"},void 0,s("div",{className:"label-wrap"},void 0,s("div",{className:"entypo-mail icon"}),i("Editor|Email")),s(t,{className:"url",type:"text",name:"share_url",value:this.dtProps.email,onChange:this._getOnChangeFn("email")}))))}})
e.exports=t.default}).call(t,n(9))},2080:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(55),s=n(2093),r=i(s),a=n(5),l=i(a),c=n(12),u=i(c),d=function(){var e={isSxl:u.default.getIsSxl()},t={defaultLocation:l.default.getMobileActions().get("location")}
return Object.assign({},e,t)},p=function(){var e={}
return e}
r.default.sharedProps=(0,o.sharedPropsBuilder)(function(){return[l.default.getBinding()]},d,p)
t.default=r.default
e.exports=t.default},2081:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
t.default=void 0
var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),l=n(6),c=i(l),u=n(3),d=i(u),p=n(1),m=i(p),f=n(65),h=i(f),g=function(e){function t(){o(this,t)
return s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}r(t,e)
a(t,[{key:"componentDidMount",value:function(){var e=this
setTimeout(function(){e.props.fixHeight(e.refs.map)},100);(0,c.default)(window).on("resize.googleMaps",d.default.debounce(function(){e.props.fixHeight(e.refs.map)},100))
h.default.TH.Fixer.preventAppScrolling(this.refs.map)}},{key:"componentWillUnmount",value:function(){(0,c.default)(window).off("resize.googleMaps")}},{key:"render",value:function(){var e=this.props,t=e.address,n=e.isSxl,i=t,o="/c/apps",s=n?"baidu":"google",r=n?"/":"?loc="
!i&&n&&(i="上海")
i=window.encodeURIComponent(i)
var a=o+"/"+s+"_map"+r+i
return m.default.createElement("iframe",{ref:"map",id:"s-map",height:"250",scrolling:"no",src:a})}}])
return t}(m.default.Component)
t.default=g
e.exports=t.default},2082:function(e,t,n){(function(i){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&s)for(var a in s)void 0===n[a]&&(n[a]=s[a])
else n||(n=s||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),c=0;c<r;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),r=n(1),a=o(r),l=n(28),c=(o(l),n(15)),u=o(c),d=n(44),p=o(d)
t.default=u.default.createPageComponent({displayName:"GoogleMapsEditor",mixins:[(0,p.default)("editor")],bobcatPropTypes:{data:{address:a.default.PropTypes.string}},componentWillUnmount:function(){this.setData("address",this.refs.mapTextarea.value)},render:function(){var e=this.props.isSxl?"百度地图":i("Editor|Google Maps")
return s("div",{className:"form"},void 0,s("div",{className:"title"},void 0,e),s("div",{className:"fields"},void 0,s("div",{className:"link-input"},void 0,s("div",{className:"label-wrap"},void 0,s("div",{className:"fa fa-map-marker"}),i("Editor|Address")),a.default.createElement("textarea",{ref:"mapTextarea",className:"url",type:"text",name:"share_url",defaultValue:this.dtProps.address}))))}})
e.exports=t.default}).call(t,n(9))},2083:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(3),s=(i(o),n(55)),r=n(2094),a=i(r)
a.default.sharedProps=(0,s.sharedPropsBuilder)(function(){return[]})
t.default=a.default
e.exports=t.default},2084:function(e,t,n){(function(i){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},c=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&s)for(var a in s)void 0===n[a]&&(n[a]=s[a])
else n||(n=s||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),c=0;c<r;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),d=n(1),p=o(d),m=n(13),f=o(m),h=n(5),g=o(h),v=n(85),y=(o(v),n(886)),b=o(y),_=n(2085),w=o(_),E=n(29),C=o(E),x=n(87),N=o(x),k=999,S="third",P="sixteen",T=function(e){function t(e){s(this,t)
var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n._bind("_onClickBackToCards","_onClickNextProduct","_onClickPrevProduct","_onClickShowDetail")
n.state={currentPageIndex:1,currentProductIndex:0,showDetail:!1}
return n}a(t,e)
u(t,[{key:"componentWillMount",value:function(){var e=this.props.themeName
switch(e){case"persona":P="twelve alpha"
S="six"}}},{key:"componentDidUpdate",value:function(e,t){this.state.showDetail&&t.showDetail!==this.state.showDetail&&this._adjustSectionPosition()}},{key:"_bind",value:function(){for(var e=this,t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i]
n.forEach(function(t){return e[t]=e[t].bind(e)})}},{key:"_adjustSectionPosition",value:function(){if(C.default.isSmallScreen()){var e=$(f.default.findDOMNode(this)).closest(".s-ecommerce-container, .s-persp-container, .s-persona-content")
e.length&&$(document).scrollTop(e.offset().top-40)}else{var t=$(f.default.findDOMNode(this)).closest("li.slide").find(".section-anchor")
0===t.length&&(t=$(f.default.findDOMNode(this)).closest(".s-section"))
t.length&&$(document).scrollTop(t.offset().top)}}},{key:"_createCurrentProductProps",value:function(){var e=this.props,t=e.products,n=e.hasMultipleProducts,i=e.layout,o=e.settings,s=e.cartData,r=e.imgColumnClassName,a=e.infoColumnClassName
return{product:t[this.state.currentProductIndex],hasMultipleProducts:n,layout:i,settings:o,cartData:s,imgColumnClassName:r,infoColumnClassName:a}}},{key:"_onClickShowDetail",value:function(e){this.setState({showDetail:!0,currentProductIndex:e})
this.props.changeToDetailMode()}},{key:"_onClickBackToCards",value:function(){this.setState({showDetail:!1})
this.props.changeToNormalMode()}},{key:"_onClickNextProduct",value:function(){var e=this.state.currentProductIndex+1,t=Math.ceil((e+1)/k)
this.setState({currentProductIndex:e,currentPageIndex:t})}},{key:"_onClickPrevProduct",value:function(){var e=this.state.currentProductIndex-1,t=Math.ceil((e+1)/k)
this.setState({currentProductIndex:e,currentPageIndex:t})}},{key:"_onClickGoToIndex",value:function(e){this.setState({currentPageIndex:e})}},{key:"_renderNavigator",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=null,n=null
this.state.currentProductIndex>0&&(t=c("a",{className:"prev-product-btn s-font-body",onClick:this._onClickPrevProduct},void 0,c("i",{className:"fa fa-angle-left",style:{marginRight:"5px"}}),i("Ecommerce|Previous")))
this.state.currentProductIndex<this.props.products.length-1&&(n=c("a",{className:"next-product-btn s-font-body",onClick:this._onClickNextProduct},void 0,i("Ecommerce|Next"),c("i",{className:"fa fa-angle-right",style:{marginLeft:"5px"}})))
return c("div",{className:"s-ecommerce-card-view-detail-header columns "+P+" "+e},void 0,c("a",{className:"s-common-link back-btn left s-font-body",onClick:this._onClickBackToCards},void 0,c("i",{className:"fa fa-long-arrow-left",style:{marginRight:"5px"}}),i("Ecommerce|View all products")),c("div",{className:"right"},void 0,t,n))}},{key:"render",value:function(){var e=this,t=k*(this.state.currentPageIndex-1),n=this.props.products.slice(t,t+k)
n=n.map(function(i,o){var s=S,r=e.props.themeName
switch(r){case"persona":s=s+" "+(o%2===0?"alpha":"omega")
break
default:s=4===n.length||2===n.length?"eight":"third"}var a={product:i,layout:e.props.layout,hasMultipleProducts:e.props.products.length>=2,columnClass:s,settings:e.props.settings,onClickBuy:e._onClickShowDetail,pageId:e.props.pageId}
return p.default.createElement(w.default,l({},a,{key:o,index:o+t}))})
var i=Math.ceil(this.props.products.length/k),o={left:this.state.showDetail?"-100%":"0"},s={margin:1===i?"0":"30px 0",height:this.state.showDetail?"1px":"auto"},r={height:this.state.showDetail?"auto":"1px"}
return c("div",{className:"s-ecommerce-card-view-wrapper",style:o},void 0,c("div",{className:"s-ecommerce-card-view-cards-wrapper"},void 0,c("div",{className:"s-ecommerce-card-view-cards",style:s},void 0,n)),p.default.createElement("div",{className:"s-ecommerce-card-view-detail",style:r,ref:"productDetail"},this._renderNavigator(),this.state.showDetail?p.default.createElement(b.default,this._createCurrentProductProps()):null,this._renderNavigator("bottom")))}}])
return t}(p.default.Component)
t.default=(0,N.default)(T,[],function(){return{themeName:g.default.getThemeName()}})
e.exports=t.default}).call(t,n(9))},2085:function(e,t,n){(function(i){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var l,c,u=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&s)for(var a in s)void 0===n[a]&&(n[a]=s[a])
else n||(n=s||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),c=0;c<r;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),p=n(1),m=o(p),f=n(13),h=o(f),g=n(6),v=o(g),y=n(30),b=n(88),_=o(b),w=n(238),E=o(w),C=n(54),x=(o(C),n(12)),N=o(x),k=n(57),S=o(k),P=n(85),T=(o(P),n(65)),L=o(T),M=n(549),O=o(M),I=n(135),D=(o(I),c=l=function(e){function t(){s(this,t)
var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))
e._bind("_onClickShowProductPage")
return e}a(t,e)
d(t,[{key:"componentDidMount",value:function(){var e=this,t=(0,v.default)(h.default.findDOMNode(this.refs.imageWrapper)),n=t.find("img")
this._adjustImageSize(t,n)
n.load(function(){return e._adjustImageSize(t,n)});(0,v.default)(window).resize(L.default.debounce(function(){return e._adjustImageSize(t,n)},300))}},{key:"_bind",value:function(){for(var e=this,t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i]
n.forEach(function(t){return e[t]=e[t].bind(e)})}},{key:"_adjustImageSize",value:function(e,t){var n=e.outerWidth(),i=e.outerHeight(),o=n/i,s=t.prop("naturalWidth"),r=t.prop("naturalHeight"),a=s/r
if(o>a){var l=n+10,c=l/a
t.width(l)
t.height(c)
t.css({top:(i-c)/2+"px",left:(n-l)/2+"px"})}else{var u=i+10,d=u*a
t.height(u)
t.width(d)
t.css({top:(i-u)/2+"px",left:(n-d)/2+"px"})}}},{key:"_getOutOfStock",value:function(){return this.props.product.variations.every(function(e){return 0===+e.quantity})}},{key:"_getProductImage",value:function(){var e=this.props.product.picture[0]
return("undefined"!=typeof e?e.thumbnailUrl:void 0)||(0,y.cdnAssetPath)(_.default.DEFAULT_PRODUCT_IMAGE)}},{key:"_onClickShowProductPage",value:function(){var e=this.props,t=e.product,n=(e.pageId,e.onClickBuy),i=e.index
N.default.getProductPage()?S.default.gotoProductPage(t.id,this.context.fromStorePage):n(i)}},{key:"render",value:function(){var e=this.props,t=e.product,n=e.settings,o=this._getOutOfStock(),s=n.estimatedDelivery,r=E.default.getPriceScope(t),a=void 0
a=i(s?"Ecommerce|Pre-Order":"Ecommerce|Buy now")
return u("div",{className:"s-ecommerce-card-view-card "+this.props.columnClass+" columns"},void 0,u("div",{className:"s-ecommerce-card-view-card-container"},void 0,u("div",{onClick:this._onClickShowProductPage},void 0,m.default.createElement("div",{className:"s-ecommerce-card-view-card-image "+(o?"out-of-stock":"in-stock"),ref:"imageWrapper"},u(O.default,{src:this._getProductImage()}),o&&u("div",{className:"s-ecommerce-card-view-card-stock-warning s-font-body"},void 0,i("Ecommerce|Out of Stock")),u("div",{className:"s-ecommerce-card-view-card-image-overlay"}),u("div",{className:"s-ecommerce-card-view-card-image-button"},void 0,u("a",{className:"s-common-button s-font-body"},void 0,a))),u("div",{className:"s-ecommerce-card-view-card-name s-font-body"},void 0,u("div",{dangerouslySetInnerHTML:{__html:this.props.product.name}})),u("div",{className:"s-ecommerce-card-view-card-price s-font-body"},void 0,r))))}}])
return t}(m.default.Component),l.contextTypes={fromStorePage:m.default.PropTypes.bool},c)
t.default=D
e.exports=t.default}).call(t,n(9))},2086:function(e,t,n){"use strict"
function i(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l,c,u,d,p,m,f,h,g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),b=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&s)for(var a in s)void 0===n[a]&&(n[a]=s[a])
else n||(n=s||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),c=0;c<r;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),_=n(6),w=o(_),E=n(3),C=o(E),x=n(1),N=o(x),k=n(66),S=o(k),P=n(175),T=o(P),L=n(28),M=o(L),O=n(2038),I=o(O),D=n(334),B=o(D),A=n(29),j=o(A),H=n(2091),R=o(H),U=n(33),F=i(U),V=n(44),z=o(V),W=n(532),K=o(W),G=n(845),q=o(G),$=n(57),Y=o($),X=n(836),J=(o(X),n(36)),Q=o(J),Z=n(2114),ee=o(Z),te=440,ne=(l=S.default.decorate(q.default.Mixin),c=S.default.decorate(K.default),u=S.default.decorate(M.default.Mixin),d=S.default.decorate((0,z.default)("editor")),p=S.default.decorate(T.default),l(m=c(m=u(m=d(m=p(m=(h=f=function(e){function t(e){s(this,t)
var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.getCurrentSlide=function(){return n.getData("_current")}
n._addListenerToBinding=function(){if(n._listenerId){n._clearTimer()
n.getDefaultBinding().removeListener(n._listenerId)}n._listenerId=n.getDefaultBinding().addListener("_current",function(e){var t=e.getCurrentValue();("undefined"==typeof t?"undefined":v(t))||(t=n._currentIndex)
n.refs.slick&&(n.mTimeoutId=n.setTimeout(function(){if(n.isInPrevious){n.refs.slick.slickPrev()
n.isInPrevious=!1}else if(n.isInNext){n.refs.slick.slickNext()
n.isInNext=!1}else n.refs.slick.slickGoTo(t)},100))})}
n._stopAutoplayWhenPlayMedia=function(){if(!n._stopAutoPlayInitialized){var e=n._getSliderEl(),t=e.find(".s-video-content iframe")
if(t&&t.length>0){(0,R.default)(e,n.handleChangeAutoPlay)
n._stopAutoPlayInitialized=!0}}}
n._unsubscribeEvent=function(){n.tokenArr.every(function(e){Q.default.Event.unsubscribe(e)})}
n._respondTo=function(e){var t=Q.default.Event.subscribe(e,function(){n.forceUpdate()})
n.tokenArr.push(t)}
n._registSliderEvent=function(){n.tokenArr=[]
n._respondTo("Editor.SideMenu.Opened")
n._respondTo("Editor.SideMenu.Closed")
n._respondTo("Slider.ContentChanged");(0,w.default)(window).resize(n._renderSliderHeight)
n._bindWindowScroll();(0,w.default)(window).bind("repaint-slider",function(){})}
n._getSliderEl=function(){return(0,w.default)(n.refs.iosslider)}
n._checkIsInAnimation=function(){return n.isInAnimation}
n._previous=function(){if(!n._checkIsInAnimation()){n.isInAnimation=!0
var e=n._modCurrentSlide(-1)
n.setData("_current",e)
n.isInPrevious=!0}}
n._next=function(){if(!n._checkIsInAnimation()){n.isInAnimation=!0
var e=n._modCurrentSlide(1)
n.setData("_current",e)
n.isInNext=!0}}
n._modCurrentSlide=function(e){var t=n.getData("_current"),i=n.props.children,o=t+e,s=n._mod(o,i.length)
return s}
n._mod=function(e,t){var n=e%t
return n<0?n+t:n}
n._getEditorProps=function(){return C.default.extend({},n.props,{binding:n.getDefaultBinding()})}
n._showNavButtons=function(){return n.getMeta("showNavButtons")}
n._renderEditor=function(){return null}
n._goToSpecifySlide=function(e){n.isInAnimation=!0
n.setData("_current",e)}
n._autoScrollPage=function(e){if(!j.default.isSmallScreen()){var t=n._getSliderEl().offset().top-(0,w.default)(window).scrollTop()<0
t&&n._shouldScroll(e)&&Y.default.navigateToHash("#"+(n._getSliderSection()+1))}}
n._shouldScroll=function(e){var t=(0,w.default)(n._getSliderEl().find(".slick-slide[data-index="+e+"]")).find(".inner").outerHeight(!0)
return t>(0,w.default)(window).height()}
n._getSliderSection=function(){return n.props.index}
n.handleChangeAutoPlay=function(e){n.setMeta("autoplay",e)}
n._getChildren=function(){var e=n.props.children,t=n.props.auto_play,i=e.length
if(i<=0)return null
var o={accessibility:!1,infinite:1!==i,slidesToShow:1,draggable:!1,speed:j.default.isMobile()?500:750,slidesToScroll:1,arrows:!1,pauseOnHover:!1,dots:!1,autoplay:!0,autoplaySpeed:t,lazyLoad:!1,beforeChange:function(e,t){n._transitionBannerSize(e,t)},afterChange:function(e){n.isInAnimation=!1
n.setData("_current",e)
n._adaptiveCurrentSlide()
n._currentIndex=e}},s=e.map(function(e){return b("div",{},e.key,e)})
return N.default.createElement(I.default,g({ref:"slick"},o),s)}
n._shouldSliderFullScreen=function(){var e=n.props.fullscreen
return e}
n._shouldFullscreenSliderOnlyFirstSection=function(){var e=n.props.fullscreenSliderOnlyFirstSection
return!(!e||!n._checkSliderIsFirstSection())}
n._checkSliderIsFirstSection=function(){var e=n._getSliderSection()
return!(!n.getMeta("ready")||0!==e)}
n._useDarkOverlays=function(){var e=!0,t=n.getData("list")
if(t.size>0){var i=n.getCurrentSlide(),o=t.get(i)
if(!o)return
var s=o.getIn(["components","background1"]),r=B.default.hasContent(s),a="dark"!==s.get("textColor")
r&&a&&(e=!1)}return e}
n._getMaxForegroundHeightInList=function(){var e=n._getSliderEl(),t=0,i=0
e.find(".item").each(function(e,n){var o=(0,w.default)(n).find(".inner").first()
t=o.outerHeight(!0)
i=Math.max(t,i)})
t=null
return i}
n._getLimitedMaxHeight=function(){return(0,w.default)(window).width()<772?2*(0,w.default)(window).height():1.5*(0,w.default)(window).height()}
n._getSliderHeightByContent=function(){var e=te,t=n._getLimitedMaxHeight(),i=(0,w.default)(window).height()-(0,w.default)("#header-container").outerHeight()-130,o=n._getMaxForegroundHeightInList()
if(n._shouldFullscreenSliderOnlyFirstSection())return Math.max(i,o)
if(n.props.fullscreen)return Math.max(o,(0,w.default)(window).height())
if(o<e)return e
if(o>t){console.info("[Slide] your content of slider is bigger than the max limited height (",t,")")
return t}return o}
n._getSlideHeightByImageRatio=function(e){var t=n.getData("list").get(e).getIn(["components","background1"]).toObject(),i=!1
if(!t||!t.w||!t.h){var o=n.asyncImageLoadedShapeArr[e]
if(o)t=o
else{t={w:16,h:9}
i=!0}}return{height:n._getFullViewImageHeight(t),isHardCode:i}}
n._getFullViewImageHeight=function(e){if(e&&e.w&&e.h){var t=n._getSliderEl().width(),i=e.h*t/e.w
return Math.ceil(i)}return 440}
n._transitionBannerSize=function(e){var t=n.slideHeightArr[e],i=n._getSliderEl().find(".slick-list")
i.css({height:t-1+"px"})
i.find(".slick-slide").each(function(e,n){(0,w.default)(n).find(".item").css({height:t+"px",minHeight:t+"px"})})}
n._resizeSliderInEditor=function(){var e=n.getCurrentSlide(),t=n.slideHeightArr[e],i=n._getSliderEl().find(".slider")
if(t<240)if("editor"===n.props.imgEditorState){n._adaptiveSlideByIndex(240)
i.addClass("img-editor-open")}else{n._adaptiveSlideByIndex(t)
n.setTimeout(function(){i.removeClass("img-editor-open")},200)}}
n._adaptiveSlideByIndex=function(e){var t=n._getSliderEl().find(".slick-list")
t.css({height:e-1+"px"})
t.find(".slick-slide.slick-active").each(function(t,n){(0,w.default)(n).find(".item").css({height:e+"px",minHeight:e+"px"})})}
n._getImageShapByLoad=function(e){var t=n.getData("list")
e%=t.size
var i=t.get(e).getIn(["components","background1"]),o=F.addProtocol(i.get("url"))
return new Promise(function(t,i){var s=new Image
s.src=o;(0,w.default)(s).one("load",function(){if(s.width&&s.height){n.asyncImageLoadedShapeArr[e]={w:s.width,h:s.height}
var o=n._getFullViewImageHeight({w:s.width,h:s.height})
t(o)}else i("Miss the size of image")})})}
n._asyncSetSlideHeight=function(e){n._getImageShapByLoad(e).then(function(t){n.slideHeightArr[e]=t
n._adaptiveCurrentSlide()}).catch(function(e){console.info("[Banner] func/asyncSetSlideHeight: ",e)})}
n._getCurrentLayout=function(){var e=n.getCurrentSlide(),t=n.props.getSliderLayouts()
return t[e]}
n._resetSlideHeight=function(e){var t="noForeground",i=n.props.getSliderLayouts(),o=0
if(i[e]===t){var s=n._getSlideHeightByImageRatio(e)
o=s.height
s.isHardCode&&n._asyncSetSlideHeight(e)}else o=n._getSliderHeightByContent()
return Math.floor(o)}
n._adaptiveCurrentSlide=function(){var e=n.getCurrentSlide(),t=n._resetSlideHeight(e)
n._adaptiveSlideByIndex(t)
n.slideHeightArr[e]=t}
n._renderSliderHeight=function(){var e=n._getSliderEl().find(".slick-list"),t=n.getData("list").size,i=n.getCurrentSlide()
n.slideHeightArr=Array.from(new Array(t),function(){return 0})
e.find(".slick-slide").each(function(o,s){var r=parseInt((0,w.default)(s).attr("data-index"),10)
r===-1&&(r=t-1)
r===t&&(r=0)
var a=n._resetSlideHeight(r);(0,w.default)(s).find(".item").css({height:a+"px",minHeight:a+"px"})
i===r&&e.css({height:a-1+"px"})
n.slideHeightArr[r]=a})}
n._onScroll=n._onScroll.bind(n)
return n}a(t,e)
y(t,[{key:"componentWillMount",value:function(){this.initMeta({ready:!1,autoplay:!1,showNavButtons:!0,isScrolling:!1})
this.setData("_current",0)
this.isInAnimation=!1
this.isInPrevious=!1
this.isInNext=!1
this.slideHeightArr=[]
this.asyncImageLoadedShapeArr=[]
this.tokenArr=[]
this._currentIndex=0}},{key:"componentDidMount",value:function(){this.updateMeta({ready:!0,showNavButtons:!j.default.isMobile()})
this._addListenerToBinding()
this._registSliderEvent()
this._renderSliderHeight()}},{key:"componentDidUpdate",value:function(e){this.isInAnimation||this._renderSliderHeight()
this._stopAutoplayWhenPlayMedia()
this.props.index!==e.index&&this._addListenerToBinding()}},{key:"componentWillUnmount",value:function(){this._unbindWindowScroll()
this._listenerId&&this.getDefaultBinding().removeListener(this._listenerId);(0,w.default)(window).off("resize",this._renderSliderHeight)
this._clearTimer()
this._unsubscribeEvent()}},{key:"_clearTimer",value:function(){if(this.mTimeoutId){clearTimeout(this.mTimeoutId)
this.mTimeoutId=void 0}}},{key:"_bindWindowScroll",value:function(){(0,w.default)(document).on("scroll",this._onScroll)}},{key:"_unbindWindowScroll",value:function(){(0,w.default)(document).off("scroll",this._onScroll)}},{key:"_onScroll",value:function(){var e=this
if(this.refs.slick&&!this.getMeta("isScrolling")){this.updateMeta({isScrolling:!0})
var t=function(e){return e.stopPropagation()},n=function n(){e.updateMeta({isScrolling:!1});(0,w.default)("body").off("touchend touchcancel touchleave",n)
e._getSliderEl().off("touchmove",t)}
this._getSliderEl().on("touchmove",t);(0,w.default)("body").on("touchend touchcancel touchleave",n)}}},{key:"render",value:function(){return ee.default.apply(this)}}])
return t}(N.default.Component),f.defaultProps={uiOutside:!1,fullscreen:!1,imgEditorState:""},h))||m)||m)||m)||m)||m)
e.exports=ne},2087:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var i={},o={loadAsyncStore:function(e){switch(e){case"socialFeedManager":i[e]=n(2070)}}}
t.default=o
e.exports=t.default},2088:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
t.ActionTypes=void 0
var o=n(178),s=i(o)
t.ActionTypes=(0,s.default)({SET_INITIAL_TYPE:null,SET_TYPE:null,SET_CURRENT_CATEGORY_INDEX:null,MANUAL_SEARCH_UNSPLASH:null,FETCH_MORE_UNSPLASH_ASSETS:null})},2089:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(134),s=i(o)
t.default=new s.default("AssetsDispatcher")
e.exports=t.default},2090:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(19),s=n(3),r=i(s),a=n(11),l=(i(a),n(59)),c=i(l),u=n(58),d=i(u),p={settings:{goal:1e4,paid:0,currencyCode:"CNY",data:{buttonText:"",thanksMessage:"",showProgress:!0}},state:{isFetching:!1},currencyFormat:{code:"CNY",symbol:"¥",decimal:".",thousand:",",precision:2,name:"Chinese Yuan"}},m="store_change_event",f=r.default.assign({},o.EventEmitter.prototype,{getData:function(){return p},emitChange:function(){this.emit(m,p)},addChangeListener:function(e){this.on(m,e)},removeChangeListener:function(e){this.removeListener(m,e)}})
f.editorDispatchToken=c.default.register(function(e){switch(e.actionType){case d.default.ActionTypes.GET_DONATION_SETTINGS:p.state.isFetching=!0
f.emitChange()
break
case d.default.ActionTypes.GET_DONATION_SETTINGS_SUCCESS:p.state.isFetching=!1
p.settings=e.settings
p.settings.goal=(p.settings.goal||0)/100
p.settings.paid=(p.settings.paid||0)/100
f.emitChange()
break
case d.default.ActionTypes.GET_DONATION_SETTINGS_FAIL:p.state.isFetching=!1
f.emitChange()}})
t.default=f
e.exports=t.default},2091:function(e,t){"use strict"
function n(e,t){function n(e){return JSON.stringify({method:"addEventListener",value:e,listener:o,context:"player.js",version:"0.0.10"})}function i(e){var n=e.originalEvent.data
if("string"==typeof n){try{n=JSON.parse(n)}catch(e){console.error(e)}if(n.listener===o)switch(n.event){case"play":t(!1)
break
case"pause":case"ended":t(!0)}}}if(window.postMessage){var o="listener-xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,n="x"===e?t:3&t|8
return n.toString(16)})
e.find(".s-video-content iframe").each(function(e,t){t.onload=function(){var e=t.src.match(/^(?:http:)?\/\/[^\/]+\//)[0]
if(/(embedly|embed\.ly)/.test(e)){t.contentWindow.postMessage(n("play"),e)
t.contentWindow.postMessage(n("pause"),e)
t.contentWindow.postMessage(n("ended"),e)}}})
$(window).on("message",function(e){i(e)})}}Object.defineProperty(t,"__esModule",{value:!0})
t.default=n
e.exports=t.default},2092:function(e,t,n){(function(i){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&s)for(var a in s)void 0===n[a]&&(n[a]=s[a])
else n||(n=s||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),c=0;c<r;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),a=n(1),l=o(a),c=n(15),u=o(c),d=n(64),p=o(d),m=n(44),f=o(m),h=n(68),g=o(h),v=n(2079),y=o(v),b=n(2078),_=o(b),w=n(550),E=o(w)
t.default=u.default.createPageComponent({displayName:"ContactInfo",mixins:[(0,f.default)("editor")],bobcatPropTypes:{data:{address:l.default.PropTypes.string,phone:l.default.PropTypes.string,email:l.default.PropTypes.string,hours:l.default.PropTypes.string,binding:l.default.PropTypes.object},internal:{_state2:l.default.PropTypes.string}},_getSaveButtonProps:function(){var e=this,t=n(536),i=t.sendReturnToNormalMessage
return{onClickCancel:function(){e._restoreCancelValue()
e.setData("_state2","normal")
e._afterClickCancel&&e._afterClickCancel()
i(e)},onClickSave:function(){e.setData("_state2","normal")
e.savePage()
i(e)}}},getBobcatDefaultProps:function(){return{internal:{_state2:"normal"}}},componentDidMount:function(){this.initMeta({showDeleteOverlay2:!1})},onMouseEnterDeleteButton:function(){this.setMeta("showDeleteOverlay2",!0)},onMouseLeaveDeleteButton:function(){this.setMeta("showDeleteOverlay2",!1)},onClickDeleteButton:function(){this.setMeta("showDeleteOverlay2",!1)
this.props.onDelete()},_onClickEditor:function(){"normal"===this.props._state2&&this.setData("_state2","editor")
window.DEBUG&&(window.DEBUG.activeComponent=this)
this._storeCancelValue()
this.afterClickEditor&&this.afterClickEditor()},_isMobileViewEditing:function(){return this.props.displayName==this.constructor.displayName?this.addIframeEditingClass():""},_renderEditor:function(e){return r("div",{className:"s-component-editor-wrapper"},void 0,r("div",{className:"buttons"},void 0,r("div",{className:"s-repeatable-delete-button",title:i("Editor|Remove title"),onClick:this.onClickDeleteButton,onMouseEnter:this.onMouseEnterDeleteButton,onMouseLeave:this.onMouseLeaveDeleteButton},void 0,r("div",{className:"delete-button-wrap"},void 0,r("div",{className:"delete-button-confirm"},void 0,i("Sure?"))))),"normal"===this.props._state2&&r("div",{className:"s-component-overlay"+(this.getMeta("showDeleteOverlay2")?" s-repeatable-overlay warning visible":"")+this._isMobileViewEditing(),onClick:this._onClickEditor},void 0,r("div",{className:"center"},void 0,!this._isMobileViewEditing()&&r("span",{},void 0,i("Edit")))),r(p.default,{},void 0,"editor"===this.props._state2&&r(g.default,{className:"s-component-editor"},"editor",r("div",{className:"component-editor google-maps-editor"},void 0,l.default.createElement(y.default,e),l.default.createElement(E.default,s({ref:"saveButtons"},this._getSaveButtonProps()))))))},render:function(){var e=this.props,t=e.address,n=e.phone,i=e.email,o=e.hours,s=e.binding,a={address:t,phone:n,email:i,hours:o,binding:s}
return r("div",{className:"s-component s-form s-contact-info-form"},void 0,!1,"normal"===this.props._state2&&r(p.default,{},void 0,r(g.default,{className:"s-component-content"},"content",l.default.createElement(_.default,a))))}})
e.exports=t.default}).call(t,n(9))},2093:function(e,t,n){(function(i){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&s)for(var a in s)void 0===n[a]&&(n[a]=s[a])
else n||(n=s||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),c=0;c<r;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),a=n(1),l=o(a),c=n(15),u=o(c),d=n(64),p=o(d),m=n(44),f=o(m),h=n(68),g=o(h),v=n(2082),y=o(v),b=n(2081),_=o(b),w=n(550),E=o(w)
t.default=u.default.createPageComponent({displayName:"GoogleMaps",mixins:[(0,f.default)("editor")],bobcatPropTypes:{data:{address:l.default.PropTypes.string},callbacks:{fixHeight:l.default.PropTypes.func}},_getSaveButtonProps:function(){var e=this
return{onClickCancel:function(){e.onClickCancel()},onClickSave:function(){e.updateState("normal")
var t=e.constructor.sharedProps().defaultLocation
e.props.address===t&&e.setData("address",null)
e.savePage()}}},componentDidMount:function(){this.initMeta({showDeleteOverlay:!1})},onMouseEnterDeleteButton:function(){this.setMeta("showDeleteOverlay",!0)},onMouseLeaveDeleteButton:function(){this.setMeta("showDeleteOverlay",!1)},onClickDeleteButton:function(){this.setMeta("showDeleteOverlay",!1)
this.props.onDelete()},_onClickEditor:function(){this.setData("displayName",this.constructor.displayName)
this.onClickEditor(this)},_isMobileViewEditing:function(){return this.props.displayName==this.constructor.displayName?this.addIframeEditingClass():""},_renderEditor:function(){var e=this.constructor.sharedProps()
return r("div",{className:"s-component-editor-wrapper"},void 0,r("div",{className:"buttons"},void 0,r("div",{className:"s-repeatable-delete-button",title:i("Editor|Remove title"),onClick:this.onClickDeleteButton,onMouseEnter:this.onMouseEnterDeleteButton,onMouseLeave:this.onMouseLeaveDeleteButton},void 0,r("div",{className:"delete-button-wrap"},void 0,r("div",{className:"delete-button-confirm"},void 0,i("Sure?"))))),!this.isState("editor")&&r("div",{className:"s-component-overlay"+(this.getMeta("showDeleteOverlay")?" s-repeatable-overlay warning visible":"")+this._isMobileViewEditing(),onClick:this._onClickEditor},void 0,r("div",{className:"center"},void 0,!this._isMobileViewEditing()&&r("span",{},void 0,i("Edit")))),r(p.default,{},void 0,this.isState("editor")&&r(g.default,{className:"s-component-editor"},"editor",r("div",{className:"component-editor google-maps-editor"},void 0,l.default.createElement(y.default,s({},this.props,e)),l.default.createElement(E.default,s({ref:"saveButtons"},this._getSaveButtonProps()))))))},render:function(){var e=this.constructor.sharedProps(),t=this.props.address
t=t||e.defaultLocation||""
return r("div",{className:"s-component s-form s-google-maps-form"},void 0,!1,!this.isState("editor")&&r(p.default,{},void 0,r(g.default,{className:"s-component-content"},"content",l.default.createElement(_.default,s({},this.props,e,{address:t})))))}})
e.exports=t.default}).call(t,n(9))},2094:function(e,t,n){(function(i){"use strict"
function o(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&s)for(var a in s)void 0===n[a]&&(n[a]=s[a])
else n||(n=s||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),c=0;c<r;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),a=n(1),l=s(a),c=n(28),u=s(c),d=n(64),p=s(d),m=n(2033),f=s(m),h=n(15),g=s(h),v=n(12),y=s(v),b=n(5),w=s(b),E=n(239),C=s(E),x=n(44),N=s(x),k=n(533),S=s(k),P=n(838),T=s(P),L=n(534),M=s(L),O=n(547),I=s(O),D=n(18),B=s(D),A=n(2066),j=s(A),H=n(2067),R=s(H),U=n(2064),F=n(837),V=s(F),z=n(56),W=o(z),K=n(245),G=(s(K),g.default.createPageComponent({displayName:"ImageLinkEditor",mixins:[(0,N.default)("editor"),T.default,S.default,I.default.enableAfterMount(),I.default.enableAfterUpdate()],bobcatPropTypes:{data:{url:M.default.url,textColor:l.default.PropTypes.oneOf(["dark","light","overlay"]),sizing:l.default.PropTypes.oneOf(["cover","contain","tile","center"]),backgroundVariation:l.default.PropTypes.string,videoUrl:l.default.PropTypes.string,videoHtml:l.default.PropTypes.string,stockKey:l.default.PropTypes.string,binding:l.default.PropTypes.object,h:l.default.PropTypes.number,w:l.default.PropTypes.number,s:l.default.PropTypes.number,storageKey:l.default.PropTypes.string,storage:l.default.PropTypes.oneOf(["ali","c","qn"]),linkUrl:l.default.PropTypes.string.isRequired,linkTarget:l.default.PropTypes.string.isRequired},designer:{warnningInfo:l.default.PropTypes.string,setStateFunc:l.default.PropTypes.func}},componentDidMount:function(){V.default.loadImageEditor()
this.setData("displayName",this.constructor.displayName)},_onClickSave:function(){this.savePage()
this.updateState("normal")},getBobcatDefaultProps:function(){return{data:{linkUrl:"",linkTarget:"_blank",warnningInfo:""}}},_onChangeUrl:function(e){this.updateData({linkUrl:e.target.value})
this.savePage()},_onChangeTarget:function(e){this.updateData({linkTarget:e.target.checked?"_blank":"_self"})
this.savePage()},_isNewTab:function(){return"_blank"===this.dtProps.linkTarget},_renderWarnningInfoIcon:function(){return r("div",{className:"show-pub-alert pub-alert"},void 0,r("a",{className:"page publish-button"},void 0,r("div",{className:"pub-alert-icon"},void 0,r("div",{className:"fa fa-circle"},void 0,r("div",{id:"unpubed-count",className:"pub-count"},void 0,"!")))))},_onClickEditImage:function(){var e=this
V.default.launchAviaryEditor({image:this.props,styles:this.props,imageDOM:this.refs.aviaryImage,onSaveCallback:function(t,n){B.default.uploadImageFromUrl({url:n,onDone:function(t,n,i){e._imageUploaded(i)}})},userPlan:C.default.getPlan()})},_getUrlForImageEditor:function(){var e=_.assign({},this.props,{s:10})
return W.createImage(e).getUrl(this.props.size,!0)},_onClickUpload:function(){R.default.pick({initialTabIdx:0,iconLibComponents:"background",from:"banner",handlers:{itemUploaded:this._imageUploaded,itemSelected:this._imageUploaded}})},_setImage:function(e){this.updateData((0,U.imageDataForSaving)(e))},_imageUploaded:function(e){/\.mp4$/.test(e.getUrl())?this.updateData(Object.assign((0,U.imageDataForSaving)(e),{videoHtml:VideoHelper.getVideoHtmlByUrl(e.getUrl(),1280,720),videoUrl:e.getUrl(),textColor:"light"})):this._setImage(e)
this.savePage()},_renderImgEditButoon:function(){if(!y.default.getIsSxl()||w.default.getIsImageEditorRollout())return r("div",{className:"clearfix mb"},void 0,r("div",{className:"s-btn small no-margin dark-gray",onClick:this._onClickEditImage},void 0,i("Edit Image")))},_afterClickEditor:function(){this.props.setStateFunc("editor")},_afterClickCancel:function(){this.props.setStateFunc("normal")},render:function(){var e=u.default.DOM.input,t=this.dtProps,n=t.linkUrl,o=t.warnningInfo,s=this.isIframeEditing()
return l.default.createElement("div",{ref:"componentDOM",className:"s-component s-linker"+this.addIframeEditingClass()},r("div",{className:"s-component-editor dark-bg",onClick:this.onToggleMobileViewEditorBox},void 0,o&&this._renderWarnningInfoIcon(),r(f.default,{className:"title small center clickable"+(s?" hidden":""),onTap:this.toggleEditor,rel:"tooltip-left","data-original-title":o?o:""},void 0,this.isState("editor")?r("div",{className:"minus"},void 0,r("i",{className:"entypo-down-open-mini"})):r("div",{className:"plus"},void 0,r("i",{className:"entypo-right-open-mini"})),i("Editor|Image & Link")),r(p.default,{},void 0,this.isState("editor")&&!0&&r(j.default,{component:l.default.DOM.div,className:"main-editor"},void 0,r("div",{className:"clearfix mb"},void 0,r("div",{className:"s-btn small no-margin dark-gray",onClick:this._onClickUpload},void 0,i("Upload Image"))),l.default.createElement("img",{style:{display:"none"},src:this._getUrlForImageEditor(),ref:"aviaryImage"}),this._renderImgEditButoon(),r("div",{className:"separator"},void 0,r("hr",{})),r("div",{className:"label-link"},void 0,i("Editor|Link Url"),r("br",{}),r("div",{},void 0,r(e,{type:"text",name:"url",value:n,onChange:this._onChangeUrl}))),r("div",{className:"label-target toggle-compression-checkbox"},void 0,r(e,{type:"checkbox",checked:this._isNewTab(),onChange:this._onChangeTarget}),i("Editor|Open in new tab")),r("div",{className:"separator"},void 0,r("hr",{})),r("div",{className:"clearfix"},void 0,r("div",{className:"s-btn green small done-button no-margin",onClick:this._onClickSave},void 0,i("Save")))))))}}))
t.default=G
e.exports=t.default}).call(t,n(9))},2095:function(e,t,n){(function(t){"use strict"
e.exports={IMAGE_ASSET_DIALOG:{FILE_PICKER:0,ASSET_LIB:1,ICON_LIB:2,DEFAULT_OPTIONS:{mode:"single",hideTabs:[],initialTabIdx:-1,iconLibComponents:"icon",saveRecord:!0,hideUrlUploader:!1}},FILE_ASSET_DIALOG:{FILE_PICKER:0,ASSET_LIB:1,DEFAULT_OPTIONS:{mode:"single",hideTabs:[],initialTabIdx:-1,saveRecord:!0}},PAGE_SETTINGS_DIALOG:{COLLABORATOR:{ROLES_ARR:function(){return[{value:"administrator",text:t("EditorSettings|Administrator")},{value:"editor",text:t("EditorSettings|Editor")},{value:"blogger",text:t("EditorSettings|Blogger")}]}}}}}).call(t,n(9))},2096:function(e,t,n){"use strict"
var i,o,s,r,a,l,c,u,d
i=n(6)
d=!1
u=function(){}
r=n(1)
a=n(13)
s=n(28)
c=n(3)
o=n(29)
l=r.createClass({displayName:"SimpleSortable",getDefaultProps:function(){return{sortableConfig:{},onReorder:function(){},beforeReorder:function(){},afterReorder:function(){},containment:"parent",className:""}},setupJqSortable:function(){var e,t
u()
e=c.clone(this.props.sortableConfig)
e.activate=this._handleStart
e.stop=this._handleDrop
o.isAndroid()&&(e.scroll=!1)
t=a.findDOMNode(this)
switch(this.props.containment){case"self":e.containment=t
break
case"parent":e.containment=t.parentElement}null!=this.props.containmentSelector&&(e.containment=i(t).closest(this.props.containmentSelector).get(0))
this.$jq=i(t)
return this.$jq.sortable(e)},componentDidMount:function(){return this.setupJqSortable()},componentDidUpdate:function(){},_handleStart:function(){this.props.beforeReorder(this)
return!0},_handleDrop:function(e,t){var n,o
o=this.$jq.sortable("toArray",{attribute:"data-sorting-index"})
n=t.item.attr("data-sorting-index")
i(t.item).css("z-index","initial")
this.$jq.sortable("cancel")
this.props.onReorder(o,n)
this.props.afterReorder(this.props.children)
return!0},render:function(){var e,t,n
n=c.find(this.props.children,function(e){return c.isArray(e)})
e=c.flatten(n||[this.props.children])
t=this.props.className||""
return r.createElement("div",{className:t,"data-list-index":this.props.index},e)}})
e.exports=l},2097:function(e,t,n){(function(t){"use strict"
var i,o,s,r,a,l,c,u,d,p,m,f,h,g,v,y
d=n(1)
a=null
p=n(13)
m=n(3)
i=n(6)
o=n(15)
u=n(5)
r=n(18)
c=n(44)
s=n(534)
l=n(894)
v=n(39)
y=n(896)
g=["id","value","htmlValue","selected_app_name","page_id","render_as_iframe","app_list"]
h={data:{id:d.PropTypes.oneOfType([d.PropTypes.string,d.PropTypes.number]),value:s.html,render_as_iframe:d.PropTypes.bool,selected_app_name:d.PropTypes.string,app_list:d.PropTypes.string,binding:d.PropTypes.object}}
f=function(){return{data:{render_as_iframe:!1,app_list:"{}"}}}
a=o.createPageComponent({displayName:"HtmlComponent",mixins:[c("editor")],bobcatPropTypes:h,getBobcatDefaultProps:f,componentWillMount:function(){this.initMeta({iframeSrcQ:0,canceled:!1})},componentDidMount:function(){l.startTimer()
this._injectHtml()
return this._resizeIFrame()},componentDidUpdate:function(e){},_hasId:function(e){return"number"==typeof e},_getId:function(){this._setCanceled(!1)
return r.createComponent({data:{component:{}},success:function(e){return function(t){e.updateData({id:t.data.component.id})
return e.savePage()}}(this),error:function(e){return function(){return window.confirm(t("Uh oh! There's been an error creating this HTML component. Try again?"))?e._getId():e._setCanceled(!0)}}(this)})},_resizeIFrame:function(){var e
e=i(p.findDOMNode(this)).find("iframe")
if(e.length)return l.resizeIFrames(e)},_injectHtml:function(){var e
if(!this.dtProps.render_as_iframe)try{return i(p.findDOMNode(this.refs.htmlInject)).html(this._rawHtml())}catch(t){e=t
v.log("Html section script error: "+e)
return i(p.findDOMNode(this.refs.htmlInject)).append("Script error: "+e)}},_hasContent:function(){return this.dtProps.value.length>0},_renderAsIframe:function(){return this.dtProps.render_as_iframe},_rawHtml:function(){return m.unescape(this.dtProps.value||"")},_onClickEditor:function(){return r.openAppStoreDialog(m.extend({},this.dtProps,{htmlValue:this._rawHtml(),page_id:u.getId()}),function(e){return function(n){var i
if(n.id===e.dtProps.id){i=m.pick(n,g)
e.updateData(i)
return e.savePage()}return window.error(t("Uh oh! There's been an error saving this HTML component. Try again."))}}(this))},_saveComponent:function(e){return r.saveHTMLComponent(this.dtProps.id,e,this._reloadIframe)},_iframeSrcQ:function(){return this.getMeta("iframeSrcQ")},_reloadIframe:function(){return this.updateMeta({iframeSrcQ:this.getMeta("iframeSrcQ")+1})},_recreateComponent:function(){if(window.confirm("Recreating will delete any existing component! Make sure you understand what this does")){this.updateData(f().data)
return this._getId()}},render:function(){return this._getCanceled()?d.createElement("div",{className:"s-common-status",style:{cursor:"pointer"},onClick:this._getId},t("Click here to create HTML component again.")):this._hasId(this.props.id)?y.apply(this):null}})
e.exports=a}).call(t,n(9))},2098:function(e){var t=!("undefined"==typeof window||!window.document||!window.document.createElement)
e.exports=t},2099:function(e,t,n){function i(e,t){this.query=e
this.isUnconditional=t
this.handlers=[]
this.mql=window.matchMedia(e)
var n=this
this.listener=function(e){n.mql=e.currentTarget||e
n.assess()}
this.mql.addListener(this.listener)}var o=n(2101),s=n(2035).each
i.prototype={constuctor:i,addHandler:function(e){var t=new o(e)
this.handlers.push(t)
this.matches()&&t.on()},removeHandler:function(e){var t=this.handlers
s(t,function(n,i){if(n.equals(e)){n.destroy()
return!t.splice(i,1)}})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){s(this.handlers,function(e){e.destroy()})
this.mql.removeListener(this.listener)
this.handlers.length=0},assess:function(){var e=this.matches()?"on":"off"
s(this.handlers,function(t){t[e]()})}}
e.exports=i},2100:function(e,t,n){function i(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill")
this.queries={}
this.browserIsIncapable=!window.matchMedia("only all").matches}var o=n(2099),s=n(2035),r=s.each,a=s.isFunction,l=s.isArray
i.prototype={constructor:i,register:function(e,t,n){var i=this.queries,s=n&&this.browserIsIncapable
i[e]||(i[e]=new o(e,s))
a(t)&&(t={match:t})
l(t)||(t=[t])
r(t,function(t){a(t)&&(t={match:t})
i[e].addHandler(t)})
return this},unregister:function(e,t){var n=this.queries[e]
if(n)if(t)n.removeHandler(t)
else{n.clear()
delete this.queries[e]}return this}}
e.exports=i},2101:function(e){function t(e){this.options=e
!e.deferSetup&&this.setup()}t.prototype={constructor:t,setup:function(){this.options.setup&&this.options.setup()
this.initialised=!0},on:function(){!this.initialised&&this.setup()
this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}}
e.exports=t},2102:function(e,t,n){var i=n(2100)
e.exports=new i},2103:function(e,t,n){var i=n(2098),o=i&&n(2102),s=n(2036),r={media:function(e,t){e=s(e)
"function"==typeof t&&(t={match:t})
i&&o.register(e,t)
this._responsiveMediaHandlers||(this._responsiveMediaHandlers=[])
this._responsiveMediaHandlers.push({query:e,handler:t})},componentWillUnmount:function(){this._responsiveMediaHandlers&&this._responsiveMediaHandlers.forEach(function(e){i&&o.unregister(e.query,e.handler)})}}
e.exports=r},2104:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0
t.NextArrow=t.PrevArrow=void 0
var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=n(1),r=i(s),a=n(14),l=i(a),c=n(885),u=i(c)
t.PrevArrow=r.default.createClass({displayName:"PrevArrow",clickHandler:function(e,t){t&&t.preventDefault()
this.props.clickHandler(e,t)},render:function(){var e={"slick-arrow":!0,"slick-prev":!0},t=this.clickHandler.bind(this,{message:"previous"})
if(!this.props.infinite&&(0===this.props.currentSlide||this.props.slideCount<=this.props.slidesToShow)){e["slick-disabled"]=!0
t=null}var n,i={key:"0","data-role":"none",className:(0,l.default)(e),style:{display:"block"},onClick:t}
n=this.props.prevArrow?r.default.cloneElement(this.props.prevArrow,i):r.default.createElement("button",o({key:"0",type:"button"},i)," Previous")
return n}}),t.NextArrow=r.default.createClass({displayName:"NextArrow",clickHandler:function(e,t){t&&t.preventDefault()
this.props.clickHandler(e,t)},render:function(){var e={"slick-arrow":!0,"slick-next":!0},t=this.clickHandler.bind(this,{message:"next"})
if(!u.default.canGoNext(this.props)){e["slick-disabled"]=!0
t=null}var n,i={key:"1","data-role":"none",className:(0,l.default)(e),style:{display:"block"},onClick:t}
n=this.props.nextArrow?r.default.cloneElement(this.props.nextArrow,i):r.default.createElement("button",o({key:"1",type:"button"},i)," Next")
return n}})},2105:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0
t.Dots=void 0
var o=n(1),s=i(o),r=n(14),a=i(r),l=function(e){var t
t=Math.ceil(e.slideCount/e.slidesToScroll)
return t}
t.Dots=s.default.createClass({displayName:"Dots",clickHandler:function(e,t){t.preventDefault()
this.props.clickHandler(e)},render:function(){var e=this,t=l({slideCount:this.props.slideCount,slidesToScroll:this.props.slidesToScroll}),n=Array.apply(null,Array(t+1).join("0").split("")).map(function(t,n){var i=n*e.props.slidesToScroll,o=n*e.props.slidesToScroll+(e.props.slidesToScroll-1),r=(0,a.default)({"slick-active":e.props.currentSlide>=i&&e.props.currentSlide<=o}),l={message:"dots",index:n,slidesToScroll:e.props.slidesToScroll,currentSlide:e.props.currentSlide},c=e.clickHandler.bind(e,l)
return s.default.createElement("li",{key:n,className:r},s.default.cloneElement(e.props.customPaging(n),{onClick:c}))})
return s.default.createElement("ul",{className:this.props.dotsClass,style:{display:"block"}},n)}})},2106:function(e){"use strict"
var t={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,listWidth:null,listHeight:null,slideCount:null,slideWidth:null,slideHeight:null,swipeLeft:null,touchObject:{startX:0,startY:0,curX:0,curY:0},lazyLoadedList:[],initialized:!1,edgeDragged:!1,swiped:!1,trackStyle:{},trackWidth:0}
e.exports=t},2107:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0
t.InnerSlider=void 0
var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=n(1),r=i(s),a=n(2108),l=i(a),c=n(885),u=i(c),d=n(2106),p=i(d),m=n(2037),f=i(m),h=n(14),g=i(h),v=n(530),y=i(v),b=n(2110),_=n(2105),w=n(2104)
t.InnerSlider=r.default.createClass({displayName:"InnerSlider",mixins:[u.default,l.default],list:null,track:null,listRefHandler:function(e){this.list=e},trackRefHandler:function(e){this.track=e},getInitialState:function(){return o({},p.default,{currentSlide:this.props.initialSlide})},getDefaultProps:function(){return f.default},componentWillMount:function(){this.props.init&&this.props.init()
this.setState({mounted:!0})
for(var e=[],t=0;t<r.default.Children.count(this.props.children);t++)t>=this.state.currentSlide&&t<this.state.currentSlide+this.props.slidesToShow&&e.push(t)
this.props.lazyLoad&&0===this.state.lazyLoadedList.length&&this.setState({lazyLoadedList:e})
this.setState({initialized:!0})},componentDidMount:function(){this.initialize(this.props)
this.adaptHeight()
window&&(window.addEventListener?window.addEventListener("resize",this.onWindowResized):window.attachEvent("onresize",this.onWindowResized))},componentWillUnmount:function(){this.animationEndCallback&&clearTimeout(this.animationEndCallback)
window.addEventListener?window.removeEventListener("resize",this.onWindowResized):window.detachEvent("onresize",this.onWindowResized)
this.state.autoPlayTimer&&clearInterval(this.state.autoPlayTimer)},componentWillReceiveProps:function(e){if(this.props.slickGoTo!=e.slickGoTo)this.changeSlide({message:"index",index:e.slickGoTo,currentSlide:this.state.currentSlide})
else if(this.state.currentSlide>=e.children.length){this.update(e)
this.changeSlide({message:"index",index:e.children.length-e.slidesToShow,currentSlide:this.state.currentSlide})}else this.update(e)},componentDidUpdate:function(){this.adaptHeight()},onWindowResized:function(){this.update(this.props)
this.setState({animating:!1})
clearTimeout(this.animationEndCallback)
delete this.animationEndCallback},slickPrev:function(){this.changeSlide({message:"previous"})},slickNext:function(){this.changeSlide({message:"next"})},slickGoTo:function(e){"number"==typeof e&&this.changeSlide({message:"index",index:e,currentSlide:this.state.currentSlide})},render:function(){var e,t=(0,g.default)("slick-slider",this.props.className,{"slick-vertical":this.props.vertical,"slick-initialized":this.state.initialized}),n={fade:this.props.fade,cssEase:this.props.cssEase,speed:this.props.speed,infinite:this.props.infinite,centerMode:this.props.centerMode,focusOnSelect:this.props.focusOnSelect?this.selectHandler:null,currentSlide:this.state.currentSlide,lazyLoad:this.props.lazyLoad,lazyLoadedList:this.state.lazyLoadedList,rtl:this.props.rtl,slideWidth:this.state.slideWidth,slidesToShow:this.props.slidesToShow,slidesToScroll:this.props.slidesToScroll,slideCount:this.state.slideCount,trackStyle:this.state.trackStyle,variableWidth:this.props.variableWidth}
if(this.props.dots===!0&&this.state.slideCount>=this.props.slidesToShow){var i={dotsClass:this.props.dotsClass,slideCount:this.state.slideCount,slidesToShow:this.props.slidesToShow,currentSlide:this.state.currentSlide,slidesToScroll:this.props.slidesToScroll,clickHandler:this.changeSlide,children:this.props.children,customPaging:this.props.customPaging}
e=r.default.createElement(_.Dots,i)}var s,a,l={infinite:this.props.infinite,centerMode:this.props.centerMode,currentSlide:this.state.currentSlide,slideCount:this.state.slideCount,slidesToShow:this.props.slidesToShow,prevArrow:this.props.prevArrow,nextArrow:this.props.nextArrow,clickHandler:this.changeSlide}
if(this.props.arrows){s=r.default.createElement(w.PrevArrow,l)
a=r.default.createElement(w.NextArrow,l)}var c=null
this.props.vertical&&(c={height:this.state.listHeight})
var u=null
this.props.vertical===!1?this.props.centerMode===!0&&(u={padding:"0px "+this.props.centerPadding}):this.props.centerMode===!0&&(u={padding:this.props.centerPadding+" 0px"})
var d=(0,y.default)({},c,u)
return r.default.createElement("div",{className:t,onMouseEnter:this.onInnerSliderEnter,onMouseLeave:this.onInnerSliderLeave},s,r.default.createElement("div",{ref:this.listRefHandler,className:"slick-list",style:d,onMouseDown:this.swipeStart,onMouseMove:this.state.dragging?this.swipeMove:null,onMouseUp:this.swipeEnd,onMouseLeave:this.state.dragging?this.swipeEnd:null,onTouchStart:this.swipeStart,onTouchMove:this.state.dragging?this.swipeMove:null,onTouchEnd:this.swipeEnd,onTouchCancel:this.state.dragging?this.swipeEnd:null,onKeyDown:this.props.accessibility?this.keyHandler:null},r.default.createElement(b.Track,o({ref:this.trackRefHandler},n),this.props.children)),a,e)}})},2108:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0
var o=n(2039),s=n(885),r=(i(s),n(530)),a=i(r),l=n(13),c=i(l),u={changeSlide:function(e){var t,n,i,o,s,r=this.props,a=r.slidesToScroll,l=r.slidesToShow,c=this.state,u=c.slideCount,d=c.currentSlide
o=u%a!==0
t=o?0:(u-d)%a
if("previous"===e.message){i=0===t?a:l-t
s=d-i
if(this.props.lazyLoad){n=d-i
s=n===-1?u-1:n}}else if("next"===e.message){i=0===t?a:t
s=d+i
this.props.lazyLoad&&(s=(d+a)%u+t)}else if("dots"===e.message||"children"===e.message){s=e.index*e.slidesToScroll
if(s===e.currentSlide)return}else if("index"===e.message){s=parseInt(e.index)
if(s===e.currentSlide)return}this.slideHandler(s)},keyHandler:function(e){e.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===e.keyCode&&this.props.accessibility===!0?this.changeSlide({message:this.props.rtl===!0?"next":"previous"}):39===e.keyCode&&this.props.accessibility===!0&&this.changeSlide({message:this.props.rtl===!0?"previous":"next"}))},selectHandler:function(e){this.changeSlide(e)},swipeStart:function(e){var t,n
if(!(this.props.swipe===!1||"ontouchend"in document&&this.props.swipe===!1||this.props.draggable===!1&&e.type.indexOf("mouse")!==-1)){t=void 0!==e.touches?e.touches[0].pageX:e.clientX
n=void 0!==e.touches?e.touches[0].pageY:e.clientY
this.setState({dragging:!0,touchObject:{startX:t,startY:n,curX:t,curY:n}})}},swipeMove:function(e){if(this.state.dragging){if(!this.state.animating){this.props.vertical&&this.props.swipeToSlide&&this.props.verticalSwiping&&e.preventDefault()
var t,n,i,s=this.state.touchObject
n=(0,o.getTrackLeft)((0,a.default)({slideIndex:this.state.currentSlide,trackRef:this.track},this.props,this.state))
s.curX=e.touches?e.touches[0].pageX:e.clientX
s.curY=e.touches?e.touches[0].pageY:e.clientY
s.swipeLength=Math.round(Math.sqrt(Math.pow(s.curX-s.startX,2)))
this.props.verticalSwiping&&(s.swipeLength=Math.round(Math.sqrt(Math.pow(s.curY-s.startY,2))))
i=(this.props.rtl===!1?1:-1)*(s.curX>s.startX?1:-1)
this.props.verticalSwiping&&(i=s.curY>s.startY?1:-1)
var r=this.state.currentSlide,l=Math.ceil(this.state.slideCount/this.props.slidesToScroll),c=this.swipeDirection(this.state.touchObject),u=s.swipeLength
if(this.props.infinite===!1&&(0===r&&"right"===c||r+1>=l&&"left"===c)){u=s.swipeLength*this.props.edgeFriction
if(this.state.edgeDragged===!1&&this.props.edgeEvent){this.props.edgeEvent(c)
this.setState({edgeDragged:!0})}}if(this.state.swiped===!1&&this.props.swipeEvent){this.props.swipeEvent(c)
this.setState({swiped:!0})}t=this.props.vertical?n+u*(this.state.listHeight/this.state.listWidth)*i:n+u*i
this.props.verticalSwiping&&(t=n+u*i)
this.setState({touchObject:s,swipeLeft:t,trackStyle:(0,o.getTrackCSS)((0,a.default)({left:t},this.props,this.state))})
Math.abs(s.curX-s.startX)<.8*Math.abs(s.curY-s.startY)||s.swipeLength>4&&e.preventDefault()}}else e.preventDefault()},getNavigableIndexes:function(){var e=void 0,t=0,n=0,i=[]
if(this.props.infinite){t=this.props.slidesToShow*-1
n=this.props.slidesToShow*-1
e=2*this.state.slideCount}else e=this.state.slideCount
for(;t<e;){i.push(t)
t=n+this.props.slidesToScroll
n+=this.props.slidesToScroll<=this.props.slidesToShow?this.props.slidesToScroll:this.props.slidesToShow}return i},checkNavigable:function(e){var t=this.getNavigableIndexes(),n=0
if(e>t[t.length-1])e=t[t.length-1]
else for(var i in t){if(e<t[i]){e=n
break}n=t[i]}return e},getSlideCount:function(){var e=this,t=this.props.centerMode?this.state.slideWidth*Math.floor(this.props.slidesToShow/2):0
if(this.props.swipeToSlide){var n=void 0,i=c.default.findDOMNode(this.list),o=i.querySelectorAll(".slick-slide")
Array.from(o).every(function(i){if(e.props.vertical){if(i.offsetTop+e.getHeight(i)/2>e.state.swipeLeft*-1){n=i
return!1}}else if(i.offsetLeft-t+e.getWidth(i)/2>e.state.swipeLeft*-1){n=i
return!1}return!0})
var s=Math.abs(n.dataset.index-this.state.currentSlide)||1
return s}return this.props.slidesToScroll},swipeEnd:function(e){if(this.state.dragging){var t=this.state.touchObject,n=this.state.listWidth/this.props.touchThreshold,i=this.swipeDirection(t)
this.props.verticalSwiping&&(n=this.state.listHeight/this.props.touchThreshold)
this.setState({dragging:!1,edgeDragged:!1,swiped:!1,swipeLeft:null,touchObject:{}})
if(t.swipeLength)if(t.swipeLength>n){e.preventDefault()
var s=void 0,r=void 0
switch(i){case"left":case"down":r=this.state.currentSlide+this.getSlideCount()
s=this.props.swipeToSlide?this.checkNavigable(r):r
this.state.currentDirection=0
break
case"right":case"up":r=this.state.currentSlide-this.getSlideCount()
s=this.props.swipeToSlide?this.checkNavigable(r):r
this.state.currentDirection=1
break
default:s=this.state.currentSlide}this.slideHandler(s)}else{var l=(0,o.getTrackLeft)((0,a.default)({slideIndex:this.state.currentSlide,trackRef:this.track},this.props,this.state))
this.setState({trackStyle:(0,o.getTrackAnimateCSS)((0,a.default)({left:l},this.props,this.state))})}}else e.preventDefault()},onInnerSliderEnter:function(){this.props.autoplay&&this.props.pauseOnHover&&this.pause()},onInnerSliderLeave:function(){this.props.autoplay&&this.props.pauseOnHover&&this.autoPlay()}}
t.default=u},2109:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=n(1),r=i(s),a=n(2107),l=n(530),c=i(l),u=n(2036),d=i(u),p=n(2103),m=i(p),f=n(2037),h=i(f),g=r.default.createClass({displayName:"Slider",mixins:[m.default],innerSlider:null,innerSliderRefHandler:function(e){this.innerSlider=e},getInitialState:function(){return{breakpoint:null}},componentWillMount:function(){var e=this
if(this.props.responsive){var t=this.props.responsive.map(function(e){return e.breakpoint})
t.sort(function(e,t){return e-t})
t.forEach(function(n,i){var o
o=0===i?(0,d.default)({minWidth:0,maxWidth:n}):(0,d.default)({minWidth:t[i-1],maxWidth:n})
e.media(o,function(){e.setState({breakpoint:n})})})
var n=(0,d.default)({minWidth:t.slice(-1)[0]})
this.media(n,function(){e.setState({breakpoint:null})})}},slickPrev:function(){this.innerSlider.slickPrev()},slickNext:function(){this.innerSlider.slickNext()},slickGoTo:function(e){this.innerSlider.slickGoTo(e)},render:function(){var e,t,n=this
if(this.state.breakpoint){t=this.props.responsive.filter(function(e){return e.breakpoint===n.state.breakpoint})
e="unslick"===t[0].settings?"unslick":(0,c.default)({},this.props,t[0].settings)}else e=(0,c.default)({},h.default,this.props)
var i=this.props.children
Array.isArray(i)||(i=[i])
i=i.filter(function(e){return!!e})
return"unslick"===e?r.default.createElement("div",null,i):r.default.createElement(a.InnerSlider,o({ref:this.innerSliderRefHandler},e),i)}})
e.exports=g},2110:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0
t.Track=void 0
var o=n(1),s=i(o),r=n(530),a=i(r),l=n(14),c=i(l),u=function(e){var t,n,i,o,s
s=e.rtl?e.slideCount-1-e.index:e.index
i=s<0||s>=e.slideCount
if(e.centerMode){o=Math.floor(e.slidesToShow/2)
n=(s-e.currentSlide)%e.slideCount===0
s>e.currentSlide-o-1&&s<=e.currentSlide+o&&(t=!0)}else t=e.currentSlide<=s&&s<e.currentSlide+e.slidesToShow
return(0,c.default)({"slick-slide":!0,"slick-active":t,"slick-center":n,"slick-cloned":i})},d=function(e){var t={}
void 0!==e.variableWidth&&e.variableWidth!==!1||(t.width=e.slideWidth)
if(e.fade){t.position="relative"
t.left=-e.index*e.slideWidth
t.opacity=e.currentSlide===e.index?1:0
t.transition="opacity "+e.speed+"ms "+e.cssEase
t.WebkitTransition="opacity "+e.speed+"ms "+e.cssEase}return t},p=function(e,t){return null===e.key||void 0===e.key?t:e.key},m=function(e){var t,n=[],i=[],o=[],r=s.default.Children.count(e.children)
s.default.Children.forEach(e.children,function(l,m){var f=void 0,h={message:"children",index:m,slidesToScroll:e.slidesToScroll,currentSlide:e.currentSlide}
f=!e.lazyLoad|(e.lazyLoad&&e.lazyLoadedList.indexOf(m)>=0)?l:s.default.createElement("div",null)
var g,v=d((0,a.default)({},e,{index:m})),y=u((0,a.default)({index:m},e))
g=f.props.className?(0,c.default)(y,f.props.className):y
var b=function(t){f.props&&f.props.onClick&&f.props.onClick(t)
e.focusOnSelect&&e.focusOnSelect(h)}
n.push(s.default.cloneElement(f,{key:"original"+p(f,m),"data-index":m,className:g,tabIndex:"-1",style:(0,a.default)({outline:"none"},f.props.style||{},v),onClick:b}))
if(e.infinite&&e.fade===!1){var _=e.variableWidth?e.slidesToShow+1:e.slidesToShow
if(m>=r-_){t=-(r-m)
i.push(s.default.cloneElement(f,{key:"precloned"+p(f,t),"data-index":t,className:g,style:(0,a.default)({},f.props.style||{},v),onClick:b}))}if(m<_){t=r+m
o.push(s.default.cloneElement(f,{key:"postcloned"+p(f,t),"data-index":t,className:g,style:(0,a.default)({},f.props.style||{},v),onClick:b}))}}})
return e.rtl?i.concat(n,o).reverse():i.concat(n,o)}
t.Track=s.default.createClass({displayName:"Track",render:function(){var e=m.call(this,this.props)
return s.default.createElement("div",{className:"slick-track",style:this.props.trackStyle},e)}})},2111:function(e,t,n){"use strict"
function i(e){return e?{pageX:e.pageX,pageY:e.pageY,clientX:e.clientX,clientY:e.clientY}:{}}var o=n(1),s=n(13),r=32,a=13,l={propTypes:{moveThreshold:o.PropTypes.number,activeDelay:o.PropTypes.number,pressDelay:o.PropTypes.number,pressMoveThreshold:o.PropTypes.number,preventDefault:o.PropTypes.bool,stopPropagation:o.PropTypes.bool,onTap:o.PropTypes.func,onPress:o.PropTypes.func,onTouchStart:o.PropTypes.func,onTouchMove:o.PropTypes.func,onTouchEnd:o.PropTypes.func,onMouseDown:o.PropTypes.func,onMouseUp:o.PropTypes.func,onMouseMove:o.PropTypes.func,onMouseOut:o.PropTypes.func,onKeyDown:o.PropTypes.func,onKeyUp:o.PropTypes.func},getDefaultProps:function(){return{activeDelay:0,moveThreshold:100,pressDelay:1e3,pressMoveThreshold:5}},getInitialState:function(){return{isActive:!1,touchActive:!1,pinchActive:!1}},componentWillUnmount:function(){this.cleanupScrollDetection()
this.cancelPressDetection()
this.clearActiveTimeout()},processEvent:function(e){this.props.preventDefault&&e.preventDefault()
this.props.stopPropagation&&e.stopPropagation()},onTouchStart:function(e){if(!this.props.onTouchStart||this.props.onTouchStart(e)!==!1){this.processEvent(e)
window._blockMouseEvents=!0
if(1===e.touches.length){this._initialTouch=this._lastTouch=i(e.touches[0])
this.initScrollDetection()
this.initPressDetection(e,this.endTouch)
this.initTouchmoveDetection()
this._activeTimeout=setTimeout(this.makeActive,this.props.activeDelay)}else this.onPinchStart&&(this.props.onPinchStart||this.props.onPinchMove||this.props.onPinchEnd)&&2===e.touches.length&&this.onPinchStart(e)}},makeActive:function(){if(this.isMounted()){this.clearActiveTimeout()
this.setState({isActive:!0})}},clearActiveTimeout:function(){clearTimeout(this._activeTimeout)
this._activeTimeout=!1},initScrollDetection:function(){this._scrollPos={top:0,left:0}
this._scrollParents=[]
this._scrollParentPos=[]
for(var e=s.findDOMNode(this);e;){if(e.scrollHeight>e.offsetHeight||e.scrollWidth>e.offsetWidth){this._scrollParents.push(e)
this._scrollParentPos.push(e.scrollTop+e.scrollLeft)
this._scrollPos.top+=e.scrollTop
this._scrollPos.left+=e.scrollLeft}e=e.parentNode}},initTouchmoveDetection:function(){this._touchmoveTriggeredTimes=0},cancelTouchmoveDetection:function(){if(this._touchmoveDetectionTimeout){clearTimeout(this._touchmoveDetectionTimeout)
this._touchmoveDetectionTimeout=null
this._touchmoveTriggeredTimes=0}},calculateMovement:function(e){return{x:Math.abs(e.clientX-this._initialTouch.clientX),y:Math.abs(e.clientY-this._initialTouch.clientY)}},detectScroll:function(){for(var e={top:0,left:0},t=0;t<this._scrollParents.length;t++){e.top+=this._scrollParents[t].scrollTop
e.left+=this._scrollParents[t].scrollLeft}return!(e.top===this._scrollPos.top&&e.left===this._scrollPos.left)},cleanupScrollDetection:function(){this._scrollParents=void 0
this._scrollPos=void 0},initPressDetection:function(e,t){this.props.onPress&&(this._pressTimeout=setTimeout(function(){this.props.onPress(e)
t()}.bind(this),this.props.pressDelay))},cancelPressDetection:function(){clearTimeout(this._pressTimeout)},onTouchMove:function(e){if(this._initialTouch){this.processEvent(e)
if(this.detectScroll())return this.endTouch(e)
0===this._touchmoveTriggeredTimes++&&(this._touchmoveDetectionTimeout=setTimeout(function(){1===this._touchmoveTriggeredTimes&&this.endTouch(e)}.bind(this),64))
this.props.onTouchMove&&this.props.onTouchMove(e)
this._lastTouch=i(e.touches[0])
var t=this.calculateMovement(this._lastTouch);(t.x>this.props.pressMoveThreshold||t.y>this.props.pressMoveThreshold)&&this.cancelPressDetection()
t.x>this.props.moveThreshold||t.y>this.props.moveThreshold?this.state.isActive?this.setState({isActive:!1}):this._activeTimeout&&this.clearActiveTimeout():this.state.isActive||this._activeTimeout||this.setState({isActive:!0})}else if(this._initialPinch&&2===e.touches.length&&this.onPinchMove){this.onPinchMove(e)
e.preventDefault()}},onTouchEnd:function(e){var t=this
if(this._initialTouch){this.processEvent(e)
var n,i=this.calculateMovement(this._lastTouch)
if(i.x<=this.props.moveThreshold&&i.y<=this.props.moveThreshold&&this.props.onTap){e.preventDefault()
n=function(){var n=t._scrollParents.map(function(e){return e.scrollTop+e.scrollLeft}),i=t._scrollParentPos.some(function(e,t){return e!==n[t]})
i||t.props.onTap(e)}}this.endTouch(e,n)}else if(this.onPinchEnd&&this._initialPinch&&e.touches.length+e.changedTouches.length===2){this.onPinchEnd(e)
e.preventDefault()}},endTouch:function(e,t){this.cancelTouchmoveDetection()
this.cancelPressDetection()
this.clearActiveTimeout()
e&&this.props.onTouchEnd&&this.props.onTouchEnd(e)
this._initialTouch=null
this._lastTouch=null
t&&t()
this.state.isActive&&this.setState({isActive:!1})},onMouseDown:function(e){if(window._blockMouseEvents)window._blockMouseEvents=!1
else if(!this.props.onMouseDown||this.props.onMouseDown(e)!==!1){this.processEvent(e)
this.initPressDetection(e,this.endMouseEvent)
this._mouseDown=!0
this.setState({isActive:!0})}},onMouseMove:function(e){if(!window._blockMouseEvents&&this._mouseDown){this.processEvent(e)
this.props.onMouseMove&&this.props.onMouseMove(e)}},onMouseUp:function(e){if(!window._blockMouseEvents&&this._mouseDown){this.processEvent(e)
this.props.onMouseUp&&this.props.onMouseUp(e)
this.props.onTap&&this.props.onTap(e)
this.endMouseEvent()}},onMouseOut:function(e){if(!window._blockMouseEvents&&this._mouseDown){this.processEvent(e)
this.props.onMouseOut&&this.props.onMouseOut(e)
this.endMouseEvent()}},endMouseEvent:function(){this.cancelPressDetection()
this._mouseDown=!1
this.setState({isActive:!1})},onKeyUp:function(e){if(this._keyDown){this.processEvent(e)
this.props.onKeyUp&&this.props.onKeyUp(e)
this.props.onTap&&this.props.onTap(e)
this._keyDown=!1
this.cancelPressDetection()
this.setState({isActive:!1})}},onKeyDown:function(e){if(!(this.props.onKeyDown&&this.props.onKeyDown(e)===!1||e.which!==r&&e.which!==a||this._keyDown)){this.initPressDetection(e,this.endKeyEvent)
this.processEvent(e)
this._keyDown=!0
this.setState({isActive:!0})}},endKeyEvent:function(){this.cancelPressDetection()
this._keyDown=!1
this.setState({isActive:!1})},cancelTap:function(){this.endTouch()
this._mouseDown=!1},handlers:function(){return{onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onMouseMove:this.onMouseMove,onMouseOut:this.onMouseOut,onKeyDown:this.onKeyDown,onKeyUp:this.onKeyUp}}}
e.exports=l},2112:function(e,t,n){"use strict"
var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=n(1),s=n(2040)
e.exports=function(e){return o.createClass({displayName:"Tappable",mixins:e,propTypes:{component:o.PropTypes.any,className:o.PropTypes.string,classBase:o.PropTypes.string,classes:o.PropTypes.object,style:o.PropTypes.object,disabled:o.PropTypes.bool},getDefaultProps:function(){return{component:"span",classBase:"Tappable"}},render:function(){var e=this.props,t=e.classBase+(this.state.isActive?"-active":"-inactive")
e.className&&(t+=" "+e.className)
e.classes&&(t+=" "+(this.state.isActive?e.classes.active:e.classes.inactive))
var n={}
i(n,s,e.style)
var r=i({},e,{style:n,className:t,disabled:e.disabled,handlers:this.handlers},this.handlers())
delete r.activeDelay
delete r.classBase
delete r.classes
delete r.handlers
delete r.onTap
delete r.onPress
delete r.onPinchStart
delete r.onPinchMove
delete r.onPinchEnd
delete r.moveThreshold
delete r.pressDelay
delete r.pressMoveThreshold
delete r.preventDefault
delete r.stopPropagation
delete r.component
return o.createElement(e.component,r,e.children)}})}},2113:function(e,t,n){"use strict"
var i=n(1)
n(3)
e.exports=function(){return i.createElement("div",{className:"s-async-wrapper s-component"},i.createElement("div",{className:"s-loading"}))}},2114:function(e,t,n){"use strict"
function i(e,t,n){this._goToSpecifySlide(n)}function o(e,t,n){return m.createElement("div",{className:"selector-wrapper",key:n},m.createElement("div",{className:f.keys(f.pick({selector:!0,selected:n==this.getCurrentSlide()},f.identity)).join(" "),key:n,onClick:i.bind(this,e,t,n)}))}function s(){this._previous()}function r(e){var t="noForeground"===this._getCurrentLayout()
return m.createElement("div",{},m.createElement("div",{className:"prev-button "+f.keys(f.pick({"has-upper-button":t},f.identity)).join(" "),onClick:s.bind(this,e,t)},m.createElement("div",{className:"arrow"})))}function a(){this._next()}function l(){this._previous()}function c(e,t,n){this._goToSpecifySlide(n)}function u(e,t,n){return m.createElement("div",{className:"selector-wrapper",key:n},m.createElement("div",{className:f.keys(f.pick({selector:!0,selected:n==this.getCurrentSlide()},f.identity)).join(" "),key:n,onClick:c.bind(this,e,t,n)}))}function d(){this._next()}function p(){var e=this.getDefaultBinding().sub("list")
return m.createElement("div",{className:f.keys(f.pick({"slider-container":!0,loading:!this.getMeta("ready")},f.identity)).join(" ")},e.get().size>0?m.createElement("div",{"data-auto-play":this.props.auto_play,ref:"iosslider",className:f.keys(f.pick({iosslider:!0,"dark-overlays":this._useDarkOverlays()},f.identity)).join(" ")},e.get().size>0?m.createElement("div",{className:"slider"},"\n          ",this._getChildren(),"\n        "):null,!this.props.uiOutside&&e.get().size>1?m.createElement("div",{className:"center slide-selectors"},m.createElement("div",{className:"slide-selectors-inner"},m.createElement.apply(this,["div",{className:"content repeatable-component"},f.map(e.get().toArray(),o.bind(this,e)),m.createElement("div",{className:"clearfix"})]))):null,!this.props.uiOutside&&e.get().size>1?r.apply(this,[e]):null,!this.props.uiOutside&&e.get().size>1?m.createElement("div",{className:f.keys(f.pick({"next-button":!0},f.identity)).join(" "),onClick:a.bind(this,e)},m.createElement("div",{className:"arrow"})):null):null,this._showNavButtons()&&this.props.uiOutside&&e.get().size>1?m.createElement("div",{className:"outside prev-button",onClick:l.bind(this,e)},m.createElement("div",{className:"arrow"},"←")):null,this.props.uiOutside&&e.get().size>1?m.createElement("div",{className:"center outside slide-selectors"},m.createElement("div",{className:"slide-selectors-inner"},m.createElement.apply(this,["div",{className:"content repeatable-component"},f.map(e.get().toArray(),u.bind(this,e))]))):null,this._showNavButtons()&&this.props.uiOutside&&e.get().size>1?m.createElement("div",{className:"next-button outside",onClick:d.bind(this,e)},m.createElement("div",{className:"arrow"},"→")):null,0==e.get().size?m.createElement("div",{className:"s-slider-placeholder"},null):null)}var m=n(1),f=n(3)
e.exports=function(){return m.createElement("div",{className:"s-component s-slider"+(this.props.className?" "+this.props.className:" ")},"\n  ",this._renderEditor(),"\n  ",m.createElement("div",{className:"s-component-content"},p.apply(this,[])))}},2115:function(e,t,n){"use strict"
var i=n(1)
n(3)
e.exports=function(){return i.createElement("div",{className:"video-bg-wrap","data-video-html":this.dtProps.videoHtml})}},2116:function(e){var t=function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()}
e.exports=t},2137:function(e,t,n){var i=n(2335)
n(3)
e.exports={internal:"perspective",displayName:"Perspective",description:"A magazine-style template with bold, beautiful fullscreen tiles. Great for showcases and portfolios.",activated:!0,thumbnail:i.correctThumbnailPath(n(2673)),defaultFonts:{heading:"playfair display",title:"bebas neue",body:"source sans pro"},features:{fullscreenSlider:!0,animations:!1,backgroundColorClassNames:[],backgroundColorRotate:!1},variations:[{id:"default",displayName:"Variation|Light",fonts:{heading:null,title:null,body:null}},{id:"dark",displayName:"Variation|Dark",fonts:{heading:null,title:null,body:null}},{id:"light-transparent",displayName:"Variation|Light Transparent",fonts:{heading:null,title:null,body:null}},{id:"dark-transparent",displayName:"Variation|Dark Transparent",fonts:{heading:null,title:null,body:null}},{id:"earth",displayName:"Variation|Earth",fonts:{heading:null,title:null,body:null}}],callbacks:{CustomColorsTemplate:n(2453),after_render:n(2473)},sections:{block:{proFeature:!0,canEditInMobileApp:!1,component:n(2338),template:n(2904),thumbnail:{template:n(2354)}},hero:{proFeature:!1,canEditInMobileApp:!0,component:n(2504),template:n(2916),thumbnail:{cover:i.correctThumbnailPath(n(2662)),template:n(2917)}},rows:{proFeature:!1,canEditInMobileApp:!0,component:n(2507),template:n(2926),thumbnail:{cover:i.correctThumbnailPath(n(2667)),template:n(2927)}},media:{proFeature:!1,canEditInMobileApp:!0,component:n(2506),template:n(2923),thumbnail:{cover:i.correctThumbnailPath(n(2666)),template:n(2924)}},slider:{proFeature:!0,canEditInMobileApp:!1,component:n(2346),template:n(2929),thumbnail:{cover:i.correctThumbnailPath(n(2669)),template:n(2361)}},title:{proFeature:!1,canEditInMobileApp:!0,component:n(2510),template:n(2933),thumbnail:{cover:i.correctThumbnailPath(n(2672)),template:n(2412)}},ecommerce:{proFeature:!1,canEditInMobileApp:!1,component:n(2365),template:n(2912),thumbnail:{cover:i.correctThumbnailPath(n(2660)),template:n(2373)}},columns:{proFeature:!1,canEditInMobileApp:!0,component:n(2501),template:n(2906),thumbnail:{cover:i.correctThumbnailPath(n(2657)),template:n(2907)}},social_feed:{proFeature:!1,canEditInMobileApp:!1,component:n(2508),template:n(2930),thumbnail:{cover:i.correctThumbnailPath(n(2670)),template:n(2362)}},contact_form:{proFeature:!1,canEditInMobileApp:!0,component:n(2502),template:n(2908),thumbnail:{cover:i.correctThumbnailPath(n(2658)),template:n(2909)}},footer:{proFeature:!1,canEditInMobileApp:!1,component:n(2366),template:n(2913)},navbar:{proFeature:!1,canEditInMobileApp:!1,component:n(2343),template:n(2925)},donation:{proFeature:!1,canEditInMobileApp:!1,component:n(2340),template:n(2911),thumbnail:{template:n(2356)}},signup_form:{proFeature:!1,canEditInMobileApp:!0,component:n(2345),template:n(2928),thumbnail:{cover:i.correctThumbnailPath(n(2668)),template:n(2360)}},info:{proFeature:!1,canEditInMobileApp:!0,component:n(2505),template:n(2921),thumbnail:{cover:i.correctThumbnailPath(n(2665)),template:n(2922)}},icons:{proFeature:!1,canEditInMobileApp:!0,component:n(2342),template:n(2919),thumbnail:{cover:i.correctThumbnailPath(n(2664)),template:n(2920)}},cta:{proFeature:!1,canEditInMobileApp:!0,component:n(2339),template:n(2910),thumbnail:{cover:i.correctThumbnailPath(n(2659)),template:n(2355)}},html:{proFeature:!1,canEditInMobileApp:!1,component:n(2341),template:n(2918),thumbnail:{cover:i.correctThumbnailPath(n(2663)),template:n(2357)}},text:{proFeature:!1,canEditInMobileApp:!0,component:n(2509),template:n(2931),thumbnail:{cover:i.correctThumbnailPath(n(2671)),template:n(2932)}},blog:{proFeature:!1,canEditInMobileApp:!1,component:n(2364),template:n(2905),thumbnail:{cover:i.correctThumbnailPath(n(2656)),template:n(2370)}},gallery:{proFeature:!1,canEditInMobileApp:!0,component:n(2503),template:n(2914),thumbnail:{cover:i.correctThumbnailPath(n(2661)),template:n(2915)}},process:{proFeature:!1,canEditInMobileApp:!0,component:n(2344),template:n(2358),thumbnail:{template:n(2359)}}}}},2290:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(3),s=(i(o),n(55)),r=n(2304),a=i(r)
a.default.sharedProps=(0,s.sharedPropsBuilder)(function(){return[]})
t.default=a.default
e.exports=t.default},2291:function(e,t,n){(function(t){"use strict"
var i,o,s
o=n(1)
i=n(15)
s=n(330)
e.exports=i.create({displayName:"TitleGroup",mixins:[],propTypes:{className:o.PropTypes.string,section:o.PropTypes.object.isRequired,parentBinding:o.PropTypes.object,subtitleOnTop:o.PropTypes.bool,canHide:o.PropTypes.bool,titleSize:o.PropTypes.oneOf(["large","normal"]),titleTag:o.PropTypes.oneOf(["h2","h3","h4","h5","h6"]),subtitleTag:o.PropTypes.string,contentCheck:o.PropTypes.string,binding:o.PropTypes.object.isRequired},getDefaultProps:function(){return{className:"",subtitleOnTop:!1,parentBinding:void 0,titleSize:"normal",titleTag:"h2",subtitleTag:"h4",canHide:!0}},componentWillMount:function(){this.showDeleteOverlay=!1
return this.hideInEditor=!this.props.section.sbAnyHasContent("text1 text2",{parentBinding:this.props.parentBinding,showOnly:!1})},componentWillUpdate:function(e){if(this.props.section.sbAnyHasContent("text1 text2",{parentBinding:e.parentBinding,showOnly:!1}))return this.hideInEditor=!1},onMouseEnterDeleteButton:function(){this.showDeleteOverlay=!0
return this.forceUpdate()},onMouseLeaveDeleteButton:function(){this.showDeleteOverlay=!1
return this.forceUpdate()},onClickDeleteButton:function(){this.hideInEditor=!0
this.showDeleteOverlay=!1
return this.forceUpdate()},onClickShowButton:function(){this.hideInEditor=!1
this.showDeleteOverlay=!1
return this.forceUpdate()},shouldComponentUpdateOverride:function(){return!0},render:function(){var e,n,i,r,a,l,c,u,d,p,m,f
a=this.props.section
r=this.props.parentBinding
n=""
e=a.sbUniformTextAlignment("text1",{parentBinding:r})
m=e?"sb-title-"+e:""
this.props.contentCheck&&(a.sbHasContent(this.props.contentCheck,{parentBinding:r,showOnly:!1})||(n="s-only-title-group"))
if(!a)throw new Error("TitleGroup is expecting a section prop!")
if(a.sbHasContent("text1",{parentBinding:r})){f=a.getComponentProps("text1",r)
d="first"===this.props.section.props.indexType?"h1":this.props.titleTag
u="large"===this.props.titleSize&&"h1"!==d?"s-title-large":""
p=o.createElement("div",{className:"s-title "+m},o.createElement(s,Object.assign({slideSettingsBinding:a.getBinding().sub("components.slideSettings"),tagName:d,tagClassName:u,textType:"title",emptyMessage:t("Editor|Add title.")},f)))}else p=null
if(a.sbHasContent("text2",{parentBinding:r})){c=a.getComponentProps("text2",r)
l=o.createElement("div",{className:"s-subtitle"},o.createElement(s,Object.assign({tagName:this.props.subtitleTag,textType:"heading",emptyMessage:t("Editor|Add subtitle.")},c)))}else l=null
i=function(e){return function(n){null==n&&(n="")
return o.createElement("div",{className:"s-component-editor-wrapper"+n},o.createElement("div",{className:"buttons"},o.createElement("div",{className:"s-repeatable-delete-button",title:t("Editor|Remove title"),onClick:e.onClickDeleteButton,onMouseEnter:e.onMouseEnterDeleteButton,onMouseLeave:e.onMouseLeaveDeleteButton},o.createElement("div",{className:"delete-button-wrap"},o.createElement("div",{className:"delete-button-confirm"},t("Sure?"))))),e.showDeleteOverlay?o.createElement("div",{className:"s-component-overlay s-repeatable-overlay warning visible"}):void 0)}}(this)
return a.sbAnyHasContent("text1 text2",{parentBinding:r})?o.createElement("div",{className:"s-title-group "+n+" "+this.props.className},void 0,this.props.subtitleOnTop?[l,p]:[p,l]):null}})}).call(t,n(9))},2292:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var a,l,c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},u=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&s)for(var a in s)void 0===n[a]&&(n[a]=s[a])
else n||(n=s||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),c=0;c<r;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),p=n(1),m=i(p),f=n(13),h=i(f),g=n(33),v=!("undefined"==typeof window||!window.document||!window.document.createElement)
if(v){n(897)
document.addEventListener("lazybeforeunveil",function(e){var t=void 0
if(!e.defaultPrevented){t=e.target.getAttribute("data-bg")
if(t){e.target.style.backgroundImage="url("+t+")"
lazySizes.fire(e.target,"_lazyloaded",{},!0,!0)}}})}var y=(l=a=function(e){function t(){o(this,t)
return s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}r(t,e)
d(t,[{key:"componentWillUpdate",value:function(e){for(var t=!1,n=["src","dataSrc"],i=0;i<n.length;i++){var o=n[i],s=this.props[o],r=e[o]
if(s!==r){t=!0
break}}if(t){var a=h.default.findDOMNode(this.refs.lazyElement)
a&&a.classList.contains("lazyloaded")&&a.classList.remove("lazyloaded")}}},{key:"componentDidUpdate",value:function(){var e=h.default.findDOMNode(this.refs.lazyElement)
!e||e.classList.contains("lazyloaded")||e.classList.contains("lazyload")||e.classList.add("lazyload")}},{key:"renderBackgroundImage",value:function(){var e=this.props,t=e.className,n=e.style,i=e.src,o=e.dataSrc,s=e.eagerLoad
this.props.parentBinding
if(s){n.backgroundImage="url("+o+")"
return u("div",{className:t,style:n},void 0,this.props.children)}var r={}
if(o){n.backgroundImage="url("+i+")"
r={"data-bg":o}}return m.default.createElement("div",c({className:"lazyload "+t,style:n},r,{ref:"lazyElement"}),this.props.children)}},{key:"render",value:function(){var e=this.props,t=e.linkTarget,n=e.linkUrl,i=this.renderBackgroundImage(),o=(0,g.addProtocol)(n)
return n&&t?u("a",{href:o,target:t},void 0,i):i}}])
return t}(m.default.Component),a.defaultProps={className:"",style:{},eagerLoad:!1,src:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="},l)
t.default=y
e.exports=t.default},2293:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=e
Object.keys(i).forEach(function(e){var s=o+(o?"-"+e:e),r=i[e]
"object"!==("undefined"==typeof r?"undefined":m(r))?n[s]=r:t(s,r)})}var n={}
t("",e)
return n}function s(e){var t={}
Object.keys(e).forEach(function(n){return t[n]=o(e[n])})
return t}function r(){var e=n(5)
return e.getThemeName()}function a(e){var t=n(61),i=t.get(r())
return i&&i.features&&i.features[e]}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:16,i=Math.floor((n-t)/2)
return v[e]+" columns "+(i?"offset-"+v[i]:"")}function c(e){return v[e]+" columns"}function u(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=16,i=r(),o=""
if("persona"===i)o=c(12/e)
else switch(e){case 1:o=a("narrowMedia")?t?c(14):l(14,14):c(n)
break
case 3:o="third columns"
break
case 5:o="fifth columns"
break
default:o=c(n/e)}return o+" no-float"}function d(e,t,n){for(var i=t.split("-"),o=e,s="",r="",a=0,l=i.length;a<l;a++){r=i[a]
if(!o[r]){if(a>=1){for(var c=a;c<n;c++){r=Object.keys(o)[0]
o=o[r]
s+=r+"-"}break}return""}o=o[r]
s+=r+"-"}if(Object.keys(o).length)for(var u=i.length;u<n;u++){r=Object.keys(o)[0]
o=o[r]
s+=r+"-"}return s.replace(/-$/,"")}function p(e){var t=n(2296),i=n(2064),o=r(),s=e,a=s.getDefaultBinding().get("template_name"),l=s._getLayoutBinding().get("layout_variation"),c=t.getLayoutMapping(o)
c[l]||"text"!==a||["persona","perspective"].includes(o)||s.getComponentBinding("background1").merge(g.default.fromJS(i.dataForEmptyBackground()))}Object.defineProperty(t,"__esModule",{value:!0})
var m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
t.getLayoutMapping=s
t.getThemeName=r
t.getThemeFeature=a
t.generateColumnClassWithOffset=l
t.generateColumnClass=c
t.generateItemClassByColumnsNum=u
t.getClosestKey=d
t.removeOldBackgroundForText=p
var f=n(3),h=(i(f),n(11)),g=i(h),v={one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10,eleven:11,twelve:12,thirteen:13,fourteen:14,fifteen:15,sixteen:16}
for(var y in v)v[v[y]]=y},2294:function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default={_getLayoutVariation:function(){return this._getLayoutBinding().get("layout_variation")||""},_getFirstLayout:function(){return this._getLayoutVariation().split("-")[0]},_updateLayout:function(e){this._getLayoutBinding().sub("layout_variation").set(e)
this.savePage()},_getLayoutStatusName:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0
return"ABCDEFGHIJKLMNOPQRSTUVWXYZ"[e]}}
e.exports=t.default},2295:function(e,t,n){(function(e){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){return"object"!=("undefined"==typeof e?"undefined":f(e))?"":e[t]?t:Object.keys(e)[0]}function l(t){return{media:e("Editor|Big Media"),col:e("Editor|Columns"),row:e("Editor|Rows"),box:e("Editor|Text In Box"),one:1,two:2,three:3,four:4,small:m("i",{className:"small fa fa-photo"}),medium1:m("i",{className:"medium1 fa fa-photo"}),medium2:m("i",{className:"medium2 fa fa-photo"}),large:m("i",{className:"large fa fa-photo"}),mediaLeft:e("Editor|Left"),mediaRight:e("Editor|Right"),center:e("Editor|Center"),left:e("Editor|Media on Left"),right:e("Editor|Media on Right"),noImage:e("Editor|No Media"),alt:e("Editor|Alternating"),text:e("Editor|Text"),button:e("Editor|Button"),signup:e("Editor|Sign Up"),images:e("Editor|App Store"),overlay:e("Editor|Overlay"),card:e("Editor|Card"),swap:e("Editor|Swap Titles")}[t]}function c(e){return(0,W.default)(e,[],function(){return{themeName:V.default.getThemeName()}})}Object.defineProperty(t,"__esModule",{value:!0})
t.BaseLayoutButton=void 0
var u,d,p=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),m=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&s)for(var a in s)void 0===n[a]&&(n[a]=s[a])
else n||(n=s||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),c=0;c<r;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
t.connectToStores=c
var h=n(1),g=i(h),v=n(13),y=i(v),b=n(6),_=i(b),w=n(64),E=i(w),C=n(2033),x=i(C),N=n(66),k=i(N),S=n(14),P=i(S),T=n(3),L=i(T),M=n(237),O=i(M),I=n(547),D=i(I),B=n(18),A=i(B),j=n(2066),H=i(j),R=n(532),U=i(R),F=n(5),V=i(F),z=n(87),W=i(z)
t.BaseLayoutButton=(u=k.default.decorate(D.default.enableAfterMount()),u(d=function(t){function n(e){o(this,n)
var t=s(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e))
t.state={showLayoutOptions:!1}
t._bind("_updateLayout","_toggleLayoutOptions","_onClickSave","_clickRotateLayout","_getKeysByLevel")
t._getSetLevelFn=U.default.boundParamsMemoizer(t._setLevelKey,t)
t._createLevelKeys(t.props.layoutVariation)
t._keyCaches={}
t.cacheLevel=-1
return t}r(n,t)
p(n,[{key:"componentDidMount",value:function(){if(this.cacheLevel!==-1){var e=this.cacheLevel,t=this._levelKeys[e]
this._keyCaches[t]=L.default.clone(this._levelKeys)}this.props.layoutOptions||console.warn("Section has no layout options defined!")}},{key:"componentWillUpdate",value:function(e){e.layoutVariation!==this.props.layoutVariation&&this._createLevelKeys(e.layoutVariation)}},{key:"componentDidUpdate",value:function(e,t){e.layoutVariation!==this.props.layoutVariation&&window.edit_page.Event.publish("Layout.afterChange",{target:(0,_.default)(y.default.findDOMNode(this))})
!t.showLayoutOptions&&this.state.showLayoutOptions&&(0,_.default)(this.refs.componentDOM).closest(".s-section-editor-wrapper").addClass("background-editor-opened")
t.showLayoutOptions&&!this.state.showLayoutOptions&&(0,_.default)(this.refs.componentDOM).closest(".s-section-editor-wrapper").removeClass("background-editor-opened")}},{key:"_bind",value:function(){for(var e=this,t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i]
n.forEach(function(t){return e[t]=e[t].bind(e)})}},{key:"_createLevelKeys",value:function(e){this._levelKeys=e.split("-")}},{key:"_updateLayout",value:function(e){this.props.updateLayout(L.default.remove(L.default.clone(e),function(e){return""!==e.trim()}).join("-"))}},{key:"_setLevelKey",value:function(e,t){var n=this.cacheLevel
if(e===n&&this._levelKeys[e]!==t)return this._keyCaches[t]?this.updateCachedKeys(L.default.clone(this._keyCaches[t])):this.updateToDefaultLayout(t)
for(var i=this._levelKeys,o=[],s=this.props.layoutOptions,r=0;r<e;r++)s=s[i[r]]
o[e]=t
s=s[t]
for(var l=i.length,c=e+1;c<l;c++){o[c]=a(s,i[c])
s=s[o[c]]}var u=L.default.merge([],i,o)
this._updateLayout(u)
e!==n&&n!==-1&&(this._keyCaches[i[n]]=u)}},{key:"_getKeysByLevel",value:function(e){for(var t=this.props.layoutOptions,n=0;n<e;n++){t=t[this._levelKeys[n]]
if(!t)return[]}return"object"===("undefined"==typeof t?"undefined":f(t))?Object.keys(t):[]}},{key:"_getSmallButtonClass",value:function(e){var t=this._getKeysByLevel(e).length
return 2===t?"small-buttons two":4===t?"small-buttons four":"small-buttons"}},{key:"_getLayoutIndex",value:function(){var e=this.props.layoutVariation,t=this.getRotationKeys().indexOf(e)
return e&&t!=-1?t:null}},{key:"_getLayoutStatus",value:function(){var e=this._getLayoutIndex()
return null!==e?"ABCDEFGHI"[this._getLayoutIndex()]:"A"}},{key:"_clickRotateLayout",value:function(){if(this.state.showLayoutOptions)return this._onClickSave()
var e=(this.props.layoutVariation,this.getRotationKeys()),t=this._getLayoutIndex()+1;(!t||t>=e.length)&&(t=0)
var n=e[t]||""
if(n){this.props.updateLayout(n)
O.default.track("Change Layout - Editor v2",{section:this.sectionName})
A.default.clickLayout()
A.default.save()}}},{key:"_onClickSave",value:function(){this.setState({showLayoutOptions:!1})
A.default.save()}},{key:"_toggleLayoutOptions",value:function(){this.setState({showLayoutOptions:!this.state.showLayoutOptions})
this.state.showLayoutOptions||O.default.track("Click Advanced Layout - Editor v1",{section:this.sectionName})}},{key:"_renderCheckBox",value:function(e){var t=e.levelNum,n=(e.text,e.checkedKey),i=e.unCheckedKey,o=this._levelKeys[t],s=this._getKeysByLevel(t)
if(o&&s.length>=2){var r=this._getSetLevelFn(t,o===n?i:n)
return m("div",{className:"layout-level-button layout-checkbox dark-bg",onClick:r},void 0,m("input",{type:"checkbox",checked:o===n,onChange:r}),m("span",{},void 0,e.text))}}},{key:"_renderLayoutButtons",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l,i=this._levelKeys[e],o=this._getKeysByLevel(e)
if(i&&o.length>=2){var s=this.getButtonClassMapping()[e]
return m("div",{className:"layout-level-button dark-bg "+s},void 0,o.map(function(o){return m("div",{className:(0,P.default)("s-btn small dark-gray no-margin",{selected:i===o}),onClick:t._getSetLevelFn(e,o)},o,n(o))}))}}},{key:"render",value:function(){var t=this._getLayoutStatus(),n=this.hideAdvancedOptions||!1||!1,i=this.state.showLayoutOptions,o=m(x.default,{className:"center clickable small title layout-button",onTap:this._clickRotateLayout,rel:"tooltip-left",title:e("Editor|Click to change layouts.")},void 0,m("span",{},void 0,e("Layout"),t&&!i&&m("span",{className:"layout-status"},void 0,t)))
return this.props.layoutOptions?g.default.createElement("div",{ref:"componentDOM",className:(0,P.default)("s-component s-layout",{advanced:!n,opened:i,closed:!i})},m("div",{className:"s-component-editor dark-bg"},void 0,n?o:m("div",{className:"layout-button-wrapper"},void 0,o,m(x.default,{className:"advanced-options-button",rel:"tooltip-left",title:e("Editor|More layout options!"),onClick:this._toggleLayoutOptions},void 0,e("Editor|Advanced"),m("i",{className:"fa fa-angle-down",style:{marginLeft:"5px"}}))),!n&&m(E.default,{},void 0,i&&m(H.default,{component:g.default.DOM.div,className:"layout-panel"},void 0,this.renderLayoutOptions(),m("div",{className:"save-button green s-btn small",onClick:this._onClickSave},void 0,e("Editor|Save")))))):null}}])
return n}(g.default.Component))||d)}).call(t,n(9))},2296:function(e,t,n){"use strict"
function i(){return p}function o(e){return Object.assign({},p,e)}function s(e){var t=(0,d.generateItemClassByColumnsNum)(e.columnsNum,!0),n=e.box?m.box:m.text
return{text:function(){return o({repeatableClass:m.repeatable,itemClass:t,textClass:n})},button:function(){return o({repeatableClass:m.repeatable,itemClass:t,textClass:n,buttonClass:m.button})}}}function r(e,t){var n=e.getRepeatableBinding("repeatable1").get().size,i=""
i=n<=2?"":n%2&&0==t?"":"half"
if(2==n)0==t&&(i+=" border-bottom")
else{t<n-2&&(i+=" border-bottom")
t>0&&t%2&&n%2&&(i+=" border-right")
t%2||n%2||(i+=" border-right")}n<=4&&(i+=" large-info-box")
return"s-persp-column s-mhi "+i}function a(e,t){return"s-persp-container absolute "+["topRight","bottomLeft","bottomRight"][t]}function l(e){return function(t,n){var i=t,o=i.getRepeatableBinding("repeatable1").sub(n),s=""
i.sbAnyHasContent("text1 text2",{parentBinding:o,showOnly:!1})&&(s="s-persp-"+e)
return s}}function c(e){return{text:function(){return o({itemClass:a,textClass:l(e)})},button:function(){return o({itemClass:a,textClass:l(e),buttonClass:m.button})}}}function u(){return{text:function(){return o({repeatableClass:"s-mh",itemClass:r,textClass:"s-info-box"})},button:function(){return o({repeatableClass:"s-mh",itemClass:r,textClass:"s-info-box",buttonClass:"s-text-button"})}}}Object.defineProperty(t,"__esModule",{value:!0})
var d=n(2293),p={repeatableClass:"",itemClass:"",textClass:"",buttonClass:""},m={repeatable:"s-mh",text:"s-mhi",box:"s-mhi s-info-box",button:"s-text-button"},f={default:{text:{one:s({columnsNum:1}),two:s({columnsNum:2}),three:s({columnsNum:3}),four:s({columnsNum:4})},box:{one:s({columnsNum:1,box:!0}),two:s({columnsNum:2,box:!0}),three:s({columnsNum:3,box:!0}),four:s({columnsNum:4,box:!0})}},perspective:{text:{overlay:c("overlay"),card:c("card")},box:{center:u(),mediaLeft:u(),mediaRight:u()}}},h=(0,d.getLayoutMapping)(f),g={default:{"1col":"box-one-text","2col":"box-two-text","3col":"box-three-text","4col":"box-four-text"},perspective:{overlay:"text-overlay-text",card:"text-card-text",mediaLeft:"box-mediaLeft-text",mediaRight:"box-mediaRight-text",center:"box-center-text"}},v={default:{text:function(e){return"text-one-"+e},box:function(e){return"box-two-"+e}},perspective:{text:function(e){return"text-card-"+e},box:function(e){return"box-center-"+e}}}
t.default={getDefaultLayoutKey:function(e,t){t=t||""
var n=(g[e]||g.default)[t];(h[e]||h.default)[t]&&(n=t)
if(!n){var i=t.indexOf("button")!==-1?"button":"text",o=t.split("-")[0],s=v[e]||v.default
n=s[o]&&s[o](i)}n||(n=Object.keys(h[e]||h.default)[0])
return n},getLayout:function(e,t){return(h[e]||h.default)[t]||i},getLayoutOptions:function(e){return f[e]||f.default},getLayoutMapping:function(e){return h[e]||h.default}}
e.exports=t.default},2297:function(e,t,n){(function(t){"use strict"
var i,o,s,r,a,l,c,u,d
s=n(1)
r=n(13)
a=n(2033)
i=n(15)
c=n(237)
d=n(3)
o=n(18)
u=n(33)
l=n(547)
e.exports=i.createPageComponent({displayName:"LayoutSelector",mixins:[l.enableAfterMount()],bobcatPropTypes:{data:{layoutOptions:s.PropTypes.array,layoutVariation:s.PropTypes.string,binding:s.PropTypes.object.isRequired}},getBobcatDefaultProps:function(){var e
return e={layoutOptions:[],layoutVariation:null}},componentDidMount:function(){if(!this.props.layoutOptions.length)return console.warn("Section has no layout options defined!")},componentDidUpdate:function(e){if(e.layoutVariation!==this.props.layoutVariation)return window.edit_page.Event.publish("Layout.afterChange",{target:$(r.findDOMNode(this))})},_updateLayout:function(e){return this.updateData({layout_variation:e})},_getLayoutKeys:function(){return d.pluck(this.props.layoutOptions,"key")},_getLayoutIndex:function(){var e,t,n
t=this._getLayoutKeys()
n=this.props.layoutVariation
e=t.indexOf(n)
return n&&e!==-1?e:null},_clickLayout:function(){var e,t
t=this._getLayoutKeys()
e=this._getLayoutIndex()
null==e&&(e=0)
this._updateLayout(t[(e+1)%t.length])
c.track("Change Layout - Editor v2")
o.clickLayout()
return o.save()},_layoutStatus:function(){var e
e=this._getLayoutIndex()
return null!=e?"ABCDEFGHI"[this._getLayoutIndex()]:"A"},render:function(){return this.props.layoutOptions.length?s.createElement("div",{className:"s-component s-layout"},s.createElement("div",{className:"s-component-editor"},s.createElement(a,{className:"center clickable small title",onTap:this._clickLayout,rel:"tooltip-left",title:t("Editor|Switch layout for this section.")},s.createElement("span",null,t("Layout"),this._layoutStatus()?s.createElement("span",{className:"layout-status"},this._layoutStatus()):void 0)))):null}})}).call(t,n(9))},2298:function(e,t,n){"use strict"
function i(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n
return e}function o(){return h}function s(e){return Object.assign({},h,e)}function r(e,t,n){var i=(0,f.getThemeFeature)("narrowMedia")&&11!==e,o=i?14:16,r=16,a=i?e-1:e,l=i?8:a,c=i?10:16
if(11===e)c=l=14
else if("onyx_new"===g&&"right"===t){o=15
c=15}if("persona"===g){o=12
r=12
c=12}var u=(0,f.generateColumnClassWithOffset)(a,o,r),d=(0,f.generateColumnClass)(o-a),p=(0,f.generateColumnClassWithOffset)(l,l,r),m=(0,f.generateColumnClassWithOffset)(c,c,r),h="half-offset-right",v="half-offset-left"
11!==a&&9!==a||(h=v="")
if("persona"===g)switch(t){case"right":return function(){return s({repeatableClass:"s-media-right s-layout-mediaRight",innerItemClass:(0,f.generateColumnClass)(12),mediaClass:u+" s-right-in-row right omega",singleMediaClass:p+" s-right-in-row right alpha omega",textClass:d+" s-left-in-row right alpha",singleTextClass:m+" s-left-in-row right alpha omega",textInnerClass:h,buttonClass:n?"s-text-button":""})}
case"alt":return function(){return s({repeatableClass:"s-media-alt s-layout-alt",innerItemClass:(0,f.generateColumnClass)(12),mediaClass:function(e,t){return u+" "+(t%2?"s-right-in-row right omega":"s-left-in-row alpha")},singleMediaClass:function(e,t){return p+" "+(t%2?"s-right-in-row right alpha omega":"s-left-in-row alpha omega")},textClass:function(e,t){return d+" "+(t%2?"s-left-in-row right alpha":"s-right-in-row omega")},singleTextClass:function(e,t){return m+" "+(t%2?"s-left-in-row right alpha omega":"s-right-in-row alpha omega")},textInnerClass:function(e,t){return t%2?h:v},buttonClass:n?"s-text-button":""})}}switch(t){case"left":return function(){return s({repeatableClass:"s-media-left s-layout-mediaLeft",mediaClass:u+" s-left-in-row",singleMediaClass:p+" s-left-in-row",textClass:d+" s-right-in-row",singleTextClass:m+" s-right-in-row",textInnerClass:v,buttonClass:n?"s-text-button":""})}
case"right":return function(){return s({repeatableClass:"s-media-right s-layout-mediaRight",mediaClass:u+" s-right-in-row right",singleMediaClass:p+" s-right-in-row right",textClass:d+" s-left-in-row right",singleTextClass:m+" s-left-in-row right",textInnerClass:h,buttonClass:n?"s-text-button":""})}
case"alt":return function(){return s({repeatableClass:"s-media-alt s-layout-alt",mediaClass:function(e,t){return u+" "+(t%2?"s-right-in-row right":"s-left-in-row")},singleMediaClass:function(e,t){return p+" "+(t%2?"s-right-in-row right":"s-left-in-row")},textClass:function(e,t){return d+" "+(t%2?"s-left-in-row right":"s-right-in-row")},singleTextClass:function(e,t){return m+" "+(t%2?"s-left-in-row right":"s-right-in-row")},textInnerClass:function(e,t){return t%2?h:v},buttonClass:n?"s-text-button":""})}}}function a(e){function t(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
return{left:r(e.mediaColumns,"left",t),right:r(e.mediaColumns,"right",t),alt:r(e.mediaColumns,"alt",t)}}return{text:t(),button:t(!0)}}function l(e,t){var n=e,i=n.getRepeatableBinding("repeatable1").sub(t),o=""
o=(0,f.getThemeFeature)("leftAlignColumnsMedia")?"text1":"text1 text2 text3"
var s=n.sbUniformTextAlignment(o,{parentBinding:i})
return"glow"===g?"s-mhi "+s+" eight columns offset-four":"s-mhi "+s}function c(e){return e<2?"s-mh":function(t){var n=t,i=n.getRepeatableBinding("repeatable1"),o=""
if((0,f.getThemeFeature)("leftAlign")){var s=i.get().size
s<e&&(o=n.sbUniformTextAlignment("text1 text2"))}return"s-mh "+o}}function u(e){return{text:function(){return s(e)},button:function(){return s(_.extend({},e,{buttonClass:"s-text-button"}))}}}function d(e){return u({repeatableClass:c(e.columnsNum),itemClass:(0,f.generateItemClassByColumnsNum)(e.columnsNum),mediaClass:l})}function p(){return u({repeatableClass:c(1)+" s-layout-normal",innerItemClass:(0,f.generateItemClassByColumnsNum)(1).replace("no-float","")+("persona"===g?"":" center"),mediaClass:l})}Object.defineProperty(t,"__esModule",{value:!0})
var m,f=n(2293),h={repeatableClass:"",itemClass:"",innerItemClass:"",mediaClass:"",singleMediaClass:"",textClass:"",singleTextClass:"",textInnerClass:"",buttonClass:""},g=(0,f.getThemeName)(),v={two:d({columnsNum:2}),three:d({columnsNum:3}),four:d({columnsNum:4})},y={default:{col:v,row:{small:a({mediaColumns:4}),medium1:a({mediaColumns:6}),medium2:a({mediaColumns:8}),large:a({mediaColumns:10})},media:{center:p(),left:{text:r(11,"left"),button:r(11,"left",!0)},right:{text:r(11,"right"),button:r(11,"right",!0)},alt:{text:r(11,"alt"),button:r(11,"alt",!0)}}},persona:{col:v,row:{small:a({mediaColumns:3}),medium1:a({mediaColumns:4}),medium2:a({mediaColumns:6}),large:a({mediaColumns:8})},media:{center:p(),left:{text:r(9,"left"),button:r(9,"left",!0)},right:{text:r(9,"right"),button:r(9,"right",!0)},alt:{text:r(9,"alt"),button:r(9,"alt",!0)}}},perspective:function(){var e={col:{three:{text:function(){return s({itemClass:"s-persp-column third"})},button:function(){return s({itemClass:"s-persp-column third",buttonClass:"s-text-button s-persp-column"})}}},row:{large:{text:function(){return s({mediaClass:"s-persp-column half",textClass:"s-persp-column half"})},button:function(){return s({mediaClass:"s-persp-column half",textClass:"s-persp-column half",buttonClass:"s-text-button"})}}},media:{center:p()}}
return{center:e,mediaLeft:e,mediaRight:e}}()},b=(0,f.getLayoutMapping)(y),w={default:(m={"columns-2col":"col-two-text","columns-3col":"col-three-text","columns-4col":"col-four-text","columns-":"col-three-text","media-normal":"media-center-text","media-mediaLeft":"media-left-text","media-mediaRight":"media-right-text","media-alt":"media-alt-text","media-":"media-center-text"},i(m,"media-alt","media-alt-text"),i(m,"rows-mediaLeft","row-medium1-text-left"),i(m,"rows-mediaRight","row-medium1-text-right"),i(m,"rows-alt","row-medium1-text-alt"),i(m,"rows-","row-medium1-text-left"),m),perspective:{"columns-mediaLeft":"mediaLeft-col-three-text","columns-mediaRight":"mediaRight-col-three-text","columns-center":"center-col-three-text","columns-":"mediaLeft-col-three-text","rows-mediaLeft":"mediaLeft-row-large-text","rows-mediaRight":"mediaRight-row-large-text","rows-center":"center-row-large-text","rows-":"mediaLeft-row-large-text","media-mediaLeft":"mediaLeft-media-center-text","media-mediaRight":"mediaRight-media-center-text","media-center":"center-media-center-text","media-":"mediaLeft-media-center-text"}},E={default:{col:function(e){return"col-three-"+e},row:function(e){return"row-medium1-"+e+"-left"},media:function(e){return"media-center-"+e}},perspective:{col:function(e,t){return e+"-col-three-"+t},row:function(e,t){return e+"-row-large-"+t},media:function(e,t){return e+"-media-center-"+t}}}
t.default={getDefaultLayoutKey:function(e,t,n){var i=void 0
t=t||""
if((b[e]||b.default)[t])return t
n&&(i=(w[e]||w.default)[n+"-"+t])
if(!i){var o=t.indexOf("button")!==-1?"button":"text",s="perspective"===e?1:0,r=t.split("-"),a=(E[e]||E.default)[r[s]]
i="perspective"===e?a?a(r[0],o):"":a?a(o):""}i||(i=Object.keys(b[e]||b.default)[0])
return i},getLayout:function(e,t){return(b[e]||b.default)[t]||h||o},getLayoutOptions:function(e){return y[e]||y.default}}
e.exports=t.default},2299:function(e,t,n){"use strict"
var i,o,s,r,a
o=n(1)
i=n(15)
s=n(330)
r=n(895)
a=!1
e.exports=i.create({displayName:"ItemTextGroup",propTypes:{section:o.PropTypes.object.isRequired,itemBinding:o.PropTypes.object.isRequired,className:o.PropTypes.string,binding:o.PropTypes.object.isRequired,upperChildrenPosition:o.PropTypes.bool},shouldComponentUpdateOverride:function(){return!0},renderChildren:function(e){return o.createElement("div",{className:e},this.props.children)},render:function(){var e,t,n,i,r,l,c,u,d,p,m,f,h,g,v
h=this.props.section
d=this.props.itemBinding
g=null==(m=this.props.showItemSubtitle)||m
l=this.props.deprecateItemSubtitle
v=this.props.upperChildrenPosition
i=null!=(f=this.props.className)?f:""
u=this.props.hideTextGroupTitle
if(!h)throw new Error("ItemTextGroup is expecting a section prop!")
if(!d)throw new Error("ItemTextGroup is expecting an itemBinding prop!")
if(g){r=(c=h.getThemeFeature("itemSubtitleDefaultStyle"))?{defaultStyle:c}:r={}
p=o.createElement("div",{className:"s-item-subtitle"},o.createElement(s,Object.assign({tagName:"h6",textType:"body"},r,h.getComponentProps("text2",d))))
e="text3"
t="text1 text2 text3"}else{p=null
e="text2"
t="text1 text2"}n=h.sbUniformTextAlignment(t,{parentBinding:d})
return h.sbAnyHasContent(t,{parentBinding:d})||this.props.children?o.createElement("div",{className:"s-item-text-group "+i},v?this.renderChildren(n):void 0,h.sbHasContent("text1",{parentBinding:d})&&!u?o.createElement("div",{className:"s-item-title"},o.createElement(s,Object.assign({tagName:"h3",textType:"heading"},h.getComponentProps("text1",d)))):void 0,g?l?(!a&&h.sbHasContent("text2",{parentBinding:d,showOnly:!1})?a=!0:void 0,a?p:void 0):p:void 0,o.createElement("div",{className:"s-item-text"},o.createElement(s,Object.assign({tagName:"div",textType:"body"},h.getComponentProps(e,d)))),v?void 0:this.renderChildren(n)):null}})},2300:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(){return p}function s(e){return Object.assign({},p,e)}function r(e,t){return function(){var n="right"===e?"right":"",i="container s-rva s-layout-"+u.default.camelCase(t+"-"+e),o="noImage"!=e,r="",a="",l=""
if("noImage"===e)r="s-rva-text sixteen columns"
else{l="right"===e?"half-offset-left":"half-offset-right"
r="s-rva-text eight columns "+n
a="s-rva-media eight columns "+n}return s({layoutClass:i,textClass:r,textOffsetClass:l,mediaClass:a,type:t,showImage:o})}}function a(e){return{left:r("right",e),right:r("left",e),noImage:r("noImage",e)}}function l(e){return{left:{swap:function(){return s(Object.assign(a(e).left(),{type:e,swapTitle:!0}))},unswap:function(){return s(Object.assign(a(e).left(),{type:e,swapTitle:!1}))}},right:{swap:function(){return s(Object.assign(a(e).right(),{type:e,swapTitle:!0}))},unswap:function(){return s(Object.assign(a(e).right(),{type:e,swapTitle:!1}))}},noImage:{swap:function(){return s(Object.assign(a(e).noImage(),{type:e,showImage:!1,swapTitle:!0}))},unswap:function(){return s(Object.assign(a(e).noImage(),{type:e,showImage:!1,swapTitle:!1}))}}}}Object.defineProperty(t,"__esModule",{value:!0})
var c=n(3),u=i(c),d=n(2293),p={layoutClass:"",mediaClass:"",textClass:"",textOffsetClass:"",type:"",showImage:!0},m={button:{left:function(){return s({type:"button"})},right:function(){return s({type:"button"})},noImage:function(){return s({type:"button",showImage:!1})}},images:{left:function(){return s({type:"images"})},right:function(){return s({type:"images"})},noImage:function(){return s({type:"images",showImage:!1})}},signup:{left:function(){return s({type:"signup"})},right:function(){return s({type:"signup"})},noImage:function(){return s({type:"signup",showImage:!1})}}},f={button:l("button"),images:l("images"),signup:l("signup")},h={default:{button:a("button"),images:a("images"),signup:a("signup")},persona:m,perspective:m,glow:f},g=(0,d.getLayoutMapping)(h),v={default:{buttonRight:"button-left",signupRight:"signup-left",imagesRight:"images-left",buttonLeft:"button-right",signupLeft:"signup-right",imagesLeft:"images-right"}}
t.default={getDefaultLayoutKey:function(e,t,n){t=t||""
var i=(v[e]||v.default)[t];(g[e]||g.default)[t]&&(i=t)
if("glow"===e){i||(t.indexOf("button")!==-1?i="button-left-swap":t.indexOf("signup")!==-1?i="signup-left-swap":t.indexOf("images")!==-1&&(i="images-left-swap"))
i||"signup_form"!==n||(i="signup-noImage-swap")}else{i||(t.indexOf("button")!==-1?i="button-left":t.indexOf("signup")!==-1?i="signup-left":t.indexOf("images")!==-1&&(i="images-left"))
i||"signup_form"!==n||(i="signup-noImage")}i||(i=Object.keys(g[e]||g.default)[0])
return i},getLayout:function(e,t){return(g[e]||g.default)[t]||o},getLayoutOptions:function(e){return h[e]||h.default}}
e.exports=t.default},2301:function(e,t,n){"use strict"
function i(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}function o(){return p}function s(e){return Object.assign({},p,e)}function r(){var e="columns half-fixed no-float small-icons"
"perspective"===m&&(e="s-persp-column half-fixed no-float small-icons")
return s({itemClass:e,naturalImage:!0})}function a(e){var t=e.get().size,n=(0,d.getThemeFeature)("narrowMedia"),i=""
i=t<=1?n?"third":"sixteen":2==t?n?"third":"eight":3==t?"third":4==t?"four":"three"
"persona"===m&&(i="three")
"ion"===m&&(i="four")
i+=" columns half-fixed no-float"
return s({itemClass:i,naturalImage:!1})}function l(e,t){var n=t.get().size,i="half";(3===n&&"center"===e||n>4)&&(i="third")
i+=" half-fixed s-persp-column"
return s({itemClass:i,naturalImage:!1})}Object.defineProperty(t,"__esModule",{value:!0})
var c=n(3),u=i(c),d=n(2293),p={itemClass:"columns half-fixed no-float",naturalImage:!0},m=(0,d.getThemeName)(),f={default:{col:a,natural:r},perspective:function(){var e=function(e){return{col:u.curry(l)(e)}}
return{center:e("center"),mediaLeft:e("left"),mediaRight:e("right")}}()},h=(0,d.getLayoutMapping)(f),g={perspective:{mediaLeft:"mediaLeft-col",mediaRight:"mediaRight-col",center:"center-col"}}
t.default={getDefaultLayoutKey:function(e,t,n){var i=void 0
t=t||""
if((h[e]||h.default)[t])return t
n&&(i=(g[e]||g.default)[n+"-"+t])
i||(i=Object.keys(h[e]||h.default)[0])
return i},getLayout:function(e,t){return(h[e]||h.default)[t]||p||o},getLayoutOptions:function(e){return f[e]||f.default}}
e.exports=t.default},2302:function(e,t,n){"use strict"
function i(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(3),s=(i(o),n(2293)),r={itemClass:"columns half-fixed no-float"},a={default:["fifth","fifth","fifth","fifth","fifth","third","four","four","fifth"]},l=(0,s.getThemeName)(),c=function(){return r},u=function(e){return Object.assign({},r,e)},d=function(e,t){var n=e
a[n]||(n="default")
var i=t-1
a[n][i]||(i=a[n].length-1)
return a[n][i]},p=function(e){return e.get().size},m=function(e){var t=p(e),n=[]
n.push(d(l,t))
6==t?n.push("hide-linker-three"):7==t||8==t?n.push("hide-linker-four"):n.push("hide-linker-five")
"perspective"===l?n.push("s-persp-column"):n.push("columns")
n.push("no-float")
n.push("process-horizontal-layout")
return u({itemClass:n.join(" ")})},f=function(){var e=["eight"]
"perspective"===l?e.push("s-persp-column"):e.push("columns")
e.push("no-float")
e.push("process-vertical-layout")
return u({itemClass:e.join(" ")})},h={default:{horizontal:m,vertical:f}},g=(0,s.getLayoutMapping)(h),v={getDefaultLayoutKey:function(e,t){var n=Object.keys(g[e]||g.default)
return n.includes(t)?t:n[0]},getLayout:function(e,t){return(g[e]||g.default)[t]||r||c},getLayoutOptions:function(e){return h[e]||h.default},getItemSize:p}
t.default=v
e.exports=t.default},2303:function(e,t,n){"use strict"
function i(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}function o(){return m}function s(e){return Object.assign({},m,e)}function r(e){return{normal:e,full:e}}function a(e){function t(e){return{innerMediaClass:"media-wrapper "+e.sbUniformTextAlignment("text1 text2"),buttonClass:"s-button-group "+e.sbUniformTextAlignment("text1 text2")}}return{subTop:r(function(n){return s(d.extend({},e,t(n),{isSubtitleOnBottom:!1}))}),bottom:r(function(n){return s(d.extend({},e,t(n),{}))}),right:r(function(n){return s(d.extend({},e,t(n),{outerMediaClass:"sixteen columns media-outer",textClass:"ten columns no-float",buttonClass:"six columns no-float s-button-group",outerContainerClass:"container s-layout-skinny",innerContainerClass:""}))})}}function l(e){function t(e){return{innerMediaClass:"media-wrapper "+e.sbUniformTextAlignment("text1 text2"),outerContainerClass:"s-persp-container s-layout-center",buttonClass:"s-button-group "+e.sbUniformTextAlignment("text1 text2")}}return{subTop:r(function(n){return s(d.extend({},e,t(n),{isSubtitleOnBottom:!1}))}),bottom:r(function(n){return s(d.extend({},e,t(n),{}))})}}function c(e){return h[e]||h.default}Object.defineProperty(t,"__esModule",{value:!0})
var u=n(3),d=i(u),p=n(2293),m={outerContainerClass:"container",innerContainerClass:"sixteen columns",outerMediaClass:"",innerMediaClass:"",textClass:"",buttonClass:"",isSubtitleOnBottom:!0},f=(0,p.getThemeName)()
if("perspective"===f){m.outerContainerClass="s-persp-container"
m.innerContainerClass="s-persp-column"}var h={default:{center:a({})},perspective:{center:l({})}},g=(0,p.getLayoutMapping)(h),v={default:{normal:"center-subTop-full",subBottom:"center-bottom-full",withMedia:"center-bottom-full",center:"center-bottom-normal",skinny:"center-right-normal",mediaTop:"center-bottom-normal"}},y={default:"center-subTop-normal"}
t.default={getDefaultLayoutKey:function(e,t){t=t||""
var n=(v[e]||v.default)[t];(g[e]||g.default)[t]&&(n=t)
n||(n=(0,p.getClosestKey)(c(e),t,3))
if(!n){t.indexOf("button")!==-1
n=y.default}return n},getLayout:function(e,t){return(g[e]||g.default)[t]||o},getLayoutOptions:c}
e.exports=t.default},2304:function(e,t,n){(function(i){"use strict"
function o(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&s)for(var a in s)void 0===n[a]&&(n[a]=s[a])
else n||(n=s||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),c=0;c<r;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),a=(Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},n(1)),l=s(a),c=n(64),u=s(c),d=n(2033),p=s(d),m=n(28),f=s(m),h=n(6),g=s(h),v=n(3),y=s(v),b=n(15),_=s(b),w=n(12),E=s(w),C=n(5),x=(s(C),n(334)),N=s(x),k=n(33),S=o(k),P=n(837),T=s(P),L=n(56),M=o(L),O=n(67),I=s(O),D=n(44),B=s(D),A=n(533),j=s(A),H=n(838),R=s(H),U=n(534),F=s(U),V=n(2066),z=s(V),W=n(551),K=s(W),G=n(891),q=s(G),$=n(840),Y=(s($),n(176)),X=s(Y),J=n(2064),Q=n(890),Z=(s(Q),n(36)),ee=s(Z),te=n(136),ne=s(te),ie={data:{url:F.default.url,textColor:l.default.PropTypes.oneOf(["dark","light","overlay"]),sizing:l.default.PropTypes.oneOf(["cover","contain","tile","center"]),backgroundVariation:l.default.PropTypes.string,videoUrl:l.default.PropTypes.string,videoHtml:l.default.PropTypes.string,stockKey:l.default.PropTypes.string,binding:l.default.PropTypes.object,h:l.default.PropTypes.number,w:l.default.PropTypes.number,s:l.default.PropTypes.number,storageKey:l.default.PropTypes.string,storage:l.default.PropTypes.oneOf(["ali","c","qn"]),format:l.default.PropTypes.oneOf(["jpg","jpeg","png","gif","bmp","ico"]),bgClassNames:l.default.PropTypes.array,userClassName:l.default.PropTypes.string},designer:{size:l.default.PropTypes.string,assetType:l.default.PropTypes.string,minimal:l.default.PropTypes.bool,allowColors:l.default.PropTypes.bool,footerSection:l.default.PropTypes.bool}},oe=function(){return{data:{url:"",textColor:"light",sizing:"cover",backgroundVariation:"",videoUrl:"",videoHtml:"",userClassName:"",bgClassNames:[]},designer:{size:"background",assetType:"background",minimal:!1,allowColors:!0,footerSection:!1}}},se=_.default.createPageComponent({displayName:"BackgroundEditor",mixins:[(0,B.default)("editor"),R.default,j.default],bobcatPropTypes:ie,getBobcatDefaultProps:oe,componentWillMount:function(){this.initMeta({currentType:E.default.getInChina()||!this._hasVideoBg()?"image":"video",showVideoPanel:!1})},componentDidMount:function(){this.getData("style")&&this.updateData({sizing:this.getData("style")})
if(this.getData("selectedClassName")){var e=this.getData("selectedClassName")
e.indexOf("strikingly-dark-text")!==-1?this.updateData({textColor:"dark"}):e.indexOf("strikingly-text-overlay")!==-1?this.updateData({textColor:"overlay"}):this.updateData({textColor:"light"})}T.default.loadImageEditor()},componentDidUpdate:function(e){"normal"===e._state&&"editor"===this.props._state&&(0,g.default)(this.refs.componentDOM).closest(".s-section-editor-wrapper").addClass("background-editor-opened")
if("editor"===e._state&&"normal"===this.props._state){(0,g.default)(this.refs.componentDOM).closest(".s-section-editor-wrapper").removeClass("background-editor-opened")
this._setShowVideoPanel(!1)}},componentWillUnmount:function(){},_hasImage:function(){var e=M.createImage(this.dtProps).getUrl(this.dsProps.size)
this._dataBeforePreview&&(e=M.createImage(this._dataBeforePreview).getUrl(this.dsProps.size))
return S.imageHasContent(e)},_hasVideoBg:function(){var e=this.dtProps.videoHtml
this._dataBeforePreview&&(e=this._dataBeforePreview.videoHtml)
return!!e},_hasOverlay:function(){return"overlay"===this.dtProps.textColor},_needToShowRemoveButton:function(){return this._hasImage()||this._hasVideoBg()},_changePositionOfAddVideoPanel:function(){var e=(0,g.default)(this.refs.componentDOM),t=e.find(".bg-video-panel"),n=e.find(".add-video-btn")
t.css({top:n.closest(".clearfix").position().top-31+"px"})},_storePreviewData:function(){ee.default.isBackgroundPreviewOn=!0
this.updateMeta({isPreview:!0})
this._dataBeforePreview=this.getDefaultBinding().toJS()},_clearPreviewData:function(){ee.default.isBackgroundPreviewOn=!1
this.updateMeta({isPreview:!1})
this._dataBeforePreview&&(this._dataBeforePreview=null)},_restorePreviewData:function(){ee.default.isBackgroundPreviewOn=!1
this.updateMeta({isPreview:!1})
if(this._dataBeforePreview){this.updateData(I.default.deleteMeta(this._dataBeforePreview))
this._dataBeforePreview=null}},_getImageProps:function(){return y.default.extend({},this.props,{storePreviewData:this._storePreviewData,clearPreviewData:this._clearPreviewData,restorePreviewData:this._restorePreviewData,showImageOptions:this._hasImage()&&!this._hasVideoBg(),showDefaultColor:this._isAllowUserClassName()})},_isAllowUserClassName:function(){var e=this.dtProps.bgClassNames.length
return!(!e||!this.dsProps.allowColors)},_getVideoProps:function(){return y.default.extend({},this.props,{storePreviewData:this._storePreviewData,clearPreviewData:this._clearPreviewData,restorePreviewData:this._restorePreviewData,hasVideo:this._hasVideoBg(),changePositionOfAddVideoPanel:this._changePositionOfAddVideoPanel})},_onChangeUrlByAdmin:function(e){this.updateData({url:e.target.value})},_onChangeOverlayByAdmin:function(e){this.updateData({textColor:e.target.checked?"light":"overlay"})
this.savePage()},_onClickSwitchType:function(e){this._setCurrentType(e)},_onClickRemove:function(){this.updateData((0,J.dataForEmptyBackground)())
this._clearPreviewData()
this.savePage()},_onClickSave:function(){this.savePage()
this.updateState("normal")},_notifyNative:function(e,t){return null},_rotateClassNames:function(e){var t=this.dtProps,n=t.bgClassNames,i=t.userClassName,o=""
if(i){var s=n.indexOf(i)
o=N.default.getSectionBackgroundByIndex(s+1,n)}else o=n[e]
this.updateData({userClassName:o})},_onClickChangeColor:function(){var e=(0,g.default)(this.refs.componentDOM).closest(".s-section"),t=e.css("backgroundColor"),n=""
this._rotateClassNames(0)
n=e.css("backgroundColor")
t===n&&this._rotateClassNames(1)
this.savePage()},_onToggleCompression:function(){this.updateData({noCompression:!this.props.noCompression})},renderNativeWeb:function(){var e=this,t=this._hasImage(),n=t?{position:"static"}:{}
return l.default.createElement("div",{className:"s-component s-background",ref:"componentDOM",style:n},t?r("div",{className:"s-background-editor-wrapper",onClick:function(t){return e._notifyNative(t,X.default.BACKGROUND_CLICK_MESSAGE)}},void 0):r("div",{className:"s-component-editor"},void 0,r("div",{className:"native-add-background-button",onClick:function(t){return e._notifyNative(t,X.default.CLICK_ADD_BACKGROUND_MESSAGE)}},void 0,i("Editor|Add Background"))))},renderMinimalEditor:function(){return l.default.createElement("div",{className:"s-component s-background",ref:"componentDOM"},r("div",{className:"s-component-editor minimal-size",title:i("Change background color"),onClick:this._onClickChangeColor},void 0,r("div",{className:"title clickable"},void 0,r("div",{className:"s-current-bg-thumbnail "+this.dtProps.userClassName},void 0))))},renderFullBackgroundEditor:function(){var e=this,t=u.default,o=f.default.DOM.input,s=n(2331),a=n(2332),c=E.default.getInChina(),d=E.default.getIsSxl(),m=this._getCurrentType(),h=ne.default.isAdmin(),g=ne.default.isSupport(),v=this.isIframeEditing()
return l.default.createElement("div",{ref:"componentDOM",className:"s-component s-background"+this.addIframeEditingClass()},r("div",{className:"s-component-editor dark-bg",onClick:this.onToggleMobileViewEditorBox},void 0,r(p.default,{className:"title small center clickable"+(v?" hidden":""),onTap:this.toggleEditor},void 0,this.isState("editor")?r("div",{className:"minus"},void 0,r("i",{className:"entypo-down-open-mini"})):r("div",{className:"plus"},void 0,r("i",{className:"entypo-right-open-mini"})),i("Background")),r(t,{},void 0,this.isState("editor")?r(z.default,{component:l.default.DOM.div,className:"main-editor"},void 0,c||d?null:r(K.default,{labelLeft:i("IMAGE"),labelRight:i("VIDEO"),checkedLeft:"image"===m,checkedRight:"video"===m,onClickLeft:function(){return e._onClickSwitchType("image")},onClickRight:function(){return e._onClickSwitchType("video")}}),"image"===m?l.default.createElement(s,this._getImageProps()):l.default.createElement(a,this._getVideoProps()),this._needToShowRemoveButton()?r("div",{className:"clearfix mb"},void 0,r("div",{className:"s-btn small no-margin dark-gray",onClick:this._onClickRemove},void 0,i("Remove"))):null,r("div",{className:"clearfix"},void 0,r("div",{className:"s-btn green small done-button no-margin",onClick:this._onClickSave},void 0,i("Save"))),h||g?r("div",{style:{overflow:"hidden"}},void 0,r("div",{className:"separator"},void 0,r("hr",{})),"ADMIN ONLY:",r("br",{}),r(o,{type:"text",name:"url",value:this.dtProps.url,onChange:this._onChangeUrlByAdmin}),this._hasVideoBg()?r("div",{},void 0,r(o,{type:"checkbox",checked:!this._hasOverlay(),onChange:this._onChangeOverlayByAdmin}),"Check to remove overlay"):"image"===m&&r("div",{style:{marginTop:"30px"},rel:"tooltip-left",title:i("Editor|Notice: No compression will make image slower to load!")},void 0,r(q.default,{label:"No compression",checked:this.props.noCompression,onToggle:this._onToggleCompression}))):null):null)))},render:function(){var e=E.default.getBackgroundForAllSections()
return this.dsProps.minimal?e&&!this.dsProps.footerSection?this.renderFullBackgroundEditor():this._isAllowUserClassName()?this.renderMinimalEditor():null:this.renderFullBackgroundEditor()}})
se.bobcatPropTypes=ie
se.getBobcatDefaultProps=oe
t.default=se
e.exports=t.default}).call(t,n(9))},2305:function(e,t,n){"use strict"
var i,o,s,r,a,l,c,u,d
c=n(13)
i=n(6)
l=n(5)
a=n(835)
o=n(883)
u=n(2063)
d=n(2062)
s=n(2299)
r=n(2294)
e.exports={mixins:[r],displayName:"NewMediaSection",componentWillMount:function(){var e,t,i,o,s
o=l.getThemeName()
t=this._getLayoutVariation()
i=this.getDefaultBinding().get("template_name")
t.split("-").length>=2&&("perspective"===o?["mediaLeft","mediaRight","center"].includes(t.split("-")[0])||(t="center-"+t):["mediaLeft","mediaRight","center"].includes(t.split("-")[0])&&(t=t.split("-").slice(1).join("-")))
e=n(2298)
s="new_media"===i?"":i
return this._getLayoutBinding().sub("layout_variation").set(e.getDefaultLayoutKey(o,t,s))},componentDidUpdate:function(){var e
e=this._getLayoutVariation()
if(e.indexOf("col")===-1){i(c.findDOMNode(this)).find(".s-mh-nudge").css({"padding-top":0})
return i(c.findDOMNode(this)).find(".s-item-media-wrapper").css({"line-height":"","min-height":""})}},_getLayoutOptions:function(){var e,t
t=l.getThemeName()
e=n(2298)
return e.getLayoutOptions(t)},_getSectionType:function(){var e,t
e=l.getThemeName()
t=0
"perspective"===e&&(t=1)
switch(this._getLayoutVariation().split("-")[t]){case"col":return"s-columns-section"
case"row":return"s-rows-section"
case"media":return"s-media-section"}},_renderRepeatable:function(e){var t,i,r,c,p,m,f,h,g,v,y,b,_,w,E,C,x
t=n(2298)
E=l.getThemeName()
g=this._getLayoutVariation()
r=this.getComponentBinding(e)
v=this.getRepeatableBinding(e)
f=this._getLayoutBinding()
y=r.get("id")
h="function"==typeof(i=t.getLayout(E,g))?i(this):void 0
_=null!=(b="function"==typeof h.repeatableClass?h.repeatableClass(this):void 0)?b:h.repeatableClass
w=this.getComponentProps("repeatable1")
E=l.getThemeName()
C=0
"perspective"===E&&(C=1)
c="media"===this._getLayoutVariation().split("-")[C]
p="fresh"===E&&"s-columns-section"===this._getSectionType()
m="s-rows-section"===this._getSectionType()
x=m&&this.getThemeFeature("verticalAlignRowsSection")
return React.createElement(u,Object.assign({className:_+("editor"===r.get("_state")?" s-arranging":"")},w),r.get("list").map(function(e){return function(t,n){var i,r,l,u,m,g,b,_,w,C,N,k,S,P,T,L,M,O,I,D,B,A,j,H
u=v.sub(n)
M={default:u,layout:f}
b=e.sbHasContent("media1",{parentBinding:u})
j=e.sbAnyHasContent("text1 text2 text3",{parentBinding:u})
r=e.sbHasContent("button1",{parentBinding:u})
O="editor"!==e.getComponentBinding("button1",u).get("_state")&&!e.sbHasContent("button1",{parentBinding:u,showOnly:!1})
I=j||r&&h.buttonClass
m=null!=(w="function"==typeof h.itemClass?h.itemClass(e,n):void 0)?w:h.itemClass
l=null!=(C="function"==typeof h.innerItemClass?h.innerItemClass(e,n):void 0)?C:h.innerItemClass
l+=x?" s-rva":""
g=null!=(N="function"==typeof h.mediaClass?h.mediaClass(e,n):void 0)?N:h.mediaClass
D=(null!=(k="function"==typeof h.singleMediaClass?h.singleMediaClass(e,n):void 0)?k:h.singleMediaClass)||g
A=null!=(S="function"==typeof h.textClass?h.textClass(e,n):void 0)?S:h.textClass
B=(null!=(P="function"==typeof h.singleTextClass?h.singleTextClass(e,n):void 0)?P:h.singleTextClass)||A
i=null!=(T="function"==typeof h.buttonClass?h.buttonClass(e,n):void 0)?T:h.buttonClass
H=null!=(L="function"==typeof h.textInnerClass?h.textInnerClass(e,n):void 0)?L:h.textInnerClass
_="s-item-media-wrapper "
_+=I?g:D
_+=x?" s-rva-media":""
A=b?A:B
A+=x?" s-rva-text":""
"glow"===E&&(A=A||"twelve columns offset-two")
return React.createElement(d,Object.assign({className:m,index:n,parentId:y,binding:M},e._getRepeatableItemProps(v,n)),React.createElement("div",{className:"clearfix"},React.createElement("div",{className:l},b&&React.createElement("div",{className:_},React.createElement("div",{className:"s-item-media-group"},React.createElement(a,Object.assign({size:p?"320x320#":c?"large":"medium"},e.getReduxComponentProps("media1",u))))),I&&React.createElement("div",{className:A},React.createElement(s,{deprecateItemSubtitle:c,section:e,itemBinding:u,binding:u,className:b?H:""},i&&r&&React.createElement("div",{className:i+(O?" s-placeholder-button":"")},React.createElement(o,Object.assign({},e.getComponentProps("button1",u),{smallButton:!0}))))))))}}(this)).toArray())},render:function(){return this.getTemplate().apply(this)}}},2307:function(e,t,n){"use strict"
function i(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n
return e}var o,s,r,a,l,c,u,d,p,m,f,h,g,v,y,b,_,w,E,C,x,N,k,S,P,T,L,M,O,I,D,B,A,j
N=n(1)
s=n(6)
P=n(3)
a=n(15)
B=n(837)
k=n(237)
c=n(12)
E=n(887)
u=n(137)
f=n(59)
m=n(58)
p=n(18)
b=n(531)
w=n(245).default
S=n(176).default
_=n(840)
A=n(889)
l=n(248)
g=n(2311).default
O=n(30)
y=n(56)
h=n(2068)
d=n(320)
M=n(36)
C=n(67)
x=n(5)
D=n(44)
j=n(2353)
I=180
L=function(){return P.extend({type:"Video"},l.Video().toJS())}
T=function(){return P.extend({type:"Image"},l.Image().toJS())}
v=a.createPageComponent((o={displayName:"GalleryList",mixins:[D("editor")],bobcatPropTypes:{data:{binding:N.PropTypes.object,sources:N.PropTypes.array},designer:{layout:N.PropTypes.string,sortableContainment:N.PropTypes.string,eagerLoad:N.PropTypes.bool}},getBobcatDefaultProps:function(){return{designer:{sortableContainment:"parent"},data:{layout:"normal"},internal:{isArranging:!1}}},componentWillMount:function(){var e
this.initMeta({selectedKey:""})
this._columnsNum=1
this._baseItemNum=null!=(e=u.get("forceGalleryItemsNumPerPage"))?e:50
this._pagesNum=1
this._lastPagesNum=this._pagesNum
this._lastBaseItemNum=this._baseItemNum
return this._resizeFn=P.debounce(this._resizeFn,10)},componentDidMount:function(){this._enableFancyBox()
if(this.props.layout.indexOf("vertical")===-1){this._resizeFn()
s(window).on("resize",this._resizeFn)}},componentWillUnmount:function(){},componentDidUpdate:function(){if(this._lastPagesNum!==this._pagesNum||this._lastBaseItemNum!==this._baseItemNum){this._enableFancyBox()
this._lastPagesNum=this._pagesNum
return this._lastBaseItemNum=this._baseItemNum}}},i(o,"componentWillUnmount",function(){return s(window).off("resize",this._resizeFn)}),i(o,"nativeAddImage",function(e){return this._addImage(y.createImage(e.image),e.newItemDirection)}),i(o,"_onNativeClickManage",function(){var e
e=this.getData("isManagingFromNative")||!1
return this.setData("isManagingFromNative",!e)}),i(o,"_isGalleryEmpty",function(){return 0===this.getData("sources").size}),i(o,"_updateLayoutMeta",function(){var e,t,n,i,o
e=s(this.refs.galleryListDOM)
t=Math.min(6,Math.max(2,Math.floor(e.width()/I)))
n=this._columnsNum
i={2:20,3:30,4:40,5:50,6:60}
if(t!==n){this._columnsNum=t
this._baseItemNum=null!=(o=u.get("forceGalleryItemsNumPerPage"))?o:i[this._columnsNum]}return t!==n}),i(o,"_resizeFn",function(){if(this._updateLayoutMeta())return this.forceUpdate()}),i(o,"_needToShowPagination",function(){return this.getData("sources").size>this._pagesNum*this._baseItemNum||1!==this._pagesNum}),i(o,"_onSelectItem",function(e){return this.updateMeta(e,"selectedKey")}),i(o,"_onDeleteItem",function(e){return null!=this._visualDelete?this._visualDelete(e):this._deleteItem(e)}),i(o,"_isInNativeWeb",function(){return!1}),i(o,"_onClickNativeAddImage",function(e){var t
null==e&&(e="bottom")
t=n(55)
_.setTarget(this)
return _.sendMessageToNative({type:S.GALLERY_ADD_IMAGE_MESSAGE,payload:A.convertToCamel(this.dtProps.type,t.dtPropsBuilder(this)),meta:Object.assign(t.buildMetaFromComponent(this),{direction:e})})}),i(o,"_getGalleryItemProps",function(e){var t,n
t=e.get("id")
n=this.getMeta("selectedKey")
return{binding:{default:e},_isAddInIframe:e.get("_isAddInIframe"),path:e._path,dataProps:l[e.get("type")](e.get()),onSelectItem:this._onSelectItem,deleteItem:this._onDeleteItem,key:t,selected:t===n,layout:this.props.layout,eagerLoad:this.props.eagerLoad,sideMenuOpened:E.getSideMenuOpenState().opened}}),i(o,"_getGalleryClassName",function(){var e,t
e=[]
this.props.layout.indexOf("fullWidth")!==-1&&e.push("full-width")
t=Math.min(this._pagesNum*this._baseItemNum,this.getData("sources").size)
e.push("s-gallery-columns-"+this._columnsNum)
return e.join(" ")}),i(o,"_deleteItem",function(e){C.deleteRepeatItem({binding:this.getDefaultBinding().sub("sources"),index:e})
return this.savePage()}),i(o,"_onReorder",function(e){var t
t=this.getDefaultBinding().sub("sources")
C.reorderRepeatable(e,t)
return this.savePage()}),i(o,"_getNewImageProps",function(e){return e.dataToSave()}),i(o,"_addVideo",function(){var e,t
e=this.getData("sources")
t=L()
e=C.addRepeatItem({binding:this.getDefaultBinding().sub("sources"),newItem:t})
this.savePage()
return e.last().toJS()}),i(o,"_addImage",function(e,t){var n,i
null==t&&(t="bottom")
n=this.getData("sources")
i=T()
P.extend(i,e.dataToSave())
n=C.addRepeatItem({binding:this.getDefaultBinding().sub("sources"),newItem:i,position:"top"===t?0:null})
this.savePage()
return k.track("Editor - Upload Image Gallery")}),i(o,"_onClickAddImage",function(){this.updateMeta("","selectedKey")
this._pendingTimestamp=null
return r.pick({mode:"multi",initialTabIdx:0,hideTabs:[2],handlers:{itemUploaded:function(e){return function(t){return e._addImage(t)}}(this),itemSelected:function(e){return function(t){var n,i,o,s
s=[]
for(n=0,o=t.length;n<o;n++){i=t[n]
s.push(e._addImage(i))}return s}}(this)},pendingTimestamp:this._pendingTimestamp})}),i(o,"_onClickAddVideo",function(){var e
e=this._addVideo()
return this.updateMeta(e.id,"selectedKey")}),i(o,"_onClickShowMore",function(){this._pagesNum+=1
return this.forceUpdate()}),i(o,"_onClickShowLess",function(){this._pagesNum=1
this.forceUpdate()
s("body").animate({scrollTop:s(this.refs.galleryListDOM).closest(".s-gallery-section").offset().top},1e3)
if("perspective"===x.getTheme().get("name"))return s(window).resize()}),i(o,"_enableFancyBox",function(){return n.e(0,function(e){return function(){var t
n(2042)
if(!e.isEditMode()){t=d.GALLERY(s(e.refs.galleryListDOM))
h.transformVideoSrc(s(e.refs.galleryListDOM))
return t.fancybox(Object.assign({},h.onlyCloseBtnOpts,{baseTpl:h.getCustomArrowTpl(),caption:h.getCaption,beforeMove:h.indicatorBeforeMove,onInit:h.indicatorOnInit}))}}}(this))}),i(o,"_renderForEditor",function(){}),i(o,"_renderForShow",function(){var e,t
t=this._baseItemNum*this._pagesNum
e=this.getDefaultBinding().sub("sources")
return e.get().map(function(n){return function(i,o){var s
if(o<t){s=e.sub(o)
return N.createElement(g,Object.assign({index:o},n._getGalleryItemProps(e.sub(o)),{key:i.get("id")}))}}}(this))}),i(o,"render",function(){return j.apply(this)}),o))
e.exports=v},2308:function(e,t,n){(function(t){"use strict"
var i,o,s,r,a,l,c,u
u=n(3)
c=n(2291)
s=n(333)
a=n(835)
i=n(883)
o=n(839)
l=n(5)
r=n(2294)
e.exports={mixins:[r],displayName:"NewHeroSection",propTypes:{eagerLoad:React.PropTypes.bool.isRequired,binding:React.PropTypes.object.isRequired},componentWillMount:function(){var e,t,i,o
o=l.getThemeName()
t=this._getLayoutVariation()
i=this.getDefaultBinding().get("template_name")
e=n(2300)
return this._getLayoutBinding().sub("layout_variation").set(e.getDefaultLayoutKey(o,t,i))},_getLayoutOptions:function(){var e,t
t=l.getThemeName()
e=n(2300)
return e.getLayoutOptions(t)},_getSectionType:function(){return this._showImage()?"s-hero-section":"s-signup-section"},_getLayout:function(){return u.camelCase(this._getLayoutVariation())},_getLayoutObj:function(){var e,t,i,o,s
e=n(2300)
o=this._getLayoutVariation()
s=l.getThemeName()
i="function"==typeof(t=e.getLayout(s,o))?t(this):void 0
return i},_getType:function(){return this._getLayoutObj().type},_showImage:function(){return this._getLayoutObj().showImage},_renderContent:function(){var e,t,n,r,u,d,p,m,f,h,g,v,y
d=this._getLayoutObj()
u=d.layoutClass,p=d.mediaClass,h=d.textClass,g=d.textOffsetClass,y=d.type,m=d.showImage,f=d.swapTitle
e="button"===y&&this.sbHasContent("button1")
t="button"===y&&this.sbHasContent("button1",{showOnly:!1})
n="images"===y&&this.sbAnyHasContent("image1 image2")
r=this.sbAnyHasContent("media1")
v=l.getThemeName()
return React.createElement("div",{className:u},React.createElement("div",{className:p+(r?"":" empty-media")},m&&React.createElement(a,Object.assign({},this.getReduxComponentProps("media1")))),React.createElement("div",{className:h},React.createElement("div",{className:g},"glow"===v&&React.createElement(c,{section:this,binding:this.getDefaultBinding(),subtitleOnTop:f}),"glow"!==v&&React.createElement(c,{section:this,binding:this.getDefaultBinding()}),(e||n||"signup"===y)&&React.createElement("div",{className:(t?"":"empty-button")+" "+this.sbUniformTextAlignment("text1 text2",{parentBinding:this.getDefaultBinding()})},"button"===y&&React.createElement("div",{className:"s-button-group ib"},React.createElement(i,Object.assign({},this.getComponentProps("button1")))),"signup"===y&&React.createElement("div",{className:"s-email-form-container"},React.createElement(o,Object.assign({signup:!0},this.getComponentProps("email1")))),"images"===y&&React.createElement("div",{className:"s-image-wrapper"},React.createElement("div",{className:"s-image-item"},React.createElement(s,Object.assign({},this.getReduxComponentProps("image1"),{eagerLoad:!0}))),React.createElement("div",{className:"s-image-item"},React.createElement(s,Object.assign({},this.getReduxComponentProps("image2"),{eagerLoad:!0}))))))))},render:function(){t("Editor|Hero")
t("Editor|Great for the top of a page. Add images, a button, or even a sign-up form.")
return this.getTemplate().apply(this)}}}).call(t,n(9))},2309:function(e,t,n){"use strict"
var i,o,s,r,a,l,c,u
a=n(1)
r=n(5)
l=n(2063)
c=n(2062)
o=n(2299)
i=n(883)
u=n(330)
s=n(2294)
e.exports={mixins:[s],displayName:"NewTextSection",componentWillMount:function(){var e,t,i
e=n(2293)
e.removeOldBackgroundForText(this)
i=r.getThemeName()
t=n(2296)
return this._getLayoutBinding().sub("layout_variation").set(t.getDefaultLayoutKey(i,this._getLayoutVariation()))},_getLayoutOptions:function(){var e,t
t=r.getThemeName()
e=n(2296)
return e.getLayoutOptions(t)},_getPositionLayout:function(){return this._getLayoutVariation().split("-")[1]},_getTitleOverlayClass:function(){var e
e=this._getLayoutVariation()
return this.sbAnyHasContent("text1 text2",{showOnly:!1})?e.indexOf("overlay")!==-1?"s-persp-overlay":e.indexOf("card")!==-1?"s-persp-card":void 0:""},_getSectionType:function(){var e
e=r.getThemeName()
switch(this._getLayoutVariation().split("-")[0]){case"text":return"s-text-section"
case"box":return"s-info-section"}},_renderPerspectiveText:function(e){var t,n,i,o,s,r
t=this.getComponentBinding("repeatable1")
n=this._getLayoutBinding()
i=this.getRepeatableBinding("repeatable1")
o=i.get().size
s=function(o){return function(s,r){var l,d,p,m,f,h
if(r>=3)return null
p=t.get("id")
l=i.sub(r)
d=null!=(m="function"==typeof e.itemClass?e.itemClass(o,r):void 0)?m:e.itemClass
h=null!=(f="function"==typeof e.textClass?e.textClass(o,r):void 0)?f:e.textClass
return a.createElement(c,Object.assign({className:d,binding:{default:l,layout:n},parentId:p,index:r},o._getRepeatableItemProps(i,r)),a.createElement("div",{className:"s-persp-column"},a.createElement("div",{className:h},a.createElement("div",{className:"s-title-group"},o.sbHasContent("text1",{parentBinding:l})?a.createElement("div",{className:"s-title"},a.createElement(u,Object.assign({tagName:"h2",textType:"title"},o.getComponentProps("text1",l)))):void 0,a.createElement("div",{className:"s-item-text"},a.createElement(u,Object.assign({tagName:"div",textType:"body"},o.getComponentProps("text2",l))))))))}}(this)
r=this.getComponentProps("repeatable1")
return a.createElement(l,Object.assign({className:(o>=3?"s-hide-add-button":"")+("editor"===t.get("_state")?" s-arranging":"")},r),t.get("list").map(s.bind(this)).toArray())},_renderRepeatable:function(e){var t,s,u,d,p,m,f,h,g,v
t=n(2296)
v=r.getThemeName()
u=this.getComponentBinding(e)
d=this._getLayoutBinding()
m=this.getRepeatableBinding(e)
p="function"==typeof(s=t.getLayout(v,this._getLayoutVariation()))?s(this):void 0
h=p.repeatableClass
if("s-text-section"===this._getSectionType()&&"perspective"===v)return this._renderPerspectiveText(p)
f=function(e){return function(t,n){var s,r,l,f,h,g,v,y,b,_,w
h=u.get("id")
l=m.sub(n)
b={default:l,layout:d}
f=null!=(g="function"==typeof p.itemClass?p.itemClass(e,n):void 0)?g:p.itemClass
w=null!=(v="function"==typeof p.textClass?p.textClass(e,n):void 0)?v:p.textClass
s=null!=(y="function"==typeof p.buttonClass?p.buttonClass(e,n):void 0)?y:p.buttonClass
r=e.sbHasContent("button1",{parentBinding:l})
_="editor"!==e.getComponentBinding("button1",l).get("_state")&&!e.sbHasContent("button1",{parentBinding:l,showOnly:!1})
return a.createElement(c,Object.assign({index:n,className:f,parentId:h,binding:b},e._getRepeatableItemProps(m,n)),a.createElement("div",{className:w},a.createElement(o,{section:e,itemBinding:l,binding:l,showItemSubtitle:!1},s&&r&&a.createElement("div",{className:s+(_?" s-placeholder-button":"")},a.createElement(i,Object.assign({},e.getComponentProps("button1",l),{smallButton:!0}))))))}}(this)
g=this.getComponentProps("repeatable1")
return a.createElement(l,Object.assign({className:h+("editor"===u.get("_state")?" s-arranging":"")},g),m.get().map(f.bind(this)).toArray())},render:function(){return this.getTemplate().apply(this)}}},2310:function(e,t,n){"use strict"
var i,o,s,r,a,l,c,u,d,p,m
c=n(1)
o=n(11)
l=n(5)
u=n(2063)
d=n(2062)
s=n(2299)
i=n(883)
p=n(330)
a=n(835)
m=n(2291)
r=n(2294)
e.exports={mixins:[r],displayName:"NewTitleSection",componentWillMount:function(){var e,t,i
i=l.getThemeName()
"normal"!==(t=this._getLayoutVariation())&&"subBottom"!==t&&"center"!==t&&"skinny"!==t||"perspective"===i||this.getComponentBinding("media1").sub("image").merge(o.fromJS({url:"",thumbnail_url:"",s:null,storage:null,storageKey:null,format:null}))
e=n(2303)
return this._getLayoutBinding().sub("layout_variation").set(e.getDefaultLayoutKey(i,this._getLayoutVariation()))},_getLayoutOptions:function(){var e,t
t=l.getThemeName()
e=n(2303)
return e.getLayoutOptions(t)},_getSectionType:function(){var e,t
t=l.getThemeName()
e=""
this._getLayoutVariation().indexOf("full")!==-1&&(e+="s-section-full ")
"persona"===t&&(e+="cta"===this.getDefaultBinding().get("template_name")?"s-cta-section":"s-title-section")
return e},_renderContent:function(){var e,t,o,s,r,u,d,p,f,h,g,v,y,b,_,w
w=l.getThemeName()
e=n(2303)
h="function"==typeof(t=e.getLayout(w,this._getLayoutVariation()))?t(this):void 0
g=h.outerContainerClass,d=h.innerContainerClass,v=h.outerMediaClass,p=h.innerMediaClass,_=h.textClass,o=h.buttonClass,f=h.isSubtitleOnBottom
s=this.sbHasContent("button1")
r=this.sbHasContent("button1",{showOnly:!1})
u=this.sbHasContent("media1")
y="editor"!==this.getComponentBinding("button1").get("_state")&&!this.sbHasContent("button1",{showOnly:!1})
b="editor"!==this.getComponentBinding("media1").get("_state")&&!this.sbHasContent("media1",{showOnly:!1})
return c.createElement("div",{className:g},c.createElement("div",{className:d},u&&v&&c.createElement("div",{className:v},c.createElement("div",{className:p},c.createElement(a,Object.assign({},this.getReduxComponentProps("media1"),{showBlackButton:!0})))),u&&!v&&c.createElement("div",{className:p+(b?" s-placeholder-button":"")},c.createElement(a,Object.assign({},this.getReduxComponentProps("media1"),{showBlackButton:!0}))),c.createElement(m,{className:_,contentCheck:"button1",subtitleOnTop:!f,section:this,binding:this.getDefaultBinding()}),s&&c.createElement("div",{className:o+(y?" s-placeholder-button":"")},c.createElement(i,Object.assign({},this.getComponentProps("button1"))))))},render:function(){return this.getTemplate().apply(this)}}},2311:function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i
if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i)
else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r)
return s>3&&r&&Object.defineProperty(t,n,r),r}
Object.defineProperty(t,"__esModule",{value:!0})
var c=n(1),u=n(13),d=n(3),p=n(6),m=n(66),f=n(175),h=n(533),g=n(56),v=(n(30),n(64)),y=n(68),b=(n(889),n(890),n(176),n(181)),_=n(552),w=n(553),E=(n(336),{designer:{type:c.PropTypes.string,selected:c.PropTypes.bool,isArranging:c.PropTypes.bool,index:c.PropTypes.number,showType:c.PropTypes.string,layout:c.PropTypes.string,eagerLoad:c.PropTypes.bool,sideMenuOpened:c.PropTypes.bool,_isAddInIframe:c.PropTypes.bool},callbacks:{updateItemHeight:c.PropTypes.func,onSelectItem:c.PropTypes.func.isRequired,deleteItem:c.PropTypes.func.isRequired}}),C=function(e){function t(e){i(this,t)
var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n._afterClickCancel=function(){n._isEmptyItem()&&n._onClickDeleteButton(n.props.index)}
n._deselect=function(){n._isEmptyItem()?n._onClickDeleteButton(n.props.index):n.updateState("normal")}
n._isEmptyItem=function(){switch(n.getData("type")){case"Image":return d.isEmpty(n.getData("url"))
case"Video":return d.isEmpty(n.getData("url"))||""===n.getData("html")
default:return!1}}
n._onImageLoaded=function(e){var t=e.h&&e.w?e.h/e.w:0
if("Image"===n.getData("type")&&"verticalGallery"!==n.props.showType){var i=p(u.findDOMNode(n.refs.imageContent)),o=i.find("img"),s=void 0
if(t<1){s=100/t
o.css({position:"absolute",width:s+"%",top:0,left:-(s-100)/2+"%"})}else if(t>1){newHeight=100*t
o.css({position:"absolute",width:"100%",top:-(newHeight-100)/2+"%",left:0})}}}
n._getPureDataProps=function(){var e=n.props,t=e.dataProps,i=e.updateItemHeight,o=e.eagerLoad,s=e.path
return{dataProps:t,path:s,updateItemHeight:i,onImageLoaded:n._onImageLoaded,eagerLoad:o}}
n._getImageProps=function(){return Object.assign({afterUploaded:n._deselect,afterSelected:n._deselect,afterRemove:function(){return n._onClickDeleteButton(n.props.index)},afterSave:function(){n._deselect()
n.savePage()}},n._getPureDataProps())}
n._getVideoProps=function(){return Object.assign({afterRemove:function(){return n._onClickDeleteButton(n.props.index)},beforeUpload:function(){return n.setState({isLoading:!0})},uploadFailed:function(){return n.setState({isLoading:!1})},uploadSucceed:function(){n.setState({isLoading:!1})
n.setTimeout(function(){n._deselect()
n.savePage()},100)}},n._getPureDataProps())}
n._getThumbSize=function(){var e=n.props.layout
return e.indexOf("fullWidth")!==-1?"300x300#":e.indexOf("vertical")!==-1?"250x1000>":"200x200#"}
n._getDOMData=function(){var e={"data-type":n.getData("type").toLowerCase()}
switch(n.getData("type")){case"Image":e=Object.assign({href:g.createImage(n.getData()).getUrl("1920x9000>")},e)
case"Video":e=Object.assign({"data-html":n.getData("html"),"data-description":n.getData("description")},e)}return e}
n._getSaveButtonProps=function(){return{onClickCancel:function(){n.onClickCancel()
n._afterClickCancel()},onClickSave:function(){n.setState({saveClicked:!0})}}}
n._restoreSaveClickedState=function(){n.setState({saveClicked:!1})}
n._getSaveButtonClickedProps=function(){return{saveClicked:n.state.saveClicked,restoreSaveClickedState:n._restoreSaveClickedState,fromType:"gallery"}}
n._onMouseEnterDeleteButton=function(){n.setState({showDeleteOverlay:!0})}
n._onMouseLeaveDeleteButton=function(){n.setState({showDeleteOverlay:!1})}
n._onClickDeleteButton=function(e){n.props.deleteItem(e)}
n.nativeDeleteButton=function(e){n._onClickDeleteButton(e.index)}
n._onClickEditItem=function(e){if(!n.state.showDeleteOverlay){n.props.onSelectItem(n.getData("id"))
n.onClickEditor()}}
n._adjustEditorPosition=function(){if("verticalGallery"!==n.props.showType){var e=p(n.refs.itemEditor).find(".s-component-editor")
if(e.length){var t=n.props.sideMenuOpened?200:0,i=p(window).width()-e.width(),o=e.offset().left
o<t&&e.css("left","0")
o>i&&e.css({marginLeft:i-o+"px"})}}}
n.state={showDeleteOverlay:!1,isLoading:!1,saveClicked:!1}
return n}s(t,e)
r(t,[{key:"componentWillMount",value:function(){this.props.selected&&this.updateState("editor")}},{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){e.selected&&!this.props.selected&&this.isState("editor")&&this._deselect()}},{key:"_renderEditor",value:function(){return null}},{key:"render",value:function(){var e=this.isState("editor"),t=this.props,n=t.showType,i=t.style,o=t.index,s=this.getData("type")
return c.createElement("div",{style:i,className:"s-component s-gallery-item "+("verticalGallery"===n?"vertical-item":""),"data-sorting-index":o},!1,c.createElement(v,null,!e&&c.createElement(y,{className:"s-component-content",key:this.getData("id")+"content"},c.createElement("div",{className:"image-wrapper"},c.createElement("a",Object.assign({className:"item"},this._getDOMData()),"Image"===s?c.createElement(_.default,Object.assign({ref:"imageContent",showType:n||"galleryItem",thumbSize:this._getThumbSize()},this._getPureDataProps())):c.createElement(w.default.WaypointLazy,Object.assign({ref:"videoContent",showType:n||"galleryItem"},this._getPureDataProps())))))))}}])
return t}(b.default)
C.displayName="GalleryItem"
C.originalProps=E
C=l([m.decorate(h),m.decorate(f)],C)
t.default=C},2312:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n
return e}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),c=n(1),u=i(c),d=n(13),p=i(d),m=n(14),f=i(m),h="Select...",g=function(e){function t(e){s(this,t)
var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.state={selected:e.value||{label:e.placeholder||h,value:""},isOpen:!1}
n.mounted=!0
n.handleDocumentClick=n.handleDocumentClick.bind(n)
n.fireChangeEvent=n.fireChangeEvent.bind(n)
return n}a(t,e)
l(t,[{key:"componentWillReceiveProps",value:function(e){e.value&&e.value!==this.state.selected?this.setState({selected:e.value}):e.value||this.setState({selected:{label:e.placeholder||h,value:""}})}},{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleDocumentClick,!1)
document.addEventListener("touchend",this.handleDocumentClick,!1)}},{key:"componentWillUnmount",value:function(){this.mounted=!1
document.removeEventListener("click",this.handleDocumentClick,!1)
document.removeEventListener("touchend",this.handleDocumentClick,!1)}},{key:"handleMouseDown",value:function(e){if("mousedown"!==e.type||0===e.button){e.stopPropagation()
e.preventDefault()
this.props.disabled||this.setState({isOpen:!this.state.isOpen})}}},{key:"setValue",value:function(e,t){var n={selected:{value:e,label:t},isOpen:!1}
this.fireChangeEvent(n)
this.setState(n)}},{key:"fireChangeEvent",value:function(e){e.selected!==this.state.selected&&this.props.onChange&&this.props.onChange(e.selected)}},{key:"renderOption",value:function(e){var t,n=(0,f.default)((t={},o(t,this.props.baseClassName+"-option",!0),o(t,"is-selected",e===this.state.selected),t)),i=e.value||e.label||e,s=e.label||e.value||e
return u.default.createElement("div",{key:i,className:n,onMouseDown:this.setValue.bind(this,i,s),onClick:this.setValue.bind(this,i,s)},s)}},{key:"buildMenu",value:function(){var e=this,t=this.props,n=t.options,i=t.baseClassName,o=n.map(function(t){if("group"===t.type){var n=u.default.createElement("div",{className:i+"-title"},t.name),o=t.items.map(function(t){return e.renderOption(t)})
return u.default.createElement("div",{className:i+"-group",key:t.name},n,o)}return e.renderOption(t)})
return o.length?o:u.default.createElement("div",{className:i+"-noresults"},"No options found")}},{key:"handleDocumentClick",value:function(e){this.mounted&&(p.default.findDOMNode(this).contains(e.target)||this.setState({isOpen:!1}))}},{key:"render",value:function(){var e,t=this.props.baseClassName,n=this.props.disabled?"Dropdown-disabled":"",i="string"==typeof this.state.selected?this.state.selected:this.state.selected.label,s=u.default.createElement("div",{className:t+"-placeholder"},i),r=this.state.isOpen?u.default.createElement("div",{className:t+"-menu"},this.buildMenu()):null,a=(0,f.default)((e={},o(e,t+"-root",!0),o(e,"is-open",this.state.isOpen),e))
return u.default.createElement("div",{className:a},u.default.createElement("div",{className:t+"-control "+n,onMouseDown:this.handleMouseDown.bind(this),onTouchEnd:this.handleMouseDown.bind(this)},s,u.default.createElement("span",{className:t+"-arrow"})),r)}}])
return t}(c.Component)
g.defaultProps={baseClassName:"Dropdown"}
t.default=g},2313:function(e,t,n){"use strict"
function i(e,t){var n=s.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=s.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(1),s=n(3),r=(n(330),n(883),n(2290)),a=n(2061),l=n(2363),c=(n(2291),n(2292))
e.exports=function(){return o.createElement(c,i({className:"s-new-title-section s-section "+this._getSectionType()},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1")),this.isEditMode()?o.createElement("div",{className:"s-section-editor-wrapper",skip:"true"},this.getThemeFeature("disableBackgrounds")?null:o.createElement(r,this.getComponentProps("background1")),o.createElement(l,s.assign({},{layoutOptions:this._getLayoutOptions(),updateLayout:this._updateLayout},this._getLayoutProps()))):null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?o.createElement(a,s.assign({},{layout:this._getLayoutKey()},this.getBackgroundProps("background1"))):null,"\n  ",this._renderContent(),"\n")}},2316:function(e,t,n){(function(i){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
t.default=void 0
var l=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&s)for(var a in s)void 0===n[a]&&(n[a]=s[a])
else n||(n=s||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),c=0;c<r;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),u=n(1),d=o(u),p=n(6),m=o(p),f=n(18),h=o(f),g=function(e){function t(e){s(this,t)
var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n._onClickLink=n._onClickLink.bind(n)
return n}a(t,e)
c(t,[{key:"componentDidMount",value:function(){"terms-and-conditions"===m.default.url().param("open")&&h.default.openDialog("termsDialog")}},{key:"_onClickLink",value:function(){this.props.onClickLink?this.props.onClickLink():h.default.openDialog("termsDialog")}},{key:"_onClickOpenSettings",value:function(){h.default.openPageSettings({tabName:"legal"})}},{key:"render",value:function(){var e="s-terms-link "+(this.props.className||"")
return l("div",{className:e,style:{position:"relative"}},void 0,!1,l("a",{className:"s-common-link",onClick:this._onClickLink,target:"_blank"},void 0,i("EditorSettings|Terms & Conditions")))}}])
return t}(d.default.Component)
t.default=g
e.exports=t.default}).call(t,n(9))},2320:function(e,t,n){(function(i){"use strict"
function o(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}function s(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
t.default=void 0
var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},u=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&s)for(var a in s)void 0===n[a]&&(n[a]=s[a])
else n||(n=s||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),c=0;c<r;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),p=function e(t,n,i){null===t&&(t=Function.prototype)
var o=Object.getOwnPropertyDescriptor(t,n)
if(void 0===o){var s=Object.getPrototypeOf(t)
return null===s?void 0:e(s,n,i)}if("value"in o)return o.value
var r=o.get
return void 0!==r?r.call(i):void 0},m=n(1),f=s(m),h=n(3),g=s(h),v=n(532),y=s(v),b=n(67),_=s(b),w=n(2307),E=s(w),C=n(2311),x=s(C),N=n(30),k=(o(N),null),S=10,P=function(e){function t(){r(this,t)
var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))
e._canRenderLayout=void 0
e._currentIndex=void 0
e._isDragging=!1
e._itemWidth=0
e._columnsNum=3
e._renderList=void 0
e._heightList=void 0
e._itemsList=void 0
e._resizeFn=g.default.debounce(function(){var t=e._updateLayoutMeta()
e._updateSize()
e._canRenderLayout&&(t?e._renderLayout():e.forceUpdate())},100)
e._onDrag=g.default.debounce(function(t,n){if(e._isDragging){var i=e._itemsList[e._currentIndex].listIndex,o=-1
Math.abs(n.position.left)>e._itemWidth/2+S&&(n.position.left>=0?i+=Math.ceil((n.position.left-e._itemWidth/2-S)/(e._itemWidth+S),10):i-=Math.ceil((-n.position.left-e._itemWidth/2-S)/(e._itemWidth+S),10))
i<0&&(i=0)
i>=e._renderList.length&&(i=e._renderList.length-1)
for(var s=e._renderList[i].itemList,r=e._itemsList[e._currentIndex].top+e._heightList[e._currentIndex]*e._itemWidth/2+n.position.top,a=0;a<s.length;a++)if(s[a].top<r&&s[a].bottom>r){o=a
break}var l=e._itemsList[e._currentIndex].listIndex===i
l&&r>s[s.length-1].bottom&&(o=s.length)
l&&o===s.length&&(o=s.length-1)
var c=e._itemsList[e._currentIndex].indexInList===o
o===-1||l&&c||e._doVisualReorder({oldListIndex:e._itemsList[e._currentIndex].listIndex,oldIndexInList:e._itemsList[e._currentIndex].indexInList,newListIndex:i,newIndexInList:o})}},50)
e._getUpdateHeightFn=y.default.boundParamsMemoizer(e._updateHeight,e)
return e}l(t,e)
d(t,[{key:"componentWillMount",value:function(){p(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"componentWillMount",this).call(this)
this._updateList("reset")}},{key:"componentWillReceiveProps",value:function(e){var t=e.binding.default.sub("sources").get().size
if(t>this._heightList.length){this._updateList("add")
this._renderLayout()}else if(t<this._heightList.length){this._updateList("delete")
this._renderLayout()}}},{key:"componentDidMount",value:function(){p(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"componentDidMount",this).call(this)
$(window).on("resize",this._resizeFn)
this._resizeFn()}},{key:"componentWillUnmount",value:function(){$(window).off("resize",this._resizeFn)}},{key:"_updateHeight",value:function(e,t){if(!isNaN(t)&&this._heightList[e]!==t){this._heightList[e]=t
if(this._heightList.every(function(e){return!isNaN(e)})&&this._heightList.join("")!==this._lastHeightList.join("")){this._lastHeightList=g.default.clone(this._heightList)
this._renderLayout()}}}},{key:"_visualDelete",value:function(e){this._heightList[e]=0
var t=this._itemsList[e],n=t.listIndex,i=t.indexInList,o=this._renderList[n].itemList
o.splice(i,1)
this._adjustListItemPosition(n)
this._adjustHeight()
this._reorderGallery()}},{key:"_doVisualReorder",value:function(e){var t=this._itemsList[this._currentIndex].top,n=this._itemsList[this._currentIndex].listIndex,i=this._renderList[e.oldListIndex].itemList,o=this._renderList[e.newListIndex].itemList,s=i[e.oldIndexInList]
if(i===o){i[e.oldIndexInList]=i[e.newIndexInList]
i[e.newIndexInList]=s
this._adjustListItemPosition(e.oldListIndex)}else{var r={index:s.index,listIndex:e.newListIndex}
i.splice(e.oldIndexInList,1)
o.splice(e.newIndexInList,0,r)
this._adjustListItemPosition(e.oldListIndex)
this._adjustListItemPosition(e.newListIndex)}var a=this._itemsList[this._currentIndex].top,l=this._itemsList[this._currentIndex].listIndex,c=(l-n)*(this._itemWidth+S),u=a-t
this._adjustHeight()
this._resetCurrentPosition(c,u)
this.forceUpdate()}},{key:"_reorderGallery",value:function(){function e(e){var t=-1,i=999999
n.forEach(function(n,o){if(!e.some(function(e){return e===o})&&n.currentHeight<i){t=o
i=n.currentHeight}})
return t}var t=this,n=[],i=[]
this._renderList.forEach(function(){n.push({currentHeight:0,itemList:[]})})
var o=0
this._renderList.forEach(function(e){o+=e.itemList.length})
for(var s=0;s<o;s++){for(var r=null,a=null,l=[];!a;){r=e(l)
a=this._renderList[r].itemList[n[r].itemList.length]
l.push(r)}i.push(a.index)
n[r].currentHeight+=this._heightList[a.index]
n[r].itemList.push(a.index)}i.length<this.getDefaultBinding().sub("sources").get().size?this._onReorderAfterDelete(i):this._onReorder(i)
this._heightList=i.map(function(e){return t._heightList[e]})
this._renderLayout()}},{key:"_onReorderAfterDelete",value:function(e){var t=this.getDefaultBinding().sub("sources")
_.default.reorderRepeatableWithSplice(e,t)
this.savePage()}},{key:"_updateSize",value:function(){this._itemWidth=($(this.refs.galleryListDOM).width()-(this._columnsNum-1)*S)/this._columnsNum
this._adjustAllList()}},{key:"_updateList",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"reset",t=this.getDefaultBinding().sub("sources").get().size
this._renderList=[]
this._renderList.length=this._columnsNum
switch(e){case"reset":this._heightList=[]
this._heightList.length=t
for(var n=0;n<t;n++)this._heightList[n]=0
break
case"add":this._heightList.length=t
for(var i=0;i<t;i++)this._heightList[i]=this._heightList[i]||0
break
case"delete":this._heightList.length=t}this._lastHeightList=[]}},{key:"_isEditing",value:function(){var e=this
return this._heightList.some(function(t,n){return"editor"===e.getDefaultBinding().sub("sources."+n).get("_state")})}},{key:"_getShortestIndex",value:function(){var e=-1,t=999999
this._renderList.forEach(function(n,i){var o=n.currentHeight+5e-4*i
if(o<t){e=i
t=o}})
return e}},{key:"_getTallestIndex",value:function(){var e=-1,t=-1
this._renderList.forEach(function(n,i){if(n.currentHeight>t){e=i
t=n.currentHeight}})
return e}},{key:"_getTotalHeight",value:function(){if(!this._itemsList)return 0
for(var e=Math.min(this._pagesNum*this._baseItemNum,this._itemsList.length),t=0,n=0;n<e;n++)this._itemsList[n].bottom>t&&(t=this._itemsList[n].bottom)
return t}},{key:"_getItemPosition",value:function(e,t){if(!this._itemsList)return{width:this._itemWidth+"px",left:0,top:0}
var n={opacity:this._heightList[e]?1:0,width:this._itemWidth+"px",height:this._itemsList[e].bottom-this._itemsList[e].top+"px",left:this._itemsList[e].left+"px",top:this._itemsList[e].top+"px",zIndex:"editor"===this.getDefaultBinding().sub("sources."+e).get("_state")?100:"initial"}
t&&(n.height=this._itemsList[e].bottom-this._itemsList[e].top+"px")
return n}},{key:"_getDragProps",value:function(e){var t=this
return{onStart:function(){t._currentIndex=e},onDrag:function(e,n){if(!t._isDragging){t._isDragging=!0
return t.forceUpdate()}t._onDrag(e,n)},onStop:function(){if(t._isDragging){t._resetCurrentPosition()
t._isDragging=!1
t._reorderGallery()}},allowAnyClick:!1,disabled:this._isEditing()||!1,start:{x:0,y:0},zIndex:100}}},{key:"_adjustHeight",value:function(){var e=this._getTallestIndex(),t=this._renderList[e].itemList.pop()
if(t){this._renderList[e].currentHeight-=this._heightList[t.index]
if(this._getShortestIndex()===e){this._renderList[e].itemList.push(t)
this._renderList[e].currentHeight+=this._heightList[t.index]}else{var n=this._getShortestIndex()
this._renderList[n].itemList.push(t)
this._renderList[n].currentHeight+=this._heightList[t.index]
this._adjustListItemPosition(n)
this._adjustHeight()}}}},{key:"_adjustListItemPosition",value:function(e){var t=this,n=this._renderList[e],i=this._renderList[e].itemList,o=e*(this._itemWidth+S)
n.currentHeight=0
i.forEach(function(i,s){i.listIndex=e
i.indexInList=s
i.left=o
i.top=n.currentHeight*t._itemWidth+s*S
i.bottom=i.top+t._heightList[i.index]*t._itemWidth
t._itemsList[i.index]=g.default.clone(i)
n.currentHeight+=t._heightList[i.index]})}},{key:"_adjustAllList",value:function(){var e=this
this._renderList.forEach(function(t,n){e._adjustListItemPosition(n)})}},{key:"_resetCurrentPosition",value:function(e,t){if(this.refs["draggableItem"+this._currentIndex]){var n=this.refs["draggableItem"+this._currentIndex]
e||t?n.setState({clientX:n.state.clientX-e,clientY:n.state.clientY-t}):n.setState({clientX:0,clientY:0})}}},{key:"_renderLayout",value:function(){var e=this
this._canRenderLayout=!0
this._renderList=[]
this._itemsList=[]
for(var t=0;t<this._columnsNum;t++)this._renderList.push({currentHeight:0,itemList:[]})
this._heightList.forEach(function(t,n){var i=e._getShortestIndex(),o=e._renderList[i],s={index:n}
o.itemList.push(s)
o.currentHeight+=t})
this._adjustAllList()
this.forceUpdate()}},{key:"render",value:function(){var e=this,t=this.getDefaultBinding().sub("sources"),n={height:this._getTotalHeight()+"px",width:"100%",display:this._isGalleryEmpty()||!this._canRenderLayout?"none":"block"},o=this._canRenderLayout&&this._isDragging&&"number"==typeof this._currentIndex,s=t.get().size,r=this._baseItemNum*this._pagesNum,a=function(n){return u("div",{className:"position-wrapper","data-index":n,style:e._getItemPosition(n)},t.sub(n).get("id")+"_wrapper",u("div",{className:"inner-wrapper"},void 0,f.default.createElement(x.default,c({showType:"verticalGallery",index:n,key:t.sub(n).get("id"),updateItemHeight:e._getUpdateHeightFn(n),isArranging:e.props.isArranging},e._getGalleryItemProps(t.sub(n))))))}
return f.default.createElement("div",{ref:"galleryListDOM",className:"s-gallery s-vertical-gallery "+(this._isDragging?"dragging":"")+(this.props.isArranging?" s-arranging":"")},this._isGalleryEmpty()?u("div",{className:"empty-list s-common-status s-font-body"},void 0,i("Mobile|No content.")):f.default.createElement("div",{style:n,className:"vertical-list",ref:"verticalList"},t.get().map(function(n,i){var o=i<r,s=i>=r,l=!e.props.isArranging&&!1,u=l||o
return s?null:u?a(i):f.default.createElement(k,c({ref:"draggableItem"+i},e._getDragProps(i),{key:t.sub(i).get("id")+"_drag_wrapper"}),a(i))}),o&&u("div",{className:"position-wrapper dragging-placeholder",style:this._getItemPosition(this._currentIndex,"placeholder")},"placeholder")),this._needToShowPagination()&&u("div",{className:"s-gallery-pagination s-component s-text"},void 0,u("div",{className:"s-component-content"},void 0,this._pagesNum>1&&u("a",{className:"s-common-link less-link",onClick:this._onClickShowLess},void 0,i("Editor|Show less")),s>r&&u("a",{className:"s-common-link more-link",onClick:this._onClickShowMore},void 0,i("Editor|Show more")))),!1,!1)}}])
return t}(E.default)
t.default=P
e.exports=t.default}).call(t,n(9))},2321:function(e,t,n){(function(i){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&s)for(var a in s)void 0===n[a]&&(n[a]=s[a])
else n||(n=s||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),c=0;c<r;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),r=n(1),a=o(r),l=n(2312),c=o(l),u=n(11),d=o(u),p=n(547),m=o(p),f=n(15),h=o(f),g=n(323),v=o(g),y=n(5),b=o(y),_=n(18),w=o(_),E=n(87),C=o(E),x=n(36),N=o(x),k=h.default.createPageComponent({mixins:[m.default.enableAfterUpdate()],displayName:"BlogSectionCategorySelector",bobcatPropTypes:{data:{category:a.default.PropTypes.object,binding:a.default.PropTypes.object}},getBobcatDefaultProps:function(){return{data:{category:d.default.Map({id:"all"})}}},componentDidMount:function(){var e=this,t=this.props,n=t.addBlogCategoriesChangeListener,i=t.pageId,o=t.fetchBlogCategories,s=t.getCategories,r=t._isblogCategoriesFetched
s()
n(function(t){"all"===e.props.category.get("id")||v.default.isCategoryIdExist(e.props.category.get("id"))?t===e.props.category.get("id")&&e.forceUpdate():e._onChangeCategory({value:"all"})})
N.default.Event.subscribe("BlogManager.CloseDialog",function(){o(i,e.props.category.get("id"))})
!r()&&o(i,this.props.category.get("id"))},_createDropdownOptions:function(){var e=this.props.getCategories,t=this.props.category.get("id"),n=e().map(function(e){return{value:e.id,label:e.id.toString()===t.toString()?s("div",{className:"option capitalize selected"},void 0,e.name):s("div",{className:"option capitalize"},void 0,e.name)}})
n.length&&"all"!==t&&n.unshift({value:"all",label:s("div",{className:"option"},void 0,i("Sections|All Categories"))})
return n},_getSelectedCategoryName:function(e){var t=this.props.getCategories,n=t(),o=n.find(function(t){return t.id.toString()===e.toString()})
return o?o.name:i("Sections|All Categories")},_onChangeCategory:function(e){var t=this,n=e.value
this.updateData({category:{id:n,name:this._getSelectedCategoryName(n)}})
setTimeout(function(){t.savePage()},1)},render:function(){var e=this.props.category,t=this._createDropdownOptions()
return t.length<1?null:s("div",{className:"s-component s-category-selector"},void 0,s("div",{className:"s-component-editor",rel:"tooltip-left",title:i("all"===e.get("id")?"Sections|Select a category for this section.":"Sections|Only show posts from a certain category.")},void 0,s(c.default,{options:this._createDropdownOptions(),value:this._getSelectedCategoryName(this.props.category.get("id")),onChange:this._onChangeCategory})))}})
t.default=(0,C.default)(k,[],function(){return{pageId:b.default.getId()}},function(){return{addBlogCategoriesChangeListener:function(e){v.default.addBlogCategoriesChangeListener(e)},getCategories:function(){return v.default.getCategories()},fetchBlogCategories:function(e,t){w.default.fetchBlogCategories(e,t)},_isblogCategoriesFetched:function(){v.default._isblogCategoriesFetched()}}})
e.exports=t.default}).call(t,n(9))},2322:function(e,t,n){(function(i){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
t.default=void 0
var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),c=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&s)for(var a in s)void 0===n[a]&&(n[a]=s[a])
else n||(n=s||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),c=0;c<r;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),u=n(1),d=o(u),p=n(18),m=o(p),f=n(2090),h=o(f),g=n(5),v=o(g),y=n(843),b=function(e){var t=e.leftPrice,n=e.rightPrice,i={width:Math.min(t/n*100,100)+"%"},o={left:"calc("+Math.min(t/n*100,100)+"% - 10px)"}
return c("div",{className:"progress-bar"},void 0,c("div",{className:"progress",style:i}),c("div",{className:"indicator",style:o}))},_=function(e){function t(e){s(this,t)
var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n._listener=n._listener.bind(n)
return n}a(t,e)
l(t,[{key:"componentDidMount",value:function(){m.default.getDonationSettings({pageId:v.default.getId()})
h.default.addChangeListener(this._listener)}},{key:"componentWillUnmount",value:function(){h.default.removeChangeListener(this._listener)}},{key:"_listener",value:function(){this.forceUpdate()}},{key:"_onClickOpenManager",value:function(){m.default.openDialog("donationManager")}},{key:"_onClickOpenDonateDialog",value:function(){m.default.openDialog("donateDialog",{strong:!0})}},{key:"render",value:function(){var e=h.default.getData(),t=e.settings,n=(e.state,e.currencyFormat)
return c("div",{className:"s-component s-donation "+(this.props.sbClass?this.props.sbClass:"")},void 0,!1,t.data.showProgress&&c("div",{className:"s-donation-progress"},void 0,c(b,{leftPrice:t.paid,rightPrice:t.goal}),c("div",{className:"left-price"},void 0,c("div",{className:"price"},void 0,(0,y.getFormattedPrice)(t.paid,n)),c("div",{className:"text"},void 0,i("Donation|Raised"))),c("div",{className:"right-price"},void 0,c("div",{className:"price"},void 0,(0,y.getFormattedPrice)(t.goal,n)),c("div",{className:"text"},void 0,i("Donation|Goal")))),c("div",{className:"s-common-button s-cta-button",onClick:this._onClickOpenDonateDialog},void 0,t.data.buttonText||i("Donation|Donate")))}}])
return t}(d.default.Component)
t.default=_
e.exports=t.default}).call(t,n(9))},2323:function(e,t,n){(function(i){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&s)for(var a in s)void 0===n[a]&&(n[a]=s[a])
else n||(n=s||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),c=0;c<r;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),r=n(1),a=o(r),l=n(13),c=(o(l),n(2312)),u=o(c),d=n(547),p=o(d),m=n(15),f=o(m),h=n(54),g=o(h),v=n(87),y=(o(v),n(237)),b=o(y),_=f.default.createPageComponent({mixins:[p.default.enableAfterUpdate()],displayName:"EcommerceCategorySelector",bobcatPropTypes:{data:{text:a.default.PropTypes.string,category:a.default.PropTypes.string,binding:a.default.PropTypes.object}},getBobcatDefaultProps:function(){return{data:{category:"all"}}},componentWillReceiveProps:function(e){g.default.getCategories().length&&!g.default.isCategoryIdExist(e.category)&&this._onChangeCategory({value:"all"})},_createDropdownOptions:function(){var e=this,t=g.default.getCategories().map(function(t){return{value:t.id,label:t.id.toString()===e.props.category.toString()?s("div",{className:"option selected"},void 0,t.name):s("div",{className:"option"},void 0,t.name)}})
t.length&&"all"!==this.props.category&&t.unshift({value:"all",label:s("div",{className:"option"},void 0,i("Ecommerce|All Categories"))})
return t},_getSelectedCategory:function(e){var t=g.default.getCategories(),n=t.find(function(t){return t.id.toString()===e.toString()})
return n?n.name:i("Ecommerce|All Categories")},_onChangeCategory:function(e){this.updateData({category:e.value})
this.savePage()
b.default.track("Editor - Select Ecommerce Section Category")},render:function(){this.observeBinding(g.default.getCategoiresBinding())
this.observeBinding(g.default.getSettingsBinding())
var e=this._createDropdownOptions()
return e.length<1?null:s("div",{className:"s-component s-category-selector"},void 0,s("div",{className:"s-component-editor",rel:"tooltip-left",title:i("Ecommerce|Select a category for this section."),"data-original-title":i("Ecommerce|Select a category for this section.")},void 0,s(u.default,{options:this._createDropdownOptions(),value:this._getSelectedCategory(this.props.category),onChange:this._onChangeCategory})))}})
t.default=_
e.exports=t.default}).call(t,n(9))},2324:function(e,t,n){(function(i){"use strict"
function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&s)for(var a in s)void 0===n[a]&&(n[a]=s[a])
else n||(n=s||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),c=0;c<r;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),c=n(2295),u=function(e){function t(e){o(this,t)
var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),i=n.props.themeName
n.cacheLevel=-1
"persona"!==i&&"perspective"!==i||(n.hideAdvancedOptions=!0)
n.sectionName="new_hero"
return n}r(t,e)
l(t,[{key:"getRotationKeys",value:function(){var e=this.props.themeName,t=this._levelKeys[1]
return["persona","perspective"].includes(e)?this._getKeysByLevel(0).map(function(e){return e+"-"+t}):"glow"===e?this.props.layoutVariation.indexOf("unswap")>-1?["button-left-unswap","signup-left-unswap","images-left-unswap","button-right-unswap","signup-right-unswap","images-right-unswap","button-noImage-unswap","signup-noImage-unswap","images-noImage-unswap"]:["button-left-swap","signup-left-swap","images-left-swap","button-right-swap","signup-right-swap","images-right-swap","button-noImage-swap","signup-noImage-swap","images-noImage-swap"]:["button-left","signup-left","images-left","button-right","signup-right","images-right","button-noImage","signup-noImage","images-noImage"]}},{key:"getButtonClassMapping",value:function(){return["big-buttons","big-buttons"]}},{key:"renderLayoutOptions",value:function(){var e=this.props.themeName
return a("div",{},void 0,this._getKeysByLevel(0)&&this._renderLayoutButtons(0),this._getKeysByLevel(1)&&this._renderLayoutButtons(1),"glow"===e&&this._getKeysByLevel(2)&&this._renderCheckBox({levelNum:2,text:i("Editor|Swap Title"),checkedKey:"swap",unCheckedKey:"unswap"}))}}])
return t}(c.BaseLayoutButton)
t.default=(0,c.connectToStores)(u)
e.exports=t.default}).call(t,n(9))},2325:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),l=n(2295),c=n(3),u=(i(c),function(e){function t(e){o(this,t)
var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.cacheLevel=-1
n.hideAdvancedOptions=!0
n.sectionName="new_icon"
return n}r(t,e)
a(t,[{key:"getRotationKeys",value:function(){var e=this.props.themeName
return"perspective"===e?["mediaLeft-col","mediaRight-col","center-col"]:["col","natural"]}}])
return t}(l.BaseLayoutButton))
t.default=(0,l.connectToStores)(u)
e.exports=t.default},2326:function(e,t,n){(function(i){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var l=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&s)for(var a in s)void 0===n[a]&&(n[a]=s[a])
else n||(n=s||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),c=0;c<r;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),c=function(){function e(e,t){var n=[],i=!0,o=!1,s=void 0
try{for(var r,a=e[Symbol.iterator]();!(i=(r=a.next()).done);i=!0){n.push(r.value)
if(t&&n.length===t)break}}catch(e){o=!0
s=e}finally{try{!i&&a.return&&a.return()}finally{if(o)throw s}}return n}return function(t,n){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return e(t,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),d=n(3),p=o(d),m=n(2295),f=function(e){function t(e){s(this,t)
var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),i=e.themeName
n.cacheLevel="perspective"===i?1:0
n.sectionName="new_media"
return n}a(t,e)
u(t,[{key:"updateCachedKeys",value:function(e){var t=this.props.themeName,n="perspective"===t?3:2
e[n]=this._levelKeys[n]
this._updateLayout(e)}},{key:"updateToDefaultLayout",value:function(e){var t=n(2298),i=this.props.themeName,o="perspective"===i?1:0,s=p.default.clone(this._levelKeys)
s[o]=e
var r=t.getDefaultLayoutKey(i,s.join("-"))
this.props.updateLayout(r)}},{key:"getRotationKeys",value:function(){var e=c(this._levelKeys,4),t=e[0],n=e[1],i=e[2],o=e[3]
switch(t){case"row":return this._getKeysByLevel(3).map(function(e){return"row-"+n+"-"+i+"-"+e})
case"col":return this._getKeysByLevel(1).map(function(e){return"col-"+e+"-"+i})
case"media":return this._getKeysByLevel(1).map(function(e){return"media-"+e+"-"+i})
case"mediaLeft":case"mediaRight":case"center":return["mediaLeft","mediaRight","center"].map(function(e){return e+"-"+n+"-"+i+"-"+o})
default:return[]}}},{key:"getButtonClassMapping",value:function(){var e=this.props.themeName
return"perspective"===e?["big-buttons","big-buttons",this._getSmallButtonClass(2),"big-buttons"]:["big-buttons","media"===this._levelKeys[0]?"big-buttons":this._getSmallButtonClass(1),"big-buttons","big-buttons"]}},{key:"renderLayoutOptions",value:function(){var e=this.props.themeName
return l("div",{},void 0,this._getKeysByLevel(0)&&this._renderLayoutButtons(0),this._getKeysByLevel(1)&&this._renderLayoutButtons(1),"perspective"===e?this._getKeysByLevel(3)&&this._renderCheckBox({levelNum:3,checkedKey:"button",unCheckedKey:"text",text:i("Editor|Show Buttons")}):l("div",{},void 0,this._getKeysByLevel(3)&&this._renderLayoutButtons(3),this._getKeysByLevel(2)&&this._renderCheckBox({levelNum:2,checkedKey:"button",unCheckedKey:"text",text:i("Editor|Show Buttons")})))}}])
return t}(m.BaseLayoutButton)
t.default=(0,m.connectToStores)(f)
e.exports=t.default}).call(t,n(9))},2327:function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),a=n(2295),l=function(e){function t(e){i(this,t)
var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.cacheLevel=-1
n.hideAdvancedOptions=!0
n.sectionName="process"
return n}s(t,e)
r(t,[{key:"getRotationKeys",value:function(){return["horizontal","vertical"]}}])
return t}(a.BaseLayoutButton)
t.default=(0,a.connectToStores)(l)
e.exports=t.default},2328:function(e,t,n){(function(i){"use strict"
function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&s)for(var a in s)void 0===n[a]&&(n[a]=s[a])
else n||(n=s||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),c=0;c<r;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),l=function(){function e(e,t){var n=[],i=!0,o=!1,s=void 0
try{for(var r,a=e[Symbol.iterator]();!(i=(r=a.next()).done);i=!0){n.push(r.value)
if(t&&n.length===t)break}}catch(e){o=!0
s=e}finally{try{!i&&a.return&&a.return()}finally{if(o)throw s}}return n}return function(t,n){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return e(t,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),u=n(2295),d=function(e){function t(e){o(this,t)
var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.cacheLevel=-1
var i=n.props.themeName
"perspective"===i&&"text"===n._levelKeys[0]&&(n.hideAdvancedOptions=!0)
n.sectionName="new_text"
return n}r(t,e)
c(t,[{key:"updateToDefaultLayout",value:function(e){var t=n(2296),i=this.props.themeName,o=_.clone(this._levelKeys)
o[0]=e
var s=t.getDefaultLayoutKey(i,o.join("-"))
this.props.updateLayout(s)}},{key:"getRotationKeys",value:function(){var e=l(this._levelKeys,3),t=e[0],n=(e[1],e[2])
switch(t){case"box":return this._getKeysByLevel(1).map(function(e){return"box-"+e+"-"+n})
case"text":return this._getKeysByLevel(1).map(function(e){return"text-"+e+"-"+n})
default:return[]}}},{key:"getButtonClassMapping",value:function(){var e=this.props.themeName
return"perspective"===e?["big-buttons","big-buttons","big-buttons"]:["big-buttons",this._getSmallButtonClass(1),"big-buttons"]}},{key:"renderLayoutOptions",value:function(){var e=this.props.themeName
return a("div",{},void 0,"perspective"!==e&&this._getKeysByLevel(0)&&this._renderLayoutButtons(0),this._getKeysByLevel(1)&&this._renderLayoutButtons(1),this._getKeysByLevel(2)&&this._renderCheckBox({levelNum:2,checkedKey:"button",unCheckedKey:"text",text:i("Editor|Show Buttons")}))}}])
return t}(u.BaseLayoutButton)
t.default=(0,u.connectToStores)(d)
e.exports=t.default}).call(t,n(9))},2329:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(548),s=i(o),r={donationGroup:function(e){var t=e.main.toHex(),n={".s-donation-section .s-component.s-donation .s-donation-progress .progress-bar .progress":"background: "+t,".s-donation-section .s-component.s-donation .s-donation-progress .progress-bar .indicator:before":"background: "+t,".s-donation-section .s-component.s-donation .s-donation-progress .progress-bar .indicator:after":"border-top-color: "+t}
return n},ecommerceTextGroup:function(e){var t=e.textColor.toHex(),n=e.textColor.lighten(.2).toHex(),i="color: "+t+";",o="color: "+n+";",s=".s-ecommerce .s-ecommerce-products-wrapper .s-ecommerce-card-view-wrapper .s-ecommerce-card-view-detail .s-ecommerce-card-view-detail-header",r={".s-ecommerce-card-view-wrapper .s-ecommerce-card-view-cards .s-ecommerce-card-view-card .s-ecommerce-card-view-card-price":i,".s-ecommerce .s-ecommerce-row-view-product .s-ecommerce-row-view-product-detail-panel .s-ecommerce-row-view-product-pricing":i,".s-section .s-category-bar .category-list .category-link-item.selected":i,".s-section .s-category-bar .category-list .category-link-item.selected:after":"background: "+t,".s-section .s-category-bar .category-list .category-link-item-wrapper:hover .category-link-item:not(.no-hover)":i}
r[s+" .back-btn"]=r[s+" .prev-product-btn"]=r[s+" .next-product-btn"]=i
r[s+" .back-btn:hover"]=r[s+" .prev-product-btn:hover"]=r[s+" .next-product-btn:hover"]=o
return r},ecommerceGroup:function(e){e.textColor=e.textColor||e.main
e.mobileBg=e.mobileBg||new s.default("#f2f2f2")
var t=e.main.toHex(),n=e.mobileBg.toHex(),i=e.mobileBg.mix("#000",.2).toHex(),o="background: "+t+";",a="background: "+n+";"
return Object.assign({".s-ecommerce-row-view-product .s-ecommerce-row-view-product-thumbnail-list ul li.current":"border: 2px solid "+t,".s-ecommerce-card-view-wrapper .s-ecommerce-card-view-card .s-ecommerce-card-view-card-stock-warning":o,".s-ecommerce-shopping-cart-wrapper .s-ecommerce-shopping-cart":o,".s-ecommerce-shopping-cart-wrapper .s-ecommerce-shopping-cart.hovered":o,".s-ecommerce-shopping-cart-wrapper .s-ecommerce-shopping-cart-mobile":"\n        "+a+"\n        border-top: 1px solid "+i+";",".s-ecommerce-shopping-cart-wrapper .s-ecommerce-shopping-cart-mobile .check-btn":o,".s-ecommerce-animation-item":"\n        border: 2px solid "+t+";\n        color: "+t+";",".s-ecommerce-row-view-product .mobile-select .price-label":"color: "+t,".s-ecommerce-row-view-product .mobile-select .variation-item.selected":"border: 1px solid "+t+"; "+o,".s-ecommerce-row-view-product .mobile-select .add-btn":o,".s-ecommerce-row-view-product .slider-wrapper .slider-dot-wrapper .slider-dot":"border: 1px solid "+t,".s-ecommerce-row-view-product .slider-wrapper .slider-dot-wrapper .slider-dot.selected":"background: "+t},r.ecommerceTextGroup({textColor:e.textColor}))}}
t.default=r
e.exports=t.default},2330:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n=m[e]||e
n=n.split(",").map(function(e){return p+e.trim()}).join(",")
var i=f[e]||f.default
if(a.default.isString(t))return t.indexOf(":")!==-1?n+("{"+t+"}"):n+("{"+i+":"+t+"}")
var o=c.default.prototype.validate(t)
return o?n+("{"+i+":"+o.toRgba()+";}"):void 0}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n="",i=null
for(i in e)if(e.hasOwnProperty(i)){var s=i.split(" ")
d.default[i]?!function(){var s=d.default[i](e[i]),r=function(e){Array.isArray(t.prefix)?t.prefix.forEach(function(t){n+=o(t+" "+e,s[e])}):n+=o((t.prefix||"")+" "+e,s[e])}
for(var a in s)r(a)}():m[s[0]]?s.forEach(function(t){return n+=o(t,e[i])}):o(i,e[i])}return n}Object.defineProperty(t,"__esModule",{value:!0})
var r=n(3),a=i(r),l=n(548),c=i(l),u=n(2329),d=i(u),p=".s-custom-colors ",m={title:".s-title",subtitle:".s-subtitle",itemTitle:".s-item-title",itemSubtitle:".s-item-subtitle",titleLink:".s-title .s-text .s-component-content a",itemTitleLink:".s-item-title .s-text .s-component-content a",subtitleLink:".s-subtitle .s-text .s-component-content a",itemSubtitleLink:".s-item-subtitle .s-text .s-component-content a",textLink:".s-text .s-component-content a",socialFeedLink:".s-social-feed .s-feeds-item .s-feed-content .s-feed-text-main a",button:".s-common-button",buttonHover:".s-common-button:hover",overlay:".s-bg-overlay:before",blogInfo:".s-blog-wrapper .s-blog-col-placeholder .s-blog-details .s-blog-info",storePrice:".s-ecommerce-row-view-product .s-ecommerce-row-view-product-pricing, .s-ecommerce-card-view-card-price",termsLink:".s-terms-link a",socialLinks:".s-component.s-social-media ul.s-social-media-buttons .s-social-icon",socialLinks2:".s-component.s-social-media ul.s-social-media-buttons .s-social-icon",mobileActionButton:".s-mobile-actions .s-mobile-actions-item.one-item",mobileActionButtonForApp:".s-mobile-actions .s-mobile-actions-item.selected:not(.one-item)",mobileNavbarButtons:".navbar-drawer-bar .navbar, .navbar-drawer-bar .mobile",mobileNavbarButtonsOpen:".navbar-drawer-bar.drawer-open .navbar, .navbar-drawer-bar.drawer-open .mobile"},f={default:"color",button:"background",buttonHover:"background",mobileActionButton:"background",mobileActionButtonForApp:"color",overlay:"background",mobileNavbarButtons:"background",mobileNavbarButtonsOpen:"background",socialLinks:"background",socialLinks2:"color"}
t.default={generate:s}
e.exports=t.default},2331:function(e,t,n){"use strict"
function i(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&s)for(var a in s)void 0===n[a]&&(n[a]=s[a])
else n||(n=s||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),c=0;c<r;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),r=n(1),a=o(r),l=n(3),c=o(l),u=n(15),d=o(u),p=n(12),m=o(p),f=n(239),h=o(f),g=n(5),v=o(g),y=n(136),b=(o(y),n(44)),_=o(b),w=n(837),E=o(w),C=n(30),x=(i(C),n(56)),N=i(x),k=n(838),S=o(k),P=n(547),T=o(P),L=n(18),M=o(L),O=n(2067),I=o(O),D=n(893),B=(o(D),n(531)),A=(o(B),n(245)),j=(o(A),n(2064)),H=n(2304),R=o(H),U=n(237),F=o(U),V=n(331),z=(o(V),n(29)),W=o(z),K=n(884),G=o(K),q=n(9),$=5,Y=function(e){var t=e.replace(/(\/)(\d)/,"$1t$2")
return{url:"//uploads.strikinglycdn.com/static/backgrounds/"+e+".jpg",thumbUrl:"//uploads.strikinglycdn.com/static/backgrounds/"+t+".jpg",sizing:"cover"}},X=function(e){return{url:"//uploads.strikinglycdn.com/page/images/backgrounds/"+e+".jpg",thumbUrl:"//uploads.strikinglycdn.com/page/images/backgrounds/"+e+"-thumb.jpg",sizing:"cover"}},J=function(e){return{url:"http://uploads.strikinglycdn.com/static/backgrounds/pastel-solids/"+e+".jpg",thumbUrl:"http://uploads.strikinglycdn.com/static/backgrounds/pastel-solids/"+e+".jpg",sizing:"tile"}},Q=function(e){var t=e.replace(/(\/)(\d)/,"$1t$2")
return{url:"http://o0m4okv24.qnssl.com/static/backgrounds/"+e+".jpg",thumbUrl:"http://o0m4okv24.qnssl.com/static/backgrounds/"+t+".jpg",sizing:"cover"}},Z=function(e,t){var n=["nature/194","cityscape/170","things/121","cityscape/166","nature/184"],i=Y
if("solidBanner"===e){n=["banners/banner1","bg3","banners/banner3","banners/banner4","bg1"]
i=X}if(m.default.getIsSxl()){n=["abstract/76","nature/190","cityscape/155","business-2/136","nature/171"]
i=Q}if("pastelSolids"===e){n=["44","42","36","39","48"]
i=J}t&&t>0&&t<$&&(n=n.splice(0,t))
return n.map(function(e){return i(e)})}
t.default=d.default.create({displayName:"BackgroundImage",mixins:[(0,_.default)("editor"),S.default,T.default.enableAfterMount()],bobcatPropTypes:R.default.bobcatPropTypes,getBobcatDefaultProps:R.default.getBobcatDefaultProps,componentDidMount:function(){},componentWillUnmount:function(){},_setImage:function(e){this.updateData((0,j.imageDataForSaving)(e))},_imageUploaded:function(e){/\.mp4$/.test(e.getUrl())?this.updateData(Object.assign((0,j.imageDataForSaving)(e),{videoHtml:G.default.getVideoHtmlByUrl(e.getUrl(),1280,720),videoUrl:e.getUrl(),textColor:"overlay"})):this._setImage(e)
this.savePage()},_onPreviewColor:function(e){var t=this
return function(){t.props.storePreviewData()
t.updateData({textColor:e})}},_onClickTextColor:function(e){var t=this
return function(){t.updateData({textColor:e})
t.props.clearPreviewData()
t.savePage()}},_imageUrlMixin:function(e){var t={s:null,storage:null,storageKey:null,format:null}
return Object.assign(t,e)},_createEnterStockImageFn:function(e){var t=this
return function(){t.props.storePreviewData()
t.updateData(t._imageUrlMixin({url:e.url,videoHtml:"",sizing:e.sizing,textColor:"overlay",userClassName:""}))}},_createEnterStockBgColorFn:function(e){var t=this
return function(){t.props.storePreviewData()
t.updateData(t._imageUrlMixin({url:"",videoHtml:"",sizing:e.sizing,userClassName:e}))}},_createClickStockImageFn:function(e){var t=this
return function(){t.updateData(t._imageUrlMixin({url:e.url,videoHtml:"",sizing:e.sizing,userClassName:"",w:16,h:9}))
t.props.clearPreviewData()
t.savePage()
F.default.track("Editor - Edit Background")}},_createClickStockBgColorFn:function(e){var t=this
return function(){t.updateData(t._imageUrlMixin({url:"",videoHtml:"",sizing:e.sizing,userClassName:e}))
t.props.clearPreviewData()
t.savePage()
F.default.track("Editor - Edit Background")}},_onClickEditImage:function(){var e=this
E.default.launchAviaryEditor({image:this.props,styles:this.props,imageDOM:this.refs.aviaryImage,onSaveCallback:function(t,n){M.default.uploadImageFromUrl({url:n,onDone:function(t,n,i){e._imageUploaded(i)}})},userPlan:h.default.getPlan()})},_getUrlForImageEditor:function(){var e=c.default.assign({},this.props,{s:10})
return N.createImage(e).getUrl(this.props.size,!0)},_url:function(){return N.createImage(this.props).getUrl(this.props.size)},_onClickUpload:function(){I.default.pick({initialTabIdx:0,iconLibComponents:"background",from:"background",handlers:{itemUploaded:this._imageUploaded,itemSelected:this._imageUploaded}})},_onClickMoreImage:function(){I.default.pick({initialTabIdx:2,iconLibComponents:"background",from:"background",handlers:{itemUploaded:this._imageUploaded,itemSelected:this._imageUploaded}})},_onChangeBackgroundSize:function(e){this.updateData({sizing:e.target.value})
this.savePage()},_renderStockImage:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,n=Z(this.getData("stockKey"),t)
return s("span",{},void 0,n.map(function(t,n){var i={backgroundImage:"url("+t.thumbUrl+")"}
return s("li",{style:i,onClick:e._createClickStockImageFn(t),onMouseEnter:e._createEnterStockImageFn(t),onMouseLeave:e.props.restorePreviewData},n)}))},_renderColor$Image:function(){var e=this,t=this.props.bgClassNames,n=t.length,i=""
n<$&&(i=this._renderStockImage($-n))
return s("span",{},void 0,t.map(function(t,n){return s("li",{className:t,onClick:e._createClickStockBgColorFn(t),onMouseEnter:e._createEnterStockBgColorFn(t),onMouseLeave:e.props.restorePreviewData},n)}),i)},_renderImgEditButoon:function(){if(!m.default.getIsSxl()||v.default.getIsImageEditorRollout())return s("div",{className:"clearfix mb"},void 0,s("div",{className:"s-btn small no-margin dark-gray",onClick:this._onClickEditImage},void 0,q("Edit Image")))},render:function(){return s("div",{},void 0,a.default.createElement("img",{style:{display:"none"},src:this._getUrlForImageEditor(),ref:"aviaryImage"}),s("ul",{className:"stock-images clearfix"},void 0,this.props.showDefaultColor?this._renderColor$Image():this._renderStockImage(),s("li",{className:"btn",onClick:this._onClickMoreImage},void 0,s("span",{},void 0," ",q("More")," "))),s("div",{className:"clearfix mb"},void 0,s("div",{className:"s-btn small no-margin dark-gray",onClick:this._onClickUpload},void 0,q("Upload Image"))),this.props.showImageOptions?s("div",{},void 0,this._renderImgEditButoon(),!W.default.isSmallScreen()&&s("div",{className:"drop-down-select"},void 0,s("div",{className:"icon"}),s("select",{onChange:this._onChangeBackgroundSize,value:this.props.sizing},void 0,s("option",{value:"cover"},void 0,q("Stretch")),s("option",{value:"contain"},void 0,q("Contain")),s("option",{value:"tile"},void 0,q("Tile")),s("option",{value:"center"},void 0,q("Center")))),s("div",{className:"text-selection-wrap"},void 0,s("div",{className:"selection light-text "+("light"===this.props.textColor?"current":""),rel:"tooltip-left","data-original-title":q("Light Text"),onMouseEnter:this._onPreviewColor("light"),onMouseLeave:this.props.restorePreviewData,onClick:this._onClickTextColor("light")},void 0,"Tt"),s("div",{className:"selection text-overlay "+("overlay"===this.props.textColor?"current":""),rel:"tooltip-left","data-original-title":q("Light Text + Overlay"),onMouseEnter:this._onPreviewColor("overlay"),onMouseLeave:this.props.restorePreviewData,onClick:this._onClickTextColor("overlay")},void 0,"Tt"),s("div",{className:"selection dark-text "+("dark"===this.props.textColor?"current":""),rel:"tooltip-left","data-original-title":q("Dark Text"),onMouseEnter:this._onPreviewColor("dark"),onMouseLeave:this.props.restorePreviewData,onClick:this._onClickTextColor("dark")},void 0,"Tt"))):null)}})
e.exports=t.default},2332:function(e,t,n){(function(i){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&s)for(var a in s)void 0===n[a]&&(n[a]=s[a])
else n||(n=s||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),c=0;c<r;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),r=n(1),a=o(r),l=n(6),c=o(l),u=n(15),d=o(u),p=n(44),m=o(p),f=n(884),h=o(f),g=n(2067),v=o(g),y=n(2304),b=o(y),_=n(2336),w=o(_),E=[{url:"https://www.youtube.com/watch?v=niosbUYwMB8",thumbUrl:"https://i.vimeocdn.com/video/544087938_1920.jpg"},{url:"https://www.youtube.com/watch?v=CBJuMKdYPWE",thumbUrl:"https://i.vimeocdn.com/video/531892175_1920.jpg"},{url:"https://www.youtube.com/watch?v=f6SivI7ZGPQ",thumbUrl:"https://i.vimeocdn.com/video/544619687_1920.jpg"},{url:"https://www.youtube.com/watch?v=s5trY3IYkoM",thumbUrl:"https://i.vimeocdn.com/video/544115855_1920.jpg"},{url:"https://www.youtube.com/watch?v=FXenze9SVOY",thumbUrl:"http://i.vimeocdn.com/video/544897762_1920.jpg"}]
t.default=d.default.create({displayName:"BackgroundVideo",mixins:[(0,m.default)("editor")],bobcatPropTypes:b.default.bobcatPropTypes,getBobcatDefaultProps:b.default.getBobcatDefaultProps,_getVideoProps:function(){return{videoHtml:this.props.vidoeHtml,videoUrl:this.props.videoUrl,binding:this.getDefaultBinding().sub("_addVideoPanel"),onComponentDidMount:this.props.changePositionOfAddVideoPanel,updateVideoBg:this._updateVideoBg,showVideoPanel:this.getMeta("showVideoPanel")}},_updateVideoBg:function(e){switch(e.actionState){case"add":var t={videoHtml:e.videoHtml,url:e.url,textColor:"overlay",w:null,h:null,storage:null,storageKey:null,format:null}
e.videoUrl&&(t.videoUrl=e.videoUrl)
this.updateData(t)
this.updateMeta({showVideoPanel:!1})
this.props.clearPreviewData()
e.lowResThumbnail&&this._adjustVideoBgThumbnail(e)
break
case"preview":this.props.storePreviewData()
this.updateData({videoHtml:e.videoHtml,url:e.url,textColor:"overlay",w:null,h:null,storage:null,storageKey:null,format:null})
break
case"endPreview":this.props.restorePreviewData()}},_adjustVideoBgThumbnail:function(e){var t=this,n=(0,c.default)("<img src='"+e.url+"' />")
n.load(function(){n[0].naturalWidth<200&&t.updateData({url:e.lowResThumbnail})})
n.error(function(){t.updateData({url:e.lowResThumbnail})})},_createEnterStockVideoFn:function(e){var t=this
return function(){t._updateVideoBg({videoHtml:h.default.getVideoHtmlByUrl(e.url,1280,720),url:e.thumbUrl,actionState:"preview"})}},_createClickStockVideoFn:function(e){var t=this
return function(){t._updateVideoBg({videoHtml:h.default.getVideoHtmlByUrl(e.url,1280,720),url:e.thumbUrl,actionState:"add"})
t.savePage()}},_onMouseLeaveStockVideo:function(){this._updateVideoBg({actionState:"endPreview"})},_onClickToggleVideoPanel:function(){this.updateMeta({showVideoPanel:!this.getMeta("showVideoPanel")})},_onClickMoreVideo:function(){var e=this
v.default.pick({dialogType:"video",handlers:{itemSelected:function(t){e._updateVideoBg({videoHtml:h.default.getVideoHtmlByUrl(t.url,1280,720),url:t.thumbUrl,actionState:"add"})
e.savePage()}}})},_renderStockVideo:function(){var e=this
return s("ul",{className:"stock-videos clearfix"},void 0,E.map(function(t,n){var i={backgroundImage:"url("+t.thumbUrl+")",backgroundSize:"cover"}
return s("li",{className:"stock-video-button",style:i,onClick:e._createClickStockVideoFn(t),onMouseEnter:e._createEnterStockVideoFn(t),onMouseLeave:e._onMouseLeaveStockVideo},n,s("i",{className:"fa fa-video-camera"}))}),s("li",{className:"btn",onClick:this._onClickMoreVideo},void 0,s("span",{},void 0,i("Video|More"))))},render:function(){return s("div",{},void 0,this.getMeta("showVideoPanel")&&a.default.createElement(w.default,this._getVideoProps()),this._renderStockVideo(),s("div",{className:"clearfix mb"},void 0,s("div",{className:"add-video-btn s-btn small no-margin dark-gray",onClick:this._onClickToggleVideoPanel},void 0,i("Video|Embed Video"))))}})
e.exports=t.default}).call(t,n(9))},2333:function(e,t,n){"use strict"
var i,o,s,r,a,l,c
r=n(1)
i=n(15)
c=n(2352)
a=n(33)
s=n(2034)
o=n(16)
l=function(e){return a.getExternalLinkMappingRS(e,s.getPagesList())}
e.exports=i.createPageComponent({displayName:"ExternalLinkNav",observedProps:["url","text","updateTimeStamp"],bobcatPropTypes:{data:{updateTimeStamp:r.PropTypes.number,new_target:r.PropTypes.bool,text:r.PropTypes.string,url:r.PropTypes.string,id:r.PropTypes.string,link_type:r.PropTypes.string,page_id:r.PropTypes.string,section_id:r.PropTypes.string}},_getUrlToShow:function(){var e,t,n,i,s,r,c
n=this.props,e=n.link_type,c=n.url,t=n.page_id,r=n.section_id
if("section"===e)return o.getExternalLinkUrl(e,c,t,r)
s=l(c)
return a.addProtocol(null!=(i=s.publicURL)?i:s.siteDeleted?"#":c)},_getTarget:function(){var e,t,n
n=this.props,e=n.link_type,t=n.new_target
return t&&"section"!==e?"_blank":"_self"},render:function(){return o.getShowInNavLinks(this.props.id)?c.apply(this):null}})},2334:function(e,t,n){"use strict"
var i,o,s,r,a,l,c
i=n(6)
s=n(249)
a=n(17)
r=n(321).RegexConstants
c=n(884)
o=n(40)
l=function(){function e(){}e.prototype.upload=function(e){var t,n
n=c.getVideoType(e.url)
switch(n){case"youku":case"tudou":case"qq":t=function(){switch(n){case"youku":return c.getYouKuHtml(e.url)
case"tudou":return c.getTuDouHtml(e.url)
case"qq":return c.getQQHtml(e.url)}}()
return""!==t?e.success({message:{html:t,thumbnail_url:""}}):"function"==typeof e.error?e.error():void 0
default:return new o({type:"POST",url:a.VIDEO.CREATE(),data:{video:{url:e.url,maxwidth:e.maxwidth||700}},success:function(t){return"retry"===t.html?s.poller(a.TASKS.POLL(t.message.type,t.message.id,1),e.success,e.error):"success"===t.html?e.success(t):void 0},error:e.error}).run()}}
return e}()
e.exports=new l},2335:function(e){"use strict"
var t,n
t="../../../../public/images/v4"
n=function(e){return e.replace(t,"../../../../images/v4")}
e.exports={correctThumbnailPath:n}},2336:function(e,t,n){(function(t){"use strict"
var i,o,s,r,a,l,c,u,d,p
a=n(1)
i=n(6)
o=n(15)
u=n(2334)
d=n(884)
s=n(240)
c=n(33)
r=n(44)
l=n(237)
p=n(2351)
e.exports=o.createPageComponent({displayName:"BackgroundVideoPanel",mixins:[r("editor")],bobcatPropTypes:{callbacks:{onComponentDidMount:a.PropTypes.func.isRequired,updateVideoBg:a.PropTypes.func.isRequired,showVideoPanel:a.PropTypes.bool.isRequired}},componentWillMount:function(){return this.initMeta({needToShowUrlError:!1,tempVideoUrl:this.props.videoUrl,isUploading:!1})},componentDidMount:function(){return this.cbProps.onComponentDidMount()},_tempVideoUrl:function(){return this.getMeta("tempVideoUrl")},_needToShowUrlError:function(){return this.getMeta("needToShowUrlError")},_updateVideo:function(e){return this.cbProps.updateVideoBg(e)},_uploadSuccess:function(e,n){return function(o){return function(s){var r,a,c
r=i(s.message.html)
a=r.attr("height")
c=r.attr("width")
switch(n){case"youtube":o._updateVideo({videoHtml:d.getYTIFrameHtml(d.getVideoID(e,n),c,a),videoUrl:e,url:d.getHDYTThumbnail(d.getVideoID(e,n)),lowResThumbnail:d.getNormalYTThumbnail(d.getVideoID(e,n)),actionState:"add"})
break
case"vimeo":o._updateVideo({videoHtml:d.getVimeoIFrameHtml(d.getVideoID(e,n),c,a),videoUrl:e,url:s.message.thumbnail_url,actionState:"add"})
break
default:window.alert(t("Video|Video format is not supported. Please use Youtube/Vimeo full URL only."))}o.updateMeta({isUploading:!1,needToShowUrlError:!1})
o.savePage()
return l.track("Editor - Add Video Background")}}(this)},_uploadFail:function(){var e
e=status.responseJSON
return this.updateMeta({needToShowUrlError:!0,isUploading:!1})},_uploadVideo:function(){var e,t
this.updateMeta({isUploading:!0})
t=c.addProtocol(this.getMeta("tempVideoUrl"))
e=d.getVideoType(t)
return u.upload({url:t,maxwidth:1440,success:this._uploadSuccess(t,e),error:this._uploadFail})},_onChangeUrl:function(e){return this.updateMeta({tempVideoUrl:s.escapedValue(e.target.value)})},render:function(){return p.apply(this)}})}).call(t,n(9))},2337:function(e,t,n){(function(t){"use strict"
var i,o,s,r,a,l,c,u
a=n(1)
r=n(5)
l=n(2063)
c=n(2062)
o=n(2299)
i=n(883)
u=n(330)
s=n(2294)
e.exports={mixins:[s],displayName:"ProcessSection",componentWillMount:function(){var e,t,i,o
e=n(2293)
e.removeOldBackgroundForText(this)
o=r.getThemeName()
t=n(2302)
i=this._getLayoutVariation()
return this._getLayoutBinding().sub("layout_variation").set(t.getDefaultLayoutKey(o,i))},_getLayoutOptions:function(){var e,t
t=r.getThemeName()
e=n(2302)
return e.getLayoutOptions(t)},_shouldRenderItemLinker:function(e,t){return e!==t},_renderItemLinker:function(){return a.createElement("div",{className:"process-item-linker"})},_renderRepeatable:function(e){var t,i,s,u,d,p,m,f,h,g,v
t=n(2302)
v=r.getThemeName()
p=this._getLayoutVariation()
s=this.getComponentBinding(e)
f=s.get("id")
m=this.getRepeatableBinding(e)
d="function"==typeof(i=t.getLayout(v,p))?i(m):void 0
u="function"==typeof t.getItemSize?t.getItemSize(m):void 0
h=function(e){return function(t,n){var i,s
i=m.sub(n)
s=d.itemClass
return a.createElement(c,Object.assign({className:s,binding:{default:i,listBinding:m},parentId:f,index:n},e._getRepeatableItemProps(m,n)),a.createElement("div",{className:"process-item-wrapper"},a.createElement("div",{className:"process-item-infos"},a.createElement("div",{className:"process-item-index s-font-body"},n+1),e._shouldRenderItemLinker(n+1,u)?e._renderItemLinker():null),a.createElement(o,{section:e,itemBinding:i,binding:i,showItemSubtitle:!1,upperChildrenPosition:!0})))}}(this)
g=this.getComponentProps("repeatable1")
return a.createElement(l,Object.assign({className:"s-mh"+("editor"===s.get("_state")?" s-arranging":"")},g),s.get("list").map(h).toArray())},render:function(){t("Editor|Process")
t("Editor|A numbered list of steps. Explain how your service works!")
return this.getTemplate().apply(this)}}}).call(t,n(9))},2338:function(e,t,n){(function(t){"use strict"
var i,o
i=n(5)
o=n(61)
e.exports={mixins:[],displayName:"BlockSection",getWholeThemeFeature:function(){var e
e=o.get(i.getTheme().get("name"))
return null!=e?e.features:void 0},render:function(){t("Editor|Make Your Own Section")
t("Editor|Want more control over layouts? Arrange components yourself!")
return this.getTemplate().apply(this)}}}).call(t,n(9))},2339:function(e,t,n){"use strict"
e.exports=n(2310)},2340:function(e,t,n){(function(t){"use strict"
e.exports={mixins:[],displayName:"DonationSection",render:function(){t("Editor|Simple Store")
t("Editor|Sell products right on your site! Manage orders, payments, and more.")
return this.getTemplate().apply(this)}}}).call(t,n(9))},2341:function(e,t,n){(function(t){"use strict"
e.exports={mixins:[],displayName:"HTMLSection",render:function(){t("Editor|App Store & HTML")
t("Editor|Embed a map, a calendar, a document, a form or any HTML code!")
return this.getTemplate().apply(this)}}}).call(t,n(9))},2342:function(e,t,n){(function(t){"use strict"
var i,o,s,r,a,l,c,u
a=n(1)
u=n(330)
o=n(333)
l=n(2063)
c=n(2062)
r=n(5)
i=n(12)
s=n(2294)
e.exports={mixins:[s],displayName:"ContactsSection",componentWillMount:function(){var e,t,i,o
o=r.getThemeName()
t=this._getLayoutVariation()
i=this.getDefaultBinding().get("template_name")
t.split("-").length>=2&&("perspective"===o?["mediaLeft","mediaRight","center"].includes(t.split("-")[0])||(t="center-"+t):["mediaLeft","mediaRight","center"].includes(t.split("-")[0])&&(t=t.split("-").slice(1).join("-")))
e=n(2301)
return this._getLayoutBinding().sub("layout_variation").set(e.getDefaultLayoutKey(o,t))},_getLayoutOptions:function(){var e,t
t=r.getThemeName()
e=n(2301)
return e.getLayoutOptions(t)},_renderRepeatable:function(e){var t,s,d,p,m,f,h,g,v,y
t=n(2301)
y=r.getThemeName()
m=this._getLayoutVariation()
d=this.getComponentBinding(e)
h=d.get("id")
f=this.getRepeatableBinding(e)
p="function"==typeof(s=t.getLayout(y,m))?s(f):void 0
g=function(e){return function(t,n){var s,r,l,d
r=f.sub(n)
l=p.itemClass
d=p.naturalImage
s="480x960>"
return a.createElement(c,Object.assign({className:l,binding:{default:r,listBinding:f},parentId:h,index:n},e._getRepeatableItemProps(f,n)),a.createElement("div",{className:"s-item-media-group s-mhi"},a.createElement(o,Object.assign({size:s,parentId:h,moreIcons:!0,naturalSize:d},e.getReduxComponentProps("image1",r)))),e.sbHasContent("text1",{parentBinding:r})&&(i.getIsSxl()||!d)&&a.createElement("div",{className:"s-item-text-group"},a.createElement(u,Object.assign({tagName:"div",applyWordBreaks:"true",textType:"body"},e.getComponentProps("text1",r)))))}}(this)
v=this.getComponentProps("repeatable1")
return a.createElement(l,Object.assign({className:"s-mh"+("editor"===d.get("_state")?" s-arranging":"")},v),d.get("list").map(g).toArray())},render:function(){t("Editor|Contact")
t("Editor|A list of small icons. Good for social media.")
return this.getTemplate().apply(this)}}}).call(t,n(9))},2343:function(e,t,n){"use strict"
var i,o,s,r,a,l
a=n(1)
r=n(2034)
s=n(5)
o=n(888)
l=n(135)
i={observedProps:["showNav"],displayName:"NavbarSection",propTypes:{binding:a.PropTypes.object.isRequired,className:a.PropTypes.string,navbarItemData:a.PropTypes.oneOfType([a.PropTypes.object,a.PropTypes.array]),showNav:a.PropTypes.bool,eagerLoad:a.PropTypes.bool.isRequired},componentDidMount:function(){return r.addChangeListener(this._pagesListListener)},componentWillUnmount:function(){return r.removeChangeListener(this._pagesListListener)},_pagesListListener:function(){return this.forceUpdate()},_getTimestampForLinks:function(){return(new Date).getTime()},getSectionHash:function(e){return o.getSectionHashByIndex(e)},_getFirstSectionBackgroundProps:function(){var e
e=this.getBinding("firstSection")
return e.sub("components.background1").toJS()},_getNavItemProps:function(e){return e.showNav?{}:{style:{display:"none"}}},_switchPage:function(e,t){switch(s.getSiteMode()){case"editor":t.preventDefault()
return l.replace(e.path)
case"preview":t.preventDefault()
return l.push(e.path)}},render:function(){return this.getTemplate().apply(this)}}
e.exports=i},2344:function(e,t,n){"use strict"
e.exports=n(2337)},2345:function(e,t,n){"use strict"
e.exports=n(2308)},2346:function(e,t,n){(function(t){"use strict"
var i,o,s,r,a,l,c,u
o=n(334)
a=n(2294)
s=n(12)
u=n(2033)
i="noForeground"
r=1
l="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
c={mixins:[a],displayName:"SliderSection",componentWillMount:function(){this.layoutOptions=["left","right","noImage"]
this.layoutName=this._getLayoutProps().binding.get("layout_variation")
if(this.layoutName===i)return this.layoutOptions.push(i)},getInitialState:function(){return{imgEditorState:""}},setStateFunc:function(e){return this.setState({imgEditorState:e||""})},_showMediaWrapper:function(e){var t
t=["noImage",i]
return t.indexOf(e)===-1},_sbAnyHasContent:function(e,t){var n
n=this.getRepeatableBinding("slider1")
return!!this.sbAnyHasContent(t,{parentBinding:n.sub(e)})},_sbHasMediaContent:function(e){var t
t=this.getRepeatableBinding("slider1")
return!!this.sbHasContent("media1",{parentBinding:t.sub(e)})},_getSliderLayoutArr:function(){var e,t,n,i
i=this._getLayoutVariation()
n=[]
if(i.indexOf("[")!==-1)try{n=JSON.parse(i)}catch(e){t=e}else{i||(i=this.layoutOptions[r])
e=this.getRepeatableBinding("slider1").get().size
n=Array.from(new Array(e),function(){return function(){return i}}(this))}return n},_imageRatioWarnning:function(e){var n,i,o,s,r,a,l,c,u,d,p
l=this.getRepeatableBinding("slider1")
n=l.sub(e+".components.background1")
d=n.get("w")
r=n.get("h")
u=n.get("url")
if(!d||!r){d=16
r=9}c=t("Editor|This image is too tall! Please upload a banner with a wider aspect ratio.")
i=parseFloat(d/r)
if(i<1.25)return c
if(l.get().size<2)return""
o=l.sub("0.components.background1")
c=t("Editor|Your banner images are different sizes! You should keep all banner images the same size.")
p=o.get("w")
a=o.get("h")
if(!p||!a){p=16
a=9}s=parseFloat(p/a)
return e>0&&Math.abs(i-s)>.2?c:""},_getSliderLayout:function(e){var t,n
n=this._getSliderLayoutArr()
t=n[e]
return null!=t?t:this.layoutOptions[r]},_isBannerSection:function(){return this.layoutName===i},_renderSliderLayoutBtn:function(e){var n,i,o,s,r
s=this._getSliderLayoutArr()
n=s[e]
o=this.layoutOptions.indexOf(n)
i=this._getLayoutStatusName(o)||"B"
r=function(t){return function(){o===-1&&(o=0)
o===t.layoutOptions.length-1&&(o=-1)
s[e]=t.layoutOptions[++o]
return t._updateLayout(JSON.stringify(s))}}(this)
return React.createElement("div",{className:"s-component s-layout"},React.createElement("div",{className:"s-component-editor"},React.createElement(u,{className:"center clickable small title layout-button",onTap:r,rel:"tooltip-left",title:t("Editor|Click to change layouts.")},React.createElement("span",null,t("Layout"),React.createElement("span",{className:"layout-status"},i)))))},render:function(){var e
e=this.getTemplate().apply(this)
return e}}
e.exports=c}).call(t,n(9))},2350:function(e,t,n){"use strict"
function i(e,t){var n=s.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=s.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(1),s=n(3),r=(n(2327),n(2290),n(330),n(2291))
e.exports=function(){return o.createElement("div",i({className:"s-process-section s-section"},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1",null,!0)),null,o.createElement("div",{className:"container"},o.createElement("div",{className:"columns sixteen"},o.createElement(r,{contentCheck:"repeatable1",section:this,binding:this.getDefaultBinding()})),o.createElement("div",{className:this.sbUniformTextAlignment("text1 text2")},"\n      ",this._renderRepeatable("repeatable1"),"\n    ")))}},2351:function(e,t,n){(function(t){"use strict"
function i(){var e=r.DOM.input
return o.createElement("div",{className:"bg-video-panel s-point-right s-tooltip-dialog "+s.keys(s.pick({active:this.cbProps.showVideoPanel},s.identity)).join(" ")},o.createElement("div",{className:"menu-title"},t("Video|Use Youtube/Vimeo Video")),o.createElement("div",{className:"input-wrap"},o.createElement(e,{type:"text",placeholder:t("Video|Enter Youtube/Vimeo URL"),onChange:this._onChangeUrl,value:this._tempVideoUrl()}),this._getIsUploading()?null:o.createElement("span",{className:"no-border no-margin s-btn small yellow",onClick:this._uploadVideo},t("Video|Upload")),this._getIsUploading()?o.createElement("span",{className:"gray no-border no-margin s-btn small"},t("Video|Uploading...")):null),this._needToShowUrlError()?o.createElement("div",{className:"error-message"},o.createElement("div",{className:"fa fa-question-circle"}),"\n    ",t("Video|Video URL is invalid."),"\n    ",o.createElement(a,{},o.createElement("a",{href:"http://support.strikingly.com/hc/en-us/articles/215046387",target:"_blank"},t("Video|Learn more.")),o.createElement("a",{href:"http://help.sxl.cn/hc/zh-cn/articles/215309018",target:"_blank"},"了解更多"))):null,o.createElement("div",{className:"hint"},t("Video|Note: Video backgrounds won't play on phones or tablets. A thumbnail will be shown instead.")))}var o=n(1),s=n(3),r=n(28),a=n(331)
e.exports=function(){return i.apply(this,[])}}).call(t,n(9))},2352:function(e,t,n){"use strict"
var i=n(1)
n(3)
e.exports=function(){return i.createElement("li",{},i.createElement("a",{className:"s-external-link-item s-nav-item",href:this._getUrlToShow(),target:this._getTarget()},i.createElement("span",{className:"s-font-body"},this.props.text)))}},2353:function(e,t,n){(function(t){"use strict"
function i(){var e=this.getDefaultBinding().sub("sources")
return o.createElement("div",{className:"s-gallery "+(this._getGalleryClassName()+(this.props.isArranging?" s-arranging":"")),ref:"galleryListDOM"},this.isEditMode()?o.createElement("div",{skip:"true"},"\n    ",this._renderForEditor(),"\n  "):null,this.isEditMode()?null:o.createElement("div",{},o.createElement("div",{},this._renderForShow()),this._needToShowPagination()?o.createElement("div",{className:"s-component s-gallery-pagination s-text"},o.createElement("div",{className:"s-component-content"},1!=this._pagesNum?o.createElement("a",{className:"less-link s-common-link",onClick:this._onClickShowLess},t("Editor|Show less")):null,e.get().size>this._pagesNum*this._baseItemNum?o.createElement("a",{className:"more-link s-common-link",onClick:this._onClickShowMore},t("Editor|Show more")):null)):null),null,this.isEditMode()&&!this._isInNativeWeb()?o.createElement("div",{className:"center edit-buttons gallery-add-image",skip:"true"},o.createElement("div",{className:"s-small-black-button",onClick:this._onClickAddImage},"\n      ",t("Add Images"),"\n    "),o.createElement("div",{className:"s-small-black-button",onClick:this._onClickAddVideo,style:{marginLeft:"20px"}},"\n      ",t("Add Videos"),"\n    ")):null,null,this._isInNativeWeb()?o.createElement("div",{className:"native-button-wrapper"},!this.props.isArranging&&this.props.sources.size>0?o.createElement("div",{className:"s-small-black-button",onClick:this.props.toggleEditor},o.createElement("img",{src:s.cdnAssetPath("/images/icons/native/ic_settings_white_3x.png")}),"\n      ",t("Mobile|Manage items"),"\n    "):null,this.props.isArranging&&this.props.sources.size>0?o.createElement("div",{className:"s-small-black-button",onClick:this.props.toggleEditor},o.createElement("img",{src:s.cdnAssetPath("/images/icons/native/ic_check_1_white_3x.png")}),"\n      ",t("Mobile|Done"),"\n    "):null,o.createElement("div",{className:"s-small-black-button",onClick:this._onClickNativeAddImage.bind(null,"bottom")},o.createElement("img",{src:s.cdnAssetPath("/images/icons/native/ic_add_3x.png")}),"\n      ",t("Mobile|Add Image"),"\n    ")):null)}var o=n(1),s=(n(3),n(30))
e.exports=function(){return i.apply(this,[])}}).call(t,n(9))},2354:function(e,t,n){(function(t){"use strict"
var i=n(1),o=(n(3),n(30))
e.exports=function(){return i.createElement("div",{className:"no-bg s-block-thumb s-section-thumb"},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},i.createElement("div",{className:"s-font-title title"},t("Make Your Own Section!")))),i.createElement("div",{},i.createElement("img",{src:o.cdnAssetPath("/images/editor2/block-components.png")}))))}}).call(t,n(9))},2355:function(e,t,n){(function(t){"use strict"
var i=n(1)
n(3)
e.exports=function(){return i.createElement("div",{className:"s-cta-thumb s-section-thumb "+this._getBackgroundClass(),style:this._getBackgroundStyle()},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text1.value)}}),i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text2.value)}})),i.createElement("div",{className:"button s-font-body"},t("Sections|"+this.props.content.components.button1.text)))))}}).call(t,n(9))},2356:function(e,t,n){(function(t){"use strict"
var i=n(1)
n(3)
e.exports=function(){return i.createElement("div",{className:"no-bg s-donation-thumb s-section-thumb"},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text1.value)}}),i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text2.value)}}))),i.createElement("div",{className:"p100"},i.createElement("div",{className:"progress-bar"},i.createElement("div",{className:"progress"}),i.createElement("div",{className:"indicator"})),i.createElement("div",{className:"price-bar"},i.createElement("div",{className:"left-price"},i.createElement("div",{className:"price"},"400"),i.createElement("div",{className:"text"},t("Donation|Raised"))),i.createElement("div",{className:"right-price"},i.createElement("div",{className:"price"},"10000"),i.createElement("div",{className:"text"},t("Donation|Goal")))),i.createElement("div",{className:"button"},t("Sections|Donate Now")))))}}).call(t,n(9))},2357:function(e,t,n){(function(t){"use strict"
var i=n(1),o=(n(3),n(331)),s=n(30)
e.exports=function(){return i.createElement("div",{className:"s-html-thumb s-section-thumb "+this._getBackgroundClass(),style:this._getBackgroundStyle()},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text1.value)}}),i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text2.value)}})),i.createElement("div",{className:"app-store-thumb"},i.createElement(o,{},i.createElement("img",{src:"//uploads.strikinglycdn.com/static/sections/content/appstore.jpg"}),i.createElement("img",{src:s.cdnAssetPath("/images/editor2/appstore-sxl-1-min.png")}))))))}}).call(t,n(9))},2358:function(e,t,n){"use strict"
var i=n(1),o=(n(3),n(2350))
e.exports=function(){return i.createElement("div",{},"\n  ",o.apply(this),"\n")}},2359:function(e,t,n){"use strict"
function i(e,t){return o.createElement("div",{className:"info-box",key:t},o.createElement("div",{className:"number-box",dangerouslySetInnerHTML:{__html:t+1}}),e.components.text1.value?o.createElement("div",{className:"item-title s-font-heading",dangerouslySetInnerHTML:{__html:e.components.text1.value}}):null,e.components.text2.value?o.createElement("div",{className:"item-subtitle s-font-body",dangerouslySetInnerHTML:{__html:e.components.text2.value}}):null)}var o=n(1),s=n(3)
e.exports=function(){return o.createElement("div",{className:"s-process-thumb s-section-thumb "+this._getBackgroundClass(),style:this._getBackgroundStyle()},o.createElement("div",{className:"s-section-thumb-content"},o.createElement("div",{className:"p100"},o.createElement("div",{className:"title-group"},this.props.content.components.text1.value?o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null)),o.createElement("div",{className:"p100"},o.createElement.apply(this,["div",{className:"info-boxes"},s.map(this._getRepetableList(this.props.content.components.repeatable1.list,3),i.bind(this))]))))}},2360:function(e,t,n){(function(t){"use strict"
var i=n(1)
n(3)
e.exports=function(){return i.createElement("div",{className:"s-section-thumb s-signup-thumb "+this._getBackgroundClass(),style:this._getBackgroundStyle()},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text1.value)}}),i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text2.value)}})),i.createElement("div",{className:"form-thumb s-font-body"},i.createElement("input",{placeholder:t("Sections|"+this.props.content.components.email1.name_label)}),i.createElement("input",{placeholder:t("Sections|"+this.props.content.components.email1.email_label)}),i.createElement("div",{className:"button"},t("Sections|"+this.props.content.components.email1.submit_label))))))}}).call(t,n(9))},2361:function(e,t,n){(function(t){"use strict"
function i(){var e=this.props.content.components.slideSettings.layout_variation
return o.createElement("div",{className:"s-section-thumb-content"},o.createElement("div",{className:"p100 "+s.keys(s.pick({"dark-overlays":"noForeground"!==e},s.identity)).join(" ")},o.createElement("div",{className:"prev-arrow"}),o.createElement("div",{className:"next-arrow"}),"noForeground"!==e?o.createElement("div",{className:"s-slider-demo"},o.createElement("div",{className:"title-media"},o.createElement("img",{src:this._getImageUrl(this.props.content.components.slider1.list[0].components.media1.image)})),o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.slider1.list[0].components.text1.value)}}),o.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.slider1.list[0].components.text2.value)}}),o.createElement("div",{className:"button s-font-body"},t("Sections|"+this.props.content.components.slider1.list[0].components.button1.text))):null,o.createElement("div",{className:"selector-container "+s.keys(s.pick({"no-foreground":"noForeground"==e},s.identity)).join(" ")},o.createElement("div",{className:"selected selector"}),o.createElement("div",{className:"selector"}),o.createElement("div",{className:"selector"}))))}var o=n(1),s=n(3)
e.exports=function(){return o.createElement("div",{className:"s-section-thumb s-slider-thumb "+this._getBackgroundClass(this.props.content.components.slider1.list[0].components.background1),style:this._getBackgroundStyle(this.props.content.components.slider1.list[0].components.background1)},i.apply(this,[]))}}).call(t,n(9))},2362:function(e,t,n){(function(t){"use strict"
var i=n(1),o=(n(3),n(30))
e.exports=function(){return i.createElement("div",{className:"no-bg s-section-thumb s-social-thumb"},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"title-group"},i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text1.value)}}),i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text2.value)}})),i.createElement("div",{className:"social-thumb"},i.createElement("img",{src:o.cdnAssetPath("/images/editor2/social_feed_thumb.png")}))))}}).call(t,n(9))},2363:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var a=function(){function e(e,t){var n=[],i=!0,o=!1,s=void 0
try{for(var r,a=e[Symbol.iterator]();!(i=(r=a.next()).done);i=!0){n.push(r.value)
if(t&&n.length===t)break}}catch(e){o=!0
s=e}finally{try{!i&&a.return&&a.return()}finally{if(o)throw s}}return n}return function(t,n){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return e(t,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),c=n(2295),u=n(3),d=(i(u),function(e){function t(e){o(this,t)
var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.cacheLevel=-1
n.hideAdvancedOptions=!0
n.sectionName="new_title"
return n}r(t,e)
l(t,[{key:"componentDidMount",value:function(){this._rightLayout="center-right-normal"===this.props.layoutVariation}},{key:"getRotationKeys",value:function(){var e=a(this._levelKeys,3),t=(e[0],e[1],e[2]),n=["center-subTop-"+t,"center-bottom-"+t]
this._rightLayout&&n.push("center-right-"+t)
return n}}])
return t}(c.BaseLayoutButton))
t.default=(0,c.connectToStores)(d)
e.exports=t.default},2364:function(e,t,n){(function(t){"use strict"
var i,o,s,r,a,l,c
a=n(13)
r=n(16)
i=n(12)
o=n(319)
s=n(11)
l=n(3)
c=!1
e.exports={mixins:[],displayName:"BlogSection",waypointHandler:function(){var e,n
n=this._getLayoutProps().layoutVariation
if(!c&&r.getSections().length<3&&["A","B","C"].indexOf(n)!==-1){e=$(a.findDOMNode(this)).find(".s-layout .s-component-editor")
e.tooltip({placement:"left",trigger:"manual",extraClassNames:"swing-right",title:t("Blog|Try different layouts for blog!")})
c=!0
e.tooltip("show")
e.one("mouseenter",function(){return e.tooltip("destroy")})
return setTimeout(function(){return e.tooltip("destroy")},2e4)}},componentWillMount:function(){var e
e=this.getDefaultBinding().get("components.blog1").toJS()
if(l.isEmpty(e.category))return this.getDefaultBinding().set("components.blog1.category",s.fromJS({id:"all",name:t("Section|All Categories")}))},_getWaypointProps:function(){return{handler:this.waypointHandler,offset:20}},_getBlogArchiveDialogProps:function(){var e
e=this.getDefaultBinding().get("components.slideSettings.layout_variation")
null===e&&(e=void 0)
return{blogSectionLayout:e}},_getLayoutOptions:function(){return[{name:"F",key:"F"},{name:"A",key:"A"},{name:"B",key:"B"},{name:"C",key:"C"},{name:"D",key:"D"},{name:"E",key:"E"}]},_isBlogCategoryFeatureAvailable:function(){return o.canUse("blog_category")&&i.isBlogCategoryRolledOut()},render:function(){t("Editor|Simple Blog")
t("Editor|Write beautiful blog posts that open in a new page.")
return this.getTemplate().apply(this)}}}).call(t,n(9))},2365:function(e,t,n){(function(t){"use strict"
var i,o
o=n(3)
i=n(319)
e.exports={mixins:[],displayName:"EcommerceSection",_showLayoutButton:function(){return i.canUse("ecommerce_layout")},_getLayoutOptions:function(){return[{name:"row",key:"row"},{name:"card",key:"card"}]},render:function(){t("Editor|Simple Store")
t("Editor|Sell products right on your site! Manage orders, payments, and more.")
return this.getTemplate().apply(this)}}}).call(t,n(9))},2366:function(e,t,n){"use strict"
var i,o,s,r,a
a=n(1)
s=n(16)
i=n(12)
r=n(5)
o={observedProps:["showFooter","showTermsLink"],propTypes:{showFooter:a.PropTypes.bool,showTermsLink:a.PropTypes.bool},displayName:"FooterSection",_getLayoutOptions:function(){var e
e=[{name:"Vertical",key:"vertical"},{name:"Horizontal",key:"horizontal"},{name:"Grid",key:"grid"},{name:"Image",key:"image"}]
return e},_getFooterLayoutProps:function(){var e,t
e=this.getDefaultBinding()
return t={layoutVariation:e.get("layout_variation"),binding:e}},_getLayout:function(){var e
e=this.getDefaultBinding()
return e.get("layout_variation")||"vertical"},_hasMobileActions:function(){return r.hasNewMobileActions()},render:function(){return this.getTemplate().apply(this)}}
e.exports=o},2370:function(e,t,n){(function(t){"use strict"
var i=n(1)
n(3)
e.exports=function(){return i.createElement("div",{className:"s-blog-thumb s-section-thumb "+this._getBackgroundClass(),style:this._getBackgroundStyle()},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},i.createElement("div",{className:"s-font-title title"},t("Sections|Our Blog"))),i.createElement("div",{className:"blog"},i.createElement("div",{className:"blog-row"},i.createElement("div",{className:"blog-post"},i.createElement("div",{className:"blog-post-image"},i.createElement("img",{src:"//uploads.strikinglycdn.com/static/sections/blog-image-1.jpg"})),i.createElement("div",{className:"blog-post-content"},i.createElement("div",{className:"blog-post-title s-font-heading"},t("Sections|New Blog Feature!")),i.createElement("div",{className:"blog-post-subtitle"},t("Sections|September 17")))),i.createElement("div",{className:"blog-post"},i.createElement("div",{className:"blog-post-image"},i.createElement("img",{src:"//uploads.strikinglycdn.com/static/sections/blog-image-2.jpg"})),i.createElement("div",{className:"blog-post-content"},i.createElement("div",{className:"blog-post-title s-font-heading"},t("Sections|Lessons Learned from Starting Up")),i.createElement("div",{className:"blog-post-subtitle"},t("Sections|September 12")))),i.createElement("div",{className:"blog-post"},i.createElement("div",{className:"blog-post-image"},i.createElement("img",{src:"//uploads.strikinglycdn.com/static/sections/blog-image-3.jpg"})),i.createElement("div",{className:"blog-post-content"},i.createElement("div",{className:"blog-post-title s-font-heading"},t("Sections|Our Commitment to Service")),i.createElement("div",{className:"blog-post-subtitle"},t("Sections|August 30"))))),i.createElement("div",{className:"blog-row"},i.createElement("div",{className:"blog-post"},i.createElement("div",{className:"blog-post-image"},i.createElement("img",{src:"//uploads.strikinglycdn.com/static/backgrounds/things/t121.jpg"})),i.createElement("div",{className:"blog-post-content"},i.createElement("div",{className:"blog-post-title s-font-heading"},t("Sections|New Blog Feature!")),i.createElement("div",{className:"blog-post-subtitle"},t("Sections|September 17")))),i.createElement("div",{className:"blog-post"},i.createElement("div",{className:"blog-post-image"},i.createElement("img",{src:"//uploads.strikinglycdn.com/static/backgrounds/cityscape/t170.jpg"})),i.createElement("div",{className:"blog-post-content"},i.createElement("div",{className:"blog-post-title s-font-heading"},t("Sections|Lessons Learned from Starting Up")),i.createElement("div",{className:"blog-post-subtitle"},t("Sections|September 12")))),i.createElement("div",{className:"blog-post"},i.createElement("div",{className:"blog-post-image"},i.createElement("img",{src:"//uploads.strikinglycdn.com/static/backgrounds/things/t121.jpg"})),i.createElement("div",{className:"blog-post-content"},i.createElement("div",{className:"blog-post-title s-font-heading"},t("Sections|Our Commitment to Service")),i.createElement("div",{className:"blog-post-subtitle"},t("Sections|August 30")))))))))}}).call(t,n(9))},2373:function(e,t,n){(function(t){"use strict"
var i=n(1)
n(3)
e.exports=function(){return i.createElement("div",{className:"no-bg s-ecommerce-thumb s-section-thumb"},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text1.value)}}),i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text2.value)}}))),i.createElement("div",{className:"p50"},i.createElement("div",{className:"store-image"},i.createElement("img",{src:"//uploads.strikinglycdn.com/static/sections/content/ecommerce1.jpg"}))),i.createElement("div",{className:"p50"},i.createElement("div",{className:"item-title s-font-heading"},t("Sections|Smart Light Bulbs")),i.createElement("div",{className:"item-body-text s-font-body"},"$49.99"),i.createElement("div",{className:"item-subtitle s-font-body"},t("Sections|While you might not need all...")),i.createElement("div",{className:"form-thumb s-font-body"},i.createElement("div",{className:"selection-thumb"},i.createElement("div",{className:"select-box"},t("Sections|Purple"),"\n            ",i.createElement("img",{src:"//uploads.strikinglycdn.com/static/sections/content/selector.png"}))),i.createElement("div",{className:"input-thumb"},i.createElement("div",{className:"input-box"},"1")),i.createElement("div",{className:"button"},t("Sections|Buy Now"))))))}}).call(t,n(9))},2412:function(e,t,n){"use strict"
var i=n(1)
n(3)
e.exports=function(){return i.createElement("div",{className:"s-section-thumb s-title-thumb "+this._getBackgroundClass(),style:this._getBackgroundStyle()},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},this.props.content.components.text1.value?i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null,this.props.content.components.text2.value?i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:this.props.content.components.text2.value}}):null),i.createElement("div",{className:"arrow-image"}))))}},2431:function(e,t,n){"use strict"
function i(e,t){var n=s.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=s.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(1),s=n(3),r=(n(2326),n(330),n(2291)),a=n(2061),l=(n(2290),n(2292))
e.exports=function(){return o.createElement("div",{className:"s-new-media-section s-section "+this._getSectionType()+" s-layout-"+this._getFirstLayout()},null,o.createElement(l,i({className:"s-persp-bg"},this.getBackgroundProps("background1")),this.hasBackgroundVideo("background1")?o.createElement(a,this.getBackgroundProps("background1")):null,o.createElement("div",{className:"s-persp-container"},"center"!=this._getFirstLayout()?o.createElement(r,{section:this,binding:this.getDefaultBinding()}):null)),o.createElement("div",{className:"s-persp-content"},o.createElement("div",{className:"s-persp-container"},"center"==this._getFirstLayout()?o.createElement("div",{className:"s-persp-column"},o.createElement(r,{contentCheck:"repeatable1",section:this,binding:this.getDefaultBinding()})):null,"\n      ",this._renderRepeatable("repeatable1"),"\n    ")))}},2438:function(e,t,n){(function(t){"use strict"
function i(e,t){var n=s.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=s.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(1),s=n(3),r=(n(330),n(883)),a=n(835),l=n(333),c=n(2290),u=n(2061),d=n(2324),p=n(839),m=n(2291),f=n(2292)
e.exports=function(){return o.createElement(f,i({className:"s-new-hero-section s-section "+this._getSectionType()},this.getBackgroundProps("background1")),this.isEditMode()?o.createElement("div",{className:"s-section-editor-wrapper",skip:"true"},o.createElement(c,s.assign({},{bgClassNames:this.getThemeFeature("backgroundColorClassNames")},this.getComponentProps("background1"))),o.createElement(d,s.assign({},{layoutOptions:this._getLayoutOptions(),updateLayout:this._updateLayout},this._getLayoutProps()))):null,this.hasBackgroundVideo("background1")?o.createElement(u,s.assign({},{layout:this._getLayoutKey()},this.getBackgroundProps("background1"))):null,o.createElement("div",{className:"s-persp-container"},o.createElement("div",{className:"s-persp-column"},this._showImage()&&this.sbHasContent("media1")?o.createElement("div",{className:"s-media-group"},o.createElement(a,s.assign({},{emptyMessage:t("Editor|Add a logo or video.")},this.getReduxComponentProps("media1")))):null,o.createElement(m,{section:this,binding:this.getDefaultBinding()}),o.createElement("div",{className:"s-hero-content "+this.sbUniformTextAlignment("text1 text2")},"button"==this._getType()?o.createElement("div",{className:"ib"},o.createElement(r,this.getComponentProps("button1"))):null,"signup"==this._getType()?o.createElement("div",{className:"s-email-form-container"},o.createElement(p,s.assign({},{signup:!0},this.getComponentProps("email1")))):null,"images"==this._getType()?o.createElement("div",{className:"s-image-wrapper"},o.createElement("div",{className:"s-image-item"},o.createElement(l,s.merge(this.getReduxComponentProps("image1"),{eagerLoad:!0}))),o.createElement("div",{className:"s-image-item"},o.createElement(l,s.merge(this.getReduxComponentProps("image2"),{eagerLoad:!0})))):null),null)))}}).call(t,n(9))},2440:function(e,t,n){"use strict"
function i(e,t){var n=s.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=s.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(1),s=n(3),r=(n(2328),n(330)),a=n(2291),l=n(2061),c=(n(2290),n(2292))
e.exports=function(){return o.createElement("div",{},null,"s-info-section"==this._getSectionType()?o.createElement("div",{className:"s-info-section s-new-text-section s-section s-layout-"+this._getPositionLayout()},o.createElement(c,i({className:"s-persp-bg"},this.getBackgroundProps("background1")),this.hasBackgroundVideo("background1")?o.createElement(l,this.getBackgroundProps("background1")):null,o.createElement("div",{className:"s-persp-container"},"center"!=this._getPositionLayout()?o.createElement(a,{section:this,binding:this.getDefaultBinding()}):null)),o.createElement("div",{className:"s-persp-content"},o.createElement("div",{className:"s-persp-container"},"center"==this._getPositionLayout()?o.createElement("div",{className:"s-persp-column"},o.createElement(a,{contentCheck:"repeatable1",section:this,binding:this.getDefaultBinding()})):null,"\n        ",this._renderRepeatable("repeatable1"),"\n      "))):null,"s-text-section"==this._getSectionType()?o.createElement(c,i({className:"s-new-text-section s-section s-text-section"},this.getBackgroundProps("background1")),this.hasBackgroundVideo("background1")?o.createElement(l,s.assign({},{layout:this._getLayoutKey()},this.getBackgroundProps("background1"))):null,o.createElement("div",{className:"absolute s-persp-container topLeft"},o.createElement("div",{className:"s-persp-column"},o.createElement("div",{className:this._getTitleOverlayClass()},this.sbAnyHasContent("text1 text2")?o.createElement("div",{className:"s-title-group"},this.sbHasContent("text1")?o.createElement("div",{className:"s-title"},o.createElement(r,s.assign({},{tagName:"h2",textType:"title"},this.getComponentProps("text1")))):null,this.sbHasContent("text2")?o.createElement("div",{className:"s-item-text"},o.createElement(r,s.assign({},{tagName:"div",textType:"body"},this.getComponentProps("text2")))):null):null))),"\n    ",this._renderRepeatable("repeatable1"),"\n  "):null)}},2453:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n=new r.default(e).lumaCorrection(.8).lumaCorrection(),i=null
i=t?new r.default(t):new r.default(e)
var o=n.toHex(),s=i.toHex(),a=l.default.generate({"subtitle subtitleLink itemSubtitle itemSubtitleLink":n,"subtitleLink itemSubtitleLink":"\n      border-bottom: 1px solid "+n.fade(.7).toRgba()+";\n    ",blogInfo:n,button:"\n      background: "+o+";\n      border: 1px solid "+n.mult(.8).toHex()+";\n    ",buttonHover:"\n      background: "+n.mult(1.2).toHex()+";\n      border: 1px solid "+n.toHex()+";\n    ",mobileActionButton:n,mobileActionButtonForApp:n,mobileNavbarButtons:n,overlay:i.mult(.55).mix("#333",.3).fade(.35),socialLinks:n,ecommerceGroup:{main:n,mobileBg:i.lumaCorrection(-.4).mix("#f5f4ed",.8)},donationGroup:{main:n}})
a+="\n    .s-custom-colors .s-bg-light-text .s-blog-wrapper .s-blog-col-placeholder .s-blog-details .s-blog-info {\n      color: "+n.lumaCorrection(-.6).lighten(.4).toHex()+";\n    }"
var c=i.lumaCorrection(-.4).mix("#f5f4ed",.9).toHex()
a+="\n    .s-custom-colors .s-section {\n      background-color: "+c+";\n    }\n    .s-custom-colors .s-section .s-persp-bg {\n      background-color: "+s+";\n    }\n    .s-custom-colors .navbar-drawer-bar .mobile,\n    .s-custom-colors .navbar-drawer-bar .navbar {\n      background-color: "+o+";\n    }\n    .s-custom-colors .s-persp-content,\n    .s-custom-colors .s-social-feed-section,\n    .s-custom-colors .s-blog-section,\n    .s-custom-colors .s-store-section {\n      background-color: "+c+";\n    }\n  "
i.luma()<.6&&(a+="\n      .s-custom-colors .s-section .s-persp-bg .s-title,\n      .s-custom-colors .s-section .s-persp-bg .s-subtitle {\n        color: white;\n      }\n    ")
return a}Object.defineProperty(t,"__esModule",{value:!0})
t.default=o
var s=n(548),r=i(s),a=n(2330),l=i(a)
e.exports=t.default},2473:function(e,t,n){"use strict"
var i,o,s,r,a,l
i=n(6)
r=n(29)
l=n(39)
a=n(138)
s=n(12)
o=n(65)
e.exports=function(){var e,t,n,s,c,u,d,p,m,f,h,g,v,y,b,_,w
l.log("[PERSPECTIVE] Run afterRender")
e=i(window);(null!=(h=$S.stores.pageMeta)&&null!=(g=h.s4_migration)?g.is_migrated:void 0)||i(".se-style-button.s-preset-dark-transparent, .se-style-button.s-preset-light-transparent").hide()
_=[]
window.DEBUG||(window.DEBUG={})
window.DEBUG.getPerspectiveScrollPoints=function(){return _}
t=function(){var t
t=e.height()
_=[]
return i("ul.slides .s-section").each(function(e,n){var o,s,r
r=i(n)
o=r.height()
s=r.offset().top
return _[e]={top:s-t,bottom:s+o}})}
p=function(){return i(window).width()<=768}
d=function(){return!(r.isIE()||r.isIE11()||r.isMobile()||p())}
w=function(){return d()?i(".s-bg-image").each(function(){if("contain"!==i(this).css("background-size"))return i(this).addClass("fixed")
i(this).removeClass("fixed")
return this.style.backgroundPosition="center"}):i(".s-bg-image").removeClass("fixed").each(function(){return this.style.backgroundPosition="center"})}
f=function(){var e,t
if(d()){t=i(document).scrollTop()
e=0
return i("ul.slides .s-section").each(function(n,o){var s
if(_[n]&&_[n].top<=t&&t<=_[n].bottom){s=(t-_[n].top)/(_[n].bottom-_[n].top)*100
i(o).find(".s-bg-image").adjustBg(s)
i(o).hasClass("s-bg-image")&&i(o).adjustBg(s)
e+=1
if(2===e)return!1}})}}
i.fn.adjustBg=function(e){var t,n
t=i(this)
if(0!==t.length&&t.hasClass("fixed")&&(1!==i("ul.slides .s-section").length||!i("ul.slides .s-section").first().is(".s-slider-section"))){if(t.width()<i("#s-content").width()){n=t.width()/2+"px"
t.offset().left===i("#s-content").offset().left&&(n="-"+n)}else n=45+.1*e+"%"
return t.css({backgroundPosition:n+" "+e+"%"})}}
u=function(e){var t,n,i,o,s
i=e.find(".s-persp-content")
t=e.find(".s-persp-bg")
n=e.find(".s-persp-container")
return i.length>0?e.hasClass("s-layout-center")?"centerPanel":"left"===(o=t.css("float"))||"right"===o||"absolute"===t.css("position")?"sideBySide":"topToBottom":(null!=(s=n.eq(0))&&"function"==typeof s.hasClass?s.hasClass("absolute"):void 0)?"corner":"centerFull"}
s=function(){return r.isSmallScreen()||e.width()<1024?40:80}
c=function(e,t){var n,o
null==t&&(t="paddingTop")
n=e[0].style[t]
e[0].style[t]=""
o=parseInt(e.css(t),10)
e[0].style[t]=n
return o>80?80:"paddingTop"===t&&i(window).width()<1024&&o>50?50:o}
v=function(e){var t
t=e.find(".s-persp-container")
return t.each(function(e,t){var n
n=i(t)
n[0].style.paddingTop=""
return n[0].style.paddingBottom=""})}
y=function(e){e.stop()
return e[0].style.minHeight=""}
n=function(e,t,n){var i,o,s,r
null==n&&(n=!0)
i=n?"animate":"css"
o=e.height()
s=c(e)
r=.5*(t-o)
r=Math.max(r,s)
return e.stop()[i]({paddingTop:e.find(".full-width-gallery").length?0:Math.floor(r),paddingBottom:e.find(".full-width-gallery").length?Math.round(2*r):Math.ceil(r)})}
b=function(t,o){var s,r,a,l,d,p,m,f,h,g,b,_,w,E,C,x,N,k,S,P,T
null==o&&(o=!0)
if(!t.hasClass("s-slider-section")&&t.is(":visible"))if(t.hasClass("no-resize"))t.removeClass("fixed")
else{s=o?"animate":"css"
l=e.height()
P=e.width()
r=t.find(".s-persp-container")
m=u(t)
t.attr("data-layout-type",m)
if(r.length){"centerPanel"!==m&&t.find(".s-persp-content").stop()[s]({top:0})
if("sideBySide"===m||"centerFull"===m){g=null
b=0
r.each(function(e,t){var n,o
n=i(t)
o=n.height()
if(o>b){g=n
return b=o}})
k=b+2*c(g)
k=Math.max(k,l)
r.each(function(e,t){return n(i(t),k,o)})
return t.stop()[s]({minHeight:k})}if("corner"===m){v(t)
d={}
a={}
E=["topLeft","bottomLeft","topRight","bottomRight"]
for(p=0,f=E.length;p<f;p++){T=E[p]
a[T]=t.find("."+T)
null!=(C=a[T][0])&&(C.style.minHeight="")
d[T]=null!=(x=null!=(N=a[T])&&"function"==typeof N.height?N.height():void 0)?x:35}S=2.5*c(t.find(".topLeft"),"top")
_=Math.max(d.topLeft,d.topRight)
h=Math.max(d.bottomLeft,d.bottomRight)
k=S+_+h
k=Math.max(k,l)
a.bottomLeft.css("min-height",h)
a.bottomRight.css("min-height",h)
return t.stop()[s]({minHeight:k})}if("topToBottom"===m){y(t)
if(l>P){w=.67*P
return r.each(function(e,t){return n(i(t),w,o)})}return v(t)}if("centerPanel"!==m){y(t)
return v(t)}}}}
m=o.debounce(function(e){var n,o,s,r,a
null==e&&(e=!0)
l.log("[PERSPECTIVE] Resizing!"+(e?"":" (no animation)"))
i("ul.slides .s-section").each(function(){return b(i(this),e)})
w()
r=[250,500]
a=[]
for(o=0,s=r.length;o<s;o++){n=r[o]
a.push(setTimeout(function(){t()
return f()},n))}return a},50)
r.isIpad()&&!a.isEditMode()&&i("#header-container a").on("touchend",function(){var e,t
e=i(this)
t=e.attr("href")
return window.location=t})
e.scroll(f)
e.resize(function(){m()
return f()})
m()
window.edit_page.Event.subscribe("Section.changed",function(e,t){w()
m(t.target)
return i(t.target).find("img").load(function(){return m(t.target)})})
if(a.isEditMode()){window.edit_page.Event.subscribe("Menu.beforeChange",function(){var e
return e=!0})
window.edit_page.Event.subscribe("Menu.afterChange",function(){var e
e=!1
return f()})}else i("#s-content img").load(m)
return window.edit_page.Event.subscribe("Page.beforeNewOneFadeIn",function(){return m(!1)})}},2501:function(e,t,n){"use strict"
e.exports=n(2305)},2502:function(e,t,n){"use strict"
var i,o
i=n(1)
e.exports={mixins:[],_getLayoutOptions:function(){return[{name:"Media on left",key:"mediaLeft"},{name:"Media on right",key:"mediaRight"},{name:"Centered",key:"center"}]},_getLayout:function(){return this._getLayoutKey("mediaLeft")},_showMap:function(){o.track("Add Map - Contact Form Section - Editor v1")
this.getComponentBinding("slideSettings").sub("display_settings").set("show_map",!0)
return this.savePage()},_hideMap:function(){o.track("Remove Map - Contact Form Section - Editor v1")
this.getComponentBinding("slideSettings").sub("display_settings").set("show_map",!1)
return this.savePage()},_showContactInfo:function(){o.track("Add Contact Info - Contact Form Section - Editor v1")
this.getComponentBinding("slideSettings").sub("display_settings").set("show_info",!0)
return this.savePage()},_hideContactInfo:function(){o.track("Remove Contact Info - Contact Form Section - Editor v1")
this.getComponentBinding("slideSettings").sub("display_settings").set("show_info",!1)
return this.savePage()},_isContactInfoEmpty:function(e){return!(e.address||e.phone||e.hours||e.email)},_fixMapHeight:function(){var e,t,n,i,o,s
n=$("#s-map")
if(n.length){if($(window).width()>=927){t=n.closest(".s-contact-section").find(".s-email-form-inputs-group")
e=t.find(".s-email-form-field")
s=parseInt(e.first().css("padding-top"),10)||0
o=parseInt(e.last().css("padding-bottom"),10)||0
i=t.height()-s-o
i=Math.max(200,i)
return n.height(i).css({"margin-top":s,"margin-bottom":o})}return n.height(250).css({"margin-top":0,"margin-bottom":0})}},render:function(){return this.getTemplate().apply(this)}}},2503:function(e,t,n){"use strict"
var i
i=n(1)
e.exports={mixins:[],_getLayoutOptions:function(){return[{name:"Media on left normal",key:"mediaLeft.normal"},{name:"Media on left full width",key:"mediaLeft.fullWidth"},{name:"Media on left center",key:"mediaLeft.vertical"},{name:"Media on right normal",key:"mediaRight.normal"},{name:"Media on right full width",key:"mediaRight.fullWidth"},{name:"Media on right center",key:"mediaRight.vertical"},{name:"Centered normal",key:"center.normal"},{name:"Centered full width",key:"center.fullWidth"},{name:"Centered vertical",key:"center.vertical"}]},_getStyle:function(){return"fullWidth"===this._getGalleryLayout()?{paddingLeft:0,paddingRight:0}:{}},_getSectionLayout:function(){var e
e=this._getLayoutKey().split(".")[0]
return"center"!==e&&"mediaLeft"!==e&&"mediaRight"!==e?"mediaLeft":e},_getGalleryLayout:function(){return this._getLayoutKey().split(".")[1]||"normal"},render:function(){return this.getTemplate().apply(this)}}},2504:function(e,t,n){"use strict"
e.exports=n(2308)},2505:function(e,t,n){"use strict"
e.exports=n(2309)},2506:function(e,t,n){"use strict"
e.exports=n(2305)},2507:function(e,t,n){"use strict"
e.exports=n(2305)},2508:function(e,t,n){"use strict"
var i,o,s
i=n(6)
s=n(3)
o=n(29)
e.exports={mixins:[],displayName:"SocialFeedSection",componentWillMount:function(){this._contianerClass="s-persp-column"
return this._resize=s.debounce(this._resize,50)},componentDidMount:function(){this._resize()
return i(window).on("resize",this._resize)},componentWillUnmount:function(){return i(window).off("resize",this._resize)},_resize:function(){this._containerClass=o.isSmallScreen()?"s-persp-column":"container"
return this.forceUpdate()},render:function(){return this.getTemplate().apply(this)}}},2509:function(e,t,n){"use strict"
e.exports=n(2309)},2510:function(e,t,n){"use strict"
e.exports=n(2310)},2656:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/perspective/sections/blog/thumbnail/cover.png"},2657:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/perspective/sections/columns/thumbnail/cover.png"},2658:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/perspective/sections/contact_form/thumbnail/cover.jpg"},2659:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/perspective/sections/cta/thumbnail/cover.jpg"},2660:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/perspective/sections/ecommerce/thumbnail/cover.png"},2661:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/perspective/sections/gallery/thumbnail/cover.jpg"},2662:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/perspective/sections/hero/thumbnail/cover.jpg"},2663:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/perspective/sections/html/thumbnail/cover.jpg"},2664:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/perspective/sections/icons/thumbnail/cover.jpg"},2665:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/perspective/sections/info/thumbnail/cover.jpg"},2666:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/perspective/sections/media/thumbnail/cover.jpg"},2667:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/perspective/sections/rows/thumbnail/cover.jpg"},2668:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/perspective/sections/signup_form/thumbnail/cover.jpg"},2669:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/perspective/sections/slider/thumbnail/cover.jpg"},2670:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/perspective/sections/social_feed/thumbnail/cover.jpg"},2671:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/perspective/sections/text/thumbnail/cover.jpg"},2672:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/perspective/sections/title/thumbnail/cover.jpg"},2673:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/perspective/thumbnail.jpg"},2904:function(e,t,n){"use strict"
function i(e,t){var n=s.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=s.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(1),s=n(3),r=n(2061),a=n(2290),l=n(2291),c=n(535),u=n(2292)
e.exports=function(){return o.createElement("div",{className:"s-block-section s-layout-center s-section"},this.isEditMode()?o.createElement("div",{className:"s-section-editor-wrapper",skip:"true"},o.createElement(a,this.getComponentProps("background1"))):null,o.createElement(u,i({className:"s-persp-bg"},this.getBackgroundProps("background1")),this.hasBackgroundVideo("background1")?o.createElement(r,this.getBackgroundProps("background1")):null),o.createElement("div",{className:"s-persp-content"},o.createElement("div",{className:"s-persp-container"},o.createElement("div",{className:"s-persp-column"},o.createElement(l,{section:this,binding:this.getDefaultBinding()})),o.createElement(c,{binding:this.getComponentBinding("block1"),items:this.getComponentBinding("block1").sub("items").get().toArray(),themeFeature:this.getWholeThemeFeature()}))))}},2905:function(e,t,n){"use strict"
function i(e,t){var n=s.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=s.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(1),s=n(3),r=(n(330),n(2061)),a=(n(2290),n(841)),l=n(2291),c=n(2292),u=(n(2297),n(842))
n(2321)
e.exports=function(){return o.createElement(c,i({className:"s-blog-section s-section"},this.getBackgroundProps("background1")),o.createElement(u,this._getWaypointProps()),null,this.hasBackgroundVideo("background1")?o.createElement(r,s.assign({},{layout:this._getLayoutKey()},this.getBackgroundProps("background1"))):null,o.createElement("div",{className:"s-persp-container"},o.createElement("div",{className:"s-persp-column"},o.createElement("div",{className:"container"},o.createElement("div",{className:"columns no-float sixteen"},o.createElement(l,{section:this,binding:this.getDefaultBinding()}))),o.createElement("div",{className:"s-hero-content container "+this.sbUniformTextAlignment("text1 text2")},o.createElement(a.WaypointLazy,this.getComponentProps("blog1"))))))}},2906:function(e,t,n){"use strict"
var i=n(1),o=(n(3),n(2431))
e.exports=function(){return i.createElement("div",{},"\n  ",o.apply(this),"\n")}},2907:function(e,t,n){"use strict"
function i(e,t){return o.createElement("div",{className:"column-image",key:t},o.createElement("img",{src:this._getImageUrl(e.components.media1.image)}),o.createElement("div",{className:"item-text-group"},e.components.text1.value?o.createElement("div",{className:"item-title s-font-heading",dangerouslySetInnerHTML:{__html:e.components.text1.value}}):null,e.components.text3.value?o.createElement("div",{className:"item-body-text s-font-body",dangerouslySetInnerHTML:{__html:e.components.text3.value}}):null))}var o=n(1),s=n(3)
e.exports=function(){return o.createElement("div",{className:"s-columns-thumb s-section-thumb"},o.createElement("div",{className:"title-group "+this._getBackgroundClass(),style:this._getBackgroundStyle()},this.props.content.components.text1.value?o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null,this.props.content.components.text2.value?o.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:this.props.content.components.text2.value}}):null),o.createElement("div",{className:"content-group"},o.createElement("div",{className:"flex-wrapper"},o.createElement.apply(this,["div",{className:"columns-media"},s.map(this._getRepetableList(this.props.content.components.repeatable1.list,2),i.bind(this))]))))}},2908:function(e,t,n){(function(t){"use strict"
function i(e,t){var n=u.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=u.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}function o(){var e=this.getComponentProps("contactInfo1")
return c.createElement("div",{className:"s-contact-section-columns s-three-columns"},c.createElement("div",{className:"s-contact-info-column"},c.createElement(g,u.assign({},{onDelete:this._hideContactInfo},e))),c.createElement("div",{className:"s-google-maps-column"},c.createElement(h,u.assign({},{onDelete:this._hideMap,fixHeight:this._fixMapHeight},e))),c.createElement("div",{className:"s-email-column"},c.createElement(m,u.assign({},{onToggleField:this._fixMapHeight,fieldType:"overlay_label_field"},this.getComponentProps("email1")))))}function s(){var e=this.getComponentProps("contactInfo1")
return c.createElement("div",{className:"s-contact-section-columns s-two-columns"},c.createElement("div",{className:"s-google-maps-column"},c.createElement(h,u.assign({},{onDelete:this._hideMap,fixHeight:this._fixMapHeight},e))),c.createElement("div",{className:"s-email-column"},c.createElement(m,u.assign({},{onToggleField:this._fixMapHeight,fieldType:"overlay_label_field"},this.getComponentProps("email1")))))}function r(){var e=this.getComponentProps("contactInfo1")
return c.createElement("div",{className:"s-contact-section-columns s-three-columns"},c.createElement("div",{className:"s-contact-info-column"},c.createElement(g,u.assign({},{onDelete:this._hideContactInfo},e))),c.createElement("div",{className:"s-google-maps-column"},c.createElement(h,u.assign({},{onDelete:this._hideMap,fixHeight:this._fixMapHeight},e))),c.createElement("div",{className:"s-email-column"},c.createElement(m,u.assign({},{onToggleField:this._fixMapHeight,fieldType:"overlay_label_field"},this.getComponentProps("email1")))))}function a(e){var t=this.getComponentProps("contactInfo1")
return c.createElement("div",{className:"s-contact-section-columns s-two-columns"},!e.get("show_info")||!this.isEditMode()&&this._isContactInfoEmpty(t)?null:c.createElement("div",{className:"s-contact-info-column"},c.createElement(g,u.assign({},{onDelete:this._hideContactInfo},t))),e.get("show_map")?c.createElement("div",{className:"s-google-maps-column"},c.createElement(h,u.assign({},{onDelete:this._hideMap,fixHeight:this._fixMapHeight},this.getComponentProps("contactInfo1")))):null,c.createElement("div",{className:"s-email-column"},c.createElement(m,u.assign({},{onToggleField:this._fixMapHeight,fieldType:"overlay_label_field"},this.getComponentProps("email1")))))}function l(){var e=this.generateComponentBindingIfMissing(["slideSettings","display_settings"])
return c.createElement("div",{className:"s-persp-column s-email-form-container "+("center"==this._getLayout()?"s-layout-center":"s-layout-vertical")},e.get("show_map")||e.get("show_info")?null:c.createElement("div",{},c.createElement(m,u.assign({},{onToggleField:this._fixMapHeight,fieldType:"overlay_label_field"},this.getComponentProps("email1")))),this.isEditMode()&&e.get("show_map")&&e.get("show_info")?c.createElement("div",{},o.apply(this,[e])):null,!this.isEditMode()&&e.get("show_map")&&e.get("show_info")&&this._isContactInfoEmpty(this.getComponentProps("contactInfo1"))?c.createElement("div",{},s.apply(this,[e])):null,!this.isEditMode()&&e.get("show_map")&&e.get("show_info")&&!this._isContactInfoEmpty(this.getComponentProps("contactInfo1"))?c.createElement("div",{},r.apply(this,[e])):null,!e.get("show_map")&&e.get("show_info")||e.get("show_map")&&!e.get("show_info")?c.createElement("div",{},a.apply(this,[e])):null,!this.isEditMode()||e.get("show_map")&&e.get("show_info")?null:c.createElement("div",{className:"s-black-button-container"},e.get("show_map")?null:c.createElement("div",{className:"s-small-black-button",onClick:this._showMap},t("Editor|Add Map")),e.get("show_info")?null:c.createElement("div",{className:"s-small-black-button",onClick:this._showContactInfo},t("Editor|Add Contact Info"))))}var c=n(1),u=n(3),d=(n(14),n(2297),n(330),n(2291)),p=n(2061),m=(n(2290),n(839)),f=n(2292),h=(n(12),n(2080)),g=n(2077)
e.exports=function(){return c.createElement("div",{className:"s-section s-contact-section s-layout-"+this._getLayout()},null,c.createElement(f,i({className:"s-persp-bg"},this.getBackgroundProps("background1")),this.hasBackgroundVideo("background1")?c.createElement(p,this.getBackgroundProps("background1")):null,c.createElement("div",{className:"s-persp-container"},"center"!=this._getLayout()?c.createElement(d,{section:this,binding:this.getDefaultBinding()}):null)),c.createElement("div",{className:"s-persp-content"},c.createElement("div",{className:"s-persp-container"},"center"==this._getLayout()?c.createElement("div",{className:"s-persp-column"},c.createElement(d,{section:this,binding:this.getDefaultBinding()})):null,l.apply(this,[]))))}}).call(t,n(9))},2909:function(e,t,n){(function(t){"use strict"
var i=n(1)
n(3)
e.exports=function(){return i.createElement("div",{className:"s-contact-form-thumb s-section-thumb"},i.createElement("div",{className:"title-group "+this._getBackgroundClass(),style:this._getBackgroundStyle()},this.props.content.components.text1.value?i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null,this.props.content.components.text2.value?i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:this.props.content.components.text2.value}}):null),i.createElement("div",{className:"content-group"},i.createElement("div",{className:"flex-wrapper"},i.createElement("div",{className:"form-thumb s-font-body"},i.createElement("input",{placeholder:t("Sections|"+this.props.content.components.email1.name_label)}),i.createElement("input",{placeholder:t("Sections|"+this.props.content.components.email1.email_label)}),i.createElement("textarea",{placeholder:t("Sections|"+this.props.content.components.email1.message_label)}),i.createElement("div",{className:"button"},t("Sections|"+this.props.content.components.email1.submit_label))))))}}).call(t,n(9))},2910:function(e,t,n){"use strict"
var i=n(1),o=(n(3),n(2313))
e.exports=function(){return i.createElement("div",{},"\n  ",o.apply(this),"\n")}},2911:function(e,t,n){"use strict"
function i(e,t){var n=s.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=s.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(1),s=n(3),r=n(2061),a=n(2291),l=(n(836),n(12),n(2290)),c=n(2322),u=n(2292)
e.exports=function(){return o.createElement(u,i({className:"s-donation-section s-layout-center s-section"},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1")),this.isEditMode()?o.createElement("div",{className:"s-section-editor-wrapper",skip:"true"},this.getThemeFeature("disableBackgrounds")?null:o.createElement(l,this.getComponentProps("background1"))):null,this.hasBackgroundVideo("background1")?o.createElement(r,s.assign({},{layout:this._getLayoutKey()},this.getBackgroundProps("background1"))):null,o.createElement("div",{className:"s-persp-content"},o.createElement("div",{className:"s-persp-container"},o.createElement(a,{section:this,binding:this.getDefaultBinding()}),o.createElement("div",{className:"s-ecommerce-container"},o.createElement(c,s.assign({},{sbClass:this.sbUniformTextAlignment("text1 text2")},this.getComponentProps("donation1"))),null))))}},2912:function(e,t,n){"use strict"
var i=n(1),o=n(3),s=(n(330),n(2061),n(2290),n(2291)),r=(n(2069),n(836),n(12),n(2297)),a=n(2323),l=n(2065)
e.exports=function(){return i.createElement("div",{className:"s-section s-store-section"},this.isEditMode()?i.createElement("div",{className:"s-section-editor-wrapper",skip:"true"},this._showLayoutButton()?i.createElement(r,o.assign({},{layoutOptions:this._getLayoutOptions()},this._getLayoutProps())):null,i.createElement(a,this.getComponentProps("ecommerce1"))):null,i.createElement("div",{className:"s-persp-container"},i.createElement("div",{className:"container"},i.createElement(s,{section:this,binding:this.getDefaultBinding()}),i.createElement("div",{className:"s-hero-content "+this.sbUniformTextAlignment("text1 text2")},i.createElement(l,o.assign({},{sbClass:this.sbUniformTextAlignment("text1 text2")},this.getComponentProps("ecommerce1"))),null))))}},2913:function(e,t,n){"use strict"
function i(){var e=this.getComponentBinding("copyright"),t=this.getComponentBinding("socialMedia")
return o.createElement("div",{className:"s-footer-section s-section"},this.isEditMode()?o.createElement("div",{className:"s-section-editor-wrapper",skip:"true"},o.createElement(u,s.assign({},{layoutOptions:this._getLayoutOptions()},this._getFooterLayoutProps()))):null,"vertical"==this._getLayout()?o.createElement("div",{className:"container s-layout-vertical"},o.createElement("div",{className:"columns offset-two row twelve "+this.sbUniformTextAlignment("copyright")},o.createElement("div",{},o.createElement(l.WaypointLazy,s.assign({},{binding:t,")":!0},t.toJS()))),o.createElement("div",{className:"s-footer-text"},o.createElement(a,s.assign({},{textType:"body",binding:e},e.get().toObject()))),this.props.showTermsLink?o.createElement(c,{className:"s-font-body"}):null)):null,"horizontal"==this._getLayout()?o.createElement("div",{className:"container s-layout-horizontal"},o.createElement("div",{className:"columns offset-two row six"},o.createElement("div",{className:this.sbUniformTextAlignment("copyright")},o.createElement(l.WaypointLazy,s.assign({},{binding:t,")":!0},t.toJS())))),o.createElement("div",{className:"columns row six"},o.createElement("div",{className:"right-align s-footer-text"},this.isEditMode()||e.get("value")?o.createElement(a,s.assign({},{textType:"body",binding:e},e.get().toObject())):null,this.props.showTermsLink?o.createElement(c,{className:r("s-font-body",{"s-compact":!this.isEditMode()&&!e.get("value")})+" "+this.sbUniformTextAlignment("copyright")}):null))):null,"grid"==this._getLayout()?o.createElement("div",{className:"container s-layout-grid"},this.sbHasContent("text1")?o.createElement("div",{className:"columns half-fixed no-float row three"},o.createElement("div",{className:"left-align s-footer-text"},o.createElement(a,s.assign({},{textType:"body",applyWordBreaks:"true",binding:this.getComponentBinding("text1")},this.getComponentProps("text1"))))):null,this.sbHasContent("text2")?o.createElement("div",{className:"columns half-fixed no-float row three"},o.createElement("div",{className:"left-align s-footer-text"},o.createElement(a,s.assign({},{textType:"body",applyWordBreaks:"true",binding:this.getComponentBinding("text2")},this.getComponentProps("text2"))))):null,this.sbHasContent("text3")?o.createElement("div",{className:"columns half-fixed no-float row three"},o.createElement("div",{className:"left-align s-footer-text"},o.createElement(a,s.assign({},{textType:"body",applyWordBreaks:"true",binding:this.getComponentBinding("text3")},this.getComponentProps("text3"))))):null,this.sbHasContent("socialMedia")?o.createElement("div",{className:"columns four half-fixed no-float right-align row"},o.createElement("div",{},o.createElement(l.WaypointLazy,s.assign({},{binding:t,")":!0},t.toJS()))),this.sbHasContent("copyright")?null:o.createElement("div",{},this.props.showTermsLink?o.createElement(c,{className:r("s-font-body",{"s-compact":!this.isEditMode()&&!e.get("value")})+" "+this.sbUniformTextAlignment("text1")}):null)):null,this.sbHasContent("socialMedia")?null:o.createElement("div",{className:"columns four half-fixed no-float right-align row s-text-color-gray"},this.sbHasContent("copyright")?o.createElement("div",{className:"s-footer-text"},o.createElement(a,s.assign({},{textType:"body",binding:e},e.get().toObject()))):null,this.props.showTermsLink?o.createElement("div",{className:"s-footer-text"},this.props.showTermsLink?o.createElement(c,{className:"s-font-body"}):null):null),this.sbHasContent("copyright")&&this.sbHasContent("socialMedia")?o.createElement("div",{className:"has-copy-right"},o.createElement("div",{className:"columns no-float row thirteen"},o.createElement("div",{className:"separate-line"})),o.createElement("div",{className:"columns no-float row s-text-color-gray "+this.sbUniformTextAlignment("copyright")+" "+s.keys(s.pick({thirteen:!this.props.showTermsLink,seven:this.props.showTermsLink},s.identity)).join(" ")},o.createElement("div",{className:"left-align s-footer-text"},o.createElement(a,s.assign({},{textType:"body",binding:e},e.get().toObject())))),this.props.showTermsLink?o.createElement("div",{className:"columns no-float row s-text-color-gray six"},o.createElement("div",{className:"right-align s-footer-text",style:{marginTop:"-10px"}},this.props.showTermsLink?o.createElement(c,{className:"s-font-body"}):null)):null):null):null)}var o=n(1),s=n(3),r=n(14),a=n(330),l=n(892),c=n(2316),u=n(2297)
n(12)
e.exports=function(){return this.props.showFooter?i.apply(this,[]):null}},2914:function(e,t,n){"use strict"
function i(e,t){var n=s.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=s.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(1),s=n(3),r=(n(2297),n(330),n(2291)),a=n(2061),l=(n(2290),n(2307)),c=n(2320),u=n(2292)
e.exports=function(){return o.createElement("div",{className:"s-section s-gallery-section s-layout-"+this._getSectionLayout()+" s-gallery-"+this._getGalleryLayout()},null,o.createElement(u,i({className:"s-persp-bg"},this.getBackgroundProps("background1")),this.hasBackgroundVideo("background1")?o.createElement(a,this.getBackgroundProps("background1")):null,o.createElement("div",{className:"s-persp-container"},"center"!=this._getSectionLayout()?o.createElement(r,{section:this,binding:this.getDefaultBinding()}):null)),o.createElement("div",{className:"s-persp-content"},o.createElement("div",{className:"s-persp-container",style:this._getStyle()},"center"==this._getSectionLayout()?o.createElement("div",{className:"s-persp-column"},o.createElement(r,{section:this,binding:this.getDefaultBinding()})):null,"fullWidth"!=this._getGalleryLayout()?o.createElement("div",{className:"s-persp-column",style:{transition:"none"}},"vertical"!=this._getGalleryLayout()?o.createElement(l,s.assign({},{layout:this._getGalleryLayout(),isArranging:this.isState("editor"),toggleEditor:this.toggleEditor},this.getComponentProps("gallery1"))):null,"vertical"==this._getGalleryLayout()?o.createElement(c,s.assign({},{layout:this._getGalleryLayout(),isArranging:this.isState("editor"),toggleEditor:this.toggleEditor},this.getComponentProps("gallery1"))):null):null,"fullWidth"==this._getGalleryLayout()?o.createElement("div",{className:"full-width-gallery"},"vertical"!=this._getGalleryLayout()?o.createElement(l,s.assign({},{layout:this._getGalleryLayout(),isArranging:this.isState("editor"),toggleEditor:this.toggleEditor},this.getComponentProps("gallery1"))):null):null)))}},2915:function(e,t,n){"use strict"
function i(e,t){return o.createElement("div",{className:"gallery-image",key:t},o.createElement("img",{src:this._getImageUrl(e,!0)}))}var o=n(1),s=n(3)
e.exports=function(){return o.createElement("div",{className:"s-gallery-thumb s-section-thumb"},o.createElement("div",{className:"title-group "+this._getBackgroundClass(),style:this._getBackgroundStyle()},this.props.content.components.text1.value?o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null,this.props.content.components.text2.value?o.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:this.props.content.components.text2.value}}):null),o.createElement("div",{className:"content-group"},o.createElement("div",{className:"flex-wrapper"},o.createElement.apply(this,["div",{className:"gallery-media"},s.map(this._getRepetableList(this.props.content.components.gallery1.sources,6),i.bind(this))]))))}},2916:function(e,t,n){"use strict"
var i=n(1),o=(n(3),n(2438))
e.exports=function(){return i.createElement("div",{},"\n  ",o.apply(this),"\n")}},2917:function(e,t,n){"use strict"
var i=n(1)
n(3)
e.exports=function(){return i.createElement("div",{className:"s-hero-thumb s-section-thumb "+this._getBackgroundClass(),style:this._getBackgroundStyle()},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"media"},i.createElement("img",{src:this.props.content.components.media1.image.url})),i.createElement("div",{className:"title-group"},this.props.content.components.text1.value?i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null,this.props.content.components.text2.value?i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:this.props.content.components.text2.value}}):null),i.createElement("div",{className:"buttons"},i.createElement("img",{src:this.props.content.components.image1.url,style:{width:"50px",marginRight:"10px"}}),i.createElement("img",{src:this.props.content.components.image2.url,style:{width:"50px"}})))))}},2918:function(e,t,n){"use strict"
function i(e,t){var n=s.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=s.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(1),s=n(3),r=(n(330),n(2061)),a=n(2290),l=n(2097),c=n(2291),u=n(2292)
e.exports=function(){return o.createElement(u,i({className:"s-html-section s-section"},this.getBackgroundProps("background1")),this.isEditMode()?o.createElement("div",{className:"s-section-editor-wrapper",skip:"true"},o.createElement(a,this.getComponentProps("background1"))):null,this.hasBackgroundVideo("background1")?o.createElement(r,s.assign({},{layout:this._getLayoutKey()},this.getBackgroundProps("background1"))):null,o.createElement("div",{className:"s-persp-container"},o.createElement("div",{className:"s-persp-column"},o.createElement(c,{section:this,binding:this.getDefaultBinding()}),o.createElement("div",{className:"s-hero-content "+this.sbUniformTextAlignment("text1 text2")},o.createElement(l,this.getComponentProps("html1"))))))}},2919:function(e,t,n){"use strict"
function i(e,t){var n=s.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=s.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(1),s=n(3),r=(n(2325),n(330),n(2291)),a=n(2061),l=(n(2290),n(2292))
e.exports=function(){return o.createElement("div",{className:"s-section s-icons-section s-layout-"+this._getFirstLayout()},null,o.createElement(l,i({className:"s-persp-bg"},this.getBackgroundProps("background1")),this.hasBackgroundVideo("background1")?o.createElement(a,this.getBackgroundProps("background1")):null,o.createElement("div",{className:"s-persp-container"},"center"!=this._getFirstLayout()?o.createElement(r,{section:this,binding:this.getDefaultBinding()}):null)),o.createElement("div",{className:"s-persp-content"},o.createElement("div",{className:"s-persp-container"},"center"==this._getFirstLayout()?o.createElement("div",{className:"s-persp-column"},o.createElement(r,{contentCheck:"repeatable1",section:this,binding:this.getDefaultBinding()})):null,o.createElement("div",{className:this.sbUniformTextAlignment("text1 text2")},"\n        ",this._renderRepeatable("repeatable1"),"\n      "))))}},2920:function(e,t,n){"use strict"
function i(e,t){return o.createElement("div",{className:"icon",key:t},o.createElement("img",{src:this._getImageUrl(e.components.image1)}),e.components.text1.value?o.createElement("div",{className:"item-subtitle",dangerouslySetInnerHTML:{__html:e.components.text1.value}}):null)}var o=n(1),s=n(3),r=n(331)
e.exports=function(){return o.createElement("div",{className:"s-icons-thumb s-section-thumb"},o.createElement("div",{className:"title-group "+this._getBackgroundClass(),style:this._getBackgroundStyle()},this.props.content.components.text1.value?o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null,this.props.content.components.text2.value?o.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:this.props.content.components.text2.value}}):null),o.createElement("div",{className:"content-group"},o.createElement("div",{className:"flex-wrapper"},o.createElement(r,{},o.createElement.apply(this,["div",{className:"icons-media s-font-body"},s.map(this._getRepetableList(this.props.content.components.repeatable1.list,4),i.bind(this))]),o.createElement("div",{className:"icons-media s-font-body"},o.createElement("div",{className:"icon"},o.createElement("img",{src:"//o0m4okv24.qnssl.com/static/icons/black/wechat-icon.png"}),o.createElement("div",{className:"item-subtitle"},"微信")),o.createElement("div",{className:"icon"},o.createElement("img",{src:"//o0m4okv24.qnssl.com/static/icons/black/weibo-icon.png"}),o.createElement("div",{className:"item-subtitle"},"微博")))))))}},2921:function(e,t,n){"use strict"
var i=n(1),o=(n(3),n(2440))
e.exports=function(){return i.createElement("div",{},"\n  ",o.apply(this),"\n")}},2922:function(e,t,n){"use strict"
function i(e,t){return o.createElement("div",{className:"info-box info-container",key:t},e.components.text1.value?o.createElement("div",{className:"item-title s-font-heading",dangerouslySetInnerHTML:{__html:e.components.text1.value}}):null,e.components.text2.value?o.createElement("div",{className:"item-body-text s-font-body",dangerouslySetInnerHTML:{__html:e.components.text2.value}}):null)}var o=n(1),s=n(3)
e.exports=function(){return o.createElement("div",{className:"s-info-thumb s-section-thumb"},o.createElement("div",{className:"content-group"},o.createElement("div",{className:"flex-wrapper"},o.createElement.apply(this,["div",{className:"info-boxes"},s.map(this._getRepetableList(this.props.content.components.repeatable1.list,4),i.bind(this))]))),o.createElement("div",{className:"title-group "+this._getBackgroundClass(),style:this._getBackgroundStyle()},this.props.content.components.text1.value?o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null,this.props.content.components.text2.value?o.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:this.props.content.components.text2.value}}):null))}},2923:function(e,t,n){"use strict"
var i=n(1),o=(n(3),n(2431))
e.exports=function(){return i.createElement("div",{},"\n  ",o.apply(this),"\n")}},2924:function(e,t,n){"use strict"
function i(e,t){return o.createElement("div",{className:"media-container",key:t},o.createElement("div",{className:"media-img"},o.createElement("img",{src:this._getImageUrl(e.components.media1.image)})),e.components.text1.value?o.createElement("div",{className:"item-body-text s-font-body",dangerouslySetInnerHTML:{__html:e.components.text1.value}}):null)}var o=n(1),s=n(3)
e.exports=function(){return o.createElement("div",{className:"no-bg s-media-thumb s-section-thumb"},o.createElement("div",{className:"title-group "+this._getBackgroundClass(),style:this._getBackgroundStyle()},this.props.content.components.text1.value?o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null,this.props.content.components.text2.value?o.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:this.props.content.components.text2.value}}):null),o.createElement("div",{className:"content-group"},o.createElement.apply(this,["div",{className:"flex-wrapper"},s.map(this.props.content.components.repeatable1.list,i.bind(this))])))}},2925:function(e,t,n){"use strict"
function i(e,t){return a.createElement("li",l.assign({},{key:t},this._getNavItemProps(e)),a.createElement("a",{className:"s-nav-item",href:this.getSectionHash(t)},a.createElement("span",{className:"s-font-body"},e.name)))}function o(e,t,n){return a.createElement("li",{},a.createElement("a",{className:l.keys(l.pick({"s-nav-item":!0,selected:n.selected},l.identity)).join(" "),target:n.newTarget?"_blank":"_self",href:n.path},a.createElement("span",{className:"s-font-body"},n.title)))}function s(e,t){return a.createElement("li",{key:t},e.items?a.createElement("div",{className:l.keys(l.pick({"s-nav-item":!0,"s-nav-dropdown s-nav-dropdown-right":!0},l.identity)).join(" ")},a.createElement("a",{className:"s-nav-item "+l.keys(l.pick({selected:e.selected},l.identity)).join(" ")},a.createElement("span",{className:"s-font-body"},e.title+" ","\n              ",a.createElement("i",{className:"fa fa-angle-right"}))),a.createElement.apply(this,["ul",{className:l.keys(l.pick({"s-nav-item":!0,selected:e.selected},l.identity)).join(" ")},l.map(e.items,o.bind(this,e,t))])):null,e.items?null:a.createElement("a",{className:l.keys(l.pick({"s-nav-item":!0,selected:e.selected},l.identity)).join(" "),href:e.path,target:e.newTarget?"_blank":"_self"},a.createElement("span",{className:"s-font-body"},e.title)))}function r(e,t){return a.createElement(c,l.assign({},{updateTimeStamp:this._getTimestampForLinks(),key:t},e.getIn(["components","link"]).toObject()))}var a=n(1),l=n(3),c=(n(330),n(883),n(333),n(2290),n(2061),n(2333)),u=n(16)
e.exports=function(){return this.props.showNav?a.createElement("div",{className:"s-navbar-section navigator side-header strikingly-fixed"+(u.getIsMultiPage()?" multipage":""),id:"header-container"},a.createElement("div",{className:"header-inner"},a.createElement.apply(this,["ul",{className:"s-nav"},this.props.isMultiPage?null:l.map(this.props.navbarItemData,i.bind(this)),this.props.isMultiPage?l.map(this.props.navbarItemData,s.bind(this)):null,l.map(this.getBinding("submenu").get().toArray(),r.bind(this))]))):null}},2926:function(e,t,n){"use strict"
var i=n(1),o=(n(3),n(2431))
e.exports=function(){return i.createElement("div",{},"\n  ",o.apply(this),"\n")}},2927:function(e,t,n){"use strict"
function i(e,t){return o.createElement("div",{className:"row-container",key:t},o.createElement("div",{className:"rows-img"},o.createElement("img",{src:this._getImageUrl(e.components.media1.image)})),o.createElement("div",{className:"item-text-group"},e.components.text1.value?o.createElement("div",{className:"item-title s-font-heading",dangerouslySetInnerHTML:{__html:e.components.text1.value}}):null,e.components.text3.value?o.createElement("div",{className:"item-body-text s-font-body",dangerouslySetInnerHTML:{__html:e.components.text3.value}}):null))}var o=n(1),s=n(3)
e.exports=function(){return o.createElement("div",{className:"no-bg s-rows-thumb s-section-thumb "+this._getSectionTypeClass()},o.createElement("div",{className:"content-group"},o.createElement.apply(this,["div",{className:"flex-wrapper"},s.map(this.props.content.components.repeatable1.list,i.bind(this))])),o.createElement("div",{className:"title-group "+this._getBackgroundClass(),style:this._getBackgroundStyle()},this.props.content.components.text1.value?o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null,this.props.content.components.text2.value?o.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:this.props.content.components.text2.value}}):null))}},2928:function(e,t,n){"use strict"
var i=n(1),o=(n(3),n(2438))
e.exports=function(){return i.createElement("div",{},"\n  ",o.apply(this),"\n")}},2929:function(e,t,n){"use strict"
function i(e,t){var n=c.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=c.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}function o(e,t,n){var i=this._isBannerSection()
return l.createElement("div",{className:"s-section-editor-wrapper",skip:"true"},i?null:l.createElement(m,this.getComponentProps("background1",e.sub(n))),i?l.createElement(h,c.assign({},{warnningInfo:this._imageRatioWarnning(n),setStateFunc:this.setStateFunc},this.getComponentProps("background1",e.sub(n)))):null)}function s(e,t,n){var s=this._getSliderLayout(n)
return l.createElement(v,i({className:"item "+s,key:n},this.getSliderBackgroundProps("background1",e.sub(n),s)),this.isEditMode()?o.apply(this,[e,t,n,s]):null,this.hasBackgroundVideo("background1",e.sub(n))?l.createElement(f,this.getBackgroundProps("background1",e.sub(n))):null,l.createElement("div",{className:"inner"},"noForeground"!==s?l.createElement("div",{className:"s-persp-container "+s},l.createElement("div",{className:"s-persp-column"},this.sbHasContent("media1",{parentBinding:e.sub(n)})?l.createElement("div",{className:"s-media-group"},l.createElement("div",{className:"media-wrapper"},l.createElement(d,c.assign({},{size:"medium"},this.getReduxComponentProps("media1",e.sub(n)))))):null,l.createElement("div",{className:"s-title-group"},l.createElement("div",{className:"s-title"},l.createElement(u,c.assign({},{tagName:"h2",textType:"title"},this.getComponentProps("text1",e.sub(n))))),l.createElement("div",{className:"s-subtitle"},l.createElement(u,c.assign({},{tagName:"h4",textType:"heading"},this.getComponentProps("text2",e.sub(n)))))),l.createElement("div",{className:"s-slider-content "+this.sbUniformTextAlignment("text1 text2",{parentBinding:e.sub(n)})},l.createElement(p,this.getComponentProps("button1",e.sub(n)))))):null))}function r(e,t,n){return s.apply(this,[e,t,n])}function a(){var e=this.getRepeatableBinding("slider1")
return l.createElement.apply(this,[g,c.assign({},{fullscreen:this.getThemeFeature("fullscreenSlider"),index:this.props.index,getSliderLayouts:this._getSliderLayoutArr},this.getComponentProps("slider1")),c.map(e.get().toArray(),r.bind(this,e))])}var l=n(1),c=n(3),u=n(330),d=n(835),p=n(883),m=n(2290),f=(n(2291),n(2061)),h=n(2083),g=n(2086),v=n(2292)
e.exports=function(){return l.createElement("div",{className:"s-section s-slider-section"},a.apply(this,[]))}},2930:function(e,t,n){"use strict"
var i=n(1),o=(n(3),n(330),n(2291)),s=(n(836),n(2069))
e.exports=function(){return i.createElement("div",{className:"s-section s-social-feed-section"},i.createElement("div",{className:"s-persp-container"},i.createElement("div",{className:this._containerClass},i.createElement(o,{section:this,binding:this.getDefaultBinding()}),i.createElement("div",{className:"s-hero-content "+this.sbUniformTextAlignment("text1 text2")},i.createElement(s,{componentName:"socialFeedComponent",componentProps:this.getComponentProps("social_feed1"),binding:this.getComponentBinding("social_feed1")}),null))))}},2931:function(e,t,n){"use strict"
var i=n(1),o=(n(3),n(2440))
e.exports=function(){return i.createElement("div",{},"\n  ",o.apply(this),"\n")}},2932:function(e,t,n){(function(t){"use strict"
var i=n(1)
n(3)
e.exports=function(){return i.createElement("div",{className:"s-section-thumb s-text-thumb "+this._getBackgroundClass(),style:this._getBackgroundStyle()},i.createElement("div",{className:"text-container top-left"},i.createElement("div",{className:"s-font-title title"},t("Sections|Freedom")),i.createElement("div",{className:"s-font-body subtitle"},"Add a line here.")),i.createElement("div",{className:"bottom-left text-container"},i.createElement("div",{className:"s-font-title title"},t("Sections|Independence")),i.createElement("div",{className:"s-font-body subtitle"},t("Sections|Use a text section to describe your values, show more info, summarize a topic, or tell a story."))),i.createElement("div",{className:"text-container top-right"},i.createElement("div",{className:"s-font-title title"},t("Sections|Passion")),i.createElement("div",{className:"s-font-body subtitle"},t("Sections|Use a text section to describe your values, show more info, summarize a topic, or tell a story."))))}}).call(t,n(9))},2933:function(e,t,n){"use strict"
var i=n(1),o=(n(3),n(2313))
e.exports=function(){return i.createElement("div",{},"\n  ",o.apply(this),"\n")}}})
;
